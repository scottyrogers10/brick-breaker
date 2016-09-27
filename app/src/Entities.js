define(function (require) {
    var brick = require("entities/Brick");
    var paddle = require("entities/Paddle");
    var ball = require("entities/Ball")

    var positionBricks = function (game, rootEntity) {
        var x = 0;
        var y = 0;

        for (var i = 0; i < 5; i++) {
            for (var j = 0; j < 10; j++) {
                rootEntity.addChildEntity(brick(game, x, y));
                x += 64;
            }

            y += 32;
            x = 0;
        }

    };

    var entities = {
        init: function (game) {
            var rootEntity = game.world.rootEntity;

            positionBricks(game, rootEntity);
            rootEntity.addChildEntity(paddle(game));
            rootEntity.addChildEntity(ball(game));
        }
    };

    return entities;
});
