// index.js - Trade Bridge (Backend Connected Version)

document.addEventListener("DOMContentLoaded", () => {
  
  /* -----------------------------------------
     ANIMATIONS + NAVBAR + HAMBURGER
  ------------------------------------------ */

  const getTriggerPoint = () => window.innerHeight * 0.7;

  window.addEventListener("load", () => {
    const hero = document.querySelector(".hero");
    if (hero) {
      hero.style.backgroundSize = "110%";
      hero.style.transition = "background-size 2s ease-out";
      setTimeout(() => (hero.style.backgroundSize = "100%"), 100);
    }
    handleScrollAnimations();
  });

  const headings = document.querySelectorAll(".postSkillHeading, .skillHeading, .reviewHeading");
  const animatedHeadings = new Set();

  function handleHeadingsAnimation() {
    const trigger = getTriggerPoint();
    headings.forEach(h => {
      const r = h.getBoundingClientRect();
      if (r.top <= trigger && !animatedHeadings.has(h)) {
        h.classList.add("animate-underline");
        animatedHeadings.add(h);
      }
    });
  }

  // const formSection = document.querySelector(".form-section");
  // let formAnimated = false;

  // function handleFormAnimation() {
  //   const trigger = getTriggerPoint();
  //   const r = formSection?.getBoundingClientRect();
  //   if (r && r.top <= trigger && !formAnimated) {
  //     formSection.classList.add("visible");
  //     formAnimated = true;
  //   }
  // }

  function handleScrollAnimations() {
    handleHeadingsAnimation();
    handleFormAnimation();
  }

  window.addEventListener("scroll", handleScrollAnimations);
  window.addEventListener("resize", handleScrollAnimations);

  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("open");
    });

    navLinks.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        hamburger.classList.remove("active");
        navLinks.classList.remove("open");
      }
    });
  }

  /* -----------------------------------------
     OFFERS (FULL BACKEND VERSION)
  ------------------------------------------ */

  const skillList = document.getElementById("skillList");

  function escapeHtml(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Render offers
  function renderOffers(offers) {
    if (!skillList) return;

    skillList.innerHTML = "";

    if (!offers.length) {
      skillList.innerHTML = "<p>No offers available.</p>";
      return;
    }

    offers.forEach(offer => {
      const card = document.createElement("div");
      card.className = "skill-card";

      card.innerHTML = `
        <h3>${escapeHtml(offer.name)}</h3>
        <p><strong>Offers:</strong> ${escapeHtml(offer.have)}</p>
        <p><strong>Wants:</strong> ${escapeHtml(offer.want)}</p>
      `;

      skillList.appendChild(card);
    });
  }

  // Fetch offers FROM BACKEND
  function fetchOffers() {
    fetch("http://localhost:5000/api/offers")
      .then(res => res.json())
      .then(data => renderOffers(data))
      .catch(err => {
        console.error(err);
        if (skillList) {
          skillList.innerHTML = "<p style='color:red;'>Failed to load offers.</p>";
        }
      });
  }

  fetchOffers();

  /* -----------------------------------------
     POST OFFER FORM → SEND TO BACKEND
  ------------------------------------------ */

  const form = document.getElementById("skillForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name")?.value?.trim() || "Anonymous";
      const teachSkill = document.getElementById("teachSkill")?.value?.trim();
      const learnSkill = document.getElementById("learnSkill")?.value?.trim();

      const newOffer = {
        name,
        have: teachSkill,
        want: learnSkill
      };

      fetch("http://localhost:5000/api/offers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newOffer)
      })
        .then(() => {
          form.reset();
          alert("Offer posted successfully!");
          fetchOffers();
        })
        .catch(err => {
          console.error("Error posting:", err);
          alert("Failed to post offer.");
        });
    });
  }

});
// Show username if logged in
const user = JSON.parse(localStorage.getItem("user"));
const navbar = document.querySelector(".nav-links");

if (user) {
  navbar.innerHTML = `
    <li><a href="index.html#home" class="active">Home</a></li>
    <li><a href="index.html#post-skill">Post Offer</a></li>
    <li><a href="offers.html">Offers</a></li>
    <li><a href="reviews.html">Reviews</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="contact.html">Contact</a></li>
    <li style="color:yellow; font-weight:600;">Hi, ${user.name}</li>
    <li><a href="#" id="logoutBtn">Logout</a></li>
  `;
}

// Logout
document.addEventListener("click", (e) => {
  if (e.target.id === "logoutBtn") {
    localStorage.removeItem("user");
    window.location.reload();
  }
});