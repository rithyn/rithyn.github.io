import m from"./BZV_uyWp.js";import{d as c,Z as l,L as r}from"./Bu11ic9p.js";const f=(o,t)=>r("pre",null,JSON.stringify({message:"You should use slots with <ContentList>",slot:o,data:t},null,2)),h=c({name:"ContentList",props:{path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0}},render(o){const t=l(),{path:n,query:a}=o,p={...a||{},path:n||(a==null?void 0:a.path)||"/"};return r(m,p,{default:t!=null&&t.default?({data:e,refresh:u,isPartial:d})=>t.default({list:e,refresh:u,isPartial:d,...this.$attrs}):e=>f("default",e.data),empty:e=>t!=null&&t.empty?t.empty(e):f("default",e==null?void 0:e.data),"not-found":e=>{var u;return t!=null&&t["not-found"]?(u=t==null?void 0:t["not-found"])==null?void 0:u.call(t,e):f("not-found",e==null?void 0:e.data)}})}}),L=h;export{L as default};