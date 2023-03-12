import{_ as L}from"./TopNav.f251770a.js";import{d as O,ab as N,h as $,j as f,_ as S,r as h,o as u,b as i,a as s,t as p,k as D,F as b,f as I,z as C,p as V,ao as M,e as w,J as U,g as F,ah as R,c as E,av as k,aN as B,aw as T,al as P,i as j,s as G,aG as q,aJ as A,aI as y,O as H}from"./index.586a5fbf.js";const W=O({props:{data:{type:Object},modelValue:{type:Array,required:!0}},emits:["update:modelValue"],components:{AmountInput:N},setup(e,{emit:a}){const r=$([]),o=$({}),_=f(()=>{let c=Object.assign({},e.data);if(c.position)c.position.forEach(d=>{d.characteristics.forEach(n=>n.select=0)});else return null;return c});return{open:r,open_presail:o,val:_,upd:()=>{let c=[];_.value&&_.value.position.forEach(d=>{d.characteristics.forEach(n=>{n.select>0&&c.push({productUID:d.product.UID,characteristicGUID:n.CHARACTERISTIC,count:n.select})})}),a("update:modelValue",c)}}}}),J={class:"order-list content-elem"},z={key:0,class:"order-list-bottom scroll-elem"},Y={class:"order-list-bottom-wrap"},K={key:0,class:"order-list-row order-list-heading"},Q=s("div",{class:"order-list-elem"},"\u2116",-1),X=s("div",{class:"order-list-elem"},"\u0410\u0440\u0442\u0438\u043A\u0443\u043B",-1),Z=s("div",{class:"order-list-elem"},"\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435",-1),x={class:"order-list-elem"},ee=s("div",{class:"order-list-elem"},"\u041A\u043E\u043B-\u0432\u043E",-1),se=s("div",{class:"order-list-elem"},"\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C",-1),te=s("div",{class:"order-list-elem"},"\u0412\u044B\u0431\u0440\u0430\u043D\u043E",-1),ae=["onClick"],le={class:"order-list-elem"},oe={class:"order-list-elem"},ue={class:"order-list-elem"},de=["innerHTML"],ne=s("div",{class:"order-list-elem"},null,-1),ie={class:"order-list-elem"},re={key:0,class:"order-list-elem"},ce={key:1,class:"order-list-elem"},me={class:"order-list-elem"},pe=s("div",{class:"order-list-elem"},null,-1),_e=s("div",{class:"order-list-elem"},null,-1),ve={class:"order-list-elem"},he={key:0,class:"order-list-elem"},ge={key:1,class:"order-list-elem"},fe={class:"order-list-elem"},Ce={key:2,class:"order-list-elem"},$e={key:3,class:"order-list-elem"},Ee={class:"order-list-elem"};function De(e,a,r,o,_,v){const c=h("amount-input");return u(),i("div",J,[e.val?(u(),i("div",z,[s("div",Y,[e.val.position.length>0?(u(),i("div",K,[Q,X,Z,s("div",x,p(e.open.length!=0?"\u0426\u0435\u043D\u0430":""),1),ee,se,te])):D("",!0),(u(!0),i(b,null,I(e.val.position,(d,n)=>(u(),i("div",{class:C(e.open.indexOf(n)!==-1?"order-list-item active":"order-list-item"),key:n},[s("div",{class:"order-list-row order-list-main-row",onClick:t=>e.open.indexOf(n)===-1?e.open.push(n):e.open.splice(e.open.indexOf(n),1)},[s("div",le,p(n+1),1),s("div",oe,p(d.article),1),s("div",ue,[s("span",{innerHTML:d.product.NAME},null,8,de)]),ne,s("div",ie,p(d.count),1),d.total?(u(),i("div",re,p(Number(d.total).toLocaleString("ru"))+" \u20BD",1)):(u(),i("div",ce," -- ")),s("div",me,p(d.characteristics.filter(t=>t.select>0).length),1)],8,ae),s("div",{class:C(e.open.indexOf(n)!==-1?"order-list-sublist active":"order-list-sublist")},[(u(!0),i(b,null,I(d.characteristics,(t,m)=>(u(),i("div",{key:m,class:"order-list-row"},[pe,_e,s("div",ve,p(t.CHARACTERISTIC),1),t.PRICE?(u(),i("div",he,p(Number(t.PRICE).toLocaleString("ru"))+" \u20BD",1)):(u(),i("div",ge," -- ")),s("div",fe,[s("span",null,p(t.count),1)]),t.PRICE?(u(),i("div",Ce,p(Number(t.PRICE*t.count).toLocaleString("ru"))+" \u20BD",1)):(u(),i("div",$e," -- ")),s("div",Ee,[V(c,{max:t.count,modelValue:t.select,"onUpdate:modelValue":l=>t.select=l,onOnInput:e.upd},null,8,["max","modelValue","onUpdate:modelValue","onOnInput"])])]))),128))],2)],2))),128))])])):D("",!0)])}var be=S(W,[["render",De]]);const Ie=O({components:{SelectInput:M,ClaimOrder:be,PreloaderLocal:w},props:{modelValue:{type:Object,required:!0},cardId:{type:Number,required:!0}},emits:["update:modelValue","update:files","close"],setup(e,{emit:a}){const r=F(),o=$({date_create:"",status:0,title:"\u041F\u0440\u0435\u0442\u0435\u043D\u0437\u0438\u044F \u043F\u043E \u0417\u0430\u043A\u0430\u0437\u0443 \u2116",partner_name:"",partner_guid:"",id:e.modelValue.id,case:1,products:[],message:"",files:[]}),_=$(!1),v=f({get:()=>o.value.partner_guid==""&&c.value!==null?r.getters.getOrders.find(t=>t.n==c.value).partner_guid:o.value.partner_guid,set:t=>{o.value.partner_guid=t;const m=r.getters.getOrders.filter(l=>l.partner_guid==t);m.length&&(o.value.id=Math.max(...m.map(l=>l.n))),a("update:modelValue",o.value)}}),c=f({get:()=>e.modelValue.id?e.modelValue.id:o.value.id,set:t=>{o.value.id=t,a("update:modelValue",o.value),o.value.partner_guid=r.getters.getOrders.find(m=>m.n==t).partner_guid,_.value=!0,r.dispatch(R.GET_ORDER_DETAIL,t).finally(()=>{o.value.order_detail=r.getters.getOrderDetail,_.value=!1})}});U(o.value,()=>{var t;o.value.partner_guid=v.value,o.value.partner_name=r.getters.getCompanyData(o.value.partner_guid).name,o.value.title="\u041F\u0440\u0435\u0442\u0435\u043D\u0437\u0438\u044F \u043F\u043E \u0417\u0430\u043A\u0430\u0437\u0443 \u2116"+c.value+" \u043E\u0442 "+((t=r.getters.getOrders.find(m=>m.n==c.value))==null?void 0:t.date.substring(0,10)),o.value.order_detail=e.modelValue.order_detail,a("update:modelValue",o.value)});const d=t=>{o.value.files.push(t.target.files[0]),a("update:modelValue",o.value)},n=t=>{o.value.files.splice(t,1),a("update:modelValue",o.value)};return{data:o,loading:_,order:c,companyUID:v,orders:f(()=>r.getters.getOrders.filter(t=>t.partner_guid==v.value)),companys:f(()=>r.getters.getCompanysList),handleFileUpload:d,delFile:n}}}),Ve={key:0,class:"claim-header"},Ae={class:"shipment-heading claim-heading"},ye={class:"shipment-heading-elem"},Oe={class:"shipment-heading-info"},Se={key:0,class:"shipment-title"},ke={key:1,class:"shipment-title"},we=s("span",null,"\u041E\u0442\u0441\u0443\u0442\u0432\u0443\u044E\u0442 \u0437\u0430\u043A\u0430\u0437\u044B",-1),Fe=[we],Le={class:"shipment-heading-select"},Ne=s("span",null,"\u041E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0435: \xA0",-1),Me={class:"base-select-wrap"},Ue=["value"],Re={class:"shipment-heading-elem"},Be={class:"orders-heading-item"},Te=s("div",{class:"orders-heading-text"},"\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442:",-1),Pe={class:"nav-tab claim-tab"},je=s("span",null,"\u041F\u0440\u0438\u0447\u0438\u043D\u0430 \u043F\u0440\u0435\u0442\u0435\u043D\u0437\u0438\u0438:",-1),Ge={class:"nav-tab-wrap"},qe=s("div",{class:"gradient-btn-text"},"\u041D\u0435\u0434\u043E\u0441\u0434\u0430\u0447\u0430",-1),He=[qe],We=s("div",{class:"gradient-btn-text"},"\u041F\u0435\u0440\u0435\u0441\u043E\u0440\u0442",-1),Je=[We],ze=s("div",{class:"gradient-btn-text"},"\u041A\u0430\u0447\u0435\u0441\u0442\u0432\u043E",-1),Ye=[ze],Ke=s("div",{class:"gradient-btn-text"},"\u0414\u0440\u0443\u0433\u043E\u0435",-1),Qe=[Ke],Xe={class:"claim-info"},Ze={class:"claim-info-elem"},xe={class:"content-elem"},es={class:"order-list-bottom scroll-elem"},ss={key:0,style:{display:"flex","justify-content":"center"}},ts={class:"claim-info-elem"},as=s("div",{class:"claim-info-title"},"\u0421\u043E\u043F\u0440\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442 \u043F\u0440\u0435\u0442\u0435\u043D\u0437\u0438\u0438",-1),ls={class:"claim-info-textarea-wrap"},os={class:"claim-info-add-file"},us=["id"],ds=["for"],ns={class:"claim-info-add-file-val"},is={class:"claim-doc"},rs=["onClick"],cs={class:"claim-doc-elem-name"};function ms(e,a,r,o,_,v){var m;const c=h("router-link"),d=h("SelectInput"),n=h("PreloaderLocal"),t=h("ClaimOrder");return u(),i("div",null,[e.cardId!=0?(u(),i("div",Ve,[s("div",{class:"claim-header-close",onClick:a[0]||(a[0]=l=>e.$emit("close"))})])):D("",!0),s("div",Ae,[s("div",ye,[e.cardId==0?(u(),E(c,{key:0,tag:"a",to:"/claims",class:"shipment-heading-back-btn"})):D("",!0),s("div",Oe,[e.order?(u(),i("div",Se,[s("span",null,"\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u043F\u0440\u0435\u0442\u0435\u043D\u0437\u0438\u044E \u043F\u043E \u0417\u0430\u043A\u0430\u0437\u0443 \u2116 "+p(e.modelValue.id)+" \u043E\u0442 "+p((m=e.orders.find(l=>l.n==e.order))==null?void 0:m.date.substring(0,10)),1)])):(u(),i("div",ke,Fe)),s("div",Le,[Ne,s("div",Me,[k(s("select",{class:"base-select",style:{width:"100%"},"onUpdate:modelValue":a[1]||(a[1]=l=>e.order=l)},[(u(!0),i(b,null,I(e.orders,(l,g)=>(u(),i("option",{key:g,value:l.n},p(l.name),9,Ue))),128))],512),[[B,e.order]])])])])]),s("div",Re,[s("div",Be,[Te,V(d,{data:e.companys,modelValue:e.companyUID,"onUpdate:modelValue":a[2]||(a[2]=l=>e.companyUID=l)},null,8,["data","modelValue"])])])]),s("div",Pe,[je,s("div",Ge,[s("a",{class:C("nav-tab-elem gradient-btn"+(e.data.case==1?" active":"")),onClick:a[3]||(a[3]=l=>e.data.case=1)},He,2),s("a",{class:C("nav-tab-elem gradient-btn"+(e.data.case==2?" active":"")),onClick:a[4]||(a[4]=l=>e.data.case=2)},Je,2),s("a",{class:C("nav-tab-elem gradient-btn"+(e.data.case==3?" active":"")),onClick:a[5]||(a[5]=l=>e.data.case=3)},Ye,2),s("a",{class:C("nav-tab-elem gradient-btn"+(e.data.case==0?" active":"")),onClick:a[6]||(a[6]=l=>e.data.case=0)},Qe,2)])]),s("div",Xe,[s("div",Ze,[s("div",xe,[s("div",es,[e.loading?(u(),i("div",ss,[V(n)])):(u(),E(t,{key:1,data:e.modelValue.order_detail,modelValue:e.data.products,"onUpdate:modelValue":a[7]||(a[7]=l=>e.data.products=l)},null,8,["data","modelValue"]))])])]),s("div",ts,[as,s("div",ls,[k(s("textarea",{class:"claim-info-textarea",name:"","onUpdate:modelValue":a[8]||(a[8]=l=>e.data.message=l)},null,512),[[T,e.data.message]]),s("div",os,[s("input",{class:"claim-info-add-file-input",onChange:a[9]||(a[9]=l=>e.handleFileUpload(l)),type:"file",id:"claim-add-file"+e.cardId},null,40,us),s("label",{class:"claim-info-add-file-label",for:"claim-add-file"+e.cardId},[s("span",ns,p(e.data.files.length),1)],8,ds)])])]),s("div",is,[(u(!0),i(b,null,I(e.data.files,(l,g)=>(u(),i("div",{class:"claim-doc-elem",key:g},[s("div",{class:"claim-doc-elem-file",onClick:Cs=>e.delFile(g)},null,8,rs),s("div",cs,p(l.name),1)]))),128))])])])}var ps=S(Ie,[["render",ms]]);const _s=O({components:{TopNav:L,Preloader:P,PreloaderLocal:w,ClaimCard:ps},setup(){const e=F(),a=H(),r=$(!1),o=$(!1);j(()=>{e.getters.isCompanysLoad||e.dispatch(G.GET_COMPANYS),e.getters.isOrders?e.getters.getClaimNew.length==0&&(r.value=!0,e.dispatch(A.ADD_CLAIMS_NEW,e.getters.getOrdersMaxId).then(()=>{r.value=!1})):(r.value=!0,e.dispatch(q.GET_ORDERS).then(()=>{e.getters.getClaimNew.length==0?e.dispatch(A.ADD_CLAIMS_NEW,e.getters.getOrdersMaxId).then(()=>{r.value=!1}):r.value=!1})),e.commit(y.CLEAR_CLAIMS_SUCCESS)});const _=()=>{o.value=!0,e.dispatch(y.ADD_CLAIMS_NEW,e.getters.getOrdersMaxId).then(()=>{o.value=!1})},v=d=>{e.commit(y.DEL_CLAIMS_NEW,d)},c=async()=>{r.value=!0,await e.getters.getClaimNew.forEach(d=>{let n=new FormData;d.files.forEach((t,m)=>{n.append("files["+m+"]",t)}),n.append("title",d.title),n.append("partner_name",d.partner_name),n.append("partner_guid",d.partner_guid),n.append("id",d.id.toString()),n.append("case",d.case.toString()),n.append("products",JSON.stringify(d.products)),n.append("message",d.message),e.dispatch(A.ADD_CLAIMS,n),a.push({name:"ClaimsSuccess"})}),r.value=!1};return{loading:r,loading_claim:o,calim_new:f(()=>e.getters.getClaimNew),add:_,del:v,send:c}}}),vs={class:"claim-bottom"},hs=s("div",{class:"gradient-btn-text"},"\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u043F\u0440\u0435\u0442\u0435\u043D\u0437\u0438\u044E",-1),gs=[hs];function fs(e,a,r,o,_,v){const c=h("top-nav"),d=h("ClaimCard"),n=h("preloader-local"),t=h("preloader");return u(),i("div",null,[V(c),s("div",null,[(u(!0),i(b,null,I(e.calim_new,(m,l)=>(u(),E(d,{key:l,modelValue:e.calim_new[l],"onUpdate:modelValue":g=>e.calim_new[l]=g,cardId:l,onClose:g=>e.del(l)},null,8,["modelValue","onUpdate:modelValue","cardId","onClose"]))),128))]),s("div",vs,[e.loading_claim?(u(),E(n,{key:0})):(u(),i("div",{key:1,class:"claim-add-basis",onClick:a[0]||(a[0]=(...m)=>e.add&&e.add(...m))},"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C")),s("div",{class:"gradient-btn claim-submit",onClick:a[1]||(a[1]=m=>e.send())},gs)]),e.loading?(u(),E(t,{key:0})):D("",!0)])}var Ds=S(_s,[["render",fs]]);export{Ds as default};
