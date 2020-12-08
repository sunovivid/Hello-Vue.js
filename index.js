var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Hello Vue!',
        seen: false,
        todos: [
            { text: 'JS배우기' },
            { text: 'Vue배우기' },
            { text: '12월까지 사이트 만들기' }
        ]
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('');
        }
    }
});