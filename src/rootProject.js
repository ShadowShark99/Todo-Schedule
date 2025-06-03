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
      let name = prompt("Please enter your name: ");
      rp = (name) ? Project(name) : Project("Username");
      //root project should always remain open
      rp.toggleOpen();
    }
    return rp;
  };
  return{getInstance};
})();