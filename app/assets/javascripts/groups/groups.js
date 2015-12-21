angular.module('UsersAndStats').
    factory('groups', ['$http', function($http) {
        var o = {
            yourSubjects: []
        };
        o.getAll = function() {
            return $http.get('/subject.json').success(function(data){
                angular.copy(data, o.yourSubjects);
            });
        };
        o.getOne = function(subject_id) {
            return $http.get('/subject/'+subject_id+'.json').success(function(data){
                angular.copy(data, o.yourSubjects);
            });
        };
        return o;
}]);