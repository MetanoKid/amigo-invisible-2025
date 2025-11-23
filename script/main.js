$(document).ready(function() {
	// wait a bit to show gift
	setTimeout(function() {
		// wait a bit to switch gift to pulse animation
		let pulse =	setTimeout(function() {
			$("#gift").removeClass().addClass("animated pulse infinite slow");
		}, 2000);

		// when gift is clicked
		$("#gift").on("click", function(e) {
			clearTimeout(pulse);

			$("#gift").off("click");

			// switch titles
			$("#discover-who").addClass("zoomOut");
			setTimeout(function() {
				$("#gift-who").show();

				// wait a bit so user can read title
				setTimeout(function() {
					$("#gift").removeClass().addClass("animated wobble");

					// switch gift with name
					setTimeout(function() {
						$("#gift").addClass("zoomOut");
						$("#friend").show();

						setTimeout(() => {
							$("#friend-alias").show();
						}, 1000);

						setTimeout(() => {
							$("#amount").removeClass().addClass("animated fadeInUpBig").show();
							$("#amount .amount-number").addClass("animated heartBeat infinite slow");
						}, 2000);
					}, 1000);
				}, 1000);
			}, 500);
		}).show();
	}, 1000);
});
