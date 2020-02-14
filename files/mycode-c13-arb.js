$(window).ready(function() {
	var wi = $(window).width();
	if (wi <= 1024) {
		$('#bannerslider').css({'height':'550px'})
		$('#contenthome').css({'margin-top':'-200px'});
		$('.carousel-indicators').css({'top':'66%'});
	}
})

$(document).ready(function($){
	
	// Scroll Top
	if ($('.anchor-table').length > 0){
    $("#back-top").hide();
    $(function () {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {
          $('#back-top').fadeIn();
        } else {
          $('#back-top').fadeOut();
        }
        var scroll_anchor = $(".anchor-table").offset().top;
        if($(this).scrollTop() >= scroll_anchor && $('.scroll-table').css('position') != 'fixed')
        {
          $('.anchor-table').css('height', '90px');
          $('.scroll-table').css({
            'position':'fixed',
            'top' : '0px',
            'transition': '0.2s top ease-in'
          });
        }
        else if($(this).scrollTop() < scroll_anchor && $('.scroll-table').css('position') != 'relative')
        {
          $('.anchor-table').css('height', '0px');
          $('.scroll-table').css({
            'background':'#fff',
            'position':'relative'
          });
        }
      });

      $('#back-top a').click(function () {
        $('body,html').animate({
          scrollTop: 0
        }, 800);
        return false;
      });
    });
	}
	//End Scroll
	
	// Form Child Enquiry
	var counter = 2;
	
	$("#addButton").click(function () {
		
 		$('#id_form-TOTAL_FORMS').val(counter);
 		
		if(counter>5){
	            alert("Only 5 row child allow");
	            return false;
		}   
		
		var newTextBoxDiv = $(document.createElement('div'))
		     .attr("id", 'StudentChild' + counter);

		newTextBoxDiv.after().html(	
			'<div class="row formtop">' +
				'<label class="col-xs-3 control-label" for="student_name1">Student / Name</label>' +
				'<div class="col-xs-9">' +
					'<input type="text" name="form-'+ (counter-1) +'-student_name1" id="form-'+ (counter-1) +'-student_name1" class="form-control" />' +	
				'</div></div>' +
	
			'<div class="col-xs-9 formchild">' + 
				'<label class="col-xs-4 control-label" for="dob1">DoB</label>' +
				'<div class="col-xs-8 inputchild">' +
					'<input type="text" name="form-'+ (counter-1) +'-dob1" id="form-'+ (counter-1) +'-dob1" class="form-control" />' +	
				'</div></div>' +
		
			'<div class="col-xs-9 formchild">' +
				'<label class="col-xs-4 control-label" for="language1">Language Spoken</label>' +
				'<div class="col-xs-8 inputchild">' +
					'<input type="text" name="form-'+ (counter-1) +'-language1" id="form-'+ (counter-1) +'-language1" class="form-control" />' +
				'</div></div>' +
	
			'<div class="col-xs-9 formchild">' +
				'<label class="col-xs-4 control-label" for="curriculum1">Curriculum used at Current School</label>' +
				'<div class="col-xs-8 inputchild">' +
					'<input type="text" name="form-'+ (counter-1) +'-curriculum1" id="form-'+ (counter-1) +'-curriculum1" class="form-control" />' +
				'</div></div>' +	
			
			'<div class="col-xs-9 formchild">' +
				'<label class="col-xs-4 control-label" for="support1">Need Learning Support?</label>' +
				'<div class="col-xs-8">' +
					'<label class="checkbox-inline"><input type="radio" id="id_form-'+ (counter-1) +'-learning_support_0" name="id_form-'+ (counter-1) +'-learning_support" value="yes"> Yes</label>' +
					'<label class="checkbox-inline"><input type="radio" id="id_form-'+ (counter-1) +'-learning_support_1" name="id_form-'+ (counter-1) +'-learning_support" value="no"> No</label>' +									
				'</div></div>' +
			
			'<div class="col-xs-9 formchild">' +
				'<label class="col-xs-4 control-label" for="gift_program1">Has your child joined a gifted program?</label>' + 
				'<div class="col-xs-8">' +
					'<label class="checkbox-inline"><input type="radio" id="id_form-'+ (counter-1) +'-gifted_program_0" name="id_form-'+ (counter-1) +'-gifted_program" value="yes"> Yes</label>' +
					'<label class="checkbox-inline"><input type="radio" id="id_form-'+ (counter-1) +'-gifted_program_1" name="id_form-'+ (counter-1) +'-gifted_program" value="no"> No</label>' +								
				'</div></div>'			
		);
		newTextBoxDiv.appendTo("#StudentGroup");
		counter++;
	});
	
    $("#removeButton").click(function () {
		if(counter==1){
	          alert("No more child row to remove");
	          return false;
	       }   
		counter--;
	        $("#StudentChild" + counter).remove();
    });	
    // End Form Child Enquiry
     	
	$('#tabshome a:first').tab('show');	//Tabs home
	$(".alert").alert();
	
	var menu = new cbpHorizontalSlideOutMenu( document.getElementById( 'cbp-hsmenu-wrapper' )); //Mainmenu
	
	$('ul li ul').find('li a').click(function(){
	     var $this = $(this);
	     $(this).closest('ul li').removeClass('active');
	     $(this).closest('li').closest('ul').closest('li').addClass('active');
	});	
	
	$('.carousel').carousel({
  		interval: 2500
	})
$('.wm_founder, .txtcolumn, .wm_principal_hor, .contentabout3 > .inner, .codeofconduct ul li:first-child, .campuses_staff, .campuses ul li.ctnmulticolumn').columnize({
	columns:3
});
$('.wm_principal_ver, .contentabout4 > .inner, .campuses > ul > li.ctncolumn > div').columnize({
	columns:2
});			
});

$('#bannerpageslider > .carousel-inner > div, #bannerpageleftslider > .carousel-inner > div').first().addClass('active');	

function imgError(image, thumbs) {
    image.onerror = "";
    if(thumbs == "thumbsHorList") {
    	image.src = "http://placehold.it/195x240/cccccc/&text=Image+Not+Found";
    } 
    if(thumbs == "thumbsHorDetail") {
    	image.src = "http://placehold.it/365x240/cccccc/&text=Image+Not+Found";
    }                   
    return true;
}	