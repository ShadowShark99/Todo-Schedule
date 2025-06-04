import "./styles.css";
import {Todo} from "./todo";
import {Project} from "./project";
import {compareAsc, format} from "date-fns"
import {DisplayController} from "./display"
import {AddTask} from "./addTask"
import { RootProject } from "./rootProject";

export const Instantiate = (rootProject) => {
  console.log("Setting up");
  const templateDate = format(new Date(), "yyyy-MM-dd");
  const template = Todo("Title", "description", templateDate, 1);
  template.toggleCompleted();
  //todo1.printTodo();
  const defaultProject = Project("Day Schedule");
  //default project starts open!
  defaultProject.toggleOpen();
  defaultProject.addTodo(template);
  const wakeUpTodo = Todo("Wake up", "at 8am", templateDate, 1);

  defaultProject.addTodo(wakeUpTodo);
  wakeUpTodo.changePriority(9);
  wakeUpTodo.toggleCompleted();
  defaultProject.addTodo(Todo("Brush Teeth", "Carefully", templateDate, 2));
  defaultProject.addTodo(Todo("Eat Lunch", "with your mouth", templateDate, 5));
  defaultProject.addTodo(Todo("go to sleep", "at 8am", templateDate, 1));

  const subProject = Project("Afternoon");
  subProject.addTodo(Todo("work on projects", "for 8 hours", templateDate, 1));
  subProject.addTodo(Todo("Call Victoria", "Hi victoria", templateDate, 1));
  defaultProject.addProject(subProject);

  defaultProject.removeCompleted();
  //defaultProject.printProject();

  rootProject.addProject(defaultProject);
};