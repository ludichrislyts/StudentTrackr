var studentTrackr = angular.module('studentTrackr', ['ui.router']);

studentTrackr.config(function($stateProvider, $urlRouterProvider) {

	// $stateProvider.state('home', {
	// 	url: "",
	// 	templateUrl: "partials/home.html"
	// });

	$stateProvider.state('home', {
		url: "",
		templateUrl: "partials/home.html"
	});

	$stateProvider.state('students', {
		url:"/students",
		templateUrl: "partials/students.html",
		controller: "StudentsCtrl"
	});

	$stateProvider.state('search', {
		url:"/search-results",
		templateUrl: "partials/search.html",
		controller: "StudentsCtrl"
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
