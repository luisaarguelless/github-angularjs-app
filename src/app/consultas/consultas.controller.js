(function(){
    'use strict';

    angular
    .module('githubAngularjsApp')
    .controller('ConsultasController', ConsultasController);

    ConsultasController.$inject = ['GithubServices','$cookies','$log'];

    function ConsultasController($GithubServices,$cookies,$log){
        var vm = this;
        vm.repositorios = [];
        vm.$log = $log;

        function getRepositorios(){
            var infoUsuario = angular.fromJson($cookies.get('info-usuario'));
           if(angular.isDefined(infoUsuario)){
                $GithubServices.get({user: infoUsuario.usuarioGithub})
                .$promise.then(
                function(response){
                    vm.repositorios = response;
                },function(reason){
                   $log.log(reason);     
                }
            )
           }
        }

        getRepositorios();
    }
})();