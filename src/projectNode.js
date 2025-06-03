import {Project} from "./project"
import { DisplayController } from "./display";
import { SelectedProject } from "./selectedProject";
import { TodoNode } from "./todoNode";

//onlyOpen is whether it wants to display only open folders
export const ProjectNode = (project, onlyOpen) => {
  const projectDiv = document.createElement('div');
  projectDiv.classList.toggle("project");
  const projectTitle = document.createElement('h3');
  projectTitle.innerHTML = project.getProjectName();

  //add toggle open functionality to DOM element
  
  projectTitle.addEventListener("click", () => {
    project.toggleOpen();

    
    //clicked Project is the new set project
    SelectedProject.setProject(project);
    DisplayController.display();
  });

  const sp = SelectedProject.getInstance();
  if(project == sp)
  {
    projectTitle.classList.toggle("selected");

    //edit button
    const changeName = document.createElement("button");
  changeName.classList.toggle("change");
  changeName.innerHTML = "edit";

  changeName.addEventListener("click", (e) => {
    //TitleForm(projectTitle);
    const titleInput = document.createElement("input");
    titleInput.classList.toggle("title-form");
    
    titleInput.addEventListener("keypress", (e) => {
      if(e.key === 'Enter')
      {
        sp.setProjectName(titleInput.value);
        DisplayController.display();
      }
    });
    projectTitle.appendChild(titleInput);
    titleInput.focus();
  });

  projectDiv.appendChild(changeName);
  }
  

  //delete button
  const deleteButton = document.createElement("button");
  deleteButton.classList.toggle("delete");
  deleteButton.innerHTML = "x";
  deleteButton.addEventListener("click", () => {
    project.removeCompleted();
    DisplayController.display();
  });

  projectDiv.appendChild(deleteButton);


  const projectList = document.createElement('ul');
  //add todos if the project is open
  if(!onlyOpen || project.isOpen())
    project.todos.forEach((todo) => {
      const todoItem = document.createElement('li');
      todoItem.appendChild(TodoNode(todo));
      projectList.appendChild(todoItem);
    });
  projectDiv.appendChild(projectTitle);
  projectDiv.appendChild(projectList);
  
  //show inner projects if it's open
  if(!onlyOpen || project.isOpen())
    project.getProjects().forEach((p) => {
      projectDiv.appendChild(ProjectNode(p, onlyOpen));
    });
    
  

  return projectDiv;
};