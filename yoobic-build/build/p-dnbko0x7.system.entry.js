var __awaiter=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function s(t){try{u(r.next(t))}catch(t){i(t)}}function a(t){try{u(r["throw"](t))}catch(t){i(t)}}function u(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(s,a)}u((r=r.apply(t,e||[])).next())})};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(t){return function(e){return u([t,e])}}function u(s){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,o&&(i=s[0]&2?o["return"]:s[0]?o["throw"]||((i=o["return"])&&i.call(o),0):o.next)&&!(i=i.call(o,s[1])).done)return i;if(o=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:n.label++;return{value:s[1],done:false};case 5:n.label++;o=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){n.label=s[1];break}if(s[0]===6&&n.label<i[1]){n.label=i[1];i=s;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(s);break}if(i[2])n.ops.pop();n.trys.pop();continue}s=e.call(t,n)}catch(t){s=[6,t];o=0}finally{r=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-d99b9c19.system.js","./p-76deb591.system.js","./p-40fcf55a.system.js","./p-fd4afab3.system.js","./p-90888482.system.js"],function(t){"use strict";var e,n,r,o,i;return{setters:[function(t){e=t.r},function(t){n=t.dv;r=t.dq;o=t.dr;i=t.ds},function(){},function(){},function(){}],execute:function(){var s=t("yoo_ion_toast_controller",function(){function t(t){e(this,t);this.toasts=new Map}t.prototype.toastWillPresent=function(t){this.toasts.set(t.target.overlayId,t.target)};t.prototype.toastWillDismiss=function(t){this.toasts.delete(t.target.overlayId)};t.prototype.escapeKeyUp=function(t){if(t&&t.key&&t.key.toLowerCase&&t.key.toLowerCase()==="escape"){this.closeLastOpened()}};t.prototype.closeLastOpened=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){n(this.toasts);return[2]})})};t.prototype.getOpened=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,this.toasts]})})};t.prototype.create=function(t){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,r(document.createElement("yoo-toast"),t)]})})};t.prototype.dismiss=function(t,e,n){if(n===void 0){n=-1}return __awaiter(this,void 0,void 0,function(){return __generator(this,function(r){return[2,o(t,e,this.toasts,n,"YOO-TOAST")]})})};t.prototype.getTop=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,i(this.toasts)]})})};return t}())}}});