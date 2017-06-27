function main () {
	$(".title").hide();
	$(".button").hide();
	$(".items").hide();
	$(".title").fadeIn(1000);
	$(".button").fadeIn(1000);
  
$(".button").on("click",function(){
	$(".items").animate({width: 'toggle'});
});
}

$(document).ready(main);