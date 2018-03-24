app.controller('PizzaOptionsCtrl', ['$scope', 'pizzaOrderFactory', function($scope, pizzaOrderFactory) {
    // TOTHINK: Sem borda deveria ser estático?
    $scope.setCrust = function(crust){
        $scope.issetCrust = pizzaOrderFactory.setCrust(crust);
    }
    // TOTHINK: Deveria ter uma opção 'Massa normal' para não confundir usuários? 
    $scope.setDough = function(dough){
        $scope.issetDough = pizzaOrderFactory.setDough(dough);
    }
}]);
