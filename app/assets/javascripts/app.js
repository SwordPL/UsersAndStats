
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
                url: '/groups',
                templateUrl: "groups/_groups.html",
                controller: 'GroupsController',
                resolve: {
                    groupPromise: ['groups', function(groups){
                    return groups.getAll()
                    }]
                }
            }
        ).state('group', {
                url: '/groups/{id}',
                templateUrl: 'groups/_group.html',
                controller: 'GroupController',
                resolve: {
                    tasksPromise: ['$stateParams', 'tasks', function($stateParams, tasks){
                        return tasks.getAll($stateParams.id)
                    }]
                }
            }
        ).state('task', {
            url: '/tasks/{id}',
            templateUrl: "tasks/_task.html",
            controller: 'TaskController',
            resolve: {
                taskPromise: ['$stateParams', 'tasks', function($stateParams, tasks){
                    return tasks.getOne($stateParams.id)
                }]
            }
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