define(function () {
    var MovementSystem = function () {
        this.type = "movementSystem";
        this.game = null;
        this.isReady = false;
    };

    MovementSystem.prototype.updatePaddleMovement = function () {
        var self = this;
        var rootEntity = self.game.world.rootEntity;

        var paddleEntityCheck = function (entity) {
            return entity.type == "paddle";
        };

        var paddle = rootEntity.filter(paddleEntityCheck)[0];
        var positionComponent = paddle.getComponentByType("position");
        var keyboardInputComponent = paddle.getComponentByType("keyboardInput");
        var pressed = keyboardInputComponent.pressed;

        if (pressed[37]) {
            positionComponent.x -= 6;
        }

        if (pressed[39]) {
            positionComponent.x += 6;
        }
    };

    MovementSystem.prototype.activate = function (game) {
        this.game = game;
        this.isReady = true;
    };

    MovementSystem.prototype.update = function () {
        this.updatePaddleMovement();
    };

    return MovementSystem;
});
