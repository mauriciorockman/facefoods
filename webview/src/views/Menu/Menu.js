app.controller('MenuCtrl', ['$scope', '$rootScope', 'toaster', function($scope, $rootScope, toaster) {
    
    
    $scope.pop = function(){
        toaster.pop('info', "title", "text");
    };    
    
    
    $scope.combos = $rootScope.pizzaData.combos;
    $scope.pizzas = $rootScope.MenuData.menu.pizzas.tamanhos;
    $scope.sabores_salgados = $rootScope.MenuData.menu.pizzas.sabores.Salgada;
    $scope.sabores_doces = $rootScope.MenuData.menu.pizzas.sabores.doce;
    $scope.bebidas = $rootScope.pizzaData.bebidas;

    $scope.bordas = $rootScope.MenuData.menu.pizzas.extras.borda;
    //[{"borda":"Catupiry", "preco": "R$ 5", "id": "1"}, {"borda":"Cheddar", "preco": "R$ 5", "id": "2"},{"borda":"Sem Borda", "preco": "", "id": "3"}];
    $scope.massas =  $rootScope.MenuData.menu.pizzas.extras.massa;
   // [{"massa":"Fina", "preco": "", "id": "1"}, {"massa":"Normal", "preco": "", "id": "2"},{"massa":"Grossa", "preco": "R$ 2", "id": "3"}]; 

   $categorias = $rootScope.MenuData.menu.geral;
    
    
    $rootScope.$on("limparSabores", function() {
        $scope.limparSabores();
    });
    
    $scope.limparSabores = function() {
        for (i = 0; i < $scope.sabores_salgados.length; i++){
            $scope.sabores_salgados[i].selected = false;
        } 

        for (i = 0; i < $scope.sabores_doces.length; i++){
            $scope.sabores_doces[i].selected = false;
        } 
        
        console.log("limparSabores() foi chamada!")
    };

}]);
