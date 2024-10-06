document.addEventListener('DOMContentLoaded', () => {
    const profileInfo = document.querySelector('.profile-info');

    profileInfo.addEventListener('click', () => {
        profileInfo.classList.toggle('active');
    });

    // Sayfanın başka bir yerine tıklanınca menüyü kapat
    window.addEventListener('click', (e) => {
        if (!profileInfo.contains(e.target)) {
            profileInfo.classList.remove('active');
        }
    });
});
