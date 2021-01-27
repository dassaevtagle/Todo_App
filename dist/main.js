(()=>{"use strict";var t,e=new Uint8Array(16);function n(){if(!t&&!(t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return t(e)}const r=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,o=function(t){return"string"==typeof t&&r.test(t)};for(var i=[],a=0;a<256;++a)i.push((a+256).toString(16).substr(1));const d=function(t,e,r){var a=(t=t||{}).random||(t.rng||n)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,e){r=r||0;for(var d=0;d<16;++d)e[r+d]=a[d];return e}return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(i[t[e+0]]+i[t[e+1]]+i[t[e+2]]+i[t[e+3]]+"-"+i[t[e+4]]+i[t[e+5]]+"-"+i[t[e+6]]+i[t[e+7]]+"-"+i[t[e+8]]+i[t[e+9]]+"-"+i[t[e+10]]+i[t[e+11]]+i[t[e+12]]+i[t[e+13]]+i[t[e+14]]+i[t[e+15]]).toLowerCase();if(!o(n))throw TypeError("Stringified UUID is invalid");return n}(a)},s=(t="New task")=>{const e={name:t,uuid:0,done:!1,dueDate:void 0,description:"Description",priority:3,notes:""};return Object.assign({},e)},u=t=>{let e=document.createElement("div"),n=document.createElement("h4");n.innerHTML=t.name,e.classList.add("border","rounded","col-10","offset-1"),e.appendChild(n),$("#tasks-container").append(e)};!function(){const t=((t="New project")=>{let e,n={};const r={name:t,get dueDate(){return e||-1},set dueDate(t){e=t},addTodo(t){let e=d();t.uuid=e,n[e]=t},removeTodo(t){delete n[t]},get todos(){return(t=>{for(var e in t)if(t.hasOwnProperty(e))return!1;return!0})(n)?n:-1}};return Object.assign({},r)})(),e=s();t.addTodo(e),u(e),(t=>{let e=document.createElement("a");e.classList.add("list-group-item","list-group-item-action","bg-light"),e.innerHTML=t.name,$("#projects-list").append(e)})(t),console.dir(t)}(),$("#addTodoBtn").on("click",(()=>{let t=s();u(t)}))})();