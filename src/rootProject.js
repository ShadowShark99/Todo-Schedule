import { Project } from "./project";
import { Extract } from "./extract";
import { SetUp } from "./setup";
const RP = (project) => {
  let rp = project;
  return rp;
}

export const RootProject = (() => {
  //let rp = Extract.projectExtract(localStorage.getItem("rp"));
  let rp = null;
  
  const getInstance = () => {
    if(rp == null)
    {
      
      let name = prompt("Please enter your name: ");
      rp = (name) ? Project(name) : Project("Username");
      //root project should always remain open
      rp.toggleOpen();

      //SetUp();

    }
    if(rp)
    {
      
      //console.log(rp.getProjectName());
    }
    return rp;
  };
  return{getInstance};
})();