define(function () {
    var Physics = function (config) {
        this.velocityX = config.velocityX || 0;
        this.velocityY = config.velocityY || 0;
    };

    return Physics;
});
