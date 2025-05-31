import {TaskForm} from "./addTaskForm"

const AddTaskSetUp = () => {


  
};

export const AddTask = (() => {
  const addTaskButton = document.querySelector(".add-task");
  const buttonParent = addTaskButton.parentElement;
  let setup = null;
  let pressed = false;
  addTaskButton.addEventListener("click", () => {
    //toggle pressed
    press();
    
  });
  //use only once for construction
  const getInstance = () => {
    if(setup == null)
    {
      setup = "cool";
      
      
      //only set up once
      
    }
    return setup;
  };
  
  const press = () => {
    pressed = !pressed;
    console.log("pressed");
    if(pressed)
      buttonParent.insertBefore(TaskForm(), addTaskButton.nextSibling);
    else
      buttonParent.removeChild(addTaskButton.nextSibling);
  };
  return {press,getInstance};
})();