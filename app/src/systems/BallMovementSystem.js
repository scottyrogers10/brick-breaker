define(function () {
    var BallMovementSystem = function () {
        this.type = "ballMovement";
        this.game = null;
        this.isReady = false;
    };

    BallMovementSystem.prototype.activate = function (game) {
        this.game = game;
        this.isReady = true;
    };

    BallMovementSystem.prototype.update = function () {
        var self = this;
        var rootEntity = self.game.world.rootEntity;
        var ball = rootEntity.getChildByType("ball");

        if (ball.hasActiveComponentsByTypes(["position", "velocity"])) {
            var positionComponent = ball.getActiveComponentByType("position");
            var velocityComponent = ball.getActiveComponentByType("velocity");

            positionComponent.y += velocityComponent.y * self.game.dt;
            positionComponent.x += velocityComponent.x * self.game.dt;
        }
    };

    return BallMovementSystem;
});
