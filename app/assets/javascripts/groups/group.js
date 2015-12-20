angular.module('UsersAndStats').
factory('group', ['$http', 'groups', function ($http) {
    var o = {
        tasks: []
    };
    o.getAll = function(subject_id) {
        return $http.get('/subject/'+subject_id+'/task.json').success(function(data){
            angular.copy(data, o.tasks);
        });
    };
    return o;
}]);
