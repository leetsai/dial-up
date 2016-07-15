angular.module('App.gifService', [])

.service('DisplayGif', function() {
  function startGif() {
    $('.spinner').show();
    console.log('tried to show')
  }

  function endGif() {
    $('.spinner').hide();
  }

  return {
    startGif: startGif,
    endGif: endGif
  };
})
