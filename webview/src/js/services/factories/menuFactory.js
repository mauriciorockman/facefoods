app.factory('menuFactory', ['$resource', '$rootScope', function($resource, $rootScope) {
    // TODO: Definir rotas backend

    // !!!! ROTAS PROVISÒRIAS !!!!!
    var menuFactory = {};

    menuFactory.setMenu = $resource("js/menuData.json").get().$promise.then(
        function(result){
            $rootScope.menu = result.menu;
            return true
        }, function(result){
            return false            
        }
    );

    return menuFactory;
}]);