(function() {
  'use strict';

  angular
    .module('githubAngularjsApp')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/consultas',{
        templateUrl: 'app/consultas/consultas.html',
        controller: 'ConsultasController',
        controllerAs : 'consultas'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
