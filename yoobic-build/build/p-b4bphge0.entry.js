import{r as t,c as i,h as n,g as e}from"./p-0d847530.js";import{dj as r}from"./p-384bfcf6.js";import"./p-0f3d65ca.js";import{c as o,a as u,u as s}from"./p-8cff990b.js";import"./p-0d62bf9d.js";import"./p-d70b188c.js";import"./p-815d6c40.js";const c=s(o(function(t,i){var n,e,r,o,u,s,c,l,a,h,d,f,p;n=i,e=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])}return t},r="defaultParagraphSeparator",o="formatBlock",u=function(t,i,n){return t.addEventListener(i,n)},s=function(t,i){return t.appendChild(i)},c=function(t){return document.createElement(t)},l=function(t){return document.queryCommandState(t)},h={bold:{icon:"<b>B</b>",title:"Bold",state:function(){return l("bold")},result:function(){return a("bold")}},italic:{icon:"<i>I</i>",title:"Italic",state:function(){return l("italic")},result:function(){return a("italic")}},underline:{icon:"<u>U</u>",title:"Underline",state:function(){return l("underline")},result:function(){return a("underline")}},strikethrough:{icon:"<strike>S</strike>",title:"Strike-through",state:function(){return l("strikeThrough")},result:function(){return a("strikeThrough")}},heading1:{icon:"<b>H<sub>1</sub></b>",title:"Heading 1",result:function(){return a(o,"<h1>")}},heading2:{icon:"<b>H<sub>2</sub></b>",title:"Heading 2",result:function(){return a(o,"<h2>")}},paragraph:{icon:"&#182;",title:"Paragraph",result:function(){return a(o,"<p>")}},quote:{icon:"&#8220; &#8221;",title:"Quote",result:function(){return a(o,"<blockquote>")}},olist:{icon:"&#35;",title:"Ordered List",result:function(){return a("insertOrderedList")}},ulist:{icon:"&#8226;",title:"Unordered List",result:function(){return a("insertUnorderedList")}},code:{icon:"&lt;/&gt;",title:"Code",result:function(){return a(o,"<pre>")}},line:{icon:"&#8213;",title:"Horizontal Line",result:function(){return a("insertHorizontalRule")}},link:{icon:"&#128279;",title:"Link",result:function(){var t=window.prompt("Enter the link URL");t&&a("createLink",t)}},image:{icon:"&#128247;",title:"Image",result:function(){var t=window.prompt("Enter the image URL");t&&a("insertImage",t)}}},d={actionbar:"pell-actionbar",button:"pell-button",content:"pell-content",selected:"pell-button-selected"},f=function(t){var i=t.actions?t.actions.map(function(t){return"string"==typeof t?h[t]:h[t.name]?e({},h[t.name],t):t}):Object.keys(h).map(function(t){return h[t]}),n=e({},d,t.classes),l=t[r]||"div",f=c("div");f.className=n.actionbar,s(t.element,f);var p=t.element.content=c("div");return p.contentEditable=!0,p.className=n.content,p.oninput=function(i){var n=i.target.firstChild;n&&3===n.nodeType?a(o,"<"+l+">"):"<br>"===p.innerHTML&&(p.innerHTML=""),t.onChange(p.innerHTML)},p.onkeydown=function(t){"Enter"===t.key&&"blockquote"===document.queryCommandValue("formatBlock")&&setTimeout(function(){return a(o,"<"+l+">")},0)},s(t.element,p),i.forEach(function(t){var i=c("button");if(i.className=n.button,i.innerHTML=t.icon,i.title=t.title,i.setAttribute("type","button"),i.onclick=function(){return t.result()&&p.focus()},t.state){var e=function(){return i.classList[t.state()?"add":"remove"](n.selected)};u(p,"keyup",e),u(p,"mouseup",e),u(i,"click",e)}s(f,i)}),t.styleWithCSS&&a("styleWithCSS"),a(r,l),t.element},p={exec:a=function(t){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;return document.execCommand(t,!1,i)},init:f},n.exec=a,n.init=f,n.default=p,Object.defineProperty(n,"__esModule",{value:!0})})),l=class{constructor(n){t(this,n),this.validators=[],this.validityChanged=i(this,"validityChanged",7),this.inputBlurred=i(this,"inputBlurred",7),this.inputFocused=i(this,"inputFocused",7),this.inputChanged=i(this,"inputChanged",7)}componentDidLoad(){!this.readonly&&this.containerEl&&(this.editor=c.init({element:this.containerEl,actions:["bold","italic","underline","strikethrough","heading1","heading2","paragraph","quote","olist","ulist","line"],onChange:t=>this.onChange(t)}),this.editor&&this.editor.content&&this.inputTabIndex>=0&&(this.editor.content.setAttribute("tabindex",this.inputTabIndex),this.editor&&this.editor.childNodes&&this.editor.childNodes.length>0&&"pell-actionbar"===this.editor.childNodes[0].className&&this.editor.childNodes[0].childNodes.forEach(t=>t.setAttribute("tabindex",-1))),this.value&&(this.editor.content.innerHTML=this.value))}componentDidUnload(){this.editor&&this.editor.disable&&this.editor.disable()}onChange(t){r(t,this)}validate(){let t=!0;return this.required&&!this.value&&(t=!1),this.validity&&this.validity===t||(this.validity=t,this.validityChanged.emit(t)),this.validity}renderEditable(){return n("div",{class:"container",ref:t=>this.containerEl=t})}renderReadonly(){return n("div",{class:"readonly",innerHTML:this.value||""})}render(){return this.readonly?this.renderReadonly():this.renderEditable()}get host(){return e(this)}static get style(){return".iframe-root{top:0;right:0;bottom:0;left:0;position:absolute;color:var(--black);overflow-y:auto;scrollbar-width:none}.iframe-root yoo-app .wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;height:100%;width:100%}.iframe-root yoo-app .wrapper.center-center{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%}.iframe-root::-webkit-scrollbar{display:none}:host .pell{border:1px solid var(--input-container-border-color,hsla(0,0%,67.8%,.4))}:host .pell,:host .pell-content{-webkit-box-sizing:border-box;box-sizing:border-box}:host .pell-content{height:auto;outline:0;overflow-y:auto;padding:1rem}:host .pell-actionbar{background-color:var(--light,#fff);border-bottom:1px solid var(--input-container-border-color,hsla(0,0%,67.8%,.4))}:host .pell-button{background-color:transparent;border:none;cursor:pointer;height:30px;outline:0;width:30px;vertical-align:bottom}:host .pell-button-selected{background-color:var(--success,#04cc99)}:host .container{width:100%;border:1px solid var(--input-container-border-color,hsla(0,0%,67.8%,.4));border-radius:var(--border-radius-input,5px)}:host .container .pell-actionbar{border-top-left-radius:var(--border-radius-input,5px);border-top-right-radius:var(--border-radius-input,5px)}:host .container .pell-actionbar .pell-button{color:var(--black,#000)}:host .container .pell-content{max-height:180px}"}};export{l as yoo_form_text_editor};