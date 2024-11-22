const form = document.querySelector("form");
form.addEventListener("submit", validatePasswordMatch);

function validatePasswordMatch(e) {
  const password = document.querySelector('[name="password"]');
  const confirmPassword = document.querySelector('[name="confirmPassword"]');

  if (password.value !== confirmPassword.value) {
    password.setCustomValidity("Passwords do not match!");
    e.preventDefault();
  }
}
