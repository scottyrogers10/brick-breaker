require([
    "lib/axis-js/Axis.js",
    "app/src/entities/Entities.js"
], function (Axis, entities) {
    var init = function () {
        var brickBreaker = new Axis.Game();

        var mainCamera = new Axis.Camera("main-camera", 800, 600);
        mainCamera.active = true;
        brickBreaker.addCamera(mainCamera);

        entities.init(brickBreaker);

        brickBreaker.addSystem(new Axis.System.SpriteSheetSystem);
        brickBreaker.addSystem(new Axis.System.RenderSystem);

        brickBreaker.runGame();

        window.brickBreaker = brickBreaker;
    };

    init();
});
