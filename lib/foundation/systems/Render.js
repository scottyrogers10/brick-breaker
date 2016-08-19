define(function () {
    var Render = function (game, viewElementId) {
        this.game = game;
        this.viewElementId = viewElementId;
    };

    Render.prototype.getViewCtx = function () {
        var self = this;
        var ctx = null;

        for (var i = 0; i < self.game.views.length; i++) {
            if (self.game.views[i].elementId == self.viewElementId) {
                ctx = self.game.views[i].ctx;
                break;
            }
        }

        return ctx;
    };

    Render.prototype.drawEntity = function (entity, ctx) {
        ctx.drawImage(entity.components.sprite.img,
                    entity.components.sprite.srcX, entity.components.sprite.srcY,
                    entity.components.sprite.srcW, entity.components.sprite.srcH,
                    entity.components.position.x, entity.components.position.y,
                    entity.components.size.w, entity.components.size.h);
    };

    Render.prototype.update = function () {
        var self = this;
        var ctx = this.getViewCtx();

        ctx.clearRect(0, 0, self.game.width, self.game.height);
        this.game.entities.forEach(function (entity) {
            if (entity.components.size && entity.components.position && entity.components.sprite) {
                self.drawEntity(entity, ctx);
            }
        });
    };

    return Render;
});
