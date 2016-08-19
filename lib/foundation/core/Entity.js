define(function () {
    var entityId = 0;

    var Entity = function (type) {
        this.type = type;
        this.id = entityId;
        this.components = {};

        this.add = new Add(this);

        entityId++;
    };

    function Add (entity) {
        this.entity = entity;
    };

    Add.prototype.component = function (name, component) {
        this.entity.components[name] = component;
    };


    return Entity
});
