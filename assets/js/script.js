'use strict';

// Function to toggle the "active" class on an element
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
}

// Sidebar variables
const sidebar = document.querySelector("[data-sidebar]");   // The sidebar element
const sidebarBtn = document.querySelector("[data-sidebar-btn]"); // Sidebar toggle button

// Sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);  // Toggle the "active" class on the sidebar
});

// Testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");  // All testimonial items

// Modal variables for displaying detailed testimonial information
const modalImg = document.querySelector("[data-modal-img]");  // Modal image element
const modalTitle = document.querySelector("[data-modal-title]");  // Modal title element
const modalText = document.querySelector("[data-modal-text]");  // Modal text element

// Add click event to all testimonial items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    // Set the modal content to the clicked testimonial item
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
  });
}

// Custom select variables
const selectItems = document.querySelectorAll("[data-select-item]"); // All items in the custom select dropdown
const selectValue = document.querySelector("[data-selecct-value]");  // The selected value in the dropdown
const filterBtn = document.querySelectorAll("[data-filter-btn]"); // Filter buttons

// Add event listener to all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();  // Get selected value in lowercase
    selectValue.innerText = this.innerText;  // Update the select value display
    filterFunc(selectedValue);  // Apply filter function
  });
}

// Filter variables
const filterItems = document.querySelectorAll("[data-filter-item]"); // All filterable items

// Filter function to show/hide items based on selected value
const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    // If "all" is selected, show all items
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } 
    // If the item matches the selected category, show it
    else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } 
    // Otherwise, hide the item
    else {
      filterItems[i].classList.remove("active");
    }
  }
}

// Add event listener to all filter buttons for large screens
let lastClickedBtn = filterBtn[0];  // Keep track of the last clicked button

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();  // Get the selected value
    selectValue.innerText = this.innerText;  // Update the select value display
    filterFunc(selectedValue);  // Apply filter function

    // Toggle the "active" class on the clicked button
    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;  // Update the last clicked button
  });
}

// Contact form variables
const form = document.querySelector("[data-form]");  // The form element
const formInputs = document.querySelectorAll("[data-form-input]");  // All input fields in the form
const formBtn = document.querySelector("[data-form-btn]");  // The form submit button

// Add event listener to all form input fields to enable/disable the submit button based on form validity
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // Check if the form is valid and enable/disable the submit button
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// Page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");  // All navigation links
const pages = document.querySelectorAll("[data-page]");  // All pages

// Add event listener to all navigation links for page navigation
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    // Loop through all pages and toggle the "active" class based on the selected page
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);  // Scroll to the top of the page
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

