require([
    "app/src/entities/Entities.js"
], function (entities) {
    var brickBreaker = null;

    var init = function () {
        brickBreaker = new Foundation.Game({
            type: "2d",
            width: "640",
            height: "480"
        });

        var canvas = new Foundation.View(brickBreaker, "main-canvas");
        brickBreaker.add.view(canvas);

        var spriteSheet = new Foundation.SpriteSheet("app/img/spritesheet.png");
        brickBreaker.add.spriteSheet(spriteSheet);

        var prepareGameObjects = function () {
            brickBreaker.add.system(new Foundation.System.DPad(brickBreaker));
            brickBreaker.add.system(new Foundation.System.State(brickBreaker));
            brickBreaker.add.system(new Foundation.System.Collision(brickBreaker));
            brickBreaker.add.system(new Foundation.System.Restraint(brickBreaker));
            brickBreaker.add.system(new Foundation.System.Render(brickBreaker, "main-canvas"));

            entities.init(brickBreaker);

            run();
        };

        brickBreaker.spriteSheet.addEventListener("load", function () {
            prepareGameObjects();
        });
    };

    function run () {
        brickBreaker.runGameLoop();
    };

    init();
});
