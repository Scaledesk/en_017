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

$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
        $('#collapseitem').toggleClass('openitem')
	});
});

    
/*    offcanvas menu*/

    
$('#hamburger-menu-icon-main').click(function(){
//    $('#hamburger-menu-icon-main').toggleClass('active');
    if($('i#hamburger-menu-icon-main').hasClass('active')){

     /*  $('.navigation-mob').addclass('opacity');*/
        
        $('i#hamburger-menu-icon-main').removeClass('active');
          document.getElementById("navigation-mob").style.display = "none";
          $('.navigation-mob-child').animate({right:'-480px'});

    }


    else{
       /*  $('.navigation-mob').addclass('opacity');*/
        
        $('i#hamburger-menu-icon-main').addClass('active');
        
          document.getElementById("navigation-mob").style.display = "block";
        $('.navigation-mob-child').animate({right:'140px'});
              
       /* $('.navigation-mob').addClass('overlay');*/
      /*   document.body.style.backgroundColor = "rgba(0,0,0,0.4)";*/

        return false;
    }
});

$("#navigation-mob, .navigation-mob-child").click(function(){
    
    document.getElementById("navigation-mob").style.display = "none";
    $('.navigation-mob-child').animate({right:'-480px'});
    
    $('i#hamburger-menu-icon-main').removeClass('active');
    
});











