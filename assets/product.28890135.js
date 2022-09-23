import{_ as z,N as K}from"./PersonalBar.37b1a68e.js";import{_ as j}from"./CompanyBarTop.730740c7.js";import{P as q,a as W,b as J,c as Q}from"./ProductInfoCard.d3a66d2e.js";import{d as T,_ as y,o as s,b as r,a as u,F as I,e as w,B as X,g as m,l as c,w as b,x as E,q as R,t as g,j as _,i as h,V as Z,f as V,Y as N,r as f,T as L,u as B,s as x,v as ee,z as te,a8 as k,a9 as H,aa as ue,ab as ae,ac as oe,c as M,k as se,h as re,p as de,M as ne}from"./index.60f7e3bc.js";import{A as U}from"./AmountInput.6ceb47a7.js";import{P as le}from"./PreloaderLocal.bc6a7cef.js";import{_ as ce}from"./TopNav.186fc368.js";const ie=T({props:{data:{type:Array},discount:{type:Number}},setup(){}}),pe={class:"content-elem"},ve={class:"product-more-info-table-wrap scroll-elem"},me={class:"table more-info-table"},_e=X('<div class="table-row table-heading"><div class="table-elem">\u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0430</div><div class="table-elem">\u041E\u0441\u0442\u0430\u0442\u043E\u043A</div><div class="table-elem">\u0426\u0435\u043D\u0430</div><div class="table-elem">\u041F\u043F / \u0414\u0430\u0442\u0430</div></div>',1),fe={class:"table-elem"},he=["innerHTML"],Ce={class:"table-elem"},ge=["innerHTML"],Pe={class:"table-elem"},$e=["innerHTML"],Ee={class:"table-elem"},be=["innerHTML"];function ye(t,e,l,d,i,p){return s(),r("div",pe,[u("div",ve,[u("div",me,[_e,(s(!0),r(I,null,w(t.data,n=>(s(),r("div",{class:"table-row",key:n.ID},[u("div",fe,[u("span",{innerHTML:n.CHARACTERISTIC},null,8,he)]),u("div",Ce,[u("span",{innerHTML:n.RESIDUE},null,8,ge)]),u("div",Pe,[u("span",{innerHTML:(n.PRICE?n.PRICE-n.PRICE/100*t.discount:0).toLocaleString("RU",{minimumFractionDigits:2,maximumFractionDigits:2}).replace(",",".")+" \u20BD"},null,8,$e)]),u("div",Ee,[u("span",{innerHTML:n.PPDATA.replaceAll("/","\xA0/\xA0")},null,8,be)])]))),128))])])])}var De=y(ie,[["render",ye]]);const Ae={setup(){return{show:m(!0)}}},Se={class:"product-addinfo content-elem content-elem-info"},Te={class:"content-elem-heading"},ke={key:0,class:"content-elem-bottom content-elem-desc content-hide"};function Ie(t,e,l,d,i,p){return s(),r("div",Se,[u("div",Te,[c(R,{name:"text",mode:"out-in"},{default:b(()=>[(s(),r("div",{key:d.show,class:E(d.show?"content-elem-heading-text":"hide-text")},"\u0414\u043E\u043F. \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B",2))]),_:1}),u("div",{class:"content-elem-heading-btn content-hide-btn",onClick:e[0]||(e[0]=n=>d.show=!d.show)},g(d.show?"\u0421\u043A\u0440\u044B\u0442\u044C \u2014":"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C +"),1)]),c(R,{name:"fade"},{default:b(()=>[d.show?(s(),r("div",ke," \u0421\u043E\u043E\u0431\u0449\u0430\u0435\u043C \u0432\u0430\u043C \u0447\u0442\u043E \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u043E \u041F\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044E \u041F\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438 \u2116 216 \u043E\u0442 29.02.2020 \u0434\u0430\u0442\u0430 \u0437\u0430\u043F\u0440\u0435\u0442\u0430 \u043E\u0431\u043E\u0440\u043E\u0442\u0430 \u043D\u0435\u043C\u0430\u0440\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0439 \u043E\u0431\u0443\u0432\u0438 \u043F\u0435\u0440\u0435\u043D\u0435\u0441\u0435\u043D\u0430 \u043D\u0430 1 \u0438\u044E\u043B\u044F 2020 \u0433\u043E\u0434\u0430. ")):_("",!0)]),_:1})])}var we=y(Ae,[["render",Ie],["__scopeId","data-v-3abff266"]]);const Re=T({props:{data:{type:Array}},components:{ProductSliderFullscreen:q},emits:["toOrder"],setup(t){var a;let e=m([]);const l=V(),d=h({get:()=>l.getters.getLoader,set:o=>l.commit(N.SET_LOADER,o)}),i=m(!1);return(a=t.data)==null||a.forEach((o,v)=>e.value.push({id:v,src:o})),Z(()=>{var o;e.value=[],(o=t.data)==null||o.forEach((v,P)=>e.value.push({id:P,src:v}))}),{loader:d,slides:e,fullscreen:i,next:()=>{const o=e.value.shift();e.value=e.value.concat(o)},previous:()=>{const o=e.value.pop();e.value=[o].concat(e.value)}}}}),Fe={class:"content-elem"},Oe={key:0,class:"product-slider-wrap"},Ve=["src"],Le=["src"],Be={class:"product-slider-buttons"};function Ue(t,e,l,d,i,p){const n=f("ProductSliderFullscreen");return s(),r("div",Fe,[t.loader?_("",!0):(s(),r("div",Oe,[u("button",{class:"product-slider-arrow prev",onClick:e[0]||(e[0]=(...a)=>t.previous&&t.previous(...a))}),c(L,{name:"product-slider-trans",class:"product-slider",tag:"div"},{default:b(()=>[(s(!0),r(I,null,w(t.slides,a=>(s(),r("div",{class:"product-slider-slide",key:a.id},[a.src?(s(),r("img",{key:0,src:a.src,onClick:e[1]||(e[1]=o=>t.fullscreen=!0)},null,8,Ve)):_("",!0)]))),128))]),_:1}),u("div",{class:"product-slider-arrow next",onClick:e[2]||(e[2]=(...a)=>t.next&&t.next(...a))}),c(L,{name:"product-slider-trans",class:"product-slider-small",tag:"div"},{default:b(()=>[(s(!0),r(I,null,w(t.slides,a=>(s(),r("div",{class:"product-slider-small-slide",key:a.id},[a.src?(s(),r("img",{key:0,src:a.src},null,8,Le)):_("",!0)]))),128))]),_:1})])),u("div",Be,[u("div",{class:"product-slider-link",style:{width:"100%"},onClick:e[3]||(e[3]=a=>t.$emit("toOrder",a.target.click))},"\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C")]),c(n,{modelValue:t.fullscreen,"onUpdate:modelValue":e[4]||(e[4]=a=>t.fullscreen=a),data:t.data},null,8,["modelValue","data"])])}var Ne=y(Re,[["render",Ue]]);const D=t=>(x("data-v-ba9d93fc"),t=t(),ee(),t),He={class:"product-parcel"},Me={class:"product-parcel-wrap"},Ge={class:"product-parcel-elem content-elem"},Ye={key:0,class:"content-hide"},ze={class:"product-parcel-row"},Ke=D(()=>u("div",{class:"product-parcel-text"},"\u041D\u0430\u0446\u0435\u043D\u043A\u0430: ",-1)),je={class:"product-parcel-value"},qe={class:"product-parcel-value-block"},We={class:"product-parcel-row"},Je=D(()=>u("div",{class:"product-parcel-text"},"\u0426\u0435\u043D\u0430 \u0441 \u043D\u0430\u0446\u0435\u043D\u043A\u043E\u0439: ",-1)),Qe={class:"product-parcel-value"},Xe={key:0,class:"product-parcel-text"},Ze={class:"product-parcel-elem content-elem"},xe={key:0,class:"content-hide"},et={class:"product-parcel-row"},tt=D(()=>u("div",{class:"product-parcel-text"},"\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E: ",-1)),ut={class:"product-parcel-row"},at=D(()=>u("div",{class:"product-parcel-text"},"\u0421\u0443\u043C\u043C\u0430: ",-1)),ot={class:"product-parcel-value"},st={class:"product-parcel-row"},rt=D(()=>u("div",{class:"product-parcel-text"},"\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0432\u0435\u0441: ",-1)),dt={class:"product-parcel-value"},nt={class:"product-parcel-row"},lt=D(()=>u("div",{class:"product-parcel-text"},"\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u043E\u0431\u044A\u0435\u043C: ",-1)),ct={class:"product-parcel-value"},it={key:0,class:"product-parcel-text"},pt=T({__name:"ProductParcelCard",props:{data:{type:Object},discount:{type:Number}},setup(t){const e=t,l=m(!0),d=m(1),i=m(0),p=m("percent"),n=h(()=>{var a;if((a=e.data)!=null&&a.PRICE_OPT){let o=e.discount?Number(e.data.PRICE_OPT)-Number(e.data.PRICE_OPT/100)*e.discount:e.data.PRICE_OPT;return p.value==="add"?Number(o)+Number(i.value):Number(o)+Number(o)/100*Number(i.value)}else return 0});return(a,o)=>(s(),r("div",He,[u("div",Me,[u("div",Ge,[c(R,{name:"fade1",mode:"out-in"},{default:b(()=>[l.value?(s(),r("div",Ye,[u("div",ze,[Ke,u("div",je,[u("div",qe,[c(U,{modelValue:i.value,"onUpdate:modelValue":o[0]||(o[0]=v=>i.value=v)},null,8,["modelValue"]),u("button",{class:E("product-parcel-btn"+(p.value==="percent"?" active":"")),onClick:o[1]||(o[1]=v=>p.value="percent")},"%",2),u("button",{class:E("product-parcel-btn"+(p.value==="add"?" active":"")),onClick:o[2]||(o[2]=v=>p.value="add")},"\u20BD",2)])])]),u("div",We,[Je,u("div",Qe,g(Number(B(n)).toLocaleString("RU",{minimumFractionDigits:2,maximumFractionDigits:2}).replace(",","."))+" \u20BD",1)])])):_("",!0)]),_:1}),l.value?_("",!0):(s(),r("div",Xe,"\u041D\u0430\u0446\u0435\u043D\u043A\u0430"))]),u("div",Ze,[c(R,{name:"fade2"},{default:b(()=>[l.value?(s(),r("div",xe,[u("div",et,[tt,c(U,{modelValue:d.value,"onUpdate:modelValue":o[3]||(o[3]=v=>d.value=v)},null,8,["modelValue"])]),u("div",ut,[at,u("div",ot,g(Number(B(n)*d.value).toLocaleString("RU",{minimumFractionDigits:2,maximumFractionDigits:2}).replace(",","."))+" \u20BD",1)]),u("div",st,[rt,u("div",dt,g((Number(t.data.WEIGHT?t.data.WEIGHT:0)*d.value).toFixed(3)),1)]),u("div",nt,[lt,u("div",ct,g((Number(t.data.VALUME?t.data.VALUME:0)*d.value).toFixed(3)),1)])])):_("",!0)]),_:1}),l.value?_("",!0):(s(),r("div",it,"\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E"))]),u("div",{class:"product-parcel-hide-btn content-hide-btn",onClick:o[4]||(o[4]=v=>l.value=!l.value)},g(l.value?"\u0421\u043A\u0440\u044B\u0442\u044C \u2014":"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C +"),1)])]))}});var vt=y(pt,[["__scopeId","data-v-ba9d93fc"]]);const mt=T({props:{modelValue:{type:String,required:!0}},emits:["update:modelValue","search"],components:{PreloaderLocal:le},setup(t,{emit:e}){const l=V(),d=m(""),i=m(!1),p=m(),n=m(null),a=m(!1),o=()=>{clearTimeout(p.value),a.value=!0,e("update:modelValue",d.value),i.value=!0,p.value=setTimeout(()=>{d.value.length>=2&&l.dispatch(k.SEARCH_PRODUCT_ARTICLE,d.value).then(()=>{setTimeout(()=>{i.value=!1},500)})},500)},v=()=>{d.value="",a.value=!1,l.commit(H.SET_PRODUCT_ARTICLS,[]),e("update:modelValue","")},P=A=>{a.value=!1,e("update:modelValue",A),e("search")};return te(n,()=>{a.value=!1}),{search_str:d,loading:i,target:n,show_options:a,articles:h(()=>l.getters.getProductArticles),doSearch:o,close:v,done:P}}}),_t={class:E("product-search "),ref:"target"},ft={class:"product-search-input-container"},ht={key:0},Ct={key:1},gt=["onClick"],Pt={class:"article"},$t=se(),Et={class:"name"},bt={key:0},yt={key:1},Dt=u("div",null,"\u041F\u043E\u0438\u0441\u043A",-1),At=[Dt];function St(t,e,l,d,i,p){const n=f("PreloaderLocal");return s(),r("div",_t,[u("div",ft,[u("div",{class:E("product-search-input"+(t.show_options?" options":""))},[ue(u("input",{type:"text",placeholder:"\u041F\u043E\u0438\u0441\u043A",autocomplete:"off",onKeyup:[e[0]||(e[0]=a=>t.doSearch()),e[1]||(e[1]=oe(a=>t.done(t.search_str),["enter"]))],"onUpdate:modelValue":e[2]||(e[2]=a=>t.search_str=a),onClick:e[3]||(e[3]=a=>t.show_options=!0)},null,544),[[ae,t.search_str]]),t.loading?(s(),M(n,{key:0,small:""})):_("",!0),u("div",{class:"product-search-clear",onClick:e[4]||(e[4]=a=>t.close())})],2),t.show_options?(s(),r("div",{key:0,class:E("product-search-input-options"+(t.search_str==""||t.articles.length==0?" default":""))},[t.search_str==""?(s(),r("span",ht,"\u0427\u0442\u043E\u0431\u044B \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u0437\u0430\u043A\u0430\u0437 \u043D\u043E\u0432\u044B\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0442 - \u043D\u0430\u0447\u043D\u0438\u0442\u0435 \u0432\u0432\u043E\u0434 \u0434\u043B\u044F \u043F\u043E\u0438\u0441\u043A\u0430 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430")):(s(),r("div",Ct,[(s(!0),r(I,null,w(t.articles,(a,o)=>(s(),r("p",{key:o,class:E("product-search-input-options-item"+(t.loading?" loading":""))},[u("a",{onClick:v=>{t.done(a.article),t.search_str=a.name}},[u("div",Pt,g(a.article),1),$t,u("div",Et,g(a.name),1)],8,gt)],2))),128)),t.loading&&t.articles.length==0?(s(),r("span",bt," \u041F\u043E\u0438\u0441\u043A...")):_("",!0),!t.loading&&t.articles.length==0?(s(),r("span",yt," \u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E")):_("",!0)]))],2)):_("",!0)]),u("button",{class:"product-search-btn gradient-btn",onClick:e[5]||(e[5]=a=>t.doSearch())},At)],512)}var Tt=y(mt,[["render",St]]);const kt=T({components:{PersonalBar:z,Notification:K,CompanyBarTop:j,ProductHeaderCard:W,ProductSearchResultCard:J,ProductOffersCard:De,ProductAddInfoCard:we,ProductSliderCard:Ne,ProductParcelCard:vt,ProductInfoCard:Q,ProductSearchInput:Tt,TopNav:ce},props:["article"],setup(t){const e=V(),l=ne(),d=h({get:()=>e.getters.getLoader,set:$=>e.commit(N.SET_LOADER,$)}),i=m(""),p=m(""),n=m(!1),a=m(""),o=m(!0),v=()=>{l.push({name:"Order"})};re(()=>{(!e.getters.isCompanysLoad||!e.getters.isManagerLoad)&&Promise.all([e.dispatch(de.GET_COMPANYS)]).finally(()=>{setTimeout(()=>{i.value=e.getters.getCompanys===[]?"":e.getters.getCompanys[0].uid},500)}),t.article!==""&&t.article!==void 0&&(d.value=!0,e.dispatch(k.SEARCH_PRODUCT,t.article).then(()=>{n.value=!0,e.getters.getProduct.ID?a.value=e.getters.getProduct.ID:l.push({name:"Product"})}).finally(()=>{d.value=!1}))});const P=h(()=>{let $=e.getters.getProduct.STATUS;return $=="Outlet"||$=="Discount"||$=="Activity"?0:e.getters.getCompanyDiscount(i.value,e.getters.getProductOffersORGGUID)}),A=()=>{d.value=!0,e.dispatch(k.GET_PRODUCT_BY_ID,a.value).then(()=>{a.value=e.getters.getProduct.ID}).finally(()=>{d.value=!1})},S=()=>{n.value=!1,e.commit(H.SET_SEARCH_PRODUCT_CLEAR)},F=()=>{p.value.trim()!==""&&(S(),d.value=!0,e.dispatch(k.SEARCH_PRODUCT,p.value).then(()=>{n.value=!0,a.value=e.getters.getProduct.ID}).finally(()=>{d.value=!1}))},O=()=>{S(),p.value="",l.push("/product")};return{companyBarTopData:h(()=>e.getters.getCompanysList),resultSearch:h(()=>e.getters.getProductSearchResult),productOffers:h(()=>e.getters.getProductOffers),product:h(()=>e.getters.getProduct),productFound:h(()=>e.getters.getProductFound),productImages:h(()=>e.getters.getProductImages),productProtect:h(()=>e.getters.getProductProtect),discount:P,productSearch:o,isLoad:n,activeCompanyUid:i,activeProductId:a,search_str:p,doSearch:F,clearSearch:S,loadProduct:A,toOrder:v,newSearch:O}}}),It={class:"top-line product-page"},wt={key:0},Rt=u("br",null,null,-1),Ft={key:1,class:"content-wrap content-product-wrap"},Ot={class:"content-wrap-elem"},Vt={class:"content-elem-desc"},Lt={class:"content-wrap-elem"},Bt={key:1},Ut={key:0};function Nt(t,e,l,d,i,p){const n=f("CompanyBarTop"),a=f("Notification"),o=f("PersonalBar"),v=f("top-nav"),P=f("ProductSearchInput"),A=f("ProductHeaderCard"),S=f("ProductSearchResultCard"),F=f("ProductOffersCard"),O=f("ProductAddInfoCard"),$=f("ProductSliderCard"),G=f("ProductParcelCard"),Y=f("ProductInfoCard");return s(),r("div",null,[u("div",It,[c(n,{data:t.companyBarTopData,modelValue:t.activeCompanyUid,"onUpdate:modelValue":e[0]||(e[0]=C=>t.activeCompanyUid=C)},null,8,["data","modelValue"]),c(a),c(o)]),c(v,{catalog:""}),c(P,{modelValue:t.search_str,"onUpdate:modelValue":e[1]||(e[1]=C=>t.search_str=C),onSearch:e[2]||(e[2]=C=>t.doSearch())},null,8,["modelValue"]),t.productFound.length>0?(s(),r("div",wt,[t.isLoad?(s(),M(A,{key:0,title:String(t.product.NAME),price:String(t.product.PRICE_OPT),status:String(t.product.STATUS),discount:t.discount,onShowSearch:e[3]||(e[3]=C=>t.newSearch())},null,8,["title","price","status","discount"])):_("",!0),Rt,t.isLoad?(s(),r("div",Ft,[u("div",Ot,[c(S,{data:t.productFound,cardType:"search",modelValue:t.activeProductId,"onUpdate:modelValue":e[4]||(e[4]=C=>t.activeProductId=C),onOnClick:e[5]||(e[5]=C=>t.loadProduct())},null,8,["data","modelValue"]),u("div",Vt,[c(F,{data:t.productOffers,discount:t.discount},null,8,["data","discount"])]),c(O)]),u("div",Lt,[c($,{data:t.productImages,onToOrder:t.toOrder},null,8,["data","onToOrder"]),c(G,{data:t.product,discount:t.discount},null,8,["data","discount"]),c(Y,{data:t.product,protect:t.productProtect},null,8,["data","protect"])])])):_("",!0)])):(s(),r("div",Bt,[t.isLoad?(s(),r("div",Ut,"\u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E")):_("",!0)]))])}var qt=y(kt,[["render",Nt]]);export{qt as default};
