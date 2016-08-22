define(function () {
    var Collidable = function (collidables) {
        this.type = "collidable";
        this.collidables = collidables;
    };

    return Collidable;
});
