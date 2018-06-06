$(function(){
	$('.change-drank').on('click', function(event){
		var id = $(this).data("id")

		var newDrank = $(this).data("newdrank");
		
		var newDrankState = {
			drank: newDrank
		};

		console.log(newDrankState)
		$.ajax('/api/milkshakes/' + id, {
			type: "PUT",
			drank: newDrankState
		}).then(
			function() {
				console.log("changed drank state to", newDrank)

				location.reload();
			}
		)

	})

	$(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newMilkshake = {
      name: $("#ca").val().trim(),
      drank: 0
    };

    // Send the POST request.
    $.ajax("/api/milkshakes", {
      type: "POST",
      data: newMilkshake
    }).then(
      function() {
        console.log("created new milkshake");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

})