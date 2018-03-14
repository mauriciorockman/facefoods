<<<<<<< HEAD
var app = angular.module('webviewApp', ['ui.router', 'templates', 'ui.bootstrap', 'ngAnimate']);

app.controller('indexCtrl', function($scope, $rootScope, $http, $timeout) {
=======
var app = angular.module('webviewApp', ['ui.router', 'ngAnimate','templates', 'ui.bootstrap', 'toaster']);

app.controller('indexCtrl', ['$scope', '$http', '$timeout', 'toaster', function($scope, $http, $timeout, toaster) {
>>>>>>> 75de6f6ff11450830bd568f0ab3d2de690e3d646
  $timeout(function() { $scope.loaded = true; }, 1000);

  $scope.nsabores = ["1"];

  $scope.limparSabores = function(){
    $rootScope.$emit("limparSabores", {});
  }


  //botão de voltar
  $scope.doTheBack = function() {
    window.history.back();
  };

  //pizza atual selecionada
  $scope.currentPizza = '';

  //adiciona pizza ao carrinho
  $scope.addPizza = function(pizza){
    $scope.currentPizza = pizza.titulo;
    
    $scope.nsabores = [];
    for(i=0; i<pizza.nsabores; i++){
      $scope.nsabores.push(i+1);
    }
    console.log($scope.currentPizza);
    console.log($scope.nsabores);
  }
  
  // seleção padrão dos sabores de pizza
  $scope.selected = false;

  // seleção de borda da pizza
  $scope.issetBorda = false; // definição padrão (nenhuma borda escolhida) 
  $scope.nSaboresLimit = 1 // definição padrão do número de sabores escolhíveis
  
  $scope.setBorda = function(){
      $scope.issetBorda = true; // foi escolhida a borda
  }


  // seleção da quantidade de sabores da pizza
  $scope.issetNSabores = false; //foi escolhida a quantidade de sabores
  
  $scope.setNSabores = function(qty){ //escolha da quantidade de sabores
    $scope.nSaboresLimit = qty; // quantidade máxima
    $scope.issetNSabores = true; // foi escolhido um valor de quantidade de sabores

    $scope.selected = false;

    $scope.salgado_doce = "salgado";
    console.log(qty);

    $scope.limparSabores();
    $scope.nSaboresSelec = 0;
  }

    $scope.nSaboresSelec = 0; // quantidade  de sabores selecionados

    $scope.addSaborPizza = function(x){
        if(x){
            $scope.nSaboresSelec++; 
        }else{
            $scope.nSaboresSelec--;
        }
        
        console.log($scope.nSaboresSelec);
    }
    
    //ao tentar selecionar mais sabores que o permitido
    $scope.msg_sabores = function(selected){
        if( !selected && $scope.nSaboresSelec == $scope.nSaboresLimit){
            alert("Você já selecionou "+$scope.nSaboresSelec+" Sabores");
        }
    }

    // busca de CEP no webservice dos correios
    $scope.check_cep = function (cep){
        if (cep.length == 8){
            console.log("Formato correto")
            $http({
                method:"GET",
                url: "https://viacep.com.br/ws/"+cep+"/json/"
            }).then(function sucess(response){
                $scope.user_rua = response.data.logradouro;
                $scope.cep_msg = "";
            })
        }else{
            $scope.cep_msg = "Formato incorreto de CEP! Exemplo de CEP: 89224471"
        }
    }

}]);
