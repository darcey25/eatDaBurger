$(function() {
	$(".eat-burger").on("click", function(event) {
		var id = $(this).data("id");
		var eatStatus = $(this).data("hungry");
		console.log($(this).data("hungry"));
		console.log(eatStatus);
		console.log(id);

		var newEatState = {
			eaten: eatStatus
		};
		console.log(newEatState);

		$.ajax("/api/burger/" + id, {
			type: "PUT",
			data: newEatState
		}).then(function() {
			console.log("changed eat to", eatStatus);

			location.reload();
			}
		);
	});
	$(".create-form").on("submit", function(event){
		event.preventDefault();

		var newBurger = {
			name: $("#bu").val().trim(),
			eaten: false
		};
		console.log(newBurger);

		$.ajax("/api/burger", {
			type: "POST",
			data: newBurger
		}).then(function() {
			console.log("created new burger");

			location.reload();
		});
	});

});
