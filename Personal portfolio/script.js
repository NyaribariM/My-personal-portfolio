// Form validation for the contact form
document.addEventListener("DOMContentLoaded", function() {
  // --- Contact Form Validation ---
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var message = document.getElementById('message').value;
  
      if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
      }
  
      // Basic email pattern check
      var emailPattern = /\S+@\S+\.\S+/;
      if (!emailPattern.test(email)) {
        alert('Please enter a valid email.');
        return;
      }
  
      alert('Message sent! Thank you.');
      contactForm.reset();
    });
  }
  
  // --- Toggle Display for Project Details ---
  window.toggleDetails = function(id) {
    var detailsDiv = document.getElementById(id);
    if (detailsDiv.style.display === 'block') {
      detailsDiv.style.display = 'none';
    } else {
      detailsDiv.style.display = 'block';
    }
  };

  // --- Baking Game Code ---
  // List of secret baking ingredients
  const ingredients = ["sugar", "flour", "butter", "cinnamon"];
  // Randomly select one secret ingredient
  const secretIngredient = ingredients[Math.floor(Math.random() * ingredients.length)];
  
  // Get references to the game elements
  const guessInput = document.getElementById("guessInput");
  const submitGuess = document.getElementById("submitGuess");
  const gameMessage = document.getElementById("gameMessage");
  const portfolioContent = document.getElementById("portfolioContent");
  const bakingGame = document.getElementById("bakingGame");

  // Listen for the click event on the game submit button
  if (submitGuess) {
    submitGuess.addEventListener("click", function() {
      const userGuess = guessInput.value.toLowerCase();
  
      if (userGuess === secretIngredient) {
        gameMessage.textContent = "🎉 Correct! Welcome to my portfolio!";
        // Reveal the portfolio content
        portfolioContent.style.display = "block";
        // Hide the game section
        bakingGame.style.display = "none";
      } else {
        gameMessage.textContent = "❌ Incorrect! Try again.";
      }
    });
  }
});
