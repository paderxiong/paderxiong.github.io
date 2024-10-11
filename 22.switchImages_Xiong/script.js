// Array of image paths
const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    // Add more image paths as needed
];

let currentIndex = 0; // Index to keep track of the current image

// Get the image element
const carouselImage = document.getElementById('carouselImage');

// Function to change the image
function changeImage() {
    // Fade out the current image
    carouselImage.style.opacity = 0;

    // Update the image source after a short delay for the fade-out effect
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length; // Move to the next image
        carouselImage.src = images[currentIndex]; // Update the image source

        // Fade in the new image
        carouselImage.style.opacity = 1;
    }, 500); // Delay matches the CSS transition duration
}

// Add click event listener to the container
document.getElementById('carouselContainer').addEventListener('click', changeImage);

// Initialize the first image to be visible
carouselImage.style.opacity = 1; // Ensure the first image is visible