import {TaskForm} from "./addTaskForm"

export const AddTask = () => {
  const addTaskButton = document.querySelector(".add-task");
  const buttonParent = addTaskButton.parentElement;
  let pressed = false;
  addTaskButton.addEventListener("click", () => {
    //toggle pressed
    pressed = !pressed;
    if(pressed)
      buttonParent.insertBefore(TaskForm(), addTaskButton.nextSibling);
    else
      buttonParent.removeChild(addTaskButton.nextSibling);
    
  });
};