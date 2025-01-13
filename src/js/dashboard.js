document.addEventListener('DOMContentLoaded', function () {
    // Sidebar toggle functionality
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const dashboardSection = document.querySelector('.dashboard-section');

    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        dashboardSection.style.marginLeft = sidebar.classList.contains('active') ? '210px' : '0';
    });

    // Profile dropdown functionality
    const profileInfo = document.querySelector('.profile-info');
    const dropdownMenu = document.querySelector('.dropdown-content');

    profileInfo.addEventListener('click', () => {
        dropdownMenu.classList.toggle('visible');
    });
});

// Content management functions
function showBooks() {
    updateContent('My Books', 'Manage your personal book collection here.');
}

function showFavorites() {
    updateContent('Favorites', 'Here are your favorite books.');
}

function showAddBook() {
    const content = document.getElementById('dashboard-content');
    content.innerHTML = `
        <h1>Add New Book</h1>
        <form>
            <label for="book-title">Book Title:</label>
            <input type="text" id="book-title" required>
            <label for="book-author">Author Name:</label>
            <input type="text" id="book-author" required>
            <button type="submit">Add Book</button>
        </form>
    `;
}

function showNotifications() {
    updateContent('Notification Settings', 'Manage your notification preferences here.');
}

function showPrivacy() {
    updateContent('Privacy Settings', 'Adjust your privacy settings here.');
}

function showMembershipPlan() {
    updateContent('Membership Plan', 'Choose your preferred membership plan below.');
}

function updateContent(title, description) {
    const content = document.getElementById('dashboard-content');
    content.innerHTML = `
        <h1>${title}</h1>
        <p>${description}</p>
    `;
}
