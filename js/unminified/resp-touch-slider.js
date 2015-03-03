var counter = setLoop = setTime = 0;

function resp_touch_slider() {
	
	$items = $('.diy-slideshow figure');
	showCurrent($items, 'show');
	var setLoop = setInterval('loop($items)',5000);
	 
	$('.next').on('click', function(){
		clearInterval(setLoop);
		clearTimeout(setTime);
		counter++;
		showCurrent($items, 'show');
		setTime = setTimeout(function() {
			setLoop = setInterval('loop($items)',5000);
		},5000);
	});
	 
	$('.prev').on('click', function(){
		clearInterval(setLoop);
		clearTimeout(setTime);
		counter--;
		showCurrent($items, 'show');
		setTime = setTimeout(function() {
			setLoop = setInterval('loop($items)',5000);
		},5000);
	});

	if('ontouchstart' in window){
		$('.diy-slideshow').swipe({
			swipeLeft:function() {
				clearInterval(setLoop);
				clearTimeout(setTime);
				counter++;
				showCurrent($items, 'show');
				setTime = setTimeout(function() {
					setLoop = setInterval('loop($items)',5000);
				},5000);
			},
			swipeRight:function() {
				clearInterval(setLoop);
				clearTimeout(setTime);
				counter--;
				showCurrent($items, 'show');
				setTime = setTimeout(function() {
					setLoop = setInterval('loop($items)',5000);
				},5000);
			}
		});
	}

}

function showCurrent(items, show_class) {
	var num_items = $items.length;
	var item_to_show = Math.abs(counter%num_items);
	$items.removeClass(show_class);
	$items.eq(item_to_show).addClass(show_class);
}

function loop(items) {
	counter++;
	showCurrent($items, 'show');
}