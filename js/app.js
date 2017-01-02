(function () {


angular.module('Portfolio', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('main', {
            abstract: true,
            url: '/',
            templateUrl: './src/views/main.html',
            controller: 'mainCtrl as main'
          }.state('main.yazua',{

          })
);
});
})();
