import{d as r,aa as m,ab as f,O as c,ac as P,c as h,Q as v,r as L,ad as l,ae as g,af as b,q as j,g as u,ag as R,ah as S,ai as T,aj as _,ak as x,al as A}from"./entry.84bf4c39.js";const k=r({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(e,o){const a=await l[e.name]().then(t=>t.default||t);return()=>u(a,e.layoutProps,o.slots)}}),C=r({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(e,o){const a=j(),t=m(f),s=t===c()?P():t,n=h(()=>v(e.name)??s.meta.layout??"default"),i=L();o.expose({layoutRef:i});const p=a.deferHydration();return()=>{const d=n.value&&n.value in l,y=s.meta.layoutTransition??g;return b(_,d&&y,{default:()=>u(T,{suspensible:!0,onResolve:()=>{S(p)}},{default:()=>u(B,{layoutProps:R(o.attrs,{ref:i}),key:n.value||void 0,name:n.value,shouldProvide:!e.name,hasTransition:!!y},o.slots)})}).default()}}}),B=r({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(e,o){const a=e.name;return e.shouldProvide&&x(A,{isCurrent:t=>a===(t.meta.layout??"default")}),()=>{var t,s;return!a||typeof a=="string"&&!(a in l)?(s=(t=o.slots).default)==null?void 0:s.call(t):u(k,{key:a,layoutProps:e.layoutProps,name:a},o.slots)}}});export{C as _};
