import { v4 as uuid  } from 'uuid';


const todo = (name = "New task") => {
	const proto = {
		name,
		uuid: uuid(),
		done: false,
		description: "Write your description here.",
		priority: 3,
		notes: ""
	}
	
	return Object.assign({}, proto)
}

const displayTodo = (todo) => {
	let dragulaCont = document.createElement("div");
			dragulaCont.classList.add(`dragula-${todo.uuid}`);

	let mainContainer = document.createElement("div");
			mainContainer.classList.add("border", "col-10", "offset-1", "todo_main_container");
			mainContainer.id = `container-${todo.uuid}`;
			 
	let trashContainer= document.createElement("div");
			trashContainer.classList.add("trash_container", "col-12");
			trashContainer.innerHTML = `<div class="text-right">
																		<i class="fa fa-trash text-muted todo_trash" aria-hidden="true" onclick=removeTodo('${todo.uuid}')></i>
																	</div>`;
																																					
	let todoTitle = document.createElement("div");
			todoTitle.classList.add("row","todo_title_row");
			todoTitle.innerHTML = `<div class="col-9">
															<div class="pl-2">
																<h4 class="todo_title" contenteditable="true" onclick="document.execCommand('selectAll',false,null)" id="title-${todo.uuid}" spellcheck="false">New task</h4>
															</div>
														</div>
														<div class="col-2">
															<div class="flip-switch flip-switch-icon">
																<input type="checkbox" id="done-button-${todo.uuid}" data-content="0" onclick="toggleDoneButton('${todo.uuid}')">
																<label for="done-button-${todo.uuid}"></label>
															</div>
														</div>`;

	let caret = document.createElement("div");
			caret.classList.add("d-flex", "justify-content-center");
			caret.innerHTML =`<i class="todo_caret fa fa-caret-down text-muted" id="toggle-info-${todo.uuid}" 
														aria-hidden="true" onclick="toggleDescription('${todo.uuid}')">
												</i>`;

	let todoDescriptionContainer = document.createElement("div");
			todoDescriptionContainer.classList.add("todo_description_row", "border", "col-10", "offset-1", "mb-4");
			todoDescriptionContainer.id = `description-container-${todo.uuid}`;

	let	descriptionRow = document.createElement("div");
			descriptionRow.classList.add("row", "p-3");
			descriptionRow.innerHTML = `<div class="col-md-6 col-12">
																		<div class="todo_description" spellcheck="false" contenteditable="true" id="description-${todo.uuid}">Here goes your description.</div>
																	</div>
																	<div class="col-md-6 col-12">
																		<div class="col-12">
																			<div class="todo_priority">Priority &nbsp; <p class="text-muted">(1 is the most important)</p></div>
																		</div>
																		<div class="col-12">
																			<div class="switch-field offset-3 offset-md-1">
																				<input type="radio" id="radio-one-${todo.uuid}" name="priority-${todo.uuid}" value="1" checked/>
																				<label for="radio-one-${todo.uuid}">1</label>
																				<input type="radio" id="radio-two-${todo.uuid}" name="priority-${todo.uuid}" value="2" />
																				<label for="radio-two-${todo.uuid}">2</label>
																				<input type="radio" id="radio-three-${todo.uuid}" name="priority-${todo.uuid}" value="3" />
																				<label for="radio-three-${todo.uuid}">3</label>
																			</div>
																		</div>
																	</div>`;  

	let notes = document.createElement("div");
			notes.classList.add("msg");
			notes.innerHTML = `<label for="notes-${todo.uuid} style="margin-bottom: 0;">Notes</label>
													<textarea id="notes-${todo.uuid}" class="msg__textarea"></textarea>`;

  mainContainer.appendChild(trashContainer);
	mainContainer.appendChild(todoTitle);
	mainContainer.appendChild(caret);

	todoDescriptionContainer.appendChild(descriptionRow);
	todoDescriptionContainer.appendChild(notes);

	dragulaCont.appendChild(mainContainer);
	dragulaCont.appendChild(todoDescriptionContainer);

	$("#tasks-container").prepend(dragulaCont);
}

export { todo, displayTodo }