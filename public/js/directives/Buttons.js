angular.module('App.ideaBtn', [])

.directive('ideaButton', ['Ideas', '$state', 'DisplayGif', 'SuggestionFactory', function(Ideas, $state, DisplayGif, SuggestionFactory) {
  return {
    link: function($scope, e, attr) {
      // Gets idea and flags controller for more info to show
      $scope.getIdea = function() {
        $scope.generateRandomIdea($scope.filter, function(idea) {
          $scope.data = idea;
          $scope.idea = idea.display;
          $scope.moreInfo = true;
          $scope.changeClass();
          $scope.button = "Next";
          $scope.yelpResults = '';
          $scope.wikiResults = '';
        })
      }
      // Gives the Idea display the ability to be clicked
      $scope.changeClass = function() {
        if ($scope.class === "noInfo") {
          $scope.class = "getInfo";
        }
      }
      // Will populate with API data, using dummy data now
      $scope.getList = function(e) {
        if ($scope.moreInfo) {
          $scope.eventList = true;
          $scope.moreInfo = false; // The moreInfo area should not be clickable after clicked

          Ideas.getYelp($scope.data.yelpSearch)
          .then(function(resp) {
            $scope.yelpResults = resp.data;
            DisplayGif.endGif();
            $scope.dropdown = true;
            $('.listWrapper').css("opacity", "0").show();
            $('.listWrapper ').animate({'max-height': "1000px"}, 300, 'linear', function () {
              $('.listWrapper').animate({opacity: "1"}, 300);
            });
          });
          Ideas.getWiki($scope.data.wikiSearch)
          .then(function(resp) {
            $scope.wikiResults = resp.data;
          });
          $('.get-idea-btn').hide();
          DisplayGif.startGif();
        }
        else {
          $scope.dropdown = false;
          $scope.moreInfo = true;
          $scope.eventList = false;
          $('.get-idea-btn').show();
          $('.listWrapper').css("opacity", "0").hide();
        }
      }
      $scope.generateRandomIdea = function (category, callback) {
        if (category === 'Random!') {
          if (Object.keys($scope.suggestionList).length === 0) {
            callback({display: "Suggestion List Exhausted", yelpSearch: "", wikiSearch: "Decision-making"})
            $scope.class = 'noInfo';
            $scope.moreInfo = false;
            $scope.eventList = false;
            $scope.dropdown = false;
            return;
          };
          var categories = Object.keys($scope.suggestionList);
          var category = categories[Math.floor(Math.random() * Object.keys($scope.suggestionList).length)];
        }
        if ($scope.suggestionList[category] === undefined) {
          callback({display: "No more suggestions in this category", yelpSearch: "", wikiSearch: "Decision-making"})
          $scope.class = 'noInfo';
          $scope.moreInfo = false;
          $scope.eventList = false;
          $scope.dropdown = false;
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

      // Allows directive to track filter value that is passed using getIdea()
      // var menu = document.getElementById('filterMenu');
      // menu.addEventListener('change', function(e) {
      //   $scope.filter = e.target.value;
      // })
      var sidebarItems = document.getElementsByClassName('sidebar-list-item');
      for (var i = 0; i < sidebarItems.length; i++) {
        sidebarItems[i].addEventListener('click', function(e) {
          $scope.filter = e.target.text;
        })
      }
    }
  }

}])
