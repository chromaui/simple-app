System.register(["./p-d99b9c19.system.js","./p-76deb591.system.js","./p-40fcf55a.system.js","./p-fd4afab3.system.js","./p-e3fa184f.system.js","./p-90888482.system.js","./p-350cb6c0.system.js"],function(e){"use strict";var t,n,r,s,o,i,a;return{setters:[function(e){t=e.r;n=e.h;r=e.H;s=e.g},function(e){o=e.bd;i=e.ba;a=e.t},function(){},function(){},function(){},function(){},function(){}],execute:function(){var u=e("yoo_battle_result",function(){function e(e){t(this,e);this.result={won:{title:"VICTORY",message:"CONGRATULATIONSWON",image:"states/trophy"},lost:{title:"DEFEAT",message:this.entry&&this.entry.userDuration===0?"ABANDONEDBATTLE":"UNLUCKYLOST",image:"states/trophy_defeat"},waiting:{title:"WAITING",message:"OPPONENTTURN",image:"empty-states/usertrial"}}}e.prototype.componentDidLoad=function(){try{var e=new o;e.delay(.3);var t=Array.from(this.host.shadowRoot.querySelectorAll(".score.user"));var n=Array.from(this.host.shadowRoot.querySelectorAll(".score.opponent"));e.staggerFromTo(t,.5,{xPercent:-200},{xPercent:0},.1,0);e.staggerFromTo(n,.5,{xPercent:200},{xPercent:0},.1,.2);e.fromTo(this.host.shadowRoot.querySelectorAll(".top-container yoo-img"),.8,{opacity:0,scale:.5},{opacity:1,scale:1,ease:i.easeOut.config(1,.5)},0);e.fromTo(this.host.shadowRoot.querySelectorAll(".result-container"),.4,{y:-10,opacity:0},{y:0,opacity:1},.3)}catch(e){}};e.prototype.isUserWinner=function(){return this.entry&&this.entry.battleStatus==="won"};e.prototype.getResult=function(){var e=this.entry.battleStatus;return this.result[e]};e.prototype.getUserName=function(e){if(e.firstName){return e.firstName}else if(e.lastName){return e.lastName}else if(e.username){return e.username}};e.prototype.getScoreContent=function(){if(this.entry&&this.entry.userDuration!==0){return{title:"CORRECTANSWERS",userIcon:null,userScore:this.entry.score,opponentIcon:null,opponentScore:this.entry.opponentScore}}};e.prototype.getTimeContent=function(){if(this.entry&&(this.entry.opponentScore===undefined||this.entry.score===this.entry.opponentScore)&&this.entry.userDuration!==0){return{title:"TIMETAKEN",userIcon:null,userScore:a("SECS",{sec:this.getDurationInSec(this.entry.userDuration)}),opponentIcon:null,opponentScore:this.entry.opponentDuration!==undefined?a("SECS",{sec:this.getDurationInSec(this.entry.opponentDuration)}):undefined}}};e.prototype.getDurationInSec=function(e){if(isNaN(e)){return 0}return Math.round(e*60)};e.prototype.getStarContent=function(){if(this.entry&&this.entry.battleStatus!=="waiting"){return{title:"POINTSWON",userIcon:this.isUserWinner()?"yo-star":null,userScore:this.isUserWinner()?this.entry.points:0,opponentIcon:this.isUserWinner()?null:"yo-star",opponentScore:this.isUserWinner()?0:this.entry.points}}};e.prototype.getScoreFlexIndex=function(e,t,n){var r;if(e==="opponent"&&n===undefined){r=0}else if(t.userScore===t.opponentScore){r=1}else if(t.title==="TIMETAKEN"){r=(e==="user"?this.entry.userDuration:this.entry.opponentDuration)*100}else{r=n}return""+r};e.prototype.renderScore=function(e,t){var r=e==="user"?t.userIcon:t.opponentIcon;var s=e==="user"?t.userScore:t.opponentScore;var o={score:true,user:e==="user",opponent:e==="opponent",waiting:e==="opponent"&&s===undefined};return n("div",{class:o,style:{flex:this.getScoreFlexIndex(e,t,s)}},r&&n("yoo-icon",{class:r}),s)};e.prototype.renderUsers=function(){return n("div",{class:"users-container"},n("yoo-avatar",{class:"l user",user:this.entry.user,avatarIconSize:"l"}),n("div",{class:"user-name"},this.getUserName(this.entry.user)),n("div",{class:"opponent-name"},this.getUserName(this.entry.opponent)),n("yoo-avatar",{class:"l opponent",user:this.entry.opponent,avatarIconSize:"l"}))};e.prototype.renderInnerContainer=function(e){if(!e){return}return n("div",{class:"inner-container"},n("div",{class:"title-container"},a(e.title)),n("div",{class:"score-container"},this.renderScore("user",e),this.renderScore("opponent",e)))};e.prototype.render=function(){return n(r,null,n("div",{class:"top-container "+this.entry.battleStatus},n("div",{class:"result-container"},n("div",{class:"result-title"},a(this.getResult().title)),n("div",{class:"result-message"},a(this.getResult().message))),n("div",{class:"image-container"},n("yoo-img",{src:"assets/"+this.getResult().image+".svg"}),n("div",{class:"image-shadow"}))),n("div",{class:"bottom-container"},this.renderUsers(),this.renderInnerContainer(this.getScoreContent()),this.renderInnerContainer(this.getTimeContent()),this.renderInnerContainer(this.getStarContent())),n("div",{class:"scroll-spacer"}))};Object.defineProperty(e.prototype,"host",{get:function(){return s(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return".iframe-root{top:0;right:0;bottom:0;left:0;position:absolute;color:var(--black);overflow-y:auto;scrollbar-width:none}.iframe-root yoo-app .wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;height:100%;width:100%}.iframe-root yoo-app .wrapper.center-center{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%}.iframe-root::-webkit-scrollbar{display:none}:host .top-container{display:-ms-flexbox;display:flex;padding:0 1rem;background-image:url(assets/backgrounds/grey_background.svg)}:host .top-container.won{background-image:url(assets/backgrounds/yellow_background.svg)}:host .top-container.lost .image-container{-ms-flex-align:end;align-items:flex-end}:host .top-container.lost .image-container .image-shadow{margin-top:.78125rem}:host .top-container.waiting .image-container .image-shadow{margin-top:-.78125rem}:host .top-container .result-container{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:end;justify-content:flex-end;padding-top:11.5rem}:host .top-container .result-container .result-title{font-size:var(--font-size-09,2.25rem)}:host .top-container .result-container .result-message{color:var(--stable,#adadad);font-size:var(--font-size-04,1.125rem);text-overflow:ellipsis;overflow:hidden;-webkit-line-clamp:2;-webkit-box-orient:vertical}:host .top-container .image-container{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;padding-right:.7rem}:host .top-container .image-container yoo-img{width:100%;height:51%}:host .top-container .image-container .image-shadow{width:63.5%;height:1.125rem;border-radius:50%;-webkit-box-shadow:0 -25px 7px 0 rgba(0,0,0,.13);box-shadow:0 -25px 7px 0 rgba(0,0,0,.13)}:host .bottom-container{padding:0 1rem}:host .bottom-container .users-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding-top:1.25rem}:host .bottom-container .users-container yoo-avatar.user{padding-right:1rem}:host .bottom-container .users-container yoo-avatar.opponent{padding-left:1rem}:host .bottom-container .users-container .user-name{-ms-flex:1;flex:1;font-size:var(--font-size-03,1rem)}:host .bottom-container .users-container .opponent-name{-ms-flex:1;flex:1;font-size:var(--font-size-03,1rem);text-align:right}:host .bottom-container .inner-container{padding-top:1.25rem}:host .bottom-container .inner-container .title-container{padding-bottom:.5rem;color:var(--text-color,#807f83);font-size:var(--font-size-03,1rem)}:host .bottom-container .inner-container .score-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host .bottom-container .inner-container .score-container .score{width:100%;height:1.5625rem;padding:0 .5rem;border-radius:1rem;color:var(--always_light,#fff);line-height:1.5rem}:host .bottom-container .inner-container .score-container .score yoo-icon{padding-right:5px}:host .bottom-container .inner-container .score-container .score.user{margin-right:.625rem;background-color:var(--danger-light,#f46885);text-align:start}:host .bottom-container .inner-container .score-container .score.opponent{background-color:var(--accent,#1fb6ff);text-align:end}:host .bottom-container .inner-container .score-container .score.waiting{padding:0 .78rem;background-color:var(--stable-light,#f1f1f1)}"},enumerable:true,configurable:true});return e}())}}});