const project = (name = "New project") => {
	let _dueDate
	let _todos = []
	const proto = {
	   name,
	   get dueDate() {
	   	if(_dueDate){
				return _dueDate
			}
			return "There's no due date yet."
	   },
	   set dueDate(date) {
	       	_dueDate = date
	   },
	   addTodo(todo){
	     _todos.push(todo)
	   },
	   get todos(){
	     if(_todos){
	     	return _todos
	     }
	     return "There are no tasks yet"
	   }
	}

	return Object.assign({}, proto)
}

export { project }
