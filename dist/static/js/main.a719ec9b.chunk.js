(this["webpackJsonptyping-cn"]=this["webpackJsonptyping-cn"]||[]).push([[0],{151:function(e,t,a){e.exports=a(264)},162:function(e,t,a){},163:function(e,t,a){},238:function(e,t,a){},264:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(3),c=a.n(r),o=a(64),i=(a(161),a(162),a(129)),u=a(28),s=a(51),b=a(52),m=a(16),x=a(270),f=a(271),g=a(272),d=a(267),h=a(27),E=a(273),p=a(50),j={session:{get:function(e){var t=window.sessionStorage.getItem(e);return t&&JSON.parse(t)},set:function(e,t){var a=JSON.stringify(t);window.sessionStorage.setItem(e,a)},remove:function(e){window.sessionStorage.removeItem(e)}},local:{get:function(e){var t=window.localStorage.getItem(e);return t&&JSON.parse(t)},set:function(e,t){var a=JSON.stringify(t);window.localStorage.setItem(e,a)},remove:function(e){window.localStorage.removeItem(e)}}},v={state:{uiScale:j.local.get("UI_SCALE")||"s",wordsMode:j.local.get("WORDS_MODE")||"1",customerWords:j.local.get("CUSTOMER_WORDS")||[]},reducer:{setUiScale:function(e,t){return j.local.set("UI_SCALE",t),{uiScale:t}},setWordsMode:function(e,t){return j.local.set("WORDS_MODE",t),{wordsMode:t}},saveCustomerWords:function(e,t){return j.local.set("CUSTOMER_WORDS",t),{customerWords:t}}}},O={root:function(e,t){return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,l=arguments.length>1?arguments[1]:void 0;return e[l.type]?Object.assign({},a,e[l.type](a,l.payload)):a}}(v.reducer,v.state)},w=function(e){return{$state:Object(s.a)({},e)}},y=function(e){return{$dispatch:function(t,a){e({type:t,payload:a})},dispatch:e}};function S(e){return Object(o.b)(w,y)(e)}var C=Object(p.c)(Object(p.b)(O)),k=(a(163),[{label:"\u90ae\u4ef6",text:"youjian"},{label:"\u79bb\u5f00",text:"likai"},{label:"\u51c6\u5907",text:"zhunbei"},{label:"\u5e86\u795d",text:"qingzhu"},{label:"\u5bbf\u820d",text:"sushe"},{label:"\u6ce8\u610f",text:"zhuyi"},{label:"\u975e\u5e38",text:"feichang"},{label:"\u5bb6\u5ead",text:"jiating"},{label:"\u53bb\u5e74",text:"qunian"},{label:"\u70b9\u5fc3",text:"dianxin"},{label:"\u4e0a\u8bfe",text:"shangke"},{label:"\u7f8e\u4e3d",text:"meili"},{label:"\u5fb7\u56fd",text:"deguo"},{label:"\u4e00\u5b9a",text:"yiding"},{label:"\u7740\u6025",text:"zhaoji"},{label:"\u94c5\u7b14",text:"qianbi"},{label:"\u75db\u82e6",text:"tongku"},{label:"\u5fc5\u987b",text:"bixu"},{label:"\u75c5\u4eba",text:"bingren"},{label:"\u73b0\u5728",text:"xianzai"},{label:"\u725b\u5976",text:"niunai"},{label:"\u6708\u4eae",text:"yueliang"},{label:"\u65e9\u4e0a",text:"zaoshang"},{label:"\u7b80\u5355",text:"jiandan"},{label:"\u74f6\u5b50",text:"pingzi"},{label:"\u54e5\u54e5",text:"gege"},{label:"\u97f3\u4e50",text:"yinyue"},{label:"\u7b77\u5b50",text:"kuaizi"},{label:"\u8fd8\u662f",text:"haishi"},{label:"\u684c\u5b50",text:"zhuozi"},{label:"\u770b\u89c1",text:"kanjian"},{label:"\u4e00\u8fb9",text:"yibian"},{label:"\u5927\u58f0",text:"dasheng"},{label:"\u98ce\u666f",text:"fengjing"},{label:"\u9910\u5385",text:"canting"},{label:"\u6728\u5934",text:"mutou"},{label:"\u65b0\u5e74",text:"xinnian"},{label:"\u5634\u5df4",text:"zuiba"},{label:"\u5e94\u8be5",text:"yinggai"},{label:"\u8fc7\u6765",text:"guolai"},{label:"\u867e\u7403",text:"xiaqiu"},{label:"\u6c5f\u6e7e",text:"jiangwan"},{label:"\u6c5f\u5c71",text:"jiangshan"},{label:"\u5bcc\u8d35",text:"fugui"},{label:"\u9178\u5976",text:"suannai"},{label:"\u4eca\u5929",text:"jintian"},{label:"\u771f\u597d",text:"zhenhao"},{label:"\u6ce2\u6ce2",text:"bobo"},{label:"\u8033\u6735",text:"erduo"},{label:"\u5965\u5229\u5965",text:"aoliao"},{label:"\u80d6\u864e",text:"panghu"},{label:"\u952e\u76d8",text:"jianpan"},{label:"\u771f\u5b9e",text:"zhenshi"},{label:"\u4f18\u8054",text:"youlian"},{label:"\u84dd\u7259",text:"lanya"},{label:"\u65e0\u7ebf",text:"wuxian"},{label:"\u4e09\u660e\u6cbb",text:"sanmingzhi"},{label:"\u80f6\u6761",text:"jiaotiao"},{label:"\u661f\u591c",text:"xingye"},{label:"\u5976\u6cb9",text:"naiyou"},{label:"\u718a\u732b",text:"xiongmao"},{label:"\u53ef\u4e50",text:"kele"},{label:"\u6d77\u5916",text:"haiwai"},{label:"\u6d66\u6749",text:"pushan"},{label:"\u77e9\u9635",text:"juzhen"},{label:"\u5851\u6599",text:"suliao"},{label:"\u5927\u9aa8",text:"dagu"},{label:"\u8425\u5730",text:"yingdi"},{label:"\u846b\u82a6",text:"hulu"},{label:"\u5929\u72fc\u661f",text:"tianlangxing"},{label:"\u7a3b\u8349\u4eba",text:"daocaoren"},{label:"\u65e0\u9650",text:"wuxian"},{label:"\u865a\u62df",text:"xuni"},{label:"\u7535\u73a9",text:"dianwan"},{label:"\u5fbd\u7ae0",text:"huizhang"},{label:"\u5317\u6781\u5708",text:"beijiquan"},{label:"\u4ec1\u738b",text:"renwang"},{label:"\u602a\u730e",text:"guailie"},{label:"\u5927\u4f6c",text:"dalao"},{label:"\u5f00\u8f66",text:"kaiche"},{label:"\u5927\u96c4",text:"daxiong"},{label:"\u4ee3\u7ec4",text:"daizu"},{label:"\u4e9a\u514b\u529b",text:"yakeli"},{label:"\u9ec4\u94dc",text:"huangtong"},{label:"\u4e0d\u9508\u94a2",text:"buxiugang"},{label:"\u94dd\u952d",text:"lvding"},{label:"\u6ce8\u5851",text:"zhusu"},{label:"\u6210\u578b",text:"chengxing"},{label:"\u83e0\u841d",text:"boluo"},{label:"\u9713\u8679",text:"nihong"},{label:"\u87ba\u4e1d",text:"luosi"},{label:"\u536b\u661f\u8f74",text:"weixingzhou"},{label:"\u7ea2\u767d\u673a",text:"hongbaiji"},{label:"\u5e7b\u5f71",text:"huanying"},{label:"\u65e5\u6587",text:"riwen"},{label:"\u4fc4\u6587",text:"ewen"},{label:"\u952e\u5e3d",text:"jianmao"},{label:"\u5957\u4ef6",text:"taojian"},{label:"\u78b3\u7ea4\u7ef4",text:"tanxianwei"},{label:"\u73bb\u7ea4",text:"boxian"},{label:"\u70ed\u5347\u534e",text:"reshenghua"},{label:"\u5934\u53d1",text:"toufa"},{label:"\u5ba2\u5385",text:"keting"},{label:"\u6e38\u6cf3\u6c60",text:"youyongchi"},{label:"\u5468\u672b",text:"zhoumo"},{label:"\u5f1f\u5f1f",text:"didi"},{label:"\u53ef\u7231",text:"keai"},{label:"\u9e66\u9e49",text:"yingwu"},{label:"\u6f02\u767d",text:"piaobai"},{label:"\u7535\u6cf3",text:"dianyong"},{label:"\u6b66\u58eb\u9053",text:"wushidao"},{label:"\u7801\u519c",text:"manong"},{label:"\u8109\u51b2",text:"maichong"},{label:"\u84b8\u6c7d\u6ce2",text:"zhengqibo"},{label:"\u9752\u67e0",text:"qingning"},{label:"\u58f0\u6ce2",text:"shengbo"},{label:"\u6a44\u6984",text:"ganlan"},{label:"\u524d\u950b",text:"qianfeng"},{label:"\u6df1\u7a7a",text:"shenkong"},{label:"\u539f\u70b9",text:"yuandian"},{label:"\u6a31\u82b1",text:"yinghua"},{label:"\u539f\u5382",text:"yuanchang"},{label:"\u9759\u7535\u5bb9",text:"jingdianrong"},{label:"\u629b\u5149",text:"paoguang"},{label:"\u4f73\u8fbe\u9686",text:"jiadalong"},{label:"\u5b81\u829d",text:"ningzhi"},{label:"\u5317\u6781\u661f",text:"beijixing"},{label:"\u9000\u70e7",text:"tuishao"},{label:"\u5403\u74dc",text:"chigua"},{label:"\u89e3\u6bd2",text:"jiedu"},{label:"\u6478\u9c7c",text:"moyu"}]),N=x.a.Countdown,z=function(e,t){return"1"!==e&&t&&0!==t.length?t:k},R=[{path:"/",component:S((function(e){var t=Object(l.useState)(0),a=Object(m.a)(t,2),r=a[0],c=a[1],o=Object(l.useState)(0),i=Object(m.a)(o,2),u=i[0],x=i[1],p=Object(l.useState)([]),j=Object(m.a)(p,2),v=j[0],O=j[1],w=Object(l.useState)(""),y=Object(m.a)(w,2),S=y[0],C=y[1],k=Object(l.useState)(!1),R=Object(m.a)(k,2),$=R[0],W=R[1],M=Object(l.useRef)("center"),T=Object(l.useRef)(z(e.$state.root.wordsMode,e.$state.root.customerWords)),I=Object(l.useRef)(null),A=Object(l.useRef)(null),q=Object(l.useRef)(0),D=Object(l.useRef)(!1),U=Object(l.useRef)(0),J=Object(l.useRef)(0),_=Object(l.useRef)(!1),P=Object(l.useRef)(53),F=Object(l.useRef)(0),B=function(e){O((function(t){var a=Object(b.a)(T.current);return e?(q.current=0,[Object(s.a)({isCorrect:null},a[q.current])]):(q.current+=1,q.current>=a.length&&(q.current=0),t.concat(Object(s.a)({isCorrect:null},a[q.current])))}))},L=function(e,t){var a=!0;return e.forEach((function(e,l){t.charAt(l)!==e&&(a=!1)})),a},V=Object(l.useCallback)((function(){D.current=!1,J.current=0,_.current=!1,F.current=0,W(!1),C(""),x(0),T.current=function(e){for(var t=e.length-1;t>=0;t--){var a=Math.floor(Math.random()*(t+1)),l=e[a];e[a]=e[t],e[t]=l}return e}(T.current),B(!0),A.current.focus()}),[]);return Object(l.useEffect)((function(){if(I){var e=I.current.lastElementChild;if(!e||!e.lastElementChild)return;var t=I.current.scrollTop;Array.from(e.children).forEach((function(a,l){P.current=a.offsetHeight;var n=a.offsetTop-e.offsetTop,r=P.current+t,c=r-5<n&&n<r+5;!D.current&&c&&(U.current=l,D.current=!0)})),e.lastElementChild.offsetTop-e.offsetTop-t<3*P.current+1&&B()}}),[v.length]),Object(l.useEffect)((function(){if(""!==S){_.current||c(Date.now()+6e4),_.current=!0;var e=Array.from(S.trim());if(" "===S[S.length-1]){if(C(""),0===e.length)return;O((function(t){var a=Object(b.a)(t),l=a[u],n=L(e,l.text);return a[u].isCorrect=n&&e.length===l.text.length,a})),x(u+1),u+1===U.current&&(J.current+=1,I.current.scrollTop=P.current*J.current,D.current=!1,B())}else O((function(t){var a=Object(b.a)(t),l=a[u],n=L(e,l.text);return a[u].isCorrect=!1!==n&&null,a}))}else O((function(e){var t=Object(b.a)(e);return t[u]&&(t[u].isCorrect=null),t}))}),[u,S]),Object(l.useEffect)((function(){T.current=z(e.$state.root.wordsMode,e.$state.root.customerWords),V()}),[e.$state.root.wordsMode,e.$state.root.customerWords,V]),Object(l.useEffect)((function(){V(),window.addEventListener("keyup",(function(){F.current+=1}))}),[V]),n.a.createElement("div",{className:"home"},n.a.createElement(f.a,{justify:M.current},n.a.createElement(g.a,{flex:"450px",className:"home-scale-box-".concat(e.$state.root.uiScale)},n.a.createElement("div",{className:"home-show-main"},$&&n.a.createElement("div",{className:"type-end"}),n.a.createElement("div",{className:"home-show-main-window",ref:I},n.a.createElement(f.a,{gutter:12},v.map((function(e,t){return n.a.createElement(g.a,{key:t,className:"".concat(!0===e.isCorrect?"correct":""," ").concat(!1===e.isCorrect?"incorrect":"")},n.a.createElement("div",{className:"home-show-main-window--label ".concat(u===t?"acting":"")},e.label),n.a.createElement("div",{className:"home-show-main-window--text"},e.text))}))))),n.a.createElement(f.a,{justify:"space-between",align:"middle",gutter:0},n.a.createElement(g.a,{flex:"285px"},n.a.createElement(d.a,{className:"home-input",ref:A,value:S,disabled:$,onChange:function(e){C(e.target.value)}})),n.a.createElement(g.a,{flex:"90px"},n.a.createElement(N,{className:"home-countdown ".concat(_.current?"":"time-ready"),value:r,format:"m:ss",onFinish:function(){_.current&&(W(!0),console.log(v))}})),n.a.createElement(g.a,{flex:"50px"},n.a.createElement(h.a,{className:"home-btn",onClick:V,type:"primary",icon:n.a.createElement(E.a,null)}))),$&&n.a.createElement(f.a,null,n.a.createElement(g.a,{span:24},n.a.createElement("div",{className:"result-wpm"},v.filter((function(e){return null!==e.isCorrect})).length," WPM")),n.a.createElement(g.a,{span:12},n.a.createElement("div",{className:"result-title"},"\u6b63\u786e")),n.a.createElement(g.a,{span:12},n.a.createElement("div",{className:"result-numbers correct"},v.filter((function(e){return!0===e.isCorrect})).length)),n.a.createElement(g.a,{span:12},n.a.createElement("div",{className:"result-title"},"\u9519\u8bef")),n.a.createElement(g.a,{span:12},n.a.createElement("div",{className:"result-numbers wrong"},v.filter((function(e){return!1===e.isCorrect})).length)),n.a.createElement(g.a,{span:12},n.a.createElement("div",{className:"result-title"},"\u6309\u952e\u603b\u6570")),n.a.createElement(g.a,{span:12},n.a.createElement("div",{className:"result-numbers"},F.current))))))})),exact:!0}],$=function(e){return n.a.createElement(i.a,{basename:"/typing-cn"},e.header,n.a.createElement("div",{className:e.mainClass},n.a.createElement(l.Suspense,{fallback:n.a.createElement("div",null,"main page loading...")},n.a.createElement(u.c,null,R.map((function(e,t){return n.a.createElement(u.a,{path:e.path,exact:e.exact&&!e.children,key:t,render:function(t){return n.a.createElement("div",null,e.component?n.a.createElement(e.component,t):"",e.children&&e.children.length>0&&n.a.createElement(l.Suspense,{fallback:n.a.createElement("div",null,"child loading...")},n.a.createElement(u.c,null,e.children.map((function(e,a){return n.a.createElement(u.a,{path:t.match.url+e.path,exact:e.exact,key:a,component:e.component})})))))}})}))))),e.footer)},W=a(268),M=a(266),T=a(269),I=a(265),A=a(274),q=(a(238),a(239));function D(e){return q(e,{removeSpace:!0,removeTone:!0})}var U=/^[\u2E80-\u9FFF]+$/,J=k.map((function(e){return e.label})).join("|"),_=S((function(e){var t=Object(l.useState)(!1),a=Object(m.a)(t,2),r=a[0],c=a[1],o=Object(l.useState)(e.$state.root.wordsMode),i=Object(m.a)(o,2),u=i[0],s=i[1],b=Object(l.useRef)(J),x=Object(l.useState)(e.$state.root.customerWords&&0!==e.$state.root.customerWords.length?e.$state.root.customerWords.map((function(e){return e.label})).join("|"):J),E=Object(m.a)(x,2),p=E[0],j=E[1],v=Object(l.useState)([]),O=Object(m.a)(v,2),w=O[0],y=O[1];return n.a.createElement("div",{className:"app-header"},n.a.createElement(f.a,null,n.a.createElement(g.a,{flex:"auto"},n.a.createElement(h.a,{type:"link",ghost:!0,icon:n.a.createElement(A.a,null),onClick:function(){return c(!0)}},"\u8bbe\u7f6e"),n.a.createElement("span",null,"UI\u5c3a\u5bf8:\xa0\xa0"),n.a.createElement(W.a.Group,{onChange:function(t){e.$dispatch("setUiScale",t.target.value)},defaultValue:e.$state.root.uiScale},n.a.createElement(W.a,{value:"s"},"\u6b63\u5e38"),n.a.createElement(W.a,{value:"m"},"\u5927"),n.a.createElement(W.a,{value:"l"},"\u7279\u5927")))),n.a.createElement(M.a,{title:"",visible:r,closable:!1,maskClosable:!1,footer:n.a.createElement(T.a,{placement:"left",title:"\u5c06\u81ea\u52a8\u53bb\u9664\u91cd\u590d\u8bcd\u7ec4"},n.a.createElement(h.a,{type:"primary",onClick:function(){var t=Array.from(new Set(p.split("|").filter(Boolean))),a=[];if(0===t.length&&a.push("\u8bf7\u8f93\u5165\u5b57\u8bcd\uff0c\u5e76\u4ee5\u7b26\u53f7|\u95f4\u9694"),t.forEach((function(e){U.test(e)||a.push(e)})),y(a),0===a.length){if(e.$dispatch("setWordsMode",u),"2"===u){j(t.join("|")),console.time("getPinyin");var l=t.map((function(e){return{label:e,text:D(e)}}));console.timeEnd("getPinyin"),e.$dispatch("saveCustomerWords",l)}c(!1)}}},"\u786e\u5b9a"))},n.a.createElement(I.a,{defaultActiveKey:u,onChange:function(e){s(e)}},n.a.createElement(I.a.TabPane,{tab:"\u9ed8\u8ba4\u8bcd\u7ec4",key:"1"},n.a.createElement(d.a.TextArea,{autoSize:{minRows:9,maxRows:16},disabled:!0,defaultValue:b.current})),n.a.createElement(I.a.TabPane,{tab:"\u81ea\u5b9a\u4e49\u8bcd\u7ec4",key:"2"},n.a.createElement(d.a.TextArea,{autoSize:{minRows:9,maxRows:16},value:p,onChange:function(e){j(e.target.value)}}))),n.a.createElement(f.a,{className:"header-modal--words-length"},n.a.createElement(g.a,{span:12},n.a.createElement(f.a,{gutter:6,className:"error-word"},w.map((function(e,t){return n.a.createElement(g.a,{key:t},e)})))),n.a.createElement(g.a,{span:12},"\u5171(","1"===u?b.current.split("|").length:p.split("|").filter(Boolean).length,")\u4e2a\u8bcd"))))})),P=function(){return n.a.createElement(o.a,{store:C},n.a.createElement($,{mainClass:"app-main",header:n.a.createElement(_,null),footer:n.a.createElement("div",null)}))};c.a.render(n.a.createElement(P,null),document.getElementById("root"))}},[[151,1,2]]]);
//# sourceMappingURL=main.a719ec9b.chunk.js.map