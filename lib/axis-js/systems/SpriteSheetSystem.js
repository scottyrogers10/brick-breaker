define(function () {
    var SpriteSheetSystem = function () {
        this.type = "spriteSheetSystem";
        this.game = null;
        this.isReady = false;
        this.spriteSheets = [];
    };

    SpriteSheetSystem.prototype.createSpriteSheetImgs = function () {
        var self = this;
        var imagesLoaded = 0;

        for (var i = 0; i < self.spriteSheets.length; i++) {
            var spriteSheetComponent = self.spriteSheets[i].getComponentByType("spriteSheet");
            var img = new Image();
            img.src = spriteSheetComponent.src;
            img.name = spriteSheetComponent.src;

            img.addEventListener("load", function () {
                imagesLoaded++;
                self.game.spriteSheets.push(img);

                if (imagesLoaded >= self.spriteSheets.length) {
                    self.isReady = true;
                }
            });
        }
    };

    SpriteSheetSystem.prototype.activate = function (game) {
        var self = this;
        self.game = game;

        var spriteSheetEntities = function (entity) {
            return entity.hasComponent("spriteSheet");
        };

        self.spriteSheets = self.game.world.rootEntity.filter(spriteSheetEntities);
        self.createSpriteSheetImgs();
    };

    return SpriteSheetSystem;
});
