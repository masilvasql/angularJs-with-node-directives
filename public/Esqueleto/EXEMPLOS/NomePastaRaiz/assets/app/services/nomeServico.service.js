(function(){
    'use strict';
    /**
     * Nas aplicações para o fusion, lembrar de colocar na função
     * além do $http e do $q
     * colocar também o FusionHelper
     * function NomeServicoService($http, $q, FusionHelper)
     * Neste exemplo, não coloquei, pois teria que importar mais alguns scripts
     * no HTML e a ideia é deixar o mais CLEAN possível
     */
    function NomeServicoService($http, $q){
        
        return{
            exemplo:exemplo
        }

        function exemplo(){
            const defer = $q.defer();
            this.baseUrl

            $http.get(`${url._baseUrl}listar`) //Explicação de sintaxe na legenda 1
                .then( response =>{ //Explicação de sintaxe na legenda 2
                    defer.resolve(response.data)
                }).catch(failure =>{
                    if(failure.status === 403){
                        service.userLogout();
                    }
                    defer.reject(`Erro ao executar GET: ${failure}`)
                })
            return defer.promise;
        }

    }

    // TROCAR NOME DO SERVICE E DO MODULO e INJETAR O FusionHelper
    NomeServicoService.$inject = [ '$http', '$q' ];
    angular.module('pgm.nomeModulo').service('NomeServicoService', NomeServicoService)
    

})();
