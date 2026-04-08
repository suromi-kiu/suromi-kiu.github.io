const links = document.querySelectorAll('.toc a');
const sections = document.querySelectorAll('h2');

window.addEventListener('scroll', () => {
  let current = "";

  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (scrollY >= top) {
      current = section.getAttribute("id");
    }
  });

  links.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
