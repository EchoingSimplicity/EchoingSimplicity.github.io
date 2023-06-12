const form = document.getElementById("ContactForm");
const thankYouMessage = document.getElementById("thankYouMessage");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  form.style.display = "none";
  thankYouMessage.style.display = "block";
});