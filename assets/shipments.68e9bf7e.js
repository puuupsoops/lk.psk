import{_ as J,N as Q}from"./PersonalBar.0a5cfcc7.js";import{_ as W}from"./CompanyBarTop.3385a2e1.js";import{T as X}from"./TopNav.54cc0780.js";import{S as x}from"./SelectInput.57accd31.js";import{P as u4}from"./PreloaderLocal.933d1772.js";import{O as e4,M as s4,a as q}from"./types.10501219.js";import{D as t4}from"./DeleteButton.2351cd2d.js";import{m as R,e as c,x as z,g as O,_ as j,r as f,o,b as d,a as e,j as m,i as y,t as h,v,F as I,d as N,h as F,I as k,u as K,ad as a4,U as o4,P as i4,aa as M,c as G,w as H,k as Y,ah as Z,y as r4,f as d4,ai as l4,n as n4}from"./index.a8f31d7d.js";import"./OrderDraftCard.21cae7d1.js";const c4=R({name:"ShipmentDetailModal",components:{DeleteButton:t4},props:{modelValue:{type:Boolean,required:!0},data:{type:Object}},emits:["update:modelValue"],setup(u){const t=c(null),n=c(!1);z(t,()=>{n.value=!0,setTimeout(()=>{n.value=!1},500)});const S=O(()=>{var p,_,E,C,w,$,g;let l=[];return l.push((p=u.data)!=null&&p.order?u.data.order.name:""),l.push("\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442: "+((_=u.data)==null?void 0:_.partner_name)),l.push("\u0416\u0435\u043B\u0430\u0435\u043C\u0430\u044F \u0434\u0430\u0442\u0430 \u043E\u0442\u0433\u0440\u0443\u0437\u043A\u0438: "+((E=u.data)==null?void 0:E.date)),((C=u.data)==null?void 0:C.case)=="\u0414\u043E \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u043E\u0439"&&(u.data.carriers=="2"&&l.push("\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u0430\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F: \u041F\u042D\u041A"),u.data.carriers=="3"&&l.push("\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u0430\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F: \u0414\u0435\u043B\u043E\u0432\u044B\u0435 \u043B\u0438\u043D\u0438\u0438"),u.data.carriers=="4"&&l.push("\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u0430\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F: \u0411\u0430\u0439\u043A\u0430\u043B"),u.data.carriers=="1"&&l.push("\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u0430\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F: \u0414\u0440\u0443\u0433\u0430\u044F"),u.data.carriers=="1"&&l.push(`\u0410\u0434\u0440\u0435\u0441 \u0422\u041A: ${u.data.address}`),l.push(String(u.data.extra))),((w=u.data)==null?void 0:w.case)=="\u0421\u0430\u043C\u043E\u0432\u044B\u0432\u043E\u0437"&&l.push(`\u0410\u0434\u0440\u0435\u0441 \u0441\u0430\u043C\u043E\u0432\u044B\u0432\u043E\u0437\u0430: ${u.data.address}`),(($=u.data)==null?void 0:$.case)=="\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430"&&l.push(`\u0410\u0434\u0440\u0435\u0441 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438: ${u.data.address}`),l.push("\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0440\u0438\u0439: "+((g=u.data)==null?void 0:g.comment)),l});return{targetModal:t,shake:n,view_message:S}}}),m4={key:0,class:"order-modal"},h4={class:"order-modal-content draft"},v4={class:"order-modal-header"},f4=e("h3",{class:"order-modal-header-title"},"\u0414\u0435\u0442\u0430\u043B\u0438 \u0437\u0430\u044F\u0432\u043A\u0438 \u043D\u0430 \u043E\u0442\u0433\u0440\u0443\u0437\u043A\u0443",-1),p4={class:"order-modal-body draft"},_4=e("br",null,null,-1),g4=e("br",null,null,-1),E4={class:"nav-tab"},C4=e("span",null,"\u0412\u0438\u0434 \u043E\u0442\u0433\u0440\u0443\u0437\u043A\u0438:",-1),D4={class:"nav-tab-wrap",style:{"justify-content":"space-around"}},$4=e("div",{class:"gradient-btn-text"},"\u0421\u0430\u043C\u043E\u0432\u044B\u0432\u043E\u0437",-1),A4=[$4],y4=e("div",{class:"gradient-btn-text"},"\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430",-1),S4=[y4],w4=e("div",{class:"gradient-btn-text"},"\u0414\u043E \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u043E\u0439",-1),F4=[w4],B4={key:0,class:""},O4={class:"shipment-form-item"},b4=e("div",{class:"shipment-form-elem-title"},[e("span",null,"\u041F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435")],-1),k4={class:"shipment-form-info shipment-form-info-text"},V4=["innerHTML"],L4=e("div",{class:"order-modal-action"},null,-1);function U4(u,t,n,S,l,p){const _=f("DeleteButton");return u.modelValue?(o(),d("div",m4,[e("div",{class:v("order-modal-dialog draft"+(u.shake?" shake":"")),ref:"targetModal"},[e("div",h4,[e("div",v4,[f4,m(_,{onOnClick:t[0]||(t[0]=E=>u.$emit("update:modelValue",!1))})]),e("div",p4,[y(" \u0417\u0430\u044F\u0432\u043A\u0430 \u2116 "+h(u.data.bitrix_id)+" \u043E\u0442 "+h(u.data.date_create.substring(0,10))+" ",1),_4,g4,e("div",E4,[C4,e("div",D4,[e("a",{class:v("nav-tab-elem gradient-btn"+(u.data.case=="\u0421\u0430\u043C\u043E\u0432\u044B\u0432\u043E\u0437"?" active":""))},A4,2),e("a",{class:v("nav-tab-elem gradient-btn"+(u.data.case=="\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430"?" active":""))},S4,2),e("a",{class:v("nav-tab-elem gradient-btn"+(u.data.case=="\u0414\u043E \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u043E\u0439"?" active":""))},F4,2)])]),u.data?(o(),d("div",B4,[e("div",O4,[b4,e("div",k4,[(o(!0),d(I,null,N(u.view_message,(E,C)=>(o(),d("p",{key:C},[e("span",{innerHTML:E},null,8,V4)]))),128))])])])):F("",!0)]),L4])],2)])):F("",!0)}var P4=j(c4,[["render",U4]]);const T4=R({props:{data:{type:Array,required:!0},contrAgent:{type:String},period:{type:String},status:{type:String},loading:{type:Boolean,default:!1},search:{type:Object,required:!0}},components:{PreloaderLocal:u4,OrderDetailModal:e4,ShipmentDetailModal:P4,ModalInput:s4},setup(u){const t=K(Y),n=c(-1),S=c(-1),l=c(null),p=c([]),_=c(-1),E=c(!1),C=c(!1),w=c(-1),$=c(!1),g=c([{name:"id",value:"",show:!1},{name:"name",value:"",show:!1},{name:"id",value:"",show:!1},{name:"id",value:"",show:!1},{name:"id",value:"",show:!1},{name:"id",value:"",show:!1}]);z(l,()=>{S.value=-1}),k(n,()=>{var a,i,A;if(n.value!=-1&&s.value&&Array.isArray((a=s.value[n.value].order)==null?void 0:a.checks)){let b=(A=(i=s.value[n.value].order)==null?void 0:i.checks)==null?void 0:A.map(B=>B.doc_status?null:t.dispatch(Z.GET_ORDERS_DOCSTATUS,B.guid));b&&Promise.all(b).finally(()=>{})}}),k(()=>u.status,()=>{n.value=-1}),k(()=>u.contrAgent,()=>{n.value=-1}),k(()=>u.search,()=>{n.value=-1}),k(()=>u.period,()=>{n.value=-1});const s=O(()=>{let a=u.data.filter(i=>u.contrAgent==""||i.partner_guid==u.contrAgent);return a=a.filter(i=>r(i.date)),a=a.filter(i=>V(i)),a=a.filter(i=>D(i)),g.value[1].value!=""&&(a=a.filter(i=>`\u0417\u0430\u044F\u0432\u043A\u0430 \u2116 ${i.bitrix_id} \u043E\u0442 ${i.date_create.substring(0,10)}`.indexOf(g.value[1].value)!=-1)),a}),D=a=>{if(u.search.search=="")return!0;switch(u.search.id){case 1:return`\u0417\u0430\u044F\u0432\u043A\u0430 \u2116 ${a.bitrix_id} \u043E\u0442 ${a.date_create.substring(0,10)}`.toUpperCase().indexOf(u.search.search.toUpperCase())!=-1;case 2:return a.date.toUpperCase().indexOf(u.search.search.toUpperCase())!=-1;case 3:return a.order?String(a.order.n).toUpperCase().indexOf(u.search.search.toUpperCase())!=-1:!1;default:return!0}},r=a=>{var i;if(u.period=="\u0412\u0441\u0435")return!0;{const A=(i=u.period)==null?void 0:i.split(" - ")[0],b=A==null?void 0:A.substring(6,10),B=A==null?void 0:A.substring(3,5);return b==a.substring(6,10)&&B==a.substring(3,5)}},V=a=>a,L=a=>{p.value.push(a),t.dispatch(a4.GET_BILL_FILE_SAVE,a).finally(()=>{p.value=p.value.filter(i=>i!==a)})},U=(a,i)=>{const b=t.getters.getCompanyStoragesData(a).find(B=>B.guid==i);return b?b.name.replace(/(^|\s)\S/g,B=>B.toUpperCase()).replace(/(ООО)|(")|(\s)|([а-я])/g,""):"\u0421\u043A\u043B\u0430\u0434"},P=a=>{t.commit(o4.SET_CURRENT_ORDER,a)},T=a=>{let i=!1;return g.value[1].value!=""?a.title.indexOf(g.value[1].value)!=-1&&(i=!0):i=!0,i};return{target:l,active:n,active_more:S,loading_bill:p,showDetailOrder:E,detailOrderId:_,repeatOrder:C,OrdersSatusCode:q,filter:g,detailShipmentId:w,showDetailShipment:$,docLocation:"http://91.232.12.198:82",data_filtred:s,isOrders:O(()=>t.getters.isOrders),checkStatus:V,downloadBill:L,getStorageName:U,setOrderId:P,filtred:T}}}),M4={class:"orders-list-wrap"},I4={class:"orders-list",ref:"target"},N4={class:"orders-list-row orders-list-heading"},R4=e("div",{class:"orders-list-elem"},"\u2116",-1),j4=e("div",null,"\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435",-1),G4=e("svg",{width:"13",height:"9",viewBox:"0 0 13 9",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{class:"fill",d:"M7.00726 8.11117L12.7923 2.32601C12.9262 2.1922 13 2.01359 13 1.82313C13 1.63268 12.9262 1.45406 12.7923 1.32026L12.3664 0.894224C12.0888 0.616998 11.6378 0.616998 11.3606 0.894224L6.5027 5.75217L1.63936 0.888833C1.50545 0.755029 1.32694 0.681152 1.13659 0.681152C0.946033 0.681152 0.767522 0.755029 0.633507 0.888833L0.207681 1.31487C0.0737714 1.44878 -4.1357e-08 1.62729 -4.9682e-08 1.81774C-5.8007e-08 2.0082 0.0737714 2.18681 0.207681 2.32062L5.99802 8.11117C6.13236 8.24529 6.31171 8.31896 6.50238 8.31854C6.69378 8.31896 6.87303 8.24529 7.00726 8.11117Z",fill:"#A5A7A9"})],-1),H4=[G4],q4=e("div",{class:"orders-list-elem"},"\u0418\u043D\u0444\u043E",-1),z4=["onClick"],K4={class:"orders-list-elem"},Y4=e("div",{class:"table-arrow"},null,-1),Z4={class:"orders-list-elem"},J4={class:"orders-list-elem"},Q4=["innerHTML"],W4={class:"orders-list-elem"},X4={class:"orders-list-elem",style:{"justify-content":"space-around"}},x4=e("div",{class:"orders-list-elem"},null,-1),u0=e("div",{class:"orders-list-elem"},null,-1),e0={class:"orders-list-elem"},s0=["onClick"],t0=["onClick"],a0=["onClick"],o0=["onClick"],i0=e("a",{class:"orders-list-more-dropdown-link"},"\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443",-1),r0={key:0},d0={class:"orders-list-info-elem"},l0={class:"orders-list-info-elem"},n0={key:0,class:"orders-list-info-about tooltip"},c0=["onClick"],m0=e("span",{class:"tooltiptext"},"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0441\u0447\u0435\u0442",-1),h0={key:1,class:"orders-list-info-about tooltip"},v0={class:"orders-list-info-download disable"},f0=e("span",{class:"tooltiptext"},[y("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0441\u0447\u0435\u0442 \u043C\u043E\u0436\u043D\u043E \u0442\u043E\u043B\u044C\u043A\u043E "),e("br"),y(" \u043F\u043E\u0441\u043B\u0435 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F \u0437\u0430\u043A\u0430\u0437\u0430")],-1),p0={key:0,class:"orders-list-info-elem orders-list-info-doc-wrap"},_0={key:1,class:"orders-list-info-elem orders-list-info-doc-wrap"},g0=["href"],E0=["href"],C0=["href"],D0=["href"],$0=e("div",{class:"orders-list-info-elem"},null,-1),A0={class:"orders-list-info-elem"},y0={class:"orders-list-info-elem"},S0={key:1,class:"orders-list-info-row"},w0=r4('<div class="orders-list-info-elem"></div><div class="orders-list-info-elem"> \u0421\u0447\u0435\u0442 \u043E\u0442\u0441\u0443\u0442\u0432\u0443\u0435\u0442 </div><div class="orders-list-info-elem"></div><div class="orders-list-info-elem"></div><div class="orders-list-info-elem"></div><div class="orders-list-info-elem"></div><div class="orders-list-info-elem"></div>',7),F0=[w0],B0={key:0,class:"orders-list-row orders-list-main-row"},O0={class:"order-info"},b0={key:0},k0=y("\u0417\u0430\u044F\u0432\u043E\u043A \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E. \u0421\u043E\u0437\u0434\u0430\u0439\u0442\u0435 "),V0=y("\u043D\u043E\u0432\u0443\u044E \u0437\u0430\u044F\u0432\u043A\u0443"),L0=y(" \u0438 \u043E\u043D\u0430 \u043F\u043E\u044F\u0432\u0438\u0442\u0441\u044F \u0432 \u0441\u043F\u0438\u0441\u043A\u0435."),U0={key:1},P0=y(" \u0421\u043E\u0437\u0434\u0430\u0439\u0442\u0435 "),T0=y("\u043D\u043E\u0432\u044B\u0439 \u0437\u0430\u043A\u0430\u0437"),M0=y(" \u0434\u043B\u044F \u0442\u043E\u0433\u043E \u0447\u0442\u043E\u0431\u044B \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443 \u043D\u0430 \u0435\u0433\u043E \u043E\u0442\u0433\u0440\u0443\u0437\u043A\u0443.");function I0(u,t,n,S,l,p){const _=f("modal-input"),E=f("preloader-local"),C=f("PreloaderLocal"),w=f("router-link"),$=f("OrderDetailModal"),g=f("ShipmentDetailModal");return o(),d("div",M4,[e("div",{style:i4(u.data_filtred.length!=u.data.length?"visibility: visible":"visibility: hidden"),class:"orders-heading-info"}," \u041F\u043E\u043A\u0430\u0437\u0430\u043D\u043E "+h(u.data_filtred.length)+" \u0438\u0437 "+h(u.data.length),5),e("div",I4,[e("div",N4,[R4,e("div",{class:v("orders-list-elem"+(u.search.search!=""&&u.search.id==1?" active":"")+(u.filter[1].value!=""?" active":""))},[m(_,{modelValue:u.filter[1].value,"onUpdate:modelValue":t[0]||(t[0]=s=>u.filter[1].value=s),show:u.filter[1].show,"onUpdate:show":t[1]||(t[1]=s=>u.filter[1].show=s)},null,8,["modelValue","show"]),j4,e("div",{class:v("orders-list-elem-filter"+(u.filter[1].show||u.filter[1].value!=""?" active":"")),title:"\u0424\u0438\u043B\u044C\u0442\u0440",onClick:t[2]||(t[2]=s=>u.filter[1].show=!0)},H4,2)],2),e("div",{class:v("orders-list-elem"+(u.contrAgent!=""?" active":""))},"\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442",2),e("div",{class:v("orders-list-elem"+(u.search.search!=""&&u.search.id==2?" active":""))},"\u0416\u0435\u043B\u0430\u0435\u043C\u0430\u044F \u0434\u0430\u0442\u0430",2),e("div",{class:v("orders-list-elem"+(u.search.search!=""&&u.search.id==3?" active":"")),style:{"justify-content":"space-around"}},"\u041D\u043E\u043C\u0435\u0440 \u0437\u0430\u043A\u0430\u0437\u0430",2),e("div",{class:v("orders-list-elem"+(u.period!="\u0412\u0441\u0435"?" active":""))},"\u0414\u0430\u0442\u0430 \u043E\u0442\u0433\u0440\u0443\u0437\u043A\u0438",2),e("div",{class:v("orders-list-elem"+(u.status!="\u0412\u0441\u0435"?" active":""))},"\u0421\u0442\u0430\u0442\u0443\u0441",2),q4]),(o(!0),d(I,null,N(u.data_filtred,(s,D)=>(o(),d("div",{key:D,class:v("orders-list-item"+(D==u.active?" active":""))},[e("div",{class:"orders-list-row orders-list-main-row",onClick:r=>{D===u.active?u.active=-1:u.active=D,u.active_more=-1}},[e("div",K4,[y(h(D+1)+" ",1),Y4]),e("div",Z4," \u0417\u0430\u044F\u0432\u043A\u0430 \u2116 "+h(s.bitrix_id)+" \u043E\u0442 "+h(s.date_create.substring(0,10)),1),e("div",J4,[e("span",{innerHTML:s.partner_name},null,8,Q4)]),e("div",W4,h(s.date),1),e("div",X4,h(s.order?s.order.n:""),1),x4,u0,e("div",e0,[e("button",{class:"orders-list-more",onClick:M(r=>u.active_more=D,["stop"])},"\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u043E",8,s0),e("div",{class:v("orders-list-more-dropdown"+(D==u.active_more?" active":""))},[e("a",{class:"orders-list-more-dropdown-link",onClick:M(r=>{u.detailOrderId=s.order.n,u.showDetailOrder=!0,u.repeatOrder=!0},["stop"])},"\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437",8,t0),e("a",{class:"orders-list-more-dropdown-link",onClick:M(r=>{u.detailOrderId=s.order.n,u.showDetailOrder=!0},["stop"])},"\u0414\u0435\u0442\u0430\u043B\u0438 \u0437\u0430\u043A\u0430\u0437\u0430",8,a0),e("a",{class:"orders-list-more-dropdown-link",onClick:M(r=>{u.detailShipmentId=D,u.showDetailShipment=!0},["stop"])},"\u0417\u0430\u044F\u0432\u043A\u0430 \u043D\u0430 \u043E\u0442\u0433\u0440\u0443\u0437\u043A\u0443",8,o0),i0],2)])],8,z4),e("div",{class:v("orders-list-info"+(D==u.active?" active":"")),onClick:t[3]||(t[3]=r=>u.active_more=-1)},[s.order&&Array.isArray(s.order.checks)?(o(),d("div",r0,[(o(!0),d(I,null,N(s.order.checks,(r,V)=>{var L,U,P,T;return o(),d("div",{class:"orders-list-info-row",key:V},[e("div",d0,h(u.getStorageName(s.partner_guid,r.organization_id)),1),e("div",l0,[r.status>=2?(o(),d("div",n0,[e("div",{class:"orders-list-info-download",onClick:a=>u.downloadBill(r.guid)},[e("span",null," \u0421\u0447\u0451\u0442 \u043E\u0442 "+h(s.order.date.substring(0,10)),1),u.loading_bill.includes(s.guid)?(o(),G(E,{key:0,small:""})):F("",!0)],8,c0),m0])):(o(),d("div",h0,[e("div",v0," \u0421\u0447\u0451\u0442 \u043E\u0442 "+h(s.order.date.substring(0,10)),1),f0]))]),r.doc_status?(o(),d("div",_0,[((L=r.doc_status)==null?void 0:L.StatusSchet)&&r.status>=2?(o(),d("a",{key:0,class:"orders-list-info-doc sc",href:`${u.docLocation}/api/order/print?id=${r.guid}&name=\u0421\u0447\u0435\u0442`,target:"_blank",title:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u0447\u0435\u0442"},null,8,g0)):F("",!0),(U=r.doc_status)!=null&&U.StatusUPD?(o(),d("a",{key:1,class:"orders-list-info-doc upd",href:`${u.docLocation}/api/order/print?id=${r.guid}&name=\u0423\u041F\u0414`,target:"_blank",title:"\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u0435\u0440\u0435\u0434\u0430\u0442\u043E\u0447\u043D\u044B\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442"},null,8,E0)):F("",!0),(P=r.doc_status)!=null&&P.StatusSF?(o(),d("a",{key:2,class:"orders-list-info-doc sf",href:`${u.docLocation}/api/order/print?id=${r.guid}&name=\u0421\u0424`,target:"_blank",title:"\u0421\u0447\u0451\u0442-\u0444\u0430\u043A\u0442\u0443\u0440\u0430"},null,8,C0)):F("",!0),(T=r.doc_status)!=null&&T.StatusUPK?(o(),d("a",{key:3,class:"orders-list-info-doc kor",href:`${u.docLocation}/api/order/print?id=${r.guid}&name=\u0423\u041A\u0414`,target:"_blank",title:"\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u044B\u0439 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u043E\u0447\u043D\u044B\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442"},null,8,D0)):F("",!0)])):(o(),d("div",p0,[m(C,{small:""})])),$0,e("div",A0,h(u.OrdersSatusCode[r.status+1]?u.OrdersSatusCode[r.status+1].name:""),1),e("div",y0,h(s.case),1)])}),128))])):(o(),d("div",S0,F0))],2)],2))),128)),u.data.length==0&&!u.loading?(o(),d("div",B0,[e("div",O0,[u.isOrders?(o(),d("span",b0,[k0,m(w,{tag:"a",class:"order-info-link",to:"/shipments/request"},{default:H(()=>[V0]),_:1}),L0])):(o(),d("span",U0,[P0,m(w,{tag:"a",class:"order-info-link",to:"/order"},{default:H(()=>[T0]),_:1}),M0]))])])):F("",!0)],512),u.loading?(o(),G(C,{key:0,style:{width:"100%"}})):F("",!0),m($,{modelValue:u.showDetailOrder,"onUpdate:modelValue":t[4]||(t[4]=s=>u.showDetailOrder=s),orderId:u.detailOrderId,repeatOrder:u.repeatOrder,"onUpdate:repeatOrder":t[5]||(t[5]=s=>u.repeatOrder=s)},null,8,["modelValue","orderId","repeatOrder"]),m(g,{modelValue:u.showDetailShipment,"onUpdate:modelValue":t[6]||(t[6]=s=>u.showDetailShipment=s),data:u.data[u.detailShipmentId]},null,8,["modelValue","data"])])}var N0=j(T4,[["render",I0]]);const R0=R({components:{PersonalBar:J,Notification:Q,CompanyBarTop:W,TopNav:X,SelectInput:x,ShipmentsListCard:N0},setup(){const u=K(Y),t=c(!0),n=c(""),S=c(0),l=c(0),p=c({id:1,search:""}),_=[{id:1,name:"\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"},{id:2,name:"\u0416\u0435\u043B\u0430\u0435\u043C\u0430\u044F \u0434\u0430\u0442\u0430"},{id:3,name:"\u041D\u043E\u043C\u0435\u0440 \u0437\u0430\u043A\u0430\u0437\u0430"}];return d4(()=>{u.dispatch(Z.GET_ORDERS).finally(()=>{u.dispatch(l4.GET_SHIPMENTS).finally(()=>{t.value=!1})}),u.getters.isCompanysLoad||u.dispatch(n4.GET_COMPANYS)}),{filterCompanyUid:n,filterPeriod:S,OrdersSatusCode:q,filterStatus:l,search:p,loading:t,searchColumn:_,companyBarTopData:O(()=>u.getters.getCompanysList),filterCompanyData:O(()=>u.getters.getCompanysListInput),filterPeriodData:O(()=>u.getters.getOrdersDataPeriodArray),shipmentsList:O(()=>u.getters.getShipments),isOrders:O(()=>u.getters.isOrders)}}}),j0={class:"top-line product-page"},G0={class:"orders-heading"},H0={class:"orders-heading-elem"},q0={class:"orders-heading-item"},z0=e("div",{class:"orders-heading-text"},"\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442:",-1),K0={class:"orders-heading-item"},Y0=e("div",{class:"orders-heading-text"},"\u0421\u0442\u0430\u0442\u0443\u0441:",-1),Z0={class:"orders-heading-item","data-select2-id":"147"},J0=e("div",{class:"orders-heading-text"},"\u041F\u0435\u0440\u0438\u043E\u0434:",-1),Q0=e("div",{class:"orders-heading-elem"},null,-1);function W0(u,t,n,S,l,p){const _=f("CompanyBarTop"),E=f("Notification"),C=f("PersonalBar"),w=f("top-nav"),$=f("SelectInput"),g=f("ShipmentsListCard");return o(),d("div",null,[e("div",j0,[m(_,{data:u.companyBarTopData,modelValue:u.filterCompanyUid,"onUpdate:modelValue":t[0]||(t[0]=s=>u.filterCompanyUid=s)},null,8,["data","modelValue"]),m(E),m(C)]),m(w,{shipments:u.isOrders},null,8,["shipments"]),e("div",G0,[e("div",H0,[e("div",q0,[z0,m($,{data:u.filterCompanyData,modelValue:u.filterCompanyUid,"onUpdate:modelValue":t[1]||(t[1]=s=>u.filterCompanyUid=s)},null,8,["data","modelValue"])]),e("div",K0,[Y0,m($,{data:u.OrdersSatusCode,modelValue:u.filterStatus,"onUpdate:modelValue":t[2]||(t[2]=s=>u.filterStatus=s)},null,8,["data","modelValue"])]),e("div",Z0,[J0,m($,{data:u.filterPeriodData,modelValue:u.filterPeriod,"onUpdate:modelValue":t[3]||(t[3]=s=>u.filterPeriod=s)},null,8,["data","modelValue"])]),e("div",{class:"orders-heading-clean",title:"\u0423\u0431\u0440\u0430\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440\u044B",onClick:t[4]||(t[4]=s=>{u.filterCompanyUid="",u.filterPeriod=0,u.filterStatus=0})})]),Q0]),m(g,{data:u.shipmentsList,loading:u.loading,contrAgent:u.filterCompanyUid,period:u.filterPeriodData[u.filterPeriod].name,status:u.OrdersSatusCode[u.filterStatus].name,search:u.search},null,8,["data","loading","contrAgent","period","status","search"])])}var ru=j(R0,[["render",W0]]);export{ru as default};