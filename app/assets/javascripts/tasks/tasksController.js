controllers.controller("TaskController", [ '$scope', function($scope) {
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
        
}]);