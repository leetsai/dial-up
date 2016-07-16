angular.module('App',
[
  'App.navbar',
  'App.sidebar',
  'App.footer',
  'App.gifService',
  'App.eventList',
  'App.ideaCtrl',
  'App.ideaService',
  'App.ideaBtn',
  'App.listCtrl',
  'App.signUpCtrl',
  'App.suggestionService',
  'App.filterCtrl',
  'ngAnimate',
  'ui.router'
])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/getidea');
  $stateProvider
  .state('home', {
    url: '/getidea',
    templateUrl: 'views/main.html',
    controller: 'IdeaController'
  })
  .state('home.list', {
    url: '/{searchTerm}',
    templateUrl: 'views/list.html',
    controller: 'ListController'
  })

}])
