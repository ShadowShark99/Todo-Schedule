import {SelectedProject} from "./selectedProject";
//import { RootProject } from "./rootProject";
import { Project } from "./project";
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
    let p = SelectedProject.getInstance();
    let newProject = Project(titleInput.value);
    p.addProject(newProject);
    p.printProject();
    DisplayController().display(p);
    //set SelectedProject to new folder?
    SelectedProject.setProject(newProject);
    
  });

  //add buttons
  form.appendChild(addTodo);
  form.appendChild(addProject);

  //append input
  form.appendChild(titleInput);

  return form;
};