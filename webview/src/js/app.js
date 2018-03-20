var app = angular.module('webviewApp', ['ui.router', 'ngAnimate','templates', 'ui.bootstrap', 'toaster']);

app.controller('indexCtrl', ['$scope', '$rootScope', '$http', '$timeout', 'toaster','$state', function($scope, $rootScope, $http, $timeout, toaster, $state) {
  
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
        total:0,
        user : {
            nome: "João da Silva",
            cep: "89224471",
            rua: "Rua Barra do Piraí",
            numero: "253",
            complemento: "",
            telefone: "996910811"
        },
        pizzas: [],
        geral: []
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
    $scope.issetNSabores = false; // não foi escolhida a quantidade de sabores

    $scope.nSaboresSelec = 0; // Definição padrão da quantidade  de sabores selecionados

    // ###### VÁRIÁVEIS PARA OS PRATOS GERAIS ###########

    // index do prato atual
    $scope.curr_dish_index = null;

    // número de pratos adicionados ao carrinho
    $scope.num_dish_add = 0;

    //id do extra atual em seleção
    $scope.curr_extra_id = null;

    // index do extra atual em seleção
    $scope.curr_extra_index = null;

    //quantidade de extras escolhidos em um tipo de extra de seleção de quantidade
    $scope.curr_extra_qty = 0;




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
                preco: Number(pizza.preco),
                total: Number(pizza.preco),
                id: pizza.id,
                qtd: 1,
                index: $scope.curr_pizza_index,
                borda: {
                    preco: 0,
                    nome: "",
                    id : ""
                },
                massa: {
                    preco: 0,
                    nome: "",
                    id : ""
                },
                sabores : []
            };


            $scope.limparSabores();

            $scope.issetNSabores = false;
            $scope.issetBorda = false;
            $scope.issetMassa = false;

            $scope.nSaboresLimit = 1;
            $scope.nSaboresSelec = 0;

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
                preco: Number(borda.preco),
                id: borda.id
            };

            $scope.atualizaTotalPizza($scope.curr_pizza_index);

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
                preco: Number(massa.preco),
                id: massa.id
            }

            $scope.atualizaTotalPizza($scope.curr_pizza_index);

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

                $scope.pedido.pizzas[$scope.curr_pizza_index].sabores.push({nome: sabor.sabor, preco: Number(sabor.preco), id: sabor.id})

                $scope.atualizaTotalPizza($scope.curr_pizza_index);

                console.log($scope.pedido);
            }
            
           
            
        }

    //########################################################################
    // ADICIONANDO ITENS GERAIS AO CARRINHO
    //#########################################################################

        $scope.addProduct = function (produto){
            $scope.currentProductName = produto.name;
            $scope.num_dish_add++;
            $scope.curr_dish_index = $scope.num_dish_add - 1;

            $scope.pedido.geral[$scope.curr_dish_index] = {
                nome: produto.name,
                preco: Number(produto.price),
                total:  Number(produto.price),
                index: $scope.curr_dish_index,
                qtd: 1,
                id: produto.id,
                extras_disponiveis: produto.extras_disponiveis,
                extras : []
            };

            $scope.atualizaTotalPedido();

            if($scope.pedido.geral[$scope.curr_dish_index].extras_disponiveis.length > 0){
                // caso haja extras disponíveis, indicar qual o primeiro extra
                $scope.curr_extra_index = 0;
                $scope.curr_extra_id = $scope.pedido.geral[$scope.curr_dish_index].extras_disponiveis[$scope.curr_extra_index];
                $state.go('extraGeral');
                window.scrollTo(0,0);
            }else{
                // se não houver extras, ir para a página de resumo do pedido
                $state.go('resumoPedido');
            }

            

            console.log("Produto adicionado!");
            console.log($scope.pedido.geral[$scope.curr_dish_index]);
        }

    //########################################################################
    // FLUXO DE ESCOLHA DOS EXTRAS
    //#########################################################################

        $scope.nextExtra = function(){
            if($scope.pedido.geral[$scope.curr_dish_index].extras_disponiveis.length > ($scope.curr_extra_index+1)){
                $scope.curr_extra_index++;
                $scope.curr_extra_id = $scope.pedido.geral[$scope.curr_dish_index].extras_disponiveis[$scope.curr_extra_index];
                window.scrollTo(0,0);
            }else{
                $state.go('resumoPedido');
            }
    }


        $scope.extraChangeQty = function(extra, operation, qtd_max, qtd_min){
 
                if(operation == 'mais' && $scope.curr_extra_qty < qtd_max){
                    extra.qtd++;
                    $scope.curr_extra_qty++;
                    
                }else if(operation == 'menos' && extra.qtd >0){
                    extra.qtd--;
                    $scope.curr_extra_qty--;
                }
            console.log($scope.curr_extra_qty);
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

        //atualiza valor total da pizza
        $scope.atualizaTotalPizza = function(index){

                $scope.pedido.pizzas[index].total = 
                $scope.pedido.pizzas[index].preco +
                $scope.pedido.pizzas[index].borda.preco +
                $scope.pedido.pizzas[index].massa.preco;

                for(i=0; i<$scope.pedido.pizzas[index].sabores.length; i++){
                    $scope.pedido.pizzas[index].total += $scope.pedido.pizzas[index].sabores[i].preco;
                }

                $scope.pedido.pizzas[index].total *= $scope.pedido.pizzas[index].qtd;

                $scope.atualizaTotalPedido();

            console.log("O valor total é: "+$scope.pedido.pizzas[index].total);
            
        };

        $scope.atualizaTotalPrato = function(index){
            $scope.pedido.geral[index].total =
            $scope.pedido.geral[index].preco;

            $scope.pedido.geral[index].total *= $scope.pedido.geral[index].qtd;

            $scope.atualizaTotalPedido();
        }

        
        $scope.atualizaTotalPedido = function(){

            $scope.pedido.total = 0;

            for(i=0; i<$scope.pedido.pizzas.length; i++){
                $scope.pedido.total += $scope.pedido.pizzas[i].total;
            }

            for(i=0; i<$scope.pedido.geral.length; i++){
                $scope.pedido.total += $scope.pedido.geral[i].total;
            }

            if($scope.pedido.total <= 0){
                $timeout(function() { $state.go('Menu'); }, 1000);

            }

            console.log("O valor total do pedido é: " +$scope.pedido.total)
        }




    // modelo do objeto com os dados do pedido
 
    
 /*$scope.pedido = {
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
        ],
        geral : [
            {
                "nome" : "Fettuccine",
                "id" : "3",
                "qtd" : 1,
                "index" : 0,
                "extras_disponiveis" :[]
                "preco" : 30,
                "total" : 40,
                "extras" : [
                    {
                        "nome" : "Bolonhesa",
                        "preco" : 10
                    }
                ]

            }
        ]
        
    }*/

    console.log($scope.pedido)


}]);
