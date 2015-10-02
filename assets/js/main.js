var app = {
	w: 0,
	h: 0,
	target: null,
	previouse: 0,
	init: function() {
		app.previouse = new Date();
		app.target = $("#background_container img");
		app.resize_event();
		$(document.body).mousemove(app.mouse_move_event);
		$(document.body).bind("touchmove", app.mouse_move_event);
		$(window).resize(app.resize_event);
		console.log("started");
	},
	resize_event: function(event) {
		app.h = $(window).height();
		app.w = $(window).width();
	},
	mouse_move_event: function(event) {
		if (event.type == "touchmove") {
			event.pageY = event.originalEvent.changedTouches[0].clientY || event.originalEvent.changedTouches[0].pageY;
			event.pageX = event.originalEvent.changedTouches[0].clientX || event.originalEvent.changedTouches[0].pageX;
			console.log(event.pageX);
		} else {
			var now = new Date();
			if (now - app.previous < 50) {
				return false;
			}
			app.previous = now;
		}
		var x = event.pageX / app.w,
			y = event.pageY / app.h,
			xl = 0,
			yl = 0;

		app.target.each(function(i, el) {
			i += 1;
			xl = ((x * 100) * ((5 - i) / 4));
			yl = ((y * 100) * ((5 - i) / 4))
			$(el).css({
				"-webkit-transform": "translate(-" + xl + "%,-" + yl + "%) rotate(" + (i * 90) + "deg)",
				"-ms-transform": "translate(-" + xl + "%,-" + yl + "%) rotate(" + (i * 90) + "deg)",
				"transform": "translate(-" + xl + "%,-" + yl + "%) rotate(" + (i * 90) + "deg)"
			});​
			// i += 1
			// el.style.left = ((x / i * 100) - 50) + "%";
			// el.style.top = ((y / i * 100) - 50) + "%";
		})
	},

}