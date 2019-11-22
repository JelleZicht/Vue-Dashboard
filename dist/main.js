define("main", ["require", "exports", "../node_modules/vue/dist/vue.js"], function (require, exports, vue_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    window.onload = function () {
        var main = new vue_js_1.default({
            el: '#app',
            data: {
                message: 'Hello Vue.js!'
            }
        });
    };
});
//# sourceMappingURL=main.js.map