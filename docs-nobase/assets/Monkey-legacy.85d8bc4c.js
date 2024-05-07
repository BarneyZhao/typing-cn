!function(){var e=document.createElement("style");e.innerHTML='.Monkey{margin-top:50px}.Monkey .word-count-radio{padding:0 0 30px 30px}.Monkey .word-count-radio .ant-radio-button-wrapper{color:var(--head-text-color);background-color:transparent;border:none;opacity:.5}.Monkey .word-count-radio .ant-radio-button-wrapper.ant-radio-button-wrapper-checked{color:var(--word-count-checked-color)}.Monkey .word-count-radio .ant-radio-button-wrapper:not(:first-child):before{background-color:transparent;color:var(--head-text-color);content:"/"}.Monkey .caret{position:absolute;width:3px;height:30px;border-radius:10px;background-color:var(--monkey-caret-color);animation-iteration-count:infinite;animation-duration:1s;transition:transform .25s;transform:translate3d(26px,7px,0)}.Monkey .caret.flash{animation-name:caretFlash}.Monkey .caret.hide{display:none}.Monkey .type-main-box{transition:opacity .15s;opacity:1}.Monkey .type-main-box.fading{opacity:0}.Monkey .type-main-box.hide{display:none}.Monkey .words-box{font-size:22px;display:flex;flex-wrap:wrap;width:100%;align-content:flex-start;color:var(--head-text-color);overflow:hidden;user-select:none;min-width:920px}.Monkey .words-box .word{margin:7px;opacity:.8}.Monkey .words-box .word.correct{color:var(--primary-color);opacity:1}.Monkey .words-box .word.wrong{color:var(--monkey-error-color);opacity:1}.Monkey .words-box .word .label{font-size:16px;line-height:16px;text-align:center;position:relative;top:3px;color:var(--monkey-sub-color)}.Monkey .words-box .word .letter{display:inline-block;width:14px;opacity:.6}.Monkey .words-box .word .letter.correct{color:var(--primary-color);opacity:1}.Monkey .words-box .word .letter.wrong{color:var(--monkey-error-color);opacity:1}.Monkey .hidden-input{position:absolute;left:-100vw}.Monkey .tip-line{margin-top:50px;font-size:12px;text-align:center;color:var(--head-text-color);opacity:.5;transition:opacity .5s linear}.Monkey .tip-line code{padding:1px 3px;margin:0 3px;border-radius:2px;background-color:var(--head-text-color);color:var(--bg-color)}.Monkey .tip-line.hide{opacity:0}.Monkey .type-result-box{display:none}.Monkey .type-result-box.show{display:block}.Monkey .reload-line{margin-top:80px;text-align:center}@keyframes caretFlash{0%,to{opacity:0}50%{opacity:1}}\n',document.head.appendChild(e),System.register(["./vendor-legacy.436b4e74.js","./index-legacy.aae38a48.js","./wordTool-legacy.9c9d16c7.js","./ReloadBtn-legacy.02289bbc.js"],(function(e){"use strict";var t,r,o,n,c,l,i,a,s,d;return{setters:[function(e){t=e.r,r=e.e,o=e.j,n=e.m,c=e.R,l=e.C},function(e){i=e.s},function(e){a=e.w},function(e){s=e.R,d=e.T}],execute:function(){const u=e=>Array.from(e.children);e("default",i((e=>{const i=t.exports.useRef(null),p=t.exports.useRef(null),h=t.exports.useRef(null),y=t.exports.useRef(a.getWords(e.$state.root.wordsMode,e.$state.root.customerWords)),x=t.exports.useRef([0,0]),m=t.exports.useRef({wpm:"",right:0,wrong:0,acc:0,time:{begin:0,secs:0}}),[g,f]=t.exports.useState(!1),[w,b]=t.exports.useState(!1),[k,v]=t.exports.useState(!1),[C,M]=t.exports.useState(!1),[N,A]=t.exports.useState(""),[B,S]=t.exports.useState([]),[R,$]=t.exports.useState({top:0,left:0}),[E,j]=t.exports.useState(30),T=()=>{const e=x.current,t=p.current.getBoundingClientRect(),r=u(p.current)[e[0]];if(!r)return;const o=Array.from(r.getElementsByClassName("letter"));if(o.length<=e[1]){const r=o[e[1]-1].getBoundingClientRect();$({top:r.top-t.top+2,left:r.left-t.left+r.width})}else{const r=o[e[1]].getBoundingClientRect();$({top:r.top-t.top+2,left:r.left-t.left})}},W=t.exports.useCallback(((e,t)=>{const r=x.current,o=""===N||" "===N.charAt(N.length-1);let n;if(32===e)n=o?r:[r[0]+1,0];else{if(r[1]>=B[r[0]].letterArr.length){const e=u(p.current)[r[0]],o=document.createElement("code");o.className="letter wrong extra-letter",o.innerText=t,e.appendChild(o)}n=[r[0],r[1]+1]}x.current=n,T(),S((c=>{const l=c[r[0]].letterArr[r[1]];if(l&&32!==e&&(l.isCorrect=t===l.letter,c[r[0]].letterArr[r[1]]=l),32===e&&!o)if(c[r[0]].letterArr.some((e=>null===e.isCorrect)))c[r[0]].isSkip=!0,c[r[0]].isCorrect=!1;else{const e=u(p.current)[r[0]].getElementsByClassName("extra-letter");e&&0!==e.length?c[r[0]].isCorrect=!1:c[r[0]].isCorrect=c[r[0]].letterArr.every((e=>e.isCorrect))}return(n[0]>c.length-1||r[0]===c.length-1&&r[1]===c[r[0]].letterArr.length-1)&&(c[r[0]].isCorrect=c[r[0]].letterArr.every((e=>e.isCorrect)),m.current.right=c.filter((e=>e.isCorrect)).length,m.current.wrong=c.length-m.current.right,m.current.acc=Math.round(m.current.right/(m.current.right+m.current.wrong)*100),m.current.time.secs=Math.round((Date.now()-m.current.time.begin)/1e3),m.current.wpm=(m.current.right/(m.current.time.secs/60)).toFixed(2),f(!1),v(!0),setTimeout((()=>{M(!0)}),150)),c})),A((r=>32!==e||""!==r&&" "!==r.charAt(r.length-1)?r+t:r))}),[N,B]),I=t.exports.useCallback((()=>{const e=N.charAt(N.length-1);if(""===e)return;const t=x.current;let r;if(" "===e)if(B[t[0]-1].isCorrect)r=t;else if(B[t[0]-1].isSkip){const e=B[t[0]-1].letterArr.findIndex((e=>null===e.isCorrect));r=[t[0]-1,e]}else{const e=u(p.current)[t[0]-1].getElementsByClassName("letter");r=[t[0]-1,e.length]}else{const e=u(p.current)[t[0]],o=e.getElementsByClassName("extra-letter");o&&o.length>0&&e.removeChild(o[o.length-1]),r=[t[0],t[1]-1]}x.current=r,T(),S((r=>(" "===e?!1===r[t[0]-1].isCorrect&&(r[t[0]-1].isCorrect=null):r[t[0]].letterArr.length>=t[1]&&(r[t[0]].letterArr[t[1]-1].isCorrect=null,r[t[0]].isCorrect=null),r))),A((r=>{let o=!0;return" "===e&&B[t[0]-1].isCorrect&&(o=!1),o?r.substring(0,r.length-1):r}))}),[N,B]),z=()=>{f(!0),i.current.focus()},D=t.exports.useCallback((()=>{x.current=[0,0],y.current=a.shuffle(y.current),m.current={wpm:"",right:0,wrong:0,acc:0,time:{begin:0,secs:0}};const e=p.current.getElementsByClassName("extra-letter");0!==e.length&&Array.from(e).forEach((e=>{e.parentNode.removeChild(e)})),S(a.jsonCopy(y.current.slice(0,E)).map((e=>Object.assign({},e,{letterArr:Array.from(e.text).map((e=>({letter:e,isCorrect:null}))),isCorrect:null,isSkip:!1})))),A(""),v(!1),M(!1),setTimeout((()=>{z(),T()}),10)}),[E]);return t.exports.useEffect((()=>{y.current=a.getWords(e.$state.root.wordsMode,e.$state.root.customerWords),D()}),[e.$state.root.wordsMode,e.$state.root.customerWords,D,E]),r("div",{className:"Monkey",children:[o("div",{className:"word-count-radio",children:r(n.Group,{value:E,size:"small",onChange:e=>{j(e.target.value)},children:[o(n.Button,{tabIndex:-1,value:20,children:"20"}),o(n.Button,{tabIndex:-1,value:30,children:"30"}),o(n.Button,{tabIndex:-1,value:40,children:"40"}),o(n.Button,{tabIndex:-1,value:50,children:"50"})]})}),r(c,{justify:"center",align:"middle",children:[r(l,{flex:"900px",className:`type-main-box ${k?"fading":""} ${C?"hide":""}`,children:[o("div",{className:"caret "+(g?w?"flash":"":"hide"),ref:h,style:{transform:`translate3d(${R.left}px,${R.top}px,0)`}}),o("div",{className:"words-box",onClick:z,ref:p,children:B.map(((e,t)=>{var n;return r("div",{className:"word "+(e.isCorrect?"correct":!1===e.isCorrect?"wrong":""),children:[o("div",{className:"label",children:e.label}),null===(n=e.letterArr)||void 0===n?void 0:n.map(((e,r)=>o("code",{className:"letter "+(e.isCorrect?"correct":!1===e.isCorrect?"wrong":""),children:e.letter},`${t}_${r}`)))]},t)}))}),o("input",{className:"hidden-input",type:"text",ref:i,onKeyDown:e=>{9!==e.keyCode&&(e.preventDefault(),e.stopPropagation(),e.persist()),C||(b(!1),1===e.key.length?(0===m.current.time.begin&&(m.current.time.begin=Date.now()),W(e.keyCode,e.key)):8===e.keyCode&&I())},onBlur:()=>{f(!1)},onFocus:()=>{f(!0),b(!0)}}),o("div",{className:"reload-line",children:o(s,{onClick:D})}),r("div",{className:"tip-line "+(w?"":"hide"),children:[o("div",{children:"点击词块进入输入状态"}),o("div",{children:"输入正确的拼音字母，然后空格"}),r("div",{children:["输入状态下",o("code",{children:"Tab"}),"后回车可以直接刷新"]}),o("div",{children:"觉得有意思可以打赏一下(#^.^#)(在上面↑↑)"})]})]}),r(l,{flex:"900px",className:"type-result-box "+(C?"show":""),children:[o(d,{desc:"WPM",numStr:m.current.wpm,acc:m.current.acc,secs:m.current.time.secs}),o("div",{className:"reload-line",children:o(s,{onClick:D})})]})]})]})})))}}}))}();
