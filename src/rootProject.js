import { Project } from "./project";
import { Extract } from "./extract";
import { Instantiate } from "./instantiate";

export const RootProject = (() => {
  let rp = null;
  // let rp = Extract.projectExtract(localStorage.getItem("rp"));
  //todoForm and projectForm

  let instanceCallCount = 0;

  const getInstance = () => {
    if (rp == null) {
      if (localStorage.getItem("rp")) {
        //console.log(localStorage.getItem("rp")); //is still valid string
        rp = Extract.projectExtract(localStorage.getItem("rp"));
        //not valid extract
        console.log(rp.stringify());
      } else {
        let name = prompt("Please enter your name: ");
        rp = name ? Project(name) : Project("Username");
        //root project should always remain open
        rp.toggleOpen();
        console.log("instantiating first time");
        //SetUp();
        Instantiate(rp);

        instanceCallCount++;
      }
    }
    if (rp) {
      //console.log(rp.stringify());
    }
    return rp;
  };

  const getCount = () => instanceCallCount;
  return { getInstance, getCount };
})();
