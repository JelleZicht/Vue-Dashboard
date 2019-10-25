import Vue from '../node_modules/vue/dist/vue.js';

window.onload = function () {
    const main = new Vue({
        el: '#app',
        data: {
            message: 'Hello Vue.js!'
        }
    });
}
