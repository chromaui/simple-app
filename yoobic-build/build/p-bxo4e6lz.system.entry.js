System.register(["./p-d99b9c19.system.js","./p-76deb591.system.js","./p-40fcf55a.system.js","./p-fd4afab3.system.js","./p-e3fa184f.system.js","./p-90888482.system.js","./p-350cb6c0.system.js"],function(t){"use strict";var e,i,s,n,o,a,c;return{setters:[function(t){e=t.r;i=t.c;s=t.h;n=t.g},function(t){o=t.cH;a=t.z;c=t.t},function(){},function(){},function(){},function(){},function(){}],execute:function(){var l=t("yoo_contact_detail",function(){function t(t){e(this,t);this.chat=i(this,"chat",7);this.videocall=i(this,"videocall",7);this.email=i(this,"email",7);this.call=i(this,"call",7);this.textMessage=i(this,"textMessage",7)}t.prototype.onSendTextMessage=function(){this.textMessage.emit(this.item);if(this.item&&this.item.telephone){window.open("sms:"+this.item.telephone,"_system")}};t.prototype.onCall=function(){this.call.emit(this.item);if(this.item&&this.item.telephone){window.open("tel:"+this.item.telephone,"_system")}};t.prototype.onEmail=function(){this.email.emit(this.item);if(this.item&&this.item.email){window.open("mailto:"+this.item.email,"_system")}};t.prototype.onAvatarSelect=function(){if(this.item&&this.item.imageData){o(this.item.imageData)}};t.prototype.onChat=function(){this.chat.emit(this.item)};t.prototype.onVideoCall=function(){this.videocall.emit(this.item)};t.prototype.render=function(){var t=this;return s("div",{class:"container"},s("yoo-avatar",{class:"xl",avatarIconSize:"xl",user:this.item,onClick:function(e){return t.onAvatarSelect()}}),s("div",{class:"user-name"},this.item.firstName," ",this.item.lastName),this.item.role?s("div",{class:"user-role"},c(this.item.role)):null,s("div",{class:"buttons-container"},this.isUser&&a().userId!==this.item._id&&this.canChat?s("div",{class:"button-container"},s("yoo-button",{class:"icon-only success",icon:"yo-chat",onClick:function(e){return t.onChat()}}),s("span",{class:"button-title"},c("CHAT"))):null,this.isUser&&a().userId!==this.item._id&&this.canVideoCall?s("div",{class:"button-container"},s("yoo-button",{class:"icon-only success",icon:"yo-phone-action-camera",onClick:function(e){return t.onVideoCall()}}),s("span",{class:"button-title"},c("VIDEOCALL"))):null))};Object.defineProperty(t.prototype,"host",{get:function(){return n(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return".iframe-root{top:0;right:0;bottom:0;left:0;position:absolute;color:var(--black);overflow-y:auto;scrollbar-width:none}.iframe-root yoo-app .wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;height:100%;width:100%}.iframe-root yoo-app .wrapper.center-center{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%}.iframe-root::-webkit-scrollbar{display:none}:host .container{margin-top:1rem;text-align:center}:host .container yoo-avatar{display:-ms-inline-flexbox;display:inline-flex}:host .container .user-name{line-height:1.3125rem}:host .container .user-role{color:var(--stable,#adadad);font-size:var(--font-size-02,.875rem);line-height:1rem}:host .container .buttons-container{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-line-pack:center;align-content:center;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around;margin:2rem}:host .container .buttons-container .button-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-line-pack:center;align-content:center;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host .container .buttons-container .button-container .button-title{padding-top:var(--padding-5,.3125rem);color:var(--success,#04cc99);font-size:var(--font-size-01,.75rem)}"},enumerable:true,configurable:true});return t}())}}});