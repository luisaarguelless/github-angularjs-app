(function () {
    'use strict';

    angular
        .module('githubAngularjsApp')
        .controller('ConsultasController', ConsultasController);

    ConsultasController.$inject = ['GithubServices', '$cookies', '$log'];

    function ConsultasController($GithubServices, $cookies, $log) {
        var vm = this;
        vm.repositoriosTotales = [];
        vm.$log = $log;
        vm.orderOptions = [
            {key: 'language', value: 'Lenguaje'},
            {key: 'default_branch', value: 'Branch por defecto'},
            {key: 'git_url', value: 'Url Git'},
            {key: 'name', value: 'Nombre'},
            {key: 'description', value: 'Descripción'}];

        function getRepositorios() {
            var infoUsuario = angular.fromJson($cookies.get('info-usuario'));
            if (angular.isDefined(infoUsuario)) {
                $GithubServices.get({ user: infoUsuario.usuarioGithub })
                    .$promise.then(
                    function (response) {
                        vm.repositoriosTotales = response;
                        filterResuts(vm.currentPage, vm.itemsPerPage);
                    }, function (reason) {
                        $log.log(reason);
                    }
                    )
            }
        }

        function getTotalRepositorios() {
            return vm.repositoriosTotales.length;
        }

        function pageChanged() {
            filterResuts(vm.currentPage, vm.itemsPerPage);
        }

        function filterResuts(page, itemsPerPage) {
            var begin = itemsPerPage * (page) - itemsPerPage;
            var end = page * itemsPerPage;
            vm.repositoriosFiltrados = vm.repositoriosTotales.slice(begin, end);
        }

        function init() {
            vm.getTotalRepositorios = getTotalRepositorios;
            vm.pageChanged = pageChanged;
            vm.itemsPerPage = 5;
            vm.currentPage = 1;
            vm.repositoriosFiltrados = [];
            getRepositorios();
            vm.ordrerBy = 'language';
        }

        init();
    }
})();