
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

 document.querySelector("form").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);
    const response = await fetch(this.action, {
        method: "POST",
        body: formData,
    });

    const result = await response.text();
    const messageDiv = document.getElementById("form-message");

    if (result === "success") {
        messageDiv.style.display = "block";
        messageDiv.className = "success";
        messageDiv.textContent = "Thank you! Your message has been sent.";
        this.reset();
    } else {
        messageDiv.style.display = "block";
        messageDiv.className = "error";
        messageDiv.textContent = "Oops! Something went wrong. Please try again.";
    }
});
