import{_ as Y,N as q}from"./PersonalBar.48aee952.js";import{_ as z}from"./CompanyBarTop.5ee1f250.js";import{P as K,a as W,b as j,c as Z}from"./ProductInfoCard.0af66342.js";import{d as R,_ as w,o as r,b as d,a as u,F,e as O,B as J,g as f,l as p,w as D,x as y,q as V,t as $,j as h,i as P,W as Q,f as L,Z as M,r as C,T as N,u as A,s as X,v as ee,z as te,a9 as ue,aa as ae,ab as oe,c as x,k as se,ac as I,ad as G,h as re,p as de,I as ne,M as le}from"./index.27b8292e.js";import{A as H}from"./AmountInput.46054879.js";import{P as ce}from"./PreloaderLocal.4f88a1f0.js";import{_ as ie}from"./TopNav.efb054df.js";const pe=R({props:{data:{type:Array,required:!0},discount:{type:Number,required:!0}},setup(){}}),ve={class:"content-elem"},me={class:"product-more-info-table-wrap scroll-elem"},_e={class:"table more-info-table"},fe=J('<div class="table-row table-heading"><div class="table-elem">\u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0430</div><div class="table-elem">\u041E\u0441\u0442\u0430\u0442\u043E\u043A</div><div class="table-elem">\u0426\u0435\u043D\u0430</div><div class="table-elem">\u041F\u043F / \u0414\u0430\u0442\u0430</div></div>',1),he={class:"table-elem"},Ce=["innerHTML"],Pe={class:"table-elem"},ge=["innerHTML"],Ee={class:"table-elem"},$e=["innerHTML"],be={class:"table-elem"},ye=["innerHTML"];function De(t,e,l,o,c,v){return r(),d("div",ve,[u("div",me,[u("div",_e,[fe,(r(!0),d(F,null,O(t.data,n=>(r(),d("div",{class:"table-row",key:n.ID},[u("div",he,[u("span",{innerHTML:n.CHARACTERISTIC},null,8,Ce)]),u("div",Pe,[u("span",{innerHTML:n.RESIDUE},null,8,ge)]),u("div",Ee,[u("span",{innerHTML:(n.PRICE?n.PRICE-n.PRICE/100*t.discount:0).toLocaleString("RU",{minimumFractionDigits:2,maximumFractionDigits:2}).replace(",",".")+" \u20BD"},null,8,$e)]),u("div",be,[u("span",{innerHTML:n.PPDATA?n.PPDATA.replaceAll("/","\xA0/\xA0"):""},null,8,ye)])]))),128))])])])}var Ae=w(pe,[["render",De]]);const Te={setup(){return{show:f(!0)}}},Se={class:"product-addinfo content-elem content-elem-info"},ke={class:"content-elem-heading"},Ie={key:0,class:"content-elem-bottom content-elem-desc content-hide"};function Re(t,e,l,o,c,v){return r(),d("div",Se,[u("div",ke,[p(V,{name:"text",mode:"out-in"},{default:D(()=>[(r(),d("div",{key:o.show,class:y(o.show?"content-elem-heading-text":"hide-text")},"\u0414\u043E\u043F. \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B",2))]),_:1}),u("div",{class:"content-elem-heading-btn content-hide-btn",onClick:e[0]||(e[0]=n=>o.show=!o.show)},$(o.show?"\u0421\u043A\u0440\u044B\u0442\u044C \u2014":"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C +"),1)]),p(V,{name:"fade"},{default:D(()=>[o.show?(r(),d("div",Ie," \u0421\u043E\u043E\u0431\u0449\u0430\u0435\u043C \u0432\u0430\u043C \u0447\u0442\u043E \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u043E \u041F\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044E \u041F\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438 \u2116 216 \u043E\u0442 29.02.2020 \u0434\u0430\u0442\u0430 \u0437\u0430\u043F\u0440\u0435\u0442\u0430 \u043E\u0431\u043E\u0440\u043E\u0442\u0430 \u043D\u0435\u043C\u0430\u0440\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0439 \u043E\u0431\u0443\u0432\u0438 \u043F\u0435\u0440\u0435\u043D\u0435\u0441\u0435\u043D\u0430 \u043D\u0430 1 \u0438\u044E\u043B\u044F 2020 \u0433\u043E\u0434\u0430. ")):h("",!0)]),_:1})])}var we=w(Te,[["render",Re],["__scopeId","data-v-3abff266"]]);const Fe=R({props:{data:{type:Array}},components:{ProductSliderFullscreen:K},emits:["toOrder"],setup(t){var a;let e=f([]);const l=L(),o=P({get:()=>l.getters.getLoader,set:s=>l.commit(M.SET_LOADER,s)}),c=f(!1);return(a=t.data)==null||a.forEach((s,_)=>e.value.push({id:_,src:s})),Q(()=>{var s;e.value=[],(s=t.data)==null||s.forEach((_,b)=>e.value.push({id:b,src:_}))}),{loader:o,slides:e,fullscreen:c,next:()=>{const s=e.value.shift();e.value=e.value.concat(s)},previous:()=>{const s=e.value.pop();e.value=[s].concat(e.value)}}}}),Oe={class:"content-elem"},Ve={key:0,class:"product-slider-wrap"},Be=["src"],Le=["src"],Ue={class:"product-slider-buttons"};function Ne(t,e,l,o,c,v){const n=C("ProductSliderFullscreen");return r(),d("div",Oe,[t.loader?h("",!0):(r(),d("div",Ve,[u("button",{class:"product-slider-arrow prev",onClick:e[0]||(e[0]=(...a)=>t.previous&&t.previous(...a))}),p(N,{name:"product-slider-trans",class:"product-slider",tag:"div"},{default:D(()=>[(r(!0),d(F,null,O(t.slides,a=>(r(),d("div",{class:"product-slider-slide",key:a.id},[a.src?(r(),d("img",{key:0,src:a.src,onClick:e[1]||(e[1]=s=>t.fullscreen=!0)},null,8,Be)):h("",!0)]))),128))]),_:1}),u("div",{class:"product-slider-arrow next",onClick:e[2]||(e[2]=(...a)=>t.next&&t.next(...a))}),p(N,{name:"product-slider-trans",class:"product-slider-small",tag:"div"},{default:D(()=>[(r(!0),d(F,null,O(t.slides,a=>(r(),d("div",{class:"product-slider-small-slide",key:a.id},[a.src?(r(),d("img",{key:0,src:a.src},null,8,Le)):h("",!0)]))),128))]),_:1})])),u("div",Ue,[u("div",{class:"product-slider-link",style:{width:"100%"},onClick:e[3]||(e[3]=a=>t.$emit("toOrder",a.target.click))},"\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C")]),p(n,{modelValue:t.fullscreen,"onUpdate:modelValue":e[4]||(e[4]=a=>t.fullscreen=a),data:t.data},null,8,["modelValue","data"])])}var He=w(Fe,[["render",Ne]]);const T=t=>(X("data-v-ba9d93fc"),t=t(),ee(),t),Me={class:"product-parcel"},xe={class:"product-parcel-wrap"},Ge={class:"product-parcel-elem content-elem"},Ye={key:0,class:"content-hide"},qe={class:"product-parcel-row"},ze=T(()=>u("div",{class:"product-parcel-text"},"\u041D\u0430\u0446\u0435\u043D\u043A\u0430: ",-1)),Ke={class:"product-parcel-value"},We={class:"product-parcel-value-block"},je={class:"product-parcel-row"},Ze=T(()=>u("div",{class:"product-parcel-text"},"\u0426\u0435\u043D\u0430 \u0441 \u043D\u0430\u0446\u0435\u043D\u043A\u043E\u0439: ",-1)),Je={class:"product-parcel-value"},Qe={key:0,class:"product-parcel-text"},Xe={class:"product-parcel-elem content-elem"},et={key:0,class:"content-hide"},tt={class:"product-parcel-row"},ut=T(()=>u("div",{class:"product-parcel-text"},"\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E: ",-1)),at={class:"product-parcel-row"},ot=T(()=>u("div",{class:"product-parcel-text"},"\u0421\u0443\u043C\u043C\u0430: ",-1)),st={class:"product-parcel-value"},rt={class:"product-parcel-row"},dt=T(()=>u("div",{class:"product-parcel-text"},"\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0432\u0435\u0441: ",-1)),nt={class:"product-parcel-value"},lt={class:"product-parcel-row"},ct=T(()=>u("div",{class:"product-parcel-text"},"\u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u043E\u0431\u044A\u0435\u043C: ",-1)),it={class:"product-parcel-value"},pt={key:0,class:"product-parcel-text"},vt=R({__name:"ProductParcelCard",props:{data:{type:Object},discount:{type:Number}},setup(t){const e=t,l=f(!0),o=f(1),c=f(0),v=f("percent"),n=P(()=>{var a;if((a=e.data)!=null&&a.PRICE_OPT){let s=e.discount?Number(e.data.PRICE_OPT)-Number(e.data.PRICE_OPT/100)*e.discount:e.data.PRICE_OPT;return v.value==="add"?Number(s)+Number(c.value):Number(s)+Number(s)/100*Number(c.value)}else return 0});return(a,s)=>(r(),d("div",Me,[u("div",xe,[u("div",Ge,[p(V,{name:"fade1",mode:"out-in"},{default:D(()=>[l.value?(r(),d("div",Ye,[u("div",qe,[ze,u("div",Ke,[u("div",We,[p(H,{modelValue:c.value,"onUpdate:modelValue":s[0]||(s[0]=_=>c.value=_)},null,8,["modelValue"]),u("button",{class:y("product-parcel-btn"+(v.value==="percent"?" active":"")),onClick:s[1]||(s[1]=_=>v.value="percent")},"%",2),u("button",{class:y("product-parcel-btn"+(v.value==="add"?" active":"")),onClick:s[2]||(s[2]=_=>v.value="add")},"\u20BD",2)])])]),u("div",je,[Ze,u("div",Je,$(Number(A(n)).toLocaleString("RU",{minimumFractionDigits:2,maximumFractionDigits:2}).replace(",","."))+" \u20BD",1)])])):h("",!0)]),_:1}),l.value?h("",!0):(r(),d("div",Qe,"\u041D\u0430\u0446\u0435\u043D\u043A\u0430"))]),u("div",Xe,[p(V,{name:"fade2"},{default:D(()=>[l.value?(r(),d("div",et,[u("div",tt,[ut,p(H,{modelValue:o.value,"onUpdate:modelValue":s[3]||(s[3]=_=>o.value=_)},null,8,["modelValue"])]),u("div",at,[ot,u("div",st,$(Number(A(n)*o.value).toLocaleString("RU",{minimumFractionDigits:2,maximumFractionDigits:2}).replace(",","."))+" \u20BD",1)]),u("div",rt,[dt,u("div",nt,$((Number(t.data.WEIGHT?t.data.WEIGHT:0)*o.value).toFixed(3)),1)]),u("div",lt,[ct,u("div",it,$((Number(t.data.VALUME?t.data.VALUME:0)*o.value).toFixed(3)),1)])])):h("",!0)]),_:1}),l.value?h("",!0):(r(),d("div",pt,"\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E"))]),u("div",{class:"product-parcel-hide-btn content-hide-btn",onClick:s[4]||(s[4]=_=>l.value=!l.value)},$(l.value?"\u0421\u043A\u0440\u044B\u0442\u044C \u2014":"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C +"),1)])]))}});var mt=w(vt,[["__scopeId","data-v-ba9d93fc"]]);const _t={class:"product-search-input-container"},ft={key:0},ht={key:1},Ct={class:"article"},Pt=se(),gt={class:"name"},Et={key:0},$t={key:1},bt=u("div",null,"\u041F\u043E\u0438\u0441\u043A",-1),yt=[bt],Dt=R({__name:"ProductSearchInput",props:{modelValue:{type:String,required:!0}},emits:["update:modelValue","search"],setup(t,{emit:e}){const l=L(),o=f(""),c=f(!1),v=f(),n=f(null),a=f(!1),s=P(()=>l.getters.getProductArticles),_=()=>{clearTimeout(v.value),a.value=!0,e("update:modelValue",o.value),c.value=!0,v.value=setTimeout(()=>{o.value.length>=2&&l.dispatch(I.SEARCH_PRODUCT_ARTICLE,o.value).then(()=>{setTimeout(()=>{c.value=!1},500)})},500)},b=()=>{o.value="",a.value=!1,l.commit(G.SET_PRODUCT_ARTICLS,[]),e("update:modelValue","")},S=g=>{a.value=!1,e("update:modelValue",g),e("search")};return te(n,()=>{a.value=!1}),(g,m)=>{const k=C("router-link");return r(),d("div",{class:y("product-search "),ref_key:"target",ref:n},[u("div",_t,[u("div",{class:y("product-search-input"+(a.value?" options":""))},[ue(u("input",{type:"text",placeholder:"\u041F\u043E\u0438\u0441\u043A",autocomplete:"off",onKeyup:[m[0]||(m[0]=i=>_()),m[1]||(m[1]=oe(i=>S(o.value),["enter"]))],"onUpdate:modelValue":m[2]||(m[2]=i=>o.value=i),onClick:m[3]||(m[3]=i=>a.value=!0)},null,544),[[ae,o.value]]),c.value?(r(),x(ce,{key:0,small:""})):h("",!0),u("div",{class:"product-search-clear",onClick:m[4]||(m[4]=i=>b())})],2),a.value?(r(),d("div",{key:0,class:y("product-search-input-options"+(o.value==""||A(s).length==0?" default":""))},[o.value==""?(r(),d("span",ft,"\u0427\u0442\u043E\u0431\u044B \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u0437\u0430\u043A\u0430\u0437 \u043D\u043E\u0432\u044B\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0442 - \u043D\u0430\u0447\u043D\u0438\u0442\u0435 \u0432\u0432\u043E\u0434 \u0434\u043B\u044F \u043F\u043E\u0438\u0441\u043A\u0430 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430")):(r(),d("div",ht,[(r(!0),d(F,null,O(A(s),(i,B)=>(r(),d("p",{key:B,class:y("product-search-input-options-item"+(c.value?" loading":""))},[p(k,{tag:"a",to:"/product/"+i.article,onClick:m[5]||(m[5]=U=>a.value=!1)},{default:D(()=>[u("div",Ct,$(i.article),1),Pt,u("div",gt,$(i.name),1)]),_:2},1032,["to"])],2))),128)),c.value&&A(s).length==0?(r(),d("span",Et," \u041F\u043E\u0438\u0441\u043A...")):h("",!0),!c.value&&A(s).length==0?(r(),d("span",$t," \u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E")):h("",!0)]))],2)):h("",!0)]),u("button",{class:"product-search-btn gradient-btn",onClick:m[6]||(m[6]=i=>_())},yt)],512)}}}),At=R({components:{PersonalBar:Y,Notification:q,CompanyBarTop:z,ProductHeaderCard:W,ProductSearchResultCard:j,ProductOffersCard:Ae,ProductAddInfoCard:we,ProductSliderCard:He,ProductParcelCard:mt,ProductInfoCard:Z,ProductSearchInput:Dt,TopNav:ie},props:["article"],setup(t){const e=L(),l=le(),o=P({get:()=>e.getters.getLoader,set:i=>e.commit(M.SET_LOADER,i)}),c=f(""),v=f(""),n=f(!1),a=f(""),s=f(!0),_=()=>{l.push({name:"Order"})};re(()=>{(!e.getters.isCompanysLoad||!e.getters.isManagerLoad)&&Promise.all([e.dispatch(de.GET_COMPANYS)]).finally(()=>{setTimeout(()=>{c.value=e.getters.getCompanys.length==0?"":e.getters.getCompanys[0].uid},500)}),t.article!==""&&t.article!==void 0&&(o.value=!0,e.dispatch(I.SEARCH_PRODUCT,t.article).then(()=>{n.value=!0,e.getters.getProduct.ID?a.value=e.getters.getProduct.ID:l.push({name:"Product"})}).finally(()=>{o.value=!1}))}),ne(()=>t.article,i=>{i!==""&&i!==void 0&&(o.value=!0,e.dispatch(I.SEARCH_PRODUCT,t.article).then(()=>{n.value=!0,e.getters.getProduct.ID?a.value=e.getters.getProduct.ID:l.push({name:"Product"})}).finally(()=>{o.value=!1}))});const b=P(()=>{let i=e.getters.getProduct.STATUS;return i=="Outlet"||i=="Discount"||i=="Activity"?0:e.getters.getCompanyDiscount(c.value,e.getters.getProductOffersORGGUID)}),S=()=>{o.value=!0,e.dispatch(I.GET_PRODUCT_BY_ID,a.value).then(()=>{a.value=e.getters.getProduct.ID}).finally(()=>{o.value=!1})},g=()=>{n.value=!1,e.commit(G.SET_SEARCH_PRODUCT_CLEAR)},m=()=>{v.value.trim()!==""&&(g(),o.value=!0,e.dispatch(I.SEARCH_PRODUCT,v.value).then(()=>{n.value=!0,a.value=e.getters.getProduct.ID}).finally(()=>{o.value=!1}))},k=()=>{g(),v.value="",l.push("/product")};return{companyBarTopData:P(()=>e.getters.getCompanysList),resultSearch:P(()=>e.getters.getProductSearchResult),productOffers:P(()=>e.getters.getProductOffers),product:P(()=>e.getters.getProduct),productFound:P(()=>e.getters.getProductFound),productImages:P(()=>e.getters.getProductImages),productProtect:P(()=>e.getters.getProductProtect),discount:b,productSearch:s,isLoad:n,activeCompanyUid:c,activeProductId:a,search_str:v,doSearch:m,clearSearch:g,loadProduct:S,toOrder:_,newSearch:k}}}),Tt={class:"top-line product-page"},St={key:0},kt=u("br",null,null,-1),It={key:1,class:"content-wrap content-product-wrap"},Rt={class:"content-wrap-elem"},wt={class:"content-elem-desc"},Ft={class:"content-wrap-elem"},Ot={key:1},Vt={key:0};function Bt(t,e,l,o,c,v){const n=C("CompanyBarTop"),a=C("Notification"),s=C("PersonalBar"),_=C("top-nav"),b=C("ProductSearchInput"),S=C("ProductHeaderCard"),g=C("ProductSearchResultCard"),m=C("ProductOffersCard"),k=C("ProductAddInfoCard"),i=C("ProductSliderCard"),B=C("ProductParcelCard"),U=C("ProductInfoCard");return r(),d("div",null,[u("div",Tt,[p(n,{data:t.companyBarTopData,modelValue:t.activeCompanyUid,"onUpdate:modelValue":e[0]||(e[0]=E=>t.activeCompanyUid=E)},null,8,["data","modelValue"]),p(a),p(s)]),p(_,{catalog:""}),p(b,{modelValue:t.search_str,"onUpdate:modelValue":e[1]||(e[1]=E=>t.search_str=E),onSearch:e[2]||(e[2]=E=>t.doSearch())},null,8,["modelValue"]),t.productFound.length>0?(r(),d("div",St,[t.isLoad?(r(),x(S,{key:0,title:String(t.product.NAME),price:String(t.product.PRICE_OPT),status:String(t.product.STATUS),discount:t.discount,onShowSearch:e[3]||(e[3]=E=>t.newSearch())},null,8,["title","price","status","discount"])):h("",!0),kt,t.isLoad?(r(),d("div",It,[u("div",Rt,[p(g,{data:t.productFound,cardType:"search",modelValue:t.activeProductId,"onUpdate:modelValue":e[4]||(e[4]=E=>t.activeProductId=E),onOnClick:e[5]||(e[5]=E=>t.loadProduct())},null,8,["data","modelValue"]),u("div",wt,[p(m,{data:t.productOffers,discount:t.discount},null,8,["data","discount"])]),p(k)]),u("div",Ft,[p(i,{data:t.productImages,onToOrder:t.toOrder},null,8,["data","onToOrder"]),p(B,{data:t.product,discount:t.discount},null,8,["data","discount"]),p(U,{data:t.product,protect:t.productProtect},null,8,["data","protect"])])])):h("",!0)])):(r(),d("div",Ot,[t.isLoad?(r(),d("div",Vt,"\u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E")):h("",!0)]))])}var Yt=w(At,[["render",Bt]]);export{Yt as default};
