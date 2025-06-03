import {TaskForm} from "./addTaskForm"
import { DisplayController } from "./display";
const AddTaskSetUp = () => {


  
};

export const AddTask = (() => {
  const addTaskButton = document.querySelector(".add-task");
  const buttonParent = addTaskButton.parentElement;
  let setup = null;
  let pressed = false;
  addTaskButton.addEventListener("click", () => {
    //toggle pressed
    DisplayController.display();
    press();

    
  });
  //use only once for construction
  const getInstance = () => {
    
  };
  
  const isPressed = () => pressed;

  const press = () => {
    pressed = !pressed;
    console.log("pressed");
    if(pressed)
      buttonParent.insertBefore(TaskForm(), addTaskButton.nextSibling);
    else
      buttonParent.removeChild(addTaskButton.nextSibling);
  };
  return {press,getInstance, isPressed};
})();