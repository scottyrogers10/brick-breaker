define(function () {
    var Velocity = function (config) {
        this.type = "velocity";
        this.velX = config.velX || 0;
        this.velY = config.velY || 0;
    };

    return Velocity;
});
