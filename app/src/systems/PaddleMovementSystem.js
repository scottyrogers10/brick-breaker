define(function () {
    var PaddleMovementSystem = function () {
        this.type = "paddleMovement";
        this.game = null;
        this.isReady = false;
    };

    PaddleMovementSystem.prototype.activate = function (game) {
        this.game = game;
        this.isReady = true;
    };

    PaddleMovementSystem.prototype.update = function () {
        var self = this;
        var rootEntity = self.game.world.rootEntity;
        var paddle = rootEntity.getChildByType("paddle");

        if (paddle.hasActiveComponentsByTypes(["position", "velocity", "keyboardInput"])) {
            var positionComponent = paddle.getActiveComponentByType("position");
            var velocityComponent = paddle.getActiveComponentByType("velocity");
            var keyboardInputComponent = paddle.getActiveComponentByType("keyboardInput");
            var pressed = keyboardInputComponent.pressed;

            if (pressed[37]) {
                positionComponent.x -= velocityComponent.x * self.game.dt;
            }

            if (pressed[39]) {
                positionComponent.x += velocityComponent.y * self.game.dt;
            }
        }
    };

    return PaddleMovementSystem;
});
