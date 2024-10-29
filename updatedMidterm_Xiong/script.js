// Get all the text boxes
const textBoxes = document.querySelectorAll('.text-box');

// Create a new IntersectionObserver instance
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // Check if the text box is in the viewport
        if (entry.isIntersecting) {
            // Get the corresponding image from the data attribute
            const imageName = entry.target.getAttribute('data-image');
            // Change the body's background image
            document.body.style.backgroundImage = `url('images/${imageName}')`;
        }
    });
}, {
    threshold: 0.5 // Trigger when at least 50% of the text box is in the viewport
});

// Observe each text box
textBoxes.forEach(textBox => {
    observer.observe(textBox);
});