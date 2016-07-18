angular.module('App',
[
  'App.navbar',
  'App.sidebar',
  'App.footer',
  'App.footerCtrl',
  'App.gifService',
  'App.ideaBtn',
  'App.eventList',
  'App.gifService',
  'App.ideaService',
  'App.suggestionService',
  'App.signUpService',
  'App.ideaCtrl',
  'App.listCtrl',
  'App.signUpCtrl',
  'App.filterCtrl',
  'ngAnimate',
  'ui.router'
])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
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
  .state('landing', {
    url: '/',
    templateUrl: 'views/landing.html'
  })
  .state('signup', {
    url: '/signup',
    templateUrl: 'views/signUp.html',
    controller: 'signUpController'
  })

}])

.run(['Ideas', '$state', function (Ideas, $state) {
  if (Ideas.location.data === null) {
    $state.go('landing');
  }
}]);
