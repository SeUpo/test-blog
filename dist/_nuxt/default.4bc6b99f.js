import{_ as f}from"./nuxt-link.94be4558.js";import{u as h}from"./vue.f36acd1f.f9e8e00d.js";import{g,u as w,r as n,q as b,h as x,c as L,a as t,b as l,w as p,v as k,F as R,x as y,o as I,p as S,e as U,_ as N}from"./entry.67edd9fa.js";import B from"./ArticleSubscribeForm.cbe4a3c2.js";const v=""+new URL("Logo.ffacc56a.svg",import.meta.url).href,C=""+new URL("vk.dd8d9be0.svg",import.meta.url).href,F=""+new URL("fb.41f6bd33.svg",import.meta.url).href,V=""+new URL("inst.372b8f18.svg",import.meta.url).href,M=""+new URL("teleg.fa757511.svg",import.meta.url).href,i=c=>(S("data-v-723e22a7"),c=c(),U(),c),$=i(()=>t("img",{src:v},null,-1)),j=i(()=>t("hr",null,null,-1)),q={class:"info"},E={class:"info__introduct"},H=i(()=>t("img",{class:"info__introduct-logo",src:v},null,-1)),z=i(()=>t("p",{class:"info__introduct-introduction"},"Cтатьи о дизайне и искусстве, которые исследуют творческие вдохновения и актуальные тенденции, раскрывая мир эстетики и креативности",-1)),A=y('<div class="info__contacts" data-v-723e22a7><p class="info__contacts-title" data-v-723e22a7>email</p><h2 class="info__email" data-v-723e22a7>testblogsupport@gmail.com</h2><div class="info__links" data-v-723e22a7><img src="'+C+'" data-v-723e22a7><img src="'+F+'" data-v-723e22a7><img src="'+V+'" data-v-723e22a7><img src="'+M+'" data-v-723e22a7></div></div>',1),D=g({__name:"default",setup(c){const d=w(),e=n();b(()=>{e.value=d.params.slug,e.value==null?_(""):_(e.value)}),x(()=>d.params.slug,a=>{a==null?e.value="":e.value=a,_(e.value)});const r=n(),u=n(""),m=n(""),_=async a=>{try{const o=await fetch(`https://devtwit8.ru/api/v1/page/?path=/${a}`);if(o.ok){const s=n();s.value=await o.json(),r.value=s.value.meta,u.value=r.value.title,m.value=r.value.description}}catch(o){console.error("err",o)}};return h({title:u,meta:[{name:"description",content:m}]}),(a,o)=>{const s=f;return I(),L(R,null,[t("header",null,[l(s,{to:"/"},{default:p(()=>[$]),_:1})]),t("main",null,[k(a.$slots,"default",{},void 0,!0)]),j,t("footer",null,[t("div",q,[t("div",E,[l(s,{to:"/"},{default:p(()=>[H]),_:1}),z]),A]),l(B)])],64)}}});const P=N(D,[["__scopeId","data-v-723e22a7"]]);export{P as default};