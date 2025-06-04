import {compareAsc, format} from "date-fns"

export const Todo = (t, de, du, p) => {
  const title = t;
  const description = de;
  const dueDate = du;
  let priority = p;
  let completed = false;

  const getTitle = () => title;
  const getDescription = () => description;
  //refactor dueDate to store Date object and return a format string to accessors!
  const getDueDate = () => format(dueDate, "MM-dd-yyyy");;
  const getPriority = () => priority;

  const printTodo = () => {
    console.log(`${title}${description}${dueDate}${priority}`);
  };

  const changePriority = (newPriority) => {
    priority = newPriority;
  };

  const toggleCompleted = () =>{
    completed = !completed;
  };

  const isComplete = () => {
    return completed;
  };

  const stringify = () => {
    let ret = `[${title},${description},${getDueDate()},${priority}]`;
    return ret;
    
  }

  return {stringify, printTodo, changePriority, toggleCompleted, isComplete, getTitle, getDescription, getDueDate, getPriority};
  };