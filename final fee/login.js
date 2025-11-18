document.getElementById("loginForm").addEventListener("submit", e => {
  e.preventDefault();

  const email = loginEmail.value.trim();
  const pass = loginPassword.value.trim();

  const user = JSON.parse(localStorage.getItem("tradebridge_user"));

  if (!user || user.email !== email || user.password !== pass) {
    alert("Invalid login details!");
    return;
  }

  alert("Login successful!");
  window.location.href = "index.html";
});
