(function(){
    'use strict';

    angular.module('githubAngularjsApp')
    .factory('GithubServices', GithubServices);

    GithubServices.$inject = ["$resource"];

    function GithubServices($resource){
        return $resource('https://api.github.com/users/:user/repos',{},{
            get : {method: 'GET', params: { page: '@page', per_page : '5'}, isArray: true}
        });
    }
   

})();