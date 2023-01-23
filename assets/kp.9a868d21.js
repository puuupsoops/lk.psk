import{N as we,_ as $e}from"./PersonalBar.a6a1f9bc.js";import{_ as Be}from"./CompanyBarTop.02d0a800.js";import{_ as Se}from"./TopNav.815f848b.js";import{_ as F,K as Q}from"./KP.5f92553a.js";import{d as X,g as a,r as Fe,o as s,b as o,a as e,l as n,x as f,w as _e,j as i,k as O,f as ae,i as I,y as Ee,aw as pe,I as se,h as ke,u as c,a9 as N,as as me,F as Z,e as W,t as V,aa as Y,c as L,ax as ce,Q as oe,T as Qe,aj as Re,ay as z,az as fe,p as Pe,an as Ue,af as Ne}from"./index.f17c8be4.js";import{P as q}from"./PreloaderLocal.b9830a63.js";import{D as Ie}from"./DatePicker.2629ca1a.js";import{_ as G}from"./AmountInput.66e8407c.js";import{_ as Te,D as Le}from"./Components.308895a1.js";import{_ as Ke}from"./SwitchButton.8954563b.js";import{S as ye}from"./SelectInput.68dd15b8.js";const Je=e("div",{class:"kp-step-title"},"\u0421\u043E\u0431\u0440\u0430\u0442\u044C \u041A\u041F \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0438",-1),Me={class:"kp-step-body step1"},Ge={class:"kp-step-body-elem"},je=e("div",{class:"kp-step-body-elem-text"},[O(" \u0417\u0430\u043A\u0430\u0437\u0430 "),e("div",{class:"kp-step-body-elem-text-sub"}," \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u0443\u0436\u0435 \u0443\u043C\u0435\u044E\u0449\u0435\u0433\u043E\u0441\u044F \u0437\u0430\u043A\u0430\u0437\u0430. ")],-1),He=["flow"],Ze=O(" \u0427\u0435\u0440\u043D\u043E\u0432\u0438\u043A\u0430 "),We=e("div",{class:"kp-step-body-elem-text-sub"}," \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043D\u043E\u0433\u043E \u0447\u0435\u0440\u043D\u043E\u0432\u0438\u043A\u0430. ",-1),Ye=[Ze,We],ze=["flow"],qe=O(" \u041F\u043E\u0437\u0438\u0446\u0438\u0439 \u0438\u0437 \u043A\u0430\u0442\u043E\u043B\u043E\u0433\u0430 "),Xe={class:"kp-step-body-elem-text-sub"},eu=O(" \u041A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0438\u0437 \u0441\u043E\u0431\u0440\u0430\u043D\u043D\u043E\u0433\u043E, \u043D\u043E \u0435\u0449\u0435 \u043D\u0435 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u0437\u0430\u043A\u0430\u0437\u0430. "),uu={key:0},tu=e("span",{style:{color:"darkgoldenrod"}},"\u0414\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0441\u0444\u043E\u0440\u043C\u0438\u0440\u0443\u0439\u0442\u0435 \u0437\u0430\u043A\u0430\u0437 \u0438 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u0441\u0442\u0430\u043D\u0435\u0442 \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u043C.",-1),lu={class:"kp-step-actions"},su=X({__name:"KpStep1",props:{modelValue:{type:String,required:!0},active:{type:Boolean,default:!1},isOrder:{type:Boolean,default:!1},isDraft:{type:Boolean,default:!1}},emits:["update:modelValue","next"],setup(v,{emit:_}){const w=v,r=a(!0),d=a(!1),E=a(!1),h=x=>{x=="order"?(d.value=!1,E.value=!1,_("update:modelValue",Q.ORDER)):x=="draft"&&w.isDraft?(r.value=!1,E.value=!1,_("update:modelValue",Q.DRAFT)):w.isOrder&&(r.value=!1,d.value=!1,_("update:modelValue",Q.ORDER_POS))};return(x,m)=>{const A=Fe("router-link");return s(),o("div",{class:f(["kp-step",{active:v.active}])},[Je,e("div",Me,[e("div",Ge,[n(F,{modelValue:r.value,"onUpdate:modelValue":m[0]||(m[0]=y=>r.value=y),onOnClick:m[1]||(m[1]=y=>h("order"))},null,8,["modelValue"]),je]),e("div",{class:"kp-step-body-elem",tooltip:"\u041E\u0442\u0441\u0443\u0442\u0432\u0443\u044E\u0442 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043D\u044B\u0435 \u0447\u0435\u0440\u043D\u043E\u0432\u0438\u043A\u0438",flow:v.isDraft?"":"left"},[n(F,{modelValue:d.value,"onUpdate:modelValue":m[2]||(m[2]=y=>d.value=y),onOnClick:m[3]||(m[3]=y=>h("draft")),disabled:!v.isDraft},null,8,["modelValue","disabled"]),e("div",{class:f(["kp-step-body-elem-text",{disablsed:!v.isDraft}])},Ye,2)],8,He),e("div",{class:"kp-step-body-elem",tooltip:"\u0421\u043E\u0431\u0435\u0440\u0438\u0442\u0435 \u0437\u0430\u043A\u0430\u0437 \u0438 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0439\u0442\u0435\u0441\u044C \u0432 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439",flow:v.isOrder?"":"left"},[n(F,{modelValue:E.value,"onUpdate:modelValue":m[4]||(m[4]=y=>E.value=y),onOnClick:m[5]||(m[5]=y=>h("order_pos")),disabled:!v.isOrder},null,8,["modelValue","disabled"]),e("div",{class:f(["kp-step-body-elem-text",{disablsed:!v.isOrder}])},[qe,e("div",Xe,[eu,v.isOrder?i("",!0):(s(),o("span",uu,[n(A,{tag:"a",to:"/order"},{default:_e(()=>[tu]),_:1})]))])],2)],8,ze)]),e("div",lu,[e("div",{class:"kp-step-actions-link right",onClick:m[6]||(m[6]=y=>x.$emit("next"))},"\u0414\u0430\u043B\u0435\u0435")])],2)}}}),ou={key:0,class:"kp-step-title"},au={key:1,class:"kp-step-title"},iu={class:"kp-step-body"},du={key:0,class:"shipment-heading-select"},nu={class:"base-select-wrap"},ru=e("option",{value:"-1"},"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0437\u0430\u043A\u0430\u0437",-1),vu=["value"],pu={key:1,class:"shipment-heading-select"},mu={class:"base-select-wrap"},cu=e("option",{value:"-1"},"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0447\u0435\u0440\u043D\u043E\u0432\u0438\u043A",-1),fu=["value"],yu={key:2,class:"kp-step-body-input"},_u={class:"kp-step-body-row",style:"align-items: flex-end;"},Eu={class:"profile-personal-info-item-edit",style:"padding-bottom: 0px"},ku={class:"input-textfield"},Du=e("label",null,"\u041D\u043E\u043C\u0435\u0440 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430",-1),gu={class:"shipment-form-item"},hu=e("div",{class:"shipment-form-elem-title"},[e("span",null,"\u0414\u0430\u0442\u0430")],-1),Vu={class:"shipment-form-row",style:"display:flex; align-items: center;"},xu={class:"shipment-form-date"},Cu={class:"kp-step-body-row"},bu={class:"profile-personal-info-item-edit"},Au={class:"input-textfield"},Ou=e("label",null,"\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A",-1),wu={class:"profile-personal-info-item-edit",style:"display: flex; align-items: center;"},$u={key:0,class:"input-textfield",style:"width: 100%"},Bu=e("label",null,"\u041F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u044C",-1),Su=["flow"],Fu=e("svg",{width:"25",height:"25",viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("rect",{width:"2.17029",height:"21.7029",rx:"1.08514",transform:"matrix(0.999975 -0.00708126 -0.00708126 0.999975 11.097 1.26186)",fill:"#A5A7A9"}),e("rect",{width:"2.17029",height:"21.7029",rx:"1.08514",transform:"matrix(0.00708126 -0.999975 -0.999975 0.00708126 22.7798 12.9446)",fill:"#A5A7A9"})],-1),Qu={key:3,style:"padding: 30px"},Ru={key:0,style:{display:"flex","justify-content":"center"}},Pu={key:1},Uu={key:0,class:"order-list-bottom scroll-elem"},Nu={class:"order-list-bottom-wrap"},Iu={class:"content-heading-wrap order-draft",style:"background-color: #1F2227"},Tu={class:"content-heading-price"},Lu={class:"content-heading-price"},Ku=e("div",{class:"content-heading-price-text"},"\u0421\u0443\u043C\u043C\u0430 \u0437\u0430\u043A\u0430\u0437\u0430: ",-1),Ju={class:"content-heading-price-value"},Mu={style:"display: flex;align-items: center;justify-content: flex-end;"},Gu={class:"product-parcel-text"},ju=e("div",null,null,-1),Hu={key:0,class:"order-list-bottom-wrap"},Zu={key:0,class:"order-list-row order-list-heading"},Wu=e("div",{class:"order-list-elem"},"\u2116",-1),Yu=e("div",{class:"order-list-elem"},"\u0410\u0440\u0442\u0438\u043A\u0443\u043B",-1),zu=e("div",{class:"order-list-elem"},"\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435",-1),qu={class:"order-list-elem"},Xu=e("div",{class:"order-list-elem"},"\u041A\u043E\u043B-\u0432\u043E",-1),e4=e("div",{class:"order-list-elem"},"\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C",-1),u4=e("div",{class:"order-list-elem"},null,-1),t4=["onClick"],l4={class:"order-list-elem"},s4={class:"order-list-elem"},o4={class:"order-list-elem"},a4=["innerHTML"],i4=e("div",{class:"order-list-elem"},null,-1),d4={class:"order-list-elem"},n4={class:"order-list-elem"},r4=e("div",{class:"order-list-elem-delete"},null,-1),v4=e("div",{class:"order-list-elem"},null,-1),p4=e("div",{class:"order-list-elem"},null,-1),m4={class:"order-list-elem"},c4={class:"order-list-elem",style:"display: flex;align-items: center;gap: 10px"},f4=O(" \u20BD "),y4={class:"order-list-elem"},_4={key:0,class:"order-list-elem"},E4={key:1,class:"order-list-elem"},k4=e("div",{class:"order-list-elem-delete"},null,-1),D4={class:"kp-step-body-input"},g4=e("div",{class:"orders-list-elem"},[e("div",{class:"table-arrow"})],-1),h4=e("div",{class:"orders-list-elem"}," \u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F",-1),V4=[g4,h4],x4={class:"kp-step-body-row"},C4=e("span",{class:"kp-step-body-row-elem"},"\u0423\u0441\u043B\u043E\u0432\u0438\u044F \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438",-1),b4=e("div",null,"\u0421\u0430\u043C\u043E\u0432\u044B\u0432\u043E\u0437",-1),A4=e("div",null,"\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430",-1),O4={key:1},w4=O("\u20BD "),$4=e("span",{class:"kp-step-body-elem-text-sub"},"\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C",-1),B4=[w4,$4],S4={class:"kp-step-body-row"},F4=e("span",{class:"kp-step-body-row-elem"},"\u041F\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u0430",-1),Q4={key:1,style:"margin-left: 10px"},R4={key:2,class:"kp-step-body-elem-text-sub",style:"margin-left: 10px"},P4={class:"kp-step-body-row"},U4=e("span",{class:"kp-step-body-row-elem"},"\u041E\u0442\u0441\u0440\u043E\u0447\u043A\u0430",-1),N4=O("\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E "),I4=e("br",null,null,-1),T4=O("\u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u043D\u044B\u0445 \u0434\u043D\u0435\u0439"),L4=[N4,I4,T4],K4={style:"margin-left: 30px"},J4=O("\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E"),M4=e("br",null,null,-1),G4=O("\u0440\u0430\u0431\u043E\u0447\u0438\u0445 \u0434\u043D\u0435\u0439"),j4=[J4,M4,G4],H4=e("div",{class:"orders-list-elem"},[e("div",{class:"table-arrow"})],-1),Z4=e("div",{class:"orders-list-elem"},"\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",-1),W4=[H4,Z4],Y4={class:"kp-step-body-row"},z4=e("span",{class:"kp-step-body-row-elem"},null,-1),q4=e("div",null,"\u0422\u0435\u043A\u0441\u0442",-1),X4=e("div",null,"\u041B\u043E\u0433\u043E",-1),et={key:0,style:"margin-left:20px"},ut={class:"kp-step-body-add-file-label",for:"file-upload"},tt={key:0,class:"kp-step-body-row"},lt={key:1,class:"kp-step-body-row",style:"justify-content: center"},st={key:0},ot={key:2,class:"kp-step-body-row",style:"justify-content: center"},at={class:"product-slider-wrap"},it=["src"],dt={key:3,class:"kp-step-body-row"},nt={class:"order-comment-form show"},rt=e("div",{class:"order-comment-title"},[e("span",null,"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439")],-1),vt={class:"kp-step-body-row",style:"justify-content: flex-end"},pt=O(" \u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435: "),mt=e("div",{style:"margin-left: 10px"},"PDF",-1),ct={class:"kp-step-actions"},ft=X({__name:"KpStep2",props:{active:{type:Boolean,default:!1},type:{type:String,required:!0}},emits:["next","prev"],setup(v,{emit:_}){var ve;const w=v,r=ae(),d=I(()=>Q),E=a(!1),h=a(!1),x=a(!1),m=a(!1),A=a(!1),y=a(!0),R=a(!1),K=a(!1),J=a(""),$=a(!1),g=a(-1),ie=a((ve=Ee("tempOrderId"))!=null?ve:-1),B=a(-1),M=a([]),De=I(()=>r.getters.getOrders),de=I(()=>r.getters.getOrderDraft),k=a(),ne=a(""),ee=a(!1),j=I(()=>r.getters.getKPLogoList),l=a(JSON.parse(JSON.stringify(pe))),ue=a(!0),ge=a(!1),te=a(new Date().toLocaleString("ru").substr(0,10)),le=I(()=>r.getters.getCompanysListInput().filter(C=>C.id!=="")),he=I(()=>r.getters.getShipmentsAddressInputData),T=a(0),S=a("percent"),P=a(-1);se(g,()=>{g.value!=-1&&(E.value=!0,r.dispatch(Re.GET_ORDER_DETAIL,g.value).finally(()=>{k.value=JSON.parse(JSON.stringify(r.getters.getOrderDetail)),U(),E.value=!1}))}),se(B,()=>{B.value!=-1&&(k.value=JSON.parse(JSON.stringify(de.value.find(C=>C.id==B.value))),U())}),se(()=>w.type,()=>{w.type==Q.ORDER_POS&&(k.value=JSON.parse(JSON.stringify(r.getters.getOrder)),U())}),ke(()=>{g.value=ie.value,ie.value=-1});const Ve=()=>{var C;if(g.value!=-1||B.value!=-1||w.type==Q.ORDER_POS){let u=JSON.parse(JSON.stringify(l.value));u.offer.date=new Date(Le(te.value)).getTime(),u.offer.position=JSON.parse(JSON.stringify((C=k.value)==null?void 0:C.position)),u.offer.position.forEach(t=>{t.characteristics.forEach(p=>{S.value=="percent"&&(p.PRICE=p.PRICE+P.value*p.PRICE*T.value/100),S.value=="add"&&(p.PRICE=p.PRICE+P.value*T.value)})}),u.additionally.prepayment&&k.value&&(u.additionally.prepaymentValue=l.value.additionally.prepaymentValue/100);const D=le.value.find(t=>t.id==l.value.offer.executor);if(D&&(u.offer.executor=D.name),u.additionally.pickup){const t=r.getters.getShipmentsAddress.find(p=>p.index==parseInt(l.value.additionally.pickupValue)).address;t&&(u.additionally.pickupValue=t)}j.value.length>0&&(u.headerLogo=j.value[0].id),h.value=!0,r.dispatch(z.SEND_KP,u).finally(()=>{_("next"),h.value=!1})}},xe=()=>{g.value=-1,B.value=-1,k.value=void 0,l.value=JSON.parse(JSON.stringify(pe)),_("prev")},Ce=()=>{J.value.length>=2&&(l.value.offer.customer="",x.value=!0,K.value=!1,$.value=!1,r.dispatch(z.GET_ORG_BY_INN,J.value).then(()=>{x.value=!1,l.value.offer.customer=r.getters.getKPOrgName,J.value=""}).catch(()=>{K.value=!0,setTimeout(()=>{K.value=!1},1e4),x.value=!1,J.value=""}))},U=()=>{if(k.value){let C=0;k.value.position.forEach(u=>{let D=0;u.characteristics.forEach(t=>{S.value=="percent"&&(D=D+t.count*(t.PRICE+P.value*t.PRICE*T.value/100)),S.value=="add"&&(D=D+t.count*(t.PRICE+P.value*T.value))}),u.total=D,C=C+D}),k.value.total=C}},be=C=>{let u=C.target.files[0];var D=new FileReader;D.onloadend=()=>{ne.value=D.result,ee.value=!0,r.dispatch(z.ADD_KP_LOGO,ne.value).then(()=>{l.value.headerLogo=r.getters.getKPLogoId,ee.value=!1})},D.readAsDataURL(u)},Ae=()=>{r.commit(fe.SET_KP_LOGO_LIST_NEXT)};let re=()=>{r.commit(fe.SET_KP_LOGO_LIST_PREV)};return(C,u)=>{var D;return s(),o("div",{class:f(["kp-step",{active:v.active}])},[v.type==c(d).ORDER?(s(),o("div",ou,"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0437\u0430\u043A\u0430\u0437")):i("",!0),v.type==c(d).DRAFT?(s(),o("div",au,"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0447\u0435\u0440\u043D\u043E\u0432\u0438\u043A")):i("",!0),e("div",iu,[v.type==c(d).ORDER?(s(),o("div",du,[e("div",nu,[N(e("select",{class:"base-select",style:{width:"100%"},"onUpdate:modelValue":u[0]||(u[0]=t=>g.value=t)},[ru,(s(!0),o(Z,null,W(c(De),(t,p)=>(s(),o("option",{key:p,value:t.n},V(t.name),9,vu))),128))],512),[[me,g.value]])])])):i("",!0),v.type==c(d).DRAFT?(s(),o("div",pu,[e("div",mu,[N(e("select",{class:"base-select",style:{width:"100%"},"onUpdate:modelValue":u[1]||(u[1]=t=>B.value=t)},[cu,(s(!0),o(Z,null,W(c(de),(t,p)=>(s(),o("option",{key:p,value:t.id},V(t.name),9,fu))),128))],512),[[me,B.value]])])])):i("",!0),g.value!=-1||B.value!=-1||v.type==c(Q).ORDER_POS?(s(),o("div",yu,[e("div",_u,[e("div",Eu,[e("div",ku,[N(e("input",{name:"lastname",type:"text",placeholder:" ",class:"","onUpdate:modelValue":u[2]||(u[2]=t=>l.value.offer.n=t)},null,512),[[Y,l.value.offer.n]]),Du])]),e("div",gu,[hu,e("div",Vu,[e("div",xu,[n(Ie,{modelValue:te.value,"onUpdate:modelValue":u[3]||(u[3]=t=>te.value=t)},null,8,["modelValue"])])])])]),e("div",Cu,[e("div",bu,[e("div",Au,[N(e("input",{name:"lastname",type:"text",placeholder:" ",class:"","onUpdate:modelValue":u[4]||(u[4]=t=>l.value.offer.executor=t),onInput:u[5]||(u[5]=t=>l.value.offer.executorUID="")},null,544),[[Y,l.value.offer.executor]]),Ou])]),n(ye,{data:c(le),modelValue:l.value.offer.executorUID,"onUpdate:modelValue":u[6]||(u[6]=t=>l.value.offer.executorUID=t),onOnInput:u[7]||(u[7]=t=>{var p;return l.value.offer.executor=((p=c(le).find(b=>b.id==l.value.offer.executorUID))==null?void 0:p.name)||""})},null,8,["data","modelValue"])]),e("div",wu,[x.value?(s(),L(q,{key:1})):(s(),o("div",$u,[N(e("input",{name:"lastname",type:"text",placeholder:" ",class:f({error:K.value}),"onUpdate:modelValue":u[8]||(u[8]=t=>l.value.offer.customer=t)},null,2),[[Y,l.value.offer.customer]]),Bu])),e("div",{class:"kp-step-body-button",tooltip:"\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0418\u041D\u041D",flow:$.value?"":"up",onClickCapture:u[12]||(u[12]=t=>$.value=!0)},[n(Te,{modelValue:J.value,"onUpdate:modelValue":u[9]||(u[9]=t=>J.value=t),show:$.value,"onUpdate:show":u[10]||(u[10]=t=>$.value=t),"show-ok":"",onOnOk:u[11]||(u[11]=t=>Ce()),label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0418\u041D\u041D"},null,8,["modelValue","show"]),Fu],40,Su)])])):i("",!0),g.value!=-1||B.value!=-1||v.type==c(Q).ORDER_POS?(s(),o("div",Qu,[E.value?(s(),o("div",Ru,[n(q)])):(s(),o("div",Pu,[k.value?(s(),o("div",Uu,[e("div",Nu,[e("div",Iu,[e("div",Tu,[e("div",Lu,[Ku,e("div",Ju,V(Number(k.value.total).toLocaleString("ru",{minimumFractionDigits:2,maximumFractionDigits:2}).replace(",","."))+" \u20BD",1)])])]),e("div",Mu,[e("button",{class:f("product-parcel-btn"+(S.value==="percent"?" active":"")),style:"width: auto; min-width: 7em;",onClick:u[13]||(u[13]=t=>{P.value=-P.value,U()})},[e("div",Gu,V(P.value<0?"\u0421\u043A\u0438\u0434\u043A\u0430":"\u041D\u0430\u0446\u0435\u043D\u043A\u0430"),1)],2),n(G,{modelValue:T.value,"onUpdate:modelValue":u[14]||(u[14]=t=>T.value=t),style:"margin: 5px",onOnInput:u[15]||(u[15]=t=>U())},null,8,["modelValue"]),e("button",{class:f("product-parcel-btn"+(S.value==="percent"?" active":"")),onClick:u[16]||(u[16]=t=>{S.value="percent",U()})},"%",2),e("button",{class:f("product-parcel-btn"+(S.value==="add"?" active":"")),onClick:u[17]||(u[17]=t=>{S.value="add",U()})},"\u20BD",2)]),ju,k.value?(s(),o("div",Hu,[k.value.position.length>0?(s(),o("div",Zu,[Wu,Yu,zu,e("div",qu,V(M.value.length!=0?"\u0426\u0435\u043D\u0430":""),1),Xu,e4,u4])):i("",!0),(s(!0),o(Z,null,W(k.value.position,(t,p)=>(s(),o("div",{class:f(M.value.indexOf(p)!==-1?"order-list-item active":"order-list-item"),key:p},[e("div",{class:"order-list-row order-list-main-row",onClick:b=>M.value.indexOf(p)===-1?M.value.push(p):M.value.splice(M.value.indexOf(p),1)},[e("div",l4,V(p+1),1),e("div",s4,V(t.article),1),e("div",o4,[e("span",{innerHTML:t.product.NAME},null,8,a4)]),i4,e("div",d4,V(t.count),1),e("div",n4,V(Number(t.total).toLocaleString("RU",{minimumFractionDigits:2,maximumFractionDigits:2}).replace(",","."))+" \u20BD",1),r4],8,t4),e("div",{class:f(M.value.indexOf(p)!==-1?"order-list-sublist active":"order-list-sublist")},[(s(!0),o(Z,null,W(t.characteristics,(b,Oe)=>(s(),o("div",{key:Oe,class:"order-list-row"},[v4,p4,e("div",m4,V(b.CHARACTERISTIC),1),e("div",c4,[n(G,{modelValue:b.PRICE,"onUpdate:modelValue":H=>b.PRICE=H,min:1,onOnInput:u[18]||(u[18]=H=>U())},null,8,["modelValue","onUpdate:modelValue"]),f4]),e("div",y4,[n(G,{modelValue:b.count,"onUpdate:modelValue":H=>b.count=H,min:1,onOnInput:u[19]||(u[19]=H=>U())},null,8,["modelValue","onUpdate:modelValue"])]),S.value=="percent"?(s(),o("div",_4,V(Number((b.PRICE+P.value*b.PRICE*T.value/100)*b.count).toLocaleString("RU",{minimumFractionDigits:2,maximumFractionDigits:2}).replace(",","."))+" \u20BD ",1)):(s(),o("div",E4,V(Number((b.PRICE+P.value*T.value)*b.count).toLocaleString("RU",{minimumFractionDigits:2,maximumFractionDigits:2}).replace(",","."))+" \u20BD ",1)),k4]))),128))],2)],2))),128))])):i("",!0)])])):i("",!0)])),e("div",D4,[e("div",{class:f(["orders-list-item",{active:m.value}])},[e("div",{class:"orders-list-row",onClick:u[20]||(u[20]=t=>m.value=!m.value)},V4),e("div",{class:f(["orders-list-info",{active:m.value}])},[e("div",x4,[C4,n(F,{modelValue:l.value.additionally.pickup,"onUpdate:modelValue":u[21]||(u[21]=t=>l.value.additionally.pickup=t),onOnClick:u[22]||(u[22]=t=>{l.value.additionally.delivery=!1,l.value.additionally.deliveryValue=0}),style:"margin-left: 30px"},null,8,["modelValue"]),b4,n(F,{modelValue:l.value.additionally.delivery,"onUpdate:modelValue":u[23]||(u[23]=t=>l.value.additionally.delivery=t),onOnClick:u[24]||(u[24]=t=>l.value.additionally.pickup=!1),style:"margin-left: 30px"},null,8,["modelValue"]),A4,l.value.additionally.delivery?(s(),L(G,{key:0,min:0,step:10,modelValue:l.value.additionally.deliveryValue,"onUpdate:modelValue":u[25]||(u[25]=t=>l.value.additionally.deliveryValue=t),style:"margin-left: 30px"},null,8,["modelValue"])):i("",!0),l.value.additionally.delivery?(s(),o("div",O4,B4)):i("",!0),l.value.additionally.pickup?(s(),L(ye,{key:2,data:c(he),modelValue:l.value.additionally.pickupValue,"onUpdate:modelValue":u[26]||(u[26]=t=>l.value.additionally.pickupValue=t),style:"max-width: 300px"},null,8,["data","modelValue"])):i("",!0)]),e("div",S4,[F4,n(F,{modelValue:l.value.additionally.prepayment,"onUpdate:modelValue":u[27]||(u[27]=t=>l.value.additionally.prepayment=t),onOnClick:u[28]||(u[28]=t=>l.value.additionally.prepaymentValue=0),style:"margin-left: 30px"},null,8,["modelValue"]),l.value.additionally.prepayment?(s(),L(G,{key:0,min:0,max:100,step:.1,modelValue:l.value.additionally.prepaymentValue,"onUpdate:modelValue":u[29]||(u[29]=t=>l.value.additionally.prepaymentValue=t),style:"margin-left: 30px"},null,8,["step","modelValue"])):i("",!0),l.value.additionally.prepayment?(s(),o("div",Q4,"%")):i("",!0),l.value.additionally.prepayment&&k.value?(s(),o("div",R4,V(Number(((D=k.value)==null?void 0:D.total)/100*l.value.additionally.prepaymentValue).toLocaleString("RU",{minimumFractionDigits:2,maximumFractionDigits:2}).replace(",","."))+"\u20BD ",1)):i("",!0)]),N(e("div",P4,[U4,n(F,{modelValue:l.value.additionally.delay,"onUpdate:modelValue":u[30]||(u[30]=t=>l.value.additionally.delay=t),onOnClick:u[31]||(u[31]=t=>{l.value.additionally.delayWorkValue=0,l.value.additionally.delayCalendarValue=0}),style:"margin-left: 30px"},null,8,["modelValue"]),l.value.additionally.delay?(s(),o("div",{key:0,style:oe([R.value?"color: #292C32":"color: #FFFFFF","margin-left: 30px"])},L4,4)):i("",!0),l.value.additionally.delay?(s(),L(G,{key:1,min:0,modelValue:l.value.additionally.delayCalendarValue,"onUpdate:modelValue":u[32]||(u[32]=t=>l.value.additionally.delayCalendarValue=t),disabled:R.value},null,8,["modelValue","disabled"])):i("",!0),N(e("div",K4,[n(Ke,{modelValue:R.value,"onUpdate:modelValue":u[33]||(u[33]=t=>R.value=t)},null,8,["modelValue"])],512),[[ce,l.value.additionally.delay]]),l.value.additionally.delay?(s(),o("div",{key:2,style:oe([R.value?"color: #FFFFFF":"color: #292C32","margin-left: 30px"])},j4,4)):i("",!0),l.value.additionally.delay?(s(),L(G,{key:3,min:0,modelValue:l.value.additionally.delayWorkValue,"onUpdate:modelValue":u[34]||(u[34]=t=>l.value.additionally.delayWorkValue=t),disabled:!R.value},null,8,["modelValue","disabled"])):i("",!0)],512),[[ce,l.value.additionally.prepaymentValue!=100]])],2)],2),e("div",{class:f(["orders-list-item",{active:l.value.header}])},[e("div",{class:"orders-list-row",onClick:u[35]||(u[35]=t=>l.value.header=!l.value.header)},W4),e("div",{class:f(["orders-list-info",{active:l.value.header}])},[e("div",Y4,[z4,n(F,{modelValue:y.value,"onUpdate:modelValue":u[36]||(u[36]=t=>y.value=t),onOnClick:u[37]||(u[37]=t=>A.value=!1),style:"margin-left: 30px"},null,8,["modelValue"]),q4,n(F,{modelValue:A.value,"onUpdate:modelValue":u[38]||(u[38]=t=>A.value=t),onOnClick:u[39]||(u[39]=t=>y.value=!1),style:"margin-left: 30px"},null,8,["modelValue"]),X4,A.value?(s(),o("div",et,[e("label",ut,[e("input",{onChange:u[40]||(u[40]=t=>be(t)),class:"kp-step-body-add-file-input",id:"file-upload",type:"file",accept:"image/*"},null,32)]),ee.value?(s(),L(q,{key:0})):i("",!0)])):i("",!0)]),y.value?(s(),o("div",tt,[N(e("textarea",{class:"order-comment-textarea","onUpdate:modelValue":u[41]||(u[41]=t=>l.value.headerText=t),placeholder:"\u0422\u0435\u043A\u0441\u0442 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0430 \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F..."},null,512),[[Y,l.value.headerText]])])):i("",!0),A.value?(s(),o("div",lt,[c(j).length>0?(s(),o("div",st," \u041B\u043E\u0433\u043E #"+V(c(j)[0].id),1)):i("",!0)])):i("",!0),A.value?(s(),o("div",ot,[e("div",null,[e("div",at,[e("button",{class:"product-slider-arrow prev",onClick:u[42]||(u[42]=(...t)=>c(re)&&c(re)(...t))}),n(Qe,{name:"product-slider-trans",class:"product-slider",style:"align-items: center; height: 500px;",tag:"div"},{default:_e(()=>[(s(!0),o(Z,null,W(c(j),t=>(s(),o("div",{class:"product-slider-slide",key:t.id},[t.image?(s(),o("img",{key:0,src:t.image},null,8,it)):i("",!0)]))),128))]),_:1}),e("div",{class:"product-slider-arrow next",onClick:Ae})])])])):i("",!0),A.value?(s(),o("div",dt)):i("",!0)],2)],2),e("div",nt,[rt,N(e("textarea",{class:"order-comment-textarea","onUpdate:modelValue":u[43]||(u[43]=t=>l.value.offer.comment=t)},null,512),[[Y,l.value.offer.comment]])]),e("div",vt,[pt,n(F,{modelValue:ue.value,"onUpdate:modelValue":u[44]||(u[44]=t=>ue.value=t),onOnClick:u[45]||(u[45]=t=>{ue.value=!0,ge.value=!1,l.value.as="PDF"}),style:"margin-left: 30px"},null,8,["modelValue"]),mt])])])):i("",!0)]),e("div",ct,[e("div",{class:"kp-step-actions-link",onClick:u[46]||(u[46]=t=>xe())},"\u041D\u0430\u0437\u0430\u0434"),h.value?(s(),L(q,{key:0})):(s(),o("div",{key:1,class:f(["kp-step-actions-link",{disabled:g.value==-1&&B.value==-1&&v.type!=c(Q).ORDER_POS}]),onClick:u[47]||(u[47]=t=>Ve())},"\u0414\u0430\u043B\u0435\u0435",2))])],2)}}}),yt=e("div",{class:"kp-step-title"},"\u0424\u0430\u0439\u043B \u0441\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u043D",-1),_t={class:"kp-step-body"},Et={class:"kp-step-actions"},kt=X({__name:"KpStep3",props:{active:{type:Boolean,default:!1}},emits:["next","prev"],setup(v,{emit:_}){const w=ae(),r=()=>{w.dispatch(z.SAVE_KP)};return(d,E)=>(s(),o("div",{class:f(["kp-step",{active:v.active}])},[yt,e("div",_t,[e("div",{onClick:E[0]||(E[0]=h=>r()),class:"kp-step-actions-link",style:"text-align: center"},"\u0421\u043A\u0430\u0447\u0430\u0442\u044C")]),e("div",Et,[e("div",{class:"kp-step-actions-link",onClick:E[1]||(E[1]=h=>d.$emit("prev"))},"\u041D\u0430\u0437\u0430\u0434")])],2))}}),Dt={class:"kp"},gt={class:"top-line product-page"},ht=e("div",{class:"kp-head-card"},[e("div",{class:"kp-head-card-title"},"\u041A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440 \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0438\u0445 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439"),e("div",{class:"kp-head-card-subtitle"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24",st:""},[e("path",{fill:"#A5A7A9",d:"M11.875 18Q12.5 18 12.95 17.55Q13.4 17.1 13.4 16.475Q13.4 15.85 12.95 15.412Q12.5 14.975 11.875 14.975Q11.25 14.975 10.8 15.412Q10.35 15.85 10.35 16.475Q10.35 17.1 10.8 17.55Q11.25 18 11.875 18ZM10.7 14.15H13.05Q13.05 13.425 13.25 12.925Q13.45 12.425 14.2 11.7Q14.775 11.15 15.137 10.525Q15.5 9.9 15.5 9.025Q15.5 7.525 14.525 6.737Q13.55 5.95 12.15 5.95Q10.625 5.95 9.613 6.825Q8.6 7.7 8.2 8.9L10.4 9.725Q10.575 9.225 10.95 8.725Q11.325 8.225 12.025 8.225Q12.525 8.225 12.8 8.537Q13.075 8.85 13.075 9.225Q13.075 9.6 12.812 10Q12.55 10.4 12.275 10.625Q11.275 11.55 10.988 12.137Q10.7 12.725 10.7 14.15ZM12 22.85Q9.75 22.85 7.763 22Q5.775 21.15 4.312 19.688Q2.85 18.225 2 16.25Q1.15 14.275 1.15 12Q1.15 9.725 2 7.75Q2.85 5.775 4.312 4.312Q5.775 2.85 7.763 2Q9.75 1.15 12 1.15Q14.275 1.15 16.25 2Q18.225 2.85 19.688 4.312Q21.15 5.775 22 7.75Q22.85 9.725 22.85 12Q22.85 14.275 22 16.25Q21.15 18.225 19.688 19.688Q18.225 21.15 16.25 22Q14.275 22.85 12 22.85ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12ZM12 19.7Q15.2 19.7 17.45 17.462Q19.7 15.225 19.7 12Q19.7 8.775 17.45 6.537Q15.2 4.3 12 4.3Q8.8 4.3 6.55 6.537Q4.3 8.775 4.3 12Q4.3 15.225 6.55 17.462Q8.8 19.7 12 19.7Z"})]),e("div",null,"\u041D\u0430 \u044D\u0442\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u0412\u044B \u0441\u043C\u043E\u0436\u0435\u0442\u0435 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0438 \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u043E\u0433\u043E \u0437\u0430\u043A\u0430\u0437\u0430, \u0447\u0435\u0440\u043D\u043E\u0432\u0438\u043A\u0430 \u0438\u043B\u0438 \u0442\u043E\u0432\u0430\u0440\u0430 \u0441\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0441\u043E \u0441\u0432\u043E\u0438\u043C \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u043E\u043C \u0438 \u0446\u0435\u043D\u0430\u043C\u0438.")])],-1),Vt={class:"kp-form"},xt={class:"kp-form-stepper-wrap"},Ct={class:"kp-form-stepper"},bt={class:"kp-form-stepper-list"},At={class:"kp-form-stepper-content"},Ot={class:"kp-form-stepper-content-tabs-box"},Tt=X({__name:"kp",setup(v){var K;const _=ae(),w=I(()=>_.getters.getCompanysList),r=a(""),d=a(1),E=a(!1),h=a(Q.ORDER),x=a((K=Ee("tempKPType"))!=null?K:"");ke(()=>{_.getters.isCompanysLoad||_.dispatch(Pe.GET_COMPANYS),_.getters.isOrders||(E.value=!0,_.dispatch(Ue.GET_ORDERS).then(()=>{E.value=!1})),_.dispatch(z.GET_KP_LOGO),_.dispatch(Ne.GET_SHIPMENTS_ADDRESS),x.value!=""&&(h.value=x.value,x.value="",d.value=2)});const m=I(()=>_.getters.isOrder),A=I(()=>_.getters.getOrderDraftCount>0),y=()=>{d.value<3&&(d.value=d.value+1)},R=()=>{d.value>1&&(d.value=d.value-1)};return(J,$)=>(s(),o("div",Dt,[e("div",gt,[n(Be,{data:c(w),modelValue:r.value,"onUpdate:modelValue":$[0]||($[0]=g=>r.value=g)},null,8,["data","modelValue"]),n(we),n($e)]),n(Se),ht,e("div",Vt,[e("div",xt,[e("div",Ct,[e("div",{class:"kp-form-stepper-bar",style:oe("width:"+50*(d.value-1)+"%")},null,4),e("ul",bt,[e("li",{class:f(["kp-form-stepper-item",{active:d.value>=1}])},"1",2),e("li",{class:f(["kp-form-stepper-item",{active:d.value>=2}])},"2",2),e("li",{class:f(["kp-form-stepper-item with-image",{active:d.value>=3}])},null,2)])])]),e("div",At,[e("div",Ot,[e("div",{class:f(`kp-form-stepper-content-tabs step${d.value}`)},[n(su,{onNext:y,modelValue:h.value,"onUpdate:modelValue":$[1]||($[1]=g=>h.value=g),active:d.value==1,isOrder:c(m),isDraft:c(A)},null,8,["modelValue","active","isOrder","isDraft"]),n(ft,{type:h.value,onNext:y,onPrev:R,active:d.value==2},null,8,["type","active"]),n(kt,{onNext:y,onPrev:R,active:d.value==3},null,8,["active"])],2)])])])]))}});export{Tt as default};
