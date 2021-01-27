const todo = (name = "New task") => {
	const proto = {
		name,
		uuid: 0,
		done: false,
		dueDate:undefined,
		description: "Description",
		priority: 3,
		notes: ""
	}
	
	return Object.assign({}, proto)
}

const displayTodo = (todo) => {
	let card = document.createElement("div");
	let content = document.createElement("h4");

	content.innerHTML = todo.name;
	card.classList.add("border", "rounded", "col-10", "offset-1");
	card.appendChild(content);

	$("#tasks-container").append(card);
}

export { todo, displayTodo }