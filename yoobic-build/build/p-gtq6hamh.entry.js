import{r as t,h as s,g as i}from"./p-0d847530.js";import{t as n}from"./p-384bfcf6.js";import"./p-0f3d65ca.js";import"./p-8cff990b.js";import"./p-0d62bf9d.js";import{dd as o}from"./p-d70b188c.js";import"./p-815d6c40.js";const r=class{constructor(s){t(this,s)}render(){if(this.location.info||this.location.contactname||this.location.contactemail||this.location.contactphone)return s("div",{class:"outer-container"},(this.location.contactname||this.location.contactemail||this.location.contactphone)&&s("div",{class:"menu-content"},s("span",null,n("MAINCONTACT")),this.location.contactname&&s("div",{class:"menu-content-contact name",innerHTML:this.location.contactname}),this.location.contactemail&&s("div",null,s("a",{href:"mailto:"+this.location.contactemail,class:"menu-content-contact email",innerHTML:this.location.contactemail})),this.location.contactphone&&s("div",null,s("a",{href:"tel:"+this.location.contactphone,class:"menu-content-contact phone",innerHTML:this.location.contactphone}))),this.location&&this.location.info&&s("div",{class:"info",innerHTML:o.https.transform(this.location.info)}))}get host(){return i(this)}static get style(){return".iframe-root{top:0;right:0;bottom:0;left:0;position:absolute;color:var(--black);overflow-y:auto;scrollbar-width:none}.iframe-root yoo-app .wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;height:100%;width:100%}.iframe-root yoo-app .wrapper.center-center{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%}.iframe-root::-webkit-scrollbar{display:none}:host .outer-container{margin-top:.5rem;margin-bottom:.5rem;padding:.5rem 1rem;background:var(--light,#fff)}:host .outer-container .menu-content{padding-bottom:1rem;line-height:1.75}:host .outer-container .menu-content span{color:var(--black,#000);font-size:var(--font-size-04,1.125rem);font-weight:var(--font-weight-03,700);line-height:1em}:host .outer-container .menu-content .menu-content-contact{text-decoration:none}:host .outer-container .menu-content .menu-content-contact.name{font-size:var(--font-size-04,1.125rem)}:host .outer-container .menu-content .menu-content-contact.email{color:var(--success,#04cc99)}:host .outer-container .menu-content .menu-content-contact.phone{color:var(--dark,#2b3648)}"}};export{r as yoo_location_info};