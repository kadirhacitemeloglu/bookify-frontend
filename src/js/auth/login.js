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
