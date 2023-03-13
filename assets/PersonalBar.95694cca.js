import{_ as E,o as s,b as i,a as t,t as v,k as C,z as _,d as k,g as S,h as g,A as D,j as d,B as G,i as H,P as x,r as T,p as m,u as r,F as B,f as Z,c as j,D as I,w as R,E as U,m as y,G as P,H as W}from"./index.eb7d5b0d.js";var z="/assets/user.def15e8d.png";const q={},J={class:"top-line-link",href:"#"},K=t("svg",{class:"top-line-link-img",width:"26",height:"20",viewBox:"0 0 26 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("rect",{class:"stroke",x:"1",y:"1",width:"24",height:"17.0667",rx:"2",stroke:"#A5A7A9","stroke-width":"2"}),t("rect",{class:"fill",x:"1.91412",y:"0.866699",width:"15.4602",height:"1.73333",rx:"0.866667",transform:"rotate(37.1759 1.91412 0.866699)",fill:"#A5A7A9"}),t("rect",{class:"fill",width:"15.4602",height:"1.73333",rx:"0.866667",transform:"matrix(-0.796784 0.604264 0.604264 0.796784 24.1801 0.866699)",fill:"#A5A7A9"})],-1),Q=[K];function X(a,e,o,n,u,f){return s(),i("a",J,Q)}var Y=E(q,[["render",X]]);const tt={props:{amount:{type:Number,require:!0}},data(){return{link:"top-line-link",notification:"top-line-notification",active:"active"}}},et=t("svg",{class:"top-line-link-img",width:"24",height:"27",viewBox:"0 0 24 27",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M22.8411 21.7618L22.769 21.831L22.8411 21.7617C20.7863 19.6188 19.6547 16.8039 19.6547 13.8351V11.498C19.6547 8.06943 17.393 5.16002 14.2837 4.18163V3.19727C14.2837 1.93046 13.2532 0.9 11.9864 0.9C10.7196 0.9 9.68912 1.93046 9.68912 3.19727V4.18163C6.57977 5.16002 4.31803 8.06938 4.31803 11.498V13.8351C4.31803 16.804 3.18649 19.6188 1.13164 21.7617C0.900786 22.0025 0.835909 22.3577 0.966767 22.6645C1.09762 22.9713 1.39896 23.1703 1.73248 23.1703H8.3172C8.69703 24.8455 10.1977 26.1 11.9864 26.1C13.7751 26.1 15.2757 24.8455 15.6556 23.1703H22.2403C22.5738 23.1703 22.8751 22.9712 23.006 22.6645C23.1368 22.3577 23.0719 22.0025 22.8411 21.7618ZM11.354 3.19727C11.354 2.84864 11.6378 2.56484 11.9864 2.56484C12.335 2.56484 12.6188 2.84864 12.6188 3.19727V3.8559C12.4103 3.83871 12.1994 3.82969 11.9864 3.82969C11.7734 3.82969 11.5625 3.83871 11.354 3.8559V3.19727ZM11.9864 24.4352C11.1259 24.4352 10.3848 23.914 10.0619 23.1703H13.9109C13.588 23.914 12.8468 24.4352 11.9864 24.4352ZM3.50859 21.5055C5.1145 19.2837 5.98287 16.6182 5.98287 13.8351V11.498C5.98287 8.1878 8.67614 5.49453 11.9864 5.49453C15.2966 5.49453 17.9899 8.1878 17.9899 11.498V13.8351C17.9899 16.6182 18.8583 19.2837 20.4642 21.5055H3.50859Z",fill:"#A5A7A9",stroke:"#A5A7A9","stroke-width":"0.2"})],-1),ot={key:0,class:"top-line-notification-val"},st={class:"top-line-notification-num"};function nt(a,e,o,n,u,f){return s(),i("a",{class:_([u.link,u.notification,o.amount>0?u.active:""]),href:"#"},[et,o.amount>0?(s(),i("div",ot,[t("div",st,v(o.amount),1)])):C("",!0)],2)}var it=E(tt,[["render",nt]]);const at=["src"],lt={key:1,class:"company-consultant-img",src:z,alt:""},ut=k({__name:"Avatar",props:{image:{type:String},loading:{type:Boolean,default:!1}},emits:["click"],setup(a,{emit:e}){return(o,n)=>(s(),i("div",{class:"top-line-account",onClick:n[0]||(n[0]=u=>o.$emit("click"))},[t("div",{class:_(["top-line-account-img-box",{loading:a.loading}])},[a.image!=""?(s(),i("img",{key:0,class:"top-line-account-img",src:a.image},null,8,at)):(s(),i("img",lt))],2)]))}}),ct={class:"top-line-account-name-fio"},rt={class:"top-line-account-name-mail"},pt=k({__name:"Name",props:{personal:{type:Object},loading:{type:Boolean,default:!1}},emits:["click"],setup(a,{emit:e}){return(o,n)=>(s(),i("div",{class:"top-line-account",onClick:n[0]||(n[0]=u=>o.$emit("click"))},[t("div",{class:_(["top-line-account-name-box",{loading:a.loading}])},[t("div",ct,v(a.personal.name),1),t("div",rt,v(a.personal.email),1)],2)]))}}),dt={class:"top-line-button"},mt={key:0,class:"popup-wrap"},_t=y("\u041F\u0440\u043E\u0444\u0438\u043B\u044C"),gt={class:"top-line-dropdown-link lock"},ft=y("\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F "),vt={class:"tooltip"},Ct=t("span",{style:{left:"-120px",top:"-20px"},class:"tooltiptext"},"\u0420\u0430\u0437\u0434\u0435\u043B \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435",-1),kt=t("a",{class:"top-line-dropdown-delimiter"},null,-1),$t=k({__name:"PersonalBar",setup(a){var $;const e=S(),o=g(!1),n=g(($=D("showNotificationBar"))!=null?$:!1),u=A=>{e.commit(P.REMOVE_POPUP,A)},f=()=>{o.value=!0,setTimeout(()=>{e.commit(P.REMOVE_ALL_POPUP),o.value=!1},300)},M=()=>{e.dispatch(W.LOGOUT)},V=d(()=>e.getters.getWSMessageCnt),L=d(()=>e.getters.getWSMessagePopup),O=d(()=>e.getters.getWSMessagePopupCnt),h=d(()=>e.getters.isProfileLoading),F=d(()=>e.getters.getProfilePersonal),N=d(()=>e.getters.getProfileImage),p=g(!1),w=g(null);return G(w,()=>{p.value=!1}),H(()=>{e.getters.isProfileLoad||e.dispatch(x.GET_PROFILE).then(()=>{e.dispatch(x.GET_IMAGE)})}),(A,l)=>{const b=T("router-link");return s(),i(B,null,[t("div",dt,[m(Y),m(it,{amount:r(V),tooltip:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043E\u043F\u043E\u0432\u0435\u0449\u0435\u043D\u0438\u044F",onClick:l[0]||(l[0]=c=>n.value=!n.value)},null,8,["amount"]),m(ut,{image:r(N),loading:r(h),onClick:l[1]||(l[1]=c=>p.value=!p.value)},null,8,["image","loading"]),m(pt,{personal:r(F),loading:r(h),onClick:l[2]||(l[2]=c=>p.value=!p.value)},null,8,["personal","loading"])]),n.value?C("",!0):(s(),i("div",mt,[r(O)!=0?(s(),i("div",{key:0,class:"popup clear-btn",onClick:l[3]||(l[3]=c=>f())},"\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u0432\u0441\u0435")):C("",!0),(s(!0),i(B,null,Z(r(L),c=>(s(),j(I,{class:_({close:o.value}),key:c.id,message:c,onClose:ht=>u(c.id),auto_close:""},null,8,["class","message","onClose"]))),128))])),t("div",{class:_(["top-line-dropdown",{active:p.value}]),ref_key:"target",ref:w},[m(b,{class:"top-line-dropdown-link",tag:"a",to:"/profile"},{default:R(()=>[_t]),_:1}),t("a",gt,[ft,t("span",vt,[m(r(U)),Ct])]),kt,t("a",{class:"top-line-dropdown-link",onClick:l[4]||(l[4]=c=>M())},"\u0412\u044B\u0445\u043E\u0434")],2)],64)}}});export{$t as _,z as a};
