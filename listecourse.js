new Vue({
    el : "#app",
    data : {
        element : '',
        list:[],
        budget: 0,
        possibilities : ["tomate", "oignons", "pâtes", "aubergine", "boeuf", "pomme de terre", "lait", "beurre", "sauce", "ketchup", "piment", "pain", "pomme"]
    },
    templates: "",
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
        },
        getFilteredPossibilities: function () {
            return this.possibilities.filter(possibility => possibility.includes(this.element));
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
        addOnList: function (item) {
            this.list.push({text: item, price: "", good: false});
            this.addOnLocalStorage();
            this.element = "";
        },
        addOnBag: function(item){
            for (let i = 0; i < this.list.length; i++) {
                if (this.list[i].text === item.text) {
                    this.list[i].good = true;
                }
            }
            this.addOnLocalStorage();
        },
        deleteFromList: function(id){
            this.list.splice(id, 1);
            this.addOnLocalStorage();
        },
        addOnLocalStorage(){
            const parsed = JSON.stringify(this.list);
            localStorage.setItem('list', parsed);
        },
        addOnInput() {
            console.log('addOnInput');
        }
    }
});