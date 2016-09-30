define(function (require) {
    var Axis = require("axis/Axis");
    var positionComponent = require("axis/components/Position");
    var sizeComponent = require("axis/components/Size");
    var spriteComponent = require("axis/components/Sprite");
    var rigidBodyComponent = require("axis/components/RigidBody");
    var collidableComponent = require("axis/components/Collidable");
    var stateComponent = require("axis/components/State");

    var brick = function (game, x, y) {
        var entity = new Axis.Entity("brick");

        var position = new positionComponent();
        position.x = x;
        position.y = y;

        var size = new sizeComponent();
        size.width = 64;
        size.height = 32;

        var rigidBody = new rigidBodyComponent();
        rigidBody.width = 64;
        rigidBody.height = 32;

        var collidable = new collidableComponent();
        collidable.isStatic = true;

        var sprite = new spriteComponent();
        sprite.imgSrc = "app/img/spritesheet.png";
        sprite.srcX = 0;
        sprite.srcY = 29;
        sprite.srcW = 64;
        sprite.srcH = 32;

        var state = new stateComponent();
        state.currentState = "active";
        state.states = {
            active: [position, size, rigidBody, collidable, sprite, state],
            destroyed: []
        };

        var startingState = state.states[state.currentState];

        entity.loadComponents(startingState);
        return entity;
    };

    return brick;

});
