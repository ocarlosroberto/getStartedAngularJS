(function () {
  var app = angular.module('getStarted', []);

  var MainController_1_1 = function ($scope) {
    var person = {
      firstName: "Carlos",
      lastName: "Silva",
      imageSrc: "https://avatars.githubusercontent.com/u/16782347?s=460&u=e0bc04f60eefbd12dd614856589cfb58f5ee0be8&v=4"
    }
    $scope.person = person;
  };

  var MainController_1_2 = function ($scope, $http) {

    var onUserComplete = function (response) {
      $scope.user = response.data;
      $http.get($scope.user.repos_url)
        .then(onRepos, onError);
    };

    var onRepos = function(response){
      $scope.repos = response.data;
    };

    var onError = function (reason) {
      $scope.error = "Could not fetch the data.";
    };

    $scope.search = function (username) {
      $http.get("https://api.github.com/users/" + username)
        .then(onUserComplete, onError);
    };

  };

  app.controller("MainController_1_1", ["$scope", MainController_1_1]);
  app.controller("MainController_1_2", ["$scope", "$http", MainController_1_2]);

}());
