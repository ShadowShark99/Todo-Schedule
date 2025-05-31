import {Project} from "./project"
import {Todo} from "./todo"
//import { SelectedProject} from "./selectedProject"
import { RootProject } from "./rootProject";
import { ProjectNode} from "./projectNode";
import { TodoExpand } from "./todoExpand";

//aggregation of display functionality
export const DisplayController = (() => {
  
  //return div with project DOM elements
  const projectDisplay = (project) => {
    //folders don't have to be open
    return ProjectNode(project, false);
  };

  //display only open folders
  const projectDisplayOpen = (project) =>
  {
    return ProjectNode(project, true);
  };
  
  // const todoDisplay = () => {
  //   return TodoExpand();
  // };

  //default display will display folders that are open
  const display = () => {
    //always start from the root
    const projects = document.querySelector(".projects");
    const rp = RootProject.getInstance();
    projects.innerHTML = "";
    projects.appendChild(projectDisplayOpen(rp));
    TodoExpand();

  };
  return {display};
})();