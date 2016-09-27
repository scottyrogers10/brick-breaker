define(function (require) {
    var Axis = require("axis/Axis");
    var positionComponent = require("axis/components/Position");
    var sizeComponent = require("axis/components/Size");
    var spriteComponent = require("axis/components/Sprite");
    var rigidBodyComponent = require("axis/components/RigidBody");
    var collidableComponent = require("axis/components/Collidable");

    var brick = function (game, x, y) {
        var entity = new Axis.Entity("brick");

        var position = new positionComponent();
        position.x = x;
        position.y = y;

        var size = new sizeComponent();
        size.w = 64;
        size.h = 32;

        var rigidBody = new rigidBodyComponent();
        rigidBody.w = 64;
        rigidBody.h = 32;

        var collidable = new collidableComponent();
        collidable.isStatic = true;

        var sprite = new spriteComponent();
        sprite.imgSrc = "app/img/spritesheet.png";
        sprite.srcX = 0;
        sprite.srcY = 29;
        sprite.srcW = 64;
        sprite.srcH = 32;

        entity.loadComponents([position, size, rigidBody, collidable, sprite]);
        return entity;
    };

    return brick;

});
