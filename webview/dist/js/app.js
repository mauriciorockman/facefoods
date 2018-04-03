var app=angular.module("webviewApp",["ui.router","ngAnimate","templates","ui.bootstrap","toaster","ngResource"]);app.controller("indexCtrl",["$scope","$rootScope","$http","$timeout","toaster","$state","menuFactory",function($scope,$rootScope,$http,$timeout,toaster,$state,menuFactory){menuFactory.setMenu?($timeout(function(){$scope.loaded=!0},1e3),$state.go("Menu")):toaster.pop("error","Falha","Falha ao coletar dados, verifique a conexão ou tente novamente mais tarde")}]),app.run(function($rootScope){$rootScope.menu={},$rootScope.shoppingCart={},$rootScope.pizzaOrder={},$rootScope.generalOrder={}}),app.filter("range",function(){return function(n){for(var res=[],i=1;i<=n;i++)res.push(i);return res}}),app.config(function($stateProvider,$urlRouterProvider){$stateProvider.state("Menu",{url:"/Menu",templateUrl:"Menu/Menu.html",controller:"MenuCtrl"}).state("PizzaOptions",{url:"/PizzaOptions",templateUrl:"PizzaOptions/PizzaOptions.html",controller:"PizzaOptionsCtrl"}).state("PizzaFlavors",{url:"/PizzaFlavors",templateUrl:"PizzaFlavors/PizzaFlavors.html",controller:"PizzaFlavorsCtrl"}).state("Delivery",{url:"/Delivery",templateUrl:"Delivery/Delivery.html",controller:"DeliveryCtrl"}).state("Payment",{url:"/Payment",templateUrl:"Payment/Payment.html",controller:"PaymentCtrl"}).state("OrderReview",{url:"/OrderReview",templateUrl:"OrderReview/OrderReview.html",controller:"OrderReviewCtrl"}).state("ExtraGeneral",{url:"/ExtraGeneral",templateUrl:"ExtraGeneral/ExtraGeneral.html",controller:"ExtraGeneralCtrl"})}),angular.module("templates",[]),app.directive("goBack",function(){return{restrict:"E",templateUrl:"directives/goBack/goBack.html",replace:!0,scope:{message:"=message"},controller:function($scope){$scope.goBack=function(){window.history.back()}}}}),app.directive("order",function(){return{restrict:"E",templateUrl:"directives/order/order.html",replace:!0,scope:{order:"=order"}}}),app.factory("generalOrderFactory",["$rootScope","shopCartFactory",function($rootScope,shopCartFactory){var generalOrderFactory={},template={type:"general",name:"",price:0,qty:1,id:0,availableExtras:[],extras:[]};return generalOrderFactory.reset=function(){$rootScope.generalOrder=JSON.parse(angular.toJson(template))},generalOrderFactory.addProduct=function(product){generalOrderFactory.reset(),$rootScope.generalOrder.id=product.id,$rootScope.generalOrder.name=product.name,$rootScope.generalOrder.price=product.price,$rootScope.generalOrder.availableExtras=product.extras},generalOrderFactory.finish=function(){shopCartFactory.addOrder($rootScope.generalOrder),generalOrderFactory.reset()},generalOrderFactory}]),app.factory("menuFactory",["$resource","$rootScope",function($resource,$rootScope){var menuFactory={};return menuFactory.setMenu=$resource("js/menuData.json").get().$promise.then(function(result){return $rootScope.menu=result.menu,!0},function(result){return!1}),menuFactory}]),app.factory("pizzaOrderFactory",["$rootScope","shopCartFactory",function($rootScope,shopCartFactory){var pizzaOrderFactory={},template={id:0,type:"pizza",name:"",price:0,qty:1,crust:{price:0,name:"",id:""},dough:{price:0,name:"",id:""},maxFlavors:0,flavors:{userMax:0,selected:[]}};return pizzaOrderFactory.reset=function(){$rootScope.pizzaOrder=JSON.parse(angular.toJson(template))},pizzaOrderFactory.addPizza=function(pizza){pizzaOrderFactory.reset(),console.log($rootScope.pizzaOrder),$rootScope.pizzaOrder.id=pizza.id,$rootScope.pizzaOrder.name=pizza.name,$rootScope.pizzaOrder.price=pizza.price,$rootScope.pizzaOrder.maxFlavors=pizza.maxFlavors,pizzaOrderFactory.setUserMax(pizza.maxFlavors)},pizzaOrderFactory.setCrust=function(crust){return $rootScope.pizzaOrder.crust.id=crust.id,$rootScope.pizzaOrder.crust.name=crust.name,$rootScope.pizzaOrder.crust.price=crust.price,!0},pizzaOrderFactory.setDough=function(dough){return $rootScope.pizzaOrder.dough.id=dough.id,$rootScope.pizzaOrder.dough.name=dough.name,$rootScope.pizzaOrder.dough.price=dough.price,!0},pizzaOrderFactory.setUserMax=function(max){return $rootScope.pizzaOrder.flavors.userMax=max,!0},pizzaOrderFactory.addFlavor=function(flavor){var intFlavors=$rootScope.pizzaOrder.flavors.selected.length;if(0!=intFlavors)for(i=0;i<intFlavors;i++)if($rootScope.pizzaOrder.flavors.selected[i].id==flavor.id)return $rootScope.pizzaOrder.flavors.selected.splice(i,1),!1;return intFlavors<$rootScope.pizzaOrder.flavors.userMax&&intFlavors<$rootScope.pizzaOrder.maxFlavors?($rootScope.pizzaOrder.flavors.selected.push({id:flavor.id,name:flavor.name,price:flavor.price}),!0):"full"},pizzaOrderFactory.finish=function(){shopCartFactory.addOrder($rootScope.pizzaOrder),pizzaOrderFactory.reset()},pizzaOrderFactory}]),app.factory("shopCartFactory",["$rootScope",function($rootScope){var shopCartFactory={};function searchOrderByID(id){var found;return $rootScope.shoppingCart.orders.forEach(function(order,i){order.id==id&&(found=i)}),found}return $rootScope.shoppingCart!={}&&($rootScope.shoppingCart={total:0,user:{name:"João da Silva",CEP:"89224471",address:"Rua Barra do Piraí",number:"253",complemento:"",phone:"996910811"},orders:[]}),shopCartFactory.addOrder=function(dish){var ID;dish=angular.toJson(dish),$rootScope.shoppingCart.orders.forEach(function(order){parsedOrder=JSON.parse(angular.toJson(order)),parsedOrder.qty=1,parsedOrder=JSON.stringify(parsedOrder),parsedOrder==dish&&(ID=order.id)}),null!=ID?shopCartFactory.incrementOrder(ID):(dish=JSON.parse(dish),$rootScope.shoppingCart.orders.push(dish))},shopCartFactory.deleteOrder=function(id){var index=searchOrderByID(id);null!=index&&$rootScope.shoppingCart.orders.splice(index,1)},shopCartFactory.decrementOrder=function(id){var index=searchOrderByID(id);null!=index&&1<$rootScope.shoppingCart.orders[index].qty&&$rootScope.shoppingCart.orders[index].qty--},shopCartFactory.incrementOrder=function(id){var index=searchOrderByID(id);null!=index&&$rootScope.shoppingCart.orders[index].qty++},shopCartFactory.subTotal=function(order){if("pizza"==order.type){var totalFlavors=0;return order.flavors.selected.forEach(function(flavor){totalFlavors+=flavor.price}),(totalFlavors+order.dough.price+order.crust.price+order.price)*order.qty}var totalExtras=0;return order.extras.forEach(function(extra){totalExtras+=extra.price}),(totalExtras+order.price)*order.qty},shopCartFactory.total=function(){return total=0,$rootScope.shoppingCart.orders.forEach(function(order){total+=shopCartFactory.subTotal(order)}),total},shopCartFactory}]),app.service("CEP",["$http",function($http){this.check=function(cep){if(8!=cep.length)return!1;$http.get("https://viacep.com.br/ws/"+cep+"/json/").then(function(response){return response.data.logradouro})}}]),app.service("apiURL",["$location",function($location){this.get=function(){if("localhost"===$location.host())return $location.protocol()+"://"+$location.host()+"/facefoods/server/public/"}}]),app.controller("DeliveryCtrl",["$scope","$rootScope","toaster",function($scope,$rootScope,toaster){}]),app.controller("ExtraGeneralCtrl",["$scope","$rootScope","toaster","$window",function($scope,$rootScope,toaster,$window){$window.scrollTo(0,0)}]),app.controller("MenuCtrl",["$scope","$rootScope","menuFactory","pizzaOrderFactory","generalOrderFactory","$state",function($scope,$rootScope,menuFactory,pizzaOrderFactory,generalOrderFactory,$state){$scope.addPizza=function(pizza){pizzaOrderFactory.addPizza(pizza),$state.go("PizzaOptions")},$scope.addProduct=function(product){generalOrderFactory.addProduct(product),0<product.extras.length?$state.go("ExtraGeneral"):(generalOrderFactory.finish(),$state.go("OrderReview"))}}]),app.controller("OrderReviewCtrl",["$scope","$rootScope","toaster","shopCartFactory","$state","$timeout",function($scope,$rootScope,toaster,shopCartFactory,$state,$timeout){$scope.deleteOrder=function(id){shopCartFactory.deleteOrder(id),0==$rootScope.shoppingCart.orders.length&&$timeout(function(){$state.go("Menu")},400)},$scope.decrementOrder=function(id){shopCartFactory.decrementOrder(id)},$scope.incrementOrder=function(id){shopCartFactory.incrementOrder(id)},$scope.subTotal=function(order){return shopCartFactory.subTotal(order)},$scope.total=function(){return shopCartFactory.total()}}]),app.controller("PaymentCtrl",["$scope","$rootScope","toaster",function($scope,$rootScope,toaster){}]),app.controller("PizzaFlavorsCtrl",["$scope","pizzaOrderFactory","toaster","$state",function($scope,pizzaOrderFactory,toaster,$state){$scope.selectedFlavors={ids:[],size:0},$scope.setUserMax=function(max){$scope.issetUserMax=pizzaOrderFactory.setUserMax(max)},$scope.addFlavor=function(flavor){switch(pizzaOrderFactory.addFlavor(flavor)){case!0:$scope.selectedFlavors.ids[flavor.id]=!0,$scope.selectedFlavors.size++;break;case!1:$scope.selectedFlavors.ids[flavor.id]=!1,$scope.selectedFlavors.size--;break;case"full":toaster.pop("info","Cheio","Foi escolhido sabores demais.")}},$scope.finish=function(){pizzaOrderFactory.finish(),$state.go("OrderReview")}}]),app.controller("PizzaOptionsCtrl",["$scope","pizzaOrderFactory",function($scope,pizzaOrderFactory){$scope.setCrust=function(crust){$scope.issetCrust=pizzaOrderFactory.setCrust(crust)},$scope.setDough=function(dough){$scope.issetDough=pizzaOrderFactory.setDough(dough)}}]),angular.module("templates").run(["$templateCache",function($templateCache){$templateCache.put("Delivery/Delivery.html",'<section> <div class="fixed-button-top"><div class="row align-vertical"><div class="col-2"><a ng-click="doTheBack()"><i class="fa fa-arrow-left"></i></a></div><div class="col-10 text-left">Forma de Entrega</div></div></div><div class="space-top"></div><h3 class="titulo">Entrega ou Retirada?</h3><row class="text-center"><div class="col">   <input class="hidden radio-label rb" type="radio" name="entrega" id="ent_1" value="entrega" ng-model="entrega" checked="checked"/><label class="button-label" for="ent_1"><h1>ENTREGA</h1></label></div><div class="col">   <input class="hidden radio-label rb" type="radio" name="entrega" id="ent_2" value="balcao" ng-model="entrega"/><label class="button-label" for="ent_2"><h1>RETIRADA NO BALCÃO</h1></label></div></row><div id="entrega-dados" ng-show="entrega == \'entrega\'"><h5 class="titulo">Dados Para Entrega</h5><div class="container"><div class="row"><div class="col"><h5>Nome</h5><input type="text" ng-model="pedido.user.nome"/></div></div><div class="row"><div class="col"><h5>CEP </h5><input type="text" ng-model="pedido.user.cep" ng-blur="check_cep(user_cep)"/><h6>{{cep_msg}}</h6></div></div><div class="row">   <div class="col-8"><h5>Rua</h5><input type="text" ng-model="pedido.user.rua"/></div><div class="col-4"><h5>Nº</h5><input type="text" ng-model="pedido.user.numero"/></div></div><div class="row"><div class="col"><h5>Complemento</h5><input type="text" ng-model="pedido.user.complemento"/></div></div><div class="row"><div class="col"><h5>Telefone</h5><input type="text" ng-model="pedido.user.telefone"/></div></div></div></div><div id="retirada-dados" ng-show="entrega == \'balcao\'"><h5 class="titulo">Dados para Retirada</h5><div class="container"><div class="row"><div class="col"><h5>Nome</h5><input type="text" ng-model="pedido.user.nome"/></div></div><div class="row"><div class="col"><h5>Telefone</h5><input type="text" ng-model="pedido.user.telefone"/></div></div></div></div>\x3c!-- escolha a massa--\x3e<div class="space-bottom"></div><a ui-sref="pagamento"><div class="fixed-button"><p>FORMA DE PAGAMENTO</p></div></a></section>'),$templateCache.put("ExtraGeneral/ExtraGeneral.html",'<section><go-back message="generalOrder.name"></go-back><div class="space-top"></div><div class="extra-container" ng-repeat="availableExtra in generalOrder.availableExtras"><section ng-repeat="extra in menu.extras" ng-if="extra.id == availableExtra"><article ng-if="extra.type == 1"><h4 class="titulo">{{extra.name}}</h4><div ng-repeat="details in extra.options"><input class="hidden radio-label rb" type="radio" id="options-{{details.id}}" name="extra"/><label class="button-label-extra" for="options-{{details.id}}"><div class="row"><div class="col-10"><div class="sabor-pizza">{{details.name}}</div></div><div class="col-2"><div class="preco-pizza" ng-if="details.price&gt;0">{{details.price}}</div></div></div><div class="row"><div class="descricao-pizza">{{details.description}}</div></div></label></div></article><article ng-if="extra.type == 2"><h5 class="titulo">{{extra.name}}</h5><p class="text-center">mín {{extra.qty_min}}, máx {{extra.qty_max}}</p><article ng-repeat="details in extra.options"><div class="row"><div class="col-3"><button class="btn-qtd" ng-click=""><i class="fa fa-plus"></i></button><div class="prato-qtd">{{details.qty}}</div><button class="btn-qtd" ng-click=""><i class="fa fa-minus"></i></button></div><div class="col-9"><div class="row"><div class="col-9"><div class="sabor-pizza">{{details.name}}</div></div><div class="col-3"><div class="preco-pizza" ng-if="details.price&gt;0">{{details.price}}</div></div></div><div class="row"><div class="descricao-pizza">{{details.description}}</div></div></div></div><hr/></article></article></section></div><div class="space-bottom"><div class="fixed-button" ng-click="nextExtra()"><p>PRÓXIMO</p></div></div></section>'),$templateCache.put("Menu/Menu.html",'<section class="container" style="background: linear-gradient(to right, #0 , #0);"><article><h2 class="titulo">Promoções</h2><div class="row card-prato" ng-repeat="combo in menu.combos"><div class="col-3"><img ng-src="img/{{combo.image}}"/></div><div class="col-9"><h2 class="combo-titulo">{{combo.name}}</h2><p class="combo-descricao">{{combo.description}}</p><p class="combo-preco"> R${{combo.price}}</p></div><hr/></div></article><article><h2 class="titulo">Pizzas</h2><div class="row card-prato" ng-repeat="pizza in menu.pizzas.sizes" ng-click="addPizza(pizza)"><div class="col-10"><h2 class="prato-titulo">{{pizza.name}}</h2><p class="prato-descricao">{{pizza.description}}</p></div><div class="col-2 text-left nopadding"><p class="prato-preco">R${{pizza.price}}</p></div></div></article><article ng-repeat="category in menu.general"><h2 class="titulo">{{category.category}}</h2><div class="row card-prato" ng-repeat="product in category.products track by $id($index)" ng-click="addProduct(product)"><div class="col-10"><h2 class="prato-titulo">{{product.name}}</h2><p class="prato-descricao">{{product.description}}</p></div><div class="col-2 text-left nopadding"><p class="prato-preco">R${{product.price}}</p></div><hr/></div></article></section>'),$templateCache.put("OrderReview/OrderReview.html",'<section><h4 class="titulo">Resumo Do Seu Pedido</h4><div class="container"><div class="row repeat-item" ng-repeat="order in shoppingCart.orders"><div class="col container-pedido"><div class="row"><div class="col text-right"><div class="btn-apagar-prato fa fa-times-circle" ng-click="deleteOrder(order.id)"></div></div></div><div class="row"><div class="col"><div class="card-pedido"><div class="row"><div class="col-3"><button class="btn-qtd" ng-click="incrementOrder(order.id)"><i class="fa fa-plus"></i></button><div class="prato-qtd">{{order.qty}}</div><button class="btn-qtd" ng-click="decrementOrder(order.id)"><i class="fa fa-minus"></i></button></div><div class="col-9"><order order="order"></order><div class="row"><div class="col-9"><div class="total-produto">Subtotal</div></div><div class="col-3 text-left nopadding"><div class="total-produto-preco">R${{subTotal(order)}}</div></div></div></div></div></div></div></div></div></div></div><div class="container mt-4"><hr class="hrCool"/><div class="row"><div class="col"><h4 class="display text-center">Total: R${{total()}}</h4></div></div></div><div class="container"><div class="row text-center"><div class="col"><button class="keepBuying red" ui-sref="Menu" type="button" style="float: none; margin: 0 auto;">Continue comprando</button></div><div class="w-100"></div><div class="col"><p class="my-1">ou</p></div><div class="w-100"></div><div class="col"><button class="keepBuying gray" type="button" style="float: none; margin: 0 auto;">Confirme o Pedido</button></div></div></div></section>'),$templateCache.put("Payment/Payment.html",'<section>  <div class="fixed-button-top"><div class="row align-vertical"><div class="col-2"><a ng-click="doTheBack()"><i class="fa fa-arrow-left"></i></a></div><div class="col-10 text-left">Forma de Pagamento</div></div></div><div class="space-top"></div><h3 class="titulo">Forma de Pagamento?</h3><row class="text-center"><div class="col">   <input class="hidden radio-label rb" type="radio" name="pagamento" id="pag_1" value="dinheiro" ng-model="pagamento" checked="checked"/><label class="button-label" for="pag_1"><h1>DINHEIRO</h1></label></div><div class="col">   <input class="hidden radio-label rb" type="radio" name="pagamento" id="pag_2" value="cartao" ng-model="pagamento"/><label class="button-label" for="pag_2"><h1>CARTÃO</h1></label></div></row><div id="pag-dinheiro" ng-show="pagamento == \'dinheiro\'"><h5 class="titulo">Precisa de troco?</h5><div class="row"><div class="col">   <input class="hidden radio-label rb" type="radio" name="troco" id="troco_1" value="sim" ng-model="troco" checked="checked"/><label class="button-label" for="troco_1"><h1>SIM</h1></label></div><div class="col">   <input class="hidden radio-label rb" type="radio" name="troco" id="troco_2" value="nao" ng-model="troco" checked="checked"/><label class="button-label" for="troco_2"><h1>Não</h1></label></div></div><div id="troco-dialog" ng-show="troco == \'sim\'"><h5 class="titulo">Troco Para Quantos Reais?</h5><div class="container"><div class="row"><div class="col"></div><div class="col text-right"><h3>R$</h3></div><div class="col"><input type="text" ng-mode="valor_troco"/></div><div class="col"></div></div></div></div></div><div id="pag-cartao" ng-show="pagamento == \'cartao\'"><h6 class="text-center">Você pagará na maquininha na entrega</h6><h5 class="titulo">Cartões Aceitos</h5><div class="container"><h5>Visa</h5><h5>Mastercard</h5><h5>Hipercard</h5><h5>Elo</h5><h5>Sodexo</h5></div></div>\x3c!-- escolha a massa--\x3e<div class="space-bottom"></div><a ui-sref="pagamento"><div class="fixed-button"><p>CONFIRMAR PEDIDO</p></div></a></section>'),$templateCache.put("PizzaFlavors/PizzaFlavors.html",'<section><go-back message="pizzaOrder.name"></go-back><div class="space-top"></div><h2 class="titulo">{{(pizzaOrder.maxFlavors > 1) ? \'Quantos Sabores?\' : \'Qual Sabor?\'}}</h2><div class="container" ng-if="pizzaOrder.maxFlavors &gt; 1"><div class="button-wrap"><div class="row"><div class="col" ng-repeat="i in pizzaOrder.maxFlavors | range"><input class="hidden radio-label rb" type="radio" id="n_{{i}}" name="qty_flavors"/><label class="button-label" for="n_{{i}}" ng-click="setUserMax(i)"><h1>{{i}}</h1></label></div></div></div></div><div id="selecao-sabores" ng-show="issetUserMax || pizzaOrder.maxFlavors == 1"><h2 class="titulo" ng-if="pizzaOrder.maxFlavors &gt; 1">Escolha os sabores</h2><div class="row text-center"><div class="col"><input class="hidden radio-label rb" id="sd_1" type="radio" ng-click="selected = \'savory\'" name="salgado_doce"/><label class="button-label" for="sd_1"><h1>Salgadas</h1></label></div><div class="col"><input class="hidden radio-label rb" id="sd_2" type="radio" ng-click="selected = \'sweet\'" name="salgado_doce"/><label class="button-label" for="sd_2"><h1>Doces</h1></label></div></div><div class="container" id="sabores-salgados" ng-show="selected == \'savory\'"><article ng-repeat="savory in menu.pizzas.flavors.savory"><input class="cb" type="checkbox" ng-checked="selectedFlavors.ids[savory.id]"/><label class="cb-label" ng-click="addFlavor(savory)"><div class="row"><div class="col-2"></div><div class="col-10"><div class="row"><div class="col-9"><div class="sabor-pizza">{{savory.name}}</div></div><div class="col-3"><div class="preco-pizza" ng-if="savory.price&gt;0">R${{savory.price}}</div></div></div><div class="row"><div class="descricao-pizza">{{savory.description}}</div></div></div></div></label></article></div><div class="container" id="sabores-salgados" ng-show="selected == \'sweet\'"><article ng-repeat="sweet in menu.pizzas.flavors.sweet"><input class="cb" type="checkbox" ng-checked="selectedFlavors.ids[sweet.id]"/><label class="cb-label" ng-click="addFlavor(sweet)"><div class="row"><div class="col-2"></div><div class="col-10"><div class="row"><div class="col-9"><div class="sabor-pizza">{{sweet.name}}</div></div><div class="col-3"><div class="preco-pizza" ng-if="sweet.price&gt;0">R${{sweet.price}}</div></div></div><div class="row"><div class="descricao-pizza">{{sweet.description}}</div></div></div></div></label></article></div></div><div class="space-bottom"></div><a ng-click="finish()" ng-if="pizzaOrder.flavors.userMax &amp;&amp; selectedFlavors.size == pizzaOrder.flavors.userMax"><div class="fixed-button"><p>CHECAR PEDIDO</p></div></a></section>'),$templateCache.put("PizzaOptions/PizzaOptions.html",'<section>  <go-back message="pizzaOrder.name"></go-back><div class="space-top"></div><div class="page-container"><div class="info-container" ng-if="menu.pizzas.extras.crust"><h2 class="titulo">Escolha a borda</h2><div class="container"></div><section class="button-wrap"><article ng-repeat="crust in menu.pizzas.extras.crust"><input class="hidden radio-label rb" type="radio" name="crust" id="c_{{crust.id}}"/><label class="button-label-extra" for="c_{{crust.id}}" style="padding-top: 15px; padding-bottom: 15px;" ng-click="setCrust(crust)"><div class="row"><div class="col-9 text-left"><h6>{{crust.name}}</h6></div><div class="col-3 text-left"><h1 class="prato-preco" ng-if="crust.price&gt;0">R${{crust.price}}</h1></div></div></label></article></section></div><div class="info-container" ng-if="issetCrust"><h2 class="titulo">Escolha a Massa</h2><div class="container"></div><section class="button-wrap"><article ng-repeat="dough in menu.pizzas.extras.dough"><input class="hidden radio-label rb" type="radio" name="dough" id="m_{{dough.id}}"/><label class="button-label-extra" for="m_{{dough.id}}" style="padding-top: 15px; padding-bottom: 15px;" ng-click="setDough(dough)"><div class="row"><div class="col-9 text-left"><h6>{{dough.name}}</h6></div><div class="col-3 text-left"><h1 class="prato-preco" ng-if="dough.price&gt;0">R${{dough.price}}</h1></div></div></label></article></section></div></div><div class="space-bottom"></div><a ui-sref="PizzaFlavors" ng-if="issetCrust &amp;&amp; issetDough"><div class="fixed-button"><p>ESCOLHA OS SABORES</p></div></a></section>'),$templateCache.put("directives/goBack/goBack.html",'<div class="fixed-button-top"><div class="row align-vertical"><div class="col-2"><a ng-click="goBack()"><i class="fa fa-arrow-left"></i></a></div><div class="col-10 text-left">  {{message}}</div></div></div>'),$templateCache.put("directives/order/order.html",'<section><div class="row"><div class="col-9"><div class="title-resumo">{{order.name}}</div></div><div class="col-3 text-left nopadding"><div class="title-preco">R${{order.price}}</div></div></div><div class="row" ng-repeat="extra in order.extras" ng-if="order.type==\'general\'"><div class="col-9"><div class="desc-resumo">{{extra.name}}</div></div><div class="col-3 nopadding"><div class="resumo-preco" ng-if="extra.price&gt;0">+R${{extra.price}}</div></div></div><article ng-if="order.type==\'pizza\'"><div class="row"><div class="col-9"><div class="desc-resumo">{{order.crust.name}}</div></div><div class="col-3 text-left nopadding"><div class="resumo-preco" ng-if="order.crust.price&gt;0">+R${{order.crust.price}}</div></div></div><div class="row"><div class="col-9"><div class="desc-resumo">{{order.dough.name}}</div></div><div class="col-3 text-left nopadding"><div class="resumo-preco" ng-if="order.dough.price&gt;0">+R${{order.dough.price}}</div></div></div><div class="row" ng-repeat="flavor in order.flavors.selected"><div class="col-9"><div class="desc-resumo">{{flavor.name}}</div></div><div class="col-3 nopadding"><div class="resumo-preco" ng-if="flavor.price&gt;0">+R${{flavor.price}}</div></div></div></article></section>')}]);