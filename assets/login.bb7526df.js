import{_ as b,d as A,ae as k,g as h,i as d,b as E,a,m as r,w as L,j as V,f as F,O as B,Y as D,aq as p,A as M,q as f,r as m,o as _,aa as w,an as S,k as y}from"./index.dd5c42dc.js";import{F as T,a as z,E as N,d as v}from"./vee-validate.esm.c360dcc5.js";var R="/assets/logo.a8cca4dc.png";const O=A({components:{Form:T,Field:z,ErrorMessage:N,SnackBar:k},setup(){const e=F(y),o=B(),u=h({login:"",password:""}),c=h(!1),n=d({get:()=>e.getters.getLoader,set:t=>e.commit(D.SET_LOADER,t)});v("required",t=>!t||!t.length?"\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435":!0),v("minLength",(t,[l])=>!t||!t.length?!0:t.length<l?`\u041C\u0438\u043D\u0438\u043C\u0443\u043C ${l} \u0441\u0438\u043C\u0432\u043E\u043B\u0430`:!0);let g=d({get:()=>e.getters.getLoginError,set:()=>e.commit(p.CLEAR_LOGIN_ERROR)}),i=()=>{n.value=!0,setTimeout(()=>{e.dispatch(M.LOGIN,u.value).then(()=>{c.value&&e.commit(p.SET_SAVE_AUTH),e.commit(p.SET_AUTH_LOGIN,u.value.login),Promise.all([e.dispatch(f.GET_COMPANYS),e.dispatch(f.GET_MANAGER)]).catch(()=>{u.value.password="",setTimeout(()=>{n.value=!1},3e3)}).finally(()=>{n.value=!1,o.push({name:"Main"})})}).catch(()=>{u.value.password="",setTimeout(()=>{n.value=!1},3e3)})},500)};return{isAuth:d(()=>e.getters.isAuthenticated),loginError:g,loginErrorMsg:d(()=>e.getters.getLoginErrorMsg),loader:n,authData:u,saved:c,onLogin:i}}}),G={key:0,class:"authorization"},U={class:"authorization-body"},$=a("div",{class:"authorization-logo"},[a("img",{src:R,alt:"\u043B\u043E\u0433\u043E\u0442\u0438\u043F"})],-1),q={class:"authorization-check"},I=a("span",{class:"checkbox-custom"},null,-1),P=a("span",{class:"check-txt"},"\u0417\u0430\u043F\u043E\u043C\u043D\u0438\u0442\u044C \u043C\u0435\u043D\u044F",-1),H=["disabled"],Y=a("div",{class:"authorization-bottom"}," Produced by Expert Workwear ",-1);function j(e,o,u,c,n,g){const i=m("Field"),t=m("ErrorMessage"),l=m("Form"),C=m("SnackBar");return _(),E("div",null,[e.isAuth?V("",!0):(_(),E("div",G,[a("div",U,[$,r(l,{onSubmit:e.onLogin,class:"authorization-form"},{default:L(()=>[r(i,{as:"input",modelValue:e.authData.login,"onUpdate:modelValue":o[0]||(o[0]=s=>e.authData.login=s),class:"authorization-input",name:"Login",placeholder:"\u041B\u043E\u0433\u0438\u043D",autocomplete:"off",rules:"required|minLength:3"},null,8,["modelValue"]),r(t,{name:"Login"}),r(i,{as:"input",type:"password",modelValue:e.authData.password,"onUpdate:modelValue":o[1]||(o[1]=s=>e.authData.password=s),class:"authorization-input",name:"password",placeholder:"\u041F\u0430\u0440\u043E\u043B\u044C",autocomplete:"off",rules:"required|minLength:3"},null,8,["modelValue"]),a("label",q,[w(a("input",{"onUpdate:modelValue":o[2]||(o[2]=s=>e.saved=s),class:"check-input",type:"checkbox",name:"remember"},null,512),[[S,e.saved]]),I,P]),a("button",{class:"authorization-btn",type:"submit",disabled:e.loader},"\u0412\u043E\u0439\u0442\u0438",8,H)]),_:1},8,["onSubmit"])]),Y])),r(C,{modelValue:e.loginError,"onUpdate:modelValue":o[3]||(o[3]=s=>e.loginError=s),message:e.loginErrorMsg},null,8,["modelValue","message"])])}var J=b(O,[["render",j]]);export{J as default};