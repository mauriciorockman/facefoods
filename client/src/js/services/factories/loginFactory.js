faceFoods.factory('loginFactory', ['$http', '$resource', 'apiURL', function($http, $resource, apiURL) {
    var loginFactory = {};
    var baseURL = apiURL.get()+'/login/';

    loginFactory.signUp = $resource(baseURL+'signup');
    loginFactory.logOut = $resource(baseURL+'logout');

    return loginFactory;
}]);