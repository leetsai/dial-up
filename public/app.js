angular.module('App',
[
  'App.navbar',
  'App.footer',
  'App.eventList',
  'App.ideaCtrl',
  'App.ideaService',
  'App.ideaBtn',
  'App.listCtrl',
  'ngAnimate',
  'ui.router'
])

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('home');
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'views/main.html',
    controller: 'IdeaController'
  })
  // routing for old view swap - not to be used with new look
  // .state('list', {
  //   url: '/:id',
  //   templateUrl: 'views/list.html',
  //   controller: 'ListController'
  // })
})
