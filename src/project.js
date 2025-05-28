import {Todo} from "./todo";

export const Project = (name) => {
  let todos = [];
  //other projects
  let projects = [];
  const projectName = name;

  const addTodo = (todo) => {
    todos.push(todo);
  };

  const addProject = (project) => {
    projects.push(project);
  }

  const printProject = () => {
    console.log(projectName);
    todos.forEach((todo) => {
      todo.printTodo();
    });

    projects.forEach((project) => {
      project.printProject();
    });
  };

  return {todos, addTodo, addProject,printProject};
};