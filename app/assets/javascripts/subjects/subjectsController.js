controllers.controller("SubjectController", [ '$scope', function($scope) {
    $scope.subject = {
        id: 1,
        name: "PSI"
    };

    $scope.tasks = [
        {
            id: 1,
            name: "Diagramy 1.",
            maxPoints: 20,
            subject: "PSI",
            path: 'xxx'
        },
        {
            id: 2,
            name: "Diagramy 2.",
            maxPoints: 20,
            subject: "PSI",
            path: 'xxx'
        }
    ]

    $scope.newTasks = [
        {
            id: 3,
            name: "Diagramy 3.",
            maxPoints: 20,
            subject: "PSI",
            path: 'xxx'
        }
    ]
}]);