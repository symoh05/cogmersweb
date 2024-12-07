
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
// slider images
let currentIndex = 0;

function showNextSlide() {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  currentIndex = (currentIndex + 1) % slides.length;
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Auto-slide every 3 seconds
setInterval(showNextSlide, 3000);

let currentDate = new Date(); // Track the currently displayed date

// Biblical Feasts and New Moon data
const feastsData = {
  1: ["Jan 25 - New Moon Observance"],
  3: ["Mar 24 - New Moon Observance"],
  4: [
    "Apr 22 - Passover (Pesach)",
    "Apr 23 - Feast of Unleavened Bread",
    "Apr 01 - New Moon Observance"
  ],
  5: [
    "May 19 - Feast of Firstfruits",
    "May 26 - Feast of Weeks (Shavuot)",
    "May 01 - New Moon Observance"
  ],
  6: ["Jun 01 - New Moon Observance"],
  7: ["Jul 01 - New Moon Observance"],
  9: [
    "Sep 15 - Feast of Trumpets (Yom Teruah)",
    "Sep 24 - Day of Atonement (Yom Kippur)",
    "Sep 29 - Feast of Tabernacles (Sukkot)",
    "Sep 01 - New Moon Observance"
  ],
  10: [
    "Oct 01 - New Moon Observance",
    "Oct 6 - Feast of Tabernacles Continues"
  ],
  12: ["Dec 01 - New Moon Observance"]
};

// Function to dynamically render calendar
function updateCalendar() {
  const currentMonth = currentDate.getMonth() + 1; // Adjusted for zero-indexed JS months
  const currentYear = currentDate.getFullYear();

  // Update header with current month name
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  document.getElementById("month-name").innerText = `${monthNames[currentMonth - 1]} ${currentYear}`;

  const calendarTable = document.getElementById("calendar-table");
  calendarTable.innerHTML = "";

  const dayNames = ["S", "M", "T", "W", "T", "F", "S"];
  const headerRow = document.createElement("tr");
  dayNames.forEach(day => {
    const th = document.createElement("th");
    th.innerText = day;
    headerRow.appendChild(th);
  });
  calendarTable.appendChild(headerRow);

  const firstDay = new Date(currentYear, currentMonth - 1, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();
  let row = document.createElement("tr");

  for (let i = 0; i < firstDay; i++) {
    row.appendChild(document.createElement("td"));
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const cell = document.createElement("td");
    cell.innerText = day;
    row.appendChild(cell);

    if ((day + firstDay) % 7 === 0) {
      calendarTable.appendChild(row);
      row = document.createElement("tr");
    }
  }

  if (row.children.length > 0) {
    calendarTable.appendChild(row);
  }

  // Populate the feast section with New Moon data if available
  const feastList = document.getElementById("feast-list");
  feastList.innerHTML = "";
  (feastsData[currentMonth] || []).forEach(feast => {
    const li = document.createElement("li");
    li.innerText = feast;
    feastList.appendChild(li);
  });
}

// Navigation buttons to switch months
document.getElementById("prev-month").addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1); // Go to the previous month
  updateCalendar();
});

document.getElementById("next-month").addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1); // Go to the next month
  updateCalendar();
});

// Automatically refresh calendar on page load
document.addEventListener("DOMContentLoaded", () => {
  updateCalendar();
  setInterval(() => {
    document.getElementById("time").innerText = new Date().toLocaleTimeString();
  }, 1000);
});
