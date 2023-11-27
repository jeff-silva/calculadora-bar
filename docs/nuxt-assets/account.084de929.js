import{r as g,o as u,c,f as V,n as v,a as d,g as y,w as _,b as s,h as l,V as f,i as b,j as w,k as h}from"./entry.cdc6570a.js";import{_ as x}from"./nuxt-layout.46e982d0.js";import{u as U}from"./useFirebase.c6dcf762.js";import{u as k}from"./useForm.40a09757.js";const C=["src"],F=d("div",null,null,-1),$={__name:"image-field",props:{modelValue:{type:[String],default:""},size:{type:[Number,String],default:"100px"}},emits:["update:modelValue","fileChange"],setup(m,{emit:i}){const t=m,r=i,n=g({preview:t.modelValue,browser(){Object.assign(document.createElement("input"),{type:"file",onchange:e=>{if(typeof e.target.files[0]>"u")return;const o=e.target.files[0];this.preview=URL.createObjectURL(o),r("fileChange",o)}}).click()}});return(e,o)=>(u(),c("div",{class:"v-image-field rounded elevation-2 bg-grey-lighten-3",style:v(`width: ${t.size}; height: ${t.size};`),onClick:o[0]||(o[0]=p=>n.browser())},[n.preview?(u(),c("img",{key:0,src:n.preview,alt:""},null,8,C)):V("",!0),F],4))}},S=d("br",null,null,-1),B={class:"d-flex align-center justify-end"},z={__name:"account",setup(m){const i=U(),t=k({data:{...i.user},async onSubmit(){await i.auth.update(t.data),location.reload()}}),r=async n=>{const e=await i.storage.upload(n);t.data.photoURL=e.url};return(n,e)=>{const o=$,p=x;return u(),y(p,{name:"app"},{main:_(()=>[s(h,{onSubmit:e[4]||(e[4]=w(a=>l(t).submit(),["prevent"]))},{default:_(()=>[s(o,{modelValue:l(t).data.photoURL,"onUpdate:modelValue":e[0]||(e[0]=a=>l(t).data.photoURL=a),onFileChange:e[1]||(e[1]=a=>r(a))},null,8,["modelValue"]),S,s(f,{modelValue:l(t).data.name,"onUpdate:modelValue":e[2]||(e[2]=a=>l(t).data.name=a),label:"Nome"},null,8,["modelValue"]),s(f,{modelValue:l(t).data.email,"onUpdate:modelValue":e[3]||(e[3]=a=>l(t).data.email=a),label:"E-mail"},null,8,["modelValue"]),d("div",B,[s(b,{type:"submit",text:"Salvar",color:"primary"})])]),_:1})]),_:1})}}};export{z as default};