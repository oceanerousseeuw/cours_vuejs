new Vue({
    el : "#app",
    data : {
        element : '',
        list:[
            //{text: "tomate", price: 0, good: false}
        ],
        total: 0
    },
    methods: {
        addOnList: function(){
            this.list.push({text :this.element, price:this.price, good:false});
        },
        addOnBag: function(item){
            for (var i = 0; i < this.list.length; i++) {
                if (this.list[i].text === item.text) {
                    this.list[i].good = true;
                    console.log(item);
                    this.list[i].price = Number(item.price);
                }
            }
            /*for (var i = 0; i < this.list.length; i++) {
                this.total = 0;
                if(this.list[i].good){
                    this.total += Number(this.list[i].price);
                }
            }*/
        },
        deleteFromList: function(index){
            this.list.splice(index, 1);
        }
    }
});