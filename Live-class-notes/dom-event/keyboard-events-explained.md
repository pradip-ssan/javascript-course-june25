# 🔹 Keyboard Events — Real-World Examples

---

## 1. `keydown`
**Use Case:** Detecting **keyboard shortcuts**, enabling **real-time form navigation**, or triggering actions like search.

### Example 1: Keyboard Shortcuts (e.g. Ctrl + S to "Save")

```html
<script>
  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key === "s") {
      e.preventDefault();
      alert("Custom Save Shortcut Triggered!");
    }
  });
</script>
```

✅ Try pressing `Ctrl + S` — instead of browser save, your custom action runs.

---

### Example 2: Press `Enter` to Submit a Search

```html
<input type="text" id="search" placeholder="Type and press Enter to search" />

<script>
  document.getElementById("search").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      alert(`Searching for: ${e.target.value}`);
    }
  });
</script>
```

✅ Press `Enter` in the input field to simulate search behavior.

---

## 2. `keyup`
**Use Case:** Use **after key release** to trigger **password strength check**, **autocomplete**, or validation.

### Example 1: Password Strength Indicator

```html
<input type="password" id="password" placeholder="Enter password" />
<p id="strength">Strength: </p>

<script>
  document.getElementById("password").addEventListener("keyup", (e) => {
    const pwd = e.target.value;
    let strength = "Weak";
    if (pwd.length >= 8 && /[A-Z]/.test(pwd) && /\d/.test(pwd)) {
      strength = "Strong";
    } else if (pwd.length >= 5) {
      strength = "Medium";
    }
    document.getElementById("strength").textContent = `Strength: ${strength}`;
  });
</script>
```

✅ Type into the password field to see the strength indicator update on key **release**.