import { AddTask } from "./addTask";
import { SelectedProject } from "./selectedProject";
import { RootProject } from "./rootProject";
import { Todo } from "./todo";
import { DisplayController } from "./display";

export const TodoForm = (form) => {
    const title = document.createElement("input");
    title.placeholder = "title";
    title.setAttribute("id", "title");

    const title0 = document.createElement("label");
    title0.innerHTML = "Enter Title: ";
    title0.setAttribute("for", "title");

    const description = document.createElement("input");
    description.placeholder = "description";
    description.setAttribute("id", "description")

    const description0 = document.createElement("label");
    description0.innerHTML = "Enter Description: ";
    description0.setAttribute("for", "description");

    const date = document.createElement("input");
    date.placeholder = "mm-dd-yyyy";
    date.setAttribute("id","date");

    const date0 = document.createElement("label");
    date0.innerHTML = "Enter Date: ";
    date0.setAttribute("for", "date");

    const priority = document.createElement("input");
    priority.placeholder = "0-10";
    priority.setAttribute("id", "priority");

    const priority0 = document.createElement("label");
    priority0.innerHTML = "Enter Priorioty: ";
    priority0.setAttribute("for", "priority");

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
      let sp = SelectedProject.getInstance();
      sp.addTodo(Todo(title.value, description.value, newDate, priority.value));
      if(!sp.isOpen())
      {
        sp.toggleOpen();
      }

      //store updated object after adding todo
      localStorage.setItem("rp", JSON.stringify(RootProject.getInstance().stringify()));

      DisplayController.display();
      AddTask.press();
    });
    
    form.appendChild(title0);
    form.appendChild(title);
    
    form.appendChild(description0);
    form.appendChild(description);
    
    form.appendChild(date0);
    form.appendChild(date);
    
    form.appendChild(priority0);
    form.appendChild(priority);
    
    form.appendChild(addButton);
};