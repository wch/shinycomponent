"use strict";
(() => {
  // node_modules/tslib/tslib.es6.js
  function __decorate(decorators, target, key, desc) {
    var c3 = arguments.length, r4 = c3 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r4 = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i8 = decorators.length - 1; i8 >= 0; i8--)
        if (d3 = decorators[i8])
          r4 = (c3 < 3 ? d3(r4) : c3 > 3 ? d3(target, key, r4) : d3(target, key)) || r4;
    return c3 > 3 && r4 && Object.defineProperty(target, key, r4), r4;
  }

  // node_modules/@lit/reactive-element/decorators/custom-element.js
  var e = (e10) => (n9) => "function" == typeof n9 ? ((e11, n10) => (customElements.define(e11, n10), n10))(e10, n9) : ((e11, n10) => {
    const { kind: t5, elements: s6 } = n10;
    return { kind: t5, elements: s6, finisher(n11) {
      customElements.define(e11, n11);
    } };
  })(e10, n9);

  // node_modules/@lit/reactive-element/decorators/property.js
  var i = (i8, e10) => "method" === e10.kind && e10.descriptor && !("value" in e10.descriptor) ? { ...e10, finisher(n9) {
    n9.createProperty(e10.key, i8);
  } } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e10.key, initializer() {
    "function" == typeof e10.initializer && (this[e10.key] = e10.initializer.call(this));
  }, finisher(n9) {
    n9.createProperty(e10.key, i8);
  } };
  function e2(e10) {
    return (n9, t5) => void 0 !== t5 ? ((i8, e11, n10) => {
      e11.constructor.createProperty(n10, i8);
    })(e10, n9, t5) : i(e10, n9);
  }

  // node_modules/@lit/reactive-element/decorators/state.js
  function t(t5) {
    return e2({ ...t5, state: true });
  }

  // node_modules/@lit/reactive-element/decorators/base.js
  var o = ({ finisher: e10, descriptor: t5 }) => (o9, n9) => {
    var r4;
    if (void 0 === n9) {
      const n10 = null !== (r4 = o9.originalKey) && void 0 !== r4 ? r4 : o9.key, i8 = null != t5 ? { kind: "method", placement: "prototype", key: n10, descriptor: t5(o9.key) } : { ...o9, key: n10 };
      return null != e10 && (i8.finisher = function(t6) {
        e10(t6, n10);
      }), i8;
    }
    {
      const r5 = o9.constructor;
      void 0 !== t5 && Object.defineProperty(o9, n9, t5(n9)), null == e10 || e10(r5, n9);
    }
  };

  // node_modules/@lit/reactive-element/decorators/query.js
  function i2(i8, n9) {
    return o({ descriptor: (o9) => {
      const t5 = { get() {
        var o10, n10;
        return null !== (n10 = null === (o10 = this.renderRoot) || void 0 === o10 ? void 0 : o10.querySelector(i8)) && void 0 !== n10 ? n10 : null;
      }, enumerable: true, configurable: true };
      if (n9) {
        const n10 = "symbol" == typeof o9 ? Symbol() : "__" + o9;
        t5.get = function() {
          var o10, t6;
          return void 0 === this[n10] && (this[n10] = null !== (t6 = null === (o10 = this.renderRoot) || void 0 === o10 ? void 0 : o10.querySelector(i8)) && void 0 !== t6 ? t6 : null), this[n10];
        };
      }
      return t5;
    } });
  }

  // node_modules/@lit/reactive-element/decorators/query-async.js
  function e3(e10) {
    return o({ descriptor: (r4) => ({ async get() {
      var r5;
      return await this.updateComplete, null === (r5 = this.renderRoot) || void 0 === r5 ? void 0 : r5.querySelector(e10);
    }, enumerable: true, configurable: true }) });
  }

  // node_modules/@lit/reactive-element/decorators/query-assigned-elements.js
  var n;
  var e4 = null != (null === (n = window.HTMLSlotElement) || void 0 === n ? void 0 : n.prototype.assignedElements) ? (o9, n9) => o9.assignedElements(n9) : (o9, n9) => o9.assignedNodes(n9).filter((o10) => o10.nodeType === Node.ELEMENT_NODE);

  // node_modules/@lit/reactive-element/css-tag.js
  var t2 = window;
  var e5 = t2.ShadowRoot && (void 0 === t2.ShadyCSS || t2.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
  var s = Symbol();
  var n2 = /* @__PURE__ */ new WeakMap();
  var o2 = class {
    constructor(t5, e10, n9) {
      if (this._$cssResult$ = true, n9 !== s)
        throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t5, this.t = e10;
    }
    get styleSheet() {
      let t5 = this.o;
      const s6 = this.t;
      if (e5 && void 0 === t5) {
        const e10 = void 0 !== s6 && 1 === s6.length;
        e10 && (t5 = n2.get(s6)), void 0 === t5 && ((this.o = t5 = new CSSStyleSheet()).replaceSync(this.cssText), e10 && n2.set(s6, t5));
      }
      return t5;
    }
    toString() {
      return this.cssText;
    }
  };
  var r = (t5) => new o2("string" == typeof t5 ? t5 : t5 + "", void 0, s);
  var i3 = (t5, ...e10) => {
    const n9 = 1 === t5.length ? t5[0] : e10.reduce((e11, s6, n10) => e11 + ((t6) => {
      if (true === t6._$cssResult$)
        return t6.cssText;
      if ("number" == typeof t6)
        return t6;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t6 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(s6) + t5[n10 + 1], t5[0]);
    return new o2(n9, t5, s);
  };
  var S = (s6, n9) => {
    e5 ? s6.adoptedStyleSheets = n9.map((t5) => t5 instanceof CSSStyleSheet ? t5 : t5.styleSheet) : n9.forEach((e10) => {
      const n10 = document.createElement("style"), o9 = t2.litNonce;
      void 0 !== o9 && n10.setAttribute("nonce", o9), n10.textContent = e10.cssText, s6.appendChild(n10);
    });
  };
  var c = e5 ? (t5) => t5 : (t5) => t5 instanceof CSSStyleSheet ? ((t6) => {
    let e10 = "";
    for (const s6 of t6.cssRules)
      e10 += s6.cssText;
    return r(e10);
  })(t5) : t5;

  // node_modules/@lit/reactive-element/reactive-element.js
  var s2;
  var e6 = window;
  var r2 = e6.trustedTypes;
  var h = r2 ? r2.emptyScript : "";
  var o3 = e6.reactiveElementPolyfillSupport;
  var n3 = { toAttribute(t5, i8) {
    switch (i8) {
      case Boolean:
        t5 = t5 ? h : null;
        break;
      case Object:
      case Array:
        t5 = null == t5 ? t5 : JSON.stringify(t5);
    }
    return t5;
  }, fromAttribute(t5, i8) {
    let s6 = t5;
    switch (i8) {
      case Boolean:
        s6 = null !== t5;
        break;
      case Number:
        s6 = null === t5 ? null : Number(t5);
        break;
      case Object:
      case Array:
        try {
          s6 = JSON.parse(t5);
        } catch (t6) {
          s6 = null;
        }
    }
    return s6;
  } };
  var a = (t5, i8) => i8 !== t5 && (i8 == i8 || t5 == t5);
  var l2 = { attribute: true, type: String, converter: n3, reflect: false, hasChanged: a };
  var d = class extends HTMLElement {
    constructor() {
      super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$El = null, this.u();
    }
    static addInitializer(t5) {
      var i8;
      this.finalize(), (null !== (i8 = this.h) && void 0 !== i8 ? i8 : this.h = []).push(t5);
    }
    static get observedAttributes() {
      this.finalize();
      const t5 = [];
      return this.elementProperties.forEach((i8, s6) => {
        const e10 = this._$Ep(s6, i8);
        void 0 !== e10 && (this._$Ev.set(e10, s6), t5.push(e10));
      }), t5;
    }
    static createProperty(t5, i8 = l2) {
      if (i8.state && (i8.attribute = false), this.finalize(), this.elementProperties.set(t5, i8), !i8.noAccessor && !this.prototype.hasOwnProperty(t5)) {
        const s6 = "symbol" == typeof t5 ? Symbol() : "__" + t5, e10 = this.getPropertyDescriptor(t5, s6, i8);
        void 0 !== e10 && Object.defineProperty(this.prototype, t5, e10);
      }
    }
    static getPropertyDescriptor(t5, i8, s6) {
      return { get() {
        return this[i8];
      }, set(e10) {
        const r4 = this[t5];
        this[i8] = e10, this.requestUpdate(t5, r4, s6);
      }, configurable: true, enumerable: true };
    }
    static getPropertyOptions(t5) {
      return this.elementProperties.get(t5) || l2;
    }
    static finalize() {
      if (this.hasOwnProperty("finalized"))
        return false;
      this.finalized = true;
      const t5 = Object.getPrototypeOf(this);
      if (t5.finalize(), void 0 !== t5.h && (this.h = [...t5.h]), this.elementProperties = new Map(t5.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
        const t6 = this.properties, i8 = [...Object.getOwnPropertyNames(t6), ...Object.getOwnPropertySymbols(t6)];
        for (const s6 of i8)
          this.createProperty(s6, t6[s6]);
      }
      return this.elementStyles = this.finalizeStyles(this.styles), true;
    }
    static finalizeStyles(i8) {
      const s6 = [];
      if (Array.isArray(i8)) {
        const e10 = new Set(i8.flat(1 / 0).reverse());
        for (const i9 of e10)
          s6.unshift(c(i9));
      } else
        void 0 !== i8 && s6.push(c(i8));
      return s6;
    }
    static _$Ep(t5, i8) {
      const s6 = i8.attribute;
      return false === s6 ? void 0 : "string" == typeof s6 ? s6 : "string" == typeof t5 ? t5.toLowerCase() : void 0;
    }
    u() {
      var t5;
      this._$E_ = new Promise((t6) => this.enableUpdating = t6), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), null === (t5 = this.constructor.h) || void 0 === t5 || t5.forEach((t6) => t6(this));
    }
    addController(t5) {
      var i8, s6;
      (null !== (i8 = this._$ES) && void 0 !== i8 ? i8 : this._$ES = []).push(t5), void 0 !== this.renderRoot && this.isConnected && (null === (s6 = t5.hostConnected) || void 0 === s6 || s6.call(t5));
    }
    removeController(t5) {
      var i8;
      null === (i8 = this._$ES) || void 0 === i8 || i8.splice(this._$ES.indexOf(t5) >>> 0, 1);
    }
    _$Eg() {
      this.constructor.elementProperties.forEach((t5, i8) => {
        this.hasOwnProperty(i8) && (this._$Ei.set(i8, this[i8]), delete this[i8]);
      });
    }
    createRenderRoot() {
      var t5;
      const s6 = null !== (t5 = this.shadowRoot) && void 0 !== t5 ? t5 : this.attachShadow(this.constructor.shadowRootOptions);
      return S(s6, this.constructor.elementStyles), s6;
    }
    connectedCallback() {
      var t5;
      void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), null === (t5 = this._$ES) || void 0 === t5 || t5.forEach((t6) => {
        var i8;
        return null === (i8 = t6.hostConnected) || void 0 === i8 ? void 0 : i8.call(t6);
      });
    }
    enableUpdating(t5) {
    }
    disconnectedCallback() {
      var t5;
      null === (t5 = this._$ES) || void 0 === t5 || t5.forEach((t6) => {
        var i8;
        return null === (i8 = t6.hostDisconnected) || void 0 === i8 ? void 0 : i8.call(t6);
      });
    }
    attributeChangedCallback(t5, i8, s6) {
      this._$AK(t5, s6);
    }
    _$EO(t5, i8, s6 = l2) {
      var e10;
      const r4 = this.constructor._$Ep(t5, s6);
      if (void 0 !== r4 && true === s6.reflect) {
        const h3 = (void 0 !== (null === (e10 = s6.converter) || void 0 === e10 ? void 0 : e10.toAttribute) ? s6.converter : n3).toAttribute(i8, s6.type);
        this._$El = t5, null == h3 ? this.removeAttribute(r4) : this.setAttribute(r4, h3), this._$El = null;
      }
    }
    _$AK(t5, i8) {
      var s6;
      const e10 = this.constructor, r4 = e10._$Ev.get(t5);
      if (void 0 !== r4 && this._$El !== r4) {
        const t6 = e10.getPropertyOptions(r4), h3 = "function" == typeof t6.converter ? { fromAttribute: t6.converter } : void 0 !== (null === (s6 = t6.converter) || void 0 === s6 ? void 0 : s6.fromAttribute) ? t6.converter : n3;
        this._$El = r4, this[r4] = h3.fromAttribute(i8, t6.type), this._$El = null;
      }
    }
    requestUpdate(t5, i8, s6) {
      let e10 = true;
      void 0 !== t5 && (((s6 = s6 || this.constructor.getPropertyOptions(t5)).hasChanged || a)(this[t5], i8) ? (this._$AL.has(t5) || this._$AL.set(t5, i8), true === s6.reflect && this._$El !== t5 && (void 0 === this._$EC && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t5, s6))) : e10 = false), !this.isUpdatePending && e10 && (this._$E_ = this._$Ej());
    }
    async _$Ej() {
      this.isUpdatePending = true;
      try {
        await this._$E_;
      } catch (t6) {
        Promise.reject(t6);
      }
      const t5 = this.scheduleUpdate();
      return null != t5 && await t5, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      var t5;
      if (!this.isUpdatePending)
        return;
      this.hasUpdated, this._$Ei && (this._$Ei.forEach((t6, i9) => this[i9] = t6), this._$Ei = void 0);
      let i8 = false;
      const s6 = this._$AL;
      try {
        i8 = this.shouldUpdate(s6), i8 ? (this.willUpdate(s6), null === (t5 = this._$ES) || void 0 === t5 || t5.forEach((t6) => {
          var i9;
          return null === (i9 = t6.hostUpdate) || void 0 === i9 ? void 0 : i9.call(t6);
        }), this.update(s6)) : this._$Ek();
      } catch (t6) {
        throw i8 = false, this._$Ek(), t6;
      }
      i8 && this._$AE(s6);
    }
    willUpdate(t5) {
    }
    _$AE(t5) {
      var i8;
      null === (i8 = this._$ES) || void 0 === i8 || i8.forEach((t6) => {
        var i9;
        return null === (i9 = t6.hostUpdated) || void 0 === i9 ? void 0 : i9.call(t6);
      }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t5)), this.updated(t5);
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
    shouldUpdate(t5) {
      return true;
    }
    update(t5) {
      void 0 !== this._$EC && (this._$EC.forEach((t6, i8) => this._$EO(i8, this[i8], t6)), this._$EC = void 0), this._$Ek();
    }
    updated(t5) {
    }
    firstUpdated(t5) {
    }
  };
  d.finalized = true, d.elementProperties = /* @__PURE__ */ new Map(), d.elementStyles = [], d.shadowRootOptions = { mode: "open" }, null == o3 || o3({ ReactiveElement: d }), (null !== (s2 = e6.reactiveElementVersions) && void 0 !== s2 ? s2 : e6.reactiveElementVersions = []).push("1.6.1");

  // node_modules/lit-html/lit-html.js
  var t3;
  var i4 = window;
  var s3 = i4.trustedTypes;
  var e7 = s3 ? s3.createPolicy("lit-html", { createHTML: (t5) => t5 }) : void 0;
  var o4 = "$lit$";
  var n4 = `lit$${(Math.random() + "").slice(9)}$`;
  var l3 = "?" + n4;
  var h2 = `<${l3}>`;
  var r3 = document;
  var d2 = () => r3.createComment("");
  var u = (t5) => null === t5 || "object" != typeof t5 && "function" != typeof t5;
  var c2 = Array.isArray;
  var v = (t5) => c2(t5) || "function" == typeof (null == t5 ? void 0 : t5[Symbol.iterator]);
  var a2 = "[ 	\n\f\r]";
  var f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  var _ = /-->/g;
  var m = />/g;
  var p = RegExp(`>|${a2}(?:([^\\s"'>=/]+)(${a2}*=${a2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
  var g = /'/g;
  var $2 = /"/g;
  var y = /^(?:script|style|textarea|title)$/i;
  var w = (t5) => (i8, ...s6) => ({ _$litType$: t5, strings: i8, values: s6 });
  var x = w(1);
  var b = w(2);
  var T = Symbol.for("lit-noChange");
  var A = Symbol.for("lit-nothing");
  var E = /* @__PURE__ */ new WeakMap();
  var C = r3.createTreeWalker(r3, 129, null, false);
  var P = (t5, i8) => {
    const s6 = t5.length - 1, l6 = [];
    let r4, d3 = 2 === i8 ? "<svg>" : "", u3 = f;
    for (let i9 = 0; i9 < s6; i9++) {
      const s7 = t5[i9];
      let e10, c4, v2 = -1, a4 = 0;
      for (; a4 < s7.length && (u3.lastIndex = a4, c4 = u3.exec(s7), null !== c4); )
        a4 = u3.lastIndex, u3 === f ? "!--" === c4[1] ? u3 = _ : void 0 !== c4[1] ? u3 = m : void 0 !== c4[2] ? (y.test(c4[2]) && (r4 = RegExp("</" + c4[2], "g")), u3 = p) : void 0 !== c4[3] && (u3 = p) : u3 === p ? ">" === c4[0] ? (u3 = null != r4 ? r4 : f, v2 = -1) : void 0 === c4[1] ? v2 = -2 : (v2 = u3.lastIndex - c4[2].length, e10 = c4[1], u3 = void 0 === c4[3] ? p : '"' === c4[3] ? $2 : g) : u3 === $2 || u3 === g ? u3 = p : u3 === _ || u3 === m ? u3 = f : (u3 = p, r4 = void 0);
      const w2 = u3 === p && t5[i9 + 1].startsWith("/>") ? " " : "";
      d3 += u3 === f ? s7 + h2 : v2 >= 0 ? (l6.push(e10), s7.slice(0, v2) + o4 + s7.slice(v2) + n4 + w2) : s7 + n4 + (-2 === v2 ? (l6.push(void 0), i9) : w2);
    }
    const c3 = d3 + (t5[s6] || "<?>") + (2 === i8 ? "</svg>" : "");
    if (!Array.isArray(t5) || !t5.hasOwnProperty("raw"))
      throw Error("invalid template strings array");
    return [void 0 !== e7 ? e7.createHTML(c3) : c3, l6];
  };
  var V = class {
    constructor({ strings: t5, _$litType$: i8 }, e10) {
      let h3;
      this.parts = [];
      let r4 = 0, u3 = 0;
      const c3 = t5.length - 1, v2 = this.parts, [a4, f2] = P(t5, i8);
      if (this.el = V.createElement(a4, e10), C.currentNode = this.el.content, 2 === i8) {
        const t6 = this.el.content, i9 = t6.firstChild;
        i9.remove(), t6.append(...i9.childNodes);
      }
      for (; null !== (h3 = C.nextNode()) && v2.length < c3; ) {
        if (1 === h3.nodeType) {
          if (h3.hasAttributes()) {
            const t6 = [];
            for (const i9 of h3.getAttributeNames())
              if (i9.endsWith(o4) || i9.startsWith(n4)) {
                const s6 = f2[u3++];
                if (t6.push(i9), void 0 !== s6) {
                  const t7 = h3.getAttribute(s6.toLowerCase() + o4).split(n4), i10 = /([.?@])?(.*)/.exec(s6);
                  v2.push({ type: 1, index: r4, name: i10[2], strings: t7, ctor: "." === i10[1] ? k : "?" === i10[1] ? I : "@" === i10[1] ? L : R });
                } else
                  v2.push({ type: 6, index: r4 });
              }
            for (const i9 of t6)
              h3.removeAttribute(i9);
          }
          if (y.test(h3.tagName)) {
            const t6 = h3.textContent.split(n4), i9 = t6.length - 1;
            if (i9 > 0) {
              h3.textContent = s3 ? s3.emptyScript : "";
              for (let s6 = 0; s6 < i9; s6++)
                h3.append(t6[s6], d2()), C.nextNode(), v2.push({ type: 2, index: ++r4 });
              h3.append(t6[i9], d2());
            }
          }
        } else if (8 === h3.nodeType)
          if (h3.data === l3)
            v2.push({ type: 2, index: r4 });
          else {
            let t6 = -1;
            for (; -1 !== (t6 = h3.data.indexOf(n4, t6 + 1)); )
              v2.push({ type: 7, index: r4 }), t6 += n4.length - 1;
          }
        r4++;
      }
    }
    static createElement(t5, i8) {
      const s6 = r3.createElement("template");
      return s6.innerHTML = t5, s6;
    }
  };
  function N(t5, i8, s6 = t5, e10) {
    var o9, n9, l6, h3;
    if (i8 === T)
      return i8;
    let r4 = void 0 !== e10 ? null === (o9 = s6._$Co) || void 0 === o9 ? void 0 : o9[e10] : s6._$Cl;
    const d3 = u(i8) ? void 0 : i8._$litDirective$;
    return (null == r4 ? void 0 : r4.constructor) !== d3 && (null === (n9 = null == r4 ? void 0 : r4._$AO) || void 0 === n9 || n9.call(r4, false), void 0 === d3 ? r4 = void 0 : (r4 = new d3(t5), r4._$AT(t5, s6, e10)), void 0 !== e10 ? (null !== (l6 = (h3 = s6)._$Co) && void 0 !== l6 ? l6 : h3._$Co = [])[e10] = r4 : s6._$Cl = r4), void 0 !== r4 && (i8 = N(t5, r4._$AS(t5, i8.values), r4, e10)), i8;
  }
  var S2 = class {
    constructor(t5, i8) {
      this._$AV = [], this._$AN = void 0, this._$AD = t5, this._$AM = i8;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(t5) {
      var i8;
      const { el: { content: s6 }, parts: e10 } = this._$AD, o9 = (null !== (i8 = null == t5 ? void 0 : t5.creationScope) && void 0 !== i8 ? i8 : r3).importNode(s6, true);
      C.currentNode = o9;
      let n9 = C.nextNode(), l6 = 0, h3 = 0, d3 = e10[0];
      for (; void 0 !== d3; ) {
        if (l6 === d3.index) {
          let i9;
          2 === d3.type ? i9 = new M(n9, n9.nextSibling, this, t5) : 1 === d3.type ? i9 = new d3.ctor(n9, d3.name, d3.strings, this, t5) : 6 === d3.type && (i9 = new z(n9, this, t5)), this._$AV.push(i9), d3 = e10[++h3];
        }
        l6 !== (null == d3 ? void 0 : d3.index) && (n9 = C.nextNode(), l6++);
      }
      return C.currentNode = r3, o9;
    }
    v(t5) {
      let i8 = 0;
      for (const s6 of this._$AV)
        void 0 !== s6 && (void 0 !== s6.strings ? (s6._$AI(t5, s6, i8), i8 += s6.strings.length - 2) : s6._$AI(t5[i8])), i8++;
    }
  };
  var M = class {
    constructor(t5, i8, s6, e10) {
      var o9;
      this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t5, this._$AB = i8, this._$AM = s6, this.options = e10, this._$Cp = null === (o9 = null == e10 ? void 0 : e10.isConnected) || void 0 === o9 || o9;
    }
    get _$AU() {
      var t5, i8;
      return null !== (i8 = null === (t5 = this._$AM) || void 0 === t5 ? void 0 : t5._$AU) && void 0 !== i8 ? i8 : this._$Cp;
    }
    get parentNode() {
      let t5 = this._$AA.parentNode;
      const i8 = this._$AM;
      return void 0 !== i8 && 11 === (null == t5 ? void 0 : t5.nodeType) && (t5 = i8.parentNode), t5;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t5, i8 = this) {
      t5 = N(this, t5, i8), u(t5) ? t5 === A || null == t5 || "" === t5 ? (this._$AH !== A && this._$AR(), this._$AH = A) : t5 !== this._$AH && t5 !== T && this._(t5) : void 0 !== t5._$litType$ ? this.g(t5) : void 0 !== t5.nodeType ? this.$(t5) : v(t5) ? this.T(t5) : this._(t5);
    }
    k(t5) {
      return this._$AA.parentNode.insertBefore(t5, this._$AB);
    }
    $(t5) {
      this._$AH !== t5 && (this._$AR(), this._$AH = this.k(t5));
    }
    _(t5) {
      this._$AH !== A && u(this._$AH) ? this._$AA.nextSibling.data = t5 : this.$(r3.createTextNode(t5)), this._$AH = t5;
    }
    g(t5) {
      var i8;
      const { values: s6, _$litType$: e10 } = t5, o9 = "number" == typeof e10 ? this._$AC(t5) : (void 0 === e10.el && (e10.el = V.createElement(e10.h, this.options)), e10);
      if ((null === (i8 = this._$AH) || void 0 === i8 ? void 0 : i8._$AD) === o9)
        this._$AH.v(s6);
      else {
        const t6 = new S2(o9, this), i9 = t6.u(this.options);
        t6.v(s6), this.$(i9), this._$AH = t6;
      }
    }
    _$AC(t5) {
      let i8 = E.get(t5.strings);
      return void 0 === i8 && E.set(t5.strings, i8 = new V(t5)), i8;
    }
    T(t5) {
      c2(this._$AH) || (this._$AH = [], this._$AR());
      const i8 = this._$AH;
      let s6, e10 = 0;
      for (const o9 of t5)
        e10 === i8.length ? i8.push(s6 = new M(this.k(d2()), this.k(d2()), this, this.options)) : s6 = i8[e10], s6._$AI(o9), e10++;
      e10 < i8.length && (this._$AR(s6 && s6._$AB.nextSibling, e10), i8.length = e10);
    }
    _$AR(t5 = this._$AA.nextSibling, i8) {
      var s6;
      for (null === (s6 = this._$AP) || void 0 === s6 || s6.call(this, false, true, i8); t5 && t5 !== this._$AB; ) {
        const i9 = t5.nextSibling;
        t5.remove(), t5 = i9;
      }
    }
    setConnected(t5) {
      var i8;
      void 0 === this._$AM && (this._$Cp = t5, null === (i8 = this._$AP) || void 0 === i8 || i8.call(this, t5));
    }
  };
  var R = class {
    constructor(t5, i8, s6, e10, o9) {
      this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t5, this.name = i8, this._$AM = e10, this.options = o9, s6.length > 2 || "" !== s6[0] || "" !== s6[1] ? (this._$AH = Array(s6.length - 1).fill(new String()), this.strings = s6) : this._$AH = A;
    }
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t5, i8 = this, s6, e10) {
      const o9 = this.strings;
      let n9 = false;
      if (void 0 === o9)
        t5 = N(this, t5, i8, 0), n9 = !u(t5) || t5 !== this._$AH && t5 !== T, n9 && (this._$AH = t5);
      else {
        const e11 = t5;
        let l6, h3;
        for (t5 = o9[0], l6 = 0; l6 < o9.length - 1; l6++)
          h3 = N(this, e11[s6 + l6], i8, l6), h3 === T && (h3 = this._$AH[l6]), n9 || (n9 = !u(h3) || h3 !== this._$AH[l6]), h3 === A ? t5 = A : t5 !== A && (t5 += (null != h3 ? h3 : "") + o9[l6 + 1]), this._$AH[l6] = h3;
      }
      n9 && !e10 && this.j(t5);
    }
    j(t5) {
      t5 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t5 ? t5 : "");
    }
  };
  var k = class extends R {
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(t5) {
      this.element[this.name] = t5 === A ? void 0 : t5;
    }
  };
  var H = s3 ? s3.emptyScript : "";
  var I = class extends R {
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(t5) {
      t5 && t5 !== A ? this.element.setAttribute(this.name, H) : this.element.removeAttribute(this.name);
    }
  };
  var L = class extends R {
    constructor(t5, i8, s6, e10, o9) {
      super(t5, i8, s6, e10, o9), this.type = 5;
    }
    _$AI(t5, i8 = this) {
      var s6;
      if ((t5 = null !== (s6 = N(this, t5, i8, 0)) && void 0 !== s6 ? s6 : A) === T)
        return;
      const e10 = this._$AH, o9 = t5 === A && e10 !== A || t5.capture !== e10.capture || t5.once !== e10.once || t5.passive !== e10.passive, n9 = t5 !== A && (e10 === A || o9);
      o9 && this.element.removeEventListener(this.name, this, e10), n9 && this.element.addEventListener(this.name, this, t5), this._$AH = t5;
    }
    handleEvent(t5) {
      var i8, s6;
      "function" == typeof this._$AH ? this._$AH.call(null !== (s6 = null === (i8 = this.options) || void 0 === i8 ? void 0 : i8.host) && void 0 !== s6 ? s6 : this.element, t5) : this._$AH.handleEvent(t5);
    }
  };
  var z = class {
    constructor(t5, i8, s6) {
      this.element = t5, this.type = 6, this._$AN = void 0, this._$AM = i8, this.options = s6;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t5) {
      N(this, t5);
    }
  };
  var j = i4.litHtmlPolyfillSupport;
  null == j || j(V, M), (null !== (t3 = i4.litHtmlVersions) && void 0 !== t3 ? t3 : i4.litHtmlVersions = []).push("2.7.4");
  var B = (t5, i8, s6) => {
    var e10, o9;
    const n9 = null !== (e10 = null == s6 ? void 0 : s6.renderBefore) && void 0 !== e10 ? e10 : i8;
    let l6 = n9._$litPart$;
    if (void 0 === l6) {
      const t6 = null !== (o9 = null == s6 ? void 0 : s6.renderBefore) && void 0 !== o9 ? o9 : null;
      n9._$litPart$ = l6 = new M(i8.insertBefore(d2(), t6), t6, void 0, null != s6 ? s6 : {});
    }
    return l6._$AI(t5), l6;
  };

  // node_modules/lit-element/lit-element.js
  var l4;
  var o5;
  var s4 = class extends d {
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
    }
    createRenderRoot() {
      var t5, e10;
      const i8 = super.createRenderRoot();
      return null !== (t5 = (e10 = this.renderOptions).renderBefore) && void 0 !== t5 || (e10.renderBefore = i8.firstChild), i8;
    }
    update(t5) {
      const i8 = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t5), this._$Do = B(i8, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      var t5;
      super.connectedCallback(), null === (t5 = this._$Do) || void 0 === t5 || t5.setConnected(true);
    }
    disconnectedCallback() {
      var t5;
      super.disconnectedCallback(), null === (t5 = this._$Do) || void 0 === t5 || t5.setConnected(false);
    }
    render() {
      return T;
    }
  };
  s4.finalized = true, s4._$litElement$ = true, null === (l4 = globalThis.litElementHydrateSupport) || void 0 === l4 || l4.call(globalThis, { LitElement: s4 });
  var n5 = globalThis.litElementPolyfillSupport;
  null == n5 || n5({ LitElement: s4 });
  (null !== (o5 = globalThis.litElementVersions) && void 0 !== o5 ? o5 : globalThis.litElementVersions = []).push("3.3.2");

  // node_modules/lit-html/is-server.js
  var o6 = false;

  // node_modules/@material/web/icon/lib/icon.js
  var Icon = class extends s4 {
    render() {
      return x`<span><slot></slot></span>`;
    }
  };

  // node_modules/@material/web/icon/lib/icon-styles.css.js
  var styles = i3`:host{--_color: var(--md-icon-color, inherit);--_font: var(--md-icon-font, "Material Symbols Outlined");--_font-variation-settings: var(--md-icon-font-variation-settings, inherit);--_size: var(--md-icon-size, 24px);--_weight: var(--md-icon-weight, 400);display:inline-flex;color:var(--_color);font-family:var(--_font);font-weight:var(--_weight);font-style:normal;font-size:var(--_size);font-variation-settings:var(--_font-variation-settings);line-height:1;overflow:hidden;letter-spacing:normal;text-transform:none;white-space:nowrap;word-wrap:normal;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale}span ::slotted(svg){fill:currentColor}span ::slotted(*){height:var(--_size);width:var(--_size)}/*# sourceMappingURL=icon-styles.css.map */
`;

  // node_modules/@material/web/icon/icon.js
  var MdIcon = class MdIcon2 extends Icon {
  };
  MdIcon.styles = [styles];
  MdIcon = __decorate([
    e("md-icon")
  ], MdIcon);

  // node_modules/@material/web/iconbutton/lib/filled-styles.css.js
  var styles2 = i3`:host{--_container-color: var(--md-filled-icon-button-container-color, var(--md-sys-color-primary, #6750a4));--_container-shape: var(--md-filled-icon-button-container-shape, 9999px);--_container-size: var(--md-filled-icon-button-container-size, 40px);--_disabled-container-color: var(--md-filled-icon-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-icon-button-disabled-container-opacity, 0.12);--_disabled-icon-color: var(--md-filled-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-icon-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-icon-button-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_focus-state-layer-color: var(--md-filled-icon-button-focus-state-layer-color, var(--md-sys-color-on-primary, #fff));--_focus-state-layer-opacity: var(--md-filled-icon-button-focus-state-layer-opacity, 0.12);--_hover-icon-color: var(--md-filled-icon-button-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-color: var(--md-filled-icon-button-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-opacity: var(--md-filled-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-filled-icon-button-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-size: var(--md-filled-icon-button-icon-size, 24px);--_pressed-icon-color: var(--md-filled-icon-button-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-color: var(--md-filled-icon-button-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-opacity: var(--md-filled-icon-button-pressed-state-layer-opacity, 0.12);--_selected-container-color: var(--md-filled-icon-button-selected-container-color, var(--md-sys-color-primary, #6750a4));--_toggle-selected-focus-icon-color: var(--md-filled-icon-button-toggle-selected-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-focus-state-layer-color: var(--md-filled-icon-button-toggle-selected-focus-state-layer-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-hover-icon-color: var(--md-filled-icon-button-toggle-selected-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-hover-state-layer-color: var(--md-filled-icon-button-toggle-selected-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-icon-color: var(--md-filled-icon-button-toggle-selected-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-pressed-icon-color: var(--md-filled-icon-button-toggle-selected-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-pressed-state-layer-color: var(--md-filled-icon-button-toggle-selected-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_toggle-unselected-focus-icon-color: var(--md-filled-icon-button-toggle-unselected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-unselected-focus-state-layer-color: var(--md-filled-icon-button-toggle-unselected-focus-state-layer-color, var(--md-sys-color-primary, #6750a4));--_toggle-unselected-hover-icon-color: var(--md-filled-icon-button-toggle-unselected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-unselected-hover-state-layer-color: var(--md-filled-icon-button-toggle-unselected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_toggle-unselected-icon-color: var(--md-filled-icon-button-toggle-unselected-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-unselected-pressed-icon-color: var(--md-filled-icon-button-toggle-unselected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-unselected-pressed-state-layer-color: var(--md-filled-icon-button-toggle-unselected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_unselected-container-color: var(--md-filled-icon-button-unselected-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_container-shape-start-start: var( --md-filled-icon-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-filled-icon-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-filled-icon-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-filled-icon-button-container-shape-end-start, var(--_container-shape) )}.icon-button{color:var(--_icon-color);--md-ripple-focus-color: var(--_focus-state-layer-color);--md-ripple-focus-opacity: var(--_focus-state-layer-opacity);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.icon-button:hover{color:var(--_hover-icon-color)}.icon-button:focus{color:var(--_focus-icon-color)}.icon-button:active{color:var(--_pressed-icon-color)}.icon-button:disabled{color:var(--_disabled-icon-color)}.icon-button::before{background-color:var(--_container-color);border-radius:inherit;content:"";inset:0;position:absolute;z-index:-1}.icon-button:disabled::before{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}.icon-button:disabled .icon{opacity:var(--_disabled-icon-opacity)}.toggle-filled{--md-ripple-focus-color: var(--_toggle-unselected-focus-state-layer-color);--md-ripple-hover-color: var(--_toggle-unselected-hover-state-layer-color);--md-ripple-pressed-color: var(--_toggle-unselected-pressed-state-layer-color)}.toggle-filled:not(:disabled){color:var(--_toggle-unselected-icon-color)}.toggle-filled:not(:disabled):hover{color:var(--_toggle-unselected-hover-icon-color)}.toggle-filled:not(:disabled):focus{color:var(--_toggle-unselected-focus-icon-color)}.toggle-filled:not(:disabled):active{color:var(--_toggle-unselected-pressed-icon-color)}.toggle-filled:not(:disabled)::before{background-color:var(--_unselected-container-color)}.selected{--md-ripple-focus-color: var(--_toggle-selected-focus-state-layer-color);--md-ripple-hover-color: var(--_toggle-selected-hover-state-layer-color);--md-ripple-pressed-color: var(--_toggle-selected-pressed-state-layer-color)}.selected:not(:disabled){color:var(--_toggle-selected-icon-color)}.selected:not(:disabled):hover{color:var(--_toggle-selected-hover-icon-color)}.selected:not(:disabled):focus{color:var(--_toggle-selected-focus-icon-color)}.selected:not(:disabled):active{color:var(--_toggle-selected-pressed-icon-color)}.selected:not(:disabled)::before{background-color:var(--_selected-container-color)}/*# sourceMappingURL=filled-styles.css.map */
`;

  // node_modules/@material/web/focus/lib/focus-ring.js
  var FocusRing = class extends s4 {
    constructor() {
      super(...arguments);
      this.visible = false;
      this.inward = false;
      this.htmlFor = null;
      this.currentControl = null;
    }
    /**
     * The element that controls the visibility of the focus ring. It is one of:
     *
     * - The element referenced by the `for` attribute.
     * - The element provided to `.attach(element)`
     * - The parent element.
     * - `null` if the focus ring is not controlled.
     */
    get control() {
      if (this.hasAttribute("for")) {
        if (!this.htmlFor) {
          return null;
        }
        return this.getRootNode().querySelector(`#${this.htmlFor}`);
      }
      return this.currentControl || this.parentElement;
    }
    /**
     * Attaches the focus ring to an interactive element.
     *
     * @param control The element that controls the focus ring.
     */
    attach(control) {
      if (control === this.currentControl) {
        return;
      }
      this.setCurrentControl(control);
      this.removeAttribute("for");
    }
    /**
     * Detaches the focus ring from its current interactive element.
     */
    detach() {
      this.setCurrentControl(null);
      this.setAttribute("for", "");
    }
    connectedCallback() {
      super.connectedCallback();
      this.setCurrentControl(this.control);
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this.setCurrentControl(null);
    }
    updated(changedProperties) {
      if (changedProperties.has("htmlFor")) {
        const { control } = this;
        if (control) {
          this.setCurrentControl(control);
        }
      }
    }
    /**
     * @private
     */
    handleEvent(event) {
      if (event[HANDLED_BY_FOCUS_RING]) {
        return;
      }
      switch (event.type) {
        default:
          return;
        case "focusin":
          this.visible = this.control?.matches(":focus-visible") ?? false;
          break;
        case "focusout":
        case "pointerdown":
          this.visible = false;
          break;
      }
      event[HANDLED_BY_FOCUS_RING] = true;
    }
    setCurrentControl(control) {
      for (const event of ["focusin", "focusout", "pointerdown"]) {
        this.currentControl?.removeEventListener(event, this);
        control?.addEventListener(event, this);
      }
      this.currentControl = control;
    }
  };
  __decorate([
    e2({ type: Boolean, reflect: true })
  ], FocusRing.prototype, "visible", void 0);
  __decorate([
    e2({ type: Boolean, reflect: true })
  ], FocusRing.prototype, "inward", void 0);
  __decorate([
    e2({ attribute: "for", reflect: true })
  ], FocusRing.prototype, "htmlFor", void 0);
  var HANDLED_BY_FOCUS_RING = Symbol("handledByFocusRing");

  // node_modules/@material/web/focus/lib/focus-ring-styles.css.js
  var styles3 = i3`:host{--_active-width: var(--md-focus-ring-active-width, 8px);--_color: var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));--_duration: var(--md-focus-ring-duration, 600ms);--_inward-offset: var(--md-focus-ring-inward-offset, 0px);--_outward-offset: var(--md-focus-ring-outward-offset, 2px);--_shape: var(--md-focus-ring-shape, 9999px);--_width: var(--md-focus-ring-width, 3px);--_shape-start-start: var(--md-focus-ring-shape-start-start, var(--_shape));--_shape-start-end: var(--md-focus-ring-shape-start-end, var(--_shape));--_shape-end-end: var(--md-focus-ring-shape-end-end, var(--_shape));--_shape-end-start: var(--md-focus-ring-shape-end-start, var(--_shape));animation-delay:0s,calc(var(--_duration)*.25);animation-duration:calc(var(--_duration)*.25),calc(var(--_duration)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--_color);display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--_shape-end-end) + var(--_outward-offset));border-end-start-radius:calc(var(--_shape-end-start) + var(--_outward-offset));border-start-end-radius:calc(var(--_shape-start-end) + var(--_outward-offset));border-start-start-radius:calc(var(--_shape-start-start) + var(--_outward-offset));inset:calc(-1*(var(--_outward-offset)));outline:var(--_width) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--_shape-end-end) - var(--_inward-offset));border-end-start-radius:calc(var(--_shape-end-start) - var(--_inward-offset));border-start-end-radius:calc(var(--_shape-start-end) - var(--_inward-offset));border-start-start-radius:calc(var(--_shape-start-start) - var(--_inward-offset));border:var(--_width) solid currentColor;inset:var(--_inward-offset)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--_active-width)}}@keyframes outward-shrink{from{outline-width:var(--_active-width)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--_active-width)}}@keyframes inward-shrink{from{border-width:var(--_active-width)}}@media(prefers-reduced-motion){:host{animation:none}}/*# sourceMappingURL=focus-ring-styles.css.map */
`;

  // node_modules/@material/web/focus/focus-ring.js
  var MdFocusRing = class MdFocusRing2 extends FocusRing {
  };
  MdFocusRing.styles = [styles3];
  MdFocusRing = __decorate([
    e("md-focus-ring")
  ], MdFocusRing);

  // node_modules/lit-html/directive.js
  var t4 = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 };
  var e8 = (t5) => (...e10) => ({ _$litDirective$: t5, values: e10 });
  var i5 = class {
    constructor(t5) {
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AT(t5, e10, i8) {
      this._$Ct = t5, this._$AM = e10, this._$Ci = i8;
    }
    _$AS(t5, e10) {
      return this.update(t5, e10);
    }
    update(t5, e10) {
      return this.render(...e10);
    }
  };

  // node_modules/lit-html/directives/class-map.js
  var o7 = e8(class extends i5 {
    constructor(t5) {
      var i8;
      if (super(t5), t5.type !== t4.ATTRIBUTE || "class" !== t5.name || (null === (i8 = t5.strings) || void 0 === i8 ? void 0 : i8.length) > 2)
        throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
    }
    render(t5) {
      return " " + Object.keys(t5).filter((i8) => t5[i8]).join(" ") + " ";
    }
    update(i8, [s6]) {
      var r4, o9;
      if (void 0 === this.it) {
        this.it = /* @__PURE__ */ new Set(), void 0 !== i8.strings && (this.nt = new Set(i8.strings.join(" ").split(/\s/).filter((t5) => "" !== t5)));
        for (const t5 in s6)
          s6[t5] && !(null === (r4 = this.nt) || void 0 === r4 ? void 0 : r4.has(t5)) && this.it.add(t5);
        return this.render(s6);
      }
      const e10 = i8.element.classList;
      this.it.forEach((t5) => {
        t5 in s6 || (e10.remove(t5), this.it.delete(t5));
      });
      for (const t5 in s6) {
        const i9 = !!s6[t5];
        i9 === this.it.has(t5) || (null === (o9 = this.nt) || void 0 === o9 ? void 0 : o9.has(t5)) || (i9 ? (e10.add(t5), this.it.add(t5)) : (e10.remove(t5), this.it.delete(t5)));
      }
      return T;
    }
  });

  // node_modules/@material/web/motion/animation.js
  var EASING = {
    STANDARD: "cubic-bezier(0.2, 0, 0, 1)",
    STANDARD_ACCELERATE: "cubic-bezier(.3,0,1,1)",
    STANDARD_DECELERATE: "cubic-bezier(0,0,0,1)",
    EMPHASIZED: "cubic-bezier(.3,0,0,1)",
    EMPHASIZED_ACCELERATE: "cubic-bezier(.3,0,.8,.15)",
    EMPHASIZED_DECELERATE: "cubic-bezier(.05,.7,.1,1)"
  };

  // node_modules/@material/web/ripple/lib/ripple.js
  var PRESS_GROW_MS = 450;
  var MINIMUM_PRESS_MS = 225;
  var INITIAL_ORIGIN_SCALE = 0.2;
  var PADDING = 10;
  var SOFT_EDGE_MINIMUM_SIZE = 75;
  var SOFT_EDGE_CONTAINER_RATIO = 0.35;
  var PRESS_PSEUDO = "::after";
  var ANIMATION_FILL = "forwards";
  var State;
  (function(State2) {
    State2[State2["INACTIVE"] = 0] = "INACTIVE";
    State2[State2["TOUCH_DELAY"] = 1] = "TOUCH_DELAY";
    State2[State2["HOLDING"] = 2] = "HOLDING";
    State2[State2["WAITING_FOR_CLICK"] = 3] = "WAITING_FOR_CLICK";
  })(State || (State = {}));
  var TOUCH_DELAY_MS = 150;
  var Ripple = class extends s4 {
    constructor() {
      super(...arguments);
      this.unbounded = false;
      this.disabled = false;
      this.hovered = false;
      this.focused = false;
      this.pressed = false;
      this.rippleSize = "";
      this.rippleScale = "";
      this.initialSize = 0;
      this.state = State.INACTIVE;
      this.checkBoundsAfterContextMenu = false;
    }
    handlePointerenter(event) {
      if (!this.shouldReactToEvent(event)) {
        return;
      }
      this.hovered = true;
    }
    handlePointerleave(event) {
      if (!this.shouldReactToEvent(event)) {
        return;
      }
      this.hovered = false;
      if (this.state !== State.INACTIVE) {
        this.endPressAnimation();
      }
    }
    handleFocusin() {
      this.focused = true;
    }
    handleFocusout() {
      this.focused = false;
    }
    handlePointerup(event) {
      if (!this.shouldReactToEvent(event)) {
        return;
      }
      if (this.state === State.HOLDING) {
        this.state = State.WAITING_FOR_CLICK;
        return;
      }
      if (this.state === State.TOUCH_DELAY) {
        this.state = State.WAITING_FOR_CLICK;
        this.startPressAnimation(this.rippleStartEvent);
        return;
      }
    }
    async handlePointerdown(event) {
      if (!this.shouldReactToEvent(event)) {
        return;
      }
      this.rippleStartEvent = event;
      if (!this.isTouch(event)) {
        this.state = State.WAITING_FOR_CLICK;
        this.startPressAnimation(event);
        return;
      }
      if (this.checkBoundsAfterContextMenu && !this.inBounds(event)) {
        return;
      }
      this.checkBoundsAfterContextMenu = false;
      this.state = State.TOUCH_DELAY;
      await new Promise((resolve) => {
        setTimeout(resolve, TOUCH_DELAY_MS);
      });
      if (this.state !== State.TOUCH_DELAY) {
        return;
      }
      this.state = State.HOLDING;
      this.startPressAnimation(event);
    }
    handleClick() {
      if (this.disabled) {
        return;
      }
      if (this.state === State.WAITING_FOR_CLICK) {
        this.endPressAnimation();
        return;
      }
      if (this.state === State.INACTIVE) {
        this.startPressAnimation();
        this.endPressAnimation();
      }
    }
    handlePointercancel(event) {
      if (!this.shouldReactToEvent(event)) {
        return;
      }
      this.endPressAnimation();
    }
    handleContextmenu() {
      if (this.disabled) {
        return;
      }
      this.checkBoundsAfterContextMenu = true;
      this.endPressAnimation();
    }
    render() {
      const classes = {
        "hovered": this.hovered,
        "focused": this.focused,
        "pressed": this.pressed,
        "unbounded": this.unbounded
      };
      return x`<div class="surface ${o7(classes)}"></div>`;
    }
    update(changedProps) {
      if (changedProps.has("disabled") && this.disabled) {
        this.hovered = false;
        this.focused = false;
        this.pressed = false;
      }
      super.update(changedProps);
    }
    getDimensions() {
      return (this.parentElement ?? this).getBoundingClientRect();
    }
    determineRippleSize() {
      const { height, width } = this.getDimensions();
      const maxDim = Math.max(height, width);
      const softEdgeSize = Math.max(SOFT_EDGE_CONTAINER_RATIO * maxDim, SOFT_EDGE_MINIMUM_SIZE);
      let maxRadius = maxDim;
      let initialSize = Math.floor(maxDim * INITIAL_ORIGIN_SCALE);
      const hypotenuse = Math.sqrt(width ** 2 + height ** 2);
      maxRadius = hypotenuse + PADDING;
      if (this.unbounded) {
        initialSize = initialSize - initialSize % 2;
      }
      this.initialSize = initialSize;
      this.rippleScale = `${(maxRadius + softEdgeSize) / initialSize}`;
      this.rippleSize = `${this.initialSize}px`;
    }
    getNormalizedPointerEventCoords(pointerEvent) {
      const { scrollX, scrollY } = window;
      const { left, top } = this.getDimensions();
      const documentX = scrollX + left;
      const documentY = scrollY + top;
      const { pageX, pageY } = pointerEvent;
      return { x: pageX - documentX, y: pageY - documentY };
    }
    getTranslationCoordinates(positionEvent) {
      const { height, width } = this.getDimensions();
      const endPoint = {
        x: (width - this.initialSize) / 2,
        y: (height - this.initialSize) / 2
      };
      let startPoint;
      if (positionEvent instanceof PointerEvent) {
        startPoint = this.getNormalizedPointerEventCoords(positionEvent);
      } else {
        startPoint = {
          x: width / 2,
          y: height / 2
        };
      }
      startPoint = {
        x: startPoint.x - this.initialSize / 2,
        y: startPoint.y - this.initialSize / 2
      };
      return { startPoint, endPoint };
    }
    startPressAnimation(positionEvent) {
      if (!this.mdRoot) {
        return;
      }
      this.pressed = true;
      this.growAnimation?.cancel();
      this.determineRippleSize();
      const { startPoint, endPoint } = this.getTranslationCoordinates(positionEvent);
      const translateStart = `${startPoint.x}px, ${startPoint.y}px`;
      const translateEnd = `${endPoint.x}px, ${endPoint.y}px`;
      this.growAnimation = this.mdRoot.animate({
        top: [0, 0],
        left: [0, 0],
        height: [this.rippleSize, this.rippleSize],
        width: [this.rippleSize, this.rippleSize],
        transform: [
          `translate(${translateStart}) scale(1)`,
          `translate(${translateEnd}) scale(${this.rippleScale})`
        ]
      }, {
        pseudoElement: PRESS_PSEUDO,
        duration: PRESS_GROW_MS,
        easing: EASING.STANDARD,
        fill: ANIMATION_FILL
      });
    }
    async endPressAnimation() {
      this.state = State.INACTIVE;
      const animation = this.growAnimation;
      const pressAnimationPlayState = animation?.currentTime ?? Infinity;
      if (pressAnimationPlayState >= MINIMUM_PRESS_MS) {
        this.pressed = false;
        return;
      }
      await new Promise((resolve) => {
        setTimeout(resolve, MINIMUM_PRESS_MS - pressAnimationPlayState);
      });
      if (this.growAnimation !== animation) {
        return;
      }
      this.pressed = false;
    }
    /**
     * Returns `true` if
     *  - the ripple element is enabled
     *  - the pointer is primary for the input type
     *  - the pointer is the pointer that started the interaction, or will start
     * the interaction
     *  - the pointer is a touch, or the pointer state has the primary button
     * held, or the pointer is hovering
     */
    shouldReactToEvent(event) {
      if (this.disabled || !event.isPrimary) {
        return false;
      }
      if (this.rippleStartEvent && this.rippleStartEvent.pointerId !== event.pointerId) {
        return false;
      }
      if (event.type === "pointerenter" || event.type === "pointerleave") {
        return !this.isTouch(event);
      }
      const isPrimaryButton = event.buttons === 1;
      return this.isTouch(event) || isPrimaryButton;
    }
    /**
     * Check if the event is within the bounds of the element.
     *
     * This is only needed for the "stuck" contextmenu longpress on Chrome.
     */
    inBounds({ x: x2, y: y2 }) {
      const { top, left, bottom, right } = this.getBoundingClientRect();
      return x2 >= left && x2 <= right && y2 >= top && y2 <= bottom;
    }
    isTouch({ pointerType }) {
      return pointerType === "touch";
    }
  };
  __decorate([
    e2({ type: Boolean, reflect: true })
  ], Ripple.prototype, "unbounded", void 0);
  __decorate([
    e2({ type: Boolean, reflect: true })
  ], Ripple.prototype, "disabled", void 0);
  __decorate([
    t()
  ], Ripple.prototype, "hovered", void 0);
  __decorate([
    t()
  ], Ripple.prototype, "focused", void 0);
  __decorate([
    t()
  ], Ripple.prototype, "pressed", void 0);
  __decorate([
    i2(".surface")
  ], Ripple.prototype, "mdRoot", void 0);

  // node_modules/@material/web/ripple/lib/ripple-styles.css.js
  var styles4 = i3`:host{--_focus-color: var(--md-ripple-focus-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-opacity: var(--md-ripple-focus-opacity, 0.12);--_hover-color: var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-opacity: var(--md-ripple-hover-opacity, 0.08);--_pressed-color: var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-opacity: var(--md-ripple-pressed-opacity, 0.12);display:flex}:host([disabled]){opacity:0}:host,.surface{border-radius:inherit;position:absolute;inset:0;pointer-events:none;overflow:hidden}.surface{outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{position:absolute;opacity:0;pointer-events:none;content:""}.surface::before{background-color:var(--_hover-color);transition:opacity 15ms linear,background-color 15ms linear;inset:0}.surface::after{background:radial-gradient(closest-side, var(--_pressed-color) max(100% - 70px, 65%), transparent 100%);transition:opacity 375ms linear;transform-origin:center center}.hovered::before{background-color:var(--_hover-color);opacity:var(--_hover-opacity)}.focused::before{background-color:var(--_focus-color);opacity:var(--_focus-opacity);transition-duration:75ms}.pressed::after{opacity:var(--_pressed-opacity);transition-duration:105ms}@media screen and (forced-colors: active){:host{display:none}}/*# sourceMappingURL=ripple-styles.css.map */
`;

  // node_modules/@material/web/ripple/ripple.js
  var MdRipple = class MdRipple2 extends Ripple {
  };
  MdRipple.styles = [styles4];
  MdRipple = __decorate([
    e("md-ripple")
  ], MdRipple);

  // node_modules/lit-html/directives/when.js
  function n6(n9, o9, r4) {
    return n9 ? o9() : null == r4 ? void 0 : r4();
  }

  // node_modules/lit-html/static.js
  var e9 = Symbol.for("");
  var l5 = (t5) => {
    if ((null == t5 ? void 0 : t5.r) === e9)
      return null == t5 ? void 0 : t5._$litStatic$;
  };
  var i6 = (t5, ...r4) => ({ _$litStatic$: r4.reduce((r5, e10, l6) => r5 + ((t6) => {
    if (void 0 !== t6._$litStatic$)
      return t6._$litStatic$;
    throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t6}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`);
  })(e10) + t5[l6 + 1], t5[0]), r: e9 });
  var s5 = /* @__PURE__ */ new Map();
  var a3 = (t5) => (r4, ...e10) => {
    const o9 = e10.length;
    let i8, a4;
    const n9 = [], u3 = [];
    let c3, $3 = 0, f2 = false;
    for (; $3 < o9; ) {
      for (c3 = r4[$3]; $3 < o9 && void 0 !== (a4 = e10[$3], i8 = l5(a4)); )
        c3 += i8 + r4[++$3], f2 = true;
      $3 !== o9 && u3.push(a4), n9.push(c3), $3++;
    }
    if ($3 === o9 && n9.push(r4[o9]), f2) {
      const t6 = n9.join("$$lit$$");
      void 0 === (r4 = s5.get(t6)) && (n9.raw = n9, s5.set(t6, r4 = n9)), e10 = u3;
    }
    return t5(r4, ...e10);
  };
  var n7 = a3(x);
  var u2 = a3(b);

  // node_modules/@material/web/aria/aria.js
  var ARIA_PROPERTIES = [
    "ariaAtomic",
    "ariaAutoComplete",
    "ariaBusy",
    "ariaChecked",
    "ariaColCount",
    "ariaColIndex",
    "ariaColSpan",
    "ariaCurrent",
    "ariaDisabled",
    "ariaExpanded",
    "ariaHasPopup",
    "ariaHidden",
    "ariaInvalid",
    "ariaKeyShortcuts",
    "ariaLabel",
    "ariaLevel",
    "ariaLive",
    "ariaModal",
    "ariaMultiLine",
    "ariaMultiSelectable",
    "ariaOrientation",
    "ariaPlaceholder",
    "ariaPosInSet",
    "ariaPressed",
    "ariaReadOnly",
    "ariaRequired",
    "ariaRoleDescription",
    "ariaRowCount",
    "ariaRowIndex",
    "ariaRowSpan",
    "ariaSelected",
    "ariaSetSize",
    "ariaSort",
    "ariaValueMax",
    "ariaValueMin",
    "ariaValueNow",
    "ariaValueText"
  ];
  var ARIA_ATTRIBUTES = ARIA_PROPERTIES.map(ariaPropertyToAttribute);
  function ariaPropertyToAttribute(property) {
    return property.replace("aria", "aria-").replace(/Elements?/g, "").toLowerCase();
  }

  // node_modules/@material/web/aria/delegate.js
  function requestUpdateOnAriaChange(ctor) {
    for (const ariaProperty of ARIA_PROPERTIES) {
      ctor.createProperty(ariaProperty, {
        attribute: ariaPropertyToAttribute(ariaProperty),
        reflect: true
      });
    }
    ctor.addInitializer((element) => {
      const controller = {
        hostConnected() {
          element.setAttribute("role", "presentation");
        }
      };
      element.addController(controller);
    });
  }

  // node_modules/@material/web/controller/is-rtl.js
  function isRtl(el, shouldCheck = true) {
    return shouldCheck && getComputedStyle(el).getPropertyValue("direction").trim() === "rtl";
  }

  // node_modules/@material/web/ripple/directive.js
  var RippleDirective = class extends i5 {
    constructor(partInfo) {
      super(partInfo);
      this.rippleGetter = async () => null;
      if (partInfo.type !== t4.ELEMENT) {
        throw new Error("The `ripple` directive must be used on an element");
      }
    }
    render(ripple2) {
      return T;
    }
    // Use EventListenerObject::handleEvent interface to handle events without
    // generating bound event handlers
    async handleEvent(event) {
      const ripple2 = await this.rippleGetter();
      if (!ripple2) {
        return;
      }
      switch (event.type) {
        case "click":
          ripple2.handleClick();
          break;
        case "contextmenu":
          ripple2.handleContextmenu();
          break;
        case "pointercancel":
          ripple2.handlePointercancel(event);
          break;
        case "pointerdown":
          await ripple2.handlePointerdown(event);
          break;
        case "pointerenter":
          ripple2.handlePointerenter(event);
          break;
        case "pointerleave":
          ripple2.handlePointerleave(event);
          break;
        case "pointerup":
          ripple2.handlePointerup(event);
          break;
        default:
          break;
      }
    }
    update(part, [ripple2]) {
      if (!this.element) {
        this.element = part.element;
        this.element.addEventListener("click", this);
        this.element.addEventListener("contextmenu", this);
        this.element.addEventListener("pointercancel", this);
        this.element.addEventListener("pointerdown", this);
        this.element.addEventListener("pointerenter", this);
        this.element.addEventListener("pointerleave", this);
        this.element.addEventListener("pointerup", this);
      }
      this.rippleGetter = typeof ripple2 === "function" ? ripple2 : () => ripple2;
      return T;
    }
  };
  var ripple = e8(RippleDirective);

  // node_modules/@material/web/iconbutton/lib/icon-button.js
  var _a;
  var IconButton = class extends s4 {
    constructor() {
      super(...arguments);
      this.disabled = false;
      this.flipIconInRtl = false;
      this.href = "";
      this.target = "";
      this.toggle = false;
      this.selected = false;
      this.showRipple = false;
      this.flipIcon = isRtl(this, this.flipIconInRtl);
      this.getRipple = () => {
        this.showRipple = true;
        return this.ripple;
      };
      this.renderRipple = () => {
        return x`<md-ripple ?disabled="${!this.href && this.disabled}"></md-ripple>`;
      };
    }
    /**
     * Link buttons cannot be disabled.
     */
    willUpdate() {
      if (this.href) {
        this.disabled = false;
      }
    }
    render() {
      const tag = this.href ? i6`div` : i6`button`;
      const { ariaLabel, ariaHasPopup, ariaExpanded } = this;
      const hasToggledAriaLabel = ariaLabel && this.selectedAriaLabel;
      const ariaPressedValue = hasToggledAriaLabel ? A : this.selected;
      let ariaLabelValue = A;
      if (!this.href) {
        ariaLabelValue = hasToggledAriaLabel && this.selected ? this.selectedAriaLabel : ariaLabel;
      }
      return n7`<${tag}
        class="icon-button ${o7(this.getRenderClasses())}"
        id="button"
        aria-label="${ariaLabelValue || A}"
        aria-haspopup="${!this.href && ariaHasPopup || A}"
        aria-expanded="${!this.href && ariaExpanded || A}"
        aria-pressed="${ariaPressedValue}"
        ?disabled="${!this.href && this.disabled}"
        @click="${this.handleClick}"
        ${ripple(this.getRipple)}>
        ${this.renderFocusRing()}
        ${n6(this.showRipple, this.renderRipple)}
        ${!this.selected ? this.renderIcon() : A}
        ${this.selected ? this.renderSelectedIcon() : A}
        ${this.renderTouchTarget()}
        ${this.href && this.renderLink()}
  </${tag}>`;
    }
    renderLink() {
      const { ariaLabel } = this;
      return x`
      <a class="link"
        id="link"
        href="${this.href}"
        target="${this.target || A}"
        aria-label="${ariaLabel || A}"
        ${ripple(this.getRipple)}
      ></a>
    `;
    }
    getRenderClasses() {
      return {
        "flip-icon": this.flipIcon,
        "selected": this.toggle && this.selected
      };
    }
    renderIcon() {
      return x`<span class="icon"><slot></slot></span>`;
    }
    renderSelectedIcon() {
      return x`<span class="icon icon--selected"><slot name="selectedIcon"><slot></slot></slot></span>`;
    }
    renderTouchTarget() {
      return x`<span class="touch"></span>`;
    }
    renderFocusRing() {
      return x`<md-focus-ring for=${this.href ? "link" : "button"}></md-focus-ring>`;
    }
    connectedCallback() {
      this.flipIcon = isRtl(this, this.flipIconInRtl);
      super.connectedCallback();
    }
    handleClick() {
      if (!this.toggle || this.disabled) {
        return;
      }
      this.selected = !this.selected;
      this.dispatchEvent(new InputEvent("input", { bubbles: true, composed: true }));
      this.dispatchEvent(new Event("change", { bubbles: true }));
    }
  };
  _a = IconButton;
  (() => {
    requestUpdateOnAriaChange(_a);
  })();
  __decorate([
    e2({ type: Boolean, reflect: true })
  ], IconButton.prototype, "disabled", void 0);
  __decorate([
    e2({ type: Boolean })
  ], IconButton.prototype, "flipIconInRtl", void 0);
  __decorate([
    e2()
  ], IconButton.prototype, "href", void 0);
  __decorate([
    e2()
  ], IconButton.prototype, "target", void 0);
  __decorate([
    e2({ attribute: "selected-aria-label", reflect: true })
  ], IconButton.prototype, "selectedAriaLabel", void 0);
  __decorate([
    e2({ type: Boolean })
  ], IconButton.prototype, "toggle", void 0);
  __decorate([
    e2({ type: Boolean, reflect: true })
  ], IconButton.prototype, "selected", void 0);
  __decorate([
    e3("md-ripple")
  ], IconButton.prototype, "ripple", void 0);
  __decorate([
    t()
  ], IconButton.prototype, "showRipple", void 0);
  __decorate([
    t()
  ], IconButton.prototype, "flipIcon", void 0);

  // node_modules/@material/web/iconbutton/lib/shared-styles.css.js
  var styles5 = i3`:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);height:var(--_container-size);width:var(--_container-size);justify-content:center;--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){pointer-events:none}.icon-button{align-items:center;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;justify-content:center;outline:none;position:relative;text-decoration:none;user-select:none;z-index:0;flex:1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.icon{height:var(--_icon-size);width:var(--_icon-size);--md-icon-size:var(--_icon-size);--md-icon-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.flip-icon .icon{transform:scaleX(-1)}.icon{display:inline-flex}.link{height:100%;outline:none;position:absolute;width:100%}.touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}/*# sourceMappingURL=shared-styles.css.map */
`;

  // node_modules/@material/web/iconbutton/filled-icon-button.js
  var MdFilledIconButton = class MdFilledIconButton2 extends IconButton {
    getRenderClasses() {
      return {
        ...super.getRenderClasses(),
        "filled": true,
        "toggle-filled": this.toggle
      };
    }
  };
  MdFilledIconButton.styles = [styles5, styles2];
  MdFilledIconButton = __decorate([
    e("md-filled-icon-button")
  ], MdFilledIconButton);

  // node_modules/@material/web/iconbutton/lib/filled-tonal-styles.css.js
  var styles6 = i3`:host{--_container-color: var(--md-filled-tonal-icon-button-container-color, var(--md-sys-color-secondary-container, #e8def8));--_container-shape: var(--md-filled-tonal-icon-button-container-shape, 9999px);--_container-size: var(--md-filled-tonal-icon-button-container-size, 40px);--_disabled-container-color: var(--md-filled-tonal-icon-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-tonal-icon-button-disabled-container-opacity, 0.12);--_disabled-icon-color: var(--md-filled-tonal-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-tonal-icon-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-tonal-icon-button-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_focus-state-layer-color: var(--md-filled-tonal-icon-button-focus-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_focus-state-layer-opacity: var(--md-filled-tonal-icon-button-focus-state-layer-opacity, 0.12);--_hover-icon-color: var(--md-filled-tonal-icon-button-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-color: var(--md-filled-tonal-icon-button-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-opacity: var(--md-filled-tonal-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-filled-tonal-icon-button-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-size: var(--md-filled-tonal-icon-button-icon-size, 24px);--_pressed-icon-color: var(--md-filled-tonal-icon-button-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-color: var(--md-filled-tonal-icon-button-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-opacity: var(--md-filled-tonal-icon-button-pressed-state-layer-opacity, 0.12);--_selected-container-color: var(--md-filled-tonal-icon-button-selected-container-color, var(--md-sys-color-secondary-container, #e8def8));--_toggle-selected-focus-icon-color: var(--md-filled-tonal-icon-button-toggle-selected-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_toggle-selected-focus-state-layer-color: var(--md-filled-tonal-icon-button-toggle-selected-focus-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_toggle-selected-hover-icon-color: var(--md-filled-tonal-icon-button-toggle-selected-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_toggle-selected-hover-state-layer-color: var(--md-filled-tonal-icon-button-toggle-selected-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_toggle-selected-icon-color: var(--md-filled-tonal-icon-button-toggle-selected-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_toggle-selected-pressed-icon-color: var(--md-filled-tonal-icon-button-toggle-selected-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_toggle-selected-pressed-state-layer-color: var(--md-filled-tonal-icon-button-toggle-selected-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_toggle-unselected-focus-icon-color: var(--md-filled-tonal-icon-button-toggle-unselected-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_toggle-unselected-focus-state-layer-color: var(--md-filled-tonal-icon-button-toggle-unselected-focus-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_toggle-unselected-hover-icon-color: var(--md-filled-tonal-icon-button-toggle-unselected-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_toggle-unselected-hover-state-layer-color: var(--md-filled-tonal-icon-button-toggle-unselected-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_toggle-unselected-icon-color: var(--md-filled-tonal-icon-button-toggle-unselected-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_toggle-unselected-pressed-icon-color: var(--md-filled-tonal-icon-button-toggle-unselected-pressed-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_toggle-unselected-pressed-state-layer-color: var(--md-filled-tonal-icon-button-toggle-unselected-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-container-color: var(--md-filled-tonal-icon-button-unselected-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_container-shape-start-start: var( --md-filled-tonal-icon-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-filled-tonal-icon-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-filled-tonal-icon-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-filled-tonal-icon-button-container-shape-end-start, var(--_container-shape) )}.icon-button{color:var(--_icon-color);--md-ripple-focus-color: var(--_focus-state-layer-color);--md-ripple-focus-opacity: var(--_focus-state-layer-opacity);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.icon-button:hover{color:var(--_hover-icon-color)}.icon-button:focus{color:var(--_focus-icon-color)}.icon-button:active{color:var(--_pressed-icon-color)}.icon-button:disabled{color:var(--_disabled-icon-color)}.icon-button::before{background-color:var(--_container-color);border-radius:inherit;content:"";inset:0;position:absolute;z-index:-1}.icon-button:disabled::before{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}.icon-button:disabled .icon{opacity:var(--_disabled-icon-opacity)}.toggle-filled-tonal{--md-ripple-focus-color: var(--_toggle-unselected-focus-state-layer-color);--md-ripple-hover-color: var(--_toggle-unselected-hover-state-layer-color);--md-ripple-pressed-color: var(--_toggle-unselected-pressed-state-layer-color)}.toggle-filled-tonal:not(:disabled){color:var(--_toggle-unselected-icon-color)}.toggle-filled-tonal:not(:disabled):hover{color:var(--_toggle-unselected-hover-icon-color)}.toggle-filled-tonal:not(:disabled):focus{color:var(--_toggle-unselected-focus-icon-color)}.toggle-filled-tonal:not(:disabled):active{color:var(--_toggle-unselected-pressed-icon-color)}.toggle-filled-tonal:not(:disabled)::before{background-color:var(--_unselected-container-color)}.selected{--md-ripple-focus-color: var(--_toggle-selected-focus-state-layer-color);--md-ripple-hover-color: var(--_toggle-selected-hover-state-layer-color);--md-ripple-pressed-color: var(--_toggle-selected-pressed-state-layer-color)}.selected:not(:disabled){color:var(--_toggle-selected-icon-color)}.selected:not(:disabled):hover{color:var(--_toggle-selected-hover-icon-color)}.selected:not(:disabled):focus{color:var(--_toggle-selected-focus-icon-color)}.selected:not(:disabled):active{color:var(--_toggle-selected-pressed-icon-color)}.selected:not(:disabled)::before{background-color:var(--_selected-container-color)}/*# sourceMappingURL=filled-tonal-styles.css.map */
`;

  // node_modules/@material/web/iconbutton/filled-tonal-icon-button.js
  var MdFilledTonalIconButton = class MdFilledTonalIconButton2 extends IconButton {
    getRenderClasses() {
      return {
        ...super.getRenderClasses(),
        "filled-tonal": true,
        "toggle-filled-tonal": this.toggle
      };
    }
  };
  MdFilledTonalIconButton.styles = [styles5, styles6];
  MdFilledTonalIconButton = __decorate([
    e("md-filled-tonal-icon-button")
  ], MdFilledTonalIconButton);

  // node_modules/@material/web/iconbutton/lib/outlined-styles.css.js
  var styles7 = i3`:host{--_container-shape: var(--md-outlined-icon-button-container-shape, 9999px);--_container-size: var(--md-outlined-icon-button-container-size, 40px);--_disabled-icon-color: var(--md-outlined-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-outlined-icon-button-disabled-icon-opacity, 0.38);--_disabled-selected-container-color: var(--md-outlined-icon-button-disabled-selected-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-selected-container-opacity: var(--md-outlined-icon-button-disabled-selected-container-opacity, 0.12);--_disabled-unselected-outline-color: var(--md-outlined-icon-button-disabled-unselected-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-unselected-outline-opacity: var(--md-outlined-icon-button-disabled-unselected-outline-opacity, 0.12);--_focus-state-layer-opacity: var(--md-outlined-icon-button-focus-state-layer-opacity, 0.08);--_hover-state-layer-opacity: var(--md-outlined-icon-button-hover-state-layer-opacity, 0.08);--_icon-size: var(--md-outlined-icon-button-icon-size, 24px);--_pressed-state-layer-opacity: var(--md-outlined-icon-button-pressed-state-layer-opacity, 0.12);--_selected-container-color: var(--md-outlined-icon-button-selected-container-color, var(--md-sys-color-inverse-surface, #322f35));--_selected-focus-icon-color: var(--md-outlined-icon-button-selected-focus-icon-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_selected-focus-state-layer-color: var(--md-outlined-icon-button-selected-focus-state-layer-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_selected-hover-icon-color: var(--md-outlined-icon-button-selected-hover-icon-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_selected-hover-state-layer-color: var(--md-outlined-icon-button-selected-hover-state-layer-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_selected-icon-color: var(--md-outlined-icon-button-selected-icon-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_selected-pressed-icon-color: var(--md-outlined-icon-button-selected-pressed-icon-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_selected-pressed-state-layer-color: var(--md-outlined-icon-button-selected-pressed-state-layer-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_unselected-focus-icon-color: var(--md-outlined-icon-button-unselected-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-focus-state-layer-color: var(--md-outlined-icon-button-unselected-focus-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-hover-icon-color: var(--md-outlined-icon-button-unselected-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-hover-state-layer-color: var(--md-outlined-icon-button-unselected-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-icon-color: var(--md-outlined-icon-button-unselected-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-outline-color: var(--md-outlined-icon-button-unselected-outline-color, var(--md-sys-color-outline, #79747e));--_unselected-outline-width: var(--md-outlined-icon-button-unselected-outline-width, 1px);--_unselected-pressed-icon-color: var(--md-outlined-icon-button-unselected-pressed-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_unselected-pressed-state-layer-color: var(--md-outlined-icon-button-unselected-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_container-shape-start-start: var( --md-outlined-icon-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-outlined-icon-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-outlined-icon-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-outlined-icon-button-container-shape-end-start, var(--_container-shape) )}.outlined{background-color:rgba(0,0,0,0);color:var(--_unselected-icon-color);--md-ripple-focus-color: var(--_unselected-focus-state-layer-color);--md-ripple-focus-opacity: var(--_focus-state-layer-opacity);--md-ripple-hover-color: var(--_unselected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_unselected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.outlined::before{border-color:var(--_unselected-outline-color);border-width:var(--_unselected-outline-width)}.outlined:hover{color:var(--_unselected-hover-icon-color)}.outlined:focus{color:var(--_unselected-focus-icon-color)}.outlined:active{color:var(--_unselected-pressed-icon-color)}.outlined:disabled{color:var(--_disabled-icon-color)}.outlined:disabled::before{border-color:var(--_disabled-unselected-outline-color);opacity:var(--_disabled-unselected-outline-opacity)}.outlined:disabled .icon{opacity:var(--_disabled-icon-opacity)}.outlined::before{block-size:100%;border-style:solid;border-radius:inherit;box-sizing:border-box;content:"";inline-size:100%;inset:0;pointer-events:none;position:absolute;z-index:-1}.outlined.selected::before{border-width:0}.selected{--md-ripple-focus-color: var(--_selected-focus-state-layer-color);--md-ripple-focus-opacity: var(--_focus-state-layer-opacity);--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.selected:not(:disabled){color:var(--_selected-icon-color)}.selected:not(:disabled):hover{color:var(--_selected-hover-icon-color)}.selected:not(:disabled):focus{color:var(--_selected-focus-icon-color)}.selected:not(:disabled):active{color:var(--_selected-pressed-icon-color)}.selected:not(:disabled)::before{background-color:var(--_selected-container-color)}.selected:disabled::before{background-color:var(--_disabled-selected-container-color);opacity:var(--_disabled-selected-container-opacity)}@media(forced-colors: active){.selected::before{border-color:var(--_unselected-outline-color);border-width:var(--_unselected-outline-width)}.selected:disabled::before{border-color:var(--_disabled-unselected-outline-color);opacity:var(--_disabled-unselected-outline-opacity)}}/*# sourceMappingURL=outlined-styles.css.map */
`;

  // node_modules/@material/web/iconbutton/outlined-icon-button.js
  var MdOutlinedIconButton = class MdOutlinedIconButton2 extends IconButton {
    getRenderClasses() {
      return {
        ...super.getRenderClasses(),
        "outlined": true
      };
    }
  };
  MdOutlinedIconButton.styles = [styles5, styles7];
  MdOutlinedIconButton = __decorate([
    e("md-outlined-icon-button")
  ], MdOutlinedIconButton);

  // node_modules/@material/web/elevation/lib/elevation.js
  var Elevation = class extends s4 {
    render() {
      return x`<span class="shadow"></span>`;
    }
  };

  // node_modules/@material/web/elevation/lib/elevation-styles.css.js
  var styles8 = i3`:host{--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000));display:flex;pointer-events:none}:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-timing-function:inherit}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}/*# sourceMappingURL=elevation-styles.css.map */
`;

  // node_modules/@material/web/elevation/elevation.js
  var MdElevation = class MdElevation2 extends Elevation {
  };
  MdElevation.styles = [styles8];
  MdElevation = __decorate([
    e("md-elevation")
  ], MdElevation);

  // node_modules/@material/web/navigationdrawer/lib/navigation-drawer.js
  var _a2;
  var NavigationDrawer = class extends s4 {
    constructor() {
      super(...arguments);
      this.opened = false;
      this.pivot = "end";
    }
    render() {
      const ariaExpanded = this.opened ? "true" : "false";
      const ariaHidden = !this.opened ? "true" : "false";
      const { ariaLabel, ariaModal } = this;
      return x`
      <div
        aria-expanded="${ariaExpanded}"
        aria-hidden="${ariaHidden}"
        aria-label=${ariaLabel || A}
        aria-modal="${ariaModal || A}"
        class="md3-navigation-drawer ${this.getRenderClasses()}"
        role="dialog">
        <md-elevation></md-elevation>
        <div class="md3-navigation-drawer__slot-content">
          <slot></slot>
        </div>
      </div>
    `;
    }
    getRenderClasses() {
      return o7({
        "md3-navigation-drawer--opened": this.opened,
        "md3-navigation-drawer--pivot-at-start": this.pivot === "start"
      });
    }
    updated(changedProperties) {
      if (changedProperties.has("opened")) {
        setTimeout(() => {
          this.dispatchEvent(new CustomEvent("navigation-drawer-changed", { detail: { opened: this.opened }, bubbles: true, composed: true }));
        }, 250);
      }
    }
  };
  _a2 = NavigationDrawer;
  (() => {
    requestUpdateOnAriaChange(_a2);
  })();
  __decorate([
    e2({ type: Boolean })
  ], NavigationDrawer.prototype, "opened", void 0);
  __decorate([
    e2()
  ], NavigationDrawer.prototype, "pivot", void 0);

  // node_modules/@material/web/navigationdrawer/lib/navigation-drawer-styles.css.js
  var styles9 = i3`:host{--_container-color: var(--md-navigation-drawer-container-color, #fff);--_container-height: var(--md-navigation-drawer-container-height, 100%);--_container-shape: var(--md-navigation-drawer-container-shape, 0 16px 16px 0);--_container-width: var(--md-navigation-drawer-container-width, 360px);--_divider-color: var(--md-navigation-drawer-divider-color, #000);--_modal-container-elevation: var(--md-navigation-drawer-modal-container-elevation, 1);--_standard-container-elevation: var(--md-navigation-drawer-standard-container-elevation, 0);--md-elevation-level:var(--_standard-container-elevation);--md-elevation-shadow-color:var(--_divider-color)}:host{display:flex}.md3-navigation-drawer{inline-size:0;box-sizing:border-box;display:flex;justify-content:flex-end;overflow:hidden;overflow-y:auto;visibility:hidden;transition:inline-size .25s cubic-bezier(0.4, 0, 0.2, 1) 0s,visibility 0s cubic-bezier(0.4, 0, 0.2, 1) .25s}md-elevation{z-index:0}.md3-navigation-drawer--opened{visibility:visible;transition:inline-size .25s cubic-bezier(0.4, 0, 0.2, 1) 0s,visibility 0s cubic-bezier(0.4, 0, 0.2, 1) 0s}.md3-navigation-drawer--pivot-at-start{justify-content:flex-start}.md3-navigation-drawer__slot-content{display:flex;flex-direction:column;position:relative}/*# sourceMappingURL=navigation-drawer-styles.css.map */
`;

  // node_modules/@material/web/navigationdrawer/lib/shared-styles.css.js
  var styles10 = i3`.md3-navigation-drawer-modal{background-color:var(--_container-color);border-radius:var(--_container-shape);height:var(--_container-height)}.md3-navigation-drawer-modal.md3-navigation-drawer-modal--opened{inline-size:var(--_container-width)}.md3-navigation-drawer-modal .md3-navigation-drawer-modal__slot-content{min-inline-size:var(--_container-width);max-inline-size:var(--_container-width)}/*# sourceMappingURL=shared-styles.css.map */
`;

  // node_modules/@material/web/navigationdrawer/navigation-drawer.js
  var MdNavigationDrawer = class MdNavigationDrawer2 extends NavigationDrawer {
  };
  MdNavigationDrawer.styles = [styles10, styles9];
  MdNavigationDrawer = __decorate([
    e("md-navigation-drawer")
  ], MdNavigationDrawer);

  // node_modules/@material/web/navigationdrawer/lib/navigation-drawer-modal.js
  var _a3;
  var NavigationDrawerModal = class extends s4 {
    constructor() {
      super(...arguments);
      this.opened = false;
      this.pivot = "end";
    }
    render() {
      const ariaExpanded = this.opened ? "true" : "false";
      const ariaHidden = !this.opened ? "true" : "false";
      const { ariaLabel, ariaModal } = this;
      return x`
      <div
        class="md3-navigation-drawer-modal__scrim ${this.getScrimClasses()}"
        @click="${this.handleScrimClick}">
      </div>
      <div
        aria-expanded=${ariaExpanded}
        aria-hidden=${ariaHidden}
        aria-label=${ariaLabel || A}
        aria-modal=${ariaModal || A}
        class="md3-navigation-drawer-modal ${this.getRenderClasses()}"
        @keydown="${this.handleKeyDown}"
        role="dialog"><div class="md3-elevation-overlay"
        ></div>
        <div class="md3-navigation-drawer-modal__slot-content">
          <slot></slot>
        </div>
      </div>
    `;
    }
    getScrimClasses() {
      return o7({
        "md3-navigation-drawer-modal--scrim-visible": this.opened
      });
    }
    getRenderClasses() {
      return o7({
        "md3-navigation-drawer-modal--opened": this.opened,
        "md3-navigation-drawer-modal--pivot-at-start": this.pivot === "start"
      });
    }
    updated(changedProperties) {
      if (changedProperties.has("opened")) {
        setTimeout(() => {
          this.dispatchEvent(new CustomEvent("navigation-drawer-changed", { detail: { opened: this.opened }, bubbles: true, composed: true }));
        }, 250);
      }
    }
    handleKeyDown(e10) {
      if (e10.code === "Escape") {
        this.opened = false;
      }
    }
    handleScrimClick() {
      this.opened = !this.opened;
    }
  };
  _a3 = NavigationDrawerModal;
  (() => {
    requestUpdateOnAriaChange(_a3);
  })();
  __decorate([
    e2({ type: Boolean })
  ], NavigationDrawerModal.prototype, "opened", void 0);
  __decorate([
    e2()
  ], NavigationDrawerModal.prototype, "pivot", void 0);

  // node_modules/@material/web/navigationdrawer/lib/navigation-drawer-modal-styles.css.js
  var styles11 = i3`:host{--_container-color: var(--md-navigation-drawer-modal-container-color, #fff);--_container-height: var(--md-navigation-drawer-modal-container-height, 100%);--_container-shape: var(--md-navigation-drawer-modal-container-shape, 0 16px 16px 0);--_container-width: var(--md-navigation-drawer-modal-container-width, 360px);--_divider-color: var(--md-navigation-drawer-modal-divider-color, #000);--_modal-container-elevation: var(--md-navigation-drawer-modal-modal-container-elevation, 1);--_scrim-color: ;--_scrim-opacity: var(--md-navigation-drawer-modal-scrim-opacity, 0.04);--_standard-container-elevation: var(--md-navigation-drawer-modal-standard-container-elevation, 0);--md-elevation-level:var(--_modal-container-elevation)}.md3-navigation-drawer-modal{bottom:0;box-sizing:border-box;display:flex;justify-content:flex-end;overflow:hidden;position:absolute;top:0;inline-size:0;transition:inline-size .25s cubic-bezier(0.4, 0, 0.2, 1) 0s,visibility 0s cubic-bezier(0.4, 0, 0.2, 1) .25s}.md3-navigation-drawer-modal--opened{transition:inline-size .25s cubic-bezier(0.4, 0, 0.2, 1) 0s,visibility 0s cubic-bezier(0.4, 0, 0.2, 1) 0s}.md3-navigation-drawer-modal--pivot-at-start{justify-content:flex-start}.md3-navigation-drawer-modal__slot-content{display:flex;flex-direction:column;position:relative}.md3-navigation-drawer-modal__scrim{inset:0;opacity:0;position:absolute;visibility:hidden;background-color:var(--_scrim-color);transition:opacity .25s cubic-bezier(0.4, 0, 0.2, 1) 0s,visibility 0s cubic-bezier(0.4, 0, 0.2, 1) .25s}.md3-navigation-drawer-modal--scrim-visible{visibility:visible;opacity:var(--_scrim-opacity);transition:opacity .25s cubic-bezier(0.4, 0, 0.2, 1) 0s,visibility 0s cubic-bezier(0.4, 0, 0.2, 1) 0s}/*# sourceMappingURL=navigation-drawer-modal-styles.css.map */
`;

  // node_modules/@material/web/navigationdrawer/navigation-drawer-modal.js
  var MdNavigationDrawerModal = class MdNavigationDrawerModal2 extends NavigationDrawerModal {
  };
  MdNavigationDrawerModal.styles = [styles10, styles11];
  MdNavigationDrawerModal = __decorate([
    e("md-navigation-drawer-modal")
  ], MdNavigationDrawerModal);

  // node_modules/@material/web/iconbutton/lib/standard-styles.css.js
  var styles12 = i3`:host{--_disabled-icon-color: var(--md-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-icon-button-disabled-icon-opacity, 0.38);--_icon-size: var(--md-icon-button-icon-size, 24px);--_selected-focus-icon-color: var(--md-icon-button-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-focus-state-layer-color: var(--md-icon-button-selected-focus-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-focus-state-layer-opacity: var(--md-icon-button-selected-focus-state-layer-opacity, 0.12);--_selected-hover-icon-color: var(--md-icon-button-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-color: var(--md-icon-button-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-icon-button-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-icon-button-selected-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-icon-button-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-color: var(--md-icon-button-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-opacity: var(--md-icon-button-selected-pressed-state-layer-opacity, 0.12);--_state-layer-shape: var(--md-icon-button-state-layer-shape, 9999px);--_state-layer-size: var(--md-icon-button-state-layer-size, 40px);--_unselected-focus-icon-color: var(--md-icon-button-unselected-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-focus-state-layer-color: var(--md-icon-button-unselected-focus-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-focus-state-layer-opacity: var(--md-icon-button-unselected-focus-state-layer-opacity, 0.12);--_unselected-hover-icon-color: var(--md-icon-button-unselected-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-hover-state-layer-color: var(--md-icon-button-unselected-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-hover-state-layer-opacity: var(--md-icon-button-unselected-hover-state-layer-opacity, 0.08);--_unselected-icon-color: var(--md-icon-button-unselected-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-pressed-icon-color: var(--md-icon-button-unselected-pressed-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-pressed-state-layer-color: var(--md-icon-button-unselected-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-pressed-state-layer-opacity: var(--md-icon-button-unselected-pressed-state-layer-opacity, 0.12);height:var(--_state-layer-size);width:var(--_state-layer-size);--md-focus-ring-shape: var(--_state-layer-shape)}.standard{background-color:rgba(0,0,0,0);color:var(--_unselected-icon-color);--md-ripple-focus-color: var(--_unselected-focus-state-layer-color);--md-ripple-focus-opacity: var(--_unselected-focus-state-layer-opacity);--md-ripple-hover-color: var(--_unselected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_unselected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_unselected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_unselected-pressed-state-layer-opacity)}.standard:hover{color:var(--_unselected-hover-icon-color)}.standard:focus{color:var(--_unselected-focus-icon-color)}.standard:active{color:var(--_unselected-pressed-icon-color)}.standard:disabled{color:var(--_disabled-icon-color)}md-ripple{border-radius:var(--_state-layer-shape)}.standard:disabled .icon{opacity:var(--_disabled-icon-opacity)}.selected{--md-ripple-focus-color: var(--_selected-focus-state-layer-color);--md-ripple-focus-opacity: var(--_selected-focus-state-layer-opacity);--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}.selected:not(:disabled){color:var(--_selected-icon-color)}.selected:not(:disabled):hover{color:var(--_selected-hover-icon-color)}.selected:not(:disabled):focus{color:var(--_selected-focus-icon-color)}.selected:not(:disabled):active{color:var(--_selected-pressed-icon-color)}/*# sourceMappingURL=standard-styles.css.map */
`;

  // node_modules/@material/web/iconbutton/standard-icon-button.js
  var MdStandardIconButton = class MdStandardIconButton2 extends IconButton {
    getRenderClasses() {
      return {
        ...super.getRenderClasses(),
        "standard": true
      };
    }
  };
  MdStandardIconButton.styles = [styles5, styles12];
  MdStandardIconButton = __decorate([
    e("md-standard-icon-button")
  ], MdStandardIconButton);

  // src/OptionalShiny.ts
  var Shiny = window.Shiny;

  // src/make_input_binding.ts
  function make_input_binding(tag_name) {
    if (!Shiny) {
      return;
    }
    class NewNumberBinding extends Shiny.InputBinding {
      constructor() {
        super();
      }
      find(scope) {
        return $(scope).find(tag_name);
      }
      getId(el) {
        return el.id;
      }
      getValue(el) {
        return el.value;
      }
      subscribe(el, callback) {
        el.onChangeCallback = callback;
      }
      unsubscribe(el) {
        el.onChangeCallback = (x2) => {
        };
      }
    }
    Shiny.inputBindings.register(new NewNumberBinding(), `${tag_name}-Binding`);
  }

  // src/make_value_change_emitter.ts
  var Data_Passing_Event_ID = "shiny-data-passing-event";
  function make_data_passing_payload(id, msg) {
    return { ...msg, id };
  }
  function make_value_change_emitter(el, id) {
    return (payload) => {
      const event = new CustomEvent(Data_Passing_Event_ID, {
        detail: make_data_passing_payload(id, payload),
        bubbles: true
      });
      el.dispatchEvent(event);
    };
  }

  // src/m3/m3-iconbutton.ts
  var M3StandardIconButton = class extends MdStandardIconButton {
    constructor() {
      super();
      this.on_value_change = make_value_change_emitter(this, this.id);
      this.onChangeCallback = (x2) => {
      };
    }
    // myHandleChange(e: Event): void {
    //   this.onChangeCallback(true);
    //   this.on_value_change({ type: "number", value: this.value });
    // }
  };
  customElements.define("m3-standard-icon-button", M3StandardIconButton);
  make_input_binding("m3-standard-icon-button");

  // node_modules/@material/web/slider/lib/forced-colors-styles.css.js
  var styles13 = i3`@media(forced-colors: active){:host{--md-slider-active-track-color:CanvasText;--md-slider-disabled-active-track-color:GrayText;--md-slider-disabled-active-track-opacity:1;--md-slider-disabled-handle-color:GrayText;--md-slider-disabled-inactive-track-color:GrayText;--md-slider-disabled-inactive-track-opacity:1;--md-slider-focus-handle-color:CanvasText;--md-slider-handle-color:CanvasText;--md-slider-handle-shadow-color:Canvas;--md-slider-hover-handle-color:CanvasText;--md-slider-hover-state-layer-color:Canvas;--md-slider-hover-state-layer-opacity:1;--md-slider-inactive-track-color:Canvas;--md-slider-label-container-color:Canvas;--md-slider-label-label-text-color:CanvasText;--md-slider-pressed-handle-color:CanvasText;--md-slider-pressed-state-layer-color:Canvas;--md-slider-pressed-state-layer-opacity:1;--md-slider-with-overlap-handle-outline-color:CanvasText;--md-slider-with-tick-marks-active-container-color:Canvas;--md-slider-with-tick-marks-disabled-container-color:GrayText;--md-slider-with-tick-marks-inactive-container-color:CanvasText}.label,.label::before{border:var(--_with-overlap-handle-outline-color) solid var(--_with-overlap-handle-outline-width)}:host(:not([disabled])) .track::before{border:1px solid var(--_active-track-color)}}/*# sourceMappingURL=forced-colors-styles.css.map */
`;

  // node_modules/lit-html/directives/style-map.js
  var i7 = "important";
  var n8 = " !" + i7;
  var o8 = e8(class extends i5 {
    constructor(t5) {
      var e10;
      if (super(t5), t5.type !== t4.ATTRIBUTE || "style" !== t5.name || (null === (e10 = t5.strings) || void 0 === e10 ? void 0 : e10.length) > 2)
        throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
    }
    render(t5) {
      return Object.keys(t5).reduce((e10, r4) => {
        const s6 = t5[r4];
        return null == s6 ? e10 : e10 + `${r4 = r4.includes("-") ? r4 : r4.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${s6};`;
      }, "");
    }
    update(e10, [r4]) {
      const { style: s6 } = e10.element;
      if (void 0 === this.ut) {
        this.ut = /* @__PURE__ */ new Set();
        for (const t5 in r4)
          this.ut.add(t5);
        return this.render(r4);
      }
      this.ut.forEach((t5) => {
        null == r4[t5] && (this.ut.delete(t5), t5.includes("-") ? s6.removeProperty(t5) : s6[t5] = "");
      });
      for (const t5 in r4) {
        const e11 = r4[t5];
        if (null != e11) {
          this.ut.add(t5);
          const r5 = "string" == typeof e11 && e11.endsWith(n8);
          t5.includes("-") || r5 ? s6.setProperty(t5, r5 ? e11.slice(0, -11) : e11, r5 ? i7 : "") : s6[t5] = e11;
        }
      }
      return T;
    }
  });

  // node_modules/@material/web/controller/events.js
  function redispatchEvent(element, event) {
    if (event.bubbles && (!element.shadowRoot || event.composed)) {
      event.stopPropagation();
    }
    const copy = Reflect.construct(event.constructor, [event.type, event]);
    const dispatched = element.dispatchEvent(copy);
    if (!dispatched) {
      event.preventDefault();
    }
    return dispatched;
  }
  function dispatchActivationClick(element) {
    const event = new MouseEvent("click", { bubbles: true });
    element.dispatchEvent(event);
    return event;
  }
  function isActivationClick(event) {
    if (event.currentTarget !== event.target) {
      return false;
    }
    if (event.composedPath()[0] !== event.target) {
      return false;
    }
    if (event.target.disabled) {
      return false;
    }
    return !squelchEvent(event);
  }
  function squelchEvent(event) {
    const squelched = isSquelchingEvents;
    if (squelched) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
    squelchEventsForMicrotask();
    return squelched;
  }
  var isSquelchingEvents = false;
  async function squelchEventsForMicrotask() {
    isSquelchingEvents = true;
    await null;
    isSquelchingEvents = false;
  }

  // node_modules/@material/web/controller/form-controller.js
  var getFormValue = Symbol("getFormValue");
  var FormController = class {
    /**
     * Creates a new `FormController` for the given element.
     *
     * @param element The element to add `<form>` support to.
     */
    constructor(element) {
      this.element = element;
      this.formDataListener = (event) => {
        if (this.element.disabled) {
          return;
        }
        const value = this.element[getFormValue]();
        if (value instanceof FormData) {
          for (const [key, dataValue] of value) {
            event.formData.append(key, dataValue);
          }
          return;
        }
        if (value === null || !this.element.name) {
          return;
        }
        event.formData.append(this.element.name, value);
      };
    }
    hostConnected() {
      if (!this.element.shadowRoot || window.ShadyDOM?.inUse) {
        return;
      }
      this.form = this.element.form;
      this.form?.addEventListener("formdata", this.formDataListener);
    }
    hostDisconnected() {
      this.form?.removeEventListener("formdata", this.formDataListener);
    }
  };

  // node_modules/@material/web/controller/string-converter.js
  var stringConverter = {
    fromAttribute(value) {
      return value ?? "";
    },
    toAttribute(value) {
      return value || null;
    }
  };

  // node_modules/@material/web/slider/lib/slider.js
  var _a4;
  function inBounds({ x: x2, y: y2 }, element) {
    if (!element) {
      return false;
    }
    const { top, left, bottom, right } = element.getBoundingClientRect();
    return x2 >= left && x2 <= right && y2 >= top && y2 <= bottom;
  }
  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }
  function isOverlapping(elA, elB) {
    if (!(elA && elB)) {
      return false;
    }
    const a4 = elA.getBoundingClientRect();
    const b2 = elB.getBoundingClientRect();
    return !(a4.top > b2.bottom || a4.right < b2.left || a4.bottom < b2.top || a4.left > b2.right);
  }
  var Slider = class extends s4 {
    /** @nocollapse */
    static get formAssociated() {
      return true;
    }
    /**
     * The associated form element with which this element's value will submit.
     */
    get form() {
      return this.closest("form");
    }
    getMetrics() {
      const step = Math.max(this.step, 1);
      const range = Math.max(this.max - this.min, step);
      const lower = Math.min(this.valueA, this.valueB);
      const upper = Math.max(this.valueA, this.valueB);
      const lowerFraction = (lower - this.min) / range;
      const upperFraction = (upper - this.min) / range;
      return {
        step,
        range,
        lower,
        upper,
        lowerFraction,
        upperFraction
      };
    }
    constructor() {
      super();
      this.disabled = false;
      this.min = 0;
      this.max = 100;
      this.value = 50;
      this.valueStart = 25;
      this.valueEnd = 75;
      this.step = 1;
      this.withTickMarks = false;
      this.withLabel = false;
      this.range = false;
      this.name = "";
      this.valueA = 0;
      this.valueB = 0;
      this.rippleAShowing = false;
      this.rippleBShowing = false;
      this.handleAHover = false;
      this.handleBHover = false;
      this.onTopId = "b";
      this.handlesOverlapping = false;
      this.renderRipple = (id) => x`<md-ripple class=${id} ?disabled=${this.disabled} unbounded></md-ripple>`;
      this.getRippleA = () => {
        if (!this.handleAHover) {
          return null;
        }
        this.rippleAShowing = true;
        return this.rippleA;
      };
      this.getRippleB = () => {
        if (!this.handleBHover) {
          return null;
        }
        this.rippleBShowing = true;
        return this.rippleB;
      };
      this.ripplePointerId = 1;
      this.addController(new FormController(this));
      if (!o6) {
        this.addEventListener("click", (event) => {
          if (!isActivationClick(event) || !this.inputB) {
            return;
          }
          this.focus();
          dispatchActivationClick(this.inputB);
        });
      }
    }
    focus() {
      this.inputB?.focus();
    }
    // value coerced to a string
    [getFormValue]() {
      return this.range ? `${this.valueStart}, ${this.valueEnd}` : `${this.value}`;
    }
    // indicates input values are crossed over each other from initial rendering.
    isFlipped() {
      return this.valueA > this.valueB;
    }
    willUpdate(changed) {
      const step = Math.max(this.step, 1);
      let lower = this.range ? this.valueStart : this.min;
      lower = clamp(lower - lower % step, this.min, this.max);
      let upper = this.range ? this.valueEnd : this.value;
      upper = clamp(upper - upper % step, this.min, this.max);
      const isFlipped = this.isFlipped() && this.range;
      this.valueA = isFlipped ? upper : lower;
      this.valueB = isFlipped ? lower : upper;
      if (changed.get("handleAHover") !== void 0) {
        this.rippleAShowing = true;
        this.toggleRippleHover(this.rippleA, this.handleAHover);
      } else if (changed.get("handleBHover") !== void 0) {
        this.rippleBShowing = true;
        this.toggleRippleHover(this.rippleB, this.handleBHover);
      }
    }
    async updated(changed) {
      if (changed.has("range") || changed.has("valueA") || changed.has("valueB")) {
        await this.updateComplete;
        this.handlesOverlapping = isOverlapping(this.handleA, this.handleB);
      }
    }
    render() {
      const { step, range, lowerFraction, upperFraction } = this.getMetrics();
      const isFlipped = this.isFlipped();
      const containerStyles = {
        // for clipping inputs and active track.
        "--slider-lower-fraction": String(lowerFraction),
        "--slider-upper-fraction": String(upperFraction),
        // for generating tick marks
        "--slider-tick-count": String(range / step)
      };
      const containerClasses = { ranged: this.range };
      let labelA = String(this.valueA);
      let labelB = String(this.valueB);
      if (this.range) {
        const a4 = isFlipped ? this.valueEndLabel : this.valueStartLabel;
        const b2 = isFlipped ? this.valueStartLabel : this.valueEndLabel;
        labelA = a4 ?? labelA;
        labelB = b2 ?? labelB;
      } else {
        labelB = this.valueLabel ?? labelB;
      }
      const inputAProps = {
        id: "a",
        lesser: !isFlipped,
        value: this.valueA,
        label: labelA,
        getRipple: this.getRippleA
      };
      const inputBProps = {
        id: "b",
        lesser: isFlipped,
        value: this.valueB,
        label: labelB,
        getRipple: this.getRippleB
      };
      const handleAProps = {
        id: "a",
        lesser: !isFlipped,
        showRipple: this.rippleAShowing,
        hover: this.handleAHover,
        label: labelA
      };
      const handleBProps = {
        id: "b",
        lesser: isFlipped,
        showRipple: this.rippleBShowing,
        hover: this.handleBHover,
        label: labelB
      };
      const handleContainerClasses = {
        hover: this.handleAHover || this.handleBHover
      };
      return x`
      <div
        class="container ${o7(containerClasses)}"
        style=${o8(containerStyles)}
      >
        ${n6(this.range, () => this.renderInput(inputAProps))}
        ${this.renderInput(inputBProps)}
        ${this.renderTrack()}
        <div class="handleContainerPadded">
          <div class="handleContainerBlock">
            <div class="handleContainer ${o7(handleContainerClasses)}">
              ${n6(this.range, () => this.renderHandle(handleAProps))}
              ${this.renderHandle(handleBProps)}
            </div>
          </div>
        </div>
      </div>`;
    }
    renderTrack() {
      const trackClasses = { "tickMarks": this.withTickMarks };
      return x`<div class="track ${o7(trackClasses)}"></div>`;
    }
    renderLabel(value) {
      return x`<div class="label">
        <span class="labelContent" part="label">${value}</span>
      </div>`;
    }
    renderHandle({ id, lesser, showRipple, hover, label }) {
      const onTop = !this.disabled && id === this.onTopId;
      const isOverlapping2 = !this.disabled && this.handlesOverlapping;
      return x`<div class="handle ${o7({
        [id]: true,
        lesser,
        hover,
        onTop,
        isOverlapping: isOverlapping2
      })}">
        <div class="handleNub"><md-elevation></md-elevation></div>
        ${n6(this.withLabel, () => this.renderLabel(label))}
      ${n6(showRipple, () => this.renderRipple(id))}
      <md-focus-ring for=${id}></md-focus-ring>
    </div>`;
    }
    renderInput({ id, lesser, value, label, getRipple }) {
      const ariaLabelDescriptor = this.range ? ` - ${lesser ? `start` : `end`} handle` : "";
      const { ariaLabel } = this;
      return x`<input type="range"
      class="${o7({
        lesser,
        [id]: true
      })}"
      @focus=${this.handleFocus}
      @pointerdown=${this.handleDown}
      @pointerenter=${this.handleEnter}
      @pointermove=${this.handleMove}
      @pointerleave=${this.handleLeave}
      @input=${this.handleInput}
      @change=${this.handleChange}
      id=${id}
      .disabled=${this.disabled}
      .min=${String(this.min)}
      .max=${String(this.max)}
      .step=${String(this.step)}
      .value=${String(value)}
      .tabIndex=${lesser ? 1 : 0}
      aria-label=${`${ariaLabel}${ariaLabelDescriptor}` || A}
      aria-valuetext=${label}
      ${ripple(getRipple)}>`;
    }
    async toggleRippleHover(ripple2, hovering) {
      const rippleEl = await ripple2;
      if (!rippleEl) {
        return;
      }
      if (hovering) {
        rippleEl.handlePointerenter(new PointerEvent("pointerenter", { isPrimary: true, pointerId: this.ripplePointerId }));
      } else {
        rippleEl.handlePointerleave(new PointerEvent("pointerleave", { isPrimary: true, pointerId: this.ripplePointerId }));
      }
    }
    isEventOnA({ target }) {
      return target === this.inputA;
    }
    handleFocus(e10) {
      this.updateOnTop(e10);
    }
    handleDown(e10) {
      this.ripplePointerId = e10.pointerId;
      const isA = this.isEventOnA(e10);
      this.handleAHover = !this.disabled && isA && Boolean(this.handleA);
      this.handleBHover = !this.disabled && !isA && Boolean(this.handleB);
      const target = e10.target;
      requestAnimationFrame(() => {
        target.focus();
      });
    }
    /**
     * The move handler tracks handle hovering to facilitate proper ripple
     * behavior on the slider handle. This is needed because user interaction with
     * the native input is leveraged to position the handle. Because the separate
     * displayed handle element has pointer events disabled (to allow interaction
     * with the input) and the input's handle is a pseudo-element, neither can be
     * the ripple's interactive element. Therefore the input is the ripple's
     * interactive element and has a `ripple` directive; however the ripple
     * is gated on the handle being hovered. In addition, because the ripple
     * hover state is being specially handled, it must be triggered independent
     * of the directive. This is done based on the hover state when the
     * slider is updated.
     */
    handleMove(e10) {
      this.handleAHover = !this.disabled && inBounds(e10, this.handleA);
      this.handleBHover = !this.disabled && inBounds(e10, this.handleB);
    }
    handleEnter(e10) {
      this.handleMove(e10);
    }
    handleLeave() {
      this.handleAHover = false;
      this.handleBHover = false;
    }
    updateOnTop(e10) {
      this.onTopId = e10.target.classList.contains("a") ? "a" : "b";
    }
    handleInput(e10) {
      if (this.inputA) {
        this.valueA = this.inputA.valueAsNumber ?? 0;
      }
      this.valueB = this.inputB.valueAsNumber;
      this.updateOnTop(e10);
      const lower = Math.min(this.valueA, this.valueB);
      const upper = Math.max(this.valueA, this.valueB);
      if (this.range) {
        this.valueStart = lower;
        this.valueEnd = upper;
      } else {
        this.value = this.valueB;
      }
    }
    handleChange(event) {
      redispatchEvent(this, event);
    }
  };
  _a4 = Slider;
  (() => {
    requestUpdateOnAriaChange(_a4);
  })();
  Slider.shadowRootOptions = { ...s4.shadowRootOptions, delegatesFocus: true };
  __decorate([
    e2({ type: Boolean, reflect: true })
  ], Slider.prototype, "disabled", void 0);
  __decorate([
    e2({ type: Number })
  ], Slider.prototype, "min", void 0);
  __decorate([
    e2({ type: Number })
  ], Slider.prototype, "max", void 0);
  __decorate([
    e2({ type: Number })
  ], Slider.prototype, "value", void 0);
  __decorate([
    e2({ type: Number })
  ], Slider.prototype, "valueStart", void 0);
  __decorate([
    e2({ type: Number })
  ], Slider.prototype, "valueEnd", void 0);
  __decorate([
    e2()
  ], Slider.prototype, "valueLabel", void 0);
  __decorate([
    e2()
  ], Slider.prototype, "valueStartLabel", void 0);
  __decorate([
    e2()
  ], Slider.prototype, "valueEndLabel", void 0);
  __decorate([
    e2({ type: Number })
  ], Slider.prototype, "step", void 0);
  __decorate([
    e2({ type: Boolean })
  ], Slider.prototype, "withTickMarks", void 0);
  __decorate([
    e2({ type: Boolean })
  ], Slider.prototype, "withLabel", void 0);
  __decorate([
    e2({ type: Boolean })
  ], Slider.prototype, "range", void 0);
  __decorate([
    e2({ reflect: true, converter: stringConverter })
  ], Slider.prototype, "name", void 0);
  __decorate([
    i2("input.a")
  ], Slider.prototype, "inputA", void 0);
  __decorate([
    i2(".handle.a")
  ], Slider.prototype, "handleA", void 0);
  __decorate([
    e3("md-ripple.a")
  ], Slider.prototype, "rippleA", void 0);
  __decorate([
    i2("input.b")
  ], Slider.prototype, "inputB", void 0);
  __decorate([
    i2(".handle.b")
  ], Slider.prototype, "handleB", void 0);
  __decorate([
    e3("md-ripple.b")
  ], Slider.prototype, "rippleB", void 0);
  __decorate([
    t()
  ], Slider.prototype, "valueA", void 0);
  __decorate([
    t()
  ], Slider.prototype, "valueB", void 0);
  __decorate([
    t()
  ], Slider.prototype, "rippleAShowing", void 0);
  __decorate([
    t()
  ], Slider.prototype, "rippleBShowing", void 0);
  __decorate([
    t()
  ], Slider.prototype, "handleAHover", void 0);
  __decorate([
    t()
  ], Slider.prototype, "handleBHover", void 0);
  __decorate([
    t()
  ], Slider.prototype, "onTopId", void 0);
  __decorate([
    t()
  ], Slider.prototype, "handlesOverlapping", void 0);

  // node_modules/@material/web/slider/lib/slider-styles.css.js
  var styles14 = i3`:host{display:inline-flex;vertical-align:middle;--_active-track-color: var(--md-slider-active-track-color, var(--md-sys-color-primary, #6750a4));--_active-track-height: var(--md-slider-active-track-height, 4px);--_active-track-shape: var(--md-slider-active-track-shape, 9999px);--_disabled-active-track-color: var(--md-slider-disabled-active-track-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-track-opacity: var(--md-slider-disabled-active-track-opacity, 0.38);--_disabled-handle-color: var(--md-slider-disabled-handle-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-handle-elevation: var(--md-slider-disabled-handle-elevation, 0);--_disabled-inactive-track-color: var(--md-slider-disabled-inactive-track-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-inactive-track-opacity: var(--md-slider-disabled-inactive-track-opacity, 0.12);--_focus-handle-color: var(--md-slider-focus-handle-color, var(--md-sys-color-primary, #6750a4));--_handle-color: var(--md-slider-handle-color, var(--md-sys-color-primary, #6750a4));--_handle-elevation: var(--md-slider-handle-elevation, 1);--_handle-height: var(--md-slider-handle-height, 20px);--_handle-shadow-color: var(--md-slider-handle-shadow-color, var(--md-sys-color-shadow, #000));--_handle-shape: var(--md-slider-handle-shape, 9999px);--_handle-width: var(--md-slider-handle-width, 20px);--_hover-handle-color: var(--md-slider-hover-handle-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-slider-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-slider-hover-state-layer-opacity, 0.08);--_inactive-track-color: var(--md-slider-inactive-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_inactive-track-height: var(--md-slider-inactive-track-height, 4px);--_inactive-track-shape: var(--md-slider-inactive-track-shape, 9999px);--_label-container-color: var(--md-slider-label-container-color, var(--md-sys-color-primary, #6750a4));--_label-container-height: var(--md-slider-label-container-height, 28px);--_label-label-text-color: var(--md-slider-label-label-text-color, var(--md-sys-color-on-primary, #fff));--_label-label-text-type: var(--md-slider-label-label-text-type, var(--md-sys-typescale-label-medium, 500 0.75rem / 1rem var(--md-ref-typeface-plain, Roboto)));--_pressed-handle-color: var(--md-slider-pressed-handle-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-slider-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-slider-pressed-state-layer-opacity, 0.12);--_state-layer-size: var(--md-slider-state-layer-size, 40px);--_with-overlap-handle-outline-color: var(--md-slider-with-overlap-handle-outline-color, var(--md-sys-color-on-primary, #fff));--_with-overlap-handle-outline-width: var(--md-slider-with-overlap-handle-outline-width, 1px);--_with-tick-marks-active-container-color: var(--md-slider-with-tick-marks-active-container-color, var(--md-sys-color-on-primary, #fff));--_with-tick-marks-container-size: var(--md-slider-with-tick-marks-container-size, 2px);--_with-tick-marks-disabled-container-color: var(--md-slider-with-tick-marks-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_with-tick-marks-inactive-container-color: var(--md-slider-with-tick-marks-inactive-container-color, var(--md-sys-color-on-surface-variant, #49454f));min-inline-size:200px;--md-elevation-level:var(--_handle-elevation);--md-elevation-shadow-color:var(--_handle-shadow-color)}md-elevation{transition-duration:250ms}@media(prefers-reduced-motion){.label{transition-duration:0}}:host([disabled]){opacity:var(--_disabled-active-track-opacity);--md-elevation-level:var(--_disabled-handle-elevation)}.container{flex:1;display:flex;align-items:center;position:relative;block-size:var(--_state-layer-size);pointer-events:none;touch-action:none}.track{position:absolute;inset:0;display:flex;align-items:center}.track::before,.track::after{position:absolute;content:"";inset-inline-start:calc(var(--_state-layer-size)/2 - var(--_with-tick-marks-container-size));inset-inline-end:calc(var(--_state-layer-size)/2 - var(--_with-tick-marks-container-size));background-size:calc((100% - var(--_with-tick-marks-container-size)*2)/var(--slider-tick-count)) 100%}.track::before{block-size:var(--_inactive-track-height);border-radius:var(--_inactive-track-shape);background-color:var(--_inactive-track-color)}.track.tickMarks::before{background-image:radial-gradient(circle at var(--_with-tick-marks-container-size) center, var(--_with-tick-marks-inactive-container-color) 0, var(--_with-tick-marks-inactive-container-color) calc(var(--_with-tick-marks-container-size) / 2), transparent calc(var(--_with-tick-marks-container-size) / 2))}:host([disabled]) .track::before{opacity:calc(1/var(--_disabled-active-track-opacity)*var(--_disabled-inactive-track-opacity));background-color:var(--_disabled-inactive-track-color)}.track::after{block-size:var(--_active-track-height);border-radius:var(--_active-track-shape);clip-path:inset(0 calc(var(--_with-tick-marks-container-size) * min((1 - var(--slider-upper-fraction)) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * (1 - var(--slider-upper-fraction))) 0 calc(var(--_with-tick-marks-container-size) * min(var(--slider-lower-fraction) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * var(--slider-lower-fraction)));background-color:var(--_active-track-color)}:host-context([dir=rtl]) .track::after{clip-path:inset(0 calc(var(--_with-tick-marks-container-size) * min(var(--slider-lower-fraction) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * var(--slider-lower-fraction)) 0 calc(var(--_with-tick-marks-container-size) * min((1 - var(--slider-upper-fraction)) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * (1 - var(--slider-upper-fraction))))}:host([dir=rtl]) .track::after{clip-path:inset(0 calc(var(--_with-tick-marks-container-size) * min(var(--slider-lower-fraction) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * var(--slider-lower-fraction)) 0 calc(var(--_with-tick-marks-container-size) * min((1 - var(--slider-upper-fraction)) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * (1 - var(--slider-upper-fraction))))}.track:dir(rtl)::after{clip-path:inset(0 calc(var(--_with-tick-marks-container-size) * min(var(--slider-lower-fraction) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * var(--slider-lower-fraction)) 0 calc(var(--_with-tick-marks-container-size) * min((1 - var(--slider-upper-fraction)) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * (1 - var(--slider-upper-fraction))))}.track.tickMarks::after{background-image:radial-gradient(circle at var(--_with-tick-marks-container-size) center, var(--_with-tick-marks-active-container-color) 0, var(--_with-tick-marks-active-container-color) calc(var(--_with-tick-marks-container-size) / 2), transparent calc(var(--_with-tick-marks-container-size) / 2))}:host([disabled]) .track::after{background-color:var(--_disabled-active-track-color)}:host([disabled]) .track.tickMarks::before,:host([disabled]) .track.tickMarks::after{background-image:radial-gradient(circle at var(--_with-tick-marks-container-size) center, var(--_with-tick-marks-disabled-container-color) 0, var(--_with-tick-marks-disabled-container-color) calc(var(--_with-tick-marks-container-size) / 2), transparent calc(var(--_with-tick-marks-container-size) / 2))}.handleContainerPadded{position:relative;block-size:100%;inline-size:100%;padding-inline:calc(var(--_state-layer-size)/2)}.handleContainerBlock{position:relative;block-size:100%;inline-size:100%}.handleContainer{position:absolute;inset-block-start:0;inset-block-end:0;inset-inline-start:calc(100%*var(--slider-lower-fraction));inline-size:calc(100%*(var(--slider-upper-fraction) - var(--slider-lower-fraction)))}.handle{position:absolute;block-size:var(--_state-layer-size);inline-size:var(--_state-layer-size);border-radius:var(--_handle-shape);display:grid;place-items:center}.handleNub{position:absolute;height:var(--_handle-height);width:var(--_handle-width);border-radius:var(--_handle-shape);background:var(--_handle-color)}:host([disabled]) .handleNub{background:var(--_disabled-handle-color)}input.b:focus~.handleContainerPadded .handle.b>.handleNub,input.a:focus~.handleContainerPadded .handle.a>.handleNub{background:var(--_focus-handle-color)}.container>.handleContainerPadded .handle.hover>.handleNub{background:var(--_hover-handle-color)}:host(:not([disabled])) input.b:active~.handleContainerPadded .handle.b>.handleNub,:host(:not([disabled])) input.a:active~.handleContainerPadded .handle.a>.handleNub{background:var(--_pressed-handle-color)}.onTop.isOverlapping .handleNub,.onTop.isOverlapping .label,.onTop.isOverlapping .label::before{border:var(--_with-overlap-handle-outline-color) solid var(--_with-overlap-handle-outline-width)}.handle.lesser{inset-inline-start:calc(0px - var(--_state-layer-size)/2)}.handle:not(.lesser){inset-inline-end:calc(0px - var(--_state-layer-size)/2)}.label{position:absolute;box-sizing:border-box;display:grid;padding:4px;place-items:center;border-radius:9999px;color:var(--_label-label-text-color);font:var(--_label-label-text-type);inset-block-end:100%;min-inline-size:var(--_label-container-height);min-block-size:var(--_label-container-height);background:var(--_label-container-color);transition:transform 100ms cubic-bezier(0.2, 0, 0, 1);transform-origin:center bottom;transform:scale(0)}:host(:focus-within) .label,.handleContainer.hover .label{transform:scale(1)}.label::before,.label::after{position:absolute;display:block;content:"";background:inherit}.label::before{inline-size:calc(var(--_label-container-height)/2);block-size:calc(var(--_label-container-height)/2);bottom:calc(var(--_label-container-height)/-10);transform:rotate(45deg)}.label::after{inset:0px;border-radius:inherit}.labelContent{z-index:1}input[type=range]{opacity:0;-webkit-tap-highlight-color:rgba(0,0,0,0);position:absolute;box-sizing:border-box;height:100%;width:100%;margin:0;background:rgba(0,0,0,0);cursor:pointer;pointer-events:auto;appearance:none}input[type=range]:focus{outline:none}::-webkit-slider-runnable-track{-webkit-appearance:none}::-moz-range-track{appearance:none}::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;block-size:var(--_state-layer-size);inline-size:var(--_state-layer-size);transform:scaleX(0);opacity:0;z-index:2}::-moz-range-thumb{appearance:none;block-size:var(--_state-layer-size);inline-size:var(--_state-layer-size);transform:scaleX(0);opacity:0;z-index:2}.ranged input.lesser{clip-path:inset(0 calc(100% - (var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--slider-lower-fraction) + (var(--slider-upper-fraction) - var(--slider-lower-fraction)) / 2))) 0 0)}:host-context([dir=rtl]) .ranged input.lesser{clip-path:inset(0 0 0 calc(100% - (var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--slider-lower-fraction) + (var(--slider-upper-fraction) - var(--slider-lower-fraction)) / 2))))}:host([dir=rtl]) .ranged input.lesser{clip-path:inset(0 0 0 calc(100% - (var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--slider-lower-fraction) + (var(--slider-upper-fraction) - var(--slider-lower-fraction)) / 2))))}.ranged input.lesser:dir(rtl){clip-path:inset(0 0 0 calc(100% - (var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--slider-lower-fraction) + (var(--slider-upper-fraction) - var(--slider-lower-fraction)) / 2))))}.ranged input:not(.lesser){clip-path:inset(0 0 0 calc(var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--slider-lower-fraction) + (var(--slider-upper-fraction) - var(--slider-lower-fraction)) / 2)))}:host-context([dir=rtl]) .ranged input:not(.lesser){clip-path:inset(0 calc(var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--slider-lower-fraction) + (var(--slider-upper-fraction) - var(--slider-lower-fraction)) / 2)) 0 0)}:host([dir=rtl]) .ranged input:not(.lesser){clip-path:inset(0 calc(var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--slider-lower-fraction) + (var(--slider-upper-fraction) - var(--slider-lower-fraction)) / 2)) 0 0)}.ranged input:dir(rtl):not(.lesser){clip-path:inset(0 calc(var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--slider-lower-fraction) + (var(--slider-upper-fraction) - var(--slider-lower-fraction)) / 2)) 0 0)}.onTop{z-index:1}md-focus-ring{--md-focus-ring-outward-offset: -2px}.handle{--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}md-ripple{height:var(--_state-layer-size);width:var(--_state-layer-size)}/*# sourceMappingURL=slider-styles.css.map */
`;

  // node_modules/@material/web/slider/slider.js
  var MdSlider = class MdSlider2 extends Slider {
  };
  MdSlider.styles = [styles14, styles13];
  MdSlider = __decorate([
    e("md-slider")
  ], MdSlider);

  // src/m3/m3-slider.ts
  var M3Slider = class extends MdSlider {
    constructor() {
      super();
      this.on_value_change = make_value_change_emitter(this, this.id);
      this.onChangeCallback = (x2) => {
      };
      this.addEventListener("input", this.myHandleChange);
    }
    myHandleChange(e10) {
      this.onChangeCallback(true);
      this.on_value_change({ type: "number", value: this.value });
    }
  };
  customElements.define("m3-slider", M3Slider);
  make_input_binding("m3-slider");
})();
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
