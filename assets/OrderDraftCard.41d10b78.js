import{d as p,g as m,_ as h,o as r,b as d,a as s,t as i,j as v,F as n,e as u,y as a}from"./index.dd5c42dc.js";const g=p({props:{data:{type:Object}},setup(){const e=m([]),_=m([]);return{open:e,open_presail:_}}}),D={class:"order-list content-elem"},C={class:"order-list-bottom scroll-elem"},E={class:"order-list-bottom-wrap"},F={key:0,class:"order-list-row order-list-heading"},b=s("div",{class:"order-list-elem"},"\u2116",-1),f=s("div",{class:"order-list-elem"},"\u0410\u0440\u0442\u0438\u043A\u0443\u043B",-1),B=s("div",{class:"order-list-elem"},"\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435",-1),R={class:"order-list-elem"},w=s("div",{class:"order-list-elem"},"\u041A\u043E\u043B-\u0432\u043E",-1),A=s("div",{class:"order-list-elem"},"\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C",-1),L=s("div",{class:"order-list-elem"},null,-1),O=["onClick"],N={class:"order-list-elem"},S={class:"order-list-elem"},I={class:"order-list-elem"},T=["innerHTML"],H=s("div",{class:"order-list-elem"},null,-1),M={class:"order-list-elem"},U={class:"order-list-elem"},$=s("div",{class:"order-list-elem-delete"},null,-1),P=s("div",{class:"order-list-elem"},null,-1),j=s("div",{class:"order-list-elem"},null,-1),V={class:"order-list-elem"},z={class:"order-list-elem"},q={class:"order-list-elem"},G={class:"order-list-elem"},J=s("div",{class:"order-list-elem-delete"},null,-1),K={key:0,class:"order-list-bottom-wrap"},Q=s("div",{class:"order-list-row order-list-subheading"},[s("div",null,"\u041F\u043E\u0437\u0438\u0446\u0438\u0438 \u0434\u043B\u044F \u043F\u0440\u0435\u0434\u0437\u0430\u043A\u0430\u0437\u0430")],-1),W={class:"order-list-row order-list-heading"},X=s("div",{class:"order-list-elem"},"\u2116",-1),Y=s("div",{class:"order-list-elem"},"\u0410\u0440\u0442\u0438\u043A\u0443\u043B",-1),Z=s("div",{class:"order-list-elem"},"\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435",-1),x={class:"order-list-elem"},k=s("div",{class:"order-list-elem"},"\u041A\u043E\u043B-\u0432\u043E",-1),y=s("div",{class:"order-list-elem"},"\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C",-1),ss=s("div",{class:"order-list-elem"},null,-1),es=["onClick"],is={class:"order-list-elem"},os={class:"order-list-elem"},ls={class:"order-list-elem"},ts=["innerHTML"],rs=s("div",{class:"order-list-elem"},null,-1),ds={class:"order-list-elem"},ns={class:"order-list-elem"},us=s("div",{class:"order-list-elem-delete"},null,-1),as=s("div",{class:"order-list-elem"},null,-1),cs=s("div",{class:"order-list-elem"},null,-1),_s={class:"order-list-elem"},ms={class:"order-list-elem"},vs={class:"order-list-elem"},ps={class:"order-list-elem"},hs=s("div",{class:"order-list-elem-delete"},null,-1);function gs(e,_,Ds,Cs,Es,Fs){return r(),d("div",D,[s("div",C,[s("div",E,[e.data.position.length>0?(r(),d("div",F,[b,f,B,s("div",R,i(e.open.length!=0?"\u0426\u0435\u043D\u0430":""),1),w,A,L])):v("",!0),(r(!0),d(n,null,u(e.data.position,(t,o)=>(r(),d("div",{class:a(e.open.indexOf(o)!==-1?"order-list-item active":"order-list-item"),key:o},[s("div",{class:"order-list-row order-list-main-row",onClick:l=>e.open.indexOf(o)===-1?e.open.push(o):e.open.splice(e.open.indexOf(o),1)},[s("div",N,i(o+1),1),s("div",S,i(t.article),1),s("div",I,[s("span",{innerHTML:t.product.NAME},null,8,T)]),H,s("div",M,i(t.count),1),s("div",U,i(Number(t.total).toLocaleString("RU",{minimumFractionDigits:2,maximumFractionDigits:2}).replace(",","."))+" \u20BD",1),$],8,O),s("div",{class:a(e.open.indexOf(o)!==-1?"order-list-sublist active":"order-list-sublist")},[(r(!0),d(n,null,u(t.characteristics,(l,c)=>(r(),d("div",{key:c,class:"order-list-row"},[P,j,s("div",V,i(l.CHARACTERISTIC),1),s("div",z,i(Number(l.PRICE).toLocaleString("RU",{minimumFractionDigits:2,maximumFractionDigits:2}).replace(",","."))+" \u20BD",1),s("div",q,[s("span",null,i(l.count),1)]),s("div",G,i(Number(l.PRICE*l.count).toLocaleString("RU",{minimumFractionDigits:2,maximumFractionDigits:2}).replace(",","."))+" \u20BD",1),J]))),128))],2)],2))),128))]),e.data.position_presail.length>0?(r(),d("div",K,[Q,s("div",W,[X,Y,Z,s("div",x,i(e.open_presail.length!=0?"\u0426\u0435\u043D\u0430":""),1),k,y,ss]),(r(!0),d(n,null,u(e.data.position_presail,(t,o)=>(r(),d("div",{class:a(e.open_presail.indexOf(o)!==-1?"order-list-item active":"order-list-item"),key:o},[s("div",{class:"order-list-row order-list-main-row",onClick:l=>e.open_presail.indexOf(o)===-1?e.open_presail.push(o):e.open_presail.splice(e.open_presail.indexOf(o),1)},[s("div",is,i(o+1),1),s("div",os,i(t.article),1),s("div",ls,[s("span",{innerHTML:t.product.NAME},null,8,ts)]),rs,s("div",ds,i(t.count),1),s("div",ns,i(Number(t.total).toLocaleString("RU",{minimumFractionDigits:2,maximumFractionDigits:2}).replace(",","."))+" \u20BD",1),us],8,es),s("div",{class:a(e.open_presail.indexOf(o)!==-1?"order-list-sublist active":"order-list-sublist")},[(r(!0),d(n,null,u(t.characteristics,(l,c)=>(r(),d("div",{key:c,class:"order-list-row"},[as,cs,s("div",_s,i(l.CHARACTERISTIC),1),s("div",ms,i(Number(l.PRICE).toLocaleString("RU",{minimumFractionDigits:2,maximumFractionDigits:2}).replace(",","."))+" \u20BD",1),s("div",vs,[s("span",null,i(l.count),1)]),s("div",ps,i(Number(l.PRICE*l.count).toLocaleString("RU",{minimumFractionDigits:2,maximumFractionDigits:2}).replace(",","."))+" \u20BD",1),hs]))),128))],2)],2))),128))])):v("",!0)])])}var fs=h(g,[["render",gs]]);export{fs as O};
