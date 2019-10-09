import{r as s,h as t,H as i,g as o}from"./p-0d847530.js";import{cZ as e,t as n,p as r,ak as a}from"./p-384bfcf6.js";import"./p-0f3d65ca.js";import"./p-8cff990b.js";import"./p-0d62bf9d.js";import{ad as h,ae as c,dd as l,af as d}from"./p-d70b188c.js";import"./p-815d6c40.js";const p=class{constructor(t){s(this,t),this.imageWidth=130,this.imageHeight=90}componentWillLoad(){this.prepareData()}componentWillUpdate(){this.prepareData()}prepareData(){this.actualPlan=this.entry.plan||this.entry,this.isLocked=!0===this.entry.isLocked,this.assignmentDate=this.entry.assignmentDate||(new Date).toISOString(),this.finishedLessonsCount=this.entry.finishedLessonsCount||0,this.isFinished=this.calcIsFinished()}renderCardImage(){return this.entry&&this.actualPlan&&this.actualPlan.background&&this.actualPlan.background._downloadURL&&t("yoo-img",{type:"back",disabled:this.isLocked,class:"image",src:e(this.actualPlan.background._downloadURL,this.imageWidth,this.imageHeight)},this.isLocked&&t("yoo-icon",{class:"yo-lock"}))}renderDate(){const s=h(this.actualPlan,this.assignmentDate),i=c(this.actualPlan,this.assignmentDate);if(s)return t("span",{class:"danger-light"},t("yoo-icon",{class:"yo-alarm"}),l.timeAgo.transform(d(this.actualPlan,this.assignmentDate)?i:s))}calcIsFinished(){let s=this.entry&&this.entry.finishedLessonsCount?this.finishedLessonsCount:0,t=this.actualPlan.lessonsCount||0;return s>0&&t>0&&s===t}renderLessonsCount(){const s=n((this.actualPlan&&this.actualPlan.lessonsCount||0)>1?"LESSONS":"LESSON");return(this.entry&&this.entry.finishedLessonsCount?this.finishedLessonsCount+"/":"")+(this.actualPlan.lessonsCount||0)+" "+s}renderBookmarkIcon(){let s=!0===this.entry.isSelfAssigned||this.entry.creatorRef&&this.entry.ownerRef&&this.entry.creatorRef===this.entry.ownerRef;if(this.host.classList.contains("show-bookmark")&&s)return t("yoo-icon",{class:"yo-bookmark enabled"})}renderCourseContent(){let s;return this.actualPlan.availablePoints>0&&(s=this.actualPlan.availablePoints,this.entry.finishedLessonsCount&&this.entry.finishedLessonsCount>=1&&(s=`${Math.round(this.actualPlan.earnedPoints)}/${this.actualPlan.availablePoints}`)),t("div",{class:{"content-container":!r(),"content-container web-content-container":r()}},t("div",{class:"inner-container"},t("div",{class:"info-row"},t("div",{class:{"line-truncate one-line-truncate":!r()}},this.isFinished&&t("span",null,t("yoo-icon",{class:"yo-check"}),n("COMPLETED")),!this.isFinished&&t("span",null,t("yoo-icon",{class:"yo-todo-boost"}),this.renderLessonsCount()),!this.isFinished&&this.renderDate()),t("div",null,this.renderBookmarkIcon())),t("div",{class:{"title-row":!0,"line-truncate title-row-line-truncate":!r(),ellipsis:r()}},this.actualPlan&&this.actualPlan.title),r()&&t("div",{class:"description-row line-truncate one-line-truncate"},this.actualPlan&&this.actualPlan.description),s?t("div",{class:"points-row"},t("yoo-badge",{"icon-left":"yo-star",class:"energized-to-white large",text:s})):null))}render(){return t(i,{class:a()},t("div",{class:"outer-container"},this.entry&&t("div",{class:"image-container"},this.renderCardImage()),this.entry&&this.renderCourseContent()))}get host(){return o(this)}static get style(){return".iframe-root{top:0;right:0;bottom:0;left:0;position:absolute;color:var(--black);overflow-y:auto;scrollbar-width:none}.iframe-root yoo-app .wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;height:100%;width:100%}.iframe-root yoo-app .wrapper.center-center{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%}.iframe-root::-webkit-scrollbar{display:none}:host{cursor:pointer}:host p{-webkit-margin-before:0;-webkit-margin-after:0;-webkit-margin-start:0;-webkit-margin-end:0}:host .line-truncate{display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden;word-wrap:break-word;word-break:break-word}:host .two-line-truncate{-webkit-line-clamp:2}:host .one-line-truncate{-webkit-line-clamp:1}:host .title-row-line-truncate{-webkit-line-clamp:2}:host .ellipsis{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host .danger-light{color:var(--danger-light,#f46885)}:host .outer-container{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;height:5.625rem;padding:.5rem 0}:host .outer-container .image-container{position:relative;width:8.125rem;height:5.5rem}:host .outer-container .image-container .image{border-radius:var(--border-radius-input,5px)}:host .outer-container .image-container .image yoo-icon{position:absolute;right:var(--padding-5,.3125rem);bottom:var(--padding-5,.3125rem);padding:.5rem;border:none;border-radius:50%;background:var(--stable,#adadad);color:var(--light,#fff);font-size:var(--font-size-04,1.125rem);z-index:5}:host .outer-container .content-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:65%;margin:0 0 0 .75rem;border-bottom:1px solid var(--stable-alt,#d0d0d0);font-size:var(--font-size-02,.875rem)}:host .outer-container .content-container.web-content-container{margin:0 0 0 1.2rem}:host .outer-container .content-container .inner-container{height:100%}:host .outer-container .content-container .inner-container .info-row{display:-ms-flexbox;display:flex;padding-bottom:.1875rem;color:var(--stable,#adadad)}:host .outer-container .content-container .inner-container .info-row div:first-child{-ms-flex:1;flex:1}:host .outer-container .content-container .inner-container .info-row span{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding-right:.5rem}:host .outer-container .content-container .inner-container .info-row yoo-icon{padding-right:.25rem}:host .outer-container .content-container .inner-container .info-row yoo-icon.yo-bookmark{font-size:var(--font-size-05,1.25rem)}:host .outer-container .content-container .inner-container .info-row yoo-icon.yo-bookmark.enabled{color:var(--danger-light,#f46885)}:host .outer-container .content-container .inner-container .info-row yoo-icon.yo-bookmark.disabled{color:var(--stable,#adadad)}:host .outer-container .content-container .inner-container .title-row{padding-bottom:.2rem;color:var(--black,#000);font-size:var(--font-size-03,1rem);font-weight:var(--font-weight-03,700);line-height:normal}:host .outer-container .content-container .inner-container .description-row{min-height:1.5rem;color:var(--black,#000);font-size:var(--font-size-02,.875rem)}:host .outer-container .content-container .inner-container .points-row{padding-bottom:.5625rem}:host .outer-container .content-container .inner-container .points-row yoo-badge{--color-inner-text:var(--black,#000);margin-left:-.25rem}:host .outer-container .content-container .inner-container .course-points-date{display:-ms-flexbox;display:flex;margin:5px 0}:host .outer-container .content-container .inner-container .course-points-date .date{color:var(--danger-light,#f46885);font-size:var(--font-size-02,.875rem);font-weight:var(--font-weight-01,300)}:host .outer-container .content-container .inner-container .course-points-date .date .date-label{color:var(--black,#000)}:host(.courses) .outer-container .content-container .inner-container .info-row div:first-child{display:-ms-flexbox;display:flex}:host(.courses) .outer-container .content-container .inner-container .info-row yoo-icon{font-size:var(--font-size-02,.875rem)}:host(.courses) .outer-container .content-container .inner-container .info-row yoo-icon.yo-bookmark.enabled{color:var(--danger-light,#f46885)}:host(.courses) .outer-container .content-container .inner-container .info-row yoo-icon.yo-bookmark.disabled{color:transparent}:host(.web) .outer-container{height:6.5rem;padding:.75rem 0}:host(.web) .outer-container .image-container{width:10rem;height:13rem}:host(.web) .outer-container .content-container{width:calc(100% - 12rem);max-height:12rem}:host(.web) .outer-container .content-container .inner-container{margin-top:0}:host(.web) .outer-container .content-container .inner-container .image-container{position:relative;width:13rem;height:18rem;margin-top:0}:host(.web) .outer-container .content-container .inner-container .description-row{color:var(--stable,#adadad)}:host(.web) .outer-container .content-container .inner-container .title-row{min-height:0}:host-context(.big-fonts) .title-row-line-truncate{-webkit-line-clamp:1}"}};export{p as yoo_card_course_row};