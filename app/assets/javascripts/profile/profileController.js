controllers.controller("ProfileController", [ '$scope', 'Auth', function($scope, Auth) {
    $scope.user = {
        name: 'Name1',
        surname: 'Surname1',
        email: 'email@example.com',
        role: 'teacher'
    }

    $scope.showEditModal = function() {
        // $('#editModal').modal('show');
    }
}]);