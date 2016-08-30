define([
    "lib/axis-js/Axis"
], function (Axis) {
    var spriteSheet = function (game) {
        var entity = new Axis.Entity("spriteSheet");

        var spriteSheetComponent = new Axis.Component.SpriteSheet();
        spriteSheetComponent.src = "app/img/spritesheet.png";
        entity.addComponent(spriteSheetComponent);

        return entity;
    };

    return spriteSheet;
});
