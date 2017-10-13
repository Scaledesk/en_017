$( document ).ready( function()
{
	$( '.buzz' ).each( function()
	{
		$( this ).attr( 'data-buzz' , $( this ).text() );
	} );
    

   
} );


/*$(window).scroll(function() {
		var scrollDistance = $(window).scrollTop();

    console.log(scrollDistance);
		$('.onepage').each(function(i) {
				if ($(this).position().top <= (scrollDistance-200)) {
					alert("six!");
				}
		});
}).scroll();*/



