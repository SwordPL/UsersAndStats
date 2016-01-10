controllers.controller("TaskController", [ '$scope', '$stateParams', 'Auth', 
    'groups', 'tasks', 'solutionUploader',
    function($scope, $stateParams, Auth, groups, tasks, solutionUploader) {
    $scope.signedIn = Auth.isAuthenticated;

    Auth.currentUser().then(function (user){
         $scope.user = user;
    });

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

    $scope.userSolutions = [
        {
            id: 1,
            compilationSuccess: false,
            executionTime: 0,
            createdAt: new Date(2015, 12, 1, 14, 15, 0, 0)
        },
        {
            id: 2,
            compilationSuccess: true,
            executionTime: 100,
            createdAt: new Date(2015, 12, 4, 15, 15, 0, 0)
        },
        {
            id: 3,
            compilationSuccess: true,
            executionTime: 100,
            createdAt: new Date(2015, 12, 10, 9, 15, 0, 0)      
        },
        {
            id: 4,
            compilationSuccess: true,
            executionTime: 50,
            createdAt: new Date(2015, 12, 12, 23, 15, 0, 0)
        }
    ];
     
    $scope.bestSolutions = [
        {
            id: 6,
            author: 3,
            compilationSuccess: true,
            executionTime: 50,
            createdAt: new Date(2015, 12, 10, 23, 15, 0, 0)
        },
        {
            id: 7,
            author: 4,
            compilationSuccess: false,
            executionTime: 0,
            createdAt: new Date(2015, 12, 15, 23, 15, 0, 0)
        },
        {
            id: 4,
            author: 1,
            compilationSuccess: true,
            executionTime: 50,
            createdAt: new Date(2015, 12, 16, 23, 15, 0, 0)
        },
        {
            id: 5,
            author: 2,
            compilationSuccess: true,
            executionTime: 20,
            createdAt: new Date(2015, 12, 12, 23, 15, 0, 0)
        }
    ]   

    $scope.openNewSolutionPanel = function() {
        $("#newSolutionModal").modal('show');
    };

    $scope.uploadFile = function() {
        var reader = new FileReader();
        reader.readAsText($scope.file);
        reader.onload = function(e) { 
            var contents = e.target.result;
            //below: tmp data
            $scope.user = {
                id: 1
            };
            $scope.task = {
                id: 2
            };
            solutionUploader.sendSolution($scope.user.id, $scope.task.id, contents);
        }
    };

}]);