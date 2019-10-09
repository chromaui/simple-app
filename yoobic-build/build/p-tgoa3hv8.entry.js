import{r as t,h as s,H as e,g as i}from"./p-0d847530.js";import{bd as r,ba as o,t as n}from"./p-384bfcf6.js";import"./p-0f3d65ca.js";import"./p-8cff990b.js";import"./p-0d62bf9d.js";import"./p-d70b188c.js";import"./p-815d6c40.js";const a=class{constructor(s){t(this,s),this.result={won:{title:"VICTORY",message:"CONGRATULATIONSWON",image:"states/trophy"},lost:{title:"DEFEAT",message:this.entry&&0===this.entry.userDuration?"ABANDONEDBATTLE":"UNLUCKYLOST",image:"states/trophy_defeat"},waiting:{title:"WAITING",message:"OPPONENTTURN",image:"empty-states/usertrial"}}}componentDidLoad(){try{const t=new r;t.delay(.3);const s=Array.from(this.host.shadowRoot.querySelectorAll(".score.user")),e=Array.from(this.host.shadowRoot.querySelectorAll(".score.opponent"));t.staggerFromTo(s,.5,{xPercent:-200},{xPercent:0},.1,0),t.staggerFromTo(e,.5,{xPercent:200},{xPercent:0},.1,.2),t.fromTo(this.host.shadowRoot.querySelectorAll(".top-container yoo-img"),.8,{opacity:0,scale:.5},{opacity:1,scale:1,ease:o.easeOut.config(1,.5)},0),t.fromTo(this.host.shadowRoot.querySelectorAll(".result-container"),.4,{y:-10,opacity:0},{y:0,opacity:1},.3)}catch(t){}}isUserWinner(){return this.entry&&"won"===this.entry.battleStatus}getResult(){return this.result[this.entry.battleStatus]}getUserName(t){return t.firstName?t.firstName:t.lastName?t.lastName:t.username?t.username:void 0}getScoreContent(){if(this.entry&&0!==this.entry.userDuration)return{title:"CORRECTANSWERS",userIcon:null,userScore:this.entry.score,opponentIcon:null,opponentScore:this.entry.opponentScore}}getTimeContent(){if(this.entry&&(void 0===this.entry.opponentScore||this.entry.score===this.entry.opponentScore)&&0!==this.entry.userDuration)return{title:"TIMETAKEN",userIcon:null,userScore:n("SECS",{sec:this.getDurationInSec(this.entry.userDuration)}),opponentIcon:null,opponentScore:void 0!==this.entry.opponentDuration?n("SECS",{sec:this.getDurationInSec(this.entry.opponentDuration)}):void 0}}getDurationInSec(t){return isNaN(t)?0:Math.round(60*t)}getStarContent(){if(this.entry&&"waiting"!==this.entry.battleStatus)return{title:"POINTSWON",userIcon:this.isUserWinner()?"yo-star":null,userScore:this.isUserWinner()?this.entry.points:0,opponentIcon:this.isUserWinner()?null:"yo-star",opponentScore:this.isUserWinner()?0:this.entry.points}}getScoreFlexIndex(t,s,e){let i;return`${i="opponent"===t&&void 0===e?0:s.userScore===s.opponentScore?1:"TIMETAKEN"===s.title?100*("user"===t?this.entry.userDuration:this.entry.opponentDuration):e}`}renderScore(t,e){let i="user"===t?e.userIcon:e.opponentIcon,r="user"===t?e.userScore:e.opponentScore;return s("div",{class:{score:!0,user:"user"===t,opponent:"opponent"===t,waiting:"opponent"===t&&void 0===r},style:{flex:this.getScoreFlexIndex(t,e,r)}},i&&s("yoo-icon",{class:i}),r)}renderUsers(){return s("div",{class:"users-container"},s("yoo-avatar",{class:"l user",user:this.entry.user,avatarIconSize:"l"}),s("div",{class:"user-name"},this.getUserName(this.entry.user)),s("div",{class:"opponent-name"},this.getUserName(this.entry.opponent)),s("yoo-avatar",{class:"l opponent",user:this.entry.opponent,avatarIconSize:"l"}))}renderInnerContainer(t){if(t)return s("div",{class:"inner-container"},s("div",{class:"title-container"},n(t.title)),s("div",{class:"score-container"},this.renderScore("user",t),this.renderScore("opponent",t)))}render(){return s(e,null,s("div",{class:"top-container "+this.entry.battleStatus},s("div",{class:"result-container"},s("div",{class:"result-title"},n(this.getResult().title)),s("div",{class:"result-message"},n(this.getResult().message))),s("div",{class:"image-container"},s("yoo-img",{src:"assets/"+this.getResult().image+".svg"}),s("div",{class:"image-shadow"}))),s("div",{class:"bottom-container"},this.renderUsers(),this.renderInnerContainer(this.getScoreContent()),this.renderInnerContainer(this.getTimeContent()),this.renderInnerContainer(this.getStarContent())),s("div",{class:"scroll-spacer"}))}get host(){return i(this)}static get style(){return".iframe-root{top:0;right:0;bottom:0;left:0;position:absolute;color:var(--black);overflow-y:auto;scrollbar-width:none}.iframe-root yoo-app .wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;height:100%;width:100%}.iframe-root yoo-app .wrapper.center-center{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%}.iframe-root::-webkit-scrollbar{display:none}:host .top-container{display:-ms-flexbox;display:flex;padding:0 1rem;background-image:url(assets/backgrounds/grey_background.svg)}:host .top-container.won{background-image:url(assets/backgrounds/yellow_background.svg)}:host .top-container.lost .image-container{-ms-flex-align:end;align-items:flex-end}:host .top-container.lost .image-container .image-shadow{margin-top:.78125rem}:host .top-container.waiting .image-container .image-shadow{margin-top:-.78125rem}:host .top-container .result-container{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:end;justify-content:flex-end;padding-top:11.5rem}:host .top-container .result-container .result-title{font-size:var(--font-size-09,2.25rem)}:host .top-container .result-container .result-message{color:var(--stable,#adadad);font-size:var(--font-size-04,1.125rem);text-overflow:ellipsis;overflow:hidden;-webkit-line-clamp:2;-webkit-box-orient:vertical}:host .top-container .image-container{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;padding-right:.7rem}:host .top-container .image-container yoo-img{width:100%;height:51%}:host .top-container .image-container .image-shadow{width:63.5%;height:1.125rem;border-radius:50%;-webkit-box-shadow:0 -25px 7px 0 rgba(0,0,0,.13);box-shadow:0 -25px 7px 0 rgba(0,0,0,.13)}:host .bottom-container{padding:0 1rem}:host .bottom-container .users-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding-top:1.25rem}:host .bottom-container .users-container yoo-avatar.user{padding-right:1rem}:host .bottom-container .users-container yoo-avatar.opponent{padding-left:1rem}:host .bottom-container .users-container .user-name{-ms-flex:1;flex:1;font-size:var(--font-size-03,1rem)}:host .bottom-container .users-container .opponent-name{-ms-flex:1;flex:1;font-size:var(--font-size-03,1rem);text-align:right}:host .bottom-container .inner-container{padding-top:1.25rem}:host .bottom-container .inner-container .title-container{padding-bottom:.5rem;color:var(--text-color,#807f83);font-size:var(--font-size-03,1rem)}:host .bottom-container .inner-container .score-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host .bottom-container .inner-container .score-container .score{width:100%;height:1.5625rem;padding:0 .5rem;border-radius:1rem;color:var(--always_light,#fff);line-height:1.5rem}:host .bottom-container .inner-container .score-container .score yoo-icon{padding-right:5px}:host .bottom-container .inner-container .score-container .score.user{margin-right:.625rem;background-color:var(--danger-light,#f46885);text-align:start}:host .bottom-container .inner-container .score-container .score.opponent{background-color:var(--accent,#1fb6ff);text-align:end}:host .bottom-container .inner-container .score-container .score.waiting{padding:0 .78rem;background-color:var(--stable-light,#f1f1f1)}"}};export{a as yoo_battle_result};