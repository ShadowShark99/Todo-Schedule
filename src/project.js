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
    console.log(`Project Title: ${projectName}`);
    todos.forEach((todo) => {
      todo.printTodo();
    });

    projects.forEach((project) => {
      project.printProject();
    });
  };

  const printNotCompleted = () => {
    console.log(`Project Title: ${projectName}`);
    todos.forEach((todo) => {
      if(!todo.isComplete())
        todo.printTodo();
    });

    projects.forEach((project) => {
      project.printNotCompleted();
    });
  };

  const removeCompleted = () => {
    //remove todo from the array
    // todos.forEach((todo, i) => {
    //   if(todo.isComplete())
    //       todos.splice(i, 1);
    // });
    for (let i = 0; i < todos.length; i++)
    {
      const todo = todos[i];
      if(todo.isComplete())
      {
        //decrement to prevent skipping index
        todos.splice(i--, 1);
      }
    }

    projects.forEach((project) => {
      project.removeCompleted();
    });
  };

  return {todos, addTodo, addProject,printProject, printNotCompleted, removeCompleted};
};

