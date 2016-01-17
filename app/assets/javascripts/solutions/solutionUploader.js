angular.module('UsersAndStats').
factory('solutionUploader', ['$websocket', function ($websocket) {
    return {
        sendSolution: function(task, author, file, input, output) {
            var dataStream = $websocket('ws://localhost:8026/file-uploader/user-and-stats');
            dataStream.send(JSON.stringify(
                { 
                    task_number: task,
                    user_id: author,
                    file: file,
                    input: input,
                    output: output,
                    timeout: 60
                }));
            dataStream.close();
        } 
    }  
}]);
