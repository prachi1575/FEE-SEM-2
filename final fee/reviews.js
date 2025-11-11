// reviews.js - Handles review submission and rendering

document.addEventListener("DOMContentLoaded", () => {
  const reviewList = document.getElementById("reviewList");
  const reviewForm = document.getElementById("reviewForm");
  const stars = document.querySelectorAll("#starContainer i");
  let selectedRating = 0;

  // Load reviews from localStorage
  function loadReviews() {
    const data = JSON.parse(localStorage.getItem("tradebridge_reviews")) || [];
    renderReviews(data);
  }

  // Render reviews dynamically
  function renderReviews(reviews) {
    reviewList.innerHTML = "";
    if (!reviews.length) {
      reviewList.innerHTML = "<p>No reviews yet. Be the first to share!</p>";
      return;
    }

    reviews.forEach(r => {
      const div = document.createElement("div");
      div.className = "review-card fade-up";

      div.innerHTML = `
        <h3>${r.name}</h3>
        <div class="stars-static">
          ${"★".repeat(r.rating)}${"☆".repeat(5 - r.rating)}
        </div>
        <p>${r.text}</p>
      `;
      reviewList.appendChild(div);
    });
  }

  // Save review
  function saveReview(name, text, rating) {
    const reviews = JSON.parse(localStorage.getItem("tradebridge_reviews")) || [];
    reviews.unshift({ name, text, rating });
    localStorage.setItem("tradebridge_reviews", JSON.stringify(reviews));
    loadReviews();
  }

  // Star selection logic
  stars.forEach(star => {
    star.addEventListener("click", () => {
      selectedRating = parseInt(star.dataset.rating);
      stars.forEach(s => s.classList.toggle("active", parseInt(s.dataset.rating) <= selectedRating));
    });
  });

  // Handle form submission
  reviewForm.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("reviewerName").value.trim();
    const text = document.getElementById("reviewText").value.trim();

    if (!selectedRating) {
      alert("Please select a rating.");
      return;
    }

    saveReview(name || "Anonymous", text, selectedRating);
    reviewForm.reset();
    stars.forEach(s => s.classList.remove("active"));
    selectedRating = 0;
    alert("Thank you for your review!");
  });

  loadReviews();
});
