import {compareAsc, format} from "date-fns"

export const Todo = (t, de, du, p) => {
  const title = t;
  const description = de;
  const dueDate = du;
  const priority = p;
  const completed = false;

  const printTodo = () => {
    console.log(`${title}${description}${dueDate}${priority}`);
  };

  return {printTodo, completed};
  };