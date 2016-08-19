define([
    "lib/foundation/helpers/Helpers.js"
], function (helpers) {
    var View = function (game, elementId) {
        var originalCanvas = document.getElementById(elementId);

        this.elementId = elementId;
        this.ratio = helpers.getPixelRatio(originalCanvas.getContext(game.type));
        this.canvas = helpers.createHiDPICanvas(originalCanvas, game.width, game.height, game.type, this.ratio);
        this.ctx = this.canvas.getContext(game.type);
    };

    return View;
});
