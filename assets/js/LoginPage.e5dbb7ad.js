import{d as L,h as p,j as d,b as h,u as s,a as o,p as l,w as A,k as V,W as w,ah as k,g as T,R as y,$ as F,b0 as m,I as R,s as S,P as z,b1 as B,o as g,ay as x,aN as D}from"./index.96b825e6.js";import{d as _,F as M,a as E,E as N}from"./vee-validate.esm.466aae41.js";var O="/assets/img/logo.a8cca4dc.png";const P={key:0,class:"authorization"},U={class:"authorization-body"},G=o("div",{class:"authorization-logo"},[o("img",{src:O,alt:"\u043B\u043E\u0433\u043E\u0442\u0438\u043F"})],-1),I={class:"authorization-check"},q=o("span",{class:"checkbox-custom"},null,-1),H=o("span",{class:"check-txt"},"\u0417\u0430\u043F\u043E\u043C\u043D\u0438\u0442\u044C \u043C\u0435\u043D\u044F",-1),W=["disabled"],$=o("div",{class:"authorization-bottom"}," Produced by Expert Workwear ",-1),J=L({__name:"LoginPage",setup(j){const e=T(),f=y(),a=p({login:"",password:""}),c=p(!1),i=d({get:()=>e.getters.getLoader,set:u=>e.commit(F.SET_LOADER,u)}),v=d(()=>e.getters.isAuthenticated),b=d(()=>e.getters.getLoginErrorMsg);_("required",u=>!u||!u.length?"\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435":!0),_("minLength",(u,[t])=>!u||!u.length?!0:u.length<t?`\u041C\u0438\u043D\u0438\u043C\u0443\u043C ${t} \u0441\u0438\u043C\u0432\u043E\u043B\u0430`:!0);let r=d({get:()=>e.getters.getLoginError,set:()=>e.commit(m.CLEAR_LOGIN_ERROR)}),C=()=>{i.value=!0,setTimeout(()=>{e.dispatch(R.LOGIN,a.value).then(()=>{c.value&&e.commit(m.SET_SAVE_AUTH),e.commit(m.SET_AUTH_LOGIN,a.value.login),Promise.all([e.dispatch(S.GET_COMPANYS),e.dispatch(z.GET_PROFILE)]).catch(()=>{a.value.password="",setTimeout(()=>{i.value=!1},3e3)}).finally(()=>{i.value=!1,e.dispatch(B.AUTH_WS),f.push({name:"Main"})})}).catch(()=>{a.value.password="",setTimeout(()=>{i.value=!1},3e3)})},500)};return(u,t)=>(g(),h("div",null,[s(v)?V("",!0):(g(),h("div",P,[o("div",U,[G,l(s(M),{onSubmit:s(C),class:"authorization-form"},{default:A(()=>[l(s(E),{as:"input",modelValue:a.value.login,"onUpdate:modelValue":t[0]||(t[0]=n=>a.value.login=n),class:"authorization-input",name:"Login",placeholder:"\u041B\u043E\u0433\u0438\u043D",autocomplete:"off",rules:"required|minLength:3"},null,8,["modelValue"]),l(s(N),{name:"Login"}),l(s(E),{as:"input",type:"password",modelValue:a.value.password,"onUpdate:modelValue":t[1]||(t[1]=n=>a.value.password=n),class:"authorization-input",name:"password",placeholder:"\u041F\u0430\u0440\u043E\u043B\u044C",autocomplete:"off",rules:"required|minLength:3"},null,8,["modelValue"]),o("label",I,[x(o("input",{"onUpdate:modelValue":t[2]||(t[2]=n=>c.value=n),class:"check-input",type:"checkbox",name:"remember"},null,512),[[D,c.value]]),q,H]),o("button",{class:"authorization-btn",type:"submit",disabled:s(i)},"\u0412\u043E\u0439\u0442\u0438",8,W)]),_:1},8,["onSubmit"])]),$])),l(k,{modelValue:s(r),"onUpdate:modelValue":t[3]||(t[3]=n=>w(r)?r.value=n:r=n),message:s(b)},null,8,["modelValue","message"])]))}});export{J as default};
