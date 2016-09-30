define(function (require) {
    var Axis = require("axis/Axis");
    var positionComponent = require("axis/components/Position");
    var sizeComponent = require("axis/components/Size");
    var rigidBodyComponent = require("axis/components/RigidBody");
    var spriteComponent = require("axis/components/Sprite");
    var velocityComponent = require("axis/components/Velocity");
    var collidableComponent = require("axis/components/Collidable");
    var restraintComponent = require("axis/components/Restraint");

    var ball = function (game) {
        var entity = new Axis.Entity("ball");

        var position = new positionComponent();
        position.x = (game.getCameraById("main-camera").width / 2) - 11;
        position.y = game.getCameraById("main-camera").height - 59;

        var size = new sizeComponent();
        size.width = 22;
        size.height = 22;

        var rigidBody = new rigidBodyComponent();
        rigidBody.width = 22;
        rigidBody.height = 22;

        var collidable = new collidableComponent();

        var sprite = new spriteComponent();
        sprite.imgSrc = "app/img/spritesheet.png";
        sprite.srcX = 0;
        sprite.srcY = 0;
        sprite.srcW = 22;
        sprite.srcH = 22;

        var velocity = new velocityComponent();
        velocity.x = .30;
        velocity.y = -.30;

        var restraint = new restraintComponent();
        restraint.left = 0;
        restraint.right = game.getCameraById("main-camera").width;
        restraint.top = 0;

        entity.loadComponents([position, size, rigidBody, collidable, sprite, velocity, restraint]);
        return entity;
    };

    return ball;
});
