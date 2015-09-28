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
				controller: "StudentsController",
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
				controller: "StudetnsController",
			},
			'body':{
				templateUrl: "partials/students.html",
				controller: "StudentsCtrl",
			},
		}
	});

	$stateProvider.state('students.teachers', {
		url: "/:studentId",
		templateUrl: "partials/studentCheckIn.html",
		controller: "StudentsCtrl"
	});

	$stateProvider.state('teacher_search', {
		url: "/:teacher",
		templateUrl: "partials/teacher.html",
		controller: "StudentsCtrl"
	});


});
