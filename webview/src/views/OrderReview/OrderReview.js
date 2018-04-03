app.controller('OrderReviewCtrl', ['$scope', '$rootScope', 'toaster', 'shopCartFactory', '$state', '$timeout', function($scope, $rootScope, toaster, shopCartFactory, $state, $timeout) {    
    $scope.deleteOrder = function(id){
        
        shopCartFactory.zeroOrder(id);

        $timeout(function(){ shopCartFactory.deleteOrder(id);}, 500).then(function(success){
            if($rootScope.shoppingCart.orders.length==0){
                $state.go('Menu');
            }
        });
        
    }

    $scope.decrementOrder = function(id){
        shopCartFactory.decrementOrder(id);
    }

    $scope.incrementOrder = function(id){
        shopCartFactory.incrementOrder(id);
    }

    $scope.subTotal = function(order){
        return shopCartFactory.subTotal(order);
    }

    $scope.total = function(){
        return shopCartFactory.total();        
    }
}]);
