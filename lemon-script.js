const toggleBtn = document.getElementById('menu-toggle');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    sidebar.classList.remove('active');
  }
});
