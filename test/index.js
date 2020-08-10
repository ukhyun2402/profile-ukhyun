new Vue({
    el: '#app',
    data: {
        applyRed: false,
        color: '',
    },
    computed: {
        divClassed: function () {
            return {
                red: this.applyRed,
                blue: !this.applyRed
            }
        }
    },
})