
const TM = () => {
  
};

//has access to a project to add or remove tasks/inner projects
export const TaskManipulator = () => {
  //private
  let instance = null;

  //public (returned)
  const getInstance = () => {
    if(instance == null)
    {
      instance = TM();
    }
    return instance;
  };
};