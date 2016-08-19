define(function () {
    var Animation = function (game) {
        this.game = game;
    };

    Animation.prototype.update = function () {
        var self = this;

        this.game.entities.forEach(function (entity) {
            if (entity.components.state && entity.components.sprite  && entity.components.spriteAnimation) {
                if (self.game.tick % entity.components.spriteAnimation.modulus == 0 || !entity.components.spriteAnimation.modulus) {
                    var animationState = entity.components.spriteAnimation.states[entity.components.state.name];

                    entity.components.sprite = animationState.frames[animationState.currentFrame];
                    animationState.currentFrame++;

                    if (animationState.currentFrame >= animationState.frames.length) {
                        if (animationState.removeEntity) {
                            self.game.remove.entity(entity);
                        } else {
                            animationState.currentFrame = 0;
                        }
                    }
                }
            }
        });
    };

    return Animation;
});
