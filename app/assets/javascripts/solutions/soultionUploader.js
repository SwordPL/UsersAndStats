angular.module('UsersAndStats').
factory('solutionUploader', ['$websocket', function ($websocket) {
    return {
        sendSolution: function(task, author, file) {
            var dataStream = $websocket('wss://website.com/data');
            dataStream.send(JSON.stringify(
                { 
                    task: task,
                    author: author,
                    file: file
                }));
            dataStream.close();
        } 
    }  
}]);
