import{r as t,c as o,h as s,g as i}from"./p-0d847530.js";const e=class{constructor(s){t(this,s),this.color="#ffffff",this.hideLabel=!1,this.colorSelected=o(this,"colorSelected",7)}componentWillLoad(){this.colorValidation(this.color)}colorValidation(t){let o=new RegExp("^#(?:[0-9a-fA-F]{3}){1,2}$");this.currentColor=o.test(t)&&7===t.length?t:"#ffffff"}onInputChange(t){this.currentColor=t.target.value,this.colorValidation(t.target.value),this.colorSelected.emit(this.currentColor)}render(){return s("div",{class:"outer-container"},s("div",{class:"color-selector",style:{background:this.currentColor}},s("input",{type:"color",value:this.currentColor,onChange:t=>this.onInputChange(t),onInput:t=>this.onInputChange(t),tabindex:this.inputTabIndex})))}get host(){return i(this)}static get style(){return".iframe-root{top:0;right:0;bottom:0;left:0;position:absolute;color:var(--black);overflow-y:auto;scrollbar-width:none}.iframe-root yoo-app .wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;height:100%;width:100%}.iframe-root yoo-app .wrapper.center-center{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%}.iframe-root::-webkit-scrollbar{display:none}:host .outer-container{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;width:6rem;padding:.2rem}:host .outer-container input[type=text]{width:4rem;border-color:transparent;outline:none;background:transparent;font-size:var(--font-size-03,1rem);text-align:center;-webkit-appearance:none}:host .outer-container .color-selector{width:1.3rem;height:1.3rem;border:1px solid var(--dark-40,rgba(43,54,72,.4));border-radius:50%}:host .outer-container .color-selector input[type=color]{width:1rem;height:1rem;border:none;outline:none;background:transparent;opacity:0;-webkit-appearance:none}:host .outer-container .color-selector input[type=color]::-webkit-color-swatch-wrapper{padding:0;background:transparent;-webkit-appearance:none}:host .outer-container .color-selector input[type=color]::-webkit-color-swatch{border:none;border-radius:50%}:host .outer-container .color-selector input{margin:0;border:0;padding:0;display:inline-block;vertical-align:middle;white-space:normal;background:none;line-height:1;font-size:var(--font-size-03,1rem);font-family:Lato;min-width:0;-webkit-box-sizing:content-box;box-sizing:content-box}:host .outer-container .color-selector input:focus{outline:0}:host .outer-container .color-selector input[type=button],:host .outer-container .color-selector input[type=checkbox],:host .outer-container .color-selector input[type=radio],:host .outer-container .color-selector input[type=reset],:host .outer-container .color-selector input[type=submit]{-webkit-box-sizing:border-box;box-sizing:border-box}:host .outer-container .color-selector input[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box;box-sizing:content-box}:host(.large) .outer-container .color-selector{width:1.7rem;min-width:1.7rem;height:1.7rem;min-height:1.7rem}:host(.large) .outer-container .color-selector input[type=color]{width:1.5rem;height:1.5rem}"}};export{e as yoo_form_color_picker};