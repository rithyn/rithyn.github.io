import{d,G as a,W as b,c as S,e as v,f as P,n as w,H as f,k as _,u as C,aq as I,a1 as x,r as z,L as c}from"./Bu11ic9p.js";import D from"./BHTtyH_s.js";import"./DH5jQ9bQ.js";import"./Cyt4k1Wn.js";import"./DwumfPVo.js";import"./BUSftlg5.js";import"./BjjqyqFD.js";import"./Bwg3yuCi.js";import"./76o_WpOd.js";import"./CNNVu38x.js";import"./DcgYj9F2.js";import"./D2P1HG42.js";const E=d({__name:"Ellipsis",props:{width:{type:String,default:"10rem"},height:{type:String,default:"10rem"},zIndex:{type:String,default:"10"},top:{type:String,default:"0"},left:{type:String,default:"auto"},right:{type:String,default:"auto"},blur:{type:String,default:"50px"},colors:{type:Array,default:()=>["rgba(0, 71, 225, 0.22)","rgba(26, 214, 255, 0.22)","rgba(0, 220, 130, 0.22)"]}},setup(e){const n=a(()=>((t=s)=>t.top)()),o=a(()=>((t=s)=>t.left)()),r=a(()=>((t=s)=>t.right)()),l=a(()=>((t=s)=>t.zIndex)()),m=a(()=>((t=s)=>t.width)()),g=a(()=>((t=s)=>t.height)()),y=a(()=>((t=s)=>`blur(${t.blur})`)()),h=a(()=>((t=s)=>{var i,p,u;return`linear-gradient(97.62deg, ${(i=t==null?void 0:t.colors)==null?void 0:i[0]} 2.27%, ${(p=t==null?void 0:t.colors)==null?void 0:p[1]} 50.88%, ${(u=t==null?void 0:t.colors)==null?void 0:u[2]} 98.48%)`})()),s=e,{$pinceau:$}=b(s,void 0,{_6HG_top:n,_31J_insetInlineStart:o,_Cy1_insetInlineEnd:r,_RFz_zIndex:l,_U3d_maxWidth:m,_Rmg_height:g,_MhW_filter:y,_LPh_background:h});return(t,i)=>(S(),v("div",{class:w(["ellipsis",[f($)]])},i[0]||(i[0]=[P("div",{class:"ellipsis-item"},null,-1)]),2))}}),W=_(E,[["__scopeId","data-v-7d261f72"]]);async function k(e){C();const n=f(e);{const{data:o}=await I(`nuxt-component-meta${n?`-${n}`:""}`,()=>$fetch(`/api/component-meta${n?`/${n}`:""}`));return a(()=>o.value)}}const q=d({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(e){const n=a(()=>x(e.component)),o=z({...e.props}),r=await k(e.component);return{as:n,formProps:o,componentData:r}},render(e){const n=Object.entries(this.$slots).reduce((o,[r,l])=>{if(r.startsWith("component-")){const m=r.replace("component-","");o[m]=l}return o},{});return c("div",{class:"component-playground"},[c("div",{class:"component-playground-wrapper"},[c(W,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),c(e.as,{...e.formProps,class:"component-playground-component"},{...n})]),c(D,{modelValue:e.formProps,componentData:e.componentData,"onUpdate:modelValue":o=>e.formProps=o})])}}),F=_(q,[["__scopeId","data-v-9ca9b996"]]);export{F as default};
