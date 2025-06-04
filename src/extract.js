import { Todo } from "./todo";
import { Project } from "./project";
import { format } from "date-fns";

export const Extract = (() => {
  const todoExtract = (str) => {
    const arr = str.split(",");
    //console.log(arr);
    const year = arr[2].substr(6,4);
    const month = arr[2].substr(0,2);
    const day = arr[2].substr(3,2);
    //console.log(month);
    const dueDate = new Date(parseInt(year)
                            ,parseInt(month-1)
                            ,parseInt(day));
    console.log(dueDate);
    return Todo(arr[0],arr[1],dueDate,parseInt(arr[3]));
  };
  const projectExtract = (str) => {
    let i = 0;
    let title = null;
    let stage = 0; //0 is scan title, 1 is scan todos, 2, is scan projects
    let project = null;
    let projectStartIndex = 0; //should hold index of projects
    let stack = 0; //num of unmatched left [
    let closureCount = 0;//number of closures found. Need 2 to identify project
    //get rid of leading quotations
    let titleStart = 0;
    while(str[i] == "\"" || str[i] == "\\")
      i++;
    titleStart = i;

    while(i < str.length)
    {
      if(!title && str[i] == "[")
      {
        title = str.substr(titleStart, i - titleStart);
        stage = 1;
        project = Project(title);
      }
      else if(stage == 1)
      {
        //end [] [[todo][todo]] should end on ]
        if(str[i] == "]")
        {
          stage = 2;
          //i++; //skip first one
          projectStartIndex = ++i+1; //start with first project;
          //i moved to letter
          

        }
        else//"["
        {
          //console.log(str.substr(0,i));//print before [
          const end = str.indexOf("]", i);
          project.addTodo(todoExtract(str.substr(i+1, end - i - 1)));
          i = end;
        }
      }
      else if(stage == 2)
      {
        //example Username[][poop[][]]
        //should start on [
        if(str[i] == "[")
        {
          stack++;
        }
        else if(str[i] == "]")
        {
          //stack--;
          if(--stack == 0)
          {
            //closureCount++;
            if(++closureCount == 2)
            {
              project.addProject(projectExtract(str.substr(projectStartIndex, i + 1 - projectStartIndex)));
              closureCount = 0; //reset for next project
              projectStartIndex = i + 1; //first char of next project
            }
          }
        }


      }

      i++;
    }
    return project;
  };
  return {todoExtract, projectExtract};
})();