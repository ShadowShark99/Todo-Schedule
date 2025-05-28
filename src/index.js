import {Todo} from "./todo";
import {Project} from "./project";
const template = Todo("Title", "description", 0, 1);
//todo1.printTodo();
const defaultProject = Project();
defaultProject.addTodo(template);
defaultProject.addTodo(Todo("Wake up", "at 8am", 0, 1));
defaultProject.addTodo(Todo("Brush Teeth", "Carefully", 0, 1));
defaultProject.addTodo(Todo("Eat Lunch", "with your mouth", 0, 1));
defaultProject.addTodo(Todo("go to sleep", "at 8am", 0, 1));
defaultProject.printProject();

alert("balls");