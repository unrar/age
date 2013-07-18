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
	/* Check the input! */
	checkInput();
	var userAge;
	userAge = parseInt(prompt("How old are you?"), 10);
	/* Now we've the age to verify, let's hide the pre-verification things */
	hideClass("prevf");
	if (isNaN(userAge)) {
	    console.log("Not a number!");
	    /* Show error */
	    showClass("error");;
	}
	else if (userAge < 18) {
	    console.log("Sorry, this is a porn site and you can't access it!");
	    /* Show badvf */
	    showClass("badvf");
	}
	else if (userAge == 18) {
	    console.log("HA! You're trying to make me blieve you're 18?");
	    /* Show badvf */
	    showClass("headerBadvf");
		showClass("badvf");
	}
	else if (userAge > 18 && userAge < 99) {
	    console.log("Go ahead, see the porn...");
	    /* Show greatvf */
	    showClass("greatvf");
	}
	else if (userAge >= 100) {
	    console.log("Ugh, I think your penis can't handle porn anymore...");
	    /* Show badvf */
		showClass("badvf");
	}
	else {
	    console.log("If you're seeing this, you're crazy.");
	    /* Error */
	    showClass("error");
	}
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