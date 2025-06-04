import { SelectedTodo } from "./selectedTodo";
import { Color } from "./color";

export const TodoExpand = () => {
  const content = document.querySelector(".content");
  content.innerHTML = "";
  const todo = SelectedTodo.getInstance();
  const title = document.createElement("div");
  title.classList.toggle("title");
  title.innerHTML = todo.getTitle();

  const description = document.createElement("div");
  description.classList.toggle("description");
  description.innerHTML = todo.getDescription();

  const dueDate = document.createElement("div");
  dueDate.classList.toggle("due-date");
  dueDate.innerHTML = todo.getDueDate();

  const priority = document.createElement("div");
  priority.innerHTML = `Priority: ${todo.getPriority()}`;
  priority.classList.toggle("priority");

  const color = Color(todo.getPriority());
  content.setAttribute(
    "style",
    `background-color: rgb(${color.r},${color.g},${color.b});`,
  );

  content.appendChild(title);
  content.appendChild(dueDate);
  content.appendChild(priority);
  content.appendChild(description);

  //return content;
};
