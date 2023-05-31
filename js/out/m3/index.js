"use strict";(()=>{function s(o,e,t,r){var i=arguments.length,a=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,e,t,r);else for(var d=o.length-1;d>=0;d--)(n=o[d])&&(a=(i<3?n(a):i>3?n(e,t,a):n(e,t))||a);return i>3&&a&&Object.defineProperty(e,t,a),a}var _=o=>e=>typeof e=="function"?((t,r)=>(customElements.define(t,r),r))(o,e):((t,r)=>{let{kind:i,elements:a}=r;return{kind:i,elements:a,finisher(n){customElements.define(t,n)}}})(o,e);var Yt=(o,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,o)}};function p(o){return(e,t)=>t!==void 0?((r,i,a)=>{i.constructor.createProperty(a,r)})(o,e,t):Yt(o,e)}function w(o){return p({...o,state:!0})}var P=({finisher:o,descriptor:e})=>(t,r)=>{var i;if(r===void 0){let a=(i=t.originalKey)!==null&&i!==void 0?i:t.key,n=e!=null?{kind:"method",placement:"prototype",key:a,descriptor:e(t.key)}:{...t,key:a};return o!=null&&(n.finisher=function(d){o(d,a)}),n}{let a=t.constructor;e!==void 0&&Object.defineProperty(t,r,e(r)),o?.(a,r)}};function O(o,e){return P({descriptor:t=>{let r={get(){var i,a;return(a=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(o))!==null&&a!==void 0?a:null},enumerable:!0,configurable:!0};if(e){let i=typeof t=="symbol"?Symbol():"__"+t;r.get=function(){var a,n;return this[i]===void 0&&(this[i]=(n=(a=this.renderRoot)===null||a===void 0?void 0:a.querySelector(o))!==null&&n!==void 0?n:null),this[i]}}return r}})}function J(o){return P({descriptor:e=>({async get(){var t;return await this.updateComplete,(t=this.renderRoot)===null||t===void 0?void 0:t.querySelector(o)},enumerable:!0,configurable:!0})})}var Ee,Rr=((Ee=window.HTMLSlotElement)===null||Ee===void 0?void 0:Ee.prototype.assignedElements)!=null?(o,e)=>o.assignedElements(e):(o,e)=>o.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE);var ne=window,se=ne.ShadowRoot&&(ne.ShadyCSS===void 0||ne.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Se=Symbol(),Je=new WeakMap,Q=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==Se)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(se&&e===void 0){let r=t!==void 0&&t.length===1;r&&(e=Je.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Je.set(t,e))}return e}toString(){return this.cssText}},Qe=o=>new Q(typeof o=="string"?o:o+"",void 0,Se),m=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((r,i,a)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[a+1],o[0]);return new Q(t,o,Se)},Ce=(o,e)=>{se?o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{let r=document.createElement("style"),i=ne.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=t.cssText,o.appendChild(r)})},le=se?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return Qe(t)})(o):o;var ze,ce=window,et=ce.trustedTypes,Zt=et?et.emptyScript:"",tt=ce.reactiveElementPolyfillSupport,Te={toAttribute(o,e){switch(e){case Boolean:o=o?Zt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},rt=(o,e)=>e!==o&&(e==e||o==o),Pe={attribute:!0,type:String,converter:Te,reflect:!1,hasChanged:rt},z=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((t,r)=>{let i=this._$Ep(r,t);i!==void 0&&(this._$Ev.set(i,r),e.push(i))}),e}static createProperty(e,t=Pe){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){let r=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,r,t);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(i){let a=this[e];this[t]=i,this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Pe}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let t=this.properties,r=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(let i of r)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let i of r)t.unshift(le(i))}else e!==void 0&&t.push(le(e));return t}static _$Ep(e,t){let r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,r;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;let t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Ce(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostConnected)===null||r===void 0?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostDisconnected)===null||r===void 0?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t,r=Pe){var i;let a=this.constructor._$Ep(e,r);if(a!==void 0&&r.reflect===!0){let n=(((i=r.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?r.converter:Te).toAttribute(t,r.type);this._$El=e,n==null?this.removeAttribute(a):this.setAttribute(a,n),this._$El=null}}_$AK(e,t){var r;let i=this.constructor,a=i._$Ev.get(e);if(a!==void 0&&this._$El!==a){let n=i.getPropertyOptions(a),d=typeof n.converter=="function"?{fromAttribute:n.converter}:((r=n.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?n.converter:Te;this._$El=a,this[a]=d.fromAttribute(t,n.type),this._$El=null}}requestUpdate(e,t,r){let i=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||rt)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,a)=>this[a]=i),this._$Ei=void 0);let t=!1,r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var a;return(a=i.hostUpdate)===null||a===void 0?void 0:a.call(i)}),this.update(r)):this._$Ek()}catch(i){throw t=!1,this._$Ek(),i}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var i;return(i=r.hostUpdated)===null||i===void 0?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,r)=>this._$EO(r,this[r],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};z.finalized=!0,z.elementProperties=new Map,z.elementStyles=[],z.shadowRootOptions={mode:"open"},tt?.({ReactiveElement:z}),((ze=ce.reactiveElementVersions)!==null&&ze!==void 0?ze:ce.reactiveElementVersions=[]).push("1.6.1");var Re,de=window,W=de.trustedTypes,ot=W?W.createPolicy("lit-html",{createHTML:o=>o}):void 0,Me="$lit$",T=`lit$${(Math.random()+"").slice(9)}$`,dt="?"+T,Xt=`<${dt}>`,N=document,te=()=>N.createComment(""),re=o=>o===null||typeof o!="object"&&typeof o!="function",pt=Array.isArray,Jt=o=>pt(o)||typeof o?.[Symbol.iterator]=="function",Ie=`[ 	
\f\r]`,ee=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,it=/-->/g,at=/>/g,L=RegExp(`>|${Ie}(?:([^\\s"'>=/]+)(${Ie}*=${Ie}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),nt=/'/g,st=/"/g,ut=/^(?:script|style|textarea|title)$/i,ht=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),f=ht(1),vt=ht(2),E=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),lt=new WeakMap,B=N.createTreeWalker(N,129,null,!1),Qt=(o,e)=>{let t=o.length-1,r=[],i,a=e===2?"<svg>":"",n=ee;for(let c=0;c<t;c++){let l=o[c],A,v,b=-1,S=0;for(;S<l.length&&(n.lastIndex=S,v=n.exec(l),v!==null);)S=n.lastIndex,n===ee?v[1]==="!--"?n=it:v[1]!==void 0?n=at:v[2]!==void 0?(ut.test(v[2])&&(i=RegExp("</"+v[2],"g")),n=L):v[3]!==void 0&&(n=L):n===L?v[0]===">"?(n=i??ee,b=-1):v[1]===void 0?b=-2:(b=n.lastIndex-v[2].length,A=v[1],n=v[3]===void 0?L:v[3]==='"'?st:nt):n===st||n===nt?n=L:n===it||n===at?n=ee:(n=L,i=void 0);let V=n===L&&o[c+1].startsWith("/>")?" ":"";a+=n===ee?l+Xt:b>=0?(r.push(A),l.slice(0,b)+Me+l.slice(b)+T+V):l+T+(b===-2?(r.push(void 0),c):V)}let d=a+(o[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return[ot!==void 0?ot.createHTML(d):d,r]},D=class{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let a=0,n=0,d=e.length-1,c=this.parts,[l,A]=Qt(e,t);if(this.el=D.createElement(l,r),B.currentNode=this.el.content,t===2){let v=this.el.content,b=v.firstChild;b.remove(),v.append(...b.childNodes)}for(;(i=B.nextNode())!==null&&c.length<d;){if(i.nodeType===1){if(i.hasAttributes()){let v=[];for(let b of i.getAttributeNames())if(b.endsWith(Me)||b.startsWith(T)){let S=A[n++];if(v.push(b),S!==void 0){let V=i.getAttribute(S.toLowerCase()+Me).split(T),G=/([.?@])?(.*)/.exec(S);c.push({type:1,index:a,name:G[2],strings:V,ctor:G[1]==="."?Le:G[1]==="?"?Be:G[1]==="@"?Ne:Y})}else c.push({type:6,index:a})}for(let b of v)i.removeAttribute(b)}if(ut.test(i.tagName)){let v=i.textContent.split(T),b=v.length-1;if(b>0){i.textContent=W?W.emptyScript:"";for(let S=0;S<b;S++)i.append(v[S],te()),B.nextNode(),c.push({type:2,index:++a});i.append(v[b],te())}}}else if(i.nodeType===8)if(i.data===dt)c.push({type:2,index:a});else{let v=-1;for(;(v=i.data.indexOf(T,v+1))!==-1;)c.push({type:7,index:a}),v+=T.length-1}a++}}static createElement(e,t){let r=N.createElement("template");return r.innerHTML=e,r}};function K(o,e,t=o,r){var i,a,n,d;if(e===E)return e;let c=r!==void 0?(i=t._$Co)===null||i===void 0?void 0:i[r]:t._$Cl,l=re(e)?void 0:e._$litDirective$;return c?.constructor!==l&&((a=c?._$AO)===null||a===void 0||a.call(c,!1),l===void 0?c=void 0:(c=new l(o),c._$AT(o,t,r)),r!==void 0?((n=(d=t)._$Co)!==null&&n!==void 0?n:d._$Co=[])[r]=c:t._$Cl=c),c!==void 0&&(e=K(o,c._$AS(o,e.values),c,r)),e}var Oe=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;let{el:{content:r},parts:i}=this._$AD,a=((t=e?.creationScope)!==null&&t!==void 0?t:N).importNode(r,!0);B.currentNode=a;let n=B.nextNode(),d=0,c=0,l=i[0];for(;l!==void 0;){if(d===l.index){let A;l.type===2?A=new H(n,n.nextSibling,this,e):l.type===1?A=new l.ctor(n,l.name,l.strings,this,e):l.type===6&&(A=new De(n,this,e)),this._$AV.push(A),l=i[++c]}d!==l?.index&&(n=B.nextNode(),d++)}return B.currentNode=N,a}v(e){let t=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},H=class{constructor(e,t,r,i){var a;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cp=(a=i?.isConnected)===null||a===void 0||a}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=K(this,e,t),re(e)?e===u||e==null||e===""?(this._$AH!==u&&this._$AR(),this._$AH=u):e!==this._$AH&&e!==E&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Jt(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==u&&re(this._$AH)?this._$AA.nextSibling.data=e:this.$(N.createTextNode(e)),this._$AH=e}g(e){var t;let{values:r,_$litType$:i}=e,a=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=D.createElement(i.h,this.options)),i);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===a)this._$AH.v(r);else{let n=new Oe(a,this),d=n.u(this.options);n.v(r),this.$(d),this._$AH=n}}_$AC(e){let t=lt.get(e.strings);return t===void 0&&lt.set(e.strings,t=new D(e)),t}T(e){pt(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,i=0;for(let a of e)i===t.length?t.push(r=new H(this.k(te()),this.k(te()),this,this.options)):r=t[i],r._$AI(a),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,t);e&&e!==this._$AB;){let i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Y=class{constructor(e,t,r,i,a){this.type=1,this._$AH=u,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=a,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,i){let a=this.strings,n=!1;if(a===void 0)e=K(this,e,t,0),n=!re(e)||e!==this._$AH&&e!==E,n&&(this._$AH=e);else{let d=e,c,l;for(e=a[0],c=0;c<a.length-1;c++)l=K(this,d[r+c],t,c),l===E&&(l=this._$AH[c]),n||(n=!re(l)||l!==this._$AH[c]),l===u?e=u:e!==u&&(e+=(l??"")+a[c+1]),this._$AH[c]=l}n&&!i&&this.j(e)}j(e){e===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Le=class extends Y{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===u?void 0:e}},er=W?W.emptyScript:"",Be=class extends Y{constructor(){super(...arguments),this.type=4}j(e){e&&e!==u?this.element.setAttribute(this.name,er):this.element.removeAttribute(this.name)}},Ne=class extends Y{constructor(e,t,r,i,a){super(e,t,r,i,a),this.type=5}_$AI(e,t=this){var r;if((e=(r=K(this,e,t,0))!==null&&r!==void 0?r:u)===E)return;let i=this._$AH,a=e===u&&i!==u||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==u&&(i===u||a);a&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},De=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){K(this,e)}};var ct=de.litHtmlPolyfillSupport;ct?.(D,H),((Re=de.litHtmlVersions)!==null&&Re!==void 0?Re:de.litHtmlVersions=[]).push("2.7.4");var mt=(o,e,t)=>{var r,i;let a=(r=t?.renderBefore)!==null&&r!==void 0?r:e,n=a._$litPart$;if(n===void 0){let d=(i=t?.renderBefore)!==null&&i!==void 0?i:null;a._$litPart$=n=new H(e.insertBefore(te(),d),d,void 0,t??{})}return n._$AI(o),n};var He,Ue;var y=class extends z{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;let r=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=r.firstChild),r}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=mt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return E}};y.finalized=!0,y._$litElement$=!0,(He=globalThis.litElementHydrateSupport)===null||He===void 0||He.call(globalThis,{LitElement:y});var ft=globalThis.litElementPolyfillSupport;ft?.({LitElement:y});((Ue=globalThis.litElementVersions)!==null&&Ue!==void 0?Ue:globalThis.litElementVersions=[]).push("3.3.2");var pe=class extends y{render(){return f`<span><slot></slot></span>`}};var yt=m`:host{--_color: var(--md-icon-color, inherit);--_font: var(--md-icon-font, "Material Symbols Outlined");--_font-variation-settings: var(--md-icon-font-variation-settings, inherit);--_size: var(--md-icon-size, 24px);--_weight: var(--md-icon-weight, 400);display:inline-flex;color:var(--_color);font-family:var(--_font);font-weight:var(--_weight);font-style:normal;font-size:var(--_size);font-variation-settings:var(--_font-variation-settings);line-height:1;overflow:hidden;letter-spacing:normal;text-transform:none;white-space:nowrap;word-wrap:normal;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale}span ::slotted(svg){fill:currentColor}span ::slotted(*){height:var(--_size);width:var(--_size)}/*# sourceMappingURL=icon-styles.css.map */
`;var ue=class extends pe{};ue.styles=[yt];ue=s([_("md-icon")],ue);var bt=m`:host{--_container-color: var(--md-filled-icon-button-container-color, var(--md-sys-color-primary, #6750a4));--_container-shape: var(--md-filled-icon-button-container-shape, 9999px);--_container-size: var(--md-filled-icon-button-container-size, 40px);--_disabled-container-color: var(--md-filled-icon-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-icon-button-disabled-container-opacity, 0.12);--_disabled-icon-color: var(--md-filled-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-icon-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-icon-button-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_focus-state-layer-color: var(--md-filled-icon-button-focus-state-layer-color, var(--md-sys-color-on-primary, #fff));--_focus-state-layer-opacity: var(--md-filled-icon-button-focus-state-layer-opacity, 0.12);--_hover-icon-color: var(--md-filled-icon-button-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-color: var(--md-filled-icon-button-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-opacity: var(--md-filled-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-filled-icon-button-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-size: var(--md-filled-icon-button-icon-size, 24px);--_pressed-icon-color: var(--md-filled-icon-button-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-color: var(--md-filled-icon-button-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-opacity: var(--md-filled-icon-button-pressed-state-layer-opacity, 0.12);--_selected-container-color: var(--md-filled-icon-button-selected-container-color, var(--md-sys-color-primary, #6750a4));--_toggle-selected-focus-icon-color: var(--md-filled-icon-button-toggle-selected-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-focus-state-layer-color: var(--md-filled-icon-button-toggle-selected-focus-state-layer-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-hover-icon-color: var(--md-filled-icon-button-toggle-selected-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-hover-state-layer-color: var(--md-filled-icon-button-toggle-selected-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-icon-color: var(--md-filled-icon-button-toggle-selected-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-pressed-icon-color: var(--md-filled-icon-button-toggle-selected-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-pressed-state-layer-color: var(--md-filled-icon-button-toggle-selected-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_toggle-unselected-focus-icon-color: var(--md-filled-icon-button-toggle-unselected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-unselected-focus-state-layer-color: var(--md-filled-icon-button-toggle-unselected-focus-state-layer-color, var(--md-sys-color-primary, #6750a4));--_toggle-unselected-hover-icon-color: var(--md-filled-icon-button-toggle-unselected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-unselected-hover-state-layer-color: var(--md-filled-icon-button-toggle-unselected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_toggle-unselected-icon-color: var(--md-filled-icon-button-toggle-unselected-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-unselected-pressed-icon-color: var(--md-filled-icon-button-toggle-unselected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-unselected-pressed-state-layer-color: var(--md-filled-icon-button-toggle-unselected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_unselected-container-color: var(--md-filled-icon-button-unselected-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_container-shape-start-start: var( --md-filled-icon-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-filled-icon-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-filled-icon-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-filled-icon-button-container-shape-end-start, var(--_container-shape) )}.icon-button{color:var(--_icon-color);--md-ripple-focus-color: var(--_focus-state-layer-color);--md-ripple-focus-opacity: var(--_focus-state-layer-opacity);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.icon-button:hover{color:var(--_hover-icon-color)}.icon-button:focus{color:var(--_focus-icon-color)}.icon-button:active{color:var(--_pressed-icon-color)}.icon-button:disabled{color:var(--_disabled-icon-color)}.icon-button::before{background-color:var(--_container-color);border-radius:inherit;content:"";inset:0;position:absolute;z-index:-1}.icon-button:disabled::before{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}.icon-button:disabled .icon{opacity:var(--_disabled-icon-opacity)}.toggle-filled{--md-ripple-focus-color: var(--_toggle-unselected-focus-state-layer-color);--md-ripple-hover-color: var(--_toggle-unselected-hover-state-layer-color);--md-ripple-pressed-color: var(--_toggle-unselected-pressed-state-layer-color)}.toggle-filled:not(:disabled){color:var(--_toggle-unselected-icon-color)}.toggle-filled:not(:disabled):hover{color:var(--_toggle-unselected-hover-icon-color)}.toggle-filled:not(:disabled):focus{color:var(--_toggle-unselected-focus-icon-color)}.toggle-filled:not(:disabled):active{color:var(--_toggle-unselected-pressed-icon-color)}.toggle-filled:not(:disabled)::before{background-color:var(--_unselected-container-color)}.selected{--md-ripple-focus-color: var(--_toggle-selected-focus-state-layer-color);--md-ripple-hover-color: var(--_toggle-selected-hover-state-layer-color);--md-ripple-pressed-color: var(--_toggle-selected-pressed-state-layer-color)}.selected:not(:disabled){color:var(--_toggle-selected-icon-color)}.selected:not(:disabled):hover{color:var(--_toggle-selected-hover-icon-color)}.selected:not(:disabled):focus{color:var(--_toggle-selected-focus-icon-color)}.selected:not(:disabled):active{color:var(--_toggle-selected-pressed-icon-color)}.selected:not(:disabled)::before{background-color:var(--_selected-container-color)}/*# sourceMappingURL=filled-styles.css.map */
`;var U=class extends y{constructor(){super(...arguments),this.visible=!1,this.inward=!1,this.htmlFor=null,this.currentControl=null}get control(){return this.hasAttribute("for")?this.htmlFor?this.getRootNode().querySelector(`#${this.htmlFor}`):null:this.currentControl||this.parentElement}attach(e){e!==this.currentControl&&(this.setCurrentControl(e),this.removeAttribute("for"))}detach(){this.setCurrentControl(null),this.setAttribute("for","")}connectedCallback(){super.connectedCallback(),this.setCurrentControl(this.control)}disconnectedCallback(){super.disconnectedCallback(),this.setCurrentControl(null)}updated(e){if(e.has("htmlFor")){let{control:t}=this;t&&this.setCurrentControl(t)}}handleEvent(e){if(!e[_t]){switch(e.type){default:return;case"focusin":this.visible=this.control?.matches(":focus-visible")??!1;break;case"focusout":case"pointerdown":this.visible=!1;break}e[_t]=!0}}setCurrentControl(e){for(let t of["focusin","focusout","pointerdown"])this.currentControl?.removeEventListener(t,this),e?.addEventListener(t,this);this.currentControl=e}};s([p({type:Boolean,reflect:!0})],U.prototype,"visible",void 0);s([p({type:Boolean,reflect:!0})],U.prototype,"inward",void 0);s([p({attribute:"for",reflect:!0})],U.prototype,"htmlFor",void 0);var _t=Symbol("handledByFocusRing");var gt=m`:host{--_active-width: var(--md-focus-ring-active-width, 8px);--_color: var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));--_duration: var(--md-focus-ring-duration, 600ms);--_inward-offset: var(--md-focus-ring-inward-offset, 0px);--_outward-offset: var(--md-focus-ring-outward-offset, 2px);--_shape: var(--md-focus-ring-shape, 9999px);--_width: var(--md-focus-ring-width, 3px);--_shape-start-start: var(--md-focus-ring-shape-start-start, var(--_shape));--_shape-start-end: var(--md-focus-ring-shape-start-end, var(--_shape));--_shape-end-end: var(--md-focus-ring-shape-end-end, var(--_shape));--_shape-end-start: var(--md-focus-ring-shape-end-start, var(--_shape));animation-delay:0s,calc(var(--_duration)*.25);animation-duration:calc(var(--_duration)*.25),calc(var(--_duration)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--_color);display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--_shape-end-end) + var(--_outward-offset));border-end-start-radius:calc(var(--_shape-end-start) + var(--_outward-offset));border-start-end-radius:calc(var(--_shape-start-end) + var(--_outward-offset));border-start-start-radius:calc(var(--_shape-start-start) + var(--_outward-offset));inset:calc(-1*(var(--_outward-offset)));outline:var(--_width) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--_shape-end-end) - var(--_inward-offset));border-end-start-radius:calc(var(--_shape-end-start) - var(--_inward-offset));border-start-end-radius:calc(var(--_shape-start-end) - var(--_inward-offset));border-start-start-radius:calc(var(--_shape-start-start) - var(--_inward-offset));border:var(--_width) solid currentColor;inset:var(--_inward-offset)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--_active-width)}}@keyframes outward-shrink{from{outline-width:var(--_active-width)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--_active-width)}}@keyframes inward-shrink{from{border-width:var(--_active-width)}}@media(prefers-reduced-motion){:host{animation:none}}/*# sourceMappingURL=focus-ring-styles.css.map */
`;var je=class extends U{};je.styles=[gt];je=s([_("md-focus-ring")],je);var Z={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},X=o=>(...e)=>({_$litDirective$:o,values:e}),R=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var x=X(class extends R{constructor(o){var e;if(super(o),o.type!==Z.ATTRIBUTE||o.name!=="class"||((e=o.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(e=>o[e]).join(" ")+" "}update(o,[e]){var t,r;if(this.it===void 0){this.it=new Set,o.strings!==void 0&&(this.nt=new Set(o.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(let a in e)e[a]&&!(!((t=this.nt)===null||t===void 0)&&t.has(a))&&this.it.add(a);return this.render(e)}let i=o.element.classList;this.it.forEach(a=>{a in e||(i.remove(a),this.it.delete(a))});for(let a in e){let n=!!e[a];n===this.it.has(a)||!((r=this.nt)===null||r===void 0)&&r.has(a)||(n?(i.add(a),this.it.add(a)):(i.remove(a),this.it.delete(a)))}return E}});var wt={STANDARD:"cubic-bezier(0.2, 0, 0, 1)",STANDARD_ACCELERATE:"cubic-bezier(.3,0,1,1)",STANDARD_DECELERATE:"cubic-bezier(0,0,0,1)",EMPHASIZED:"cubic-bezier(.3,0,0,1)",EMPHASIZED_ACCELERATE:"cubic-bezier(.3,0,.8,.15)",EMPHASIZED_DECELERATE:"cubic-bezier(.05,.7,.1,1)"};var tr=450,xt=225,rr=.2,or=10,ir=75,ar=.35,nr="::after",sr="forwards",k;(function(o){o[o.INACTIVE=0]="INACTIVE",o[o.TOUCH_DELAY=1]="TOUCH_DELAY",o[o.HOLDING=2]="HOLDING",o[o.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"})(k||(k={}));var lr=150,C=class extends y{constructor(){super(...arguments),this.unbounded=!1,this.disabled=!1,this.hovered=!1,this.focused=!1,this.pressed=!1,this.rippleSize="",this.rippleScale="",this.initialSize=0,this.state=k.INACTIVE,this.checkBoundsAfterContextMenu=!1}handlePointerenter(e){this.shouldReactToEvent(e)&&(this.hovered=!0)}handlePointerleave(e){this.shouldReactToEvent(e)&&(this.hovered=!1,this.state!==k.INACTIVE&&this.endPressAnimation())}handleFocusin(){this.focused=!0}handleFocusout(){this.focused=!1}handlePointerup(e){if(this.shouldReactToEvent(e)){if(this.state===k.HOLDING){this.state=k.WAITING_FOR_CLICK;return}if(this.state===k.TOUCH_DELAY){this.state=k.WAITING_FOR_CLICK,this.startPressAnimation(this.rippleStartEvent);return}}}async handlePointerdown(e){if(this.shouldReactToEvent(e)){if(this.rippleStartEvent=e,!this.isTouch(e)){this.state=k.WAITING_FOR_CLICK,this.startPressAnimation(e);return}this.checkBoundsAfterContextMenu&&!this.inBounds(e)||(this.checkBoundsAfterContextMenu=!1,this.state=k.TOUCH_DELAY,await new Promise(t=>{setTimeout(t,lr)}),this.state===k.TOUCH_DELAY&&(this.state=k.HOLDING,this.startPressAnimation(e)))}}handleClick(){if(!this.disabled){if(this.state===k.WAITING_FOR_CLICK){this.endPressAnimation();return}this.state===k.INACTIVE&&(this.startPressAnimation(),this.endPressAnimation())}}handlePointercancel(e){this.shouldReactToEvent(e)&&this.endPressAnimation()}handleContextmenu(){this.disabled||(this.checkBoundsAfterContextMenu=!0,this.endPressAnimation())}render(){let e={hovered:this.hovered,focused:this.focused,pressed:this.pressed,unbounded:this.unbounded};return f`<div class="surface ${x(e)}"></div>`}update(e){e.has("disabled")&&this.disabled&&(this.hovered=!1,this.focused=!1,this.pressed=!1),super.update(e)}getDimensions(){return(this.parentElement??this).getBoundingClientRect()}determineRippleSize(){let{height:e,width:t}=this.getDimensions(),r=Math.max(e,t),i=Math.max(ar*r,ir),a=r,n=Math.floor(r*rr);a=Math.sqrt(t**2+e**2)+or,this.unbounded&&(n=n-n%2),this.initialSize=n,this.rippleScale=`${(a+i)/n}`,this.rippleSize=`${this.initialSize}px`}getNormalizedPointerEventCoords(e){let{scrollX:t,scrollY:r}=window,{left:i,top:a}=this.getDimensions(),n=t+i,d=r+a,{pageX:c,pageY:l}=e;return{x:c-n,y:l-d}}getTranslationCoordinates(e){let{height:t,width:r}=this.getDimensions(),i={x:(r-this.initialSize)/2,y:(t-this.initialSize)/2},a;return e instanceof PointerEvent?a=this.getNormalizedPointerEventCoords(e):a={x:r/2,y:t/2},a={x:a.x-this.initialSize/2,y:a.y-this.initialSize/2},{startPoint:a,endPoint:i}}startPressAnimation(e){if(!this.mdRoot)return;this.pressed=!0,this.growAnimation?.cancel(),this.determineRippleSize();let{startPoint:t,endPoint:r}=this.getTranslationCoordinates(e),i=`${t.x}px, ${t.y}px`,a=`${r.x}px, ${r.y}px`;this.growAnimation=this.mdRoot.animate({top:[0,0],left:[0,0],height:[this.rippleSize,this.rippleSize],width:[this.rippleSize,this.rippleSize],transform:[`translate(${i}) scale(1)`,`translate(${a}) scale(${this.rippleScale})`]},{pseudoElement:nr,duration:tr,easing:wt.STANDARD,fill:sr})}async endPressAnimation(){this.state=k.INACTIVE;let e=this.growAnimation,t=e?.currentTime??1/0;if(t>=xt){this.pressed=!1;return}await new Promise(r=>{setTimeout(r,xt-t)}),this.growAnimation===e&&(this.pressed=!1)}shouldReactToEvent(e){if(this.disabled||!e.isPrimary||this.rippleStartEvent&&this.rippleStartEvent.pointerId!==e.pointerId)return!1;if(e.type==="pointerenter"||e.type==="pointerleave")return!this.isTouch(e);let t=e.buttons===1;return this.isTouch(e)||t}inBounds({x:e,y:t}){let{top:r,left:i,bottom:a,right:n}=this.getBoundingClientRect();return e>=i&&e<=n&&t>=r&&t<=a}isTouch({pointerType:e}){return e==="touch"}};s([p({type:Boolean,reflect:!0})],C.prototype,"unbounded",void 0);s([p({type:Boolean,reflect:!0})],C.prototype,"disabled",void 0);s([w()],C.prototype,"hovered",void 0);s([w()],C.prototype,"focused",void 0);s([w()],C.prototype,"pressed",void 0);s([O(".surface")],C.prototype,"mdRoot",void 0);var kt=m`:host{--_focus-color: var(--md-ripple-focus-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-opacity: var(--md-ripple-focus-opacity, 0.12);--_hover-color: var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-opacity: var(--md-ripple-hover-opacity, 0.08);--_pressed-color: var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-opacity: var(--md-ripple-pressed-opacity, 0.12);display:flex}:host([disabled]){opacity:0}:host,.surface{border-radius:inherit;position:absolute;inset:0;pointer-events:none;overflow:hidden}.surface{outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{position:absolute;opacity:0;pointer-events:none;content:""}.surface::before{background-color:var(--_hover-color);transition:opacity 15ms linear,background-color 15ms linear;inset:0}.surface::after{background:radial-gradient(closest-side, var(--_pressed-color) max(100% - 70px, 65%), transparent 100%);transition:opacity 375ms linear;transform-origin:center center}.hovered::before{background-color:var(--_hover-color);opacity:var(--_hover-opacity)}.focused::before{background-color:var(--_focus-color);opacity:var(--_focus-opacity);transition-duration:75ms}.pressed::after{opacity:var(--_pressed-opacity);transition-duration:105ms}@media screen and (forced-colors: active){:host{display:none}}/*# sourceMappingURL=ripple-styles.css.map */
`;var Fe=class extends C{};Fe.styles=[kt];Fe=s([_("md-ripple")],Fe);function j(o,e,t){return o?e():t?.()}var At=Symbol.for(""),cr=o=>{if(o?.r===At)return o?._$litStatic$};var qe=(o,...e)=>({_$litStatic$:e.reduce((t,r,i)=>t+(a=>{if(a._$litStatic$!==void 0)return a._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${a}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+o[i+1],o[0]),r:At}),$t=new Map,Et=o=>(e,...t)=>{let r=t.length,i,a,n=[],d=[],c,l=0,A=!1;for(;l<r;){for(c=e[l];l<r&&(a=t[l],(i=cr(a))!==void 0);)c+=i+e[++l],A=!0;l!==r&&d.push(a),n.push(c),l++}if(l===r&&n.push(e[r]),A){let v=n.join("$$lit$$");(e=$t.get(v))===void 0&&(n.raw=n,$t.set(v,e=n)),t=d}return o(e,...t)},St=Et(f),si=Et(vt);var Ve=["ariaAtomic","ariaAutoComplete","ariaBusy","ariaChecked","ariaColCount","ariaColIndex","ariaColSpan","ariaCurrent","ariaDisabled","ariaExpanded","ariaHasPopup","ariaHidden","ariaInvalid","ariaKeyShortcuts","ariaLabel","ariaLevel","ariaLive","ariaModal","ariaMultiLine","ariaMultiSelectable","ariaOrientation","ariaPlaceholder","ariaPosInSet","ariaPressed","ariaReadOnly","ariaRequired","ariaRoleDescription","ariaRowCount","ariaRowIndex","ariaRowSpan","ariaSelected","ariaSetSize","ariaSort","ariaValueMax","ariaValueMin","ariaValueNow","ariaValueText"],pi=Ve.map(Ge);function Ge(o){return o.replace("aria","aria-").replace(/Elements?/g,"").toLowerCase()}function I(o){for(let e of Ve)o.createProperty(e,{attribute:Ge(e),reflect:!0});o.addInitializer(e=>{let t={hostConnected(){e.setAttribute("role","presentation")}};e.addController(t)})}function We(o,e=!0){return e&&getComputedStyle(o).getPropertyValue("direction").trim()==="rtl"}var Ke=class extends R{constructor(e){if(super(e),this.rippleGetter=async()=>null,e.type!==Z.ELEMENT)throw new Error("The `ripple` directive must be used on an element")}render(e){return E}async handleEvent(e){let t=await this.rippleGetter();if(t)switch(e.type){case"click":t.handleClick();break;case"contextmenu":t.handleContextmenu();break;case"pointercancel":t.handlePointercancel(e);break;case"pointerdown":await t.handlePointerdown(e);break;case"pointerenter":t.handlePointerenter(e);break;case"pointerleave":t.handlePointerleave(e);break;case"pointerup":t.handlePointerup(e);break;default:break}}update(e,[t]){return this.element||(this.element=e.element,this.element.addEventListener("click",this),this.element.addEventListener("contextmenu",this),this.element.addEventListener("pointercancel",this),this.element.addEventListener("pointerdown",this),this.element.addEventListener("pointerenter",this),this.element.addEventListener("pointerleave",this),this.element.addEventListener("pointerup",this)),this.rippleGetter=typeof t=="function"?t:()=>t,E}},oe=X(Ke);var Ct,g=class extends y{constructor(){super(...arguments),this.disabled=!1,this.flipIconInRtl=!1,this.href="",this.target="",this.toggle=!1,this.selected=!1,this.showRipple=!1,this.flipIcon=We(this,this.flipIconInRtl),this.getRipple=()=>(this.showRipple=!0,this.ripple),this.renderRipple=()=>f`<md-ripple ?disabled="${!this.href&&this.disabled}"></md-ripple>`}willUpdate(){this.href&&(this.disabled=!1)}render(){let e=this.href?qe`div`:qe`button`,{ariaLabel:t,ariaHasPopup:r,ariaExpanded:i}=this,a=t&&this.selectedAriaLabel,n=a?u:this.selected,d=u;return this.href||(d=a&&this.selected?this.selectedAriaLabel:t),St`<${e}
        class="icon-button ${x(this.getRenderClasses())}"
        id="button"
        aria-label="${d||u}"
        aria-haspopup="${!this.href&&r||u}"
        aria-expanded="${!this.href&&i||u}"
        aria-pressed="${n}"
        ?disabled="${!this.href&&this.disabled}"
        @click="${this.handleClick}"
        ${oe(this.getRipple)}>
        ${this.renderFocusRing()}
        ${j(this.showRipple,this.renderRipple)}
        ${this.selected?u:this.renderIcon()}
        ${this.selected?this.renderSelectedIcon():u}
        ${this.renderTouchTarget()}
        ${this.href&&this.renderLink()}
  </${e}>`}renderLink(){let{ariaLabel:e}=this;return f`
      <a class="link"
        id="link"
        href="${this.href}"
        target="${this.target||u}"
        aria-label="${e||u}"
        ${oe(this.getRipple)}
      ></a>
    `}getRenderClasses(){return{"flip-icon":this.flipIcon,selected:this.toggle&&this.selected}}renderIcon(){return f`<span class="icon"><slot></slot></span>`}renderSelectedIcon(){return f`<span class="icon icon--selected"><slot name="selectedIcon"><slot></slot></slot></span>`}renderTouchTarget(){return f`<span class="touch"></span>`}renderFocusRing(){return f`<md-focus-ring for=${this.href?"link":"button"}></md-focus-ring>`}connectedCallback(){this.flipIcon=We(this,this.flipIconInRtl),super.connectedCallback()}handleClick(){!this.toggle||this.disabled||(this.selected=!this.selected,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0})))}};Ct=g;I(Ct);s([p({type:Boolean,reflect:!0})],g.prototype,"disabled",void 0);s([p({type:Boolean})],g.prototype,"flipIconInRtl",void 0);s([p()],g.prototype,"href",void 0);s([p()],g.prototype,"target",void 0);s([p({attribute:"selected-aria-label",reflect:!0})],g.prototype,"selectedAriaLabel",void 0);s([p({type:Boolean})],g.prototype,"toggle",void 0);s([p({type:Boolean,reflect:!0})],g.prototype,"selected",void 0);s([J("md-ripple")],g.prototype,"ripple",void 0);s([w()],g.prototype,"showRipple",void 0);s([w()],g.prototype,"flipIcon",void 0);var M=m`:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);height:var(--_container-size);width:var(--_container-size);justify-content:center;--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){pointer-events:none}.icon-button{align-items:center;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;justify-content:center;outline:none;position:relative;text-decoration:none;user-select:none;z-index:0;flex:1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.icon{height:var(--_icon-size);width:var(--_icon-size);--md-icon-size:var(--_icon-size);--md-icon-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.flip-icon .icon{transform:scaleX(-1)}.icon{display:inline-flex}.link{height:100%;outline:none;position:absolute;width:100%}.touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}/*# sourceMappingURL=shared-styles.css.map */
`;var he=class extends g{getRenderClasses(){return{...super.getRenderClasses(),filled:!0,"toggle-filled":this.toggle}}};he.styles=[M,bt];he=s([_("md-filled-icon-button")],he);var zt=m`:host{--_container-color: var(--md-filled-tonal-icon-button-container-color, var(--md-sys-color-secondary-container, #e8def8));--_container-shape: var(--md-filled-tonal-icon-button-container-shape, 9999px);--_container-size: var(--md-filled-tonal-icon-button-container-size, 40px);--_disabled-container-color: var(--md-filled-tonal-icon-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-tonal-icon-button-disabled-container-opacity, 0.12);--_disabled-icon-color: var(--md-filled-tonal-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-tonal-icon-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-tonal-icon-button-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_focus-state-layer-color: var(--md-filled-tonal-icon-button-focus-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_focus-state-layer-opacity: var(--md-filled-tonal-icon-button-focus-state-layer-opacity, 0.12);--_hover-icon-color: var(--md-filled-tonal-icon-button-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-color: var(--md-filled-tonal-icon-button-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-opacity: var(--md-filled-tonal-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-filled-tonal-icon-button-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-size: var(--md-filled-tonal-icon-button-icon-size, 24px);--_pressed-icon-color: var(--md-filled-tonal-icon-button-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-color: var(--md-filled-tonal-icon-button-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-opacity: var(--md-filled-tonal-icon-button-pressed-state-layer-opacity, 0.12);--_selected-container-color: var(--md-filled-tonal-icon-button-selected-container-color, var(--md-sys-color-secondary-container, #e8def8));--_toggle-selected-focus-icon-color: var(--md-filled-tonal-icon-button-toggle-selected-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_toggle-selected-focus-state-layer-color: var(--md-filled-tonal-icon-button-toggle-selected-focus-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_toggle-selected-hover-icon-color: var(--md-filled-tonal-icon-button-toggle-selected-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_toggle-selected-hover-state-layer-color: var(--md-filled-tonal-icon-button-toggle-selected-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_toggle-selected-icon-color: var(--md-filled-tonal-icon-button-toggle-selected-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_toggle-selected-pressed-icon-color: var(--md-filled-tonal-icon-button-toggle-selected-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_toggle-selected-pressed-state-layer-color: var(--md-filled-tonal-icon-button-toggle-selected-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_toggle-unselected-focus-icon-color: var(--md-filled-tonal-icon-button-toggle-unselected-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_toggle-unselected-focus-state-layer-color: var(--md-filled-tonal-icon-button-toggle-unselected-focus-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_toggle-unselected-hover-icon-color: var(--md-filled-tonal-icon-button-toggle-unselected-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_toggle-unselected-hover-state-layer-color: var(--md-filled-tonal-icon-button-toggle-unselected-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_toggle-unselected-icon-color: var(--md-filled-tonal-icon-button-toggle-unselected-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_toggle-unselected-pressed-icon-color: var(--md-filled-tonal-icon-button-toggle-unselected-pressed-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_toggle-unselected-pressed-state-layer-color: var(--md-filled-tonal-icon-button-toggle-unselected-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-container-color: var(--md-filled-tonal-icon-button-unselected-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_container-shape-start-start: var( --md-filled-tonal-icon-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-filled-tonal-icon-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-filled-tonal-icon-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-filled-tonal-icon-button-container-shape-end-start, var(--_container-shape) )}.icon-button{color:var(--_icon-color);--md-ripple-focus-color: var(--_focus-state-layer-color);--md-ripple-focus-opacity: var(--_focus-state-layer-opacity);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.icon-button:hover{color:var(--_hover-icon-color)}.icon-button:focus{color:var(--_focus-icon-color)}.icon-button:active{color:var(--_pressed-icon-color)}.icon-button:disabled{color:var(--_disabled-icon-color)}.icon-button::before{background-color:var(--_container-color);border-radius:inherit;content:"";inset:0;position:absolute;z-index:-1}.icon-button:disabled::before{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}.icon-button:disabled .icon{opacity:var(--_disabled-icon-opacity)}.toggle-filled-tonal{--md-ripple-focus-color: var(--_toggle-unselected-focus-state-layer-color);--md-ripple-hover-color: var(--_toggle-unselected-hover-state-layer-color);--md-ripple-pressed-color: var(--_toggle-unselected-pressed-state-layer-color)}.toggle-filled-tonal:not(:disabled){color:var(--_toggle-unselected-icon-color)}.toggle-filled-tonal:not(:disabled):hover{color:var(--_toggle-unselected-hover-icon-color)}.toggle-filled-tonal:not(:disabled):focus{color:var(--_toggle-unselected-focus-icon-color)}.toggle-filled-tonal:not(:disabled):active{color:var(--_toggle-unselected-pressed-icon-color)}.toggle-filled-tonal:not(:disabled)::before{background-color:var(--_unselected-container-color)}.selected{--md-ripple-focus-color: var(--_toggle-selected-focus-state-layer-color);--md-ripple-hover-color: var(--_toggle-selected-hover-state-layer-color);--md-ripple-pressed-color: var(--_toggle-selected-pressed-state-layer-color)}.selected:not(:disabled){color:var(--_toggle-selected-icon-color)}.selected:not(:disabled):hover{color:var(--_toggle-selected-hover-icon-color)}.selected:not(:disabled):focus{color:var(--_toggle-selected-focus-icon-color)}.selected:not(:disabled):active{color:var(--_toggle-selected-pressed-icon-color)}.selected:not(:disabled)::before{background-color:var(--_selected-container-color)}/*# sourceMappingURL=filled-tonal-styles.css.map */
`;var ve=class extends g{getRenderClasses(){return{...super.getRenderClasses(),"filled-tonal":!0,"toggle-filled-tonal":this.toggle}}};ve.styles=[M,zt];ve=s([_("md-filled-tonal-icon-button")],ve);var Pt=m`:host{--_container-shape: var(--md-outlined-icon-button-container-shape, 9999px);--_container-size: var(--md-outlined-icon-button-container-size, 40px);--_disabled-icon-color: var(--md-outlined-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-outlined-icon-button-disabled-icon-opacity, 0.38);--_disabled-selected-container-color: var(--md-outlined-icon-button-disabled-selected-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-selected-container-opacity: var(--md-outlined-icon-button-disabled-selected-container-opacity, 0.12);--_disabled-unselected-outline-color: var(--md-outlined-icon-button-disabled-unselected-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-unselected-outline-opacity: var(--md-outlined-icon-button-disabled-unselected-outline-opacity, 0.12);--_focus-state-layer-opacity: var(--md-outlined-icon-button-focus-state-layer-opacity, 0.08);--_hover-state-layer-opacity: var(--md-outlined-icon-button-hover-state-layer-opacity, 0.08);--_icon-size: var(--md-outlined-icon-button-icon-size, 24px);--_pressed-state-layer-opacity: var(--md-outlined-icon-button-pressed-state-layer-opacity, 0.12);--_selected-container-color: var(--md-outlined-icon-button-selected-container-color, var(--md-sys-color-inverse-surface, #322f35));--_selected-focus-icon-color: var(--md-outlined-icon-button-selected-focus-icon-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_selected-focus-state-layer-color: var(--md-outlined-icon-button-selected-focus-state-layer-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_selected-hover-icon-color: var(--md-outlined-icon-button-selected-hover-icon-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_selected-hover-state-layer-color: var(--md-outlined-icon-button-selected-hover-state-layer-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_selected-icon-color: var(--md-outlined-icon-button-selected-icon-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_selected-pressed-icon-color: var(--md-outlined-icon-button-selected-pressed-icon-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_selected-pressed-state-layer-color: var(--md-outlined-icon-button-selected-pressed-state-layer-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_unselected-focus-icon-color: var(--md-outlined-icon-button-unselected-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-focus-state-layer-color: var(--md-outlined-icon-button-unselected-focus-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-hover-icon-color: var(--md-outlined-icon-button-unselected-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-hover-state-layer-color: var(--md-outlined-icon-button-unselected-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-icon-color: var(--md-outlined-icon-button-unselected-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-outline-color: var(--md-outlined-icon-button-unselected-outline-color, var(--md-sys-color-outline, #79747e));--_unselected-outline-width: var(--md-outlined-icon-button-unselected-outline-width, 1px);--_unselected-pressed-icon-color: var(--md-outlined-icon-button-unselected-pressed-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_unselected-pressed-state-layer-color: var(--md-outlined-icon-button-unselected-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_container-shape-start-start: var( --md-outlined-icon-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-outlined-icon-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-outlined-icon-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-outlined-icon-button-container-shape-end-start, var(--_container-shape) )}.outlined{background-color:rgba(0,0,0,0);color:var(--_unselected-icon-color);--md-ripple-focus-color: var(--_unselected-focus-state-layer-color);--md-ripple-focus-opacity: var(--_focus-state-layer-opacity);--md-ripple-hover-color: var(--_unselected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_unselected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.outlined::before{border-color:var(--_unselected-outline-color);border-width:var(--_unselected-outline-width)}.outlined:hover{color:var(--_unselected-hover-icon-color)}.outlined:focus{color:var(--_unselected-focus-icon-color)}.outlined:active{color:var(--_unselected-pressed-icon-color)}.outlined:disabled{color:var(--_disabled-icon-color)}.outlined:disabled::before{border-color:var(--_disabled-unselected-outline-color);opacity:var(--_disabled-unselected-outline-opacity)}.outlined:disabled .icon{opacity:var(--_disabled-icon-opacity)}.outlined::before{block-size:100%;border-style:solid;border-radius:inherit;box-sizing:border-box;content:"";inline-size:100%;inset:0;pointer-events:none;position:absolute;z-index:-1}.outlined.selected::before{border-width:0}.selected{--md-ripple-focus-color: var(--_selected-focus-state-layer-color);--md-ripple-focus-opacity: var(--_focus-state-layer-opacity);--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.selected:not(:disabled){color:var(--_selected-icon-color)}.selected:not(:disabled):hover{color:var(--_selected-hover-icon-color)}.selected:not(:disabled):focus{color:var(--_selected-focus-icon-color)}.selected:not(:disabled):active{color:var(--_selected-pressed-icon-color)}.selected:not(:disabled)::before{background-color:var(--_selected-container-color)}.selected:disabled::before{background-color:var(--_disabled-selected-container-color);opacity:var(--_disabled-selected-container-opacity)}@media(forced-colors: active){.selected::before{border-color:var(--_unselected-outline-color);border-width:var(--_unselected-outline-width)}.selected:disabled::before{border-color:var(--_disabled-unselected-outline-color);opacity:var(--_disabled-unselected-outline-opacity)}}/*# sourceMappingURL=outlined-styles.css.map */
`;var me=class extends g{getRenderClasses(){return{...super.getRenderClasses(),outlined:!0}}};me.styles=[M,Pt];me=s([_("md-outlined-icon-button")],me);var fe=class extends y{render(){return f`<span class="shadow"></span>`}};var Tt=m`:host{--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000));display:flex;pointer-events:none}:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-timing-function:inherit}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}/*# sourceMappingURL=elevation-styles.css.map */
`;var Ye=class extends fe{};Ye.styles=[Tt];Ye=s([_("md-elevation")],Ye);var Rt,F=class extends y{constructor(){super(...arguments),this.opened=!1,this.pivot="end"}render(){let e=this.opened?"true":"false",t=this.opened?"false":"true",{ariaLabel:r,ariaModal:i}=this;return f`
      <div
        aria-expanded="${e}"
        aria-hidden="${t}"
        aria-label=${r||u}
        aria-modal="${i||u}"
        class="md3-navigation-drawer ${this.getRenderClasses()}"
        role="dialog">
        <md-elevation></md-elevation>
        <div class="md3-navigation-drawer__slot-content">
          <slot></slot>
        </div>
      </div>
    `}getRenderClasses(){return x({"md3-navigation-drawer--opened":this.opened,"md3-navigation-drawer--pivot-at-start":this.pivot==="start"})}updated(e){e.has("opened")&&setTimeout(()=>{this.dispatchEvent(new CustomEvent("navigation-drawer-changed",{detail:{opened:this.opened},bubbles:!0,composed:!0}))},250)}};Rt=F;I(Rt);s([p({type:Boolean})],F.prototype,"opened",void 0);s([p()],F.prototype,"pivot",void 0);var It=m`:host{--_container-color: var(--md-navigation-drawer-container-color, #fff);--_container-height: var(--md-navigation-drawer-container-height, 100%);--_container-shape: var(--md-navigation-drawer-container-shape, 0 16px 16px 0);--_container-width: var(--md-navigation-drawer-container-width, 360px);--_divider-color: var(--md-navigation-drawer-divider-color, #000);--_modal-container-elevation: var(--md-navigation-drawer-modal-container-elevation, 1);--_standard-container-elevation: var(--md-navigation-drawer-standard-container-elevation, 0);--md-elevation-level:var(--_standard-container-elevation);--md-elevation-shadow-color:var(--_divider-color)}:host{display:flex}.md3-navigation-drawer{inline-size:0;box-sizing:border-box;display:flex;justify-content:flex-end;overflow:hidden;overflow-y:auto;visibility:hidden;transition:inline-size .25s cubic-bezier(0.4, 0, 0.2, 1) 0s,visibility 0s cubic-bezier(0.4, 0, 0.2, 1) .25s}md-elevation{z-index:0}.md3-navigation-drawer--opened{visibility:visible;transition:inline-size .25s cubic-bezier(0.4, 0, 0.2, 1) 0s,visibility 0s cubic-bezier(0.4, 0, 0.2, 1) 0s}.md3-navigation-drawer--pivot-at-start{justify-content:flex-start}.md3-navigation-drawer__slot-content{display:flex;flex-direction:column;position:relative}/*# sourceMappingURL=navigation-drawer-styles.css.map */
`;var ye=m`.md3-navigation-drawer-modal{background-color:var(--_container-color);border-radius:var(--_container-shape);height:var(--_container-height)}.md3-navigation-drawer-modal.md3-navigation-drawer-modal--opened{inline-size:var(--_container-width)}.md3-navigation-drawer-modal .md3-navigation-drawer-modal__slot-content{min-inline-size:var(--_container-width);max-inline-size:var(--_container-width)}/*# sourceMappingURL=shared-styles.css.map */
`;var be=class extends F{};be.styles=[ye,It];be=s([_("md-navigation-drawer")],be);var Mt,q=class extends y{constructor(){super(...arguments),this.opened=!1,this.pivot="end"}render(){let e=this.opened?"true":"false",t=this.opened?"false":"true",{ariaLabel:r,ariaModal:i}=this;return f`
      <div
        class="md3-navigation-drawer-modal__scrim ${this.getScrimClasses()}"
        @click="${this.handleScrimClick}">
      </div>
      <div
        aria-expanded=${e}
        aria-hidden=${t}
        aria-label=${r||u}
        aria-modal=${i||u}
        class="md3-navigation-drawer-modal ${this.getRenderClasses()}"
        @keydown="${this.handleKeyDown}"
        role="dialog"><div class="md3-elevation-overlay"
        ></div>
        <div class="md3-navigation-drawer-modal__slot-content">
          <slot></slot>
        </div>
      </div>
    `}getScrimClasses(){return x({"md3-navigation-drawer-modal--scrim-visible":this.opened})}getRenderClasses(){return x({"md3-navigation-drawer-modal--opened":this.opened,"md3-navigation-drawer-modal--pivot-at-start":this.pivot==="start"})}updated(e){e.has("opened")&&setTimeout(()=>{this.dispatchEvent(new CustomEvent("navigation-drawer-changed",{detail:{opened:this.opened},bubbles:!0,composed:!0}))},250)}handleKeyDown(e){e.code==="Escape"&&(this.opened=!1)}handleScrimClick(){this.opened=!this.opened}};Mt=q;I(Mt);s([p({type:Boolean})],q.prototype,"opened",void 0);s([p()],q.prototype,"pivot",void 0);var Ot=m`:host{--_container-color: var(--md-navigation-drawer-modal-container-color, #fff);--_container-height: var(--md-navigation-drawer-modal-container-height, 100%);--_container-shape: var(--md-navigation-drawer-modal-container-shape, 0 16px 16px 0);--_container-width: var(--md-navigation-drawer-modal-container-width, 360px);--_divider-color: var(--md-navigation-drawer-modal-divider-color, #000);--_modal-container-elevation: var(--md-navigation-drawer-modal-modal-container-elevation, 1);--_scrim-color: ;--_scrim-opacity: var(--md-navigation-drawer-modal-scrim-opacity, 0.04);--_standard-container-elevation: var(--md-navigation-drawer-modal-standard-container-elevation, 0);--md-elevation-level:var(--_modal-container-elevation)}.md3-navigation-drawer-modal{bottom:0;box-sizing:border-box;display:flex;justify-content:flex-end;overflow:hidden;position:absolute;top:0;inline-size:0;transition:inline-size .25s cubic-bezier(0.4, 0, 0.2, 1) 0s,visibility 0s cubic-bezier(0.4, 0, 0.2, 1) .25s}.md3-navigation-drawer-modal--opened{transition:inline-size .25s cubic-bezier(0.4, 0, 0.2, 1) 0s,visibility 0s cubic-bezier(0.4, 0, 0.2, 1) 0s}.md3-navigation-drawer-modal--pivot-at-start{justify-content:flex-start}.md3-navigation-drawer-modal__slot-content{display:flex;flex-direction:column;position:relative}.md3-navigation-drawer-modal__scrim{inset:0;opacity:0;position:absolute;visibility:hidden;background-color:var(--_scrim-color);transition:opacity .25s cubic-bezier(0.4, 0, 0.2, 1) 0s,visibility 0s cubic-bezier(0.4, 0, 0.2, 1) .25s}.md3-navigation-drawer-modal--scrim-visible{visibility:visible;opacity:var(--_scrim-opacity);transition:opacity .25s cubic-bezier(0.4, 0, 0.2, 1) 0s,visibility 0s cubic-bezier(0.4, 0, 0.2, 1) 0s}/*# sourceMappingURL=navigation-drawer-modal-styles.css.map */
`;var _e=class extends q{};_e.styles=[ye,Ot];_e=s([_("md-navigation-drawer-modal")],_e);var Lt=m`:host{--_disabled-icon-color: var(--md-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-icon-button-disabled-icon-opacity, 0.38);--_icon-size: var(--md-icon-button-icon-size, 24px);--_selected-focus-icon-color: var(--md-icon-button-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-focus-state-layer-color: var(--md-icon-button-selected-focus-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-focus-state-layer-opacity: var(--md-icon-button-selected-focus-state-layer-opacity, 0.12);--_selected-hover-icon-color: var(--md-icon-button-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-color: var(--md-icon-button-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-icon-button-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-icon-button-selected-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-icon-button-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-color: var(--md-icon-button-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-opacity: var(--md-icon-button-selected-pressed-state-layer-opacity, 0.12);--_state-layer-shape: var(--md-icon-button-state-layer-shape, 9999px);--_state-layer-size: var(--md-icon-button-state-layer-size, 40px);--_unselected-focus-icon-color: var(--md-icon-button-unselected-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-focus-state-layer-color: var(--md-icon-button-unselected-focus-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-focus-state-layer-opacity: var(--md-icon-button-unselected-focus-state-layer-opacity, 0.12);--_unselected-hover-icon-color: var(--md-icon-button-unselected-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-hover-state-layer-color: var(--md-icon-button-unselected-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-hover-state-layer-opacity: var(--md-icon-button-unselected-hover-state-layer-opacity, 0.08);--_unselected-icon-color: var(--md-icon-button-unselected-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-pressed-icon-color: var(--md-icon-button-unselected-pressed-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-pressed-state-layer-color: var(--md-icon-button-unselected-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-pressed-state-layer-opacity: var(--md-icon-button-unselected-pressed-state-layer-opacity, 0.12);height:var(--_state-layer-size);width:var(--_state-layer-size);--md-focus-ring-shape: var(--_state-layer-shape)}.standard{background-color:rgba(0,0,0,0);color:var(--_unselected-icon-color);--md-ripple-focus-color: var(--_unselected-focus-state-layer-color);--md-ripple-focus-opacity: var(--_unselected-focus-state-layer-opacity);--md-ripple-hover-color: var(--_unselected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_unselected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_unselected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_unselected-pressed-state-layer-opacity)}.standard:hover{color:var(--_unselected-hover-icon-color)}.standard:focus{color:var(--_unselected-focus-icon-color)}.standard:active{color:var(--_unselected-pressed-icon-color)}.standard:disabled{color:var(--_disabled-icon-color)}md-ripple{border-radius:var(--_state-layer-shape)}.standard:disabled .icon{opacity:var(--_disabled-icon-opacity)}.selected{--md-ripple-focus-color: var(--_selected-focus-state-layer-color);--md-ripple-focus-opacity: var(--_selected-focus-state-layer-opacity);--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}.selected:not(:disabled){color:var(--_selected-icon-color)}.selected:not(:disabled):hover{color:var(--_selected-hover-icon-color)}.selected:not(:disabled):focus{color:var(--_selected-focus-icon-color)}.selected:not(:disabled):active{color:var(--_selected-pressed-icon-color)}/*# sourceMappingURL=standard-styles.css.map */
`;var ie=class extends g{getRenderClasses(){return{...super.getRenderClasses(),standard:!0}}};ie.styles=[M,Lt];ie=s([_("md-standard-icon-button")],ie);var ge=window.Shiny;function we(o){if(!ge)return;class e extends ge.InputBinding{constructor(){super()}find(r){return $(r).find(o)}getId(r){return r.id}getValue(r){return r.value}subscribe(r,i){r.onChangeCallback=i}unsubscribe(r){r.onChangeCallback=i=>{}}}ge.inputBindings.register(new e,`${o}-Binding`)}var dr="shiny-data-passing-event";function pr(o,e){return{...e,id:o}}function xe(o,e){return t=>{let r=new CustomEvent(dr,{detail:pr(e,t),bubbles:!0});o.dispatchEvent(r)}}var ke=class extends ie{constructor(){super();this.on_value_change=xe(this,this.id);this.onChangeCallback=t=>{}}};customElements.define("m3-standard-icon-button",ke);we("m3-standard-icon-button");var Bt=m`@media(forced-colors: active){:host{--md-slider-active-track-color:CanvasText;--md-slider-disabled-active-track-color:GrayText;--md-slider-disabled-active-track-opacity:1;--md-slider-disabled-handle-color:GrayText;--md-slider-disabled-inactive-track-color:GrayText;--md-slider-disabled-inactive-track-opacity:1;--md-slider-focus-handle-color:CanvasText;--md-slider-handle-color:CanvasText;--md-slider-handle-shadow-color:Canvas;--md-slider-hover-handle-color:CanvasText;--md-slider-hover-state-layer-color:Canvas;--md-slider-hover-state-layer-opacity:1;--md-slider-inactive-track-color:Canvas;--md-slider-label-container-color:Canvas;--md-slider-label-label-text-color:CanvasText;--md-slider-pressed-handle-color:CanvasText;--md-slider-pressed-state-layer-color:Canvas;--md-slider-pressed-state-layer-opacity:1;--md-slider-with-overlap-handle-outline-color:CanvasText;--md-slider-with-tick-marks-active-container-color:Canvas;--md-slider-with-tick-marks-disabled-container-color:GrayText;--md-slider-with-tick-marks-inactive-container-color:CanvasText}.label,.label::before{border:var(--_with-overlap-handle-outline-color) solid var(--_with-overlap-handle-outline-width)}:host(:not([disabled])) .track::before{border:1px solid var(--_active-track-color)}}/*# sourceMappingURL=forced-colors-styles.css.map */
`;var Nt="important",ur=" !"+Nt,Dt=X(class extends R{constructor(o){var e;if(super(o),o.type!==Z.ATTRIBUTE||o.name!=="style"||((e=o.strings)===null||e===void 0?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((e,t)=>{let r=o[t];return r==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(o,[e]){let{style:t}=o.element;if(this.ut===void 0){this.ut=new Set;for(let r in e)this.ut.add(r);return this.render(e)}this.ut.forEach(r=>{e[r]==null&&(this.ut.delete(r),r.includes("-")?t.removeProperty(r):t[r]="")});for(let r in e){let i=e[r];if(i!=null){this.ut.add(r);let a=typeof i=="string"&&i.endsWith(ur);r.includes("-")||a?t.setProperty(r,a?i.slice(0,-11):i,a?Nt:""):t[r]=i}}return E}});function Ht(o,e){e.bubbles&&(!o.shadowRoot||e.composed)&&e.stopPropagation();let t=Reflect.construct(e.constructor,[e.type,e]),r=o.dispatchEvent(t);return r||e.preventDefault(),r}function Ut(o){let e=new MouseEvent("click",{bubbles:!0});return o.dispatchEvent(e),e}function jt(o){return o.currentTarget!==o.target||o.composedPath()[0]!==o.target||o.target.disabled?!1:!hr(o)}function hr(o){let e=Ze;return e&&(o.preventDefault(),o.stopImmediatePropagation()),vr(),e}var Ze=!1;async function vr(){Ze=!0,await null,Ze=!1}var Xe=Symbol("getFormValue"),$e=class{constructor(e){this.element=e,this.formDataListener=t=>{if(this.element.disabled)return;let r=this.element[Xe]();if(r instanceof FormData){for(let[i,a]of r)t.formData.append(i,a);return}r===null||!this.element.name||t.formData.append(this.element.name,r)}}hostConnected(){!this.element.shadowRoot||window.ShadyDOM?.inUse||(this.form=this.element.form,this.form?.addEventListener("formdata",this.formDataListener))}hostDisconnected(){this.form?.removeEventListener("formdata",this.formDataListener)}};var Ft={fromAttribute(o){return o??""},toAttribute(o){return o||null}};var Gt;function qt({x:o,y:e},t){if(!t)return!1;let{top:r,left:i,bottom:a,right:n}=t.getBoundingClientRect();return o>=i&&o<=n&&e>=r&&e<=a}function Vt(o,e,t){return Math.max(e,Math.min(t,o))}function fr(o,e){if(!(o&&e))return!1;let t=o.getBoundingClientRect(),r=e.getBoundingClientRect();return!(t.top>r.bottom||t.right<r.left||t.bottom<r.top||t.left>r.right)}var h=class extends y{static get formAssociated(){return!0}get form(){return this.closest("form")}getMetrics(){let e=Math.max(this.step,1),t=Math.max(this.max-this.min,e),r=Math.min(this.valueA,this.valueB),i=Math.max(this.valueA,this.valueB),a=(r-this.min)/t,n=(i-this.min)/t;return{step:e,range:t,lower:r,upper:i,lowerFraction:a,upperFraction:n}}constructor(){super(),this.disabled=!1,this.min=0,this.max=100,this.value=50,this.valueStart=25,this.valueEnd=75,this.step=1,this.withTickMarks=!1,this.withLabel=!1,this.range=!1,this.name="",this.valueA=0,this.valueB=0,this.rippleAShowing=!1,this.rippleBShowing=!1,this.handleAHover=!1,this.handleBHover=!1,this.onTopId="b",this.handlesOverlapping=!1,this.renderRipple=e=>f`<md-ripple class=${e} ?disabled=${this.disabled} unbounded></md-ripple>`,this.getRippleA=()=>this.handleAHover?(this.rippleAShowing=!0,this.rippleA):null,this.getRippleB=()=>this.handleBHover?(this.rippleBShowing=!0,this.rippleB):null,this.ripplePointerId=1,this.addController(new $e(this)),!1||this.addEventListener("click",e=>{!jt(e)||!this.inputB||(this.focus(),Ut(this.inputB))})}focus(){this.inputB?.focus()}[Xe](){return this.range?`${this.valueStart}, ${this.valueEnd}`:`${this.value}`}isFlipped(){return this.valueA>this.valueB}willUpdate(e){let t=Math.max(this.step,1),r=this.range?this.valueStart:this.min;r=Vt(r-r%t,this.min,this.max);let i=this.range?this.valueEnd:this.value;i=Vt(i-i%t,this.min,this.max);let a=this.isFlipped()&&this.range;this.valueA=a?i:r,this.valueB=a?r:i,e.get("handleAHover")!==void 0?(this.rippleAShowing=!0,this.toggleRippleHover(this.rippleA,this.handleAHover)):e.get("handleBHover")!==void 0&&(this.rippleBShowing=!0,this.toggleRippleHover(this.rippleB,this.handleBHover))}async updated(e){(e.has("range")||e.has("valueA")||e.has("valueB"))&&(await this.updateComplete,this.handlesOverlapping=fr(this.handleA,this.handleB))}render(){let{step:e,range:t,lowerFraction:r,upperFraction:i}=this.getMetrics(),a=this.isFlipped(),n={"--slider-lower-fraction":String(r),"--slider-upper-fraction":String(i),"--slider-tick-count":String(t/e)},d={ranged:this.range},c=String(this.valueA),l=String(this.valueB);if(this.range){let G=a?this.valueEndLabel:this.valueStartLabel,Kt=a?this.valueStartLabel:this.valueEndLabel;c=G??c,l=Kt??l}else l=this.valueLabel??l;let A={id:"a",lesser:!a,value:this.valueA,label:c,getRipple:this.getRippleA},v={id:"b",lesser:a,value:this.valueB,label:l,getRipple:this.getRippleB},b={id:"a",lesser:!a,showRipple:this.rippleAShowing,hover:this.handleAHover,label:c},S={id:"b",lesser:a,showRipple:this.rippleBShowing,hover:this.handleBHover,label:l},V={hover:this.handleAHover||this.handleBHover};return f`
      <div
        class="container ${x(d)}"
        style=${Dt(n)}
      >
        ${j(this.range,()=>this.renderInput(A))}
        ${this.renderInput(v)}
        ${this.renderTrack()}
        <div class="handleContainerPadded">
          <div class="handleContainerBlock">
            <div class="handleContainer ${x(V)}">
              ${j(this.range,()=>this.renderHandle(b))}
              ${this.renderHandle(S)}
            </div>
          </div>
        </div>
      </div>`}renderTrack(){let e={tickMarks:this.withTickMarks};return f`<div class="track ${x(e)}"></div>`}renderLabel(e){return f`<div class="label">
        <span class="labelContent" part="label">${e}</span>
      </div>`}renderHandle({id:e,lesser:t,showRipple:r,hover:i,label:a}){let n=!this.disabled&&e===this.onTopId,d=!this.disabled&&this.handlesOverlapping;return f`<div class="handle ${x({[e]:!0,lesser:t,hover:i,onTop:n,isOverlapping:d})}">
        <div class="handleNub"><md-elevation></md-elevation></div>
        ${j(this.withLabel,()=>this.renderLabel(a))}
      ${j(r,()=>this.renderRipple(e))}
      <md-focus-ring for=${e}></md-focus-ring>
    </div>`}renderInput({id:e,lesser:t,value:r,label:i,getRipple:a}){let n=this.range?` - ${t?"start":"end"} handle`:"",{ariaLabel:d}=this;return f`<input type="range"
      class="${x({lesser:t,[e]:!0})}"
      @focus=${this.handleFocus}
      @pointerdown=${this.handleDown}
      @pointerenter=${this.handleEnter}
      @pointermove=${this.handleMove}
      @pointerleave=${this.handleLeave}
      @input=${this.handleInput}
      @change=${this.handleChange}
      id=${e}
      .disabled=${this.disabled}
      .min=${String(this.min)}
      .max=${String(this.max)}
      .step=${String(this.step)}
      .value=${String(r)}
      .tabIndex=${t?1:0}
      aria-label=${`${d}${n}`||u}
      aria-valuetext=${i}
      ${oe(a)}>`}async toggleRippleHover(e,t){let r=await e;r&&(t?r.handlePointerenter(new PointerEvent("pointerenter",{isPrimary:!0,pointerId:this.ripplePointerId})):r.handlePointerleave(new PointerEvent("pointerleave",{isPrimary:!0,pointerId:this.ripplePointerId})))}isEventOnA({target:e}){return e===this.inputA}handleFocus(e){this.updateOnTop(e)}handleDown(e){this.ripplePointerId=e.pointerId;let t=this.isEventOnA(e);this.handleAHover=!this.disabled&&t&&!!this.handleA,this.handleBHover=!this.disabled&&!t&&!!this.handleB;let r=e.target;requestAnimationFrame(()=>{r.focus()})}handleMove(e){this.handleAHover=!this.disabled&&qt(e,this.handleA),this.handleBHover=!this.disabled&&qt(e,this.handleB)}handleEnter(e){this.handleMove(e)}handleLeave(){this.handleAHover=!1,this.handleBHover=!1}updateOnTop(e){this.onTopId=e.target.classList.contains("a")?"a":"b"}handleInput(e){this.inputA&&(this.valueA=this.inputA.valueAsNumber??0),this.valueB=this.inputB.valueAsNumber,this.updateOnTop(e);let t=Math.min(this.valueA,this.valueB),r=Math.max(this.valueA,this.valueB);this.range?(this.valueStart=t,this.valueEnd=r):this.value=this.valueB}handleChange(e){Ht(this,e)}};Gt=h;I(Gt);h.shadowRootOptions={...y.shadowRootOptions,delegatesFocus:!0};s([p({type:Boolean,reflect:!0})],h.prototype,"disabled",void 0);s([p({type:Number})],h.prototype,"min",void 0);s([p({type:Number})],h.prototype,"max",void 0);s([p({type:Number})],h.prototype,"value",void 0);s([p({type:Number})],h.prototype,"valueStart",void 0);s([p({type:Number})],h.prototype,"valueEnd",void 0);s([p()],h.prototype,"valueLabel",void 0);s([p()],h.prototype,"valueStartLabel",void 0);s([p()],h.prototype,"valueEndLabel",void 0);s([p({type:Number})],h.prototype,"step",void 0);s([p({type:Boolean})],h.prototype,"withTickMarks",void 0);s([p({type:Boolean})],h.prototype,"withLabel",void 0);s([p({type:Boolean})],h.prototype,"range",void 0);s([p({reflect:!0,converter:Ft})],h.prototype,"name",void 0);s([O("input.a")],h.prototype,"inputA",void 0);s([O(".handle.a")],h.prototype,"handleA",void 0);s([J("md-ripple.a")],h.prototype,"rippleA",void 0);s([O("input.b")],h.prototype,"inputB",void 0);s([O(".handle.b")],h.prototype,"handleB",void 0);s([J("md-ripple.b")],h.prototype,"rippleB",void 0);s([w()],h.prototype,"valueA",void 0);s([w()],h.prototype,"valueB",void 0);s([w()],h.prototype,"rippleAShowing",void 0);s([w()],h.prototype,"rippleBShowing",void 0);s([w()],h.prototype,"handleAHover",void 0);s([w()],h.prototype,"handleBHover",void 0);s([w()],h.prototype,"onTopId",void 0);s([w()],h.prototype,"handlesOverlapping",void 0);var Wt=m`:host{display:inline-flex;vertical-align:middle;--_active-track-color: var(--md-slider-active-track-color, var(--md-sys-color-primary, #6750a4));--_active-track-height: var(--md-slider-active-track-height, 4px);--_active-track-shape: var(--md-slider-active-track-shape, 9999px);--_disabled-active-track-color: var(--md-slider-disabled-active-track-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-track-opacity: var(--md-slider-disabled-active-track-opacity, 0.38);--_disabled-handle-color: var(--md-slider-disabled-handle-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-handle-elevation: var(--md-slider-disabled-handle-elevation, 0);--_disabled-inactive-track-color: var(--md-slider-disabled-inactive-track-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-inactive-track-opacity: var(--md-slider-disabled-inactive-track-opacity, 0.12);--_focus-handle-color: var(--md-slider-focus-handle-color, var(--md-sys-color-primary, #6750a4));--_handle-color: var(--md-slider-handle-color, var(--md-sys-color-primary, #6750a4));--_handle-elevation: var(--md-slider-handle-elevation, 1);--_handle-height: var(--md-slider-handle-height, 20px);--_handle-shadow-color: var(--md-slider-handle-shadow-color, var(--md-sys-color-shadow, #000));--_handle-shape: var(--md-slider-handle-shape, 9999px);--_handle-width: var(--md-slider-handle-width, 20px);--_hover-handle-color: var(--md-slider-hover-handle-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-slider-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-slider-hover-state-layer-opacity, 0.08);--_inactive-track-color: var(--md-slider-inactive-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_inactive-track-height: var(--md-slider-inactive-track-height, 4px);--_inactive-track-shape: var(--md-slider-inactive-track-shape, 9999px);--_label-container-color: var(--md-slider-label-container-color, var(--md-sys-color-primary, #6750a4));--_label-container-height: var(--md-slider-label-container-height, 28px);--_label-label-text-color: var(--md-slider-label-label-text-color, var(--md-sys-color-on-primary, #fff));--_label-label-text-type: var(--md-slider-label-label-text-type, var(--md-sys-typescale-label-medium, 500 0.75rem / 1rem var(--md-ref-typeface-plain, Roboto)));--_pressed-handle-color: var(--md-slider-pressed-handle-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-slider-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-slider-pressed-state-layer-opacity, 0.12);--_state-layer-size: var(--md-slider-state-layer-size, 40px);--_with-overlap-handle-outline-color: var(--md-slider-with-overlap-handle-outline-color, var(--md-sys-color-on-primary, #fff));--_with-overlap-handle-outline-width: var(--md-slider-with-overlap-handle-outline-width, 1px);--_with-tick-marks-active-container-color: var(--md-slider-with-tick-marks-active-container-color, var(--md-sys-color-on-primary, #fff));--_with-tick-marks-container-size: var(--md-slider-with-tick-marks-container-size, 2px);--_with-tick-marks-disabled-container-color: var(--md-slider-with-tick-marks-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_with-tick-marks-inactive-container-color: var(--md-slider-with-tick-marks-inactive-container-color, var(--md-sys-color-on-surface-variant, #49454f));min-inline-size:200px;--md-elevation-level:var(--_handle-elevation);--md-elevation-shadow-color:var(--_handle-shadow-color)}md-elevation{transition-duration:250ms}@media(prefers-reduced-motion){.label{transition-duration:0}}:host([disabled]){opacity:var(--_disabled-active-track-opacity);--md-elevation-level:var(--_disabled-handle-elevation)}.container{flex:1;display:flex;align-items:center;position:relative;block-size:var(--_state-layer-size);pointer-events:none;touch-action:none}.track{position:absolute;inset:0;display:flex;align-items:center}.track::before,.track::after{position:absolute;content:"";inset-inline-start:calc(var(--_state-layer-size)/2 - var(--_with-tick-marks-container-size));inset-inline-end:calc(var(--_state-layer-size)/2 - var(--_with-tick-marks-container-size));background-size:calc((100% - var(--_with-tick-marks-container-size)*2)/var(--slider-tick-count)) 100%}.track::before{block-size:var(--_inactive-track-height);border-radius:var(--_inactive-track-shape);background-color:var(--_inactive-track-color)}.track.tickMarks::before{background-image:radial-gradient(circle at var(--_with-tick-marks-container-size) center, var(--_with-tick-marks-inactive-container-color) 0, var(--_with-tick-marks-inactive-container-color) calc(var(--_with-tick-marks-container-size) / 2), transparent calc(var(--_with-tick-marks-container-size) / 2))}:host([disabled]) .track::before{opacity:calc(1/var(--_disabled-active-track-opacity)*var(--_disabled-inactive-track-opacity));background-color:var(--_disabled-inactive-track-color)}.track::after{block-size:var(--_active-track-height);border-radius:var(--_active-track-shape);clip-path:inset(0 calc(var(--_with-tick-marks-container-size) * min((1 - var(--slider-upper-fraction)) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * (1 - var(--slider-upper-fraction))) 0 calc(var(--_with-tick-marks-container-size) * min(var(--slider-lower-fraction) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * var(--slider-lower-fraction)));background-color:var(--_active-track-color)}:host-context([dir=rtl]) .track::after{clip-path:inset(0 calc(var(--_with-tick-marks-container-size) * min(var(--slider-lower-fraction) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * var(--slider-lower-fraction)) 0 calc(var(--_with-tick-marks-container-size) * min((1 - var(--slider-upper-fraction)) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * (1 - var(--slider-upper-fraction))))}:host([dir=rtl]) .track::after{clip-path:inset(0 calc(var(--_with-tick-marks-container-size) * min(var(--slider-lower-fraction) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * var(--slider-lower-fraction)) 0 calc(var(--_with-tick-marks-container-size) * min((1 - var(--slider-upper-fraction)) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * (1 - var(--slider-upper-fraction))))}.track:dir(rtl)::after{clip-path:inset(0 calc(var(--_with-tick-marks-container-size) * min(var(--slider-lower-fraction) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * var(--slider-lower-fraction)) 0 calc(var(--_with-tick-marks-container-size) * min((1 - var(--slider-upper-fraction)) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * (1 - var(--slider-upper-fraction))))}.track.tickMarks::after{background-image:radial-gradient(circle at var(--_with-tick-marks-container-size) center, var(--_with-tick-marks-active-container-color) 0, var(--_with-tick-marks-active-container-color) calc(var(--_with-tick-marks-container-size) / 2), transparent calc(var(--_with-tick-marks-container-size) / 2))}:host([disabled]) .track::after{background-color:var(--_disabled-active-track-color)}:host([disabled]) .track.tickMarks::before,:host([disabled]) .track.tickMarks::after{background-image:radial-gradient(circle at var(--_with-tick-marks-container-size) center, var(--_with-tick-marks-disabled-container-color) 0, var(--_with-tick-marks-disabled-container-color) calc(var(--_with-tick-marks-container-size) / 2), transparent calc(var(--_with-tick-marks-container-size) / 2))}.handleContainerPadded{position:relative;block-size:100%;inline-size:100%;padding-inline:calc(var(--_state-layer-size)/2)}.handleContainerBlock{position:relative;block-size:100%;inline-size:100%}.handleContainer{position:absolute;inset-block-start:0;inset-block-end:0;inset-inline-start:calc(100%*var(--slider-lower-fraction));inline-size:calc(100%*(var(--slider-upper-fraction) - var(--slider-lower-fraction)))}.handle{position:absolute;block-size:var(--_state-layer-size);inline-size:var(--_state-layer-size);border-radius:var(--_handle-shape);display:grid;place-items:center}.handleNub{position:absolute;height:var(--_handle-height);width:var(--_handle-width);border-radius:var(--_handle-shape);background:var(--_handle-color)}:host([disabled]) .handleNub{background:var(--_disabled-handle-color)}input.b:focus~.handleContainerPadded .handle.b>.handleNub,input.a:focus~.handleContainerPadded .handle.a>.handleNub{background:var(--_focus-handle-color)}.container>.handleContainerPadded .handle.hover>.handleNub{background:var(--_hover-handle-color)}:host(:not([disabled])) input.b:active~.handleContainerPadded .handle.b>.handleNub,:host(:not([disabled])) input.a:active~.handleContainerPadded .handle.a>.handleNub{background:var(--_pressed-handle-color)}.onTop.isOverlapping .handleNub,.onTop.isOverlapping .label,.onTop.isOverlapping .label::before{border:var(--_with-overlap-handle-outline-color) solid var(--_with-overlap-handle-outline-width)}.handle.lesser{inset-inline-start:calc(0px - var(--_state-layer-size)/2)}.handle:not(.lesser){inset-inline-end:calc(0px - var(--_state-layer-size)/2)}.label{position:absolute;box-sizing:border-box;display:grid;padding:4px;place-items:center;border-radius:9999px;color:var(--_label-label-text-color);font:var(--_label-label-text-type);inset-block-end:100%;min-inline-size:var(--_label-container-height);min-block-size:var(--_label-container-height);background:var(--_label-container-color);transition:transform 100ms cubic-bezier(0.2, 0, 0, 1);transform-origin:center bottom;transform:scale(0)}:host(:focus-within) .label,.handleContainer.hover .label{transform:scale(1)}.label::before,.label::after{position:absolute;display:block;content:"";background:inherit}.label::before{inline-size:calc(var(--_label-container-height)/2);block-size:calc(var(--_label-container-height)/2);bottom:calc(var(--_label-container-height)/-10);transform:rotate(45deg)}.label::after{inset:0px;border-radius:inherit}.labelContent{z-index:1}input[type=range]{opacity:0;-webkit-tap-highlight-color:rgba(0,0,0,0);position:absolute;box-sizing:border-box;height:100%;width:100%;margin:0;background:rgba(0,0,0,0);cursor:pointer;pointer-events:auto;appearance:none}input[type=range]:focus{outline:none}::-webkit-slider-runnable-track{-webkit-appearance:none}::-moz-range-track{appearance:none}::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;block-size:var(--_state-layer-size);inline-size:var(--_state-layer-size);transform:scaleX(0);opacity:0;z-index:2}::-moz-range-thumb{appearance:none;block-size:var(--_state-layer-size);inline-size:var(--_state-layer-size);transform:scaleX(0);opacity:0;z-index:2}.ranged input.lesser{clip-path:inset(0 calc(100% - (var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--slider-lower-fraction) + (var(--slider-upper-fraction) - var(--slider-lower-fraction)) / 2))) 0 0)}:host-context([dir=rtl]) .ranged input.lesser{clip-path:inset(0 0 0 calc(100% - (var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--slider-lower-fraction) + (var(--slider-upper-fraction) - var(--slider-lower-fraction)) / 2))))}:host([dir=rtl]) .ranged input.lesser{clip-path:inset(0 0 0 calc(100% - (var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--slider-lower-fraction) + (var(--slider-upper-fraction) - var(--slider-lower-fraction)) / 2))))}.ranged input.lesser:dir(rtl){clip-path:inset(0 0 0 calc(100% - (var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--slider-lower-fraction) + (var(--slider-upper-fraction) - var(--slider-lower-fraction)) / 2))))}.ranged input:not(.lesser){clip-path:inset(0 0 0 calc(var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--slider-lower-fraction) + (var(--slider-upper-fraction) - var(--slider-lower-fraction)) / 2)))}:host-context([dir=rtl]) .ranged input:not(.lesser){clip-path:inset(0 calc(var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--slider-lower-fraction) + (var(--slider-upper-fraction) - var(--slider-lower-fraction)) / 2)) 0 0)}:host([dir=rtl]) .ranged input:not(.lesser){clip-path:inset(0 calc(var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--slider-lower-fraction) + (var(--slider-upper-fraction) - var(--slider-lower-fraction)) / 2)) 0 0)}.ranged input:dir(rtl):not(.lesser){clip-path:inset(0 calc(var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--slider-lower-fraction) + (var(--slider-upper-fraction) - var(--slider-lower-fraction)) / 2)) 0 0)}.onTop{z-index:1}md-focus-ring{--md-focus-ring-outward-offset: -2px}.handle{--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}md-ripple{height:var(--_state-layer-size);width:var(--_state-layer-size)}/*# sourceMappingURL=slider-styles.css.map */
`;var ae=class extends h{};ae.styles=[Wt,Bt];ae=s([_("md-slider")],ae);var Ae=class extends ae{constructor(){super();this.on_value_change=xe(this,this.id);this.onChangeCallback=t=>{},this.addEventListener("input",this.myHandleChange)}myHandleChange(t){this.onChangeCallback(!0),this.on_value_change({type:"number",value:this.value})}};customElements.define("m3-slider",Ae);we("m3-slider");})();
/*! Bundled license information:

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@material/web/icon/lib/icon.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/icon/lib/icon-styles.css.js:
  (**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    *)

@material/web/icon/icon.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/iconbutton/lib/filled-styles.css.js:
  (**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    *)

@material/web/focus/lib/focus-ring.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/focus/lib/focus-ring-styles.css.js:
  (**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    *)

@material/web/focus/focus-ring.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@material/web/motion/animation.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/ripple/lib/ripple.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/ripple/lib/ripple-styles.css.js:
  (**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    *)

@material/web/ripple/ripple.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

lit-html/directives/when.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/static.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@material/web/aria/aria.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/aria/delegate.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/controller/is-rtl.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/ripple/directive.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/iconbutton/lib/icon-button.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/iconbutton/lib/shared-styles.css.js:
  (**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    *)

@material/web/iconbutton/filled-icon-button.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/iconbutton/lib/filled-tonal-styles.css.js:
  (**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    *)

@material/web/iconbutton/filled-tonal-icon-button.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/iconbutton/lib/outlined-styles.css.js:
  (**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    *)

@material/web/iconbutton/outlined-icon-button.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/elevation/lib/elevation.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/elevation/lib/elevation-styles.css.js:
  (**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    *)

@material/web/elevation/elevation.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/navigationdrawer/lib/navigation-drawer.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/navigationdrawer/lib/navigation-drawer-styles.css.js:
  (**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    *)

@material/web/navigationdrawer/lib/shared-styles.css.js:
  (**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    *)

@material/web/navigationdrawer/navigation-drawer.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/navigationdrawer/lib/navigation-drawer-modal.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/navigationdrawer/lib/navigation-drawer-modal-styles.css.js:
  (**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    *)

@material/web/navigationdrawer/navigation-drawer-modal.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/iconbutton/lib/standard-styles.css.js:
  (**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    *)

@material/web/iconbutton/standard-icon-button.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/slider/lib/forced-colors-styles.css.js:
  (**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    *)

lit-html/directives/style-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@material/web/controller/events.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/controller/form-controller.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/controller/string-converter.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/slider/lib/slider.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/slider/lib/slider-styles.css.js:
  (**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    *)

@material/web/slider/slider.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)
*/
//# sourceMappingURL=index.js.map
