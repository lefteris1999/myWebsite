// Smooth scroll for navbar links
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Contact form submission handler -- NOT YET IMPLEMENTED FULLY
// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;

//     // Simple form validation
//     if (name && email && message) {
//         alert(`Thank you, ${name}! Your message has been sent.`);
//         document.getElementById('contactForm').reset();
//     } else {
//         alert("Please fill out all fields.");
//     }
// });


// Get the button
let backToTopBtn = document.getElementById("backToTopBtn");

// Show or hide the button based on scroll position
window.onscroll = function() {
    toggleBackToTopBtn();
};

function toggleBackToTopBtn() {
    // Show the button when the user scrolls down 200px from the top
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
}

// Scroll to the top of the page when the button is clicked
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.toggle-btn');
  
    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        const details = button.previousElementSibling; // Get the experience details
        const isVisible = details.style.display === 'block';
  
        if (isVisible) {
          details.style.display = 'none';
          button.textContent = 'Show More';
        } else {
          details.style.display = 'block';
          button.textContent = 'Show Less';
        }
      });
    });
  });
  


