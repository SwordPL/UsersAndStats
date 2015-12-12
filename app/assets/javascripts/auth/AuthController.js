angular.module('UsersAndStats').controller('AuthController',
    [
        '$scope',
        'Auth',
        function($scope, Auth){
            $scope.login = function() {
                Auth.login($scope.user)
            };

        }
    ]
);