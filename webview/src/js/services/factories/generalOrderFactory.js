app.factory('generalOrderFactory', ['$rootScope', 'shopCartFactory', function ($rootScope, shopCartFactory) {
    var generalOrderFactory = {};
    var template = {
        type: 'general',
        name: "",
        price: 0,
        qty: 1,
        id: 0,
        availableExtras: [],
        extras: []
    }

    generalOrderFactory.reset = function(){
        $rootScope.generalOrder = JSON.parse(angular.toJson(template));
    }

    generalOrderFactory.addProduct = function(product){
        generalOrderFactory.reset();
        $rootScope.generalOrder.id = product.id;
        $rootScope.generalOrder.name = product.name;
        $rootScope.generalOrder.price = product.price;
        $rootScope.generalOrder.availableExtras = product.extras;
    }

    generalOrderFactory.finish = function(){
        shopCartFactory.addOrder($rootScope.generalOrder);
        generalOrderFactory.reset();        
    }

    return generalOrderFactory;
}]);