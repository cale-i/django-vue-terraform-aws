(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Home"],{"1d99":function(t,e,r){"use strict";r("9072")},"78a7":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"home-page"}},[r("GlobalHeader"),r("b-container",[r("b-row",[r("h1",[t._v("test")])])],1)],1)},a=[];r("a15b"),r("fb6a"),r("d3b7"),r("25f0"),r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"header"}},[r("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark",fixed:"top"}},[r("b-navbar-brand",{attrs:{href:"https://random-stat.work"}},[t._v("Random Stat")]),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",{attrs:{lass:"ml-auto"}},[r("b-nav-item",{attrs:{to:"/","active-class":"active",exact:""}},[t._v("Home")])],1)],1)],1)],1)},b=[],u={},l=u,f=(r("1d99"),r("2877")),d=Object(f["a"])(l,s,b,!1,null,"2fc71871",null),p=d.exports,v=r("2f62"),g={components:{GlobalHeader:p},data:function(){return{today:""}},methods:{},mounted:function(){document.title="sample title",document.querySelector('meta[name="description"]').setAttribute("content","".concat(this.today,":"))},created:function(){var t=new Date,e=t.getFullYear(),r=("0"+(t.getMonth()+1).toString()).slice(-2),n=("0"+t.getDate().toString()).slice(-2),a=[e,r,n].join("-");this.today=a},computed:i(i({},Object(v["b"])({})),{},{latestUpdate:function(){return"最終更新日時 ".concat(this.today," 0:00")}})},O=g,m=Object(f["a"])(O,n,a,!1,null,"640f8344",null);e["default"]=m.exports},9072:function(t,e,r){},a15b:function(t,e,r){"use strict";var n=r("23e7"),a=r("44ad"),o=r("fc6a"),c=r("a640"),i=[].join,s=a!=Object,b=c("join",",");n({target:"Array",proto:!0,forced:s||!b},{join:function(t){return i.call(o(this),void 0===t?",":t)}})},dbb4:function(t,e,r){var n=r("23e7"),a=r("83ab"),o=r("56ef"),c=r("fc6a"),i=r("06cf"),s=r("8418");n({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(t){var e,r,n=c(t),a=i.f,b=o(n),u={},l=0;while(b.length>l)r=a(n,e=b[l++]),void 0!==r&&s(u,e,r);return u}})},e439:function(t,e,r){var n=r("23e7"),a=r("d039"),o=r("fc6a"),c=r("06cf").f,i=r("83ab"),s=a((function(){c(1)})),b=!i||s;n({target:"Object",stat:!0,forced:b,sham:!i},{getOwnPropertyDescriptor:function(t,e){return c(o(t),e)}})}}]);
//# sourceMappingURL=Home.2e9ce1cf.js.map