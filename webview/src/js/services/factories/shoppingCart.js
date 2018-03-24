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
            pizzas: [],
            general: []
        };
    }

    shopCartFactory.addPizza = function (pizza) {
        $rootScope.shoppingCart.pizzas.push(pizza);
    }

    shopCartFactory.addProduct = function (product) {
        $rootScope.shoppingCart.general.push({
            name: product.name,
            price: product.price,
            qty: 1,
            id: product.id,
            availableExtras: product.extras,
            extras: []
        })
    }

    return shopCartFactory;
}]);