var username = "khacitemeloglu";
var password = "123";

function redirectToLogin() {
  window.location.href = "https://login.microsoft.com";
}

function handleLogin() {
  var username = document.getElementById("username-bookify").value;
  var password = document.getElementById("password-bookify").value;
  checkUserName(username, password);
}

function checkUserName(username, password) {
  if (username == "khacitemeloglu" && password == "123") {
    var messageSpan = document.getElementById("success-message");
    messageSpan.textContent = "Login is successfully registered";
    messageSpan.style.color = "green";
    setTimeout(function () {
      redirectToLogin();
    }, 2000);
  } else {
    document.getElementById("authentication-error").innerHTML =
      "Authentication error: Wrong username or password";
    document.getElementById("authentication-error").style.color = "red";

    document.getElementById("authentication-error").style.display = "block";
    document.getElementById("username-bookify").value = "";
    document.getElementById("password-bookify").value = "";
  }
}

function loginWithGitHub() {
  redirectToGitHub();
}

function redirectToGitHub() {
  window.location.href = "https://github.com/login";
}

function showForgotPassword() {
  var contentDiv = document.getElementById('content');
  contentDiv.innerHTML = `
      <div class="header mb-3">
          <h1 class="bookify text-center" id="bookifytext">Forgot Password</h1>
      </div>
      <div class="form-container">
          <div class="form-group input-group">
              <label for="email" class="username-label-mail">Email:</label>
              <input type="email" id="email" class="form-control">
          </div>
          <div class="footer">
              <button type="button" id="back-homepage" onclick="showLoginPage()">Back Homepage</button>
              <button type="button"  id = "resetLink" onclick="sendResetLink()">Send Reset Link</button>
          </div>
      </div>
  `;
}


function sendResetLink() {
  var email = document.getElementById('email').value;
  if (email == ""){
    alert("Please enter your email address.");
    return;
  }
  document.getElementById('resetLink').disabled = true;
  document.getElementById('resetLink').innerHTML = "Sending...";
  setTimeout(function () {
    document.getElementById('resetLink').disabled = false;
    document.getElementById('resetLink').innerHTML = "Send Reset Link";
  }, 3000);
  alert("A reset link has been sent to " + email);
  // Add code to send email here (e.g., using a library like Nodemailer)
  // Remember to handle error cases (e.g., if email is invalid)
  // and ensure the email is securely sent (e.g., using TLS)
  // Also, consider adding a security measure to prevent brute force attacks
  // by limiting the number of attempts and resetting the counter after a certain period
}

function showLoginPage() {
  var contentDiv = document.getElementById('content');
  contentDiv.innerHTML = `
      <div class="header mb-3">
          <h1 class="bookify text-center" id="bookifytext">Bookify</h1>
      </div>
        <div class="form-container" id="form-container">
            <div class="form-group input-group">
                <label for="username-bookify" class="username-label">Username:</label>
                <input type="text" id="username-bookify" class="form-control">
            </div>
            <div class="form-group input-group">
                <label for="password-bookify" class="password-label">Password:</label>
                <input type="password" id="password-bookify" class="form-control">
            </div>
            <div class="forgot-password">
                <a href="#" onclick="showForgotPassword()">Forgot password?</a>
            </div>
            <div class="new-account">
                <a href="#">Don't have an account?</a>
            </div>
        </div>
        <div class="footer" id="footer">
            <button type="button" class="btn-primary" onclick="handleLogin()">Login</button>
            <button type="button" class="btn-github" onclick="loginWithGitHub()">Login with GitHub</button>
        </div>
        <span id="authentication-error"></span>
        <span id="success-message" class="message"></span> <!-- Başarı mesajı için span -->
        <span id="message" class="message"></span>
    </div>
  `;
}


function navigateLogin(){
  // Navigate to login page

  // Implement additional logic here for navigation to login page
  // For example, you can set a timeout to automatically redirect to login page after a certain period.
   setTimeout(function(){
      window.location.href = "index.html";
   }, 2000);
}



