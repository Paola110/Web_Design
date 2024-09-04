document.getElementById('showSignUp').addEventListener('click', function() {
    document.getElementById('LoginForm').classList.add('hidden');
    document.getElementById('SignUpForm').classList.remove('hidden');
});

document.getElementById('showLogin').addEventListener('click', function() {
    document.getElementById('signUpForm').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
});