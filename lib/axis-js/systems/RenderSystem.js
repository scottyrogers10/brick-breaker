define(function () {
    var RenderSystem = function () {
        this.type = "renderSystem";
        this.game = null;
        this.activeCamera = null;
        this.isReady = false;
        this.renderableEntities = [];
    };

    RenderSystem.prototype.getActiveCamera = function () {
        var self = this;

        for (var i = 0; i < self.game.cameras.length; i++) {
            if (self.game.cameras[i].active) {
                self.activeCamera = self.game.cameras[i];
                break;
            }
        }
    };

    RenderSystem.prototype.getRenderableEntities = function () {
        var self = this;
        var rootEntity = self.game.world.rootEntity;

        var renderableEntities = function (entity) {
            return entity.hasComponents(["position", "size", "sprite"]);
        };

        this.renderableEntities = rootEntity.filter(renderableEntities);
    };

    RenderSystem.prototype.getSpriteSheetByName = function (name) {
        var spriteSheets = this.game.spriteSheets;

        for (var i = 0; i < spriteSheets.length; i++) {
            if (name == spriteSheets[i].name) {
                return spriteSheets[i]
            }
        }
    };

    RenderSystem.prototype.clearCameraRender = function () {
        this.activeCamera.ctx.clearRect(0, 0, this.activeCamera.canvas.width, this.activeCamera.canvas.height);
    };

    RenderSystem.prototype.drawEntity = function (entity) {
        var sprite = entity.getComponentByType("sprite");
        var position = entity.getComponentByType("position");
        var size = entity.getComponentByType("size");
        var spriteImg = this.getSpriteSheetByName(sprite.imgSrc);

        this.activeCamera.ctx.drawImage(spriteImg,
                    sprite.srcX, sprite.srcY,
                    sprite.srcW, sprite.srcH,
                    (position.x - this.activeCamera.offset.x), (position.y - this.activeCamera.offset.y),
                    size.w, size.h);
    };

    RenderSystem.prototype.activate = function (game) {
        var self = this;
        self.game = game;
        self.isReady = true;
    };

    RenderSystem.prototype.update = function () {
        var self = this;

        this.getActiveCamera();
        this.getRenderableEntities();
        this.clearCameraRender();

        //TODO: Refactor and move into a prototype function
        for (var i = 0; i < self.renderableEntities.length; i++) {
            self.drawEntity(self.renderableEntities[i]);
        }
    };

    return RenderSystem;
});
