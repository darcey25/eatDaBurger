$(function() {
	$('[data-toggle="tooltip"]').tooltip();
	$(".visited").on("click", function(event) {
		var id = $(this).data("id");
		var visitStatus = $(this).data("visited");
		console.log($(this).data("visited"));
		console.log(visitStatus);
		console.log(id);

		var newVisitState = {
			visited: visitStatus
		};
		console.log(newVisitState);

		$.ajax("/api/restaurant/" + id, {
			type: "PUT",
			data: newVisitState
		}).then(function() {
			console.log("changed visit to", visitStatus);

			location.reload();
			}
		);
	});
	$(".create-form").on("submit", function(event){
		event.preventDefault();

		var newRestaurant = {
			name: $("#bu").val().trim(),
			visited: false
		};
		console.log(newRestaurant);

		$.ajax("/api/restaurant", {
			type: "POST",
			data: newRestaurant
		}).then(function() {
			console.log("created new restaurant");

			location.reload();
		});
	});

	$(".remove").on("click", function(event) {
		var id = $(this).data("id");
		console.log("delete id " + id);
		var deleteID = {
			delId: id
		};
		console.log(deleteID);

		$.ajax("/api/restaurant/" + id, {
			type: "DELETE"
		}).then(function() {
			console.log("deleted id ", id);
			location.reload();
		});
	});


});
