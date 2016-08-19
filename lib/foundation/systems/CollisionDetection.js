define(function () {
    var CollisionDetection = function (game) {
        this.game = game;
    };

    CollisionDetection.prototype.checkBoundaryCollision = function (entity) {
        entity.components.collision.boundaryColliding = {
            left: false,
            top: false,
            right: false,
            bottom: false
        };

        if (entity.components.position.x < entity.components.collision.boundaries.left) {
            entity.components.collision.boundaryColliding.left = true;
        }

        if (entity.components.position.x + entity.components.size.w > entity.components.collision.boundaries.right) {
            entity.components.collision.boundaryColliding.right = true;
        }

        if (entity.components.position.y < entity.components.collision.boundaries.top) {
            entity.components.collision.boundaryColliding.top = true;
        }

        if (entity.components.position.y + entity.components.size.h > entity.components.collision.boundaries.bottom) {
            entity.components.collision.boundaryColliding.bottom = true;
        }
    };

    CollisionDetection.prototype.update = function () {
        var self = this;

        this.game.entities.forEach(function (entity) {
            if (entity.components.collision && entity.components.position && entity.components.size) {
                self.checkBoundaryCollision(entity);
            }
        });
    };

    return CollisionDetection;
});
