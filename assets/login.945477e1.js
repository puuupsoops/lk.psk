import{_ as C,d as b,ae as L,g as h,i as d,b as E,a,l as r,w as A,j as F,f as V,M as k,Y as B,as as p,G as D,p as M,P as w,r as m,o as f,aa as S,an as T}from"./index.8fd51b67.js";import{F as y,a as z,E as R,d as _}from"./vee-validate.esm.e18c9fac.js";var N="/assets/logo.a8cca4dc.png";const O=b({components:{Form:y,Field:z,ErrorMessage:R,SnackBar:L},setup(){const e=V(),o=k(),u=h({login:"",password:""}),c=h(!1),n=d({get:()=>e.getters.getLoader,set:t=>e.commit(B.SET_LOADER,t)});_("required",t=>!t||!t.length?"\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435":!0),_("minLength",(t,[l])=>!t||!t.length?!0:t.length<l?`\u041C\u0438\u043D\u0438\u043C\u0443\u043C ${l} \u0441\u0438\u043C\u0432\u043E\u043B\u0430`:!0);let g=d({get:()=>e.getters.getLoginError,set:()=>e.commit(p.CLEAR_LOGIN_ERROR)}),i=()=>{n.value=!0,setTimeout(()=>{e.dispatch(D.LOGIN,u.value).then(()=>{c.value&&e.commit(p.SET_SAVE_AUTH),e.commit(p.SET_AUTH_LOGIN,u.value.login),Promise.all([e.dispatch(M.GET_COMPANYS),e.dispatch(w.GET_PROFILE)]).catch(()=>{u.value.password="",setTimeout(()=>{n.value=!1},3e3)}).finally(()=>{n.value=!1,o.push({name:"Main"})})}).catch(()=>{u.value.password="",setTimeout(()=>{n.value=!1},3e3)})},500)};return{isAuth:d(()=>e.getters.isAuthenticated),loginError:g,loginErrorMsg:d(()=>e.getters.getLoginErrorMsg),loader:n,authData:u,saved:c,onLogin:i}}}),G={key:0,class:"authorization"},P={class:"authorization-body"},U=a("div",{class:"authorization-logo"},[a("img",{src:N,alt:"\u043B\u043E\u0433\u043E\u0442\u0438\u043F"})],-1),$={class:"authorization-check"},I=a("span",{class:"checkbox-custom"},null,-1),q=a("span",{class:"check-txt"},"\u0417\u0430\u043F\u043E\u043C\u043D\u0438\u0442\u044C \u043C\u0435\u043D\u044F",-1),H=["disabled"],Y=a("div",{class:"authorization-bottom"}," Produced by Expert Workwear ",-1);function j(e,o,u,c,n,g){const i=m("Field"),t=m("ErrorMessage"),l=m("Form"),v=m("SnackBar");return f(),E("div",null,[e.isAuth?F("",!0):(f(),E("div",G,[a("div",P,[U,r(l,{onSubmit:e.onLogin,class:"authorization-form"},{default:A(()=>[r(i,{as:"input",modelValue:e.authData.login,"onUpdate:modelValue":o[0]||(o[0]=s=>e.authData.login=s),class:"authorization-input",name:"Login",placeholder:"\u041B\u043E\u0433\u0438\u043D",autocomplete:"off",rules:"required|minLength:3"},null,8,["modelValue"]),r(t,{name:"Login"}),r(i,{as:"input",type:"password",modelValue:e.authData.password,"onUpdate:modelValue":o[1]||(o[1]=s=>e.authData.password=s),class:"authorization-input",name:"password",placeholder:"\u041F\u0430\u0440\u043E\u043B\u044C",autocomplete:"off",rules:"required|minLength:3"},null,8,["modelValue"]),a("label",$,[S(a("input",{"onUpdate:modelValue":o[2]||(o[2]=s=>e.saved=s),class:"check-input",type:"checkbox",name:"remember"},null,512),[[T,e.saved]]),I,q]),a("button",{class:"authorization-btn",type:"submit",disabled:e.loader},"\u0412\u043E\u0439\u0442\u0438",8,H)]),_:1},8,["onSubmit"])]),Y])),r(v,{modelValue:e.loginError,"onUpdate:modelValue":o[3]||(o[3]=s=>e.loginError=s),message:e.loginErrorMsg},null,8,["modelValue","message"])])}var J=C(O,[["render",j]]);export{J as default};