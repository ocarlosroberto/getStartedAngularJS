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

  var MainController_1_2 = function (
    $scope, github, $interval, $log, $anchorScroll, $location) {

    var onUserComplete = function (data) {
      $scope.user = data;
      github.getRepository($scope.user).then(onRepos, onError);
    };

    var onRepos = function (data) {
      $scope.repository = data;
      $location.hash("userDetails");
      $anchorScroll();
    };

    var onError = function (reason) {
      $scope.error = "Could not fetch the data.";
    };

    var decrementCountdown = function () {
      $scope.countdown -= 1;
      if ($scope.countdown < 1) {
        $scope.search($scope.username);
        $scope.countdown = null;
      }
    };

    var countdownInterval = null;
    var startCountdown = function () {
      countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
    }

    $scope.search = function (username) {
      $log.info("Searching for " + username);
      github.getUser(username).then(onUserComplete, onError);
      if (countdownInterval) {
        $interval.cancel(countdownInterval);
        $scope.countdown = null;
      }
    };

    $scope.username = "angular";
    $scope.repoSortOrder = "+name";
    $scope.countdown = 5;
    startCountdown();


  };

  app.controller("MainController_1_1", ["$scope", MainController_1_1]);
  app.controller("MainController_1_2", ["$scope", "github", "$interval", "$log", "$anchorScroll", "$location", MainController_1_2]);

}());
