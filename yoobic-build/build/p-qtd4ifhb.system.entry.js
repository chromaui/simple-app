System.register(["./p-d99b9c19.system.js","./p-76deb591.system.js","./p-40fcf55a.system.js","./p-fd4afab3.system.js","./p-e3fa184f.system.js","./p-90888482.system.js","./p-350cb6c0.system.js"],function(s){"use strict";var i,t,e,o,n,r,a,d;return{setters:[function(s){i=s.r;t=s.h;e=s.g},function(s){o=s.A;n=s.t;r=s.N},function(){},function(){},function(){},function(s){a=s.dd;d=s.bj},function(){}],execute:function(){var m=s("yoo_mission_heading",function(){function s(s){i(this,s)}s.prototype.componentWillLoad=function(){this.isMobile=o()};s.prototype.renderMissionDate=function(){return[this.mission&&this.mission.duedate?t("div",{class:"mission-date"},n("DUEDATE"),": ",a.dateFormat.transform(this.mission.duedate,"L")):this.mission&&this.mission.finishedDate&&this.mission.type==="visit"?t("div",{class:"mission-date"},n("DATE"),": ",a.dateFormat.transform(this.mission.finishedDate,"L")+" "+(this.mission.startTime?a.dateFormat.transform(this.mission.startTime,"LT"):"")+" "+(this.mission.endTime?" - "+a.dateFormat.transform(this.mission.endTime,"LT"):"")):t("div",{class:"mission-date"},n("NODUEDATE"))]};s.prototype.renderTodoDate=function(){return[this.mission&&this.mission.todo&&this.mission.todo.duedate?t("div",{class:"mission-date-todo"},n("DUEDATE"),": ",a.dateFormat.transform(this.mission.todo.duedate,"L")):t("div",{class:"mission-date-todo"},n("NODUEDATE")),this.mission&&this.mission.todo&&this.mission.todo.reminderdate?t("div",{class:"mission-date-todo"},n("REMINDER"),": ",a.dateFormat.transform(this.mission.todo.reminderdate,"L")):null]};s.prototype.render=function(){var s=d(this.mission,true);return t("div",{class:"background-container"},t("div",{class:"content-container"},t("div",{class:"badge-container"},s&&s.map(function(s){return t("yoo-badge",{text:n(s.text||""),class:s.cssClass,iconLeft:s.iconLeft})})),this.mission&&[this.mission.title&&t("div",{class:"mission-title"},r(this.mission.title)),!this.mission.title&&this.mission.type==="visit"&&t("div",{class:"mission-title"},n("VISIT")),this.mission.type!=="todo"?this.renderMissionDate():this.renderTodoDate(),this.progress>=0&&t("div",{class:{"mission-progress":true,"mission-progress-web":!this.isMobile}},t("yoo-progress-bar-core",{shape:"line",progressValue:this.progress}))]))};Object.defineProperty(s.prototype,"host",{get:function(){return e(this)},enumerable:true,configurable:true});Object.defineProperty(s,"style",{get:function(){return".iframe-root{top:0;right:0;bottom:0;left:0;position:absolute;color:var(--black);overflow-y:auto;scrollbar-width:none}.iframe-root yoo-app .wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;height:100%;width:100%}.iframe-root yoo-app .wrapper.center-center{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%}.iframe-root::-webkit-scrollbar{display:none}:host .background-container{margin:-1rem -1rem 0;background:var(--stable-ultralight,#fafafa)}:host .badge-container yoo-badge{margin-right:.5rem}:host .content-container{padding:1rem .75rem}:host .mission-title{margin-top:.5rem;font-size:var(--font-size-06,1.5rem);font-weight:var(--font-weight-03,700);line-height:2.0625rem}:host .mission-date{font-weight:var(--font-weight-02,400)}:host .mission-date,:host .mission-date-todo{margin-top:.3125rem;color:var(--text-color,#807f83);line-height:1.125rem}:host .mission-date-todo{font-weight:var(--font-weight-01,300)}:host .mission-reason{margin-top:.3125rem;font-weight:var(--font-weight-02,400);line-height:1.125rem}:host .mission-reason.danger{color:var(--danger,#ff625f)}:host .mission-progress{margin-top:.3125rem}:host div:last-child{margin-bottom:0}"},enumerable:true,configurable:true});return s}())}}});