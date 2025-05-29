import {Project} from "./project"
import {Todo} from "./todo"

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

  const display = (p) => {
    console.log('displayed');
    document.querySelector(".root-project").appendChild(projectDisplay(p));
  };
  return {display};
};