// Use relative path so Vite proxy forwards it to backend
const API = "";

// -------------------- SIGNUP --------------------
const signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    try {
      const res = await fetch("/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      alert(data.message);

      if (data.success) {
        window.location.href = "login.html";
      }

    } catch (err) {
      console.error("Signup Error:", err);
      alert("Server Error! Backend not reachable.");
    }
  });
}


// -------------------- LOGIN --------------------
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    try {
      const res = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      alert(data.message);

      if (data.success) {
        localStorage.setItem("user", JSON.stringify(data.user));
        window.location.href = "index.html";
      }

    } catch (err) {
      console.error("Login Error:", err);
      alert("Server Error! Backend not reachable.");
    }
  });
}
