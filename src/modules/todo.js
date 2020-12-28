const todo = (name = "New task") => {
	const proto = {
	  done: false,
	  name,
	}
	
	return Object.assign({}, proto)
}

const displayTodo = (todo) => {
	let card = document.createElement("div");
	let content = document.createElement("h4");

	content.innerHTML = todo.name;
	card.classList.add("p-4", "border", "rounded", "col-md-6", "offset-md-3", "mb-4");
	card.appendChild(content);

	$("#tasks-container").append(card);
}

export { todo, displayTodo }