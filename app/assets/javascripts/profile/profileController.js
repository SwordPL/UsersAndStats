controllers.controller("ProfileController", [ '$scope', 'Auth', '$uibModal', 
    function($scope, Auth, $uibModal) {

    $scope.user = {
        name: 'Name1',
        surname: 'Surname1',
        email: 'email@example.com',
        role: 'teacher'
    }


    $scope.showEditModal = function () {
    
    }
      
}]);

