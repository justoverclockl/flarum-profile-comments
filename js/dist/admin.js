/*! For license information please see admin.js.LICENSE.txt */
(()=>{var t={24:(t,e,r)=>{var n=r(735).default;function o(){"use strict";t.exports=o=function(){return r},t.exports.__esModule=!0,t.exports.default=t.exports;var e,r={},i=Object.prototype,a=i.hasOwnProperty,c=Object.defineProperty||function(t,e,r){t[e]=r.value},s="function"==typeof Symbol?Symbol:{},u=s.iterator||"@@iterator",l=s.asyncIterator||"@@asyncIterator",f=s.toStringTag||"@@toStringTag";function h(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(e){h=function(t,e,r){return t[e]=r}}function m(t,e,r,n){var o=e&&e.prototype instanceof x?e:x,i=Object.create(o.prototype),a=new C(n||[]);return c(i,"_invoke",{value:k(t,r,a)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=m;var d="suspendedStart",y="suspendedYield",v="executing",g="completed",b={};function x(){}function w(){}function L(){}var P={};h(P,u,(function(){return this}));var _=Object.getPrototypeOf,E=_&&_(_(G([])));E&&E!==i&&a.call(E,u)&&(P=E);var j=L.prototype=x.prototype=Object.create(P);function O(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function N(t,e){function r(o,i,c,s){var u=p(t[o],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==n(f)&&a.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,s)}),(function(t){r("throw",t,c,s)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,s)}))}s(u.arg)}var o;c(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}})}function k(t,r,n){var o=d;return function(i,a){if(o===v)throw Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:e,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var s=U(c,n);if(s){if(s===b)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var u=p(t,r,n);if("normal"===u.type){if(o=n.done?g:y,u.arg===b)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=g,n.method="throw",n.arg=u.arg)}}}function U(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,U(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),b;var i=p(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,b;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,b):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,b)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function G(t){if(t||""===t){var r=t[u];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(a.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw new TypeError(n(t)+" is not iterable")}return w.prototype=L,c(j,"constructor",{value:L,configurable:!0}),c(L,"constructor",{value:w,configurable:!0}),w.displayName=h(L,f,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,h(t,f,"GeneratorFunction")),t.prototype=Object.create(j),t},r.awrap=function(t){return{__await:t}},O(N.prototype),h(N.prototype,l,(function(){return this})),r.AsyncIterator=N,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new N(m(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(j),h(j,f,"Generator"),h(j,u,(function(){return this})),h(j,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=G,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=a.call(i,"catchLoc"),u=a.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,b):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:G(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),b}},r}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},735:t=>{function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},183:(t,e,r)=>{var n=r(24)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";const t=flarum.core.compat["common/app"];r.n(t)().initializers.add("justoverclock/profile-comments",(function(){console.log("[justoverclock/profile-comments] Hello, forum and admin!")}));const e=flarum.core.compat["admin/app"];var n=r.n(e);function o(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var a=t.apply(e,r);function c(t){o(a,n,i,c,s,"next",t)}function s(t){o(a,n,i,c,s,"throw",t)}c(void 0)}))}}function a(t,e){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},a(t,e)}var c=r(183),s=r.n(c);const u=flarum.core.compat["admin/components/ExtensionPage"];var l=function(t){function e(){return t.apply(this,arguments)||this}var r,o;o=t,(r=e).prototype=Object.create(o.prototype),r.prototype.constructor=r,a(r,o);var c=e.prototype;return c.oninit=function(e){t.prototype.oninit.call(this,e),this.loading=!1,this.comments=null,this.currentPage=1,this.totalPages=1,this.getUserComments()},c.oncreate=function(e){t.prototype.oncreate.call(this,e)},c.deleteComment=function(){var t=i(s().mark((function t(e){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n().request({method:"DELETE",url:n().forum.attribute("apiUrl")+"/user-comment-delete/"+e});case 2:this.getUserComments();case 3:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),c.getUserComments=function(){var t=i(s().mark((function t(e,r){var o;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return void 0===e&&(e=1),void 0===r&&(r=30),this.loading=!0,o={page:{number:e,size:r}},t.next=6,n().store.find("user_comments_admin",o);case 6:this.comments=t.sent,this.currentPage=e,this.totalPages=this.comments.payload.meta.totalPages,this.loading=!1,m.redraw();case 11:case"end":return t.stop()}}),t,this)})));return function(e,r){return t.apply(this,arguments)}}(),c.content=function(t){var e=this;return m("div",{className:"container"},m("div",{className:"profile-comment-admin-list"},m("table",{class:"profile-comment-admin-list-table"},m("thead",null,m("tr",null,m("th",{className:"UserListPage-grid-header"},"ID"),m("th",{className:"UserListPage-grid-header"},"User Id"),m("th",{className:"UserListPage-grid-header"},"Commented By (ID)"),m("th",{className:"UserListPage-grid-header"},"Title"),m("th",{className:"UserListPage-grid-header"},"Comment"),m("th",{className:"UserListPage-grid-header"},"Delete"))),m("tbody",null,this.comments&&this.comments.payload.data.map((function(t){var r=t.attributes;return console.log(r),m("tr",null,m("td",null,r.id),m("td",null,r.related_to_user.id),m("td",null,r.commented_by.id),m("td",null,r.comment_title),m("td",{className:"comment-cell"},r.comment),m("td",null,m("button",{onclick:function(){return e.deleteComment(r.id)},class:"Button"},m("i",{class:"fas fa-trash",style:{color:"red"}}))))})))),m("div",{className:"profile-comment-admin-pagination"},m("button",{class:"Button",disabled:1===this.currentPage,onclick:function(){e.currentPage>1&&e.getUserComments(e.currentPage-1)}},"Prev"),m("button",{class:"Button",disabled:this.currentPage===this.totalPages,onclick:function(){e.currentPage<e.totalPages&&e.getUserComments(e.currentPage+1)}},"Next"))))},e}(r.n(u)());n().initializers.add("justoverclock/profile-comments",(function(){n().extensionData.for("justoverclock-profile-comments").registerPage(l)}))})(),module.exports={}})();
//# sourceMappingURL=admin.js.map