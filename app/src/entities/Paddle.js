define(function () {
    var paddle = function (game) {
        var entity = new Foundation.Entity("paddle");

        entity.add.component("position", new Foundation.Component.Position({
            x: ((game.width / 2) - 52),
            y: (game.height - 34)
        }));

        entity.add.component("size", new Foundation.Component.Size({w: 104, h: 24}));

        entity.add.component("sprite", new Foundation.Component.Sprite({
            img: game.spriteSheet,
            srcX: 38,
            srcY: 0,
            srcW: 104,
            srcH: 24
        }));

        entity.add.component("dpad", new Foundation.Component.DPad());

        entity.add.component("physics", new Foundation.Component.Physics({
            velocityX: 4
        }));

        entity.add.component("collision", new Foundation.Component.Collision({
            boundaries: {
                left: 0,
                top: 0,
                right: game.width,
                bottom: game.height
            }
        }));

        return entity;
    };

    return paddle;
});
