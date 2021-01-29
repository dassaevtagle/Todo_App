(()=>{"use strict";var t,e=new Uint8Array(16);function i(){if(!t&&!(t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return t(e)}const n=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,d=function(t){return"string"==typeof t&&n.test(t)};for(var o=[],r=0;r<256;++r)o.push((r+256).toString(16).substr(1));const a=function(t,e,n){var r=(t=t||{}).random||(t.rng||i)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(var a=0;a<16;++a)e[n+a]=r[a];return e}return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=(o[t[e+0]]+o[t[e+1]]+o[t[e+2]]+o[t[e+3]]+"-"+o[t[e+4]]+o[t[e+5]]+"-"+o[t[e+6]]+o[t[e+7]]+"-"+o[t[e+8]]+o[t[e+9]]+"-"+o[t[e+10]]+o[t[e+11]]+o[t[e+12]]+o[t[e+13]]+o[t[e+14]]+o[t[e+15]]).toLowerCase();if(!d(i))throw TypeError("Stringified UUID is invalid");return i}(r)},s=(t="New task")=>{const e={name:t,uuid:a(),done:!1,dueDate:void 0,description:"Description",priority:3,notes:""};return Object.assign({},e)},l=t=>{let e=document.createElement("div");e.classList.add("border","col-10","offset-1","todo_main_container"),e.id=`container-${t.uuid}`;let i=document.createElement("div");i.classList.add("trash_container","col-12"),i.innerHTML='<div class="text-right">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class="fa fa-trash" aria-hidden="true"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>';let n=document.createElement("div");n.classList.add("row","todo_title"),n.innerHTML=`<div class="col-9">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="pl-2">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 contenteditable="true" id="title-${t.uuid}" spellcheck="false">New task</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-2">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="flip-switch flip-switch-icon">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="done-button-${t.uuid}" data-content="0" onclick="toggleDoneButton('${t.uuid}')">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for="done-button-${t.uuid}"></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>`;let d=document.createElement("div");d.classList.add("d-flex","justify-content-center"),d.innerHTML=`<i class="todo_caret fa fa-caret-down text-muted" id="toggle-info-${t.uuid}" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\taria-hidden="true" onclick="toggleDescription('${t.uuid}')">\n\t\t\t\t\t\t\t\t\t\t\t\t</i>`;let o=document.createElement("div");o.classList.add("todo_description","border","col-10","offset-1","mb-4"),o.id=`description-container-${t.uuid}`;let r=document.createElement("div");r.id=`description-${t.uuid}`,r.setAttribute("contenteditable","truwe"),r.setAttribute("spellcheck","false"),r.style.padding="20px",r.innerHTML="Write a description here.";let a=document.createElement("div");a.classList.add("d-inline-flex","todo_priority","col-12","col-md-7"),a.innerHTML='Priority <p class="text-muted">(1 is the most important)</p></div>';let s=document.createElement("div");s.classList.add("d-inline-flex","switch-field","offset-3","offset-md-1"),s.innerHTML=`<input type="radio" id="radio-one-${t.uuid}" name="priority-${t.uuid}" value="1" checked/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for="radio-one-${t.uuid}">1</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="radio" id="radio-two-${t.uuid}" name="priority-${t.uuid}" value="2" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for="radio-two-${t.uuid}">2</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="radio" id="radio-three-${t.uuid}" name="priority-${t.uuid}" value="3" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for="radio-three-${t.uuid}">3</label>`;let l=document.createElement("div");l.classList.add("msg"),l.innerHTML=`<label for="notes-${t.uuid}">Notes</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<textarea id="notes-${t.uuid}" class="msg__textarea"></textarea>`,e.appendChild(i),e.appendChild(n),e.appendChild(d),o.appendChild(r),o.appendChild(a),o.appendChild(s),o.appendChild(l),$("#tasks-container").prepend(o),$("#tasks-container").prepend(e)};!function(){const t=((t="New project")=>{let e,i={};const n={name:t,get dueDate(){return e||-1},set dueDate(t){e=t},addTodo(t){i[t.uuid]=t},removeTodo(t){delete i[t]},get todos(){return(t=>{for(var e in t)if(t.hasOwnProperty(e))return!1;return!0})(i)?i:-1}};return Object.assign({},n)})(),e=s();t.addTodo(e),l(e),(t=>{let e=document.createElement("a");e.classList.add("list-group-item","list-group-item-action","bg-light"),e.innerHTML=t.name,$("#projects-list").append(e)})(t),console.dir(t)}(),$("#addTodoBtn").on("click",(()=>{let t=s();l(t)}))})();