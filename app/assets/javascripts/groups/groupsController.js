controllers.controller("GroupsController", [ '$scope', 'groups', function($scope, groups) {
    $scope.yourSubjects = groups.yourSubjects;
    $scope.otherSubjects = groups.otherSubjects;

    $scope.newGroupPanel = false;

    $scope.addNewGroupPanel = function() {
    	$scope.groupName = "";
    	$scope.newGroupPanel = true;
    	$('#group-added-info').hide();
    }

    $scope.addNewGroup = function() {
    	$scope.newGroupPanel = false;
    	$('#group-added-info').show();
    }
}]);