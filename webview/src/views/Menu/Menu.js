<<<<<<< HEAD
app.controller('MenuCtrl', function($scope, $rootScope, $http) {
=======
app.controller('MenuCtrl', ['$scope', '$rootScope', 'toaster', function($scope, $rootScope, toaster) {
    $scope.pop = function(){
        toaster.pop('info', "title", "text");
    };    
    toaster.pop('info', "title", "text");
    
>>>>>>> 75de6f6ff11450830bd568f0ab3d2de690e3d646
    $scope.combos = $rootScope.pizzaData.combos;
    $scope.pizzas = $rootScope.pizzaData.pizzas[0].tamanhos;
    $scope.sabores_salgados = $rootScope.pizzaData.pizzas[2].sabores_salgados;
    $scope.sabores_doces = $rootScope.pizzaData.pizzas[3].sabores_doces;
    $scope.bebidas = $rootScope.pizzaData.bebidas;

    $scope.bordas = [{"borda":"Catupiry", "preco": "R$ 5", "id": "1"}, {"borda":"Cheddar", "preco": "R$ 5", "id": "2"},{"borda":"Sem Borda", "preco": "", "id": "3"}];
    $scope.massas = [{"massa":"Fina", "preco": "", "id": "1"}, {"massa":"Normal", "preco": "", "id": "2"},{"massa":"Grossa", "preco": "R$ 2", "id": "3"}];  
<<<<<<< HEAD
    

    $scope.user_nome = "Maurício Montiel";
    $scope.user_cep = "";

    $rootScope.$on("limparSabores", function(){
        $scope.limparSabores();
    });

    $scope.limparSabores = function(){
        for(i=0 ; i<$scope.sabores_salgados.length; i++){
            $scope.sabores_salgados[i].selected = false;
          }

        console.log("limparSabores() foi chamada!")
    }
    

    
});
=======
    $scope.nsabores = [{"n":"1", "id":"1"},{"n":"2", "id":"2"},{"n":"3", "id":"3"},{"n":"4", "id":"4"}];
}]);
>>>>>>> 75de6f6ff11450830bd568f0ab3d2de690e3d646
