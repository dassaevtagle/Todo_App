import { project, addProjectToSidebar, displayProject } from './modules/project';
import { todo, displayTodo } from './modules/todo';

(function init() {
  const defaultProject = project();

  addProjectToSidebar(defaultProject);
  displayProject(defaultProject);

  console.dir(defaultProject);
}());

$('#addTodoBtn').on('click', () => {
  const newTodo = todo();
  displayTodo(newTodo);
});

$('#add-project-button').on('click', () => {
  addProjectToSidebar(project());
});
