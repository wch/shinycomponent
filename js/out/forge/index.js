"use strict";
(() => {
  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.DUT32TWM.js
  var t = window;
  var e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
  var s = Symbol();
  var n = /* @__PURE__ */ new WeakMap();
  var o = class {
    constructor(t32, e43, n52) {
      if (this._$cssResult$ = true, n52 !== s)
        throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t32, this.t = e43;
    }
    get styleSheet() {
      let t32 = this.o;
      const s52 = this.t;
      if (e && void 0 === t32) {
        const e43 = void 0 !== s52 && 1 === s52.length;
        e43 && (t32 = n.get(s52)), void 0 === t32 && ((this.o = t32 = new CSSStyleSheet()).replaceSync(this.cssText), e43 && n.set(s52, t32));
      }
      return t32;
    }
    toString() {
      return this.cssText;
    }
  };
  var r = (t32) => new o("string" == typeof t32 ? t32 : t32 + "", void 0, s);
  var i = (t32, ...e43) => {
    const n52 = 1 === t32.length ? t32[0] : e43.reduce((e54, s52, n62) => e54 + ((t42) => {
      if (true === t42._$cssResult$)
        return t42.cssText;
      if ("number" == typeof t42)
        return t42;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t42 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(s52) + t32[n62 + 1], t32[0]);
    return new o(n52, t32, s);
  };
  var S = (s52, n52) => {
    e ? s52.adoptedStyleSheets = n52.map((t32) => t32 instanceof CSSStyleSheet ? t32 : t32.styleSheet) : n52.forEach((e43) => {
      const n62 = document.createElement("style"), o52 = t.litNonce;
      void 0 !== o52 && n62.setAttribute("nonce", o52), n62.textContent = e43.cssText, s52.appendChild(n62);
    });
  };
  var c = e ? (t32) => t32 : (t32) => t32 instanceof CSSStyleSheet ? ((t42) => {
    let e43 = "";
    for (const s52 of t42.cssRules)
      e43 += s52.cssText;
    return r(e43);
  })(t32) : t32;
  var s2;
  var e2 = window;
  var r2 = e2.trustedTypes;
  var h = r2 ? r2.emptyScript : "";
  var o2 = e2.reactiveElementPolyfillSupport;
  var n2 = { toAttribute(t32, i33) {
    switch (i33) {
      case Boolean:
        t32 = t32 ? h : null;
        break;
      case Object:
      case Array:
        t32 = null == t32 ? t32 : JSON.stringify(t32);
    }
    return t32;
  }, fromAttribute(t32, i33) {
    let s52 = t32;
    switch (i33) {
      case Boolean:
        s52 = null !== t32;
        break;
      case Number:
        s52 = null === t32 ? null : Number(t32);
        break;
      case Object:
      case Array:
        try {
          s52 = JSON.parse(t32);
        } catch (t42) {
          s52 = null;
        }
    }
    return s52;
  } };
  var a = (t32, i33) => i33 !== t32 && (i33 == i33 || t32 == t32);
  var l = { attribute: true, type: String, converter: n2, reflect: false, hasChanged: a };
  var d = class extends HTMLElement {
    constructor() {
      super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$El = null, this.u();
    }
    static addInitializer(t32) {
      var i33;
      this.finalize(), (null !== (i33 = this.h) && void 0 !== i33 ? i33 : this.h = []).push(t32);
    }
    static get observedAttributes() {
      this.finalize();
      const t32 = [];
      return this.elementProperties.forEach((i33, s52) => {
        const e43 = this._$Ep(s52, i33);
        void 0 !== e43 && (this._$Ev.set(e43, s52), t32.push(e43));
      }), t32;
    }
    static createProperty(t32, i33 = l) {
      if (i33.state && (i33.attribute = false), this.finalize(), this.elementProperties.set(t32, i33), !i33.noAccessor && !this.prototype.hasOwnProperty(t32)) {
        const s52 = "symbol" == typeof t32 ? Symbol() : "__" + t32, e43 = this.getPropertyDescriptor(t32, s52, i33);
        void 0 !== e43 && Object.defineProperty(this.prototype, t32, e43);
      }
    }
    static getPropertyDescriptor(t32, i33, s52) {
      return { get() {
        return this[i33];
      }, set(e43) {
        const r42 = this[t32];
        this[i33] = e43, this.requestUpdate(t32, r42, s52);
      }, configurable: true, enumerable: true };
    }
    static getPropertyOptions(t32) {
      return this.elementProperties.get(t32) || l;
    }
    static finalize() {
      if (this.hasOwnProperty("finalized"))
        return false;
      this.finalized = true;
      const t32 = Object.getPrototypeOf(this);
      if (t32.finalize(), void 0 !== t32.h && (this.h = [...t32.h]), this.elementProperties = new Map(t32.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
        const t42 = this.properties, i33 = [...Object.getOwnPropertyNames(t42), ...Object.getOwnPropertySymbols(t42)];
        for (const s52 of i33)
          this.createProperty(s52, t42[s52]);
      }
      return this.elementStyles = this.finalizeStyles(this.styles), true;
    }
    static finalizeStyles(i33) {
      const s52 = [];
      if (Array.isArray(i33)) {
        const e43 = new Set(i33.flat(1 / 0).reverse());
        for (const i42 of e43)
          s52.unshift(c(i42));
      } else
        void 0 !== i33 && s52.push(c(i33));
      return s52;
    }
    static _$Ep(t32, i33) {
      const s52 = i33.attribute;
      return false === s52 ? void 0 : "string" == typeof s52 ? s52 : "string" == typeof t32 ? t32.toLowerCase() : void 0;
    }
    u() {
      var t32;
      this._$E_ = new Promise((t42) => this.enableUpdating = t42), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), null === (t32 = this.constructor.h) || void 0 === t32 || t32.forEach((t42) => t42(this));
    }
    addController(t32) {
      var i33, s52;
      (null !== (i33 = this._$ES) && void 0 !== i33 ? i33 : this._$ES = []).push(t32), void 0 !== this.renderRoot && this.isConnected && (null === (s52 = t32.hostConnected) || void 0 === s52 || s52.call(t32));
    }
    removeController(t32) {
      var i33;
      null === (i33 = this._$ES) || void 0 === i33 || i33.splice(this._$ES.indexOf(t32) >>> 0, 1);
    }
    _$Eg() {
      this.constructor.elementProperties.forEach((t32, i33) => {
        this.hasOwnProperty(i33) && (this._$Ei.set(i33, this[i33]), delete this[i33]);
      });
    }
    createRenderRoot() {
      var t32;
      const s52 = null !== (t32 = this.shadowRoot) && void 0 !== t32 ? t32 : this.attachShadow(this.constructor.shadowRootOptions);
      return S(s52, this.constructor.elementStyles), s52;
    }
    connectedCallback() {
      var t32;
      void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), null === (t32 = this._$ES) || void 0 === t32 || t32.forEach((t42) => {
        var i33;
        return null === (i33 = t42.hostConnected) || void 0 === i33 ? void 0 : i33.call(t42);
      });
    }
    enableUpdating(t32) {
    }
    disconnectedCallback() {
      var t32;
      null === (t32 = this._$ES) || void 0 === t32 || t32.forEach((t42) => {
        var i33;
        return null === (i33 = t42.hostDisconnected) || void 0 === i33 ? void 0 : i33.call(t42);
      });
    }
    attributeChangedCallback(t32, i33, s52) {
      this._$AK(t32, s52);
    }
    _$EO(t32, i33, s52 = l) {
      var e43;
      const r42 = this.constructor._$Ep(t32, s52);
      if (void 0 !== r42 && true === s52.reflect) {
        const h32 = (void 0 !== (null === (e43 = s52.converter) || void 0 === e43 ? void 0 : e43.toAttribute) ? s52.converter : n2).toAttribute(i33, s52.type);
        this._$El = t32, null == h32 ? this.removeAttribute(r42) : this.setAttribute(r42, h32), this._$El = null;
      }
    }
    _$AK(t32, i33) {
      var s52;
      const e43 = this.constructor, r42 = e43._$Ev.get(t32);
      if (void 0 !== r42 && this._$El !== r42) {
        const t42 = e43.getPropertyOptions(r42), h32 = "function" == typeof t42.converter ? { fromAttribute: t42.converter } : void 0 !== (null === (s52 = t42.converter) || void 0 === s52 ? void 0 : s52.fromAttribute) ? t42.converter : n2;
        this._$El = r42, this[r42] = h32.fromAttribute(i33, t42.type), this._$El = null;
      }
    }
    requestUpdate(t32, i33, s52) {
      let e43 = true;
      void 0 !== t32 && (((s52 = s52 || this.constructor.getPropertyOptions(t32)).hasChanged || a)(this[t32], i33) ? (this._$AL.has(t32) || this._$AL.set(t32, i33), true === s52.reflect && this._$El !== t32 && (void 0 === this._$EC && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t32, s52))) : e43 = false), !this.isUpdatePending && e43 && (this._$E_ = this._$Ej());
    }
    async _$Ej() {
      this.isUpdatePending = true;
      try {
        await this._$E_;
      } catch (t42) {
        Promise.reject(t42);
      }
      const t32 = this.scheduleUpdate();
      return null != t32 && await t32, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      var t32;
      if (!this.isUpdatePending)
        return;
      this.hasUpdated, this._$Ei && (this._$Ei.forEach((t42, i42) => this[i42] = t42), this._$Ei = void 0);
      let i33 = false;
      const s52 = this._$AL;
      try {
        i33 = this.shouldUpdate(s52), i33 ? (this.willUpdate(s52), null === (t32 = this._$ES) || void 0 === t32 || t32.forEach((t42) => {
          var i42;
          return null === (i42 = t42.hostUpdate) || void 0 === i42 ? void 0 : i42.call(t42);
        }), this.update(s52)) : this._$Ek();
      } catch (t42) {
        throw i33 = false, this._$Ek(), t42;
      }
      i33 && this._$AE(s52);
    }
    willUpdate(t32) {
    }
    _$AE(t32) {
      var i33;
      null === (i33 = this._$ES) || void 0 === i33 || i33.forEach((t42) => {
        var i42;
        return null === (i42 = t42.hostUpdated) || void 0 === i42 ? void 0 : i42.call(t42);
      }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t32)), this.updated(t32);
    }
    _$Ek() {
      this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$E_;
    }
    shouldUpdate(t32) {
      return true;
    }
    update(t32) {
      void 0 !== this._$EC && (this._$EC.forEach((t42, i33) => this._$EO(i33, this[i33], t42)), this._$EC = void 0), this._$Ek();
    }
    updated(t32) {
    }
    firstUpdated(t32) {
    }
  };
  d.finalized = true, d.elementProperties = /* @__PURE__ */ new Map(), d.elementStyles = [], d.shadowRootOptions = { mode: "open" }, null == o2 || o2({ ReactiveElement: d }), (null !== (s2 = e2.reactiveElementVersions) && void 0 !== s2 ? s2 : e2.reactiveElementVersions = []).push("1.6.1");
  var t2;
  var i2 = window;
  var s3 = i2.trustedTypes;
  var e3 = s3 ? s3.createPolicy("lit-html", { createHTML: (t32) => t32 }) : void 0;
  var o3 = `lit$${(Math.random() + "").slice(9)}$`;
  var n3 = "?" + o3;
  var l2 = `<${n3}>`;
  var h2 = document;
  var r3 = (t32 = "") => h2.createComment(t32);
  var d2 = (t32) => null === t32 || "object" != typeof t32 && "function" != typeof t32;
  var u = Array.isArray;
  var c2 = (t32) => u(t32) || "function" == typeof (null == t32 ? void 0 : t32[Symbol.iterator]);
  var v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  var a2 = /-->/g;
  var f = />/g;
  var _ = RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
  var m = /'/g;
  var p = /"/g;
  var $ = /^(?:script|style|textarea|title)$/i;
  var g = (t32) => (i33, ...s52) => ({ _$litType$: t32, strings: i33, values: s52 });
  var y = g(1);
  var w = g(2);
  var x = Symbol.for("lit-noChange");
  var b = Symbol.for("lit-nothing");
  var T = /* @__PURE__ */ new WeakMap();
  var A = h2.createTreeWalker(h2, 129, null, false);
  var E = (t32, i33) => {
    const s52 = t32.length - 1, n52 = [];
    let h32, r42 = 2 === i33 ? "<svg>" : "", d32 = v;
    for (let i42 = 0; i42 < s52; i42++) {
      const s62 = t32[i42];
      let e43, u32, c32 = -1, g23 = 0;
      for (; g23 < s62.length && (d32.lastIndex = g23, u32 = d32.exec(s62), null !== u32); )
        g23 = d32.lastIndex, d32 === v ? "!--" === u32[1] ? d32 = a2 : void 0 !== u32[1] ? d32 = f : void 0 !== u32[2] ? ($.test(u32[2]) && (h32 = RegExp("</" + u32[2], "g")), d32 = _) : void 0 !== u32[3] && (d32 = _) : d32 === _ ? ">" === u32[0] ? (d32 = null != h32 ? h32 : v, c32 = -1) : void 0 === u32[1] ? c32 = -2 : (c32 = d32.lastIndex - u32[2].length, e43 = u32[1], d32 = void 0 === u32[3] ? _ : '"' === u32[3] ? p : m) : d32 === p || d32 === m ? d32 = _ : d32 === a2 || d32 === f ? d32 = v : (d32 = _, h32 = void 0);
      const y22 = d32 === _ && t32[i42 + 1].startsWith("/>") ? " " : "";
      r42 += d32 === v ? s62 + l2 : c32 >= 0 ? (n52.push(e43), s62.slice(0, c32) + "$lit$" + s62.slice(c32) + o3 + y22) : s62 + o3 + (-2 === c32 ? (n52.push(void 0), i42) : y22);
    }
    const u23 = r42 + (t32[s52] || "<?>") + (2 === i33 ? "</svg>" : "");
    if (!Array.isArray(t32) || !t32.hasOwnProperty("raw"))
      throw Error("invalid template strings array");
    return [void 0 !== e3 ? e3.createHTML(u23) : u23, n52];
  };
  var C = class {
    constructor({ strings: t32, _$litType$: i33 }, e43) {
      let l42;
      this.parts = [];
      let h32 = 0, d32 = 0;
      const u23 = t32.length - 1, c32 = this.parts, [v22, a32] = E(t32, i33);
      if (this.el = C.createElement(v22, e43), A.currentNode = this.el.content, 2 === i33) {
        const t42 = this.el.content, i42 = t42.firstChild;
        i42.remove(), t42.append(...i42.childNodes);
      }
      for (; null !== (l42 = A.nextNode()) && c32.length < u23; ) {
        if (1 === l42.nodeType) {
          if (l42.hasAttributes()) {
            const t42 = [];
            for (const i42 of l42.getAttributeNames())
              if (i42.endsWith("$lit$") || i42.startsWith(o3)) {
                const s52 = a32[d32++];
                if (t42.push(i42), void 0 !== s52) {
                  const t52 = l42.getAttribute(s52.toLowerCase() + "$lit$").split(o3), i52 = /([.?@])?(.*)/.exec(s52);
                  c32.push({ type: 1, index: h32, name: i52[2], strings: t52, ctor: "." === i52[1] ? M : "?" === i52[1] ? k : "@" === i52[1] ? H : S2 });
                } else
                  c32.push({ type: 6, index: h32 });
              }
            for (const i42 of t42)
              l42.removeAttribute(i42);
          }
          if ($.test(l42.tagName)) {
            const t42 = l42.textContent.split(o3), i42 = t42.length - 1;
            if (i42 > 0) {
              l42.textContent = s3 ? s3.emptyScript : "";
              for (let s52 = 0; s52 < i42; s52++)
                l42.append(t42[s52], r3()), A.nextNode(), c32.push({ type: 2, index: ++h32 });
              l42.append(t42[i42], r3());
            }
          }
        } else if (8 === l42.nodeType)
          if (l42.data === n3)
            c32.push({ type: 2, index: h32 });
          else {
            let t42 = -1;
            for (; -1 !== (t42 = l42.data.indexOf(o3, t42 + 1)); )
              c32.push({ type: 7, index: h32 }), t42 += o3.length - 1;
          }
        h32++;
      }
    }
    static createElement(t32, i33) {
      const s52 = h2.createElement("template");
      return s52.innerHTML = t32, s52;
    }
  };
  function P(t32, i33, s52 = t32, e43) {
    var o52, n52, l42, h32;
    if (i33 === x)
      return i33;
    let r42 = void 0 !== e43 ? null === (o52 = s52._$Co) || void 0 === o52 ? void 0 : o52[e43] : s52._$Cl;
    const u23 = d2(i33) ? void 0 : i33._$litDirective$;
    return (null == r42 ? void 0 : r42.constructor) !== u23 && (null === (n52 = null == r42 ? void 0 : r42._$AO) || void 0 === n52 || n52.call(r42, false), void 0 === u23 ? r42 = void 0 : (r42 = new u23(t32), r42._$AT(t32, s52, e43)), void 0 !== e43 ? (null !== (l42 = (h32 = s52)._$Co) && void 0 !== l42 ? l42 : h32._$Co = [])[e43] = r42 : s52._$Cl = r42), void 0 !== r42 && (i33 = P(t32, r42._$AS(t32, i33.values), r42, e43)), i33;
  }
  var V = class {
    constructor(t32, i33) {
      this.u = [], this._$AN = void 0, this._$AD = t32, this._$AM = i33;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    v(t32) {
      var i33;
      const { el: { content: s52 }, parts: e43 } = this._$AD, o52 = (null !== (i33 = null == t32 ? void 0 : t32.creationScope) && void 0 !== i33 ? i33 : h2).importNode(s52, true);
      A.currentNode = o52;
      let n52 = A.nextNode(), l42 = 0, r42 = 0, d32 = e43[0];
      for (; void 0 !== d32; ) {
        if (l42 === d32.index) {
          let i42;
          2 === d32.type ? i42 = new N(n52, n52.nextSibling, this, t32) : 1 === d32.type ? i42 = new d32.ctor(n52, d32.name, d32.strings, this, t32) : 6 === d32.type && (i42 = new I(n52, this, t32)), this.u.push(i42), d32 = e43[++r42];
        }
        l42 !== (null == d32 ? void 0 : d32.index) && (n52 = A.nextNode(), l42++);
      }
      return o52;
    }
    p(t32) {
      let i33 = 0;
      for (const s52 of this.u)
        void 0 !== s52 && (void 0 !== s52.strings ? (s52._$AI(t32, s52, i33), i33 += s52.strings.length - 2) : s52._$AI(t32[i33])), i33++;
    }
  };
  var N = class {
    constructor(t32, i33, s52, e43) {
      var o52;
      this.type = 2, this._$AH = b, this._$AN = void 0, this._$AA = t32, this._$AB = i33, this._$AM = s52, this.options = e43, this._$Cm = null === (o52 = null == e43 ? void 0 : e43.isConnected) || void 0 === o52 || o52;
    }
    get _$AU() {
      var t32, i33;
      return null !== (i33 = null === (t32 = this._$AM) || void 0 === t32 ? void 0 : t32._$AU) && void 0 !== i33 ? i33 : this._$Cm;
    }
    get parentNode() {
      let t32 = this._$AA.parentNode;
      const i33 = this._$AM;
      return void 0 !== i33 && 11 === t32.nodeType && (t32 = i33.parentNode), t32;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t32, i33 = this) {
      t32 = P(this, t32, i33), d2(t32) ? t32 === b || null == t32 || "" === t32 ? (this._$AH !== b && this._$AR(), this._$AH = b) : t32 !== this._$AH && t32 !== x && this.g(t32) : void 0 !== t32._$litType$ ? this.$(t32) : void 0 !== t32.nodeType ? this.T(t32) : c2(t32) ? this.k(t32) : this.g(t32);
    }
    O(t32, i33 = this._$AB) {
      return this._$AA.parentNode.insertBefore(t32, i33);
    }
    T(t32) {
      this._$AH !== t32 && (this._$AR(), this._$AH = this.O(t32));
    }
    g(t32) {
      this._$AH !== b && d2(this._$AH) ? this._$AA.nextSibling.data = t32 : this.T(h2.createTextNode(t32)), this._$AH = t32;
    }
    $(t32) {
      var i33;
      const { values: s52, _$litType$: e43 } = t32, o52 = "number" == typeof e43 ? this._$AC(t32) : (void 0 === e43.el && (e43.el = C.createElement(e43.h, this.options)), e43);
      if ((null === (i33 = this._$AH) || void 0 === i33 ? void 0 : i33._$AD) === o52)
        this._$AH.p(s52);
      else {
        const t42 = new V(o52, this), i42 = t42.v(this.options);
        t42.p(s52), this.T(i42), this._$AH = t42;
      }
    }
    _$AC(t32) {
      let i33 = T.get(t32.strings);
      return void 0 === i33 && T.set(t32.strings, i33 = new C(t32)), i33;
    }
    k(t32) {
      u(this._$AH) || (this._$AH = [], this._$AR());
      const i33 = this._$AH;
      let s52, e43 = 0;
      for (const o52 of t32)
        e43 === i33.length ? i33.push(s52 = new N(this.O(r3()), this.O(r3()), this, this.options)) : s52 = i33[e43], s52._$AI(o52), e43++;
      e43 < i33.length && (this._$AR(s52 && s52._$AB.nextSibling, e43), i33.length = e43);
    }
    _$AR(t32 = this._$AA.nextSibling, i33) {
      var s52;
      for (null === (s52 = this._$AP) || void 0 === s52 || s52.call(this, false, true, i33); t32 && t32 !== this._$AB; ) {
        const i42 = t32.nextSibling;
        t32.remove(), t32 = i42;
      }
    }
    setConnected(t32) {
      var i33;
      void 0 === this._$AM && (this._$Cm = t32, null === (i33 = this._$AP) || void 0 === i33 || i33.call(this, t32));
    }
  };
  var S2 = class {
    constructor(t32, i33, s52, e43, o52) {
      this.type = 1, this._$AH = b, this._$AN = void 0, this.element = t32, this.name = i33, this._$AM = e43, this.options = o52, s52.length > 2 || "" !== s52[0] || "" !== s52[1] ? (this._$AH = Array(s52.length - 1).fill(new String()), this.strings = s52) : this._$AH = b;
    }
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t32, i33 = this, s52, e43) {
      const o52 = this.strings;
      let n52 = false;
      if (void 0 === o52)
        t32 = P(this, t32, i33, 0), n52 = !d2(t32) || t32 !== this._$AH && t32 !== x, n52 && (this._$AH = t32);
      else {
        const e54 = t32;
        let l42, h32;
        for (t32 = o52[0], l42 = 0; l42 < o52.length - 1; l42++)
          h32 = P(this, e54[s52 + l42], i33, l42), h32 === x && (h32 = this._$AH[l42]), n52 || (n52 = !d2(h32) || h32 !== this._$AH[l42]), h32 === b ? t32 = b : t32 !== b && (t32 += (null != h32 ? h32 : "") + o52[l42 + 1]), this._$AH[l42] = h32;
      }
      n52 && !e43 && this.j(t32);
    }
    j(t32) {
      t32 === b ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t32 ? t32 : "");
    }
  };
  var M = class extends S2 {
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(t32) {
      this.element[this.name] = t32 === b ? void 0 : t32;
    }
  };
  var R = s3 ? s3.emptyScript : "";
  var k = class extends S2 {
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(t32) {
      t32 && t32 !== b ? this.element.setAttribute(this.name, R) : this.element.removeAttribute(this.name);
    }
  };
  var H = class extends S2 {
    constructor(t32, i33, s52, e43, o52) {
      super(t32, i33, s52, e43, o52), this.type = 5;
    }
    _$AI(t32, i33 = this) {
      var s52;
      if ((t32 = null !== (s52 = P(this, t32, i33, 0)) && void 0 !== s52 ? s52 : b) === x)
        return;
      const e43 = this._$AH, o52 = t32 === b && e43 !== b || t32.capture !== e43.capture || t32.once !== e43.once || t32.passive !== e43.passive, n52 = t32 !== b && (e43 === b || o52);
      o52 && this.element.removeEventListener(this.name, this, e43), n52 && this.element.addEventListener(this.name, this, t32), this._$AH = t32;
    }
    handleEvent(t32) {
      var i33, s52;
      "function" == typeof this._$AH ? this._$AH.call(null !== (s52 = null === (i33 = this.options) || void 0 === i33 ? void 0 : i33.host) && void 0 !== s52 ? s52 : this.element, t32) : this._$AH.handleEvent(t32);
    }
  };
  var I = class {
    constructor(t32, i33, s52) {
      this.element = t32, this.type = 6, this._$AN = void 0, this._$AM = i33, this.options = s52;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t32) {
      P(this, t32);
    }
  };
  var L = { P: "$lit$", A: o3, M: n3, C: 1, L: E, R: V, D: c2, V: P, I: N, H: S2, N: k, U: H, B: M, F: I };
  var z = i2.litHtmlPolyfillSupport;
  null == z || z(C, N), (null !== (t2 = i2.litHtmlVersions) && void 0 !== t2 ? t2 : i2.litHtmlVersions = []).push("2.6.1");
  var Z = (t32, i33, s52) => {
    var e43, o52;
    const n52 = null !== (e43 = null == s52 ? void 0 : s52.renderBefore) && void 0 !== e43 ? e43 : i33;
    let l42 = n52._$litPart$;
    if (void 0 === l42) {
      const t42 = null !== (o52 = null == s52 ? void 0 : s52.renderBefore) && void 0 !== o52 ? o52 : null;
      n52._$litPart$ = l42 = new N(i33.insertBefore(r3(), t42), t42, void 0, null != s52 ? s52 : {});
    }
    return l42._$AI(t32), l42;
  };
  var l3;
  var o4;
  var s4 = class extends d {
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this._$Dt = void 0;
    }
    createRenderRoot() {
      var t32, e43;
      const i33 = super.createRenderRoot();
      return null !== (t32 = (e43 = this.renderOptions).renderBefore) && void 0 !== t32 || (e43.renderBefore = i33.firstChild), i33;
    }
    update(t32) {
      const i33 = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t32), this._$Dt = Z(i33, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      var t32;
      super.connectedCallback(), null === (t32 = this._$Dt) || void 0 === t32 || t32.setConnected(true);
    }
    disconnectedCallback() {
      var t32;
      super.disconnectedCallback(), null === (t32 = this._$Dt) || void 0 === t32 || t32.setConnected(false);
    }
    render() {
      return x;
    }
  };
  s4.finalized = true, s4._$litElement$ = true, null === (l3 = globalThis.litElementHydrateSupport) || void 0 === l3 || l3.call(globalThis, { LitElement: s4 });
  var n4 = globalThis.litElementPolyfillSupport;
  null == n4 || n4({ LitElement: s4 });
  (null !== (o4 = globalThis.litElementVersions) && void 0 !== o4 ? o4 : globalThis.litElementVersions = []).push("3.2.0");

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.BCEYT3RT.js
  var component_styles_default = i`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KKKZTCZ5.js
  var tooltip_styles_default = i`
  ${component_styles_default}

  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    pointer-events: none;
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
  }
`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.LKA3TPUC.js
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a5, b3) => {
    for (var prop in b3 || (b3 = {}))
      if (__hasOwnProp.call(b3, prop))
        __defNormalProp(a5, prop, b3[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b3)) {
        if (__propIsEnum.call(b3, prop))
          __defNormalProp(a5, prop, b3[prop]);
      }
    return a5;
  };
  var __spreadProps = (a5, b3) => __defProps(a5, __getOwnPropDescs(b3));
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i6 = decorators.length - 1, decorator; i6 >= 0; i6--)
      if (decorator = decorators[i6])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.OAQT3AUQ.js
  var defaultAnimationRegistry = /* @__PURE__ */ new Map();
  var customAnimationRegistry = /* @__PURE__ */ new WeakMap();
  function ensureAnimation(animation) {
    return animation != null ? animation : { keyframes: [], options: { duration: 0 } };
  }
  function getLogicalAnimation(animation, dir) {
    if (dir.toLowerCase() === "rtl") {
      return {
        keyframes: animation.rtlKeyframes || animation.keyframes,
        options: animation.options
      };
    }
    return animation;
  }
  function setDefaultAnimation(animationName, animation) {
    defaultAnimationRegistry.set(animationName, ensureAnimation(animation));
  }
  function getAnimation(el, animationName, options) {
    const customAnimation = customAnimationRegistry.get(el);
    if (customAnimation == null ? void 0 : customAnimation[animationName]) {
      return getLogicalAnimation(customAnimation[animationName], options.dir);
    }
    const defaultAnimation = defaultAnimationRegistry.get(animationName);
    if (defaultAnimation) {
      return getLogicalAnimation(defaultAnimation, options.dir);
    }
    return {
      keyframes: [],
      options: { duration: 0 }
    };
  }

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.B4BZKR24.js
  function waitForEvent(el, eventName) {
    return new Promise((resolve) => {
      function done(event) {
        if (event.target === el) {
          el.removeEventListener(eventName, done);
          resolve();
        }
      }
      el.addEventListener(eventName, done);
    });
  }

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.65AZ2BGN.js
  function animateTo(el, keyframes, options) {
    return new Promise((resolve) => {
      if ((options == null ? void 0 : options.duration) === Infinity) {
        throw new Error("Promise-based animations must be finite.");
      }
      const animation = el.animate(keyframes, __spreadProps(__spreadValues({}, options), {
        duration: prefersReducedMotion() ? 0 : options.duration
      }));
      animation.addEventListener("cancel", resolve, { once: true });
      animation.addEventListener("finish", resolve, { once: true });
    });
  }
  function parseDuration(delay) {
    delay = delay.toString().toLowerCase();
    if (delay.indexOf("ms") > -1) {
      return parseFloat(delay);
    }
    if (delay.indexOf("s") > -1) {
      return parseFloat(delay) * 1e3;
    }
    return parseFloat(delay);
  }
  function prefersReducedMotion() {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    return query.matches;
  }
  function stopAnimations(el) {
    return Promise.all(
      el.getAnimations().map((animation) => {
        return new Promise((resolve) => {
          const handleAnimationEvent = requestAnimationFrame(resolve);
          animation.addEventListener("cancel", () => handleAnimationEvent, { once: true });
          animation.addEventListener("finish", () => handleAnimationEvent, { once: true });
          animation.cancel();
        });
      })
    );
  }
  function shimKeyframesHeightAuto(keyframes, calculatedHeight) {
    return keyframes.map((keyframe) => __spreadProps(__spreadValues({}, keyframe), {
      height: keyframe.height === "auto" ? `${calculatedHeight}px` : keyframe.height
    }));
  }

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.L2X53Y67.js
  var connectedElements = /* @__PURE__ */ new Set();
  var documentElementObserver = new MutationObserver(update);
  var translations = /* @__PURE__ */ new Map();
  var documentDirection = document.documentElement.dir || "ltr";
  var documentLanguage = document.documentElement.lang || navigator.language;
  var fallback;
  documentElementObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["dir", "lang"]
  });
  function registerTranslation(...translation2) {
    translation2.map((t6) => {
      const code = t6.$code.toLowerCase();
      if (translations.has(code)) {
        translations.set(code, Object.assign(Object.assign({}, translations.get(code)), t6));
      } else {
        translations.set(code, t6);
      }
      if (!fallback) {
        fallback = t6;
      }
    });
    update();
  }
  function update() {
    documentDirection = document.documentElement.dir || "ltr";
    documentLanguage = document.documentElement.lang || navigator.language;
    [...connectedElements.keys()].map((el) => {
      if (typeof el.requestUpdate === "function") {
        el.requestUpdate();
      }
    });
  }
  var LocalizeController = class {
    constructor(host) {
      this.host = host;
      this.host.addController(this);
    }
    hostConnected() {
      connectedElements.add(this.host);
    }
    hostDisconnected() {
      connectedElements.delete(this.host);
    }
    dir() {
      return `${this.host.dir || documentDirection}`.toLowerCase();
    }
    lang() {
      return `${this.host.lang || documentLanguage}`.toLowerCase();
    }
    getTranslationData(lang) {
      var _a, _b;
      const locale = new Intl.Locale(lang);
      const language = locale === null || locale === void 0 ? void 0 : locale.language.toLowerCase();
      const region = (_b = (_a = locale === null || locale === void 0 ? void 0 : locale.region) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== null && _b !== void 0 ? _b : "";
      const primary = translations.get(`${language}-${region}`);
      const secondary = translations.get(language);
      return { locale, language, region, primary, secondary };
    }
    exists(key, options) {
      var _a;
      const { primary, secondary } = this.getTranslationData((_a = options.lang) !== null && _a !== void 0 ? _a : this.lang());
      options = Object.assign({ includeFallback: false }, options);
      if (primary && primary[key] || secondary && secondary[key] || options.includeFallback && fallback && fallback[key]) {
        return true;
      }
      return false;
    }
    term(key, ...args) {
      const { primary, secondary } = this.getTranslationData(this.lang());
      let term;
      if (primary && primary[key]) {
        term = primary[key];
      } else if (secondary && secondary[key]) {
        term = secondary[key];
      } else if (fallback && fallback[key]) {
        term = fallback[key];
      } else {
        console.error(`No translation found for: ${String(key)}`);
        return String(key);
      }
      if (typeof term === "function") {
        return term(...args);
      }
      return term;
    }
    date(dateToFormat, options) {
      dateToFormat = new Date(dateToFormat);
      return new Intl.DateTimeFormat(this.lang(), options).format(dateToFormat);
    }
    number(numberToFormat, options) {
      numberToFormat = Number(numberToFormat);
      return isNaN(numberToFormat) ? "" : new Intl.NumberFormat(this.lang(), options).format(numberToFormat);
    }
    relativeTime(value, unit, options) {
      return new Intl.RelativeTimeFormat(this.lang(), options).format(value, unit);
    }
  };

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.MQ6XKY3Z.js
  var LocalizeController2 = class extends LocalizeController {
  };
  var translation = {
    $code: "en",
    $name: "English",
    $dir: "ltr",
    carousel: "Carousel",
    clearEntry: "Clear entry",
    close: "Close",
    copy: "Copy",
    currentValue: "Current value",
    goToSlide: (slide, count) => `Go to slide ${slide} of ${count}`,
    hidePassword: "Hide password",
    loading: "Loading",
    nextSlide: "Next slide",
    numOptionsSelected: (num) => {
      if (num === 0)
        return "No options selected";
      if (num === 1)
        return "1 option selected";
      return `${num} options selected`;
    },
    previousSlide: "Previous slide",
    progress: "Progress",
    remove: "Remove",
    resize: "Resize",
    scrollToEnd: "Scroll to end",
    scrollToStart: "Scroll to start",
    selectAColorFromTheScreen: "Select a color from the screen",
    showPassword: "Show password",
    slideNum: (slide) => `Slide ${slide}`,
    toggleColorFormat: "Toggle color format"
  };
  registerTranslation(translation);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.VQ3XOPCT.js
  function watch(propertyName, options) {
    const resolvedOptions = __spreadValues({
      waitUntilFirstUpdate: false
    }, options);
    return (proto, decoratedFnName) => {
      const { update: update2 } = proto;
      const watchedProperties = Array.isArray(propertyName) ? propertyName : [propertyName];
      proto.update = function(changedProps) {
        watchedProperties.forEach((property) => {
          const key = property;
          if (changedProps.has(key)) {
            const oldValue = changedProps.get(key);
            const newValue = this[key];
            if (oldValue !== newValue) {
              if (!resolvedOptions.waitUntilFirstUpdate || this.hasUpdated) {
                this[decoratedFnName](oldValue, newValue);
              }
            }
          }
        });
        update2.call(this, changedProps);
      };
    };
  }

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.UP75L23G.js
  var t3 = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 };
  var e4 = (t23) => (...e24) => ({ _$litDirective$: t23, values: e24 });
  var i3 = class {
    constructor(t23) {
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AT(t23, e24, i25) {
      this._$Ct = t23, this._$AM = e24, this._$Ci = i25;
    }
    _$AS(t23, e24) {
      return this.update(t23, e24);
    }
    update(t23, e24) {
      return this.render(...e24);
    }
  };

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ORW72H2K.js
  var o5 = e4(class extends i3 {
    constructor(t23) {
      var i25;
      if (super(t23), t23.type !== t3.ATTRIBUTE || "class" !== t23.name || (null === (i25 = t23.strings) || void 0 === i25 ? void 0 : i25.length) > 2)
        throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
    }
    render(t23) {
      return " " + Object.keys(t23).filter((i25) => t23[i25]).join(" ") + " ";
    }
    update(i25, [s8]) {
      var r5, o25;
      if (void 0 === this.nt) {
        this.nt = /* @__PURE__ */ new Set(), void 0 !== i25.strings && (this.st = new Set(i25.strings.join(" ").split(/\s/).filter((t23) => "" !== t23)));
        for (const t23 in s8)
          s8[t23] && !(null === (r5 = this.st) || void 0 === r5 ? void 0 : r5.has(t23)) && this.nt.add(t23);
        return this.render(s8);
      }
      const e24 = i25.element.classList;
      this.nt.forEach((t23) => {
        t23 in s8 || (e24.remove(t23), this.nt.delete(t23));
      });
      for (const t23 in s8) {
        const i33 = !!s8[t23];
        i33 === this.nt.has(t23) || (null === (o25 = this.st) || void 0 === o25 ? void 0 : o25.has(t23)) || (i33 ? (e24.add(t23), this.nt.add(t23)) : (e24.remove(t23), this.nt.delete(t23)));
      }
      return x;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ROLL4627.js
  var e5 = (e62) => (n23) => "function" == typeof n23 ? ((e7, n32) => (customElements.define(e7, n32), n32))(e62, n23) : ((e7, n32) => {
    const { kind: t23, elements: s23 } = n32;
    return { kind: t23, elements: s23, finisher(n42) {
      customElements.define(e7, n42);
    } };
  })(e62, n23);
  var i4 = (i33, e62) => "method" === e62.kind && e62.descriptor && !("value" in e62.descriptor) ? __spreadProps(__spreadValues({}, e62), { finisher(n23) {
    n23.createProperty(e62.key, i33);
  } }) : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e62.key, initializer() {
    "function" == typeof e62.initializer && (this[e62.key] = e62.initializer.call(this));
  }, finisher(n23) {
    n23.createProperty(e62.key, i33);
  } };
  function e22(e62) {
    return (n23, t23) => void 0 !== t23 ? ((i33, e7, n32) => {
      e7.constructor.createProperty(n32, i33);
    })(e62, n23, t23) : i4(e62, n23);
  }
  function t4(t23) {
    return e22(__spreadProps(__spreadValues({}, t23), { state: true }));
  }
  var o6 = ({ finisher: e62, descriptor: t23 }) => (o25, n23) => {
    var r5;
    if (void 0 === n23) {
      const n32 = null !== (r5 = o25.originalKey) && void 0 !== r5 ? r5 : o25.key, i33 = null != t23 ? { kind: "method", placement: "prototype", key: n32, descriptor: t23(o25.key) } : __spreadProps(__spreadValues({}, o25), { key: n32 });
      return null != e62 && (i33.finisher = function(t32) {
        e62(t32, n32);
      }), i33;
    }
    {
      const r23 = o25.constructor;
      void 0 !== t23 && Object.defineProperty(o25, n23, t23(n23)), null == e62 || e62(r23, n23);
    }
  };
  function e32(e62) {
    return o6({ finisher: (r5, t23) => {
      Object.assign(r5.prototype[t23], e62);
    } });
  }
  function i22(i33, n23) {
    return o6({ descriptor: (o25) => {
      const t23 = { get() {
        var o34, n32;
        return null !== (n32 = null === (o34 = this.renderRoot) || void 0 === o34 ? void 0 : o34.querySelector(i33)) && void 0 !== n32 ? n32 : null;
      }, enumerable: true, configurable: true };
      if (n23) {
        const n32 = "symbol" == typeof o25 ? Symbol() : "__" + o25;
        t23.get = function() {
          var o34, t32;
          return void 0 === this[n32] && (this[n32] = null !== (t32 = null === (o34 = this.renderRoot) || void 0 === o34 ? void 0 : o34.querySelector(i33)) && void 0 !== t32 ? t32 : null), this[n32];
        };
      }
      return t23;
    } });
  }
  function e42(e62) {
    return o6({ descriptor: (r5) => ({ async get() {
      var r23;
      return await this.updateComplete, null === (r23 = this.renderRoot) || void 0 === r23 ? void 0 : r23.querySelector(e62);
    }, enumerable: true, configurable: true }) });
  }
  var n5;
  var e52 = null != (null === (n5 = window.HTMLSlotElement) || void 0 === n5 ? void 0 : n5.prototype.assignedElements) ? (o25, n23) => o25.assignedElements(n23) : (o25, n23) => o25.assignedNodes(n23).filter((o34) => o34.nodeType === Node.ELEMENT_NODE);
  var ShoelaceElement = class extends s4 {
    emit(name, options) {
      const event = new CustomEvent(name, __spreadValues({
        bubbles: true,
        cancelable: false,
        composed: true,
        detail: {}
      }, options));
      this.dispatchEvent(event);
      return event;
    }
  };
  __decorateClass([
    e22()
  ], ShoelaceElement.prototype, "dir", 2);
  __decorateClass([
    e22()
  ], ShoelaceElement.prototype, "lang", 2);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.LJX6BXHL.js
  var SlTooltip = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController2(this);
      this.content = "";
      this.placement = "top";
      this.disabled = false;
      this.distance = 8;
      this.open = false;
      this.skidding = 0;
      this.trigger = "hover focus";
      this.hoist = false;
    }
    connectedCallback() {
      super.connectedCallback();
      this.handleBlur = this.handleBlur.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.handleFocus = this.handleFocus.bind(this);
      this.handleKeyDown = this.handleKeyDown.bind(this);
      this.handleMouseOver = this.handleMouseOver.bind(this);
      this.handleMouseOut = this.handleMouseOut.bind(this);
      this.updateComplete.then(() => {
        this.addEventListener("blur", this.handleBlur, true);
        this.addEventListener("focus", this.handleFocus, true);
        this.addEventListener("click", this.handleClick);
        this.addEventListener("keydown", this.handleKeyDown);
        this.addEventListener("mouseover", this.handleMouseOver);
        this.addEventListener("mouseout", this.handleMouseOut);
      });
    }
    firstUpdated() {
      this.body.hidden = !this.open;
      if (this.open) {
        this.popup.active = true;
        this.popup.reposition();
      }
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this.removeEventListener("blur", this.handleBlur, true);
      this.removeEventListener("focus", this.handleFocus, true);
      this.removeEventListener("click", this.handleClick);
      this.removeEventListener("keydown", this.handleKeyDown);
      this.removeEventListener("mouseover", this.handleMouseOver);
      this.removeEventListener("mouseout", this.handleMouseOut);
    }
    handleBlur() {
      if (this.hasTrigger("focus")) {
        this.hide();
      }
    }
    handleClick() {
      if (this.hasTrigger("click")) {
        if (this.open) {
          this.hide();
        } else {
          this.show();
        }
      }
    }
    handleFocus() {
      if (this.hasTrigger("focus")) {
        this.show();
      }
    }
    handleKeyDown(event) {
      if (this.open && event.key === "Escape") {
        event.stopPropagation();
        this.hide();
      }
    }
    handleMouseOver() {
      if (this.hasTrigger("hover")) {
        const delay = parseDuration(getComputedStyle(this).getPropertyValue("--show-delay"));
        clearTimeout(this.hoverTimeout);
        this.hoverTimeout = window.setTimeout(() => this.show(), delay);
      }
    }
    handleMouseOut() {
      if (this.hasTrigger("hover")) {
        const delay = parseDuration(getComputedStyle(this).getPropertyValue("--hide-delay"));
        clearTimeout(this.hoverTimeout);
        this.hoverTimeout = window.setTimeout(() => this.hide(), delay);
      }
    }
    hasTrigger(triggerType) {
      const triggers = this.trigger.split(" ");
      return triggers.includes(triggerType);
    }
    async handleOpenChange() {
      if (this.open) {
        if (this.disabled) {
          return;
        }
        this.emit("sl-show");
        await stopAnimations(this.body);
        this.body.hidden = false;
        this.popup.active = true;
        const { keyframes, options } = getAnimation(this, "tooltip.show", { dir: this.localize.dir() });
        await animateTo(this.popup.popup, keyframes, options);
        this.emit("sl-after-show");
      } else {
        this.emit("sl-hide");
        await stopAnimations(this.body);
        const { keyframes, options } = getAnimation(this, "tooltip.hide", { dir: this.localize.dir() });
        await animateTo(this.popup.popup, keyframes, options);
        this.popup.active = false;
        this.body.hidden = true;
        this.emit("sl-after-hide");
      }
    }
    async handleOptionsChange() {
      if (this.hasUpdated) {
        await this.updateComplete;
        this.popup.reposition();
      }
    }
    handleDisabledChange() {
      if (this.disabled && this.open) {
        this.hide();
      }
    }
    /** Shows the tooltip. */
    async show() {
      if (this.open) {
        return void 0;
      }
      this.open = true;
      return waitForEvent(this, "sl-after-show");
    }
    /** Hides the tooltip */
    async hide() {
      if (!this.open) {
        return void 0;
      }
      this.open = false;
      return waitForEvent(this, "sl-after-hide");
    }
    render() {
      return y`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${o5({
        tooltip: true,
        "tooltip--open": this.open
      })}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist ? "fixed" : "absolute"}
        flip
        shift
        arrow
      >
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        <slot
          name="content"
          part="body"
          id="tooltip"
          class="tooltip__body"
          role="tooltip"
          aria-live=${this.open ? "polite" : "off"}
        >
          ${this.content}
        </slot>
      </sl-popup>
    `;
    }
  };
  SlTooltip.styles = tooltip_styles_default;
  __decorateClass([
    i22("slot:not([name])")
  ], SlTooltip.prototype, "defaultSlot", 2);
  __decorateClass([
    i22(".tooltip__body")
  ], SlTooltip.prototype, "body", 2);
  __decorateClass([
    i22("sl-popup")
  ], SlTooltip.prototype, "popup", 2);
  __decorateClass([
    e22()
  ], SlTooltip.prototype, "content", 2);
  __decorateClass([
    e22()
  ], SlTooltip.prototype, "placement", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlTooltip.prototype, "disabled", 2);
  __decorateClass([
    e22({ type: Number })
  ], SlTooltip.prototype, "distance", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlTooltip.prototype, "open", 2);
  __decorateClass([
    e22({ type: Number })
  ], SlTooltip.prototype, "skidding", 2);
  __decorateClass([
    e22()
  ], SlTooltip.prototype, "trigger", 2);
  __decorateClass([
    e22({ type: Boolean })
  ], SlTooltip.prototype, "hoist", 2);
  __decorateClass([
    watch("open", { waitUntilFirstUpdate: true })
  ], SlTooltip.prototype, "handleOpenChange", 1);
  __decorateClass([
    watch(["content", "distance", "hoist", "placement", "skidding"])
  ], SlTooltip.prototype, "handleOptionsChange", 1);
  __decorateClass([
    watch("disabled")
  ], SlTooltip.prototype, "handleDisabledChange", 1);
  SlTooltip = __decorateClass([
    e5("sl-tooltip")
  ], SlTooltip);
  setDefaultAnimation("tooltip.show", {
    keyframes: [
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1 }
    ],
    options: { duration: 150, easing: "ease" }
  });
  setDefaultAnimation("tooltip.hide", {
    keyframes: [
      { opacity: 1, scale: 1 },
      { opacity: 0, scale: 0.8 }
    ],
    options: { duration: 150, easing: "ease" }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.PXIR4IUJ.js
  var tree_styles_default = i`
  ${component_styles_default}

  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--sl-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--sl-spacing-large);

    display: block;
    isolation: isolate;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.UXWQUABA.js
  var tree_item_styles_default = i`
  ${component_styles_default}

  :host {
    display: block;
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(sl-icon) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    color: var(--sl-color-neutral-700);
    cursor: pointer;
    user-select: none;
  }

  .tree-item__checkbox {
    pointer-events: none;
  }

  .tree-item__expand-button,
  .tree-item__checkbox,
  .tree-item__label {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-dense);
    letter-spacing: var(--sl-letter-spacing-normal);
  }

  .tree-item__checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .tree-item__indentation {
    display: block;
    width: 1em;
    flex-shrink: 0;
  }

  .tree-item__expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-x-small);
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    cursor: pointer;
  }

  .tree-item__expand-button {
    transition: var(--sl-transition-medium) rotate ease;
  }

  .tree-item--expanded .tree-item__expand-button {
    rotate: 90deg;
  }

  .tree-item--expanded.tree-item--rtl .tree-item__expand-button {
    rotate: -90deg;
  }

  .tree-item--expanded slot[name='expand-icon'],
  .tree-item:not(.tree-item--expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item--has-expand-button) .tree-item__expand-icon-slot {
    display: none;
  }

  .tree-item__expand-button--visible {
    cursor: pointer;
  }

  .tree-item__item {
    display: flex;
    align-items: center;
    border-inline-start: solid 3px transparent;
  }

  .tree-item--disabled .tree-item__item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .tree-item__item {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
    background-color: var(--sl-color-neutral-100);
    border-inline-start-color: var(--sl-color-primary-600);
  }

  :host(:not([aria-disabled='true'])) .tree-item__expand-button {
    color: var(--sl-color-neutral-600);
  }

  .tree-item__label {
    display: flex;
    align-items: center;
    transition: var(--sl-transition-fast) color;
  }

  .tree-item__children {
    display: block;
    font-size: calc(1em + var(--indent-size, var(--sl-spacing-medium)));
  }

  /* Indentation lines */
  .tree-item__children {
    position: relative;
  }

  .tree-item__children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    left: calc(1em - (var(--indent-guide-width) / 2) - 1px);
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  .tree-item--rtl .tree-item__children::before {
    left: auto;
    right: 1em;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
      outline: dashed 1px SelectedItem;
    }
  }
`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.OXFFPZHD.js
  var { I: l4 } = L;
  var e23 = (o7) => void 0 === o7.strings;
  var f2 = {};
  var s5 = (o7, l32 = f2) => o7._$AH = l32;
  var l22 = e4(class extends i3 {
    constructor(r5) {
      if (super(r5), r5.type !== t3.PROPERTY && r5.type !== t3.ATTRIBUTE && r5.type !== t3.BOOLEAN_ATTRIBUTE)
        throw Error("The `live` directive is not allowed on child or event bindings");
      if (!e23(r5))
        throw Error("`live` bindings can only contain a single expression");
    }
    render(r5) {
      return r5;
    }
    update(i25, [t23]) {
      if (t23 === x || t23 === b)
        return t23;
      const o7 = i25.element, l32 = i25.name;
      if (i25.type === t3.PROPERTY) {
        if (t23 === o7[l32])
          return x;
      } else if (i25.type === t3.BOOLEAN_ATTRIBUTE) {
        if (!!t23 === o7.hasAttribute(l32))
          return x;
      } else if (i25.type === t3.ATTRIBUTE && o7.getAttribute(l32) === t23 + "")
        return x;
      return s5(i25), t23;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.GUC2ARHT.js
  function n6(n23, o25, r5) {
    return n23 ? o25() : null == r5 ? void 0 : r5();
  }
  var SlTreeItem = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController2(this);
      this.indeterminate = false;
      this.isLeaf = false;
      this.loading = false;
      this.selectable = false;
      this.expanded = false;
      this.selected = false;
      this.disabled = false;
      this.lazy = false;
    }
    static isTreeItem(node) {
      return node instanceof Element && node.getAttribute("role") === "treeitem";
    }
    connectedCallback() {
      super.connectedCallback();
      this.setAttribute("role", "treeitem");
      this.setAttribute("tabindex", "-1");
      if (this.isNestedItem()) {
        this.slot = "children";
      }
    }
    firstUpdated() {
      this.childrenContainer.hidden = !this.expanded;
      this.childrenContainer.style.height = this.expanded ? "auto" : "0";
      this.isLeaf = !this.lazy && this.getChildrenItems().length === 0;
      this.handleExpandedChange();
    }
    async animateCollapse() {
      this.emit("sl-collapse");
      await stopAnimations(this.childrenContainer);
      const { keyframes, options } = getAnimation(this, "tree-item.collapse", { dir: this.localize.dir() });
      await animateTo(
        this.childrenContainer,
        shimKeyframesHeightAuto(keyframes, this.childrenContainer.scrollHeight),
        options
      );
      this.childrenContainer.hidden = true;
      this.emit("sl-after-collapse");
    }
    // Checks whether the item is nested into an item
    isNestedItem() {
      const parent = this.parentElement;
      return !!parent && SlTreeItem.isTreeItem(parent);
    }
    handleChildrenSlotChange() {
      this.loading = false;
      this.isLeaf = !this.lazy && this.getChildrenItems().length === 0;
    }
    willUpdate(changedProperties) {
      if (changedProperties.has("selected") && !changedProperties.has("indeterminate")) {
        this.indeterminate = false;
      }
    }
    async animateExpand() {
      this.emit("sl-expand");
      await stopAnimations(this.childrenContainer);
      this.childrenContainer.hidden = false;
      const { keyframes, options } = getAnimation(this, "tree-item.expand", { dir: this.localize.dir() });
      await animateTo(
        this.childrenContainer,
        shimKeyframesHeightAuto(keyframes, this.childrenContainer.scrollHeight),
        options
      );
      this.childrenContainer.style.height = "auto";
      this.emit("sl-after-expand");
    }
    handleLoadingChange() {
      this.setAttribute("aria-busy", this.loading ? "true" : "false");
      if (!this.loading) {
        this.animateExpand();
      }
    }
    handleDisabledChange() {
      this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
    }
    handleSelectedChange() {
      this.setAttribute("aria-selected", this.selected ? "true" : "false");
    }
    handleExpandedChange() {
      if (!this.isLeaf) {
        this.setAttribute("aria-expanded", this.expanded ? "true" : "false");
      } else {
        this.removeAttribute("aria-expanded");
      }
    }
    handleExpandAnimation() {
      if (this.expanded) {
        if (this.lazy) {
          this.loading = true;
          this.emit("sl-lazy-load");
        } else {
          this.animateExpand();
        }
      } else {
        this.animateCollapse();
      }
    }
    handleLazyChange() {
      this.emit("sl-lazy-change");
    }
    /** Gets all the nested tree items in this node. */
    getChildrenItems({ includeDisabled = true } = {}) {
      return this.childrenSlot ? [...this.childrenSlot.assignedElements({ flatten: true })].filter(
        (item) => SlTreeItem.isTreeItem(item) && (includeDisabled || !item.disabled)
      ) : [];
    }
    render() {
      const isRtl = this.localize.dir() === "rtl";
      const showExpandButton = !this.loading && (!this.isLeaf || this.lazy);
      return y`
      <div
        part="base"
        class="${o5({
        "tree-item": true,
        "tree-item--expanded": this.expanded,
        "tree-item--selected": this.selected,
        "tree-item--disabled": this.disabled,
        "tree-item--leaf": this.isLeaf,
        "tree-item--has-expand-button": showExpandButton,
        "tree-item--rtl": this.localize.dir() === "rtl"
      })}"
      >
        <div
          class="tree-item__item"
          part="
            item
            ${this.disabled ? "item--disabled" : ""}
            ${this.expanded ? "item--expanded" : ""}
            ${this.indeterminate ? "item--indeterminate" : ""}
            ${this.selected ? "item--selected" : ""}
          "
        >
          <div class="tree-item__indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${o5({
        "tree-item__expand-button": true,
        "tree-item__expand-button--visible": showExpandButton
      })}
            aria-hidden="true"
          >
            ${n6(this.loading, () => y` <sl-spinner></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${isRtl ? "chevron-left" : "chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${isRtl ? "chevron-left" : "chevron-right"}></sl-icon>
            </slot>
          </div>

          ${n6(
        this.selectable,
        () => y`
                <sl-checkbox
                  tabindex="-1"
                  class="tree-item__checkbox"
                  ?disabled="${this.disabled}"
                  ?checked="${l22(this.selected)}"
                  ?indeterminate="${this.indeterminate}"
                ></sl-checkbox>
              `
      )}

          <slot class="tree-item__label" part="label"></slot>
        </div>

        <slot
          name="children"
          class="tree-item__children"
          part="children"
          role="group"
          @slotchange="${this.handleChildrenSlotChange}"
        ></slot>
      </div>
    `;
    }
  };
  SlTreeItem.styles = tree_item_styles_default;
  __decorateClass([
    t4()
  ], SlTreeItem.prototype, "indeterminate", 2);
  __decorateClass([
    t4()
  ], SlTreeItem.prototype, "isLeaf", 2);
  __decorateClass([
    t4()
  ], SlTreeItem.prototype, "loading", 2);
  __decorateClass([
    t4()
  ], SlTreeItem.prototype, "selectable", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlTreeItem.prototype, "expanded", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlTreeItem.prototype, "selected", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlTreeItem.prototype, "disabled", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlTreeItem.prototype, "lazy", 2);
  __decorateClass([
    i22("slot:not([name])")
  ], SlTreeItem.prototype, "defaultSlot", 2);
  __decorateClass([
    i22("slot[name=children]")
  ], SlTreeItem.prototype, "childrenSlot", 2);
  __decorateClass([
    i22(".tree-item__item")
  ], SlTreeItem.prototype, "itemElement", 2);
  __decorateClass([
    i22(".tree-item__children")
  ], SlTreeItem.prototype, "childrenContainer", 2);
  __decorateClass([
    i22(".tree-item__expand-button slot")
  ], SlTreeItem.prototype, "expandButtonSlot", 2);
  __decorateClass([
    watch("loading", { waitUntilFirstUpdate: true })
  ], SlTreeItem.prototype, "handleLoadingChange", 1);
  __decorateClass([
    watch("disabled")
  ], SlTreeItem.prototype, "handleDisabledChange", 1);
  __decorateClass([
    watch("selected")
  ], SlTreeItem.prototype, "handleSelectedChange", 1);
  __decorateClass([
    watch("expanded", { waitUntilFirstUpdate: true })
  ], SlTreeItem.prototype, "handleExpandedChange", 1);
  __decorateClass([
    watch("expanded", { waitUntilFirstUpdate: true })
  ], SlTreeItem.prototype, "handleExpandAnimation", 1);
  __decorateClass([
    watch("lazy", { waitUntilFirstUpdate: true })
  ], SlTreeItem.prototype, "handleLazyChange", 1);
  SlTreeItem = __decorateClass([
    e5("sl-tree-item")
  ], SlTreeItem);
  setDefaultAnimation("tree-item.expand", {
    keyframes: [
      { height: "0", opacity: "0", overflow: "hidden" },
      { height: "auto", opacity: "1", overflow: "hidden" }
    ],
    options: { duration: 250, easing: "cubic-bezier(0.4, 0.0, 0.2, 1)" }
  });
  setDefaultAnimation("tree-item.collapse", {
    keyframes: [
      { height: "auto", opacity: "1", overflow: "hidden" },
      { height: "0", opacity: "0", overflow: "hidden" }
    ],
    options: { duration: 200, easing: "cubic-bezier(0.4, 0.0, 0.2, 1)" }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.HF7GESMZ.js
  function clamp(value, min, max) {
    const noNegativeZero = (n9) => Object.is(n9, -0) ? 0 : n9;
    if (value < min) {
      return noNegativeZero(min);
    }
    if (value > max) {
      return noNegativeZero(max);
    }
    return noNegativeZero(value);
  }

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.YH5ADLO7.js
  function syncCheckboxes(changedTreeItem, initialSync = false) {
    function syncParentItem(treeItem) {
      const children = treeItem.getChildrenItems({ includeDisabled: false });
      if (children.length) {
        const allChecked = children.every((item) => item.selected);
        const allUnchecked = children.every((item) => !item.selected && !item.indeterminate);
        treeItem.selected = allChecked;
        treeItem.indeterminate = !allChecked && !allUnchecked;
      }
    }
    function syncAncestors(treeItem) {
      const parentItem = treeItem.parentElement;
      if (SlTreeItem.isTreeItem(parentItem)) {
        syncParentItem(parentItem);
        syncAncestors(parentItem);
      }
    }
    function syncDescendants(treeItem) {
      for (const childItem of treeItem.getChildrenItems()) {
        childItem.selected = initialSync ? treeItem.selected || childItem.selected : !childItem.disabled && treeItem.selected;
        syncDescendants(childItem);
      }
      if (initialSync) {
        syncParentItem(treeItem);
      }
    }
    syncDescendants(changedTreeItem);
    syncAncestors(changedTreeItem);
  }
  var SlTree = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.selection = "single";
      this.localize = new LocalizeController2(this);
      this.clickTarget = null;
      this.initTreeItem = (item) => {
        item.selectable = this.selection === "multiple";
        ["expand", "collapse"].filter((status) => !!this.querySelector(`[slot="${status}-icon"]`)).forEach((status) => {
          const existingIcon = item.querySelector(`[slot="${status}-icon"]`);
          if (existingIcon === null) {
            item.append(this.getExpandButtonIcon(status));
          } else if (existingIcon.hasAttribute("data-default")) {
            existingIcon.replaceWith(this.getExpandButtonIcon(status));
          } else {
          }
        });
      };
    }
    async connectedCallback() {
      super.connectedCallback();
      this.handleTreeChanged = this.handleTreeChanged.bind(this);
      this.handleFocusIn = this.handleFocusIn.bind(this);
      this.handleFocusOut = this.handleFocusOut.bind(this);
      this.setAttribute("role", "tree");
      this.setAttribute("tabindex", "0");
      this.addEventListener("focusin", this.handleFocusIn);
      this.addEventListener("focusout", this.handleFocusOut);
      this.addEventListener("sl-lazy-change", this.handleSlotChange);
      await this.updateComplete;
      this.mutationObserver = new MutationObserver(this.handleTreeChanged);
      this.mutationObserver.observe(this, { childList: true, subtree: true });
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this.mutationObserver.disconnect();
      this.removeEventListener("focusin", this.handleFocusIn);
      this.removeEventListener("focusout", this.handleFocusOut);
      this.removeEventListener("sl-lazy-change", this.handleSlotChange);
    }
    // Generates a clone of the expand icon element to use for each tree item
    getExpandButtonIcon(status) {
      const slot = status === "expand" ? this.expandedIconSlot : this.collapsedIconSlot;
      const icon = slot.assignedElements({ flatten: true })[0];
      if (icon) {
        const clone = icon.cloneNode(true);
        [clone, ...clone.querySelectorAll("[id]")].forEach((el) => el.removeAttribute("id"));
        clone.setAttribute("data-default", "");
        clone.slot = `${status}-icon`;
        return clone;
      }
      return null;
    }
    handleTreeChanged(mutations) {
      for (const mutation of mutations) {
        const addedNodes = [...mutation.addedNodes].filter(SlTreeItem.isTreeItem);
        const removedNodes = [...mutation.removedNodes].filter(SlTreeItem.isTreeItem);
        addedNodes.forEach(this.initTreeItem);
        if (removedNodes.includes(this.lastFocusedItem)) {
          this.focusItem(this.getFocusableItems()[0]);
        }
      }
    }
    syncTreeItems(selectedItem) {
      const items = this.getAllTreeItems();
      if (this.selection === "multiple") {
        syncCheckboxes(selectedItem);
      } else {
        for (const item of items) {
          if (item !== selectedItem) {
            item.selected = false;
          }
        }
      }
    }
    selectItem(selectedItem) {
      const previousSelection = [...this.selectedItems];
      if (this.selection === "multiple") {
        selectedItem.selected = !selectedItem.selected;
        if (selectedItem.lazy) {
          selectedItem.expanded = true;
        }
        this.syncTreeItems(selectedItem);
      } else if (this.selection === "single" || selectedItem.isLeaf) {
        selectedItem.expanded = !selectedItem.expanded;
        selectedItem.selected = true;
        this.syncTreeItems(selectedItem);
      } else if (this.selection === "leaf") {
        selectedItem.expanded = !selectedItem.expanded;
      }
      const nextSelection = this.selectedItems;
      if (previousSelection.length !== nextSelection.length || nextSelection.some((item) => !previousSelection.includes(item))) {
        Promise.all(nextSelection.map((el) => el.updateComplete)).then(() => {
          this.emit("sl-selection-change", { detail: { selection: nextSelection } });
        });
      }
    }
    getAllTreeItems() {
      return [...this.querySelectorAll("sl-tree-item")];
    }
    focusItem(item) {
      item == null ? void 0 : item.focus();
    }
    handleKeyDown(event) {
      if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft", "Home", "End", "Enter", " "].includes(event.key)) {
        return;
      }
      const items = this.getFocusableItems();
      const isLtr = this.localize.dir() === "ltr";
      const isRtl = this.localize.dir() === "rtl";
      if (items.length > 0) {
        event.preventDefault();
        const activeItemIndex = items.findIndex((item) => item.matches(":focus"));
        const activeItem = items[activeItemIndex];
        const focusItemAt = (index) => {
          const item = items[clamp(index, 0, items.length - 1)];
          this.focusItem(item);
        };
        const toggleExpand = (expanded) => {
          activeItem.expanded = expanded;
        };
        if (event.key === "ArrowDown") {
          focusItemAt(activeItemIndex + 1);
        } else if (event.key === "ArrowUp") {
          focusItemAt(activeItemIndex - 1);
        } else if (isLtr && event.key === "ArrowRight" || isRtl && event.key === "ArrowLeft") {
          if (!activeItem || activeItem.disabled || activeItem.expanded || activeItem.isLeaf && !activeItem.lazy) {
            focusItemAt(activeItemIndex + 1);
          } else {
            toggleExpand(true);
          }
        } else if (isLtr && event.key === "ArrowLeft" || isRtl && event.key === "ArrowRight") {
          if (!activeItem || activeItem.disabled || activeItem.isLeaf || !activeItem.expanded) {
            focusItemAt(activeItemIndex - 1);
          } else {
            toggleExpand(false);
          }
        } else if (event.key === "Home") {
          focusItemAt(0);
        } else if (event.key === "End") {
          focusItemAt(items.length - 1);
        } else if (event.key === "Enter" || event.key === " ") {
          if (!activeItem.disabled) {
            this.selectItem(activeItem);
          }
        }
      }
    }
    handleClick(event) {
      const target = event.target;
      const treeItem = target.closest("sl-tree-item");
      const isExpandButton = event.composedPath().some((el) => {
        var _a;
        return (_a = el == null ? void 0 : el.classList) == null ? void 0 : _a.contains("tree-item__expand-button");
      });
      if (!treeItem || treeItem.disabled || target !== this.clickTarget) {
        return;
      }
      if (this.selection === "multiple" && isExpandButton) {
        treeItem.expanded = !treeItem.expanded;
      } else {
        this.selectItem(treeItem);
      }
    }
    handleMouseDown(event) {
      this.clickTarget = event.target;
    }
    handleFocusOut(event) {
      const relatedTarget = event.relatedTarget;
      if (!relatedTarget || !this.contains(relatedTarget)) {
        this.tabIndex = 0;
      }
    }
    handleFocusIn(event) {
      const target = event.target;
      if (event.target === this) {
        this.focusItem(this.lastFocusedItem || this.getAllTreeItems()[0]);
      }
      if (SlTreeItem.isTreeItem(target) && !target.disabled) {
        if (this.lastFocusedItem) {
          this.lastFocusedItem.tabIndex = -1;
        }
        this.lastFocusedItem = target;
        this.tabIndex = -1;
        target.tabIndex = 0;
      }
    }
    handleSlotChange() {
      const items = this.getAllTreeItems();
      items.forEach(this.initTreeItem);
    }
    async handleSelectionChange() {
      const isSelectionMultiple = this.selection === "multiple";
      const items = this.getAllTreeItems();
      this.setAttribute("aria-multiselectable", isSelectionMultiple ? "true" : "false");
      for (const item of items) {
        item.selectable = isSelectionMultiple;
      }
      if (isSelectionMultiple) {
        await this.updateComplete;
        [...this.querySelectorAll(":scope > sl-tree-item")].forEach(
          (treeItem) => syncCheckboxes(treeItem, true)
        );
      }
    }
    /** @internal Returns the list of tree items that are selected in the tree. */
    get selectedItems() {
      const items = this.getAllTreeItems();
      const isSelected = (item) => item.selected;
      return items.filter(isSelected);
    }
    /** @internal Gets focusable tree items in the tree. */
    getFocusableItems() {
      const items = this.getAllTreeItems();
      const collapsedItems = /* @__PURE__ */ new Set();
      return items.filter((item) => {
        var _a;
        if (item.disabled)
          return false;
        const parent = (_a = item.parentElement) == null ? void 0 : _a.closest("[role=treeitem]");
        if (parent && (!parent.expanded || parent.loading || collapsedItems.has(parent))) {
          collapsedItems.add(item);
        }
        return !collapsedItems.has(item);
      });
    }
    render() {
      return y`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <slot name="expand-icon" hidden aria-hidden="true"> </slot>
        <slot name="collapse-icon" hidden aria-hidden="true"> </slot>
      </div>
    `;
    }
  };
  SlTree.styles = tree_styles_default;
  __decorateClass([
    i22("slot:not([name])")
  ], SlTree.prototype, "defaultSlot", 2);
  __decorateClass([
    i22("slot[name=expand-icon]")
  ], SlTree.prototype, "expandedIconSlot", 2);
  __decorateClass([
    i22("slot[name=collapse-icon]")
  ], SlTree.prototype, "collapsedIconSlot", 2);
  __decorateClass([
    e22()
  ], SlTree.prototype, "selection", 2);
  __decorateClass([
    watch("selection")
  ], SlTree.prototype, "handleSelectionChange", 1);
  SlTree = __decorateClass([
    e5("sl-tree")
  ], SlTree);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.SXHKHWVK.js
  var tab_group_styles_default = i`
  ${component_styles_default}

  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition: var(--sl-transition-fast) translate ease, var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.RK73WSZS.js
  function getOffset(element, parent) {
    return {
      top: Math.round(element.getBoundingClientRect().top - parent.getBoundingClientRect().top),
      left: Math.round(element.getBoundingClientRect().left - parent.getBoundingClientRect().left)
    };
  }
  var locks = /* @__PURE__ */ new Set();
  function getScrollbarWidth() {
    const documentWidth = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - documentWidth);
  }
  function lockBodyScrolling(lockingEl) {
    locks.add(lockingEl);
    if (!document.body.classList.contains("sl-scroll-lock")) {
      const scrollbarWidth = getScrollbarWidth();
      document.body.classList.add("sl-scroll-lock");
      document.body.style.setProperty("--sl-scroll-lock-size", `${scrollbarWidth}px`);
    }
  }
  function unlockBodyScrolling(lockingEl) {
    locks.delete(lockingEl);
    if (locks.size === 0) {
      document.body.classList.remove("sl-scroll-lock");
      document.body.style.removeProperty("--sl-scroll-lock-size");
    }
  }
  function scrollIntoView(element, container, direction = "vertical", behavior = "smooth") {
    const offset = getOffset(element, container);
    const offsetTop = offset.top + container.scrollTop;
    const offsetLeft = offset.left + container.scrollLeft;
    const minX = container.scrollLeft;
    const maxX = container.scrollLeft + container.offsetWidth;
    const minY = container.scrollTop;
    const maxY = container.scrollTop + container.offsetHeight;
    if (direction === "horizontal" || direction === "both") {
      if (offsetLeft < minX) {
        container.scrollTo({ left: offsetLeft, behavior });
      } else if (offsetLeft + element.clientWidth > maxX) {
        container.scrollTo({ left: offsetLeft - container.offsetWidth + element.clientWidth, behavior });
      }
    }
    if (direction === "vertical" || direction === "both") {
      if (offsetTop < minY) {
        container.scrollTo({ top: offsetTop, behavior });
      } else if (offsetTop + element.clientHeight > maxY) {
        container.scrollTo({ top: offsetTop - container.offsetHeight + element.clientHeight, behavior });
      }
    }
  }

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.XG2DLEP4.js
  var SlTabGroup = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController2(this);
      this.tabs = [];
      this.panels = [];
      this.hasScrollControls = false;
      this.placement = "top";
      this.activation = "auto";
      this.noScrollControls = false;
    }
    connectedCallback() {
      const whenAllDefined = Promise.allSettled([
        customElements.whenDefined("sl-tab"),
        customElements.whenDefined("sl-tab-panel")
      ]);
      super.connectedCallback();
      this.resizeObserver = new ResizeObserver(() => {
        this.repositionIndicator();
        this.updateScrollControls();
      });
      this.mutationObserver = new MutationObserver((mutations) => {
        if (mutations.some((m3) => !["aria-labelledby", "aria-controls"].includes(m3.attributeName))) {
          setTimeout(() => this.setAriaLabels());
        }
        if (mutations.some((m3) => m3.attributeName === "disabled")) {
          this.syncTabsAndPanels();
        }
      });
      this.updateComplete.then(() => {
        this.syncTabsAndPanels();
        this.mutationObserver.observe(this, { attributes: true, childList: true, subtree: true });
        this.resizeObserver.observe(this.nav);
        whenAllDefined.then(() => {
          const intersectionObserver = new IntersectionObserver((entries, observer) => {
            var _a;
            if (entries[0].intersectionRatio > 0) {
              this.setAriaLabels();
              this.setActiveTab((_a = this.getActiveTab()) != null ? _a : this.tabs[0], { emitEvents: false });
              observer.unobserve(entries[0].target);
            }
          });
          intersectionObserver.observe(this.tabGroup);
        });
      });
    }
    disconnectedCallback() {
      this.mutationObserver.disconnect();
      this.resizeObserver.unobserve(this.nav);
    }
    getAllTabs(options = { includeDisabled: true }) {
      const slot = this.shadowRoot.querySelector('slot[name="nav"]');
      return [...slot.assignedElements()].filter((el) => {
        return options.includeDisabled ? el.tagName.toLowerCase() === "sl-tab" : el.tagName.toLowerCase() === "sl-tab" && !el.disabled;
      });
    }
    getAllPanels() {
      return [...this.body.assignedElements()].filter((el) => el.tagName.toLowerCase() === "sl-tab-panel");
    }
    getActiveTab() {
      return this.tabs.find((el) => el.active);
    }
    handleClick(event) {
      const target = event.target;
      const tab = target.closest("sl-tab");
      const tabGroup = tab == null ? void 0 : tab.closest("sl-tab-group");
      if (tabGroup !== this) {
        return;
      }
      if (tab !== null) {
        this.setActiveTab(tab, { scrollBehavior: "smooth" });
      }
    }
    handleKeyDown(event) {
      const target = event.target;
      const tab = target.closest("sl-tab");
      const tabGroup = tab == null ? void 0 : tab.closest("sl-tab-group");
      if (tabGroup !== this) {
        return;
      }
      if (["Enter", " "].includes(event.key)) {
        if (tab !== null) {
          this.setActiveTab(tab, { scrollBehavior: "smooth" });
          event.preventDefault();
        }
      }
      if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
        const activeEl = this.tabs.find((t23) => t23.matches(":focus"));
        const isRtl = this.localize.dir() === "rtl";
        if ((activeEl == null ? void 0 : activeEl.tagName.toLowerCase()) === "sl-tab") {
          let index = this.tabs.indexOf(activeEl);
          if (event.key === "Home") {
            index = 0;
          } else if (event.key === "End") {
            index = this.tabs.length - 1;
          } else if (["top", "bottom"].includes(this.placement) && event.key === (isRtl ? "ArrowRight" : "ArrowLeft") || ["start", "end"].includes(this.placement) && event.key === "ArrowUp") {
            index--;
          } else if (["top", "bottom"].includes(this.placement) && event.key === (isRtl ? "ArrowLeft" : "ArrowRight") || ["start", "end"].includes(this.placement) && event.key === "ArrowDown") {
            index++;
          }
          if (index < 0) {
            index = this.tabs.length - 1;
          }
          if (index > this.tabs.length - 1) {
            index = 0;
          }
          this.tabs[index].focus({ preventScroll: true });
          if (this.activation === "auto") {
            this.setActiveTab(this.tabs[index], { scrollBehavior: "smooth" });
          }
          if (["top", "bottom"].includes(this.placement)) {
            scrollIntoView(this.tabs[index], this.nav, "horizontal");
          }
          event.preventDefault();
        }
      }
    }
    handleScrollToStart() {
      this.nav.scroll({
        left: this.localize.dir() === "rtl" ? this.nav.scrollLeft + this.nav.clientWidth : this.nav.scrollLeft - this.nav.clientWidth,
        behavior: "smooth"
      });
    }
    handleScrollToEnd() {
      this.nav.scroll({
        left: this.localize.dir() === "rtl" ? this.nav.scrollLeft - this.nav.clientWidth : this.nav.scrollLeft + this.nav.clientWidth,
        behavior: "smooth"
      });
    }
    setActiveTab(tab, options) {
      options = __spreadValues({
        emitEvents: true,
        scrollBehavior: "auto"
      }, options);
      if (tab !== this.activeTab && !tab.disabled) {
        const previousTab = this.activeTab;
        this.activeTab = tab;
        this.tabs.map((el) => el.active = el === this.activeTab);
        this.panels.map((el) => {
          var _a;
          return el.active = el.name === ((_a = this.activeTab) == null ? void 0 : _a.panel);
        });
        this.syncIndicator();
        if (["top", "bottom"].includes(this.placement)) {
          scrollIntoView(this.activeTab, this.nav, "horizontal", options.scrollBehavior);
        }
        if (options.emitEvents) {
          if (previousTab) {
            this.emit("sl-tab-hide", { detail: { name: previousTab.panel } });
          }
          this.emit("sl-tab-show", { detail: { name: this.activeTab.panel } });
        }
      }
    }
    setAriaLabels() {
      this.tabs.forEach((tab) => {
        const panel = this.panels.find((el) => el.name === tab.panel);
        if (panel) {
          tab.setAttribute("aria-controls", panel.getAttribute("id"));
          panel.setAttribute("aria-labelledby", tab.getAttribute("id"));
        }
      });
    }
    repositionIndicator() {
      const currentTab = this.getActiveTab();
      if (!currentTab) {
        return;
      }
      const width = currentTab.clientWidth;
      const height = currentTab.clientHeight;
      const isRtl = this.localize.dir() === "rtl";
      const allTabs = this.getAllTabs();
      const precedingTabs = allTabs.slice(0, allTabs.indexOf(currentTab));
      const offset = precedingTabs.reduce(
        (previous, current) => ({
          left: previous.left + current.clientWidth,
          top: previous.top + current.clientHeight
        }),
        { left: 0, top: 0 }
      );
      switch (this.placement) {
        case "top":
        case "bottom":
          this.indicator.style.width = `${width}px`;
          this.indicator.style.height = "auto";
          this.indicator.style.translate = isRtl ? `${-1 * offset.left}px` : `${offset.left}px`;
          break;
        case "start":
        case "end":
          this.indicator.style.width = "auto";
          this.indicator.style.height = `${height}px`;
          this.indicator.style.translate = `0 ${offset.top}px`;
          break;
      }
    }
    // This stores tabs and panels so we can refer to a cache instead of calling querySelectorAll() multiple times.
    syncTabsAndPanels() {
      this.tabs = this.getAllTabs({ includeDisabled: false });
      this.panels = this.getAllPanels();
      this.syncIndicator();
      this.updateComplete.then(() => this.updateScrollControls());
    }
    updateScrollControls() {
      if (this.noScrollControls) {
        this.hasScrollControls = false;
      } else {
        this.hasScrollControls = ["top", "bottom"].includes(this.placement) && this.nav.scrollWidth > this.nav.clientWidth;
      }
    }
    syncIndicator() {
      const tab = this.getActiveTab();
      if (tab) {
        this.indicator.style.display = "block";
        this.repositionIndicator();
      } else {
        this.indicator.style.display = "none";
      }
    }
    /** Shows the specified tab panel. */
    show(panel) {
      const tab = this.tabs.find((el) => el.panel === panel);
      if (tab) {
        this.setActiveTab(tab, { scrollBehavior: "smooth" });
      }
    }
    render() {
      const isRtl = this.localize.dir() === "rtl";
      return y`
      <div
        part="base"
        class=${o5({
        "tab-group": true,
        "tab-group--top": this.placement === "top",
        "tab-group--bottom": this.placement === "bottom",
        "tab-group--start": this.placement === "start",
        "tab-group--end": this.placement === "end",
        "tab-group--rtl": this.localize.dir() === "rtl",
        "tab-group--has-scroll-controls": this.hasScrollControls
      })}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls ? y`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--start"
                  name=${isRtl ? "chevron-right" : "chevron-left"}
                  library="system"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              ` : ""}

          <div class="tab-group__nav">
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls ? y`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--end"
                  name=${isRtl ? "chevron-left" : "chevron-right"}
                  library="system"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              ` : ""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `;
    }
  };
  SlTabGroup.styles = tab_group_styles_default;
  __decorateClass([
    i22(".tab-group")
  ], SlTabGroup.prototype, "tabGroup", 2);
  __decorateClass([
    i22(".tab-group__body")
  ], SlTabGroup.prototype, "body", 2);
  __decorateClass([
    i22(".tab-group__nav")
  ], SlTabGroup.prototype, "nav", 2);
  __decorateClass([
    i22(".tab-group__indicator")
  ], SlTabGroup.prototype, "indicator", 2);
  __decorateClass([
    t4()
  ], SlTabGroup.prototype, "hasScrollControls", 2);
  __decorateClass([
    e22()
  ], SlTabGroup.prototype, "placement", 2);
  __decorateClass([
    e22()
  ], SlTabGroup.prototype, "activation", 2);
  __decorateClass([
    e22({ attribute: "no-scroll-controls", type: Boolean })
  ], SlTabGroup.prototype, "noScrollControls", 2);
  __decorateClass([
    watch("noScrollControls", { waitUntilFirstUpdate: true })
  ], SlTabGroup.prototype, "updateScrollControls", 1);
  __decorateClass([
    watch("placement", { waitUntilFirstUpdate: true })
  ], SlTabGroup.prototype, "syncIndicator", 1);
  SlTabGroup = __decorateClass([
    e5("sl-tab-group")
  ], SlTabGroup);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.F6XS2O2X.js
  var tab_panel_styles_default = i`
  ${component_styles_default}

  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.2QXI6WLP.js
  var id = 0;
  var SlTabPanel = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.attrId = ++id;
      this.componentId = `sl-tab-panel-${this.attrId}`;
      this.name = "";
      this.active = false;
    }
    connectedCallback() {
      super.connectedCallback();
      this.id = this.id.length > 0 ? this.id : this.componentId;
      this.setAttribute("role", "tabpanel");
    }
    handleActiveChange() {
      this.setAttribute("aria-hidden", this.active ? "false" : "true");
    }
    render() {
      return y`
      <slot
        part="base"
        class=${o5({
        "tab-panel": true,
        "tab-panel--active": this.active
      })}
      ></slot>
    `;
    }
  };
  SlTabPanel.styles = tab_panel_styles_default;
  __decorateClass([
    e22({ reflect: true })
  ], SlTabPanel.prototype, "name", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlTabPanel.prototype, "active", 2);
  __decorateClass([
    watch("active")
  ], SlTabPanel.prototype, "handleActiveChange", 1);
  SlTabPanel = __decorateClass([
    e5("sl-tab-panel")
  ], SlTabPanel);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.HP6S5QOV.js
  var form_control_styles_default = i`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.572XDSW6.js
  var textarea_styles_default = i`
  ${component_styles_default}
  ${form_control_styles_default}

  :host {
    display: block;
  }

  .textarea {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ZNRFAEMI.js
  var defaultValue = (propertyName = "value") => (proto, key) => {
    const ctor = proto.constructor;
    const attributeChangedCallback = ctor.prototype.attributeChangedCallback;
    ctor.prototype.attributeChangedCallback = function(name, old, value) {
      var _a;
      const options = ctor.getPropertyOptions(propertyName);
      const attributeName = typeof options.attribute === "string" ? options.attribute : propertyName;
      if (name === attributeName) {
        const converter = options.converter || n2;
        const fromAttribute = typeof converter === "function" ? converter : (_a = converter == null ? void 0 : converter.fromAttribute) != null ? _a : n2.fromAttribute;
        const newValue = fromAttribute(value, options.type);
        if (this[propertyName] !== newValue) {
          this[key] = newValue;
        }
      }
      attributeChangedCallback.call(this, name, old, value);
    };
  };

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.HDTNU4PB.js
  var formCollections = /* @__PURE__ */ new WeakMap();
  var reportValidityOverloads = /* @__PURE__ */ new WeakMap();
  var userInteractedControls = /* @__PURE__ */ new WeakSet();
  var interactions = /* @__PURE__ */ new WeakMap();
  var FormControlController = class {
    constructor(host, options) {
      (this.host = host).addController(this);
      this.options = __spreadValues({
        form: (input) => {
          if (input.hasAttribute("form") && input.getAttribute("form") !== "") {
            const root = input.getRootNode();
            const formId = input.getAttribute("form");
            if (formId) {
              return root.getElementById(formId);
            }
          }
          return input.closest("form");
        },
        name: (input) => input.name,
        value: (input) => input.value,
        defaultValue: (input) => input.defaultValue,
        disabled: (input) => {
          var _a;
          return (_a = input.disabled) != null ? _a : false;
        },
        reportValidity: (input) => typeof input.reportValidity === "function" ? input.reportValidity() : true,
        setValue: (input, value) => input.value = value,
        assumeInteractionOn: ["sl-input"]
      }, options);
      this.handleFormData = this.handleFormData.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this.handleFormReset = this.handleFormReset.bind(this);
      this.reportFormValidity = this.reportFormValidity.bind(this);
      this.handleInteraction = this.handleInteraction.bind(this);
    }
    hostConnected() {
      const form = this.options.form(this.host);
      if (form) {
        this.attachForm(form);
      }
      interactions.set(this.host, []);
      this.options.assumeInteractionOn.forEach((event) => {
        this.host.addEventListener(event, this.handleInteraction);
      });
    }
    hostDisconnected() {
      this.detachForm();
      interactions.delete(this.host);
      this.options.assumeInteractionOn.forEach((event) => {
        this.host.removeEventListener(event, this.handleInteraction);
      });
    }
    hostUpdated() {
      const form = this.options.form(this.host);
      if (!form) {
        this.detachForm();
      }
      if (form && this.form !== form) {
        this.detachForm();
        this.attachForm(form);
      }
      if (this.host.hasUpdated) {
        this.setValidity(this.host.validity.valid);
      }
    }
    attachForm(form) {
      if (form) {
        this.form = form;
        if (formCollections.has(this.form)) {
          formCollections.get(this.form).add(this.host);
        } else {
          formCollections.set(this.form, /* @__PURE__ */ new Set([this.host]));
        }
        this.form.addEventListener("formdata", this.handleFormData);
        this.form.addEventListener("submit", this.handleFormSubmit);
        this.form.addEventListener("reset", this.handleFormReset);
        if (!reportValidityOverloads.has(this.form)) {
          reportValidityOverloads.set(this.form, this.form.reportValidity);
          this.form.reportValidity = () => this.reportFormValidity();
        }
      } else {
        this.form = void 0;
      }
    }
    detachForm() {
      var _a;
      if (this.form) {
        (_a = formCollections.get(this.form)) == null ? void 0 : _a.delete(this.host);
        this.form.removeEventListener("formdata", this.handleFormData);
        this.form.removeEventListener("submit", this.handleFormSubmit);
        this.form.removeEventListener("reset", this.handleFormReset);
        if (reportValidityOverloads.has(this.form)) {
          this.form.reportValidity = reportValidityOverloads.get(this.form);
          reportValidityOverloads.delete(this.form);
        }
      }
      this.form = void 0;
    }
    handleFormData(event) {
      const disabled = this.options.disabled(this.host);
      const name = this.options.name(this.host);
      const value = this.options.value(this.host);
      const isButton = this.host.tagName.toLowerCase() === "sl-button";
      if (!disabled && !isButton && typeof name === "string" && name.length > 0 && typeof value !== "undefined") {
        if (Array.isArray(value)) {
          value.forEach((val) => {
            event.formData.append(name, val.toString());
          });
        } else {
          event.formData.append(name, value.toString());
        }
      }
    }
    handleFormSubmit(event) {
      var _a;
      const disabled = this.options.disabled(this.host);
      const reportValidity = this.options.reportValidity;
      if (this.form && !this.form.noValidate) {
        (_a = formCollections.get(this.form)) == null ? void 0 : _a.forEach((control) => {
          this.setUserInteracted(control, true);
        });
      }
      if (this.form && !this.form.noValidate && !disabled && !reportValidity(this.host)) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    }
    handleFormReset() {
      this.options.setValue(this.host, this.options.defaultValue(this.host));
      this.setUserInteracted(this.host, false);
      interactions.set(this.host, []);
    }
    handleInteraction(event) {
      const emittedEvents = interactions.get(this.host);
      if (!emittedEvents.includes(event.type)) {
        emittedEvents.push(event.type);
      }
      if (emittedEvents.length === this.options.assumeInteractionOn.length) {
        this.setUserInteracted(this.host, true);
      }
    }
    reportFormValidity() {
      if (this.form && !this.form.noValidate) {
        const elements = this.form.querySelectorAll("*");
        for (const element of elements) {
          if (typeof element.reportValidity === "function") {
            if (!element.reportValidity()) {
              return false;
            }
          }
        }
      }
      return true;
    }
    setUserInteracted(el, hasInteracted) {
      if (hasInteracted) {
        userInteractedControls.add(el);
      } else {
        userInteractedControls.delete(el);
      }
      el.requestUpdate();
    }
    doAction(type, submitter) {
      if (this.form) {
        const button = document.createElement("button");
        button.type = type;
        button.style.position = "absolute";
        button.style.width = "0";
        button.style.height = "0";
        button.style.clipPath = "inset(50%)";
        button.style.overflow = "hidden";
        button.style.whiteSpace = "nowrap";
        if (submitter) {
          button.name = submitter.name;
          button.value = submitter.value;
          ["formaction", "formenctype", "formmethod", "formnovalidate", "formtarget"].forEach((attr) => {
            if (submitter.hasAttribute(attr)) {
              button.setAttribute(attr, submitter.getAttribute(attr));
            }
          });
        }
        this.form.append(button);
        button.click();
        button.remove();
      }
    }
    /** Returns the associated `<form>` element, if one exists. */
    getForm() {
      var _a;
      return (_a = this.form) != null ? _a : null;
    }
    /** Resets the form, restoring all the control to their default value */
    reset(submitter) {
      this.doAction("reset", submitter);
    }
    /** Submits the form, triggering validation and form data injection. */
    submit(submitter) {
      this.doAction("submit", submitter);
    }
    /**
     * Synchronously sets the form control's validity. Call this when you know the future validity but need to update
     * the host element immediately, i.e. before Lit updates the component in the next update.
     */
    setValidity(isValid) {
      const host = this.host;
      const hasInteracted = Boolean(userInteractedControls.has(host));
      const required = Boolean(host.required);
      host.toggleAttribute("data-required", required);
      host.toggleAttribute("data-optional", !required);
      host.toggleAttribute("data-invalid", !isValid);
      host.toggleAttribute("data-valid", isValid);
      host.toggleAttribute("data-user-invalid", !isValid && hasInteracted);
      host.toggleAttribute("data-user-valid", isValid && hasInteracted);
    }
    /**
     * Updates the form control's validity based on the current value of `host.validity.valid`. Call this when anything
     * that affects constraint validation changes so the component receives the correct validity states.
     */
    updateValidity() {
      const host = this.host;
      this.setValidity(host.validity.valid);
    }
    /**
     * Dispatches a non-bubbling, cancelable custom event of type `sl-invalid`.
     * If the `sl-invalid` event will be cancelled then the original `invalid`
     * event (which may have been passed as argument) will also be cancelled.
     * If no original `invalid` event has been passed then the `sl-invalid`
     * event will be cancelled before being dispatched.
     */
    emitInvalidEvent(originalInvalidEvent) {
      const slInvalidEvent = new CustomEvent("sl-invalid", {
        bubbles: false,
        composed: false,
        cancelable: true,
        detail: {}
      });
      if (!originalInvalidEvent) {
        slInvalidEvent.preventDefault();
      }
      if (!this.host.dispatchEvent(slInvalidEvent)) {
        originalInvalidEvent == null ? void 0 : originalInvalidEvent.preventDefault();
      }
    }
  };
  var validValidityState = Object.freeze({
    badInput: false,
    customError: false,
    patternMismatch: false,
    rangeOverflow: false,
    rangeUnderflow: false,
    stepMismatch: false,
    tooLong: false,
    tooShort: false,
    typeMismatch: false,
    valid: true,
    valueMissing: false
  });
  var valueMissingValidityState = Object.freeze(__spreadProps(__spreadValues({}, validValidityState), {
    valid: false,
    valueMissing: true
  }));
  var customErrorValidityState = Object.freeze(__spreadProps(__spreadValues({}, validValidityState), {
    valid: false,
    customError: true
  }));

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.V47DPYLL.js
  var l5 = (l24) => null != l24 ? l24 : b;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3IYPB6RR.js
  var HasSlotController = class {
    constructor(host, ...slotNames) {
      this.slotNames = [];
      (this.host = host).addController(this);
      this.slotNames = slotNames;
      this.handleSlotChange = this.handleSlotChange.bind(this);
    }
    hasDefaultSlot() {
      return [...this.host.childNodes].some((node) => {
        if (node.nodeType === node.TEXT_NODE && node.textContent.trim() !== "") {
          return true;
        }
        if (node.nodeType === node.ELEMENT_NODE) {
          const el = node;
          const tagName = el.tagName.toLowerCase();
          if (tagName === "sl-visually-hidden") {
            return false;
          }
          if (!el.hasAttribute("slot")) {
            return true;
          }
        }
        return false;
      });
    }
    hasNamedSlot(name) {
      return this.host.querySelector(`:scope > [slot="${name}"]`) !== null;
    }
    test(slotName) {
      return slotName === "[default]" ? this.hasDefaultSlot() : this.hasNamedSlot(slotName);
    }
    hostConnected() {
      this.host.shadowRoot.addEventListener("slotchange", this.handleSlotChange);
    }
    hostDisconnected() {
      this.host.shadowRoot.removeEventListener("slotchange", this.handleSlotChange);
    }
    handleSlotChange(event) {
      const slot = event.target;
      if (this.slotNames.includes("[default]") && !slot.name || slot.name && this.slotNames.includes(slot.name)) {
        this.host.requestUpdate();
      }
    }
  };
  function getTextContent(slot) {
    if (!slot) {
      return "";
    }
    const nodes = slot.assignedNodes({ flatten: true });
    let text = "";
    [...nodes].forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        text += node.textContent;
      }
    });
    return text;
  }

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.IXPLTYT4.js
  var SlTextarea = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.formControlController = new FormControlController(this, {
        assumeInteractionOn: ["sl-blur", "sl-input"]
      });
      this.hasSlotController = new HasSlotController(this, "help-text", "label");
      this.hasFocus = false;
      this.title = "";
      this.name = "";
      this.value = "";
      this.size = "medium";
      this.filled = false;
      this.label = "";
      this.helpText = "";
      this.placeholder = "";
      this.rows = 4;
      this.resize = "vertical";
      this.disabled = false;
      this.readonly = false;
      this.form = "";
      this.required = false;
      this.spellcheck = true;
      this.defaultValue = "";
    }
    /** Gets the validity state object */
    get validity() {
      return this.input.validity;
    }
    /** Gets the validation message */
    get validationMessage() {
      return this.input.validationMessage;
    }
    connectedCallback() {
      super.connectedCallback();
      this.resizeObserver = new ResizeObserver(() => this.setTextareaHeight());
      this.updateComplete.then(() => {
        this.setTextareaHeight();
        this.resizeObserver.observe(this.input);
      });
    }
    firstUpdated() {
      this.formControlController.updateValidity();
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this.resizeObserver.unobserve(this.input);
    }
    handleBlur() {
      this.hasFocus = false;
      this.emit("sl-blur");
    }
    handleChange() {
      this.value = this.input.value;
      this.setTextareaHeight();
      this.emit("sl-change");
    }
    handleFocus() {
      this.hasFocus = true;
      this.emit("sl-focus");
    }
    handleInput() {
      this.value = this.input.value;
      this.emit("sl-input");
    }
    handleInvalid(event) {
      this.formControlController.setValidity(false);
      this.formControlController.emitInvalidEvent(event);
    }
    setTextareaHeight() {
      if (this.resize === "auto") {
        this.input.style.height = "auto";
        this.input.style.height = `${this.input.scrollHeight}px`;
      } else {
        this.input.style.height = void 0;
      }
    }
    handleDisabledChange() {
      this.formControlController.setValidity(this.disabled);
    }
    handleRowsChange() {
      this.setTextareaHeight();
    }
    async handleValueChange() {
      await this.updateComplete;
      this.formControlController.updateValidity();
      this.setTextareaHeight();
    }
    /** Sets focus on the textarea. */
    focus(options) {
      this.input.focus(options);
    }
    /** Removes focus from the textarea. */
    blur() {
      this.input.blur();
    }
    /** Selects all the text in the textarea. */
    select() {
      this.input.select();
    }
    /** Gets or sets the textarea's scroll position. */
    scrollPosition(position) {
      if (position) {
        if (typeof position.top === "number")
          this.input.scrollTop = position.top;
        if (typeof position.left === "number")
          this.input.scrollLeft = position.left;
        return void 0;
      }
      return {
        top: this.input.scrollTop,
        left: this.input.scrollTop
      };
    }
    /** Sets the start and end positions of the text selection (0-based). */
    setSelectionRange(selectionStart, selectionEnd, selectionDirection = "none") {
      this.input.setSelectionRange(selectionStart, selectionEnd, selectionDirection);
    }
    /** Replaces a range of text with a new string. */
    setRangeText(replacement, start, end, selectMode) {
      this.input.setRangeText(replacement, start, end, selectMode);
      if (this.value !== this.input.value) {
        this.value = this.input.value;
      }
      if (this.value !== this.input.value) {
        this.value = this.input.value;
        this.setTextareaHeight();
      }
    }
    /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
    checkValidity() {
      return this.input.checkValidity();
    }
    /** Gets the associated form, if one exists. */
    getForm() {
      return this.formControlController.getForm();
    }
    /** Checks for validity and shows the browser's validation message if the control is invalid. */
    reportValidity() {
      return this.input.reportValidity();
    }
    /** Sets a custom validation message. Pass an empty string to restore validity. */
    setCustomValidity(message) {
      this.input.setCustomValidity(message);
      this.formControlController.updateValidity();
    }
    render() {
      const hasLabelSlot = this.hasSlotController.test("label");
      const hasHelpTextSlot = this.hasSlotController.test("help-text");
      const hasLabel = this.label ? true : !!hasLabelSlot;
      const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
      return y`
      <div
        part="form-control"
        class=${o5({
        "form-control": true,
        "form-control--small": this.size === "small",
        "form-control--medium": this.size === "medium",
        "form-control--large": this.size === "large",
        "form-control--has-label": hasLabel,
        "form-control--has-help-text": hasHelpText
      })}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${hasLabel ? "false" : "true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${o5({
        textarea: true,
        "textarea--small": this.size === "small",
        "textarea--medium": this.size === "medium",
        "textarea--large": this.size === "large",
        "textarea--standard": !this.filled,
        "textarea--filled": this.filled,
        "textarea--disabled": this.disabled,
        "textarea--focused": this.hasFocus,
        "textarea--empty": !this.value,
        "textarea--resize-none": this.resize === "none",
        "textarea--resize-vertical": this.resize === "vertical",
        "textarea--resize-auto": this.resize === "auto"
      })}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${l5(this.name)}
              .value=${l22(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${l5(this.placeholder)}
              rows=${l5(this.rows)}
              minlength=${l5(this.minlength)}
              maxlength=${l5(this.maxlength)}
              autocapitalize=${l5(this.autocapitalize)}
              autocorrect=${l5(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${l5(this.spellcheck)}
              enterkeyhint=${l5(this.enterkeyhint)}
              inputmode=${l5(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
          </div>
        </div>

        <slot
          name="help-text"
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${hasHelpText ? "false" : "true"}
        >
          ${this.helpText}
        </slot>
      </div>
    `;
    }
  };
  SlTextarea.styles = textarea_styles_default;
  __decorateClass([
    i22(".textarea__control")
  ], SlTextarea.prototype, "input", 2);
  __decorateClass([
    t4()
  ], SlTextarea.prototype, "hasFocus", 2);
  __decorateClass([
    e22()
  ], SlTextarea.prototype, "title", 2);
  __decorateClass([
    e22()
  ], SlTextarea.prototype, "name", 2);
  __decorateClass([
    e22()
  ], SlTextarea.prototype, "value", 2);
  __decorateClass([
    e22({ reflect: true })
  ], SlTextarea.prototype, "size", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlTextarea.prototype, "filled", 2);
  __decorateClass([
    e22()
  ], SlTextarea.prototype, "label", 2);
  __decorateClass([
    e22({ attribute: "help-text" })
  ], SlTextarea.prototype, "helpText", 2);
  __decorateClass([
    e22()
  ], SlTextarea.prototype, "placeholder", 2);
  __decorateClass([
    e22({ type: Number })
  ], SlTextarea.prototype, "rows", 2);
  __decorateClass([
    e22()
  ], SlTextarea.prototype, "resize", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlTextarea.prototype, "disabled", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlTextarea.prototype, "readonly", 2);
  __decorateClass([
    e22({ reflect: true })
  ], SlTextarea.prototype, "form", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlTextarea.prototype, "required", 2);
  __decorateClass([
    e22({ type: Number })
  ], SlTextarea.prototype, "minlength", 2);
  __decorateClass([
    e22({ type: Number })
  ], SlTextarea.prototype, "maxlength", 2);
  __decorateClass([
    e22()
  ], SlTextarea.prototype, "autocapitalize", 2);
  __decorateClass([
    e22()
  ], SlTextarea.prototype, "autocorrect", 2);
  __decorateClass([
    e22()
  ], SlTextarea.prototype, "autocomplete", 2);
  __decorateClass([
    e22({ type: Boolean })
  ], SlTextarea.prototype, "autofocus", 2);
  __decorateClass([
    e22()
  ], SlTextarea.prototype, "enterkeyhint", 2);
  __decorateClass([
    e22({
      type: Boolean,
      converter: {
        // Allow "true|false" attribute values but keep the property boolean
        fromAttribute: (value) => !value || value === "false" ? false : true,
        toAttribute: (value) => value ? "true" : "false"
      }
    })
  ], SlTextarea.prototype, "spellcheck", 2);
  __decorateClass([
    e22()
  ], SlTextarea.prototype, "inputmode", 2);
  __decorateClass([
    defaultValue()
  ], SlTextarea.prototype, "defaultValue", 2);
  __decorateClass([
    watch("disabled", { waitUntilFirstUpdate: true })
  ], SlTextarea.prototype, "handleDisabledChange", 1);
  __decorateClass([
    watch("rows", { waitUntilFirstUpdate: true })
  ], SlTextarea.prototype, "handleRowsChange", 1);
  __decorateClass([
    watch("value", { waitUntilFirstUpdate: true })
  ], SlTextarea.prototype, "handleValueChange", 1);
  SlTextarea = __decorateClass([
    e5("sl-textarea")
  ], SlTextarea);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.F33LDBWT.js
  var split_panel_styles_default = i`
  ${component_styles_default}

  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.A4SOQOK5.js
  function drag(container, options) {
    function move(pointerEvent) {
      const dims = container.getBoundingClientRect();
      const defaultView = container.ownerDocument.defaultView;
      const offsetX = dims.left + defaultView.pageXOffset;
      const offsetY = dims.top + defaultView.pageYOffset;
      const x3 = pointerEvent.pageX - offsetX;
      const y4 = pointerEvent.pageY - offsetY;
      if (options == null ? void 0 : options.onMove) {
        options.onMove(x3, y4);
      }
    }
    function stop() {
      document.removeEventListener("pointermove", move);
      document.removeEventListener("pointerup", stop);
      if (options == null ? void 0 : options.onStop) {
        options.onStop();
      }
    }
    document.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerup", stop);
    if ((options == null ? void 0 : options.initialEvent) instanceof PointerEvent) {
      move(options.initialEvent);
    }
  }

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TQGWTVS5.js
  var SlSplitPanel = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController2(this);
      this.position = 50;
      this.vertical = false;
      this.disabled = false;
      this.snapThreshold = 12;
    }
    connectedCallback() {
      super.connectedCallback();
      this.resizeObserver = new ResizeObserver((entries) => this.handleResize(entries));
      this.updateComplete.then(() => this.resizeObserver.observe(this));
      this.detectSize();
      this.cachedPositionInPixels = this.percentageToPixels(this.position);
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this.resizeObserver.unobserve(this);
    }
    detectSize() {
      const { width, height } = this.getBoundingClientRect();
      this.size = this.vertical ? height : width;
    }
    percentageToPixels(value) {
      return this.size * (value / 100);
    }
    pixelsToPercentage(value) {
      return value / this.size * 100;
    }
    handleDrag(event) {
      const isRtl = this.localize.dir() === "rtl";
      if (this.disabled) {
        return;
      }
      if (event.cancelable) {
        event.preventDefault();
      }
      drag(this, {
        onMove: (x3, y22) => {
          let newPositionInPixels = this.vertical ? y22 : x3;
          if (this.primary === "end") {
            newPositionInPixels = this.size - newPositionInPixels;
          }
          if (this.snap) {
            const snaps = this.snap.split(" ");
            snaps.forEach((value) => {
              let snapPoint;
              if (value.endsWith("%")) {
                snapPoint = this.size * (parseFloat(value) / 100);
              } else {
                snapPoint = parseFloat(value);
              }
              if (isRtl && !this.vertical) {
                snapPoint = this.size - snapPoint;
              }
              if (newPositionInPixels >= snapPoint - this.snapThreshold && newPositionInPixels <= snapPoint + this.snapThreshold) {
                newPositionInPixels = snapPoint;
              }
            });
          }
          this.position = clamp(this.pixelsToPercentage(newPositionInPixels), 0, 100);
        },
        initialEvent: event
      });
    }
    handleKeyDown(event) {
      if (this.disabled) {
        return;
      }
      if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
        let newPosition = this.position;
        const incr = (event.shiftKey ? 10 : 1) * (this.primary === "end" ? -1 : 1);
        event.preventDefault();
        if (event.key === "ArrowLeft" && !this.vertical || event.key === "ArrowUp" && this.vertical) {
          newPosition -= incr;
        }
        if (event.key === "ArrowRight" && !this.vertical || event.key === "ArrowDown" && this.vertical) {
          newPosition += incr;
        }
        if (event.key === "Home") {
          newPosition = this.primary === "end" ? 100 : 0;
        }
        if (event.key === "End") {
          newPosition = this.primary === "end" ? 0 : 100;
        }
        this.position = clamp(newPosition, 0, 100);
      }
    }
    handleResize(entries) {
      const { width, height } = entries[0].contentRect;
      this.size = this.vertical ? height : width;
      if (this.primary) {
        this.position = this.pixelsToPercentage(this.cachedPositionInPixels);
      }
    }
    handlePositionChange() {
      this.cachedPositionInPixels = this.percentageToPixels(this.position);
      this.positionInPixels = this.percentageToPixels(this.position);
      this.emit("sl-reposition");
    }
    handlePositionInPixelsChange() {
      this.position = this.pixelsToPercentage(this.positionInPixels);
    }
    handleVerticalChange() {
      this.detectSize();
    }
    render() {
      const gridTemplate = this.vertical ? "gridTemplateRows" : "gridTemplateColumns";
      const gridTemplateAlt = this.vertical ? "gridTemplateColumns" : "gridTemplateRows";
      const isRtl = this.localize.dir() === "rtl";
      const primary = `
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `;
      const secondary = "auto";
      if (this.primary === "end") {
        if (isRtl && !this.vertical) {
          this.style[gridTemplate] = `${primary} var(--divider-width) ${secondary}`;
        } else {
          this.style[gridTemplate] = `${secondary} var(--divider-width) ${primary}`;
        }
      } else {
        if (isRtl && !this.vertical) {
          this.style[gridTemplate] = `${secondary} var(--divider-width) ${primary}`;
        } else {
          this.style[gridTemplate] = `${primary} var(--divider-width) ${secondary}`;
        }
      }
      this.style[gridTemplateAlt] = "";
      return y`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${l5(this.disabled ? void 0 : "0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `;
    }
  };
  SlSplitPanel.styles = split_panel_styles_default;
  __decorateClass([
    i22(".divider")
  ], SlSplitPanel.prototype, "divider", 2);
  __decorateClass([
    e22({ type: Number, reflect: true })
  ], SlSplitPanel.prototype, "position", 2);
  __decorateClass([
    e22({ attribute: "position-in-pixels", type: Number })
  ], SlSplitPanel.prototype, "positionInPixels", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlSplitPanel.prototype, "vertical", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlSplitPanel.prototype, "disabled", 2);
  __decorateClass([
    e22()
  ], SlSplitPanel.prototype, "primary", 2);
  __decorateClass([
    e22()
  ], SlSplitPanel.prototype, "snap", 2);
  __decorateClass([
    e22({ type: Number, attribute: "snap-threshold" })
  ], SlSplitPanel.prototype, "snapThreshold", 2);
  __decorateClass([
    watch("position")
  ], SlSplitPanel.prototype, "handlePositionChange", 1);
  __decorateClass([
    watch("positionInPixels")
  ], SlSplitPanel.prototype, "handlePositionInPixelsChange", 1);
  __decorateClass([
    watch("vertical")
  ], SlSplitPanel.prototype, "handleVerticalChange", 1);
  SlSplitPanel = __decorateClass([
    e5("sl-split-panel")
  ], SlSplitPanel);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.BLAV73MP.js
  var switch_styles_default = i`
  ${component_styles_default}

  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition: var(--sl-transition-fast) translate ease, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color, var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.WDDSF3T2.js
  var SlSwitch = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.formControlController = new FormControlController(this, {
        value: (control) => control.checked ? control.value || "on" : void 0,
        defaultValue: (control) => control.defaultChecked,
        setValue: (control, checked) => control.checked = checked
      });
      this.hasFocus = false;
      this.title = "";
      this.name = "";
      this.size = "medium";
      this.disabled = false;
      this.checked = false;
      this.defaultChecked = false;
      this.form = "";
      this.required = false;
    }
    /** Gets the validity state object */
    get validity() {
      return this.input.validity;
    }
    /** Gets the validation message */
    get validationMessage() {
      return this.input.validationMessage;
    }
    firstUpdated() {
      this.formControlController.updateValidity();
    }
    handleBlur() {
      this.hasFocus = false;
      this.emit("sl-blur");
    }
    handleInput() {
      this.emit("sl-input");
    }
    handleInvalid(event) {
      this.formControlController.setValidity(false);
      this.formControlController.emitInvalidEvent(event);
    }
    handleClick() {
      this.checked = !this.checked;
      this.emit("sl-change");
    }
    handleFocus() {
      this.hasFocus = true;
      this.emit("sl-focus");
    }
    handleKeyDown(event) {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        this.checked = false;
        this.emit("sl-change");
        this.emit("sl-input");
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        this.checked = true;
        this.emit("sl-change");
        this.emit("sl-input");
      }
    }
    handleCheckedChange() {
      this.input.checked = this.checked;
      this.formControlController.updateValidity();
    }
    handleDisabledChange() {
      this.formControlController.setValidity(true);
    }
    /** Simulates a click on the switch. */
    click() {
      this.input.click();
    }
    /** Sets focus on the switch. */
    focus(options) {
      this.input.focus(options);
    }
    /** Removes focus from the switch. */
    blur() {
      this.input.blur();
    }
    /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
    checkValidity() {
      return this.input.checkValidity();
    }
    /** Gets the associated form, if one exists. */
    getForm() {
      return this.formControlController.getForm();
    }
    /** Checks for validity and shows the browser's validation message if the control is invalid. */
    reportValidity() {
      return this.input.reportValidity();
    }
    /** Sets a custom validation message. Pass an empty string to restore validity. */
    setCustomValidity(message) {
      this.input.setCustomValidity(message);
      this.formControlController.updateValidity();
    }
    render() {
      return y`
      <label
        part="base"
        class=${o5({
        switch: true,
        "switch--checked": this.checked,
        "switch--disabled": this.disabled,
        "switch--focused": this.hasFocus,
        "switch--small": this.size === "small",
        "switch--medium": this.size === "medium",
        "switch--large": this.size === "large"
      })}
      >
        <input
          class="switch__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${l5(this.value)}
          .checked=${l22(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          role="switch"
          aria-checked=${this.checked ? "true" : "false"}
          @click=${this.handleClick}
          @input=${this.handleInput}
          @invalid=${this.handleInvalid}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @keydown=${this.handleKeyDown}
        />

        <span part="control" class="switch__control">
          <span part="thumb" class="switch__thumb"></span>
        </span>

        <slot part="label" class="switch__label"></slot>
      </label>
    `;
    }
  };
  SlSwitch.styles = switch_styles_default;
  __decorateClass([
    i22('input[type="checkbox"]')
  ], SlSwitch.prototype, "input", 2);
  __decorateClass([
    t4()
  ], SlSwitch.prototype, "hasFocus", 2);
  __decorateClass([
    e22()
  ], SlSwitch.prototype, "title", 2);
  __decorateClass([
    e22()
  ], SlSwitch.prototype, "name", 2);
  __decorateClass([
    e22()
  ], SlSwitch.prototype, "value", 2);
  __decorateClass([
    e22({ reflect: true })
  ], SlSwitch.prototype, "size", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlSwitch.prototype, "disabled", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlSwitch.prototype, "checked", 2);
  __decorateClass([
    defaultValue("checked")
  ], SlSwitch.prototype, "defaultChecked", 2);
  __decorateClass([
    e22({ reflect: true })
  ], SlSwitch.prototype, "form", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlSwitch.prototype, "required", 2);
  __decorateClass([
    watch("checked", { waitUntilFirstUpdate: true })
  ], SlSwitch.prototype, "handleCheckedChange", 1);
  __decorateClass([
    watch("disabled", { waitUntilFirstUpdate: true })
  ], SlSwitch.prototype, "handleDisabledChange", 1);
  SlSwitch = __decorateClass([
    e5("sl-switch")
  ], SlSwitch);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.QLX5PFTF.js
  var tab_styles_default = i`
  ${component_styles_default}

  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    cursor: pointer;
    transition: var(--transition-speed) box-shadow, var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus {
    outline: none;
  }

  .tab:focus-visible:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ZWSFXFC3.js
  var id2 = 0;
  var SlTab = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController2(this);
      this.attrId = ++id2;
      this.componentId = `sl-tab-${this.attrId}`;
      this.panel = "";
      this.active = false;
      this.closable = false;
      this.disabled = false;
    }
    connectedCallback() {
      super.connectedCallback();
      this.setAttribute("role", "tab");
    }
    handleCloseClick(event) {
      event.stopPropagation();
      this.emit("sl-close");
    }
    handleActiveChange() {
      this.setAttribute("aria-selected", this.active ? "true" : "false");
    }
    handleDisabledChange() {
      this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
    }
    /** Sets focus to the tab. */
    focus(options) {
      this.tab.focus(options);
    }
    /** Removes focus from the tab. */
    blur() {
      this.tab.blur();
    }
    render() {
      this.id = this.id.length > 0 ? this.id : this.componentId;
      return y`
      <div
        part="base"
        class=${o5({
        tab: true,
        "tab--active": this.active,
        "tab--closable": this.closable,
        "tab--disabled": this.disabled
      })}
        tabindex=${this.disabled ? "-1" : "0"}
      >
        <slot></slot>
        ${this.closable ? y`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            ` : ""}
      </div>
    `;
    }
  };
  SlTab.styles = tab_styles_default;
  __decorateClass([
    i22(".tab")
  ], SlTab.prototype, "tab", 2);
  __decorateClass([
    e22({ reflect: true })
  ], SlTab.prototype, "panel", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlTab.prototype, "active", 2);
  __decorateClass([
    e22({ type: Boolean })
  ], SlTab.prototype, "closable", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlTab.prototype, "disabled", 2);
  __decorateClass([
    watch("active")
  ], SlTab.prototype, "handleActiveChange", 1);
  __decorateClass([
    watch("disabled")
  ], SlTab.prototype, "handleDisabledChange", 1);
  SlTab = __decorateClass([
    e5("sl-tab")
  ], SlTab);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.WVPHE5WS.js
  var availableUnits = [
    { max: 276e4, value: 6e4, unit: "minute" },
    // max 46 minutes
    { max: 72e6, value: 36e5, unit: "hour" },
    // max 20 hours
    { max: 5184e5, value: 864e5, unit: "day" },
    // max 6 days
    { max: 24192e5, value: 6048e5, unit: "week" },
    // max 28 days
    { max: 28512e6, value: 2592e6, unit: "month" },
    // max 11 months
    { max: Infinity, value: 31536e6, unit: "year" }
  ];
  var SlRelativeTime = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController2(this);
      this.isoTime = "";
      this.relativeTime = "";
      this.titleTime = "";
      this.date = /* @__PURE__ */ new Date();
      this.format = "long";
      this.numeric = "auto";
      this.sync = false;
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      clearTimeout(this.updateTimeout);
    }
    render() {
      const now = /* @__PURE__ */ new Date();
      const then = new Date(this.date);
      if (isNaN(then.getMilliseconds())) {
        this.relativeTime = "";
        this.isoTime = "";
        return "";
      }
      const diff = then.getTime() - now.getTime();
      const { unit, value } = availableUnits.find((singleUnit) => Math.abs(diff) < singleUnit.max);
      this.isoTime = then.toISOString();
      this.titleTime = this.localize.date(then, {
        month: "long",
        year: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        timeZoneName: "short"
      });
      this.relativeTime = this.localize.relativeTime(Math.round(diff / value), unit, {
        numeric: this.numeric,
        style: this.format
      });
      clearTimeout(this.updateTimeout);
      if (this.sync) {
        let nextInterval;
        if (unit === "minute") {
          nextInterval = getTimeUntilNextUnit("second");
        } else if (unit === "hour") {
          nextInterval = getTimeUntilNextUnit("minute");
        } else if (unit === "day") {
          nextInterval = getTimeUntilNextUnit("hour");
        } else {
          nextInterval = getTimeUntilNextUnit("day");
        }
        this.updateTimeout = window.setTimeout(() => this.requestUpdate(), nextInterval);
      }
      return y` <time datetime=${this.isoTime} title=${this.titleTime}>${this.relativeTime}</time> `;
    }
  };
  __decorateClass([
    t4()
  ], SlRelativeTime.prototype, "isoTime", 2);
  __decorateClass([
    t4()
  ], SlRelativeTime.prototype, "relativeTime", 2);
  __decorateClass([
    t4()
  ], SlRelativeTime.prototype, "titleTime", 2);
  __decorateClass([
    e22()
  ], SlRelativeTime.prototype, "date", 2);
  __decorateClass([
    e22()
  ], SlRelativeTime.prototype, "format", 2);
  __decorateClass([
    e22()
  ], SlRelativeTime.prototype, "numeric", 2);
  __decorateClass([
    e22({ type: Boolean })
  ], SlRelativeTime.prototype, "sync", 2);
  SlRelativeTime = __decorateClass([
    e5("sl-relative-time")
  ], SlRelativeTime);
  function getTimeUntilNextUnit(unit) {
    const units = { second: 1e3, minute: 6e4, hour: 36e5, day: 864e5 };
    const value = units[unit];
    return value - Date.now() % value;
  }

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.FHB26C7K.js
  var resize_observer_styles_default = i`
  ${component_styles_default}

  :host {
    display: contents;
  }
`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.X4SGTXZN.js
  var SlResizeObserver = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.observedElements = [];
      this.disabled = false;
    }
    connectedCallback() {
      super.connectedCallback();
      this.resizeObserver = new ResizeObserver((entries) => {
        this.emit("sl-resize", { detail: { entries } });
      });
      if (!this.disabled) {
        this.startObserver();
      }
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this.stopObserver();
    }
    handleSlotChange() {
      if (!this.disabled) {
        this.startObserver();
      }
    }
    startObserver() {
      const slot = this.shadowRoot.querySelector("slot");
      if (slot !== null) {
        const elements = slot.assignedElements({ flatten: true });
        this.observedElements.forEach((el) => this.resizeObserver.unobserve(el));
        this.observedElements = [];
        elements.forEach((el) => {
          this.resizeObserver.observe(el);
          this.observedElements.push(el);
        });
      }
    }
    stopObserver() {
      this.resizeObserver.disconnect();
    }
    handleDisabledChange() {
      if (this.disabled) {
        this.stopObserver();
      } else {
        this.startObserver();
      }
    }
    render() {
      return y` <slot @slotchange=${this.handleSlotChange}></slot> `;
    }
  };
  SlResizeObserver.styles = resize_observer_styles_default;
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlResizeObserver.prototype, "disabled", 2);
  __decorateClass([
    watch("disabled", { waitUntilFirstUpdate: true })
  ], SlResizeObserver.prototype, "handleDisabledChange", 1);
  SlResizeObserver = __decorateClass([
    e5("sl-resize-observer")
  ], SlResizeObserver);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.I5LF5K7G.js
  var select_styles_default = i`
  ${component_styles_default}
  ${form_control_styles_default}

  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix */
  .select__prefix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox::slotted(small) {
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KY264F7D.js
  var SlSelect = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.formControlController = new FormControlController(this, {
        assumeInteractionOn: ["sl-blur", "sl-input"]
      });
      this.hasSlotController = new HasSlotController(this, "help-text", "label");
      this.localize = new LocalizeController2(this);
      this.typeToSelectString = "";
      this.hasFocus = false;
      this.displayLabel = "";
      this.selectedOptions = [];
      this.name = "";
      this.value = "";
      this.defaultValue = "";
      this.size = "medium";
      this.placeholder = "";
      this.multiple = false;
      this.maxOptionsVisible = 3;
      this.disabled = false;
      this.clearable = false;
      this.open = false;
      this.hoist = false;
      this.filled = false;
      this.pill = false;
      this.label = "";
      this.placement = "bottom";
      this.helpText = "";
      this.form = "";
      this.required = false;
    }
    /** Gets the validity state object */
    get validity() {
      return this.valueInput.validity;
    }
    /** Gets the validation message */
    get validationMessage() {
      return this.valueInput.validationMessage;
    }
    connectedCallback() {
      super.connectedCallback();
      this.handleDocumentFocusIn = this.handleDocumentFocusIn.bind(this);
      this.handleDocumentKeyDown = this.handleDocumentKeyDown.bind(this);
      this.handleDocumentMouseDown = this.handleDocumentMouseDown.bind(this);
      this.open = false;
    }
    addOpenListeners() {
      document.addEventListener("focusin", this.handleDocumentFocusIn);
      document.addEventListener("keydown", this.handleDocumentKeyDown);
      document.addEventListener("mousedown", this.handleDocumentMouseDown);
    }
    removeOpenListeners() {
      document.removeEventListener("focusin", this.handleDocumentFocusIn);
      document.removeEventListener("keydown", this.handleDocumentKeyDown);
      document.removeEventListener("mousedown", this.handleDocumentMouseDown);
    }
    handleFocus() {
      this.hasFocus = true;
      this.displayInput.setSelectionRange(0, 0);
      this.emit("sl-focus");
    }
    handleBlur() {
      this.hasFocus = false;
      this.emit("sl-blur");
    }
    handleDocumentFocusIn(event) {
      const path = event.composedPath();
      if (this && !path.includes(this)) {
        this.hide();
      }
    }
    handleDocumentKeyDown(event) {
      const target = event.target;
      const isClearButton = target.closest(".select__clear") !== null;
      const isIconButton = target.closest("sl-icon-button") !== null;
      if (isClearButton || isIconButton) {
        return;
      }
      if (event.key === "Escape" && this.open) {
        event.preventDefault();
        event.stopPropagation();
        this.hide();
        this.displayInput.focus({ preventScroll: true });
      }
      if (event.key === "Enter" || event.key === " " && this.typeToSelectString === "") {
        event.preventDefault();
        event.stopImmediatePropagation();
        if (!this.open) {
          this.show();
          return;
        }
        if (this.currentOption && !this.currentOption.disabled) {
          if (this.multiple) {
            this.toggleOptionSelection(this.currentOption);
          } else {
            this.setSelectedOptions(this.currentOption);
          }
          this.updateComplete.then(() => {
            this.emit("sl-input");
            this.emit("sl-change");
          });
          if (!this.multiple) {
            this.hide();
            this.displayInput.focus({ preventScroll: true });
          }
        }
        return;
      }
      if (["ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
        const allOptions = this.getAllOptions();
        const currentIndex = allOptions.indexOf(this.currentOption);
        let newIndex = Math.max(0, currentIndex);
        event.preventDefault();
        if (!this.open) {
          this.show();
          if (this.currentOption) {
            return;
          }
        }
        if (event.key === "ArrowDown") {
          newIndex = currentIndex + 1;
          if (newIndex > allOptions.length - 1)
            newIndex = 0;
        } else if (event.key === "ArrowUp") {
          newIndex = currentIndex - 1;
          if (newIndex < 0)
            newIndex = allOptions.length - 1;
        } else if (event.key === "Home") {
          newIndex = 0;
        } else if (event.key === "End") {
          newIndex = allOptions.length - 1;
        }
        this.setCurrentOption(allOptions[newIndex]);
      }
      if (event.key.length === 1 || event.key === "Backspace") {
        const allOptions = this.getAllOptions();
        if (event.metaKey || event.ctrlKey || event.altKey) {
          return;
        }
        if (!this.open) {
          if (event.key === "Backspace") {
            return;
          }
          this.show();
        }
        event.stopPropagation();
        event.preventDefault();
        clearTimeout(this.typeToSelectTimeout);
        this.typeToSelectTimeout = window.setTimeout(() => this.typeToSelectString = "", 1e3);
        if (event.key === "Backspace") {
          this.typeToSelectString = this.typeToSelectString.slice(0, -1);
        } else {
          this.typeToSelectString += event.key.toLowerCase();
        }
        for (const option of allOptions) {
          const label = option.getTextLabel().toLowerCase();
          if (label.startsWith(this.typeToSelectString)) {
            this.setCurrentOption(option);
            break;
          }
        }
      }
    }
    handleDocumentMouseDown(event) {
      const path = event.composedPath();
      if (this && !path.includes(this)) {
        this.hide();
      }
    }
    handleLabelClick() {
      this.displayInput.focus();
    }
    handleComboboxMouseDown(event) {
      const path = event.composedPath();
      const isIconButton = path.some((el) => el instanceof Element && el.tagName.toLowerCase() === "sl-icon-button");
      if (this.disabled || isIconButton) {
        return;
      }
      event.preventDefault();
      this.displayInput.focus({ preventScroll: true });
      this.open = !this.open;
    }
    handleComboboxKeyDown(event) {
      event.stopPropagation();
      this.handleDocumentKeyDown(event);
    }
    handleClearClick(event) {
      event.stopPropagation();
      if (this.value !== "") {
        this.setSelectedOptions([]);
        this.displayInput.focus({ preventScroll: true });
        this.updateComplete.then(() => {
          this.emit("sl-clear");
          this.emit("sl-input");
          this.emit("sl-change");
        });
      }
    }
    handleClearMouseDown(event) {
      event.stopPropagation();
      event.preventDefault();
    }
    handleOptionClick(event) {
      const target = event.target;
      const option = target.closest("sl-option");
      const oldValue = this.value;
      if (option && !option.disabled) {
        if (this.multiple) {
          this.toggleOptionSelection(option);
        } else {
          this.setSelectedOptions(option);
        }
        this.updateComplete.then(() => this.displayInput.focus({ preventScroll: true }));
        if (this.value !== oldValue) {
          this.updateComplete.then(() => {
            this.emit("sl-input");
            this.emit("sl-change");
          });
        }
        if (!this.multiple) {
          this.hide();
          this.displayInput.focus({ preventScroll: true });
        }
      }
    }
    handleDefaultSlotChange() {
      const allOptions = this.getAllOptions();
      const value = Array.isArray(this.value) ? this.value : [this.value];
      const values = [];
      if (customElements.get("sl-option")) {
        allOptions.forEach((option) => values.push(option.value));
        this.setSelectedOptions(allOptions.filter((el) => value.includes(el.value)));
      } else {
        customElements.whenDefined("sl-option").then(() => this.handleDefaultSlotChange());
      }
    }
    handleTagRemove(event, option) {
      event.stopPropagation();
      if (!this.disabled) {
        this.toggleOptionSelection(option, false);
        this.updateComplete.then(() => {
          this.emit("sl-input");
          this.emit("sl-change");
        });
      }
    }
    // Gets an array of all <sl-option> elements
    getAllOptions() {
      return [...this.querySelectorAll("sl-option")];
    }
    // Gets the first <sl-option> element
    getFirstOption() {
      return this.querySelector("sl-option");
    }
    // Sets the current option, which is the option the user is currently interacting with (e.g. via keyboard). Only one
    // option may be "current" at a time.
    setCurrentOption(option) {
      const allOptions = this.getAllOptions();
      allOptions.forEach((el) => {
        el.current = false;
        el.tabIndex = -1;
      });
      if (option) {
        this.currentOption = option;
        option.current = true;
        option.tabIndex = 0;
        option.focus();
      }
    }
    // Sets the selected option(s)
    setSelectedOptions(option) {
      const allOptions = this.getAllOptions();
      const newSelectedOptions = Array.isArray(option) ? option : [option];
      allOptions.forEach((el) => el.selected = false);
      if (newSelectedOptions.length) {
        newSelectedOptions.forEach((el) => el.selected = true);
      }
      this.selectionChanged();
    }
    // Toggles an option's selected state
    toggleOptionSelection(option, force) {
      if (force === true || force === false) {
        option.selected = force;
      } else {
        option.selected = !option.selected;
      }
      this.selectionChanged();
    }
    // This method must be called whenever the selection changes. It will update the selected options cache, the current
    // value, and the display value
    selectionChanged() {
      var _a, _b, _c, _d;
      this.selectedOptions = this.getAllOptions().filter((el) => el.selected);
      if (this.multiple) {
        this.value = this.selectedOptions.map((el) => el.value);
        if (this.placeholder && this.value.length === 0) {
          this.displayLabel = "";
        } else {
          this.displayLabel = this.localize.term("numOptionsSelected", this.selectedOptions.length);
        }
      } else {
        this.value = (_b = (_a = this.selectedOptions[0]) == null ? void 0 : _a.value) != null ? _b : "";
        this.displayLabel = (_d = (_c = this.selectedOptions[0]) == null ? void 0 : _c.getTextLabel()) != null ? _d : "";
      }
      this.updateComplete.then(() => {
        this.formControlController.updateValidity();
      });
    }
    handleInvalid(event) {
      this.formControlController.setValidity(false);
      this.formControlController.emitInvalidEvent(event);
    }
    handleDisabledChange() {
      if (this.disabled) {
        this.open = false;
        this.handleOpenChange();
      }
    }
    handleValueChange() {
      const allOptions = this.getAllOptions();
      const value = Array.isArray(this.value) ? this.value : [this.value];
      this.setSelectedOptions(allOptions.filter((el) => value.includes(el.value)));
    }
    async handleOpenChange() {
      if (this.open && !this.disabled) {
        this.setCurrentOption(this.selectedOptions[0] || this.getFirstOption());
        this.emit("sl-show");
        this.addOpenListeners();
        await stopAnimations(this);
        this.listbox.hidden = false;
        this.popup.active = true;
        requestAnimationFrame(() => {
          this.setCurrentOption(this.currentOption);
        });
        const { keyframes, options } = getAnimation(this, "select.show", { dir: this.localize.dir() });
        await animateTo(this.popup.popup, keyframes, options);
        if (this.currentOption) {
          scrollIntoView(this.currentOption, this.listbox, "vertical", "auto");
        }
        this.emit("sl-after-show");
      } else {
        this.emit("sl-hide");
        this.removeOpenListeners();
        await stopAnimations(this);
        const { keyframes, options } = getAnimation(this, "select.hide", { dir: this.localize.dir() });
        await animateTo(this.popup.popup, keyframes, options);
        this.listbox.hidden = true;
        this.popup.active = false;
        this.emit("sl-after-hide");
      }
    }
    /** Shows the listbox. */
    async show() {
      if (this.open || this.disabled) {
        this.open = false;
        return void 0;
      }
      this.open = true;
      return waitForEvent(this, "sl-after-show");
    }
    /** Hides the listbox. */
    async hide() {
      if (!this.open || this.disabled) {
        this.open = false;
        return void 0;
      }
      this.open = false;
      return waitForEvent(this, "sl-after-hide");
    }
    /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
    checkValidity() {
      return this.valueInput.checkValidity();
    }
    /** Gets the associated form, if one exists. */
    getForm() {
      return this.formControlController.getForm();
    }
    /** Checks for validity and shows the browser's validation message if the control is invalid. */
    reportValidity() {
      return this.valueInput.reportValidity();
    }
    /** Sets a custom validation message. Pass an empty string to restore validity. */
    setCustomValidity(message) {
      this.valueInput.setCustomValidity(message);
      this.formControlController.updateValidity();
    }
    /** Sets focus on the control. */
    focus(options) {
      this.displayInput.focus(options);
    }
    /** Removes focus from the control. */
    blur() {
      this.displayInput.blur();
    }
    render() {
      const hasLabelSlot = this.hasSlotController.test("label");
      const hasHelpTextSlot = this.hasSlotController.test("help-text");
      const hasLabel = this.label ? true : !!hasLabelSlot;
      const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
      const hasClearIcon = this.clearable && !this.disabled && this.value.length > 0;
      const isPlaceholderVisible = this.placeholder && this.value.length === 0;
      return y`
      <div
        part="form-control"
        class=${o5({
        "form-control": true,
        "form-control--small": this.size === "small",
        "form-control--medium": this.size === "medium",
        "form-control--large": this.size === "large",
        "form-control--has-label": hasLabel,
        "form-control--has-help-text": hasHelpText
      })}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${hasLabel ? "false" : "true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${o5({
        select: true,
        "select--standard": true,
        "select--filled": this.filled,
        "select--pill": this.pill,
        "select--open": this.open,
        "select--disabled": this.disabled,
        "select--multiple": this.multiple,
        "select--focused": this.hasFocus,
        "select--placeholder-visible": isPlaceholderVisible,
        "select--top": this.placement === "top",
        "select--bottom": this.placement === "bottom",
        "select--small": this.size === "small",
        "select--medium": this.size === "medium",
        "select--large": this.size === "large"
      })}
            placement=${this.placement}
            strategy=${this.hoist ? "fixed" : "absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open ? "true" : "false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled ? "true" : "false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple ? y`
                    <div part="tags" class="select__tags">
                      ${this.selectedOptions.map((option, index) => {
        if (index < this.maxOptionsVisible || this.maxOptionsVisible <= 0) {
          return y`
                            <sl-tag
                              part="tag"
                              exportparts="
                                base:tag__base,
                                content:tag__content,
                                remove-button:tag__remove-button,
                                remove-button__base:tag__remove-button__base
                              "
                              ?pill=${this.pill}
                              size=${this.size}
                              removable
                              @sl-remove=${(event) => this.handleTagRemove(event, option)}
                            >
                              ${option.getTextLabel()}
                            </sl-tag>
                          `;
        } else if (index === this.maxOptionsVisible) {
          return y` <sl-tag size=${this.size}> +${this.selectedOptions.length - index} </sl-tag> `;
        } else {
          return null;
        }
      })}
                    </div>
                  ` : ""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value) ? this.value.join(", ") : this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${() => this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${hasClearIcon ? y`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  ` : ""}

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open ? "true" : "false"}
              aria-multiselectable=${this.multiple ? "true" : "false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <slot
          name="help-text"
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${hasHelpText ? "false" : "true"}
        >
          ${this.helpText}
        </slot>
      </div>
    `;
    }
  };
  SlSelect.styles = select_styles_default;
  __decorateClass([
    i22(".select")
  ], SlSelect.prototype, "popup", 2);
  __decorateClass([
    i22(".select__combobox")
  ], SlSelect.prototype, "combobox", 2);
  __decorateClass([
    i22(".select__display-input")
  ], SlSelect.prototype, "displayInput", 2);
  __decorateClass([
    i22(".select__value-input")
  ], SlSelect.prototype, "valueInput", 2);
  __decorateClass([
    i22(".select__listbox")
  ], SlSelect.prototype, "listbox", 2);
  __decorateClass([
    t4()
  ], SlSelect.prototype, "hasFocus", 2);
  __decorateClass([
    t4()
  ], SlSelect.prototype, "displayLabel", 2);
  __decorateClass([
    t4()
  ], SlSelect.prototype, "currentOption", 2);
  __decorateClass([
    t4()
  ], SlSelect.prototype, "selectedOptions", 2);
  __decorateClass([
    e22()
  ], SlSelect.prototype, "name", 2);
  __decorateClass([
    e22({
      converter: {
        fromAttribute: (value) => value.split(" "),
        toAttribute: (value) => value.join(" ")
      }
    })
  ], SlSelect.prototype, "value", 2);
  __decorateClass([
    defaultValue()
  ], SlSelect.prototype, "defaultValue", 2);
  __decorateClass([
    e22()
  ], SlSelect.prototype, "size", 2);
  __decorateClass([
    e22()
  ], SlSelect.prototype, "placeholder", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlSelect.prototype, "multiple", 2);
  __decorateClass([
    e22({ attribute: "max-options-visible", type: Number })
  ], SlSelect.prototype, "maxOptionsVisible", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlSelect.prototype, "disabled", 2);
  __decorateClass([
    e22({ type: Boolean })
  ], SlSelect.prototype, "clearable", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlSelect.prototype, "open", 2);
  __decorateClass([
    e22({ type: Boolean })
  ], SlSelect.prototype, "hoist", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlSelect.prototype, "filled", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlSelect.prototype, "pill", 2);
  __decorateClass([
    e22()
  ], SlSelect.prototype, "label", 2);
  __decorateClass([
    e22({ reflect: true })
  ], SlSelect.prototype, "placement", 2);
  __decorateClass([
    e22({ attribute: "help-text" })
  ], SlSelect.prototype, "helpText", 2);
  __decorateClass([
    e22({ reflect: true })
  ], SlSelect.prototype, "form", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlSelect.prototype, "required", 2);
  __decorateClass([
    watch("disabled", { waitUntilFirstUpdate: true })
  ], SlSelect.prototype, "handleDisabledChange", 1);
  __decorateClass([
    watch("value", { waitUntilFirstUpdate: true })
  ], SlSelect.prototype, "handleValueChange", 1);
  __decorateClass([
    watch("open", { waitUntilFirstUpdate: true })
  ], SlSelect.prototype, "handleOpenChange", 1);
  SlSelect = __decorateClass([
    e5("sl-select")
  ], SlSelect);
  setDefaultAnimation("select.show", {
    keyframes: [
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1 }
    ],
    options: { duration: 100, easing: "ease" }
  });
  setDefaultAnimation("select.hide", {
    keyframes: [
      { opacity: 1, scale: 1 },
      { opacity: 0, scale: 0.9 }
    ],
    options: { duration: 100, easing: "ease" }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.4RNZLG33.js
  var tag_styles_default = i`
  ${component_styles_default}

  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.NXSD2QGE.js
  var SlTag = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController2(this);
      this.variant = "neutral";
      this.size = "medium";
      this.pill = false;
      this.removable = false;
    }
    handleRemoveClick() {
      this.emit("sl-remove");
    }
    render() {
      return y`
      <span
        part="base"
        class=${o5({
        tag: true,
        // Types
        "tag--primary": this.variant === "primary",
        "tag--success": this.variant === "success",
        "tag--neutral": this.variant === "neutral",
        "tag--warning": this.variant === "warning",
        "tag--danger": this.variant === "danger",
        "tag--text": this.variant === "text",
        // Sizes
        "tag--small": this.size === "small",
        "tag--medium": this.size === "medium",
        "tag--large": this.size === "large",
        // Modifiers
        "tag--pill": this.pill,
        "tag--removable": this.removable
      })}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable ? y`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            ` : ""}
      </span>
    `;
    }
  };
  SlTag.styles = tag_styles_default;
  __decorateClass([
    e22({ reflect: true })
  ], SlTag.prototype, "variant", 2);
  __decorateClass([
    e22({ reflect: true })
  ], SlTag.prototype, "size", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlTag.prototype, "pill", 2);
  __decorateClass([
    e22({ type: Boolean })
  ], SlTag.prototype, "removable", 2);
  SlTag = __decorateClass([
    e5("sl-tag")
  ], SlTag);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.MQ7QFCHP.js
  var skeleton_styles_default = i`
  ${component_styles_default}

  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KLGGXJV3.js
  var SlSkeleton = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.effect = "none";
    }
    render() {
      return y`
      <div
        part="base"
        class=${o5({
        skeleton: true,
        "skeleton--pulse": this.effect === "pulse",
        "skeleton--sheen": this.effect === "sheen"
      })}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `;
    }
  };
  SlSkeleton.styles = skeleton_styles_default;
  __decorateClass([
    e22()
  ], SlSkeleton.prototype, "effect", 2);
  SlSkeleton = __decorateClass([
    e5("sl-skeleton")
  ], SlSkeleton);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.NKWPNUXM.js
  var button_styles_default = i`
  ${component_styles_default}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition: var(--sl-transition-x-fast) background-color, var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border, var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    font-size: var(--sl-button-font-size-small);
    height: var(--sl-input-height-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    font-size: var(--sl-button-font-size-medium);
    height: var(--sl-input-height-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    font-size: var(--sl-button-font-size-large);
    height: var(--sl-input-height-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      .sl-button-group__button:not(
          .sl-button-group__button--first,
          .sl-button-group__button--radio,
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.OZOVPH7C.js
  var radio_button_styles_default = i`
  ${button_styles_default}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.IJY6XTKC.js
  var e6 = Symbol.for("");
  var l6 = (t6) => {
    if ((null == t6 ? void 0 : t6.r) === e6)
      return null == t6 ? void 0 : t6._$litStatic$;
  };
  var i5 = (t6, ...r5) => ({ _$litStatic$: r5.reduce((r23, e24, l24) => r23 + ((t23) => {
    if (void 0 !== t23._$litStatic$)
      return t23._$litStatic$;
    throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t23}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`);
  })(e24) + t6[l24 + 1], t6[0]), r: e6 });
  var s6 = /* @__PURE__ */ new Map();
  var a3 = (t6) => (r5, ...e24) => {
    const o7 = e24.length;
    let i25, a23;
    const n23 = [], u23 = [];
    let c4, $2 = 0, f4 = false;
    for (; $2 < o7; ) {
      for (c4 = r5[$2]; $2 < o7 && void 0 !== (a23 = e24[$2], i25 = l6(a23)); )
        c4 += i25 + r5[++$2], f4 = true;
      u23.push(a23), n23.push(c4), $2++;
    }
    if ($2 === o7 && n23.push(r5[o7]), f4) {
      const t23 = n23.join("$$lit$$");
      void 0 === (r5 = s6.get(t23)) && (n23.raw = n23, s6.set(t23, r5 = n23)), e24 = u23;
    }
    return t6(r5, ...e24);
  };
  var n7 = a3(y);
  var u2 = a3(w);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3RSJJPLG.js
  var SlRadioButton = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.hasSlotController = new HasSlotController(this, "[default]", "prefix", "suffix");
      this.hasFocus = false;
      this.checked = false;
      this.disabled = false;
      this.size = "medium";
      this.pill = false;
    }
    connectedCallback() {
      super.connectedCallback();
      this.setAttribute("role", "presentation");
    }
    handleBlur() {
      this.hasFocus = false;
      this.emit("sl-blur");
    }
    handleClick(e34) {
      if (this.disabled) {
        e34.preventDefault();
        e34.stopPropagation();
        return;
      }
      this.checked = true;
    }
    handleFocus() {
      this.hasFocus = true;
      this.emit("sl-focus");
    }
    handleDisabledChange() {
      this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
    }
    /** Sets focus on the radio button. */
    focus(options) {
      this.input.focus(options);
    }
    /** Removes focus from the radio button. */
    blur() {
      this.input.blur();
    }
    render() {
      return n7`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked ? " button--checked" : ""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${o5({
        button: true,
        "button--default": true,
        "button--small": this.size === "small",
        "button--medium": this.size === "medium",
        "button--large": this.size === "large",
        "button--checked": this.checked,
        "button--disabled": this.disabled,
        "button--focused": this.hasFocus,
        "button--outline": true,
        "button--pill": this.pill,
        "button--has-label": this.hasSlotController.test("[default]"),
        "button--has-prefix": this.hasSlotController.test("prefix"),
        "button--has-suffix": this.hasSlotController.test("suffix")
      })}
          aria-disabled=${this.disabled}
          type="button"
          value=${l5(this.value)}
          tabindex="${this.checked ? "0" : "-1"}"
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `;
    }
  };
  SlRadioButton.styles = radio_button_styles_default;
  __decorateClass([
    i22(".button")
  ], SlRadioButton.prototype, "input", 2);
  __decorateClass([
    i22(".hidden-input")
  ], SlRadioButton.prototype, "hiddenInput", 2);
  __decorateClass([
    t4()
  ], SlRadioButton.prototype, "hasFocus", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlRadioButton.prototype, "checked", 2);
  __decorateClass([
    e22()
  ], SlRadioButton.prototype, "value", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlRadioButton.prototype, "disabled", 2);
  __decorateClass([
    e22({ reflect: true })
  ], SlRadioButton.prototype, "size", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlRadioButton.prototype, "pill", 2);
  __decorateClass([
    watch("disabled", { waitUntilFirstUpdate: true })
  ], SlRadioButton.prototype, "handleDisabledChange", 1);
  SlRadioButton = __decorateClass([
    e5("sl-radio-button")
  ], SlRadioButton);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.4XIP3LXS.js
  var radio_group_styles_default = i`
  ${component_styles_default}
  ${form_control_styles_default}

  :host {
    display: block;
  }

  .form-control {
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.PNUSZ2JQ.js
  var SlRadioGroup = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.formControlController = new FormControlController(this);
      this.hasSlotController = new HasSlotController(this, "help-text", "label");
      this.customValidityMessage = "";
      this.hasButtonGroup = false;
      this.errorMessage = "";
      this.defaultValue = "";
      this.label = "";
      this.helpText = "";
      this.name = "option";
      this.value = "";
      this.size = "medium";
      this.form = "";
      this.required = false;
    }
    /** Gets the validity state object */
    get validity() {
      const isRequiredAndEmpty = this.required && !this.value;
      const hasCustomValidityMessage = this.customValidityMessage !== "";
      if (hasCustomValidityMessage) {
        return customErrorValidityState;
      } else if (isRequiredAndEmpty) {
        return valueMissingValidityState;
      }
      return validValidityState;
    }
    /** Gets the validation message */
    get validationMessage() {
      const isRequiredAndEmpty = this.required && !this.value;
      const hasCustomValidityMessage = this.customValidityMessage !== "";
      if (hasCustomValidityMessage) {
        return this.customValidityMessage;
      } else if (isRequiredAndEmpty) {
        return this.validationInput.validationMessage;
      }
      return "";
    }
    connectedCallback() {
      super.connectedCallback();
      this.defaultValue = this.value;
    }
    firstUpdated() {
      this.formControlController.updateValidity();
    }
    getAllRadios() {
      return [...this.querySelectorAll("sl-radio, sl-radio-button")];
    }
    handleRadioClick(event) {
      const target = event.target.closest("sl-radio, sl-radio-button");
      const radios = this.getAllRadios();
      const oldValue = this.value;
      if (target.disabled) {
        return;
      }
      this.value = target.value;
      radios.forEach((radio) => radio.checked = radio === target);
      if (this.value !== oldValue) {
        this.emit("sl-change");
        this.emit("sl-input");
      }
    }
    handleKeyDown(event) {
      var _a;
      if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(event.key)) {
        return;
      }
      const radios = this.getAllRadios().filter((radio) => !radio.disabled);
      const checkedRadio = (_a = radios.find((radio) => radio.checked)) != null ? _a : radios[0];
      const incr = event.key === " " ? 0 : ["ArrowUp", "ArrowLeft"].includes(event.key) ? -1 : 1;
      const oldValue = this.value;
      let index = radios.indexOf(checkedRadio) + incr;
      if (index < 0) {
        index = radios.length - 1;
      }
      if (index > radios.length - 1) {
        index = 0;
      }
      this.getAllRadios().forEach((radio) => {
        radio.checked = false;
        if (!this.hasButtonGroup) {
          radio.tabIndex = -1;
        }
      });
      this.value = radios[index].value;
      radios[index].checked = true;
      if (!this.hasButtonGroup) {
        radios[index].tabIndex = 0;
        radios[index].focus();
      } else {
        radios[index].shadowRoot.querySelector("button").focus();
      }
      if (this.value !== oldValue) {
        this.emit("sl-change");
        this.emit("sl-input");
      }
      event.preventDefault();
    }
    handleLabelClick() {
      const radios = this.getAllRadios();
      const checked = radios.find((radio) => radio.checked);
      const radioToFocus = checked || radios[0];
      if (radioToFocus) {
        radioToFocus.focus();
      }
    }
    handleSlotChange() {
      var _a, _b;
      if (customElements.get("sl-radio") || customElements.get("sl-radio-button")) {
        const radios = this.getAllRadios();
        radios.forEach((radio) => {
          radio.checked = radio.value === this.value;
          radio.size = this.size;
        });
        this.hasButtonGroup = radios.some((radio) => radio.tagName.toLowerCase() === "sl-radio-button");
        if (!radios.some((radio) => radio.checked)) {
          if (this.hasButtonGroup) {
            const buttonRadio = (_a = radios[0].shadowRoot) == null ? void 0 : _a.querySelector("button");
            if (buttonRadio) {
              buttonRadio.tabIndex = 0;
            }
          } else {
            radios[0].tabIndex = 0;
          }
        }
        if (this.hasButtonGroup) {
          const buttonGroup = (_b = this.shadowRoot) == null ? void 0 : _b.querySelector("sl-button-group");
          if (buttonGroup) {
            buttonGroup.disableRole = true;
          }
        }
      } else {
        customElements.whenDefined("sl-radio").then(() => this.handleSlotChange());
        customElements.whenDefined("sl-radio-button").then(() => this.handleSlotChange());
      }
    }
    handleInvalid(event) {
      this.formControlController.setValidity(false);
      this.formControlController.emitInvalidEvent(event);
    }
    updateCheckedRadio() {
      const radios = this.getAllRadios();
      radios.forEach((radio) => radio.checked = radio.value === this.value);
      this.formControlController.setValidity(this.validity.valid);
    }
    handleValueChange() {
      if (this.hasUpdated) {
        this.updateCheckedRadio();
      }
    }
    /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
    checkValidity() {
      const isRequiredAndEmpty = this.required && !this.value;
      const hasCustomValidityMessage = this.customValidityMessage !== "";
      if (isRequiredAndEmpty || hasCustomValidityMessage) {
        this.formControlController.emitInvalidEvent();
        return false;
      }
      return true;
    }
    /** Gets the associated form, if one exists. */
    getForm() {
      return this.formControlController.getForm();
    }
    /** Checks for validity and shows the browser's validation message if the control is invalid. */
    reportValidity() {
      const isValid = this.validity.valid;
      this.errorMessage = this.customValidityMessage || isValid ? "" : this.validationInput.validationMessage;
      this.formControlController.setValidity(isValid);
      this.validationInput.hidden = true;
      clearTimeout(this.validationTimeout);
      if (!isValid) {
        this.validationInput.hidden = false;
        this.validationInput.reportValidity();
        this.validationTimeout = setTimeout(() => this.validationInput.hidden = true, 1e4);
      }
      return isValid;
    }
    /** Sets a custom validation message. Pass an empty string to restore validity. */
    setCustomValidity(message = "") {
      this.customValidityMessage = message;
      this.errorMessage = message;
      this.validationInput.setCustomValidity(message);
      this.formControlController.updateValidity();
    }
    render() {
      const hasLabelSlot = this.hasSlotController.test("label");
      const hasHelpTextSlot = this.hasSlotController.test("help-text");
      const hasLabel = this.label ? true : !!hasLabelSlot;
      const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
      const defaultSlot = y`
      <slot
        @click=${this.handleRadioClick}
        @keydown=${this.handleKeyDown}
        @slotchange=${this.handleSlotChange}
        role="presentation"
      ></slot>
    `;
      return y`
      <fieldset
        part="form-control"
        class=${o5({
        "form-control": true,
        "form-control--small": this.size === "small",
        "form-control--medium": this.size === "medium",
        "form-control--large": this.size === "large",
        "form-control--radio-group": true,
        "form-control--has-label": hasLabel,
        "form-control--has-help-text": hasHelpText
      })}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${hasLabel ? "false" : "true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup ? y`
                <sl-button-group part="button-group" exportparts="base:button-group__base">
                  ${defaultSlot}
                </sl-button-group>
              ` : defaultSlot}
        </div>

        <slot
          name="help-text"
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${hasHelpText ? "false" : "true"}
        >
          ${this.helpText}
        </slot>
      </fieldset>
    `;
    }
  };
  SlRadioGroup.styles = radio_group_styles_default;
  __decorateClass([
    i22("slot:not([name])")
  ], SlRadioGroup.prototype, "defaultSlot", 2);
  __decorateClass([
    i22(".radio-group__validation-input")
  ], SlRadioGroup.prototype, "validationInput", 2);
  __decorateClass([
    t4()
  ], SlRadioGroup.prototype, "hasButtonGroup", 2);
  __decorateClass([
    t4()
  ], SlRadioGroup.prototype, "errorMessage", 2);
  __decorateClass([
    t4()
  ], SlRadioGroup.prototype, "defaultValue", 2);
  __decorateClass([
    e22()
  ], SlRadioGroup.prototype, "label", 2);
  __decorateClass([
    e22({ attribute: "help-text" })
  ], SlRadioGroup.prototype, "helpText", 2);
  __decorateClass([
    e22()
  ], SlRadioGroup.prototype, "name", 2);
  __decorateClass([
    e22({ reflect: true })
  ], SlRadioGroup.prototype, "value", 2);
  __decorateClass([
    e22({ reflect: true })
  ], SlRadioGroup.prototype, "size", 2);
  __decorateClass([
    e22({ reflect: true })
  ], SlRadioGroup.prototype, "form", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlRadioGroup.prototype, "required", 2);
  __decorateClass([
    watch("value")
  ], SlRadioGroup.prototype, "handleValueChange", 1);
  SlRadioGroup = __decorateClass([
    e5("sl-radio-group")
  ], SlRadioGroup);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.BRRNDEKR.js
  var range_styles_default = i`
  ${component_styles_default}
  ${form_control_styles_default}

  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.RZ7EQVEX.js
  var SlRange = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.formControlController = new FormControlController(this);
      this.hasSlotController = new HasSlotController(this, "help-text", "label");
      this.localize = new LocalizeController2(this);
      this.hasFocus = false;
      this.hasTooltip = false;
      this.title = "";
      this.name = "";
      this.value = 0;
      this.label = "";
      this.helpText = "";
      this.disabled = false;
      this.min = 0;
      this.max = 100;
      this.step = 1;
      this.tooltip = "top";
      this.tooltipFormatter = (value) => value.toString();
      this.form = "";
      this.defaultValue = 0;
    }
    /** Gets the validity state object */
    get validity() {
      return this.input.validity;
    }
    /** Gets the validation message */
    get validationMessage() {
      return this.input.validationMessage;
    }
    connectedCallback() {
      super.connectedCallback();
      this.resizeObserver = new ResizeObserver(() => this.syncRange());
      if (this.value < this.min) {
        this.value = this.min;
      }
      if (this.value > this.max) {
        this.value = this.max;
      }
      this.updateComplete.then(() => {
        this.syncRange();
        this.resizeObserver.observe(this.input);
      });
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this.resizeObserver.unobserve(this.input);
    }
    handleChange() {
      this.emit("sl-change");
    }
    handleInput() {
      this.value = parseFloat(this.input.value);
      this.emit("sl-input");
      this.syncRange();
    }
    handleBlur() {
      this.hasFocus = false;
      this.hasTooltip = false;
      this.emit("sl-blur");
    }
    handleFocus() {
      this.hasFocus = true;
      this.hasTooltip = true;
      this.emit("sl-focus");
    }
    handleThumbDragStart() {
      this.hasTooltip = true;
    }
    handleThumbDragEnd() {
      this.hasTooltip = false;
    }
    syncProgress(percent) {
      this.input.style.setProperty("--percent", `${percent * 100}%`);
    }
    syncTooltip(percent) {
      if (this.output !== null) {
        const inputWidth = this.input.offsetWidth;
        const tooltipWidth = this.output.offsetWidth;
        const thumbSize = getComputedStyle(this.input).getPropertyValue("--thumb-size");
        const isRtl = this.localize.dir() === "rtl";
        const percentAsWidth = inputWidth * percent;
        if (isRtl) {
          const x3 = `${inputWidth - percentAsWidth}px + ${percent} * ${thumbSize}`;
          this.output.style.translate = `calc((${x3} - ${tooltipWidth / 2}px - ${thumbSize} / 2))`;
        } else {
          const x3 = `${percentAsWidth}px - ${percent} * ${thumbSize}`;
          this.output.style.translate = `calc(${x3} - ${tooltipWidth / 2}px + ${thumbSize} / 2)`;
        }
      }
    }
    handleValueChange() {
      this.formControlController.updateValidity();
      this.input.value = this.value.toString();
      this.value = parseFloat(this.input.value);
      this.syncRange();
    }
    handleDisabledChange() {
      this.formControlController.setValidity(this.disabled);
    }
    syncRange() {
      const percent = Math.max(0, (this.value - this.min) / (this.max - this.min));
      this.syncProgress(percent);
      if (this.tooltip !== "none") {
        this.syncTooltip(percent);
      }
    }
    handleInvalid(event) {
      this.formControlController.setValidity(false);
      this.formControlController.emitInvalidEvent(event);
    }
    /** Sets focus on the range. */
    focus(options) {
      this.input.focus(options);
    }
    /** Removes focus from the range. */
    blur() {
      this.input.blur();
    }
    /** Increments the value of the range by the value of the step attribute. */
    stepUp() {
      this.input.stepUp();
      if (this.value !== Number(this.input.value)) {
        this.value = Number(this.input.value);
      }
    }
    /** Decrements the value of the range by the value of the step attribute. */
    stepDown() {
      this.input.stepDown();
      if (this.value !== Number(this.input.value)) {
        this.value = Number(this.input.value);
      }
    }
    /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
    checkValidity() {
      return this.input.checkValidity();
    }
    /** Gets the associated form, if one exists. */
    getForm() {
      return this.formControlController.getForm();
    }
    /** Checks for validity and shows the browser's validation message if the control is invalid. */
    reportValidity() {
      return this.input.reportValidity();
    }
    /** Sets a custom validation message. Pass an empty string to restore validity. */
    setCustomValidity(message) {
      this.input.setCustomValidity(message);
      this.formControlController.updateValidity();
    }
    render() {
      const hasLabelSlot = this.hasSlotController.test("label");
      const hasHelpTextSlot = this.hasSlotController.test("help-text");
      const hasLabel = this.label ? true : !!hasLabelSlot;
      const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
      return y`
      <div
        part="form-control"
        class=${o5({
        "form-control": true,
        "form-control--medium": true,
        // range only has one size
        "form-control--has-label": hasLabel,
        "form-control--has-help-text": hasHelpText
      })}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${hasLabel ? "false" : "true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${o5({
        range: true,
        "range--disabled": this.disabled,
        "range--focused": this.hasFocus,
        "range--rtl": this.localize.dir() === "rtl",
        "range--tooltip-visible": this.hasTooltip,
        "range--tooltip-top": this.tooltip === "top",
        "range--tooltip-bottom": this.tooltip === "bottom"
      })}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${l5(this.name)}
              ?disabled=${this.disabled}
              min=${l5(this.min)}
              max=${l5(this.max)}
              step=${l5(this.step)}
              .value=${l22(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip !== "none" && !this.disabled ? y`
                  <output part="tooltip" class="range__tooltip">
                    ${typeof this.tooltipFormatter === "function" ? this.tooltipFormatter(this.value) : this.value}
                  </output>
                ` : ""}
          </div>
        </div>

        <slot
          name="help-text"
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${hasHelpText ? "false" : "true"}
        >
          ${this.helpText}
        </slot>
      </div>
    `;
    }
  };
  SlRange.styles = range_styles_default;
  __decorateClass([
    i22(".range__control")
  ], SlRange.prototype, "input", 2);
  __decorateClass([
    i22(".range__tooltip")
  ], SlRange.prototype, "output", 2);
  __decorateClass([
    t4()
  ], SlRange.prototype, "hasFocus", 2);
  __decorateClass([
    t4()
  ], SlRange.prototype, "hasTooltip", 2);
  __decorateClass([
    e22()
  ], SlRange.prototype, "title", 2);
  __decorateClass([
    e22()
  ], SlRange.prototype, "name", 2);
  __decorateClass([
    e22({ type: Number })
  ], SlRange.prototype, "value", 2);
  __decorateClass([
    e22()
  ], SlRange.prototype, "label", 2);
  __decorateClass([
    e22({ attribute: "help-text" })
  ], SlRange.prototype, "helpText", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlRange.prototype, "disabled", 2);
  __decorateClass([
    e22({ type: Number })
  ], SlRange.prototype, "min", 2);
  __decorateClass([
    e22({ type: Number })
  ], SlRange.prototype, "max", 2);
  __decorateClass([
    e22({ type: Number })
  ], SlRange.prototype, "step", 2);
  __decorateClass([
    e22()
  ], SlRange.prototype, "tooltip", 2);
  __decorateClass([
    e22({ attribute: false })
  ], SlRange.prototype, "tooltipFormatter", 2);
  __decorateClass([
    e22({ reflect: true })
  ], SlRange.prototype, "form", 2);
  __decorateClass([
    defaultValue()
  ], SlRange.prototype, "defaultValue", 2);
  __decorateClass([
    e32({ passive: true })
  ], SlRange.prototype, "handleThumbDragStart", 1);
  __decorateClass([
    watch("value", { waitUntilFirstUpdate: true })
  ], SlRange.prototype, "handleValueChange", 1);
  __decorateClass([
    watch("disabled", { waitUntilFirstUpdate: true })
  ], SlRange.prototype, "handleDisabledChange", 1);
  __decorateClass([
    watch("hasTooltip", { waitUntilFirstUpdate: true })
  ], SlRange.prototype, "syncRange", 1);
  SlRange = __decorateClass([
    e5("sl-range")
  ], SlRange);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.2P5TE3VD.js
  var rating_styles_default = i`
  ${component_styles_default}

  :host {
    --symbol-color: var(--sl-color-neutral-300);
    --symbol-color-active: var(--sl-color-amber-500);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--sl-spacing-3x-small);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--sl-border-radius-medium);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbols--indicator {
    position: absolute;
    top: 0;
    left: 0;
    color: var(--symbol-color-active);
    pointer-events: none;
  }

  .rating__symbol {
    transition: var(--sl-transition-fast) scale;
  }

  .rating__symbol--hover {
    scale: 1.2;
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover,
  .rating--readonly .rating__symbol--hover {
    scale: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .rating__symbols--indicator {
      color: SelectedItem;
    }
  }
`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.B6IYY6FB.js
  var i23 = e4(class extends i3 {
    constructor(t23) {
      var e24;
      if (super(t23), t23.type !== t3.ATTRIBUTE || "style" !== t23.name || (null === (e24 = t23.strings) || void 0 === e24 ? void 0 : e24.length) > 2)
        throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
    }
    render(t23) {
      return Object.keys(t23).reduce((e24, r5) => {
        const s8 = t23[r5];
        return null == s8 ? e24 : e24 + `${r5 = r5.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${s8};`;
      }, "");
    }
    update(e24, [r5]) {
      const { style: s8 } = e24.element;
      if (void 0 === this.vt) {
        this.vt = /* @__PURE__ */ new Set();
        for (const t23 in r5)
          this.vt.add(t23);
        return this.render(r5);
      }
      this.vt.forEach((t23) => {
        null == r5[t23] && (this.vt.delete(t23), t23.includes("-") ? s8.removeProperty(t23) : s8[t23] = "");
      });
      for (const t23 in r5) {
        const e34 = r5[t23];
        null != e34 && (this.vt.add(t23), t23.includes("-") ? s8.setProperty(t23, e34) : s8[t23] = e34);
      }
      return x;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.QVU3QRJ4.js
  var e53 = class extends i3 {
    constructor(i42) {
      if (super(i42), this.it = b, i42.type !== t3.CHILD)
        throw Error(this.constructor.directiveName + "() can only be used in child bindings");
    }
    render(r5) {
      if (r5 === b || null == r5)
        return this._t = void 0, this.it = r5;
      if (r5 === x)
        return r5;
      if ("string" != typeof r5)
        throw Error(this.constructor.directiveName + "() called with a non-string value");
      if (r5 === this.it)
        return this._t;
      this.it = r5;
      const s8 = [r5];
      return s8.raw = s8, this._t = { _$litType$: this.constructor.resultType, strings: s8, values: [] };
    }
  };
  e53.directiveName = "unsafeHTML", e53.resultType = 1;
  var o22 = e4(e53);
  var SlRating = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController2(this);
      this.hoverValue = 0;
      this.isHovering = false;
      this.label = "";
      this.value = 0;
      this.max = 5;
      this.precision = 1;
      this.readonly = false;
      this.disabled = false;
      this.getSymbol = () => '<sl-icon name="star-fill" library="system"></sl-icon>';
    }
    getValueFromMousePosition(event) {
      return this.getValueFromXCoordinate(event.clientX);
    }
    getValueFromTouchPosition(event) {
      return this.getValueFromXCoordinate(event.touches[0].clientX);
    }
    getValueFromXCoordinate(coordinate) {
      const isRtl = this.localize.dir() === "rtl";
      const { left, right, width } = this.rating.getBoundingClientRect();
      const value = isRtl ? this.roundToPrecision((right - coordinate) / width * this.max, this.precision) : this.roundToPrecision((coordinate - left) / width * this.max, this.precision);
      return clamp(value, 0, this.max);
    }
    handleClick(event) {
      if (this.disabled) {
        return;
      }
      this.setValue(this.getValueFromMousePosition(event));
      this.emit("sl-change");
    }
    setValue(newValue) {
      if (this.disabled || this.readonly) {
        return;
      }
      this.value = newValue === this.value ? 0 : newValue;
      this.isHovering = false;
    }
    handleKeyDown(event) {
      const isLtr = this.localize.dir() === "ltr";
      const isRtl = this.localize.dir() === "rtl";
      const oldValue = this.value;
      if (this.disabled || this.readonly) {
        return;
      }
      if (event.key === "ArrowDown" || isLtr && event.key === "ArrowLeft" || isRtl && event.key === "ArrowRight") {
        const decrement = event.shiftKey ? 1 : this.precision;
        this.value = Math.max(0, this.value - decrement);
        event.preventDefault();
      }
      if (event.key === "ArrowUp" || isLtr && event.key === "ArrowRight" || isRtl && event.key === "ArrowLeft") {
        const increment = event.shiftKey ? 1 : this.precision;
        this.value = Math.min(this.max, this.value + increment);
        event.preventDefault();
      }
      if (event.key === "Home") {
        this.value = 0;
        event.preventDefault();
      }
      if (event.key === "End") {
        this.value = this.max;
        event.preventDefault();
      }
      if (this.value !== oldValue) {
        this.emit("sl-change");
      }
    }
    handleMouseEnter(event) {
      this.isHovering = true;
      this.hoverValue = this.getValueFromMousePosition(event);
    }
    handleMouseMove(event) {
      this.hoverValue = this.getValueFromMousePosition(event);
    }
    handleMouseLeave() {
      this.isHovering = false;
    }
    handleTouchStart(event) {
      this.isHovering = true;
      this.hoverValue = this.getValueFromTouchPosition(event);
      event.preventDefault();
    }
    handleTouchMove(event) {
      this.hoverValue = this.getValueFromTouchPosition(event);
    }
    handleTouchEnd(event) {
      this.isHovering = false;
      this.setValue(this.hoverValue);
      this.emit("sl-change");
      event.preventDefault();
    }
    roundToPrecision(numberToRound, precision = 0.5) {
      const multiplier = 1 / precision;
      return Math.ceil(numberToRound * multiplier) / multiplier;
    }
    handleHoverValueChange() {
      this.emit("sl-hover", {
        detail: {
          phase: "move",
          value: this.hoverValue
        }
      });
    }
    handleIsHoveringChange() {
      this.emit("sl-hover", {
        detail: {
          phase: this.isHovering ? "start" : "end",
          value: this.hoverValue
        }
      });
    }
    /** Sets focus on the rating. */
    focus(options) {
      this.rating.focus(options);
    }
    /** Removes focus from the rating. */
    blur() {
      this.rating.blur();
    }
    render() {
      const isRtl = this.localize.dir() === "rtl";
      const counter = Array.from(Array(this.max).keys());
      let displayValue = 0;
      if (this.disabled || this.readonly) {
        displayValue = this.value;
      } else {
        displayValue = this.isHovering ? this.hoverValue : this.value;
      }
      return y`
      <div
        part="base"
        class=${o5({
        rating: true,
        "rating--readonly": this.readonly,
        "rating--disabled": this.disabled,
        "rating--rtl": isRtl
      })}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-readonly=${this.readonly ? "true" : "false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled ? "-1" : "0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="rating__symbols rating__symbols--inactive">
          ${counter.map((index) => {
        return y`
              <span
                class=${o5({
          rating__symbol: true,
          "rating__symbol--hover": this.isHovering && Math.ceil(displayValue) === index + 1
        })}
                role="presentation"
                @mouseenter=${this.handleMouseEnter}
              >
                ${o22(this.getSymbol(index + 1))}
              </span>
            `;
      })}
        </span>

        <span class="rating__symbols rating__symbols--indicator">
          ${counter.map((index) => {
        return y`
              <span
                class=${o5({
          rating__symbol: true,
          "rating__symbol--hover": this.isHovering && Math.ceil(displayValue) === index + 1
        })}
                style=${i23({
          clipPath: displayValue > index + 1 ? "none" : isRtl ? `inset(0 0 0 ${100 - (displayValue - index) / 1 * 100}%)` : `inset(0 ${100 - (displayValue - index) / 1 * 100}% 0 0)`
        })}
                role="presentation"
              >
                ${o22(this.getSymbol(index + 1))}
              </span>
            `;
      })}
        </span>
      </div>
    `;
    }
  };
  SlRating.styles = rating_styles_default;
  __decorateClass([
    i22(".rating")
  ], SlRating.prototype, "rating", 2);
  __decorateClass([
    t4()
  ], SlRating.prototype, "hoverValue", 2);
  __decorateClass([
    t4()
  ], SlRating.prototype, "isHovering", 2);
  __decorateClass([
    e22()
  ], SlRating.prototype, "label", 2);
  __decorateClass([
    e22({ type: Number })
  ], SlRating.prototype, "value", 2);
  __decorateClass([
    e22({ type: Number })
  ], SlRating.prototype, "max", 2);
  __decorateClass([
    e22({ type: Number })
  ], SlRating.prototype, "precision", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlRating.prototype, "readonly", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlRating.prototype, "disabled", 2);
  __decorateClass([
    e22()
  ], SlRating.prototype, "getSymbol", 2);
  __decorateClass([
    e32({ passive: true })
  ], SlRating.prototype, "handleTouchMove", 1);
  __decorateClass([
    watch("hoverValue")
  ], SlRating.prototype, "handleHoverValueChange", 1);
  __decorateClass([
    watch("isHovering")
  ], SlRating.prototype, "handleIsHoveringChange", 1);
  SlRating = __decorateClass([
    e5("sl-rating")
  ], SlRating);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.BFEUKTUO.js
  var progress_bar_styles_default = i`
  ${component_styles_default}

  :host {
    --height: 1rem;
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);
    --label-color: var(--sl-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset var(--sl-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition: 400ms width, 400ms background-color;
    user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--sl-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.BHYP7XSR.js
  var SlProgressBar = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController2(this);
      this.value = 0;
      this.indeterminate = false;
      this.label = "";
    }
    render() {
      return y`
      <div
        part="base"
        class=${o5({
        "progress-bar": true,
        "progress-bar--indeterminate": this.indeterminate,
        "progress-bar--rtl": this.localize.dir() === "rtl"
      })}
        role="progressbar"
        title=${l5(this.title)}
        aria-label=${this.label.length > 0 ? this.label : this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate ? 0 : this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${i23({ width: `${this.value}%` })}>
          ${!this.indeterminate ? y` <slot part="label" class="progress-bar__label"></slot> ` : ""}
        </div>
      </div>
    `;
    }
  };
  SlProgressBar.styles = progress_bar_styles_default;
  __decorateClass([
    e22({ type: Number, reflect: true })
  ], SlProgressBar.prototype, "value", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlProgressBar.prototype, "indeterminate", 2);
  __decorateClass([
    e22()
  ], SlProgressBar.prototype, "label", 2);
  SlProgressBar = __decorateClass([
    e5("sl-progress-bar")
  ], SlProgressBar);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.DMXST7MK.js
  var progress_ring_styles_default = i`
  ${component_styles_default}

  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--sl-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
  }
`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.UVNCMXMM.js
  var SlProgressRing = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController2(this);
      this.value = 0;
      this.label = "";
    }
    updated(changedProps) {
      super.updated(changedProps);
      if (changedProps.has("value")) {
        const radius = parseFloat(getComputedStyle(this.indicator).getPropertyValue("r"));
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - this.value / 100 * circumference;
        this.indicatorOffset = `${offset}px`;
      }
    }
    render() {
      return y`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length > 0 ? this.label : this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value / 100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `;
    }
  };
  SlProgressRing.styles = progress_ring_styles_default;
  __decorateClass([
    i22(".progress-ring__indicator")
  ], SlProgressRing.prototype, "indicator", 2);
  __decorateClass([
    t4()
  ], SlProgressRing.prototype, "indicatorOffset", 2);
  __decorateClass([
    e22({ type: Number, reflect: true })
  ], SlProgressRing.prototype, "value", 2);
  __decorateClass([
    e22()
  ], SlProgressRing.prototype, "label", 2);
  SlProgressRing = __decorateClass([
    e5("sl-progress-ring")
  ], SlProgressRing);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.Q3GGNRQA.js
  var qr_code_styles_default = i`
  ${component_styles_default}

  :host {
    display: inline-block;
  }
`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.QE2CTSPX.js
  var G = null;
  var H2 = class {
  };
  H2.render = function(w3, B) {
    G(w3, B);
  };
  self.QrCreator = H2;
  (function(w3) {
    function B(t6, c4, a5, e34) {
      var b3 = {}, h4 = w3(a5, c4);
      h4.u(t6);
      h4.J();
      e34 = e34 || 0;
      var r5 = h4.h(), d4 = h4.h() + 2 * e34;
      b3.text = t6;
      b3.level = c4;
      b3.version = a5;
      b3.O = d4;
      b3.a = function(b23, a23) {
        b23 -= e34;
        a23 -= e34;
        return 0 > b23 || b23 >= r5 || 0 > a23 || a23 >= r5 ? false : h4.a(b23, a23);
      };
      return b3;
    }
    function C3(t6, c4, a5, e34, b3, h4, r5, d4, g3, x3) {
      function u4(b23, a23, f4, c23, d23, r23, g23) {
        b23 ? (t6.lineTo(a23 + r23, f4 + g23), t6.arcTo(a23, f4, c23, d23, h4)) : t6.lineTo(a23, f4);
      }
      r5 ? t6.moveTo(c4 + h4, a5) : t6.moveTo(c4, a5);
      u4(d4, e34, a5, e34, b3, -h4, 0);
      u4(g3, e34, b3, c4, b3, 0, -h4);
      u4(x3, c4, b3, c4, a5, h4, 0);
      u4(r5, c4, a5, e34, a5, 0, h4);
    }
    function z3(t6, c4, a5, e34, b3, h4, r5, d4, g3, x3) {
      function u4(b23, a23, c23, d23) {
        t6.moveTo(b23 + c23, a23);
        t6.lineTo(
          b23,
          a23
        );
        t6.lineTo(b23, a23 + d23);
        t6.arcTo(b23, a23, b23 + c23, a23, h4);
      }
      r5 && u4(c4, a5, h4, h4);
      d4 && u4(e34, a5, -h4, h4);
      g3 && u4(e34, b3, -h4, -h4);
      x3 && u4(c4, b3, h4, -h4);
    }
    function A3(t6, c4) {
      var a5 = c4.fill;
      if ("string" === typeof a5)
        t6.fillStyle = a5;
      else {
        var e34 = a5.type, b3 = a5.colorStops;
        a5 = a5.position.map((b23) => Math.round(b23 * c4.size));
        if ("linear-gradient" === e34)
          var h4 = t6.createLinearGradient.apply(t6, a5);
        else if ("radial-gradient" === e34)
          h4 = t6.createRadialGradient.apply(t6, a5);
        else
          throw Error("Unsupported fill");
        b3.forEach(([b23, a23]) => {
          h4.addColorStop(b23, a23);
        });
        t6.fillStyle = h4;
      }
    }
    function y22(t6, c4) {
      a: {
        var a5 = c4.text, e34 = c4.v, b3 = c4.N, h4 = c4.K, r5 = c4.P;
        b3 = Math.max(1, b3 || 1);
        for (h4 = Math.min(40, h4 || 40); b3 <= h4; b3 += 1)
          try {
            var d4 = B(a5, e34, b3, r5);
            break a;
          } catch (J) {
          }
        d4 = void 0;
      }
      if (!d4)
        return null;
      a5 = t6.getContext("2d");
      c4.background && (a5.fillStyle = c4.background, a5.fillRect(c4.left, c4.top, c4.size, c4.size));
      e34 = d4.O;
      h4 = c4.size / e34;
      a5.beginPath();
      for (r5 = 0; r5 < e34; r5 += 1)
        for (b3 = 0; b3 < e34; b3 += 1) {
          var g3 = a5, x3 = c4.left + b3 * h4, u4 = c4.top + r5 * h4, p3 = r5, q = b3, f4 = d4.a, k3 = x3 + h4, m3 = u4 + h4, D3 = p3 - 1, E3 = p3 + 1, n9 = q - 1, l8 = q + 1, y32 = Math.floor(Math.min(0.5, Math.max(0, c4.R)) * h4), v22 = f4(p3, q), I2 = f4(D3, n9), w23 = f4(D3, q);
          D3 = f4(D3, l8);
          var F2 = f4(p3, l8);
          l8 = f4(E3, l8);
          q = f4(
            E3,
            q
          );
          E3 = f4(E3, n9);
          p3 = f4(p3, n9);
          x3 = Math.round(x3);
          u4 = Math.round(u4);
          k3 = Math.round(k3);
          m3 = Math.round(m3);
          v22 ? C3(g3, x3, u4, k3, m3, y32, !w23 && !p3, !w23 && !F2, !q && !F2, !q && !p3) : z3(g3, x3, u4, k3, m3, y32, w23 && p3 && I2, w23 && F2 && D3, q && F2 && l8, q && p3 && E3);
        }
      A3(a5, c4);
      a5.fill();
      return t6;
    }
    var v3 = { minVersion: 1, maxVersion: 40, ecLevel: "L", left: 0, top: 0, size: 200, fill: "#000", background: null, text: "no text", radius: 0.5, quiet: 0 };
    G = function(t6, c4) {
      var a5 = {};
      Object.assign(a5, v3, t6);
      a5.N = a5.minVersion;
      a5.K = a5.maxVersion;
      a5.v = a5.ecLevel;
      a5.left = a5.left;
      a5.top = a5.top;
      a5.size = a5.size;
      a5.fill = a5.fill;
      a5.background = a5.background;
      a5.text = a5.text;
      a5.R = a5.radius;
      a5.P = a5.quiet;
      if (c4 instanceof HTMLCanvasElement) {
        if (c4.width !== a5.size || c4.height !== a5.size)
          c4.width = a5.size, c4.height = a5.size;
        c4.getContext("2d").clearRect(0, 0, c4.width, c4.height);
        y22(c4, a5);
      } else
        t6 = document.createElement("canvas"), t6.width = a5.size, t6.height = a5.size, a5 = y22(t6, a5), c4.appendChild(a5);
    };
  })(function() {
    function w3(c4) {
      var a5 = C3.s(c4);
      return { S: function() {
        return 4;
      }, b: function() {
        return a5.length;
      }, write: function(c23) {
        for (var b3 = 0; b3 < a5.length; b3 += 1)
          c23.put(a5[b3], 8);
      } };
    }
    function B() {
      var c4 = [], a5 = 0, e34 = {
        B: function() {
          return c4;
        },
        c: function(b3) {
          return 1 == (c4[Math.floor(b3 / 8)] >>> 7 - b3 % 8 & 1);
        },
        put: function(b3, h4) {
          for (var a23 = 0; a23 < h4; a23 += 1)
            e34.m(1 == (b3 >>> h4 - a23 - 1 & 1));
        },
        f: function() {
          return a5;
        },
        m: function(b3) {
          var h4 = Math.floor(a5 / 8);
          c4.length <= h4 && c4.push(0);
          b3 && (c4[h4] |= 128 >>> a5 % 8);
          a5 += 1;
        }
      };
      return e34;
    }
    function C3(c4, a5) {
      function e34(b23, h23) {
        for (var a23 = -1; 7 >= a23; a23 += 1)
          if (!(-1 >= b23 + a23 || d4 <= b23 + a23))
            for (var c23 = -1; 7 >= c23; c23 += 1)
              -1 >= h23 + c23 || d4 <= h23 + c23 || (r5[b23 + a23][h23 + c23] = 0 <= a23 && 6 >= a23 && (0 == c23 || 6 == c23) || 0 <= c23 && 6 >= c23 && (0 == a23 || 6 == a23) || 2 <= a23 && 4 >= a23 && 2 <= c23 && 4 >= c23 ? true : false);
      }
      function b3(b23, a23) {
        for (var f4 = d4 = 4 * c4 + 17, k3 = Array(f4), m3 = 0; m3 < f4; m3 += 1) {
          k3[m3] = Array(f4);
          for (var p3 = 0; p3 < f4; p3 += 1)
            k3[m3][p3] = null;
        }
        r5 = k3;
        e34(0, 0);
        e34(d4 - 7, 0);
        e34(0, d4 - 7);
        f4 = y22.G(c4);
        for (k3 = 0; k3 < f4.length; k3 += 1)
          for (m3 = 0; m3 < f4.length; m3 += 1) {
            p3 = f4[k3];
            var q = f4[m3];
            if (null == r5[p3][q])
              for (var n9 = -2; 2 >= n9; n9 += 1)
                for (var l8 = -2; 2 >= l8; l8 += 1)
                  r5[p3 + n9][q + l8] = -2 == n9 || 2 == n9 || -2 == l8 || 2 == l8 || 0 == n9 && 0 == l8;
          }
        for (f4 = 8; f4 < d4 - 8; f4 += 1)
          null == r5[f4][6] && (r5[f4][6] = 0 == f4 % 2);
        for (f4 = 8; f4 < d4 - 8; f4 += 1)
          null == r5[6][f4] && (r5[6][f4] = 0 == f4 % 2);
        f4 = y22.w(h4 << 3 | a23);
        for (k3 = 0; 15 > k3; k3 += 1)
          m3 = !b23 && 1 == (f4 >> k3 & 1), r5[6 > k3 ? k3 : 8 > k3 ? k3 + 1 : d4 - 15 + k3][8] = m3, r5[8][8 > k3 ? d4 - k3 - 1 : 9 > k3 ? 15 - k3 : 14 - k3] = m3;
        r5[d4 - 8][8] = !b23;
        if (7 <= c4) {
          f4 = y22.A(c4);
          for (k3 = 0; 18 > k3; k3 += 1)
            m3 = !b23 && 1 == (f4 >> k3 & 1), r5[Math.floor(k3 / 3)][k3 % 3 + d4 - 8 - 3] = m3;
          for (k3 = 0; 18 > k3; k3 += 1)
            m3 = !b23 && 1 == (f4 >> k3 & 1), r5[k3 % 3 + d4 - 8 - 3][Math.floor(k3 / 3)] = m3;
        }
        if (null == g3) {
          b23 = t6.I(c4, h4);
          f4 = B();
          for (k3 = 0; k3 < x3.length; k3 += 1)
            m3 = x3[k3], f4.put(4, 4), f4.put(m3.b(), y22.f(4, c4)), m3.write(f4);
          for (k3 = m3 = 0; k3 < b23.length; k3 += 1)
            m3 += b23[k3].j;
          if (f4.f() > 8 * m3)
            throw Error("code length overflow. (" + f4.f() + ">" + 8 * m3 + ")");
          for (f4.f() + 4 <= 8 * m3 && f4.put(0, 4); 0 != f4.f() % 8; )
            f4.m(false);
          for (; !(f4.f() >= 8 * m3); ) {
            f4.put(236, 8);
            if (f4.f() >= 8 * m3)
              break;
            f4.put(17, 8);
          }
          var u23 = 0;
          m3 = k3 = 0;
          p3 = Array(b23.length);
          q = Array(b23.length);
          for (n9 = 0; n9 < b23.length; n9 += 1) {
            var v22 = b23[n9].j, w23 = b23[n9].o - v22;
            k3 = Math.max(k3, v22);
            m3 = Math.max(m3, w23);
            p3[n9] = Array(v22);
            for (l8 = 0; l8 < p3[n9].length; l8 += 1)
              p3[n9][l8] = 255 & f4.B()[l8 + u23];
            u23 += v22;
            l8 = y22.C(w23);
            v22 = z3(p3[n9], l8.b() - 1).l(l8);
            q[n9] = Array(l8.b() - 1);
            for (l8 = 0; l8 < q[n9].length; l8 += 1)
              w23 = l8 + v22.b() - q[n9].length, q[n9][l8] = 0 <= w23 ? v22.c(w23) : 0;
          }
          for (l8 = f4 = 0; l8 < b23.length; l8 += 1)
            f4 += b23[l8].o;
          f4 = Array(f4);
          for (l8 = u23 = 0; l8 < k3; l8 += 1)
            for (n9 = 0; n9 < b23.length; n9 += 1)
              l8 < p3[n9].length && (f4[u23] = p3[n9][l8], u23 += 1);
          for (l8 = 0; l8 < m3; l8 += 1)
            for (n9 = 0; n9 < b23.length; n9 += 1)
              l8 < q[n9].length && (f4[u23] = q[n9][l8], u23 += 1);
          g3 = f4;
        }
        b23 = g3;
        f4 = -1;
        k3 = d4 - 1;
        m3 = 7;
        p3 = 0;
        a23 = y22.F(a23);
        for (q = d4 - 1; 0 < q; q -= 2)
          for (6 == q && --q; ; ) {
            for (n9 = 0; 2 > n9; n9 += 1)
              null == r5[k3][q - n9] && (l8 = false, p3 < b23.length && (l8 = 1 == (b23[p3] >>> m3 & 1)), a23(k3, q - n9) && (l8 = !l8), r5[k3][q - n9] = l8, --m3, -1 == m3 && (p3 += 1, m3 = 7));
            k3 += f4;
            if (0 > k3 || d4 <= k3) {
              k3 -= f4;
              f4 = -f4;
              break;
            }
          }
      }
      var h4 = A3[a5], r5 = null, d4 = 0, g3 = null, x3 = [], u4 = { u: function(b23) {
        b23 = w3(b23);
        x3.push(b23);
        g3 = null;
      }, a: function(b23, a23) {
        if (0 > b23 || d4 <= b23 || 0 > a23 || d4 <= a23)
          throw Error(b23 + "," + a23);
        return r5[b23][a23];
      }, h: function() {
        return d4;
      }, J: function() {
        for (var a23 = 0, h23 = 0, c23 = 0; 8 > c23; c23 += 1) {
          b3(true, c23);
          var d23 = y22.D(u4);
          if (0 == c23 || a23 > d23)
            a23 = d23, h23 = c23;
        }
        b3(false, h23);
      } };
      return u4;
    }
    function z3(c4, a5) {
      if ("undefined" == typeof c4.length)
        throw Error(c4.length + "/" + a5);
      var e34 = function() {
        for (var b23 = 0; b23 < c4.length && 0 == c4[b23]; )
          b23 += 1;
        for (var r5 = Array(c4.length - b23 + a5), d4 = 0; d4 < c4.length - b23; d4 += 1)
          r5[d4] = c4[d4 + b23];
        return r5;
      }(), b3 = { c: function(b23) {
        return e34[b23];
      }, b: function() {
        return e34.length;
      }, multiply: function(a23) {
        for (var h4 = Array(b3.b() + a23.b() - 1), c23 = 0; c23 < b3.b(); c23 += 1)
          for (var g3 = 0; g3 < a23.b(); g3 += 1)
            h4[c23 + g3] ^= v3.i(v3.g(b3.c(c23)) + v3.g(a23.c(g3)));
        return z3(h4, 0);
      }, l: function(a23) {
        if (0 > b3.b() - a23.b())
          return b3;
        for (var c23 = v3.g(b3.c(0)) - v3.g(a23.c(0)), h4 = Array(b3.b()), g3 = 0; g3 < b3.b(); g3 += 1)
          h4[g3] = b3.c(g3);
        for (g3 = 0; g3 < a23.b(); g3 += 1)
          h4[g3] ^= v3.i(v3.g(a23.c(g3)) + c23);
        return z3(h4, 0).l(a23);
      } };
      return b3;
    }
    C3.s = function(c4) {
      for (var a5 = [], e34 = 0; e34 < c4.length; e34++) {
        var b3 = c4.charCodeAt(e34);
        128 > b3 ? a5.push(b3) : 2048 > b3 ? a5.push(192 | b3 >> 6, 128 | b3 & 63) : 55296 > b3 || 57344 <= b3 ? a5.push(224 | b3 >> 12, 128 | b3 >> 6 & 63, 128 | b3 & 63) : (e34++, b3 = 65536 + ((b3 & 1023) << 10 | c4.charCodeAt(e34) & 1023), a5.push(240 | b3 >> 18, 128 | b3 >> 12 & 63, 128 | b3 >> 6 & 63, 128 | b3 & 63));
      }
      return a5;
    };
    var A3 = { L: 1, M: 0, Q: 3, H: 2 }, y22 = function() {
      function c4(b3) {
        for (var a23 = 0; 0 != b3; )
          a23 += 1, b3 >>>= 1;
        return a23;
      }
      var a5 = [
        [],
        [6, 18],
        [6, 22],
        [6, 26],
        [6, 30],
        [6, 34],
        [6, 22, 38],
        [6, 24, 42],
        [6, 26, 46],
        [6, 28, 50],
        [6, 30, 54],
        [6, 32, 58],
        [6, 34, 62],
        [6, 26, 46, 66],
        [6, 26, 48, 70],
        [6, 26, 50, 74],
        [6, 30, 54, 78],
        [6, 30, 56, 82],
        [6, 30, 58, 86],
        [6, 34, 62, 90],
        [6, 28, 50, 72, 94],
        [6, 26, 50, 74, 98],
        [6, 30, 54, 78, 102],
        [6, 28, 54, 80, 106],
        [6, 32, 58, 84, 110],
        [6, 30, 58, 86, 114],
        [6, 34, 62, 90, 118],
        [6, 26, 50, 74, 98, 122],
        [6, 30, 54, 78, 102, 126],
        [6, 26, 52, 78, 104, 130],
        [6, 30, 56, 82, 108, 134],
        [6, 34, 60, 86, 112, 138],
        [6, 30, 58, 86, 114, 142],
        [6, 34, 62, 90, 118, 146],
        [6, 30, 54, 78, 102, 126, 150],
        [6, 24, 50, 76, 102, 128, 154],
        [6, 28, 54, 80, 106, 132, 158],
        [6, 32, 58, 84, 110, 136, 162],
        [6, 26, 54, 82, 110, 138, 166],
        [6, 30, 58, 86, 114, 142, 170]
      ], e34 = { w: function(b3) {
        for (var a23 = b3 << 10; 0 <= c4(a23) - c4(1335); )
          a23 ^= 1335 << c4(a23) - c4(1335);
        return (b3 << 10 | a23) ^ 21522;
      }, A: function(b3) {
        for (var a23 = b3 << 12; 0 <= c4(a23) - c4(7973); )
          a23 ^= 7973 << c4(a23) - c4(7973);
        return b3 << 12 | a23;
      }, G: function(b3) {
        return a5[b3 - 1];
      }, F: function(b3) {
        switch (b3) {
          case 0:
            return function(b23, a23) {
              return 0 == (b23 + a23) % 2;
            };
          case 1:
            return function(b23) {
              return 0 == b23 % 2;
            };
          case 2:
            return function(b23, a23) {
              return 0 == a23 % 3;
            };
          case 3:
            return function(b23, a23) {
              return 0 == (b23 + a23) % 3;
            };
          case 4:
            return function(b23, a23) {
              return 0 == (Math.floor(b23 / 2) + Math.floor(a23 / 3)) % 2;
            };
          case 5:
            return function(b23, a23) {
              return 0 == b23 * a23 % 2 + b23 * a23 % 3;
            };
          case 6:
            return function(b23, a23) {
              return 0 == (b23 * a23 % 2 + b23 * a23 % 3) % 2;
            };
          case 7:
            return function(b23, a23) {
              return 0 == (b23 * a23 % 3 + (b23 + a23) % 2) % 2;
            };
          default:
            throw Error("bad maskPattern:" + b3);
        }
      }, C: function(b3) {
        for (var a23 = z3([1], 0), c23 = 0; c23 < b3; c23 += 1)
          a23 = a23.multiply(z3([1, v3.i(c23)], 0));
        return a23;
      }, f: function(b3, a23) {
        if (4 != b3 || 1 > a23 || 40 < a23)
          throw Error("mode: " + b3 + "; type: " + a23);
        return 10 > a23 ? 8 : 16;
      }, D: function(b3) {
        for (var a23 = b3.h(), c23 = 0, d4 = 0; d4 < a23; d4 += 1)
          for (var g3 = 0; g3 < a23; g3 += 1) {
            for (var e43 = 0, t23 = b3.a(d4, g3), p3 = -1; 1 >= p3; p3 += 1)
              if (!(0 > d4 + p3 || a23 <= d4 + p3))
                for (var q = -1; 1 >= q; q += 1)
                  0 > g3 + q || a23 <= g3 + q || (0 != p3 || 0 != q) && t23 == b3.a(d4 + p3, g3 + q) && (e43 += 1);
            5 < e43 && (c23 += 3 + e43 - 5);
          }
        for (d4 = 0; d4 < a23 - 1; d4 += 1)
          for (g3 = 0; g3 < a23 - 1; g3 += 1)
            if (e43 = 0, b3.a(d4, g3) && (e43 += 1), b3.a(d4 + 1, g3) && (e43 += 1), b3.a(d4, g3 + 1) && (e43 += 1), b3.a(d4 + 1, g3 + 1) && (e43 += 1), 0 == e43 || 4 == e43)
              c23 += 3;
        for (d4 = 0; d4 < a23; d4 += 1)
          for (g3 = 0; g3 < a23 - 6; g3 += 1)
            b3.a(d4, g3) && !b3.a(d4, g3 + 1) && b3.a(d4, g3 + 2) && b3.a(d4, g3 + 3) && b3.a(d4, g3 + 4) && !b3.a(d4, g3 + 5) && b3.a(d4, g3 + 6) && (c23 += 40);
        for (g3 = 0; g3 < a23; g3 += 1)
          for (d4 = 0; d4 < a23 - 6; d4 += 1)
            b3.a(d4, g3) && !b3.a(d4 + 1, g3) && b3.a(d4 + 2, g3) && b3.a(d4 + 3, g3) && b3.a(d4 + 4, g3) && !b3.a(d4 + 5, g3) && b3.a(d4 + 6, g3) && (c23 += 40);
        for (g3 = e43 = 0; g3 < a23; g3 += 1)
          for (d4 = 0; d4 < a23; d4 += 1)
            b3.a(d4, g3) && (e43 += 1);
        return c23 += Math.abs(100 * e43 / a23 / a23 - 50) / 5 * 10;
      } };
      return e34;
    }(), v3 = function() {
      for (var c4 = Array(256), a5 = Array(256), e34 = 0; 8 > e34; e34 += 1)
        c4[e34] = 1 << e34;
      for (e34 = 8; 256 > e34; e34 += 1)
        c4[e34] = c4[e34 - 4] ^ c4[e34 - 5] ^ c4[e34 - 6] ^ c4[e34 - 8];
      for (e34 = 0; 255 > e34; e34 += 1)
        a5[c4[e34]] = e34;
      return { g: function(b3) {
        if (1 > b3)
          throw Error("glog(" + b3 + ")");
        return a5[b3];
      }, i: function(b3) {
        for (; 0 > b3; )
          b3 += 255;
        for (; 256 <= b3; )
          b3 -= 255;
        return c4[b3];
      } };
    }(), t6 = function() {
      function c4(b3, c23) {
        switch (c23) {
          case A3.L:
            return a5[4 * (b3 - 1)];
          case A3.M:
            return a5[4 * (b3 - 1) + 1];
          case A3.Q:
            return a5[4 * (b3 - 1) + 2];
          case A3.H:
            return a5[4 * (b3 - 1) + 3];
        }
      }
      var a5 = [
        [1, 26, 19],
        [1, 26, 16],
        [1, 26, 13],
        [1, 26, 9],
        [1, 44, 34],
        [1, 44, 28],
        [1, 44, 22],
        [1, 44, 16],
        [1, 70, 55],
        [1, 70, 44],
        [2, 35, 17],
        [2, 35, 13],
        [1, 100, 80],
        [2, 50, 32],
        [2, 50, 24],
        [4, 25, 9],
        [1, 134, 108],
        [2, 67, 43],
        [2, 33, 15, 2, 34, 16],
        [2, 33, 11, 2, 34, 12],
        [2, 86, 68],
        [4, 43, 27],
        [4, 43, 19],
        [4, 43, 15],
        [2, 98, 78],
        [4, 49, 31],
        [2, 32, 14, 4, 33, 15],
        [4, 39, 13, 1, 40, 14],
        [2, 121, 97],
        [2, 60, 38, 2, 61, 39],
        [4, 40, 18, 2, 41, 19],
        [4, 40, 14, 2, 41, 15],
        [2, 146, 116],
        [
          3,
          58,
          36,
          2,
          59,
          37
        ],
        [4, 36, 16, 4, 37, 17],
        [4, 36, 12, 4, 37, 13],
        [2, 86, 68, 2, 87, 69],
        [4, 69, 43, 1, 70, 44],
        [6, 43, 19, 2, 44, 20],
        [6, 43, 15, 2, 44, 16],
        [4, 101, 81],
        [1, 80, 50, 4, 81, 51],
        [4, 50, 22, 4, 51, 23],
        [3, 36, 12, 8, 37, 13],
        [2, 116, 92, 2, 117, 93],
        [6, 58, 36, 2, 59, 37],
        [4, 46, 20, 6, 47, 21],
        [7, 42, 14, 4, 43, 15],
        [4, 133, 107],
        [8, 59, 37, 1, 60, 38],
        [8, 44, 20, 4, 45, 21],
        [12, 33, 11, 4, 34, 12],
        [3, 145, 115, 1, 146, 116],
        [4, 64, 40, 5, 65, 41],
        [11, 36, 16, 5, 37, 17],
        [11, 36, 12, 5, 37, 13],
        [5, 109, 87, 1, 110, 88],
        [5, 65, 41, 5, 66, 42],
        [5, 54, 24, 7, 55, 25],
        [11, 36, 12, 7, 37, 13],
        [5, 122, 98, 1, 123, 99],
        [
          7,
          73,
          45,
          3,
          74,
          46
        ],
        [15, 43, 19, 2, 44, 20],
        [3, 45, 15, 13, 46, 16],
        [1, 135, 107, 5, 136, 108],
        [10, 74, 46, 1, 75, 47],
        [1, 50, 22, 15, 51, 23],
        [2, 42, 14, 17, 43, 15],
        [5, 150, 120, 1, 151, 121],
        [9, 69, 43, 4, 70, 44],
        [17, 50, 22, 1, 51, 23],
        [2, 42, 14, 19, 43, 15],
        [3, 141, 113, 4, 142, 114],
        [3, 70, 44, 11, 71, 45],
        [17, 47, 21, 4, 48, 22],
        [9, 39, 13, 16, 40, 14],
        [3, 135, 107, 5, 136, 108],
        [3, 67, 41, 13, 68, 42],
        [15, 54, 24, 5, 55, 25],
        [15, 43, 15, 10, 44, 16],
        [4, 144, 116, 4, 145, 117],
        [17, 68, 42],
        [17, 50, 22, 6, 51, 23],
        [19, 46, 16, 6, 47, 17],
        [2, 139, 111, 7, 140, 112],
        [17, 74, 46],
        [7, 54, 24, 16, 55, 25],
        [34, 37, 13],
        [
          4,
          151,
          121,
          5,
          152,
          122
        ],
        [4, 75, 47, 14, 76, 48],
        [11, 54, 24, 14, 55, 25],
        [16, 45, 15, 14, 46, 16],
        [6, 147, 117, 4, 148, 118],
        [6, 73, 45, 14, 74, 46],
        [11, 54, 24, 16, 55, 25],
        [30, 46, 16, 2, 47, 17],
        [8, 132, 106, 4, 133, 107],
        [8, 75, 47, 13, 76, 48],
        [7, 54, 24, 22, 55, 25],
        [22, 45, 15, 13, 46, 16],
        [10, 142, 114, 2, 143, 115],
        [19, 74, 46, 4, 75, 47],
        [28, 50, 22, 6, 51, 23],
        [33, 46, 16, 4, 47, 17],
        [8, 152, 122, 4, 153, 123],
        [22, 73, 45, 3, 74, 46],
        [8, 53, 23, 26, 54, 24],
        [12, 45, 15, 28, 46, 16],
        [3, 147, 117, 10, 148, 118],
        [3, 73, 45, 23, 74, 46],
        [4, 54, 24, 31, 55, 25],
        [11, 45, 15, 31, 46, 16],
        [7, 146, 116, 7, 147, 117],
        [21, 73, 45, 7, 74, 46],
        [1, 53, 23, 37, 54, 24],
        [19, 45, 15, 26, 46, 16],
        [5, 145, 115, 10, 146, 116],
        [19, 75, 47, 10, 76, 48],
        [15, 54, 24, 25, 55, 25],
        [23, 45, 15, 25, 46, 16],
        [13, 145, 115, 3, 146, 116],
        [2, 74, 46, 29, 75, 47],
        [42, 54, 24, 1, 55, 25],
        [23, 45, 15, 28, 46, 16],
        [17, 145, 115],
        [10, 74, 46, 23, 75, 47],
        [10, 54, 24, 35, 55, 25],
        [19, 45, 15, 35, 46, 16],
        [17, 145, 115, 1, 146, 116],
        [14, 74, 46, 21, 75, 47],
        [29, 54, 24, 19, 55, 25],
        [11, 45, 15, 46, 46, 16],
        [13, 145, 115, 6, 146, 116],
        [14, 74, 46, 23, 75, 47],
        [44, 54, 24, 7, 55, 25],
        [59, 46, 16, 1, 47, 17],
        [12, 151, 121, 7, 152, 122],
        [12, 75, 47, 26, 76, 48],
        [39, 54, 24, 14, 55, 25],
        [22, 45, 15, 41, 46, 16],
        [6, 151, 121, 14, 152, 122],
        [6, 75, 47, 34, 76, 48],
        [46, 54, 24, 10, 55, 25],
        [2, 45, 15, 64, 46, 16],
        [17, 152, 122, 4, 153, 123],
        [29, 74, 46, 14, 75, 47],
        [49, 54, 24, 10, 55, 25],
        [24, 45, 15, 46, 46, 16],
        [4, 152, 122, 18, 153, 123],
        [13, 74, 46, 32, 75, 47],
        [48, 54, 24, 14, 55, 25],
        [42, 45, 15, 32, 46, 16],
        [20, 147, 117, 4, 148, 118],
        [40, 75, 47, 7, 76, 48],
        [43, 54, 24, 22, 55, 25],
        [10, 45, 15, 67, 46, 16],
        [19, 148, 118, 6, 149, 119],
        [18, 75, 47, 31, 76, 48],
        [34, 54, 24, 34, 55, 25],
        [20, 45, 15, 61, 46, 16]
      ], e34 = { I: function(b3, a23) {
        var e43 = c4(b3, a23);
        if ("undefined" == typeof e43)
          throw Error("bad rs block @ typeNumber:" + b3 + "/errorCorrectLevel:" + a23);
        b3 = e43.length / 3;
        a23 = [];
        for (var d4 = 0; d4 < b3; d4 += 1)
          for (var g3 = e43[3 * d4], h4 = e43[3 * d4 + 1], t23 = e43[3 * d4 + 2], p3 = 0; p3 < g3; p3 += 1) {
            var q = t23, f4 = {};
            f4.o = h4;
            f4.j = q;
            a23.push(f4);
          }
        return a23;
      } };
      return e34;
    }();
    return C3;
  }());
  var qr_creator_es6_min_default = QrCreator;
  var SlQrCode = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.value = "";
      this.label = "";
      this.size = 128;
      this.fill = "black";
      this.background = "white";
      this.radius = 0;
      this.errorCorrection = "H";
    }
    firstUpdated() {
      this.generate();
    }
    generate() {
      if (!this.hasUpdated) {
        return;
      }
      qr_creator_es6_min_default.render(
        {
          text: this.value,
          radius: this.radius,
          ecLevel: this.errorCorrection,
          fill: this.fill,
          background: null,
          // We draw the canvas larger and scale its container down to avoid blurring on high-density displays
          size: this.size * 2
        },
        this.canvas
      );
    }
    render() {
      var _a;
      return y`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((_a = this.label) == null ? void 0 : _a.length) > 0 ? this.label : this.value}
        style=${i23({
        width: `${this.size}px`,
        height: `${this.size}px`
      })}
      ></canvas>
    `;
    }
  };
  SlQrCode.styles = qr_code_styles_default;
  __decorateClass([
    i22("canvas")
  ], SlQrCode.prototype, "canvas", 2);
  __decorateClass([
    e22()
  ], SlQrCode.prototype, "value", 2);
  __decorateClass([
    e22()
  ], SlQrCode.prototype, "label", 2);
  __decorateClass([
    e22({ type: Number })
  ], SlQrCode.prototype, "size", 2);
  __decorateClass([
    e22()
  ], SlQrCode.prototype, "fill", 2);
  __decorateClass([
    e22()
  ], SlQrCode.prototype, "background", 2);
  __decorateClass([
    e22({ type: Number })
  ], SlQrCode.prototype, "radius", 2);
  __decorateClass([
    e22({ attribute: "error-correction" })
  ], SlQrCode.prototype, "errorCorrection", 2);
  __decorateClass([
    watch(["background", "errorCorrection", "fill", "radius", "size", "value"])
  ], SlQrCode.prototype, "generate", 1);
  SlQrCode = __decorateClass([
    e5("sl-qr-code")
  ], SlQrCode);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.S4VARFZB.js
  var radio_styles_default = i`
  ${component_styles_default}

  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
  }
`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TYJ72UUJ.js
  var SlRadio = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.checked = false;
      this.hasFocus = false;
      this.size = "medium";
      this.disabled = false;
    }
    connectedCallback() {
      super.connectedCallback();
      this.handleBlur = this.handleBlur.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.handleFocus = this.handleFocus.bind(this);
      this.setInitialAttributes();
      this.addEventListeners();
    }
    disconnectedCallback() {
      this.removeEventListeners();
    }
    addEventListeners() {
      this.addEventListener("blur", this.handleBlur);
      this.addEventListener("click", this.handleClick);
      this.addEventListener("focus", this.handleFocus);
    }
    removeEventListeners() {
      this.removeEventListener("blur", this.handleBlur);
      this.removeEventListener("click", this.handleClick);
      this.removeEventListener("focus", this.handleFocus);
    }
    handleBlur() {
      this.hasFocus = false;
      this.emit("sl-blur");
    }
    handleClick() {
      if (!this.disabled) {
        this.checked = true;
      }
    }
    handleFocus() {
      this.hasFocus = true;
      this.emit("sl-focus");
    }
    setInitialAttributes() {
      this.setAttribute("role", "radio");
      this.setAttribute("tabindex", "-1");
      this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
    }
    handleCheckedChange() {
      this.setAttribute("aria-checked", this.checked ? "true" : "false");
      this.setAttribute("tabindex", this.checked ? "0" : "-1");
    }
    handleDisabledChange() {
      this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
    }
    render() {
      return y`
      <span
        part="base"
        class=${o5({
        radio: true,
        "radio--checked": this.checked,
        "radio--disabled": this.disabled,
        "radio--focused": this.hasFocus,
        "radio--small": this.size === "small",
        "radio--medium": this.size === "medium",
        "radio--large": this.size === "large"
      })}
      >
        <span part="${`control${this.checked ? " control--checked" : ""}`}" class="radio__control">
          ${this.checked ? y` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> ` : ""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `;
    }
  };
  SlRadio.styles = radio_styles_default;
  __decorateClass([
    t4()
  ], SlRadio.prototype, "checked", 2);
  __decorateClass([
    t4()
  ], SlRadio.prototype, "hasFocus", 2);
  __decorateClass([
    e22()
  ], SlRadio.prototype, "value", 2);
  __decorateClass([
    e22({ reflect: true })
  ], SlRadio.prototype, "size", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlRadio.prototype, "disabled", 2);
  __decorateClass([
    watch("checked")
  ], SlRadio.prototype, "handleCheckedChange", 1);
  __decorateClass([
    watch("disabled", { waitUntilFirstUpdate: true })
  ], SlRadio.prototype, "handleDisabledChange", 1);
  SlRadio = __decorateClass([
    e5("sl-radio")
  ], SlRadio);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.DYDPLPGK.js
  var menu_label_styles_default = i`
  ${component_styles_default}

  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
  }
`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.MVBG6NLY.js
  var SlMenuLabel = class extends ShoelaceElement {
    render() {
      return y` <slot part="base" class="menu-label"></slot> `;
    }
  };
  SlMenuLabel.styles = menu_label_styles_default;
  SlMenuLabel = __decorateClass([
    e5("sl-menu-label")
  ], SlMenuLabel);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ONM7523W.js
  var mutation_observer_styles_default = i`
  ${component_styles_default}

  :host {
    display: contents;
  }
`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.U756XYD3.js
  var SlMutationObserver = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.attrOldValue = false;
      this.charData = false;
      this.charDataOldValue = false;
      this.childList = false;
      this.disabled = false;
    }
    connectedCallback() {
      super.connectedCallback();
      this.handleMutation = this.handleMutation.bind(this);
      this.mutationObserver = new MutationObserver(this.handleMutation);
      if (!this.disabled) {
        this.startObserver();
      }
    }
    disconnectedCallback() {
      this.stopObserver();
    }
    handleMutation(mutationList) {
      this.emit("sl-mutation", {
        detail: { mutationList }
      });
    }
    startObserver() {
      const observeAttributes = typeof this.attr === "string" && this.attr.length > 0;
      const attributeFilter = observeAttributes && this.attr !== "*" ? this.attr.split(" ") : void 0;
      try {
        this.mutationObserver.observe(this, {
          subtree: true,
          childList: this.childList,
          attributes: observeAttributes,
          attributeFilter,
          attributeOldValue: this.attrOldValue,
          characterData: this.charData,
          characterDataOldValue: this.charDataOldValue
        });
      } catch (e34) {
      }
    }
    stopObserver() {
      this.mutationObserver.disconnect();
    }
    handleDisabledChange() {
      if (this.disabled) {
        this.stopObserver();
      } else {
        this.startObserver();
      }
    }
    handleChange() {
      this.stopObserver();
      this.startObserver();
    }
    render() {
      return y` <slot></slot> `;
    }
  };
  SlMutationObserver.styles = mutation_observer_styles_default;
  __decorateClass([
    e22({ reflect: true })
  ], SlMutationObserver.prototype, "attr", 2);
  __decorateClass([
    e22({ attribute: "attr-old-value", type: Boolean, reflect: true })
  ], SlMutationObserver.prototype, "attrOldValue", 2);
  __decorateClass([
    e22({ attribute: "char-data", type: Boolean, reflect: true })
  ], SlMutationObserver.prototype, "charData", 2);
  __decorateClass([
    e22({ attribute: "char-data-old-value", type: Boolean, reflect: true })
  ], SlMutationObserver.prototype, "charDataOldValue", 2);
  __decorateClass([
    e22({ attribute: "child-list", type: Boolean, reflect: true })
  ], SlMutationObserver.prototype, "childList", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlMutationObserver.prototype, "disabled", 2);
  __decorateClass([
    watch("disabled")
  ], SlMutationObserver.prototype, "handleDisabledChange", 1);
  __decorateClass([
    watch("attr", { waitUntilFirstUpdate: true }),
    watch("attr-old-value", { waitUntilFirstUpdate: true }),
    watch("char-data", { waitUntilFirstUpdate: true }),
    watch("char-data-old-value", { waitUntilFirstUpdate: true }),
    watch("childList", { waitUntilFirstUpdate: true })
  ], SlMutationObserver.prototype, "handleChange", 1);
  SlMutationObserver = __decorateClass([
    e5("sl-mutation-observer")
  ], SlMutationObserver);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.QAMGQNN2.js
  var option_styles_default = i`
  ${component_styles_default}

  :host {
    display: block;
    user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.WUV5OOS4.js
  var SlOption = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController2(this);
      this.current = false;
      this.selected = false;
      this.hasHover = false;
      this.value = "";
      this.disabled = false;
    }
    connectedCallback() {
      super.connectedCallback();
      this.setAttribute("role", "option");
      this.setAttribute("aria-selected", "false");
    }
    handleDefaultSlotChange() {
      const textLabel = this.getTextLabel();
      if (typeof this.cachedTextLabel === "undefined") {
        this.cachedTextLabel = textLabel;
        return;
      }
      if (textLabel !== this.cachedTextLabel) {
        this.cachedTextLabel = textLabel;
        this.emit("slotchange", { bubbles: true, composed: false, cancelable: false });
      }
    }
    handleMouseEnter() {
      this.hasHover = true;
    }
    handleMouseLeave() {
      this.hasHover = false;
    }
    handleDisabledChange() {
      this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
    }
    handleSelectedChange() {
      this.setAttribute("aria-selected", this.selected ? "true" : "false");
    }
    handleValueChange() {
      if (typeof this.value !== "string") {
        this.value = String(this.value);
      }
      if (this.value.includes(" ")) {
        console.error(`Option values cannot include a space. All spaces have been replaced with underscores.`, this);
        this.value = this.value.replace(/ /g, "_");
      }
    }
    /** Returns a plain text label based on the option's content. */
    getTextLabel() {
      var _a;
      return ((_a = this.textContent) != null ? _a : "").trim();
    }
    render() {
      return y`
      <div
        part="base"
        class=${o5({
        option: true,
        "option--current": this.current,
        "option--disabled": this.disabled,
        "option--selected": this.selected,
        "option--hover": this.hasHover
      })}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `;
    }
  };
  SlOption.styles = option_styles_default;
  __decorateClass([
    i22(".option__label")
  ], SlOption.prototype, "defaultSlot", 2);
  __decorateClass([
    t4()
  ], SlOption.prototype, "current", 2);
  __decorateClass([
    t4()
  ], SlOption.prototype, "selected", 2);
  __decorateClass([
    t4()
  ], SlOption.prototype, "hasHover", 2);
  __decorateClass([
    e22({ reflect: true })
  ], SlOption.prototype, "value", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlOption.prototype, "disabled", 2);
  __decorateClass([
    watch("disabled")
  ], SlOption.prototype, "handleDisabledChange", 1);
  __decorateClass([
    watch("selected")
  ], SlOption.prototype, "handleSelectedChange", 1);
  __decorateClass([
    watch("value")
  ], SlOption.prototype, "handleValueChange", 1);
  SlOption = __decorateClass([
    e5("sl-option")
  ], SlOption);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.XNEONNEJ.js
  var includeFiles = /* @__PURE__ */ new Map();
  function requestInclude(src, mode = "cors") {
    const prev = includeFiles.get(src);
    if (prev !== void 0) {
      return Promise.resolve(prev);
    }
    const fileDataPromise = fetch(src, { mode }).then(async (response) => {
      const res = {
        ok: response.ok,
        status: response.status,
        html: await response.text()
      };
      includeFiles.set(src, res);
      return res;
    });
    includeFiles.set(src, fileDataPromise);
    return fileDataPromise;
  }

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.AG3WFFW2.js
  var include_styles_default = i`
  ${component_styles_default}

  :host {
    display: block;
  }
`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.4OB3LWYB.js
  var SlInclude = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.mode = "cors";
      this.allowScripts = false;
    }
    executeScript(script) {
      const newScript = document.createElement("script");
      [...script.attributes].forEach((attr) => newScript.setAttribute(attr.name, attr.value));
      newScript.textContent = script.textContent;
      script.parentNode.replaceChild(newScript, script);
    }
    async handleSrcChange() {
      try {
        const src = this.src;
        const file = await requestInclude(src, this.mode);
        if (src !== this.src) {
          return;
        }
        if (!file.ok) {
          this.emit("sl-error", { detail: { status: file.status } });
          return;
        }
        this.innerHTML = file.html;
        if (this.allowScripts) {
          [...this.querySelectorAll("script")].forEach((script) => this.executeScript(script));
        }
        this.emit("sl-load");
      } catch (e34) {
        this.emit("sl-error", { detail: { status: -1 } });
      }
    }
    render() {
      return y`<slot></slot>`;
    }
  };
  SlInclude.styles = include_styles_default;
  __decorateClass([
    e22()
  ], SlInclude.prototype, "src", 2);
  __decorateClass([
    e22()
  ], SlInclude.prototype, "mode", 2);
  __decorateClass([
    e22({ attribute: "allow-scripts", type: Boolean })
  ], SlInclude.prototype, "allowScripts", 2);
  __decorateClass([
    watch("src")
  ], SlInclude.prototype, "handleSrcChange", 1);
  SlInclude = __decorateClass([
    e5("sl-include")
  ], SlInclude);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.WGZQDQP2.js
  var menu_styles_default = i`
  ${component_styles_default}

  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.FIEJKR6H.js
  var SlMenu = class extends ShoelaceElement {
    connectedCallback() {
      super.connectedCallback();
      this.setAttribute("role", "menu");
    }
    handleClick(event) {
      const target = event.target;
      const item = target.closest("sl-menu-item");
      if (!item || item.disabled || item.inert) {
        return;
      }
      if (item.type === "checkbox") {
        item.checked = !item.checked;
      }
      this.emit("sl-select", { detail: { item } });
    }
    handleKeyDown(event) {
      if (event.key === "Enter") {
        const item = this.getCurrentItem();
        event.preventDefault();
        item == null ? void 0 : item.click();
      }
      if (event.key === " ") {
        event.preventDefault();
      }
      if (["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
        const items = this.getAllItems();
        const activeItem = this.getCurrentItem();
        let index = activeItem ? items.indexOf(activeItem) : 0;
        if (items.length > 0) {
          event.preventDefault();
          if (event.key === "ArrowDown") {
            index++;
          } else if (event.key === "ArrowUp") {
            index--;
          } else if (event.key === "Home") {
            index = 0;
          } else if (event.key === "End") {
            index = items.length - 1;
          }
          if (index < 0) {
            index = items.length - 1;
          }
          if (index > items.length - 1) {
            index = 0;
          }
          this.setCurrentItem(items[index]);
          items[index].focus();
        }
      }
    }
    handleMouseDown(event) {
      const target = event.target;
      if (this.isMenuItem(target)) {
        this.setCurrentItem(target);
      }
    }
    handleSlotChange() {
      const items = this.getAllItems();
      if (items.length > 0) {
        this.setCurrentItem(items[0]);
      }
    }
    isMenuItem(item) {
      var _a;
      return item.tagName.toLowerCase() === "sl-menu-item" || ["menuitem", "menuitemcheckbox", "menuitemradio"].includes((_a = item.getAttribute("role")) != null ? _a : "");
    }
    /** @internal Gets all slotted menu items, ignoring dividers, headers, and other elements. */
    getAllItems() {
      return [...this.defaultSlot.assignedElements({ flatten: true })].filter((el) => {
        if (el.inert || !this.isMenuItem(el)) {
          return false;
        }
        return true;
      });
    }
    /**
     * @internal Gets the current menu item, which is the menu item that has `tabindex="0"` within the roving tab index.
     * The menu item may or may not have focus, but for keyboard interaction purposes it's considered the "active" item.
     */
    getCurrentItem() {
      return this.getAllItems().find((i25) => i25.getAttribute("tabindex") === "0");
    }
    /**
     * @internal Sets the current menu item to the specified element. This sets `tabindex="0"` on the target element and
     * `tabindex="-1"` to all other items. This method must be called prior to setting focus on a menu item.
     */
    setCurrentItem(item) {
      const items = this.getAllItems();
      items.forEach((i25) => {
        i25.setAttribute("tabindex", i25 === item ? "0" : "-1");
      });
    }
    render() {
      return y`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `;
    }
  };
  SlMenu.styles = menu_styles_default;
  __decorateClass([
    i22("slot")
  ], SlMenu.prototype, "defaultSlot", 2);
  SlMenu = __decorateClass([
    e5("sl-menu")
  ], SlMenu);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.OJYA6EKC.js
  var menu_item_styles_default = i`
  ${component_styles_default}

  :host {
    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.2P3TWPRN.js
  var SlMenuItem = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.type = "normal";
      this.checked = false;
      this.value = "";
      this.disabled = false;
    }
    connectedCallback() {
      super.connectedCallback();
      this.handleHostClick = this.handleHostClick.bind(this);
      this.addEventListener("click", this.handleHostClick);
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this.removeEventListener("click", this.handleHostClick);
    }
    handleDefaultSlotChange() {
      const textLabel = this.getTextLabel();
      if (typeof this.cachedTextLabel === "undefined") {
        this.cachedTextLabel = textLabel;
        return;
      }
      if (textLabel !== this.cachedTextLabel) {
        this.cachedTextLabel = textLabel;
        this.emit("slotchange", { bubbles: true, composed: false, cancelable: false });
      }
    }
    handleHostClick(event) {
      if (this.disabled) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    }
    handleCheckedChange() {
      if (this.checked && this.type !== "checkbox") {
        this.checked = false;
        console.error('The checked attribute can only be used on menu items with type="checkbox"', this);
        return;
      }
      if (this.type === "checkbox") {
        this.setAttribute("aria-checked", this.checked ? "true" : "false");
      } else {
        this.removeAttribute("aria-checked");
      }
    }
    handleDisabledChange() {
      this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
    }
    handleTypeChange() {
      if (this.type === "checkbox") {
        this.setAttribute("role", "menuitemcheckbox");
        this.setAttribute("aria-checked", this.checked ? "true" : "false");
      } else {
        this.setAttribute("role", "menuitem");
        this.removeAttribute("aria-checked");
      }
    }
    /** Returns a text label based on the contents of the menu item's default slot. */
    getTextLabel() {
      return getTextContent(this.defaultSlot);
    }
    render() {
      return y`
      <div
        part="base"
        class=${o5({
        "menu-item": true,
        "menu-item--checked": this.checked,
        "menu-item--disabled": this.disabled,
        "menu-item--has-submenu": false
        // reserved for future use
      })}
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span class="menu-item__chevron">
          <sl-icon name="chevron-right" library="system" aria-hidden="true"></sl-icon>
        </span>
      </div>
    `;
    }
  };
  SlMenuItem.styles = menu_item_styles_default;
  __decorateClass([
    i22("slot:not([name])")
  ], SlMenuItem.prototype, "defaultSlot", 2);
  __decorateClass([
    i22(".menu-item")
  ], SlMenuItem.prototype, "menuItem", 2);
  __decorateClass([
    e22()
  ], SlMenuItem.prototype, "type", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlMenuItem.prototype, "checked", 2);
  __decorateClass([
    e22()
  ], SlMenuItem.prototype, "value", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlMenuItem.prototype, "disabled", 2);
  __decorateClass([
    watch("checked")
  ], SlMenuItem.prototype, "handleCheckedChange", 1);
  __decorateClass([
    watch("disabled")
  ], SlMenuItem.prototype, "handleDisabledChange", 1);
  __decorateClass([
    watch("type")
  ], SlMenuItem.prototype, "handleTypeChange", 1);
  SlMenuItem = __decorateClass([
    e5("sl-menu-item")
  ], SlMenuItem);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.NQHM4ASC.js
  var image_comparer_styles_default = i`
  ${component_styles_default}

  :host {
    --divider-width: 2px;
    --handle-size: 2.5rem;

    display: inline-block;
    position: relative;
  }

  .image-comparer {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .image-comparer__before,
  .image-comparer__after {
    display: block;
    pointer-events: none;
  }

  .image-comparer__before::slotted(img),
  .image-comparer__after::slotted(img),
  .image-comparer__before::slotted(svg),
  .image-comparer__after::slotted(svg) {
    display: block;
    max-width: 100% !important;
    height: auto;
  }

  .image-comparer__after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .image-comparer__divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: var(--sl-color-neutral-0);
    translate: calc(var(--divider-width) / -2);
    cursor: ew-resize;
  }

  .image-comparer__handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: var(--sl-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.5);
    color: var(--sl-color-neutral-700);
    cursor: inherit;
    z-index: 10;
  }

  .image-comparer__handle:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.2X3IHUQC.js
  var SlImageComparer = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController2(this);
      this.position = 50;
    }
    handleDrag(event) {
      const { width } = this.base.getBoundingClientRect();
      const isRtl = this.localize.dir() === "rtl";
      event.preventDefault();
      drag(this.base, {
        onMove: (x3) => {
          this.position = parseFloat(clamp(x3 / width * 100, 0, 100).toFixed(2));
          if (isRtl)
            this.position = 100 - this.position;
        },
        initialEvent: event
      });
    }
    handleKeyDown(event) {
      const isLtr = this.localize.dir() === "ltr";
      const isRtl = this.localize.dir() === "rtl";
      if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
        const incr = event.shiftKey ? 10 : 1;
        let newPosition = this.position;
        event.preventDefault();
        if (isLtr && event.key === "ArrowLeft" || isRtl && event.key === "ArrowRight") {
          newPosition -= incr;
        }
        if (isLtr && event.key === "ArrowRight" || isRtl && event.key === "ArrowLeft") {
          newPosition += incr;
        }
        if (event.key === "Home") {
          newPosition = 0;
        }
        if (event.key === "End") {
          newPosition = 100;
        }
        newPosition = clamp(newPosition, 0, 100);
        this.position = newPosition;
      }
    }
    handlePositionChange() {
      this.emit("sl-change");
    }
    render() {
      const isRtl = this.localize.dir() === "rtl";
      return y`
      <div
        part="base"
        id="image-comparer"
        class=${o5({
        "image-comparer": true,
        "image-comparer--rtl": isRtl
      })}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <slot name="before" part="before" class="image-comparer__before"></slot>

          <slot
            name="after"
            part="after"
            class="image-comparer__after"
            style=${i23({
        clipPath: isRtl ? `inset(0 0 0 ${100 - this.position}%)` : `inset(0 ${100 - this.position}% 0 0)`
      })}
          ></slot>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${i23({
        left: isRtl ? `${100 - this.position}%` : `${this.position}%`
      })}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <slot
            name="handle"
            part="handle"
            class="image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-controls="image-comparer"
            tabindex="0"
          >
            <sl-icon library="system" name="grip-vertical"></sl-icon>
          </slot>
        </div>
      </div>
    `;
    }
  };
  SlImageComparer.styles = image_comparer_styles_default;
  __decorateClass([
    i22(".image-comparer")
  ], SlImageComparer.prototype, "base", 2);
  __decorateClass([
    i22(".image-comparer__handle")
  ], SlImageComparer.prototype, "handle", 2);
  __decorateClass([
    e22({ type: Number, reflect: true })
  ], SlImageComparer.prototype, "position", 2);
  __decorateClass([
    watch("position", { waitUntilFirstUpdate: true })
  ], SlImageComparer.prototype, "handlePositionChange", 1);
  SlImageComparer = __decorateClass([
    e5("sl-image-comparer")
  ], SlImageComparer);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.G7G6UAKI.js
  function isTabbable(el) {
    const tag = el.tagName.toLowerCase();
    if (el.getAttribute("tabindex") === "-1") {
      return false;
    }
    if (el.hasAttribute("disabled")) {
      return false;
    }
    if (el.hasAttribute("aria-disabled") && el.getAttribute("aria-disabled") !== "false") {
      return false;
    }
    if (tag === "input" && el.getAttribute("type") === "radio" && !el.hasAttribute("checked")) {
      return false;
    }
    if (el.offsetParent === null) {
      return false;
    }
    if (window.getComputedStyle(el).visibility === "hidden") {
      return false;
    }
    if ((tag === "audio" || tag === "video") && el.hasAttribute("controls")) {
      return true;
    }
    if (el.hasAttribute("tabindex")) {
      return true;
    }
    if (el.hasAttribute("contenteditable") && el.getAttribute("contenteditable") !== "false") {
      return true;
    }
    return ["button", "input", "select", "textarea", "a", "audio", "video", "summary"].includes(tag);
  }
  function getTabbableBoundary(root) {
    var _a, _b;
    const allElements = [];
    function walk(el) {
      if (el instanceof HTMLElement) {
        allElements.push(el);
        if (el.shadowRoot !== null && el.shadowRoot.mode === "open") {
          walk(el.shadowRoot);
        }
      }
      [...el.children].forEach((e7) => walk(e7));
    }
    walk(root);
    const start = (_a = allElements.find((el) => isTabbable(el))) != null ? _a : null;
    const end = (_b = allElements.reverse().find((el) => isTabbable(el))) != null ? _b : null;
    return { start, end };
  }

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.XQUAZ3XN.js
  var activeModals = [];
  var Modal = class {
    constructor(element) {
      this.tabDirection = "forward";
      this.element = element;
      this.handleFocusIn = this.handleFocusIn.bind(this);
      this.handleKeyDown = this.handleKeyDown.bind(this);
      this.handleKeyUp = this.handleKeyUp.bind(this);
    }
    activate() {
      activeModals.push(this.element);
      document.addEventListener("focusin", this.handleFocusIn);
      document.addEventListener("keydown", this.handleKeyDown);
      document.addEventListener("keyup", this.handleKeyUp);
    }
    deactivate() {
      activeModals = activeModals.filter((modal) => modal !== this.element);
      document.removeEventListener("focusin", this.handleFocusIn);
      document.removeEventListener("keydown", this.handleKeyDown);
      document.removeEventListener("keyup", this.handleKeyUp);
    }
    isActive() {
      return activeModals[activeModals.length - 1] === this.element;
    }
    checkFocus() {
      if (this.isActive()) {
        if (!this.element.matches(":focus-within")) {
          const { start, end } = getTabbableBoundary(this.element);
          const target = this.tabDirection === "forward" ? start : end;
          if (typeof (target == null ? void 0 : target.focus) === "function") {
            target.focus({ preventScroll: true });
          }
        }
      }
    }
    handleFocusIn() {
      this.checkFocus();
    }
    handleKeyDown(event) {
      if (event.key === "Tab" && event.shiftKey) {
        this.tabDirection = "backward";
        requestAnimationFrame(() => this.checkFocus());
      }
    }
    handleKeyUp() {
      this.tabDirection = "forward";
    }
  };

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.RPVFXRDH.js
  var drawer_styles_default = i`
  ${component_styles_default}

  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.BIHHSCPF.js
  function uppercaseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  var SlDrawer = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.hasSlotController = new HasSlotController(this, "footer");
      this.localize = new LocalizeController2(this);
      this.open = false;
      this.label = "";
      this.placement = "end";
      this.contained = false;
      this.noHeader = false;
    }
    connectedCallback() {
      super.connectedCallback();
      this.handleDocumentKeyDown = this.handleDocumentKeyDown.bind(this);
      this.modal = new Modal(this);
    }
    firstUpdated() {
      this.drawer.hidden = !this.open;
      if (this.open) {
        this.addOpenListeners();
        if (!this.contained) {
          this.modal.activate();
          lockBodyScrolling(this);
        }
      }
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      unlockBodyScrolling(this);
    }
    requestClose(source) {
      const slRequestClose = this.emit("sl-request-close", {
        cancelable: true,
        detail: { source }
      });
      if (slRequestClose.defaultPrevented) {
        const animation = getAnimation(this, "drawer.denyClose", { dir: this.localize.dir() });
        animateTo(this.panel, animation.keyframes, animation.options);
        return;
      }
      this.hide();
    }
    addOpenListeners() {
      document.addEventListener("keydown", this.handleDocumentKeyDown);
    }
    removeOpenListeners() {
      document.removeEventListener("keydown", this.handleDocumentKeyDown);
    }
    handleDocumentKeyDown(event) {
      if (this.open && !this.contained && event.key === "Escape") {
        event.stopPropagation();
        this.requestClose("keyboard");
      }
    }
    async handleOpenChange() {
      if (this.open) {
        this.emit("sl-show");
        this.addOpenListeners();
        this.originalTrigger = document.activeElement;
        if (!this.contained) {
          this.modal.activate();
          lockBodyScrolling(this);
        }
        const autoFocusTarget = this.querySelector("[autofocus]");
        if (autoFocusTarget) {
          autoFocusTarget.removeAttribute("autofocus");
        }
        await Promise.all([stopAnimations(this.drawer), stopAnimations(this.overlay)]);
        this.drawer.hidden = false;
        requestAnimationFrame(() => {
          const slInitialFocus = this.emit("sl-initial-focus", { cancelable: true });
          if (!slInitialFocus.defaultPrevented) {
            if (autoFocusTarget) {
              autoFocusTarget.focus({ preventScroll: true });
            } else {
              this.panel.focus({ preventScroll: true });
            }
          }
          if (autoFocusTarget) {
            autoFocusTarget.setAttribute("autofocus", "");
          }
        });
        const panelAnimation = getAnimation(this, `drawer.show${uppercaseFirstLetter(this.placement)}`, {
          dir: this.localize.dir()
        });
        const overlayAnimation = getAnimation(this, "drawer.overlay.show", { dir: this.localize.dir() });
        await Promise.all([
          animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options),
          animateTo(this.overlay, overlayAnimation.keyframes, overlayAnimation.options)
        ]);
        this.emit("sl-after-show");
      } else {
        this.emit("sl-hide");
        this.removeOpenListeners();
        if (!this.contained) {
          this.modal.deactivate();
          unlockBodyScrolling(this);
        }
        await Promise.all([stopAnimations(this.drawer), stopAnimations(this.overlay)]);
        const panelAnimation = getAnimation(this, `drawer.hide${uppercaseFirstLetter(this.placement)}`, {
          dir: this.localize.dir()
        });
        const overlayAnimation = getAnimation(this, "drawer.overlay.hide", { dir: this.localize.dir() });
        await Promise.all([
          animateTo(this.overlay, overlayAnimation.keyframes, overlayAnimation.options).then(() => {
            this.overlay.hidden = true;
          }),
          animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options).then(() => {
            this.panel.hidden = true;
          })
        ]);
        this.drawer.hidden = true;
        this.overlay.hidden = false;
        this.panel.hidden = false;
        const trigger = this.originalTrigger;
        if (typeof (trigger == null ? void 0 : trigger.focus) === "function") {
          setTimeout(() => trigger.focus());
        }
        this.emit("sl-after-hide");
      }
    }
    handleNoModalChange() {
      if (this.open && !this.contained) {
        this.modal.activate();
        lockBodyScrolling(this);
      }
      if (this.open && this.contained) {
        this.modal.deactivate();
        unlockBodyScrolling(this);
      }
    }
    /** Shows the drawer. */
    async show() {
      if (this.open) {
        return void 0;
      }
      this.open = true;
      return waitForEvent(this, "sl-after-show");
    }
    /** Hides the drawer */
    async hide() {
      if (!this.open) {
        return void 0;
      }
      this.open = false;
      return waitForEvent(this, "sl-after-hide");
    }
    render() {
      return y`
      <div
        part="base"
        class=${o5({
        drawer: true,
        "drawer--open": this.open,
        "drawer--top": this.placement === "top",
        "drawer--end": this.placement === "end",
        "drawer--bottom": this.placement === "bottom",
        "drawer--start": this.placement === "start",
        "drawer--contained": this.contained,
        "drawer--fixed": !this.contained,
        "drawer--rtl": this.localize.dir() === "rtl",
        "drawer--has-footer": this.hasSlotController.test("footer")
      })}
      >
        <div part="overlay" class="drawer__overlay" @click=${() => this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open ? "false" : "true"}
          aria-label=${l5(this.noHeader ? this.label : void 0)}
          aria-labelledby=${l5(!this.noHeader ? "title" : void 0)}
          tabindex="0"
        >
          ${!this.noHeader ? y`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length > 0 ? this.label : String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${() => this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              ` : ""}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `;
    }
  };
  SlDrawer.styles = drawer_styles_default;
  __decorateClass([
    i22(".drawer")
  ], SlDrawer.prototype, "drawer", 2);
  __decorateClass([
    i22(".drawer__panel")
  ], SlDrawer.prototype, "panel", 2);
  __decorateClass([
    i22(".drawer__overlay")
  ], SlDrawer.prototype, "overlay", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlDrawer.prototype, "open", 2);
  __decorateClass([
    e22({ reflect: true })
  ], SlDrawer.prototype, "label", 2);
  __decorateClass([
    e22({ reflect: true })
  ], SlDrawer.prototype, "placement", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlDrawer.prototype, "contained", 2);
  __decorateClass([
    e22({ attribute: "no-header", type: Boolean, reflect: true })
  ], SlDrawer.prototype, "noHeader", 2);
  __decorateClass([
    watch("open", { waitUntilFirstUpdate: true })
  ], SlDrawer.prototype, "handleOpenChange", 1);
  __decorateClass([
    watch("contained", { waitUntilFirstUpdate: true })
  ], SlDrawer.prototype, "handleNoModalChange", 1);
  SlDrawer = __decorateClass([
    e5("sl-drawer")
  ], SlDrawer);
  setDefaultAnimation("drawer.showTop", {
    keyframes: [
      { opacity: 0, translate: "0 -100%" },
      { opacity: 1, translate: "0 0" }
    ],
    options: { duration: 250, easing: "ease" }
  });
  setDefaultAnimation("drawer.hideTop", {
    keyframes: [
      { opacity: 1, translate: "0 0" },
      { opacity: 0, translate: "0 -100%" }
    ],
    options: { duration: 250, easing: "ease" }
  });
  setDefaultAnimation("drawer.showEnd", {
    keyframes: [
      { opacity: 0, translate: "100%" },
      { opacity: 1, translate: "0" }
    ],
    rtlKeyframes: [
      { opacity: 0, translate: "-100%" },
      { opacity: 1, translate: "0" }
    ],
    options: { duration: 250, easing: "ease" }
  });
  setDefaultAnimation("drawer.hideEnd", {
    keyframes: [
      { opacity: 1, translate: "0" },
      { opacity: 0, translate: "100%" }
    ],
    rtlKeyframes: [
      { opacity: 1, translate: "0" },
      { opacity: 0, translate: "-100%" }
    ],
    options: { duration: 250, easing: "ease" }
  });
  setDefaultAnimation("drawer.showBottom", {
    keyframes: [
      { opacity: 0, translate: "0 100%" },
      { opacity: 1, translate: "0 0" }
    ],
    options: { duration: 250, easing: "ease" }
  });
  setDefaultAnimation("drawer.hideBottom", {
    keyframes: [
      { opacity: 1, translate: "0 0" },
      { opacity: 0, translate: "0 100%" }
    ],
    options: { duration: 250, easing: "ease" }
  });
  setDefaultAnimation("drawer.showStart", {
    keyframes: [
      { opacity: 0, translate: "-100%" },
      { opacity: 1, translate: "0" }
    ],
    rtlKeyframes: [
      { opacity: 0, translate: "100%" },
      { opacity: 1, translate: "0" }
    ],
    options: { duration: 250, easing: "ease" }
  });
  setDefaultAnimation("drawer.hideStart", {
    keyframes: [
      { opacity: 1, translate: "0" },
      { opacity: 0, translate: "-100%" }
    ],
    rtlKeyframes: [
      { opacity: 1, translate: "0" },
      { opacity: 0, translate: "100%" }
    ],
    options: { duration: 250, easing: "ease" }
  });
  setDefaultAnimation("drawer.denyClose", {
    keyframes: [{ scale: 1 }, { scale: 1.01 }, { scale: 1 }],
    options: { duration: 250 }
  });
  setDefaultAnimation("drawer.overlay.show", {
    keyframes: [{ opacity: 0 }, { opacity: 1 }],
    options: { duration: 250 }
  });
  setDefaultAnimation("drawer.overlay.hide", {
    keyframes: [{ opacity: 1 }, { opacity: 0 }],
    options: { duration: 250 }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.F7NMHBTK.js
  var SlFormatBytes = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController2(this);
      this.value = 0;
      this.unit = "byte";
      this.display = "short";
    }
    render() {
      if (isNaN(this.value)) {
        return "";
      }
      const bitPrefixes = ["", "kilo", "mega", "giga", "tera"];
      const bytePrefixes = ["", "kilo", "mega", "giga", "tera", "peta"];
      const prefix = this.unit === "bit" ? bitPrefixes : bytePrefixes;
      const index = Math.max(0, Math.min(Math.floor(Math.log10(this.value) / 3), prefix.length - 1));
      const unit = prefix[index] + this.unit;
      const valueToFormat = parseFloat((this.value / Math.pow(1e3, index)).toPrecision(3));
      return this.localize.number(valueToFormat, {
        style: "unit",
        unit,
        unitDisplay: this.display
      });
    }
  };
  __decorateClass([
    e22({ type: Number })
  ], SlFormatBytes.prototype, "value", 2);
  __decorateClass([
    e22()
  ], SlFormatBytes.prototype, "unit", 2);
  __decorateClass([
    e22()
  ], SlFormatBytes.prototype, "display", 2);
  SlFormatBytes = __decorateClass([
    e5("sl-format-bytes")
  ], SlFormatBytes);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.P2IPLWW7.js
  var SlFormatDate = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController2(this);
      this.date = /* @__PURE__ */ new Date();
      this.hourFormat = "auto";
    }
    render() {
      const date = new Date(this.date);
      const hour12 = this.hourFormat === "auto" ? void 0 : this.hourFormat === "12";
      if (isNaN(date.getMilliseconds())) {
        return void 0;
      }
      return y`
      <time datetime=${date.toISOString()}>
        ${this.localize.date(date, {
        weekday: this.weekday,
        era: this.era,
        year: this.year,
        month: this.month,
        day: this.day,
        hour: this.hour,
        minute: this.minute,
        second: this.second,
        timeZoneName: this.timeZoneName,
        timeZone: this.timeZone,
        hour12
      })}
      </time>
    `;
    }
  };
  __decorateClass([
    e22()
  ], SlFormatDate.prototype, "date", 2);
  __decorateClass([
    e22()
  ], SlFormatDate.prototype, "weekday", 2);
  __decorateClass([
    e22()
  ], SlFormatDate.prototype, "era", 2);
  __decorateClass([
    e22()
  ], SlFormatDate.prototype, "year", 2);
  __decorateClass([
    e22()
  ], SlFormatDate.prototype, "month", 2);
  __decorateClass([
    e22()
  ], SlFormatDate.prototype, "day", 2);
  __decorateClass([
    e22()
  ], SlFormatDate.prototype, "hour", 2);
  __decorateClass([
    e22()
  ], SlFormatDate.prototype, "minute", 2);
  __decorateClass([
    e22()
  ], SlFormatDate.prototype, "second", 2);
  __decorateClass([
    e22({ attribute: "time-zone-name" })
  ], SlFormatDate.prototype, "timeZoneName", 2);
  __decorateClass([
    e22({ attribute: "time-zone" })
  ], SlFormatDate.prototype, "timeZone", 2);
  __decorateClass([
    e22({ attribute: "hour-format" })
  ], SlFormatDate.prototype, "hourFormat", 2);
  SlFormatDate = __decorateClass([
    e5("sl-format-date")
  ], SlFormatDate);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.4WPEOKQ7.js
  var SlFormatNumber = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController2(this);
      this.value = 0;
      this.type = "decimal";
      this.noGrouping = false;
      this.currency = "USD";
      this.currencyDisplay = "symbol";
    }
    render() {
      if (isNaN(this.value)) {
        return "";
      }
      return this.localize.number(this.value, {
        style: this.type,
        currency: this.currency,
        currencyDisplay: this.currencyDisplay,
        useGrouping: !this.noGrouping,
        minimumIntegerDigits: this.minimumIntegerDigits,
        minimumFractionDigits: this.minimumFractionDigits,
        maximumFractionDigits: this.maximumFractionDigits,
        minimumSignificantDigits: this.minimumSignificantDigits,
        maximumSignificantDigits: this.maximumSignificantDigits
      });
    }
  };
  __decorateClass([
    e22({ type: Number })
  ], SlFormatNumber.prototype, "value", 2);
  __decorateClass([
    e22()
  ], SlFormatNumber.prototype, "type", 2);
  __decorateClass([
    e22({ attribute: "no-grouping", type: Boolean })
  ], SlFormatNumber.prototype, "noGrouping", 2);
  __decorateClass([
    e22()
  ], SlFormatNumber.prototype, "currency", 2);
  __decorateClass([
    e22({ attribute: "currency-display" })
  ], SlFormatNumber.prototype, "currencyDisplay", 2);
  __decorateClass([
    e22({ attribute: "minimum-integer-digits", type: Number })
  ], SlFormatNumber.prototype, "minimumIntegerDigits", 2);
  __decorateClass([
    e22({ attribute: "minimum-fraction-digits", type: Number })
  ], SlFormatNumber.prototype, "minimumFractionDigits", 2);
  __decorateClass([
    e22({ attribute: "maximum-fraction-digits", type: Number })
  ], SlFormatNumber.prototype, "maximumFractionDigits", 2);
  __decorateClass([
    e22({ attribute: "minimum-significant-digits", type: Number })
  ], SlFormatNumber.prototype, "minimumSignificantDigits", 2);
  __decorateClass([
    e22({ attribute: "maximum-significant-digits", type: Number })
  ], SlFormatNumber.prototype, "maximumSignificantDigits", 2);
  SlFormatNumber = __decorateClass([
    e5("sl-format-number")
  ], SlFormatNumber);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ETPBSV6E.js
  var color_picker_styles_default = i`
  ${component_styles_default}

  :host {
    --grid-width: 280px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 15px;
    --slider-handle-size: 17px;
    --swatch-size: 25px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    user-select: none;
  }

  .color-picker--inline {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
  }

  .color-picker--inline:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: var(--sl-border-radius-medium);
    border-top-right-radius: var(--sl-border-radius-medium);
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: var(--sl-transition-fast) scale;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    scale: 1.5;
  }

  .color-picker__grid-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__controls {
    padding: var(--sl-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha .color-picker__alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--sl-border-radius-circle);
    background: none;
    margin-left: var(--sl-spacing-small);
    cursor: copy;
    forced-color-adjust: none;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__preview-color--copied {
    animation: pulse 0.75s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--sl-color-primary-500);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--sl-spacing-small) var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .color-picker__user-input sl-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input sl-button-group {
    margin-left: var(--sl-spacing-small);
  }

  .color-picker__user-input sl-button {
    min-width: 3.25rem;
    max-width: 3.25rem;
    font-size: 1rem;
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0.5rem;
    justify-items: center;
    border-top: solid 1px var(--sl-color-neutral-200);
    padding: var(--sl-spacing-small);
    forced-color-adjust: none;
  }

  .color-picker__swatch {
    position: relative;
    width: var(--swatch-size);
    height: var(--swatch-size);
    border-radius: var(--sl-border-radius-small);
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%);
    background-size: 10px 10px;
    background-position: 0 0, 0 0, -5px -5px, 5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    forced-color-adjust: none;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--sl-input-height-small);
    height: var(--sl-input-height-small);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--sl-input-height-medium);
    height: var(--sl-input-height-medium);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--sl-input-height-large);
    height: var(--sl-input-height-large);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow: inset 0 0 0 2px var(--sl-input-border-color), inset 0 0 0 4px var(--sl-color-neutral-0);
  }

  .color-dropdown__trigger--empty:before {
    background-color: transparent;
  }

  .color-dropdown__trigger:focus-visible {
    outline: none;
  }

  .color-dropdown__trigger:focus-visible:not(.color-dropdown__trigger--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.NAZTXC75.js
  function bound01(n9, max) {
    if (isOnePointZero(n9)) {
      n9 = "100%";
    }
    var isPercent = isPercentage(n9);
    n9 = max === 360 ? n9 : Math.min(max, Math.max(0, parseFloat(n9)));
    if (isPercent) {
      n9 = parseInt(String(n9 * max), 10) / 100;
    }
    if (Math.abs(n9 - max) < 1e-6) {
      return 1;
    }
    if (max === 360) {
      n9 = (n9 < 0 ? n9 % max + max : n9 % max) / parseFloat(String(max));
    } else {
      n9 = n9 % max / parseFloat(String(max));
    }
    return n9;
  }
  function clamp01(val) {
    return Math.min(1, Math.max(0, val));
  }
  function isOnePointZero(n9) {
    return typeof n9 === "string" && n9.indexOf(".") !== -1 && parseFloat(n9) === 1;
  }
  function isPercentage(n9) {
    return typeof n9 === "string" && n9.indexOf("%") !== -1;
  }
  function boundAlpha(a5) {
    a5 = parseFloat(a5);
    if (isNaN(a5) || a5 < 0 || a5 > 1) {
      a5 = 1;
    }
    return a5;
  }
  function convertToPercentage(n9) {
    if (n9 <= 1) {
      return "".concat(Number(n9) * 100, "%");
    }
    return n9;
  }
  function pad2(c4) {
    return c4.length === 1 ? "0" + c4 : String(c4);
  }
  function rgbToRgb(r5, g3, b3) {
    return {
      r: bound01(r5, 255) * 255,
      g: bound01(g3, 255) * 255,
      b: bound01(b3, 255) * 255
    };
  }
  function rgbToHsl(r5, g3, b3) {
    r5 = bound01(r5, 255);
    g3 = bound01(g3, 255);
    b3 = bound01(b3, 255);
    var max = Math.max(r5, g3, b3);
    var min = Math.min(r5, g3, b3);
    var h4 = 0;
    var s8 = 0;
    var l24 = (max + min) / 2;
    if (max === min) {
      s8 = 0;
      h4 = 0;
    } else {
      var d4 = max - min;
      s8 = l24 > 0.5 ? d4 / (2 - max - min) : d4 / (max + min);
      switch (max) {
        case r5:
          h4 = (g3 - b3) / d4 + (g3 < b3 ? 6 : 0);
          break;
        case g3:
          h4 = (b3 - r5) / d4 + 2;
          break;
        case b3:
          h4 = (r5 - g3) / d4 + 4;
          break;
        default:
          break;
      }
      h4 /= 6;
    }
    return { h: h4, s: s8, l: l24 };
  }
  function hue2rgb(p3, q, t23) {
    if (t23 < 0) {
      t23 += 1;
    }
    if (t23 > 1) {
      t23 -= 1;
    }
    if (t23 < 1 / 6) {
      return p3 + (q - p3) * (6 * t23);
    }
    if (t23 < 1 / 2) {
      return q;
    }
    if (t23 < 2 / 3) {
      return p3 + (q - p3) * (2 / 3 - t23) * 6;
    }
    return p3;
  }
  function hslToRgb(h4, s8, l24) {
    var r5;
    var g3;
    var b3;
    h4 = bound01(h4, 360);
    s8 = bound01(s8, 100);
    l24 = bound01(l24, 100);
    if (s8 === 0) {
      g3 = l24;
      b3 = l24;
      r5 = l24;
    } else {
      var q = l24 < 0.5 ? l24 * (1 + s8) : l24 + s8 - l24 * s8;
      var p3 = 2 * l24 - q;
      r5 = hue2rgb(p3, q, h4 + 1 / 3);
      g3 = hue2rgb(p3, q, h4);
      b3 = hue2rgb(p3, q, h4 - 1 / 3);
    }
    return { r: r5 * 255, g: g3 * 255, b: b3 * 255 };
  }
  function rgbToHsv(r5, g3, b3) {
    r5 = bound01(r5, 255);
    g3 = bound01(g3, 255);
    b3 = bound01(b3, 255);
    var max = Math.max(r5, g3, b3);
    var min = Math.min(r5, g3, b3);
    var h4 = 0;
    var v3 = max;
    var d4 = max - min;
    var s8 = max === 0 ? 0 : d4 / max;
    if (max === min) {
      h4 = 0;
    } else {
      switch (max) {
        case r5:
          h4 = (g3 - b3) / d4 + (g3 < b3 ? 6 : 0);
          break;
        case g3:
          h4 = (b3 - r5) / d4 + 2;
          break;
        case b3:
          h4 = (r5 - g3) / d4 + 4;
          break;
        default:
          break;
      }
      h4 /= 6;
    }
    return { h: h4, s: s8, v: v3 };
  }
  function hsvToRgb(h4, s8, v3) {
    h4 = bound01(h4, 360) * 6;
    s8 = bound01(s8, 100);
    v3 = bound01(v3, 100);
    var i33 = Math.floor(h4);
    var f4 = h4 - i33;
    var p3 = v3 * (1 - s8);
    var q = v3 * (1 - f4 * s8);
    var t23 = v3 * (1 - (1 - f4) * s8);
    var mod = i33 % 6;
    var r5 = [v3, q, p3, p3, t23, v3][mod];
    var g3 = [t23, v3, v3, q, p3, p3][mod];
    var b3 = [p3, p3, t23, v3, v3, q][mod];
    return { r: r5 * 255, g: g3 * 255, b: b3 * 255 };
  }
  function rgbToHex(r5, g3, b3, allow3Char) {
    var hex = [
      pad2(Math.round(r5).toString(16)),
      pad2(Math.round(g3).toString(16)),
      pad2(Math.round(b3).toString(16))
    ];
    if (allow3Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1))) {
      return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }
    return hex.join("");
  }
  function rgbaToHex(r5, g3, b3, a5, allow4Char) {
    var hex = [
      pad2(Math.round(r5).toString(16)),
      pad2(Math.round(g3).toString(16)),
      pad2(Math.round(b3).toString(16)),
      pad2(convertDecimalToHex(a5))
    ];
    if (allow4Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1)) && hex[3].startsWith(hex[3].charAt(1))) {
      return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }
    return hex.join("");
  }
  function convertDecimalToHex(d4) {
    return Math.round(parseFloat(d4) * 255).toString(16);
  }
  function convertHexToDecimal(h4) {
    return parseIntFromHex(h4) / 255;
  }
  function parseIntFromHex(val) {
    return parseInt(val, 16);
  }
  function numberInputToObject(color) {
    return {
      r: color >> 16,
      g: (color & 65280) >> 8,
      b: color & 255
    };
  }
  var names = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    goldenrod: "#daa520",
    gold: "#ffd700",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavenderblush: "#fff0f5",
    lavender: "#e6e6fa",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
  };
  function inputToRGB(color) {
    var rgb = { r: 0, g: 0, b: 0 };
    var a5 = 1;
    var s8 = null;
    var v3 = null;
    var l24 = null;
    var ok = false;
    var format = false;
    if (typeof color === "string") {
      color = stringInputToObject(color);
    }
    if (typeof color === "object") {
      if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
        rgb = rgbToRgb(color.r, color.g, color.b);
        ok = true;
        format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
      } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
        s8 = convertToPercentage(color.s);
        v3 = convertToPercentage(color.v);
        rgb = hsvToRgb(color.h, s8, v3);
        ok = true;
        format = "hsv";
      } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
        s8 = convertToPercentage(color.s);
        l24 = convertToPercentage(color.l);
        rgb = hslToRgb(color.h, s8, l24);
        ok = true;
        format = "hsl";
      }
      if (Object.prototype.hasOwnProperty.call(color, "a")) {
        a5 = color.a;
      }
    }
    a5 = boundAlpha(a5);
    return {
      ok,
      format: color.format || format,
      r: Math.min(255, Math.max(rgb.r, 0)),
      g: Math.min(255, Math.max(rgb.g, 0)),
      b: Math.min(255, Math.max(rgb.b, 0)),
      a: a5
    };
  }
  var CSS_INTEGER = "[-\\+]?\\d+%?";
  var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
  var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")");
  var PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
  var PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
  var matchers = {
    CSS_UNIT: new RegExp(CSS_UNIT),
    rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
    rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
    hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
    hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
    hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
    hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  };
  function stringInputToObject(color) {
    color = color.trim().toLowerCase();
    if (color.length === 0) {
      return false;
    }
    var named = false;
    if (names[color]) {
      color = names[color];
      named = true;
    } else if (color === "transparent") {
      return { r: 0, g: 0, b: 0, a: 0, format: "name" };
    }
    var match = matchers.rgb.exec(color);
    if (match) {
      return { r: match[1], g: match[2], b: match[3] };
    }
    match = matchers.rgba.exec(color);
    if (match) {
      return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    match = matchers.hsl.exec(color);
    if (match) {
      return { h: match[1], s: match[2], l: match[3] };
    }
    match = matchers.hsla.exec(color);
    if (match) {
      return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    match = matchers.hsv.exec(color);
    if (match) {
      return { h: match[1], s: match[2], v: match[3] };
    }
    match = matchers.hsva.exec(color);
    if (match) {
      return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    match = matchers.hex8.exec(color);
    if (match) {
      return {
        r: parseIntFromHex(match[1]),
        g: parseIntFromHex(match[2]),
        b: parseIntFromHex(match[3]),
        a: convertHexToDecimal(match[4]),
        format: named ? "name" : "hex8"
      };
    }
    match = matchers.hex6.exec(color);
    if (match) {
      return {
        r: parseIntFromHex(match[1]),
        g: parseIntFromHex(match[2]),
        b: parseIntFromHex(match[3]),
        format: named ? "name" : "hex"
      };
    }
    match = matchers.hex4.exec(color);
    if (match) {
      return {
        r: parseIntFromHex(match[1] + match[1]),
        g: parseIntFromHex(match[2] + match[2]),
        b: parseIntFromHex(match[3] + match[3]),
        a: convertHexToDecimal(match[4] + match[4]),
        format: named ? "name" : "hex8"
      };
    }
    match = matchers.hex3.exec(color);
    if (match) {
      return {
        r: parseIntFromHex(match[1] + match[1]),
        g: parseIntFromHex(match[2] + match[2]),
        b: parseIntFromHex(match[3] + match[3]),
        format: named ? "name" : "hex"
      };
    }
    return false;
  }
  function isValidCSSUnit(color) {
    return Boolean(matchers.CSS_UNIT.exec(String(color)));
  }
  var TinyColor = (
    /** @class */
    function() {
      function TinyColor2(color, opts) {
        if (color === void 0) {
          color = "";
        }
        if (opts === void 0) {
          opts = {};
        }
        var _a;
        if (color instanceof TinyColor2) {
          return color;
        }
        if (typeof color === "number") {
          color = numberInputToObject(color);
        }
        this.originalInput = color;
        var rgb = inputToRGB(color);
        this.originalInput = color;
        this.r = rgb.r;
        this.g = rgb.g;
        this.b = rgb.b;
        this.a = rgb.a;
        this.roundA = Math.round(100 * this.a) / 100;
        this.format = (_a = opts.format) !== null && _a !== void 0 ? _a : rgb.format;
        this.gradientType = opts.gradientType;
        if (this.r < 1) {
          this.r = Math.round(this.r);
        }
        if (this.g < 1) {
          this.g = Math.round(this.g);
        }
        if (this.b < 1) {
          this.b = Math.round(this.b);
        }
        this.isValid = rgb.ok;
      }
      TinyColor2.prototype.isDark = function() {
        return this.getBrightness() < 128;
      };
      TinyColor2.prototype.isLight = function() {
        return !this.isDark();
      };
      TinyColor2.prototype.getBrightness = function() {
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
      };
      TinyColor2.prototype.getLuminance = function() {
        var rgb = this.toRgb();
        var R3;
        var G2;
        var B;
        var RsRGB = rgb.r / 255;
        var GsRGB = rgb.g / 255;
        var BsRGB = rgb.b / 255;
        if (RsRGB <= 0.03928) {
          R3 = RsRGB / 12.92;
        } else {
          R3 = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
        }
        if (GsRGB <= 0.03928) {
          G2 = GsRGB / 12.92;
        } else {
          G2 = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
        }
        if (BsRGB <= 0.03928) {
          B = BsRGB / 12.92;
        } else {
          B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
        }
        return 0.2126 * R3 + 0.7152 * G2 + 0.0722 * B;
      };
      TinyColor2.prototype.getAlpha = function() {
        return this.a;
      };
      TinyColor2.prototype.setAlpha = function(alpha) {
        this.a = boundAlpha(alpha);
        this.roundA = Math.round(100 * this.a) / 100;
        return this;
      };
      TinyColor2.prototype.isMonochrome = function() {
        var s8 = this.toHsl().s;
        return s8 === 0;
      };
      TinyColor2.prototype.toHsv = function() {
        var hsv = rgbToHsv(this.r, this.g, this.b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this.a };
      };
      TinyColor2.prototype.toHsvString = function() {
        var hsv = rgbToHsv(this.r, this.g, this.b);
        var h4 = Math.round(hsv.h * 360);
        var s8 = Math.round(hsv.s * 100);
        var v3 = Math.round(hsv.v * 100);
        return this.a === 1 ? "hsv(".concat(h4, ", ").concat(s8, "%, ").concat(v3, "%)") : "hsva(".concat(h4, ", ").concat(s8, "%, ").concat(v3, "%, ").concat(this.roundA, ")");
      };
      TinyColor2.prototype.toHsl = function() {
        var hsl = rgbToHsl(this.r, this.g, this.b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this.a };
      };
      TinyColor2.prototype.toHslString = function() {
        var hsl = rgbToHsl(this.r, this.g, this.b);
        var h4 = Math.round(hsl.h * 360);
        var s8 = Math.round(hsl.s * 100);
        var l24 = Math.round(hsl.l * 100);
        return this.a === 1 ? "hsl(".concat(h4, ", ").concat(s8, "%, ").concat(l24, "%)") : "hsla(".concat(h4, ", ").concat(s8, "%, ").concat(l24, "%, ").concat(this.roundA, ")");
      };
      TinyColor2.prototype.toHex = function(allow3Char) {
        if (allow3Char === void 0) {
          allow3Char = false;
        }
        return rgbToHex(this.r, this.g, this.b, allow3Char);
      };
      TinyColor2.prototype.toHexString = function(allow3Char) {
        if (allow3Char === void 0) {
          allow3Char = false;
        }
        return "#" + this.toHex(allow3Char);
      };
      TinyColor2.prototype.toHex8 = function(allow4Char) {
        if (allow4Char === void 0) {
          allow4Char = false;
        }
        return rgbaToHex(this.r, this.g, this.b, this.a, allow4Char);
      };
      TinyColor2.prototype.toHex8String = function(allow4Char) {
        if (allow4Char === void 0) {
          allow4Char = false;
        }
        return "#" + this.toHex8(allow4Char);
      };
      TinyColor2.prototype.toRgb = function() {
        return {
          r: Math.round(this.r),
          g: Math.round(this.g),
          b: Math.round(this.b),
          a: this.a
        };
      };
      TinyColor2.prototype.toRgbString = function() {
        var r5 = Math.round(this.r);
        var g3 = Math.round(this.g);
        var b3 = Math.round(this.b);
        return this.a === 1 ? "rgb(".concat(r5, ", ").concat(g3, ", ").concat(b3, ")") : "rgba(".concat(r5, ", ").concat(g3, ", ").concat(b3, ", ").concat(this.roundA, ")");
      };
      TinyColor2.prototype.toPercentageRgb = function() {
        var fmt = function(x3) {
          return "".concat(Math.round(bound01(x3, 255) * 100), "%");
        };
        return {
          r: fmt(this.r),
          g: fmt(this.g),
          b: fmt(this.b),
          a: this.a
        };
      };
      TinyColor2.prototype.toPercentageRgbString = function() {
        var rnd = function(x3) {
          return Math.round(bound01(x3, 255) * 100);
        };
        return this.a === 1 ? "rgb(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%)") : "rgba(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%, ").concat(this.roundA, ")");
      };
      TinyColor2.prototype.toName = function() {
        if (this.a === 0) {
          return "transparent";
        }
        if (this.a < 1) {
          return false;
        }
        var hex = "#" + rgbToHex(this.r, this.g, this.b, false);
        for (var _i = 0, _a = Object.entries(names); _i < _a.length; _i++) {
          var _b = _a[_i], key = _b[0], value = _b[1];
          if (hex === value) {
            return key;
          }
        }
        return false;
      };
      TinyColor2.prototype.toString = function(format) {
        var formatSet = Boolean(format);
        format = format !== null && format !== void 0 ? format : this.format;
        var formattedString = false;
        var hasAlpha = this.a < 1 && this.a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format.startsWith("hex") || format === "name");
        if (needsAlphaFormat) {
          if (format === "name" && this.a === 0) {
            return this.toName();
          }
          return this.toRgbString();
        }
        if (format === "rgb") {
          formattedString = this.toRgbString();
        }
        if (format === "prgb") {
          formattedString = this.toPercentageRgbString();
        }
        if (format === "hex" || format === "hex6") {
          formattedString = this.toHexString();
        }
        if (format === "hex3") {
          formattedString = this.toHexString(true);
        }
        if (format === "hex4") {
          formattedString = this.toHex8String(true);
        }
        if (format === "hex8") {
          formattedString = this.toHex8String();
        }
        if (format === "name") {
          formattedString = this.toName();
        }
        if (format === "hsl") {
          formattedString = this.toHslString();
        }
        if (format === "hsv") {
          formattedString = this.toHsvString();
        }
        return formattedString || this.toHexString();
      };
      TinyColor2.prototype.toNumber = function() {
        return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
      };
      TinyColor2.prototype.clone = function() {
        return new TinyColor2(this.toString());
      };
      TinyColor2.prototype.lighten = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        var hsl = this.toHsl();
        hsl.l += amount / 100;
        hsl.l = clamp01(hsl.l);
        return new TinyColor2(hsl);
      };
      TinyColor2.prototype.brighten = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        var rgb = this.toRgb();
        rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
        rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
        rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
        return new TinyColor2(rgb);
      };
      TinyColor2.prototype.darken = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        var hsl = this.toHsl();
        hsl.l -= amount / 100;
        hsl.l = clamp01(hsl.l);
        return new TinyColor2(hsl);
      };
      TinyColor2.prototype.tint = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        return this.mix("white", amount);
      };
      TinyColor2.prototype.shade = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        return this.mix("black", amount);
      };
      TinyColor2.prototype.desaturate = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        var hsl = this.toHsl();
        hsl.s -= amount / 100;
        hsl.s = clamp01(hsl.s);
        return new TinyColor2(hsl);
      };
      TinyColor2.prototype.saturate = function(amount) {
        if (amount === void 0) {
          amount = 10;
        }
        var hsl = this.toHsl();
        hsl.s += amount / 100;
        hsl.s = clamp01(hsl.s);
        return new TinyColor2(hsl);
      };
      TinyColor2.prototype.greyscale = function() {
        return this.desaturate(100);
      };
      TinyColor2.prototype.spin = function(amount) {
        var hsl = this.toHsl();
        var hue = (hsl.h + amount) % 360;
        hsl.h = hue < 0 ? 360 + hue : hue;
        return new TinyColor2(hsl);
      };
      TinyColor2.prototype.mix = function(color, amount) {
        if (amount === void 0) {
          amount = 50;
        }
        var rgb1 = this.toRgb();
        var rgb2 = new TinyColor2(color).toRgb();
        var p3 = amount / 100;
        var rgba = {
          r: (rgb2.r - rgb1.r) * p3 + rgb1.r,
          g: (rgb2.g - rgb1.g) * p3 + rgb1.g,
          b: (rgb2.b - rgb1.b) * p3 + rgb1.b,
          a: (rgb2.a - rgb1.a) * p3 + rgb1.a
        };
        return new TinyColor2(rgba);
      };
      TinyColor2.prototype.analogous = function(results, slices) {
        if (results === void 0) {
          results = 6;
        }
        if (slices === void 0) {
          slices = 30;
        }
        var hsl = this.toHsl();
        var part = 360 / slices;
        var ret = [this];
        for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results; ) {
          hsl.h = (hsl.h + part) % 360;
          ret.push(new TinyColor2(hsl));
        }
        return ret;
      };
      TinyColor2.prototype.complement = function() {
        var hsl = this.toHsl();
        hsl.h = (hsl.h + 180) % 360;
        return new TinyColor2(hsl);
      };
      TinyColor2.prototype.monochromatic = function(results) {
        if (results === void 0) {
          results = 6;
        }
        var hsv = this.toHsv();
        var h4 = hsv.h;
        var s8 = hsv.s;
        var v3 = hsv.v;
        var res = [];
        var modification = 1 / results;
        while (results--) {
          res.push(new TinyColor2({ h: h4, s: s8, v: v3 }));
          v3 = (v3 + modification) % 1;
        }
        return res;
      };
      TinyColor2.prototype.splitcomplement = function() {
        var hsl = this.toHsl();
        var h4 = hsl.h;
        return [
          this,
          new TinyColor2({ h: (h4 + 72) % 360, s: hsl.s, l: hsl.l }),
          new TinyColor2({ h: (h4 + 216) % 360, s: hsl.s, l: hsl.l })
        ];
      };
      TinyColor2.prototype.onBackground = function(background) {
        var fg = this.toRgb();
        var bg = new TinyColor2(background).toRgb();
        return new TinyColor2({
          r: bg.r + (fg.r - bg.r) * fg.a,
          g: bg.g + (fg.g - bg.g) * fg.a,
          b: bg.b + (fg.b - bg.b) * fg.a
        });
      };
      TinyColor2.prototype.triad = function() {
        return this.polyad(3);
      };
      TinyColor2.prototype.tetrad = function() {
        return this.polyad(4);
      };
      TinyColor2.prototype.polyad = function(n9) {
        var hsl = this.toHsl();
        var h4 = hsl.h;
        var result = [this];
        var increment = 360 / n9;
        for (var i33 = 1; i33 < n9; i33++) {
          result.push(new TinyColor2({ h: (h4 + i33 * increment) % 360, s: hsl.s, l: hsl.l }));
        }
        return result;
      };
      TinyColor2.prototype.equals = function(color) {
        return this.toRgbString() === new TinyColor2(color).toRgbString();
      };
      return TinyColor2;
    }()
  );
  var hasEyeDropper = "EyeDropper" in window;
  var SlColorPicker = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.formControlController = new FormControlController(this);
      this.isSafeValue = false;
      this.localize = new LocalizeController2(this);
      this.hasFocus = false;
      this.isDraggingGridHandle = false;
      this.isEmpty = false;
      this.inputValue = "";
      this.hue = 0;
      this.saturation = 100;
      this.brightness = 100;
      this.alpha = 100;
      this.value = "";
      this.defaultValue = "";
      this.label = "";
      this.format = "hex";
      this.inline = false;
      this.size = "medium";
      this.noFormatToggle = false;
      this.name = "";
      this.disabled = false;
      this.hoist = false;
      this.opacity = false;
      this.uppercase = false;
      this.swatches = "";
      this.form = "";
      this.required = false;
    }
    /** Gets the validity state object */
    get validity() {
      return this.input.validity;
    }
    /** Gets the validation message */
    get validationMessage() {
      return this.input.validationMessage;
    }
    connectedCallback() {
      super.connectedCallback();
      this.handleFocusIn = this.handleFocusIn.bind(this);
      this.handleFocusOut = this.handleFocusOut.bind(this);
      this.addEventListener("focusin", this.handleFocusIn);
      this.addEventListener("focusout", this.handleFocusOut);
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this.removeEventListener("focusin", this.handleFocusIn);
      this.removeEventListener("focusout", this.handleFocusOut);
    }
    firstUpdated() {
      this.input.updateComplete.then(() => {
        this.formControlController.updateValidity();
      });
    }
    handleCopy() {
      this.input.select();
      document.execCommand("copy");
      this.previewButton.focus();
      this.previewButton.classList.add("color-picker__preview-color--copied");
      this.previewButton.addEventListener("animationend", () => {
        this.previewButton.classList.remove("color-picker__preview-color--copied");
      });
    }
    handleFocusIn() {
      this.hasFocus = true;
      this.emit("sl-focus");
    }
    handleFocusOut() {
      this.hasFocus = false;
      this.emit("sl-blur");
    }
    handleFormatToggle() {
      const formats = ["hex", "rgb", "hsl", "hsv"];
      const nextIndex = (formats.indexOf(this.format) + 1) % formats.length;
      this.format = formats[nextIndex];
      this.setColor(this.value);
      this.emit("sl-change");
      this.emit("sl-input");
    }
    handleAlphaDrag(event) {
      const container = this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha");
      const handle = container.querySelector(".color-picker__slider-handle");
      const { width } = container.getBoundingClientRect();
      let oldValue = this.value;
      handle.focus();
      event.preventDefault();
      drag(container, {
        onMove: (x3) => {
          this.alpha = clamp(x3 / width * 100, 0, 100);
          this.syncValues();
          if (this.value !== oldValue) {
            oldValue = this.value;
            this.emit("sl-change");
            this.emit("sl-input");
          }
        },
        initialEvent: event
      });
    }
    handleHueDrag(event) {
      const container = this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue");
      const handle = container.querySelector(".color-picker__slider-handle");
      const { width } = container.getBoundingClientRect();
      let oldValue = this.value;
      handle.focus();
      event.preventDefault();
      drag(container, {
        onMove: (x3) => {
          this.hue = clamp(x3 / width * 360, 0, 360);
          this.syncValues();
          if (this.value !== oldValue) {
            oldValue = this.value;
            this.emit("sl-change");
            this.emit("sl-input");
          }
        },
        initialEvent: event
      });
    }
    handleGridDrag(event) {
      const grid = this.shadowRoot.querySelector(".color-picker__grid");
      const handle = grid.querySelector(".color-picker__grid-handle");
      const { width, height } = grid.getBoundingClientRect();
      let oldValue = this.value;
      handle.focus();
      event.preventDefault();
      this.isDraggingGridHandle = true;
      drag(grid, {
        onMove: (x3, y22) => {
          this.saturation = clamp(x3 / width * 100, 0, 100);
          this.brightness = clamp(100 - y22 / height * 100, 0, 100);
          this.syncValues();
          if (this.value !== oldValue) {
            oldValue = this.value;
            this.emit("sl-change");
            this.emit("sl-input");
          }
        },
        onStop: () => this.isDraggingGridHandle = false,
        initialEvent: event
      });
    }
    handleAlphaKeyDown(event) {
      const increment = event.shiftKey ? 10 : 1;
      const oldValue = this.value;
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        this.alpha = clamp(this.alpha - increment, 0, 100);
        this.syncValues();
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        this.alpha = clamp(this.alpha + increment, 0, 100);
        this.syncValues();
      }
      if (event.key === "Home") {
        event.preventDefault();
        this.alpha = 0;
        this.syncValues();
      }
      if (event.key === "End") {
        event.preventDefault();
        this.alpha = 100;
        this.syncValues();
      }
      if (this.value !== oldValue) {
        this.emit("sl-change");
        this.emit("sl-input");
      }
    }
    handleHueKeyDown(event) {
      const increment = event.shiftKey ? 10 : 1;
      const oldValue = this.value;
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        this.hue = clamp(this.hue - increment, 0, 360);
        this.syncValues();
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        this.hue = clamp(this.hue + increment, 0, 360);
        this.syncValues();
      }
      if (event.key === "Home") {
        event.preventDefault();
        this.hue = 0;
        this.syncValues();
      }
      if (event.key === "End") {
        event.preventDefault();
        this.hue = 360;
        this.syncValues();
      }
      if (this.value !== oldValue) {
        this.emit("sl-change");
        this.emit("sl-input");
      }
    }
    handleGridKeyDown(event) {
      const increment = event.shiftKey ? 10 : 1;
      const oldValue = this.value;
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        this.saturation = clamp(this.saturation - increment, 0, 100);
        this.syncValues();
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        this.saturation = clamp(this.saturation + increment, 0, 100);
        this.syncValues();
      }
      if (event.key === "ArrowUp") {
        event.preventDefault();
        this.brightness = clamp(this.brightness + increment, 0, 100);
        this.syncValues();
      }
      if (event.key === "ArrowDown") {
        event.preventDefault();
        this.brightness = clamp(this.brightness - increment, 0, 100);
        this.syncValues();
      }
      if (this.value !== oldValue) {
        this.emit("sl-change");
        this.emit("sl-input");
      }
    }
    handleInputChange(event) {
      const target = event.target;
      const oldValue = this.value;
      event.stopPropagation();
      if (this.input.value) {
        this.setColor(target.value);
        target.value = this.value;
      } else {
        this.value = "";
      }
      if (this.value !== oldValue) {
        this.emit("sl-change");
        this.emit("sl-input");
      }
    }
    handleInputInput(event) {
      this.formControlController.updateValidity();
      event.stopPropagation();
    }
    handleInputKeyDown(event) {
      if (event.key === "Enter") {
        const oldValue = this.value;
        if (this.input.value) {
          this.setColor(this.input.value);
          this.input.value = this.value;
          if (this.value !== oldValue) {
            this.emit("sl-change");
            this.emit("sl-input");
          }
          setTimeout(() => this.input.select());
        } else {
          this.hue = 0;
        }
      }
    }
    handleInputInvalid(event) {
      this.formControlController.setValidity(false);
      this.formControlController.emitInvalidEvent(event);
    }
    handleTouchMove(event) {
      event.preventDefault();
    }
    parseColor(colorString) {
      const color = new TinyColor(colorString);
      if (!color.isValid) {
        return null;
      }
      const hslColor = color.toHsl();
      const hsl = {
        h: hslColor.h,
        s: hslColor.s * 100,
        l: hslColor.l * 100,
        a: hslColor.a
      };
      const rgb = color.toRgb();
      const hex = color.toHexString();
      const hexa = color.toHex8String();
      const hsvColor = color.toHsv();
      const hsv = {
        h: hsvColor.h,
        s: hsvColor.s * 100,
        v: hsvColor.v * 100,
        a: hsvColor.a
      };
      return {
        hsl: {
          h: hsl.h,
          s: hsl.s,
          l: hsl.l,
          string: this.setLetterCase(`hsl(${Math.round(hsl.h)}, ${Math.round(hsl.s)}%, ${Math.round(hsl.l)}%)`)
        },
        hsla: {
          h: hsl.h,
          s: hsl.s,
          l: hsl.l,
          a: hsl.a,
          string: this.setLetterCase(
            `hsla(${Math.round(hsl.h)}, ${Math.round(hsl.s)}%, ${Math.round(hsl.l)}%, ${hsl.a.toFixed(2).toString()})`
          )
        },
        hsv: {
          h: hsv.h,
          s: hsv.s,
          v: hsv.v,
          string: this.setLetterCase(`hsv(${Math.round(hsv.h)}, ${Math.round(hsv.s)}%, ${Math.round(hsv.v)}%)`)
        },
        hsva: {
          h: hsv.h,
          s: hsv.s,
          v: hsv.v,
          a: hsv.a,
          string: this.setLetterCase(
            `hsva(${Math.round(hsv.h)}, ${Math.round(hsv.s)}%, ${Math.round(hsv.v)}%, ${hsv.a.toFixed(2).toString()})`
          )
        },
        rgb: {
          r: rgb.r,
          g: rgb.g,
          b: rgb.b,
          string: this.setLetterCase(`rgb(${Math.round(rgb.r)}, ${Math.round(rgb.g)}, ${Math.round(rgb.b)})`)
        },
        rgba: {
          r: rgb.r,
          g: rgb.g,
          b: rgb.b,
          a: rgb.a,
          string: this.setLetterCase(
            `rgba(${Math.round(rgb.r)}, ${Math.round(rgb.g)}, ${Math.round(rgb.b)}, ${rgb.a.toFixed(2).toString()})`
          )
        },
        hex: this.setLetterCase(hex),
        hexa: this.setLetterCase(hexa)
      };
    }
    setColor(colorString) {
      const newColor = this.parseColor(colorString);
      if (newColor === null) {
        return false;
      }
      this.hue = newColor.hsva.h;
      this.saturation = newColor.hsva.s;
      this.brightness = newColor.hsva.v;
      this.alpha = this.opacity ? newColor.hsva.a * 100 : 100;
      this.syncValues();
      return true;
    }
    setLetterCase(string) {
      if (typeof string !== "string") {
        return "";
      }
      return this.uppercase ? string.toUpperCase() : string.toLowerCase();
    }
    async syncValues() {
      const currentColor = this.parseColor(
        `hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha / 100})`
      );
      if (currentColor === null) {
        return;
      }
      if (this.format === "hsl") {
        this.inputValue = this.opacity ? currentColor.hsla.string : currentColor.hsl.string;
      } else if (this.format === "rgb") {
        this.inputValue = this.opacity ? currentColor.rgba.string : currentColor.rgb.string;
      } else if (this.format === "hsv") {
        this.inputValue = this.opacity ? currentColor.hsva.string : currentColor.hsv.string;
      } else {
        this.inputValue = this.opacity ? currentColor.hexa : currentColor.hex;
      }
      this.isSafeValue = true;
      this.value = this.inputValue;
      await this.updateComplete;
      this.isSafeValue = false;
    }
    handleAfterHide() {
      this.previewButton.classList.remove("color-picker__preview-color--copied");
    }
    handleEyeDropper() {
      if (!hasEyeDropper) {
        return;
      }
      const eyeDropper = new EyeDropper();
      eyeDropper.open().then((colorSelectionResult) => {
        const oldValue = this.value;
        this.setColor(colorSelectionResult.sRGBHex);
        if (this.value !== oldValue) {
          this.emit("sl-change");
          this.emit("sl-input");
        }
      }).catch(() => {
      });
    }
    selectSwatch(color) {
      const oldValue = this.value;
      if (!this.disabled) {
        this.setColor(color);
        if (this.value !== oldValue) {
          this.emit("sl-change");
          this.emit("sl-input");
        }
      }
    }
    /** Generates a hex string from HSV values. Hue must be 0-360. All other arguments must be 0-100. */
    getHexString(hue, saturation, brightness, alpha = 100) {
      const color = new TinyColor(`hsva(${hue}, ${saturation}, ${brightness}, ${alpha / 100})`);
      if (!color.isValid) {
        return "";
      }
      return color.toHex8String();
    }
    // Prevents nested components from leaking events
    stopNestedEventPropagation(event) {
      event.stopImmediatePropagation();
    }
    handleFormatChange() {
      this.syncValues();
    }
    handleOpacityChange() {
      this.alpha = 100;
    }
    handleValueChange(oldValue, newValue) {
      this.isEmpty = !newValue;
      if (!newValue) {
        this.hue = 0;
        this.saturation = 0;
        this.brightness = 100;
        this.alpha = 100;
      }
      if (!this.isSafeValue) {
        const newColor = this.parseColor(newValue);
        if (newColor !== null) {
          this.inputValue = this.value;
          this.hue = newColor.hsva.h;
          this.saturation = newColor.hsva.s;
          this.brightness = newColor.hsva.v;
          this.alpha = newColor.hsva.a * 100;
          this.syncValues();
        } else {
          this.inputValue = oldValue != null ? oldValue : "";
        }
      }
    }
    /** Sets focus on the color picker. */
    focus(options) {
      if (this.inline) {
        this.base.focus(options);
      } else {
        this.trigger.focus(options);
      }
    }
    /** Removes focus from the color picker. */
    blur() {
      var _a;
      const elementToBlur = this.inline ? this.base : this.trigger;
      if (this.hasFocus) {
        elementToBlur.focus({ preventScroll: true });
        elementToBlur.blur();
      }
      if ((_a = this.dropdown) == null ? void 0 : _a.open) {
        this.dropdown.hide();
      }
    }
    /** Returns the current value as a string in the specified format. */
    getFormattedValue(format = "hex") {
      const currentColor = this.parseColor(
        `hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha / 100})`
      );
      if (currentColor === null) {
        return "";
      }
      switch (format) {
        case "hex":
          return currentColor.hex;
        case "hexa":
          return currentColor.hexa;
        case "rgb":
          return currentColor.rgb.string;
        case "rgba":
          return currentColor.rgba.string;
        case "hsl":
          return currentColor.hsl.string;
        case "hsla":
          return currentColor.hsla.string;
        case "hsv":
          return currentColor.hsv.string;
        case "hsva":
          return currentColor.hsva.string;
        default:
          return "";
      }
    }
    /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
    checkValidity() {
      return this.input.checkValidity();
    }
    /** Gets the associated form, if one exists. */
    getForm() {
      return this.formControlController.getForm();
    }
    /** Checks for validity and shows the browser's validation message if the control is invalid. */
    reportValidity() {
      if (!this.inline && !this.validity.valid) {
        this.dropdown.show();
        this.addEventListener("sl-after-show", () => this.input.reportValidity(), { once: true });
        if (!this.disabled) {
          this.formControlController.emitInvalidEvent();
        }
        return false;
      }
      return this.input.reportValidity();
    }
    /** Sets a custom validation message. Pass an empty string to restore validity. */
    setCustomValidity(message) {
      this.input.setCustomValidity(message);
      this.formControlController.updateValidity();
    }
    render() {
      const gridHandleX = this.saturation;
      const gridHandleY = 100 - this.brightness;
      const swatches = Array.isArray(this.swatches) ? this.swatches : this.swatches.split(";").filter((color) => color.trim() !== "");
      const colorPicker = y`
      <div
        part="base"
        class=${o5({
        "color-picker": true,
        "color-picker--inline": this.inline,
        "color-picker--disabled": this.disabled,
        "color-picker--focused": this.hasFocus
      })}
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-labelledby="label"
        tabindex=${this.inline ? "0" : "-1"}
      >
        ${this.inline ? y`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            ` : null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${i23({ backgroundColor: this.getHexString(this.hue, 100, 100) })}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${o5({
        "color-picker__grid-handle": true,
        "color-picker__grid-handle--dragging": this.isDraggingGridHandle
      })}
            style=${i23({
        top: `${gridHandleY}%`,
        left: `${gridHandleX}%`,
        backgroundColor: this.getHexString(this.hue, this.saturation, this.brightness, this.alpha)
      })}
            role="application"
            aria-label="HSV"
            tabindex=${l5(this.disabled ? void 0 : "0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="color-picker__slider-handle"
                style=${i23({
        left: `${this.hue === 0 ? 0 : 100 / (360 / this.hue)}%`
      })}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${l5(this.disabled ? void 0 : "0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity ? y`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${i23({
        backgroundImage: `linear-gradient(
                          to right,
                          ${this.getHexString(this.hue, this.saturation, this.brightness, 0)} 0%
                          ${this.getHexString(this.hue, this.saturation, this.brightness, 100)} 100%
                        )`
      })}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${i23({
        left: `${this.alpha}%`
      })}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${l5(this.disabled ? void 0 : "0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                ` : ""}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${i23({
        "--preview-color": this.getHexString(this.hue, this.saturation, this.brightness, this.alpha)
      })}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <sl-input
            part="input"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            value=${this.isEmpty ? "" : this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
            @sl-input=${this.handleInputInput}
            @sl-invalid=${this.handleInputInvalid}
            @sl-blur=${this.stopNestedEventPropagation}
            @sl-focus=${this.stopNestedEventPropagation}
          ></sl-input>

          <sl-button-group>
            ${!this.noFormatToggle ? y`
                  <sl-button
                    part="format-button"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </sl-button>
                ` : ""}
            ${hasEyeDropper ? y`
                  <sl-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    <sl-icon
                      library="system"
                      name="eyedropper"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></sl-icon>
                  </sl-button>
                ` : ""}
          </sl-button-group>
        </div>

        ${swatches.length > 0 ? y`
              <div part="swatches" class="color-picker__swatches">
                ${swatches.map((swatch) => {
        const parsedColor = this.parseColor(swatch);
        if (!parsedColor) {
          console.error(`Unable to parse swatch color: "${swatch}"`, this);
          return "";
        }
        return y`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${l5(this.disabled ? void 0 : "0")}
                      role="button"
                      aria-label=${swatch}
                      @click=${() => this.selectSwatch(swatch)}
                      @keydown=${(event) => !this.disabled && event.key === "Enter" && this.setColor(parsedColor.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${i23({ backgroundColor: parsedColor.hexa })}
                      ></div>
                    </div>
                  `;
      })}
              </div>
            ` : ""}
      </div>
    `;
      if (this.inline) {
        return colorPicker;
      }
      return y`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled ? "true" : "false"}
        .containing-element=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${o5({
        "color-dropdown__trigger": true,
        "color-dropdown__trigger--disabled": this.disabled,
        "color-dropdown__trigger--small": this.size === "small",
        "color-dropdown__trigger--medium": this.size === "medium",
        "color-dropdown__trigger--large": this.size === "large",
        "color-dropdown__trigger--empty": this.isEmpty,
        "color-dropdown__trigger--focused": this.hasFocus,
        "color-picker__transparent-bg": true
      })}
          style=${i23({
        color: this.getHexString(this.hue, this.saturation, this.brightness, this.alpha)
      })}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${colorPicker}
      </sl-dropdown>
    `;
    }
  };
  SlColorPicker.styles = color_picker_styles_default;
  __decorateClass([
    i22('[part~="base"]')
  ], SlColorPicker.prototype, "base", 2);
  __decorateClass([
    i22('[part~="input"]')
  ], SlColorPicker.prototype, "input", 2);
  __decorateClass([
    i22(".color-dropdown")
  ], SlColorPicker.prototype, "dropdown", 2);
  __decorateClass([
    i22('[part~="preview"]')
  ], SlColorPicker.prototype, "previewButton", 2);
  __decorateClass([
    i22('[part~="trigger"]')
  ], SlColorPicker.prototype, "trigger", 2);
  __decorateClass([
    t4()
  ], SlColorPicker.prototype, "hasFocus", 2);
  __decorateClass([
    t4()
  ], SlColorPicker.prototype, "isDraggingGridHandle", 2);
  __decorateClass([
    t4()
  ], SlColorPicker.prototype, "isEmpty", 2);
  __decorateClass([
    t4()
  ], SlColorPicker.prototype, "inputValue", 2);
  __decorateClass([
    t4()
  ], SlColorPicker.prototype, "hue", 2);
  __decorateClass([
    t4()
  ], SlColorPicker.prototype, "saturation", 2);
  __decorateClass([
    t4()
  ], SlColorPicker.prototype, "brightness", 2);
  __decorateClass([
    t4()
  ], SlColorPicker.prototype, "alpha", 2);
  __decorateClass([
    e22()
  ], SlColorPicker.prototype, "value", 2);
  __decorateClass([
    defaultValue()
  ], SlColorPicker.prototype, "defaultValue", 2);
  __decorateClass([
    e22()
  ], SlColorPicker.prototype, "label", 2);
  __decorateClass([
    e22()
  ], SlColorPicker.prototype, "format", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlColorPicker.prototype, "inline", 2);
  __decorateClass([
    e22()
  ], SlColorPicker.prototype, "size", 2);
  __decorateClass([
    e22({ attribute: "no-format-toggle", type: Boolean })
  ], SlColorPicker.prototype, "noFormatToggle", 2);
  __decorateClass([
    e22()
  ], SlColorPicker.prototype, "name", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlColorPicker.prototype, "disabled", 2);
  __decorateClass([
    e22({ type: Boolean })
  ], SlColorPicker.prototype, "hoist", 2);
  __decorateClass([
    e22({ type: Boolean })
  ], SlColorPicker.prototype, "opacity", 2);
  __decorateClass([
    e22({ type: Boolean })
  ], SlColorPicker.prototype, "uppercase", 2);
  __decorateClass([
    e22()
  ], SlColorPicker.prototype, "swatches", 2);
  __decorateClass([
    e22({ reflect: true })
  ], SlColorPicker.prototype, "form", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlColorPicker.prototype, "required", 2);
  __decorateClass([
    watch("format", { waitUntilFirstUpdate: true })
  ], SlColorPicker.prototype, "handleFormatChange", 1);
  __decorateClass([
    watch("opacity", { waitUntilFirstUpdate: true })
  ], SlColorPicker.prototype, "handleOpacityChange", 1);
  __decorateClass([
    watch("value")
  ], SlColorPicker.prototype, "handleValueChange", 1);
  SlColorPicker = __decorateClass([
    e5("sl-color-picker")
  ], SlColorPicker);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.UFTP7SAL.js
  var visually_hidden_styles_default = i`
  ${component_styles_default}

  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.VEZFXLS5.js
  var SlVisuallyHidden = class extends ShoelaceElement {
    render() {
      return y` <slot></slot> `;
    }
  };
  SlVisuallyHidden.styles = visually_hidden_styles_default;
  SlVisuallyHidden = __decorateClass([
    e5("sl-visually-hidden")
  ], SlVisuallyHidden);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ZTDRT4JJ.js
  var input_styles_default = i`
  ${component_styles_default}
  ${form_control_styles_default}

  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix::slotted(sl-icon),
  .input__suffix::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  .input--empty .input__clear {
    visibility: hidden;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.R4E7437B.js
  var SlInput = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.formControlController = new FormControlController(this, {
        assumeInteractionOn: ["sl-blur", "sl-input"]
      });
      this.hasSlotController = new HasSlotController(this, "help-text", "label");
      this.localize = new LocalizeController2(this);
      this.hasFocus = false;
      this.title = "";
      this.type = "text";
      this.name = "";
      this.value = "";
      this.defaultValue = "";
      this.size = "medium";
      this.filled = false;
      this.pill = false;
      this.label = "";
      this.helpText = "";
      this.clearable = false;
      this.disabled = false;
      this.placeholder = "";
      this.readonly = false;
      this.passwordToggle = false;
      this.passwordVisible = false;
      this.noSpinButtons = false;
      this.form = "";
      this.required = false;
      this.spellcheck = true;
    }
    //
    // NOTE: We use an in-memory input for these getters/setters instead of the one in the template because the properties
    // can be set before the component is rendered.
    //
    /** Gets or sets the current value as a `Date` object. Returns `null` if the value can't be converted. */
    get valueAsDate() {
      const input = document.createElement("input");
      input.type = "date";
      input.value = this.value;
      return input.valueAsDate;
    }
    set valueAsDate(newValue) {
      const input = document.createElement("input");
      input.type = "date";
      input.valueAsDate = newValue;
      this.value = input.value;
    }
    /** Gets or sets the current value as a number. Returns `NaN` if the value can't be converted. */
    get valueAsNumber() {
      const input = document.createElement("input");
      input.type = "number";
      input.value = this.value;
      return input.valueAsNumber;
    }
    set valueAsNumber(newValue) {
      const input = document.createElement("input");
      input.type = "number";
      input.valueAsNumber = newValue;
      this.value = input.value;
    }
    /** Gets the validity state object */
    get validity() {
      return this.input.validity;
    }
    /** Gets the validation message */
    get validationMessage() {
      return this.input.validationMessage;
    }
    firstUpdated() {
      this.formControlController.updateValidity();
    }
    handleBlur() {
      this.hasFocus = false;
      this.emit("sl-blur");
    }
    handleChange() {
      this.value = this.input.value;
      this.emit("sl-change");
    }
    handleClearClick(event) {
      this.value = "";
      this.emit("sl-clear");
      this.emit("sl-input");
      this.emit("sl-change");
      this.input.focus();
      event.stopPropagation();
    }
    handleFocus() {
      this.hasFocus = true;
      this.emit("sl-focus");
    }
    handleInput() {
      this.value = this.input.value;
      this.formControlController.updateValidity();
      this.emit("sl-input");
    }
    handleInvalid(event) {
      this.formControlController.setValidity(false);
      this.formControlController.emitInvalidEvent(event);
    }
    handleKeyDown(event) {
      const hasModifier = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
      if (event.key === "Enter" && !hasModifier) {
        setTimeout(() => {
          if (!event.defaultPrevented && !event.isComposing) {
            this.formControlController.submit();
          }
        });
      }
    }
    handlePasswordToggle() {
      this.passwordVisible = !this.passwordVisible;
    }
    handleDisabledChange() {
      this.formControlController.setValidity(this.disabled);
    }
    handleStepChange() {
      this.input.step = String(this.step);
      this.formControlController.updateValidity();
    }
    async handleValueChange() {
      await this.updateComplete;
      this.formControlController.updateValidity();
    }
    /** Sets focus on the input. */
    focus(options) {
      this.input.focus(options);
    }
    /** Removes focus from the input. */
    blur() {
      this.input.blur();
    }
    /** Selects all the text in the input. */
    select() {
      this.input.select();
    }
    /** Sets the start and end positions of the text selection (0-based). */
    setSelectionRange(selectionStart, selectionEnd, selectionDirection = "none") {
      this.input.setSelectionRange(selectionStart, selectionEnd, selectionDirection);
    }
    /** Replaces a range of text with a new string. */
    setRangeText(replacement, start, end, selectMode) {
      this.input.setRangeText(replacement, start, end, selectMode);
      if (this.value !== this.input.value) {
        this.value = this.input.value;
      }
    }
    /** Displays the browser picker for an input element (only works if the browser supports it for the input type). */
    showPicker() {
      if ("showPicker" in HTMLInputElement.prototype) {
        this.input.showPicker();
      }
    }
    /** Increments the value of a numeric input type by the value of the step attribute. */
    stepUp() {
      this.input.stepUp();
      if (this.value !== this.input.value) {
        this.value = this.input.value;
      }
    }
    /** Decrements the value of a numeric input type by the value of the step attribute. */
    stepDown() {
      this.input.stepDown();
      if (this.value !== this.input.value) {
        this.value = this.input.value;
      }
    }
    /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
    checkValidity() {
      return this.input.checkValidity();
    }
    /** Gets the associated form, if one exists. */
    getForm() {
      return this.formControlController.getForm();
    }
    /** Checks for validity and shows the browser's validation message if the control is invalid. */
    reportValidity() {
      return this.input.reportValidity();
    }
    /** Sets a custom validation message. Pass an empty string to restore validity. */
    setCustomValidity(message) {
      this.input.setCustomValidity(message);
      this.formControlController.updateValidity();
    }
    render() {
      const hasLabelSlot = this.hasSlotController.test("label");
      const hasHelpTextSlot = this.hasSlotController.test("help-text");
      const hasLabel = this.label ? true : !!hasLabelSlot;
      const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
      const hasClearIcon = this.clearable && !this.disabled && !this.readonly && (typeof this.value === "number" || this.value.length > 0);
      return y`
      <div
        part="form-control"
        class=${o5({
        "form-control": true,
        "form-control--small": this.size === "small",
        "form-control--medium": this.size === "medium",
        "form-control--large": this.size === "large",
        "form-control--has-label": hasLabel,
        "form-control--has-help-text": hasHelpText
      })}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${hasLabel ? "false" : "true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${o5({
        input: true,
        // Sizes
        "input--small": this.size === "small",
        "input--medium": this.size === "medium",
        "input--large": this.size === "large",
        // States
        "input--pill": this.pill,
        "input--standard": !this.filled,
        "input--filled": this.filled,
        "input--disabled": this.disabled,
        "input--focused": this.hasFocus,
        "input--empty": !this.value,
        "input--no-spin-buttons": this.noSpinButtons
      })}
          >
            <slot name="prefix" part="prefix" class="input__prefix"></slot>
            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type === "password" && this.passwordVisible ? "text" : this.type}
              title=${this.title}
              name=${l5(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${l5(this.placeholder)}
              minlength=${l5(this.minlength)}
              maxlength=${l5(this.maxlength)}
              min=${l5(this.min)}
              max=${l5(this.max)}
              step=${l5(this.step)}
              .value=${l22(this.value)}
              autocapitalize=${l5(this.autocapitalize)}
              autocomplete=${l5(this.autocomplete)}
              autocorrect=${l5(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${l5(this.pattern)}
              enterkeyhint=${l5(this.enterkeyhint)}
              inputmode=${l5(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${hasClearIcon ? y`
                    <button
                      part="clear-button"
                      class="input__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  ` : ""}
            ${this.passwordToggle && !this.disabled ? y`
                    <button
                      part="password-toggle-button"
                      class="input__password-toggle"
                      type="button"
                      aria-label=${this.localize.term(this.passwordVisible ? "hidePassword" : "showPassword")}
                      @click=${this.handlePasswordToggle}
                      tabindex="-1"
                    >
                      ${this.passwordVisible ? y`
                            <slot name="show-password-icon">
                              <sl-icon name="eye-slash" library="system"></sl-icon>
                            </slot>
                          ` : y`
                            <slot name="hide-password-icon">
                              <sl-icon name="eye" library="system"></sl-icon>
                            </slot>
                          `}
                    </button>
                  ` : ""}

            <slot name="suffix" part="suffix" class="input__suffix"></slot>
          </div>
        </div>

        <slot
          name="help-text"
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${hasHelpText ? "false" : "true"}
        >
          ${this.helpText}
        </slot>
        </div>
      </div>
    `;
    }
  };
  SlInput.styles = input_styles_default;
  __decorateClass([
    i22(".input__control")
  ], SlInput.prototype, "input", 2);
  __decorateClass([
    t4()
  ], SlInput.prototype, "hasFocus", 2);
  __decorateClass([
    e22()
  ], SlInput.prototype, "title", 2);
  __decorateClass([
    e22({ reflect: true })
  ], SlInput.prototype, "type", 2);
  __decorateClass([
    e22()
  ], SlInput.prototype, "name", 2);
  __decorateClass([
    e22()
  ], SlInput.prototype, "value", 2);
  __decorateClass([
    defaultValue()
  ], SlInput.prototype, "defaultValue", 2);
  __decorateClass([
    e22({ reflect: true })
  ], SlInput.prototype, "size", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlInput.prototype, "filled", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlInput.prototype, "pill", 2);
  __decorateClass([
    e22()
  ], SlInput.prototype, "label", 2);
  __decorateClass([
    e22({ attribute: "help-text" })
  ], SlInput.prototype, "helpText", 2);
  __decorateClass([
    e22({ type: Boolean })
  ], SlInput.prototype, "clearable", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlInput.prototype, "disabled", 2);
  __decorateClass([
    e22()
  ], SlInput.prototype, "placeholder", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlInput.prototype, "readonly", 2);
  __decorateClass([
    e22({ attribute: "password-toggle", type: Boolean })
  ], SlInput.prototype, "passwordToggle", 2);
  __decorateClass([
    e22({ attribute: "password-visible", type: Boolean })
  ], SlInput.prototype, "passwordVisible", 2);
  __decorateClass([
    e22({ attribute: "no-spin-buttons", type: Boolean })
  ], SlInput.prototype, "noSpinButtons", 2);
  __decorateClass([
    e22({ reflect: true })
  ], SlInput.prototype, "form", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlInput.prototype, "required", 2);
  __decorateClass([
    e22()
  ], SlInput.prototype, "pattern", 2);
  __decorateClass([
    e22({ type: Number })
  ], SlInput.prototype, "minlength", 2);
  __decorateClass([
    e22({ type: Number })
  ], SlInput.prototype, "maxlength", 2);
  __decorateClass([
    e22()
  ], SlInput.prototype, "min", 2);
  __decorateClass([
    e22()
  ], SlInput.prototype, "max", 2);
  __decorateClass([
    e22()
  ], SlInput.prototype, "step", 2);
  __decorateClass([
    e22()
  ], SlInput.prototype, "autocapitalize", 2);
  __decorateClass([
    e22()
  ], SlInput.prototype, "autocorrect", 2);
  __decorateClass([
    e22()
  ], SlInput.prototype, "autocomplete", 2);
  __decorateClass([
    e22({ type: Boolean })
  ], SlInput.prototype, "autofocus", 2);
  __decorateClass([
    e22()
  ], SlInput.prototype, "enterkeyhint", 2);
  __decorateClass([
    e22({
      type: Boolean,
      converter: {
        // Allow "true|false" attribute values but keep the property boolean
        fromAttribute: (value) => !value || value === "false" ? false : true,
        toAttribute: (value) => value ? "true" : "false"
      }
    })
  ], SlInput.prototype, "spellcheck", 2);
  __decorateClass([
    e22()
  ], SlInput.prototype, "inputmode", 2);
  __decorateClass([
    watch("disabled", { waitUntilFirstUpdate: true })
  ], SlInput.prototype, "handleDisabledChange", 1);
  __decorateClass([
    watch("step", { waitUntilFirstUpdate: true })
  ], SlInput.prototype, "handleStepChange", 1);
  __decorateClass([
    watch("value", { waitUntilFirstUpdate: true })
  ], SlInput.prototype, "handleValueChange", 1);
  SlInput = __decorateClass([
    e5("sl-input")
  ], SlInput);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.2EORC5ML.js
  var dropdown_styles_default = i`
  ${component_styles_default}

  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ERC2CD2O.js
  var SlDropdown = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController2(this);
      this.open = false;
      this.placement = "bottom-start";
      this.disabled = false;
      this.stayOpenOnSelect = false;
      this.distance = 0;
      this.skidding = 0;
      this.hoist = false;
    }
    connectedCallback() {
      super.connectedCallback();
      this.handlePanelSelect = this.handlePanelSelect.bind(this);
      this.handleKeyDown = this.handleKeyDown.bind(this);
      this.handleDocumentKeyDown = this.handleDocumentKeyDown.bind(this);
      this.handleDocumentMouseDown = this.handleDocumentMouseDown.bind(this);
      if (!this.containingElement) {
        this.containingElement = this;
      }
    }
    firstUpdated() {
      this.panel.hidden = !this.open;
      if (this.open) {
        this.addOpenListeners();
        this.popup.active = true;
      }
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this.removeOpenListeners();
      this.hide();
    }
    focusOnTrigger() {
      const trigger = this.trigger.assignedElements({ flatten: true })[0];
      if (typeof (trigger == null ? void 0 : trigger.focus) === "function") {
        trigger.focus();
      }
    }
    getMenu() {
      return this.panel.assignedElements({ flatten: true }).find((el) => el.tagName.toLowerCase() === "sl-menu");
    }
    handleKeyDown(event) {
      if (this.open && event.key === "Escape") {
        event.stopPropagation();
        this.hide();
        this.focusOnTrigger();
      }
    }
    handleDocumentKeyDown(event) {
      var _a;
      if (event.key === "Escape" && this.open) {
        event.stopPropagation();
        this.focusOnTrigger();
        this.hide();
        return;
      }
      if (event.key === "Tab") {
        if (this.open && ((_a = document.activeElement) == null ? void 0 : _a.tagName.toLowerCase()) === "sl-menu-item") {
          event.preventDefault();
          this.hide();
          this.focusOnTrigger();
          return;
        }
        setTimeout(() => {
          var _a2, _b, _c;
          const activeElement = ((_a2 = this.containingElement) == null ? void 0 : _a2.getRootNode()) instanceof ShadowRoot ? (_c = (_b = document.activeElement) == null ? void 0 : _b.shadowRoot) == null ? void 0 : _c.activeElement : document.activeElement;
          if (!this.containingElement || (activeElement == null ? void 0 : activeElement.closest(this.containingElement.tagName.toLowerCase())) !== this.containingElement) {
            this.hide();
          }
        });
      }
    }
    handleDocumentMouseDown(event) {
      const path = event.composedPath();
      if (this.containingElement && !path.includes(this.containingElement)) {
        this.hide();
      }
    }
    handlePanelSelect(event) {
      const target = event.target;
      if (!this.stayOpenOnSelect && target.tagName.toLowerCase() === "sl-menu") {
        this.hide();
        this.focusOnTrigger();
      }
    }
    handleTriggerClick() {
      if (this.open) {
        this.hide();
      } else {
        this.show();
        this.focusOnTrigger();
      }
    }
    handleTriggerKeyDown(event) {
      if ([" ", "Enter"].includes(event.key)) {
        event.preventDefault();
        this.handleTriggerClick();
        return;
      }
      const menu = this.getMenu();
      if (menu) {
        const menuItems = menu.getAllItems();
        const firstMenuItem = menuItems[0];
        const lastMenuItem = menuItems[menuItems.length - 1];
        if (["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
          event.preventDefault();
          if (!this.open) {
            this.show();
          }
          if (menuItems.length > 0) {
            this.updateComplete.then(() => {
              if (event.key === "ArrowDown" || event.key === "Home") {
                menu.setCurrentItem(firstMenuItem);
                firstMenuItem.focus();
              }
              if (event.key === "ArrowUp" || event.key === "End") {
                menu.setCurrentItem(lastMenuItem);
                lastMenuItem.focus();
              }
            });
          }
        }
      }
    }
    handleTriggerKeyUp(event) {
      if (event.key === " ") {
        event.preventDefault();
      }
    }
    handleTriggerSlotChange() {
      this.updateAccessibleTrigger();
    }
    //
    // Slotted triggers can be arbitrary content, but we need to link them to the dropdown panel with `aria-haspopup` and
    // `aria-expanded`. These must be applied to the "accessible trigger" (the tabbable portion of the trigger element
    // that gets slotted in) so screen readers will understand them. The accessible trigger could be the slotted element,
    // a child of the slotted element, or an element in the slotted element's shadow root.
    //
    // For example, the accessible trigger of an <sl-button> is a <button> located inside its shadow root.
    //
    // To determine this, we assume the first tabbable element in the trigger slot is the "accessible trigger."
    //
    updateAccessibleTrigger() {
      const assignedElements = this.trigger.assignedElements({ flatten: true });
      const accessibleTrigger = assignedElements.find((el) => getTabbableBoundary(el).start);
      let target;
      if (accessibleTrigger) {
        switch (accessibleTrigger.tagName.toLowerCase()) {
          case "sl-button":
          case "sl-icon-button":
            target = accessibleTrigger.button;
            break;
          default:
            target = accessibleTrigger;
        }
        target.setAttribute("aria-haspopup", "true");
        target.setAttribute("aria-expanded", this.open ? "true" : "false");
      }
    }
    /** Shows the dropdown panel. */
    async show() {
      if (this.open) {
        return void 0;
      }
      this.open = true;
      return waitForEvent(this, "sl-after-show");
    }
    /** Hides the dropdown panel */
    async hide() {
      if (!this.open) {
        return void 0;
      }
      this.open = false;
      return waitForEvent(this, "sl-after-hide");
    }
    /**
     * Instructs the dropdown menu to reposition. Useful when the position or size of the trigger changes when the menu
     * is activated.
     */
    reposition() {
      this.popup.reposition();
    }
    addOpenListeners() {
      this.panel.addEventListener("sl-select", this.handlePanelSelect);
      this.panel.addEventListener("keydown", this.handleKeyDown);
      document.addEventListener("keydown", this.handleDocumentKeyDown);
      document.addEventListener("mousedown", this.handleDocumentMouseDown);
    }
    removeOpenListeners() {
      if (this.panel) {
        this.panel.removeEventListener("sl-select", this.handlePanelSelect);
        this.panel.removeEventListener("keydown", this.handleKeyDown);
      }
      document.removeEventListener("keydown", this.handleDocumentKeyDown);
      document.removeEventListener("mousedown", this.handleDocumentMouseDown);
    }
    async handleOpenChange() {
      if (this.disabled) {
        this.open = false;
        return;
      }
      this.updateAccessibleTrigger();
      if (this.open) {
        this.emit("sl-show");
        this.addOpenListeners();
        await stopAnimations(this);
        this.panel.hidden = false;
        this.popup.active = true;
        const { keyframes, options } = getAnimation(this, "dropdown.show", { dir: this.localize.dir() });
        await animateTo(this.popup.popup, keyframes, options);
        this.emit("sl-after-show");
      } else {
        this.emit("sl-hide");
        this.removeOpenListeners();
        await stopAnimations(this);
        const { keyframes, options } = getAnimation(this, "dropdown.hide", { dir: this.localize.dir() });
        await animateTo(this.popup.popup, keyframes, options);
        this.panel.hidden = true;
        this.popup.active = false;
        this.emit("sl-after-hide");
      }
    }
    render() {
      return y`
      <sl-popup
        part="base"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist ? "fixed" : "absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        class=${o5({
        dropdown: true,
        "dropdown--open": this.open
      })}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <slot
          part="panel"
          class="dropdown__panel"
          aria-hidden=${this.open ? "false" : "true"}
          aria-labelledby="dropdown"
        ></slot>
      </sl-popup>
    `;
    }
  };
  SlDropdown.styles = dropdown_styles_default;
  __decorateClass([
    i22(".dropdown")
  ], SlDropdown.prototype, "popup", 2);
  __decorateClass([
    i22(".dropdown__trigger")
  ], SlDropdown.prototype, "trigger", 2);
  __decorateClass([
    i22(".dropdown__panel")
  ], SlDropdown.prototype, "panel", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlDropdown.prototype, "open", 2);
  __decorateClass([
    e22({ reflect: true })
  ], SlDropdown.prototype, "placement", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlDropdown.prototype, "disabled", 2);
  __decorateClass([
    e22({ attribute: "stay-open-on-select", type: Boolean, reflect: true })
  ], SlDropdown.prototype, "stayOpenOnSelect", 2);
  __decorateClass([
    e22({ attribute: false })
  ], SlDropdown.prototype, "containingElement", 2);
  __decorateClass([
    e22({ type: Number })
  ], SlDropdown.prototype, "distance", 2);
  __decorateClass([
    e22({ type: Number })
  ], SlDropdown.prototype, "skidding", 2);
  __decorateClass([
    e22({ type: Boolean })
  ], SlDropdown.prototype, "hoist", 2);
  __decorateClass([
    watch("open", { waitUntilFirstUpdate: true })
  ], SlDropdown.prototype, "handleOpenChange", 1);
  SlDropdown = __decorateClass([
    e5("sl-dropdown")
  ], SlDropdown);
  setDefaultAnimation("dropdown.show", {
    keyframes: [
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1 }
    ],
    options: { duration: 100, easing: "ease" }
  });
  setDefaultAnimation("dropdown.hide", {
    keyframes: [
      { opacity: 1, scale: 1 },
      { opacity: 0, scale: 0.9 }
    ],
    options: { duration: 100, easing: "ease" }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.Z7MHAEL3.js
  var popup_styles_default = i`
  ${component_styles_default}

  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }
`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.QWGZ4US6.js
  function t5(t32) {
    return t32.split("-")[1];
  }
  function e33(t32) {
    return "y" === t32 ? "height" : "width";
  }
  function n8(t32) {
    return t32.split("-")[0];
  }
  function o23(t32) {
    return ["top", "bottom"].includes(n8(t32)) ? "x" : "y";
  }
  function r4(r42, i42, a32) {
    let { reference: l32, floating: s32 } = r42;
    const c32 = l32.x + l32.width / 2 - s32.width / 2, f32 = l32.y + l32.height / 2 - s32.height / 2, u32 = o23(i42), m3 = e33(u32), g3 = l32[m3] / 2 - s32[m3] / 2, d32 = "x" === u32;
    let p3;
    switch (n8(i42)) {
      case "top":
        p3 = { x: c32, y: l32.y - s32.height };
        break;
      case "bottom":
        p3 = { x: c32, y: l32.y + l32.height };
        break;
      case "right":
        p3 = { x: l32.x + l32.width, y: f32 };
        break;
      case "left":
        p3 = { x: l32.x - s32.width, y: f32 };
        break;
      default:
        p3 = { x: l32.x, y: l32.y };
    }
    switch (t5(i42)) {
      case "start":
        p3[u32] -= g3 * (a32 && d32 ? -1 : 1);
        break;
      case "end":
        p3[u32] += g3 * (a32 && d32 ? -1 : 1);
    }
    return p3;
  }
  var i24 = async (t32, e43, n32) => {
    const { placement: o52 = "bottom", strategy: i42 = "absolute", middleware: a32 = [], platform: l32 } = n32, s32 = a32.filter(Boolean), c32 = await (null == l32.isRTL ? void 0 : l32.isRTL(e43));
    let f32 = await l32.getElementRects({ reference: t32, floating: e43, strategy: i42 }), { x: u32, y: m3 } = r4(f32, o52, c32), g3 = o52, d32 = {}, p3 = 0;
    for (let n42 = 0; n42 < s32.length; n42++) {
      const { name: a42, fn: h32 } = s32[n42], { x: y4, y: x3, data: w3, reset: v3 } = await h32({ x: u32, y: m3, initialPlacement: o52, placement: g3, strategy: i42, middlewareData: d32, rects: f32, platform: l32, elements: { reference: t32, floating: e43 } });
      u32 = null != y4 ? y4 : u32, m3 = null != x3 ? x3 : m3, d32 = __spreadProps(__spreadValues({}, d32), { [a42]: __spreadValues(__spreadValues({}, d32[a42]), w3) }), v3 && p3 <= 50 && (p3++, "object" == typeof v3 && (v3.placement && (g3 = v3.placement), v3.rects && (f32 = true === v3.rects ? await l32.getElementRects({ reference: t32, floating: e43, strategy: i42 }) : v3.rects), { x: u32, y: m3 } = r4(f32, g3, c32)), n42 = -1);
    }
    return { x: u32, y: m3, placement: g3, strategy: i42, middlewareData: d32 };
  };
  function a4(t32) {
    return "number" != typeof t32 ? function(t42) {
      return __spreadValues({ top: 0, right: 0, bottom: 0, left: 0 }, t42);
    }(t32) : { top: t32, right: t32, bottom: t32, left: t32 };
  }
  function l7(t32) {
    return __spreadProps(__spreadValues({}, t32), { top: t32.y, left: t32.x, right: t32.x + t32.width, bottom: t32.y + t32.height });
  }
  async function s7(t32, e43) {
    var n32;
    void 0 === e43 && (e43 = {});
    const { x: o52, y: r42, platform: i42, rects: s32, elements: c32, strategy: f32 } = t32, { boundary: u32 = "clippingAncestors", rootBoundary: m3 = "viewport", elementContext: g3 = "floating", altBoundary: d32 = false, padding: p3 = 0 } = e43, h32 = a4(p3), y4 = c32[d32 ? "floating" === g3 ? "reference" : "floating" : g3], x3 = l7(await i42.getClippingRect({ element: null == (n32 = await (null == i42.isElement ? void 0 : i42.isElement(y4))) || n32 ? y4 : y4.contextElement || await (null == i42.getDocumentElement ? void 0 : i42.getDocumentElement(c32.floating)), boundary: u32, rootBoundary: m3, strategy: f32 })), w3 = "floating" === g3 ? __spreadProps(__spreadValues({}, s32.floating), { x: o52, y: r42 }) : s32.reference, v3 = await (null == i42.getOffsetParent ? void 0 : i42.getOffsetParent(c32.floating)), b3 = await (null == i42.isElement ? void 0 : i42.isElement(v3)) && await (null == i42.getScale ? void 0 : i42.getScale(v3)) || { x: 1, y: 1 }, R22 = l7(i42.convertOffsetParentRelativeRectToViewportRelativeRect ? await i42.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w3, offsetParent: v3, strategy: f32 }) : w3);
    return { top: (x3.top - R22.top + h32.top) / b3.y, bottom: (R22.bottom - x3.bottom + h32.bottom) / b3.y, left: (x3.left - R22.left + h32.left) / b3.x, right: (R22.right - x3.right + h32.right) / b3.x };
  }
  var c3 = Math.min;
  var f3 = Math.max;
  function u3(t32, e43, n32) {
    return f3(t32, c3(e43, n32));
  }
  var m2 = (n32) => ({ name: "arrow", options: n32, async fn(r42) {
    const { element: i42, padding: l32 = 0 } = n32 || {}, { x: s32, y: c32, placement: f32, rects: m3, platform: g3 } = r42;
    if (null == i42)
      return {};
    const d32 = a4(l32), p3 = { x: s32, y: c32 }, h32 = o23(f32), y4 = e33(h32), x3 = await g3.getDimensions(i42), w3 = "y" === h32 ? "top" : "left", v3 = "y" === h32 ? "bottom" : "right", b3 = m3.reference[y4] + m3.reference[h32] - p3[h32] - m3.floating[y4], R22 = p3[h32] - m3.reference[h32], A22 = await (null == g3.getOffsetParent ? void 0 : g3.getOffsetParent(i42));
    let P3 = A22 ? "y" === h32 ? A22.clientHeight || 0 : A22.clientWidth || 0 : 0;
    0 === P3 && (P3 = m3.floating[y4]);
    const T3 = b3 / 2 - R22 / 2, O3 = d32[w3], D3 = P3 - x3[y4] - d32[v3], E3 = P3 / 2 - x3[y4] / 2 + T3, L3 = u3(O3, E3, D3), k22 = null != t5(f32) && E3 != L3 && m3.reference[y4] / 2 - (E3 < O3 ? d32[w3] : d32[v3]) - x3[y4] / 2 < 0;
    return { [h32]: p3[h32] - (k22 ? E3 < O3 ? O3 - E3 : D3 - E3 : 0), data: { [h32]: L3, centerOffset: E3 - L3 } };
  } });
  var g2 = ["top", "right", "bottom", "left"];
  var d3 = g2.reduce((t32, e43) => t32.concat(e43, e43 + "-start", e43 + "-end"), []);
  var p2 = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function h3(t32) {
    return t32.replace(/left|right|bottom|top/g, (t42) => p2[t42]);
  }
  function y2(n32, r42, i42) {
    void 0 === i42 && (i42 = false);
    const a32 = t5(n32), l32 = o23(n32), s32 = e33(l32);
    let c32 = "x" === l32 ? a32 === (i42 ? "end" : "start") ? "right" : "left" : "start" === a32 ? "bottom" : "top";
    return r42.reference[s32] > r42.floating[s32] && (c32 = h3(c32)), { main: c32, cross: h3(c32) };
  }
  var x2 = { start: "end", end: "start" };
  function w2(t32) {
    return t32.replace(/start|end/g, (t42) => x2[t42]);
  }
  var b2 = function(e43) {
    return void 0 === e43 && (e43 = {}), { name: "flip", options: e43, async fn(o52) {
      var r42;
      const { placement: i42, middlewareData: a32, rects: l32, initialPlacement: c32, platform: f32, elements: u32 } = o52, _a = e43, { mainAxis: m3 = true, crossAxis: g3 = true, fallbackPlacements: d32, fallbackStrategy: p3 = "bestFit", fallbackAxisSideDirection: x3 = "none", flipAlignment: v3 = true } = _a, b3 = __objRest(_a, ["mainAxis", "crossAxis", "fallbackPlacements", "fallbackStrategy", "fallbackAxisSideDirection", "flipAlignment"]), R22 = n8(i42), A22 = n8(c32) === c32, P3 = await (null == f32.isRTL ? void 0 : f32.isRTL(u32.floating)), T3 = d32 || (A22 || !v3 ? [h3(c32)] : function(t32) {
        const e54 = h3(t32);
        return [w2(t32), e54, w2(e54)];
      }(c32));
      d32 || "none" === x3 || T3.push(...function(e54, o62, r5, i52) {
        const a42 = t5(e54);
        let l42 = function(t32, e62, n32) {
          const o7 = ["left", "right"], r6 = ["right", "left"], i6 = ["top", "bottom"], a5 = ["bottom", "top"];
          switch (t32) {
            case "top":
            case "bottom":
              return n32 ? e62 ? r6 : o7 : e62 ? o7 : r6;
            case "left":
            case "right":
              return e62 ? i6 : a5;
            default:
              return [];
          }
        }(n8(e54), "start" === r5, i52);
        return a42 && (l42 = l42.map((t32) => t32 + "-" + a42), o62 && (l42 = l42.concat(l42.map(w2)))), l42;
      }(c32, v3, x3, P3));
      const O3 = [c32, ...T3], D3 = await s7(o52, b3), E3 = [];
      let L3 = (null == (r42 = a32.flip) ? void 0 : r42.overflows) || [];
      if (m3 && E3.push(D3[R22]), g3) {
        const { main: t32, cross: e54 } = y2(i42, l32, P3);
        E3.push(D3[t32], D3[e54]);
      }
      if (L3 = [...L3, { placement: i42, overflows: E3 }], !E3.every((t32) => t32 <= 0)) {
        var k22, B;
        const t32 = ((null == (k22 = a32.flip) ? void 0 : k22.index) || 0) + 1, e54 = O3[t32];
        if (e54)
          return { data: { index: t32, overflows: L3 }, reset: { placement: e54 } };
        let n32 = null == (B = L3.filter((t42) => t42.overflows[0] <= 0).sort((t42, e62) => t42.overflows[1] - e62.overflows[1])[0]) ? void 0 : B.placement;
        if (!n32)
          switch (p3) {
            case "bestFit": {
              var C22;
              const t42 = null == (C22 = L3.map((t52) => [t52.placement, t52.overflows.filter((t6) => t6 > 0).reduce((t6, e62) => t6 + e62, 0)]).sort((t52, e62) => t52[1] - e62[1])[0]) ? void 0 : C22[0];
              t42 && (n32 = t42);
              break;
            }
            case "initialPlacement":
              n32 = c32;
          }
        if (i42 !== n32)
          return { reset: { placement: n32 } };
      }
      return {};
    } };
  };
  var O = function(e43) {
    return void 0 === e43 && (e43 = 0), { name: "offset", options: e43, async fn(r42) {
      const { x: i42, y: a32 } = r42, l32 = await async function(e54, r5) {
        const { placement: i52, platform: a42, elements: l42 } = e54, s32 = await (null == a42.isRTL ? void 0 : a42.isRTL(l42.floating)), c32 = n8(i52), f32 = t5(i52), u32 = "x" === o23(i52), m3 = ["left", "top"].includes(c32) ? -1 : 1, g3 = s32 && u32 ? -1 : 1, d32 = "function" == typeof r5 ? r5(e54) : r5;
        let { mainAxis: p3, crossAxis: h32, alignmentAxis: y4 } = "number" == typeof d32 ? { mainAxis: d32, crossAxis: 0, alignmentAxis: null } : __spreadValues({ mainAxis: 0, crossAxis: 0, alignmentAxis: null }, d32);
        return f32 && "number" == typeof y4 && (h32 = "end" === f32 ? -1 * y4 : y4), u32 ? { x: h32 * g3, y: p3 * m3 } : { x: p3 * m3, y: h32 * g3 };
      }(r42, e43);
      return { x: i42 + l32.x, y: a32 + l32.y, data: l32 };
    } };
  };
  function D(t32) {
    return "x" === t32 ? "y" : "x";
  }
  var E2 = function(t32) {
    return void 0 === t32 && (t32 = {}), { name: "shift", options: t32, async fn(e43) {
      const { x: r42, y: i42, placement: a32 } = e43, _a = t32, { mainAxis: l32 = true, crossAxis: c32 = false, limiter: f32 = { fn: (t42) => {
        let { x: e54, y: n32 } = t42;
        return { x: e54, y: n32 };
      } } } = _a, m3 = __objRest(_a, ["mainAxis", "crossAxis", "limiter"]), g3 = { x: r42, y: i42 }, d32 = await s7(e43, m3), p3 = o23(n8(a32)), h32 = D(p3);
      let y4 = g3[p3], x3 = g3[h32];
      if (l32) {
        const t42 = "y" === p3 ? "bottom" : "right";
        y4 = u3(y4 + d32["y" === p3 ? "top" : "left"], y4, y4 - d32[t42]);
      }
      if (c32) {
        const t42 = "y" === h32 ? "bottom" : "right";
        x3 = u3(x3 + d32["y" === h32 ? "top" : "left"], x3, x3 - d32[t42]);
      }
      const w3 = f32.fn(__spreadProps(__spreadValues({}, e43), { [p3]: y4, [h32]: x3 }));
      return __spreadProps(__spreadValues({}, w3), { data: { x: w3.x - r42, y: w3.y - i42 } });
    } };
  };
  var k2 = function(e43) {
    return void 0 === e43 && (e43 = {}), { name: "size", options: e43, async fn(r42) {
      const { placement: i42, rects: a32, platform: l32, elements: u32 } = r42, _a = e43, { apply: m3 = () => {
      } } = _a, g3 = __objRest(_a, ["apply"]), d32 = await s7(r42, g3), p3 = n8(i42), h32 = t5(i42), y4 = "x" === o23(i42), { width: x3, height: w3 } = a32.floating;
      let v3, b3;
      "top" === p3 || "bottom" === p3 ? (v3 = p3, b3 = h32 === (await (null == l32.isRTL ? void 0 : l32.isRTL(u32.floating)) ? "start" : "end") ? "left" : "right") : (b3 = p3, v3 = "end" === h32 ? "top" : "bottom");
      const R22 = w3 - d32[v3], A22 = x3 - d32[b3];
      let P3 = R22, T3 = A22;
      if (y4 ? T3 = c3(x3 - d32.right - d32.left, A22) : P3 = c3(w3 - d32.bottom - d32.top, R22), !r42.middlewareData.shift && !h32) {
        const t32 = f3(d32.left, 0), e54 = f3(d32.right, 0), n32 = f3(d32.top, 0), o52 = f3(d32.bottom, 0);
        y4 ? T3 = x3 - 2 * (0 !== t32 || 0 !== e54 ? t32 + e54 : f3(d32.left, d32.right)) : P3 = w3 - 2 * (0 !== n32 || 0 !== o52 ? n32 + o52 : f3(d32.top, d32.bottom));
      }
      await m3(__spreadProps(__spreadValues({}, r42), { availableWidth: T3, availableHeight: P3 }));
      const O3 = await l32.getDimensions(u32.floating);
      return x3 !== O3.width || w3 !== O3.height ? { reset: { rects: true } } : {};
    } };
  };
  function n22(t32) {
    var e43;
    return (null == (e43 = t32.ownerDocument) ? void 0 : e43.defaultView) || window;
  }
  function o32(t32) {
    return n22(t32).getComputedStyle(t32);
  }
  var i32 = Math.min;
  var r22 = Math.max;
  var l23 = Math.round;
  function c22(t32) {
    const e43 = o32(t32);
    let n32 = parseFloat(e43.width), i42 = parseFloat(e43.height);
    const r42 = t32.offsetWidth, c32 = t32.offsetHeight, s32 = l23(n32) !== r42 || l23(i42) !== c32;
    return s32 && (n32 = r42, i42 = c32), { width: n32, height: i42, fallback: s32 };
  }
  function s22(t32) {
    return h22(t32) ? (t32.nodeName || "").toLowerCase() : "";
  }
  var f22;
  function u22() {
    if (f22)
      return f22;
    const t32 = navigator.userAgentData;
    return t32 && Array.isArray(t32.brands) ? (f22 = t32.brands.map((t42) => t42.brand + "/" + t42.version).join(" "), f22) : navigator.userAgent;
  }
  function a22(t32) {
    return t32 instanceof n22(t32).HTMLElement;
  }
  function d22(t32) {
    return t32 instanceof n22(t32).Element;
  }
  function h22(t32) {
    return t32 instanceof n22(t32).Node;
  }
  function p22(t32) {
    if ("undefined" == typeof ShadowRoot)
      return false;
    return t32 instanceof n22(t32).ShadowRoot || t32 instanceof ShadowRoot;
  }
  function g22(t32) {
    const { overflow: e43, overflowX: n32, overflowY: i42, display: r42 } = o32(t32);
    return /auto|scroll|overlay|hidden|clip/.test(e43 + i42 + n32) && !["inline", "contents"].includes(r42);
  }
  function m22(t32) {
    return ["table", "td", "th"].includes(s22(t32));
  }
  function y3(t32) {
    const e43 = /firefox/i.test(u22()), n32 = o32(t32), i42 = n32.backdropFilter || n32.WebkitBackdropFilter;
    return "none" !== n32.transform || "none" !== n32.perspective || !!i42 && "none" !== i42 || e43 && "filter" === n32.willChange || e43 && !!n32.filter && "none" !== n32.filter || ["transform", "perspective"].some((t42) => n32.willChange.includes(t42)) || ["paint", "layout", "strict", "content"].some((t42) => {
      const e54 = n32.contain;
      return null != e54 && e54.includes(t42);
    });
  }
  function x22() {
    return /^((?!chrome|android).)*safari/i.test(u22());
  }
  function w22(t32) {
    return ["html", "body", "#document"].includes(s22(t32));
  }
  function v2(t32) {
    return d22(t32) ? t32 : t32.contextElement;
  }
  var b22 = { x: 1, y: 1 };
  function L2(t32) {
    const e43 = v2(t32);
    if (!a22(e43))
      return b22;
    const n32 = e43.getBoundingClientRect(), { width: o52, height: i42, fallback: r42 } = c22(e43);
    let s32 = (r42 ? l23(n32.width) : n32.width) / o52, f32 = (r42 ? l23(n32.height) : n32.height) / i42;
    return s32 && Number.isFinite(s32) || (s32 = 1), f32 && Number.isFinite(f32) || (f32 = 1), { x: s32, y: f32 };
  }
  function E22(t32, e43, o52, i42) {
    var r42, l32;
    void 0 === e43 && (e43 = false), void 0 === o52 && (o52 = false);
    const c32 = t32.getBoundingClientRect(), s32 = v2(t32);
    let f32 = b22;
    e43 && (i42 ? d22(i42) && (f32 = L2(i42)) : f32 = L2(t32));
    const u32 = s32 ? n22(s32) : window, a32 = x22() && o52;
    let h32 = (c32.left + (a32 && (null == (r42 = u32.visualViewport) ? void 0 : r42.offsetLeft) || 0)) / f32.x, p3 = (c32.top + (a32 && (null == (l32 = u32.visualViewport) ? void 0 : l32.offsetTop) || 0)) / f32.y, g3 = c32.width / f32.x, m3 = c32.height / f32.y;
    if (s32) {
      const t42 = n22(s32), e54 = i42 && d22(i42) ? n22(i42) : i42;
      let o62 = t42.frameElement;
      for (; o62 && i42 && e54 !== t42; ) {
        const t52 = L2(o62), e62 = o62.getBoundingClientRect(), i52 = getComputedStyle(o62);
        e62.x += (o62.clientLeft + parseFloat(i52.paddingLeft)) * t52.x, e62.y += (o62.clientTop + parseFloat(i52.paddingTop)) * t52.y, h32 *= t52.x, p3 *= t52.y, g3 *= t52.x, m3 *= t52.y, h32 += e62.x, p3 += e62.y, o62 = n22(o62).frameElement;
      }
    }
    return { width: g3, height: m3, top: p3, right: h32 + g3, bottom: p3 + m3, left: h32, x: h32, y: p3 };
  }
  function R2(t32) {
    return ((h22(t32) ? t32.ownerDocument : t32.document) || window.document).documentElement;
  }
  function T2(t32) {
    return d22(t32) ? { scrollLeft: t32.scrollLeft, scrollTop: t32.scrollTop } : { scrollLeft: t32.pageXOffset, scrollTop: t32.pageYOffset };
  }
  function C2(t32) {
    return E22(R2(t32)).left + T2(t32).scrollLeft;
  }
  function F(t32) {
    if ("html" === s22(t32))
      return t32;
    const e43 = t32.assignedSlot || t32.parentNode || p22(t32) && t32.host || R2(t32);
    return p22(e43) ? e43.host : e43;
  }
  function W(t32) {
    const e43 = F(t32);
    return w22(e43) ? e43.ownerDocument.body : a22(e43) && g22(e43) ? e43 : W(e43);
  }
  function D2(t32, e43) {
    var o52;
    void 0 === e43 && (e43 = []);
    const i42 = W(t32), r42 = i42 === (null == (o52 = t32.ownerDocument) ? void 0 : o52.body), l32 = n22(i42);
    return r42 ? e43.concat(l32, l32.visualViewport || [], g22(i42) ? i42 : []) : e43.concat(i42, D2(i42));
  }
  function S3(e43, i42, l32) {
    let c32;
    if ("viewport" === i42)
      c32 = function(t32, e54) {
        const o52 = n22(t32), i52 = R2(t32), r42 = o52.visualViewport;
        let l42 = i52.clientWidth, c4 = i52.clientHeight, s42 = 0, f4 = 0;
        if (r42) {
          l42 = r42.width, c4 = r42.height;
          const t42 = x22();
          (!t42 || t42 && "fixed" === e54) && (s42 = r42.offsetLeft, f4 = r42.offsetTop);
        }
        return { width: l42, height: c4, x: s42, y: f4 };
      }(e43, l32);
    else if ("document" === i42)
      c32 = function(t32) {
        const e54 = R2(t32), n32 = T2(t32), i52 = t32.ownerDocument.body, l42 = r22(e54.scrollWidth, e54.clientWidth, i52.scrollWidth, i52.clientWidth), c4 = r22(e54.scrollHeight, e54.clientHeight, i52.scrollHeight, i52.clientHeight);
        let s42 = -n32.scrollLeft + C2(t32);
        const f4 = -n32.scrollTop;
        return "rtl" === o32(i52).direction && (s42 += r22(e54.clientWidth, i52.clientWidth) - l42), { width: l42, height: c4, x: s42, y: f4 };
      }(R2(e43));
    else if (d22(i42))
      c32 = function(t32, e54) {
        const n32 = E22(t32, true, "fixed" === e54), o52 = n32.top + t32.clientTop, i52 = n32.left + t32.clientLeft, r42 = a22(t32) ? L2(t32) : { x: 1, y: 1 };
        return { width: t32.clientWidth * r42.x, height: t32.clientHeight * r42.y, x: i52 * r42.x, y: o52 * r42.y };
      }(i42, l32);
    else {
      const t32 = __spreadValues({}, i42);
      if (x22()) {
        var s32, f32;
        const o52 = n22(e43);
        t32.x -= (null == (s32 = o52.visualViewport) ? void 0 : s32.offsetLeft) || 0, t32.y -= (null == (f32 = o52.visualViewport) ? void 0 : f32.offsetTop) || 0;
      }
      c32 = t32;
    }
    return l7(c32);
  }
  function A2(t32, e43) {
    return a22(t32) && "fixed" !== o32(t32).position ? e43 ? e43(t32) : t32.offsetParent : null;
  }
  function H3(t32, e43) {
    const i42 = n22(t32);
    let r42 = A2(t32, e43);
    for (; r42 && m22(r42) && "static" === o32(r42).position; )
      r42 = A2(r42, e43);
    return r42 && ("html" === s22(r42) || "body" === s22(r42) && "static" === o32(r42).position && !y3(r42)) ? i42 : r42 || function(t42) {
      let e54 = F(t42);
      for (; a22(e54) && !w22(e54); ) {
        if (y3(e54))
          return e54;
        e54 = F(e54);
      }
      return null;
    }(t32) || i42;
  }
  function V2(t32, e43, n32) {
    const o52 = a22(e43), i42 = R2(e43), r42 = E22(t32, true, "fixed" === n32, e43);
    let l32 = { scrollLeft: 0, scrollTop: 0 };
    const c32 = { x: 0, y: 0 };
    if (o52 || !o52 && "fixed" !== n32)
      if (("body" !== s22(e43) || g22(i42)) && (l32 = T2(e43)), a22(e43)) {
        const t42 = E22(e43, true);
        c32.x = t42.x + e43.clientLeft, c32.y = t42.y + e43.clientTop;
      } else
        i42 && (c32.x = C2(i42));
    return { x: r42.left + l32.scrollLeft - c32.x, y: r42.top + l32.scrollTop - c32.y, width: r42.width, height: r42.height };
  }
  var O2 = { getClippingRect: function(t32) {
    let { element: e43, boundary: n32, rootBoundary: l32, strategy: c32 } = t32;
    const f32 = "clippingAncestors" === n32 ? function(t42, e54) {
      const n42 = e54.get(t42);
      if (n42)
        return n42;
      let i42 = D2(t42).filter((t52) => d22(t52) && "body" !== s22(t52)), r42 = null;
      const l42 = "fixed" === o32(t42).position;
      let c4 = l42 ? F(t42) : t42;
      for (; d22(c4) && !w22(c4); ) {
        const t52 = o32(c4), e62 = y3(c4);
        "fixed" === t52.position ? r42 = null : (l42 ? e62 || r42 : e62 || "static" !== t52.position || !r42 || !["absolute", "fixed"].includes(r42.position)) ? r42 = t52 : i42 = i42.filter((t6) => t6 !== c4), c4 = F(c4);
      }
      return e54.set(t42, i42), i42;
    }(e43, this._c) : [].concat(n32), u32 = [...f32, l32], a32 = u32[0], h32 = u32.reduce((t42, n42) => {
      const o52 = S3(e43, n42, c32);
      return t42.top = r22(o52.top, t42.top), t42.right = i32(o52.right, t42.right), t42.bottom = i32(o52.bottom, t42.bottom), t42.left = r22(o52.left, t42.left), t42;
    }, S3(e43, a32, c32));
    return { width: h32.right - h32.left, height: h32.bottom - h32.top, x: h32.left, y: h32.top };
  }, convertOffsetParentRelativeRectToViewportRelativeRect: function(t32) {
    let { rect: e43, offsetParent: n32, strategy: o52 } = t32;
    const i42 = a22(n32), r42 = R2(n32);
    if (n32 === r42)
      return e43;
    let l32 = { scrollLeft: 0, scrollTop: 0 }, c32 = { x: 1, y: 1 };
    const f32 = { x: 0, y: 0 };
    if ((i42 || !i42 && "fixed" !== o52) && (("body" !== s22(n32) || g22(r42)) && (l32 = T2(n32)), a22(n32))) {
      const t42 = E22(n32);
      c32 = L2(n32), f32.x = t42.x + n32.clientLeft, f32.y = t42.y + n32.clientTop;
    }
    return { width: e43.width * c32.x, height: e43.height * c32.y, x: e43.x * c32.x - l32.scrollLeft * c32.x + f32.x, y: e43.y * c32.y - l32.scrollTop * c32.y + f32.y };
  }, isElement: d22, getDimensions: function(t32) {
    return a22(t32) ? c22(t32) : t32.getBoundingClientRect();
  }, getOffsetParent: H3, getDocumentElement: R2, getScale: L2, async getElementRects(t32) {
    let { reference: e43, floating: n32, strategy: o52 } = t32;
    const i42 = this.getOffsetParent || H3, r42 = this.getDimensions;
    return { reference: V2(e43, await i42(n32), o52), floating: __spreadValues({ x: 0, y: 0 }, await r42(n32)) };
  }, getClientRects: (t32) => Array.from(t32.getClientRects()), isRTL: (t32) => "rtl" === o32(t32).direction };
  function P2(t32, e43, n32, o52) {
    void 0 === o52 && (o52 = {});
    const { ancestorScroll: i42 = true, ancestorResize: r42 = true, elementResize: l32 = true, animationFrame: c32 = false } = o52, s32 = i42 && !c32, f32 = s32 || r42 ? [...d22(t32) ? D2(t32) : t32.contextElement ? D2(t32.contextElement) : [], ...D2(e43)] : [];
    f32.forEach((t42) => {
      s32 && t42.addEventListener("scroll", n32, { passive: true }), r42 && t42.addEventListener("resize", n32);
    });
    let u32, a32 = null;
    if (l32) {
      let o62 = true;
      a32 = new ResizeObserver(() => {
        o62 || n32(), o62 = false;
      }), d22(t32) && !c32 && a32.observe(t32), d22(t32) || !t32.contextElement || c32 || a32.observe(t32.contextElement), a32.observe(e43);
    }
    let h32 = c32 ? E22(t32) : null;
    return c32 && function e54() {
      const o62 = E22(t32);
      !h32 || o62.x === h32.x && o62.y === h32.y && o62.width === h32.width && o62.height === h32.height || n32();
      h32 = o62, u32 = requestAnimationFrame(e54);
    }(), n32(), () => {
      var t42;
      f32.forEach((t52) => {
        s32 && t52.removeEventListener("scroll", n32), r42 && t52.removeEventListener("resize", n32);
      }), null == (t42 = a32) || t42.disconnect(), a32 = null, c32 && cancelAnimationFrame(u32);
    };
  }
  var z2 = (t32, n32, o52) => {
    const i42 = /* @__PURE__ */ new Map(), r42 = __spreadValues({ platform: O2 }, o52), l32 = __spreadProps(__spreadValues({}, r42.platform), { _c: i42 });
    return i24(t32, n32, __spreadProps(__spreadValues({}, r42), { platform: l32 }));
  };
  function t22(t32) {
    return r32(t32);
  }
  function o42(t32) {
    return t32.assignedSlot ? t32.assignedSlot : t32.parentNode instanceof ShadowRoot ? t32.parentNode.host : t32.parentNode;
  }
  function r32(t32) {
    for (let e43 = t32; e43; e43 = o42(e43))
      if (e43 instanceof Element && "none" === getComputedStyle(e43).display)
        return null;
    for (let e43 = o42(t32); e43; e43 = o42(e43)) {
      if (!(e43 instanceof Element))
        continue;
      const t42 = getComputedStyle(e43);
      if ("contents" !== t42.display) {
        if ("static" !== t42.position || "none" !== t42.filter)
          return e43;
        if ("BODY" === e43.tagName)
          return e43;
      }
    }
    return null;
  }
  var SlPopup = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.active = false;
      this.placement = "top";
      this.strategy = "absolute";
      this.distance = 0;
      this.skidding = 0;
      this.arrow = false;
      this.arrowPlacement = "anchor";
      this.arrowPadding = 10;
      this.flip = false;
      this.flipFallbackPlacements = "";
      this.flipFallbackStrategy = "best-fit";
      this.flipPadding = 0;
      this.shift = false;
      this.shiftPadding = 0;
      this.autoSizePadding = 0;
    }
    async connectedCallback() {
      super.connectedCallback();
      await this.updateComplete;
      this.start();
    }
    disconnectedCallback() {
      this.stop();
    }
    async updated(changedProps) {
      super.updated(changedProps);
      if (changedProps.has("active")) {
        if (this.active) {
          this.start();
        } else {
          this.stop();
        }
      }
      if (changedProps.has("anchor")) {
        this.handleAnchorChange();
      }
      if (this.active) {
        await this.updateComplete;
        this.reposition();
      }
    }
    async handleAnchorChange() {
      await this.stop();
      if (this.anchor && typeof this.anchor === "string") {
        const root = this.getRootNode();
        this.anchorEl = root.getElementById(this.anchor);
      } else if (this.anchor instanceof Element) {
        this.anchorEl = this.anchor;
      } else {
        this.anchorEl = this.querySelector('[slot="anchor"]');
      }
      if (this.anchorEl instanceof HTMLSlotElement) {
        this.anchorEl = this.anchorEl.assignedElements({ flatten: true })[0];
      }
      if (!this.anchorEl) {
        throw new Error(
          "Invalid anchor element: no anchor could be found using the anchor slot or the anchor attribute."
        );
      }
      this.start();
    }
    start() {
      if (!this.anchorEl) {
        return;
      }
      this.cleanup = P2(this.anchorEl, this.popup, () => {
        this.reposition();
      });
    }
    async stop() {
      return new Promise((resolve) => {
        if (this.cleanup) {
          this.cleanup();
          this.cleanup = void 0;
          this.removeAttribute("data-current-placement");
          this.style.removeProperty("--auto-size-available-width");
          this.style.removeProperty("--auto-size-available-height");
          requestAnimationFrame(() => resolve());
        } else {
          resolve();
        }
      });
    }
    /** Forces the popup to recalculate and reposition itself. */
    reposition() {
      if (!this.active || !this.anchorEl) {
        return;
      }
      const middleware = [
        // The offset middleware goes first
        O({ mainAxis: this.distance, crossAxis: this.skidding })
      ];
      if (this.sync) {
        middleware.push(
          k2({
            apply: ({ rects }) => {
              const syncWidth = this.sync === "width" || this.sync === "both";
              const syncHeight = this.sync === "height" || this.sync === "both";
              this.popup.style.width = syncWidth ? `${rects.reference.width}px` : "";
              this.popup.style.height = syncHeight ? `${rects.reference.height}px` : "";
            }
          })
        );
      } else {
        this.popup.style.width = "";
        this.popup.style.height = "";
      }
      if (this.flip) {
        middleware.push(
          b2({
            boundary: this.flipBoundary,
            // @ts-expect-error - We're converting a string attribute to an array here
            fallbackPlacements: this.flipFallbackPlacements,
            fallbackStrategy: this.flipFallbackStrategy === "best-fit" ? "bestFit" : "initialPlacement",
            padding: this.flipPadding
          })
        );
      }
      if (this.shift) {
        middleware.push(
          E2({
            boundary: this.shiftBoundary,
            padding: this.shiftPadding
          })
        );
      }
      if (this.autoSize) {
        middleware.push(
          k2({
            boundary: this.autoSizeBoundary,
            padding: this.autoSizePadding,
            apply: ({ availableWidth, availableHeight }) => {
              if (this.autoSize === "vertical" || this.autoSize === "both") {
                this.style.setProperty("--auto-size-available-height", `${availableHeight}px`);
              } else {
                this.style.removeProperty("--auto-size-available-height");
              }
              if (this.autoSize === "horizontal" || this.autoSize === "both") {
                this.style.setProperty("--auto-size-available-width", `${availableWidth}px`);
              } else {
                this.style.removeProperty("--auto-size-available-width");
              }
            }
          })
        );
      } else {
        this.style.removeProperty("--auto-size-available-width");
        this.style.removeProperty("--auto-size-available-height");
      }
      if (this.arrow) {
        middleware.push(
          m2({
            element: this.arrowEl,
            padding: this.arrowPadding
          })
        );
      }
      const getOffsetParent = this.strategy === "absolute" ? (element) => O2.getOffsetParent(element, t22) : O2.getOffsetParent;
      z2(this.anchorEl, this.popup, {
        placement: this.placement,
        middleware,
        strategy: this.strategy,
        platform: __spreadProps(__spreadValues({}, O2), {
          getOffsetParent
        })
      }).then(({ x: x3, y: y4, middlewareData, placement }) => {
        const isRtl = getComputedStyle(this).direction === "rtl";
        const staticSide = { top: "bottom", right: "left", bottom: "top", left: "right" }[placement.split("-")[0]];
        this.setAttribute("data-current-placement", placement);
        Object.assign(this.popup.style, {
          left: `${x3}px`,
          top: `${y4}px`
        });
        if (this.arrow) {
          const arrowX = middlewareData.arrow.x;
          const arrowY = middlewareData.arrow.y;
          let top = "";
          let right = "";
          let bottom = "";
          let left = "";
          if (this.arrowPlacement === "start") {
            const value = typeof arrowX === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
            top = typeof arrowY === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
            right = isRtl ? value : "";
            left = isRtl ? "" : value;
          } else if (this.arrowPlacement === "end") {
            const value = typeof arrowX === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
            right = isRtl ? "" : value;
            left = isRtl ? value : "";
            bottom = typeof arrowY === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
          } else if (this.arrowPlacement === "center") {
            left = typeof arrowX === "number" ? `calc(50% - var(--arrow-size-diagonal))` : "";
            top = typeof arrowY === "number" ? `calc(50% - var(--arrow-size-diagonal))` : "";
          } else {
            left = typeof arrowX === "number" ? `${arrowX}px` : "";
            top = typeof arrowY === "number" ? `${arrowY}px` : "";
          }
          Object.assign(this.arrowEl.style, {
            top,
            right,
            bottom,
            left,
            [staticSide]: "calc(var(--arrow-size-diagonal) * -1)"
          });
        }
      });
      this.emit("sl-reposition");
    }
    render() {
      return y`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="popup"
        class=${o5({
        popup: true,
        "popup--active": this.active,
        "popup--fixed": this.strategy === "fixed",
        "popup--has-arrow": this.arrow
      })}
      >
        <slot></slot>
        ${this.arrow ? y`<div part="arrow" class="popup__arrow" role="presentation"></div>` : ""}
      </div>
    `;
    }
  };
  SlPopup.styles = popup_styles_default;
  __decorateClass([
    i22(".popup")
  ], SlPopup.prototype, "popup", 2);
  __decorateClass([
    i22(".popup__arrow")
  ], SlPopup.prototype, "arrowEl", 2);
  __decorateClass([
    e22()
  ], SlPopup.prototype, "anchor", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlPopup.prototype, "active", 2);
  __decorateClass([
    e22({ reflect: true })
  ], SlPopup.prototype, "placement", 2);
  __decorateClass([
    e22({ reflect: true })
  ], SlPopup.prototype, "strategy", 2);
  __decorateClass([
    e22({ type: Number })
  ], SlPopup.prototype, "distance", 2);
  __decorateClass([
    e22({ type: Number })
  ], SlPopup.prototype, "skidding", 2);
  __decorateClass([
    e22({ type: Boolean })
  ], SlPopup.prototype, "arrow", 2);
  __decorateClass([
    e22({ attribute: "arrow-placement" })
  ], SlPopup.prototype, "arrowPlacement", 2);
  __decorateClass([
    e22({ attribute: "arrow-padding", type: Number })
  ], SlPopup.prototype, "arrowPadding", 2);
  __decorateClass([
    e22({ type: Boolean })
  ], SlPopup.prototype, "flip", 2);
  __decorateClass([
    e22({
      attribute: "flip-fallback-placements",
      converter: {
        fromAttribute: (value) => {
          return value.split(" ").map((p3) => p3.trim()).filter((p3) => p3 !== "");
        },
        toAttribute: (value) => {
          return value.join(" ");
        }
      }
    })
  ], SlPopup.prototype, "flipFallbackPlacements", 2);
  __decorateClass([
    e22({ attribute: "flip-fallback-strategy" })
  ], SlPopup.prototype, "flipFallbackStrategy", 2);
  __decorateClass([
    e22({ type: Object })
  ], SlPopup.prototype, "flipBoundary", 2);
  __decorateClass([
    e22({ attribute: "flip-padding", type: Number })
  ], SlPopup.prototype, "flipPadding", 2);
  __decorateClass([
    e22({ type: Boolean })
  ], SlPopup.prototype, "shift", 2);
  __decorateClass([
    e22({ type: Object })
  ], SlPopup.prototype, "shiftBoundary", 2);
  __decorateClass([
    e22({ attribute: "shift-padding", type: Number })
  ], SlPopup.prototype, "shiftPadding", 2);
  __decorateClass([
    e22({ attribute: "auto-size" })
  ], SlPopup.prototype, "autoSize", 2);
  __decorateClass([
    e22()
  ], SlPopup.prototype, "sync", 2);
  __decorateClass([
    e22({ type: Object })
  ], SlPopup.prototype, "autoSizeBoundary", 2);
  __decorateClass([
    e22({ attribute: "auto-size-padding", type: Number })
  ], SlPopup.prototype, "autoSizePadding", 2);
  SlPopup = __decorateClass([
    e5("sl-popup")
  ], SlPopup);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.SGEYQ7UT.js
  var details_styles_default = i`
  ${component_styles_default}

  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    cursor: pointer;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.63EJAUT7.js
  var SlDetails = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController2(this);
      this.open = false;
      this.disabled = false;
    }
    firstUpdated() {
      this.body.hidden = !this.open;
      this.body.style.height = this.open ? "auto" : "0";
    }
    handleSummaryClick() {
      if (!this.disabled) {
        if (this.open) {
          this.hide();
        } else {
          this.show();
        }
        this.header.focus();
      }
    }
    handleSummaryKeyDown(event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        if (this.open) {
          this.hide();
        } else {
          this.show();
        }
      }
      if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
        event.preventDefault();
        this.hide();
      }
      if (event.key === "ArrowDown" || event.key === "ArrowRight") {
        event.preventDefault();
        this.show();
      }
    }
    async handleOpenChange() {
      if (this.open) {
        const slShow = this.emit("sl-show", { cancelable: true });
        if (slShow.defaultPrevented) {
          this.open = false;
          return;
        }
        await stopAnimations(this.body);
        this.body.hidden = false;
        const { keyframes, options } = getAnimation(this, "details.show", { dir: this.localize.dir() });
        await animateTo(this.body, shimKeyframesHeightAuto(keyframes, this.body.scrollHeight), options);
        this.body.style.height = "auto";
        this.emit("sl-after-show");
      } else {
        const slHide = this.emit("sl-hide", { cancelable: true });
        if (slHide.defaultPrevented) {
          this.open = true;
          return;
        }
        await stopAnimations(this.body);
        const { keyframes, options } = getAnimation(this, "details.hide", { dir: this.localize.dir() });
        await animateTo(this.body, shimKeyframesHeightAuto(keyframes, this.body.scrollHeight), options);
        this.body.hidden = true;
        this.body.style.height = "auto";
        this.emit("sl-after-hide");
      }
    }
    /** Shows the details. */
    async show() {
      if (this.open || this.disabled) {
        return void 0;
      }
      this.open = true;
      return waitForEvent(this, "sl-after-show");
    }
    /** Hides the details */
    async hide() {
      if (!this.open || this.disabled) {
        return void 0;
      }
      this.open = false;
      return waitForEvent(this, "sl-after-hide");
    }
    render() {
      const isRtl = this.localize.dir() === "rtl";
      return y`
      <div
        part="base"
        class=${o5({
        details: true,
        "details--open": this.open,
        "details--disabled": this.disabled,
        "details--rtl": isRtl
      })}
      >
        <div
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open ? "true" : "false"}
          aria-controls="content"
          aria-disabled=${this.disabled ? "true" : "false"}
          tabindex=${this.disabled ? "-1" : "0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${isRtl ? "chevron-left" : "chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${isRtl ? "chevron-left" : "chevron-right"}></sl-icon>
            </slot>
          </span>
        </div>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </div>
    `;
    }
  };
  SlDetails.styles = details_styles_default;
  __decorateClass([
    i22(".details")
  ], SlDetails.prototype, "details", 2);
  __decorateClass([
    i22(".details__header")
  ], SlDetails.prototype, "header", 2);
  __decorateClass([
    i22(".details__body")
  ], SlDetails.prototype, "body", 2);
  __decorateClass([
    i22(".details__expand-icon-slot")
  ], SlDetails.prototype, "expandIconSlot", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlDetails.prototype, "open", 2);
  __decorateClass([
    e22()
  ], SlDetails.prototype, "summary", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlDetails.prototype, "disabled", 2);
  __decorateClass([
    watch("open", { waitUntilFirstUpdate: true })
  ], SlDetails.prototype, "handleOpenChange", 1);
  SlDetails = __decorateClass([
    e5("sl-details")
  ], SlDetails);
  setDefaultAnimation("details.show", {
    keyframes: [
      { height: "0", opacity: "0" },
      { height: "auto", opacity: "1" }
    ],
    options: { duration: 250, easing: "linear" }
  });
  setDefaultAnimation("details.hide", {
    keyframes: [
      { height: "auto", opacity: "1" },
      { height: "0", opacity: "0" }
    ],
    options: { duration: 250, easing: "linear" }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ERACEVGU.js
  var dialog_styles_default = i`
  ${component_styles_default}

  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.RTZG4SBY.js
  var SlDialog = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.hasSlotController = new HasSlotController(this, "footer");
      this.localize = new LocalizeController2(this);
      this.open = false;
      this.label = "";
      this.noHeader = false;
    }
    connectedCallback() {
      super.connectedCallback();
      this.handleDocumentKeyDown = this.handleDocumentKeyDown.bind(this);
      this.modal = new Modal(this);
    }
    firstUpdated() {
      this.dialog.hidden = !this.open;
      if (this.open) {
        this.addOpenListeners();
        this.modal.activate();
        lockBodyScrolling(this);
      }
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      unlockBodyScrolling(this);
    }
    requestClose(source) {
      const slRequestClose = this.emit("sl-request-close", {
        cancelable: true,
        detail: { source }
      });
      if (slRequestClose.defaultPrevented) {
        const animation = getAnimation(this, "dialog.denyClose", { dir: this.localize.dir() });
        animateTo(this.panel, animation.keyframes, animation.options);
        return;
      }
      this.hide();
    }
    addOpenListeners() {
      document.addEventListener("keydown", this.handleDocumentKeyDown);
    }
    removeOpenListeners() {
      document.removeEventListener("keydown", this.handleDocumentKeyDown);
    }
    handleDocumentKeyDown(event) {
      if (this.open && event.key === "Escape") {
        event.stopPropagation();
        this.requestClose("keyboard");
      }
    }
    async handleOpenChange() {
      if (this.open) {
        this.emit("sl-show");
        this.addOpenListeners();
        this.originalTrigger = document.activeElement;
        this.modal.activate();
        lockBodyScrolling(this);
        const autoFocusTarget = this.querySelector("[autofocus]");
        if (autoFocusTarget) {
          autoFocusTarget.removeAttribute("autofocus");
        }
        await Promise.all([stopAnimations(this.dialog), stopAnimations(this.overlay)]);
        this.dialog.hidden = false;
        requestAnimationFrame(() => {
          const slInitialFocus = this.emit("sl-initial-focus", { cancelable: true });
          if (!slInitialFocus.defaultPrevented) {
            if (autoFocusTarget) {
              autoFocusTarget.focus({ preventScroll: true });
            } else {
              this.panel.focus({ preventScroll: true });
            }
          }
          if (autoFocusTarget) {
            autoFocusTarget.setAttribute("autofocus", "");
          }
        });
        const panelAnimation = getAnimation(this, "dialog.show", { dir: this.localize.dir() });
        const overlayAnimation = getAnimation(this, "dialog.overlay.show", { dir: this.localize.dir() });
        await Promise.all([
          animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options),
          animateTo(this.overlay, overlayAnimation.keyframes, overlayAnimation.options)
        ]);
        this.emit("sl-after-show");
      } else {
        this.emit("sl-hide");
        this.removeOpenListeners();
        this.modal.deactivate();
        await Promise.all([stopAnimations(this.dialog), stopAnimations(this.overlay)]);
        const panelAnimation = getAnimation(this, "dialog.hide", { dir: this.localize.dir() });
        const overlayAnimation = getAnimation(this, "dialog.overlay.hide", { dir: this.localize.dir() });
        await Promise.all([
          animateTo(this.overlay, overlayAnimation.keyframes, overlayAnimation.options).then(() => {
            this.overlay.hidden = true;
          }),
          animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options).then(() => {
            this.panel.hidden = true;
          })
        ]);
        this.dialog.hidden = true;
        this.overlay.hidden = false;
        this.panel.hidden = false;
        unlockBodyScrolling(this);
        const trigger = this.originalTrigger;
        if (typeof (trigger == null ? void 0 : trigger.focus) === "function") {
          setTimeout(() => trigger.focus());
        }
        this.emit("sl-after-hide");
      }
    }
    /** Shows the dialog. */
    async show() {
      if (this.open) {
        return void 0;
      }
      this.open = true;
      return waitForEvent(this, "sl-after-show");
    }
    /** Hides the dialog */
    async hide() {
      if (!this.open) {
        return void 0;
      }
      this.open = false;
      return waitForEvent(this, "sl-after-hide");
    }
    render() {
      return y`
      <div
        part="base"
        class=${o5({
        dialog: true,
        "dialog--open": this.open,
        "dialog--has-footer": this.hasSlotController.test("footer")
      })}
      >
        <div part="overlay" class="dialog__overlay" @click=${() => this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open ? "false" : "true"}
          aria-label=${l5(this.noHeader ? this.label : void 0)}
          aria-labelledby=${l5(!this.noHeader ? "title" : void 0)}
          tabindex="0"
        >
          ${!this.noHeader ? y`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length > 0 ? this.label : String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${() => this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              ` : ""}

          <slot part="body" class="dialog__body"></slot>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `;
    }
  };
  SlDialog.styles = dialog_styles_default;
  __decorateClass([
    i22(".dialog")
  ], SlDialog.prototype, "dialog", 2);
  __decorateClass([
    i22(".dialog__panel")
  ], SlDialog.prototype, "panel", 2);
  __decorateClass([
    i22(".dialog__overlay")
  ], SlDialog.prototype, "overlay", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlDialog.prototype, "open", 2);
  __decorateClass([
    e22({ reflect: true })
  ], SlDialog.prototype, "label", 2);
  __decorateClass([
    e22({ attribute: "no-header", type: Boolean, reflect: true })
  ], SlDialog.prototype, "noHeader", 2);
  __decorateClass([
    watch("open", { waitUntilFirstUpdate: true })
  ], SlDialog.prototype, "handleOpenChange", 1);
  SlDialog = __decorateClass([
    e5("sl-dialog")
  ], SlDialog);
  setDefaultAnimation("dialog.show", {
    keyframes: [
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1 }
    ],
    options: { duration: 250, easing: "ease" }
  });
  setDefaultAnimation("dialog.hide", {
    keyframes: [
      { opacity: 1, scale: 1 },
      { opacity: 0, scale: 0.8 }
    ],
    options: { duration: 250, easing: "ease" }
  });
  setDefaultAnimation("dialog.denyClose", {
    keyframes: [{ scale: 1 }, { scale: 1.02 }, { scale: 1 }],
    options: { duration: 250 }
  });
  setDefaultAnimation("dialog.overlay.show", {
    keyframes: [{ opacity: 0 }, { opacity: 1 }],
    options: { duration: 250 }
  });
  setDefaultAnimation("dialog.overlay.hide", {
    keyframes: [{ opacity: 1 }, { opacity: 0 }],
    options: { duration: 250 }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.Q7VOXEWK.js
  var divider_styles_default = i`
  ${component_styles_default}

  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3FDOQGW5.js
  var SlDivider = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.vertical = false;
    }
    connectedCallback() {
      super.connectedCallback();
      this.setAttribute("role", "separator");
    }
    handleVerticalChange() {
      this.setAttribute("aria-orientation", this.vertical ? "vertical" : "horizontal");
    }
  };
  SlDivider.styles = divider_styles_default;
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlDivider.prototype, "vertical", 2);
  __decorateClass([
    watch("vertical")
  ], SlDivider.prototype, "handleVerticalChange", 1);
  SlDivider = __decorateClass([
    e5("sl-divider")
  ], SlDivider);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.PNOB3JXQ.js
  var carousel_styles_default = i`
  ${component_styles_default}

  :host {
    --slide-gap: var(--sl-spacing-medium, 1rem);
    --aspect-ratio: 16 / 9;
    --scroll-hint: 0px;

    display: flex;
  }

  .carousel {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: 1fr min-content;
    grid-template-areas:
      '. slides .'
      '. pagination .';
    gap: var(--sl-spacing-medium);
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  .carousel__pagination {
    grid-area: pagination;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--sl-spacing-small);
  }

  .carousel__slides {
    grid-area: slides;

    display: grid;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-items: center;
    overflow: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
    border-radius: var(--sl-border-radius-small);

    --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
  }

  @media (prefers-reduced-motion) {
    :where(.carousel__slides) {
      scroll-behavior: auto;
    }
  }

  .carousel__slides--horizontal {
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    grid-auto-rows: 100%;
    column-gap: var(--slide-gap);
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--scroll-hint);
    padding-inline: var(--scroll-hint);
    overflow-y: hidden;
  }

  .carousel__slides--vertical {
    grid-auto-flow: row;
    grid-auto-columns: 100%;
    grid-auto-rows: var(--slide-size);
    row-gap: var(--slide-gap);
    scroll-snap-type: y mandatory;
    scroll-padding-block: var(--scroll-hint);
    padding-block: var(--scroll-hint);
    overflow-x: hidden;
  }

  .carousel__slides--dragging,
  .carousel__slides--dropping {
    scroll-snap-type: unset;
  }

  :host([vertical]) ::slotted(sl-carousel-item) {
    height: 100%;
  }

  .carousel__slides::-webkit-scrollbar {
    display: none;
  }

  .carousel__navigation {
    grid-area: navigation;
    display: contents;
    font-size: var(--sl-font-size-x-large);
  }

  .carousel__navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-small);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    appearance: none;
  }

  .carousel__navigation-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .carousel__navigation-button--disabled::part(base) {
    pointer-events: none;
  }

  .carousel__navigation-button--previous {
    grid-column: 1;
    grid-row: 1;
  }

  .carousel__navigation-button--next {
    grid-column: 3;
    grid-row: 1;
  }

  .carousel__pagination-item {
    display: block;
    cursor: pointer;
    background: none;
    border: 0;
    border-radius: var(--sl-border-radius-circle);
    width: var(--sl-spacing-small);
    height: var(--sl-spacing-small);
    background-color: var(--sl-color-neutral-300);
    padding: 0;
    margin: 0;
  }

  .carousel__pagination-item--active {
    background-color: var(--sl-color-neutral-700);
    transform: scale(1.2);
  }

  /* Focus styles */
  .carousel__slides:focus-visible,
  .carousel__navigation-button:focus-visible,
  .carousel__pagination-item:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.MXKKAVOJ.js
  var TIMER_ID_KEY = Symbol();
  var debounce = (delay) => {
    return (_target, _propertyKey, descriptor) => {
      const fn = descriptor.value;
      descriptor.value = function(...args) {
        clearTimeout(this[TIMER_ID_KEY]);
        this[TIMER_ID_KEY] = window.setTimeout(() => {
          fn.apply(this, args);
        }, delay);
      };
    };
  };
  var ScrollController = class {
    constructor(host) {
      this.pointers = /* @__PURE__ */ new Set();
      this.dragging = false;
      this.scrolling = false;
      this.mouseDragging = false;
      this.host = host;
      host.addController(this);
      this.handleScroll = this.handleScroll.bind(this);
      this.handlePointerDown = this.handlePointerDown.bind(this);
      this.handlePointerMove = this.handlePointerMove.bind(this);
      this.handlePointerUp = this.handlePointerUp.bind(this);
      this.handlePointerUp = this.handlePointerUp.bind(this);
      this.handleTouchStart = this.handleTouchStart.bind(this);
      this.handleTouchEnd = this.handleTouchEnd.bind(this);
    }
    async hostConnected() {
      const host = this.host;
      await host.updateComplete;
      const scrollContainer = host.scrollContainer;
      scrollContainer.addEventListener("scroll", this.handleScroll, { passive: true });
      scrollContainer.addEventListener("pointerdown", this.handlePointerDown);
      scrollContainer.addEventListener("pointerup", this.handlePointerUp);
      scrollContainer.addEventListener("pointercancel", this.handlePointerUp);
      scrollContainer.addEventListener("touchstart", this.handleTouchStart, { passive: true });
      scrollContainer.addEventListener("touchend", this.handleTouchEnd);
    }
    hostDisconnected() {
      const host = this.host;
      const scrollContainer = host.scrollContainer;
      scrollContainer.removeEventListener("scroll", this.handleScroll);
      scrollContainer.removeEventListener("pointerdown", this.handlePointerDown);
      scrollContainer.removeEventListener("pointerup", this.handlePointerUp);
      scrollContainer.removeEventListener("pointercancel", this.handlePointerUp);
      scrollContainer.removeEventListener("touchstart", this.handleTouchStart);
      scrollContainer.removeEventListener("touchend", this.handleTouchEnd);
    }
    handleScroll() {
      if (!this.scrolling) {
        this.scrolling = true;
        this.host.requestUpdate();
      }
      this.handleScrollEnd();
    }
    handleScrollEnd() {
      if (!this.pointers.size) {
        this.scrolling = false;
        this.host.scrollContainer.dispatchEvent(
          new CustomEvent("scrollend", {
            bubbles: false,
            cancelable: false
          })
        );
        this.host.requestUpdate();
      } else {
        this.handleScrollEnd();
      }
    }
    handlePointerDown(event) {
      if (event.pointerType === "touch") {
        return;
      }
      this.pointers.add(event.pointerId);
      const canDrag = this.mouseDragging && !this.dragging && event.button === 0;
      if (canDrag) {
        event.preventDefault();
        this.host.scrollContainer.addEventListener("pointermove", this.handlePointerMove);
      }
    }
    handlePointerMove(event) {
      const scrollContainer = this.host.scrollContainer;
      const hasMoved = !!event.movementX || !!event.movementY;
      if (!this.dragging && hasMoved) {
        scrollContainer.setPointerCapture(event.pointerId);
        this.handleDragStart();
      } else if (scrollContainer.hasPointerCapture(event.pointerId)) {
        this.handleDrag(event);
      }
    }
    handlePointerUp(event) {
      this.pointers.delete(event.pointerId);
      this.host.scrollContainer.releasePointerCapture(event.pointerId);
      if (this.pointers.size === 0) {
        this.handleDragEnd();
      }
    }
    handleTouchEnd(event) {
      for (const touch of event.changedTouches) {
        this.pointers.delete(touch.identifier);
      }
    }
    handleTouchStart(event) {
      for (const touch of event.touches) {
        this.pointers.add(touch.identifier);
      }
    }
    handleDragStart() {
      const host = this.host;
      this.dragging = true;
      host.scrollContainer.style.setProperty("scroll-snap-type", "unset");
      host.requestUpdate();
    }
    handleDrag(event) {
      this.host.scrollContainer.scrollBy({
        left: -event.movementX,
        top: -event.movementY
      });
    }
    async handleDragEnd() {
      const host = this.host;
      const scrollContainer = host.scrollContainer;
      scrollContainer.removeEventListener("pointermove", this.handlePointerMove);
      this.dragging = false;
      const startLeft = scrollContainer.scrollLeft;
      const startTop = scrollContainer.scrollTop;
      scrollContainer.style.removeProperty("scroll-snap-type");
      const finalLeft = scrollContainer.scrollLeft;
      const finalTop = scrollContainer.scrollTop;
      scrollContainer.style.setProperty("scroll-snap-type", "unset");
      scrollContainer.scrollTo({ left: startLeft, top: startTop, behavior: "auto" });
      scrollContainer.scrollTo({ left: finalLeft, top: finalTop, behavior: prefersReducedMotion() ? "auto" : "smooth" });
      if (this.scrolling) {
        await waitForEvent(scrollContainer, "scrollend");
      }
      scrollContainer.style.removeProperty("scroll-snap-type");
      host.requestUpdate();
    }
  };
  __decorateClass([
    debounce(100)
  ], ScrollController.prototype, "handleScrollEnd", 1);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.NNN7KQVN.js
  var carousel_item_styles_default = i`
  ${component_styles_default}

  :host {
    --aspect-ratio: inherit;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    aspect-ratio: var(--aspect-ratio);
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  ::slotted(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TDICIOWC.js
  var SlCarouselItem = class extends ShoelaceElement {
    static isCarouselItem(node) {
      return node instanceof Element && node.getAttribute("aria-roledescription") === "slide";
    }
    connectedCallback() {
      super.connectedCallback();
      this.setAttribute("role", "group");
    }
    render() {
      return y` <slot></slot> `;
    }
  };
  SlCarouselItem.styles = carousel_item_styles_default;
  SlCarouselItem = __decorateClass([
    e5("sl-carousel-item")
  ], SlCarouselItem);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.F4VGSDIW.js
  var AutoplayController = class {
    constructor(host, tickCallback) {
      this.timerId = 0;
      this.activeInteractions = 0;
      this.paused = false;
      this.stopped = true;
      this.pause = () => {
        if (!this.activeInteractions++) {
          this.paused = true;
          this.host.requestUpdate();
        }
      };
      this.resume = () => {
        if (!--this.activeInteractions) {
          this.paused = false;
          this.host.requestUpdate();
        }
      };
      host.addController(this);
      this.host = host;
      this.tickCallback = tickCallback;
    }
    hostConnected() {
      this.host.addEventListener("mouseenter", this.pause);
      this.host.addEventListener("mouseleave", this.resume);
      this.host.addEventListener("focusin", this.pause);
      this.host.addEventListener("focusout", this.resume);
      this.host.addEventListener("touchstart", this.pause, { passive: true });
      this.host.addEventListener("touchend", this.resume);
    }
    hostDisconnected() {
      this.stop();
      this.host.removeEventListener("mouseenter", this.pause);
      this.host.removeEventListener("mouseleave", this.resume);
      this.host.removeEventListener("focusin", this.pause);
      this.host.removeEventListener("focusout", this.resume);
      this.host.removeEventListener("touchstart", this.pause);
      this.host.removeEventListener("touchend", this.resume);
    }
    start(interval) {
      this.stop();
      this.stopped = false;
      this.timerId = window.setInterval(() => {
        if (!this.paused) {
          this.tickCallback();
        }
      }, interval);
    }
    stop() {
      clearInterval(this.timerId);
      this.stopped = true;
      this.host.requestUpdate();
    }
  };

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TDXYRAD2.js
  function* o24(o43, f4) {
    if (void 0 !== o43) {
      let i25 = 0;
      for (const t23 of o43)
        yield f4(t23, i25++);
    }
  }
  function* o33(o43, l8, n9 = 1) {
    const t23 = void 0 === l8 ? 0 : o43;
    null != l8 || (l8 = o43);
    for (let o52 = t23; n9 > 0 ? o52 < l8 : l8 < o52; o52 += n9)
      yield o52;
  }
  var SlCarousel = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.loop = false;
      this.navigation = false;
      this.pagination = false;
      this.autoplay = false;
      this.autoplayInterval = 3e3;
      this.slidesPerPage = 1;
      this.slidesPerMove = 1;
      this.orientation = "horizontal";
      this.mouseDragging = false;
      this.activeSlide = 0;
      this.autoplayController = new AutoplayController(this, () => this.next());
      this.scrollController = new ScrollController(this);
      this.slides = this.getElementsByTagName("sl-carousel-item");
      this.intersectionObserverEntries = /* @__PURE__ */ new Map();
      this.localize = new LocalizeController(this);
    }
    connectedCallback() {
      super.connectedCallback();
      this.setAttribute("role", "region");
      this.setAttribute("aria-label", this.localize.term("carousel"));
      const intersectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            this.intersectionObserverEntries.set(entry.target, entry);
            const slide = entry.target;
            slide.toggleAttribute("inert", !entry.isIntersecting);
            slide.classList.toggle("--in-view", entry.isIntersecting);
            slide.setAttribute("aria-hidden", entry.isIntersecting ? "false" : "true");
          });
        },
        {
          root: this,
          threshold: 0.6
        }
      );
      this.intersectionObserver = intersectionObserver;
      intersectionObserver.takeRecords().forEach((entry) => {
        this.intersectionObserverEntries.set(entry.target, entry);
      });
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this.intersectionObserver.disconnect();
      this.mutationObserver.disconnect();
    }
    firstUpdated() {
      this.initializeSlides();
      this.mutationObserver = new MutationObserver(this.handleSlotChange.bind(this));
      this.mutationObserver.observe(this, { childList: true, subtree: false });
    }
    getPageCount() {
      return Math.ceil(this.getSlides().length / this.slidesPerPage);
    }
    getCurrentPage() {
      return Math.floor(this.activeSlide / this.slidesPerPage);
    }
    getSlides({ excludeClones = true } = {}) {
      return [...this.slides].filter((slide) => !excludeClones || !slide.hasAttribute("data-clone"));
    }
    handleKeyDown(event) {
      if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
        const target = event.target;
        const isRtl = this.localize.dir() === "rtl";
        const isFocusInPagination = target.closest('[part~="pagination-item"]') !== null;
        const isNext = event.key === "ArrowDown" || !isRtl && event.key === "ArrowRight" || isRtl && event.key === "ArrowLeft";
        const isPrevious = event.key === "ArrowUp" || !isRtl && event.key === "ArrowLeft" || isRtl && event.key === "ArrowRight";
        event.preventDefault();
        if (isPrevious) {
          this.previous();
        }
        if (isNext) {
          this.next();
        }
        if (event.key === "Home") {
          this.goToSlide(0);
        }
        if (event.key === "End") {
          this.goToSlide(this.getSlides().length - 1);
        }
        if (isFocusInPagination) {
          this.updateComplete.then(() => {
            var _a;
            const activePaginationItem = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector(
              '[part~="pagination-item--active"]'
            );
            if (activePaginationItem) {
              activePaginationItem.focus();
            }
          });
        }
      }
    }
    handleScrollEnd() {
      const slides = this.getSlides();
      const entries = [...this.intersectionObserverEntries.values()];
      const firstIntersecting = entries.find((entry) => entry.isIntersecting);
      if (this.loop && (firstIntersecting == null ? void 0 : firstIntersecting.target.hasAttribute("data-clone"))) {
        const clonePosition = Number(firstIntersecting.target.getAttribute("data-clone"));
        this.goToSlide(clonePosition, "auto");
        return;
      }
      if (firstIntersecting) {
        this.activeSlide = slides.indexOf(firstIntersecting.target);
      }
    }
    handleSlotChange(mutations) {
      const needsInitialization = mutations.some(
        (mutation) => [...mutation.addedNodes, ...mutation.removedNodes].some(
          (node) => SlCarouselItem.isCarouselItem(node) && !node.hasAttribute("data-clone")
        )
      );
      if (needsInitialization) {
        this.initializeSlides();
      }
      this.requestUpdate();
    }
    initializeSlides() {
      const slides = this.getSlides();
      const intersectionObserver = this.intersectionObserver;
      this.intersectionObserverEntries.clear();
      this.getSlides({ excludeClones: false }).forEach((slide, index) => {
        intersectionObserver.unobserve(slide);
        slide.classList.remove("--in-view");
        slide.classList.remove("--is-active");
        slide.setAttribute("aria-label", this.localize.term("slideNum", index + 1));
        if (slide.hasAttribute("data-clone")) {
          slide.remove();
        }
      });
      if (this.loop) {
        const slidesPerPage = this.slidesPerPage;
        const lastSlides = slides.slice(-slidesPerPage);
        const firstSlides = slides.slice(0, slidesPerPage);
        lastSlides.reverse().forEach((slide, i25) => {
          const clone = slide.cloneNode(true);
          clone.setAttribute("data-clone", String(slides.length - i25 - 1));
          this.prepend(clone);
        });
        firstSlides.forEach((slide, i25) => {
          const clone = slide.cloneNode(true);
          clone.setAttribute("data-clone", String(i25));
          this.append(clone);
        });
      }
      this.getSlides({ excludeClones: false }).forEach((slide) => {
        intersectionObserver.observe(slide);
      });
      this.goToSlide(this.activeSlide, "auto");
    }
    handelSlideChange() {
      const slides = this.getSlides();
      slides.forEach((slide, i25) => {
        slide.classList.toggle("--is-active", i25 === this.activeSlide);
      });
      if (this.hasUpdated) {
        this.emit("sl-slide-change", {
          detail: {
            index: this.activeSlide,
            slide: slides[this.activeSlide]
          }
        });
      }
    }
    handleSlidesPerMoveChange() {
      const slides = this.getSlides({ excludeClones: false });
      const slidesPerMove = this.slidesPerMove;
      slides.forEach((slide, i25) => {
        const shouldSnap = Math.abs(i25 - slidesPerMove) % slidesPerMove === 0;
        if (shouldSnap) {
          slide.style.removeProperty("scroll-snap-align");
        } else {
          slide.style.setProperty("scroll-snap-align", "none");
        }
      });
    }
    handleAutoplayChange() {
      this.autoplayController.stop();
      if (this.autoplay) {
        this.autoplayController.start(this.autoplayInterval);
      }
    }
    handleMouseDraggingChange() {
      this.scrollController.mouseDragging = this.mouseDragging;
    }
    /**
     * Move the carousel backward by `slides-per-move` slides.
     *
     * @param behavior - The behavior used for scrolling.
     */
    previous(behavior = "smooth") {
      this.goToSlide(this.activeSlide - this.slidesPerMove, behavior);
    }
    /**
     * Move the carousel forward by `slides-per-move` slides.
     *
     * @param behavior - The behavior used for scrolling.
     */
    next(behavior = "smooth") {
      this.goToSlide(this.activeSlide + this.slidesPerMove, behavior);
    }
    /**
     * Scrolls the carousel to the slide specified by `index`.
     *
     * @param index - The slide index.
     * @param behavior - The behavior used for scrolling.
     */
    goToSlide(index, behavior = "smooth") {
      const { slidesPerPage, loop, scrollContainer } = this;
      const slides = this.getSlides();
      const slidesWithClones = this.getSlides({ excludeClones: false });
      const newActiveSlide = (index + slides.length) % slides.length;
      this.activeSlide = newActiveSlide;
      const nextSlideIndex = clamp(index + (loop ? slidesPerPage : 0), 0, slidesWithClones.length - 1);
      const nextSlide = slidesWithClones[nextSlideIndex];
      const scrollContainerRect = scrollContainer.getBoundingClientRect();
      const nextSlideRect = nextSlide.getBoundingClientRect();
      scrollContainer.scrollTo({
        left: nextSlideRect.left - scrollContainerRect.left + scrollContainer.scrollLeft,
        top: nextSlideRect.top - scrollContainerRect.top + scrollContainer.scrollTop,
        behavior: prefersReducedMotion() ? "auto" : behavior
      });
    }
    render() {
      const { scrollController, slidesPerPage } = this;
      const pagesCount = this.getPageCount();
      const currentPage = this.getCurrentPage();
      const prevEnabled = this.loop || currentPage > 0;
      const nextEnabled = this.loop || currentPage < pagesCount - 1;
      const isLtr = this.localize.dir() === "ltr";
      return y`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${o5({
        carousel__slides: true,
        "carousel__slides--horizontal": this.orientation === "horizontal",
        "carousel__slides--vertical": this.orientation === "vertical"
      })}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${scrollController.scrolling ? "true" : "false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @scrollend=${this.handleScrollEnd}
        >
          <slot></slot>
        </div>

        ${this.navigation ? y`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${o5({
        "carousel__navigation-button": true,
        "carousel__navigation-button--previous": true,
        "carousel__navigation-button--disabled": !prevEnabled
      })}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${prevEnabled ? "false" : "true"}"
                  @click=${prevEnabled ? () => this.previous() : null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${isLtr ? "chevron-left" : "chevron-right"}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${o5({
        "carousel__navigation-button": true,
        "carousel__navigation-button--next": true,
        "carousel__navigation-button--disabled": !nextEnabled
      })}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${nextEnabled ? "false" : "true"}"
                  @click=${nextEnabled ? () => this.next() : null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${isLtr ? "chevron-right" : "chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            ` : ""}
        ${this.pagination ? y`
              <div part="pagination" role="tablist" class="carousel__pagination" aria-controls="scroll-container">
                ${o24(o33(pagesCount), (index) => {
        const isActive = index === currentPage;
        return y`
                    <button
                      part="pagination-item ${isActive ? "pagination-item--active" : ""}"
                      class="${o5({
          "carousel__pagination-item": true,
          "carousel__pagination-item--active": isActive
        })}"
                      role="tab"
                      aria-selected="${isActive ? "true" : "false"}"
                      aria-label="${this.localize.term("goToSlide", index + 1, pagesCount)}"
                      tabindex=${isActive ? "0" : "-1"}
                      @click=${() => this.goToSlide(index * slidesPerPage)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `;
      })}
              </div>
            ` : ""}
      </div>
    `;
    }
  };
  SlCarousel.styles = carousel_styles_default;
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlCarousel.prototype, "loop", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlCarousel.prototype, "navigation", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlCarousel.prototype, "pagination", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlCarousel.prototype, "autoplay", 2);
  __decorateClass([
    e22({ type: Number, attribute: "autoplay-interval" })
  ], SlCarousel.prototype, "autoplayInterval", 2);
  __decorateClass([
    e22({ type: Number, attribute: "slides-per-page" })
  ], SlCarousel.prototype, "slidesPerPage", 2);
  __decorateClass([
    e22({ type: Number, attribute: "slides-per-move" })
  ], SlCarousel.prototype, "slidesPerMove", 2);
  __decorateClass([
    e22()
  ], SlCarousel.prototype, "orientation", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true, attribute: "mouse-dragging" })
  ], SlCarousel.prototype, "mouseDragging", 2);
  __decorateClass([
    i22("slot:not([name])")
  ], SlCarousel.prototype, "defaultSlot", 2);
  __decorateClass([
    i22(".carousel__slides")
  ], SlCarousel.prototype, "scrollContainer", 2);
  __decorateClass([
    i22(".carousel__pagination")
  ], SlCarousel.prototype, "paginationContainer", 2);
  __decorateClass([
    t4()
  ], SlCarousel.prototype, "activeSlide", 2);
  __decorateClass([
    watch("loop", { waitUntilFirstUpdate: true }),
    watch("slidesPerPage", { waitUntilFirstUpdate: true })
  ], SlCarousel.prototype, "initializeSlides", 1);
  __decorateClass([
    watch("activeSlide")
  ], SlCarousel.prototype, "handelSlideChange", 1);
  __decorateClass([
    watch("slidesPerMove")
  ], SlCarousel.prototype, "handleSlidesPerMoveChange", 1);
  __decorateClass([
    watch("autoplay")
  ], SlCarousel.prototype, "handleAutoplayChange", 1);
  __decorateClass([
    watch("mouseDragging")
  ], SlCarousel.prototype, "handleMouseDraggingChange", 1);
  SlCarousel = __decorateClass([
    e5("sl-carousel")
  ], SlCarousel);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.OLABFFKC.js
  var checkbox_styles_default = i`
  ${component_styles_default}

  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.CKDZLWPL.js
  var SlCheckbox = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.formControlController = new FormControlController(this, {
        value: (control) => control.checked ? control.value || "on" : void 0,
        defaultValue: (control) => control.defaultChecked,
        setValue: (control, checked) => control.checked = checked
      });
      this.hasFocus = false;
      this.title = "";
      this.name = "";
      this.size = "medium";
      this.disabled = false;
      this.checked = false;
      this.indeterminate = false;
      this.defaultChecked = false;
      this.form = "";
      this.required = false;
    }
    /** Gets the validity state object */
    get validity() {
      return this.input.validity;
    }
    /** Gets the validation message */
    get validationMessage() {
      return this.input.validationMessage;
    }
    firstUpdated() {
      this.formControlController.updateValidity();
    }
    handleClick() {
      this.checked = !this.checked;
      this.indeterminate = false;
      this.emit("sl-change");
    }
    handleBlur() {
      this.hasFocus = false;
      this.emit("sl-blur");
    }
    handleInput() {
      this.emit("sl-input");
    }
    handleInvalid(event) {
      this.formControlController.setValidity(false);
      this.formControlController.emitInvalidEvent(event);
    }
    handleFocus() {
      this.hasFocus = true;
      this.emit("sl-focus");
    }
    handleDisabledChange() {
      this.formControlController.setValidity(this.disabled);
    }
    handleStateChange() {
      this.input.checked = this.checked;
      this.input.indeterminate = this.indeterminate;
      this.formControlController.updateValidity();
    }
    /** Simulates a click on the checkbox. */
    click() {
      this.input.click();
    }
    /** Sets focus on the checkbox. */
    focus(options) {
      this.input.focus(options);
    }
    /** Removes focus from the checkbox. */
    blur() {
      this.input.blur();
    }
    /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
    checkValidity() {
      return this.input.checkValidity();
    }
    /** Gets the associated form, if one exists. */
    getForm() {
      return this.formControlController.getForm();
    }
    /** Checks for validity and shows the browser's validation message if the control is invalid. */
    reportValidity() {
      return this.input.reportValidity();
    }
    /**
     * Sets a custom validation message. The value provided will be shown to the user when the form is submitted. To clear
     * the custom validation message, call this method with an empty string.
     */
    setCustomValidity(message) {
      this.input.setCustomValidity(message);
      this.formControlController.updateValidity();
    }
    render() {
      return y`
      <label
        part="base"
        class=${o5({
        checkbox: true,
        "checkbox--checked": this.checked,
        "checkbox--disabled": this.disabled,
        "checkbox--focused": this.hasFocus,
        "checkbox--indeterminate": this.indeterminate,
        "checkbox--small": this.size === "small",
        "checkbox--medium": this.size === "medium",
        "checkbox--large": this.size === "large"
      })}
      >
        <input
          class="checkbox__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${l5(this.value)}
          .indeterminate=${l22(this.indeterminate)}
          .checked=${l22(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          aria-checked=${this.checked ? "true" : "false"}
          @click=${this.handleClick}
          @input=${this.handleInput}
          @invalid=${this.handleInvalid}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        />

        <span
          part="control${this.checked ? " control--checked" : ""}${this.indeterminate ? " control--indeterminate" : ""}"
          class="checkbox__control"
        >
          ${this.checked ? y`
                <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
              ` : ""}
          ${!this.checked && this.indeterminate ? y`
                <sl-icon
                  part="indeterminate-icon"
                  class="checkbox__indeterminate-icon"
                  library="system"
                  name="indeterminate"
                ></sl-icon>
              ` : ""}
        </span>

        <div part="label" class="checkbox__label">
          <slot></slot>
        </div>
      </label>
    `;
    }
  };
  SlCheckbox.styles = checkbox_styles_default;
  __decorateClass([
    i22('input[type="checkbox"]')
  ], SlCheckbox.prototype, "input", 2);
  __decorateClass([
    t4()
  ], SlCheckbox.prototype, "hasFocus", 2);
  __decorateClass([
    e22()
  ], SlCheckbox.prototype, "title", 2);
  __decorateClass([
    e22()
  ], SlCheckbox.prototype, "name", 2);
  __decorateClass([
    e22()
  ], SlCheckbox.prototype, "value", 2);
  __decorateClass([
    e22({ reflect: true })
  ], SlCheckbox.prototype, "size", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlCheckbox.prototype, "disabled", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlCheckbox.prototype, "checked", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlCheckbox.prototype, "indeterminate", 2);
  __decorateClass([
    defaultValue("checked")
  ], SlCheckbox.prototype, "defaultChecked", 2);
  __decorateClass([
    e22({ reflect: true })
  ], SlCheckbox.prototype, "form", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlCheckbox.prototype, "required", 2);
  __decorateClass([
    watch("disabled", { waitUntilFirstUpdate: true })
  ], SlCheckbox.prototype, "handleDisabledChange", 1);
  __decorateClass([
    watch(["checked", "indeterminate"], { waitUntilFirstUpdate: true })
  ], SlCheckbox.prototype, "handleStateChange", 1);
  SlCheckbox = __decorateClass([
    e5("sl-checkbox")
  ], SlCheckbox);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.UDIREUTM.js
  var breadcrumb_item_styles_default = i`
  ${component_styles_default}

  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-600);
    line-height: var(--sl-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--sl-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--sl-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--sl-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--sl-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--sl-spacing-x-small);
    user-select: none;
  }
`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.VGA5RVOH.js
  var SlBreadcrumbItem = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.hasSlotController = new HasSlotController(this, "prefix", "suffix");
      this.rel = "noreferrer noopener";
    }
    render() {
      const isLink = this.href ? true : false;
      return y`
      <div
        part="base"
        class=${o5({
        "breadcrumb-item": true,
        "breadcrumb-item--has-prefix": this.hasSlotController.test("prefix"),
        "breadcrumb-item--has-suffix": this.hasSlotController.test("suffix")
      })}
      >
        <slot name="prefix" part="prefix" class="breadcrumb-item__prefix"></slot>

        ${isLink ? y`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${l5(this.target ? this.target : void 0)}"
                rel=${l5(this.target ? this.rel : void 0)}
              >
                <slot></slot>
              </a>
            ` : y`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot></slot>
              </button>
            `}

        <slot name="suffix" part="suffix" class="breadcrumb-item__suffix"></slot>

        <slot name="separator" part="separator" class="breadcrumb-item__separator" aria-hidden="true"></slot>
      </div>
    `;
    }
  };
  SlBreadcrumbItem.styles = breadcrumb_item_styles_default;
  __decorateClass([
    e22()
  ], SlBreadcrumbItem.prototype, "href", 2);
  __decorateClass([
    e22()
  ], SlBreadcrumbItem.prototype, "target", 2);
  __decorateClass([
    e22()
  ], SlBreadcrumbItem.prototype, "rel", 2);
  SlBreadcrumbItem = __decorateClass([
    e5("sl-breadcrumb-item")
  ], SlBreadcrumbItem);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.AXWTNUN6.js
  var SlButton = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.formControlController = new FormControlController(this, {
        form: (input) => {
          if (input.hasAttribute("form")) {
            const doc = input.getRootNode();
            const formId = input.getAttribute("form");
            return doc.getElementById(formId);
          }
          return input.closest("form");
        },
        assumeInteractionOn: ["click"]
      });
      this.hasSlotController = new HasSlotController(this, "[default]", "prefix", "suffix");
      this.localize = new LocalizeController2(this);
      this.hasFocus = false;
      this.invalid = false;
      this.title = "";
      this.variant = "default";
      this.size = "medium";
      this.caret = false;
      this.disabled = false;
      this.loading = false;
      this.outline = false;
      this.pill = false;
      this.circle = false;
      this.type = "button";
      this.name = "";
      this.value = "";
      this.href = "";
      this.rel = "noreferrer noopener";
    }
    /** Gets the validity state object */
    get validity() {
      if (this.isButton()) {
        return this.button.validity;
      }
      return validValidityState;
    }
    /** Gets the validation message */
    get validationMessage() {
      if (this.isButton()) {
        return this.button.validationMessage;
      }
      return "";
    }
    connectedCallback() {
      super.connectedCallback();
      this.handleHostClick = this.handleHostClick.bind(this);
      this.addEventListener("click", this.handleHostClick);
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this.removeEventListener("click", this.handleHostClick);
    }
    firstUpdated() {
      if (this.isButton()) {
        this.formControlController.updateValidity();
      }
    }
    handleBlur() {
      this.hasFocus = false;
      this.emit("sl-blur");
    }
    handleFocus() {
      this.hasFocus = true;
      this.emit("sl-focus");
    }
    handleClick() {
      if (this.type === "submit") {
        this.formControlController.submit(this);
      }
      if (this.type === "reset") {
        this.formControlController.reset(this);
      }
    }
    handleHostClick(event) {
      if (this.disabled || this.loading) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    }
    handleInvalid(event) {
      this.formControlController.setValidity(false);
      this.formControlController.emitInvalidEvent(event);
    }
    isButton() {
      return this.href ? false : true;
    }
    isLink() {
      return this.href ? true : false;
    }
    handleDisabledChange() {
      if (this.isButton()) {
        this.formControlController.setValidity(this.disabled);
      }
    }
    /** Simulates a click on the button. */
    click() {
      this.button.click();
    }
    /** Sets focus on the button. */
    focus(options) {
      this.button.focus(options);
    }
    /** Removes focus from the button. */
    blur() {
      this.button.blur();
    }
    /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
    checkValidity() {
      if (this.isButton()) {
        return this.button.checkValidity();
      }
      return true;
    }
    /** Gets the associated form, if one exists. */
    getForm() {
      return this.formControlController.getForm();
    }
    /** Checks for validity and shows the browser's validation message if the control is invalid. */
    reportValidity() {
      if (this.isButton()) {
        return this.button.reportValidity();
      }
      return true;
    }
    /** Sets a custom validation message. Pass an empty string to restore validity. */
    setCustomValidity(message) {
      if (this.isButton()) {
        this.button.setCustomValidity(message);
        this.formControlController.updateValidity();
      }
    }
    render() {
      const isLink = this.isLink();
      const tag = isLink ? i5`a` : i5`button`;
      return n7`
      <${tag}
        part="base"
        class=${o5({
        button: true,
        "button--default": this.variant === "default",
        "button--primary": this.variant === "primary",
        "button--success": this.variant === "success",
        "button--neutral": this.variant === "neutral",
        "button--warning": this.variant === "warning",
        "button--danger": this.variant === "danger",
        "button--text": this.variant === "text",
        "button--small": this.size === "small",
        "button--medium": this.size === "medium",
        "button--large": this.size === "large",
        "button--caret": this.caret,
        "button--circle": this.circle,
        "button--disabled": this.disabled,
        "button--focused": this.hasFocus,
        "button--loading": this.loading,
        "button--standard": !this.outline,
        "button--outline": this.outline,
        "button--pill": this.pill,
        "button--rtl": this.localize.dir() === "rtl",
        "button--has-label": this.hasSlotController.test("[default]"),
        "button--has-prefix": this.hasSlotController.test("prefix"),
        "button--has-suffix": this.hasSlotController.test("suffix")
      })}
        ?disabled=${l5(isLink ? void 0 : this.disabled)}
        type=${l5(isLink ? void 0 : this.type)}
        title=${this.title}
        name=${l5(isLink ? void 0 : this.name)}
        value=${l5(isLink ? void 0 : this.value)}
        href=${l5(isLink ? this.href : void 0)}
        target=${l5(isLink ? this.target : void 0)}
        download=${l5(isLink ? this.download : void 0)}
        rel=${l5(isLink ? this.rel : void 0)}
        role=${l5(isLink ? void 0 : "button")}
        aria-disabled=${this.disabled ? "true" : "false"}
        tabindex=${this.disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton() ? this.handleInvalid : null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret ? n7` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> ` : ""}
        ${this.loading ? n7`<sl-spinner></sl-spinner>` : ""}
      </${tag}>
    `;
    }
  };
  SlButton.styles = button_styles_default;
  __decorateClass([
    i22(".button")
  ], SlButton.prototype, "button", 2);
  __decorateClass([
    t4()
  ], SlButton.prototype, "hasFocus", 2);
  __decorateClass([
    t4()
  ], SlButton.prototype, "invalid", 2);
  __decorateClass([
    e22()
  ], SlButton.prototype, "title", 2);
  __decorateClass([
    e22({ reflect: true })
  ], SlButton.prototype, "variant", 2);
  __decorateClass([
    e22({ reflect: true })
  ], SlButton.prototype, "size", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlButton.prototype, "caret", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlButton.prototype, "disabled", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlButton.prototype, "loading", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlButton.prototype, "outline", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlButton.prototype, "pill", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlButton.prototype, "circle", 2);
  __decorateClass([
    e22()
  ], SlButton.prototype, "type", 2);
  __decorateClass([
    e22()
  ], SlButton.prototype, "name", 2);
  __decorateClass([
    e22()
  ], SlButton.prototype, "value", 2);
  __decorateClass([
    e22()
  ], SlButton.prototype, "href", 2);
  __decorateClass([
    e22()
  ], SlButton.prototype, "target", 2);
  __decorateClass([
    e22()
  ], SlButton.prototype, "rel", 2);
  __decorateClass([
    e22()
  ], SlButton.prototype, "download", 2);
  __decorateClass([
    e22()
  ], SlButton.prototype, "form", 2);
  __decorateClass([
    e22({ attribute: "formaction" })
  ], SlButton.prototype, "formAction", 2);
  __decorateClass([
    e22({ attribute: "formenctype" })
  ], SlButton.prototype, "formEnctype", 2);
  __decorateClass([
    e22({ attribute: "formmethod" })
  ], SlButton.prototype, "formMethod", 2);
  __decorateClass([
    e22({ attribute: "formnovalidate", type: Boolean })
  ], SlButton.prototype, "formNoValidate", 2);
  __decorateClass([
    e22({ attribute: "formtarget" })
  ], SlButton.prototype, "formTarget", 2);
  __decorateClass([
    watch("disabled", { waitUntilFirstUpdate: true })
  ], SlButton.prototype, "handleDisabledChange", 1);
  SlButton = __decorateClass([
    e5("sl-button")
  ], SlButton);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TA75SLJE.js
  var spinner_styles_default = i`
  ${component_styles_default}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6FLA54KR.js
  var SlSpinner = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController2(this);
    }
    render() {
      return y`
      <svg part="base" class="spinner" role="progressbar" aria-valuetext=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `;
    }
  };
  SlSpinner.styles = spinner_styles_default;
  SlSpinner = __decorateClass([
    e5("sl-spinner")
  ], SlSpinner);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.XNCVUHYK.js
  var button_group_styles_default = i`
  ${component_styles_default}

  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.AWXN6RUJ.js
  var SlButtonGroup = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.disableRole = false;
      this.label = "";
    }
    handleFocus(event) {
      const button = findButton(event.target);
      button == null ? void 0 : button.classList.add("sl-button-group__button--focus");
    }
    handleBlur(event) {
      const button = findButton(event.target);
      button == null ? void 0 : button.classList.remove("sl-button-group__button--focus");
    }
    handleMouseOver(event) {
      const button = findButton(event.target);
      button == null ? void 0 : button.classList.add("sl-button-group__button--hover");
    }
    handleMouseOut(event) {
      const button = findButton(event.target);
      button == null ? void 0 : button.classList.remove("sl-button-group__button--hover");
    }
    handleSlotChange() {
      const slottedElements = [...this.defaultSlot.assignedElements({ flatten: true })];
      slottedElements.forEach((el) => {
        const index = slottedElements.indexOf(el);
        const button = findButton(el);
        if (button !== null) {
          button.classList.add("sl-button-group__button");
          button.classList.toggle("sl-button-group__button--first", index === 0);
          button.classList.toggle("sl-button-group__button--inner", index > 0 && index < slottedElements.length - 1);
          button.classList.toggle("sl-button-group__button--last", index === slottedElements.length - 1);
          button.classList.toggle("sl-button-group__button--radio", button.tagName.toLowerCase() === "sl-radio-button");
        }
      });
    }
    render() {
      return y`
      <slot
        part="base"
        class="button-group"
        role="${this.disableRole ? "presentation" : "group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
        @slotchange=${this.handleSlotChange}
      ></slot>
    `;
    }
  };
  SlButtonGroup.styles = button_group_styles_default;
  __decorateClass([
    i22("slot")
  ], SlButtonGroup.prototype, "defaultSlot", 2);
  __decorateClass([
    t4()
  ], SlButtonGroup.prototype, "disableRole", 2);
  __decorateClass([
    e22()
  ], SlButtonGroup.prototype, "label", 2);
  SlButtonGroup = __decorateClass([
    e5("sl-button-group")
  ], SlButtonGroup);
  function findButton(el) {
    var _a;
    const selector = "sl-button, sl-radio-button";
    return (_a = el.closest(selector)) != null ? _a : el.querySelector(selector);
  }

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.BZVXMWBD.js
  var card_styles_default = i`
  ${component_styles_default}

  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.OGSWONUA.js
  var SlCard = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.hasSlotController = new HasSlotController(this, "footer", "header", "image");
    }
    render() {
      return y`
      <div
        part="base"
        class=${o5({
        card: true,
        "card--has-footer": this.hasSlotController.test("footer"),
        "card--has-image": this.hasSlotController.test("image"),
        "card--has-header": this.hasSlotController.test("header")
      })}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `;
    }
  };
  SlCard.styles = card_styles_default;
  SlCard = __decorateClass([
    e5("sl-card")
  ], SlCard);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.H7DIVJJK.js
  var animation_styles_default = i`
  ${component_styles_default}

  :host {
    display: contents;
  }
`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.E4AJYFRU.js
  var dist_exports = {};
  __export(dist_exports, {
    backInDown: () => backInDown,
    backInLeft: () => backInLeft,
    backInRight: () => backInRight,
    backInUp: () => backInUp,
    backOutDown: () => backOutDown,
    backOutLeft: () => backOutLeft,
    backOutRight: () => backOutRight,
    backOutUp: () => backOutUp,
    bounce: () => bounce,
    bounceIn: () => bounceIn,
    bounceInDown: () => bounceInDown,
    bounceInLeft: () => bounceInLeft,
    bounceInRight: () => bounceInRight,
    bounceInUp: () => bounceInUp,
    bounceOut: () => bounceOut,
    bounceOutDown: () => bounceOutDown,
    bounceOutLeft: () => bounceOutLeft,
    bounceOutRight: () => bounceOutRight,
    bounceOutUp: () => bounceOutUp,
    easings: () => easings,
    fadeIn: () => fadeIn,
    fadeInBottomLeft: () => fadeInBottomLeft,
    fadeInBottomRight: () => fadeInBottomRight,
    fadeInDown: () => fadeInDown,
    fadeInDownBig: () => fadeInDownBig,
    fadeInLeft: () => fadeInLeft,
    fadeInLeftBig: () => fadeInLeftBig,
    fadeInRight: () => fadeInRight,
    fadeInRightBig: () => fadeInRightBig,
    fadeInTopLeft: () => fadeInTopLeft,
    fadeInTopRight: () => fadeInTopRight,
    fadeInUp: () => fadeInUp,
    fadeInUpBig: () => fadeInUpBig,
    fadeOut: () => fadeOut,
    fadeOutBottomLeft: () => fadeOutBottomLeft,
    fadeOutBottomRight: () => fadeOutBottomRight,
    fadeOutDown: () => fadeOutDown,
    fadeOutDownBig: () => fadeOutDownBig,
    fadeOutLeft: () => fadeOutLeft,
    fadeOutLeftBig: () => fadeOutLeftBig,
    fadeOutRight: () => fadeOutRight,
    fadeOutRightBig: () => fadeOutRightBig,
    fadeOutTopLeft: () => fadeOutTopLeft,
    fadeOutTopRight: () => fadeOutTopRight,
    fadeOutUp: () => fadeOutUp,
    fadeOutUpBig: () => fadeOutUpBig,
    flash: () => flash,
    flip: () => flip,
    flipInX: () => flipInX,
    flipInY: () => flipInY,
    flipOutX: () => flipOutX,
    flipOutY: () => flipOutY,
    headShake: () => headShake,
    heartBeat: () => heartBeat,
    hinge: () => hinge,
    jackInTheBox: () => jackInTheBox,
    jello: () => jello,
    lightSpeedInLeft: () => lightSpeedInLeft,
    lightSpeedInRight: () => lightSpeedInRight,
    lightSpeedOutLeft: () => lightSpeedOutLeft,
    lightSpeedOutRight: () => lightSpeedOutRight,
    pulse: () => pulse,
    rollIn: () => rollIn,
    rollOut: () => rollOut,
    rotateIn: () => rotateIn,
    rotateInDownLeft: () => rotateInDownLeft,
    rotateInDownRight: () => rotateInDownRight,
    rotateInUpLeft: () => rotateInUpLeft,
    rotateInUpRight: () => rotateInUpRight,
    rotateOut: () => rotateOut,
    rotateOutDownLeft: () => rotateOutDownLeft,
    rotateOutDownRight: () => rotateOutDownRight,
    rotateOutUpLeft: () => rotateOutUpLeft,
    rotateOutUpRight: () => rotateOutUpRight,
    rubberBand: () => rubberBand,
    shake: () => shake,
    shakeX: () => shakeX,
    shakeY: () => shakeY,
    slideInDown: () => slideInDown,
    slideInLeft: () => slideInLeft,
    slideInRight: () => slideInRight,
    slideInUp: () => slideInUp,
    slideOutDown: () => slideOutDown,
    slideOutLeft: () => slideOutLeft,
    slideOutRight: () => slideOutRight,
    slideOutUp: () => slideOutUp,
    swing: () => swing,
    tada: () => tada,
    wobble: () => wobble,
    zoomIn: () => zoomIn,
    zoomInDown: () => zoomInDown,
    zoomInLeft: () => zoomInLeft,
    zoomInRight: () => zoomInRight,
    zoomInUp: () => zoomInUp,
    zoomOut: () => zoomOut,
    zoomOutDown: () => zoomOutDown,
    zoomOutLeft: () => zoomOutLeft,
    zoomOutRight: () => zoomOutRight,
    zoomOutUp: () => zoomOutUp
  });
  var bounce = [
    { offset: 0, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)", transform: "translate3d(0, 0, 0)" },
    { offset: 0.2, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)", transform: "translate3d(0, 0, 0)" },
    { offset: 0.4, easing: "cubic-bezier(0.755, 0.05, 0.855, 0.06)", transform: "translate3d(0, -30px, 0) scaleY(1.1)" },
    { offset: 0.43, easing: "cubic-bezier(0.755, 0.05, 0.855, 0.06)", transform: "translate3d(0, -30px, 0) scaleY(1.1)" },
    { offset: 0.53, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)", transform: "translate3d(0, 0, 0)" },
    { offset: 0.7, easing: "cubic-bezier(0.755, 0.05, 0.855, 0.06)", transform: "translate3d(0, -15px, 0) scaleY(1.05)" },
    {
      offset: 0.8,
      "transition-timing-function": "cubic-bezier(0.215, 0.61, 0.355, 1)",
      transform: "translate3d(0, 0, 0) scaleY(0.95)"
    },
    { offset: 0.9, transform: "translate3d(0, -4px, 0) scaleY(1.02)" },
    { offset: 1, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)", transform: "translate3d(0, 0, 0)" }
  ];
  var flash = [
    { offset: 0, opacity: "1" },
    { offset: 0.25, opacity: "0" },
    { offset: 0.5, opacity: "1" },
    { offset: 0.75, opacity: "0" },
    { offset: 1, opacity: "1" }
  ];
  var headShake = [
    { offset: 0, transform: "translateX(0)" },
    { offset: 0.065, transform: "translateX(-6px) rotateY(-9deg)" },
    { offset: 0.185, transform: "translateX(5px) rotateY(7deg)" },
    { offset: 0.315, transform: "translateX(-3px) rotateY(-5deg)" },
    { offset: 0.435, transform: "translateX(2px) rotateY(3deg)" },
    { offset: 0.5, transform: "translateX(0)" }
  ];
  var heartBeat = [
    { offset: 0, transform: "scale(1)" },
    { offset: 0.14, transform: "scale(1.3)" },
    { offset: 0.28, transform: "scale(1)" },
    { offset: 0.42, transform: "scale(1.3)" },
    { offset: 0.7, transform: "scale(1)" }
  ];
  var jello = [
    { offset: 0, transform: "translate3d(0, 0, 0)" },
    { offset: 0.111, transform: "translate3d(0, 0, 0)" },
    { offset: 0.222, transform: "skewX(-12.5deg) skewY(-12.5deg)" },
    { offset: 0.33299999999999996, transform: "skewX(6.25deg) skewY(6.25deg)" },
    { offset: 0.444, transform: "skewX(-3.125deg) skewY(-3.125deg)" },
    { offset: 0.555, transform: "skewX(1.5625deg) skewY(1.5625deg)" },
    { offset: 0.6659999999999999, transform: "skewX(-0.78125deg) skewY(-0.78125deg)" },
    { offset: 0.777, transform: "skewX(0.390625deg) skewY(0.390625deg)" },
    { offset: 0.888, transform: "skewX(-0.1953125deg) skewY(-0.1953125deg)" },
    { offset: 1, transform: "translate3d(0, 0, 0)" }
  ];
  var pulse = [
    { offset: 0, transform: "scale3d(1, 1, 1)" },
    { offset: 0.5, transform: "scale3d(1.05, 1.05, 1.05)" },
    { offset: 1, transform: "scale3d(1, 1, 1)" }
  ];
  var rubberBand = [
    { offset: 0, transform: "scale3d(1, 1, 1)" },
    { offset: 0.3, transform: "scale3d(1.25, 0.75, 1)" },
    { offset: 0.4, transform: "scale3d(0.75, 1.25, 1)" },
    { offset: 0.5, transform: "scale3d(1.15, 0.85, 1)" },
    { offset: 0.65, transform: "scale3d(0.95, 1.05, 1)" },
    { offset: 0.75, transform: "scale3d(1.05, 0.95, 1)" },
    { offset: 1, transform: "scale3d(1, 1, 1)" }
  ];
  var shake = [
    { offset: 0, transform: "translate3d(0, 0, 0)" },
    { offset: 0.1, transform: "translate3d(-10px, 0, 0)" },
    { offset: 0.2, transform: "translate3d(10px, 0, 0)" },
    { offset: 0.3, transform: "translate3d(-10px, 0, 0)" },
    { offset: 0.4, transform: "translate3d(10px, 0, 0)" },
    { offset: 0.5, transform: "translate3d(-10px, 0, 0)" },
    { offset: 0.6, transform: "translate3d(10px, 0, 0)" },
    { offset: 0.7, transform: "translate3d(-10px, 0, 0)" },
    { offset: 0.8, transform: "translate3d(10px, 0, 0)" },
    { offset: 0.9, transform: "translate3d(-10px, 0, 0)" },
    { offset: 1, transform: "translate3d(0, 0, 0)" }
  ];
  var shakeX = [
    { offset: 0, transform: "translate3d(0, 0, 0)" },
    { offset: 0.1, transform: "translate3d(-10px, 0, 0)" },
    { offset: 0.2, transform: "translate3d(10px, 0, 0)" },
    { offset: 0.3, transform: "translate3d(-10px, 0, 0)" },
    { offset: 0.4, transform: "translate3d(10px, 0, 0)" },
    { offset: 0.5, transform: "translate3d(-10px, 0, 0)" },
    { offset: 0.6, transform: "translate3d(10px, 0, 0)" },
    { offset: 0.7, transform: "translate3d(-10px, 0, 0)" },
    { offset: 0.8, transform: "translate3d(10px, 0, 0)" },
    { offset: 0.9, transform: "translate3d(-10px, 0, 0)" },
    { offset: 1, transform: "translate3d(0, 0, 0)" }
  ];
  var shakeY = [
    { offset: 0, transform: "translate3d(0, 0, 0)" },
    { offset: 0.1, transform: "translate3d(0, -10px, 0)" },
    { offset: 0.2, transform: "translate3d(0, 10px, 0)" },
    { offset: 0.3, transform: "translate3d(0, -10px, 0)" },
    { offset: 0.4, transform: "translate3d(0, 10px, 0)" },
    { offset: 0.5, transform: "translate3d(0, -10px, 0)" },
    { offset: 0.6, transform: "translate3d(0, 10px, 0)" },
    { offset: 0.7, transform: "translate3d(0, -10px, 0)" },
    { offset: 0.8, transform: "translate3d(0, 10px, 0)" },
    { offset: 0.9, transform: "translate3d(0, -10px, 0)" },
    { offset: 1, transform: "translate3d(0, 0, 0)" }
  ];
  var swing = [
    { offset: 0.2, transform: "rotate3d(0, 0, 1, 15deg)" },
    { offset: 0.4, transform: "rotate3d(0, 0, 1, -10deg)" },
    { offset: 0.6, transform: "rotate3d(0, 0, 1, 5deg)" },
    { offset: 0.8, transform: "rotate3d(0, 0, 1, -5deg)" },
    { offset: 1, transform: "rotate3d(0, 0, 1, 0deg)" }
  ];
  var tada = [
    { offset: 0, transform: "scale3d(1, 1, 1)" },
    { offset: 0.1, transform: "scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)" },
    { offset: 0.2, transform: "scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)" },
    { offset: 0.3, transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)" },
    { offset: 0.4, transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)" },
    { offset: 0.5, transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)" },
    { offset: 0.6, transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)" },
    { offset: 0.7, transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)" },
    { offset: 0.8, transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)" },
    { offset: 0.9, transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)" },
    { offset: 1, transform: "scale3d(1, 1, 1)" }
  ];
  var wobble = [
    { offset: 0, transform: "translate3d(0, 0, 0)" },
    { offset: 0.15, transform: "translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)" },
    { offset: 0.3, transform: "translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)" },
    { offset: 0.45, transform: "translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)" },
    { offset: 0.6, transform: "translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)" },
    { offset: 0.75, transform: "translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)" },
    { offset: 1, transform: "translate3d(0, 0, 0)" }
  ];
  var backInDown = [
    { offset: 0, transform: "translateY(-1200px) scale(0.7)", opacity: "0.7" },
    { offset: 0.8, transform: "translateY(0px) scale(0.7)", opacity: "0.7" },
    { offset: 1, transform: "scale(1)", opacity: "1" }
  ];
  var backInLeft = [
    { offset: 0, transform: "translateX(-2000px) scale(0.7)", opacity: "0.7" },
    { offset: 0.8, transform: "translateX(0px) scale(0.7)", opacity: "0.7" },
    { offset: 1, transform: "scale(1)", opacity: "1" }
  ];
  var backInRight = [
    { offset: 0, transform: "translateX(2000px) scale(0.7)", opacity: "0.7" },
    { offset: 0.8, transform: "translateX(0px) scale(0.7)", opacity: "0.7" },
    { offset: 1, transform: "scale(1)", opacity: "1" }
  ];
  var backInUp = [
    { offset: 0, transform: "translateY(1200px) scale(0.7)", opacity: "0.7" },
    { offset: 0.8, transform: "translateY(0px) scale(0.7)", opacity: "0.7" },
    { offset: 1, transform: "scale(1)", opacity: "1" }
  ];
  var backOutDown = [
    { offset: 0, transform: "scale(1)", opacity: "1" },
    { offset: 0.2, transform: "translateY(0px) scale(0.7)", opacity: "0.7" },
    { offset: 1, transform: "translateY(700px) scale(0.7)", opacity: "0.7" }
  ];
  var backOutLeft = [
    { offset: 0, transform: "scale(1)", opacity: "1" },
    { offset: 0.2, transform: "translateX(0px) scale(0.7)", opacity: "0.7" },
    { offset: 1, transform: "translateX(-2000px) scale(0.7)", opacity: "0.7" }
  ];
  var backOutRight = [
    { offset: 0, transform: "scale(1)", opacity: "1" },
    { offset: 0.2, transform: "translateX(0px) scale(0.7)", opacity: "0.7" },
    { offset: 1, transform: "translateX(2000px) scale(0.7)", opacity: "0.7" }
  ];
  var backOutUp = [
    { offset: 0, transform: "scale(1)", opacity: "1" },
    { offset: 0.2, transform: "translateY(0px) scale(0.7)", opacity: "0.7" },
    { offset: 1, transform: "translateY(-700px) scale(0.7)", opacity: "0.7" }
  ];
  var bounceIn = [
    { offset: 0, opacity: "0", transform: "scale3d(0.3, 0.3, 0.3)" },
    { offset: 0, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
    { offset: 0.2, transform: "scale3d(1.1, 1.1, 1.1)" },
    { offset: 0.2, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
    { offset: 0.4, transform: "scale3d(0.9, 0.9, 0.9)" },
    { offset: 0.4, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
    { offset: 0.6, opacity: "1", transform: "scale3d(1.03, 1.03, 1.03)" },
    { offset: 0.6, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
    { offset: 0.8, transform: "scale3d(0.97, 0.97, 0.97)" },
    { offset: 0.8, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
    { offset: 1, opacity: "1", transform: "scale3d(1, 1, 1)" },
    { offset: 1, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" }
  ];
  var bounceInDown = [
    { offset: 0, opacity: "0", transform: "translate3d(0, -3000px, 0) scaleY(3)" },
    { offset: 0, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
    { offset: 0.6, opacity: "1", transform: "translate3d(0, 25px, 0) scaleY(0.9)" },
    { offset: 0.6, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
    { offset: 0.75, transform: "translate3d(0, -10px, 0) scaleY(0.95)" },
    { offset: 0.75, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
    { offset: 0.9, transform: "translate3d(0, 5px, 0) scaleY(0.985)" },
    { offset: 0.9, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
    { offset: 1, transform: "translate3d(0, 0, 0)" },
    { offset: 1, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" }
  ];
  var bounceInLeft = [
    { offset: 0, opacity: "0", transform: "translate3d(-3000px, 0, 0) scaleX(3)" },
    { offset: 0, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
    { offset: 0.6, opacity: "1", transform: "translate3d(25px, 0, 0) scaleX(1)" },
    { offset: 0.6, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
    { offset: 0.75, transform: "translate3d(-10px, 0, 0) scaleX(0.98)" },
    { offset: 0.75, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
    { offset: 0.9, transform: "translate3d(5px, 0, 0) scaleX(0.995)" },
    { offset: 0.9, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
    { offset: 1, transform: "translate3d(0, 0, 0)" },
    { offset: 1, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" }
  ];
  var bounceInRight = [
    { offset: 0, opacity: "0", transform: "translate3d(3000px, 0, 0) scaleX(3)" },
    { offset: 0, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
    { offset: 0.6, opacity: "1", transform: "translate3d(-25px, 0, 0) scaleX(1)" },
    { offset: 0.6, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
    { offset: 0.75, transform: "translate3d(10px, 0, 0) scaleX(0.98)" },
    { offset: 0.75, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
    { offset: 0.9, transform: "translate3d(-5px, 0, 0) scaleX(0.995)" },
    { offset: 0.9, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
    { offset: 1, transform: "translate3d(0, 0, 0)" },
    { offset: 1, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" }
  ];
  var bounceInUp = [
    { offset: 0, opacity: "0", transform: "translate3d(0, 3000px, 0) scaleY(5)" },
    { offset: 0, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
    { offset: 0.6, opacity: "1", transform: "translate3d(0, -20px, 0) scaleY(0.9)" },
    { offset: 0.6, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
    { offset: 0.75, transform: "translate3d(0, 10px, 0) scaleY(0.95)" },
    { offset: 0.75, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
    { offset: 0.9, transform: "translate3d(0, -5px, 0) scaleY(0.985)" },
    { offset: 0.9, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
    { offset: 1, transform: "translate3d(0, 0, 0)" },
    { offset: 1, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" }
  ];
  var bounceOut = [
    { offset: 0.2, transform: "scale3d(0.9, 0.9, 0.9)" },
    { offset: 0.5, opacity: "1", transform: "scale3d(1.1, 1.1, 1.1)" },
    { offset: 0.55, opacity: "1", transform: "scale3d(1.1, 1.1, 1.1)" },
    { offset: 1, opacity: "0", transform: "scale3d(0.3, 0.3, 0.3)" }
  ];
  var bounceOutDown = [
    { offset: 0.2, transform: "translate3d(0, 10px, 0) scaleY(0.985)" },
    { offset: 0.4, opacity: "1", transform: "translate3d(0, -20px, 0) scaleY(0.9)" },
    { offset: 0.45, opacity: "1", transform: "translate3d(0, -20px, 0) scaleY(0.9)" },
    { offset: 1, opacity: "0", transform: "translate3d(0, 2000px, 0) scaleY(3)" }
  ];
  var bounceOutLeft = [
    { offset: 0.2, opacity: "1", transform: "translate3d(20px, 0, 0) scaleX(0.9)" },
    { offset: 1, opacity: "0", transform: "translate3d(-2000px, 0, 0) scaleX(2)" }
  ];
  var bounceOutRight = [
    { offset: 0.2, opacity: "1", transform: "translate3d(-20px, 0, 0) scaleX(0.9)" },
    { offset: 1, opacity: "0", transform: "translate3d(2000px, 0, 0) scaleX(2)" }
  ];
  var bounceOutUp = [
    { offset: 0.2, transform: "translate3d(0, -10px, 0) scaleY(0.985)" },
    { offset: 0.4, opacity: "1", transform: "translate3d(0, 20px, 0) scaleY(0.9)" },
    { offset: 0.45, opacity: "1", transform: "translate3d(0, 20px, 0) scaleY(0.9)" },
    { offset: 1, opacity: "0", transform: "translate3d(0, -2000px, 0) scaleY(3)" }
  ];
  var fadeIn = [
    { offset: 0, opacity: "0" },
    { offset: 1, opacity: "1" }
  ];
  var fadeInBottomLeft = [
    { offset: 0, opacity: "0", transform: "translate3d(-100%, 100%, 0)" },
    { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" }
  ];
  var fadeInBottomRight = [
    { offset: 0, opacity: "0", transform: "translate3d(100%, 100%, 0)" },
    { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" }
  ];
  var fadeInDown = [
    { offset: 0, opacity: "0", transform: "translate3d(0, -100%, 0)" },
    { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" }
  ];
  var fadeInDownBig = [
    { offset: 0, opacity: "0", transform: "translate3d(0, -2000px, 0)" },
    { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" }
  ];
  var fadeInLeft = [
    { offset: 0, opacity: "0", transform: "translate3d(-100%, 0, 0)" },
    { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" }
  ];
  var fadeInLeftBig = [
    { offset: 0, opacity: "0", transform: "translate3d(-2000px, 0, 0)" },
    { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" }
  ];
  var fadeInRight = [
    { offset: 0, opacity: "0", transform: "translate3d(100%, 0, 0)" },
    { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" }
  ];
  var fadeInRightBig = [
    { offset: 0, opacity: "0", transform: "translate3d(2000px, 0, 0)" },
    { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" }
  ];
  var fadeInTopLeft = [
    { offset: 0, opacity: "0", transform: "translate3d(-100%, -100%, 0)" },
    { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" }
  ];
  var fadeInTopRight = [
    { offset: 0, opacity: "0", transform: "translate3d(100%, -100%, 0)" },
    { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" }
  ];
  var fadeInUp = [
    { offset: 0, opacity: "0", transform: "translate3d(0, 100%, 0)" },
    { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" }
  ];
  var fadeInUpBig = [
    { offset: 0, opacity: "0", transform: "translate3d(0, 2000px, 0)" },
    { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" }
  ];
  var fadeOut = [
    { offset: 0, opacity: "1" },
    { offset: 1, opacity: "0" }
  ];
  var fadeOutBottomLeft = [
    { offset: 0, opacity: "1", transform: "translate3d(0, 0, 0)" },
    { offset: 1, opacity: "0", transform: "translate3d(-100%, 100%, 0)" }
  ];
  var fadeOutBottomRight = [
    { offset: 0, opacity: "1", transform: "translate3d(0, 0, 0)" },
    { offset: 1, opacity: "0", transform: "translate3d(100%, 100%, 0)" }
  ];
  var fadeOutDown = [
    { offset: 0, opacity: "1" },
    { offset: 1, opacity: "0", transform: "translate3d(0, 100%, 0)" }
  ];
  var fadeOutDownBig = [
    { offset: 0, opacity: "1" },
    { offset: 1, opacity: "0", transform: "translate3d(0, 2000px, 0)" }
  ];
  var fadeOutLeft = [
    { offset: 0, opacity: "1" },
    { offset: 1, opacity: "0", transform: "translate3d(-100%, 0, 0)" }
  ];
  var fadeOutLeftBig = [
    { offset: 0, opacity: "1" },
    { offset: 1, opacity: "0", transform: "translate3d(-2000px, 0, 0)" }
  ];
  var fadeOutRight = [
    { offset: 0, opacity: "1" },
    { offset: 1, opacity: "0", transform: "translate3d(100%, 0, 0)" }
  ];
  var fadeOutRightBig = [
    { offset: 0, opacity: "1" },
    { offset: 1, opacity: "0", transform: "translate3d(2000px, 0, 0)" }
  ];
  var fadeOutTopLeft = [
    { offset: 0, opacity: "1", transform: "translate3d(0, 0, 0)" },
    { offset: 1, opacity: "0", transform: "translate3d(-100%, -100%, 0)" }
  ];
  var fadeOutTopRight = [
    { offset: 0, opacity: "1", transform: "translate3d(0, 0, 0)" },
    { offset: 1, opacity: "0", transform: "translate3d(100%, -100%, 0)" }
  ];
  var fadeOutUp = [
    { offset: 0, opacity: "1" },
    { offset: 1, opacity: "0", transform: "translate3d(0, -100%, 0)" }
  ];
  var fadeOutUpBig = [
    { offset: 0, opacity: "1" },
    { offset: 1, opacity: "0", transform: "translate3d(0, -2000px, 0)" }
  ];
  var flip = [
    {
      offset: 0,
      transform: "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",
      easing: "ease-out"
    },
    {
      offset: 0.4,
      transform: "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -190deg)",
      easing: "ease-out"
    },
    {
      offset: 0.5,
      transform: "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -170deg)",
      easing: "ease-in"
    },
    {
      offset: 0.8,
      transform: "perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)\n      rotate3d(0, 1, 0, 0deg)",
      easing: "ease-in"
    },
    {
      offset: 1,
      transform: "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",
      easing: "ease-in"
    }
  ];
  var flipInX = [
    { offset: 0, transform: "perspective(400px) rotate3d(1, 0, 0, 90deg)", easing: "ease-in", opacity: "0" },
    { offset: 0.4, transform: "perspective(400px) rotate3d(1, 0, 0, -20deg)", easing: "ease-in" },
    { offset: 0.6, transform: "perspective(400px) rotate3d(1, 0, 0, 10deg)", opacity: "1" },
    { offset: 0.8, transform: "perspective(400px) rotate3d(1, 0, 0, -5deg)" },
    { offset: 1, transform: "perspective(400px)" }
  ];
  var flipInY = [
    { offset: 0, transform: "perspective(400px) rotate3d(0, 1, 0, 90deg)", easing: "ease-in", opacity: "0" },
    { offset: 0.4, transform: "perspective(400px) rotate3d(0, 1, 0, -20deg)", easing: "ease-in" },
    { offset: 0.6, transform: "perspective(400px) rotate3d(0, 1, 0, 10deg)", opacity: "1" },
    { offset: 0.8, transform: "perspective(400px) rotate3d(0, 1, 0, -5deg)" },
    { offset: 1, transform: "perspective(400px)" }
  ];
  var flipOutX = [
    { offset: 0, transform: "perspective(400px)" },
    { offset: 0.3, transform: "perspective(400px) rotate3d(1, 0, 0, -20deg)", opacity: "1" },
    { offset: 1, transform: "perspective(400px) rotate3d(1, 0, 0, 90deg)", opacity: "0" }
  ];
  var flipOutY = [
    { offset: 0, transform: "perspective(400px)" },
    { offset: 0.3, transform: "perspective(400px) rotate3d(0, 1, 0, -15deg)", opacity: "1" },
    { offset: 1, transform: "perspective(400px) rotate3d(0, 1, 0, 90deg)", opacity: "0" }
  ];
  var lightSpeedInLeft = [
    { offset: 0, transform: "translate3d(-100%, 0, 0) skewX(30deg)", opacity: "0" },
    { offset: 0.6, transform: "skewX(-20deg)", opacity: "1" },
    { offset: 0.8, transform: "skewX(5deg)" },
    { offset: 1, transform: "translate3d(0, 0, 0)" }
  ];
  var lightSpeedInRight = [
    { offset: 0, transform: "translate3d(100%, 0, 0) skewX(-30deg)", opacity: "0" },
    { offset: 0.6, transform: "skewX(20deg)", opacity: "1" },
    { offset: 0.8, transform: "skewX(-5deg)" },
    { offset: 1, transform: "translate3d(0, 0, 0)" }
  ];
  var lightSpeedOutLeft = [
    { offset: 0, opacity: "1" },
    { offset: 1, transform: "translate3d(-100%, 0, 0) skewX(-30deg)", opacity: "0" }
  ];
  var lightSpeedOutRight = [
    { offset: 0, opacity: "1" },
    { offset: 1, transform: "translate3d(100%, 0, 0) skewX(30deg)", opacity: "0" }
  ];
  var rotateIn = [
    { offset: 0, transform: "rotate3d(0, 0, 1, -200deg)", opacity: "0" },
    { offset: 1, transform: "translate3d(0, 0, 0)", opacity: "1" }
  ];
  var rotateInDownLeft = [
    { offset: 0, transform: "rotate3d(0, 0, 1, -45deg)", opacity: "0" },
    { offset: 1, transform: "translate3d(0, 0, 0)", opacity: "1" }
  ];
  var rotateInDownRight = [
    { offset: 0, transform: "rotate3d(0, 0, 1, 45deg)", opacity: "0" },
    { offset: 1, transform: "translate3d(0, 0, 0)", opacity: "1" }
  ];
  var rotateInUpLeft = [
    { offset: 0, transform: "rotate3d(0, 0, 1, 45deg)", opacity: "0" },
    { offset: 1, transform: "translate3d(0, 0, 0)", opacity: "1" }
  ];
  var rotateInUpRight = [
    { offset: 0, transform: "rotate3d(0, 0, 1, -90deg)", opacity: "0" },
    { offset: 1, transform: "translate3d(0, 0, 0)", opacity: "1" }
  ];
  var rotateOut = [
    { offset: 0, opacity: "1" },
    { offset: 1, transform: "rotate3d(0, 0, 1, 200deg)", opacity: "0" }
  ];
  var rotateOutDownLeft = [
    { offset: 0, opacity: "1" },
    { offset: 1, transform: "rotate3d(0, 0, 1, 45deg)", opacity: "0" }
  ];
  var rotateOutDownRight = [
    { offset: 0, opacity: "1" },
    { offset: 1, transform: "rotate3d(0, 0, 1, -45deg)", opacity: "0" }
  ];
  var rotateOutUpLeft = [
    { offset: 0, opacity: "1" },
    { offset: 1, transform: "rotate3d(0, 0, 1, -45deg)", opacity: "0" }
  ];
  var rotateOutUpRight = [
    { offset: 0, opacity: "1" },
    { offset: 1, transform: "rotate3d(0, 0, 1, 90deg)", opacity: "0" }
  ];
  var slideInDown = [
    { offset: 0, transform: "translate3d(0, -100%, 0)", visibility: "visible" },
    { offset: 1, transform: "translate3d(0, 0, 0)" }
  ];
  var slideInLeft = [
    { offset: 0, transform: "translate3d(-100%, 0, 0)", visibility: "visible" },
    { offset: 1, transform: "translate3d(0, 0, 0)" }
  ];
  var slideInRight = [
    { offset: 0, transform: "translate3d(100%, 0, 0)", visibility: "visible" },
    { offset: 1, transform: "translate3d(0, 0, 0)" }
  ];
  var slideInUp = [
    { offset: 0, transform: "translate3d(0, 100%, 0)", visibility: "visible" },
    { offset: 1, transform: "translate3d(0, 0, 0)" }
  ];
  var slideOutDown = [
    { offset: 0, transform: "translate3d(0, 0, 0)" },
    { offset: 1, visibility: "hidden", transform: "translate3d(0, 100%, 0)" }
  ];
  var slideOutLeft = [
    { offset: 0, transform: "translate3d(0, 0, 0)" },
    { offset: 1, visibility: "hidden", transform: "translate3d(-100%, 0, 0)" }
  ];
  var slideOutRight = [
    { offset: 0, transform: "translate3d(0, 0, 0)" },
    { offset: 1, visibility: "hidden", transform: "translate3d(100%, 0, 0)" }
  ];
  var slideOutUp = [
    { offset: 0, transform: "translate3d(0, 0, 0)" },
    { offset: 1, visibility: "hidden", transform: "translate3d(0, -100%, 0)" }
  ];
  var hinge = [
    { offset: 0, easing: "ease-in-out" },
    { offset: 0.2, transform: "rotate3d(0, 0, 1, 80deg)", easing: "ease-in-out" },
    { offset: 0.4, transform: "rotate3d(0, 0, 1, 60deg)", easing: "ease-in-out", opacity: "1" },
    { offset: 0.6, transform: "rotate3d(0, 0, 1, 80deg)", easing: "ease-in-out" },
    { offset: 0.8, transform: "rotate3d(0, 0, 1, 60deg)", easing: "ease-in-out", opacity: "1" },
    { offset: 1, transform: "translate3d(0, 700px, 0)", opacity: "0" }
  ];
  var jackInTheBox = [
    { offset: 0, opacity: "0", transform: "scale(0.1) rotate(30deg)", "transform-origin": "center bottom" },
    { offset: 0.5, transform: "rotate(-10deg)" },
    { offset: 0.7, transform: "rotate(3deg)" },
    { offset: 1, opacity: "1", transform: "scale(1)" }
  ];
  var rollIn = [
    { offset: 0, opacity: "0", transform: "translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)" },
    { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" }
  ];
  var rollOut = [
    { offset: 0, opacity: "1" },
    { offset: 1, opacity: "0", transform: "translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)" }
  ];
  var zoomIn = [
    { offset: 0, opacity: "0", transform: "scale3d(0.3, 0.3, 0.3)" },
    { offset: 0.5, opacity: "1" }
  ];
  var zoomInDown = [
    {
      offset: 0,
      opacity: "0",
      transform: "scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",
      easing: "cubic-bezier(0.55, 0.055, 0.675, 0.19)"
    },
    {
      offset: 0.6,
      opacity: "1",
      transform: "scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",
      easing: "cubic-bezier(0.175, 0.885, 0.32, 1)"
    }
  ];
  var zoomInLeft = [
    {
      offset: 0,
      opacity: "0",
      transform: "scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",
      easing: "cubic-bezier(0.55, 0.055, 0.675, 0.19)"
    },
    {
      offset: 0.6,
      opacity: "1",
      transform: "scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",
      easing: "cubic-bezier(0.175, 0.885, 0.32, 1)"
    }
  ];
  var zoomInRight = [
    {
      offset: 0,
      opacity: "0",
      transform: "scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",
      easing: "cubic-bezier(0.55, 0.055, 0.675, 0.19)"
    },
    {
      offset: 0.6,
      opacity: "1",
      transform: "scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",
      easing: "cubic-bezier(0.175, 0.885, 0.32, 1)"
    }
  ];
  var zoomInUp = [
    {
      offset: 0,
      opacity: "0",
      transform: "scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",
      easing: "cubic-bezier(0.55, 0.055, 0.675, 0.19)"
    },
    {
      offset: 0.6,
      opacity: "1",
      transform: "scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",
      easing: "cubic-bezier(0.175, 0.885, 0.32, 1)"
    }
  ];
  var zoomOut = [
    { offset: 0, opacity: "1" },
    { offset: 0.5, opacity: "0", transform: "scale3d(0.3, 0.3, 0.3)" },
    { offset: 1, opacity: "0" }
  ];
  var zoomOutDown = [
    {
      offset: 0.4,
      opacity: "1",
      transform: "scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",
      easing: "cubic-bezier(0.55, 0.055, 0.675, 0.19)"
    },
    {
      offset: 1,
      opacity: "0",
      transform: "scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",
      easing: "cubic-bezier(0.175, 0.885, 0.32, 1)"
    }
  ];
  var zoomOutLeft = [
    { offset: 0.4, opacity: "1", transform: "scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)" },
    { offset: 1, opacity: "0", transform: "scale(0.1) translate3d(-2000px, 0, 0)" }
  ];
  var zoomOutRight = [
    { offset: 0.4, opacity: "1", transform: "scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)" },
    { offset: 1, opacity: "0", transform: "scale(0.1) translate3d(2000px, 0, 0)" }
  ];
  var zoomOutUp = [
    {
      offset: 0.4,
      opacity: "1",
      transform: "scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",
      easing: "cubic-bezier(0.55, 0.055, 0.675, 0.19)"
    },
    {
      offset: 1,
      opacity: "0",
      transform: "scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",
      easing: "cubic-bezier(0.175, 0.885, 0.32, 1)"
    }
  ];
  var easings = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    easeInSine: "cubic-bezier(0.47, 0, 0.745, 0.715)",
    easeOutSine: "cubic-bezier(0.39, 0.575, 0.565, 1)",
    easeInOutSine: "cubic-bezier(0.445, 0.05, 0.55, 0.95)",
    easeInQuad: "cubic-bezier(0.55, 0.085, 0.68, 0.53)",
    easeOutQuad: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    easeInOutQuad: "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
    easeInCubic: "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
    easeOutCubic: "cubic-bezier(0.215, 0.61, 0.355, 1)",
    easeInOutCubic: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    easeInQuart: "cubic-bezier(0.895, 0.03, 0.685, 0.22)",
    easeOutQuart: "cubic-bezier(0.165, 0.84, 0.44, 1)",
    easeInOutQuart: "cubic-bezier(0.77, 0, 0.175, 1)",
    easeInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
    easeOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
    easeInOutQuint: "cubic-bezier(0.86, 0, 0.07, 1)",
    easeInExpo: "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
    easeOutExpo: "cubic-bezier(0.19, 1, 0.22, 1)",
    easeInOutExpo: "cubic-bezier(1, 0, 0, 1)",
    easeInCirc: "cubic-bezier(0.6, 0.04, 0.98, 0.335)",
    easeOutCirc: "cubic-bezier(0.075, 0.82, 0.165, 1)",
    easeInOutCirc: "cubic-bezier(0.785, 0.135, 0.15, 0.86)",
    easeInBack: "cubic-bezier(0.6, -0.28, 0.735, 0.045)",
    easeOutBack: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    easeInOutBack: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
  };

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.YCETLYZ3.js
  var SlAnimation = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.hasStarted = false;
      this.name = "none";
      this.play = false;
      this.delay = 0;
      this.direction = "normal";
      this.duration = 1e3;
      this.easing = "linear";
      this.endDelay = 0;
      this.fill = "auto";
      this.iterations = Infinity;
      this.iterationStart = 0;
      this.playbackRate = 1;
    }
    /** Gets and sets the current animation time. */
    get currentTime() {
      var _a, _b;
      return (_b = (_a = this.animation) == null ? void 0 : _a.currentTime) != null ? _b : 0;
    }
    set currentTime(time) {
      if (this.animation) {
        this.animation.currentTime = time;
      }
    }
    connectedCallback() {
      super.connectedCallback();
      this.createAnimation();
      this.handleAnimationCancel = this.handleAnimationCancel.bind(this);
      this.handleAnimationFinish = this.handleAnimationFinish.bind(this);
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this.destroyAnimation();
    }
    handleAnimationFinish() {
      this.play = false;
      this.hasStarted = false;
      this.emit("sl-finish");
    }
    handleAnimationCancel() {
      this.play = false;
      this.hasStarted = false;
      this.emit("sl-cancel");
    }
    handleSlotChange() {
      this.destroyAnimation();
      this.createAnimation();
    }
    async createAnimation() {
      var _a, _b;
      const easing = (_a = dist_exports.easings[this.easing]) != null ? _a : this.easing;
      const keyframes = (_b = this.keyframes) != null ? _b : dist_exports[this.name];
      const slot = await this.defaultSlot;
      const element = slot.assignedElements()[0];
      if (!element || !keyframes) {
        return false;
      }
      this.destroyAnimation();
      this.animation = element.animate(keyframes, {
        delay: this.delay,
        direction: this.direction,
        duration: this.duration,
        easing,
        endDelay: this.endDelay,
        fill: this.fill,
        iterationStart: this.iterationStart,
        iterations: this.iterations
      });
      this.animation.playbackRate = this.playbackRate;
      this.animation.addEventListener("cancel", this.handleAnimationCancel);
      this.animation.addEventListener("finish", this.handleAnimationFinish);
      if (this.play) {
        this.hasStarted = true;
        this.emit("sl-start");
      } else {
        this.animation.pause();
      }
      return true;
    }
    destroyAnimation() {
      if (this.animation) {
        this.animation.cancel();
        this.animation.removeEventListener("cancel", this.handleAnimationCancel);
        this.animation.removeEventListener("finish", this.handleAnimationFinish);
        this.hasStarted = false;
      }
    }
    handleAnimationChange() {
      if (!this.hasUpdated) {
        return;
      }
      this.createAnimation();
    }
    handlePlayChange() {
      if (this.animation) {
        if (this.play && !this.hasStarted) {
          this.hasStarted = true;
          this.emit("sl-start");
        }
        if (this.play) {
          this.animation.play();
        } else {
          this.animation.pause();
        }
        return true;
      }
      return false;
    }
    handlePlaybackRateChange() {
      if (this.animation) {
        this.animation.playbackRate = this.playbackRate;
      }
    }
    /** Clears all keyframe effects caused by this animation and aborts its playback. */
    cancel() {
      var _a;
      (_a = this.animation) == null ? void 0 : _a.cancel();
    }
    /** Sets the playback time to the end of the animation corresponding to the current playback direction. */
    finish() {
      var _a;
      (_a = this.animation) == null ? void 0 : _a.finish();
    }
    render() {
      return y` <slot @slotchange=${this.handleSlotChange}></slot> `;
    }
  };
  SlAnimation.styles = animation_styles_default;
  __decorateClass([
    e42("slot")
  ], SlAnimation.prototype, "defaultSlot", 2);
  __decorateClass([
    e22()
  ], SlAnimation.prototype, "name", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlAnimation.prototype, "play", 2);
  __decorateClass([
    e22({ type: Number })
  ], SlAnimation.prototype, "delay", 2);
  __decorateClass([
    e22()
  ], SlAnimation.prototype, "direction", 2);
  __decorateClass([
    e22({ type: Number })
  ], SlAnimation.prototype, "duration", 2);
  __decorateClass([
    e22()
  ], SlAnimation.prototype, "easing", 2);
  __decorateClass([
    e22({ attribute: "end-delay", type: Number })
  ], SlAnimation.prototype, "endDelay", 2);
  __decorateClass([
    e22()
  ], SlAnimation.prototype, "fill", 2);
  __decorateClass([
    e22({ type: Number })
  ], SlAnimation.prototype, "iterations", 2);
  __decorateClass([
    e22({ attribute: "iteration-start", type: Number })
  ], SlAnimation.prototype, "iterationStart", 2);
  __decorateClass([
    e22({ attribute: false })
  ], SlAnimation.prototype, "keyframes", 2);
  __decorateClass([
    e22({ attribute: "playback-rate", type: Number })
  ], SlAnimation.prototype, "playbackRate", 2);
  __decorateClass([
    watch([
      "name",
      "delay",
      "direction",
      "duration",
      "easing",
      "endDelay",
      "fill",
      "iterations",
      "iterationsStart",
      "keyframes"
    ])
  ], SlAnimation.prototype, "handleAnimationChange", 1);
  __decorateClass([
    watch("play")
  ], SlAnimation.prototype, "handlePlayChange", 1);
  __decorateClass([
    watch("playbackRate")
  ], SlAnimation.prototype, "handlePlaybackRateChange", 1);
  SlAnimation = __decorateClass([
    e5("sl-animation")
  ], SlAnimation);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6HVAZWJZ.js
  var breadcrumb_styles_default = i`
  ${component_styles_default}

  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.L3SYQLSE.js
  var SlBreadcrumb = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController2(this);
      this.separatorDir = this.localize.dir();
      this.label = "";
    }
    // Generates a clone of the separator element to use for each breadcrumb item
    getSeparator() {
      const separator = this.separatorSlot.assignedElements({ flatten: true })[0];
      const clone = separator.cloneNode(true);
      [clone, ...clone.querySelectorAll("[id]")].forEach((el) => el.removeAttribute("id"));
      clone.setAttribute("data-default", "");
      clone.slot = "separator";
      return clone;
    }
    handleSlotChange() {
      const items = [...this.defaultSlot.assignedElements({ flatten: true })].filter(
        (item) => item.tagName.toLowerCase() === "sl-breadcrumb-item"
      );
      items.forEach((item, index) => {
        const separator = item.querySelector('[slot="separator"]');
        if (separator === null) {
          item.append(this.getSeparator());
        } else if (separator.hasAttribute("data-default")) {
          separator.replaceWith(this.getSeparator());
        } else {
        }
        if (index === items.length - 1) {
          item.setAttribute("aria-current", "page");
        } else {
          item.removeAttribute("aria-current");
        }
      });
    }
    render() {
      if (this.separatorDir !== this.localize.dir()) {
        this.separatorDir = this.localize.dir();
        this.updateComplete.then(() => this.handleSlotChange());
      }
      return y`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <slot name="separator" hidden aria-hidden="true">
        <sl-icon name=${this.localize.dir() === "rtl" ? "chevron-left" : "chevron-right"} library="system"></sl-icon>
      </slot>
    `;
    }
  };
  SlBreadcrumb.styles = breadcrumb_styles_default;
  __decorateClass([
    i22("slot")
  ], SlBreadcrumb.prototype, "defaultSlot", 2);
  __decorateClass([
    i22('slot[name="separator"]')
  ], SlBreadcrumb.prototype, "separatorSlot", 2);
  __decorateClass([
    e22()
  ], SlBreadcrumb.prototype, "label", 2);
  SlBreadcrumb = __decorateClass([
    e5("sl-breadcrumb")
  ], SlBreadcrumb);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.LBFGJPTQ.js
  var avatar_styles_default = i`
  ${component_styles_default}

  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6FDM2FUG.js
  var SlAvatar = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.hasError = false;
      this.image = "";
      this.label = "";
      this.initials = "";
      this.loading = "eager";
      this.shape = "circle";
    }
    handleImageChange() {
      this.hasError = false;
    }
    render() {
      const avatarWithImage = y`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${() => this.hasError = true}"
      />
    `;
      let avatarWithoutImage = y``;
      if (this.initials) {
        avatarWithoutImage = y`<div part="initials" class="avatar__initials">${this.initials}</div>`;
      } else {
        avatarWithoutImage = y`
        <slot name="icon" part="icon" class="avatar__icon" aria-hidden="true">
          <sl-icon name="person-fill" library="system"></sl-icon>
        </slot>
      `;
      }
      return y`
      <div
        part="base"
        class=${o5({
        avatar: true,
        "avatar--circle": this.shape === "circle",
        "avatar--rounded": this.shape === "rounded",
        "avatar--square": this.shape === "square"
      })}
        role="img"
        aria-label=${this.label}
      >
        ${this.image && !this.hasError ? avatarWithImage : avatarWithoutImage}
      </div>
    `;
    }
  };
  SlAvatar.styles = avatar_styles_default;
  __decorateClass([
    t4()
  ], SlAvatar.prototype, "hasError", 2);
  __decorateClass([
    e22()
  ], SlAvatar.prototype, "image", 2);
  __decorateClass([
    e22()
  ], SlAvatar.prototype, "label", 2);
  __decorateClass([
    e22()
  ], SlAvatar.prototype, "initials", 2);
  __decorateClass([
    e22()
  ], SlAvatar.prototype, "loading", 2);
  __decorateClass([
    e22({ reflect: true })
  ], SlAvatar.prototype, "shape", 2);
  __decorateClass([
    watch("image")
  ], SlAvatar.prototype, "handleImageChange", 1);
  SlAvatar = __decorateClass([
    e5("sl-avatar")
  ], SlAvatar);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.P63W3WLW.js
  var animated_image_styles_default = i`
  ${component_styles_default}

  :host {
    --control-box-size: 3rem;
    --icon-size: calc(var(--control-box-size) * 0.625);

    display: inline-flex;
    position: relative;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img[aria-hidden='true'] {
    display: none;
  }

  .animated-image__control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: var(--icon-size);
    background: none;
    border: solid 2px currentColor;
    background-color: rgb(0 0 0 /50%);
    border-radius: var(--sl-border-radius-circle);
    color: white;
    pointer-events: none;
    transition: var(--sl-transition-fast) opacity;
  }

  :host([play]:hover) .animated-image__control-box {
    opacity: 1;
  }

  :host([play]:not(:hover)) .animated-image__control-box {
    opacity: 0;
  }

  :host([play]) slot[name='play-icon'],
  :host(:not([play])) slot[name='pause-icon'] {
    display: none;
  }
`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.PCQAXBXR.js
  var SlAnimatedImage = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.isLoaded = false;
    }
    handleClick() {
      this.play = !this.play;
    }
    handleLoad() {
      const canvas = document.createElement("canvas");
      const { width, height } = this.animatedImage;
      canvas.width = width;
      canvas.height = height;
      canvas.getContext("2d").drawImage(this.animatedImage, 0, 0, width, height);
      this.frozenFrame = canvas.toDataURL("image/gif");
      if (!this.isLoaded) {
        this.emit("sl-load");
        this.isLoaded = true;
      }
    }
    handleError() {
      this.emit("sl-error");
    }
    handlePlayChange() {
      if (this.play) {
        this.animatedImage.src = "";
        this.animatedImage.src = this.src;
      }
    }
    handleSrcChange() {
      this.isLoaded = false;
    }
    render() {
      return y`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play ? "false" : "true"}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded ? y`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play ? "true" : "false"}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                <slot name="play-icon"><sl-icon name="play-fill" library="system"></sl-icon></slot>
                <slot name="pause-icon"><sl-icon name="pause-fill" library="system"></sl-icon></slot>
              </div>
            ` : ""}
      </div>
    `;
    }
  };
  SlAnimatedImage.styles = animated_image_styles_default;
  __decorateClass([
    i22(".animated-image__animated")
  ], SlAnimatedImage.prototype, "animatedImage", 2);
  __decorateClass([
    t4()
  ], SlAnimatedImage.prototype, "frozenFrame", 2);
  __decorateClass([
    t4()
  ], SlAnimatedImage.prototype, "isLoaded", 2);
  __decorateClass([
    e22()
  ], SlAnimatedImage.prototype, "src", 2);
  __decorateClass([
    e22()
  ], SlAnimatedImage.prototype, "alt", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlAnimatedImage.prototype, "play", 2);
  __decorateClass([
    watch("play", { waitUntilFirstUpdate: true })
  ], SlAnimatedImage.prototype, "handlePlayChange", 1);
  __decorateClass([
    watch("src")
  ], SlAnimatedImage.prototype, "handleSrcChange", 1);
  SlAnimatedImage = __decorateClass([
    e5("sl-animated-image")
  ], SlAnimatedImage);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.UTZKJDOX.js
  var alert_styles_default = i`
  ${component_styles_default}

  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    padding-inline-end: var(--sl-spacing-medium);
  }
`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.NOTVUTQH.js
  var toastStack = Object.assign(document.createElement("div"), { className: "sl-toast-stack" });
  var SlAlert = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.hasSlotController = new HasSlotController(this, "icon", "suffix");
      this.localize = new LocalizeController2(this);
      this.open = false;
      this.closable = false;
      this.variant = "primary";
      this.duration = Infinity;
    }
    firstUpdated() {
      this.base.hidden = !this.open;
    }
    restartAutoHide() {
      clearTimeout(this.autoHideTimeout);
      if (this.open && this.duration < Infinity) {
        this.autoHideTimeout = window.setTimeout(() => this.hide(), this.duration);
      }
    }
    handleCloseClick() {
      this.hide();
    }
    handleMouseMove() {
      this.restartAutoHide();
    }
    async handleOpenChange() {
      if (this.open) {
        this.emit("sl-show");
        if (this.duration < Infinity) {
          this.restartAutoHide();
        }
        await stopAnimations(this.base);
        this.base.hidden = false;
        const { keyframes, options } = getAnimation(this, "alert.show", { dir: this.localize.dir() });
        await animateTo(this.base, keyframes, options);
        this.emit("sl-after-show");
      } else {
        this.emit("sl-hide");
        clearTimeout(this.autoHideTimeout);
        await stopAnimations(this.base);
        const { keyframes, options } = getAnimation(this, "alert.hide", { dir: this.localize.dir() });
        await animateTo(this.base, keyframes, options);
        this.base.hidden = true;
        this.emit("sl-after-hide");
      }
    }
    handleDurationChange() {
      this.restartAutoHide();
    }
    /** Shows the alert. */
    async show() {
      if (this.open) {
        return void 0;
      }
      this.open = true;
      return waitForEvent(this, "sl-after-show");
    }
    /** Hides the alert */
    async hide() {
      if (!this.open) {
        return void 0;
      }
      this.open = false;
      return waitForEvent(this, "sl-after-hide");
    }
    /**
     * Displays the alert as a toast notification. This will move the alert out of its position in the DOM and, when
     * dismissed, it will be removed from the DOM completely. By storing a reference to the alert, you can reuse it by
     * calling this method again. The returned promise will resolve after the alert is hidden.
     */
    async toast() {
      return new Promise((resolve) => {
        if (toastStack.parentElement === null) {
          document.body.append(toastStack);
        }
        toastStack.appendChild(this);
        requestAnimationFrame(() => {
          this.clientWidth;
          this.show();
        });
        this.addEventListener(
          "sl-after-hide",
          () => {
            toastStack.removeChild(this);
            resolve();
            if (toastStack.querySelector("sl-alert") === null) {
              toastStack.remove();
            }
          },
          { once: true }
        );
      });
    }
    render() {
      return y`
      <div
        part="base"
        class=${o5({
        alert: true,
        "alert--open": this.open,
        "alert--closable": this.closable,
        "alert--has-icon": this.hasSlotController.test("icon"),
        "alert--primary": this.variant === "primary",
        "alert--success": this.variant === "success",
        "alert--neutral": this.variant === "neutral",
        "alert--warning": this.variant === "warning",
        "alert--danger": this.variant === "danger"
      })}
        role="alert"
        aria-hidden=${this.open ? "false" : "true"}
        @mousemove=${this.handleMouseMove}
      >
        <slot name="icon" part="icon" class="alert__icon"></slot>

        <slot part="message" class="alert__message" aria-live="polite"></slot>

        ${this.closable ? y`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            ` : ""}
      </div>
    `;
    }
  };
  SlAlert.styles = alert_styles_default;
  __decorateClass([
    i22('[part~="base"]')
  ], SlAlert.prototype, "base", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlAlert.prototype, "open", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlAlert.prototype, "closable", 2);
  __decorateClass([
    e22({ reflect: true })
  ], SlAlert.prototype, "variant", 2);
  __decorateClass([
    e22({ type: Number })
  ], SlAlert.prototype, "duration", 2);
  __decorateClass([
    watch("open", { waitUntilFirstUpdate: true })
  ], SlAlert.prototype, "handleOpenChange", 1);
  __decorateClass([
    watch("duration")
  ], SlAlert.prototype, "handleDurationChange", 1);
  SlAlert = __decorateClass([
    e5("sl-alert")
  ], SlAlert);
  setDefaultAnimation("alert.show", {
    keyframes: [
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1 }
    ],
    options: { duration: 250, easing: "ease" }
  });
  setDefaultAnimation("alert.hide", {
    keyframes: [
      { opacity: 1, scale: 1 },
      { opacity: 0, scale: 0.8 }
    ],
    options: { duration: 250, easing: "ease" }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.UL4X2GHI.js
  var icon_button_styles_default = i`
  ${component_styles_default}

  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KRP3ULQL.js
  var SlIconButton = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.hasFocus = false;
      this.label = "";
      this.disabled = false;
    }
    handleBlur() {
      this.hasFocus = false;
      this.emit("sl-blur");
    }
    handleFocus() {
      this.hasFocus = true;
      this.emit("sl-focus");
    }
    handleClick(event) {
      if (this.disabled) {
        event.preventDefault();
        event.stopPropagation();
      }
    }
    /** Simulates a click on the icon button. */
    click() {
      this.button.click();
    }
    /** Sets focus on the icon button. */
    focus(options) {
      this.button.focus(options);
    }
    /** Removes focus from the icon button. */
    blur() {
      this.button.blur();
    }
    render() {
      const isLink = this.href ? true : false;
      const tag = isLink ? i5`a` : i5`button`;
      return n7`
      <${tag}
        part="base"
        class=${o5({
        "icon-button": true,
        "icon-button--disabled": !isLink && this.disabled,
        "icon-button--focused": this.hasFocus
      })}
        ?disabled=${l5(isLink ? void 0 : this.disabled)}
        type=${l5(isLink ? void 0 : "button")}
        href=${l5(isLink ? this.href : void 0)}
        target=${l5(isLink ? this.target : void 0)}
        download=${l5(isLink ? this.download : void 0)}
        rel=${l5(isLink && this.target ? "noreferrer noopener" : void 0)}
        role=${l5(isLink ? void 0 : "button")}
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-label="${this.label}"
        tabindex=${this.disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${l5(this.name)}
          library=${l5(this.library)}
          src=${l5(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${tag}>
    `;
    }
  };
  SlIconButton.styles = icon_button_styles_default;
  __decorateClass([
    i22(".icon-button")
  ], SlIconButton.prototype, "button", 2);
  __decorateClass([
    t4()
  ], SlIconButton.prototype, "hasFocus", 2);
  __decorateClass([
    e22()
  ], SlIconButton.prototype, "name", 2);
  __decorateClass([
    e22()
  ], SlIconButton.prototype, "library", 2);
  __decorateClass([
    e22()
  ], SlIconButton.prototype, "src", 2);
  __decorateClass([
    e22()
  ], SlIconButton.prototype, "href", 2);
  __decorateClass([
    e22()
  ], SlIconButton.prototype, "target", 2);
  __decorateClass([
    e22()
  ], SlIconButton.prototype, "download", 2);
  __decorateClass([
    e22()
  ], SlIconButton.prototype, "label", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlIconButton.prototype, "disabled", 2);
  SlIconButton = __decorateClass([
    e5("sl-icon-button")
  ], SlIconButton);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3Y6SB6QS.js
  var basePath = "";
  function setBasePath(path) {
    basePath = path;
  }
  function getBasePath(subpath = "") {
    if (!basePath) {
      const scripts = [...document.getElementsByTagName("script")];
      const configScript = scripts.find((script) => script.hasAttribute("data-shoelace"));
      if (configScript) {
        setBasePath(configScript.getAttribute("data-shoelace"));
      } else {
        const fallbackScript = scripts.find((s8) => {
          return /shoelace(\.min)?\.js($|\?)/.test(s8.src) || /shoelace-autoloader(\.min)?\.js($|\?)/.test(s8.src);
        });
        let path = "";
        if (fallbackScript) {
          path = fallbackScript.getAttribute("src");
        }
        setBasePath(path.split("/").slice(0, -1).join("/"));
      }
    }
    return basePath.replace(/\/$/, "") + (subpath ? `/${subpath.replace(/^\//, "")}` : ``);
  }

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.P7ZG6EMR.js
  var library = {
    name: "default",
    resolver: (name) => getBasePath(`assets/icons/${name}.svg`)
  };
  var library_default_default = library;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.I33L3NO6.js
  var icons = {
    caret: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,
    check: `
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,
    "chevron-down": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
    "chevron-left": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,
    "chevron-right": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
    eye: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,
    "eye-slash": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,
    eyedropper: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,
    "grip-vertical": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,
    indeterminate: `
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,
    "person-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,
    "play-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,
    "pause-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,
    radio: `
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,
    "star-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,
    "x-lg": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,
    "x-circle-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `
  };
  var systemLibrary = {
    name: "system",
    resolver: (name) => {
      if (name in icons) {
        return `data:image/svg+xml,${encodeURIComponent(icons[name])}`;
      }
      return "";
    }
  };
  var library_system_default = systemLibrary;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.VG6XY36X.js
  var registry = [library_default_default, library_system_default];
  var watchedIcons = [];
  function watchIcon(icon) {
    watchedIcons.push(icon);
  }
  function unwatchIcon(icon) {
    watchedIcons = watchedIcons.filter((el) => el !== icon);
  }
  function getIconLibrary(name) {
    return registry.find((lib) => lib.name === name);
  }

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.DAGT3MMF.js
  var icon_styles_default = i`
  ${component_styles_default}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.B4225MTJ.js
  var CACHEABLE_ERROR = Symbol();
  var RETRYABLE_ERROR = Symbol();
  var parser;
  var iconCache = /* @__PURE__ */ new Map();
  var SlIcon = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.svg = null;
      this.label = "";
      this.library = "default";
    }
    /** Given a URL, this function returns the resulting SVG element or an appropriate error symbol. */
    static async resolveIcon(url) {
      var _a;
      let fileData;
      try {
        fileData = await fetch(url, { mode: "cors" });
        if (!fileData.ok)
          return fileData.status === 410 ? CACHEABLE_ERROR : RETRYABLE_ERROR;
      } catch (e34) {
        return RETRYABLE_ERROR;
      }
      try {
        const div = document.createElement("div");
        div.innerHTML = await fileData.text();
        const svg = div.firstElementChild;
        if (((_a = svg == null ? void 0 : svg.tagName) == null ? void 0 : _a.toLowerCase()) !== "svg")
          return CACHEABLE_ERROR;
        if (!parser)
          parser = new DOMParser();
        const doc = parser.parseFromString(svg.outerHTML, "text/html");
        const svgEl = doc.body.querySelector("svg");
        if (!svgEl)
          return CACHEABLE_ERROR;
        svgEl.part.add("svg");
        return document.adoptNode(svgEl);
      } catch (e34) {
        return CACHEABLE_ERROR;
      }
    }
    connectedCallback() {
      super.connectedCallback();
      watchIcon(this);
    }
    firstUpdated() {
      this.setIcon();
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      unwatchIcon(this);
    }
    getUrl() {
      const library2 = getIconLibrary(this.library);
      if (this.name && library2) {
        return library2.resolver(this.name);
      }
      return this.src;
    }
    handleLabelChange() {
      const hasLabel = typeof this.label === "string" && this.label.length > 0;
      if (hasLabel) {
        this.setAttribute("role", "img");
        this.setAttribute("aria-label", this.label);
        this.removeAttribute("aria-hidden");
      } else {
        this.removeAttribute("role");
        this.removeAttribute("aria-label");
        this.setAttribute("aria-hidden", "true");
      }
    }
    async setIcon() {
      var _a;
      const library2 = getIconLibrary(this.library);
      const url = this.getUrl();
      if (!url) {
        this.svg = null;
        return;
      }
      let iconResolver = iconCache.get(url);
      if (!iconResolver) {
        iconResolver = SlIcon.resolveIcon(url);
        iconCache.set(url, iconResolver);
      }
      const svg = await iconResolver;
      if (svg === RETRYABLE_ERROR) {
        iconCache.delete(url);
      }
      if (url !== this.getUrl()) {
        return;
      }
      switch (svg) {
        case RETRYABLE_ERROR:
        case CACHEABLE_ERROR:
          this.svg = null;
          this.emit("sl-error");
          break;
        default:
          this.svg = svg.cloneNode(true);
          (_a = library2 == null ? void 0 : library2.mutator) == null ? void 0 : _a.call(library2, this.svg);
          this.emit("sl-load");
      }
    }
    render() {
      return this.svg;
    }
  };
  SlIcon.styles = icon_styles_default;
  __decorateClass([
    t4()
  ], SlIcon.prototype, "svg", 2);
  __decorateClass([
    e22({ reflect: true })
  ], SlIcon.prototype, "name", 2);
  __decorateClass([
    e22()
  ], SlIcon.prototype, "src", 2);
  __decorateClass([
    e22()
  ], SlIcon.prototype, "label", 2);
  __decorateClass([
    e22({ reflect: true })
  ], SlIcon.prototype, "library", 2);
  __decorateClass([
    watch("label")
  ], SlIcon.prototype, "handleLabelChange", 1);
  __decorateClass([
    watch(["name", "src", "library"])
  ], SlIcon.prototype, "setIcon", 1);
  SlIcon = __decorateClass([
    e5("sl-icon")
  ], SlIcon);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.W3ITKVRU.js
  var badge_styles_default = i`
  ${component_styles_default}

  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.VQ253K64.js
  var SlBadge = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.variant = "primary";
      this.pill = false;
      this.pulse = false;
    }
    render() {
      return y`
      <slot
        part="base"
        class=${o5({
        badge: true,
        "badge--primary": this.variant === "primary",
        "badge--success": this.variant === "success",
        "badge--neutral": this.variant === "neutral",
        "badge--warning": this.variant === "warning",
        "badge--danger": this.variant === "danger",
        "badge--pill": this.pill,
        "badge--pulse": this.pulse
      })}
        role="status"
      ></slot>
    `;
    }
  };
  SlBadge.styles = badge_styles_default;
  __decorateClass([
    e22({ reflect: true })
  ], SlBadge.prototype, "variant", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlBadge.prototype, "pill", 2);
  __decorateClass([
    e22({ type: Boolean, reflect: true })
  ], SlBadge.prototype, "pulse", 2);
  SlBadge = __decorateClass([
    e5("sl-badge")
  ], SlBadge);

  // src/forge/split-panel.ts
  var ForgeSplitPanel = class extends SlSplitPanel {
    constructor() {
      super();
      this.addEventListener("sl-reposition", (event) => {
        window.dispatchEvent(new Event("resize"));
      });
    }
  };
  customElements.define("forge-split-panel", ForgeSplitPanel);
})();
/*! Bundled license information:

@shoelace-style/shoelace/dist/chunks/chunk.DUT32TWM.js:
  (*! Bundled license information:
  
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
  *)

@shoelace-style/shoelace/dist/chunks/chunk.UP75L23G.js:
  (*! Bundled license information:
  
  lit-html/directive.js:
    (**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     *)
  *)

@shoelace-style/shoelace/dist/chunks/chunk.ORW72H2K.js:
  (*! Bundled license information:
  
  lit-html/directives/class-map.js:
    (**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     *)
  *)

@shoelace-style/shoelace/dist/chunks/chunk.ROLL4627.js:
  (*! Bundled license information:
  
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
  
  @lit/reactive-element/decorators/query-async.js:
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
  *)

@shoelace-style/shoelace/dist/chunks/chunk.OXFFPZHD.js:
  (*! Bundled license information:
  
  lit-html/directive-helpers.js:
    (**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     *)
  
  lit-html/directives/live.js:
    (**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     *)
  *)

@shoelace-style/shoelace/dist/chunks/chunk.GUC2ARHT.js:
  (*! Bundled license information:
  
  lit-html/directives/when.js:
    (**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     *)
  *)

@shoelace-style/shoelace/dist/chunks/chunk.V47DPYLL.js:
  (*! Bundled license information:
  
  lit-html/directives/if-defined.js:
    (**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     *)
  *)

@shoelace-style/shoelace/dist/chunks/chunk.IJY6XTKC.js:
  (*! Bundled license information:
  
  lit-html/static.js:
    (**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     *)
  *)

@shoelace-style/shoelace/dist/chunks/chunk.B6IYY6FB.js:
  (*! Bundled license information:
  
  lit-html/directives/style-map.js:
    (**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     *)
  *)

@shoelace-style/shoelace/dist/chunks/chunk.QVU3QRJ4.js:
  (*! Bundled license information:
  
  lit-html/directives/unsafe-html.js:
    (**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     *)
  *)

@shoelace-style/shoelace/dist/chunks/chunk.TDXYRAD2.js:
  (*! Bundled license information:
  
  lit-html/directives/map.js:
    (**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     *)
  
  lit-html/directives/range.js:
    (**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     *)
  *)
*/
//# sourceMappingURL=index.js.map
