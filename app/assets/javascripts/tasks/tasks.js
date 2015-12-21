angular.module('UsersAndStats').
factory('tasks', ['$http', 'groups', function ($http) {
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
    o.getOne = function(task_id) {
        return $http.get('/task/'+task_id+'.json').success(function(data){
            angular.copy(data, o.tasks);
        });
    };
    return o;
}]);
