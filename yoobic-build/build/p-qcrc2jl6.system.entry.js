System.register(["./p-d99b9c19.system.js","./p-76deb591.system.js","./p-40fcf55a.system.js","./p-fd4afab3.system.js","./p-e3fa184f.system.js","./p-90888482.system.js","./p-350cb6c0.system.js"],function(e){"use strict";var t,i,n,r,o,a,s,u,c,l;return{setters:[function(e){t=e.r;i=e.c;n=e.h;r=e.H;o=e.g},function(e){a=e.dj;s=e.b9;u=e.b8;c=e.t;l=e.ak},function(){},function(){},function(){},function(){},function(){}],execute:function(){var f=e("yoo_form_reorder",function(){function e(e){t(this,e);this.listItems=[];this.validityChanged=i(this,"validityChanged",7);this.inputChanged=i(this,"inputChanged",7)}e.prototype.windowClick=function(){this.closeRemovings()};e.prototype.componentDidLoad=function(){this.listItems=Array.from(this.outerContainerEl.querySelectorAll(".list-item"));this.prepareItems();this.setOuterContainerHeight()};e.prototype.changeOutput=function(){this.value={active:{title:this.definition.active.title,values:this.sortables.filter(function(e){return e.value.group==="active"&&!e.value.isHeader}).map(function(e){return e.value})},available:{title:this.definition.available.title,values:this.sortables.filter(function(e){return e.value.group==="available"&&!e.value.isHeader}).map(function(e){return e.value})}};a(this.value,this)};e.prototype.validate=function(){return true};e.prototype.prepareItems=function(){var e=this;this.sortables=this.listItems.map(function(t,i){var n=t.querySelector(".value").getAttribute("data-value");return e.sortable(JSON.parse(n),t,i)})};e.prototype.getValueList=function(){return[{isHeader:true,group:"active",name:this.definition.active.title}].concat(this.definition.active.values.map(function(e){return Object.assign({},e,{group:"active"})}),[{isHeader:true,group:"available",name:this.definition.available.title}],this.definition.available.values.map(function(e){return Object.assign({},e,{group:"available"})}))};e.prototype.getListItemPosition=function(e){return this.listItems.slice(0,e).reduce(function(e,t){return e+=t.clientHeight},0)};e.prototype.getListItemIndex=function(e){var t=0;var i=0;while(t<e&&i<this.listItems.length){t+=this.listItems[i].clientHeight;i++}return i};e.prototype.sortable=function(e,t,i){var n=this;var r=t.querySelector(".item-content");var o=this.listItems.length;var a=false;var c;var l={value:e,dragger:null,element:t,index:i,setIndex:null};var f=s.to(r,.3,{boxShadow:"rgba(40, 47, 54, 0.07) 0px 8px 16px 0px",force3D:true,scale:1.05,paused:true});var v=function(e){n.closeRemovings();c=n.listItems.findIndex(function(t){return t===e.target});f.play();e.update()};var p=function(){s.to(t,.3,{y:n.getListItemPosition(l.index)})};var h=function(e){if(a){n.changeIndex(l,c)}f.reverse();p();n.checkItemClasses();l.dragger.disable();n.changeOutput()};var d=function(e){var t=n.clamp(n.getListItemIndex(e.y),0,o-1);if(t!==l.index){var i=n.changeIndex(l,t);a=!i}};var m=new u(t,{onDragStart:function(){v(this)},onRelease:function(){h()},onDrag:function(){d(this)},cursor:"inherit",type:"y",autoScroll:1});m.disable();l.dragger=m;var g=function(e){l.index=e;if(!m.isDragging){p()}};l.setIndex=g;this.setRowPosition(t,i);return l};e.prototype.setRowPosition=function(e,t){s.set(e,{y:this.getListItemPosition(t)})};e.prototype.changeGroup=function(e,t){if(!t){t=e.value.group==="active"?"available":"active"}e.value.group=t;if(t==="active"){e.dragger.enable()}else{e.dragger.disable()}var i=this.listItems[e.index];if(i){i.classList.remove(t==="active"?"available":"active");i.classList.add(t)}};e.prototype.checkItemClasses=function(){var e=this;var t;this.sortables.forEach(function(i,n){if(i.value.isHeader){t=i.value.group;return}if(!e.listItems[n].classList.contains(t)){e.changeGroup(i,t)}})};e.prototype.moveToActive=function(e){if(e.locked){return}var t=this.sortables.filter(function(e){return e.value.group==="active"}).length;var i=this.sortables.find(function(t){return t.value.name===e.name});if(i){this.changeIndex(i,t);this.changeGroup(i,"active");this.changeOutput()}};e.prototype.moveToAvailable=function(e){if(e.locked){return}var t=this.sortables.findIndex(function(e){return e.value.group==="available"});var i=this.sortables.find(function(t){return t.value.name===e.name});if(i){this.changeIndex(i,t);this.changeGroup(i,"available");this.changeOutput()}};e.prototype.isDroppableTo=function(e,t){if(e<1){return false}var i=this.sortables.filter(function(e){return e.value.group==="active"}).length-1;if(t.value.locked&&e>i){return false}return true};e.prototype.changeIndex=function(e,t){if(!this.isDroppableTo(t,e)){return false}this.arrayMove(this.sortables,e.index,t);this.arrayMove(this.listItems,e.index,t);this.sortables.forEach(function(e,t){return e.setIndex(t)});return true};e.prototype.arrayMove=function(e,t,i){e.splice(i,0,e.splice(t,1)[0])};e.prototype.clamp=function(e,t,i){return e<t?t:e>i?i:e};e.prototype.renderItem=function(e){var t=this;var i={"list-item":true,header:e.isHeader,"always-active":e.locked};i[e.group]=true;return n("div",{class:i},n("div",{class:"item-content"},!e.isHeader&&!e.locked&&n("yoo-icon",{class:"action-icon yo-circle-plus success",onClick:function(){return t.moveToActive(e)}}),!e.isHeader&&!e.locked&&n("yoo-icon",{class:"action-icon yo-circle-minor danger",onClick:function(){return t.openRemoving(e)}}),!e.isHeader&&e.locked&&n("yoo-icon",{class:"lock-icon stable yo-lock"}),!e.isHeader&&e.icon&&n("yoo-icon",{class:"item-icon "+e.icon}),n("span",{class:"value","data-value":JSON.stringify(e)},c(e.name)),!e.isHeader&&n("span",{class:"grip",onMouseOver:function(){return t.unlockItem(e)},onTouchStart:function(){return t.unlockItem(e)}},n("yoo-icon",{class:"yo-ranking-toggle"}))),!e.isHeader&&n("div",{class:"remove",onClick:function(){return t.onRemove(e)}},c("REMOVE")))};e.prototype.unlockItem=function(e){this.sortables.find(function(t){return t.value.name===e.name}).dragger.enable()};e.prototype.onRemove=function(e){var t=this;setTimeout(function(){return t.moveToAvailable(e)},300)};e.prototype.getListItemByValue=function(e){var t=this.sortables.findIndex(function(t){return t.value.name===e.name});return this.listItems[t]};e.prototype.openRemoving=function(e){var t=this.getListItemByValue(e);if(!t){return}setTimeout(function(){return t.querySelector(".item-content").classList.add("removing")},10)};e.prototype.closeRemovings=function(){this.listItems.forEach(function(e){return e.querySelector(".item-content").classList.remove("removing")})};e.prototype.renderItems=function(e){var t=this;return e.map(function(e){return t.renderItem(e)})};e.prototype.setOuterContainerHeight=function(){if(this.outerContainerEl){var e=this.listItems.reduce(function(e,t){return e+=t.clientHeight},0);this.outerContainerEl.style.height=e+"px"}};e.prototype.render=function(){var e=this;return n(r,{class:l()},n("div",{class:"outer-container",ref:function(t){return e.outerContainerEl=t}},this.renderItems(this.getValueList())))};Object.defineProperty(e.prototype,"host",{get:function(){return o(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return".iframe-root{top:0;right:0;bottom:0;left:0;position:absolute;color:var(--black);overflow-y:auto;scrollbar-width:none}.iframe-root yoo-app .wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;height:100%;width:100%}.iframe-root yoo-app .wrapper.center-center{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%}.iframe-root::-webkit-scrollbar{display:none}:host .outer-container{width:100%;direction:ltr}:host .list-item{position:absolute;top:0;left:0;width:100%;min-height:45px}:host .list-item .remove{display:-ms-flexbox;display:flex;position:absolute;top:0;right:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:80px;height:100%;background-color:var(--danger,#ff625f);color:var(--light,#fff);text-align:center;z-index:1}:host .list-item.header .item-content .action-icon,:host .list-item.header .item-content .badge,:host .list-item.header .item-content .grip{display:none}:host .list-item.header .item-content .value{padding-top:1em;padding-left:0;font-size:var(--font-size-03,1rem);font-weight:var(--font-weight-02,400)}:host .list-item.active .action-icon.success,:host .list-item.available .action-icon.danger,:host .list-item.available .grip{display:none}:host .item-content{position:relative;height:100%;padding:0 0 0 1rem;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;border-bottom:1px solid var(--stable-40,hsla(0,0%,67.8%,.4));background-color:var(--light,#fff);z-index:2}:host .item-content.removing{-webkit-transform:translateX(-80px)!important;transform:translateX(-80px)!important}:host .item-content.removing .value{-webkit-transform:translateX(2rem);transform:translateX(2rem);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}:host .item-content .action-icon,:host .item-content .item-icon,:host .item-content span{font-size:var(--font-size-04,1.125rem)}:host .item-content span{display:inline-block;max-width:calc(100vw - 120px);margin:.6rem 0}:host .item-content .badge{display:none}:host .item-content span.grip{display:block;margin:0;padding:.6rem 1rem;float:right;color:var(--stable,#adadad)}:host .item-content .item-icon,:host .item-content .value{padding-left:.6rem}:host .item-content .lock-icon{padding-right:2px;padding-left:1px}:host .item-content .badge.active{display:block;width:1.25rem;height:1.25rem;margin-top:.75rem;margin-right:var(--padding-10,.625rem);float:left;border-radius:50%;background:var(--success,#04cc99);color:var(--light,#fff);font-size:var(--font-size-01,.75rem);line-height:1.25rem;text-align:center}:host(.boost) .item-content{display:-ms-flexbox;display:flex}:host(.boost) .item-content .grip{margin-left:auto}:host(.boost) .item-content .badge.active{min-width:1.25rem;background:var(--danger-light,#f46885)}"},enumerable:true,configurable:true});return e}())}}});