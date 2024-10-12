// Sidebar toggle functionality
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const dashboardSection = document.querySelector('.dashboard-section');

// Sayfa ilk açıldığında sidebar kapalı olacak
window.addEventListener('DOMContentLoaded', () => {
    sidebar.classList.remove('active'); // Sidebar başlangıçta kapalı
});

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active'); // Sidebar'ı aç/kapat
    if (sidebar.classList.contains('active')) {
        dashboardSection.style.marginLeft = '250px'; // Sidebar açıkken içerik sağa kayar
    } else {
        dashboardSection.style.marginLeft = '0'; // Sidebar kapalıyken içerik sola kayar
    }
});
// Dynamic content functions
function showBooks() {
    document.getElementById('dashboard-content').innerHTML = `
        <h1>My Books</h1>
        <p>Manage your personal book collection here.</p>
    `;
}

function showFavorites() {
    document.getElementById('dashboard-content').innerHTML = `
        <h1>Favorites</h1>
        <p>Here are your favorite books.</p>
    `;
}

function showAddBook() {
    document.getElementById('dashboard-content').innerHTML = `
        <h1>Add New Book</h1>
        <form>
            <label for="book-title">Book Title:</label>
            <input type="text" id="book-title" name="book-title" placeholder="Enter book title" required>
            <br><br>
            <label for="book-author">Author Name:</label>
            <input type="text" id="book-author" name="book-author" placeholder="Enter author name" required>
            <br><br>
            <button type="submit">Add Book</button>
        </form>
    `;
}

function showMembership() {
    document.getElementById('dashboard-content').innerHTML = `
        <h1>Membership Plan</h1>
        <p>View or upgrade your current membership plan.</p>
        <button onclick="upgradePlan()">Upgrade Plan</button>
    `;
}

function upgradePlan() {
    alert('Membership upgrade feature coming soon!');
}

function manageBooks() {
    alert('Manage your books feature coming soon!');
}