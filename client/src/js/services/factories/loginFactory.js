faceFoods.factory('loginFactory', ['$http', '$resource', 'apiURL', function($http, $resource, apiURL) {
    var loginFactory = {};
    var baseURL = apiURL.get()+'api/auth/';

    loginFactory.login = $resource(baseURL+'login');
    loginFactory.logout = $resource(baseURL+'invalidate');

    return loginFactory;
}]);