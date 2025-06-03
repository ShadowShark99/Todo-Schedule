import {SelectedProject} from "./selectedProject";
import {compareAsc, format} from "date-fns"
//import { RootProject } from "./rootProject";
import { Project } from "./project";
import {Todo} from "./todo";
import { DisplayController } from "./display";
import { ProjectForm } from "./projectForm";
import { TodoForm } from "./todoForm";

export const TaskForm = () => {
  const form = document.createElement("div");
  form.classList.toggle("task-form");

  //buttons
  const addTodo = document.createElement("button");
  const addProject = document.createElement("button");
  addTodo.classList.toggle("start");
  addProject.classList.toggle("start");
  addTodo.innerHTML = "Add Todo";
  addProject.innerHTML = "Add Project";


  //project functionality
  addProject.addEventListener("click", () => {
    //it makes a new root folder :( 
      form.innerHTML = "";
      ProjectForm(form);
      
    
    
  });

  //todo functionality
  addTodo.addEventListener("click", () => {
    form.innerHTML = "";
    //4 inputs and 1 submit
    TodoForm(form);
    


  });

  //add buttons
  form.appendChild(addTodo);
  form.appendChild(addProject);


  return form;
};