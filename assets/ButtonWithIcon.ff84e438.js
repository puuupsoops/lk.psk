import{e as l,_ as c,r as p,o as n,b as o,p as f,a as u,t as _,z as i,R as g}from"./index.8da950ad.js";var r=(e=>(e.Active="active",e.InProgress="inprogress",e.Disabled="disabled",e))(r||{}),s=(e=>(e.Download=`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="#fff" stroke="#fff"
    aria-hidden="true" focusable="false" 
   >
       <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
       <polyline points="7 10 12 15 17 10"/>
       <line x1="12" y1="15" x2="12" y2="3"/>
   </svg>`,e))(s||{});const v={props:{text:{type:String,required:!0},icon:{type:String,required:!1},state:{type:String,required:!1,default:r.Active}},components:{PreloaderLocal:l},setup(){return{IconsSVG:s,ButtonState:r}}},x=["disabled"],h={key:0},b=["innerHTML"];function m(e,y,t,a,k,w){const d=p("PreloaderLocal");return n(),o("button",{class:i("c-button"),disabled:t.state==a.ButtonState.Disabled||t.state==a.ButtonState.InProgress},[t.state==a.ButtonState.InProgress?(n(),o("span",h,[f(d,{small:!0})])):(n(),o("span",{key:1,innerHTML:t.icon},null,8,b)),u("span",{class:i("c-text"),style:g(t.icon?"":"padding: 0 0 0 20px;")},_(t.text),5)],8,x)}var I=c(v,[["render",m],["__scopeId","data-v-ad1605d8"]]);export{r as B,s as I,I as a};
