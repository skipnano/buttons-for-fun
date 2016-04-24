// Buttons for Fun
// Coded By: Dean Gilroy
// Version 1.0

console.log("js loaded");

// When user clicks on a button display a popup
// The popup lists the CSS for that button

$( ".btn" ).click(function(event) {
	event.preventDefault();
	console.log("You clicked a button");

	// removes the default hidden class on the popup, so that the popup displays
	$("#popup").removeClass('hidden');
	$("#popup").addClass('show');

		// Printing the CSS in the popup
		var html = [ "The clicked button has the following styles:" ];
	 
	  	var styleProps = $( this ).css(["width", "height", "color", "background-color", "border"]);

	  	$.each( styleProps, function( prop, value ) {
	    	html.push( prop + ": " + value );
	  	});
	 
	  	$( "#result" ).html( html.join( "<br>" ) );
	});
// });

// function that closes the popup on click of 'x'
$( ".fa-times" ).click( function () {
	$("#popup").removeClass('show');
	$("#popup").addClass('hidden');
});
  


/*
  var html = [ "The clicked div has the following styles:" ];
 
  var styleProps = $( this ).css([
    "width", "height", "color", "background-color"
  ]);
  $.each( styleProps, function( prop, value ) {
    html.push( prop + ": " + value );
  });
 
  $( "#result" ).html( html.join( "<br>" ) );
});
*/