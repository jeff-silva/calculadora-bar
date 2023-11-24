import{aP as Dh,r as Ho,s as cr,aa as Nh}from"./entry.befd1641.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yc=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Vh=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ec={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,u=c?n[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;c||(p=64,o||(d=64)),r.push(t[l],t[h],t[d],t[p])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(yc(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Vh(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const u=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new Oh;const d=s<<2|a>>4;if(r.push(d),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const v=u<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Oh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Mh=function(n){const e=yc(n);return Ec.encodeByteArray(e,!0)},Sr=function(n){return Mh(n).replace(/\./g,"")},vc=function(n){try{return Ec.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh=()=>Lh().__FIREBASE_DEFAULTS__,Fh=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Uh=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&vc(n[1]);return e&&JSON.parse(e)},bs=()=>{try{return xh()||Fh()||Uh()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ic=n=>{var e,t;return(t=(e=bs())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Bh=n=>{const e=Ic(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Tc=()=>{var n;return(n=bs())===null||n===void 0?void 0:n.config},wc=n=>{var e;return(e=bs())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[Sr(JSON.stringify(t)),Sr(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $h(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(se())}function Hh(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function zh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Wh(){const n=se();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Gh(){try{return typeof indexedDB=="object"}catch{return!1}}function Kh(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh="FirebaseError";class De extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Qh,Object.setPrototypeOf(this,De.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fn.prototype.create)}}class Fn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Yh(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new De(i,a,r)}}function Yh(n,e){return n.replace(Xh,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Xh=/\{\$([^}]+)}/g;function Jh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Cr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(zo(s)&&zo(o)){if(!Cr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function zo(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function on(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function an(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Zh(n,e){const t=new ed(n,e);return t.subscribe.bind(t)}class ed{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");td(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Di),i.error===void 0&&(i.error=Di),i.complete===void 0&&(i.complete=Di);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function td(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Di(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(n){return n&&n._delegate?n._delegate:n}class Xe{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new qh;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(id(e))try{this.getOrInitializeService({instanceIdentifier:ct})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ct){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ct){return this.instances.has(e)}getOptions(e=ct){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:rd(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ct){return this.component?this.component.multipleInstances?e:ct:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rd(n){return n===ct?void 0:n}function id(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new nd(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var b;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(b||(b={}));const od={debug:b.DEBUG,verbose:b.VERBOSE,info:b.INFO,warn:b.WARN,error:b.ERROR,silent:b.SILENT},ad=b.INFO,cd={[b.DEBUG]:"log",[b.VERBOSE]:"log",[b.INFO]:"info",[b.WARN]:"warn",[b.ERROR]:"error"},ud=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=cd[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ks{constructor(e){this.name=e,this._logLevel=ad,this._logHandler=ud,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in b))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?od[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,b.DEBUG,...e),this._logHandler(this,b.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,b.VERBOSE,...e),this._logHandler(this,b.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,b.INFO,...e),this._logHandler(this,b.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,b.WARN,...e),this._logHandler(this,b.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,b.ERROR,...e),this._logHandler(this,b.ERROR,...e)}}const ld=(n,e)=>e.some(t=>n instanceof t);let Wo,Go;function hd(){return Wo||(Wo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dd(){return Go||(Go=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ac=new WeakMap,Ji=new WeakMap,Rc=new WeakMap,Ni=new WeakMap,Ds=new WeakMap;function fd(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Ke(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Ac.set(t,n)}).catch(()=>{}),Ds.set(e,n),e}function pd(n){if(Ji.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Ji.set(n,e)}let Zi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ji.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Rc.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ke(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function md(n){Zi=n(Zi)}function gd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Vi(this),e,...t);return Rc.set(r,e.sort?e.sort():[e]),Ke(r)}:dd().includes(n)?function(...e){return n.apply(Vi(this),e),Ke(Ac.get(this))}:function(...e){return Ke(n.apply(Vi(this),e))}}function _d(n){return typeof n=="function"?gd(n):(n instanceof IDBTransaction&&pd(n),ld(n,hd())?new Proxy(n,Zi):n)}function Ke(n){if(n instanceof IDBRequest)return fd(n);if(Ni.has(n))return Ni.get(n);const e=_d(n);return e!==n&&(Ni.set(n,e),Ds.set(e,n)),e}const Vi=n=>Ds.get(n);function yd(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=Ke(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Ke(o.result),c.oldVersion,c.newVersion,Ke(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Ed=["get","getKey","getAll","getAllKeys","count"],vd=["put","add","delete","clear"],Oi=new Map;function Ko(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Oi.get(e))return Oi.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=vd.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Ed.includes(t)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),i&&c.done]))[0]};return Oi.set(e,s),s}md(n=>({...n,get:(e,t,r)=>Ko(e,t)||n.get(e,t,r),has:(e,t)=>!!Ko(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Td(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Td(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const es="@firebase/app",Qo="0.9.23";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt=new ks("@firebase/app"),wd="@firebase/app-compat",Ad="@firebase/analytics-compat",Rd="@firebase/analytics",Pd="@firebase/app-check-compat",Sd="@firebase/app-check",Cd="@firebase/auth",bd="@firebase/auth-compat",kd="@firebase/database",Dd="@firebase/database-compat",Nd="@firebase/functions",Vd="@firebase/functions-compat",Od="@firebase/installations",Md="@firebase/installations-compat",Ld="@firebase/messaging",xd="@firebase/messaging-compat",Fd="@firebase/performance",Ud="@firebase/performance-compat",Bd="@firebase/remote-config",qd="@firebase/remote-config-compat",jd="@firebase/storage",$d="@firebase/storage-compat",Hd="@firebase/firestore",zd="@firebase/firestore-compat",Wd="firebase",Gd="10.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts="[DEFAULT]",Kd={[es]:"fire-core",[wd]:"fire-core-compat",[Rd]:"fire-analytics",[Ad]:"fire-analytics-compat",[Sd]:"fire-app-check",[Pd]:"fire-app-check-compat",[Cd]:"fire-auth",[bd]:"fire-auth-compat",[kd]:"fire-rtdb",[Dd]:"fire-rtdb-compat",[Nd]:"fire-fn",[Vd]:"fire-fn-compat",[Od]:"fire-iid",[Md]:"fire-iid-compat",[Ld]:"fire-fcm",[xd]:"fire-fcm-compat",[Fd]:"fire-perf",[Ud]:"fire-perf-compat",[Bd]:"fire-rc",[qd]:"fire-rc-compat",[jd]:"fire-gcs",[$d]:"fire-gcs-compat",[Hd]:"fire-fst",[zd]:"fire-fst-compat","fire-js":"fire-js",[Wd]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=new Map,ns=new Map;function Qd(n,e){try{n.container.addComponent(e)}catch(t){pt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function mt(n){const e=n.name;if(ns.has(e))return pt.debug(`There were multiple attempts to register component ${e}.`),!1;ns.set(e,n);for(const t of br.values())Qd(t,n);return!0}function Ns(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Qe=new Fn("app","Firebase",Yd);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Xe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qe.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It=Gd;function Pc(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ts,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Qe.create("bad-app-name",{appName:String(i)});if(t||(t=Tc()),!t)throw Qe.create("no-options");const s=br.get(i);if(s){if(Cr(t,s.options)&&Cr(r,s.config))return s;throw Qe.create("duplicate-app",{appName:i})}const o=new sd(i);for(const c of ns.values())o.addComponent(c);const a=new Xd(t,r,o);return br.set(i,a),a}function Sc(n=ts){const e=br.get(n);if(!e&&n===ts&&Tc())return Pc();if(!e)throw Qe.create("no-app",{appName:n});return e}function we(n,e,t){var r;let i=(r=Kd[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pt.warn(a.join(" "));return}mt(new Xe(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd="firebase-heartbeat-database",Zd=1,En="firebase-heartbeat-store";let Mi=null;function Cc(){return Mi||(Mi=yd(Jd,Zd,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(En)}}}).catch(n=>{throw Qe.create("idb-open",{originalErrorMessage:n.message})})),Mi}async function ef(n){try{return await(await Cc()).transaction(En).objectStore(En).get(bc(n))}catch(e){if(e instanceof De)pt.warn(e.message);else{const t=Qe.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pt.warn(t.message)}}}async function Yo(n,e){try{const r=(await Cc()).transaction(En,"readwrite");await r.objectStore(En).put(e,bc(n)),await r.done}catch(t){if(t instanceof De)pt.warn(t.message);else{const r=Qe.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});pt.warn(r.message)}}}function bc(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf=1024,nf=30*24*60*60*1e3;class rf{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new of(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Xo();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const o=new Date(s.date).valueOf();return Date.now()-o<=nf}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Xo(),{heartbeatsToSend:r,unsentEntries:i}=sf(this._heartbeatsCache.heartbeats),s=Sr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Xo(){return new Date().toISOString().substring(0,10)}function sf(n,e=tf){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Jo(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Jo(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class of{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Gh()?Kh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ef(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Yo(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Yo(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Jo(n){return Sr(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(n){mt(new Xe("platform-logger",e=>new Id(e),"PRIVATE")),mt(new Xe("heartbeat",e=>new rf(e),"PRIVATE")),we(es,Qo,n),we(es,Qo,"esm2017"),we("fire-js","")}af("");var cf="firebase",uf="10.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */we(cf,uf,"app");function Vs(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function kc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lf=kc,Dc=new Fn("auth","Firebase",kc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=new ks("@firebase/auth");function hf(n,...e){kr.logLevel<=b.WARN&&kr.warn(`Auth (${It}): ${n}`,...e)}function Er(n,...e){kr.logLevel<=b.ERROR&&kr.error(`Auth (${It}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(n,...e){throw Os(n,...e)}function Ae(n,...e){return Os(n,...e)}function df(n,e,t){const r=Object.assign(Object.assign({},lf()),{[e]:t});return new Fn("auth","Firebase",r).create(e,{appName:n.name})}function Os(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Dc.create(n,...e)}function w(n,e,...t){if(!n)throw Os(e,...t)}function Oe(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Er(e),new Error(e)}function Fe(n,e){n||Oe(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function ff(){return Zo()==="http:"||Zo()==="https:"}function Zo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pf(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ff()||Hh()||"connection"in navigator)?navigator.onLine:!0}function mf(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,t){this.shortDelay=e,this.longDelay=t,Fe(t>e,"Short delay should be less than long delay!"),this.isMobile=$h()||zh()}get(){return pf()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(n,e){Fe(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Oe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Oe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Oe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _f=new Bn(3e4,6e4);function nt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function rt(n,e,t,r,i={}){return Vc(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Un(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),Nc.fetch()(Oc(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function Vc(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},gf),e);try{const i=new Ef(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ur(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ur(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ur(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw ur(n,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw df(n,l,u);_e(n,l)}}catch(i){if(i instanceof De)throw i;_e(n,"network-request-failed",{message:String(i)})}}async function qn(n,e,t,r,i={}){const s=await rt(n,e,t,r,i);return"mfaPendingCredential"in s&&_e(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Oc(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Ms(n.config,i):`${n.config.apiScheme}://${i}`}function yf(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ef{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ae(this.auth,"network-request-failed")),_f.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ur(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Ae(n,e,r);return i.customData._tokenResponse=t,i}function ea(n){return n!==void 0&&n.enterprise!==void 0}class vf{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return yf(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function If(n,e){return rt(n,"GET","/v2/recaptchaConfig",nt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tf(n,e){return rt(n,"POST","/v1/accounts:delete",e)}async function wf(n,e){return rt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Af(n,e=!1){const t=oe(n),r=await t.getIdToken(e),i=Ls(r);w(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:pn(Li(i.auth_time)),issuedAtTime:pn(Li(i.iat)),expirationTime:pn(Li(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Li(n){return Number(n)*1e3}function Ls(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Er("JWT malformed, contained fewer than 3 sections"),null;try{const i=vc(t);return i?JSON.parse(i):(Er("Failed to decode base64 JWT payload"),null)}catch(i){return Er("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Rf(n){const e=Ls(n);return w(e,"internal-error"),w(typeof e.exp<"u","internal-error"),w(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof De&&Pf(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Pf({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=pn(this.lastLoginAt),this.creationTime=pn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dr(n){var e;const t=n.auth,r=await n.getIdToken(),i=await vn(n,wf(t,{idToken:r}));w(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?kf(s.providerUserInfo):[],a=bf(n.providerData,o),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Mc(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(n,h)}async function Cf(n){const e=oe(n);await Dr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bf(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function kf(n){return n.map(e=>{var{providerId:t}=e,r=Vs(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Df(n,e){const t=await Vc(n,{},async()=>{const r=Un({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=Oc(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Nc.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Nf(n,e){return rt(n,"POST","/v2/accounts:revokeToken",nt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){w(e.idToken,"internal-error"),w(typeof e.idToken<"u","internal-error"),w(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Rf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return w(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await Df(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new In;return r&&(w(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(w(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(w(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new In,this.toJSON())}_performRefresh(){return Oe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(n,e){w(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class dt{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Vs(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Sf(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Mc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await vn(this,this.stsTokenManager.getToken(this.auth,e));return w(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Af(this,e)}reload(){return Cf(this)}_assign(e){this!==e&&(w(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new dt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){w(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Dr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await vn(this,Tf(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,c,u,l;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,d=(i=t.email)!==null&&i!==void 0?i:void 0,p=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=t.photoURL)!==null&&o!==void 0?o:void 0,I=(a=t.tenantId)!==null&&a!==void 0?a:void 0,y=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,D=(u=t.createdAt)!==null&&u!==void 0?u:void 0,M=(l=t.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:V,emailVerified:U,isAnonymous:le,providerData:he,stsTokenManager:at}=t;w(V&&at,e,"internal-error");const Pt=In.fromJSON(this.name,at);w(typeof V=="string",e,"internal-error"),je(h,e.name),je(d,e.name),w(typeof U=="boolean",e,"internal-error"),w(typeof le=="boolean",e,"internal-error"),je(p,e.name),je(v,e.name),je(I,e.name),je(y,e.name),je(D,e.name),je(M,e.name);const tn=new dt({uid:V,auth:e,email:d,emailVerified:U,displayName:h,isAnonymous:le,photoURL:v,phoneNumber:p,tenantId:I,stsTokenManager:Pt,createdAt:D,lastLoginAt:M});return he&&Array.isArray(he)&&(tn.providerData=he.map(ar=>Object.assign({},ar))),y&&(tn._redirectEventId=y),tn}static async _fromIdTokenResponse(e,t,r=!1){const i=new In;i.updateFromServerResponse(t);const s=new dt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Dr(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta=new Map;function Me(n){Fe(n instanceof Function,"Expected a class definition");let e=ta.get(n);return e?(Fe(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ta.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Lc.type="NONE";const na=Lc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(n,e,t){return`firebase:${n}:${e}:${t}`}class Vt{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=vr(this.userKey,i.apiKey,s),this.fullPersistenceKey=vr("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?dt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Vt(Me(na),e,r);const i=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Me(na);const o=vr(r,e.config.apiKey,e.name);let a=null;for(const u of t)try{const l=await u._get(o);if(l){const h=dt._fromJSON(e,l);u!==s&&(a=h),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Vt(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Vt(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Uc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(xc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qc(e))return"Blackberry";if(jc(e))return"Webos";if(xs(e))return"Safari";if((e.includes("chrome/")||Fc(e))&&!e.includes("edge/"))return"Chrome";if(Bc(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function xc(n=se()){return/firefox\//i.test(n)}function xs(n=se()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Fc(n=se()){return/crios\//i.test(n)}function Uc(n=se()){return/iemobile/i.test(n)}function Bc(n=se()){return/android/i.test(n)}function qc(n=se()){return/blackberry/i.test(n)}function jc(n=se()){return/webos/i.test(n)}function Jr(n=se()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Vf(n=se()){var e;return Jr(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Of(){return Wh()&&document.documentMode===10}function $c(n=se()){return Jr(n)||Bc(n)||jc(n)||qc(n)||/windows phone/i.test(n)||Uc(n)}function Mf(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hc(n,e=[]){let t;switch(n){case"Browser":t=ra(se());break;case"Worker":t=`${ra(se())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${It}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xf(n,e={}){return rt(n,"GET","/v2/passwordPolicy",nt(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff=6;class Uf{constructor(e){var t,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Ff,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ia(this),this.idTokenSubscription=new ia(this),this.beforeStateQueue=new Lf(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Dc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Me(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Vt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return w(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Dr(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mf()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?oe(e):null;return t&&w(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&w(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Me(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await xf(this),t=new Uf(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Fn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Nf(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Me(e)||this._popupRedirectResolver;w(t,this,"argument-error"),this.redirectPersistenceManager=await Vt.create(this,[Me(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(w(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return w(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Hc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&hf(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Tt(n){return oe(n)}class ia{constructor(e){this.auth=e,this.observer=null,this.addObserver=Zh(t=>this.observer=t)}get next(){return w(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qf(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function zc(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Ae("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",qf().appendChild(r)})}function jf(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const $f="https://www.google.com/recaptcha/enterprise.js?render=",Hf="recaptcha-enterprise",zf="NO_RECAPTCHA";class Wf{constructor(e){this.type=Hf,this.auth=Tt(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{If(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new vf(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;ea(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(zf)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!t&&ea(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}zc($f+a).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function sa(n,e,t,r=!1){const i=new Wf(n);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function is(n,e,t,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await sa(n,e,t,t==="getOobCode");return r(n,s)}else return r(n,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await sa(n,e,t,t==="getOobCode");return r(n,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(n,e){const t=Ns(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Cr(s,e??{}))return i;_e(i,"already-initialized")}return t.initialize({options:e})}function Kf(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Me);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Qf(n,e,t){const r=Tt(n);w(r._canInitEmulator,r,"emulator-config-failed"),w(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=Wc(e),{host:o,port:a}=Yf(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Xf()}function Wc(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Yf(n){const e=Wc(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:oa(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:oa(o)}}}function oa(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Xf(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Oe("not implemented")}_getIdTokenResponse(e){return Oe("not implemented")}_linkToIdToken(e,t){return Oe("not implemented")}_getReauthenticationResolver(e){return Oe("not implemented")}}async function Jf(n,e){return rt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zf(n,e){return qn(n,"POST","/v1/accounts:signInWithPassword",nt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ep(n,e){return qn(n,"POST","/v1/accounts:signInWithEmailLink",nt(n,e))}async function tp(n,e){return qn(n,"POST","/v1/accounts:signInWithEmailLink",nt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends Fs{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Tn(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Tn(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return is(e,t,"signInWithPassword",Zf);case"emailLink":return ep(e,{email:this._email,oobCode:this._password});default:_e(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return is(e,r,"signUpPassword",Jf);case"emailLink":return tp(e,{idToken:t,email:this._email,oobCode:this._password});default:_e(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ot(n,e){return qn(n,"POST","/v1/accounts:signInWithIdp",nt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np="http://localhost";class gt extends Fs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new gt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):_e("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Vs(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new gt(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ot(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ot(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ot(e,t)}buildRequest(){const e={requestUri:np,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Un(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ip(n){const e=on(an(n)).link,t=e?on(an(e)).deep_link_id:null,r=on(an(n)).deep_link_id;return(r?on(an(r)).link:null)||r||t||e||n}class Us{constructor(e){var t,r,i,s,o,a;const c=on(an(e)),u=(t=c.apiKey)!==null&&t!==void 0?t:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,h=rp((i=c.mode)!==null&&i!==void 0?i:null);w(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=ip(e);try{return new Us(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(){this.providerId=Kt.PROVIDER_ID}static credential(e,t){return Tn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Us.parseLink(t);return w(r,"argument-error"),Tn._fromEmailAndCode(e,r.code,r.tenantId)}}Kt.PROVIDER_ID="password";Kt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Kt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends Gc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e extends jn{constructor(){super("facebook.com")}static credential(e){return gt._fromParams({providerId:$e.PROVIDER_ID,signInMethod:$e.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $e.credentialFromTaggedObject(e)}static credentialFromError(e){return $e.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $e.credential(e.oauthAccessToken)}catch{return null}}}$e.FACEBOOK_SIGN_IN_METHOD="facebook.com";$e.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He extends jn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return gt._fromParams({providerId:He.PROVIDER_ID,signInMethod:He.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return He.credentialFromTaggedObject(e)}static credentialFromError(e){return He.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return He.credential(t,r)}catch{return null}}}He.GOOGLE_SIGN_IN_METHOD="google.com";He.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze extends jn{constructor(){super("github.com")}static credential(e){return gt._fromParams({providerId:ze.PROVIDER_ID,signInMethod:ze.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ze.credentialFromTaggedObject(e)}static credentialFromError(e){return ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ze.credential(e.oauthAccessToken)}catch{return null}}}ze.GITHUB_SIGN_IN_METHOD="github.com";ze.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We extends jn{constructor(){super("twitter.com")}static credential(e,t){return gt._fromParams({providerId:We.PROVIDER_ID,signInMethod:We.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return We.credentialFromTaggedObject(e)}static credentialFromError(e){return We.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return We.credential(t,r)}catch{return null}}}We.TWITTER_SIGN_IN_METHOD="twitter.com";We.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sp(n,e){return qn(n,"POST","/v1/accounts:signUp",nt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await dt._fromIdTokenResponse(e,r,i),o=aa(r);return new _t({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=aa(r);return new _t({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function aa(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends De{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Nr.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Nr(e,t,r,i)}}function Kc(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Nr._fromErrorAndOperation(n,s,e,r):s})}async function op(n,e,t=!1){const r=await vn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return _t._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ap(n,e,t=!1){const{auth:r}=n,i="reauthenticate";try{const s=await vn(n,Kc(r,i,e,n),t);w(s.idToken,r,"internal-error");const o=Ls(s.idToken);w(o,r,"internal-error");const{sub:a}=o;return w(n.uid===a,r,"user-mismatch"),_t._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&_e(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qc(n,e,t=!1){const r="signIn",i=await Kc(n,r,e),s=await _t._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function cp(n,e){return Qc(Tt(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yc(n){const e=Tt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function up(n,e,t){const r=Tt(n),o=await is(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",sp).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Yc(n),c}),a=await _t._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function lp(n,e,t){return cp(oe(n),Kt.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Yc(n),r})}function hp(n,e,t,r){return oe(n).onIdTokenChanged(e,t,r)}function dp(n,e,t){return oe(n).beforeAuthStateChanged(e,t)}function fp(n,e,t,r){return oe(n).onAuthStateChanged(e,t,r)}function pp(n){return oe(n).signOut()}const Vr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Vr,"1"),this.storage.removeItem(Vr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mp(){const n=se();return xs(n)||Jr(n)}const gp=1e3,_p=10;class Jc extends Xc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=mp()&&Mf(),this.fallbackToPolling=$c(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Of()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,_p):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},gp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Jc.type="LOCAL";const yp=Jc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc extends Xc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Zc.type="SESSION";const eu=Zc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ep(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Zr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(t.origin,s)),c=await Ep(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bs(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=Bs("",20);i.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(l),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(){return window}function Ip(n){Re().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(){return typeof Re().WorkerGlobalScope<"u"&&typeof Re().importScripts=="function"}async function Tp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wp(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Ap(){return tu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu="firebaseLocalStorageDb",Rp=1,Or="firebaseLocalStorage",ru="fbase_key";class $n{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ei(n,e){return n.transaction([Or],e?"readwrite":"readonly").objectStore(Or)}function Pp(){const n=indexedDB.deleteDatabase(nu);return new $n(n).toPromise()}function ss(){const n=indexedDB.open(nu,Rp);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Or,{keyPath:ru})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Or)?e(r):(r.close(),await Pp(),e(await ss()))})})}async function ca(n,e,t){const r=ei(n,!0).put({[ru]:e,value:t});return new $n(r).toPromise()}async function Sp(n,e){const t=ei(n,!1).get(e),r=await new $n(t).toPromise();return r===void 0?null:r.value}function ua(n,e){const t=ei(n,!0).delete(e);return new $n(t).toPromise()}const Cp=800,bp=3;class iu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ss(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>bp)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zr._getInstance(Ap()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Tp(),!this.activeServiceWorker)return;this.sender=new vp(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||wp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ss();return await ca(e,Vr,"1"),await ua(e,Vr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>ca(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Sp(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ua(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ei(i,!1).getAll();return new $n(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Cp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}iu.type="LOCAL";const kp=iu;new Bn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dp(n,e){return e?Me(e):(w(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs extends Fs{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ot(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ot(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ot(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Np(n){return Qc(n.auth,new qs(n),n.bypassAuthState)}function Vp(n){const{auth:e,user:t}=n;return w(t,e,"internal-error"),ap(t,new qs(n),n.bypassAuthState)}async function Op(n){const{auth:e,user:t}=n;return w(t,e,"internal-error"),op(t,new qs(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Np;case"linkViaPopup":case"linkViaRedirect":return Op;case"reauthViaPopup":case"reauthViaRedirect":return Vp;default:_e(this.auth,"internal-error")}}resolve(e){Fe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp=new Bn(2e3,1e4);class Dt extends su{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Dt.currentPopupAction&&Dt.currentPopupAction.cancel(),Dt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return w(e,this.auth,"internal-error"),e}async onExecution(){Fe(this.filter.length===1,"Popup operations only handle one event");const e=Bs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ae(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ae(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Dt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ae(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Mp.get())};e()}}Dt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lp="pendingRedirect",Ir=new Map;class xp extends su{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ir.get(this.auth._key());if(!e){try{const r=await Fp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ir.set(this.auth._key(),e)}return this.bypassAuthState||Ir.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Fp(n,e){const t=qp(e),r=Bp(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function Up(n,e){Ir.set(n._key(),e)}function Bp(n){return Me(n._redirectPersistence)}function qp(n){return vr(Lp,n.config.apiKey,n.name)}async function jp(n,e,t=!1){const r=Tt(n),i=Dp(r,e),o=await new xp(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p=10*60*1e3;class Hp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!zp(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!ou(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ae(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$p&&this.cachedEventUids.clear(),this.cachedEventUids.has(la(e))}saveEventToCache(e){this.cachedEventUids.add(la(e)),this.lastProcessedEventTime=Date.now()}}function la(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function ou({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function zp(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ou(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wp(n,e={}){return rt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Kp=/^https?/;async function Qp(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Wp(n);for(const t of e)try{if(Yp(t))return}catch{}_e(n,"unauthorized-domain")}function Yp(n){const e=rs(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!Kp.test(t))return!1;if(Gp.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xp=new Bn(3e4,6e4);function ha(){const n=Re().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Jp(n){return new Promise((e,t)=>{var r,i,s;function o(){ha(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ha(),t(Ae(n,"network-request-failed"))},timeout:Xp.get()})}if(!((i=(r=Re().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Re().gapi)===null||s===void 0)&&s.load)o();else{const a=jf("iframefcb");return Re()[a]=()=>{gapi.load?o():t(Ae(n,"network-request-failed"))},zc(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw Tr=null,e})}let Tr=null;function Zp(n){return Tr=Tr||Jp(n),Tr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em=new Bn(5e3,15e3),tm="__/auth/iframe",nm="emulator/auth/iframe",rm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},im=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sm(n){const e=n.config;w(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ms(e,nm):`https://${n.config.authDomain}/${tm}`,r={apiKey:e.apiKey,appName:n.name,v:It},i=im.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Un(r).slice(1)}`}async function om(n){const e=await Zp(n),t=Re().gapi;return w(t,n,"internal-error"),e.open({where:document.body,url:sm(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rm,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ae(n,"network-request-failed"),a=Re().setTimeout(()=>{s(o)},em.get());function c(){Re().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cm=500,um=600,lm="_blank",hm="http://localhost";class da{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dm(n,e,t,r=cm,i=um){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},am),{width:r.toString(),height:i.toString(),top:s,left:o}),u=se().toLowerCase();t&&(a=Fc(u)?lm:t),xc(u)&&(e=e||hm,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[p,v])=>`${d}${p}=${v},`,"");if(Vf(u)&&a!=="_self")return fm(e||"",a),new da(null);const h=window.open(e||"",a,l);w(h,n,"popup-blocked");try{h.focus()}catch{}return new da(h)}function fm(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pm="__/auth/handler",mm="emulator/auth/handler",gm=encodeURIComponent("fac");async function fa(n,e,t,r,i,s){w(n.config.authDomain,n,"auth-domain-config-required"),w(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:It,eventId:i};if(e instanceof Gc){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Jh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,h]of Object.entries(s||{}))o[l]=h}if(e instanceof jn){const l=e.getScopes().filter(h=>h!=="");l.length>0&&(o.scopes=l.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];const c=await n._getAppCheckToken(),u=c?`#${gm}=${encodeURIComponent(c)}`:"";return`${_m(n)}?${Un(a).slice(1)}${u}`}function _m({config:n}){return n.emulator?Ms(n,mm):`https://${n.authDomain}/${pm}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi="webStorageSupport";class ym{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=eu,this._completeRedirectFn=jp,this._overrideRedirectResult=Up}async _openPopup(e,t,r,i){var s;Fe((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await fa(e,t,r,rs(),i);return dm(e,o,Bs())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await fa(e,t,r,rs(),i);return Ip(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Fe(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await om(e),r=new Hp(e);return t.register("authEvent",i=>(w(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(xi,{type:xi},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[xi];o!==void 0&&t(!!o),_e(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Qp(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return $c()||xs()||Jr()}}const Em=ym;var pa="@firebase/auth",ma="1.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){w(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Tm(n){mt(new Xe("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;w(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Hc(n)},u=new Bf(r,i,s,c);return Kf(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),mt(new Xe("auth-internal",e=>{const t=Tt(e.getProvider("auth").getImmediate());return(r=>new vm(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),we(pa,ma,Im(n)),we(pa,ma,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm=5*60,Am=wc("authIdTokenMaxAge")||wm;let ga=null;const Rm=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Am)return;const i=t==null?void 0:t.token;ga!==i&&(ga=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Pm(n=Sc()){const e=Ns(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Gf(n,{popupRedirectResolver:Em,persistence:[kp,yp,eu]}),r=wc("authTokenSyncURL");if(r){const s=Rm(r);dp(t,s,()=>s(t.currentUser)),hp(t,o=>s(o))}const i=Ic("auth");return i&&Qf(t,`http://${i}`),t}Tm("Browser");var Sm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},g,js=js||{},R=Sm||self;function ti(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function Hn(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function Cm(n){return Object.prototype.hasOwnProperty.call(n,Fi)&&n[Fi]||(n[Fi]=++bm)}var Fi="closure_uid_"+(1e9*Math.random()>>>0),bm=0;function km(n,e,t){return n.call.apply(n.bind,arguments)}function Dm(n,e,t){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(e,i)}}return function(){return n.apply(e,arguments)}}function re(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?re=km:re=Dm,re.apply(null,arguments)}function lr(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var r=t.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function K(n,e){function t(){}t.prototype=e.prototype,n.$=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function it(){this.s=this.s,this.o=this.o}var Nm=0;it.prototype.s=!1;it.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Nm!=0)&&Cm(this)};it.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const au=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function $s(n){const e=n.length;if(0<e){const t=Array(e);for(let r=0;r<e;r++)t[r]=n[r];return t}return[]}function _a(n,e){for(let t=1;t<arguments.length;t++){const r=arguments[t];if(ti(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function ie(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}ie.prototype.h=function(){this.defaultPrevented=!0};var Vm=function(){if(!R.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{R.addEventListener("test",()=>{},e),R.removeEventListener("test",()=>{},e)}catch{}return n}();function wn(n){return/^[\s\xa0]*$/.test(n)}function ni(){var n=R.navigator;return n&&(n=n.userAgent)?n:""}function ve(n){return ni().indexOf(n)!=-1}function Hs(n){return Hs[" "](n),n}Hs[" "]=function(){};function Om(n,e){var t=Pg;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:t[n]=e(n)}var Mm=ve("Opera"),Ut=ve("Trident")||ve("MSIE"),cu=ve("Edge"),os=cu||Ut,uu=ve("Gecko")&&!(ni().toLowerCase().indexOf("webkit")!=-1&&!ve("Edge"))&&!(ve("Trident")||ve("MSIE"))&&!ve("Edge"),Lm=ni().toLowerCase().indexOf("webkit")!=-1&&!ve("Edge");function lu(){var n=R.document;return n?n.documentMode:void 0}var as;e:{var Ui="",Bi=function(){var n=ni();if(uu)return/rv:([^\);]+)(\)|;)/.exec(n);if(cu)return/Edge\/([\d\.]+)/.exec(n);if(Ut)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(Lm)return/WebKit\/(\S+)/.exec(n);if(Mm)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Bi&&(Ui=Bi?Bi[1]:""),Ut){var qi=lu();if(qi!=null&&qi>parseFloat(Ui)){as=String(qi);break e}}as=Ui}var cs;if(R.document&&Ut){var ya=lu();cs=ya||parseInt(as,10)||void 0}else cs=void 0;var xm=cs;function An(n,e){if(ie.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(uu){e:{try{Hs(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:Fm[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&An.$.h.call(this)}}K(An,ie);var Fm={2:"touch",3:"pen",4:"mouse"};An.prototype.h=function(){An.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var zn="closure_listenable_"+(1e6*Math.random()|0),Um=0;function Bm(n,e,t,r,i){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!r,this.la=i,this.key=++Um,this.fa=this.ia=!1}function ri(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function zs(n,e,t){for(const r in n)e.call(t,n[r],r,n)}function qm(n,e){for(const t in n)e.call(void 0,n[t],t,n)}function hu(n){const e={};for(const t in n)e[t]=n[t];return e}const Ea="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function du(n,e){let t,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(t in r)n[t]=r[t];for(let s=0;s<Ea.length;s++)t=Ea[s],Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}}function ii(n){this.src=n,this.g={},this.h=0}ii.prototype.add=function(n,e,t,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=ls(n,e,r,i);return-1<o?(e=n[o],t||(e.ia=!1)):(e=new Bm(e,this.src,s,!!r,i),e.ia=t,n.push(e)),e};function us(n,e){var t=e.type;if(t in n.g){var r=n.g[t],i=au(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(ri(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function ls(n,e,t,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.fa&&s.listener==e&&s.capture==!!t&&s.la==r)return i}return-1}var Ws="closure_lm_"+(1e6*Math.random()|0),ji={};function fu(n,e,t,r,i){if(r&&r.once)return mu(n,e,t,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)fu(n,e[s],t,r,i);return null}return t=Qs(t),n&&n[zn]?n.O(e,t,Hn(r)?!!r.capture:!!r,i):pu(n,e,t,!1,r,i)}function pu(n,e,t,r,i,s){if(!e)throw Error("Invalid event type");var o=Hn(i)?!!i.capture:!!i,a=Ks(n);if(a||(n[Ws]=a=new ii(n)),t=a.add(e,t,r,o,s),t.proxy)return t;if(r=jm(),t.proxy=r,r.src=n,r.listener=t,n.addEventListener)Vm||(i=o),i===void 0&&(i=!1),n.addEventListener(e.toString(),r,i);else if(n.attachEvent)n.attachEvent(_u(e.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return t}function jm(){function n(t){return e.call(n.src,n.listener,t)}const e=$m;return n}function mu(n,e,t,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)mu(n,e[s],t,r,i);return null}return t=Qs(t),n&&n[zn]?n.P(e,t,Hn(r)?!!r.capture:!!r,i):pu(n,e,t,!0,r,i)}function gu(n,e,t,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)gu(n,e[s],t,r,i);else r=Hn(r)?!!r.capture:!!r,t=Qs(t),n&&n[zn]?(n=n.i,e=String(e).toString(),e in n.g&&(s=n.g[e],t=ls(s,t,r,i),-1<t&&(ri(s[t]),Array.prototype.splice.call(s,t,1),s.length==0&&(delete n.g[e],n.h--)))):n&&(n=Ks(n))&&(e=n.g[e.toString()],n=-1,e&&(n=ls(e,t,r,i)),(t=-1<n?e[n]:null)&&Gs(t))}function Gs(n){if(typeof n!="number"&&n&&!n.fa){var e=n.src;if(e&&e[zn])us(e.i,n);else{var t=n.type,r=n.proxy;e.removeEventListener?e.removeEventListener(t,r,n.capture):e.detachEvent?e.detachEvent(_u(t),r):e.addListener&&e.removeListener&&e.removeListener(r),(t=Ks(e))?(us(t,n),t.h==0&&(t.src=null,e[Ws]=null)):ri(n)}}}function _u(n){return n in ji?ji[n]:ji[n]="on"+n}function $m(n,e){if(n.fa)n=!0;else{e=new An(e,this);var t=n.listener,r=n.la||n.src;n.ia&&Gs(n),n=t.call(r,e)}return n}function Ks(n){return n=n[Ws],n instanceof ii?n:null}var $i="__closure_events_fn_"+(1e9*Math.random()>>>0);function Qs(n){return typeof n=="function"?n:(n[$i]||(n[$i]=function(e){return n.handleEvent(e)}),n[$i])}function G(){it.call(this),this.i=new ii(this),this.S=this,this.J=null}K(G,it);G.prototype[zn]=!0;G.prototype.removeEventListener=function(n,e,t,r){gu(this,n,e,t,r)};function J(n,e){var t,r=n.J;if(r)for(t=[];r;r=r.J)t.push(r);if(n=n.S,r=e.type||e,typeof e=="string")e=new ie(e,n);else if(e instanceof ie)e.target=e.target||n;else{var i=e;e=new ie(r,n),du(e,i)}if(i=!0,t)for(var s=t.length-1;0<=s;s--){var o=e.g=t[s];i=hr(o,r,!0,e)&&i}if(o=e.g=n,i=hr(o,r,!0,e)&&i,i=hr(o,r,!1,e)&&i,t)for(s=0;s<t.length;s++)o=e.g=t[s],i=hr(o,r,!1,e)&&i}G.prototype.N=function(){if(G.$.N.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],r=0;r<t.length;r++)ri(t[r]);delete n.g[e],n.h--}}this.J=null};G.prototype.O=function(n,e,t,r){return this.i.add(String(n),e,!1,t,r)};G.prototype.P=function(n,e,t,r){return this.i.add(String(n),e,!0,t,r)};function hr(n,e,t,r){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==t){var a=o.listener,c=o.la||o.src;o.ia&&us(n.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var Ys=R.JSON.stringify;class Hm{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function zm(){var n=Xs;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class Wm{constructor(){this.h=this.g=null}add(e,t){const r=yu.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}}var yu=new Hm(()=>new Gm,n=>n.reset());class Gm{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Km(n){var e=1;n=n.split(":");const t=[];for(;0<e&&n.length;)t.push(n.shift()),e--;return n.length&&t.push(n.join(":")),t}function Qm(n){R.setTimeout(()=>{throw n},0)}let Rn,Pn=!1,Xs=new Wm,Eu=()=>{const n=R.Promise.resolve(void 0);Rn=()=>{n.then(Ym)}};var Ym=()=>{for(var n;n=zm();){try{n.h.call(n.g)}catch(t){Qm(t)}var e=yu;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}Pn=!1};function si(n,e){G.call(this),this.h=n||1,this.g=e||R,this.j=re(this.qb,this),this.l=Date.now()}K(si,G);g=si.prototype;g.ga=!1;g.T=null;g.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),J(this,"tick"),this.ga&&(Js(this),this.start()))}};g.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Js(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}g.N=function(){si.$.N.call(this),Js(this),delete this.g};function Zs(n,e,t){if(typeof n=="function")t&&(n=re(n,t));else if(n&&typeof n.handleEvent=="function")n=re(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:R.setTimeout(n,e||0)}function vu(n){n.g=Zs(()=>{n.g=null,n.i&&(n.i=!1,vu(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class Xm extends it{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:vu(this)}N(){super.N(),this.g&&(R.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Sn(n){it.call(this),this.h=n,this.g={}}K(Sn,it);var va=[];function Iu(n,e,t,r){Array.isArray(t)||(t&&(va[0]=t.toString()),t=va);for(var i=0;i<t.length;i++){var s=fu(e,t[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function Tu(n){zs(n.g,function(e,t){this.g.hasOwnProperty(t)&&Gs(e)},n),n.g={}}Sn.prototype.N=function(){Sn.$.N.call(this),Tu(this)};Sn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function oi(){this.g=!0}oi.prototype.Ea=function(){this.g=!1};function Jm(n,e,t,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+t+`
`+o})}function Zm(n,e,t,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+t+`
`+s+" "+o})}function Nt(n,e,t,r){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+tg(n,t)+(r?" "+r:"")})}function eg(n,e){n.info(function(){return"TIMEOUT: "+e})}oi.prototype.info=function(){};function tg(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var r=t[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ys(t)}catch{return e}}var wt={},Ia=null;function ai(){return Ia=Ia||new G}wt.Ta="serverreachability";function wu(n){ie.call(this,wt.Ta,n)}K(wu,ie);function Cn(n){const e=ai();J(e,new wu(e))}wt.STAT_EVENT="statevent";function Au(n,e){ie.call(this,wt.STAT_EVENT,n),this.stat=e}K(Au,ie);function ce(n){const e=ai();J(e,new Au(e,n))}wt.Ua="timingevent";function Ru(n,e){ie.call(this,wt.Ua,n),this.size=e}K(Ru,ie);function Wn(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return R.setTimeout(function(){n()},e)}var ci={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Pu={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function eo(){}eo.prototype.h=null;function Ta(n){return n.h||(n.h=n.i())}function Su(){}var Gn={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function to(){ie.call(this,"d")}K(to,ie);function no(){ie.call(this,"c")}K(no,ie);var hs;function ui(){}K(ui,eo);ui.prototype.g=function(){return new XMLHttpRequest};ui.prototype.i=function(){return{}};hs=new ui;function Kn(n,e,t,r){this.l=n,this.j=e,this.m=t,this.W=r||1,this.U=new Sn(this),this.P=ng,n=os?125:void 0,this.V=new si(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Cu}function Cu(){this.i=null,this.g="",this.h=!1}var ng=45e3,ds={},Mr={};g=Kn.prototype;g.setTimeout=function(n){this.P=n};function fs(n,e,t){n.L=1,n.v=hi(Ue(e)),n.s=t,n.S=!0,bu(n,null)}function bu(n,e){n.G=Date.now(),Qn(n),n.A=Ue(n.v);var t=n.A,r=n.W;Array.isArray(r)||(r=[String(r)]),xu(t.i,"t",r),n.C=0,t=n.l.J,n.h=new Cu,n.g=il(n.l,t?e:null,!n.s),0<n.O&&(n.M=new Xm(re(n.Pa,n,n.g),n.O)),Iu(n.U,n.g,"readystatechange",n.nb),e=n.I?hu(n.I):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,e)):(n.u="GET",n.g.ha(n.A,n.u,null,e)),Cn(),Jm(n.j,n.u,n.A,n.m,n.W,n.s)}g.nb=function(n){n=n.target;const e=this.M;e&&Ie(n)==3?e.l():this.Pa(n)};g.Pa=function(n){try{if(n==this.g)e:{const l=Ie(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||os||this.g&&(this.h.h||this.g.ja()||Pa(this.g)))){this.J||l!=4||e==7||(e==8||0>=h?Cn(3):Cn(2)),li(this);var t=this.g.da();this.ca=t;t:if(ku(this)){var r=Pa(this.g);n="";var i=r.length,s=Ie(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ut(this),mn(this);var o="";break t}this.h.i=new R.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,n+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=t==200,Zm(this.j,this.u,this.A,this.m,this.W,l,t),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!wn(a)){var u=a;break t}}u=null}if(t=u)Nt(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ps(this,t);else{this.i=!1,this.o=3,ce(12),ut(this),mn(this);break e}}this.S?(Du(this,l,o),os&&this.i&&l==3&&(Iu(this.U,this.V,"tick",this.mb),this.V.start())):(Nt(this.j,this.m,o,null),ps(this,o)),l==4&&ut(this),this.i&&!this.J&&(l==4?el(this.l,this):(this.i=!1,Qn(this)))}else wg(this.g),t==400&&0<o.indexOf("Unknown SID")?(this.o=3,ce(12)):(this.o=0,ce(13)),ut(this),mn(this)}}}catch{}finally{}};function ku(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function Du(n,e,t){let r=!0,i;for(;!n.J&&n.C<t.length;)if(i=rg(n,t),i==Mr){e==4&&(n.o=4,ce(14),r=!1),Nt(n.j,n.m,null,"[Incomplete Response]");break}else if(i==ds){n.o=4,ce(15),Nt(n.j,n.m,t,"[Invalid Chunk]"),r=!1;break}else Nt(n.j,n.m,i,null),ps(n,i);ku(n)&&i!=Mr&&i!=ds&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,ce(16),r=!1),n.i=n.i&&r,r?0<t.length&&!n.ba&&(n.ba=!0,e=n.l,e.g==n&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+t.length),co(e),e.M=!0,ce(11))):(Nt(n.j,n.m,t,"[Invalid Chunked Response]"),ut(n),mn(n))}g.mb=function(){if(this.g){var n=Ie(this.g),e=this.g.ja();this.C<e.length&&(li(this),Du(this,n,e),this.i&&n!=4&&Qn(this))}};function rg(n,e){var t=n.C,r=e.indexOf(`
`,t);return r==-1?Mr:(t=Number(e.substring(t,r)),isNaN(t)?ds:(r+=1,r+t>e.length?Mr:(e=e.slice(r,r+t),n.C=r+t,e)))}g.cancel=function(){this.J=!0,ut(this)};function Qn(n){n.Y=Date.now()+n.P,Nu(n,n.P)}function Nu(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Wn(re(n.lb,n),e)}function li(n){n.B&&(R.clearTimeout(n.B),n.B=null)}g.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(eg(this.j,this.A),this.L!=2&&(Cn(),ce(17)),ut(this),this.o=2,mn(this)):Nu(this,this.Y-n)};function mn(n){n.l.H==0||n.J||el(n.l,n)}function ut(n){li(n);var e=n.M;e&&typeof e.sa=="function"&&e.sa(),n.M=null,Js(n.V),Tu(n.U),n.g&&(e=n.g,n.g=null,e.abort(),e.sa())}function ps(n,e){try{var t=n.l;if(t.H!=0&&(t.g==n||ms(t.i,n))){if(!n.K&&ms(t.i,n)&&t.H==3){try{var r=t.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!t.u){if(t.g)if(t.g.G+3e3<n.G)Fr(t),pi(t);else break e;ao(t),ce(18)}}else t.Fa=i[1],0<t.Fa-t.V&&37500>i[2]&&t.G&&t.A==0&&!t.v&&(t.v=Wn(re(t.ib,t),6e3));if(1>=Bu(t.i)&&t.oa){try{t.oa()}catch{}t.oa=void 0}}else lt(t,11)}else if((n.K||t.g==n)&&Fr(t),!wn(e))for(i=t.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(t.V=u[0],u=u[1],t.H==2)if(u[0]=="c"){t.K=u[1],t.pa=u[2];const l=u[3];l!=null&&(t.ra=l,t.l.info("VER="+t.ra));const h=u[4];h!=null&&(t.Ga=h,t.l.info("SVER="+t.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,t.L=r,t.l.info("backChannelRequestTimeoutMs_="+r)),r=t;const p=n.g;if(p){const v=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(ro(s,s.h),s.h=null))}if(r.F){const I=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;I&&(r.Da=I,x(r.I,r.F,I))}}t.H=3,t.h&&t.h.Ba(),t.ca&&(t.S=Date.now()-n.G,t.l.info("Handshake RTT: "+t.S+"ms")),r=t;var o=n;if(r.wa=rl(r,r.J?r.pa:null,r.Y),o.K){qu(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(li(a),Qn(a)),r.g=o}else Ju(r);0<t.j.length&&mi(t)}else u[0]!="stop"&&u[0]!="close"||lt(t,7);else t.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?lt(t,7):oo(t):u[0]!="noop"&&t.h&&t.h.Aa(u),t.A=0)}}Cn(4)}catch{}}function ig(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(ti(n)){for(var e=[],t=n.length,r=0;r<t;r++)e.push(n[r]);return e}e=[],t=0;for(r in n)e[t++]=n[r];return e}function sg(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(ti(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const r in n)e[t++]=r;return e}}}function Vu(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(ti(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=sg(n),r=ig(n),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],t&&t[s],n)}var Ou=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function og(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var r=n[t].indexOf("="),i=null;if(0<=r){var s=n[t].substring(0,r);i=n[t].substring(r+1)}else s=n[t];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ft(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof ft){this.h=n.h,Lr(this,n.j),this.s=n.s,this.g=n.g,xr(this,n.m),this.l=n.l;var e=n.i,t=new bn;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),wa(this,t),this.o=n.o}else n&&(e=String(n).match(Ou))?(this.h=!1,Lr(this,e[1]||"",!0),this.s=cn(e[2]||""),this.g=cn(e[3]||"",!0),xr(this,e[4]),this.l=cn(e[5]||"",!0),wa(this,e[6]||"",!0),this.o=cn(e[7]||"")):(this.h=!1,this.i=new bn(null,this.h))}ft.prototype.toString=function(){var n=[],e=this.j;e&&n.push(un(e,Aa,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(un(e,Aa,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(un(t,t.charAt(0)=="/"?ug:cg,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",un(t,hg)),n.join("")};function Ue(n){return new ft(n)}function Lr(n,e,t){n.j=t?cn(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function xr(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function wa(n,e,t){e instanceof bn?(n.i=e,dg(n.i,n.h)):(t||(e=un(e,lg)),n.i=new bn(e,n.h))}function x(n,e,t){n.i.set(e,t)}function hi(n){return x(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function cn(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function un(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,ag),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function ag(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Aa=/[#\/\?@]/g,cg=/[#\?:]/g,ug=/[#\?]/g,lg=/[#\?@]/g,hg=/#/g;function bn(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function st(n){n.g||(n.g=new Map,n.h=0,n.i&&og(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}g=bn.prototype;g.add=function(n,e){st(this),this.i=null,n=Qt(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function Mu(n,e){st(n),e=Qt(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function Lu(n,e){return st(n),e=Qt(n,e),n.g.has(e)}g.forEach=function(n,e){st(this),this.g.forEach(function(t,r){t.forEach(function(i){n.call(e,i,r,this)},this)},this)};g.ta=function(){st(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let r=0;r<e.length;r++){const i=n[r];for(let s=0;s<i.length;s++)t.push(e[r])}return t};g.Z=function(n){st(this);let e=[];if(typeof n=="string")Lu(this,n)&&(e=e.concat(this.g.get(Qt(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};g.set=function(n,e){return st(this),this.i=null,n=Qt(this,n),Lu(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};g.get=function(n,e){return n?(n=this.Z(n),0<n.length?String(n[0]):e):e};function xu(n,e,t){Mu(n,e),0<t.length&&(n.i=null,n.g.set(Qt(n,e),$s(t)),n.h+=t.length)}g.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var r=e[t];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function Qt(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function dg(n,e){e&&!n.j&&(st(n),n.i=null,n.g.forEach(function(t,r){var i=r.toLowerCase();r!=i&&(Mu(this,r),xu(this,i,t))},n)),n.j=e}var fg=class{constructor(n,e){this.g=n,this.map=e}};function Fu(n){this.l=n||pg,R.PerformanceNavigationTiming?(n=R.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(R.g&&R.g.Ka&&R.g.Ka()&&R.g.Ka().dc),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var pg=10;function Uu(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Bu(n){return n.h?1:n.g?n.g.size:0}function ms(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function ro(n,e){n.g?n.g.add(e):n.h=e}function qu(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}Fu.prototype.cancel=function(){if(this.i=ju(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function ju(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.F);return e}return $s(n.i)}var mg=class{stringify(n){return R.JSON.stringify(n,void 0)}parse(n){return R.JSON.parse(n,void 0)}};function gg(){this.g=new mg}function _g(n,e,t){const r=t||"";try{Vu(n,function(i,s){let o=i;Hn(i)&&(o=Ys(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function yg(n,e){const t=new oi;if(R.Image){const r=new Image;r.onload=lr(dr,t,r,"TestLoadImage: loaded",!0,e),r.onerror=lr(dr,t,r,"TestLoadImage: error",!1,e),r.onabort=lr(dr,t,r,"TestLoadImage: abort",!1,e),r.ontimeout=lr(dr,t,r,"TestLoadImage: timeout",!1,e),R.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else e(!1)}function dr(n,e,t,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Yn(n){this.l=n.ec||null,this.j=n.ob||!1}K(Yn,eo);Yn.prototype.g=function(){return new di(this.l,this.j)};Yn.prototype.i=function(n){return function(){return n}}({});function di(n,e){G.call(this),this.F=n,this.u=e,this.m=void 0,this.readyState=io,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}K(di,G);var io=0;g=di.prototype;g.open=function(n,e){if(this.readyState!=io)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,kn(this)};g.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.F||R).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};g.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Xn(this)),this.readyState=io};g.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,kn(this)),this.g&&(this.readyState=3,kn(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof R.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;$u(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function $u(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}g.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?Xn(this):kn(this),this.readyState==3&&$u(this)}};g.Za=function(n){this.g&&(this.response=this.responseText=n,Xn(this))};g.Ya=function(n){this.g&&(this.response=n,Xn(this))};g.ka=function(){this.g&&Xn(this)};function Xn(n){n.readyState=4,n.l=null,n.j=null,n.A=null,kn(n)}g.setRequestHeader=function(n,e){this.v.append(n,e)};g.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};g.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function kn(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(di.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var Eg=R.JSON.parse;function q(n){G.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Hu,this.L=this.M=!1}K(q,G);var Hu="",vg=/^https?$/i,Ig=["POST","PUT"];g=q.prototype;g.Oa=function(n){this.M=n};g.ha=function(n,e,t,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);e=e?e.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():hs.g(),this.C=this.u?Ta(this.u):Ta(hs),this.g.onreadystatechange=re(this.La,this);try{this.G=!0,this.g.open(e,String(n),!0),this.G=!1}catch(s){Ra(this,s);return}if(n=t||"",t=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)t.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())t.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(t.keys()).find(s=>s.toLowerCase()=="content-type"),i=R.FormData&&n instanceof R.FormData,!(0<=au(Ig,e))||r||i||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of t)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Gu(this),0<this.B&&((this.L=Tg(this.g))?(this.g.timeout=this.B,this.g.ontimeout=re(this.ua,this)):this.A=Zs(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){Ra(this,s)}};function Tg(n){return Ut&&typeof n.timeout=="number"&&n.ontimeout!==void 0}g.ua=function(){typeof js<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,J(this,"timeout"),this.abort(8))};function Ra(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,zu(n),fi(n)}function zu(n){n.F||(n.F=!0,J(n,"complete"),J(n,"error"))}g.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,J(this,"complete"),J(this,"abort"),fi(this))};g.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),fi(this,!0)),q.$.N.call(this)};g.La=function(){this.s||(this.G||this.v||this.l?Wu(this):this.kb())};g.kb=function(){Wu(this)};function Wu(n){if(n.h&&typeof js<"u"&&(!n.C[1]||Ie(n)!=4||n.da()!=2)){if(n.v&&Ie(n)==4)Zs(n.La,0,n);else if(J(n,"readystatechange"),Ie(n)==4){n.h=!1;try{const o=n.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var r;if(r=o===0){var i=String(n.I).match(Ou)[1]||null;!i&&R.self&&R.self.location&&(i=R.self.location.protocol.slice(0,-1)),r=!vg.test(i?i.toLowerCase():"")}t=r}if(t)J(n,"complete"),J(n,"success");else{n.m=6;try{var s=2<Ie(n)?n.g.statusText:""}catch{s=""}n.j=s+" ["+n.da()+"]",zu(n)}}finally{fi(n)}}}}function fi(n,e){if(n.g){Gu(n);const t=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,e||J(n,"ready");try{t.onreadystatechange=r}catch{}}}function Gu(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(R.clearTimeout(n.A),n.A=null)}g.isActive=function(){return!!this.g};function Ie(n){return n.g?n.g.readyState:0}g.da=function(){try{return 2<Ie(this)?this.g.status:-1}catch{return-1}};g.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};g.Wa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),Eg(e)}};function Pa(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case Hu:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function wg(n){const e={};n=(n.g&&2<=Ie(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(wn(n[r]))continue;var t=Km(n[r]);const i=t[0];if(t=t[1],typeof t!="string")continue;t=t.trim();const s=e[i]||[];e[i]=s,s.push(t)}qm(e,function(r){return r.join(", ")})}g.Ia=function(){return this.m};g.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Ku(n){let e="";return zs(n,function(t,r){e+=r,e+=":",e+=t,e+=`\r
`}),e}function so(n,e,t){e:{for(r in t){var r=!1;break e}r=!0}r||(t=Ku(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):x(n,e,t))}function nn(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function Qu(n){this.Ga=0,this.j=[],this.l=new oi,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=nn("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=nn("baseRetryDelayMs",5e3,n),this.hb=nn("retryDelaySeedMs",1e4,n),this.eb=nn("forwardChannelMaxRetries",2,n),this.xa=nn("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new Fu(n&&n.concurrentRequestLimit),this.Ja=new gg,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}g=Qu.prototype;g.ra=8;g.H=1;function oo(n){if(Yu(n),n.H==3){var e=n.W++,t=Ue(n.I);if(x(t,"SID",n.K),x(t,"RID",e),x(t,"TYPE","terminate"),Jn(n,t),e=new Kn(n,n.l,e),e.L=2,e.v=hi(Ue(t)),t=!1,R.navigator&&R.navigator.sendBeacon)try{t=R.navigator.sendBeacon(e.v.toString(),"")}catch{}!t&&R.Image&&(new Image().src=e.v,t=!0),t||(e.g=il(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Qn(e)}nl(n)}function pi(n){n.g&&(co(n),n.g.cancel(),n.g=null)}function Yu(n){pi(n),n.u&&(R.clearTimeout(n.u),n.u=null),Fr(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&R.clearTimeout(n.m),n.m=null)}function mi(n){if(!Uu(n.i)&&!n.m){n.m=!0;var e=n.Na;Rn||Eu(),Pn||(Rn(),Pn=!0),Xs.add(e,n),n.C=0}}function Ag(n,e){return Bu(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=e.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=Wn(re(n.Na,n,e),tl(n,n.C)),n.C++,!0)}g.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new Kn(this,this.l,n);let s=this.s;if(this.U&&(s?(s=hu(s),du(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,t=0;t<this.j.length;t++){t:{var r=this.j[t];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=t;break e}if(e===4096||t===this.j.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=Xu(this,i,e),t=Ue(this.I),x(t,"RID",n),x(t,"CVER",22),this.F&&x(t,"X-HTTP-Session-Id",this.F),Jn(this,t),s&&(this.O?e="headers="+encodeURIComponent(String(Ku(s)))+"&"+e:this.o&&so(t,this.o,s)),ro(this.i,i),this.bb&&x(t,"TYPE","init"),this.P?(x(t,"$req",e),x(t,"SID","null"),i.aa=!0,fs(i,t,null)):fs(i,t,e),this.H=2}}else this.H==3&&(n?Sa(this,n):this.j.length==0||Uu(this.i)||Sa(this))};function Sa(n,e){var t;e?t=e.m:t=n.W++;const r=Ue(n.I);x(r,"SID",n.K),x(r,"RID",t),x(r,"AID",n.V),Jn(n,r),n.o&&n.s&&so(r,n.o,n.s),t=new Kn(n,n.l,t,n.C+1),n.o===null&&(t.I=n.s),e&&(n.j=e.F.concat(n.j)),e=Xu(n,t,1e3),t.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),ro(n.i,t),fs(t,r,e)}function Jn(n,e){n.na&&zs(n.na,function(t,r){x(e,r,t)}),n.h&&Vu({},function(t,r){x(e,r,t)})}function Xu(n,e,t){t=Math.min(n.j.length,t);var r=n.h?re(n.h.Va,n.h,n):null;e:{var i=n.j;let s=-1;for(;;){const o=["count="+t];s==-1?0<t?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<t;c++){let u=i[c].g;const l=i[c].map;if(u-=s,0>u)s=Math.max(0,i[c].g-100),a=!1;else try{_g(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return n=n.j.splice(0,t),e.F=n,r}function Ju(n){if(!n.g&&!n.u){n.ba=1;var e=n.Ma;Rn||Eu(),Pn||(Rn(),Pn=!0),Xs.add(e,n),n.A=0}}function ao(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=Wn(re(n.Ma,n),tl(n,n.A)),n.A++,!0)}g.Ma=function(){if(this.u=null,Zu(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=Wn(re(this.jb,this),n)}};g.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ce(10),pi(this),Zu(this))};function co(n){n.B!=null&&(R.clearTimeout(n.B),n.B=null)}function Zu(n){n.g=new Kn(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var e=Ue(n.wa);x(e,"RID","rpc"),x(e,"SID",n.K),x(e,"AID",n.V),x(e,"CI",n.G?"0":"1"),!n.G&&n.qa&&x(e,"TO",n.qa),x(e,"TYPE","xmlhttp"),Jn(n,e),n.o&&n.s&&so(e,n.o,n.s),n.L&&n.g.setTimeout(n.L);var t=n.g;n=n.pa,t.L=1,t.v=hi(Ue(e)),t.s=null,t.S=!0,bu(t,n)}g.ib=function(){this.v!=null&&(this.v=null,pi(this),ao(this),ce(19))};function Fr(n){n.v!=null&&(R.clearTimeout(n.v),n.v=null)}function el(n,e){var t=null;if(n.g==e){Fr(n),co(n),n.g=null;var r=2}else if(ms(n.i,e))t=e.F,qu(n.i,e),r=1;else return;if(n.H!=0){if(e.i)if(r==1){t=e.s?e.s.length:0,e=Date.now()-e.G;var i=n.C;r=ai(),J(r,new Ru(r,t)),mi(n)}else Ju(n);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&Ag(n,e)||r==2&&ao(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),i){case 1:lt(n,5);break;case 4:lt(n,10);break;case 3:lt(n,6);break;default:lt(n,2)}}}function tl(n,e){let t=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(t*=2),t*e}function lt(n,e){if(n.l.info("Error code "+e),e==2){var t=null;n.h&&(t=null);var r=re(n.pb,n);t||(t=new ft("//www.google.com/images/cleardot.gif"),R.location&&R.location.protocol=="http"||Lr(t,"https"),hi(t)),yg(t.toString(),r)}else ce(2);n.H=0,n.h&&n.h.za(e),nl(n),Yu(n)}g.pb=function(n){n?(this.l.info("Successfully pinged google.com"),ce(2)):(this.l.info("Failed to ping google.com"),ce(1))};function nl(n){if(n.H=0,n.ma=[],n.h){const e=ju(n.i);(e.length!=0||n.j.length!=0)&&(_a(n.ma,e),_a(n.ma,n.j),n.i.i.length=0,$s(n.j),n.j.length=0),n.h.ya()}}function rl(n,e,t){var r=t instanceof ft?Ue(t):new ft(t);if(r.g!="")e&&(r.g=e+"."+r.g),xr(r,r.m);else{var i=R.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new ft(null);r&&Lr(s,r),e&&(s.g=e),i&&xr(s,i),t&&(s.l=t),r=s}return t=n.F,e=n.Da,t&&e&&x(r,t,e),x(r,"VER",n.ra),Jn(n,r),r}function il(n,e,t){if(e&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ha&&!n.va?new q(new Yn({ob:!0})):new q(n.va),e.Oa(n.J),e}g.isActive=function(){return!!this.h&&this.h.isActive(this)};function sl(){}g=sl.prototype;g.Ba=function(){};g.Aa=function(){};g.za=function(){};g.ya=function(){};g.isActive=function(){return!0};g.Va=function(){};function Ur(){if(Ut&&!(10<=Number(xm)))throw Error("Environmental error: no available transport.")}Ur.prototype.g=function(n,e){return new de(n,e)};function de(n,e){G.call(this),this.g=new Qu(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(n?n["X-WebChannel-Client-Profile"]=e.Ca:n={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=n,(n=e&&e.cc)&&!wn(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!wn(e)&&(this.g.F=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Yt(this)}K(de,G);de.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,e=this.l,t=this.h||void 0;ce(0),n.Y=e,n.na=t||{},n.G=n.aa,n.I=rl(n,null,n.Y),mi(n)};de.prototype.close=function(){oo(this.g)};de.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=Ys(n),n=t);e.j.push(new fg(e.fb++,n)),e.H==3&&mi(e)};de.prototype.N=function(){this.g.h=null,delete this.j,oo(this.g),delete this.g,de.$.N.call(this)};function ol(n){to.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}K(ol,to);function al(){no.call(this),this.status=1}K(al,no);function Yt(n){this.g=n}K(Yt,sl);Yt.prototype.Ba=function(){J(this.g,"a")};Yt.prototype.Aa=function(n){J(this.g,new ol(n))};Yt.prototype.za=function(n){J(this.g,new al)};Yt.prototype.ya=function(){J(this.g,"b")};function Rg(){this.blockSize=-1}function ye(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}K(ye,Rg);ye.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Hi(n,e,t){t||(t=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(t++)|e.charCodeAt(t++)<<8|e.charCodeAt(t++)<<16|e.charCodeAt(t++)<<24;else for(i=0;16>i;++i)r[i]=e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24;e=n.g[0],t=n.g[1],i=n.g[2];var s=n.g[3],o=e+(s^t&(i^s))+r[0]+3614090360&4294967295;e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[3]+3250441966&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[4]+4118548399&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[7]+4249261313&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[8]+1770035416&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[11]+2304563134&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[12]+1804603682&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[15]+1236535329&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(t^i))+r[1]+4129170786&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[0]+3921069994&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[5]+3593408605&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[4]+3889429448&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[9]+568446438&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[8]+1163531501&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[13]+2850285829&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[12]+2368359562&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(t^i^s)+r[5]+4294588738&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[14]+4259657740&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[1]+2763975236&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[10]+3200236656&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[13]+681279174&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[6]+76029189&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[9]+3654602809&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[2]+3299628645&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(i^(t|~s))+r[0]+4096336452&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[5]+4237533241&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[12]+1700485571&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[1]+2240044497&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[8]+1873313359&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[13]+1309151649&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[4]+4149444226&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+e&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+s&4294967295}ye.prototype.j=function(n,e){e===void 0&&(e=n.length);for(var t=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=t;)Hi(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<e;)if(r[i++]=n.charCodeAt(s++),i==this.blockSize){Hi(this,r),i=0;break}}else for(;s<e;)if(r[i++]=n[s++],i==this.blockSize){Hi(this,r),i=0;break}}this.h=i,this.i+=e};ye.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var e=1;e<n.length-8;++e)n[e]=0;var t=8*this.i;for(e=n.length-8;e<n.length;++e)n[e]=t&255,t/=256;for(this.j(n),n=Array(16),e=t=0;4>e;++e)for(var r=0;32>r;r+=8)n[t++]=this.g[e]>>>r&255;return n};function O(n,e){this.h=e;for(var t=[],r=!0,i=n.length-1;0<=i;i--){var s=n[i]|0;r&&s==e||(t[i]=s,r=!1)}this.g=t}var Pg={};function uo(n){return-128<=n&&128>n?Om(n,function(e){return new O([e|0],0>e?-1:0)}):new O([n|0],0>n?-1:0)}function Te(n){if(isNaN(n)||!isFinite(n))return Mt;if(0>n)return Y(Te(-n));for(var e=[],t=1,r=0;n>=t;r++)e[r]=n/t|0,t*=gs;return new O(e,0)}function cl(n,e){if(n.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(n.charAt(0)=="-")return Y(cl(n.substring(1),e));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=Te(Math.pow(e,8)),r=Mt,i=0;i<n.length;i+=8){var s=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+s),e);8>s?(s=Te(Math.pow(e,s)),r=r.R(s).add(Te(o))):(r=r.R(t),r=r.add(Te(o)))}return r}var gs=4294967296,Mt=uo(0),_s=uo(1),Ca=uo(16777216);g=O.prototype;g.ea=function(){if(fe(this))return-Y(this).ea();for(var n=0,e=1,t=0;t<this.g.length;t++){var r=this.D(t);n+=(0<=r?r:gs+r)*e,e*=gs}return n};g.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(Le(this))return"0";if(fe(this))return"-"+Y(this).toString(n);for(var e=Te(Math.pow(n,6)),t=this,r="";;){var i=qr(t,e).g;t=Br(t,i.R(e));var s=((0<t.g.length?t.g[0]:t.h)>>>0).toString(n);if(t=i,Le(t))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};g.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function Le(n){if(n.h!=0)return!1;for(var e=0;e<n.g.length;e++)if(n.g[e]!=0)return!1;return!0}function fe(n){return n.h==-1}g.X=function(n){return n=Br(this,n),fe(n)?-1:Le(n)?0:1};function Y(n){for(var e=n.g.length,t=[],r=0;r<e;r++)t[r]=~n.g[r];return new O(t,~n.h).add(_s)}g.abs=function(){return fe(this)?Y(this):this};g.add=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(n.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,t[i]=o<<16|s}return new O(t,t[t.length-1]&-2147483648?-1:0)};function Br(n,e){return n.add(Y(e))}g.R=function(n){if(Le(this)||Le(n))return Mt;if(fe(this))return fe(n)?Y(this).R(Y(n)):Y(Y(this).R(n));if(fe(n))return Y(this.R(Y(n)));if(0>this.X(Ca)&&0>n.X(Ca))return Te(this.ea()*n.ea());for(var e=this.g.length+n.g.length,t=[],r=0;r<2*e;r++)t[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<n.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(i)>>>16,c=n.D(i)&65535;t[2*r+2*i]+=o*c,fr(t,2*r+2*i),t[2*r+2*i+1]+=s*c,fr(t,2*r+2*i+1),t[2*r+2*i+1]+=o*a,fr(t,2*r+2*i+1),t[2*r+2*i+2]+=s*a,fr(t,2*r+2*i+2)}for(r=0;r<e;r++)t[r]=t[2*r+1]<<16|t[2*r];for(r=e;r<2*e;r++)t[r]=0;return new O(t,0)};function fr(n,e){for(;(n[e]&65535)!=n[e];)n[e+1]+=n[e]>>>16,n[e]&=65535,e++}function rn(n,e){this.g=n,this.h=e}function qr(n,e){if(Le(e))throw Error("division by zero");if(Le(n))return new rn(Mt,Mt);if(fe(n))return e=qr(Y(n),e),new rn(Y(e.g),Y(e.h));if(fe(e))return e=qr(n,Y(e)),new rn(Y(e.g),e.h);if(30<n.g.length){if(fe(n)||fe(e))throw Error("slowDivide_ only works with positive integers.");for(var t=_s,r=e;0>=r.X(n);)t=ba(t),r=ba(r);var i=St(t,1),s=St(r,1);for(r=St(r,2),t=St(t,2);!Le(r);){var o=s.add(r);0>=o.X(n)&&(i=i.add(t),s=o),r=St(r,1),t=St(t,1)}return e=Br(n,i.R(e)),new rn(i,e)}for(i=Mt;0<=n.X(e);){for(t=Math.max(1,Math.floor(n.ea()/e.ea())),r=Math.ceil(Math.log(t)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Te(t),o=s.R(e);fe(o)||0<o.X(n);)t-=r,s=Te(t),o=s.R(e);Le(s)&&(s=_s),i=i.add(s),n=Br(n,o)}return new rn(i,n)}g.gb=function(n){return qr(this,n).h};g.and=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)&n.D(r);return new O(t,this.h&n.h)};g.or=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)|n.D(r);return new O(t,this.h|n.h)};g.xor=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)^n.D(r);return new O(t,this.h^n.h)};function ba(n){for(var e=n.g.length+1,t=[],r=0;r<e;r++)t[r]=n.D(r)<<1|n.D(r-1)>>>31;return new O(t,n.h)}function St(n,e){var t=e>>5;e%=32;for(var r=n.g.length-t,i=[],s=0;s<r;s++)i[s]=0<e?n.D(s+t)>>>e|n.D(s+t+1)<<32-e:n.D(s+t);return new O(i,n.h)}Ur.prototype.createWebChannel=Ur.prototype.g;de.prototype.send=de.prototype.u;de.prototype.open=de.prototype.m;de.prototype.close=de.prototype.close;ci.NO_ERROR=0;ci.TIMEOUT=8;ci.HTTP_ERROR=6;Pu.COMPLETE="complete";Su.EventType=Gn;Gn.OPEN="a";Gn.CLOSE="b";Gn.ERROR="c";Gn.MESSAGE="d";G.prototype.listen=G.prototype.O;q.prototype.listenOnce=q.prototype.P;q.prototype.getLastError=q.prototype.Sa;q.prototype.getLastErrorCode=q.prototype.Ia;q.prototype.getStatus=q.prototype.da;q.prototype.getResponseJson=q.prototype.Wa;q.prototype.getResponseText=q.prototype.ja;q.prototype.send=q.prototype.ha;q.prototype.setWithCredentials=q.prototype.Oa;ye.prototype.digest=ye.prototype.l;ye.prototype.reset=ye.prototype.reset;ye.prototype.update=ye.prototype.j;O.prototype.add=O.prototype.add;O.prototype.multiply=O.prototype.R;O.prototype.modulo=O.prototype.gb;O.prototype.compare=O.prototype.X;O.prototype.toNumber=O.prototype.ea;O.prototype.toString=O.prototype.toString;O.prototype.getBits=O.prototype.D;O.fromNumber=Te;O.fromString=cl;var Sg=function(){return new Ur},Cg=function(){return ai()},zi=ci,bg=Pu,kg=wt,ka={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Dg=Yn,pr=Su,Ng=q,Vg=ye,Lt=O;const Da="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}te.UNAUTHENTICATED=new te(null),te.GOOGLE_CREDENTIALS=new te("google-credentials-uid"),te.FIRST_PARTY=new te("first-party-uid"),te.MOCK_USER=new te("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xt="10.5.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt=new ks("@firebase/firestore");function sn(){return yt.logLevel}function E(n,...e){if(yt.logLevel<=b.DEBUG){const t=e.map(lo);yt.debug(`Firestore (${Xt}): ${n}`,...t)}}function Be(n,...e){if(yt.logLevel<=b.ERROR){const t=e.map(lo);yt.error(`Firestore (${Xt}): ${n}`,...t)}}function Bt(n,...e){if(yt.logLevel<=b.WARN){const t=e.map(lo);yt.warn(`Firestore (${Xt}): ${n}`,...t)}}function lo(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(n="Unexpected state"){const e=`FIRESTORE (${Xt}) INTERNAL ASSERTION FAILED: `+n;throw Be(e),new Error(e)}function F(n,e){n||A()}function S(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _ extends De{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Og{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(te.UNAUTHENTICATED))}shutdown(){}}class Mg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Lg{constructor(e){this.t=e,this.currentUser=te.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let s=new xe;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new xe,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{E("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(E("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new xe)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(E("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(F(typeof r.accessToken=="string"),new ul(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return F(e===null||typeof e=="string"),new te(e)}}class xg{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=te.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Fg{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new xg(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(te.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ug{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Bg{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const r=s=>{s.error!=null&&E("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,E("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{E("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):E("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(F(typeof t.token=="string"),this.R=t.token,new Ug(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=qg(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function N(n,e){return n<e?-1:n>e?1:0}function qt(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new _(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new _(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new _(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new _(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return z.fromMillis(Date.now())}static fromDate(e){return z.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new z(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?N(this.nanoseconds,e.nanoseconds):N(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.timestamp=e}static fromTimestamp(e){return new P(e)}static min(){return new P(new z(0,0))}static max(){return new P(new z(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,t,r){t===void 0?t=0:t>e.length&&A(),r===void 0?r=e.length-t:r>e.length-t&&A(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Dn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Dn?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class L extends Dn{construct(e,t,r){return new L(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new _(f.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new L(t)}static emptyPath(){return new L([])}}const jg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class X extends Dn{construct(e,t,r){return new X(e,t,r)}static isValidIdentifier(e){return jg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),X.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new X(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new _(f.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new _(f.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new _(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new _(f.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new X(t)}static emptyPath(){return new X([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e){this.path=e}static fromPath(e){return new T(L.fromString(e))}static fromName(e){return new T(L.fromString(e).popFirst(5))}static empty(){return new T(L.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&L.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return L.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new T(new L(e.slice()))}}function $g(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=P.fromTimestamp(r===1e9?new z(t+1,0):new z(t,r));return new Je(i,T.empty(),e)}function Hg(n){return new Je(n.readTime,n.key,-1)}class Je{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Je(P.min(),T.empty(),-1)}static max(){return new Je(P.max(),T.empty(),-1)}}function zg(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=T.comparator(n.documentKey,e.documentKey),t!==0?t:N(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Gg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zn(n){if(n.code!==f.FAILED_PRECONDITION||n.message!==Wg)throw n;E("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&A(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new m((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof m?t:m.resolve(t)}catch(t){return m.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):m.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):m.reject(t)}static resolve(e){return new m((t,r)=>{t(e)})}static reject(e){return new m((t,r)=>{r(e)})}static waitFor(e){return new m((t,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&t()},c=>r(c))}),o=!0,s===i&&t()})}static or(e){let t=m.resolve(!1);for(const r of e)t=t.next(i=>i?m.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new m((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;t(e[u]).next(l=>{o[u]=l,++a,a===s&&r(o)},l=>i(l))}})}static doWhile(e,t){return new m((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function er(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.se(r),this.oe=r=>t.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}ho._e=-1;function gi(n){return n==null}function jr(n){return n===0&&1/n==-1/0}function Kg(n){return typeof n=="number"&&Number.isInteger(n)&&!jr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Na(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Jt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function hl(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e,t){this.comparator=e,this.root=t||Q.EMPTY}insert(e,t){return new B(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Q.BLACK,null,null))}remove(e){return new B(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Q.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new mr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new mr(this.root,e,this.comparator,!1)}getReverseIterator(){return new mr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new mr(this.root,e,this.comparator,!0)}}class mr{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Q{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??Q.RED,this.left=i??Q.EMPTY,this.right=s??Q.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new Q(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Q.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Q.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Q.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Q.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw A();const e=this.left.check();if(e!==this.right.check())throw A();return e+(this.isRed()?0:1)}}Q.EMPTY=null,Q.RED=!0,Q.BLACK=!1;Q.EMPTY=new class{constructor(){this.size=0}get key(){throw A()}get value(){throw A()}get color(){throw A()}get left(){throw A()}get right(){throw A()}copy(e,t,r,i,s){return this}insert(e,t,r){return new Q(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.comparator=e,this.data=new B(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Va(this.data.getIterator())}getIteratorFrom(e){return new Va(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Z)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Z(this.comparator);return t.data=e,t}}class Va{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.fields=e,e.sort(X.comparator)}static empty(){return new me([])}unionWith(e){let t=new Z(X.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new me(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return qt(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new dl("Invalid base64 string: "+s):s}}(e);return new ae(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new ae(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return N(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ae.EMPTY_BYTE_STRING=new ae("");const Qg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ze(n){if(F(!!n),typeof n=="string"){let e=0;const t=Qg.exec(n);if(F(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:$(n.seconds),nanos:$(n.nanos)}}function $(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Et(n){return typeof n=="string"?ae.fromBase64String(n):ae.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function fo(n){const e=n.mapValue.fields.__previous_value__;return _i(e)?fo(e):e}function Nn(n){const e=Ze(n.mapValue.fields.__local_write_time__.timestampValue);return new z(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e,t,r,i,s,o,a,c,u){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class Vn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Vn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Vn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function vt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?_i(n)?4:Xg(n)?9007199254740991:10:A()}function be(n,e){if(n===e)return!0;const t=vt(n);if(t!==vt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Nn(n).isEqual(Nn(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Ze(i.timestampValue),a=Ze(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Et(i.bytesValue).isEqual(Et(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return $(i.geoPointValue.latitude)===$(s.geoPointValue.latitude)&&$(i.geoPointValue.longitude)===$(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return $(i.integerValue)===$(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=$(i.doubleValue),a=$(s.doubleValue);return o===a?jr(o)===jr(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return qt(n.arrayValue.values||[],e.arrayValue.values||[],be);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Na(o)!==Na(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!be(o[c],a[c])))return!1;return!0}(n,e);default:return A()}}function On(n,e){return(n.values||[]).find(t=>be(t,e))!==void 0}function jt(n,e){if(n===e)return 0;const t=vt(n),r=vt(e);if(t!==r)return N(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return N(n.booleanValue,e.booleanValue);case 2:return function(s,o){const a=$(s.integerValue||s.doubleValue),c=$(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,e);case 3:return Oa(n.timestampValue,e.timestampValue);case 4:return Oa(Nn(n),Nn(e));case 5:return N(n.stringValue,e.stringValue);case 6:return function(s,o){const a=Et(s),c=Et(o);return a.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const l=N(a[u],c[u]);if(l!==0)return l}return N(a.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const a=N($(s.latitude),$(o.latitude));return a!==0?a:N($(s.longitude),$(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],c=o.values||[];for(let u=0;u<a.length&&u<c.length;++u){const l=jt(a[u],c[u]);if(l)return l}return N(a.length,c.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===gr.mapValue&&o===gr.mapValue)return 0;if(s===gr.mapValue)return 1;if(o===gr.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),u=o.fields||{},l=Object.keys(u);c.sort(),l.sort();for(let h=0;h<c.length&&h<l.length;++h){const d=N(c[h],l[h]);if(d!==0)return d;const p=jt(a[c[h]],u[l[h]]);if(p!==0)return p}return N(c.length,l.length)}(n.mapValue,e.mapValue);default:throw A()}}function Oa(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return N(n,e);const t=Ze(n),r=Ze(e),i=N(t.seconds,r.seconds);return i!==0?i:N(t.nanos,r.nanos)}function $t(n){return ys(n)}function ys(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Ze(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Et(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return T.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=ys(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${ys(t.fields[o])}`;return i+"}"}(n.mapValue):A()}function $r(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Es(n){return!!n&&"integerValue"in n}function po(n){return!!n&&"arrayValue"in n}function Ma(n){return!!n&&"nullValue"in n}function La(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function wr(n){return!!n&&"mapValue"in n}function gn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Jt(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=gn(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=gn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Xg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.value=e}static empty(){return new pe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!wr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=gn(t)}setAll(e){let t=X.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=gn(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());wr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return be(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];wr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Jt(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new pe(gn(this.value))}}function fl(n){const e=[];return Jt(n.fields,(t,r)=>{const i=new X([t]);if(wr(r)){const s=fl(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new me(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ne(e,0,P.min(),P.min(),P.min(),pe.empty(),0)}static newFoundDocument(e,t,r,i){return new ne(e,1,t,P.min(),r,i,0)}static newNoDocument(e,t){return new ne(e,2,t,P.min(),P.min(),pe.empty(),0)}static newUnknownDocument(e,t){return new ne(e,3,t,P.min(),P.min(),pe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(P.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=pe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=pe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=P.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ne&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ne(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e,t){this.position=e,this.inclusive=t}}function xa(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=T.comparator(T.fromName(o.referenceValue),t.key):r=jt(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Fa(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!be(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,t="asc"){this.field=e,this.dir=t}}function Jg(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{}class H extends pl{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new e_(e,t,r):t==="array-contains"?new r_(e,r):t==="in"?new i_(e,r):t==="not-in"?new s_(e,r):t==="array-contains-any"?new o_(e,r):new H(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new t_(e,r):new n_(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(jt(t,this.value)):t!==null&&vt(this.value)===vt(t)&&this.matchesComparison(jt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return A()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ee extends pl{constructor(e,t){super(),this.filters=e,this.op=t,this.ue=null}static create(e,t){return new Ee(e,t)}matches(e){return ml(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function ml(n){return n.op==="and"}function gl(n){return Zg(n)&&ml(n)}function Zg(n){for(const e of n.filters)if(e instanceof Ee)return!1;return!0}function vs(n){if(n instanceof H)return n.field.canonicalString()+n.op.toString()+$t(n.value);if(gl(n))return n.filters.map(e=>vs(e)).join(",");{const e=n.filters.map(t=>vs(t)).join(",");return`${n.op}(${e})`}}function _l(n,e){return n instanceof H?function(r,i){return i instanceof H&&r.op===i.op&&r.field.isEqual(i.field)&&be(r.value,i.value)}(n,e):n instanceof Ee?function(r,i){return i instanceof Ee&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&_l(o,i.filters[a]),!0):!1}(n,e):void A()}function yl(n){return n instanceof H?function(t){return`${t.field.canonicalString()} ${t.op} ${$t(t.value)}`}(n):n instanceof Ee?function(t){return t.op.toString()+" {"+t.getFilters().map(yl).join(" ,")+"}"}(n):"Filter"}class e_ extends H{constructor(e,t,r){super(e,t,r),this.key=T.fromName(r.referenceValue)}matches(e){const t=T.comparator(e.key,this.key);return this.matchesComparison(t)}}class t_ extends H{constructor(e,t){super(e,"in",t),this.keys=El("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class n_ extends H{constructor(e,t){super(e,"not-in",t),this.keys=El("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function El(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>T.fromName(r.referenceValue))}class r_ extends H{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return po(t)&&On(t.arrayValue,this.value)}}class i_ extends H{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&On(this.value.arrayValue,t)}}class s_ extends H{constructor(e,t){super(e,"not-in",t)}matches(e){if(On(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!On(this.value.arrayValue,t)}}class o_ extends H{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!po(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>On(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function Ua(n,e=null,t=[],r=[],i=null,s=null,o=null){return new a_(n,e,t,r,i,s,o)}function mo(n){const e=S(n);if(e.ce===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>vs(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),gi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>$t(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>$t(r)).join(",")),e.ce=t}return e.ce}function go(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Jg(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!_l(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Fa(n.startAt,e.startAt)&&Fa(n.endAt,e.endAt)}function Is(n){return T.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function c_(n,e,t,r,i,s,o,a){return new ot(n,e,t,r,i,s,o,a)}function _o(n){return new ot(n)}function Ba(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function yo(n){return n.collectionGroup!==null}function xt(n){const e=S(n);if(e.le===null){e.le=[];const t=new Set;for(const s of e.explicitOrderBy)e.le.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Z(X.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.le.push(new Mn(s,r))}),t.has(X.keyField().canonicalString())||e.le.push(new Mn(X.keyField(),r))}return e.le}function Pe(n){const e=S(n);return e.he||(e.he=u_(e,xt(n))),e.he}function u_(n,e){if(n.limitType==="F")return Ua(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Mn(i.field,s)});const t=n.endAt?new Ht(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ht(n.startAt.position,n.startAt.inclusive):null;return Ua(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ts(n,e){const t=n.filters.concat([e]);return new ot(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Hr(n,e,t){return new ot(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function yi(n,e){return go(Pe(n),Pe(e))&&n.limitType===e.limitType}function vl(n){return`${mo(Pe(n))}|lt:${n.limitType}`}function Ct(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>yl(i)).join(", ")}]`),gi(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>$t(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>$t(i)).join(",")),`Target(${r})`}(Pe(n))}; limitType=${n.limitType})`}function Ei(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):T.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of xt(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,a,c){const u=xa(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,xt(r),i)||r.endAt&&!function(o,a,c){const u=xa(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,xt(r),i))}(n,e)}function l_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Il(n){return(e,t)=>{let r=!1;for(const i of xt(n)){const s=h_(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function h_(n,e,t){const r=n.field.isKeyField()?T.comparator(e.key,t.key):function(s,o,a){const c=o.data.field(s),u=a.data.field(s);return c!==null&&u!==null?jt(c,u):A()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return A()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Jt(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return hl(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_=new B(T.comparator);function qe(){return d_}const Tl=new B(T.comparator);function ln(...n){let e=Tl;for(const t of n)e=e.insert(t.key,t);return e}function wl(n){let e=Tl;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function ht(){return _n()}function Al(){return _n()}function _n(){return new Zt(n=>n.toString(),(n,e)=>n.isEqual(e))}const f_=new B(T.comparator),p_=new Z(T.comparator);function C(...n){let e=p_;for(const t of n)e=e.add(t);return e}const m_=new Z(N);function g_(){return m_}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:jr(e)?"-0":e}}function Pl(n){return{integerValue:""+n}}function __(n,e){return Kg(e)?Pl(e):Rl(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this._=void 0}}function y_(n,e,t){return n instanceof zr?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&_i(s)&&(s=fo(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(t,e):n instanceof Ln?Cl(n,e):n instanceof xn?bl(n,e):function(i,s){const o=Sl(i,s),a=qa(o)+qa(i.Ie);return Es(o)&&Es(i.Ie)?Pl(a):Rl(i.serializer,a)}(n,e)}function E_(n,e,t){return n instanceof Ln?Cl(n,e):n instanceof xn?bl(n,e):t}function Sl(n,e){return n instanceof Wr?function(r){return Es(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class zr extends vi{}class Ln extends vi{constructor(e){super(),this.elements=e}}function Cl(n,e){const t=kl(e);for(const r of n.elements)t.some(i=>be(i,r))||t.push(r);return{arrayValue:{values:t}}}class xn extends vi{constructor(e){super(),this.elements=e}}function bl(n,e){let t=kl(e);for(const r of n.elements)t=t.filter(i=>!be(i,r));return{arrayValue:{values:t}}}class Wr extends vi{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function qa(n){return $(n.integerValue||n.doubleValue)}function kl(n){return po(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function v_(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Ln&&i instanceof Ln||r instanceof xn&&i instanceof xn?qt(r.elements,i.elements,be):r instanceof Wr&&i instanceof Wr?be(r.Ie,i.Ie):r instanceof zr&&i instanceof zr}(n.transform,e.transform)}class I_{constructor(e,t){this.version=e,this.transformResults=t}}class Se{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Se}static exists(e){return new Se(void 0,e)}static updateTime(e){return new Se(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ar(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ii{}function Dl(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Vl(n.key,Se.none()):new tr(n.key,n.data,Se.none());{const t=n.data,r=pe.empty();let i=new Z(X.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new At(n.key,r,new me(i.toArray()),Se.none())}}function T_(n,e,t){n instanceof tr?function(i,s,o){const a=i.value.clone(),c=$a(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof At?function(i,s,o){if(!Ar(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=$a(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(Nl(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function yn(n,e,t,r){return n instanceof tr?function(s,o,a,c){if(!Ar(s.precondition,o))return a;const u=s.value.clone(),l=Ha(s.fieldTransforms,c,o);return u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,e,t,r):n instanceof At?function(s,o,a,c){if(!Ar(s.precondition,o))return a;const u=Ha(s.fieldTransforms,c,o),l=o.data;return l.setAll(Nl(s)),l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(n,e,t,r):function(s,o,a){return Ar(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function w_(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=Sl(r.transform,i||null);s!=null&&(t===null&&(t=pe.empty()),t.set(r.field,s))}return t||null}function ja(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&qt(r,i,(s,o)=>v_(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class tr extends Ii{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class At extends Ii{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Nl(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function $a(n,e,t){const r=new Map;F(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,E_(o,a,t[i]))}return r}function Ha(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,y_(s,o,e))}return r}class Vl extends Ii{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class A_ extends Ii{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&T_(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=yn(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=yn(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Al();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(i.key)?null:a;const c=Dl(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(P.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),C())}isEqual(e){return this.batchId===e.batchId&&qt(this.mutations,e.mutations,(t,r)=>ja(t,r))&&qt(this.baseMutations,e.baseMutations,(t,r)=>ja(t,r))}}class Eo{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){F(e.mutations.length===r.length);let i=function(){return f_}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Eo(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var j,k;function C_(n){switch(n){default:return A();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}function Ol(n){if(n===void 0)return Be("GRPC error has no .code"),f.UNKNOWN;switch(n){case j.OK:return f.OK;case j.CANCELLED:return f.CANCELLED;case j.UNKNOWN:return f.UNKNOWN;case j.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case j.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case j.INTERNAL:return f.INTERNAL;case j.UNAVAILABLE:return f.UNAVAILABLE;case j.UNAUTHENTICATED:return f.UNAUTHENTICATED;case j.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case j.NOT_FOUND:return f.NOT_FOUND;case j.ALREADY_EXISTS:return f.ALREADY_EXISTS;case j.PERMISSION_DENIED:return f.PERMISSION_DENIED;case j.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case j.ABORTED:return f.ABORTED;case j.OUT_OF_RANGE:return f.OUT_OF_RANGE;case j.UNIMPLEMENTED:return f.UNIMPLEMENTED;case j.DATA_LOSS:return f.DATA_LOSS;default:return A()}}(k=j||(j={}))[k.OK=0]="OK",k[k.CANCELLED=1]="CANCELLED",k[k.UNKNOWN=2]="UNKNOWN",k[k.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",k[k.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",k[k.NOT_FOUND=5]="NOT_FOUND",k[k.ALREADY_EXISTS=6]="ALREADY_EXISTS",k[k.PERMISSION_DENIED=7]="PERMISSION_DENIED",k[k.UNAUTHENTICATED=16]="UNAUTHENTICATED",k[k.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",k[k.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",k[k.ABORTED=10]="ABORTED",k[k.OUT_OF_RANGE=11]="OUT_OF_RANGE",k[k.UNIMPLEMENTED=12]="UNIMPLEMENTED",k[k.INTERNAL=13]="INTERNAL",k[k.UNAVAILABLE=14]="UNAVAILABLE",k[k.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b_(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_=new Lt([4294967295,4294967295],0);function za(n){const e=b_().encode(n),t=new Vg;return t.update(e),new Uint8Array(t.digest())}function Wa(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Lt([t,r],0),new Lt([i,s],0)]}class vo{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new hn(`Invalid padding: ${t}`);if(r<0)throw new hn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new hn(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new hn(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ee=Lt.fromNumber(this.Te)}de(e,t,r){let i=e.add(t.multiply(Lt.fromNumber(r)));return i.compare(k_)===1&&(i=new Lt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=za(e),[r,i]=Wa(t);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new vo(s,i,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const t=za(e),[r,i]=Wa(t);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class hn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,nr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ti(P.min(),i,new B(N),qe(),C())}}class nr{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new nr(r,t,C(),C(),C())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,t,r,i){this.Ve=e,this.removedTargetIds=t,this.key=r,this.me=i}}class Ml{constructor(e,t){this.targetId=e,this.fe=t}}class Ll{constructor(e,t,r=ae.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Ga{constructor(){this.ge=0,this.pe=Qa(),this.ye=ae.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=C(),t=C(),r=C();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:A()}}),new nr(this.ye,this.we,e,t,r)}Fe(){this.Se=!1,this.pe=Qa()}Me(e,t){this.Se=!0,this.pe=this.pe.insert(e,t)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1}Be(){this.Se=!0,this.we=!0}}class D_{constructor(e){this.Le=e,this.ke=new Map,this.qe=qe(),this.Qe=Ka(),this.Ke=new B(N)}$e(e){for(const t of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(t,e.me):this.We(t,e.key,e.me);for(const t of e.removedTargetIds)this.We(t,e.key,e.me)}Ge(e){this.forEachTarget(e,t=>{const r=this.ze(t);switch(e.state){case 0:this.je(t)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(t);break;case 3:this.je(t)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),r.Ce(e.resumeToken));break;default:A()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ke.forEach((r,i)=>{this.je(i)&&t(i)})}Je(e){const t=e.targetId,r=e.fe.count,i=this.Ye(t);if(i){const s=i.target;if(Is(s))if(r===0){const o=new T(s.path);this.We(t,o,ne.newNoDocument(o,P.min()))}else F(r===1);else{const o=this.Ze(t);if(o!==r){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(t);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,u)}}}}}Xe(e){const t=e.fe.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let o,a;try{o=Et(r).toUint8Array()}catch(c){if(c instanceof dl)return Bt("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new vo(o,i,s)}catch(c){return Bt(c instanceof hn?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,t,r){return t.fe.count===r-this.rt(e,t.targetId)?0:2}rt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(t,s,null),i++)}),i}it(e){const t=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&Is(a.target)){const c=new T(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,ne.newNoDocument(c,e))}s.De&&(t.set(o,s.ve()),s.Fe())}});let r=C();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Ye(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));const i=new Ti(e,t,this.Ke,this.qe,r);return this.qe=qe(),this.Qe=Ka(),this.Ke=new B(N),i}Ue(e,t){if(!this.je(e))return;const r=this.st(e,t.key)?2:0;this.ze(e).Me(t.key,r),this.qe=this.qe.insert(t.key,t),this.Qe=this.Qe.insert(t.key,this.ot(t.key).add(e))}We(e,t,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,t)?i.Me(t,1):i.xe(t),this.Qe=this.Qe.insert(t,this.ot(t).delete(e)),r&&(this.qe=this.qe.insert(t,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let t=this.ke.get(e);return t||(t=new Ga,this.ke.set(e,t)),t}ot(e){let t=this.Qe.get(e);return t||(t=new Z(N),this.Qe=this.Qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||E("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.ke.get(e);return t&&t.be?null:this.Le._t(e)}He(e){this.ke.set(e,new Ga),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}st(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Ka(){return new B(T.comparator)}function Qa(){return new B(T.comparator)}const N_=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),V_=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),O_=(()=>({and:"AND",or:"OR"}))();class M_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ws(n,e){return n.useProto3Json||gi(e)?e:{value:e}}function Gr(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xl(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function L_(n,e){return Gr(n,e.toTimestamp())}function Ce(n){return F(!!n),P.fromTimestamp(function(t){const r=Ze(t);return new z(r.seconds,r.nanos)}(n))}function Io(n,e){return function(r){return new L(["projects",r.projectId,"databases",r.database])}(n).child("documents").child(e).canonicalString()}function Fl(n){const e=L.fromString(n);return F(jl(e)),e}function As(n,e){return Io(n.databaseId,e.path)}function Wi(n,e){const t=Fl(e);if(t.get(1)!==n.databaseId.projectId)throw new _(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new _(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new T(Ul(t))}function Rs(n,e){return Io(n.databaseId,e)}function x_(n){const e=Fl(n);return e.length===4?L.emptyPath():Ul(e)}function Ps(n){return new L(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ul(n){return F(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Ya(n,e,t){return{name:As(n,e),fields:t.value.mapValue.fields}}function F_(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:A()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,l){return u.useProto3Json?(F(l===void 0||typeof l=="string"),ae.fromBase64String(l||"")):(F(l===void 0||l instanceof Uint8Array),ae.fromUint8Array(l||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const l=u.code===void 0?f.UNKNOWN:Ol(u.code);return new _(l,u.message||"")}(o);t=new Ll(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Wi(n,r.document.name),s=Ce(r.document.updateTime),o=r.document.createTime?Ce(r.document.createTime):P.min(),a=new pe({mapValue:{fields:r.document.fields}}),c=ne.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];t=new Rr(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Wi(n,r.document),s=r.readTime?Ce(r.readTime):P.min(),o=ne.newNoDocument(i,s),a=r.removedTargetIds||[];t=new Rr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Wi(n,r.document),s=r.removedTargetIds||[];t=new Rr([],s,i,null)}else{if(!("filter"in e))return A();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new S_(i,s),a=r.targetId;t=new Ml(a,o)}}return t}function U_(n,e){let t;if(e instanceof tr)t={update:Ya(n,e.key,e.value)};else if(e instanceof Vl)t={delete:As(n,e.key)};else if(e instanceof At)t={update:Ya(n,e.key,e.data),updateMask:K_(e.fieldMask)};else{if(!(e instanceof A_))return A();t={verify:As(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof zr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ln)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof xn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Wr)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw A()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:L_(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:A()}(n,e.precondition)),t}function B_(n,e){return n&&n.length>0?(F(e!==void 0),n.map(t=>function(i,s){let o=i.updateTime?Ce(i.updateTime):Ce(s);return o.isEqual(P.min())&&(o=Ce(s)),new I_(o,i.transformResults||[])}(t,e))):[]}function q_(n,e){return{documents:[Rs(n,e.path)]}}function j_(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=Rs(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=Rs(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return ql(Ee.create(c,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(u=>function(h){return{field:bt(h.field),direction:z_(h.dir)}}(u))}(e.orderBy);s&&(t.structuredQuery.orderBy=s);const o=ws(n,e.limit);return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function $_(n){let e=x_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){F(r===1);const l=t.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let s=[];t.where&&(s=function(h){const d=Bl(h);return d instanceof Ee&&gl(d)?d.getFilters():[d]}(t.where));let o=[];t.orderBy&&(o=function(h){return h.map(d=>function(v){return new Mn(kt(v.field),function(y){switch(y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(d))}(t.orderBy));let a=null;t.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,gi(d)?null:d}(t.limit));let c=null;t.startAt&&(c=function(h){const d=!!h.before,p=h.values||[];return new Ht(p,d)}(t.startAt));let u=null;return t.endAt&&(u=function(h){const d=!h.before,p=h.values||[];return new Ht(p,d)}(t.endAt)),c_(e,i,o,s,a,"F",c,u)}function H_(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return A()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Bl(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=kt(t.unaryFilter.field);return H.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=kt(t.unaryFilter.field);return H.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=kt(t.unaryFilter.field);return H.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=kt(t.unaryFilter.field);return H.create(o,"!=",{nullValue:"NULL_VALUE"});default:return A()}}(n):n.fieldFilter!==void 0?function(t){return H.create(kt(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return A()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ee.create(t.compositeFilter.filters.map(r=>Bl(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return A()}}(t.compositeFilter.op))}(n):A()}function z_(n){return N_[n]}function W_(n){return V_[n]}function G_(n){return O_[n]}function bt(n){return{fieldPath:n.canonicalString()}}function kt(n){return X.fromServerFormat(n.fieldPath)}function ql(n){return n instanceof H?function(t){if(t.op==="=="){if(La(t.value))return{unaryFilter:{field:bt(t.field),op:"IS_NAN"}};if(Ma(t.value))return{unaryFilter:{field:bt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(La(t.value))return{unaryFilter:{field:bt(t.field),op:"IS_NOT_NAN"}};if(Ma(t.value))return{unaryFilter:{field:bt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:bt(t.field),op:W_(t.op),value:t.value}}}(n):n instanceof Ee?function(t){const r=t.getFilters().map(i=>ql(i));return r.length===1?r[0]:{compositeFilter:{op:G_(t.op),filters:r}}}(n):A()}function K_(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function jl(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,t,r,i,s=P.min(),o=P.min(),a=ae.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Ge(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ge(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ge(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ge(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(e){this.ut=e}}function Y_(n){const e=$_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Hr(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(){this.on=new J_}addToCollectionParentIndex(e,t){return this.on.add(t),m.resolve()}getCollectionParents(e,t){return m.resolve(this.on.getEntries(t))}addFieldIndex(e,t){return m.resolve()}deleteFieldIndex(e,t){return m.resolve()}deleteAllFieldIndexes(e){return m.resolve()}createTargetIndexes(e,t){return m.resolve()}getDocumentsMatchingTarget(e,t){return m.resolve(null)}getIndexType(e,t){return m.resolve(0)}getFieldIndexes(e,t){return m.resolve([])}getNextCollectionGroupToUpdate(e){return m.resolve(null)}getMinOffset(e,t){return m.resolve(Je.min())}getMinOffsetFromCollectionGroup(e,t){return m.resolve(Je.min())}updateCollectionGroup(e,t,r){return m.resolve()}updateIndexEntries(e,t){return m.resolve()}}class J_{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Z(L.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Z(L.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new zt(0)}static Nn(){return new zt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(){this.changes=new Zt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ne.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?m.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&yn(r.mutation,i,me.empty(),z.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,C()).next(()=>r))}getLocalViewOfDocuments(e,t,r=C()){const i=ht();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=ln();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=ht();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,C()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,i){let s=qe();const o=_n(),a=function(){return _n()}();return t.forEach((c,u)=>{const l=r.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof At)?s=s.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),yn(l.mutation,u,l.mutation.getFieldMask(),z.now())):o.set(u.key,me.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,l)=>o.set(u,l)),t.forEach((u,l)=>{var h;return a.set(u,new ey(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const r=_n();let i=new B((o,a)=>o-a),s=C();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let l=r.get(c)||me.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(i.get(a.batchId)||C()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=Al();l.forEach(d=>{if(!s.has(d)){const p=Dl(t.get(d),r.get(d));p!==null&&h.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return m.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(o){return T.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):yo(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):m.resolve(ht());let a=-1,c=s;return o.next(u=>m.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?m.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,C())).next(l=>({batchId:a,changes:wl(l)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new T(t)).next(r=>{let i=ln();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let o=ln();return this.indexManager.getCollectionParents(e,s).next(a=>m.forEach(a,c=>{const u=function(h,d){return new ot(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(t,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(l=>{l.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(o=>{s.forEach((c,u)=>{const l=u.getKey();o.get(l)===null&&(o=o.insert(l,ne.newInvalidDocument(l)))});let a=ln();return o.forEach((c,u)=>{const l=s.get(c);l!==void 0&&yn(l.mutation,u,me.empty(),z.now()),Ei(t,u)&&(a=a.insert(c,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,t){return m.resolve(this.ur.get(t))}saveBundleMetadata(e,t){return this.ur.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Ce(i.createTime)}}(t)),m.resolve()}getNamedQuery(e,t){return m.resolve(this.cr.get(t))}saveNamedQuery(e,t){return this.cr.set(t.name,function(i){return{name:i.name,query:Y_(i.bundledQuery),readTime:Ce(i.readTime)}}(t)),m.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(){this.overlays=new B(T.comparator),this.lr=new Map}getOverlay(e,t){return m.resolve(this.overlays.get(t))}getOverlays(e,t){const r=ht();return m.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.lt(e,t,s)}),m.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),m.resolve()}getOverlaysForCollection(e,t,r){const i=ht(),s=t.length+1,o=new T(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return m.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new B((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let l=s.get(u.largestBatchId);l===null&&(l=ht(),s=s.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=ht(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return m.resolve(a)}lt(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new P_(t,r));let s=this.lr.get(t);s===void 0&&(s=C(),this.lr.set(t,s)),this.lr.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(){this.hr=new Z(W.Pr),this.Ir=new Z(W.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,t){const r=new W(e,t);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.dr(new W(e,t))}Ar(e,t){e.forEach(r=>this.removeReference(r,t))}Rr(e){const t=new T(new L([])),r=new W(t,e),i=new W(t,e+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const t=new T(new L([])),r=new W(t,e),i=new W(t,e+1);let s=C();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new W(e,0),r=this.hr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class W{constructor(e,t){this.key=e,this.gr=t}static Pr(e,t){return T.comparator(e.key,t.key)||N(e.gr,t.gr)}static Tr(e,t){return N(e.gr,t.gr)||T.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.pr=1,this.yr=new Z(W.Pr)}checkEmpty(e){return m.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new R_(s,t,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new W(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return m.resolve(o)}lookupMutationBatch(e,t){return m.resolve(this.wr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Sr(r),s=i<0?0:i;return m.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return m.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return m.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new W(t,0),i=new W(t,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),m.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Z(N);return t.forEach(i=>{const s=new W(i,0),o=new W(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),m.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;T.isDocumentKey(s)||(s=s.child(""));const o=new W(new T(s),0);let a=new Z(N);return this.yr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.gr)),!0)},o),m.resolve(this.br(a))}br(e){const t=[];return e.forEach(r=>{const i=this.wr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){F(this.Dr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return m.forEach(t.mutations,i=>{const s=new W(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,t){const r=new W(t,0),i=this.yr.firstAfterOrEqual(r);return m.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,m.resolve()}Dr(e,t){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const t=this.Sr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e){this.Cr=e,this.docs=function(){return new B(T.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return m.resolve(r?r.document.mutableCopy():ne.newInvalidDocument(t))}getEntries(e,t){let r=qe();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ne.newInvalidDocument(i))}),m.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=qe();const o=t.path,a=new T(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||zg(Hg(l),r)<=0||(i.has(l.key)||Ei(t,l))&&(s=s.insert(l.key,l.mutableCopy()))}return m.resolve(s)}getAllFromCollectionGroup(e,t,r,i){A()}vr(e,t){return m.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new oy(this)}getSize(e){return m.resolve(this.size)}}class oy extends Z_{constructor(e){super(),this._r=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this._r.addEntry(e,i)):this._r.removeEntry(r)}),m.waitFor(t)}getFromCache(e,t){return this._r.getEntry(e,t)}getAllFromCache(e,t){return this._r.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(e){this.persistence=e,this.Fr=new Zt(t=>mo(t),go),this.lastRemoteSnapshotVersion=P.min(),this.highestTargetId=0,this.Mr=0,this.Or=new To,this.targetCount=0,this.Nr=zt.On()}forEachTarget(e,t){return this.Fr.forEach((r,i)=>t(i)),m.resolve()}getLastRemoteSnapshotVersion(e){return m.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return m.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),m.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Mr&&(this.Mr=t),m.resolve()}kn(e){this.Fr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Nr=new zt(t),this.highestTargetId=t),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,t){return this.kn(t),this.targetCount+=1,m.resolve()}updateTargetData(e,t){return this.kn(t),m.resolve()}removeTargetData(e,t){return this.Fr.delete(t.target),this.Or.Rr(t.targetId),this.targetCount-=1,m.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),m.waitFor(s).next(()=>i)}getTargetCount(e){return m.resolve(this.targetCount)}getTargetData(e,t){const r=this.Fr.get(t)||null;return m.resolve(r)}addMatchingKeys(e,t,r){return this.Or.Er(t,r),m.resolve()}removeMatchingKeys(e,t,r){this.Or.Ar(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),m.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Or.Rr(t),m.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Or.mr(t);return m.resolve(r)}containsKey(e,t){return m.resolve(this.Or.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(e,t){this.Br={},this.overlays={},this.Lr=new ho(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new ay(this),this.indexManager=new X_,this.remoteDocumentCache=function(i){return new sy(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new Q_(t),this.Kr=new ny(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ry,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Br[e.toKey()];return r||(r=new iy(t,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,t,r){E("MemoryPersistence","Starting transaction:",e);const i=new uy(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(e,t){return m.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,t)))}}class uy extends Gg{constructor(e){super(),this.currentSequenceNumber=e}}class wo{constructor(e){this.persistence=e,this.Gr=new To,this.zr=null}static jr(e){return new wo(e)}get Hr(){if(this.zr)return this.zr;throw A()}addReference(e,t,r){return this.Gr.addReference(r,t),this.Hr.delete(r.toString()),m.resolve()}removeReference(e,t,r){return this.Gr.removeReference(r,t),this.Hr.add(r.toString()),m.resolve()}markPotentiallyOrphaned(e,t){return this.Hr.add(t.toString()),m.resolve()}removeTarget(e,t){this.Gr.Rr(t.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}$r(){this.zr=new Set}Ur(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return m.forEach(this.Hr,r=>{const i=T.fromPath(r);return this.Jr(e,i).next(s=>{s||t.removeEntry(i,P.min())})}).next(()=>(this.zr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Jr(e,t).next(r=>{r?this.Hr.delete(t.toString()):this.Hr.add(t.toString())})}Qr(e){return 0}Jr(e,t){return m.or([()=>m.resolve(this.Gr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Wr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.ki=r,this.qi=i}static Qi(e,t){let r=C(),i=C();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ao(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,t){this.Gi=e,this.indexManager=t,this.Ki=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.zi(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ji(e,t,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new ly;return this.Hi(e,t,o).next(a=>{if(s.result=a,this.$i)return this.Ji(e,t,o,a.size)})}).next(()=>s.result)}Ji(e,t,r,i){return r.documentReadCount<this.Ui?(sn()<=b.DEBUG&&E("QueryEngine","SDK will not create cache indexes for query:",Ct(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),m.resolve()):(sn()<=b.DEBUG&&E("QueryEngine","Query:",Ct(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(sn()<=b.DEBUG&&E("QueryEngine","The SDK decides to create cache indexes for query:",Ct(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Pe(t))):m.resolve())}zi(e,t){if(Ba(t))return m.resolve(null);let r=Pe(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Hr(t,null,"F"),r=Pe(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=C(...s);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.Yi(t,a);return this.Zi(t,u,o,c.readTime)?this.zi(e,Hr(t,null,"F")):this.Xi(e,u,t,c)}))})))}ji(e,t,r,i){return Ba(t)||i.isEqual(P.min())?m.resolve(null):this.Gi.getDocuments(e,r).next(s=>{const o=this.Yi(t,s);return this.Zi(t,o,r,i)?m.resolve(null):(sn()<=b.DEBUG&&E("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ct(t)),this.Xi(e,o,t,$g(i,-1)).next(a=>a))})}Yi(e,t){let r=new Z(Il(e));return t.forEach((i,s)=>{Ei(e,s)&&(r=r.add(s))}),r}Zi(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Hi(e,t,r){return sn()<=b.DEBUG&&E("QueryEngine","Using full collection scan to execute query:",Ct(t)),this.Gi.getDocumentsMatchingQuery(e,t,Je.min(),r)}Xi(e,t,r,i){return this.Gi.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(e,t,r,i){this.persistence=e,this.es=t,this.serializer=i,this.ts=new B(N),this.ns=new Zt(s=>mo(s),go),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ty(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ts))}}function fy(n,e,t,r){return new dy(n,e,t,r)}async function $l(n,e){const t=S(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.os(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=C();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of s){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return t.localDocuments.getDocuments(r,c).next(u=>({_s:u,removedBatchIds:o,addedBatchIds:a}))})})}function py(n,e){const t=S(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.ss.newChangeBuffer({trackRemovals:!0});return function(a,c,u,l){const h=u.batch,d=h.keys();let p=m.resolve();return d.forEach(v=>{p=p.next(()=>l.getEntry(c,v)).next(I=>{const y=u.docVersions.get(v);F(y!==null),I.version.compareTo(y)<0&&(h.applyToRemoteDocument(I,u),I.isValidDocument()&&(I.setReadTime(u.commitVersion),l.addEntry(I)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=C();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Hl(n){const e=S(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.qr.getLastRemoteSnapshotVersion(t))}function my(n,e){const t=S(n),r=e.snapshotVersion;let i=t.ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.ss.newChangeBuffer({trackRemovals:!0});i=t.ts;const a=[];e.targetChanges.forEach((l,h)=>{const d=i.get(h);if(!d)return;a.push(t.qr.removeMatchingKeys(s,l.removedDocuments,h).next(()=>t.qr.addMatchingKeys(s,l.addedDocuments,h)));let p=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(ae.EMPTY_BYTE_STRING,P.min()).withLastLimboFreeSnapshotVersion(P.min()):l.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(l.resumeToken,r)),i=i.insert(h,p),function(I,y,D){return I.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-I.snapshotVersion.toMicroseconds()>=3e8?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(d,p,l)&&a.push(t.qr.updateTargetData(s,p))});let c=qe(),u=C();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(gy(s,o,e.documentUpdates).next(l=>{c=l.us,u=l.cs})),!r.isEqual(P.min())){const l=t.qr.getLastRemoteSnapshotVersion(s).next(h=>t.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return m.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(t.ts=i,s))}function gy(n,e,t){let r=C(),i=C();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=qe();return t.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(P.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):E("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{us:o,cs:i}})}function _y(n,e){const t=S(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function yy(n,e){const t=S(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.qr.getTargetData(r,e).next(s=>s?(i=s,m.resolve(i)):t.qr.allocateTargetId(r).next(o=>(i=new Ge(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.ts=t.ts.insert(r.targetId,r),t.ns.set(e,r.targetId)),r})}async function Ss(n,e,t){const r=S(n),i=r.ts.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!er(o))throw o;E("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(i.target)}function Xa(n,e,t){const r=S(n);let i=P.min(),s=C();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,l){const h=S(c),d=h.ns.get(l);return d!==void 0?m.resolve(h.ts.get(d)):h.qr.getTargetData(u,l)}(r,o,Pe(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,t?i:P.min(),t?s:C())).next(a=>(Ey(r,l_(e),a),{documents:a,ls:s})))}function Ey(n,e,t){let r=n.rs.get(e)||P.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.rs.set(e,r)}class Ja{constructor(){this.activeTargetIds=g_()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class vy{constructor(){this.eo=new Ja,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,t,r){this.no[e]=t}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new Ja,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{ro(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){E("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){E("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _r=null;function Gi(){return _r===null?_r=function(){return 268435456+Math.round(2147483648*Math.random())}():_r++,"0x"+_r.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee="WebChannelConnection";class Ay extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+t.host,this.fo=`projects/${i}/databases/${s}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get yo(){return!1}wo(t,r,i,s,o){const a=Gi(),c=this.So(t,r);E("RestConnection",`Sending RPC '${t}' ${a}:`,c,i);const u={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(u,s,o),this.Do(t,c,u,i).then(l=>(E("RestConnection",`Received RPC '${t}' ${a}: `,l),l),l=>{throw Bt("RestConnection",`RPC '${t}' ${a} failed with error: `,l,"url: ",c,"request:",i),l})}Co(t,r,i,s,o,a){return this.wo(t,r,i,s,o)}bo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Xt}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}So(t,r){const i=Ty[t];return`${this.mo}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,t,r,i){const s=Gi();return new Promise((o,a)=>{const c=new Ng;c.setWithCredentials(!0),c.listenOnce(bg.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case zi.NO_ERROR:const l=c.getResponseJson();E(ee,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(l)),o(l);break;case zi.TIMEOUT:E(ee,`RPC '${e}' ${s} timed out`),a(new _(f.DEADLINE_EXCEEDED,"Request time out"));break;case zi.HTTP_ERROR:const h=c.getStatus();if(E(ee,`RPC '${e}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const v=function(y){const D=y.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(D)>=0?D:f.UNKNOWN}(p.status);a(new _(v,p.message))}else a(new _(f.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new _(f.UNAVAILABLE,"Connection failed."));break;default:A()}}finally{E(ee,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);E(ee,`RPC '${e}' ${s} sending request:`,i),c.send(t,"POST",u,r,15)})}vo(e,t,r){const i=Gi(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Sg(),a=Cg(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.xmlHttpFactory=new Dg({})),this.bo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const l=s.join("");E(ee,`Creating RPC '${e}' stream ${i}: ${l}`,c);const h=o.createWebChannel(l,c);let d=!1,p=!1;const v=new wy({co:y=>{p?E(ee,`Not sending because RPC '${e}' stream ${i} is closed:`,y):(d||(E(ee,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),E(ee,`RPC '${e}' stream ${i} sending:`,y),h.send(y))},lo:()=>h.close()}),I=(y,D,M)=>{y.listen(D,V=>{try{M(V)}catch(U){setTimeout(()=>{throw U},0)}})};return I(h,pr.EventType.OPEN,()=>{p||E(ee,`RPC '${e}' stream ${i} transport opened.`)}),I(h,pr.EventType.CLOSE,()=>{p||(p=!0,E(ee,`RPC '${e}' stream ${i} transport closed`),v.Ro())}),I(h,pr.EventType.ERROR,y=>{p||(p=!0,Bt(ee,`RPC '${e}' stream ${i} transport errored:`,y),v.Ro(new _(f.UNAVAILABLE,"The operation could not be completed")))}),I(h,pr.EventType.MESSAGE,y=>{var D;if(!p){const M=y.data[0];F(!!M);const V=M,U=V.error||((D=V[0])===null||D===void 0?void 0:D.error);if(U){E(ee,`RPC '${e}' stream ${i} received error:`,U);const le=U.status;let he=function(tn){const ar=j[tn];if(ar!==void 0)return Ol(ar)}(le),at=U.message;he===void 0&&(he=f.INTERNAL,at="Unknown error status: "+le+" with message "+U.message),p=!0,v.Ro(new _(he,at)),h.close()}else E(ee,`RPC '${e}' stream ${i} received:`,M),v.Vo(M)}}),I(a,kg.STAT_EVENT,y=>{y.stat===ka.PROXY?E(ee,`RPC '${e}' stream ${i} detected buffering proxy`):y.stat===ka.NOPROXY&&E(ee,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.Ao()},0),v}}function Ki(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(n){return new M_(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e,t,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=t,this.Fo=r,this.Mo=i,this.xo=s,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const t=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,t-r);i>0&&E("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,t,r,i,s,o,a,c){this.si=e,this.Ko=r,this.$o=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new zl(e,t)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,t){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():t&&t.code===f.RESOURCE_EXHAUSTED?(Be(t.toString()),Be("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):t&&t.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(t)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),t=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Uo===t&&this.s_(r,i)},r=>{e(()=>{const i=new _(f.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(i)})})}s_(e,t){const r=this.i_(this.Uo);this.stream=this.__(e,t),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{r(()=>this.o_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return E("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return t=>{this.si.enqueueAndForget(()=>this.Uo===e?t():(E("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ry extends Wl{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}__(e,t){return this.connection.vo("Listen",e,t)}onMessage(e){this.zo.reset();const t=F_(this.serializer,e),r=function(s){if(!("targetChange"in s))return P.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?P.min():o.readTime?Ce(o.readTime):P.min()}(e);return this.listener.a_(t,r)}u_(e){const t={};t.database=Ps(this.serializer),t.addTarget=function(s,o){let a;const c=o.target;if(a=Is(c)?{documents:q_(s,c)}:{query:j_(s,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=xl(s,o.resumeToken);const u=ws(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(P.min())>0){a.readTime=Gr(s,o.snapshotVersion.toTimestamp());const u=ws(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=H_(this.serializer,e);r&&(t.labels=r),this.e_(t)}c_(e){const t={};t.database=Ps(this.serializer),t.removeTarget=e,this.e_(t)}}class Py extends Wl{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,t){return this.connection.vo("Write",e,t)}onMessage(e){if(F(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const t=B_(e.writeResults,e.commitTime),r=Ce(e.commitTime);return this.listener.I_(r,t)}return F(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=Ps(this.serializer),this.e_(e)}P_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>U_(this.serializer,r))};this.e_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new _(f.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,t,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.wo(e,t,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new _(f.UNKNOWN,i.toString())})}Co(e,t,r,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,t,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new _(f.UNKNOWN,s.toString())})}terminate(){this.d_=!0}}class Cy{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(Be(t),this.f_=!1):E("OnlineStateTracker",t)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=s,this.F_.ro(o=>{r.enqueueAndForget(async()=>{Rt(this)&&(E("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=S(c);u.C_.add(4),await rr(u),u.M_.set("Unknown"),u.C_.delete(4),await Ai(u)}(this))})}),this.M_=new Cy(r,i)}}async function Ai(n){if(Rt(n))for(const e of n.v_)await e(!0)}async function rr(n){for(const e of n.v_)await e(!1)}function Gl(n,e){const t=S(n);t.D_.has(e.targetId)||(t.D_.set(e.targetId,e),So(t)?Po(t):en(t).Ho()&&Ro(t,e))}function Kl(n,e){const t=S(n),r=en(t);t.D_.delete(e),r.Ho()&&Ql(t,e),t.D_.size===0&&(r.Ho()?r.Zo():Rt(t)&&t.M_.set("Unknown"))}function Ro(n,e){if(n.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(P.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}en(n).u_(e)}function Ql(n,e){n.x_.Oe(e),en(n).c_(e)}function Po(n){n.x_=new D_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>n.D_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),en(n).start(),n.M_.g_()}function So(n){return Rt(n)&&!en(n).jo()&&n.D_.size>0}function Rt(n){return S(n).C_.size===0}function Yl(n){n.x_=void 0}async function ky(n){n.D_.forEach((e,t)=>{Ro(n,e)})}async function Dy(n,e){Yl(n),So(n)?(n.M_.w_(e),Po(n)):n.M_.set("Unknown")}async function Ny(n,e,t){if(n.M_.set("Online"),e instanceof Ll&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.D_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.D_.delete(a),i.x_.removeTarget(a))}(n,e)}catch(r){E("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Kr(n,r)}else if(e instanceof Rr?n.x_.$e(e):e instanceof Ml?n.x_.Je(e):n.x_.Ge(e),!t.isEqual(P.min()))try{const r=await Hl(n.localStore);t.compareTo(r)>=0&&await function(s,o){const a=s.x_.it(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const l=s.D_.get(u);l&&s.D_.set(u,l.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const l=s.D_.get(c);if(!l)return;s.D_.set(c,l.withResumeToken(ae.EMPTY_BYTE_STRING,l.snapshotVersion)),Ql(s,c);const h=new Ge(l.target,c,u,l.sequenceNumber);Ro(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(r){E("RemoteStore","Failed to raise snapshot:",r),await Kr(n,r)}}async function Kr(n,e,t){if(!er(e))throw e;n.C_.add(1),await rr(n),n.M_.set("Offline"),t||(t=()=>Hl(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{E("RemoteStore","Retrying IndexedDB access"),await t(),n.C_.delete(1),await Ai(n)})}function Xl(n,e){return e().catch(t=>Kr(n,t,e))}async function Ri(n){const e=S(n),t=et(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;Vy(e);)try{const i=await _y(e.localStore,r);if(i===null){e.b_.length===0&&t.Zo();break}r=i.batchId,Oy(e,i)}catch(i){await Kr(e,i)}Jl(e)&&Zl(e)}function Vy(n){return Rt(n)&&n.b_.length<10}function Oy(n,e){n.b_.push(e);const t=et(n);t.Ho()&&t.h_&&t.P_(e.mutations)}function Jl(n){return Rt(n)&&!et(n).jo()&&n.b_.length>0}function Zl(n){et(n).start()}async function My(n){et(n).E_()}async function Ly(n){const e=et(n);for(const t of n.b_)e.P_(t.mutations)}async function xy(n,e,t){const r=n.b_.shift(),i=Eo.from(r,e,t);await Xl(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Ri(n)}async function Fy(n,e){e&&et(n).h_&&await async function(r,i){if(function(o){return C_(o)&&o!==f.ABORTED}(i.code)){const s=r.b_.shift();et(r).Yo(),await Xl(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ri(r)}}(n,e),Jl(n)&&Zl(n)}async function ec(n,e){const t=S(n);t.asyncQueue.verifyOperationInProgress(),E("RemoteStore","RemoteStore received new credentials");const r=Rt(t);t.C_.add(3),await rr(t),r&&t.M_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.C_.delete(3),await Ai(t)}async function Uy(n,e){const t=S(n);e?(t.C_.delete(2),await Ai(t)):e||(t.C_.add(2),await rr(t),t.M_.set("Unknown"))}function en(n){return n.O_||(n.O_=function(t,r,i){const s=S(t);return s.A_(),new Ry(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{ho:ky.bind(null,n),Io:Dy.bind(null,n),a_:Ny.bind(null,n)}),n.v_.push(async e=>{e?(n.O_.Yo(),So(n)?Po(n):n.M_.set("Unknown")):(await n.O_.stop(),Yl(n))})),n.O_}function et(n){return n.N_||(n.N_=function(t,r,i){const s=S(t);return s.A_(),new Py(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{ho:My.bind(null,n),Io:Fy.bind(null,n),T_:Ly.bind(null,n),I_:xy.bind(null,n)}),n.v_.push(async e=>{e?(n.N_.Yo(),await Ri(n)):(await n.N_.stop(),n.b_.length>0&&(E("RemoteStore",`Stopping write stream with ${n.b_.length} pending writes`),n.b_=[]))})),n.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new xe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,a=new Co(e,t,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new _(f.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bo(n,e){if(Be("AsyncQueue",`${e}: ${n}`),er(n))return new _(f.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.comparator=e?(t,r)=>e(t,r)||T.comparator(t.key,r.key):(t,r)=>T.comparator(t.key,r.key),this.keyedMap=ln(),this.sortedSet=new B(this.comparator)}static emptySet(e){return new Ft(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ft)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Ft;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(){this.B_=new B(T.comparator)}track(e){const t=e.doc.key,r=this.B_.get(t);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(t,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(t):e.type===1&&r.type===2?this.B_=this.B_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(t,{type:2,doc:e.doc}):A():this.B_=this.B_.insert(t,e)}L_(){const e=[];return this.B_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Wt{constructor(e,t,r,i,s,o,a,c,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new Wt(e,t,Ft.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(){this.k_=void 0,this.listeners=[]}}class qy{constructor(){this.queries=new Zt(e=>vl(e),yi),this.onlineState="Unknown",this.q_=new Set}}async function eh(n,e){const t=S(n),r=e.query;let i=!1,s=t.queries.get(r);if(s||(i=!0,s=new By),i)try{s.k_=await t.onListen(r)}catch(o){const a=bo(o,`Initialization of query '${Ct(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,s),s.listeners.push(e),e.Q_(t.onlineState),s.k_&&e.K_(s.k_)&&ko(t)}async function th(n,e){const t=S(n),r=e.query;let i=!1;const s=t.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return t.queries.delete(r),t.onUnlisten(r)}function jy(n,e){const t=S(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const a of o.listeners)a.K_(i)&&(r=!0);o.k_=i}}r&&ko(t)}function $y(n,e,t){const r=S(n),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(t);r.queries.delete(e)}function ko(n){n.q_.forEach(e=>{e.next()})}class nh{constructor(e,t,r){this.query=e,this.U_=t,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Wt(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.W_?this.z_(e)&&(this.U_.next(e),t=!0):this.j_(e,this.onlineState)&&(this.H_(e),t=!0),this.G_=e,t}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let t=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),t=!0),t}j_(e,t){if(!e.fromCache)return!0;const r=t!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const t=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}H_(e){e=Wt.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e){this.key=e}}class ih{constructor(e){this.key=e}}class Hy{constructor(e,t){this.query=e,this.ia=t,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=C(),this.mutatedKeys=C(),this._a=Il(e),this.aa=new Ft(this._a)}get ua(){return this.ia}ca(e,t){const r=t?t.la:new tc,i=t?t.aa:this.aa;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const d=i.get(l),p=Ei(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),I=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let y=!1;d&&p?d.data.isEqual(p.data)?v!==I&&(r.track({type:3,doc:p}),y=!0):this.ha(d,p)||(r.track({type:2,doc:p}),y=!0,(c&&this._a(p,c)>0||u&&this._a(p,u)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),y=!0):d&&!p&&(r.track({type:1,doc:d}),y=!0,(c||u)&&(a=!0)),y&&(p?(o=o.add(p),s=I?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{aa:o,la:r,Zi:a,mutatedKeys:s}}ha(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){const i=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const s=e.la.L_();s.sort((u,l)=>function(d,p){const v=I=>{switch(I){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return A()}};return v(d)-v(p)}(u.type,l.type)||this._a(u.doc,l.doc)),this.Pa(r);const o=t?this.Ia():[],a=this.oa.size===0&&this.current?1:0,c=a!==this.sa;return this.sa=a,s.length!==0||c?{snapshot:new Wt(this.query,e.aa,i,s,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:o}:{Ta:o}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new tc,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(t=>this.ia=this.ia.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.ia=this.ia.delete(t)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=C(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const t=[];return e.forEach(r=>{this.oa.has(r)||t.push(new ih(r))}),this.oa.forEach(r=>{e.has(r)||t.push(new rh(r))}),t}da(e){this.ia=e.ls,this.oa=C();const t=this.ca(e.documents);return this.applyChanges(t,!0)}Aa(){return Wt.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class zy{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Wy{constructor(e){this.key=e,this.Ra=!1}}class Gy{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new Zt(a=>vl(a),yi),this.fa=new Map,this.ga=new Set,this.pa=new B(T.comparator),this.ya=new Map,this.wa=new To,this.Sa={},this.ba=new Map,this.Da=zt.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function Ky(n,e){const t=iE(n);let r,i;const s=t.ma.get(e);if(s)r=s.targetId,t.sharedClientState.addLocalQueryTarget(r),i=s.view.Aa();else{const o=await yy(t.localStore,Pe(e)),a=t.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Qy(t,e,r,a==="current",o.resumeToken),t.isPrimaryClient&&Gl(t.remoteStore,o)}return i}async function Qy(n,e,t,r,i){n.va=(h,d,p)=>async function(I,y,D,M){let V=y.view.ca(D);V.Zi&&(V=await Xa(I.localStore,y.query,!1).then(({documents:he})=>y.view.ca(he,V)));const U=M&&M.targetChanges.get(y.targetId),le=y.view.applyChanges(V,I.isPrimaryClient,U);return rc(I,y.targetId,le.Ta),le.snapshot}(n,h,d,p);const s=await Xa(n.localStore,e,!0),o=new Hy(e,s.ls),a=o.ca(s.documents),c=nr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),u=o.applyChanges(a,n.isPrimaryClient,c);rc(n,t,u.Ta);const l=new zy(e,t,o);return n.ma.set(e,l),n.fa.has(t)?n.fa.get(t).push(e):n.fa.set(t,[e]),u.snapshot}async function Yy(n,e){const t=S(n),r=t.ma.get(e),i=t.fa.get(r.targetId);if(i.length>1)return t.fa.set(r.targetId,i.filter(s=>!yi(s,e))),void t.ma.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(r.targetId),t.sharedClientState.isActiveQueryTarget(r.targetId)||await Ss(t.localStore,r.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(r.targetId),Kl(t.remoteStore,r.targetId),Cs(t,r.targetId)}).catch(Zn)):(Cs(t,r.targetId),await Ss(t.localStore,r.targetId,!0))}async function Xy(n,e,t){const r=sE(n);try{const i=await function(o,a){const c=S(o),u=z.now(),l=a.reduce((p,v)=>p.add(v.key),C());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",p=>{let v=qe(),I=C();return c.ss.getEntries(p,l).next(y=>{v=y,v.forEach((D,M)=>{M.isValidDocument()||(I=I.add(D))})}).next(()=>c.localDocuments.getOverlayedDocuments(p,v)).next(y=>{h=y;const D=[];for(const M of a){const V=w_(M,h.get(M.key).overlayedDocument);V!=null&&D.push(new At(M.key,V,fl(V.value.mapValue),Se.exists(!0)))}return c.mutationQueue.addMutationBatch(p,u,D,a)}).next(y=>{d=y;const D=y.applyToLocalDocumentSet(h,I);return c.documentOverlayCache.saveOverlays(p,y.batchId,D)})}).then(()=>({batchId:d.batchId,changes:wl(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let u=o.Sa[o.currentUser.toKey()];u||(u=new B(N)),u=u.insert(a,c),o.Sa[o.currentUser.toKey()]=u}(r,i.batchId,t),await ir(r,i.changes),await Ri(r.remoteStore)}catch(i){const s=bo(i,"Failed to persist write");t.reject(s)}}async function sh(n,e){const t=S(n);try{const r=await my(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.ya.get(s);o&&(F(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ra=!0:i.modifiedDocuments.size>0?F(o.Ra):i.removedDocuments.size>0&&(F(o.Ra),o.Ra=!1))}),await ir(t,r,e)}catch(r){await Zn(r)}}function nc(n,e,t){const r=S(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.ma.forEach((s,o)=>{const a=o.view.Q_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=S(o);c.onlineState=a;let u=!1;c.queries.forEach((l,h)=>{for(const d of h.listeners)d.Q_(a)&&(u=!0)}),u&&ko(c)}(r.eventManager,e),i.length&&r.Va.a_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Jy(n,e,t){const r=S(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.ya.get(e),s=i&&i.key;if(s){let o=new B(T.comparator);o=o.insert(s,ne.newNoDocument(s,P.min()));const a=C().add(s),c=new Ti(P.min(),new Map,new B(N),o,a);await sh(r,c),r.pa=r.pa.remove(s),r.ya.delete(e),Do(r)}else await Ss(r.localStore,e,!1).then(()=>Cs(r,e,t)).catch(Zn)}async function Zy(n,e){const t=S(n),r=e.batch.batchId;try{const i=await py(t.localStore,e);ah(t,r,null),oh(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ir(t,i)}catch(i){await Zn(i)}}async function eE(n,e,t){const r=S(n);try{const i=await function(o,a){const c=S(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return c.mutationQueue.lookupMutationBatch(u,a).next(h=>(F(h!==null),l=h.keys(),c.mutationQueue.removeMutationBatch(u,h))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,l,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>c.localDocuments.getDocuments(u,l))})}(r.localStore,e);ah(r,e,t),oh(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ir(r,i)}catch(i){await Zn(i)}}function oh(n,e){(n.ba.get(e)||[]).forEach(t=>{t.resolve()}),n.ba.delete(e)}function ah(n,e,t){const r=S(n);let i=r.Sa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Sa[r.currentUser.toKey()]=i}}function Cs(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.fa.get(e))n.ma.delete(r),t&&n.Va.Fa(r,t);n.fa.delete(e),n.isPrimaryClient&&n.wa.Rr(e).forEach(r=>{n.wa.containsKey(r)||ch(n,r)})}function ch(n,e){n.ga.delete(e.path.canonicalString());const t=n.pa.get(e);t!==null&&(Kl(n.remoteStore,t),n.pa=n.pa.remove(e),n.ya.delete(t),Do(n))}function rc(n,e,t){for(const r of t)r instanceof rh?(n.wa.addReference(r.key,e),tE(n,r)):r instanceof ih?(E("SyncEngine","Document no longer in limbo: "+r.key),n.wa.removeReference(r.key,e),n.wa.containsKey(r.key)||ch(n,r.key)):A()}function tE(n,e){const t=e.key,r=t.path.canonicalString();n.pa.get(t)||n.ga.has(r)||(E("SyncEngine","New document in limbo: "+t),n.ga.add(r),Do(n))}function Do(n){for(;n.ga.size>0&&n.pa.size<n.maxConcurrentLimboResolutions;){const e=n.ga.values().next().value;n.ga.delete(e);const t=new T(L.fromString(e)),r=n.Da.next();n.ya.set(r,new Wy(t)),n.pa=n.pa.insert(t,r),Gl(n.remoteStore,new Ge(Pe(_o(t.path)),r,"TargetPurposeLimboResolution",ho._e))}}async function ir(n,e,t){const r=S(n),i=[],s=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,c)=>{o.push(r.va(c,e,t).then(u=>{if((u||t)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const l=Ao.Qi(c.targetId,u);s.push(l)}}))}),await Promise.all(o),r.Va.a_(i),await async function(c,u){const l=S(c);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>m.forEach(u,d=>m.forEach(d.ki,p=>l.persistence.referenceDelegate.addReference(h,d.targetId,p)).next(()=>m.forEach(d.qi,p=>l.persistence.referenceDelegate.removeReference(h,d.targetId,p)))))}catch(h){if(!er(h))throw h;E("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const p=l.ts.get(d),v=p.snapshotVersion,I=p.withLastLimboFreeSnapshotVersion(v);l.ts=l.ts.insert(d,I)}}}(r.localStore,s))}async function nE(n,e){const t=S(n);if(!t.currentUser.isEqual(e)){E("SyncEngine","User change. New user:",e.toKey());const r=await $l(t.localStore,e);t.currentUser=e,function(s,o){s.ba.forEach(a=>{a.forEach(c=>{c.reject(new _(f.CANCELLED,o))})}),s.ba.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ir(t,r._s)}}function rE(n,e){const t=S(n),r=t.ya.get(e);if(r&&r.Ra)return C().add(r.key);{let i=C();const s=t.fa.get(e);if(!s)return i;for(const o of s){const a=t.ma.get(o);i=i.unionWith(a.view.ua)}return i}}function iE(n){const e=S(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=sh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=rE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Jy.bind(null,e),e.Va.a_=jy.bind(null,e.eventManager),e.Va.Fa=$y.bind(null,e.eventManager),e}function sE(n){const e=S(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Zy.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=eE.bind(null,e),e}class ic{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=wi(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return fy(this.persistence,new hy,e.initialUser,this.serializer)}createPersistence(e){return new cy(wo.jr,this.serializer)}createSharedClientState(e){return new vy}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class oE{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>nc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=nE.bind(null,this.syncEngine),await Uy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new qy}()}createDatastore(e){const t=wi(e.databaseInfo.databaseId),r=function(s){return new Ay(s)}(e.databaseInfo);return function(s,o,a,c){return new Sy(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,a){return new by(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>nc(this.syncEngine,t,0),function(){return Za.D()?new Za:new Iy}())}createSyncEngine(e,t){return function(i,s,o,a,c,u,l){const h=new Gy(i,s,o,a,c,u);return l&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(t){const r=S(t);E("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await rr(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):Be("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=te.UNAUTHENTICATED,this.clientId=ll.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{E("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(E("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new _(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new xe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=bo(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Qi(n,e){n.asyncQueue.verifyOperationInProgress(),E("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await $l(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function sc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await uE(n);E("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await e.initialize(t,r),n.setCredentialChangeListener(i=>ec(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>ec(e.remoteStore,s)),n._onlineComponents=e}function cE(n){return n.name==="FirebaseError"?n.code===f.FAILED_PRECONDITION||n.code===f.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function uE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){E("FirestoreClient","Using user provided OfflineComponentProvider");try{await Qi(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!cE(t))throw t;Bt("Error using user provided cache. Falling back to memory cache: "+t),await Qi(n,new ic)}}else E("FirestoreClient","Using default OfflineComponentProvider"),await Qi(n,new ic);return n._offlineComponents}async function lh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(E("FirestoreClient","Using user provided OnlineComponentProvider"),await sc(n,n._uninitializedComponentsProvider._online)):(E("FirestoreClient","Using default OnlineComponentProvider"),await sc(n,new oE))),n._onlineComponents}function lE(n){return lh(n).then(e=>e.syncEngine)}async function hh(n){const e=await lh(n),t=e.eventManager;return t.onListen=Ky.bind(null,e.syncEngine),t.onUnlisten=Yy.bind(null,e.syncEngine),t}function hE(n,e,t={}){const r=new xe;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const l=new uh({next:d=>{o.enqueueAndForget(()=>th(s,h));const p=d.docs.has(a);!p&&d.fromCache?u.reject(new _(f.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&d.fromCache&&c&&c.source==="server"?u.reject(new _(f.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new nh(_o(a.path),l,{includeMetadataChanges:!0,J_:!0});return eh(s,h)}(await hh(n),n.asyncQueue,e,t,r)),r.promise}function dE(n,e,t={}){const r=new xe;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const l=new uh({next:d=>{o.enqueueAndForget(()=>th(s,h)),d.fromCache&&c.source==="server"?u.reject(new _(f.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new nh(a,l,{includeMetadataChanges:!0,J_:!0});return eh(s,h)}(await hh(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(n,e,t){if(!t)throw new _(f.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function fE(n,e,t,r){if(e===!0&&r===!0)throw new _(f.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function ac(n){if(!T.isDocumentKey(n))throw new _(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function cc(n){if(T.isDocumentKey(n))throw new _(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Pi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":A()}function tt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new _(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Pi(n);throw new _(f.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function pE(n,e){if(e<=0)throw new _(f.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new _(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new _(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}fE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dh((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new _(f.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new _(f.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new _(f.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Si{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new uc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new _(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new _(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new uc(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Og;switch(r.type){case"firstParty":return new Fg(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new _(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=oc.get(t);r&&(E("ComponentProvider","Removing Datastore"),oc.delete(t),r.terminate())}(this),Promise.resolve()}}function mE(n,e,t,r={}){var i;const s=(n=tt(n,Si))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Bt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=te.MOCK_USER;else{a=jh(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new _(f.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new te(u)}n._authCredentials=new Mg(new ul(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ne(this.firestore,e,this._query)}}class ue{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ye(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ue(this.firestore,e,this._key)}}class Ye extends Ne{constructor(e,t,r){super(e,t,_o(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ue(this.firestore,null,new T(e))}withConverter(e){return new Ye(this.firestore,e,this._path)}}function lc(n,e,...t){if(n=oe(n),fh("collection","path",e),n instanceof Si){const r=L.fromString(e,...t);return cc(r),new Ye(n,null,r)}{if(!(n instanceof ue||n instanceof Ye))throw new _(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(L.fromString(e,...t));return cc(r),new Ye(n.firestore,null,r)}}function dn(n,e,...t){if(n=oe(n),arguments.length===1&&(e=ll.newId()),fh("doc","path",e),n instanceof Si){const r=L.fromString(e,...t);return ac(r),new ue(n,null,new T(r))}{if(!(n instanceof ue||n instanceof Ye))throw new _(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(L.fromString(e,...t));return ac(r),new ue(n.firestore,n instanceof Ye?n.converter:null,new T(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new zl(this,"async_queue_retry"),this.iu=()=>{const t=Ki();t&&E("AsyncQueue","Visibility state changed to "+t.visibilityState),this.zo.Qo()};const e=Ki();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const t=Ki();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const t=new xe;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!er(e))throw e;E("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const t=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Be("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=t,t}enqueueAfterDelay(e,t,r){this.su(),this.ru.indexOf(e)>-1&&(t=0);const i=Co.createAndSchedule(this,e,t,r,s=>this.au(s));return this.Xa.push(i),i}su(){this.eu&&A()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const t of this.Xa)if(t.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Xa)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const t=this.Xa.indexOf(e);this.Xa.splice(t,1)}}class sr extends Si{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=function(){return new gE}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ph(this),this._firestoreClient.terminate()}}function _E(n,e){const t=typeof n=="object"?n:Sc(),r=typeof n=="string"?n:e||"(default)",i=Ns(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Bh("firestore");s&&mE(i,...s)}return i}function No(n){return n._firestoreClient||ph(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function ph(n){var e,t,r;const i=n._freezeSettings(),s=function(a,c,u,l){return new Yg(a,c,u,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,dh(l.experimentalLongPollingOptions),l.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new aE(n._authCredentials,n._appCheckCredentials,n._queue,s),!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Gt(ae.fromBase64String(e))}catch(t){throw new _(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Gt(ae.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new _(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new X(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new _(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new _(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return N(this._lat,e._lat)||N(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE=/^__.*__$/;class EE{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new At(e,this.data,this.fieldMask,t,this.fieldTransforms):new tr(e,this.data,t,this.fieldTransforms)}}function gh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw A()}}class Mo{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new Mo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Tu({path:r,du:!1});return i.Au(e),i}Ru(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Tu({path:r,du:!1});return i.Pu(),i}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return Qr(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(gh(this.Iu)&&yE.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class vE{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||wi(e)}pu(e,t,r,i=!1){return new Mo({Iu:e,methodName:t,gu:r,path:X.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ci(n){const e=n._freezeSettings(),t=wi(n._databaseId);return new vE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function _h(n,e,t,r,i,s={}){const o=n.pu(s.merge||s.mergeFields?2:0,e,t,i);Ih("Data must be an object, but it was:",o,r);const a=Eh(r,o);let c,u;if(s.merge)c=new me(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const d=IE(e,h,t);if(!o.contains(d))throw new _(f.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);wE(l,d)||l.push(d)}c=new me(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new EE(new pe(a),c,u)}function yh(n,e,t,r=!1){return Lo(t,n.pu(r?4:3,e))}function Lo(n,e){if(vh(n=oe(n)))return Ih("Unsupported field value:",e,n),Eh(n,e);if(n instanceof mh)return function(r,i){if(!gh(i.Iu))throw i.mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=Lo(a,i.Vu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=oe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return __(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=z.fromDate(r);return{timestampValue:Gr(i.serializer,s)}}if(r instanceof z){const s=new z(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Gr(i.serializer,s)}}if(r instanceof Oo)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Gt)return{bytesValue:xl(i.serializer,r._byteString)};if(r instanceof ue){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Io(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.mu(`Unsupported field value: ${Pi(r)}`)}(n,e)}function Eh(n,e){const t={};return hl(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Jt(n,(r,i)=>{const s=Lo(i,e.Eu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function vh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof z||n instanceof Oo||n instanceof Gt||n instanceof ue||n instanceof mh)}function Ih(n,e,t){if(!vh(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=Pi(t);throw r==="an object"?e.mu(n+" a custom object"):e.mu(n+" "+r)}}function IE(n,e,t){if((e=oe(e))instanceof Vo)return e._internalPath;if(typeof e=="string")return Th(n,e);throw Qr("Field path arguments must be of type string or ",n,!1,void 0,t)}const TE=new RegExp("[~\\*/\\[\\]]");function Th(n,e,t){if(e.search(TE)>=0)throw Qr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Vo(...e.split("."))._internalPath}catch{throw Qr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Qr(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new _(f.INVALID_ARGUMENT,a+n+c)}function wE(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ue(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new AE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(bi("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class AE extends xo{data(){return super.data()}}function bi(n,e){return typeof e=="string"?Th(n,e):e instanceof Vo?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new _(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Fo{}class or extends Fo{}function PE(n,e,...t){let r=[];e instanceof Fo&&r.push(e),r=r.concat(t),function(s){const o=s.filter(c=>c instanceof Uo).length,a=s.filter(c=>c instanceof ki).length;if(o>1||o>0&&a>0)throw new _(f.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class ki extends or{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new ki(e,t,r)}_apply(e){const t=this._parse(e);return Ah(e._query,t),new Ne(e.firestore,e.converter,Ts(e._query,t))}_parse(e){const t=Ci(e.firestore);return function(s,o,a,c,u,l,h){let d;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new _(f.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){dc(h,l);const p=[];for(const v of h)p.push(hc(c,s,v));d={arrayValue:{values:p}}}else d=hc(c,s,h)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||dc(h,l),d=yh(a,o,h,l==="in"||l==="not-in");return H.create(u,l,d)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function SE(n,e,t){const r=e,i=bi("where",n);return ki._create(i,r,t)}class Uo extends Fo{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Uo(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Ee.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const c of a)Ah(o,c),o=Ts(o,c)}(e._query,t),new Ne(e.firestore,e.converter,Ts(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Bo extends or{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Bo(e,t)}_apply(e){const t=function(i,s,o){if(i.startAt!==null)throw new _(f.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new _(f.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Mn(s,o)}(e._query,this._field,this._direction);return new Ne(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new ot(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function CE(n,e="asc"){const t=e,r=bi("orderBy",n);return Bo._create(r,t)}class qo extends or{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new qo(e,t,r)}_apply(e){return new Ne(e.firestore,e.converter,Hr(e._query,this._limit,this._limitType))}}function bE(n){return pE("limit",n),qo._create("limit",n,"F")}class jo extends or{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new jo(e,t,r)}_apply(e){const t=wh(e,this.type,this._docOrFields,this._inclusive);return new Ne(e.firestore,e.converter,function(i,s){return new ot(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,t))}}function kE(...n){return jo._create("startAfter",n,!1)}class $o extends or{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new $o(e,t,r)}_apply(e){const t=wh(e,this.type,this._docOrFields,this._inclusive);return new Ne(e.firestore,e.converter,function(i,s){return new ot(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,t))}}function DE(...n){return $o._create("endAt",n,!0)}function wh(n,e,t,r){if(t[0]=oe(t[0]),t[0]instanceof xo)return function(s,o,a,c,u){if(!c)throw new _(f.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const l=[];for(const h of xt(s))if(h.field.isKeyField())l.push($r(o,c.key));else{const d=c.data.field(h.field);if(_i(d))throw new _(f.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(d===null){const p=h.field.canonicalString();throw new _(f.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${p}' (used as the orderBy) does not exist.`)}l.push(d)}return new Ht(l,u)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=Ci(n.firestore);return function(o,a,c,u,l,h){const d=o.explicitOrderBy;if(l.length>d.length)throw new _(f.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const p=[];for(let v=0;v<l.length;v++){const I=l[v];if(d[v].field.isKeyField()){if(typeof I!="string")throw new _(f.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof I}`);if(!yo(o)&&I.indexOf("/")!==-1)throw new _(f.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${I}' contains a slash.`);const y=o.path.child(L.fromString(I));if(!T.isDocumentKey(y))throw new _(f.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${y}' is not because it contains an odd number of segments.`);const D=new T(y);p.push($r(a,D))}else{const y=yh(c,u,I);p.push(y)}}return new Ht(p,h)}(n._query,n.firestore._databaseId,i,e,t,r)}}function hc(n,e,t){if(typeof(t=oe(t))=="string"){if(t==="")throw new _(f.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!yo(e)&&t.indexOf("/")!==-1)throw new _(f.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(L.fromString(t));if(!T.isDocumentKey(r))throw new _(f.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return $r(n,new T(r))}if(t instanceof ue)return $r(n,t._key);throw new _(f.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Pi(t)}.`)}function dc(n,e){if(!Array.isArray(n)||n.length===0)throw new _(f.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ah(n,e){const t=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new _(f.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new _(f.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class NE{convertValue(e,t="none"){switch(vt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return $(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Et(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw A()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Jt(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertGeoPoint(e){return new Oo($(e.latitude),$(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=fo(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Nn(e));default:return null}}convertTimestamp(e){const t=Ze(e);return new z(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=L.fromString(e);F(jl(r));const i=new Vn(r.get(1),r.get(3)),s=new T(r.popFirst(5));return i.isEqual(t)||Be(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ph extends xo{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Pr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(bi("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Pr extends Ph{data(e={}){return super.data(e)}}class VE{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new fn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Pr(this._firestore,this._userDataWriter,r.key,r,new fn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new _(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new Pr(i._firestore,i._userDataWriter,a.doc.key,a.doc,new fn(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new Pr(i._firestore,i._userDataWriter,a.doc.key,a.doc,new fn(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,l=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:OE(a.type),doc:c,oldIndex:u,newIndex:l}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function OE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return A()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(n){n=tt(n,ue);const e=tt(n.firestore,sr);return hE(No(e),n._key).then(t=>FE(e,n,t))}class Sh extends NE{constructor(e){super(),this.firestore=e}convertBytes(e){return new Gt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ue(this.firestore,null,t)}}function ME(n){n=tt(n,Ne);const e=tt(n.firestore,sr),t=No(e),r=new Sh(e);return RE(n._query),dE(t,n._query).then(i=>new VE(e,r,n,i))}function LE(n,e,t){n=tt(n,ue);const r=tt(n.firestore,sr),i=Rh(n.converter,e,t);return Ch(r,[_h(Ci(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Se.none())])}function xE(n,e){const t=tt(n.firestore,sr),r=dn(n),i=Rh(n.converter,e);return Ch(t,[_h(Ci(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Se.exists(!1))]).then(()=>r)}function Ch(n,e){return function(r,i){const s=new xe;return r.asyncQueue.enqueueAndForget(async()=>Xy(await lE(r),i,s)),s.promise}(No(n),e)}function FE(n,e,t){const r=t.docs.get(e._key),i=new Sh(n);return new Ph(n,i,e._key,r,new fn(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(i){Xt=i})(It),mt(new Xe("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new sr(new Lg(r.getProvider("auth-internal")),new Bg(r.getProvider("app-check-internal")),function(u,l){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new _(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Vn(u.options.projectId,l)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),we(Da,"4.3.2",e),we(Da,"4.3.2","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh="firebasestorage.googleapis.com",UE="storageBucket",BE=2*60*1e3,qE=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve extends De{constructor(e,t,r=0){super(Xi(e),`Firebase Storage: ${t} (${Xi(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ve.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Xi(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ke;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ke||(ke={}));function Xi(n){return"storage/"+n}function jE(){const n="An unknown error occurred, please check the error payload for server response.";return new Ve(ke.UNKNOWN,n)}function $E(){return new Ve(ke.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function HE(){return new Ve(ke.CANCELED,"User canceled the upload/download.")}function zE(n){return new Ve(ke.INVALID_URL,"Invalid URL '"+n+"'.")}function WE(n){return new Ve(ke.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function fc(n){return new Ve(ke.INVALID_ARGUMENT,n)}function kh(){return new Ve(ke.APP_DELETED,"The Firebase app was deleted.")}function GE(n){return new Ve(ke.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=ge.makeFromUrl(e,t)}catch{return new ge(e,"")}if(r.path==="")return r;throw WE(e)}static makeFromUrl(e,t){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(U){U.path.charAt(U.path.length-1)==="/"&&(U.path_=U.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function u(U){U.path_=decodeURIComponent(U.path)}const l="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${l}/b/${i}/o${d}`,"i"),v={bucket:1,path:3},I=t===bh?"(?:storage.googleapis.com|storage.cloud.google.com)":t,y="([^?#]*)",D=new RegExp(`^https?://${I}/${i}/${y}`,"i"),V=[{regex:a,indices:c,postModify:s},{regex:p,indices:v,postModify:u},{regex:D,indices:{bucket:1,path:2},postModify:u}];for(let U=0;U<V.length;U++){const le=V[U],he=le.regex.exec(e);if(he){const at=he[le.indices.bucket];let Pt=he[le.indices.path];Pt||(Pt=""),r=new ge(at,Pt),le.postModify(r);break}}if(r==null)throw zE(e);return r}}class KE{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QE(n,e,t){let r=1,i=null,s=null,o=!1,a=0;function c(){return a===2}let u=!1;function l(...y){u||(u=!0,e.apply(null,y))}function h(y){i=setTimeout(()=>{i=null,n(p,c())},y)}function d(){s&&clearTimeout(s)}function p(y,...D){if(u){d();return}if(y){d(),l.call(null,y,...D);return}if(c()||o){d(),l.call(null,y,...D);return}r<64&&(r*=2);let V;a===1?(a=2,V=0):V=(r+Math.random())*1e3,h(V)}let v=!1;function I(y){v||(v=!0,d(),!u&&(i!==null?(y||(a=2),clearTimeout(i),h(0)):y||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,I(!0)},t),I}function YE(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XE(n){return n!==void 0}function pc(n,e,t,r){if(r<e)throw fc(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw fc(`Invalid value for '${n}'. Expected ${t} or less.`)}function JE(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const i=e(r)+"="+e(n[r]);t=t+i+"&"}return t=t.slice(0,-1),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yr;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Yr||(Yr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZE(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,s=e.indexOf(n)!==-1;return t||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(e,t,r,i,s,o,a,c,u,l,h,d=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,v)=>{this.resolve_=p,this.reject_=v,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new yr(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Yr.NO_ERROR,c=s.getStatus();if(!a||ZE(c,this.additionalRetryCodes_)&&this.retry){const l=s.getErrorCode()===Yr.ABORT;r(!1,new yr(!1,null,l));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new yr(u,s))})},t=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());XE(c)?s(c):s()}catch(c){o(c)}else if(a!==null){const c=jE();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?kh():HE();o(c)}else{const c=$E();o(c)}};this.canceled_?t(!1,new yr(!1,null,!0)):this.backoffId_=QE(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&YE(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class yr{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function tv(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function nv(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function rv(n,e){e&&(n["X-Firebase-GMPID"]=e)}function iv(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function sv(n,e,t,r,i,s,o=!0){const a=JE(n.urlParams),c=n.url+a,u=Object.assign({},n.headers);return rv(u,e),tv(u,t),nv(u,s),iv(u,r),new ev(c,n.method,u,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ov(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function av(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e,t){this._service=e,t instanceof ge?this._location=t:this._location=ge.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Xr(e,t)}get root(){const e=new ge(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return av(this._location.path)}get storage(){return this._service}get parent(){const e=ov(this._location.path);if(e===null)return null;const t=new ge(this._location.bucket,e);return new Xr(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw GE(e)}}function mc(n,e){const t=e==null?void 0:e[UE];return t==null?null:ge.makeFromBucketSpec(t,n)}class cv{constructor(e,t,r,i,s){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=bh,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=BE,this._maxUploadRetryTime=qE,this._requests=new Set,i!=null?this._bucket=ge.makeFromBucketSpec(i,this._host):this._bucket=mc(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ge.makeFromBucketSpec(this._url,e):this._bucket=mc(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){pc("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){pc("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Xr(this,e)}_makeRequest(e,t,r,i,s=!0){if(this._deleted)return new KE(kh());{const o=sv(e,this._appId,r,i,t,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,i).getPromise()}}const gc="@firebase/storage",_c="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv="storage";function lv(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new cv(t,r,i,e,It)}function hv(){mt(new Xe(uv,lv,"PUBLIC").setMultipleInstances(!0)),we(gc,_c,""),we(gc,_c,"esm2017")}hv();const gv=Dh("firebase",()=>{const n=Nh();Pc(n.public.firebase);const e=Pm(),t=_E(),r={login:{async email(l){return await lp(e,l.email,l.password)}},register:{async email(l){return await up(e,l.email,l.password)}}},i=Ho(!1),s=Ho(!1),o=cr({busy:!1,success:!1,error:!1,async register(l={},h="email"){l={email:"",password:"",...l},this.busy=!0;try{typeof r.register[h]<"u"&&await r.register[h](l)}catch(d){this.error=this.exception(d)}this.busy=!1},async login(l={},h="email"){l={email:"",password:"",...l},this.busy=!0,this.success=!1,this.error=!1;try{typeof r.login[h]<"u"&&(await r.login[h](l),this.success=!0,u.dispatch("loginSuccess"))}catch(d){this.error=await this.exception(d),u.dispatch("loginError")}this.busy=!1},async logout(){const l=await pp(e);return u.dispatch("logout"),l},async exception(l){return{code:"",message:"",customData:{},name:!1,...l}}}),a=cr({busy:!1,error:!1,async find(l,h,d="uid"){const p=dn(t,l,h),v=await Yi(p);return v.exists()?v.data():!1},async save(l,h={}){h={uid:null,name:"",...h};const d=lc(t,l);if(!h.uid){const p=await xE(d,h);h.uid=p.id}return await LE(dn(t,l,h.uid),h),h},async delete(l,h,d="uid"){},async search(l,h={}){h={limit:5,where:[],startAfter:!1,endAt:!1,...h};let d=!1,p=!1;const v=lc(t,l);let I=[];h.orderBy&&I.push(CE.apply(null,h.orderBy)),h.where.length>0&&h.where.map(V=>{I.push(SE.apply(null,V))}),h.startAfter&&I.push(kE(await Yi(dn(t,l,h.startAfter)))),h.endAt&&I.push(DE(await Yi(dn(t,l,h.endAt)))),h.limit&&I.push(bE(h.limit)),this.busy=!0;const y=PE.apply(null,[v,...I]),D=await ME(y);let M=[];return D.forEach(V=>{M.push({...V.data(),uid:V.id})}),M.length==h.limit&&(p=JSON.parse(JSON.stringify(h)),p.startAfter=M[M.length-1].uid,p.endAt=!1),this.busy=!1,{query:h,data:M,prev:d,next:p}}}),c=cr({}),u=cr({events:[],async on(l,h){this.events.push({name:l,callback:h})},async dispatch(l){this.events.map(({name:h,callback:d})=>{h==l&&d()})}});return fp(e,l=>{if(i.value=!0,!l){s.value=!1,u.dispatch("onAuthStateChanged");return}s.value={uid:l.uid,name:(l.providerData[0]?l.providerData[0].displayName:null)||l.email,email:l.email,emailVerified:l.emailVerified,phoneNumber:l.providerData[0]?l.providerData[0].phoneNumber:"",photoURL:l.providerData[0]?l.providerData[0].photoURL:""},u.dispatch("onAuthStateChanged")}),{ready:i,user:s,auth:o,firestore:a,storage:c,event:u}});export{gv as u};
