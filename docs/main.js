(()=>{"use strict";const t=(t="New task")=>{const e={name:t,uuid:uuidv4(),done:0,description:"Write your description here.",priority:1,notes:"",position:0};return Object.assign({},e)},e=t=>{let e=document.createElement("div");e.id=`dragula-${t.uuid}`,e.classList.add("dragula-container");let o=document.createElement("div");o.classList.add("border","col-10","offset-1","todo_main_container"),o.id=`container-${t.uuid}`;let i=document.createElement("div");i.classList.add("row","dragula-mover-row");let n=document.createElement("div");n.classList.add("col-4","dragula-handler"),n.innerHTML='<i class="fa fa-arrows" aria-hidden="true"></i>';let d=document.createElement("div");d.classList.add("trash_container","col-6","offset-2"),d.innerHTML=`<div class="text-right">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class="fa fa-trash todo_trash" aria-hidden="true" onclick="removeTodo('${t.uuid}')"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>`;let r=document.createElement("div");r.classList.add("row","todo_title_row"),r.innerHTML=`<div class="col-2">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="flip-switch flip-switch-icon">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="done-button-${t.uuid}" onclick="toggleDoneButton('${t.uuid}')">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for="done-button-${t.uuid}"></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-md-9 col-8 todo_title_col">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="pl-2">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class="todo_title" contenteditable="true" onclick="document.execCommand('selectAll',false,null)" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid="title-${t.uuid}" onblur="renameTodo('${t.uuid}')" spellcheck="false">${t.name}</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>`;let s=document.createElement("div");s.classList.add("d-flex","justify-content-center"),s.innerHTML=`<i class="todo_caret fa fa-caret-down" id="toggle-info-${t.uuid}" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-hidden="true" onclick="toggleDescription('${t.uuid}')">\n\t\t\t\t\t\t\t\t\t\t\t\t</i>`;let a=document.createElement("div");a.classList.add("todo_description_row","border","col-10","offset-1","mb-4"),a.id=`description-container-${t.uuid}`;let c=document.createElement("div");c.classList.add("row","p-3"),c.innerHTML=`<div class="col-md-6 col-12">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="todo_description" spellcheck="false" contenteditable="true" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid="description-${t.uuid}" onblur="addTodoDesc('${t.uuid}')"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tonclick="document.execCommand('selectAll',false,null)">${t.description}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-md-6 col-12">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-12">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="todo_priority">Priority &nbsp; <p class="text-muted muted_priority">(1 is the most important)</p></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-12">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="switch-field offset-3 offset-md-1">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="radio" id="radio-one-${t.uuid}" name="priority-${t.uuid}" value="1" onclick="window.projects[window.currentProject].changePriority('${t.uuid}', 1)"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for="radio-one-${t.uuid}">1</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="radio" id="radio-two-${t.uuid}" name="priority-${t.uuid}" value="2" onclick="window.projects[window.currentProject].changePriority('${t.uuid}', 2)"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for="radio-two-${t.uuid}">2</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="radio" id="radio-three-${t.uuid}" name="priority-${t.uuid}" value="3" onclick="window.projects[window.currentProject].changePriority('${t.uuid}', 3)"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for="radio-three-${t.uuid}">3</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>`;let l=document.createElement("div");switch(l.classList.add("msg"),l.innerHTML=`<label for="notes-${t.uuid} style="margin-bottom: 0;">Notes</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<textarea id="notes-${t.uuid}" class="msg__textarea" onblur="addTodoNotes('${t.uuid}')">${t.notes}</textarea>`,i.appendChild(d),i.prepend(n),o.appendChild(i),o.appendChild(r),o.appendChild(s),a.appendChild(c),a.appendChild(l),e.appendChild(o),e.appendChild(a),$("#tasks-container").prepend(e),1==t.done?($(`#done-button-${t.uuid}`).prop("checked",!0),$(`#dragula-${t.uuid}`).css("opacity","0.7")):($(`#done-button-${t.uuid}`).prop("checked",!1),$(`#dragula-${t.uuid}`).css("opacity","1")),t.priority){case 1:$(`input[name='priority-${t.uuid}']`)[0].checked=!0;break;case 2:$(`input[name='priority-${t.uuid}']`)[1].checked=!0;break;case 3:$(`input[name='priority-${t.uuid}']`)[2].checked=!0}},o=(e="New project")=>{let o,n={},d=t();n[d.uuid]=d;const r={name:e,uuid:uuidv4(),get dueDate(){return o||-1},set dueDate(t){o=t,this.updateLocalStorage()},addTodo(t){this.todos[t.uuid]=t,this.updateLocalStorage()},removeTodo(t){delete this.todos[t],this.updateLocalStorage()},renameTodo(t,e){this.todos[t].name=e,this.updateLocalStorage()},toggleDone(t,e){switch(t){case 0:this.todos[e].done=0;break;case 1:this.todos[e].done=1;break;default:console.log("Invalid operation.")}this.updateLocalStorage()},addTodoDesc(t,e){this.todos[t].description=e,this.updateLocalStorage()},addTodoNotes(t,e){this.todos[t].notes=e,this.updateLocalStorage()},changePriority(t,e){let o=this.todos[t];switch(e){case 1:o.priority=1;break;case 2:o.priority=2;break;case 3:o.priority=3;break;default:console.log("Invalid operation.")}this.updateLocalStorage()},changeTodoPosition(t,e){this.todos[t].position=e},get todos(){return i(n)?-1:n},updateLocalStorage(){localStorage.setItem("projects",JSON.stringify(window.projects)),console.log("Local Storage updated!!")},toJSON(){return{name:this.name,todos:this.todos,uuid:this.uuid,dueDate:this.dueDate}},fromJSON(t){var e=t,o=Object.assign({},r);return o.todos=e.todos,o.name=e.name,o.uuid=e.uuid,o.dueDate=e.dueDate,o}};return Object.assign({},r)},i=t=>{for(var e in t)if(t.hasOwnProperty(e))return!1;return!0},n=t=>{let e=document.createElement("li");e.classList.add("list-group-item","list-group-item-action"),e.id=`project-container-${t.uuid}`,e.innerHTML=`<div class="project_title col-8" onclick="window.displayProject('${t.uuid}', window.projects, false)" \n\t\t\t\t\t\t\t\t\t\t\t\tspellcheck="false" id="project-${t.uuid}" onfocus="document.execCommand('selectAll',false,null)" onblur="renameProject('${t.uuid}')">\n\t\t\t\t\t\t\t\t\t\t\t\t${t.name}\n\t\t\t\t\t\t\t\t\t\t\t</div>\n          \t\t\t\t\t\t<span class="badge badge-pill list-icon" onclick="deleteProject('${t.uuid}')"><i class="fa fa-trash icon" aria-hidden="true"></i></span>\n          \t\t\t\t\t\t<span class="badge badge-pill list-icon" onclick="focusProject('${t.uuid}')"><i class="fa fa-pencil icon" aria-hidden="true" ></i></span>`,$("#projects-list").append(e)},d=(t,o,i)=>{$("#tasks-container").empty(),$("#tasks-container").hide();let n=o[t];window.todosOrder=[];for(let[t,e]of Object.entries(n.todos)){let t=[e.uuid,e.position];window.todosOrder.push(t)}window.todosOrder.sort((function(t,e){return e[1]-t[1]}));for(let t=0;t<window.todosOrder.length;t++){let o=n.todos[window.todosOrder[t][0]];e(o)}$("#tasks-container").slideDown("fast"),window.currentProject=t,localStorage.setItem("currentProject",JSON.stringify(window.currentProject)),window.screen.width<992&&!i&&$("#wrapper").removeClass("toggled"),$(".project-header").html(n.name),$(".project-header").attr("onblur",`renameProjectInHeader('${n.uuid}')`)};let r=JSON.parse(localStorage.getItem("projects")),s=JSON.parse(localStorage.getItem("currentProject"));!function(){if((()=>{let t=document.createElement("div");t.id="wrapper",t.classList.add("d-flex"),t.innerHTML='\x3c!-- Sidebar --\x3e\n                <div class="border-right" id="sidebar-wrapper">\n                  <div class="sidebar-heading second-bg">My projects </div>\n                  <ul class="list-group list-group-flush mb-4" id="projects-list">\n                  </ul>\n                  <div class="text-center">\n                    <button class="btn mt-2" id="add-project-button">New project &nbsp; +</button>\n                  </div>\n                </div>\n                \x3c!-- /#sidebar-wrapper --\x3e\n  \n                \x3c!-- Page Content --\x3e\n                <div id="page-content-wrapper">\n  \n                  <nav class="navbar navbar-expand-lg navbar-light border-bottom second-bg">\n                    <button class="btn" id="menu-toggle">\n                      <span class="navbar-toggler-icon"></span>\n                    </button>\n                    \n                    <div class="container col-10 justify-content-center">\n                      <h2 class="project-header" contenteditable="true" onclick="document.execCommand(\'selectAll\',false,null)" \n                        spellcheck="false"></h2>\n                    </div>\n                  </nav>\n  \n                  \x3c!-- Main Content --\x3e\n                  <div class="container mt-3 mb-3">\n                    <div class="col-lg-8 offset-lg-2"id="tasks-container">\n                    </div>\n                  </div>\n                  <div id="scroll-top-button">\n                      <a class="btn btn-lg btn-light"><i class="fa fa-chevron-up" aria-hidden="true"></i></a>\n                  </div>\n                  <div id="scroll-down-button">\n                      <a class="btn btn-lg btn-light"><i class="fa fa-chevron-down" aria-hidden="true"></i></a>\n                  </div>\n                  <div class="bottom-button">\t\n                    <a class="btn btn-lg" id="addTodoBtn">+</a> \n                  </div>\t\t\n                </div>\n                \x3c!-- /#page-content-wrapper --\x3e',document.body.prepend(t)})(),null===r){r={};let t=o();r[t.uuid]=t,s=t.uuid,localStorage.setItem("projects",JSON.stringify(r)),localStorage.setItem("currentProject",JSON.stringify(s)),n(t),d(t.uuid,r,!1)}else{let t=r[s];for(let[e,i]of Object.entries(r)){let a=o().fromJSON(i);r[e]=a,n(a),e===s&&d(t.uuid,r,!1)}}var t=dragula({revertOnSpill:!0,moves:function(t,e,o){return o.classList.contains("dragula-handler")}});t.containers.push(document.querySelector("#tasks-container")),t.on("drop",(function(t,e,o,i){let n=_.keys(window.projects[window.currentProject].todos).length,d=i?i.id.slice(8):null,r={uuid:t.id.slice(8),beforePosition:window.projects[window.currentProject].todos[t.id.slice(8)].position,afterPosition:i?window.projects[window.currentProject].todos[i.id.slice(8)].position:n-1};if(window.projects[window.currentProject].changeTodoPosition(r.uuid,r.afterPosition),d){if(r.beforePosition>r.afterPosition){for(let[t,e]of Object.entries(window.projects[window.currentProject].todos))if(t!=r.uuid&&e.position<r.beforePosition&&e.position>=r.afterPosition){let o=e.position+1;window.projects[window.currentProject].changeTodoPosition(t,o)}localStorage.setItem("projects",JSON.stringify(window.projects))}else if(r.beforePosition<r.afterPosition){for(let[t,e]of Object.entries(window.projects[window.currentProject].todos))if(t!=r.uuid&&e.position>r.beforePosition&&e.position<=r.afterPosition){let o=e.position-1;window.projects[window.currentProject].changeTodoPosition(t,o)}localStorage.setItem("projects",JSON.stringify(window.projects))}}else{for(let[t,e]of Object.entries(window.projects[window.currentProject].todos))if(t!=r.uuid&&e.position>r.beforePosition){let o=e.position-1;window.projects[window.currentProject].changeTodoPosition(t,o)}localStorage.setItem("projects",JSON.stringify(window.projects))}}))}(),$("#addTodoBtn").on("click",(()=>{const o=t();o.position=0,window.projects[window.currentProject].addTodo(o);for(let[t,e]of Object.entries(window.projects[window.currentProject].todos))if(t!=o.uuid){let o=e.position+1;window.projects[window.currentProject].changeTodoPosition(t,o)}e(o),localStorage.setItem("projects",JSON.stringify(window.projects))})),$("#add-project-button").on("click",(()=>{const t=o();r[t.uuid]=t,n(t);let e=$(`#project-${t.uuid}`);e.attr("contenteditable","true"),e.focus(),d(t.uuid,r,!0),localStorage.setItem("projects",JSON.stringify(window.projects))})),$("#scroll-top-button").on("mousedown touchstart",(()=>{!function t(){$("html, body").stop().animate({scrollTop:Math.max($("html").scrollTop(),$("body").scrollTop())-350},1e3,"linear",(function(){window.timeout=setTimeout(t(),0)}))}()})).on("mouseup touchend",(function(){$("html, body").stop(),clearTimeout(window.timeout)})),$("#scroll-down-button").on("mousedown touchstart",(()=>{!function t(){$("html, body").stop().animate({scrollTop:Math.max($("html").scrollTop(),$("body").scrollTop())+350},1e3,"linear",(function(){window.timeout=setTimeout(t(),0)}))}()})).on("mouseup touchend",(function(){$("html, body").stop(),clearTimeout(window.timeout)})),window.displayProject=d,window.projects=r,window.displayTodo=e,window.currentProject=s,window.todosOrder=void 0,window.removeProject=t=>{delete window.projects[t],localStorage.setItem("projects",JSON.stringify(window.projects))}})();