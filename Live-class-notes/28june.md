# The difference between statements, values, and expressions

## 1. What is a Value?

A value is the data itself — something that can be stored in a variable, returned from a function, or used in an expression.

### ✅ Example

```js
"hello"; // string value
42; // number value
true; // boolean value
null[(1, 2, 3)]; // null value // array (also a value)
{
  name: "John";
} // object (also a value)
```

### 👉 Every literal you write in JS is a value.

## 2. What is an Expression?

An expression is any valid unit of code that evaluates to a value.
It can be simple (like a literal) or complex (like a math operation or function call).

### ✅ Example

```js
2 + 3; // expression => evaluates to 5
"Hi" + " " + "There"; // expression => evaluates to "Hi There"
isLoggedIn && age > 18; // expression => evaluates to true or false
getUserName(); // expression => returns a value
```

### 👉 Expressions always produce a value and can be used anywhere a value is expected (e.g., inside a variable assignment).

## 3. What is a Statement?

A statement performs an action. It’s a complete instruction for the computer to execute something — like declaring a variable, running a loop, or making a decision.

### ✅ Example

```js
let x = 5;            // Variable declaration (statement)
if (x > 3) { ... }    // If statement
for (let i = 0; i < 5; i++) { ... } // For loop (statement)
console.log("Hi");    // Function call statement

```

### 👉 A statement does something, like declare, assign, loop, or log.

## Key Differences Between Value, Expression, and Statement

| Type           | Produces a value? | Executes an action? | Can be used in assignment?   | Example                             |
| -------------- | ----------------- | ------------------- | ---------------------------- | ----------------------------------- |
| **Value**      | ✅ Yes            | ❌ No               | ✅ Yes                       | `"hello"`, `100`, `true`            |
| **Expression** | ✅ Yes            | ❌ No (by itself)   | ✅ Yes                       | `2 + 3`, `"a" + "b"`, `func()`      |
| **Statement**  | ❌ Not always     | ✅ Yes              | ❌ (Can include expressions) | `if`, `let x = 5;`, `console.log()` |

## Code Example (All Together)

```js
let x = 10; // <-- Statement
let y = x * 2; // <-- Statement with expression (x * 2)
console.log(y > 10 ? "Big" : "Small"); // <-- Statement with complex expression
```

### 👇 Breakdown

- 10 is a value
- x \* 2 is an expression (evaluates to 20)
- let y = x \* 2; is a statement (it declares and assigns)
- "Big" and "Small" are values
- y > 10 ? "Big" : "Small" is an expression
- console.log(...) is a statement

# JavaScript operators

## ✅ 1. Arithmetic Operators

| Operator | Description         | Example       |
| -------- | ------------------- | ------------- |
| `+`      | Addition            | `10 + 5 = 15` |
| `-`      | Subtraction         | `10 - 5 = 5`  |
| `*`      | Multiplication      | `10 * 5 = 50` |
| `/`      | Division            | `10 / 2 = 5`  |
| `%`      | Modulus (Remainder) | `10 % 3 = 1`  |
| `**`     | Exponentiation      | `2 ** 3 = 8`  |
| `++`     | Increment           | `x++`         |
| `--`     | Decrement           | `x--`         |

### ✅ Real-world Example: Price Calculation in Cart

```js
let pricePerItem = 100;
let quantity = 3;
let discount = 50;

let total = pricePerItem * quantity - discount;
console.log("Total Price:", total); // 250
```

## ✅ 2. Assignment Operators

| Operator | Description         | Example                |
| -------- | ------------------- | ---------------------- |
| `=`      | Assignment          | `x = 10`               |
| `+=`     | Add and assign      | `x += 5` → `x = x + 5` |
| `-=`     | Subtract and assign | `x -= 2`               |
| `*=`     | Multiply and assign | `x *= 3`               |
| `/=`     | Divide and assign   | `x /= 2`               |
| `%=`     | Modulus and assign  | `x %= 2`               |

## ✅ 3. Comparison Operators

Used to compare two values and return a boolean (true or false).

| Operator | Description           | Example               |
| -------- | --------------------- | --------------------- |
| `==`     | Equal to (loose)      | `5 == "5"` → `true`   |
| `===`    | Strict equal to       | `5 === "5"` → `false` |
| `!=`     | Not equal (loose)     | `5 != "5"` → `false`  |
| `!==`    | Strict not equal      | `5 !== "5"` → `true`  |
| `>`      | Greater than          | `10 > 5` → `true`     |
| `<`      | Less than             | `2 < 4` → `true`      |
| `>=`     | Greater than or equal | `5 >= 5` → `true`     |
| `<=`     | Less than or equal    | `4 <= 5` → `true`     |

## ✅ Real-world Example: Age Validation for Signup

```js
let userAge = 17;

if (userAge >= 18) {
  console.log("You can register.");
} else {
  console.log("You must be 18+ to register.");
}
```

## ✅ 4. Logical Operators

| Operator | Name | Example                 |     |        |     |                |
| -------- | ---- | ----------------------- | --- | ------ | --- | -------------- |
| `&&`     | AND  | `true && true` → `true` |     |        |     |                |
| \`       |      | \`                      | OR  | \`true |     | false`→`true\` |
| `!`      | NOT  | `!true` → `false`       |     |        |     |                |

## ✅ Real-world Example: Login Validation

```js
let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
  console.log("Login successful!");
} else {
  console.log("Invalid credentials.");
}
```

## ✅ Another Example: Offer Check with OR

```js
let isMember = false;
let hasCoupon = true;

if (isMember || hasCoupon) {
  console.log("You get a discount!");
} else {
  console.log("No discount available.");
}
```

## ✅ Precedence and Associativity in JavaScript

### 🧠 1. Operator Precedence

Precedence determines which operator is evaluated first when there are multiple operators in a single expression.

```js
let result = 10 + 5 * 2; // What will this output?
```

### 🔹 Precedence Order Example Table (Simplified):

| Precedence | Operator             | Description                       |     |            |
| ---------- | -------------------- | --------------------------------- | --- | ---------- |
| 1          | `()`                 | Grouping (Parentheses)            |     |            |
| 2          | `**`                 | Exponentiation                    |     |            |
| 3          | `*`, `/`, `%`        | Multiplication, Division, Modulus |     |            |
| 4          | `+`, `-`             | Addition, Subtraction             |     |            |
| 5          | `>`, `<`, `>=`, `<=` | Comparisons                       |     |            |
| 6          | `==`, `===`, `!=`    | Equality                          |     |            |
| 7          | `&&`                 | Logical AND                       |     |            |
| 8          | \`                   |                                   | \`  | Logical OR |
| 9          | `=`, `+=`, `-=`      | Assignment operators              |     |            |

### ✅ Use parentheses () to override precedence for readability and control.

## ✅ JavaScript Operator Precedence & Associativity (Complete Reference)

| Precedence | Operator Type               | Operators                                                                                                | Associativity        |
| ---------- | --------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------- |
| 21         | Grouping                    | `()`                                                                                                     | N/A (explicit order) |
| 20         | Member Access & Computed    | `object.property`, `object["property"]`                                                                  | Left to Right        |
| 20         | Function Call               | `func()`                                                                                                 | Left to Right        |
| 19         | `new` (with argument list)  | `new MyClass()`                                                                                          | Right to Left        |
| 18         | Postfix Increment/Decrement | `expr++`, `expr--`                                                                                       | Left to Right        |
| 17         | Logical NOT, Unary          | `!`, `~`, `+`, `-`, `++x`, `--x`, `typeof`, `void`, `delete`                                             | Right to Left        |
| 16         | Exponentiation              | `**`                                                                                                     | **Right to Left**    |
| 15         | Multiplication / Division   | `*`, `/`, `%`                                                                                            | Left to Right        |
| 14         | Addition / Subtraction      | `+`, `-`                                                                                                 | Left to Right        |
| 13         | Bitwise Shift               | `<<`, `>>`, `>>>`                                                                                        | Left to Right        |
| 12         | Relational                  | `<`, `<=`, `>`, `>=`, `in`, `instanceof`                                                                 | Left to Right        |
| 11         | Equality                    | `==`, `!=`, `===`, `!==`                                                                                 | Left to Right        |
| 10         | Bitwise AND                 | `&`                                                                                                      | Left to Right        |
| 9          | Bitwise XOR                 | `^`                                                                                                      | Left to Right        |
| 8          | Bitwise OR                  | `\|`                                                                                                     | Left to Right        |
| 7          | Logical AND                 | `&&`                                                                                                     | Left to Right        |
| 6          | Logical OR                  | `\|\|`                                                                                                   | Left to Right        |
| 5          | Nullish Coalescing          | `??`                                                                                                     | Left to Right        |
| 4          | Conditional (Ternary)       | `condition ? expr1 : expr2`                                                                              | Right to Left        |
| 3          | Assignment                  | `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `**=`, `<<=`, `>>=`, `>>>=`, `&=`, `^=`, `\|=`, `??=`, `&&=`, `\|\|=` | Right to Left        |
| 2          | Yield                       | `yield`, `yield*`                                                                                        | Right to Left        |
| 1          | Comma                       | `,` (comma operator)                                                                                     | Left to Right        |

## ✅ What Are Conditional Statements?

They allow your program to make decisions based on conditions (true/false) and execute code accordingly.

## 🔹 1. if, else, else if

Used when you want to check multiple conditions in sequence.

```js
if (condition1) {
  // runs if condition1 is true
} else if (condition2) {
  // runs if condition2 is true
} else {
  // runs if none are true
}
```

## 🔹 2. switch

Used when comparing the same variable or expression to many possible values.

```js
switch (expression) {
  case value1:
    // code
    break;
  case value2:
    // code
    break;
  default:
  // code if no case matches
}
```

## ✅ Using if...else if:

```js
let role = "editor";

if (role === "admin") {
  console.log("Access to all features.");
} else if (role === "editor") {
  console.log("Access to edit content.");
} else if (role === "viewer") {
  console.log("Read-only access.");
} else {
  console.log("No access.");
}
```

## ✅ Using switch:

```js
let today = "Sunday";

switch (today) {
  case "Monday":
    console.log("10% off on electronics!");
    break;
  case "Tuesday":
    console.log("Buy 1 Get 1 Free on clothes!");
    break;
  case "Sunday":
    console.log("Free shipping on all orders!");
    break;
  default:
    console.log("Check out today's deals!");
}
```

## ✅ What is the Ternary Operator?

```js
condition ? expression_if_true : expression_if_false;
```

```js
let theme = "dark";

let buttonText =
  theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode";
console.log(buttonText); // Output: Switch to Light Mode
```

## ✅ Technique 1: Nested Ternary (Chained)

Used when you have multiple conditions and short outputs.

```js
condition1 ? value1 : condition2 ? value2 : condition3 ? value3 : defaultValue;
```

## Example

```js
let rating = 4;

let badge =
  rating >= 4.5
    ? "Excellent"
    : rating >= 4.0
    ? "Very Good"
    : rating >= 3.0
    ? "Good"
    : "Average";

console.log(badge); // Very Good
```
