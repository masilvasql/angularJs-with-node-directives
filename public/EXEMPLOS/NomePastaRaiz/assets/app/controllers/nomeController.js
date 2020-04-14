(function(){
    'use strict'

    function NomeControllerCtrl(NomeServicoService){

        let ctrl = this;
        
        ctrl.label = 'Valor Original'
        ctrl.registros = []
        ctrl.msgCard= "CARD"
        ctrl.searchQuery = ""
        ctrl.sortType = "nome"
        ctrl.sortReverse = false


        ctrl.getRegistros = ()=>{
            return NomeServicoService.exemploComRetornoReal()
            .then(resp=>{
                if(resp.length > 0 ){
                    ctrl.registros = resp
                }
            }).catch(e=>{
                //Tratar erro aqui
                console.log(e)
            })
        }
    }




    angular.module('pgm.nomeModulo').controller('NomeControllerCtrl', NomeControllerCtrl)
    .directive('myInfoMsg', ()=>{
        return{
            templateUrl: "../../componentes/card/card.html"
        }
    })
    .directive('myTable', ()=>{
        return{
            templateUrl:'../../componentes/table/table.html'
        }
    })
    .directive('myCabecalho', ()=>{
        return{
            templateUrl:'../../componentes/cabecalho/cabecalho.html'
        }
    })
    .directive('myFooter', ()=>{
        return{
            templateUrl:'../../componentes/footer/footer.html'
        }
    })

    NomeControllerCtrl.$inject['$scope',  'NomeServicoService'];



})();