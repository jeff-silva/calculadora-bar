import{a3 as r,ak as m,al as f,l as c,am as P,M as h,N as v,an as l,ao as L,ap as b,ai as g,a8 as u,a1 as R,aq as S,ar as T,as as _,at as j,au as x,h as A}from"./entry.cdc6570a.js";const k=r({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(e,o){const a=await l[e.name]().then(t=>t.default||t);return()=>u(a,e.layoutProps,o.slots)}}),C=r({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(e,o){const a=g(),t=m(f),s=t===c()?P():t,n=h(()=>A(e.name)??s.meta.layout??"default"),i=v();o.expose({layoutRef:i});const y=a.deferHydration();return()=>{const d=n.value&&n.value in l,p=s.meta.layoutTransition??L;return b(_,d&&p,{default:()=>u(T,{suspensible:!0,onResolve:()=>{S(y)}},{default:()=>u(B,{layoutProps:R(o.attrs,{ref:i}),key:n.value||void 0,name:n.value,shouldProvide:!e.name,hasTransition:!!p},o.slots)})}).default()}}}),B=r({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(e,o){const a=e.name;return e.shouldProvide&&j(x,{isCurrent:t=>a===(t.meta.layout??"default")}),()=>{var t,s;return!a||typeof a=="string"&&!(a in l)?(s=(t=o.slots).default)==null?void 0:s.call(t):u(k,{key:a,layoutProps:e.layoutProps,name:a},o.slots)}}});export{C as _};