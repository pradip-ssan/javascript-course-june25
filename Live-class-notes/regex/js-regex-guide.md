# 📘 JavaScript Regular Expressions (Regex) – Complete Guide

Regex (short for **Regular Expression**) is a **powerful tool for matching patterns in strings**. In JavaScript, regular expressions are used for **searching**, **validating**, **extracting**, and **replacing** text.

---

## 🔤 What Is a Regular Expression?

A **regular expression** is a sequence of characters that define a search pattern.

```js
const regex = /pattern/flags;
```

- `/pattern/` is the actual regex.
- `flags` modify how the pattern behaves (`g`, `i`, `m`, etc.).

---

## ✅ Basic Syntax and Characters

| Pattern  | Description                        | Example        | Match               |
| -------- | ---------------------------------- | -------------- | ------------------- |
| `.`      | Any character except newline       | `/c.t/`        | `"cat"`, `"cut"`    |
| `\d`     | Digit (0-9)                        | `/\d/`         | `"3"`               |
| `\D`     | Non-digit                          | `/\D/`         | `"a"`               |
| `\w`     | Word character (a-z, A-Z, 0-9, \_) | `/\w/`         | `"A"`, `"3"`        |
| `\W`     | Non-word character                 | `/\W/`         | `"!"`               |
| `\s`     | Whitespace                         | `/\s/`         | `" "`               |
| `\S`     | Non-whitespace                     | `/\S/`         | `"x"`               |
| `^`      | Start of string                    | `/^Hi/`        | `"Hi there"`        |
| `$`      | End of string                      | `/end$/`       | `"The end"`         |
| `[...]`  | Any one character in brackets      | `/[aeiou]/`    | `"a"`, `"e"`, `"o"` |
| `[^...]` | Not any character in brackets      | `/[^0-9]/`     | `"a"`               |
| `(a\|b)` | Either a or b                      | `/(cat\|dog)/` | `"cat"`, `"dog"`    |
| `()`     | Grouping                           | `/(ab)+/`      | `"abab"`            |

## 🔁 Quantifiers

| Symbol  | Meaning         | Example    | Matches        |
| ------- | --------------- | ---------- | -------------- |
| `*`     | 0 or more       | `/a*/`     | "", "a", "aaa" |
| `+`     | 1 or more       | `/a+/`     | "a", "aa"      |
| `?`     | 0 or 1          | `/a?/`     | "", "a"        |
| `{n}`   | Exactly n       | `/a{2}/`   | "aa"           |
| `{n,}`  | n or more       | `/a{2,}/`  | "aaa", "aaaa"  |
| `{n,m}` | Between n and m | `/a{2,4}/` | "aa", "aaa"    |

---

## 🏷️ Flags

| Flag | Meaning                        |
| ---- | ------------------------------ |
| `g`  | Global search                  |
| `i`  | Case-insensitive search        |
| `m`  | Multiline search (`^` and `$`) |
| `s`  | Dot matches newline (`\n`)     |
| `u`  | Unicode support                |
| `y`  | Sticky search                  |

---

## 🔍 String Methods with Regex

### 1. `test()`

Returns `true` or `false` if pattern is found.

```js
/\d/.test("abc123"); // true
```

### 2. `exec()`

Returns first match as array or `null`.

```js
/\d+/.exec("Age: 45"); // ["45"]
```

### 3. `match()`

Returns an array of matches or `null`.

```js
"abc123xyz".match(/\d+/); // ["123"]
```

### 4. `matchAll()` (ES2020+)

Returns iterator with all matches.

```js
[..."cat bat rat".matchAll(/\w+/g)];
```

### 5. `replace()`

Replaces matched value.

```js
"abc123".replace(/\d+/, "***"); // "abc***"
```

With callback:

```js
"abc123".replace(/\d+/, (match) => parseInt(match) + 1); // "abc124"
```

### 6. `split()`

Splits by regex.

```js
"one,two;three".split(/[,;]/); // ["one", "two", "three"]
```

---

## 🔄 Anchors & Boundaries

| Anchor | Description          | Example     |
| ------ | -------------------- | ----------- |
| `^`    | Start of string/line | `/^a/`      |
| `$`    | End of string/line   | `/z$/`      |
| `\b`   | Word boundary        | `/\bcat\b/` |
| `\B`   | Not word boundary    | `/\Bcat\B/` |

---

## 💡 Escape Characters

To use special characters literally (`.`, `*`, `?`, etc.), escape with `\`.

```js
/\./.test("3.14"); // true
```

---

## 🧪 Lookahead & Lookbehind (Advanced)

| Type                | Syntax    | Description                      |
| ------------------- | --------- | -------------------------------- |
| Positive Lookahead  | `X(?=Y)`  | Match `X` if followed by `Y`     |
| Negative Lookahead  | `X(?!Y)`  | Match `X` if NOT followed by `Y` |
| Positive Lookbehind | `(?<=Y)X` | Match `X` if preceded by `Y`     |
| Negative Lookbehind | `(?<!Y)X` | Match `X` if NOT preceded by `Y` |

```js
/\d+(?=kg)/.test("75kg"); // true
/(?<=\$)\d+/.exec("$100"); // ["100"]
```

---

## 🧠 Named Capture Groups

```js
const result = /(?<area>\d{3})-(?<number>\d{7})/.exec("123-4567890");
console.log(result.groups.area); // "123"
```

---

## 🛠️ Real-World Examples

### 1. **Email Validation**

```js
/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test("abc@example.com");
```

### 2. **Phone Number Validation**

```js
/^\d{10}$/.test("9876543210");
```

### 3. **Extracting Hashtags**

```js
"#code #js".match(/#\w+/g); // ["#code", "#js"]
```

---

## 📌 Summary Cheat Sheet

```js
// Common regex:
\d       // digit
\w       // word char
\s       // whitespace
.        // any char (except newline)
^ $      // start & end
[...]    // character set
[^...]   // negated set
(a|b)    // alternation
{n,m}    // quantity
\b       // word boundary
(?=...)  // lookahead
(?<=...) // lookbehind

// Flags:
g // global
i // case-insensitive
m // multiline
s // dot matches newline
```

---
