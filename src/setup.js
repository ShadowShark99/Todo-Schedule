export const SetUp = () => {
  const rootProject = RootProject().getInstance();
let selectedProject = rootProject;
const templateDate = format(new Date(2020, 1, 11), "yyyy-MM-dd");
const template = Todo("Title", "description", templateDate, 1);
template.toggleCompleted();
//todo1.printTodo();
const defaultProject = Project("Day Schedule");
defaultProject.addTodo(template);
const wakeUpTodo = Todo("Wake up", "at 8am", 0, 1);

defaultProject.addTodo(wakeUpTodo);
wakeUpTodo.changePriority(9);
wakeUpTodo.toggleCompleted();
defaultProject.addTodo(Todo("Brush Teeth", "Carefully", 0, 1));
defaultProject.addTodo(Todo("Eat Lunch", "with your mouth", 0, 1));
defaultProject.addTodo(Todo("go to sleep", "at 8am", 0, 1));

const subProject = Project("Afternoon");
subProject.addTodo(Todo("work on projects", "for 8 hours", 0, 1));
subProject.addTodo(Todo("Call Victoria", "Hi victoria", 0, 1));
defaultProject.addProject(subProject);

defaultProject.removeCompleted();
defaultProject.printProject();

rootProject.addProject(defaultProject);
//defaultProject.printNotCompleted();
const display = DisplayController();
display.display(rootProject);
//initiate the project selector which says what project the user will edit.

alert("balls");
};