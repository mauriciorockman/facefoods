faceFoods.controller('MenuController', function($scope, ngDialog, NgTableParams){
    $scope.managePizza = function(){
        ngDialog.open({
            template: 'Dashboard/Menu/Dialogs/Pizza/ManagePizza/ManagePizza.html',
            controller: 'ManagePizzaController',
            width: 900,
            className: 'ngdialog-theme-default'
        })
    }
}) 