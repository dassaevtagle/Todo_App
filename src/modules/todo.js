const todo = (name = "New task") => {
	const proto = {
		name,
		uuid: uuidv4(),
		done: 0,
		description: "Write your description here.",
		priority: 1,
		notes: "",
		position: 0
	}
	
	return Object.assign({}, proto)
}

const displayTodo = (todo) => {
	let dragulaCont = document.createElement("div");
			dragulaCont.id =`dragula-${todo.uuid}`;
			dragulaCont.classList.add("dragula-container");

	let mainContainer = document.createElement("div");
			mainContainer.classList.add("border", "col-10", "offset-1", "todo_main_container");
			mainContainer.id = `container-${todo.uuid}`;
	
	let row = document.createElement("div");
			row.classList.add("row", "dragula-mover-row");
	let dragulaMover = document.createElement("div");
			dragulaMover.classList.add("col-2", "dragula-handler");
			dragulaMover.innerHTML = `<i class="fa fa-arrows" aria-hidden="true"></i>`;

	let trashContainer= document.createElement("div");
			trashContainer.classList.add("trash_container", "col-6", "offset-4");
			trashContainer.innerHTML = `<div class="text-right">
																		<i class="fa fa-trash todo_trash" aria-hidden="true" onclick="removeTodo('${todo.uuid}')"></i>
																	</div>`;

			
																																					
	let todoTitle = document.createElement("div");
			todoTitle.classList.add("row","todo_title_row");
			todoTitle.innerHTML = `<div class="col-2">
															<div class="flip-switch flip-switch-icon">
																<input type="checkbox" id="done-button-${todo.uuid}" onclick="toggleDoneButton('${todo.uuid}')">
																<label for="done-button-${todo.uuid}"></label>
															</div>
														</div>
														<div class="col-md-9 col-8 todo_title_col">
															<div class="pl-2">
																<h4 class="todo_title" contenteditable="true" onclick="document.execCommand('selectAll',false,null)" 
																		id="title-${todo.uuid}" onblur="renameTodo('${todo.uuid}')" spellcheck="false">${todo.name}</h4>
															</div>
														</div>`;

	let caret = document.createElement("div");
			caret.classList.add("d-flex", "justify-content-center");
			caret.innerHTML =`<i class="todo_caret fa fa-caret-down" id="toggle-info-${todo.uuid}" 
														aria-hidden="true" onclick="toggleDescription('${todo.uuid}')">
												</i>`;

	let todoDescriptionContainer = document.createElement("div");
			todoDescriptionContainer.classList.add("todo_description_row", "border", "col-10", "offset-1", "mb-4");
			todoDescriptionContainer.id = `description-container-${todo.uuid}`;

	let	descriptionRow = document.createElement("div");
			descriptionRow.classList.add("row", "p-3");
			descriptionRow.innerHTML = `<div class="col-md-6 col-12">
																		<div class="todo_description" spellcheck="false" contenteditable="true" 
																				id="description-${todo.uuid}" onblur="addTodoDesc('${todo.uuid}')"
																				onclick="document.execCommand('selectAll',false,null)">${todo.description}</div>
																	</div>
																	<div class="col-md-6 col-12">
																		<div class="col-12">
																			<div class="todo_priority">Priority &nbsp; <p class="text-muted muted_priority">(1 is the most important)</p></div>
																		</div>
																		<div class="col-12">
																			<div class="switch-field offset-3 offset-md-1">
																				<input type="radio" id="radio-one-${todo.uuid}" name="priority-${todo.uuid}" value="1" onclick="window.projects[window.currentProject].changePriority('${todo.uuid}', 1)"/>
																				<label for="radio-one-${todo.uuid}">1</label>
																				<input type="radio" id="radio-two-${todo.uuid}" name="priority-${todo.uuid}" value="2" onclick="window.projects[window.currentProject].changePriority('${todo.uuid}', 2)"/>
																				<label for="radio-two-${todo.uuid}">2</label>
																				<input type="radio" id="radio-three-${todo.uuid}" name="priority-${todo.uuid}" value="3" onclick="window.projects[window.currentProject].changePriority('${todo.uuid}', 3)"/>
																				<label for="radio-three-${todo.uuid}">3</label>
																			</div>
																		</div>
																	</div>`;  

	let notes = document.createElement("div");
			notes.classList.add("msg");
			notes.innerHTML = `<label for="notes-${todo.uuid} style="margin-bottom: 0;">Notes</label>
													<textarea id="notes-${todo.uuid}" class="msg__textarea" onblur="addTodoNotes('${todo.uuid}')">${todo.notes}</textarea>`;

	row.appendChild(trashContainer);
	row.prepend(dragulaMover);	

  mainContainer.appendChild(row);
	mainContainer.appendChild(todoTitle);
	mainContainer.appendChild(caret);

	todoDescriptionContainer.appendChild(descriptionRow);
	todoDescriptionContainer.appendChild(notes);

	dragulaCont.appendChild(mainContainer);
	dragulaCont.appendChild(todoDescriptionContainer);

	$("#tasks-container").prepend(dragulaCont);

	
	if(todo.done == 1){
		$(`#done-button-${todo.uuid}`).prop("checked", true);
		$(`#dragula-${todo.uuid}`).css("opacity", "0.7");
	} else {
		$(`#done-button-${todo.uuid}`).prop("checked", false);
		$(`#dragula-${todo.uuid}`).css("opacity", "1");
	}

	switch(todo.priority){
		case 1:
			$(`input[name='priority-${todo.uuid}']`)[0].checked = true;
			break;
		case 2:
			$(`input[name='priority-${todo.uuid}']`)[1].checked = true;
			break;
		case 3:
			$(`input[name='priority-${todo.uuid}']`)[2].checked = true;
			break;
	}

}

export { todo, displayTodo }