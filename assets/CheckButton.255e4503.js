import{d as i,i as u,o as a,b as n,x as s,u as m,a as r}from"./index.f1a79db7.js";const C=r("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M13.7952 0.265077C13.4418 -0.0883587 12.8687 -0.0883589 12.5153 0.265076L5.41912 7.36126L1.54498 3.48711C1.19154 3.13368 0.618512 3.13368 0.265076 3.48711C-0.0883589 3.84055 -0.0883588 4.41358 0.265077 4.76702L4.75226 9.2542C4.88175 9.38369 5.04072 9.46574 5.20757 9.50034C5.50792 9.57832 5.84052 9.49967 6.0758 9.26438L13.7952 1.54498C14.1486 1.19154 14.1486 0.618512 13.7952 0.265077Z",fill:"#C4C4C4"},null,-1),p=[C],v=i({__name:"CheckButton",props:{disabled:{type:Boolean,default:!1},modelValue:{type:Boolean,default:!1}},emits:["update:modelValue","onClick"],setup(l,{emit:o}){const e=l,d=()=>{o("update:modelValue",e.disabled?e.modelValue:!e.modelValue),o("onClick")},c=u(()=>({"check-btn":!0,disable:e.disabled,active:e.modelValue}));return(f,t)=>(a(),n("button",{class:s(m(c)),onClick:t[0]||(t[0]=b=>d())},[(a(),n("svg",{class:s(l.modelValue?"check-btn-img active":"check-btn-img"),viewBox:"0 0 15 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},p,2))],2))}});export{v as _};
