controllers.controller("GroupsController", [ '$scope', 'groups', function($scope, groups) {
    $scope.yourSubjects = groups.yourSubjects;
    $scope.otherSubjects = groups.otherSubjects;

    $scope.newGroupPanel = false;

    $scope.addNewGroupPanel = function() {
    	$scope.newGroupPanel = true;
    }

    $scope.addNewGroup = function() {
    	$scope.newGroupPanel = false;
    	alert("added");
    }
}]);