define([
    "app/src/entities/EntityFactory.js"
], function (entityFactory) {
    var entities = {
        init: function (game) {
            var rootEntity = game.world.rootEntity;

            rootEntity.addChildEntity(entityFactory.spriteSheet(game));
            rootEntity.addChildEntity(entityFactory.paddle(game));
        }
    };

    return entities;
});
