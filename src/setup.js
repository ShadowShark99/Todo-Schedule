import "./styles.css";
import {Todo} from "./todo";
import {Project} from "./project";
import {compareAsc, format} from "date-fns"
import {DisplayController} from "./display"
import {AddTask} from "./addTask"
import { RootProject } from "./rootProject";
import { Instantiate } from "./instantiate";

export const SetUp = () => {
  
  
const rootProject = RootProject.getInstance();
//let selectedProject = rootProject;
// if(RootProject.getCount())
// {
//   //Instantiate(rootProject);

// }

//defaultProject.printNotCompleted();
DisplayController.display();
//initiate the project selector which says what project the user will edit.

alert("Welcome to your Todo List");
};