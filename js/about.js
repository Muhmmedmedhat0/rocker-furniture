// scroll to top
const scrollToTop = document.querySelector('.top_button');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTop.style.display = 'block';
    scrollToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    })
  } else {
    scrollToTop.style.display = 'none';
  }
});