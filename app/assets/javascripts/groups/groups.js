angular.module('UsersAndStats').
    factory('groups', ['$http', function($http) {
        var o = {
            yourSubjects: {}
        };
        o.getAll = function() {
            return $http.get('/subject.json').success(function(data){
                for (var i = 0; i < data.length; i++) {
                    o.yourSubjects[data[i].id] = data[i];
                }
            });
        };
        return o;
}]);