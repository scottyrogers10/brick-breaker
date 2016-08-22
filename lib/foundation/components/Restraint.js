define(function () {
    var Restraint = function (config) {
        this.type = "restraint";
        this.left = config.left;
        this.top = config.top;
        this.right = config.right;
        this.bottom = config.bottom;
    };

    return Restraint;
});
