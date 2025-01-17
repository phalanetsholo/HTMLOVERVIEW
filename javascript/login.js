function validateLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        alert('Please fill in both email and password fields.');
        return;
    }


    alert('Login successful!');
    window.location.href = 'http://127.0.0.1:5500/HTML/index.html';}