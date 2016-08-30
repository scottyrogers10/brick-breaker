define([
    "lib/axis-js/core/Game.js",
    "lib/axis-js/core/Camera.js",
    "lib/axis-js/core/Entity.js",
    "lib/axis-js/core/System.js",
    "lib/axis-js/core/Component.js"
], function (Game, Camera, Entity, System, Component) {
    var Axis = {};
    Axis.Game = Game;
    Axis.Camera = Camera;
    Axis.Entity = Entity;
    Axis.System = System;
    Axis.Component = Component;

    return Axis;
});
