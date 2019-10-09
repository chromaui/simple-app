import{r as t,c as i,h as s,H as h,g as e}from"./p-0d847530.js";import{d5 as n,u as r,dj as a,V as o}from"./p-384bfcf6.js";import"./p-0f3d65ca.js";import"./p-8cff990b.js";import"./p-0d62bf9d.js";import"./p-d70b188c.js";import"./p-815d6c40.js";const l=class{constructor(s){t(this,s),this.validators=[],this.min=0,this.max=100,this.validityChanged=i(this,"validityChanged",7),this.inputBlurred=i(this,"inputBlurred",7),this.inputFocused=i(this,"inputFocused",7),this.inputChanged=i(this,"inputChanged",7)}componentWillLoad(){n(this);let t={min:this.min,max:this.max,type:"number",required:!1};this.validators.length>0&&(t.required=!0),this.requiredValidator=[{name:"number",options:Object.assign({},t)}]}onSingleSliderValueChanged(t){if(t&&r(t.detail)){let i=Math.round(t.detail);this.singleFormInput.value=i}}onSingleSliderTouchEnd(t){t&&r(t.detail)&&this.value!==t.detail&&this.singleFormInput.forceValidation()}onInputChanged(t,i){let s;t.stopPropagation();let h=t.detail;this.isRangeSlider?"sup"===i?s=[this.value[0],this.value[0]<=h?h:this.value[0]]:"inf"===i&&(s=[this.value[1]>=h?h:this.value[1],this.value[1]]):s=h,a(s,this,!1,!1)}onValidityChanged(t,i){t&&(this.isRangeSlider?("sup"===i?this.supValidity=t.detail:"inf"===i&&(this.infValidity=t.detail),this.validity=this.supValidity&&this.infValidity):this.validity=t.detail)}onInputClear(t){t&&"clear"===t.detail&&(this.sliderElement.primaryValue=null)}renderReadonly(){return s("div",{class:"readonly"},s("div",null,this.value&&this.isRangeSlider?this.value[0]:this.value&&!this.isRangeSlider||0===this.value?this.value:null),s("div",null,this.value&&this.isRangeSlider?this.value[1]:null))}renderEditable(){let t=this.value;return s("div",{class:"outer-container"},this.isRangeSlider&&s("yoo-form-input",{type:"number",inputTabIndex:this.inputTabIndex,validators:this.requiredValidator,value:o(t)?t[0]:t,forceValueUpdate:!0,placeholder:this.placeholder,onInputChanged:t=>this.onInputChanged(t,"inf"),onValidityChanged:t=>this.onValidityChanged(t,"inf")}),s("yoo-form-input",{ref:t=>this.singleFormInput=t,type:"number",value:o(t)?t[1]:t,inputTabIndex:this.inputTabIndex+1,validators:this.requiredValidator,placeholder:this.placeholder,forceValueUpdate:!0,onIconClicked:t=>this.onInputClear(t),onInputChanged:t=>this.onInputChanged(t,"sup"),onValidityChanged:t=>this.onValidityChanged(t,"sup")}),s("yoo-slider",{orientation:"horizontal",ref:t=>this.sliderElement=t,onSliderTouchEnded:t=>this.onSingleSliderTouchEnd(t),onSliderThumbValueEmitter:t=>this.onSingleSliderValueChanged(t),sliderType:this.isRangeSlider?"range":"single",minValue:this.min,maxValue:this.max,primaryValue:r(this.value)?o(this.value)?this.value[1]:this.value:this.min,secondaryValue:r(this.value)?this.value[0]||0:null}))}render(){return s(h,{class:{"swiper-no-swiping":!0}},this.readonly?this.renderReadonly():this.renderEditable())}get host(){return e(this)}static get style(){return".iframe-root{top:0;right:0;bottom:0;left:0;position:absolute;color:var(--black);overflow-y:auto;scrollbar-width:none}.iframe-root yoo-app .wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;height:100%;width:100%}.iframe-root yoo-app .wrapper.center-center{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%}.iframe-root::-webkit-scrollbar{display:none}:host .outer-container yoo-slider{display:block;margin-top:1.25rem}:host .readonly{padding:.5rem;padding-left:0;padding-bottom:0}:host(.history) .readonly{padding:0!important}"}};export{l as yoo_form_range};