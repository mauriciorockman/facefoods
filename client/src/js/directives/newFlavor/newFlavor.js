faceFoods.directive('newFlavor', function(ngDialog){
    return{
        restrict: 'E',
        templateUrl: 'directives/newFlavor/newFlavor.html',
        replace: true,
        scope: {
            name: '=name'
        },
        controller: function($scope, ngDialog){
            $scope.special = function(){
                $scope.active = !$scope.active 
            }
            $scope.newFlavor = function(){
                ngDialog.open({
                    template: 'newFlavor.html',
                    className: 'ngdialog-theme-default',
                    scope: $scope
                })
            }
        }
    }
})