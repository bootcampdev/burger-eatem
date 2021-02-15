// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {

  $("form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const newBurger = $("#new-burger").val();
    console.log("new burger", newBurger);

    // Send the POST request.
    $.ajax("/", {
      type: "POST",
      data: { burger_name: newBurger }
    }).then(
      function () {
        //console.log("new burger added", newBurger);

        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


  $(".burger-click").on("click", function (event) {
    var id = $(this).data("id");
    var hasEaten = $(this).data("devoured");

    //
    // set the devoure flag to the opposite value

    var burgerEaten = {
      ate: !hasEaten
    };

    // Send the PUT request.

    $.ajax("/" + id,
      {
        type: "PUT",
        data: burgerEaten
      }).then(
        function () {
          //console.log("burger updated", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
  });


})