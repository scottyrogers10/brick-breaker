define(function (require) {
    var Axis = require("axis/Axis");
    var entities = require("Entities");
    var spriteSheetSystem = require("axis/systems/SpriteSheetSystem");
    var keyboardInputSystem = require("axis/systems/KeyboardInputSystem");
    var renderSystem = require("axis/systems/RenderSystem");
    var paddleMovementSystem = require("systems/PaddleMovementSystem");
    var ballMovementSystem = require("systems/BallMovementSystem");
    var rigidCollisionSystem = require("axis/systems/rigidCollisionSystem");

    var init = function () {
        var brickBreaker = new Axis.Game();

        var mainCamera = new Axis.Camera("main-camera", 640, 500);
        mainCamera.isActive = true;

        brickBreaker.addCamera(mainCamera);
        brickBreaker.addSpriteSheet("app/img/spritesheet.png");
        brickBreaker.addSystems([spriteSheetSystem,
                                 keyboardInputSystem,
                                 paddleMovementSystem,
                                 ballMovementSystem,
                                 rigidCollisionSystem,
                                 renderSystem]);

        entities.init(brickBreaker);

        brickBreaker.run();

        window.brickBreaker = brickBreaker;
    };

    init();
});
