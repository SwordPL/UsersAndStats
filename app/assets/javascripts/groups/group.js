angular.module('UsersAndStats').
factory('group', ['$http', 'groups', function ($http) {
    var o = {
        tasks: {}
    };
    o.getAll = function(subject_id) {
        return $http.get('/subject/'+subject_id+'/task.json').success(function(data){
            for (var i = 0; i < data.length; i++) {
                o.tasks[data[i].id] = data[i];
            }
        });
    };
    return o;
}]);
