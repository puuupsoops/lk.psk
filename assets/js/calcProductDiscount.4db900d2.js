import{_ as M,o as s,b as a,a as t,t as D,k as T,d as B,h as E,g as y,Y as j,al as L,am as q,z as g,p as b,w as V,u as v,F as $,f as U,an as z,ao as K,T as J,v as W,x as Y,y as Q,m as x,ap as G,j as F,R as Z,i as tt,L as et,W as ut,aq as nt,ar as N}from"./index.96471701.js";import{a as ot}from"./ProductSliderCard.dc139cfd.js";const st={props:{title:{type:String},price:{type:String},status:{type:String},discount:{type:Number}},emits:["ShowSearch"]},at={class:"content-heading-wrap proudct-heading-wrap"},ct={class:"content-heading-wrap-elem"},it=["innerHTML"],lt={class:"content-heading-wrap-elem tooltip"},dt={class:"content-heading-price"},rt=t("div",{class:"content-heading-price-text"},"\u0412\u0430\u0448\u0430 \u0446\u0435\u043D\u0430: ",-1),_t={key:0,class:"content-heading-price-value"},vt={key:1,class:"content-heading-price-value"},pt={class:"tooltiptext",style:{transform:"translate3d(-10px, -30px, 0)"}},ht={class:"content-heading-info-elem"},mt={class:"content-heading-wrap-elem"},It={class:"content-heading-price"},Et=t("div",{class:"content-heading-price-text"},"\u0414\u0438\u043B\u0435\u0440\u0441\u043A\u0430\u044F \u0446\u0435\u043D\u0430: ",-1),Dt={class:"content-heading-price-value"},Ct=t("div",{class:"content-heading-btn"},null,-1),gt={class:"content-heading-info"},At={class:"content-heading-info-elem"},ft=t("span",{class:"content-heading-info-text"},"\u0421\u043A\u0438\u0434\u043A\u0430: ",-1),bt={class:"content-heading-info-value"},Rt={key:0,class:"content-heading-info-elem"},Tt=t("span",{class:"content-heading-info-text"},"\u0421\u043A\u0438\u0434\u043A\u0430: ",-1),St=t("span",{class:"content-heading-info-value"},"\u041D\u0435 \u0440\u0430\u0441\u043F\u043E\u0441\u0442\u0440\u043E\u043D\u044F\u0435\u0442\u0441\u044F",-1),$t=[Tt,St],kt={class:"content-heading-info-elem"},yt=t("span",{class:"content-heading-info-text"},"\u0421\u0442\u0430\u0442\u0443\u0441 \u0442\u043E\u0432\u0430\u0440\u0430: ",-1),Ut=["innerHTML"];function Pt(d,h,n,c,i,m){return s(),a("div",at,[t("div",ct,[t("div",{class:"product-info-header",title:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0434\u0440\u0443\u0433\u043E\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0442",onClick:h[0]||(h[0]=I=>d.$emit("ShowSearch"))},[t("span",{innerHTML:n.title},null,8,it)])]),t("div",lt,[t("div",dt,[rt,n.discount?(s(),a("div",_t,D(Number(n.price?n.price-n.price/100*n.discount:0).toLocaleString("RU",{minimumFractionDigits:2,maximumFractionDigits:2}).replace(",","."))+" \u20BD",1)):(s(),a("div",vt,D(Number(n.price?n.price:0).toLocaleString("ru"))+" \u20BD",1)),t("div",pt,[t("div",ht," \u0441\u043A\u0438\u0434\u043A\u0430: "+D(n.discount)+"%",1)])]),t("div",mt,[t("div",It,[Et,t("div",Dt,D(Number(n.price?n.price:0).toLocaleString("ru"))+" \u20BD",1)])]),Ct]),t("div",gt,[t("div",At,[ft,t("span",bt,D(n.discount)+"%",1)]),n.status=="Outlet"||n.status=="Discount"||n.status=="Activity"?(s(),a("div",Rt,$t)):T("",!0),t("div",kt,[yt,t("span",{class:"content-heading-info-value",innerHTML:n.status},null,8,Ut)])])])}var He=M(st,[["render",Pt]]);const wt=d=>(Y("data-v-e8dcecf8"),d=d(),Q(),d),Lt={class:"product-info product-info-tab content-elem"},Mt={class:"content-elem-heading",style:{"flex-wrap":"wrap"}},Ot=wt(()=>t("div",{class:"content-elem-heading-text"},"\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u043E",-1)),Ht={class:"product-info-tab-nav"},Vt={key:0,class:"content-hide"},Gt=["innerHTML"],Ft={class:"table product-info-table scroll-elem"},Nt={class:"table-wrap"},Bt={class:"table-elem"},xt=["innerHTML"],Xt={class:"table-elem"},jt=["innerHTML"],qt={key:0,style:"text-align: center; display: table; margin: 0 auto 0 auto;"},zt=x(" \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430... "),Kt={key:1},Jt={style:"margin: 0 auto 0 auto; display: table;"},Wt={class:"product-slider-wrap"},Yt={class:"product-slider-main"},Qt=["src"],Zt=B({__name:"ProductInfoCard",props:{data:{type:Object},protect:{type:Array}},setup(d){const h=d,n=E("detail"),c=E(!0),i=E([]),m=E(!1),I=E([]),A=E(!1),k=E(y().getters.getProduct.ID);j(()=>{k.value!=y().getters.getProduct.ID&&(k.value=y().getters.getProduct.ID,n.value="detail",A.value=!1)});const P=()=>{const f=i.value.shift();i.value=i.value.concat(f)},w=()=>{const f=i.value.pop();i.value=[f].concat(i.value)},S=E("\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u044B \u0430\u0440\u0445\u0438\u0432\u043E\u043C "),R=E(L.Active),u=q.Download,e=E(!1),o=f=>{var r,p;if(f)return;i.value=[],I.value=[];let _=(p=(r=h.data)==null?void 0:r.UID)!=null?p:"";console.log(_),G.get("/product/"+_+"/certificates").then(C=>{var O;(O=C.data)==null||O.forEach((H,X)=>{i.value.push({id:X,src:H}),I.value.push(H)})}).catch(C=>{console.log("error"),console.log(C)}).finally(function(){A.value=!0})};let l=()=>{var _;R.value=L.InProgress,S.value="\u0410\u0440\u0445\u0438\u0432 \u0441\u043A\u0430\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F, \u043F\u043E\u0434\u043E\u0436\u0434\u0438\u0442\u0435";let f=(_=h.data)==null?void 0:_.UID;G.get("/product/"+f+"/certificates/download",{responseType:"blob",transformRequest:(r,p)=>{p==null||delete p.common}}).then(r=>{const p=window.URL.createObjectURL(new Blob([r.data])),C=document.createElement("a");C.href=p,C.setAttribute("download","cert.zip"),document.body.appendChild(C),C.click(),document.body.removeChild(C),window.URL.revokeObjectURL(p),e.value=!e.value}).catch(r=>{console.log("error"),console.log(r)}).finally(function(){R.value=L.Active,S.value="\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u044B \u0430\u0440\u0445\u0438\u0432\u043E\u043C "})};return(f,_)=>(s(),a($,null,[t("div",Lt,[t("div",Mt,[Ot,t("ul",Ht,[t("li",{class:g(n.value==="detail"?"product-info-tab-link active":"product-info-tab-link"),onClick:_[0]||(_[0]=r=>n.value="detail")},"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",2),t("li",{class:g(n.value==="characteristics"?"product-info-tab-link active":"product-info-tab-link"),onClick:_[1]||(_[1]=r=>n.value="characteristics")},"\u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0430",2),t("li",{class:g(n.value==="certificate"?"product-info-tab-link active":"product-info-tab-link"),onClick:_[2]||(_[2]=r=>{o(A.value),n.value="certificate"})},"\u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442",2)]),t("div",{class:"content-elem-heading-btn content-hide-btn product-info-hide-btn",onClick:_[3]||(_[3]=r=>c.value=!c.value)},D(c.value?"\u0421\u043A\u0440\u044B\u0442\u044C \u2014":"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C +"),1)]),b(W,{name:"fade",mode:"out-in"},{default:V(()=>[c.value?(s(),a("div",Vt,[t("div",{class:g(n.value==="detail"?"product-info-desc product-info-tab-elem active":"product-info-desc product-info-tab-elem")},[b(v(Le),{protect:d.protect},null,8,["protect"]),t("p",null,[t("span",{innerHTML:d.data.DETAIL_TEXT},null,8,Gt)])],2),t("div",{class:g(n.value==="characteristics"?"product-info-table-wrap product-info-tab-elem active":"product-info-table-wrap product-info-tab-elem")},[t("div",Ft,[t("div",Nt,[(s(!0),a($,null,U(d.data.CHARACTERISTICS,(r,p)=>(s(),a("div",{class:"table-row",key:p},[t("div",Bt,[t("span",{innerHTML:r.NAME},null,8,xt)]),t("div",Xt,[t("span",{innerHTML:r.VALUE},null,8,jt)])]))),128))])])],2),t("div",{class:g(n.value==="certificate"?"product-info-desc product-info-tab-elem active":"product-info-desc product-info-tab-elem")},[A.value?(s(),a("div",Kt,[t("div",Jt,[b(v(K),{text:S.value,icon:v(u),state:R.value,onClick:_[4]||(_[4]=r=>v(l)())},null,8,["text","icon","state"])]),t("div",Wt,[t("div",Yt,[t("button",{class:"product-slider-arrow prev",onClick:w}),b(J,{name:"product-slider-trans",class:"product-slider",tag:"div"},{default:V(()=>[(s(!0),a($,null,U(i.value,r=>(s(),a("div",{class:"product-slider-slide",key:r.id},[r.src?(s(),a("img",{key:0,src:r.src,alt:"",onClick:_[5]||(_[5]=p=>m.value=!0)},null,8,Qt)):T("",!0)]))),128))]),_:1}),t("div",{class:"product-slider-arrow next",onClick:P})])])])):(s(),a("p",qt,[zt,b(v(z))]))],2)])):T("",!0)]),_:1})]),b(v(ot),{modelValue:m.value,"onUpdate:modelValue":_[6]||(_[6]=r=>m.value=r),data:I.value},null,8,["modelValue","data"])],64))}});var Ve=M(Zt,[["__scopeId","data-v-e8dcecf8"]]);const te={class:"content-elem"},ee={class:"order-amount-table-wrap scroll-elem"},ue={class:"table order-amount-table"},ne={class:"table-row table-heading",style:{"max-height":"51px"}},oe=t("div",{class:"table-elem"},"\u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0430",-1),se=t("div",{class:"table-elem"},"\u041E\u0441\u0442\u0430\u0442\u043E\u043A",-1),ae={class:"table-elem"},ce=x("\u0426\u0435\u043D\u0430"),ie={key:0,style:{"font-size":"10px"}},le=t("div",{class:"table-elem"},"\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E",-1),de=t("div",{class:"table-elem"},"\u041F\u043F / \u0414\u0430\u0442\u0430",-1),re={class:"table-wrap"},_e={class:"table-elem"},ve=["innerHTML"],pe={class:"table-elem"},he=["innerHTML"],me={key:0,class:"table-elem"},Ie=["innerHTML"],Ee={key:1,class:"table-elem"},De=["innerHTML"],Ce={class:"table-elem"},ge={class:"table-elem"},Ae={class:"order-amount-more"},fe=t("span",{class:"order-amount-more-text"},"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u0437\u0430\u043A\u0430\u0437 ",-1),be={class:"order-amount-more-value"},Re={key:0,class:"order-amount-more-text presail"},Te={key:1,class:"order-amount-more-value"},Se=t("span",{class:"order-amount-more-text"},"\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u041A\u041F",-1),$e=[Se],Ge=B({__name:"ProductOffersOrderCard",props:{data:{type:Array,required:!0},discount:{type:Number},modelValue:{type:Array}},emits:["update:modelValue","onClick"],setup(d,{emit:h}){const n=d,c=E([]),i=F(()=>c.value.filter(u=>u.count>0).length),m=F(()=>c.value.filter(u=>u.count>u.RESIDUE&&u.count!=0).length),I=y(),A=Z(),k=u=>{if(u.check){let e=c.value.find(o=>o.ID==u.ID);e&&(e.count=1)}else{let e=c.value.find(o=>o.ID==u.ID);e&&(e.count=0)}},P=u=>{if(u.count>0){let e=c.value.find(o=>o.ID==u.ID);e&&(e.check=!0)}else{let e=c.value.find(o=>o.ID==u.ID);e&&(e.check=!1)}},w=()=>{if(i.value>0){let u=[];c.value.forEach(l=>{l.count>0&&u.push({ID:l.ID,CHARACTERISTIC:l.CHARACTERISTIC,MAX_DISCOUNT:l.MAX_DISCOUNT,count:l.count,PRICE:l.PRICE,RESIDUE:l.RESIDUE,RESERVED:l.RESERVED,GUID:l.GUID,guid:l.GUID,ORGGUID:l.ORGGUID,price_discount:l.PRICE})}),c.value.forEach(l=>{l.count=0,l.check=!1});let e=I.getters.getProduct,o={product:JSON.parse(JSON.stringify(e)),guid:e.UID,article:e.ARTICLE,characteristics:u,total:u.length*e.PRICE,total_discount:0,count:u.length};I.commit(N.SET_KP_OFFER_POSITION,[o]),I.commit(N.SET_KP_STEP,2),A.push("/kp")}},S=()=>{if(i.value>0){let u=[];c.value.forEach(e=>{e.count>0&&u.push({ID:e.ID,CHARACTERISTIC:e.CHARACTERISTIC,MAX_DISCOUNT:e.MAX_DISCOUNT,count:e.count,PRICE:e.PRICE,RESIDUE:e.RESIDUE,RESERVED:e.RESERVED,GUID:e.GUID,guid:e.GUID,ORGGUID:e.ORGGUID})}),h("update:modelValue",u),h("onClick"),c.value.forEach(e=>{e.count=0,e.check=!1})}},R=()=>{c.value=n.data.map(u=>({ID:u.ID,CHARACTERISTIC:u.CHARACTERISTIC,MAX_DISCOUNT:u.MAX_DISCOUNT,RESIDUE:u.RESIDUE,RESERVED:u.RESERVED,PRICE:u.PRICE,PPDATA:u.PPDATA,GUID:u.GUID,guid:u.GUID,ORGGUID:u.ORGGUID,count:0,check:!1}))};return tt(()=>{R()}),et(()=>n.data,()=>{R()}),(u,e)=>(s(),a("div",te,[t("div",ee,[t("div",ue,[t("div",ne,[oe,se,t("div",ae,[ce,d.discount?(s(),a("span",ie," - "+D(d.discount)+"%",1)):T("",!0)]),le,de]),t("div",re,[(s(!0),a($,null,U(c.value,o=>(s(),a("div",{class:g("table-row"+(o.count>0?" active":"")+(o.count>o.RESIDUE&&o.count!==0?" presail":"")),key:o.ID},[t("div",_e,[t("span",{innerHTML:o.CHARACTERISTIC},null,8,ve)]),t("div",pe,[t("span",{innerHTML:o.RESIDUE},null,8,he)]),d.discount?(s(),a("div",me,[t("span",{innerHTML:Number(o.PRICE-o.PRICE/100*d.discount).toLocaleString("RU",{minimumFractionDigits:2,maximumFractionDigits:2}).replace(",",".")+" \u20BD"},null,8,Ie)])):(s(),a("div",Ee,[t("span",{innerHTML:Number(o.PRICE).toLocaleString("ru")+" \u20BD"},null,8,De)])),t("div",Ce,[b(ut,{modelValue:o.count,"onUpdate:modelValue":l=>o.count=l,onOnInput:l=>P(o)},null,8,["modelValue","onUpdate:modelValue","onOnInput"]),b(nt,{modelValue:o.check,"onUpdate:modelValue":l=>o.check=l,onOnClick:l=>k(o)},null,8,["modelValue","onUpdate:modelValue","onOnClick"])]),t("div",ge,[t("span",null,D(o.PPDATA?o.PPDATA.replaceAll("/","\xA0/\xA0"):""),1)])],2))),128))])])]),t("div",Ae,[t("div",{class:g(v(i)!==0||v(m)!==0?"order-amount-more-btn":"order-amount-more-btn disable"),onClick:e[0]||(e[0]=o=>S())},[fe,t("span",be,"("+D(v(i))+")",1),v(m)>0?(s(),a("span",Re," + \u043F\u0440\u0435\u0434\u0437\u0430\u043A\u0430\u0437 ")):T("",!0),v(m)>0?(s(),a("span",Te,"("+D(v(m))+")",1)):T("",!0)],2),t("div",{class:g(v(i)!==0||v(m)!==0?"order-amount-more-btn":"order-amount-more-btn disable"),onClick:e[1]||(e[1]=o=>w())},$e,2)])]))}}),ke={props:{protect:{type:Array,require:!0}},setup(){}},ye={class:"content-properties"},Ue=t("div",{class:"content-properties-text"},"\u0421\u0432\u043E\u0439\u0441\u0442\u0432\u0430:",-1),Pe=["src","title"];function we(d,h,n,c,i,m){return s(),a("div",ye,[Ue,(s(!0),a($,null,U(n.protect,(I,A)=>(s(),a("div",{class:"content-properties-elem",key:A},[t("img",{class:"content-properties-img",src:I.IMAGE,alt:"",title:I.NAME},null,8,Pe)]))),128))])}var Le=M(ke,[["render",we]]);function Fe(d,h,n){const c=h,i=n;return c==0&&d=="-"?i!=null?i:0:d=="Outlet"||d=="Discount"?0:i<c?c:i}export{He as P,Ge as _,Ve as a,Fe as c};
