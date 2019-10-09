System.register(["./p-d99b9c19.system.js","./p-76deb591.system.js","./p-40fcf55a.system.js","./p-fd4afab3.system.js","./p-e3fa184f.system.js","./p-90888482.system.js","./p-350cb6c0.system.js"],function(t){"use strict";var e,i,s,n,o,r,u,a,c,d,l,h;return{setters:[function(t){e=t.r;i=t.c;s=t.h;n=t.H;o=t.g},function(t){r=t.t;u=t.cH;a=t.p;c=t.ak},function(){},function(){},function(){},function(t){d=t.aA;l=t.dd;h=t.aO},function(){}],execute:function(){var p=t("yoo_question_detail",function(){function t(t){e(this,t);this.liked=i(this,"liked",7);this.replyClicked=i(this,"replyClicked",7);this.userClicked=i(this,"userClicked",7)}t.prototype.componentWillLoad=function(){this.updateActions()};t.prototype.onQuestionUpdate=function(){this.updateActions()};t.prototype.updateActions=function(){var t=this;if(this.question){this.actions=[{text:r(this.question.isWiki?"COMMENT":"REPLY"),handler:function(){return t.replyClicked.emit()}},{text:r("LIKECOUNT",{count:this.question.likesCount||0}),cssClass:this.question.isLikedByMe?"danger-light":"",handler:function(){return t.liked.emit(!t.question.isLikedByMe)}}]}};t.prototype.renderQuestionTop=function(){var t=this;return s("div",{class:"question-top"},s("yoo-avatar",{class:"list-m",avatarIconSize:"m",imgSrc:this.question?this.question.user.imageData:null,user:this.question?this.question.user:null,onClick:function(e){return t.userClicked.emit()}}),s("div",{class:"question-heading"},this.question&&this.question.user?s("span",null,d(this.question.user)):null,this.question&&this.question.user?s("span",{class:"question-subheading"},r(this.question.user.role)):null))};t.prototype.renderUnderDescription=function(){return s("div",{class:"under-description-container"},s("span",{class:"question-date"},l.timeAgo.transform(this.question._ect||new Date)),this.question.isVerified&&s("div",{class:"verified"},s("yoo-icon",{class:"yo-verified"}),s("span",{class:"icon-text"},r("VERIFIED"))))};t.prototype.renderBottomAction=function(){if(!this.actions){return}return s("div",{class:"question-bottom"},this.actions.map(function(t){return s("div",{class:"button-container"},s("yoo-button",{onClick:function(e){return t.handler()},text:t.text,class:t.cssClass||"",disabled:false}))}))};t.prototype.renderTags=function(){if(!this.question||!this.question.tags){return}return s("div",{class:"hashtags"},this.question.tags.map(function(t){return t&&s("span",{class:"hashtag",innerHTML:"#"+t.toLowerCase()+" "})}))};t.prototype.renderImage=function(){var t=this;if(!this.question||!this.question.imageData){return}return s("div",{class:"image-container",onClick:function(){return u(t.question.imageData,t.question.title?t.question.title:null,true)}},s("yoo-img",{type:"image",allowOrientation:true,class:"image",src:this.question.imageData}))};t.prototype.renderVideo=function(){if(!this.question||!this.question.videoData){return}var t={class:"round",videoPlayerCoreParameters:{source:this.question.videoData}};if(a()){t.videoPlayerCoreParameters["videoHeight"]=600;t.videoPlayerCoreParameters["videoWidth"]=800}return s("div",{class:"image-container"},s("yoo-videoplayer-core",Object.assign({},t)))};t.prototype.renderFile=function(){if(!this.question||!this.question.document){return}return s("div",{class:"file-container"},s("yoo-form-document",{document:this.question.document}))};t.prototype.render=function(){return s(n,{class:c()},s("div",{class:"outer-container"},this.renderQuestionTop(),this.renderImage(),this.renderVideo(),s("div",{class:"content-container"},s("div",{class:"question-description"},s("div",{class:"title",innerHTML:h(this.question.title)}),this.question.isWiki&&this.question.version&&s("yoo-badge",{text:this.question.version,class:"small round danger-light"}),this.question.description&&s("div",{class:"description",innerHTML:h(this.question.description)})),this.renderUnderDescription(),this.renderTags()),this.renderFile(),this.renderBottomAction()))};Object.defineProperty(t.prototype,"host",{get:function(){return o(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{question:["onQuestionUpdate"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return".iframe-root{top:0;right:0;bottom:0;left:0;position:absolute;color:var(--black);overflow-y:auto;scrollbar-width:none}.iframe-root yoo-app .wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;height:100%;width:100%}.iframe-root yoo-app .wrapper.center-center{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%}.iframe-root::-webkit-scrollbar{display:none}:host{--image-container-height:100%}:host .question-bottom{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;margin-top:1rem}:host .question-bottom .button-container{width:100%}:host{cursor:pointer}:host .outer-container{padding-top:var(--padding-15,.9375rem)}:host .outer-container mark{background-color:transparent;color:var(--black,#000)!important}:host .outer-container .question-top{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;padding-right:var(--padding-15,.9375rem);padding-left:var(--padding-15,.9375rem)}:host .outer-container .question-top yoo-avatar{margin-right:.8rem;-webkit-transform:translateY(3px);transform:translateY(3px)}:host .outer-container .question-top .question-heading{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;color:var(--dark,#2b3648);font-size:var(--font-size-02,.875rem);font-weight:var(--font-weight-01,300);line-height:1.25}:host .outer-container .question-top .question-heading .question-subheading{color:var(--stable,#adadad)}:host .outer-container .image-container{position:relative;height:var(--image-container-height);padding-top:var(--padding-15,.9375rem);padding-bottom:var(--padding-15,.9375rem);color:var(--always-black,#000)}:host .outer-container .image-container .image{width:100%;height:100%;background:var(--stable-light,#f1f1f1)}:host .outer-container .file-container{display:-ms-flexbox;display:flex;width:100%;margin-top:auto;margin-bottom:var(--padding-5,.3125rem);padding:var(--padding-20,1.25rem);-webkit-box-sizing:border-box;box-sizing:border-box}:host .outer-container .file-container yoo-form-document{width:100%}:host .outer-container .hashtags{font-size:var(--font-size-02,.875rem)}:host .outer-container .hashtags .hashtag{color:var(--danger-light,#f46885)}:host .outer-container .content-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding-right:var(--padding-15,.9375rem);padding-left:var(--padding-15,.9375rem);font-size:var(--font-size-03,1rem)}:host .outer-container .content-container .image-container{position:relative;height:var(--image-container-height);color:var(--always-black,#000)}:host .outer-container .content-container .image-container .image{width:100%;height:100%;border-radius:5px;background:var(--stable-light,#f1f1f1);-webkit-box-shadow:0 2px 4px 0 rgba(40,47,54,.08);box-shadow:0 2px 4px 0 rgba(40,47,54,.08)}:host .outer-container .content-container .image-container .inner-icon{padding:.2em .45em;border-radius:50%;background-color:var(--always-light,#fff)}:host .outer-container .content-container .image-container .bottom-left-icon{bottom:.9375rem;left:.9375rem;position:absolute;-webkit-box-shadow:var(--attachment-icon-shadow,0 6px 18px 0 rgba(40,47,54,.08));box-shadow:var(--attachment-icon-shadow,0 6px 18px 0 rgba(40,47,54,.08))}:host .outer-container .content-container .image-container .bottom-right-icon{bottom:.9375rem;right:.9375rem;position:absolute}:host .outer-container .content-container .image-container .top-left-icon{top:.9375rem;left:.9375rem;position:absolute}:host .outer-container .content-container .image-container .top-right-icon{top:.9375rem;right:.9375rem;position:absolute}:host .outer-container .content-container .image-container .badge-bottom-left{bottom:.9375rem;left:.9375rem;position:absolute}:host .outer-container .content-container .image-container .badge-bottom-right{bottom:.9375rem;right:.9375rem;position:absolute}:host .outer-container .content-container .image-container .badge-top-left{top:.9375rem;left:.9375rem;position:absolute}:host .outer-container .content-container .image-container .badge-top-right{top:.9375rem;right:.9375rem;position:absolute}:host .outer-container .content-container .image-container .bottom-left-icon,:host .outer-container .content-container .image-container .bottom-right-icon,:host .outer-container .content-container .image-container .top-left-icon,:host .outer-container .content-container .image-container .top-right-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:1.875rem;height:1.875rem;padding:0}:host .outer-container .content-container .under-description-container{display:-ms-flexbox;display:flex;font-size:var(--font-size-02,.875rem)}:host .outer-container .content-container .under-description-container div{padding:0 .625rem}:host .outer-container .content-container .under-description-container .question-date{color:var(--stable,#adadad);font-size:var(--font-size-02,.875rem)}:host .outer-container .content-container .under-description-container .verified .icon-text{padding:0 .3125rem}:host .outer-container .content-container .under-description-container .verified yoo-icon{color:var(--danger-light,#f46885)}:host .outer-container .content-container.no-img{padding-top:var(--padding-10,.625rem)}:host .outer-container .content-container .question-badges{margin-bottom:.625rem}:host .outer-container .content-container .question-description{position:relative;padding-bottom:.25rem;color:var(--dark,#2b3648)}:host .outer-container .content-container .question-description .title{font-size:var(--font-size-04,1.125rem);font-weight:var(--font-weight-03,700);line-height:normal;white-space:normal;overflow:hidden}:host .outer-container .content-container .question-description .description{padding-bottom:.5rem}:host .outer-container .content-container .question-description yoo-badge{margin-left:.2rem}:host .outer-container .content-container .question-description.photos{color:var(--stable,#adadad)}:host .outer-container .content-container .question-description.short-text .description-content .text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-right:2.5rem}:host .outer-container .content-container .question-description.short-text .description-content .ellipsis{display:none}:host .outer-container .content-container .question-description.short-text .description-content .more-button{display:block;position:absolute;right:0;bottom:0;width:2.5rem;padding-left:2px;background-color:var(--light,#fff);color:var(--text-color,#807f83);font-size:var(--font-size-02,.875rem)}:host .outer-container .content-container .question-description.short-text-no-img{height:96px;max-height:96px}:host .outer-container .content-container .question-description.short-text-no-img .description-content{max-height:inherit;color:inherit;line-height:inherit;text-overflow:ellipsis;white-space:normal;overflow:hidden}:host .outer-container .content-container .question-description.short-text-no-img .description-content .text{max-height:inherit}:host .outer-container .content-container .question-description.short-text-no-img .description-content .ellipsis{display:block;position:absolute;right:0;bottom:0;width:1rem;padding-right:2.5rem;padding-left:.3125rem;background-color:var(--light,#fff)}:host .outer-container .content-container .question-description.short-text-no-img .description-content .more-button{display:block;position:absolute;right:0;bottom:0;width:2.5rem;padding-left:2px;background-color:var(--light,#fff);color:var(--text-color,#807f83);font-size:var(--font-size-02,.875rem)}:host .outer-container .content-container .question-description.long-text .description-content .more-button{color:var(--text-color,#807f83)}:host .outer-container .content-container .question-hashtags{line-height:1.2rem}:host .outer-container .content-container .question-hashtags .hashtag{margin-left:2px}:host .outer-container .content-container .question-bottom-action{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;color:var(--text-color,#807f83);font-size:var(--font-size-02,.875rem);line-height:1.7rem;cursor:pointer}:host .question-icons{display:-ms-flexbox;display:flex;padding-top:.625rem;padding-bottom:.625rem}:host .question-icons .question-icon{padding-top:.2rem;padding-right:.9375rem;color:var(--black,#000)}:host .question-icons .question-icon yoo-icon{font-size:var(--font-size-04,1.125rem)}:host .question-icons .question-icon.text{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-pack:end;justify-content:flex-end;margin-right:0;padding-right:var(--padding-5,.3125rem);font-size:var(--font-size-01,.75rem)}:host .question-icons .question-icon.text .icon-text{-ms-flex-item-align:center;align-self:center;padding-right:var(--padding-5,.3125rem)}:host .question-icons .question-icon.text yoo-icon{font-size:var(--font-size-05,1.25rem)}:host .info-question{color:var(--dark,#2b3648)}:host .info-question span{margin-left:-.5rem;padding-top:var(--padding-5,.3125rem);padding-bottom:var(--padding-5,.3125rem);font-size:var(--font-size-03,1rem)}:host .answer-question{padding-left:1rem;color:var(--dark,#2b3648);font-weight:var(--font-weight-01,300)}:host(.boost) .question-hashtags{color:var(--danger-light,#f46885)}:host(.operations) .question-hashtags{color:var(--success,#04cc99)}:host(.offline) .outer-container{opacity:.7}:host(.offline):after,:host(.offline):before{content:\"\";position:absolute;top:0;right:0;border-color:transparent;border-style:solid}:host(.offline):after{border-width:.5em;border-right-color:var(--energized,#fed05b);border-top-color:var(--energized,#fed05b)}:host(.web){--image-container-height:600px}:host(.web) .outer-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding:0}:host(.web) .outer-container .image-container{-ms-flex-order:1;order:1;margin:0}:host(.web) .outer-container .image-container .image{border-radius:0;background:var(--black,#000)}:host(.web) .outer-container .question-top{-ms-flex-order:2;order:2}:host(.web) .outer-container .content-container,:host(.web) .outer-container .question-bottom{-ms-flex-order:3;order:3}:host(.web) .outer-container .content-container,:host(.web) .outer-container .question-bottom,:host(.web) .outer-container .question-top{padding:.5rem 1rem;padding-bottom:.4rem}"},enumerable:true,configurable:true});return t}())}}});