define(function () {
    var Collidable = function () {
        this.type = "collidable";
        this.isActive = true;
        this.isStatic = false;
        this.collidingEntities = [];
    };

    return Collidable;
});

// var collidingEntities = {
//     "1":{
//         entity: entity,
//         startTimestamp: 11111,
//         timestamp: 1111
//     }
// }
