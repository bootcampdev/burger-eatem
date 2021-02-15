// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  // $(".change-sleep").on("click", function (event) {
  //   var id = $(this).data("id");

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
        console.log("new burger added", newBurger);

        // Reload the page to get the updated list
        location.reload();
      }
    );
  });





  $(".burger-ready").on("click", function (event) {
    var id = $(this).data("id");
    var hasEaten = $(this).data("devoured");

    console.log(hasEaten);

    console.log("put id ", id)

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
          console.log("burger updated", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
  });


})



//   $(".create-form").on("submit", function (event) {
//     // Make sure to preventDefault on a submit event.
//     event.preventDefault();

//     var newCat = {
//       name: $("#ca").val().trim(),
//       sleepy: $("[name=sleepy]:checked").val().trim()
//     };

//     // Send the POST request.
//     $.ajax("/api/cats", {
//       type: "POST",
//       data: newCat
//     }).then(
//       function () {
//         console.log("created new cat");
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });

//   $(".delete-cat").on("click", function (event) {
//     var id = $(this).data("id");

//     // Send the DELETE request.
//     $.ajax("/api/cats/" + id, {
//       type: "DELETE"
//     }).then(
//       function () {
//         console.log("deleted cat", id);
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });
// });


