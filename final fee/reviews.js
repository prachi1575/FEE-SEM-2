// reviews.js — Backend Connected Version

document.addEventListener("DOMContentLoaded", () => {

  const reviewList = document.getElementById("reviewList");
  const reviewForm = document.getElementById("reviewForm");
  const stars = document.querySelectorAll("#starContainer i");
  let selectedRating = 0;

  // Load reviews from backend
  function loadReviews() {
    fetch("http://localhost:5000/api/reviews")
      .then(res => res.json())
      .then(data => renderReviews(data))
      .catch(err => {
        reviewList.innerHTML = "<p style='color:red'>Failed to load reviews</p>";
      });
  }

  // Render reviews
  function renderReviews(reviews) {
    reviewList.innerHTML = "";

    if (!reviews.length) {
      reviewList.innerHTML = "<p>No reviews yet. Be the first!</p>";
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

  // POST review to backend
  function saveReview(name, text, rating) {
    fetch("http://localhost:5000/api/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, text, rating })
    })
      .then(() => {
        alert("Thank you for your review!");
        loadReviews();
      })
      .catch(err => {
        alert("Error posting review.");
      });
  }

  // Star selection
  stars.forEach(star => {
    star.addEventListener("click", () => {
      selectedRating = parseInt(star.dataset.rating);
      stars.forEach(s =>
        s.classList.toggle("active", parseInt(s.dataset.rating) <= selectedRating)
      );
    });
  });

  // Submit form
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
  });

  loadReviews();
});
// Load users
const usersFile = path.join(__dirname, "users.json");

function loadUsers() {
  return JSON.parse(fs.readFileSync(usersFile, "utf8"));
}

function saveUsers(users) {
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
}

// SIGNUP (POST)
app.post("/api/signup", (req, res) => {
  const { name, email, password } = req.body;

  const users = loadUsers();

  // Check if email exists
  if (users.find(u => u.email === email)) {
    return res.status(400).json({ message: "Email already registered" });
  }

  users.push({ name, email, password });
  saveUsers(users);

  res.json({ message: "Signup successful" });
});

// LOGIN (POST)
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  const users = loadUsers();

  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json({
    message: "Login successful",
    name: user.name,
    email: user.email
  });
});
