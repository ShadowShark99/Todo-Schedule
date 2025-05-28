import {Todo} from "./todo";

export const Project = () => {
  todos = [];
  const addTodo = (todo) => {
    todos.push(todo);
  };

  const printProject = () => {
    todos.forEach((index) => {
      todos[index].printTodo();
    });
  };

  return {todos, addTodo};
};