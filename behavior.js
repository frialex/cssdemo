$(function(){
	$('ul').hover(mouseIn, mouseOut);


});


var mouseIn = function mouseInFn(){
	console.log('UL mouse in');
}

var mouseOut = function mouseOutFn(){
	console.log('UL mouse out');
}

