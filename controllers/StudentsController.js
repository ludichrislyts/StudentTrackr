studentTrackr.controller('StudentsCtrl', function StudentsCtrl($scope, $stateParams,StudentsFactory, UtilitiesFactory) {
	
	$scope.student = UtilitiesFactory.findById(StudentsFactory.students, $stateParams.studentId), 
	
	$scope.teacherStudents = UtilitiesFactory.findMatching(StudentsFactory.students, $stateParams.teacher);
	
	$scope.students = StudentsFactory.students;
	
	$scope.teachers = StudentsFactory.teachers;
	
	$scope.StudentsFactory = StudentsFactory;
	
	$scope.studentCheck = function(){
		return $scope.student.present;
	}
	
	// $scope.studentCheck = $stateParams.student.present;

	$scope.teacher = UtilitiesFactory.findTeacher(StudentsFactory.teachers, $stateParams.teacher);

	$scope.togglePresent = function() {
		if($scope.student.present == true){$scope.student.present = false;}
			else{$scope.student.present = true;}
		return $scope.student.present;
	}
});
