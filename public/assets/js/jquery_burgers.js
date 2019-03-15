$(document).ready( ()=> {
    $(".create-burger-form").on("submit", () => {
        event.preventDefault(); // turn off default submit button behavior
        if ( ($("#burger_name").val().trim()).length > 0) {
            let newBurger = {
                burger_name: $("#burger_name").val().trim()
            }
            // use AJAX to send Post Request using form data
            $.ajax("/api/newburger", {
                type: "POST",
                data: newBurger
              }).then(
                function() {
                  console.log("Created a new burger and with default true");
                  // Reload the page to get the updated list
                  location.reload();
                }
              );

        } else {
            alert("Create Alert Modal for invalid form submission!");
        }
    })
} )