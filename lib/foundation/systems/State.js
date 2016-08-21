define(function () {
    var State = function(game){
        this.type = "state";
        this.game = game;
        this.typeStates = {};
    };

    State.prototype.on = function(type, states){
        this.typeStates[type] = states;
    };

    State.prototype.update = function(){
        var entities = this.game.entities;
        var typeStates = this.typeStates;

        entities.filter(function(entity){
            return entity.components.state != null;
        }).forEach(function(entity){
            var states = typeStates[entity.type];
            var stateName = entity.components.state.name;

            if (states != null && stateName !=null){
                if (entity.components.state.hasChanged && states[stateName].init) {
                    states[stateName].init(entity);
                }

                entity.components.state.hasChanged = false;

                if (states[stateName].update) {
                    states[stateName].update(entity);
                }
            }
        });
    };

    return State
});
