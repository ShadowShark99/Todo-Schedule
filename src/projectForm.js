import { Project } from "./project";
import { SelectedProject } from "./selectedProject";
import { DisplayController } from "./display";
import { AddTask } from "./addTask";
import { RootProject } from "./rootProject";

export const ProjectForm = (form) => {
  //4 inputs and 1 submit
  const projectForm = document.createElement("div");
  const title = document.createElement("input");
  title.placeholder = "Project Name: ";

  const addProjectButton = document.createElement("button");
  addProjectButton.innerHTML = "Add";
  addProjectButton.addEventListener("click", () => {
    let sp = SelectedProject.getInstance();
    let newProject = Project(title.value);
    //automatically set to open
    newProject.toggleOpen();
    sp.addProject(newProject);
    SelectedProject.setProject(newProject);

    //store project after adding a new project
    localStorage.setItem("rp", JSON.stringify(RootProject.getInstance().stringify()));

    DisplayController.display();
    AddTask.press();
    //set SelectedProject to new folder?
  });
  //projectForm.appendChild(title)
  //projectForm.appendChild(addProjectButton);
  //return projectForm;
  form.appendChild(title)
  form.appendChild(addProjectButton);
  
};