import{a7 as f,t as b,o as x,c as P,$ as l,Y as h,K as o,T as n,a9 as L,X as a}from"./index-c359d0f1.js";import{E as C,a as E}from"./el-checkbox-185f5e3d.js";import{u as S}from"./useInstance-37baf641.js";import"./_initCloneObject-c2302002.js";const $={class:"dashboard"},v={class:"text-3xl font-bold dark:text-7xl"},w=l("div",{class:"needLoading",style:{width:"100px",height:"100px","background-color":"black"}},null,-1),I={__name:"index",setup(B){const d=f(),c=()=>{console.log("没解构")},r=()=>{console.log("解构")},m=b({username:"admin",password:"admin"}),{global:t,proxy:p}=S(),_=()=>{d.doLogin(m)},g=s=>{t.$myLoading.showFullScreenLoading(".needLoading","挂载全局的loading"),console.log(p)},u=()=>{t.$myLoading.hideFullScreenLoading(".needLoading")};return(s,i)=>{const k=C,y=E,e=L;return x(),P("div",$,[l("span",v,h(s.$t("common.main"))+" 国际化方法",1),o(k,{"mb-1":"",data:[]}),o(y,{total:100}),o(e,{type:"primary",onClick:c,disabled:""},{default:n(()=>[a("用户登录接口1")]),_:1}),o(e,{type:"success",onClick:r,disabled:""},{default:n(()=>[a("用户登录接口2")]),_:1}),o(e,{type:"info",onClick:_,disabled:""},{default:n(()=>[a("用户登录接口3")]),_:1}),o(e,{type:"info",onClick:i[0]||(i[0]=F=>g())},{default:n(()=>[a("局部加载loading(含参数)")]),_:1}),o(e,{type:"info",onClick:u},{default:n(()=>[a("取消loading")]),_:1}),w])}}};export{I as default};