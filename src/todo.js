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
  const getDueDate = () => dueDate;
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

  return {printTodo, completed, changePriority, toggleCompleted, isComplete, getTitle, getDescription, getDueDate, getPriority};
  };