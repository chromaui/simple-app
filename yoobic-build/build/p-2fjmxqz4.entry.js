import{r as t,c as r,h as s,g as o}from"./p-0d847530.js";import{ak as a,dD as e,dC as i,i as n,d as p}from"./p-384bfcf6.js";import"./p-0f3d65ca.js";import"./p-8cff990b.js";import{b as h}from"./p-0d62bf9d.js";import{di as m}from"./p-d70b188c.js";import"./p-815d6c40.js";import{S as d}from"./p-b6d128c3.js";const c=class{constructor(s){t(this,s),h(),this.darkThemeChanged=r(this,"darkThemeChanged",7)}onDarkThemeChanged(){this.darkThemeChanged.emit(this.isDarkTheme)}onLanguageChange(){if(this.language)return fetch("./assets/i18n/"+(a().boost?"boost":"operations")+"/"+this.language+".json").then(t=>{if(!t.ok)throw new Error("HTTP error "+t.status);return t.json()}).then(t=>{e(this.language),i(t),this.host.forceUpdate()})}componentWillLoad(){if(this.language)return this.onLanguageChange()}componentDidLoad(){if(n()){let t=p()?"portrait-primary":"portrait";d.lock(t),p()&&m.styleLightContent()}}render(){return s("slot",null)}get host(){return o(this)}static get watchers(){return{isDarkTheme:["onDarkThemeChanged"]}}static get style(){return""}};export{c as yoo_app};