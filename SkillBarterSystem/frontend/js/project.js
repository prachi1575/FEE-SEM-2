document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("open");
    });

    document.querySelector(".hero").classList.add("animate-dark");

    window.scrollToForm = () => {
        document.getElementById("post-skill").scrollIntoView({ behavior: "smooth" });
    };

    document.getElementById("skillForm").addEventListener("submit", function (e) {
        e.preventDefault();

        let name = document.getElementById("name").value;
        let teach = document.getElementById("teachSkill").value;
        let learn = document.getElementById("learnSkill").value;

        let card = document.createElement("div");
        card.classList.add("skill-card");
        card.innerHTML = `
            <h3>${name}</h3>
            <p><strong>Teaches:</strong> ${teach}</p>
            <p><strong>Wants to Learn:</strong> ${learn}</p>
        `;

        document.getElementById("skillList").appendChild(card);
        document.getElementById("skillForm").reset();
    });

    const elementsToAnimate = document.querySelectorAll(
        ".postSkillHeading, .skillHeading, .reviewHeading, .form-section"
    );

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains("form-section")) {
                        entry.target.classList.add("animate-upFade");
                    } else {
                        entry.target.classList.add("animate-underline");
                    }
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.7 }
    );

    elementsToAnimate.forEach((el) => observer.observe(el));

    const testimonials = document.querySelectorAll(".testimonial");

    const testimonialObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    testimonials.forEach((testimonial, index) => {
                        setTimeout(() => {
                            testimonial.classList.add("fade-in-up");
                        }, index * 300);
                    });
                    testimonialObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.5} // Trigger as soon as element starts appearing
    );

    const testimonialSection = document.querySelector(".testimonials-section");
    testimonialObserver.observe(testimonialSection);
});





const testimonials = document.querySelectorAll('.testimonial');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // stop observing after first trigger
        }
    });
}, { threshold: 1 });

testimonials.forEach(t => observer.observe(t));