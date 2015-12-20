controllers.controller("TaskController", [ '$scope', 'Auth', function($scope, Auth) {
    // $scope.signedIn = Auth.isAuthenticated;

    // Auth.currentUser().then(function (user){
    //     $scope.user = user;
    // });

    $scope.user = {
        id: 1
    }

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

    $scope.userSolutions = [
        {
            id: 1,
            compilationSuccess: false,
            executionTime: 0,
            points: 0,
            createdAt: new Date(2015, 12, 1, 14, 15, 0, 0)
        },
        {
            id: 2,
            compilationSuccess: true,
            executionTime: 100,
            points: 10,
            createdAt: new Date(2015, 12, 4, 15, 15, 0, 0)
        },
        {
            id: 3,
            compilationSuccess: true,
            executionTime: 100,
            points: 20,
            createdAt: new Date(2015, 12, 10, 9, 15, 0, 0)      
        },
        {
            id: 4,
            compilationSuccess: true,
            executionTime: 50,
            points: 20,
            createdAt: new Date(2015, 12, 12, 23, 15, 0, 0)
        }
    ];
     
    $scope.bestSolutions = [
        {
            id: 6,
            author: 3,
            compilationSuccess: true,
            executionTime: 50,
            points: 18,
            createdAt: new Date(2015, 12, 10, 23, 15, 0, 0)
        },
        {
            id: 7,
            author: 4,
            compilationSuccess: false,
            executionTime: 0,
            points: 0,
            createdAt: new Date(2015, 12, 15, 23, 15, 0, 0)
        },
        {
            id: 4,
            author: 1,
            compilationSuccess: true,
            executionTime: 50,
            points: 20,
            createdAt: new Date(2015, 12, 16, 23, 15, 0, 0)
        },
        {
            id: 5,
            author: 2,
            compilationSuccess: true,
            executionTime: 20,
            points: 20,
            createdAt: new Date(2015, 12, 12, 23, 15, 0, 0)
        }
    ]   
}]);