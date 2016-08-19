define(function () {
    var CollisionHandler = function (game) {
        this.game = game;
    };

    CollisionHandler.prototype.handleBoundariesCollision = function (entity) {
        if (entity.type = "paddle") {
            if (entity.components.collision.boundaryColliding.left) {
                entity.components.position.x += entity.components.physics.velocityX;
            }

            if (entity.components.collision.boundaryColliding.right) {
                entity.components.position.x -= entity.components.physics.velocityX;
            }
        }
    };

    CollisionHandler.prototype.update = function () {
        var self = this;

        this.game.entities.forEach(function (entity) {
            if (entity.components.collision) {
                self.handleBoundariesCollision(entity);
            }
        });
    };

    return CollisionHandler;

});
