import{d as k,h as m,j as y,D as S,L as B,_ as V,g as x,a0 as z,o,b as l,a as c,F as g,f as b,z as E,p as f,w as _,k as h,T as C,l as M,Y as P,r as $,m as A}from"./index.df900fe8.js";k({props:{data:{type:Array,required:!0},discount:{type:Number,required:!0}},setup(){}});const D=k({props:{modelValue:{type:Boolean,default:!1},data:{type:Array}},emits:["update:modelValue"],setup(e,{emit:t}){let a=m([]);const u=x(),p=y({get:()=>u.getters.getLoader,set:s=>u.commit(z.SET_LOADER,s)}),v=m(null),d=y(()=>{var s;return a.value.length==0?0:(s=a.value[0])==null?void 0:s.id});S(v,()=>{t("update:modelValue",!1)}),B(()=>e.modelValue,()=>{var s;a.value=[],(s=e.data)==null||s.forEach((w,L)=>a.value.push({id:L,src:w}))});function n(){const s=a.value.shift();a.value=a.value.concat(s)}function r(){const s=a.value.pop();a.value=[s].concat(a.value)}return{slides:a,loader:p,target:v,first:d,next:n,previous:r,shift:s=>{s>0?a.value=a.value.concat(a.value.splice(0,s)):a.value=a.value.splice(a.value.length+s,-1*s).concat(a.value)}}}}),F={key:0,class:"product-slider-fullscreen",ref:"target"},N={class:"product-slider-controls"},H=["id","onClick"],T=["for"],Y=M('<div class="product-slider-actions"><div class="product-slider-actions-btn"><div class="product-slider-actions-btn-img"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#53565B" d="M24 12c0 6.6274-5.3726 12-12 12S0 18.6274 0 12 5.3726 0 12 0s12 5.3726 12 12zM12 2C6.4772 2 2 6.4772 2 12s4.4772 10 10 10 10-4.4772 10-10S17.5228 2 12 2zM7 13c-.5523 0-1-.4477-1-1s.4477-1 1-1h10c.5523 0 1 .4477 1 1s-.4477 1-1 1H7z"></path></svg></div></div><div class="product-slider-actions-btn"><div class="product-slider-actions-btn-img"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#53565B" d="M18.4142 7H22c.5523 0 1 .4477 1 1s-.4477 1-1 1h-6c-.5523 0-1-.4477-1-1V2c0-.5523.4477-1 1-1s1 .4477 1 1v3.5858l5.2929-5.293c.3905-.3904 1.0237-.3904 1.4142 0 .3905.3906.3905 1.0238 0 1.4143L18.4142 7zM17 18.4142V22c0 .5523-.4477 1-1 1s-1-.4477-1-1v-6c0-.5523.4477-1 1-1h6c.5523 0 1 .4477 1 1s-.4477 1-1 1h-3.5858l5.293 5.2929c.3904.3905.3904 1.0237 0 1.4142-.3906.3905-1.0238.3905-1.4143 0L17 18.4142zM7 5.5858V2c0-.5523.4477-1 1-1s1 .4477 1 1v6c0 .5523-.4477 1-1 1H2c-.5523 0-1-.4477-1-1s.4477-1 1-1h3.5858L.2928 1.7071C-.0975 1.3166-.0975.6834.2929.293c.3906-.3905 1.0238-.3905 1.4143 0L7 5.5858zM5.5858 17H2c-.5523 0-1-.4477-1-1s.4477-1 1-1h6c.5523 0 1 .4477 1 1v6c0 .5523-.4477 1-1 1s-1-.4477-1-1v-3.5858l-5.2929 5.293c-.3905.3904-1.0237.3904-1.4142 0-.3905-.3906-.3905-1.0238 0-1.4143L5.5858 17z"></path></svg></div></div><div class="product-slider-actions-btn"><div class="product-slider-actions-btn-img"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#53565B" d="M11 11V7c0-.5523.4477-1 1-1s1 .4477 1 1v4h4c.5523 0 1 .4477 1 1s-.4477 1-1 1h-4v4c0 .5523-.4477 1-1 1s-1-.4477-1-1v-4H7c-.5523 0-1-.4477-1-1s.4477-1 1-1h4zm1-9C6.4772 2 2 6.4772 2 12s4.4772 10 10 10 10-4.4772 10-10S17.5228 2 12 2zm12 10c0 6.6274-5.3726 12-12 12S0 18.6274 0 12 5.3726 0 12 0s12 5.3726 12 12z"></path></svg></div></div></div>',1),O=["src"];function I(e,t,a,u,p,v){return e.modelValue?(o(),l("div",F,[c("div",N,[(o(!0),l(g,null,b(e.data,(d,n)=>(o(),l("span",{key:n},[c("input",{type:"radio",id:n,onClick:r=>e.shift(n-e.first)},null,8,H),c("label",{for:n,class:E(e.first===n?"checked":"")},null,10,T)]))),128))]),Y,c("div",{class:"product-slider-arrow prev",onClick:t[0]||(t[0]=(...d)=>e.previous&&e.previous(...d))}),f(C,{name:"product-slider-trans",class:"product-slider big",tag:"div"},{default:_(()=>[(o(!0),l(g,null,b(e.slides,d=>(o(),l("div",{class:"product-slider-slide",key:d.id},[d.src?(o(),l("img",{key:0,src:d.src,alt:""},null,8,O)):h("",!0)]))),128))]),_:1}),c("div",{class:"product-slider-arrow next",onClick:t[1]||(t[1]=(...d)=>e.next&&e.next(...d))}),c("div",{class:"product-slider-close",onClick:t[2]||(t[2]=d=>e.$emit("update:modelValue",!1))})],512)):h("",!0)}var q=V(D,[["render",I]]);const R=k({props:{data:{type:Array}},components:{ProductSliderFullscreen:q},emits:["toOrder","toLogo"],setup(e){var r;let t=m([]);const a=x(),u=y({get:()=>a.getters.getLoader,set:i=>a.commit(z.SET_LOADER,i)}),p=m(!1);(r=e.data)==null||r.forEach((i,s)=>t.value.push({id:s,src:i})),P(()=>{var i;t.value=[],(i=e.data)==null||i.forEach((s,w)=>t.value.push({id:w,src:s}))});let v=()=>{const i=t.value.shift();t.value=t.value.concat(i)},d=()=>{const i=t.value.pop();t.value=[i].concat(t.value)},n=m(!0);return{loader:u,slides:t,fullscreen:p,hideLogoApplicationModalWindow:n,next:v,previous:d}}}),U={class:"content-elem"},j={key:0,class:"product-slider-wrap"},G={class:"product-slider-main"},K=["src"],W=["src"],J={class:"product-slider-buttons"},Q=A(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043C\u0430\u043A\u0435\u0442 \u043D\u0430\u043D\u0435\u0441\u0435\u043D\u0438\u044F");function X(e,t,a,u,p,v){const d=$("router-link"),n=$("ProductSliderFullscreen");return o(),l("div",U,[e.loader?h("",!0):(o(),l("div",j,[c("div",G,[c("button",{class:"product-slider-arrow prev",onClick:t[0]||(t[0]=(...r)=>e.previous&&e.previous(...r))}),f(C,{name:"product-slider-trans",class:"product-slider",tag:"div"},{default:_(()=>[(o(!0),l(g,null,b(e.slides,r=>(o(),l("div",{class:"product-slider-slide",key:r.id},[r.src?(o(),l("img",{key:0,src:r.src,onClick:t[1]||(t[1]=i=>e.fullscreen=!0),alt:""},null,8,K)):h("",!0)]))),128))]),_:1}),c("div",{class:"product-slider-arrow next",onClick:t[2]||(t[2]=(...r)=>e.next&&e.next(...r))})])])),f(C,{name:"product-slider-trans",class:"product-slider-small",tag:"div"},{default:_(()=>[(o(!0),l(g,null,b(e.slides,r=>(o(),l("div",{class:"product-slider-small-slide",key:r.id},[r.src?(o(),l("img",{key:0,src:r.src,alt:""},null,8,W)):h("",!0)]))),128))]),_:1}),c("div",J,[f(d,{style:{width:"100%"},class:"product-slider-link",to:"/logo",title:"\u041D\u0430\u043D\u0435\u0441\u0442\u0438 \u043B\u043E\u0433\u043E\u0442\u0438\u043F"},{default:_(()=>[Q]),_:1})]),f(n,{modelValue:e.fullscreen,"onUpdate:modelValue":t[3]||(t[3]=r=>e.fullscreen=r),data:e.data},null,8,["modelValue","data"])])}var ee=V(R,[["render",X],["__scopeId","data-v-9e8acbee"]]);export{ee as P,q as a};
