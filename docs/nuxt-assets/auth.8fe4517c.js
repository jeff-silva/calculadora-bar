import{ar as s,as as u,A as n,ad as i}from"./entry.5391dcd1.js";import{u as d}from"./useFirebaseStore.26d32031.js";const l=s(async(o,f)=>{let e,r;if(o.path=="/auth")return;const t=d();if(!([e,r]=u(()=>new Promise((a,h)=>{if(t.ready)return a(t.user);t.event.on("onAuthStateChanged",()=>{a(t.user)})})),e=await e,r(),e)){const a=n();return i(`/auth?redirect=${a.fullPath}`)}});export{l as default};