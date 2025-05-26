function toggleTheme() {
    const body = document.body;
    const isDark = body.getAttribute('data-theme') === 'dark';
    body.setAttribute('data-theme', isDark ? 'light' : 'dark');
  }
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.setAttribute('data-theme', 'dark');
  }
  window.addEventListener('scroll', function () {
document.getElementById('backToTop').style.display =
  window.scrollY > 300 ? 'block' : 'none';
});

function scrollToTop() {
window.scrollTo({ top: 0, behavior: 'smooth' });
}
