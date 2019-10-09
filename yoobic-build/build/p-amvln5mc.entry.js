import{r as s,h as t,H as r,g as e}from"./p-0d847530.js";import{u as i,ak as o}from"./p-384bfcf6.js";import"./p-0f3d65ca.js";import"./p-8cff990b.js";import"./p-0d62bf9d.js";import{co as a}from"./p-d70b188c.js";import"./p-815d6c40.js";const h=class{constructor(t){s(this,t)}onProgressLocalParametersChanged(s){s&&this.animateProgressBar()}onProgressChanged(s){i(s)&&this.animateProgressBar()}componentDidLoad(){this.progressContainer&&(this.extraClasses&&this.extraClasses.length&&this.host.classList.add(...this.extraClasses),this.initProgressSemiCircle(this.progressContainer)&&this.animateProgressBar())}getCoreProp(s){return this.progressCoreInstance&&this.progressCoreInstance[s]}getLocalParameter(s){return this.getCoreProp("progressParameters")&&this.getCoreProp("progressParameters")[s]}initProgressSemiCircle(s){let t=this.getLocalParameter("semiCircleWidth");const r=this.progressValueClassAttributes.split(" ")[5];let e=Object.assign(this.progressCoreParameters,{easing:"easeInOut",duration:this.progressAnimationDuration,svgStyle:{width:t&&t>=0?`${t}%`:"100%"},text:{className:this.progressValueClassAttributes},step:(s,t)=>{if(t){let s;this.progressCoreInstance.roundCorners(t),t.path.setAttribute("stroke",this.progressColorAttributes.color),s=!i(this.progressValue)&&this.getCoreProp("allowNonAvailableValue")?null:this.progressValue>1?t.value()*this.progressValue:t.value(),this.progressCoreInstance.addBaseClass(t,r);let e=this.getCoreProp("progressUnit"),o="points"===e;this.progressCoreInstance.showBarContainer(t,this.getLocalParameter("showBarContainer"),o),this.progressCoreInstance.hideProgressForPointDisplay(t,o);let h=this.getLocalParameter("generatedScoreDisplay")||"",n=this.progressValueClassAttributes.split(" ")[2],c=this.getCoreProp("percentLabelColorScheme")&&this.progressColorAttributes.class,l=`${a(s,e,n,c)} ${h}`;t.setText(l)}}});return this.progressBarElement=new this.progressBarInstance.SemiCircle(s,e),this.progressBarElement}animateProgressBar(){try{const s=this.progressValue>1?Math.round(this.progressValue*(100/this.progressValue)/100):this.progressValue;return this.progressBarElement.animate(s)}catch(s){}}renderProgressContainer(){let s=this.progressValueClassAttributes.split(" ");return t("div",{ref:s=>this.progressContainer=s,class:`progressbar-container-semi-circle ${s[2]}`})}render(){return t(r,{class:Object.assign({},o())},this.renderProgressContainer())}get host(){return e(this)}static get watchers(){return{progressLocalParameters:["onProgressLocalParametersChanged"],progressValue:["onProgressChanged"]}}static get style(){return".iframe-root{top:0;right:0;bottom:0;left:0;position:absolute;color:var(--black);overflow-y:auto;scrollbar-width:none}.iframe-root yoo-app .wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;height:100%;width:100%}.iframe-root yoo-app .wrapper.center-center{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%}.iframe-root::-webkit-scrollbar{display:none}:host .text-success{color:var(--success,#04cc99)!important}:host .text-danger{color:var(--danger,#ff625f)!important}:host .text-danger-light{color:var(--danger-light,#f46885)!important}:host .text-energized{color:var(--energized,#fed05b)!important}:host .text-royal{color:var(--royal,#845cff)!important}:host .text-info{color:var(--info,#fc459e)!important}:host .text-dark{color:var(--dark,#2b3648)!important}:host .text-text-color{color:var(--text-color,#807f83)!important}:host .text-light{color:var(--light,#fff)!important}:host .text-always-light{color:var(--always-light,#fff)!important}:host .text-light-orange{color:var(--light-orange,#fcae49)!important}:host .text-stable-light{color:var(--stable-light,#f1f1f1)!important}:host .text-stable{color:var(--stable,#adadad)!important}:host .text-warning{color:var(--warning,#ff6402)!important}:host .text-accent{color:var(--accent,#1fb6ff)!important}:host .extra-small{font-size:var(--font-size-01,.75rem)!important}:host .small{font-size:var(--font-size-02,.875rem)!important}:host .medium{font-size:var(--font-size-03,1rem)!important}:host .large{font-size:var(--font-size-04,1.125rem)!important}:host .extra-large{font-size:var(--font-size-09,2.25rem)!important}:host .extra-extra-large{font-size:var(--font-size-12,3.375rem)!important}:host .lowercase{text-transform:lowercase!important}:host .uppercase{text-transform:uppercase!important}:host .capitalize{text-transform:capitalize!important}:host .progressbar-container-semi-circle{display:-ms-flexbox;display:flex;-ms-flex-align:baseline;align-items:baseline}:host .progressbar-container-semi-circle svg{margin:0 auto;overflow:inherit}:host .progressbar-container-semi-circle svg path{stroke-width:1.75}:host .progressbar-container-semi-circle svg path:first-child{fill-opacity:1;fill:var(--ion-item-background-color,#fff)}:host .progressbar-text{display:-ms-flexbox;display:flex;top:50%!important;bottom:inherit!important;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-webkit-transform:translate(-50%,-45%)!important;transform:translate(-50%,-45%)!important;line-height:1.25;text-align:center}\@media only screen and (max-width:370px){:host .progressbar-text .extra-extra-large{font-size:var(--font-size-09,2.25rem)!important}}:host .progressbar-text.points .progress-value{margin-bottom:.5rem}:host .progressbar-text .score-display{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;margin:0}:host .progressbar-text .score-display.flipped{-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}:host .progressbar-text .score-display span{padding:0 .125rem}"}};export{h as yoo_progress_bar_semi_circle};