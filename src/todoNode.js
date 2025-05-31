import {Todo} from "./todo"

//prereq is priority should be number from 1-10
// BASE (230,230,230) -> intervals: 230, 86, 46 -> to endpoint(0,144,184)!
const Color = (priority) => {
  let r = 230 - Math.round(priority * 230 / 10);
  let g = 230 - Math.round(priority * 86 / 10);
  let b = 230 - Math.round(priority * 46 / 10);
  return {r,g,b};
};


export const TodoNode = (todo) => {
  //get base infomrmation
  const title = todo.getTitle();
  const description = todo.getDescription();
  const dueDate = todo.getDueDate();
  const priority = todo.getPriority();
  const color = Color(priority);

  //create DOM NOde
  const todoNode = document.createElement("div");
  todoNode.classList.toggle("todo-node");
  todoNode.setAttribute("style", `background-color: rgb(${color.r},${color.g},${color.b});`);
  const titleDiv = document.createElement("div");
  titleDiv.innerHTML = title;

  const dateDiv = document.createElement("div");
  dateDiv.innerHTML = dueDate;
  
  //user input: complete and delete
  const complete = document.createElement("input")
  complete.type = "checkbox";
  complete.checked = todo.isComplete();
  complete.addEventListener("click", () => {
    todo.toggleCompleted();
    complete.checked = todo.isComplete();
  });

  


  todoNode.appendChild(titleDiv);
  todoNode.appendChild(dateDiv);
  todoNode.appendChild(complete);
  return todoNode;
};  