import { todo, displayTodo } from './todo';
import { v4 as uuid  } from 'uuid';


const project = (name = "New project") => {
	let _dueDate
	let _todos = {};
	let defaultTodo = todo();

	_todos[defaultTodo.uuid] = defaultTodo;

	const proto = {
		 name,
		 uuid: uuid(),
	   get dueDate() {
	   	if(_dueDate){
				return _dueDate
			}
			return -1
	   },
	   set dueDate(date) {
	       	_dueDate = date
	   },
	   addTodo(todo){
			 _todos[todo.uuid] = todo;
		 },
		 removeTodo(uuid){
			delete _todos[uuid];
		 },
	   get todos(){
	     if(isEmpty(_todos)){
	     	return -1
	     }
	     return _todos;
	   }
	}

	return Object.assign({}, proto)
}

const isEmpty = obj => {
	for(var key in obj) {
			if(obj.hasOwnProperty(key))
					return false;
	}
	return true;
}

const addProjectToSidebar = project => {
	let element = document.createElement("a");

	element.classList.add("list-group-item", "list-group-item-action", "bg-light");
	element.id = `project-${project.uuid}`;
	element.innerHTML = project.name;

	$("#projects-list").append(element);
}

const displayProject = project => {
	/* $("#tasks-container").empty() */
	for(let [key, value] of Object.entries(project.todos)){
		displayTodo(value);
	}
}

export { project, addProjectToSidebar, displayProject }
