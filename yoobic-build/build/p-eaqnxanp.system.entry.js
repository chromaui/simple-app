System.register(["./p-d99b9c19.system.js","./p-76deb591.system.js","./p-40fcf55a.system.js","./p-fd4afab3.system.js","./p-e3fa184f.system.js","./p-90888482.system.js","./p-350cb6c0.system.js"],function(t){"use strict";var e,i,r,a,n,s,o,l,c,d,h,u,p,f,v,g,y,C,m;return{setters:[function(t){e=t.r;i=t.c;r=t.h;a=t.H;n=t.g},function(t){s=t.fT;o=t.aq;l=t.u;c=t.b9;d=t.bd;h=t.bb;u=t.fU;p=t.dj;f=t.fS;v=t.b8;g=t.cZ;y=t.t;C=t.ak;m=t.be},function(){},function(){},function(){},function(){},function(){}],execute:function(){var w=.35;var S=500;var b=t("yoo_form_swipe_cards",function(){function t(t){e(this,t);this.validators=[];this.mode="text";this.forceShowSwipeableCards=false;this.maxCardsToDisplay=3;this.xStackAreaThreshold=35;this.cardsElements=[];this.swipeButtons=[];this.validityChanged=i(this,"validityChanged",7);this.inputChanged=i(this,"inputChanged",7)}t.prototype.requiredWatch=function(){this.validate()};t.prototype.componentDidLoad=function(){if(this.outerContainerElement){this.displayFooterElement(false);this.setResponsiveDisplay();if(this.forceShowSwipeableCards){this.showSwipeableCards()}this.swipeButtons=Array.from(this.outerContainerElement.querySelectorAll("yoo-button"));this.cardsElements=Array.from(this.outerContainerElement.querySelectorAll(".card-container"));this.initSwipeableCards()}};t.prototype.validate=function(){var t=this.getFilteredCardList(s.swiped).length;if(this.checkArray(this.values)){this.validity=t===this.values.length}else{this.validity=t===this.images.length}this.validityChanged.emit(this.validity);return this.validity};t.prototype.setResponsiveDisplay=function(){if(this.swipeableCardsContainerElement){var t=this.numberSteps>0;var e=.7;var i=90;var r=!this.forceShowSwipeableCards&&(t?90:45);var a=window.innerHeight-(r+i);var n=Math.round(window.innerWidth*e);this.cardWidth=n>400?400:n;this.cardHeight=Math.round(a*e);if(this.cardsActionsElement&&this.backgroundContainerElement&&a>0){this.backgroundContainerElement.style.height=this.cardHeight+"px";this.cardsActionsElement.style.top=this.cardHeight*1.15+"px"}}if(this.instructionsContainerElement){this.instructionsContainerElement.style.height=window.innerHeight/2+"px"}};t.prototype.displayFooterElement=function(t){if(t===void 0){t=true}var e=o(this.host,"yoo-ion-slide");if(e){this.footerElement=e.querySelector("yoo-form-footer");if(this.footerElement){var i=t?"block":"none";this.footerElement.style.display=i}}};t.prototype.showSwipeableCards=function(){this.displayFooterElement();if(this.instructionsContainerElement&&this.swipeableCardsContainerElement){this.fadeElement("out",this.instructionsContainerElement);this.instructionsContainerElement.remove();this.swipeableCardsContainerElement.classList.add("flex");this.fadeElement("in",this.swipeableCardsContainerElement)}};t.prototype.initSwipeableCards=function(){this.swipeButtons=Array.from(this.outerContainerElement.querySelectorAll("yoo-button"));this.cardsElements=Array.from(this.outerContainerElement.querySelectorAll(".card-container"));if(this.checkArray(this.swipeButtons)){this.addCards();this.initSwipeItems();this.manageSwipeButtonsStates()}};t.prototype.isFullImageMode=function(){return this.mode==="image"};t.prototype.getScaledCardWidth=function(t){return Math.ceil(t/5)*5};t.prototype.initSwipeItems=function(){var t=this;this.swipeCardItems=this.cardsElements.map(function(e,i){var r={};var a=t.cardsElements.length-1-i;var n=a===0;var o=a>t.maxCardsToDisplay-1;var l=t.getDraggableInstance(e)[0];if(!t.isFullImageMode()){var c=e.textContent;r.value=c}else{r.value=t.images[a]._filename}r.id=a;r.element=e;r.swipeState=o?s.hidden:s.available;r.draggableInstance=n?l:l.disable();return r})};t.prototype.moveCard=function(t,e,i){var r=t==="forward";var a=parseInt(e.style.top,10);var n=Math.round(e.clientWidth);var s=r?1.1:.9;var o=this.getCardStyle(i).top;var d=this.getCardStyle(i).opacity;var h=this.getScaledCardWidth(n*s);try{if(l(d)&&l(h)&&l(o)){return new c.fromTo(e,w,{top:a,width:n,opacity:e.style.opacity},{top:o,width:h,opacity:d})}}catch(t){}};t.prototype.fadeElement=function(t,e){try{var i=t==="out"?0:1;(new d).to(e,w,{opacity:i,ease:h.easeIn})}catch(t){}};t.prototype.returnCardToStack=function(t){try{c.to(t,w,{x:0,y:0,opacity:1,top:this.getCardStyle(1).top,rotation:"0_short"})}catch(t){}};t.prototype.throwCard=function(t){var e=this;this.fadeElement("out",t);t.classList.remove("flex");t.classList.add(s.hidden);this.cardsContainerElement.removeChild(t);this.hiddenCards=this.getFilteredCardList(s.hidden);if(this.checkArray(this.hiddenCards)){var i=this.hiddenCards.slice(-1)[0];var r=i.element;r.style.opacity=.2.toString();r.style.top=0-u.secondCard.top+"px";r.style.width=this.getScaledCardWidth(this.cardWidth*.7)+"px";r.style.height=this.cardHeight+"px";this.fadeElement("in",r);this.cardsContainerElement.prepend(r);this.swipeCardItems.forEach(function(t){if(t===i){t.swipeState=s.available}return t})}this.availableCards=this.getFilteredCardList(s.available);if(this.checkArray(this.availableCards)){this.availableCards.forEach(function(t,i){var r=e.availableCards.length-i;var a=t.element;e.swipeCardItems[i].moveInstance=e.moveCard("forward",a,r)});var a=this.availableCards.slice(-1)[0];if(a){a.draggableInstance.enable();this.fadeElement("in",a.element.querySelector(".content-card"))}}this.manageSwipeButtonsStates();this.getUserAnswer();this.lockSwipeButtons(false)};t.prototype.lockSwipeButtons=function(t){if(t===void 0){t=true}this.swipeButtons.forEach(function(e){return e.disabled=t})};t.prototype.swipeCard=function(t,e,i){var r=this;if(i===void 0){i=false}this.lockSwipeButtons();this.swipeCardItems.forEach(function(a){if(a.element===e){if(!r.isFullImageMode()){r.changeCardTextValue(e,a.value)}else{r.changeCardTextValue(e,"")}r.setThrowStateItem(a,t);a.throwInstance=r.getThrowInstance(e,t,i)}})};t.prototype.setThrowStateItem=function(t,e){t.swipeState=s.swiped;t.swipedDirection=e;delete t.moveInstance;return t};t.prototype.getThrowInstance=function(t,e,i){var r=this;try{var a=i?.6:w;var n=e==="right";var s=new d({repeat:0,yoyo:false,repeatDelay:0,onComplete:function(){return r.throwCard(t)},onCompleteParams:[t]}).staggerTo([t],a,{bezier:[{left:"+="+(n?300:-500),top:"+=0",rotation:""+(n?10.5:-10.5)}],ease:h.easeInOut});return s}catch(t){}};t.prototype.getUserAnswer=function(){var t=[];var e=[];var i=this.getFilteredCardList(s.swiped);if(this.checkArray(i)){i.forEach(function(i){if(i.swipedDirection==="right"){e.push(i.value)}else{t.push(i.value)}})}this.value=[t,e];p(this.value,this)};t.prototype.changeCardTextValue=function(t,e){if(t){var i=!this.isFullImageMode()?".content-text":".content-overlay";var r=t.querySelector(i);if(r){r.textContent=e}}};t.prototype.getFilteredCardList=function(t){return this.swipeCardItems.filter(function(e){return e.swipeState===t})};t.prototype.getSwipeButton=function(t){if(this.checkArray(this.swipeButtons)){return this.swipeButtons.filter(function(e){return e.classList.contains("swipe-"+t)})[0]}};t.prototype.manageSwipeButtonsStates=function(){if(this.checkArray(this.swipeButtons)){var t=this.getSwipeButton(f.left);var e=this.getSwipeButton(f.undo);var i=this.getSwipeButton(f.right);t.disabled=i.disabled=!this.checkArray(this.getFilteredCardList(s.available));e.disabled=!this.checkArray(this.getFilteredCardList(s.swiped))}};t.prototype.performColor=function(t,e,i){var r=this;var a=!this.isFullImageMode()?".content-card":".content-overlay";var n=t.querySelector(a);var s=function(t){return t===f.left?"danger-light":"light-orange"};var o=function(t){return r.getSwipeButton(t)};if(i==="add"){this.backgroundContainerElement.classList.add(e);n.classList.add(e);o(e).classList.add(s(e))}else{this.backgroundContainerElement.classList.remove(e);n.classList.remove(e);o(e).classList.remove(s(e))}};t.prototype.getCurrentBackgroundColor=function(){return this.backgroundContainerElement.classList.length>1&&this.backgroundContainerElement.classList[1]};t.prototype.changeSwipeColor=function(t,e){if(this.backgroundContainerElement){var i=this.getCurrentBackgroundColor();if(e){if(i&&i!==e){this.performColor(t,i,"remove")}else{this.performColor(t,e,"add")}}else{if(i){this.performColor(t,i,"remove")}}}};t.prototype.getSwipedCategorie=function(t){return this.checkArray(this.categories)&&t===f.left?this.categories[0]:this.categories[1]};t.prototype.showCategory=function(t,e){if(e){var i=this.getSwipedCategorie(e);this.changeCardTextValue(t,i)}else if(!this.isFullImageMode()){var r=this.swipeCardItems.find(function(e){return e.element===t}).value;this.changeCardTextValue(t,r)}else{this.changeCardTextValue(t,"")}};t.prototype.getDraggableInstance=function(t){var e=this;var i=function(t){if(t&&t.target){var i=t.target;if(t.endX<0-e.xStackAreaThreshold||t.endX>e.xStackAreaThreshold){var r=.025;var a=t.endX<0?f.left:f.right;e.changeSwipeColor(i,a);c.to(i,0,{rotation:""+t.endX*r});e.showCategory(i,a)}else{c.to(i,0,{rotation:"0"});e.changeSwipeColor(i);e.showCategory(i)}try{m.set(i,{x:t.x,y:t.y})}catch(t){}}};var r=function(t){if(t){var i=t.target;var r=t.endX!==0&&(t.endX>e.xStackAreaThreshold||t.endX<0-e.xStackAreaThreshold);if(r){var a=t.endX<0?f.left:f.right;e.swipeCard(a,i)}else{e.returnCardToStack(i)}e.changeSwipeColor(i)}};try{return new v.create(t,{bound:this.outerContainerElement,type:"x",zIndexBoost:false,onDrag:function(){i(this)},onDragEnd:function(){r(this)}})}catch(t){}};t.prototype.onClickSwipeCard=function(t){var e=this;var i=this.getSwipeButton(t).disabled;var r=this.getFilteredCardList(s.available).slice(-1)[0];if(r&&!i){var a=r.element;setTimeout(function(){e.changeSwipeColor(a);if(!e.isFullImageMode()){e.changeCardTextValue(a,r.value)}},S);this.changeCardTextValue(a,this.getSwipedCategorie(t));this.changeSwipeColor(a,t);this.swipeCard(t,a,true);this.getUserAnswer()}};t.prototype.checkArray=function(t){return Boolean(t&&t.length&&Array.isArray(t))};t.prototype.undoSwipeCard=function(){var t=this;var e=this.getSwipeButton(f.undo);if(!e.disabled){var i=this.getFilteredCardList(s.swiped);this.lockSwipeButtons();if(this.checkArray(i)){var r=i[0];var a=r.element;a.classList.remove(s.hidden);a.classList.add("flex");this.cardsContainerElement.appendChild(a);r.throwInstance.reverse();if(this.isFullImageMode()){this.changeCardTextValue(a,"")}this.returnCardToStack(a);r.swipeState=s.reverted;delete r.swipedDirection;delete r.throwInstance;if(this.checkArray(this.availableCards)){this.availableCards.slice(-1)[0].draggableInstance.disable()}this.availableCards.push(r);if(this.availableCards.length>this.maxCardsToDisplay){var n=this.availableCards.shift();n.swipeState=s.hidden;this.fadeElement("out",n.element);this.cardsContainerElement.removeChild(this.cardsContainerElement.childNodes[0])}this.swipeCardItems.forEach(function(e){var i=e.swipeState;if(i===s.available){var r=Math.abs(t.availableCards.indexOf(e)-t.availableCards.length);e.moveInstance=t.moveCard("back",e.element,r);t.fadeElement("out",e.element.querySelector(".content-card"))}else if(i===s.reverted){e.draggableInstance.enable();e.swipeState=s.available;setTimeout(function(){t.lockSwipeButtons(false)},S)}})}setTimeout(function(){t.manageSwipeButtonsStates()},S+50);this.getUserAnswer()}};t.prototype.getCardStyle=function(t){if(t===u.thirdCard.position){return u.thirdCard}if(t===u.secondCard.position){return u.secondCard}if(t===u.firstCard.position){return u.firstCard}};t.prototype.addCards=function(){var t=this;if(this.cardsContainerElement){var e=this.checkArray(this.values)?this.values.reverse():this.checkArray(this.images)?this.images:[];e.forEach(function(i,r){var a=e.length-1;var n=a-r;var s=n===0;var o=function(t){return document.createElement(t)};var l=function(t,e){var i;(i=e.classList).add.apply(i,t)};var c=o("div");l(["card-container"],c);var d=o("div");l(["content-card",t.mode],d);d.style.opacity=""+(s?1:0);if(t.mode!=="text"&&t.checkArray(t.images)){var h=o("div");if(!t.isFullImageMode()){h.style.height=t.cardHeight*.8+"px"}l(["content-image"],h);var u=t.images[n]._downloadURL;var p=o("yoo-img");p.src=g(u,t.cardWidth,t.cardHeight);l(["card"],p);h.appendChild(p);if(t.isFullImageMode()){var f=o("div");l(["content-overlay"],f);h.appendChild(f)}d.appendChild(h)}if(!t.isFullImageMode()){var v=o("div");l(["content-text"],v);v.textContent=i;d.appendChild(v)}c.appendChild(d);if(r>a-t.maxCardsToDisplay){var y=n+1;var C=t.getScaledCardWidth((10-1*n)/10*t.cardWidth);c.style.top=t.getCardStyle(y).top+"px";c.style.opacity=""+t.getCardStyle(y).opacity;c.style.width=C+"px";c.style.maxWidth=t.cardWidth+"px";c.style.height=t.cardHeight+"px";t.cardsContainerElement.appendChild(c)}t.cardsElements.push(c)})}};t.prototype.renderInstructionsContainer=function(){var t=this;return r("div",{class:"instructions-container",ref:function(e){return t.instructionsContainerElement=e}},r("div",null,r("div",{class:"top-description"},r("div",{class:"title"},this.label),r("div",{class:"description"},y(this.description||"CARDSWIPEDEFAULTINSTRUCTIONS"))),r("div",{class:"categories"},r("div",{class:"category left"},r("div",{class:"icon"},r("yoo-icon",{class:"yo-big-arrow-left"})),r("div",{class:"name left"},this.categories&&this.categories[0]),r("div",{class:"direction"},y("SWIPELEFT"))),r("div",{class:"category center"},r("div",{class:"icon"},r("yoo-icon",{class:"yo-swipe-explanation"}))),r("div",{class:"category right"},r("div",{class:"icon"},r("yoo-icon",{class:"yo-big-arrow-right"})),r("div",{class:"name right"},this.categories&&this.categories[1]),r("div",{class:"direction"},y("SWIPERIGHT")))),this.instructionsDocument&&r("div",{class:"document"},r("div",{class:"document-title"},y("ATTACHMENTS")),r("yoo-form-document",{document:this.instructionsDocument,readonly:true,onInputChanged:function(t){return t.stopPropagation()}}))),r("div",{class:"start-button-container"},r("yoo-button",{class:"large danger-light",text:y("START"),onClick:function(){return t.showSwipeableCards()}})))};t.prototype.renderSwipeableCardsContainer=function(){var t=this;return r("div",{class:"swipe-cards-container",ref:function(e){return t.swipeableCardsContainerElement=e}},r("div",{class:"cards-stack"},r("div",{class:"background",ref:function(e){return t.backgroundContainerElement=e}}),r("div",{class:"cards-list",ref:function(e){return t.cardsContainerElement=e}})),r("div",{class:"cards-actions",ref:function(e){return t.cardsActionsElement=e}},r("div",{class:"swipe-buttons"},r("yoo-button",{icon:"yo-big-arrow-left",class:"centered swipe-left",onClick:function(){return t.onClickSwipeCard(f.left)}}),r("yoo-button",{icon:"yo-undo",class:"centered swipe-undo",onClick:function(){return t.undoSwipeCard()}}),r("yoo-button",{icon:"yo-big-arrow-right",class:"centered swipe-right",onClick:function(){return t.onClickSwipeCard(f.right)}}))))};t.prototype.renderSummaryContainer=function(){var t=this;return this.categories.map(function(e,i){return[r("div",{class:"category-title"},e),r("ul",null,Array.from(new Set(t.value[i])).map(function(e){var a=Boolean(t.answer[i].find(function(t){return t===e}));return r("li",{class:{"text-success":a,"text-danger":!a}},e)}))]})};t.prototype.render=function(){var t=this;return r(a,{class:Object.assign({},C(),{readonly:this.readonly})},r("div",{class:"outer-container",ref:function(e){return t.outerContainerElement=e}},!this.readonly?[this.renderInstructionsContainer(),this.renderSwipeableCardsContainer()]:this.checkArray(this.answer)&&this.renderSummaryContainer()))};Object.defineProperty(t.prototype,"host",{get:function(){return n(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{required:["requiredWatch"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return".iframe-root{top:0;right:0;bottom:0;left:0;position:absolute;color:var(--black);overflow-y:auto;scrollbar-width:none}.iframe-root yoo-app .wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;height:100%;width:100%}.iframe-root yoo-app .wrapper.center-center{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%}.iframe-root::-webkit-scrollbar{display:none}.text-success{color:var(--success,#04cc99)!important}.text-danger{color:var(--danger,#ff625f)!important}.text-danger-light{color:var(--danger-light,#f46885)!important}.text-energized{color:var(--energized,#fed05b)!important}.text-royal{color:var(--royal,#845cff)!important}.text-info{color:var(--info,#fc459e)!important}.text-dark{color:var(--dark,#2b3648)!important}.text-text-color{color:var(--text-color,#807f83)!important}.text-light{color:var(--light,#fff)!important}.text-always-light{color:var(--always-light,#fff)!important}.text-light-orange{color:var(--light-orange,#fcae49)!important}.text-stable-light{color:var(--stable-light,#f1f1f1)!important}.text-stable{color:var(--stable,#adadad)!important}.text-warning{color:var(--warning,#ff6402)!important}.text-accent{color:var(--accent,#1fb6ff)!important}.hidden{display:none!important}.flex{display:-ms-flexbox!important;display:flex!important}.block{display:block!important}:host{display:block}:host .outer-container .instructions-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;height:-webkit-fill-available;height:-moz-available;height:stretch}:host .outer-container .instructions-container .top-description{height:9.375rem;padding:0 1rem;background:var(--dark,#2b3648)}:host .outer-container .instructions-container .top-description .title{padding-top:1.5rem;color:var(--light,#fff);font-size:var(--font-size-07,1.75rem)}:host .outer-container .instructions-container .top-description .description{color:var(--stable,#adadad);font-size:var(--font-size-04,1.125rem)}:host .outer-container .instructions-container .categories{display:-ms-flexbox;display:flex;-ms-flex-pack:space-evenly;justify-content:space-evenly;padding:1rem 0;background-color:var(--light,#fff)}:host .outer-container .instructions-container .categories .category{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;padding:0 1rem;color:var(--stable,#adadad)}:host .outer-container .instructions-container .categories .category .icon{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;padding-bottom:var(--padding-20,1.25rem)}:host .outer-container .instructions-container .categories .category .icon yoo-icon{padding:.61rem;border:none;border-radius:50%;font-size:var(--font-size-04,1.125rem)}:host .outer-container .instructions-container .categories .category .icon yoo-icon.yo-big-arrow-left{background:var(--danger-light,#f46885);color:var(--light,#fff)}:host .outer-container .instructions-container .categories .category .icon yoo-icon.yo-swipe-explanation{color:var(--stable-alt,#d0d0d0);font-size:var(--font-size-11,3rem)}:host .outer-container .instructions-container .categories .category .icon yoo-icon.yo-big-arrow-right{background:var(--light-orange,#fcae49);color:var(--light,#fff)}:host .outer-container .instructions-container .categories .category .name{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;padding-bottom:var(--padding-5,.3125rem)}:host .outer-container .instructions-container .categories .category .name.left{color:var(--danger-light,#f46885)}:host .outer-container .instructions-container .categories .category .name.right{color:var(--light-orange,#fcae49)}:host .outer-container .instructions-container .categories .category .direction{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;color:var(--stable,#adadad)}:host .outer-container .instructions-container .categories .category.center{-ms-flex-pack:center;justify-content:center}:host .outer-container .instructions-container .document{background-color:var(--light,#fff)}:host .outer-container .instructions-container .document .document-title{padding:0 .9375rem;font-size:var(--font-size-03,1rem)}:host .outer-container .instructions-container .document yoo-form-document{--outer-container-padding:0.9375rem 0.9375rem;width:calc(100% - .9375rem)}:host .outer-container .instructions-container .start-button-container{position:absolute;top:90%;right:0;bottom:0;left:0;margin-top:10%;padding:1.5rem}:host .outer-container .swipe-cards-container{display:none;position:relative;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;opacity:0}:host .outer-container .swipe-cards-container .left{background-color:var(--danger-light,#f46885)!important;color:var(--always-light,#fff)!important}:host .outer-container .swipe-cards-container .right{background-color:var(--light-orange,#fcae49)!important;color:var(--always-light,#fff)!important}:host .outer-container .swipe-cards-container .cards-stack{display:block;width:100%}:host .outer-container .swipe-cards-container .cards-stack .background{width:100%;margin:-.5rem;-webkit-transition:background-color .2s ease-in;transition:background-color .2s ease-in;background-color:var(--dark,#2b3648)}:host .outer-container .swipe-cards-container .cards-stack .cards-list .card-container,:host .outer-container .swipe-cards-container .cards-stack .cards-list .card-container *{border-top-left-radius:8px;border-top-right-radius:8px}:host .outer-container .swipe-cards-container .cards-stack .cards-list .card-container{display:-ms-flexbox;display:flex;position:absolute;right:0;left:0;-ms-flex-direction:column;flex-direction:column;height:24rem;margin:0 auto;border-bottom-left-radius:8px;border-bottom-right-radius:8px;background-color:var(--stable-light,#f1f1f1);color:var(--dark,#2b3648);font-size:var(--font-size-07,1.75rem);text-align:center;-webkit-box-shadow:var(--toolbar-shadow,0 1px 10px 0 rgba(0,0,0,.15));box-shadow:var(--toolbar-shadow,0 1px 10px 0 rgba(0,0,0,.15))}:host .outer-container .swipe-cards-container .cards-stack .cards-list .card-container .content-card{height:100%;-webkit-transition:background-color .2s ease-in;transition:background-color .2s ease-in;border-bottom-left-radius:8px;border-bottom-right-radius:8px;background-color:var(--light,#fff)}:host .outer-container .swipe-cards-container .cards-stack .cards-list .card-container .content-card.text{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host .outer-container .swipe-cards-container .cards-stack .cards-list .card-container .content-card.image{height:100%}:host .outer-container .swipe-cards-container .cards-stack .cards-list .card-container .content-card.image .content-image{height:100%;border-radius:8px}:host .outer-container .swipe-cards-container .cards-stack .cards-list .card-container .content-card.image .content-image .content-overlay{display:-ms-flexbox;display:flex;position:absolute;top:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;-webkit-transition:background-color .2s ease-in;transition:background-color .2s ease-in;border-radius:8px}:host .outer-container .swipe-cards-container .cards-stack .cards-list .card-container .content-card.image .content-image yoo-img{border-bottom-left-radius:8px;border-bottom-right-radius:8px}:host .outer-container .swipe-cards-container .cards-stack .cards-list .card-container .content-card .content-image{width:100%;background-color:var(--light,#fff)}:host .outer-container .swipe-cards-container .cards-stack .cards-list .card-container .content-card .content-text{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:18%;height:20%;-webkit-transition:color .25s linear;transition:color .25s linear}:host .outer-container .swipe-cards-container .cards-actions{display:-ms-flexbox;display:flex;position:absolute;right:0;left:0;-ms-flex-pack:space-evenly;justify-content:space-evenly;width:15.5rem;margin:0 auto}:host .outer-container .swipe-cards-container .cards-actions .swipe-buttons{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}:host .outer-container .swipe-cards-container .cards-actions .swipe-buttons yoo-button.centered{--border-radius-container:50%;--font-size-icon:var(--icon-size-02,1.5rem);--height-container:4.375rem;--min-height-container:4.375rem;--width-container:4.375rem;--min-width-container:4.375rem;margin:0 var(--padding-10,.625rem)}:host .outer-container .swipe-cards-container .cards-actions .swipe-buttons yoo-button.centered.swipe-left{--color-value:var(--danger-light,#f46885)}:host .outer-container .swipe-cards-container .cards-actions .swipe-buttons yoo-button.centered.swipe-right{--color-value:var(--light-orange,#fcae49)}:host(.readonly){height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}:host(.readonly) .outer-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding-top:.5rem}:host(.readonly) .outer-container .category-title{font-size:var(--font-size-04,1.125rem)}:host(.readonly) .outer-container ul{margin:.25rem .5rem;padding-left:0;list-style:none}"},enumerable:true,configurable:true});return t}())}}});