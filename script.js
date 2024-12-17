$(document).ready(function () {
    $("#registrationForm").on("submit", function (event) {
        event.preventDefault(); // Prevent default form submission
        
        $.ajax({
            url: "submit.php",
            type: "POST",
            data: $(this).serialize(),
            success: function (response) {
                $("#result").html(response); // Display the response from PHP
            },
            error: function () {
                $("#result").html("<p style='color:red;'>An error occurred. Please try again.</p>");
            }
        });
    });
});
