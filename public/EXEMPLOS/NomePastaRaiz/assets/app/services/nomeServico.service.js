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
        let url = this;
        url._baseUrl = 'http://localhost:4201/'

        return{
            exemploComRetornoReal:exemploComRetornoReal
        }

        function exemploComRetornoReal(){
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

    NomeServicoService.$inject = [ '$http', '$q' ];
    angular.module('pgm.nomeModulo').service('NomeServicoService', NomeServicoService)
    

})();


/*
    >>> LEGENDA <<<
    1 - O exemplo utilizado com a crase se chama TEMPLATE STRING
        utiliza-se quando se quer concatenar de maneira mais "Saudável"
        sem utilizar o + , também, pode-se utilizar variáveis dentro do
        template.
        Ex.: const nome = 'Marcelo'
             return `Meu nome é ${nome}`
        
        utiliza-se o cifrão + abre e fecha chaves ${}
        entre as chaves, coloca-se a variável

    2 - O Exemplo utilizado, se chama ARROW FUNCTION.
        sintaxe reduzida para funções anônimas.

        Exemplo padrão: 
        function(variavel) { ... conjunto de instruções }

        exemplo com ARROW FUNCTION: (variavel)=>{ ... conjunto de instruções }

        Observação: Somente utilizar para funções anônimas.

*/