faceFoods.controller('AddPizzaController', function($scope, NgTableParams){
    var data = [{name: "Broto", slices: 5, price: 20.00},{name: "Média", slices: 10, price: 30.00},{name: "Família", slices: 20, price: 40.00}];
    $scope.tablePizzaSizes = new NgTableParams(
            {}, {
                dataset: data,
                counts: []
            }
        );

    data = [{name: "Calabresa", price: 0.00, special: false},{name: "4 Queijos", price: 0.00, special: false},{name: "Baiana", price: 0.00, special: false}, {name: "Rei", price: 5.00, special: true}];
    $scope.tablePizzaFlavors = new NgTableParams(
            {}, {
                dataset: data,
                counts: []
            }
        );
    
    $scope.confirm = function(formData){
        $scope.closeThisDialog(formData);
    }
}) 