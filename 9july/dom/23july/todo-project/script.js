const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const taskText = input.value.trim();
  if (taskText !== "") {
    addTask(taskText);
    input.value = "";
  }
});

function addTask(text) {
  const li = document.createElement("li");
  li.innerHTML = `
    <span class="task-text">${text}</span>
    <div class="actions">
      <button data-action="edit">✏️</button>
      <button data-action="complete">✅</button>
      <button data-action="delete">🗑️</button>
    </div>
  `;
  list.appendChild(li);
}

// ✅ EVENT DELEGATION
list.addEventListener("click", function (e) {
  const action = e.target.dataset.action;
  if (!action) return;

  const li = e.target.closest("li");

  if (action === "delete") {
    li.remove();
  } else if (action === "complete") {
    li.classList.toggle("completed");
  } else if (action === "edit") {
    const span = li.querySelector(".task-text");
    const newText = prompt("Edit your task:", span.textContent);
    if (newText !== null && newText.trim() !== "") {
      span.textContent = newText.trim();
    }
  }
});
