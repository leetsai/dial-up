angular.module('App.ideaCtrl', [])

.controller('IdeaController', ['$scope', 'Ideas', 'SuggestionFactory', function($scope, Ideas, SuggestionFactory) {
  // Default data on page load - changes occur in Buttons directive
  $scope.idea = "In Need of Some Spontaneity?";
  $scope.button = "Get Some!";
  $scope.filter = 'Random!';
  // These 4 dictate whether more information can be shown
  $scope.class = 'noInfo';
  $scope.moreInfo = false;
  $scope.eventList = false;

  $scope.suggestionList = SuggestionFactory.suggestionList;

  $scope.generateRandomIdea = function (category, callback) {
    if (category === 'Random!') {
      if (Object.keys($scope.suggestionList).length === 0) {
        callback({display: "Suggestion List Exhausted", yelpSearch: "", wikiSearch: "Decision-making"})
        return;
      };
      var categories = Object.keys($scope.suggestionList);
      var category = categories[Math.floor(Math.random() * Object.keys($scope.suggestionList).length)];
    }
    if ($scope.suggestionList[category] === undefined) {
      callback({display: "No more suggestions in this category", yelpSearch: "", wikiSearch: "Decision-making"})
    } else {
      var random = Math.floor(Math.random() * $scope.suggestionList[category].length);
      var suggestion = $scope.suggestionList[category][random];
      $scope.suggestionList[category].splice(random, 1);
      if ($scope.suggestionList[category].length === 0) {
        delete $scope.suggestionList[category];
      }
      callback(suggestion);
    }
  }

}])
