$(document).ready(function() {

	$('#goose-contact-form .goose-cf-result').css('display','none');
	$('#goose-contact-form').submit(function() {
		$('#goose-contact-form').animate({'opacity':0.4},200);
		$.post($(this).attr('action'), $(this).serialize(), function(data) {
			$('#goose-contact-form .goose-cf-result').css('display','none');
			var temp=data.split('|');
			//alert(':'+temp[0]+':');
			if(temp[0]=='ERROR') {
				$('#goose-contact-form .goose-cf-result').removeClass('goose-cf-ok').addClass('goose-cf-error');
			} else {
				$('#goose-contact-form .goose-cf-result').addClass('goose-cf-ok').removeClass('goose-cf-error');			
				$('#goose-contact-form input[type=text]').val('');
				$('#goose-contact-form textarea').val('');
			}
			$('#goose-contact-form').animate({'opacity':1},200);	
			$('.goose-cf-result').html(temp[1]).css('display','inline-block');				
		});
		
		return false;
	});

});