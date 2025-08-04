function validateInputs() {
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const password = document.getElementById("password");

  // Email: basic validation
  const emailRegex = /^[\w.-]+@[\w.-]+\.\w{2,}$/;
  markField(email, emailRegex.test(email.value));

  // Phone: format 123-456-7890
  const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
  markField(phone, phoneRegex.test(phone.value));

  // Password: min 8 chars, at least one digit
  const passRegex = /^(?=.*\d).{8,}$/;
  markField(password, passRegex.test(password.value));
}

function markField(field, isValid) {
  field.className = isValid ? "valid" : "invalid";
}

// 🔍 Search for a keyword in text
function searchWord() {
  const text = document.getElementById("textData").value;
  const word = document.getElementById("searchWord").value;
  const regex = new RegExp(word, "gi"); // case-insensitive global
  const matches = text.match(regex);

  document.getElementById("output").innerHTML = matches
    ? `✅ Found ${matches.length} matches: <b>${matches.join(", ")}</b>`
    : "❌ No match found.";
}

// 🔁 Replace offensive words
function replaceBadWords() {
  const text = document.getElementById("textData").value;
  const badWords = /damn|stupid|idiot/gi;
  const clean = text.replace(badWords, "****");

  document.getElementById(
    "output"
  ).innerHTML = `<p>🔁 Cleaned Text:</p><pre>${clean}</pre>`;
}

// 🔎 Extract domain names and hashtags
function extractInfo() {
  const text = document.getElementById("textData").value;

  const domains = text.match(/@([\w.-]+\.\w{2,})/g) || [];
  const hashtags = text.match(/#\w+/g) || [];

  document.getElementById("output").innerHTML = `
    <p>📧 Domains Found: ${domains.join(", ") || "None"}</p>
    <p>#️⃣ Hashtags Found: ${hashtags.join(", ") || "None"}</p>
  `;
}
