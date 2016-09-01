require([
    "lib/axis-js/Axis.js",
    "app/src/entities/Entities.js",
    "app/src/systems/MovementSystem"
], function (Axis, entities, MovementSystem) {
    var init = function () {
        var brickBreaker = new Axis.Game();

        var mainCamera = new Axis.Camera("main-camera", 800, 600);
        mainCamera.active = true;
        brickBreaker.addCamera(mainCamera);

        entities.init(brickBreaker);

        brickBreaker.addSystem(new Axis.System.SpriteSheet);
        brickBreaker.addSystem(new Axis.System.KeyboardInput);
        brickBreaker.addSystem(new MovementSystem);
        brickBreaker.addSystem(new Axis.System.Render);

        brickBreaker.runGame();

        window.brickBreaker = brickBreaker;
    };

    init();
});
