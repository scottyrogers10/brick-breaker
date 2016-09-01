define([
    "lib/axis-js/systems/RenderSystem.js",
    "lib/axis-js/systems/SpriteSheetSystem.js",
    "lib/axis-js/systems/KeyboardInputSystem.js"
], function (Render, SpriteSheet, KeyboardInput) {
    return {
        Render: Render,
        SpriteSheet: SpriteSheet,
        KeyboardInput: KeyboardInput
    };
});
