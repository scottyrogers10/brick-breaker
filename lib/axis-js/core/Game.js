define([
    "lib/axis-js/core/Entity.js"
], function (Entity) {
    var Game = function (timer) {
        this.timer = timer;
        this.tick = null;
        this.gameState = null;

        this.world = {
            rootEntity: new Entity("rootEntity"),
            width: 0,
            height: 0
        };

        this.cameras = [];
        this.systems = [];
        this.spriteSheets = [];
    };

    Game.prototype.getCameraByCanvasId = function (canvasId) {
        var self = this;

        for (var i = 0; i < self.cameras.length; i++) {
            if (canvasId == self.cameras[i].canvasId) {
                return self.cameras[i];
            }
        }
    };

    Game.prototype.addCamera = function (camera) {
        this.cameras.push(camera);
    };

    Game.prototype.addSystem = function (system) {
        var self = this;
        this.systems.push(system);

        if (typeof system.activate === "function") {
            system.activate(self);
        }
    };

    Game.prototype.allSystemsReady = function () {
        var self = this;

        return self.systems.every(function (system) {
            return system.isReady;
        });
    };

    Game.prototype.updateSystems = function () {
        var self = this;

        for (var i = 0; i < self.systems.length; i++) {
            if (typeof self.systems[i].update === "function") {
                self.systems[i].update(self);
            }
        }
    };

    Game.prototype.runGame = function () {
        var self = this;

        var loop = function () {
            if (self.allSystemsReady()) {
                self.tick++;
                self.updateSystems();
            }

            window.requestAnimationFrame(loop);
        };

        loop();
    };

    return Game;
});
