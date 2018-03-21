faceFoods.service('apiURL', ['$location', function($location) {
    this.get = function(){
        if ($location.host() === "localhost")
            return $location.protocol() + "://" + $location.host() + "/facefoods/server/public/";
    };
}]);