app.controller('OrderReviewCtrl', ['$scope', '$rootScope', 'toaster', 'shopCartFactory', '$state', function($scope, $rootScope, toaster, shopCartFactory, $state) {
    console.log($rootScope.shoppingCart);
    
    $scope.deleteOrder = function(id){
        shopCartFactory.deleteOrder(id);
        
        if($rootScope.shoppingCart.orders.length==0){
            $state.go('Menu');
        }
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
