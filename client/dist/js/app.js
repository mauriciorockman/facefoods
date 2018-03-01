var faceFoods=angular.module("faceFoods",["templates","ui.router","vAccordion","ngAnimate","720kb.tooltips","ngDialog","ngTable"]);faceFoods.run(function($rootScope){$rootScope.userTestData={name:"Maurício Montiel",bio:"Programador Ninja",photo:"https://s3.amazonaws.com/uifaces/faces/twitter/jsa/48.jpg",availableModules:{0:!0,1:!0,2:!1,3:!1,4:!1,5:!0}}}),faceFoods.config(function($stateProvider,$urlRouterProvider){$urlRouterProvider.otherwise("/Home"),$stateProvider.state("Home",{url:"/Home",templateUrl:"Home/Home.html",controller:"HomeController"}).state("Menu",{url:"/Menu",templateUrl:"Menu/Menu.html",controller:"MenuController"})}),angular.module("templates",[]),faceFoods.directive("newFlavor",function(ngDialog){return{restrict:"E",templateUrl:"directives/newFlavor/newFlavor.html",replace:!0,scope:{name:"=name"},controller:function($scope,ngDialog){$scope.special=function(){$scope.active=!$scope.active},$scope.newFlavor=function(){ngDialog.open({template:"newFlavor.html",className:"ngdialog-theme-default",scope:$scope})}}}}),faceFoods.directive("newSize",function(ngDialog){return{restrict:"E",templateUrl:"directives/newSize/newSize.html",replace:!0,scope:{name:"=name"},controller:function($scope,ngDialog){$scope.newSize=function(){ngDialog.open({template:"newSize.html",className:"ngdialog-theme-default",scope:$scope})}}}}),faceFoods.directive("notificationMenu",function(){return{restrict:"E",templateUrl:"directives/notificationMenu/notificationMenu.html",replace:!0}}),faceFoods.directive("sidebar",function(){return{restrict:"E",templateUrl:"directives/sidebar/sidebar.html",replace:!0,controller:function($scope){$scope.sideBar={0:{name:"Início",route:"Home",icon:"fa-home"},1:{name:"Cardápio",route:"Menu",icon:"fa-bars"},2:{name:"ChatBot",route:"undef",icon:"fa-cogs"},3:{name:"Marketing",route:"undef",icon:"fa-chart-line"},4:{name:"Agrupado",route:"undef",icon:"fa-tree",isTree:!0,branchs:{0:{name:"Branch1",route:"undef"},1:{name:"Branch2",route:"undef"},2:{name:"Branch3",route:"undef"}}},5:{name:"Agrupado",route:"undef",icon:"fa-tree",isTree:!0,branchs:{0:{name:"Branch1",route:"undef"},1:{name:"Branch2",route:"undef"},2:{name:"Branch3",route:"undef"}}}}}}}),faceFoods.controller("AddPizzaController",function($scope,NgTableParams){var data=[{name:"Broto",slices:5,price:20,radius:25},{name:"Média",slices:10,price:30,radius:30},{name:"Família",slices:20,price:40,radius:40}];$scope.tablePizzaSizes=new NgTableParams({},{dataset:data,counts:[]}),data=[{name:"Calabresa",price:0,special:!1},{name:"4 Queijos",price:0,special:!1},{name:"Baiana",price:0,special:!1},{name:"Rei",price:5,special:!0}],$scope.tablePizzaFlavors=new NgTableParams({},{dataset:data,counts:[]})}),faceFoods.controller("HomeController",function($scope){}),faceFoods.controller("MenuController",function($scope,ngDialog,NgTableParams){$scope.addPizza=function(){ngDialog.open({template:"Menu/Dialogs/Pizza/AddPizza/AddPizza.html",controller:"AddPizzaController",width:900,className:"ngdialog-theme-default"})}}),angular.module("templates").run(["$templateCache",function($templateCache){$templateCache.put("Home/Home.html",'<div class="app-title"><div><h1><i class="fa fa-tachometer-alt"></i> Estatísticas</h1><p>Essa tela contém dados e gráficos sobre seus clientes e pedidos.</p></div></div><div class="row"><div class="col-md-6 col-lg-3"><div class="widget-small primary coloured-icon"><i class="icon fa fa-users fa-3x"></i><div class="info"><h4>Clientes</h4><p><b>5</b></p></div></div></div><div class="col-md-6 col-lg-3"><div class="widget-small info coloured-icon"><i class="icon fas fa-thumbs-up fa-3x"></i><div class="info"><h4>Likes</h4><p><b>25</b></p></div></div></div><div class="col-md-6 col-lg-3"><div class="widget-small warning coloured-icon"><i class="icon fa fa-files-o fa-3x"></i><div class="info"><h4>Total de Pedidos</h4><p><b>10</b></p></div></div></div><div class="col-md-6 col-lg-3"><div class="widget-small danger coloured-icon"><i class="icon ionicons ion-pizza"></i><div class="info"><h4>Pizzas entregues</h4><p><b>500</b></p></div></div></div></div><div class="row"><div class="col-md-6"><div class="tile"><h3 class="tile-title">Vendas por mês</h3><div class="embed-responsive embed-responsive-16by9"><canvas class="embed-responsive-item" id="lineChartDemo"></canvas></div></div></div><div class="col-md-6"><div class="tile"><h3 class="tile-title">Sabores mais pedidos</h3><div class="embed-responsive embed-responsive-16by9"><canvas class="embed-responsive-item" id="pieChartDemo"></canvas></div></div></div></div>'),$templateCache.put("Menu/Menu.html",'<div class="app-title"><div class="div"><h1><i class="fa fa-laptop"></i> Cardápio</h1><p>Escolha e configure suas opções de cardápio</p></div></div><div class="tile mb-4"><div class="page-header"><div class="container"><div class="row"><div class="col-sm-3 py-2"><div class="card"><div class="card-header display"><i class="em em-pizza"></i> - Pizzas</div><div class="card-body h-100"><p class="card-text">Selecione abaixo para configurar seu cardápio de pizzas.</p><div class="btn-group float-right"><button class="btn btn-primary" ng-click="addPizza()" type="button" tooltips="tooltips" tooltip-template="Gerenciar Pizzas" tooltip-speed="fast"><i class="fas fa-pencil-alt"></i></button></div></div></div></div><div class="col-sm-3 py-2"><div class="card"><div class="card-header display"><i class="em em-hamburger"></i> - Hambúrgueres</div><div class="card-body h-100"><p class="card-text">Selecione abaixo para configurar seu cardápio de Hambúrgueres.</p><div class="btn-group float-right" role="group" aria-label="Basic example"><button class="btn btn-primary" type="button" tooltips="tooltips" tooltip-template="Adicionar Hambúrgueres" tooltip-speed="fast"><i class="fas fa-plus"></i></button><button class="btn btn-secondary" type="button" tooltips="tooltips" tooltip-template="Gerenciar Hambúrgueres" tooltip-speed="fast"><i class="fas fa-pencil-alt"></i></button></div></div></div></div><div class="col-sm-3 py-2"><div class="card"><div class="card-header display"><i class="em em-green_salad"></i> - Outros</div><div class="card-body h-100"><p class="card-text">Selecione abaixo para configurar ou adicionar outros tipos de cardápios.</p><div class="btn-group float-right"><button class="btn btn-primary" type="button" tooltips="tooltips" tooltip-template="Adicionar outros" tooltip-speed="fast"><i class="fas fa-plus"></i></button><button class="btn btn-secondary" type="button" tooltips="tooltips" tooltip-template="Gerenciar outros" tooltip-speed="fast"><i class="fas fa-pencil-alt"></i></button></div></div></div></div><div class="col-sm-3 py-2"><div class="card"><div class="card-header display"><i class="em em-keycap_star"></i> - Todos</div><div class="card-body h-100"><p class="card-text">Clique abaixo para gerenciar todos teus cardápios.</p><div class="btn-group float-right"><button class="btn btn-primary" type="button" tooltips="tooltips" tooltip-template="Gerenciar cardápios" tooltip-speed="fast"><i class="fas fa-cogs"></i></button></div></div></div></div></div></div></div></div>'),$templateCache.put("Menu/Dialogs/Pizza/AddPizza/AddPizza.html",'<div class="dialog-contents"><div class="div"><h1 class="display"> <i class="em em-pizza"></i>- Pizzas</h1><hr/></div><section><h3 class="display">Tamanhos</h3><new-size class="float-left" name="\'Pizza\'"></new-size><table class="table table-bordered table-hover" ng-table="tablePizzaSizes"><tbody><tr ng-repeat="pizzaSize in $data"><td class="col-sm-1" title="\'Nome\'" ng-attr-title="{{pizzaSize.name}}" sortable="\'name\'">{{pizzaSize.name}}</td><td class="col-sm-1" title="\'Fatias\'" ng-attr-title="{{pizzaSize.slices}}" sortable="\'slices\'">{{pizzaSize.slices}}</td><td class="col-sm-1" title="\'Raio\'" ng-attr-title="{{pizzaSize.radius}}" sortable="\'radius\'">{{pizzaSize.radius}}cm</td><td class="col-sm-1" title="\'Preço\'" ng-attr-title="{{pizzaSize.price}}" sortable="\'price\'">R${{pizzaSize.price}}                    </td><td class="col-sm-1"><div class="btn-group float-right"><button class="btn btn-primary" type="button"><i class="fas fa-pencil-alt"></i></button><button class="btn btn-secondary" type="button"><i class="fas fa-trash"></i></button></div></td></tr></tbody></table></section><section><h3 class="display">Sabores</h3><new-flavor class="float-left" name="\'Pizza\'"></new-flavor><table class="table table-bordered table-hover" ng-table="tablePizzaFlavors"><tbody><tr ng-repeat="pizzaFlavors in $data"><td class="col-sm-1" title="\'Nome\'" ng-attr-title="{{pizzaFlavors.name}}" sortable="\'name\'">{{pizzaFlavors.name}}</td><td class="col-sm-1 text-center" title="\'Preço\'" ng-attr-title="{{pizzaFlavors.price}}" sortable="\'price\'">{{pizzaFlavors.price || \'--\'}}</td><td class="col-sm-1 text-center" title="\'Especial?\'" ng-attr-title="{{pizzaFlavors.special}}" sortable="\'special\'"><i class="em em-x" ng-if="!pizzaFlavors.special"></i><i class="em em-heavy_check_mark" ng-if="pizzaFlavors.special"></i></td><td class="col-sm-1"><div class="btn-group float-right"><button class="btn btn-primary" type="button"><i class="fas fa-pencil-alt"></i></button><button class="btn btn-secondary" type="button"><i class="fas fa-trash"></i></button></div></td></tr></tbody></table></section></div>'),$templateCache.put("directives/newFlavor/newFlavor.html",'<div class="div"><div class="font-italic"><small>                           <a href="javascript:void(null);" ng-click="newFlavor()">Adicionar novo sabor para {{name}}</a></small></div><script type="text/ng-template" id="newFlavor.html"><h3 class="display">Novo Sabor de {{name}}</h1>\n<form>\n    <div class="form-group">\n        <label>Nome</label>\n        <input type="text" class="form-control mb-2 mr-sm-2" placeholder="{{(name == \'Pizza\') ? \'Portuguesa, 5 Queijos\' : \'\'}}">\n    </div>\n    <div class="form-group">\n        <label>Descrição</label>\n        <textarea class="form-control" rows="3" placeholder="{{(name == \'Pizza\') ? \'Mussarela, tomate, provolone...\' : \'\'}}"></textarea>\n    </div>\n    <div ng-if="name == \'Pizza\'">\n        <div class="form-check mb-2">\n            <input type="checkbox" class="form-check-input" ng-click="special()">\n            <label class="form-check-label">Sabor Especial</label>\n        </div>\n        <div ng-if="active" class="form-group">\n            <label>Preço</label>\n            <div class="input-group mb-2 mr-sm-2">\n                <div class="input-group-prepend">\n                <div class="input-group-text">R$</div>\n                </div>\n                <input type="number" step="0.01" class="form-control">\n            </div>\n        </div>\n    </div>\n    <div class="ngdialog-buttons">\n        <button type="button" class="ngdialog-button ngdialog-button-primary">Enviar</button>\n    </div>\n</form><\/script></div>'),$templateCache.put("directives/newSize/newSize.html",'<div class="div"><div class="font-italic"><small>                           <a href="javascript:void(null);" ng-click="newSize()">Adicionar novo tamanho para {{name}}</a></small></div><script type="text/ng-template" id="newSize.html"><h3 class="display">Novo Tamanho de {{name}}</h1>\n<form>\n    <div class="form-group">\n        <label>Nome</label>\n        <input type="text" class="form-control mb-2 mr-sm-2" placeholder="{{(name == \'Pizza\') ? \'Brotinho, família\':\'\'}}">\n    </div> \n    <article ng-if="name == \'Pizza\'">\n        <div class="form-group">\n            <label>Número de fatias</label>\n            <input type="number" class="form-control mb-2 mr-sm-2">\n        </div>\n        <div class="form-group">\n            <label>Raio</label>\n            <div class="input-group mb-2 mr-sm-2">\n                <input type="number" step="0.01" class="form-control">\n                <div class="input-group-append">\n                    <div class="input-group-text">centímetros</div>\n                </div>\n            </div>\n        </div>\n        <div class="form-group">\n            <label>Preço</label>\n            <div class="input-group mb-2 mr-sm-2">\n                <div class="input-group-prepend">\n                <div class="input-group-text">R$</div>\n                </div>\n                <input type="number" step="0.01" class="form-control">\n            </div>\n        </div>\n    </article>\n    <div class="ngdialog-buttons">\n        <button type="button" class="ngdialog-button ngdialog-button-primary">Enviar</button>\n    </div>\n</form><\/script></div>'),$templateCache.put("directives/notificationMenu/notificationMenu.html",'<li class="dropdown"><a class="app-nav__item" href="#" data-toggle="dropdown" aria-label="Show notifications"><i class="fa fa-bell fa-lg"></i></a><ul class="app-notification dropdown-menu dropdown-menu-right"><li class="app-notification__title">You have 4 new notifications.</li><div class="app-notification__content"><li><a class="app-notification__item" href="javascript:;"><span class="app-notification__icon"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x text-primary"></i><i class="fa fa-envelope fa-stack-1x fa-inverse"></i></span></span><div><p class="app-notification__message">Lisa sent you a mail</p><p class="app-notification__meta">2 min ago</p></div></a></li><li><a class="app-notification__item" href="javascript:;"><span class="app-notification__icon"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x text-danger"></i><i class="fa fa-hdd-o fa-stack-1x fa-inverse"></i></span></span><div><p class="app-notification__message">Mail server not working</p><p class="app-notification__meta">5 min ago</p></div></a></li><li><a class="app-notification__item" href="javascript:;"><span class="app-notification__icon"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x text-success"></i><i class="fa fa-money fa-stack-1x fa-inverse"></i></span></span><div><p class="app-notification__message">Transaction complete</p><p class="app-notification__meta">2 days ago</p></div></a></li><div class="app-notification__content"><li><a class="app-notification__item" href="javascript:;"><span class="app-notification__icon"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x text-primary"></i><i class="fa fa-envelope fa-stack-1x fa-inverse"></i></span></span><div><p class="app-notification__message">Lisa sent you a mail</p><p class="app-notification__meta">2 min ago</p></div></a></li><li><a class="app-notification__item" href="javascript:;"><span class="app-notification__icon"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x text-danger"></i><i class="fa fa-hdd-o fa-stack-1x fa-inverse"></i></span></span><div><p class="app-notification__message">Mail server not working</p><p class="app-notification__meta">5 min ago</p></div></a></li><li><a class="app-notification__item" href="javascript:;"><span class="app-notification__icon"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x text-success"></i><i class="fa fa-money fa-stack-1x fa-inverse"></i></span></span><div><p class="app-notification__message">Transaction complete</p><p class="app-notification__meta">2 days ago</p></div></a></li></div></div><li class="app-notification__footer"><a href="#">See all notifications.</a></li></ul></li>'),$templateCache.put("directives/sidebar/sidebar.html",'<aside class="app-sidebar"><div class="app-sidebar__user"><img class="app-sidebar__user-avatar" ng-src="{{userTestData.photo}}" alt="User Image"/><div><p class="app-sidebar__user-name">{{userTestData.name}}</p><p class="app-sidebar__user-designation">{{userTestData.bio}}</p></div></div><ul class="app-menu"><li ng-repeat="module in sideBar" ng-class="{\'treeview\': module.isTree, \'is-expanded\': active}" ng-click="active=!active &amp;&amp; userTestData.availableModules[$index]"><a class="app-menu__item" ui-sref-active="active" ui-sref="{{module.route}}" ng-if="!module.isTree" ng-class="{\'text-muted disabled\': !userTestData.availableModules[$index]}" ng-disabled="!userTestData.availableModules[$index]"><i class="app-menu__icon fa {{module.icon}}"></i><span class="app-menu__label">{{module.name}}</span><span class="badge badge-secondary" ng-if="!userTestData.availableModules[$index]">Indisponível</span>&nbsp;&nbsp;&nbsp;&nbsp;</a><div ng-if="module.isTree"><a class="app-menu__item" href="#" data-toggle="treeview" ng-class="{\'text-muted disabled\': !userTestData.availableModules[$index]}" ng-disabled="!userTestData.availableModules[$index]"><i class="app-menu__icon fa {{module.icon}}"></i><span class="app-menu__label">{{module.name}}</span><span class="badge badge-secondary" ng-if="!userTestData.availableModules[$index]">Indisponível</span>&nbsp;&nbsp;<i class="treeview-indicator fa fa-angle-right"></i></a><ul class="treeview-menu"><li ng-repeat="submodule in module.branchs"><a class="treeview-item" ui-sref="{{submodule.route}}" href=""><i class="icon fa fa-angle-right"></i> {{submodule.name}}</a></li></ul></div></li></ul></aside>')}]);