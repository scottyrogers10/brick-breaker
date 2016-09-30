define(function (require) {
    var Axis = require("axis/Axis");
    var positionComponent = require("axis/components/Position");
    var sizeComponent = require("axis/components/Size");
    var rigidBodyComponent = require("axis/components/RigidBody");
    var keyboardInputComponent = require("axis/components/KeyboardInput");
    var spriteComponent = require("axis/components/Sprite");
    var velocityComponent = require("axis/components/Velocity");
    var collidableComponent = require("axis/components/Collidable");

    var paddle = function (game) {
        var entity = new Axis.Entity("paddle");

        var position = new positionComponent();
        position.x = (game.getCameraById("main-camera").width / 2) - 52;
        position.y = game.getCameraById("main-camera").height - 36;

        var size = new sizeComponent();
        size.width = 104;
        size.height = 24;

        var rigidBody = new rigidBodyComponent();
        rigidBody.width = 104;
        rigidBody.height = 24;

        var collidable = new collidableComponent();

        var keyboardInput = new keyboardInputComponent();

        var sprite = new spriteComponent();
        sprite.imgSrc = "app/img/spritesheet.png";
        sprite.srcX = 38;
        sprite.srcY = 0;
        sprite.srcW = 104;
        sprite.srcH = 24;

        var velocity = new velocityComponent();
        velocity.x = .50;

        entity.loadComponents([position, size, rigidBody, collidable, keyboardInput, sprite, velocity]);
        return entity;
    };

    return paddle;
});
