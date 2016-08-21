define(function () {
    var DPad = function (game, config) {
        this.type = "dpad";
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
            if (entity.components.dpad && entity.components.position && entity.components.physics) {
                var left = entity.components.dpad.directions.left;
                var up = entity.components.dpad.directions.up;
                var right = entity.components.dpad.directions.right;
                var down = entity.components.dpad.directions.down;

                if (self.pressed[left]) {
                    entity.components.position.x -= entity.components.physics.velocityX;
                }

                if (self.pressed[up]) {
                    entity.components.position.y -= entity.components.physics.velocityY;
                }

                if (self.pressed[right]) {
                    entity.components.position.x += entity.components.physics.velocityX;
                }

                if (self.pressed[down]) {
                    entity.components.position.y += entity.components.physics.velocityY;
                }
            }
        });
    };

    return DPad;
});
