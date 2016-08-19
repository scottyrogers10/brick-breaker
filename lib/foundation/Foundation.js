require([
    "lib/foundation/core/Game.js",
    "lib/foundation/core/View.js",
    "lib/foundation/sprites/SpriteSheet.js",
    "lib/foundation/core/Entity.js",
    "lib/foundation/core/Component.js",
    "lib/foundation/core/System.js"
], function (Game, View, SpriteSheet, Entity, Component, System) {
    var Foundation = {
        VERSION: "0.0.1",
        Game: Game,
        View: View,
        SpriteSheet: SpriteSheet,
        Entity: Entity,
        Component: Component,
        System: System
    };

    window.Foundation = Foundation;
});
