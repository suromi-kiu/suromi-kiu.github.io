document.addEventListener("DOMContentLoaded", () => {

const searchBtn = document.getElementById("searchBtn");
const searchPanel = document.getElementById("searchPanel");
const searchInput = document.getElementById("searchInput");
const posts = Array.from(document.querySelectorAll(".post"));
const tagContainer = document.getElementById("tagFilters");
const pagination = document.getElementById("pagination");

let selectedTags = [];
let currentPage = 1;
const postsPerPage = 5;

/* TOGGLE SEARCH */
searchBtn.onclick = () => {
  searchPanel.classList.toggle("hidden");
};

/* GET TAGS */
const allTags = new Set();

posts.forEach(post => {
  post.querySelectorAll(".tags span").forEach(tag => {
    allTags.add(tag.textContent.toLowerCase());
  });
});

/* RENDER TAGS */
allTags.forEach(tag => {
  const el = document.createElement("span");
  el.textContent = tag;

  el.onclick = () => {
    el.classList.toggle("active");

    if (selectedTags.includes(tag)) {
      selectedTags = selectedTags.filter(t => t !== tag);
    } else {
      selectedTags.push(tag);
    }

    currentPage = 1;
    filterPosts();
  };

  tagContainer.appendChild(el);
});

/* FILTER */
function filterPosts() {
  const query = searchInput.value.toLowerCase();

  let filtered = posts.filter(post => {
    const title = post.querySelector("h3").textContent.toLowerCase();
    const tags = Array.from(post.querySelectorAll(".tags span"))
      .map(t => t.textContent.toLowerCase());

    const matchName = title.includes(query);
    const matchTags = selectedTags.length === 0 || selectedTags.every(t => tags.includes(t));

    return matchName && matchTags;
  });

  renderPosts(filtered);
}

/* PAGINATION */
function renderPosts(filtered) {
  const start = (currentPage - 1) * postsPerPage;
  const paginated = filtered.slice(start, start + postsPerPage);

  posts.forEach(p => p.style.display = "none");
  paginated.forEach(p => p.style.display = "block");

  renderPagination(filtered.length);
}

function renderPagination(total) {
  pagination.innerHTML = "";
  const pages = Math.ceil(total / postsPerPage);

  for (let i = 1; i <= pages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;

    if (i === currentPage) btn.classList.add("active");

    btn.onclick = () => {
      currentPage = i;
      filterPosts();
    };

    pagination.appendChild(btn);
  }
}

/* SEARCH INPUT */
searchInput.addEventListener("input", () => {
  currentPage = 1;
  filterPosts();
});

/* INIT */
filterPosts();

});
