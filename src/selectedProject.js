import { RootProject } from "./rootProject";

export const SelectedProject = (() => {
  let project = null;

  //public
  const getInstance = () => {
    if (project == null) {
      project = RootProject.getInstance();
    }
    return project;
  };
  const setProject = (newProject) => {
    project = newProject;
  };

  return { setProject, getInstance };
})();
