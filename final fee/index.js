// index.js - Trade Bridge (viva-ready)
// Put this file in the same folder as index.html and data.json

document.addEventListener("DOMContentLoaded", () => {
  /* -------------------------
     Helper: trigger point for scroll animations
     ------------------------- */
  const getTriggerPoint = () => window.innerHeight * 0.7;

  /* -------------------------
     Hero zoom-out on load (optional)
     ------------------------- */
  window.addEventListener("load", () => {
    const hero = document.querySelector(".hero");
    if (hero) {
      hero.style.backgroundSize = "110%";
      hero.style.transition = "background-size 2s ease-out";
      setTimeout(() => (hero.style.backgroundSize = "100%"), 100);
    }
    handleScrollAnimations();
  });

  /* -------------------------
     Simple scroll-based animations
     ------------------------- */
  const headings = document.querySelectorAll(".postSkillHeading, .skillHeading, .reviewHeading");
  const animatedHeadings = new Set();

  function handleHeadingsAnimation() {
    const trigger = getTriggerPoint();
    headings.forEach(h => {
      if (!h) return;
      const r = h.getBoundingClientRect();
      if (r.top <= trigger && !animatedHeadings.has(h)) {
        h.classList.add("animate-underline");
        animatedHeadings.add(h);
      }
    });
  }

  const formSection = document.querySelector(".form-section");
  let formAnimated = false;
  function handleFormAnimation() {
    if (!formSection) return;
    const trigger = getTriggerPoint();
    const r = formSection.getBoundingClientRect();
    if (r.top <= trigger && !formAnimated) {
      formSection.classList.add("visible");
      formAnimated = true;
    }
  }

  const testimonials = document.querySelectorAll(".testimonials");
  const animatedTestimonials = new Set();
  function handleTestimonialsAnimation() {
    const trigger = getTriggerPoint();
    testimonials.forEach(el => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      if (r.top <= trigger && r.bottom > 0 && !animatedTestimonials.has(el)) {
        el.classList.add("visible");
        animatedTestimonials.add(el);
      }
    });
  }

  let skillCards = [];
  const animatedCards = new Set();
  function handleSkillCardAnimation() {
    const trigger = getTriggerPoint();
    skillCards.forEach((card, i) => {
      if (!card) return;
      const r = card.getBoundingClientRect();
      if (r.top <= trigger && r.bottom > 0 && !animatedCards.has(card)) {
        setTimeout(() => card.classList.add("visible"), i * 120);
        animatedCards.add(card);
      }
    });
  }

  function handleScrollAnimations() {
    handleHeadingsAnimation();
    handleFormAnimation();
    handleTestimonialsAnimation();
    handleSkillCardAnimation();
  }
  window.addEventListener("scroll", handleScrollAnimations, { passive: true });
  window.addEventListener("resize", handleScrollAnimations);
  handleScrollAnimations();

  /* -------------------------
     Hamburger menu (mobile)
     ------------------------- */
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("open");
    });

    // Close nav on link click (mobile friendly)
    navLinks.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        hamburger.classList.remove("active");
        navLinks.classList.remove("open");
      }
    });
  }

  /* -------------------------
     Offers rendering & storage
     - loads from localStorage if present
     - otherwise fetches data.json
     - posts are saved to localStorage
     ------------------------- */
  const skillList = document.getElementById("skillList");

  // Utility: render offers array into DOM
  function renderOffers(offers) {
    if (!skillList) return;
    skillList.innerHTML = ""; // clear
    if (!offers || !offers.length) {
      skillList.innerHTML = "<p>No offers available.</p>";
      return;
    }

    offers.forEach(offer => {
      const card = document.createElement("div");
      card.className = "skill-card";

      // normalize have/want to avoid .split errors
      const haveLabel = offer.have || "";
      const wantLabel = offer.want || "";

      // safe split: if ":" exists show left/right otherwise show whole text
      function splitLabel(text) {
        if (!text) return { left: "", right: "" };
        const idx = text.indexOf(":");
        if (idx === -1) return { left: text.trim(), right: "" };
        return { left: text.slice(0, idx).trim(), right: text.slice(idx + 1).trim() };
      }

      const h = splitLabel(haveLabel);
      const w = splitLabel(wantLabel);

      // build inner HTML
      card.innerHTML = `
        <h3>${escapeHtml(offer.name || "Anonymous")}</h3>
        <p><strong>${escapeHtml(h.left)}${h.right ? ":" : ""}</strong> ${escapeHtml(h.right)}</p>
        <p><strong>${escapeHtml(w.left)}${w.right ? ":" : ""}</strong> ${escapeHtml(w.right)}</p>
      `;

      skillList.appendChild(card);
    });

    // update node list used for animation
    skillCards = Array.from(document.querySelectorAll(".skill-card"));
    // run animation to reveal if in view
    setTimeout(handleSkillCardAnimation, 150);
  }

  // Small HTML-escape helper (for safety)
  function escapeHtml(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Try load offers from localStorage
  function loadOffersFromStorage() {
    try {
      const raw = localStorage.getItem("tradebridge_offers");
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
      return null;
    } catch (e) {
      console.warn("localStorage offers invalid", e);
      return null;
    }
  }

  // Save offers to localStorage
  function saveOffersToStorage(offers) {
    try {
      localStorage.setItem("tradebridge_offers", JSON.stringify(offers));
    } catch (e) {
      console.warn("Failed to save offers", e);
    }
  }

  // Fetch offers (prefers localStorage)
  function fetchOffers() {
    const fromStorage = loadOffersFromStorage();
    if (fromStorage) {
      renderOffers(fromStorage);
      return;
    }

    // fallback: fetch data.json
    fetch("data.json")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch data.json");
        return res.json();
      })
      .then(data => {
        const offers = (data && data.offers) ? data.offers : [];
        renderOffers(offers);
        // initialize storage with remote offers so student posts persist locally
        saveOffersToStorage(offers);
      })
      .catch(err => {
        console.error("Could not load offers:", err);
        if (skillList) {
          skillList.innerHTML = "<p style='color:red;'>Failed to load offers.</p>";
        }
      });
  }

  fetchOffers();

  /* -------------------------
     Form: Post Offer -> saves to localStorage and updates UI
     ------------------------- */
  const form = document.getElementById("skillForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name")?.value?.trim() || "Anonymous";
      const teachSkill = document.getElementById("teachSkill")?.value?.trim() || "";
      const learnSkill = document.getElementById("learnSkill")?.value?.trim() || "";

      // Build same format used in data.json
      const newOffer = {
        name,
        have: teachSkill ? `Teaches: ${teachSkill}` : "Have: —",
        want: learnSkill ? `Wants to Learn: ${learnSkill}` : "Wants: —"
      };

      // load, push, save, render
      const existing = loadOffersFromStorage() || [];
      existing.unshift(newOffer); // newest first
      saveOffersToStorage(existing);
      renderOffers(existing);

      // small feedback
      alert("Offer posted! (Saved locally in your browser)");
      form.reset();
      // scroll to offers
      document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
    });
  }
});
