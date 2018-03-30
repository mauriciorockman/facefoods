app.controller('OrderReviewCtrl', ['$scope', '$rootScope', 'toaster', 'shopCartFactory', function($scope, $rootScope, toaster, shopCartFactory) {
    $scope.deleteOrder = function(id){
        shopCartFactory.deleteOrder(id);
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
