import{d as i,I as d,_ as m,o as p,b as r,a as t,x as o}from"./index.31f5185b.js";const b=i({props:{modelValue:{type:Number,required:!0},step:{type:Number,default:1},disabled:{type:Boolean,default:!1},min:{type:Number,default:0},max:{type:Number}},emits:["update:modelValue","onInput"],setup(e,{emit:a}){return d(()=>e.modelValue,(u,n)=>{isNaN(u)&&a("update:modelValue",n),String(e.modelValue)==""&&a("update:modelValue",0),e.max!==void 0&&Number(u)>e.max&&a("update:modelValue",n),e.min!==void 0&&Number(u)<e.min&&a("update:modelValue",n),a("onInput")}),{changeStep:u=>{e.disabled||a("update:modelValue",Number(e.modelValue)+u)}}}}),f=["disabled","value"],w=t("svg",{class:"amount-input-arrow-img",width:"9",height:"6",viewBox:"0 0 9 6",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M3.71679 0.986589C4.11715 0.482264 4.88285 0.482265 5.28321 0.986589L7.9757 4.37825C8.49596 5.0336 8.02925 6 7.19249 6L1.80751 6C0.970754 6 0.504041 5.0336 1.0243 4.37824L3.71679 0.986589Z",fill:"#53565B"})],-1),g=[w],h=t("svg",{class:"amount-input-arrow-img",width:"9",height:"6",viewBox:"0 0 9 6",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M5.28321 5.01341C4.88285 5.51774 4.11715 5.51774 3.71679 5.01341L1.0243 1.62176C0.504042 0.966397 0.970754 -1.64313e-07 1.80751 -2.37464e-07L7.19249 -7.08234e-07C8.02925 -7.81386e-07 8.49596 0.966397 7.9757 1.62176L5.28321 5.01341Z",fill:"#53565B"})],-1),v=[h];function V(e,a,s,u,n,N){return p(),r("div",{class:o(e.disabled?"amount-input-wrap disable":"amount-input-wrap")},[t("input",{class:"amount-input",type:"text",disabled:e.disabled,value:e.modelValue,onInput:a[0]||(a[0]=l=>e.$emit("update:modelValue",Number(l.target.value)))},null,40,f),t("div",{class:o(e.disabled?"amount-input-arrow plus disable":"amount-input-arrow plus"),onClick:a[1]||(a[1]=l=>e.changeStep(e.step))},g,2),t("div",{class:o(e.disabled?"amount-input-arrow minus disable":"amount-input-arrow minus"),onClick:a[2]||(a[2]=l=>e.changeStep(-e.step))},v,2)],2)}var c=m(b,[["render",V]]);export{c as A};
