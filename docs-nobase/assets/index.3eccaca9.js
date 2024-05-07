var ue=Object.defineProperty;var O=Object.getOwnPropertySymbols;var ne=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable;var T=(e,l,a)=>l in e?ue(e,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[l]=a,j=(e,l)=>{for(var a in l||(l={}))ne.call(l,a)&&T(e,a,l[a]);if(O)for(var a of O(l))oe.call(l,a)&&T(e,a,l[a]);return e};var R=(e,l,a)=>new Promise((o,u)=>{var i=x=>{try{m(a.next(x))}catch(f){u(f)}},r=x=>{try{m(a.throw(x))}catch(f){u(f)}},m=x=>x.done?o(x.value):Promise.resolve(x.value).then(i,r);m((a=a.apply(e,l)).next())});import{r as b,u as ie,j as t,a as U,c as re,b as se,d as ce,e as c,R as B,C as d,f as be,B as h,g as xe,I as de,h as ge,i as he,k as me,S as Ce,P as Ee,H as fe,A as Be,l as Fe,m as p,M as N,T as pe,n as D,o as P,p as Ae,q as ye,F as De,s as _e,t as ke}from"./vendor.87031419.js";function it(){import("data:text/javascript,")}const ve=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))o(u);new MutationObserver(u=>{for(const i of u)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(u){const i={};return u.integrity&&(i.integrity=u.integrity),u.referrerpolicy&&(i.referrerPolicy=u.referrerpolicy),u.crossorigin==="use-credentials"?i.credentials="include":u.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(u){if(u.ep)return;u.ep=!0;const i=a(u);fetch(u.href,i)}};ve();const we="modulepreload",$={},Se="/",E=function(l,a){return!a||a.length===0?l():Promise.all(a.map(o=>{if(o=`${Se}${o}`,o in $)return;$[o]=!0;const u=o.endsWith(".css"),i=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${i}`))return;const r=document.createElement("link");if(r.rel=u?"stylesheet":we,u||(r.as="script",r.crossOrigin=""),r.href=o,document.head.appendChild(r),u)return new Promise((m,x)=>{r.addEventListener("load",m),r.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>l())},ze=b.exports.lazy(()=>E(()=>import("./Fingers.da3f2e0b.js"),["assets/Fingers.da3f2e0b.js","assets/Fingers.f1ffaaf2.css","assets/vendor.87031419.js","assets/wordTool.bd891566.js"])),Ie=b.exports.lazy(()=>E(()=>import("./Monkey.e9c70c57.js"),["assets/Monkey.e9c70c57.js","assets/Monkey.2e6d4b9d.css","assets/vendor.87031419.js","assets/wordTool.bd891566.js","assets/ReloadBtn.2c0d18f3.js","assets/ReloadBtn.890011c9.css"])),Oe=b.exports.lazy(()=>E(()=>import("./Sentence.e5c8f329.js"),["assets/Sentence.e5c8f329.js","assets/Sentence.dbaa76df.css","assets/vendor.87031419.js","assets/wordTool.bd891566.js","assets/ReloadBtn.2c0d18f3.js","assets/ReloadBtn.890011c9.css"])),Te=b.exports.lazy(()=>E(()=>import("./Training.75955269.js"),["assets/Training.75955269.js","assets/Training.6be43a3a.css","assets/vendor.87031419.js"])),je=b.exports.lazy(()=>E(()=>import("./Test.7fce41c4.js"),["assets/Test.7fce41c4.js","assets/Test.1dbd0401.css","assets/vendor.87031419.js"])),Re=b.exports.lazy(()=>E(()=>import("./About.26972e46.js"),["assets/About.26972e46.js","assets/About.197ba4de.css","assets/vendor.87031419.js"])),Ne=({to:e})=>{const l=U();return b.exports.useEffect(()=>{l(e)}),null},Pe=()=>ie([{path:"/",element:t(ze,{})},{path:"/monkey",element:t(Ie,{})},{path:"/sentence",element:t(Oe,{})},{path:"/training",element:t(Te,{})},{path:"/test",element:t(je,{})},{path:"/about",element:t(Re,{})},{path:"*",element:t(Ne,{to:"/"})}]),g={session:{get:e=>{const l=window.sessionStorage.getItem(e);return l&&JSON.parse(l)},set:(e,l)=>{const a=JSON.stringify(l);window.sessionStorage.setItem(e,a)},remove:e=>{window.sessionStorage.removeItem(e)}},local:{get:e=>{const l=window.localStorage.getItem(e);return l&&JSON.parse(l)},set:(e,l)=>{const a=JSON.stringify(l);window.localStorage.setItem(e,a)},remove:e=>{window.localStorage.removeItem(e)}}},W="UI_SCALE",q="UI_THEME",V="WORDS_MODE",H="COUNTDOWN_TIME",Q="CUSTOMER_WORDS",G="BACK_IMG_URL",$e={uiScale:g.local.get(W)||"s",uiTheme:g.local.get(q)||"",wordsMode:g.local.get(V)||"1",countdownTime:g.local.get(H)||"60",customerWords:g.local.get(Q)||[],backImgUrl:g.local.get(G)||""},Le={setUiScale:(e,l)=>(g.local.set(W,l),{uiScale:l}),setUiTheme:(e,l)=>(g.local.set(q,l),{uiTheme:l}),setWordsMode:(e,l)=>(g.local.set(V,l),{wordsMode:l}),setCountdownTime:(e,l)=>(g.local.set(H,l),{countdownTime:l}),saveCustomerWords:(e,l)=>(g.local.set(Q,l),{customerWords:l}),setBackImgUrl:(e,l)=>(g.local.set(G,l),{backImgUrl:l})};var Me={state:$e,reducer:Le},Ue={root:Me};const We=e=>({$state:j({},e)}),qe=e=>({$dispatch(l,a){e({type:l,payload:a})}});function J(e){return re(We,qe)(e)}const Ve=(e,l)=>(a=l,o)=>e[o.type]?Object.assign({},a,e[o.type](a,o.payload)):a,He=Object.entries(Ue).reduce((e,[l,a])=>(Object.assign(e,{[l]:Ve(a.reducer,a.state)}),e),{}),Qe=se(ce(He));const Ge=[{label:"\u90AE\u4EF6",text:"youjian"},{label:"\u79BB\u5F00",text:"likai"},{label:"\u51C6\u5907",text:"zhunbei"},{label:"\u5E86\u795D",text:"qingzhu"},{label:"\u5BBF\u820D",text:"sushe"},{label:"\u6CE8\u610F",text:"zhuyi"},{label:"\u975E\u5E38",text:"feichang"},{label:"\u5BB6\u5EAD",text:"jiating"},{label:"\u53BB\u5E74",text:"qunian"},{label:"\u70B9\u5FC3",text:"dianxin"},{label:"\u4E0A\u8BFE",text:"shangke"},{label:"\u7F8E\u4E3D",text:"meili"},{label:"\u5FB7\u56FD",text:"deguo"},{label:"\u4E00\u5B9A",text:"yiding"},{label:"\u7740\u6025",text:"zhaoji"},{label:"\u94C5\u7B14",text:"qianbi"},{label:"\u75DB\u82E6",text:"tongku"},{label:"\u5FC5\u987B",text:"bixu"},{label:"\u75C5\u4EBA",text:"bingren"},{label:"\u73B0\u5728",text:"xianzai"},{label:"\u725B\u5976",text:"niunai"},{label:"\u6708\u4EAE",text:"yueliang"},{label:"\u65E9\u4E0A",text:"zaoshang"},{label:"\u7B80\u5355",text:"jiandan"},{label:"\u74F6\u5B50",text:"pingzi"},{label:"\u54E5\u54E5",text:"gege"},{label:"\u97F3\u4E50",text:"yinyue"},{label:"\u7B77\u5B50",text:"kuaizi"},{label:"\u8FD8\u662F",text:"haishi"},{label:"\u684C\u5B50",text:"zhuozi"},{label:"\u770B\u89C1",text:"kanjian"},{label:"\u4E00\u8FB9",text:"yibian"},{label:"\u5927\u58F0",text:"dasheng"},{label:"\u98CE\u666F",text:"fengjing"},{label:"\u9910\u5385",text:"canting"},{label:"\u6728\u5934",text:"mutou"},{label:"\u65B0\u5E74",text:"xinnian"},{label:"\u5634\u5DF4",text:"zuiba"},{label:"\u5E94\u8BE5",text:"yinggai"},{label:"\u8FC7\u6765",text:"guolai"},{label:"\u4ECA\u5929",text:"jintian"},{label:"\u771F\u597D",text:"zhenhao"},{label:"\u5965\u5229\u5965",text:"aoliao"},{label:"\u952E\u76D8",text:"jianpan"},{label:"\u771F\u5B9E",text:"zhenshi"},{label:"\u4F18\u8054",text:"youlian"},{label:"\u84DD\u7259",text:"lanya"},{label:"\u65E0\u7EBF",text:"wuxian"},{label:"\u4E09\u660E\u6CBB",text:"sanmingzhi"},{label:"\u80F6\u6761",text:"jiaotiao"},{label:"\u661F\u591C",text:"xingye"},{label:"\u5976\u6CB9",text:"naiyou"},{label:"\u718A\u732B",text:"xiongmao"},{label:"\u53EF\u4E50",text:"kele"},{label:"\u6D77\u5916",text:"haiwai"},{label:"\u77E9\u9635",text:"juzhen"},{label:"\u5851\u6599",text:"suliao"},{label:"\u5927\u9AA8",text:"dagu"},{label:"\u8425\u5730",text:"yingdi"},{label:"\u65E0\u9650",text:"wuxian"},{label:"\u865A\u62DF",text:"xuni"},{label:"\u7535\u73A9",text:"dianwan"},{label:"\u5FBD\u7AE0",text:"huizhang"},{label:"\u5317\u6781\u5708",text:"beijiquan"},{label:"\u4EC1\u738B",text:"renwang"},{label:"\u602A\u7269",text:"guaiwu"},{label:"\u730E\u4EBA",text:"lieren"},{label:"\u5927\u4F6C",text:"dalao"},{label:"\u5F00\u8F66",text:"kaiche"},{label:"\u4EE3\u7EC4",text:"daizu"},{label:"\u4E9A\u514B\u529B",text:"yakeli"},{label:"\u9EC4\u94DC",text:"huangtong"},{label:"\u4E0D\u9508\u94A2",text:"buxiugang"},{label:"\u94DD\u952D",text:"lvding"},{label:"\u6CE8\u5851",text:"zhusu"},{label:"\u83E0\u841D",text:"boluo"},{label:"\u9713\u8679",text:"nihong"},{label:"\u87BA\u4E1D",text:"luosi"},{label:"\u536B\u661F\u8F74",text:"weixingzhou"},{label:"\u7EA2\u767D\u673A",text:"hongbaiji"},{label:"\u5E7B\u5F71",text:"huanying"},{label:"\u65E5\u6587",text:"riwen"},{label:"\u4FC4\u6587",text:"ewen"},{label:"\u952E\u5E3D",text:"jianmao"},{label:"\u5957\u4EF6",text:"taojian"},{label:"\u78B3\u7EA4\u7EF4",text:"tanxianwei"},{label:"\u73BB\u7EA4",text:"boxian"},{label:"\u70ED\u5347\u534E",text:"reshenghua"},{label:"\u5934\u53D1",text:"toufa"},{label:"\u5BA2\u5385",text:"keting"},{label:"\u6E38\u6CF3\u6C60",text:"youyongchi"},{label:"\u5468\u672B",text:"zhoumo"},{label:"\u5F1F\u5F1F",text:"didi"},{label:"\u53EF\u7231",text:"keai"},{label:"\u9E66\u9E49",text:"yingwu"},{label:"\u6F02\u767D",text:"piaobai"},{label:"\u7535\u6CF3",text:"dianyong"},{label:"\u6B66\u58EB\u9053",text:"wushidao"},{label:"\u7801\u519C",text:"manong"},{label:"\u8109\u51B2",text:"maichong"},{label:"\u84B8\u6C7D\u6CE2",text:"zhengqibo"},{label:"\u9752\u67E0",text:"qingning"},{label:"\u58F0\u6CE2",text:"shengbo"},{label:"\u6A44\u6984",text:"ganlan"},{label:"\u524D\u950B",text:"qianfeng"},{label:"\u6DF1\u7A7A",text:"shenkong"},{label:"\u539F\u70B9",text:"yuandian"},{label:"\u6A31\u82B1",text:"yinghua"},{label:"\u539F\u5382",text:"yuanchang"},{label:"\u9759\u7535\u5BB9",text:"jingdianrong"},{label:"\u629B\u5149",text:"paoguang"},{label:"\u4F73\u8FBE\u9686",text:"jiadalong"},{label:"\u5B81\u829D",text:"ningzhi"},{label:"\u5317\u6781\u661F",text:"beijixing"},{label:"\u9000\u70E7",text:"tuishao"},{label:"\u5403\u74DC",text:"chigua"},{label:"\u89E3\u6BD2",text:"jiedu"},{label:"\u6478\u9C7C",text:"moyu"},{label:"\u6A31\u6843",text:"yingtao"},{label:"\u6811\u61D2",text:"shulan"},{label:"\u6A21\u62DF",text:"moni"},{label:"\u6FC0\u5149",text:"jiguang"},{label:"\u9633\u6781",text:"yangji"},{label:"\u55B7\u6D82",text:"pentu"},{label:"\u4FBF\u5F53",text:"biandang"},{label:"\u591C\u884C\u8005",text:"yexingzhe"},{label:"\u9524\u5934\u9CA8",text:"chuitousha"},{label:"\u6838\u5B50",text:"hezi"},{label:"\u6D82\u6539",text:"tugai"},{label:"\u795E\u4F51",text:"shenyou"},{label:"\u6CE8\u97F3",text:"zhuyin"},{label:"\u6843\u82B1",text:"taohua"},{label:"\u6697\u9ED1",text:"anhei"},{label:"\u6D77\u5CB8",text:"haian"},{label:"\u5DE7\u514B\u529B",text:"qiaokeli"},{label:"\u65AF\u5DF4\u8FBE",text:"sibada"},{label:"\u9B3C\u9B42",text:"guihun"},{label:"\u7206\u88C2",text:"baolie"},{label:"\u7EFF\u6D32",text:"lvzhou"},{label:"\u6807\u672C",text:"biaoben"},{label:"\u5DEB\u5996",text:"wuyao"},{label:"\u6C38\u6052",text:"yongheng"},{label:"\u5976\u6614",text:"naixi"},{label:"\u6CB3\u9A6C",text:"hema"},{label:"\u4F7F\u547D",text:"shiming"},{label:"\u53EC\u5524",text:"zhaohuan"},{label:"\u9ED1\u8272",text:"heise"},{label:"\u884C\u52A8",text:"xingdong"},{label:"\u767D\u8272",text:"baise"},{label:"\u725B\u5934",text:"niutou"},{label:"\u4E2A\u6027",text:"gexing"},{label:"\u6218\u795E",text:"zhanshen"},{label:"\u73B0\u4EE3",text:"xiandai"},{label:"\u6218\u4E89",text:"zhanzheng"},{label:"\u51EF\u534E",text:"kaihua"},{label:"\u7CBE\u5FAE\u79D1",text:"jingweike"},{label:"\u7A7A\u95F4",text:"kongjian"},{label:"\u4E1C\u65B9",text:"dongfang"},{label:"\u5C71\u6C34",text:"shanshui"},{label:"\u5FAE\u5149",text:"weiguang"},{label:"\u897F\u88C5",text:"xizhuang"},{label:"\u8840\u7F18",text:"xueyuan"},{label:"\u8BC5\u5492",text:"zuzhou"},{label:"\u94A2\u677F",text:"gangban"},{label:"\u6253\u5361",text:"daka"},{label:"\u7B7E\u5230",text:"qiandao"},{label:"\u4E0A\u73ED",text:"shangban"},{label:"\u53CC\u6A21",text:"shuangmo"},{label:"\u5355\u6A21",text:"danmo"},{label:"\u5212\u6C34",text:"huashui"},{label:"\u5916\u5356",text:"waimai"},{label:"\u8D5E\u52A9",text:"zanzhu"},{label:"\u6253\u8D4F",text:"dashang"},{label:"\u673A\u68B0",text:"jixie"},{label:"\u5F00\u5173",text:"kaiguan"},{label:"\u6E38\u620F",text:"youxi"},{label:"\u65E0\u654C",text:"wudi"},{label:"\u778E\u773C",text:"xiayan"},{label:"\u5FC3\u6001",text:"xintai"},{label:"\u7167\u7247",text:"zhaopian"},{label:"\u6DA6\u6ED1",text:"runhua"},{label:"\u8054\u673A",text:"lianji"},{label:"\u914D\u91CD",text:"peizhong"},{label:"\u8BBE\u8BA1",text:"sheji"},{label:"\u88C5\u9970",text:"zhuangshi"},{label:"\u94ED\u724C",text:"mingpai"},{label:"\u5B9A\u5236",text:"dingzhi"},{label:"\u72EC\u6728\u821F",text:"dumuzhou"},{label:"\u8FB9\u7267",text:"bianmu"},{label:"\u4EA7\u54C1",text:"chanpin"},{label:"\u9F20\u6807",text:"shubiao"},{label:"\u5916\u8BBE",text:"waishe"},{label:"\u4EA4\u6D41",text:"jiaoliu"},{label:"\u78E8\u7802",text:"mosha"},{label:"\u900F\u5149",text:"touguang"},{label:"\u6253\u5B57",text:"dazi"},{label:"\u73A9\u5177",text:"wanju"},{label:"\u54C1\u724C",text:"pinpai"},{label:"\u5DE5\u4F5C\u5BA4",text:"gongzuoshi"}];var Je={setSiteIcon(e,l){var r;const a=document.createElement("canvas");a.height=64,a.width=64;const o=a.getContext("2d");o&&(o.fillStyle=e,o.fillRect(0,0,64,64));const u=a.getContext("2d");u&&(u.font="24px Arial",u.fillStyle=l,u.fillText("TCN",7,42));const i=a.toDataURL("image/jpg");(r=document.getElementById("site-icon"))==null||r.setAttribute("href",i)}},_=[{name:"default",bgColor:"#282c34",textColor:"#fffffe"},{name:"oblivion",bgColor:"#464746",textColor:"#ffac00"},{name:"carbon",bgColor:"#575d5e",textColor:"#ed6b21"},{name:"2600",bgColor:"#6c3b7b",textColor:"#f8cc2a"},{name:"olivia",bgColor:"#363434",textColor:"#e8c4b8"},{name:"9009",bgColor:"#b6b09a",textColor:"#2e2f33"},{name:"godspeed",bgColor:"#6A97B5",textColor:"#faee69"},{name:"nautilus",bgColor:"#102c4e",textColor:"#eac004"},{name:"avocado",bgColor:"rgb(101,145,91)",textColor:"rgb(239,234,155)"},{name:"konmomo",bgColor:"#f7f2ea",textColor:"rgb(244,84,124)"},{name:"space cadet",bgColor:"#0073a2",textColor:"#ffffff"},{name:"shoko",bgColor:"#ced7e0",textColor:"#7599b1"},{name:"ph yellow",bgColor:"#000000",textColor:"#ff9900"},{name:"yeeti",bgColor:"#81B9D0",textColor:"#ffffff"},{name:"botanical",bgColor:"rgb(167,183,174)",textColor:"rgb(74,93,87)"},{name:"aqua",bgColor:"#056e7f",textColor:"#7cc3c1"},{name:"striker",bgColor:"#124883",textColor:"#d7dcda"},{name:"8008",bgColor:"#333a45",textColor:"#f44c7f"},{name:"darling",bgColor:"#fec8cd",textColor:"#a30000"},{name:"dracula",bgColor:"#282a36",textColor:"#bd93f9"},{name:"toxic",bgColor:"#3f4241",textColor:"#d0df00"}];const L=e=>{Je.setSiteIcon(e.bgColor,e.textColor);const l=document.querySelector("#current-theme");if(!l)return;const a=l.getAttribute("href")||"";l.setAttribute("href",a.substring(0,a.lastIndexOf("/"))+`/${e.name.replace(" ","-")}.css`)};var Ke="/assets/wechatpay.d879e1bb.jpg",Xe="/assets/alipay.43db5136.jpg";const Ye=()=>c(B,{className:"PayQrCode__imgbox",children:[t(d,{className:"PayQrCode__img",flex:"auto",children:t("img",{src:Ke,alt:"wechatpay"})}),t(d,{className:"PayQrCode__divide",flex:"30px"}),t(d,{className:"PayQrCode__img",flex:"auto",children:t("img",{src:Xe,alt:"alipay"})})]}),Ze=e=>c("div",{children:[c("div",{children:["\u54C8\u55BD~\u73A9\u7684\u5F00\u5FC3\u5417\uFF1F\u5F00\u5FC3\u7684\u8BDD\u8BF7\u6211\u559D\u676F\u5496\u5561",t(be,{}),"\u5982\u4F55~"]}),t(Ye,{}),c("div",{children:[t(h,{type:"link",onClick:()=>e.go("/about"),children:"\u5173\u4E8E\u8FD9\u4E2A\u7F51\u7AD9"}),t("span",{children:"\u7ED9\u4F60\u4E00\u4E2A\u6253\u8D4F\u6211\u7684\u7406\u7531~"})]})]}),et=/^[\u2E80-\u9FFF]+$/,M=Ge.map(e=>e.label).join("|"),k={"/":[1,1,1],"/monkey":[1,1,0],"/sentence":[1,0,0],"/training":[1,0,0],"/test":[1,0,0],"/about":[1,0,0]},tt=e=>{var w,S,z;const[l,a]=b.exports.useState(!1),[o,u]=b.exports.useState(!1),[i,r]=b.exports.useState(e.$state.root.wordsMode),m=b.exports.useRef(M),[x,f]=b.exports.useState(e.$state.root.customerWords&&e.$state.root.customerWords.length!==0?e.$state.root.customerWords.map(n=>n.label).join("|"):M),[K,v]=b.exports.useState([]),{search:A,pathname:y}=xe(),X=U(),Y=n=>{e.$dispatch("setUiScale",n.target.value)},Z=()=>R(void 0,null,function*(){if(i==="1"){e.$dispatch("setWordsMode",i),a(!1);return}const n=Array.from(new Set(x.split("|").filter(Boolean))),s=[];if(n.length===0&&s.push("\u8BF7\u8F93\u5165\u5B57\u8BCD\uFF0C\u5E76\u4EE5\u7B26\u53F7|\u95F4\u9694"),n.forEach(F=>{et.test(F)||s.push(F)}),v(s),s.length===0){const{getPinyin:F}=yield E(()=>import("./pinyin.8c96c577.js"),[]);e.$dispatch("setWordsMode",i),f(n.join("|")),console.time("getPinyin");const ae=n.map(I=>({label:I,text:F(I)}));console.timeEnd("getPinyin"),e.$dispatch("saveCustomerWords",ae),a(!1)}}),ee=n=>{r(n),v([])},te=n=>{f(n.target.value)},le=n=>{const s=window.location.href;s.includes("#")&&s.includes("?")&&(window.location.href=s.split("?")[0]),e.$dispatch("setUiTheme",n.name)},C=n=>{X(n)};return b.exports.useEffect(()=>{if(A){const n=_.find(s=>s.name===A.slice(1).replace("-"," "));n&&L(n)}else if(e.$state.root.uiTheme){const n=_.find(s=>s.name===e.$state.root.uiTheme);n&&L(n)}},[A,e.$state.root.uiTheme]),c("div",{className:"app-header",children:[t(B,{children:c(d,{flex:"auto",children:[t(h,{tabIndex:-1,type:"link",icon:t(de,{}),onClick:()=>C(""),children:"\u6A21\u5F0F1(\u9650\u65F6)"}),t(h,{tabIndex:-1,type:"link",icon:t(ge,{}),onClick:()=>C("monkey"),children:"\u6A21\u5F0F2(\u8BA1\u65F6)"}),t(h,{tabIndex:-1,type:"link",icon:t(he,{}),onClick:()=>C("sentence"),children:"\u6A21\u5F0F3(\u53E5\u5B50)"}),t(h,{tabIndex:-1,type:"link",icon:t(me,{}),onClick:()=>C("training"),children:"\u6307\u6CD5\u7EC3\u4E60"}),t(h,{tabIndex:-1,type:"link",icon:t(Ce,{}),onClick:()=>C("test"),children:"\u6309\u952E\u58F0\u97F3\u53CD\u9988"}),t(Ee,{placement:"bottomLeft",content:t(Ze,{go:C}),children:t(h,{tabIndex:-1,className:"heartBeat",type:"link",icon:t(fe,{twoToneColor:"#9D0500"}),onClick:()=>C("about"),children:"\u6C42\u6253\u8D4F"})})]})}),t(B,{style:{marginTop:"10px"},children:c(d,{flex:"auto",children:[t(h,{tabIndex:-1,type:"link",style:{display:(w=k[y])!=null&&w[0]?"":"none"},icon:t(Be,{}),onClick:()=>u(!0),children:"\u4E3B\u9898"}),t(h,{tabIndex:-1,type:"link",style:{display:(S=k[y])!=null&&S[1]?"":"none"},icon:t(Fe,{}),onClick:()=>a(!0),children:"\u8BCD\u7EC4\u8BBE\u7F6E"}),c("div",{style:{display:(z=k[y])!=null&&z[2]?"inline-block":"none"},children:[t("span",{className:"radio-text",children:"\xA0\xA0\xA0\xA0UI\u5C3A\u5BF8:\xA0\xA0"}),c(p.Group,{onChange:Y,defaultValue:e.$state.root.uiScale,children:[t(p,{tabIndex:-1,value:"s",children:"\u6B63\u5E38"}),t(p,{tabIndex:-1,value:"m",children:"\u5927"}),t(p,{tabIndex:-1,value:"l",children:"\u7279\u5927"})]})]})]})}),c(N,{className:"header-modal-setting",title:"",visible:l,closable:!1,maskClosable:!1,footer:t(pe,{placement:"left",title:"\u5C06\u81EA\u52A8\u53BB\u9664\u91CD\u590D\u8BCD\u7EC4",children:t(h,{tabIndex:-1,className:"header-modal-confirm-btn",type:"primary",onClick:Z,children:"\u786E\u5B9A"})}),children:[c(D,{defaultActiveKey:i,onChange:ee,children:[t(D.TabPane,{tab:"\u9ED8\u8BA4\u8BCD\u7EC4",children:t(P.TextArea,{autoSize:{minRows:9,maxRows:16},disabled:!0,defaultValue:m.current})},"1"),t(D.TabPane,{tab:"\u81EA\u5B9A\u4E49\u8BCD\u7EC4",children:t(P.TextArea,{autoSize:{minRows:9,maxRows:16},value:x,onChange:te})},"2")]}),c(B,{className:"header-modal--words-length",children:[t(d,{span:12,children:t(B,{gutter:6,className:"error-word",children:K.map((n,s)=>t(d,{children:n},s))})}),c(d,{span:12,className:"header-modal--total",children:["\u5171(",i==="1"?m.current.split("|").length:x.split("|").filter(Boolean).length,")\u4E2A\u8BCD"]})]})]}),t(N,{className:"header-modal-theme",title:"",visible:o,footer:"",onCancel:()=>u(!1),children:c(B,{justify:"space-around",className:"header-modal-theme--box",children:[_.map((n,s)=>t(d,{flex:"100px",className:"theme-display-block",style:{backgroundColor:n.bgColor,color:n.textColor},onClick:()=>le(n),children:n.name},s)),t(d,{flex:"100px"}),t(d,{flex:"100px"}),t(d,{flex:"100px"}),t(d,{flex:"100px"})]})})]})};var lt=J(tt);const at=e=>t("div",{className:"app-footer",children:e.$state.root.backImgUrl&&t("img",{className:"back__img",src:e.$state.root.backImgUrl,alt:""})});var ut=J(at);const nt=()=>t(Ae,{store:Qe,children:t("div",{className:"app-main",children:c(ye,{children:[t(lt,{}),t(b.exports.Suspense,{fallback:t(De,{}),children:t(Pe,{})}),t(ut,{})]})})});console.log("BASE_URL: ","/");console.log("APP_VERSION:","20231127a");_e.render(t(ke.StrictMode,{children:t(nt,{})}),document.getElementById("root"));export{Ye as P,E as _,it as __vite_legacy_guard,Ge as d,J as s};
