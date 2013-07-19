/* Javascript for AGE
   Now with added jQuery! */

// Function to hide all the elements of a given class [jQuery]
function hideClass(theClass) {
	$("." + theClass).css("display", "none");
}

// Function to show all the elements of a given class [jQuery]
function showClass(theClass) {
	$("." + theClass).css("display", "block");
}

// Function that checks if the inputbox is void each 100ms [jQuery]
function checkInput() {
	var $input = $('#gunBrand');
	var $button = $('#submitButton');

	setInterval(function(){
	    if($input.val().length > 0){
	        $button.attr('disabled', false);
	    }else{
	        $button.attr('disabled', true);
	    }
	}, 100);
}

// Function that checks the age and, depending of it, shows or hides some classes
function checkAge() {
	var userAge;
	/* [v2.0] Read the cookie (try) [jQuery] */
	var cookieAge = $.cookie("AGE_age");
	/* [v2.0] Check it there's a value in the cookie. If there's set userAge to it. Else, ask for the age [jQuery] */
	if (cookieAge) {
		$("#freeow").freeow("Cookie detected", "You already told us that you're " + cookieAge + " in a previous visit.", {
	    autoHideDelay: 3000,
	    autoHide: true,
	    classes: ["osx"]
		});
		userAge = cookieAge;
	}
	else {
		userAge = parseInt(prompt("How old are you?"), 10);
	}
	/* Now we've the age to verify, let's hide the pre-verification things */
	hideClass("prevf");
	if (isNaN(userAge)) {
	    /* Show error */
	    showClass("error");
	}
	else if (userAge < 18) {
	    /* Show badvf */
	    showClass("badvf");
	}
	else if (userAge == 18) {
	    /* Show badvf */
	    showClass("headerBadvf");
		showClass("badvf");
	}
	else if (userAge > 18 && userAge < 99) {
		/* Start the timer for checkInput */
		checkInput();
	    /* Show greatvf */
	    showClass("greatvf");
	}
	else if (userAge >= 100) {
	    /* Show badvf */
		showClass("badvf");
	}
	else {
	    /* Error */
	    showClass("error");
	}
	/* [v2.0] Put the age in a cookie, even if it's NaN [jQuery] */
	$.cookie("AGE_age", userAge, {path: '/'});
}

// Function that processes your order [jQuery]
function gimmeTheGun() {
	var $theBrand = $("#gunBrand").val();
	$("#freeow").freeow("Your order is being processed", "Your order of a " + $theBrand + " gun is being processed.", {
	    autoHideDelay: 3000,
	    autoHide: true,
	    classes: ["osx"]
	});
	setTimeout(function() { gunProcessed($theBrand); }, 5000);
}

// Function (to be delayed) that tells you how has your request been processed
function gunProcessed(theOrder) {
	// Hide everything
	hideClass("greatvf");
	
	// Replace the #gunReplace span with the brand
	$("#gunReplace").text(theOrder);

	// Show the .order things
	showClass("order");
}