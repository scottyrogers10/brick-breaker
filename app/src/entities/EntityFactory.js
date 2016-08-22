define([
    "app/src/entities/Paddle.js",
    "app/src/entities/Brick.js",
    "app/src/entities/Ball.js",
    "app/src/entities/Wall.js"
], function (paddle, brick, ball, wall) {
    var entityFactory = {
        init: {
            ball: ball.init,
            brick: brick.init
        },
        create: {
            paddle: paddle.create,
            brick: brick.create,
            ball: ball.create,
            wall: wall.create
        }
    };

    return entityFactory;
});
