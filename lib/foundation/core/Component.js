define([
    "lib/foundation/components/MotionSensor.js",
    "lib/foundation/components/Position.js",
    "lib/foundation/components/Size.js",
    "lib/foundation/components/Sprite.js",
    "lib/foundation/components/SpriteAnimation.js",
    "lib/foundation/components/State.js",
    "lib/foundation/components/Physics.js",
    "lib/foundation/components/DPad.js",
    "lib/foundation/components/Collision.js",
    "lib/foundation/components/Restraint.js"
], function (MotionSensor, Position, Size, Sprite, SpriteAnimation, State, Physics, DPad, Collision, Restraint) {

     return {
         Size: Size,
         Position: Position,
         Sprite: Sprite,
         SpriteAnimation: SpriteAnimation,
         MotionSensor: MotionSensor,
         State: State,
         Physics: Physics,
         DPad: DPad,
         Collision: Collision,
         Restraint: Restraint
     };
});
