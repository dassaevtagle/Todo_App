import { v4 as uuid  } from 'uuid';

const project = (name = "New project") => {
	let _dueDate
	let _todos = {}
	const proto = {
	   name,
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
	     	return _todos
	     }
	     return -1;
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
	element.innerHTML = project.name;

	$("#projects-list").append(element);
}

export { project, addProjectToSidebar }
