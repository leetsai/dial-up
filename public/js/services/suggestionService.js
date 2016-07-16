angular.module('App.suggestionService', [])

.factory('SuggestionFactory', function() {

  var suggestionList = {
    "Little Gifts": [
      {
        display: "Buy some flowers",
        yelpSearch: "florist",
        wikiSearch: "flowers"
      },
      {
        display: "Give a relaxing massage",
        yelpSearch: "Massage",
        wikiSearch: "Massage"
      },
      {
        display: "Get a nice bottle of wine",
        yelpSearch: "Wine Shop",
        wikiSearch: "Wine"
      },
      {
        display: "Grab some fancy chocolate",
        yelpSearch: "Chocolate",
        wikiSearch: "Chocolate"
      }
    ],
    "Fun Activities": [
      { display: "Have a picnic",
        yelpSearch: "park",
        wikiSearch: "Picnic"
      },
      { display: "Visit a local museum",
        yelpSearch: "Museum",
        wikiSearch: "Museum"
      },
      { display: "Tour a local garden",
        yelpSearch: "garden",
        wikiSearch: "garden"
      },
      { display: "Play minigolf",
        yelpSearch: "Miniature Golf",
        wikiSearch: "Miniature Golf"
      },
      { display: "Go bowling",
        yelpSearch: "Bowling",
        wikiSearch: "Bowling"
      },
      { display: "See local live music",
        yelpSearch: "concert",
        wikiSearch: "concert"
      },
      { display: "Go to a comedy club",
        yelpSearch: "Stand-up Comedy",
        wikiSearch: "Stand-up Comedy"
      },
      { display: "Take a hike",
        yelpSearch: "Hike",
        wikiSearch: "Hiking"
      },
      { display: "Get a nightcap at a local bar",
        yelpSearch: "cocktail bar",
        wikiSearch: "Nightcap_(beverage)"
      },
      { display: "Make dinner together",
        yelpSearch: "grocery store",
        wikiSearch: "cooking"
      },
      { display: "Go see a movie",
        yelpSearch: "movies",
        wikiSearch: "film"
      },
      { display: "Find something at a flea market",
        yelpSearch: "flea market",
        wikiSearch: "flea market"
      },
      { display: "Can you escape the room?",
        yelpSearch: "escape the room",
        wikiSearch: "escape the room"
      },
      { display: "Visit an aquarium",
        yelpSearch: "aquarium",
        wikiSearch: "aquarium"
      },
      { display: "Win something at the arcade",
        yelpSearch: "arcades",
        wikiSearch: "amusement arcade"
      },
      { display: "Take a cooking class",
        yelpSearch: "cooking class",
        wikiSearch: "culinary school"
      },
      { display: "Attend a yoga class",
        yelpSearch: "yoga",
        wikiSearch: "yoga"
      },
      { display: "Try rock climbing",
        yelpSearch: "rock climbing",
        wikiSearch: "Rock_climbing"
      },
      { display: "Go on a fishing excursion",
        yelpSearch: "fishing",
        wikiSearch: "fishing"
      },
      { display: "Horseback Riding",
        yelpSearch: "Horseback Riding",
        wikiSearch: "Equestrianism"
      }
    ],
    "Quick Trips": [
      { display: "Escape... go camping!",
        yelpSearch: "Camping",
        wikiSearch: "Camping"
      },
      { display: "Vino anyone?",
        yelpSearch: "Wine Tasting",
        wikiSearch: "Wine Tasting"
      },
      { display: "Take a scenic drive",
        yelpSearch: "Scenic Drive",
        wikiSearch: "Sunday drive"
      },
      { display: "Visit a national/state park",
        yelpSearch: "National Park",
        wikiSearch: "National_park"
      },
      { display: "Be the next top chef",
        yelpSearch: "cooking lessons",
        wikiSearch: "cooking"
      },
      { display: "Go rock climbing",
        yelpSearch: "rock climbing",
        wikiSearch: "rock climbing"
      },
      { display: "Ride a wave!",
        yelpSearch: "surfing",
        wikiSearch: "surfing"
      },
      { display: "Hit the beach",
        yelpSearch: "beach",
        wikiSearch: "beach"
      },
      { display: "Skydiving!",
        yelpSearch: "skydiving",
        wikiSearch: "parachuting"
      },
      { display: "Go Whale watching",
        yelpSearch: "Whale Watching",
        wikiSearch: "Whale_watching"
      },
      { display: "Go snorkeling",
        yelpSearch: "Snorkeling",
        wikiSearch: "Snorkeling"
      },
      { display: "Hit the slopes",
        yelpSearch: "skiing",
        wikiSearch: "skiing"
      },
      { display: "Go for a sail",
        yelpSearch: "sailing",
        wikiSearch: "sailing"
      },
      { display: "Ride a roller coaster!",
        yelpSearch: "amusement park",
        wikiSearch: "Amusement_park"
      }
    ],
    "What to Eat": [
      { display: "Chinese Food",
        yelpSearch: "Chinese food",
        wikiSearch: "Chinese cuisine"
      },
      { display: "Indian Food",
        yelpSearch: "Indian food",
        wikiSearch: "Indian cuisine"
      },
      { display: "Thai Food",
        yelpSearch: "Thai food",
        wikiSearch: "Thai cuisine"
      },
      { display: "Italian Food",
        yelpSearch: "Italian food",
        wikiSearch: "Italian cuisine"
      },
      { display: "Mexican Food",
        yelpSearch: "Mexican food",
        wikiSearch: "Mexican cuisine"
      },
      { display: "Greek Food",
        yelpSearch: "Greek food",
        wikiSearch: "Greek cuisine"
      },
      { display: "Cuban Food",
        yelpSearch: "Cuban food",
        wikiSearch: "Cuban cuisine"
      },
      { display: "French Food",
        yelpSearch: "French food",
        wikiSearch: "French cuisine"
      },
      { display: "German Food",
        yelpSearch: "German food",
        wikiSearch: "German cuisine"
      },
      { display: "Tapas",
        yelpSearch: "Tapas",
        wikiSearch: "Tapas"
      },
      { display: "Burgers",
        yelpSearch: "hamburger",
        wikiSearch: "hamburger"
      },
      { display: "Pizza",
        yelpSearch: "Pizza",
        wikiSearch: "Pizza"
      },
      { display: "Afternoon tea",
        yelpSearch: "afternoon tea",
        wikiSearch: "afternoon tea"
      },
      { display: "Dim sum",
        yelpSearch: "dim sum",
        wikiSearch: "dim sum"
      },
      { display: "Sweet tooth",
        yelpSearch: "desserts",
        wikiSearch: "dessert"
      },
      { display: "Treat yo self: Michelin Star Restaurants",
        yelpSearch: "michelin star",
        wikiSearch: "michelin guide"
      },
      { display: "Sushi time",
        yelpSearch: "sushi",
        wikiSearch: "sushi"
      }
    ]
  };

  return {
    suggestionList : suggestionList
  };

});
