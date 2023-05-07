const form = document.getElementById("ContactForm");
const thankYouMessage = document.getElementById("thankYouMessage");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form from submitting

  // Hide the form fields and display the thank you message
  form.style.display = "none";
  thankYouMessage.style.display = "block";
});