define(function () {
    var Movement = function (game) {
        this.game = game;
    };

    Movement.prototype.update = function () {
        this.game.entities.forEach(function (entity) {
            if (entity.components.dpad && entity.components.position && entity.components.physics) {
                var left = entity.components.dpad.directions.left;
                var up = entity.components.dpad.directions.up;
                var right = entity.components.dpad.directions.right;
                var down = entity.components.dpad.directions.down;

                if (entity.components.dpad.keysDown[left]) {
                    entity.components.position.x -= entity.components.physics.velocityX;
                }

                if (entity.components.dpad.keysDown[up]) {
                    entity.components.position.y -= entity.components.physics.velocityY;
                }

                if (entity.components.dpad.keysDown[right]) {
                    entity.components.position.x += entity.components.physics.velocityX;
                }

                if (entity.components.dpad.keysDown[down]) {
                    entity.components.position.y += entity.components.physics.velocityY;
                }
            }
        });
    };

    return Movement;
});
