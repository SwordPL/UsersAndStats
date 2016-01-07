controllers.controller("GroupController", [ '$scope', '$stateParams', 'tasks', 'taskUploader', 'groups',
    function($scope, $stateParams, tasks, taskUploader, groups) {
    $scope.subject = groups.yourSubjects[$stateParams.id];

    $scope.tasks = tasks.tasks;
    $scope.fileAdded = false;
    $scope.openNewTaskPanel = function() {
        $("#newTaskModal").modal('show');
    };

    $scope.uploadTask = function() {
        taskUploader.sendTask($scope.subject, $scope.taskTopic,
        $scope.description, $scope.input, $scope.output); 
    }

}]);