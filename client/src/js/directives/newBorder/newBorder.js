faceFoods.directive('newBorder', function(ngDialog){
    return{
        restrict: 'E',
        templateUrl: 'directives/newBorder/newBorder.html',
        replace: true,
        controller: function($scope, ngDialog){
            $scope.newBorder = function(){
                ngDialog.open({
                    template: 'newBorder.html',
                    className: 'ngdialog-theme-default',
                    scope: $scope
                })
            }
        }
    }
})