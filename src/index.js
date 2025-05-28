import {Todo} from "./todo";
import {Project} from "./project";
const todo1 = Todo("Title", "description", 20, 1);
//todo1.printTodo();
const defaultProject = Project();
defaultProject.addTodo(todo1);
defaultProject.printProject();

alert("balls");