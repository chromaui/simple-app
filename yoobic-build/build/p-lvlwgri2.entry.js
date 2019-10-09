import{r as s,c as t,h as i,g as o}from"./p-0d847530.js";import{cH as a,z as h,t as n}from"./p-384bfcf6.js";import"./p-0f3d65ca.js";import"./p-8cff990b.js";import"./p-0d62bf9d.js";import"./p-d70b188c.js";import"./p-815d6c40.js";const c=class{constructor(i){s(this,i),this.chat=t(this,"chat",7),this.videocall=t(this,"videocall",7),this.email=t(this,"email",7),this.call=t(this,"call",7),this.textMessage=t(this,"textMessage",7)}onSendTextMessage(){this.textMessage.emit(this.item),this.item&&this.item.telephone&&window.open("sms:"+this.item.telephone,"_system")}onCall(){this.call.emit(this.item),this.item&&this.item.telephone&&window.open("tel:"+this.item.telephone,"_system")}onEmail(){this.email.emit(this.item),this.item&&this.item.email&&window.open("mailto:"+this.item.email,"_system")}onAvatarSelect(){this.item&&this.item.imageData&&a(this.item.imageData)}onChat(){this.chat.emit(this.item)}onVideoCall(){this.videocall.emit(this.item)}render(){return i("div",{class:"container"},i("yoo-avatar",{class:"xl",avatarIconSize:"xl",user:this.item,onClick:()=>this.onAvatarSelect()}),i("div",{class:"user-name"},this.item.firstName," ",this.item.lastName),this.item.role?i("div",{class:"user-role"},n(this.item.role)):null,i("div",{class:"buttons-container"},this.isUser&&h().userId!==this.item._id&&this.canChat?i("div",{class:"button-container"},i("yoo-button",{class:"icon-only success",icon:"yo-chat",onClick:()=>this.onChat()}),i("span",{class:"button-title"},n("CHAT"))):null,this.isUser&&h().userId!==this.item._id&&this.canVideoCall?i("div",{class:"button-container"},i("yoo-button",{class:"icon-only success",icon:"yo-phone-action-camera",onClick:()=>this.onVideoCall()}),i("span",{class:"button-title"},n("VIDEOCALL"))):null))}get host(){return o(this)}static get style(){return".iframe-root{top:0;right:0;bottom:0;left:0;position:absolute;color:var(--black);overflow-y:auto;scrollbar-width:none}.iframe-root yoo-app .wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;height:100%;width:100%}.iframe-root yoo-app .wrapper.center-center{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%}.iframe-root::-webkit-scrollbar{display:none}:host .container{margin-top:1rem;text-align:center}:host .container yoo-avatar{display:-ms-inline-flexbox;display:inline-flex}:host .container .user-name{line-height:1.3125rem}:host .container .user-role{color:var(--stable,#adadad);font-size:var(--font-size-02,.875rem);line-height:1rem}:host .container .buttons-container{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-line-pack:center;align-content:center;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around;margin:2rem}:host .container .buttons-container .button-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-line-pack:center;align-content:center;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host .container .buttons-container .button-container .button-title{padding-top:var(--padding-5,.3125rem);color:var(--success,#04cc99);font-size:var(--font-size-01,.75rem)}"}};export{c as yoo_contact_detail};