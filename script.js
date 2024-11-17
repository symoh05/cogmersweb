
 // Select the hamburger menu and off-screen menu
 const hamMenu = document.querySelector('.ham-menu');
 const offScreenMenu = document.querySelector('.off-screen-menu');

 // Toggle the menu when clicking on the hamburger menu
 hamMenu.addEventListener('click', (event) => {
     event.stopPropagation(); // Prevent the event from bubbling up
     hamMenu.classList.toggle('active');
     offScreenMenu.classList.toggle('active');
 });

 // Close the menu if you click outside the menu
 document.addEventListener('click', (event) => {
     if (!hamMenu.contains(event.target) && !offScreenMenu.contains(event.target)) {
         hamMenu.classList.remove('active');
         offScreenMenu.classList.remove('active');
     }
 });


 // Select the hamburger menu and off-screen menu
 const hamMenu = document.querySelector('.ham-menu');
 const offScreenMenu = document.querySelector('.off-screen-menu');

 // Toggle the menu when clicking on the hamburger menu
 hamMenu.addEventListener('click', (event) => {
     event.stopPropagation(); // Prevent the event from bubbling up
     hamMenu.classList.toggle('active');
     offScreenMenu.classList.toggle('active');
 });

 // Close the menu if you click outside the menu
 document.addEventListener('click', (event) => {
     if (!hamMenu.contains(event.target) && !offScreenMenu.contains(event.target)) {
         hamMenu.classList.remove('active');
         offScreenMenu.classList.remove('active');
     }
 });

 document.querySelector("#contact-form").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this); // Get the form data
    const response = await fetch(this.action, {
        method: "POST",
        body: formData,
    });

    const result = await response.text(); // Get the response text from PHP
    const messageDiv = document.getElementById("form-message");

    // Display the message based on the result
    if (result === "success") {
        messageDiv.style.display = "block";  // Show success message
        messageDiv.className = "success";
        messageDiv.textContent = "Thank you! Your message has been sent.";

        // Hide the form after successful submission
        this.style.display = "none";  // Hide the form

        // Reset the form fields only after a successful submission
        this.reset();
    } else {
        messageDiv.style.display = "block";  // Show error message
        messageDiv.className = "error";
        messageDiv.textContent = "Oops! Something went wrong. Please try again.";

        // Ensure the form remains visible if there is an error
        this.style.display = "block";
    }

    // Hide the message after 5 seconds
    setTimeout(() => {
        messageDiv.style.display = "none";  // Hide the message
    }, 5000); // 5000ms = 5 seconds

    // Reset form visibility after 5 seconds in case of success/error
    setTimeout(() => {
        if (result !== "success") {
            this.style.display = "block";  // Show form again if there was an error
        }
    }, 5000); // 5000ms = 5 seconds
});

// Hide the message and reset the form when any input field changes
document.querySelectorAll("#contact-form input, #contact-form textarea").forEach(field => {
    field.addEventListener("input", function () {
        const messageDiv = document.getElementById("form-message");
        messageDiv.style.display = "none"; // Hide the message

        // Show the form again if user starts editing (without resetting)
        const form = document.querySelector("#contact-form");
        form.style.display = "block"; // Show the form again
    });
});


        messageDiv.textContent = "Oops! Something went wrong. Please try again.";
    }
});
