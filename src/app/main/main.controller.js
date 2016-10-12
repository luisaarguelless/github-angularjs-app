(function () {
  'use strict';

  angular
    .module('githubAngularjsApp')
    .controller('MainController', MainController);

  MainController.$inject = ['$cookies'];
  /** @ngInject */
  function MainController($cookies) {
    var vm = this;
    vm.usuario = {};
    vm.datepickerOptions = {
      format: 'yyyy-mm-dd',
      language: 'fr',
      autoclose: true,
      weekStart: 0
    };
    vm.opened = false;
    vm.open = open;
    vm.save = save;
    vm.showInfoCookie = showInfoCookie;

    function open() {
      vm.opened = true;
    }

    vm.dateOptions = {
      formatYear: 'yy',
      startingDay: 1
    };

    function save() {
      $cookies.put('info-usuario', angular.toJson(vm.usuario));
    }

    function setInfo() {
      var usuario = $cookies.get('info-usuario');
      if (angular.isDefined(usuario)) {
        vm.usuario = angular.fromJson(usuario);
        vm.usuario.fechaNacimiento = new Date(vm.usuario.fechaNacimiento);
      }
    }

    function showInfoCookie(){
      return $cookies.get('info-usuario');
    }

    function init() {
      setInfo();
    }
    init();
  }
})();
