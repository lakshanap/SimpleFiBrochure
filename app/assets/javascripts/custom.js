$(document).ready(function(){
	$("#quiz-answer1").click(function(event){
		$("#quiz-result").text("Sorry, that was wrong");
	});

	$("#quiz-answer2").click(function(event){
		$("#quiz-result").text("You're right!!");
	});
});