$(document).ready(function(){
	$("#head").click(function(){
		 $(".lowerpart").slideToggle("slow");
		 $(".lowerpart1").hide("slow");
		 $(".lowerpart2").hide("slow");
		
	});
	$("#head1").click(function(){
		 $(".lowerpart1").slideToggle("slow");
		 $(".lowerpart").hide("slow");
		 $(".lowerpart2").hide("slow");
		
	});
	$("#head2").click(function(){
		 $(".lowerpart2").slideToggle("slow");
		 $(".lowerpart").hide("slow");
		 $(".lowerpart1").hide("slow");
		
	});
	$("#head").hover(function(){
		$("#head").toggleClass("hcolor");
	})
	
})