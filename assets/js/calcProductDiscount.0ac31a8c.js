import{_ as M,o as a,b as c,a as t,t as g,k as $,d as x,h as I,g as U,Y as j,al as O,am as z,z as A,p as R,w as V,u as v,F as y,f as w,an as K,ao as J,T as W,v as Y,x as Q,y as Z,m as X,ap as F,j as G,R as tt,i as et,L as ut,W as nt,aq as st,ar as B}from"./index.8d3c85f4.js";import{a as ot}from"./ProductSliderCard.018cf677.js";const at={props:{title:{type:String},price:{type:String},status:{type:String},discount:{type:Number}},emits:["ShowSearch"]},ct={class:"content-heading-wrap proudct-heading-wrap"},it={class:"content-heading-wrap-elem"},lt=["innerHTML"],dt={class:"content-heading-wrap-elem tooltip"},rt={class:"content-heading-price"},_t=t("div",{class:"content-heading-price-text"},"\u0412\u0430\u0448\u0430 \u0446\u0435\u043D\u0430: ",-1),vt={key:0,class:"content-heading-price-value"},pt={key:1,class:"content-heading-price-value"},ht={class:"tooltiptext",style:{transform:"translate3d(-10px, -30px, 0)"}},mt={class:"content-heading-info-elem"},Et={class:"content-heading-wrap-elem"},It={class:"content-heading-price"},Dt=t("div",{class:"content-heading-price-text"},"\u0414\u0438\u043B\u0435\u0440\u0441\u043A\u0430\u044F \u0446\u0435\u043D\u0430: ",-1),gt={class:"content-heading-price-value"},Ct=t("div",{class:"content-heading-btn"},null,-1),At={class:"content-heading-info"},ft={class:"content-heading-info-elem"},bt=t("span",{class:"content-heading-info-text"},"\u0421\u043A\u0438\u0434\u043A\u0430: ",-1),Rt={class:"content-heading-info-value"},Tt={key:0,class:"content-heading-info-elem"},$t=t("span",{class:"content-heading-info-text"},"\u0421\u043A\u0438\u0434\u043A\u0430: ",-1),kt=t("span",{class:"content-heading-info-value"},"\u041D\u0435 \u0440\u0430\u0441\u043F\u043E\u0441\u0442\u0440\u043E\u043D\u044F\u0435\u0442\u0441\u044F",-1),yt=[$t,kt],St={class:"content-heading-info-elem"},Ut=t("span",{class:"content-heading-info-text"},"\u0421\u0442\u0430\u0442\u0443\u0441 \u0442\u043E\u0432\u0430\u0440\u0430: ",-1),wt=["innerHTML"];function Pt(o,h,n,i,l,m){return a(),c("div",ct,[t("div",it,[t("div",{class:"product-info-header",title:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0434\u0440\u0443\u0433\u043E\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0442",onClick:h[0]||(h[0]=E=>o.$emit("ShowSearch"))},[t("span",{innerHTML:n.title},null,8,lt)])]),t("div",dt,[t("div",rt,[_t,n.discount?(a(),c("div",vt,g(Number(n.price?n.price-n.price/100*n.discount:0).toLocaleString("RU",{minimumFractionDigits:2,maximumFractionDigits:2}).replace(",","."))+" \u20BD",1)):(a(),c("div",pt,g(Number(n.price?n.price:0).toLocaleString("ru"))+" \u20BD",1)),t("div",ht,[t("div",mt," \u0441\u043A\u0438\u0434\u043A\u0430: "+g(n.discount)+"%",1)])]),t("div",Et,[t("div",It,[Dt,t("div",gt,g(Number(n.price?n.price:0).toLocaleString("ru"))+" \u20BD",1)])]),Ct]),t("div",At,[t("div",ft,[bt,t("span",Rt,g(n.discount)+"%",1)]),n.status=="Outlet"||n.status=="Discount"||n.status=="Activity"?(a(),c("div",Tt,yt)):$("",!0),t("div",St,[Ut,t("span",{class:"content-heading-info-value",innerHTML:n.status},null,8,wt)])])])}var Ne=M(at,[["render",Pt]]);const Lt=o=>(Q("data-v-e8dcecf8"),o=o(),Z(),o),Ot={class:"product-info product-info-tab content-elem"},Mt={class:"content-elem-heading",style:{"flex-wrap":"wrap"}},Ht=Lt(()=>t("div",{class:"content-elem-heading-text"},"\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u043E",-1)),Nt={class:"product-info-tab-nav"},Vt={key:0,class:"content-hide"},Ft=["innerHTML"],Gt={class:"table product-info-table scroll-elem"},Bt={class:"table-wrap"},xt={class:"table-elem"},Xt=["innerHTML"],qt={class:"table-elem"},jt=["innerHTML"],zt={key:0,style:"text-align: center; display: table; margin: 0 auto 0 auto;"},Kt=X(" \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430... "),Jt={key:1},Wt={style:"margin: 0 auto 0 auto; display: table;"},Yt={class:"product-slider-wrap"},Qt={class:"product-slider-main"},Zt=["src"],te=x({__name:"ProductInfoCard",props:{data:{type:Object},protect:{type:Array}},setup(o){const h=o,n=I("detail"),i=I(!0),l=I([]),m=I(!1),E=I([]),f=I(!1),S=I(U().getters.getProduct.ID);j(()=>{S.value!=U().getters.getProduct.ID&&(S.value=U().getters.getProduct.ID,n.value="detail",f.value=!1)});const P=()=>{const b=l.value.shift();l.value=l.value.concat(b)},L=()=>{const b=l.value.pop();l.value=[b].concat(l.value)},k=I("\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u044B \u0430\u0440\u0445\u0438\u0432\u043E\u043C "),T=I(O.Active),u=z.Download,e=I(!1),s=b=>{var r,p;if(b)return;l.value=[],E.value=[];let _=(p=(r=h.data)==null?void 0:r.UID)!=null?p:"";console.log(_),F.get("/product/"+_+"/certificates").then(C=>{var H;(H=C.data)==null||H.forEach((N,q)=>{l.value.push({id:q,src:N}),E.value.push(N)})}).catch(C=>{console.log("error"),console.log(C)}).finally(function(){f.value=!0})};let d=()=>{var _;T.value=O.InProgress,k.value="\u0410\u0440\u0445\u0438\u0432 \u0441\u043A\u0430\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F, \u043F\u043E\u0434\u043E\u0436\u0434\u0438\u0442\u0435";let b=(_=h.data)==null?void 0:_.UID;F.get("/product/"+b+"/certificates/download",{responseType:"blob",transformRequest:(r,p)=>{p==null||delete p.common}}).then(r=>{const p=window.URL.createObjectURL(new Blob([r.data])),C=document.createElement("a");C.href=p,C.setAttribute("download","cert.zip"),document.body.appendChild(C),C.click(),document.body.removeChild(C),window.URL.revokeObjectURL(p),e.value=!e.value}).catch(r=>{console.log("error"),console.log(r)}).finally(function(){T.value=O.Active,k.value="\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u044B \u0430\u0440\u0445\u0438\u0432\u043E\u043C "})};return(b,_)=>(a(),c(y,null,[t("div",Ot,[t("div",Mt,[Ht,t("ul",Nt,[t("li",{class:A(n.value==="detail"?"product-info-tab-link active":"product-info-tab-link"),onClick:_[0]||(_[0]=r=>n.value="detail")},"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",2),t("li",{class:A(n.value==="characteristics"?"product-info-tab-link active":"product-info-tab-link"),onClick:_[1]||(_[1]=r=>n.value="characteristics")},"\u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0430",2),t("li",{class:A(n.value==="certificate"?"product-info-tab-link active":"product-info-tab-link"),onClick:_[2]||(_[2]=r=>{s(f.value),n.value="certificate"})},"\u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442",2)]),t("div",{class:"content-elem-heading-btn content-hide-btn product-info-hide-btn",onClick:_[3]||(_[3]=r=>i.value=!i.value)},g(i.value?"\u0421\u043A\u0440\u044B\u0442\u044C \u2014":"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C +"),1)]),R(Y,{name:"fade",mode:"out-in"},{default:V(()=>[i.value?(a(),c("div",Vt,[t("div",{class:A(n.value==="detail"?"product-info-desc product-info-tab-elem active":"product-info-desc product-info-tab-elem")},[R(v(Oe),{protect:o.protect},null,8,["protect"]),t("p",null,[t("span",{innerHTML:o.data.DETAIL_TEXT},null,8,Ft)])],2),t("div",{class:A(n.value==="characteristics"?"product-info-table-wrap product-info-tab-elem active":"product-info-table-wrap product-info-tab-elem")},[t("div",Gt,[t("div",Bt,[(a(!0),c(y,null,w(o.data.CHARACTERISTICS,(r,p)=>(a(),c("div",{class:"table-row",key:p},[t("div",xt,[t("span",{innerHTML:r.NAME},null,8,Xt)]),t("div",qt,[t("span",{innerHTML:r.VALUE},null,8,jt)])]))),128))])])],2),t("div",{class:A(n.value==="certificate"?"product-info-desc product-info-tab-elem active":"product-info-desc product-info-tab-elem")},[f.value?(a(),c("div",Jt,[t("div",Wt,[R(v(J),{text:k.value,icon:v(u),state:T.value,onClick:_[4]||(_[4]=r=>v(d)())},null,8,["text","icon","state"])]),t("div",Yt,[t("div",Qt,[t("button",{class:"product-slider-arrow prev",onClick:L}),R(W,{name:"product-slider-trans",class:"product-slider",tag:"div"},{default:V(()=>[(a(!0),c(y,null,w(l.value,r=>(a(),c("div",{class:"product-slider-slide",key:r.id},[r.src?(a(),c("img",{key:0,src:r.src,alt:"",onClick:_[5]||(_[5]=p=>m.value=!0)},null,8,Zt)):$("",!0)]))),128))]),_:1}),t("div",{class:"product-slider-arrow next",onClick:P})])])])):(a(),c("p",zt,[Kt,R(v(K))]))],2)])):$("",!0)]),_:1})]),R(v(ot),{modelValue:m.value,"onUpdate:modelValue":_[6]||(_[6]=r=>m.value=r),data:E.value},null,8,["modelValue","data"])],64))}});var Ve=M(te,[["__scopeId","data-v-e8dcecf8"]]);const ee={class:"content-elem"},ue={class:"order-amount-table-wrap scroll-elem"},ne={class:"table order-amount-table"},se={class:"table-row table-heading",style:{"max-height":"51px"}},oe=t("div",{class:"table-elem"},"\u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0430",-1),ae=t("div",{class:"table-elem"},"\u041E\u0441\u0442\u0430\u0442\u043E\u043A",-1),ce={class:"table-elem"},ie=X("\u0426\u0435\u043D\u0430"),le={key:0,style:{"font-size":"10px"}},de=t("div",{class:"table-elem"},"\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E",-1),re=t("div",{class:"table-elem"},"\u041F\u043F / \u0414\u0430\u0442\u0430",-1),_e={class:"table-wrap"},ve={class:"table-elem"},pe=["innerHTML"],he={class:"table-elem"},me=["innerHTML"],Ee={key:0,class:"table-elem"},Ie=["innerHTML"],De={key:1,class:"table-elem"},ge=["innerHTML"],Ce={class:"table-elem"},Ae={class:"table-elem"},fe={class:"order-amount-more"},be=t("span",{class:"order-amount-more-text"},"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u0437\u0430\u043A\u0430\u0437 ",-1),Re={class:"order-amount-more-value"},Te={key:0,class:"order-amount-more-text presail"},$e={key:1,class:"order-amount-more-value"},ke=t("span",{class:"order-amount-more-text"},"\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u041A\u041F",-1),ye=[ke],Fe=x({__name:"ProductOffersOrderCard",props:{data:{type:Array,required:!0},discount:{type:Number},modelValue:{type:Array}},emits:["update:modelValue","onClick"],setup(o,{emit:h}){const n=o,i=I([]),l=G(()=>i.value.filter(u=>u.count>0).length),m=G(()=>i.value.filter(u=>u.count>u.RESIDUE&&u.count!=0).length),E=U(),f=tt(),S=u=>{if(u.check){let e=i.value.find(s=>s.ID==u.ID);e&&(e.count=1)}else{let e=i.value.find(s=>s.ID==u.ID);e&&(e.count=0)}},P=u=>{if(u.count>0){let e=i.value.find(s=>s.ID==u.ID);e&&(e.check=!0)}else{let e=i.value.find(s=>s.ID==u.ID);e&&(e.check=!1)}},L=()=>{if(l.value>0){let u=[];i.value.forEach(d=>{d.count>0&&u.push({ID:d.ID,CHARACTERISTIC:d.CHARACTERISTIC,MAX_DISCOUNT:d.MAX_DISCOUNT,count:d.count,PRICE:d.PRICE,RESIDUE:d.RESIDUE,RESERVED:d.RESERVED,GUID:d.GUID,guid:d.GUID,ORGGUID:d.ORGGUID,price_discount:d.PRICE})}),i.value.forEach(d=>{d.count=0,d.check=!1});let e=E.getters.getProduct,s={product:JSON.parse(JSON.stringify(e)),guid:e.UID,article:e.ARTICLE,characteristics:u,total:u.length*e.PRICE,total_discount:0,count:u.length};E.commit(B.SET_KP_OFFER_POSITION,[s]),E.commit(B.SET_KP_STEP,2),f.push("/kp")}},k=()=>{if(l.value>0){let u=[];i.value.forEach(e=>{e.count>0&&u.push({ID:e.ID,CHARACTERISTIC:e.CHARACTERISTIC,MAX_DISCOUNT:e.MAX_DISCOUNT,count:e.count,PRICE:e.PRICE,RESIDUE:e.RESIDUE,RESERVED:e.RESERVED,GUID:e.GUID,guid:e.GUID,ORGGUID:e.ORGGUID})}),h("update:modelValue",u),h("onClick"),i.value.forEach(e=>{e.count=0,e.check=!1})}},T=()=>{i.value=n.data.map(u=>({ID:u.ID,CHARACTERISTIC:u.CHARACTERISTIC,MAX_DISCOUNT:u.MAX_DISCOUNT,RESIDUE:u.RESIDUE,RESERVED:u.RESERVED,PRICE:u.PRICE,PPDATA:u.PPDATA,GUID:u.GUID,guid:u.GUID,ORGGUID:u.ORGGUID,count:0,check:!1}))};return et(()=>{T()}),ut(()=>n.data,()=>{T()}),(u,e)=>(a(),c("div",ee,[t("div",ue,[t("div",ne,[t("div",se,[oe,ae,t("div",ce,[ie,o.discount?(a(),c("span",le," - "+g(o.discount)+"%",1)):$("",!0)]),de,re]),t("div",_e,[(a(!0),c(y,null,w(i.value,s=>(a(),c("div",{class:A("table-row"+(s.count>0?" active":"")+(s.count>s.RESIDUE&&s.count!==0?" presail":"")),key:s.ID},[t("div",ve,[t("span",{innerHTML:s.CHARACTERISTIC},null,8,pe)]),t("div",he,[t("span",{innerHTML:s.RESIDUE},null,8,me)]),o.discount?(a(),c("div",Ee,[t("span",{innerHTML:Number(s.PRICE-s.PRICE/100*o.discount).toLocaleString("RU",{minimumFractionDigits:2,maximumFractionDigits:2}).replace(",",".")+" \u20BD"},null,8,Ie)])):(a(),c("div",De,[t("span",{innerHTML:Number(s.PRICE).toLocaleString("ru")+" \u20BD"},null,8,ge)])),t("div",Ce,[R(nt,{modelValue:s.count,"onUpdate:modelValue":d=>s.count=d,onOnInput:d=>P(s)},null,8,["modelValue","onUpdate:modelValue","onOnInput"]),R(st,{modelValue:s.check,"onUpdate:modelValue":d=>s.check=d,onOnClick:d=>S(s)},null,8,["modelValue","onUpdate:modelValue","onOnClick"])]),t("div",Ae,[t("span",null,g(s.PPDATA?s.PPDATA.replaceAll("/","\xA0/\xA0"):""),1)])],2))),128))])])]),t("div",fe,[t("div",{class:A(v(l)!==0||v(m)!==0?"order-amount-more-btn":"order-amount-more-btn disable"),onClick:e[0]||(e[0]=s=>k())},[be,t("span",Re,"("+g(v(l))+")",1),v(m)>0?(a(),c("span",Te," + \u043F\u0440\u0435\u0434\u0437\u0430\u043A\u0430\u0437 ")):$("",!0),v(m)>0?(a(),c("span",$e,"("+g(v(m))+")",1)):$("",!0)],2),t("div",{class:A(v(l)!==0||v(m)!==0?"order-amount-more-btn":"order-amount-more-btn disable"),onClick:e[1]||(e[1]=s=>L())},ye,2)])]))}}),Se={props:{protect:{type:Array,require:!0}},setup(){}},Ue={class:"content-properties"},we=t("div",{class:"content-properties-text"},"\u0421\u0432\u043E\u0439\u0441\u0442\u0432\u0430:",-1),Pe=["src","title"];function Le(o,h,n,i,l,m){return a(),c("div",Ue,[we,(a(!0),c(y,null,w(n.protect,(E,f)=>(a(),c("div",{class:"content-properties-elem",key:f},[t("img",{class:"content-properties-img",src:E.IMAGE,alt:"",title:E.NAME},null,8,Pe)]))),128))])}var Oe=M(Se,[["render",Le]]),D=(o=>(o.Activity="Activity",o.Discount="Discount",o.New="New collection",o.Outlet="Outlet",o.Soon="Soon",o.Upgrade="Upgrade",o.Request="\u041F\u043E\u0434 \u0437\u0430\u043A\u0430\u0437",o.Expansion="\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u0435 \u0430\u0441\u0441\u043E\u0440\u0442\u0438\u043C\u0435\u043D\u0442\u0430",o.Empty="-",o.None="",o))(D||{});function Ge(o,h,n){const i=h,l=n;switch(o){case D.Outlet:case D.Discount:case D.Activity:return 0;case D.Empty:case D.New:return i==0?l!=null?l:0:l>=i?i:l;case D.Soon:case D.Upgrade:case D.Request:case D.Expansion:case D.None:default:return 0}}export{Ne as P,Fe as _,Ve as a,Ge as c};
