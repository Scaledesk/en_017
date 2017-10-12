$( document ).ready( function()
{
	$( '.buzz' ).each( function()
	{
		$( this ).attr( 'data-buzz' , $( this ).text() );
	} );
    
    
    /*   if($('#oneblock').hasClass('opr-current')){ 
           alert("one!");
       }
    
      if($('#twoblock[data-target="1"]').hasClass('opr-current')){ 
           alert("two!");
       }
    
    
      if($('#threeblock[data-target="2"]').hasClass('opr-current')){ 
           alert("three!");
       }
    
      if($('#fourblock[data-target="3"]').hasClass('opr-current')){ 
           alert("four!");
       }
    
      if($('#fiveblock[data-target="4"]').hasClass('opr-current')){ 
           alert("five!");
       }
    
      if($('#oneblock[data-target="5"]').hasClass('opr-current')){ 
           alert("six!");
       }*/
   
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



