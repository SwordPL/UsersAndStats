
angular.module('UsersAndStats',[
    'templates',
    'ui.router',
    'Devise',
    'controllers',
    'ui.bootstrap'
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
        ).state('task', {
            url: '/task/',
            templateUrl: "tasks/_task.html",
            controller: 'TaskController'
            }
        ).state('login', {
                url: '/login',
                templateUrl: "auth/_login.html",
                controller: 'AuthController'
            }
        ).state('profile', {
                url: '/profile',
                templateUrl: "profile/_profile.html",
                controller: 'ProfileController'
            }
        ).state('users', {
                url: '/users/',
                templateUrl: "users/_users.html",
                controller: 'UsersController'
            }
        );

        $urlRouterProvider.otherwise('home')
    }
]);

controllers = angular.module('controllers', []);