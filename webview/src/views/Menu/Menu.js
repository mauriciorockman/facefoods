app.controller('MenuCtrl', ['$scope', '$rootScope', 'menuFactory', 'pizzaOrderFactory', 'generalOrderFactory', '$state', function($scope, $rootScope, menuFactory, pizzaOrderFactory, generalOrderFactory, $state) {
    $scope.addPizza = function(pizza){
        pizzaOrderFactory.addPizza(pizza);
        $state.go('PizzaOptions');
    }

    $scope.addProduct = function(product){
        generalOrderFactory.addProduct(product);
        if(product.extras.length > 0){
            $state.go('ExtraGeneral')
        }else{
            generalOrderFactory.finish()
            $state.go('OrderReview')
        }
    }
}]);
