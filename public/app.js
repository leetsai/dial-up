angular.module('App',
[
  'App.ideaCtrl',
  'App.ideaService',
  'App.ideaDir',
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
