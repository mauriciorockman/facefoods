faceFoods.controller('AddPizzaController', function($scope){
    $scope.confirm = function(formData){
        $scope.closeThisDialog(formData);
    }
}) 