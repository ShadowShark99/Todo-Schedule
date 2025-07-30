import { Todo } from "./todo";
//import { RootProject } from "./rootProject";

const DefaultTodo = () => {
  const startDesc =
    "Make a new project or add a few todo items to get started<br><br> <strong><u>Instructions: </u></strong>Click on a project/folder to open/close it. <br>Click on a todo to enlarge details. <br>Click edit on selected project to type new name and press enter to confirm. <br>Delete todos: click on checkbox left of todo -> click on X button of parent project. <br>Delete Project/Folder: Delete all todos within project -> click on X button of parent project and empty project will be deleted. <br>Add Task: adds todo or new project to selected folder/project.";
  return Todo("Welcome to your Todolist", startDesc, new Date(), 0);
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
