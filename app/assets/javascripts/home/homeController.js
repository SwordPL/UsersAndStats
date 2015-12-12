angular.module('UsersAndStats').controller("MainController", [ '$scope', function($scope) {
    $scope.yourSubjects = [
        {
            id: 1,
            name: "PSI"
        },
        {
            id: 2,
            name: "Sieci"
        }
    ]

    $scope.otherSubjects = [
        {
            id: 3,
            name: "Toizo"
        },
        {
            id: 4,
            name: "Analiza"
        }
    ]
}
]);