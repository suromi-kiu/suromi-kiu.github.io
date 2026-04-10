const tocList = document.getElementById("toc-list");
const sections = document.querySelectorAll("h2");
let links = [];

// generar índice automático
sections.forEach((section, index) => {
  if (!section.id) {
    section.id = "section-" + index;
  }

  const li = document.createElement("li");
  const a = document.createElement("a");

  a.href = "#" + section.id;
  a.textContent = section.textContent;

  li.appendChild(a);
  tocList.appendChild(li);
  links.push(a);
});

// detectar sección activa
window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (scrollY >= top) {
      current = section.id;
    }
  });

  links.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
