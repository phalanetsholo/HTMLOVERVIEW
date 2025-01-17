document.getElementById("resetForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    const emailInput = document.getElementById("email");
    const errorMessage = document.getElementById("error-message");
    const emailValue = emailInput.value.trim();
    
    
    if (!emailValue.includes(".com")) {
        errorMessage.style.display = "block";
        emailInput.style.borderColor = "red";
    } else {
        errorMessage.style.display = "none"; 
        emailInput.style.borderColor = "";
        alert("A reset link has been sent to your email address.");
        window.location.href='../HTML/login.html';
        emailInput.value = ""; 
    }
});