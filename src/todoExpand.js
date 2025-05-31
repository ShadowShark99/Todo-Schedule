import { SelectedTodo } from "./selectedTodo";
import { Todo } from "./todo";

export const TodoExpand = () => {
  const content = document.querySelector(".content");
  content.innerHTML = "";
  const todo = SelectedTodo.getInstance();
  const title = document.createElement("div");
  title.innerHTML = todo.getTitle();
  const description = document.createElement("div");
  description.innerHTML = todo.getDescription();
  const dueDate = document.createElement("div");
  dueDate.innerHTML = todo.getDueDate();
  const priority = document.createElement("div");
  priority.innerHTML = todo.getPriority();

  content.appendChild(title);
  content.appendChild(description);
  content.appendChild(dueDate);
  content.appendChild(priority);
  
  //return content;
};