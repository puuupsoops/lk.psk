import{_ as o4}from"./PersonalBar.1b3becf2.js";import{N as r4}from"./Notification.0d8400af.js";import{_ as i4}from"./CompanyBarTop.9e8204a2.js";import{_ as n4}from"./TopNav.b4bc3b25.js";import{d as x,au as l4,i as v,D as Y,k as P,f as Z,r as b,o as r,b as i,a as e,e as _,p as w,t as p,z as f,F as M,g as N,l as y,h as Q,L as U,aJ as W,u as $,U as d4,aH as c4,aA as I,c as J,_ as T,w as K,aj as m4,m as v4,as as _4,j as h4,aN as p4,s as f4}from"./index.319ff497.js";import{O as j,_ as g4}from"./types.7e20704f.js";import{_ as C4}from"./CatalogPagination.9c4c77c3.js";const E4=x({name:"ShipmentDetailModal",components:{DeleteButton:l4},props:{modelValue:{type:Boolean,required:!0},data:{type:Object}},emits:["update:modelValue"],setup(u){const a=v(null),h=v(!1);Y(a,()=>{h.value=!0,setTimeout(()=>{h.value=!1},500)});const m=P(()=>{var B,g,D,A,S,l,k;let n=[];return n.push((B=u.data)!=null&&B.order?u.data.order.name:""),n.push("\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442: "+((g=u.data)==null?void 0:g.partner_name)),n.push("\u0416\u0435\u043B\u0430\u0435\u043C\u0430\u044F \u0434\u0430\u0442\u0430 \u043E\u0442\u0433\u0440\u0443\u0437\u043A\u0438: "+((D=u.data)==null?void 0:D.date)),((A=u.data)==null?void 0:A.case)=="\u0414\u043E \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u043E\u0439"&&(u.data.carriers=="2"&&n.push("\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u0430\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F: \u041F\u042D\u041A"),u.data.carriers=="3"&&n.push("\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u0430\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F: \u0414\u0435\u043B\u043E\u0432\u044B\u0435 \u043B\u0438\u043D\u0438\u0438"),u.data.carriers=="4"&&n.push("\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u0430\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F: \u0411\u0430\u0439\u043A\u0430\u043B"),u.data.carriers=="1"&&n.push("\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u0430\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F: \u0414\u0440\u0443\u0433\u0430\u044F"),u.data.carriers=="1"&&n.push(`\u0410\u0434\u0440\u0435\u0441 \u0422\u041A: ${u.data.address}`),n.push(String(u.data.extra))),((S=u.data)==null?void 0:S.case)=="\u0421\u0430\u043C\u043E\u0432\u044B\u0432\u043E\u0437"&&n.push(`\u0410\u0434\u0440\u0435\u0441 \u0441\u0430\u043C\u043E\u0432\u044B\u0432\u043E\u0437\u0430: ${u.data.address}`),((l=u.data)==null?void 0:l.case)=="\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430"&&n.push(`\u0410\u0434\u0440\u0435\u0441 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438: ${u.data.address}`),n.push("\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0440\u0438\u0439: "+((k=u.data)==null?void 0:k.comment)),n});return{targetModal:a,shake:h,view_message:m}}}),D4={key:0,class:"order-modal"},A4={class:"order-modal-content draft"},$4={class:"order-modal-header"},y4=e("h3",{class:"order-modal-header-title"},"\u0414\u0435\u0442\u0430\u043B\u0438 \u0437\u0430\u044F\u0432\u043A\u0438 \u043D\u0430 \u043E\u0442\u0433\u0440\u0443\u0437\u043A\u0443",-1),F4={class:"order-modal-body draft"},w4=e("br",null,null,-1),B4=e("br",null,null,-1),S4={class:"nav-tab"},b4=e("span",null,"\u0412\u0438\u0434 \u043E\u0442\u0433\u0440\u0443\u0437\u043A\u0438:",-1),P4={class:"nav-tab-wrap",style:{"justify-content":"space-around"}},k4=e("div",{class:"gradient-btn-text"},"\u0421\u0430\u043C\u043E\u0432\u044B\u0432\u043E\u0437",-1),O4=[k4],V4=e("div",{class:"gradient-btn-text"},"\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430",-1),U4=[V4],L4=e("div",{class:"gradient-btn-text"},"\u0414\u043E \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u043E\u0439",-1),I4=[L4],T4={key:0,class:""},M4={class:"shipment-form-item"},N4=e("div",{class:"shipment-form-elem-title"},[e("span",null,"\u041F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435")],-1),j4={class:"shipment-form-info shipment-form-info-text"},x4=["innerHTML"],G4=e("div",{class:"order-modal-action"},null,-1);function H4(u,a,h,m,n,B){const g=b("DeleteButton");return u.modelValue?(r(),i("div",D4,[e("div",{class:f("order-modal-dialog draft"+(u.shake?" shake":"")),ref:"targetModal"},[e("div",A4,[e("div",$4,[y4,_(g,{onOnClick:a[0]||(a[0]=D=>u.$emit("update:modelValue",!1))})]),e("div",F4,[w(" \u0417\u0430\u044F\u0432\u043A\u0430 \u2116 "+p(u.data.bitrix_id)+" \u043E\u0442 "+p(u.data.date_create.substring(0,10))+" ",1),w4,B4,e("div",S4,[b4,e("div",P4,[e("a",{class:f("nav-tab-elem gradient-btn"+(u.data.case=="\u0421\u0430\u043C\u043E\u0432\u044B\u0432\u043E\u0437"?" active":""))},O4,2),e("a",{class:f("nav-tab-elem gradient-btn"+(u.data.case=="\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430"?" active":""))},U4,2),e("a",{class:f("nav-tab-elem gradient-btn"+(u.data.case=="\u0414\u043E \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u043E\u0439"?" active":""))},I4,2)])]),u.data?(r(),i("div",T4,[e("div",M4,[N4,e("div",j4,[(r(!0),i(M,null,N(u.view_message,(D,A)=>(r(),i("p",{key:A},[e("span",{innerHTML:D},null,8,x4)]))),128))])])])):y("",!0)]),G4])],2)])):y("",!0)}var q4=Z(E4,[["render",H4]]);const z4={class:"orders-list-wrap"},R4={class:"orders-heading-info"},J4={class:"orders-heading-pagination"},K4={class:"orders-list"},Y4={class:"orders-list-row orders-list-heading"},Z4=e("div",{class:"orders-list-elem"},"\u2116",-1),Q4=e("div",null,"\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435",-1),W4=e("svg",{width:"13",height:"9",viewBox:"0 0 13 9",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{class:"fill",d:"M7.00726 8.11117L12.7923 2.32601C12.9262 2.1922 13 2.01359 13 1.82313C13 1.63268 12.9262 1.45406 12.7923 1.32026L12.3664 0.894224C12.0888 0.616998 11.6378 0.616998 11.3606 0.894224L6.5027 5.75217L1.63936 0.888833C1.50545 0.755029 1.32694 0.681152 1.13659 0.681152C0.946033 0.681152 0.767522 0.755029 0.633507 0.888833L0.207681 1.31487C0.0737714 1.44878 -4.1357e-08 1.62729 -4.9682e-08 1.81774C-5.8007e-08 2.0082 0.0737714 2.18681 0.207681 2.32062L5.99802 8.11117C6.13236 8.24529 6.31171 8.31896 6.50238 8.31854C6.69378 8.31896 6.87303 8.24529 7.00726 8.11117Z",fill:"#A5A7A9"})],-1),X4=[W4],uu=e("div",{class:"orders-list-elem"},"\u0418\u043D\u0444\u043E",-1),eu=["onClick"],su={class:"orders-list-elem"},tu=e("div",{class:"table-arrow"},null,-1),au={class:"orders-list-elem"},ou={class:"orders-list-elem"},ru=["innerHTML"],iu={class:"orders-list-elem"},nu={class:"orders-list-elem",style:{"justify-content":"space-around"}},lu=e("div",{class:"orders-list-elem"},null,-1),du=e("div",{class:"orders-list-elem"},null,-1),cu={class:"orders-list-elem"},mu=["onClick"],vu=["onClick"],_u=["onClick"],hu=["onClick"],pu=e("a",{class:"orders-list-more-dropdown-link"},"\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443",-1),fu={key:0},gu={class:"orders-list-info-elem"},Cu={class:"orders-list-info-elem"},Eu={key:0,class:"orders-list-info-about tooltip"},Du=["onClick"],Au=e("span",{class:"tooltiptext"},"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0441\u0447\u0435\u0442",-1),$u={key:1,class:"orders-list-info-about tooltip"},yu={class:"orders-list-info-download disable"},Fu=e("span",{class:"tooltiptext"},[w("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0441\u0447\u0435\u0442 \u043C\u043E\u0436\u043D\u043E \u0442\u043E\u043B\u044C\u043A\u043E "),e("br"),w(" \u043F\u043E\u0441\u043B\u0435 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F \u0437\u0430\u043A\u0430\u0437\u0430")],-1),wu={key:0,class:"orders-list-info-elem orders-list-info-doc-wrap"},Bu={key:1,class:"orders-list-info-elem orders-list-info-doc-wrap"},Su=["href"],bu=["href"],Pu=["href"],ku=["href"],Ou=e("div",{class:"orders-list-info-elem"},null,-1),Vu={class:"orders-list-info-elem"},Uu={class:"orders-list-info-elem"},Lu={key:1,class:"orders-list-info-row"},Iu=v4('<div class="orders-list-info-elem"></div><div class="orders-list-info-elem"> \u0421\u0447\u0435\u0442 \u043E\u0442\u0441\u0443\u0442\u0432\u0443\u0435\u0442 </div><div class="orders-list-info-elem"></div><div class="orders-list-info-elem"></div><div class="orders-list-info-elem"></div><div class="orders-list-info-elem"></div><div class="orders-list-info-elem"></div>',7),Tu=[Iu],Mu={key:0,class:"orders-list-row orders-list-main-row"},Nu={class:"order-info"},ju={key:0},xu=w("\u0417\u0430\u044F\u0432\u043E\u043A \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E. \u0421\u043E\u0437\u0434\u0430\u0439\u0442\u0435 "),Gu=w("\u043D\u043E\u0432\u0443\u044E \u0437\u0430\u044F\u0432\u043A\u0443"),Hu=w(" \u0438 \u043E\u043D\u0430 \u043F\u043E\u044F\u0432\u0438\u0442\u0441\u044F \u0432 \u0441\u043F\u0438\u0441\u043A\u0435."),qu={key:1},zu=w(" \u0421\u043E\u0437\u0434\u0430\u0439\u0442\u0435 "),Ru=w("\u043D\u043E\u0432\u044B\u0439 \u0437\u0430\u043A\u0430\u0437"),Ju=w(" \u0434\u043B\u044F \u0442\u043E\u0433\u043E \u0447\u0442\u043E\u0431\u044B \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443 \u043D\u0430 \u0435\u0433\u043E \u043E\u0442\u0433\u0440\u0443\u0437\u043A\u0443."),Ku=x({__name:"ShipmentsListCard",props:{data:{type:Array,required:!0},contrAgent:{type:String},period:{type:String},status:{type:String},loading:{type:Boolean,default:!1},search:{type:Object,required:!0}},setup(u){const a=u,h=Q(),m=v(-1),n=v(-1),B=v(null),g=v([]),D=v(-1),A=v(!1),S=v(!1),l=v({maxItemOnPage:10,currentPage:1}),k=v(-1),E=v(!1),L="https://api.psk.expert",F=v([{name:"id",value:"",show:!1},{name:"name",value:"",show:!1},{name:"id",value:"",show:!1},{name:"id",value:"",show:!1},{name:"id",value:"",show:!1},{name:"id",value:"",show:!1}]),X=P(()=>h.getters.isOrders);Y(B,()=>{n.value=-1}),U(m,()=>{var o,s,C;if(m.value!=-1&&O.value&&Array.isArray((o=O.value[m.value].order)==null?void 0:o.checks)){let t=(C=(s=O.value[m.value].order)==null?void 0:s.checks)==null?void 0:C.map(c=>c.doc_status?null:h.dispatch(W.GET_ORDERS_DOCSTATUS,c.guid));t&&Promise.all(t).finally(()=>{})}}),U(()=>a.status,()=>{l.value.currentPage=1,m.value=-1}),U(()=>a.contrAgent,()=>{l.value.currentPage=1,m.value=-1}),U(()=>a.search,()=>{l.value.currentPage=1,m.value=-1}),U(()=>a.period,()=>{l.value.currentPage=1,m.value=-1});const O=P(()=>{let o=a.data.filter(s=>a.contrAgent==""||s.partner_guid==a.contrAgent);return o=o.filter(s=>u4(s.date)),o=o.filter(s=>e4(s)),o=o.filter(s=>V(s)),F.value[1].value!=""&&(o=o.filter(s=>`\u0417\u0430\u044F\u0432\u043A\u0430 \u2116 ${s.bitrix_id} \u043E\u0442 ${s.date_create.substring(0,10)}`.indexOf(F.value[1].value)!=-1)),o}),G=o=>l.value.maxItemOnPage!=-1?o>=(l.value.currentPage-1)*l.value.maxItemOnPage&&o<l.value.currentPage*l.value.maxItemOnPage:!0,V=o=>{if(a.search.search=="")return!0;switch(a.search.id){case 1:return`\u0417\u0430\u044F\u0432\u043A\u0430 \u2116 ${o.bitrix_id} \u043E\u0442 ${o.date_create.substring(0,10)}`.toUpperCase().indexOf(a.search.search.toUpperCase())!=-1;case 2:return o.date.toUpperCase().indexOf(a.search.search.toUpperCase())!=-1;case 3:return o.order?String(o.order.n).toUpperCase().indexOf(a.search.search.toUpperCase())!=-1:!1;default:return!0}},u4=o=>{var s;if(a.period=="\u0412\u0441\u0435")return!0;{const C=(s=a.period)==null?void 0:s.split(" - ")[0],t=C==null?void 0:C.substring(6,10),c=C==null?void 0:C.substring(3,5);return t==o.substring(6,10)&&c==o.substring(3,5)}},e4=o=>o,s4=o=>{g.value.push(o),h.dispatch(m4.GET_BILL_FILE_SAVE,o).finally(()=>{g.value=g.value.filter(s=>s!==o)})},t4=(o,s)=>{const t=h.getters.getCompanyStoragesData(o).find(c=>c.guid==s);return t?t.name.replace(/(^|\s)\S/g,c=>c.toUpperCase()).replace(/(ООО)|(")|(\s)|([а-я])/g,""):"\u0421\u043A\u043B\u0430\u0434"};return(o,s)=>{const C=b("router-link");return r(),i("div",z4,[e("div",R4,[e("div",J4,[_(C4,{maxPage:l.value.maxItemOnPage!=-1?Math.ceil($(O).length/l.value.maxItemOnPage):1,currentPage:l.value.currentPage,"onUpdate:currentPage":s[0]||(s[0]=t=>l.value.currentPage=t),maxItemOnPage:l.value.maxItemOnPage,"onUpdate:maxItemOnPage":s[1]||(s[1]=t=>l.value.maxItemOnPage=t)},null,8,["maxPage","currentPage","maxItemOnPage"])]),e("div",{class:"orders-heading-info-text",style:d4($(O).length!=u.data.length?"visibility: visible":"visibility: hidden")}," \u041F\u043E\u043A\u0430\u0437\u0430\u043D\u043E "+p($(O).length)+" \u0438\u0437 "+p(u.data.length),5)]),e("div",K4,[e("div",Y4,[Z4,e("div",{class:f("orders-list-elem"+(V.search!=""&&V.id==1?" active":"")+(F.value[1].value!=""?" active":""))},[_(c4,{modelValue:F.value[1].value,"onUpdate:modelValue":s[2]||(s[2]=t=>F.value[1].value=t),show:F.value[1].show,"onUpdate:show":s[3]||(s[3]=t=>F.value[1].show=t)},null,8,["modelValue","show"]),Q4,e("div",{class:f("orders-list-elem-filter"+(F.value[1].show||F.value[1].value!=""?" active":"")),title:"\u0424\u0438\u043B\u044C\u0442\u0440",onClick:s[4]||(s[4]=t=>F.value[1].show=!0)},X4,2)],2),e("div",{class:f("orders-list-elem"+(u.contrAgent!=""?" active":""))},"\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442",2),e("div",{class:f("orders-list-elem"+(V.search!=""&&V.id==2?" active":""))},"\u0416\u0435\u043B\u0430\u0435\u043C\u0430\u044F \u0434\u0430\u0442\u0430",2),e("div",{class:f("orders-list-elem"+(V.search!=""&&V.id==3?" active":"")),style:{"justify-content":"space-around"}},"\u041D\u043E\u043C\u0435\u0440 \u0437\u0430\u043A\u0430\u0437\u0430",2),e("div",{class:f("orders-list-elem"+(u.period!="\u0412\u0441\u0435"?" active":""))},"\u0414\u0430\u0442\u0430 \u043E\u0442\u0433\u0440\u0443\u0437\u043A\u0438",2),e("div",{class:f("orders-list-elem"+(u.status!="\u0412\u0441\u0435"?" active":""))},"\u0421\u0442\u0430\u0442\u0443\u0441",2),uu]),(r(!0),i(M,null,N($(O),(t,c)=>(r(),i("div",{key:c,class:f("orders-list-item"+(c==m.value?" active":""))},[G(c)?(r(),i("div",{key:0,class:"orders-list-row orders-list-main-row",onClick:d=>c===m.value?m.value=-1:m.value=c},[e("div",su,[w(p(c+1)+" ",1),tu]),e("div",au," \u0417\u0430\u044F\u0432\u043A\u0430 \u2116 "+p(t.bitrix_id)+" \u043E\u0442 "+p(t.date_create.substring(0,10)),1),e("div",ou,[e("span",{innerHTML:t.partner_name},null,8,ru)]),e("div",iu,p(t.date),1),e("div",nu,p(t.order?t.order.n:""),1),lu,du,e("div",cu,[e("button",{class:"orders-list-more",onClick:I(d=>n.value=c,["stop"])},"\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u043E",8,mu),e("div",{class:f("orders-list-more-dropdown"+(c==n.value?" active":"")),ref_for:!0,ref_key:"target",ref:B},[e("a",{class:"orders-list-more-dropdown-link",onClick:I(d=>{D.value=t.order.n,A.value=!0,S.value=!0},["stop"])},"\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437",8,vu),e("a",{class:"orders-list-more-dropdown-link",onClick:I(d=>{D.value=t.order.n,A.value=!0},["stop"])},"\u0414\u0435\u0442\u0430\u043B\u0438 \u0437\u0430\u043A\u0430\u0437\u0430",8,_u),e("a",{class:"orders-list-more-dropdown-link",onClick:I(d=>{k.value=c,E.value=!0},["stop"])},"\u0417\u0430\u044F\u0432\u043A\u0430 \u043D\u0430 \u043E\u0442\u0433\u0440\u0443\u0437\u043A\u0443",8,hu),pu],2)])],8,eu)):y("",!0),G(c)?(r(),i("div",{key:1,class:f(["orders-list-info",{active:c==m.value}]),onClick:s[5]||(s[5]=d=>n.value=-1)},[t.order&&Array.isArray(t.order.checks)?(r(),i("div",fu,[(r(!0),i(M,null,N(t.order.checks,(d,a4)=>{var H,q,z,R;return r(),i("div",{class:"orders-list-info-row",key:a4},[e("div",gu,p(t4(t.partner_guid,d.organization_id)),1),e("div",Cu,[d.status>=2?(r(),i("div",Eu,[e("div",{class:"orders-list-info-download",onClick:i0=>s4(d.guid)},[e("span",null," \u0421\u0447\u0451\u0442 \u043E\u0442 "+p(t.order.date.substring(0,10)),1),g.value.includes(t.guid)?(r(),J(T,{key:0,small:""})):y("",!0)],8,Du),Au])):(r(),i("div",$u,[e("div",yu," \u0421\u0447\u0451\u0442 \u043E\u0442 "+p(t.order.date.substring(0,10)),1),Fu]))]),d.doc_status?(r(),i("div",Bu,[((H=d.doc_status)==null?void 0:H.StatusSchet)&&d.status>=2?(r(),i("a",{key:0,class:"orders-list-info-doc sc",href:`${$(L)}/api/order/print?id=${d.guid}&name=\u0421\u0447\u0435\u0442`,target:"_blank",title:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u0447\u0435\u0442"},null,8,Su)):y("",!0),(q=d.doc_status)!=null&&q.StatusUPD?(r(),i("a",{key:1,class:"orders-list-info-doc upd",href:`${$(L)}/api/order/print?id=${d.guid}&name=\u0423\u041F\u0414`,target:"_blank",title:"\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u0435\u0440\u0435\u0434\u0430\u0442\u043E\u0447\u043D\u044B\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442"},null,8,bu)):y("",!0),(z=d.doc_status)!=null&&z.StatusSF?(r(),i("a",{key:2,class:"orders-list-info-doc sf",href:`${$(L)}/api/order/print?id=${d.guid}&name=\u0421\u0424`,target:"_blank",title:"\u0421\u0447\u0451\u0442-\u0444\u0430\u043A\u0442\u0443\u0440\u0430"},null,8,Pu)):y("",!0),(R=d.doc_status)!=null&&R.StatusUPK?(r(),i("a",{key:3,class:"orders-list-info-doc kor",href:`${$(L)}/api/order/print?id=${d.guid}&name=\u0423\u041A\u0414`,target:"_blank",title:"\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u044B\u0439 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u043E\u0447\u043D\u044B\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442"},null,8,ku)):y("",!0)])):(r(),i("div",wu,[_(T,{small:""})])),Ou,e("div",Vu,p($(j)[d.status+1]?$(j)[d.status+1].name:""),1),e("div",Uu,p(t.case),1)])}),128))])):(r(),i("div",Lu,Tu))],2)):y("",!0)],2))),128)),u.data.length==0&&!u.loading?(r(),i("div",Mu,[e("div",Nu,[$(X)?(r(),i("span",ju,[xu,_(C,{tag:"a",class:"order-info-link",to:"/shipments/request"},{default:K(()=>[Gu]),_:1}),Hu])):(r(),i("span",qu,[zu,_(C,{tag:"a",class:"order-info-link",to:"/order"},{default:K(()=>[Ru]),_:1}),Ju]))])])):y("",!0)]),u.loading?(r(),J(T,{key:0,style:{width:"100%"}})):y("",!0),_(g4,{modelValue:A.value,"onUpdate:modelValue":s[6]||(s[6]=t=>A.value=t),orderId:D.value,repeatOrder:S.value,"onUpdate:repeatOrder":s[7]||(s[7]=t=>S.value=t)},null,8,["modelValue","orderId","repeatOrder"]),_(q4,{modelValue:E.value,"onUpdate:modelValue":s[8]||(s[8]=t=>E.value=t),data:u.data[k.value]},null,8,["modelValue","data"])])}}}),Yu=x({components:{PersonalBar:o4,Notification:r4,CompanyBarTop:i4,TopNav:n4,SelectInput:_4,ShipmentsListCard:Ku},setup(){const u=Q(),a=v(!0),h=v(""),m=v(0),n=v(0),B=v({id:1,search:""}),g=[{id:1,name:"\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"},{id:2,name:"\u0416\u0435\u043B\u0430\u0435\u043C\u0430\u044F \u0434\u0430\u0442\u0430"},{id:3,name:"\u041D\u043E\u043C\u0435\u0440 \u0437\u0430\u043A\u0430\u0437\u0430"}];return h4(async()=>{if(Promise.all([u.dispatch(W.GET_ORDERS),u.dispatch(p4.GET_CLAIMS)]).finally(()=>{a.value=!1}),u.getters.getActiveCompanyId!==""){h.value=u.getters.getActiveCompanyId;return}u.getters.isCompanysLoad||await u.dispatch(f4.GET_COMPANYS),h.value=u.getters.getCompanys===[]?"":u.getters.getCompanys[0].uid}),{filterCompanyUid:h,filterPeriod:m,OrdersSatusCode:j,filterStatus:n,search:B,loading:a,searchColumn:g,companyBarTopData:P(()=>u.getters.getCompanysList),filterCompanyData:P(()=>u.getters.getCompanysListInput()),filterPeriodData:P(()=>u.getters.getOrdersDataPeriodArray),shipmentsList:P(()=>u.getters.getShipments),isOrders:P(()=>u.getters.isOrders)}}}),Zu={class:"top-line product-page"},Qu={class:"orders-heading"},Wu={class:"orders-heading-elem"},Xu={class:"orders-heading-item"},u0=e("div",{class:"orders-heading-text"},"\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442:",-1),e0={class:"orders-heading-item"},s0=e("div",{class:"orders-heading-text"},"\u0421\u0442\u0430\u0442\u0443\u0441:",-1),t0={class:"orders-heading-item","data-select2-id":"147"},a0=e("div",{class:"orders-heading-text"},"\u041F\u0435\u0440\u0438\u043E\u0434:",-1),o0=e("div",{class:"orders-heading-elem"},null,-1);function r0(u,a,h,m,n,B){const g=b("CompanyBarTop"),D=b("Notification"),A=b("PersonalBar"),S=b("top-nav"),l=b("SelectInput"),k=b("ShipmentsListCard");return r(),i("div",null,[e("div",Zu,[_(g,{data:u.companyBarTopData,modelValue:u.filterCompanyUid,"onUpdate:modelValue":a[0]||(a[0]=E=>u.filterCompanyUid=E)},null,8,["data","modelValue"]),_(D),_(A)]),_(S,{shipments:u.isOrders},null,8,["shipments"]),e("div",Qu,[e("div",Wu,[e("div",Xu,[u0,_(l,{data:u.filterCompanyData,modelValue:u.filterCompanyUid,"onUpdate:modelValue":a[1]||(a[1]=E=>u.filterCompanyUid=E)},null,8,["data","modelValue"])]),e("div",e0,[s0,_(l,{data:u.OrdersSatusCode,modelValue:u.filterStatus,"onUpdate:modelValue":a[2]||(a[2]=E=>u.filterStatus=E)},null,8,["data","modelValue"])]),e("div",t0,[a0,_(l,{data:u.filterPeriodData,modelValue:u.filterPeriod,"onUpdate:modelValue":a[3]||(a[3]=E=>u.filterPeriod=E)},null,8,["data","modelValue"])]),e("div",{class:"orders-heading-clean",title:"\u0423\u0431\u0440\u0430\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440\u044B",onClick:a[4]||(a[4]=E=>{u.filterCompanyUid="",u.filterPeriod=0,u.filterStatus=0})})]),o0]),_(k,{data:u.shipmentsList,loading:u.loading,contrAgent:u.filterCompanyUid,period:u.filterPeriodData[u.filterPeriod].name,status:u.OrdersSatusCode[u.filterStatus].name,search:u.search},null,8,["data","loading","contrAgent","period","status","search"])])}var h0=Z(Yu,[["render",r0]]);export{h0 as default};
