import "./styles.css";
import { DisplayController } from "./display";
import { RootProject } from "./rootProject";

export const SetUp = () => {
  RootProject.getInstance();
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
