controllers.controller("GroupController", [ '$scope', '$stateParams', 'tasks', 'taskUploader', 'groups',
    function($scope, $stateParams, tasks, taskUploader, groups) {
    for(var i = 0; i < groups.yourSubjects.length; i++){
        if(groups.yourSubjects[i].id == $stateParams.id) {
            $scope.subject = groups.yourSubjects[i];
            break;
        }
    }

    $scope.tasks = tasks.tasks;
    $scope.fileAdded = false;

    $scope.openNewTaskPanel = function() {
        $("#newTaskModal").modal('show');
    };

    $scope.create = function() {
      tasks.create(
          { subject_id: $scope.subject.id,
            title: $scope.taskTopic,
            description: $scope.description,
            input: $scope.input,
            output: $scope.output
          })};

}]);