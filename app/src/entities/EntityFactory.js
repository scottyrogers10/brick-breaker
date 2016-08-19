define([
    "app/src/entities/Paddle.js",
    "app/src/entities/Brick.js"
], function (paddle, brick) {
    var entityFactory = {
        paddle: paddle,
        brick: brick
    };

    return entityFactory;
});
