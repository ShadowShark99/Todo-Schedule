import {Project} from "./project"
import { DisplayController } from "./display";
import { SelectedProject } from "./selectedProject";
import { TodoNode } from "./todoNode";
import { TitleForm } from "./projectTitleForm";

//onlyOpen is whether it wants to display only open folders
export const ProjectNode = (project, onlyOpen) => {
  const projectDiv = document.createElement('div');
  projectDiv.classList.toggle("project");
  const projectTitle = document.createElement('h3');
  projectTitle.innerHTML = project.getProjectName();

  projectTitle.addEventListener("dblclick", () => {
    projectTitle.appendChild(TitleForm());
    console.log("double clicked");
  });

  //delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "x";
  deleteButton.addEventListener("click", () => {
    project.removeCompleted();
    DisplayController.display();
  });

  projectDiv.appendChild(deleteButton);

  //add toggle open functionality to DOM element
  if(project == SelectedProject.getInstance())
  {
    projectTitle.classList.toggle("selected");
  }
  projectTitle.addEventListener("click", () => {
    project.toggleOpen();

    
    //clicked Project is the new set project
    SelectedProject.setProject(project);
    DisplayController.display();
  });


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