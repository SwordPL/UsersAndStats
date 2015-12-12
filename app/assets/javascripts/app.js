
usersAndStats = angular.module('UsersAndStats',[
    'templates',
    'ngRoute',
    'controllers'
]);

usersAndStats.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/', {
                templateUrl: "index.html",
                controller: 'MainController'
            }
        )
    }
]);

controllers = angular.module('controllers',[]);

controllers.controller("MainController", [ '$scope', function($scope) {

    }
]);
