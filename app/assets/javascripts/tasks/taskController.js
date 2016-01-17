controllers.controller("TaskController", [ '$scope', '$stateParams', 'Auth', 
    'groups', 'tasks', 'solutions', 'solutionUploader',
    function($scope, $stateParams, Auth, groups, tasks, solutions, solutionUploader) {
    $scope.signedIn = Auth.isAuthenticated;

/*
    Auth.currentUser().then(function (user){
         $scope.user = user;
    });
*/

    $scope.fileAdded = false;

    for(var i = 0; i < tasks.tasks.length; i++){
        if(tasks.tasks[i].id == $stateParams.id) {
            $scope.task = tasks.tasks[i];
            break;
        }
    }

    groups.getOne($scope.task.subject_id).success(function(data){
        $scope.subject = data
    });

    solutions.getAll($stateParams.id).success(function(data) {
        $scope.userSolutions = data;
    });

    $scope.bestSolutions = [ ];

    $scope.openNewSolutionPanel = function() {
        $("#newSolutionModal").modal('show');
    };

    $scope.uploadFile = function() {
        var reader = new FileReader();
        reader.readAsText($scope.file);
        reader.onload = function(e) {
            var contents = e.target.result;
            console.log(contents);
            solutionUploader.sendSolution(1, $scope.task.id, contents, $scope.task.input, $scope.task.output);
        }
    };

}]);