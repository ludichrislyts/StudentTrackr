studentTrackr.factory('StudentsFactory', function StudentsFactory () {
	var factory = {};
	// fill student array with initial values
	var populate = [{ name: "Chris Lytsell", id: 1, present: true, teacher: "John"},
									{ name: "Kim Jones", id: 2, present: false, teacher: "Diane"},
									{ name: "Jim Jenkens", id: 3, present: false, teacher: "John"},
									{ name: "Joe Schmoe", id: 4, present: false, teacher: "Diane"}];
	factory.students = populate;
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
