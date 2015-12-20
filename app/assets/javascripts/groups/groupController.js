controllers.controller("GroupController", [ '$scope', '$stateParams', 'group', 'groups',
    function($scope, $stateParams, group, groups) {
    $scope.subject = groups.yourSubjects[$stateParams.id - 1];

    $scope.tasks = group.tasks;

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