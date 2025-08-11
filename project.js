// Smooth scroll to form
function scrollToForm() {
    document.getElementById("post-skill").scrollIntoView({ behavior: "smooth" });
}

// Handle form submission
document.getElementById("skillForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let teach = document.getElementById("teachSkill").value;
    let learn = document.getElementById("learnSkill").value;

    // Create new skill card
    let card = document.createElement("div");
    card.classList.add("skill-card");
    card.innerHTML = `
        <h3>${name}</h3>
        <p><strong>Teaches:</strong> ${teach}</p>
        <p><strong>Wants to Learn:</strong> ${learn}</p>
    `;

    // Add to skill list
    document.getElementById("skillList").appendChild(card);

    // Clear form
    document.getElementById("skillForm").reset();
});
