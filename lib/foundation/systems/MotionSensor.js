define(function () {
    var MotionSensor = function (game) {
        this.game = game;
        this.motionSensorData = {
            alpha: 0,
            beta: 0,
            gamma: 0
        };
    };

    MotionSensor.prototype.init = function () {
        var self = this;

        window.addEventListener("deviceorientation", function (event) {
            self.motionSensorData.alpha = event.alpha;
            self.motionSensorData.beta = event.beta;
            self.motionSensorData.gamma = event.gamma;
        });
    };

    MotionSensor.prototype.update = function () {
        var self = this;

        this.game.entities.forEach(function (entity) {
            if (entity.components.motionSensor) {
                entity.components.motionSensor.alpha = self.motionSensorData.alpha;
                entity.components.motionSensor.beta = self.motionSensorData.beta;
                entity.components.motionSensor.gamma = self.motionSensorData.gamma;
            }
        });
    };

    return MotionSensor;
});
