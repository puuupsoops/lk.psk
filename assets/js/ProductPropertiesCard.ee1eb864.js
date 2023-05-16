import{_ as M,o,b as a,a as t,t as g,k as A,d as B,h as I,g as y,X as j,ak as L,al as q,z as C,p as R,w as V,u as v,F as S,f as U,am as z,an as K,T as J,v as W,x as Q,y as Y,m as x,ao as F,j as G,R as Z,i as tt,L as et,ad as ut,ap as nt,aq as N}from"./index.6d029301.js";import{a as st}from"./ProductSliderCard.1d496117.js";const ot={props:{title:{type:String},price:{type:String},status:{type:String},discount:{type:Number}},emits:["ShowSearch"]},at={class:"content-heading-wrap proudct-heading-wrap"},ct={class:"content-heading-wrap-elem"},it=["innerHTML"],lt={class:"content-heading-wrap-elem tooltip"},dt={key:0,class:"content-heading-price"},rt=t("div",{class:"content-heading-price-text"},"\u0412\u0430\u0448\u0430 \u0446\u0435\u043D\u0430: ",-1),_t={key:0,class:"content-heading-price-value"},vt={class:"tooltiptext",style:{transform:"translate3d(-10px, -30px, 0)"}},pt={key:0,class:"content-heading-info-elem"},ht={key:1,class:"content-heading-info-elem"},mt={class:"content-heading-wrap-elem"},It={class:"content-heading-price"},Et=t("div",{class:"content-heading-price-text"},"\u041E\u043F\u0442\u043E\u0432\u0430\u044F \u0446\u0435\u043D\u0430: ",-1),Dt={class:"content-heading-price-value"},Ct=t("div",{class:"content-heading-btn"},null,-1),gt={class:"content-heading-info"},At={key:0,class:"content-heading-info-elem"},bt=t("span",{class:"content-heading-info-text"},"\u0421\u043A\u0438\u0434\u043A\u0430: ",-1),ft={class:"content-heading-info-value"},Rt={key:1,class:"content-heading-info-elem"},kt=t("span",{class:"content-heading-info-text"},"\u0421\u043A\u0438\u0434\u043A\u0430: ",-1),Tt=t("span",{class:"content-heading-info-value"},"\u041D\u0435 \u0440\u0430\u0441\u043F\u043E\u0441\u0442\u0440\u043E\u043D\u044F\u0435\u0442\u0441\u044F",-1),St=[kt,Tt],$t={class:"content-heading-info-elem"},yt=t("span",{class:"content-heading-info-text"},"\u0421\u0442\u0430\u0442\u0443\u0441 \u0442\u043E\u0432\u0430\u0440\u0430: ",-1),Ut=["innerHTML"];function Pt(r,E,n,d,_,h){return o(),a("div",at,[t("div",ct,[t("div",{class:"product-info-header",title:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0434\u0440\u0443\u0433\u043E\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0442",onClick:E[0]||(E[0]=m=>r.$emit("ShowSearch"))},[t("span",{innerHTML:n.title},null,8,it)])]),t("div",lt,[n.discount?(o(),a("div",dt,[rt,n.discount?(o(),a("div",_t,g(Number(n.price?n.price-n.price/100*n.discount:0).toLocaleString("RU",{minimumFractionDigits:2,maximumFractionDigits:2}).replace(",","."))+" \u20BD",1)):A("",!0),t("div",vt,[n.discount?(o(),a("div",pt," \u0441\u043A\u0438\u0434\u043A\u0430: "+g(n.discount)+"%",1)):(o(),a("div",ht," \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044E"))])])):A("",!0),t("div",mt,[t("div",It,[Et,t("div",Dt,g(Number(n.price?n.price:0).toLocaleString("ru"))+" \u20BD",1)])]),Ct]),t("div",gt,[n.discount?(o(),a("div",At,[bt,t("span",ft,g(n.discount)+"%",1)])):A("",!0),n.status=="Outlet"||n.status=="Discount"||n.status=="Activity"?(o(),a("div",Rt,St)):A("",!0),t("div",$t,[yt,t("span",{class:"content-heading-info-value",innerHTML:n.status},null,8,Ut)])])])}var He=M(ot,[["render",Pt]]);const wt=r=>(Q("data-v-e8dcecf8"),r=r(),Y(),r),Lt={class:"product-info product-info-tab content-elem"},Mt={class:"content-elem-heading",style:{"flex-wrap":"wrap"}},Ot=wt(()=>t("div",{class:"content-elem-heading-text"},"\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u043E",-1)),Ht={class:"product-info-tab-nav"},Vt={key:0,class:"content-hide"},Ft=["innerHTML"],Gt={class:"table product-info-table scroll-elem"},Nt={class:"table-wrap"},Bt={class:"table-elem"},xt=["innerHTML"],Xt={class:"table-elem"},jt=["innerHTML"],qt={key:0,style:"text-align: center; display: table; margin: 0 auto 0 auto;"},zt=x(" \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430... "),Kt={key:1},Jt={style:"margin: 0 auto 0 auto; display: table;"},Wt={class:"product-slider-wrap"},Qt={class:"product-slider-main"},Yt=["src"],Zt=B({__name:"ProductInfoCard",props:{data:{type:Object},protect:{type:Array}},setup(r){const E=r,n=I("detail"),d=I(!0),_=I([]),h=I(!1),m=I([]),b=I(!1),$=I(y().getters.getProduct.ID);j(()=>{$.value!=y().getters.getProduct.ID&&($.value=y().getters.getProduct.ID,n.value="detail",b.value=!1)});const P=()=>{const f=_.value.shift();_.value=_.value.concat(f)},w=()=>{const f=_.value.pop();_.value=[f].concat(_.value)},T=I("\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u044B \u0430\u0440\u0445\u0438\u0432\u043E\u043C "),k=I(L.Active),u=q.Download,e=I(!1),s=f=>{var i,p;if(f)return;_.value=[],m.value=[];let l=(p=(i=E.data)==null?void 0:i.UID)!=null?p:"";console.log(l),F.get("/product/"+l+"/certificates").then(D=>{var O;(O=D.data)==null||O.forEach((H,X)=>{_.value.push({id:X,src:H}),m.value.push(H)})}).catch(D=>{console.log("error"),console.log(D)}).finally(function(){b.value=!0})};let c=()=>{var l;k.value=L.InProgress,T.value="\u0410\u0440\u0445\u0438\u0432 \u0441\u043A\u0430\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F, \u043F\u043E\u0434\u043E\u0436\u0434\u0438\u0442\u0435";let f=(l=E.data)==null?void 0:l.UID;F.get("/product/"+f+"/certificates/download",{responseType:"blob",transformRequest:(i,p)=>{p==null||delete p.common}}).then(i=>{const p=window.URL.createObjectURL(new Blob([i.data])),D=document.createElement("a");D.href=p,D.setAttribute("download","cert.zip"),document.body.appendChild(D),D.click(),document.body.removeChild(D),window.URL.revokeObjectURL(p),e.value=!e.value}).catch(i=>{console.log("error"),console.log(i)}).finally(function(){k.value=L.Active,T.value="\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u044B \u0430\u0440\u0445\u0438\u0432\u043E\u043C "})};return(f,l)=>(o(),a(S,null,[t("div",Lt,[t("div",Mt,[Ot,t("ul",Ht,[t("li",{class:C(n.value==="detail"?"product-info-tab-link active":"product-info-tab-link"),onClick:l[0]||(l[0]=i=>n.value="detail")},"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",2),t("li",{class:C(n.value==="characteristics"?"product-info-tab-link active":"product-info-tab-link"),onClick:l[1]||(l[1]=i=>n.value="characteristics")},"\u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0430",2),t("li",{class:C(n.value==="certificate"?"product-info-tab-link active":"product-info-tab-link"),onClick:l[2]||(l[2]=i=>{s(b.value),n.value="certificate"})},"\u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442",2)]),t("div",{class:"content-elem-heading-btn content-hide-btn product-info-hide-btn",onClick:l[3]||(l[3]=i=>d.value=!d.value)},g(d.value?"\u0421\u043A\u0440\u044B\u0442\u044C \u2014":"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C +"),1)]),R(W,{name:"fade",mode:"out-in"},{default:V(()=>[d.value?(o(),a("div",Vt,[t("div",{class:C(n.value==="detail"?"product-info-desc product-info-tab-elem active":"product-info-desc product-info-tab-elem")},[R(v(Le),{protect:r.protect},null,8,["protect"]),t("p",null,[t("span",{innerHTML:r.data.DETAIL_TEXT},null,8,Ft)])],2),t("div",{class:C(n.value==="characteristics"?"product-info-table-wrap product-info-tab-elem active":"product-info-table-wrap product-info-tab-elem")},[t("div",Gt,[t("div",Nt,[(o(!0),a(S,null,U(r.data.CHARACTERISTICS,(i,p)=>(o(),a("div",{class:"table-row",key:p},[t("div",Bt,[t("span",{innerHTML:i.NAME},null,8,xt)]),t("div",Xt,[t("span",{innerHTML:i.VALUE},null,8,jt)])]))),128))])])],2),t("div",{class:C(n.value==="certificate"?"product-info-desc product-info-tab-elem active":"product-info-desc product-info-tab-elem")},[b.value?(o(),a("div",Kt,[t("div",Jt,[R(v(K),{text:T.value,icon:v(u),state:k.value,onClick:l[4]||(l[4]=i=>v(c)())},null,8,["text","icon","state"])]),t("div",Wt,[t("div",Qt,[t("button",{class:"product-slider-arrow prev",onClick:w}),R(J,{name:"product-slider-trans",class:"product-slider",tag:"div"},{default:V(()=>[(o(!0),a(S,null,U(_.value,i=>(o(),a("div",{class:"product-slider-slide",key:i.id},[i.src?(o(),a("img",{key:0,src:i.src,alt:"",onClick:l[5]||(l[5]=p=>h.value=!0)},null,8,Yt)):A("",!0)]))),128))]),_:1}),t("div",{class:"product-slider-arrow next",onClick:P})])])])):(o(),a("p",qt,[zt,R(v(z))]))],2)])):A("",!0)]),_:1})]),R(v(st),{modelValue:h.value,"onUpdate:modelValue":l[6]||(l[6]=i=>h.value=i),data:m.value},null,8,["modelValue","data"])],64))}});var Ve=M(Zt,[["__scopeId","data-v-e8dcecf8"]]);const te={class:"content-elem"},ee={class:"order-amount-table-wrap scroll-elem"},ue={class:"table order-amount-table"},ne={class:"table-row table-heading",style:{"max-height":"51px"}},se=t("div",{class:"table-elem"},"\u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0430",-1),oe=t("div",{class:"table-elem"},"\u041E\u0441\u0442\u0430\u0442\u043E\u043A",-1),ae={class:"table-elem"},ce=x("\u0426\u0435\u043D\u0430"),ie={key:0,style:{"font-size":"10px"}},le=t("div",{class:"table-elem"},"\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E",-1),de=t("div",{class:"table-elem"},"\u041F\u043F / \u0414\u0430\u0442\u0430",-1),re={class:"table-wrap"},_e={class:"table-elem"},ve=["innerHTML"],pe={class:"table-elem"},he=["innerHTML"],me={key:0,class:"table-elem"},Ie=["innerHTML"],Ee={key:1,class:"table-elem"},De=["innerHTML"],Ce={class:"table-elem"},ge={class:"table-elem"},Ae={class:"order-amount-more"},be=t("span",{class:"order-amount-more-text"},"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u0437\u0430\u043A\u0430\u0437 ",-1),fe={class:"order-amount-more-value"},Re={key:0,class:"order-amount-more-text presail"},ke={key:1,class:"order-amount-more-value"},Te=t("span",{class:"order-amount-more-text"},"\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u041A\u041F",-1),Se=[Te],Fe=B({__name:"ProductOffersOrderCard",props:{data:{type:Array,required:!0},discount:{type:Number},modelValue:{type:Array}},emits:["update:modelValue","onClick"],setup(r,{emit:E}){const n=r,d=I([]),_=G(()=>d.value.filter(u=>u.count>0).length),h=G(()=>d.value.filter(u=>u.count>u.RESIDUE&&u.count!=0).length),m=y(),b=Z(),$=u=>{if(u.check){let e=d.value.find(s=>s.ID==u.ID);e&&(e.count=1)}else{let e=d.value.find(s=>s.ID==u.ID);e&&(e.count=0)}},P=u=>{if(u.count>0){let e=d.value.find(s=>s.ID==u.ID);e&&(e.check=!0)}else{let e=d.value.find(s=>s.ID==u.ID);e&&(e.check=!1)}},w=()=>{if(_.value>0){let u=[];d.value.forEach(c=>{c.count>0&&u.push({ID:c.ID,CHARACTERISTIC:c.CHARACTERISTIC,MAX_DISCOUNT:c.MAX_DISCOUNT,count:c.count,PRICE:c.PRICE,RESIDUE:c.RESIDUE,RESERVED:c.RESERVED,GUID:c.GUID,guid:c.GUID,ORGGUID:c.ORGGUID,price_discount:c.PRICE})}),d.value.forEach(c=>{c.count=0,c.check=!1});let e=m.getters.getProduct,s={product:JSON.parse(JSON.stringify(e)),guid:e.UID,article:e.ARTICLE,characteristics:u,total:u.length*e.PRICE,total_discount:0,count:u.length};m.commit(N.SET_KP_OFFER_POSITION,[s]),m.commit(N.SET_KP_STEP,2),b.push("/kp")}},T=()=>{if(_.value>0){let u=[];d.value.forEach(e=>{e.count>0&&u.push({ID:e.ID,CHARACTERISTIC:e.CHARACTERISTIC,MAX_DISCOUNT:e.MAX_DISCOUNT,count:e.count,PRICE:e.PRICE,RESIDUE:e.RESIDUE,RESERVED:e.RESERVED,GUID:e.GUID,guid:e.GUID,ORGGUID:e.ORGGUID})}),E("update:modelValue",u),E("onClick"),d.value.forEach(e=>{e.count=0,e.check=!1})}},k=()=>{d.value=n.data.map(u=>({ID:u.ID,CHARACTERISTIC:u.CHARACTERISTIC,MAX_DISCOUNT:u.MAX_DISCOUNT,RESIDUE:u.RESIDUE,RESERVED:u.RESERVED,PRICE:u.PRICE,PPDATA:u.PPDATA,GUID:u.GUID,guid:u.GUID,ORGGUID:u.ORGGUID,count:0,check:!1}))};return tt(()=>{k()}),et(()=>n.data,()=>{k()}),(u,e)=>(o(),a("div",te,[t("div",ee,[t("div",ue,[t("div",ne,[se,oe,t("div",ae,[ce,r.discount?(o(),a("span",ie," - "+g(r.discount)+"%",1)):A("",!0)]),le,de]),t("div",re,[(o(!0),a(S,null,U(d.value,s=>(o(),a("div",{class:C("table-row"+(s.count>0?" active":"")+(s.count>s.RESIDUE&&s.count!==0?" presail":"")),key:s.ID},[t("div",_e,[t("span",{innerHTML:s.CHARACTERISTIC},null,8,ve)]),t("div",pe,[t("span",{innerHTML:s.RESIDUE},null,8,he)]),r.discount?(o(),a("div",me,[t("span",{innerHTML:Number(s.PRICE-s.PRICE/100*r.discount).toLocaleString("RU",{minimumFractionDigits:2,maximumFractionDigits:2}).replace(",",".")+" \u20BD"},null,8,Ie)])):(o(),a("div",Ee,[t("span",{innerHTML:Number(s.PRICE).toLocaleString("ru")+" \u20BD"},null,8,De)])),t("div",Ce,[R(ut,{modelValue:s.count,"onUpdate:modelValue":c=>s.count=c,onOnInput:c=>P(s)},null,8,["modelValue","onUpdate:modelValue","onOnInput"]),R(nt,{modelValue:s.check,"onUpdate:modelValue":c=>s.check=c,onOnClick:c=>$(s)},null,8,["modelValue","onUpdate:modelValue","onOnClick"])]),t("div",ge,[t("span",null,g(s.PPDATA?s.PPDATA.replaceAll("/","\xA0/\xA0"):""),1)])],2))),128))])])]),t("div",Ae,[t("div",{class:C(v(_)!==0||v(h)!==0?"order-amount-more-btn":"order-amount-more-btn disable"),onClick:e[0]||(e[0]=s=>T())},[be,t("span",fe,"("+g(v(_))+")",1),v(h)>0?(o(),a("span",Re," + \u043F\u0440\u0435\u0434\u0437\u0430\u043A\u0430\u0437 ")):A("",!0),v(h)>0?(o(),a("span",ke,"("+g(v(h))+")",1)):A("",!0)],2),t("div",{class:C(v(_)!==0||v(h)!==0?"order-amount-more-btn":"order-amount-more-btn disable"),onClick:e[1]||(e[1]=s=>w())},Se,2)])]))}}),$e={props:{protect:{type:Array,require:!0}},setup(){}},ye={class:"content-properties"},Ue=t("div",{class:"content-properties-text"},"\u0421\u0432\u043E\u0439\u0441\u0442\u0432\u0430:",-1),Pe=["src","title"];function we(r,E,n,d,_,h){return o(),a("div",ye,[Ue,(o(!0),a(S,null,U(n.protect,(m,b)=>(o(),a("div",{class:"content-properties-elem",key:b},[t("img",{class:"content-properties-img",src:m.IMAGE,alt:"",title:m.NAME},null,8,Pe)]))),128))])}var Le=M($e,[["render",we]]);export{He as P,Fe as _,Ve as a};
