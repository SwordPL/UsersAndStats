angular.module('UsersAndStats').
    factory('groups', ['$http', function($http) {
        var o = {
            yourSubjects: [],
            otherSubjects: []
        };
        o.getAll = function() {
            return $http.get('/subject.json').success(function(data){
                angular.copy(data, o.yourSubjects);
            });
        };
        return o;
}]);