import{r as s,c as t,h as e}from"./p-0d847530.js";import{t as i}from"./p-384bfcf6.js";import"./p-0f3d65ca.js";import"./p-8cff990b.js";import"./p-0d62bf9d.js";import{ac as r,dd as a}from"./p-d70b188c.js";import"./p-815d6c40.js";const d=class{constructor(e){s(this,e),this.courses=[],this.battles=[],this.courseSelected=t(this,"courseSelected",7),this.badgeSelected=t(this,"badgeSelected",7),this.seeAllCourses=t(this,"seeAllCourses",7),this.seeAllBattles=t(this,"seeAllBattles",7)}onSelectCourse(s){s.stopPropagation(),this.courseSelected.emit(s.detail)}onSelectBadge(s){s.stopPropagation(),this.badgeSelected.emit(s.detail)}onSeeAllCourses(){this.seeAllCourses.emit(!0)}onSeeAllBattles(){this.seeAllBattles.emit(!0)}getBadgeEntries(){return Object.keys(r).map(s=>{let t=this.stats&&this.stats.earnedBadges.indexOf(r[s])<0;return{text:i(r[s].toUpperCase()),cssClass:"./assets/badges/"+(t?"locked/":"")+r[s]+(t?"_locked":"")+".svg"}})}renderStats(){if(this.stats)return e("div",{class:"points"},e("yoo-icon",{class:"yo-star energized"}),e("span",null,Math.ceil(10*this.stats.earnedPoints)/10,"/",this.stats.availablePoints))}renderHeader(){return e("div",{class:{"user-detail":!0,"no-padding":this.courses.length<=0}},this.renderStats(),e("div",{class:"description"},this.user.description||""))}renderCourseList(){if(this.courses.length)return e("yoo-grid",{items:this.courses,entityType:"courses",extraClass:"no-background",displayType:"card-sticky",direction:"horizontal",onSelected:s=>this.onSelectCourse(s),isLocal:!0,hideHeader:!0},e("div",{slot:"header",class:"small-margin-bottom"},e("div",{class:"title"},i("COURSES")),e("div",{class:"total-number"},this.courses.length),e("div",{class:"action",onClick:()=>this.onSeeAllCourses()},i("SEEALL"))))}renderBadges(){return e("yoo-grid",{items:this.getBadgeEntries(),entityType:"badges",displayType:"card-cell",onSelected:s=>this.onSelectBadge(s),isLocal:!0,hideHeader:!0},e("div",{slot:"header"},e("div",{class:"title"},i("BADGES")),e("div",{class:"total-number"},this.getBadgeEntries().length)))}renderJoined(){return e("div",{class:"dates"},e("span",{class:"date-label"},i("JOINEDON")),e("span",null,a.dateFormat.transform(this.user.hiringDate?this.user.hiringDate:this.user._ect,"MMM YYYY")))}render(){return[this.renderHeader(),this.renderCourseList(),this.renderBadges(),this.renderJoined()]}static get style(){return".iframe-root{top:0;right:0;bottom:0;left:0;position:absolute;color:var(--black);overflow-y:auto;scrollbar-width:none}.iframe-root yoo-app .wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;height:100%;width:100%}.iframe-root yoo-app .wrapper.center-center{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%}.iframe-root::-webkit-scrollbar{display:none}:host .user-detail{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:0 1rem var(--padding-30,1.875rem) 0;text-align:center}:host .user-detail.no-padding{padding-bottom:0}:host .user-detail .points{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-size:var(--font-size-02,.875rem)}:host .user-detail .points span{margin-left:5px}:host .user-detail .description{padding:var(--padding-10,.625rem) var(--padding-10,.625rem) 0;font-size:var(--font-size-02,.875rem);font-weight:var(--font-weight-01,300)}:host .section-header div:first-child,:host yoo-grid div:first-child{display:-ms-flexbox;display:flex;font-size:var(--font-size-02,.875rem)}:host .section-header div:first-child .title,:host yoo-grid div:first-child .title{display:-ms-flexbox;display:flex}:host .section-header div:first-child .action,:host yoo-grid div:first-child .action{margin-left:auto;padding-right:1rem;color:var(--stable,#adadad);font-weight:var(--font-weight-01,300)}:host .section-header div:first-child .total-number,:host yoo-grid div:first-child .total-number{padding-left:.2rem;color:var(--stable,#adadad)}:host .section-header div:first-child.small-margin-bottom,:host yoo-grid div:first-child.small-margin-bottom{margin-bottom:-.3125rem}:host .dates{padding:var(--padding-30,1.875rem) 0;color:var(--stable,#adadad);font-size:var(--font-size-02,.875rem);font-weight:var(--font-weight-01,300)}:host .dates span.date-label{margin-right:var(--padding-5,.3125rem);color:var(--black,#000);font-weight:var(--font-weight-01,300)}"}};export{d as yoo_user_detail};