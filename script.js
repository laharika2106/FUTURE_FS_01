let form = document.getElementById("contactForm");
let message = document.getElementById("message");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  message.innerText = "Message sent successfully!";
  form.reset();
});