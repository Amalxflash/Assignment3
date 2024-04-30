document.getElementById('login').addEventListener('submit', function(event) {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  var usernameMatchSpan = document.getElementById('username-match');
  var passwordMatchSpan = document.getElementById('password-match');

  usernameMatchSpan.textContent = '';
  passwordMatchSpan.textContent = '';

  // Username validation
  if (!username.trim()) {
      usernameMatchSpan.textContent = 'Please enter a username.';
      event.preventDefault();
  }

  // Password validation
  if (!password.trim()) {
      passwordMatchSpan.textContent = 'Please enter a password.';
      event.preventDefault();
  }
});