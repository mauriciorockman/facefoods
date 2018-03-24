app.service('CEP', ['$http', function ($http) {
    // Checa o CEP contra a API do correios
    // TODO: Filtro para checar o se o CEP é válido
    this.check = function (cep){
        if(cep.length == 8){
            $http.get("https://viacep.com.br/ws/"+cep+"/json/").then(
                function sucess(response){
                    return response.data.logradouro
                }
            )
        }else{
            return false
        }
    }
}]);