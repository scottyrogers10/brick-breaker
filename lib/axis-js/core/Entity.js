define(function () {
    var entityId = 0;

    var Entity = function (type) {
        this.type = type;
        this.id = entityId;
        this.parent = null;
        this.children = [];
        this.components = [];

        entityId++;
    };

    Entity.prototype.addChildEntity = function (entity) {
        entity.parent = this;
        this.children.push(entity);
    };

    Entity.prototype.addComponent = function (component) {
        this.components.push(component);
    };

    Entity.prototype.getComponentByType = function (type) {
        var self = this;

        for (var i = 0 ; i < self.components.length; i++) {
            if (type == self.components[i].type) {
                return self.components[i];
            }
        }
    };

    Entity.prototype.hasComponent = function (type) {
        return this.hasComponents([type]);
    };

    Entity.prototype.hasComponents = function (types) {
        var self = this;
        var matchingTypes = [];

        for (var i = 0; i < self.components.length; i++) {
            for (var j = 0; j < types.length; j++) {
                if (self.components[i].type == types[j]) {
                    matchingTypes.push(self.components[i].type);
                }
            }
        }

        //TODO: Need to handle this better... Entity could accidently have 2 of the same components.
        return matchingTypes.length == types.length ? true : false;
    };

    Entity.prototype.filter = function (filter) {
        var self = this;

        if (typeof filter !== "function") {
            filter = function () { return true; };
        }

        var results = [];
        var child = null;

        if (filter(self)) {
            results.push(self);
        }

        for (var i = 0 ; i < self.children.length; i++) {
            child = self.children[i];
            results = results.concat(child.filter(filter));
        }

        return results;
    };

    return Entity
});
