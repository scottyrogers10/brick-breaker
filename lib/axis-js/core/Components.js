define([
    "lib/axis-js/components/Position.js",
    "lib/axis-js/components/Size.js",
    "lib/axis-js/components/Sprite.js",
    "lib/axis-js/components/SpriteSheet.js",
    "lib/axis-js/components/KeyboardInput.js",
    "lib/axis-js/components/Velocity.js"
], function (Position, Size, Sprite, SpriteSheet, KeyboardInput, Velocity) {
    return {
        Position: Position,
        Size: Size,
        Sprite: Sprite,
        SpriteSheet: SpriteSheet,
        KeyboardInput: KeyboardInput,
        Velocity: Velocity
    };
});
