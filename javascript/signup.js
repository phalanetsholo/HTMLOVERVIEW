document.querySelector('.btn').addEventListener('click', (event) => {
    event.preventDefault(); 

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const number = document.getElementById('number').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();

  
    if (username.length < 3 || username.length > 25) {
      alert('Username must be between 3 and 25 characters.');
      return;
    }

    
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    
    const phonePattern = /^\d{10}$/; 
    if (!phonePattern.test(number)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }

    
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    if (!passwordPattern.test(password)) {
      alert(
        'Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a digit, and a special character.'
      );
      return;
    }

  
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

  
    alert('Ready to login! Submitted successfully!');
    window.location.href = 'login.html';
  });