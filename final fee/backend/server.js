const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Load users file
const USERS_FILE = __dirname + "/users.json";

// Read JSON helper
function readUsers() {
  const data = fs.readFileSync(USERS_FILE);
  return JSON.parse(data);
}

// Write JSON helper
function writeUsers(users) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

// ➤ SIGNUP API
app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  const users = readUsers();

  // Prevent duplicate signup
  if (users.find(u => u.email === email)) {
    return res.json({ success: false, message: "Email already registered!" });
  }

  users.push({ name, email, password });
  writeUsers(users);

  return res.json({ success: true, message: "Signup successful!" });
});

// ➤ LOGIN API
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const users = readUsers();
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    return res.json({ success: false, message: "Invalid email or password" });
  }

  return res.json({
    success: true,
    message: "Login successful!",
    user: { name: user.name, email: user.email }
  });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
