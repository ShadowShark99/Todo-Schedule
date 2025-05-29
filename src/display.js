import {Project} from "./project"
import {Todo} from "./todo"
//import { SelectedProject} from "./selectedProject"
import { RootProject } from "./rootProject";
import { ProjectNode} from "./projectNode";

//aggregation of display functionality
export const DisplayController = () => {
  
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

  //default display will display folders that are open
  const display = () => {
    //always start from the root
    const rp = RootProject.getInstance();
    document.querySelector(".projects").appendChild(projectDisplayOpen(rp));
  };
  return {display};
};