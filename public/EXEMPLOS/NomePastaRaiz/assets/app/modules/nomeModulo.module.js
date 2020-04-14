(function(){
    'use strict';
    /*
        No nome do módulo, colocar o nomeCliente.AçãoTela
        ex: pgm.fisicoVirtual
    */
    angular.module("pgm.nomeModulo",
        [

        ]   
    )
                    //aqui repete o nome do módulo de cima
    angular.module("pgm.nomeModulo").config(function($animateProvider){
        $animateProvider.classNameFilter(/^(?:(?!no-animation).)*$/);
    })

})()