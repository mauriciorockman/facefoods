faceFoods.controller('ManagePizzaController', function($scope, NgTableParams){
    var data = [{name: "Broto", slices: 5, price: 20.00, radius: 25},{name: "Média", slices: 10, price: 30.00, radius: 30},{name: "Família", slices: 20, price: 40.00, radius: 40}];
    $scope.tablePizzaSizes = new NgTableParams(
            {}, {
                dataset: data,
                counts: []
            }
        );

    data = [{name: "Calabresa", desc: "Queijo, Tomate, Calabresas...", price: 0.00, special: false},{name: "4 Queijos", desc: "Queijo, Tomate, Mais Queijo...", price: 0.00, special: false},{name: "Baiana", desc: "Queijo, Tomate, Pimentas, Descrição Longa, Descrição Longa, Descrição Longa, Descrição Longa, Descrição Longa, Descrição Longa", price: 0.00, special: false}, {name: "Rei", desc: "Queijo, Ouro, Jóias...", price: 5.00, special: true}];
    $scope.tablePizzaFlavors = new NgTableParams(
            {}, {
                dataset: data,
                counts: []
            }
        );

    data = [{name: "Cheddar", price: 5.00},{name: "Catupiry", price: 3.00},{name: "Chocolate", price: 3.00}];
    $scope.tablePizzaBorders = new NgTableParams(
            {}, {
                dataset: data,
                counts: []
            }
        );
    
    $scope.delete = function(pizzaSize){
        swal({
            title: "Tem certeza que deseja deletar '"+pizzaSize.name+"'?",
            text: "Você não pode reverter isto.",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, delete.',
            cancelButtonText: 'Cancelar.'
        })
    }
}) 