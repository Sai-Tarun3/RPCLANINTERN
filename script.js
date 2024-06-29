// script.js
const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const loginError = document.getElementById('login-error');

const openPopupBtn = document.getElementById('open-popup');
const popup = document.getElementById('popup');
const switchBtn = document.getElementById('switch-btn');
const popupTitle = document.getElementById('popup-title');

openPopupBtn.addEventListener('click', () => {
    popup.style.display = 'flex';
});

popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});

switchBtn.addEventListener('click', () => {
    if (popupTitle.textContent === 'Login') {
        popupTitle.textContent = 'Signup';
        switchBtn.textContent = 'Login';
    } else {
        popupTitle.textContent = 'Login';
        switchBtn.textContent = 'Signup';
    }
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;
    let errors = [];

    if (email === '') {
        errors.push('Email is required');
        emailError.textContent = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.push('Invalid email');
        emailError.textContent = 'Invalid email';
    } else {
        emailError.textContent = '';
    }

    if (password === '') {
        errors.push('Password is required');
        passwordError.textContent = 'Password is required';
    } else if (password.length < 8) {
        errors.push('Password must be at least 8 characters');
        passwordError.textContent = 'Password must be at least 8 characters';
    } else {
        passwordError.textContent = '';
    }

    if (errors.length > 0) {
        loginError.textContent = 'Please fix the errors';
    } else {
        loginError.textContent = '';
        // Implement login logic here
        alert('Login successful!');
    }
});
