import{_ as Y,N as Z}from"./PersonalBar.9b84b0fc.js";import{_ as X}from"./CompanyBarTop.48f64128.js";import{_ as ee}from"./TopNav.c2e2c6d8.js";import{P as I}from"./PreloaderLocal.0fdb54b9.js";import{O as b,M as se,a as ue}from"./types.27837570.js";import{_ as te}from"./CatalogPagination.cced27d2.js";import{d as R,g as v,f as j,z as ae,J as B,i as S,o as i,b as l,a as e,m as g,u as _,Q as re,t as p,y as C,F as M,e as x,l as L,j as y,c as G,k as z,ak as q,ag as oe,B as ie,_ as le,h as ne,ai as de,q as ce,ah as me,r as w}from"./index.dd5c42dc.js";import{S as ve}from"./SelectInput.d490096b.js";import"./DeleteButton.f5aacfdc.js";import"./OrderDraftCard.41d10b78.js";const fe={class:"orders-list-wrap"},pe={class:"orders-heading-info"},ge={class:"orders-heading-pagination"},_e={class:"orders-list"},he={class:"orders-list-row orders-list-heading"},Ce=e("div",{class:"orders-list-elem"},"\u2116",-1),ye=e("div",null,"\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435",-1),De=e("svg",{width:"13",height:"9",viewBox:"0 0 13 9",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{class:"fill",d:"M7.00726 8.11117L12.7923 2.32601C12.9262 2.1922 13 2.01359 13 1.82313C13 1.63268 12.9262 1.45406 12.7923 1.32026L12.3664 0.894224C12.0888 0.616998 11.6378 0.616998 11.3606 0.894224L6.5027 5.75217L1.63936 0.888833C1.50545 0.755029 1.32694 0.681152 1.13659 0.681152C0.946033 0.681152 0.767522 0.755029 0.633507 0.888833L0.207681 1.31487C0.0737714 1.44878 -4.1357e-08 1.62729 -4.9682e-08 1.81774C-5.8007e-08 2.0082 0.0737714 2.18681 0.207681 2.32062L5.99802 8.11117C6.13236 8.24529 6.31171 8.31896 6.50238 8.31854C6.69378 8.31896 6.87303 8.24529 7.00726 8.11117Z",fill:"#A5A7A9"})],-1),Ee=[De],Pe=["onClick"],Ae={class:"orders-list-elem"},we=e("div",{class:"table-arrow"},null,-1),Se={class:"orders-list-elem"},Oe={class:"orders-list-elem"},$e=["innerHTML"],Be={class:"orders-list-elem"},be={class:"orders-list-elem",style:{"justify-content":"space-around"}},Ue=e("div",{class:"orders-list-elem"},null,-1),Ie={class:"orders-list-elem"},Le={key:0},ke={class:"orders-list-info-elem"},Ve={class:"orders-list-info-elem"},Fe={key:0,class:"orders-list-info-about tooltip"},Te=["onClick"],Ne=e("span",{class:"tooltiptext"},"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0441\u0447\u0435\u0442",-1),Me={key:1,class:"orders-list-info-about tooltip"},xe={class:"orders-list-info-download disable"},Ge=e("span",{class:"tooltiptext"},[L("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0441\u0447\u0435\u0442 \u043C\u043E\u0436\u043D\u043E \u0442\u043E\u043B\u044C\u043A\u043E "),e("br"),L(" \u043F\u043E\u0441\u043B\u0435 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F \u0437\u0430\u043A\u0430\u0437\u0430")],-1),Re={key:0,class:"orders-list-info-elem orders-list-info-doc-wrap"},je={key:1,class:"orders-list-info-elem orders-list-info-doc-wrap"},ze=["href"],qe=["href"],He=["href"],Je=["href"],Ke=e("div",{class:"orders-list-info-elem"},null,-1),Qe={class:"orders-list-info-elem"},We=e("div",{class:"orders-list-info-elem"},null,-1),Ye={key:1,class:"orders-list-info-row"},Ze=ie('<div class="orders-list-info-elem"></div><div class="orders-list-info-elem"> \u0421\u0447\u0435\u0442 \u043E\u0442\u0441\u0443\u0442\u0432\u0443\u0435\u0442 </div><div class="orders-list-info-elem"></div><div class="orders-list-info-elem"></div><div class="orders-list-info-elem"></div><div class="orders-list-info-elem"></div><div class="orders-list-info-elem"></div>',7),Xe=[Ze],es={key:0,class:"orders-list-row orders-list-main-row"},ss=e("div",{class:"order-info"}," \u041F\u0440\u0435\u0442\u0435\u043D\u0437\u0438\u0439 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E. ",-1),us=[ss],ts=R({__name:"ClaimsListCard",props:{data:{type:Array,required:!0},contrAgent:{type:String},period:{type:String},status:{type:String},loading:{type:Boolean,default:!1},search:{type:Object,required:!0}},setup(s){const r=s,n=v({maxItemOnPage:10,currentPage:1}),E=j(z),d=v(-1),O=v(-1),$=v(null),P=v(!1),A=v([]),U=v(-1),D="http://91.232.12.198:82",f=v([{name:"id",value:"",show:!1},{name:"name",value:"",show:!1},{name:"id",value:"",show:!1},{name:"id",value:"",show:!1},{name:"id",value:"",show:!1},{name:"id",value:"",show:!1}]);ae($,()=>{O.value=-1}),B(d,()=>{var u,t,a;if(d.value!=-1&&c.value&&Array.isArray((u=c.value[d.value].order)==null?void 0:u.checks)){let m=(a=(t=c.value[d.value].order)==null?void 0:t.checks)==null?void 0:a.map(o=>o.doc_status?null:E.dispatch(q.GET_ORDERS_DOCSTATUS,o.guid));m&&Promise.all(m).finally(()=>{})}}),B(()=>r.status,()=>{n.value.currentPage=1,d.value=-1}),B(()=>r.contrAgent,()=>{n.value.currentPage=1,d.value=-1}),B(()=>r.search,()=>{n.value.currentPage=1,d.value=-1}),B(()=>r.period,()=>{n.value.currentPage=1,d.value=-1});const c=S(()=>{let u=r.data.filter(t=>r.contrAgent==""||t.partner_guid==r.contrAgent);return u=u.filter(t=>H(t.date_create)),u=u.filter(t=>J(t)),u=u.filter(t=>h(t)),f.value[1].value!=""&&(u=u.filter(t=>`\u041F\u0440\u0435\u0442\u0435\u043D\u0437\u0438\u044F \u2116 ${t.bitrix_id} \u043E\u0442 ${t.date_create.substring(0,10)}`.indexOf(f.value[1].value)!=-1)),u}),k=u=>n.value.maxItemOnPage!=-1?u>=(n.value.currentPage-1)*n.value.maxItemOnPage&&u<n.value.currentPage*n.value.maxItemOnPage:!0,h=u=>{if(r.search.search=="")return!0;switch(r.search.id){case 1:return`\u041F\u0440\u0435\u0442\u0435\u043D\u0437\u0438\u044F \u2116 ${u.bitrix_id} \u043E\u0442 ${u.date_create.substring(0,10)}`.toUpperCase().indexOf(r.search.search.toUpperCase())!=-1;case 2:return u.date_create.toUpperCase().indexOf(r.search.search.toUpperCase())!=-1;case 3:return u.order?String(u.order.n).toUpperCase().indexOf(r.search.search.toUpperCase())!=-1:!1;case 4:return u.case?String(u.case).toUpperCase().indexOf(r.search.search.toUpperCase())!=-1:!1;default:return!0}},H=u=>{var t;if(!u)return!1;if(r.period=="\u0412\u0441\u0435")return!0;{const a=(t=r.period)==null?void 0:t.split(" - ")[0],m=a==null?void 0:a.substring(6,10),o=a==null?void 0:a.substring(3,5);return m==u.substring(6,10)&&o==u.substring(3,5)}},J=u=>r.status=="\u0412\u0441\u0435"?!0:u.order&&Array.isArray(u.order.checks)?u.order.checks.findIndex(t=>b[parseInt(t.status+1)]?r.status==b[parseInt(t.status+1)].name:!1)!=-1:!1,K=u=>{A.value.push(u),E.dispatch(oe.GET_BILL_FILE_SAVE,u).finally(()=>{A.value=A.value.filter(t=>t!==u)})},Q=(u,t)=>{const m=E.getters.getCompanyStoragesData(u).find(o=>o.guid==t);return m?m.name.replace(/(^|\s)\S/g,o=>o.toUpperCase()).replace(/(ООО)|(")|(\s)|([а-я])/g,""):"\u0421\u043A\u043B\u0430\u0434"};return(u,t)=>(i(),l("div",fe,[e("div",pe,[e("div",ge,[g(te,{maxPage:n.value.maxItemOnPage!=-1?Math.ceil(_(c).length/n.value.maxItemOnPage):1,currentPage:n.value.currentPage,"onUpdate:currentPage":t[0]||(t[0]=a=>n.value.currentPage=a),maxItemOnPage:n.value.maxItemOnPage,"onUpdate:maxItemOnPage":t[1]||(t[1]=a=>n.value.maxItemOnPage=a)},null,8,["maxPage","currentPage","maxItemOnPage"])]),e("div",{class:"orders-heading-info-text",style:re(_(c).length!=s.data.length?"visibility: visible":"visibility: hidden")}," \u041F\u043E\u043A\u0430\u0437\u0430\u043D\u043E "+p(_(c).length)+" \u0438\u0437 "+p(s.data.length),5)]),e("div",_e,[e("div",he,[Ce,e("div",{class:C("orders-list-elem"+(h.search!=""&&h.id==1?" active":"")+(f.value[1].value!=""?" active":""))},[g(se,{modelValue:f.value[1].value,"onUpdate:modelValue":t[2]||(t[2]=a=>f.value[1].value=a),show:f.value[1].show,"onUpdate:show":t[3]||(t[3]=a=>f.value[1].show=a)},null,8,["modelValue","show"]),ye,e("div",{class:C("orders-list-elem-filter"+(f.value[1].show||f.value[1].value!=""?" active":"")),title:"\u0424\u0438\u043B\u044C\u0442\u0440",onClick:t[4]||(t[4]=a=>f.value[1].show=!0)},Ee,2)],2),e("div",{class:C("orders-list-elem"+(s.contrAgent!=""?" active":""))},"\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442",2),e("div",{class:C("orders-list-elem"+(h.search!=""&&h.id==2?" active":""))},"\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F",2),e("div",{class:C("orders-list-elem"+(h.search!=""&&h.id==3?" active":"")),style:{"justify-content":"space-around"}},"\u041D\u043E\u043C\u0435\u0440 \u0437\u0430\u043A\u0430\u0437\u0430",2),e("div",{class:C("orders-list-elem"+(s.status!="\u0412\u0441\u0435"?" active":""))},"\u0421\u0442\u0430\u0442\u0443\u0441",2),e("div",{class:C("orders-list-elem"+(h.search!=""&&h.id==4?" active":""))},"\u041F\u0440\u0438\u0447\u0438\u043D\u0430",2)]),(i(!0),l(M,null,x(_(c),(a,m)=>(i(),l("div",{key:m,class:C("orders-list-item"+(m==d.value?" active":""))},[k(m)?(i(),l("div",{key:0,class:"orders-list-row orders-list-main-row",onClick:o=>m===d.value?d.value=-1:d.value=m},[e("div",Ae,[L(p(m+1)+" ",1),we]),e("div",Se," \u041F\u0440\u0435\u0442\u0435\u043D\u0437\u0438\u044F \u2116 "+p(a.bitrix_id)+" \u043E\u0442 "+p(a.date_create.substring(0,10)),1),e("div",Oe,[e("span",{innerHTML:a.partner_name},null,8,$e)]),e("div",Be,p(a.date_create.substring(0,10)),1),e("div",be,p(a.order?a.order.n:""),1),Ue,e("div",Ie,p(a.case),1)],8,Pe)):y("",!0),k(m)?(i(),l("div",{key:1,class:C(["orders-list-info",{active:m==d.value}]),onClick:t[5]||(t[5]=o=>O.value=-1)},[a.order&&Array.isArray(a.order.checks)?(i(),l("div",Le,[(i(!0),l(M,null,x(a.order.checks,(o,W)=>{var V,F,T,N;return i(),l("div",{class:"orders-list-info-row",key:W},[e("div",ke,p(Q(a.partner_guid,o.organization_id)),1),e("div",Ve,[o.status>=2?(i(),l("div",Fe,[e("div",{class:"orders-list-info-download",onClick:gs=>K(o.guid)},[e("span",null," \u0421\u0447\u0451\u0442 \u043E\u0442 "+p(a.order.date.substring(0,10)),1),A.value.includes(a.guid)?(i(),G(I,{key:0,small:""})):y("",!0)],8,Te),Ne])):(i(),l("div",Me,[e("div",xe," \u0421\u0447\u0451\u0442 \u043E\u0442 "+p(a.order.date.substring(0,10)),1),Ge]))]),o.doc_status?(i(),l("div",je,[((V=o.doc_status)==null?void 0:V.StatusSchet)&&o.status>=2?(i(),l("a",{key:0,class:"orders-list-info-doc sc",href:`${_(D)}/api/order/print?id=${o.guid}&name=\u0421\u0447\u0435\u0442`,target:"_blank",title:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u0447\u0435\u0442"},null,8,ze)):y("",!0),(F=o.doc_status)!=null&&F.StatusUPD?(i(),l("a",{key:1,class:"orders-list-info-doc upd",href:`${_(D)}/api/order/print?id=${o.guid}&name=\u0423\u041F\u0414`,target:"_blank",title:"\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u0435\u0440\u0435\u0434\u0430\u0442\u043E\u0447\u043D\u044B\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442"},null,8,qe)):y("",!0),(T=o.doc_status)!=null&&T.StatusSF?(i(),l("a",{key:2,class:"orders-list-info-doc sf",href:`${_(D)}/api/order/print?id=${o.guid}&name=\u0421\u0424`,target:"_blank",title:"\u0421\u0447\u0451\u0442-\u0444\u0430\u043A\u0442\u0443\u0440\u0430"},null,8,He)):y("",!0),(N=o.doc_status)!=null&&N.StatusUPK?(i(),l("a",{key:3,class:"orders-list-info-doc kor",href:`${_(D)}/api/order/print?id=${o.guid}&name=\u0423\u041A\u0414`,target:"_blank",title:"\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u044B\u0439 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u043E\u0447\u043D\u044B\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442"},null,8,Je)):y("",!0)])):(i(),l("div",Re,[g(I,{small:""})])),Ke,e("div",Qe,p(_(b)[o.status+1]?_(b)[o.status+1].name:""),1),We])}),128))])):(i(),l("div",Ye,Xe))],2)):y("",!0)],2))),128)),s.data.length==0&&!s.loading?(i(),l("div",es,us)):y("",!0)]),s.loading?(i(),G(I,{key:0,style:{width:"100%"}})):y("",!0),g(ue,{modelValue:P.value,"onUpdate:modelValue":t[6]||(t[6]=a=>P.value=a),orderId:U.value},null,8,["modelValue","orderId"])]))}}),as=R({components:{PersonalBar:Y,Notification:Z,CompanyBarTop:X,TopNav:ee,SelectInput:ve,ClaimsListCard:ts},setup(){const s=j(z),r=v(!1),n=v(""),E=v(0),d=v(0),O=v({id:1,search:""}),$=[{id:1,name:"\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"},{id:2,name:"\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F"},{id:3,name:"\u041D\u043E\u043C\u0435\u0440 \u0437\u0430\u043A\u0430\u0437\u0430"},{id:4,name:"\u041F\u0440\u0438\u0447\u0438\u043D\u0430"}];ne(()=>{r.value=!0,s.dispatch(q.GET_ORDERS).finally(()=>{s.dispatch(de.GET_CLAIMS).finally(()=>{r.value=!1})}),s.getters.isCompanysLoad||s.dispatch(ce.GET_COMPANYS)});const P=()=>{s.commit(me.CLEAR_CLAIMS_NEW)};return{loading:r,searchColumn:$,search:O,filterCompanyUid:n,filterPeriod:E,filterStatus:d,OrdersSatusCode:b,companyBarTopData:S(()=>s.getters.getCompanysList),filterCompanyData:S(()=>s.getters.getCompanysListInput),filterPeriodData:S(()=>s.getters.getOrdersDataPeriodArray),claimsList:S(()=>s.getters.getClaims),isOrders:S(()=>s.getters.isOrders),newClaim:P}}}),rs={class:"top-line product-page"},os={class:"orders-heading"},is={class:"orders-heading-elem"},ls={class:"orders-heading-item"},ns=e("div",{class:"orders-heading-text"},"\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442:",-1),ds={class:"orders-heading-item"},cs=e("div",{class:"orders-heading-text"},"\u0421\u0442\u0430\u0442\u0443\u0441:",-1),ms={class:"orders-heading-item","data-select2-id":"147"},vs=e("div",{class:"orders-heading-text"},"\u041F\u0435\u0440\u0438\u043E\u0434:",-1),fs=e("div",{class:"orders-heading-elem"},null,-1);function ps(s,r,n,E,d,O){const $=w("CompanyBarTop"),P=w("Notification"),A=w("PersonalBar"),U=w("top-nav"),D=w("SelectInput"),f=w("ClaimsListCard");return i(),l("div",null,[e("div",rs,[g($,{data:s.companyBarTopData,modelValue:s.filterCompanyUid,"onUpdate:modelValue":r[0]||(r[0]=c=>s.filterCompanyUid=c)},null,8,["data","modelValue"]),g(P),g(A)]),g(U,{claims:s.isOrders,onOnClick:s.newClaim},null,8,["claims","onOnClick"]),e("div",os,[e("div",is,[e("div",ls,[ns,g(D,{data:s.filterCompanyData,modelValue:s.filterCompanyUid,"onUpdate:modelValue":r[1]||(r[1]=c=>s.filterCompanyUid=c)},null,8,["data","modelValue"])]),e("div",ds,[cs,g(D,{data:s.OrdersSatusCode,modelValue:s.filterStatus,"onUpdate:modelValue":r[2]||(r[2]=c=>s.filterStatus=c)},null,8,["data","modelValue"])]),e("div",ms,[vs,g(D,{data:s.filterPeriodData,modelValue:s.filterPeriod,"onUpdate:modelValue":r[3]||(r[3]=c=>s.filterPeriod=c)},null,8,["data","modelValue"])]),e("div",{class:"orders-heading-clean",title:"\u0423\u0431\u0440\u0430\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440\u044B",onClick:r[4]||(r[4]=c=>{s.filterCompanyUid="",s.filterPeriod=0,s.filterStatus=0})})]),fs]),g(f,{data:s.claimsList,loading:s.loading,contrAgent:s.filterCompanyUid,period:s.filterPeriodData[s.filterPeriod].name,status:s.OrdersSatusCode[s.filterStatus].name,search:s.search},null,8,["data","loading","contrAgent","period","status","search"])])}var Os=le(as,[["render",ps]]);export{Os as default};