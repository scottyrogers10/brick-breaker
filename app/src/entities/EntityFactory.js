define([
    "app/src/entities/SpriteSheet.js",
    "app/src/entities/Paddle.js"
], function (spriteSheet, paddle) {
    var entityFactory = {
        spriteSheet: spriteSheet,
        paddle: paddle
    };

    return entityFactory
});
