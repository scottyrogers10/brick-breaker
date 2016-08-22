define(function () {
    var TYPE= "brick"

    var brick = {
        init: function(game){
            game.systems.state.on(TYPE, {
                idle: {
                    update: function (entity) {
                        return;
                    }
                },
                destroyed: {
                    update: function (entity) {
                        game.remove.entity(entity);
                    }
                }
            });

            game.systems.collision.on(TYPE, "ball", function(entities){
                var brickEntity = entities["brick"];

                brickEntity.components.state.name = "destroyed";
            });
        },
        create: function (game, x, y) {
        var entity = new Foundation.Entity(TYPE);

        entity.add.component(new Foundation.Component.Position({
            x: x,
            y: y
        }));

        entity.add.component(new Foundation.Component.Size({w: 64, h: 32}));

        entity.add.component(new Foundation.Component.Sprite({
            img: game.spriteSheet,
            srcX: 0,
            srcY: 29,
            srcW: 64,
            srcH: 32
        }));

        entity.add.component(new Foundation.Component.Collidable([
            "ball"
        ]));

        entity.add.component(new Foundation.Component.State("idle"));

        return entity;
    }
};

    return brick
});
