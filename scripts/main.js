
document.getElementById('toggleSidebar').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    var content = document.getElementById('main-content');
    sidebar.classList.toggle('sidebar-hidden');
    content.classList.toggle('content-full');
});

document.getElementById('showSidebar').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    var content = document.getElementById('main-content');
    sidebar.classList.remove('sidebar-hidden');
    content.classList.remove('content-full');
});

function toggleIcons() {
    const icon1 = document.getElementById('showSidebar');
    const icon2 = document.getElementById('toggleSidebar');
    icon1.classList.toggle('hidden');
    icon2.classList.toggle('hidden');
}
const menuIcon = document.getElementById('menuIcon');
const sidebar = document.getElementById('sidebar');

menuIcon.addEventListener('click', () => {
    if (sidebar.style.display === "none" || sidebar.style.display === "") {
        sidebar.style.display = "block";
        setTimeout(() => {
            sidebar.classList.add('open');
        }, 10); // Small delay to ensure display:block is applied
    } else {
        sidebar.classList.remove('open');
        setTimeout(() => {
            sidebar.style.display = "none";
        }, 300); // Match the transition duration
    }
});