var app=angular.module("webviewApp",["ui.router","ngAnimate","templates","ui.bootstrap","toaster"]);app.controller("indexCtrl",["$scope","$rootScope","$http","$timeout","toaster","$state",function($scope,$rootScope,$http,$timeout,toaster,$state){$timeout(function(){$scope.loaded=!0},1e3),$scope.doTheBack=function(){window.history.back()},$scope.pop=function(qty){1==qty?toaster.pop({type:"info",title:"Você já selecionou "+qty+" sabor",body:"Caso queira alterar, desmarque alguma opção",timeout:3e3}):toaster.pop({type:"info",title:"Você já selecionou "+qty+" sabores",body:"Caso queira alterar, desmarque alguma opção",timeout:3e3})},$scope.pedido={total:0,user:{nome:"João da Silva",cep:"89224471",rua:"Rua Barra do Piraí",numero:"253",complemento:"",telefone:"996910811"},pizzas:[],geral:[]},$scope.nsabores=["1"],$scope.currentPizza="",$scope.num_pizza_add=0,$scope.curr_pizza_index=null,$scope.selected=!1,$scope.issetBorda=!1,$scope.nSaboresLimit=1,$scope.issetMassa=!1,$scope.issetNSabores=!1,$scope.nSaboresSelec=0,$scope.curr_dish_index=null,$scope.num_dish_add=0,$scope.curr_extra_id=null,$scope.curr_extra_index=null,$scope.curr_extra_qty=0,$scope.addPizza=function(pizza){for($scope.currentPizza=pizza.titulo,$scope.nsabores=[],$scope.num_pizza_add++,$scope.curr_pizza_index=$scope.num_pizza_add-1,i=0;i<pizza.nsabores;i++)$scope.nsabores.push(i+1);$scope.pedido.pizzas[$scope.curr_pizza_index]={nome:pizza.titulo,preco:Number(pizza.preco),total:Number(pizza.preco),id:pizza.id,qtd:1,index:$scope.curr_pizza_index,borda:{preco:0,nome:"",id:""},massa:{preco:0,nome:"",id:""},sabores:[]},$scope.limparSabores(),$scope.issetNSabores=!1,$scope.issetBorda=!1,$scope.issetMassa=!1,$scope.nSaboresLimit=1,$scope.nSaboresSelec=0,console.log("pizza selecionada: "+$scope.currentPizza),console.log("Pizza adicionada ao carrinho: "+$scope.pedido.pizzas[$scope.curr_pizza_index].nome+", Preço: "+$scope.pedido.pizzas[$scope.curr_pizza_index].preco),console.log($scope.pedido)},$scope.setBorda=function(borda){$scope.issetBorda=!0,$scope.pedido.pizzas[$scope.curr_pizza_index].borda={nome:borda.nome,preco:Number(borda.preco),id:borda.id},$scope.atualizaTotalPizza($scope.curr_pizza_index),console.log($scope.pedido.pizzas[$scope.curr_pizza_index].borda.nome+" adicionada para a "+$scope.pedido.pizzas[$scope.curr_pizza_index].nome),console.log($scope.pedido)},$scope.setMassa=function(massa){$scope.issetMassa=!0,$scope.pedido.pizzas[$scope.curr_pizza_index].massa={nome:massa.nome,preco:Number(massa.preco),id:massa.id},$scope.atualizaTotalPizza($scope.curr_pizza_index),console.log($scope.pedido.pizzas[$scope.curr_pizza_index].massa.nome+" adicionada para a "+$scope.pedido.pizzas[$scope.curr_pizza_index].nome),console.log($scope.pedido)},$scope.addSabor=function(sabor){sabor.selected||$scope.nSaboresSelec!=$scope.nSaboresLimit?($scope.pedido.pizzas[$scope.curr_pizza_index].sabores.push({nome:sabor.sabor,preco:Number(sabor.preco),id:sabor.id}),$scope.atualizaTotalPizza($scope.curr_pizza_index),console.log($scope.pedido)):$scope.pop($scope.nSaboresSelec)},$scope.addProduct=function(produto){$scope.currentProductName=produto.name,$scope.num_dish_add++,$scope.curr_dish_index=$scope.num_dish_add-1,$scope.pedido.geral[$scope.curr_dish_index]={nome:produto.name,preco:Number(produto.price),total:Number(produto.price),index:$scope.curr_dish_index,qtd:1,id:produto.id,extras_disponiveis:produto.extras_disponiveis,extras:[]},$scope.atualizaTotalPedido(),0<$scope.pedido.geral[$scope.curr_dish_index].extras_disponiveis.length?($scope.curr_extra_index=0,$scope.curr_extra_id=$scope.pedido.geral[$scope.curr_dish_index].extras_disponiveis[$scope.curr_extra_index],$state.go("extraGeral"),window.scrollTo(0,0)):$state.go("resumoPedido"),console.log("Produto adicionado!"),console.log($scope.pedido.geral[$scope.curr_dish_index])},$scope.nextExtra=function(){$scope.pedido.geral[$scope.curr_dish_index].extras_disponiveis.length>$scope.curr_extra_index+1?($scope.curr_extra_index++,$scope.curr_extra_id=$scope.pedido.geral[$scope.curr_dish_index].extras_disponiveis[$scope.curr_extra_index],window.scrollTo(0,0)):$state.go("resumoPedido")},$scope.extraChangeQty=function(extra,operation,qtd_max,qtd_min){"mais"==operation&&$scope.curr_extra_qty<qtd_max?(extra.qtd++,$scope.curr_extra_qty++):"menos"==operation&&0<extra.qtd&&(extra.qtd--,$scope.curr_extra_qty--),console.log($scope.curr_extra_qty)},$scope.setNSabores=function(qty){$scope.nSaboresLimit=qty,$scope.issetNSabores=!0,$scope.salgado_doce="salgado",$scope.limparSabores(),$scope.nSaboresSelec=0,console.log(qty),$scope.pedido.pizzas[$scope.curr_pizza_index].sabores=[]},$scope.addSaborPizza=function(x){x?$scope.nSaboresSelec++:$scope.nSaboresSelec--,console.log($scope.nSaboresSelec)},$scope.check_cep=function(cep){8==cep.length?(console.log("Formato correto"),$http({method:"GET",url:"https://viacep.com.br/ws/"+cep+"/json/"}).then(function(response){$scope.user_rua=response.data.logradouro,$scope.cep_msg=""})):$scope.cep_msg="Formato incorreto de CEP! Exemplo de CEP: 89224471"},$scope.limparSabores=function(){$rootScope.$emit("limparSabores",{})},$scope.atualizaTotalPizza=function(index){for($scope.pedido.pizzas[index].total=$scope.pedido.pizzas[index].preco+$scope.pedido.pizzas[index].borda.preco+$scope.pedido.pizzas[index].massa.preco,i=0;i<$scope.pedido.pizzas[index].sabores.length;i++)$scope.pedido.pizzas[index].total+=$scope.pedido.pizzas[index].sabores[i].preco;$scope.pedido.pizzas[index].total*=$scope.pedido.pizzas[index].qtd,$scope.atualizaTotalPedido(),console.log("O valor total é: "+$scope.pedido.pizzas[index].total)},$scope.atualizaTotalPrato=function(index){$scope.pedido.geral[index].total=$scope.pedido.geral[index].preco,$scope.pedido.geral[index].total*=$scope.pedido.geral[index].qtd,$scope.atualizaTotalPedido()},$scope.atualizaTotalPedido=function(){for($scope.pedido.total=0,i=0;i<$scope.pedido.pizzas.length;i++)$scope.pedido.total+=$scope.pedido.pizzas[i].total;for(i=0;i<$scope.pedido.geral.length;i++)$scope.pedido.total+=$scope.pedido.geral[i].total;$scope.pedido.total<=0&&$timeout(function(){$state.go("Menu")},1e3),console.log("O valor total do pedido é: "+$scope.pedido.total)},console.log($scope.pedido)}]),app.run(function($rootScope){$rootScope.pizzaData={combos:[{imagem:"img1.jpg",titulo:"PIZZA GRANDE SALGADA + PIZZA DOCE PEQUENA + REFRIGERANTE 2L",descricao:"Descrição dessa promoção",preco:"65"},{imagem:"img1.jpg",titulo:"PIZZA GIGANTE SALGADA + PIZZA DOCE PEQUENA + REFRIGERANTE 2L",descricao:"Descrição dessa promoção",preco:"75"}],pizzas:[{tamanhos:[{titulo:"Pizza Broto",descricao:"15 cm e 1 sabor",preco:"20",nsabores:"1",id:"1"},{titulo:"Pizza Pequena",descricao:"15 cm e 1 sabor",preco:"20",nsabores:"1",id:"2"},{titulo:"Pizza Média",descricao:"15 cm e 1 sabor",preco:"20",nsabores:"2",id:"3"},{titulo:"Pizza Grande",descricao:"15 cm e 1 sabor",preco:"20",nsabores:"3",id:"4"},{titulo:"Pizza Gigante",descricao:"15 cm e 1 sabor",preco:"20",nsabores:"4",id:"6"}]},{opcoes:[{bordas:[{nome:"Borda de Catupiry",preco:"5",id:"1","descrição":""},{nome:"Borda de Cheddar",preco:"5",id:"2","descrição":""},{nome:"Sem Borda",preco:"",id:"3","descrição":""}]},{massas:[{nome:"Massa Fina",preco:"","descrição":"",id:"1"},{nome:"Massa Média",preco:"","descrição":"",id:"2"},{nome:"Massa Grossa",preco:"1","descrição":"",id:"3"}]}]},{sabores_salgados:[{sabor:"ALHO E ÓLEO",descricao:"feita com alho frito e molho de alho",preco:"",id:"1",selected:!1},{sabor:"AIPIM COM BACON",descricao:"molho, purê de aipim e bacon",preco:"",id:"2",selected:!1},{sabor:"BACON",descricao:"molho, mussarela e bacon",preco:"",id:"3",selected:!1},{sabor:"BAIANA",descricao:"molho, mussarela, calabresa, molho de pimenta, ovos e cebola",preco:"",id:"4",selected:!1},{sabor:"BOLONHESA",descricao:"coxão mole moído sem nenhuma gordura, milho e parmesão.",preco:"",id:"5",selected:!1},{sabor:"BRASILEIRA",descricao:"frango, presunto, tomate e queijo minas",preco:"",id:"6",selected:!1},{sabor:"BRÓCOLIS",descricao:"com bacon ou alho",preco:"",id:"7",selected:!1},{sabor:"CALABRESA",descricao:"calabresa fatiada com ou sem cebola",preco:"",id:"8",selected:!1},{sabor:"CATUPERU",descricao:"peito de peru fatiado com catupiry®",preco:"",id:"9",selected:!1},{sabor:"CHAMPIGNON",descricao:"champignons de primeira fatiados.",preco:"",id:"10",selected:!1},{sabor:"ALEMÃ",descricao:"lombo alemão com champignon",preco:"3",id:"11",selected:!1},{sabor:"AMALFITANA",descricao:"salada de alcachofra e mussarela de búfala",preco:"2",id:"12",selected:!1},{sabor:"ARGENTINA",descricao:"mignon, palmito e chimichurri",preco:"2",id:"13",selected:!1},{sabor:"GREGA",descricao:"mussarela de búfala, tomates secos, queijo minas, azeitonas Azapa, gorgonzola, um toque de manjericão e Catupiry.",preco:"4",id:"14",selected:!1}]},{sabores_doces:[{sabor:"AMAZÔNIA",descricao:"açaí com leite condensado.",preco:"",id:"50",selected:!1},{sabor:"BANANA AO RUN",descricao:"banana, chocolate preto ou branco e licor de run.",preco:"3",id:"51",selected:!1},{sabor:"BANANA COM CANELA",descricao:"banana e canela.",preco:"4",id:"52",selected:!1},{sabor:"BANANA COM CHOCOLATE",descricao:"banana, chocolate preto ou branco.",preco:"",id:"53",selected:!1},{sabor:"BANANA NEVADA",descricao:"banana caramelada e claras em neve.",preco:"",id:"54",selected:!1}]}],bebidas:[{titulo:"Coca Cola 2L",descricao:"",preco:"10"},{titulo:"Kuat 2L",descricao:"",preco:"8"}]},$rootScope.MenuData={user:[],menu:{combos:[],pizzas:{tamanhos:[{titulo:"Pizza Broto",descricao:"25cm e 4 fatias",preco:"18",id:"1",nsabores:"1"},{titulo:"Pizza Pequena",descricao:"30 cm e 6 fatias",preco:"22",id:"2",nsabores:"1"},{titulo:"Pizza Média",descricao:"35 cm e 8 fatias",preco:"27",id:"3",nsabores:"2"},{titulo:"Pizza Grande",descricao:"40 cm e 12 fatias",preco:"34",id:"4",nsabores:"3"},{titulo:"Pizza Gigante",descricao:"45 cm e 16 fatias",preco:"38",id:"5",nsabores:"4"}],extras:{borda:[{nome:"Borda de Catupiry",descricao:"",preco:"5",id:"1"},{nome:"Borda de Cheddar",descricao:"",preco:"5",id:"2"},{nome:"Sem Borda",descricao:"",preco:"0",id:"3"}],massa:[{nome:"Massa fina",descricao:"",preco:"0",id:"1"},{nome:"Massa Média",descricao:"",preco:"0",id:"2"},{nome:"Massa Grossa",descricao:"",preco:"1",id:"3"}]},sabores:{Salgada:[{sabor:"ALHO E ÓLEO",descricao:"feita com alho frito e molho de alho.",preco:"0",id:"1",selected:!1},{sabor:"AIPIM COM BACON",descricao:"molho, purê de aipim e bacon",preco:"0",id:"2",selected:!1},{sabor:"BACON",descricao:"molho, mussarela e bacon.",preco:"0",id:"9",selected:!1},{sabor:"BAIANA",descricao:"molho, mussarela, calabresa, molho de pimenta, ovos e cebola.",preco:"0",id:"10",selected:!1},{sabor:"BOLONHESA",descricao:"coxão mole moído sem nenhuma gordura, milho e parmesão.",preco:"0",id:"11",selected:!1},{sabor:"BRASILEIRA",descricao:"frango, presunto, tomate e queijo minas.",preco:"0",id:"12",selected:!1},{sabor:"BRÓCOLIS",descricao:"com bacon ou alho.",preco:"0",id:"13",selected:!1},{sabor:"CAMARÃO",descricao:"camarões médios com ou sem Catupiry®.",preco:"5",id:"3",selected:!1},{sabor:"CATARINENSE",descricao:"lombo, bacon, palmito e Catupiry®.",preco:"5",id:"4",selected:!1},{sabor:"CATARINENSE",descricao:"lombo, bacon, palmito e Catupiry®.",preco:"3",id:"14",selected:!1},{sabor:"ESCONDIDINHO DE CARNE SECA",descricao:"molho, mussarela, purê de aipim, carne seca desfiada.",preco:"3",id:"15",selected:!1},{sabor:"ESTROGONOFE DE CAMARÃO",descricao:"camarões médios com molho especial de estrogonofe e batata palha.",preco:"4",id:"16",selected:!1},{sabor:"ESTROGONOFE DE MIGNON",descricao:"mignon com molho especial de estrogonofe e batata palha.",preco:"3",id:"17",selected:!1},{sabor:"FRANCESA",descricao:"peperoni com palmito.",preco:"3",id:"18",selected:!1}],doce:[{sabor:"BANANA COM CHOCOLATE:",descricao:"banana, chocolate preto ou branco.",preco:"1",id:"5",selected:!1},{sabor:"CAPUCCINO",descricao:"chocolate preto ou branco com café.",preco:"1",id:"6",selected:!1},{sabor:"AMAZÔNIA",descricao:"açaí com leite condensado.",preco:"0",id:"19",selected:!1},{sabor:"BANANA AO RUN",descricao:"banana, chocolate preto ou branco e licor de run.",preco:"1",id:"20",selected:!1},{sabor:"BANANA COM CANELA",descricao:"banana e canela",preco:"1",id:"21",selected:!1},{sabor:"BANANA COM CHOCOLATE",descricao:"banana, chocolate preto ou branco.",preco:"0",id:"22",selected:!1},{sabor:"BANANA NEVADA",descricao:"banana caramelada e claras em neve.",preco:"0",id:"23",selected:!1},{sabor:"JAPONESA",descricao:" chocolate preto ou branco com cerejas e calda de cereja.",preco:"5",id:"7",selected:!1},{sabor:"TRUFAS",descricao:"chocolate preto com licor de cacau.",preco:"6",id:"8",selected:!1}]}},geral:[{categoria:"Bebidas",produtos:[{name:"Coca Cola 2L",description:"",price:"9",id:"1",extras_disponiveis:[]},{name:"Kuat 2L",description:"",price:"7",id:"2",extras_disponiveis:[]},{name:"Sprite 2L",description:"",price:"8",id:"3",extras_disponiveis:[]},{name:"Fanta Laranja 1,5L",description:"",price:"7",id:"4",extras_disponiveis:[]}]},{categoria:"Risotos",produtos:[{name:"RISOTO DE ALHO PORÓ, 1 PESSOA",description:"Arroz arbóreo, Alho poró, alho fresco triturado, queijo parmesão, cebola picada, salsinha fresca, vinho branco e temperos",price:"34",id:"5",extras_disponiveis:[]},{name:"RISOTO DE ALHO PORÓ, 2 PESSOAS",description:"Arroz arbóreo, Alho poró, alho fresco triturado, queijo parmesão, cebola picada, salsinha fresca, vinho branco e temperos",price:"55",id:"6",extras_disponiveis:[]},{name:"RISOTO DE LINGUIÇA BLUMENAL, 1 PESSOA",description:"Arroz arbóreo, Alho poró, alho fresco triturado, queijo parmesão, cebola picada, salsinha fresca, vinho branco e temperos",price:"34",id:"7",extras_disponiveis:[]},{name:"RISOTO DE LINGUIÇA BLUMENAL, 2 PESSOAS",description:"Arroz arbóreo, Alho poró, alho fresco triturado, queijo parmesão, cebola picada, salsinha fresca, vinho branco e temperos",price:"54",id:"8",extras_disponiveis:[]}]},{categoria:"Massas",produtos:[{name:"Fetuccine, 1 Pessoa",description:"Porção para 1 pessoa (aprox. 450 gramas)",price:"29",id:"9",extras_disponiveis:["1","2"]},{name:"Fetuccine, 2 Pessoas",description:"Porção para 2 pessoas (aprox. 900 gramas)",price:"50",id:"10",extras_disponiveis:["1","2"]},{name:"Nhoque, 1 Pessoa",description:"Massa Nhoque com molho preferencial para 1 pessoa (450 gramas aproximadamente)",price:"29",id:"11",extras_disponiveis:[]},{name:"Nhoque, 2 Pessoas",description:"Massa Nhoque com molho preferencial para 2 pessoas (900 gramas aproximadamente)",price:"50",id:"12",extras_disponiveis:[]},{name:"Pappardelle, 1 pessoa",description:"Porção para 1 pessoa. (450 gramas aproximadamente)",price:"30",id:"13",extras_disponiveis:[]},{name:"Pappardelle, 2 pessoas",description:"Porção para 2 pessoas. (900 gramas aproximadamente)",price:"40",id:"14",extras_disponiveis:[]},{name:"Penne, 1 Pessoa",description:"Porção para 1 pessoa. (450 gramas aproximadamente)",price:"30",id:"15",extras_disponiveis:[]},{name:"Penne, 2 pessoas",description:"Porção para 2 pessoas. (900 gramas aproximadamente)",price:"50",id:"16",extras_disponiveis:[]},{name:"Spaghetti, 1 pessoa",description:"Porção para 1 pessoa. (450 gramas aproximadamente)",price:"30",id:"17",extras_disponiveis:[]},{name:"Spaghetti, 2 pessoas",description:"Porção para 2 pessoas. (900 gramas aproximadamente)",price:"50",id:"18",extras_disponiveis:[]}]},{categoria:"Açaí",produtos:[{name:"Açaí tigela 360g",description:"escolha seus acompanhamentos",price:"11",id:"19",extras_disponiveis:[]},{name:"Açaí, tigela 480g",description:"escolha seus acompanhamentos",price:"14",id:"20",extras_disponiveis:[]}]}],extras:[{nome:"Complemento Fettuccine",id:"1",tipo:"1",opcoes:[{name:"Alho e óleo",description:"Alho fresco triturado, óleo de soja, salsinha fresca e temperos",price:"0",id:"1",selected:!1,qtd:0},{name:"Bolonhesa",description:"Molho de Tomate Especial, carne moída, tomate, vinho tinto e temperos",price:"0",id:"2",selected:!1,qtd:0},{name:"Bolonhesa",description:"Molho de Tomate Especial, carne moída, tomate, vinho tinto e temperos",price:"0",id:"3",selected:!1,qtd:0},{name:"Bolonhesa",description:"Molho de Tomate Especial, carne moída, tomate, vinho tinto e temperos",price:"0",id:"4",selected:!1,qtd:0},{name:"Bolonhesa",description:"Molho de Tomate Especial, carne moída, tomate, vinho tinto e temperos",price:"0",id:"5",selected:!1,qtd:0},{name:"Bolonhesa",description:"Molho de Tomate Especial, carne moída, tomate, vinho tinto e temperos",price:"0",id:"6",selected:!1,qtd:0}]},{nome:"Complemento Fettuccine 2",id:"2",tipo:"2",qtd_max:"10",qtd_min:"1",opcoes:[{name:"Alho e óleo",description:"Alho fresco triturado, óleo de soja, salsinha fresca e temperos",price:"0",id:"7",selected:!1,qtd:0},{name:"Bolonhesa",description:"Molho de Tomate Especial, carne moída, tomate, vinho tinto e temperos",price:"0",id:"8",selected:!1,qtd:0},{name:"Bolonhesa",description:"Molho de Tomate Especial, carne moída, tomate, vinho tinto e temperos",price:"0",id:"9",selected:!1,qtd:0},{name:"Bolonhesa",description:"Molho de Tomate Especial, carne moída, tomate, vinho tinto e temperos",price:"0",id:"10",selected:!1,qtd:0},{name:"Bolonhesa",description:"Molho de Tomate Especial, carne moída, tomate, vinho tinto e temperos",price:"0",id:"11",selected:!1,qtd:0},{name:"Bolonhesa",description:"Molho de Tomate Especial, carne moída, tomate, vinho tinto e temperos",price:"0",id:"12",selected:!1,qtd:0}]}]}}}),app.config(function($stateProvider,$urlRouterProvider){$urlRouterProvider.otherwise("/Menu"),$stateProvider.state("Menu",{url:"/Menu",templateUrl:"Menu/Menu.html",controller:"MenuCtrl"}).state("pizzaoptions",{url:"/pizzaoptions",templateUrl:"pizzaExtra/pizzaoptions.html",controller:"MenuCtrl"}).state("pizza-sabores",{url:"/pizza-sabores",templateUrl:"pizza-sabores/sabores.html",controller:"MenuCtrl"}).state("entrega",{url:"/entrega",templateUrl:"entrega/entrega.html",controller:"MenuCtrl"}).state("pagamento",{url:"/pagamento",templateUrl:"pagamento/pagamento.html",controller:"MenuCtrl"}).state("resumoPedido",{url:"/resumoPedido",templateUrl:"resumoPedido/resumoPedido.html",controller:"MenuCtrl"}).state("extraGeral",{url:"/extra",templateUrl:"extraGeral/extraGeral.html",controller:"MenuCtrl"})}),angular.module("templates",[]),app.controller("MenuCtrl",["$scope","$rootScope","toaster",function($scope,$rootScope,toaster){$scope.pop=function(){toaster.pop("info","title","text")},$scope.combos=$rootScope.pizzaData.combos,$scope.pizzas=$rootScope.MenuData.menu.pizzas.tamanhos,$scope.sabores_salgados=$rootScope.MenuData.menu.pizzas.sabores.Salgada,$scope.sabores_doces=$rootScope.MenuData.menu.pizzas.sabores.doce,$scope.bebidas=$rootScope.pizzaData.bebidas,$scope.bordas=$rootScope.MenuData.menu.pizzas.extras.borda,$scope.massas=$rootScope.MenuData.menu.pizzas.extras.massa,$categorias=$rootScope.MenuData.menu.geral,$rootScope.$on("limparSabores",function(){$scope.limparSabores()}),$scope.limparSabores=function(){for(i=0;i<$scope.sabores_salgados.length;i++)$scope.sabores_salgados[i].selected=!1;for(i=0;i<$scope.sabores_doces.length;i++)$scope.sabores_doces[i].selected=!1;console.log("limparSabores() foi chamada!")}}]),angular.module("templates").run(["$templateCache",function($templateCache){$templateCache.put("entrega/entrega.html",'<section> <div class="fixed-button-top"><div class="row align-vertical"><div class="col-2"><a ng-click="doTheBack()"><i class="fa fa-arrow-left"></i></a></div><div class="col-10 text-left">Forma de Entrega</div></div></div><div class="space-top"></div><h3 class="titulo">Entrega ou Retirada?</h3><row class="text-center"><div class="col">   <input class="hidden radio-label rb" type="radio" name="entrega" id="ent_1" value="entrega" ng-model="entrega" checked="checked"/><label class="button-label" for="ent_1"><h1>ENTREGA</h1></label></div><div class="col">   <input class="hidden radio-label rb" type="radio" name="entrega" id="ent_2" value="balcao" ng-model="entrega"/><label class="button-label" for="ent_2"><h1>RETIRADA NO BALCÃO</h1></label></div></row><div id="entrega-dados" ng-show="entrega == \'entrega\'"><h5 class="titulo">Dados Para Entrega</h5><div class="container"><div class="row"><div class="col"><h5>Nome</h5><input type="text" ng-model="pedido.user.nome"/></div></div><div class="row"><div class="col"><h5>CEP </h5><input type="text" ng-model="pedido.user.cep" ng-blur="check_cep(user_cep)"/><h6>{{cep_msg}}</h6></div></div><div class="row">   <div class="col-8"><h5>Rua</h5><input type="text" ng-model="pedido.user.rua"/></div><div class="col-4"><h5>Nº</h5><input type="text" ng-model="pedido.user.numero"/></div></div><div class="row"><div class="col"><h5>Complemento</h5><input type="text" ng-model="pedido.user.complemento"/></div></div><div class="row"><div class="col"><h5>Telefone</h5><input type="text" ng-model="pedido.user.telefone"/></div></div></div></div><div id="retirada-dados" ng-show="entrega == \'balcao\'"><h5 class="titulo">Dados para Retirada</h5><div class="container"><div class="row"><div class="col"><h5>Nome</h5><input type="text" ng-model="pedido.user.nome"/></div></div><div class="row"><div class="col"><h5>Telefone</h5><input type="text" ng-model="pedido.user.telefone"/></div></div></div></div>\x3c!-- escolha a massa--\x3e<div class="space-bottom"></div><a ui-sref="pagamento"><div class="fixed-button"><p>FORMA DE PAGAMENTO</p></div></a></section>'),$templateCache.put("extraGeral/extraGeral.html",'<section>  <div class="fixed-button-top"><div class="row align-vertical"><div class="col-2"><a ng-click="doTheBack()"><i class="fa fa-arrow-left"></i></a></div><div class="col-10 text-left">{{currentProductName}}</div></div></div><div class="space-top"></div><div ng-repeat="extra_disponivel in pedido.geral[curr_dish_index].extras_disponiveis"><div class="extra-container" ng-show="extra_disponivel == curr_extra_id"><div ng-repeat="extra in MenuData.menu.extras" ng-if="extra.id == extra_disponivel &amp;&amp; extra.tipo == 1"><h4 class="titulo">{{extra.nome}}</h4><div ng-repeat="extra_detalhes in extra.opcoes"><input class="hidden radio-label rb" type="radio" name="extra" id="ex_{{extra_detalhes.id}}"/><label class="button-label-extra" for="ex_{{extra_detalhes.id}}" ng-click=""><div class="row"><div class="col-10"><div class="sabor-pizza">{{extra_detalhes.name}}</div></div><div class="col-2"><div class="preco-pizza" ng-if="sabor.preco&gt;0">{{extra_detalhes.price}}</div></div></div><div class="row"><div class="descricao-pizza">{{extra_detalhes.description}}</div></div></label></div></div><div ng-repeat="extra in MenuData.menu.extras" ng-if="extra.id == extra_disponivel &amp;&amp; extra.tipo == 2"><h5 class="titulo">{{extra.nome}}</h5><p>mín {{extra.qtd_min}}, máx {{extra.qtd_max}}</p><div ng-repeat="extra_detalhes in extra.opcoes"><div class="row"><div class="col-3"><button class="btn-qtd" ng-click="extraChangeQty(extra_detalhes, \'mais\', extra.qtd_max, extra.qtd_min ) "><i class="fa fa-plus"></i></button><div class="prato-qtd">{{extra_detalhes.qtd}}</div><button class="btn-qtd" ng-click="extraChangeQty(extra_detalhes, \'menos\', extra.qtd_max, extra.qtd_min)"><i class="fa fa-minus"></i></button></div><div class="col-9"><div class="row"><div class="col-9"><div class="sabor-pizza">{{extra_detalhes.name}}</div></div><div class="col-3"><div class="preco-pizza" ng-if="sabor.preco&gt;0">{{extra_detalhes.price}}</div></div></div><div class="row"><div class="descricao-pizza">{{extra_detalhes.description}}</div></div></div></div><hr/></div></div></div></div><div class="space-bottom"><div class="fixed-button" ng-click="nextExtra()"><p>PRÓXIMO</p></div></div></section>'),$templateCache.put("Menu/Menu.html",'<section class="container" style=" background: linear-gradient(to right, #0 , #0);"><article><h2 class="titulo">Promoções</h2><div class="row card-prato" ng-repeat="combo in combos"><div class="col-3"><img ng-src="img/{{combo.imagem}}"/></div><div class="col-9"><h2 class="combo-titulo">{{combo.titulo}}</h2><p class="combo-descricao">{{combo.descricao}}</p><p class="combo-preco"> R${{combo.preco}}</p></div><hr/></div></article><article><h2 class="titulo">Pizzas</h2><a ui-sref="pizzaoptions" ng-repeat="pizza in pizzas" ng-click="addPizza(pizza)"><div class="row card-prato"><div class="col-10"><h2 class="prato-titulo">{{pizza.titulo}}</h2><p class="prato-descricao">{{pizza.descricao}}</p></div><div class="col-2 text-left nopadding"><p class="prato-preco">R${{pizza.preco}}</p></div></div></a></article><article ng-repeat="categoria in MenuData.menu.geral"><h2 class="titulo">{{categoria.categoria}}</h2><div class="row card-prato" ng-repeat="produto in categoria.produtos" ng-click="addProduct(produto)"><div class="col-10"><h2 class="prato-titulo">{{produto.name}}</h2><p class="prato-descricao">{{produto.description}}</p></div><div class="col-2 text-left nopadding"><p class="prato-preco">R${{produto.price}}</p></div><hr/></div></article></section>'),$templateCache.put("pagamento/pagamento.html",'<section>  <div class="fixed-button-top"><div class="row align-vertical"><div class="col-2"><a ng-click="doTheBack()"><i class="fa fa-arrow-left"></i></a></div><div class="col-10 text-left">Forma de Pagamento</div></div></div><div class="space-top"></div><h3 class="titulo">Forma de Pagamento?</h3><row class="text-center"><div class="col">   <input class="hidden radio-label rb" type="radio" name="pagamento" id="pag_1" value="dinheiro" ng-model="pagamento" checked="checked"/><label class="button-label" for="pag_1"><h1>DINHEIRO</h1></label></div><div class="col">   <input class="hidden radio-label rb" type="radio" name="pagamento" id="pag_2" value="cartao" ng-model="pagamento"/><label class="button-label" for="pag_2"><h1>CARTÃO</h1></label></div></row><div id="pag-dinheiro" ng-show="pagamento == \'dinheiro\'"><h5 class="titulo">Precisa de troco?</h5><div class="row"><div class="col">   <input class="hidden radio-label rb" type="radio" name="troco" id="troco_1" value="sim" ng-model="troco" checked="checked"/><label class="button-label" for="troco_1"><h1>SIM</h1></label></div><div class="col">   <input class="hidden radio-label rb" type="radio" name="troco" id="troco_2" value="nao" ng-model="troco" checked="checked"/><label class="button-label" for="troco_2"><h1>Não</h1></label></div></div><div id="troco-dialog" ng-show="troco == \'sim\'"><h5 class="titulo">Troco Para Quantos Reais?</h5><div class="container"><div class="row"><div class="col"></div><div class="col text-right"><h3>R$</h3></div><div class="col"><input type="text" ng-mode="valor_troco"/></div><div class="col"></div></div></div></div></div><div id="pag-cartao" ng-show="pagamento == \'cartao\'"><h6 class="text-center">Você pagará na maquininha na entrega</h6><h5 class="titulo">Cartões Aceitos</h5><div class="container"><h5>Visa</h5><h5>Mastercard</h5><h5>Hipercard</h5><h5>Elo</h5><h5>Sodexo</h5></div></div>\x3c!-- escolha a massa--\x3e<div class="space-bottom"></div><a ui-sref="pagamento"><div class="fixed-button"><p>CONFIRMAR PEDIDO</p></div></a></section>'),$templateCache.put("pizza-sabores/sabores.html",'<section><div class="fixed-button-top"><div class="row align-vertical"><div class="col-2">\x3c!--botão de voltar--\x3e<a ng-click="doTheBack()"> <i class="fa fa-arrow-left"></i></a></div><div class="col-10 text-left">\x3c!-- item selecionado--\x3e{{currentPizza}}</div></div></div><div class="space-top"></div>\x3c!--seleção da quantidade de sabores--\x3e<h2 class="titulo" ng-if="nsabores.length&gt;1">Quantos Sabores?</h2><h2 class="titulo" ng-if="nsabores.length==1">Qual Sabor?</h2><div class="container" ng-if="nsabores.length&gt;1"><div class="button-wrap"><div class="row"><div class="col" ng-repeat="x in nsabores"><input class="hidden radio-label rb" type="radio" name="nsabores" id="n_{{x}}"/><label class="button-label" for="n_{{x}}" ng-click="setNSabores(x)"><h1>{{x}}</h1></label></div></div></div></div>\x3c!-- filtro de sabores (salgado, doce)--\x3e<div id="selecao-sabores" ng-show="issetNSabores || nsabores.length == 1"><h2 class="titulo" ng-if="nsabores.length&gt;1"> Escolha os sabores</h2><div class="row text-center"><div class="col"><input class="hidden radio-label rb" id="sd_1" type="radio" name="salgado_doce" value="salgado" ng-model="salgado_doce" ng-checked="true"/><label class="button-label" for="sd_1"><h1>Salgadas</h1></label></div><div class="col"><input class="hidden radio-label rb" id="sd_2" type="radio" name="salgado_doce" value="doce" ng-model="salgado_doce"/><label class="button-label" for="sd_2"><h1>Doces</h1></label></div></div>\x3c!-- lista de sabores   --\x3e<div class="container" id="sabores-salgados" ng-show="salgado_doce == \'salgado\'"><div ng-repeat="sabor in sabores_salgados"><input class="cb" type="checkbox" id="sb_{{sabor.id}}" ng-model="sabor.selected" ng-change="addSaborPizza(sabor.selected)" ng-disabled="nSaboresSelec == nSaboresLimit &amp;&amp; sabor.selected == false"/><label class="cb-label" for="sb_{{sabor.id}}" ng-click="addSabor(sabor)"><div class="row"><div class="col-2"></div><div class="col-10"><div class="row"><div class="col-9"><div class="sabor-pizza">{{sabor.sabor}}</div></div><div class="col-3"><div class="preco-pizza" ng-if="sabor.preco&gt;0">{{sabor.preco}}</div></div></div><div class="row"><div class="descricao-pizza">{{sabor.descricao}}</div></div></div></div></label></div></div><div class="container" id="sabores-salgados" ng-show="salgado_doce == \'doce\'"><div ng-repeat="sabor in sabores_doces"><input class="cb" type="checkbox" id="sb_{{sabor.id}}" ng-model="sabor.selected" ng-change="addSaborPizza(sabor.selected)" ng-disabled="nSaboresSelec == nSaboresLimit &amp;&amp; sabor.selected == false"/><label class="cb-label" for="sb_{{sabor.id}}" ng-click="addSabor(sabor)"><div class="row"><div class="col-2"></div><div class="col-10"><div class="row"><div class="col-9"><div class="sabor-pizza">{{sabor.sabor}}</div></div><div class="col-3"><div class="preco-pizza" ng-if="sabor.preco&gt;0">{{sabor.preco}}</div></div></div><div class="row"><div class="descricao-pizza">{{sabor.descricao}}</div></div></div></div></label></div></div></div>\x3c!-- escolha a massa--\x3e<div class="space-bottom"></div><a ui-sref="resumoPedido" ng-show="nSaboresSelec == nSaboresLimit"><div class="fixed-button"><p>PRÓXIMO</p></div></a></section>'),$templateCache.put("pizzaExtra/pizzaoptions.html",'<section>  <div class="fixed-button-top"><div class="row align-vertical"><div class="col-2"><a ng-click="doTheBack()"><i class="fa fa-arrow-left"></i></a></div><div class="col-10 text-left">{{currentPizza}}</div></div></div><div class="space-top"></div><div class="page-container"><div class="info-container"><h2 class="titulo"> Escolha a borda</h2><div class="container"></div><div class="button-wrap"><div ng-repeat="borda in bordas"><input class="hidden radio-label rb" type="radio" name="borda" id="b_{{borda.id}}"/><label class="button-label-extra" for="b_{{borda.id}}" style="padding-top: 15px; padding-bottom: 15px;" ng-click="setBorda(borda)"><div class="row"><div class="col-9 text-left"><h6>{{borda.nome}}</h6></div><div class="col-3 text-left"><h1 class="prato-preco" ng-if="borda.preco&gt;0"> {{borda.preco}}</h1></div></div></label></div></div></div><div class="info-container" ng-show="issetBorda"><h2 class="titulo"> Escolha a Massa</h2><div class="container"></div><div class="button-wrap"><div ng-repeat="massa in massas"><input class="hidden radio-label rb" type="radio" name="massa" id="m_{{massa.id}}"/><label class="button-label-extra" for="m_{{massa.id}}" style="padding-top: 15px; padding-bottom: 15px;" ng-click="setMassa(massa)"><div class="row"><div class="col-8 text-left"><h6>{{massa.nome}}</h6></div><div class="col-4 text-left"><h1 class="prato-preco" ng-if="massa.preco&gt;0">{{massa.preco}}</h1></div></div></label></div></div></div></div>\x3c!-- escolha a massa--\x3e<div class="space-bottom"></div><a ui-sref="pizza-sabores" ng-show="issetBorda &amp;&amp; issetMassa"><div class="fixed-button"><p>ESCOLHA OS SABORES</p></div></a></section>'),$templateCache.put("resumoPedido/resumoPedido.html",'<section>  <div class="fixed-button-top"><div class="row align-vertical"><div class="col-2"><a ng-click="doTheBack()"><i class="fa fa-arrow-left"></i></a></div><div class="col-10 text-left">Resumo do seu pedido</div></div></div><div class="space-top"></div><h4 class="titulo">Resumo Do Seu Pedido</h4><div class="container"><div class="row" ng-repeat="pizza in pedido.pizzas"><div class="col container-pedido" ng-hide="pedido.pizzas[pizza.index].qtd&lt;=0"><div class="row"><div class="col text-right"><div class="btn-apagar-prato fa fa-times-circle" ng-click="pedido.pizzas[pizza.index].qtd = 0; atualizaTotalPizza(pizza.index)"></div></div></div><div class="row"><div class="col"><div class="card-pedido"><div class="row"><div class="col-3"><button class="btn-qtd" ng-click="pedido.pizzas[pizza.index].qtd = pedido.pizzas[pizza.index].qtd + 1; atualizaTotalPizza(pizza.index)"><i class="fa fa-plus"></i></button><div class="prato-qtd">{{pedido.pizzas[pizza.index].qtd}}</div><button class="btn-qtd" ng-click="pedido.pizzas[pizza.index].qtd = pedido.pizzas[pizza.index].qtd -1; atualizaTotalPizza(pizza.index)"><i class="fa fa-minus"></i></button></div><div class="col-9"><div class="row"><div class="col-9"><div class="title-resumo">{{pizza.nome}}</div></div><div class="col-3 text-left nopadding"><div class="title-preco">R${{pizza.preco}}</div></div></div><div class="row"><div class="col-9"><div class="desc-resumo">{{pizza.borda.nome}}</div></div><div class="col-3 text-left nopadding"><div class="resumo-preco" ng-if="pizza.borda.preco&gt;0">+R${{pizza.borda.preco}}</div></div></div><div class="row"><div class="col-9"><div class="desc-resumo">{{pizza.massa.nome}}</div></div><div class="col-3 text-left nopadding"><div class="resumo-preco" ng-if="pizza.massa.preco&gt;0">+R${{pizza.massa.preco}}</div></div></div><div ng-repeat="sabor in pizza.sabores"><div class="row"><div class="col-9"><div class="desc-resumo">{{sabor.nome}}</div></div><div class="col-3 nopadding"><div class="resumo-preco" ng-if="sabor.preco&gt;0">+R${{sabor.preco}}</div></div></div></div><div class="row"><div class="col-9"><div class="total-produto">Subtotal</div></div><div class="col-3 text-left nopadding"><div class="total-produto-preco">R${{pizza.total}}</div></div></div></div></div></div></div></div></div></div>\x3c!--PRATOS GERAIS--\x3e<div class="row" ng-repeat="prato in pedido.geral"><div class="col container-pedido" ng-hide="pedido.geral[prato.index].qtd&lt;=0"><div class="row"><div class="col text-right"><div class="btn-apagar-prato fa fa-times-circle" ng-click="pedido.geral[prato.index].qtd = 0; ; atualizaTotalPrato(prato.index)"></div></div></div><div class="row"><div class="col"><div class="card-pedido"><div class="row"><div class="col-3"><button class="btn-qtd" ng-click="pedido.geral[prato.index].qtd = pedido.geral[prato.index].qtd + 1; atualizaTotalPrato(prato.index)"><i class="fa fa-plus"></i></button><div class="prato-qtd">{{pedido.geral[prato.index].qtd}}</div><button class="btn-qtd" ng-click="pedido.geral[prato.index].qtd = pedido.geral[prato.index].qtd -1; atualizaTotalPrato(prato.index)"><i class="fa fa-minus"></i></button></div><div class="col-9"><div class="row"><div class="col-9"><div class="title-resumo">{{prato.nome}}</div></div><div class="col-3 text-left nopadding"><div class="title-preco">R${{prato.preco}}</div></div></div><div ng-repeat="extra in pizza.prato.extras"><div class="row"><div class="col-9"><div class="desc-resumo">{{extra.name}}</div></div><div class="col-3 nopadding"><div class="resumo-preco" ng-if="sabor.preco&gt;0">+R${{extra.price}}</div></div></div></div><div class="row"><div class="col-9"><div class="total-produto">Subtotal</div></div><div class="col-3 text-left nopadding"><div class="total-produto-preco">R${{prato.total}}</div></div></div></div></div></div></div></div></div></div></div><div class="resumo-total text-center">SUBTOTAL DO PEDIDO R${{pedido.total}}</div><a ui-sref="Menu"><button class="button-label"><p>CONTINUAR COMPRANDO</p></button></a><div class="space-bottom"></div><a ui-sref="entrega" ng-show="pedido.total&gt;0"><div class="fixed-button"><p>CONFIRMAR PEDIDO</p></div></a></section>')}]);