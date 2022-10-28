import{N as S,_ as N}from"./PersonalBar.e2416ec8.js";import{d as E,r as _,o as n,c as m,w as f,a as s,t as c,u as v,n as D,b as d,_ as w,F as L,e as T,f as b,g as C,h as $,N as B,i as h,j as y,k as x,l,C as M,T as H,m as k,p as P}from"./index.933e68e4.js";import{P as A}from"./PreloaderLocal.89d6e863.js";const V={class:"company-card-name"},F={class:"company-card-box orange"},G={key:0,class:"company-card-row"},O={class:"company-card-title"},j={class:"company-card-info"},R={class:"company-card-info-row"},U=["innerHTML"],q={class:"company-card-value"},z={class:"company-card-sale small"},W={class:"company-card-sale-box"},X=s("span",{class:"company-card-sale-text"},"\u0421\u043A\u0438\u0434\u043A\u0430",-1),Y={class:"company-card-sale-value"},I={key:1,class:"company-card-row"},J=s("div",{class:"company-card-title"},[s("br")],-1),K=s("div",{class:"company-card-info"},[s("br"),s("br")],-1),Q=[J,K],Z={key:2,class:"company-card-row"},ss={class:"company-card-title"},as={class:"company-card-info"},es={class:"company-card-info-row"},ts=["innerHTML"],os={class:"company-card-value"},ns={class:"company-card-sale small"},cs={class:"company-card-sale-box"},ds=s("span",{class:"company-card-sale-text"},"\u0421\u043A\u0438\u0434\u043A\u0430",-1),is={class:"company-card-sale-value"},rs={key:3,class:"company-card-row"},ls=s("div",{class:"company-card-title"},[s("br")],-1),_s=s("div",{class:"company-card-info"},[s("br"),s("br")],-1),us=[ls,_s],ms=s("div",{class:"company-card-more"},"\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435",-1),hs=E({__name:"CompanyAboutSmallCard",props:{data:{type:Object}},setup(a){return(t,o)=>{const e=_("router-link");return n(),m(e,{tag:"a",class:"company-card-item",to:"/company/"+a.data.uid},{default:f(()=>[s("div",V,c(v(D)(a.data.name)),1),s("div",F,[a.data.storages&&a.data.storages[0]?(n(),d("div",G,[s("div",O,c(a.data.storages[0].name.replace(/(^|\s)\S/g,i=>i.toUpperCase()).replace(/(ООО)|(\")|(\s)|([а-я])/g,"")),1),s("div",j,[s("div",R,[s("span",{innerHTML:a.data.storages[0].balance-a.data.storages[0].debt<0?"\u0417\u0430\u0434\u043E\u043B\u0436\u0435\u043D\u043D\u043E\u0441\u0442\u044C:":"\u0411\u0430\u043B\u0430\u043D\u0441:"},null,8,U),s("span",q,"\xA0"+c(Number(a.data.storages[0].balance-a.data.storages[0].debt).toLocaleString("ru").substring(1))+" \u20BD",1)])]),s("div",z,[s("div",W,[X,s("div",Y,c(a.data.storages[0].discount)+" %",1)])])])):(n(),d("div",I,Q)),a.data.storages&&a.data.storages[1]?(n(),d("div",Z,[s("div",ss,c(a.data.storages[1].name.replace(/(^|\s)\S/g,i=>i.toUpperCase()).replace(/(ООО)|(\")|(\s)|([а-я])/g,"")),1),s("div",as,[s("div",es,[s("span",{innerHTML:a.data.storages[1].balance-a.data.storages[1].debt<0?"\u0417\u0430\u0434\u043E\u043B\u0436\u0435\u043D\u043D\u043E\u0441\u0442\u044C:":"\u0411\u0430\u043B\u0430\u043D\u0441:"},null,8,ts),s("span",os,"\xA0"+c(Number(a.data.storages[1].balance-a.data.storages[1].debt).toLocaleString("ru").substring(1))+" \u20BD",1)])]),s("div",ns,[s("div",cs,[ds,s("div",is,c(a.data.storages[1].discount)+" %",1)])])])):(n(),d("div",rs,us))]),ms]),_:1},8,["to"])}}}),ps={props:{data:{type:Array},loading:{type:Boolean,default:!1}},components:{CompanyAboutSmallCard:hs,PreloaderLocal:A}},vs={class:"company-card"},gs={class:"company-card-wrap"};function ys(a,t,o,e,i,g){const u=_("PreloaderLocal"),p=_("CompanyAboutSmallCard");return n(),d("div",vs,[s("div",gs,[o.loading?(n(),m(u,{key:0})):(n(!0),d(L,{key:1},T(o.data,r=>(n(),m(p,{key:r.id,data:r},null,8,["data"]))),128))])])}var fs=w(ps,[["render",ys]]);const ws={setup(){const a=b(),t=C(!1);return $(()=>{a.getters.isNews||(t.value=!0,a.dispatch(B.GET_NEWS).finally(()=>{t.value=!1}))}),{isLoad:h(()=>a.getters.isNews),news:h(()=>a.getters.getOneNews)}}},bs={key:0,class:"news",href:"https://psk.expert/novosti/"},Cs={class:"news-img-box"},$s=["src"],xs={class:"news-text"},ks={class:"news-heading"},Es={class:"news-heading-text"},Ls=["innerHTML"],Ts={class:"news-heading-date"},As=["innerHTML"],Ss={class:"news-description"},Ns=["innerHTML"];function Ds(a,t,o,e,i,g){return e.isLoad?(n(),d("a",bs,[s("div",Cs,[s("img",{class:"news-img",src:e.news.image,alt:""},null,8,$s)]),s("div",xs,[s("div",ks,[s("div",Es,[s("span",{innerHTML:e.news.title},null,8,Ls)]),s("div",Ts,[s("span",{innerHTML:e.news.date},null,8,As)])]),s("div",Ss,[s("span",{innerHTML:e.news.text},null,8,Ns)])])])):y("",!0)}var Bs=w(ws,[["render",Ds]]),Ms="/assets/horn.0cb48071.svg";const Hs={props:{data:{type:Object,reqired:!0}},mounted(){}},Ps={class:"case-slider-elem"},Vs={class:"case-slider-elem-wrap"},Fs={class:"case-slider-elem-box"},Gs=s("div",{class:"case-slider-new"},[s("div",{class:"case-slider-new-box"},[s("img",{class:"case-slider-new-img",src:Ms,alt:""}),s("div",{class:"case-slider-new-text"},"\u041D\u043E\u0432\u0438\u043D\u043A\u0430")])],-1),Os={class:"case-slider-img-box"},js=["src"],Rs={class:"case-slider-info"},Us={class:"case-slider-name"},qs={class:"case-slider-about"},zs={class:"case-slider-about-code"},Ws={class:"case-slider-price-val"},Xs={class:"case-slider-price-info"};function Ys(a,t,o,e,i,g){const u=_("router-link");return n(),d("div",Ps,[s("div",Vs,[s("div",Fs,[Gs,s("div",Os,[s("img",{class:"case-slider-img",src:o.data.image,alt:""},null,8,js)]),s("div",Rs,[s("div",Us,c(o.data.title),1),s("div",qs,[x(c(o.data.desc)+" ",1),s("span",zs,c(o.data.article),1)])])]),l(u,{class:"case-slider-price",to:"/product/"+o.data.article},{default:f(()=>[s("div",Ws,[x(" \u20BD "+c(o.data.price),1),s("span",Xs,c(o.data.priceType),1)])]),_:1},8,["to"])])])}var Is=w(Hs,[["render",Ys]]);const Js={components:{CaseCard:Is,PreloaderLocal:A},setup(){const a=b();let t=C(!1);$(()=>{a.getters.isShowCases||(t.value=!0,a.dispatch(M.GET_CASE).finally(()=>{t.value=!1}).catch(()=>{}))});let o=()=>{a.commit(k.SET_CASE_NEXT)},e=()=>{a.commit(k.SET_CASE_PREV)};return{loading:t,isLoad:h(()=>a.getters.isCases),showCases:h(()=>a.getters.getCases),next:o,previous:e}}},Ks={class:"case-slider-wrap"};function Qs(a,t,o,e,i,g){const u=_("preloader-local"),p=_("case-card");return n(),d("div",Ks,[s("div",{class:"case-slider-arrow prev",onClick:t[0]||(t[0]=(...r)=>e.previous&&e.previous(...r))}),e.loading?(n(),m(u,{key:0})):y("",!0),e.isLoad?(n(),m(H,{key:1,class:"case-slider",tag:"div"},{default:f(()=>[(n(!0),d(L,null,T(e.showCases,r=>(n(),m(p,{key:r.id,data:r},null,8,["data"]))),128))]),_:1})):y("",!0),s("div",{class:"case-slider-arrow next",onClick:t[1]||(t[1]=(...r)=>e.next&&e.next(...r))})])}var Zs=w(Js,[["render",Qs]]);const sa={class:"top-line main-page"},aa={class:"content-wrap content-main-wrap"},ea={class:"content-wrap-elem"},ta={key:0,class:"content-wrap-elem"},oa={class:"banner-img-box"},na=["src"],ca=s("div",{class:"banner-btn"},"\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435",-1),la=E({__name:"main",setup(a){const t=b(),o=C(!1);$(()=>{t.getters.isCompanysLoad||(o.value=!0,t.dispatch(P.GET_COMPANYS).finally(()=>o.value=!1))});const e=h(()=>t.getters.getRandomCase),i=h(()=>t.getters.getCompanys);return(g,u)=>{const p=_("router-link");return n(),d("div",null,[s("div",sa,[l(S),l(N)]),l(fs,{data:v(i),loading:o.value},null,8,["data","loading"]),s("div",aa,[s("div",ea,[l(Bs),l(Zs)]),v(e)?(n(),d("div",ta,[l(p,{class:"banner",to:"/product/"+v(e).article},{default:f(()=>[s("div",oa,[s("img",{class:"banner-img",src:v(e).image,alt:""},null,8,na)]),ca]),_:1},8,["to"])])):y("",!0)])])}}});export{la as default};
