
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
        ).when('/login', {
                templateUrl: "auth/_login.html",
                controller: 'AuthController'
            }
        )
    }
]);

controllers = angular.module('controllers', []);