onload = () =>{
    document.body.classList.remove("container");
};
// Array of texts to display
const texts = [
    "Happy Valentines Day <3",
    "Masaya ako nagkita tayo kahit saglit lang",
    "Ice cream sana tayo kaso di pinalad haha",
    "Flowers for you labyou mwah mwah",
    
  ];
  
  // Counter to keep track of current text index
  let currentIndex = 0;
  
  // Function to display the next text
  function showNextText() {
    const textDisplay = document.getElementById('textDisplay');
    currentIndex = (currentIndex + 1) % texts.length; // Increment index, looping back to 0 when reaching the end
  
    if (currentIndex < texts.length - 1) {
      // If not the last text, display the next text
      textDisplay.textContent = texts[currentIndex];
    } else {
      // If it's the last text, add a delay before redirecting to the next page
      textDisplay.textContent = texts[currentIndex]; // Display the last text
      setTimeout(function() {
        window.location.href = 'valentimes.html';
      }, 2000); // Change the delay time in milliseconds (e.g., 2000 for 2 seconds)
    }
  }
  
  // Event listener for button click
  document.getElementById('nextButton').addEventListener('click', showNextText);