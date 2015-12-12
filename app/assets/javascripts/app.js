
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
        )
    }
]);

controllers = angular.module('controllers',[]);