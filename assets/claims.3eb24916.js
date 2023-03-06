import{_ as Y}from"./PersonalBar.435b861c.js";import{N as Z}from"./Notification.cc6a6a52.js";import{_ as Q}from"./CompanyBarTop.5c181ee1.js";import{_ as X}from"./TopNav.741bd3d6.js";import{d as G,h as v,g as j,B as ee,J as B,j as S,o as i,b as l,a as e,p as _,u as g,R as se,t as p,z as C,F as M,f as x,m as I,k as y,c as R,e as L,ay as z,ag as ue,l as te,_ as ae,i as re,ax as oe,s as ie,aw as le,r as w}from"./index.8da950ad.js";import{O as b,_ as ne}from"./types.bf7a6549.js";import{M as de}from"./ModalInput.7e5248d6.js";import{_ as ce}from"./CatalogPagination.ac4268ed.js";import{S as me}from"./SelectInput.7668cdf1.js";const ve={class:"orders-list-wrap"},fe={class:"orders-heading-info"},pe={class:"orders-heading-pagination"},_e={class:"orders-list"},ge={class:"orders-list-row orders-list-heading"},he=e("div",{class:"orders-list-elem"},"\u2116",-1),Ce=e("div",null,"\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435",-1),ye=e("svg",{width:"13",height:"9",viewBox:"0 0 13 9",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{class:"fill",d:"M7.00726 8.11117L12.7923 2.32601C12.9262 2.1922 13 2.01359 13 1.82313C13 1.63268 12.9262 1.45406 12.7923 1.32026L12.3664 0.894224C12.0888 0.616998 11.6378 0.616998 11.3606 0.894224L6.5027 5.75217L1.63936 0.888833C1.50545 0.755029 1.32694 0.681152 1.13659 0.681152C0.946033 0.681152 0.767522 0.755029 0.633507 0.888833L0.207681 1.31487C0.0737714 1.44878 -4.1357e-08 1.62729 -4.9682e-08 1.81774C-5.8007e-08 2.0082 0.0737714 2.18681 0.207681 2.32062L5.99802 8.11117C6.13236 8.24529 6.31171 8.31896 6.50238 8.31854C6.69378 8.31896 6.87303 8.24529 7.00726 8.11117Z",fill:"#A5A7A9"})],-1),De=[ye],Ee=["onClick"],Ae={class:"orders-list-elem"},Pe=e("div",{class:"table-arrow"},null,-1),we={class:"orders-list-elem"},Se={class:"orders-list-elem"},$e=["innerHTML"],Oe={class:"orders-list-elem"},Be={class:"orders-list-elem",style:{"justify-content":"space-around"}},be=e("div",{class:"orders-list-elem"},null,-1),Ue={class:"orders-list-elem"},Le={key:0},Ie={class:"orders-list-info-elem"},Ve={class:"orders-list-info-elem"},Fe={key:0,class:"orders-list-info-about tooltip"},ke=["onClick"],Te=e("span",{class:"tooltiptext"},"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0441\u0447\u0435\u0442",-1),Ne={key:1,class:"orders-list-info-about tooltip"},Me={class:"orders-list-info-download disable"},xe=e("span",{class:"tooltiptext"},[I("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0441\u0447\u0435\u0442 \u043C\u043E\u0436\u043D\u043E \u0442\u043E\u043B\u044C\u043A\u043E "),e("br"),I(" \u043F\u043E\u0441\u043B\u0435 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F \u0437\u0430\u043A\u0430\u0437\u0430")],-1),Re={key:0,class:"orders-list-info-elem orders-list-info-doc-wrap"},Ge={key:1,class:"orders-list-info-elem orders-list-info-doc-wrap"},je=["href"],ze=["href"],qe=["href"],He=["href"],Je=e("div",{class:"orders-list-info-elem"},null,-1),Ke={class:"orders-list-info-elem"},We=e("div",{class:"orders-list-info-elem"},null,-1),Ye={key:1,class:"orders-list-info-row"},Ze=te('<div class="orders-list-info-elem"></div><div class="orders-list-info-elem"> \u0421\u0447\u0435\u0442 \u043E\u0442\u0441\u0443\u0442\u0432\u0443\u0435\u0442 </div><div class="orders-list-info-elem"></div><div class="orders-list-info-elem"></div><div class="orders-list-info-elem"></div><div class="orders-list-info-elem"></div><div class="orders-list-info-elem"></div>',7),Qe=[Ze],Xe={key:0,class:"orders-list-row orders-list-main-row"},es=e("div",{class:"order-info"}," \u041F\u0440\u0435\u0442\u0435\u043D\u0437\u0438\u0439 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E. ",-1),ss=[es],us=G({__name:"ClaimsListCard",props:{data:{type:Array,required:!0},contrAgent:{type:String},period:{type:String},status:{type:String},loading:{type:Boolean,default:!1},search:{type:Object,required:!0}},setup(s){const r=s,n=v({maxItemOnPage:10,currentPage:1}),E=j(),d=v(-1),$=v(-1),O=v(null),A=v(!1),P=v([]),U=v(-1),D="http://91.232.12.198:82",f=v([{name:"id",value:"",show:!1},{name:"name",value:"",show:!1},{name:"id",value:"",show:!1},{name:"id",value:"",show:!1},{name:"id",value:"",show:!1},{name:"id",value:"",show:!1}]);ee(O,()=>{$.value=-1}),B(d,()=>{var u,t,a;if(d.value!=-1&&c.value&&Array.isArray((u=c.value[d.value].order)==null?void 0:u.checks)){let m=(a=(t=c.value[d.value].order)==null?void 0:t.checks)==null?void 0:a.map(o=>o.doc_status?null:E.dispatch(z.GET_ORDERS_DOCSTATUS,o.guid));m&&Promise.all(m).finally(()=>{})}}),B(()=>r.status,()=>{n.value.currentPage=1,d.value=-1}),B(()=>r.contrAgent,()=>{n.value.currentPage=1,d.value=-1}),B(()=>r.search,()=>{n.value.currentPage=1,d.value=-1}),B(()=>r.period,()=>{n.value.currentPage=1,d.value=-1});const c=S(()=>{let u=r.data.filter(t=>r.contrAgent==""||t.partner_guid==r.contrAgent);return u=u.filter(t=>q(t.date_create)),u=u.filter(t=>H(t)),u=u.filter(t=>h(t)),f.value[1].value!=""&&(u=u.filter(t=>`\u041F\u0440\u0435\u0442\u0435\u043D\u0437\u0438\u044F \u2116 ${t.bitrix_id} \u043E\u0442 ${t.date_create.substring(0,10)}`.indexOf(f.value[1].value)!=-1)),u}),V=u=>n.value.maxItemOnPage!=-1?u>=(n.value.currentPage-1)*n.value.maxItemOnPage&&u<n.value.currentPage*n.value.maxItemOnPage:!0,h=u=>{if(r.search.search=="")return!0;switch(r.search.id){case 1:return`\u041F\u0440\u0435\u0442\u0435\u043D\u0437\u0438\u044F \u2116 ${u.bitrix_id} \u043E\u0442 ${u.date_create.substring(0,10)}`.toUpperCase().indexOf(r.search.search.toUpperCase())!=-1;case 2:return u.date_create.toUpperCase().indexOf(r.search.search.toUpperCase())!=-1;case 3:return u.order?String(u.order.n).toUpperCase().indexOf(r.search.search.toUpperCase())!=-1:!1;case 4:return u.case?String(u.case).toUpperCase().indexOf(r.search.search.toUpperCase())!=-1:!1;default:return!0}},q=u=>{var t;if(!u)return!1;if(r.period=="\u0412\u0441\u0435")return!0;{const a=(t=r.period)==null?void 0:t.split(" - ")[0],m=a==null?void 0:a.substring(6,10),o=a==null?void 0:a.substring(3,5);return m==u.substring(6,10)&&o==u.substring(3,5)}},H=u=>r.status=="\u0412\u0441\u0435"?!0:u.order&&Array.isArray(u.order.checks)?u.order.checks.findIndex(t=>b[t.status+1]?r.status==b[t.status+1].name:!1)!=-1:!1,J=u=>{P.value.push(u),E.dispatch(ue.GET_BILL_FILE_SAVE,u).finally(()=>{P.value=P.value.filter(t=>t!==u)})},K=(u,t)=>{const m=E.getters.getCompanyStoragesData(u).find(o=>o.guid==t);return m?m.name.replace(/(^|\s)\S/g,o=>o.toUpperCase()).replace(/(ООО)|(")|(\s)|([а-я])/g,""):"\u0421\u043A\u043B\u0430\u0434"};return(u,t)=>(i(),l("div",ve,[e("div",fe,[e("div",pe,[_(ce,{maxPage:n.value.maxItemOnPage!=-1?Math.ceil(g(c).length/n.value.maxItemOnPage):1,currentPage:n.value.currentPage,"onUpdate:currentPage":t[0]||(t[0]=a=>n.value.currentPage=a),maxItemOnPage:n.value.maxItemOnPage,"onUpdate:maxItemOnPage":t[1]||(t[1]=a=>n.value.maxItemOnPage=a)},null,8,["maxPage","currentPage","maxItemOnPage"])]),e("div",{class:"orders-heading-info-text",style:se(g(c).length!=s.data.length?"visibility: visible":"visibility: hidden")}," \u041F\u043E\u043A\u0430\u0437\u0430\u043D\u043E "+p(g(c).length)+" \u0438\u0437 "+p(s.data.length),5)]),e("div",_e,[e("div",ge,[he,e("div",{class:C("orders-list-elem"+(h.search!=""&&h.id==1?" active":"")+(f.value[1].value!=""?" active":""))},[_(de,{modelValue:f.value[1].value,"onUpdate:modelValue":t[2]||(t[2]=a=>f.value[1].value=a),show:f.value[1].show,"onUpdate:show":t[3]||(t[3]=a=>f.value[1].show=a)},null,8,["modelValue","show"]),Ce,e("div",{class:C("orders-list-elem-filter"+(f.value[1].show||f.value[1].value!=""?" active":"")),title:"\u0424\u0438\u043B\u044C\u0442\u0440",onClick:t[4]||(t[4]=a=>f.value[1].show=!0)},De,2)],2),e("div",{class:C("orders-list-elem"+(s.contrAgent!=""?" active":""))},"\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442",2),e("div",{class:C("orders-list-elem"+(h.search!=""&&h.id==2?" active":""))},"\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F",2),e("div",{class:C("orders-list-elem"+(h.search!=""&&h.id==3?" active":"")),style:{"justify-content":"space-around"}},"\u041D\u043E\u043C\u0435\u0440 \u0437\u0430\u043A\u0430\u0437\u0430",2),e("div",{class:C("orders-list-elem"+(s.status!="\u0412\u0441\u0435"?" active":""))},"\u0421\u0442\u0430\u0442\u0443\u0441",2),e("div",{class:C("orders-list-elem"+(h.search!=""&&h.id==4?" active":""))},"\u041F\u0440\u0438\u0447\u0438\u043D\u0430",2)]),(i(!0),l(M,null,x(g(c),(a,m)=>(i(),l("div",{key:m,class:C("orders-list-item"+(m==d.value?" active":""))},[V(m)?(i(),l("div",{key:0,class:"orders-list-row orders-list-main-row",onClick:o=>m===d.value?d.value=-1:d.value=m},[e("div",Ae,[I(p(m+1)+" ",1),Pe]),e("div",we," \u041F\u0440\u0435\u0442\u0435\u043D\u0437\u0438\u044F \u2116 "+p(a.bitrix_id)+" \u043E\u0442 "+p(a.date_create.substring(0,10)),1),e("div",Se,[e("span",{innerHTML:a.partner_name},null,8,$e)]),e("div",Oe,p(a.date_create.substring(0,10)),1),e("div",Be,p(a.order?a.order.n:""),1),be,e("div",Ue,p(a.case),1)],8,Ee)):y("",!0),V(m)?(i(),l("div",{key:1,class:C(["orders-list-info",{active:m==d.value}]),onClick:t[5]||(t[5]=o=>$.value=-1)},[a.order&&Array.isArray(a.order.checks)?(i(),l("div",Le,[(i(!0),l(M,null,x(a.order.checks,(o,W)=>{var F,k,T,N;return i(),l("div",{class:"orders-list-info-row",key:W},[e("div",Ie,p(K(a.partner_guid,o.organization_id)),1),e("div",Ve,[o.status>=2?(i(),l("div",Fe,[e("div",{class:"orders-list-info-download",onClick:ps=>J(o.guid)},[e("span",null," \u0421\u0447\u0451\u0442 \u043E\u0442 "+p(a.order.date.substring(0,10)),1),P.value.includes(a.guid)?(i(),R(L,{key:0,small:""})):y("",!0)],8,ke),Te])):(i(),l("div",Ne,[e("div",Me," \u0421\u0447\u0451\u0442 \u043E\u0442 "+p(a.order.date.substring(0,10)),1),xe]))]),o.doc_status?(i(),l("div",Ge,[((F=o.doc_status)==null?void 0:F.StatusSchet)&&o.status>=2?(i(),l("a",{key:0,class:"orders-list-info-doc sc",href:`${g(D)}/api/order/print?id=${o.guid}&name=\u0421\u0447\u0435\u0442`,target:"_blank",title:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u0447\u0435\u0442"},null,8,je)):y("",!0),(k=o.doc_status)!=null&&k.StatusUPD?(i(),l("a",{key:1,class:"orders-list-info-doc upd",href:`${g(D)}/api/order/print?id=${o.guid}&name=\u0423\u041F\u0414`,target:"_blank",title:"\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u0435\u0440\u0435\u0434\u0430\u0442\u043E\u0447\u043D\u044B\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442"},null,8,ze)):y("",!0),(T=o.doc_status)!=null&&T.StatusSF?(i(),l("a",{key:2,class:"orders-list-info-doc sf",href:`${g(D)}/api/order/print?id=${o.guid}&name=\u0421\u0424`,target:"_blank",title:"\u0421\u0447\u0451\u0442-\u0444\u0430\u043A\u0442\u0443\u0440\u0430"},null,8,qe)):y("",!0),(N=o.doc_status)!=null&&N.StatusUPK?(i(),l("a",{key:3,class:"orders-list-info-doc kor",href:`${g(D)}/api/order/print?id=${o.guid}&name=\u0423\u041A\u0414`,target:"_blank",title:"\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u044B\u0439 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u043E\u0447\u043D\u044B\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442"},null,8,He)):y("",!0)])):(i(),l("div",Re,[_(L,{small:""})])),Je,e("div",Ke,p(g(b)[o.status+1]?g(b)[o.status+1].name:""),1),We])}),128))])):(i(),l("div",Ye,Qe))],2)):y("",!0)],2))),128)),s.data.length==0&&!s.loading?(i(),l("div",Xe,ss)):y("",!0)]),s.loading?(i(),R(L,{key:0,style:{width:"100%"}})):y("",!0),_(ne,{modelValue:A.value,"onUpdate:modelValue":t[6]||(t[6]=a=>A.value=a),orderId:U.value},null,8,["modelValue","orderId"])]))}}),ts=G({components:{PersonalBar:Y,Notification:Z,CompanyBarTop:Q,TopNav:X,SelectInput:me,ClaimsListCard:us},setup(){const s=j(),r=v(!1),n=v(""),E=v(0),d=v(0),$=v({id:1,search:""}),O=[{id:1,name:"\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"},{id:2,name:"\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F"},{id:3,name:"\u041D\u043E\u043C\u0435\u0440 \u0437\u0430\u043A\u0430\u0437\u0430"},{id:4,name:"\u041F\u0440\u0438\u0447\u0438\u043D\u0430"}];re(()=>{r.value=!0,s.dispatch(z.GET_ORDERS).finally(()=>{s.dispatch(oe.GET_CLAIMS).finally(()=>{r.value=!1})}),s.getters.isCompanysLoad||s.dispatch(ie.GET_COMPANYS)});const A=()=>{s.commit(le.CLEAR_CLAIMS_NEW)};return{loading:r,searchColumn:O,search:$,filterCompanyUid:n,filterPeriod:E,filterStatus:d,OrdersSatusCode:b,companyBarTopData:S(()=>s.getters.getCompanysList),filterCompanyData:S(()=>s.getters.getCompanysListInput()),filterPeriodData:S(()=>s.getters.getOrdersDataPeriodArray),claimsList:S(()=>s.getters.getClaims),isOrders:S(()=>s.getters.isOrders),newClaim:A}}}),as={class:"top-line product-page"},rs={class:"orders-heading"},os={class:"orders-heading-elem"},is={class:"orders-heading-item"},ls=e("div",{class:"orders-heading-text"},"\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442:",-1),ns={class:"orders-heading-item"},ds=e("div",{class:"orders-heading-text"},"\u0421\u0442\u0430\u0442\u0443\u0441:",-1),cs={class:"orders-heading-item","data-select2-id":"147"},ms=e("div",{class:"orders-heading-text"},"\u041F\u0435\u0440\u0438\u043E\u0434:",-1),vs=e("div",{class:"orders-heading-elem"},null,-1);function fs(s,r,n,E,d,$){const O=w("CompanyBarTop"),A=w("Notification"),P=w("PersonalBar"),U=w("top-nav"),D=w("SelectInput"),f=w("ClaimsListCard");return i(),l("div",null,[e("div",as,[_(O,{data:s.companyBarTopData,modelValue:s.filterCompanyUid,"onUpdate:modelValue":r[0]||(r[0]=c=>s.filterCompanyUid=c)},null,8,["data","modelValue"]),_(A),_(P)]),_(U,{claims:s.isOrders,onOnClick:s.newClaim},null,8,["claims","onOnClick"]),e("div",rs,[e("div",os,[e("div",is,[ls,_(D,{data:s.filterCompanyData,modelValue:s.filterCompanyUid,"onUpdate:modelValue":r[1]||(r[1]=c=>s.filterCompanyUid=c)},null,8,["data","modelValue"])]),e("div",ns,[ds,_(D,{data:s.OrdersSatusCode,modelValue:s.filterStatus,"onUpdate:modelValue":r[2]||(r[2]=c=>s.filterStatus=c)},null,8,["data","modelValue"])]),e("div",cs,[ms,_(D,{data:s.filterPeriodData,modelValue:s.filterPeriod,"onUpdate:modelValue":r[3]||(r[3]=c=>s.filterPeriod=c)},null,8,["data","modelValue"])]),e("div",{class:"orders-heading-clean",title:"\u0423\u0431\u0440\u0430\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440\u044B",onClick:r[4]||(r[4]=c=>{s.filterCompanyUid="",s.filterPeriod=0,s.filterStatus=0})})]),vs]),_(f,{data:s.claimsList,loading:s.loading,contrAgent:s.filterCompanyUid,period:s.filterPeriodData[s.filterPeriod].name,status:s.OrdersSatusCode[s.filterStatus].name,search:s.search},null,8,["data","loading","contrAgent","period","status","search"])])}var ws=ae(ts,[["render",fs]]);export{ws as default};
