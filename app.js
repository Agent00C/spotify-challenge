

var playlistData;
var playlistUrl = 'https://api.spotify.com/v1/search?type=playlist&query=';
var myApp = angular.module('myApp', []);

var myCtrl = myApp.controller('myCtrl', function($scope, $http) {
  $scope.getPlaylists = function() {
    $http.get(playlistUrl + $scope.playlist).success(function(response){
      playlistData = $scope.playlists = response.playlists.items; 
    });
  };
});

// Add tool tips to anything with a title property
$('body').tooltip({
    selector: '[title]'
});