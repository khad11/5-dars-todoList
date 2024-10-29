const template = document.querySelector("template");
const list = document.querySelector("#list");
const textInput = document.querySelector("#text-input");
const addNewTodo = document.querySelector("#add-new-todo");

function deleteTodo(e) {
  e.closest("li").remove();
}

function doneTodo(e) {
  const li = e.closest("li");
  const p = li.querySelector("p");
  p.classList.toggle("done");
}

addNewTodo.addEventListener("click", () => {
  const clone = template.content.cloneNode("true"); // yangi li
  const p = clone.querySelector("p");

  const done = clone.querySelector("#done");
  const deleteBtn = clone.querySelector("#delete");
  deleteBtn.setAttribute("onclick", `deleteTodo(this)`);
  done.setAttribute("onclick", `doneTodo(this)`);
  p.textContent = textInput.value;
  list.appendChild(clone);
  textInput.value = "";
});
