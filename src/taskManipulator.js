

//has access to a project to add or remove tasks/inner projects
export const TaskManipulator = (() => {
  function TM(){
    
  }

  //private
  var instance;

  //public (returned)
  const getInstance = () => {
    if(instance == null)
    {
      instance = TM();
    }
    return instance;
  };
})();