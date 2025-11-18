document.getElementById("signupForm").addEventListener("submit", e => {
  e.preventDefault();

  const name = signupName.value.trim();
  const email = signupEmail.value.trim();
  const pass = signupPassword.value.trim();

  const user = { name, email, password: pass };
  localStorage.setItem("tradebridge_user", JSON.stringify(user));

  alert("Account created successfully!");
  window.location.href = "login.html";
});
