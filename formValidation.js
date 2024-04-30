const form = document.getElementById('signup-form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const password2Input = document.getElementById('password2');
const phoneInput = document.getElementById('phone');
const checkboxInput = document.getElementById('checkbox');
const passwordStrengthDiv = document.getElementById('password-strength');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateForm();
});

function validateForm() {
  let isValid = true;

  // Validate username
  if (usernameInput.value.trim() === '') {
    document.getElementById('username-error').innerHTML = 'Username is required';
    isValid = false;
  } else {
    document.getElementById('username-error').innerHTML = '';
  }

  // Validate email
  if (!validateEmail(emailInput.value)) {
    document.getElementById('email-error').innerHTML = 'Email is required';
    isValid = false;
  } else {
    document.getElementById('email-error').innerHTML = '';
  }

  // Validate password
  if (!validatePassword(passwordInput.value)) {
    document.getElementById('password-error').innerHTML = 'Minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number';
    isValid = false;
  } else {
    document.getElementById('password-error').innerHTML = '';
  }

  // Validate password confirmation
  if (passwordInput.value!== password2Input.value) {
    document.getElementById('password-error').innerHTML = 'Passwords do not match';
    isValid = false;
  }

  if(passwordInput.length < 8){
    document.getElementById('password-error').innerHTML = 'Password must be at least 8 characters';
    isValid = false;
  }

  // Validate phone number
  if (!validatePhone(phoneInput.value)) {
    document.getElementById('phone-error').innerHTML = 'Invalid phone number';
    isValid = false;
  } else {
    document.getElementById('phone-error').innerHTML = '';
  }

  // Validate checkbox
  if (!checkboxInput.checked) {
    alert('You must agree to the terms and conditions');
    isValid = false;
  }

  if (isValid) {
    // Form is valid, submit it
    form.submit();
    window.location.href = "signupsuccess.html";
  }
}

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

function validatePhone(phone) {
  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return phoneRegex.test(phone) && phone.replace(/\D+/g, '').length === 10;
}

function validatePassword(password) {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^\s]{8,}$/;
  return passwordRegex.test(password);
}

function getPasswordStrength(password) {
  const strength = {
    poor: 'red',
    medium: 'orange',
    strong: 'green'
  };

  if (password.length < 8) {
    return strength.poor;
  } else if (password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)) {
    return strength.strong;
  } else {
    return strength.medium;
  }
}

passwordInput.addEventListener('input', () => {
  const passwordStrength = getPasswordStrength(passwordInput.value);
  passwordStrengthDiv.style.color = passwordStrength;
  passwordStrengthDiv.innerHTML = `Password strength: ${passwordStrength === 'green'? 'Strong' : passwordStrength === 'orange'? 'Medium' : 'Poor'}`;
});