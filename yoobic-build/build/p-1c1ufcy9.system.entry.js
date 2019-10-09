var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(i,o){function u(e){try{s(n.next(e))}catch(e){o(e)}}function a(e){try{s(n["throw"](e))}catch(e){o(e)}}function s(e){e.done?i(e.value):new r(function(t){t(e.value)}).then(u,a)}s((n=n.apply(e,t||[])).next())})};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,u;return u={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(u[Symbol.iterator]=function(){return this}),u;function a(e){return function(t){return s([e,t])}}function s(u){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,i&&(o=u[0]&2?i["return"]:u[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;if(i=0,o)u=[u[0]&2,o.value];switch(u[0]){case 0:case 1:o=u;break;case 4:r.label++;return{value:u[1],done:false};case 5:r.label++;i=u[1];u=[0];continue;case 7:u=r.ops.pop();r.trys.pop();continue;default:if(!(o=r.trys,o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){r=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){r.label=u[1];break}if(u[0]===6&&r.label<o[1]){r.label=o[1];o=u;break}if(o&&r.label<o[2]){r.label=o[2];r.ops.push(u);break}if(o[2])r.ops.pop();r.trys.pop();continue}u=t.call(e,r)}catch(e){u=[6,e];i=0}finally{n=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:true}}};System.register(["./p-d99b9c19.system.js","./p-76deb591.system.js","./p-40fcf55a.system.js","./p-fd4afab3.system.js","./p-e3fa184f.system.js","./p-90888482.system.js","./p-350cb6c0.system.js"],function(e){"use strict";var t,r,n,i,o,u,a,s;return{setters:[function(e){t=e.r;r=e.c;n=e.h;i=e.H;o=e.g},function(){},function(){},function(){},function(){},function(e){u=e.cy;a=e.cB;s=e.cz},function(){}],execute:function(){var c=e("yoo_videoplayer_youtube",function(){function e(e){t(this,e);this.controls=true;this.fullscreen=false;this.playerStateChanges=r(this,"playerStateChanges",7)}e.prototype.pauseVideo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){if(this.player&&this.player.pauseVideo){this.player.pauseVideo()}return[2]})})};e.prototype.playVideo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){if(this.player&&this.player.playVideo){this.player.playVideo()}return[2]})})};e.prototype.getCurrentTime=function(){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(t){e=Promise.resolve(0);if(this.player&&this.player.getCurrentTime){e=Promise.resolve(this.player.getCurrentTime())}return[2,e]})})};e.prototype.updateCurrentTime=function(e,t){if(t===void 0){t=true}return __awaiter(this,void 0,void 0,function(){return __generator(this,function(r){this.playVideo();if(this.player&&this.player.seekTo){this.player.seekTo(e)}if(t){this.playVideo()}else{this.pauseVideo()}return[2]})})};e.prototype.onTriggerFullscreen=function(){return __awaiter(this,void 0,void 0,function(){var e,t;var r=this;return __generator(this,function(n){switch(n.label){case 0:return[4,this.getCurrentTime()];case 1:e=n.sent();t={source:this.source,startTime:e};this.pauseVideo();return[2,u("youtube",t).then(function(e){if(e&&e.data){r.updateCurrentTime(e.data)}})]}})})};e.prototype.componentDidLoad=function(){this.onInitYoutubePlayer()};e.prototype.onInitYoutubePlayer=function(){var e=this;a().then(function(t){if(t&&t.Player){e.player=new t.Player(e.youtubeEl,{videoId:s(e.source),height:e.youtubeContainer.clientHeight,playerVars:{fs:e.fullscreen,rel:0,showinfo:0,modestbranding:1,controls:e.controls},events:{onReady:function(t){if(e.startTime){e.updateCurrentTime(e.startTime)}},onStateChange:function(t){e.playerStateChanges.emit(t.data)}}})}})};e.prototype.render=function(){var e=this;return n(i,null,n("div",{class:"yt-container",ref:function(t){return e.youtubeContainer=t}},n("div",{ref:function(t){return e.youtubeEl=t},class:"yt-player"})))};Object.defineProperty(e.prototype,"host",{get:function(){return o(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return".iframe-root{top:0;right:0;bottom:0;left:0;position:absolute;color:var(--black);overflow-y:auto;scrollbar-width:none}.iframe-root yoo-app .wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;height:100%;width:100%}.iframe-root yoo-app .wrapper.center-center{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%}.iframe-root::-webkit-scrollbar{display:none}:host .yt-container,:host .yt-player{width:100%;height:100%}"},enumerable:true,configurable:true});return e}())}}});