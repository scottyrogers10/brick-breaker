define(function () {
    var KeyboardInputSystem = function () {
        this.type = "keyboardInputSystem";
        this.game = null;
        this.isReady = false;

        this.pressed = {};
    };

    KeyboardInputSystem.prototype.onKeyDown = function (event) {
        this.pressed[event.keyCode] = true;
    };

    KeyboardInputSystem.prototype.onKeyUp = function (event) {
        this.pressed[event.keyCode] = false;
    };

    KeyboardInputSystem.prototype.activate = function (game) {
        var self = this;

        window.addEventListener("keydown", function (event) {
           self.onKeyDown(event);
       });

       window.addEventListener("keyup", function (event) {
           self.onKeyUp(event);
       });

       self.game = game;
       self.isReady = true;
    };

    KeyboardInputSystem.prototype.update = function () {
        var self = this;
        var rootEntity = self.game.world.rootEntity;

        var keyboardInputEntitiesCheck = function (entity) {
            return entity.hasComponent("keyboardInput");
        };

        var keyboardInputEntities = rootEntity.filter(keyboardInputEntitiesCheck);

        for (var i = 0; i < keyboardInputEntities.length; i++) {
            var keyboardInputComponent = keyboardInputEntities[i].getComponentByType("keyboardInput");
            keyboardInputComponent.pressed = self.pressed;
        }
    };

    return KeyboardInputSystem;
});
