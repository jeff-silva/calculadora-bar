import{c as ee,r as z,o as te,L as ie,t as v,M as A,V as B,N as de,K as ce,O as le,P as pe,H as ae,Q as fe,R as me,S as _e,T as ye,A as n,z as a,U as Ve,x as y,W as D,X as $,B as V,Y as j,Z as H,v as U,$ as R,a0 as W,a1 as Q,a2 as G,y as b,a3 as K,a4 as q,a5 as w,a6 as ve,a7 as E,a8 as F,a9 as X,aa as ge,ab as he,ac as be,_ as we}from"./entry.1e445aeb.js";const Se={__name:"money",props:{modelValue:{type:[Number,String],default:""}},emits:["update:modelValue"],setup(e,{emit:u}){const t=e,c=u,f=i=>Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR"}).format(i).replace(" €",""),o=ee({get:()=>f(t.modelValue),set:i=>{p&&(p.masked.value=l.value,p.updateOptions(s),p._onChange(),i=parseFloat((i||"").replace(/[^0-9]/g,""))/100,c("update:modelValue",i))}}),r=z(null);let p,l,s={mask(i){this._value=f((i||"").replace(/[^0-9]/g,"")/100)}};return te(()=>{const i=r.value.$el;l=i.tagName=="INPUT"?i:i.querySelector("input"),p=ie(l,s)}),(i,m)=>(v(),A(B,{modelValue:o.value,"onUpdate:modelValue":m[0]||(m[0]=g=>o.value=g),ref_key:"inputRef",ref:r},null,8,["modelValue"]))}};function xe(e){return fe()?(me(e),!0):!1}function J(e){return typeof e=="function"?e():de(e)}const Ce=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Oe=Object.prototype.toString,Ae=e=>Oe.call(e)==="[object Object]",Ne=()=>{};function Te(e,u){function t(...c){return new Promise((f,o)=>{Promise.resolve(e(()=>u.apply(this,c),{fn:u,thisArg:this,args:c})).then(f).catch(o)})}return t}const ne=e=>e();function Ue(e=ne){const u=z(!0);function t(){u.value=!1}function c(){u.value=!0}const f=(...o)=>{u.value&&e(...o)};return{isActive:pe(u),pause:t,resume:c,eventFilter:f}}function Ee(e,u,t={}){const{eventFilter:c=ne,...f}=t;return ae(e,Te(c,u),f)}function Fe(e,u,t={}){const{eventFilter:c,...f}=t,{eventFilter:o,pause:r,resume:p,isActive:l}=Ue(c);return{stop:Ee(e,u,{...f,eventFilter:o}),pause:r,resume:p,isActive:l}}function Pe(e,u=!0){ce()?te(e):u?e():le(e)}function ke(e){var u;const t=J(e);return(u=t==null?void 0:t.$el)!=null?u:t}const M=Ce?window:void 0;function Y(...e){let u,t,c,f;if(typeof e[0]=="string"||Array.isArray(e[0])?([t,c,f]=e,u=M):[u,t,c,f]=e,!u)return Ne;Array.isArray(t)||(t=[t]),Array.isArray(c)||(c=[c]);const o=[],r=()=>{o.forEach(i=>i()),o.length=0},p=(i,m,g,h)=>(i.addEventListener(m,g,h),()=>i.removeEventListener(m,g,h)),l=ae(()=>[ke(u),J(f)],([i,m])=>{if(r(),!i)return;const g=Ae(m)?{...m}:m;o.push(...t.flatMap(h=>c.map(N=>p(i,h,N,g))))},{immediate:!0,flush:"post"}),s=()=>{l(),r()};return xe(s),s}const P=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},k="__vueuse_ssr_handlers__",Be=De();function De(){return k in P||(P[k]=P[k]||{}),P[k]}function $e(e,u){return Be[e]||u}function je(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const Re={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},Z="vueuse-storage";function We(e,u,t,c={}){var f;const{flush:o="pre",deep:r=!0,listenToStorageChanges:p=!0,writeDefaults:l=!0,mergeDefaults:s=!1,shallow:i,window:m=M,eventFilter:g,onError:h=d=>{console.error(d)},initOnMounted:N}=c,S=(i?_e:z)(typeof u=="function"?u():u);if(!t)try{t=$e("getDefaultStorage",()=>{var d;return(d=M)==null?void 0:d.localStorage})()}catch(d){h(d)}if(!t)return S;const x=J(u),I=je(x),O=(f=c.serializer)!=null?f:Re[I],{pause:ue,resume:L}=Fe(S,()=>oe(S.value),{flush:o,deep:r,eventFilter:g});return m&&p&&Pe(()=>{Y(m,"storage",T),Y(m,Z,re),N&&T()}),N||T(),S;function oe(d){try{if(d==null)t.removeItem(e);else{const _=O.write(d),C=t.getItem(e);C!==_&&(t.setItem(e,_),m&&m.dispatchEvent(new CustomEvent(Z,{detail:{key:e,oldValue:C,newValue:_,storageArea:t}})))}}catch(_){h(_)}}function se(d){const _=d?d.newValue:t.getItem(e);if(_==null)return l&&x!==null&&t.setItem(e,O.write(x)),x;if(!d&&s){const C=O.read(_);return typeof s=="function"?s(C,x):I==="object"&&!Array.isArray(C)?{...x,...C}:C}else return typeof _!="string"?_:O.read(_)}function re(d){T(d.detail)}function T(d){if(!(d&&d.storageArea!==t)){if(d&&d.key==null){S.value=x;return}if(!(d&&d.key!==e)){ue();try{(d==null?void 0:d.newValue)!==O.write(S.value)&&(S.value=se(d))}catch(_){h(_)}finally{d?le(L):L()}}}}}const qe={class:"d-flex flex-column",style:{gap:"25px"}},Me=y("br",null,null,-1),ze=y("br",null,null,-1),Je=y("td",null,null,-1),Ie=y("td",{class:"text-right"},"Total:",-1),Le={__name:"calculadora-bar",setup(e){const u=We("calc",{people:[],products:[]}),t=ye({uid(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,o=>(o^crypto.getRandomValues(new Uint8Array(1))[0]&15>>o/4).toString(16))},people:{focus:!1,items:u.value.people,default(o={}){return{uid:t.uid(),name:"",observation:"",...o}},add(){this.focus=this.default(),this.items.push(this.focus),u.value.people=this.items},remove(o){const r=this.items.indexOf(o);this.items.splice(r,1),u.value.people=this.items,t.products.items.map(p=>{const l=p.divideBy.indexOf(o.uid);p.divideBy.splice(l,1)})}},products:{focus:!1,items:u.value.products,default(o={}){return{uid:t.uid(),name:"",amount:0,quantity:1,divideBy:[],...o}},add(){this.focus=this.default(),this.items.push(this.focus),u.value.products=this.items},remove(o){const r=this.items.indexOf(o);this.items.splice(r,1),u.value.products=this.items}},result:ee(()=>{let o={total:0,people:[]};return o.total=t.products.items.reduce((r,p)=>r+p.amount*p.quantity,0),t.people.items.map(r=>{let p=t.products.items.filter(s=>s.divideBy.includes(r.uid));const l=p.reduce((s,i)=>s+i.amount*i.quantity/i.divideBy.length,0);o.people.push({total:l,person:r,products:p})}),o})}),c={variant:"outlined",hideDetails:!0},f={VTextField:c,VSelect:c,VTextarea:c,VExpansionPanelText:{class:"pt-3"},VCard:{class:"bg-grey-lighten-3",elevation:0},VCardActions:{class:"px-4"}};return(o,r)=>{const p=Se;return v(),A(be,{style:{"max-width":"800px"}},{default:n(()=>[a(Ve,{defaults:f},{default:n(()=>[y("div",qe,[a(D,null,{default:n(()=>[a($,null,{default:n(()=>[V("Pessoas")]),_:1}),a(j,null,{default:n(()=>[a(H,{variant:"accordion",modelValue:t.people.focus,"onUpdate:modelValue":r[0]||(r[0]=l=>t.people.focus=l)},{default:n(()=>[(v(!0),U(R,null,W(t.people.items,l=>(v(),A(Q,{value:l},{default:n(()=>[a(G,null,{default:n(()=>[V(b(l.name||"Sem nome"),1)]),_:2},1024),a(K,null,{default:n(()=>[a(q,null,{default:n(()=>[a(w,{cols:"12"},{default:n(()=>[a(B,{label:"Nome",modelValue:l.name,"onUpdate:modelValue":s=>l.name=s},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(w,{cols:"12"},{default:n(()=>[a(ve,{label:"Observação",modelValue:l.observation,"onUpdate:modelValue":s=>l.observation=s,"auto-grow":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),Me,a(E,null,{default:n(()=>[a(F,{class:"bg-error","prepend-icon":"mdi-delete",onClick:s=>t.people.remove(l)},{default:n(()=>[V("Delete")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1032,["value"]))),256))]),_:1},8,["modelValue"])]),_:1}),a(E,null,{default:n(()=>[a(X),a(F,{onClick:r[1]||(r[1]=l=>t.people.add()),class:"bg-success"},{default:n(()=>[V("Criar")]),_:1})]),_:1})]),_:1}),a(D,null,{default:n(()=>[a($,null,{default:n(()=>[V("Consumo")]),_:1}),a(j,null,{default:n(()=>[a(H,{variant:"accordion",modelValue:t.products.focus,"onUpdate:modelValue":r[2]||(r[2]=l=>t.products.focus=l)},{default:n(()=>[(v(!0),U(R,null,W(t.products.items,l=>(v(),A(Q,{value:l},{default:n(()=>[a(G,null,{default:n(()=>[a(q,{"no-gutters":""},{default:n(()=>[a(w,{cols:"6"},{default:n(()=>[V(b(l.name),1)]),_:2},1024),a(w,{cols:"6"},{default:n(()=>[V(b(l.quantity)+" x "+b(l.amount),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),a(K,null,{default:n(()=>[a(q,null,{default:n(()=>[a(w,{cols:"12"},{default:n(()=>[a(B,{label:"Produto",modelValue:l.name,"onUpdate:modelValue":s=>l.name=s},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(w,{cols:"8"},{default:n(()=>[a(p,{label:"Preço",modelValue:l.amount,"onUpdate:modelValue":s=>l.amount=s,mask:"money"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(w,{cols:"4"},{default:n(()=>[a(B,{label:"Quantidade",modelValue:l.quantity,"onUpdate:modelValue":s=>l.quantity=s,type:"number",min:"1"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),a(w,{cols:"12"},{default:n(()=>[a(ge,{label:"Quem vai consumir?",modelValue:l.divideBy,"onUpdate:modelValue":s=>l.divideBy=s,items:t.people.items,"item-value":"uid","item-title":"name",multiple:""},null,8,["modelValue","onUpdate:modelValue","items"])]),_:2},1024)]),_:2},1024),ze,a(E,null,{default:n(()=>[a(F,{class:"bg-error","prepend-icon":"mdi-delete",onClick:s=>t.products.remove(l)},{default:n(()=>[V("Delete")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1032,["value"]))),256))]),_:1},8,["modelValue"])]),_:1}),a(E,null,{default:n(()=>[a(X),a(F,{onClick:r[3]||(r[3]=l=>t.products.add()),class:"bg-success"},{default:n(()=>[V("Criar")]),_:1})]),_:1})]),_:1}),a(D,null,{default:n(()=>[a($,null,{default:n(()=>[V("Rateio")]),_:1}),a(j,null,{default:n(()=>[a(he,null,{default:n(()=>[y("tbody",null,[(v(!0),U(R,null,W(t.result.people,l=>(v(),U("tr",null,[y("td",null,b(l.person.name),1),y("td",null,b(l.products.map(s=>`${s.quantity} ${s.name}`).join(", ")),1),y("td",null,b(l.total),1)]))),256)),y("tr",null,[Je,Ie,y("td",null,b(t.result.total),1)])])]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1})}}},He={};function Qe(e,u){const t=Le;return v(),A(t)}const Ke=we(He,[["render",Qe]]);export{Ke as default};
