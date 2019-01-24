'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected? \n Yes it is");
		$('.jumbotron p').toggleClass("active");
		$("#testjs").text("Please wait ...");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);

	$("a.thumbnail").click(projectClick);
}

function projectClick(e) {
	//prevent this page from loading
	e.preventDefault();

	$(this).css("background-color", "#7fff00");

	var containingProject = $(this).closest(".project");
	var description = $(containingProject).find(".project-description");
	
	if (description.length == 0) {
		$(containingProject).append("<div class='project-description'><p>Description of the Project.</p></div>");
	} else {
		description.fadeToggle();
	}


}

