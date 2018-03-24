app.directive('goBack', function(){
    return{
        restrict: 'E',
        templateUrl: 'directives/goBack/goBack.html',
        replace: true,
        scope: {
            dish: '=dish'
        },
        controller: function($scope){
            $scope.goBack = function(){
                window.history.back();
            }
        }
    }
})