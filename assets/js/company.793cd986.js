import{a as J,_ as Q}from"./PersonalBar.df0f6373.js";import{N as ee}from"./Notification.4e3d3acf.js";import{m as ae,a as te,b as se,_ as ne,F as ue,C as oe}from"./CompanyCalendar.vue_vue_type_style_index_0_lang.427e5d6d.js";import{_ as le}from"./doc.3b4338ef.js";import{o as t,b as s,a as e,d as S,h as x,L,V as ie,c as z,t as o,k as f,p as _,e as I,m as F,B as X,u as y,z as B,F as j,f as q,U as H,W as Z,X as G,l as Y,j as $,Y as ce,Z as de,i as re,s as U,$ as P,g as me,R as pe,a0 as he,a1 as ve}from"./index.df900fe8.js";import{_ as ye}from"./CompanyBarTop.02cdb813.js";import"./vee-validate.esm.7958b063.js";import"./object.4dd63518.js";const ge={xmlns:"http://www.w3.org/2000/svg",width:"41",height:"20",fill:"none"},_e=e("path",{fill:"#A5A7A9","fill-rule":"evenodd",d:"M37.465 2H18.579l8.064 7.102L37.465 2ZM16.739 3.036 14.713 15.91a1 1 0 0 0 .988 1.156h19.926a1 1 0 0 0 .988-.845l1.978-12.576-11.33 7.436c-.047.03-.094.056-.142.078a.998.998 0 0 1-1.235-.067l-9.107-8.02a.957.957 0 0 1-.04-.037Zm-1.946-.502A3 3 0 0 1 17.757 0h19.926a3 3 0 0 1 2.963 3.466L38.59 16.533a3 3 0 0 1-2.963 2.534H15.7a3 3 0 0 1-2.964-3.467l2.056-13.066Z","clip-rule":"evenodd"},null,-1),fe=e("rect",{width:"8",height:"2",x:"3.7",y:"4",fill:"#A5A7A9",rx:"1"},null,-1),xe=e("rect",{width:"11",height:"2",y:"8",fill:"#A5A7A9",rx:"1"},null,-1),$e=e("rect",{width:"5",height:"2",x:"5.3",y:"12",fill:"#A5A7A9",rx:"1"},null,-1),be=[_e,fe,xe,$e];function Ce(a,d){return t(),s("svg",ge,be)}var K={render:Ce};const Me={class:"company-consultant"},Ae={key:0,class:"company-consultant-wrap content-elem"},we={class:"company-consultant-info"},Ee={key:1,class:"company-consultant-img-box"},De=["src"],ke={key:1,class:"company-consultant-img",src:J,alt:""},Be={class:"company-consultant-info-box"},Le={class:"company-consultant-info-about"},Se={class:"company-consultant-name"},Fe=e("div",{class:"company-consultant-position"},"\u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440",-1),Ve={class:"company-consultant-contact"},Ne=["href"],Re=["href"],Te=["href"],Ge=["title","href"],Ue=e("img",{class:"company-consultant-mail-img",src:K,alt:""},null,-1),je=F("\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C "),qe=[Ue,je],Oe={key:1,class:"company-consultant-wrap content-elem"},Ie={class:"company-consultant-info"},Ze=e("a",{class:"company-consultant-mail"},[e("img",{class:"company-consultant-mail-img",src:K,alt:""}),F("\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C ")],-1),Pe=S({__name:"ManagerCard",props:{manager:{type:Object,required:!0}},setup(a){const d=a,n=x(!1),c=x(!1),g=x("");return L(()=>d.manager,()=>{n.value=!1,c.value=!0,d.manager&&d.manager.image?(g.value="",ie({method:"get",timeout:1e3*3,url:d.manager.image,responseType:"arraybuffer",headers:{"Content-type":"image/jpeg"}}).then(l=>{n.value=!0,c.value=!1,g.value=`data:${l.headers["content-type"]};base64,${btoa(String.fromCharCode(...new Uint8Array(l.data)))}`}).catch(()=>{c.value=!1})):c.value=!1,d.manager.image!=""&&(n.value=!0),g.value=d.manager.image}),(l,u)=>(t(),s("div",Me,[a.manager&&Object.keys(a.manager).length>0?(t(),s("div",Ae,[e("div",we,[c.value?(t(),z(I,{key:0,style:{margin:"auto"}})):(t(),s("div",Ee,[n.value?(t(),s("img",{key:0,class:"company-consultant-img",src:g.value},null,8,De)):(t(),s("img",ke))])),e("div",Be,[e("div",Le,[e("div",Se,o(a.manager.name),1),Fe]),e("div",Ve,[e("a",{class:"company-consultant-phone",href:"tel:"+a.manager.contact},o(a.manager.contact),9,Ne),a.manager.phone1!==""?(t(),s("a",{key:0,class:"company-consultant-phone",href:"tel:"+a.manager.phone1},o(a.manager.phone1),9,Re)):f("",!0),a.manager.phone2!==""?(t(),s("a",{key:1,class:"company-consultant-phone",href:"tel:"+a.manager.phone2},o(a.manager.phone2),9,Te)):f("",!0)])])]),e("a",{class:"company-consultant-mail",title:a.manager.email,href:"mailto:"+a.manager.email},qe,8,Ge)])):(t(),s("div",Oe,[e("div",Ie,[_(I,{style:{margin:"auto"}})]),Ze]))]))}}),We={key:0},ze={class:"content-elem"},Xe={class:"company-head-item-title"},He={class:"company-card-sale"},Ye={class:"company-card-sale-box"},Ke=e("span",{class:"company-card-sale-text"},"\u0421\u043A\u0438\u0434\u043A\u0430",-1),Je={class:"company-card-sale-value"},Qe={class:"company-card-balance"},ea={class:"company-card-balance-box"},aa={key:0,class:"company-head-info-elem l highlight"},ta={key:1,class:"company-head-info-elem l highlight"},sa={class:"company-head-info"},na={class:"company-head-info-row"},ua={class:"company-head-info-elem l"},oa={class:"company-head-info-title"},la={key:0,class:"company-head-info-val"},ia={key:1,class:"company-head-info-val"},ca={key:0,class:"company-head-info-elem r"},da=e("span",{class:"company-head-info-title"},"\u0414\u0430\u0442\u0430 \u043F\u043E\u0433\u0430\u0448\u0435\u043D\u0438\u044F",-1),ra={class:"company-head-info-val"},ma={class:"company-card-footer"},pa={class:"company-head-info-elem l"},ha=e("span",{class:"company-head-info-title"},"\u0414\u043E\u0433\u043E\u0432\u043E\u0440",-1),va={class:"company-head-info-val"},ya={class:"company-head-info-elem \u043A"},ga=e("span",{class:"company-head-info-title"},"\u041B\u0438\u043C\u0438\u0442",-1),_a={class:"company-head-info-val"},fa={class:"company-head-sale"},xa={class:"sale-val"},$a={tooltip:"\u0421\u0443\u043C\u043C\u0430 \u043E\u0442\u0433\u0440\u0443\u0437\u043E\u043A \u043F\u043E \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0443",flow:"up"},ba={class:"sale-val-money"},Ca=e("div",{tooltip:"\u041F\u043B\u0430\u0442\u0435\u0436\u0438",flow:"left"},[e("svg",{width:"10",height:"14",viewBox:"0 0 10 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M8.84625 6.4597L2.68453 0.298103C2.54202 0.155477 2.35178 0.076904 2.14893 0.0769041C1.94608 0.0769041 1.75584 0.155478 1.61332 0.298103L1.15956 0.751758C0.864288 1.04737 0.864288 1.52781 1.15956 1.82297L6.3337 6.99711L1.15382 12.177C1.01131 12.3196 0.932619 12.5097 0.932619 12.7125C0.932619 12.9154 1.01131 13.1056 1.15382 13.2483L1.60759 13.7019C1.75021 13.8445 1.94034 13.9231 2.14319 13.9231C2.34604 13.9231 2.53628 13.8445 2.6788 13.7019L8.84625 7.53463C8.9891 7.39155 9.06756 7.20052 9.06711 6.99745C9.06756 6.79358 8.9891 6.60267 8.84625 6.4597Z",fill:"#A5A7A9"})])],-1),Ma=[Ca],Aa={key:1,class:"doc"},wa={class:"content-elem"},Ea={class:"company-head-item-title"},Da={class:"company-card-sale"},ka={class:"company-card-sale-box"},Ba=e("span",{class:"company-card-sale-text"},"\u0421\u043A\u0438\u0434\u043A\u0430",-1),La={class:"company-card-sale-value"},Sa={class:"company-card-balance"},Fa={class:"company-card-balance-box"},Va={key:0,class:"company-head-info-elem l highlight"},Na={key:1,class:"company-head-info-elem l highlight"},Ra={class:"company-head-info",style:{display:"flex","justify-content":"space-between"}},Ta={key:0,class:"company-head-list-content"},Ga={key:0,class:"company-head-list"},Ua=["onClick"],ja={key:1,class:"company-head-list-content"},qa=e("span",null,"\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0441\u0443\u043C\u043C\u0443 \u043F\u043B\u0430\u0442\u0435\u0436\u0430",-1),Oa={style:{padding:"10px 0px",display:"flex","justify-content":"flex-start","align-items":"baseline"}},Ia=e("div",{style:{padding:"0px 5px"}},"\u0440\u0443\u0431.",-1),Za=F(),Pa=e("div",{style:{padding:"0px 5px"}},"\u043A\u043E\u043F.",-1),Wa={style:{display:"flex","justify-content":"unset","flex-direction":"column","flex-wrap":"wrap"}},za=["disabled"],Xa=["value"],Ha={class:"company-head-sale"},Ya={class:"sale-val"},Ka={tooltip:"\u0421\u0443\u043C\u043C\u0430 \u043E\u0442\u0433\u0440\u0443\u0437\u043E\u043A \u043F\u043E \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0443",flow:"up"},Ja={class:"sale-val-money"},Qa=e("div",{tooltip:"\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",flow:"left"},[e("svg",{width:"10",height:"14",viewBox:"0 0 10 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M8.84625 6.4597L2.68453 0.298103C2.54202 0.155477 2.35178 0.076904 2.14893 0.0769041C1.94608 0.0769041 1.75584 0.155478 1.61332 0.298103L1.15956 0.751758C0.864288 1.04737 0.864288 1.52781 1.15956 1.82297L6.3337 6.99711L1.15382 12.177C1.01131 12.3196 0.932619 12.5097 0.932619 12.7125C0.932619 12.9154 1.01131 13.1056 1.15382 13.2483L1.60759 13.7019C1.75021 13.8445 1.94034 13.9231 2.14319 13.9231C2.34604 13.9231 2.53628 13.8445 2.6788 13.7019L8.84625 7.53463C8.9891 7.39155 9.06756 7.20052 9.06711 6.99745C9.06756 6.79358 8.9891 6.60267 8.84625 6.4597Z",fill:"#A5A7A9"})])],-1),et=[Qa],at={key:1,class:"company-head-item yellow"},tt=Y('<div class="content-elem active"><div class="company-head-item-title" style="margin-right:100px;">\u0414\u043E\u0433\u043E\u0432\u043E\u0440 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442</div><div class="company-card-sale"><div class="company-card-sale-box"><span class="company-card-sale-text">\u0421\u043A\u0438\u0434\u043A\u0430</span><div class="company-card-sale-value">\u0421\u043A\u0438\u0434\u043A\u0430 %</div></div></div><div class="company-card-balance"><div class="company-card-balance-box"><div class="company-head-info-elem l highlight">\u0411\u0430\u043B\u0430\u043D\u0441: 0 \u20BD</div></div></div><div class="company-head-info"><div class="company-head-info-row"><div class="company-head-info-elem l"><span class="company-head-info-title">\u041E\u0442\u0441\u0440\u043E\u0447\u043A\u0430</span><span class="company-head-info-val">0 \u0434\u043D\u0435\u0439</span></div><div class="company-head-info-elem r"><span class="company-head-info-title">\u0414\u0430\u0442\u0430 \u043F\u043E\u0433\u0430\u0448\u0435\u043D\u0438\u044F</span><span class="company-head-info-val">--.--.----</span></div></div></div></div>',1),st=e("div",{class:"company-head-sale",tooltip:"\u0421\u0443\u043C\u043C\u0430 \u043E\u0442\u0433\u0440\u0443\u0437\u043E\u043A \u043F\u043E \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0443",flow:"up"},[e("div",{class:"sale-val"},[e("span",{class:"sale-val-money"},"0 \u20BD")])],-1),nt=[tt,st],W=S({__name:"CompanyStorageCard",props:{data:{type:Object},active:{type:Boolean}},emits:["onClick"],setup(a,{emit:d}){var b,w,O;const n=a,c=x(!1);X("docDate");let g=function(h){let p=["\u0434\u043D\u0435\u0439","\u0434\u0435\u043D\u044C","\u0434\u043D\u044F"],m=h%100;m=m>=20?m%10:m;let k=0;return m===0||m>=5&&m<=20?k=0:m==1?k=1:k=2,p[k]};const l=x(!1),u=x(0),i=x(0),r=x(""),v=new Date().toLocaleDateString("ru"),E=(b=n.data)==null?void 0:b.contract,D="f59a4d06-2f35-11e7-8fdb-0025907c0298",A=((O=(w=n.data)==null?void 0:w.guid)!=null?O:"")<D?"\u0441\u043F\u0435\u0446\u043E\u0434\u0435\u0436\u0434\u0443":"\u0441\u043F\u0435\u0446\u043E\u0431\u0443\u0432\u044C",C=function(h,p){let m=(""+h).split(".");m[1]?i.value=Number(m[1]):i.value=0,u.value=Math.trunc(h),l.value=!0},V=function(){let h=i.value<10?"0":"";return`\u041E\u043F\u043B\u0430\u0442\u0430 \u043F\u043E \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0443 \u2116 ${E} \u043E\u0442 ${v}, \u0437\u0430 ${A} \u043D\u0430 \u0441\u0443\u043C\u043C\u0443 ${u.value.toLocaleString("ru")} \u0440\u0443\u0431\u043B\u0435\u0439 ${h}${i.value} \u043A\u043E\u043F \u0432 \u0442.\u0447. \u041D\u0414\u0421 20% ${T()}`},R=function(h,p){return p<10?G.exports.toNumber(h+G.exports.toNumber("0.0"+p.toString())):G.exports.toNumber(h+"."+p)},T=function(){return(R(u.value,i.value)*.2).toFixed(2)},N=function(){var p;let h=document.querySelector("#testing-code");h==null||h.setAttribute("type","text"),h==null||h.select(),document.execCommand("copy"),h==null||h.setAttribute("type","hidden"),(p=window==null?void 0:window.getSelection())==null||p.removeAllRanges(),alert("\u0422\u0435\u043A\u0441\u0442 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D \u0432 \u0431\u0443\u0444\u0435\u0440 \u043E\u0431\u043C\u0435\u043D\u0430.")};return L(u,async(h,p)=>{r.value=V()}),L(i,async(h,p)=>{r.value=V()}),(h,p)=>a.data?(t(),s("div",{key:0,class:B("company-head-item "+(a.data.debt>1e3?"red":"yellow")+(a.active?" content-elem-active":"")+(c.value?" doc":"")),onClick:p[7]||(p[7]=m=>h.$emit("onClick",m))},[c.value?(t(),s("div",Aa,[e("div",wa,[e("div",Ea,o(a.data.name),1),e("div",Da,[e("div",ka,[Ba,e("div",La,o(a.data.discount)+" %",1)])]),e("div",Sa,[e("div",Fa,[a.data.balance-a.data.debt<0?(t(),s("div",Va,"\u0417\u0430\u0434\u043E\u043B\u0436\u0435\u043D\u043D\u043E\u0441\u0442\u044C: "+o((a.data.balance-a.data.debt).toLocaleString("ru").replace(",",".").substring(1))+" \u20BD",1)):(t(),s("div",Na,"\u0411\u0430\u043B\u0430\u043D\u0441: "+o(a.data.balance.toLocaleString("ru").replace(",","."))+" \u20BD",1))])]),e("div",Ra,[e("div",{class:B("company-head-info-row"+(l.value?" passive-border":" active-border")),onClick:p[1]||(p[1]=m=>l.value=!1)}," \u041F\u043B\u0430\u0442\u0435\u0436\u0438 ",2),e("div",{class:B("company-head-info-row"+(l.value?" active-border":" passive-border")),onClick:p[2]||(p[2]=m=>l.value=!0)}," \u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043B\u0430\u0442\u0435\u0436\u0430 ",2)]),l.value?(t(),s("div",ja,[qa,e("div",Oa,[_(Z,{modelValue:u.value,"onUpdate:modelValue":p[3]||(p[3]=m=>u.value=m),step:1,min:0,style:"max-width: 100%"},null,8,["modelValue"]),Ia,_(Z,{modelValue:i.value,"onUpdate:modelValue":p[4]||(p[4]=m=>i.value=m),min:0,max:99},null,8,["modelValue"]),Za,Pa]),e("div",Wa,[e("textarea",{class:"order-comment-textarea",disabled:r.value===""},o(r.value),9,za),e("input",{type:"hidden",id:"testing-code",value:r.value},null,8,Xa),e("span",{style:{"text-align":"center",padding:"5px 0px"},onClick:p[5]||(p[5]=m=>N())},"\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C")])])):(t(),s("div",Ta,[a.data.documents?(t(),s("ul",Ga,[(t(!0),s(j,null,q(a.data.documents,(m,k)=>(t(),s("li",{style:{"align-items":"center"},class:"company-head-list-elem",key:k},[_(y(le),{class:"company-head-list-img",style:{width:"20px",height:"21px"}}),e("a",{style:H(Date.parse(m.expires_date)>new Date().getTime()?"":"background-color: #B9342D; color: white;"),class:B([Date.parse(m.expires_date)>new Date().getTime()?"":"debt","company-head-list-link"]),onClick:zt=>C(m.debt,m.expires_date)},o(m.debt.toLocaleString("ru").replace(",","."))+" \u20BD \u0434\u043E "+o(m.expires)+" / \u0423\u041F\u0414 "+o(m.number),15,Ua)]))),128))])):f("",!0)]))]),e("div",Ha,[e("div",Ya,[e("span",Ka,[e("span",Ja,o(a.data.spent.toLocaleString("ru").replace(",","."))+" \u20BD",1)])]),e("div",{class:B("company-card-showdoc"+(c.value?" active":"")),onClick:p[6]||(p[6]=m=>c.value=!c.value)},et,2)])])):(t(),s("div",We,[e("div",ze,[e("div",Xe,o(a.data.name),1),e("div",He,[e("div",Ye,[Ke,e("div",Je,o(a.data.discount)+" %",1)])]),e("div",Qe,[e("div",ea,[a.data.balance-a.data.debt<0?(t(),s("div",aa,"\u0417\u0430\u0434\u043E\u043B\u0436\u0435\u043D\u043D\u043E\u0441\u0442\u044C: "+o((a.data.balance-a.data.debt).toLocaleString("ru").replace(",",".").substring(1))+" \u20BD",1)):(t(),s("div",ta,"\u0411\u0430\u043B\u0430\u043D\u0441: "+o(a.data.balance.toLocaleString("ru").replace(",","."))+" \u20BD",1))])]),e("div",sa,[e("div",na,[e("div",ua,[e("span",oa,o(a.data.case),1),a.data.case==="\u043E\u0442\u0441\u0440\u043E\u0447\u043A\u0430"?(t(),s("span",la,o(a.data.deferment)+" "+o(y(g)(a.data.deferment)),1)):f("",!0),a.data.case==="\u043F\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u0430"?(t(),s("span",ia,o(a.data.percent)+"%",1)):f("",!0)]),a.data.case!=="\u043F\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u0430"?(t(),s("div",ca,[da,e("span",ra,o(a.data.date),1)])):f("",!0)])]),e("div",ma,[e("div",pa,[ha,e("span",va,o(a.data.contract),1)]),e("div",ya,[ga,e("span",_a,o(Number(a.data.limit).toLocaleString("ru").replace(",","."))+" \u20BD",1)])])]),e("div",fa,[e("div",xa,[e("span",$a,[e("span",ba,o(a.data.spent.toLocaleString("ru").replace(",","."))+" \u20BD",1)])]),e("div",{class:B("company-card-showdoc"+(c.value?" active":"")),onClick:p[0]||(p[0]=m=>c.value=!c.value)},Ma,2)])]))],2)):(t(),s("div",at,nt))}}),ut={key:0,class:"company-head-wrap"},ot={key:1,class:"company-head-wrap"},lt=S({__name:"CompanyStorageBar",props:{data:{type:Array,required:!0},modelValue:{type:Number}},emits:["update:modelValue","prev","next"],setup(a,{emit:d}){const n=a,c=250,g=u=>{const i=n.data[u].guid;let r=0,v=0,E=0,D=0;const M=document.querySelector("#"+i+"-"+u);M&&(E=M.getBoundingClientRect().x,D=M.getBoundingClientRect().x+M.getBoundingClientRect().width);const A=document.querySelector(".company-head-elem");A&&(r=A.getBoundingClientRect().x,v=A.getBoundingClientRect().x+A.getBoundingClientRect().width);const C=document.querySelector(".company-head-wrap");D>v?(C&&(C.scrollLeft+=c),setTimeout(()=>{d("update:modelValue",u)},250)):E<r?(C&&(C.scrollLeft-=c),setTimeout(()=>{d("update:modelValue",u)},250)):d("update:modelValue",u)},l=u=>{const i=document.querySelector(".company-head-wrap");i&&(i.scrollLeft+=u),setTimeout(()=>{u>0?d("next"):d("prev")},250)};return(u,i)=>a.data.length!==0?(t(),s("div",ut,[e("div",{class:"btn btn-prev",onClick:i[0]||(i[0]=r=>l(-c))}," \u276E "),(t(!0),s(j,null,q(a.data,(r,v)=>(t(),z(W,{id:r.guid+"-"+v,key:v,data:r||null,active:v===a.modelValue,onOnClick:E=>g(v)},null,8,["id","data","active","onOnClick"]))),128)),e("div",{class:"btn btn-next",onClick:i[1]||(i[1]=r=>l(c))}," \u276F ")])):(t(),s("div",ot,[_(W)]))}}),it={class:"company-sale sale"},ct={class:"sale-head"},dt={class:"sale-title"},rt={key:0,class:"sale-lacks"},mt=F("\u041D\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442 "),pt={class:"sale-progressbar-wrap"},ht={class:"sale-progressbar content-elem tooltip"},vt={class:"sale-progressbar-val"},yt={class:"sale-progressbar-val-money"},gt={class:"sale-progressbar-val-percent"},_t={class:"sale-progressbar-money"},ft={class:"sale-progressbar-min"},xt={class:"sale-progressbar-max"},$t={class:"company-sale-card"},bt={class:"table"},Ct=e("div",{class:"table-row table-heading"},[e("div",{class:"table-elem"},"\u0421\u0443\u043C\u043C\u0430 \u0437\u0430\u043A\u0430\u0437\u0430,\u0440\u0443\u0431"),e("div",{class:"table-elem"},"\u0421\u0443\u043C\u043C\u0430 \u0437\u0430\u043A\u0430\u0437\u0430,\u0440\u0443\u0431"),e("div",{class:"table-elem"}," \u0421\u043A\u0438\u0434\u043A\u0430,% ")],-1),Mt={key:0,class:"table-elem"},At={key:1,class:"table-elem"},wt={key:2,class:"table-elem"},Et={key:3,class:"table-elem last"},Dt={key:4,class:"table-elem last"},kt={key:5,class:"table-elem"},Bt=S({__name:"CompanySaleBar",props:{spent:{type:Number,required:!0}},setup(a){const d=a,n=[{progressMoneyMin:0,progressMoneyMax:5e4,discount:0,next:2},{progressMoneyMin:5e4,progressMoneyMax:99e3,discount:2,next:3},{progressMoneyMin:1e5,progressMoneyMax:199999,discount:3,next:4},{progressMoneyMin:2e5,progressMoneyMax:399999,discount:4,next:6},{progressMoneyMin:4e5,progressMoneyMax:599999,discount:6,next:8},{progressMoneyMin:6e5,progressMoneyMax:799999,discount:8,next:9},{progressMoneyMin:8e5,progressMoneyMax:999999,discount:9,next:10},{progressMoneyMin:1e6,progressMoneyMax:5999999,discount:10,next:15},{progressMoneyMin:6e6,progressMoneyMax:9999999,discount:15,next:17},{progressMoneyMin:1e7,progressMoneyMax:19999999,discount:17,next:18},{progressMoneyMin:2e7,progressMoneyMax:29999999,discount:18,next:20},{progressMoneyMin:3e7,progressMoneyMax:1/0,discount:20,next:0}];let c=$(()=>{let u=n.filter(i=>d.spent>=i.progressMoneyMin&&d.spent<i.progressMoneyMax);return u.length>0?u[0]:n[0]}),g=$(()=>c.value.progressMoneyMax!=1/0?d.spent/c.value.progressMoneyMax*100:100);const l=$(()=>c.value.progressMoneyMax-d.spent);return(u,i)=>(t(),s("div",it,[e("div",ct,[e("div",dt,"\u0421\u043A\u0438\u0434\u043A\u0430 "+o(y(c).discount)+" %",1),y(l)!=1/0?(t(),s("div",rt,[mt,e("span",null,o(y(l).toLocaleString("ru").replace(",","."))+"\xA0\u20BD",1),F(" \u0434\u043E \u0441\u043A\u0438\u0434\u043A\u0438 "+o(y(c).next)+" %",1)])):f("",!0)]),e("div",pt,[e("div",ht,[e("div",{class:"sale-progressbar-line",style:H("width: "+y(g)+"%")},[e("div",vt,[e("div",null,[e("span",yt,"("+o(a.spent.toLocaleString("ru").replace(",","."))+"\xA0\u20BD)",1),e("span",gt,o(y(g).toFixed(2))+"%",1)])])],4)]),e("div",_t,[e("div",ft,o(y(c).progressMoneyMin.toLocaleString("ru")),1),e("div",xt,o(y(c).progressMoneyMax.toLocaleString("ru")),1)])]),e("div",$t,[e("div",bt,[Ct,(t(!0),s(j,null,q(y(n),(r,v)=>(t(),s("div",{class:"table-row",key:v},[v!=0&&r.next!=0?(t(),s("div",Mt,"\u041E\u0442 "+o(r.progressMoneyMin.toLocaleString("ru")),1)):f("",!0),v!=0&&r.next!=0?(t(),s("div",At,"\u0434\u043E "+o(r.progressMoneyMax.toLocaleString("ru")),1)):f("",!0),v!=0&&r.next!=0?(t(),s("div",wt,o(r.discount),1)):f("",!0),r.next==0?(t(),s("div",Et)):f("",!0),r.next==0?(t(),s("div",Dt,"\u0411\u043E\u043B\u0435\u0435 "+o(r.progressMoneyMin.toLocaleString("ru")),1)):f("",!0),r.next==0?(t(),s("div",kt,o(r.discount),1)):f("",!0)]))),128))])])]))}}),Lt={xmlns:"http://www.w3.org/2000/svg",width:"18",height:"19",fill:"none"},St=e("rect",{width:"2.254",height:"22.535",x:".25",y:"2.079",fill:"#A5A7A9",rx:"1.127",transform:"rotate(-45 .25 2.08)"},null,-1),Ft=e("rect",{width:"2.254",height:"22.535",fill:"#A5A7A9",rx:"1.127",transform:"scale(-1 1) rotate(-45 -6.254 22.198)"},null,-1),Vt=[St,Ft];function Nt(a,d){return t(),s("svg",Lt,Vt)}var Rt={render:Nt};const Tt={class:"company-calendar-box content-elem"},Gt=Y('<form class="company-search-wrap" action=""><div class="company-search-input-wrap"><input class="company-search-input" type="text" placeholder="\u041F\u043E\u0438\u0441\u043A"><img class="company-search-input-clear" src="'+Rt+'" alt=""></div><button class="company-search-btn gradient-btn"><img class="company-search-btn-img" src="'+de+'" alt=""></button></form>',1),Ut=S({__name:"CompanyCalendar",props:{data:{type:Array}},setup(a){var u;const d=a,n=x(),c=x((u=X("docDate"))!=null?u:"");L(c,i=>{n.value.getApi().gotoDate(new Date(i))}),ce(()=>{n.value.getApi().today()});let g=$(()=>d.data===null?[]:d.data),l=$(()=>({plugins:[ae,te,se],headerToolbar:{left:"today prev,next",center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay"},initialView:"dayGridMonth",duration:{days:3},locale:ne,events:g.value?g.value.map(i=>({title:`\u0423\u041F\u0414 ${i.number} \u043D\u0430 ${i.debt}\u20BD`,start:i.expires_date,backgroundColor:"#378006",allDay:!0,display:"block"})):[]}));return(i,r)=>(t(),s("div",Tt,[Gt,_(y(ue),{ref_key:"fullCalendar",ref:n,options:y(l)},null,8,["options"])]))}}),jt={key:0},qt={class:"top-line product-page"},Ot={class:"company-head"},It={class:"company-head-elem"},Zt={class:"company-head-elem"},Pt={id:"CompanyCalendar"},Wt={class:"company-calendar-wrap"},ts=S({__name:"company",props:["id"],setup(a){const d=a,n=me(),c=pe(),g=x(!1),l=x(d.id),u=x(0),i=x(""),r=$(()=>n.getters.getCompanyData(l.value)),v=$(()=>n.getters.getCompanyStoragesData(l.value)),E=$(()=>n.getters.getCompanysList),D=$(()=>n.getters.getCompanySpent(l.value)),M=$(()=>n.getters.getManagerUid(l.value)),A=$(()=>n.getters.getManager),C=$({get:()=>n.getters.getLoader,set:N=>n.commit(he.SET_LOADER,N)}),V=$(()=>v.value.length===0?null:v.value[u.value?u.value:0].documents);L(()=>d.id,()=>{d.id!==""?l.value=d.id:l.value=n.getters.getCompanys===[]?"":n.getters.getCompanys[0].uid}),L(l,()=>{v.value.length===0?u.value=null:u.value=0,c.push(`/company/${l.value}`),n.commit(P.CLEAR_MANAGER),setTimeout(()=>n.dispatch(U.GET_MANAGER,M.value),1e3)}),re(()=>{n.getters.isCompanysLoad?(d.id!==""?(l.value=d.id,n.commit(P.CLEAR_MANAGER),n.dispatch(U.GET_MANAGER,M.value)):l.value=n.getters.getCompanys===[]?"":n.getters.getCompanys[0].uid,g.value=!0):(C.value=!0,Promise.all([n.dispatch(U.GET_COMPANYS)]).finally(()=>{setTimeout(()=>{n.getters.isCompanysLoad&&(l.value=n.getters.getCompanys===[]?"":n.getters.getCompanys[0].uid,g.value=!0),C.value=!1},500)}))}),ve("docDate",i);const R=()=>{u.value!=null&&u.value<v.value.length-1&&(u.value=u.value+1)},T=()=>{u.value&&u.value>0&&(u.value=u.value-1)};return(N,b)=>g.value?(t(),s("div",jt,[e("div",qt,[_(ye,{data:y(E),modelValue:l.value,"onUpdate:modelValue":b[0]||(b[0]=w=>l.value=w)},null,8,["data","modelValue"]),_(ee),_(Q)]),e("div",Ot,[e("div",It,[_(lt,{data:y(v),modelValue:u.value,"onUpdate:modelValue":b[1]||(b[1]=w=>u.value=w),onNext:b[2]||(b[2]=w=>R()),onPrev:b[3]||(b[3]=w=>T())},null,8,["data","modelValue"])]),e("div",Zt,[_(oe,{data:y(r)},null,8,["data"])])]),_(Bt,{spent:y(D)},null,8,["spent"]),e("div",Pt,[e("div",Wt,[_(Ut,{data:y(V)},null,8,["data"]),_(Pe,{manager:y(A)},null,8,["manager"])])])])):f("",!0)}});export{ts as default};
