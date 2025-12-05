const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const btn = document.getElementById('menubtn');
const lin = document.getElementsByClassName('sd');


btn.addEventListener('click', () => {
  sidebar.classList.add('active');
  overlay.classList.add('active');
});


overlay.addEventListener('click', () => {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
});

const sidebarLinks = document.querySelectorAll('.sidebar a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Close sidebar
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        });
        });