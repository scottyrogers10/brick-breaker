define(function () {
    var TYPE= "ball"

    var ball = {
        init: function(game){
            game.systems.state.on(TYPE, {
                moving: {
                    update: function (entity) {
                        entity.components.position.y += entity.components.velocity.velY;
                        entity.components.position.x += entity.components.velocity.velX;
                    }
                }
            });

            game.systems.collision.on(TYPE, "paddle", function(entities){
                var ballEntity = entities["ball"];
                var paddleEntity = entities["paddle"];

                var ballPosition = ballEntity.components.position;
                var ballSize = ballEntity.components.size;
                var paddlePosition = paddleEntity.components.position;
                var paddleSize = paddleEntity.components.size;

                if (ballPosition.x < paddlePosition.x) {
                    ballEntity.components.velocity.velX = -7;
                }

                if (ballPosition.x + ballSize.w > paddlePosition.x + paddleSize.w &&
                    ballPosition.x < paddlePosition.x + paddleSize.w) {
                    ballEntity.components.velocity.velX = 7;
                }

                //TODO: Still buggy if ball is hit on side, below paddle. Find a solution.

                if (ballPosition.y + ballSize.h > paddlePosition.y + 2) {
                    ballEntity.components.velocity.velY = -6;
                    ballEntity.components.position.y += ballEntity.components.velocity.velY;
                } else {
                    ballEntity.components.velocity.velY = -(ballEntity.components.velocity.velY);
                    ballEntity.components.position.y += ballEntity.components.velocity.velY;
                }
            });

            var lastCollisionTick = 0;

            game.systems.collision.on(TYPE, "brick", function(entities){
                var ballEntity = entities["ball"];
                var currentCollisionTick = game.tick;

                if (lastCollisionTick !== currentCollisionTick) {
                    ballEntity.components.velocity.velY = -(ballEntity.components.velocity.velY);
                    ballEntity.components.position.y += ballEntity.components.velocity.velY;

                    lastCollisionTick = currentCollisionTick;
                }
            });

            game.systems.collision.on(TYPE, "wall", function (entities) {
                var ballEntity = entities["ball"];
                var wallEntity = entities["wall"];

                if (wallEntity.components.size.h > 1) {
                    ballEntity.components.velocity.velX = -(ballEntity.components.velocity.velX);
                    ballEntity.components.position.x += ballEntity.components.velocity.velX;
                } else {
                    ballEntity.components.velocity.velY = -(ballEntity.components.velocity.velY);
                    ballEntity.components.position.y += ballEntity.components.velocity.velY;
                }
            });
        },
        create: function (game) {
        var entity = new Foundation.Entity(TYPE);

        entity.add.component(new Foundation.Component.Position({
            x: 0,
            y: 185
        }));

        entity.add.component(new Foundation.Component.Size({w: 22, h: 22}));

        entity.add.component(new Foundation.Component.Sprite({
            img: game.spriteSheet,
            srcX: 0,
            srcY: 0,
            srcW: 22,
            srcH: 22
        }));

        entity.add.component(new Foundation.Component.Velocity({
            velX: 2,
            velY: 6
        }));

        entity.add.component(new Foundation.Component.Collidable([
            "paddle",
            "brick",
            "wall"
        ]));

        entity.add.component(new Foundation.Component.State("moving"));

        return entity;
        }
    };

    return ball
});
