define(function () {
    var Collision = function (config) {
        this.boundaries = {
            left: config.boundaries.left,
            top: config.boundaries.top,
            right: config.boundaries.right,
            bottom: config.boundaries.bottom
        };

        this.collidables = config.collidables;

        this.boundaryColliding = {
            left: false,
            top: false,
            right: false,
            bottom: false
        };
    };

    return Collision;
});
