faceFoods.controller('MenuController', function($scope, ngDialog, NgTableParams){
    $scope.addPizza = function(){
        ngDialog.open({
            template: 'Menu/Dialogs/Pizza/AddPizza/AddPizza.html',
            controller: 'AddPizzaController',
            width: 900,
            className: 'ngdialog-theme-default'
        }).closePromise.then(function(dialogResult){
            console.log(dialogResult);
        })
    }
}) 