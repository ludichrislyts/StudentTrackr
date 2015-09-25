studentTrackr.controller('StudentsCtrl', function StudentsCtrl($scope, $stateParams,StudentsFactory, UtilitiesFactory) {
	$scope.student = UtilitiesFactory.findById(StudentsFactory.students, $stateParams.studentId), 
	$scope.teacherStudents = UtilitiesFactory.findMatching(StudentsFactory.students, $stateParams.teacher);
	$scope.students = StudentsFactory.students;
	$scope.teachers = StudentsFactory.teachers;
	$scope.StudentsFactory = StudentsFactory;
	$scope.teacher = UtilitiesFactory.findTeacher(StudentsFactory.teachers, $stateParams.teacher);

	$scope.togglePresent = function() {
		if($scope.student.present == true){$scope.student.present = false;}
			else{$scope.student.present = true;}
	}

	// $http.get('questions.json')
	// 	.success(function (response) {
	// 		$scope.questions = response;
	// 	});


	//$scope.hide = QuestionsFactory.hideQuestionSubmit();

	//var defaultCategory = QuestionsFactory.categories[0];
});
