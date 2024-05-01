import{_ as E,d as b,h as i,Y as V,o as v,b as f,a as s,p,w as B,F as D,f as R,k,T as $,j as M,al as y,am as F,i as H,L as O,u as n,ag as N,ao as j,a0 as S,x as z,y as G,g as q,a1 as K,af as W,ap as x}from"./index.cd7313a8.js";import{_ as Y}from"./PersonalBar.c13db524.js";import{a as J}from"./ProductSliderCard.b0538e82.js";const Q={class:"slider-wrap"},X={class:"slider-main"},Z=["src"],ee=b({__name:"SimpleSlider",props:{data:{type:Array}},setup(c){const _=c,t=i([]),d=()=>{var a;(a=_.data)==null||a.forEach((l,r)=>t.value.push({id:r,src:l}))};d(),V(()=>{t.value=[],d()});const m=()=>{const a=t.value.shift();t.value=t.value.concat(a)},h=()=>{const a=t.value.pop();t.value=[a].concat(t.value)};return(a,l)=>(v(),f("div",Q,[s("div",X,[s("div",{class:"slider-arrow prev",onClick:h}),p($,{name:"slider-horisont-trans",class:"slider-horisont",tag:"div"},{default:B(()=>[(v(!0),f(D,null,R(t.value,r=>(v(),f("div",{class:"slider-horisont-slide",key:r.id},[r.src?(v(),f("img",{key:0,src:r.src,alt:"",onClick:l[0]||(l[0]=g=>a.$emit("onClick"))},null,8,Z)):k("",!0)]))),128))]),_:1}),s("div",{class:"slider-arrow next",onClick:m})])]))}});var te=E(ee,[["__scopeId","data-v-5c685218"]]);const L=c=>(z("data-v-3ead0852"),c=c(),G(),c),ae={class:"top-line product-page"},ue=L(()=>s("div",{class:"top-line-card-wrap header-lable"},"\u041F\u043E\u0438\u0441\u043A \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0432",-1)),se={key:0},oe={class:"content-heading-wrap proudct-heading-wrap"},ne={class:"content-heading-price"},le=["innerHTML"],ie={class:"content-heading-wrap-elem",style:{width:"23.76%"}},ce={class:"content-heading-price"},re=L(()=>s("div",{class:"content-heading-price-text"},"\u0410\u0440\u0442\u0438\u043A\u0443\u043B:",-1)),de=["innerHTML"],pe={style:"margin: 0 auto 0 auto; display: table;"},ve=b({__name:"CertificatePage",props:{article:{type:String}},setup(c){const _=c,t=q(),d=M({get:()=>t.getters.getLoader,set:o=>t.commit(K.SET_LOADER,o)}),m=i(""),h=i("\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430");let a=i(!1),l=i([]),r=i(!1),g=i("\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u044B \u0430\u0440\u0445\u0438\u0432\u043E\u043C "),w=i(y.Active),I=F.Download,C=i(!1);const A=async()=>{d.value=!0,await t.dispatch(W.SEARCH_PRODUCT,_.article),h.value=t.getters.getProduct.NAME,await P(t.getters.getProduct.UID),d.value=!1};H(()=>{_.article&&A()}),O(()=>_.article,o=>{o&&A()});const P=async o=>{l.value=[],await x.get("/product/"+o+"/certificates").then(e=>{var u;(u=e.data)==null||u.forEach(U=>{l.value.push(U)})}).catch(e=>{console.log("error"),console.log(e)}).finally(function(){r.value=!0,d.value=!1})},T=async()=>{w.value=y.InProgress,g.value="\u0410\u0440\u0445\u0438\u0432 \u0441\u043A\u0430\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F, \u043F\u043E\u0434\u043E\u0436\u0434\u0438\u0442\u0435",await x.get("/product/"+t.getters.getProduct.UID+"/certificates/download",{responseType:"blob",transformRequest:(o,e)=>{e==null||delete e.common}}).then(o=>{const e=window.URL.createObjectURL(new Blob([o.data])),u=document.createElement("a");u.href=e,u.setAttribute("download","cert.zip"),document.body.appendChild(u),u.click(),document.body.removeChild(u),window.URL.revokeObjectURL(e),C.value=!C.value}).catch(o=>{console.log("error"),console.log(o)}).finally(function(){w.value=y.Active,g.value="\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u044B \u0430\u0440\u0445\u0438\u0432\u043E\u043C "})};return(o,e)=>(v(),f("div",null,[s("div",ae,[ue,p(Y)]),p(n(N),{modelValue:m.value,"onUpdate:modelValue":e[0]||(e[0]=u=>m.value=u),to:"certificate"},null,8,["modelValue"]),n(l).length>0?(v(),f("div",se,[s("div",oe,[s("div",ne,[s("div",{class:"content-heading-price-text",innerHTML:h.value},null,8,le)]),s("div",ie,[s("div",ce,[re,s("div",{class:"content-heading-price-value",innerHTML:c.article},null,8,de)])]),s("div",pe,[p(n(j),{style:{display:"flex",margin:"0px auto"},text:n(g),icon:n(I),state:n(w),onClick:e[1]||(e[1]=u=>T())},null,8,["text","icon","state"])])]),p(n(te),{data:n(l),onOnClick:e[2]||(e[2]=u=>S(a)?a.value=!0:a=!0),style:{width:"50%"}},null,8,["data"]),p(n(J),{modelValue:n(a),"onUpdate:modelValue":e[3]||(e[3]=u=>S(a)?a.value=u:a=u),data:n(l)},null,8,["modelValue","data"])])):k("",!0)]))}});var he=E(ve,[["__scopeId","data-v-3ead0852"]]);export{he as default};
