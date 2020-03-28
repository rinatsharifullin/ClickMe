$(document).ready(function(){
	var clickTotal=0;													/* Declare total mouse over to display alert on 10th try */
	$('div').mouseover(function(){										/* Function to detect coming mouse */
		var heightDiv = $(this).height(); 								/* Button heigth */
		var widthDiv = $(this).width();									/* Button width */
		var myHeight = $(document).height() - heightDiv - 20;			/* Working aria without button size and padding 10px*/
		var myWidth = $(document).width() - widthDiv -20;				/* Working aria without button size and padding 10px */
		var y=Math.random() *myHeight;									/* Random position in working aria */
		var x=Math.random() *myWidth;									/* Random position in working aria */
		$(this).css('transform','translate(' + x  + 'px,' + y + 'px)');	/* Move botton to new position */
		$('div').css('background-color', "goldenrod");					/* Restore button color */
		clickTotal++;													/* Count total mouse over button */
		if (clickTotal==10 & score==0){									/* If try 10 times and no luck, display tip */
			alert('Try to make window smaller to succeed');
		}
	});
	
	var score=0; 														/* Declare global variable for scoring */
	$('div').click(function(){											/* Function to detect clicks on button */
		score++;														/* If clicked increase score */
		$('span').html(score);											/* Display score */
		$('div').css('background-color', "red");						/* Change button color to make more fun */
	});
});

