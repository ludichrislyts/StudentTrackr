questionList.controller('AnswersCtrl', function AnswersCtrl($scope, $stateParams, QuestionsFactory, UtilitiesFactory) {
	$scope.question = UtilitiesFactory.findById(QuestionsFactory.questions, $stateParams.questionId);
	$scope.questions = UtilitiesFactory.findByCategory(QuestionsFactory.questions, $stateParams.category);
	$scope.category = $stateParams.category;



	$scope.addAnswer = function() {
		$scope.question.answers.push({	text: $scope.answerText,
																comments: ["good"],
																approved: false,
																   votes: 0
																});
		$scope.question.answered = "Answered!";
		$scope.answerText = null;
	};

	$scope.cutString = function(inString) {
		var shortString = inString.slice(0,25);
		//console.log(shortString);
		return shortString;
	}

	$scope.approveAnswer = function(answer, checked) {
		answer.approved = checked;
	}

	$scope.changeVote = function(item, value) {
		item.votes += value;
	}
	// $scope.$watch('adjustVoteUp', function(item){
	// 	item.votes += 1;
	// });
	// $scope.$watch('adjustVoteDown', function(item){
	// 	item.votes -= 1;
	// });


});

// change approve status

// change upvote

// change comments

// $scope.approved: false $scope.comments: [], $scope.upvote: 0
