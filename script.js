const themeToggle = document.querySelector("#theme-toggle");
const tipButton = document.querySelector("#tip-button");
const tipText = document.querySelector("#daily-tip");
const highlightButton = document.querySelector("#highlight-button");
const cards = document.querySelectorAll(".card");

function toggleTheme() {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeToggle.textContent = "Day Mode";
  } else {
    themeToggle.textContent = "Dark Mode";
  }
}

function updateDailyTip() {
  tipText.textContent = "Today’s action: bring a reusable bottle and avoid one single-use plastic item.";
}

function highlightCards() {
  cards.forEach(function(card) {
    card.classList.toggle("highlight");
  });
}

if (themeToggle) {
  themeToggle.addEventListener("click", toggleTheme);
}

if (tipButton) {
  tipButton.addEventListener("click", updateDailyTip);
}

if (highlightButton) {
  highlightButton.addEventListener("click", highlightCards);
}
