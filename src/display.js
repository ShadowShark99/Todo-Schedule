import {Project} from "./project"
import {Todo} from "./todo"
//import { SelectedProject} from "./selectedProject"
import { RootProject } from "./rootProject";

//aggregation of display functionality
export const DisplayController = () => {
  
  //return div with project DOM elements
  const projectDisplay = (project) => {
    const projectDiv = document.createElement('div');
    const projectTitle = document.createElement('h3');
    projectTitle.innerHTML = project.getProjectName();

    const projectList = document.createElement('ul');
    //add todos
    project.todos.forEach((todo) => {
      const todoItem = document.createElement('li');
      todoItem.innerHTML = todo.getTitle() + todo.getDescription() + todo.getDueDate();
      projectList.appendChild(todoItem);
    });
    projectDiv.appendChild(projectTitle);
    projectDiv.appendChild(projectList);

    project.getProjects().forEach((p) => {
      projectDiv.appendChild(projectDisplay(p));
    });


    return projectDiv;
  };

  //display only open folders
  const projectDisplayOpen = (project) =>
  {
    const projectDiv = document.createElement('div');
    const projectTitle = document.createElement('h3');
    projectTitle.innerHTML = project.getProjectName();

    const projectList = document.createElement('ul');
    //add todos if the project is open
    if(project.isOpen())
      project.todos.forEach((todo) => {
        const todoItem = document.createElement('li');
        todoItem.innerHTML = todo.getTitle() + todo.getDescription() + todo.getDueDate();
        projectList.appendChild(todoItem);
      });
    projectDiv.appendChild(projectTitle);
    projectDiv.appendChild(projectList);
    
    //show inner projects if it's open
    if(project.isOpen())
      project.getProjects().forEach((p) => {
        projectDiv.appendChild(projectDisplayOpen(p));
      });


    return projectDiv;
  };

  //default display will display folders that are open
  const display = () => {
    //always start from the root
    const rp = RootProject.getInstance();
    document.querySelector(".projects").appendChild(projectDisplayOpen(rp));
  };
  return {display};
};