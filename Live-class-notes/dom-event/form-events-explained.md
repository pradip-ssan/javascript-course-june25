# 📝 Form Events in JavaScript – Real World Examples

This guide covers essential form events in JavaScript with real-world code examples.

## 🔹 Form Events Table

| **Event Name** | **Triggered When...**                    | **Real-World Use Case**             |
| -------------- | ---------------------------------------- | ----------------------------------- |
| `submit`       | Form is submitted                        | Login, registration, checkout       |
| `change`       | Value of input, select, checkbox changes | Filters, forms, settings            |
| `input`        | Value changes (while typing)             | Live validation, search suggestions |
| `focus`        | Element receives focus                   | Show helper text                    |
| `blur`         | Element loses focus                      | Validate field                      |
| `reset`        | Form is reset                            | Clear filters                       |
| `invalid`      | Constraint validation fails              | Show error messages                 |

---

## 📌 1. `submit`

```html
<form id="loginForm">
  <input type="text" name="username" required />
  <button type="submit">Login</button>
</form>

<script>
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // prevent default submission
    alert("Form submitted!");
  });
</script>
```

---

## 📌 2. `change`

```html
<select id="filter">
  <option value="all">All</option>
  <option value="active">Active</option>
  <option value="completed">Completed</option>
</select>

<script>
  document.getElementById("filter").addEventListener("change", function (e) {
    console.log("Filter changed to:", e.target.value);
  });
</script>
```

---

## 📌 3. `input`

```html
<input type="text" id="searchBox" placeholder="Search..." />

<script>
  document.getElementById("searchBox").addEventListener("input", function (e) {
    console.log("Searching for:", e.target.value);
  });
</script>
```

---

## 📌 4. `focus`

```html
<input type="text" id="email" placeholder="Enter your email" />

<script>
  document.getElementById("email").addEventListener("focus", function () {
    console.log("Input focused!");
  });
</script>
```

---

## 📌 5. `blur`

```html
<input type="text" id="username" required />

<script>
  document.getElementById("username").addEventListener("blur", function () {
    if (this.value === "") {
      alert("Username cannot be empty!");
    }
  });
</script>
```

---

## 📌 6. `reset`

```html
<form id="filterForm">
  <input type="text" />
  <button type="reset">Reset Filters</button>
</form>

<script>
  document.getElementById("filterForm").addEventListener("reset", function () {
    console.log("Form reset!");
  });
</script>
```

---

## 📌 7. `invalid`

```html
<form>
  <input type="email" id="userEmail" required />
  <button>Submit</button>
</form>

<script>
  document.getElementById("userEmail").addEventListener("invalid", function () {
    alert("Please enter a valid email address.");
  });
</script>
```
