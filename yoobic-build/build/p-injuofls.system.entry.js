System.register(["./p-d99b9c19.system.js","./p-76deb591.system.js","./p-40fcf55a.system.js","./p-fd4afab3.system.js","./p-e3fa184f.system.js","./p-90888482.system.js","./p-350cb6c0.system.js"],function(s){"use strict";var e,t,n,o,i,r,l,a,c,u;return{setters:[function(s){e=s.r;t=s.c;n=s.h;o=s.H;i=s.g},function(s){r=s.cC;l=s.t;a=s.$;c=s.N;u=s.ak},function(){},function(){},function(){},function(){},function(){}],execute:function(){var d=s("yoo_lesson_detail",function(){function s(s){e(this,s);this.starting=t(this,"starting",7)}s.prototype.getSizeContainer=function(){var s=window.innerHeight;s=r(s,".lesson-footer",this.host);return{height:s+"px"}};s.prototype.onStart=function(s){s.stopPropagation();this.starting.emit()};s.prototype.renderButtonFooter=function(){var s=this;return n("yoo-form-footer",{buttons:[{text:l(a(this.lessonData)?"START":"RETRY"),cssClass:"danger-light",handler:function(e){return s.onStart(e)}}]})};s.prototype.renderSimpleSection=function(s,e,t,o){if(o===void 0){o=false}return n("li",{class:"menu-item"},n("div",{class:"menu-left"},n("span",{class:"menu-icon"},n("yoo-icon",{class:t})),n("div",{class:"border"})),n("div",{class:"menu-right"},n("div",{class:"menu-title"},c(e)),o?n("div",{class:"menu-content",innerHTML:s}):n("div",{class:"menu-content"},s)))};s.prototype.renderUserSection=function(s,e,t){return s&&(s.email||s.firstName||s.lastName)?n("li",{class:"menu-item"},n("div",{class:"menu-left"},n("span",{class:"menu-icon"},n("yoo-icon",{class:t})),n("div",{class:"border"})),n("div",{class:"menu-right"},n("div",{class:"menu-title"},l(e)),s.firstName||s.lastName?n("div",{class:"menu-content menu-requestor"},s.imageData?n("yoo-avatar",{class:"s",imgSrc:s.imageData,avatarIconSize:"s"}):null,s.firstName," ",s.lastName):null,s.email?n("div",{class:"menu-content"},s.email):null)):null};s.prototype.renderAnswers=function(){return n("div",{class:"heading-container"},n("div",{class:"title"},l("ANSWERS")),n("yoo-form-dynamic",{scrollable:false,forceReadonly:true,slides:this.lesson.description.slides,data:this.lessonData,suffix:".value",showTabs:false,showRecap:true}))};s.prototype.renderLesson=function(){return this.lesson?n("div",{class:"lesson-detail"},n("yoo-ion-content",{class:"bg-light"},n("div",null,n("div",{class:"lesson-content"},n("yoo-lesson-heading",{lesson:this.lesson,assignmentDate:this.assignmentDate}),n("ul",{class:"menu"},this.lesson.description?this.renderSimpleSection(this.lesson.description.text,"DESCRIPTION","yo-lesson",true):null,this.renderSimpleSection((this.lesson.description&&this.lesson.description.duration?this.lesson.description.duration:"10")+" mins","DURATION","yo-schedule-user",true),this.lesson.badges&&this.lesson.badges.length>0?n("yoo-lesson-badges",{badges:this.lesson.badges}):null,this.highscores&&this.highscores.length>0?n("yoo-lesson-highscores",{ranks:this.highscores}):null),n("slot",null)),this.lesson.description.showAnswers&&this.lessonData&&this.renderAnswers(),n("slot",{name:"end"}),n("div",{class:"scroll-spacer"}))),(!this.lessonData||this.lessonData&&this.lesson.description.preventRetry!==true)&&this.renderButtonFooter()):null};s.prototype.render=function(){return n(o,{class:u()},this.renderLesson())};Object.defineProperty(s.prototype,"host",{get:function(){return i(this)},enumerable:true,configurable:true});Object.defineProperty(s,"style",{get:function(){return".iframe-root{top:0;right:0;bottom:0;left:0;position:absolute;color:var(--black);overflow-y:auto;scrollbar-width:none}.iframe-root yoo-app .wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;height:100%;width:100%}.iframe-root yoo-app .wrapper.center-center{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%}.iframe-root::-webkit-scrollbar{display:none}:host{height:100%;font-size:var(--font-size-03,1rem);font-weight:var(--font-weight-01,300)}:host .lesson-detail{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%}:host .lesson-detail .scroll-spacer{height:5.75rem}:host .lesson-detail .lesson-content .menu{list-style:none outside none;background:none repeat scroll 0 0 transparent;border:0 none;font-size:100%;margin:0;outline:0 none;padding:0;vertical-align:baseline;-webkit-tap-highlight-color:transparent;margin-top:1.875rem;padding:var(--padding,1rem);list-style:none}:host .lesson-detail .lesson-content .menu .menu-item{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}:host .lesson-detail .lesson-content .menu .menu-item .menu-left{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center}:host .lesson-detail .lesson-content .menu .menu-item .menu-left .menu-icon{height:1.875rem;width:1.875rem}:host .lesson-detail .lesson-content .menu .menu-item .menu-left .menu-icon yoo-icon{height:1.875rem;width:1.875rem;font-size:var(--font-size-04,1.125rem);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;background-color:var(--success,#04cc99);border-radius:50%;line-height:1.875rem;padding:0}:host .lesson-detail .lesson-content .menu .menu-item .menu-left .border{width:1px;height:100%;background-color:var(--stable-alt,#d0d0d0)}:host .lesson-detail .lesson-content .menu .menu-item .menu-right{margin-left:.625rem;width:100%;overflow:hidden}:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-title{font-weight:var(--font-weight-03,700);line-height:1.125rem;margin-top:.375rem}:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content{margin-top:.25rem;margin-bottom:1.25rem;color:var(--text-color,#807f83)}:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content a,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content abbr,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content acronym,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content address,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content applet,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content big,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content blockquote,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content body,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content caption,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content cite,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content code,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content dd,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content del,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content dfn,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content div,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content dl,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content dt,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content em,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content fieldset,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content font,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content form,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content h1,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content h2,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content h3,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content h4,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content h5,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content h6,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content html,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content iframe,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content img,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content ins,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content kbd,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content label,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content legend,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content li,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content object,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content ol,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content p,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content pre,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content q,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content s,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content samp,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content small,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content span,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content strike,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content strong,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content sub,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content sup,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content table,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content tbody,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content td,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content tfoot,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content th,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content thead,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content tr,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content tt,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content ul,:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content var{margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;-webkit-margin-before:0;-webkit-margin-after:0;-webkit-margin-start:0;-webkit-margin-end:0}:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-title{margin-bottom:.625rem}:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content span{margin-right:1.25rem}:host .lesson-detail .lesson-content .menu .menu-item .menu-right .menu-content yoo-avatar{margin-right:.3125rem}:host .lesson-detail .lesson-content .menu .menu-item .menu-left .menu-icon yoo-icon{-ms-flex-align:center;align-items:center;border:solid .03125 var(--danger-light,#f46885);background-color:var(--danger-light,#f46885);color:var(--always-light,#fff);font-size:var(--font-size-03,1rem)}:host .lesson-detail .lesson-content .menu .menu-item:last-child .menu-left .border{display:none}:host .lesson-detail .lesson-content .menu yoo-lesson-badges:last-child,:host .lesson-detail .lesson-content .menu yoo-lesson-highscores:last-child{--display-border:none}:host .lesson-detail .heading-container{margin-top:var(--padding,1rem)}:host .lesson-detail .heading-container .title{margin-top:.3125rem;padding:var(--padding-30,1.875rem) var(--padding,1rem);background:var(--stable-light,#f1f1f1);font-size:var(--font-size-06,1.5rem);line-height:2.0625rem}:host .lesson-detail .heading-container yoo-form-dynamic{display:block;margin:0 var(--padding,1rem)}:host(.web),:host(.web) .lesson-footer{border-radius:8px;-webkit-box-shadow:var(--tile-shadow,0 5px 15px 3px rgba(40,47,54,.08));box-shadow:var(--tile-shadow,0 5px 15px 3px rgba(40,47,54,.08))}:host(.web) .lesson-footer{-ms-flex-pack:start;justify-content:flex-start;padding-right:1.875rem;padding-left:1.875rem}:host(.web) .lesson-footer yoo-button{margin-right:var(--padding-10,.625rem)}"},enumerable:true,configurable:true});return s}())}}});