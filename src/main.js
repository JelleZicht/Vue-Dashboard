"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_js_1 = __importDefault(require("../node_modules/vue/dist/vue.js"));
window.onload = function () {
    var main = new vue_js_1.default({
        el: '#app',
        data: {
            message: 'Hello Vue.js!'
        }
    });
};
