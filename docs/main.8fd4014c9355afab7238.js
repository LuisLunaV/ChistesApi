(()=>{"use strict";function n(n,e,t,r,o,c,a){try{var i=n[c](a),u=i.value}catch(n){return void t(n)}i.done?e(u):Promise.resolve(u).then(r,o)}var e=function(){var e=function(e){return function(){var t=this,r=arguments;return new Promise((function(o,c){function a(e){n(u,o,c,a,i,"next",e)}function i(e){n(u,o,c,a,i,"throw",e)}var u=e.apply(t,r);a(void 0)}))}}(regeneratorRuntime.mark((function n(){var e,t,r,o,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.chucknorris.io/jokes/random");case 2:if(e=n.sent,n.prev=3,!e.ok){n.next=14;break}return n.next=7,e.json();case 7:return t=n.sent,r=t.id,o=t.value,c=t.icon_url,n.abrupt("return",{id:r,value:o,icon_url:c});case 14:throw"No se pudo realizar la peticion";case 15:n.next=20;break;case 17:throw n.prev=17,n.t0=n.catch(3),n.t0;case 20:case"end":return n.stop()}}),n,null,[[3,17]])})));return function(){return e.apply(this,arguments)}}();function t(n,e,t,r,o,c,a){try{var i=n[c](a),u=i.value}catch(n){return void t(n)}i.done?e(u):Promise.resolve(u).then(r,o)}function r(n){return function(){var e=this,r=arguments;return new Promise((function(o,c){function a(n){t(u,o,c,a,i,"next",n)}function i(n){t(u,o,c,a,i,"throw",n)}var u=n.apply(e,r);a(void 0)}))}}var o,c=document.body,a=0,i=function(n){a++;var e=document.querySelector("ol"),t=document.createElement("li");t.innerHTML="<br>".concat(a,".-").concat(n.id,"</br>").concat(n.value,' <img class="img-thumbnail" src="').concat(n.icon_url,'">'),t.classList.add("list-group-item"),e.append(t)};(o=document.createElement("div")).innerHTML='<h1 class="mt-5">Chistes:</h1>\n    <hr>  \n    <button class="btn btn-primary">New jockes</button>\n\n    <ol class="mt-2 list-group">\n    </ol>',c.append(o),function(){var n=document.querySelector("button");n.addEventListener("click",r(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.disabled=!0,t.t0=i,t.next=4,e();case 4:t.t1=t.sent,(0,t.t0)(t.t1),n.disabled=!1;case 7:case"end":return t.stop()}}),t)}))))}()})();