import{aa as a,J as e,A as s,o as l,b as o,e as d,w as r,ab as n,g as i,u,N as t,ac as m,ad as p,ae as c,af as g,ag as f,ah as b,ai as v,aj as x,ak as _,al as w}from"./vendor-a70d4a36.js";import{_ as h,u as k,a as V}from"./index-cd6168aa.js";const C={class:"login dark:bg-[url('@/assets/images/login-bg-dark.webp')] bg-[url('@/assets/images/login-bg.jpg')]"},j={class:"login-form"},y=(a=>(_("data-v-f73823b6"),a=a(),w(),a))((()=>i("h2",null,"阿卡姆疯人院后台管理系统",-1))),F={class:"login-button flex"},U=h({__name:"index",setup(_){const w=k(),h=V(),U=a({username:"admin",password:"admin"});e((()=>{document.documentElement.className=w.htmlModeClass}));const q=s("large"),z=s(),N=s(),A=a({username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]});return(a,e)=>{const s=m,_=p,w=c,k=g,V=f,E=n;return l(),o("div",C,[d(E,null,{default:r((()=>[d(s,{span:12,xs:0,sm:0,md:12,xl:8}),d(s,{span:12,xs:24,sm:24,md:12,xl:8},{default:r((()=>[i("div",j,[y,d(V,{ref_key:"loginFormRef",ref:z,"label-position":"top","label-width":"60px",rules:A,model:U,size:q.value,"status-icon":""},{default:r((()=>[d(w,{label:"用户名",prop:"username"},{default:r((()=>[d(_,{"prefix-icon":u(b),placeholder:"请输入用户名",modelValue:U.username,"onUpdate:modelValue":e[0]||(e[0]=a=>U.username=a)},null,8,["prefix-icon","modelValue"])])),_:1}),d(w,{label:"密码",prop:"password"},{default:r((()=>[d(_,{"prefix-icon":u(v),type:"password",placeholder:"请输入密码","show-password":"",modelValue:U.password,"onUpdate:modelValue":e[1]||(e[1]=a=>U.password=a)},null,8,["prefix-icon","modelValue"])])),_:1}),i("div",F,[d(k,{color:"#fff",icon:"CircleClose",round:"",onClick:e[2]||(e[2]=a=>{var e;(e=z.value)&&e.resetFields()})},{default:r((()=>[t("重置")])),_:1}),d(k,{color:"#4db6ac",icon:"UserFilled",round:"","loading-icon":u(x),loading:N.value,onClick:e[3]||(e[3]=a=>(async a=>{a&&await a.validate(((a,e)=>{a?(N.value=!0,h.doLogin(U).finally((()=>{N.value=!1}))):N.value=!1}))})(z.value))},{default:r((()=>[t("登录")])),_:1},8,["loading-icon","loading"])])])),_:1},8,["rules","model","size"])])])),_:1}),d(s,{xl:8})])),_:1})])}}},[["__scopeId","data-v-f73823b6"]]);export{U as default};
