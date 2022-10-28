import{N as D,_ as M}from"./PersonalBar.9b84b0fc.js";import{d as E,r as d,o,c as m,w as f,a as s,t as c,u as H,n as P,b as i,_ as v,F as L,e as N,f as w,g as C,h as $,N as V,i as p,j as y,k as b,l as k,m as u,C as F,T as G,p as x,q as O}from"./index.dd5c42dc.js";import{P as T}from"./PreloaderLocal.0fdb54b9.js";const j={class:"company-card-name"},q={class:"company-card-box orange"},R={key:0,class:"company-card-row"},U={class:"company-card-title"},z={class:"company-card-info"},W={class:"company-card-info-row"},X=["innerHTML"],Y={class:"company-card-value"},I={class:"company-card-sale small"},J={class:"company-card-sale-box"},K=s("span",{class:"company-card-sale-text"},"\u0421\u043A\u0438\u0434\u043A\u0430",-1),Q={class:"company-card-sale-value"},Z={key:1,class:"company-card-row"},ss=s("div",{class:"company-card-title"},[s("br")],-1),as=s("div",{class:"company-card-info"},[s("br"),s("br")],-1),es=[ss,as],ts={key:2,class:"company-card-row"},os={class:"company-card-title"},ns={class:"company-card-info"},cs={class:"company-card-info-row"},ds=["innerHTML"],is={class:"company-card-value"},rs={class:"company-card-sale small"},ls={class:"company-card-sale-box"},_s=s("span",{class:"company-card-sale-text"},"\u0421\u043A\u0438\u0434\u043A\u0430",-1),us={class:"company-card-sale-value"},ms={key:3,class:"company-card-row"},ps=s("div",{class:"company-card-title"},[s("br")],-1),hs=s("div",{class:"company-card-info"},[s("br"),s("br")],-1),vs=[ps,hs],gs=s("div",{class:"company-card-more"},"\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435",-1),ys=E({__name:"CompanyAboutSmallCard",props:{data:{type:Object}},setup(a){return(e,n)=>{const t=d("router-link");return o(),m(t,{tag:"a",class:"company-card-item",to:"/company/"+a.data.uid},{default:f(()=>[s("div",j,c(H(P)(a.data.name)),1),s("div",q,[a.data.storages&&a.data.storages[0]?(o(),i("div",R,[s("div",U,c(a.data.storages[0].name.replace(/(^|\s)\S/g,l=>l.toUpperCase()).replace(/(ООО)|(\")|(\s)|([а-я])/g,"")),1),s("div",z,[s("div",W,[s("span",{innerHTML:a.data.storages[0].balance-a.data.storages[0].debt<0?"\u0417\u0430\u0434\u043E\u043B\u0436\u0435\u043D\u043D\u043E\u0441\u0442\u044C:":"\u0411\u0430\u043B\u0430\u043D\u0441:"},null,8,X),s("span",Y,"\xA0"+c(Number(a.data.storages[0].balance-a.data.storages[0].debt).toLocaleString("ru").substring(1))+" \u20BD",1)])]),s("div",I,[s("div",J,[K,s("div",Q,c(a.data.storages[0].discount)+" %",1)])])])):(o(),i("div",Z,es)),a.data.storages&&a.data.storages[1]?(o(),i("div",ts,[s("div",os,c(a.data.storages[1].name.replace(/(^|\s)\S/g,l=>l.toUpperCase()).replace(/(ООО)|(\")|(\s)|([а-я])/g,"")),1),s("div",ns,[s("div",cs,[s("span",{innerHTML:a.data.storages[1].balance-a.data.storages[1].debt<0?"\u0417\u0430\u0434\u043E\u043B\u0436\u0435\u043D\u043D\u043E\u0441\u0442\u044C:":"\u0411\u0430\u043B\u0430\u043D\u0441:"},null,8,ds),s("span",is,"\xA0"+c(Number(a.data.storages[1].balance-a.data.storages[1].debt).toLocaleString("ru").substring(1))+" \u20BD",1)])]),s("div",rs,[s("div",ls,[_s,s("div",us,c(a.data.storages[1].discount)+" %",1)])])])):(o(),i("div",ms,vs))]),gs]),_:1},8,["to"])}}}),fs={props:{data:{type:Array},loading:{type:Boolean,default:!1}},components:{CompanyAboutSmallCard:ys,PreloaderLocal:T}},ws={class:"company-card"},Cs={class:"company-card-wrap"};function $s(a,e,n,t,l,g){const _=d("PreloaderLocal"),h=d("CompanyAboutSmallCard");return o(),i("div",ws,[s("div",Cs,[n.loading?(o(),m(_,{key:0})):(o(!0),i(L,{key:1},N(n.data,r=>(o(),m(h,{key:r.id,data:r},null,8,["data"]))),128))])])}var bs=v(fs,[["render",$s]]);const ks={setup(){const a=w(b),e=C(!1);return $(()=>{a.getters.isNews||(e.value=!0,a.dispatch(V.GET_NEWS).finally(()=>{e.value=!1}))}),{isLoad:p(()=>a.getters.isNews),news:p(()=>a.getters.getOneNews)}}},xs={key:0,class:"news",href:"https://psk.expert/novosti/"},Es={class:"news-img-box"},Ls=["src"],Ns={class:"news-text"},Ts={class:"news-heading"},As={class:"news-heading-text"},Ss=["innerHTML"],Bs={class:"news-heading-date"},Ds=["innerHTML"],Ms={class:"news-description"},Hs=["innerHTML"];function Ps(a,e,n,t,l,g){return t.isLoad?(o(),i("a",xs,[s("div",Es,[s("img",{class:"news-img",src:t.news.image,alt:""},null,8,Ls)]),s("div",Ns,[s("div",Ts,[s("div",As,[s("span",{innerHTML:t.news.title},null,8,Ss)]),s("div",Bs,[s("span",{innerHTML:t.news.date},null,8,Ds)])]),s("div",Ms,[s("span",{innerHTML:t.news.text},null,8,Hs)])])])):y("",!0)}var Vs=v(ks,[["render",Ps]]),Fs="/assets/horn.0cb48071.svg";const Gs={props:{data:{type:Object,reqired:!0}},mounted(){}},Os={class:"case-slider-elem"},js={class:"case-slider-elem-wrap"},qs={class:"case-slider-elem-box"},Rs=s("div",{class:"case-slider-new"},[s("div",{class:"case-slider-new-box"},[s("img",{class:"case-slider-new-img",src:Fs,alt:""}),s("div",{class:"case-slider-new-text"},"\u041D\u043E\u0432\u0438\u043D\u043A\u0430")])],-1),Us={class:"case-slider-img-box"},zs=["src"],Ws={class:"case-slider-info"},Xs={class:"case-slider-name"},Ys={class:"case-slider-about"},Is={class:"case-slider-about-code"},Js={class:"case-slider-price-val"},Ks={class:"case-slider-price-info"};function Qs(a,e,n,t,l,g){const _=d("router-link");return o(),i("div",Os,[s("div",js,[s("div",qs,[Rs,s("div",Us,[s("img",{class:"case-slider-img",src:n.data.image,alt:""},null,8,zs)]),s("div",Ws,[s("div",Xs,c(n.data.title),1),s("div",Ys,[k(c(n.data.desc)+" ",1),s("span",Is,c(n.data.article),1)])])]),u(_,{class:"case-slider-price",to:"/product/"+n.data.article},{default:f(()=>[s("div",Js,[k(" \u20BD "+c(n.data.price),1),s("span",Ks,c(n.data.priceType),1)])]),_:1},8,["to"])])])}var Zs=v(Gs,[["render",Qs]]);const sa={components:{CaseCard:Zs,PreloaderLocal:T},setup(){const a=w(b);let e=C(!1);$(()=>{a.getters.isShowCases||(e.value=!0,a.dispatch(F.GET_CASE).finally(()=>{e.value=!1}).catch(()=>{}))});let n=()=>{a.commit(x.SET_CASE_NEXT)},t=()=>{a.commit(x.SET_CASE_PREV)};return{loading:e,isLoad:p(()=>a.getters.isCases),showCases:p(()=>a.getters.getCases),next:n,previous:t}}},aa={class:"case-slider-wrap"};function ea(a,e,n,t,l,g){const _=d("preloader-local"),h=d("case-card");return o(),i("div",aa,[s("div",{class:"case-slider-arrow prev",onClick:e[0]||(e[0]=(...r)=>t.previous&&t.previous(...r))}),t.loading?(o(),m(_,{key:0})):y("",!0),t.isLoad?(o(),m(G,{key:1,class:"case-slider",tag:"div"},{default:f(()=>[(o(!0),i(L,null,N(t.showCases,r=>(o(),m(h,{key:r.id,data:r},null,8,["data"]))),128))]),_:1})):y("",!0),s("div",{class:"case-slider-arrow next",onClick:e[1]||(e[1]=(...r)=>t.next&&t.next(...r))})])}var ta=v(sa,[["render",ea]]);const oa=E({components:{Notification:D,PersonalBar:M,CompanyBar:bs,News:Vs,ShowCases:ta},setup(){const a=w(b),e=C(!1);return $(()=>{a.getters.isCompanysLoad||(e.value=!0,a.dispatch(O.GET_COMPANYS).finally(()=>e.value=!1))}),{loading:e,randomCase:p(()=>a.getters.getRandomCase),companys:p(()=>a.getters.getCompanys)}}}),na={class:"top-line main-page"},ca={class:"content-wrap content-main-wrap"},da={class:"content-wrap-elem"},ia={key:0,class:"content-wrap-elem"},ra={class:"banner-img-box"},la=["src"],_a=s("div",{class:"banner-btn"},"\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435",-1);function ua(a,e,n,t,l,g){const _=d("Notification"),h=d("PersonalBar"),r=d("CompanyBar"),A=d("news"),S=d("show-cases"),B=d("router-link");return o(),i("div",null,[s("div",na,[u(_),u(h)]),u(r,{data:a.companys,loading:a.loading},null,8,["data","loading"]),s("div",ca,[s("div",da,[u(A),u(S)]),a.randomCase?(o(),i("div",ia,[u(B,{class:"banner",to:"/product/"+a.randomCase.article},{default:f(()=>[s("div",ra,[s("img",{class:"banner-img",src:a.randomCase.image,alt:""},null,8,la)]),_a]),_:1},8,["to"])])):y("",!0)])])}var va=v(oa,[["render",ua]]);export{va as default};