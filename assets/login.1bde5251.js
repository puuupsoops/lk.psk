import{d as A,g as p,i as d,b as h,u as s,a,l as i,w as L,j as V,S as w,ah as S,f as T,M as k,Z as F,aw as m,G as x,p as y,P as z,ax as B,o as g,a9 as M,ar as R}from"./index.f1a79db7.js";import{d as _,F as D,a as E,E as N}from"./vee-validate.esm.05e68c81.js";var O="/assets/logo.a8cca4dc.png";const U={key:0,class:"authorization"},G={class:"authorization-body"},P=a("div",{class:"authorization-logo"},[a("img",{src:O,alt:"\u043B\u043E\u0433\u043E\u0442\u0438\u043F"})],-1),I={class:"authorization-check"},q=a("span",{class:"checkbox-custom"},null,-1),H=a("span",{class:"check-txt"},"\u0417\u0430\u043F\u043E\u043C\u043D\u0438\u0442\u044C \u043C\u0435\u043D\u044F",-1),W=["disabled"],j=a("div",{class:"authorization-bottom"}," Produced by Expert Workwear ",-1),$=A({__name:"login",setup(K){const e=T(),f=k(),o=p({login:"",password:""}),c=p(!1),l=d({get:()=>e.getters.getLoader,set:u=>e.commit(F.SET_LOADER,u)}),v=d(()=>e.getters.isAuthenticated),b=d(()=>e.getters.getLoginErrorMsg);_("required",u=>!u||!u.length?"\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435":!0),_("minLength",(u,[t])=>!u||!u.length?!0:u.length<t?`\u041C\u0438\u043D\u0438\u043C\u0443\u043C ${t} \u0441\u0438\u043C\u0432\u043E\u043B\u0430`:!0);let r=d({get:()=>e.getters.getLoginError,set:()=>e.commit(m.CLEAR_LOGIN_ERROR)}),C=()=>{l.value=!0,setTimeout(()=>{e.dispatch(x.LOGIN,o.value).then(()=>{c.value&&e.commit(m.SET_SAVE_AUTH),e.commit(m.SET_AUTH_LOGIN,o.value.login),Promise.all([e.dispatch(y.GET_COMPANYS),e.dispatch(z.GET_PROFILE)]).catch(()=>{o.value.password="",setTimeout(()=>{l.value=!1},3e3)}).finally(()=>{l.value=!1,e.dispatch(B.AUTH_WS),f.push({name:"Main"})})}).catch(()=>{o.value.password="",setTimeout(()=>{l.value=!1},3e3)})},500)};return(u,t)=>(g(),h("div",null,[s(v)?V("",!0):(g(),h("div",U,[a("div",G,[P,i(s(D),{onSubmit:s(C),class:"authorization-form"},{default:L(()=>[i(s(E),{as:"input",modelValue:o.value.login,"onUpdate:modelValue":t[0]||(t[0]=n=>o.value.login=n),class:"authorization-input",name:"Login",placeholder:"\u041B\u043E\u0433\u0438\u043D",autocomplete:"off",rules:"required|minLength:3"},null,8,["modelValue"]),i(s(N),{name:"Login"}),i(s(E),{as:"input",type:"password",modelValue:o.value.password,"onUpdate:modelValue":t[1]||(t[1]=n=>o.value.password=n),class:"authorization-input",name:"password",placeholder:"\u041F\u0430\u0440\u043E\u043B\u044C",autocomplete:"off",rules:"required|minLength:3"},null,8,["modelValue"]),a("label",I,[M(a("input",{"onUpdate:modelValue":t[2]||(t[2]=n=>c.value=n),class:"check-input",type:"checkbox",name:"remember"},null,512),[[R,c.value]]),q,H]),a("button",{class:"authorization-btn",type:"submit",disabled:s(l)},"\u0412\u043E\u0439\u0442\u0438",8,W)]),_:1},8,["onSubmit"])]),j])),i(S,{modelValue:s(r),"onUpdate:modelValue":t[3]||(t[3]=n=>w(r)?r.value=n:r=n),message:s(b)},null,8,["modelValue","message"])]))}});export{$ as default};
