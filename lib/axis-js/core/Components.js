define([
    "lib/axis-js/components/Position.js",
    "lib/axis-js/components/Size.js",
    "lib/axis-js/components/Sprite.js",
    "lib/axis-js/components/SpriteSheet.js",
    "lib/axis-js/components/KeyboardInput.js"
], function (Position, Size, Sprite, SpriteSheet, KeyboardInput) {
    return {
        Position: Position,
        Size: Size,
        Sprite: Sprite,
        SpriteSheet: SpriteSheet,
        KeyboardInput: KeyboardInput
    };
});
