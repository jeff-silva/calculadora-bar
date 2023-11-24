import{I as M,r as O,J as L,K as G,o as d,n as g,B as x,s as Q,u as z,q as H,L as J,w as t,b as e,G as K,F as W,x as X,z as n,y as Y,d as c,M as N,H as w,A as B,c as p,N as R,O as S,C as E,D as P,E as T,P as F,V as j,a as _,t as f,Q as Z,R as A,S as I,T as q,U as D,W as V,X as ee,Y as te}from"./entry.befd1641.js";import{_ as ae}from"./nuxt-layout.2c484a52.js";import{u as le}from"./useFirebaseStore.dd2f8ba5.js";const se={__name:"money",props:{modelValue:{type:[Number,String],default:""}},emits:["update:modelValue"],setup(y,{emit:v}){const r=y,k=v,b=l=>Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR"}).format(l).replace(" €",""),U=M({get:()=>b(r.modelValue),set:l=>{s&&(s.masked.value=h.value,s.updateOptions(C),s._onChange(),l=parseFloat((l||"").replace(/[^0-9]/g,""))/100,k("update:modelValue",l))}}),i=O(null);let s,h,C={mask(l){this._value=b((l||"").replace(/[^0-9]/g,"")/100)}};return L(()=>{const l=i.value.$el;h=l.tagName=="INPUT"?l:l.querySelector("input"),s=G(h,C)}),(l,u)=>(d(),g(x,{modelValue:U.value,"onUpdate:modelValue":u[0]||(u[0]=m=>U.value=m),ref_key:"inputRef",ref:i},null,8,["modelValue"]))}},ue=(y={})=>{y={data:{uid:!1,name:""},onSubmit:()=>null,onError:r=>console.error(r),onLoad:()=>null,...y};const v=Q({ready:!1,busy:!1,success:!1,error:!1,response:!1,async submit(){this.busy=!0,this.error=!1,this.success=!1;try{this.response=await this.onSubmit()||!0,this.success=!0}catch(r){this.error=this.onError(r)||!0}this.busy=!1},async fill(r={}){v.data=r},...y});return L(()=>{v.onLoad()}),v},ne={key:0,class:"text-center bg-grey-lighten-4 py-3 text-disabled rounded"},oe=_("br",null,null,-1),de={key:0,class:"text-center bg-grey-lighten-4 py-3 text-disabled rounded"},re=_("br",null,null,-1),ie=_("br",null,null,-1),me={key:0,class:"d-flex mb-6"},ce={class:"bg-white pa-3 text-right mb-2 elevation-1 rounded"},pe={class:"text-disabled"},Ve={__name:"[id]",props:{modelValue:{type:[String],default:""}},emits:["update:modelValue"],async setup(y,{emit:v}){let r,k;const b=z(),U=H(),i=le(),s=ue({data:{uid:!1,ownerUID:i.user.uid,name:"",users:[],purchases:[]},async onSubmit(){const l=await i.firestore.save("division",this.data);U.push(`/division/${l.uid}`)},uid(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,l=>(l^crypto.getRandomValues(new Uint8Array(1))[0]&15>>l/4).toString(16))},focus:!1,async userAdd(){const l=this.uid(),u=`Pessoa #${this.data.users.length+1}`;this.data.users.push(this.focus={uid:l,name:u})},async userRemove(l){if(!confirm(`Remover ${l.name}?`))return;const u=this.data.users.indexOf(l);this.data.users.splice(u,1)},async purchaseAdd(){const l=this.uid(),u=`Item #${this.data.purchases.length+1}`;this.data.purchases.push(this.focus={uid:l,name:u,amount:0,quantity:1,divideBy:[]})},async purchaseRemove(l){if(!confirm(`Remover ${l.name}?`))return;const u=this.data.purchases.indexOf(l);this.data.purchases.splice(u,1)},result:M(()=>{let l={total:0};return l.total=s.data.purchases.reduce((u,m)=>u+m.amount*m.quantity,0),l.division=s.data.users.map(u=>{const m=s.data.purchases.filter(a=>a.divideBy.includes(u.uid)).map(a=>({total:a.amount*a.quantity/a.divideBy.length,purchase:a}));return{total:m.reduce((a,o)=>a+o.total,0),user:u,purchases:m}}),l})});if(b.params.id!="new"){const l=([r,k]=J(()=>i.firestore.find("division",b.params.id)),r=await r,k(),r);s.fill(l)}const h={readonly:!i.user},C={VTextField:h,VSelect:h,VTextarea:h};return(l,u)=>{const m=se,$=ae;return d(),g($,{name:"app"},{main:t(()=>[e(Z,{defaults:C},{default:t(()=>[e(K,{onSubmit:u[4]||(u[4]=W(a=>n(s).submit(),["prevent"]))},{default:t(()=>[e(X,null,{default:t(()=>[n(s).success?(d(),g(Y,{key:0,type:"success",class:"mb-6"},{default:t(()=>[c("Dados salvos")]),_:1})):N("",!0)]),_:1}),e(x,{label:"Nome do evento",modelValue:n(s).data.name,"onUpdate:modelValue":u[0]||(u[0]=a=>n(s).data.name=a)},null,8,["modelValue"]),e(w,{color:"grey-lighten-3",title:"Pessoas"},{default:t(()=>[e(B,{class:"d-flex flex-column",style:{gap:"20px"}},{default:t(()=>[n(s).data.users.length==0?(d(),p("div",ne," Nenhuma pessoa criada ")):N("",!0),(d(!0),p(S,null,R(n(s).data.users,a=>(d(),g(x,{modelValue:a.name,"onUpdate:modelValue":o=>a.name=o,label:"Nome do participante","hide-details":!0,"append-inner-icon":n(i).user?"mdi-delete":null,"onClick:appendInner":o=>n(s).userRemove(a)},null,8,["modelValue","onUpdate:modelValue","append-inner-icon","onClick:appendInner"]))),256))]),_:1}),e(E,null,{default:t(()=>[e(P),e(T,{onClick:u[1]||(u[1]=a=>n(s).userAdd())},{default:t(()=>[c("Nova Pessoa")]),_:1})]),_:1})]),_:1}),oe,e(w,{color:"grey-lighten-3",title:"Gastos"},{default:t(()=>[e(B,null,{default:t(()=>[n(s).data.purchases.length==0?(d(),p("div",de," Nenhum gasto criado ")):N("",!0),e(F,{modelValue:n(s).focus,"onUpdate:modelValue":u[2]||(u[2]=a=>n(s).focus=a)},{default:t(()=>[(d(!0),p(S,null,R(n(s).data.purchases,a=>(d(),g(A,{value:a},{default:t(()=>[e(I,null,{default:t(()=>[c(f(a.name),1)]),_:2},1024),e(q,null,{default:t(()=>[re,e(D,null,{default:t(()=>[e(V,{cols:"12"},{default:t(()=>[e(x,{modelValue:a.name,"onUpdate:modelValue":o=>a.name=o,label:"Produto","hide-details":!0},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(V,{cols:"8"},{default:t(()=>[e(m,{modelValue:a.amount,"onUpdate:modelValue":o=>a.amount=o,label:"Preço","hide-details":!0},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(V,{cols:"4"},{default:t(()=>[e(x,{modelValue:a.quantity,"onUpdate:modelValue":o=>a.quantity=o,modelModifiers:{number:!0},label:"Quant.",type:"number","hide-details":!0},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(V,{cols:"12"},{default:t(()=>[e(ee,{modelValue:a.divideBy,"onUpdate:modelValue":o=>a.divideBy=o,label:"Quem vai consumir?",multiple:"",items:n(s).data.users,"item-value":"uid","item-title":"name","hide-details":!0},null,8,["modelValue","onUpdate:modelValue","items"])]),_:2},1024),e(V,{cols:"12"},{default:t(()=>[e(T,{color:"error",onClick:o=>n(s).purchaseRemove(a),"prepend-icon":"mdi-delete"},{default:t(()=>[c("Deletar")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["value"]))),256))]),_:1},8,["modelValue"])]),_:1}),e(E,null,{default:t(()=>[e(P),e(T,{onClick:u[3]||(u[3]=a=>n(s).purchaseAdd())},{default:t(()=>[c("Novo Gasto")]),_:1})]),_:1})]),_:1}),ie,n(i).user?(d(),p("div",me,[e(P),e(T,{type:"submit",color:"success","prepend-icon":"mdi-check",loading:n(s).busy},{default:t(()=>[c("Salvar")]),_:1},8,["loading"])])):N("",!0),e(w,{color:"grey-lighten-3"},{default:t(()=>[e(j,null,{default:t(()=>[c("Resultados")]),_:1}),e(B,null,{default:t(()=>[_("div",ce,"Total: "+f(n(s).result.total),1),e(F,null,{default:t(()=>[(d(!0),p(S,null,R(n(s).result.division,a=>(d(),g(A,null,{default:t(()=>[e(I,null,{default:t(()=>[e(D,null,{default:t(()=>[e(V,{cols:"6"},{default:t(()=>[c(f(a.user.name),1)]),_:2},1024),e(V,{cols:"6"},{default:t(()=>[c(f(a.total),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),e(q,{style:{margin:"-6px -24px -14px"}},{default:t(()=>[e(te,null,{default:t(()=>[_("tbody",null,[(d(!0),p(S,null,R(a.purchases,o=>(d(),p("tr",null,[_("td",null,f(o.purchase.name),1),_("td",null,f(o.total),1),_("td",pe,f(o.purchase.amount)+" / "+f(o.purchase.divideBy.length),1)]))),256))])]),_:2},1024)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{Ve as default};
