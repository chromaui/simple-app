import{r as o,h as t,g as s}from"./p-0d847530.js";import{cE as r}from"./p-384bfcf6.js";import"./p-0f3d65ca.js";import"./p-8cff990b.js";import"./p-0d62bf9d.js";import"./p-d70b188c.js";import"./p-815d6c40.js";const e=class{constructor(t){o(this,t)}onClose(){r(null)}renderHeader(){return t("yoo-header",{class:"shadow"},t("yoo-ion-toolbar",{color:"light"},t("yoo-ion-buttons",{slot:"start"},t("yoo-ion-button",{color:"text-color",class:"close button-clear",onClick:()=>this.onClose()},t("yoo-icon",{slot:"icon-only",class:"yo-close"}))),t("yoo-title",null,this.heading)))}renderContent(){return t("yoo-ion-content",{scrollEnabled:!1,class:"bg-light"},t("yoo-barcode",{value:this.value,type:this.type,height:100}))}render(){return[this.renderHeader(),this.renderContent()]}get host(){return s(this)}static get style(){return".iframe-root{top:0;right:0;bottom:0;left:0;position:absolute;color:var(--black);overflow-y:auto;scrollbar-width:none}.iframe-root yoo-app .wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;height:100%;width:100%}.iframe-root yoo-app .wrapper.center-center{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%}.iframe-root::-webkit-scrollbar{display:none}:host yoo-ion-content{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host yoo-barcode{width:100%;height:100px;margin:1rem 0}"}};export{e as yoo_barcode_dialog};