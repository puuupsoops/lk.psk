import{_ as z,N as q}from"./PersonalBar.0a5cfcc7.js";import{_ as H}from"./CompanyBarTop.3385a2e1.js";import{T as K}from"./TopNav.54cc0780.js";import{P as W}from"./PreloaderLocal.933d1772.js";import{O as Y,M as Z,a as L}from"./types.10501219.js";import{m as N,e as c,x as J,I as B,g as $,_ as M,u as R,ad as Q,U as X,r as _,o as i,b as l,a as s,t as n,P as x,v as g,j as f,F as P,d as I,i as V,c as T,h as w,k as G,ah as j,y as ee,f as se,ag as ue,n as te,af as ae}from"./index.a8f31d7d.js";import{S as oe}from"./SelectInput.57accd31.js";import"./DeleteButton.2351cd2d.js";import"./OrderDraftCard.21cae7d1.js";const re=N({props:{data:{type:Array,required:!0},contrAgent:{type:String},period:{type:String},status:{type:String},loading:{type:Boolean,default:!1},search:{type:Object,required:!0}},components:{PreloaderLocal:W,OrderDetailModal:Y,ModalInput:Z},setup(e){const t=R(G),d=c(-1),S=c(-1),A=c(null),O=c(!1),m=c([]),D=c(-1),v=c([{name:"id",value:"",show:!1},{name:"name",value:"",show:!1},{name:"id",value:"",show:!1},{name:"id",value:"",show:!1},{name:"id",value:"",show:!1},{name:"id",value:"",show:!1}]);J(A,()=>{S.value=-1}),B(d,()=>{var u,o,h;if(d.value!=-1&&C.value&&Array.isArray((u=C.value[d.value].order)==null?void 0:u.checks)){let E=(h=(o=C.value[d.value].order)==null?void 0:o.checks)==null?void 0:h.map(y=>y.doc_status?null:t.dispatch(j.GET_ORDERS_DOCSTATUS,y.guid));E&&Promise.all(E).finally(()=>{})}}),B(()=>e.status,()=>{d.value=-1}),B(()=>e.contrAgent,()=>{d.value=-1}),B(()=>e.search,()=>{d.value=-1}),B(()=>e.period,()=>{d.value=-1});const C=$(()=>{let u=e.data.filter(o=>e.contrAgent==""||o.partner_guid==e.contrAgent);return u=u.filter(o=>p(o.date_create)),u=u.filter(o=>a(o)),u=u.filter(o=>r(o)),v.value[1].value!=""&&(u=u.filter(o=>`\u041F\u0440\u0435\u0442\u0435\u043D\u0437\u0438\u044F \u2116 ${o.bitrix_id} \u043E\u0442 ${o.date_create.substring(0,10)}`.indexOf(v.value[1].value)!=-1)),u}),r=u=>{if(e.search.search=="")return!0;switch(e.search.id){case 1:return`\u041F\u0440\u0435\u0442\u0435\u043D\u0437\u0438\u044F \u2116 ${u.bitrix_id} \u043E\u0442 ${u.date_create.substring(0,10)}`.toUpperCase().indexOf(e.search.search.toUpperCase())!=-1;case 2:return u.date_create.toUpperCase().indexOf(e.search.search.toUpperCase())!=-1;case 3:return u.order?String(u.order.n).toUpperCase().indexOf(e.search.search.toUpperCase())!=-1:!1;case 4:return u.case?String(u.case).toUpperCase().indexOf(e.search.search.toUpperCase())!=-1:!1;default:return!0}},p=u=>{var o;if(!u)return!1;if(e.period=="\u0412\u0441\u0435")return!0;{const h=(o=e.period)==null?void 0:o.split(" - ")[0],E=h==null?void 0:h.substring(6,10),y=h==null?void 0:h.substring(3,5);return E==u.substring(6,10)&&y==u.substring(3,5)}},a=u=>e.status=="\u0412\u0441\u0435"?!0:u.order&&Array.isArray(u.order.checks)?u.order.checks.findIndex(o=>L[parseInt(o.status+1)]?e.status==L[parseInt(o.status+1)].name:!1)!=-1:!1;return{target:A,active:d,active_more:S,loading_bill:m,showDetail:O,detailOrderId:D,OrdersSatusCode:L,filter:v,docLocation:"http://91.232.12.198:82",data_filtred:C,checkStatus:a,downloadBill:u=>{m.value.push(u),t.dispatch(Q.GET_BILL_FILE_SAVE,u).finally(()=>{m.value=m.value.filter(o=>o!==u)})},getStorageName:(u,o)=>{const E=t.getters.getCompanyStoragesData(u).find(y=>y.guid==o);return E?E.name.replace(/(^|\s)\S/g,y=>y.toUpperCase()).replace(/(ООО)|(")|(\s)|([а-я])/g,""):"\u0421\u043A\u043B\u0430\u0434"},setOrderId:u=>{t.commit(X.SET_CURRENT_ORDER,u)},filtred:u=>{let o=!1;return v.value[1].value!=""?u.title.indexOf(v.value[1].value)!=-1&&(o=!0):o=!0,o}}}}),ie={class:"orders-list-wrap"},le={class:"orders-list",ref:"target"},de={class:"orders-list-row orders-list-heading"},ne=s("div",{class:"orders-list-elem"},"\u2116",-1),ce=s("div",null,"\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435",-1),fe=s("svg",{width:"13",height:"9",viewBox:"0 0 13 9",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{class:"fill",d:"M7.00726 8.11117L12.7923 2.32601C12.9262 2.1922 13 2.01359 13 1.82313C13 1.63268 12.9262 1.45406 12.7923 1.32026L12.3664 0.894224C12.0888 0.616998 11.6378 0.616998 11.3606 0.894224L6.5027 5.75217L1.63936 0.888833C1.50545 0.755029 1.32694 0.681152 1.13659 0.681152C0.946033 0.681152 0.767522 0.755029 0.633507 0.888833L0.207681 1.31487C0.0737714 1.44878 -4.1357e-08 1.62729 -4.9682e-08 1.81774C-5.8007e-08 2.0082 0.0737714 2.18681 0.207681 2.32062L5.99802 8.11117C6.13236 8.24529 6.31171 8.31896 6.50238 8.31854C6.69378 8.31896 6.87303 8.24529 7.00726 8.11117Z",fill:"#A5A7A9"})],-1),me=[fe],ve=["onClick"],pe={class:"orders-list-elem"},he=s("div",{class:"table-arrow"},null,-1),_e={class:"orders-list-elem"},ge={class:"orders-list-elem"},Ce=["innerHTML"],ye={class:"orders-list-elem"},De={class:"orders-list-elem",style:{"justify-content":"space-around"}},Ee=s("div",{class:"orders-list-elem"},null,-1),we={class:"orders-list-elem"},Se={key:0},Ae={class:"orders-list-info-elem"},$e={class:"orders-list-info-elem"},Oe={key:0,class:"orders-list-info-about tooltip"},Be=["onClick"],Le=s("span",{class:"tooltiptext"},"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0441\u0447\u0435\u0442",-1),be={key:1,class:"orders-list-info-about tooltip"},Ue={class:"orders-list-info-download disable"},ke=s("span",{class:"tooltiptext"},[V("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0441\u0447\u0435\u0442 \u043C\u043E\u0436\u043D\u043E \u0442\u043E\u043B\u044C\u043A\u043E "),s("br"),V(" \u043F\u043E\u0441\u043B\u0435 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F \u0437\u0430\u043A\u0430\u0437\u0430")],-1),Ve={key:0,class:"orders-list-info-elem orders-list-info-doc-wrap"},Fe={key:1,class:"orders-list-info-elem orders-list-info-doc-wrap"},Pe=["href"],Ie=["href"],Te=["href"],Ne=["href"],Me=s("div",{class:"orders-list-info-elem"},null,-1),Re={class:"orders-list-info-elem"},Ge=s("div",{class:"orders-list-info-elem"},null,-1),je={key:1,class:"orders-list-info-row"},ze=ee('<div class="orders-list-info-elem"></div><div class="orders-list-info-elem"> \u0421\u0447\u0435\u0442 \u043E\u0442\u0441\u0443\u0442\u0432\u0443\u0435\u0442 </div><div class="orders-list-info-elem"></div><div class="orders-list-info-elem"></div><div class="orders-list-info-elem"></div><div class="orders-list-info-elem"></div><div class="orders-list-info-elem"></div>',7),qe=[ze],He={key:0,class:"orders-list-row orders-list-main-row"},Ke=s("div",{class:"order-info"}," \u041F\u0440\u0435\u0442\u0435\u043D\u0437\u0438\u0439 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E. ",-1),We=[Ke];function Ye(e,t,d,S,A,O){const m=_("modal-input"),D=_("preloader-local"),v=_("PreloaderLocal"),C=_("OrderDetailModal");return i(),l("div",ie,[s("div",{style:x(e.data_filtred.length!=e.data.length?"visibility: visible":"visibility: hidden"),class:"orders-heading-info"}," \u041F\u043E\u043A\u0430\u0437\u0430\u043D\u043E "+n(e.data_filtred.length)+" \u0438\u0437 "+n(e.data.length),5),s("div",le,[s("div",de,[ne,s("div",{class:g("orders-list-elem"+(e.search.search!=""&&e.search.id==1?" active":"")+(e.filter[1].value!=""?" active":""))},[f(m,{modelValue:e.filter[1].value,"onUpdate:modelValue":t[0]||(t[0]=r=>e.filter[1].value=r),show:e.filter[1].show,"onUpdate:show":t[1]||(t[1]=r=>e.filter[1].show=r)},null,8,["modelValue","show"]),ce,s("div",{class:g("orders-list-elem-filter"+(e.filter[1].show||e.filter[1].value!=""?" active":"")),title:"\u0424\u0438\u043B\u044C\u0442\u0440",onClick:t[2]||(t[2]=r=>e.filter[1].show=!0)},me,2)],2),s("div",{class:g("orders-list-elem"+(e.contrAgent!=""?" active":""))},"\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442",2),s("div",{class:g("orders-list-elem"+(e.search.search!=""&&e.search.id==2?" active":""))},"\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F",2),s("div",{class:g("orders-list-elem"+(e.search.search!=""&&e.search.id==3?" active":"")),style:{"justify-content":"space-around"}},"\u041D\u043E\u043C\u0435\u0440 \u0437\u0430\u043A\u0430\u0437\u0430",2),s("div",{class:g("orders-list-elem"+(e.status!="\u0412\u0441\u0435"?" active":""))},"\u0421\u0442\u0430\u0442\u0443\u0441",2),s("div",{class:g("orders-list-elem"+(e.search.search!=""&&e.search.id==4?" active":""))},"\u041F\u0440\u0438\u0447\u0438\u043D\u0430",2)]),(i(!0),l(P,null,I(e.data_filtred,(r,p)=>(i(),l("div",{key:p,class:g("orders-list-item"+(p==e.active?" active":""))},[s("div",{class:"orders-list-row orders-list-main-row",onClick:a=>{p===e.active?e.active=-1:e.active=p,e.active_more=-1}},[s("div",pe,[V(n(p+1)+" ",1),he]),s("div",_e," \u041F\u0440\u0435\u0442\u0435\u043D\u0437\u0438\u044F \u2116 "+n(r.bitrix_id)+" \u043E\u0442 "+n(r.date_create.substring(0,10)),1),s("div",ge,[s("span",{innerHTML:r.partner_name},null,8,Ce)]),s("div",ye,n(r.date_create.substring(0,10)),1),s("div",De,n(r.order?r.order.n:""),1),Ee,s("div",we,n(r.case),1)],8,ve),s("div",{class:g("orders-list-info"+(p==e.active?" active":"")),onClick:t[3]||(t[3]=a=>e.active_more=-1)},[r.order&&Array.isArray(r.order.checks)?(i(),l("div",Se,[(i(!0),l(P,null,I(r.order.checks,(a,F)=>{var b,U,k,u;return i(),l("div",{class:"orders-list-info-row",key:F},[s("div",Ae,n(e.getStorageName(r.partner_guid,a.organization_id)),1),s("div",$e,[a.status>=2?(i(),l("div",Oe,[s("div",{class:"orders-list-info-download",onClick:o=>e.downloadBill(a.guid)},[s("span",null," \u0421\u0447\u0451\u0442 \u043E\u0442 "+n(r.order.date.substring(0,10)),1),e.loading_bill.includes(r.guid)?(i(),T(D,{key:0,small:""})):w("",!0)],8,Be),Le])):(i(),l("div",be,[s("div",Ue," \u0421\u0447\u0451\u0442 \u043E\u0442 "+n(r.order.date.substring(0,10)),1),ke]))]),a.doc_status?(i(),l("div",Fe,[((b=a.doc_status)==null?void 0:b.StatusSchet)&&a.status>=2?(i(),l("a",{key:0,class:"orders-list-info-doc sc",href:`${e.docLocation}/api/order/print?id=${a.guid}&name=\u0421\u0447\u0435\u0442`,target:"_blank",title:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u0447\u0435\u0442"},null,8,Pe)):w("",!0),(U=a.doc_status)!=null&&U.StatusUPD?(i(),l("a",{key:1,class:"orders-list-info-doc upd",href:`${e.docLocation}/api/order/print?id=${a.guid}&name=\u0423\u041F\u0414`,target:"_blank",title:"\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u0435\u0440\u0435\u0434\u0430\u0442\u043E\u0447\u043D\u044B\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442"},null,8,Ie)):w("",!0),(k=a.doc_status)!=null&&k.StatusSF?(i(),l("a",{key:2,class:"orders-list-info-doc sf",href:`${e.docLocation}/api/order/print?id=${a.guid}&name=\u0421\u0424`,target:"_blank",title:"\u0421\u0447\u0451\u0442-\u0444\u0430\u043A\u0442\u0443\u0440\u0430"},null,8,Te)):w("",!0),(u=a.doc_status)!=null&&u.StatusUPK?(i(),l("a",{key:3,class:"orders-list-info-doc kor",href:`${e.docLocation}/api/order/print?id=${a.guid}&name=\u0423\u041A\u0414`,target:"_blank",title:"\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u044B\u0439 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u043E\u0447\u043D\u044B\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442"},null,8,Ne)):w("",!0)])):(i(),l("div",Ve,[f(v,{small:""})])),Me,s("div",Re,n(e.OrdersSatusCode[a.status+1]?e.OrdersSatusCode[a.status+1].name:""),1),Ge])}),128))])):(i(),l("div",je,qe))],2)],2))),128)),e.data.length==0&&!e.loading?(i(),l("div",He,We)):w("",!0)],512),e.loading?(i(),T(v,{key:0,style:{width:"100%"}})):w("",!0),f(C,{modelValue:e.showDetail,"onUpdate:modelValue":t[4]||(t[4]=r=>e.showDetail=r),orderId:e.detailOrderId},null,8,["modelValue","orderId"])])}var Ze=M(re,[["render",Ye]]);const Je=N({components:{PersonalBar:z,Notification:q,CompanyBarTop:H,TopNav:K,SelectInput:oe,ClaimsListCard:Ze},setup(){const e=R(G),t=c(!1),d=c(""),S=c(0),A=c(0),O=c({id:1,search:""}),m=[{id:1,name:"\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"},{id:2,name:"\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F"},{id:3,name:"\u041D\u043E\u043C\u0435\u0440 \u0437\u0430\u043A\u0430\u0437\u0430"},{id:4,name:"\u041F\u0440\u0438\u0447\u0438\u043D\u0430"}];se(()=>{t.value=!0,e.dispatch(j.GET_ORDERS).finally(()=>{e.dispatch(ue.GET_CLAIMS).finally(()=>{t.value=!1})}),e.getters.isCompanysLoad||e.dispatch(te.GET_COMPANYS)});const D=()=>{e.commit(ae.CLEAR_CLAIMS_NEW)};return{loading:t,searchColumn:m,search:O,filterCompanyUid:d,filterPeriod:S,filterStatus:A,OrdersSatusCode:L,companyBarTopData:$(()=>e.getters.getCompanysList),filterCompanyData:$(()=>e.getters.getCompanysListInput),filterPeriodData:$(()=>e.getters.getOrdersDataPeriodArray),claimsList:$(()=>e.getters.getClaims),isOrders:$(()=>e.getters.isOrders),newClaim:D}}}),Qe={class:"top-line product-page"},Xe={class:"orders-heading"},xe={class:"orders-heading-elem"},es={class:"orders-heading-item"},ss=s("div",{class:"orders-heading-text"},"\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442:",-1),us={class:"orders-heading-item"},ts=s("div",{class:"orders-heading-text"},"\u0421\u0442\u0430\u0442\u0443\u0441:",-1),as={class:"orders-heading-item","data-select2-id":"147"},os=s("div",{class:"orders-heading-text"},"\u041F\u0435\u0440\u0438\u043E\u0434:",-1),rs=s("div",{class:"orders-heading-elem"},null,-1);function is(e,t,d,S,A,O){const m=_("CompanyBarTop"),D=_("Notification"),v=_("PersonalBar"),C=_("top-nav"),r=_("SelectInput"),p=_("ClaimsListCard");return i(),l("div",null,[s("div",Qe,[f(m,{data:e.companyBarTopData,modelValue:e.filterCompanyUid,"onUpdate:modelValue":t[0]||(t[0]=a=>e.filterCompanyUid=a)},null,8,["data","modelValue"]),f(D),f(v)]),f(C,{claims:e.isOrders,onOnClick:e.newClaim},null,8,["claims","onOnClick"]),s("div",Xe,[s("div",xe,[s("div",es,[ss,f(r,{data:e.filterCompanyData,modelValue:e.filterCompanyUid,"onUpdate:modelValue":t[1]||(t[1]=a=>e.filterCompanyUid=a)},null,8,["data","modelValue"])]),s("div",us,[ts,f(r,{data:e.OrdersSatusCode,modelValue:e.filterStatus,"onUpdate:modelValue":t[2]||(t[2]=a=>e.filterStatus=a)},null,8,["data","modelValue"])]),s("div",as,[os,f(r,{data:e.filterPeriodData,modelValue:e.filterPeriod,"onUpdate:modelValue":t[3]||(t[3]=a=>e.filterPeriod=a)},null,8,["data","modelValue"])]),s("div",{class:"orders-heading-clean",title:"\u0423\u0431\u0440\u0430\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440\u044B",onClick:t[4]||(t[4]=a=>{e.filterCompanyUid="",e.filterPeriod=0,e.filterStatus=0})})]),rs]),f(p,{data:e.claimsList,loading:e.loading,contrAgent:e.filterCompanyUid,period:e.filterPeriodData[e.filterPeriod].name,status:e.OrdersSatusCode[e.filterStatus].name,search:e.search},null,8,["data","loading","contrAgent","period","status","search"])])}var _s=M(Je,[["render",is]]);export{_s as default};
