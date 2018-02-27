faceFoods.directive('newSize', function(ngDialog){
    return{
        restrict: 'E',
        templateUrl: 'directives/newSize/newSize.html',
        replace: true,
        scope: {
            name: '=name'
        },
        controller: function($scope, ngDialog){
            $scope.newSize = function(){
                ngDialog.open({
                    template: 'newSize.html',
                    className: 'ngdialog-theme-default'
                })
            }
        }
    }
})