
'use strict';
/**
 * Load states for application (UI-Router)
 */
angular.module('rokk3rlabsApp')
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){

    // any unknown URLS go to 404
    $urlRouterProvider.otherwise('/404');
    // no route goes to index
    $urlRouterProvider.when('', '/');

    // use a state provider for routing
    $stateProvider
      .state('app', {
        abstract: true,
        templateUrl: "./views/home/homeView.html",
      })
      .state('app.home', {
          url: '/',
          templateUrl: './views/dashboard/dashboardView.html'
      })
}]);
