(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-211d2928"],{1276:function(e,t,r){"use strict";var a=r("2ba4"),n=r("c65b"),c=r("e330"),o=r("d784"),l=r("44e7"),i=r("825a"),d=r("1d80"),s=r("4840"),u=r("8aa5"),m=r("50c4"),b=r("577e"),f=r("dc4a"),O=r("f36a"),p=r("14c3"),v=r("9263"),j=r("9f7f"),h=r("d039"),g=j.UNSUPPORTED_Y,V=4294967295,E=Math.min,C=[].push,k=c(/./.exec),N=c(C),y=c("".slice),w=!h((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));o("split",(function(e,t,r){var c;return c="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,r){var c=b(d(this)),o=void 0===r?V:r>>>0;if(0===o)return[];if(void 0===e)return[c];if(!l(e))return n(t,c,e,o);var i,s,u,m=[],f=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,j=new RegExp(e.source,f+"g");while(i=n(v,j,c)){if(s=j.lastIndex,s>p&&(N(m,y(c,p,i.index)),i.length>1&&i.index<c.length&&a(C,m,O(i,1)),u=i[0].length,p=s,m.length>=o))break;j.lastIndex===i.index&&j.lastIndex++}return p===c.length?!u&&k(j,"")||N(m,""):N(m,y(c,p)),m.length>o?O(m,0,o):m}:"0".split(void 0,0).length?function(e,r){return void 0===e&&0===r?[]:n(t,this,e,r)}:t,[function(t,r){var a=d(this),o=void 0==t?void 0:f(t,e);return o?n(o,t,a,r):n(c,b(a),t,r)},function(e,a){var n=i(this),o=b(e),l=r(c,n,o,a,c!==t);if(l.done)return l.value;var d=s(n,RegExp),f=n.unicode,O=(n.ignoreCase?"i":"")+(n.multiline?"m":"")+(n.unicode?"u":"")+(g?"g":"y"),v=new d(g?"^(?:"+n.source+")":n,O),j=void 0===a?V:a>>>0;if(0===j)return[];if(0===o.length)return null===p(v,o)?[o]:[];var h=0,C=0,k=[];while(C<o.length){v.lastIndex=g?0:C;var w,B=p(v,g?y(o,C):o);if(null===B||(w=E(m(v.lastIndex+(g?C:0)),o.length))===h)C=u(o,C,f);else{if(N(k,y(o,h,C)),k.length===j)return k;for(var S=1;S<=B.length-1;S++)if(N(k,B[S]),k.length===j)return k;C=h=w}}return N(k,y(o,h)),k}]}),!w,g)},"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},2324:function(e,t,r){"use strict";var a=r("7a23"),n={class:"orders-heading-search"},c={class:"orders-heading-search-elem"},o=Object(a["createElementVNode"])("div",{class:"product-search-text"},"Поиск по: ",-1),l={class:"orders-heading-search-select-wrap"},i={class:"orders-heading-search-select-elem"},d={class:"orders-heading-search-select-elem"},s={class:"product-search-input right"},u=["disabled"],m={class:"orders-heading-search-elem"},b={class:"orders-heading-search-btn gradient-btn"};function f(e,t,r,f,O,p){var v=Object(a["resolveComponent"])("SelectInput");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",n,[Object(a["createElementVNode"])("div",c,[o,Object(a["createElementVNode"])("div",l,[Object(a["createElementVNode"])("div",i,[Object(a["createVNode"])(v,{class:"left",data:e.data,modelValue:e.leftInput,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.leftInput=t})},null,8,["data","modelValue"])]),Object(a["createElementVNode"])("div",d,[Object(a["createElementVNode"])("div",s,[Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{onKeyup:t[1]||(t[1]=Object(a["withKeys"])((function(){return e.doSearch&&e.doSearch.apply(e,arguments)}),["enter"])),disabled:0==e.leftInput,ref:"searchInput","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.search_str=t})},null,40,u),[[a["vModelText"],e.search_str]])])])]),Object(a["createElementVNode"])("div",{class:"product-search-clear",onClick:t[3]||(t[3]=function(t){e.$emit("update:modelValue",{id:1,search:""}),e.search_str="",e.leftInput=1})})]),Object(a["createElementVNode"])("div",m,[Object(a["createElementVNode"])("div",b,[Object(a["createElementVNode"])("div",{class:"gradient-btn-text",onClick:t[4]||(t[4]=function(){return e.doSearch&&e.doSearch.apply(e,arguments)})},"Поиск")])])])}var O=r("195d"),p=Object(a["defineComponent"])({props:{data:{type:Array,require:!0},modelValue:{type:Object}},components:{SelectInput:O["a"]},emits:["update:modelValue"],setup:function(e,t){var r=t.emit,n=Object(a["ref"])(1),c=Object(a["ref"])(null),o=Object(a["ref"])("");Object(a["watch"])((function(){return n.value}),(function(){Object(a["nextTick"])((function(){c.value.focus()})),o.value="",r("update:modelValue",{id:n.value,search:""})}));var l=function(){r("update:modelValue",{id:n,search:o.value})};return{leftInput:n,searchInput:c,search_str:o,doSearch:l}}}),v=r("d959"),j=r.n(v);const h=j()(p,[["render",f]]);t["a"]=h},2532:function(e,t,r){"use strict";var a=r("23e7"),n=r("e330"),c=r("5a34"),o=r("1d80"),l=r("577e"),i=r("ab13"),d=n("".indexOf);a({target:"String",proto:!0,forced:!i("includes")},{includes:function(e){return!!~d(l(o(this)),l(c(e)),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(e,t,r){var a=r("861d"),n=r("c6b6"),c=r("b622"),o=c("match");e.exports=function(e){var t;return a(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==n(e))}},"5a34":function(e,t,r){var a=r("da84"),n=r("44e7"),c=a.TypeError;e.exports=function(e){if(n(e))throw c("The method doesn't accept regular expressions");return e}},"841c":function(e,t,r){"use strict";var a=r("c65b"),n=r("d784"),c=r("825a"),o=r("1d80"),l=r("129f"),i=r("577e"),d=r("dc4a"),s=r("14c3");n("search",(function(e,t,r){return[function(t){var r=o(this),n=void 0==t?void 0:d(t,e);return n?a(n,t,r):new RegExp(t)[e](i(r))},function(e){var a=c(this),n=i(e),o=r(t,a,n);if(o.done)return o.value;var d=a.lastIndex;l(d,0)||(a.lastIndex=0);var u=s(a,n);return l(a.lastIndex,d)||(a.lastIndex=d),null===u?-1:u.index}]}))},"84a4":function(e,t,r){"use strict";r.r(t);r("ac1f"),r("841c"),r("b0c0");var a=r("7a23"),n={class:"top-line product-page"},c={class:"orders-heading"},o={class:"orders-heading-elem"},l={class:"orders-heading-item"},i=Object(a["createElementVNode"])("div",{class:"orders-heading-text"},"Контрагент:",-1),d={class:"orders-heading-item"},s=Object(a["createElementVNode"])("div",{class:"orders-heading-text"},"Статус:",-1),u={class:"orders-heading-item","data-select2-id":"147"},m=Object(a["createElementVNode"])("div",{class:"orders-heading-text"},"Период:",-1),b=Object(a["createElementVNode"])("div",{class:"orders-heading-elem"},null,-1);function f(e,t,r,f,O,p){var v=Object(a["resolveComponent"])("CompanyBarTop"),j=Object(a["resolveComponent"])("Notification"),h=Object(a["resolveComponent"])("PersonalBar"),g=Object(a["resolveComponent"])("top-nav"),V=Object(a["resolveComponent"])("SelectInput"),E=Object(a["resolveComponent"])("OrdersSearchCard"),C=Object(a["resolveComponent"])("ClaimsListCard");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",null,[Object(a["createElementVNode"])("div",n,[Object(a["createVNode"])(v,{data:e.companyBarTopData,modelValue:e.filterCompanyUid,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.filterCompanyUid=t})},null,8,["data","modelValue"]),Object(a["createVNode"])(j),Object(a["createVNode"])(h)]),Object(a["createVNode"])(g,{claims:"",onOnClick:e.newClaim},null,8,["onOnClick"]),Object(a["createElementVNode"])("div",c,[Object(a["createElementVNode"])("div",o,[Object(a["createElementVNode"])("div",l,[i,Object(a["createVNode"])(V,{data:e.filterCompanyData,modelValue:e.filterCompanyUid,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.filterCompanyUid=t})},null,8,["data","modelValue"])]),Object(a["createElementVNode"])("div",d,[s,Object(a["createVNode"])(V,{data:e.OrdersSatusCode,modelValue:e.filterStatus,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.filterStatus=t})},null,8,["data","modelValue"])]),Object(a["createElementVNode"])("div",u,[m,Object(a["createVNode"])(V,{data:e.filterPeriodData,modelValue:e.filterPeriod,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.filterPeriod=t})},null,8,["data","modelValue"])]),Object(a["createElementVNode"])("div",{class:"orders-heading-clean",title:"Убрать фильтры",onClick:t[4]||(t[4]=function(t){e.filterCompanyUid="",e.filterPeriod=0,e.filterStatus=0})})]),b]),Object(a["createVNode"])(E,{data:e.searchColumn,modelValue:e.search,"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.search=t})},null,8,["data","modelValue"]),Object(a["createVNode"])(C,{data:e.claimsList,loading:e.loading,contrAgent:e.filterCompanyUid,period:e.filterPeriodData[e.filterPeriod].name,status:e.OrdersSatusCode[e.filterStatus].name,search:e.search},null,8,["data","loading","contrAgent","period","status","search"])])}r("d3b7");var O=r("1e34"),p=r("c6d3"),v=r("0169"),j=r("3d45"),h=(r("4de4"),r("caad"),r("2532"),{class:"orders-list-wrap"}),g={class:"orders-list",ref:"target"},V={class:"orders-list-row orders-list-heading"},E=Object(a["createElementVNode"])("div",{class:"orders-list-elem"},"№",-1),C=Object(a["createElementVNode"])("div",null,"Наименование",-1),k=Object(a["createElementVNode"])("svg",{width:"13",height:"9",viewBox:"0 0 13 9",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[Object(a["createElementVNode"])("path",{class:"fill",d:"M7.00726 8.11117L12.7923 2.32601C12.9262 2.1922 13 2.01359 13 1.82313C13 1.63268 12.9262 1.45406 12.7923 1.32026L12.3664 0.894224C12.0888 0.616998 11.6378 0.616998 11.3606 0.894224L6.5027 5.75217L1.63936 0.888833C1.50545 0.755029 1.32694 0.681152 1.13659 0.681152C0.946033 0.681152 0.767522 0.755029 0.633507 0.888833L0.207681 1.31487C0.0737714 1.44878 -4.1357e-08 1.62729 -4.9682e-08 1.81774C-5.8007e-08 2.0082 0.0737714 2.18681 0.207681 2.32062L5.99802 8.11117C6.13236 8.24529 6.31171 8.31896 6.50238 8.31854C6.69378 8.31896 6.87303 8.24529 7.00726 8.11117Z",fill:"#A5A7A9"})],-1),N=[k],y=["onClick"],w={class:"orders-list-elem"},B=Object(a["createElementVNode"])("div",{class:"table-arrow"},null,-1),S={class:"orders-list-elem"},x={class:"orders-list-elem"},_=["innerHTML"],I={class:"orders-list-elem"},D={class:"orders-list-elem",style:{"justify-content":"space-around"}},T=Object(a["createElementVNode"])("div",{class:"orders-list-elem"},null,-1),U={class:"orders-list-elem"},A={key:0},L={class:"orders-list-info-elem"},R={class:"orders-list-info-elem"},P={key:0,class:"orders-list-info-about tooltip"},M=["onClick"],z=Object(a["createElementVNode"])("span",{class:"tooltiptext"},"Сохранить счет",-1),G={key:1,class:"orders-list-info-about tooltip"},$={class:"orders-list-info-download disable"},F=Object(a["createElementVNode"])("span",{class:"tooltiptext"},[Object(a["createTextVNode"])("Сохранить счет можно только "),Object(a["createElementVNode"])("br"),Object(a["createTextVNode"])(" после подтверждения заказа")],-1),q={key:0,class:"orders-list-info-elem orders-list-info-doc-wrap"},K={key:1,class:"orders-list-info-elem orders-list-info-doc-wrap"},H=["href"],J=["href"],Y=["href"],W=["href"],Z=Object(a["createElementVNode"])("div",{class:"orders-list-info-elem"},null,-1),Q={class:"orders-list-info-elem"},X=Object(a["createElementVNode"])("div",{class:"orders-list-info-elem"},null,-1),ee={key:1,class:"orders-list-info-row"},te=Object(a["createStaticVNode"])('<div class="orders-list-info-elem"></div><div class="orders-list-info-elem"> Счет отсутвует </div><div class="orders-list-info-elem"></div><div class="orders-list-info-elem"></div><div class="orders-list-info-elem"></div><div class="orders-list-info-elem"></div><div class="orders-list-info-elem"></div>',7),re=[te],ae={key:0,class:"orders-list-row orders-list-main-row"},ne=Object(a["createElementVNode"])("div",{class:"order-info"}," Претензий не найдено. ",-1),ce=[ne];function oe(e,t){var r=Object(a["resolveComponent"])("modal-input"),n=Object(a["resolveComponent"])("preloader-local"),c=Object(a["resolveComponent"])("PreloaderLocal"),o=Object(a["resolveComponent"])("OrderDetailModal");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",h,[Object(a["createElementVNode"])("div",{style:Object(a["normalizeStyle"])(e.data_filtred.length!=e.data.length?"visibility: visible":"visibility: hidden"),class:"orders-heading-info"}," Показано "+Object(a["toDisplayString"])(e.data_filtred.length)+" из "+Object(a["toDisplayString"])(e.data.length),5),Object(a["createElementVNode"])("div",g,[Object(a["createElementVNode"])("div",V,[E,Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])("orders-list-elem"+(""!=e.search.search&&1==e.search.id?" active":"")+(""!=e.filter[1].value?" active":""))},[Object(a["createVNode"])(r,{modelValue:e.filter[1].value,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.filter[1].value=t}),show:e.filter[1].show,"onUpdate:show":t[1]||(t[1]=function(t){return e.filter[1].show=t})},null,8,["modelValue","show"]),C,Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])("orders-list-elem-filter"+(e.filter[1].show||""!=e.filter[1].value?" active":"")),title:"Фильтр",onClick:t[2]||(t[2]=function(t){return e.filter[1].show=!0})},N,2)],2),Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])("orders-list-elem"+(""!=e.contrAgent?" active":""))},"Контрагент",2),Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])("orders-list-elem"+(""!=e.search.search&&2==e.search.id?" active":""))},"Дата создания",2),Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])("orders-list-elem"+(""!=e.search.search&&3==e.search.id?" active":"")),style:{"justify-content":"space-around"}},"Номер заказа",2),Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])("orders-list-elem"+("Все"!=e.status?" active":""))},"Статус",2),Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])("orders-list-elem"+(""!=e.search.search&&4==e.search.id?" active":""))},"Причина",2)]),(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.data_filtred,(function(r,o){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{key:o,class:Object(a["normalizeClass"])("orders-list-item"+(o==e.active?" active":""))},[Object(a["createElementVNode"])("div",{class:"orders-list-row orders-list-main-row",onClick:function(t){o===e.active?e.active=-1:e.active=o,e.active_more=-1}},[Object(a["createElementVNode"])("div",w,[Object(a["createTextVNode"])(Object(a["toDisplayString"])(o+1)+" ",1),B]),Object(a["createElementVNode"])("div",S," Претензия № "+Object(a["toDisplayString"])(r.bitrix_id)+" от "+Object(a["toDisplayString"])(r.date_create.substring(0,10)),1),Object(a["createElementVNode"])("div",x,[Object(a["createElementVNode"])("span",{innerHTML:r.partner_name},null,8,_)]),Object(a["createElementVNode"])("div",I,Object(a["toDisplayString"])(r.date_create.substring(0,10)),1),Object(a["createElementVNode"])("div",D,Object(a["toDisplayString"])(r.order?r.order.n:""),1),T,Object(a["createElementVNode"])("div",U,Object(a["toDisplayString"])(r.case),1)],8,y),Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])("orders-list-info"+(o==e.active?" active":"")),onClick:t[3]||(t[3]=function(t){return e.active_more=-1})},[r.order&&Array.isArray(r.order.checks)?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",A,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(r.order.checks,(function(t,o){var l,i,d,s;return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{class:"orders-list-info-row",key:o},[Object(a["createElementVNode"])("div",L,Object(a["toDisplayString"])(e.getStorageName(r.partner_guid,t.organization_id)),1),Object(a["createElementVNode"])("div",R,[t.status>=2?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",P,[Object(a["createElementVNode"])("div",{class:"orders-list-info-download",onClick:function(r){return e.downloadBill(t.guid)}},[Object(a["createElementVNode"])("span",null," Счёт от "+Object(a["toDisplayString"])(r.order.date.substring(0,10)),1),e.loading_bill.includes(r.guid)?(Object(a["openBlock"])(),Object(a["createBlock"])(n,{key:0,small:""})):Object(a["createCommentVNode"])("",!0)],8,M),z])):(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",G,[Object(a["createElementVNode"])("div",$," Счёт от "+Object(a["toDisplayString"])(r.order.date.substring(0,10)),1),F]))]),t.doc_status?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",K,[null!==(l=t.doc_status)&&void 0!==l&&l.StatusSchet&&t.status>=2?(Object(a["openBlock"])(),Object(a["createElementBlock"])("a",{key:0,class:"orders-list-info-doc sc",href:"http://89.111.136.61/api/order/print?id=".concat(t.guid,"&name=Счет"),target:"_blank",title:"Открыть счет"},null,8,H)):Object(a["createCommentVNode"])("",!0),null!==(i=t.doc_status)&&void 0!==i&&i.StatusUPD?(Object(a["openBlock"])(),Object(a["createElementBlock"])("a",{key:1,class:"orders-list-info-doc upd",href:"http://89.111.136.61/api/order/print?id=".concat(t.guid,"&name=УПД"),target:"_blank",title:"Универсальный передаточный документ"},null,8,J)):Object(a["createCommentVNode"])("",!0),null!==(d=t.doc_status)&&void 0!==d&&d.StatusSF?(Object(a["openBlock"])(),Object(a["createElementBlock"])("a",{key:2,class:"orders-list-info-doc sf",href:"http://89.111.136.61/api/order/print?id=".concat(t.guid,"&name=СФ"),target:"_blank",title:"Счёт-фактура"},null,8,Y)):Object(a["createCommentVNode"])("",!0),null!==(s=t.doc_status)&&void 0!==s&&s.StatusUPK?(Object(a["openBlock"])(),Object(a["createElementBlock"])("a",{key:3,class:"orders-list-info-doc kor",href:"http://89.111.136.61/api/order/print?id=".concat(t.guid,"&name=УКД"),target:"_blank",title:"Универсальный корректировочный документ"},null,8,W)):Object(a["createCommentVNode"])("",!0)])):(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",q,[Object(a["createVNode"])(c,{small:""})])),Z,Object(a["createElementVNode"])("div",Q,Object(a["toDisplayString"])(e.OrdersSatusCode[t.status+1]?e.OrdersSatusCode[t.status+1].name:""),1),X])})),128))])):(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",ee,re))],2)],2)})),128)),0!=e.data.length||e.loading?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",ae,ce))],512),e.loading?(Object(a["openBlock"])(),Object(a["createBlock"])(c,{key:0,style:{width:"100%"}})):Object(a["createCommentVNode"])("",!0),Object(a["createVNode"])(o,{modelValue:e.showDetail,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.showDetail=t}),orderId:e.detailOrderId},null,8,["modelValue","orderId"])])}r("d81d"),r("3ca3"),r("ddb0"),r("99af"),r("1276"),r("c740"),r("7db0"),r("5319");var le=r("6888"),ie=r("a25e"),de=r("dde0"),se=r("2c28"),ue=r("5502"),me=r("0613"),be=r("cd15"),fe=r("43d2"),Oe=r("ae0a"),pe=r("649f"),ve=Object(a["defineComponent"])({props:{data:{type:Array,required:!0},contrAgent:{type:String},period:{type:String},status:{type:String},loading:{type:Boolean,default:!1},search:{type:Object,required:!0}},components:{PreloaderLocal:le["a"],OrderDetailModal:ie["a"],ModalInput:de["a"]},setup:function(e){var t=Object(ue["b"])(me["a"]),r=Object(a["ref"])(-1),n=Object(a["ref"])(-1),c=Object(a["ref"])(null),o=Object(a["ref"])(!1),l=Object(a["ref"])([]),i=Object(a["ref"])(-1),d=Object(a["ref"])([{name:"id",value:"",show:!1},{name:"name",value:"",show:!1},{name:"id",value:"",show:!1},{name:"id",value:"",show:!1},{name:"id",value:"",show:!1},{name:"id",value:"",show:!1}]);Object(se["onClickOutside"])(c,(function(){n.value=-1})),Object(a["watch"])(r,(function(){var e;if(-1!=r.value&&s.value&&Array.isArray(null===(e=s.value[r.value].order)||void 0===e?void 0:e.checks)){var a,n,c=null===(a=s.value[r.value].order)||void 0===a||null===(n=a.checks)||void 0===n?void 0:n.map((function(e){if(!e.doc_status)return t.dispatch(fe["a"].GET_ORDERS_DOCSTATUS,e.guid)}));c&&Promise.all(c).finally((function(){}))}})),Object(a["watch"])((function(){return e.status}),(function(){r.value=-1})),Object(a["watch"])((function(){return e.contrAgent}),(function(){r.value=-1})),Object(a["watch"])((function(){return e.search}),(function(){r.value=-1})),Object(a["watch"])((function(){return e.period}),(function(){r.value=-1}));var s=Object(a["computed"])((function(){var t=e.data.filter((function(t){return""==e.contrAgent||t.partner_guid==e.contrAgent}));return t=t.filter((function(e){return m(e.date_create)})),t=t.filter((function(e){return b(e)})),t=t.filter((function(e){return u(e)})),""!=d.value[1].value&&(t=t.filter((function(e){return-1!="Претензия № ".concat(e.bitrix_id," от ").concat(e.date_create.substring(0,10)).indexOf(d.value[1].value)}))),t})),u=function(t){if(""==e.search.search)return!0;switch(e.search.id){case 1:return-1!="Претензия № ".concat(t.bitrix_id," от ").concat(t.date_create.substring(0,10)).toUpperCase().indexOf(e.search.search.toUpperCase());case 2:return-1!=t.date_create.toUpperCase().indexOf(e.search.search.toUpperCase());case 3:return!!t.order&&-1!=String(t.order.n).toUpperCase().indexOf(e.search.search.toUpperCase());case 4:return!!t.case&&-1!=String(t.case).toUpperCase().indexOf(e.search.search.toUpperCase());default:return!0}},m=function(t){if(!t)return!1;if("Все"==e.period)return!0;var r,a=null===(r=e.period)||void 0===r?void 0:r.split(" - ")[0],n=null===a||void 0===a?void 0:a.substring(6,10),c=null===a||void 0===a?void 0:a.substring(3,5);return n==t.substring(6,10)&&c==t.substring(3,5)},b=function(t){return"Все"==e.status||!!t.order&&(!!Array.isArray(t.order.checks)&&-1!=t.order.checks.findIndex((function(t){return!!Oe["a"][parseInt(t.status+1)]&&e.status==Oe["a"][parseInt(t.status+1)].name})))},f=function(e){l.value.push(e),t.dispatch(be["a"].GET_BILL_FILE_SAVE,e).finally((function(){l.value=l.value.filter((function(t){return t!==e}))}))},O=function(e,r){var a=t.getters.getCompanyStoragesData(e),n=a.find((function(e){return e.guid==r}));return n?n.name.replace(/(^|\s)\S/g,(function(e){return e.toUpperCase()})).replace(/(ООО)|(")|(\s)|([а-я])/g,""):"Склад"},p=function(e){t.commit(pe["a"].SET_CURRENT_ORDER,e)},v=function(e){var t=!1;return""!=d.value[1].value?-1!=e.title.indexOf(d.value[1].value)&&(t=!0):t=!0,t};return{target:c,active:r,active_more:n,loading_bill:l,showDetail:o,detailOrderId:i,OrdersSatusCode:Oe["a"],filter:d,data_filtred:s,checkStatus:b,downloadBill:f,getStorageName:O,setOrderId:p,filtred:v}}}),je=r("d959"),he=r.n(je);const ge=he()(ve,[["render",oe]]);var Ve=ge,Ee=r("2324"),Ce=r("195d"),ke=r("e3c4"),Ne=r("b6d7"),ye=r("3058"),we=Object(a["defineComponent"])({components:{PersonalBar:O["a"],Notification:p["a"],CompanyBarTop:v["a"],TopNav:j["a"],SelectInput:Ce["a"],OrdersSearchCard:Ee["a"],ClaimsListCard:Ve},setup:function(){var e=Object(ue["b"])(me["a"]),t=Object(a["ref"])(!1),r=Object(a["ref"])(""),n=Object(a["ref"])(0),c=Object(a["ref"])(0),o=Object(a["ref"])({id:1,search:""}),l=[{id:1,name:"Наименование"},{id:2,name:"Дата создания"},{id:3,name:"Номер заказа"},{id:4,name:"Причина"}];Object(a["onMounted"])((function(){t.value=!0,e.dispatch(fe["a"].GET_ORDERS).finally((function(){e.dispatch(Ne["a"].GET_CLAIMS).finally((function(){t.value=!1}))})),e.getters.isCompanysLoad||e.dispatch(ke["a"].GET_COMPANYS)}));var i=function(){e.commit(ye["a"].CLEAR_CLAIMS_NEW)};return{loading:t,searchColumn:l,search:o,filterCompanyUid:r,filterPeriod:n,filterStatus:c,OrdersSatusCode:Oe["a"],companyBarTopData:Object(a["computed"])((function(){return e.getters.getCompanysList})),filterCompanyData:Object(a["computed"])((function(){return e.getters.getCompanysListInput})),filterPeriodData:Object(a["computed"])((function(){return e.getters.getOrdersDataPeriodArray})),claimsList:Object(a["computed"])((function(){return e.getters.getClaims})),newClaim:i}}});const Be=he()(we,[["render",f]]);t["default"]=Be},a25e:function(e,t,r){"use strict";r("b0c0");var a=r("7a23"),n={key:0,class:"order-modal"},c={class:"order-modal-content draft"},o={class:"order-modal-header"},l=Object(a["createElementVNode"])("h3",{class:"order-modal-header-title"},"Детали заказа ",-1),i={class:"order-modal-body draft"},d=Object(a["createElementVNode"])("br",null,null,-1),s=Object(a["createElementVNode"])("br",null,null,-1),u={key:0,style:{display:"flex","justify-content":"center"}},m={key:0},b={key:0,class:"shipment-address-list-row-info"},f=Object(a["createElementVNode"])("div",null,"Использовать позиции заказа для оформления нового заказа?",-1),O={key:1,class:"order-modal-action"};function p(e,t,r,p,v,j){var h=Object(a["resolveComponent"])("DeleteButton"),g=Object(a["resolveComponent"])("PreloaderLocal"),V=Object(a["resolveComponent"])("OrderDraftCard");return e.modelValue?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",n,[Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])("order-modal-dialog draft"+(e.shake?" shake":"")),ref:"targetModal"},[Object(a["createElementVNode"])("div",c,[Object(a["createElementVNode"])("div",o,[l,Object(a["createVNode"])(h,{onOnClick:t[0]||(t[0]=function(t){return e.close()})})]),Object(a["createElementVNode"])("div",i,[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.order.name)+" ",1),d,s,e.loading?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",u,[Object(a["createVNode"])(g)])):(Object(a["openBlock"])(),Object(a["createBlock"])(V,{key:1,data:e.order_detail},null,8,["data"]))])]),e.loading||0==e.order_detail.id?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",m,[e.repeatOrder?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",b,[f,Object(a["createElementVNode"])("div",null,[Object(a["createElementVNode"])("a",{href:"#",onClick:t[1]||(t[1]=function(t){return e.setOrder()})},"Да"),Object(a["createElementVNode"])("a",{href:"#",onClick:t[2]||(t[2]=function(t){return e.$emit("update:repeatOrder",!1)})},"Нет")])])):(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",O,[Object(a["createElementVNode"])("button",{onClick:t[3]||(t[3]=function(t){return e.$emit("update:repeatOrder",!0)}),class:"order-list-btn"},"Повторить заказ")]))]))],2)])):Object(a["createCommentVNode"])("",!0)}var v=r("1da1"),j=(r("96cf"),r("a9e3"),r("d3b7"),r("1e3a")),h=r("6888"),g=r("faa6"),V=r("5502"),E=r("2c28"),C=r("0613"),k=r("cd15"),N=r("6c02"),y=r("7ec4"),w=Object(a["defineComponent"])({name:"OrderDetailModal",components:{DeleteButton:j["a"],PreloaderLocal:h["a"],OrderDraftCard:g["a"]},props:{modelValue:{type:Boolean},orderId:{type:Number,default:-1},repeatOrder:{type:Boolean,default:!1}},emits:["update:modelValue","update:repeatOrder"],setup:function(e,t){var r=t.emit,n=Object(V["b"])(C["a"]),c=Object(N["c"])(),o=Object(a["ref"])(!1),l=Object(a["ref"])(null),i=Object(a["ref"])(!1),d=Object(a["ref"])(!1);Object(E["onClickOutside"])(l,(function(){o.value=!0,setTimeout((function(){o.value=!1}),500)}));var s=function(){r("update:repeatOrder",!1),r("update:modelValue",!1)};Object(a["watch"])((function(){return e.orderId}),(function(){-1!=e.orderId&&(i.value=!0,n.dispatch(k["a"].GET_ORDER_DETAIL,e.orderId).finally((function(){i.value=!1})))}));var u=function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.commit(y["a"].CREATE_ORDER_FROM_DETAIL);case 2:c.push({name:"Order"});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{shake:o,targetModal:l,loading:i,useRepeat:d,order_detail:Object(a["computed"])((function(){return n.getters.getOrderDetail})),order:Object(a["computed"])((function(){return n.getters.getOrdersByID(e.orderId)})),close:s,setOrder:u}}}),B=r("d959"),S=r.n(B);const x=S()(w,[["render",p]]);t["a"]=x},ab13:function(e,t,r){var a=r("b622"),n=a("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n]=!1,"/./"[e](t)}catch(a){}}return!1}},ae0a:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var a=[{id:0,name:"Все"},{id:1,name:"Создан."},{id:2,name:"В ожидании."},{id:3,name:"Подтвержден."},{id:4,name:"Передан на склад."},{id:5,name:"Собран."},{id:6,name:"Отгружен."}]},caad:function(e,t,r){"use strict";var a=r("23e7"),n=r("4d64").includes,c=r("44d2");a({target:"Array",proto:!0},{includes:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),c("includes")},dde0:function(e,t,r){"use strict";var a=r("7a23"),n={class:"modal-input",ref:"target"},c=["value"];function o(e,t,r,o,l,i){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{class:Object(a["normalizeClass"])("modal-input-wrap"+(e.show?" show":"")),ref:"target"},[Object(a["createElementVNode"])("div",n,[Object(a["createElementVNode"])("input",{class:Object(a["normalizeClass"])("modal-input-text"+(e.show?" show":"")),type:"text",ref:"searchInput",value:e.modelValue,onInput:t[0]||(t[0]=function(t){return e.$emit("update:modelValue",t.target.value)})},null,42,c)],512),Object(a["createElementVNode"])("div",{class:"product-search-clear",onClick:t[1]||(t[1]=function(t){return""==e.modelValue?e.$emit("update:show",!1):e.$emit("update:modelValue","")})})],2)}var l=r("2c28"),i=Object(a["defineComponent"])({props:{show:{type:Boolean,default:!0},modelValue:{type:String,default:""}},emits:["update:modelValue","update:show","onInput"],setup:function(e,t){var r=t.emit,n=Object(a["ref"])(null),c=Object(a["ref"])(null);return Object(l["onClickOutside"])(n,(function(){r("update:show",!1)})),Object(a["watch"])((function(){return e.show}),(function(){Object(a["nextTick"])((function(){setTimeout((function(){c.value.focus()}),500)}))})),{target:n,searchInput:c}}}),d=r("d959"),s=r.n(d);const u=s()(i,[["render",o]]);t["a"]=u}}]);
//# sourceMappingURL=chunk-211d2928.7fa9e909.js.map