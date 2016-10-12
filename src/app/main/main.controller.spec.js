(function () {
  'use strict';

  describe('MainController', function () {
    var $controller;
    var $cookies;
    beforeEach(module('ngCookies', 'githubAngularjsApp'));

    describe('mainController.save() function', function () {

      beforeEach(inject(function (_$controller_, _$cookies_) {
        $controller = _$controller_;
        $cookies = _$cookies_;
      }));

      it("should save the user info in a cookie", function () {

        var mainController = $controller('MainController', { $cookies: $cookies });
        var infoUsuario = { "nombres": "nombres", "apellidos": "apellidos" };
        mainController.usuario = infoUsuario;
        mainController.save();
        expect(infoUsuario).toEqual(angular.fromJson($cookies.get('info-usuario')));
      });
    });

  });
})();
