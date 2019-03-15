new Vue({
    el : "#app",
    data : {
        element : '',
        list:[],
        budget: 0
    },
    computed : {
        getTotal : function(){
            let total = 0;
            for (var i = 0; i < this.list.length; i++) {
                if(this.list[i].good){
                    total += Number(this.list[i].price);
                }
            }
            return total;
        },

        getBudgetMessage : function(){
            let total = this.getTotal;
            if(this.budget < total){
                return "Tu dépasses le budget";
            }else{
                return "";
            }
        }
    },
    mounted: function(){
        if (localStorage.getItem('list')) {
            try {
                this.list = JSON.parse(localStorage.getItem('list'));
            } catch(e) {
                localStorage.removeItem('list');
            }
        }
    },
    methods: {
        addOnList: function(){
            this.list.push({text :this.element, price:"", good:false});
            this.addOnLocalStorage();
        },
        addOnBag: function(item){
            for (let i = 0; i < this.list.length; i++) {
                if (this.list[i].text === item.text) {
                    this.list[i].good = true;
                }
            }
            this.addOnLocalStorage();
        },
        deleteFromList: function(index){
            this.list.splice(index, 1);
            this.addOnLocalStorage();
        },
        addOnLocalStorage(){
            const parsed = JSON.stringify(this.list);
            localStorage.setItem('list', parsed);
        }
    }
});