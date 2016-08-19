require([
    "app/src/entities/Entities.js",
    "app/src/systems/CollisionHandler.js"
], function (entities, CollisionHandler) {
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
            entities.init(brickBreaker);

            brickBreaker.add.system(new Foundation.System.DPad(brickBreaker));
            brickBreaker.add.system(new Foundation.System.Movement(brickBreaker));
            brickBreaker.add.system(new Foundation.System.Animation(brickBreaker));
            brickBreaker.add.system(new Foundation.System.CollisionDetection(brickBreaker));
            brickBreaker.add.system(new CollisionHandler(brickBreaker));
            brickBreaker.add.system(new Foundation.System.Render(brickBreaker, "main-canvas"));

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

    window.brickBreaker = brickBreaker;
});
