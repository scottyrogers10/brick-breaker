define(function () {
    var TYPE= "brick"

    var brick = {
        init: function(game){
            var state = null;
            var collision = null;

            //TODO: This needs to be looked at and handled better.

            game.systems.forEach(function (system) {
                if (system.type == "state") {
                    state = system;
                }

                if (system.type == "collision") {
                    collision = system;
                }
            });

            state.on(TYPE, {
                idle: {
                    update: function (entity) {
                        return;
                    }
                },
                destroyed: {
                    init: function (entity) {
                        game.remove.entity(entity);
                    }
                }
            });

            collision.on(TYPE, "ball", function(entities){
                var brickEntity = entities["brick"];

                brickEntity.components.state.name = "destroyed";
            });
        },
        create: function (game, x, y) {
        var entity = new Foundation.Entity(TYPE);

        entity.add.component("position", new Foundation.Component.Position({
            x: x,
            y: y
        }));

        entity.add.component("size", new Foundation.Component.Size({w: 64, h: 32}));

        entity.add.component("sprite", new Foundation.Component.Sprite({
            img: game.spriteSheet,
            srcX: 0,
            srcY: 29,
            srcW: 64,
            srcH: 32
        }));

        // entity.add.component("spriteAnimation", new Foundation.Component.SpriteAnimation({
        //     idle: {
        //         frames: [new Foundation.Component.Sprite({img: game.spriteSheet, srcX: 0, srcY: 29, srcW: 64, srcH: 32})],
        //         currentFrame: 0
        //     },
        //     hit: {
        //         frames: [new Foundation.Component.Sprite({img: game.spriteSheet, srcX: 0, srcY: 70, srcW: 67, srcH: 34}),
        //                  new Foundation.Component.Sprite({img: game.spriteSheet, srcX: 72, srcY: 69, srcW: 70, srcH: 36}),
        //                  new Foundation.Component.Sprite({img: game.spriteSheet, srcX: 147, srcY: 67, srcW: 74, srcH: 39}),
        //                  new Foundation.Component.Sprite({img: game.spriteSheet, srcX: 226, srcY: 71, srcW: 78, srcH: 39}),
        //                  new Foundation.Component.Sprite({img: game.spriteSheet, srcX: 310, srcY: 74, srcW: 85, srcH: 45})],
        //         currentFrame: 0
        //     }
        // }, 3));

        entity.add.component("collision", new Foundation.Component.Collision([
            "ball"
        ]));

        entity.add.component("state", new Foundation.Component.State("idle"));

        return entity;
    }
};

    return brick
});
