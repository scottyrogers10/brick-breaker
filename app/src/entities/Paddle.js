define([
    "lib/axis-js/Axis"
], function (Axis) {
    var paddle = function (game) {
        var entity = new Axis.Entity("paddle");

        var position = new Axis.Component.Position();
        position.x = (game.getCameraByCanvasId("main-camera").width / 2) - 52;
        position.y = (game.getCameraByCanvasId("main-camera").height / 2) - 12;
        entity.addComponent(position);

        var size = new Axis.Component.Size();
        size.w = 104;
        size.h = 24;
        entity.addComponent(size);

        var sprite = new Axis.Component.Sprite();
        sprite.imgSrc = "app/img/spritesheet.png";
        sprite.srcX = 38;
        sprite.srcY = 0;
        sprite.srcW = 104;
        sprite.srcH = 24;
        entity.addComponent(sprite);

        return entity;
    };

    return paddle;
});
