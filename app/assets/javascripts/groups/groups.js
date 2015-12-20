angular.module('UsersAndStats').
    factory('groups', [function() {
        var o = {
            yourSubjects: [
                {
                    id: 1,
                    name: "PSI"
                },
                {
                    id: 2,
                    name: "Sieci"
                }
                ],
            otherSubjects: [
            {
                id: 3,
                name: "Toizo"
            },
            {
                id: 4,
                name: "Analiza"
            }
            ]};
    return o;
}]);