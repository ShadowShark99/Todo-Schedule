import { Project } from "./project";

export const RootProject = () => {
  let rp = null;
  const getInstance = () => {
    if(rp == null)
    {
      rp = Project("Username");
    }
    return rp;
  };
  return{getInstance};
};