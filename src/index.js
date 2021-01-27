import { project, addProjectToSidebar } from './modules/project';
import { todo, displayTodo } from './modules/todo';


(function init() {
  const defaultProject = project();
  const defaultTodo = todo();

  defaultProject.addTodo(defaultTodo);

  displayTodo(defaultTodo);
  addProjectToSidebar(defaultProject);

  console.dir(defaultProject);
}());



$("#addTodoBtn").on("click", () => {
  let newTodo = todo();
  displayTodo(newTodo);
});


