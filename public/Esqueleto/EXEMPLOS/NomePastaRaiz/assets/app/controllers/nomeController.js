(function(){
    'use strict'

    function NomeControllerCtrl(NomeServicoService){

        let ctrl = this;
        

        ctrl.exemplo = ()=>{
       
        }
    }


    // TROCAR NOME DO CONTROLLER E MODULO
    angular.module('pgm.nomeModulo').controller('NomeControllerCtrl', NomeControllerCtrl)
    .directive('myInfoMsg', ()=>{
        return{
            templateUrl: "CAMINHO_DO_SEU_COMPONENTE"
        }
    })
    

    NomeControllerCtrl.$inject['$scope',  'NomeServicoService'];



})();