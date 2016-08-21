define(function () {
    var Collision = function (game) {
        this.type = "collision";
        this.game = game;
        this.handlers = {};
    };

    Collision.prototype.on = function(entityName1, entityName2, handler){
            var handlers = this.handlers;
            var key1 = entityName1 + "|" + entityName2;
            var key2 = entityName2 + "|" + entityName1;

            handlers[key1] = handler;
            handlers[key2] = handler;
    };

    Collision.prototype.getCollidableEntities = function (currentEntity) {
        var collidableEntities = [];

        this.game.entities.forEach(function (entity) {
            for (var i = 0; i < currentEntity.components.collision.collidables.length; i++) {
                if (entity.type == currentEntity.components.collision.collidables[i]) {
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
                var entities = {
                    [entity.type]: entity,
                    [collidableEntity.type]: collidableEntity
                };

                self.handlers[entity.type + "|" + collidableEntity.type](entities);
            }
    };

    Collision.prototype.update = function () {
        var self = this;

        this.game.entities.forEach(function (entity) {
            if (entity.components.collision && entity.components.position && entity.components.size) {
                var collidableEntities = self.getCollidableEntities(entity);

                collidableEntities.forEach(function (collidableEntity) {
                    self.collisionDetection(entity, collidableEntity);
                });

            }
        });
    };

    return Collision;
});
