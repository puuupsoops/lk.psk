import{d as U,h as I,j as D,D as J,L as W,_ as O,g as Z,a1 as j,o as u,b as v,a,F as N,f as P,z as Y,p as $,w as q,k as M,T as S,l as G,Y as K,r as F,m as Q,x as X,y as ee}from"./index.6405f1f2.js";U({props:{data:{type:Array,required:!0},discount:{type:Number,required:!0}},setup(){}});const te=U({props:{modelValue:{type:Boolean,default:!1},data:{type:Array}},emits:["update:modelValue"],setup(e,{emit:t}){let o=I([]);const y=Z(),L=D({get:()=>y.getters.getLoader,set:s=>y.commit(j.SET_LOADER,s)}),C=I(null),d=D(()=>{var s;return o.value.length==0?0:(s=o.value[0])==null?void 0:s.id});J(C,()=>{t("update:modelValue",!1)}),W(()=>e.modelValue,()=>{var s;o.value=[],(s=e.data)==null||s.forEach((i,r)=>o.value.push({id:r,src:i}))});function p(){const s=o.value.shift();o.value=o.value.concat(s)}function l(){const s=o.value.pop();o.value=[s].concat(o.value)}const H=s=>{s>0?o.value=o.value.concat(o.value.splice(0,s)):o.value=o.value.splice(o.value.length+s,-1*s).concat(o.value)},B=s=>new Promise((i,r)=>{const c=new FileReader;c.readAsDataURL(s),c.onload=()=>i(c.result),c.onerror=g=>r(g)});let T=async()=>{let s=o.value[0],i=new URL(s.src),r=i.pathname.split("/"),c=r[r.length-1],m=c.split(".")[0],h=window.open("about:blank",m);h==null||h.document.write(`<img src="${i.href}" alt="${c}" />`)},R=async()=>{await n("png")},k=async()=>{await n("jpg")},A=async()=>{await n("webp")},n=async s=>{let i=o.value[0],c=new URL(i.src).pathname.split("/"),m=c[c.length-1].split("."),h=m[0];m[1];var b=new Image;b.onload=function(){var x;let w=this;var _=document.createElement("canvas");_.width=w.naturalWidth,_.height=w.naturalHeight,(x=_.getContext("2d"))==null||x.drawImage(w,0,0),_.toBlob(z=>{const f=window.URL.createObjectURL(z),V=document.createElement("a");V.href=f,V.setAttribute("download",`${h}.${s}`),document.body.appendChild(V),V.click(),document.body.removeChild(V),window.URL.revokeObjectURL(f)})},b.crossOrigin="Anonymous",b.src=i.src+"?not-from-cache-please"};return{slides:o,loader:L,target:C,first:d,next:p,previous:l,shift:H,toBase64:B,downloadCurrentImage:n,downloadImageAsPng:R,downloadImageAsJpeg:k,downloadImageAsWebp:A,exploreImage:T}}}),ae={key:0,class:"product-slider-fullscreen",ref:"target"},se={class:"product-slider-controls"},oe=["id","onClick"],le=["for"],de=G('<div class="product-slider-actions"><div class="product-slider-actions-btn"><div class="product-slider-actions-btn-img"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#53565B" d="M24 12c0 6.6274-5.3726 12-12 12S0 18.6274 0 12 5.3726 0 12 0s12 5.3726 12 12zM12 2C6.4772 2 2 6.4772 2 12s4.4772 10 10 10 10-4.4772 10-10S17.5228 2 12 2zM7 13c-.5523 0-1-.4477-1-1s.4477-1 1-1h10c.5523 0 1 .4477 1 1s-.4477 1-1 1H7z"></path></svg></div></div><div class="product-slider-actions-btn"><div class="product-slider-actions-btn-img"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#53565B" d="M18.4142 7H22c.5523 0 1 .4477 1 1s-.4477 1-1 1h-6c-.5523 0-1-.4477-1-1V2c0-.5523.4477-1 1-1s1 .4477 1 1v3.5858l5.2929-5.293c.3905-.3904 1.0237-.3904 1.4142 0 .3905.3906.3905 1.0238 0 1.4143L18.4142 7zM17 18.4142V22c0 .5523-.4477 1-1 1s-1-.4477-1-1v-6c0-.5523.4477-1 1-1h6c.5523 0 1 .4477 1 1s-.4477 1-1 1h-3.5858l5.293 5.2929c.3904.3905.3904 1.0237 0 1.4142-.3906.3905-1.0238.3905-1.4143 0L17 18.4142zM7 5.5858V2c0-.5523.4477-1 1-1s1 .4477 1 1v6c0 .5523-.4477 1-1 1H2c-.5523 0-1-.4477-1-1s.4477-1 1-1h3.5858L.2928 1.7071C-.0975 1.3166-.0975.6834.2929.293c.3906-.3905 1.0238-.3905 1.4143 0L7 5.5858zM5.5858 17H2c-.5523 0-1-.4477-1-1s.4477-1 1-1h6c.5523 0 1 .4477 1 1v6c0 .5523-.4477 1-1 1s-1-.4477-1-1v-3.5858l-5.2929 5.293c-.3905.3904-1.0237.3904-1.4142 0-.3905-.3906-.3905-1.0238 0-1.4143L5.5858 17z"></path></svg></div></div><div class="product-slider-actions-btn"><div class="product-slider-actions-btn-img"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#53565B" d="M11 11V7c0-.5523.4477-1 1-1s1 .4477 1 1v4h4c.5523 0 1 .4477 1 1s-.4477 1-1 1h-4v4c0 .5523-.4477 1-1 1s-1-.4477-1-1v-4H7c-.5523 0-1-.4477-1-1s.4477-1 1-1h4zm1-9C6.4772 2 2 6.4772 2 12s4.4772 10 10 10 10-4.4772 10-10S17.5228 2 12 2zm12 10c0 6.6274-5.3726 12-12 12S0 18.6274 0 12 5.3726 0 12 0s12 5.3726 12 12z"></path></svg></div></div></div>',1),ne=["src"],re=a("div",{class:"product-button-stance-download"},[a("div",{class:"product-button-stance-download-picture"},[a("a",null,[a("svg",{width:"45",height:"45",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[a("path",{d:"M20 15V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18L4 15M8 11L12 15M12 15L16 11M12 15V3",stroke:"#000000","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})])])])],-1),ie=[re],ce={class:"product-button-positions"},ue=a("div",{class:"product-buttons-position-btn-img"},[a("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},[a("path",{d:"M480-260q75 0 127.5-52.5T660-440q0-75-52.5-127.5T480-620q-75 0-127.5 52.5T300-440q0 75 52.5 127.5T480-260Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM160-120q-33 0-56.5-23.5T80-200v-480q0-33 23.5-56.5T160-760h126l74-80h240l74 80h126q33 0 56.5 23.5T880-680v480q0 33-23.5 56.5T800-120H160Zm0-80h640v-480H638l-73-80H395l-73 80H160v480Zm320-240Z"})])],-1),ve=[ue],pe=a("div",{class:"product-buttons-position-btn-img"},[a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#000000",width:"24",height:"24",viewBox:"0 0 1024 1024"},[a("path",{d:"M874.6 301.8L596.8 21.3c-4.5-4.5-9.4-8.3-14.7-11.5-1.4-.8-2.8-1.6-4.3-2.3-.9-.5-1.9-.9-2.8-1.3-9-4-18.9-6.2-29-6.2H201c-39.8 0-73 32.2-73 72v880c0 39.8 33.2 72 73 72h623c39.8 0 71-32.2 71-72V352.5c0-19-7-37.2-20.4-50.7zM583 110.4L783.8 312H583V110.4zM823 952H200V72h311v240c0 39.8 33.2 72 73 72h239v568zM350 696.5c0 24.2-7.5 31.4-21.9 31.4-9 0-18.4-5.8-24.8-18.5L272.9 732c13.4 22.9 32.3 34.2 61.3 34.2 41.6 0 60.8-29.9 60.8-66.2V577h-45v119.5zM501.3 577H437v186h44v-62h21.6c39.1 0 73.1-19.6 73.1-63.6 0-45.8-33.5-60.4-74.4-60.4zm-.8 89H481v-53h18.2c21.5 0 33.4 6.2 33.4 24.9 0 18.1-10.5 28.1-32.1 28.1zm182.5-9v36h30v30.1c-4 2.9-11 4.7-17.7 4.7-34.3 0-50.7-21.4-50.7-58.2 0-36.1 19.7-57.4 47.1-57.4 15.3 0 25 6.2 34 14.4l23.7-28.3c-12.7-12.8-32.1-24.2-59.2-24.2-49.6 0-91.1 35.3-91.1 97 0 62.7 40 95.1 91.5 95.1 25.9 0 49.2-10.2 61.5-22.6V657H683z"})])],-1),me=[pe];function he(e,t,o,y,L,C){return e.modelValue?(u(),v("div",ae,[a("div",se,[(u(!0),v(N,null,P(e.data,(d,p)=>(u(),v("span",{key:p},[a("input",{type:"radio",id:p,onClick:l=>e.shift(p-e.first)},null,8,oe),a("label",{for:p,class:Y(e.first===p?"checked":"")},null,10,le)]))),128))]),de,a("div",{class:"product-slider-arrow prev",onClick:t[0]||(t[0]=(...d)=>e.previous&&e.previous(...d))}),$(S,{name:"product-slider-trans",class:"product-slider big",tag:"div"},{default:q(()=>[(u(!0),v(N,null,P(e.slides,d=>(u(),v("div",{class:"product-slider-slide",key:d.id},[d.src?(u(),v("img",{key:0,src:d.src,alt:""},null,8,ne)):M("",!0)]))),128)),a("div",{class:"product-button-stance",onClick:t[1]||(t[1]=(...d)=>e.downloadImageAsPng&&e.downloadImageAsPng(...d))},ie),a("div",ce,[a("div",{onClick:t[2]||(t[2]=(...d)=>e.exploreImage&&e.exploreImage(...d)),class:"product-buttons-position-btn product-buttons-position-radius"},ve),a("div",{onClick:t[3]||(t[3]=(...d)=>e.downloadImageAsJpeg&&e.downloadImageAsJpeg(...d)),class:"product-buttons-position-btn product-buttons-position-rad"},me)])]),_:1}),a("div",{class:"product-slider-arrow next",onClick:t[4]||(t[4]=(...d)=>e.next&&e.next(...d))}),a("div",{class:"product-slider-close",onClick:t[5]||(t[5]=d=>e.$emit("update:modelValue",!1))})],512)):M("",!0)}var ge=O(te,[["render",he]]);const we=U({props:{data:{type:Array}},components:{ProductSliderFullscreen:ge},emits:["toOrder","toLogo"],setup(e){var A;let t=I([]);const o=Z(),y=D({get:()=>o.getters.getLoader,set:n=>o.commit(j.SET_LOADER,n)}),L=I(!1);(A=e.data)==null||A.forEach((n,s)=>t.value.push({id:s,src:n})),K(()=>{var n;t.value=[],(n=e.data)==null||n.forEach((s,i)=>t.value.push({id:i,src:s}))});let C=()=>{const n=t.value.shift();t.value=t.value.concat(n)},d=()=>{const n=t.value.pop();t.value=[n].concat(t.value)},p=I(!0);const l=n=>new Promise((s,i)=>{const r=new FileReader;r.readAsDataURL(n),r.onload=()=>s(r.result),r.onerror=c=>i(c)});let H=async()=>{let n=t.value[0],s=new URL(n.src),i=s.pathname.split("/"),r=i[i.length-1],g=r.split(".")[0],m=window.open("about:blank",g);m==null||m.document.write(`<img src="${s.href}" alt="${r}" />`)},B=async()=>{await k("png")},T=async()=>{await k("jpg")},R=async()=>{await k("webp")},k=async n=>{let s=t.value[0],r=new URL(s.src).pathname.split("/"),g=r[r.length-1].split("."),m=g[0];g[1];var h=new Image;h.onload=function(){var _;let b=this;var w=document.createElement("canvas");w.width=b.naturalWidth,w.height=b.naturalHeight,(_=w.getContext("2d"))==null||_.drawImage(b,0,0),w.toBlob(x=>{const z=window.URL.createObjectURL(x),f=document.createElement("a");f.href=z,f.setAttribute("download",`${m}.${n}`),document.body.appendChild(f),f.click(),document.body.removeChild(f),window.URL.revokeObjectURL(z)})},h.crossOrigin="Anonymous",h.src=s.src+"?not-from-cache-please"};return{loader:y,slides:t,fullscreen:L,hideLogoApplicationModalWindow:p,next:C,previous:d,toBase64:l,downloadCurrentImage:k,downloadImageAsPng:B,downloadImageAsJpeg:T,downloadImageAsWebp:R,exploreImage:H}}}),E=e=>(X("data-v-20619936"),e=e(),ee(),e),fe={class:"content-elem"},be={key:0,class:"product-slider-wrap"},_e={class:"product-slider-main"},ye=E(()=>a("div",{class:"product-buttons-stance-download"},[a("div",{class:"product-buttons-stance-download-picture"},[a("a",null,[a("svg",{width:"45",height:"45",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[a("path",{d:"M20 15V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18L4 15M8 11L12 15M12 15L16 11M12 15V3",stroke:"#000000","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})])])])],-1)),Ce=[ye],ke={class:"product-buttons-position"},Le=E(()=>a("div",{class:"product-buttons-position-btn-img"},[a("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},[a("path",{d:"M480-260q75 0 127.5-52.5T660-440q0-75-52.5-127.5T480-620q-75 0-127.5 52.5T300-440q0 75 52.5 127.5T480-260Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM160-120q-33 0-56.5-23.5T80-200v-480q0-33 23.5-56.5T160-760h126l74-80h240l74 80h126q33 0 56.5 23.5T880-680v480q0 33-23.5 56.5T800-120H160Zm0-80h640v-480H638l-73-80H395l-73 80H160v480Zm320-240Z"})])],-1)),Ve=[Le],$e=E(()=>a("div",{class:"product-buttons-position-btn-img"},[a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#000000",width:"24",height:"24",viewBox:"0 0 1024 1024"},[a("path",{d:"M874.6 301.8L596.8 21.3c-4.5-4.5-9.4-8.3-14.7-11.5-1.4-.8-2.8-1.6-4.3-2.3-.9-.5-1.9-.9-2.8-1.3-9-4-18.9-6.2-29-6.2H201c-39.8 0-73 32.2-73 72v880c0 39.8 33.2 72 73 72h623c39.8 0 71-32.2 71-72V352.5c0-19-7-37.2-20.4-50.7zM583 110.4L783.8 312H583V110.4zM823 952H200V72h311v240c0 39.8 33.2 72 73 72h239v568zM350 696.5c0 24.2-7.5 31.4-21.9 31.4-9 0-18.4-5.8-24.8-18.5L272.9 732c13.4 22.9 32.3 34.2 61.3 34.2 41.6 0 60.8-29.9 60.8-66.2V577h-45v119.5zM501.3 577H437v186h44v-62h21.6c39.1 0 73.1-19.6 73.1-63.6 0-45.8-33.5-60.4-74.4-60.4zm-.8 89H481v-53h18.2c21.5 0 33.4 6.2 33.4 24.9 0 18.1-10.5 28.1-32.1 28.1zm182.5-9v36h30v30.1c-4 2.9-11 4.7-17.7 4.7-34.3 0-50.7-21.4-50.7-58.2 0-36.1 19.7-57.4 47.1-57.4 15.3 0 25 6.2 34 14.4l23.7-28.3c-12.7-12.8-32.1-24.2-59.2-24.2-49.6 0-91.1 35.3-91.1 97 0 62.7 40 95.1 91.5 95.1 25.9 0 49.2-10.2 61.5-22.6V657H683z"})])],-1)),Ie=[$e],Me=["src"],He=["src"],Ae={class:"product-slider-buttons"},xe=Q(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043C\u0430\u043A\u0435\u0442 \u043D\u0430\u043D\u0435\u0441\u0435\u043D\u0438\u044F");function ze(e,t,o,y,L,C){const d=F("router-link"),p=F("ProductSliderFullscreen");return u(),v("div",fe,[e.loader?M("",!0):(u(),v("div",be,[a("div",_e,[a("button",{class:"product-slider-arrow prev",onClick:t[0]||(t[0]=(...l)=>e.previous&&e.previous(...l))}),$(S,{name:"product-slider-trans",class:"product-slider touch",tag:"div"},{default:q(()=>[a("div",{onClick:t[1]||(t[1]=(...l)=>e.downloadImageAsPng&&e.downloadImageAsPng(...l)),class:"product-buttons-stance"},Ce),a("div",ke,[a("div",{onClick:t[2]||(t[2]=(...l)=>e.exploreImage&&e.exploreImage(...l)),class:"product-buttons-position-btn product-buttons-position-radius"},Ve),a("div",{onClick:t[3]||(t[3]=(...l)=>e.downloadImageAsJpeg&&e.downloadImageAsJpeg(...l)),class:"product-buttons-position-btn product-buttons-position-rad"},Ie)]),(u(!0),v(N,null,P(e.slides,l=>(u(),v("div",{class:"product-slider-slide",key:l.id},[l.src?(u(),v("img",{key:0,src:l.src,onClick:t[4]||(t[4]=H=>e.fullscreen=!0),alt:""},null,8,Me)):M("",!0)]))),128))]),_:1}),a("div",{class:"product-slider-arrow next",onClick:t[5]||(t[5]=(...l)=>e.next&&e.next(...l))})])])),$(S,{name:"product-slider-trans",class:"product-slider-small",tag:"div"},{default:q(()=>[(u(!0),v(N,null,P(e.slides,l=>(u(),v("div",{class:"product-slider-small-slide",key:l.id},[l.src?(u(),v("img",{key:0,src:l.src,alt:""},null,8,He)):M("",!0)]))),128))]),_:1}),a("div",Ae,[$(d,{style:{width:"100%"},class:"product-slider-link",to:"/logo",title:"\u041D\u0430\u043D\u0435\u0441\u0442\u0438 \u043B\u043E\u0433\u043E\u0442\u0438\u043F"},{default:q(()=>[xe]),_:1})]),$(p,{modelValue:e.fullscreen,"onUpdate:modelValue":t[6]||(t[6]=l=>e.fullscreen=l),data:e.data},null,8,["modelValue","data"])])}var Ne=O(we,[["render",ze],["__scopeId","data-v-20619936"]]);export{Ne as P,ge as a};
