studentTrackr.factory('StudentsFactory', function StudentsFactory () {
	var factory = {};
	factory.students = [];
	factory.teachers = ["Diane", "John", "Mary", "Brian", "Paula", "Mike"];

	factory.addStudent = function() {
		factory.students.push({ 	  name: factory.studentName,
																  id: factory.students.length +1,
														 present: false,
														 teacher: factory.studentTeacher
													});
		factory.studentName = null;
	};


	return factory;

});
