define(function () {
    var State = function (name, states) {
        this.type = "state";
        this.hasChanged = true;
        this.states = {};

        Object.defineProperties(this, {
            name: {
                get: function(){
                    return name;
                },
                set: function(value){
                    name = value;
                    this.hasChanged = true;
                }
            }
        });
    };

    return State
});
