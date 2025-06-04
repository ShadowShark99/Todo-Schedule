import { Todo } from "./todo";
//import { RootProject } from "./rootProject";

const DefaultTodo = () => {
  return Todo(
    "Welcome to your Todolist",
    "Make a new project or add a few todo items to get started",
    new Date(),
    0,
  );
};

export const SelectedTodo = (() => {
  let todo = null;

  //public
  const getInstance = () => {
    if (todo == null) {
      todo = DefaultTodo();
    }
    return todo;
  };
  const setTodo = (newTodo) => {
    todo = newTodo;
  };

  return { setTodo, getInstance };
})();
