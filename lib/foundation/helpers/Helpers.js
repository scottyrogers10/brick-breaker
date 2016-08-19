define(function () {
    var game = {
        formatWidth: function (width) {
            if (width == "full-screen") {
                return window.innerWidth;
            } else {
                return width;
            }
        },
        formatHeight: function (height) {
            if (height == "full-screen") {
                return window.innerHeight;
            } else {
                return height;
            }
        }
    };

    var view = {
        getPixelRatio: function (ctx) {
            var dpr = window.devicePixelRatio || 1;
            var bsr = ctx.webkitBackingStorePixelRatio ||
                ctx.mozBackingStorePixelRatio ||
                ctx.msBackingStorePixelRatio ||
                ctx.oBackingStorePixelRatio ||
                ctx.backingStorePixelRatio || 1;

            return dpr / bsr;
        },
        createHiDPICanvas: function (canvas, w, h, type, ratio) {
            canvas.width = w * ratio;
            canvas.height = h * ratio;
            canvas.style.width = w + "px";
            canvas.style.height = h + "px";
            canvas.getContext(type).setTransform(ratio, 0, 0, ratio, 0, 0);

            return canvas;
        }
    };

    return {
        formatWidth: game.formatWidth,
        formatHeight: game.formatHeight,
        getPixelRatio: view.getPixelRatio,
        createHiDPICanvas: view.createHiDPICanvas
    }
});
