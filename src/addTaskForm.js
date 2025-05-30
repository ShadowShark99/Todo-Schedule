import {SelectedProject} from "./selectedProject";
import {compareAsc, format} from "date-fns"
//import { RootProject } from "./rootProject";
import { Project } from "./project";
import {Todo} from "./todo";
import { DisplayController } from "./display";
import { ProjectForm } from "./projectForm";

export const TaskForm = () => {
  const form = document.createElement("div");
  form.classList.toggle("task-form");

  //buttons
  const addTodo = document.createElement("button");
  const addProject = document.createElement("button");
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
    const title = document.createElement("input");
    title.placeholder = "title";
    const description = document.createElement("input");
    description.placeholder = "description";
    const date = document.createElement("input");
    date.placeholder = "mm-dd-yyyy";
    const priority = document.createElement("input");
    priority.placeholder = "0-10";

    date.addEventListener('keypress', (e) => {
      const date0 = date.value;
      const size = date0.length;
      if(size == 10)
        e.preventDefault();
      if (isNaN(parseInt(e.key)) && e.key !== 'Backspace' && e.key !== 'Tab' && e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') 
        e.preventDefault();
      //prevent illegal months
      if(size == 0 && parseInt(e.key) > 1)
      {
        e.target.value = `0${date0}`;
      }
      if(size == 1 && parseInt(e.key) > 2)
        e.preventDefault();

      if(size == 2 || size == 5)
      {
        console.log("input -");
        e.target.value = `${date0}-`;
      }
      
    
    });

    priority.addEventListener('keypress', (e) => {
      const size = e.target.value.length;
      const priority0 = parseInt(e.target.value);
      if (isNaN(parseInt(e.key)) && e.key !== 'Backspace' && e.key !== 'Tab' && e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') 
        e.preventDefault();
      if(size)
      {
        if(priority0 > 1 || parseInt(e.key) || priority0 == 0)
          e.preventDefault();

      }
    });


    const addButton = document.createElement("button");
    addButton.innerHTML = "add";

    //updates todoList with new Todo if it is valid
    addButton.addEventListener("click", () =>{
      const date0 = date.value;
      const month = parseInt(date0.substring(0,2));
      const day = parseInt(date0.substring(3,5));
      const year = parseInt(date0.substring(6,10));
      //current date
      let newDate = new Date();
      if(!isNaN(month) && !isNaN(day) && !isNaN(year))
        newDate = new Date(year, month-1, day);
      sp.addTodo(Todo(title.value, description.value, newDate, priority.value));
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


  return form;
};