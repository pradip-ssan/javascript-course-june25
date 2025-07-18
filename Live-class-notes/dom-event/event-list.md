# ✅ DOM Event Categories & Real-World Use Cases

---

## 🔹 1. Mouse Events

| **Event Name** | **Triggered When...**                 | **Real-World Use Case**          |
| -------------- | ------------------------------------- | -------------------------------- |
| `click`        | Mouse clicks on element               | Buttons, links, modal open/close |
| `dblclick`     | Double-click                          | Editable fields, rename feature  |
| `mousedown`    | Mouse button is pressed               | Drag start, context menus        |
| `mouseup`      | Mouse button is released              | Drag end                         |
| `mousemove`    | Mouse moves over element              | Drawing apps, games              |
| `mouseenter`   | Mouse enters an element (no bubbling) | Show tooltips                    |
| `mouseleave`   | Mouse leaves an element (no bubbling) | Hide tooltips                    |
| `mouseover`    | Mouse enters (bubbles)                | Hover effects                    |
| `mouseout`     | Mouse leaves (bubbles)                | Hover effects                    |
| `contextmenu`  | Right-click                           | Custom context menus             |

---

## 🔹 2. Keyboard Events

| **Event Name** | **Triggered When...**                   | **Real-World Use Case**      |
| -------------- | --------------------------------------- | ---------------------------- |
| `keydown`      | Key is pressed down                     | Shortcuts, search, form nav  |
| `keyup`        | Key is released                         | Password strength indicators |
| `keypress`     | _(Deprecated)_ Key that produces a char | Avoid, use `keydown` instead |

---

## 🔹 3. Form Events

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

## 🔹 4. Window & Document Events

| **Event Name**     | **Triggered When...**                  | **Real-World Use Case**           |
| ------------------ | -------------------------------------- | --------------------------------- |
| `load`             | Page/resources fully loaded            | Show site loader                  |
| `DOMContentLoaded` | HTML fully parsed (before images load) | Initialize JS app                 |
| `resize`           | Window is resized                      | Responsive UI, recalculate layout |
| `scroll`           | User scrolls page or element           | Infinite scroll, sticky headers   |
| `beforeunload`     | User is about to leave page            | Save data warning                 |
| `unload`           | Page is being unloaded                 | Analytics, cleanup                |

---

## 🔹 5. Clipboard Events

| **Event Name** | **Triggered When...** | **Real-World Use Case**         |
| -------------- | --------------------- | ------------------------------- |
| `copy`         | Content is copied     | Copy buttons, analytics         |
| `cut`          | Content is cut        | Track user edits                |
| `paste`        | Content is pasted     | Paste images or text validation |

---

## 🔹 6. Drag & Drop Events

| **Event Name** | **Triggered When...**          | **Real-World Use Case**                |
| -------------- | ------------------------------ | -------------------------------------- |
| `dragstart`    | Start dragging an item         | File upload, task reordering           |
| `drag`         | While dragging                 | Visual feedback                        |
| `dragenter`    | Drag enters target             | Highlight drop zone                    |
| `dragover`     | Element is dragged over target | Allow drop (must use `preventDefault`) |
| `dragleave`    | Drag leaves target             | Unhighlight drop zone                  |
| `drop`         | Dropped into target            | Upload file, insert block              |
| `dragend`      | Dragging ends                  | Cleanup                                |

---

## 🔹 7. Media Events (Video/Audio)

| **Event Name** | **Triggered When...**             | **Real-World Use Case** |
| -------------- | --------------------------------- | ----------------------- |
| `play`         | Media starts playing              | Update play button      |
| `pause`        | Media is paused                   | Update pause button     |
| `ended`        | Playback reaches the end          | Show replay option      |
| `timeupdate`   | Current playback position changes | Update progress bar     |
| `volumechange` | Volume or mute changed            | Volume UI               |
| `loadeddata`   | First frame is loaded             | Enable controls         |

---

## 🔹 8. Touch Events (for Mobile)

| **Event Name** | **Triggered When...**  | **Real-World Use Case** |
| -------------- | ---------------------- | ----------------------- |
| `touchstart`   | Finger touches screen  | Mobile UI interaction   |
| `touchmove`    | Finger moves on screen | Drag/swipe detection    |
| `touchend`     | Finger lifts           | End gesture             |
| `touchcancel`  | Touch interrupted      | Cancel gesture          |

---

## 🔹 9. Focus Events (Programmatic & User Interaction)

| **Event Name** | **Triggered When...**              | **Real-World Use Case**    |
| -------------- | ---------------------------------- | -------------------------- |
| `focus`        | Input is focused                   | Show tips, scroll to field |
| `blur`         | Input loses focus                  | Validate on exit           |
| `focusin`      | Any child receives focus (bubbles) | Custom focus logic         |
| `focusout`     | Any child loses focus (bubbles)    | Save data on blur          |

---

## 🔹 10. Custom Events

| **Event Name**      | **Triggered When...**   | **Real-World Use Case** |
| ------------------- | ----------------------- | ----------------------- |
| `new CustomEvent()` | You manually trigger it | Component communication |

```js
const event = new CustomEvent("userLoggedIn", {
  detail: { name: "John" },
});
document.dispatchEvent(event);
```

## ✅ Tips for Working with Events

- ✅ Use addEventListener() to attach events
- ✅ Always name your callback functions if you plan to remove them later
- ✅ Use event.target to know what was clicked
- ✅ Use this carefully — avoid it in arrow functions
- ✅ Prevent default behavior with event.preventDefault() (like form submissions)
