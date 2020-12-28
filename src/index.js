import { project } from './modules/project';
import { todo, displayTodo } from './modules/todo';

(function init() {
  const defaultProject = project();
  const defaultTodo = todo();

  defaultProject.addTodo(defaultTodo);

  displayTodo(defaultTodo);
}());

$('#menu-toggle').on('click', (e) => {
  e.preventDefault();
  $('#wrapper').toggleClass('toggled');
});
