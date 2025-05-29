import {compareAsc, format} from "date-fns"

export const Todo = (t, de, du, p) => {
  const title = t;
  const description = de;
  const dueDate = du;
  let priority = p;
  let completed = false;

  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => dueDate;

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

  return {printTodo, completed, changePriority, toggleCompleted, isComplete, getTitle, getDescription, getDueDate};
  };