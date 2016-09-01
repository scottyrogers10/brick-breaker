define([
    "lib/axis-js/core/Game.js",
    "lib/axis-js/core/Camera.js",
    "lib/axis-js/core/Entity.js",
    "lib/axis-js/core/Systems.js",
    "lib/axis-js/core/Components.js"
], function (Game, Camera, Entity, Systems, Components) {
    var Axis = {};
    Axis.Game = Game;
    Axis.Camera = Camera;
    Axis.Entity = Entity;
    Axis.System = Systems;
    Axis.Component = Components;

    return Axis;
});
