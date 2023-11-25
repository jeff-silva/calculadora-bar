import{K as O,r as G,L,M as Q,o as d,u as V,V as k,A as z,B as H,N as J,w as a,b as t,z as K,y as W,E as X,v as s,F as Y,d as c,q as x,J as $,G as S,c as _,O as U,P as R,H as F,I as T,x as I,Q as q,C as Z,a as p,t as y,R as j,S as A,T as E,U as D,W as M,X as v,Y as ee,Z as te}from"./entry.5391dcd1.js";import{_ as ae}from"./nuxt-layout.8122f329.js";import{u as le}from"./useFirebaseStore.26d32031.js";import{u as ne}from"./useForm.cec90120.js";const se={__name:"money",props:{modelValue:{type:[Number,String],default:""}},emits:["update:modelValue"],setup(B,{emit:r}){const f=B,g=r,b=l=>Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR"}).format(l).replace(" €",""),C=O({get:()=>b(f.modelValue),set:l=>{n&&(n.masked.value=h.value,n.updateOptions(N),n._onChange(),l=parseFloat((l||"").replace(/[^0-9]/g,""))/100,g("update:modelValue",l))}}),i=G(null);let n,h,N={mask(l){this._value=b((l||"").replace(/[^0-9]/g,"")/100)}};return L(()=>{const l=i.value.$el;h=l.tagName=="INPUT"?l:l.querySelector("input"),n=Q(h,N)}),(l,u)=>(d(),V(k,{modelValue:C.value,"onUpdate:modelValue":u[0]||(u[0]=m=>C.value=m),ref_key:"inputRef",ref:i},null,8,["modelValue"]))}};class w{static money(r,f="BRL",g="pt-BR"){return typeof r=="string"&&(r=parseInt(r.replace(/[^0-9]/g,""))/100),isNaN(r)&&(r=0),Intl.NumberFormat(g,{style:"currency",currency:f}).format(r)}static date(r){return r}static timeago(r){return r}}const ue={key:0,class:"text-center bg-grey-lighten-4 py-3 text-disabled rounded"},oe=p("br",null,null,-1),de={key:0,class:"text-center bg-grey-lighten-4 py-3 text-disabled rounded"},re=p("br",null,null,-1),ie=p("br",null,null,-1),me={key:0,class:"d-flex mb-6"},ce={class:"bg-white pa-3 text-right mb-2 elevation-1 rounded"},pe={class:"font-weight-bold"},he={__name:"[id]",props:{modelValue:{type:[String],default:""}},emits:["update:modelValue"],async setup(B,{emit:r}){let f,g;const b=z(),C=H(),i=le(),n=ne({data:{uid:!1,ownerUID:i.user.uid,name:"",users:[],purchases:[]},async onSubmit(){const l=await i.firestore.save("division",this.data);C.push(`/division/${l.uid}`)},uid(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,l=>(l^crypto.getRandomValues(new Uint8Array(1))[0]&15>>l/4).toString(16))},focus:!1,async userAdd(){const l=this.uid(),u=`Pessoa #${this.data.users.length+1}`;this.data.users.push(this.focus={uid:l,name:u})},async userRemove(l){if(!confirm(`Remover ${l.name}?`))return;const u=this.data.users.indexOf(l);this.data.users.splice(u,1)},async purchaseAdd(){const l=this.uid(),u=`Item #${this.data.purchases.length+1}`;this.data.purchases.push(this.focus={uid:l,name:u,amount:0,quantity:1,divideBy:[]})},async purchaseRemove(l){if(!confirm(`Remover ${l.name}?`))return;const u=this.data.purchases.indexOf(l);this.data.purchases.splice(u,1)},result:O(()=>{let l={total:0};return l.total=n.data.purchases.reduce((u,m)=>u+m.amount*m.quantity,0),l.division=n.data.users.map(u=>{const m=n.data.purchases.filter(e=>e.divideBy.includes(u.uid)).map(e=>({total:e.amount*e.quantity/e.divideBy.length,purchase:e}));return{total:m.reduce((e,o)=>e+o.total,0),user:u,purchases:m}}),l})});if(b.params.id!="new"){const l=([f,g]=J(()=>i.firestore.find("division",b.params.id)),f=await f,g(),f);n.fill(l)}const h={readonly:!i.user},N={VTextField:h,VSelect:h,VTextarea:h};return(l,u)=>{const m=se,P=ae;return d(),V(P,{name:"app"},{main:a(()=>[t(j,{defaults:N},{default:a(()=>[t(K,{onSubmit:u[4]||(u[4]=W(e=>s(n).submit(),["prevent"]))},{default:a(()=>[t(X,null,{default:a(()=>[s(n).success?(d(),V(Y,{key:0,type:"success",class:"mb-6"},{default:a(()=>[c("Dados salvos")]),_:1})):x("",!0)]),_:1}),t(k,{label:"Nome do evento",modelValue:s(n).data.name,"onUpdate:modelValue":u[0]||(u[0]=e=>s(n).data.name=e)},null,8,["modelValue"]),t($,{color:"grey-lighten-3",title:"Pessoas"},{default:a(()=>[t(S,{class:"d-flex flex-column",style:{gap:"20px"}},{default:a(()=>[s(n).data.users.length==0?(d(),_("div",ue," Nenhuma pessoa criada ")):x("",!0),(d(!0),_(R,null,U(s(n).data.users,e=>(d(),V(k,{modelValue:e.name,"onUpdate:modelValue":o=>e.name=o,label:"Nome do participante","hide-details":!0,"append-inner-icon":s(i).user?"mdi-delete":null,"onClick:appendInner":o=>s(n).userRemove(e)},null,8,["modelValue","onUpdate:modelValue","append-inner-icon","onClick:appendInner"]))),256))]),_:1}),s(i).user?(d(),V(F,{key:0},{default:a(()=>[t(T),t(I,{onClick:u[1]||(u[1]=e=>s(n).userAdd())},{default:a(()=>[c("Nova Pessoa")]),_:1})]),_:1})):x("",!0)]),_:1}),oe,t($,{color:"grey-lighten-3",title:"Gastos"},{default:a(()=>[t(S,null,{default:a(()=>[s(n).data.purchases.length==0?(d(),_("div",de," Nenhum gasto criado ")):x("",!0),t(q,{modelValue:s(n).focus,"onUpdate:modelValue":u[2]||(u[2]=e=>s(n).focus=e)},{default:a(()=>[(d(!0),_(R,null,U(s(n).data.purchases,e=>(d(),V(A,{value:e},{default:a(()=>[t(E,null,{default:a(()=>[c(y(e.name),1)]),_:2},1024),t(D,null,{default:a(()=>[re,t(M,null,{default:a(()=>[t(v,{cols:"12"},{default:a(()=>[t(k,{modelValue:e.name,"onUpdate:modelValue":o=>e.name=o,label:"Produto","hide-details":!0},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),t(v,{cols:"8"},{default:a(()=>[t(m,{modelValue:e.amount,"onUpdate:modelValue":o=>e.amount=o,label:"Preço","hide-details":!0},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),t(v,{cols:"4"},{default:a(()=>[t(k,{modelValue:e.quantity,"onUpdate:modelValue":o=>e.quantity=o,modelModifiers:{number:!0},label:"Quant.",type:"number","hide-details":!0,"prepend-inner-icon":s(i).user?"mdi-minus":null,"append-inner-icon":s(i).user?"mdi-plus":null,"onClick:prependInner":o=>e.quantity=Math.max(1,e.quantity-1),"onClick:appendInner":o=>e.quantity++},null,8,["modelValue","onUpdate:modelValue","prepend-inner-icon","append-inner-icon","onClick:prependInner","onClick:appendInner"])]),_:2},1024),t(v,{cols:"12"},{default:a(()=>[t(ee,{modelValue:e.divideBy,"onUpdate:modelValue":o=>e.divideBy=o,label:"Quem vai consumir?",multiple:"",items:s(n).data.users,"item-value":"uid","item-title":"name","hide-details":!0},null,8,["modelValue","onUpdate:modelValue","items"])]),_:2},1024),t(v,{cols:"12"},{default:a(()=>[t(I,{color:"error",onClick:o=>s(n).purchaseRemove(e),"prepend-icon":"mdi-delete"},{default:a(()=>[c("Deletar")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["value"]))),256))]),_:1},8,["modelValue"])]),_:1}),s(i).user?(d(),V(F,{key:0},{default:a(()=>[t(T),t(I,{onClick:u[3]||(u[3]=e=>s(n).purchaseAdd())},{default:a(()=>[c("Novo Gasto")]),_:1})]),_:1})):x("",!0)]),_:1}),ie,s(i).user?(d(),_("div",me,[t(T),t(I,{type:"submit",color:"success","prepend-icon":"mdi-check",loading:s(n).busy},{default:a(()=>[c("Salvar")]),_:1},8,["loading"])])):x("",!0),t($,{color:"grey-lighten-3"},{default:a(()=>[t(Z,null,{default:a(()=>[c("Resultados")]),_:1}),t(S,null,{default:a(()=>[p("div",ce,"Total: "+y(s(n).result.total),1),t(q,null,{default:a(()=>[(d(!0),_(R,null,U(s(n).result.division,e=>(d(),V(A,null,{default:a(()=>[t(E,null,{default:a(()=>[t(M,null,{default:a(()=>[t(v,{cols:"6"},{default:a(()=>[c(y(e.user.name),1)]),_:2},1024),t(v,{cols:"6"},{default:a(()=>[c(y(s(w).money(e.total)),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),t(D,{style:{margin:"-6px -24px -14px"}},{default:a(()=>[t(te,null,{default:a(()=>[p("tbody",null,[(d(!0),_(R,null,U(e.purchases,o=>(d(),_("tr",null,[p("td",null,y(o.purchase.name),1),p("td",null,y(s(w).money(o.purchase.amount)),1),p("td",null,"/ "+y(o.purchase.divideBy.length),1),p("td",pe,"= "+y(s(w).money(o.total)),1)]))),256))])]),_:2},1024)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{he as default};