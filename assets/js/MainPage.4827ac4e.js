import{N as S}from"./Notification.7b882dba.js";import{_ as T}from"./PersonalBar.6bcff152.js";import{d as L,r as _,o as t,c as h,w as y,a,t as d,u as f,n as N,b as n,_ as b,e as M,F as A,f as E,g as w,h as $,i as C,N as D,j as v,k as g,l as B,m as x,p as u,C as H,T as V,q as k,s as Z}from"./index.273d2b86.js";const P={class:"company-card-name"},F={class:"company-card-box orange"},G={key:0,class:"company-card-row"},O={class:"company-card-title"},j={class:"company-card-info"},q={class:"company-card-info-row"},R=["innerHTML"],U={key:0,class:"company-card-value"},z={key:1,class:"company-card-value"},W={class:"company-card-sale small"},X={class:"company-card-sale-box"},Y=a("span",{class:"company-card-sale-text"},"\u0421\u043A\u0438\u0434\u043A\u0430",-1),I={class:"company-card-sale-value"},J={key:1,class:"company-card-row"},K=a("div",{class:"company-card-title"},[a("br")],-1),Q=a("div",{class:"company-card-info"},[a("br"),a("br")],-1),aa=[K,Q],sa={key:2,class:"company-card-row"},ea={class:"company-card-title"},ta={class:"company-card-info"},oa={class:"company-card-info-row"},ca=["innerHTML"],na={key:0,class:"company-card-value"},da={key:1,class:"company-card-value"},ia={class:"company-card-sale small"},la={class:"company-card-sale-box"},ra=a("span",{class:"company-card-sale-text"},"\u0421\u043A\u0438\u0434\u043A\u0430",-1),ua={class:"company-card-sale-value"},_a={key:3,class:"company-card-row"},ma=a("div",{class:"company-card-title"},[a("br")],-1),ha=a("div",{class:"company-card-info"},[a("br"),a("br")],-1),va=[ma,ha],pa=a("div",{class:"company-card-more"},"\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435",-1),fa=L({__name:"CompanyAboutSmallCard",props:{data:{type:Object}},setup(s){return(o,c)=>{const e=_("router-link");return t(),h(e,{tag:"a",class:"company-card-item",to:"/company/"+s.data.uid},{default:y(()=>{var l;return[a("div",P,d(f(N)(s.data.name)),1),a("div",F,[s.data.storages&&s.data.storages[0]?(t(),n("div",G,[a("div",O,d(s.data.storages[0].name.replace(/(^|\s)\S/g,r=>r.toUpperCase()).replace(/(ООО)|(\")|(\s)|([а-я])/g,"")),1),a("div",j,[a("div",q,[a("span",{innerHTML:s.data.storages[0].balance-s.data.storages[0].debt<0?"\u0417\u0430\u0434\u043E\u043B\u0436\u0435\u043D\u043D\u043E\u0441\u0442\u044C:":"\u0411\u0430\u043B\u0430\u043D\u0441:"},null,8,R),s.data.storages[0].balance-s.data.storages[0].debt==0&&s.data.storages[0].balance-s.data.storages[0].balance==0?(t(),n("span",U,"\xA00\u20BD")):(t(),n("span",z,"\xA0"+d((l=Number(s.data.storages[0].balance-s.data.storages[0].debt))==null?void 0:l.toLocaleString("ru").substring(1))+" \u20BD",1))])]),a("div",W,[a("div",X,[Y,a("div",I,d(s.data.storages[0].discount)+" %",1)])])])):(t(),n("div",J,aa)),s.data.storages&&s.data.storages[1]?(t(),n("div",sa,[a("div",ea,d(s.data.storages[1].name.replace(/(^|\s)\S/g,r=>r.toUpperCase()).replace(/(ООО)|(\")|(\s)|([а-я])/g,"")),1),a("div",ta,[a("div",oa,[a("span",{innerHTML:s.data.storages[1].balance-s.data.storages[1].debt<0?"\u0417\u0430\u0434\u043E\u043B\u0436\u0435\u043D\u043D\u043E\u0441\u0442\u044C:":"\u0411\u0430\u043B\u0430\u043D\u0441:"},null,8,ca),s.data.storages[1].balance-s.data.storages[1].debt==0&&s.data.storages[1].balance-s.data.storages[1].balance==0?(t(),n("span",na,"\xA00\u20BD")):(t(),n("span",da,"\xA0"+d(Number(s.data.storages[1].balance-s.data.storages[1].debt).toLocaleString("ru").substring(1))+" \u20BD",1))])]),a("div",ia,[a("div",la,[ra,a("div",ua,d(s.data.storages[1].discount)+" %",1)])])])):(t(),n("div",_a,va))]),pa]}),_:1},8,["to"])}}}),ga={props:{data:{type:Array},loading:{type:Boolean,default:!1}},components:{CompanyAboutSmallCard:fa,PreloaderLocal:M}},ya={class:"company-card"},ba={class:"company-card-wrap"};function wa(s,o,c,e,l,r){const m=_("PreloaderLocal"),p=_("CompanyAboutSmallCard");return t(),n("div",ya,[a("div",ba,[c.loading?(t(),h(m,{key:0})):(t(!0),n(A,{key:1},E(c.data,i=>(t(),h(p,{key:i.id,data:i},null,8,["data"]))),128))])])}var $a=b(ga,[["render",wa]]);const Ca={setup(){const s=w(),o=$(!1);return C(()=>{s.getters.isNews||(o.value=!0,s.dispatch(D.GET_NEWS).finally(()=>{o.value=!1}))}),{isLoad:v(()=>s.getters.isNews),news:v(()=>s.getters.getOneNews)}}},xa={key:0,class:"news",href:"https://psk.expert/novosti/"},ka={class:"news-img-box"},La=["src"],Ma={class:"news-text"},Aa={class:"news-heading"},Ea={class:"news-heading-text"},Sa=["innerHTML"],Ta={class:"news-heading-date"},Na=["innerHTML"],Da={class:"news-description"},Ba=["innerHTML"];function Ha(s,o,c,e,l,r){return e.isLoad?(t(),n("a",xa,[a("div",ka,[a("img",{class:"news-img",src:e.news.image,alt:""},null,8,La)]),a("div",Ma,[a("div",Aa,[a("div",Ea,[a("span",{innerHTML:e.news.title},null,8,Sa)]),a("div",Ta,[a("span",{innerHTML:e.news.date},null,8,Na)])]),a("div",Da,[a("span",{innerHTML:e.news.text},null,8,Ba)])])])):g("",!0)}var Va=b(Ca,[["render",Ha]]);const Za={xmlns:"http://www.w3.org/2000/svg",width:"19",height:"15",fill:"none"},Pa=B('<path fill="#fff" d="M3.71 3.924a.464.464 0 1 1 .928 0v6.493a.464.464 0 1 1-.928 0V3.924ZM0 3.924a.464.464 0 1 1 .928 0v6.493a.464.464 0 1 1-.928 0V3.924Z"></path><path fill="#fff" d="M.464 4.388a.464.464 0 0 1 0-.927h3.71a.464.464 0 0 1 0 .927H.464ZM.464 10.88a.464.464 0 0 1 0-.927h3.71a.464.464 0 0 1 0 .928H.464Z"></path><path fill="#fff" d="M4.206 10.927a.494.494 0 1 1 .373-.915l8.023 3.273a.494.494 0 0 1-.373.915l-8.023-3.273ZM4.167 3.46a.494.494 0 1 0 .373.914l8.024-3.273a.494.494 0 0 0-.373-.914L4.167 3.46Z"></path><path fill="#fff" d="M12.892.678a.464.464 0 1 0-.927 0v12.985a.464.464 0 1 0 .927 0V.678Z"></path><path fill="#fff" fill-rule="evenodd" d="M16.279 4.592a.464.464 0 0 1 .833-.408l-.417.204.417-.204v.002l.003.006.009.018a6.28 6.28 0 0 1 .14.31c.091.205.211.493.331.826.236.652.492 1.527.492 2.289 0 .761-.256 1.636-.492 2.288a13.56 13.56 0 0 1-.471 1.137l-.009.018-.002.005-.001.001-.417-.203.417.203a.464.464 0 0 1-.833-.407m0 0 .002-.004.006-.014a5.992 5.992 0 0 0 .128-.281c.084-.191.196-.46.308-.77.228-.632.436-1.38.436-1.973 0-.593-.208-1.341-.436-1.974a12.672 12.672 0 0 0-.436-1.05l-.006-.015-.002-.004" clip-rule="evenodd"></path><path fill="#fff" fill-rule="evenodd" d="m14.458 5.578.001.002.006.01a4.127 4.127 0 0 1 .125.195c.082.134.191.321.3.537.228.451.414.946.414 1.313 0 .366-.186.861-.414 1.313a7.658 7.658 0 0 1-.425.732l-.006.01-.001.001a.464.464 0 0 0 .765.525l-.383-.263.383.263.001-.002.003-.004.009-.014a12.444 12.444 0 0 0 .144-.226c.092-.15.215-.36.338-.604.236-.467.514-1.13.514-1.731 0-.601-.278-1.265-.514-1.732a8.559 8.559 0 0 0-.45-.78l-.032-.05-.01-.014-.002-.004s-.001-.002-.384.26l.383-.26a.465.465 0 0 0-.765.523ZM5.506 12.454c-.532.368-1.352.73-2.26.395-.79-.291-1.251-.9-1.508-1.398a3.865 3.865 0 0 1-.334-.925l-.004-.019-.001-.006v-.003l.456-.08.457-.082c0-.001 0 0 0 0v.007l.009.036c.008.034.02.086.04.15.039.13.103.307.2.496.198.383.513.772 1.007.954.491.181.982.008 1.411-.288a3.454 3.454 0 0 0 .675-.62l.007-.01.368.284.367.283-.001.001-.001.002-.005.006-.014.017a4.117 4.117 0 0 1-.227.253c-.15.156-.37.36-.642.547Z" clip-rule="evenodd"></path>',6),Fa=[Pa];function Ga(s,o){return t(),n("svg",Za,Fa)}var Oa={render:Ga};const ja={props:{data:{type:Object,reqired:!0}},mounted(){}},qa={class:"case-slider-elem"},Ra={class:"case-slider-elem-wrap"},Ua={class:"case-slider-elem-box"},za=a("div",{class:"case-slider-new"},[a("div",{class:"case-slider-new-box"},[a("img",{class:"case-slider-new-img",src:Oa,alt:""}),a("div",{class:"case-slider-new-text"},"\u041D\u043E\u0432\u0438\u043D\u043A\u0430")])],-1),Wa={class:"case-slider-img-box"},Xa=["src"],Ya={class:"case-slider-info"},Ia={class:"case-slider-name"},Ja={class:"case-slider-about"},Ka={class:"case-slider-about-code"},Qa={class:"case-slider-price-val"},as={class:"case-slider-price-info"};function ss(s,o,c,e,l,r){const m=_("router-link");return t(),n("div",qa,[a("div",Ra,[a("div",Ua,[za,a("div",Wa,[a("img",{class:"case-slider-img",src:c.data.image,alt:""},null,8,Xa)]),a("div",Ya,[a("div",Ia,d(c.data.title),1),a("div",Ja,[x(d(c.data.desc)+" ",1),a("span",Ka,d(c.data.article),1)])])]),u(m,{class:"case-slider-price",to:"/product/"+c.data.article},{default:y(()=>[a("div",Qa,[x(" \u20BD "+d(c.data.price),1),a("span",as,d(c.data.priceType),1)])]),_:1},8,["to"])])])}var es=b(ja,[["render",ss]]);const ts={components:{CaseCard:es,PreloaderLocal:M},setup(){const s=w();let o=$(!1);C(()=>{s.getters.isShowCases||(o.value=!0,s.dispatch(H.GET_CASE).finally(()=>{o.value=!1}).catch(()=>{}))});let c=()=>{s.commit(k.SET_CASE_NEXT)},e=()=>{s.commit(k.SET_CASE_PREV)};return{loading:o,isLoad:v(()=>s.getters.isCases),showCases:v(()=>s.getters.getCases),next:c,previous:e}}},os={class:"case-slider-wrap"};function cs(s,o,c,e,l,r){const m=_("preloader-local"),p=_("case-card");return t(),n("div",os,[a("div",{class:"case-slider-arrow prev",onClick:o[0]||(o[0]=(...i)=>e.previous&&e.previous(...i))}),e.loading?(t(),h(m,{key:0})):g("",!0),e.isLoad?(t(),h(V,{key:1,class:"case-slider",tag:"div"},{default:y(()=>[(t(!0),n(A,null,E(e.showCases,i=>(t(),h(p,{key:i.id,data:i},null,8,["data"]))),128))]),_:1})):g("",!0),a("div",{class:"case-slider-arrow next",onClick:o[1]||(o[1]=(...i)=>e.next&&e.next(...i))})])}var ns=b(ts,[["render",cs]]);const ds={class:"top-line main-page"},is={class:"content-wrap content-main-wrap"},ls={class:"content-wrap-elem"},rs={key:0,class:"content-wrap-elem"},us={class:"banner-img-box"},_s=["src"],ms=a("div",{class:"banner-btn"},"\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435",-1),fs=L({__name:"MainPage",setup(s){const o=w(),c=$(!1);C(()=>{o.getters.isCompanysLoad||(c.value=!0,o.dispatch(Z.GET_COMPANYS).finally(()=>c.value=!1))});const e=v(()=>o.getters.getRandomCase),l=v(()=>o.getters.getCompanys);return(r,m)=>{const p=_("router-link");return t(),n("div",null,[a("div",ds,[u(S),u(T)]),u($a,{data:f(l),loading:c.value},null,8,["data","loading"]),a("div",is,[a("div",ls,[u(Va),u(ns)]),f(e)?(t(),n("div",rs,[u(p,{class:"banner",to:"/product/"+f(e).article},{default:y(()=>[a("div",us,[a("img",{class:"banner-img",src:f(e).image,alt:""},null,8,_s)]),ms]),_:1},8,["to"])])):g("",!0)])])}}});export{fs as default};
