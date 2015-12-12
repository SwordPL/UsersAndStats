
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
        ).when('/subject/', {
                templateUrl: "subject.html",
                controller: 'SubjectController'
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

controllers.controller("SubjectController", [ '$scope', function($scope) {
    $scope.subject = {
        id: 1,
        name: "PSI"
    }

    $scope.tasks = [
        {   
            id: 1,
            name: "Diagramy 1.",
            maxPoints: 20,
            subject: "PSI",
            path: 'xxx'
        },
        {   
            id: 2,
            name: "Diagramy 2.",
            maxPoints: 20,
            subject: "PSI",
            path: 'xxx'
        }
    ]

    $scope.newTasks = [
        {   
            id: 3,
            name: "Diagramy 3.",
            maxPoints: 20,
            subject: "PSI",
            path: 'xxx'
        },
    ]
}]);
