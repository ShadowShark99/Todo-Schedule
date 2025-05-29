import {Project} from "./project"
import { DisplayController } from "./display";
//onlyOpen is whether it wants to display only open folders
export const ProjectNode = (project, onlyOpen) => {
  const projectDiv = document.createElement('div');
  const projectTitle = document.createElement('h3');
  projectTitle.innerHTML = project.getProjectName();
  //add toggle open functionality to DOM element
  projectTitle.addEventListener("click", () => {
    project.toggleOpen();
    DisplayController.display();
  });


  const projectList = document.createElement('ul');
  //add todos if the project is open
  if(!onlyOpen || project.isOpen())
    project.todos.forEach((todo) => {
      const todoItem = document.createElement('li');
      todoItem.innerHTML = todo.getTitle() + todo.getDescription() + todo.getDueDate();
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