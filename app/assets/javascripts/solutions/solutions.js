angular.module('UsersAndStats').
factory('solutions', ['$http', function ($http) {
    var o = {
        solutions: []
    };

    o.getAll = function(task_id) {
        return $http.get('/task/'+task_id+'/solution.json').success(function(data){
            angular.copy(data, o.solutions);
        })};

    return o;
}]);
