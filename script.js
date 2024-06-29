const openPopupBtn = document.getElementById('open-popup');
const popup = document.getElementById('popup');
const loginTitle = document.getElementById('login-title');
const signupTitle = document.getElementById('signup-title');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const signupButton= document.getElementById('signup-span');
const loginNameInput = document.getElementById('login-name');
const loginPasswordInput = document.getElementById('login-password');
const loginNameError = document.getElementById('login-name-error');
const loginPasswordError = document.getElementById('login-password-error');
const loginError = document.getElementById('login-error');
const toggleLoginPassword = document.getElementById('toggle-login-password');
const backButton=document.getElementById('back-btn');

const signupNameInput = document.getElementById('signup-name');
const signupEmailInput = document.getElementById('signup-email');
const signupPasswordInput = document.getElementById('signup-password');
const signupNameError = document.getElementById('signup-name-error');
const signupEmailError = document.getElementById('signup-email-error');
const signupPasswordError = document.getElementById('signup-password-error');
const signupError = document.getElementById('signup-error');
const toggleSignupPassword = document.getElementById('toggle-signup-password');

openPopupBtn.addEventListener('click', () => {
    popup.style.display = 'flex';
});

popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});

loginTitle.addEventListener('click', () => {
    switchToLogin();
});
loginTitle.addEventListener('click', () => {
    switchToLogin();
});
backButton.addEventListener('click', () => {
    switchToLogin();
});
signupButton.addEventListener('click', () => {
    switchToSignup();
});

function switchToLogin() {
    loginForm.classList.remove('hidden');
    signupForm.classList.add('hidden');
    loginTitle.classList.add('active');
    signupTitle.classList.remove('active');
}

function switchToSignup() {
    loginForm.classList.add('hidden');
    signupForm.classList.remove('hidden');
    loginTitle.classList.remove('active');
    signupTitle.classList.add('active');
}

loginForm.addEventListener('click', (e) => {
    e.preventDefault();
    validateLogin();
});

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    validateSignup();
});

toggleLoginPassword.addEventListener('click', () => {
    togglePasswordVisibility(loginPasswordInput, toggleLoginPassword);
});

toggleSignupPassword.addEventListener('click', () => {
    togglePasswordVisibility(signupPasswordInput, toggleSignupPassword);
});

function togglePasswordVisibility(passwordInput, toggleIcon) {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.textContent = '🙈';
    } else {
        passwordInput.type = 'password';
        toggleIcon.textContent = '👁️';
    }
}

function validateLogin() {
    let valid = true;

    if (loginNameInput.value === '') {
        loginNameError.textContent = 'Full Name is required';
        valid = false;
    } else {
        loginNameError.textContent = '';
    }

    if (loginPasswordInput.value === '') {
        loginPasswordError.textContent = 'Password is required';
        valid = false;
    } else if (loginPasswordInput.value.length < 8) {
        loginPasswordError.textContent = 'Password must be at least 8 characters';
        valid = false;
    } else {
        loginPasswordError.textContent = '';
    }

    if (valid) {
        loginError.textContent = '';
        alert('Login successful');
        popup.style.display = 'none';
    } else {
        loginError.textContent = 'Please enter valid data';
    }
}

function validateSignup() {
    let valid = true;

    if (signupNameInput.value === '') {
        signupNameError.textContent = 'Full Name is required';
        valid = false;
    } else {
        signupNameError.textContent = '';
    }

    if (signupEmailInput.value === '') {
        signupEmailError.textContent = 'Email is required';
        valid = false;
    } else if (!/\S+@\S+\.\S+/.test(signupEmailInput.value)) {
        signupEmailError.textContent = 'Invalid email';
        valid = false;
    } else {
        signupEmailError.textContent = '';
    }

    if (signupPasswordInput.value === '') {
        signupPasswordError.textContent = 'Password is required';
        valid = false;
    } else if (signupPasswordInput.value.length < 8) {
        signupPasswordError.textContent = 'Password must be at least 8 characters';
        valid = false;
    } else {
        signupPasswordError.textContent = '';
    }

    if (valid) {
        signupError.textContent = '';
        alert('Signup successful');
        popup.style.display = 'none';
    } else {
        signupError.textContent = 'Please fix the errors';
    }
}
