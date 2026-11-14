
// Contact Form Functionality

const contactForm = document.querySelector("#contactForm");

contactForm.addEventListener("submit", function(event) {

    // Prevent page reload
    event.preventDefault();

    // Get user input
    const name = document.querySelector(
        '.contact-form input[type="text"]'
    ).value;

    // Show success message
    alert("Thank you, " + name + "! Your message has been received.");

    // Clear the form
    contactForm.reset();

});



// Scroll Reveal Animation

const revealElements = document.querySelectorAll(
    ".features, .about, .testimonials, .contact, .feature-card, .testimonial-card"
);

revealElements.forEach(function(element) {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach(function(element) {
    observer.observe(element);
});



// Dark Mode Functionality

const themeToggle = document.querySelector("#themeToggle");

themeToggle.addEventListener("click", function() {

    // Toggle dark mode class
    document.body.classList.toggle("dark-mode");

    // Check current theme
    if (document.body.classList.contains("dark-mode")) {

        themeToggle.textContent = "☀️ Light Mode";

    } else {

        themeToggle.textContent = "🌙 Dark Mode";

    }

});
