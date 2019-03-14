$(document).ready( ()=> {
    $(".create-burger-form").on("submit", () => {
        event.preventDefault(); // turn off default submit button behavior
        if ( ($("#burger_name").val().trim()).length > 0) {
            let newBurger = {
                burger_name: $("#burger_name").val().trim()
            }
        } else {
            alert("Create Alert Modal for invalid form submission!");
        }
    })
} )