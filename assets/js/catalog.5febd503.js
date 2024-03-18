import{N as G}from"./Notification.468cdf45.js";import{_ as I}from"./PersonalBar.843ed68e.js";import{_ as T,d as L,h as m,r as v,o,b as s,a,t as h,p as g,w as k,F as A,f as E,z as p,J as S,k as _,m as b,c as M,v as D,e as B,u as N,K as F,j as $,L as R,M as V,i as j,O as w,Q as O,g as U,R as x}from"./index.99eabe54.js";import{_ as z}from"./doc.fb9e5ec7.js";import{_ as H}from"./CatalogPagination.dad5ed1a.js";const J={class:"catalog-menu"},K={class:"catalog-menu-heading"},Q=b("\u041A\u0430\u0442\u0430\u043B\u043E\u0433 "),Y=["title"],q={key:0},W={key:0,class:"catalog-menu-nav"},X=["onClick"],Z={key:0,class:"catalog-menu-nav-arrow"},ee={class:"catalog-menu-nav-dropdown-list"},ae=L({__name:"CatalogMenu",props:{data:{type:Object},loading:{type:Boolean,default:!0},catalogName:{type:String},showMenu:{type:Boolean}},emits:["update:showMenu","update:catalogName"],setup(e,{emit:t}){const c=m([]),r=n=>{c.value.indexOf(n)!=-1?c.value.splice(c.value.indexOf(n)):c.value.push(n)};return(n,C)=>{const f=v("router-link");return o(),s("div",J,[a("div",K,[Q,a("span",{class:"catalog-menu-heading-add",title:e.showMenu?"\u0421\u043A\u0440\u044B\u0442\u044C":"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C",onClick:C[0]||(C[0]=u=>n.$emit("update:showMenu",!e.showMenu))},h(e.showMenu?"-":"+"),9,Y)]),g(D,{name:"fade"},{default:k(()=>[e.showMenu?(o(),s("div",q,[e.loading?(o(),M(B,{key:1})):(o(),s("ul",W,[(o(!0),s(A,null,E(e.data,u=>(o(),s("li",{class:"catalog-menu-nav-elem",key:u.id},[a("div",{class:"catalog-menu-nav-elem-wrap",onClick:d=>r(u.id)},[u.sub?(o(),s("div",Z,[a("img",{class:p(c.value.indexOf(u.id)!==-1?"catalog-menu-nav-arrow active":"catalog-menu-nav-arrow"),src:S,alt:""},null,2)])):_("",!0),a("div",{class:p(c.value.indexOf(u.id)!==-1?"catalog-menu-nav-text active":"catalog-menu-nav-text")},h(u.name),3)],8,X),u.sub?(o(),s("div",{key:0,class:p(c.value.indexOf(u.id)!=-1?"catalog-menu-nav-dropdown active":"catalog-menu-nav-dropdown")},[a("ul",ee,[(o(!0),s(A,null,E(u.sub,d=>(o(),s("li",{key:d.id},[g(f,{tag:"a",to:"/catalog/catalog/"+d.code,class:"catalog-menu-nav-dropdown-link","active-class":"catalog-menu-nav-dropdown-link active",onClick:i=>n.$emit("update:catalogName",d.name)},{default:k(()=>[b(h(d.name),1)]),_:2},1032,["to","onClick"])]))),128))])],2)):_("",!0)]))),128))]))])):_("",!0)]),_:1})])}}});var te=T(ae,[["__scopeId","data-v-e01e1416"]]);const oe={class:"catalog-item"},ne={class:"catalog-item-img"},se=["src"],ue={class:"catalog-item-info"},le={class:"content-wrap"},ie={class:"content-heading-wrap-elem"},ce={class:"content-heading"},de={class:"content-heading-info"},re={class:"content-heading-info-elem"},ge=["innerHTML"],me={class:"catalog-item-btn-block"},ve={class:"content-heading-price"},_e=a("div",{class:"content-heading-price-text"},"\u0426\u0435\u043D\u0430:",-1),he={class:"content-heading-price-value"},Ce=a("span",null,"\u041A \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u044E",-1),pe=a("span",null," \u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C",-1),fe=L({__name:"CatalogItem",props:{data:{type:Object}},setup(e){const t=m(!1);return(c,r)=>{const n=v("router-link");return o(),s("div",oe,[a("div",ne,[a("img",{src:e.data.image,alt:""},null,8,se)]),a("div",ue,[a("div",le,[a("div",ie,[a("div",ce,h(e.data.title),1)]),a("div",de,[a("span",re,h(e.data.article),1)])]),a("div",{class:p(t.value?"catalog-item-text more":"catalog-item-text"),innerHTML:e.data.description},null,10,ge),a("div",{class:"content-hide-btn catalog-item-more",onClick:r[0]||(r[0]=C=>t.value=!t.value)},h(t.value?"\u041C\u0435\u043D\u044C\u0448\u0435":"\u0411\u043E\u043B\u044C\u0448\u0435"),1),a("div",me,[a("div",ve,[_e,a("div",he,h(e.data.prices.retail)+" \u20BD",1)]),g(n,{class:"catalog-item-btn",to:"/product/"+e.data.article},{default:k(()=>[g(N(z)),Ce]),_:1},8,["to"]),g(n,{class:"catalog-item-btn",to:"/order/"+e.data.article},{default:k(()=>[g(N(F)),pe]),_:1},8,["to"])])])])}}}),$e=L({components:{Notification:G,PersonalBar:I,CatalogMenu:te,CatalogItem:fe,CatalogPagination:H,PreloaderLocal:B},props:["id"],setup(e){const t=U(),c=x(),r=m(!1),n=m(!1),C=m(null),f=m(!0),u=$(()=>t.getters.getMenuCategoryName(e.id)),d=m(),i=m(1),P=l=>{d.value=l.target.documentElement.scrollTop},y=l=>{i.value+l>=1&&i.value+l<=t.getters.getPageCount&&(i.value=i.value+l,n.value=!0,t.dispatch(w.GET_CATALOG,{SECTION:e.id,PAGE:i.value}).then(()=>{n.value=!1}))};return R(()=>e.id,()=>{t.commit(O.CLEAR_CATALOG),i.value=1,e.id!==""&&e.id!==void 0&&(n.value=!0,t.dispatch(w.GET_CATALOG,{SECTION:e.id,PAGE:i.value}).then(()=>{n.value=!1}))}),V(()=>{window.removeEventListener("scroll",P)}),j(()=>{window.addEventListener("scroll",P),t.getters.isCatalogMenuLoad||(r.value=!0,t.dispatch(w.GET_CATALOG_MENU).then(()=>{r.value=!1,u.value||c.push({name:"Catalog"})})),t.commit(O.CLEAR_CATALOG),e.id!==""&&e.id!==void 0&&(n.value=!0,t.dispatch(w.GET_CATALOG,{SECTION:e.id,PAGE:i.value}).then(()=>{n.value=!1}))}),{currentCategory:C,loaderMenu:r,loaderCatalog:n,showMenu:f,currentPage:i,catalogPageCount:$(()=>t.getters.getPageCount),changePage:y,catalogMenu:$(()=>t.getters.getCatalogMenu),catalog:$(()=>t.getters.getCatalog),getMenuCategoryName:u,isLoad:$(()=>t.getters.isCatalogLoad),scroll:d}}}),Me={class:"top-line main-page"},Pe=a("div",{class:"top-line-menu-btn"},[a("span"),a("span"),a("span")],-1),we={class:"catalog"},ke={class:"catalog-elem"},ye={class:"catalog-head-card"},Ae={key:0},Ee={key:1},Le={class:"catalog-body-items"},Ne={key:0},Oe={key:0,class:"page_up_down_butn",href:"#"};function Te(e,t,c,r,n,C){const f=v("Notification"),u=v("PersonalBar"),d=v("CatalogMenu"),i=v("CatalogPagination"),P=v("PreloaderLocal"),y=v("CatalogItem");return o(),s("div",null,[a("div",Me,[Pe,g(f),g(u)]),a("div",we,[a("div",{class:p("catalog-elem-menu"+(e.showMenu?" menu-open":""))},[g(d,{loading:e.loaderMenu,data:e.catalogMenu,showMenu:e.showMenu,"onUpdate:showMenu":t[0]||(t[0]=l=>e.showMenu=l)},null,8,["loading","data","showMenu"])],2),a("div",ke,[a("div",ye,[e.getMenuCategoryName?(o(),s("span",Ae,h(e.getMenuCategoryName),1)):(o(),s("span",Ee,"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E \u0438\u0437 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0430"))])]),a("div",{class:p("catalog-body"+(e.showMenu?" menu-open":""))},[e.isLoad||e.loaderCatalog?(o(),M(i,{key:0,currentPage:e.currentPage,maxPage:e.catalogPageCount,onPrev:t[1]||(t[1]=l=>e.changePage(-1)),onNext:t[2]||(t[2]=l=>e.changePage(1))},null,8,["currentPage","maxPage"])):_("",!0),e.loaderCatalog?(o(),M(P,{key:1,class:"catalog-body-preloader"})):_("",!0),a("div",Le,[e.isLoad?(o(),s("div",Ne,[(o(!0),s(A,null,E(e.catalog.products,l=>(o(),M(y,{key:l.id,data:l},null,8,["data"]))),128))])):_("",!0),e.isLoad?(o(),M(i,{key:1,currentPage:e.currentPage,maxPage:e.catalogPageCount,onPrev:t[3]||(t[3]=l=>e.changePage(-1)),onNext:t[4]||(t[4]=l=>e.changePage(1))},null,8,["currentPage","maxPage"])):_("",!0)])],2)]),e.scroll>200?(o(),s("a",Oe,"\u041D\u0430\u0432\u0435\u0440\u0445")):_("",!0)])}var De=T($e,[["render",Te]]);export{De as default};
