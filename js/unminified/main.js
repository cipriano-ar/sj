$(init);

function init() {

	var nav = responsiveNav('.nav-collapse');
	$(resp_touch_slider);
	$(scrollEffectLink('.scroll', 1600));
	$(navBarOnScroll('.sec-nav-bar', 295, 'slow'));
	
}

function scrollEffectLink(selector, scroll_duration) {
	
	$(selector).click(function(event){

		//'if (true) {};

		// alert($(event.target).css('color'));
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, scroll_duration, 'swing');
	});

}

function navBarOnScroll(nav_bar, scroll_point, slide_duration) {
	$(window).scroll(function(){
		if ( $(this).scrollTop() > scroll_point ) {
			$(nav_bar).slideDown(slide_duration);
		} else {
			$(nav_bar).slideUp(slide_duration);
		}
	});
}