# 👉 1- let, const, var — Variable Declarations

## 🔹 Key Concept:

- var: Function-scoped (Old way)
- let: Block-scoped (Newer and preferred)
- const: Block-scoped and cannot be reassigned

### ✅ Real-World Example

1: Shopping Cart

```js
let cartItems = 0; // variable count can change
const shippingCharge = 50; // fixed cost

function addItemToCart() {
  cartItems++; // update on adding item
  console.log(`Cart now has ${cartItems} items.`);
}
```

### 👨‍💻 Use Case:

- let used for changing cart count.
- const used for constant charge (cannot be reassigned).
- We avoid var to prevent bugs due to its function scope issues.

### ✅ Example 2: Login Form

```js
function loginUser(username, password) {
  const isAdmin = username === "admin"; // constant after first check
  let isLoggedIn = false;

  if (username && password) {
    isLoggedIn = true; // we change this after validation
  }

  console.log(`User: ${username}, Logged In: ${isLoggedIn}, Admin: ${isAdmin}`);
}
```

# 👉 2- Primitive Data Types

## 🔹 Key Concept :

Primitive types in JS:

- String: "Hello"
- Number: 42
- Boolean: true/false
- Null: empty or unknown
- Undefined: declared but not assigned

```js
const name = "John Doe"; // String
const age = 30; // Number
const isPremiumUser = true; // Boolean
const address = null; // User didn’t provide address
let phone; // Undefined, not yet given

console.log(`Name: ${name}, Age: ${age}, Premium: ${isPremiumUser}`);
```

### 👨‍💻 Use Case:

- We use primitive data to hold user profile values in a user management system.
- null shows optional data not provided.
- undefined helps identify missing input.

# 👉 3. Type Conversion & Coercion

## 🔹 Key Concept :

- **Type Conversion**: Manually converting one type to another using String(), Number(), etc.
- **Type Coercion**: JS automatically changes type (e.g., "5" + 1 → "51")

```js
const price = "100"; // string from input field
const tax = 18;

const total = Number(price) + tax; // Convert string to number
console.log("Total Price:", total); // 118
```

### 👨‍💻 Use Case:

- Input fields in HTML return string values.
- We must convert to Number before calculations.

#### ⚠️ Type Coercion Example:

```js
console.log("5" + 1); // "51" → string, not number!
console.log("5" - 1); // 4 → JS coerces to number
```

## ✅ Practice (read and type in console below code)

```js
const inputAge = prompt("Enter your age:"); // returns string
if (Number(inputAge) >= 18) {
  console.log("You can register.");
} else {
  console.log("Underage.");
}
```
