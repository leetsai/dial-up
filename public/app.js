angular.module('App',
[
  'App.navbar',
  'App.ideaCtrl',
  'App.ideaService',
  'App.ideaBtn',
  'App.listCtrl',
  'ngAnimate',
  'ui.router'
])

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'views/main.html',
    controller: 'IdeaController'
  })
  .state('list', {
    url: '/:id',
    templateUrl: 'views/list.html',
    controller: 'ListController'
  })

});
