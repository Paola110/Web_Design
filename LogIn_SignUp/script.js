document.getElementById('showSignUp').addEventListener('click', function() {
    document.getElementById('LoginForm').classList.add('hidden');
    document.getElementById('SignUpForm').classList.remove('hidden');
});

document.getElementById('showLogin').addEventListener('click', function() {
    document.getElementById('SignUpForm').classList.add('hidden');
    document.getElementById('LoginForm').classList.remove('hidden');
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const loginLink = document.querySelector('a[href="#LoginForm"]');
    const signupLink = document.querySelector('a[href="#SignUpForm"]');
    const loginForm = document.getElementById('LoginForm');
    const signupForm = document.getElementById('SignUpForm');

    loginLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link jump
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
    });

    signupLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link jump
        signupForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
    });

    const signUpPassword = document.getElementById('signUpPassword');
    const signUpVerifyPassword = document.getElementById('signUpVerifyPassword');
    const signUpEmail = document.getElementById('signUpEmail');
    const signUpVerifyEmail = document.getElementById('signUpVerifyEmail');
    const passwordWarning = document.getElementById('passwordWarning');
    const emailWarning = document.getElementById('emailWarning');

    signupForm.addEventListener('submit', function(event) {
        if (signUpPassword.value !== signUpVerifyPassword.value) {
            event.preventDefault(); // Prevent form submission
            passwordWarning.textContent = "Las contraseñas no coinciden.";
            passwordWarning.style.display = "block";
        } else {
            passwordWarning.style.display = "none"; // Hide if passwords match
        }

        if (signUpEmail.value !== signUpVerifyEmail.value) {
            event.preventDefault(); // Prevent form submission
            emailWarning.textContent = "Los correos electrónicos no coinciden.";
            emailWarning.style.display = "block";
        } else {
            emailWarning.style.display = "none"; // Hide if emails match
        }
    });

});
