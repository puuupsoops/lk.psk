import{d as f,g as d,z as w,o as x,b as v,a as e,x as u,t as s,k as c,j as h}from"./index.8fd51b67.js";const O={class:"catalog-pagination"},k=e("svg",{width:"10",height:"14",viewBox:"0 0 10 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M1.15375 7.5403L7.31547 13.7019C7.45798 13.8445 7.64822 13.9231 7.85107 13.9231C8.05392 13.9231 8.24416 13.8445 8.38668 13.7019L8.84044 13.2482C9.13571 12.9526 9.13571 12.4722 8.84044 12.177L3.6663 7.00289L8.84618 1.82301C8.9887 1.68038 9.06738 1.49025 9.06738 1.28751C9.06738 1.08455 8.9887 0.894423 8.84618 0.751684L8.39242 0.298142C8.24979 0.155517 8.05966 0.0769435 7.85681 0.0769435C7.65396 0.0769435 7.46372 0.155517 7.3212 0.298142L1.15375 6.46537C1.0109 6.60845 0.932441 6.79948 0.932891 7.00255C0.932441 7.20642 1.0109 7.39733 1.15375 7.5403Z",fill:"#A5A7A9"})],-1),I=e("div",{class:"catalog-pagination-arrow-text"}," \u043D\u0430\u0437\u0430\u0434 ",-1),L=[k,I],A={class:"catalog-pagination-text"},b=e("div",{class:"catalog-pagination-arrow-text"}," \u0432\u043F\u0435\u0440\u0435\u0434 ",-1),y=e("svg",{width:"10",height:"14",viewBox:"0 0 10 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M8.84625 6.4597L2.68453 0.298103C2.54202 0.155477 2.35178 0.076904 2.14893 0.0769041C1.94608 0.0769041 1.75584 0.155478 1.61332 0.298103L1.15956 0.751758C0.864288 1.04737 0.864288 1.52781 1.15956 1.82297L6.3337 6.99711L1.15382 12.177C1.01131 12.3196 0.932619 12.5097 0.932619 12.7125C0.932619 12.9154 1.01131 13.1056 1.15382 13.2483L1.60759 13.7019C1.75021 13.8445 1.94034 13.9231 2.14319 13.9231C2.34604 13.9231 2.53628 13.8445 2.6788 13.7019L8.84625 7.53463C8.9891 7.39155 9.06756 7.20052 9.06711 6.99745C9.06756 6.79358 8.9891 6.60267 8.84625 6.4597Z",fill:"#A5A7A9"})],-1),N=[b,y],p={class:"catalog-pagination-info"},B={key:0},$=c("\xA0 "),D=f({__name:"CatalogPagination",props:{currentPage:{type:Number,require:!0,default:1},maxPage:{type:Number,require:!0,default:0},maxItemOnPage:{type:Number}},emits:["next","prev","update:maxItemOnPage","update:currentPage"],setup(a,{emit:i}){const n=a,o=d(!1),r=d(null),P=()=>{n.currentPage>1&&n.maxPage!=0&&(i("update:currentPage",n.currentPage-1),i("prev"))},C=()=>{n.currentPage<n.maxPage&&n.maxPage!=0&&(i("update:currentPage",n.currentPage+1),i("next"))},g=m=>{o.value=!1,i("update:currentPage",1),i("update:maxItemOnPage",m)};return w(r,()=>{o.value=!1}),(m,t)=>(x(),v("div",O,[e("div",{class:u(["catalog-pagination-arrow",{disable:a.currentPage<=1||a.maxPage==0}]),onClick:P},L,2),e("div",A,s(a.currentPage),1),e("div",{class:u(["catalog-pagination-arrow",{disable:a.currentPage==a.maxPage||a.maxPage==0}]),onClick:C},N,2),e("div",p,[c(" \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 "+s(a.currentPage)+" \u0438\u0437 "+s(a.maxPage)+" ",1),a.maxItemOnPage?(x(),v("div",B,[c(" \xA0"+s(a.maxItemOnPage==-1?"":"\u043F\u043E")+" ",1),e("span",{class:"catalog-pagination-info-maxpage",onClick:t[0]||(t[0]=l=>o.value=!0)},s(a.maxItemOnPage==-1?"\u0412\u0441\u0435":a.maxItemOnPage),1),$,e("div",{class:u(["catalog-pagination-info-maxpage-wrap",{show:o.value}]),ref_key:"target",ref:r},[e("div",{class:u({active:a.maxItemOnPage==10}),onClick:t[1]||(t[1]=l=>g(10))},"10",2),e("div",{class:u({active:a.maxItemOnPage==25}),onClick:t[2]||(t[2]=l=>g(25))},"25",2),e("div",{class:u({active:a.maxItemOnPage==50}),onClick:t[3]||(t[3]=l=>g(50))},"50",2),e("div",{class:u({active:a.maxItemOnPage==-1}),onClick:t[4]||(t[4]=l=>g(-1))},"\u0412\u0441\u0435",2)],2)])):h("",!0),c(" "+s(a.maxItemOnPage==-1?"\u0441\u0442\u0440\u043E\u043A\u0438":"\u0441\u0442\u0440\u043E\u043A"),1)])]))}});export{D as _};
