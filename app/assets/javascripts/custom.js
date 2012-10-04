$(document).ready(function(){
	$("#transfer-table").hide();
	$("#assistance").hide();
	$("#calculator-form").hide();

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

	$("#btn-calculator").click(function(event){
		$("#calculator-form").show();
	});

	function checkNumericValue(o, n, min) {
		if (o.val().trim() == "") {
			displayStatus("Enter something for " + n + ".");			
			return false;
		} else {
			if (isNaN(o.val())) {
				displayStatus("Enter a number for " + n + ".");
				return false;
			} else {
				if (o.val() < min) {
					displayStatus("Value of " + n + " must be at least " + min + ".");
					return false;
				} else {
					return true;
				}
			}
		}
	}

	function displayStatus(msg) {
		$("#calculator-status").text(msg);
		setTimeout(function() {
				$("#calculator-status").text("");
			}, 2000 );
	}

	$("#btn-calculator-result").click(function(event){
		// Retrieve field contents
		var bValid = true;

		var fee = $("#calculator-fee"),
		    loanBalance = $("#calculator-loan-balance"),
		    payment = $("#calculator-payment"),
		    interestFreePeriod = $("#calculator-interest-free-period"),
		    apr = $("#calculator-apr"),
		    allFields = $([]).add(fee).add(loanBalance).add(payment).add(interestFreePeriod).add(apr);

/*
    Validate the fields are correctly filled.
*/
		bValid = bValid && checkNumericValue(fee, "Upfront Fee", 0);
		bValid = bValid && checkNumericValue(loanBalance, "Loan Balance", 1);
		bValid = bValid && checkNumericValue(payment, "Monthly Payment", 1);
		bValid = bValid && checkNumericValue(interestFreePeriod, "Interest Free Period", 0);
		bValid = bValid && checkNumericValue(apr, "APR", 0);

		if (payment.val() <= loanBalance.val()) {
			bValid = false;
			displayStatus("Loan Balance must be greater than Monthly Payment.");
		}

		/* By here we've validated the basic data is good for calculating */
		if (bValid) {
			var totalPayments = Math.round(parseInt(loanBalance.val(), 10) / parseInt(payment.val(), 10));
			var remainingFreeInterestPeriods = parseInt(interestFreePeriod.val(), 10);
			var remainingLoan = parseInt(loanBalance.val(), 10);
			var totalCostOfLoan = 0;
			var aprRate = parseInt(apr.val(), 10) / 100;

			for (var curPayment = 0; curPayment < totalPayments; curPayment++) {
				if (remainingFreeInterestPeriods > 0) {
					remainingFreeInterestPeriods -= 1;
				} else {
					totalCostOfLoan += (remainingLoan * aprRate) / 12;
				}

				// alert("Interest frees left " + remainingFreeInterestPeriods + " " + totalCostOfLoan);
				remainingLoan -= parseInt(payment.val(), 10);
			}

			// Convert to a currency display
			totalCostOfLoan = parseInt(totalCostOfLoan, 10) + parseInt(fee.val(), 10);
			totalCostOfLoan = (Math.round(totalCostOfLoan * 10) / 10);

			alert("Raw cost of the loan $" + totalCostOfLoan + " via " + totalPayments + " payments.");
		}
	});

	$("#btn-calculator-close").click(function(event){
		$("#calculator-form").hide();
	});
});