
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
        ).when('/groups/', {
                templateUrl: "groups.html",
                controller: 'MainController'
            }
        )
    }
]);



controllers = angular.module('controllers',[]);

controllers.controller("MainController", [ '$scope', function($scope) {
        $scope.yourSubjects = [
            {   
                id: 1,
                name: "PSI"
            },
            {
                id: 2,
                name: "Sieci"
            }
        ]

        $scope.otherSubjects = [
            {   
                id: 3,
                name: "Toizo"
            },
            {
                id: 4,
                name: "Analiza"
            }
        ]
    }
]);
