angular.module('UsersAndStats').controller('AuthController',
    [
        '$scope',
        '$state',
        'Auth',
        function($scope, $state, Auth){
            $scope.login = function() {
                Auth.login($scope.user).then(function() {
                    $state.go('home');
                })
            };

        }
    ]
);