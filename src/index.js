import {Todo} from "./todo";
import {Project} from "./project";
const template = Todo("Title", "description", 0, 1);
//todo1.printTodo();
const defaultProject = Project("Day Schedule");
defaultProject.addTodo(template);
defaultProject.addTodo(Todo("Wake up", "at 8am", 0, 1));
defaultProject.addTodo(Todo("Brush Teeth", "Carefully", 0, 1));
defaultProject.addTodo(Todo("Eat Lunch", "with your mouth", 0, 1));
defaultProject.addTodo(Todo("go to sleep", "at 8am", 0, 1));

const subProject = Project("Afternoon");
subProject.addTodo(Todo("work on projects", "for 8 hours", 0, 1));
subProject.addTodo(Todo("Call Victoria", "Hi victoria", 0, 1));
defaultProject.addProject(subProject);

defaultProject.printProject();

alert("balls");