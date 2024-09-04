document.getElementById('showSignUp').addEventListener('click', function() {
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('signUpForm').classList.remove('hidden');
});

document.getElementById('showLogin').addEventListener('click', function() {
    document.getElementById('signUpForm').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
});
