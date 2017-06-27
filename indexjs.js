function main () {
	$(".title").hide();
	$(".items").hide();
	$(".title").fadeIn(1000);
  
$(".button").on("click",function(){
	$(".items").animate({width: 'toggle'});
});
}

$(document).ready(main);