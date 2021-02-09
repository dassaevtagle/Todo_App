import {
  project,
  addProjectToSidebar,
  displayProject,
  removeProject
} from './modules/project';
import {
  todo,
  displayTodo
} from './modules/todo';

let projects = JSON.parse(localStorage.getItem("projects"));
let todosOrder;
let currentProject = JSON.parse(localStorage.getItem("currentProject"));

(function init() {
  const displayTemplate = () => {
    let mainDiv = document.createElement("div");
      mainDiv.id = "wrapper";
      mainDiv.classList.add("d-flex");
    let html = `<!-- Sidebar -->
                <div class="border-right" id="sidebar-wrapper">
                  <div class="sidebar-heading second-bg">My projects </div>
                  <ul class="list-group list-group-flush mb-4" id="projects-list">
                  </ul>
                  <div class="text-center">
                    <button class="btn mt-2" id="add-project-button">New project &nbsp; +</button>
                  </div>
                </div>
                <!-- /#sidebar-wrapper -->
  
                <!-- Page Content -->
                <div id="page-content-wrapper">
  
                  <nav class="navbar navbar-expand-lg navbar-light border-bottom second-bg">
                    <button class="btn" id="menu-toggle">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    <div class="container col-10 justify-content-center">
                      <h2 class="project-header" contenteditable="true" onclick="document.execCommand('selectAll',false,null)" 
                        spellcheck="false"></h2>
                    </div>
                  </nav>
  
                  <!-- Main Content -->
                  <div class="container mt-3 mb-3">
                    <div class="col-lg-8 offset-lg-2"id="tasks-container">
                    </div>
                  </div>
                  <div class="bottom-button">	
                    <a class="btn btn-lg" id="addTodoBtn">+</a> 
                  </div>		
                </div>
                <!-- /#page-content-wrapper -->`;
  
    mainDiv.innerHTML = html;
    document.body.prepend(mainDiv);
  }

  displayTemplate();

  if(projects === null){
    projects = {};
    let defaultProject = project();
    projects[defaultProject.uuid] = defaultProject;
    currentProject = defaultProject.uuid;
    localStorage.setItem('projects', JSON.stringify(projects));
    localStorage.setItem('currentProject', JSON.stringify(currentProject));
    addProjectToSidebar(defaultProject);
    displayProject(defaultProject.uuid, projects, false);
  } else {
    let initProject = projects[currentProject]; 
    for(let [key, value] of Object.entries(projects)){
      let newValue = project().fromJSON(value);
      projects[key] = newValue;
      addProjectToSidebar(newValue);
      if(key === currentProject){
        displayProject(initProject.uuid, projects, false);
      }
    }
  } 

  var drake = dragula({
    revertOnSpill: true,
    moves: function (el, container, handle) {
      return handle.classList.contains('dragula-handler');
    }
  });

  drake.containers.push(document.querySelector("#tasks-container"));

  drake.on('drop', function (el, target, source, sibling) {
    let numPositions = _.keys(window.projects[window.currentProject].todos).length;
    let hermano = sibling ? sibling.id.slice(8) : null;
    let element = {
      uuid: el.id.slice(8),
      beforePosition: window.projects[window.currentProject].todos[el.id.slice(8)].position,
      afterPosition: sibling ? window.projects[window.currentProject].todos[sibling.id.slice(8)].position : numPositions - 1
    }
    window.projects[window.currentProject].changeTodoPosition(element.uuid, element.afterPosition);

    if (hermano) {
      if (element.beforePosition > element.afterPosition) {
        for (let [key, value] of Object.entries(window.projects[window.currentProject].todos)) {
          if (key != element.uuid && (value.position < element.beforePosition && value.position >= element.afterPosition)) {
            let p = value.position + 1;
            window.projects[window.currentProject].changeTodoPosition(key, p);
          }
        }
        localStorage.setItem('projects', JSON.stringify(window.projects));
      } else if (element.beforePosition < element.afterPosition) {
        for (let [key, value] of Object.entries(window.projects[window.currentProject].todos)) {
          if (key != element.uuid && (value.position > element.beforePosition && value.position <= element.afterPosition)) {
            let p = value.position - 1;
            window.projects[window.currentProject].changeTodoPosition(key, p);
          }
        }
        localStorage.setItem('projects', JSON.stringify(window.projects));
      }
    } else {
      for (let [key, value] of Object.entries(window.projects[window.currentProject].todos)) {
        if (key != element.uuid && value.position > element.beforePosition) {
          let p = value.position - 1;
          window.projects[window.currentProject].changeTodoPosition(key, p);
        }
      }
      localStorage.setItem('projects', JSON.stringify(window.projects));
    }
  });
  drake.on('drag',function(el,source){                                    
    var h = $(window).height();                  
    $(document).mousemove(function(e) {     
        var mousePosition = e.pageY - $(window).scrollTop();
        var topRegion = 220;
        var bottomRegion = h - 220;
        if(e.which == 1 && (mousePosition < topRegion || mousePosition > bottomRegion)){    // e.wich = 1 => click down !                                                                                   
            var distance = e.clientY - h / 2;
            distance = distance * 0.1; // <- velocity
            $(document).scrollTop( distance + $(document).scrollTop()) ;                    
        }else{
            $(document).unbind('mousemove');
        }
    });
});

}());



$('#addTodoBtn').on('click', () => {
  const newTodo = todo();

  newTodo.position = 0;
  window.projects[window.currentProject].addTodo(newTodo);

  for (let [key, value] of Object.entries(window.projects[window.currentProject].todos)) {
    if (key != newTodo.uuid) {
      let p = value.position + 1;
      window.projects[window.currentProject].changeTodoPosition(key, p);
    }
  }

  displayTodo(newTodo);
  localStorage.setItem('projects', JSON.stringify(window.projects));
});

$('#add-project-button').on('click', () => {
  const newPr = project();
  projects[newPr.uuid] = newPr;
  addProjectToSidebar(newPr);

  let projectTitle = $(`#project-${newPr.uuid}`);
  projectTitle.attr("contenteditable", "true");
  projectTitle.focus();

  displayProject(newPr.uuid, projects, true);
  localStorage.setItem('projects', JSON.stringify(window.projects));
});

window.displayProject = displayProject;
window.projects = projects;
window.displayTodo = displayTodo;
window.currentProject = currentProject;
window.todosOrder = todosOrder;
window.removeProject = removeProject;