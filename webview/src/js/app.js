var app = angular.module('webviewApp', ['ui.router', 'ngAnimate','templates', 'ui.bootstrap', 'toaster']);

app.controller('indexCtrl', ['$scope', '$rootScope', '$http', '$timeout', 'toaster', function($scope, $rootScope, $http, $timeout, toaster) {
  
    $timeout(function() { $scope.loaded = true; }, 1000);

    //botão de voltar
    $scope.doTheBack = function() {
        window.history.back();
    };

    // mensagem sabores
    $scope.pop = function(qty){
        if(qty==1){
            toaster.pop({type:'info', title:"Você já selecionou "+qty+" sabor", body: "Caso queira alterar, desmarque alguma opção", timeout: 3000});
        }else{
            toaster.pop({type:'info', title:"Você já selecionou "+qty+" sabores", body: "Caso queira alterar, desmarque alguma opção", timeout: 3000});
        }
    
    };  

    //########################################################################
    // INICIALIZAÇÃO DAS VARIÁVEIS
    //#########################################################################

    // objeto com as informações do pedido
    $scope.pedido = {
        user : {},
    };
    
    // array com as opções de quantidade de sabores de pizza selecionáveis
    $scope.nsabores = ["1"]; // definição padrão (1 sabor)

    //nome da pizza atual selecionada, para exibição no menu superior
    $scope.currentPizza = '';
   
    //Número de pizzas adicionadas ao carrinho
    $scope.num_pizza_add = 0;
    
    // index da pizza atual selecionada
    $scope.curr_pizza_index = null;

    // valor padrão dos checkboxes de seleção de pizza
    $scope.selected = false;
 
    // seleção de borda da pizza
    $scope.issetBorda = false; // definição padrão (nenhuma borda escolhida) 
    $scope.nSaboresLimit = 1 // definição padrão do número máximo de sabores selecionáveis

    $scope.issetMassa = false; // definição padrão para a seleção de massa (nenhuma massa de pizza escolhida)

    // seleção da quantidade de sabores da pizza
    $scope.issetNSabores = false; //foi escolhida a quantidade de sabores

    $scope.nSaboresSelec = 0; // Definição padrão da quantidade  de sabores selecionados



    //########################################################################
    // ADICIONANDO NOVA PIZZA AO CARRINHO
    //#########################################################################

        $scope.addPizza = function(pizza){
            $scope.currentPizza = pizza.titulo; // Atualiza nome da pizza selecionada atualmente
            $scope.nsabores = []; // limpa opção de número de sabores selecionáveis
            $scope.num_pizza_add++;
            $scope.curr_pizza_index = $scope.num_pizza_add-1;

            for(i=0; i<pizza.nsabores; i++){
                $scope.nsabores.push(i+1); // cria a lista do número de sabores selecionáveis
            };

            //$scope.pedido.pizzas.push({}); // cria um novo objeto no array de pizzas

            $scope.pedido.pizzas[$scope.curr_pizza_index] = { // atribui as características da pizza para o índice atual
                nome: pizza.titulo,
                preco: pizza.preco,
                id: pizza.id,
                sabores : [],
            };

            console.log("pizza selecionada: "+$scope.currentPizza);
            console.log("Pizza adicionada ao carrinho: "+$scope.pedido.pizzas[$scope.curr_pizza_index].nome+", Preço: "+$scope.pedido.pizzas[$scope.curr_pizza_index].preco)
            console.log($scope.pedido);
        };

        
    //########################################################################
    // ESCOLHENDO BORDA NA PIZZA ATUAL NO CARRINHO
    //#########################################################################
   
        $scope.setBorda = function(borda){
            $scope.issetBorda = true; // foi escolhida a borda
            $scope.pedido.pizzas[$scope.curr_pizza_index].borda = {
                nome: borda.nome,
                preco: borda.preco,
                id: borda.id
            };

        console.log($scope.pedido.pizzas[$scope.curr_pizza_index].borda.nome+" adicionada para a "+$scope.pedido.pizzas[$scope.curr_pizza_index].nome);
        console.log($scope.pedido);
        };


    //########################################################################
    // ESCOLHENDO MASSA NA PIZZA ATUAL NO CARRINHO
    //#########################################################################

        $scope.setMassa = function(massa){
            $scope.issetMassa = true; // foi escolhida a massa
            $scope.pedido.pizzas[$scope.curr_pizza_index].massa = {
                nome: massa.nome,
                preco: massa.preco,
                id: massa.id
            }

            console.log($scope.pedido.pizzas[$scope.curr_pizza_index].massa.nome+" adicionada para a "+$scope.pedido.pizzas[$scope.curr_pizza_index].nome);
            console.log($scope.pedido);
        }

    //########################################################################
    // ESCOLHENDO OS SABORES PARA A PIZZA ATUAL NO CARRINHO
    //#########################################################################

        $scope.addSabor = function(sabor){

            
            if( !sabor.selected && $scope.nSaboresSelec == $scope.nSaboresLimit){

                $scope.pop($scope.nSaboresSelec); // caso tente adicionar mais sabores que o máximo definido

            }else{

                $scope.pedido.pizzas[$scope.curr_pizza_index].sabores.push({nome: sabor.sabor, preco: sabor.preco, id: sabor.id})
                console.log($scope.pedido);
            }
            
           
            
        }



    //########################################################################
    // OUTRAS FUNÇÕES
    //#########################################################################

        // Quando clicar em algum dos botões para escolher a quantidade de sabores
        $scope.setNSabores = function(qty){ //escolha da quantidade de sabores

            $scope.nSaboresLimit = qty; // seta a quantidade máxima
            $scope.issetNSabores = true; // foi escolhido um valor de quantidade de sabores
            $scope.salgado_doce = "salgado"; // valor padrão do filto de exibição de sabores de pizza
            $scope.limparSabores(); // limpa todas as seleções nos checkboxes de sabores realizadas previamente
            $scope.nSaboresSelec = 0; // zera a quantidade de sabores selecionadas
            console.log(qty);

            $scope.pedido.pizzas[$scope.curr_pizza_index].sabores = []; // limpa todos os sabores da pizza no carrinho
        }

        // quando clicar em alguma checkbox de sabor de pizza
        $scope.addSaborPizza = function(x){
            if(x){
                $scope.nSaboresSelec++; 
            }else{
                $scope.nSaboresSelec--;
            }
            
            console.log($scope.nSaboresSelec);
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

        
        // limpar todas as seleções de sabor
        $scope.limparSabores = function(){
            $rootScope.$emit("limparSabores", {}); // chamada de função do Menu.js
        }





    // modelo do objeto com os dados do pedido
 
    
 $scope.pedido = {
        user:{
            name : "Maurício Montiel"
            
        },
        pizzas :[
            {
                nome : "Pizza Gigante",
                preco : "25",
                id : "1",
                borda :{
                    nome : "Borda de Catupiry",
                    preco : "",
                    id : ""
                },
                massa: {
                    nome : "Massa média",
                    preco : "",
                    id : ""
                },
                sabores:[
                    {
                        nome :"Frango com Catupiry",
                        preco : "",
                        id : "1"
                    },
                    {
                        nome :"Calabresa",
                        preco : "",
                        id : ""
                    },
                    {
                        nome :"Chocolate",
                        preco : "2",
                        id : ""
                    }
                ]
            }
        ]
        
    };

    console.log($scope.pedido)


}]);
