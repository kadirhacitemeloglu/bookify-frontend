function handleSignup() {
    var username = document.getElementById("username-bookify").value;
    var email = document.getElementById("email-bookify").value;
    var password = document.getElementById("password-bookify").value;
    var confirmPassword = document.getElementById("confirm-password-bookify").value;
  
    if (username == "" || email == "" || password == "" || confirmPassword == "") {
      alert("Please fill in all fields.");
      return;
    }
  
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
  
    // Daha fazla validasyon ve backend'e veri gönderme işlemi yapılacak.
    alert("Signup successful!");
    window.location.href = "index.html";
  }

function navigateLogin() {
    window.location.href = "index.html";
}

function navigateHomepage() {
    window.location.href = "homepage.html";
}


  