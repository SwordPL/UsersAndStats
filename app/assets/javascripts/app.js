
angular.module('UsersAndStats',[
    'templates',
    'ngRoute',
    'Devise',
    'controllers'
]);

angular.module('UsersAndStats').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/', {
                templateUrl: "home/_index.html",
                controller: 'MainController'
            }
        ).when('/groups/', {
                templateUrl: "groups/_groups.html",
                controller: 'MainController'
            }
        ).when('/subject/', {
                templateUrl: "subjects/_subject.html",
                controller: 'SubjectController'
            }
        ).when('/task/', {
                templateUrl: "tasks/_task.html",
                controller: 'TaskController'
            }
        ).when('/login', {
                templateUrl: "auth/_login.html",
                controller: 'AuthController'
            }
        ).when('/profile/', {
                templateUrl: "profile/_profile.html",
                controller: 'ProfileController'
            }
        ).when('/users/', {
                templateUrl: "users/_users.html",
                controller: 'UsersController'
            }
        )
    }
]);

controllers = angular.module('controllers', []);