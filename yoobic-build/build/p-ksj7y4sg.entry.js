import{r as t,h as s,g as i}from"./p-0d847530.js";import{ao as o,cE as e,t as l,al as a,cF as n,g2 as d,q as h,Z as r}from"./p-384bfcf6.js";import"./p-0f3d65ca.js";import"./p-8cff990b.js";import"./p-0d62bf9d.js";import{dd as c}from"./p-d70b188c.js";import"./p-815d6c40.js";const u=class{constructor(s){t(this,s)}onInternalFieldFetchData(t){t.stopPropagation(),this.onFieldFetchData&&this.onFieldFetchData(Object.assign({},t.detail,{form:o(this.host,"yoo-form-dynamic")}))}onDataChanged(t){t.stopPropagation(),Object.assign(this.todo,t.detail)}onInputChanged(t){t.stopPropagation(),this.currentTask=t.detail}onEnterPressed(){this.onAddTask()}componentWillLoad(){this.todo=this.todo||{}}onValidityChanged(t){this.validity=t.detail}isValid(){return this.validity&&this.todo.values&&this.todo.values.length>0}onCancel(){e(null)}onSave(){this.isValid()&&e(this.todo)}onAddTask(){document.activeElement&&document.activeElement.blur&&document.activeElement.blur(),this.currentTask&&(this.todo.values=this.todo.values||[],this.todo.values.push({text:{value:this.currentTask},finished:{value:null},isphotorequired:{value:!0===this.allPhotosRequired},hasphoto:{value:!0},allowLibrary:{value:!0===this.allowLibrary}}),this.currentTask="",setTimeout(()=>o(this.host,"yoo-form-input.task-edit").clear(),200),this.host.forceUpdate())}onEditTask(t){let s=document.createElement("yoo-form-dynamic-dialog");s.slides=this.slidesTodoTask,s.showTabs=!1,s.showRecap=!1,s.data=t,s.suffix=".value",s.title=l("EDIT"),a(s).then(i=>{i&&i.data&&(t=i.data,this.host.forceUpdate()),s=null})}onRemoveTask(t){n(l("DELETE"),[l("CANCEL"),l("OK")],null,l("DELETEACTIONCONFIRM")).then(s=>{!0===s&&(d(this.todo.values,s=>s===t),this.host.forceUpdate())})}onShowActionSheet(t){let s=[{type:"edit",text:l("EDIT"),handler:()=>this.onEditTask(t)},{type:"delete",text:l("DELETE"),cssClass:"danger",handler:()=>this.onRemoveTask(t)}];h(s)}onSelect(t){if(t.stopPropagation(),t.detail&&t.detail.length>0){let s=t.detail.map(t=>({text:{value:t._id},finished:{value:null},isphotorequired:{value:!0===this.allPhotosRequired},hasphoto:{value:!0},allowLibrary:{value:!0===this.allowLibrary}}));this.todo.values=this.todo.values||[],this.todo.values=[...this.todo.values,...s],setTimeout(()=>{let t=o(this.host,"yoo-form-autocomplete.predefined");t&&t.clear()},200),this.host.forceUpdate()}}renderLinkedField(){if(this.todo&&this.todo.field&&this.todo.field.name)return s("div",{class:"menu"},s("li",{class:"menu-item"},s("div",{class:"menu-left"},s("span",{class:"menu-icon"},s("yoo-icon",{class:"yo-link"})),s("div",{class:"border"})),s("div",{class:"menu-right"},s("div",{class:"menu-title"},l("LINKEDTO")),s("div",{class:"menu-content menu-requestor"},s("yoo-form-dynamic",{class:"inline",slides:[{title:"GENERAL",items:[this.todo.field]}],data:{[this.todo.field.name]:Object.assign({value:this.todo.fieldValue},this.todo.fieldExtra)},forceReadonly:!0,onFormValidityChanged:t=>t.stopPropagation(),suffix:".value",animated:!1,showRecap:!1})))))}renderTasks(){return s("div",{slot:"end"},s("div",{class:"tasks"},s("div",{class:"field-placeholder"},s("yoo-form-input-container",{field:{title:l("ACTIONS")},hideOptional:!0},s("yoo-form-input",{class:"task-edit",onInputChanged:t=>this.onInputChanged(t),onValidityChanged:t=>t.stopPropagation(),onEnterPressed:()=>this.onEnterPressed()}))),this.values&&this.values.length>0?s("div",{class:"field-placeholder"},s("yoo-form-input-container",{field:{title:l("ADDPREDEFINEDTASKS")},hideOptional:!0},s("yoo-form-autocomplete",{class:"predefined",displayType:"card-list",values:this.values.map(t=>({_id:t,title:t})),multiple:!0,onValidityChanged:t=>t.stopPropagation(),hideSelectionFromInput:!0,onInputChanged:t=>this.onSelect(t)}))):null),s("div",null,this.todo&&this.todo.values?this.todo.values.map(t=>[s("div",{class:"task"},s("div",{class:"task-part"},s("span",{class:"text"},t.text.value)),s("div",{class:"task-part"},t.duedate&&t.duedate.value?s("span",{class:"date"},c.dateFormat.transform(t.duedate.value,"L")):null,s("yoo-button",{icon:"yo-more",class:"icon-only link-transparent-dark",onClick:()=>this.onShowActionSheet(t)}))),s("div",{class:"border"})]):null))}render(){return[s("yoo-header",{class:"shadow"},s("yoo-ion-toolbar",{color:"light"},s("yoo-ion-buttons",{slot:"start"},s("yoo-ion-button",{color:"text-color",class:"close button-clear",onClick:()=>this.onCancel()},s("yoo-icon",{slot:"icon-only",class:"yo-close"}))),s("yoo-title",null,l("TODO")),s("yoo-ion-buttons",{slot:"end",onClick:()=>this.onSave()},s("yoo-ion-button",{color:"success",class:"button-clear",disabled:!this.isValid()},l("SAVE"))))),s("yoo-ion-content",{scrollEnabled:!1,class:"bg-light"},s("yoo-form-dynamic",{slides:this.slidesTodo,data:this.todo,showRecap:!1,onDataChanged:t=>this.onDataChanged(t),onFormValidityChanged:t=>this.onValidityChanged(t),onFieldFetchData:t=>this.onInternalFieldFetchData(t)},s("div",{slot:"start"},this.todo&&this.todo.field&&r(this.todo.fieldValue)?this.renderLinkedField():null),s("div",{slot:"end"},this.renderTasks())))]}get host(){return i(this)}static get style(){return".iframe-root{top:0;right:0;bottom:0;left:0;position:absolute;color:var(--black);overflow-y:auto;scrollbar-width:none}.iframe-root yoo-app .wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;height:100%;width:100%}.iframe-root yoo-app .wrapper.center-center{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%}.iframe-root::-webkit-scrollbar{display:none}:host .task{-ms-flex-pack:justify;justify-content:space-between;width:100%;background:var(--light,#fff);line-height:39px}:host .task,:host .task .task-part{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}:host .task .task-part yoo-avatar{--transform-avatar:translateY(5px);margin-right:.5rem}:host .task .task-part .text{font-size:var(--font-size-04,1.125rem)}:host .task .task-part .date{margin-right:.625rem;color:var(--text-color,#807f83);font-size:var(--font-size-02,.875rem)}:host .task .task-part yoo-button{--width-icon-only-container:0.25rem;--font-size-icon:1.125rem;padding-top:.6875rem}:host .border{width:100%;height:0;border-top:1px solid var(--stable-40,hsla(0,0%,67.8%,.4))}:host .task .task-part{margin:0 1rem}:host .task .task-part yoo-icon{margin-right:.5rem;font-size:var(--font-size-03,1rem)}:host .tasks{margin-bottom:.5rem;padding:1rem;background:var(--light,#fff)}:host .tasks .field-placeholder{margin-bottom:.625rem}:host .menu{list-style:none outside none;background:none repeat scroll 0 0 transparent;border:0 none;font-size:100%;margin:0;outline:0 none;vertical-align:baseline;-webkit-tap-highlight-color:transparent;margin:.5rem;padding:0;list-style:none}:host .menu .menu-item{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}:host .menu .menu-item .menu-left{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center}:host .menu .menu-item .menu-left .menu-icon{height:1.875rem;width:1.875rem}:host .menu .menu-item .menu-left .menu-icon yoo-icon{height:1.875rem;width:1.875rem;font-size:var(--font-size-04,1.125rem);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;background-color:var(--success,#04cc99);color:var(--always-light,#fff);border-radius:50%;line-height:1.875rem;padding:0}:host .menu .menu-item .menu-left .border{width:1px;height:100%;background-color:var(--stable-alt,#d0d0d0)}:host .menu .menu-item .menu-right{margin-left:.625rem;width:100%;overflow:hidden}:host .menu .menu-item .menu-right .menu-title{font-weight:var(--font-weight-03,700);line-height:1.125rem;margin-top:.375rem}:host .menu .menu-item .menu-right .menu-content{margin-top:.25rem;margin-bottom:1.25rem;color:var(--text-color,#807f83)}:host .menu .menu-item .menu-right .menu-content a,:host .menu .menu-item .menu-right .menu-content abbr,:host .menu .menu-item .menu-right .menu-content acronym,:host .menu .menu-item .menu-right .menu-content address,:host .menu .menu-item .menu-right .menu-content applet,:host .menu .menu-item .menu-right .menu-content big,:host .menu .menu-item .menu-right .menu-content blockquote,:host .menu .menu-item .menu-right .menu-content body,:host .menu .menu-item .menu-right .menu-content caption,:host .menu .menu-item .menu-right .menu-content cite,:host .menu .menu-item .menu-right .menu-content code,:host .menu .menu-item .menu-right .menu-content dd,:host .menu .menu-item .menu-right .menu-content del,:host .menu .menu-item .menu-right .menu-content dfn,:host .menu .menu-item .menu-right .menu-content div,:host .menu .menu-item .menu-right .menu-content dl,:host .menu .menu-item .menu-right .menu-content dt,:host .menu .menu-item .menu-right .menu-content em,:host .menu .menu-item .menu-right .menu-content fieldset,:host .menu .menu-item .menu-right .menu-content font,:host .menu .menu-item .menu-right .menu-content form,:host .menu .menu-item .menu-right .menu-content h1,:host .menu .menu-item .menu-right .menu-content h2,:host .menu .menu-item .menu-right .menu-content h3,:host .menu .menu-item .menu-right .menu-content h4,:host .menu .menu-item .menu-right .menu-content h5,:host .menu .menu-item .menu-right .menu-content h6,:host .menu .menu-item .menu-right .menu-content html,:host .menu .menu-item .menu-right .menu-content iframe,:host .menu .menu-item .menu-right .menu-content img,:host .menu .menu-item .menu-right .menu-content ins,:host .menu .menu-item .menu-right .menu-content kbd,:host .menu .menu-item .menu-right .menu-content label,:host .menu .menu-item .menu-right .menu-content legend,:host .menu .menu-item .menu-right .menu-content li,:host .menu .menu-item .menu-right .menu-content object,:host .menu .menu-item .menu-right .menu-content ol,:host .menu .menu-item .menu-right .menu-content p,:host .menu .menu-item .menu-right .menu-content pre,:host .menu .menu-item .menu-right .menu-content q,:host .menu .menu-item .menu-right .menu-content s,:host .menu .menu-item .menu-right .menu-content samp,:host .menu .menu-item .menu-right .menu-content small,:host .menu .menu-item .menu-right .menu-content span,:host .menu .menu-item .menu-right .menu-content strike,:host .menu .menu-item .menu-right .menu-content strong,:host .menu .menu-item .menu-right .menu-content sub,:host .menu .menu-item .menu-right .menu-content sup,:host .menu .menu-item .menu-right .menu-content table,:host .menu .menu-item .menu-right .menu-content tbody,:host .menu .menu-item .menu-right .menu-content td,:host .menu .menu-item .menu-right .menu-content tfoot,:host .menu .menu-item .menu-right .menu-content th,:host .menu .menu-item .menu-right .menu-content thead,:host .menu .menu-item .menu-right .menu-content tr,:host .menu .menu-item .menu-right .menu-content tt,:host .menu .menu-item .menu-right .menu-content ul,:host .menu .menu-item .menu-right .menu-content var{margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;-webkit-margin-before:0;-webkit-margin-after:0;-webkit-margin-start:0;-webkit-margin-end:0}:host .menu .menu-item .menu-right .menu-title{margin-bottom:.625rem}:host .menu .menu-item .menu-right .menu-content span{margin-right:1.25rem}:host .menu .menu-item .menu-right .menu-content yoo-avatar{margin-right:.3125rem}"}};export{u as yoo_form_todo_dialog};