controllers.controller("GroupsController", [ '$scope', 'groups', function($scope, groups) {
    $scope.yourSubjects = groups.yourSubjects;
    $scope.otherSubjects = groups.otherSubjects;
}]);