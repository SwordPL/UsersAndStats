controllers.controller("TaskController", [ '$scope', 'Auth', function($scope, Auth) {
    $scope.subject = {
        id: 1,
        name: "PSI"
    };

    $scope.task = {
            id: 1,
            name: "Diagramy 1.",
            maxPoints: 20,
            subject: "PSI",
            path: 'xxx'
    };

    $scope.signedIn = Auth.isAuthenticated;

    Auth.currentUser().then(function (user){
        $scope.user = user;
    });
        
}]);