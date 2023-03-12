import{N as O}from"./Notification.210c04e2.js";import{_ as T}from"./PersonalBar.8851514e.js";import{_ as L,d as x,h as v,r as m,o,b as i,a as e,t as _,p as C,w as y,F as $,f as b,z as f,I as H,k as h,m as N,c as p,v as G,e as B,j as w,J as V,K as I,i as S,L as M,M as E,g as D,O as Z}from"./index.586a5fbf.js";import{_ as F}from"./CatalogPagination.7f773085.js";const j={class:"catalog-menu"},R={class:"catalog-menu-heading"},U=N("\u041A\u0430\u0442\u0430\u043B\u043E\u0433 "),z=["title"],J={key:0},K={key:0,class:"catalog-menu-nav"},Y=["onClick"],q={key:0,class:"catalog-menu-nav-arrow"},Q={class:"catalog-menu-nav-dropdown-list"},W=x({__name:"CatalogMenu",props:{data:{type:Object},loading:{type:Boolean,default:!0},catalogName:{type:String},showMenu:{type:Boolean}},emits:["update:showMenu","update:catalogName"],setup(a,{emit:t}){const n=v([]),d=s=>{n.value.indexOf(s)!=-1?n.value.splice(n.value.indexOf(s)):n.value.push(s)};return(s,A)=>{const g=m("router-link");return o(),i("div",j,[e("div",R,[U,e("span",{class:"catalog-menu-heading-add",title:a.showMenu?"\u0421\u043A\u0440\u044B\u0442\u044C":"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C",onClick:A[0]||(A[0]=l=>s.$emit("update:showMenu",!a.showMenu))},_(a.showMenu?"-":"+"),9,z)]),C(G,{name:"fade"},{default:y(()=>[a.showMenu?(o(),i("div",J,[a.loading?(o(),p(B,{key:1})):(o(),i("ul",K,[(o(!0),i($,null,b(a.data,l=>(o(),i("li",{class:"catalog-menu-nav-elem",key:l.id},[e("div",{class:"catalog-menu-nav-elem-wrap",onClick:r=>d(l.id)},[l.sub?(o(),i("div",q,[e("img",{class:f(n.value.indexOf(l.id)!==-1?"catalog-menu-nav-arrow active":"catalog-menu-nav-arrow"),src:H,alt:""},null,2)])):h("",!0),e("div",{class:f(n.value.indexOf(l.id)!==-1?"catalog-menu-nav-text active":"catalog-menu-nav-text")},_(l.name),3)],8,Y),l.sub?(o(),i("div",{key:0,class:f(n.value.indexOf(l.id)!=-1?"catalog-menu-nav-dropdown active":"catalog-menu-nav-dropdown")},[e("ul",Q,[(o(!0),i($,null,b(l.sub,r=>(o(),i("li",{key:r.id},[C(g,{tag:"a",to:"/catalog/catalog/"+r.code,class:"catalog-menu-nav-dropdown-link","active-class":"catalog-menu-nav-dropdown-link active",onClick:c=>s.$emit("update:catalogName",r.name)},{default:y(()=>[N(_(r.name),1)]),_:2},1032,["to","onClick"])]))),128))])],2)):h("",!0)]))),128))]))])):h("",!0)]),_:1})])}}});var X=L(W,[["__scopeId","data-v-e01e1416"]]);const ee={props:{data:{type:Object}},setup(){return{more:v(!1)}}},ae={class:"catalog-item"},te={class:"catalog-item-img"},oe=["src"],ne={class:"catalog-item-info"},se={class:"content-wrap"},le={class:"content-heading-wrap-elem"},ie={class:"content-heading"},ue={class:"content-heading-info"},ce={class:"content-heading-info-elem"},de=["innerHTML"],re={class:"catalog-item-btn-block"},ge={class:"content-heading-price"},ve=e("div",{class:"content-heading-price-text"},"\u0426\u0435\u043D\u0430:",-1),me={class:"content-heading-price-value"},he=e("div",null,[e("svg",{width:"18",height:"22",viewBox:"0 0 18 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M17.0837 5.3183C17.0834 5.31807 17.0832 5.31784 17.0829 5.31761C17.0747 5.30191 17.0593 5.27543 17.0342 5.24899L13.2468 0.999148L13.247 0.998928L13.2389 0.990791C13.2227 0.974599 13.2063 0.962049 13.1951 0.953938C13.1842 0.945974 13.173 0.938491 13.1654 0.933451L13.1644 0.932749C13.1554 0.9268 13.1507 0.9236 13.147 0.920935C13.147 0.920918 13.147 0.920901 13.1469 0.920885L13.0922 0.866106H13.0628C13.0526 0.861177 13.0414 0.85677 13.0292 0.853209C12.9672 0.825769 12.8815 0.8 12.789 0.8H3.49001C2.01335 0.8 0.8 2.01335 0.8 3.49001V18.7606C0.8 20.2373 2.01335 21.4506 3.49001 21.4506H14.5078C15.9844 21.4506 17.1978 20.2373 17.1978 18.7606V5.64949C17.1978 5.64634 17.1979 5.6434 17.1983 5.63552C17.1985 5.63249 17.1987 5.62874 17.1989 5.62397C17.1996 5.61017 17.2006 5.58913 17.1995 5.56581C17.1974 5.51818 17.1868 5.44882 17.1402 5.3814C17.1198 5.35204 17.0949 5.32857 17.0837 5.3183ZM13.4077 5.05285V3.02485L15.2085 5.05285H13.4077ZM15.9604 18.7386C15.9604 19.5571 15.3193 20.2133 14.5078 20.2133H3.49001C2.67671 20.2133 2.03735 19.5553 2.03735 18.7606V3.46798C2.03735 2.65468 2.69527 2.01531 3.49001 2.01531H12.1703V5.64949C12.1703 5.97338 12.4293 6.26816 12.789 6.26816H15.9604V18.7386Z",fill:"#A5A7A9",stroke:"#A5A7A9","stroke-width":"0.4"}),e("path",{d:"M3.97479 6.26831H7.65472C7.97861 6.26831 8.27339 6.00927 8.27339 5.64963C8.27339 5.29678 8.00756 5.03096 7.65472 5.03096H3.97479C3.65089 5.03096 3.35611 5.28999 3.35611 5.64963C3.35611 6.00927 3.65089 6.26831 3.97479 6.26831Z",fill:"#A5A7A9",stroke:"#A5A7A9","stroke-width":"0.4"}),e("path",{d:"M7.65469 10.363H3.97477C3.65087 10.363 3.35609 10.622 3.35609 10.9817C3.35609 11.3056 3.61513 11.6003 3.97477 11.6003H7.65469C7.97859 11.6003 8.27337 11.3413 8.27337 10.9817C8.27337 10.6509 7.9855 10.363 7.65469 10.363Z",fill:"#A5A7A9",stroke:"#A5A7A9","stroke-width":"0.4"}),e("path",{d:"M3.35611 8.42551C3.35611 8.7494 3.61515 9.04418 3.97479 9.04418H13.8026C14.1265 9.04418 14.4213 8.78515 14.4213 8.42551C14.4213 8.10162 14.1623 7.80684 13.8026 7.80684H3.97479C3.65089 7.80684 3.35611 8.06587 3.35611 8.42551Z",fill:"#A5A7A9",stroke:"#A5A7A9","stroke-width":"0.4"})])],-1),_e=e("span",null,"\u041A \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u044E",-1),Ce=e("div",null,[e("svg",{class:"sidebar-btn-img",width:"32",height:"28",viewBox:"0 0 32 28",fill:"none",xmlns:"http://www.w3.org/2000/svg","data-v-760eb41c":""},[e("rect",{class:"fill",x:"0.0802612",y:"2.04846",width:"4.25606",height:"2.07613",rx:"1.03806",fill:"#A5A7A9","data-v-760eb41c":""}),e("rect",{class:"fill",x:"3.9931",y:"2",width:"17.8806",height:"2.07613",rx:"1.03806",transform:"rotate(69.6255 3.9931 2)",fill:"#A5A7A9","data-v-760eb41c":""}),e("rect",{class:"fill",x:"8.38477",y:"6.20068",width:"16.609",height:"2.07613",rx:"1.03806",fill:"#A5A7A9","data-v-760eb41c":""}),e("rect",{class:"fill",x:"24",y:"3",width:"8",height:"2",rx:"1",fill:"#A5A7A9","data-v-760eb41c":""}),e("rect",{class:"fill",x:"29",width:"8",height:"2",rx:"1",transform:"rotate(90 29 0)",fill:"#A5A7A9","data-v-760eb41c":""}),e("rect",{class:"fill",x:"21.0491",y:"19.1241",width:"13.0871",height:"2.07613",rx:"1.03806",transform:"rotate(-80.9286 21.0491 19.1241)",fill:"#A5A7A9","data-v-760eb41c":""}),e("rect",{class:"fill",x:"7.34668",y:"17.6194",width:"15.8824",height:"2.07613",rx:"1.03806",fill:"#A5A7A9","data-v-760eb41c":""}),e("rect",{class:"fill",x:"6.30865",y:"21.7716",width:"9.34257",height:"2.07613",rx:"1.03806",fill:"#A5A7A9","data-v-760eb41c":""}),e("path",{class:"stroke",d:"M8.38477 18.6575C6.82768 18.6575 5.78961 18.9374 5.78961 20.7336C5.78961 22.8097 7.34671 22.8097 7.86574 22.8097",stroke:"#A5A7A9","stroke-width":"2","data-v-760eb41c":""}),e("circle",{class:"stroke",cx:"9.42285",cy:"24.8858",r:"2.11419",stroke:"#A5A7A9","stroke-width":"2","data-v-760eb41c":""}),e("circle",{class:"stroke",cx:"20.8415",cy:"24.8858",r:"2.11419",stroke:"#A5A7A9","stroke-width":"2","data-v-760eb41c":""})])],-1),Ae=e("span",null," \u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C",-1);function fe(a,t,n,d,s,A){const g=m("router-link");return o(),i("div",ae,[e("div",te,[e("img",{src:n.data.image,alt:""},null,8,oe)]),e("div",ne,[e("div",se,[e("div",le,[e("div",ie,_(n.data.title),1)]),e("div",ue,[e("span",ce,_(n.data.article),1)])]),e("div",{class:f(d.more?"catalog-item-text more":"catalog-item-text"),innerHTML:n.data.description},null,10,de),e("div",{class:"content-hide-btn catalog-item-more",onClick:t[0]||(t[0]=l=>d.more=!d.more)},_(d.more?"\u041C\u0435\u043D\u044C\u0448\u0435":"\u0411\u043E\u043B\u044C\u0448\u0435"),1),e("div",re,[e("div",ge,[ve,e("div",me,_(n.data.prices.retail)+" \u20BD",1)]),C(g,{class:"catalog-item-btn",tag:"a",to:"/product/"+n.data.article},{default:y(()=>[he,_e]),_:1},8,["to"]),C(g,{class:"catalog-item-btn",tag:"a",to:"/order/"+n.data.article},{default:y(()=>[Ce,Ae]),_:1},8,["to"])])])])}var we=L(ee,[["render",fe]]);const pe=x({components:{Notification:O,PersonalBar:T,CatalogMenu:X,CatalogItem:we,CatalogPagination:F,PreloaderLocal:B},props:["id"],setup(a){const t=D(),n=Z(),d=v(!1),s=v(!1),A=v(null),g=v(!0),l=w(()=>t.getters.getMenuCategoryName(a.id)),r=v(),c=v(1),k=u=>{r.value=u.target.documentElement.scrollTop},P=u=>{c.value+u>=1&&c.value+u<=t.getters.getPageCount&&(c.value=c.value+u,s.value=!0,t.dispatch(M.GET_CATALOG,{SECTION:a.id,PAGE:c.value}).then(()=>{s.value=!1}))};return V(()=>a.id,()=>{t.commit(E.CLEAR_CATALOG),c.value=1,a.id!==""&&a.id!==void 0&&(s.value=!0,t.dispatch(M.GET_CATALOG,{SECTION:a.id,PAGE:c.value}).then(()=>{s.value=!1}))}),I(()=>{window.removeEventListener("scroll",k)}),S(()=>{window.addEventListener("scroll",k),t.getters.isCatalogMenuLoad||(d.value=!0,t.dispatch(M.GET_CATALOG_MENU).then(()=>{d.value=!1,l.value||n.push({name:"Catalog"})})),t.commit(E.CLEAR_CATALOG),a.id!==""&&a.id!==void 0&&(s.value=!0,t.dispatch(M.GET_CATALOG,{SECTION:a.id,PAGE:c.value}).then(()=>{s.value=!1}))}),{currentCategory:A,loaderMenu:d,loaderCatalog:s,showMenu:g,currentPage:c,catalogPageCount:w(()=>t.getters.getPageCount),changePage:P,catalogMenu:w(()=>t.getters.getCatalogMenu),catalog:w(()=>t.getters.getCatalog),getMenuCategoryName:l,isLoad:w(()=>t.getters.isCatalogLoad),scroll:r}}}),ke={class:"top-line main-page"},Me=e("div",{class:"top-line-menu-btn"},[e("span"),e("span"),e("span")],-1),ye={class:"catalog"},Pe={class:"catalog-elem"},$e={class:"catalog-head-card"},be={key:0},Le={key:1},Ee={class:"catalog-body-items"},xe={key:0},Ne={key:0,class:"page_up_down_butn",href:"#"};function Be(a,t,n,d,s,A){const g=m("Notification"),l=m("PersonalBar"),r=m("CatalogMenu"),c=m("CatalogPagination"),k=m("PreloaderLocal"),P=m("CatalogItem");return o(),i("div",null,[e("div",ke,[Me,C(g),C(l)]),e("div",ye,[e("div",{class:f("catalog-elem-menu"+(a.showMenu?" menu-open":""))},[C(r,{loading:a.loaderMenu,data:a.catalogMenu,showMenu:a.showMenu,"onUpdate:showMenu":t[0]||(t[0]=u=>a.showMenu=u)},null,8,["loading","data","showMenu"])],2),e("div",Pe,[e("div",$e,[a.getMenuCategoryName?(o(),i("span",be,_(a.getMenuCategoryName),1)):(o(),i("span",Le,"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E \u0438\u0437 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0430"))])]),e("div",{class:f("catalog-body"+(a.showMenu?" menu-open":""))},[a.isLoad||a.loaderCatalog?(o(),p(c,{key:0,currentPage:a.currentPage,maxPage:a.catalogPageCount,onPrev:t[1]||(t[1]=u=>a.changePage(-1)),onNext:t[2]||(t[2]=u=>a.changePage(1))},null,8,["currentPage","maxPage"])):h("",!0),a.loaderCatalog?(o(),p(k,{key:1,class:"catalog-body-preloader"})):h("",!0),e("div",Ee,[a.isLoad?(o(),i("div",xe,[(o(!0),i($,null,b(a.catalog.products,u=>(o(),p(P,{key:u.id,data:u},null,8,["data"]))),128))])):h("",!0),a.isLoad?(o(),p(c,{key:1,currentPage:a.currentPage,maxPage:a.catalogPageCount,onPrev:t[3]||(t[3]=u=>a.changePage(-1)),onNext:t[4]||(t[4]=u=>a.changePage(1))},null,8,["currentPage","maxPage"])):h("",!0)])],2)]),a.scroll>200?(o(),i("a",Ne,"\u041D\u0430\u0432\u0435\u0440\u0445")):h("",!0)])}var Ve=L(pe,[["render",Be]]);export{Ve as default};
