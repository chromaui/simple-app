System.register(["./p-d99b9c19.system.js","./p-76deb591.system.js","./p-40fcf55a.system.js","./p-fd4afab3.system.js","./p-e3fa184f.system.js","./p-90888482.system.js","./p-350cb6c0.system.js"],function(t){"use strict";var e,s,n,i,o,r;return{setters:[function(t){e=t.r;s=t.c;n=t.h;i=t.g},function(t){o=t.t;r=t.N},function(){},function(){},function(){},function(){},function(){}],execute:function(){var u=t("yoo_result_dialog",function(){function t(t){e(this,t);this.close=s(this,"close",7)}t.prototype.onClose=function(){this.close.emit()};t.prototype.render=function(){var t=this;return n("div",{class:"outer-container"},n("img",{class:"result-dialog-icon",src:this.success?"assets/empty-states/check.svg":"assets/empty-states/reject.svg"}),this.heading?n("div",{class:"result-dialog-heading",innerHTML:r(this.heading)}):null,this.subheading?n("div",{class:"result-dialog-subheading",innerHTML:r(this.subheading)}):null,n("div",{class:"result-dialog-footer"},n("div",{class:"border"}),n("div",{class:"result-dialog-footer-button",onClick:function(){return t.onClose()}},o(this.buttonText||"OK"))))};Object.defineProperty(t.prototype,"host",{get:function(){return i(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return".iframe-root{top:0;right:0;bottom:0;left:0;position:absolute;color:var(--black);overflow-y:auto;scrollbar-width:none}.iframe-root yoo-app .wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;height:100%;width:100%}.iframe-root yoo-app .wrapper.center-center{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%}.iframe-root::-webkit-scrollbar{display:none}:host .outer-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;min-width:300px;border-radius:.5rem;background:var(--light,#fff);text-align:center;-webkit-box-shadow:var(--card-shadow,0 2px 4px 0 rgba(40,47,54,.08));box-shadow:var(--card-shadow,0 2px 4px 0 rgba(40,47,54,.08));z-index:1}:host .outer-container .result-dialog-icon{width:50px;margin-top:2.5rem;margin-bottom:1.25rem}:host .outer-container .result-dialog-heading{margin-bottom:.3125rem;padding-right:1rem;padding-left:1rem;font-size:var(--font-size-04,1.125rem);font-weight:var(--font-weight-03,700);line-height:var(--padding-25,1.5625rem)}:host .outer-container .result-dialog-subheading{margin-bottom:2.21875rem;padding-right:1rem;padding-left:1rem;color:var(--text-color,#807f83);font-size:var(--font-size-03,1rem);line-height:1.33}:host .outer-container .border{width:100%;height:1px;background-color:var(--stable-alt,#d0d0d0)}:host .outer-container .result-dialog-footer{width:100%;font-size:var(--font-size-04,1.125rem);font-weight:var(--font-weight-03,700)}:host .outer-container .result-dialog-footer .result-dialog-footer-button{padding-top:.65625rem;padding-bottom:.75rem}"},enumerable:true,configurable:true});return t}())}}});