controllers.controller("UsersController", [ '$scope', function($scope) {
	$scope.students = [
		{
			name: 'Name1',
			surname: 'Surname1',
			email: 'email1@example.com'
		},
		{
			name: 'Name2',
			surname: 'Surname2',
			email: 'email2@example.com'
		}
	];

	$scope.teachers = [
		{
			name: 'Name3',
			surname: 'Surname3',
			email: 'email3@example.com'
		}
	];
}]);