$("#js--get-started-btn").click(function() {
	$("html, body").animate({ scrollTop: $("#get-started").offset().top }, 1000);
});

$("#js--arrow-down").click(function() {
	$("html, body").animate({ scrollTop: $("#about").offset().top }, 1000);
});

$("#js--about").click(function() {
	$("html, body").animate({ scrollTop: $("#about").offset().top }, 1000);
});

$("#js--steps").click(function() {
	$("html, body").animate({ scrollTop: $("#steps").offset().top }, 1000);
});

$("#js--reasons").click(function() {
	$("html, body").animate({ scrollTop: $("#reasons").offset().top }, 1000);
});

$("#about").waypoint(
	function(direction) {
		if (direction == "down") {
			$("nav").addClass("sticky");
		} else {
			$("nav").removeClass("sticky");
		}
	},
	{
		offset: "60px;"
	}
);

$("#js--nav-opener").click(function() {
	$(".nav__items").toggleClass("show");
});
