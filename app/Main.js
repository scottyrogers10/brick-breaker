require([
    "lib/axis-js/Axis.js"
], function (Axis) {
    var init = function () {
        var world = new Axis.World();
        world.rootEntity = new Axis.Entity("rootEntity");
        world.width = 1000;
        world.height = 1000;

        var brickBreaker = new Axis.Game(world);

        var mainViewport = new Axis.Viewport("main-viewport", 600, 400);
        mainViewport.active = true;

        brickBreaker.addViewport(mainViewport);

        //TODO: Handle SpriteSheet images better then this!
        var spriteSheet = new Image();
        spriteSheet.src = "app/img/spritesheet.png";

        spriteSheet.addEventListener("load", function () {
            var paddle = new Axis.Entity("paddle");

            var paddlePosition = new Axis.Component.Position();
            paddlePosition.x = 800;
            paddlePosition.y = 800;
            paddle.addComponent(paddlePosition);

            var paddleSize = new Axis.Component.Size();
            paddleSize.w = 104;
            paddleSize.h = 24;
            paddle.addComponent(paddleSize);

            var paddleSprite = new Axis.Component.Sprite();
            paddleSprite.img = this;
            paddleSprite.srcX = 38;
            paddleSprite.srcY = 0;
            paddleSprite.srcW = 104;
            paddleSprite.srcH = 24;
            paddle.addComponent(paddleSprite);

            brickBreaker.world.rootEntity.addChildEntity(paddle);

            brickBreaker.addSystem(new Axis.System.RenderSystem());

            brickBreaker.runGameLoop();
        });

        window.brickBreaker = brickBreaker;
    };

    init();
});
