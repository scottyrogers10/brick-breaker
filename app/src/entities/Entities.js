define([
    "app/src/entities/EntityFactory.js"
], function (entityFactory) {
    var entities = {
        init: function (game) {
            game.add.entity(entityFactory.paddle(game));

            var x = 0;
            var y = 0;

            for (var i = 0; i < 5; i++) {
                for (var j = 0; j < 10; j++) {
                    game.add.entity(entityFactory.brick(game, x, y));
                    x += 64;
                }

                y += 32;
                x = 0;
            }
        },
        update: function () {

        }
    };

    return entities
});