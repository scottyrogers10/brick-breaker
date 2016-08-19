define(function () {
    var Physics = function (config) {
        this.velocityX = config.velocityX || 0;
        this.velocityY = config.velocityY || 0;
        this.accelerationX = config.accelerationX;
        this.accelerationY = config.accelerationY;
        this.force = config.force;
    };

    return Physics;
});
