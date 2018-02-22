(function () {
	"use strict";

	// Toggle Sidebar
	$('[data-toggle="sidebar"]').click(function(event) {
		event.preventDefault();
		$('.badge').toggle();		
		$('.app').toggleClass('sidenav-toggled');
	});



	//Activate bootstrip tooltips
	$("[data-toggle='tooltip']").tooltip();

})();
