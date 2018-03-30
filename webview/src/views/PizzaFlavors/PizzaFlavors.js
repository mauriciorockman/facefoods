app.controller('PizzaFlavorsCtrl', ['$scope', 'pizzaOrderFactory', 'toaster', '$state', function($scope, pizzaOrderFactory, toaster, $state) {
    $scope.selectedFlavors = {ids:[], size:0};
    
    $scope.setUserMax = function(max){
        $scope.issetUserMax = pizzaOrderFactory.setUserMax(max);
    }

    $scope.addFlavor = function(flavor){
        switch (pizzaOrderFactory.addFlavor(flavor)) {
            case true:
                $scope.selectedFlavors.ids[flavor.id] = true;
                $scope.selectedFlavors.size++;
                break;
            case false:
                $scope.selectedFlavors.ids[flavor.id] = false;
                $scope.selectedFlavors.size--;                
                break;
            case 'full':
                toaster.pop('info', 'Cheio', 'Foi escolhido sabores demais.')
                break;
        }

        // console.log("selectedFlavors: ");
        // console.log($scope.selectedFlavors);
        // console.log("flavor: ");
        // console.log(flavor);
       
    }

    $scope.finish = function(){
        pizzaOrderFactory.finish();
        $state.go('OrderReview')
    }
}]);
