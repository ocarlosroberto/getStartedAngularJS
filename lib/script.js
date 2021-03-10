angular.module('getStarted', [])
  .controller('MainController',function($scope){
    var person = {
      firstName: "Carlos",
      lastName: "Silva",
      imageSrc: "https://avatars.githubusercontent.com/u/16782347?s=460&u=e0bc04f60eefbd12dd614856589cfb58f5ee0be8&v=4"
    }
    $scope.person = person;
  });