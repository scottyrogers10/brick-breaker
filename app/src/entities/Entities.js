define([
    "app/src/entities/EntityFactory.js"
], function (entityFactory) {
    var entities = {
        init: function (game) {
            entityFactory.init.ball(game);
            entityFactory.init.brick(game);

            game.add.entity(entityFactory.create.paddle(game));
            game.add.entity(entityFactory.create.ball(game));

            var x = 0;
            var y = 0;

            for (var i = 0; i < 5; i++) {
                for (var j = 0; j < 10; j++) {
                    game.add.entity(entityFactory.create.brick(game, x, y));
                    x += 64;
                }

                y += 32;
                x = 0;
            }

            game.add.entity(entityFactory.create.wall(game, 0, 0, game.width, 1));
            game.add.entity(entityFactory.create.wall(game, 0, 0, 1, game.height));
            game.add.entity(entityFactory.create.wall(game, game.width, 0, 1, game.height));
        }
    };

    return entities
});
