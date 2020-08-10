Vue.options.delimiters = ['${', '}'];
new Vue({
    el: '#app',
    data: {
        a : true,
    },
    watch: {
        a: function() {
            console.log(this.a);
        }
    },
})