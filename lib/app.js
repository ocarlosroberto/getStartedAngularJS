(function () {
    var app = angular.module('getStarted', ["ngRoute"]);

    app.config(function ($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('');
        $routeProvider
            .when("/main", {
                templateUrl: "main.htm",
                controller: "MainController"
            })
            .when("/user/:username", {
                templateUrl: "user.htm",
                controller: "UserController"
            })
            .when("/repo/:username/:reponame", {
                templateUrl: "repo.htm",
                controller: "RepoController"
            })
            .otherwise({ redirectTo: "/main" });
    });

}());