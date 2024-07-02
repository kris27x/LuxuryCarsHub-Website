// We want to see some non-trivial Javascript code
//Display questions (Main Page)
window.addEventListener('scroll', () => { 
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})

const Questions = document.querySelectorAll('.question');

Questions.forEach(question => {
    question.addEventListener('click', () =>{
        question.classList.toggle('open');

        const icon = question.querySelector('.question_icon i');
        if(icon.className === 'uil uil-plus') {
            icon.className = "uil uil-minus"
        } else {
            icon.className = "uil uil-plus"
        }
    })
})

//Display menu
//Select the .nav_menu element which is the menu to be displayed.
const menu = document.querySelector(".nav_menu");
//Select the #menu-button element which is the button to display the menu.
const menuButton = document.querySelector("#menu-button");
//Select the #close-button which is the button to close the menu.
const menuClose = document.querySelector("#close-button");
//Adds an event listener to the menuButton element to listen for a click event.
menuButton.addEventListener('click', () => {
    menu.style.display = "flex";
    menuClose.style.display = "inline-block";
    menuButton.style.display = "none"
})

//Remove menu
//Select the closeNav function that hides the menu element.
const closeNav = () => {
    menu.style.display = "none";
    menuClose.style.display = "none";
    menuButton.style.display = "inline-block"
}
//Adds an event listener to the menuClose element to listen for a click event.
menuClose.addEventListener('click', closeNav)



// Select the search input element
const searchCars = document.querySelector(".search_cars input");

// Check if the search input element exists
if (searchCars) {
    // Select all the elements with class "luxurycars"
    const luxuryCars = document.querySelectorAll(".luxurycars");
    // Create a new div element to show a toast message
    const toast = document.createElement("div");
    // Add the class "toast" to the newly created div element
    toast.classList.add("toast");
    // Set the text content of the toast element
    toast.textContent = "No matching results found";
    // Set the display property of the toast element to "none"
    toast.style.display = "none";
    // Append the toast element to the body of the HTML document
    document.body.appendChild(toast);

    // Add an event listener to the search input element for the "input" event
    searchCars.addEventListener("input", function() {
        // Get the value of the search input and convert it to uppercase
        const filter = this.value.toUpperCase();
        // Initialize a variable "foundMatch" to false
        let foundMatch = false;
        // Loop through all the elements with class "luxurycars"
        luxuryCars.forEach(luxuryCar => {
            // Select the car name (h4 element) of each luxury car
            const carName = luxuryCar.querySelector("h4").textContent;
            // Check if the car name contains the search input (ignoring case)
            if (carName.toUpperCase().indexOf(filter) > -1) {
                // If a match is found, set the display property of the luxury car element to "block"
                luxuryCar.style.display = "block";
                // Set the "foundMatch" variable to true
                foundMatch = true;
            } else {
                // If no match is found, set the display property of the luxury car element to "none"
                luxuryCar.style.display = "none";
            }
        });

        // If no matches are found, show the toast message
        if (!foundMatch) {
            toast.style.display = "block";
        } else {
            // If a match is found, hide the toast message
            toast.style.display = "none";
        }
    });
}
//Simpler slider
// This function is called when the window is fully loaded
window.onload = function() {
    // Get the slider element from the page
    const slider = document.querySelector(".slider");
    
    // Check if the slider element exists
    if (slider !== null) {
      // If it exists, get all the slides in the slider
      const slides = slider.querySelectorAll(".experience");
      let currentSlide = 0;
  
      // Define a function to show the current slide
      function showSlide(slideIndex) {
        // Set all the slides to be inactive
        slides.forEach((slide) => {
          slide.classList.remove("active");
          slide.classList.add("inactive");
        });
  
        // Set the current slide to be active
        slides[slideIndex].classList.add("active");
        slides[slideIndex].classList.remove("inactive");
      }
  
      // Show the first slide
      showSlide(currentSlide);
  
      // Get the previous and next buttons
      const prevBtn = document.querySelector(".prevBtn");
      const nextBtn = document.querySelector(".nextBtn");
  
      // Add event listeners for when the buttons are clicked
      prevBtn.addEventListener("click", () => {
        // Move to the previous slide
        currentSlide--;
        // If we've gone past the first slide, loop around to the last slide
        if (currentSlide < 0) {
          currentSlide = slides.length - 1;
        }
        // Show the new slide
        showSlide(currentSlide);
      });
  
      nextBtn.addEventListener("click", () => {
        // Move to the next slide
        currentSlide++;
        // If we've gone past the last slide, loop around to the first slide
        if (currentSlide > slides.length - 1) {
          currentSlide = 0;
        }
        // Show the new slide
        showSlide(currentSlide);
      });
    }
  };

  
  
  
  
  
  
