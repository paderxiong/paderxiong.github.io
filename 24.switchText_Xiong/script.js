const sentences = [
    "Sunset sky.",
    "Warm summer nights and comforting clouds.",
    "When I first learned how to long board in my backyard driveway and on the neighborhood street.",
    "Cotton candy clouds.",
    "No sun outlasts its sunset, but will rise again and bring the dawn."
];

let currentIndex = 0; // Initialize the index

function changeText() {
    const textBox = document.getElementById('textBox');
    textBox.innerText = sentences[currentIndex]; // Set text to current sentence
    currentIndex = (currentIndex + 1) % sentences.length; // Increment index and loop back to 0
}