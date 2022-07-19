import{j as a,R as B,C as D,r as i,e as f,m as u,o as U}from"./vendor.d82eab52.js";var I=[["",`!
1`,`@
2`,`#
3`,`$
4`,`%
5`,`^
6`,`&
7`,`*
8`,`(
9`,`)
0`,`_
-`,`+
=`,{w:2},""],[{w:1.5},"","Q","W","E","R","T","Y","U","I","O","P",`{
[`,`}
]`,{w:1.5},""],[{w:1.75},"","A","S","D","F","G","H","J","K","L",`:
;`,`"
'`,{w:2.25},""],[{w:2.25},"","Z","X","C","V","B","N","M",`<
,`,`>
.`,`?
/`,{w:2.75},""],[{w:3.75},"",{w:6.25}," ",{w:5},""]];const H=I.map(e=>{const r=[];return e.forEach((c,s)=>{if(typeof c=="string"){let o={w:1,t:c};const t=e[s-1];s>0&&typeof t=="object"&&(o={w:t.w,t:c}),r.push(o)}}),r}),L=e=>{const r=s=>{setTimeout(()=>{e.finishAnimate&&e.finishAnimate(s)},250)},c=s=>{let o="key-item";if(s==="")o+=" placeholder";else{const t=s.split(`
`).pop()||"";e.highlightKeys.has(t)&&(o+=" high-light"),e.correctedKey&&e.correctedKey===t&&(o+=" keyCorrect",r(t)),e.wrongKey&&e.wrongKey===t&&(o+=" headShake",r(t)),e.blurKeys&&e.blurKeys.has(t)&&(o+=" blur")}return o};return a("div",{className:"Keyboard",children:H.map((s,o)=>a(B,{justify:"space-between",children:s.map((t,h)=>a(D,{className:c(t.t),style:{width:`${60*t.w}px`},dangerouslySetInnerHTML:{__html:t.t.replace(`
`,"<br>")}},h))},o))})};const A=["Q","W","E","R","T","A","S","D","F","G","Z","X","C","V","B"],T=["1","2","3","4","5","6"],N=["Y","U","I","O","P","H","J","K","L","N","M"],x=["7","8","9","0"],G=["-","=","[","]",";","'",",",".","/"],W=(e,r)=>(e=typeof e!="undefined"?e:0,r=typeof r!="undefined"?r:9007199254740992,Math.round(Math.random()*(r-e))+e),C=(e,r)=>{const c={leftNum:T.join(""),left:A.join(""),rightNum:x.join(""),right:N.join(""),charAll:""};c.charAll=c.left+c.right;const s=(c[e]||c.charAll).replace(r||"","");return s.charAt(W(0,s.length-1))},P=()=>{const[e,r]=i.exports.useState(""),[c,s]=i.exports.useState(""),o=i.exports.useRef(null),[t,h]=i.exports.useState("charAll"),[g,p]=i.exports.useState(new Set([])),[b,K]=i.exports.useState(),[k,w]=i.exports.useState(),[R,y]=i.exports.useState(new Set([])),[v,m]=i.exports.useState(0),[E,S]=i.exports.useState(0),F=n=>{r(n.key);const _=n.key.length===1?n.key.toUpperCase():n.key,l=Array.from(g)[0];_===l?(K(l),m(d=>d+1),p(new Set([C(t,l)]))):(w(l),S(d=>d+1)),n.persist(),n.preventDefault(),n.stopPropagation()},j=n=>{console.log(n.key,n.keyCode,n.metaKey),n.persist()},M=n=>{K(""),w("")};return i.exports.useEffect(()=>{e===""?s(""):e===" "?s("Space"):e.length===1?s(e.toLocaleUpperCase()):s(e)},[e]),i.exports.useEffect(()=>{const n=[...T,...x,...G];t==="charAll"?y(new Set(n)):t==="left"?y(new Set(n.concat(N))):t==="right"&&y(new Set(n.concat(A))),p(new Set([C(t)])),m(0),S(0),o.current.focus()},[t]),f("div",{className:"Training",children:[a("div",{className:"Training-mode",children:f(u.Group,{onChange:n=>h(n.target.value),defaultValue:t,children:[a(u.Button,{value:"left",children:"\u5DE6\u624B\u6A21\u5F0F"}),a(u.Button,{value:"charAll",children:"\u5168\u90E8"}),a(u.Button,{value:"right",children:"\u53F3\u624B\u6A21\u5F0F"})]})}),a(L,{highlightKeys:g,correctedKey:b,wrongKey:k,finishAnimate:M,blurKeys:R}),a("div",{className:"Training__input",children:a(U,{ref:o,onKeyDown:F,onKeyUp:j})}),a("div",{className:"Training__desc",children:a("div",{children:c})}),f("div",{className:"Training-count",children:[a("div",{className:"correct",children:v}),a("div",{className:"wrong",children:E})]})]})};export{P as default};
