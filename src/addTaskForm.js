import {SelectedProject} from "./selectedProject";
//import { RootProject } from "./rootProject";
import { Project } from "./project";
import {Todo} from "./todo";
import { DisplayController } from "./display";

export const TaskForm = () => {
  const form = document.createElement("div");
  form.classList.toggle("task-form");

  //buttons
  const addTodo = document.createElement("button");
  const addProject = document.createElement("button");
  addTodo.innerHTML = "Add Todo";
  addProject.innerHTML = "Add Project";

  //declare input
  const titleInput = document.createElement("input");

  //button functionality
  addProject.addEventListener("click", () => {
    //it makes a new root folder :( 
    let sp = SelectedProject.getInstance();
    let newProject = Project(titleInput.value);
    //automatically set to open
    newProject.toggleOpen();
    sp.addProject(newProject);
    SelectedProject.setProject(newProject);
    DisplayController.display();
    //set SelectedProject to new folder?
    
    
  });

  addTodo.addEventListener("click", () => {
    form.innerHTML = "";
    //4 inputs and 1 submit
    const title = document.createElement("input");
    const description = document.createElement("input");
    const date = document.createElement("input");
    const priority = document.createElement("input");
    const addButton = document.createElement("button");
    addButton.innerHTML = "add";
    addButton.addEventListener("click", () =>{

      sp.addTodo(Todo(title.value, description.value, date.value, priority.value));
      DisplayController.display();
    });
    let sp = SelectedProject.getInstance();
    form.appendChild(title);
    form.appendChild(description);
    form.appendChild(date);
    form.appendChild(priority);
    form.appendChild(addButton);
    


  });

  //add buttons
  form.appendChild(addTodo);
  form.appendChild(addProject);

  //append input
  form.appendChild(titleInput);

  return form;
};