define(function () {
    var TYPE= "ball"

    var ball = {
        init: function(game){
            var state = null;
            var collision = null;

            game.systems.forEach(function (system) {
                if (system.type == "state") {
                    state = system;
                }

                if (system.type == "collision") {
                    collision = system;
                }
            });

            state.on(TYPE, {
                moving: {
                    update: function (entity) {
                        entity.components.position.y += entity.components.physics.velocityY;
                    }
                },
                collidingWithPaddle: {
                    init: function (entity) {
                        entity.components.physics.velocityY = -(entity.components.physics.velocityY);
                    },
                    update: function (entity) {
                        entity.components.position.y += entity.components.physics.velocityY;
                        entity.components.state.name = "moving";
                    }
                }
            });

            collision.on(TYPE, "paddle", function(entities){
                var ballEntity = entities["ball"];
                ballEntity.components.state.name = "collidingWithPaddle";
            });
        },
        create: function (game) {
        var entity = new Foundation.Entity(TYPE);

        entity.add.component("position", new Foundation.Component.Position({
            x: (game.width / 2) - 11,
            y: 0
        }));

        entity.add.component("size", new Foundation.Component.Size({w: 22, h: 22}));

        entity.add.component("sprite", new Foundation.Component.Sprite({
            img: game.spriteSheet,
            srcX: 0,
            srcY: 0,
            srcW: 22,
            srcH: 22
        }));

        entity.add.component("physics", new Foundation.Component.Physics({
            velocityX: 4,
            velocityY: 4
        }))

        entity.add.component("collision", new Foundation.Component.Collision([
            "paddle"
        ]));

        entity.add.component("state", new Foundation.Component.State("moving"));

        return entity;
        }
    };

    return ball
});
