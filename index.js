var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Isso é um incrementador e decrementador!',
        counter:0
    },
    methods:{
        increase(){
            this.counter++;
        },
        decrease(){
            if(this.counter === 0) return;
            this.counter--;
        },
        clearCounter(){
            this.counter = 0;
        }
    }
});
 