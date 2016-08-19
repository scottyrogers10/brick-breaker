define(function () {
    var DPad = function (game, config) {
        this.game = game;
        this.pressed = {};
    };

    DPad.prototype.onKeyDown = function (event) {
        this.pressed[event.keyCode] = true;
    };

    DPad.prototype.onKeyUp = function (event) {
        delete this.pressed[event.keyCode];
    };

    DPad.prototype.init = function () {
        var self = this;

        window.addEventListener("keydown", function (event) {
            self.onKeyDown(event);
        });

        window.addEventListener("keyup", function (event) {
            self.onKeyUp(event);
        });
    };

    DPad.prototype.update = function () {
        var self = this;

        this.game.entities.forEach(function (entity) {
            if (entity.components.dpad) {
                entity.components.dpad.keysDown = self.pressed;
            }
        });
    };

    return DPad;
});
