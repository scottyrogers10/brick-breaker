define([
    "lib/foundation/systems/Render.js",
    "lib/foundation/systems/MotionSensor.js",
    "lib/foundation/systems/Animation.js",
    "lib/foundation/systems/DPad.js",
    "lib/foundation/systems/Collision.js",
    "lib/foundation/systems/Restraint.js",
    "lib/foundation/systems/State.js"
], function (Render, MotionSensor, Animation, DPad, Collision, Restraint, State) {

    return {
        Render: Render,
        MotionSensor: MotionSensor,
        Animation: Animation,
        DPad: DPad,
        Collision: Collision,
        Restraint: Restraint,
        State: State
    }
});
