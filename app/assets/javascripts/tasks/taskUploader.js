angular.module('UsersAndStats').
factory('taskUploader', ['$websocket', function ($websocket) {
    return {
        sendTask: function(group, topic, description, input, output) {
            var dataStream = $websocket('ws://website.com/data');
            dataStream.send(JSON.stringify(
                { 
                    groupID: group,
                    input: input,
                    output: output
                }));
            dataStream.close();
        } 
    }  
}]);
