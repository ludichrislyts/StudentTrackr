var studentTrackr = angular.module('studentTrackr', ['ui.router']);

studentTrackr.config(function($stateProvider, $urlRouterProvider) {

	// $stateProvider.state('home', {
	// 	url: "",
	// 	templateUrl: "partials/home.html"
	// });

	$stateProvider.state('home', {
		url: "",
		views:{
			'header': {
				templateUrl: "partials/header.html",
				controller: "StudentsCtrl",
			},
			'body': {
				templateUrl: "partials/home.html",
			},
		}
	});

	$stateProvider.state('students', {
		url:"/students",
		views:{
			'header': {
				templateUrl: "partials/header.html",
				controller: "StudentsCtrl",
			},
			'body':{
				templateUrl: "partials/students.html",
				controller: "StudentsCtrl",
			},
		}
	});

	$stateProvider.state('studentCheckIn', {
		url: "/:studentId",
		views:{
			'header':{
				templateUrl: "partials/header.html",
				controller: "StudentsCtrl",
			},
			'body':{
				templateUrl: "partials/studentCheckIn.html",
				controller: "StudentsCtrl",
			},
		}
	});

	$stateProvider.state('teacher_search', {
		url: "/:teacher/",
		views:{
			'header':{
				templateUrl: "partials/header.html",
				controller: "StudentsCtrl",
			},
			'body':{
				templateUrl: "partials/teacher.html",
				controller: "StudentsCtrl",
			},
		}
	});


});
