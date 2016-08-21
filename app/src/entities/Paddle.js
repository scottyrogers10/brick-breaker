define(function () {
    var TYPE= "paddle";

    var paddle = {
        create: function (game) {
            var entity = new Foundation.Entity(TYPE);

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

            entity.add.component("dpad", new Foundation.Component.DPad({
                left: 37,
                top: 38,
                right: 39,
                bottom: 40
            }));

            entity.add.component("physics", new Foundation.Component.Physics({
                velocityX: 4,
                velocityY: 0
            }));

            entity.add.component("restraint", new Foundation.Component.Restraint({
                left: 0,
                top: 0,
                right: game.width,
                bottom: game.height
            }));

            return entity;
        }
    };

    return paddle;
});
