import{aa as a,J as e,A as s,o as l,b as o,e as r,w as d,ab as n,g as i,u,N as t,ac as m,ad as p,ae as c,af as g,ag as f,ah as b,ai as v,aj as x,ak as w,al as _}from"./vendor-a70d4a36.js";import{_ as h,u as j,a as k,r as V}from"./index-04de4356.js";const C={class:"login dark:bg-[url('@/assets/images/login-bg-dark.webp')] bg-[url('@/assets/images/login-bg.jpg')]"},y={class:"login-form"},U=(a=>(w("data-v-5e942b24"),a=a(),_(),a))((()=>i("h2",null,"阿卡姆疯人院后台管理系统",-1))),F={class:"login-button flex"},q=h({__name:"index",setup(w){const _=j(),h=k(),q=a({username:"admin",password:"admin"});e((()=>{document.documentElement.className=_.htmlModeClass}));const z=s("large"),E=s(),I=s(),J=a({username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]});return(a,e)=>{const s=m,w=p,_=c,j=g,k=f,N=n;return l(),o("div",C,[r(N,null,{default:d((()=>[r(s,{span:12,xs:0,sm:0,md:12,xl:8}),r(s,{span:12,xs:24,sm:24,md:12,xl:8},{default:d((()=>[i("div",y,[U,r(k,{ref_key:"loginFormRef",ref:E,"label-position":"top","label-width":"60px",rules:J,model:q,size:z.value,"status-icon":""},{default:d((()=>[r(_,{label:"用户名",prop:"username"},{default:d((()=>[r(w,{"prefix-icon":u(b),placeholder:"请输入用户名",modelValue:q.username,"onUpdate:modelValue":e[0]||(e[0]=a=>q.username=a)},null,8,["prefix-icon","modelValue"])])),_:1}),r(_,{label:"密码",prop:"password"},{default:d((()=>[r(w,{"prefix-icon":u(v),type:"password",placeholder:"请输入密码","show-password":"",modelValue:q.password,"onUpdate:modelValue":e[1]||(e[1]=a=>q.password=a)},null,8,["prefix-icon","modelValue"])])),_:1}),i("div",F,[r(j,{color:"#fff",icon:"CircleClose",round:"",onClick:e[2]||(e[2]=a=>{var e;(e=E.value)&&e.resetFields()})},{default:d((()=>[t("重置 ")])),_:1}),r(j,{color:"#4db6ac",icon:"UserFilled",round:"","loading-icon":u(x),loading:I.value,onClick:e[3]||(e[3]=a=>(async a=>{a&&await a.validate(((a,e)=>{a?(I.value=!0,setTimeout((async()=>{h.token="123",h.userInfo.avatarUrl="https://c0.jdbstatic.com/avatars/jb/JbER.jpg",await V.push("/"),I.value=!1}),2e3)):I.value=!1}))})(E.value))},{default:d((()=>[t("登录 ")])),_:1},8,["loading-icon","loading"])])])),_:1},8,["rules","model","size"])])])),_:1}),r(s,{xl:8})])),_:1})])}}},[["__scopeId","data-v-5e942b24"]]);export{q as default};
