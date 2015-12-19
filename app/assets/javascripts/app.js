
angular.module('UsersAndStats',[
    'templates',
    'ui.router',
    'Devise',
    'controllers'
]);

angular.module('UsersAndStats').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('home', {
                url: '/',
                templateUrl: "home/_index.html",
                controller: 'MainController'
            }
        ).state('groups', {
                url: '/groups/',
                templateUrl: "groups/_groups.html",
                controller: 'MainController'
            }
        ).state('subject', {
                url: '/subject/',
                templateUrl: "subjects/_subject.html",
                controller: 'SubjectController'
            }
        ).state('login', {
                url: '/login',
                templateUrl: "auth/_login.html",
                controller: 'AuthController'
            }
        )
        $urlRouterProvider.otherwise('home')
    }
]);

controllers = angular.module('controllers', []);