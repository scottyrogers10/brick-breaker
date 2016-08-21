define([
    "app/src/entities/Paddle.js",
    "app/src/entities/Brick.js",
    "app/src/entities/Ball.js"
], function (paddle, brick, ball) {
    var entityFactory = {
        init: {
            ball: ball.init
        },
        create: {
            paddle: paddle.create,
            brick: brick.create,
            ball: ball.create
        }
    };

    return entityFactory;
});
