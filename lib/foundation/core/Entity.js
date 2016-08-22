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

    Add.prototype.component = function (component) {
        this.entity.components[component.type] = component;
    };


    return Entity
});
