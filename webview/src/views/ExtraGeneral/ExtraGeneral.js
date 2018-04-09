app.controller('ExtraGeneralCtrl', ['$scope', '$rootScope', 'toaster', 'generalOrderFactory', '$window', 'search', '$state', function($scope, $rootScope, toaster, generalOrderFactory, $window, search, $state) {
    $window.scrollTo(0, 0);
    $scope.firstExtra = false;
    $scope.secondExtra = false;

    $scope.next = function(){
        if($scope.secondExtra){
            generalOrderFactory.finish();
            $state.go('OrderReview');
        }

        if($scope.firstExtra && !$scope.secondExtra){
            $window.scrollTo(0, 0);
            $scope.secondExtra = true
        }
    }
    
    $scope.selectQty = function(subID){
        return generalOrderFactory.selectQty(subID);
    }

    $scope.addExtra = function(extra, id){
        extra.type = 1;
        extra.subID = extra.id;
        extra.id = id;

        generalOrderFactory.addExtra(extra);
        $scope.firstExtra = true;            
    }

    $scope.incrementQty = function(detail, qtyMax, ID){
        extra = JSON.parse(angular.toJson(detail));
        extra.subID = extra.id;
        extra.id = ID;
        extra.type = 2; 

        if(generalOrderFactory.incrementQty(extra, qtyMax) == 'full'){
            toaster.pop('info', 'Limite', 'quantidade excedeu o limite')
        };
    }

    $scope.decrementQty = function(subID, qtyMin){
        generalOrderFactory.decrementQty(subID, qtyMin);
    }
}]);
