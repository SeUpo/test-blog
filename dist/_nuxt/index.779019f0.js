import _ from"./ArticleList.95341daa.js";import{f as i,r as l,g as p,s as d,q as m,c,j as r,k as f,o as n,_ as u}from"./entry.67edd9fa.js";import"./nuxt-link.94be4558.js";const k=i("home",()=>{const t=l();return{articles:t,getHome:async()=>{try{const e=await fetch("https://devtwit8.ru/api/v1/page/?path=/");if(e.ok){const o=await e.json();t.value=o.body[0]}}catch(e){console.error("err",e)}}}}),h={class:"container"},v={key:1,class:"loader"},x=p({__name:"index",setup(t){const s=k(),{getHome:e}=s,{articles:o}=d(s);return m(()=>{e()}),(y,g)=>{const a=_;return n(),c("div",h,[r(o)?(n(),f(a,{key:0,block:r(o)},null,8,["block"])):(n(),c("div",v))])}}});const B=u(x,[["__scopeId","data-v-2076592f"]]);export{B as default};
