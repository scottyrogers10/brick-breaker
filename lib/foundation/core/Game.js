define([
    "lib/foundation/helpers/Helpers.js"
], function (helpers) {
    var Game = function (config) {
        var self = this;
        this.type = config.type;
        this.width = helpers.formatWidth(config.width);
        this.height = helpers.formatHeight(config.height);

        this.add = new Add(this);
        this.remove = new Remove(this);

        this.views = [];
        this.entities = [];
        this.systems = [];

        this.spriteSheet = null;

        this.tick = 0;
    };

    Game.prototype.runGameLoop = function () {
        var self = this;

        var initSystems = (function () {
            self.systems.forEach(function (system) {
                if (typeof system.init === "function") {
                    system.init();
                }
            });
        }());

        var updateSystems = function () {
            self.systems.forEach(function (system) {
                if (typeof system.update === "function") {
                    system.update();
                }
            });
        };

        var loop = function () {
            updateSystems();

            self.tick++;
            window.requestAnimationFrame(loop);
        };

        loop();
    };

    function Add (game) {
        this.game = game;
    };

    Add.prototype.spriteSheet = function (spriteSheet) {
        this.game.spriteSheet = spriteSheet;
    };

    Add.prototype.view = function (view) {
        this.game.views.push(view);
    };

    Add.prototype.entity = function (entity) {
        this.game.entities.push(entity);
    };

    Add.prototype.system = function (system) {
        this.game.systems.push(system);
    };

    function Remove (game) {
        this.game = game;
    };

    Remove.prototype.entity = function (entity) {
        var self = this;

        for (var i = 0; i < self.game.entities.length; i++) {
            if (entity.id == self.game.entities[i].id) {
                self.game.entities.splice(i, 1);
                break;
            }
        }
    };

    return Game;
});
