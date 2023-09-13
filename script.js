document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("signup-form");
  const loginForm = document.getElementById("login-form");

  // Signup logic
  signupForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const username = document.getElementById("signup-username").value;
      const password = document.getElementById("signup-password").value;

      // Check if username already exists in localStorage
      if (localStorage.getItem(username)) {
          alert("Username already exists. Please try again.");
      } else {
          // Store username and password in localStorage
          localStorage.setItem(username, password);
          alert("Signup successful! Please login your details.");
      }

      // Clear signup form
      signupForm.reset();
  });

  // Login logic
  loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const username = document.getElementById("login-username").value;
      const password = document.getElementById("login-password").value;

      // Check if username exists and the password is correct
      const storedPassword = localStorage.getItem(username);

      if (storedPassword === null) {
          alert("Username not found. Please signup.");
      } else if (password === storedPassword) {
          alert("Login successfully!");
      } else {
          alert("Username or password incorrect. Please try again.");
      }

      // Clear login form
      loginForm.reset();
  });
});
