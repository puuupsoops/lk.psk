import{m as d,o as a,b as s,a as o,F as c,d as m,v as p,t as u}from"./index.a8f31d7d.js";const _={class:"top-line-card scroll-elem"},h={class:"top-line-card-wrap"},g=["onClick"],C=o("a",{class:"top-line-card-add",href:"#"},null,-1),y=d({__name:"CompanyBarTop",props:{data:{type:Array},modelValue:{type:String,required:!0}},emits:["update:modelValue"],setup(r,{emit:f}){const n=r,l=e=>e.id===n.modelValue?"top-line-card-item orange":"top-line-card-item green";return(e,k)=>(a(),s("div",_,[o("div",h,[(a(!0),s(c,null,m(r.data,(t,i)=>(a(),s("a",{key:i,class:p(l(t)),onClick:V=>e.$emit("update:modelValue",t.id),href:"#"},u(t.name),11,g))),128)),C])]))}});export{y as _};
