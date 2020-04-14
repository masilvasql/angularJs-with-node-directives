/**
 * @author eduardo.denzer
 *
 */
(function() {
	'use strict';

	angular.module("pgm").service("FusionHelper", function() {

	    this.baseUrl = window.location.href.split("/").slice(0, 4).join("/") + "/";

	    this.addKeyValue = function(key, value) {
	        if(key) this[key] = value;
	    };
	    this.removeKey = function(key) {
	        if(key) delete this[key];
	    };

	    this.getUrlParameter = function(sParam) {
    	    const sPageURL = window.location.search.substring(1);
    	    const sURLVariables = sPageURL.split('&');
    	    for (let i = 0; i < sURLVariables.length; i++) {
    	        let sParameterName = sURLVariables[i].split('=');
    	        if (sParameterName[0] === sParam) {
    	            return decodeURIComponent(escape(sParameterName[1]));
    	        }
    	    }
	    };

        this.userLogout = function(){
            alert("Esta sessão não está mais ativa. Ela foi finalizada por inatividade, logout ou por outro login com mesmo usuário.");
            window.top.location.href = this.baseUrl + "portal/logout";
        };

	    this.safePathValue = function(obj, path){

	    	const pathList = path.split(".");
			if(angular.isUndefined(obj) || obj === null)
				return false;

	    	for (let i = 0; i < pathList.length; i++) {
                obj = obj[pathList[i]];
                if(angular.isUndefined(obj) || obj === null){
                    return false;
                }
            }
			return true;
		}

	});
	
})();