$('#menu-toggle').on('click', (e) => {
  e.preventDefault();
  $('#wrapper').toggleClass('toggled');
});

function focusProject(id){
  let projectTitle = $(`#project-${id}`);
  projectTitle.attr("contenteditable", "true");
  projectTitle.focus();
}

function renameProject(id){
  let projectTitle = $(`#project-${id}`);
  projectTitle.attr("contenteditable", "false");
  window.projects[window.currentProject].name = projectTitle.html();
  window.projects[window.currentProject].updateLocalStorage();
	$(".project-header").html(window.projects[window.currentProject].name);
  window.getSelection().removeAllRanges();
}

function renameProjectInHeader(id){
  let projectTitle = $(`#project-${id}`);
  projectTitle.html($(".project-header").html());
  window.projects[window.currentProject].name = $(".project-header").html();
  window.projects[window.currentProject].updateLocalStorage();
}

function deleteProject(id) {  
  let projectContainer = $(`#project-container-${id}`);
  projectContainer.remove();
  $(`#tasks-container`).empty();
  window.removeProject(id);
}

function toggleDescription(id) {
  let todoContainer = $(`#container-${id}`); 
  let toggleButton = $(`#toggle-info-${id}`);
  let todoContent = $(`#description-container-${id}`);
  let allDescriptions = $(".todo_description_row");
  let allCarets = $(".todo_caret");
  

  if( toggleButton.hasClass('fa-caret-up')) {
      hideDescriptions();

      toggleButton.removeClass('fa-caret-up');
      toggleButton.addClass("fa-caret-down")
      todoContainer.css("border-radius",".25rem");
      toggleButton.css("border-bottom-left-radius",".25rem");
      toggleButton.css("border-bottom-right-radius",".25rem");
      
  } else {
    hideDescriptions();
    toggleButton.removeClass('fa-caret-down');
    toggleButton.addClass("fa-caret-up")
    todoContainer.css("border-bottom-right-radius","0px");
    todoContainer.css("border-bottom-left-radius","0px");
    toggleButton.css("border-bottom-left-radius","0px");
    toggleButton.css("border-bottom-right-radius","0px");
    todoContent.slideDown('fast');
  }

  function hideDescriptions(){
    allCarets.removeClass("fa-caret-up");
    allCarets.addClass("fa-caret-down");
    allDescriptions.hide();
  }
}

function toggleDoneButton(id) {
  let btn = $(`#done-button-${id}`);
  let todo = $(`#dragula-${id}`);
  let title = $(`#title-${id}`);

  if(btn.prop("checked") == true){
    btn.prop("checked") == true;
    window.projects[window.currentProject].toggleDone(1, id);
    todo.css("opacity", "0.7");
    title.css("text-decoration", "line-through");
  } else {
    btn.prop("checked") == false;
    window.projects[window.currentProject].toggleDone(0, id);
    todo.css("opacity", "1");
    title.css("text-decoration", "none");
  }
}

function removeTodo(id){
  let todo = $(`#dragula-${id}`);
  todo.remove();
  window.projects[window.currentProject].removeTodo(id);
}

function renameTodo(id){
  let content = $(`#title-${id}`);
  window.projects[window.currentProject].renameTodo(id, content.html());
  window.getSelection().removeAllRanges();
}

function addTodoDesc(id){
  let content = $(`#description-${id}`);
  window.projects[window.currentProject].addTodoDesc(id, content.html());
  window.getSelection().removeAllRanges();
}

function addTodoNotes(id){
  let content = $(`#notes-${id}`).val();
  window.projects[window.currentProject].addTodoNotes(id, content);
}