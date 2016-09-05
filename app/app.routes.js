
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
      .state('app.dashboard', {
          url: '/',
          templateUrl: './views/dashboard/dashboardView.html',
          controller: "DashboardCtrl"
      })
      .state('app.news', {
          url: '/news',
          templateUrl: './views/news/newsView.html'
      })
      .state('404', {
          url: '/404',
          templateUrl: './views/not_found/404.html'
      })
}]);
