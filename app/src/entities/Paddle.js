define([
    "lib/axis-js/Axis"
], function (Axis) {
    var paddle = function (game) {
        var entity = new Axis.Entity("paddle");

        var position = new Axis.Component.Position();
        position.x = (game.getCameraByCanvasId("main-camera").width / 2) - 52;
        position.y = game.getCameraByCanvasId("main-camera").height - 36;

        var size = new Axis.Component.Size();
        size.w = 104;
        size.h = 24;

        var keyboardInput = new Axis.Component.KeyboardInput();

        var sprite = new Axis.Component.Sprite();
        sprite.imgSrc = "app/img/spritesheet.png";
        sprite.srcX = 38;
        sprite.srcY = 0;
        sprite.srcW = 104;
        sprite.srcH = 24;

        entity.addComponents([position, size, sprite, keyboardInput]);
        return entity;
    };

    return paddle;
});
