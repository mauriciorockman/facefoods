app.factory('shopCartFactory', ['$rootScope', function ($rootScope) {
    // TODO: Definir rotas backend para cardápio

    var shopCartFactory = {};

    if ($rootScope.shoppingCart != {}) {
        $rootScope.shoppingCart = {
            total: 0,
            user: {
                name: "João da Silva",
                CEP: "89224471",
                address: "Rua Barra do Piraí",
                number: "253",
                complemento: "",
                phone: "996910811"
            },
            orders: []
        };
    }

    function searchOrderByID(id){
        var found
        $rootScope.shoppingCart.orders.forEach( function(order, i){
            if(order.id == id){
                found = i;
            }
        })
        return found
    }

    shopCartFactory.addOrder = function (dish) {
        $rootScope.shoppingCart.orders.push(dish);
    }

    shopCartFactory.deleteOrder = function(id){
        var index = searchOrderByID(id)
        if(index != undefined){
            $rootScope.shoppingCart.orders.splice(index, 1);
        }
    }

    shopCartFactory.decrementOrder = function(id){
        var index = searchOrderByID(id)
        if(index != undefined && $rootScope.shoppingCart.orders[index].qty>1){
            $rootScope.shoppingCart.orders[index].qty--;
        }
    }

    shopCartFactory.incrementOrder = function(id){
        var index = searchOrderByID(id)
        if(index != undefined){
            $rootScope.shoppingCart.orders[index].qty++;
        }
    }

    shopCartFactory.subTotal = function(order){
        if(order.type == 'pizza'){
            var totalFlavors = 0;

            order.flavors.selected.forEach( function(flavor){
                totalFlavors += flavor.price;                
            })
            
            return((totalFlavors+order.dough.price+order.crust.price+order.price)*order.qty);
        }else{
            var totalExtras = 0;

            order.extras.forEach( function(extras){
                totalExtras += extras.price
            })
            
            return (totalExtras+order.price)*order.qty;
        }

    }

    shopCartFactory.total = function(){
        total = 0;

        $rootScope.shoppingCart.orders.forEach( function(order){
            total += shopCartFactory.subTotal(order)
        });

        return total;
    }

    // shopCartFactory.addProduct = function (product) {
    //     $rootScope.shoppingCart.orders.push({
    //         type: 'general',
    //         name: product.name,
    //         price: product.price,
    //         qty: 1,
    //         id: product.id,
    //         availableExtras: product.extras,
    //         extras: []
    //     })
    // }

    return shopCartFactory;
}]);