const email = document.getElementById("email");
const password = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const togglePassword = document.getElementById("togglePassword");
const form = document.getElementById("form");
const userList = document.getElementById("userList");

// ✅ Email Regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ✅ Password Regex (min 6, one uppercase, one number)
const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

// 👀 Show/hide password toggle
togglePassword.addEventListener("change", () => {
  password.type = togglePassword.checked ? "text" : "password";
});

// 🎯 Real-time validation
email.addEventListener("input", () => {
  emailError.textContent = emailRegex.test(email.value)
    ? ""
    : "❌ Invalid email format";
});

password.addEventListener("input", () => {
  passwordError.textContent = passwordRegex.test(password.value)
    ? ""
    : "❌ Password must be 6+ chars, 1 uppercase & 1 number";
});

// ✅ On submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const validEmail = emailRegex.test(email.value);
  const validPassword = passwordRegex.test(password.value);

  if (!validEmail || !validPassword) {
    alert("❌ Please fix errors before submitting");
    return;
  }

  const user = {
    email: email.value,
    password: password.value,
  };

  // 📦 Save to localStorage
  const users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));

  // 🎉 Reset form and update list
  form.reset();
  showUsers();
});

// 📜 Display saved users
function showUsers() {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  userList.innerHTML = users
    .map(
      (u, i) =>
        `<div class="user"><strong>#${i + 1}</strong><br>Email: ${
          u.email
        }</div>`
    )
    .join("");
}

showUsers();
