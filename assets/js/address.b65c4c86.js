import{_ as z}from"./PersonalBar.852491a8.js";import{N as O}from"./Notification.fb41393b.js";import{_ as U}from"./CompanyBarTop.08501754.js";import{d as T,e as B,h as r,D as j,L as F,j as P,_ as I,g as N,av as k,aO as q,S as V,r as w,o as d,b as u,a as s,t as S,az as G,aA as Z,c as M,k as v,z as b,F as L,f as H,p as C,w as K,l as R,i as Y,s as J,R as Q,x as W,y as X}from"./index.e334de72.js";import{_ as x}from"./TopNav.1c6571e0.js";const ee=T({name:"ShipmentAddressInput",props:{modelValue:{type:String,required:!0},label:{type:String,required:!0},edit:{type:Number,default:-1},show:{type:Boolean,default:!1}},emits:["update:modelValue","update:label","update:show","update:edit","save"],components:{PreloaderLocal:B},setup(e,{emit:t}){const i=N(),h=r(""),m=r(!1),D=r(),A=r(null),p=r(null),l=r(null),n=r(-1),o=r(null),_=r(!0),a=r(1),g=c=>{[13,16,17,18,27,37,38,39,40].includes(c.keyCode)?(c.keyCode==40&&n.value<i.getters.getAddressPrompt.length-1&&(n.value=n.value+1,o.value=Object.assign({},i.getters.getAddressPrompt[n.value]),h.value=i.getters.getAddressPrompt[n.value].value+" "),c.keyCode==38&&n.value!=-1&&(n.value=n.value-1,o.value=Object.assign({},i.getters.getAddressPrompt[n.value]),h.value=i.getters.getAddressPrompt[n.value].value+" "),c.keyCode==27&&close()):(n.value=-1,clearTimeout(D.value),m.value=!0,D.value=setTimeout(()=>{i.dispatch(k.ADDRESS_PROMPT,h.value).then(()=>{setTimeout(()=>{m.value=!1},100)})},500))},f=()=>{h.value="",t("update:edit",-1),t("update:modelValue",""),t("update:label",""),t("update:show",!1)};j(A,()=>{_.value==!1,t("update:show",!1)}),F(()=>e.show,()=>{h.value=e.modelValue,a.value=1,i.commit(q.CLEAR_ADDRESS_PROMPT),m.value=!0,i.dispatch(k.ADDRESS_PROMPT,h.value).then(()=>{setTimeout(()=>{m.value=!1},100)}),V(()=>{p.value.focus()})});const y=()=>{a.value=2,V(()=>{l.value.focus()})},$=()=>{if(e.edit==-1){const c=[{label:e.label,address:o.value!=-1?o.value.value:"",latitude:o.value!=-1?o.value.data.geo_lat:"",longitude:o.value!=-1?o.value.data.geo_lon:""}];i.dispatch(k.ADD_SHIPMENTS_ADDRESS,c)}else{const c=[{index:e.edit,label:e.label,address:o.value!=-1?o.value.value:"",latitude:o.value!=-1?o.value.data.geo_lat:"",longitude:o.value!=-1?o.value.data.geo_lon:""}];i.dispatch(k.UPDATE_SHIPMENTS_ADDRESS,c)}t("update:modelValue",""),f()};return{search_str:h,loading:m,target:A,searchInput:p,labelInput:l,active_item:n,active_elem:o,options:_,step:a,addressPrompt:P(()=>i.getters.getAddressPrompt),doSearch:g,clear:f,save:$,nextStep:y}}}),te={class:"product-search-input-container"},se={class:"product-search-input-notice"},ae={key:0},de={class:"product-search-input options"},oe=["placeholder"],ue=R('<svg width="16" height="16" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 3.5C1 2.39543 1.89543 1.5 3 1.5H16C19.866 1.5 23 4.63401 23 8.5V21.5C23 22.6046 22.1046 23.5 21 23.5H3C1.89543 23.5 1 22.6046 1 21.5V3.5Z" stroke="#A5A7A9" stroke-width="2"></path><rect x="4" y="13.5" width="2" height="10" rx="1" fill="#A5A7A9"></rect><rect x="18" y="13.5" width="2" height="10" rx="1" fill="#A5A7A9"></rect><rect x="4" y="15.5" width="2" height="16" rx="1" transform="rotate(-90 4 15.5)" fill="#A5A7A9"></rect><rect x="6" y="9.5" width="2" height="12" rx="1" transform="rotate(-90 6 9.5)" fill="#A5A7A9"></rect><rect x="8" y="9.5" width="2" height="8" rx="1" transform="rotate(180 8 9.5)" fill="#A5A7A9"></rect><rect x="18" y="9.5" width="2" height="8" rx="1" transform="rotate(180 18 9.5)" fill="#A5A7A9"></rect><rect x="15" y="6.5" width="2" height="3" rx="1" transform="rotate(-180 15 6.5)" fill="#A5A7A9"></rect></svg>',1),le=[ue],re={key:0},ne={key:1},ie={class:"name"},he={key:0},pe={key:1},ce={class:"product-search-input options"},ve=["value"],me=R('<svg width="16" height="16" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 3.5C1 2.39543 1.89543 1.5 3 1.5H16C19.866 1.5 23 4.63401 23 8.5V21.5C23 22.6046 22.1046 23.5 21 23.5H3C1.89543 23.5 1 22.6046 1 21.5V3.5Z" stroke="#A5A7A9" stroke-width="2"></path><rect x="4" y="13.5" width="2" height="10" rx="1" fill="#A5A7A9"></rect><rect x="18" y="13.5" width="2" height="10" rx="1" fill="#A5A7A9"></rect><rect x="4" y="15.5" width="2" height="16" rx="1" transform="rotate(-90 4 15.5)" fill="#A5A7A9"></rect><rect x="6" y="9.5" width="2" height="12" rx="1" transform="rotate(-90 6 9.5)" fill="#A5A7A9"></rect><rect x="8" y="9.5" width="2" height="8" rx="1" transform="rotate(180 8 9.5)" fill="#A5A7A9"></rect><rect x="18" y="9.5" width="2" height="8" rx="1" transform="rotate(180 18 9.5)" fill="#A5A7A9"></rect><rect x="15" y="6.5" width="2" height="3" rx="1" transform="rotate(-180 15 6.5)" fill="#A5A7A9"></rect></svg>',1),Ae=[me];function fe(e,t,i,h,m,D){const A=w("PreloaderLocal"),p=w("router-link");return d(),u("div",{class:b("product-search fullwidth"+(e.show?"":" none")),ref:"target"},[s("div",te,[s("div",se,S(e.step==1?"1 \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441":"2 \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"),1),e.step==1?(d(),u("div",ae,[s("div",de,[G(s("input",{type:"text",placeholder:e.step==1?"\u041F\u043E\u0438\u0441\u043A":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435",autocomplete:"off",onKeyup:t[0]||(t[0]=l=>e.doSearch(l)),"onUpdate:modelValue":t[1]||(t[1]=l=>e.search_str=l),ref:"searchInput"},null,40,oe),[[Z,e.search_str]]),e.loading?(d(),M(A,{key:0,small:""})):v("",!0),e.search_str.length>10?(d(),u("div",{key:1,class:"product-search-save",title:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",onClick:t[2]||(t[2]=l=>e.nextStep())},le)):v("",!0),s("div",{class:"product-search-clear",title:"\u041E\u0442\u043C\u0435\u043D\u0430",onClick:t[3]||(t[3]=l=>e.search_str!=""?e.search_str="":e.clear())})]),s("div",{class:b("product-search-input-options"+(e.search_str==""||e.addressPrompt.length==0?" default":""))},[e.search_str==""?(d(),u("span",re,S(e.edit==-1?"\u0427\u0442\u043E\u0431\u044B \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u0432\u044B\u0439 \u0430\u0434\u0440\u0435\u0441 - \u043D\u0430\u0447\u043D\u0438\u0442\u0435 \u0432\u0432\u043E\u0434":"\u0427\u0442\u043E\u0431\u044B \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0430\u0434\u0440\u0435\u0441 - \u043D\u0430\u0447\u043D\u0438\u0442\u0435 \u0432\u0432\u043E\u0434"),1)):(d(),u("div",ne,[(d(!0),u(L,null,H(e.addressPrompt,(l,n)=>(d(),u("p",{key:n,class:b("product-search-input-options-item"+(e.loading?" loading":"")+(n==e.active_item?" active":""))},[C(p,{tag:"a",onClick:o=>{e.search_str=l.value+" ",e.active_elem=Object.assign({},l),e.searchInput.focus()},to:"#"},{default:K(()=>[s("div",ie,S(l.value),1)]),_:2},1032,["onClick"])],2))),128)),e.addressPrompt.length==0?(d(),u("span",he,"\u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E")):v("",!0)]))],2)])):(d(),u("div",pe,[s("div",ce,[s("input",{type:"text",placeholder:"\u041F\u043E\u0438\u0441\u043A",autocomplete:"off",onInput:t[4]||(t[4]=l=>e.$emit("update:label",l.target.value)),ref:"labelInput",value:e.label},null,40,ve),e.label.length>3?(d(),u("div",{key:0,class:"product-search-save",title:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",onClick:t[5]||(t[5]=l=>{e.save()})},Ae)):v("",!0),s("div",{class:"product-search-clear",title:"\u041E\u0442\u043C\u0435\u043D\u0430",onClick:t[6]||(t[6]=l=>e.search_str!=""?e.search_str="":e.clear())})])]))])],2)}var ge=I(ee,[["render",fe]]);const we=T({name:"ShipmentAdresss",components:{TopNav:x,PersonalBar:z,Notification:O,CompanyBarTop:U,ShipmentAddressInputAdd:ge,PreloaderLocal:B},setup(){const e=N(),t=r(""),i=Q(),h=r(0),m=r(""),D=r(""),A=r(!1),p=r(!1),l=r(-1),n=r(!1),o=r(!1),_=P(()=>{let y={lat:"55.760077",lon:"37.617677"};const $=e.getters.getShipmentsAddress.find(c=>c.index==h.value);return $&&(y.lat=$.latitude,y.lon=$.longitude),y}),a=r([54,39]),g=y=>{p.value=!0,e.dispatch(k.DEL_SHIPMENTS_ADDRESS,y).then(()=>{p.value=!1,A.value=!1})};Y(()=>{o.value=!0,e.dispatch(k.GET_SHIPMENTS_ADDRESS).then(()=>{setTimeout(()=>{o.value=!1},1e3)}),e.getters.isCompanysLoad||e.dispatch(J.GET_COMPANYS)});const f=()=>{i.go(-1)};return{activeCompanyUid:t,currentAddr:h,addrName:m,addrLabel:D,delAddr:A,delPreloader:p,editAddrId:l,showAddr:n,loading:o,coords:a,companyBarTopData:P(()=>e.getters.getCompanysList),address:P(()=>e.getters.getShipmentsAddress),latlon:_,back:f,del:g}}}),E=e=>(W("data-v-0b572f66"),e=e(),X(),e),_e={class:"maxhigth"},ye={class:"top-line product-page"},Ce={class:"shipment-heading"},De={class:"shipment-heading-elem"},ke=E(()=>s("div",{class:"shipment-heading-info"},[s("div",{class:"shipment-title"},[s("span",null,"\u0410\u0434\u0440\u0435\u0441\u0430 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438")])],-1)),Se={class:"shipment-address"},$e={class:"shipment-address-list-wrap"},be={class:"shipment-address-list"},Ee=E(()=>s("div",{class:"shipment-address-list-row heading"},[s("div",{class:"shipment-address-list-elem"},"\u2116"),s("div",{class:"shipment-address-list-elem"},"\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"),s("div",{class:"shipment-address-list-elem"},"\u0410\u0434\u0440\u0435\u0441")],-1)),Pe={class:"shipment-address-list-row"},Ve={key:0,class:"shipment-address-list-row"},Te=["onClick"],Be={class:"shipment-address-list-elem"},Ie={class:"shipment-address-list-elem"},Ne={class:"shipment-address-list-elem"},Me={key:0,class:"shipment-address-list-elem actions",style:{"margin-left":"auto"}},Le=["onClick"],He=E(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",height:"30px",viewBox:"0 0 24 24",width:"30px",fill:"#8D8D8D"},[s("path",{d:"M0 0h24v24H0V0z",fill:"none"}),s("path",{d:"M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"})],-1)),Re=[He],ze=E(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",height:"30px",viewBox:"0 0 24 24",width:"30px",fill:"#8D8D8D"},[s("path",{d:"M0 0h24v24H0V0z",fill:"none"}),s("path",{d:"M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"})],-1)),Oe=[ze],Ue={key:0,class:"shipment-address-list-row-info"},je={key:0},Fe={key:1},qe={key:2,class:"shipment-address-list-row"},Ge=E(()=>s("div",{class:"shipment-address-list-nores"},"\u0410\u0434\u0440\u0435\u0441\u0430 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u043E\u0442\u0441\u0443\u0442\u0441\u0432\u0443\u044E\u0442",-1)),Ze=[Ge],Ke=["src"];function Ye(e,t,i,h,m,D){const A=w("CompanyBarTop"),p=w("Notification"),l=w("PersonalBar"),n=w("top-nav"),o=w("ShipmentAddressInputAdd"),_=w("preloader-local");return d(),u("div",_e,[s("div",ye,[C(A,{data:e.companyBarTopData,modelValue:e.activeCompanyUid,"onUpdate:modelValue":t[0]||(t[0]=a=>e.activeCompanyUid=a)},null,8,["data","modelValue"]),C(p),C(l)]),C(n,{address:"",onOnClick:t[1]||(t[1]=a=>{e.editAddrName=-1,e.addrName="",e.addrLabel="",e.showAddr=!0})}),s("div",Ce,[s("div",De,[s("div",{onClick:t[2]||(t[2]=(...a)=>e.back&&e.back(...a)),class:"shipment-heading-back-btn"}),ke])]),s("div",Se,[s("div",$e,[s("div",be,[Ee,s("div",Pe,[C(o,{modelValue:e.addrName,"onUpdate:modelValue":t[3]||(t[3]=a=>e.addrName=a),label:e.addrLabel,"onUpdate:label":t[4]||(t[4]=a=>e.addrLabel=a),show:e.showAddr,"onUpdate:show":t[5]||(t[5]=a=>e.showAddr=a),edit:e.editAddrId,"onUpdate:edit":t[6]||(t[6]=a=>e.editAddrId=a)},null,8,["modelValue","label","show","edit"])]),e.loading?(d(),u("div",Ve,[C(_,{class:"shipment-address-list-row-info"})])):(d(!0),u(L,{key:1},H(e.address,(a,g)=>(d(),u("div",{key:g},[s("div",{class:b("shipment-address-list-row "+(a.index==e.currentAddr?" active":"")),onClick:f=>{e.currentAddr=a.index}},[s("div",Be,S(g+1),1),s("div",Ie,S(a.label),1),s("div",Ne,S(a.address),1),g==e.currentAddr?(d(),u("div",Me,[s("div",{onClick:f=>{e.editAddrId=a.index,e.addrName=a.address,e.addrLabel=a.label,e.showAddr=!0}},Re,8,Le)])):v("",!0),g==e.currentAddr?(d(),u("div",{key:1,class:b("shipment-address-list-elem actions"+(e.delAddr?" active":""))},[s("div",{onClick:t[7]||(t[7]=f=>e.delAddr=!e.delAddr)},Oe)],2)):v("",!0)],10,Te),e.delAddr&&a.index==e.currentAddr?(d(),u("div",Ue,[e.delPreloader?v("",!0):(d(),u("div",je,"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0430\u0434\u0440\u0435\u0441?")),e.delPreloader?(d(),M(_,{key:2})):(d(),u("div",Fe,[s("a",{href:"#",onClick:t[8]||(t[8]=f=>e.del(e.currentAddr))},"\u0414\u0430"),s("a",{href:"#",onClick:t[9]||(t[9]=f=>e.delAddr=0)},"\u041D\u0435\u0442")]))])):v("",!0)]))),128)),e.address.length==0?(d(),u("div",qe,Ze)):v("",!0)])]),e.address.length!=0?(d(),u("iframe",{key:0,class:"shipment-address-map",src:"https://yandex.ru/map-widget/v1/?mode=whatshere&whatshere%5Bpoint%5D="+e.latlon.lon+"%2C"+e.latlon.lat+"&z=15",width:"800",height:"600",frameborder:"0"},null,8,Ke)):v("",!0)])])}var et=I(we,[["render",Ye],["__scopeId","data-v-0b572f66"]]);export{et as default};
