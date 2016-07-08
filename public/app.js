angular.module('App',
[
  'App.navbar',
  'App.ideaCtrl',
  'App.ideaService',
  'App.ideaList',
  'App.ideaBtn',
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
    url: '/:idea',
    templateUrl: 'views/list.html',
    controller: 'ListController'
  })

});
