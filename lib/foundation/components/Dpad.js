define(function () {
    var DPad = function (config) {
        this.keysDown = {};
        this.directions = {
            left: 37 || config.left,
            up: 38 || config.up,
            right: 39 || config.right,
            down: 40 || config.down
        };
    };

    return DPad;
});
