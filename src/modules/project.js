import { todo, displayTodo } from './todo';


const project = (name = "New project") => {
	let _dueDate
	let _todos = {};
	let defaultTodo = todo();

	_todos[defaultTodo.uuid] = defaultTodo;

	const proto = {
		 name,
		 uuid: uuidv4(),
	   get dueDate() {
	   	if(_dueDate){
				return _dueDate
			}
			return -1
	   },
	   set dueDate(date) {
	      _dueDate = date;
				this.updateLocalStorage();
	   },
	   addTodo(todo){
			 this.todos[todo.uuid] = todo;
			 this.updateLocalStorage();
		 },
		 removeTodo(uuid){
			delete this.todos[uuid];
			this.updateLocalStorage();
		 },
		 renameTodo(uuid, newName){
			this.todos[uuid].name = newName;
			this.updateLocalStorage();
		 },
		 toggleDone(state, uuid){
			switch(state){
				case 0:
					this.todos[uuid].done = 0;
					break;
				case 1:
					this.todos[uuid].done = 1;
					break;
				default:
					console.log("Invalid operation.");
					break;
			}
			this.updateLocalStorage();
		 },
		 addTodoDesc(uuid, newDescription){
			 this.todos[uuid].description = newDescription;
			 this.updateLocalStorage();
		 },
		 addTodoNotes(uuid, newNotes){
			 this.todos[uuid].notes = newNotes;
			 this.updateLocalStorage();
		 },
		 changePriority(uuid, newPrior){
			 let todo = this.todos[uuid];
			switch (newPrior){
				case 1:
					todo.priority = 1;
					break;
				case 2:
					todo.priority = 2;
					break;
				case 3:
					todo.priority = 3;
					break;
				default:
					console.log("Invalid operation.");
					break;
			}
			this.updateLocalStorage();
		 },
		 changeTodoPosition(uuid, position){
				this.todos[uuid].position = position;
		 },
	   get todos(){
	     if(isEmpty(_todos)){
	     	return -1
	     }
	     return _todos;
	   },
		 updateLocalStorage(){
			localStorage.setItem('projects', JSON.stringify(window.projects));
			console.log("Local Storage updated!!");
		 },
		 toJSON(){
			 return{
				name: this.name,
				todos: this.todos,
				uuid: this.uuid,
				dueDate: this.dueDate
			 };
		 },
		 fromJSON(json){
			var data = json;
			var p = Object.assign({}, proto);
			p.todos = data.todos;
			p.name = data.name;
			p.uuid = data.uuid;
			p.dueDate = data.dueDate;
			return p;
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

const removeProject = id => {
	delete window.projects[id];
	localStorage.setItem('projects', JSON.stringify(window.projects));
}

const addProjectToSidebar = project => {
	let element = document.createElement("li");

	element.classList.add("list-group-item", "list-group-item-action");
	element.id = `project-container-${project.uuid}`;
	element.innerHTML = `<div class="project_title col-8" onclick="window.displayProject('${project.uuid}', window.projects, false)" 
												spellcheck="false" id="project-${project.uuid}" onfocus="document.execCommand('selectAll',false,null)" onblur="renameProject('${project.uuid}')">
												${project.name}
											</div>
          						<span class="badge badge-pill list-icon" onclick="deleteProject('${project.uuid}')"><i class="fa fa-trash icon" aria-hidden="true"></i></span>
          						<span class="badge badge-pill list-icon" onclick="focusProject('${project.uuid}')"><i class="fa fa-pencil icon" aria-hidden="true" ></i></span>`;

	$("#projects-list").append(element);
}

const displayProject = (projectId, projectsObject, focused) => {
	$("#tasks-container").empty();
	$("#tasks-container").hide();
	let project = projectsObject[projectId];

	 window.todosOrder = [];
	 
	for(let [key, value] of Object.entries(project.todos)){
		let arr = [value.uuid, value.position];
		window.todosOrder.push(arr);		
	}
	/* Sorting array by descending order */
	window.todosOrder.sort(function(a, b){return b[1]-a[1]});

	for(let i = 0; i < window.todosOrder.length; i++){
		let todo = project.todos[window.todosOrder[i][0]];
		displayTodo(todo);
	}

	$("#tasks-container").slideDown("fast");
	window.currentProject = projectId;
	localStorage.setItem('currentProject', JSON.stringify(window.currentProject));


	if(window.screen.width < 992 && !focused){
			$('#wrapper').removeClass("toggled");	
	}
	$(".project-header").html(project.name);
	$(".project-header").attr('onblur', `renameProjectInHeader('${project.uuid}')`);
}

export { project, addProjectToSidebar, displayProject, removeProject }
