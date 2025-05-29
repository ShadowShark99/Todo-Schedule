export const TaskForm = () => {
  const form = document.createElement("div");
  const addTodo = document.createElement("button");
  const addProject = document.createElement("button");
  addTodo.innerHTML = "Add Todo";
  addProject.innerHTML = "Add Project";
  form.appendChild(addTodo);
  form.appendChild(addProject);
  return form;
};