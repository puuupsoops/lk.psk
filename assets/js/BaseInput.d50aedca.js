import{d as u,o as s,b as i,a as t,z as d,t as c,c as p,e as m,k as f}from"./index.df900fe8.js";const y={class:"input-text-field-wrap"},B={class:"input-text-field"},_=["value"],V=u({__name:"BaseInput",props:{modelValue:{type:String,required:!0},label:{type:String},error:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},emits:["update:modelValue","input"],setup(e,{emit:a}){const n=l=>{a("update:modelValue",l),a("input")};return(l,o)=>(s(),i("div",y,[t("div",B,[t("input",{type:"text",placeholder:" ",class:d(["",{error:e.error}]),value:e.modelValue,onInput:o[0]||(o[0]=r=>n(r.target.value))},null,42,_),t("label",null,c(e.label),1)]),e.loading?(s(),p(m,{key:0,small:"",class:"last"})):f("",!0)]))}});export{V as _};
