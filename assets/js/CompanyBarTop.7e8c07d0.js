import{d as p,g as u,o as a,b as s,a as n,F as _,f as C,z as g,t as h,$ as f}from"./index.8d3c85f4.js";const V={class:"top-line-card scroll-elem"},k={class:"top-line-card-wrap"},y=["onClick"],S=n("a",{class:"top-line-card-add",href:"#"},null,-1),E=p({__name:"CompanyBarTop",props:{data:{type:Array},modelValue:{type:String,required:!0}},emits:["update:modelValue"],setup(o,{emit:r}){const l=o,i=u(),c=e=>e.id===l.modelValue?"top-line-card-item orange":"top-line-card-item green",d=e=>{r("update:modelValue",e),i.commit(f.SET_ACTIVE_COMPANY_ID,String(e))};return(e,A)=>(a(),s("div",V,[n("div",k,[(a(!0),s(_,null,C(o.data,(t,m)=>(a(),s("a",{key:m,class:g(c(t)),onClick:B=>d(t.id),href:"#"},h(t.name),11,y))),128)),S])]))}});export{E as _};
