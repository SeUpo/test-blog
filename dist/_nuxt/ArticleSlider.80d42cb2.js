import{g as u,r as n,G as p,o as m,c as v,a as e,j as o,t as l,p as f,e as g,_ as h}from"./entry.67edd9fa.js";const S=""+new URL("Rectangle-l.00f9d628.svg",import.meta.url).href,k=""+new URL("Rectangle-r.0adf4f98.svg",import.meta.url).href,r=s=>(f("data-v-95c8af4c"),s=s(),g(),s),x={class:"slider"},I={class:"slider__container"},b=r(()=>e("img",{src:S},null,-1)),y=[b],R=["src"],w=r(()=>e("img",{src:k},null,-1)),A=[w],B={class:"slider__current"},C=u({__name:"ArticleSlider",props:{block:{}},setup(s){const a=s,t=n(0),_=p(()=>a.block.data[t.value]),c=n(a.block.data.length),i=()=>{t.value=(t.value+1)%c.value},d=()=>{t.value=(t.value-1+c.value)%c.value};return(L,U)=>(m(),v("div",x,[e("div",I,[e("button",{class:"slider__container-left",onClick:d},y),e("img",{class:"slider__container-image",src:o(_),alt:"image"},null,8,R),e("button",{class:"slider__container-right",onClick:i},A)]),e("div",B,l(o(t)+1)+" / "+l(o(c)),1)]))}});const D=h(C,[["__scopeId","data-v-95c8af4c"]]);export{D as default};
