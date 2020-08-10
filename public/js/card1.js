"use strict";

Vue.options.delimiters = ['${', '}'];
new Vue({
  el: '#app',
  data: {
    a: true
  },
  watch: {
    a: function a() {
      console.log(this.a);
    }
  }
});