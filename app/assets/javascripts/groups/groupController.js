controllers.controller("GroupController", [ '$scope', '$stateParams', 'group', 'groups',
    function($scope, $stateParams, group, groups) {
    $scope.subject = groups.yourSubjects[$stateParams.id];

    $scope.tasks = group.tasks;
    $scope.fileAdded = false;
    $scope.newTaskPanel = false;
    $scope.openNewTaskPanel = function() {
        $scope.newTaskPanel = true;
    };

    var myDropzone = new Dropzone("#file-dropzone", {
        init: function () {
            this.on('success', function(file, json) {
                alert('success');
            });

            this.on('addedfile', function(file) {
                alert('addedfile')
                $scope.$apply(function(){
                    $scope.fileAdded = true;
                });
            });

            this.on('drop', function(file) {
                alert('drop');
            });

            this.on("maxfilesexceeded", function(file) {
                this.removeFile(file);
            });
        },
        url: "/task/post",
        paramName: "file",
        maxFilesize: 1,
        maxFiles: 1,
        previewTemplate: '<div class="dz-preview dz-file-preview"><div class="dz-details"><div class="dz-filename"><span data-dz-name></span></div><div class="dz-size" data-dz-size></div><img data-dz-thumbnail /></div><div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div><div class="dz-error-message"><span data-dz-errormessage></span></div></div>',
    });

    $scope.addNewFile = function() {
        myDropzone.removeAllFiles();
        $scope.$apply(function(){
            $scope.fileAdded = false;
        });
    }

}]);