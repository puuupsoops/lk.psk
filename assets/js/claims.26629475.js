import{_ as Y}from"./PersonalBar.1b3becf2.js";import{N as Z}from"./Notification.0d8400af.js";import{_ as Q}from"./CompanyBarTop.9e8204a2.js";import{_ as X}from"./TopNav.b4bc3b25.js";import{d as G,i as v,h as R,D as ee,L as B,aJ as z,k as S,o as i,b as n,a as s,e as g,u as _,U as se,t as f,z as y,aH as ue,F as M,g as x,p as L,l as D,c as j,_ as I,aj as te,m as ae,f as re,as as oe,j as ie,aN as le,s as ne,aM as de,r as w}from"./index.319ff497.js";import{O as U,_ as ce}from"./types.7e20704f.js";import{_ as me}from"./CatalogPagination.9c4c77c3.js";const ve={class:"orders-list-wrap"},pe={class:"orders-heading-info"},fe={class:"orders-heading-pagination"},ge={class:"orders-list"},_e={class:"orders-list-row orders-list-heading"},he=s("div",{class:"orders-list-elem"},"\u2116",-1),Ce=s("div",null,"\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435",-1),ye=s("svg",{width:"13",height:"9",viewBox:"0 0 13 9",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{class:"fill",d:"M7.00726 8.11117L12.7923 2.32601C12.9262 2.1922 13 2.01359 13 1.82313C13 1.63268 12.9262 1.45406 12.7923 1.32026L12.3664 0.894224C12.0888 0.616998 11.6378 0.616998 11.3606 0.894224L6.5027 5.75217L1.63936 0.888833C1.50545 0.755029 1.32694 0.681152 1.13659 0.681152C0.946033 0.681152 0.767522 0.755029 0.633507 0.888833L0.207681 1.31487C0.0737714 1.44878 -4.1357e-08 1.62729 -4.9682e-08 1.81774C-5.8007e-08 2.0082 0.0737714 2.18681 0.207681 2.32062L5.99802 8.11117C6.13236 8.24529 6.31171 8.31896 6.50238 8.31854C6.69378 8.31896 6.87303 8.24529 7.00726 8.11117Z",fill:"#A5A7A9"})],-1),De=[ye],Ae=["onClick"],Ee={class:"orders-list-elem"},Pe=s("div",{class:"table-arrow"},null,-1),we={class:"orders-list-elem"},Se={class:"orders-list-elem"},$e=["innerHTML"],Oe={class:"orders-list-elem"},Be={class:"orders-list-elem",style:{"justify-content":"space-around"}},Ue=s("div",{class:"orders-list-elem"},null,-1),be={class:"orders-list-elem"},Ie={key:0},Le={class:"orders-list-info-elem"},Ve={class:"orders-list-info-elem"},ke={key:0,class:"orders-list-info-about tooltip"},Fe=["onClick"],Te=s("span",{class:"tooltiptext"},"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0441\u0447\u0435\u0442",-1),Ne={key:1,class:"orders-list-info-about tooltip"},Me={class:"orders-list-info-download disable"},xe=s("span",{class:"tooltiptext"},[L("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0441\u0447\u0435\u0442 \u043C\u043E\u0436\u043D\u043E \u0442\u043E\u043B\u044C\u043A\u043E "),s("br"),L(" \u043F\u043E\u0441\u043B\u0435 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F \u0437\u0430\u043A\u0430\u0437\u0430")],-1),je={key:0,class:"orders-list-info-elem orders-list-info-doc-wrap"},Ge={key:1,class:"orders-list-info-elem orders-list-info-doc-wrap"},Re=["href"],ze=["href"],He=["href"],qe=["href"],Je=s("div",{class:"orders-list-info-elem"},null,-1),Ke={class:"orders-list-info-elem"},We=s("div",{class:"orders-list-info-elem"},null,-1),Ye={key:1,class:"orders-list-info-row"},Ze=ae('<div class="orders-list-info-elem"></div><div class="orders-list-info-elem"> \u0421\u0447\u0435\u0442 \u043E\u0442\u0441\u0443\u0442\u0432\u0443\u0435\u0442 </div><div class="orders-list-info-elem"></div><div class="orders-list-info-elem"></div><div class="orders-list-info-elem"></div><div class="orders-list-info-elem"></div><div class="orders-list-info-elem"></div>',7),Qe=[Ze],Xe={key:0,class:"orders-list-row orders-list-main-row"},es=s("div",{class:"order-info"}," \u041F\u0440\u0435\u0442\u0435\u043D\u0437\u0438\u0439 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E. ",-1),ss=[es],us=G({__name:"ClaimsListCard",props:{data:{type:Array,required:!0},contrAgent:{type:String},period:{type:String},status:{type:String},loading:{type:Boolean,default:!1},search:{type:Object,required:!0}},setup(e){const r=e,l=v({maxItemOnPage:10,currentPage:1}),E=R(),d=v(-1),$=v(-1),O=v(null),P=v(!1),h=v([]),b=v(-1),A="https://api.psk.expert",p=v([{name:"id",value:"",show:!1},{name:"name",value:"",show:!1},{name:"id",value:"",show:!1},{name:"id",value:"",show:!1},{name:"id",value:"",show:!1},{name:"id",value:"",show:!1}]);ee(O,()=>{$.value=-1}),B(d,()=>{var u,t,a;if(d.value!=-1&&c.value&&Array.isArray((u=c.value[d.value].order)==null?void 0:u.checks)){let m=(a=(t=c.value[d.value].order)==null?void 0:t.checks)==null?void 0:a.map(o=>o.doc_status?null:E.dispatch(z.GET_ORDERS_DOCSTATUS,o.guid));m&&Promise.all(m).finally(()=>{})}}),B(()=>r.status,()=>{l.value.currentPage=1,d.value=-1}),B(()=>r.contrAgent,()=>{l.value.currentPage=1,d.value=-1}),B(()=>r.search,()=>{l.value.currentPage=1,d.value=-1}),B(()=>r.period,()=>{l.value.currentPage=1,d.value=-1});const c=S(()=>{let u=r.data.filter(t=>r.contrAgent==""||t.partner_guid==r.contrAgent);return u=u.filter(t=>H(t.date_create)),u=u.filter(t=>q(t)),u=u.filter(t=>C(t)),p.value[1].value!=""&&(u=u.filter(t=>`\u041F\u0440\u0435\u0442\u0435\u043D\u0437\u0438\u044F \u2116 ${t.bitrix_id} \u043E\u0442 ${t.date_create.substring(0,10)}`.indexOf(p.value[1].value)!=-1)),u}),V=u=>l.value.maxItemOnPage!=-1?u>=(l.value.currentPage-1)*l.value.maxItemOnPage&&u<l.value.currentPage*l.value.maxItemOnPage:!0,C=u=>{if(r.search.search=="")return!0;switch(r.search.id){case 1:return`\u041F\u0440\u0435\u0442\u0435\u043D\u0437\u0438\u044F \u2116 ${u.bitrix_id} \u043E\u0442 ${u.date_create.substring(0,10)}`.toUpperCase().indexOf(r.search.search.toUpperCase())!=-1;case 2:return u.date_create.toUpperCase().indexOf(r.search.search.toUpperCase())!=-1;case 3:return u.order?String(u.order.n).toUpperCase().indexOf(r.search.search.toUpperCase())!=-1:!1;case 4:return u.case?String(u.case).toUpperCase().indexOf(r.search.search.toUpperCase())!=-1:!1;default:return!0}},H=u=>{var t;if(!u)return!1;if(r.period=="\u0412\u0441\u0435")return!0;{const a=(t=r.period)==null?void 0:t.split(" - ")[0],m=a==null?void 0:a.substring(6,10),o=a==null?void 0:a.substring(3,5);return m==u.substring(6,10)&&o==u.substring(3,5)}},q=u=>r.status=="\u0412\u0441\u0435"?!0:u.order&&Array.isArray(u.order.checks)?u.order.checks.findIndex(t=>U[t.status+1]?r.status==U[t.status+1].name:!1)!=-1:!1,J=u=>{h.value.push(u),E.dispatch(te.GET_BILL_FILE_SAVE,u).finally(()=>{h.value=h.value.filter(t=>t!==u)})},K=(u,t)=>{const m=E.getters.getCompanyStoragesData(u).find(o=>o.guid==t);return m?m.name.replace(/(^|\s)\S/g,o=>o.toUpperCase()).replace(/(ООО)|(")|(\s)|([а-я])/g,""):"\u0421\u043A\u043B\u0430\u0434"};return(u,t)=>(i(),n("div",ve,[s("div",pe,[s("div",fe,[g(me,{maxPage:l.value.maxItemOnPage!=-1?Math.ceil(_(c).length/l.value.maxItemOnPage):1,currentPage:l.value.currentPage,"onUpdate:currentPage":t[0]||(t[0]=a=>l.value.currentPage=a),maxItemOnPage:l.value.maxItemOnPage,"onUpdate:maxItemOnPage":t[1]||(t[1]=a=>l.value.maxItemOnPage=a)},null,8,["maxPage","currentPage","maxItemOnPage"])]),s("div",{class:"orders-heading-info-text",style:se(_(c).length!=e.data.length?"visibility: visible":"visibility: hidden")}," \u041F\u043E\u043A\u0430\u0437\u0430\u043D\u043E "+f(_(c).length)+" \u0438\u0437 "+f(e.data.length),5)]),s("div",ge,[s("div",_e,[he,s("div",{class:y("orders-list-elem"+(C.search!=""&&C.id==1?" active":"")+(p.value[1].value!=""?" active":""))},[g(ue,{modelValue:p.value[1].value,"onUpdate:modelValue":t[2]||(t[2]=a=>p.value[1].value=a),show:p.value[1].show,"onUpdate:show":t[3]||(t[3]=a=>p.value[1].show=a)},null,8,["modelValue","show"]),Ce,s("div",{class:y("orders-list-elem-filter"+(p.value[1].show||p.value[1].value!=""?" active":"")),title:"\u0424\u0438\u043B\u044C\u0442\u0440",onClick:t[4]||(t[4]=a=>p.value[1].show=!0)},De,2)],2),s("div",{class:y("orders-list-elem"+(e.contrAgent!=""?" active":""))},"\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442",2),s("div",{class:y("orders-list-elem"+(C.search!=""&&C.id==2?" active":""))},"\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F",2),s("div",{class:y("orders-list-elem"+(C.search!=""&&C.id==3?" active":"")),style:{"justify-content":"space-around"}},"\u041D\u043E\u043C\u0435\u0440 \u0437\u0430\u043A\u0430\u0437\u0430",2),s("div",{class:y("orders-list-elem"+(e.status!="\u0412\u0441\u0435"?" active":""))},"\u0421\u0442\u0430\u0442\u0443\u0441",2),s("div",{class:y("orders-list-elem"+(C.search!=""&&C.id==4?" active":""))},"\u041F\u0440\u0438\u0447\u0438\u043D\u0430",2)]),(i(!0),n(M,null,x(_(c),(a,m)=>(i(),n("div",{key:m,class:y("orders-list-item"+(m==d.value?" active":""))},[V(m)?(i(),n("div",{key:0,class:"orders-list-row orders-list-main-row",onClick:o=>m===d.value?d.value=-1:d.value=m},[s("div",Ee,[L(f(m+1)+" ",1),Pe]),s("div",we," \u041F\u0440\u0435\u0442\u0435\u043D\u0437\u0438\u044F \u2116 "+f(a.bitrix_id)+" \u043E\u0442 "+f(a.date_create.substring(0,10)),1),s("div",Se,[s("span",{innerHTML:a.partner_name},null,8,$e)]),s("div",Oe,f(a.date_create.substring(0,10)),1),s("div",Be,f(a.order?a.order.n:""),1),Ue,s("div",be,f(a.case),1)],8,Ae)):D("",!0),V(m)?(i(),n("div",{key:1,class:y(["orders-list-info",{active:m==d.value}]),onClick:t[5]||(t[5]=o=>$.value=-1)},[a.order&&Array.isArray(a.order.checks)?(i(),n("div",Ie,[(i(!0),n(M,null,x(a.order.checks,(o,W)=>{var k,F,T,N;return i(),n("div",{class:"orders-list-info-row",key:W},[s("div",Le,f(K(a.partner_guid,o.organization_id)),1),s("div",Ve,[o.status>=2?(i(),n("div",ke,[s("div",{class:"orders-list-info-download",onClick:fs=>J(o.guid)},[s("span",null," \u0421\u0447\u0451\u0442 \u043E\u0442 "+f(a.order.date.substring(0,10)),1),h.value.includes(a.guid)?(i(),j(I,{key:0,small:""})):D("",!0)],8,Fe),Te])):(i(),n("div",Ne,[s("div",Me," \u0421\u0447\u0451\u0442 \u043E\u0442 "+f(a.order.date.substring(0,10)),1),xe]))]),o.doc_status?(i(),n("div",Ge,[((k=o.doc_status)==null?void 0:k.StatusSchet)&&o.status>=2?(i(),n("a",{key:0,class:"orders-list-info-doc sc",href:`${_(A)}/api/order/print?id=${o.guid}&name=\u0421\u0447\u0435\u0442`,target:"_blank",title:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u0447\u0435\u0442"},null,8,Re)):D("",!0),(F=o.doc_status)!=null&&F.StatusUPD?(i(),n("a",{key:1,class:"orders-list-info-doc upd",href:`${_(A)}/api/order/print?id=${o.guid}&name=\u0423\u041F\u0414`,target:"_blank",title:"\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u0435\u0440\u0435\u0434\u0430\u0442\u043E\u0447\u043D\u044B\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442"},null,8,ze)):D("",!0),(T=o.doc_status)!=null&&T.StatusSF?(i(),n("a",{key:2,class:"orders-list-info-doc sf",href:`${_(A)}/api/order/print?id=${o.guid}&name=\u0421\u0424`,target:"_blank",title:"\u0421\u0447\u0451\u0442-\u0444\u0430\u043A\u0442\u0443\u0440\u0430"},null,8,He)):D("",!0),(N=o.doc_status)!=null&&N.StatusUPK?(i(),n("a",{key:3,class:"orders-list-info-doc kor",href:`${_(A)}/api/order/print?id=${o.guid}&name=\u0423\u041A\u0414`,target:"_blank",title:"\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u044B\u0439 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u043E\u0447\u043D\u044B\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442"},null,8,qe)):D("",!0)])):(i(),n("div",je,[g(I,{small:""})])),Je,s("div",Ke,f(_(U)[o.status+1]?_(U)[o.status+1].name:""),1),We])}),128))])):(i(),n("div",Ye,Qe))],2)):D("",!0)],2))),128)),e.data.length==0&&!e.loading?(i(),n("div",Xe,ss)):D("",!0)]),e.loading?(i(),j(I,{key:0,style:{width:"100%"}})):D("",!0),g(ce,{modelValue:P.value,"onUpdate:modelValue":t[6]||(t[6]=a=>P.value=a),orderId:b.value},null,8,["modelValue","orderId"])]))}}),ts=G({components:{PersonalBar:Y,Notification:Z,CompanyBarTop:Q,TopNav:X,SelectInput:oe,ClaimsListCard:us},setup(){const e=R(),r=v(!0),l=v(""),E=v(0),d=v(0),$=v({id:1,search:""}),O=[{id:1,name:"\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"},{id:2,name:"\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F"},{id:3,name:"\u041D\u043E\u043C\u0435\u0440 \u0437\u0430\u043A\u0430\u0437\u0430"},{id:4,name:"\u041F\u0440\u0438\u0447\u0438\u043D\u0430"}];ie(async()=>{var h;if(Promise.all([e.dispatch(z.GET_ORDERS),e.dispatch(le.GET_CLAIMS)]).finally(()=>{r.value=!1}),e.getters.getActiveCompanyId!==""){l.value=e.getters.getActiveCompanyId;return}e.getters.isCompanysLoad||await e.dispatch(ne.GET_COMPANYS),l.value=e.getters.getCompanys===[]?"":(h=e.getters.getCompanys[0])==null?void 0:h.uid});const P=()=>{e.commit(de.CLEAR_CLAIMS_NEW)};return{loading:r,searchColumn:O,search:$,filterCompanyUid:l,filterPeriod:E,filterStatus:d,OrdersSatusCode:U,companyBarTopData:S(()=>e.getters.getCompanysList),filterCompanyData:S(()=>e.getters.getCompanysListInput()),filterPeriodData:S(()=>e.getters.getOrdersDataPeriodArray),claimsList:S(()=>e.getters.getClaims),isOrders:S(()=>e.getters.isOrders),newClaim:P}}}),as={class:"top-line product-page"},rs={class:"orders-heading"},os={class:"orders-heading-elem"},is={class:"orders-heading-item"},ls=s("div",{class:"orders-heading-text"},"\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442:",-1),ns={class:"orders-heading-item"},ds=s("div",{class:"orders-heading-text"},"\u0421\u0442\u0430\u0442\u0443\u0441:",-1),cs={class:"orders-heading-item","data-select2-id":"147"},ms=s("div",{class:"orders-heading-text"},"\u041F\u0435\u0440\u0438\u043E\u0434:",-1),vs=s("div",{class:"orders-heading-elem"},null,-1);function ps(e,r,l,E,d,$){const O=w("CompanyBarTop"),P=w("Notification"),h=w("PersonalBar"),b=w("top-nav"),A=w("SelectInput"),p=w("ClaimsListCard");return i(),n("div",null,[s("div",as,[g(O,{data:e.companyBarTopData,modelValue:e.filterCompanyUid,"onUpdate:modelValue":r[0]||(r[0]=c=>e.filterCompanyUid=c)},null,8,["data","modelValue"]),g(P),g(h)]),g(b,{claims:e.isOrders,onOnClick:e.newClaim},null,8,["claims","onOnClick"]),s("div",rs,[s("div",os,[s("div",is,[ls,g(A,{data:e.filterCompanyData,modelValue:e.filterCompanyUid,"onUpdate:modelValue":r[1]||(r[1]=c=>e.filterCompanyUid=c)},null,8,["data","modelValue"])]),s("div",ns,[ds,g(A,{data:e.OrdersSatusCode,modelValue:e.filterStatus,"onUpdate:modelValue":r[2]||(r[2]=c=>e.filterStatus=c)},null,8,["data","modelValue"])]),s("div",cs,[ms,g(A,{data:e.filterPeriodData,modelValue:e.filterPeriod,"onUpdate:modelValue":r[3]||(r[3]=c=>e.filterPeriod=c)},null,8,["data","modelValue"])]),s("div",{class:"orders-heading-clean",title:"\u0423\u0431\u0440\u0430\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440\u044B",onClick:r[4]||(r[4]=c=>{e.filterCompanyUid="",e.filterPeriod=0,e.filterStatus=0})})]),vs]),g(p,{data:e.claimsList,loading:e.loading,contrAgent:e.filterCompanyUid,period:e.filterPeriodData[e.filterPeriod].name,status:e.OrdersSatusCode[e.filterStatus].name,search:e.search},null,8,["data","loading","contrAgent","period","status","search"])])}var Es=re(ts,[["render",ps]]);export{Es as default};
