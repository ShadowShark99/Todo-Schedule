import {Todo} from "./todo";

export const Project = () => {
  let todos = [];
  const addTodo = (todo) => {
    todos.push(todo);
  };

  const printProject = () => {
    todos.forEach((index) => {
      index.printTodo();
    });
  };

  return {todos, addTodo, printProject};
};