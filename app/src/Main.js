define(function (require) {
    var Axis = require("axis/Axis");
    var entities = require("Entities");
    var spriteSheetSystem = require("axis/systems/SpriteSheetSystem");
    var keyboardInputSystem = require("axis/systems/KeyboardInputSystem");
    var renderSystem = require("axis/systems/RenderSystem");
    var paddleMovementSystem = require("systems/PaddleMovementSystem");
    var ballMovementSystem = require("systems/BallMovementSystem");
    var rigidCollisionSystem = require("axis/systems/RigidCollisionSystem");
    var ballCollisionHandlerSystem = require("systems/BallCollisionHandlerSystem");
    var stateSystem = require("axis/systems/StateSystem");

    var init = function () {
        var brickBreaker = new Axis.Game();

        var mainCamera = new Axis.Camera("main-camera", 640, 500);
        mainCamera.isActive = true;

        brickBreaker.addCamera(mainCamera);
        brickBreaker.addSpriteSheet("app/img/spritesheet.png");
        brickBreaker.addSystems([spriteSheetSystem,
                                 keyboardInputSystem,
                                 stateSystem,
                                 paddleMovementSystem,
                                 ballMovementSystem,
                                 rigidCollisionSystem,
                                 ballCollisionHandlerSystem,
                                 renderSystem]);

        entities.init(brickBreaker);

        var currentGameState = "play";
        var gameState = {
            play: function () {
                brickBreaker.play();
                currentGameState = "pause";
            },
            pause: function () {
                brickBreaker.pause();
                currentGameState = "play";
            }
        };

        window.addEventListener("keydown", function (event) {
            if (event.keyCode === 32) {
                gameState[currentGameState]();
            }
        });

        window.brickBreaker = brickBreaker;
    };

    init();
});
