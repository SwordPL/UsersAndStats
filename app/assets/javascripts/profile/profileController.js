controllers.controller("ProfileController", [ '$scope', 'Auth', '$uibModal', 
    function($scope, Auth, $uibModal) {
    Auth.currentUser().then(function (user){
        $scope.user = user;
    });

    $scope.showEditModal = function () {
    
    }
      
}]);

