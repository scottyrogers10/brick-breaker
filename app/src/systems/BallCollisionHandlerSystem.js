define(function () {
    var BallCollisionHandlerSystem = function () {
        this.type = "ballCollisionHandler";
        this.game = null;
        this.isReady = false;
        this.lastCollisionType = null;
    };

    BallCollisionHandlerSystem.prototype.activate = function (game) {
        this.game = game;
        this.isReady = true;
    };

    BallCollisionHandlerSystem.prototype.update = function () {
        var ballEntity = this.game.world.rootEntity.getChildByType("ball");
        var ballPositionComponent = ballEntity.getActiveComponentByType("position");
        var ballSizeComponent = ballEntity.getActiveComponentByType("size");
        var ballVelocityComponent = ballEntity.getActiveComponentByType("velocity");
        var ballRestraintComponent = ballEntity.getActiveComponentByType("restraint");
        var ballCollidableComponent = ballEntity.getActiveComponentByType("collidable");
        var collidingEntities = ballCollidableComponent.collidingEntities;

        for (var i = 0; i < collidingEntities.length; i++) {
            if (collidingEntities[i].type === "brick") {
                var stateComponent = collidingEntities[i].getActiveComponentByType("state");
                ballVelocityComponent.y = -ballVelocityComponent.y;
                stateComponent.currentState = "destroyed";

                this.game.world.rootEntity.removeChildEntityById(collidingEntities[i].id);
            }

            if (collidingEntities[i].type === "paddle" && this.lastCollisionType !== "paddle") {
                var paddlePositionComponent = collidingEntities[i].getActiveComponentByType("position");
                var paddleSizeComponent = collidingEntities[i].getActiveComponentByType("size");

                if (paddlePositionComponent.x + 20 > ballPositionComponent.x + ballSizeComponent.width) {
                    ballVelocityComponent.x = -Math.abs(ballVelocityComponent.x);
                }

                if (paddlePositionComponent.x + paddleSizeComponent.width - 20 < ballPositionComponent.x) {
                    ballVelocityComponent.x = Math.abs(ballVelocityComponent.x);
                }

                ballVelocityComponent.y = -ballVelocityComponent.y;
            }
        }

        if (collidingEntities.length > 0) {
            this.lastCollisionType = collidingEntities[i - 1].type;
        }

        if (ballRestraintComponent.restrainingSides.length > 0) {
            var restrainingSides = ballRestraintComponent.restrainingSides;
            for (var i = 0; i < restrainingSides.length; i++) {
                if (restrainingSides[i] === "left") {
                    ballVelocityComponent.x = -ballVelocityComponent.x;
                    ballPositionComponent.x = ballRestraintComponent.left;
                    this.lastCollisionType = "left";
                }

                if (restrainingSides[i] === "right") {
                    ballVelocityComponent.x = -ballVelocityComponent.x;
                    ballPositionComponent.x = ballRestraintComponent.right - ballSizeComponent.height;
                    this.lastCollisionType = "right";
                }

                if (restrainingSides[i] === "top") {
                    ballVelocityComponent.y = -ballVelocityComponent.y;
                    ballPositionComponent.y = ballRestraintComponent.top;
                    this.lastCollisionType = "top";
                }
            }
        }
    };

    return BallCollisionHandlerSystem;
});
