System.register(["./p-d99b9c19.system.js","./p-76deb591.system.js","./p-40fcf55a.system.js","./p-fd4afab3.system.js","./p-e3fa184f.system.js","./p-90888482.system.js","./p-350cb6c0.system.js"],function(e){"use strict";var t,i,n,s,r,o,a,d,l,h,c,u,f,p,g,m,y;return{setters:[function(e){t=e.r;i=e.c;n=e.h;s=e.g},function(e){r=e.cR;o=e.fV;a=e.cS;d=e.t;l=e.N;h=e.R;c=e.z;u=e.cE;f=e.bq},function(){},function(){},function(){},function(e){p=e.dd;g=e.aA;m=e.bq;y=e.ab},function(){}],execute:function(){var C=e("yoo_feed_detail",function(){function e(e){t(this,e);this.imageEnlarged=false;this.hasGradient=true;this.imageWidth=335;this.imageHeight=260;this.showMoreButton=true;this.expandText=false;this.textExpanded=false;this.groupClicked=i(this,"groupClicked",7);this.commentClicked=i(this,"commentClicked",7);this.likeClicked=i(this,"likeClicked",7);this.likeCountClicked=i(this,"likeCountClicked",7);this.viewCountClicked=i(this,"viewCountClicked",7);this.imageClicked=i(this,"imageClicked",7);this.userClicked=i(this,"userClicked",7);this.slideChanges=i(this,"slideChanges",7);this.socialShareClicked=i(this,"socialShareClicked",7)}e.prototype.handlePinchZoom=function(e){var t=e.detail;r(this.ionSlides,t)};e.prototype.onPlayerStateChange=function(e){if(e){var t=e.detail;if(t===o.PAUSED){this.handleImageClick(null,true)}else if(t===o.PLAYING){this.handleImageClick(null,false)}}};e.prototype.componentDidLoad=function(){if(this.ionScrollDiv&&this.ionScrollDiv.firstElementChild){if(this.ionScrollDiv.firstElementChild.clientHeight>a(.1)){this.showMoreButton=true;this.expandText=false}else{this.showMoreButton=false}}if(this.ionSlides&&this.feed&&this.feed.currentSlideIndex>0){this.ionSlides.slideTo(this.feed.currentSlideIndex)}if(this.focusMediaOnOpen){this.handleGradientClick()}};e.prototype.onIonSlideDidChange=function(e){var t=this;if(this.ionSlides){this.ionSlides.getActiveIndex().then(function(e){t.slideChanges.emit(e)})}};e.prototype.updateIonScroll=function(){if(this.ionScrollDiv){this.ionScrollDiv.refresh()}};e.prototype.onOverlayClick=function(){this.hideOverlay()};e.prototype.onToggleMore=function(e){this.expandText=!this.expandText;this.hasGradient=true;if(e){e.stopPropagation()}};e.prototype.hideOverlay=function(){this.feedDetailContainer.classList.remove("show-overlay")};e.prototype.hasMediaSrc=function(){return this.feed&&this.feed.mediaSrc&&this.feed.mediaSrc.length>0};e.prototype.showOverlay=function(){this.feedDetailContainer.classList.add("show-overlay")};e.prototype.handleImageClick=function(e,t){if(e){e.stopPropagation()}this.hasGradient=!this.hasGradient;if(!this.hasGradient){this.expandText=false}this.imageEnlarged=!this.imageEnlarged;if(t===true){this.hasGradient=t;this.imageEnlarged=false}else if(t===false){this.hasGradient=t;this.imageEnlarged=true;this.expandText=false}this.imageClicked.emit(this.imageEnlarged);if(this.photoEditorDiv){this.updatePhotoEditorImageScale()}};e.prototype.updatePhotoEditorImageScale=function(){var e=this.photoEditorDiv.querySelector(".image");if(this.photoEditorDiv&&e&&this.photoEditorDiv.classList.contains("initialscale")){this.photoEditorDiv.classList.remove("initialscale");e.classList.add("fullscale")}else{this.photoEditorDiv.classList.add("initialscale");e.classList.remove("fullscale")}};e.prototype.handleGradientClick=function(e){if(e){e.stopPropagation()}if(this.feedDetailContainer.classList.contains("show-overlay")){this.hideOverlay()}else{this.handleImageClick()}};e.prototype.onInteractionClicked=function(e,t){if(e){e.stopPropagation()}t()};e.prototype.renderInteraction=function(e,t,i,s){var r=this;if(s===void 0){s=""}return n("div",{class:"interaction "+(s?s:""),onClick:function(e){return r.onInteractionClicked(e,i)}},e?n("yoo-icon",{class:e}):null,n("span",{class:"interaction-counter"},t))};e.prototype.onGroupClicked=function(e){if(this.feed.group.length>1){if(e){e.stopPropagation()}return this.groupClicked.emit(true)}};e.prototype.renderSharedIn=function(){var e=this.feed.group.length>1;return[n("span",{class:"feed-group"},(e?this.feed.group.length:this.feed.group[0])+" "),e&&d("GROUPS")]};e.prototype.renderHeader=function(){var e=this;return n("div",{class:"feed-header"},n("yoo-avatar",{class:"m",user:this.feed?this.feed.user:null,avatarIconSize:"m",isOnline:this.feed.isOnline,onClick:function(t){return e.userClicked.emit()}}),n("div",{class:"feed-heading"},this.feed&&this.feed.user?n("span",null,g(this.feed.user)):null,n("div",null,this.feed&&this.feed.date?n("span",{class:"feed-date"},p.timeAgo.transform(this.feed._ect),"."):null,this.feed&&this.feed.group&&this.feed.group.length?[n("span",{onClick:function(t){return e.onGroupClicked(t)}},n("span",{class:"feed-shared-in"}," "," • "+d("SHAREDIN")+" "),n("span",{class:"feed-subheading"},typeof this.feed.group==="string"?[n("span",null," "),n("span",{class:"feed-group"},this.feed.group)]:this.renderSharedIn()))]:null)))};e.prototype.renderShowMoreButton=function(){var e=this;return n("div",{class:"more-button",onClick:function(t){e.onToggleMore(t)}},this.expandText?d("VIEWLESS"):d("MORE2"))};e.prototype.renderText=function(){var e=this;var t=this.feed.mentions&&this.feed.mentions.length>0;return n("div",{class:"feed-text"},this.feed&&this.feed.description&&n("div",{class:"feed-description"},n("div",{class:{"description-content":true,expanded:this.expandText}},n("div",{class:"scroll-wrapper"},n("yoo-ion-scroll",{class:"relative no-contain",showScrollbar:false,ref:function(t){return e.ionScrollDiv=t}},n("div",{class:"scroll-inner-container"},this.feed&&!t&&n("div",{innerHTML:this.feed.descriptionTranslated||l(this.feed.description)}),t&&n("yoo-mention-tag",{class:"light force-tag",allowTruncate:false,mentionedList:this.feed.mentions,description:this.feed.description}),this.feed&&this.feed.tags?n("div",{class:"feed-hashtags"},this.feed&&this.feed.tags.map(function(e){return n("span",{class:"hashtag",innerHTML:"#"+e.toLowerCase()+" "})})):null))),this.showMoreButton&&this.renderShowMoreButton())))};e.prototype.renderImage=function(e){var t=this;return n("div",{class:"feed-image"},n("yoo-photo-editor",{class:"feed-image initialscale",onClick:function(e){return t.handleImageClick(e)},ref:function(e){return t.photoEditorDiv=e},src:e,readonly:true}))};e.prototype.renderSlides=function(e){return n("yoo-ion-slide",null,this.renderImage(e))};e.prototype.renderVideo=function(e){var t={videoPlayerCoreParameters:{source:e,controls:true,fullscreen:true,showDuration:true}};return n("yoo-videoplayer-core",Object.assign({},t))};e.prototype.renderOverlay=function(){var e=this;return n("div",{onClick:function(){e.onOverlayClick()},class:"overlay"})};e.prototype.renderInteractionContainer=function(){var e=this;return n("div",{class:"feed-interactions"},this.isOffline?null:[this.feed.disableLikes?null:this.renderInteraction(this.feed.isLikedByMe?"yo-heart liked":"yo-heart stable-alt","",function(){return e.likeClicked.emit(true)}),this.feed.disableComments?null:this.renderInteraction("yo-comment  stable-alt","",function(){return e.commentClicked.emit(true)}),h().canSocialShare&&!this.feed.disableSharing&&this.renderInteraction("yo-share  stable-alt","",function(){return e.socialShareClicked.emit(true)}),this.feed.disableLikes?null:this.renderInteraction(null,m(this.feed.likesCount),function(){return e.likeCountClicked.emit(true)}),this.feed.disableComments?null:this.renderInteraction(null,this.feed.comments&&this.feed.comments.length?d("VIEWALLCOMMENTS",{count:this.feed.comments.length||0}):d("FIRSTCOMMENT"),function(){return e.commentClicked.emit(true)},"stable comment"),!this.feed.user||this.feed.user._id!==c().userId?null:this.renderInteraction("yo-eye stable-alt",(this.feed.viewsCount?this.feed.viewsCount:0).toString(),function(){return e.viewCountClicked.emit(true)},"counter")])};e.prototype.getMediaType=function(){if(this.feed&&this.feed.mediaType){return this.feed.mediaType}else{return"photo"}};e.prototype.isSingleMedia=function(e){return e&&e.length===1};e.prototype.isMultiMedia=function(e){return e&&e.length>1};e.prototype.renderMediaByType=function(e){var t=this.getMediaType();if(t==="photo"){return this.renderImage(e)}else if(t==="video"){return this.renderVideo(e)}else if(t==="audio"){return n("yoo-audio-player",{blockEventOnPlay:true,_downloadURL:e})}};e.prototype.renderSlide=function(e){return n("yoo-ion-slide",null,this.renderMediaByType(e))};e.prototype.renderMediaInner=function(){if(this.isMultiMedia(this.feed.mediaSrc)){return this.renderMultipleContent()}else if(this.isSingleMedia(this.feed.mediaSrc)){return this.renderMediaByType(this.feed.mediaSrc[0])}return};e.prototype.renderMultipleContent=function(){var e=this;return n("yoo-ion-slides",{ref:function(t){return e.ionSlides=t},onIonSlideDidChange:function(t){return e.onIonSlideDidChange(t)},options:{autoplay:false,spaceBetween:15},navigation:false},this.feed.mediaSrc.map(function(t){return e.renderSlide(t)}))};e.prototype.onSwipeDown=function(e){if(e){e.stopPropagation()}if(!this.hasGradient){u(null)}};e.prototype.renderMedia=function(){var e=this;var t=this.feed.mediaSrc;var i=this.getMediaType();if(this.isSingleMedia(t)){t=[t[0]]}return n("div",{class:"media-outer-container "+i,onClick:function(t){return e.handleImageClick(t)}},n("yoo-swipe-container",{class:"black",onSwipedDown:function(t){e.onSwipeDown(t)}},n("div",{onClick:function(t){return e.handleGradientClick(t)},class:{gradient:true,hide:!this.hasGradient}}),this.renderMediaInner()))};e.prototype.addExtraClass=function(e,t){return e+" "+t};e.prototype._class=function(e){var t=e;switch(e){case"feed-details-container":{if(f()){t=this.addExtraClass(t,"iphone-x")}if(this.feed&&this.feed.document){t=this.addExtraClass(t,y(this.feed.document))}if(this.imageEnlarged){t=this.addExtraClass(t,"image-focus")}if(this.feed&&this.hasMediaSrc()){t=this.addExtraClass(t,this.getMediaType())}if(this.expandText){t=this.addExtraClass(t,"text-expanded")}if(this.showMoreButton){t=this.addExtraClass(t,"has-overflow")}return t}default:return e}};e.prototype.render=function(){var e=this;return n("div",{class:this._class("feed-details-container"),onClick:function(t){return e.handleGradientClick(t)},ref:function(t){return e.feedDetailContainer=t}},this.hasMediaSrc()&&this.renderMedia(),n("div",{class:"bottom-container"},this.renderHeader(),this.renderText(),this.renderInteractionContainer()))};Object.defineProperty(e.prototype,"host",{get:function(){return s(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return".iframe-root{top:0;right:0;bottom:0;left:0;position:absolute;color:var(--black);overflow-y:auto;scrollbar-width:none}.iframe-root yoo-app .wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;height:100%;width:100%}.iframe-root yoo-app .wrapper.center-center{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%}.iframe-root::-webkit-scrollbar{display:none}:host{--card-feed-media-height:260px;--gradient-background-image:linear-gradient(transparent 60%,var(--black-80,rgba(0,0,0,0.8))),linear-gradient(var(--black-80,rgba(0,0,0,0.8)),transparent 10%)}\@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}\@keyframes fadeIn{0%{opacity:0}to{opacity:1}}:host .feed-details-container{position:fixed;top:0;left:0;right:0;bottom:0;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;margin-top:3rem;background-color:var(--black,#000);font-size:var(--font-size-02,.875rem);font-style:normal;font-weight:var(--font-weight-01,300);letter-spacing:normal;line-height:normal;font-stretch:normal}:host .feed-details-container.photo,:host .feed-details-container.video{margin-top:0}:host .feed-details-container .gradient{position:absolute;right:0;bottom:0;left:0;width:100%;height:100%;-webkit-transform:opacity 1s ease;transform:opacity 1s ease;background-image:var(--gradient-background-image);opacity:1;z-index:6}:host .feed-details-container .gradient.hide{-webkit-transform:opacity 1s ease;transform:opacity 1s ease;opacity:0;z-index:-1;pointer-events:none}:host .feed-details-container.text-expanded{--gradient-background-image:linear-gradient(transparent 60%,var(--black-80,rgba(0,0,0,0.8))100%),linear-gradient(var(--black-80,rgba(0,0,0,0.8)),transparent 500%)}:host .feed-details-container.text-expanded .media-outer-container{z-index:5}:host .feed-details-container.text-expanded .gradient{z-index:7}:host .feed-details-container.has-overflow .bottom-container .feed-text .feed-description .description-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:12vh}:host .feed-details-container.has-overflow .bottom-container .feed-text .feed-description .description-content.expanded{height:40vh;max-height:40vh}:host .feed-details-container.has-overflow .bottom-container .feed-text .feed-description .description-content.expanded .scroll-wrapper{height:auto}:host .feed-details-container.iphone-x .bottom-container .feed-interactions{padding-bottom:var(--padding-15,.9375rem)}:host .feed-details-container.image-focus .bottom-container{-webkit-transition:opacity .5s ease;transition:opacity .5s ease;opacity:0}:host .feed-details-container.hide-overlay .overlay{display:none}:host .feed-details-container .media-outer-container{position:relative;width:100%;height:100%;height:var(--card-feed-media-height);border-radius:var(--card-feed-radius)}:host .feed-details-container .media-outer-container.audio{--card-feed-media-height:80px}:host .feed-details-container .media-outer-container.photo{--card-feed-media-height:100%}:host .feed-details-container .media-outer-container yoo-ion-slides{position:absolute;width:100%;height:100%;z-index:6}:host .feed-details-container .feed-image{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;padding:0}:host .feed-details-container .feed-image .gradient{position:absolute;right:0;bottom:0;left:0;width:100%;height:100%;background-image:var(--gradient-background-image);z-index:6}:host .feed-details-container .bottom-container{display:-ms-flexbox;display:flex;position:absolute;right:0;bottom:0;left:0;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:end;justify-content:flex-end;margin-top:auto;padding:16px;-webkit-transition:all .5s ease;transition:all .5s ease;opacity:1;z-index:6}:host .feed-details-container .bottom-container .feed-header{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;padding-bottom:var(--padding-15,.9375rem)}:host .feed-details-container .bottom-container .feed-header yoo-avatar{margin-right:.8rem;-webkit-transform:translateY(3px);transform:translateY(3px)}:host .feed-details-container .bottom-container .feed-header .feed-heading{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;color:var(--always-light,#fff)}:host .feed-details-container .bottom-container .feed-header .feed-heading .feed-date,:host .feed-details-container .bottom-container .feed-header .feed-heading .feed-shared-in{color:var(--stable-alt,#d0d0d0);font-size:var(--font-size-02,.875rem);font-weight:var(--font-weight-02,400)}:host .feed-details-container .bottom-container .feed-header .feed-heading .feed-subheading{color:var(--always-light,#fff)}:host .feed-details-container .bottom-container .feed-header .feed-heading .feed-subheading .feed-group{padding-left:.125rem;color:var(--always-light,#fff);font-weight:var(--font-weight-02,400)}:host .feed-details-container .bottom-container .feed-text{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;color:var(--always-light,#fff)}:host .feed-details-container .bottom-container .feed-text .feed-hashtags{display:block;color:var(--success,#04cc99);line-height:1.2rem}:host .feed-details-container .bottom-container .feed-text .feed-description{font-size:var(--font-size-02,.875rem)}:host .feed-details-container .bottom-container .feed-text .feed-description .description-content,:host .feed-details-container .bottom-container .feed-text .feed-description .description-content.expanded{-webkit-transition:all .3s ease;transition:all .3s ease}:host .feed-details-container .bottom-container .feed-text .feed-description .description-content.expanded .scroll-wrapper yoo-ion-scroll{max-height:40vh}:host .feed-details-container .bottom-container .feed-text .feed-description .description-content .scroll-wrapper{height:inherit;overflow:hidden}:host .feed-details-container .bottom-container .feed-text .feed-description .description-content .more-button{color:var(--text-color,#807f83)}:host .feed-details-container .bottom-container .feed-interactions{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;padding-top:var(--padding-15,.9375rem);white-space:nowrap}:host .feed-details-container .bottom-container .feed-interactions .interaction{display:inline-block;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin:0 1rem 0 0;color:var(--always-light,#fff);cursor:pointer}:host .feed-details-container .bottom-container .feed-interactions .interaction yoo-icon{padding-right:2px}:host .feed-details-container .bottom-container .feed-interactions .interaction yoo-icon.liked{color:var(--danger,#ff625f)}:host .feed-details-container .bottom-container .feed-interactions .interaction.counter{margin-right:0;margin-left:auto}:host .feed-details-container .bottom-container .feed-interactions .interaction.stable{color:var(--stable,#adadad)}:host .feed-details-container .bottom-container .feed-interactions .interaction.comment,:host .feed-details-container .bottom-container .feed-interactions .interaction.comment span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .feed-details-container .image-container{position:fixed;top:0;left:0;right:0;bottom:0;width:100%;height:100%}:host .feed-details-container.show-overlay .bottom-container{-ms-flex-align:start;align-items:flex-start;height:100%;max-height:100vh;-webkit-transition:all .5s ease;transition:all .5s ease}:host .feed-details-container.show-overlay .bottom-container .feed-text .feed-description,:host .feed-details-container.show-overlay .overlay{display:-ms-flexbox;display:flex}:host .feed-details-container.image-focus .image-container{z-index:3}:host .feed-details-container.image-focus .bottom-container{-webkit-transition:all .5s ease;transition:all .5s ease;opacity:0!important;z-index:-1;pointer-events:none}"},enumerable:true,configurable:true});return e}())}}});