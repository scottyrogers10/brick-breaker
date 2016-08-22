define(function () {
    var TYPE = "wall";

    var wall = {
        create: function (game, x, y, w, h) {
            var entity = new Foundation.Entity(TYPE);

            entity.add.component(new Foundation.Component.Position({
                x: x,
                y: y
            }));

            entity.add.component(new Foundation.Component.Size({
                w: w,
                h: h
            }));

            return entity;
        }
    };

    return wall;
});
