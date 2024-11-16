
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