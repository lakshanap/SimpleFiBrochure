$(document).ready(function(){
	$("#transfer-table").hide();
	$("#assistance").hide();

	$("#quiz-answer1").click(function(event){
		$("#lesson").html("");
		$("#quiz-answer").html("<div class='answer-text'>Sorry, would you believe the 'interest free' loan actually ends up costing an equivalent of 16% interest (Annualised Percentage Rate 'APR')?\
			                       <br><br>You only pay $23 in interest with the 9% APR option as opposed to $40.</div>");
		$("#btn-store").html("<div id='quiz-btn' style='center' class='btn btn-large'>How is that possible?</div>");
		$("#quiz-btn").bind('click', function(event){
			$("#quiz-table").html("<div class='answer-text'><img src='assets/repayment_chart.png'< /></div>");
		});
	});

	$("#quiz-answer2").click(function(event){
		$("#lesson").html("");
		$("#quiz-answer").html("<div class='answer-text'>You're right! This is a far better option than the 4% upfront fee loan that ends up costing an equivalent of 16% interest (Annualised Percentage Rate 'APR')\
														<br><br>You only pay $23 in interest with the 9% APR option as opposed to $40.</div>");
		$("#btn-store").html("<div id='quiz-btn' style='center' class='btn btn-large'>How is that possible?</div>");
		$("#quiz-btn").bind('click', function(event){
			$("#quiz-table").html("<div class='answer-text'><img src='assets/repayment_chart.png'< /></div>");
		});
	});

	$("#btn-transfer-table").click(function(event){
		$("#transfer-table").show();
		$("#btn-transfer-table").hide();
	});

	$("#btn-assistance").click(function(event){
		$("#assistance").show();
		$("#btn-assistance").hide();
	});
});