import{_ as m}from"./nuxt-link.d88343fd.js";import{_ as p}from"./nuxt-layout.18a6ddaf.js";import{u as h}from"./useFirebase.ea57036b.js";import{n as f,u as x,w as o,o as e,b as n,a as t,c as s,d,q as y,O as V,P as w,Z as v,t as b,x as g}from"./entry.34e3a29b.js";const k=t("colgroup",null,[t("col",{width:"*"}),t("col",{width:"10px"})],-1),q={key:0},T={__name:"index",props:{modelValue:{type:[String],default:""}},emits:["update:modelValue"],setup(B,{emit:N}){const i=h(),a=f({query:{where:[["ownerUID","==",i.user.uid]]},data:[],async submit(){const{query:r,data:u}=await i.firestore.search("division",this.query);this.query=r,this.data=u}});return a.submit(),(r,u)=>{const c=m,_=p;return e(),x(_,{name:"app"},{main:o(()=>[n(v,{class:"elevation-5 rounded"},{default:o(()=>[k,t("tbody",null,[a.data.length==0?(e(),s("tr",q,[t("td",null,[d(" Você ainda não criou nenhuma divisão. "),n(c,{to:"/division/new"},{default:o(()=>[d("Começar")]),_:1})])])):y("",!0),(e(!0),s(w,null,V(a.data,l=>(e(),s("tr",null,[t("td",null,b(l.name),1),t("td",null,[n(g,{icon:"mdi-pencil",flat:"",to:`/division/${l.uid}`},null,8,["to"])])]))),256))])]),_:1})]),_:1})}}};export{T as default};
