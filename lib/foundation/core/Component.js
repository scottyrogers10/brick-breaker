define([
    "lib/foundation/components/MotionSensor.js",
    "lib/foundation/components/Position.js",
    "lib/foundation/components/Size.js",
    "lib/foundation/components/Sprite.js",
    "lib/foundation/components/State.js",
    "lib/foundation/components/Velocity.js",
    "lib/foundation/components/DPad.js",
    "lib/foundation/components/Collidable.js",
    "lib/foundation/components/Restraint.js"
], function (MotionSensor, Position, Size, Sprite, State, Velocity, DPad, Collidable, Restraint) {

     return {
         Size: Size,
         Position: Position,
         Sprite: Sprite,
         MotionSensor: MotionSensor,
         State: State,
         Velocity: Velocity,
         DPad: DPad,
         Collidable: Collidable,
         Restraint: Restraint
     };
});
