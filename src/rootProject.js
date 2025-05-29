import { Project } from "./project";

const RP = (project) => {
  let rp = project;
  return rp;
}

export const RootProject = (() => {
  let rp = null;
  const getInstance = () => {
    if(rp == null)
    {
      rp = Project("Username");
    }
    return rp;
  };
  return{getInstance};
})();