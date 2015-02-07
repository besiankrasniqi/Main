
$(document).ready(function() {
	window.onload = dispResults;
	$("#set_price_button").click(showSetPricePanel);
	
});

function dispResults (event) {
	var display_results_ = $('#display_results').height();
	
	if (display_results_ > 70) {
		$('#display_results').css("background-color", "#c3c1c1");
	}
	
	else {
		$('#display_results').css("background-color", "#dfdfdf");
	}
};

function showSetPricePanel (event) {
	$("#setpricing_interface").animate({height: "250px"}, "swing");
	$("#setpricing_interface").show();
};



