import{_ as G}from"./PersonalBar.1b3becf2.js";import{N as Z}from"./Notification.0d8400af.js";import{_ as K}from"./CompanyBarTop.9e8204a2.js";import{d as H,_ as R,i as r,D as Y,L as J,k as P,f as z,h as U,av as k,aP as Q,S as L,r as w,o as d,b as u,a as s,t as S,az as W,aB as X,c as O,l as c,z as E,F as j,g as F,e as C,w as x,m as q,j as ee,s as te,R as se,x as ae,y as de}from"./index.319ff497.js";import{_ as oe}from"./TopNav.b4bc3b25.js";const ue=H({name:"ShipmentAddressInput",props:{modelValue:{type:String,required:!0},label:{type:String,required:!0},edit:{type:Number,default:-1},show:{type:Boolean,default:!1}},emits:["update:modelValue","update:label","update:show","update:edit","save"],components:{PreloaderLocal:R},setup(e,{emit:t}){const i=U(),h=r(""),v=r(!1),D=r(),m=r(null),p=r(null),l=r(null),n=r(-1),o=r(null),_=r(!0),a=r(1),g=f=>{[13,16,17,18,27,37,38,39,40].includes(f.keyCode)?(f.keyCode==40&&n.value<i.getters.getAddressPrompt.length-1&&(n.value=n.value+1,o.value=Object.assign({},i.getters.getAddressPrompt[n.value]),h.value=i.getters.getAddressPrompt[n.value].value+" "),f.keyCode==38&&n.value!=-1&&(n.value=n.value-1,o.value=Object.assign({},i.getters.getAddressPrompt[n.value]),h.value=i.getters.getAddressPrompt[n.value].value+" "),f.keyCode==27&&close()):(n.value=-1,clearTimeout(D.value),v.value=!0,D.value=setTimeout(()=>{i.dispatch(k.ADDRESS_PROMPT,h.value).then(()=>{setTimeout(()=>{v.value=!1},100)})},500))},A=()=>{h.value="",t("update:edit",-1),t("update:modelValue",""),t("update:label",""),t("update:show",!1)};Y(m,()=>{_.value==!1,t("update:show",!1)}),J(()=>e.show,()=>{h.value=e.modelValue,a.value=1,i.commit(Q.CLEAR_ADDRESS_PROMPT),v.value=!0,i.dispatch(k.ADDRESS_PROMPT,h.value).then(()=>{setTimeout(()=>{v.value=!1},100)}),L(()=>{p.value.focus()})});const y=()=>{a.value=2,L(()=>{l.value.focus()})},$=()=>{var f,B,T,I,N,M;if(e.edit==-1){const V=[{label:e.label,address:o.value!=-1?(f=o.value)==null?void 0:f.value:"",latitude:o.value!=-1?(B=o.value)==null?void 0:B.data.geo_lat:"",longitude:o.value!=-1?(T=o.value)==null?void 0:T.data.geo_lon:""}];i.dispatch(k.ADD_SHIPMENTS_ADDRESS,V)}else{const V=[{index:e.edit,label:e.label,address:o.value!=-1?(I=o.value)==null?void 0:I.value:"",latitude:o.value!=-1?(N=o.value)==null?void 0:N.data.geo_lat:"",longitude:o.value!=-1?(M=o.value)==null?void 0:M.data.geo_lon:""}];i.dispatch(k.UPDATE_SHIPMENTS_ADDRESS,V)}t("update:modelValue",""),A()};return{search_str:h,loading:v,target:m,searchInput:p,labelInput:l,active_item:n,active_elem:o,options:_,step:a,addressPrompt:P(()=>i.getters.getAddressPrompt),doSearch:g,clear:A,save:$,nextStep:y}}}),le={class:"product-search-input-container"},re={class:"product-search-input-notice"},ne={key:0},ie={class:"product-search-input options"},he=["placeholder"],pe=q('<svg width="16" height="16" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 3.5C1 2.39543 1.89543 1.5 3 1.5H16C19.866 1.5 23 4.63401 23 8.5V21.5C23 22.6046 22.1046 23.5 21 23.5H3C1.89543 23.5 1 22.6046 1 21.5V3.5Z" stroke="#A5A7A9" stroke-width="2"></path><rect x="4" y="13.5" width="2" height="10" rx="1" fill="#A5A7A9"></rect><rect x="18" y="13.5" width="2" height="10" rx="1" fill="#A5A7A9"></rect><rect x="4" y="15.5" width="2" height="16" rx="1" transform="rotate(-90 4 15.5)" fill="#A5A7A9"></rect><rect x="6" y="9.5" width="2" height="12" rx="1" transform="rotate(-90 6 9.5)" fill="#A5A7A9"></rect><rect x="8" y="9.5" width="2" height="8" rx="1" transform="rotate(180 8 9.5)" fill="#A5A7A9"></rect><rect x="18" y="9.5" width="2" height="8" rx="1" transform="rotate(180 18 9.5)" fill="#A5A7A9"></rect><rect x="15" y="6.5" width="2" height="3" rx="1" transform="rotate(-180 15 6.5)" fill="#A5A7A9"></rect></svg>',1),ce=[pe],ve={key:0},me={key:1},Ae={class:"name"},fe={key:0},ge={key:1},we={class:"product-search-input options"},_e=["value"],ye=q('<svg width="16" height="16" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 3.5C1 2.39543 1.89543 1.5 3 1.5H16C19.866 1.5 23 4.63401 23 8.5V21.5C23 22.6046 22.1046 23.5 21 23.5H3C1.89543 23.5 1 22.6046 1 21.5V3.5Z" stroke="#A5A7A9" stroke-width="2"></path><rect x="4" y="13.5" width="2" height="10" rx="1" fill="#A5A7A9"></rect><rect x="18" y="13.5" width="2" height="10" rx="1" fill="#A5A7A9"></rect><rect x="4" y="15.5" width="2" height="16" rx="1" transform="rotate(-90 4 15.5)" fill="#A5A7A9"></rect><rect x="6" y="9.5" width="2" height="12" rx="1" transform="rotate(-90 6 9.5)" fill="#A5A7A9"></rect><rect x="8" y="9.5" width="2" height="8" rx="1" transform="rotate(180 8 9.5)" fill="#A5A7A9"></rect><rect x="18" y="9.5" width="2" height="8" rx="1" transform="rotate(180 18 9.5)" fill="#A5A7A9"></rect><rect x="15" y="6.5" width="2" height="3" rx="1" transform="rotate(-180 15 6.5)" fill="#A5A7A9"></rect></svg>',1),Ce=[ye];function De(e,t,i,h,v,D){const m=w("PreloaderLocal"),p=w("router-link");return d(),u("div",{class:E("product-search fullwidth"+(e.show?" show":"")),ref:"target"},[s("div",le,[s("div",re,S(e.step==1?"1 \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441":"2 \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"),1),e.step==1?(d(),u("div",ne,[s("div",ie,[W(s("input",{type:"text",placeholder:e.step==1?"\u041F\u043E\u0438\u0441\u043A":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435",autocomplete:"off",onKeyup:t[0]||(t[0]=l=>e.doSearch(l)),"onUpdate:modelValue":t[1]||(t[1]=l=>e.search_str=l),ref:"searchInput"},null,40,he),[[X,e.search_str]]),e.loading?(d(),O(m,{key:0,small:""})):c("",!0),e.search_str.length>10?(d(),u("div",{key:1,class:"product-search-save",title:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",onClick:t[2]||(t[2]=l=>e.nextStep())},ce)):c("",!0),s("div",{class:"product-search-clear",title:"\u041E\u0442\u043C\u0435\u043D\u0430",onClick:t[3]||(t[3]=l=>e.search_str!=""?e.search_str="":e.clear())})]),s("div",{class:E("product-search-input-options"+(e.search_str==""||e.addressPrompt.length==0?" default":""))},[e.search_str==""?(d(),u("span",ve,S(e.edit==-1?"\u0427\u0442\u043E\u0431\u044B \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u0432\u044B\u0439 \u0430\u0434\u0440\u0435\u0441 - \u043D\u0430\u0447\u043D\u0438\u0442\u0435 \u0432\u0432\u043E\u0434":"\u0427\u0442\u043E\u0431\u044B \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0430\u0434\u0440\u0435\u0441 - \u043D\u0430\u0447\u043D\u0438\u0442\u0435 \u0432\u0432\u043E\u0434"),1)):(d(),u("div",me,[(d(!0),u(j,null,F(e.addressPrompt,(l,n)=>(d(),u("p",{key:n,class:E("product-search-input-options-item"+(e.loading?" loading":"")+(n==e.active_item?" active":""))},[C(p,{tag:"a",onClick:o=>{e.search_str=l.value+" ",e.active_elem=Object.assign({},l),e.searchInput.focus()},to:"#"},{default:x(()=>[s("div",Ae,S(l.value),1)]),_:2},1032,["onClick"])],2))),128)),e.addressPrompt.length==0?(d(),u("span",fe,"\u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E")):c("",!0)]))],2)])):(d(),u("div",ge,[s("div",we,[s("input",{type:"text",placeholder:"\u041F\u043E\u0438\u0441\u043A",autocomplete:"off",onInput:t[4]||(t[4]=l=>e.$emit("update:label",l.target.value)),ref:"labelInput",value:e.label},null,40,_e),e.label.length>3?(d(),u("div",{key:0,class:"product-search-save",title:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",onClick:t[5]||(t[5]=l=>{e.save()})},Ce)):c("",!0),s("div",{class:"product-search-clear",title:"\u041E\u0442\u043C\u0435\u043D\u0430",onClick:t[6]||(t[6]=l=>e.search_str!=""?e.search_str="":e.clear())})])]))])],2)}var ke=z(ue,[["render",De]]);const Se=H({name:"ShipmentAdresss",components:{TopNav:oe,PersonalBar:G,Notification:Z,CompanyBarTop:K,ShipmentAddressInputAdd:ke,PreloaderLocal:R},setup(){const e=U(),t=r(""),i=se(),h=r(0),v=r(""),D=r(""),m=r(!1),p=r(!1),l=r(-1),n=r(!1),o=r(!1),_=P(()=>{let y={lat:"55.760077",lon:"37.617677"};const $=e.getters.getShipmentsAddress.find(f=>f.index==h.value);return $&&(y.lat=$.latitude,y.lon=$.longitude),y}),a=r([54,39]),g=y=>{p.value=!0,e.dispatch(k.DEL_SHIPMENTS_ADDRESS,y).then(()=>{p.value=!1,m.value=!1})};ee(()=>{o.value=!0,e.dispatch(k.GET_SHIPMENTS_ADDRESS).then(()=>{setTimeout(()=>{o.value=!1},1e3)}),e.getters.isCompanysLoad||e.dispatch(te.GET_COMPANYS)});const A=()=>{i.go(-1)};return{activeCompanyUid:t,currentAddr:h,addrName:v,addrLabel:D,delAddr:m,delPreloader:p,editAddrId:l,showAddr:n,loading:o,coords:a,companyBarTopData:P(()=>e.getters.getCompanysList),address:P(()=>e.getters.getShipmentsAddress),latlon:_,back:A,del:g}}}),b=e=>(ae("data-v-5686c91e"),e=e(),de(),e),$e={class:"maxhigth"},Ee={class:"top-line product-page"},be={class:"shipment-heading"},Pe={class:"shipment-heading-elem"},Ve=b(()=>s("div",{class:"shipment-heading-info"},[s("div",{class:"shipment-title"},[s("span",null,"\u0410\u0434\u0440\u0435\u0441\u0430 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438")])],-1)),Be={class:"shipment-address"},Te={class:"shipment-address-list-wrap"},Ie={class:"shipment-address-list"},Ne=b(()=>s("div",{class:"shipment-address-list-row heading"},[s("div",{class:"shipment-address-list-elem"},"\u2116"),s("div",{class:"shipment-address-list-elem"},"\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"),s("div",{class:"shipment-address-list-elem"},"\u0410\u0434\u0440\u0435\u0441")],-1)),Me={class:"shipment-address-list-row"},Le={key:0,class:"shipment-address-list-row"},He=["onClick"],Re={class:"shipment-address-list-elem"},ze={class:"shipment-address-list-elem"},Ue={class:"shipment-address-list-elem"},Oe={key:0,class:"shipment-address-list-elem actions",style:{"margin-left":"auto"}},je=["onClick"],Fe=b(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",height:"30px",viewBox:"0 0 24 24",width:"30px",fill:"#8D8D8D"},[s("path",{d:"M0 0h24v24H0V0z",fill:"none"}),s("path",{d:"M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"})],-1)),qe=[Fe],Ge=b(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",height:"30px",viewBox:"0 0 24 24",width:"30px",fill:"#8D8D8D"},[s("path",{d:"M0 0h24v24H0V0z",fill:"none"}),s("path",{d:"M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"})],-1)),Ze=[Ge],Ke={key:0,class:"shipment-address-list-row-info"},Ye={key:0},Je={key:1},Qe={key:2,class:"shipment-address-list-row"},We=b(()=>s("div",{class:"shipment-address-list-nores"},"\u0410\u0434\u0440\u0435\u0441\u0430 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u043E\u0442\u0441\u0443\u0442\u0441\u0432\u0443\u044E\u0442",-1)),Xe=[We],xe=["src"];function et(e,t,i,h,v,D){const m=w("CompanyBarTop"),p=w("Notification"),l=w("PersonalBar"),n=w("top-nav"),o=w("ShipmentAddressInputAdd"),_=w("preloader-local");return d(),u("div",$e,[s("div",Ee,[C(m,{data:e.companyBarTopData,modelValue:e.activeCompanyUid,"onUpdate:modelValue":t[0]||(t[0]=a=>e.activeCompanyUid=a)},null,8,["data","modelValue"]),C(p),C(l)]),C(n,{address:"",onOnClick:t[1]||(t[1]=a=>{e.editAddrName=-1,e.addrName="",e.addrLabel="",e.showAddr=!0})}),s("div",be,[s("div",Pe,[s("div",{onClick:t[2]||(t[2]=(...a)=>e.back&&e.back(...a)),class:"shipment-heading-back-btn"}),Ve])]),s("div",Be,[s("div",Te,[s("div",Ie,[Ne,s("div",Me,[C(o,{modelValue:e.addrName,"onUpdate:modelValue":t[3]||(t[3]=a=>e.addrName=a),label:e.addrLabel,"onUpdate:label":t[4]||(t[4]=a=>e.addrLabel=a),show:e.showAddr,"onUpdate:show":t[5]||(t[5]=a=>e.showAddr=a),edit:e.editAddrId,"onUpdate:edit":t[6]||(t[6]=a=>e.editAddrId=a)},null,8,["modelValue","label","show","edit"])]),e.loading?(d(),u("div",Le,[C(_,{class:"shipment-address-list-row-info"})])):(d(!0),u(j,{key:1},F(e.address,(a,g)=>(d(),u("div",{key:g},[s("div",{class:E("shipment-address-list-row "+(a.index==e.currentAddr?" active":"")),onClick:A=>{e.currentAddr=a.index}},[s("div",Re,S(g+1),1),s("div",ze,S(a.label),1),s("div",Ue,S(a.address),1),g==e.currentAddr?(d(),u("div",Oe,[s("div",{onClick:A=>{e.editAddrId=a.index,e.addrName=a.address,e.addrLabel=a.label,e.showAddr=!0}},qe,8,je)])):c("",!0),g==e.currentAddr?(d(),u("div",{key:1,class:E("shipment-address-list-elem actions"+(e.delAddr?" active":""))},[s("div",{onClick:t[7]||(t[7]=A=>e.delAddr=!e.delAddr)},Ze)],2)):c("",!0)],10,He),e.delAddr&&a.index==e.currentAddr?(d(),u("div",Ke,[e.delPreloader?c("",!0):(d(),u("div",Ye,"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0430\u0434\u0440\u0435\u0441?")),e.delPreloader?(d(),O(_,{key:2})):(d(),u("div",Je,[s("a",{href:"#",onClick:t[8]||(t[8]=A=>e.del(e.currentAddr))},"\u0414\u0430"),s("a",{href:"#",onClick:t[9]||(t[9]=A=>e.delAddr=0)},"\u041D\u0435\u0442")]))])):c("",!0)]))),128)),e.address.length==0?(d(),u("div",Qe,Xe)):c("",!0)])]),e.address.length!=0?(d(),u("iframe",{key:0,class:"shipment-address-map",src:"https://yandex.ru/map-widget/v1/?mode=whatshere&whatshere%5Bpoint%5D="+e.latlon.lon+"%2C"+e.latlon.lat+"&z=15",width:"800",height:"600",frameborder:"0"},null,8,xe)):c("",!0)])])}var ut=z(Se,[["render",et],["__scopeId","data-v-5686c91e"]]);export{ut as default};
