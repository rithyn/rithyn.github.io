import{d as _,r as u,al as k,am as w,x,c as a,e as i,f,i as C,w as $,V as m,H as y,T as b,n as v,aa as S,k as g,t as V,h as z,X as I}from"./Bu11ic9p.js";const N={class:"icon-wrapper"},P=_({__name:"ProseCodeCopyButton",props:{content:{type:String,default:""},show:{type:Boolean,default:!1}},setup(e){const n=e,s=u(),{copy:t}=k();w(s,()=>{o.value==="copied"&&(o.value="init")});const{prose:c}=x(),o=u("init"),h=B=>{t(n.content).then(()=>{o.value="copied"}).catch(l=>{console.warn("Couldn't copy to clipboard!",l)})};return(B,l)=>{const p=S;return a(),i("button",{ref_key:"copyButtonRef",ref:s,class:v([(e.show||o.value==="copied")&&"show"]),onClick:h},[l[0]||(l[0]=f("span",{class:"sr-only"},"Copy to clipboard",-1)),f("span",N,[C(b,{name:"fade"},{default:$(()=>{var r,d;return[o.value==="copied"?(a(),m(p,{key:0,name:(r=y(c).copyButton)==null?void 0:r.iconCopied,size:"18",class:"copied"},null,8,["name"])):(a(),m(p,{key:1,name:(d=y(c).copyButton)==null?void 0:d.iconCopy,size:"18"},null,8,["name"]))]}),_:1})])],2)}}}),T=g(P,[["__scopeId","data-v-4a003820"]]),A={key:0,class:"filename"},M=_({__name:"ProseCode",props:{code:{type:String,default:""},language:{type:String,default:null},filename:{type:String,default:null},highlights:{type:Array,default:()=>[]}},setup(e){const n=u(!1);return(s,t)=>{const c=T;return a(),i("div",{class:v([[`highlight-${e.language}`],"prose-code"]),onMouseenter:t[0]||(t[0]=o=>n.value=!0),onMouseleave:t[1]||(t[1]=o=>n.value=!1)},[e.filename?(a(),i("span",A,V(e.filename),1)):z("",!0),I(s.$slots,"default",{},void 0,!0),C(c,{show:n.value,content:e.code,class:"copy-button"},null,8,["show","content"])],34)}}}),D=g(M,[["__scopeId","data-v-c164ce0a"]]);export{D as default};