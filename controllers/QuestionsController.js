questionList.controller('QuestionsCtrl', function QuestionsCtrl($scope, QuestionsFactory) {
	$scope.questions = QuestionsFactory.questions;
	$scope.categories = QuestionsFactory.categories;
	$scope.QuestionsFactory = QuestionsFactory;
	$scope.questionCategory = QuestionsFactory.categories[0];

	$scope.cutString = function(inString) {
		var shortString = inString.slice(0,25);
		//console.log(shortString);
		return shortString;
	}

	// $http.get('questions.json')
	// 	.success(function (response) {
	// 		$scope.questions = response;
	// 	});


	//$scope.hide = QuestionsFactory.hideQuestionSubmit();

	//var defaultCategory = QuestionsFactory.categories[0];
});
