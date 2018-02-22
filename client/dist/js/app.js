var faceFoods=angular.module("faceFoods",["templates","ui.router"]);faceFoods.run(function($rootScope){$rootScope.userTestData={name:"Maurício Montiel",bio:"Programador Ninja",photo:"https://s3.amazonaws.com/uifaces/faces/twitter/jsa/48.jpg",availableModules:{0:!0,1:!1,2:!1,3:!1,4:!1,5:!0}}}),faceFoods.config(function($stateProvider,$urlRouterProvider){$urlRouterProvider.otherwise("/Home"),$stateProvider.state("Home",{url:"/Home",templateUrl:"Home/Home.html",controller:"HomeController"})}),angular.module("templates",[]),faceFoods.directive("notificationMenu",function(){return{restrict:"E",templateUrl:"directives/notificationMenu/notificationMenu.html",replace:!0}}),faceFoods.directive("sidebar",function(){return{restrict:"E",templateUrl:"directives/sidebar/sidebar.html",replace:!0,controller:function($scope){$scope.sideBar={0:{name:"Início",route:"Home",icon:"fa-home"},1:{name:"Cardápio",route:"undef",icon:"fa-bars"},2:{name:"ChatBot",route:"undef",icon:"fa-cogs"},3:{name:"Marketing",route:"undef",icon:"fa-chart-line"},4:{name:"Agrupado",route:"undef",icon:"fa-tree",isTree:!0,branchs:{0:{name:"Branch1",route:"undef"},1:{name:"Branch2",route:"undef"},2:{name:"Branch3",route:"undef"}}},5:{name:"Agrupado",route:"undef",icon:"fa-tree",isTree:!0,branchs:{0:{name:"Branch1",route:"undef"},1:{name:"Branch2",route:"undef"},2:{name:"Branch3",route:"undef"}}}}}}}),faceFoods.controller("HomeController",function($scope){var ctxl=$("#lineChartDemo").get(0).getContext("2d"),ctxp=(new Chart(ctxl).Line({labels:["January","February","March","April","May"],datasets:[{label:"My First dataset",fillColor:"rgba(220,220,220,0.2)",strokeColor:"rgba(220,220,220,1)",pointColor:"rgba(220,220,220,1)",pointStrokeColor:"#fff",pointHighlightFill:"#fff",pointHighlightStroke:"rgba(220,220,220,1)",data:[65,59,80,81,56]},{label:"My Second dataset",fillColor:"rgba(151,187,205,0.2)",strokeColor:"rgba(151,187,205,1)",pointColor:"rgba(151,187,205,1)",pointStrokeColor:"#fff",pointHighlightFill:"#fff",pointHighlightStroke:"rgba(151,187,205,1)",data:[28,48,40,19,86]}]}),$("#pieChartDemo").get(0).getContext("2d"));new Chart(ctxp).Pie([{value:300,color:"#46BFBD",highlight:"#5AD3D1",label:"Complete"},{value:50,color:"#F7464A",highlight:"#FF5A5E",label:"In-Progress"}])}),angular.module("templates").run(["$templateCache",function($templateCache){$templateCache.put("Home/Home.html",'<div class="app-title"><div><h1><i class="fa fa-tachometer-alt"></i> Dashboard</h1><p>A free and modular admin template</p></div><ul class="app-breadcrumb breadcrumb"><li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li><li class="breadcrumb-item"><a href="#">Dashboard</a></li></ul></div><div class="row"><div class="col-md-6 col-lg-3"><div class="widget-small primary coloured-icon"><i class="icon fa fa-users fa-3x"></i><div class="info"><h4>Users</h4><p><b>5</b></p></div></div></div><div class="col-md-6 col-lg-3"><div class="widget-small info coloured-icon"><i class="icon fa fa-thumbs-o-up fa-3x"></i><div class="info"><h4>Likes</h4><p><b>25</b></p></div></div></div><div class="col-md-6 col-lg-3"><div class="widget-small warning coloured-icon"><i class="icon fa fa-files-o fa-3x"></i><div class="info"><h4>Uploades</h4><p><b>10</b></p></div></div></div><div class="col-md-6 col-lg-3"><div class="widget-small danger coloured-icon"><i class="icon fa fa-star fa-3x"></i><div class="info"><h4>Stars</h4><p><b>500</b></p></div></div></div></div><div class="row"><div class="col-md-6"><div class="tile"><h3 class="tile-title">Monthly Sales</h3><div class="embed-responsive embed-responsive-16by9"><canvas class="embed-responsive-item" id="lineChartDemo"></canvas></div></div></div><div class="col-md-6"><div class="tile"><h3 class="tile-title">Support Requests</h3><div class="embed-responsive embed-responsive-16by9"><canvas class="embed-responsive-item" id="pieChartDemo"></canvas></div></div></div></div><div class="row"><div class="col-md-6"><div class="tile"><h3 class="tile-title">Features</h3><ul><li>Built with Bootstrap 4, SASS and PUG.js</li><li>Fully responsive and modular code</li><li>Seven pages including login, user profile and print friendly invoice page</li><li>Smart integration of forgot password on login page</li><li>Chart.js integration to display responsive charts</li><li>Widgets to effectively display statistics</li><li>Data tables with sort, search and paginate functionality</li><li>Custom form elements like toggle buttons, auto-complete, tags and date-picker</li><li>A inbuilt toast library for providing meaningful response messages to user\'s actions</li></ul><p>Vali is a free and responsive admin theme built with Bootstrap 4, SASS and PUG.js. It\'s fully customizable and modular.</p><p>Vali is is light-weight, expendable and good looking theme. The theme has all the features required in a dashboard theme but this features are built like plug and play module. Take a look at the <a href="http://pratikborsadiya.in/blog/vali-admin" target="_blank">documentation</a> about customizing the theme colors and functionality.</p><p class="mt-4 mb-4"><a class="btn btn-primary mr-2 mb-2" href="http://pratikborsadiya.in/blog/vali-admin" target="_blank"><i class="fa fa-file"></i>Docs</a><a class="btn btn-info mr-2 mb-2" href="https://github.com/pratikborsadiya/vali-admin" target="_blank"><i class="fa fa-github"></i>GitHub</a><a class="btn btn-success mb-2" href="https://github.com/pratikborsadiya/vali-admin/archive/master.zip" target="_blank"><i class="fa fa-download"></i>Download</a></p></div></div><div class="col-md-6"><div class="tile"><h3 class="tile-title">Compatibility with frameworks</h3><p>This theme is not built for a specific framework or technology like Angular or React etc. But due to it\'s modular nature it\'s very easy to incorporate it into any front-end or back-end framework like Angular, React or Laravel.</p><p>Go to <a href="http://pratikborsadiya.in/blog/vali-admin" target="_blank">documentation</a> for more details about integrating this theme with various frameworks.</p><p>The source code is available on GitHub. If anything is missing or weird please report it as an issue on <a href="https://github.com/pratikborsadiya/vali-admin" target="_blank">GitHub</a>. If you want to contribute to this theme pull requests are always welcome.</p></div></div></div>'),$templateCache.put("directives/notificationMenu/notificationMenu.html",'<li class="dropdown"><a class="app-nav__item" href="#" data-toggle="dropdown" aria-label="Show notifications"><i class="fa fa-bell fa-lg"></i></a><ul class="app-notification dropdown-menu dropdown-menu-right"><li class="app-notification__title">You have 4 new notifications.</li><div class="app-notification__content"><li><a class="app-notification__item" href="javascript:;"><span class="app-notification__icon"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x text-primary"></i><i class="fa fa-envelope fa-stack-1x fa-inverse"></i></span></span><div><p class="app-notification__message">Lisa sent you a mail</p><p class="app-notification__meta">2 min ago</p></div></a></li><li><a class="app-notification__item" href="javascript:;"><span class="app-notification__icon"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x text-danger"></i><i class="fa fa-hdd-o fa-stack-1x fa-inverse"></i></span></span><div><p class="app-notification__message">Mail server not working</p><p class="app-notification__meta">5 min ago</p></div></a></li><li><a class="app-notification__item" href="javascript:;"><span class="app-notification__icon"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x text-success"></i><i class="fa fa-money fa-stack-1x fa-inverse"></i></span></span><div><p class="app-notification__message">Transaction complete</p><p class="app-notification__meta">2 days ago</p></div></a></li><div class="app-notification__content"><li><a class="app-notification__item" href="javascript:;"><span class="app-notification__icon"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x text-primary"></i><i class="fa fa-envelope fa-stack-1x fa-inverse"></i></span></span><div><p class="app-notification__message">Lisa sent you a mail</p><p class="app-notification__meta">2 min ago</p></div></a></li><li><a class="app-notification__item" href="javascript:;"><span class="app-notification__icon"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x text-danger"></i><i class="fa fa-hdd-o fa-stack-1x fa-inverse"></i></span></span><div><p class="app-notification__message">Mail server not working</p><p class="app-notification__meta">5 min ago</p></div></a></li><li><a class="app-notification__item" href="javascript:;"><span class="app-notification__icon"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x text-success"></i><i class="fa fa-money fa-stack-1x fa-inverse"></i></span></span><div><p class="app-notification__message">Transaction complete</p><p class="app-notification__meta">2 days ago</p></div></a></li></div></div><li class="app-notification__footer"><a href="#">See all notifications.</a></li></ul></li>'),$templateCache.put("directives/sidebar/sidebar.html",'<aside class="app-sidebar"><div class="app-sidebar__user"><img class="app-sidebar__user-avatar" ng-src="{{userTestData.photo}}" alt="User Image"/><div><p class="app-sidebar__user-name">{{userTestData.name}}</p><p class="app-sidebar__user-designation">{{userTestData.bio}}</p></div></div><ul class="app-menu"><li ng-repeat="module in sideBar" ng-class="{\'treeview\': module.isTree, \'is-expanded\': active}" ng-click="active=!active &amp;&amp; userTestData.availableModules[$index]"><a class="app-menu__item" ui-sref-active="active" ui-sref="{{module.route}}" ng-if="!module.isTree" ng-class="{\'text-muted disabled\': !userTestData.availableModules[$index]}" ng-disabled="!userTestData.availableModules[$index]"><i class="app-menu__icon fa {{module.icon}}"></i><span class="app-menu__label">{{module.name}}</span><span class="badge badge-secondary" ng-if="!userTestData.availableModules[$index]">Indisponível</span>&nbsp;&nbsp;&nbsp;&nbsp;</a><div ng-if="module.isTree"><a class="app-menu__item" href="#" data-toggle="treeview" ng-class="{\'text-muted disabled\': !userTestData.availableModules[$index]}" ng-disabled="!userTestData.availableModules[$index]"><i class="app-menu__icon fa {{module.icon}}"></i><span class="app-menu__label">{{module.name}}</span><span class="badge badge-secondary" ng-if="!userTestData.availableModules[$index]">Indisponível</span>&nbsp;&nbsp;<i class="treeview-indicator fa fa-angle-right"></i></a><ul class="treeview-menu"><li ng-repeat="submodule in module.branchs"><a class="treeview-item" ui-sref="{{submodule.route}}" href=""><i class="icon fa fa-angle-right"></i> {{submodule.name}}</a></li></ul></div></li></ul></aside>')}]);