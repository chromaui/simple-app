import{r as t,c as i,h as s,g as e}from"./p-0d847530.js";import{d5 as h,dj as a}from"./p-384bfcf6.js";import"./p-0f3d65ca.js";import"./p-8cff990b.js";const n=class{constructor(s){t(this,s),this.validators=[],this.validityChanged=i(this,"validityChanged",7),this.inputBlurred=i(this,"inputBlurred",7),this.inputFocused=i(this,"inputFocused",7),this.inputChanged=i(this,"inputChanged",7),this.fetchData=i(this,"fetchData",7),this.fetchCustomData=i(this,"fetchCustomData",7)}async updateValues(t){this.formAutocompleteCampaign&&this.formAutocompleteCampaign.updateValues(t)}async setFields(t){this.fields=t}requiredWatch(){this.validate()}componentWillLoad(){h(this)}validate(){let t=!0;return!this.required||this.value&&this.value.selectedDescription&&this.value.fields&&0!==this.value.fields.length||(t=!1),this.validity&&this.validity===t||(this.validityChanged.emit(t),this.validity=t),this.validity}onInputChanged(t){t.stopPropagation();let i={};t.detail&&t.detail._id&&(i={selectedDescription:t.detail}),this.fetchCustomData.emit(t.detail),a(i,this)}onInputFieldChanged(t){t.stopPropagation();let i=Object.assign({},this.value||{});i.fields=t.detail?[].concat(t.detail):[],a(i,this)}onInputBlurred(t){t.stopPropagation(),this.inputBlurred.emit(t.detail)}onInputFocused(t){t.stopPropagation(),this.inputFocused.emit(t.detail)}onFetchData(t){t.stopPropagation(),t.detail&&this.fetchData.emit(t.detail)}stopValidityChangeEvent(t){t.stopPropagation()}renderReadonly(){return s("div",{class:"readonly"})}renderEditable(){return s("div",{class:"container"},s("yoo-form-autocomplete",{ref:t=>this.formAutocompleteCampaign=t,multiple:!1,value:this.value?this.value.selectedDescription:null,entityType:"locations",displayType:"card-list",isLocal:!1,onFetchData:t=>this.onFetchData(t),onInputChanged:t=>this.onInputChanged(t),onInputBlurred:t=>this.onInputBlurred(t),onInputFocused:t=>this.onInputFocused(t),onValidityChanged:t=>this.stopValidityChangeEvent(t),clearable:!0,tabindex:this.inputTabIndex}),s("div",{class:"spacer"}),s("yoo-form-autocomplete",{ref:t=>this.formAutocompleteFields=t,multiple:this.multiple,values:this.fields,value:this.value?this.value.fields:null,entityType:"formfield",displayType:"card-list",isLocal:!0,onInputChanged:t=>this.onInputFieldChanged(t),onValidityChanged:t=>this.stopValidityChangeEvent(t),clearable:!0,tabindex:this.inputTabIndex+1}))}render(){return this.readonly?this.renderReadonly():this.renderEditable()}get host(){return e(this)}static get watchers(){return{required:["requiredWatch"]}}static get style(){return".iframe-root{top:0;right:0;bottom:0;left:0;position:absolute;color:var(--black);overflow-y:auto;scrollbar-width:none}.iframe-root yoo-app .wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;height:100%;width:100%}.iframe-root yoo-app .wrapper.center-center{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%}.iframe-root::-webkit-scrollbar{display:none}:host .container .spacer{width:100%;height:1rem}"}};export{n as yoo_form_missionfield};