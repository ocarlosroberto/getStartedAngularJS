(function () {
    {

        var github = function ($http) {

            var getUser = function (username) {
                return $http.get("https://api.github.com/users/" + username)
                    .then(function (response) {
                        return response.data;
                    });
            };

            var getRepository = function (user) {
                return $http.get(user.repos_url)
                    .then(function (response) {
                        return response.data;
                    })
            }

            return {
                getUser: getUser,
                getRepository: getRepository
            };
        };

        var module = angular.module("getStarted");
        module.factory("github", github);
    }
}());