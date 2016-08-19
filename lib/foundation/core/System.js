define([
    "lib/foundation/systems/Render.js",
    "lib/foundation/systems/MotionSensor.js",
    "lib/foundation/systems/Animation.js",
    "lib/foundation/systems/DPad.js",
    "lib/foundation/systems/Movement.js",
    "lib/foundation/systems/CollisionDetection"
], function (Render, MotionSensor, Animation, DPad, Movement, CollisionDetection) {

    return {
        Render: Render,
        MotionSensor: MotionSensor,
        Animation: Animation,
        DPad: DPad,
        Movement: Movement,
        CollisionDetection: CollisionDetection
    }
});
