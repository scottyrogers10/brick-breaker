define(function () {
    var Position = function (config) {
        this.type = "position";
        this.x = config.x;
        this.y = config.y;
    };

    return Position;
});
