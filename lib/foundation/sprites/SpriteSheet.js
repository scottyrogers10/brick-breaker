define(function () {
    var SpriteSheet = function (src) {
        var img = new Image();
        img.src = src;

        return img;
    };

    return SpriteSheet;
});
