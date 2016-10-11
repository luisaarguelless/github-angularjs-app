(function() {
  'use strict';

  angular
    .module('githubAngularjsApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
