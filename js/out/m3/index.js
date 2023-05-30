"use strict";(()=>{function s(i,e,t,r){var a=arguments.length,n=a<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var d=i.length-1;d>=0;d--)(o=i[d])&&(n=(a<3?o(n):a>3?o(e,t,n):o(e,t))||n);return a>3&&n&&Object.defineProperty(e,t,n),n}var S=i=>e=>typeof e=="function"?((t,r)=>(customElements.define(t,r),r))(i,e):((t,r)=>{let{kind:a,elements:n}=r;return{kind:a,elements:n,finisher(o){customElements.define(t,o)}}})(i,e);var _t=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}};function u(i){return(e,t)=>t!==void 0?((r,a,n)=>{a.constructor.createProperty(n,r)})(i,e,t):_t(i,e)}function g(i){return u({...i,state:!0})}var C=({finisher:i,descriptor:e})=>(t,r)=>{var a;if(r===void 0){let n=(a=t.originalKey)!==null&&a!==void 0?a:t.key,o=e!=null?{kind:"method",placement:"prototype",key:n,descriptor:e(t.key)}:{...t,key:n};return i!=null&&(o.finisher=function(d){i(d,n)}),o}{let n=t.constructor;e!==void 0&&Object.defineProperty(t,r,e(r)),i?.(n,r)}};function R(i,e){return C({descriptor:t=>{let r={get(){var a,n;return(n=(a=this.renderRoot)===null||a===void 0?void 0:a.querySelector(i))!==null&&n!==void 0?n:null},enumerable:!0,configurable:!0};if(e){let a=typeof t=="symbol"?Symbol():"__"+t;r.get=function(){var n,o;return this[a]===void 0&&(this[a]=(o=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(i))!==null&&o!==void 0?o:null),this[a]}}return r}})}function se(i){return C({descriptor:e=>({async get(){var t;return await this.updateComplete,(t=this.renderRoot)===null||t===void 0?void 0:t.querySelector(i)},enumerable:!0,configurable:!0})})}var le,er=((le=window.HTMLSlotElement)===null||le===void 0?void 0:le.prototype.assignedElements)!=null?(i,e)=>i.assignedElements(e):(i,e)=>i.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE);var J=window,Q=J.ShadowRoot&&(J.ShadyCSS===void 0||J.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ce=Symbol(),Re=new WeakMap,V=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==ce)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Q&&e===void 0){let r=t!==void 0&&t.length===1;r&&(e=Re.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Re.set(t,e))}return e}toString(){return this.cssText}},Oe=i=>new V(typeof i=="string"?i:i+"",void 0,ce),A=(i,...e)=>{let t=i.length===1?i[0]:e.reduce((r,a,n)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+i[n+1],i[0]);return new V(t,i,ce)},de=(i,e)=>{Q?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{let r=document.createElement("style"),a=J.litNonce;a!==void 0&&r.setAttribute("nonce",a),r.textContent=t.cssText,i.appendChild(r)})},ee=Q?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return Oe(t)})(i):i;var he,te=window,Ie=te.trustedTypes,bt=Ie?Ie.emptyScript:"",Me=te.reactiveElementPolyfillSupport,ue={toAttribute(i,e){switch(e){case Boolean:i=i?bt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},Ne=(i,e)=>e!==i&&(e==e||i==i),pe={attribute:!0,type:String,converter:ue,reflect:!1,hasChanged:Ne},E=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((t,r)=>{let a=this._$Ep(r,t);a!==void 0&&(this._$Ev.set(a,r),e.push(a))}),e}static createProperty(e,t=pe){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){let r=typeof e=="symbol"?Symbol():"__"+e,a=this.getPropertyDescriptor(e,r,t);a!==void 0&&Object.defineProperty(this.prototype,e,a)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(a){let n=this[e];this[t]=a,this.requestUpdate(e,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||pe}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let t=this.properties,r=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(let a of r)this.createProperty(a,t[a])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let a of r)t.unshift(ee(a))}else e!==void 0&&t.push(ee(e));return t}static _$Ep(e,t){let r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,r;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;let t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return de(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostConnected)===null||r===void 0?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostDisconnected)===null||r===void 0?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t,r=pe){var a;let n=this.constructor._$Ep(e,r);if(n!==void 0&&r.reflect===!0){let o=(((a=r.converter)===null||a===void 0?void 0:a.toAttribute)!==void 0?r.converter:ue).toAttribute(t,r.type);this._$El=e,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(e,t){var r;let a=this.constructor,n=a._$Ev.get(e);if(n!==void 0&&this._$El!==n){let o=a.getPropertyOptions(n),d=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?o.converter:ue;this._$El=n,this[n]=d.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,r){let a=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||Ne)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):a=!1),!this.isUpdatePending&&a&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((a,n)=>this[n]=a),this._$Ei=void 0);let t=!1,r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(a=>{var n;return(n=a.hostUpdate)===null||n===void 0?void 0:n.call(a)}),this.update(r)):this._$Ek()}catch(a){throw t=!1,this._$Ek(),a}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var a;return(a=r.hostUpdated)===null||a===void 0?void 0:a.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,r)=>this._$EO(r,this[r],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};E.finalized=!0,E.elementProperties=new Map,E.elementStyles=[],E.shadowRootOptions={mode:"open"},Me?.({ReactiveElement:E}),((he=te.reactiveElementVersions)!==null&&he!==void 0?he:te.reactiveElementVersions=[]).push("1.6.1");var ve,re=window,U=re.trustedTypes,Le=U?U.createPolicy("lit-html",{createHTML:i=>i}):void 0,me="$lit$",P=`lit$${(Math.random()+"").slice(9)}$`,qe="?"+P,gt=`<${qe}>`,M=document,K=()=>M.createComment(""),Y=i=>i===null||typeof i!="object"&&typeof i!="function",Ge=Array.isArray,wt=i=>Ge(i)||typeof i?.[Symbol.iterator]=="function",fe=`[ 	
\f\r]`,W=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Be=/-->/g,He=/>/g,O=RegExp(`>|${fe}(?:([^\\s"'>=/]+)(${fe}*=${fe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),De=/'/g,Ue=/"/g,Ve=/^(?:script|style|textarea|title)$/i,We=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),k=We(1),gr=We(2),_=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),je=new WeakMap,I=M.createTreeWalker(M,129,null,!1),At=(i,e)=>{let t=i.length-1,r=[],a,n=e===2?"<svg>":"",o=W;for(let l=0;l<t;l++){let c=i[l],w,p,v=-1,b=0;for(;b<c.length&&(o.lastIndex=b,p=o.exec(c),p!==null);)b=o.lastIndex,o===W?p[1]==="!--"?o=Be:p[1]!==void 0?o=He:p[2]!==void 0?(Ve.test(p[2])&&(a=RegExp("</"+p[2],"g")),o=O):p[3]!==void 0&&(o=O):o===O?p[0]===">"?(o=a??W,v=-1):p[1]===void 0?v=-2:(v=o.lastIndex-p[2].length,w=p[1],o=p[3]===void 0?O:p[3]==='"'?Ue:De):o===Ue||o===De?o=O:o===Be||o===He?o=W:(o=O,a=void 0);let H=o===O&&i[l+1].startsWith("/>")?" ":"";n+=o===W?c+gt:v>=0?(r.push(w),c.slice(0,v)+me+c.slice(v)+P+H):c+P+(v===-2?(r.push(void 0),l):H)}let d=n+(i[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Le!==void 0?Le.createHTML(d):d,r]},N=class{constructor({strings:e,_$litType$:t},r){let a;this.parts=[];let n=0,o=0,d=e.length-1,l=this.parts,[c,w]=At(e,t);if(this.el=N.createElement(c,r),I.currentNode=this.el.content,t===2){let p=this.el.content,v=p.firstChild;v.remove(),p.append(...v.childNodes)}for(;(a=I.nextNode())!==null&&l.length<d;){if(a.nodeType===1){if(a.hasAttributes()){let p=[];for(let v of a.getAttributeNames())if(v.endsWith(me)||v.startsWith(P)){let b=w[o++];if(p.push(v),b!==void 0){let H=a.getAttribute(b.toLowerCase()+me).split(P),D=/([.?@])?(.*)/.exec(b);l.push({type:1,index:n,name:D[2],strings:H,ctor:D[1]==="."?_e:D[1]==="?"?be:D[1]==="@"?ge:F})}else l.push({type:6,index:n})}for(let v of p)a.removeAttribute(v)}if(Ve.test(a.tagName)){let p=a.textContent.split(P),v=p.length-1;if(v>0){a.textContent=U?U.emptyScript:"";for(let b=0;b<v;b++)a.append(p[b],K()),I.nextNode(),l.push({type:2,index:++n});a.append(p[v],K())}}}else if(a.nodeType===8)if(a.data===qe)l.push({type:2,index:n});else{let p=-1;for(;(p=a.data.indexOf(P,p+1))!==-1;)l.push({type:7,index:n}),p+=P.length-1}n++}}static createElement(e,t){let r=M.createElement("template");return r.innerHTML=e,r}};function j(i,e,t=i,r){var a,n,o,d;if(e===_)return e;let l=r!==void 0?(a=t._$Co)===null||a===void 0?void 0:a[r]:t._$Cl,c=Y(e)?void 0:e._$litDirective$;return l?.constructor!==c&&((n=l?._$AO)===null||n===void 0||n.call(l,!1),c===void 0?l=void 0:(l=new c(i),l._$AT(i,t,r)),r!==void 0?((o=(d=t)._$Co)!==null&&o!==void 0?o:d._$Co=[])[r]=l:t._$Cl=l),l!==void 0&&(e=j(i,l._$AS(i,e.values),l,r)),e}var ye=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;let{el:{content:r},parts:a}=this._$AD,n=((t=e?.creationScope)!==null&&t!==void 0?t:M).importNode(r,!0);I.currentNode=n;let o=I.nextNode(),d=0,l=0,c=a[0];for(;c!==void 0;){if(d===c.index){let w;c.type===2?w=new L(o,o.nextSibling,this,e):c.type===1?w=new c.ctor(o,c.name,c.strings,this,e):c.type===6&&(w=new we(o,this,e)),this._$AV.push(w),c=a[++l]}d!==c?.index&&(o=I.nextNode(),d++)}return I.currentNode=M,n}v(e){let t=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},L=class{constructor(e,t,r,a){var n;this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=a,this._$Cp=(n=a?.isConnected)===null||n===void 0||n}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=j(this,e,t),Y(e)?e===f||e==null||e===""?(this._$AH!==f&&this._$AR(),this._$AH=f):e!==this._$AH&&e!==_&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):wt(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==f&&Y(this._$AH)?this._$AA.nextSibling.data=e:this.$(M.createTextNode(e)),this._$AH=e}g(e){var t;let{values:r,_$litType$:a}=e,n=typeof a=="number"?this._$AC(e):(a.el===void 0&&(a.el=N.createElement(a.h,this.options)),a);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===n)this._$AH.v(r);else{let o=new ye(n,this),d=o.u(this.options);o.v(r),this.$(d),this._$AH=o}}_$AC(e){let t=je.get(e.strings);return t===void 0&&je.set(e.strings,t=new N(e)),t}T(e){Ge(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,a=0;for(let n of e)a===t.length?t.push(r=new L(this.k(K()),this.k(K()),this,this.options)):r=t[a],r._$AI(n),a++;a<t.length&&(this._$AR(r&&r._$AB.nextSibling,a),t.length=a)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,t);e&&e!==this._$AB;){let a=e.nextSibling;e.remove(),e=a}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},F=class{constructor(e,t,r,a,n){this.type=1,this._$AH=f,this._$AN=void 0,this.element=e,this.name=t,this._$AM=a,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=f}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,a){let n=this.strings,o=!1;if(n===void 0)e=j(this,e,t,0),o=!Y(e)||e!==this._$AH&&e!==_,o&&(this._$AH=e);else{let d=e,l,c;for(e=n[0],l=0;l<n.length-1;l++)c=j(this,d[r+l],t,l),c===_&&(c=this._$AH[l]),o||(o=!Y(c)||c!==this._$AH[l]),c===f?e=f:e!==f&&(e+=(c??"")+n[l+1]),this._$AH[l]=c}o&&!a&&this.j(e)}j(e){e===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},_e=class extends F{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===f?void 0:e}},kt=U?U.emptyScript:"",be=class extends F{constructor(){super(...arguments),this.type=4}j(e){e&&e!==f?this.element.setAttribute(this.name,kt):this.element.removeAttribute(this.name)}},ge=class extends F{constructor(e,t,r,a,n){super(e,t,r,a,n),this.type=5}_$AI(e,t=this){var r;if((e=(r=j(this,e,t,0))!==null&&r!==void 0?r:f)===_)return;let a=this._$AH,n=e===f&&a!==f||e.capture!==a.capture||e.once!==a.once||e.passive!==a.passive,o=e!==f&&(a===f||n);n&&this.element.removeEventListener(this.name,this,a),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},we=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){j(this,e)}};var Fe=re.litHtmlPolyfillSupport;Fe?.(N,L),((ve=re.litHtmlVersions)!==null&&ve!==void 0?ve:re.litHtmlVersions=[]).push("2.7.4");var Ke=(i,e,t)=>{var r,a;let n=(r=t?.renderBefore)!==null&&r!==void 0?r:e,o=n._$litPart$;if(o===void 0){let d=(a=t?.renderBefore)!==null&&a!==void 0?a:null;n._$litPart$=o=new L(e.insertBefore(K(),d),d,void 0,t??{})}return o._$AI(i),o};var Ae,ke;var m=class extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;let r=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=r.firstChild),r}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ke(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return _}};m.finalized=!0,m._$litElement$=!0,(Ae=globalThis.litElementHydrateSupport)===null||Ae===void 0||Ae.call(globalThis,{LitElement:m});var Ye=globalThis.litElementPolyfillSupport;Ye?.({LitElement:m});((ke=globalThis.litElementVersions)!==null&&ke!==void 0?ke:globalThis.litElementVersions=[]).push("3.3.2");var Ze=A`@media(forced-colors: active){:host{--md-slider-active-track-color:CanvasText;--md-slider-disabled-active-track-color:GrayText;--md-slider-disabled-active-track-opacity:1;--md-slider-disabled-handle-color:GrayText;--md-slider-disabled-inactive-track-color:GrayText;--md-slider-disabled-inactive-track-opacity:1;--md-slider-focus-handle-color:CanvasText;--md-slider-handle-color:CanvasText;--md-slider-handle-shadow-color:Canvas;--md-slider-hover-handle-color:CanvasText;--md-slider-hover-state-layer-color:Canvas;--md-slider-hover-state-layer-opacity:1;--md-slider-inactive-track-color:Canvas;--md-slider-label-container-color:Canvas;--md-slider-label-label-text-color:CanvasText;--md-slider-pressed-handle-color:CanvasText;--md-slider-pressed-state-layer-color:Canvas;--md-slider-pressed-state-layer-opacity:1;--md-slider-with-overlap-handle-outline-color:CanvasText;--md-slider-with-tick-marks-active-container-color:Canvas;--md-slider-with-tick-marks-disabled-container-color:GrayText;--md-slider-with-tick-marks-inactive-container-color:CanvasText}.label,.label::before{border:var(--_with-overlap-handle-outline-color) solid var(--_with-overlap-handle-outline-width)}:host(:not([disabled])) .track::before{border:1px solid var(--_active-track-color)}}/*# sourceMappingURL=forced-colors-styles.css.map */
`;var ie=class extends m{render(){return k`<span class="shadow"></span>`}};var Xe=A`:host{--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000));display:flex;pointer-events:none}:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-timing-function:inherit}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}/*# sourceMappingURL=elevation-styles.css.map */
`;var xe=class extends ie{};xe.styles=[Xe];xe=s([S("md-elevation")],xe);var B=class extends m{constructor(){super(...arguments),this.visible=!1,this.inward=!1,this.htmlFor=null,this.currentControl=null}get control(){return this.hasAttribute("for")?this.htmlFor?this.getRootNode().querySelector(`#${this.htmlFor}`):null:this.currentControl||this.parentElement}attach(e){e!==this.currentControl&&(this.setCurrentControl(e),this.removeAttribute("for"))}detach(){this.setCurrentControl(null),this.setAttribute("for","")}connectedCallback(){super.connectedCallback(),this.setCurrentControl(this.control)}disconnectedCallback(){super.disconnectedCallback(),this.setCurrentControl(null)}updated(e){if(e.has("htmlFor")){let{control:t}=this;t&&this.setCurrentControl(t)}}handleEvent(e){if(!e[Je]){switch(e.type){default:return;case"focusin":this.visible=this.control?.matches(":focus-visible")??!1;break;case"focusout":case"pointerdown":this.visible=!1;break}e[Je]=!0}}setCurrentControl(e){for(let t of["focusin","focusout","pointerdown"])this.currentControl?.removeEventListener(t,this),e?.addEventListener(t,this);this.currentControl=e}};s([u({type:Boolean,reflect:!0})],B.prototype,"visible",void 0);s([u({type:Boolean,reflect:!0})],B.prototype,"inward",void 0);s([u({attribute:"for",reflect:!0})],B.prototype,"htmlFor",void 0);var Je=Symbol("handledByFocusRing");var Qe=A`:host{--_active-width: var(--md-focus-ring-active-width, 8px);--_color: var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));--_duration: var(--md-focus-ring-duration, 600ms);--_inward-offset: var(--md-focus-ring-inward-offset, 0px);--_outward-offset: var(--md-focus-ring-outward-offset, 2px);--_shape: var(--md-focus-ring-shape, 9999px);--_width: var(--md-focus-ring-width, 3px);--_shape-start-start: var(--md-focus-ring-shape-start-start, var(--_shape));--_shape-start-end: var(--md-focus-ring-shape-start-end, var(--_shape));--_shape-end-end: var(--md-focus-ring-shape-end-end, var(--_shape));--_shape-end-start: var(--md-focus-ring-shape-end-start, var(--_shape));animation-delay:0s,calc(var(--_duration)*.25);animation-duration:calc(var(--_duration)*.25),calc(var(--_duration)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--_color);display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--_shape-end-end) + var(--_outward-offset));border-end-start-radius:calc(var(--_shape-end-start) + var(--_outward-offset));border-start-end-radius:calc(var(--_shape-start-end) + var(--_outward-offset));border-start-start-radius:calc(var(--_shape-start-start) + var(--_outward-offset));inset:calc(-1*(var(--_outward-offset)));outline:var(--_width) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--_shape-end-end) - var(--_inward-offset));border-end-start-radius:calc(var(--_shape-end-start) - var(--_inward-offset));border-start-end-radius:calc(var(--_shape-start-end) - var(--_inward-offset));border-start-start-radius:calc(var(--_shape-start-start) - var(--_inward-offset));border:var(--_width) solid currentColor;inset:var(--_inward-offset)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--_active-width)}}@keyframes outward-shrink{from{outline-width:var(--_active-width)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--_active-width)}}@keyframes inward-shrink{from{border-width:var(--_active-width)}}@media(prefers-reduced-motion){:host{animation:none}}/*# sourceMappingURL=focus-ring-styles.css.map */
`;var Ee=class extends B{};Ee.styles=[Qe];Ee=s([S("md-focus-ring")],Ee);var q={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},G=i=>(...e)=>({_$litDirective$:i,values:e}),T=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var z=G(class extends T{constructor(i){var e;if(super(i),i.type!==q.ATTRIBUTE||i.name!=="class"||((e=i.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(e=>i[e]).join(" ")+" "}update(i,[e]){var t,r;if(this.it===void 0){this.it=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(let n in e)e[n]&&!(!((t=this.nt)===null||t===void 0)&&t.has(n))&&this.it.add(n);return this.render(e)}let a=i.element.classList;this.it.forEach(n=>{n in e||(a.remove(n),this.it.delete(n))});for(let n in e){let o=!!e[n];o===this.it.has(n)||!((r=this.nt)===null||r===void 0)&&r.has(n)||(o?(a.add(n),this.it.add(n)):(a.remove(n),this.it.delete(n)))}return _}});var et={STANDARD:"cubic-bezier(0.2, 0, 0, 1)",STANDARD_ACCELERATE:"cubic-bezier(.3,0,1,1)",STANDARD_DECELERATE:"cubic-bezier(0,0,0,1)",EMPHASIZED:"cubic-bezier(.3,0,0,1)",EMPHASIZED_ACCELERATE:"cubic-bezier(.3,0,.8,.15)",EMPHASIZED_DECELERATE:"cubic-bezier(.05,.7,.1,1)"};var xt=450,tt=225,Et=.2,$t=10,St=75,Ct=.35,Pt="::after",Tt="forwards",y;(function(i){i[i.INACTIVE=0]="INACTIVE",i[i.TOUCH_DELAY=1]="TOUCH_DELAY",i[i.HOLDING=2]="HOLDING",i[i.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"})(y||(y={}));var zt=150,x=class extends m{constructor(){super(...arguments),this.unbounded=!1,this.disabled=!1,this.hovered=!1,this.focused=!1,this.pressed=!1,this.rippleSize="",this.rippleScale="",this.initialSize=0,this.state=y.INACTIVE,this.checkBoundsAfterContextMenu=!1}handlePointerenter(e){this.shouldReactToEvent(e)&&(this.hovered=!0)}handlePointerleave(e){this.shouldReactToEvent(e)&&(this.hovered=!1,this.state!==y.INACTIVE&&this.endPressAnimation())}handleFocusin(){this.focused=!0}handleFocusout(){this.focused=!1}handlePointerup(e){if(this.shouldReactToEvent(e)){if(this.state===y.HOLDING){this.state=y.WAITING_FOR_CLICK;return}if(this.state===y.TOUCH_DELAY){this.state=y.WAITING_FOR_CLICK,this.startPressAnimation(this.rippleStartEvent);return}}}async handlePointerdown(e){if(this.shouldReactToEvent(e)){if(this.rippleStartEvent=e,!this.isTouch(e)){this.state=y.WAITING_FOR_CLICK,this.startPressAnimation(e);return}this.checkBoundsAfterContextMenu&&!this.inBounds(e)||(this.checkBoundsAfterContextMenu=!1,this.state=y.TOUCH_DELAY,await new Promise(t=>{setTimeout(t,zt)}),this.state===y.TOUCH_DELAY&&(this.state=y.HOLDING,this.startPressAnimation(e)))}}handleClick(){if(!this.disabled){if(this.state===y.WAITING_FOR_CLICK){this.endPressAnimation();return}this.state===y.INACTIVE&&(this.startPressAnimation(),this.endPressAnimation())}}handlePointercancel(e){this.shouldReactToEvent(e)&&this.endPressAnimation()}handleContextmenu(){this.disabled||(this.checkBoundsAfterContextMenu=!0,this.endPressAnimation())}render(){let e={hovered:this.hovered,focused:this.focused,pressed:this.pressed,unbounded:this.unbounded};return k`<div class="surface ${z(e)}"></div>`}update(e){e.has("disabled")&&this.disabled&&(this.hovered=!1,this.focused=!1,this.pressed=!1),super.update(e)}getDimensions(){return(this.parentElement??this).getBoundingClientRect()}determineRippleSize(){let{height:e,width:t}=this.getDimensions(),r=Math.max(e,t),a=Math.max(Ct*r,St),n=r,o=Math.floor(r*Et);n=Math.sqrt(t**2+e**2)+$t,this.unbounded&&(o=o-o%2),this.initialSize=o,this.rippleScale=`${(n+a)/o}`,this.rippleSize=`${this.initialSize}px`}getNormalizedPointerEventCoords(e){let{scrollX:t,scrollY:r}=window,{left:a,top:n}=this.getDimensions(),o=t+a,d=r+n,{pageX:l,pageY:c}=e;return{x:l-o,y:c-d}}getTranslationCoordinates(e){let{height:t,width:r}=this.getDimensions(),a={x:(r-this.initialSize)/2,y:(t-this.initialSize)/2},n;return e instanceof PointerEvent?n=this.getNormalizedPointerEventCoords(e):n={x:r/2,y:t/2},n={x:n.x-this.initialSize/2,y:n.y-this.initialSize/2},{startPoint:n,endPoint:a}}startPressAnimation(e){if(!this.mdRoot)return;this.pressed=!0,this.growAnimation?.cancel(),this.determineRippleSize();let{startPoint:t,endPoint:r}=this.getTranslationCoordinates(e),a=`${t.x}px, ${t.y}px`,n=`${r.x}px, ${r.y}px`;this.growAnimation=this.mdRoot.animate({top:[0,0],left:[0,0],height:[this.rippleSize,this.rippleSize],width:[this.rippleSize,this.rippleSize],transform:[`translate(${a}) scale(1)`,`translate(${n}) scale(${this.rippleScale})`]},{pseudoElement:Pt,duration:xt,easing:et.STANDARD,fill:Tt})}async endPressAnimation(){this.state=y.INACTIVE;let e=this.growAnimation,t=e?.currentTime??1/0;if(t>=tt){this.pressed=!1;return}await new Promise(r=>{setTimeout(r,tt-t)}),this.growAnimation===e&&(this.pressed=!1)}shouldReactToEvent(e){if(this.disabled||!e.isPrimary||this.rippleStartEvent&&this.rippleStartEvent.pointerId!==e.pointerId)return!1;if(e.type==="pointerenter"||e.type==="pointerleave")return!this.isTouch(e);let t=e.buttons===1;return this.isTouch(e)||t}inBounds({x:e,y:t}){let{top:r,left:a,bottom:n,right:o}=this.getBoundingClientRect();return e>=a&&e<=o&&t>=r&&t<=n}isTouch({pointerType:e}){return e==="touch"}};s([u({type:Boolean,reflect:!0})],x.prototype,"unbounded",void 0);s([u({type:Boolean,reflect:!0})],x.prototype,"disabled",void 0);s([g()],x.prototype,"hovered",void 0);s([g()],x.prototype,"focused",void 0);s([g()],x.prototype,"pressed",void 0);s([R(".surface")],x.prototype,"mdRoot",void 0);var rt=A`:host{--_focus-color: var(--md-ripple-focus-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-opacity: var(--md-ripple-focus-opacity, 0.12);--_hover-color: var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-opacity: var(--md-ripple-hover-opacity, 0.08);--_pressed-color: var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-opacity: var(--md-ripple-pressed-opacity, 0.12);display:flex}:host([disabled]){opacity:0}:host,.surface{border-radius:inherit;position:absolute;inset:0;pointer-events:none;overflow:hidden}.surface{outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{position:absolute;opacity:0;pointer-events:none;content:""}.surface::before{background-color:var(--_hover-color);transition:opacity 15ms linear,background-color 15ms linear;inset:0}.surface::after{background:radial-gradient(closest-side, var(--_pressed-color) max(100% - 70px, 65%), transparent 100%);transition:opacity 375ms linear;transform-origin:center center}.hovered::before{background-color:var(--_hover-color);opacity:var(--_hover-opacity)}.focused::before{background-color:var(--_focus-color);opacity:var(--_focus-opacity);transition-duration:75ms}.pressed::after{opacity:var(--_pressed-opacity);transition-duration:105ms}@media screen and (forced-colors: active){:host{display:none}}/*# sourceMappingURL=ripple-styles.css.map */
`;var $e=class extends x{};$e.styles=[rt];$e=s([S("md-ripple")],$e);var it="important",Rt=" !"+it,at=G(class extends T{constructor(i){var e;if(super(i),i.type!==q.ATTRIBUTE||i.name!=="style"||((e=i.strings)===null||e===void 0?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(i){return Object.keys(i).reduce((e,t)=>{let r=i[t];return r==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(i,[e]){let{style:t}=i.element;if(this.ut===void 0){this.ut=new Set;for(let r in e)this.ut.add(r);return this.render(e)}this.ut.forEach(r=>{e[r]==null&&(this.ut.delete(r),r.includes("-")?t.removeProperty(r):t[r]="")});for(let r in e){let a=e[r];if(a!=null){this.ut.add(r);let n=typeof a=="string"&&a.endsWith(Rt);r.includes("-")||n?t.setProperty(r,n?a.slice(0,-11):a,n?it:""):t[r]=a}}return _}});function Z(i,e,t){return i?e():t?.()}var Se=["ariaAtomic","ariaAutoComplete","ariaBusy","ariaChecked","ariaColCount","ariaColIndex","ariaColSpan","ariaCurrent","ariaDisabled","ariaExpanded","ariaHasPopup","ariaHidden","ariaInvalid","ariaKeyShortcuts","ariaLabel","ariaLevel","ariaLive","ariaModal","ariaMultiLine","ariaMultiSelectable","ariaOrientation","ariaPlaceholder","ariaPosInSet","ariaPressed","ariaReadOnly","ariaRequired","ariaRoleDescription","ariaRowCount","ariaRowIndex","ariaRowSpan","ariaSelected","ariaSetSize","ariaSort","ariaValueMax","ariaValueMin","ariaValueNow","ariaValueText"],Ii=Se.map(Ce);function Ce(i){return i.replace("aria","aria-").replace(/Elements?/g,"").toLowerCase()}function nt(i){for(let e of Se)i.createProperty(e,{attribute:Ce(e),reflect:!0});i.addInitializer(e=>{let t={hostConnected(){e.setAttribute("role","presentation")}};e.addController(t)})}function ot(i,e){e.bubbles&&(!i.shadowRoot||e.composed)&&e.stopPropagation();let t=Reflect.construct(e.constructor,[e.type,e]),r=i.dispatchEvent(t);return r||e.preventDefault(),r}function st(i){let e=new MouseEvent("click",{bubbles:!0});return i.dispatchEvent(e),e}function lt(i){return i.currentTarget!==i.target||i.composedPath()[0]!==i.target||i.target.disabled?!1:!Ot(i)}function Ot(i){let e=Pe;return e&&(i.preventDefault(),i.stopImmediatePropagation()),It(),e}var Pe=!1;async function It(){Pe=!0,await null,Pe=!1}var Te=Symbol("getFormValue"),ae=class{constructor(e){this.element=e,this.formDataListener=t=>{if(this.element.disabled)return;let r=this.element[Te]();if(r instanceof FormData){for(let[a,n]of r)t.formData.append(a,n);return}r===null||!this.element.name||t.formData.append(this.element.name,r)}}hostConnected(){!this.element.shadowRoot||window.ShadyDOM?.inUse||(this.form=this.element.form,this.form?.addEventListener("formdata",this.formDataListener))}hostDisconnected(){this.form?.removeEventListener("formdata",this.formDataListener)}};var ct={fromAttribute(i){return i??""},toAttribute(i){return i||null}};var ze=class extends T{constructor(e){if(super(e),this.rippleGetter=async()=>null,e.type!==q.ELEMENT)throw new Error("The `ripple` directive must be used on an element")}render(e){return _}async handleEvent(e){let t=await this.rippleGetter();if(t)switch(e.type){case"click":t.handleClick();break;case"contextmenu":t.handleContextmenu();break;case"pointercancel":t.handlePointercancel(e);break;case"pointerdown":await t.handlePointerdown(e);break;case"pointerenter":t.handlePointerenter(e);break;case"pointerleave":t.handlePointerleave(e);break;case"pointerup":t.handlePointerup(e);break;default:break}}update(e,[t]){return this.element||(this.element=e.element,this.element.addEventListener("click",this),this.element.addEventListener("contextmenu",this),this.element.addEventListener("pointercancel",this),this.element.addEventListener("pointerdown",this),this.element.addEventListener("pointerenter",this),this.element.addEventListener("pointerleave",this),this.element.addEventListener("pointerup",this)),this.rippleGetter=typeof t=="function"?t:()=>t,_}},dt=G(ze);var ut;function ht({x:i,y:e},t){if(!t)return!1;let{top:r,left:a,bottom:n,right:o}=t.getBoundingClientRect();return i>=a&&i<=o&&e>=r&&e<=n}function pt(i,e,t){return Math.max(e,Math.min(t,i))}function Nt(i,e){if(!(i&&e))return!1;let t=i.getBoundingClientRect(),r=e.getBoundingClientRect();return!(t.top>r.bottom||t.right<r.left||t.bottom<r.top||t.left>r.right)}var h=class extends m{static get formAssociated(){return!0}get form(){return this.closest("form")}getMetrics(){let e=Math.max(this.step,1),t=Math.max(this.max-this.min,e),r=Math.min(this.valueA,this.valueB),a=Math.max(this.valueA,this.valueB),n=(r-this.min)/t,o=(a-this.min)/t;return{step:e,range:t,lower:r,upper:a,lowerFraction:n,upperFraction:o}}constructor(){super(),this.disabled=!1,this.min=0,this.max=100,this.value=50,this.valueStart=25,this.valueEnd=75,this.step=1,this.withTickMarks=!1,this.withLabel=!1,this.range=!1,this.name="",this.valueA=0,this.valueB=0,this.rippleAShowing=!1,this.rippleBShowing=!1,this.handleAHover=!1,this.handleBHover=!1,this.onTopId="b",this.handlesOverlapping=!1,this.renderRipple=e=>k`<md-ripple class=${e} ?disabled=${this.disabled} unbounded></md-ripple>`,this.getRippleA=()=>this.handleAHover?(this.rippleAShowing=!0,this.rippleA):null,this.getRippleB=()=>this.handleBHover?(this.rippleBShowing=!0,this.rippleB):null,this.ripplePointerId=1,this.addController(new ae(this)),!1||this.addEventListener("click",e=>{!lt(e)||!this.inputB||(this.focus(),st(this.inputB))})}focus(){this.inputB?.focus()}[Te](){return this.range?`${this.valueStart}, ${this.valueEnd}`:`${this.value}`}isFlipped(){return this.valueA>this.valueB}willUpdate(e){let t=Math.max(this.step,1),r=this.range?this.valueStart:this.min;r=pt(r-r%t,this.min,this.max);let a=this.range?this.valueEnd:this.value;a=pt(a-a%t,this.min,this.max);let n=this.isFlipped()&&this.range;this.valueA=n?a:r,this.valueB=n?r:a,e.get("handleAHover")!==void 0?(this.rippleAShowing=!0,this.toggleRippleHover(this.rippleA,this.handleAHover)):e.get("handleBHover")!==void 0&&(this.rippleBShowing=!0,this.toggleRippleHover(this.rippleB,this.handleBHover))}async updated(e){(e.has("range")||e.has("valueA")||e.has("valueB"))&&(await this.updateComplete,this.handlesOverlapping=Nt(this.handleA,this.handleB))}render(){let{step:e,range:t,lowerFraction:r,upperFraction:a}=this.getMetrics(),n=this.isFlipped(),o={"--slider-lower-fraction":String(r),"--slider-upper-fraction":String(a),"--slider-tick-count":String(t/e)},d={ranged:this.range},l=String(this.valueA),c=String(this.valueB);if(this.range){let D=n?this.valueEndLabel:this.valueStartLabel,yt=n?this.valueStartLabel:this.valueEndLabel;l=D??l,c=yt??c}else c=this.valueLabel??c;let w={id:"a",lesser:!n,value:this.valueA,label:l,getRipple:this.getRippleA},p={id:"b",lesser:n,value:this.valueB,label:c,getRipple:this.getRippleB},v={id:"a",lesser:!n,showRipple:this.rippleAShowing,hover:this.handleAHover,label:l},b={id:"b",lesser:n,showRipple:this.rippleBShowing,hover:this.handleBHover,label:c},H={hover:this.handleAHover||this.handleBHover};return k`
      <div
        class="container ${z(d)}"
        style=${at(o)}
      >
        ${Z(this.range,()=>this.renderInput(w))}
        ${this.renderInput(p)}
        ${this.renderTrack()}
        <div class="handleContainerPadded">
          <div class="handleContainerBlock">
            <div class="handleContainer ${z(H)}">
              ${Z(this.range,()=>this.renderHandle(v))}
              ${this.renderHandle(b)}
            </div>
          </div>
        </div>
      </div>`}renderTrack(){let e={tickMarks:this.withTickMarks};return k`<div class="track ${z(e)}"></div>`}renderLabel(e){return k`<div class="label">
        <span class="labelContent" part="label">${e}</span>
      </div>`}renderHandle({id:e,lesser:t,showRipple:r,hover:a,label:n}){let o=!this.disabled&&e===this.onTopId,d=!this.disabled&&this.handlesOverlapping;return k`<div class="handle ${z({[e]:!0,lesser:t,hover:a,onTop:o,isOverlapping:d})}">
        <div class="handleNub"><md-elevation></md-elevation></div>
        ${Z(this.withLabel,()=>this.renderLabel(n))}
      ${Z(r,()=>this.renderRipple(e))}
      <md-focus-ring for=${e}></md-focus-ring>
    </div>`}renderInput({id:e,lesser:t,value:r,label:a,getRipple:n}){let o=this.range?` - ${t?"start":"end"} handle`:"",{ariaLabel:d}=this;return k`<input type="range"
      class="${z({lesser:t,[e]:!0})}"
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
      aria-label=${`${d}${o}`||f}
      aria-valuetext=${a}
      ${dt(n)}>`}async toggleRippleHover(e,t){let r=await e;r&&(t?r.handlePointerenter(new PointerEvent("pointerenter",{isPrimary:!0,pointerId:this.ripplePointerId})):r.handlePointerleave(new PointerEvent("pointerleave",{isPrimary:!0,pointerId:this.ripplePointerId})))}isEventOnA({target:e}){return e===this.inputA}handleFocus(e){this.updateOnTop(e)}handleDown(e){this.ripplePointerId=e.pointerId;let t=this.isEventOnA(e);this.handleAHover=!this.disabled&&t&&!!this.handleA,this.handleBHover=!this.disabled&&!t&&!!this.handleB;let r=e.target;requestAnimationFrame(()=>{r.focus()})}handleMove(e){this.handleAHover=!this.disabled&&ht(e,this.handleA),this.handleBHover=!this.disabled&&ht(e,this.handleB)}handleEnter(e){this.handleMove(e)}handleLeave(){this.handleAHover=!1,this.handleBHover=!1}updateOnTop(e){this.onTopId=e.target.classList.contains("a")?"a":"b"}handleInput(e){this.inputA&&(this.valueA=this.inputA.valueAsNumber??0),this.valueB=this.inputB.valueAsNumber,this.updateOnTop(e);let t=Math.min(this.valueA,this.valueB),r=Math.max(this.valueA,this.valueB);this.range?(this.valueStart=t,this.valueEnd=r):this.value=this.valueB}handleChange(e){ot(this,e)}};ut=h;nt(ut);h.shadowRootOptions={...m.shadowRootOptions,delegatesFocus:!0};s([u({type:Boolean,reflect:!0})],h.prototype,"disabled",void 0);s([u({type:Number})],h.prototype,"min",void 0);s([u({type:Number})],h.prototype,"max",void 0);s([u({type:Number})],h.prototype,"value",void 0);s([u({type:Number})],h.prototype,"valueStart",void 0);s([u({type:Number})],h.prototype,"valueEnd",void 0);s([u()],h.prototype,"valueLabel",void 0);s([u()],h.prototype,"valueStartLabel",void 0);s([u()],h.prototype,"valueEndLabel",void 0);s([u({type:Number})],h.prototype,"step",void 0);s([u({type:Boolean})],h.prototype,"withTickMarks",void 0);s([u({type:Boolean})],h.prototype,"withLabel",void 0);s([u({type:Boolean})],h.prototype,"range",void 0);s([u({reflect:!0,converter:ct})],h.prototype,"name",void 0);s([R("input.a")],h.prototype,"inputA",void 0);s([R(".handle.a")],h.prototype,"handleA",void 0);s([se("md-ripple.a")],h.prototype,"rippleA",void 0);s([R("input.b")],h.prototype,"inputB",void 0);s([R(".handle.b")],h.prototype,"handleB",void 0);s([se("md-ripple.b")],h.prototype,"rippleB",void 0);s([g()],h.prototype,"valueA",void 0);s([g()],h.prototype,"valueB",void 0);s([g()],h.prototype,"rippleAShowing",void 0);s([g()],h.prototype,"rippleBShowing",void 0);s([g()],h.prototype,"handleAHover",void 0);s([g()],h.prototype,"handleBHover",void 0);s([g()],h.prototype,"onTopId",void 0);s([g()],h.prototype,"handlesOverlapping",void 0);var vt=A`:host{display:inline-flex;vertical-align:middle;--_active-track-color: var(--md-slider-active-track-color, var(--md-sys-color-primary, #6750a4));--_active-track-height: var(--md-slider-active-track-height, 4px);--_active-track-shape: var(--md-slider-active-track-shape, 9999px);--_disabled-active-track-color: var(--md-slider-disabled-active-track-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-track-opacity: var(--md-slider-disabled-active-track-opacity, 0.38);--_disabled-handle-color: var(--md-slider-disabled-handle-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-handle-elevation: var(--md-slider-disabled-handle-elevation, 0);--_disabled-inactive-track-color: var(--md-slider-disabled-inactive-track-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-inactive-track-opacity: var(--md-slider-disabled-inactive-track-opacity, 0.12);--_focus-handle-color: var(--md-slider-focus-handle-color, var(--md-sys-color-primary, #6750a4));--_handle-color: var(--md-slider-handle-color, var(--md-sys-color-primary, #6750a4));--_handle-elevation: var(--md-slider-handle-elevation, 1);--_handle-height: var(--md-slider-handle-height, 20px);--_handle-shadow-color: var(--md-slider-handle-shadow-color, var(--md-sys-color-shadow, #000));--_handle-shape: var(--md-slider-handle-shape, 9999px);--_handle-width: var(--md-slider-handle-width, 20px);--_hover-handle-color: var(--md-slider-hover-handle-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-slider-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-slider-hover-state-layer-opacity, 0.08);--_inactive-track-color: var(--md-slider-inactive-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_inactive-track-height: var(--md-slider-inactive-track-height, 4px);--_inactive-track-shape: var(--md-slider-inactive-track-shape, 9999px);--_label-container-color: var(--md-slider-label-container-color, var(--md-sys-color-primary, #6750a4));--_label-container-height: var(--md-slider-label-container-height, 28px);--_label-label-text-color: var(--md-slider-label-label-text-color, var(--md-sys-color-on-primary, #fff));--_label-label-text-type: var(--md-slider-label-label-text-type, var(--md-sys-typescale-label-medium, 500 0.75rem / 1rem var(--md-ref-typeface-plain, Roboto)));--_pressed-handle-color: var(--md-slider-pressed-handle-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-slider-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-slider-pressed-state-layer-opacity, 0.12);--_state-layer-size: var(--md-slider-state-layer-size, 40px);--_with-overlap-handle-outline-color: var(--md-slider-with-overlap-handle-outline-color, var(--md-sys-color-on-primary, #fff));--_with-overlap-handle-outline-width: var(--md-slider-with-overlap-handle-outline-width, 1px);--_with-tick-marks-active-container-color: var(--md-slider-with-tick-marks-active-container-color, var(--md-sys-color-on-primary, #fff));--_with-tick-marks-container-size: var(--md-slider-with-tick-marks-container-size, 2px);--_with-tick-marks-disabled-container-color: var(--md-slider-with-tick-marks-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_with-tick-marks-inactive-container-color: var(--md-slider-with-tick-marks-inactive-container-color, var(--md-sys-color-on-surface-variant, #49454f));min-inline-size:200px;--md-elevation-level:var(--_handle-elevation);--md-elevation-shadow-color:var(--_handle-shadow-color)}md-elevation{transition-duration:250ms}@media(prefers-reduced-motion){.label{transition-duration:0}}:host([disabled]){opacity:var(--_disabled-active-track-opacity);--md-elevation-level:var(--_disabled-handle-elevation)}.container{flex:1;display:flex;align-items:center;position:relative;block-size:var(--_state-layer-size);pointer-events:none;touch-action:none}.track{position:absolute;inset:0;display:flex;align-items:center}.track::before,.track::after{position:absolute;content:"";inset-inline-start:calc(var(--_state-layer-size)/2 - var(--_with-tick-marks-container-size));inset-inline-end:calc(var(--_state-layer-size)/2 - var(--_with-tick-marks-container-size));background-size:calc((100% - var(--_with-tick-marks-container-size)*2)/var(--slider-tick-count)) 100%}.track::before{block-size:var(--_inactive-track-height);border-radius:var(--_inactive-track-shape);background-color:var(--_inactive-track-color)}.track.tickMarks::before{background-image:radial-gradient(circle at var(--_with-tick-marks-container-size) center, var(--_with-tick-marks-inactive-container-color) 0, var(--_with-tick-marks-inactive-container-color) calc(var(--_with-tick-marks-container-size) / 2), transparent calc(var(--_with-tick-marks-container-size) / 2))}:host([disabled]) .track::before{opacity:calc(1/var(--_disabled-active-track-opacity)*var(--_disabled-inactive-track-opacity));background-color:var(--_disabled-inactive-track-color)}.track::after{block-size:var(--_active-track-height);border-radius:var(--_active-track-shape);clip-path:inset(0 calc(var(--_with-tick-marks-container-size) * min((1 - var(--slider-upper-fraction)) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * (1 - var(--slider-upper-fraction))) 0 calc(var(--_with-tick-marks-container-size) * min(var(--slider-lower-fraction) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * var(--slider-lower-fraction)));background-color:var(--_active-track-color)}:host-context([dir=rtl]) .track::after{clip-path:inset(0 calc(var(--_with-tick-marks-container-size) * min(var(--slider-lower-fraction) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * var(--slider-lower-fraction)) 0 calc(var(--_with-tick-marks-container-size) * min((1 - var(--slider-upper-fraction)) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * (1 - var(--slider-upper-fraction))))}:host([dir=rtl]) .track::after{clip-path:inset(0 calc(var(--_with-tick-marks-container-size) * min(var(--slider-lower-fraction) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * var(--slider-lower-fraction)) 0 calc(var(--_with-tick-marks-container-size) * min((1 - var(--slider-upper-fraction)) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * (1 - var(--slider-upper-fraction))))}.track:dir(rtl)::after{clip-path:inset(0 calc(var(--_with-tick-marks-container-size) * min(var(--slider-lower-fraction) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * var(--slider-lower-fraction)) 0 calc(var(--_with-tick-marks-container-size) * min((1 - var(--slider-upper-fraction)) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * (1 - var(--slider-upper-fraction))))}.track.tickMarks::after{background-image:radial-gradient(circle at var(--_with-tick-marks-container-size) center, var(--_with-tick-marks-active-container-color) 0, var(--_with-tick-marks-active-container-color) calc(var(--_with-tick-marks-container-size) / 2), transparent calc(var(--_with-tick-marks-container-size) / 2))}:host([disabled]) .track::after{background-color:var(--_disabled-active-track-color)}:host([disabled]) .track.tickMarks::before,:host([disabled]) .track.tickMarks::after{background-image:radial-gradient(circle at var(--_with-tick-marks-container-size) center, var(--_with-tick-marks-disabled-container-color) 0, var(--_with-tick-marks-disabled-container-color) calc(var(--_with-tick-marks-container-size) / 2), transparent calc(var(--_with-tick-marks-container-size) / 2))}.handleContainerPadded{position:relative;block-size:100%;inline-size:100%;padding-inline:calc(var(--_state-layer-size)/2)}.handleContainerBlock{position:relative;block-size:100%;inline-size:100%}.handleContainer{position:absolute;inset-block-start:0;inset-block-end:0;inset-inline-start:calc(100%*var(--slider-lower-fraction));inline-size:calc(100%*(var(--slider-upper-fraction) - var(--slider-lower-fraction)))}.handle{position:absolute;block-size:var(--_state-layer-size);inline-size:var(--_state-layer-size);border-radius:var(--_handle-shape);display:grid;place-items:center}.handleNub{position:absolute;height:var(--_handle-height);width:var(--_handle-width);border-radius:var(--_handle-shape);background:var(--_handle-color)}:host([disabled]) .handleNub{background:var(--_disabled-handle-color)}input.b:focus~.handleContainerPadded .handle.b>.handleNub,input.a:focus~.handleContainerPadded .handle.a>.handleNub{background:var(--_focus-handle-color)}.container>.handleContainerPadded .handle.hover>.handleNub{background:var(--_hover-handle-color)}:host(:not([disabled])) input.b:active~.handleContainerPadded .handle.b>.handleNub,:host(:not([disabled])) input.a:active~.handleContainerPadded .handle.a>.handleNub{background:var(--_pressed-handle-color)}.onTop.isOverlapping .handleNub,.onTop.isOverlapping .label,.onTop.isOverlapping .label::before{border:var(--_with-overlap-handle-outline-color) solid var(--_with-overlap-handle-outline-width)}.handle.lesser{inset-inline-start:calc(0px - var(--_state-layer-size)/2)}.handle:not(.lesser){inset-inline-end:calc(0px - var(--_state-layer-size)/2)}.label{position:absolute;box-sizing:border-box;display:grid;padding:4px;place-items:center;border-radius:9999px;color:var(--_label-label-text-color);font:var(--_label-label-text-type);inset-block-end:100%;min-inline-size:var(--_label-container-height);min-block-size:var(--_label-container-height);background:var(--_label-container-color);transition:transform 100ms cubic-bezier(0.2, 0, 0, 1);transform-origin:center bottom;transform:scale(0)}:host(:focus-within) .label,.handleContainer.hover .label{transform:scale(1)}.label::before,.label::after{position:absolute;display:block;content:"";background:inherit}.label::before{inline-size:calc(var(--_label-container-height)/2);block-size:calc(var(--_label-container-height)/2);bottom:calc(var(--_label-container-height)/-10);transform:rotate(45deg)}.label::after{inset:0px;border-radius:inherit}.labelContent{z-index:1}input[type=range]{opacity:0;-webkit-tap-highlight-color:rgba(0,0,0,0);position:absolute;box-sizing:border-box;height:100%;width:100%;margin:0;background:rgba(0,0,0,0);cursor:pointer;pointer-events:auto;appearance:none}input[type=range]:focus{outline:none}::-webkit-slider-runnable-track{-webkit-appearance:none}::-moz-range-track{appearance:none}::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;block-size:var(--_state-layer-size);inline-size:var(--_state-layer-size);transform:scaleX(0);opacity:0;z-index:2}::-moz-range-thumb{appearance:none;block-size:var(--_state-layer-size);inline-size:var(--_state-layer-size);transform:scaleX(0);opacity:0;z-index:2}.ranged input.lesser{clip-path:inset(0 calc(100% - (var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--slider-lower-fraction) + (var(--slider-upper-fraction) - var(--slider-lower-fraction)) / 2))) 0 0)}:host-context([dir=rtl]) .ranged input.lesser{clip-path:inset(0 0 0 calc(100% - (var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--slider-lower-fraction) + (var(--slider-upper-fraction) - var(--slider-lower-fraction)) / 2))))}:host([dir=rtl]) .ranged input.lesser{clip-path:inset(0 0 0 calc(100% - (var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--slider-lower-fraction) + (var(--slider-upper-fraction) - var(--slider-lower-fraction)) / 2))))}.ranged input.lesser:dir(rtl){clip-path:inset(0 0 0 calc(100% - (var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--slider-lower-fraction) + (var(--slider-upper-fraction) - var(--slider-lower-fraction)) / 2))))}.ranged input:not(.lesser){clip-path:inset(0 0 0 calc(var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--slider-lower-fraction) + (var(--slider-upper-fraction) - var(--slider-lower-fraction)) / 2)))}:host-context([dir=rtl]) .ranged input:not(.lesser){clip-path:inset(0 calc(var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--slider-lower-fraction) + (var(--slider-upper-fraction) - var(--slider-lower-fraction)) / 2)) 0 0)}:host([dir=rtl]) .ranged input:not(.lesser){clip-path:inset(0 calc(var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--slider-lower-fraction) + (var(--slider-upper-fraction) - var(--slider-lower-fraction)) / 2)) 0 0)}.ranged input:dir(rtl):not(.lesser){clip-path:inset(0 calc(var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--slider-lower-fraction) + (var(--slider-upper-fraction) - var(--slider-lower-fraction)) / 2)) 0 0)}.onTop{z-index:1}md-focus-ring{--md-focus-ring-outward-offset: -2px}.handle{--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}md-ripple{height:var(--_state-layer-size);width:var(--_state-layer-size)}/*# sourceMappingURL=slider-styles.css.map */
`;var X=class extends h{};X.styles=[vt,Ze];X=s([S("md-slider")],X);var ne=window.Shiny;function ft(i){if(!ne)return;class e extends ne.InputBinding{constructor(){super()}find(r){return $(r).find(i)}getId(r){return r.id}getValue(r){return r.value}subscribe(r,a){r.onChangeCallback=a}unsubscribe(r){r.onChangeCallback=a=>{}}}ne.inputBindings.register(new e,`${i}-Binding`)}var Lt="shiny-data-passing-event";function Bt(i,e){return{...e,id:i}}function mt(i,e){return t=>{let r=new CustomEvent(Lt,{detail:Bt(e,t),bubbles:!0});i.dispatchEvent(r)}}var oe=class extends X{constructor(){super();this.on_value_change=mt(this,this.id);this.onChangeCallback=t=>{},this.addEventListener("input",this.myHandleChange)}myHandleChange(t){this.onChangeCallback(!0),this.on_value_change({type:"number",value:this.value})}};customElements.define("m3-slider",oe);ft("m3-slider");})();
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

@material/web/slider/lib/forced-colors-styles.css.js:
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

lit-html/directives/style-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/when.js:
  (**
   * @license
   * Copyright 2021 Google LLC
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

@material/web/ripple/directive.js:
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
