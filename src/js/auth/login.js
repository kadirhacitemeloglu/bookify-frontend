// Login işlemi için API endpoint'i
const API_BASE_URL = "http://localhost:5000/api"; // Backend API'nin base URL'si

// Login işlemi
async function handleLogin(event) {
  event.preventDefault(); // Form'un sayfayı yenilemesini engeller

  // Kullanıcıdan alınan giriş bilgileri
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Please fill in all fields!");
    return;
  }

  try {
    // API'ye POST isteği gönder
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }), // JSON formatında veri gönder
    });

    // API yanıtını kontrol et
    if (response.ok) {
      const data = await response.json(); // Yanıt verisini JSON olarak al
      alert("Login successful!");

      // Token'ı localStorage'a kaydet
      localStorage.setItem("token", data.token);

      // Dashboard sayfasına yönlendir
      window.location.href = "dashboard.html";
    } else {
      const errorData = await response.json(); // Hata durumunda gelen JSON yanıtı
      alert(errorData.message || "Login failed!");
    }
  } catch (error) {
    console.error("Error logging in:", error);
    alert("An error occurred during login. Please try again later.");
  }
}

// Form'un gönderilmesini dinleyerek login işlemini başlatır
document.querySelector(".login-form").addEventListener("submit", handleLogin);
