import{_ as o4,N as r4}from"./PersonalBar.9ac639b6.js";import{_ as i4}from"./CompanyBarTop.55510c2e.js";import{_ as n4}from"./TopNav.42ba42f1.js";import{S as l4}from"./SelectInput.e3ec0d69.js";import{d as x,ae as d4,g as v,z as Y,i as P,_ as Z,r as b,o as r,b as i,a as u,l as _,k as B,t as h,x as f,F as M,e as N,j as y,f as J,I as U,u as A,Q as c4,ag as I,c as K,w as Q,an as W,aj as m4,B as v4,h as _4,af as h4,p as f4}from"./index.31f5185b.js";import{P as T}from"./PreloaderLocal.bb465180.js";import{M as p4,O as j,_ as g4}from"./types.a1e3043a.js";import{_ as E4}from"./CatalogPagination.495ea2da.js";const C4=x({name:"ShipmentDetailModal",components:{DeleteButton:d4},props:{modelValue:{type:Boolean,required:!0},data:{type:Object}},emits:["update:modelValue"],setup(e){const a=v(null),E=v(!1);Y(a,()=>{E.value=!0,setTimeout(()=>{E.value=!1},500)});const m=P(()=>{var w,p,D,$,S,l,O;let n=[];return n.push((w=e.data)!=null&&w.order?e.data.order.name:""),n.push("\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442: "+((p=e.data)==null?void 0:p.partner_name)),n.push("\u0416\u0435\u043B\u0430\u0435\u043C\u0430\u044F \u0434\u0430\u0442\u0430 \u043E\u0442\u0433\u0440\u0443\u0437\u043A\u0438: "+((D=e.data)==null?void 0:D.date)),(($=e.data)==null?void 0:$.case)=="\u0414\u043E \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u043E\u0439"&&(e.data.carriers=="2"&&n.push("\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u0430\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F: \u041F\u042D\u041A"),e.data.carriers=="3"&&n.push("\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u0430\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F: \u0414\u0435\u043B\u043E\u0432\u044B\u0435 \u043B\u0438\u043D\u0438\u0438"),e.data.carriers=="4"&&n.push("\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u0430\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F: \u0411\u0430\u0439\u043A\u0430\u043B"),e.data.carriers=="1"&&n.push("\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u0430\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F: \u0414\u0440\u0443\u0433\u0430\u044F"),e.data.carriers=="1"&&n.push(`\u0410\u0434\u0440\u0435\u0441 \u0422\u041A: ${e.data.address}`),n.push(String(e.data.extra))),((S=e.data)==null?void 0:S.case)=="\u0421\u0430\u043C\u043E\u0432\u044B\u0432\u043E\u0437"&&n.push(`\u0410\u0434\u0440\u0435\u0441 \u0441\u0430\u043C\u043E\u0432\u044B\u0432\u043E\u0437\u0430: ${e.data.address}`),((l=e.data)==null?void 0:l.case)=="\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430"&&n.push(`\u0410\u0434\u0440\u0435\u0441 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438: ${e.data.address}`),n.push("\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0440\u0438\u0439: "+((O=e.data)==null?void 0:O.comment)),n});return{targetModal:a,shake:E,view_message:m}}}),D4={key:0,class:"order-modal"},$4={class:"order-modal-content draft"},A4={class:"order-modal-header"},y4=u("h3",{class:"order-modal-header-title"},"\u0414\u0435\u0442\u0430\u043B\u0438 \u0437\u0430\u044F\u0432\u043A\u0438 \u043D\u0430 \u043E\u0442\u0433\u0440\u0443\u0437\u043A\u0443",-1),F4={class:"order-modal-body draft"},B4=u("br",null,null,-1),w4=u("br",null,null,-1),S4={class:"nav-tab"},b4=u("span",null,"\u0412\u0438\u0434 \u043E\u0442\u0433\u0440\u0443\u0437\u043A\u0438:",-1),P4={class:"nav-tab-wrap",style:{"justify-content":"space-around"}},O4=u("div",{class:"gradient-btn-text"},"\u0421\u0430\u043C\u043E\u0432\u044B\u0432\u043E\u0437",-1),k4=[O4],V4=u("div",{class:"gradient-btn-text"},"\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430",-1),U4=[V4],L4=u("div",{class:"gradient-btn-text"},"\u0414\u043E \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u043E\u0439",-1),I4=[L4],T4={key:0,class:""},M4={class:"shipment-form-item"},N4=u("div",{class:"shipment-form-elem-title"},[u("span",null,"\u041F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435")],-1),j4={class:"shipment-form-info shipment-form-info-text"},x4=["innerHTML"],G4=u("div",{class:"order-modal-action"},null,-1);function H4(e,a,E,m,n,w){const p=b("DeleteButton");return e.modelValue?(r(),i("div",D4,[u("div",{class:f("order-modal-dialog draft"+(e.shake?" shake":"")),ref:"targetModal"},[u("div",$4,[u("div",A4,[y4,_(p,{onOnClick:a[0]||(a[0]=D=>e.$emit("update:modelValue",!1))})]),u("div",F4,[B(" \u0417\u0430\u044F\u0432\u043A\u0430 \u2116 "+h(e.data.bitrix_id)+" \u043E\u0442 "+h(e.data.date_create.substring(0,10))+" ",1),B4,w4,u("div",S4,[b4,u("div",P4,[u("a",{class:f("nav-tab-elem gradient-btn"+(e.data.case=="\u0421\u0430\u043C\u043E\u0432\u044B\u0432\u043E\u0437"?" active":""))},k4,2),u("a",{class:f("nav-tab-elem gradient-btn"+(e.data.case=="\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430"?" active":""))},U4,2),u("a",{class:f("nav-tab-elem gradient-btn"+(e.data.case=="\u0414\u043E \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u043E\u0439"?" active":""))},I4,2)])]),e.data?(r(),i("div",T4,[u("div",M4,[N4,u("div",j4,[(r(!0),i(M,null,N(e.view_message,(D,$)=>(r(),i("p",{key:$},[u("span",{innerHTML:D},null,8,x4)]))),128))])])])):y("",!0)]),G4])],2)])):y("",!0)}var q4=Z(C4,[["render",H4]]);const z4={class:"orders-list-wrap"},R4={class:"orders-heading-info"},K4={class:"orders-heading-pagination"},Q4={class:"orders-list"},Y4={class:"orders-list-row orders-list-heading"},Z4=u("div",{class:"orders-list-elem"},"\u2116",-1),J4=u("div",null,"\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435",-1),W4=u("svg",{width:"13",height:"9",viewBox:"0 0 13 9",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[u("path",{class:"fill",d:"M7.00726 8.11117L12.7923 2.32601C12.9262 2.1922 13 2.01359 13 1.82313C13 1.63268 12.9262 1.45406 12.7923 1.32026L12.3664 0.894224C12.0888 0.616998 11.6378 0.616998 11.3606 0.894224L6.5027 5.75217L1.63936 0.888833C1.50545 0.755029 1.32694 0.681152 1.13659 0.681152C0.946033 0.681152 0.767522 0.755029 0.633507 0.888833L0.207681 1.31487C0.0737714 1.44878 -4.1357e-08 1.62729 -4.9682e-08 1.81774C-5.8007e-08 2.0082 0.0737714 2.18681 0.207681 2.32062L5.99802 8.11117C6.13236 8.24529 6.31171 8.31896 6.50238 8.31854C6.69378 8.31896 6.87303 8.24529 7.00726 8.11117Z",fill:"#A5A7A9"})],-1),X4=[W4],uu=u("div",{class:"orders-list-elem"},"\u0418\u043D\u0444\u043E",-1),eu=["onClick"],su={class:"orders-list-elem"},tu=u("div",{class:"table-arrow"},null,-1),au={class:"orders-list-elem"},ou={class:"orders-list-elem"},ru=["innerHTML"],iu={class:"orders-list-elem"},nu={class:"orders-list-elem",style:{"justify-content":"space-around"}},lu=u("div",{class:"orders-list-elem"},null,-1),du=u("div",{class:"orders-list-elem"},null,-1),cu={class:"orders-list-elem"},mu=["onClick"],vu=["onClick"],_u=["onClick"],hu=["onClick"],fu=u("a",{class:"orders-list-more-dropdown-link"},"\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443",-1),pu={key:0},gu={class:"orders-list-info-elem"},Eu={class:"orders-list-info-elem"},Cu={key:0,class:"orders-list-info-about tooltip"},Du=["onClick"],$u=u("span",{class:"tooltiptext"},"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0441\u0447\u0435\u0442",-1),Au={key:1,class:"orders-list-info-about tooltip"},yu={class:"orders-list-info-download disable"},Fu=u("span",{class:"tooltiptext"},[B("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0441\u0447\u0435\u0442 \u043C\u043E\u0436\u043D\u043E \u0442\u043E\u043B\u044C\u043A\u043E "),u("br"),B(" \u043F\u043E\u0441\u043B\u0435 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F \u0437\u0430\u043A\u0430\u0437\u0430")],-1),Bu={key:0,class:"orders-list-info-elem orders-list-info-doc-wrap"},wu={key:1,class:"orders-list-info-elem orders-list-info-doc-wrap"},Su=["href"],bu=["href"],Pu=["href"],Ou=["href"],ku=u("div",{class:"orders-list-info-elem"},null,-1),Vu={class:"orders-list-info-elem"},Uu={class:"orders-list-info-elem"},Lu={key:1,class:"orders-list-info-row"},Iu=v4('<div class="orders-list-info-elem"></div><div class="orders-list-info-elem"> \u0421\u0447\u0435\u0442 \u043E\u0442\u0441\u0443\u0442\u0432\u0443\u0435\u0442 </div><div class="orders-list-info-elem"></div><div class="orders-list-info-elem"></div><div class="orders-list-info-elem"></div><div class="orders-list-info-elem"></div><div class="orders-list-info-elem"></div>',7),Tu=[Iu],Mu={key:0,class:"orders-list-row orders-list-main-row"},Nu={class:"order-info"},ju={key:0},xu=B("\u0417\u0430\u044F\u0432\u043E\u043A \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E. \u0421\u043E\u0437\u0434\u0430\u0439\u0442\u0435 "),Gu=B("\u043D\u043E\u0432\u0443\u044E \u0437\u0430\u044F\u0432\u043A\u0443"),Hu=B(" \u0438 \u043E\u043D\u0430 \u043F\u043E\u044F\u0432\u0438\u0442\u0441\u044F \u0432 \u0441\u043F\u0438\u0441\u043A\u0435."),qu={key:1},zu=B(" \u0421\u043E\u0437\u0434\u0430\u0439\u0442\u0435 "),Ru=B("\u043D\u043E\u0432\u044B\u0439 \u0437\u0430\u043A\u0430\u0437"),Ku=B(" \u0434\u043B\u044F \u0442\u043E\u0433\u043E \u0447\u0442\u043E\u0431\u044B \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443 \u043D\u0430 \u0435\u0433\u043E \u043E\u0442\u0433\u0440\u0443\u0437\u043A\u0443."),Qu=x({__name:"ShipmentsListCard",props:{data:{type:Array,required:!0},contrAgent:{type:String},period:{type:String},status:{type:String},loading:{type:Boolean,default:!1},search:{type:Object,required:!0}},setup(e){const a=e,E=J(),m=v(-1),n=v(-1),w=v(null),p=v([]),D=v(-1),$=v(!1),S=v(!1),l=v({maxItemOnPage:10,currentPage:1}),O=v(-1),C=v(!1),L="http://91.232.12.198:82",F=v([{name:"id",value:"",show:!1},{name:"name",value:"",show:!1},{name:"id",value:"",show:!1},{name:"id",value:"",show:!1},{name:"id",value:"",show:!1},{name:"id",value:"",show:!1}]),X=P(()=>E.getters.isOrders);Y(w,()=>{n.value=-1}),U(m,()=>{var o,s,g;if(m.value!=-1&&k.value&&Array.isArray((o=k.value[m.value].order)==null?void 0:o.checks)){let t=(g=(s=k.value[m.value].order)==null?void 0:s.checks)==null?void 0:g.map(c=>c.doc_status?null:E.dispatch(W.GET_ORDERS_DOCSTATUS,c.guid));t&&Promise.all(t).finally(()=>{})}}),U(()=>a.status,()=>{l.value.currentPage=1,m.value=-1}),U(()=>a.contrAgent,()=>{l.value.currentPage=1,m.value=-1}),U(()=>a.search,()=>{l.value.currentPage=1,m.value=-1}),U(()=>a.period,()=>{l.value.currentPage=1,m.value=-1});const k=P(()=>{let o=a.data.filter(s=>a.contrAgent==""||s.partner_guid==a.contrAgent);return o=o.filter(s=>u4(s.date)),o=o.filter(s=>e4(s)),o=o.filter(s=>V(s)),F.value[1].value!=""&&(o=o.filter(s=>`\u0417\u0430\u044F\u0432\u043A\u0430 \u2116 ${s.bitrix_id} \u043E\u0442 ${s.date_create.substring(0,10)}`.indexOf(F.value[1].value)!=-1)),o}),G=o=>l.value.maxItemOnPage!=-1?o>=(l.value.currentPage-1)*l.value.maxItemOnPage&&o<l.value.currentPage*l.value.maxItemOnPage:!0,V=o=>{if(a.search.search=="")return!0;switch(a.search.id){case 1:return`\u0417\u0430\u044F\u0432\u043A\u0430 \u2116 ${o.bitrix_id} \u043E\u0442 ${o.date_create.substring(0,10)}`.toUpperCase().indexOf(a.search.search.toUpperCase())!=-1;case 2:return o.date.toUpperCase().indexOf(a.search.search.toUpperCase())!=-1;case 3:return o.order?String(o.order.n).toUpperCase().indexOf(a.search.search.toUpperCase())!=-1:!1;default:return!0}},u4=o=>{var s;if(a.period=="\u0412\u0441\u0435")return!0;{const g=(s=a.period)==null?void 0:s.split(" - ")[0],t=g==null?void 0:g.substring(6,10),c=g==null?void 0:g.substring(3,5);return t==o.substring(6,10)&&c==o.substring(3,5)}},e4=o=>o,s4=o=>{p.value.push(o),E.dispatch(m4.GET_BILL_FILE_SAVE,o).finally(()=>{p.value=p.value.filter(s=>s!==o)})},t4=(o,s)=>{const t=E.getters.getCompanyStoragesData(o).find(c=>c.guid==s);return t?t.name.replace(/(^|\s)\S/g,c=>c.toUpperCase()).replace(/(ООО)|(")|(\s)|([а-я])/g,""):"\u0421\u043A\u043B\u0430\u0434"};return(o,s)=>{const g=b("router-link");return r(),i("div",z4,[u("div",R4,[u("div",K4,[_(E4,{maxPage:l.value.maxItemOnPage!=-1?Math.ceil(A(k).length/l.value.maxItemOnPage):1,currentPage:l.value.currentPage,"onUpdate:currentPage":s[0]||(s[0]=t=>l.value.currentPage=t),maxItemOnPage:l.value.maxItemOnPage,"onUpdate:maxItemOnPage":s[1]||(s[1]=t=>l.value.maxItemOnPage=t)},null,8,["maxPage","currentPage","maxItemOnPage"])]),u("div",{class:"orders-heading-info-text",style:c4(A(k).length!=e.data.length?"visibility: visible":"visibility: hidden")}," \u041F\u043E\u043A\u0430\u0437\u0430\u043D\u043E "+h(A(k).length)+" \u0438\u0437 "+h(e.data.length),5)]),u("div",Q4,[u("div",Y4,[Z4,u("div",{class:f("orders-list-elem"+(V.search!=""&&V.id==1?" active":"")+(F.value[1].value!=""?" active":""))},[_(p4,{modelValue:F.value[1].value,"onUpdate:modelValue":s[2]||(s[2]=t=>F.value[1].value=t),show:F.value[1].show,"onUpdate:show":s[3]||(s[3]=t=>F.value[1].show=t)},null,8,["modelValue","show"]),J4,u("div",{class:f("orders-list-elem-filter"+(F.value[1].show||F.value[1].value!=""?" active":"")),title:"\u0424\u0438\u043B\u044C\u0442\u0440",onClick:s[4]||(s[4]=t=>F.value[1].show=!0)},X4,2)],2),u("div",{class:f("orders-list-elem"+(e.contrAgent!=""?" active":""))},"\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442",2),u("div",{class:f("orders-list-elem"+(V.search!=""&&V.id==2?" active":""))},"\u0416\u0435\u043B\u0430\u0435\u043C\u0430\u044F \u0434\u0430\u0442\u0430",2),u("div",{class:f("orders-list-elem"+(V.search!=""&&V.id==3?" active":"")),style:{"justify-content":"space-around"}},"\u041D\u043E\u043C\u0435\u0440 \u0437\u0430\u043A\u0430\u0437\u0430",2),u("div",{class:f("orders-list-elem"+(e.period!="\u0412\u0441\u0435"?" active":""))},"\u0414\u0430\u0442\u0430 \u043E\u0442\u0433\u0440\u0443\u0437\u043A\u0438",2),u("div",{class:f("orders-list-elem"+(e.status!="\u0412\u0441\u0435"?" active":""))},"\u0421\u0442\u0430\u0442\u0443\u0441",2),uu]),(r(!0),i(M,null,N(A(k),(t,c)=>(r(),i("div",{key:c,class:f("orders-list-item"+(c==m.value?" active":""))},[G(c)?(r(),i("div",{key:0,class:"orders-list-row orders-list-main-row",onClick:d=>c===m.value?m.value=-1:m.value=c},[u("div",su,[B(h(c+1)+" ",1),tu]),u("div",au," \u0417\u0430\u044F\u0432\u043A\u0430 \u2116 "+h(t.bitrix_id)+" \u043E\u0442 "+h(t.date_create.substring(0,10)),1),u("div",ou,[u("span",{innerHTML:t.partner_name},null,8,ru)]),u("div",iu,h(t.date),1),u("div",nu,h(t.order?t.order.n:""),1),lu,du,u("div",cu,[u("button",{class:"orders-list-more",onClick:I(d=>n.value=c,["stop"])},"\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u043E",8,mu),u("div",{class:f("orders-list-more-dropdown"+(c==n.value?" active":"")),ref_for:!0,ref_key:"target",ref:w},[u("a",{class:"orders-list-more-dropdown-link",onClick:I(d=>{D.value=t.order.n,$.value=!0,S.value=!0},["stop"])},"\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437",8,vu),u("a",{class:"orders-list-more-dropdown-link",onClick:I(d=>{D.value=t.order.n,$.value=!0},["stop"])},"\u0414\u0435\u0442\u0430\u043B\u0438 \u0437\u0430\u043A\u0430\u0437\u0430",8,_u),u("a",{class:"orders-list-more-dropdown-link",onClick:I(d=>{O.value=c,C.value=!0},["stop"])},"\u0417\u0430\u044F\u0432\u043A\u0430 \u043D\u0430 \u043E\u0442\u0433\u0440\u0443\u0437\u043A\u0443",8,hu),fu],2)])],8,eu)):y("",!0),G(c)?(r(),i("div",{key:1,class:f(["orders-list-info",{active:c==m.value}]),onClick:s[5]||(s[5]=d=>n.value=-1)},[t.order&&Array.isArray(t.order.checks)?(r(),i("div",pu,[(r(!0),i(M,null,N(t.order.checks,(d,a4)=>{var H,q,z,R;return r(),i("div",{class:"orders-list-info-row",key:a4},[u("div",gu,h(t4(t.partner_guid,d.organization_id)),1),u("div",Eu,[d.status>=2?(r(),i("div",Cu,[u("div",{class:"orders-list-info-download",onClick:i0=>s4(d.guid)},[u("span",null," \u0421\u0447\u0451\u0442 \u043E\u0442 "+h(t.order.date.substring(0,10)),1),p.value.includes(t.guid)?(r(),K(T,{key:0,small:""})):y("",!0)],8,Du),$u])):(r(),i("div",Au,[u("div",yu," \u0421\u0447\u0451\u0442 \u043E\u0442 "+h(t.order.date.substring(0,10)),1),Fu]))]),d.doc_status?(r(),i("div",wu,[((H=d.doc_status)==null?void 0:H.StatusSchet)&&d.status>=2?(r(),i("a",{key:0,class:"orders-list-info-doc sc",href:`${A(L)}/api/order/print?id=${d.guid}&name=\u0421\u0447\u0435\u0442`,target:"_blank",title:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u0447\u0435\u0442"},null,8,Su)):y("",!0),(q=d.doc_status)!=null&&q.StatusUPD?(r(),i("a",{key:1,class:"orders-list-info-doc upd",href:`${A(L)}/api/order/print?id=${d.guid}&name=\u0423\u041F\u0414`,target:"_blank",title:"\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u0435\u0440\u0435\u0434\u0430\u0442\u043E\u0447\u043D\u044B\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442"},null,8,bu)):y("",!0),(z=d.doc_status)!=null&&z.StatusSF?(r(),i("a",{key:2,class:"orders-list-info-doc sf",href:`${A(L)}/api/order/print?id=${d.guid}&name=\u0421\u0424`,target:"_blank",title:"\u0421\u0447\u0451\u0442-\u0444\u0430\u043A\u0442\u0443\u0440\u0430"},null,8,Pu)):y("",!0),(R=d.doc_status)!=null&&R.StatusUPK?(r(),i("a",{key:3,class:"orders-list-info-doc kor",href:`${A(L)}/api/order/print?id=${d.guid}&name=\u0423\u041A\u0414`,target:"_blank",title:"\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u044B\u0439 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u043E\u0447\u043D\u044B\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442"},null,8,Ou)):y("",!0)])):(r(),i("div",Bu,[_(T,{small:""})])),ku,u("div",Vu,h(A(j)[d.status+1]?A(j)[d.status+1].name:""),1),u("div",Uu,h(t.case),1)])}),128))])):(r(),i("div",Lu,Tu))],2)):y("",!0)],2))),128)),e.data.length==0&&!e.loading?(r(),i("div",Mu,[u("div",Nu,[A(X)?(r(),i("span",ju,[xu,_(g,{tag:"a",class:"order-info-link",to:"/shipments/request"},{default:Q(()=>[Gu]),_:1}),Hu])):(r(),i("span",qu,[zu,_(g,{tag:"a",class:"order-info-link",to:"/order"},{default:Q(()=>[Ru]),_:1}),Ku]))])])):y("",!0)]),e.loading?(r(),K(T,{key:0,style:{width:"100%"}})):y("",!0),_(g4,{modelValue:$.value,"onUpdate:modelValue":s[6]||(s[6]=t=>$.value=t),orderId:D.value,repeatOrder:S.value,"onUpdate:repeatOrder":s[7]||(s[7]=t=>S.value=t)},null,8,["modelValue","orderId","repeatOrder"]),_(q4,{modelValue:C.value,"onUpdate:modelValue":s[8]||(s[8]=t=>C.value=t),data:e.data[O.value]},null,8,["modelValue","data"])])}}}),Yu=x({components:{PersonalBar:o4,Notification:r4,CompanyBarTop:i4,TopNav:n4,SelectInput:l4,ShipmentsListCard:Qu},setup(){const e=J(),a=v(!0),E=v(""),m=v(0),n=v(0),w=v({id:1,search:""}),p=[{id:1,name:"\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"},{id:2,name:"\u0416\u0435\u043B\u0430\u0435\u043C\u0430\u044F \u0434\u0430\u0442\u0430"},{id:3,name:"\u041D\u043E\u043C\u0435\u0440 \u0437\u0430\u043A\u0430\u0437\u0430"}];return _4(()=>{e.dispatch(W.GET_ORDERS).finally(()=>{e.dispatch(h4.GET_SHIPMENTS).finally(()=>{a.value=!1})}),e.getters.isCompanysLoad||e.dispatch(f4.GET_COMPANYS)}),{filterCompanyUid:E,filterPeriod:m,OrdersSatusCode:j,filterStatus:n,search:w,loading:a,searchColumn:p,companyBarTopData:P(()=>e.getters.getCompanysList),filterCompanyData:P(()=>e.getters.getCompanysListInput),filterPeriodData:P(()=>e.getters.getOrdersDataPeriodArray),shipmentsList:P(()=>e.getters.getShipments),isOrders:P(()=>e.getters.isOrders)}}}),Zu={class:"top-line product-page"},Ju={class:"orders-heading"},Wu={class:"orders-heading-elem"},Xu={class:"orders-heading-item"},u0=u("div",{class:"orders-heading-text"},"\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442:",-1),e0={class:"orders-heading-item"},s0=u("div",{class:"orders-heading-text"},"\u0421\u0442\u0430\u0442\u0443\u0441:",-1),t0={class:"orders-heading-item","data-select2-id":"147"},a0=u("div",{class:"orders-heading-text"},"\u041F\u0435\u0440\u0438\u043E\u0434:",-1),o0=u("div",{class:"orders-heading-elem"},null,-1);function r0(e,a,E,m,n,w){const p=b("CompanyBarTop"),D=b("Notification"),$=b("PersonalBar"),S=b("top-nav"),l=b("SelectInput"),O=b("ShipmentsListCard");return r(),i("div",null,[u("div",Zu,[_(p,{data:e.companyBarTopData,modelValue:e.filterCompanyUid,"onUpdate:modelValue":a[0]||(a[0]=C=>e.filterCompanyUid=C)},null,8,["data","modelValue"]),_(D),_($)]),_(S,{shipments:e.isOrders},null,8,["shipments"]),u("div",Ju,[u("div",Wu,[u("div",Xu,[u0,_(l,{data:e.filterCompanyData,modelValue:e.filterCompanyUid,"onUpdate:modelValue":a[1]||(a[1]=C=>e.filterCompanyUid=C)},null,8,["data","modelValue"])]),u("div",e0,[s0,_(l,{data:e.OrdersSatusCode,modelValue:e.filterStatus,"onUpdate:modelValue":a[2]||(a[2]=C=>e.filterStatus=C)},null,8,["data","modelValue"])]),u("div",t0,[a0,_(l,{data:e.filterPeriodData,modelValue:e.filterPeriod,"onUpdate:modelValue":a[3]||(a[3]=C=>e.filterPeriod=C)},null,8,["data","modelValue"])]),u("div",{class:"orders-heading-clean",title:"\u0423\u0431\u0440\u0430\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440\u044B",onClick:a[4]||(a[4]=C=>{e.filterCompanyUid="",e.filterPeriod=0,e.filterStatus=0})})]),o0]),_(O,{data:e.shipmentsList,loading:e.loading,contrAgent:e.filterCompanyUid,period:e.filterPeriodData[e.filterPeriod].name,status:e.OrdersSatusCode[e.filterStatus].name,search:e.search},null,8,["data","loading","contrAgent","period","status","search"])])}var f0=Z(Yu,[["render",r0]]);export{f0 as default};