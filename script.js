// Search & Filter
const searchBox = document.getElementById('searchBox');
const filterCategory = document.getElementById('filterCategory');
const cards = document.querySelectorAll('.card');

function updateCards() {
  const keyword = searchBox.value.toLowerCase();
  const category = filterCategory.value;

  cards.forEach(card => {
    const name = card.getAttribute('data-name').toLowerCase();
    const carCategory = card.getAttribute('data-category');

    if (
      name.includes(keyword) &&
      (category === "all" || category === carCategory)
    ) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

searchBox.addEventListener('input', updateCards);
filterCategory.addEventListener('change', updateCards);

// Modal Popup
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDetail = document.getElementById("modalDetail");
const closeBtn = document.querySelector(".close");

cards.forEach(card => {
  card.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = card.querySelector("img").src;
    modalTitle.textContent = card.getAttribute("data-name");
    modalDetail.textContent = card.getAttribute("data-detail");
  });
});

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };
