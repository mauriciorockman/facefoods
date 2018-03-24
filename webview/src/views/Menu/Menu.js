app.controller('MenuCtrl', ['$scope', '$rootScope', 'menuFactory', 'pizzaOrderFactory', '$state', function($scope, $rootScope, menuFactory, pizzaOrderFactory, $state) {
    $scope.addPizza = function(pizza){
        pizzaOrderFactory.addPizza(pizza);
        $state.go('PizzaOptions');
    }
}]);
