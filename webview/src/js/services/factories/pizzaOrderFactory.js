app.factory('pizzaOrderFactory', ['$rootScope', 'shopCartFactory', function ($rootScope, shopCartFactory) {
    // TODO: Definir rotas backend

    var pizzaOrderFactory = {};
    var template = {
        id: 0,
        type: "pizza",
        name: "",
        price: 0,
        qty: 1,
        crust: {
            price: 0,
            name: "",
            id: ""
        },
        dough: {
            price: 0,
            name: "",
            id: ""
        },
        maxFlavors: 0,
        flavors: {
            userMax: 0,
            selected: []
        }
    };

    pizzaOrderFactory.reset = function () {
        $rootScope.pizzaOrder = JSON.parse(angular.toJson(template));
    };

    pizzaOrderFactory.addPizza = function (pizza) {
        pizzaOrderFactory.reset();
        $rootScope.pizzaOrder.id = pizza.id;
        $rootScope.pizzaOrder.name = pizza.name;
        $rootScope.pizzaOrder.price = pizza.price;
        $rootScope.pizzaOrder.maxFlavors = pizza.maxFlavors;
        // Setar o UserMax ao adicionar a pizza, corrigindo o bug quando o maxFlavors==1
        pizzaOrderFactory.setUserMax(pizza.maxFlavors);
    };

    pizzaOrderFactory.setCrust = function (crust) {
        $rootScope.pizzaOrder.crust.id = crust.id;
        $rootScope.pizzaOrder.crust.name = crust.name;
        $rootScope.pizzaOrder.crust.price = crust.price;
        return true;
    };

    pizzaOrderFactory.setDough = function (dough) {
        $rootScope.pizzaOrder.dough.id = dough.id;
        $rootScope.pizzaOrder.dough.name = dough.name;
        $rootScope.pizzaOrder.dough.price = dough.price;
        return true;
    };

    pizzaOrderFactory.setUserMax = function (max) {
        $rootScope.pizzaOrder.flavors.userMax = max;
        return true;
    }

    pizzaOrderFactory.addFlavor = function (flavor) {
        var intFlavors = $rootScope.pizzaOrder.flavors.selected.length;

        // Checa se sabor já não foi adicionado, se já, remove da lista de sabores.
        // Encerra a função.        
        if(intFlavors != 0){
            for(i = 0; i < intFlavors; i++){
                if($rootScope.pizzaOrder.flavors.selected[i].id == flavor.id){
                    $rootScope.pizzaOrder.flavors.selected.splice(i, 1);
                    return false;
                }
            }    
        }

        // Checa se limite de sabores possui espaço, 
        //  se sim, adiciona o novo sabor. Encerra a função. 
        //  se não, retorna que 'cheio'. 
        if( intFlavors < $rootScope.pizzaOrder.flavors.userMax &&
            intFlavors < $rootScope.pizzaOrder.maxFlavors) { 
            
            $rootScope.pizzaOrder.flavors.selected.push({
                id: flavor.id,
                name: flavor.flavor,
                price: flavor.price,
            })
            return true;

        }else{
            return 'full';
        }
    };

    pizzaOrderFactory.finish = function () {
        shopCartFactory.addOrder($rootScope.pizzaOrder);
        pizzaOrderFactory.reset();
    }

    return pizzaOrderFactory;
}]);