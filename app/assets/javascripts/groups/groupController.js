controllers.controller("GroupController", [ '$scope', '$stateParams', function($scope, $stateParams) {
    // when there will be a service
    // $scope.subject = subjects.subjects[$stateParams.id];

    $scope.subject = {
        id: $stateParams.id,
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
    ];

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