(function () {
    var app = angular.module('getStarted', ["ngRoute"]);

    app.config(function ($routeProvider) {
        $routeProvider
            .when("/main", {
                templateUrl: "main.htm",
                controller: "MainController"
            })
            .otherwise({ redirectTo: "/main" });
    });

}());