import{d as a,G as n,an as i,p as c,c as d,e as o,M as u,H as h,k as f}from"./Bu11ic9p.js";const l=["src","alt","width","height"],m=a({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(t){const e=t,r=n(()=>{var s;return(s=e.src)!=null&&s.startsWith("/")&&!e.src.startsWith("//")?i(e.src,c().app.baseURL):e.src});return(s,p)=>(d(),o("img",u(s.$attrs,{src:h(r),alt:t.alt,width:t.width,height:t.height}),null,16,l))}}),w=f(m,[["__scopeId","data-v-2ef15301"]]);export{w as default};
