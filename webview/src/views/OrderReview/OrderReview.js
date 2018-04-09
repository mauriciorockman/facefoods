app.controller('OrderReviewCtrl', ['$scope', '$rootScope', 'toaster', 'shopCartFactory', '$state', '$timeout', function($scope, $rootScope, toaster, shopCartFactory, $state, $timeout) {    
    console.log($rootScope.shoppingCart.orders);
    $scope.deleteOrder = function(index){
        
        shopCartFactory.zeroOrder(index);

        $timeout(function(){ shopCartFactory.deleteOrder(index);}, 500).then(function(success){
            if($rootScope.shoppingCart.orders.length==0){
                $state.go('Menu');
            }
        });
        
    }

    $scope.decrementOrder = function(index){
        shopCartFactory.decrementOrder(index);
    }

    $scope.incrementOrder = function(index){
        shopCartFactory.incrementOrder(index);
    }

    $scope.subTotal = function(order){
        return shopCartFactory.subTotal(order);
    }

    $scope.total = function(){
        return shopCartFactory.total();        
    }
}]);
