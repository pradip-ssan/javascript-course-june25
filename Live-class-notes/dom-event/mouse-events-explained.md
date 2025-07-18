
# 🔹 1. Mouse Events — Explained with Real-World Code Examples

---

## 1. `click`  
✅ **Use Case:** Triggering actions like opening a modal, submitting a form, toggling visibility.

```html
<button id="openModalBtn">Open Modal</button>
<div id="modal" style="display: none;">This is a modal!</div>

<script>
  const modal = document.getElementById("modal");
  document.getElementById("openModalBtn").addEventListener("click", () => {
    modal.style.display = "block";
  });
</script>
```

---

## 2. `dblclick`  
✅ **Use Case:** Editing content, renaming files (like on desktop file rename).

```html
<p id="editableText">Double-click to edit me</p>

<script>
  const p = document.getElementById("editableText");
  p.addEventListener("dblclick", () => {
    const input = document.createElement("input");
    input.value = p.textContent;
    p.replaceWith(input);

    input.addEventListener("blur", () => {
      const newP = document.createElement("p");
      newP.id = "editableText";
      newP.textContent = input.value;
      input.replaceWith(newP);
    });
  });
</script>
```

---

## 3. `mousedown`  
✅ **Use Case:** Start dragging, show context menu manually, visual press effect.

```html
<div id="box" style="width:100px;height:100px;background:red;"></div>

<script>
  document.getElementById("box").addEventListener("mousedown", () => {
    console.log("Drag Start or Mouse Pressed");
  });
</script>
```

---

## 4. `mouseup`  
✅ **Use Case:** Drag end, releasing the mouse after press or draw.

```html
document.getElementById("box").addEventListener("mouseup", () => {
  console.log("Mouse Released – Drag End");
});
```

---

## 5. `mousemove`  
✅ **Use Case:** Drawing applications, real-time cursor tracking.

```html
document.addEventListener("mousemove", (e) => {
  console.log(\`Mouse at X: \${e.clientX}, Y: \${e.clientY}\`);
});
```

---

## 6. `mouseenter`  
✅ **Use Case:** Showing tooltips (non-bubbling = only triggers on direct match).

```html
<div id="tooltipTarget">Hover me</div>
<div id="tooltip" style="display:none;position:absolute;background:#000;color:#fff;padding:4px;">Tooltip!</div>

<script>
  const tooltip = document.getElementById("tooltip");
  const target = document.getElementById("tooltipTarget");

  target.addEventListener("mouseenter", (e) => {
    tooltip.style.display = "block";
    tooltip.style.left = e.clientX + "px";
    tooltip.style.top = e.clientY + "px";
  });

  target.addEventListener("mouseleave", () => {
    tooltip.style.display = "none";
  });
</script>
```

---

## 7. `mouseleave`  
✅ **Use Case:** Hiding tooltips when leaving an element.

*(Already shown above in `mouseenter` example)*

---

## 8. `mouseover`  
✅ **Use Case:** Hover effects on nested elements (bubbles).

```html
<ul id="menu">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<script>
  document.getElementById("menu").addEventListener("mouseover", (e) => {
    if (e.target.tagName === "LI") {
      e.target.style.backgroundColor = "lightblue";
    }
  });

  document.getElementById("menu").addEventListener("mouseout", (e) => {
    if (e.target.tagName === "LI") {
      e.target.style.backgroundColor = "";
    }
  });
</script>
```

---

## 9. `mouseout`  
✅ **Use Case:** Reverting hover effect when leaving child elements.

*(Used with `mouseover` above)*

---

## 10. `contextmenu`  
✅ **Use Case:** Creating custom right-click menus.

```html
<div id="box" style="width:150px;height:150px;background:lightgray;">Right-click me</div>
<div id="customMenu" style="display:none;position:absolute;background:#eee;padding:10px;border:1px solid #ccc;">
  Custom Menu
</div>

<script>
  const box = document.getElementById("box");
  const menu = document.getElementById("customMenu");

  box.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    menu.style.display = "block";
    menu.style.left = e.pageX + "px";
    menu.style.top = e.pageY + "px";
  });

  document.addEventListener("click", () => {
    menu.style.display = "none";
  });
</script>
```
