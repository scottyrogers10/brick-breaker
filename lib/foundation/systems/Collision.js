define(function () {
    var Collision = function (game) {
        this.type = "collision";
        this.game = game;
        this.handlers = {};
        this.allCollisions = [];
    };

    Collision.prototype.on = function(entityName1, entityName2, handler){
            var handlers = this.handlers;
            var key = entityName1 + "|" + entityName2;

            handlers[key] = handler;
    };

    Collision.prototype.getCollidableEntities = function (currentEntity) {
        var collidableEntities = [];

        this.game.entities.forEach(function (entity) {
            for (var i = 0; i < currentEntity.components.collidable.collidables.length; i++) {
                if (entity.type == currentEntity.components.collidable.collidables[i]) {
                    collidableEntities.push(entity);
                }
            }
        });

        return collidableEntities;
    };

    Collision.prototype.collisionDetection = function (entity, collidableEntity) {
        var self = this;

        if (entity.components.position.x < collidableEntity.components.position.x + collidableEntity.components.size.w &&
                entity.components.position.x + entity.components.size.w > collidableEntity.components.position.x &&
                entity.components.position.y < collidableEntity.components.position.y + collidableEntity.components.size.h &&
                entity.components.size.h + entity.components.position.y > collidableEntity.components.position.y) {
                //Collision Occured
                self.allCollisions.push({
                    type: entity.type + "|" + collidableEntity.type,
                    collidingEntities: {
                        [entity.type]: entity,
                        [collidableEntity.type]: collidableEntity
                    }
                });
        }
    };

    Collision.prototype.collisionHandler = function () {
        var self = this;

        this.allCollisions.forEach(function (collision) {
            self.handlers[collision.type](collision.collidingEntities);
        });
    };

    Collision.prototype.update = function () {
        var self = this;
        this.allCollisions = [];

        this.game.entities.forEach(function (entity) {
            if (entity.components.collidable && entity.components.position && entity.components.size) {
                var collidableEntities = self.getCollidableEntities(entity);

                collidableEntities.forEach(function (collidableEntity) {
                    self.collisionDetection(entity, collidableEntity);
                });
            }
        });

        this.collisionHandler();
    };

    return Collision;
});
