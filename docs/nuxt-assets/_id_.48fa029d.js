import{o as u,c as V,b as e,B as j,w as l,C as Q,a as t,F as w,D as P,t as C,h as n,g as S,y as O,E as q,f as U,G as J,r as K,H as Z,I as ee,J as M,K as G,i as x,L as te,M as E,N as L,O as ae,P as le,V as N,Q as se,v as ne,x as oe,d as z,R as de,S as ie,T as W,U as X,W as ue,X as H,Y,A as re,Z as me,_ as F,$ as ce,a0 as pe,a1 as fe,a2 as _e,j as ye,k as ve,l as Ve,m as he}from"./entry.cdc6570a.js";import{u as be,a as ge}from"./index.0dfed499.js";import{u as ke}from"./useFirebase.c6dcf762.js";import{u as xe}from"./useForm.40a09757.js";import{_ as $e}from"./nuxt-layout.46e982d0.js";class T{static money(m,p="BRL",_="pt-BR"){return typeof m=="string"&&(m=parseInt(m.replace(/[^0-9]/g,""))/100),isNaN(m)&&(m=0),Intl.NumberFormat(_,{style:"currency",currency:p}).format(m)}static date(m){return m}static timeago(m){return m}}const Ce=t("br",null,null,-1),Se=t("colgroup",null,[t("col",{width:"*"}),t("col",{width:"100"})],-1),Ue={class:"py-2"},Ie={class:"d-block text-disabled"},Re={class:"py-2"},we={class:"d-block"},Be={class:"d-block"},Ne={class:"d-block border-t"},Te=t("br",null,null,-1),qe=t("colgroup",null,[t("col",{width:"*"}),t("col",{width:"100"})],-1),Pe=t("td",{class:"text-right"},"Total:",-1),Ae={__name:"view",props:{form:{type:[Object],default:()=>({})}},emits:["update:modelValue"],setup(h,{emit:m}){return(p,_)=>(u(),V("div",null,[e(j,{subtitle:h.form.data.name},null,8,["subtitle"]),Ce,e(j,{subtitle:"Consumos"},{default:l(()=>[e(Q,null,{default:l(()=>[Se,t("tbody",null,[(u(!0),V(w,null,P(h.form.data.purchases,c=>(u(),V("tr",null,[t("td",Ue,[t("div",null,C(c.name),1),t("small",Ie," Consumido por "+C(h.form.data.users.filter(g=>c.divideBy.includes(g.uid)).map(g=>g.name).join(", ")),1)]),t("td",Re,[t("small",we,C(c.quantity)+" x",1),t("small",Be,C(("format"in p?p.format:n(T)).money(c.amount)),1),t("small",Ne,C(("format"in p?p.format:n(T)).money(c.amount*c.quantity)),1)])]))),256))])]),_:1})]),_:1}),Te,e(j,{subtitle:"Divisão"},{default:l(()=>[e(Q,null,{default:l(()=>[qe,t("tbody",null,[(u(!0),V(w,null,P(h.form.result.division,c=>(u(),V("tr",null,[t("td",null,C(c.user.name),1),t("td",null,[t("small",null,C(("format"in p?p.format:n(T)).money(c.total)),1)])]))),256)),t("tr",null,[Pe,t("td",null,[t("small",null,C(("format"in p?p.format:n(T)).money(h.form.result.total)),1)])])])]),_:1})]),_:1})]))}},Ee={key:1},De={class:"d-flex align-items justify-end",style:{gap:"2px",background:"#f7f7f708"}},Fe={__name:"card",props:{cardText:{type:[Boolean],default:!0}},setup(h){const m=h,p={VBtn:{rounded:0,height:35}};return(_,c)=>(u(),S(j,{elevation:"3",class:"ma-1"},{default:l(()=>[m.cardText?(u(),S(O,{key:0},{default:l(()=>[q(_.$slots,"default")]),_:3})):U("",!0),m.cardText?U("",!0):(u(),V("div",Ee,[q(_.$slots,"default")])),e(J,{defaults:p},{default:l(()=>[t("div",De,[q(_.$slots,"actions")])]),_:3})]),_:3}))}},je={key:0,class:"text-center text-disabled py-3"},Oe={class:"pa-3 pt-6"},Me={class:"d-flex align-items justify-end",style:{background:"#f7f7f708"}},Ge={key:2},Le={class:"px-3"},ze={class:"d-flex align-items justify-end",style:{background:"#f7f7f708"}},We={__name:"loop",props:{modelValue:{type:[Array],default:()=>[]},itemTitle:{type:[String],default:"name"},default:{type:[Object],default:()=>({})},accordion:{type:[Boolean],default:!0}},emits:["update:modelValue"],setup(h,{expose:m,emit:p}){const _=h,c=p,g=()=>([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,f=>(f^crypto.getRandomValues(new Uint8Array(1))[0]&15>>f/4).toString(16)),i=K({focus:!1,data:_.modelValue,add(){const f=g();i.data.push(i.focus={uid:f,..._.default}),c("update:modelValue",i.data)},delete(f){if(!confirm("Delete item?"))return;const y=i.data.indexOf(f);i.data.splice(y,1),c("update:modelValue",i.data),i.focus&&i.focus==f.uid&&(i.focus=!1)}}),b=(f={})=>({add:i.add,delete:i.delete,...f});return m({add:i.add,delete:i.delete}),(f,y)=>(u(),V("div",null,[i.data.length==0?(u(),V("div",je,"Nenhum item criado")):U("",!0),_.accordion?(u(),S(te,{key:1,modelValue:i.focus,"onUpdate:modelValue":y[0]||(y[0]=r=>i.focus=r),static:!0,variant:"accordion"},{default:l(()=>[(u(!0),V(w,null,P(i.data,(r,$)=>(u(),S(Z,{title:r[_.itemTitle]||`Item #${$+1}`,value:r,rounded:"0",elevation:"0"},{default:l(()=>[e(ee,{style:{margin:"-8px -24px -16px"}},{default:l(()=>[t("div",Oe,[q(f.$slots,"item",M(G(b({item:r,index:$}))))]),e(J,{defaults:{VBtn:{rounded:0}}},{default:l(()=>[t("div",Me,[e(x,{text:"Remove",color:"red","prepend-icon":"mdi-delete",onClick:A=>i.delete(r)},null,8,["onClick"])])]),_:2},1024)]),_:2},1024)]),_:2},1032,["title","value"]))),256))]),_:3},8,["modelValue"])):U("",!0),_.accordion?U("",!0):(u(),V("div",Ge,[(u(!0),V(w,null,P(i.data,(r,$)=>(u(),V("div",Le,[q(f.$slots,"item",M(G(b({item:r,index:$}))))]))),256))])),e(J,{defaults:{VBtn:{rounded:0}}},{default:l(()=>[t("div",ze,[q(f.$slots,"actions",M(G(b())))])]),_:3})]))}},He={__name:"money",props:{modelValue:{type:[Number,String],default:""}},emits:["update:modelValue"],setup(h,{emit:m}){const p=h,_=m,c=r=>Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR"}).format(r).replace(" €",""),g=E({get:()=>c(p.modelValue),set:r=>{b&&(b.masked.value=f.value,b.updateOptions(y),b._onChange(),r=parseFloat((r||"").replace(/[^0-9]/g,""))/100,_("update:modelValue",r))}}),i=L(null);let b,f,y={mask(r){this._value=c((r||"").replace(/[^0-9]/g,"")/100)}};return ae(()=>{const r=i.value.$el;f=r.tagName=="INPUT"?r:r.querySelector("input"),b=le(f,y)}),(r,$)=>(u(),S(N,{modelValue:g.value,"onUpdate:modelValue":$[0]||($[0]=A=>g.value=A),ref_key:"inputRef",ref:i},null,8,["modelValue"]))}},Qe=t("br",null,null,-1),Je=t("div",{class:"ms-2 d-none d-md-block"},"Share",-1),Ke=t("div",{class:"ms-2 d-none d-md-block"},"Copiar URL",-1),Xe=t("br",null,null,-1),Ye=t("p",null," Colaboradores podem ajudar a editar gastos e pessoas. Insira o e-mail do colaborador e ao acessar esta página, ele poderá editar. ",-1),Ze=t("br",null,null,-1),et=t("colgroup",null,[t("col",{width:"*"}),t("col",{width:"100"})],-1),tt=t("td",{class:"text-right"},"Total:",-1),at=t("br",null,null,-1),lt=t("br",null,null,-1),st=t("br",null,null,-1),nt={class:"pa-6",style:{position:"fixed",bottom:"0",right:"0","z-index":"9"}},ot={class:"d-flex flex-column",style:{gap:"10px"}},dt={__name:"index",props:{uid:{type:[String],default:""}},emits:["update:modelValue","saved"],async setup(h,{emit:m}){let p,_;const c=L(null),g=L(null),i=L(null),b=h,f=m,y=K({value:"info",set(d){this.value=d}}),r=K({items:[{text:"Info",bind:{icon:"material-symbols:info-outline",onClick:()=>y.set("info"),active:E(()=>y.value=="info")}},{text:"Pessoas",bind:{icon:"material-symbols:frame-person",onClick:()=>y.set("users"),active:E(()=>y.value=="users")}},{text:"Gastos",bind:{icon:"solar:chat-round-money-outline",onClick:()=>y.set("purchases"),active:E(()=>y.value=="purchases")}}]}),$=be({legacy:!0}),A=ge(),I=ke(),o=xe({data:{uid:!1,ownerUID:I.user.uid,name:"",users:[],purchases:[],admins:[]},url:location.href,focus:!1,preventSnap:!1,async onSubmit(){this.preventSnap=!0,f("saved",await I.firestore.save("division",this.data)),setTimeout(()=>{this.preventSnap=!1},1e3)},uid(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,d=>(d^crypto.getRandomValues(new Uint8Array(1))[0]&15>>d/4).toString(16))},canEdit(){return I.user?!!(o.data.ownerUID==I.user.uid||o.data.admins.filter(d=>d.email==I.user.email)):!1},async load(){if(!isNaN(b.uid))return;const d=await I.firestore.find("division",b.uid);o.fill({...o.data,...d}),I.firestore.onSnapshot("division",b.uid,s=>{this.preventSnap||o.fill({...o.data,...s.data()})})},async userAdd(){const d=this.uid(),s=`Pessoa #${this.data.users.length+1}`;this.data.users.push(this.focus={uid:d,name:s})},async userRemove(d){if(!confirm(`Remover ${d.name}?`))return;const s=this.data.users.indexOf(d);this.data.users.splice(s,1)},async purchaseAdd(){const d=this.uid(),s=`Item #${this.data.purchases.length+1}`;this.data.purchases.push(this.focus={uid:d,name:s,amount:0,quantity:1,divideBy:[]})},async purchaseRemove(d){if(!confirm(`Remover ${d.name}?`))return;const s=this.data.purchases.indexOf(d);this.data.purchases.splice(s,1)},async adminAdd(){const d=this.uid();this.data.admins.push({uid:d,email:""})},async adminRemove(d){if(!confirm(`Remover ${d.email}?`))return;const s=this.data.admins.indexOf(d);this.data.admins.splice(s,1)},result:E(()=>{let d={total:0};return d.total=o.data.purchases.reduce((s,R)=>s+R.amount*R.quantity,0),d.division=o.data.users.map(s=>{const R=o.data.purchases.filter(k=>k.divideBy.includes(s.uid)).map(k=>({total:k.amount*k.quantity/k.divideBy.length,purchase:k}));return{total:R.reduce((k,D)=>k+D.total,0),user:s,purchases:R}}),d})});return[p,_]=se(()=>o.load()),await p,_(),(d,s)=>{const R=Ae,B=Fe,k=We,D=He;return u(),V(w,null,[n(o).canEdit()?U("",!0):(u(),S(R,{key:0,form:n(o)},null,8,["form"])),n(o).canEdit()?(u(),S(ve,{key:1,onSubmit:s[11]||(s[11]=ye(a=>n(o).submit(),["prevent"]))},{default:l(()=>[e(ne,null,{default:l(()=>[n(o).success?(u(),S(oe,{key:0,type:"success",class:"mb-6"},{default:l(()=>[z("Dados salvos")]),_:1})):U("",!0)]),_:1}),e(de,{modelValue:y.value,"onUpdate:modelValue":s[0]||(s[0]=a=>y.value=a),class:"mx-1"},{default:l(()=>[e(ie,null,{default:l(()=>[e(W,{editable:!0,type:"button","edit-icon":"mdi-check",value:"info",subtitle:"Info"}),e(X),e(W,{editable:!0,type:"button","edit-icon":"mdi-check",value:"users",subtitle:"Pessoas"}),e(X),e(W,{editable:!0,type:"button","edit-icon":"mdi-check",value:"purchases",subtitle:"Gastos"})]),_:1})]),_:1},8,["modelValue"]),Qe,e(ue,{modelValue:y.value,"onUpdate:modelValue":s[10]||(s[10]=a=>y.value=a)},{default:l(()=>[e(H,{value:"info"},{default:l(()=>[e(B,{subtitle:"Informações Principais"},{default:l(()=>[e(N,{modelValue:n(o).data.name,"onUpdate:modelValue":s[1]||(s[1]=a=>n(o).data.name=a),label:"Nome do evento"},null,8,["modelValue"])]),actions:l(()=>[n(A).isSupported?(u(),S(x,{key:0,color:"success",onClick:s[2]||(s[2]=a=>n(A).share({title:n(o).data.name,url:""}))},{default:l(()=>[e(Y,{icon:"material-symbols:share"}),Je]),_:1})):U("",!0),e(x,{color:n($).copied.value?"success":null,onClick:s[3]||(s[3]=a=>n($).copy(n(o).url))},{default:l(()=>[e(Y,{icon:n($).copied.value?"mdi-check":"material-symbols:content-copy-outline"},null,8,["icon"]),Ke]),_:1},8,["color"]),e(re),e(x,{type:"submit",text:"Salvar","prepend-icon":"mdi-check",class:"bg-primary",loading:n(o).busy},null,8,["loading"])]),_:1}),Xe,e(B,{subtitle:"Colaboradores","card-text":!1},{default:l(()=>[e(O,null,{default:l(()=>[Ye]),_:1}),e(k,{modelValue:n(o).data.admins,"onUpdate:modelValue":s[4]||(s[4]=a=>n(o).data.admins=a),ref_key:"adminsRef",ref:c,"item-title":"email",accordion:!1,default:{email:""}},{item:l(a=>[e(N,{modelValue:a.item.email,"onUpdate:modelValue":v=>a.item.email=v,label:"E-mail","append-inner-icon":"mdi-delete","onClick:appendInner":v=>a.delete(a.item)},null,8,["modelValue","onUpdate:modelValue","onClick:appendInner"])]),_:1},8,["modelValue"])]),actions:l(()=>[e(x,{text:"Add","prepend-icon":"mdi-plus",onClick:s[5]||(s[5]=a=>c.value.add())}),e(x,{type:"submit",text:"Salvar","prepend-icon":"mdi-check",class:"bg-primary",loading:n(o).busy},null,8,["loading"])]),_:1})]),_:1}),e(H,{value:"users"},{default:l(()=>[e(B,{subtitle:"Pessoas","card-text":!1},{default:l(()=>[e(O,null,{default:l(()=>[z(" Gerencie todas as pessoas que participarão da divisão ")]),_:1}),e(k,{modelValue:n(o).data.users,"onUpdate:modelValue":s[6]||(s[6]=a=>n(o).data.users=a),ref_key:"usersRef",ref:g,"item-title":"name",accordion:!1,default:{name:""}},{item:l(a=>[e(N,{modelValue:a.item.name,"onUpdate:modelValue":v=>a.item.name=v,label:"Nome","append-inner-icon":"mdi-delete","onClick:appendInner":v=>a.delete(a.item)},null,8,["modelValue","onUpdate:modelValue","onClick:appendInner"])]),_:1},8,["modelValue"])]),actions:l(()=>[e(x,{text:"Add","prepend-icon":"mdi-plus",onClick:s[7]||(s[7]=a=>g.value.add())}),e(x,{type:"submit",text:"Salvar","prepend-icon":"mdi-check",class:"bg-primary",loading:n(o).busy},null,8,["loading"])]),_:1})]),_:1}),e(H,{value:"purchases"},{default:l(()=>[e(B,{subtitle:"Gastos","card-text":!1},{default:l(()=>[e(O,null,{default:l(()=>[z(" Informe todos os itens que serão consumidos. ")]),_:1}),e(k,{modelValue:n(o).data.purchases,"onUpdate:modelValue":s[8]||(s[8]=a=>n(o).data.purchases=a),ref_key:"purchasesRef",ref:i,"item-title":"name",default:{name:"",amount:0,quantity:1,divideBy:[]}},{item:l(a=>[e(me,null,{default:l(()=>[e(F,{cols:"12"},{default:l(()=>[e(N,{modelValue:a.item.name,"onUpdate:modelValue":v=>a.item.name=v,"hide-details":!0,label:"Nome"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(F,{cols:"12",md:"8"},{default:l(()=>[e(D,{modelValue:a.item.amount,"onUpdate:modelValue":v=>a.item.amount=v,"hide-details":!0,label:"Valor",reverse:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(F,{cols:"12",md:"4"},{default:l(()=>[e(N,{modelValue:a.item.quantity,"onUpdate:modelValue":v=>a.item.quantity=v,"hide-details":!0,label:"Quandidade","prepend-inner-icon":"mdi-minus","append-inner-icon":"mdi-plus","onClick:prependInner":v=>a.item.quantity=Math.max(1,a.item.quantity-1),"onClick:appendInner":v=>a.item.quantity=a.item.quantity+1},null,8,["modelValue","onUpdate:modelValue","onClick:prependInner","onClick:appendInner"])]),_:2},1024),e(F,{cols:"12"},{default:l(()=>[e(ce,{modelValue:a.item.divideBy,"onUpdate:modelValue":v=>a.item.divideBy=v,label:"Consumido por",multiple:"",items:n(o).data.users,"item-value":"uid","item-title":"name","hide-details":!0},null,8,["modelValue","onUpdate:modelValue","items"])]),_:2},1024)]),_:2},1024)]),_:1},8,["modelValue"])]),actions:l(()=>[e(x,{text:"Add","prepend-icon":"mdi-plus",onClick:s[9]||(s[9]=a=>i.value.add())}),e(x,{type:"submit",text:"Salvar","prepend-icon":"mdi-check",class:"bg-primary",loading:n(o).busy},null,8,["loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),Ze,e(B,{subtitle:"Resultado","card-text":!1},{default:l(()=>[e(Q,null,{default:l(()=>[et,t("tbody",null,[(u(!0),V(w,null,P(n(o).result.division,a=>(u(),V("tr",null,[t("td",null,C(a.user.name),1),t("td",null,[t("small",null,C(("format"in d?d.format:n(T)).money(a.total)),1)])]))),256)),t("tr",null,[tt,t("td",null,[t("small",null,C(("format"in d?d.format:n(T)).money(n(o).result.total)),1)])])])]),_:1})]),_:1}),at,lt,st,t("div",nt,[e(pe,{location:"top right",offset:"10","close-on-content-click":!1},{activator:l(a=>[e(x,fe({icon:"mdi-dots-horizontal"},a.props,{color:"success"}),null,16)]),default:l(()=>[t("div",ot,[(u(!0),V(w,null,P(r.items,a=>(u(),S(_e,{text:a.text},{activator:l(v=>[e(x,M(G({...a.bind,...v.props})),null,16)]),_:2},1032,["text"]))),256))])]),_:1})])]),_:1})):U("",!0)],64)}}},pt={__name:"[id]",setup(h){const m=Ve(),p=he();return(_,c)=>{const g=dt,i=$e;return u(),S(i,{name:"app"},{main:l(()=>[e(g,{uid:n(m).params.id,onSaved:c[0]||(c[0]=b=>n(p).push(`/division/${b.uid}`))},null,8,["uid"])]),_:1})}}};export{pt as default};