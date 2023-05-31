"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn2, res) => function __init() {
    return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/preact/dist/preact.module.js
  function h3(n6, l6) {
    for (var u4 in l6)
      n6[u4] = l6[u4];
    return n6;
  }
  function p2(n6) {
    var l6 = n6.parentNode;
    l6 && l6.removeChild(n6);
  }
  function y2(l6, u4, i5) {
    var t5, o7, r6, f4 = {};
    for (r6 in u4)
      "key" == r6 ? t5 = u4[r6] : "ref" == r6 ? o7 = u4[r6] : f4[r6] = u4[r6];
    if (arguments.length > 2 && (f4.children = arguments.length > 3 ? n5.call(arguments, 2) : i5), "function" == typeof l6 && null != l6.defaultProps)
      for (r6 in l6.defaultProps)
        void 0 === f4[r6] && (f4[r6] = l6.defaultProps[r6]);
    return d3(l6, f4, t5, o7, null);
  }
  function d3(n6, i5, t5, o7, r6) {
    var f4 = { type: n6, props: i5, key: t5, ref: o7, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r6 ? ++u2 : r6 };
    return null == r6 && null != l4.vnode && l4.vnode(f4), f4;
  }
  function _2() {
    return { current: null };
  }
  function k2(n6) {
    return n6.children;
  }
  function b2(n6, l6) {
    this.props = n6, this.context = l6;
  }
  function g2(n6, l6) {
    if (null == l6)
      return n6.__ ? g2(n6.__, n6.__.__k.indexOf(n6) + 1) : null;
    for (var u4; l6 < n6.__k.length; l6++)
      if (null != (u4 = n6.__k[l6]) && null != u4.__e)
        return u4.__e;
    return "function" == typeof n6.type ? g2(n6) : null;
  }
  function m2(n6) {
    var l6, u4;
    if (null != (n6 = n6.__) && null != n6.__c) {
      for (n6.__e = n6.__c.base = null, l6 = 0; l6 < n6.__k.length; l6++)
        if (null != (u4 = n6.__k[l6]) && null != u4.__e) {
          n6.__e = n6.__c.base = u4.__e;
          break;
        }
      return m2(n6);
    }
  }
  function w2(n6) {
    (!n6.__d && (n6.__d = true) && t3.push(n6) && !x2.__r++ || o5 !== l4.debounceRendering) && ((o5 = l4.debounceRendering) || r4)(x2);
  }
  function x2() {
    var n6, l6, u4, i5, o7, r6, e6, c5;
    for (t3.sort(f2); n6 = t3.shift(); )
      n6.__d && (l6 = t3.length, i5 = void 0, o7 = void 0, e6 = (r6 = (u4 = n6).__v).__e, (c5 = u4.__P) && (i5 = [], (o7 = h3({}, r6)).__v = r6.__v + 1, L2(c5, r6, o7, u4.__n, void 0 !== c5.ownerSVGElement, null != r6.__h ? [e6] : null, i5, null == e6 ? g2(r6) : e6, r6.__h), M2(i5, r6), r6.__e != e6 && m2(r6)), t3.length > l6 && t3.sort(f2));
    x2.__r = 0;
  }
  function P2(n6, l6, u4, i5, t5, o7, r6, f4, e6, a5) {
    var h5, p4, y4, _4, b4, m4, w5, x5 = i5 && i5.__k || s5, P5 = x5.length;
    for (u4.__k = [], h5 = 0; h5 < l6.length; h5++)
      if (null != (_4 = u4.__k[h5] = null == (_4 = l6[h5]) || "boolean" == typeof _4 || "function" == typeof _4 ? null : "string" == typeof _4 || "number" == typeof _4 || "bigint" == typeof _4 ? d3(null, _4, null, null, _4) : v2(_4) ? d3(k2, { children: _4 }, null, null, null) : _4.__b > 0 ? d3(_4.type, _4.props, _4.key, _4.ref ? _4.ref : null, _4.__v) : _4)) {
        if (_4.__ = u4, _4.__b = u4.__b + 1, null === (y4 = x5[h5]) || y4 && _4.key == y4.key && _4.type === y4.type)
          x5[h5] = void 0;
        else
          for (p4 = 0; p4 < P5; p4++) {
            if ((y4 = x5[p4]) && _4.key == y4.key && _4.type === y4.type) {
              x5[p4] = void 0;
              break;
            }
            y4 = null;
          }
        L2(n6, _4, y4 = y4 || c3, t5, o7, r6, f4, e6, a5), b4 = _4.__e, (p4 = _4.ref) && y4.ref != p4 && (w5 || (w5 = []), y4.ref && w5.push(y4.ref, null, _4), w5.push(p4, _4.__c || b4, _4)), null != b4 ? (null == m4 && (m4 = b4), "function" == typeof _4.type && _4.__k === y4.__k ? _4.__d = e6 = C2(_4, e6, n6) : e6 = $3(n6, _4, y4, x5, b4, e6), "function" == typeof u4.type && (u4.__d = e6)) : e6 && y4.__e == e6 && e6.parentNode != n6 && (e6 = g2(y4));
      }
    for (u4.__e = m4, h5 = P5; h5--; )
      null != x5[h5] && ("function" == typeof u4.type && null != x5[h5].__e && x5[h5].__e == u4.__d && (u4.__d = A2(i5).nextSibling), q(x5[h5], x5[h5]));
    if (w5)
      for (h5 = 0; h5 < w5.length; h5++)
        O(w5[h5], w5[++h5], w5[++h5]);
  }
  function C2(n6, l6, u4) {
    for (var i5, t5 = n6.__k, o7 = 0; t5 && o7 < t5.length; o7++)
      (i5 = t5[o7]) && (i5.__ = n6, l6 = "function" == typeof i5.type ? C2(i5, l6, u4) : $3(u4, i5, i5, t5, i5.__e, l6));
    return l6;
  }
  function S3(n6, l6) {
    return l6 = l6 || [], null == n6 || "boolean" == typeof n6 || (v2(n6) ? n6.some(function(n7) {
      S3(n7, l6);
    }) : l6.push(n6)), l6;
  }
  function $3(n6, l6, u4, i5, t5, o7) {
    var r6, f4, e6;
    if (void 0 !== l6.__d)
      r6 = l6.__d, l6.__d = void 0;
    else if (null == u4 || t5 != o7 || null == t5.parentNode)
      n:
        if (null == o7 || o7.parentNode !== n6)
          n6.appendChild(t5), r6 = null;
        else {
          for (f4 = o7, e6 = 0; (f4 = f4.nextSibling) && e6 < i5.length; e6 += 1)
            if (f4 == t5)
              break n;
          n6.insertBefore(t5, o7), r6 = o7;
        }
    return void 0 !== r6 ? r6 : t5.nextSibling;
  }
  function A2(n6) {
    var l6, u4, i5;
    if (null == n6.type || "string" == typeof n6.type)
      return n6.__e;
    if (n6.__k) {
      for (l6 = n6.__k.length - 1; l6 >= 0; l6--)
        if ((u4 = n6.__k[l6]) && (i5 = A2(u4)))
          return i5;
    }
    return null;
  }
  function H2(n6, l6, u4, i5, t5) {
    var o7;
    for (o7 in u4)
      "children" === o7 || "key" === o7 || o7 in l6 || T2(n6, o7, null, u4[o7], i5);
    for (o7 in l6)
      t5 && "function" != typeof l6[o7] || "children" === o7 || "key" === o7 || "value" === o7 || "checked" === o7 || u4[o7] === l6[o7] || T2(n6, o7, l6[o7], u4[o7], i5);
  }
  function I2(n6, l6, u4) {
    "-" === l6[0] ? n6.setProperty(l6, null == u4 ? "" : u4) : n6[l6] = null == u4 ? "" : "number" != typeof u4 || a3.test(l6) ? u4 : u4 + "px";
  }
  function T2(n6, l6, u4, i5, t5) {
    var o7;
    n:
      if ("style" === l6)
        if ("string" == typeof u4)
          n6.style.cssText = u4;
        else {
          if ("string" == typeof i5 && (n6.style.cssText = i5 = ""), i5)
            for (l6 in i5)
              u4 && l6 in u4 || I2(n6.style, l6, "");
          if (u4)
            for (l6 in u4)
              i5 && u4[l6] === i5[l6] || I2(n6.style, l6, u4[l6]);
        }
      else if ("o" === l6[0] && "n" === l6[1])
        o7 = l6 !== (l6 = l6.replace(/Capture$/, "")), l6 = l6.toLowerCase() in n6 ? l6.toLowerCase().slice(2) : l6.slice(2), n6.l || (n6.l = {}), n6.l[l6 + o7] = u4, u4 ? i5 || n6.addEventListener(l6, o7 ? z2 : j2, o7) : n6.removeEventListener(l6, o7 ? z2 : j2, o7);
      else if ("dangerouslySetInnerHTML" !== l6) {
        if (t5)
          l6 = l6.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" !== l6 && "height" !== l6 && "href" !== l6 && "list" !== l6 && "form" !== l6 && "tabIndex" !== l6 && "download" !== l6 && "rowSpan" !== l6 && "colSpan" !== l6 && l6 in n6)
          try {
            n6[l6] = null == u4 ? "" : u4;
            break n;
          } catch (n7) {
          }
        "function" == typeof u4 || (null == u4 || false === u4 && "-" !== l6[4] ? n6.removeAttribute(l6) : n6.setAttribute(l6, u4));
      }
  }
  function j2(n6) {
    return this.l[n6.type + false](l4.event ? l4.event(n6) : n6);
  }
  function z2(n6) {
    return this.l[n6.type + true](l4.event ? l4.event(n6) : n6);
  }
  function L2(n6, u4, i5, t5, o7, r6, f4, e6, c5) {
    var s7, a5, p4, y4, d5, _4, g5, m4, w5, x5, C4, S4, $5, A5, H4, I4 = u4.type;
    if (void 0 !== u4.constructor)
      return null;
    null != i5.__h && (c5 = i5.__h, e6 = u4.__e = i5.__e, u4.__h = null, r6 = [e6]), (s7 = l4.__b) && s7(u4);
    try {
      n:
        if ("function" == typeof I4) {
          if (m4 = u4.props, w5 = (s7 = I4.contextType) && t5[s7.__c], x5 = s7 ? w5 ? w5.props.value : s7.__ : t5, i5.__c ? g5 = (a5 = u4.__c = i5.__c).__ = a5.__E : ("prototype" in I4 && I4.prototype.render ? u4.__c = a5 = new I4(m4, x5) : (u4.__c = a5 = new b2(m4, x5), a5.constructor = I4, a5.render = B2), w5 && w5.sub(a5), a5.props = m4, a5.state || (a5.state = {}), a5.context = x5, a5.__n = t5, p4 = a5.__d = true, a5.__h = [], a5._sb = []), null == a5.__s && (a5.__s = a5.state), null != I4.getDerivedStateFromProps && (a5.__s == a5.state && (a5.__s = h3({}, a5.__s)), h3(a5.__s, I4.getDerivedStateFromProps(m4, a5.__s))), y4 = a5.props, d5 = a5.state, a5.__v = u4, p4)
            null == I4.getDerivedStateFromProps && null != a5.componentWillMount && a5.componentWillMount(), null != a5.componentDidMount && a5.__h.push(a5.componentDidMount);
          else {
            if (null == I4.getDerivedStateFromProps && m4 !== y4 && null != a5.componentWillReceiveProps && a5.componentWillReceiveProps(m4, x5), !a5.__e && null != a5.shouldComponentUpdate && false === a5.shouldComponentUpdate(m4, a5.__s, x5) || u4.__v === i5.__v) {
              for (u4.__v !== i5.__v && (a5.props = m4, a5.state = a5.__s, a5.__d = false), a5.__e = false, u4.__e = i5.__e, u4.__k = i5.__k, u4.__k.forEach(function(n7) {
                n7 && (n7.__ = u4);
              }), C4 = 0; C4 < a5._sb.length; C4++)
                a5.__h.push(a5._sb[C4]);
              a5._sb = [], a5.__h.length && f4.push(a5);
              break n;
            }
            null != a5.componentWillUpdate && a5.componentWillUpdate(m4, a5.__s, x5), null != a5.componentDidUpdate && a5.__h.push(function() {
              a5.componentDidUpdate(y4, d5, _4);
            });
          }
          if (a5.context = x5, a5.props = m4, a5.__P = n6, S4 = l4.__r, $5 = 0, "prototype" in I4 && I4.prototype.render) {
            for (a5.state = a5.__s, a5.__d = false, S4 && S4(u4), s7 = a5.render(a5.props, a5.state, a5.context), A5 = 0; A5 < a5._sb.length; A5++)
              a5.__h.push(a5._sb[A5]);
            a5._sb = [];
          } else
            do {
              a5.__d = false, S4 && S4(u4), s7 = a5.render(a5.props, a5.state, a5.context), a5.state = a5.__s;
            } while (a5.__d && ++$5 < 25);
          a5.state = a5.__s, null != a5.getChildContext && (t5 = h3(h3({}, t5), a5.getChildContext())), p4 || null == a5.getSnapshotBeforeUpdate || (_4 = a5.getSnapshotBeforeUpdate(y4, d5)), P2(n6, v2(H4 = null != s7 && s7.type === k2 && null == s7.key ? s7.props.children : s7) ? H4 : [H4], u4, i5, t5, o7, r6, f4, e6, c5), a5.base = u4.__e, u4.__h = null, a5.__h.length && f4.push(a5), g5 && (a5.__E = a5.__ = null), a5.__e = false;
        } else
          null == r6 && u4.__v === i5.__v ? (u4.__k = i5.__k, u4.__e = i5.__e) : u4.__e = N2(i5.__e, u4, i5, t5, o7, r6, f4, c5);
      (s7 = l4.diffed) && s7(u4);
    } catch (n7) {
      u4.__v = null, (c5 || null != r6) && (u4.__e = e6, u4.__h = !!c5, r6[r6.indexOf(e6)] = null), l4.__e(n7, u4, i5);
    }
  }
  function M2(n6, u4) {
    l4.__c && l4.__c(u4, n6), n6.some(function(u5) {
      try {
        n6 = u5.__h, u5.__h = [], n6.some(function(n7) {
          n7.call(u5);
        });
      } catch (n7) {
        l4.__e(n7, u5.__v);
      }
    });
  }
  function N2(l6, u4, i5, t5, o7, r6, f4, e6) {
    var s7, a5, h5, y4 = i5.props, d5 = u4.props, _4 = u4.type, k5 = 0;
    if ("svg" === _4 && (o7 = true), null != r6) {
      for (; k5 < r6.length; k5++)
        if ((s7 = r6[k5]) && "setAttribute" in s7 == !!_4 && (_4 ? s7.localName === _4 : 3 === s7.nodeType)) {
          l6 = s7, r6[k5] = null;
          break;
        }
    }
    if (null == l6) {
      if (null === _4)
        return document.createTextNode(d5);
      l6 = o7 ? document.createElementNS("http://www.w3.org/2000/svg", _4) : document.createElement(_4, d5.is && d5), r6 = null, e6 = false;
    }
    if (null === _4)
      y4 === d5 || e6 && l6.data === d5 || (l6.data = d5);
    else {
      if (r6 = r6 && n5.call(l6.childNodes), a5 = (y4 = i5.props || c3).dangerouslySetInnerHTML, h5 = d5.dangerouslySetInnerHTML, !e6) {
        if (null != r6)
          for (y4 = {}, k5 = 0; k5 < l6.attributes.length; k5++)
            y4[l6.attributes[k5].name] = l6.attributes[k5].value;
        (h5 || a5) && (h5 && (a5 && h5.__html == a5.__html || h5.__html === l6.innerHTML) || (l6.innerHTML = h5 && h5.__html || ""));
      }
      if (H2(l6, d5, y4, o7, e6), h5)
        u4.__k = [];
      else if (P2(l6, v2(k5 = u4.props.children) ? k5 : [k5], u4, i5, t5, o7 && "foreignObject" !== _4, r6, f4, r6 ? r6[0] : i5.__k && g2(i5, 0), e6), null != r6)
        for (k5 = r6.length; k5--; )
          null != r6[k5] && p2(r6[k5]);
      e6 || ("value" in d5 && void 0 !== (k5 = d5.value) && (k5 !== l6.value || "progress" === _4 && !k5 || "option" === _4 && k5 !== y4.value) && T2(l6, "value", k5, y4.value, false), "checked" in d5 && void 0 !== (k5 = d5.checked) && k5 !== l6.checked && T2(l6, "checked", k5, y4.checked, false));
    }
    return l6;
  }
  function O(n6, u4, i5) {
    try {
      "function" == typeof n6 ? n6(u4) : n6.current = u4;
    } catch (n7) {
      l4.__e(n7, i5);
    }
  }
  function q(n6, u4, i5) {
    var t5, o7;
    if (l4.unmount && l4.unmount(n6), (t5 = n6.ref) && (t5.current && t5.current !== n6.__e || O(t5, null, u4)), null != (t5 = n6.__c)) {
      if (t5.componentWillUnmount)
        try {
          t5.componentWillUnmount();
        } catch (n7) {
          l4.__e(n7, u4);
        }
      t5.base = t5.__P = null, n6.__c = void 0;
    }
    if (t5 = n6.__k)
      for (o7 = 0; o7 < t5.length; o7++)
        t5[o7] && q(t5[o7], u4, i5 || "function" != typeof n6.type);
    i5 || null == n6.__e || p2(n6.__e), n6.__ = n6.__e = n6.__d = void 0;
  }
  function B2(n6, l6, u4) {
    return this.constructor(n6, u4);
  }
  function D(u4, i5, t5) {
    var o7, r6, f4;
    l4.__ && l4.__(u4, i5), r6 = (o7 = "function" == typeof t5) ? null : t5 && t5.__k || i5.__k, f4 = [], L2(i5, u4 = (!o7 && t5 || i5).__k = y2(k2, null, [u4]), r6 || c3, c3, void 0 !== i5.ownerSVGElement, !o7 && t5 ? [t5] : r6 ? null : i5.firstChild ? n5.call(i5.childNodes) : null, f4, !o7 && t5 ? t5 : r6 ? r6.__e : i5.firstChild, o7), M2(f4, u4);
  }
  function E2(n6, l6) {
    D(n6, l6, E2);
  }
  function F(l6, u4, i5) {
    var t5, o7, r6, f4, e6 = h3({}, l6.props);
    for (r6 in l6.type && l6.type.defaultProps && (f4 = l6.type.defaultProps), u4)
      "key" == r6 ? t5 = u4[r6] : "ref" == r6 ? o7 = u4[r6] : e6[r6] = void 0 === u4[r6] && void 0 !== f4 ? f4[r6] : u4[r6];
    return arguments.length > 2 && (e6.children = arguments.length > 3 ? n5.call(arguments, 2) : i5), d3(l6.type, e6, t5 || l6.key, o7 || l6.ref, null);
  }
  function G(n6, l6) {
    var u4 = { __c: l6 = "__cC" + e4++, __: n6, Consumer: function(n7, l7) {
      return n7.children(l7);
    }, Provider: function(n7) {
      var u5, i5;
      return this.getChildContext || (u5 = [], (i5 = {})[l6] = this, this.getChildContext = function() {
        return i5;
      }, this.shouldComponentUpdate = function(n8) {
        this.props.value !== n8.value && u5.some(function(n9) {
          n9.__e = true, w2(n9);
        });
      }, this.sub = function(n8) {
        u5.push(n8);
        var l7 = n8.componentWillUnmount;
        n8.componentWillUnmount = function() {
          u5.splice(u5.indexOf(n8), 1), l7 && l7.call(n8);
        };
      }), n7.children;
    } };
    return u4.Provider.__ = u4.Consumer.contextType = u4;
  }
  var n5, l4, u2, i3, t3, o5, r4, f2, e4, c3, s5, a3, v2;
  var init_preact_module = __esm({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/preact/dist/preact.module.js"() {
      c3 = {};
      s5 = [];
      a3 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
      v2 = Array.isArray;
      n5 = s5.slice, l4 = { __e: function(n6, l6, u4, i5) {
        for (var t5, o7, r6; l6 = l6.__; )
          if ((t5 = l6.__c) && !t5.__)
            try {
              if ((o7 = t5.constructor) && null != o7.getDerivedStateFromError && (t5.setState(o7.getDerivedStateFromError(n6)), r6 = t5.__d), null != t5.componentDidCatch && (t5.componentDidCatch(n6, i5 || {}), r6 = t5.__d), r6)
                return t5.__E = t5;
            } catch (l7) {
              n6 = l7;
            }
        throw n6;
      } }, u2 = 0, i3 = function(n6) {
        return null != n6 && void 0 === n6.constructor;
      }, b2.prototype.setState = function(n6, l6) {
        var u4;
        u4 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = h3({}, this.state), "function" == typeof n6 && (n6 = n6(h3({}, u4), this.props)), n6 && h3(u4, n6), null != n6 && this.__v && (l6 && this._sb.push(l6), w2(this));
      }, b2.prototype.forceUpdate = function(n6) {
        this.__v && (this.__e = true, n6 && this.__h.push(n6), w2(this));
      }, b2.prototype.render = k2, t3 = [], r4 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f2 = function(n6, l6) {
        return n6.__v.__b - l6.__v.__b;
      }, x2.__r = 0, e4 = 0;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/preact/hooks/dist/hooks.module.js
  function d4(t5, u4) {
    l4.__h && l4.__h(r5, t5, o6 || u4), o6 = 0;
    var i5 = r5.__H || (r5.__H = { __: [], __h: [] });
    return t5 >= i5.__.length && i5.__.push({ __V: c4 }), i5.__[t5];
  }
  function h4(n6) {
    return o6 = 1, s6(B3, n6);
  }
  function s6(n6, u4, i5) {
    var o7 = d4(t4++, 2);
    if (o7.t = n6, !o7.__c && (o7.__ = [i5 ? i5(u4) : B3(void 0, u4), function(n7) {
      var t5 = o7.__N ? o7.__N[0] : o7.__[0], r6 = o7.t(t5, n7);
      t5 !== r6 && (o7.__N = [r6, o7.__[1]], o7.__c.setState({}));
    }], o7.__c = r5, !r5.u)) {
      var f4 = function(n7, t5, r6) {
        if (!o7.__c.__H)
          return true;
        var u5 = o7.__c.__H.__.filter(function(n8) {
          return n8.__c;
        });
        if (u5.every(function(n8) {
          return !n8.__N;
        }))
          return !c5 || c5.call(this, n7, t5, r6);
        var i6 = false;
        return u5.forEach(function(n8) {
          if (n8.__N) {
            var t6 = n8.__[0];
            n8.__ = n8.__N, n8.__N = void 0, t6 !== n8.__[0] && (i6 = true);
          }
        }), !(!i6 && o7.__c.props === n7) && (!c5 || c5.call(this, n7, t5, r6));
      };
      r5.u = true;
      var c5 = r5.shouldComponentUpdate, e6 = r5.componentWillUpdate;
      r5.componentWillUpdate = function(n7, t5, r6) {
        if (this.__e) {
          var u5 = c5;
          c5 = void 0, f4(n7, t5, r6), c5 = u5;
        }
        e6 && e6.call(this, n7, t5, r6);
      }, r5.shouldComponentUpdate = f4;
    }
    return o7.__N || o7.__;
  }
  function p3(u4, i5) {
    var o7 = d4(t4++, 3);
    !l4.__s && z3(o7.__H, i5) && (o7.__ = u4, o7.i = i5, r5.__H.__h.push(o7));
  }
  function y3(u4, i5) {
    var o7 = d4(t4++, 4);
    !l4.__s && z3(o7.__H, i5) && (o7.__ = u4, o7.i = i5, r5.__h.push(o7));
  }
  function _3(n6) {
    return o6 = 5, F2(function() {
      return { current: n6 };
    }, []);
  }
  function A3(n6, t5, r6) {
    o6 = 6, y3(function() {
      return "function" == typeof n6 ? (n6(t5()), function() {
        return n6(null);
      }) : n6 ? (n6.current = t5(), function() {
        return n6.current = null;
      }) : void 0;
    }, null == r6 ? r6 : r6.concat(n6));
  }
  function F2(n6, r6) {
    var u4 = d4(t4++, 7);
    return z3(u4.__H, r6) ? (u4.__V = n6(), u4.i = r6, u4.__h = n6, u4.__V) : u4.__;
  }
  function T3(n6, t5) {
    return o6 = 8, F2(function() {
      return n6;
    }, t5);
  }
  function q2(n6) {
    var u4 = r5.context[n6.__c], i5 = d4(t4++, 9);
    return i5.c = n6, u4 ? (null == i5.__ && (i5.__ = true, u4.sub(r5)), u4.props.value) : n6.__;
  }
  function x3(t5, r6) {
    l4.useDebugValue && l4.useDebugValue(r6 ? r6(t5) : t5);
  }
  function P3(n6) {
    var u4 = d4(t4++, 10), i5 = h4();
    return u4.__ = n6, r5.componentDidCatch || (r5.componentDidCatch = function(n7, t5) {
      u4.__ && u4.__(n7, t5), i5[1](n7);
    }), [i5[0], function() {
      i5[1](void 0);
    }];
  }
  function V2() {
    var n6 = d4(t4++, 11);
    if (!n6.__) {
      for (var u4 = r5.__v; null !== u4 && !u4.__m && null !== u4.__; )
        u4 = u4.__;
      var i5 = u4.__m || (u4.__m = [0, 0]);
      n6.__ = "P" + i5[0] + "-" + i5[1]++;
    }
    return n6.__;
  }
  function b3() {
    for (var t5; t5 = f3.shift(); )
      if (t5.__P && t5.__H)
        try {
          t5.__H.__h.forEach(k3), t5.__H.__h.forEach(w3), t5.__H.__h = [];
        } catch (r6) {
          t5.__H.__h = [], l4.__e(r6, t5.__v);
        }
  }
  function j3(n6) {
    var t5, r6 = function() {
      clearTimeout(u4), g3 && cancelAnimationFrame(t5), setTimeout(n6);
    }, u4 = setTimeout(r6, 100);
    g3 && (t5 = requestAnimationFrame(r6));
  }
  function k3(n6) {
    var t5 = r5, u4 = n6.__c;
    "function" == typeof u4 && (n6.__c = void 0, u4()), r5 = t5;
  }
  function w3(n6) {
    var t5 = r5;
    n6.__c = n6.__(), r5 = t5;
  }
  function z3(n6, t5) {
    return !n6 || n6.length !== t5.length || t5.some(function(t6, r6) {
      return t6 !== n6[r6];
    });
  }
  function B3(n6, t5) {
    return "function" == typeof t5 ? t5(n6) : t5;
  }
  var t4, r5, u3, i4, o6, f3, c4, e5, a4, v3, l5, m3, g3;
  var init_hooks_module = __esm({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/preact/hooks/dist/hooks.module.js"() {
      init_preact_module();
      o6 = 0;
      f3 = [];
      c4 = [];
      e5 = l4.__b;
      a4 = l4.__r;
      v3 = l4.diffed;
      l5 = l4.__c;
      m3 = l4.unmount;
      l4.__b = function(n6) {
        r5 = null, e5 && e5(n6);
      }, l4.__r = function(n6) {
        a4 && a4(n6), t4 = 0;
        var i5 = (r5 = n6.__c).__H;
        i5 && (u3 === r5 ? (i5.__h = [], r5.__h = [], i5.__.forEach(function(n7) {
          n7.__N && (n7.__ = n7.__N), n7.__V = c4, n7.__N = n7.i = void 0;
        })) : (i5.__h.forEach(k3), i5.__h.forEach(w3), i5.__h = [], t4 = 0)), u3 = r5;
      }, l4.diffed = function(t5) {
        v3 && v3(t5);
        var o7 = t5.__c;
        o7 && o7.__H && (o7.__H.__h.length && (1 !== f3.push(o7) && i4 === l4.requestAnimationFrame || ((i4 = l4.requestAnimationFrame) || j3)(b3)), o7.__H.__.forEach(function(n6) {
          n6.i && (n6.__H = n6.i), n6.__V !== c4 && (n6.__ = n6.__V), n6.i = void 0, n6.__V = c4;
        })), u3 = r5 = null;
      }, l4.__c = function(t5, r6) {
        r6.some(function(t6) {
          try {
            t6.__h.forEach(k3), t6.__h = t6.__h.filter(function(n6) {
              return !n6.__ || w3(n6);
            });
          } catch (u4) {
            r6.some(function(n6) {
              n6.__h && (n6.__h = []);
            }), r6 = [], l4.__e(u4, t6.__v);
          }
        }), l5 && l5(t5, r6);
      }, l4.unmount = function(t5) {
        m3 && m3(t5);
        var r6, u4 = t5.__c;
        u4 && u4.__H && (u4.__H.__.forEach(function(n6) {
          try {
            k3(n6);
          } catch (n7) {
            r6 = n7;
          }
        }), u4.__H = void 0, r6 && l4.__e(r6, u4.__v));
      };
      g3 = "function" == typeof requestAnimationFrame;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/preact/compat/dist/compat.module.js
  function g4(n6, t5) {
    for (var e6 in t5)
      n6[e6] = t5[e6];
    return n6;
  }
  function C3(n6, t5) {
    for (var e6 in n6)
      if ("__source" !== e6 && !(e6 in t5))
        return true;
    for (var r6 in t5)
      if ("__source" !== r6 && n6[r6] !== t5[r6])
        return true;
    return false;
  }
  function E3(n6, t5) {
    return n6 === t5 && (0 !== n6 || 1 / n6 == 1 / t5) || n6 != n6 && t5 != t5;
  }
  function w4(n6) {
    this.props = n6;
  }
  function x4(n6, e6) {
    function r6(n7) {
      var t5 = this.props.ref, r7 = t5 == n7.ref;
      return !r7 && t5 && (t5.call ? t5(null) : t5.current = null), e6 ? !e6(this.props, n7) || !r7 : C3(this.props, n7);
    }
    function u4(e7) {
      return this.shouldComponentUpdate = r6, y2(n6, e7);
    }
    return u4.displayName = "Memo(" + (n6.displayName || n6.name) + ")", u4.prototype.isReactComponent = true, u4.__f = true, u4;
  }
  function k4(n6) {
    function t5(t6) {
      var e6 = g4({}, t6);
      return delete e6.ref, n6(e6, t6.ref || null);
    }
    return t5.$$typeof = N3, t5.render = t5, t5.prototype.isReactComponent = t5.__f = true, t5.displayName = "ForwardRef(" + (n6.displayName || n6.name) + ")", t5;
  }
  function L3(n6, t5, e6) {
    return n6 && (n6.__c && n6.__c.__H && (n6.__c.__H.__.forEach(function(n7) {
      "function" == typeof n7.__c && n7.__c();
    }), n6.__c.__H = null), null != (n6 = g4({}, n6)).__c && (n6.__c.__P === e6 && (n6.__c.__P = t5), n6.__c = null), n6.__k = n6.__k && n6.__k.map(function(n7) {
      return L3(n7, t5, e6);
    })), n6;
  }
  function U(n6, t5, e6) {
    return n6 && (n6.__v = null, n6.__k = n6.__k && n6.__k.map(function(n7) {
      return U(n7, t5, e6);
    }), n6.__c && n6.__c.__P === t5 && (n6.__e && e6.insertBefore(n6.__e, n6.__d), n6.__c.__e = true, n6.__c.__P = e6)), n6;
  }
  function D2() {
    this.__u = 0, this.t = null, this.__b = null;
  }
  function F3(n6) {
    var t5 = n6.__.__c;
    return t5 && t5.__a && t5.__a(n6);
  }
  function M3(n6) {
    var e6, r6, u4;
    function o7(o8) {
      if (e6 || (e6 = n6()).then(function(n7) {
        r6 = n7.default || n7;
      }, function(n7) {
        u4 = n7;
      }), u4)
        throw u4;
      if (!r6)
        throw e6;
      return y2(r6, o8);
    }
    return o7.displayName = "Lazy", o7.__f = true, o7;
  }
  function V3() {
    this.u = null, this.o = null;
  }
  function P4(n6) {
    return this.getChildContext = function() {
      return n6.context;
    }, n6.children;
  }
  function j4(n6) {
    var e6 = this, r6 = n6.i;
    e6.componentWillUnmount = function() {
      D(null, e6.l), e6.l = null, e6.i = null;
    }, e6.i && e6.i !== r6 && e6.componentWillUnmount(), n6.__v ? (e6.l || (e6.i = r6, e6.l = { nodeType: 1, parentNode: r6, childNodes: [], appendChild: function(n7) {
      this.childNodes.push(n7), e6.i.appendChild(n7);
    }, insertBefore: function(n7, t5) {
      this.childNodes.push(n7), e6.i.appendChild(n7);
    }, removeChild: function(n7) {
      this.childNodes.splice(this.childNodes.indexOf(n7) >>> 1, 1), e6.i.removeChild(n7);
    } }), D(y2(P4, { context: e6.context }, n6.__v), e6.l)) : e6.l && e6.componentWillUnmount();
  }
  function z4(n6, e6) {
    var r6 = y2(j4, { __v: n6, i: e6 });
    return r6.containerInfo = e6, r6;
  }
  function G2(n6, t5, e6) {
    return null == t5.__k && (t5.textContent = ""), D(n6, t5), "function" == typeof e6 && e6(), n6 ? n6.__c : null;
  }
  function J(n6, t5, e6) {
    return E2(n6, t5), "function" == typeof e6 && e6(), n6 ? n6.__c : null;
  }
  function Q() {
  }
  function X() {
    return this.cancelBubble;
  }
  function nn() {
    return this.defaultPrevented;
  }
  function fn(n6) {
    return y2.bind(null, n6);
  }
  function an(n6) {
    return !!n6 && n6.$$typeof === B4;
  }
  function sn(n6) {
    return an(n6) ? F.apply(null, arguments) : n6;
  }
  function hn(n6) {
    return !!n6.__k && (D(null, n6), true);
  }
  function vn(n6) {
    return n6 && (n6.base || 1 === n6.nodeType && n6) || null;
  }
  function yn(n6) {
    n6();
  }
  function _n(n6) {
    return n6;
  }
  function bn() {
    return [false, yn];
  }
  function gn(n6, t5) {
    var e6 = t5(), r6 = h4({ h: { __: e6, v: t5 } }), u4 = r6[0].h, o7 = r6[1];
    return y3(function() {
      u4.__ = e6, u4.v = t5, E3(u4.__, t5()) || o7({ h: u4 });
    }, [n6, e6, t5]), p3(function() {
      return E3(u4.__, u4.v()) || o7({ h: u4 }), n6(function() {
        E3(u4.__, u4.v()) || o7({ h: u4 });
      });
    }, [n6]), e6;
  }
  var R2, N3, A4, O2, T4, I3, W, B4, H3, Z, Y, $4, q3, K, tn, en, rn, un, on, ln, cn, dn, pn, mn, Sn, Cn;
  var init_compat_module = __esm({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/preact/compat/dist/compat.module.js"() {
      init_preact_module();
      init_preact_module();
      init_hooks_module();
      init_hooks_module();
      (w4.prototype = new b2()).isPureReactComponent = true, w4.prototype.shouldComponentUpdate = function(n6, t5) {
        return C3(this.props, n6) || C3(this.state, t5);
      };
      R2 = l4.__b;
      l4.__b = function(n6) {
        n6.type && n6.type.__f && n6.ref && (n6.props.ref = n6.ref, n6.ref = null), R2 && R2(n6);
      };
      N3 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
      A4 = function(n6, t5) {
        return null == n6 ? null : S3(S3(n6).map(t5));
      };
      O2 = { map: A4, forEach: A4, count: function(n6) {
        return n6 ? S3(n6).length : 0;
      }, only: function(n6) {
        var t5 = S3(n6);
        if (1 !== t5.length)
          throw "Children.only";
        return t5[0];
      }, toArray: S3 };
      T4 = l4.__e;
      l4.__e = function(n6, t5, e6, r6) {
        if (n6.then) {
          for (var u4, o7 = t5; o7 = o7.__; )
            if ((u4 = o7.__c) && u4.__c)
              return null == t5.__e && (t5.__e = e6.__e, t5.__k = e6.__k), u4.__c(n6, t5);
        }
        T4(n6, t5, e6, r6);
      };
      I3 = l4.unmount;
      l4.unmount = function(n6) {
        var t5 = n6.__c;
        t5 && t5.__R && t5.__R(), t5 && true === n6.__h && (n6.type = null), I3 && I3(n6);
      }, (D2.prototype = new b2()).__c = function(n6, t5) {
        var e6 = t5.__c, r6 = this;
        null == r6.t && (r6.t = []), r6.t.push(e6);
        var u4 = F3(r6.__v), o7 = false, i5 = function() {
          o7 || (o7 = true, e6.__R = null, u4 ? u4(l6) : l6());
        };
        e6.__R = i5;
        var l6 = function() {
          if (!--r6.__u) {
            if (r6.state.__a) {
              var n7 = r6.state.__a;
              r6.__v.__k[0] = U(n7, n7.__c.__P, n7.__c.__O);
            }
            var t6;
            for (r6.setState({ __a: r6.__b = null }); t6 = r6.t.pop(); )
              t6.forceUpdate();
          }
        }, c5 = true === t5.__h;
        r6.__u++ || c5 || r6.setState({ __a: r6.__b = r6.__v.__k[0] }), n6.then(i5, i5);
      }, D2.prototype.componentWillUnmount = function() {
        this.t = [];
      }, D2.prototype.render = function(n6, e6) {
        if (this.__b) {
          if (this.__v.__k) {
            var r6 = document.createElement("div"), o7 = this.__v.__k[0].__c;
            this.__v.__k[0] = L3(this.__b, r6, o7.__O = o7.__P);
          }
          this.__b = null;
        }
        var i5 = e6.__a && y2(k2, null, n6.fallback);
        return i5 && (i5.__h = null), [y2(k2, null, e6.__a ? null : n6.children), i5];
      };
      W = function(n6, t5, e6) {
        if (++e6[1] === e6[0] && n6.o.delete(t5), n6.props.revealOrder && ("t" !== n6.props.revealOrder[0] || !n6.o.size))
          for (e6 = n6.u; e6; ) {
            for (; e6.length > 3; )
              e6.pop()();
            if (e6[1] < e6[0])
              break;
            n6.u = e6 = e6[2];
          }
      };
      (V3.prototype = new b2()).__a = function(n6) {
        var t5 = this, e6 = F3(t5.__v), r6 = t5.o.get(n6);
        return r6[0]++, function(u4) {
          var o7 = function() {
            t5.props.revealOrder ? (r6.push(u4), W(t5, n6, r6)) : u4();
          };
          e6 ? e6(o7) : o7();
        };
      }, V3.prototype.render = function(n6) {
        this.u = null, this.o = /* @__PURE__ */ new Map();
        var t5 = S3(n6.children);
        n6.revealOrder && "b" === n6.revealOrder[0] && t5.reverse();
        for (var e6 = t5.length; e6--; )
          this.o.set(t5[e6], this.u = [1, 0, this.u]);
        return n6.children;
      }, V3.prototype.componentDidUpdate = V3.prototype.componentDidMount = function() {
        var n6 = this;
        this.o.forEach(function(t5, e6) {
          W(n6, e6, t5);
        });
      };
      B4 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
      H3 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
      Z = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
      Y = /[A-Z0-9]/g;
      $4 = "undefined" != typeof document;
      q3 = function(n6) {
        return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n6);
      };
      b2.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t5) {
        Object.defineProperty(b2.prototype, t5, { configurable: true, get: function() {
          return this["UNSAFE_" + t5];
        }, set: function(n6) {
          Object.defineProperty(this, t5, { configurable: true, writable: true, value: n6 });
        } });
      });
      K = l4.event;
      l4.event = function(n6) {
        return K && (n6 = K(n6)), n6.persist = Q, n6.isPropagationStopped = X, n6.isDefaultPrevented = nn, n6.nativeEvent = n6;
      };
      en = { enumerable: false, configurable: true, get: function() {
        return this.class;
      } };
      rn = l4.vnode;
      l4.vnode = function(n6) {
        "string" == typeof n6.type && function(n7) {
          var t5 = n7.props, e6 = n7.type, u4 = {};
          for (var o7 in t5) {
            var i5 = t5[o7];
            if (!("value" === o7 && "defaultValue" in t5 && null == i5 || $4 && "children" === o7 && "noscript" === e6 || "class" === o7 || "className" === o7)) {
              var l6 = o7.toLowerCase();
              "defaultValue" === o7 && "value" in t5 && null == t5.value ? o7 = "value" : "download" === o7 && true === i5 ? i5 = "" : "ondoubleclick" === l6 ? o7 = "ondblclick" : "onchange" !== l6 || "input" !== e6 && "textarea" !== e6 || q3(t5.type) ? "onfocus" === l6 ? o7 = "onfocusin" : "onblur" === l6 ? o7 = "onfocusout" : Z.test(o7) ? o7 = l6 : -1 === e6.indexOf("-") && H3.test(o7) ? o7 = o7.replace(Y, "-$&").toLowerCase() : null === i5 && (i5 = void 0) : l6 = o7 = "oninput", "oninput" === l6 && u4[o7 = l6] && (o7 = "oninputCapture"), u4[o7] = i5;
            }
          }
          "select" == e6 && u4.multiple && Array.isArray(u4.value) && (u4.value = S3(t5.children).forEach(function(n8) {
            n8.props.selected = -1 != u4.value.indexOf(n8.props.value);
          })), "select" == e6 && null != u4.defaultValue && (u4.value = S3(t5.children).forEach(function(n8) {
            n8.props.selected = u4.multiple ? -1 != u4.defaultValue.indexOf(n8.props.value) : u4.defaultValue == n8.props.value;
          })), t5.class && !t5.className ? (u4.class = t5.class, Object.defineProperty(u4, "className", en)) : (t5.className && !t5.class || t5.class && t5.className) && (u4.class = u4.className = t5.className), n7.props = u4;
        }(n6), n6.$$typeof = B4, rn && rn(n6);
      };
      un = l4.__r;
      l4.__r = function(n6) {
        un && un(n6), tn = n6.__c;
      };
      on = l4.diffed;
      l4.diffed = function(n6) {
        on && on(n6);
        var t5 = n6.props, e6 = n6.__e;
        null != e6 && "textarea" === n6.type && "value" in t5 && t5.value !== e6.value && (e6.value = null == t5.value ? "" : t5.value), tn = null;
      };
      ln = { ReactCurrentDispatcher: { current: { readContext: function(n6) {
        return tn.__n[n6.__c].props.value;
      } } } };
      cn = "17.0.2";
      dn = function(n6, t5) {
        return n6(t5);
      };
      pn = function(n6, t5) {
        return n6(t5);
      };
      mn = k2;
      Sn = y3;
      Cn = { useState: h4, useId: V2, useReducer: s6, useEffect: p3, useLayoutEffect: y3, useInsertionEffect: Sn, useTransition: bn, useDeferredValue: _n, useSyncExternalStore: gn, startTransition: yn, useRef: _3, useImperativeHandle: A3, useMemo: F2, useCallback: T3, useContext: q2, useDebugValue: x3, version: "17.0.2", Children: O2, render: G2, hydrate: J, unmountComponentAtNode: hn, createPortal: z4, createElement: y2, createContext: G, createFactory: fn, cloneElement: sn, createRef: _2, Fragment: k2, isValidElement: an, findDOMNode: vn, Component: b2, PureComponent: w4, memo: x4, forwardRef: k4, flushSync: pn, unstable_batchedUpdates: dn, StrictMode: mn, Suspense: D2, SuspenseList: V3, lazy: M3, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ln };
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react/index.mjs
  var react_exports = {};
  __export(react_exports, {
    Children: () => O2,
    Component: () => b2,
    Fragment: () => k2,
    PureComponent: () => w4,
    StrictMode: () => mn,
    Suspense: () => D2,
    SuspenseList: () => V3,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => ln,
    cloneElement: () => sn,
    createContext: () => G,
    createElement: () => y2,
    createFactory: () => fn,
    createPortal: () => z4,
    createRef: () => _2,
    default: () => Cn,
    findDOMNode: () => vn,
    flushSync: () => pn,
    forwardRef: () => k4,
    hydrate: () => J,
    isValidElement: () => an,
    lazy: () => M3,
    memo: () => x4,
    render: () => G2,
    startTransition: () => yn,
    unmountComponentAtNode: () => hn,
    unstable_batchedUpdates: () => dn,
    useCallback: () => T3,
    useContext: () => q2,
    useDebugValue: () => x3,
    useDeferredValue: () => _n,
    useEffect: () => p3,
    useErrorBoundary: () => P3,
    useId: () => V2,
    useImperativeHandle: () => A3,
    useInsertionEffect: () => Sn,
    useLayoutEffect: () => y3,
    useMemo: () => F2,
    useReducer: () => s6,
    useRef: () => _3,
    useState: () => h4,
    useSyncExternalStore: () => gn,
    useTransition: () => bn,
    version: () => cn
  });
  var init_react = __esm({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react/index.mjs"() {
      init_compat_module();
      init_compat_module();
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_freeGlobal.js
  var require_freeGlobal = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_freeGlobal.js"(exports2, module2) {
      var freeGlobal2 = typeof global == "object" && global && global.Object === Object && global;
      module2.exports = freeGlobal2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_root.js
  var require_root = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_root.js"(exports2, module2) {
      var freeGlobal2 = require_freeGlobal();
      var freeSelf2 = typeof self == "object" && self && self.Object === Object && self;
      var root2 = freeGlobal2 || freeSelf2 || Function("return this")();
      module2.exports = root2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_Symbol.js
  var require_Symbol = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_Symbol.js"(exports2, module2) {
      var root2 = require_root();
      var Symbol3 = root2.Symbol;
      module2.exports = Symbol3;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_getRawTag.js
  var require_getRawTag = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_getRawTag.js"(exports2, module2) {
      var Symbol3 = require_Symbol();
      var objectProto16 = Object.prototype;
      var hasOwnProperty13 = objectProto16.hasOwnProperty;
      var nativeObjectToString3 = objectProto16.toString;
      var symToStringTag3 = Symbol3 ? Symbol3.toStringTag : void 0;
      function getRawTag2(value) {
        var isOwn = hasOwnProperty13.call(value, symToStringTag3), tag = value[symToStringTag3];
        try {
          value[symToStringTag3] = void 0;
          var unmasked = true;
        } catch (e6) {
        }
        var result = nativeObjectToString3.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag3] = tag;
          } else {
            delete value[symToStringTag3];
          }
        }
        return result;
      }
      module2.exports = getRawTag2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_objectToString.js
  var require_objectToString = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_objectToString.js"(exports2, module2) {
      var objectProto16 = Object.prototype;
      var nativeObjectToString3 = objectProto16.toString;
      function objectToString2(value) {
        return nativeObjectToString3.call(value);
      }
      module2.exports = objectToString2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseGetTag.js
  var require_baseGetTag = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseGetTag.js"(exports2, module2) {
      var Symbol3 = require_Symbol();
      var getRawTag2 = require_getRawTag();
      var objectToString2 = require_objectToString();
      var nullTag2 = "[object Null]";
      var undefinedTag2 = "[object Undefined]";
      var symToStringTag3 = Symbol3 ? Symbol3.toStringTag : void 0;
      function baseGetTag2(value) {
        if (value == null) {
          return value === void 0 ? undefinedTag2 : nullTag2;
        }
        return symToStringTag3 && symToStringTag3 in Object(value) ? getRawTag2(value) : objectToString2(value);
      }
      module2.exports = baseGetTag2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/isArray.js
  var require_isArray = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/isArray.js"(exports2, module2) {
      var isArray2 = Array.isArray;
      module2.exports = isArray2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/isObjectLike.js
  var require_isObjectLike = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/isObjectLike.js"(exports2, module2) {
      function isObjectLike2(value) {
        return value != null && typeof value == "object";
      }
      module2.exports = isObjectLike2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/isString.js
  var require_isString = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/isString.js"(exports2, module2) {
      var baseGetTag2 = require_baseGetTag();
      var isArray2 = require_isArray();
      var isObjectLike2 = require_isObjectLike();
      var stringTag3 = "[object String]";
      function isString(value) {
        return typeof value == "string" || !isArray2(value) && isObjectLike2(value) && baseGetTag2(value) == stringTag3;
      }
      module2.exports = isString;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_createBaseFor.js
  var require_createBaseFor = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_createBaseFor.js"(exports2, module2) {
      function createBaseFor2(fromRight) {
        return function(object, iteratee, keysFunc) {
          var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
          while (length--) {
            var key = props[fromRight ? length : ++index];
            if (iteratee(iterable[key], key, iterable) === false) {
              break;
            }
          }
          return object;
        };
      }
      module2.exports = createBaseFor2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseFor.js
  var require_baseFor = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseFor.js"(exports2, module2) {
      var createBaseFor2 = require_createBaseFor();
      var baseFor2 = createBaseFor2();
      module2.exports = baseFor2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseTimes.js
  var require_baseTimes = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseTimes.js"(exports2, module2) {
      function baseTimes2(n6, iteratee) {
        var index = -1, result = Array(n6);
        while (++index < n6) {
          result[index] = iteratee(index);
        }
        return result;
      }
      module2.exports = baseTimes2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseIsArguments.js
  var require_baseIsArguments = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseIsArguments.js"(exports2, module2) {
      var baseGetTag2 = require_baseGetTag();
      var isObjectLike2 = require_isObjectLike();
      var argsTag4 = "[object Arguments]";
      function baseIsArguments2(value) {
        return isObjectLike2(value) && baseGetTag2(value) == argsTag4;
      }
      module2.exports = baseIsArguments2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/isArguments.js
  var require_isArguments = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/isArguments.js"(exports2, module2) {
      var baseIsArguments2 = require_baseIsArguments();
      var isObjectLike2 = require_isObjectLike();
      var objectProto16 = Object.prototype;
      var hasOwnProperty13 = objectProto16.hasOwnProperty;
      var propertyIsEnumerable3 = objectProto16.propertyIsEnumerable;
      var isArguments2 = baseIsArguments2(function() {
        return arguments;
      }()) ? baseIsArguments2 : function(value) {
        return isObjectLike2(value) && hasOwnProperty13.call(value, "callee") && !propertyIsEnumerable3.call(value, "callee");
      };
      module2.exports = isArguments2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/stubFalse.js
  var require_stubFalse = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/stubFalse.js"(exports2, module2) {
      function stubFalse2() {
        return false;
      }
      module2.exports = stubFalse2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/isBuffer.js
  var require_isBuffer = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/isBuffer.js"(exports2, module2) {
      var root2 = require_root();
      var stubFalse2 = require_stubFalse();
      var freeExports4 = typeof exports2 == "object" && exports2 && !exports2.nodeType && exports2;
      var freeModule4 = freeExports4 && typeof module2 == "object" && module2 && !module2.nodeType && module2;
      var moduleExports4 = freeModule4 && freeModule4.exports === freeExports4;
      var Buffer4 = moduleExports4 ? root2.Buffer : void 0;
      var nativeIsBuffer2 = Buffer4 ? Buffer4.isBuffer : void 0;
      var isBuffer2 = nativeIsBuffer2 || stubFalse2;
      module2.exports = isBuffer2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_isIndex.js
  var require_isIndex = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_isIndex.js"(exports2, module2) {
      var MAX_SAFE_INTEGER3 = 9007199254740991;
      var reIsUint2 = /^(?:0|[1-9]\d*)$/;
      function isIndex2(value, length) {
        var type = typeof value;
        length = length == null ? MAX_SAFE_INTEGER3 : length;
        return !!length && (type == "number" || type != "symbol" && reIsUint2.test(value)) && (value > -1 && value % 1 == 0 && value < length);
      }
      module2.exports = isIndex2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/isLength.js
  var require_isLength = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/isLength.js"(exports2, module2) {
      var MAX_SAFE_INTEGER3 = 9007199254740991;
      function isLength2(value) {
        return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER3;
      }
      module2.exports = isLength2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseIsTypedArray.js
  var require_baseIsTypedArray = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseIsTypedArray.js"(exports2, module2) {
      var baseGetTag2 = require_baseGetTag();
      var isLength2 = require_isLength();
      var isObjectLike2 = require_isObjectLike();
      var argsTag4 = "[object Arguments]";
      var arrayTag3 = "[object Array]";
      var boolTag3 = "[object Boolean]";
      var dateTag3 = "[object Date]";
      var errorTag3 = "[object Error]";
      var funcTag3 = "[object Function]";
      var mapTag4 = "[object Map]";
      var numberTag3 = "[object Number]";
      var objectTag5 = "[object Object]";
      var regexpTag3 = "[object RegExp]";
      var setTag4 = "[object Set]";
      var stringTag3 = "[object String]";
      var weakMapTag3 = "[object WeakMap]";
      var arrayBufferTag3 = "[object ArrayBuffer]";
      var dataViewTag4 = "[object DataView]";
      var float32Tag2 = "[object Float32Array]";
      var float64Tag2 = "[object Float64Array]";
      var int8Tag2 = "[object Int8Array]";
      var int16Tag2 = "[object Int16Array]";
      var int32Tag2 = "[object Int32Array]";
      var uint8Tag2 = "[object Uint8Array]";
      var uint8ClampedTag2 = "[object Uint8ClampedArray]";
      var uint16Tag2 = "[object Uint16Array]";
      var uint32Tag2 = "[object Uint32Array]";
      var typedArrayTags2 = {};
      typedArrayTags2[float32Tag2] = typedArrayTags2[float64Tag2] = typedArrayTags2[int8Tag2] = typedArrayTags2[int16Tag2] = typedArrayTags2[int32Tag2] = typedArrayTags2[uint8Tag2] = typedArrayTags2[uint8ClampedTag2] = typedArrayTags2[uint16Tag2] = typedArrayTags2[uint32Tag2] = true;
      typedArrayTags2[argsTag4] = typedArrayTags2[arrayTag3] = typedArrayTags2[arrayBufferTag3] = typedArrayTags2[boolTag3] = typedArrayTags2[dataViewTag4] = typedArrayTags2[dateTag3] = typedArrayTags2[errorTag3] = typedArrayTags2[funcTag3] = typedArrayTags2[mapTag4] = typedArrayTags2[numberTag3] = typedArrayTags2[objectTag5] = typedArrayTags2[regexpTag3] = typedArrayTags2[setTag4] = typedArrayTags2[stringTag3] = typedArrayTags2[weakMapTag3] = false;
      function baseIsTypedArray2(value) {
        return isObjectLike2(value) && isLength2(value.length) && !!typedArrayTags2[baseGetTag2(value)];
      }
      module2.exports = baseIsTypedArray2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseUnary.js
  var require_baseUnary = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseUnary.js"(exports2, module2) {
      function baseUnary2(func) {
        return function(value) {
          return func(value);
        };
      }
      module2.exports = baseUnary2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_nodeUtil.js
  var require_nodeUtil = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_nodeUtil.js"(exports2, module2) {
      var freeGlobal2 = require_freeGlobal();
      var freeExports4 = typeof exports2 == "object" && exports2 && !exports2.nodeType && exports2;
      var freeModule4 = freeExports4 && typeof module2 == "object" && module2 && !module2.nodeType && module2;
      var moduleExports4 = freeModule4 && freeModule4.exports === freeExports4;
      var freeProcess2 = moduleExports4 && freeGlobal2.process;
      var nodeUtil2 = function() {
        try {
          var types = freeModule4 && freeModule4.require && freeModule4.require("util").types;
          if (types) {
            return types;
          }
          return freeProcess2 && freeProcess2.binding && freeProcess2.binding("util");
        } catch (e6) {
        }
      }();
      module2.exports = nodeUtil2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/isTypedArray.js
  var require_isTypedArray = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/isTypedArray.js"(exports2, module2) {
      var baseIsTypedArray2 = require_baseIsTypedArray();
      var baseUnary2 = require_baseUnary();
      var nodeUtil2 = require_nodeUtil();
      var nodeIsTypedArray2 = nodeUtil2 && nodeUtil2.isTypedArray;
      var isTypedArray2 = nodeIsTypedArray2 ? baseUnary2(nodeIsTypedArray2) : baseIsTypedArray2;
      module2.exports = isTypedArray2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_arrayLikeKeys.js
  var require_arrayLikeKeys = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_arrayLikeKeys.js"(exports2, module2) {
      var baseTimes2 = require_baseTimes();
      var isArguments2 = require_isArguments();
      var isArray2 = require_isArray();
      var isBuffer2 = require_isBuffer();
      var isIndex2 = require_isIndex();
      var isTypedArray2 = require_isTypedArray();
      var objectProto16 = Object.prototype;
      var hasOwnProperty13 = objectProto16.hasOwnProperty;
      function arrayLikeKeys2(value, inherited) {
        var isArr = isArray2(value), isArg = !isArr && isArguments2(value), isBuff = !isArr && !isArg && isBuffer2(value), isType = !isArr && !isArg && !isBuff && isTypedArray2(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes2(value.length, String) : [], length = result.length;
        for (var key in value) {
          if ((inherited || hasOwnProperty13.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
          (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
          isIndex2(key, length)))) {
            result.push(key);
          }
        }
        return result;
      }
      module2.exports = arrayLikeKeys2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_isPrototype.js
  var require_isPrototype = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_isPrototype.js"(exports2, module2) {
      var objectProto16 = Object.prototype;
      function isPrototype2(value) {
        var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto16;
        return value === proto;
      }
      module2.exports = isPrototype2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_overArg.js
  var require_overArg = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_overArg.js"(exports2, module2) {
      function overArg2(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }
      module2.exports = overArg2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_nativeKeys.js
  var require_nativeKeys = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_nativeKeys.js"(exports2, module2) {
      var overArg2 = require_overArg();
      var nativeKeys2 = overArg2(Object.keys, Object);
      module2.exports = nativeKeys2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseKeys.js
  var require_baseKeys = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseKeys.js"(exports2, module2) {
      var isPrototype2 = require_isPrototype();
      var nativeKeys2 = require_nativeKeys();
      var objectProto16 = Object.prototype;
      var hasOwnProperty13 = objectProto16.hasOwnProperty;
      function baseKeys2(object) {
        if (!isPrototype2(object)) {
          return nativeKeys2(object);
        }
        var result = [];
        for (var key in Object(object)) {
          if (hasOwnProperty13.call(object, key) && key != "constructor") {
            result.push(key);
          }
        }
        return result;
      }
      module2.exports = baseKeys2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/isObject.js
  var require_isObject = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/isObject.js"(exports2, module2) {
      function isObject2(value) {
        var type = typeof value;
        return value != null && (type == "object" || type == "function");
      }
      module2.exports = isObject2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/isFunction.js
  var require_isFunction = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/isFunction.js"(exports2, module2) {
      var baseGetTag2 = require_baseGetTag();
      var isObject2 = require_isObject();
      var asyncTag2 = "[object AsyncFunction]";
      var funcTag3 = "[object Function]";
      var genTag2 = "[object GeneratorFunction]";
      var proxyTag2 = "[object Proxy]";
      function isFunction3(value) {
        if (!isObject2(value)) {
          return false;
        }
        var tag = baseGetTag2(value);
        return tag == funcTag3 || tag == genTag2 || tag == asyncTag2 || tag == proxyTag2;
      }
      module2.exports = isFunction3;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/isArrayLike.js
  var require_isArrayLike = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/isArrayLike.js"(exports2, module2) {
      var isFunction3 = require_isFunction();
      var isLength2 = require_isLength();
      function isArrayLike2(value) {
        return value != null && isLength2(value.length) && !isFunction3(value);
      }
      module2.exports = isArrayLike2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/keys.js
  var require_keys = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/keys.js"(exports2, module2) {
      var arrayLikeKeys2 = require_arrayLikeKeys();
      var baseKeys2 = require_baseKeys();
      var isArrayLike2 = require_isArrayLike();
      function keys2(object) {
        return isArrayLike2(object) ? arrayLikeKeys2(object) : baseKeys2(object);
      }
      module2.exports = keys2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseForOwn.js
  var require_baseForOwn = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseForOwn.js"(exports2, module2) {
      var baseFor2 = require_baseFor();
      var keys2 = require_keys();
      function baseForOwn2(object, iteratee) {
        return object && baseFor2(object, iteratee, keys2);
      }
      module2.exports = baseForOwn2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/identity.js
  var require_identity = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/identity.js"(exports2, module2) {
      function identity2(value) {
        return value;
      }
      module2.exports = identity2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_castFunction.js
  var require_castFunction = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_castFunction.js"(exports2, module2) {
      var identity2 = require_identity();
      function castFunction2(value) {
        return typeof value == "function" ? value : identity2;
      }
      module2.exports = castFunction2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/forOwn.js
  var require_forOwn = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/forOwn.js"(exports2, module2) {
      var baseForOwn2 = require_baseForOwn();
      var castFunction2 = require_castFunction();
      function forOwn(object, iteratee) {
        return object && baseForOwn2(object, castFunction2(iteratee));
      }
      module2.exports = forOwn;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_getPrototype.js
  var require_getPrototype = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_getPrototype.js"(exports2, module2) {
      var overArg2 = require_overArg();
      var getPrototype2 = overArg2(Object.getPrototypeOf, Object);
      module2.exports = getPrototype2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/isPlainObject.js
  var require_isPlainObject = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/isPlainObject.js"(exports2, module2) {
      var baseGetTag2 = require_baseGetTag();
      var getPrototype2 = require_getPrototype();
      var isObjectLike2 = require_isObjectLike();
      var objectTag5 = "[object Object]";
      var funcProto4 = Function.prototype;
      var objectProto16 = Object.prototype;
      var funcToString4 = funcProto4.toString;
      var hasOwnProperty13 = objectProto16.hasOwnProperty;
      var objectCtorString2 = funcToString4.call(Object);
      function isPlainObject2(value) {
        if (!isObjectLike2(value) || baseGetTag2(value) != objectTag5) {
          return false;
        }
        var proto = getPrototype2(value);
        if (proto === null) {
          return true;
        }
        var Ctor = hasOwnProperty13.call(proto, "constructor") && proto.constructor;
        return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString4.call(Ctor) == objectCtorString2;
      }
      module2.exports = isPlainObject2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_arrayMap.js
  var require_arrayMap = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_arrayMap.js"(exports2, module2) {
      function arrayMap2(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length, result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }
      module2.exports = arrayMap2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_listCacheClear.js
  var require_listCacheClear = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_listCacheClear.js"(exports2, module2) {
      function listCacheClear2() {
        this.__data__ = [];
        this.size = 0;
      }
      module2.exports = listCacheClear2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/eq.js
  var require_eq = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/eq.js"(exports2, module2) {
      function eq2(value, other) {
        return value === other || value !== value && other !== other;
      }
      module2.exports = eq2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_assocIndexOf.js
  var require_assocIndexOf = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_assocIndexOf.js"(exports2, module2) {
      var eq2 = require_eq();
      function assocIndexOf2(array, key) {
        var length = array.length;
        while (length--) {
          if (eq2(array[length][0], key)) {
            return length;
          }
        }
        return -1;
      }
      module2.exports = assocIndexOf2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_listCacheDelete.js
  var require_listCacheDelete = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_listCacheDelete.js"(exports2, module2) {
      var assocIndexOf2 = require_assocIndexOf();
      var arrayProto2 = Array.prototype;
      var splice2 = arrayProto2.splice;
      function listCacheDelete2(key) {
        var data = this.__data__, index = assocIndexOf2(data, key);
        if (index < 0) {
          return false;
        }
        var lastIndex = data.length - 1;
        if (index == lastIndex) {
          data.pop();
        } else {
          splice2.call(data, index, 1);
        }
        --this.size;
        return true;
      }
      module2.exports = listCacheDelete2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_listCacheGet.js
  var require_listCacheGet = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_listCacheGet.js"(exports2, module2) {
      var assocIndexOf2 = require_assocIndexOf();
      function listCacheGet2(key) {
        var data = this.__data__, index = assocIndexOf2(data, key);
        return index < 0 ? void 0 : data[index][1];
      }
      module2.exports = listCacheGet2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_listCacheHas.js
  var require_listCacheHas = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_listCacheHas.js"(exports2, module2) {
      var assocIndexOf2 = require_assocIndexOf();
      function listCacheHas2(key) {
        return assocIndexOf2(this.__data__, key) > -1;
      }
      module2.exports = listCacheHas2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_listCacheSet.js
  var require_listCacheSet = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_listCacheSet.js"(exports2, module2) {
      var assocIndexOf2 = require_assocIndexOf();
      function listCacheSet2(key, value) {
        var data = this.__data__, index = assocIndexOf2(data, key);
        if (index < 0) {
          ++this.size;
          data.push([key, value]);
        } else {
          data[index][1] = value;
        }
        return this;
      }
      module2.exports = listCacheSet2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_ListCache.js
  var require_ListCache = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_ListCache.js"(exports2, module2) {
      var listCacheClear2 = require_listCacheClear();
      var listCacheDelete2 = require_listCacheDelete();
      var listCacheGet2 = require_listCacheGet();
      var listCacheHas2 = require_listCacheHas();
      var listCacheSet2 = require_listCacheSet();
      function ListCache2(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      ListCache2.prototype.clear = listCacheClear2;
      ListCache2.prototype["delete"] = listCacheDelete2;
      ListCache2.prototype.get = listCacheGet2;
      ListCache2.prototype.has = listCacheHas2;
      ListCache2.prototype.set = listCacheSet2;
      module2.exports = ListCache2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_stackClear.js
  var require_stackClear = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_stackClear.js"(exports2, module2) {
      var ListCache2 = require_ListCache();
      function stackClear2() {
        this.__data__ = new ListCache2();
        this.size = 0;
      }
      module2.exports = stackClear2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_stackDelete.js
  var require_stackDelete = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_stackDelete.js"(exports2, module2) {
      function stackDelete2(key) {
        var data = this.__data__, result = data["delete"](key);
        this.size = data.size;
        return result;
      }
      module2.exports = stackDelete2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_stackGet.js
  var require_stackGet = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_stackGet.js"(exports2, module2) {
      function stackGet2(key) {
        return this.__data__.get(key);
      }
      module2.exports = stackGet2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_stackHas.js
  var require_stackHas = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_stackHas.js"(exports2, module2) {
      function stackHas2(key) {
        return this.__data__.has(key);
      }
      module2.exports = stackHas2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_coreJsData.js
  var require_coreJsData = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_coreJsData.js"(exports2, module2) {
      var root2 = require_root();
      var coreJsData2 = root2["__core-js_shared__"];
      module2.exports = coreJsData2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_isMasked.js
  var require_isMasked = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_isMasked.js"(exports2, module2) {
      var coreJsData2 = require_coreJsData();
      var maskSrcKey2 = function() {
        var uid = /[^.]+$/.exec(coreJsData2 && coreJsData2.keys && coreJsData2.keys.IE_PROTO || "");
        return uid ? "Symbol(src)_1." + uid : "";
      }();
      function isMasked2(func) {
        return !!maskSrcKey2 && maskSrcKey2 in func;
      }
      module2.exports = isMasked2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_toSource.js
  var require_toSource = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_toSource.js"(exports2, module2) {
      var funcProto4 = Function.prototype;
      var funcToString4 = funcProto4.toString;
      function toSource2(func) {
        if (func != null) {
          try {
            return funcToString4.call(func);
          } catch (e6) {
          }
          try {
            return func + "";
          } catch (e6) {
          }
        }
        return "";
      }
      module2.exports = toSource2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseIsNative.js
  var require_baseIsNative = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseIsNative.js"(exports2, module2) {
      var isFunction3 = require_isFunction();
      var isMasked2 = require_isMasked();
      var isObject2 = require_isObject();
      var toSource2 = require_toSource();
      var reRegExpChar2 = /[\\^$.*+?()[\]{}|]/g;
      var reIsHostCtor2 = /^\[object .+?Constructor\]$/;
      var funcProto4 = Function.prototype;
      var objectProto16 = Object.prototype;
      var funcToString4 = funcProto4.toString;
      var hasOwnProperty13 = objectProto16.hasOwnProperty;
      var reIsNative2 = RegExp(
        "^" + funcToString4.call(hasOwnProperty13).replace(reRegExpChar2, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      );
      function baseIsNative2(value) {
        if (!isObject2(value) || isMasked2(value)) {
          return false;
        }
        var pattern = isFunction3(value) ? reIsNative2 : reIsHostCtor2;
        return pattern.test(toSource2(value));
      }
      module2.exports = baseIsNative2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_getValue.js
  var require_getValue = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_getValue.js"(exports2, module2) {
      function getValue2(object, key) {
        return object == null ? void 0 : object[key];
      }
      module2.exports = getValue2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_getNative.js
  var require_getNative = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_getNative.js"(exports2, module2) {
      var baseIsNative2 = require_baseIsNative();
      var getValue2 = require_getValue();
      function getNative2(object, key) {
        var value = getValue2(object, key);
        return baseIsNative2(value) ? value : void 0;
      }
      module2.exports = getNative2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_Map.js
  var require_Map = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_Map.js"(exports2, module2) {
      var getNative2 = require_getNative();
      var root2 = require_root();
      var Map3 = getNative2(root2, "Map");
      module2.exports = Map3;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_nativeCreate.js
  var require_nativeCreate = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_nativeCreate.js"(exports2, module2) {
      var getNative2 = require_getNative();
      var nativeCreate2 = getNative2(Object, "create");
      module2.exports = nativeCreate2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_hashClear.js
  var require_hashClear = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_hashClear.js"(exports2, module2) {
      var nativeCreate2 = require_nativeCreate();
      function hashClear2() {
        this.__data__ = nativeCreate2 ? nativeCreate2(null) : {};
        this.size = 0;
      }
      module2.exports = hashClear2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_hashDelete.js
  var require_hashDelete = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_hashDelete.js"(exports2, module2) {
      function hashDelete2(key) {
        var result = this.has(key) && delete this.__data__[key];
        this.size -= result ? 1 : 0;
        return result;
      }
      module2.exports = hashDelete2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_hashGet.js
  var require_hashGet = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_hashGet.js"(exports2, module2) {
      var nativeCreate2 = require_nativeCreate();
      var HASH_UNDEFINED4 = "__lodash_hash_undefined__";
      var objectProto16 = Object.prototype;
      var hasOwnProperty13 = objectProto16.hasOwnProperty;
      function hashGet2(key) {
        var data = this.__data__;
        if (nativeCreate2) {
          var result = data[key];
          return result === HASH_UNDEFINED4 ? void 0 : result;
        }
        return hasOwnProperty13.call(data, key) ? data[key] : void 0;
      }
      module2.exports = hashGet2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_hashHas.js
  var require_hashHas = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_hashHas.js"(exports2, module2) {
      var nativeCreate2 = require_nativeCreate();
      var objectProto16 = Object.prototype;
      var hasOwnProperty13 = objectProto16.hasOwnProperty;
      function hashHas2(key) {
        var data = this.__data__;
        return nativeCreate2 ? data[key] !== void 0 : hasOwnProperty13.call(data, key);
      }
      module2.exports = hashHas2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_hashSet.js
  var require_hashSet = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_hashSet.js"(exports2, module2) {
      var nativeCreate2 = require_nativeCreate();
      var HASH_UNDEFINED4 = "__lodash_hash_undefined__";
      function hashSet2(key, value) {
        var data = this.__data__;
        this.size += this.has(key) ? 0 : 1;
        data[key] = nativeCreate2 && value === void 0 ? HASH_UNDEFINED4 : value;
        return this;
      }
      module2.exports = hashSet2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_Hash.js
  var require_Hash = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_Hash.js"(exports2, module2) {
      var hashClear2 = require_hashClear();
      var hashDelete2 = require_hashDelete();
      var hashGet2 = require_hashGet();
      var hashHas2 = require_hashHas();
      var hashSet2 = require_hashSet();
      function Hash2(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      Hash2.prototype.clear = hashClear2;
      Hash2.prototype["delete"] = hashDelete2;
      Hash2.prototype.get = hashGet2;
      Hash2.prototype.has = hashHas2;
      Hash2.prototype.set = hashSet2;
      module2.exports = Hash2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_mapCacheClear.js
  var require_mapCacheClear = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_mapCacheClear.js"(exports2, module2) {
      var Hash2 = require_Hash();
      var ListCache2 = require_ListCache();
      var Map3 = require_Map();
      function mapCacheClear2() {
        this.size = 0;
        this.__data__ = {
          "hash": new Hash2(),
          "map": new (Map3 || ListCache2)(),
          "string": new Hash2()
        };
      }
      module2.exports = mapCacheClear2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_isKeyable.js
  var require_isKeyable = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_isKeyable.js"(exports2, module2) {
      function isKeyable2(value) {
        var type = typeof value;
        return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
      }
      module2.exports = isKeyable2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_getMapData.js
  var require_getMapData = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_getMapData.js"(exports2, module2) {
      var isKeyable2 = require_isKeyable();
      function getMapData2(map2, key) {
        var data = map2.__data__;
        return isKeyable2(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
      }
      module2.exports = getMapData2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_mapCacheDelete.js
  var require_mapCacheDelete = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_mapCacheDelete.js"(exports2, module2) {
      var getMapData2 = require_getMapData();
      function mapCacheDelete2(key) {
        var result = getMapData2(this, key)["delete"](key);
        this.size -= result ? 1 : 0;
        return result;
      }
      module2.exports = mapCacheDelete2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_mapCacheGet.js
  var require_mapCacheGet = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_mapCacheGet.js"(exports2, module2) {
      var getMapData2 = require_getMapData();
      function mapCacheGet2(key) {
        return getMapData2(this, key).get(key);
      }
      module2.exports = mapCacheGet2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_mapCacheHas.js
  var require_mapCacheHas = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_mapCacheHas.js"(exports2, module2) {
      var getMapData2 = require_getMapData();
      function mapCacheHas2(key) {
        return getMapData2(this, key).has(key);
      }
      module2.exports = mapCacheHas2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_mapCacheSet.js
  var require_mapCacheSet = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_mapCacheSet.js"(exports2, module2) {
      var getMapData2 = require_getMapData();
      function mapCacheSet2(key, value) {
        var data = getMapData2(this, key), size = data.size;
        data.set(key, value);
        this.size += data.size == size ? 0 : 1;
        return this;
      }
      module2.exports = mapCacheSet2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_MapCache.js
  var require_MapCache = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_MapCache.js"(exports2, module2) {
      var mapCacheClear2 = require_mapCacheClear();
      var mapCacheDelete2 = require_mapCacheDelete();
      var mapCacheGet2 = require_mapCacheGet();
      var mapCacheHas2 = require_mapCacheHas();
      var mapCacheSet2 = require_mapCacheSet();
      function MapCache2(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      MapCache2.prototype.clear = mapCacheClear2;
      MapCache2.prototype["delete"] = mapCacheDelete2;
      MapCache2.prototype.get = mapCacheGet2;
      MapCache2.prototype.has = mapCacheHas2;
      MapCache2.prototype.set = mapCacheSet2;
      module2.exports = MapCache2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_stackSet.js
  var require_stackSet = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_stackSet.js"(exports2, module2) {
      var ListCache2 = require_ListCache();
      var Map3 = require_Map();
      var MapCache2 = require_MapCache();
      var LARGE_ARRAY_SIZE2 = 200;
      function stackSet2(key, value) {
        var data = this.__data__;
        if (data instanceof ListCache2) {
          var pairs = data.__data__;
          if (!Map3 || pairs.length < LARGE_ARRAY_SIZE2 - 1) {
            pairs.push([key, value]);
            this.size = ++data.size;
            return this;
          }
          data = this.__data__ = new MapCache2(pairs);
        }
        data.set(key, value);
        this.size = data.size;
        return this;
      }
      module2.exports = stackSet2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_Stack.js
  var require_Stack = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_Stack.js"(exports2, module2) {
      var ListCache2 = require_ListCache();
      var stackClear2 = require_stackClear();
      var stackDelete2 = require_stackDelete();
      var stackGet2 = require_stackGet();
      var stackHas2 = require_stackHas();
      var stackSet2 = require_stackSet();
      function Stack2(entries) {
        var data = this.__data__ = new ListCache2(entries);
        this.size = data.size;
      }
      Stack2.prototype.clear = stackClear2;
      Stack2.prototype["delete"] = stackDelete2;
      Stack2.prototype.get = stackGet2;
      Stack2.prototype.has = stackHas2;
      Stack2.prototype.set = stackSet2;
      module2.exports = Stack2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_setCacheAdd.js
  var require_setCacheAdd = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_setCacheAdd.js"(exports2, module2) {
      var HASH_UNDEFINED4 = "__lodash_hash_undefined__";
      function setCacheAdd2(value) {
        this.__data__.set(value, HASH_UNDEFINED4);
        return this;
      }
      module2.exports = setCacheAdd2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_setCacheHas.js
  var require_setCacheHas = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_setCacheHas.js"(exports2, module2) {
      function setCacheHas2(value) {
        return this.__data__.has(value);
      }
      module2.exports = setCacheHas2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_SetCache.js
  var require_SetCache = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_SetCache.js"(exports2, module2) {
      var MapCache2 = require_MapCache();
      var setCacheAdd2 = require_setCacheAdd();
      var setCacheHas2 = require_setCacheHas();
      function SetCache2(values) {
        var index = -1, length = values == null ? 0 : values.length;
        this.__data__ = new MapCache2();
        while (++index < length) {
          this.add(values[index]);
        }
      }
      SetCache2.prototype.add = SetCache2.prototype.push = setCacheAdd2;
      SetCache2.prototype.has = setCacheHas2;
      module2.exports = SetCache2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_arraySome.js
  var require_arraySome = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_arraySome.js"(exports2, module2) {
      function arraySome2(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (predicate(array[index], index, array)) {
            return true;
          }
        }
        return false;
      }
      module2.exports = arraySome2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_cacheHas.js
  var require_cacheHas = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_cacheHas.js"(exports2, module2) {
      function cacheHas2(cache, key) {
        return cache.has(key);
      }
      module2.exports = cacheHas2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_equalArrays.js
  var require_equalArrays = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_equalArrays.js"(exports2, module2) {
      var SetCache2 = require_SetCache();
      var arraySome2 = require_arraySome();
      var cacheHas2 = require_cacheHas();
      var COMPARE_PARTIAL_FLAG7 = 1;
      var COMPARE_UNORDERED_FLAG5 = 2;
      function equalArrays2(array, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG7, arrLength = array.length, othLength = other.length;
        if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
          return false;
        }
        var arrStacked = stack.get(array);
        var othStacked = stack.get(other);
        if (arrStacked && othStacked) {
          return arrStacked == other && othStacked == array;
        }
        var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG5 ? new SetCache2() : void 0;
        stack.set(array, other);
        stack.set(other, array);
        while (++index < arrLength) {
          var arrValue = array[index], othValue = other[index];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
          }
          if (compared !== void 0) {
            if (compared) {
              continue;
            }
            result = false;
            break;
          }
          if (seen) {
            if (!arraySome2(other, function(othValue2, othIndex) {
              if (!cacheHas2(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                return seen.push(othIndex);
              }
            })) {
              result = false;
              break;
            }
          } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            result = false;
            break;
          }
        }
        stack["delete"](array);
        stack["delete"](other);
        return result;
      }
      module2.exports = equalArrays2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_Uint8Array.js
  var require_Uint8Array = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_Uint8Array.js"(exports2, module2) {
      var root2 = require_root();
      var Uint8Array3 = root2.Uint8Array;
      module2.exports = Uint8Array3;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_mapToArray.js
  var require_mapToArray = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_mapToArray.js"(exports2, module2) {
      function mapToArray2(map2) {
        var index = -1, result = Array(map2.size);
        map2.forEach(function(value, key) {
          result[++index] = [key, value];
        });
        return result;
      }
      module2.exports = mapToArray2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_setToArray.js
  var require_setToArray = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_setToArray.js"(exports2, module2) {
      function setToArray2(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = value;
        });
        return result;
      }
      module2.exports = setToArray2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_equalByTag.js
  var require_equalByTag = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_equalByTag.js"(exports2, module2) {
      var Symbol3 = require_Symbol();
      var Uint8Array3 = require_Uint8Array();
      var eq2 = require_eq();
      var equalArrays2 = require_equalArrays();
      var mapToArray2 = require_mapToArray();
      var setToArray2 = require_setToArray();
      var COMPARE_PARTIAL_FLAG7 = 1;
      var COMPARE_UNORDERED_FLAG5 = 2;
      var boolTag3 = "[object Boolean]";
      var dateTag3 = "[object Date]";
      var errorTag3 = "[object Error]";
      var mapTag4 = "[object Map]";
      var numberTag3 = "[object Number]";
      var regexpTag3 = "[object RegExp]";
      var setTag4 = "[object Set]";
      var stringTag3 = "[object String]";
      var symbolTag3 = "[object Symbol]";
      var arrayBufferTag3 = "[object ArrayBuffer]";
      var dataViewTag4 = "[object DataView]";
      var symbolProto3 = Symbol3 ? Symbol3.prototype : void 0;
      var symbolValueOf2 = symbolProto3 ? symbolProto3.valueOf : void 0;
      function equalByTag2(object, other, tag, bitmask, customizer, equalFunc, stack) {
        switch (tag) {
          case dataViewTag4:
            if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
              return false;
            }
            object = object.buffer;
            other = other.buffer;
          case arrayBufferTag3:
            if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array3(object), new Uint8Array3(other))) {
              return false;
            }
            return true;
          case boolTag3:
          case dateTag3:
          case numberTag3:
            return eq2(+object, +other);
          case errorTag3:
            return object.name == other.name && object.message == other.message;
          case regexpTag3:
          case stringTag3:
            return object == other + "";
          case mapTag4:
            var convert = mapToArray2;
          case setTag4:
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG7;
            convert || (convert = setToArray2);
            if (object.size != other.size && !isPartial) {
              return false;
            }
            var stacked = stack.get(object);
            if (stacked) {
              return stacked == other;
            }
            bitmask |= COMPARE_UNORDERED_FLAG5;
            stack.set(object, other);
            var result = equalArrays2(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
            stack["delete"](object);
            return result;
          case symbolTag3:
            if (symbolValueOf2) {
              return symbolValueOf2.call(object) == symbolValueOf2.call(other);
            }
        }
        return false;
      }
      module2.exports = equalByTag2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_arrayPush.js
  var require_arrayPush = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_arrayPush.js"(exports2, module2) {
      function arrayPush2(array, values) {
        var index = -1, length = values.length, offset = array.length;
        while (++index < length) {
          array[offset + index] = values[index];
        }
        return array;
      }
      module2.exports = arrayPush2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseGetAllKeys.js
  var require_baseGetAllKeys = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseGetAllKeys.js"(exports2, module2) {
      var arrayPush2 = require_arrayPush();
      var isArray2 = require_isArray();
      function baseGetAllKeys2(object, keysFunc, symbolsFunc) {
        var result = keysFunc(object);
        return isArray2(object) ? result : arrayPush2(result, symbolsFunc(object));
      }
      module2.exports = baseGetAllKeys2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_arrayFilter.js
  var require_arrayFilter = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_arrayFilter.js"(exports2, module2) {
      function arrayFilter2(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result[resIndex++] = value;
          }
        }
        return result;
      }
      module2.exports = arrayFilter2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/stubArray.js
  var require_stubArray = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/stubArray.js"(exports2, module2) {
      function stubArray2() {
        return [];
      }
      module2.exports = stubArray2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_getSymbols.js
  var require_getSymbols = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_getSymbols.js"(exports2, module2) {
      var arrayFilter2 = require_arrayFilter();
      var stubArray2 = require_stubArray();
      var objectProto16 = Object.prototype;
      var propertyIsEnumerable3 = objectProto16.propertyIsEnumerable;
      var nativeGetSymbols2 = Object.getOwnPropertySymbols;
      var getSymbols2 = !nativeGetSymbols2 ? stubArray2 : function(object) {
        if (object == null) {
          return [];
        }
        object = Object(object);
        return arrayFilter2(nativeGetSymbols2(object), function(symbol) {
          return propertyIsEnumerable3.call(object, symbol);
        });
      };
      module2.exports = getSymbols2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_getAllKeys.js
  var require_getAllKeys = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_getAllKeys.js"(exports2, module2) {
      var baseGetAllKeys2 = require_baseGetAllKeys();
      var getSymbols2 = require_getSymbols();
      var keys2 = require_keys();
      function getAllKeys2(object) {
        return baseGetAllKeys2(object, keys2, getSymbols2);
      }
      module2.exports = getAllKeys2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_equalObjects.js
  var require_equalObjects = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_equalObjects.js"(exports2, module2) {
      var getAllKeys2 = require_getAllKeys();
      var COMPARE_PARTIAL_FLAG7 = 1;
      var objectProto16 = Object.prototype;
      var hasOwnProperty13 = objectProto16.hasOwnProperty;
      function equalObjects2(object, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG7, objProps = getAllKeys2(object), objLength = objProps.length, othProps = getAllKeys2(other), othLength = othProps.length;
        if (objLength != othLength && !isPartial) {
          return false;
        }
        var index = objLength;
        while (index--) {
          var key = objProps[index];
          if (!(isPartial ? key in other : hasOwnProperty13.call(other, key))) {
            return false;
          }
        }
        var objStacked = stack.get(object);
        var othStacked = stack.get(other);
        if (objStacked && othStacked) {
          return objStacked == other && othStacked == object;
        }
        var result = true;
        stack.set(object, other);
        stack.set(other, object);
        var skipCtor = isPartial;
        while (++index < objLength) {
          key = objProps[index];
          var objValue = object[key], othValue = other[key];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
          }
          if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
            result = false;
            break;
          }
          skipCtor || (skipCtor = key == "constructor");
        }
        if (result && !skipCtor) {
          var objCtor = object.constructor, othCtor = other.constructor;
          if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
            result = false;
          }
        }
        stack["delete"](object);
        stack["delete"](other);
        return result;
      }
      module2.exports = equalObjects2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_DataView.js
  var require_DataView = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_DataView.js"(exports2, module2) {
      var getNative2 = require_getNative();
      var root2 = require_root();
      var DataView2 = getNative2(root2, "DataView");
      module2.exports = DataView2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_Promise.js
  var require_Promise = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_Promise.js"(exports2, module2) {
      var getNative2 = require_getNative();
      var root2 = require_root();
      var Promise3 = getNative2(root2, "Promise");
      module2.exports = Promise3;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_Set.js
  var require_Set = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_Set.js"(exports2, module2) {
      var getNative2 = require_getNative();
      var root2 = require_root();
      var Set3 = getNative2(root2, "Set");
      module2.exports = Set3;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_WeakMap.js
  var require_WeakMap = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_WeakMap.js"(exports2, module2) {
      var getNative2 = require_getNative();
      var root2 = require_root();
      var WeakMap3 = getNative2(root2, "WeakMap");
      module2.exports = WeakMap3;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_getTag.js
  var require_getTag = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_getTag.js"(exports2, module2) {
      var DataView2 = require_DataView();
      var Map3 = require_Map();
      var Promise3 = require_Promise();
      var Set3 = require_Set();
      var WeakMap3 = require_WeakMap();
      var baseGetTag2 = require_baseGetTag();
      var toSource2 = require_toSource();
      var mapTag4 = "[object Map]";
      var objectTag5 = "[object Object]";
      var promiseTag2 = "[object Promise]";
      var setTag4 = "[object Set]";
      var weakMapTag3 = "[object WeakMap]";
      var dataViewTag4 = "[object DataView]";
      var dataViewCtorString2 = toSource2(DataView2);
      var mapCtorString2 = toSource2(Map3);
      var promiseCtorString2 = toSource2(Promise3);
      var setCtorString2 = toSource2(Set3);
      var weakMapCtorString2 = toSource2(WeakMap3);
      var getTag2 = baseGetTag2;
      if (DataView2 && getTag2(new DataView2(new ArrayBuffer(1))) != dataViewTag4 || Map3 && getTag2(new Map3()) != mapTag4 || Promise3 && getTag2(Promise3.resolve()) != promiseTag2 || Set3 && getTag2(new Set3()) != setTag4 || WeakMap3 && getTag2(new WeakMap3()) != weakMapTag3) {
        getTag2 = function(value) {
          var result = baseGetTag2(value), Ctor = result == objectTag5 ? value.constructor : void 0, ctorString = Ctor ? toSource2(Ctor) : "";
          if (ctorString) {
            switch (ctorString) {
              case dataViewCtorString2:
                return dataViewTag4;
              case mapCtorString2:
                return mapTag4;
              case promiseCtorString2:
                return promiseTag2;
              case setCtorString2:
                return setTag4;
              case weakMapCtorString2:
                return weakMapTag3;
            }
          }
          return result;
        };
      }
      module2.exports = getTag2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseIsEqualDeep.js
  var require_baseIsEqualDeep = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseIsEqualDeep.js"(exports2, module2) {
      var Stack2 = require_Stack();
      var equalArrays2 = require_equalArrays();
      var equalByTag2 = require_equalByTag();
      var equalObjects2 = require_equalObjects();
      var getTag2 = require_getTag();
      var isArray2 = require_isArray();
      var isBuffer2 = require_isBuffer();
      var isTypedArray2 = require_isTypedArray();
      var COMPARE_PARTIAL_FLAG7 = 1;
      var argsTag4 = "[object Arguments]";
      var arrayTag3 = "[object Array]";
      var objectTag5 = "[object Object]";
      var objectProto16 = Object.prototype;
      var hasOwnProperty13 = objectProto16.hasOwnProperty;
      function baseIsEqualDeep2(object, other, bitmask, customizer, equalFunc, stack) {
        var objIsArr = isArray2(object), othIsArr = isArray2(other), objTag = objIsArr ? arrayTag3 : getTag2(object), othTag = othIsArr ? arrayTag3 : getTag2(other);
        objTag = objTag == argsTag4 ? objectTag5 : objTag;
        othTag = othTag == argsTag4 ? objectTag5 : othTag;
        var objIsObj = objTag == objectTag5, othIsObj = othTag == objectTag5, isSameTag = objTag == othTag;
        if (isSameTag && isBuffer2(object)) {
          if (!isBuffer2(other)) {
            return false;
          }
          objIsArr = true;
          objIsObj = false;
        }
        if (isSameTag && !objIsObj) {
          stack || (stack = new Stack2());
          return objIsArr || isTypedArray2(object) ? equalArrays2(object, other, bitmask, customizer, equalFunc, stack) : equalByTag2(object, other, objTag, bitmask, customizer, equalFunc, stack);
        }
        if (!(bitmask & COMPARE_PARTIAL_FLAG7)) {
          var objIsWrapped = objIsObj && hasOwnProperty13.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty13.call(other, "__wrapped__");
          if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new Stack2());
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
          }
        }
        if (!isSameTag) {
          return false;
        }
        stack || (stack = new Stack2());
        return equalObjects2(object, other, bitmask, customizer, equalFunc, stack);
      }
      module2.exports = baseIsEqualDeep2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseIsEqual.js
  var require_baseIsEqual = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseIsEqual.js"(exports2, module2) {
      var baseIsEqualDeep2 = require_baseIsEqualDeep();
      var isObjectLike2 = require_isObjectLike();
      function baseIsEqual2(value, other, bitmask, customizer, stack) {
        if (value === other) {
          return true;
        }
        if (value == null || other == null || !isObjectLike2(value) && !isObjectLike2(other)) {
          return value !== value && other !== other;
        }
        return baseIsEqualDeep2(value, other, bitmask, customizer, baseIsEqual2, stack);
      }
      module2.exports = baseIsEqual2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseIsMatch.js
  var require_baseIsMatch = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseIsMatch.js"(exports2, module2) {
      var Stack2 = require_Stack();
      var baseIsEqual2 = require_baseIsEqual();
      var COMPARE_PARTIAL_FLAG7 = 1;
      var COMPARE_UNORDERED_FLAG5 = 2;
      function baseIsMatch2(object, source, matchData, customizer) {
        var index = matchData.length, length = index, noCustomizer = !customizer;
        if (object == null) {
          return !length;
        }
        object = Object(object);
        while (index--) {
          var data = matchData[index];
          if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
            return false;
          }
        }
        while (++index < length) {
          data = matchData[index];
          var key = data[0], objValue = object[key], srcValue = data[1];
          if (noCustomizer && data[2]) {
            if (objValue === void 0 && !(key in object)) {
              return false;
            }
          } else {
            var stack = new Stack2();
            if (customizer) {
              var result = customizer(objValue, srcValue, key, object, source, stack);
            }
            if (!(result === void 0 ? baseIsEqual2(srcValue, objValue, COMPARE_PARTIAL_FLAG7 | COMPARE_UNORDERED_FLAG5, customizer, stack) : result)) {
              return false;
            }
          }
        }
        return true;
      }
      module2.exports = baseIsMatch2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_isStrictComparable.js
  var require_isStrictComparable = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_isStrictComparable.js"(exports2, module2) {
      var isObject2 = require_isObject();
      function isStrictComparable2(value) {
        return value === value && !isObject2(value);
      }
      module2.exports = isStrictComparable2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_getMatchData.js
  var require_getMatchData = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_getMatchData.js"(exports2, module2) {
      var isStrictComparable2 = require_isStrictComparable();
      var keys2 = require_keys();
      function getMatchData2(object) {
        var result = keys2(object), length = result.length;
        while (length--) {
          var key = result[length], value = object[key];
          result[length] = [key, value, isStrictComparable2(value)];
        }
        return result;
      }
      module2.exports = getMatchData2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_matchesStrictComparable.js
  var require_matchesStrictComparable = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_matchesStrictComparable.js"(exports2, module2) {
      function matchesStrictComparable2(key, srcValue) {
        return function(object) {
          if (object == null) {
            return false;
          }
          return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
        };
      }
      module2.exports = matchesStrictComparable2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseMatches.js
  var require_baseMatches = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseMatches.js"(exports2, module2) {
      var baseIsMatch2 = require_baseIsMatch();
      var getMatchData2 = require_getMatchData();
      var matchesStrictComparable2 = require_matchesStrictComparable();
      function baseMatches2(source) {
        var matchData = getMatchData2(source);
        if (matchData.length == 1 && matchData[0][2]) {
          return matchesStrictComparable2(matchData[0][0], matchData[0][1]);
        }
        return function(object) {
          return object === source || baseIsMatch2(object, source, matchData);
        };
      }
      module2.exports = baseMatches2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/isSymbol.js
  var require_isSymbol = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/isSymbol.js"(exports2, module2) {
      var baseGetTag2 = require_baseGetTag();
      var isObjectLike2 = require_isObjectLike();
      var symbolTag3 = "[object Symbol]";
      function isSymbol2(value) {
        return typeof value == "symbol" || isObjectLike2(value) && baseGetTag2(value) == symbolTag3;
      }
      module2.exports = isSymbol2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_isKey.js
  var require_isKey = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_isKey.js"(exports2, module2) {
      var isArray2 = require_isArray();
      var isSymbol2 = require_isSymbol();
      var reIsDeepProp2 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
      var reIsPlainProp2 = /^\w*$/;
      function isKey2(value, object) {
        if (isArray2(value)) {
          return false;
        }
        var type = typeof value;
        if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol2(value)) {
          return true;
        }
        return reIsPlainProp2.test(value) || !reIsDeepProp2.test(value) || object != null && value in Object(object);
      }
      module2.exports = isKey2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/memoize.js
  var require_memoize = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/memoize.js"(exports2, module2) {
      var MapCache2 = require_MapCache();
      var FUNC_ERROR_TEXT4 = "Expected a function";
      function memoize2(func, resolver) {
        if (typeof func != "function" || resolver != null && typeof resolver != "function") {
          throw new TypeError(FUNC_ERROR_TEXT4);
        }
        var memoized = function() {
          var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
          if (cache.has(key)) {
            return cache.get(key);
          }
          var result = func.apply(this, args);
          memoized.cache = cache.set(key, result) || cache;
          return result;
        };
        memoized.cache = new (memoize2.Cache || MapCache2)();
        return memoized;
      }
      memoize2.Cache = MapCache2;
      module2.exports = memoize2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_memoizeCapped.js
  var require_memoizeCapped = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_memoizeCapped.js"(exports2, module2) {
      var memoize2 = require_memoize();
      var MAX_MEMOIZE_SIZE2 = 500;
      function memoizeCapped2(func) {
        var result = memoize2(func, function(key) {
          if (cache.size === MAX_MEMOIZE_SIZE2) {
            cache.clear();
          }
          return key;
        });
        var cache = result.cache;
        return result;
      }
      module2.exports = memoizeCapped2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_stringToPath.js
  var require_stringToPath = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_stringToPath.js"(exports2, module2) {
      var memoizeCapped2 = require_memoizeCapped();
      var rePropName2 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reEscapeChar2 = /\\(\\)?/g;
      var stringToPath2 = memoizeCapped2(function(string) {
        var result = [];
        if (string.charCodeAt(0) === 46) {
          result.push("");
        }
        string.replace(rePropName2, function(match, number, quote, subString) {
          result.push(quote ? subString.replace(reEscapeChar2, "$1") : number || match);
        });
        return result;
      });
      module2.exports = stringToPath2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseToString.js
  var require_baseToString = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseToString.js"(exports2, module2) {
      var Symbol3 = require_Symbol();
      var arrayMap2 = require_arrayMap();
      var isArray2 = require_isArray();
      var isSymbol2 = require_isSymbol();
      var INFINITY3 = 1 / 0;
      var symbolProto3 = Symbol3 ? Symbol3.prototype : void 0;
      var symbolToString2 = symbolProto3 ? symbolProto3.toString : void 0;
      function baseToString2(value) {
        if (typeof value == "string") {
          return value;
        }
        if (isArray2(value)) {
          return arrayMap2(value, baseToString2) + "";
        }
        if (isSymbol2(value)) {
          return symbolToString2 ? symbolToString2.call(value) : "";
        }
        var result = value + "";
        return result == "0" && 1 / value == -INFINITY3 ? "-0" : result;
      }
      module2.exports = baseToString2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/toString.js
  var require_toString = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/toString.js"(exports2, module2) {
      var baseToString2 = require_baseToString();
      function toString4(value) {
        return value == null ? "" : baseToString2(value);
      }
      module2.exports = toString4;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_castPath.js
  var require_castPath = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_castPath.js"(exports2, module2) {
      var isArray2 = require_isArray();
      var isKey2 = require_isKey();
      var stringToPath2 = require_stringToPath();
      var toString4 = require_toString();
      function castPath2(value, object) {
        if (isArray2(value)) {
          return value;
        }
        return isKey2(value, object) ? [value] : stringToPath2(toString4(value));
      }
      module2.exports = castPath2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_toKey.js
  var require_toKey = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_toKey.js"(exports2, module2) {
      var isSymbol2 = require_isSymbol();
      var INFINITY3 = 1 / 0;
      function toKey2(value) {
        if (typeof value == "string" || isSymbol2(value)) {
          return value;
        }
        var result = value + "";
        return result == "0" && 1 / value == -INFINITY3 ? "-0" : result;
      }
      module2.exports = toKey2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseGet.js
  var require_baseGet = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseGet.js"(exports2, module2) {
      var castPath2 = require_castPath();
      var toKey2 = require_toKey();
      function baseGet2(object, path) {
        path = castPath2(path, object);
        var index = 0, length = path.length;
        while (object != null && index < length) {
          object = object[toKey2(path[index++])];
        }
        return index && index == length ? object : void 0;
      }
      module2.exports = baseGet2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/get.js
  var require_get = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/get.js"(exports2, module2) {
      var baseGet2 = require_baseGet();
      function get4(object, path, defaultValue) {
        var result = object == null ? void 0 : baseGet2(object, path);
        return result === void 0 ? defaultValue : result;
      }
      module2.exports = get4;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseHasIn.js
  var require_baseHasIn = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseHasIn.js"(exports2, module2) {
      function baseHasIn2(object, key) {
        return object != null && key in Object(object);
      }
      module2.exports = baseHasIn2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_hasPath.js
  var require_hasPath = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_hasPath.js"(exports2, module2) {
      var castPath2 = require_castPath();
      var isArguments2 = require_isArguments();
      var isArray2 = require_isArray();
      var isIndex2 = require_isIndex();
      var isLength2 = require_isLength();
      var toKey2 = require_toKey();
      function hasPath2(object, path, hasFunc) {
        path = castPath2(path, object);
        var index = -1, length = path.length, result = false;
        while (++index < length) {
          var key = toKey2(path[index]);
          if (!(result = object != null && hasFunc(object, key))) {
            break;
          }
          object = object[key];
        }
        if (result || ++index != length) {
          return result;
        }
        length = object == null ? 0 : object.length;
        return !!length && isLength2(length) && isIndex2(key, length) && (isArray2(object) || isArguments2(object));
      }
      module2.exports = hasPath2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/hasIn.js
  var require_hasIn = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/hasIn.js"(exports2, module2) {
      var baseHasIn2 = require_baseHasIn();
      var hasPath2 = require_hasPath();
      function hasIn2(object, path) {
        return object != null && hasPath2(object, path, baseHasIn2);
      }
      module2.exports = hasIn2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseMatchesProperty.js
  var require_baseMatchesProperty = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseMatchesProperty.js"(exports2, module2) {
      var baseIsEqual2 = require_baseIsEqual();
      var get4 = require_get();
      var hasIn2 = require_hasIn();
      var isKey2 = require_isKey();
      var isStrictComparable2 = require_isStrictComparable();
      var matchesStrictComparable2 = require_matchesStrictComparable();
      var toKey2 = require_toKey();
      var COMPARE_PARTIAL_FLAG7 = 1;
      var COMPARE_UNORDERED_FLAG5 = 2;
      function baseMatchesProperty2(path, srcValue) {
        if (isKey2(path) && isStrictComparable2(srcValue)) {
          return matchesStrictComparable2(toKey2(path), srcValue);
        }
        return function(object) {
          var objValue = get4(object, path);
          return objValue === void 0 && objValue === srcValue ? hasIn2(object, path) : baseIsEqual2(srcValue, objValue, COMPARE_PARTIAL_FLAG7 | COMPARE_UNORDERED_FLAG5);
        };
      }
      module2.exports = baseMatchesProperty2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseProperty.js
  var require_baseProperty = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseProperty.js"(exports2, module2) {
      function baseProperty2(key) {
        return function(object) {
          return object == null ? void 0 : object[key];
        };
      }
      module2.exports = baseProperty2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_basePropertyDeep.js
  var require_basePropertyDeep = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_basePropertyDeep.js"(exports2, module2) {
      var baseGet2 = require_baseGet();
      function basePropertyDeep2(path) {
        return function(object) {
          return baseGet2(object, path);
        };
      }
      module2.exports = basePropertyDeep2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/property.js
  var require_property = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/property.js"(exports2, module2) {
      var baseProperty2 = require_baseProperty();
      var basePropertyDeep2 = require_basePropertyDeep();
      var isKey2 = require_isKey();
      var toKey2 = require_toKey();
      function property2(path) {
        return isKey2(path) ? baseProperty2(toKey2(path)) : basePropertyDeep2(path);
      }
      module2.exports = property2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseIteratee.js
  var require_baseIteratee = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseIteratee.js"(exports2, module2) {
      var baseMatches2 = require_baseMatches();
      var baseMatchesProperty2 = require_baseMatchesProperty();
      var identity2 = require_identity();
      var isArray2 = require_isArray();
      var property2 = require_property();
      function baseIteratee2(value) {
        if (typeof value == "function") {
          return value;
        }
        if (value == null) {
          return identity2;
        }
        if (typeof value == "object") {
          return isArray2(value) ? baseMatchesProperty2(value[0], value[1]) : baseMatches2(value);
        }
        return property2(value);
      }
      module2.exports = baseIteratee2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_createBaseEach.js
  var require_createBaseEach = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_createBaseEach.js"(exports2, module2) {
      var isArrayLike2 = require_isArrayLike();
      function createBaseEach2(eachFunc, fromRight) {
        return function(collection, iteratee) {
          if (collection == null) {
            return collection;
          }
          if (!isArrayLike2(collection)) {
            return eachFunc(collection, iteratee);
          }
          var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
          while (fromRight ? index-- : ++index < length) {
            if (iteratee(iterable[index], index, iterable) === false) {
              break;
            }
          }
          return collection;
        };
      }
      module2.exports = createBaseEach2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseEach.js
  var require_baseEach = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseEach.js"(exports2, module2) {
      var baseForOwn2 = require_baseForOwn();
      var createBaseEach2 = require_createBaseEach();
      var baseEach2 = createBaseEach2(baseForOwn2);
      module2.exports = baseEach2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseMap.js
  var require_baseMap = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseMap.js"(exports2, module2) {
      var baseEach2 = require_baseEach();
      var isArrayLike2 = require_isArrayLike();
      function baseMap2(collection, iteratee) {
        var index = -1, result = isArrayLike2(collection) ? Array(collection.length) : [];
        baseEach2(collection, function(value, key, collection2) {
          result[++index] = iteratee(value, key, collection2);
        });
        return result;
      }
      module2.exports = baseMap2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/map.js
  var require_map = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/map.js"(exports2, module2) {
      var arrayMap2 = require_arrayMap();
      var baseIteratee2 = require_baseIteratee();
      var baseMap2 = require_baseMap();
      var isArray2 = require_isArray();
      function map2(collection, iteratee) {
        var func = isArray2(collection) ? arrayMap2 : baseMap2;
        return func(collection, baseIteratee2(iteratee, 3));
      }
      module2.exports = map2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/reactcss/lib/flattenNames.js
  var require_flattenNames = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/reactcss/lib/flattenNames.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", {
        value: true
      });
      exports2.flattenNames = void 0;
      var _isString2 = require_isString();
      var _isString3 = _interopRequireDefault(_isString2);
      var _forOwn2 = require_forOwn();
      var _forOwn3 = _interopRequireDefault(_forOwn2);
      var _isPlainObject2 = require_isPlainObject();
      var _isPlainObject3 = _interopRequireDefault(_isPlainObject2);
      var _map2 = require_map();
      var _map3 = _interopRequireDefault(_map2);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var flattenNames = exports2.flattenNames = function flattenNames2() {
        var things = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        var names2 = [];
        (0, _map3.default)(things, function(thing) {
          if (Array.isArray(thing)) {
            flattenNames2(thing).map(function(name) {
              return names2.push(name);
            });
          } else if ((0, _isPlainObject3.default)(thing)) {
            (0, _forOwn3.default)(thing, function(value, key) {
              value === true && names2.push(key);
              names2.push(key + "-" + value);
            });
          } else if ((0, _isString3.default)(thing)) {
            names2.push(thing);
          }
        });
        return names2;
      };
      exports2.default = flattenNames;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_arrayEach.js
  var require_arrayEach = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_arrayEach.js"(exports2, module2) {
      function arrayEach2(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (iteratee(array[index], index, array) === false) {
            break;
          }
        }
        return array;
      }
      module2.exports = arrayEach2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_defineProperty.js
  var require_defineProperty = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_defineProperty.js"(exports2, module2) {
      var getNative2 = require_getNative();
      var defineProperty2 = function() {
        try {
          var func = getNative2(Object, "defineProperty");
          func({}, "", {});
          return func;
        } catch (e6) {
        }
      }();
      module2.exports = defineProperty2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseAssignValue.js
  var require_baseAssignValue = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseAssignValue.js"(exports2, module2) {
      var defineProperty2 = require_defineProperty();
      function baseAssignValue2(object, key, value) {
        if (key == "__proto__" && defineProperty2) {
          defineProperty2(object, key, {
            "configurable": true,
            "enumerable": true,
            "value": value,
            "writable": true
          });
        } else {
          object[key] = value;
        }
      }
      module2.exports = baseAssignValue2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_assignValue.js
  var require_assignValue = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_assignValue.js"(exports2, module2) {
      var baseAssignValue2 = require_baseAssignValue();
      var eq2 = require_eq();
      var objectProto16 = Object.prototype;
      var hasOwnProperty13 = objectProto16.hasOwnProperty;
      function assignValue2(object, key, value) {
        var objValue = object[key];
        if (!(hasOwnProperty13.call(object, key) && eq2(objValue, value)) || value === void 0 && !(key in object)) {
          baseAssignValue2(object, key, value);
        }
      }
      module2.exports = assignValue2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_copyObject.js
  var require_copyObject = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_copyObject.js"(exports2, module2) {
      var assignValue2 = require_assignValue();
      var baseAssignValue2 = require_baseAssignValue();
      function copyObject2(source, props, object, customizer) {
        var isNew = !object;
        object || (object = {});
        var index = -1, length = props.length;
        while (++index < length) {
          var key = props[index];
          var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
          if (newValue === void 0) {
            newValue = source[key];
          }
          if (isNew) {
            baseAssignValue2(object, key, newValue);
          } else {
            assignValue2(object, key, newValue);
          }
        }
        return object;
      }
      module2.exports = copyObject2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseAssign.js
  var require_baseAssign = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseAssign.js"(exports2, module2) {
      var copyObject2 = require_copyObject();
      var keys2 = require_keys();
      function baseAssign(object, source) {
        return object && copyObject2(source, keys2(source), object);
      }
      module2.exports = baseAssign;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_nativeKeysIn.js
  var require_nativeKeysIn = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_nativeKeysIn.js"(exports2, module2) {
      function nativeKeysIn2(object) {
        var result = [];
        if (object != null) {
          for (var key in Object(object)) {
            result.push(key);
          }
        }
        return result;
      }
      module2.exports = nativeKeysIn2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseKeysIn.js
  var require_baseKeysIn = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseKeysIn.js"(exports2, module2) {
      var isObject2 = require_isObject();
      var isPrototype2 = require_isPrototype();
      var nativeKeysIn2 = require_nativeKeysIn();
      var objectProto16 = Object.prototype;
      var hasOwnProperty13 = objectProto16.hasOwnProperty;
      function baseKeysIn2(object) {
        if (!isObject2(object)) {
          return nativeKeysIn2(object);
        }
        var isProto = isPrototype2(object), result = [];
        for (var key in object) {
          if (!(key == "constructor" && (isProto || !hasOwnProperty13.call(object, key)))) {
            result.push(key);
          }
        }
        return result;
      }
      module2.exports = baseKeysIn2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/keysIn.js
  var require_keysIn = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/keysIn.js"(exports2, module2) {
      var arrayLikeKeys2 = require_arrayLikeKeys();
      var baseKeysIn2 = require_baseKeysIn();
      var isArrayLike2 = require_isArrayLike();
      function keysIn2(object) {
        return isArrayLike2(object) ? arrayLikeKeys2(object, true) : baseKeysIn2(object);
      }
      module2.exports = keysIn2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseAssignIn.js
  var require_baseAssignIn = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseAssignIn.js"(exports2, module2) {
      var copyObject2 = require_copyObject();
      var keysIn2 = require_keysIn();
      function baseAssignIn(object, source) {
        return object && copyObject2(source, keysIn2(source), object);
      }
      module2.exports = baseAssignIn;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_cloneBuffer.js
  var require_cloneBuffer = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_cloneBuffer.js"(exports2, module2) {
      var root2 = require_root();
      var freeExports4 = typeof exports2 == "object" && exports2 && !exports2.nodeType && exports2;
      var freeModule4 = freeExports4 && typeof module2 == "object" && module2 && !module2.nodeType && module2;
      var moduleExports4 = freeModule4 && freeModule4.exports === freeExports4;
      var Buffer4 = moduleExports4 ? root2.Buffer : void 0;
      var allocUnsafe2 = Buffer4 ? Buffer4.allocUnsafe : void 0;
      function cloneBuffer2(buffer, isDeep) {
        if (isDeep) {
          return buffer.slice();
        }
        var length = buffer.length, result = allocUnsafe2 ? allocUnsafe2(length) : new buffer.constructor(length);
        buffer.copy(result);
        return result;
      }
      module2.exports = cloneBuffer2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_copyArray.js
  var require_copyArray = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_copyArray.js"(exports2, module2) {
      function copyArray2(source, array) {
        var index = -1, length = source.length;
        array || (array = Array(length));
        while (++index < length) {
          array[index] = source[index];
        }
        return array;
      }
      module2.exports = copyArray2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_copySymbols.js
  var require_copySymbols = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_copySymbols.js"(exports2, module2) {
      var copyObject2 = require_copyObject();
      var getSymbols2 = require_getSymbols();
      function copySymbols(source, object) {
        return copyObject2(source, getSymbols2(source), object);
      }
      module2.exports = copySymbols;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_getSymbolsIn.js
  var require_getSymbolsIn = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_getSymbolsIn.js"(exports2, module2) {
      var arrayPush2 = require_arrayPush();
      var getPrototype2 = require_getPrototype();
      var getSymbols2 = require_getSymbols();
      var stubArray2 = require_stubArray();
      var nativeGetSymbols2 = Object.getOwnPropertySymbols;
      var getSymbolsIn = !nativeGetSymbols2 ? stubArray2 : function(object) {
        var result = [];
        while (object) {
          arrayPush2(result, getSymbols2(object));
          object = getPrototype2(object);
        }
        return result;
      };
      module2.exports = getSymbolsIn;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_copySymbolsIn.js
  var require_copySymbolsIn = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_copySymbolsIn.js"(exports2, module2) {
      var copyObject2 = require_copyObject();
      var getSymbolsIn = require_getSymbolsIn();
      function copySymbolsIn(source, object) {
        return copyObject2(source, getSymbolsIn(source), object);
      }
      module2.exports = copySymbolsIn;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_getAllKeysIn.js
  var require_getAllKeysIn = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_getAllKeysIn.js"(exports2, module2) {
      var baseGetAllKeys2 = require_baseGetAllKeys();
      var getSymbolsIn = require_getSymbolsIn();
      var keysIn2 = require_keysIn();
      function getAllKeysIn(object) {
        return baseGetAllKeys2(object, keysIn2, getSymbolsIn);
      }
      module2.exports = getAllKeysIn;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_initCloneArray.js
  var require_initCloneArray = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_initCloneArray.js"(exports2, module2) {
      var objectProto16 = Object.prototype;
      var hasOwnProperty13 = objectProto16.hasOwnProperty;
      function initCloneArray(array) {
        var length = array.length, result = new array.constructor(length);
        if (length && typeof array[0] == "string" && hasOwnProperty13.call(array, "index")) {
          result.index = array.index;
          result.input = array.input;
        }
        return result;
      }
      module2.exports = initCloneArray;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_cloneArrayBuffer.js
  var require_cloneArrayBuffer = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_cloneArrayBuffer.js"(exports2, module2) {
      var Uint8Array3 = require_Uint8Array();
      function cloneArrayBuffer2(arrayBuffer) {
        var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
        new Uint8Array3(result).set(new Uint8Array3(arrayBuffer));
        return result;
      }
      module2.exports = cloneArrayBuffer2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_cloneDataView.js
  var require_cloneDataView = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_cloneDataView.js"(exports2, module2) {
      var cloneArrayBuffer2 = require_cloneArrayBuffer();
      function cloneDataView(dataView, isDeep) {
        var buffer = isDeep ? cloneArrayBuffer2(dataView.buffer) : dataView.buffer;
        return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
      }
      module2.exports = cloneDataView;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_cloneRegExp.js
  var require_cloneRegExp = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_cloneRegExp.js"(exports2, module2) {
      var reFlags = /\w*$/;
      function cloneRegExp(regexp) {
        var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
        result.lastIndex = regexp.lastIndex;
        return result;
      }
      module2.exports = cloneRegExp;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_cloneSymbol.js
  var require_cloneSymbol = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_cloneSymbol.js"(exports2, module2) {
      var Symbol3 = require_Symbol();
      var symbolProto3 = Symbol3 ? Symbol3.prototype : void 0;
      var symbolValueOf2 = symbolProto3 ? symbolProto3.valueOf : void 0;
      function cloneSymbol(symbol) {
        return symbolValueOf2 ? Object(symbolValueOf2.call(symbol)) : {};
      }
      module2.exports = cloneSymbol;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_cloneTypedArray.js
  var require_cloneTypedArray = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_cloneTypedArray.js"(exports2, module2) {
      var cloneArrayBuffer2 = require_cloneArrayBuffer();
      function cloneTypedArray2(typedArray, isDeep) {
        var buffer = isDeep ? cloneArrayBuffer2(typedArray.buffer) : typedArray.buffer;
        return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
      }
      module2.exports = cloneTypedArray2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_initCloneByTag.js
  var require_initCloneByTag = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_initCloneByTag.js"(exports2, module2) {
      var cloneArrayBuffer2 = require_cloneArrayBuffer();
      var cloneDataView = require_cloneDataView();
      var cloneRegExp = require_cloneRegExp();
      var cloneSymbol = require_cloneSymbol();
      var cloneTypedArray2 = require_cloneTypedArray();
      var boolTag3 = "[object Boolean]";
      var dateTag3 = "[object Date]";
      var mapTag4 = "[object Map]";
      var numberTag3 = "[object Number]";
      var regexpTag3 = "[object RegExp]";
      var setTag4 = "[object Set]";
      var stringTag3 = "[object String]";
      var symbolTag3 = "[object Symbol]";
      var arrayBufferTag3 = "[object ArrayBuffer]";
      var dataViewTag4 = "[object DataView]";
      var float32Tag2 = "[object Float32Array]";
      var float64Tag2 = "[object Float64Array]";
      var int8Tag2 = "[object Int8Array]";
      var int16Tag2 = "[object Int16Array]";
      var int32Tag2 = "[object Int32Array]";
      var uint8Tag2 = "[object Uint8Array]";
      var uint8ClampedTag2 = "[object Uint8ClampedArray]";
      var uint16Tag2 = "[object Uint16Array]";
      var uint32Tag2 = "[object Uint32Array]";
      function initCloneByTag(object, tag, isDeep) {
        var Ctor = object.constructor;
        switch (tag) {
          case arrayBufferTag3:
            return cloneArrayBuffer2(object);
          case boolTag3:
          case dateTag3:
            return new Ctor(+object);
          case dataViewTag4:
            return cloneDataView(object, isDeep);
          case float32Tag2:
          case float64Tag2:
          case int8Tag2:
          case int16Tag2:
          case int32Tag2:
          case uint8Tag2:
          case uint8ClampedTag2:
          case uint16Tag2:
          case uint32Tag2:
            return cloneTypedArray2(object, isDeep);
          case mapTag4:
            return new Ctor();
          case numberTag3:
          case stringTag3:
            return new Ctor(object);
          case regexpTag3:
            return cloneRegExp(object);
          case setTag4:
            return new Ctor();
          case symbolTag3:
            return cloneSymbol(object);
        }
      }
      module2.exports = initCloneByTag;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseCreate.js
  var require_baseCreate = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseCreate.js"(exports2, module2) {
      var isObject2 = require_isObject();
      var objectCreate2 = Object.create;
      var baseCreate2 = function() {
        function object() {
        }
        return function(proto) {
          if (!isObject2(proto)) {
            return {};
          }
          if (objectCreate2) {
            return objectCreate2(proto);
          }
          object.prototype = proto;
          var result = new object();
          object.prototype = void 0;
          return result;
        };
      }();
      module2.exports = baseCreate2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_initCloneObject.js
  var require_initCloneObject = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_initCloneObject.js"(exports2, module2) {
      var baseCreate2 = require_baseCreate();
      var getPrototype2 = require_getPrototype();
      var isPrototype2 = require_isPrototype();
      function initCloneObject2(object) {
        return typeof object.constructor == "function" && !isPrototype2(object) ? baseCreate2(getPrototype2(object)) : {};
      }
      module2.exports = initCloneObject2;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseIsMap.js
  var require_baseIsMap = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseIsMap.js"(exports2, module2) {
      var getTag2 = require_getTag();
      var isObjectLike2 = require_isObjectLike();
      var mapTag4 = "[object Map]";
      function baseIsMap(value) {
        return isObjectLike2(value) && getTag2(value) == mapTag4;
      }
      module2.exports = baseIsMap;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/isMap.js
  var require_isMap = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/isMap.js"(exports2, module2) {
      var baseIsMap = require_baseIsMap();
      var baseUnary2 = require_baseUnary();
      var nodeUtil2 = require_nodeUtil();
      var nodeIsMap = nodeUtil2 && nodeUtil2.isMap;
      var isMap = nodeIsMap ? baseUnary2(nodeIsMap) : baseIsMap;
      module2.exports = isMap;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseIsSet.js
  var require_baseIsSet = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseIsSet.js"(exports2, module2) {
      var getTag2 = require_getTag();
      var isObjectLike2 = require_isObjectLike();
      var setTag4 = "[object Set]";
      function baseIsSet(value) {
        return isObjectLike2(value) && getTag2(value) == setTag4;
      }
      module2.exports = baseIsSet;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/isSet.js
  var require_isSet = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/isSet.js"(exports2, module2) {
      var baseIsSet = require_baseIsSet();
      var baseUnary2 = require_baseUnary();
      var nodeUtil2 = require_nodeUtil();
      var nodeIsSet = nodeUtil2 && nodeUtil2.isSet;
      var isSet = nodeIsSet ? baseUnary2(nodeIsSet) : baseIsSet;
      module2.exports = isSet;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseClone.js
  var require_baseClone = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/_baseClone.js"(exports2, module2) {
      var Stack2 = require_Stack();
      var arrayEach2 = require_arrayEach();
      var assignValue2 = require_assignValue();
      var baseAssign = require_baseAssign();
      var baseAssignIn = require_baseAssignIn();
      var cloneBuffer2 = require_cloneBuffer();
      var copyArray2 = require_copyArray();
      var copySymbols = require_copySymbols();
      var copySymbolsIn = require_copySymbolsIn();
      var getAllKeys2 = require_getAllKeys();
      var getAllKeysIn = require_getAllKeysIn();
      var getTag2 = require_getTag();
      var initCloneArray = require_initCloneArray();
      var initCloneByTag = require_initCloneByTag();
      var initCloneObject2 = require_initCloneObject();
      var isArray2 = require_isArray();
      var isBuffer2 = require_isBuffer();
      var isMap = require_isMap();
      var isObject2 = require_isObject();
      var isSet = require_isSet();
      var keys2 = require_keys();
      var keysIn2 = require_keysIn();
      var CLONE_DEEP_FLAG = 1;
      var CLONE_FLAT_FLAG = 2;
      var CLONE_SYMBOLS_FLAG = 4;
      var argsTag4 = "[object Arguments]";
      var arrayTag3 = "[object Array]";
      var boolTag3 = "[object Boolean]";
      var dateTag3 = "[object Date]";
      var errorTag3 = "[object Error]";
      var funcTag3 = "[object Function]";
      var genTag2 = "[object GeneratorFunction]";
      var mapTag4 = "[object Map]";
      var numberTag3 = "[object Number]";
      var objectTag5 = "[object Object]";
      var regexpTag3 = "[object RegExp]";
      var setTag4 = "[object Set]";
      var stringTag3 = "[object String]";
      var symbolTag3 = "[object Symbol]";
      var weakMapTag3 = "[object WeakMap]";
      var arrayBufferTag3 = "[object ArrayBuffer]";
      var dataViewTag4 = "[object DataView]";
      var float32Tag2 = "[object Float32Array]";
      var float64Tag2 = "[object Float64Array]";
      var int8Tag2 = "[object Int8Array]";
      var int16Tag2 = "[object Int16Array]";
      var int32Tag2 = "[object Int32Array]";
      var uint8Tag2 = "[object Uint8Array]";
      var uint8ClampedTag2 = "[object Uint8ClampedArray]";
      var uint16Tag2 = "[object Uint16Array]";
      var uint32Tag2 = "[object Uint32Array]";
      var cloneableTags = {};
      cloneableTags[argsTag4] = cloneableTags[arrayTag3] = cloneableTags[arrayBufferTag3] = cloneableTags[dataViewTag4] = cloneableTags[boolTag3] = cloneableTags[dateTag3] = cloneableTags[float32Tag2] = cloneableTags[float64Tag2] = cloneableTags[int8Tag2] = cloneableTags[int16Tag2] = cloneableTags[int32Tag2] = cloneableTags[mapTag4] = cloneableTags[numberTag3] = cloneableTags[objectTag5] = cloneableTags[regexpTag3] = cloneableTags[setTag4] = cloneableTags[stringTag3] = cloneableTags[symbolTag3] = cloneableTags[uint8Tag2] = cloneableTags[uint8ClampedTag2] = cloneableTags[uint16Tag2] = cloneableTags[uint32Tag2] = true;
      cloneableTags[errorTag3] = cloneableTags[funcTag3] = cloneableTags[weakMapTag3] = false;
      function baseClone(value, bitmask, customizer, key, object, stack) {
        var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
        if (customizer) {
          result = object ? customizer(value, key, object, stack) : customizer(value);
        }
        if (result !== void 0) {
          return result;
        }
        if (!isObject2(value)) {
          return value;
        }
        var isArr = isArray2(value);
        if (isArr) {
          result = initCloneArray(value);
          if (!isDeep) {
            return copyArray2(value, result);
          }
        } else {
          var tag = getTag2(value), isFunc = tag == funcTag3 || tag == genTag2;
          if (isBuffer2(value)) {
            return cloneBuffer2(value, isDeep);
          }
          if (tag == objectTag5 || tag == argsTag4 || isFunc && !object) {
            result = isFlat || isFunc ? {} : initCloneObject2(value);
            if (!isDeep) {
              return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
            }
          } else {
            if (!cloneableTags[tag]) {
              return object ? value : {};
            }
            result = initCloneByTag(value, tag, isDeep);
          }
        }
        stack || (stack = new Stack2());
        var stacked = stack.get(value);
        if (stacked) {
          return stacked;
        }
        stack.set(value, result);
        if (isSet(value)) {
          value.forEach(function(subValue) {
            result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
          });
        } else if (isMap(value)) {
          value.forEach(function(subValue, key2) {
            result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
          });
        }
        var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys2 : isFlat ? keysIn2 : keys2;
        var props = isArr ? void 0 : keysFunc(value);
        arrayEach2(props || value, function(subValue, key2) {
          if (props) {
            key2 = subValue;
            subValue = value[key2];
          }
          assignValue2(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
        });
        return result;
      }
      module2.exports = baseClone;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/cloneDeep.js
  var require_cloneDeep = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash/cloneDeep.js"(exports2, module2) {
      var baseClone = require_baseClone();
      var CLONE_DEEP_FLAG = 1;
      var CLONE_SYMBOLS_FLAG = 4;
      function cloneDeep(value) {
        return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
      }
      module2.exports = cloneDeep;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/reactcss/lib/mergeClasses.js
  var require_mergeClasses = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/reactcss/lib/mergeClasses.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", {
        value: true
      });
      exports2.mergeClasses = void 0;
      var _forOwn2 = require_forOwn();
      var _forOwn3 = _interopRequireDefault(_forOwn2);
      var _cloneDeep2 = require_cloneDeep();
      var _cloneDeep3 = _interopRequireDefault(_cloneDeep2);
      var _extends12 = Object.assign || function(target) {
        for (var i5 = 1; i5 < arguments.length; i5++) {
          var source = arguments[i5];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var mergeClasses = exports2.mergeClasses = function mergeClasses2(classes) {
        var activeNames = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
        var styles = classes.default && (0, _cloneDeep3.default)(classes.default) || {};
        activeNames.map(function(name) {
          var toMerge = classes[name];
          if (toMerge) {
            (0, _forOwn3.default)(toMerge, function(value, key) {
              if (!styles[key]) {
                styles[key] = {};
              }
              styles[key] = _extends12({}, styles[key], toMerge[key]);
            });
          }
          return name;
        });
        return styles;
      };
      exports2.default = mergeClasses;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/reactcss/lib/autoprefix.js
  var require_autoprefix = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/reactcss/lib/autoprefix.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", {
        value: true
      });
      exports2.autoprefix = void 0;
      var _forOwn2 = require_forOwn();
      var _forOwn3 = _interopRequireDefault(_forOwn2);
      var _extends12 = Object.assign || function(target) {
        for (var i5 = 1; i5 < arguments.length; i5++) {
          var source = arguments[i5];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var transforms = {
        borderRadius: function borderRadius(value) {
          return {
            msBorderRadius: value,
            MozBorderRadius: value,
            OBorderRadius: value,
            WebkitBorderRadius: value,
            borderRadius: value
          };
        },
        boxShadow: function boxShadow(value) {
          return {
            msBoxShadow: value,
            MozBoxShadow: value,
            OBoxShadow: value,
            WebkitBoxShadow: value,
            boxShadow: value
          };
        },
        userSelect: function userSelect(value) {
          return {
            WebkitTouchCallout: value,
            KhtmlUserSelect: value,
            MozUserSelect: value,
            msUserSelect: value,
            WebkitUserSelect: value,
            userSelect: value
          };
        },
        flex: function flex(value) {
          return {
            WebkitBoxFlex: value,
            MozBoxFlex: value,
            WebkitFlex: value,
            msFlex: value,
            flex: value
          };
        },
        flexBasis: function flexBasis(value) {
          return {
            WebkitFlexBasis: value,
            flexBasis: value
          };
        },
        justifyContent: function justifyContent(value) {
          return {
            WebkitJustifyContent: value,
            justifyContent: value
          };
        },
        transition: function transition(value) {
          return {
            msTransition: value,
            MozTransition: value,
            OTransition: value,
            WebkitTransition: value,
            transition: value
          };
        },
        transform: function transform(value) {
          return {
            msTransform: value,
            MozTransform: value,
            OTransform: value,
            WebkitTransform: value,
            transform: value
          };
        },
        absolute: function absolute(value) {
          var direction = value && value.split(" ");
          return {
            position: "absolute",
            top: direction && direction[0],
            right: direction && direction[1],
            bottom: direction && direction[2],
            left: direction && direction[3]
          };
        },
        extend: function extend(name, otherElementStyles) {
          var otherStyle = otherElementStyles[name];
          if (otherStyle) {
            return otherStyle;
          }
          return {
            "extend": name
          };
        }
      };
      var autoprefix = exports2.autoprefix = function autoprefix2(elements) {
        var prefixed = {};
        (0, _forOwn3.default)(elements, function(styles, element) {
          var expanded = {};
          (0, _forOwn3.default)(styles, function(value, key) {
            var transform = transforms[key];
            if (transform) {
              expanded = _extends12({}, expanded, transform(value));
            } else {
              expanded[key] = value;
            }
          });
          prefixed[element] = expanded;
        });
        return prefixed;
      };
      exports2.default = autoprefix;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/reactcss/lib/components/hover.js
  var require_hover = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/reactcss/lib/components/hover.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", {
        value: true
      });
      exports2.hover = void 0;
      var _extends12 = Object.assign || function(target) {
        for (var i5 = 1; i5 < arguments.length; i5++) {
          var source = arguments[i5];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      var _react = (init_react(), __toCommonJS(react_exports));
      var _react2 = _interopRequireDefault(_react);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _classCallCheck9(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn9(self2, call) {
        if (!self2) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self2;
      }
      function _inherits9(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var hover = exports2.hover = function hover2(Component) {
        var Span = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "span";
        return function(_React$Component) {
          _inherits9(Hover, _React$Component);
          function Hover() {
            var _ref;
            var _temp, _this, _ret;
            _classCallCheck9(this, Hover);
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            return _ret = (_temp = (_this = _possibleConstructorReturn9(this, (_ref = Hover.__proto__ || Object.getPrototypeOf(Hover)).call.apply(_ref, [this].concat(args))), _this), _this.state = { hover: false }, _this.handleMouseOver = function() {
              return _this.setState({ hover: true });
            }, _this.handleMouseOut = function() {
              return _this.setState({ hover: false });
            }, _this.render = function() {
              return _react2.default.createElement(
                Span,
                { onMouseOver: _this.handleMouseOver, onMouseOut: _this.handleMouseOut },
                _react2.default.createElement(Component, _extends12({}, _this.props, _this.state))
              );
            }, _temp), _possibleConstructorReturn9(_this, _ret);
          }
          return Hover;
        }(_react2.default.Component);
      };
      exports2.default = hover;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/reactcss/lib/components/active.js
  var require_active = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/reactcss/lib/components/active.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", {
        value: true
      });
      exports2.active = void 0;
      var _extends12 = Object.assign || function(target) {
        for (var i5 = 1; i5 < arguments.length; i5++) {
          var source = arguments[i5];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      var _react = (init_react(), __toCommonJS(react_exports));
      var _react2 = _interopRequireDefault(_react);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _classCallCheck9(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn9(self2, call) {
        if (!self2) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self2;
      }
      function _inherits9(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var active = exports2.active = function active2(Component) {
        var Span = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "span";
        return function(_React$Component) {
          _inherits9(Active, _React$Component);
          function Active() {
            var _ref;
            var _temp, _this, _ret;
            _classCallCheck9(this, Active);
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            return _ret = (_temp = (_this = _possibleConstructorReturn9(this, (_ref = Active.__proto__ || Object.getPrototypeOf(Active)).call.apply(_ref, [this].concat(args))), _this), _this.state = { active: false }, _this.handleMouseDown = function() {
              return _this.setState({ active: true });
            }, _this.handleMouseUp = function() {
              return _this.setState({ active: false });
            }, _this.render = function() {
              return _react2.default.createElement(
                Span,
                { onMouseDown: _this.handleMouseDown, onMouseUp: _this.handleMouseUp },
                _react2.default.createElement(Component, _extends12({}, _this.props, _this.state))
              );
            }, _temp), _possibleConstructorReturn9(_this, _ret);
          }
          return Active;
        }(_react2.default.Component);
      };
      exports2.default = active;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/reactcss/lib/loop.js
  var require_loop = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/reactcss/lib/loop.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", {
        value: true
      });
      var loopable = function loopable2(i5, length) {
        var props = {};
        var setProp = function setProp2(name) {
          var value = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
          props[name] = value;
        };
        i5 === 0 && setProp("first-child");
        i5 === length - 1 && setProp("last-child");
        (i5 === 0 || i5 % 2 === 0) && setProp("even");
        Math.abs(i5 % 2) === 1 && setProp("odd");
        setProp("nth-child", i5);
        return props;
      };
      exports2.default = loopable;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/reactcss/lib/index.js
  var require_lib = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/reactcss/lib/index.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", {
        value: true
      });
      exports2.ReactCSS = exports2.loop = exports2.handleActive = exports2.handleHover = exports2.hover = void 0;
      var _flattenNames = require_flattenNames();
      var _flattenNames2 = _interopRequireDefault(_flattenNames);
      var _mergeClasses = require_mergeClasses();
      var _mergeClasses2 = _interopRequireDefault(_mergeClasses);
      var _autoprefix = require_autoprefix();
      var _autoprefix2 = _interopRequireDefault(_autoprefix);
      var _hover2 = require_hover();
      var _hover3 = _interopRequireDefault(_hover2);
      var _active = require_active();
      var _active2 = _interopRequireDefault(_active);
      var _loop2 = require_loop();
      var _loop3 = _interopRequireDefault(_loop2);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      exports2.hover = _hover3.default;
      exports2.handleHover = _hover3.default;
      exports2.handleActive = _active2.default;
      exports2.loop = _loop3.default;
      var ReactCSS = exports2.ReactCSS = function ReactCSS2(classes) {
        for (var _len = arguments.length, activations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          activations[_key - 1] = arguments[_key];
        }
        var activeNames = (0, _flattenNames2.default)(activations);
        var merged = (0, _mergeClasses2.default)(classes, activeNames);
        return (0, _autoprefix2.default)(merged);
      };
      exports2.default = ReactCSS;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-is/cjs/react-is.development.js
  var require_react_is_development = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-is/cjs/react-is.development.js"(exports2) {
      "use strict";
      if (true) {
        (function() {
          "use strict";
          var hasSymbol = typeof Symbol === "function" && Symbol.for;
          var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
          var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
          var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
          var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
          var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
          var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
          var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
          var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
          var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
          var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
          var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
          var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
          var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
          var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
          var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
          var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
          var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
          var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
          function isValidElementType(type) {
            return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
            type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
          }
          function typeOf(object) {
            if (typeof object === "object" && object !== null) {
              var $$typeof = object.$$typeof;
              switch ($$typeof) {
                case REACT_ELEMENT_TYPE:
                  var type = object.type;
                  switch (type) {
                    case REACT_ASYNC_MODE_TYPE:
                    case REACT_CONCURRENT_MODE_TYPE:
                    case REACT_FRAGMENT_TYPE:
                    case REACT_PROFILER_TYPE:
                    case REACT_STRICT_MODE_TYPE:
                    case REACT_SUSPENSE_TYPE:
                      return type;
                    default:
                      var $$typeofType = type && type.$$typeof;
                      switch ($$typeofType) {
                        case REACT_CONTEXT_TYPE:
                        case REACT_FORWARD_REF_TYPE:
                        case REACT_LAZY_TYPE:
                        case REACT_MEMO_TYPE:
                        case REACT_PROVIDER_TYPE:
                          return $$typeofType;
                        default:
                          return $$typeof;
                      }
                  }
                case REACT_PORTAL_TYPE:
                  return $$typeof;
              }
            }
            return void 0;
          }
          var AsyncMode = REACT_ASYNC_MODE_TYPE;
          var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
          var ContextConsumer = REACT_CONTEXT_TYPE;
          var ContextProvider = REACT_PROVIDER_TYPE;
          var Element = REACT_ELEMENT_TYPE;
          var ForwardRef = REACT_FORWARD_REF_TYPE;
          var Fragment = REACT_FRAGMENT_TYPE;
          var Lazy = REACT_LAZY_TYPE;
          var Memo = REACT_MEMO_TYPE;
          var Portal = REACT_PORTAL_TYPE;
          var Profiler = REACT_PROFILER_TYPE;
          var StrictMode = REACT_STRICT_MODE_TYPE;
          var Suspense = REACT_SUSPENSE_TYPE;
          var hasWarnedAboutDeprecatedIsAsyncMode = false;
          function isAsyncMode(object) {
            {
              if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                hasWarnedAboutDeprecatedIsAsyncMode = true;
                console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
              }
            }
            return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
          }
          function isConcurrentMode(object) {
            return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
          }
          function isContextConsumer(object) {
            return typeOf(object) === REACT_CONTEXT_TYPE;
          }
          function isContextProvider(object) {
            return typeOf(object) === REACT_PROVIDER_TYPE;
          }
          function isElement(object) {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
          function isForwardRef(object) {
            return typeOf(object) === REACT_FORWARD_REF_TYPE;
          }
          function isFragment(object) {
            return typeOf(object) === REACT_FRAGMENT_TYPE;
          }
          function isLazy(object) {
            return typeOf(object) === REACT_LAZY_TYPE;
          }
          function isMemo(object) {
            return typeOf(object) === REACT_MEMO_TYPE;
          }
          function isPortal(object) {
            return typeOf(object) === REACT_PORTAL_TYPE;
          }
          function isProfiler(object) {
            return typeOf(object) === REACT_PROFILER_TYPE;
          }
          function isStrictMode(object) {
            return typeOf(object) === REACT_STRICT_MODE_TYPE;
          }
          function isSuspense(object) {
            return typeOf(object) === REACT_SUSPENSE_TYPE;
          }
          exports2.AsyncMode = AsyncMode;
          exports2.ConcurrentMode = ConcurrentMode;
          exports2.ContextConsumer = ContextConsumer;
          exports2.ContextProvider = ContextProvider;
          exports2.Element = Element;
          exports2.ForwardRef = ForwardRef;
          exports2.Fragment = Fragment;
          exports2.Lazy = Lazy;
          exports2.Memo = Memo;
          exports2.Portal = Portal;
          exports2.Profiler = Profiler;
          exports2.StrictMode = StrictMode;
          exports2.Suspense = Suspense;
          exports2.isAsyncMode = isAsyncMode;
          exports2.isConcurrentMode = isConcurrentMode;
          exports2.isContextConsumer = isContextConsumer;
          exports2.isContextProvider = isContextProvider;
          exports2.isElement = isElement;
          exports2.isForwardRef = isForwardRef;
          exports2.isFragment = isFragment;
          exports2.isLazy = isLazy;
          exports2.isMemo = isMemo;
          exports2.isPortal = isPortal;
          exports2.isProfiler = isProfiler;
          exports2.isStrictMode = isStrictMode;
          exports2.isSuspense = isSuspense;
          exports2.isValidElementType = isValidElementType;
          exports2.typeOf = typeOf;
        })();
      }
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-is/index.js
  var require_react_is = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-is/index.js"(exports2, module2) {
      "use strict";
      if (false) {
        module2.exports = null;
      } else {
        module2.exports = require_react_is_development();
      }
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/object-assign/index.js
  var require_object_assign = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/object-assign/index.js"(exports2, module2) {
      "use strict";
      var getOwnPropertySymbols = Object.getOwnPropertySymbols;
      var hasOwnProperty13 = Object.prototype.hasOwnProperty;
      var propIsEnumerable = Object.prototype.propertyIsEnumerable;
      function toObject(val) {
        if (val === null || val === void 0) {
          throw new TypeError("Object.assign cannot be called with null or undefined");
        }
        return Object(val);
      }
      function shouldUseNative() {
        try {
          if (!Object.assign) {
            return false;
          }
          var test1 = new String("abc");
          test1[5] = "de";
          if (Object.getOwnPropertyNames(test1)[0] === "5") {
            return false;
          }
          var test2 = {};
          for (var i5 = 0; i5 < 10; i5++) {
            test2["_" + String.fromCharCode(i5)] = i5;
          }
          var order2 = Object.getOwnPropertyNames(test2).map(function(n6) {
            return test2[n6];
          });
          if (order2.join("") !== "0123456789") {
            return false;
          }
          var test3 = {};
          "abcdefghijklmnopqrst".split("").forEach(function(letter) {
            test3[letter] = letter;
          });
          if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
            return false;
          }
          return true;
        } catch (err) {
          return false;
        }
      }
      module2.exports = shouldUseNative() ? Object.assign : function(target, source) {
        var from;
        var to = toObject(target);
        var symbols;
        for (var s7 = 1; s7 < arguments.length; s7++) {
          from = Object(arguments[s7]);
          for (var key in from) {
            if (hasOwnProperty13.call(from, key)) {
              to[key] = from[key];
            }
          }
          if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for (var i5 = 0; i5 < symbols.length; i5++) {
              if (propIsEnumerable.call(from, symbols[i5])) {
                to[symbols[i5]] = from[symbols[i5]];
              }
            }
          }
        }
        return to;
      };
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/prop-types/lib/ReactPropTypesSecret.js
  var require_ReactPropTypesSecret = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports2, module2) {
      "use strict";
      var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      module2.exports = ReactPropTypesSecret;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/prop-types/lib/has.js
  var require_has = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/prop-types/lib/has.js"(exports2, module2) {
      module2.exports = Function.call.bind(Object.prototype.hasOwnProperty);
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/prop-types/checkPropTypes.js
  var require_checkPropTypes = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/prop-types/checkPropTypes.js"(exports2, module2) {
      "use strict";
      var printWarning = function() {
      };
      if (true) {
        ReactPropTypesSecret = require_ReactPropTypesSecret();
        loggedTypeFailures = {};
        has = require_has();
        printWarning = function(text2) {
          var message = "Warning: " + text2;
          if (typeof console !== "undefined") {
            console.error(message);
          }
          try {
            throw new Error(message);
          } catch (x5) {
          }
        };
      }
      var ReactPropTypesSecret;
      var loggedTypeFailures;
      var has;
      function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
        if (true) {
          for (var typeSpecName in typeSpecs) {
            if (has(typeSpecs, typeSpecName)) {
              var error;
              try {
                if (typeof typeSpecs[typeSpecName] !== "function") {
                  var err = Error(
                    (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                  );
                  err.name = "Invariant Violation";
                  throw err;
                }
                error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
              } catch (ex) {
                error = ex;
              }
              if (error && !(error instanceof Error)) {
                printWarning(
                  (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
                );
              }
              if (error instanceof Error && !(error.message in loggedTypeFailures)) {
                loggedTypeFailures[error.message] = true;
                var stack = getStack ? getStack() : "";
                printWarning(
                  "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
                );
              }
            }
          }
        }
      }
      checkPropTypes.resetWarningCache = function() {
        if (true) {
          loggedTypeFailures = {};
        }
      };
      module2.exports = checkPropTypes;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/prop-types/factoryWithTypeCheckers.js
  var require_factoryWithTypeCheckers = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/prop-types/factoryWithTypeCheckers.js"(exports2, module2) {
      "use strict";
      var ReactIs = require_react_is();
      var assign = require_object_assign();
      var ReactPropTypesSecret = require_ReactPropTypesSecret();
      var has = require_has();
      var checkPropTypes = require_checkPropTypes();
      var printWarning = function() {
      };
      if (true) {
        printWarning = function(text2) {
          var message = "Warning: " + text2;
          if (typeof console !== "undefined") {
            console.error(message);
          }
          try {
            throw new Error(message);
          } catch (x5) {
          }
        };
      }
      function emptyFunctionThatReturnsNull() {
        return null;
      }
      module2.exports = function(isValidElement, throwOnDirectAccess) {
        var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
          if (typeof iteratorFn === "function") {
            return iteratorFn;
          }
        }
        var ANONYMOUS = "<<anonymous>>";
        var ReactPropTypes = {
          array: createPrimitiveTypeChecker("array"),
          bigint: createPrimitiveTypeChecker("bigint"),
          bool: createPrimitiveTypeChecker("boolean"),
          func: createPrimitiveTypeChecker("function"),
          number: createPrimitiveTypeChecker("number"),
          object: createPrimitiveTypeChecker("object"),
          string: createPrimitiveTypeChecker("string"),
          symbol: createPrimitiveTypeChecker("symbol"),
          any: createAnyTypeChecker(),
          arrayOf: createArrayOfTypeChecker,
          element: createElementTypeChecker(),
          elementType: createElementTypeTypeChecker(),
          instanceOf: createInstanceTypeChecker,
          node: createNodeChecker(),
          objectOf: createObjectOfTypeChecker,
          oneOf: createEnumTypeChecker,
          oneOfType: createUnionTypeChecker,
          shape: createShapeTypeChecker,
          exact: createStrictShapeTypeChecker
        };
        function is(x5, y4) {
          if (x5 === y4) {
            return x5 !== 0 || 1 / x5 === 1 / y4;
          } else {
            return x5 !== x5 && y4 !== y4;
          }
        }
        function PropTypeError(message, data) {
          this.message = message;
          this.data = data && typeof data === "object" ? data : {};
          this.stack = "";
        }
        PropTypeError.prototype = Error.prototype;
        function createChainableTypeChecker(validate) {
          if (true) {
            var manualPropTypeCallCache = {};
            var manualPropTypeWarningCount = 0;
          }
          function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
            componentName = componentName || ANONYMOUS;
            propFullName = propFullName || propName;
            if (secret !== ReactPropTypesSecret) {
              if (throwOnDirectAccess) {
                var err = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
                );
                err.name = "Invariant Violation";
                throw err;
              } else if (typeof console !== "undefined") {
                var cacheKey = componentName + ":" + propName;
                if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
                manualPropTypeWarningCount < 3) {
                  printWarning(
                    "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                  );
                  manualPropTypeCallCache[cacheKey] = true;
                  manualPropTypeWarningCount++;
                }
              }
            }
            if (props[propName] == null) {
              if (isRequired) {
                if (props[propName] === null) {
                  return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
                }
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
              }
              return null;
            } else {
              return validate(props, propName, componentName, location, propFullName);
            }
          }
          var chainedCheckType = checkType.bind(null, false);
          chainedCheckType.isRequired = checkType.bind(null, true);
          return chainedCheckType;
        }
        function createPrimitiveTypeChecker(expectedType) {
          function validate(props, propName, componentName, location, propFullName, secret) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== expectedType) {
              var preciseType = getPreciseType(propValue);
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
                { expectedType }
              );
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createAnyTypeChecker() {
          return createChainableTypeChecker(emptyFunctionThatReturnsNull);
        }
        function createArrayOfTypeChecker(typeChecker) {
          function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== "function") {
              return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
            }
            var propValue = props[propName];
            if (!Array.isArray(propValue)) {
              var propType = getPropType(propValue);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
            }
            for (var i5 = 0; i5 < propValue.length; i5++) {
              var error = typeChecker(propValue, i5, componentName, location, propFullName + "[" + i5 + "]", ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createElementTypeChecker() {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!isValidElement(propValue)) {
              var propType = getPropType(propValue);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createElementTypeTypeChecker() {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!ReactIs.isValidElementType(propValue)) {
              var propType = getPropType(propValue);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createInstanceTypeChecker(expectedClass) {
          function validate(props, propName, componentName, location, propFullName) {
            if (!(props[propName] instanceof expectedClass)) {
              var expectedClassName = expectedClass.name || ANONYMOUS;
              var actualClassName = getClassName(props[propName]);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createEnumTypeChecker(expectedValues) {
          if (!Array.isArray(expectedValues)) {
            if (true) {
              if (arguments.length > 1) {
                printWarning(
                  "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
                );
              } else {
                printWarning("Invalid argument supplied to oneOf, expected an array.");
              }
            }
            return emptyFunctionThatReturnsNull;
          }
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            for (var i5 = 0; i5 < expectedValues.length; i5++) {
              if (is(propValue, expectedValues[i5])) {
                return null;
              }
            }
            var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
              var type = getPreciseType(value);
              if (type === "symbol") {
                return String(value);
              }
              return value;
            });
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
          }
          return createChainableTypeChecker(validate);
        }
        function createObjectOfTypeChecker(typeChecker) {
          function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== "function") {
              return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
            }
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== "object") {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
            }
            for (var key in propValue) {
              if (has(propValue, key)) {
                var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                if (error instanceof Error) {
                  return error;
                }
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createUnionTypeChecker(arrayOfTypeCheckers) {
          if (!Array.isArray(arrayOfTypeCheckers)) {
            true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
            return emptyFunctionThatReturnsNull;
          }
          for (var i5 = 0; i5 < arrayOfTypeCheckers.length; i5++) {
            var checker = arrayOfTypeCheckers[i5];
            if (typeof checker !== "function") {
              printWarning(
                "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i5 + "."
              );
              return emptyFunctionThatReturnsNull;
            }
          }
          function validate(props, propName, componentName, location, propFullName) {
            var expectedTypes = [];
            for (var i6 = 0; i6 < arrayOfTypeCheckers.length; i6++) {
              var checker2 = arrayOfTypeCheckers[i6];
              var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
              if (checkerResult == null) {
                return null;
              }
              if (checkerResult.data && has(checkerResult.data, "expectedType")) {
                expectedTypes.push(checkerResult.data.expectedType);
              }
            }
            var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
          }
          return createChainableTypeChecker(validate);
        }
        function createNodeChecker() {
          function validate(props, propName, componentName, location, propFullName) {
            if (!isNode(props[propName])) {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function invalidValidatorError(componentName, location, propFullName, key, type) {
          return new PropTypeError(
            (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
          );
        }
        function createShapeTypeChecker(shapeTypes) {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== "object") {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
            }
            for (var key in shapeTypes) {
              var checker = shapeTypes[key];
              if (typeof checker !== "function") {
                return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
              }
              var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error) {
                return error;
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createStrictShapeTypeChecker(shapeTypes) {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== "object") {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
            }
            var allKeys = assign({}, props[propName], shapeTypes);
            for (var key in allKeys) {
              var checker = shapeTypes[key];
              if (has(shapeTypes, key) && typeof checker !== "function") {
                return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
              }
              if (!checker) {
                return new PropTypeError(
                  "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
                );
              }
              var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error) {
                return error;
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function isNode(propValue) {
          switch (typeof propValue) {
            case "number":
            case "string":
            case "undefined":
              return true;
            case "boolean":
              return !propValue;
            case "object":
              if (Array.isArray(propValue)) {
                return propValue.every(isNode);
              }
              if (propValue === null || isValidElement(propValue)) {
                return true;
              }
              var iteratorFn = getIteratorFn(propValue);
              if (iteratorFn) {
                var iterator = iteratorFn.call(propValue);
                var step;
                if (iteratorFn !== propValue.entries) {
                  while (!(step = iterator.next()).done) {
                    if (!isNode(step.value)) {
                      return false;
                    }
                  }
                } else {
                  while (!(step = iterator.next()).done) {
                    var entry = step.value;
                    if (entry) {
                      if (!isNode(entry[1])) {
                        return false;
                      }
                    }
                  }
                }
              } else {
                return false;
              }
              return true;
            default:
              return false;
          }
        }
        function isSymbol2(propType, propValue) {
          if (propType === "symbol") {
            return true;
          }
          if (!propValue) {
            return false;
          }
          if (propValue["@@toStringTag"] === "Symbol") {
            return true;
          }
          if (typeof Symbol === "function" && propValue instanceof Symbol) {
            return true;
          }
          return false;
        }
        function getPropType(propValue) {
          var propType = typeof propValue;
          if (Array.isArray(propValue)) {
            return "array";
          }
          if (propValue instanceof RegExp) {
            return "object";
          }
          if (isSymbol2(propType, propValue)) {
            return "symbol";
          }
          return propType;
        }
        function getPreciseType(propValue) {
          if (typeof propValue === "undefined" || propValue === null) {
            return "" + propValue;
          }
          var propType = getPropType(propValue);
          if (propType === "object") {
            if (propValue instanceof Date) {
              return "date";
            } else if (propValue instanceof RegExp) {
              return "regexp";
            }
          }
          return propType;
        }
        function getPostfixForTypeWarning(value) {
          var type = getPreciseType(value);
          switch (type) {
            case "array":
            case "object":
              return "an " + type;
            case "boolean":
            case "date":
            case "regexp":
              return "a " + type;
            default:
              return type;
          }
        }
        function getClassName(propValue) {
          if (!propValue.constructor || !propValue.constructor.name) {
            return ANONYMOUS;
          }
          return propValue.constructor.name;
        }
        ReactPropTypes.checkPropTypes = checkPropTypes;
        ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
        ReactPropTypes.PropTypes = ReactPropTypes;
        return ReactPropTypes;
      };
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/prop-types/index.js
  var require_prop_types = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/prop-types/index.js"(exports2, module2) {
      if (true) {
        ReactIs = require_react_is();
        throwOnDirectAccess = true;
        module2.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
      } else {
        module2.exports = null();
      }
      var ReactIs;
      var throwOnDirectAccess;
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@icons/material/UnfoldMoreHorizontalIcon.js
  var require_UnfoldMoreHorizontalIcon = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@icons/material/UnfoldMoreHorizontalIcon.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", {
        value: true
      });
      var _extends12 = Object.assign || function(target) {
        for (var i5 = 1; i5 < arguments.length; i5++) {
          var source = arguments[i5];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      var _react = (init_react(), __toCommonJS(react_exports));
      var _react2 = _interopRequireDefault(_react);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _objectWithoutProperties(obj, keys2) {
        var target = {};
        for (var i5 in obj) {
          if (keys2.indexOf(i5) >= 0)
            continue;
          if (!Object.prototype.hasOwnProperty.call(obj, i5))
            continue;
          target[i5] = obj[i5];
        }
        return target;
      }
      var DEFAULT_SIZE = 24;
      exports2.default = function(_ref) {
        var _ref$fill = _ref.fill, fill = _ref$fill === void 0 ? "currentColor" : _ref$fill, _ref$width = _ref.width, width = _ref$width === void 0 ? DEFAULT_SIZE : _ref$width, _ref$height = _ref.height, height = _ref$height === void 0 ? DEFAULT_SIZE : _ref$height, _ref$style = _ref.style, style = _ref$style === void 0 ? {} : _ref$style, props = _objectWithoutProperties(_ref, ["fill", "width", "height", "style"]);
        return _react2.default.createElement(
          "svg",
          _extends12({
            viewBox: "0 0 " + DEFAULT_SIZE + " " + DEFAULT_SIZE,
            style: _extends12({ fill, width, height }, style)
          }, props),
          _react2.default.createElement("path", { d: "M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z" })
        );
      };
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@icons/material/CheckIcon.js
  var require_CheckIcon = __commonJS({
    "../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@icons/material/CheckIcon.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", {
        value: true
      });
      var _extends12 = Object.assign || function(target) {
        for (var i5 = 1; i5 < arguments.length; i5++) {
          var source = arguments[i5];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      var _react = (init_react(), __toCommonJS(react_exports));
      var _react2 = _interopRequireDefault(_react);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _objectWithoutProperties(obj, keys2) {
        var target = {};
        for (var i5 in obj) {
          if (keys2.indexOf(i5) >= 0)
            continue;
          if (!Object.prototype.hasOwnProperty.call(obj, i5))
            continue;
          target[i5] = obj[i5];
        }
        return target;
      }
      var DEFAULT_SIZE = 24;
      exports2.default = function(_ref) {
        var _ref$fill = _ref.fill, fill = _ref$fill === void 0 ? "currentColor" : _ref$fill, _ref$width = _ref.width, width = _ref$width === void 0 ? DEFAULT_SIZE : _ref$width, _ref$height = _ref.height, height = _ref$height === void 0 ? DEFAULT_SIZE : _ref$height, _ref$style = _ref.style, style = _ref$style === void 0 ? {} : _ref$style, props = _objectWithoutProperties(_ref, ["fill", "width", "height", "style"]);
        return _react2.default.createElement(
          "svg",
          _extends12({
            viewBox: "0 0 " + DEFAULT_SIZE + " " + DEFAULT_SIZE,
            style: _extends12({ fill, width, height }, style)
          }, props),
          _react2.default.createElement("path", { d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" })
        );
      };
    }
  });

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@lit/reactive-element/css-tag.js
  var t = window;
  var e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
  var s = Symbol();
  var n = /* @__PURE__ */ new WeakMap();
  var o = class {
    constructor(t5, e6, n6) {
      if (this._$cssResult$ = true, n6 !== s)
        throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t5, this.t = e6;
    }
    get styleSheet() {
      let t5 = this.o;
      const s7 = this.t;
      if (e && void 0 === t5) {
        const e6 = void 0 !== s7 && 1 === s7.length;
        e6 && (t5 = n.get(s7)), void 0 === t5 && ((this.o = t5 = new CSSStyleSheet()).replaceSync(this.cssText), e6 && n.set(s7, t5));
      }
      return t5;
    }
    toString() {
      return this.cssText;
    }
  };
  var r = (t5) => new o("string" == typeof t5 ? t5 : t5 + "", void 0, s);
  var i = (t5, ...e6) => {
    const n6 = 1 === t5.length ? t5[0] : e6.reduce((e7, s7, n7) => e7 + ((t6) => {
      if (true === t6._$cssResult$)
        return t6.cssText;
      if ("number" == typeof t6)
        return t6;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t6 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(s7) + t5[n7 + 1], t5[0]);
    return new o(n6, t5, s);
  };
  var S = (s7, n6) => {
    e ? s7.adoptedStyleSheets = n6.map((t5) => t5 instanceof CSSStyleSheet ? t5 : t5.styleSheet) : n6.forEach((e6) => {
      const n7 = document.createElement("style"), o7 = t.litNonce;
      void 0 !== o7 && n7.setAttribute("nonce", o7), n7.textContent = e6.cssText, s7.appendChild(n7);
    });
  };
  var c = e ? (t5) => t5 : (t5) => t5 instanceof CSSStyleSheet ? ((t6) => {
    let e6 = "";
    for (const s7 of t6.cssRules)
      e6 += s7.cssText;
    return r(e6);
  })(t5) : t5;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@lit/reactive-element/reactive-element.js
  var s2;
  var e2 = window;
  var r2 = e2.trustedTypes;
  var h = r2 ? r2.emptyScript : "";
  var o2 = e2.reactiveElementPolyfillSupport;
  var n2 = { toAttribute(t5, i5) {
    switch (i5) {
      case Boolean:
        t5 = t5 ? h : null;
        break;
      case Object:
      case Array:
        t5 = null == t5 ? t5 : JSON.stringify(t5);
    }
    return t5;
  }, fromAttribute(t5, i5) {
    let s7 = t5;
    switch (i5) {
      case Boolean:
        s7 = null !== t5;
        break;
      case Number:
        s7 = null === t5 ? null : Number(t5);
        break;
      case Object:
      case Array:
        try {
          s7 = JSON.parse(t5);
        } catch (t6) {
          s7 = null;
        }
    }
    return s7;
  } };
  var a = (t5, i5) => i5 !== t5 && (i5 == i5 || t5 == t5);
  var l = { attribute: true, type: String, converter: n2, reflect: false, hasChanged: a };
  var d = class extends HTMLElement {
    constructor() {
      super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$El = null, this.u();
    }
    static addInitializer(t5) {
      var i5;
      this.finalize(), (null !== (i5 = this.h) && void 0 !== i5 ? i5 : this.h = []).push(t5);
    }
    static get observedAttributes() {
      this.finalize();
      const t5 = [];
      return this.elementProperties.forEach((i5, s7) => {
        const e6 = this._$Ep(s7, i5);
        void 0 !== e6 && (this._$Ev.set(e6, s7), t5.push(e6));
      }), t5;
    }
    static createProperty(t5, i5 = l) {
      if (i5.state && (i5.attribute = false), this.finalize(), this.elementProperties.set(t5, i5), !i5.noAccessor && !this.prototype.hasOwnProperty(t5)) {
        const s7 = "symbol" == typeof t5 ? Symbol() : "__" + t5, e6 = this.getPropertyDescriptor(t5, s7, i5);
        void 0 !== e6 && Object.defineProperty(this.prototype, t5, e6);
      }
    }
    static getPropertyDescriptor(t5, i5, s7) {
      return { get() {
        return this[i5];
      }, set(e6) {
        const r6 = this[t5];
        this[i5] = e6, this.requestUpdate(t5, r6, s7);
      }, configurable: true, enumerable: true };
    }
    static getPropertyOptions(t5) {
      return this.elementProperties.get(t5) || l;
    }
    static finalize() {
      if (this.hasOwnProperty("finalized"))
        return false;
      this.finalized = true;
      const t5 = Object.getPrototypeOf(this);
      if (t5.finalize(), void 0 !== t5.h && (this.h = [...t5.h]), this.elementProperties = new Map(t5.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
        const t6 = this.properties, i5 = [...Object.getOwnPropertyNames(t6), ...Object.getOwnPropertySymbols(t6)];
        for (const s7 of i5)
          this.createProperty(s7, t6[s7]);
      }
      return this.elementStyles = this.finalizeStyles(this.styles), true;
    }
    static finalizeStyles(i5) {
      const s7 = [];
      if (Array.isArray(i5)) {
        const e6 = new Set(i5.flat(1 / 0).reverse());
        for (const i6 of e6)
          s7.unshift(c(i6));
      } else
        void 0 !== i5 && s7.push(c(i5));
      return s7;
    }
    static _$Ep(t5, i5) {
      const s7 = i5.attribute;
      return false === s7 ? void 0 : "string" == typeof s7 ? s7 : "string" == typeof t5 ? t5.toLowerCase() : void 0;
    }
    u() {
      var t5;
      this._$E_ = new Promise((t6) => this.enableUpdating = t6), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), null === (t5 = this.constructor.h) || void 0 === t5 || t5.forEach((t6) => t6(this));
    }
    addController(t5) {
      var i5, s7;
      (null !== (i5 = this._$ES) && void 0 !== i5 ? i5 : this._$ES = []).push(t5), void 0 !== this.renderRoot && this.isConnected && (null === (s7 = t5.hostConnected) || void 0 === s7 || s7.call(t5));
    }
    removeController(t5) {
      var i5;
      null === (i5 = this._$ES) || void 0 === i5 || i5.splice(this._$ES.indexOf(t5) >>> 0, 1);
    }
    _$Eg() {
      this.constructor.elementProperties.forEach((t5, i5) => {
        this.hasOwnProperty(i5) && (this._$Ei.set(i5, this[i5]), delete this[i5]);
      });
    }
    createRenderRoot() {
      var t5;
      const s7 = null !== (t5 = this.shadowRoot) && void 0 !== t5 ? t5 : this.attachShadow(this.constructor.shadowRootOptions);
      return S(s7, this.constructor.elementStyles), s7;
    }
    connectedCallback() {
      var t5;
      void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), null === (t5 = this._$ES) || void 0 === t5 || t5.forEach((t6) => {
        var i5;
        return null === (i5 = t6.hostConnected) || void 0 === i5 ? void 0 : i5.call(t6);
      });
    }
    enableUpdating(t5) {
    }
    disconnectedCallback() {
      var t5;
      null === (t5 = this._$ES) || void 0 === t5 || t5.forEach((t6) => {
        var i5;
        return null === (i5 = t6.hostDisconnected) || void 0 === i5 ? void 0 : i5.call(t6);
      });
    }
    attributeChangedCallback(t5, i5, s7) {
      this._$AK(t5, s7);
    }
    _$EO(t5, i5, s7 = l) {
      var e6;
      const r6 = this.constructor._$Ep(t5, s7);
      if (void 0 !== r6 && true === s7.reflect) {
        const h5 = (void 0 !== (null === (e6 = s7.converter) || void 0 === e6 ? void 0 : e6.toAttribute) ? s7.converter : n2).toAttribute(i5, s7.type);
        this._$El = t5, null == h5 ? this.removeAttribute(r6) : this.setAttribute(r6, h5), this._$El = null;
      }
    }
    _$AK(t5, i5) {
      var s7;
      const e6 = this.constructor, r6 = e6._$Ev.get(t5);
      if (void 0 !== r6 && this._$El !== r6) {
        const t6 = e6.getPropertyOptions(r6), h5 = "function" == typeof t6.converter ? { fromAttribute: t6.converter } : void 0 !== (null === (s7 = t6.converter) || void 0 === s7 ? void 0 : s7.fromAttribute) ? t6.converter : n2;
        this._$El = r6, this[r6] = h5.fromAttribute(i5, t6.type), this._$El = null;
      }
    }
    requestUpdate(t5, i5, s7) {
      let e6 = true;
      void 0 !== t5 && (((s7 = s7 || this.constructor.getPropertyOptions(t5)).hasChanged || a)(this[t5], i5) ? (this._$AL.has(t5) || this._$AL.set(t5, i5), true === s7.reflect && this._$El !== t5 && (void 0 === this._$EC && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t5, s7))) : e6 = false), !this.isUpdatePending && e6 && (this._$E_ = this._$Ej());
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
      this.hasUpdated, this._$Ei && (this._$Ei.forEach((t6, i6) => this[i6] = t6), this._$Ei = void 0);
      let i5 = false;
      const s7 = this._$AL;
      try {
        i5 = this.shouldUpdate(s7), i5 ? (this.willUpdate(s7), null === (t5 = this._$ES) || void 0 === t5 || t5.forEach((t6) => {
          var i6;
          return null === (i6 = t6.hostUpdate) || void 0 === i6 ? void 0 : i6.call(t6);
        }), this.update(s7)) : this._$Ek();
      } catch (t6) {
        throw i5 = false, this._$Ek(), t6;
      }
      i5 && this._$AE(s7);
    }
    willUpdate(t5) {
    }
    _$AE(t5) {
      var i5;
      null === (i5 = this._$ES) || void 0 === i5 || i5.forEach((t6) => {
        var i6;
        return null === (i6 = t6.hostUpdated) || void 0 === i6 ? void 0 : i6.call(t6);
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
      void 0 !== this._$EC && (this._$EC.forEach((t6, i5) => this._$EO(i5, this[i5], t6)), this._$EC = void 0), this._$Ek();
    }
    updated(t5) {
    }
    firstUpdated(t5) {
    }
  };
  d.finalized = true, d.elementProperties = /* @__PURE__ */ new Map(), d.elementStyles = [], d.shadowRootOptions = { mode: "open" }, null == o2 || o2({ ReactiveElement: d }), (null !== (s2 = e2.reactiveElementVersions) && void 0 !== s2 ? s2 : e2.reactiveElementVersions = []).push("1.6.1");

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lit-html/lit-html.js
  var t2;
  var i2 = window;
  var s3 = i2.trustedTypes;
  var e3 = s3 ? s3.createPolicy("lit-html", { createHTML: (t5) => t5 }) : void 0;
  var o3 = "$lit$";
  var n3 = `lit$${(Math.random() + "").slice(9)}$`;
  var l2 = "?" + n3;
  var h2 = `<${l2}>`;
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
  var w = (t5) => (i5, ...s7) => ({ _$litType$: t5, strings: i5, values: s7 });
  var x = w(1);
  var b = w(2);
  var T = Symbol.for("lit-noChange");
  var A = Symbol.for("lit-nothing");
  var E = /* @__PURE__ */ new WeakMap();
  var C = r3.createTreeWalker(r3, 129, null, false);
  var P = (t5, i5) => {
    const s7 = t5.length - 1, l6 = [];
    let r6, d5 = 2 === i5 ? "<svg>" : "", u4 = f;
    for (let i6 = 0; i6 < s7; i6++) {
      const s8 = t5[i6];
      let e6, c6, v4 = -1, a5 = 0;
      for (; a5 < s8.length && (u4.lastIndex = a5, c6 = u4.exec(s8), null !== c6); )
        a5 = u4.lastIndex, u4 === f ? "!--" === c6[1] ? u4 = _ : void 0 !== c6[1] ? u4 = m : void 0 !== c6[2] ? (y.test(c6[2]) && (r6 = RegExp("</" + c6[2], "g")), u4 = p) : void 0 !== c6[3] && (u4 = p) : u4 === p ? ">" === c6[0] ? (u4 = null != r6 ? r6 : f, v4 = -1) : void 0 === c6[1] ? v4 = -2 : (v4 = u4.lastIndex - c6[2].length, e6 = c6[1], u4 = void 0 === c6[3] ? p : '"' === c6[3] ? $2 : g) : u4 === $2 || u4 === g ? u4 = p : u4 === _ || u4 === m ? u4 = f : (u4 = p, r6 = void 0);
      const w5 = u4 === p && t5[i6 + 1].startsWith("/>") ? " " : "";
      d5 += u4 === f ? s8 + h2 : v4 >= 0 ? (l6.push(e6), s8.slice(0, v4) + o3 + s8.slice(v4) + n3 + w5) : s8 + n3 + (-2 === v4 ? (l6.push(void 0), i6) : w5);
    }
    const c5 = d5 + (t5[s7] || "<?>") + (2 === i5 ? "</svg>" : "");
    if (!Array.isArray(t5) || !t5.hasOwnProperty("raw"))
      throw Error("invalid template strings array");
    return [void 0 !== e3 ? e3.createHTML(c5) : c5, l6];
  };
  var V = class {
    constructor({ strings: t5, _$litType$: i5 }, e6) {
      let h5;
      this.parts = [];
      let r6 = 0, u4 = 0;
      const c5 = t5.length - 1, v4 = this.parts, [a5, f4] = P(t5, i5);
      if (this.el = V.createElement(a5, e6), C.currentNode = this.el.content, 2 === i5) {
        const t6 = this.el.content, i6 = t6.firstChild;
        i6.remove(), t6.append(...i6.childNodes);
      }
      for (; null !== (h5 = C.nextNode()) && v4.length < c5; ) {
        if (1 === h5.nodeType) {
          if (h5.hasAttributes()) {
            const t6 = [];
            for (const i6 of h5.getAttributeNames())
              if (i6.endsWith(o3) || i6.startsWith(n3)) {
                const s7 = f4[u4++];
                if (t6.push(i6), void 0 !== s7) {
                  const t7 = h5.getAttribute(s7.toLowerCase() + o3).split(n3), i7 = /([.?@])?(.*)/.exec(s7);
                  v4.push({ type: 1, index: r6, name: i7[2], strings: t7, ctor: "." === i7[1] ? k : "?" === i7[1] ? I : "@" === i7[1] ? L : R });
                } else
                  v4.push({ type: 6, index: r6 });
              }
            for (const i6 of t6)
              h5.removeAttribute(i6);
          }
          if (y.test(h5.tagName)) {
            const t6 = h5.textContent.split(n3), i6 = t6.length - 1;
            if (i6 > 0) {
              h5.textContent = s3 ? s3.emptyScript : "";
              for (let s7 = 0; s7 < i6; s7++)
                h5.append(t6[s7], d2()), C.nextNode(), v4.push({ type: 2, index: ++r6 });
              h5.append(t6[i6], d2());
            }
          }
        } else if (8 === h5.nodeType)
          if (h5.data === l2)
            v4.push({ type: 2, index: r6 });
          else {
            let t6 = -1;
            for (; -1 !== (t6 = h5.data.indexOf(n3, t6 + 1)); )
              v4.push({ type: 7, index: r6 }), t6 += n3.length - 1;
          }
        r6++;
      }
    }
    static createElement(t5, i5) {
      const s7 = r3.createElement("template");
      return s7.innerHTML = t5, s7;
    }
  };
  function N(t5, i5, s7 = t5, e6) {
    var o7, n6, l6, h5;
    if (i5 === T)
      return i5;
    let r6 = void 0 !== e6 ? null === (o7 = s7._$Co) || void 0 === o7 ? void 0 : o7[e6] : s7._$Cl;
    const d5 = u(i5) ? void 0 : i5._$litDirective$;
    return (null == r6 ? void 0 : r6.constructor) !== d5 && (null === (n6 = null == r6 ? void 0 : r6._$AO) || void 0 === n6 || n6.call(r6, false), void 0 === d5 ? r6 = void 0 : (r6 = new d5(t5), r6._$AT(t5, s7, e6)), void 0 !== e6 ? (null !== (l6 = (h5 = s7)._$Co) && void 0 !== l6 ? l6 : h5._$Co = [])[e6] = r6 : s7._$Cl = r6), void 0 !== r6 && (i5 = N(t5, r6._$AS(t5, i5.values), r6, e6)), i5;
  }
  var S2 = class {
    constructor(t5, i5) {
      this._$AV = [], this._$AN = void 0, this._$AD = t5, this._$AM = i5;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(t5) {
      var i5;
      const { el: { content: s7 }, parts: e6 } = this._$AD, o7 = (null !== (i5 = null == t5 ? void 0 : t5.creationScope) && void 0 !== i5 ? i5 : r3).importNode(s7, true);
      C.currentNode = o7;
      let n6 = C.nextNode(), l6 = 0, h5 = 0, d5 = e6[0];
      for (; void 0 !== d5; ) {
        if (l6 === d5.index) {
          let i6;
          2 === d5.type ? i6 = new M(n6, n6.nextSibling, this, t5) : 1 === d5.type ? i6 = new d5.ctor(n6, d5.name, d5.strings, this, t5) : 6 === d5.type && (i6 = new z(n6, this, t5)), this._$AV.push(i6), d5 = e6[++h5];
        }
        l6 !== (null == d5 ? void 0 : d5.index) && (n6 = C.nextNode(), l6++);
      }
      return C.currentNode = r3, o7;
    }
    v(t5) {
      let i5 = 0;
      for (const s7 of this._$AV)
        void 0 !== s7 && (void 0 !== s7.strings ? (s7._$AI(t5, s7, i5), i5 += s7.strings.length - 2) : s7._$AI(t5[i5])), i5++;
    }
  };
  var M = class {
    constructor(t5, i5, s7, e6) {
      var o7;
      this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t5, this._$AB = i5, this._$AM = s7, this.options = e6, this._$Cp = null === (o7 = null == e6 ? void 0 : e6.isConnected) || void 0 === o7 || o7;
    }
    get _$AU() {
      var t5, i5;
      return null !== (i5 = null === (t5 = this._$AM) || void 0 === t5 ? void 0 : t5._$AU) && void 0 !== i5 ? i5 : this._$Cp;
    }
    get parentNode() {
      let t5 = this._$AA.parentNode;
      const i5 = this._$AM;
      return void 0 !== i5 && 11 === (null == t5 ? void 0 : t5.nodeType) && (t5 = i5.parentNode), t5;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t5, i5 = this) {
      t5 = N(this, t5, i5), u(t5) ? t5 === A || null == t5 || "" === t5 ? (this._$AH !== A && this._$AR(), this._$AH = A) : t5 !== this._$AH && t5 !== T && this._(t5) : void 0 !== t5._$litType$ ? this.g(t5) : void 0 !== t5.nodeType ? this.$(t5) : v(t5) ? this.T(t5) : this._(t5);
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
      var i5;
      const { values: s7, _$litType$: e6 } = t5, o7 = "number" == typeof e6 ? this._$AC(t5) : (void 0 === e6.el && (e6.el = V.createElement(e6.h, this.options)), e6);
      if ((null === (i5 = this._$AH) || void 0 === i5 ? void 0 : i5._$AD) === o7)
        this._$AH.v(s7);
      else {
        const t6 = new S2(o7, this), i6 = t6.u(this.options);
        t6.v(s7), this.$(i6), this._$AH = t6;
      }
    }
    _$AC(t5) {
      let i5 = E.get(t5.strings);
      return void 0 === i5 && E.set(t5.strings, i5 = new V(t5)), i5;
    }
    T(t5) {
      c2(this._$AH) || (this._$AH = [], this._$AR());
      const i5 = this._$AH;
      let s7, e6 = 0;
      for (const o7 of t5)
        e6 === i5.length ? i5.push(s7 = new M(this.k(d2()), this.k(d2()), this, this.options)) : s7 = i5[e6], s7._$AI(o7), e6++;
      e6 < i5.length && (this._$AR(s7 && s7._$AB.nextSibling, e6), i5.length = e6);
    }
    _$AR(t5 = this._$AA.nextSibling, i5) {
      var s7;
      for (null === (s7 = this._$AP) || void 0 === s7 || s7.call(this, false, true, i5); t5 && t5 !== this._$AB; ) {
        const i6 = t5.nextSibling;
        t5.remove(), t5 = i6;
      }
    }
    setConnected(t5) {
      var i5;
      void 0 === this._$AM && (this._$Cp = t5, null === (i5 = this._$AP) || void 0 === i5 || i5.call(this, t5));
    }
  };
  var R = class {
    constructor(t5, i5, s7, e6, o7) {
      this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t5, this.name = i5, this._$AM = e6, this.options = o7, s7.length > 2 || "" !== s7[0] || "" !== s7[1] ? (this._$AH = Array(s7.length - 1).fill(new String()), this.strings = s7) : this._$AH = A;
    }
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t5, i5 = this, s7, e6) {
      const o7 = this.strings;
      let n6 = false;
      if (void 0 === o7)
        t5 = N(this, t5, i5, 0), n6 = !u(t5) || t5 !== this._$AH && t5 !== T, n6 && (this._$AH = t5);
      else {
        const e7 = t5;
        let l6, h5;
        for (t5 = o7[0], l6 = 0; l6 < o7.length - 1; l6++)
          h5 = N(this, e7[s7 + l6], i5, l6), h5 === T && (h5 = this._$AH[l6]), n6 || (n6 = !u(h5) || h5 !== this._$AH[l6]), h5 === A ? t5 = A : t5 !== A && (t5 += (null != h5 ? h5 : "") + o7[l6 + 1]), this._$AH[l6] = h5;
      }
      n6 && !e6 && this.j(t5);
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
    constructor(t5, i5, s7, e6, o7) {
      super(t5, i5, s7, e6, o7), this.type = 5;
    }
    _$AI(t5, i5 = this) {
      var s7;
      if ((t5 = null !== (s7 = N(this, t5, i5, 0)) && void 0 !== s7 ? s7 : A) === T)
        return;
      const e6 = this._$AH, o7 = t5 === A && e6 !== A || t5.capture !== e6.capture || t5.once !== e6.once || t5.passive !== e6.passive, n6 = t5 !== A && (e6 === A || o7);
      o7 && this.element.removeEventListener(this.name, this, e6), n6 && this.element.addEventListener(this.name, this, t5), this._$AH = t5;
    }
    handleEvent(t5) {
      var i5, s7;
      "function" == typeof this._$AH ? this._$AH.call(null !== (s7 = null === (i5 = this.options) || void 0 === i5 ? void 0 : i5.host) && void 0 !== s7 ? s7 : this.element, t5) : this._$AH.handleEvent(t5);
    }
  };
  var z = class {
    constructor(t5, i5, s7) {
      this.element = t5, this.type = 6, this._$AN = void 0, this._$AM = i5, this.options = s7;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t5) {
      N(this, t5);
    }
  };
  var j = i2.litHtmlPolyfillSupport;
  null == j || j(V, M), (null !== (t2 = i2.litHtmlVersions) && void 0 !== t2 ? t2 : i2.litHtmlVersions = []).push("2.7.4");
  var B = (t5, i5, s7) => {
    var e6, o7;
    const n6 = null !== (e6 = null == s7 ? void 0 : s7.renderBefore) && void 0 !== e6 ? e6 : i5;
    let l6 = n6._$litPart$;
    if (void 0 === l6) {
      const t6 = null !== (o7 = null == s7 ? void 0 : s7.renderBefore) && void 0 !== o7 ? o7 : null;
      n6._$litPart$ = l6 = new M(i5.insertBefore(d2(), t6), t6, void 0, null != s7 ? s7 : {});
    }
    return l6._$AI(t5), l6;
  };

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lit-element/lit-element.js
  var l3;
  var o4;
  var s4 = class extends d {
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
    }
    createRenderRoot() {
      var t5, e6;
      const i5 = super.createRenderRoot();
      return null !== (t5 = (e6 = this.renderOptions).renderBefore) && void 0 !== t5 || (e6.renderBefore = i5.firstChild), i5;
    }
    update(t5) {
      const i5 = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t5), this._$Do = B(i5, this.renderRoot, this.renderOptions);
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
  s4.finalized = true, s4._$litElement$ = true, null === (l3 = globalThis.litElementHydrateSupport) || void 0 === l3 || l3.call(globalThis, { LitElement: s4 });
  var n4 = globalThis.litElementPolyfillSupport;
  null == n4 || n4({ LitElement: s4 });
  (null !== (o4 = globalThis.litElementVersions) && void 0 !== o4 ? o4 : globalThis.litElementVersions = []).push("3.3.2");

  // src/collapsible.ts
  var dir_to_icon = {
    to_right: "\u25BA",
    to_left: "\u25C0\uFE0E",
    to_bottom: "\u25B2",
    to_top: "\u25B2"
  };
  var horizontal_collapse_styles = i`
  .horizontal .content {
    max-width: 100vw;
    transition: max-width var(--transition), transform var(--transition),
      padding-inline var(--transition);
  }

  .horizontal.open .content {
  }

  .horizontal .content > * {
    min-width: 0;
  }

  .horizontal .toggle {
    padding-inline: var(--size-1);
  }

  .horizontal.closed .toggle > .icon {
    transform: scaleX(-1);
  }

  .horizontal.closed .content {
    max-width: 0;
    transform: scaleX(0);
    padding-inline: 0;
  }
`;
  var to_left_collapse_styles = i`
  .to_left .content {
    transform-origin: left;
  }
  .to_left .toggle {
    top: var(--size-1);
    right: var(--space-small);
    width: var(--toggle-size);
    height: auto;
  }
`;
  var to_right_collapse_styles = i`
  .to_right .content {
    transform-origin: left;
  }
  .to_right .toggle {
    order: -1;
    top: var(--size-1);
    right: 0;
    width: var(--toggle-size);
    height: auto;
  }
`;
  var vertical_collapse_styles = i`
  .vertical {
    flex-direction: column;
  }

  .vertical > .content {
    max-height: 100vh;
    transition: max-height var(--transition), transform var(--transition),
      padding-block var(--transition);
  }

  .vertical > .toggle {
    min-height: var(--size-7);
  }

  .vertical .toggle > .icon {
    position: absolute;
    right: var(--space-x-small);
  }

  .vertical.closed .toggle > .icon {
    transform: rotate(180deg);
  }

  .vertical.content > ::slotted(*) {
    min-height: 0;
  }

  .vertical.closed .content {
    transform: scaleY(0);
    max-height: 0;
    padding-block: 0;
  }
`;
  var to_bottom_collapse_styles = i`
  .to_bottom .toggle {
    order: -1;
    right: var(--space-medium);
    bottom: 0;
  }
`;
  var to_top_collapse_styles = i`
  .to_top .toggle {
    right: var(--size-1);
  }
`;
  var Collapsible = class extends s4 {
    constructor() {
      super();
      this.start_state = "open";
      this.opened = null;
      this.dir = "to_top";
      this.label = null;
    }
    render() {
      return x`
      <div
        class="container ${this.dir} ${this.dir === "to_bottom" || this.dir === "to_top" ? "vertical" : "horizontal"} ${this.is_open ? "open" : "closed"}"
      >
        <div class="content">
          <slot></slot>
        </div>
        <div
          class="toggle"
          @click=${this.toggle_open}
          title=${this.is_open ? "Close collapsible" : "Open collapsible"}
        >
          ${this.label ? x`<span>${this.label}</span>` : ""}
          <span class="icon"> ${dir_to_icon[this.dir]} </span>
        </div>
      </div>
    `;
    }
    get is_open() {
      if (this.opened === null) {
        return this.start_state === "open";
      }
      return this.opened;
    }
    toggle_open() {
      if (this.opened === null) {
        this.opened = this.start_state !== "open";
        return;
      }
      this.opened = !this.opened;
      window.dispatchEvent(new Event("resize"));
    }
  };
  Collapsible.properties = {
    label: {},
    opened: { type: "boolean" },
    start_state: {},
    dir: {}
  };
  // Styles are scoped to this element: they won't conflict with styles
  // on the main page or in other components. Styling API can be exposed
  // via CSS custom properties.
  Collapsible.styles = [
    i`
      :host {
        display: block;
        font-family: var(--font-family, sans-serif);
        --transition: 0.4s var(--ease-3);
        --toggle-size: 20px;
        --accent-color: var(--stone-3);
        position: relative;
        outline: 1px solid var(--accent-color, pink);
        margin: var(--size-3);
        border-radius: var(--radius-2);
      }

      .container {
        display: flex;
      }

      .content {
        overflow: scroll;
        transition: transform var(--transition);
        padding: var(--size-fluid-1);
      }

      .toggle {
        background-color: var(--accent-color);
        font-size: var(--font-size-3);
        display: grid;
        place-content: center;
        cursor: pointer;
      }

      .toggle > .icon {
        transition: transform var(--transition);
        user-select: none;
        color: var(--color-action);
      }
    `,
    horizontal_collapse_styles,
    to_right_collapse_styles,
    to_left_collapse_styles,
    vertical_collapse_styles,
    to_bottom_collapse_styles,
    to_top_collapse_styles
  ];
  customElements.define("shiny-collapsible", Collapsible);

  // src/color-picker.tsx
  init_react();

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/alpha/Alpha.js
  init_react();
  var import_reactcss9 = __toESM(require_lib());

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/common/Alpha.js
  init_react();
  var import_reactcss2 = __toESM(require_lib());

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/helpers/alpha.js
  var calculateChange = function calculateChange2(e6, hsl, direction, initialA, container) {
    var containerWidth = container.clientWidth;
    var containerHeight = container.clientHeight;
    var x5 = typeof e6.pageX === "number" ? e6.pageX : e6.touches[0].pageX;
    var y4 = typeof e6.pageY === "number" ? e6.pageY : e6.touches[0].pageY;
    var left = x5 - (container.getBoundingClientRect().left + window.pageXOffset);
    var top = y4 - (container.getBoundingClientRect().top + window.pageYOffset);
    if (direction === "vertical") {
      var a5 = void 0;
      if (top < 0) {
        a5 = 0;
      } else if (top > containerHeight) {
        a5 = 1;
      } else {
        a5 = Math.round(top * 100 / containerHeight) / 100;
      }
      if (hsl.a !== a5) {
        return {
          h: hsl.h,
          s: hsl.s,
          l: hsl.l,
          a: a5,
          source: "rgb"
        };
      }
    } else {
      var _a = void 0;
      if (left < 0) {
        _a = 0;
      } else if (left > containerWidth) {
        _a = 1;
      } else {
        _a = Math.round(left * 100 / containerWidth) / 100;
      }
      if (initialA !== _a) {
        return {
          h: hsl.h,
          s: hsl.s,
          l: hsl.l,
          a: _a,
          source: "rgb"
        };
      }
    }
    return null;
  };

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/common/Checkboard.js
  init_react();
  var import_reactcss = __toESM(require_lib());

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/helpers/checkboard.js
  var checkboardCache = {};
  var render = function render2(c1, c22, size, serverCanvas) {
    if (typeof document === "undefined" && !serverCanvas) {
      return null;
    }
    var canvas = serverCanvas ? new serverCanvas() : document.createElement("canvas");
    canvas.width = size * 2;
    canvas.height = size * 2;
    var ctx = canvas.getContext("2d");
    if (!ctx) {
      return null;
    }
    ctx.fillStyle = c1;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = c22;
    ctx.fillRect(0, 0, size, size);
    ctx.translate(size, size);
    ctx.fillRect(0, 0, size, size);
    return canvas.toDataURL();
  };
  var get = function get2(c1, c22, size, serverCanvas) {
    var key = c1 + "-" + c22 + "-" + size + (serverCanvas ? "-server" : "");
    if (checkboardCache[key]) {
      return checkboardCache[key];
    }
    var checkboard = render(c1, c22, size, serverCanvas);
    checkboardCache[key] = checkboard;
    return checkboard;
  };

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/common/Checkboard.js
  var _extends = Object.assign || function(target) {
    for (var i5 = 1; i5 < arguments.length; i5++) {
      var source = arguments[i5];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  var Checkboard = function Checkboard2(_ref) {
    var white = _ref.white, grey = _ref.grey, size = _ref.size, renderers = _ref.renderers, borderRadius = _ref.borderRadius, boxShadow = _ref.boxShadow, children = _ref.children;
    var styles = (0, import_reactcss.default)({
      "default": {
        grid: {
          borderRadius,
          boxShadow,
          absolute: "0px 0px 0px 0px",
          background: "url(" + get(white, grey, size, renderers.canvas) + ") center left"
        }
      }
    });
    return an(children) ? Cn.cloneElement(children, _extends({}, children.props, { style: _extends({}, children.props.style, styles.grid) })) : Cn.createElement("div", { style: styles.grid });
  };
  Checkboard.defaultProps = {
    size: 8,
    white: "transparent",
    grey: "rgba(0,0,0,.08)",
    renderers: {}
  };
  var Checkboard_default = Checkboard;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/common/Alpha.js
  var _extends2 = Object.assign || function(target) {
    for (var i5 = 1; i5 < arguments.length; i5++) {
      var source = arguments[i5];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  var _createClass = function() {
    function defineProperties(target, props) {
      for (var i5 = 0; i5 < props.length; i5++) {
        var descriptor = props[i5];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _possibleConstructorReturn(self2, call) {
    if (!self2) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self2;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
    if (superClass)
      Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var Alpha = function(_ref) {
    _inherits(Alpha2, _ref);
    function Alpha2() {
      var _ref2;
      var _temp, _this, _ret;
      _classCallCheck(this, Alpha2);
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Alpha2.__proto__ || Object.getPrototypeOf(Alpha2)).call.apply(_ref2, [this].concat(args))), _this), _this.handleChange = function(e6) {
        var change = calculateChange(e6, _this.props.hsl, _this.props.direction, _this.props.a, _this.container);
        change && typeof _this.props.onChange === "function" && _this.props.onChange(change, e6);
      }, _this.handleMouseDown = function(e6) {
        _this.handleChange(e6);
        window.addEventListener("mousemove", _this.handleChange);
        window.addEventListener("mouseup", _this.handleMouseUp);
      }, _this.handleMouseUp = function() {
        _this.unbindEventListeners();
      }, _this.unbindEventListeners = function() {
        window.removeEventListener("mousemove", _this.handleChange);
        window.removeEventListener("mouseup", _this.handleMouseUp);
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }
    _createClass(Alpha2, [{
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.unbindEventListeners();
      }
    }, {
      key: "render",
      value: function render3() {
        var _this2 = this;
        var rgb = this.props.rgb;
        var styles = (0, import_reactcss2.default)({
          "default": {
            alpha: {
              absolute: "0px 0px 0px 0px",
              borderRadius: this.props.radius
            },
            checkboard: {
              absolute: "0px 0px 0px 0px",
              overflow: "hidden",
              borderRadius: this.props.radius
            },
            gradient: {
              absolute: "0px 0px 0px 0px",
              background: "linear-gradient(to right, rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + ", 0) 0%,\n           rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + ", 1) 100%)",
              boxShadow: this.props.shadow,
              borderRadius: this.props.radius
            },
            container: {
              position: "relative",
              height: "100%",
              margin: "0 3px"
            },
            pointer: {
              position: "absolute",
              left: rgb.a * 100 + "%"
            },
            slider: {
              width: "4px",
              borderRadius: "1px",
              height: "8px",
              boxShadow: "0 0 2px rgba(0, 0, 0, .6)",
              background: "#fff",
              marginTop: "1px",
              transform: "translateX(-2px)"
            }
          },
          "vertical": {
            gradient: {
              background: "linear-gradient(to bottom, rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + ", 0) 0%,\n           rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + ", 1) 100%)"
            },
            pointer: {
              left: 0,
              top: rgb.a * 100 + "%"
            }
          },
          "overwrite": _extends2({}, this.props.style)
        }, {
          vertical: this.props.direction === "vertical",
          overwrite: true
        });
        return Cn.createElement(
          "div",
          { style: styles.alpha },
          Cn.createElement(
            "div",
            { style: styles.checkboard },
            Cn.createElement(Checkboard_default, { renderers: this.props.renderers })
          ),
          Cn.createElement("div", { style: styles.gradient }),
          Cn.createElement(
            "div",
            {
              style: styles.container,
              ref: function ref(container) {
                return _this2.container = container;
              },
              onMouseDown: this.handleMouseDown,
              onTouchMove: this.handleChange,
              onTouchStart: this.handleChange
            },
            Cn.createElement(
              "div",
              { style: styles.pointer },
              this.props.pointer ? Cn.createElement(this.props.pointer, this.props) : Cn.createElement("div", { style: styles.slider })
            )
          )
        );
      }
    }]);
    return Alpha2;
  }(w4 || b2);
  var Alpha_default = Alpha;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/common/EditableInput.js
  init_react();
  var import_reactcss3 = __toESM(require_lib());
  var _createClass2 = function() {
    function defineProperties(target, props) {
      for (var i5 = 0; i5 < props.length; i5++) {
        var descriptor = props[i5];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _classCallCheck2(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _possibleConstructorReturn2(self2, call) {
    if (!self2) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self2;
  }
  function _inherits2(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
    if (superClass)
      Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var DEFAULT_ARROW_OFFSET = 1;
  var UP_KEY_CODE = 38;
  var DOWN_KEY_CODE = 40;
  var VALID_KEY_CODES = [UP_KEY_CODE, DOWN_KEY_CODE];
  var isValidKeyCode = function isValidKeyCode2(keyCode) {
    return VALID_KEY_CODES.indexOf(keyCode) > -1;
  };
  var getNumberValue = function getNumberValue2(value) {
    return Number(String(value).replace(/%/g, ""));
  };
  var idCounter = 1;
  var EditableInput = function(_ref) {
    _inherits2(EditableInput2, _ref);
    function EditableInput2(props) {
      _classCallCheck2(this, EditableInput2);
      var _this = _possibleConstructorReturn2(this, (EditableInput2.__proto__ || Object.getPrototypeOf(EditableInput2)).call(this));
      _this.handleBlur = function() {
        if (_this.state.blurValue) {
          _this.setState({ value: _this.state.blurValue, blurValue: null });
        }
      };
      _this.handleChange = function(e6) {
        _this.setUpdatedValue(e6.target.value, e6);
      };
      _this.handleKeyDown = function(e6) {
        var value = getNumberValue(e6.target.value);
        if (!isNaN(value) && isValidKeyCode(e6.keyCode)) {
          var offset = _this.getArrowOffset();
          var updatedValue = e6.keyCode === UP_KEY_CODE ? value + offset : value - offset;
          _this.setUpdatedValue(updatedValue, e6);
        }
      };
      _this.handleDrag = function(e6) {
        if (_this.props.dragLabel) {
          var newValue = Math.round(_this.props.value + e6.movementX);
          if (newValue >= 0 && newValue <= _this.props.dragMax) {
            _this.props.onChange && _this.props.onChange(_this.getValueObjectWithLabel(newValue), e6);
          }
        }
      };
      _this.handleMouseDown = function(e6) {
        if (_this.props.dragLabel) {
          e6.preventDefault();
          _this.handleDrag(e6);
          window.addEventListener("mousemove", _this.handleDrag);
          window.addEventListener("mouseup", _this.handleMouseUp);
        }
      };
      _this.handleMouseUp = function() {
        _this.unbindEventListeners();
      };
      _this.unbindEventListeners = function() {
        window.removeEventListener("mousemove", _this.handleDrag);
        window.removeEventListener("mouseup", _this.handleMouseUp);
      };
      _this.state = {
        value: String(props.value).toUpperCase(),
        blurValue: String(props.value).toUpperCase()
      };
      _this.inputId = "rc-editable-input-" + idCounter++;
      return _this;
    }
    _createClass2(EditableInput2, [{
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState) {
        if (this.props.value !== this.state.value && (prevProps.value !== this.props.value || prevState.value !== this.state.value)) {
          if (this.input === document.activeElement) {
            this.setState({ blurValue: String(this.props.value).toUpperCase() });
          } else {
            this.setState({ value: String(this.props.value).toUpperCase(), blurValue: !this.state.blurValue && String(this.props.value).toUpperCase() });
          }
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.unbindEventListeners();
      }
    }, {
      key: "getValueObjectWithLabel",
      value: function getValueObjectWithLabel(value) {
        return _defineProperty({}, this.props.label, value);
      }
    }, {
      key: "getArrowOffset",
      value: function getArrowOffset() {
        return this.props.arrowOffset || DEFAULT_ARROW_OFFSET;
      }
    }, {
      key: "setUpdatedValue",
      value: function setUpdatedValue(value, e6) {
        var onChangeValue = this.props.label ? this.getValueObjectWithLabel(value) : value;
        this.props.onChange && this.props.onChange(onChangeValue, e6);
        this.setState({ value });
      }
    }, {
      key: "render",
      value: function render3() {
        var _this2 = this;
        var styles = (0, import_reactcss3.default)({
          "default": {
            wrap: {
              position: "relative"
            }
          },
          "user-override": {
            wrap: this.props.style && this.props.style.wrap ? this.props.style.wrap : {},
            input: this.props.style && this.props.style.input ? this.props.style.input : {},
            label: this.props.style && this.props.style.label ? this.props.style.label : {}
          },
          "dragLabel-true": {
            label: {
              cursor: "ew-resize"
            }
          }
        }, {
          "user-override": true
        }, this.props);
        return Cn.createElement(
          "div",
          { style: styles.wrap },
          Cn.createElement("input", {
            id: this.inputId,
            style: styles.input,
            ref: function ref(input) {
              return _this2.input = input;
            },
            value: this.state.value,
            onKeyDown: this.handleKeyDown,
            onChange: this.handleChange,
            onBlur: this.handleBlur,
            placeholder: this.props.placeholder,
            spellCheck: "false"
          }),
          this.props.label && !this.props.hideLabel ? Cn.createElement(
            "label",
            {
              htmlFor: this.inputId,
              style: styles.label,
              onMouseDown: this.handleMouseDown
            },
            this.props.label
          ) : null
        );
      }
    }]);
    return EditableInput2;
  }(w4 || b2);
  var EditableInput_default = EditableInput;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/common/Hue.js
  init_react();
  var import_reactcss4 = __toESM(require_lib());

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/helpers/hue.js
  var calculateChange3 = function calculateChange4(e6, direction, hsl, container) {
    var containerWidth = container.clientWidth;
    var containerHeight = container.clientHeight;
    var x5 = typeof e6.pageX === "number" ? e6.pageX : e6.touches[0].pageX;
    var y4 = typeof e6.pageY === "number" ? e6.pageY : e6.touches[0].pageY;
    var left = x5 - (container.getBoundingClientRect().left + window.pageXOffset);
    var top = y4 - (container.getBoundingClientRect().top + window.pageYOffset);
    if (direction === "vertical") {
      var h5 = void 0;
      if (top < 0) {
        h5 = 359;
      } else if (top > containerHeight) {
        h5 = 0;
      } else {
        var percent = -(top * 100 / containerHeight) + 100;
        h5 = 360 * percent / 100;
      }
      if (hsl.h !== h5) {
        return {
          h: h5,
          s: hsl.s,
          l: hsl.l,
          a: hsl.a,
          source: "hsl"
        };
      }
    } else {
      var _h = void 0;
      if (left < 0) {
        _h = 0;
      } else if (left > containerWidth) {
        _h = 359;
      } else {
        var _percent = left * 100 / containerWidth;
        _h = 360 * _percent / 100;
      }
      if (hsl.h !== _h) {
        return {
          h: _h,
          s: hsl.s,
          l: hsl.l,
          a: hsl.a,
          source: "hsl"
        };
      }
    }
    return null;
  };

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/common/Hue.js
  var _createClass3 = function() {
    function defineProperties(target, props) {
      for (var i5 = 0; i5 < props.length; i5++) {
        var descriptor = props[i5];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  function _classCallCheck3(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _possibleConstructorReturn3(self2, call) {
    if (!self2) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self2;
  }
  function _inherits3(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
    if (superClass)
      Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var Hue = function(_ref) {
    _inherits3(Hue2, _ref);
    function Hue2() {
      var _ref2;
      var _temp, _this, _ret;
      _classCallCheck3(this, Hue2);
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return _ret = (_temp = (_this = _possibleConstructorReturn3(this, (_ref2 = Hue2.__proto__ || Object.getPrototypeOf(Hue2)).call.apply(_ref2, [this].concat(args))), _this), _this.handleChange = function(e6) {
        var change = calculateChange3(e6, _this.props.direction, _this.props.hsl, _this.container);
        change && typeof _this.props.onChange === "function" && _this.props.onChange(change, e6);
      }, _this.handleMouseDown = function(e6) {
        _this.handleChange(e6);
        window.addEventListener("mousemove", _this.handleChange);
        window.addEventListener("mouseup", _this.handleMouseUp);
      }, _this.handleMouseUp = function() {
        _this.unbindEventListeners();
      }, _temp), _possibleConstructorReturn3(_this, _ret);
    }
    _createClass3(Hue2, [{
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.unbindEventListeners();
      }
    }, {
      key: "unbindEventListeners",
      value: function unbindEventListeners() {
        window.removeEventListener("mousemove", this.handleChange);
        window.removeEventListener("mouseup", this.handleMouseUp);
      }
    }, {
      key: "render",
      value: function render3() {
        var _this2 = this;
        var _props$direction = this.props.direction, direction = _props$direction === void 0 ? "horizontal" : _props$direction;
        var styles = (0, import_reactcss4.default)({
          "default": {
            hue: {
              absolute: "0px 0px 0px 0px",
              borderRadius: this.props.radius,
              boxShadow: this.props.shadow
            },
            container: {
              padding: "0 2px",
              position: "relative",
              height: "100%",
              borderRadius: this.props.radius
            },
            pointer: {
              position: "absolute",
              left: this.props.hsl.h * 100 / 360 + "%"
            },
            slider: {
              marginTop: "1px",
              width: "4px",
              borderRadius: "1px",
              height: "8px",
              boxShadow: "0 0 2px rgba(0, 0, 0, .6)",
              background: "#fff",
              transform: "translateX(-2px)"
            }
          },
          "vertical": {
            pointer: {
              left: "0px",
              top: -(this.props.hsl.h * 100 / 360) + 100 + "%"
            }
          }
        }, { vertical: direction === "vertical" });
        return Cn.createElement(
          "div",
          { style: styles.hue },
          Cn.createElement(
            "div",
            {
              className: "hue-" + direction,
              style: styles.container,
              ref: function ref(container) {
                return _this2.container = container;
              },
              onMouseDown: this.handleMouseDown,
              onTouchMove: this.handleChange,
              onTouchStart: this.handleChange
            },
            Cn.createElement(
              "style",
              null,
              "\n            .hue-horizontal {\n              background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0\n                33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to right, #f00 0%, #ff0\n                17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n\n            .hue-vertical {\n              background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%,\n                #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to top, #f00 0%, #ff0 17%,\n                #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n          "
            ),
            Cn.createElement(
              "div",
              { style: styles.pointer },
              this.props.pointer ? Cn.createElement(this.props.pointer, this.props) : Cn.createElement("div", { style: styles.slider })
            )
          )
        );
      }
    }]);
    return Hue2;
  }(w4 || b2);
  var Hue_default = Hue;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/common/Raised.js
  init_react();
  var import_prop_types = __toESM(require_prop_types());
  var import_reactcss5 = __toESM(require_lib());

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_listCacheClear.js
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }
  var listCacheClear_default = listCacheClear;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/eq.js
  function eq(value, other) {
    return value === other || value !== value && other !== other;
  }
  var eq_default = eq;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_assocIndexOf.js
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq_default(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }
  var assocIndexOf_default = assocIndexOf;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_listCacheDelete.js
  var arrayProto = Array.prototype;
  var splice = arrayProto.splice;
  function listCacheDelete(key) {
    var data = this.__data__, index = assocIndexOf_default(data, key);
    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }
  var listCacheDelete_default = listCacheDelete;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_listCacheGet.js
  function listCacheGet(key) {
    var data = this.__data__, index = assocIndexOf_default(data, key);
    return index < 0 ? void 0 : data[index][1];
  }
  var listCacheGet_default = listCacheGet;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_listCacheHas.js
  function listCacheHas(key) {
    return assocIndexOf_default(this.__data__, key) > -1;
  }
  var listCacheHas_default = listCacheHas;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_listCacheSet.js
  function listCacheSet(key, value) {
    var data = this.__data__, index = assocIndexOf_default(data, key);
    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }
  var listCacheSet_default = listCacheSet;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_ListCache.js
  function ListCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  ListCache.prototype.clear = listCacheClear_default;
  ListCache.prototype["delete"] = listCacheDelete_default;
  ListCache.prototype.get = listCacheGet_default;
  ListCache.prototype.has = listCacheHas_default;
  ListCache.prototype.set = listCacheSet_default;
  var ListCache_default = ListCache;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_stackClear.js
  function stackClear() {
    this.__data__ = new ListCache_default();
    this.size = 0;
  }
  var stackClear_default = stackClear;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_stackDelete.js
  function stackDelete(key) {
    var data = this.__data__, result = data["delete"](key);
    this.size = data.size;
    return result;
  }
  var stackDelete_default = stackDelete;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_stackGet.js
  function stackGet(key) {
    return this.__data__.get(key);
  }
  var stackGet_default = stackGet;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_stackHas.js
  function stackHas(key) {
    return this.__data__.has(key);
  }
  var stackHas_default = stackHas;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_freeGlobal.js
  var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
  var freeGlobal_default = freeGlobal;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_root.js
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root = freeGlobal_default || freeSelf || Function("return this")();
  var root_default = root;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_Symbol.js
  var Symbol2 = root_default.Symbol;
  var Symbol_default = Symbol2;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_getRawTag.js
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var nativeObjectToString = objectProto.toString;
  var symToStringTag = Symbol_default ? Symbol_default.toStringTag : void 0;
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
      value[symToStringTag] = void 0;
      var unmasked = true;
    } catch (e6) {
    }
    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }
  var getRawTag_default = getRawTag;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_objectToString.js
  var objectProto2 = Object.prototype;
  var nativeObjectToString2 = objectProto2.toString;
  function objectToString(value) {
    return nativeObjectToString2.call(value);
  }
  var objectToString_default = objectToString;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_baseGetTag.js
  var nullTag = "[object Null]";
  var undefinedTag = "[object Undefined]";
  var symToStringTag2 = Symbol_default ? Symbol_default.toStringTag : void 0;
  function baseGetTag(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag : nullTag;
    }
    return symToStringTag2 && symToStringTag2 in Object(value) ? getRawTag_default(value) : objectToString_default(value);
  }
  var baseGetTag_default = baseGetTag;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/isObject.js
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
  }
  var isObject_default = isObject;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/isFunction.js
  var asyncTag = "[object AsyncFunction]";
  var funcTag = "[object Function]";
  var genTag = "[object GeneratorFunction]";
  var proxyTag = "[object Proxy]";
  function isFunction(value) {
    if (!isObject_default(value)) {
      return false;
    }
    var tag = baseGetTag_default(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }
  var isFunction_default = isFunction;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_coreJsData.js
  var coreJsData = root_default["__core-js_shared__"];
  var coreJsData_default = coreJsData;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_isMasked.js
  var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData_default && coreJsData_default.keys && coreJsData_default.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
  }();
  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }
  var isMasked_default = isMasked;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_toSource.js
  var funcProto = Function.prototype;
  var funcToString = funcProto.toString;
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e6) {
      }
      try {
        return func + "";
      } catch (e6) {
      }
    }
    return "";
  }
  var toSource_default = toSource;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_baseIsNative.js
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var funcProto2 = Function.prototype;
  var objectProto3 = Object.prototype;
  var funcToString2 = funcProto2.toString;
  var hasOwnProperty2 = objectProto3.hasOwnProperty;
  var reIsNative = RegExp(
    "^" + funcToString2.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function baseIsNative(value) {
    if (!isObject_default(value) || isMasked_default(value)) {
      return false;
    }
    var pattern = isFunction_default(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource_default(value));
  }
  var baseIsNative_default = baseIsNative;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_getValue.js
  function getValue(object, key) {
    return object == null ? void 0 : object[key];
  }
  var getValue_default = getValue;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_getNative.js
  function getNative(object, key) {
    var value = getValue_default(object, key);
    return baseIsNative_default(value) ? value : void 0;
  }
  var getNative_default = getNative;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_Map.js
  var Map2 = getNative_default(root_default, "Map");
  var Map_default = Map2;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_nativeCreate.js
  var nativeCreate = getNative_default(Object, "create");
  var nativeCreate_default = nativeCreate;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_hashClear.js
  function hashClear() {
    this.__data__ = nativeCreate_default ? nativeCreate_default(null) : {};
    this.size = 0;
  }
  var hashClear_default = hashClear;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_hashDelete.js
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }
  var hashDelete_default = hashDelete;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_hashGet.js
  var HASH_UNDEFINED = "__lodash_hash_undefined__";
  var objectProto4 = Object.prototype;
  var hasOwnProperty3 = objectProto4.hasOwnProperty;
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate_default) {
      var result = data[key];
      return result === HASH_UNDEFINED ? void 0 : result;
    }
    return hasOwnProperty3.call(data, key) ? data[key] : void 0;
  }
  var hashGet_default = hashGet;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_hashHas.js
  var objectProto5 = Object.prototype;
  var hasOwnProperty4 = objectProto5.hasOwnProperty;
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate_default ? data[key] !== void 0 : hasOwnProperty4.call(data, key);
  }
  var hashHas_default = hashHas;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_hashSet.js
  var HASH_UNDEFINED2 = "__lodash_hash_undefined__";
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate_default && value === void 0 ? HASH_UNDEFINED2 : value;
    return this;
  }
  var hashSet_default = hashSet;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_Hash.js
  function Hash(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  Hash.prototype.clear = hashClear_default;
  Hash.prototype["delete"] = hashDelete_default;
  Hash.prototype.get = hashGet_default;
  Hash.prototype.has = hashHas_default;
  Hash.prototype.set = hashSet_default;
  var Hash_default = Hash;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_mapCacheClear.js
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      "hash": new Hash_default(),
      "map": new (Map_default || ListCache_default)(),
      "string": new Hash_default()
    };
  }
  var mapCacheClear_default = mapCacheClear;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_isKeyable.js
  function isKeyable(value) {
    var type = typeof value;
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
  }
  var isKeyable_default = isKeyable;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_getMapData.js
  function getMapData(map2, key) {
    var data = map2.__data__;
    return isKeyable_default(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
  }
  var getMapData_default = getMapData;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_mapCacheDelete.js
  function mapCacheDelete(key) {
    var result = getMapData_default(this, key)["delete"](key);
    this.size -= result ? 1 : 0;
    return result;
  }
  var mapCacheDelete_default = mapCacheDelete;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_mapCacheGet.js
  function mapCacheGet(key) {
    return getMapData_default(this, key).get(key);
  }
  var mapCacheGet_default = mapCacheGet;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_mapCacheHas.js
  function mapCacheHas(key) {
    return getMapData_default(this, key).has(key);
  }
  var mapCacheHas_default = mapCacheHas;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_mapCacheSet.js
  function mapCacheSet(key, value) {
    var data = getMapData_default(this, key), size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }
  var mapCacheSet_default = mapCacheSet;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_MapCache.js
  function MapCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  MapCache.prototype.clear = mapCacheClear_default;
  MapCache.prototype["delete"] = mapCacheDelete_default;
  MapCache.prototype.get = mapCacheGet_default;
  MapCache.prototype.has = mapCacheHas_default;
  MapCache.prototype.set = mapCacheSet_default;
  var MapCache_default = MapCache;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_stackSet.js
  var LARGE_ARRAY_SIZE = 200;
  function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache_default) {
      var pairs = data.__data__;
      if (!Map_default || pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new MapCache_default(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }
  var stackSet_default = stackSet;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_Stack.js
  function Stack(entries) {
    var data = this.__data__ = new ListCache_default(entries);
    this.size = data.size;
  }
  Stack.prototype.clear = stackClear_default;
  Stack.prototype["delete"] = stackDelete_default;
  Stack.prototype.get = stackGet_default;
  Stack.prototype.has = stackHas_default;
  Stack.prototype.set = stackSet_default;
  var Stack_default = Stack;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_defineProperty.js
  var defineProperty = function() {
    try {
      var func = getNative_default(Object, "defineProperty");
      func({}, "", {});
      return func;
    } catch (e6) {
    }
  }();
  var defineProperty_default = defineProperty;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_baseAssignValue.js
  function baseAssignValue(object, key, value) {
    if (key == "__proto__" && defineProperty_default) {
      defineProperty_default(object, key, {
        "configurable": true,
        "enumerable": true,
        "value": value,
        "writable": true
      });
    } else {
      object[key] = value;
    }
  }
  var baseAssignValue_default = baseAssignValue;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_assignMergeValue.js
  function assignMergeValue(object, key, value) {
    if (value !== void 0 && !eq_default(object[key], value) || value === void 0 && !(key in object)) {
      baseAssignValue_default(object, key, value);
    }
  }
  var assignMergeValue_default = assignMergeValue;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_createBaseFor.js
  function createBaseFor(fromRight) {
    return function(object, iteratee, keysFunc) {
      var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
      while (length--) {
        var key = props[fromRight ? length : ++index];
        if (iteratee(iterable[key], key, iterable) === false) {
          break;
        }
      }
      return object;
    };
  }
  var createBaseFor_default = createBaseFor;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_baseFor.js
  var baseFor = createBaseFor_default();
  var baseFor_default = baseFor;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_cloneBuffer.js
  var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
  var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer2 = moduleExports ? root_default.Buffer : void 0;
  var allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
  function cloneBuffer(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
    buffer.copy(result);
    return result;
  }
  var cloneBuffer_default = cloneBuffer;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_Uint8Array.js
  var Uint8Array2 = root_default.Uint8Array;
  var Uint8Array_default = Uint8Array2;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_cloneArrayBuffer.js
  function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array_default(result).set(new Uint8Array_default(arrayBuffer));
    return result;
  }
  var cloneArrayBuffer_default = cloneArrayBuffer;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_cloneTypedArray.js
  function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer_default(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }
  var cloneTypedArray_default = cloneTypedArray;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_copyArray.js
  function copyArray(source, array) {
    var index = -1, length = source.length;
    array || (array = Array(length));
    while (++index < length) {
      array[index] = source[index];
    }
    return array;
  }
  var copyArray_default = copyArray;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_baseCreate.js
  var objectCreate = Object.create;
  var baseCreate = function() {
    function object() {
    }
    return function(proto) {
      if (!isObject_default(proto)) {
        return {};
      }
      if (objectCreate) {
        return objectCreate(proto);
      }
      object.prototype = proto;
      var result = new object();
      object.prototype = void 0;
      return result;
    };
  }();
  var baseCreate_default = baseCreate;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_overArg.js
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }
  var overArg_default = overArg;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_getPrototype.js
  var getPrototype = overArg_default(Object.getPrototypeOf, Object);
  var getPrototype_default = getPrototype;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_isPrototype.js
  var objectProto6 = Object.prototype;
  function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto6;
    return value === proto;
  }
  var isPrototype_default = isPrototype;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_initCloneObject.js
  function initCloneObject(object) {
    return typeof object.constructor == "function" && !isPrototype_default(object) ? baseCreate_default(getPrototype_default(object)) : {};
  }
  var initCloneObject_default = initCloneObject;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/isObjectLike.js
  function isObjectLike(value) {
    return value != null && typeof value == "object";
  }
  var isObjectLike_default = isObjectLike;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_baseIsArguments.js
  var argsTag = "[object Arguments]";
  function baseIsArguments(value) {
    return isObjectLike_default(value) && baseGetTag_default(value) == argsTag;
  }
  var baseIsArguments_default = baseIsArguments;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/isArguments.js
  var objectProto7 = Object.prototype;
  var hasOwnProperty5 = objectProto7.hasOwnProperty;
  var propertyIsEnumerable = objectProto7.propertyIsEnumerable;
  var isArguments = baseIsArguments_default(function() {
    return arguments;
  }()) ? baseIsArguments_default : function(value) {
    return isObjectLike_default(value) && hasOwnProperty5.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
  };
  var isArguments_default = isArguments;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/isArray.js
  var isArray = Array.isArray;
  var isArray_default = isArray;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/isLength.js
  var MAX_SAFE_INTEGER = 9007199254740991;
  function isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  var isLength_default = isLength;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/isArrayLike.js
  function isArrayLike(value) {
    return value != null && isLength_default(value.length) && !isFunction_default(value);
  }
  var isArrayLike_default = isArrayLike;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/isArrayLikeObject.js
  function isArrayLikeObject(value) {
    return isObjectLike_default(value) && isArrayLike_default(value);
  }
  var isArrayLikeObject_default = isArrayLikeObject;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/stubFalse.js
  function stubFalse() {
    return false;
  }
  var stubFalse_default = stubFalse;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/isBuffer.js
  var freeExports2 = typeof exports == "object" && exports && !exports.nodeType && exports;
  var freeModule2 = freeExports2 && typeof module == "object" && module && !module.nodeType && module;
  var moduleExports2 = freeModule2 && freeModule2.exports === freeExports2;
  var Buffer3 = moduleExports2 ? root_default.Buffer : void 0;
  var nativeIsBuffer = Buffer3 ? Buffer3.isBuffer : void 0;
  var isBuffer = nativeIsBuffer || stubFalse_default;
  var isBuffer_default = isBuffer;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/isPlainObject.js
  var objectTag = "[object Object]";
  var funcProto3 = Function.prototype;
  var objectProto8 = Object.prototype;
  var funcToString3 = funcProto3.toString;
  var hasOwnProperty6 = objectProto8.hasOwnProperty;
  var objectCtorString = funcToString3.call(Object);
  function isPlainObject(value) {
    if (!isObjectLike_default(value) || baseGetTag_default(value) != objectTag) {
      return false;
    }
    var proto = getPrototype_default(value);
    if (proto === null) {
      return true;
    }
    var Ctor = hasOwnProperty6.call(proto, "constructor") && proto.constructor;
    return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString3.call(Ctor) == objectCtorString;
  }
  var isPlainObject_default = isPlainObject;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_baseIsTypedArray.js
  var argsTag2 = "[object Arguments]";
  var arrayTag = "[object Array]";
  var boolTag = "[object Boolean]";
  var dateTag = "[object Date]";
  var errorTag = "[object Error]";
  var funcTag2 = "[object Function]";
  var mapTag = "[object Map]";
  var numberTag = "[object Number]";
  var objectTag2 = "[object Object]";
  var regexpTag = "[object RegExp]";
  var setTag = "[object Set]";
  var stringTag = "[object String]";
  var weakMapTag = "[object WeakMap]";
  var arrayBufferTag = "[object ArrayBuffer]";
  var dataViewTag = "[object DataView]";
  var float32Tag = "[object Float32Array]";
  var float64Tag = "[object Float64Array]";
  var int8Tag = "[object Int8Array]";
  var int16Tag = "[object Int16Array]";
  var int32Tag = "[object Int32Array]";
  var uint8Tag = "[object Uint8Array]";
  var uint8ClampedTag = "[object Uint8ClampedArray]";
  var uint16Tag = "[object Uint16Array]";
  var uint32Tag = "[object Uint32Array]";
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag2] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag2] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag2] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
  function baseIsTypedArray(value) {
    return isObjectLike_default(value) && isLength_default(value.length) && !!typedArrayTags[baseGetTag_default(value)];
  }
  var baseIsTypedArray_default = baseIsTypedArray;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_baseUnary.js
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }
  var baseUnary_default = baseUnary;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_nodeUtil.js
  var freeExports3 = typeof exports == "object" && exports && !exports.nodeType && exports;
  var freeModule3 = freeExports3 && typeof module == "object" && module && !module.nodeType && module;
  var moduleExports3 = freeModule3 && freeModule3.exports === freeExports3;
  var freeProcess = moduleExports3 && freeGlobal_default.process;
  var nodeUtil = function() {
    try {
      var types = freeModule3 && freeModule3.require && freeModule3.require("util").types;
      if (types) {
        return types;
      }
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e6) {
    }
  }();
  var nodeUtil_default = nodeUtil;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/isTypedArray.js
  var nodeIsTypedArray = nodeUtil_default && nodeUtil_default.isTypedArray;
  var isTypedArray = nodeIsTypedArray ? baseUnary_default(nodeIsTypedArray) : baseIsTypedArray_default;
  var isTypedArray_default = isTypedArray;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_safeGet.js
  function safeGet(object, key) {
    if (key === "constructor" && typeof object[key] === "function") {
      return;
    }
    if (key == "__proto__") {
      return;
    }
    return object[key];
  }
  var safeGet_default = safeGet;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_assignValue.js
  var objectProto9 = Object.prototype;
  var hasOwnProperty7 = objectProto9.hasOwnProperty;
  function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty7.call(object, key) && eq_default(objValue, value)) || value === void 0 && !(key in object)) {
      baseAssignValue_default(object, key, value);
    }
  }
  var assignValue_default = assignValue;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_copyObject.js
  function copyObject(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});
    var index = -1, length = props.length;
    while (++index < length) {
      var key = props[index];
      var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
      if (newValue === void 0) {
        newValue = source[key];
      }
      if (isNew) {
        baseAssignValue_default(object, key, newValue);
      } else {
        assignValue_default(object, key, newValue);
      }
    }
    return object;
  }
  var copyObject_default = copyObject;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_baseTimes.js
  function baseTimes(n6, iteratee) {
    var index = -1, result = Array(n6);
    while (++index < n6) {
      result[index] = iteratee(index);
    }
    return result;
  }
  var baseTimes_default = baseTimes;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_isIndex.js
  var MAX_SAFE_INTEGER2 = 9007199254740991;
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER2 : length;
    return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
  }
  var isIndex_default = isIndex;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_arrayLikeKeys.js
  var objectProto10 = Object.prototype;
  var hasOwnProperty8 = objectProto10.hasOwnProperty;
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray_default(value), isArg = !isArr && isArguments_default(value), isBuff = !isArr && !isArg && isBuffer_default(value), isType = !isArr && !isArg && !isBuff && isTypedArray_default(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes_default(value.length, String) : [], length = result.length;
    for (var key in value) {
      if ((inherited || hasOwnProperty8.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
      (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
      isIndex_default(key, length)))) {
        result.push(key);
      }
    }
    return result;
  }
  var arrayLikeKeys_default = arrayLikeKeys;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_nativeKeysIn.js
  function nativeKeysIn(object) {
    var result = [];
    if (object != null) {
      for (var key in Object(object)) {
        result.push(key);
      }
    }
    return result;
  }
  var nativeKeysIn_default = nativeKeysIn;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_baseKeysIn.js
  var objectProto11 = Object.prototype;
  var hasOwnProperty9 = objectProto11.hasOwnProperty;
  function baseKeysIn(object) {
    if (!isObject_default(object)) {
      return nativeKeysIn_default(object);
    }
    var isProto = isPrototype_default(object), result = [];
    for (var key in object) {
      if (!(key == "constructor" && (isProto || !hasOwnProperty9.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }
  var baseKeysIn_default = baseKeysIn;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/keysIn.js
  function keysIn(object) {
    return isArrayLike_default(object) ? arrayLikeKeys_default(object, true) : baseKeysIn_default(object);
  }
  var keysIn_default = keysIn;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/toPlainObject.js
  function toPlainObject(value) {
    return copyObject_default(value, keysIn_default(value));
  }
  var toPlainObject_default = toPlainObject;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_baseMergeDeep.js
  function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
    var objValue = safeGet_default(object, key), srcValue = safeGet_default(source, key), stacked = stack.get(srcValue);
    if (stacked) {
      assignMergeValue_default(object, key, stacked);
      return;
    }
    var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
    var isCommon = newValue === void 0;
    if (isCommon) {
      var isArr = isArray_default(srcValue), isBuff = !isArr && isBuffer_default(srcValue), isTyped = !isArr && !isBuff && isTypedArray_default(srcValue);
      newValue = srcValue;
      if (isArr || isBuff || isTyped) {
        if (isArray_default(objValue)) {
          newValue = objValue;
        } else if (isArrayLikeObject_default(objValue)) {
          newValue = copyArray_default(objValue);
        } else if (isBuff) {
          isCommon = false;
          newValue = cloneBuffer_default(srcValue, true);
        } else if (isTyped) {
          isCommon = false;
          newValue = cloneTypedArray_default(srcValue, true);
        } else {
          newValue = [];
        }
      } else if (isPlainObject_default(srcValue) || isArguments_default(srcValue)) {
        newValue = objValue;
        if (isArguments_default(objValue)) {
          newValue = toPlainObject_default(objValue);
        } else if (!isObject_default(objValue) || isFunction_default(objValue)) {
          newValue = initCloneObject_default(srcValue);
        }
      } else {
        isCommon = false;
      }
    }
    if (isCommon) {
      stack.set(srcValue, newValue);
      mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
      stack["delete"](srcValue);
    }
    assignMergeValue_default(object, key, newValue);
  }
  var baseMergeDeep_default = baseMergeDeep;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_baseMerge.js
  function baseMerge(object, source, srcIndex, customizer, stack) {
    if (object === source) {
      return;
    }
    baseFor_default(source, function(srcValue, key) {
      stack || (stack = new Stack_default());
      if (isObject_default(srcValue)) {
        baseMergeDeep_default(object, source, key, srcIndex, baseMerge, customizer, stack);
      } else {
        var newValue = customizer ? customizer(safeGet_default(object, key), srcValue, key + "", object, source, stack) : void 0;
        if (newValue === void 0) {
          newValue = srcValue;
        }
        assignMergeValue_default(object, key, newValue);
      }
    }, keysIn_default);
  }
  var baseMerge_default = baseMerge;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/identity.js
  function identity(value) {
    return value;
  }
  var identity_default = identity;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_apply.js
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0:
        return func.call(thisArg);
      case 1:
        return func.call(thisArg, args[0]);
      case 2:
        return func.call(thisArg, args[0], args[1]);
      case 3:
        return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }
  var apply_default = apply;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_overRest.js
  var nativeMax = Math.max;
  function overRest(func, start, transform) {
    start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
    return function() {
      var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
      while (++index < length) {
        array[index] = args[start + index];
      }
      index = -1;
      var otherArgs = Array(start + 1);
      while (++index < start) {
        otherArgs[index] = args[index];
      }
      otherArgs[start] = transform(array);
      return apply_default(func, this, otherArgs);
    };
  }
  var overRest_default = overRest;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/constant.js
  function constant(value) {
    return function() {
      return value;
    };
  }
  var constant_default = constant;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_baseSetToString.js
  var baseSetToString = !defineProperty_default ? identity_default : function(func, string) {
    return defineProperty_default(func, "toString", {
      "configurable": true,
      "enumerable": false,
      "value": constant_default(string),
      "writable": true
    });
  };
  var baseSetToString_default = baseSetToString;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_shortOut.js
  var HOT_COUNT = 800;
  var HOT_SPAN = 16;
  var nativeNow = Date.now;
  function shortOut(func) {
    var count2 = 0, lastCalled = 0;
    return function() {
      var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
      lastCalled = stamp;
      if (remaining > 0) {
        if (++count2 >= HOT_COUNT) {
          return arguments[0];
        }
      } else {
        count2 = 0;
      }
      return func.apply(void 0, arguments);
    };
  }
  var shortOut_default = shortOut;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_setToString.js
  var setToString = shortOut_default(baseSetToString_default);
  var setToString_default = setToString;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_baseRest.js
  function baseRest(func, start) {
    return setToString_default(overRest_default(func, start, identity_default), func + "");
  }
  var baseRest_default = baseRest;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_isIterateeCall.js
  function isIterateeCall(value, index, object) {
    if (!isObject_default(object)) {
      return false;
    }
    var type = typeof index;
    if (type == "number" ? isArrayLike_default(object) && isIndex_default(index, object.length) : type == "string" && index in object) {
      return eq_default(object[index], value);
    }
    return false;
  }
  var isIterateeCall_default = isIterateeCall;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_createAssigner.js
  function createAssigner(assigner) {
    return baseRest_default(function(object, sources) {
      var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
      customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
      if (guard && isIterateeCall_default(sources[0], sources[1], guard)) {
        customizer = length < 3 ? void 0 : customizer;
        length = 1;
      }
      object = Object(object);
      while (++index < length) {
        var source = sources[index];
        if (source) {
          assigner(object, source, index, customizer);
        }
      }
      return object;
    });
  }
  var createAssigner_default = createAssigner;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/merge.js
  var merge = createAssigner_default(function(object, source, srcIndex) {
    baseMerge_default(object, source, srcIndex);
  });
  var merge_default = merge;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/common/Raised.js
  var Raised = function Raised2(_ref) {
    var zDepth = _ref.zDepth, radius = _ref.radius, background = _ref.background, children = _ref.children, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles;
    var styles = (0, import_reactcss5.default)(merge_default({
      "default": {
        wrap: {
          position: "relative",
          display: "inline-block"
        },
        content: {
          position: "relative"
        },
        bg: {
          absolute: "0px 0px 0px 0px",
          boxShadow: "0 " + zDepth + "px " + zDepth * 4 + "px rgba(0,0,0,.24)",
          borderRadius: radius,
          background
        }
      },
      "zDepth-0": {
        bg: {
          boxShadow: "none"
        }
      },
      "zDepth-1": {
        bg: {
          boxShadow: "0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16)"
        }
      },
      "zDepth-2": {
        bg: {
          boxShadow: "0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2)"
        }
      },
      "zDepth-3": {
        bg: {
          boxShadow: "0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24)"
        }
      },
      "zDepth-4": {
        bg: {
          boxShadow: "0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22)"
        }
      },
      "zDepth-5": {
        bg: {
          boxShadow: "0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2)"
        }
      },
      "square": {
        bg: {
          borderRadius: "0"
        }
      },
      "circle": {
        bg: {
          borderRadius: "50%"
        }
      }
    }, passedStyles), { "zDepth-1": zDepth === 1 });
    return Cn.createElement(
      "div",
      { style: styles.wrap },
      Cn.createElement("div", { style: styles.bg }),
      Cn.createElement(
        "div",
        { style: styles.content },
        children
      )
    );
  };
  Raised.propTypes = {
    background: import_prop_types.default.string,
    zDepth: import_prop_types.default.oneOf([0, 1, 2, 3, 4, 5]),
    radius: import_prop_types.default.number,
    styles: import_prop_types.default.object
  };
  Raised.defaultProps = {
    background: "#fff",
    zDepth: 1,
    radius: 2,
    styles: {}
  };
  var Raised_default = Raised;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/common/Saturation.js
  init_react();
  var import_reactcss6 = __toESM(require_lib());

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/now.js
  var now = function() {
    return root_default.Date.now();
  };
  var now_default = now;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_trimmedEndIndex.js
  var reWhitespace = /\s/;
  function trimmedEndIndex(string) {
    var index = string.length;
    while (index-- && reWhitespace.test(string.charAt(index))) {
    }
    return index;
  }
  var trimmedEndIndex_default = trimmedEndIndex;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_baseTrim.js
  var reTrimStart = /^\s+/;
  function baseTrim(string) {
    return string ? string.slice(0, trimmedEndIndex_default(string) + 1).replace(reTrimStart, "") : string;
  }
  var baseTrim_default = baseTrim;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/isSymbol.js
  var symbolTag = "[object Symbol]";
  function isSymbol(value) {
    return typeof value == "symbol" || isObjectLike_default(value) && baseGetTag_default(value) == symbolTag;
  }
  var isSymbol_default = isSymbol;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/toNumber.js
  var NAN = 0 / 0;
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
  var reIsBinary = /^0b[01]+$/i;
  var reIsOctal = /^0o[0-7]+$/i;
  var freeParseInt = parseInt;
  function toNumber(value) {
    if (typeof value == "number") {
      return value;
    }
    if (isSymbol_default(value)) {
      return NAN;
    }
    if (isObject_default(value)) {
      var other = typeof value.valueOf == "function" ? value.valueOf() : value;
      value = isObject_default(other) ? other + "" : other;
    }
    if (typeof value != "string") {
      return value === 0 ? value : +value;
    }
    value = baseTrim_default(value);
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
  }
  var toNumber_default = toNumber;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/debounce.js
  var FUNC_ERROR_TEXT = "Expected a function";
  var nativeMax2 = Math.max;
  var nativeMin = Math.min;
  function debounce(func, wait, options) {
    var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
    if (typeof func != "function") {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    wait = toNumber_default(wait) || 0;
    if (isObject_default(options)) {
      leading = !!options.leading;
      maxing = "maxWait" in options;
      maxWait = maxing ? nativeMax2(toNumber_default(options.maxWait) || 0, wait) : maxWait;
      trailing = "trailing" in options ? !!options.trailing : trailing;
    }
    function invokeFunc(time) {
      var args = lastArgs, thisArg = lastThis;
      lastArgs = lastThis = void 0;
      lastInvokeTime = time;
      result = func.apply(thisArg, args);
      return result;
    }
    function leadingEdge(time) {
      lastInvokeTime = time;
      timerId = setTimeout(timerExpired, wait);
      return leading ? invokeFunc(time) : result;
    }
    function remainingWait(time) {
      var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
      return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
    }
    function shouldInvoke(time) {
      var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
      return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }
    function timerExpired() {
      var time = now_default();
      if (shouldInvoke(time)) {
        return trailingEdge(time);
      }
      timerId = setTimeout(timerExpired, remainingWait(time));
    }
    function trailingEdge(time) {
      timerId = void 0;
      if (trailing && lastArgs) {
        return invokeFunc(time);
      }
      lastArgs = lastThis = void 0;
      return result;
    }
    function cancel() {
      if (timerId !== void 0) {
        clearTimeout(timerId);
      }
      lastInvokeTime = 0;
      lastArgs = lastCallTime = lastThis = timerId = void 0;
    }
    function flush() {
      return timerId === void 0 ? result : trailingEdge(now_default());
    }
    function debounced() {
      var time = now_default(), isInvoking = shouldInvoke(time);
      lastArgs = arguments;
      lastThis = this;
      lastCallTime = time;
      if (isInvoking) {
        if (timerId === void 0) {
          return leadingEdge(lastCallTime);
        }
        if (maxing) {
          clearTimeout(timerId);
          timerId = setTimeout(timerExpired, wait);
          return invokeFunc(lastCallTime);
        }
      }
      if (timerId === void 0) {
        timerId = setTimeout(timerExpired, wait);
      }
      return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
  }
  var debounce_default = debounce;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/throttle.js
  var FUNC_ERROR_TEXT2 = "Expected a function";
  function throttle(func, wait, options) {
    var leading = true, trailing = true;
    if (typeof func != "function") {
      throw new TypeError(FUNC_ERROR_TEXT2);
    }
    if (isObject_default(options)) {
      leading = "leading" in options ? !!options.leading : leading;
      trailing = "trailing" in options ? !!options.trailing : trailing;
    }
    return debounce_default(func, wait, {
      "leading": leading,
      "maxWait": wait,
      "trailing": trailing
    });
  }
  var throttle_default = throttle;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/helpers/saturation.js
  var calculateChange5 = function calculateChange6(e6, hsl, container) {
    var _container$getBoundin = container.getBoundingClientRect(), containerWidth = _container$getBoundin.width, containerHeight = _container$getBoundin.height;
    var x5 = typeof e6.pageX === "number" ? e6.pageX : e6.touches[0].pageX;
    var y4 = typeof e6.pageY === "number" ? e6.pageY : e6.touches[0].pageY;
    var left = x5 - (container.getBoundingClientRect().left + window.pageXOffset);
    var top = y4 - (container.getBoundingClientRect().top + window.pageYOffset);
    if (left < 0) {
      left = 0;
    } else if (left > containerWidth) {
      left = containerWidth;
    }
    if (top < 0) {
      top = 0;
    } else if (top > containerHeight) {
      top = containerHeight;
    }
    var saturation = left / containerWidth;
    var bright = 1 - top / containerHeight;
    return {
      h: hsl.h,
      s: saturation,
      v: bright,
      a: hsl.a,
      source: "hsv"
    };
  };

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/common/Saturation.js
  var _createClass4 = function() {
    function defineProperties(target, props) {
      for (var i5 = 0; i5 < props.length; i5++) {
        var descriptor = props[i5];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  function _classCallCheck4(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _possibleConstructorReturn4(self2, call) {
    if (!self2) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self2;
  }
  function _inherits4(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
    if (superClass)
      Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var Saturation = function(_ref) {
    _inherits4(Saturation2, _ref);
    function Saturation2(props) {
      _classCallCheck4(this, Saturation2);
      var _this = _possibleConstructorReturn4(this, (Saturation2.__proto__ || Object.getPrototypeOf(Saturation2)).call(this, props));
      _this.handleChange = function(e6) {
        typeof _this.props.onChange === "function" && _this.throttle(_this.props.onChange, calculateChange5(e6, _this.props.hsl, _this.container), e6);
      };
      _this.handleMouseDown = function(e6) {
        _this.handleChange(e6);
        var renderWindow = _this.getContainerRenderWindow();
        renderWindow.addEventListener("mousemove", _this.handleChange);
        renderWindow.addEventListener("mouseup", _this.handleMouseUp);
      };
      _this.handleMouseUp = function() {
        _this.unbindEventListeners();
      };
      _this.throttle = throttle_default(function(fn2, data, e6) {
        fn2(data, e6);
      }, 50);
      return _this;
    }
    _createClass4(Saturation2, [{
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.throttle.cancel();
        this.unbindEventListeners();
      }
    }, {
      key: "getContainerRenderWindow",
      value: function getContainerRenderWindow() {
        var container = this.container;
        var renderWindow = window;
        while (!renderWindow.document.contains(container) && renderWindow.parent !== renderWindow) {
          renderWindow = renderWindow.parent;
        }
        return renderWindow;
      }
    }, {
      key: "unbindEventListeners",
      value: function unbindEventListeners() {
        var renderWindow = this.getContainerRenderWindow();
        renderWindow.removeEventListener("mousemove", this.handleChange);
        renderWindow.removeEventListener("mouseup", this.handleMouseUp);
      }
    }, {
      key: "render",
      value: function render3() {
        var _this2 = this;
        var _ref2 = this.props.style || {}, color = _ref2.color, white = _ref2.white, black = _ref2.black, pointer = _ref2.pointer, circle = _ref2.circle;
        var styles = (0, import_reactcss6.default)({
          "default": {
            color: {
              absolute: "0px 0px 0px 0px",
              background: "hsl(" + this.props.hsl.h + ",100%, 50%)",
              borderRadius: this.props.radius
            },
            white: {
              absolute: "0px 0px 0px 0px",
              borderRadius: this.props.radius
            },
            black: {
              absolute: "0px 0px 0px 0px",
              boxShadow: this.props.shadow,
              borderRadius: this.props.radius
            },
            pointer: {
              position: "absolute",
              top: -(this.props.hsv.v * 100) + 100 + "%",
              left: this.props.hsv.s * 100 + "%",
              cursor: "default"
            },
            circle: {
              width: "4px",
              height: "4px",
              boxShadow: "0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3),\n            0 0 1px 2px rgba(0,0,0,.4)",
              borderRadius: "50%",
              cursor: "hand",
              transform: "translate(-2px, -2px)"
            }
          },
          "custom": {
            color,
            white,
            black,
            pointer,
            circle
          }
        }, { "custom": !!this.props.style });
        return Cn.createElement(
          "div",
          {
            style: styles.color,
            ref: function ref(container) {
              return _this2.container = container;
            },
            onMouseDown: this.handleMouseDown,
            onTouchMove: this.handleChange,
            onTouchStart: this.handleChange
          },
          Cn.createElement(
            "style",
            null,
            "\n          .saturation-white {\n            background: -webkit-linear-gradient(to right, #fff, rgba(255,255,255,0));\n            background: linear-gradient(to right, #fff, rgba(255,255,255,0));\n          }\n          .saturation-black {\n            background: -webkit-linear-gradient(to top, #000, rgba(0,0,0,0));\n            background: linear-gradient(to top, #000, rgba(0,0,0,0));\n          }\n        "
          ),
          Cn.createElement(
            "div",
            { style: styles.white, className: "saturation-white" },
            Cn.createElement("div", { style: styles.black, className: "saturation-black" }),
            Cn.createElement(
              "div",
              { style: styles.pointer },
              this.props.pointer ? Cn.createElement(this.props.pointer, this.props) : Cn.createElement("div", { style: styles.circle })
            )
          )
        );
      }
    }]);
    return Saturation2;
  }(w4 || b2);
  var Saturation_default = Saturation;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/common/ColorWrap.js
  init_react();

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_arrayEach.js
  function arrayEach(array, iteratee) {
    var index = -1, length = array == null ? 0 : array.length;
    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }
  var arrayEach_default = arrayEach;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_nativeKeys.js
  var nativeKeys = overArg_default(Object.keys, Object);
  var nativeKeys_default = nativeKeys;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_baseKeys.js
  var objectProto12 = Object.prototype;
  var hasOwnProperty10 = objectProto12.hasOwnProperty;
  function baseKeys(object) {
    if (!isPrototype_default(object)) {
      return nativeKeys_default(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty10.call(object, key) && key != "constructor") {
        result.push(key);
      }
    }
    return result;
  }
  var baseKeys_default = baseKeys;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/keys.js
  function keys(object) {
    return isArrayLike_default(object) ? arrayLikeKeys_default(object) : baseKeys_default(object);
  }
  var keys_default = keys;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_baseForOwn.js
  function baseForOwn(object, iteratee) {
    return object && baseFor_default(object, iteratee, keys_default);
  }
  var baseForOwn_default = baseForOwn;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_createBaseEach.js
  function createBaseEach(eachFunc, fromRight) {
    return function(collection, iteratee) {
      if (collection == null) {
        return collection;
      }
      if (!isArrayLike_default(collection)) {
        return eachFunc(collection, iteratee);
      }
      var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
      while (fromRight ? index-- : ++index < length) {
        if (iteratee(iterable[index], index, iterable) === false) {
          break;
        }
      }
      return collection;
    };
  }
  var createBaseEach_default = createBaseEach;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_baseEach.js
  var baseEach = createBaseEach_default(baseForOwn_default);
  var baseEach_default = baseEach;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_castFunction.js
  function castFunction(value) {
    return typeof value == "function" ? value : identity_default;
  }
  var castFunction_default = castFunction;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/forEach.js
  function forEach(collection, iteratee) {
    var func = isArray_default(collection) ? arrayEach_default : baseEach_default;
    return func(collection, castFunction_default(iteratee));
  }
  var forEach_default = forEach;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/tinycolor2/esm/tinycolor.js
  function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
      return typeof obj2;
    } : function(obj2) {
      return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    }, _typeof(obj);
  }
  var trimLeft = /^\s+/;
  var trimRight = /\s+$/;
  function tinycolor(color, opts) {
    color = color ? color : "";
    opts = opts || {};
    if (color instanceof tinycolor) {
      return color;
    }
    if (!(this instanceof tinycolor)) {
      return new tinycolor(color, opts);
    }
    var rgb = inputToRGB(color);
    this._originalInput = color, this._r = rgb.r, this._g = rgb.g, this._b = rgb.b, this._a = rgb.a, this._roundA = Math.round(100 * this._a) / 100, this._format = opts.format || rgb.format;
    this._gradientType = opts.gradientType;
    if (this._r < 1)
      this._r = Math.round(this._r);
    if (this._g < 1)
      this._g = Math.round(this._g);
    if (this._b < 1)
      this._b = Math.round(this._b);
    this._ok = rgb.ok;
  }
  tinycolor.prototype = {
    isDark: function isDark() {
      return this.getBrightness() < 128;
    },
    isLight: function isLight() {
      return !this.isDark();
    },
    isValid: function isValid() {
      return this._ok;
    },
    getOriginalInput: function getOriginalInput() {
      return this._originalInput;
    },
    getFormat: function getFormat() {
      return this._format;
    },
    getAlpha: function getAlpha() {
      return this._a;
    },
    getBrightness: function getBrightness() {
      var rgb = this.toRgb();
      return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
    },
    getLuminance: function getLuminance() {
      var rgb = this.toRgb();
      var RsRGB, GsRGB, BsRGB, R3, G3, B5;
      RsRGB = rgb.r / 255;
      GsRGB = rgb.g / 255;
      BsRGB = rgb.b / 255;
      if (RsRGB <= 0.03928)
        R3 = RsRGB / 12.92;
      else
        R3 = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
      if (GsRGB <= 0.03928)
        G3 = GsRGB / 12.92;
      else
        G3 = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
      if (BsRGB <= 0.03928)
        B5 = BsRGB / 12.92;
      else
        B5 = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
      return 0.2126 * R3 + 0.7152 * G3 + 0.0722 * B5;
    },
    setAlpha: function setAlpha(value) {
      this._a = boundAlpha(value);
      this._roundA = Math.round(100 * this._a) / 100;
      return this;
    },
    toHsv: function toHsv() {
      var hsv = rgbToHsv(this._r, this._g, this._b);
      return {
        h: hsv.h * 360,
        s: hsv.s,
        v: hsv.v,
        a: this._a
      };
    },
    toHsvString: function toHsvString() {
      var hsv = rgbToHsv(this._r, this._g, this._b);
      var h5 = Math.round(hsv.h * 360), s7 = Math.round(hsv.s * 100), v4 = Math.round(hsv.v * 100);
      return this._a == 1 ? "hsv(" + h5 + ", " + s7 + "%, " + v4 + "%)" : "hsva(" + h5 + ", " + s7 + "%, " + v4 + "%, " + this._roundA + ")";
    },
    toHsl: function toHsl() {
      var hsl = rgbToHsl(this._r, this._g, this._b);
      return {
        h: hsl.h * 360,
        s: hsl.s,
        l: hsl.l,
        a: this._a
      };
    },
    toHslString: function toHslString() {
      var hsl = rgbToHsl(this._r, this._g, this._b);
      var h5 = Math.round(hsl.h * 360), s7 = Math.round(hsl.s * 100), l6 = Math.round(hsl.l * 100);
      return this._a == 1 ? "hsl(" + h5 + ", " + s7 + "%, " + l6 + "%)" : "hsla(" + h5 + ", " + s7 + "%, " + l6 + "%, " + this._roundA + ")";
    },
    toHex: function toHex(allow3Char) {
      return rgbToHex(this._r, this._g, this._b, allow3Char);
    },
    toHexString: function toHexString(allow3Char) {
      return "#" + this.toHex(allow3Char);
    },
    toHex8: function toHex8(allow4Char) {
      return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
    },
    toHex8String: function toHex8String(allow4Char) {
      return "#" + this.toHex8(allow4Char);
    },
    toRgb: function toRgb() {
      return {
        r: Math.round(this._r),
        g: Math.round(this._g),
        b: Math.round(this._b),
        a: this._a
      };
    },
    toRgbString: function toRgbString() {
      return this._a == 1 ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ")" : "rgba(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ", " + this._roundA + ")";
    },
    toPercentageRgb: function toPercentageRgb() {
      return {
        r: Math.round(bound01(this._r, 255) * 100) + "%",
        g: Math.round(bound01(this._g, 255) * 100) + "%",
        b: Math.round(bound01(this._b, 255) * 100) + "%",
        a: this._a
      };
    },
    toPercentageRgbString: function toPercentageRgbString() {
      return this._a == 1 ? "rgb(" + Math.round(bound01(this._r, 255) * 100) + "%, " + Math.round(bound01(this._g, 255) * 100) + "%, " + Math.round(bound01(this._b, 255) * 100) + "%)" : "rgba(" + Math.round(bound01(this._r, 255) * 100) + "%, " + Math.round(bound01(this._g, 255) * 100) + "%, " + Math.round(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
    },
    toName: function toName() {
      if (this._a === 0) {
        return "transparent";
      }
      if (this._a < 1) {
        return false;
      }
      return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
    },
    toFilter: function toFilter(secondColor) {
      var hex8String = "#" + rgbaToArgbHex(this._r, this._g, this._b, this._a);
      var secondHex8String = hex8String;
      var gradientType = this._gradientType ? "GradientType = 1, " : "";
      if (secondColor) {
        var s7 = tinycolor(secondColor);
        secondHex8String = "#" + rgbaToArgbHex(s7._r, s7._g, s7._b, s7._a);
      }
      return "progid:DXImageTransform.Microsoft.gradient(" + gradientType + "startColorstr=" + hex8String + ",endColorstr=" + secondHex8String + ")";
    },
    toString: function toString(format) {
      var formatSet = !!format;
      format = format || this._format;
      var formattedString = false;
      var hasAlpha = this._a < 1 && this._a >= 0;
      var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");
      if (needsAlphaFormat) {
        if (format === "name" && this._a === 0) {
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
    },
    clone: function clone() {
      return tinycolor(this.toString());
    },
    _applyModification: function _applyModification(fn2, args) {
      var color = fn2.apply(null, [this].concat([].slice.call(args)));
      this._r = color._r;
      this._g = color._g;
      this._b = color._b;
      this.setAlpha(color._a);
      return this;
    },
    lighten: function lighten() {
      return this._applyModification(_lighten, arguments);
    },
    brighten: function brighten() {
      return this._applyModification(_brighten, arguments);
    },
    darken: function darken() {
      return this._applyModification(_darken, arguments);
    },
    desaturate: function desaturate() {
      return this._applyModification(_desaturate, arguments);
    },
    saturate: function saturate() {
      return this._applyModification(_saturate, arguments);
    },
    greyscale: function greyscale() {
      return this._applyModification(_greyscale, arguments);
    },
    spin: function spin() {
      return this._applyModification(_spin, arguments);
    },
    _applyCombination: function _applyCombination(fn2, args) {
      return fn2.apply(null, [this].concat([].slice.call(args)));
    },
    analogous: function analogous() {
      return this._applyCombination(_analogous, arguments);
    },
    complement: function complement() {
      return this._applyCombination(_complement, arguments);
    },
    monochromatic: function monochromatic() {
      return this._applyCombination(_monochromatic, arguments);
    },
    splitcomplement: function splitcomplement() {
      return this._applyCombination(_splitcomplement, arguments);
    },
    // Disabled until https://github.com/bgrins/TinyColor/issues/254
    // polyad: function (number) {
    //   return this._applyCombination(polyad, [number]);
    // },
    triad: function triad() {
      return this._applyCombination(polyad, [3]);
    },
    tetrad: function tetrad() {
      return this._applyCombination(polyad, [4]);
    }
  };
  tinycolor.fromRatio = function(color, opts) {
    if (_typeof(color) == "object") {
      var newColor = {};
      for (var i5 in color) {
        if (color.hasOwnProperty(i5)) {
          if (i5 === "a") {
            newColor[i5] = color[i5];
          } else {
            newColor[i5] = convertToPercentage(color[i5]);
          }
        }
      }
      color = newColor;
    }
    return tinycolor(color, opts);
  };
  function inputToRGB(color) {
    var rgb = {
      r: 0,
      g: 0,
      b: 0
    };
    var a5 = 1;
    var s7 = null;
    var v4 = null;
    var l6 = null;
    var ok = false;
    var format = false;
    if (typeof color == "string") {
      color = stringInputToObject(color);
    }
    if (_typeof(color) == "object") {
      if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
        rgb = rgbToRgb(color.r, color.g, color.b);
        ok = true;
        format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
      } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
        s7 = convertToPercentage(color.s);
        v4 = convertToPercentage(color.v);
        rgb = hsvToRgb(color.h, s7, v4);
        ok = true;
        format = "hsv";
      } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
        s7 = convertToPercentage(color.s);
        l6 = convertToPercentage(color.l);
        rgb = hslToRgb(color.h, s7, l6);
        ok = true;
        format = "hsl";
      }
      if (color.hasOwnProperty("a")) {
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
  function rgbToRgb(r6, g5, b4) {
    return {
      r: bound01(r6, 255) * 255,
      g: bound01(g5, 255) * 255,
      b: bound01(b4, 255) * 255
    };
  }
  function rgbToHsl(r6, g5, b4) {
    r6 = bound01(r6, 255);
    g5 = bound01(g5, 255);
    b4 = bound01(b4, 255);
    var max2 = Math.max(r6, g5, b4), min2 = Math.min(r6, g5, b4);
    var h5, s7, l6 = (max2 + min2) / 2;
    if (max2 == min2) {
      h5 = s7 = 0;
    } else {
      var d5 = max2 - min2;
      s7 = l6 > 0.5 ? d5 / (2 - max2 - min2) : d5 / (max2 + min2);
      switch (max2) {
        case r6:
          h5 = (g5 - b4) / d5 + (g5 < b4 ? 6 : 0);
          break;
        case g5:
          h5 = (b4 - r6) / d5 + 2;
          break;
        case b4:
          h5 = (r6 - g5) / d5 + 4;
          break;
      }
      h5 /= 6;
    }
    return {
      h: h5,
      s: s7,
      l: l6
    };
  }
  function hslToRgb(h5, s7, l6) {
    var r6, g5, b4;
    h5 = bound01(h5, 360);
    s7 = bound01(s7, 100);
    l6 = bound01(l6, 100);
    function hue2rgb(p5, q5, t5) {
      if (t5 < 0)
        t5 += 1;
      if (t5 > 1)
        t5 -= 1;
      if (t5 < 1 / 6)
        return p5 + (q5 - p5) * 6 * t5;
      if (t5 < 1 / 2)
        return q5;
      if (t5 < 2 / 3)
        return p5 + (q5 - p5) * (2 / 3 - t5) * 6;
      return p5;
    }
    if (s7 === 0) {
      r6 = g5 = b4 = l6;
    } else {
      var q4 = l6 < 0.5 ? l6 * (1 + s7) : l6 + s7 - l6 * s7;
      var p4 = 2 * l6 - q4;
      r6 = hue2rgb(p4, q4, h5 + 1 / 3);
      g5 = hue2rgb(p4, q4, h5);
      b4 = hue2rgb(p4, q4, h5 - 1 / 3);
    }
    return {
      r: r6 * 255,
      g: g5 * 255,
      b: b4 * 255
    };
  }
  function rgbToHsv(r6, g5, b4) {
    r6 = bound01(r6, 255);
    g5 = bound01(g5, 255);
    b4 = bound01(b4, 255);
    var max2 = Math.max(r6, g5, b4), min2 = Math.min(r6, g5, b4);
    var h5, s7, v4 = max2;
    var d5 = max2 - min2;
    s7 = max2 === 0 ? 0 : d5 / max2;
    if (max2 == min2) {
      h5 = 0;
    } else {
      switch (max2) {
        case r6:
          h5 = (g5 - b4) / d5 + (g5 < b4 ? 6 : 0);
          break;
        case g5:
          h5 = (b4 - r6) / d5 + 2;
          break;
        case b4:
          h5 = (r6 - g5) / d5 + 4;
          break;
      }
      h5 /= 6;
    }
    return {
      h: h5,
      s: s7,
      v: v4
    };
  }
  function hsvToRgb(h5, s7, v4) {
    h5 = bound01(h5, 360) * 6;
    s7 = bound01(s7, 100);
    v4 = bound01(v4, 100);
    var i5 = Math.floor(h5), f4 = h5 - i5, p4 = v4 * (1 - s7), q4 = v4 * (1 - f4 * s7), t5 = v4 * (1 - (1 - f4) * s7), mod = i5 % 6, r6 = [v4, q4, p4, p4, t5, v4][mod], g5 = [t5, v4, v4, q4, p4, p4][mod], b4 = [p4, p4, t5, v4, v4, q4][mod];
    return {
      r: r6 * 255,
      g: g5 * 255,
      b: b4 * 255
    };
  }
  function rgbToHex(r6, g5, b4, allow3Char) {
    var hex = [pad2(Math.round(r6).toString(16)), pad2(Math.round(g5).toString(16)), pad2(Math.round(b4).toString(16))];
    if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
      return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }
    return hex.join("");
  }
  function rgbaToHex(r6, g5, b4, a5, allow4Char) {
    var hex = [pad2(Math.round(r6).toString(16)), pad2(Math.round(g5).toString(16)), pad2(Math.round(b4).toString(16)), pad2(convertDecimalToHex(a5))];
    if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
      return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }
    return hex.join("");
  }
  function rgbaToArgbHex(r6, g5, b4, a5) {
    var hex = [pad2(convertDecimalToHex(a5)), pad2(Math.round(r6).toString(16)), pad2(Math.round(g5).toString(16)), pad2(Math.round(b4).toString(16))];
    return hex.join("");
  }
  tinycolor.equals = function(color1, color2) {
    if (!color1 || !color2)
      return false;
    return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
  };
  tinycolor.random = function() {
    return tinycolor.fromRatio({
      r: Math.random(),
      g: Math.random(),
      b: Math.random()
    });
  };
  function _desaturate(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var hsl = tinycolor(color).toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
  }
  function _saturate(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var hsl = tinycolor(color).toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
  }
  function _greyscale(color) {
    return tinycolor(color).desaturate(100);
  }
  function _lighten(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var hsl = tinycolor(color).toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
  }
  function _brighten(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var rgb = tinycolor(color).toRgb();
    rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
    rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
    rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
    return tinycolor(rgb);
  }
  function _darken(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var hsl = tinycolor(color).toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
  }
  function _spin(color, amount) {
    var hsl = tinycolor(color).toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return tinycolor(hsl);
  }
  function _complement(color) {
    var hsl = tinycolor(color).toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return tinycolor(hsl);
  }
  function polyad(color, number) {
    if (isNaN(number) || number <= 0) {
      throw new Error("Argument to polyad must be a positive number");
    }
    var hsl = tinycolor(color).toHsl();
    var result = [tinycolor(color)];
    var step = 360 / number;
    for (var i5 = 1; i5 < number; i5++) {
      result.push(tinycolor({
        h: (hsl.h + i5 * step) % 360,
        s: hsl.s,
        l: hsl.l
      }));
    }
    return result;
  }
  function _splitcomplement(color) {
    var hsl = tinycolor(color).toHsl();
    var h5 = hsl.h;
    return [tinycolor(color), tinycolor({
      h: (h5 + 72) % 360,
      s: hsl.s,
      l: hsl.l
    }), tinycolor({
      h: (h5 + 216) % 360,
      s: hsl.s,
      l: hsl.l
    })];
  }
  function _analogous(color, results, slices) {
    results = results || 6;
    slices = slices || 30;
    var hsl = tinycolor(color).toHsl();
    var part = 360 / slices;
    var ret = [tinycolor(color)];
    for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results; ) {
      hsl.h = (hsl.h + part) % 360;
      ret.push(tinycolor(hsl));
    }
    return ret;
  }
  function _monochromatic(color, results) {
    results = results || 6;
    var hsv = tinycolor(color).toHsv();
    var h5 = hsv.h, s7 = hsv.s, v4 = hsv.v;
    var ret = [];
    var modification = 1 / results;
    while (results--) {
      ret.push(tinycolor({
        h: h5,
        s: s7,
        v: v4
      }));
      v4 = (v4 + modification) % 1;
    }
    return ret;
  }
  tinycolor.mix = function(color1, color2, amount) {
    amount = amount === 0 ? 0 : amount || 50;
    var rgb1 = tinycolor(color1).toRgb();
    var rgb2 = tinycolor(color2).toRgb();
    var p4 = amount / 100;
    var rgba = {
      r: (rgb2.r - rgb1.r) * p4 + rgb1.r,
      g: (rgb2.g - rgb1.g) * p4 + rgb1.g,
      b: (rgb2.b - rgb1.b) * p4 + rgb1.b,
      a: (rgb2.a - rgb1.a) * p4 + rgb1.a
    };
    return tinycolor(rgba);
  };
  tinycolor.readability = function(color1, color2) {
    var c1 = tinycolor(color1);
    var c22 = tinycolor(color2);
    return (Math.max(c1.getLuminance(), c22.getLuminance()) + 0.05) / (Math.min(c1.getLuminance(), c22.getLuminance()) + 0.05);
  };
  tinycolor.isReadable = function(color1, color2, wcag2) {
    var readability = tinycolor.readability(color1, color2);
    var wcag2Parms, out;
    out = false;
    wcag2Parms = validateWCAG2Parms(wcag2);
    switch (wcag2Parms.level + wcag2Parms.size) {
      case "AAsmall":
      case "AAAlarge":
        out = readability >= 4.5;
        break;
      case "AAlarge":
        out = readability >= 3;
        break;
      case "AAAsmall":
        out = readability >= 7;
        break;
    }
    return out;
  };
  tinycolor.mostReadable = function(baseColor, colorList, args) {
    var bestColor = null;
    var bestScore = 0;
    var readability;
    var includeFallbackColors, level, size;
    args = args || {};
    includeFallbackColors = args.includeFallbackColors;
    level = args.level;
    size = args.size;
    for (var i5 = 0; i5 < colorList.length; i5++) {
      readability = tinycolor.readability(baseColor, colorList[i5]);
      if (readability > bestScore) {
        bestScore = readability;
        bestColor = tinycolor(colorList[i5]);
      }
    }
    if (tinycolor.isReadable(baseColor, bestColor, {
      level,
      size
    }) || !includeFallbackColors) {
      return bestColor;
    } else {
      args.includeFallbackColors = false;
      return tinycolor.mostReadable(baseColor, ["#fff", "#000"], args);
    }
  };
  var names = tinycolor.names = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "0ff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "00f",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "0ff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "f0f",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
  };
  var hexNames = tinycolor.hexNames = flip(names);
  function flip(o7) {
    var flipped = {};
    for (var i5 in o7) {
      if (o7.hasOwnProperty(i5)) {
        flipped[o7[i5]] = i5;
      }
    }
    return flipped;
  }
  function boundAlpha(a5) {
    a5 = parseFloat(a5);
    if (isNaN(a5) || a5 < 0 || a5 > 1) {
      a5 = 1;
    }
    return a5;
  }
  function bound01(n6, max2) {
    if (isOnePointZero(n6))
      n6 = "100%";
    var processPercent = isPercentage(n6);
    n6 = Math.min(max2, Math.max(0, parseFloat(n6)));
    if (processPercent) {
      n6 = parseInt(n6 * max2, 10) / 100;
    }
    if (Math.abs(n6 - max2) < 1e-6) {
      return 1;
    }
    return n6 % max2 / parseFloat(max2);
  }
  function clamp01(val) {
    return Math.min(1, Math.max(0, val));
  }
  function parseIntFromHex(val) {
    return parseInt(val, 16);
  }
  function isOnePointZero(n6) {
    return typeof n6 == "string" && n6.indexOf(".") != -1 && parseFloat(n6) === 1;
  }
  function isPercentage(n6) {
    return typeof n6 === "string" && n6.indexOf("%") != -1;
  }
  function pad2(c5) {
    return c5.length == 1 ? "0" + c5 : "" + c5;
  }
  function convertToPercentage(n6) {
    if (n6 <= 1) {
      n6 = n6 * 100 + "%";
    }
    return n6;
  }
  function convertDecimalToHex(d5) {
    return Math.round(parseFloat(d5) * 255).toString(16);
  }
  function convertHexToDecimal(h5) {
    return parseIntFromHex(h5) / 255;
  }
  var matchers = function() {
    var CSS_INTEGER = "[-\\+]?\\d+%?";
    var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
    var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";
    var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    return {
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
  }();
  function isValidCSSUnit(color) {
    return !!matchers.CSS_UNIT.exec(color);
  }
  function stringInputToObject(color) {
    color = color.replace(trimLeft, "").replace(trimRight, "").toLowerCase();
    var named = false;
    if (names[color]) {
      color = names[color];
      named = true;
    } else if (color == "transparent") {
      return {
        r: 0,
        g: 0,
        b: 0,
        a: 0,
        format: "name"
      };
    }
    var match;
    if (match = matchers.rgb.exec(color)) {
      return {
        r: match[1],
        g: match[2],
        b: match[3]
      };
    }
    if (match = matchers.rgba.exec(color)) {
      return {
        r: match[1],
        g: match[2],
        b: match[3],
        a: match[4]
      };
    }
    if (match = matchers.hsl.exec(color)) {
      return {
        h: match[1],
        s: match[2],
        l: match[3]
      };
    }
    if (match = matchers.hsla.exec(color)) {
      return {
        h: match[1],
        s: match[2],
        l: match[3],
        a: match[4]
      };
    }
    if (match = matchers.hsv.exec(color)) {
      return {
        h: match[1],
        s: match[2],
        v: match[3]
      };
    }
    if (match = matchers.hsva.exec(color)) {
      return {
        h: match[1],
        s: match[2],
        v: match[3],
        a: match[4]
      };
    }
    if (match = matchers.hex8.exec(color)) {
      return {
        r: parseIntFromHex(match[1]),
        g: parseIntFromHex(match[2]),
        b: parseIntFromHex(match[3]),
        a: convertHexToDecimal(match[4]),
        format: named ? "name" : "hex8"
      };
    }
    if (match = matchers.hex6.exec(color)) {
      return {
        r: parseIntFromHex(match[1]),
        g: parseIntFromHex(match[2]),
        b: parseIntFromHex(match[3]),
        format: named ? "name" : "hex"
      };
    }
    if (match = matchers.hex4.exec(color)) {
      return {
        r: parseIntFromHex(match[1] + "" + match[1]),
        g: parseIntFromHex(match[2] + "" + match[2]),
        b: parseIntFromHex(match[3] + "" + match[3]),
        a: convertHexToDecimal(match[4] + "" + match[4]),
        format: named ? "name" : "hex8"
      };
    }
    if (match = matchers.hex3.exec(color)) {
      return {
        r: parseIntFromHex(match[1] + "" + match[1]),
        g: parseIntFromHex(match[2] + "" + match[2]),
        b: parseIntFromHex(match[3] + "" + match[3]),
        format: named ? "name" : "hex"
      };
    }
    return false;
  }
  function validateWCAG2Parms(parms) {
    var level, size;
    parms = parms || {
      level: "AA",
      size: "small"
    };
    level = (parms.level || "AA").toUpperCase();
    size = (parms.size || "small").toLowerCase();
    if (level !== "AA" && level !== "AAA") {
      level = "AA";
    }
    if (size !== "small" && size !== "large") {
      size = "small";
    }
    return {
      level,
      size
    };
  }

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/helpers/color.js
  var simpleCheckForValidColor = function simpleCheckForValidColor2(data) {
    var keysToCheck = ["r", "g", "b", "a", "h", "s", "l", "v"];
    var checked = 0;
    var passed = 0;
    forEach_default(keysToCheck, function(letter) {
      if (data[letter]) {
        checked += 1;
        if (!isNaN(data[letter])) {
          passed += 1;
        }
        if (letter === "s" || letter === "l") {
          var percentPatt = /^\d+%$/;
          if (percentPatt.test(data[letter])) {
            passed += 1;
          }
        }
      }
    });
    return checked === passed ? data : false;
  };
  var toState = function toState2(data, oldHue) {
    var color = data.hex ? tinycolor(data.hex) : tinycolor(data);
    var hsl = color.toHsl();
    var hsv = color.toHsv();
    var rgb = color.toRgb();
    var hex = color.toHex();
    if (hsl.s === 0) {
      hsl.h = oldHue || 0;
      hsv.h = oldHue || 0;
    }
    var transparent = hex === "000000" && rgb.a === 0;
    return {
      hsl,
      hex: transparent ? "transparent" : "#" + hex,
      rgb,
      hsv,
      oldHue: data.h || oldHue || hsl.h,
      source: data.source
    };
  };
  var isValidHex = function isValidHex2(hex) {
    if (hex === "transparent") {
      return true;
    }
    var lh = String(hex).charAt(0) === "#" ? 1 : 0;
    return hex.length !== 4 + lh && hex.length < 7 + lh && tinycolor(hex).isValid();
  };
  var getContrastingColor = function getContrastingColor2(data) {
    if (!data) {
      return "#fff";
    }
    var col = toState(data);
    if (col.hex === "transparent") {
      return "rgba(0,0,0,0.4)";
    }
    var yiq = (col.rgb.r * 299 + col.rgb.g * 587 + col.rgb.b * 114) / 1e3;
    return yiq >= 128 ? "#000" : "#fff";
  };
  var isvalidColorString = function isvalidColorString2(string, type) {
    var stringWithoutDegree = string.replace("\xB0", "");
    return tinycolor(type + " (" + stringWithoutDegree + ")")._ok;
  };

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/common/ColorWrap.js
  var _extends3 = Object.assign || function(target) {
    for (var i5 = 1; i5 < arguments.length; i5++) {
      var source = arguments[i5];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  var _createClass5 = function() {
    function defineProperties(target, props) {
      for (var i5 = 0; i5 < props.length; i5++) {
        var descriptor = props[i5];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  function _classCallCheck5(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _possibleConstructorReturn5(self2, call) {
    if (!self2) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self2;
  }
  function _inherits5(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
    if (superClass)
      Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var ColorWrap = function ColorWrap2(Picker) {
    var ColorPicker2 = function(_ref) {
      _inherits5(ColorPicker3, _ref);
      function ColorPicker3(props) {
        _classCallCheck5(this, ColorPicker3);
        var _this = _possibleConstructorReturn5(this, (ColorPicker3.__proto__ || Object.getPrototypeOf(ColorPicker3)).call(this));
        _this.handleChange = function(data, event) {
          var isValidColor = simpleCheckForValidColor(data);
          if (isValidColor) {
            var colors2 = toState(data, data.h || _this.state.oldHue);
            _this.setState(colors2);
            _this.props.onChangeComplete && _this.debounce(_this.props.onChangeComplete, colors2, event);
            _this.props.onChange && _this.props.onChange(colors2, event);
          }
        };
        _this.handleSwatchHover = function(data, event) {
          var isValidColor = simpleCheckForValidColor(data);
          if (isValidColor) {
            var colors2 = toState(data, data.h || _this.state.oldHue);
            _this.props.onSwatchHover && _this.props.onSwatchHover(colors2, event);
          }
        };
        _this.state = _extends3({}, toState(props.color, 0));
        _this.debounce = debounce_default(function(fn2, data, event) {
          fn2(data, event);
        }, 100);
        return _this;
      }
      _createClass5(ColorPicker3, [{
        key: "render",
        value: function render3() {
          var optionalEvents = {};
          if (this.props.onSwatchHover) {
            optionalEvents.onSwatchHover = this.handleSwatchHover;
          }
          return Cn.createElement(Picker, _extends3({}, this.props, this.state, {
            onChange: this.handleChange
          }, optionalEvents));
        }
      }], [{
        key: "getDerivedStateFromProps",
        value: function getDerivedStateFromProps(nextProps, state) {
          return _extends3({}, toState(nextProps.color, state.oldHue));
        }
      }]);
      return ColorPicker3;
    }(w4 || b2);
    ColorPicker2.propTypes = _extends3({}, Picker.propTypes);
    ColorPicker2.defaultProps = _extends3({}, Picker.defaultProps, {
      color: {
        h: 250,
        s: 0.5,
        l: 0.2,
        a: 1
      }
    });
    return ColorPicker2;
  };
  var ColorWrap_default = ColorWrap;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/common/Swatch.js
  init_react();
  var import_reactcss7 = __toESM(require_lib());

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/helpers/interaction.js
  init_react();
  var _extends4 = Object.assign || function(target) {
    for (var i5 = 1; i5 < arguments.length; i5++) {
      var source = arguments[i5];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  var _createClass6 = function() {
    function defineProperties(target, props) {
      for (var i5 = 0; i5 < props.length; i5++) {
        var descriptor = props[i5];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  function _classCallCheck6(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _possibleConstructorReturn6(self2, call) {
    if (!self2) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self2;
  }
  function _inherits6(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
    if (superClass)
      Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var handleFocus = function handleFocus2(Component) {
    var Span = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "span";
    return function(_React$Component) {
      _inherits6(Focus, _React$Component);
      function Focus() {
        var _ref;
        var _temp, _this, _ret;
        _classCallCheck6(this, Focus);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return _ret = (_temp = (_this = _possibleConstructorReturn6(this, (_ref = Focus.__proto__ || Object.getPrototypeOf(Focus)).call.apply(_ref, [this].concat(args))), _this), _this.state = { focus: false }, _this.handleFocus = function() {
          return _this.setState({ focus: true });
        }, _this.handleBlur = function() {
          return _this.setState({ focus: false });
        }, _temp), _possibleConstructorReturn6(_this, _ret);
      }
      _createClass6(Focus, [{
        key: "render",
        value: function render3() {
          return Cn.createElement(
            Span,
            { onFocus: this.handleFocus, onBlur: this.handleBlur },
            Cn.createElement(Component, _extends4({}, this.props, this.state))
          );
        }
      }]);
      return Focus;
    }(Cn.Component);
  };

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/common/Swatch.js
  var _extends5 = Object.assign || function(target) {
    for (var i5 = 1; i5 < arguments.length; i5++) {
      var source = arguments[i5];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  var ENTER = 13;
  var Swatch = function Swatch2(_ref) {
    var color = _ref.color, style = _ref.style, _ref$onClick = _ref.onClick, onClick = _ref$onClick === void 0 ? function() {
    } : _ref$onClick, onHover = _ref.onHover, _ref$title = _ref.title, title = _ref$title === void 0 ? color : _ref$title, children = _ref.children, focus = _ref.focus, _ref$focusStyle = _ref.focusStyle, focusStyle = _ref$focusStyle === void 0 ? {} : _ref$focusStyle;
    var transparent = color === "transparent";
    var styles = (0, import_reactcss7.default)({
      default: {
        swatch: _extends5({
          background: color,
          height: "100%",
          width: "100%",
          cursor: "pointer",
          position: "relative",
          outline: "none"
        }, style, focus ? focusStyle : {})
      }
    });
    var handleClick = function handleClick2(e6) {
      return onClick(color, e6);
    };
    var handleKeyDown = function handleKeyDown2(e6) {
      return e6.keyCode === ENTER && onClick(color, e6);
    };
    var handleHover3 = function handleHover4(e6) {
      return onHover(color, e6);
    };
    var optionalEvents = {};
    if (onHover) {
      optionalEvents.onMouseOver = handleHover3;
    }
    return Cn.createElement(
      "div",
      _extends5({
        style: styles.swatch,
        onClick: handleClick,
        title,
        tabIndex: 0,
        onKeyDown: handleKeyDown
      }, optionalEvents),
      children,
      transparent && Cn.createElement(Checkboard_default, {
        borderRadius: styles.swatch.borderRadius,
        boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)"
      })
    );
  };
  var Swatch_default = handleFocus(Swatch);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/alpha/AlphaPointer.js
  init_react();
  var import_reactcss8 = __toESM(require_lib());
  var AlphaPointer = function AlphaPointer2(_ref) {
    var direction = _ref.direction;
    var styles = (0, import_reactcss8.default)({
      "default": {
        picker: {
          width: "18px",
          height: "18px",
          borderRadius: "50%",
          transform: "translate(-9px, -1px)",
          backgroundColor: "rgb(248, 248, 248)",
          boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
        }
      },
      "vertical": {
        picker: {
          transform: "translate(-3px, -9px)"
        }
      }
    }, { vertical: direction === "vertical" });
    return Cn.createElement("div", { style: styles.picker });
  };
  var AlphaPointer_default = AlphaPointer;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/alpha/Alpha.js
  var _extends6 = Object.assign || function(target) {
    for (var i5 = 1; i5 < arguments.length; i5++) {
      var source = arguments[i5];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  var AlphaPicker = function AlphaPicker2(_ref) {
    var rgb = _ref.rgb, hsl = _ref.hsl, width = _ref.width, height = _ref.height, onChange = _ref.onChange, direction = _ref.direction, style = _ref.style, renderers = _ref.renderers, pointer = _ref.pointer, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
    var styles = (0, import_reactcss9.default)({
      "default": {
        picker: {
          position: "relative",
          width,
          height
        },
        alpha: {
          radius: "2px",
          style
        }
      }
    });
    return Cn.createElement(
      "div",
      { style: styles.picker, className: "alpha-picker " + className },
      Cn.createElement(Alpha_default, _extends6({}, styles.alpha, {
        rgb,
        hsl,
        pointer,
        renderers,
        onChange,
        direction
      }))
    );
  };
  AlphaPicker.defaultProps = {
    width: "316px",
    height: "16px",
    direction: "horizontal",
    pointer: AlphaPointer_default
  };
  var Alpha_default2 = ColorWrap_default(AlphaPicker);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/block/Block.js
  init_react();
  var import_prop_types2 = __toESM(require_prop_types());
  var import_reactcss11 = __toESM(require_lib());

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/block/BlockSwatches.js
  init_react();
  var import_reactcss10 = __toESM(require_lib());

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_arrayMap.js
  function arrayMap(array, iteratee) {
    var index = -1, length = array == null ? 0 : array.length, result = Array(length);
    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }
  var arrayMap_default = arrayMap;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_setCacheAdd.js
  var HASH_UNDEFINED3 = "__lodash_hash_undefined__";
  function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED3);
    return this;
  }
  var setCacheAdd_default = setCacheAdd;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_setCacheHas.js
  function setCacheHas(value) {
    return this.__data__.has(value);
  }
  var setCacheHas_default = setCacheHas;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_SetCache.js
  function SetCache(values) {
    var index = -1, length = values == null ? 0 : values.length;
    this.__data__ = new MapCache_default();
    while (++index < length) {
      this.add(values[index]);
    }
  }
  SetCache.prototype.add = SetCache.prototype.push = setCacheAdd_default;
  SetCache.prototype.has = setCacheHas_default;
  var SetCache_default = SetCache;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_arraySome.js
  function arraySome(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length;
    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }
  var arraySome_default = arraySome;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_cacheHas.js
  function cacheHas(cache, key) {
    return cache.has(key);
  }
  var cacheHas_default = cacheHas;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_equalArrays.js
  var COMPARE_PARTIAL_FLAG = 1;
  var COMPARE_UNORDERED_FLAG = 2;
  function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
    if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
      return false;
    }
    var arrStacked = stack.get(array);
    var othStacked = stack.get(other);
    if (arrStacked && othStacked) {
      return arrStacked == other && othStacked == array;
    }
    var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache_default() : void 0;
    stack.set(array, other);
    stack.set(other, array);
    while (++index < arrLength) {
      var arrValue = array[index], othValue = other[index];
      if (customizer) {
        var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
      }
      if (compared !== void 0) {
        if (compared) {
          continue;
        }
        result = false;
        break;
      }
      if (seen) {
        if (!arraySome_default(other, function(othValue2, othIndex) {
          if (!cacheHas_default(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
            return seen.push(othIndex);
          }
        })) {
          result = false;
          break;
        }
      } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
        result = false;
        break;
      }
    }
    stack["delete"](array);
    stack["delete"](other);
    return result;
  }
  var equalArrays_default = equalArrays;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_mapToArray.js
  function mapToArray(map2) {
    var index = -1, result = Array(map2.size);
    map2.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }
  var mapToArray_default = mapToArray;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_setToArray.js
  function setToArray(set) {
    var index = -1, result = Array(set.size);
    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }
  var setToArray_default = setToArray;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_equalByTag.js
  var COMPARE_PARTIAL_FLAG2 = 1;
  var COMPARE_UNORDERED_FLAG2 = 2;
  var boolTag2 = "[object Boolean]";
  var dateTag2 = "[object Date]";
  var errorTag2 = "[object Error]";
  var mapTag2 = "[object Map]";
  var numberTag2 = "[object Number]";
  var regexpTag2 = "[object RegExp]";
  var setTag2 = "[object Set]";
  var stringTag2 = "[object String]";
  var symbolTag2 = "[object Symbol]";
  var arrayBufferTag2 = "[object ArrayBuffer]";
  var dataViewTag2 = "[object DataView]";
  var symbolProto = Symbol_default ? Symbol_default.prototype : void 0;
  var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
  function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch (tag) {
      case dataViewTag2:
        if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
          return false;
        }
        object = object.buffer;
        other = other.buffer;
      case arrayBufferTag2:
        if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array_default(object), new Uint8Array_default(other))) {
          return false;
        }
        return true;
      case boolTag2:
      case dateTag2:
      case numberTag2:
        return eq_default(+object, +other);
      case errorTag2:
        return object.name == other.name && object.message == other.message;
      case regexpTag2:
      case stringTag2:
        return object == other + "";
      case mapTag2:
        var convert = mapToArray_default;
      case setTag2:
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG2;
        convert || (convert = setToArray_default);
        if (object.size != other.size && !isPartial) {
          return false;
        }
        var stacked = stack.get(object);
        if (stacked) {
          return stacked == other;
        }
        bitmask |= COMPARE_UNORDERED_FLAG2;
        stack.set(object, other);
        var result = equalArrays_default(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
        stack["delete"](object);
        return result;
      case symbolTag2:
        if (symbolValueOf) {
          return symbolValueOf.call(object) == symbolValueOf.call(other);
        }
    }
    return false;
  }
  var equalByTag_default = equalByTag;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_arrayPush.js
  function arrayPush(array, values) {
    var index = -1, length = values.length, offset = array.length;
    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }
  var arrayPush_default = arrayPush;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_baseGetAllKeys.js
  function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray_default(object) ? result : arrayPush_default(result, symbolsFunc(object));
  }
  var baseGetAllKeys_default = baseGetAllKeys;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_arrayFilter.js
  function arrayFilter(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }
  var arrayFilter_default = arrayFilter;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/stubArray.js
  function stubArray() {
    return [];
  }
  var stubArray_default = stubArray;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_getSymbols.js
  var objectProto13 = Object.prototype;
  var propertyIsEnumerable2 = objectProto13.propertyIsEnumerable;
  var nativeGetSymbols = Object.getOwnPropertySymbols;
  var getSymbols = !nativeGetSymbols ? stubArray_default : function(object) {
    if (object == null) {
      return [];
    }
    object = Object(object);
    return arrayFilter_default(nativeGetSymbols(object), function(symbol) {
      return propertyIsEnumerable2.call(object, symbol);
    });
  };
  var getSymbols_default = getSymbols;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_getAllKeys.js
  function getAllKeys(object) {
    return baseGetAllKeys_default(object, keys_default, getSymbols_default);
  }
  var getAllKeys_default = getAllKeys;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_equalObjects.js
  var COMPARE_PARTIAL_FLAG3 = 1;
  var objectProto14 = Object.prototype;
  var hasOwnProperty11 = objectProto14.hasOwnProperty;
  function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG3, objProps = getAllKeys_default(object), objLength = objProps.length, othProps = getAllKeys_default(other), othLength = othProps.length;
    if (objLength != othLength && !isPartial) {
      return false;
    }
    var index = objLength;
    while (index--) {
      var key = objProps[index];
      if (!(isPartial ? key in other : hasOwnProperty11.call(other, key))) {
        return false;
      }
    }
    var objStacked = stack.get(object);
    var othStacked = stack.get(other);
    if (objStacked && othStacked) {
      return objStacked == other && othStacked == object;
    }
    var result = true;
    stack.set(object, other);
    stack.set(other, object);
    var skipCtor = isPartial;
    while (++index < objLength) {
      key = objProps[index];
      var objValue = object[key], othValue = other[key];
      if (customizer) {
        var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
      }
      if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
        result = false;
        break;
      }
      skipCtor || (skipCtor = key == "constructor");
    }
    if (result && !skipCtor) {
      var objCtor = object.constructor, othCtor = other.constructor;
      if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
        result = false;
      }
    }
    stack["delete"](object);
    stack["delete"](other);
    return result;
  }
  var equalObjects_default = equalObjects;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_DataView.js
  var DataView = getNative_default(root_default, "DataView");
  var DataView_default = DataView;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_Promise.js
  var Promise2 = getNative_default(root_default, "Promise");
  var Promise_default = Promise2;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_Set.js
  var Set2 = getNative_default(root_default, "Set");
  var Set_default = Set2;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_WeakMap.js
  var WeakMap2 = getNative_default(root_default, "WeakMap");
  var WeakMap_default = WeakMap2;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_getTag.js
  var mapTag3 = "[object Map]";
  var objectTag3 = "[object Object]";
  var promiseTag = "[object Promise]";
  var setTag3 = "[object Set]";
  var weakMapTag2 = "[object WeakMap]";
  var dataViewTag3 = "[object DataView]";
  var dataViewCtorString = toSource_default(DataView_default);
  var mapCtorString = toSource_default(Map_default);
  var promiseCtorString = toSource_default(Promise_default);
  var setCtorString = toSource_default(Set_default);
  var weakMapCtorString = toSource_default(WeakMap_default);
  var getTag = baseGetTag_default;
  if (DataView_default && getTag(new DataView_default(new ArrayBuffer(1))) != dataViewTag3 || Map_default && getTag(new Map_default()) != mapTag3 || Promise_default && getTag(Promise_default.resolve()) != promiseTag || Set_default && getTag(new Set_default()) != setTag3 || WeakMap_default && getTag(new WeakMap_default()) != weakMapTag2) {
    getTag = function(value) {
      var result = baseGetTag_default(value), Ctor = result == objectTag3 ? value.constructor : void 0, ctorString = Ctor ? toSource_default(Ctor) : "";
      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString:
            return dataViewTag3;
          case mapCtorString:
            return mapTag3;
          case promiseCtorString:
            return promiseTag;
          case setCtorString:
            return setTag3;
          case weakMapCtorString:
            return weakMapTag2;
        }
      }
      return result;
    };
  }
  var getTag_default = getTag;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_baseIsEqualDeep.js
  var COMPARE_PARTIAL_FLAG4 = 1;
  var argsTag3 = "[object Arguments]";
  var arrayTag2 = "[object Array]";
  var objectTag4 = "[object Object]";
  var objectProto15 = Object.prototype;
  var hasOwnProperty12 = objectProto15.hasOwnProperty;
  function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = isArray_default(object), othIsArr = isArray_default(other), objTag = objIsArr ? arrayTag2 : getTag_default(object), othTag = othIsArr ? arrayTag2 : getTag_default(other);
    objTag = objTag == argsTag3 ? objectTag4 : objTag;
    othTag = othTag == argsTag3 ? objectTag4 : othTag;
    var objIsObj = objTag == objectTag4, othIsObj = othTag == objectTag4, isSameTag = objTag == othTag;
    if (isSameTag && isBuffer_default(object)) {
      if (!isBuffer_default(other)) {
        return false;
      }
      objIsArr = true;
      objIsObj = false;
    }
    if (isSameTag && !objIsObj) {
      stack || (stack = new Stack_default());
      return objIsArr || isTypedArray_default(object) ? equalArrays_default(object, other, bitmask, customizer, equalFunc, stack) : equalByTag_default(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }
    if (!(bitmask & COMPARE_PARTIAL_FLAG4)) {
      var objIsWrapped = objIsObj && hasOwnProperty12.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty12.call(other, "__wrapped__");
      if (objIsWrapped || othIsWrapped) {
        var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
        stack || (stack = new Stack_default());
        return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
      }
    }
    if (!isSameTag) {
      return false;
    }
    stack || (stack = new Stack_default());
    return equalObjects_default(object, other, bitmask, customizer, equalFunc, stack);
  }
  var baseIsEqualDeep_default = baseIsEqualDeep;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_baseIsEqual.js
  function baseIsEqual(value, other, bitmask, customizer, stack) {
    if (value === other) {
      return true;
    }
    if (value == null || other == null || !isObjectLike_default(value) && !isObjectLike_default(other)) {
      return value !== value && other !== other;
    }
    return baseIsEqualDeep_default(value, other, bitmask, customizer, baseIsEqual, stack);
  }
  var baseIsEqual_default = baseIsEqual;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_baseIsMatch.js
  var COMPARE_PARTIAL_FLAG5 = 1;
  var COMPARE_UNORDERED_FLAG3 = 2;
  function baseIsMatch(object, source, matchData, customizer) {
    var index = matchData.length, length = index, noCustomizer = !customizer;
    if (object == null) {
      return !length;
    }
    object = Object(object);
    while (index--) {
      var data = matchData[index];
      if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
        return false;
      }
    }
    while (++index < length) {
      data = matchData[index];
      var key = data[0], objValue = object[key], srcValue = data[1];
      if (noCustomizer && data[2]) {
        if (objValue === void 0 && !(key in object)) {
          return false;
        }
      } else {
        var stack = new Stack_default();
        if (customizer) {
          var result = customizer(objValue, srcValue, key, object, source, stack);
        }
        if (!(result === void 0 ? baseIsEqual_default(srcValue, objValue, COMPARE_PARTIAL_FLAG5 | COMPARE_UNORDERED_FLAG3, customizer, stack) : result)) {
          return false;
        }
      }
    }
    return true;
  }
  var baseIsMatch_default = baseIsMatch;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_isStrictComparable.js
  function isStrictComparable(value) {
    return value === value && !isObject_default(value);
  }
  var isStrictComparable_default = isStrictComparable;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_getMatchData.js
  function getMatchData(object) {
    var result = keys_default(object), length = result.length;
    while (length--) {
      var key = result[length], value = object[key];
      result[length] = [key, value, isStrictComparable_default(value)];
    }
    return result;
  }
  var getMatchData_default = getMatchData;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_matchesStrictComparable.js
  function matchesStrictComparable(key, srcValue) {
    return function(object) {
      if (object == null) {
        return false;
      }
      return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
    };
  }
  var matchesStrictComparable_default = matchesStrictComparable;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_baseMatches.js
  function baseMatches(source) {
    var matchData = getMatchData_default(source);
    if (matchData.length == 1 && matchData[0][2]) {
      return matchesStrictComparable_default(matchData[0][0], matchData[0][1]);
    }
    return function(object) {
      return object === source || baseIsMatch_default(object, source, matchData);
    };
  }
  var baseMatches_default = baseMatches;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_isKey.js
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
  var reIsPlainProp = /^\w*$/;
  function isKey(value, object) {
    if (isArray_default(value)) {
      return false;
    }
    var type = typeof value;
    if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol_default(value)) {
      return true;
    }
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
  }
  var isKey_default = isKey;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/memoize.js
  var FUNC_ERROR_TEXT3 = "Expected a function";
  function memoize(func, resolver) {
    if (typeof func != "function" || resolver != null && typeof resolver != "function") {
      throw new TypeError(FUNC_ERROR_TEXT3);
    }
    var memoized = function() {
      var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
      if (cache.has(key)) {
        return cache.get(key);
      }
      var result = func.apply(this, args);
      memoized.cache = cache.set(key, result) || cache;
      return result;
    };
    memoized.cache = new (memoize.Cache || MapCache_default)();
    return memoized;
  }
  memoize.Cache = MapCache_default;
  var memoize_default = memoize;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_memoizeCapped.js
  var MAX_MEMOIZE_SIZE = 500;
  function memoizeCapped(func) {
    var result = memoize_default(func, function(key) {
      if (cache.size === MAX_MEMOIZE_SIZE) {
        cache.clear();
      }
      return key;
    });
    var cache = result.cache;
    return result;
  }
  var memoizeCapped_default = memoizeCapped;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_stringToPath.js
  var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
  var reEscapeChar = /\\(\\)?/g;
  var stringToPath = memoizeCapped_default(function(string) {
    var result = [];
    if (string.charCodeAt(0) === 46) {
      result.push("");
    }
    string.replace(rePropName, function(match, number, quote, subString) {
      result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
    });
    return result;
  });
  var stringToPath_default = stringToPath;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_baseToString.js
  var INFINITY = 1 / 0;
  var symbolProto2 = Symbol_default ? Symbol_default.prototype : void 0;
  var symbolToString = symbolProto2 ? symbolProto2.toString : void 0;
  function baseToString(value) {
    if (typeof value == "string") {
      return value;
    }
    if (isArray_default(value)) {
      return arrayMap_default(value, baseToString) + "";
    }
    if (isSymbol_default(value)) {
      return symbolToString ? symbolToString.call(value) : "";
    }
    var result = value + "";
    return result == "0" && 1 / value == -INFINITY ? "-0" : result;
  }
  var baseToString_default = baseToString;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/toString.js
  function toString2(value) {
    return value == null ? "" : baseToString_default(value);
  }
  var toString_default = toString2;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_castPath.js
  function castPath(value, object) {
    if (isArray_default(value)) {
      return value;
    }
    return isKey_default(value, object) ? [value] : stringToPath_default(toString_default(value));
  }
  var castPath_default = castPath;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_toKey.js
  var INFINITY2 = 1 / 0;
  function toKey(value) {
    if (typeof value == "string" || isSymbol_default(value)) {
      return value;
    }
    var result = value + "";
    return result == "0" && 1 / value == -INFINITY2 ? "-0" : result;
  }
  var toKey_default = toKey;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_baseGet.js
  function baseGet(object, path) {
    path = castPath_default(path, object);
    var index = 0, length = path.length;
    while (object != null && index < length) {
      object = object[toKey_default(path[index++])];
    }
    return index && index == length ? object : void 0;
  }
  var baseGet_default = baseGet;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/get.js
  function get3(object, path, defaultValue) {
    var result = object == null ? void 0 : baseGet_default(object, path);
    return result === void 0 ? defaultValue : result;
  }
  var get_default = get3;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_baseHasIn.js
  function baseHasIn(object, key) {
    return object != null && key in Object(object);
  }
  var baseHasIn_default = baseHasIn;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_hasPath.js
  function hasPath(object, path, hasFunc) {
    path = castPath_default(path, object);
    var index = -1, length = path.length, result = false;
    while (++index < length) {
      var key = toKey_default(path[index]);
      if (!(result = object != null && hasFunc(object, key))) {
        break;
      }
      object = object[key];
    }
    if (result || ++index != length) {
      return result;
    }
    length = object == null ? 0 : object.length;
    return !!length && isLength_default(length) && isIndex_default(key, length) && (isArray_default(object) || isArguments_default(object));
  }
  var hasPath_default = hasPath;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/hasIn.js
  function hasIn(object, path) {
    return object != null && hasPath_default(object, path, baseHasIn_default);
  }
  var hasIn_default = hasIn;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_baseMatchesProperty.js
  var COMPARE_PARTIAL_FLAG6 = 1;
  var COMPARE_UNORDERED_FLAG4 = 2;
  function baseMatchesProperty(path, srcValue) {
    if (isKey_default(path) && isStrictComparable_default(srcValue)) {
      return matchesStrictComparable_default(toKey_default(path), srcValue);
    }
    return function(object) {
      var objValue = get_default(object, path);
      return objValue === void 0 && objValue === srcValue ? hasIn_default(object, path) : baseIsEqual_default(srcValue, objValue, COMPARE_PARTIAL_FLAG6 | COMPARE_UNORDERED_FLAG4);
    };
  }
  var baseMatchesProperty_default = baseMatchesProperty;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_baseProperty.js
  function baseProperty(key) {
    return function(object) {
      return object == null ? void 0 : object[key];
    };
  }
  var baseProperty_default = baseProperty;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_basePropertyDeep.js
  function basePropertyDeep(path) {
    return function(object) {
      return baseGet_default(object, path);
    };
  }
  var basePropertyDeep_default = basePropertyDeep;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/property.js
  function property(path) {
    return isKey_default(path) ? baseProperty_default(toKey_default(path)) : basePropertyDeep_default(path);
  }
  var property_default = property;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_baseIteratee.js
  function baseIteratee(value) {
    if (typeof value == "function") {
      return value;
    }
    if (value == null) {
      return identity_default;
    }
    if (typeof value == "object") {
      return isArray_default(value) ? baseMatchesProperty_default(value[0], value[1]) : baseMatches_default(value);
    }
    return property_default(value);
  }
  var baseIteratee_default = baseIteratee;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/_baseMap.js
  function baseMap(collection, iteratee) {
    var index = -1, result = isArrayLike_default(collection) ? Array(collection.length) : [];
    baseEach_default(collection, function(value, key, collection2) {
      result[++index] = iteratee(value, key, collection2);
    });
    return result;
  }
  var baseMap_default = baseMap;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/map.js
  function map(collection, iteratee) {
    var func = isArray_default(collection) ? arrayMap_default : baseMap_default;
    return func(collection, baseIteratee_default(iteratee, 3));
  }
  var map_default = map;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/block/BlockSwatches.js
  var BlockSwatches = function BlockSwatches2(_ref) {
    var colors2 = _ref.colors, onClick = _ref.onClick, onSwatchHover = _ref.onSwatchHover;
    var styles = (0, import_reactcss10.default)({
      "default": {
        swatches: {
          marginRight: "-10px"
        },
        swatch: {
          width: "22px",
          height: "22px",
          float: "left",
          marginRight: "10px",
          marginBottom: "10px",
          borderRadius: "4px"
        },
        clear: {
          clear: "both"
        }
      }
    });
    return Cn.createElement(
      "div",
      { style: styles.swatches },
      map_default(colors2, function(c5) {
        return Cn.createElement(Swatch_default, {
          key: c5,
          color: c5,
          style: styles.swatch,
          onClick,
          onHover: onSwatchHover,
          focusStyle: {
            boxShadow: "0 0 4px " + c5
          }
        });
      }),
      Cn.createElement("div", { style: styles.clear })
    );
  };
  var BlockSwatches_default = BlockSwatches;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/block/Block.js
  var Block = function Block2(_ref) {
    var onChange = _ref.onChange, onSwatchHover = _ref.onSwatchHover, hex = _ref.hex, colors2 = _ref.colors, width = _ref.width, triangle = _ref.triangle, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
    var transparent = hex === "transparent";
    var handleChange = function handleChange2(hexCode, e6) {
      isValidHex(hexCode) && onChange({
        hex: hexCode,
        source: "hex"
      }, e6);
    };
    var styles = (0, import_reactcss11.default)(merge_default({
      "default": {
        card: {
          width,
          background: "#fff",
          boxShadow: "0 1px rgba(0,0,0,.1)",
          borderRadius: "6px",
          position: "relative"
        },
        head: {
          height: "110px",
          background: hex,
          borderRadius: "6px 6px 0 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative"
        },
        body: {
          padding: "10px"
        },
        label: {
          fontSize: "18px",
          color: getContrastingColor(hex),
          position: "relative"
        },
        triangle: {
          width: "0px",
          height: "0px",
          borderStyle: "solid",
          borderWidth: "0 10px 10px 10px",
          borderColor: "transparent transparent " + hex + " transparent",
          position: "absolute",
          top: "-10px",
          left: "50%",
          marginLeft: "-10px"
        },
        input: {
          width: "100%",
          fontSize: "12px",
          color: "#666",
          border: "0px",
          outline: "none",
          height: "22px",
          boxShadow: "inset 0 0 0 1px #ddd",
          borderRadius: "4px",
          padding: "0 7px",
          boxSizing: "border-box"
        }
      },
      "hide-triangle": {
        triangle: {
          display: "none"
        }
      }
    }, passedStyles), { "hide-triangle": triangle === "hide" });
    return Cn.createElement(
      "div",
      { style: styles.card, className: "block-picker " + className },
      Cn.createElement("div", { style: styles.triangle }),
      Cn.createElement(
        "div",
        { style: styles.head },
        transparent && Cn.createElement(Checkboard_default, { borderRadius: "6px 6px 0 0" }),
        Cn.createElement(
          "div",
          { style: styles.label },
          hex
        )
      ),
      Cn.createElement(
        "div",
        { style: styles.body },
        Cn.createElement(BlockSwatches_default, { colors: colors2, onClick: handleChange, onSwatchHover }),
        Cn.createElement(EditableInput_default, {
          style: { input: styles.input },
          value: hex,
          onChange: handleChange
        })
      )
    );
  };
  Block.propTypes = {
    width: import_prop_types2.default.oneOfType([import_prop_types2.default.string, import_prop_types2.default.number]),
    colors: import_prop_types2.default.arrayOf(import_prop_types2.default.string),
    triangle: import_prop_types2.default.oneOf(["top", "hide"]),
    styles: import_prop_types2.default.object
  };
  Block.defaultProps = {
    width: 170,
    colors: ["#D9E3F0", "#F47373", "#697689", "#37D67A", "#2CCCE4", "#555555", "#dce775", "#ff8a65", "#ba68c8"],
    triangle: "top",
    styles: {}
  };
  var Block_default = ColorWrap_default(Block);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/circle/Circle.js
  init_react();
  var import_prop_types3 = __toESM(require_prop_types());
  var import_reactcss13 = __toESM(require_lib());

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/material-colors/dist/colors.es2015.js
  var red = { "50": "#ffebee", "100": "#ffcdd2", "200": "#ef9a9a", "300": "#e57373", "400": "#ef5350", "500": "#f44336", "600": "#e53935", "700": "#d32f2f", "800": "#c62828", "900": "#b71c1c", "a100": "#ff8a80", "a200": "#ff5252", "a400": "#ff1744", "a700": "#d50000" };
  var pink = { "50": "#fce4ec", "100": "#f8bbd0", "200": "#f48fb1", "300": "#f06292", "400": "#ec407a", "500": "#e91e63", "600": "#d81b60", "700": "#c2185b", "800": "#ad1457", "900": "#880e4f", "a100": "#ff80ab", "a200": "#ff4081", "a400": "#f50057", "a700": "#c51162" };
  var purple = { "50": "#f3e5f5", "100": "#e1bee7", "200": "#ce93d8", "300": "#ba68c8", "400": "#ab47bc", "500": "#9c27b0", "600": "#8e24aa", "700": "#7b1fa2", "800": "#6a1b9a", "900": "#4a148c", "a100": "#ea80fc", "a200": "#e040fb", "a400": "#d500f9", "a700": "#aa00ff" };
  var deepPurple = { "50": "#ede7f6", "100": "#d1c4e9", "200": "#b39ddb", "300": "#9575cd", "400": "#7e57c2", "500": "#673ab7", "600": "#5e35b1", "700": "#512da8", "800": "#4527a0", "900": "#311b92", "a100": "#b388ff", "a200": "#7c4dff", "a400": "#651fff", "a700": "#6200ea" };
  var indigo = { "50": "#e8eaf6", "100": "#c5cae9", "200": "#9fa8da", "300": "#7986cb", "400": "#5c6bc0", "500": "#3f51b5", "600": "#3949ab", "700": "#303f9f", "800": "#283593", "900": "#1a237e", "a100": "#8c9eff", "a200": "#536dfe", "a400": "#3d5afe", "a700": "#304ffe" };
  var blue = { "50": "#e3f2fd", "100": "#bbdefb", "200": "#90caf9", "300": "#64b5f6", "400": "#42a5f5", "500": "#2196f3", "600": "#1e88e5", "700": "#1976d2", "800": "#1565c0", "900": "#0d47a1", "a100": "#82b1ff", "a200": "#448aff", "a400": "#2979ff", "a700": "#2962ff" };
  var lightBlue = { "50": "#e1f5fe", "100": "#b3e5fc", "200": "#81d4fa", "300": "#4fc3f7", "400": "#29b6f6", "500": "#03a9f4", "600": "#039be5", "700": "#0288d1", "800": "#0277bd", "900": "#01579b", "a100": "#80d8ff", "a200": "#40c4ff", "a400": "#00b0ff", "a700": "#0091ea" };
  var cyan = { "50": "#e0f7fa", "100": "#b2ebf2", "200": "#80deea", "300": "#4dd0e1", "400": "#26c6da", "500": "#00bcd4", "600": "#00acc1", "700": "#0097a7", "800": "#00838f", "900": "#006064", "a100": "#84ffff", "a200": "#18ffff", "a400": "#00e5ff", "a700": "#00b8d4" };
  var teal = { "50": "#e0f2f1", "100": "#b2dfdb", "200": "#80cbc4", "300": "#4db6ac", "400": "#26a69a", "500": "#009688", "600": "#00897b", "700": "#00796b", "800": "#00695c", "900": "#004d40", "a100": "#a7ffeb", "a200": "#64ffda", "a400": "#1de9b6", "a700": "#00bfa5" };
  var green = { "50": "#e8f5e9", "100": "#c8e6c9", "200": "#a5d6a7", "300": "#81c784", "400": "#66bb6a", "500": "#4caf50", "600": "#43a047", "700": "#388e3c", "800": "#2e7d32", "900": "#1b5e20", "a100": "#b9f6ca", "a200": "#69f0ae", "a400": "#00e676", "a700": "#00c853" };
  var lightGreen = { "50": "#f1f8e9", "100": "#dcedc8", "200": "#c5e1a5", "300": "#aed581", "400": "#9ccc65", "500": "#8bc34a", "600": "#7cb342", "700": "#689f38", "800": "#558b2f", "900": "#33691e", "a100": "#ccff90", "a200": "#b2ff59", "a400": "#76ff03", "a700": "#64dd17" };
  var lime = { "50": "#f9fbe7", "100": "#f0f4c3", "200": "#e6ee9c", "300": "#dce775", "400": "#d4e157", "500": "#cddc39", "600": "#c0ca33", "700": "#afb42b", "800": "#9e9d24", "900": "#827717", "a100": "#f4ff81", "a200": "#eeff41", "a400": "#c6ff00", "a700": "#aeea00" };
  var yellow = { "50": "#fffde7", "100": "#fff9c4", "200": "#fff59d", "300": "#fff176", "400": "#ffee58", "500": "#ffeb3b", "600": "#fdd835", "700": "#fbc02d", "800": "#f9a825", "900": "#f57f17", "a100": "#ffff8d", "a200": "#ffff00", "a400": "#ffea00", "a700": "#ffd600" };
  var amber = { "50": "#fff8e1", "100": "#ffecb3", "200": "#ffe082", "300": "#ffd54f", "400": "#ffca28", "500": "#ffc107", "600": "#ffb300", "700": "#ffa000", "800": "#ff8f00", "900": "#ff6f00", "a100": "#ffe57f", "a200": "#ffd740", "a400": "#ffc400", "a700": "#ffab00" };
  var orange = { "50": "#fff3e0", "100": "#ffe0b2", "200": "#ffcc80", "300": "#ffb74d", "400": "#ffa726", "500": "#ff9800", "600": "#fb8c00", "700": "#f57c00", "800": "#ef6c00", "900": "#e65100", "a100": "#ffd180", "a200": "#ffab40", "a400": "#ff9100", "a700": "#ff6d00" };
  var deepOrange = { "50": "#fbe9e7", "100": "#ffccbc", "200": "#ffab91", "300": "#ff8a65", "400": "#ff7043", "500": "#ff5722", "600": "#f4511e", "700": "#e64a19", "800": "#d84315", "900": "#bf360c", "a100": "#ff9e80", "a200": "#ff6e40", "a400": "#ff3d00", "a700": "#dd2c00" };
  var brown = { "50": "#efebe9", "100": "#d7ccc8", "200": "#bcaaa4", "300": "#a1887f", "400": "#8d6e63", "500": "#795548", "600": "#6d4c41", "700": "#5d4037", "800": "#4e342e", "900": "#3e2723" };
  var blueGrey = { "50": "#eceff1", "100": "#cfd8dc", "200": "#b0bec5", "300": "#90a4ae", "400": "#78909c", "500": "#607d8b", "600": "#546e7a", "700": "#455a64", "800": "#37474f", "900": "#263238" };

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/circle/CircleSwatch.js
  init_react();
  var import_reactcss12 = __toESM(require_lib());
  var CircleSwatch = function CircleSwatch2(_ref) {
    var color = _ref.color, onClick = _ref.onClick, onSwatchHover = _ref.onSwatchHover, hover = _ref.hover, active = _ref.active, circleSize = _ref.circleSize, circleSpacing = _ref.circleSpacing;
    var styles = (0, import_reactcss12.default)({
      "default": {
        swatch: {
          width: circleSize,
          height: circleSize,
          marginRight: circleSpacing,
          marginBottom: circleSpacing,
          transform: "scale(1)",
          transition: "100ms transform ease"
        },
        Swatch: {
          borderRadius: "50%",
          background: "transparent",
          boxShadow: "inset 0 0 0 " + (circleSize / 2 + 1) + "px " + color,
          transition: "100ms box-shadow ease"
        }
      },
      "hover": {
        swatch: {
          transform: "scale(1.2)"
        }
      },
      "active": {
        Swatch: {
          boxShadow: "inset 0 0 0 3px " + color
        }
      }
    }, { hover, active });
    return Cn.createElement(
      "div",
      { style: styles.swatch },
      Cn.createElement(Swatch_default, {
        style: styles.Swatch,
        color,
        onClick,
        onHover: onSwatchHover,
        focusStyle: { boxShadow: styles.Swatch.boxShadow + ", 0 0 5px " + color }
      })
    );
  };
  CircleSwatch.defaultProps = {
    circleSize: 28,
    circleSpacing: 14
  };
  var CircleSwatch_default = (0, import_reactcss12.handleHover)(CircleSwatch);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/circle/Circle.js
  var Circle = function Circle2(_ref) {
    var width = _ref.width, onChange = _ref.onChange, onSwatchHover = _ref.onSwatchHover, colors2 = _ref.colors, hex = _ref.hex, circleSize = _ref.circleSize, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, circleSpacing = _ref.circleSpacing, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
    var styles = (0, import_reactcss13.default)(merge_default({
      "default": {
        card: {
          width,
          display: "flex",
          flexWrap: "wrap",
          marginRight: -circleSpacing,
          marginBottom: -circleSpacing
        }
      }
    }, passedStyles));
    var handleChange = function handleChange2(hexCode, e6) {
      return onChange({ hex: hexCode, source: "hex" }, e6);
    };
    return Cn.createElement(
      "div",
      { style: styles.card, className: "circle-picker " + className },
      map_default(colors2, function(c5) {
        return Cn.createElement(CircleSwatch_default, {
          key: c5,
          color: c5,
          onClick: handleChange,
          onSwatchHover,
          active: hex === c5.toLowerCase(),
          circleSize,
          circleSpacing
        });
      })
    );
  };
  Circle.propTypes = {
    width: import_prop_types3.default.oneOfType([import_prop_types3.default.string, import_prop_types3.default.number]),
    circleSize: import_prop_types3.default.number,
    circleSpacing: import_prop_types3.default.number,
    styles: import_prop_types3.default.object
  };
  Circle.defaultProps = {
    width: 252,
    circleSize: 28,
    circleSpacing: 14,
    colors: [red["500"], pink["500"], purple["500"], deepPurple["500"], indigo["500"], blue["500"], lightBlue["500"], cyan["500"], teal["500"], green["500"], lightGreen["500"], lime["500"], yellow["500"], amber["500"], orange["500"], deepOrange["500"], brown["500"], blueGrey["500"]],
    styles: {}
  };
  var Circle_default = ColorWrap_default(Circle);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/chrome/Chrome.js
  init_react();
  var import_prop_types4 = __toESM(require_prop_types());
  var import_reactcss17 = __toESM(require_lib());

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/chrome/ChromeFields.js
  init_react();
  var import_reactcss14 = __toESM(require_lib());

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/lodash-es/isUndefined.js
  function isUndefined(value) {
    return value === void 0;
  }
  var isUndefined_default = isUndefined;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/chrome/ChromeFields.js
  var import_UnfoldMoreHorizontalIcon = __toESM(require_UnfoldMoreHorizontalIcon());
  var _createClass7 = function() {
    function defineProperties(target, props) {
      for (var i5 = 0; i5 < props.length; i5++) {
        var descriptor = props[i5];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  function _classCallCheck7(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _possibleConstructorReturn7(self2, call) {
    if (!self2) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self2;
  }
  function _inherits7(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
    if (superClass)
      Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var ChromeFields = function(_React$Component) {
    _inherits7(ChromeFields2, _React$Component);
    function ChromeFields2(props) {
      _classCallCheck7(this, ChromeFields2);
      var _this = _possibleConstructorReturn7(this, (ChromeFields2.__proto__ || Object.getPrototypeOf(ChromeFields2)).call(this));
      _this.toggleViews = function() {
        if (_this.state.view === "hex") {
          _this.setState({ view: "rgb" });
        } else if (_this.state.view === "rgb") {
          _this.setState({ view: "hsl" });
        } else if (_this.state.view === "hsl") {
          if (_this.props.hsl.a === 1) {
            _this.setState({ view: "hex" });
          } else {
            _this.setState({ view: "rgb" });
          }
        }
      };
      _this.handleChange = function(data, e6) {
        if (data.hex) {
          isValidHex(data.hex) && _this.props.onChange({
            hex: data.hex,
            source: "hex"
          }, e6);
        } else if (data.r || data.g || data.b) {
          _this.props.onChange({
            r: data.r || _this.props.rgb.r,
            g: data.g || _this.props.rgb.g,
            b: data.b || _this.props.rgb.b,
            source: "rgb"
          }, e6);
        } else if (data.a) {
          if (data.a < 0) {
            data.a = 0;
          } else if (data.a > 1) {
            data.a = 1;
          }
          _this.props.onChange({
            h: _this.props.hsl.h,
            s: _this.props.hsl.s,
            l: _this.props.hsl.l,
            a: Math.round(data.a * 100) / 100,
            source: "rgb"
          }, e6);
        } else if (data.h || data.s || data.l) {
          if (typeof data.s === "string" && data.s.includes("%")) {
            data.s = data.s.replace("%", "");
          }
          if (typeof data.l === "string" && data.l.includes("%")) {
            data.l = data.l.replace("%", "");
          }
          if (data.s == 1) {
            data.s = 0.01;
          } else if (data.l == 1) {
            data.l = 0.01;
          }
          _this.props.onChange({
            h: data.h || _this.props.hsl.h,
            s: Number(!isUndefined_default(data.s) ? data.s : _this.props.hsl.s),
            l: Number(!isUndefined_default(data.l) ? data.l : _this.props.hsl.l),
            source: "hsl"
          }, e6);
        }
      };
      _this.showHighlight = function(e6) {
        e6.currentTarget.style.background = "#eee";
      };
      _this.hideHighlight = function(e6) {
        e6.currentTarget.style.background = "transparent";
      };
      if (props.hsl.a !== 1 && props.view === "hex") {
        _this.state = {
          view: "rgb"
        };
      } else {
        _this.state = {
          view: props.view
        };
      }
      return _this;
    }
    _createClass7(ChromeFields2, [{
      key: "render",
      value: function render3() {
        var _this2 = this;
        var styles = (0, import_reactcss14.default)({
          "default": {
            wrap: {
              paddingTop: "16px",
              display: "flex"
            },
            fields: {
              flex: "1",
              display: "flex",
              marginLeft: "-6px"
            },
            field: {
              paddingLeft: "6px",
              width: "100%"
            },
            alpha: {
              paddingLeft: "6px",
              width: "100%"
            },
            toggle: {
              width: "32px",
              textAlign: "right",
              position: "relative"
            },
            icon: {
              marginRight: "-4px",
              marginTop: "12px",
              cursor: "pointer",
              position: "relative"
            },
            iconHighlight: {
              position: "absolute",
              width: "24px",
              height: "28px",
              background: "#eee",
              borderRadius: "4px",
              top: "10px",
              left: "12px",
              display: "none"
            },
            input: {
              fontSize: "11px",
              color: "#333",
              width: "100%",
              borderRadius: "2px",
              border: "none",
              boxShadow: "inset 0 0 0 1px #dadada",
              height: "21px",
              textAlign: "center"
            },
            label: {
              textTransform: "uppercase",
              fontSize: "11px",
              lineHeight: "11px",
              color: "#969696",
              textAlign: "center",
              display: "block",
              marginTop: "12px"
            },
            svg: {
              fill: "#333",
              width: "24px",
              height: "24px",
              border: "1px transparent solid",
              borderRadius: "5px"
            }
          },
          "disableAlpha": {
            alpha: {
              display: "none"
            }
          }
        }, this.props, this.state);
        var fields = void 0;
        if (this.state.view === "hex") {
          fields = Cn.createElement(
            "div",
            { style: styles.fields, className: "flexbox-fix" },
            Cn.createElement(
              "div",
              { style: styles.field },
              Cn.createElement(EditableInput_default, {
                style: { input: styles.input, label: styles.label },
                label: "hex",
                value: this.props.hex,
                onChange: this.handleChange
              })
            )
          );
        } else if (this.state.view === "rgb") {
          fields = Cn.createElement(
            "div",
            { style: styles.fields, className: "flexbox-fix" },
            Cn.createElement(
              "div",
              { style: styles.field },
              Cn.createElement(EditableInput_default, {
                style: { input: styles.input, label: styles.label },
                label: "r",
                value: this.props.rgb.r,
                onChange: this.handleChange
              })
            ),
            Cn.createElement(
              "div",
              { style: styles.field },
              Cn.createElement(EditableInput_default, {
                style: { input: styles.input, label: styles.label },
                label: "g",
                value: this.props.rgb.g,
                onChange: this.handleChange
              })
            ),
            Cn.createElement(
              "div",
              { style: styles.field },
              Cn.createElement(EditableInput_default, {
                style: { input: styles.input, label: styles.label },
                label: "b",
                value: this.props.rgb.b,
                onChange: this.handleChange
              })
            ),
            Cn.createElement(
              "div",
              { style: styles.alpha },
              Cn.createElement(EditableInput_default, {
                style: { input: styles.input, label: styles.label },
                label: "a",
                value: this.props.rgb.a,
                arrowOffset: 0.01,
                onChange: this.handleChange
              })
            )
          );
        } else if (this.state.view === "hsl") {
          fields = Cn.createElement(
            "div",
            { style: styles.fields, className: "flexbox-fix" },
            Cn.createElement(
              "div",
              { style: styles.field },
              Cn.createElement(EditableInput_default, {
                style: { input: styles.input, label: styles.label },
                label: "h",
                value: Math.round(this.props.hsl.h),
                onChange: this.handleChange
              })
            ),
            Cn.createElement(
              "div",
              { style: styles.field },
              Cn.createElement(EditableInput_default, {
                style: { input: styles.input, label: styles.label },
                label: "s",
                value: Math.round(this.props.hsl.s * 100) + "%",
                onChange: this.handleChange
              })
            ),
            Cn.createElement(
              "div",
              { style: styles.field },
              Cn.createElement(EditableInput_default, {
                style: { input: styles.input, label: styles.label },
                label: "l",
                value: Math.round(this.props.hsl.l * 100) + "%",
                onChange: this.handleChange
              })
            ),
            Cn.createElement(
              "div",
              { style: styles.alpha },
              Cn.createElement(EditableInput_default, {
                style: { input: styles.input, label: styles.label },
                label: "a",
                value: this.props.hsl.a,
                arrowOffset: 0.01,
                onChange: this.handleChange
              })
            )
          );
        }
        return Cn.createElement(
          "div",
          { style: styles.wrap, className: "flexbox-fix" },
          fields,
          Cn.createElement(
            "div",
            { style: styles.toggle },
            Cn.createElement(
              "div",
              { style: styles.icon, onClick: this.toggleViews, ref: function ref(icon) {
                return _this2.icon = icon;
              } },
              Cn.createElement(import_UnfoldMoreHorizontalIcon.default, {
                style: styles.svg,
                onMouseOver: this.showHighlight,
                onMouseEnter: this.showHighlight,
                onMouseOut: this.hideHighlight
              })
            )
          )
        );
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(nextProps, state) {
        if (nextProps.hsl.a !== 1 && state.view === "hex") {
          return { view: "rgb" };
        }
        return null;
      }
    }]);
    return ChromeFields2;
  }(Cn.Component);
  ChromeFields.defaultProps = {
    view: "hex"
  };
  var ChromeFields_default = ChromeFields;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/chrome/ChromePointer.js
  init_react();
  var import_reactcss15 = __toESM(require_lib());
  var ChromePointer = function ChromePointer2() {
    var styles = (0, import_reactcss15.default)({
      "default": {
        picker: {
          width: "12px",
          height: "12px",
          borderRadius: "6px",
          transform: "translate(-6px, -1px)",
          backgroundColor: "rgb(248, 248, 248)",
          boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
        }
      }
    });
    return Cn.createElement("div", { style: styles.picker });
  };
  var ChromePointer_default = ChromePointer;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/chrome/ChromePointerCircle.js
  init_react();
  var import_reactcss16 = __toESM(require_lib());
  var ChromePointerCircle = function ChromePointerCircle2() {
    var styles = (0, import_reactcss16.default)({
      "default": {
        picker: {
          width: "12px",
          height: "12px",
          borderRadius: "6px",
          boxShadow: "inset 0 0 0 1px #fff",
          transform: "translate(-6px, -6px)"
        }
      }
    });
    return Cn.createElement("div", { style: styles.picker });
  };
  var ChromePointerCircle_default = ChromePointerCircle;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/chrome/Chrome.js
  var Chrome = function Chrome2(_ref) {
    var width = _ref.width, onChange = _ref.onChange, disableAlpha = _ref.disableAlpha, rgb = _ref.rgb, hsl = _ref.hsl, hsv = _ref.hsv, hex = _ref.hex, renderers = _ref.renderers, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className, defaultView = _ref.defaultView;
    var styles = (0, import_reactcss17.default)(merge_default({
      "default": {
        picker: {
          width,
          background: "#fff",
          borderRadius: "2px",
          boxShadow: "0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3)",
          boxSizing: "initial",
          fontFamily: "Menlo"
        },
        saturation: {
          width: "100%",
          paddingBottom: "55%",
          position: "relative",
          borderRadius: "2px 2px 0 0",
          overflow: "hidden"
        },
        Saturation: {
          radius: "2px 2px 0 0"
        },
        body: {
          padding: "16px 16px 12px"
        },
        controls: {
          display: "flex"
        },
        color: {
          width: "32px"
        },
        swatch: {
          marginTop: "6px",
          width: "16px",
          height: "16px",
          borderRadius: "8px",
          position: "relative",
          overflow: "hidden"
        },
        active: {
          absolute: "0px 0px 0px 0px",
          borderRadius: "8px",
          boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)",
          background: "rgba(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ", " + rgb.a + ")",
          zIndex: "2"
        },
        toggles: {
          flex: "1"
        },
        hue: {
          height: "10px",
          position: "relative",
          marginBottom: "8px"
        },
        Hue: {
          radius: "2px"
        },
        alpha: {
          height: "10px",
          position: "relative"
        },
        Alpha: {
          radius: "2px"
        }
      },
      "disableAlpha": {
        color: {
          width: "22px"
        },
        alpha: {
          display: "none"
        },
        hue: {
          marginBottom: "0px"
        },
        swatch: {
          width: "10px",
          height: "10px",
          marginTop: "0px"
        }
      }
    }, passedStyles), { disableAlpha });
    return Cn.createElement(
      "div",
      { style: styles.picker, className: "chrome-picker " + className },
      Cn.createElement(
        "div",
        { style: styles.saturation },
        Cn.createElement(Saturation_default, {
          style: styles.Saturation,
          hsl,
          hsv,
          pointer: ChromePointerCircle_default,
          onChange
        })
      ),
      Cn.createElement(
        "div",
        { style: styles.body },
        Cn.createElement(
          "div",
          { style: styles.controls, className: "flexbox-fix" },
          Cn.createElement(
            "div",
            { style: styles.color },
            Cn.createElement(
              "div",
              { style: styles.swatch },
              Cn.createElement("div", { style: styles.active }),
              Cn.createElement(Checkboard_default, { renderers })
            )
          ),
          Cn.createElement(
            "div",
            { style: styles.toggles },
            Cn.createElement(
              "div",
              { style: styles.hue },
              Cn.createElement(Hue_default, {
                style: styles.Hue,
                hsl,
                pointer: ChromePointer_default,
                onChange
              })
            ),
            Cn.createElement(
              "div",
              { style: styles.alpha },
              Cn.createElement(Alpha_default, {
                style: styles.Alpha,
                rgb,
                hsl,
                pointer: ChromePointer_default,
                renderers,
                onChange
              })
            )
          )
        ),
        Cn.createElement(ChromeFields_default, {
          rgb,
          hsl,
          hex,
          view: defaultView,
          onChange,
          disableAlpha
        })
      )
    );
  };
  Chrome.propTypes = {
    width: import_prop_types4.default.oneOfType([import_prop_types4.default.string, import_prop_types4.default.number]),
    disableAlpha: import_prop_types4.default.bool,
    styles: import_prop_types4.default.object,
    defaultView: import_prop_types4.default.oneOf(["hex", "rgb", "hsl"])
  };
  Chrome.defaultProps = {
    width: 225,
    disableAlpha: false,
    styles: {}
  };
  var Chrome_default = ColorWrap_default(Chrome);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/compact/Compact.js
  init_react();
  var import_prop_types5 = __toESM(require_prop_types());
  var import_reactcss20 = __toESM(require_lib());

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/compact/CompactColor.js
  init_react();
  var import_reactcss18 = __toESM(require_lib());
  var CompactColor = function CompactColor2(_ref) {
    var color = _ref.color, _ref$onClick = _ref.onClick, onClick = _ref$onClick === void 0 ? function() {
    } : _ref$onClick, onSwatchHover = _ref.onSwatchHover, active = _ref.active;
    var styles = (0, import_reactcss18.default)({
      "default": {
        color: {
          background: color,
          width: "15px",
          height: "15px",
          float: "left",
          marginRight: "5px",
          marginBottom: "5px",
          position: "relative",
          cursor: "pointer"
        },
        dot: {
          absolute: "5px 5px 5px 5px",
          background: getContrastingColor(color),
          borderRadius: "50%",
          opacity: "0"
        }
      },
      "active": {
        dot: {
          opacity: "1"
        }
      },
      "color-#FFFFFF": {
        color: {
          boxShadow: "inset 0 0 0 1px #ddd"
        },
        dot: {
          background: "#000"
        }
      },
      "transparent": {
        dot: {
          background: "#000"
        }
      }
    }, { active, "color-#FFFFFF": color === "#FFFFFF", "transparent": color === "transparent" });
    return Cn.createElement(
      Swatch_default,
      {
        style: styles.color,
        color,
        onClick,
        onHover: onSwatchHover,
        focusStyle: { boxShadow: "0 0 4px " + color }
      },
      Cn.createElement("div", { style: styles.dot })
    );
  };
  var CompactColor_default = CompactColor;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/compact/CompactFields.js
  init_react();
  var import_reactcss19 = __toESM(require_lib());
  var CompactFields = function CompactFields2(_ref) {
    var hex = _ref.hex, rgb = _ref.rgb, onChange = _ref.onChange;
    var styles = (0, import_reactcss19.default)({
      "default": {
        fields: {
          display: "flex",
          paddingBottom: "6px",
          paddingRight: "5px",
          position: "relative"
        },
        active: {
          position: "absolute",
          top: "6px",
          left: "5px",
          height: "9px",
          width: "9px",
          background: hex
        },
        HEXwrap: {
          flex: "6",
          position: "relative"
        },
        HEXinput: {
          width: "80%",
          padding: "0px",
          paddingLeft: "20%",
          border: "none",
          outline: "none",
          background: "none",
          fontSize: "12px",
          color: "#333",
          height: "16px"
        },
        HEXlabel: {
          display: "none"
        },
        RGBwrap: {
          flex: "3",
          position: "relative"
        },
        RGBinput: {
          width: "70%",
          padding: "0px",
          paddingLeft: "30%",
          border: "none",
          outline: "none",
          background: "none",
          fontSize: "12px",
          color: "#333",
          height: "16px"
        },
        RGBlabel: {
          position: "absolute",
          top: "3px",
          left: "0px",
          lineHeight: "16px",
          textTransform: "uppercase",
          fontSize: "12px",
          color: "#999"
        }
      }
    });
    var handleChange = function handleChange2(data, e6) {
      if (data.r || data.g || data.b) {
        onChange({
          r: data.r || rgb.r,
          g: data.g || rgb.g,
          b: data.b || rgb.b,
          source: "rgb"
        }, e6);
      } else {
        onChange({
          hex: data.hex,
          source: "hex"
        }, e6);
      }
    };
    return Cn.createElement(
      "div",
      { style: styles.fields, className: "flexbox-fix" },
      Cn.createElement("div", { style: styles.active }),
      Cn.createElement(EditableInput_default, {
        style: { wrap: styles.HEXwrap, input: styles.HEXinput, label: styles.HEXlabel },
        label: "hex",
        value: hex,
        onChange: handleChange
      }),
      Cn.createElement(EditableInput_default, {
        style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
        label: "r",
        value: rgb.r,
        onChange: handleChange
      }),
      Cn.createElement(EditableInput_default, {
        style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
        label: "g",
        value: rgb.g,
        onChange: handleChange
      }),
      Cn.createElement(EditableInput_default, {
        style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
        label: "b",
        value: rgb.b,
        onChange: handleChange
      })
    );
  };
  var CompactFields_default = CompactFields;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/compact/Compact.js
  var Compact = function Compact2(_ref) {
    var onChange = _ref.onChange, onSwatchHover = _ref.onSwatchHover, colors2 = _ref.colors, hex = _ref.hex, rgb = _ref.rgb, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
    var styles = (0, import_reactcss20.default)(merge_default({
      "default": {
        Compact: {
          background: "#f6f6f6",
          radius: "4px"
        },
        compact: {
          paddingTop: "5px",
          paddingLeft: "5px",
          boxSizing: "initial",
          width: "240px"
        },
        clear: {
          clear: "both"
        }
      }
    }, passedStyles));
    var handleChange = function handleChange2(data, e6) {
      if (data.hex) {
        isValidHex(data.hex) && onChange({
          hex: data.hex,
          source: "hex"
        }, e6);
      } else {
        onChange(data, e6);
      }
    };
    return Cn.createElement(
      Raised_default,
      { style: styles.Compact, styles: passedStyles },
      Cn.createElement(
        "div",
        { style: styles.compact, className: "compact-picker " + className },
        Cn.createElement(
          "div",
          null,
          map_default(colors2, function(c5) {
            return Cn.createElement(CompactColor_default, {
              key: c5,
              color: c5,
              active: c5.toLowerCase() === hex,
              onClick: handleChange,
              onSwatchHover
            });
          }),
          Cn.createElement("div", { style: styles.clear })
        ),
        Cn.createElement(CompactFields_default, { hex, rgb, onChange: handleChange })
      )
    );
  };
  Compact.propTypes = {
    colors: import_prop_types5.default.arrayOf(import_prop_types5.default.string),
    styles: import_prop_types5.default.object
  };
  Compact.defaultProps = {
    colors: ["#4D4D4D", "#999999", "#FFFFFF", "#F44E3B", "#FE9200", "#FCDC00", "#DBDF00", "#A4DD00", "#68CCCA", "#73D8FF", "#AEA1FF", "#FDA1FF", "#333333", "#808080", "#cccccc", "#D33115", "#E27300", "#FCC400", "#B0BC00", "#68BC00", "#16A5A5", "#009CE0", "#7B64FF", "#FA28FF", "#000000", "#666666", "#B3B3B3", "#9F0500", "#C45100", "#FB9E00", "#808900", "#194D33", "#0C797D", "#0062B1", "#653294", "#AB149E"],
    styles: {}
  };
  var Compact_default = ColorWrap_default(Compact);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/github/Github.js
  init_react();
  var import_prop_types6 = __toESM(require_prop_types());
  var import_reactcss22 = __toESM(require_lib());

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/github/GithubSwatch.js
  init_react();
  var import_reactcss21 = __toESM(require_lib());
  var GithubSwatch = function GithubSwatch2(_ref) {
    var hover = _ref.hover, color = _ref.color, onClick = _ref.onClick, onSwatchHover = _ref.onSwatchHover;
    var hoverSwatch = {
      position: "relative",
      zIndex: "2",
      outline: "2px solid #fff",
      boxShadow: "0 0 5px 2px rgba(0,0,0,0.25)"
    };
    var styles = (0, import_reactcss21.default)({
      "default": {
        swatch: {
          width: "25px",
          height: "25px",
          fontSize: "0"
        }
      },
      "hover": {
        swatch: hoverSwatch
      }
    }, { hover });
    return Cn.createElement(
      "div",
      { style: styles.swatch },
      Cn.createElement(Swatch_default, {
        color,
        onClick,
        onHover: onSwatchHover,
        focusStyle: hoverSwatch
      })
    );
  };
  var GithubSwatch_default = (0, import_reactcss21.handleHover)(GithubSwatch);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/github/Github.js
  var Github = function Github2(_ref) {
    var width = _ref.width, colors2 = _ref.colors, onChange = _ref.onChange, onSwatchHover = _ref.onSwatchHover, triangle = _ref.triangle, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
    var styles = (0, import_reactcss22.default)(merge_default({
      "default": {
        card: {
          width,
          background: "#fff",
          border: "1px solid rgba(0,0,0,0.2)",
          boxShadow: "0 3px 12px rgba(0,0,0,0.15)",
          borderRadius: "4px",
          position: "relative",
          padding: "5px",
          display: "flex",
          flexWrap: "wrap"
        },
        triangle: {
          position: "absolute",
          border: "7px solid transparent",
          borderBottomColor: "#fff"
        },
        triangleShadow: {
          position: "absolute",
          border: "8px solid transparent",
          borderBottomColor: "rgba(0,0,0,0.15)"
        }
      },
      "hide-triangle": {
        triangle: {
          display: "none"
        },
        triangleShadow: {
          display: "none"
        }
      },
      "top-left-triangle": {
        triangle: {
          top: "-14px",
          left: "10px"
        },
        triangleShadow: {
          top: "-16px",
          left: "9px"
        }
      },
      "top-right-triangle": {
        triangle: {
          top: "-14px",
          right: "10px"
        },
        triangleShadow: {
          top: "-16px",
          right: "9px"
        }
      },
      "bottom-left-triangle": {
        triangle: {
          top: "35px",
          left: "10px",
          transform: "rotate(180deg)"
        },
        triangleShadow: {
          top: "37px",
          left: "9px",
          transform: "rotate(180deg)"
        }
      },
      "bottom-right-triangle": {
        triangle: {
          top: "35px",
          right: "10px",
          transform: "rotate(180deg)"
        },
        triangleShadow: {
          top: "37px",
          right: "9px",
          transform: "rotate(180deg)"
        }
      }
    }, passedStyles), {
      "hide-triangle": triangle === "hide",
      "top-left-triangle": triangle === "top-left",
      "top-right-triangle": triangle === "top-right",
      "bottom-left-triangle": triangle === "bottom-left",
      "bottom-right-triangle": triangle === "bottom-right"
    });
    var handleChange = function handleChange2(hex, e6) {
      return onChange({ hex, source: "hex" }, e6);
    };
    return Cn.createElement(
      "div",
      { style: styles.card, className: "github-picker " + className },
      Cn.createElement("div", { style: styles.triangleShadow }),
      Cn.createElement("div", { style: styles.triangle }),
      map_default(colors2, function(c5) {
        return Cn.createElement(GithubSwatch_default, {
          color: c5,
          key: c5,
          onClick: handleChange,
          onSwatchHover
        });
      })
    );
  };
  Github.propTypes = {
    width: import_prop_types6.default.oneOfType([import_prop_types6.default.string, import_prop_types6.default.number]),
    colors: import_prop_types6.default.arrayOf(import_prop_types6.default.string),
    triangle: import_prop_types6.default.oneOf(["hide", "top-left", "top-right", "bottom-left", "bottom-right"]),
    styles: import_prop_types6.default.object
  };
  Github.defaultProps = {
    width: 200,
    colors: ["#B80000", "#DB3E00", "#FCCB00", "#008B02", "#006B76", "#1273DE", "#004DCF", "#5300EB", "#EB9694", "#FAD0C3", "#FEF3BD", "#C1E1C5", "#BEDADC", "#C4DEF6", "#BED3F3", "#D4C4FB"],
    triangle: "top-left",
    styles: {}
  };
  var Github_default = ColorWrap_default(Github);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/hue/Hue.js
  init_react();
  var import_prop_types7 = __toESM(require_prop_types());
  var import_reactcss24 = __toESM(require_lib());

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/hue/HuePointer.js
  init_react();
  var import_reactcss23 = __toESM(require_lib());
  var SliderPointer = function SliderPointer2(_ref) {
    var direction = _ref.direction;
    var styles = (0, import_reactcss23.default)({
      "default": {
        picker: {
          width: "18px",
          height: "18px",
          borderRadius: "50%",
          transform: "translate(-9px, -1px)",
          backgroundColor: "rgb(248, 248, 248)",
          boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
        }
      },
      "vertical": {
        picker: {
          transform: "translate(-3px, -9px)"
        }
      }
    }, { vertical: direction === "vertical" });
    return Cn.createElement("div", { style: styles.picker });
  };
  var HuePointer_default = SliderPointer;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/hue/Hue.js
  var _extends7 = Object.assign || function(target) {
    for (var i5 = 1; i5 < arguments.length; i5++) {
      var source = arguments[i5];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  var HuePicker = function HuePicker2(_ref) {
    var width = _ref.width, height = _ref.height, onChange = _ref.onChange, hsl = _ref.hsl, direction = _ref.direction, pointer = _ref.pointer, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
    var styles = (0, import_reactcss24.default)(merge_default({
      "default": {
        picker: {
          position: "relative",
          width,
          height
        },
        hue: {
          radius: "2px"
        }
      }
    }, passedStyles));
    var handleChange = function handleChange2(data) {
      return onChange({ a: 1, h: data.h, l: 0.5, s: 1 });
    };
    return Cn.createElement(
      "div",
      { style: styles.picker, className: "hue-picker " + className },
      Cn.createElement(Hue_default, _extends7({}, styles.hue, {
        hsl,
        pointer,
        onChange: handleChange,
        direction
      }))
    );
  };
  HuePicker.propTypes = {
    styles: import_prop_types7.default.object
  };
  HuePicker.defaultProps = {
    width: "316px",
    height: "16px",
    direction: "horizontal",
    pointer: HuePointer_default,
    styles: {}
  };
  var Hue_default2 = ColorWrap_default(HuePicker);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/material/Material.js
  init_react();
  var import_reactcss25 = __toESM(require_lib());
  var Material = function Material2(_ref) {
    var onChange = _ref.onChange, hex = _ref.hex, rgb = _ref.rgb, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
    var styles = (0, import_reactcss25.default)(merge_default({
      "default": {
        material: {
          width: "98px",
          height: "98px",
          padding: "16px",
          fontFamily: "Roboto"
        },
        HEXwrap: {
          position: "relative"
        },
        HEXinput: {
          width: "100%",
          marginTop: "12px",
          fontSize: "15px",
          color: "#333",
          padding: "0px",
          border: "0px",
          borderBottom: "2px solid " + hex,
          outline: "none",
          height: "30px"
        },
        HEXlabel: {
          position: "absolute",
          top: "0px",
          left: "0px",
          fontSize: "11px",
          color: "#999999",
          textTransform: "capitalize"
        },
        Hex: {
          style: {}
        },
        RGBwrap: {
          position: "relative"
        },
        RGBinput: {
          width: "100%",
          marginTop: "12px",
          fontSize: "15px",
          color: "#333",
          padding: "0px",
          border: "0px",
          borderBottom: "1px solid #eee",
          outline: "none",
          height: "30px"
        },
        RGBlabel: {
          position: "absolute",
          top: "0px",
          left: "0px",
          fontSize: "11px",
          color: "#999999",
          textTransform: "capitalize"
        },
        split: {
          display: "flex",
          marginRight: "-10px",
          paddingTop: "11px"
        },
        third: {
          flex: "1",
          paddingRight: "10px"
        }
      }
    }, passedStyles));
    var handleChange = function handleChange2(data, e6) {
      if (data.hex) {
        isValidHex(data.hex) && onChange({
          hex: data.hex,
          source: "hex"
        }, e6);
      } else if (data.r || data.g || data.b) {
        onChange({
          r: data.r || rgb.r,
          g: data.g || rgb.g,
          b: data.b || rgb.b,
          source: "rgb"
        }, e6);
      }
    };
    return Cn.createElement(
      Raised_default,
      { styles: passedStyles },
      Cn.createElement(
        "div",
        { style: styles.material, className: "material-picker " + className },
        Cn.createElement(EditableInput_default, {
          style: { wrap: styles.HEXwrap, input: styles.HEXinput, label: styles.HEXlabel },
          label: "hex",
          value: hex,
          onChange: handleChange
        }),
        Cn.createElement(
          "div",
          { style: styles.split, className: "flexbox-fix" },
          Cn.createElement(
            "div",
            { style: styles.third },
            Cn.createElement(EditableInput_default, {
              style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
              label: "r",
              value: rgb.r,
              onChange: handleChange
            })
          ),
          Cn.createElement(
            "div",
            { style: styles.third },
            Cn.createElement(EditableInput_default, {
              style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
              label: "g",
              value: rgb.g,
              onChange: handleChange
            })
          ),
          Cn.createElement(
            "div",
            { style: styles.third },
            Cn.createElement(EditableInput_default, {
              style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
              label: "b",
              value: rgb.b,
              onChange: handleChange
            })
          )
        )
      )
    );
  };
  var Material_default = ColorWrap_default(Material);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/photoshop/Photoshop.js
  init_react();
  var import_prop_types8 = __toESM(require_prop_types());
  var import_reactcss31 = __toESM(require_lib());

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/photoshop/PhotoshopFields.js
  init_react();
  var import_reactcss26 = __toESM(require_lib());
  var PhotoshopPicker = function PhotoshopPicker2(_ref) {
    var onChange = _ref.onChange, rgb = _ref.rgb, hsv = _ref.hsv, hex = _ref.hex;
    var styles = (0, import_reactcss26.default)({
      "default": {
        fields: {
          paddingTop: "5px",
          paddingBottom: "9px",
          width: "80px",
          position: "relative"
        },
        divider: {
          height: "5px"
        },
        RGBwrap: {
          position: "relative"
        },
        RGBinput: {
          marginLeft: "40%",
          width: "40%",
          height: "18px",
          border: "1px solid #888888",
          boxShadow: "inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC",
          marginBottom: "5px",
          fontSize: "13px",
          paddingLeft: "3px",
          marginRight: "10px"
        },
        RGBlabel: {
          left: "0px",
          top: "0px",
          width: "34px",
          textTransform: "uppercase",
          fontSize: "13px",
          height: "18px",
          lineHeight: "22px",
          position: "absolute"
        },
        HEXwrap: {
          position: "relative"
        },
        HEXinput: {
          marginLeft: "20%",
          width: "80%",
          height: "18px",
          border: "1px solid #888888",
          boxShadow: "inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC",
          marginBottom: "6px",
          fontSize: "13px",
          paddingLeft: "3px"
        },
        HEXlabel: {
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "14px",
          textTransform: "uppercase",
          fontSize: "13px",
          height: "18px",
          lineHeight: "22px"
        },
        fieldSymbols: {
          position: "absolute",
          top: "5px",
          right: "-7px",
          fontSize: "13px"
        },
        symbol: {
          height: "20px",
          lineHeight: "22px",
          paddingBottom: "7px"
        }
      }
    });
    var handleChange = function handleChange2(data, e6) {
      if (data["#"]) {
        isValidHex(data["#"]) && onChange({
          hex: data["#"],
          source: "hex"
        }, e6);
      } else if (data.r || data.g || data.b) {
        onChange({
          r: data.r || rgb.r,
          g: data.g || rgb.g,
          b: data.b || rgb.b,
          source: "rgb"
        }, e6);
      } else if (data.h || data.s || data.v) {
        onChange({
          h: data.h || hsv.h,
          s: data.s || hsv.s,
          v: data.v || hsv.v,
          source: "hsv"
        }, e6);
      }
    };
    return Cn.createElement(
      "div",
      { style: styles.fields },
      Cn.createElement(EditableInput_default, {
        style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
        label: "h",
        value: Math.round(hsv.h),
        onChange: handleChange
      }),
      Cn.createElement(EditableInput_default, {
        style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
        label: "s",
        value: Math.round(hsv.s * 100),
        onChange: handleChange
      }),
      Cn.createElement(EditableInput_default, {
        style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
        label: "v",
        value: Math.round(hsv.v * 100),
        onChange: handleChange
      }),
      Cn.createElement("div", { style: styles.divider }),
      Cn.createElement(EditableInput_default, {
        style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
        label: "r",
        value: rgb.r,
        onChange: handleChange
      }),
      Cn.createElement(EditableInput_default, {
        style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
        label: "g",
        value: rgb.g,
        onChange: handleChange
      }),
      Cn.createElement(EditableInput_default, {
        style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
        label: "b",
        value: rgb.b,
        onChange: handleChange
      }),
      Cn.createElement("div", { style: styles.divider }),
      Cn.createElement(EditableInput_default, {
        style: { wrap: styles.HEXwrap, input: styles.HEXinput, label: styles.HEXlabel },
        label: "#",
        value: hex.replace("#", ""),
        onChange: handleChange
      }),
      Cn.createElement(
        "div",
        { style: styles.fieldSymbols },
        Cn.createElement(
          "div",
          { style: styles.symbol },
          "\xB0"
        ),
        Cn.createElement(
          "div",
          { style: styles.symbol },
          "%"
        ),
        Cn.createElement(
          "div",
          { style: styles.symbol },
          "%"
        )
      )
    );
  };
  var PhotoshopFields_default = PhotoshopPicker;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/photoshop/PhotoshopPointerCircle.js
  init_react();
  var import_reactcss27 = __toESM(require_lib());
  var PhotoshopPointerCircle = function PhotoshopPointerCircle2(_ref) {
    var hsl = _ref.hsl;
    var styles = (0, import_reactcss27.default)({
      "default": {
        picker: {
          width: "12px",
          height: "12px",
          borderRadius: "6px",
          boxShadow: "inset 0 0 0 1px #fff",
          transform: "translate(-6px, -6px)"
        }
      },
      "black-outline": {
        picker: {
          boxShadow: "inset 0 0 0 1px #000"
        }
      }
    }, { "black-outline": hsl.l > 0.5 });
    return Cn.createElement("div", { style: styles.picker });
  };
  var PhotoshopPointerCircle_default = PhotoshopPointerCircle;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/photoshop/PhotoshopPointer.js
  init_react();
  var import_reactcss28 = __toESM(require_lib());
  var PhotoshopPointerCircle3 = function PhotoshopPointerCircle4() {
    var styles = (0, import_reactcss28.default)({
      "default": {
        triangle: {
          width: 0,
          height: 0,
          borderStyle: "solid",
          borderWidth: "4px 0 4px 6px",
          borderColor: "transparent transparent transparent #fff",
          position: "absolute",
          top: "1px",
          left: "1px"
        },
        triangleBorder: {
          width: 0,
          height: 0,
          borderStyle: "solid",
          borderWidth: "5px 0 5px 8px",
          borderColor: "transparent transparent transparent #555"
        },
        left: {
          Extend: "triangleBorder",
          transform: "translate(-13px, -4px)"
        },
        leftInside: {
          Extend: "triangle",
          transform: "translate(-8px, -5px)"
        },
        right: {
          Extend: "triangleBorder",
          transform: "translate(20px, -14px) rotate(180deg)"
        },
        rightInside: {
          Extend: "triangle",
          transform: "translate(-8px, -5px)"
        }
      }
    });
    return Cn.createElement(
      "div",
      { style: styles.pointer },
      Cn.createElement(
        "div",
        { style: styles.left },
        Cn.createElement("div", { style: styles.leftInside })
      ),
      Cn.createElement(
        "div",
        { style: styles.right },
        Cn.createElement("div", { style: styles.rightInside })
      )
    );
  };
  var PhotoshopPointer_default = PhotoshopPointerCircle3;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/photoshop/PhotoshopButton.js
  init_react();
  var import_reactcss29 = __toESM(require_lib());
  var PhotoshopButton = function PhotoshopButton2(_ref) {
    var onClick = _ref.onClick, label = _ref.label, children = _ref.children, active = _ref.active;
    var styles = (0, import_reactcss29.default)({
      "default": {
        button: {
          backgroundImage: "linear-gradient(-180deg, #FFFFFF 0%, #E6E6E6 100%)",
          border: "1px solid #878787",
          borderRadius: "2px",
          height: "20px",
          boxShadow: "0 1px 0 0 #EAEAEA",
          fontSize: "14px",
          color: "#000",
          lineHeight: "20px",
          textAlign: "center",
          marginBottom: "10px",
          cursor: "pointer"
        }
      },
      "active": {
        button: {
          boxShadow: "0 0 0 1px #878787"
        }
      }
    }, { active });
    return Cn.createElement(
      "div",
      { style: styles.button, onClick },
      label || children
    );
  };
  var PhotoshopButton_default = PhotoshopButton;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/photoshop/PhotoshopPreviews.js
  init_react();
  var import_reactcss30 = __toESM(require_lib());
  var PhotoshopPreviews = function PhotoshopPreviews2(_ref) {
    var rgb = _ref.rgb, currentColor = _ref.currentColor;
    var styles = (0, import_reactcss30.default)({
      "default": {
        swatches: {
          border: "1px solid #B3B3B3",
          borderBottom: "1px solid #F0F0F0",
          marginBottom: "2px",
          marginTop: "1px"
        },
        new: {
          height: "34px",
          background: "rgb(" + rgb.r + "," + rgb.g + ", " + rgb.b + ")",
          boxShadow: "inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000"
        },
        current: {
          height: "34px",
          background: currentColor,
          boxShadow: "inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 -1px 0 #000"
        },
        label: {
          fontSize: "14px",
          color: "#000",
          textAlign: "center"
        }
      }
    });
    return Cn.createElement(
      "div",
      null,
      Cn.createElement(
        "div",
        { style: styles.label },
        "new"
      ),
      Cn.createElement(
        "div",
        { style: styles.swatches },
        Cn.createElement("div", { style: styles.new }),
        Cn.createElement("div", { style: styles.current })
      ),
      Cn.createElement(
        "div",
        { style: styles.label },
        "current"
      )
    );
  };
  var PhotoshopPreviews_default = PhotoshopPreviews;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/photoshop/Photoshop.js
  var _createClass8 = function() {
    function defineProperties(target, props) {
      for (var i5 = 0; i5 < props.length; i5++) {
        var descriptor = props[i5];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  function _classCallCheck8(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _possibleConstructorReturn8(self2, call) {
    if (!self2) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self2;
  }
  function _inherits8(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
    if (superClass)
      Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var Photoshop = function(_React$Component) {
    _inherits8(Photoshop2, _React$Component);
    function Photoshop2(props) {
      _classCallCheck8(this, Photoshop2);
      var _this = _possibleConstructorReturn8(this, (Photoshop2.__proto__ || Object.getPrototypeOf(Photoshop2)).call(this));
      _this.state = {
        currentColor: props.hex
      };
      return _this;
    }
    _createClass8(Photoshop2, [{
      key: "render",
      value: function render3() {
        var _props = this.props, _props$styles = _props.styles, passedStyles = _props$styles === void 0 ? {} : _props$styles, _props$className = _props.className, className = _props$className === void 0 ? "" : _props$className;
        var styles = (0, import_reactcss31.default)(merge_default({
          "default": {
            picker: {
              background: "#DCDCDC",
              borderRadius: "4px",
              boxShadow: "0 0 0 1px rgba(0,0,0,.25), 0 8px 16px rgba(0,0,0,.15)",
              boxSizing: "initial",
              width: "513px"
            },
            head: {
              backgroundImage: "linear-gradient(-180deg, #F0F0F0 0%, #D4D4D4 100%)",
              borderBottom: "1px solid #B1B1B1",
              boxShadow: "inset 0 1px 0 0 rgba(255,255,255,.2), inset 0 -1px 0 0 rgba(0,0,0,.02)",
              height: "23px",
              lineHeight: "24px",
              borderRadius: "4px 4px 0 0",
              fontSize: "13px",
              color: "#4D4D4D",
              textAlign: "center"
            },
            body: {
              padding: "15px 15px 0",
              display: "flex"
            },
            saturation: {
              width: "256px",
              height: "256px",
              position: "relative",
              border: "2px solid #B3B3B3",
              borderBottom: "2px solid #F0F0F0",
              overflow: "hidden"
            },
            hue: {
              position: "relative",
              height: "256px",
              width: "19px",
              marginLeft: "10px",
              border: "2px solid #B3B3B3",
              borderBottom: "2px solid #F0F0F0"
            },
            controls: {
              width: "180px",
              marginLeft: "10px"
            },
            top: {
              display: "flex"
            },
            previews: {
              width: "60px"
            },
            actions: {
              flex: "1",
              marginLeft: "20px"
            }
          }
        }, passedStyles));
        return Cn.createElement(
          "div",
          { style: styles.picker, className: "photoshop-picker " + className },
          Cn.createElement(
            "div",
            { style: styles.head },
            this.props.header
          ),
          Cn.createElement(
            "div",
            { style: styles.body, className: "flexbox-fix" },
            Cn.createElement(
              "div",
              { style: styles.saturation },
              Cn.createElement(Saturation_default, {
                hsl: this.props.hsl,
                hsv: this.props.hsv,
                pointer: PhotoshopPointerCircle_default,
                onChange: this.props.onChange
              })
            ),
            Cn.createElement(
              "div",
              { style: styles.hue },
              Cn.createElement(Hue_default, {
                direction: "vertical",
                hsl: this.props.hsl,
                pointer: PhotoshopPointer_default,
                onChange: this.props.onChange
              })
            ),
            Cn.createElement(
              "div",
              { style: styles.controls },
              Cn.createElement(
                "div",
                { style: styles.top, className: "flexbox-fix" },
                Cn.createElement(
                  "div",
                  { style: styles.previews },
                  Cn.createElement(PhotoshopPreviews_default, {
                    rgb: this.props.rgb,
                    currentColor: this.state.currentColor
                  })
                ),
                Cn.createElement(
                  "div",
                  { style: styles.actions },
                  Cn.createElement(PhotoshopButton_default, { label: "OK", onClick: this.props.onAccept, active: true }),
                  Cn.createElement(PhotoshopButton_default, { label: "Cancel", onClick: this.props.onCancel }),
                  Cn.createElement(PhotoshopFields_default, {
                    onChange: this.props.onChange,
                    rgb: this.props.rgb,
                    hsv: this.props.hsv,
                    hex: this.props.hex
                  })
                )
              )
            )
          )
        );
      }
    }]);
    return Photoshop2;
  }(Cn.Component);
  Photoshop.propTypes = {
    header: import_prop_types8.default.string,
    styles: import_prop_types8.default.object
  };
  Photoshop.defaultProps = {
    header: "Color Picker",
    styles: {}
  };
  var Photoshop_default = ColorWrap_default(Photoshop);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/sketch/Sketch.js
  init_react();
  var import_prop_types10 = __toESM(require_prop_types());
  var import_reactcss34 = __toESM(require_lib());

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/sketch/SketchFields.js
  init_react();
  var import_reactcss32 = __toESM(require_lib());
  var SketchFields = function SketchFields2(_ref) {
    var onChange = _ref.onChange, rgb = _ref.rgb, hsl = _ref.hsl, hex = _ref.hex, disableAlpha = _ref.disableAlpha;
    var styles = (0, import_reactcss32.default)({
      "default": {
        fields: {
          display: "flex",
          paddingTop: "4px"
        },
        single: {
          flex: "1",
          paddingLeft: "6px"
        },
        alpha: {
          flex: "1",
          paddingLeft: "6px"
        },
        double: {
          flex: "2"
        },
        input: {
          width: "80%",
          padding: "4px 10% 3px",
          border: "none",
          boxShadow: "inset 0 0 0 1px #ccc",
          fontSize: "11px"
        },
        label: {
          display: "block",
          textAlign: "center",
          fontSize: "11px",
          color: "#222",
          paddingTop: "3px",
          paddingBottom: "4px",
          textTransform: "capitalize"
        }
      },
      "disableAlpha": {
        alpha: {
          display: "none"
        }
      }
    }, { disableAlpha });
    var handleChange = function handleChange2(data, e6) {
      if (data.hex) {
        isValidHex(data.hex) && onChange({
          hex: data.hex,
          source: "hex"
        }, e6);
      } else if (data.r || data.g || data.b) {
        onChange({
          r: data.r || rgb.r,
          g: data.g || rgb.g,
          b: data.b || rgb.b,
          a: rgb.a,
          source: "rgb"
        }, e6);
      } else if (data.a) {
        if (data.a < 0) {
          data.a = 0;
        } else if (data.a > 100) {
          data.a = 100;
        }
        data.a /= 100;
        onChange({
          h: hsl.h,
          s: hsl.s,
          l: hsl.l,
          a: data.a,
          source: "rgb"
        }, e6);
      }
    };
    return Cn.createElement(
      "div",
      { style: styles.fields, className: "flexbox-fix" },
      Cn.createElement(
        "div",
        { style: styles.double },
        Cn.createElement(EditableInput_default, {
          style: { input: styles.input, label: styles.label },
          label: "hex",
          value: hex.replace("#", ""),
          onChange: handleChange
        })
      ),
      Cn.createElement(
        "div",
        { style: styles.single },
        Cn.createElement(EditableInput_default, {
          style: { input: styles.input, label: styles.label },
          label: "r",
          value: rgb.r,
          onChange: handleChange,
          dragLabel: "true",
          dragMax: "255"
        })
      ),
      Cn.createElement(
        "div",
        { style: styles.single },
        Cn.createElement(EditableInput_default, {
          style: { input: styles.input, label: styles.label },
          label: "g",
          value: rgb.g,
          onChange: handleChange,
          dragLabel: "true",
          dragMax: "255"
        })
      ),
      Cn.createElement(
        "div",
        { style: styles.single },
        Cn.createElement(EditableInput_default, {
          style: { input: styles.input, label: styles.label },
          label: "b",
          value: rgb.b,
          onChange: handleChange,
          dragLabel: "true",
          dragMax: "255"
        })
      ),
      Cn.createElement(
        "div",
        { style: styles.alpha },
        Cn.createElement(EditableInput_default, {
          style: { input: styles.input, label: styles.label },
          label: "a",
          value: Math.round(rgb.a * 100),
          onChange: handleChange,
          dragLabel: "true",
          dragMax: "100"
        })
      )
    );
  };
  var SketchFields_default = SketchFields;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/sketch/SketchPresetColors.js
  init_react();
  var import_prop_types9 = __toESM(require_prop_types());
  var import_reactcss33 = __toESM(require_lib());
  var _extends8 = Object.assign || function(target) {
    for (var i5 = 1; i5 < arguments.length; i5++) {
      var source = arguments[i5];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  var SketchPresetColors = function SketchPresetColors2(_ref) {
    var colors2 = _ref.colors, _ref$onClick = _ref.onClick, onClick = _ref$onClick === void 0 ? function() {
    } : _ref$onClick, onSwatchHover = _ref.onSwatchHover;
    var styles = (0, import_reactcss33.default)({
      "default": {
        colors: {
          margin: "0 -10px",
          padding: "10px 0 0 10px",
          borderTop: "1px solid #eee",
          display: "flex",
          flexWrap: "wrap",
          position: "relative"
        },
        swatchWrap: {
          width: "16px",
          height: "16px",
          margin: "0 10px 10px 0"
        },
        swatch: {
          borderRadius: "3px",
          boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15)"
        }
      },
      "no-presets": {
        colors: {
          display: "none"
        }
      }
    }, {
      "no-presets": !colors2 || !colors2.length
    });
    var handleClick = function handleClick2(hex, e6) {
      onClick({
        hex,
        source: "hex"
      }, e6);
    };
    return Cn.createElement(
      "div",
      { style: styles.colors, className: "flexbox-fix" },
      colors2.map(function(colorObjOrString) {
        var c5 = typeof colorObjOrString === "string" ? { color: colorObjOrString } : colorObjOrString;
        var key = "" + c5.color + (c5.title || "");
        return Cn.createElement(
          "div",
          { key, style: styles.swatchWrap },
          Cn.createElement(Swatch_default, _extends8({}, c5, {
            style: styles.swatch,
            onClick: handleClick,
            onHover: onSwatchHover,
            focusStyle: {
              boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px " + c5.color
            }
          }))
        );
      })
    );
  };
  SketchPresetColors.propTypes = {
    colors: import_prop_types9.default.arrayOf(import_prop_types9.default.oneOfType([import_prop_types9.default.string, import_prop_types9.default.shape({
      color: import_prop_types9.default.string,
      title: import_prop_types9.default.string
    })])).isRequired
  };
  var SketchPresetColors_default = SketchPresetColors;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/sketch/Sketch.js
  var _extends9 = Object.assign || function(target) {
    for (var i5 = 1; i5 < arguments.length; i5++) {
      var source = arguments[i5];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  var Sketch = function Sketch2(_ref) {
    var width = _ref.width, rgb = _ref.rgb, hex = _ref.hex, hsv = _ref.hsv, hsl = _ref.hsl, onChange = _ref.onChange, onSwatchHover = _ref.onSwatchHover, disableAlpha = _ref.disableAlpha, presetColors = _ref.presetColors, renderers = _ref.renderers, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
    var styles = (0, import_reactcss34.default)(merge_default({
      "default": _extends9({
        picker: {
          width,
          padding: "10px 10px 0",
          boxSizing: "initial",
          background: "#fff",
          borderRadius: "4px",
          boxShadow: "0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)"
        },
        saturation: {
          width: "100%",
          paddingBottom: "75%",
          position: "relative",
          overflow: "hidden"
        },
        Saturation: {
          radius: "3px",
          shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
        },
        controls: {
          display: "flex"
        },
        sliders: {
          padding: "4px 0",
          flex: "1"
        },
        color: {
          width: "24px",
          height: "24px",
          position: "relative",
          marginTop: "4px",
          marginLeft: "4px",
          borderRadius: "3px"
        },
        activeColor: {
          absolute: "0px 0px 0px 0px",
          borderRadius: "2px",
          background: "rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + "," + rgb.a + ")",
          boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
        },
        hue: {
          position: "relative",
          height: "10px",
          overflow: "hidden"
        },
        Hue: {
          radius: "2px",
          shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
        },
        alpha: {
          position: "relative",
          height: "10px",
          marginTop: "4px",
          overflow: "hidden"
        },
        Alpha: {
          radius: "2px",
          shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
        }
      }, passedStyles),
      "disableAlpha": {
        color: {
          height: "10px"
        },
        hue: {
          height: "10px"
        },
        alpha: {
          display: "none"
        }
      }
    }, passedStyles), { disableAlpha });
    return Cn.createElement(
      "div",
      { style: styles.picker, className: "sketch-picker " + className },
      Cn.createElement(
        "div",
        { style: styles.saturation },
        Cn.createElement(Saturation_default, {
          style: styles.Saturation,
          hsl,
          hsv,
          onChange
        })
      ),
      Cn.createElement(
        "div",
        { style: styles.controls, className: "flexbox-fix" },
        Cn.createElement(
          "div",
          { style: styles.sliders },
          Cn.createElement(
            "div",
            { style: styles.hue },
            Cn.createElement(Hue_default, {
              style: styles.Hue,
              hsl,
              onChange
            })
          ),
          Cn.createElement(
            "div",
            { style: styles.alpha },
            Cn.createElement(Alpha_default, {
              style: styles.Alpha,
              rgb,
              hsl,
              renderers,
              onChange
            })
          )
        ),
        Cn.createElement(
          "div",
          { style: styles.color },
          Cn.createElement(Checkboard_default, null),
          Cn.createElement("div", { style: styles.activeColor })
        )
      ),
      Cn.createElement(SketchFields_default, {
        rgb,
        hsl,
        hex,
        onChange,
        disableAlpha
      }),
      Cn.createElement(SketchPresetColors_default, {
        colors: presetColors,
        onClick: onChange,
        onSwatchHover
      })
    );
  };
  Sketch.propTypes = {
    disableAlpha: import_prop_types10.default.bool,
    width: import_prop_types10.default.oneOfType([import_prop_types10.default.string, import_prop_types10.default.number]),
    styles: import_prop_types10.default.object
  };
  Sketch.defaultProps = {
    disableAlpha: false,
    width: 200,
    styles: {},
    presetColors: ["#D0021B", "#F5A623", "#F8E71C", "#8B572A", "#7ED321", "#417505", "#BD10E0", "#9013FE", "#4A90E2", "#50E3C2", "#B8E986", "#000000", "#4A4A4A", "#9B9B9B", "#FFFFFF"]
  };
  var Sketch_default = ColorWrap_default(Sketch);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/slider/Slider.js
  init_react();
  var import_prop_types11 = __toESM(require_prop_types());
  var import_reactcss38 = __toESM(require_lib());

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/slider/SliderSwatches.js
  init_react();
  var import_reactcss36 = __toESM(require_lib());

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/slider/SliderSwatch.js
  init_react();
  var import_reactcss35 = __toESM(require_lib());
  var SliderSwatch = function SliderSwatch2(_ref) {
    var hsl = _ref.hsl, offset = _ref.offset, _ref$onClick = _ref.onClick, onClick = _ref$onClick === void 0 ? function() {
    } : _ref$onClick, active = _ref.active, first = _ref.first, last = _ref.last;
    var styles = (0, import_reactcss35.default)({
      "default": {
        swatch: {
          height: "12px",
          background: "hsl(" + hsl.h + ", 50%, " + offset * 100 + "%)",
          cursor: "pointer"
        }
      },
      "first": {
        swatch: {
          borderRadius: "2px 0 0 2px"
        }
      },
      "last": {
        swatch: {
          borderRadius: "0 2px 2px 0"
        }
      },
      "active": {
        swatch: {
          transform: "scaleY(1.8)",
          borderRadius: "3.6px/2px"
        }
      }
    }, { active, first, last });
    var handleClick = function handleClick2(e6) {
      return onClick({
        h: hsl.h,
        s: 0.5,
        l: offset,
        source: "hsl"
      }, e6);
    };
    return Cn.createElement("div", { style: styles.swatch, onClick: handleClick });
  };
  var SliderSwatch_default = SliderSwatch;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/slider/SliderSwatches.js
  var SliderSwatches = function SliderSwatches2(_ref) {
    var onClick = _ref.onClick, hsl = _ref.hsl;
    var styles = (0, import_reactcss36.default)({
      "default": {
        swatches: {
          marginTop: "20px"
        },
        swatch: {
          boxSizing: "border-box",
          width: "20%",
          paddingRight: "1px",
          float: "left"
        },
        clear: {
          clear: "both"
        }
      }
    });
    var epsilon = 0.1;
    return Cn.createElement(
      "div",
      { style: styles.swatches },
      Cn.createElement(
        "div",
        { style: styles.swatch },
        Cn.createElement(SliderSwatch_default, {
          hsl,
          offset: ".80",
          active: Math.abs(hsl.l - 0.8) < epsilon && Math.abs(hsl.s - 0.5) < epsilon,
          onClick,
          first: true
        })
      ),
      Cn.createElement(
        "div",
        { style: styles.swatch },
        Cn.createElement(SliderSwatch_default, {
          hsl,
          offset: ".65",
          active: Math.abs(hsl.l - 0.65) < epsilon && Math.abs(hsl.s - 0.5) < epsilon,
          onClick
        })
      ),
      Cn.createElement(
        "div",
        { style: styles.swatch },
        Cn.createElement(SliderSwatch_default, {
          hsl,
          offset: ".50",
          active: Math.abs(hsl.l - 0.5) < epsilon && Math.abs(hsl.s - 0.5) < epsilon,
          onClick
        })
      ),
      Cn.createElement(
        "div",
        { style: styles.swatch },
        Cn.createElement(SliderSwatch_default, {
          hsl,
          offset: ".35",
          active: Math.abs(hsl.l - 0.35) < epsilon && Math.abs(hsl.s - 0.5) < epsilon,
          onClick
        })
      ),
      Cn.createElement(
        "div",
        { style: styles.swatch },
        Cn.createElement(SliderSwatch_default, {
          hsl,
          offset: ".20",
          active: Math.abs(hsl.l - 0.2) < epsilon && Math.abs(hsl.s - 0.5) < epsilon,
          onClick,
          last: true
        })
      ),
      Cn.createElement("div", { style: styles.clear })
    );
  };
  var SliderSwatches_default = SliderSwatches;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/slider/SliderPointer.js
  init_react();
  var import_reactcss37 = __toESM(require_lib());
  var SliderPointer3 = function SliderPointer4() {
    var styles = (0, import_reactcss37.default)({
      "default": {
        picker: {
          width: "14px",
          height: "14px",
          borderRadius: "6px",
          transform: "translate(-7px, -1px)",
          backgroundColor: "rgb(248, 248, 248)",
          boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
        }
      }
    });
    return Cn.createElement("div", { style: styles.picker });
  };
  var SliderPointer_default = SliderPointer3;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/slider/Slider.js
  var Slider = function Slider2(_ref) {
    var hsl = _ref.hsl, onChange = _ref.onChange, pointer = _ref.pointer, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
    var styles = (0, import_reactcss38.default)(merge_default({
      "default": {
        hue: {
          height: "12px",
          position: "relative"
        },
        Hue: {
          radius: "2px"
        }
      }
    }, passedStyles));
    return Cn.createElement(
      "div",
      { style: styles.wrap || {}, className: "slider-picker " + className },
      Cn.createElement(
        "div",
        { style: styles.hue },
        Cn.createElement(Hue_default, {
          style: styles.Hue,
          hsl,
          pointer,
          onChange
        })
      ),
      Cn.createElement(
        "div",
        { style: styles.swatches },
        Cn.createElement(SliderSwatches_default, { hsl, onClick: onChange })
      )
    );
  };
  Slider.propTypes = {
    styles: import_prop_types11.default.object
  };
  Slider.defaultProps = {
    pointer: SliderPointer_default,
    styles: {}
  };
  var Slider_default = ColorWrap_default(Slider);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/swatches/Swatches.js
  init_react();
  var import_prop_types12 = __toESM(require_prop_types());
  var import_reactcss41 = __toESM(require_lib());

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/swatches/SwatchesGroup.js
  init_react();
  var import_reactcss40 = __toESM(require_lib());

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/swatches/SwatchesColor.js
  init_react();
  var import_reactcss39 = __toESM(require_lib());
  var import_CheckIcon = __toESM(require_CheckIcon());
  var SwatchesColor = function SwatchesColor2(_ref) {
    var color = _ref.color, _ref$onClick = _ref.onClick, onClick = _ref$onClick === void 0 ? function() {
    } : _ref$onClick, onSwatchHover = _ref.onSwatchHover, first = _ref.first, last = _ref.last, active = _ref.active;
    var styles = (0, import_reactcss39.default)({
      "default": {
        color: {
          width: "40px",
          height: "24px",
          cursor: "pointer",
          background: color,
          marginBottom: "1px"
        },
        check: {
          color: getContrastingColor(color),
          marginLeft: "8px",
          display: "none"
        }
      },
      "first": {
        color: {
          overflow: "hidden",
          borderRadius: "2px 2px 0 0"
        }
      },
      "last": {
        color: {
          overflow: "hidden",
          borderRadius: "0 0 2px 2px"
        }
      },
      "active": {
        check: {
          display: "block"
        }
      },
      "color-#FFFFFF": {
        color: {
          boxShadow: "inset 0 0 0 1px #ddd"
        },
        check: {
          color: "#333"
        }
      },
      "transparent": {
        check: {
          color: "#333"
        }
      }
    }, {
      first,
      last,
      active,
      "color-#FFFFFF": color === "#FFFFFF",
      "transparent": color === "transparent"
    });
    return Cn.createElement(
      Swatch_default,
      {
        color,
        style: styles.color,
        onClick,
        onHover: onSwatchHover,
        focusStyle: { boxShadow: "0 0 4px " + color }
      },
      Cn.createElement(
        "div",
        { style: styles.check },
        Cn.createElement(import_CheckIcon.default, null)
      )
    );
  };
  var SwatchesColor_default = SwatchesColor;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/swatches/SwatchesGroup.js
  var SwatchesGroup = function SwatchesGroup2(_ref) {
    var onClick = _ref.onClick, onSwatchHover = _ref.onSwatchHover, group = _ref.group, active = _ref.active;
    var styles = (0, import_reactcss40.default)({
      "default": {
        group: {
          paddingBottom: "10px",
          width: "40px",
          float: "left",
          marginRight: "10px"
        }
      }
    });
    return Cn.createElement(
      "div",
      { style: styles.group },
      map_default(group, function(color, i5) {
        return Cn.createElement(SwatchesColor_default, {
          key: color,
          color,
          active: color.toLowerCase() === active,
          first: i5 === 0,
          last: i5 === group.length - 1,
          onClick,
          onSwatchHover
        });
      })
    );
  };
  var SwatchesGroup_default = SwatchesGroup;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/swatches/Swatches.js
  var Swatches = function Swatches2(_ref) {
    var width = _ref.width, height = _ref.height, onChange = _ref.onChange, onSwatchHover = _ref.onSwatchHover, colors2 = _ref.colors, hex = _ref.hex, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
    var styles = (0, import_reactcss41.default)(merge_default({
      "default": {
        picker: {
          width,
          height
        },
        overflow: {
          height,
          overflowY: "scroll"
        },
        body: {
          padding: "16px 0 6px 16px"
        },
        clear: {
          clear: "both"
        }
      }
    }, passedStyles));
    var handleChange = function handleChange2(data, e6) {
      return onChange({ hex: data, source: "hex" }, e6);
    };
    return Cn.createElement(
      "div",
      { style: styles.picker, className: "swatches-picker " + className },
      Cn.createElement(
        Raised_default,
        null,
        Cn.createElement(
          "div",
          { style: styles.overflow },
          Cn.createElement(
            "div",
            { style: styles.body },
            map_default(colors2, function(group) {
              return Cn.createElement(SwatchesGroup_default, {
                key: group.toString(),
                group,
                active: hex,
                onClick: handleChange,
                onSwatchHover
              });
            }),
            Cn.createElement("div", { style: styles.clear })
          )
        )
      )
    );
  };
  Swatches.propTypes = {
    width: import_prop_types12.default.oneOfType([import_prop_types12.default.string, import_prop_types12.default.number]),
    height: import_prop_types12.default.oneOfType([import_prop_types12.default.string, import_prop_types12.default.number]),
    colors: import_prop_types12.default.arrayOf(import_prop_types12.default.arrayOf(import_prop_types12.default.string)),
    styles: import_prop_types12.default.object
    /* eslint-disable max-len */
  };
  Swatches.defaultProps = {
    width: 320,
    height: 240,
    colors: [[red["900"], red["700"], red["500"], red["300"], red["100"]], [pink["900"], pink["700"], pink["500"], pink["300"], pink["100"]], [purple["900"], purple["700"], purple["500"], purple["300"], purple["100"]], [deepPurple["900"], deepPurple["700"], deepPurple["500"], deepPurple["300"], deepPurple["100"]], [indigo["900"], indigo["700"], indigo["500"], indigo["300"], indigo["100"]], [blue["900"], blue["700"], blue["500"], blue["300"], blue["100"]], [lightBlue["900"], lightBlue["700"], lightBlue["500"], lightBlue["300"], lightBlue["100"]], [cyan["900"], cyan["700"], cyan["500"], cyan["300"], cyan["100"]], [teal["900"], teal["700"], teal["500"], teal["300"], teal["100"]], ["#194D33", green["700"], green["500"], green["300"], green["100"]], [lightGreen["900"], lightGreen["700"], lightGreen["500"], lightGreen["300"], lightGreen["100"]], [lime["900"], lime["700"], lime["500"], lime["300"], lime["100"]], [yellow["900"], yellow["700"], yellow["500"], yellow["300"], yellow["100"]], [amber["900"], amber["700"], amber["500"], amber["300"], amber["100"]], [orange["900"], orange["700"], orange["500"], orange["300"], orange["100"]], [deepOrange["900"], deepOrange["700"], deepOrange["500"], deepOrange["300"], deepOrange["100"]], [brown["900"], brown["700"], brown["500"], brown["300"], brown["100"]], [blueGrey["900"], blueGrey["700"], blueGrey["500"], blueGrey["300"], blueGrey["100"]], ["#000000", "#525252", "#969696", "#D9D9D9", "#FFFFFF"]],
    styles: {}
  };
  var Swatches_default = ColorWrap_default(Swatches);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/twitter/Twitter.js
  init_react();
  var import_prop_types13 = __toESM(require_prop_types());
  var import_reactcss42 = __toESM(require_lib());
  var Twitter = function Twitter2(_ref) {
    var onChange = _ref.onChange, onSwatchHover = _ref.onSwatchHover, hex = _ref.hex, colors2 = _ref.colors, width = _ref.width, triangle = _ref.triangle, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
    var styles = (0, import_reactcss42.default)(merge_default({
      "default": {
        card: {
          width,
          background: "#fff",
          border: "0 solid rgba(0,0,0,0.25)",
          boxShadow: "0 1px 4px rgba(0,0,0,0.25)",
          borderRadius: "4px",
          position: "relative"
        },
        body: {
          padding: "15px 9px 9px 15px"
        },
        label: {
          fontSize: "18px",
          color: "#fff"
        },
        triangle: {
          width: "0px",
          height: "0px",
          borderStyle: "solid",
          borderWidth: "0 9px 10px 9px",
          borderColor: "transparent transparent #fff transparent",
          position: "absolute"
        },
        triangleShadow: {
          width: "0px",
          height: "0px",
          borderStyle: "solid",
          borderWidth: "0 9px 10px 9px",
          borderColor: "transparent transparent rgba(0,0,0,.1) transparent",
          position: "absolute"
        },
        hash: {
          background: "#F0F0F0",
          height: "30px",
          width: "30px",
          borderRadius: "4px 0 0 4px",
          float: "left",
          color: "#98A1A4",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        input: {
          width: "100px",
          fontSize: "14px",
          color: "#666",
          border: "0px",
          outline: "none",
          height: "28px",
          boxShadow: "inset 0 0 0 1px #F0F0F0",
          boxSizing: "content-box",
          borderRadius: "0 4px 4px 0",
          float: "left",
          paddingLeft: "8px"
        },
        swatch: {
          width: "30px",
          height: "30px",
          float: "left",
          borderRadius: "4px",
          margin: "0 6px 6px 0"
        },
        clear: {
          clear: "both"
        }
      },
      "hide-triangle": {
        triangle: {
          display: "none"
        },
        triangleShadow: {
          display: "none"
        }
      },
      "top-left-triangle": {
        triangle: {
          top: "-10px",
          left: "12px"
        },
        triangleShadow: {
          top: "-11px",
          left: "12px"
        }
      },
      "top-right-triangle": {
        triangle: {
          top: "-10px",
          right: "12px"
        },
        triangleShadow: {
          top: "-11px",
          right: "12px"
        }
      }
    }, passedStyles), {
      "hide-triangle": triangle === "hide",
      "top-left-triangle": triangle === "top-left",
      "top-right-triangle": triangle === "top-right"
    });
    var handleChange = function handleChange2(hexcode, e6) {
      isValidHex(hexcode) && onChange({
        hex: hexcode,
        source: "hex"
      }, e6);
    };
    return Cn.createElement(
      "div",
      { style: styles.card, className: "twitter-picker " + className },
      Cn.createElement("div", { style: styles.triangleShadow }),
      Cn.createElement("div", { style: styles.triangle }),
      Cn.createElement(
        "div",
        { style: styles.body },
        map_default(colors2, function(c5, i5) {
          return Cn.createElement(Swatch_default, {
            key: i5,
            color: c5,
            hex: c5,
            style: styles.swatch,
            onClick: handleChange,
            onHover: onSwatchHover,
            focusStyle: {
              boxShadow: "0 0 4px " + c5
            }
          });
        }),
        Cn.createElement(
          "div",
          { style: styles.hash },
          "#"
        ),
        Cn.createElement(EditableInput_default, {
          label: null,
          style: { input: styles.input },
          value: hex.replace("#", ""),
          onChange: handleChange
        }),
        Cn.createElement("div", { style: styles.clear })
      )
    );
  };
  Twitter.propTypes = {
    width: import_prop_types13.default.oneOfType([import_prop_types13.default.string, import_prop_types13.default.number]),
    triangle: import_prop_types13.default.oneOf(["hide", "top-left", "top-right"]),
    colors: import_prop_types13.default.arrayOf(import_prop_types13.default.string),
    styles: import_prop_types13.default.object
  };
  Twitter.defaultProps = {
    width: 276,
    colors: ["#FF6900", "#FCB900", "#7BDCB5", "#00D084", "#8ED1FC", "#0693E3", "#ABB8C3", "#EB144C", "#F78DA7", "#9900EF"],
    triangle: "top-left",
    styles: {}
  };
  var Twitter_default = ColorWrap_default(Twitter);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/google/Google.js
  init_react();
  var import_prop_types16 = __toESM(require_prop_types());
  var import_reactcss46 = __toESM(require_lib());

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/google/GooglePointerCircle.js
  init_react();
  var import_reactcss43 = __toESM(require_lib());
  var import_prop_types14 = __toESM(require_prop_types());
  var GooglePointerCircle = function GooglePointerCircle2(props) {
    var styles = (0, import_reactcss43.default)({
      "default": {
        picker: {
          width: "20px",
          height: "20px",
          borderRadius: "22px",
          border: "2px #fff solid",
          transform: "translate(-12px, -13px)",
          background: "hsl(" + Math.round(props.hsl.h) + ", " + Math.round(props.hsl.s * 100) + "%, " + Math.round(props.hsl.l * 100) + "%)"
        }
      }
    });
    return Cn.createElement("div", { style: styles.picker });
  };
  GooglePointerCircle.propTypes = {
    hsl: import_prop_types14.default.shape({
      h: import_prop_types14.default.number,
      s: import_prop_types14.default.number,
      l: import_prop_types14.default.number,
      a: import_prop_types14.default.number
    })
  };
  GooglePointerCircle.defaultProps = {
    hsl: { a: 1, h: 249.94, l: 0.2, s: 0.5 }
  };
  var GooglePointerCircle_default = GooglePointerCircle;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/google/GooglePointer.js
  init_react();
  var import_reactcss44 = __toESM(require_lib());
  var import_prop_types15 = __toESM(require_prop_types());
  var GooglePointer = function GooglePointer2(props) {
    var styles = (0, import_reactcss44.default)({
      "default": {
        picker: {
          width: "20px",
          height: "20px",
          borderRadius: "22px",
          transform: "translate(-10px, -7px)",
          background: "hsl(" + Math.round(props.hsl.h) + ", 100%, 50%)",
          border: "2px white solid"
        }
      }
    });
    return Cn.createElement("div", { style: styles.picker });
  };
  GooglePointer.propTypes = {
    hsl: import_prop_types15.default.shape({
      h: import_prop_types15.default.number,
      s: import_prop_types15.default.number,
      l: import_prop_types15.default.number,
      a: import_prop_types15.default.number
    })
  };
  GooglePointer.defaultProps = {
    hsl: { a: 1, h: 249.94, l: 0.2, s: 0.5 }
  };
  var GooglePointer_default = GooglePointer;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/google/GoogleFields.js
  init_react();
  var import_reactcss45 = __toESM(require_lib());
  var GoogleFields = function GoogleFields2(_ref) {
    var onChange = _ref.onChange, rgb = _ref.rgb, hsl = _ref.hsl, hex = _ref.hex, hsv = _ref.hsv;
    var handleChange = function handleChange2(data, e6) {
      if (data.hex) {
        isValidHex(data.hex) && onChange({
          hex: data.hex,
          source: "hex"
        }, e6);
      } else if (data.rgb) {
        var values = data.rgb.split(",");
        isvalidColorString(data.rgb, "rgb") && onChange({
          r: values[0],
          g: values[1],
          b: values[2],
          a: 1,
          source: "rgb"
        }, e6);
      } else if (data.hsv) {
        var _values = data.hsv.split(",");
        if (isvalidColorString(data.hsv, "hsv")) {
          _values[2] = _values[2].replace("%", "");
          _values[1] = _values[1].replace("%", "");
          _values[0] = _values[0].replace("\xB0", "");
          if (_values[1] == 1) {
            _values[1] = 0.01;
          } else if (_values[2] == 1) {
            _values[2] = 0.01;
          }
          onChange({
            h: Number(_values[0]),
            s: Number(_values[1]),
            v: Number(_values[2]),
            source: "hsv"
          }, e6);
        }
      } else if (data.hsl) {
        var _values2 = data.hsl.split(",");
        if (isvalidColorString(data.hsl, "hsl")) {
          _values2[2] = _values2[2].replace("%", "");
          _values2[1] = _values2[1].replace("%", "");
          _values2[0] = _values2[0].replace("\xB0", "");
          if (hsvValue[1] == 1) {
            hsvValue[1] = 0.01;
          } else if (hsvValue[2] == 1) {
            hsvValue[2] = 0.01;
          }
          onChange({
            h: Number(_values2[0]),
            s: Number(_values2[1]),
            v: Number(_values2[2]),
            source: "hsl"
          }, e6);
        }
      }
    };
    var styles = (0, import_reactcss45.default)({
      "default": {
        wrap: {
          display: "flex",
          height: "100px",
          marginTop: "4px"
        },
        fields: {
          width: "100%"
        },
        column: {
          paddingTop: "10px",
          display: "flex",
          justifyContent: "space-between"
        },
        double: {
          padding: "0px 4.4px",
          boxSizing: "border-box"
        },
        input: {
          width: "100%",
          height: "38px",
          boxSizing: "border-box",
          padding: "4px 10% 3px",
          textAlign: "center",
          border: "1px solid #dadce0",
          fontSize: "11px",
          textTransform: "lowercase",
          borderRadius: "5px",
          outline: "none",
          fontFamily: "Roboto,Arial,sans-serif"
        },
        input2: {
          height: "38px",
          width: "100%",
          border: "1px solid #dadce0",
          boxSizing: "border-box",
          fontSize: "11px",
          textTransform: "lowercase",
          borderRadius: "5px",
          outline: "none",
          paddingLeft: "10px",
          fontFamily: "Roboto,Arial,sans-serif"
        },
        label: {
          textAlign: "center",
          fontSize: "12px",
          background: "#fff",
          position: "absolute",
          textTransform: "uppercase",
          color: "#3c4043",
          width: "35px",
          top: "-6px",
          left: "0",
          right: "0",
          marginLeft: "auto",
          marginRight: "auto",
          fontFamily: "Roboto,Arial,sans-serif"
        },
        label2: {
          left: "10px",
          textAlign: "center",
          fontSize: "12px",
          background: "#fff",
          position: "absolute",
          textTransform: "uppercase",
          color: "#3c4043",
          width: "32px",
          top: "-6px",
          fontFamily: "Roboto,Arial,sans-serif"
        },
        single: {
          flexGrow: "1",
          margin: "0px 4.4px"
        }
      }
    });
    var rgbValue = rgb.r + ", " + rgb.g + ", " + rgb.b;
    var hslValue = Math.round(hsl.h) + "\xB0, " + Math.round(hsl.s * 100) + "%, " + Math.round(hsl.l * 100) + "%";
    var hsvValue = Math.round(hsv.h) + "\xB0, " + Math.round(hsv.s * 100) + "%, " + Math.round(hsv.v * 100) + "%";
    return Cn.createElement(
      "div",
      { style: styles.wrap, className: "flexbox-fix" },
      Cn.createElement(
        "div",
        { style: styles.fields },
        Cn.createElement(
          "div",
          { style: styles.double },
          Cn.createElement(EditableInput_default, {
            style: { input: styles.input, label: styles.label },
            label: "hex",
            value: hex,
            onChange: handleChange
          })
        ),
        Cn.createElement(
          "div",
          { style: styles.column },
          Cn.createElement(
            "div",
            { style: styles.single },
            Cn.createElement(EditableInput_default, {
              style: { input: styles.input2, label: styles.label2 },
              label: "rgb",
              value: rgbValue,
              onChange: handleChange
            })
          ),
          Cn.createElement(
            "div",
            { style: styles.single },
            Cn.createElement(EditableInput_default, {
              style: { input: styles.input2, label: styles.label2 },
              label: "hsv",
              value: hsvValue,
              onChange: handleChange
            })
          ),
          Cn.createElement(
            "div",
            { style: styles.single },
            Cn.createElement(EditableInput_default, {
              style: { input: styles.input2, label: styles.label2 },
              label: "hsl",
              value: hslValue,
              onChange: handleChange
            })
          )
        )
      )
    );
  };
  var GoogleFields_default = GoogleFields;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/react-color/es/components/google/Google.js
  var Google = function Google2(_ref) {
    var width = _ref.width, onChange = _ref.onChange, rgb = _ref.rgb, hsl = _ref.hsl, hsv = _ref.hsv, hex = _ref.hex, header = _ref.header, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
    var styles = (0, import_reactcss46.default)(merge_default({
      "default": {
        picker: {
          width,
          background: "#fff",
          border: "1px solid #dfe1e5",
          boxSizing: "initial",
          display: "flex",
          flexWrap: "wrap",
          borderRadius: "8px 8px 0px 0px"
        },
        head: {
          height: "57px",
          width: "100%",
          paddingTop: "16px",
          paddingBottom: "16px",
          paddingLeft: "16px",
          fontSize: "20px",
          boxSizing: "border-box",
          fontFamily: "Roboto-Regular,HelveticaNeue,Arial,sans-serif"
        },
        saturation: {
          width: "70%",
          padding: "0px",
          position: "relative",
          overflow: "hidden"
        },
        swatch: {
          width: "30%",
          height: "228px",
          padding: "0px",
          background: "rgba(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ", 1)",
          position: "relative",
          overflow: "hidden"
        },
        body: {
          margin: "auto",
          width: "95%"
        },
        controls: {
          display: "flex",
          boxSizing: "border-box",
          height: "52px",
          paddingTop: "22px"
        },
        color: {
          width: "32px"
        },
        hue: {
          height: "8px",
          position: "relative",
          margin: "0px 16px 0px 16px",
          width: "100%"
        },
        Hue: {
          radius: "2px"
        }
      }
    }, passedStyles));
    return Cn.createElement(
      "div",
      { style: styles.picker, className: "google-picker " + className },
      Cn.createElement(
        "div",
        { style: styles.head },
        header
      ),
      Cn.createElement("div", { style: styles.swatch }),
      Cn.createElement(
        "div",
        { style: styles.saturation },
        Cn.createElement(Saturation_default, {
          hsl,
          hsv,
          pointer: GooglePointerCircle_default,
          onChange
        })
      ),
      Cn.createElement(
        "div",
        { style: styles.body },
        Cn.createElement(
          "div",
          { style: styles.controls, className: "flexbox-fix" },
          Cn.createElement(
            "div",
            { style: styles.hue },
            Cn.createElement(Hue_default, {
              style: styles.Hue,
              hsl,
              radius: "4px",
              pointer: GooglePointer_default,
              onChange
            })
          )
        ),
        Cn.createElement(GoogleFields_default, {
          rgb,
          hsl,
          hex,
          hsv,
          onChange
        })
      )
    );
  };
  Google.propTypes = {
    width: import_prop_types16.default.oneOfType([import_prop_types16.default.string, import_prop_types16.default.number]),
    styles: import_prop_types16.default.object,
    header: import_prop_types16.default.string
  };
  Google.defaultProps = {
    width: 652,
    styles: {},
    header: "Color picker"
  };
  var Google_default = ColorWrap_default(Google);

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/preact/compat/client.mjs
  init_compat_module();
  function createRoot(container) {
    return {
      render(children) {
        G2(children, container);
      },
      unmount() {
        hn(container);
      }
    };
  }
  function hydrateRoot(container, children) {
    J(children, container);
    return createRoot(container);
  }
  var client_default = {
    createRoot,
    hydrateRoot
  };

  // src/OptionalShiny.ts
  var Shiny2 = window.Shiny;

  // src/make_value_change_emitter.ts
  var Data_Passing_Event_ID = "shiny-data-passing-event";
  function is_data_passing_payload(x5) {
    if (typeof x5 !== "object") {
      return false;
    }
    if (x5 === null) {
      return false;
    }
    const has_type_field = "type" in x5 && typeof x5.type === "string";
    const has_value_field = "value" in x5;
    if (!has_type_field || !has_value_field)
      return false;
    switch (x5.type) {
      case "string":
        return typeof x5.value === "string";
      case "number":
        return typeof x5.value === "number";
      default:
        return true;
    }
  }
  function make_data_passing_payload(id, msg) {
    return { ...msg, id };
  }
  function get_data_passing_event_value(evt, id) {
    if (!(evt instanceof CustomEvent)) {
      return null;
    }
    if (evt.type !== Data_Passing_Event_ID) {
      return null;
    }
    const payload = evt.detail;
    if (typeof payload !== "object") {
      return null;
    }
    if (typeof payload.id !== "string" || payload.id !== id) {
      return null;
    }
    if (!is_data_passing_payload(payload)) {
      return null;
    }
    return payload;
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
  var dummy_data_passing_watcher = {
    unsubscribe: () => {
    }
  };
  function make_data_passing_watcher(watch_id, callback) {
    const on_event = (e6) => {
      const payload = get_data_passing_event_value(e6, watch_id);
      if (payload === null) {
        return;
      }
      const value = payload.value;
      if (value === null || value === void 0) {
        return;
      }
      callback(payload);
    };
    window.addEventListener(Data_Passing_Event_ID, on_event);
    return {
      unsubscribe: () => {
        window.removeEventListener(Data_Passing_Event_ID, on_event);
      }
    };
  }

  // src/color-picker.tsx
  function ColorPickerReact({
    currentColorCallback
  }) {
    const [currentColor, setCurrentColor] = Cn.useState("#fff");
    function handleChange(color) {
      setCurrentColor(color.hex);
      currentColorCallback(color.hex);
    }
    return /* @__PURE__ */ Cn.createElement(Sketch_default, { color: currentColor, onChange: handleChange });
  }
  var ColorPicker = class extends HTMLElement {
    constructor() {
      super();
      this.on_value_change = make_value_change_emitter(this, this.id);
      this.value = "#ffffff";
      this.onChangeCallback = (x5) => {
      };
    }
    currentColorCallback(x5) {
      this.value = x5;
      this.notifyChange();
    }
    notifyChange() {
      this.onChangeCallback(true);
      this.on_value_change({ type: "string", value: this.value });
    }
    connectedCallback() {
      const shadowRoot = this.attachShadow({ mode: "open" });
      const root2 = createRoot(shadowRoot);
      setTimeout(() => {
        this.notifyChange();
      }, 0);
      root2.render(
        /* @__PURE__ */ Cn.createElement(
          ColorPickerReact,
          {
            currentColorCallback: (x5) => this.currentColorCallback(x5)
          }
        )
      );
    }
  };
  customElements.define("color-picker", ColorPicker);
  (() => {
    if (!Shiny2) {
      return;
    }
    class ColorPickerInputBinding extends Shiny2.InputBinding {
      constructor() {
        super();
      }
      find(scope) {
        return $(scope).find("color-picker");
      }
      getValue(el) {
        return el.value;
      }
      subscribe(el, callback) {
        el.onChangeCallback = callback;
      }
      unsubscribe(el) {
        el.onChangeCallback = (x5) => {
        };
      }
    }
    Shiny2.inputBindings.register(
      new ColorPickerInputBinding(),
      "ColorPickerInputBinding"
    );
  })();

  // src/datagrid/styles.scss
  var styles_default = `
:root,
:host {
  --shiny-datagrid-font-size: 0.9em;
  --shiny-datagrid-padding: 0.3em 0.5em;
  --shiny-datagrid-grid-header-bgcolor: #eee;
  --shiny-datagrid-grid-header-gridlines-color: #ccc;
  --shiny-datagrid-grid-header-gridlines-style: solid;
  --shiny-datagrid-grid-gridlines-color: #ccc;
  --shiny-datagrid-grid-gridlines-style: solid;
  --shiny-datagrid-table-header-bottom-border: 1px solid black;
  --shiny-datagrid-grid-body-hover-bgcolor: var(
    --shiny-datagrid-grid-header-bgcolor
  );
  --shiny-datagrid-grid-body-selected-bgcolor: var(--bs-primary);
  --shiny-datagrid-grid-body-selected-color: var(--bs-light);
}

.shiny-data-grid svg.sort-arrow {
  display: inline-block;
  width: 0.85em;
  height: 0.85em;
  margin-bottom: 0.15em;
}

.shiny-data-grid > table {
  border-collapse: separate;
  border-spacing: 0;
}
.shiny-data-grid > table > thead {
  position: sticky;
  top: 0;
}
.shiny-data-grid > table > thead > th {
  white-space: nowrap;
}

.shiny-data-grid.shiny-data-grid-table > table > thead > tr:last-child > th {
  border-bottom: var(--shiny-datagrid-table-header-bottom-border);
}

/*
 *
 * # GRID STYLES
 *
 */
.shiny-data-grid.shiny-data-grid-grid > table {
  font-size: var(--shiny-datagrid-font-size);
}
.shiny-data-grid.shiny-data-grid-grid > table > thead > tr > th {
  background-color: var(--shiny-datagrid-grid-header-bgcolor);
  padding: var(--shiny-datagrid-padding);
}
.shiny-data-grid.shiny-data-grid-grid > table > tbody > tr:hover {
  --shiny-datagrid-grid-gridlines-color: inherit;
  background-color: var(--shiny-datagrid-grid-body-hover-bgcolor);
}
.shiny-data-grid.shiny-data-grid-grid > table > tbody > tr.selected {
  --shiny-datagrid-grid-gridlines-color: var(
    --shiny-datagrid-grid-body-selected-bgcolor
  );
  background-color: var(--shiny-datagrid-grid-body-selected-bgcolor);
  color: var(--shiny-datagrid-grid-body-selected-color);
}
.shiny-data-grid.shiny-data-grid-grid > table > tbody > tr > td {
  padding: var(--shiny-datagrid-padding);
}

/* ## Grid borders */
.shiny-data-grid.shiny-data-grid-grid > table {
  border-collapse: separate;
}
.shiny-data-grid.shiny-data-grid-grid > table > thead > tr:first-child > th {
  border-top-style: var(--shiny-datagrid-grid-gridlines-style);
}
.shiny-data-grid.shiny-data-grid-grid > table > thead > tr > th {
  border: 1px var(--shiny-datagrid-grid-gridlines-style) var(--shiny-datagrid-grid-header-gridlines-color);
  border-top-style: none;
  border-left-style: none;
}
.shiny-data-grid.shiny-data-grid-grid > table > thead > tr > th:first-child {
  border-left-style: var(--shiny-datagrid-grid-gridlines-style);
}
.shiny-data-grid.shiny-data-grid-grid > table > tbody > tr > td {
  border: 1px var(--shiny-datagrid-grid-gridlines-style) var(--shiny-datagrid-grid-gridlines-color);
  border-top-style: none;
  border-left-style: none;
}
.shiny-data-grid.shiny-data-grid-grid > table > tbody > tr > td:first-child {
  border-left-style: var(--shiny-datagrid-grid-gridlines-style);
}
.shiny-data-grid.shiny-data-grid-grid.scrolling {
  border: var(--shiny-datagrid-grid-gridlines-style) var(--shiny-datagrid-grid-header-gridlines-color);
}
.shiny-data-grid.shiny-data-grid-grid.scrolling > table > thead > tr:first-child > th {
  border-top-style: none;
}
.shiny-data-grid.shiny-data-grid-grid.scrolling > table > tbody > tr:last-child > td {
  border-bottom-style: none;
}
.shiny-data-grid.shiny-data-grid-grid.scrolling > table > thead > tr > th:first-child,
.shiny-data-grid.shiny-data-grid-grid.scrolling > table > tbody > tr > td:first-child {
  border-left-style: none;
}
.shiny-data-grid.shiny-data-grid-grid.scrolling > table > thead > tr > th:last-child,
.shiny-data-grid.shiny-data-grid-grid.scrolling > table > tbody > tr > td:last-child {
  border-right-style: none;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL1VzZXJzL3dpbnN0b24vRHJvcGJveC9Qcm9qZWN0cy9zaGlueWNvbXBvbmVudC9qcy9zcmMvZGF0YWdyaWQiLCJzb3VyY2VzIjpbInN0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7RUFFRTtFQUNBO0VBRUE7RUFDQTtFQUNBO0VBRUE7RUFDQTtFQUVBO0VBRUE7QUFBQTtBQUFBO0VBR0E7RUFDQTs7O0FBR0Y7RUFDRTtFQUNBO0VBQ0E7RUFDQTs7O0FBSUE7RUFDRTtFQUNBOztBQUVBO0VBQ0U7RUFDQTs7QUFDQTtFQUNFOzs7QUFRSjtFQUNFOzs7QUFLTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0U7RUFDRTs7QUFFQTtFQUNFO0VBQ0E7O0FBSUE7RUFDRTtFQUNBOztBQUdGO0VBQ0U7QUFBQTtBQUFBO0VBR0E7RUFDQTs7QUFHRjtFQUNFOzs7QUFNUjtBQUdFO0VBQ0U7O0FBSUk7RUFDRTs7QUFHRjtFQUNFO0VBRUE7RUFDQTs7QUFFQTtFQUNFOztBQU1SO0VBQ0U7RUFFQTtFQUNBOztBQUVBO0VBQ0U7O0FBS047RUFDRTs7QUFHQTtFQUNFOztBQUVGO0VBQ0U7O0FBRUY7QUFBQTtFQUVFOztBQUVGO0FBQUE7RUFFRSIsInNvdXJjZXNDb250ZW50IjpbIjpyb290LFxuOmhvc3Qge1xuICAtLXNoaW55LWRhdGFncmlkLWZvbnQtc2l6ZTogMC45ZW07XG4gIC0tc2hpbnktZGF0YWdyaWQtcGFkZGluZzogMC4zZW0gMC41ZW07XG5cbiAgLS1zaGlueS1kYXRhZ3JpZC1ncmlkLWhlYWRlci1iZ2NvbG9yOiAjZWVlO1xuICAtLXNoaW55LWRhdGFncmlkLWdyaWQtaGVhZGVyLWdyaWRsaW5lcy1jb2xvcjogI2NjYztcbiAgLS1zaGlueS1kYXRhZ3JpZC1ncmlkLWhlYWRlci1ncmlkbGluZXMtc3R5bGU6IHNvbGlkO1xuXG4gIC0tc2hpbnktZGF0YWdyaWQtZ3JpZC1ncmlkbGluZXMtY29sb3I6ICNjY2M7XG4gIC0tc2hpbnktZGF0YWdyaWQtZ3JpZC1ncmlkbGluZXMtc3R5bGU6IHNvbGlkO1xuXG4gIC0tc2hpbnktZGF0YWdyaWQtdGFibGUtaGVhZGVyLWJvdHRvbS1ib3JkZXI6IDFweCBzb2xpZCBibGFjaztcblxuICAtLXNoaW55LWRhdGFncmlkLWdyaWQtYm9keS1ob3Zlci1iZ2NvbG9yOiB2YXIoXG4gICAgLS1zaGlueS1kYXRhZ3JpZC1ncmlkLWhlYWRlci1iZ2NvbG9yXG4gICk7XG4gIC0tc2hpbnktZGF0YWdyaWQtZ3JpZC1ib2R5LXNlbGVjdGVkLWJnY29sb3I6IHZhcigtLWJzLXByaW1hcnkpO1xuICAtLXNoaW55LWRhdGFncmlkLWdyaWQtYm9keS1zZWxlY3RlZC1jb2xvcjogdmFyKC0tYnMtbGlnaHQpO1xufVxuXG4uc2hpbnktZGF0YS1ncmlkIHN2Zy5zb3J0LWFycm93IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMC44NWVtO1xuICBoZWlnaHQ6IDAuODVlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC4xNWVtO1xufVxuXG4uc2hpbnktZGF0YS1ncmlkIHtcbiAgPiB0YWJsZSB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgICBib3JkZXItc3BhY2luZzogMDtcblxuICAgID4gdGhlYWQge1xuICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgIHRvcDogMDtcbiAgICAgID4gdGgge1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uc2hpbnktZGF0YS1ncmlkLnNoaW55LWRhdGEtZ3JpZC10YWJsZSB7XG4gID4gdGFibGUge1xuICAgID4gdGhlYWQgPiB0cjpsYXN0LWNoaWxkID4gdGgge1xuICAgICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tc2hpbnktZGF0YWdyaWQtdGFibGUtaGVhZGVyLWJvdHRvbS1ib3JkZXIpO1xuICAgIH1cbiAgfVxufVxuXG4vKlxuICpcbiAqICMgR1JJRCBTVFlMRVNcbiAqXG4gKi9cblxuLnNoaW55LWRhdGEtZ3JpZC5zaGlueS1kYXRhLWdyaWQtZ3JpZCB7XG4gID4gdGFibGUge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tc2hpbnktZGF0YWdyaWQtZm9udC1zaXplKTtcblxuICAgID4gdGhlYWQgPiB0ciA+IHRoIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaW55LWRhdGFncmlkLWdyaWQtaGVhZGVyLWJnY29sb3IpO1xuICAgICAgcGFkZGluZzogdmFyKC0tc2hpbnktZGF0YWdyaWQtcGFkZGluZyk7XG4gICAgfVxuXG4gICAgPiB0Ym9keSA+IHRyIHtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICAtLXNoaW55LWRhdGFncmlkLWdyaWQtZ3JpZGxpbmVzLWNvbG9yOiBpbmhlcml0O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlueS1kYXRhZ3JpZC1ncmlkLWJvZHktaG92ZXItYmdjb2xvcik7XG4gICAgICB9XG5cbiAgICAgICYuc2VsZWN0ZWQge1xuICAgICAgICAtLXNoaW55LWRhdGFncmlkLWdyaWQtZ3JpZGxpbmVzLWNvbG9yOiB2YXIoXG4gICAgICAgICAgLS1zaGlueS1kYXRhZ3JpZC1ncmlkLWJvZHktc2VsZWN0ZWQtYmdjb2xvclxuICAgICAgICApO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlueS1kYXRhZ3JpZC1ncmlkLWJvZHktc2VsZWN0ZWQtYmdjb2xvcik7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zaGlueS1kYXRhZ3JpZC1ncmlkLWJvZHktc2VsZWN0ZWQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICA+IHRkIHtcbiAgICAgICAgcGFkZGluZzogdmFyKC0tc2hpbnktZGF0YWdyaWQtcGFkZGluZyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qICMjIEdyaWQgYm9yZGVycyAqL1xuXG4uc2hpbnktZGF0YS1ncmlkLnNoaW55LWRhdGEtZ3JpZC1ncmlkIHtcbiAgPiB0YWJsZSB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcblxuICAgID4gdGhlYWQge1xuICAgICAgPiB0ciB7XG4gICAgICAgICY6Zmlyc3QtY2hpbGQgPiB0aCB7XG4gICAgICAgICAgYm9yZGVyLXRvcC1zdHlsZTogdmFyKC0tc2hpbnktZGF0YWdyaWQtZ3JpZC1ncmlkbGluZXMtc3R5bGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgPiB0aCB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggdmFyKC0tc2hpbnktZGF0YWdyaWQtZ3JpZC1ncmlkbGluZXMtc3R5bGUpXG4gICAgICAgICAgICB2YXIoLS1zaGlueS1kYXRhZ3JpZC1ncmlkLWhlYWRlci1ncmlkbGluZXMtY29sb3IpO1xuICAgICAgICAgIGJvcmRlci10b3Atc3R5bGU6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLWxlZnQtc3R5bGU6IG5vbmU7XG5cbiAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0LXN0eWxlOiB2YXIoLS1zaGlueS1kYXRhZ3JpZC1ncmlkLWdyaWRsaW5lcy1zdHlsZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgPiB0Ym9keSA+IHRyID4gdGQge1xuICAgICAgYm9yZGVyOiAxcHggdmFyKC0tc2hpbnktZGF0YWdyaWQtZ3JpZC1ncmlkbGluZXMtc3R5bGUpXG4gICAgICAgIHZhcigtLXNoaW55LWRhdGFncmlkLWdyaWQtZ3JpZGxpbmVzLWNvbG9yKTtcbiAgICAgIGJvcmRlci10b3Atc3R5bGU6IG5vbmU7XG4gICAgICBib3JkZXItbGVmdC1zdHlsZTogbm9uZTtcblxuICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1sZWZ0LXN0eWxlOiB2YXIoLS1zaGlueS1kYXRhZ3JpZC1ncmlkLWdyaWRsaW5lcy1zdHlsZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi5zY3JvbGxpbmcge1xuICAgIGJvcmRlcjogdmFyKC0tc2hpbnktZGF0YWdyaWQtZ3JpZC1ncmlkbGluZXMtc3R5bGUpXG4gICAgICB2YXIoLS1zaGlueS1kYXRhZ3JpZC1ncmlkLWhlYWRlci1ncmlkbGluZXMtY29sb3IpO1xuXG4gICAgPiB0YWJsZSA+IHRoZWFkID4gdHI6Zmlyc3QtY2hpbGQgPiB0aCB7XG4gICAgICBib3JkZXItdG9wLXN0eWxlOiBub25lO1xuICAgIH1cbiAgICA+IHRhYmxlID4gdGJvZHkgPiB0cjpsYXN0LWNoaWxkID4gdGQge1xuICAgICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogbm9uZTtcbiAgICB9XG4gICAgPiB0YWJsZSA+IHRoZWFkID4gdHIgPiB0aDpmaXJzdC1jaGlsZCxcbiAgICA+IHRhYmxlID4gdGJvZHkgPiB0ciA+IHRkOmZpcnN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBub25lO1xuICAgIH1cbiAgICA+IHRhYmxlID4gdGhlYWQgPiB0ciA+IHRoOmxhc3QtY2hpbGQsXG4gICAgPiB0YWJsZSA+IHRib2R5ID4gdHIgPiB0ZDpsYXN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */`;

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@tanstack/react-table/build/lib/index.mjs
  init_react();

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@tanstack/table-core/build/lib/index.mjs
  function functionalUpdate(updater, input) {
    return typeof updater === "function" ? updater(input) : updater;
  }
  function makeStateUpdater(key, instance) {
    return (updater) => {
      instance.setState((old) => {
        return {
          ...old,
          [key]: functionalUpdate(updater, old[key])
        };
      });
    };
  }
  function isFunction2(d5) {
    return d5 instanceof Function;
  }
  function isNumberArray(d5) {
    return Array.isArray(d5) && d5.every((val) => typeof val === "number");
  }
  function flattenBy(arr, getChildren) {
    const flat = [];
    const recurse = (subArr) => {
      subArr.forEach((item) => {
        flat.push(item);
        const children = getChildren(item);
        if (children != null && children.length) {
          recurse(children);
        }
      });
    };
    recurse(arr);
    return flat;
  }
  function memo(getDeps, fn2, opts) {
    let deps = [];
    let result;
    return () => {
      let depTime;
      if (opts.key && opts.debug)
        depTime = Date.now();
      const newDeps = getDeps();
      const depsChanged = newDeps.length !== deps.length || newDeps.some((dep, index) => deps[index] !== dep);
      if (!depsChanged) {
        return result;
      }
      deps = newDeps;
      let resultTime;
      if (opts.key && opts.debug)
        resultTime = Date.now();
      result = fn2(...newDeps);
      opts == null ? void 0 : opts.onChange == null ? void 0 : opts.onChange(result);
      if (opts.key && opts.debug) {
        if (opts != null && opts.debug()) {
          const depEndTime = Math.round((Date.now() - depTime) * 100) / 100;
          const resultEndTime = Math.round((Date.now() - resultTime) * 100) / 100;
          const resultFpsPercentage = resultEndTime / 16;
          const pad = (str, num) => {
            str = String(str);
            while (str.length < num) {
              str = " " + str;
            }
            return str;
          };
          console.info(`%c\u23F1 ${pad(resultEndTime, 5)} /${pad(depEndTime, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * resultFpsPercentage, 120))}deg 100% 31%);`, opts == null ? void 0 : opts.key);
        }
      }
      return result;
    };
  }
  function createColumn(table, columnDef, depth, parent) {
    var _ref, _resolvedColumnDef$id;
    const defaultColumn2 = table._getDefaultColumnDef();
    const resolvedColumnDef = {
      ...defaultColumn2,
      ...columnDef
    };
    const accessorKey = resolvedColumnDef.accessorKey;
    let id = (_ref = (_resolvedColumnDef$id = resolvedColumnDef.id) != null ? _resolvedColumnDef$id : accessorKey ? accessorKey.replace(".", "_") : void 0) != null ? _ref : typeof resolvedColumnDef.header === "string" ? resolvedColumnDef.header : void 0;
    let accessorFn;
    if (resolvedColumnDef.accessorFn) {
      accessorFn = resolvedColumnDef.accessorFn;
    } else if (accessorKey) {
      if (accessorKey.includes(".")) {
        accessorFn = (originalRow) => {
          let result = originalRow;
          for (const key of accessorKey.split(".")) {
            var _result;
            result = (_result = result) == null ? void 0 : _result[key];
            if (result === void 0) {
              console.warn(`"${key}" in deeply nested key "${accessorKey}" returned undefined.`);
            }
          }
          return result;
        };
      } else {
        accessorFn = (originalRow) => originalRow[resolvedColumnDef.accessorKey];
      }
    }
    if (!id) {
      if (true) {
        throw new Error(resolvedColumnDef.accessorFn ? `Columns require an id when using an accessorFn` : `Columns require an id when using a non-string header`);
      }
      throw new Error();
    }
    let column = {
      id: `${String(id)}`,
      accessorFn,
      parent,
      depth,
      columnDef: resolvedColumnDef,
      columns: [],
      getFlatColumns: memo(() => [true], () => {
        var _column$columns;
        return [column, ...(_column$columns = column.columns) == null ? void 0 : _column$columns.flatMap((d5) => d5.getFlatColumns())];
      }, {
        key: false,
        debug: () => {
          var _table$options$debugA;
          return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugColumns;
        }
      }),
      getLeafColumns: memo(() => [table._getOrderColumnsFn()], (orderColumns2) => {
        var _column$columns2;
        if ((_column$columns2 = column.columns) != null && _column$columns2.length) {
          let leafColumns = column.columns.flatMap((column2) => column2.getLeafColumns());
          return orderColumns2(leafColumns);
        }
        return [column];
      }, {
        key: false,
        debug: () => {
          var _table$options$debugA2;
          return (_table$options$debugA2 = table.options.debugAll) != null ? _table$options$debugA2 : table.options.debugColumns;
        }
      })
    };
    column = table._features.reduce((obj, feature) => {
      return Object.assign(obj, feature.createColumn == null ? void 0 : feature.createColumn(column, table));
    }, column);
    return column;
  }
  function createHeader(table, column, options) {
    var _options$id;
    const id = (_options$id = options.id) != null ? _options$id : column.id;
    let header = {
      id,
      column,
      index: options.index,
      isPlaceholder: !!options.isPlaceholder,
      placeholderId: options.placeholderId,
      depth: options.depth,
      subHeaders: [],
      colSpan: 0,
      rowSpan: 0,
      headerGroup: null,
      getLeafHeaders: () => {
        const leafHeaders = [];
        const recurseHeader = (h5) => {
          if (h5.subHeaders && h5.subHeaders.length) {
            h5.subHeaders.map(recurseHeader);
          }
          leafHeaders.push(h5);
        };
        recurseHeader(header);
        return leafHeaders;
      },
      getContext: () => ({
        table,
        header,
        column
      })
    };
    table._features.forEach((feature) => {
      Object.assign(header, feature.createHeader == null ? void 0 : feature.createHeader(header, table));
    });
    return header;
  }
  var Headers = {
    createTable: (table) => {
      return {
        // Header Groups
        getHeaderGroups: memo(() => [table.getAllColumns(), table.getVisibleLeafColumns(), table.getState().columnPinning.left, table.getState().columnPinning.right], (allColumns, leafColumns, left, right) => {
          var _left$map$filter, _right$map$filter;
          const leftColumns = (_left$map$filter = left == null ? void 0 : left.map((columnId) => leafColumns.find((d5) => d5.id === columnId)).filter(Boolean)) != null ? _left$map$filter : [];
          const rightColumns = (_right$map$filter = right == null ? void 0 : right.map((columnId) => leafColumns.find((d5) => d5.id === columnId)).filter(Boolean)) != null ? _right$map$filter : [];
          const centerColumns = leafColumns.filter((column) => !(left != null && left.includes(column.id)) && !(right != null && right.includes(column.id)));
          const headerGroups = buildHeaderGroups(allColumns, [...leftColumns, ...centerColumns, ...rightColumns], table);
          return headerGroups;
        }, {
          key: "getHeaderGroups",
          debug: () => {
            var _table$options$debugA;
            return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugHeaders;
          }
        }),
        getCenterHeaderGroups: memo(() => [table.getAllColumns(), table.getVisibleLeafColumns(), table.getState().columnPinning.left, table.getState().columnPinning.right], (allColumns, leafColumns, left, right) => {
          leafColumns = leafColumns.filter((column) => !(left != null && left.includes(column.id)) && !(right != null && right.includes(column.id)));
          return buildHeaderGroups(allColumns, leafColumns, table, "center");
        }, {
          key: "getCenterHeaderGroups",
          debug: () => {
            var _table$options$debugA2;
            return (_table$options$debugA2 = table.options.debugAll) != null ? _table$options$debugA2 : table.options.debugHeaders;
          }
        }),
        getLeftHeaderGroups: memo(() => [table.getAllColumns(), table.getVisibleLeafColumns(), table.getState().columnPinning.left], (allColumns, leafColumns, left) => {
          var _left$map$filter2;
          const orderedLeafColumns = (_left$map$filter2 = left == null ? void 0 : left.map((columnId) => leafColumns.find((d5) => d5.id === columnId)).filter(Boolean)) != null ? _left$map$filter2 : [];
          return buildHeaderGroups(allColumns, orderedLeafColumns, table, "left");
        }, {
          key: "getLeftHeaderGroups",
          debug: () => {
            var _table$options$debugA3;
            return (_table$options$debugA3 = table.options.debugAll) != null ? _table$options$debugA3 : table.options.debugHeaders;
          }
        }),
        getRightHeaderGroups: memo(() => [table.getAllColumns(), table.getVisibleLeafColumns(), table.getState().columnPinning.right], (allColumns, leafColumns, right) => {
          var _right$map$filter2;
          const orderedLeafColumns = (_right$map$filter2 = right == null ? void 0 : right.map((columnId) => leafColumns.find((d5) => d5.id === columnId)).filter(Boolean)) != null ? _right$map$filter2 : [];
          return buildHeaderGroups(allColumns, orderedLeafColumns, table, "right");
        }, {
          key: "getRightHeaderGroups",
          debug: () => {
            var _table$options$debugA4;
            return (_table$options$debugA4 = table.options.debugAll) != null ? _table$options$debugA4 : table.options.debugHeaders;
          }
        }),
        // Footer Groups
        getFooterGroups: memo(() => [table.getHeaderGroups()], (headerGroups) => {
          return [...headerGroups].reverse();
        }, {
          key: "getFooterGroups",
          debug: () => {
            var _table$options$debugA5;
            return (_table$options$debugA5 = table.options.debugAll) != null ? _table$options$debugA5 : table.options.debugHeaders;
          }
        }),
        getLeftFooterGroups: memo(() => [table.getLeftHeaderGroups()], (headerGroups) => {
          return [...headerGroups].reverse();
        }, {
          key: "getLeftFooterGroups",
          debug: () => {
            var _table$options$debugA6;
            return (_table$options$debugA6 = table.options.debugAll) != null ? _table$options$debugA6 : table.options.debugHeaders;
          }
        }),
        getCenterFooterGroups: memo(() => [table.getCenterHeaderGroups()], (headerGroups) => {
          return [...headerGroups].reverse();
        }, {
          key: "getCenterFooterGroups",
          debug: () => {
            var _table$options$debugA7;
            return (_table$options$debugA7 = table.options.debugAll) != null ? _table$options$debugA7 : table.options.debugHeaders;
          }
        }),
        getRightFooterGroups: memo(() => [table.getRightHeaderGroups()], (headerGroups) => {
          return [...headerGroups].reverse();
        }, {
          key: "getRightFooterGroups",
          debug: () => {
            var _table$options$debugA8;
            return (_table$options$debugA8 = table.options.debugAll) != null ? _table$options$debugA8 : table.options.debugHeaders;
          }
        }),
        // Flat Headers
        getFlatHeaders: memo(() => [table.getHeaderGroups()], (headerGroups) => {
          return headerGroups.map((headerGroup) => {
            return headerGroup.headers;
          }).flat();
        }, {
          key: "getFlatHeaders",
          debug: () => {
            var _table$options$debugA9;
            return (_table$options$debugA9 = table.options.debugAll) != null ? _table$options$debugA9 : table.options.debugHeaders;
          }
        }),
        getLeftFlatHeaders: memo(() => [table.getLeftHeaderGroups()], (left) => {
          return left.map((headerGroup) => {
            return headerGroup.headers;
          }).flat();
        }, {
          key: "getLeftFlatHeaders",
          debug: () => {
            var _table$options$debugA10;
            return (_table$options$debugA10 = table.options.debugAll) != null ? _table$options$debugA10 : table.options.debugHeaders;
          }
        }),
        getCenterFlatHeaders: memo(() => [table.getCenterHeaderGroups()], (left) => {
          return left.map((headerGroup) => {
            return headerGroup.headers;
          }).flat();
        }, {
          key: "getCenterFlatHeaders",
          debug: () => {
            var _table$options$debugA11;
            return (_table$options$debugA11 = table.options.debugAll) != null ? _table$options$debugA11 : table.options.debugHeaders;
          }
        }),
        getRightFlatHeaders: memo(() => [table.getRightHeaderGroups()], (left) => {
          return left.map((headerGroup) => {
            return headerGroup.headers;
          }).flat();
        }, {
          key: "getRightFlatHeaders",
          debug: () => {
            var _table$options$debugA12;
            return (_table$options$debugA12 = table.options.debugAll) != null ? _table$options$debugA12 : table.options.debugHeaders;
          }
        }),
        // Leaf Headers
        getCenterLeafHeaders: memo(() => [table.getCenterFlatHeaders()], (flatHeaders) => {
          return flatHeaders.filter((header) => {
            var _header$subHeaders;
            return !((_header$subHeaders = header.subHeaders) != null && _header$subHeaders.length);
          });
        }, {
          key: "getCenterLeafHeaders",
          debug: () => {
            var _table$options$debugA13;
            return (_table$options$debugA13 = table.options.debugAll) != null ? _table$options$debugA13 : table.options.debugHeaders;
          }
        }),
        getLeftLeafHeaders: memo(() => [table.getLeftFlatHeaders()], (flatHeaders) => {
          return flatHeaders.filter((header) => {
            var _header$subHeaders2;
            return !((_header$subHeaders2 = header.subHeaders) != null && _header$subHeaders2.length);
          });
        }, {
          key: "getLeftLeafHeaders",
          debug: () => {
            var _table$options$debugA14;
            return (_table$options$debugA14 = table.options.debugAll) != null ? _table$options$debugA14 : table.options.debugHeaders;
          }
        }),
        getRightLeafHeaders: memo(() => [table.getRightFlatHeaders()], (flatHeaders) => {
          return flatHeaders.filter((header) => {
            var _header$subHeaders3;
            return !((_header$subHeaders3 = header.subHeaders) != null && _header$subHeaders3.length);
          });
        }, {
          key: "getRightLeafHeaders",
          debug: () => {
            var _table$options$debugA15;
            return (_table$options$debugA15 = table.options.debugAll) != null ? _table$options$debugA15 : table.options.debugHeaders;
          }
        }),
        getLeafHeaders: memo(() => [table.getLeftHeaderGroups(), table.getCenterHeaderGroups(), table.getRightHeaderGroups()], (left, center, right) => {
          var _left$0$headers, _left$, _center$0$headers, _center$, _right$0$headers, _right$;
          return [...(_left$0$headers = (_left$ = left[0]) == null ? void 0 : _left$.headers) != null ? _left$0$headers : [], ...(_center$0$headers = (_center$ = center[0]) == null ? void 0 : _center$.headers) != null ? _center$0$headers : [], ...(_right$0$headers = (_right$ = right[0]) == null ? void 0 : _right$.headers) != null ? _right$0$headers : []].map((header) => {
            return header.getLeafHeaders();
          }).flat();
        }, {
          key: "getLeafHeaders",
          debug: () => {
            var _table$options$debugA16;
            return (_table$options$debugA16 = table.options.debugAll) != null ? _table$options$debugA16 : table.options.debugHeaders;
          }
        })
      };
    }
  };
  function buildHeaderGroups(allColumns, columnsToGroup, table, headerFamily) {
    var _headerGroups$0$heade, _headerGroups$;
    let maxDepth = 0;
    const findMaxDepth = function(columns, depth) {
      if (depth === void 0) {
        depth = 1;
      }
      maxDepth = Math.max(maxDepth, depth);
      columns.filter((column) => column.getIsVisible()).forEach((column) => {
        var _column$columns;
        if ((_column$columns = column.columns) != null && _column$columns.length) {
          findMaxDepth(column.columns, depth + 1);
        }
      }, 0);
    };
    findMaxDepth(allColumns);
    let headerGroups = [];
    const createHeaderGroup = (headersToGroup, depth) => {
      const headerGroup = {
        depth,
        id: [headerFamily, `${depth}`].filter(Boolean).join("_"),
        headers: []
      };
      const pendingParentHeaders = [];
      headersToGroup.forEach((headerToGroup) => {
        const latestPendingParentHeader = [...pendingParentHeaders].reverse()[0];
        const isLeafHeader = headerToGroup.column.depth === headerGroup.depth;
        let column;
        let isPlaceholder = false;
        if (isLeafHeader && headerToGroup.column.parent) {
          column = headerToGroup.column.parent;
        } else {
          column = headerToGroup.column;
          isPlaceholder = true;
        }
        if (latestPendingParentHeader && (latestPendingParentHeader == null ? void 0 : latestPendingParentHeader.column) === column) {
          latestPendingParentHeader.subHeaders.push(headerToGroup);
        } else {
          const header = createHeader(table, column, {
            id: [headerFamily, depth, column.id, headerToGroup == null ? void 0 : headerToGroup.id].filter(Boolean).join("_"),
            isPlaceholder,
            placeholderId: isPlaceholder ? `${pendingParentHeaders.filter((d5) => d5.column === column).length}` : void 0,
            depth,
            index: pendingParentHeaders.length
          });
          header.subHeaders.push(headerToGroup);
          pendingParentHeaders.push(header);
        }
        headerGroup.headers.push(headerToGroup);
        headerToGroup.headerGroup = headerGroup;
      });
      headerGroups.push(headerGroup);
      if (depth > 0) {
        createHeaderGroup(pendingParentHeaders, depth - 1);
      }
    };
    const bottomHeaders = columnsToGroup.map((column, index) => createHeader(table, column, {
      depth: maxDepth,
      index
    }));
    createHeaderGroup(bottomHeaders, maxDepth - 1);
    headerGroups.reverse();
    const recurseHeadersForSpans = (headers) => {
      const filteredHeaders = headers.filter((header) => header.column.getIsVisible());
      return filteredHeaders.map((header) => {
        let colSpan = 0;
        let rowSpan = 0;
        let childRowSpans = [0];
        if (header.subHeaders && header.subHeaders.length) {
          childRowSpans = [];
          recurseHeadersForSpans(header.subHeaders).forEach((_ref) => {
            let {
              colSpan: childColSpan,
              rowSpan: childRowSpan
            } = _ref;
            colSpan += childColSpan;
            childRowSpans.push(childRowSpan);
          });
        } else {
          colSpan = 1;
        }
        const minChildRowSpan = Math.min(...childRowSpans);
        rowSpan = rowSpan + minChildRowSpan;
        header.colSpan = colSpan;
        header.rowSpan = rowSpan;
        return {
          colSpan,
          rowSpan
        };
      });
    };
    recurseHeadersForSpans((_headerGroups$0$heade = (_headerGroups$ = headerGroups[0]) == null ? void 0 : _headerGroups$.headers) != null ? _headerGroups$0$heade : []);
    return headerGroups;
  }
  var defaultColumnSizing = {
    size: 150,
    minSize: 20,
    maxSize: Number.MAX_SAFE_INTEGER
  };
  var getDefaultColumnSizingInfoState = () => ({
    startOffset: null,
    startSize: null,
    deltaOffset: null,
    deltaPercentage: null,
    isResizingColumn: false,
    columnSizingStart: []
  });
  var ColumnSizing = {
    getDefaultColumnDef: () => {
      return defaultColumnSizing;
    },
    getInitialState: (state) => {
      return {
        columnSizing: {},
        columnSizingInfo: getDefaultColumnSizingInfoState(),
        ...state
      };
    },
    getDefaultOptions: (table) => {
      return {
        columnResizeMode: "onEnd",
        onColumnSizingChange: makeStateUpdater("columnSizing", table),
        onColumnSizingInfoChange: makeStateUpdater("columnSizingInfo", table)
      };
    },
    createColumn: (column, table) => {
      return {
        getSize: () => {
          var _column$columnDef$min, _ref, _column$columnDef$max;
          const columnSize = table.getState().columnSizing[column.id];
          return Math.min(Math.max((_column$columnDef$min = column.columnDef.minSize) != null ? _column$columnDef$min : defaultColumnSizing.minSize, (_ref = columnSize != null ? columnSize : column.columnDef.size) != null ? _ref : defaultColumnSizing.size), (_column$columnDef$max = column.columnDef.maxSize) != null ? _column$columnDef$max : defaultColumnSizing.maxSize);
        },
        getStart: (position) => {
          const columns = !position ? table.getVisibleLeafColumns() : position === "left" ? table.getLeftVisibleLeafColumns() : table.getRightVisibleLeafColumns();
          const index = columns.findIndex((d5) => d5.id === column.id);
          if (index > 0) {
            const prevSiblingColumn = columns[index - 1];
            return prevSiblingColumn.getStart(position) + prevSiblingColumn.getSize();
          }
          return 0;
        },
        resetSize: () => {
          table.setColumnSizing((_ref2) => {
            let {
              [column.id]: _4,
              ...rest
            } = _ref2;
            return rest;
          });
        },
        getCanResize: () => {
          var _column$columnDef$ena, _table$options$enable;
          return ((_column$columnDef$ena = column.columnDef.enableResizing) != null ? _column$columnDef$ena : true) && ((_table$options$enable = table.options.enableColumnResizing) != null ? _table$options$enable : true);
        },
        getIsResizing: () => {
          return table.getState().columnSizingInfo.isResizingColumn === column.id;
        }
      };
    },
    createHeader: (header, table) => {
      return {
        getSize: () => {
          let sum2 = 0;
          const recurse = (header2) => {
            if (header2.subHeaders.length) {
              header2.subHeaders.forEach(recurse);
            } else {
              var _header$column$getSiz;
              sum2 += (_header$column$getSiz = header2.column.getSize()) != null ? _header$column$getSiz : 0;
            }
          };
          recurse(header);
          return sum2;
        },
        getStart: () => {
          if (header.index > 0) {
            const prevSiblingHeader = header.headerGroup.headers[header.index - 1];
            return prevSiblingHeader.getStart() + prevSiblingHeader.getSize();
          }
          return 0;
        },
        getResizeHandler: () => {
          const column = table.getColumn(header.column.id);
          const canResize = column == null ? void 0 : column.getCanResize();
          return (e6) => {
            if (!column || !canResize) {
              return;
            }
            e6.persist == null ? void 0 : e6.persist();
            if (isTouchStartEvent(e6)) {
              if (e6.touches && e6.touches.length > 1) {
                return;
              }
            }
            const startSize = header.getSize();
            const columnSizingStart = header ? header.getLeafHeaders().map((d5) => [d5.column.id, d5.column.getSize()]) : [[column.id, column.getSize()]];
            const clientX = isTouchStartEvent(e6) ? Math.round(e6.touches[0].clientX) : e6.clientX;
            const newColumnSizing = {};
            const updateOffset = (eventType, clientXPos) => {
              if (typeof clientXPos !== "number") {
                return;
              }
              table.setColumnSizingInfo((old) => {
                var _old$startOffset, _old$startSize;
                const deltaOffset = clientXPos - ((_old$startOffset = old == null ? void 0 : old.startOffset) != null ? _old$startOffset : 0);
                const deltaPercentage = Math.max(deltaOffset / ((_old$startSize = old == null ? void 0 : old.startSize) != null ? _old$startSize : 0), -0.999999);
                old.columnSizingStart.forEach((_ref3) => {
                  let [columnId, headerSize] = _ref3;
                  newColumnSizing[columnId] = Math.round(Math.max(headerSize + headerSize * deltaPercentage, 0) * 100) / 100;
                });
                return {
                  ...old,
                  deltaOffset,
                  deltaPercentage
                };
              });
              if (table.options.columnResizeMode === "onChange" || eventType === "end") {
                table.setColumnSizing((old) => ({
                  ...old,
                  ...newColumnSizing
                }));
              }
            };
            const onMove = (clientXPos) => updateOffset("move", clientXPos);
            const onEnd = (clientXPos) => {
              updateOffset("end", clientXPos);
              table.setColumnSizingInfo((old) => ({
                ...old,
                isResizingColumn: false,
                startOffset: null,
                startSize: null,
                deltaOffset: null,
                deltaPercentage: null,
                columnSizingStart: []
              }));
            };
            const mouseEvents = {
              moveHandler: (e7) => onMove(e7.clientX),
              upHandler: (e7) => {
                document.removeEventListener("mousemove", mouseEvents.moveHandler);
                document.removeEventListener("mouseup", mouseEvents.upHandler);
                onEnd(e7.clientX);
              }
            };
            const touchEvents = {
              moveHandler: (e7) => {
                if (e7.cancelable) {
                  e7.preventDefault();
                  e7.stopPropagation();
                }
                onMove(e7.touches[0].clientX);
                return false;
              },
              upHandler: (e7) => {
                var _e$touches$;
                document.removeEventListener("touchmove", touchEvents.moveHandler);
                document.removeEventListener("touchend", touchEvents.upHandler);
                if (e7.cancelable) {
                  e7.preventDefault();
                  e7.stopPropagation();
                }
                onEnd((_e$touches$ = e7.touches[0]) == null ? void 0 : _e$touches$.clientX);
              }
            };
            const passiveIfSupported = passiveEventSupported() ? {
              passive: false
            } : false;
            if (isTouchStartEvent(e6)) {
              document.addEventListener("touchmove", touchEvents.moveHandler, passiveIfSupported);
              document.addEventListener("touchend", touchEvents.upHandler, passiveIfSupported);
            } else {
              document.addEventListener("mousemove", mouseEvents.moveHandler, passiveIfSupported);
              document.addEventListener("mouseup", mouseEvents.upHandler, passiveIfSupported);
            }
            table.setColumnSizingInfo((old) => ({
              ...old,
              startOffset: clientX,
              startSize,
              deltaOffset: 0,
              deltaPercentage: 0,
              columnSizingStart,
              isResizingColumn: column.id
            }));
          };
        }
      };
    },
    createTable: (table) => {
      return {
        setColumnSizing: (updater) => table.options.onColumnSizingChange == null ? void 0 : table.options.onColumnSizingChange(updater),
        setColumnSizingInfo: (updater) => table.options.onColumnSizingInfoChange == null ? void 0 : table.options.onColumnSizingInfoChange(updater),
        resetColumnSizing: (defaultState) => {
          var _table$initialState$c;
          table.setColumnSizing(defaultState ? {} : (_table$initialState$c = table.initialState.columnSizing) != null ? _table$initialState$c : {});
        },
        resetHeaderSizeInfo: (defaultState) => {
          var _table$initialState$c2;
          table.setColumnSizingInfo(defaultState ? getDefaultColumnSizingInfoState() : (_table$initialState$c2 = table.initialState.columnSizingInfo) != null ? _table$initialState$c2 : getDefaultColumnSizingInfoState());
        },
        getTotalSize: () => {
          var _table$getHeaderGroup, _table$getHeaderGroup2;
          return (_table$getHeaderGroup = (_table$getHeaderGroup2 = table.getHeaderGroups()[0]) == null ? void 0 : _table$getHeaderGroup2.headers.reduce((sum2, header) => {
            return sum2 + header.getSize();
          }, 0)) != null ? _table$getHeaderGroup : 0;
        },
        getLeftTotalSize: () => {
          var _table$getLeftHeaderG, _table$getLeftHeaderG2;
          return (_table$getLeftHeaderG = (_table$getLeftHeaderG2 = table.getLeftHeaderGroups()[0]) == null ? void 0 : _table$getLeftHeaderG2.headers.reduce((sum2, header) => {
            return sum2 + header.getSize();
          }, 0)) != null ? _table$getLeftHeaderG : 0;
        },
        getCenterTotalSize: () => {
          var _table$getCenterHeade, _table$getCenterHeade2;
          return (_table$getCenterHeade = (_table$getCenterHeade2 = table.getCenterHeaderGroups()[0]) == null ? void 0 : _table$getCenterHeade2.headers.reduce((sum2, header) => {
            return sum2 + header.getSize();
          }, 0)) != null ? _table$getCenterHeade : 0;
        },
        getRightTotalSize: () => {
          var _table$getRightHeader, _table$getRightHeader2;
          return (_table$getRightHeader = (_table$getRightHeader2 = table.getRightHeaderGroups()[0]) == null ? void 0 : _table$getRightHeader2.headers.reduce((sum2, header) => {
            return sum2 + header.getSize();
          }, 0)) != null ? _table$getRightHeader : 0;
        }
      };
    }
  };
  var passiveSupported = null;
  function passiveEventSupported() {
    if (typeof passiveSupported === "boolean")
      return passiveSupported;
    let supported = false;
    try {
      const options = {
        get passive() {
          supported = true;
          return false;
        }
      };
      const noop = () => {
      };
      window.addEventListener("test", noop, options);
      window.removeEventListener("test", noop);
    } catch (err) {
      supported = false;
    }
    passiveSupported = supported;
    return passiveSupported;
  }
  function isTouchStartEvent(e6) {
    return e6.type === "touchstart";
  }
  var Expanding = {
    getInitialState: (state) => {
      return {
        expanded: {},
        ...state
      };
    },
    getDefaultOptions: (table) => {
      return {
        onExpandedChange: makeStateUpdater("expanded", table),
        paginateExpandedRows: true
      };
    },
    createTable: (table) => {
      let registered = false;
      let queued = false;
      return {
        _autoResetExpanded: () => {
          var _ref, _table$options$autoRe;
          if (!registered) {
            table._queue(() => {
              registered = true;
            });
            return;
          }
          if ((_ref = (_table$options$autoRe = table.options.autoResetAll) != null ? _table$options$autoRe : table.options.autoResetExpanded) != null ? _ref : !table.options.manualExpanding) {
            if (queued)
              return;
            queued = true;
            table._queue(() => {
              table.resetExpanded();
              queued = false;
            });
          }
        },
        setExpanded: (updater) => table.options.onExpandedChange == null ? void 0 : table.options.onExpandedChange(updater),
        toggleAllRowsExpanded: (expanded) => {
          if (expanded != null ? expanded : !table.getIsAllRowsExpanded()) {
            table.setExpanded(true);
          } else {
            table.setExpanded({});
          }
        },
        resetExpanded: (defaultState) => {
          var _table$initialState$e, _table$initialState;
          table.setExpanded(defaultState ? {} : (_table$initialState$e = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.expanded) != null ? _table$initialState$e : {});
        },
        getCanSomeRowsExpand: () => {
          return table.getPrePaginationRowModel().flatRows.some((row) => row.getCanExpand());
        },
        getToggleAllRowsExpandedHandler: () => {
          return (e6) => {
            e6.persist == null ? void 0 : e6.persist();
            table.toggleAllRowsExpanded();
          };
        },
        getIsSomeRowsExpanded: () => {
          const expanded = table.getState().expanded;
          return expanded === true || Object.values(expanded).some(Boolean);
        },
        getIsAllRowsExpanded: () => {
          const expanded = table.getState().expanded;
          if (typeof expanded === "boolean") {
            return expanded === true;
          }
          if (!Object.keys(expanded).length) {
            return false;
          }
          if (table.getRowModel().flatRows.some((row) => !row.getIsExpanded())) {
            return false;
          }
          return true;
        },
        getExpandedDepth: () => {
          let maxDepth = 0;
          const rowIds = table.getState().expanded === true ? Object.keys(table.getRowModel().rowsById) : Object.keys(table.getState().expanded);
          rowIds.forEach((id) => {
            const splitId = id.split(".");
            maxDepth = Math.max(maxDepth, splitId.length);
          });
          return maxDepth;
        },
        getPreExpandedRowModel: () => table.getSortedRowModel(),
        getExpandedRowModel: () => {
          if (!table._getExpandedRowModel && table.options.getExpandedRowModel) {
            table._getExpandedRowModel = table.options.getExpandedRowModel(table);
          }
          if (table.options.manualExpanding || !table._getExpandedRowModel) {
            return table.getPreExpandedRowModel();
          }
          return table._getExpandedRowModel();
        }
      };
    },
    createRow: (row, table) => {
      return {
        toggleExpanded: (expanded) => {
          table.setExpanded((old) => {
            var _expanded;
            const exists = old === true ? true : !!(old != null && old[row.id]);
            let oldExpanded = {};
            if (old === true) {
              Object.keys(table.getRowModel().rowsById).forEach((rowId) => {
                oldExpanded[rowId] = true;
              });
            } else {
              oldExpanded = old;
            }
            expanded = (_expanded = expanded) != null ? _expanded : !exists;
            if (!exists && expanded) {
              return {
                ...oldExpanded,
                [row.id]: true
              };
            }
            if (exists && !expanded) {
              const {
                [row.id]: _4,
                ...rest
              } = oldExpanded;
              return rest;
            }
            return old;
          });
        },
        getIsExpanded: () => {
          var _table$options$getIsR;
          const expanded = table.getState().expanded;
          return !!((_table$options$getIsR = table.options.getIsRowExpanded == null ? void 0 : table.options.getIsRowExpanded(row)) != null ? _table$options$getIsR : expanded === true || (expanded == null ? void 0 : expanded[row.id]));
        },
        getCanExpand: () => {
          var _table$options$getRow, _table$options$enable, _row$subRows;
          return (_table$options$getRow = table.options.getRowCanExpand == null ? void 0 : table.options.getRowCanExpand(row)) != null ? _table$options$getRow : ((_table$options$enable = table.options.enableExpanding) != null ? _table$options$enable : true) && !!((_row$subRows = row.subRows) != null && _row$subRows.length);
        },
        getToggleExpandedHandler: () => {
          const canExpand = row.getCanExpand();
          return () => {
            if (!canExpand)
              return;
            row.toggleExpanded();
          };
        }
      };
    }
  };
  var includesString = (row, columnId, filterValue) => {
    var _row$getValue, _row$getValue$toStrin, _row$getValue$toStrin2;
    const search = filterValue.toLowerCase();
    return Boolean((_row$getValue = row.getValue(columnId)) == null ? void 0 : (_row$getValue$toStrin = _row$getValue.toString()) == null ? void 0 : (_row$getValue$toStrin2 = _row$getValue$toStrin.toLowerCase()) == null ? void 0 : _row$getValue$toStrin2.includes(search));
  };
  includesString.autoRemove = (val) => testFalsey(val);
  var includesStringSensitive = (row, columnId, filterValue) => {
    var _row$getValue2, _row$getValue2$toStri;
    return Boolean((_row$getValue2 = row.getValue(columnId)) == null ? void 0 : (_row$getValue2$toStri = _row$getValue2.toString()) == null ? void 0 : _row$getValue2$toStri.includes(filterValue));
  };
  includesStringSensitive.autoRemove = (val) => testFalsey(val);
  var equalsString = (row, columnId, filterValue) => {
    var _row$getValue3, _row$getValue3$toStri;
    return ((_row$getValue3 = row.getValue(columnId)) == null ? void 0 : (_row$getValue3$toStri = _row$getValue3.toString()) == null ? void 0 : _row$getValue3$toStri.toLowerCase()) === (filterValue == null ? void 0 : filterValue.toLowerCase());
  };
  equalsString.autoRemove = (val) => testFalsey(val);
  var arrIncludes = (row, columnId, filterValue) => {
    var _row$getValue4;
    return (_row$getValue4 = row.getValue(columnId)) == null ? void 0 : _row$getValue4.includes(filterValue);
  };
  arrIncludes.autoRemove = (val) => testFalsey(val) || !(val != null && val.length);
  var arrIncludesAll = (row, columnId, filterValue) => {
    return !filterValue.some((val) => {
      var _row$getValue5;
      return !((_row$getValue5 = row.getValue(columnId)) != null && _row$getValue5.includes(val));
    });
  };
  arrIncludesAll.autoRemove = (val) => testFalsey(val) || !(val != null && val.length);
  var arrIncludesSome = (row, columnId, filterValue) => {
    return filterValue.some((val) => {
      var _row$getValue6;
      return (_row$getValue6 = row.getValue(columnId)) == null ? void 0 : _row$getValue6.includes(val);
    });
  };
  arrIncludesSome.autoRemove = (val) => testFalsey(val) || !(val != null && val.length);
  var equals = (row, columnId, filterValue) => {
    return row.getValue(columnId) === filterValue;
  };
  equals.autoRemove = (val) => testFalsey(val);
  var weakEquals = (row, columnId, filterValue) => {
    return row.getValue(columnId) == filterValue;
  };
  weakEquals.autoRemove = (val) => testFalsey(val);
  var inNumberRange = (row, columnId, filterValue) => {
    let [min2, max2] = filterValue;
    const rowValue = row.getValue(columnId);
    return rowValue >= min2 && rowValue <= max2;
  };
  inNumberRange.resolveFilterValue = (val) => {
    let [unsafeMin, unsafeMax] = val;
    let parsedMin = typeof unsafeMin !== "number" ? parseFloat(unsafeMin) : unsafeMin;
    let parsedMax = typeof unsafeMax !== "number" ? parseFloat(unsafeMax) : unsafeMax;
    let min2 = unsafeMin === null || Number.isNaN(parsedMin) ? -Infinity : parsedMin;
    let max2 = unsafeMax === null || Number.isNaN(parsedMax) ? Infinity : parsedMax;
    if (min2 > max2) {
      const temp = min2;
      min2 = max2;
      max2 = temp;
    }
    return [min2, max2];
  };
  inNumberRange.autoRemove = (val) => testFalsey(val) || testFalsey(val[0]) && testFalsey(val[1]);
  var filterFns = {
    includesString,
    includesStringSensitive,
    equalsString,
    arrIncludes,
    arrIncludesAll,
    arrIncludesSome,
    equals,
    weakEquals,
    inNumberRange
  };
  function testFalsey(val) {
    return val === void 0 || val === null || val === "";
  }
  var Filters = {
    getDefaultColumnDef: () => {
      return {
        filterFn: "auto"
      };
    },
    getInitialState: (state) => {
      return {
        columnFilters: [],
        globalFilter: void 0,
        // filtersProgress: 1,
        // facetProgress: {},
        ...state
      };
    },
    getDefaultOptions: (table) => {
      return {
        onColumnFiltersChange: makeStateUpdater("columnFilters", table),
        onGlobalFilterChange: makeStateUpdater("globalFilter", table),
        filterFromLeafRows: false,
        maxLeafRowFilterDepth: 100,
        globalFilterFn: "auto",
        getColumnCanGlobalFilter: (column) => {
          var _table$getCoreRowMode, _table$getCoreRowMode2;
          const value = (_table$getCoreRowMode = table.getCoreRowModel().flatRows[0]) == null ? void 0 : (_table$getCoreRowMode2 = _table$getCoreRowMode._getAllCellsByColumnId()[column.id]) == null ? void 0 : _table$getCoreRowMode2.getValue();
          return typeof value === "string" || typeof value === "number";
        }
      };
    },
    createColumn: (column, table) => {
      return {
        getAutoFilterFn: () => {
          const firstRow = table.getCoreRowModel().flatRows[0];
          const value = firstRow == null ? void 0 : firstRow.getValue(column.id);
          if (typeof value === "string") {
            return filterFns.includesString;
          }
          if (typeof value === "number") {
            return filterFns.inNumberRange;
          }
          if (typeof value === "boolean") {
            return filterFns.equals;
          }
          if (value !== null && typeof value === "object") {
            return filterFns.equals;
          }
          if (Array.isArray(value)) {
            return filterFns.arrIncludes;
          }
          return filterFns.weakEquals;
        },
        getFilterFn: () => {
          var _table$options$filter, _table$options$filter2;
          return isFunction2(column.columnDef.filterFn) ? column.columnDef.filterFn : column.columnDef.filterFn === "auto" ? column.getAutoFilterFn() : (_table$options$filter = (_table$options$filter2 = table.options.filterFns) == null ? void 0 : _table$options$filter2[column.columnDef.filterFn]) != null ? _table$options$filter : filterFns[column.columnDef.filterFn];
        },
        getCanFilter: () => {
          var _column$columnDef$ena, _table$options$enable, _table$options$enable2;
          return ((_column$columnDef$ena = column.columnDef.enableColumnFilter) != null ? _column$columnDef$ena : true) && ((_table$options$enable = table.options.enableColumnFilters) != null ? _table$options$enable : true) && ((_table$options$enable2 = table.options.enableFilters) != null ? _table$options$enable2 : true) && !!column.accessorFn;
        },
        getCanGlobalFilter: () => {
          var _column$columnDef$ena2, _table$options$enable3, _table$options$enable4, _table$options$getCol;
          return ((_column$columnDef$ena2 = column.columnDef.enableGlobalFilter) != null ? _column$columnDef$ena2 : true) && ((_table$options$enable3 = table.options.enableGlobalFilter) != null ? _table$options$enable3 : true) && ((_table$options$enable4 = table.options.enableFilters) != null ? _table$options$enable4 : true) && ((_table$options$getCol = table.options.getColumnCanGlobalFilter == null ? void 0 : table.options.getColumnCanGlobalFilter(column)) != null ? _table$options$getCol : true) && !!column.accessorFn;
        },
        getIsFiltered: () => column.getFilterIndex() > -1,
        getFilterValue: () => {
          var _table$getState$colum, _table$getState$colum2;
          return (_table$getState$colum = table.getState().columnFilters) == null ? void 0 : (_table$getState$colum2 = _table$getState$colum.find((d5) => d5.id === column.id)) == null ? void 0 : _table$getState$colum2.value;
        },
        getFilterIndex: () => {
          var _table$getState$colum3, _table$getState$colum4;
          return (_table$getState$colum3 = (_table$getState$colum4 = table.getState().columnFilters) == null ? void 0 : _table$getState$colum4.findIndex((d5) => d5.id === column.id)) != null ? _table$getState$colum3 : -1;
        },
        setFilterValue: (value) => {
          table.setColumnFilters((old) => {
            const filterFn = column.getFilterFn();
            const previousfilter = old == null ? void 0 : old.find((d5) => d5.id === column.id);
            const newFilter = functionalUpdate(value, previousfilter ? previousfilter.value : void 0);
            if (shouldAutoRemoveFilter(filterFn, newFilter, column)) {
              var _old$filter;
              return (_old$filter = old == null ? void 0 : old.filter((d5) => d5.id !== column.id)) != null ? _old$filter : [];
            }
            const newFilterObj = {
              id: column.id,
              value: newFilter
            };
            if (previousfilter) {
              var _old$map;
              return (_old$map = old == null ? void 0 : old.map((d5) => {
                if (d5.id === column.id) {
                  return newFilterObj;
                }
                return d5;
              })) != null ? _old$map : [];
            }
            if (old != null && old.length) {
              return [...old, newFilterObj];
            }
            return [newFilterObj];
          });
        },
        _getFacetedRowModel: table.options.getFacetedRowModel && table.options.getFacetedRowModel(table, column.id),
        getFacetedRowModel: () => {
          if (!column._getFacetedRowModel) {
            return table.getPreFilteredRowModel();
          }
          return column._getFacetedRowModel();
        },
        _getFacetedUniqueValues: table.options.getFacetedUniqueValues && table.options.getFacetedUniqueValues(table, column.id),
        getFacetedUniqueValues: () => {
          if (!column._getFacetedUniqueValues) {
            return /* @__PURE__ */ new Map();
          }
          return column._getFacetedUniqueValues();
        },
        _getFacetedMinMaxValues: table.options.getFacetedMinMaxValues && table.options.getFacetedMinMaxValues(table, column.id),
        getFacetedMinMaxValues: () => {
          if (!column._getFacetedMinMaxValues) {
            return void 0;
          }
          return column._getFacetedMinMaxValues();
        }
        // () => [column.getFacetedRowModel()],
        // facetedRowModel => getRowModelMinMaxValues(facetedRowModel, column.id),
      };
    },
    createRow: (row, table) => {
      return {
        columnFilters: {},
        columnFiltersMeta: {}
      };
    },
    createTable: (table) => {
      return {
        getGlobalAutoFilterFn: () => {
          return filterFns.includesString;
        },
        getGlobalFilterFn: () => {
          var _table$options$filter3, _table$options$filter4;
          const {
            globalFilterFn
          } = table.options;
          return isFunction2(globalFilterFn) ? globalFilterFn : globalFilterFn === "auto" ? table.getGlobalAutoFilterFn() : (_table$options$filter3 = (_table$options$filter4 = table.options.filterFns) == null ? void 0 : _table$options$filter4[globalFilterFn]) != null ? _table$options$filter3 : filterFns[globalFilterFn];
        },
        setColumnFilters: (updater) => {
          const leafColumns = table.getAllLeafColumns();
          const updateFn = (old) => {
            var _functionalUpdate;
            return (_functionalUpdate = functionalUpdate(updater, old)) == null ? void 0 : _functionalUpdate.filter((filter) => {
              const column = leafColumns.find((d5) => d5.id === filter.id);
              if (column) {
                const filterFn = column.getFilterFn();
                if (shouldAutoRemoveFilter(filterFn, filter.value, column)) {
                  return false;
                }
              }
              return true;
            });
          };
          table.options.onColumnFiltersChange == null ? void 0 : table.options.onColumnFiltersChange(updateFn);
        },
        setGlobalFilter: (updater) => {
          table.options.onGlobalFilterChange == null ? void 0 : table.options.onGlobalFilterChange(updater);
        },
        resetGlobalFilter: (defaultState) => {
          table.setGlobalFilter(defaultState ? void 0 : table.initialState.globalFilter);
        },
        resetColumnFilters: (defaultState) => {
          var _table$initialState$c, _table$initialState;
          table.setColumnFilters(defaultState ? [] : (_table$initialState$c = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.columnFilters) != null ? _table$initialState$c : []);
        },
        getPreFilteredRowModel: () => table.getCoreRowModel(),
        getFilteredRowModel: () => {
          if (!table._getFilteredRowModel && table.options.getFilteredRowModel) {
            table._getFilteredRowModel = table.options.getFilteredRowModel(table);
          }
          if (table.options.manualFiltering || !table._getFilteredRowModel) {
            return table.getPreFilteredRowModel();
          }
          return table._getFilteredRowModel();
        },
        _getGlobalFacetedRowModel: table.options.getFacetedRowModel && table.options.getFacetedRowModel(table, "__global__"),
        getGlobalFacetedRowModel: () => {
          if (table.options.manualFiltering || !table._getGlobalFacetedRowModel) {
            return table.getPreFilteredRowModel();
          }
          return table._getGlobalFacetedRowModel();
        },
        _getGlobalFacetedUniqueValues: table.options.getFacetedUniqueValues && table.options.getFacetedUniqueValues(table, "__global__"),
        getGlobalFacetedUniqueValues: () => {
          if (!table._getGlobalFacetedUniqueValues) {
            return /* @__PURE__ */ new Map();
          }
          return table._getGlobalFacetedUniqueValues();
        },
        _getGlobalFacetedMinMaxValues: table.options.getFacetedMinMaxValues && table.options.getFacetedMinMaxValues(table, "__global__"),
        getGlobalFacetedMinMaxValues: () => {
          if (!table._getGlobalFacetedMinMaxValues) {
            return;
          }
          return table._getGlobalFacetedMinMaxValues();
        }
      };
    }
  };
  function shouldAutoRemoveFilter(filterFn, value, column) {
    return (filterFn && filterFn.autoRemove ? filterFn.autoRemove(value, column) : false) || typeof value === "undefined" || typeof value === "string" && !value;
  }
  var sum = (columnId, _leafRows, childRows) => {
    return childRows.reduce((sum2, next) => {
      const nextValue = next.getValue(columnId);
      return sum2 + (typeof nextValue === "number" ? nextValue : 0);
    }, 0);
  };
  var min = (columnId, _leafRows, childRows) => {
    let min2;
    childRows.forEach((row) => {
      const value = row.getValue(columnId);
      if (value != null && (min2 > value || min2 === void 0 && value >= value)) {
        min2 = value;
      }
    });
    return min2;
  };
  var max = (columnId, _leafRows, childRows) => {
    let max2;
    childRows.forEach((row) => {
      const value = row.getValue(columnId);
      if (value != null && (max2 < value || max2 === void 0 && value >= value)) {
        max2 = value;
      }
    });
    return max2;
  };
  var extent = (columnId, _leafRows, childRows) => {
    let min2;
    let max2;
    childRows.forEach((row) => {
      const value = row.getValue(columnId);
      if (value != null) {
        if (min2 === void 0) {
          if (value >= value)
            min2 = max2 = value;
        } else {
          if (min2 > value)
            min2 = value;
          if (max2 < value)
            max2 = value;
        }
      }
    });
    return [min2, max2];
  };
  var mean = (columnId, leafRows) => {
    let count2 = 0;
    let sum2 = 0;
    leafRows.forEach((row) => {
      let value = row.getValue(columnId);
      if (value != null && (value = +value) >= value) {
        ++count2, sum2 += value;
      }
    });
    if (count2)
      return sum2 / count2;
    return;
  };
  var median = (columnId, leafRows) => {
    if (!leafRows.length) {
      return;
    }
    const values = leafRows.map((row) => row.getValue(columnId));
    if (!isNumberArray(values)) {
      return;
    }
    if (values.length === 1) {
      return values[0];
    }
    const mid = Math.floor(values.length / 2);
    const nums = values.sort((a5, b4) => a5 - b4);
    return values.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  };
  var unique = (columnId, leafRows) => {
    return Array.from(new Set(leafRows.map((d5) => d5.getValue(columnId))).values());
  };
  var uniqueCount = (columnId, leafRows) => {
    return new Set(leafRows.map((d5) => d5.getValue(columnId))).size;
  };
  var count = (_columnId, leafRows) => {
    return leafRows.length;
  };
  var aggregationFns = {
    sum,
    min,
    max,
    extent,
    mean,
    median,
    unique,
    uniqueCount,
    count
  };
  var Grouping = {
    getDefaultColumnDef: () => {
      return {
        aggregatedCell: (props) => {
          var _toString, _props$getValue;
          return (_toString = (_props$getValue = props.getValue()) == null ? void 0 : _props$getValue.toString == null ? void 0 : _props$getValue.toString()) != null ? _toString : null;
        },
        aggregationFn: "auto"
      };
    },
    getInitialState: (state) => {
      return {
        grouping: [],
        ...state
      };
    },
    getDefaultOptions: (table) => {
      return {
        onGroupingChange: makeStateUpdater("grouping", table),
        groupedColumnMode: "reorder"
      };
    },
    createColumn: (column, table) => {
      return {
        toggleGrouping: () => {
          table.setGrouping((old) => {
            if (old != null && old.includes(column.id)) {
              return old.filter((d5) => d5 !== column.id);
            }
            return [...old != null ? old : [], column.id];
          });
        },
        getCanGroup: () => {
          var _ref, _ref2, _ref3, _column$columnDef$ena;
          return (_ref = (_ref2 = (_ref3 = (_column$columnDef$ena = column.columnDef.enableGrouping) != null ? _column$columnDef$ena : true) != null ? _ref3 : table.options.enableGrouping) != null ? _ref2 : true) != null ? _ref : !!column.accessorFn;
        },
        getIsGrouped: () => {
          var _table$getState$group;
          return (_table$getState$group = table.getState().grouping) == null ? void 0 : _table$getState$group.includes(column.id);
        },
        getGroupedIndex: () => {
          var _table$getState$group2;
          return (_table$getState$group2 = table.getState().grouping) == null ? void 0 : _table$getState$group2.indexOf(column.id);
        },
        getToggleGroupingHandler: () => {
          const canGroup = column.getCanGroup();
          return () => {
            if (!canGroup)
              return;
            column.toggleGrouping();
          };
        },
        getAutoAggregationFn: () => {
          const firstRow = table.getCoreRowModel().flatRows[0];
          const value = firstRow == null ? void 0 : firstRow.getValue(column.id);
          if (typeof value === "number") {
            return aggregationFns.sum;
          }
          if (Object.prototype.toString.call(value) === "[object Date]") {
            return aggregationFns.extent;
          }
        },
        getAggregationFn: () => {
          var _table$options$aggreg, _table$options$aggreg2;
          if (!column) {
            throw new Error();
          }
          return isFunction2(column.columnDef.aggregationFn) ? column.columnDef.aggregationFn : column.columnDef.aggregationFn === "auto" ? column.getAutoAggregationFn() : (_table$options$aggreg = (_table$options$aggreg2 = table.options.aggregationFns) == null ? void 0 : _table$options$aggreg2[column.columnDef.aggregationFn]) != null ? _table$options$aggreg : aggregationFns[column.columnDef.aggregationFn];
        }
      };
    },
    createTable: (table) => {
      return {
        setGrouping: (updater) => table.options.onGroupingChange == null ? void 0 : table.options.onGroupingChange(updater),
        resetGrouping: (defaultState) => {
          var _table$initialState$g, _table$initialState;
          table.setGrouping(defaultState ? [] : (_table$initialState$g = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.grouping) != null ? _table$initialState$g : []);
        },
        getPreGroupedRowModel: () => table.getFilteredRowModel(),
        getGroupedRowModel: () => {
          if (!table._getGroupedRowModel && table.options.getGroupedRowModel) {
            table._getGroupedRowModel = table.options.getGroupedRowModel(table);
          }
          if (table.options.manualGrouping || !table._getGroupedRowModel) {
            return table.getPreGroupedRowModel();
          }
          return table._getGroupedRowModel();
        }
      };
    },
    createRow: (row, table) => {
      return {
        getIsGrouped: () => !!row.groupingColumnId,
        getGroupingValue: (columnId) => {
          if (row._groupingValuesCache.hasOwnProperty(columnId)) {
            return row._groupingValuesCache[columnId];
          }
          const column = table.getColumn(columnId);
          if (!(column != null && column.columnDef.getGroupingValue)) {
            return row.getValue(columnId);
          }
          row._groupingValuesCache[columnId] = column.columnDef.getGroupingValue(row.original);
          return row._groupingValuesCache[columnId];
        },
        _groupingValuesCache: {}
      };
    },
    createCell: (cell, column, row, table) => {
      return {
        getIsGrouped: () => column.getIsGrouped() && column.id === row.groupingColumnId,
        getIsPlaceholder: () => !cell.getIsGrouped() && column.getIsGrouped(),
        getIsAggregated: () => {
          var _row$subRows;
          return !cell.getIsGrouped() && !cell.getIsPlaceholder() && !!((_row$subRows = row.subRows) != null && _row$subRows.length);
        }
      };
    }
  };
  function orderColumns(leafColumns, grouping, groupedColumnMode) {
    if (!(grouping != null && grouping.length) || !groupedColumnMode) {
      return leafColumns;
    }
    const nonGroupingColumns = leafColumns.filter((col) => !grouping.includes(col.id));
    if (groupedColumnMode === "remove") {
      return nonGroupingColumns;
    }
    const groupingColumns = grouping.map((g5) => leafColumns.find((col) => col.id === g5)).filter(Boolean);
    return [...groupingColumns, ...nonGroupingColumns];
  }
  var Ordering = {
    getInitialState: (state) => {
      return {
        columnOrder: [],
        ...state
      };
    },
    getDefaultOptions: (table) => {
      return {
        onColumnOrderChange: makeStateUpdater("columnOrder", table)
      };
    },
    createTable: (table) => {
      return {
        setColumnOrder: (updater) => table.options.onColumnOrderChange == null ? void 0 : table.options.onColumnOrderChange(updater),
        resetColumnOrder: (defaultState) => {
          var _table$initialState$c;
          table.setColumnOrder(defaultState ? [] : (_table$initialState$c = table.initialState.columnOrder) != null ? _table$initialState$c : []);
        },
        _getOrderColumnsFn: memo(() => [table.getState().columnOrder, table.getState().grouping, table.options.groupedColumnMode], (columnOrder, grouping, groupedColumnMode) => (columns) => {
          let orderedColumns = [];
          if (!(columnOrder != null && columnOrder.length)) {
            orderedColumns = columns;
          } else {
            const columnOrderCopy = [...columnOrder];
            const columnsCopy = [...columns];
            while (columnsCopy.length && columnOrderCopy.length) {
              const targetColumnId = columnOrderCopy.shift();
              const foundIndex = columnsCopy.findIndex((d5) => d5.id === targetColumnId);
              if (foundIndex > -1) {
                orderedColumns.push(columnsCopy.splice(foundIndex, 1)[0]);
              }
            }
            orderedColumns = [...orderedColumns, ...columnsCopy];
          }
          return orderColumns(orderedColumns, grouping, groupedColumnMode);
        }, {
          key: "getOrderColumnsFn"
          // debug: () => table.options.debugAll ?? table.options.debugTable,
        })
      };
    }
  };
  var defaultPageIndex = 0;
  var defaultPageSize = 10;
  var getDefaultPaginationState = () => ({
    pageIndex: defaultPageIndex,
    pageSize: defaultPageSize
  });
  var Pagination = {
    getInitialState: (state) => {
      return {
        ...state,
        pagination: {
          ...getDefaultPaginationState(),
          ...state == null ? void 0 : state.pagination
        }
      };
    },
    getDefaultOptions: (table) => {
      return {
        onPaginationChange: makeStateUpdater("pagination", table)
      };
    },
    createTable: (table) => {
      let registered = false;
      let queued = false;
      return {
        _autoResetPageIndex: () => {
          var _ref, _table$options$autoRe;
          if (!registered) {
            table._queue(() => {
              registered = true;
            });
            return;
          }
          if ((_ref = (_table$options$autoRe = table.options.autoResetAll) != null ? _table$options$autoRe : table.options.autoResetPageIndex) != null ? _ref : !table.options.manualPagination) {
            if (queued)
              return;
            queued = true;
            table._queue(() => {
              table.resetPageIndex();
              queued = false;
            });
          }
        },
        setPagination: (updater) => {
          const safeUpdater = (old) => {
            let newState = functionalUpdate(updater, old);
            return newState;
          };
          return table.options.onPaginationChange == null ? void 0 : table.options.onPaginationChange(safeUpdater);
        },
        resetPagination: (defaultState) => {
          var _table$initialState$p;
          table.setPagination(defaultState ? getDefaultPaginationState() : (_table$initialState$p = table.initialState.pagination) != null ? _table$initialState$p : getDefaultPaginationState());
        },
        setPageIndex: (updater) => {
          table.setPagination((old) => {
            let pageIndex = functionalUpdate(updater, old.pageIndex);
            const maxPageIndex = typeof table.options.pageCount === "undefined" || table.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : table.options.pageCount - 1;
            pageIndex = Math.max(0, Math.min(pageIndex, maxPageIndex));
            return {
              ...old,
              pageIndex
            };
          });
        },
        resetPageIndex: (defaultState) => {
          var _table$initialState$p2, _table$initialState, _table$initialState$p3;
          table.setPageIndex(defaultState ? defaultPageIndex : (_table$initialState$p2 = (_table$initialState = table.initialState) == null ? void 0 : (_table$initialState$p3 = _table$initialState.pagination) == null ? void 0 : _table$initialState$p3.pageIndex) != null ? _table$initialState$p2 : defaultPageIndex);
        },
        resetPageSize: (defaultState) => {
          var _table$initialState$p4, _table$initialState2, _table$initialState2$;
          table.setPageSize(defaultState ? defaultPageSize : (_table$initialState$p4 = (_table$initialState2 = table.initialState) == null ? void 0 : (_table$initialState2$ = _table$initialState2.pagination) == null ? void 0 : _table$initialState2$.pageSize) != null ? _table$initialState$p4 : defaultPageSize);
        },
        setPageSize: (updater) => {
          table.setPagination((old) => {
            const pageSize = Math.max(1, functionalUpdate(updater, old.pageSize));
            const topRowIndex = old.pageSize * old.pageIndex;
            const pageIndex = Math.floor(topRowIndex / pageSize);
            return {
              ...old,
              pageIndex,
              pageSize
            };
          });
        },
        setPageCount: (updater) => table.setPagination((old) => {
          var _table$options$pageCo;
          let newPageCount = functionalUpdate(updater, (_table$options$pageCo = table.options.pageCount) != null ? _table$options$pageCo : -1);
          if (typeof newPageCount === "number") {
            newPageCount = Math.max(-1, newPageCount);
          }
          return {
            ...old,
            pageCount: newPageCount
          };
        }),
        getPageOptions: memo(() => [table.getPageCount()], (pageCount) => {
          let pageOptions = [];
          if (pageCount && pageCount > 0) {
            pageOptions = [...new Array(pageCount)].fill(null).map((_4, i5) => i5);
          }
          return pageOptions;
        }, {
          key: "getPageOptions",
          debug: () => {
            var _table$options$debugA;
            return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugTable;
          }
        }),
        getCanPreviousPage: () => table.getState().pagination.pageIndex > 0,
        getCanNextPage: () => {
          const {
            pageIndex
          } = table.getState().pagination;
          const pageCount = table.getPageCount();
          if (pageCount === -1) {
            return true;
          }
          if (pageCount === 0) {
            return false;
          }
          return pageIndex < pageCount - 1;
        },
        previousPage: () => {
          return table.setPageIndex((old) => old - 1);
        },
        nextPage: () => {
          return table.setPageIndex((old) => {
            return old + 1;
          });
        },
        getPrePaginationRowModel: () => table.getExpandedRowModel(),
        getPaginationRowModel: () => {
          if (!table._getPaginationRowModel && table.options.getPaginationRowModel) {
            table._getPaginationRowModel = table.options.getPaginationRowModel(table);
          }
          if (table.options.manualPagination || !table._getPaginationRowModel) {
            return table.getPrePaginationRowModel();
          }
          return table._getPaginationRowModel();
        },
        getPageCount: () => {
          var _table$options$pageCo2;
          return (_table$options$pageCo2 = table.options.pageCount) != null ? _table$options$pageCo2 : Math.ceil(table.getPrePaginationRowModel().rows.length / table.getState().pagination.pageSize);
        }
      };
    }
  };
  var getDefaultPinningState = () => ({
    left: [],
    right: []
  });
  var Pinning = {
    getInitialState: (state) => {
      return {
        columnPinning: getDefaultPinningState(),
        ...state
      };
    },
    getDefaultOptions: (table) => {
      return {
        onColumnPinningChange: makeStateUpdater("columnPinning", table)
      };
    },
    createColumn: (column, table) => {
      return {
        pin: (position) => {
          const columnIds = column.getLeafColumns().map((d5) => d5.id).filter(Boolean);
          table.setColumnPinning((old) => {
            var _old$left3, _old$right3;
            if (position === "right") {
              var _old$left, _old$right;
              return {
                left: ((_old$left = old == null ? void 0 : old.left) != null ? _old$left : []).filter((d5) => !(columnIds != null && columnIds.includes(d5))),
                right: [...((_old$right = old == null ? void 0 : old.right) != null ? _old$right : []).filter((d5) => !(columnIds != null && columnIds.includes(d5))), ...columnIds]
              };
            }
            if (position === "left") {
              var _old$left2, _old$right2;
              return {
                left: [...((_old$left2 = old == null ? void 0 : old.left) != null ? _old$left2 : []).filter((d5) => !(columnIds != null && columnIds.includes(d5))), ...columnIds],
                right: ((_old$right2 = old == null ? void 0 : old.right) != null ? _old$right2 : []).filter((d5) => !(columnIds != null && columnIds.includes(d5)))
              };
            }
            return {
              left: ((_old$left3 = old == null ? void 0 : old.left) != null ? _old$left3 : []).filter((d5) => !(columnIds != null && columnIds.includes(d5))),
              right: ((_old$right3 = old == null ? void 0 : old.right) != null ? _old$right3 : []).filter((d5) => !(columnIds != null && columnIds.includes(d5)))
            };
          });
        },
        getCanPin: () => {
          const leafColumns = column.getLeafColumns();
          return leafColumns.some((d5) => {
            var _d$columnDef$enablePi, _table$options$enable;
            return ((_d$columnDef$enablePi = d5.columnDef.enablePinning) != null ? _d$columnDef$enablePi : true) && ((_table$options$enable = table.options.enablePinning) != null ? _table$options$enable : true);
          });
        },
        getIsPinned: () => {
          const leafColumnIds = column.getLeafColumns().map((d5) => d5.id);
          const {
            left,
            right
          } = table.getState().columnPinning;
          const isLeft = leafColumnIds.some((d5) => left == null ? void 0 : left.includes(d5));
          const isRight = leafColumnIds.some((d5) => right == null ? void 0 : right.includes(d5));
          return isLeft ? "left" : isRight ? "right" : false;
        },
        getPinnedIndex: () => {
          var _table$getState$colum, _table$getState$colum2, _table$getState$colum3;
          const position = column.getIsPinned();
          return position ? (_table$getState$colum = (_table$getState$colum2 = table.getState().columnPinning) == null ? void 0 : (_table$getState$colum3 = _table$getState$colum2[position]) == null ? void 0 : _table$getState$colum3.indexOf(column.id)) != null ? _table$getState$colum : -1 : 0;
        }
      };
    },
    createRow: (row, table) => {
      return {
        getCenterVisibleCells: memo(() => [row._getAllVisibleCells(), table.getState().columnPinning.left, table.getState().columnPinning.right], (allCells, left, right) => {
          const leftAndRight = [...left != null ? left : [], ...right != null ? right : []];
          return allCells.filter((d5) => !leftAndRight.includes(d5.column.id));
        }, {
          key: false,
          debug: () => {
            var _table$options$debugA;
            return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugRows;
          }
        }),
        getLeftVisibleCells: memo(() => [row._getAllVisibleCells(), table.getState().columnPinning.left, ,], (allCells, left) => {
          const cells = (left != null ? left : []).map((columnId) => allCells.find((cell) => cell.column.id === columnId)).filter(Boolean).map((d5) => ({
            ...d5,
            position: "left"
          }));
          return cells;
        }, {
          key: false,
          debug: () => {
            var _table$options$debugA2;
            return (_table$options$debugA2 = table.options.debugAll) != null ? _table$options$debugA2 : table.options.debugRows;
          }
        }),
        getRightVisibleCells: memo(() => [row._getAllVisibleCells(), table.getState().columnPinning.right], (allCells, right) => {
          const cells = (right != null ? right : []).map((columnId) => allCells.find((cell) => cell.column.id === columnId)).filter(Boolean).map((d5) => ({
            ...d5,
            position: "right"
          }));
          return cells;
        }, {
          key: false,
          debug: () => {
            var _table$options$debugA3;
            return (_table$options$debugA3 = table.options.debugAll) != null ? _table$options$debugA3 : table.options.debugRows;
          }
        })
      };
    },
    createTable: (table) => {
      return {
        setColumnPinning: (updater) => table.options.onColumnPinningChange == null ? void 0 : table.options.onColumnPinningChange(updater),
        resetColumnPinning: (defaultState) => {
          var _table$initialState$c, _table$initialState;
          return table.setColumnPinning(defaultState ? getDefaultPinningState() : (_table$initialState$c = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.columnPinning) != null ? _table$initialState$c : getDefaultPinningState());
        },
        getIsSomeColumnsPinned: (position) => {
          var _pinningState$positio;
          const pinningState = table.getState().columnPinning;
          if (!position) {
            var _pinningState$left, _pinningState$right;
            return Boolean(((_pinningState$left = pinningState.left) == null ? void 0 : _pinningState$left.length) || ((_pinningState$right = pinningState.right) == null ? void 0 : _pinningState$right.length));
          }
          return Boolean((_pinningState$positio = pinningState[position]) == null ? void 0 : _pinningState$positio.length);
        },
        getLeftLeafColumns: memo(() => [table.getAllLeafColumns(), table.getState().columnPinning.left], (allColumns, left) => {
          return (left != null ? left : []).map((columnId) => allColumns.find((column) => column.id === columnId)).filter(Boolean);
        }, {
          key: "getLeftLeafColumns",
          debug: () => {
            var _table$options$debugA4;
            return (_table$options$debugA4 = table.options.debugAll) != null ? _table$options$debugA4 : table.options.debugColumns;
          }
        }),
        getRightLeafColumns: memo(() => [table.getAllLeafColumns(), table.getState().columnPinning.right], (allColumns, right) => {
          return (right != null ? right : []).map((columnId) => allColumns.find((column) => column.id === columnId)).filter(Boolean);
        }, {
          key: "getRightLeafColumns",
          debug: () => {
            var _table$options$debugA5;
            return (_table$options$debugA5 = table.options.debugAll) != null ? _table$options$debugA5 : table.options.debugColumns;
          }
        }),
        getCenterLeafColumns: memo(() => [table.getAllLeafColumns(), table.getState().columnPinning.left, table.getState().columnPinning.right], (allColumns, left, right) => {
          const leftAndRight = [...left != null ? left : [], ...right != null ? right : []];
          return allColumns.filter((d5) => !leftAndRight.includes(d5.id));
        }, {
          key: "getCenterLeafColumns",
          debug: () => {
            var _table$options$debugA6;
            return (_table$options$debugA6 = table.options.debugAll) != null ? _table$options$debugA6 : table.options.debugColumns;
          }
        })
      };
    }
  };
  var RowSelection = {
    getInitialState: (state) => {
      return {
        rowSelection: {},
        ...state
      };
    },
    getDefaultOptions: (table) => {
      return {
        onRowSelectionChange: makeStateUpdater("rowSelection", table),
        enableRowSelection: true,
        enableMultiRowSelection: true,
        enableSubRowSelection: true
        // enableGroupingRowSelection: false,
        // isAdditiveSelectEvent: (e: unknown) => !!e.metaKey,
        // isInclusiveSelectEvent: (e: unknown) => !!e.shiftKey,
      };
    },
    createTable: (table) => {
      return {
        setRowSelection: (updater) => table.options.onRowSelectionChange == null ? void 0 : table.options.onRowSelectionChange(updater),
        resetRowSelection: (defaultState) => {
          var _table$initialState$r;
          return table.setRowSelection(defaultState ? {} : (_table$initialState$r = table.initialState.rowSelection) != null ? _table$initialState$r : {});
        },
        toggleAllRowsSelected: (value) => {
          table.setRowSelection((old) => {
            value = typeof value !== "undefined" ? value : !table.getIsAllRowsSelected();
            const rowSelection = {
              ...old
            };
            const preGroupedFlatRows = table.getPreGroupedRowModel().flatRows;
            if (value) {
              preGroupedFlatRows.forEach((row) => {
                if (!row.getCanSelect()) {
                  return;
                }
                rowSelection[row.id] = true;
              });
            } else {
              preGroupedFlatRows.forEach((row) => {
                delete rowSelection[row.id];
              });
            }
            return rowSelection;
          });
        },
        toggleAllPageRowsSelected: (value) => table.setRowSelection((old) => {
          const resolvedValue = typeof value !== "undefined" ? value : !table.getIsAllPageRowsSelected();
          const rowSelection = {
            ...old
          };
          table.getRowModel().rows.forEach((row) => {
            mutateRowIsSelected(rowSelection, row.id, resolvedValue, table);
          });
          return rowSelection;
        }),
        // addRowSelectionRange: rowId => {
        //   const {
        //     rows,
        //     rowsById,
        //     options: { selectGroupingRows, selectSubRows },
        //   } = table
        //   const findSelectedRow = (rows: Row[]) => {
        //     let found
        //     rows.find(d => {
        //       if (d.getIsSelected()) {
        //         found = d
        //         return true
        //       }
        //       const subFound = findSelectedRow(d.subRows || [])
        //       if (subFound) {
        //         found = subFound
        //         return true
        //       }
        //       return false
        //     })
        //     return found
        //   }
        //   const firstRow = findSelectedRow(rows) || rows[0]
        //   const lastRow = rowsById[rowId]
        //   let include = false
        //   const selectedRowIds = {}
        //   const addRow = (row: Row) => {
        //     mutateRowIsSelected(selectedRowIds, row.id, true, {
        //       rowsById,
        //       selectGroupingRows: selectGroupingRows!,
        //       selectSubRows: selectSubRows!,
        //     })
        //   }
        //   table.rows.forEach(row => {
        //     const isFirstRow = row.id === firstRow.id
        //     const isLastRow = row.id === lastRow.id
        //     if (isFirstRow || isLastRow) {
        //       if (!include) {
        //         include = true
        //       } else if (include) {
        //         addRow(row)
        //         include = false
        //       }
        //     }
        //     if (include) {
        //       addRow(row)
        //     }
        //   })
        //   table.setRowSelection(selectedRowIds)
        // },
        getPreSelectedRowModel: () => table.getCoreRowModel(),
        getSelectedRowModel: memo(() => [table.getState().rowSelection, table.getCoreRowModel()], (rowSelection, rowModel) => {
          if (!Object.keys(rowSelection).length) {
            return {
              rows: [],
              flatRows: [],
              rowsById: {}
            };
          }
          return selectRowsFn(table, rowModel);
        }, {
          key: "getSelectedRowModel",
          debug: () => {
            var _table$options$debugA;
            return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugTable;
          }
        }),
        getFilteredSelectedRowModel: memo(() => [table.getState().rowSelection, table.getFilteredRowModel()], (rowSelection, rowModel) => {
          if (!Object.keys(rowSelection).length) {
            return {
              rows: [],
              flatRows: [],
              rowsById: {}
            };
          }
          return selectRowsFn(table, rowModel);
        }, {
          key: false,
          debug: () => {
            var _table$options$debugA2;
            return (_table$options$debugA2 = table.options.debugAll) != null ? _table$options$debugA2 : table.options.debugTable;
          }
        }),
        getGroupedSelectedRowModel: memo(() => [table.getState().rowSelection, table.getSortedRowModel()], (rowSelection, rowModel) => {
          if (!Object.keys(rowSelection).length) {
            return {
              rows: [],
              flatRows: [],
              rowsById: {}
            };
          }
          return selectRowsFn(table, rowModel);
        }, {
          key: false,
          debug: () => {
            var _table$options$debugA3;
            return (_table$options$debugA3 = table.options.debugAll) != null ? _table$options$debugA3 : table.options.debugTable;
          }
        }),
        ///
        // getGroupingRowCanSelect: rowId => {
        //   const row = table.getRow(rowId)
        //   if (!row) {
        //     throw new Error()
        //   }
        //   if (typeof table.options.enableGroupingRowSelection === 'function') {
        //     return table.options.enableGroupingRowSelection(row)
        //   }
        //   return table.options.enableGroupingRowSelection ?? false
        // },
        getIsAllRowsSelected: () => {
          const preGroupedFlatRows = table.getFilteredRowModel().flatRows;
          const {
            rowSelection
          } = table.getState();
          let isAllRowsSelected = Boolean(preGroupedFlatRows.length && Object.keys(rowSelection).length);
          if (isAllRowsSelected) {
            if (preGroupedFlatRows.some((row) => row.getCanSelect() && !rowSelection[row.id])) {
              isAllRowsSelected = false;
            }
          }
          return isAllRowsSelected;
        },
        getIsAllPageRowsSelected: () => {
          const paginationFlatRows = table.getPaginationRowModel().flatRows.filter((row) => row.getCanSelect());
          const {
            rowSelection
          } = table.getState();
          let isAllPageRowsSelected = !!paginationFlatRows.length;
          if (isAllPageRowsSelected && paginationFlatRows.some((row) => !rowSelection[row.id])) {
            isAllPageRowsSelected = false;
          }
          return isAllPageRowsSelected;
        },
        getIsSomeRowsSelected: () => {
          var _table$getState$rowSe;
          const totalSelected = Object.keys((_table$getState$rowSe = table.getState().rowSelection) != null ? _table$getState$rowSe : {}).length;
          return totalSelected > 0 && totalSelected < table.getFilteredRowModel().flatRows.length;
        },
        getIsSomePageRowsSelected: () => {
          const paginationFlatRows = table.getPaginationRowModel().flatRows;
          return table.getIsAllPageRowsSelected() ? false : paginationFlatRows.filter((row) => row.getCanSelect()).some((d5) => d5.getIsSelected() || d5.getIsSomeSelected());
        },
        getToggleAllRowsSelectedHandler: () => {
          return (e6) => {
            table.toggleAllRowsSelected(e6.target.checked);
          };
        },
        getToggleAllPageRowsSelectedHandler: () => {
          return (e6) => {
            table.toggleAllPageRowsSelected(e6.target.checked);
          };
        }
      };
    },
    createRow: (row, table) => {
      return {
        toggleSelected: (value) => {
          const isSelected = row.getIsSelected();
          table.setRowSelection((old) => {
            value = typeof value !== "undefined" ? value : !isSelected;
            if (isSelected === value) {
              return old;
            }
            const selectedRowIds = {
              ...old
            };
            mutateRowIsSelected(selectedRowIds, row.id, value, table);
            return selectedRowIds;
          });
        },
        getIsSelected: () => {
          const {
            rowSelection
          } = table.getState();
          return isRowSelected(row, rowSelection);
        },
        getIsSomeSelected: () => {
          const {
            rowSelection
          } = table.getState();
          return isSubRowSelected(row, rowSelection) === "some";
        },
        getIsAllSubRowsSelected: () => {
          const {
            rowSelection
          } = table.getState();
          return isSubRowSelected(row, rowSelection) === "all";
        },
        getCanSelect: () => {
          var _table$options$enable;
          if (typeof table.options.enableRowSelection === "function") {
            return table.options.enableRowSelection(row);
          }
          return (_table$options$enable = table.options.enableRowSelection) != null ? _table$options$enable : true;
        },
        getCanSelectSubRows: () => {
          var _table$options$enable2;
          if (typeof table.options.enableSubRowSelection === "function") {
            return table.options.enableSubRowSelection(row);
          }
          return (_table$options$enable2 = table.options.enableSubRowSelection) != null ? _table$options$enable2 : true;
        },
        getCanMultiSelect: () => {
          var _table$options$enable3;
          if (typeof table.options.enableMultiRowSelection === "function") {
            return table.options.enableMultiRowSelection(row);
          }
          return (_table$options$enable3 = table.options.enableMultiRowSelection) != null ? _table$options$enable3 : true;
        },
        getToggleSelectedHandler: () => {
          const canSelect = row.getCanSelect();
          return (e6) => {
            var _target;
            if (!canSelect)
              return;
            row.toggleSelected((_target = e6.target) == null ? void 0 : _target.checked);
          };
        }
      };
    }
  };
  var mutateRowIsSelected = (selectedRowIds, id, value, table) => {
    var _row$subRows;
    const row = table.getRow(id);
    if (value) {
      if (!row.getCanMultiSelect()) {
        Object.keys(selectedRowIds).forEach((key) => delete selectedRowIds[key]);
      }
      if (row.getCanSelect()) {
        selectedRowIds[id] = true;
      }
    } else {
      delete selectedRowIds[id];
    }
    if ((_row$subRows = row.subRows) != null && _row$subRows.length && row.getCanSelectSubRows()) {
      row.subRows.forEach((row2) => mutateRowIsSelected(selectedRowIds, row2.id, value, table));
    }
  };
  function selectRowsFn(table, rowModel) {
    const rowSelection = table.getState().rowSelection;
    const newSelectedFlatRows = [];
    const newSelectedRowsById = {};
    const recurseRows = function(rows, depth) {
      return rows.map((row) => {
        var _row$subRows2;
        const isSelected = isRowSelected(row, rowSelection);
        if (isSelected) {
          newSelectedFlatRows.push(row);
          newSelectedRowsById[row.id] = row;
        }
        if ((_row$subRows2 = row.subRows) != null && _row$subRows2.length) {
          row = {
            ...row,
            subRows: recurseRows(row.subRows)
          };
        }
        if (isSelected) {
          return row;
        }
      }).filter(Boolean);
    };
    return {
      rows: recurseRows(rowModel.rows),
      flatRows: newSelectedFlatRows,
      rowsById: newSelectedRowsById
    };
  }
  function isRowSelected(row, selection) {
    var _selection$row$id;
    return (_selection$row$id = selection[row.id]) != null ? _selection$row$id : false;
  }
  function isSubRowSelected(row, selection, table) {
    if (row.subRows && row.subRows.length) {
      let allChildrenSelected = true;
      let someSelected = false;
      row.subRows.forEach((subRow) => {
        if (someSelected && !allChildrenSelected) {
          return;
        }
        if (isRowSelected(subRow, selection)) {
          someSelected = true;
        } else {
          allChildrenSelected = false;
        }
      });
      return allChildrenSelected ? "all" : someSelected ? "some" : false;
    }
    return false;
  }
  var reSplitAlphaNumeric = /([0-9]+)/gm;
  var alphanumeric = (rowA, rowB, columnId) => {
    return compareAlphanumeric(toString3(rowA.getValue(columnId)).toLowerCase(), toString3(rowB.getValue(columnId)).toLowerCase());
  };
  var alphanumericCaseSensitive = (rowA, rowB, columnId) => {
    return compareAlphanumeric(toString3(rowA.getValue(columnId)), toString3(rowB.getValue(columnId)));
  };
  var text = (rowA, rowB, columnId) => {
    return compareBasic(toString3(rowA.getValue(columnId)).toLowerCase(), toString3(rowB.getValue(columnId)).toLowerCase());
  };
  var textCaseSensitive = (rowA, rowB, columnId) => {
    return compareBasic(toString3(rowA.getValue(columnId)), toString3(rowB.getValue(columnId)));
  };
  var datetime = (rowA, rowB, columnId) => {
    const a5 = rowA.getValue(columnId);
    const b4 = rowB.getValue(columnId);
    return a5 > b4 ? 1 : a5 < b4 ? -1 : 0;
  };
  var basic = (rowA, rowB, columnId) => {
    return compareBasic(rowA.getValue(columnId), rowB.getValue(columnId));
  };
  function compareBasic(a5, b4) {
    return a5 === b4 ? 0 : a5 > b4 ? 1 : -1;
  }
  function toString3(a5) {
    if (typeof a5 === "number") {
      if (isNaN(a5) || a5 === Infinity || a5 === -Infinity) {
        return "";
      }
      return String(a5);
    }
    if (typeof a5 === "string") {
      return a5;
    }
    return "";
  }
  function compareAlphanumeric(aStr, bStr) {
    const a5 = aStr.split(reSplitAlphaNumeric).filter(Boolean);
    const b4 = bStr.split(reSplitAlphaNumeric).filter(Boolean);
    while (a5.length && b4.length) {
      const aa = a5.shift();
      const bb = b4.shift();
      const an2 = parseInt(aa, 10);
      const bn2 = parseInt(bb, 10);
      const combo = [an2, bn2].sort();
      if (isNaN(combo[0])) {
        if (aa > bb) {
          return 1;
        }
        if (bb > aa) {
          return -1;
        }
        continue;
      }
      if (isNaN(combo[1])) {
        return isNaN(an2) ? -1 : 1;
      }
      if (an2 > bn2) {
        return 1;
      }
      if (bn2 > an2) {
        return -1;
      }
    }
    return a5.length - b4.length;
  }
  var sortingFns = {
    alphanumeric,
    alphanumericCaseSensitive,
    text,
    textCaseSensitive,
    datetime,
    basic
  };
  var Sorting = {
    getInitialState: (state) => {
      return {
        sorting: [],
        ...state
      };
    },
    getDefaultColumnDef: () => {
      return {
        sortingFn: "auto"
      };
    },
    getDefaultOptions: (table) => {
      return {
        onSortingChange: makeStateUpdater("sorting", table),
        isMultiSortEvent: (e6) => {
          return e6.shiftKey;
        }
      };
    },
    createColumn: (column, table) => {
      return {
        getAutoSortingFn: () => {
          const firstRows = table.getFilteredRowModel().flatRows.slice(10);
          let isString = false;
          for (const row of firstRows) {
            const value = row == null ? void 0 : row.getValue(column.id);
            if (Object.prototype.toString.call(value) === "[object Date]") {
              return sortingFns.datetime;
            }
            if (typeof value === "string") {
              isString = true;
              if (value.split(reSplitAlphaNumeric).length > 1) {
                return sortingFns.alphanumeric;
              }
            }
          }
          if (isString) {
            return sortingFns.text;
          }
          return sortingFns.basic;
        },
        getAutoSortDir: () => {
          const firstRow = table.getFilteredRowModel().flatRows[0];
          const value = firstRow == null ? void 0 : firstRow.getValue(column.id);
          if (typeof value === "string") {
            return "asc";
          }
          return "desc";
        },
        getSortingFn: () => {
          var _table$options$sortin, _table$options$sortin2;
          if (!column) {
            throw new Error();
          }
          return isFunction2(column.columnDef.sortingFn) ? column.columnDef.sortingFn : column.columnDef.sortingFn === "auto" ? column.getAutoSortingFn() : (_table$options$sortin = (_table$options$sortin2 = table.options.sortingFns) == null ? void 0 : _table$options$sortin2[column.columnDef.sortingFn]) != null ? _table$options$sortin : sortingFns[column.columnDef.sortingFn];
        },
        toggleSorting: (desc, multi) => {
          const nextSortingOrder = column.getNextSortingOrder();
          const hasManualValue = typeof desc !== "undefined" && desc !== null;
          table.setSorting((old) => {
            const existingSorting = old == null ? void 0 : old.find((d5) => d5.id === column.id);
            const existingIndex = old == null ? void 0 : old.findIndex((d5) => d5.id === column.id);
            let newSorting = [];
            let sortAction;
            let nextDesc = hasManualValue ? desc : nextSortingOrder === "desc";
            if (old != null && old.length && column.getCanMultiSort() && multi) {
              if (existingSorting) {
                sortAction = "toggle";
              } else {
                sortAction = "add";
              }
            } else {
              if (old != null && old.length && existingIndex !== old.length - 1) {
                sortAction = "replace";
              } else if (existingSorting) {
                sortAction = "toggle";
              } else {
                sortAction = "replace";
              }
            }
            if (sortAction === "toggle") {
              if (!hasManualValue) {
                if (!nextSortingOrder) {
                  sortAction = "remove";
                }
              }
            }
            if (sortAction === "add") {
              var _table$options$maxMul;
              newSorting = [...old, {
                id: column.id,
                desc: nextDesc
              }];
              newSorting.splice(0, newSorting.length - ((_table$options$maxMul = table.options.maxMultiSortColCount) != null ? _table$options$maxMul : Number.MAX_SAFE_INTEGER));
            } else if (sortAction === "toggle") {
              newSorting = old.map((d5) => {
                if (d5.id === column.id) {
                  return {
                    ...d5,
                    desc: nextDesc
                  };
                }
                return d5;
              });
            } else if (sortAction === "remove") {
              newSorting = old.filter((d5) => d5.id !== column.id);
            } else {
              newSorting = [{
                id: column.id,
                desc: nextDesc
              }];
            }
            return newSorting;
          });
        },
        getFirstSortDir: () => {
          var _ref, _column$columnDef$sor;
          const sortDescFirst = (_ref = (_column$columnDef$sor = column.columnDef.sortDescFirst) != null ? _column$columnDef$sor : table.options.sortDescFirst) != null ? _ref : column.getAutoSortDir() === "desc";
          return sortDescFirst ? "desc" : "asc";
        },
        getNextSortingOrder: (multi) => {
          var _table$options$enable, _table$options$enable2;
          const firstSortDirection = column.getFirstSortDir();
          const isSorted = column.getIsSorted();
          if (!isSorted) {
            return firstSortDirection;
          }
          if (isSorted !== firstSortDirection && ((_table$options$enable = table.options.enableSortingRemoval) != null ? _table$options$enable : true) && // If enableSortRemove, enable in general
          (multi ? (_table$options$enable2 = table.options.enableMultiRemove) != null ? _table$options$enable2 : true : true)) {
            return false;
          }
          return isSorted === "desc" ? "asc" : "desc";
        },
        getCanSort: () => {
          var _column$columnDef$ena, _table$options$enable3;
          return ((_column$columnDef$ena = column.columnDef.enableSorting) != null ? _column$columnDef$ena : true) && ((_table$options$enable3 = table.options.enableSorting) != null ? _table$options$enable3 : true) && !!column.accessorFn;
        },
        getCanMultiSort: () => {
          var _ref2, _column$columnDef$ena2;
          return (_ref2 = (_column$columnDef$ena2 = column.columnDef.enableMultiSort) != null ? _column$columnDef$ena2 : table.options.enableMultiSort) != null ? _ref2 : !!column.accessorFn;
        },
        getIsSorted: () => {
          var _table$getState$sorti;
          const columnSort = (_table$getState$sorti = table.getState().sorting) == null ? void 0 : _table$getState$sorti.find((d5) => d5.id === column.id);
          return !columnSort ? false : columnSort.desc ? "desc" : "asc";
        },
        getSortIndex: () => {
          var _table$getState$sorti2, _table$getState$sorti3;
          return (_table$getState$sorti2 = (_table$getState$sorti3 = table.getState().sorting) == null ? void 0 : _table$getState$sorti3.findIndex((d5) => d5.id === column.id)) != null ? _table$getState$sorti2 : -1;
        },
        clearSorting: () => {
          table.setSorting((old) => old != null && old.length ? old.filter((d5) => d5.id !== column.id) : []);
        },
        getToggleSortingHandler: () => {
          const canSort = column.getCanSort();
          return (e6) => {
            if (!canSort)
              return;
            e6.persist == null ? void 0 : e6.persist();
            column.toggleSorting == null ? void 0 : column.toggleSorting(void 0, column.getCanMultiSort() ? table.options.isMultiSortEvent == null ? void 0 : table.options.isMultiSortEvent(e6) : false);
          };
        }
      };
    },
    createTable: (table) => {
      return {
        setSorting: (updater) => table.options.onSortingChange == null ? void 0 : table.options.onSortingChange(updater),
        resetSorting: (defaultState) => {
          var _table$initialState$s, _table$initialState;
          table.setSorting(defaultState ? [] : (_table$initialState$s = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.sorting) != null ? _table$initialState$s : []);
        },
        getPreSortedRowModel: () => table.getGroupedRowModel(),
        getSortedRowModel: () => {
          if (!table._getSortedRowModel && table.options.getSortedRowModel) {
            table._getSortedRowModel = table.options.getSortedRowModel(table);
          }
          if (table.options.manualSorting || !table._getSortedRowModel) {
            return table.getPreSortedRowModel();
          }
          return table._getSortedRowModel();
        }
      };
    }
  };
  var Visibility = {
    getInitialState: (state) => {
      return {
        columnVisibility: {},
        ...state
      };
    },
    getDefaultOptions: (table) => {
      return {
        onColumnVisibilityChange: makeStateUpdater("columnVisibility", table)
      };
    },
    createColumn: (column, table) => {
      return {
        toggleVisibility: (value) => {
          if (column.getCanHide()) {
            table.setColumnVisibility((old) => ({
              ...old,
              [column.id]: value != null ? value : !column.getIsVisible()
            }));
          }
        },
        getIsVisible: () => {
          var _table$getState$colum, _table$getState$colum2;
          return (_table$getState$colum = (_table$getState$colum2 = table.getState().columnVisibility) == null ? void 0 : _table$getState$colum2[column.id]) != null ? _table$getState$colum : true;
        },
        getCanHide: () => {
          var _column$columnDef$ena, _table$options$enable;
          return ((_column$columnDef$ena = column.columnDef.enableHiding) != null ? _column$columnDef$ena : true) && ((_table$options$enable = table.options.enableHiding) != null ? _table$options$enable : true);
        },
        getToggleVisibilityHandler: () => {
          return (e6) => {
            column.toggleVisibility == null ? void 0 : column.toggleVisibility(e6.target.checked);
          };
        }
      };
    },
    createRow: (row, table) => {
      return {
        _getAllVisibleCells: memo(() => [row.getAllCells(), table.getState().columnVisibility], (cells) => {
          return cells.filter((cell) => cell.column.getIsVisible());
        }, {
          key: false,
          debug: () => {
            var _table$options$debugA;
            return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugRows;
          }
        }),
        getVisibleCells: memo(() => [row.getLeftVisibleCells(), row.getCenterVisibleCells(), row.getRightVisibleCells()], (left, center, right) => [...left, ...center, ...right], {
          key: "row.getVisibleCells",
          debug: () => {
            var _table$options$debugA2;
            return (_table$options$debugA2 = table.options.debugAll) != null ? _table$options$debugA2 : table.options.debugRows;
          }
        })
      };
    },
    createTable: (table) => {
      const makeVisibleColumnsMethod = (key, getColumns) => {
        return memo(() => [getColumns(), getColumns().filter((d5) => d5.getIsVisible()).map((d5) => d5.id).join("_")], (columns) => {
          return columns.filter((d5) => d5.getIsVisible == null ? void 0 : d5.getIsVisible());
        }, {
          key,
          debug: () => {
            var _table$options$debugA3;
            return (_table$options$debugA3 = table.options.debugAll) != null ? _table$options$debugA3 : table.options.debugColumns;
          }
        });
      };
      return {
        getVisibleFlatColumns: makeVisibleColumnsMethod("getVisibleFlatColumns", () => table.getAllFlatColumns()),
        getVisibleLeafColumns: makeVisibleColumnsMethod("getVisibleLeafColumns", () => table.getAllLeafColumns()),
        getLeftVisibleLeafColumns: makeVisibleColumnsMethod("getLeftVisibleLeafColumns", () => table.getLeftLeafColumns()),
        getRightVisibleLeafColumns: makeVisibleColumnsMethod("getRightVisibleLeafColumns", () => table.getRightLeafColumns()),
        getCenterVisibleLeafColumns: makeVisibleColumnsMethod("getCenterVisibleLeafColumns", () => table.getCenterLeafColumns()),
        setColumnVisibility: (updater) => table.options.onColumnVisibilityChange == null ? void 0 : table.options.onColumnVisibilityChange(updater),
        resetColumnVisibility: (defaultState) => {
          var _table$initialState$c;
          table.setColumnVisibility(defaultState ? {} : (_table$initialState$c = table.initialState.columnVisibility) != null ? _table$initialState$c : {});
        },
        toggleAllColumnsVisible: (value) => {
          var _value;
          value = (_value = value) != null ? _value : !table.getIsAllColumnsVisible();
          table.setColumnVisibility(table.getAllLeafColumns().reduce((obj, column) => ({
            ...obj,
            [column.id]: !value ? !(column.getCanHide != null && column.getCanHide()) : value
          }), {}));
        },
        getIsAllColumnsVisible: () => !table.getAllLeafColumns().some((column) => !(column.getIsVisible != null && column.getIsVisible())),
        getIsSomeColumnsVisible: () => table.getAllLeafColumns().some((column) => column.getIsVisible == null ? void 0 : column.getIsVisible()),
        getToggleAllColumnsVisibilityHandler: () => {
          return (e6) => {
            var _target;
            table.toggleAllColumnsVisible((_target = e6.target) == null ? void 0 : _target.checked);
          };
        }
      };
    }
  };
  var features = [Headers, Visibility, Ordering, Pinning, Filters, Sorting, Grouping, Expanding, Pagination, RowSelection, ColumnSizing];
  function createTable(options) {
    var _options$initialState;
    if (options.debugAll || options.debugTable) {
      console.info("Creating Table Instance...");
    }
    let table = {
      _features: features
    };
    const defaultOptions = table._features.reduce((obj, feature) => {
      return Object.assign(obj, feature.getDefaultOptions == null ? void 0 : feature.getDefaultOptions(table));
    }, {});
    const mergeOptions = (options2) => {
      if (table.options.mergeOptions) {
        return table.options.mergeOptions(defaultOptions, options2);
      }
      return {
        ...defaultOptions,
        ...options2
      };
    };
    const coreInitialState = {};
    let initialState = {
      ...coreInitialState,
      ...(_options$initialState = options.initialState) != null ? _options$initialState : {}
    };
    table._features.forEach((feature) => {
      var _feature$getInitialSt;
      initialState = (_feature$getInitialSt = feature.getInitialState == null ? void 0 : feature.getInitialState(initialState)) != null ? _feature$getInitialSt : initialState;
    });
    const queued = [];
    let queuedTimeout = false;
    const coreInstance = {
      _features: features,
      options: {
        ...defaultOptions,
        ...options
      },
      initialState,
      _queue: (cb) => {
        queued.push(cb);
        if (!queuedTimeout) {
          queuedTimeout = true;
          Promise.resolve().then(() => {
            while (queued.length) {
              queued.shift()();
            }
            queuedTimeout = false;
          }).catch((error) => setTimeout(() => {
            throw error;
          }));
        }
      },
      reset: () => {
        table.setState(table.initialState);
      },
      setOptions: (updater) => {
        const newOptions = functionalUpdate(updater, table.options);
        table.options = mergeOptions(newOptions);
      },
      getState: () => {
        return table.options.state;
      },
      setState: (updater) => {
        table.options.onStateChange == null ? void 0 : table.options.onStateChange(updater);
      },
      _getRowId: (row, index, parent) => {
        var _table$options$getRow;
        return (_table$options$getRow = table.options.getRowId == null ? void 0 : table.options.getRowId(row, index, parent)) != null ? _table$options$getRow : `${parent ? [parent.id, index].join(".") : index}`;
      },
      getCoreRowModel: () => {
        if (!table._getCoreRowModel) {
          table._getCoreRowModel = table.options.getCoreRowModel(table);
        }
        return table._getCoreRowModel();
      },
      // The final calls start at the bottom of the model,
      // expanded rows, which then work their way up
      getRowModel: () => {
        return table.getPaginationRowModel();
      },
      getRow: (id) => {
        const row = table.getRowModel().rowsById[id];
        if (!row) {
          if (true) {
            throw new Error(`getRow expected an ID, but got ${id}`);
          }
          throw new Error();
        }
        return row;
      },
      _getDefaultColumnDef: memo(() => [table.options.defaultColumn], (defaultColumn2) => {
        var _defaultColumn;
        defaultColumn2 = (_defaultColumn = defaultColumn2) != null ? _defaultColumn : {};
        return {
          header: (props) => {
            const resolvedColumnDef = props.header.column.columnDef;
            if (resolvedColumnDef.accessorKey) {
              return resolvedColumnDef.accessorKey;
            }
            if (resolvedColumnDef.accessorFn) {
              return resolvedColumnDef.id;
            }
            return null;
          },
          // footer: props => props.header.column.id,
          cell: (props) => {
            var _props$renderValue$to, _props$renderValue;
            return (_props$renderValue$to = (_props$renderValue = props.renderValue()) == null ? void 0 : _props$renderValue.toString == null ? void 0 : _props$renderValue.toString()) != null ? _props$renderValue$to : null;
          },
          ...table._features.reduce((obj, feature) => {
            return Object.assign(obj, feature.getDefaultColumnDef == null ? void 0 : feature.getDefaultColumnDef());
          }, {}),
          ...defaultColumn2
        };
      }, {
        debug: () => {
          var _table$options$debugA;
          return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugColumns;
        },
        key: "getDefaultColumnDef"
      }),
      _getColumnDefs: () => table.options.columns,
      getAllColumns: memo(() => [table._getColumnDefs()], (columnDefs) => {
        const recurseColumns = function(columnDefs2, parent, depth) {
          if (depth === void 0) {
            depth = 0;
          }
          return columnDefs2.map((columnDef) => {
            const column = createColumn(table, columnDef, depth, parent);
            const groupingColumnDef = columnDef;
            column.columns = groupingColumnDef.columns ? recurseColumns(groupingColumnDef.columns, column, depth + 1) : [];
            return column;
          });
        };
        return recurseColumns(columnDefs);
      }, {
        key: "getAllColumns",
        debug: () => {
          var _table$options$debugA2;
          return (_table$options$debugA2 = table.options.debugAll) != null ? _table$options$debugA2 : table.options.debugColumns;
        }
      }),
      getAllFlatColumns: memo(() => [table.getAllColumns()], (allColumns) => {
        return allColumns.flatMap((column) => {
          return column.getFlatColumns();
        });
      }, {
        key: "getAllFlatColumns",
        debug: () => {
          var _table$options$debugA3;
          return (_table$options$debugA3 = table.options.debugAll) != null ? _table$options$debugA3 : table.options.debugColumns;
        }
      }),
      _getAllFlatColumnsById: memo(() => [table.getAllFlatColumns()], (flatColumns) => {
        return flatColumns.reduce((acc, column) => {
          acc[column.id] = column;
          return acc;
        }, {});
      }, {
        key: "getAllFlatColumnsById",
        debug: () => {
          var _table$options$debugA4;
          return (_table$options$debugA4 = table.options.debugAll) != null ? _table$options$debugA4 : table.options.debugColumns;
        }
      }),
      getAllLeafColumns: memo(() => [table.getAllColumns(), table._getOrderColumnsFn()], (allColumns, orderColumns2) => {
        let leafColumns = allColumns.flatMap((column) => column.getLeafColumns());
        return orderColumns2(leafColumns);
      }, {
        key: "getAllLeafColumns",
        debug: () => {
          var _table$options$debugA5;
          return (_table$options$debugA5 = table.options.debugAll) != null ? _table$options$debugA5 : table.options.debugColumns;
        }
      }),
      getColumn: (columnId) => {
        const column = table._getAllFlatColumnsById()[columnId];
        if (!column) {
          console.error(`[Table] Column with id '${columnId}' does not exist.`);
        }
        return column;
      }
    };
    Object.assign(table, coreInstance);
    table._features.forEach((feature) => {
      return Object.assign(table, feature.createTable == null ? void 0 : feature.createTable(table));
    });
    return table;
  }
  function createCell(table, row, column, columnId) {
    const getRenderValue = () => {
      var _cell$getValue;
      return (_cell$getValue = cell.getValue()) != null ? _cell$getValue : table.options.renderFallbackValue;
    };
    const cell = {
      id: `${row.id}_${column.id}`,
      row,
      column,
      getValue: () => row.getValue(columnId),
      renderValue: getRenderValue,
      getContext: memo(() => [table, column, row, cell], (table2, column2, row2, cell2) => ({
        table: table2,
        column: column2,
        row: row2,
        cell: cell2,
        getValue: cell2.getValue,
        renderValue: cell2.renderValue
      }), {
        key: "cell.getContext",
        debug: () => table.options.debugAll
      })
    };
    table._features.forEach((feature) => {
      Object.assign(cell, feature.createCell == null ? void 0 : feature.createCell(cell, column, row, table));
    }, {});
    return cell;
  }
  var createRow = (table, id, original, rowIndex, depth, subRows, parentId) => {
    let row = {
      id,
      index: rowIndex,
      original,
      depth,
      parentId,
      _valuesCache: {},
      _uniqueValuesCache: {},
      getValue: (columnId) => {
        if (row._valuesCache.hasOwnProperty(columnId)) {
          return row._valuesCache[columnId];
        }
        const column = table.getColumn(columnId);
        if (!(column != null && column.accessorFn)) {
          return void 0;
        }
        row._valuesCache[columnId] = column.accessorFn(row.original, rowIndex);
        return row._valuesCache[columnId];
      },
      getUniqueValues: (columnId) => {
        if (row._uniqueValuesCache.hasOwnProperty(columnId)) {
          return row._uniqueValuesCache[columnId];
        }
        const column = table.getColumn(columnId);
        if (!(column != null && column.accessorFn)) {
          return void 0;
        }
        if (!column.columnDef.getUniqueValues) {
          row._uniqueValuesCache[columnId] = [row.getValue(columnId)];
          return row._uniqueValuesCache[columnId];
        }
        row._uniqueValuesCache[columnId] = column.columnDef.getUniqueValues(row.original, rowIndex);
        return row._uniqueValuesCache[columnId];
      },
      renderValue: (columnId) => {
        var _row$getValue;
        return (_row$getValue = row.getValue(columnId)) != null ? _row$getValue : table.options.renderFallbackValue;
      },
      subRows: subRows != null ? subRows : [],
      getLeafRows: () => flattenBy(row.subRows, (d5) => d5.subRows),
      getParentRow: () => row.parentId ? table.getRow(row.parentId) : void 0,
      getParentRows: () => {
        let parentRows = [];
        let currentRow = row;
        while (true) {
          const parentRow = currentRow.getParentRow();
          if (!parentRow)
            break;
          parentRows.push(parentRow);
          currentRow = parentRow;
        }
        return parentRows.reverse();
      },
      getAllCells: memo(() => [table.getAllLeafColumns()], (leafColumns) => {
        return leafColumns.map((column) => {
          return createCell(table, row, column, column.id);
        });
      }, {
        key: "row.getAllCells",
        debug: () => {
          var _table$options$debugA;
          return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugRows;
        }
      }),
      _getAllCellsByColumnId: memo(() => [row.getAllCells()], (allCells) => {
        return allCells.reduce((acc, cell) => {
          acc[cell.column.id] = cell;
          return acc;
        }, {});
      }, {
        key: false,
        debug: () => {
          var _table$options$debugA2;
          return (_table$options$debugA2 = table.options.debugAll) != null ? _table$options$debugA2 : table.options.debugRows;
        }
      })
    };
    for (let i5 = 0; i5 < table._features.length; i5++) {
      const feature = table._features[i5];
      Object.assign(row, feature == null ? void 0 : feature.createRow == null ? void 0 : feature.createRow(row, table));
    }
    return row;
  };
  function getCoreRowModel() {
    return (table) => memo(() => [table.options.data], (data) => {
      const rowModel = {
        rows: [],
        flatRows: [],
        rowsById: {}
      };
      const accessRows = function(originalRows, depth, parentRow) {
        if (depth === void 0) {
          depth = 0;
        }
        const rows = [];
        for (let i5 = 0; i5 < originalRows.length; i5++) {
          const row = createRow(table, table._getRowId(originalRows[i5], i5, parentRow), originalRows[i5], i5, depth, void 0, parentRow == null ? void 0 : parentRow.id);
          rowModel.flatRows.push(row);
          rowModel.rowsById[row.id] = row;
          rows.push(row);
          if (table.options.getSubRows) {
            var _row$originalSubRows;
            row.originalSubRows = table.options.getSubRows(originalRows[i5], i5);
            if ((_row$originalSubRows = row.originalSubRows) != null && _row$originalSubRows.length) {
              row.subRows = accessRows(row.originalSubRows, depth + 1, row);
            }
          }
        }
        return rows;
      };
      rowModel.rows = accessRows(data);
      return rowModel;
    }, {
      key: "getRowModel",
      debug: () => {
        var _table$options$debugA;
        return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugTable;
      },
      onChange: () => {
        table._autoResetPageIndex();
      }
    });
  }
  function filterRows(rows, filterRowImpl, table) {
    if (table.options.filterFromLeafRows) {
      return filterRowModelFromLeafs(rows, filterRowImpl, table);
    }
    return filterRowModelFromRoot(rows, filterRowImpl, table);
  }
  function filterRowModelFromLeafs(rowsToFilter, filterRow, table) {
    var _table$options$maxLea;
    const newFilteredFlatRows = [];
    const newFilteredRowsById = {};
    const maxDepth = (_table$options$maxLea = table.options.maxLeafRowFilterDepth) != null ? _table$options$maxLea : 100;
    const recurseFilterRows = function(rowsToFilter2, depth) {
      if (depth === void 0) {
        depth = 0;
      }
      const rows = [];
      for (let i5 = 0; i5 < rowsToFilter2.length; i5++) {
        var _row$subRows;
        let row = rowsToFilter2[i5];
        const newRow = createRow(table, row.id, row.original, row.index, row.depth, void 0, row.parentId);
        newRow.columnFilters = row.columnFilters;
        if ((_row$subRows = row.subRows) != null && _row$subRows.length && depth < maxDepth) {
          newRow.subRows = recurseFilterRows(row.subRows, depth + 1);
          row = newRow;
          if (filterRow(row) && !newRow.subRows.length) {
            rows.push(row);
            newFilteredRowsById[row.id] = row;
            newFilteredRowsById[i5] = row;
            continue;
          }
          if (filterRow(row) || newRow.subRows.length) {
            rows.push(row);
            newFilteredRowsById[row.id] = row;
            newFilteredRowsById[i5] = row;
            continue;
          }
        } else {
          row = newRow;
          if (filterRow(row)) {
            rows.push(row);
            newFilteredRowsById[row.id] = row;
            newFilteredRowsById[i5] = row;
          }
        }
      }
      return rows;
    };
    return {
      rows: recurseFilterRows(rowsToFilter),
      flatRows: newFilteredFlatRows,
      rowsById: newFilteredRowsById
    };
  }
  function filterRowModelFromRoot(rowsToFilter, filterRow, table) {
    var _table$options$maxLea2;
    const newFilteredFlatRows = [];
    const newFilteredRowsById = {};
    const maxDepth = (_table$options$maxLea2 = table.options.maxLeafRowFilterDepth) != null ? _table$options$maxLea2 : 100;
    const recurseFilterRows = function(rowsToFilter2, depth) {
      if (depth === void 0) {
        depth = 0;
      }
      const rows = [];
      for (let i5 = 0; i5 < rowsToFilter2.length; i5++) {
        let row = rowsToFilter2[i5];
        const pass = filterRow(row);
        if (pass) {
          var _row$subRows2;
          if ((_row$subRows2 = row.subRows) != null && _row$subRows2.length && depth < maxDepth) {
            const newRow = createRow(table, row.id, row.original, row.index, row.depth, void 0, row.parentId);
            newRow.subRows = recurseFilterRows(row.subRows, depth + 1);
            row = newRow;
          }
          rows.push(row);
          newFilteredFlatRows.push(row);
          newFilteredRowsById[row.id] = row;
        }
      }
      return rows;
    };
    return {
      rows: recurseFilterRows(rowsToFilter),
      flatRows: newFilteredFlatRows,
      rowsById: newFilteredRowsById
    };
  }
  function getFilteredRowModel() {
    return (table) => memo(() => [table.getPreFilteredRowModel(), table.getState().columnFilters, table.getState().globalFilter], (rowModel, columnFilters, globalFilter) => {
      if (!rowModel.rows.length || !(columnFilters != null && columnFilters.length) && !globalFilter) {
        for (let i5 = 0; i5 < rowModel.flatRows.length; i5++) {
          rowModel.flatRows[i5].columnFilters = {};
          rowModel.flatRows[i5].columnFiltersMeta = {};
        }
        return rowModel;
      }
      const resolvedColumnFilters = [];
      const resolvedGlobalFilters = [];
      (columnFilters != null ? columnFilters : []).forEach((d5) => {
        var _filterFn$resolveFilt;
        const column = table.getColumn(d5.id);
        if (!column) {
          return;
        }
        const filterFn = column.getFilterFn();
        if (!filterFn) {
          if (true) {
            console.warn(`Could not find a valid 'column.filterFn' for column with the ID: ${column.id}.`);
          }
          return;
        }
        resolvedColumnFilters.push({
          id: d5.id,
          filterFn,
          resolvedValue: (_filterFn$resolveFilt = filterFn.resolveFilterValue == null ? void 0 : filterFn.resolveFilterValue(d5.value)) != null ? _filterFn$resolveFilt : d5.value
        });
      });
      const filterableIds = columnFilters.map((d5) => d5.id);
      const globalFilterFn = table.getGlobalFilterFn();
      const globallyFilterableColumns = table.getAllLeafColumns().filter((column) => column.getCanGlobalFilter());
      if (globalFilter && globalFilterFn && globallyFilterableColumns.length) {
        filterableIds.push("__global__");
        globallyFilterableColumns.forEach((column) => {
          var _globalFilterFn$resol;
          resolvedGlobalFilters.push({
            id: column.id,
            filterFn: globalFilterFn,
            resolvedValue: (_globalFilterFn$resol = globalFilterFn.resolveFilterValue == null ? void 0 : globalFilterFn.resolveFilterValue(globalFilter)) != null ? _globalFilterFn$resol : globalFilter
          });
        });
      }
      let currentColumnFilter;
      let currentGlobalFilter;
      for (let j5 = 0; j5 < rowModel.flatRows.length; j5++) {
        const row = rowModel.flatRows[j5];
        row.columnFilters = {};
        if (resolvedColumnFilters.length) {
          for (let i5 = 0; i5 < resolvedColumnFilters.length; i5++) {
            currentColumnFilter = resolvedColumnFilters[i5];
            const id = currentColumnFilter.id;
            row.columnFilters[id] = currentColumnFilter.filterFn(row, id, currentColumnFilter.resolvedValue, (filterMeta) => {
              row.columnFiltersMeta[id] = filterMeta;
            });
          }
        }
        if (resolvedGlobalFilters.length) {
          for (let i5 = 0; i5 < resolvedGlobalFilters.length; i5++) {
            currentGlobalFilter = resolvedGlobalFilters[i5];
            const id = currentGlobalFilter.id;
            if (currentGlobalFilter.filterFn(row, id, currentGlobalFilter.resolvedValue, (filterMeta) => {
              row.columnFiltersMeta[id] = filterMeta;
            })) {
              row.columnFilters.__global__ = true;
              break;
            }
          }
          if (row.columnFilters.__global__ !== true) {
            row.columnFilters.__global__ = false;
          }
        }
      }
      const filterRowsImpl = (row) => {
        for (let i5 = 0; i5 < filterableIds.length; i5++) {
          if (row.columnFilters[filterableIds[i5]] === false) {
            return false;
          }
        }
        return true;
      };
      return filterRows(rowModel.rows, filterRowsImpl, table);
    }, {
      key: "getFilteredRowModel",
      debug: () => {
        var _table$options$debugA;
        return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugTable;
      },
      onChange: () => {
        table._autoResetPageIndex();
      }
    });
  }
  function getSortedRowModel() {
    return (table) => memo(() => [table.getState().sorting, table.getPreSortedRowModel()], (sorting, rowModel) => {
      if (!rowModel.rows.length || !(sorting != null && sorting.length)) {
        return rowModel;
      }
      const sortingState = table.getState().sorting;
      const sortedFlatRows = [];
      const availableSorting = sortingState.filter((sort) => {
        var _table$getColumn;
        return (_table$getColumn = table.getColumn(sort.id)) == null ? void 0 : _table$getColumn.getCanSort();
      });
      const columnInfoById = {};
      availableSorting.forEach((sortEntry) => {
        const column = table.getColumn(sortEntry.id);
        if (!column)
          return;
        columnInfoById[sortEntry.id] = {
          sortUndefined: column.columnDef.sortUndefined,
          invertSorting: column.columnDef.invertSorting,
          sortingFn: column.getSortingFn()
        };
      });
      const sortData = (rows) => {
        const sortedData = [...rows];
        sortedData.sort((rowA, rowB) => {
          for (let i5 = 0; i5 < availableSorting.length; i5 += 1) {
            var _sortEntry$desc;
            const sortEntry = availableSorting[i5];
            const columnInfo = columnInfoById[sortEntry.id];
            const isDesc = (_sortEntry$desc = sortEntry == null ? void 0 : sortEntry.desc) != null ? _sortEntry$desc : false;
            if (columnInfo.sortUndefined) {
              const aValue = rowA.getValue(sortEntry.id);
              const bValue = rowB.getValue(sortEntry.id);
              const aUndefined = typeof aValue === "undefined";
              const bUndefined = typeof bValue === "undefined";
              if (aUndefined || bUndefined) {
                return aUndefined && bUndefined ? 0 : aUndefined ? columnInfo.sortUndefined : -columnInfo.sortUndefined;
              }
            }
            let sortInt = columnInfo.sortingFn(rowA, rowB, sortEntry.id);
            if (sortInt !== 0) {
              if (isDesc) {
                sortInt *= -1;
              }
              if (columnInfo.invertSorting) {
                sortInt *= -1;
              }
              return sortInt;
            }
          }
          return rowA.index - rowB.index;
        });
        sortedData.forEach((row) => {
          var _row$subRows;
          sortedFlatRows.push(row);
          if ((_row$subRows = row.subRows) != null && _row$subRows.length) {
            row.subRows = sortData(row.subRows);
          }
        });
        return sortedData;
      };
      return {
        rows: sortData(rowModel.rows),
        flatRows: sortedFlatRows,
        rowsById: rowModel.rowsById
      };
    }, {
      key: "getSortedRowModel",
      debug: () => {
        var _table$options$debugA;
        return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugTable;
      },
      onChange: () => {
        table._autoResetPageIndex();
      }
    });
  }
  function expandRows(rowModel) {
    const expandedRows = [];
    const handleRow = (row) => {
      var _row$subRows;
      expandedRows.push(row);
      if ((_row$subRows = row.subRows) != null && _row$subRows.length && row.getIsExpanded()) {
        row.subRows.forEach(handleRow);
      }
    };
    rowModel.rows.forEach(handleRow);
    return {
      rows: expandedRows,
      flatRows: rowModel.flatRows,
      rowsById: rowModel.rowsById
    };
  }
  function getPaginationRowModel(opts) {
    return (table) => memo(() => [table.getState().pagination, table.getPrePaginationRowModel(), table.options.paginateExpandedRows ? void 0 : table.getState().expanded], (pagination, rowModel) => {
      if (!rowModel.rows.length) {
        return rowModel;
      }
      const {
        pageSize,
        pageIndex
      } = pagination;
      let {
        rows,
        flatRows,
        rowsById
      } = rowModel;
      const pageStart = pageSize * pageIndex;
      const pageEnd = pageStart + pageSize;
      rows = rows.slice(pageStart, pageEnd);
      let paginatedRowModel;
      if (!table.options.paginateExpandedRows) {
        paginatedRowModel = expandRows({
          rows,
          flatRows,
          rowsById
        });
      } else {
        paginatedRowModel = {
          rows,
          flatRows,
          rowsById
        };
      }
      paginatedRowModel.flatRows = [];
      const handleRow = (row) => {
        paginatedRowModel.flatRows.push(row);
        if (row.subRows.length) {
          row.subRows.forEach(handleRow);
        }
      };
      paginatedRowModel.rows.forEach(handleRow);
      return paginatedRowModel;
    }, {
      key: "getPaginationRowModel",
      debug: () => {
        var _table$options$debugA;
        return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugTable;
      }
    });
  }

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@tanstack/react-table/build/lib/index.mjs
  function flexRender(Comp, props) {
    return !Comp ? null : isReactComponent(Comp) ? /* @__PURE__ */ y2(Comp, props) : Comp;
  }
  function isReactComponent(component) {
    return isClassComponent(component) || typeof component === "function" || isExoticComponent(component);
  }
  function isClassComponent(component) {
    return typeof component === "function" && (() => {
      const proto = Object.getPrototypeOf(component);
      return proto.prototype && proto.prototype.isReactComponent;
    })();
  }
  function isExoticComponent(component) {
    return typeof component === "object" && typeof component.$$typeof === "symbol" && ["react.memo", "react.forward_ref"].includes(component.$$typeof.description);
  }
  function useReactTable(options) {
    const resolvedOptions = {
      state: {},
      // Dummy state
      onStateChange: () => {
      },
      // noop
      renderFallbackValue: null,
      ...options
    };
    const [tableRef] = h4(() => ({
      current: createTable(resolvedOptions)
    }));
    const [state, setState] = h4(() => tableRef.current.initialState);
    tableRef.current.setOptions((prev) => ({
      ...prev,
      ...options,
      state: {
        ...state,
        ...options.state
      },
      // Similarly, we'll maintain both our internal state and any user-provided
      // state.
      onStateChange: (updater) => {
        setState(updater);
        options.onStateChange == null ? void 0 : options.onStateChange(updater);
      }
    }));
    return tableRef.current;
  }

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@tanstack/react-virtual/build/lib/_virtual/_rollupPluginBabelHelpers.mjs
  function _extends10() {
    _extends10 = Object.assign ? Object.assign.bind() : function(target) {
      for (var i5 = 1; i5 < arguments.length; i5++) {
        var source = arguments[i5];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends10.apply(this, arguments);
  }

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@tanstack/react-virtual/build/lib/index.mjs
  init_react();

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@tanstack/virtual-core/build/lib/_virtual/_rollupPluginBabelHelpers.mjs
  function _extends11() {
    _extends11 = Object.assign ? Object.assign.bind() : function(target) {
      for (var i5 = 1; i5 < arguments.length; i5++) {
        var source = arguments[i5];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends11.apply(this, arguments);
  }

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@tanstack/virtual-core/build/lib/utils.mjs
  function memo2(getDeps, fn2, opts) {
    var _opts$initialDeps;
    var deps = (_opts$initialDeps = opts.initialDeps) != null ? _opts$initialDeps : [];
    var result;
    return function() {
      var depTime;
      if (opts.key && opts.debug != null && opts.debug())
        depTime = Date.now();
      var newDeps = getDeps();
      var depsChanged = newDeps.length !== deps.length || newDeps.some(function(dep, index) {
        return deps[index] !== dep;
      });
      if (!depsChanged) {
        return result;
      }
      deps = newDeps;
      var resultTime;
      if (opts.key && opts.debug != null && opts.debug())
        resultTime = Date.now();
      result = fn2.apply(void 0, newDeps);
      if (opts.key && opts.debug != null && opts.debug()) {
        var depEndTime = Math.round((Date.now() - depTime) * 100) / 100;
        var resultEndTime = Math.round((Date.now() - resultTime) * 100) / 100;
        var resultFpsPercentage = resultEndTime / 16;
        var pad = function pad3(str, num) {
          str = String(str);
          while (str.length < num) {
            str = " " + str;
          }
          return str;
        };
        console.info("%c\u23F1 " + pad(resultEndTime, 5) + " /" + pad(depEndTime, 5) + " ms", "\n            font-size: .6rem;\n            font-weight: bold;\n            color: hsl(" + Math.max(0, Math.min(120 - 120 * resultFpsPercentage, 120)) + "deg 100% 31%);", opts == null ? void 0 : opts.key);
      }
      opts == null ? void 0 : opts.onChange == null ? void 0 : opts.onChange(result);
      return result;
    };
  }
  function notUndefined(value, msg) {
    if (value === void 0) {
      throw new Error("Unexpected undefined" + (msg ? ": " + msg : ""));
    } else {
      return value;
    }
  }
  var approxEqual = function approxEqual2(a5, b4) {
    return Math.abs(a5 - b4) < 1;
  };

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@tanstack/virtual-core/build/lib/index.mjs
  var defaultKeyExtractor = function defaultKeyExtractor2(index) {
    return index;
  };
  var defaultRangeExtractor = function defaultRangeExtractor2(range) {
    var start = Math.max(range.startIndex - range.overscan, 0);
    var end = Math.min(range.endIndex + range.overscan, range.count - 1);
    var arr = [];
    for (var _i = start; _i <= end; _i++) {
      arr.push(_i);
    }
    return arr;
  };
  var observeElementRect = function observeElementRect2(instance, cb) {
    var element = instance.scrollElement;
    if (!element) {
      return;
    }
    var handler = function handler2(rect) {
      var width = rect.width, height = rect.height;
      cb({
        width: Math.round(width),
        height: Math.round(height)
      });
    };
    handler(element.getBoundingClientRect());
    var observer = new ResizeObserver(function(entries) {
      var entry = entries[0];
      if (entry != null && entry.borderBoxSize) {
        var box = entry.borderBoxSize[0];
        if (box) {
          handler({
            width: box.inlineSize,
            height: box.blockSize
          });
          return;
        }
      }
      handler(element.getBoundingClientRect());
    });
    observer.observe(element, {
      box: "border-box"
    });
    return function() {
      observer.unobserve(element);
    };
  };
  var observeElementOffset = function observeElementOffset2(instance, cb) {
    var element = instance.scrollElement;
    if (!element) {
      return;
    }
    var handler = function handler2() {
      cb(element[instance.options.horizontal ? "scrollLeft" : "scrollTop"]);
    };
    handler();
    element.addEventListener("scroll", handler, {
      passive: true
    });
    return function() {
      element.removeEventListener("scroll", handler);
    };
  };
  var measureElement = function measureElement2(element, entry, instance) {
    if (entry != null && entry.borderBoxSize) {
      var box = entry.borderBoxSize[0];
      if (box) {
        var size = Math.round(box[instance.options.horizontal ? "inlineSize" : "blockSize"]);
        return size;
      }
    }
    return Math.round(element.getBoundingClientRect()[instance.options.horizontal ? "width" : "height"]);
  };
  var elementScroll = function elementScroll2(offset, _ref2, instance) {
    var _instance$scrollEleme3, _instance$scrollEleme4;
    var _ref2$adjustments = _ref2.adjustments, adjustments = _ref2$adjustments === void 0 ? 0 : _ref2$adjustments, behavior = _ref2.behavior;
    var toOffset = offset + adjustments;
    (_instance$scrollEleme3 = instance.scrollElement) == null ? void 0 : _instance$scrollEleme3.scrollTo == null ? void 0 : _instance$scrollEleme3.scrollTo((_instance$scrollEleme4 = {}, _instance$scrollEleme4[instance.options.horizontal ? "left" : "top"] = toOffset, _instance$scrollEleme4.behavior = behavior, _instance$scrollEleme4));
  };
  var Virtualizer = function Virtualizer2(_opts) {
    var _this = this;
    this.unsubs = [];
    this.scrollElement = null;
    this.isScrolling = false;
    this.isScrollingTimeoutId = null;
    this.scrollToIndexTimeoutId = null;
    this.measurementsCache = [];
    this.itemSizeCache = /* @__PURE__ */ new Map();
    this.pendingMeasuredCacheIndexes = [];
    this.scrollDirection = null;
    this.scrollAdjustments = 0;
    this.measureElementCache = /* @__PURE__ */ new Map();
    this.observer = function() {
      var _ro = null;
      var get4 = function get5() {
        if (_ro) {
          return _ro;
        } else if (typeof ResizeObserver !== "undefined") {
          return _ro = new ResizeObserver(function(entries) {
            entries.forEach(function(entry) {
              _this._measureElement(entry.target, entry);
            });
          });
        } else {
          return null;
        }
      };
      return {
        disconnect: function disconnect() {
          var _get;
          return (_get = get4()) == null ? void 0 : _get.disconnect();
        },
        observe: function observe(target) {
          var _get2;
          return (_get2 = get4()) == null ? void 0 : _get2.observe(target, {
            box: "border-box"
          });
        },
        unobserve: function unobserve(target) {
          var _get3;
          return (_get3 = get4()) == null ? void 0 : _get3.unobserve(target);
        }
      };
    }();
    this.range = {
      startIndex: 0,
      endIndex: 0
    };
    this.setOptions = function(opts) {
      Object.entries(opts).forEach(function(_ref3) {
        var key = _ref3[0], value = _ref3[1];
        if (typeof value === "undefined")
          delete opts[key];
      });
      _this.options = _extends11({
        debug: false,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: false,
        getItemKey: defaultKeyExtractor,
        rangeExtractor: defaultRangeExtractor,
        onChange: function onChange() {
        },
        measureElement,
        initialRect: {
          width: 0,
          height: 0
        },
        scrollMargin: 0,
        scrollingDelay: 150,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1
      }, opts);
    };
    this.notify = function() {
      _this.options.onChange == null ? void 0 : _this.options.onChange(_this);
    };
    this.cleanup = function() {
      _this.unsubs.filter(Boolean).forEach(function(d5) {
        return d5();
      });
      _this.unsubs = [];
      _this.scrollElement = null;
    };
    this._didMount = function() {
      _this.measureElementCache.forEach(_this.observer.observe);
      return function() {
        _this.observer.disconnect();
        _this.cleanup();
      };
    };
    this._willUpdate = function() {
      var scrollElement = _this.options.getScrollElement();
      if (_this.scrollElement !== scrollElement) {
        _this.cleanup();
        _this.scrollElement = scrollElement;
        _this._scrollToOffset(_this.scrollOffset, {
          adjustments: void 0,
          behavior: void 0
        });
        _this.unsubs.push(_this.options.observeElementRect(_this, function(rect) {
          var prev = _this.scrollRect;
          _this.scrollRect = rect;
          if (_this.options.horizontal ? rect.width !== prev.width : rect.height !== prev.height) {
            _this.maybeNotify();
          }
        }));
        _this.unsubs.push(_this.options.observeElementOffset(_this, function(offset) {
          _this.scrollAdjustments = 0;
          if (_this.scrollOffset === offset) {
            return;
          }
          if (_this.isScrollingTimeoutId !== null) {
            clearTimeout(_this.isScrollingTimeoutId);
            _this.isScrollingTimeoutId = null;
          }
          _this.isScrolling = true;
          _this.scrollDirection = _this.scrollOffset < offset ? "forward" : "backward";
          _this.scrollOffset = offset;
          _this.maybeNotify();
          _this.isScrollingTimeoutId = setTimeout(function() {
            _this.isScrollingTimeoutId = null;
            _this.isScrolling = false;
            _this.scrollDirection = null;
            _this.maybeNotify();
          }, _this.options.scrollingDelay);
        }));
      }
    };
    this.getSize = function() {
      return _this.scrollRect[_this.options.horizontal ? "width" : "height"];
    };
    this.memoOptions = memo2(function() {
      return [_this.options.count, _this.options.paddingStart, _this.options.scrollMargin, _this.options.getItemKey];
    }, function(count2, paddingStart, scrollMargin, getItemKey) {
      _this.pendingMeasuredCacheIndexes = [];
      return {
        count: count2,
        paddingStart,
        scrollMargin,
        getItemKey
      };
    }, {
      key: false
    });
    this.getFurthestMeasurement = function(measurements, index) {
      var furthestMeasurementsFound = /* @__PURE__ */ new Map();
      var furthestMeasurements = /* @__PURE__ */ new Map();
      for (var m4 = index - 1; m4 >= 0; m4--) {
        var measurement = measurements[m4];
        if (furthestMeasurementsFound.has(measurement.lane)) {
          continue;
        }
        var previousFurthestMeasurement = furthestMeasurements.get(measurement.lane);
        if (previousFurthestMeasurement == null || measurement.end > previousFurthestMeasurement.end) {
          furthestMeasurements.set(measurement.lane, measurement);
        } else if (measurement.end < previousFurthestMeasurement.end) {
          furthestMeasurementsFound.set(measurement.lane, true);
        }
        if (furthestMeasurementsFound.size === _this.options.lanes) {
          break;
        }
      }
      return furthestMeasurements.size === _this.options.lanes ? Array.from(furthestMeasurements.values()).sort(function(a5, b4) {
        return a5.end - b4.end;
      })[0] : void 0;
    };
    this.getMeasurements = memo2(function() {
      return [_this.memoOptions(), _this.itemSizeCache];
    }, function(_ref4, itemSizeCache) {
      var count2 = _ref4.count, paddingStart = _ref4.paddingStart, scrollMargin = _ref4.scrollMargin, getItemKey = _ref4.getItemKey;
      var min2 = _this.pendingMeasuredCacheIndexes.length > 0 ? Math.min.apply(Math, _this.pendingMeasuredCacheIndexes) : 0;
      _this.pendingMeasuredCacheIndexes = [];
      var measurements = _this.measurementsCache.slice(0, min2);
      for (var _i2 = min2; _i2 < count2; _i2++) {
        var key = getItemKey(_i2);
        var furthestMeasurement = _this.options.lanes === 1 ? measurements[_i2 - 1] : _this.getFurthestMeasurement(measurements, _i2);
        var start = furthestMeasurement ? furthestMeasurement.end : paddingStart + scrollMargin;
        var measuredSize = itemSizeCache.get(key);
        var size = typeof measuredSize === "number" ? measuredSize : _this.options.estimateSize(_i2);
        var end = start + size;
        var lane = furthestMeasurement ? furthestMeasurement.lane : _i2 % _this.options.lanes;
        measurements[_i2] = {
          index: _i2,
          start,
          size,
          end,
          key,
          lane
        };
      }
      _this.measurementsCache = measurements;
      return measurements;
    }, {
      key: "getMeasurements",
      debug: function debug() {
        return _this.options.debug;
      }
    });
    this.calculateRange = memo2(function() {
      return [_this.getMeasurements(), _this.getSize(), _this.scrollOffset];
    }, function(measurements, outerSize, scrollOffset) {
      return _this.range = calculateRange({
        measurements,
        outerSize,
        scrollOffset
      });
    }, {
      key: "calculateRange",
      debug: function debug() {
        return _this.options.debug;
      }
    });
    this.maybeNotify = memo2(function() {
      var range = _this.calculateRange();
      return [range.startIndex, range.endIndex, _this.isScrolling];
    }, function() {
      _this.notify();
    }, {
      key: "maybeNotify",
      debug: function debug() {
        return _this.options.debug;
      },
      initialDeps: [this.range.startIndex, this.range.endIndex, this.isScrolling]
    });
    this.getIndexes = memo2(function() {
      return [_this.options.rangeExtractor, _this.calculateRange(), _this.options.overscan, _this.options.count];
    }, function(rangeExtractor, range, overscan, count2) {
      return rangeExtractor(_extends11({}, range, {
        overscan,
        count: count2
      }));
    }, {
      key: "getIndexes",
      debug: function debug() {
        return _this.options.debug;
      }
    });
    this.indexFromElement = function(node) {
      var attributeName = _this.options.indexAttribute;
      var indexStr = node.getAttribute(attributeName);
      if (!indexStr) {
        console.warn("Missing attribute name '" + attributeName + "={index}' on measured element.");
        return -1;
      }
      return parseInt(indexStr, 10);
    };
    this._measureElement = function(node, entry) {
      var _this$itemSizeCache$g;
      var index = _this.indexFromElement(node);
      var item = _this.measurementsCache[index];
      if (!item) {
        return;
      }
      var prevNode = _this.measureElementCache.get(item.key);
      if (!node.isConnected) {
        _this.observer.unobserve(node);
        if (node === prevNode) {
          _this.measureElementCache["delete"](item.key);
        }
        return;
      }
      if (prevNode !== node) {
        if (prevNode) {
          _this.observer.unobserve(prevNode);
        }
        _this.observer.observe(node);
        _this.measureElementCache.set(item.key, node);
      }
      var measuredItemSize = _this.options.measureElement(node, entry, _this);
      var itemSize = (_this$itemSizeCache$g = _this.itemSizeCache.get(item.key)) != null ? _this$itemSizeCache$g : item.size;
      var delta = measuredItemSize - itemSize;
      if (delta !== 0) {
        if (item.start < _this.scrollOffset) {
          if (_this.options.debug) {
            console.info("correction", delta);
          }
          _this._scrollToOffset(_this.scrollOffset, {
            adjustments: _this.scrollAdjustments += delta,
            behavior: void 0
          });
        }
        _this.pendingMeasuredCacheIndexes.push(index);
        _this.itemSizeCache = new Map(_this.itemSizeCache.set(item.key, measuredItemSize));
        _this.notify();
      }
    };
    this.measureElement = function(node) {
      if (!node) {
        return;
      }
      _this._measureElement(node, void 0);
    };
    this.getVirtualItems = memo2(function() {
      return [_this.getIndexes(), _this.getMeasurements()];
    }, function(indexes, measurements) {
      var virtualItems = [];
      for (var k5 = 0, len = indexes.length; k5 < len; k5++) {
        var _i3 = indexes[k5];
        var measurement = measurements[_i3];
        virtualItems.push(measurement);
      }
      return virtualItems;
    }, {
      key: "getIndexes",
      debug: function debug() {
        return _this.options.debug;
      }
    });
    this.getVirtualItemForOffset = function(offset) {
      var measurements = _this.getMeasurements();
      return notUndefined(measurements[findNearestBinarySearch(0, measurements.length - 1, function(index) {
        return notUndefined(measurements[index]).start;
      }, offset)]);
    };
    this.getOffsetForAlignment = function(toOffset, align) {
      var size = _this.getSize();
      if (align === "auto") {
        if (toOffset <= _this.scrollOffset) {
          align = "start";
        } else if (toOffset >= _this.scrollOffset + size) {
          align = "end";
        } else {
          align = "start";
        }
      }
      if (align === "start") {
        toOffset = toOffset;
      } else if (align === "end") {
        toOffset = toOffset - size;
      } else if (align === "center") {
        toOffset = toOffset - size / 2;
      }
      var scrollSizeProp = _this.options.horizontal ? "scrollWidth" : "scrollHeight";
      var scrollSize = _this.scrollElement ? "document" in _this.scrollElement ? _this.scrollElement.document.documentElement[scrollSizeProp] : _this.scrollElement[scrollSizeProp] : 0;
      var maxOffset = scrollSize - _this.getSize();
      return Math.max(Math.min(maxOffset, toOffset), 0);
    };
    this.getOffsetForIndex = function(index, align) {
      if (align === void 0) {
        align = "auto";
      }
      index = Math.max(0, Math.min(index, _this.options.count - 1));
      var measurement = notUndefined(_this.getMeasurements()[index]);
      if (align === "auto") {
        if (measurement.end >= _this.scrollOffset + _this.getSize() - _this.options.scrollPaddingEnd) {
          align = "end";
        } else if (measurement.start <= _this.scrollOffset + _this.options.scrollPaddingStart) {
          align = "start";
        } else {
          return [_this.scrollOffset, align];
        }
      }
      var toOffset = align === "end" ? measurement.end + _this.options.scrollPaddingEnd : measurement.start - _this.options.scrollPaddingStart;
      return [_this.getOffsetForAlignment(toOffset, align), align];
    };
    this.isDynamicMode = function() {
      return _this.measureElementCache.size > 0;
    };
    this.cancelScrollToIndex = function() {
      if (_this.scrollToIndexTimeoutId !== null) {
        clearTimeout(_this.scrollToIndexTimeoutId);
        _this.scrollToIndexTimeoutId = null;
      }
    };
    this.scrollToOffset = function(toOffset, _temp) {
      var _ref5 = _temp === void 0 ? {} : _temp, _ref5$align = _ref5.align, align = _ref5$align === void 0 ? "start" : _ref5$align, behavior = _ref5.behavior;
      _this.cancelScrollToIndex();
      if (behavior === "smooth" && _this.isDynamicMode()) {
        console.warn("The `smooth` scroll behavior is not fully supported with dynamic size.");
      }
      _this._scrollToOffset(_this.getOffsetForAlignment(toOffset, align), {
        adjustments: void 0,
        behavior
      });
    };
    this.scrollToIndex = function(index, _temp2) {
      var _ref6 = _temp2 === void 0 ? {} : _temp2, _ref6$align = _ref6.align, initialAlign = _ref6$align === void 0 ? "auto" : _ref6$align, behavior = _ref6.behavior;
      index = Math.max(0, Math.min(index, _this.options.count - 1));
      _this.cancelScrollToIndex();
      if (behavior === "smooth" && _this.isDynamicMode()) {
        console.warn("The `smooth` scroll behavior is not fully supported with dynamic size.");
      }
      var _this$getOffsetForInd = _this.getOffsetForIndex(index, initialAlign), toOffset = _this$getOffsetForInd[0], align = _this$getOffsetForInd[1];
      _this._scrollToOffset(toOffset, {
        adjustments: void 0,
        behavior
      });
      if (behavior !== "smooth" && _this.isDynamicMode()) {
        _this.scrollToIndexTimeoutId = setTimeout(function() {
          _this.scrollToIndexTimeoutId = null;
          var elementInDOM = _this.measureElementCache.has(_this.options.getItemKey(index));
          if (elementInDOM) {
            var _this$getOffsetForInd2 = _this.getOffsetForIndex(index, align), _toOffset = _this$getOffsetForInd2[0];
            if (!approxEqual(_toOffset, _this.scrollOffset)) {
              _this.scrollToIndex(index, {
                align,
                behavior
              });
            }
          } else {
            _this.scrollToIndex(index, {
              align,
              behavior
            });
          }
        });
      }
    };
    this.scrollBy = function(delta, _temp3) {
      var _ref7 = _temp3 === void 0 ? {} : _temp3, behavior = _ref7.behavior;
      _this.cancelScrollToIndex();
      if (behavior === "smooth" && _this.isDynamicMode()) {
        console.warn("The `smooth` scroll behavior is not fully supported with dynamic size.");
      }
      _this._scrollToOffset(_this.scrollOffset + delta, {
        adjustments: void 0,
        behavior
      });
    };
    this.getTotalSize = function() {
      var _this$getMeasurements;
      return (((_this$getMeasurements = _this.getMeasurements()[_this.options.count - 1]) == null ? void 0 : _this$getMeasurements.end) || _this.options.paddingStart) - _this.options.scrollMargin + _this.options.paddingEnd;
    };
    this._scrollToOffset = function(offset, _ref8) {
      var adjustments = _ref8.adjustments, behavior = _ref8.behavior;
      _this.options.scrollToFn(offset, {
        behavior,
        adjustments
      }, _this);
    };
    this.measure = function() {
      _this.itemSizeCache = /* @__PURE__ */ new Map();
      _this.notify();
    };
    this.setOptions(_opts);
    this.scrollRect = this.options.initialRect;
    this.scrollOffset = this.options.initialOffset;
    this.measurementsCache = this.options.initialMeasurementsCache;
    this.measurementsCache.forEach(function(item) {
      _this.itemSizeCache.set(item.key, item.size);
    });
    this.maybeNotify();
  };
  var findNearestBinarySearch = function findNearestBinarySearch2(low, high, getCurrentValue, value) {
    while (low <= high) {
      var middle = (low + high) / 2 | 0;
      var currentValue = getCurrentValue(middle);
      if (currentValue < value) {
        low = middle + 1;
      } else if (currentValue > value) {
        high = middle - 1;
      } else {
        return middle;
      }
    }
    if (low > 0) {
      return low - 1;
    } else {
      return 0;
    }
  };
  function calculateRange(_ref9) {
    var measurements = _ref9.measurements, outerSize = _ref9.outerSize, scrollOffset = _ref9.scrollOffset;
    var count2 = measurements.length - 1;
    var getOffset = function getOffset2(index) {
      return measurements[index].start;
    };
    var startIndex = findNearestBinarySearch(0, count2, getOffset, scrollOffset);
    var endIndex = startIndex;
    while (endIndex < count2 && measurements[endIndex].end < scrollOffset + outerSize) {
      endIndex++;
    }
    return {
      startIndex,
      endIndex
    };
  }

  // ../../../../nobackup/dropbox-nosync/shinycomponent/js/node_modules/@tanstack/react-virtual/build/lib/index.mjs
  var useIsomorphicLayoutEffect = typeof document !== "undefined" ? y3 : p3;
  function useVirtualizerBase(options) {
    var rerender = s6(function() {
      return {};
    }, {})[1];
    var resolvedOptions = _extends10({}, options, {
      onChange: function onChange(instance2) {
        rerender();
        options.onChange == null ? void 0 : options.onChange(instance2);
      }
    });
    var _React$useState = h4(function() {
      return new Virtualizer(resolvedOptions);
    }), instance = _React$useState[0];
    instance.setOptions(resolvedOptions);
    p3(function() {
      return instance._didMount();
    }, []);
    useIsomorphicLayoutEffect(function() {
      return instance._willUpdate();
    });
    return instance;
  }
  function useVirtualizer(options) {
    return useVirtualizerBase(_extends10({
      observeElementRect,
      observeElementOffset,
      scrollToFn: elementScroll
    }, options));
  }

  // src/datagrid/index.tsx
  init_react();

  // src/datagrid/selection.tsx
  init_react();
  function useSelection(mode, keyAccessor, between, selectionClassName = "selected") {
    const [selectedKeys, setSelectedKeys] = h4(
      ImmutableSet.empty()
    );
    const [anchor, setAnchor] = h4(null);
    const onMouseDown = (event) => {
      if (mode === 0 /* None */) {
        return;
      }
      const el = event.currentTarget;
      const key = keyAccessor(el);
      const result = performMouseDownAction(
        mode,
        between,
        selectedKeys,
        event,
        key,
        anchor
      );
      if (result) {
        setSelectedKeys(result.selection);
        if (typeof result.anchor !== "undefined") {
          setAnchor(result.anchor);
        }
        event.preventDefault();
      }
    };
    return {
      has(key) {
        return selectedKeys.has(key);
      },
      set(key, selected) {
        if (selected) {
          setSelectedKeys(selectedKeys.add(key));
        } else {
          setSelectedKeys(selectedKeys.delete(key));
        }
      },
      clear() {
        setSelectedKeys(selectedKeys.clear());
      },
      handlers() {
        return { onMouseDown };
      }
    };
  }
  var ImmutableSet = class {
    constructor(set) {
      this._set = set;
    }
    static empty() {
      return new ImmutableSet(/* @__PURE__ */ new Set());
    }
    has(value) {
      return this._set.has(value);
    }
    add(...values) {
      const newSet = new Set(this._set.keys());
      for (const value of values) {
        newSet.add(value);
      }
      return new ImmutableSet(newSet);
    }
    toggle(value) {
      if (this.has(value)) {
        return this.delete(value);
      } else {
        return this.add(value);
      }
    }
    delete(value) {
      const newSet = new Set(this._set.keys());
      newSet.delete(value);
      return new ImmutableSet(newSet);
    }
    clear() {
      return ImmutableSet.empty();
    }
  };
  function performMouseDownAction(mode, between, selectedKeys, event, key, anchor) {
    let { shiftKey, ctrlKey, altKey, metaKey } = event;
    if (window.navigator.platform.match(/^Mac/)) {
      [ctrlKey, metaKey] = [metaKey, ctrlKey];
    }
    if (mode === 3 /* MultiSet */) {
      return { selection: selectedKeys.toggle(key) };
    } else if (mode === 1 /* Single */) {
      return { selection: ImmutableSet.empty().add(key) };
    } else if (mode === 2 /* Multi */) {
      if (ctrlKey && !shiftKey) {
        return { selection: selectedKeys.toggle(key), anchor: key };
      } else if (shiftKey && !ctrlKey) {
        if (anchor !== null && between) {
          const toSelect = between(anchor, key);
          return { selection: ImmutableSet.empty().add(...toSelect) };
        }
      } else if (shiftKey && ctrlKey) {
        const toSelect = between(anchor, key);
        return { selection: selectedKeys.add(...toSelect) };
      } else if (!shiftKey && !ctrlKey) {
        return { selection: ImmutableSet.empty().add(key), anchor: key };
      } else {
        return;
      }
      event.preventDefault();
    }
  }

  // src/datagrid/sort-arrows.tsx
  init_react();
  var sortCommonProps = {
    className: "sort-arrow",
    viewBox: [-1, -1, 2, 2].map((x5) => x5 * 1.4).join(" "),
    width: "100%",
    height: "100%",
    style: { paddingLeft: "3px" }
  };
  var sortPathCommonProps = {
    stroke: "#333333",
    strokeWidth: "0.6",
    fill: "transparent"
  };
  var sortArrowUp = /* @__PURE__ */ Cn.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", ...sortCommonProps }, /* @__PURE__ */ Cn.createElement(
    "path",
    {
      d: "M -1 0.5 L 0 -0.5 L 1 0.5",
      ...sortPathCommonProps,
      strokeLinecap: "round"
    }
  ));
  var sortArrowDown = /* @__PURE__ */ Cn.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", ...sortCommonProps }, /* @__PURE__ */ Cn.createElement(
    "path",
    {
      d: "M -1 -0.5 L 0 0.5 L 1 -0.5",
      ...sortPathCommonProps,
      strokeLinecap: "round"
    }
  ));

  // src/datagrid/table-summary.tsx
  init_react();
  function useSummary(summaryTemplate, scrollContainer, virtualRows, thead, nrows) {
    return F2(() => {
      const summaryOption = summaryTemplate ?? true;
      if (!summaryOption) {
        return null;
      }
      const template = typeof summaryOption === "string" ? summaryOption : "Viewing rows {start} through {end} of {total}";
      if (!scrollContainer) {
        return null;
      }
      if (virtualRows.length === 0) {
        return null;
      }
      const top = scrollContainer.scrollTop;
      const bot = top + scrollContainer.clientHeight - thead.clientHeight;
      const [firstIndex, lastIndex] = findRangeIndex(
        top,
        bot,
        virtualRows,
        (vrow, start) => vrow.start + vrow.size / 2
      );
      if (firstIndex === null || lastIndex === null) {
        return null;
      }
      const firstRow = virtualRows[firstIndex];
      const lastRow = virtualRows[lastIndex];
      if (firstRow.index === 0 && lastRow.index === nrows - 1) {
        return null;
      }
      const summaryMessage = formatSummary(
        template,
        firstRow.index + 1,
        lastRow.index + 1,
        nrows
      );
      return /* @__PURE__ */ Cn.createElement("div", { className: "shiny-data-grid-summary" }, summaryMessage);
    }, [summaryTemplate, scrollContainer, virtualRows, thead, nrows]);
  }
  function findRangeIndex(start, end, items, map2) {
    let first = null;
    let last = null;
    for (let i5 = 0; i5 < items.length; i5++) {
      const item = items[i5];
      if (first === null) {
        if (map2(item, true) >= start) {
          first = i5;
          last = i5;
        }
      } else {
        if (map2(item, false) <= end) {
          last = i5;
        } else {
          break;
        }
      }
    }
    return [first, last];
  }
  function formatSummary(template, start, end, total) {
    return template.replace(/\{(start|end|total)\}/g, (substr, token) => {
      if (token === "start") {
        return start + "";
      } else if (token === "end") {
        return end + "";
      } else if (token === "total") {
        return total + "";
      } else {
        return substr;
      }
    });
  }

  // src/datagrid/index.tsx
  var ShinyDataGrid = (props) => {
    const { data, bgcolor, width, height } = props;
    const { columns, data: rowData } = data;
    const containerRef = _3(null);
    const theadRef = _3(null);
    const tbodyRef = _3(null);
    const rowVirtualizer = useVirtualizer({
      count: rowData.length,
      getScrollElement: () => containerRef.current,
      estimateSize: () => 50
    });
    y3(() => {
      rowVirtualizer.scrollToOffset(0);
    }, [data]);
    const totalSize = rowVirtualizer.getTotalSize();
    const virtualRows = rowVirtualizer.getVirtualItems();
    const coldefs = F2(
      () => columns.map((colname, i5) => {
        return {
          accessorFn: (row, index) => {
            return row[i5];
          },
          header: colname
        };
      }),
      [columns]
    );
    const dataClone = F2(() => [...rowData], [rowData]);
    const options = {
      data: dataClone,
      columns: coldefs,
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel()
      //debugAll: true,
    };
    const table = useReactTable(options);
    const paddingTop = virtualRows.length > 0 ? virtualRows?.[0]?.start || 0 : 0;
    const paddingBottom = virtualRows.length > 0 ? totalSize - (virtualRows?.[virtualRows.length - 1]?.end || 0) : 0;
    const summary = useSummary(
      data.options.summary,
      containerRef?.current,
      virtualRows,
      theadRef.current,
      rowData.length
    );
    const tableStyle = data.options.style ?? "grid";
    const containerClass = tableStyle === "grid" ? "shiny-data-grid-grid" : "shiny-data-grid-table";
    const tableClass = tableStyle === "table" ? "table table-sm" : null;
    const rowSelection = useSelection(
      2 /* Multi */,
      (el) => el.dataset.key,
      (fromKey, toKey2) => {
        const rowModel = table.getSortedRowModel();
        let fromIdx = rowModel.rows.findIndex((row) => row.id === fromKey);
        let toIdx = rowModel.rows.findIndex((row) => row.id === toKey2);
        if (fromIdx < 0 || toIdx < 0) {
          return [];
        }
        if (fromIdx > toIdx) {
          [fromIdx, toIdx] = [toIdx, fromIdx];
        }
        const keys2 = [];
        for (let i5 = fromIdx; i5 <= toIdx; i5++) {
          keys2.push(rowModel.rows[i5].id);
        }
        return keys2;
      },
      "selected"
    );
    p3(() => {
      return () => {
        table.resetSorting();
        rowSelection.clear();
      };
    }, [data]);
    const headerRowCount = table.getHeaderGroups().length;
    const scrollingClass = containerRef.current?.scrollHeight > containerRef.current?.clientHeight ? "scrolling" : "";
    return /* @__PURE__ */ Cn.createElement(Cn.Fragment, null, /* @__PURE__ */ Cn.createElement(
      "div",
      {
        className: `shiny-data-grid ${containerClass} ${scrollingClass}`,
        ref: containerRef,
        style: { width, maxHeight: height, overflow: "auto" }
      },
      /* @__PURE__ */ Cn.createElement(
        "table",
        {
          className: tableClass,
          "aria-rowcount": rowData.length,
          style: { width: width === null || width === "auto" ? null : "100%" }
        },
        /* @__PURE__ */ Cn.createElement("thead", { ref: theadRef, style: { backgroundColor: bgcolor } }, table.getHeaderGroups().map((headerGroup, i5) => /* @__PURE__ */ Cn.createElement("tr", { key: headerGroup.id, "aria-rowindex": i5 + 1 }, headerGroup.headers.map((header) => {
          return /* @__PURE__ */ Cn.createElement(
            "th",
            {
              key: header.id,
              colSpan: header.colSpan,
              style: { width: header.getSize() },
              scope: "col"
            },
            header.isPlaceholder ? null : /* @__PURE__ */ Cn.createElement(
              "div",
              {
                style: {
                  cursor: header.column.getCanSort() ? "pointer" : null,
                  userSelect: header.column.getCanSort() ? "none" : null
                },
                onClick: header.column.getToggleSortingHandler()
              },
              flexRender(
                header.column.columnDef.header,
                header.getContext()
              ),
              {
                asc: sortArrowUp,
                desc: sortArrowDown
              }[header.column.getIsSorted()] ?? null
            )
          );
        })))),
        /* @__PURE__ */ Cn.createElement("tbody", { ref: tbodyRef }, paddingTop > 0 && /* @__PURE__ */ Cn.createElement("tr", { style: { height: `${paddingTop}px` } }), virtualRows.map((virtualRow) => {
          const row = table.getRowModel().rows[virtualRow.index];
          return /* @__PURE__ */ Cn.createElement(
            "tr",
            {
              key: virtualRow.key,
              "data-index": virtualRow.index,
              "aria-rowindex": virtualRow.index + headerRowCount,
              "data-key": row.id,
              ref: rowVirtualizer.measureElement,
              className: rowSelection.has(row.id) ? "selected" : void 0,
              ...rowSelection.handlers()
            },
            row.getVisibleCells().map((cell) => {
              return /* @__PURE__ */ Cn.createElement("td", { key: cell.id }, flexRender(
                cell.column.columnDef.cell,
                cell.getContext()
              ));
            })
          );
        }), paddingBottom > 0 && /* @__PURE__ */ Cn.createElement("tr", { style: { height: `${paddingBottom}px` } }))
      )
    ), summary);
  };
  if (window.Shiny) {
    class ShinyDataGridBinding extends Shiny.OutputBinding {
      find(scope) {
        return $(scope).find("shiny-data-grid-output");
      }
      renderValue(el, data) {
        el.renderValue(data);
      }
    }
    Shiny.outputBindings.register(new ShinyDataGridBinding(), "shinyDataGrid");
  }
  function getComputedBgColor(el) {
    if (!el) {
      return null;
    }
    const bgColor = getStyle(el, "background-color");
    if (!bgColor)
      return bgColor;
    const m4 = bgColor.match(
      /^rgba\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/
    );
    if (bgColor === "transparent" || m4 && parseFloat(m4[4]) === 0) {
      const bgImage = getStyle(el, "background-image");
      if (bgImage && bgImage !== "none") {
        return null;
      } else {
        return getComputedBgColor(el.parentElement);
      }
    }
    return bgColor;
  }
  function getStyle(el, styleProp) {
    return document?.defaultView?.getComputedStyle(el, null)?.getPropertyValue(styleProp);
  }
  var cssTemplate = document.createElement("template");
  cssTemplate.innerHTML = `<style>${styles_default}</style>`;
  var ShinyDataGridOutput = class extends HTMLElement {
    connectedCallback() {
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(cssTemplate.content.cloneNode(true));
      const myDiv = document.createElement("div");
      this.shadowRoot.appendChild(myDiv);
      this.reactRoot = createRoot(myDiv);
      const dataEl = this.querySelector(
        "script.data"
      );
      if (dataEl) {
        const data = JSON.parse(dataEl.innerText);
        this.renderValue(data);
      }
    }
    renderValue(data) {
      const {
        columns,
        index,
        data: rows,
        options,
        width,
        height
      } = data;
      if (!data) {
        return;
      }
      this.reactRoot.render(
        /* @__PURE__ */ Cn.createElement(mn, null, /* @__PURE__ */ Cn.createElement(
          ShinyDataGrid,
          {
            data,
            bgcolor: getComputedBgColor(this),
            width: width ?? "100%",
            height: height ?? "500px"
          }
        ))
      );
    }
  };
  customElements.define("shiny-data-grid-output", ShinyDataGridOutput);

  // src/design-preview.ts
  var colors = [
    "primary",
    "action",
    "error",
    "bg",
    "bg-1",
    "bg-2",
    "border",
    "border-1",
    "border-2",
    "text",
    "text-1",
    "text-2"
  ].map((c5) => `--color-${c5}`);
  var font_sizes = [
    "heading-1",
    "heading-2",
    "heading-3",
    "heading-4",
    "body",
    "small",
    "x-small"
  ].map((s7) => `--font-${s7}`);
  var s_m_l = ["small", "medium", "large"];
  var shadows = s_m_l.map((x5) => `--shadow-${x5}`);
  var borders = s_m_l.map((x5) => `--border-${x5}`);
  var radii = s_m_l.map((x5) => `--radius-${x5}`);
  var spacings = ["x-small", ...s_m_l, "x-large", "xx-large"].map(
    (s7) => `--space-${s7}`
  );
  var DesignPreview = class extends s4 {
    render() {
      return x`
      <div>
        <h2>Colors</h2>
        <div class="box-container">
          ${colors.map(
        (c5) => x`<div class="box" style="background-color: var(${c5})">
              <div class="label">${c5}</div>
            </div>`
      )}
        </div>
      </div>

      <div>
        <h2>Font Sizes</h2>
        <div class="font-sizes-container">
          ${font_sizes.map(
        (size) => x`<p class="font-size" style="font-size: var(${size})">
              ${size}
            </p>`
      )}
        </div>
      </div>

      <div>
        <h2>Border Widths</h2>
        <div class="box-container">
          ${borders.map(
        (border) => x`<div
              class="box"
              style="border-width: var(${border});"
            >
              <div class="label">${border}</div>
            </div>`
      )}
        </div>
      </div>

      <div>
        <h2>Radii</h2>
        <div class="box-container">
          ${radii.map(
        (r6) => x`<div class="box" style="border-radius: var(${r6});">
              <div class="label">${r6}</div>
            </div>`
      )}
        </div>
      </div>

      <div>
        <h2>Spacings</h2>
        <div>
          ${spacings.map(
        (s7) => x`
              <div class="spacings">
                <div
                  style="width: var(${s7}); aspect-ratio: 1; background-color: var(--color-primary);"
                ></div>
                <div class="label">${s7}</div>
              </div>
            `
      )}
        </div>
      </div>
      <div>
        <h2>Box Shadows</h2>
        <div class="box-container">
          ${shadows.map(
        (shadow) => x`<div
              class="box"
              style="box-shadow: var(${shadow});"
            >
              <div class="label">${shadow}</div>
            </div>`
      )}
        </div>
      </div>
    `;
    }
  };
  DesignPreview.properties = {};
  // Styles are scoped to this element: they won't conflict with styles
  // on the main page or in other components. Styling API can be exposed
  // via CSS custom properties.
  DesignPreview.styles = i`
    :host {
      display: block;
      height: 100%;
      overflow: scroll;
      position: relative;
      padding: var(--space-medium);
      color: var(--color-text);
    }

    :host > div {
      padding: var(--space-medium);
      position: relative;
      margin-block: var(--space-medium);
      outline: var(--border-small) solid var(--color-border);
      border-radius: var(--radius-small);
      box-shadow: var(--shadow-small);
    }

    :host > div > h2 {
      margin-block: var(--size-00) var(--space-small);
    }

    .box-container {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      grid-gap: var(--space-medium);
    }

    .box {
      min-width: 0;
      max-width: 100%;
      aspect-ratio: 1;
      display: grid;
      align-items: end;
      border: 0px solid var(--color-border);
      box-shadow: var(--shadow-medium);
      border-radius: var(--radius-small);
      background-color: var(--color-bg-2);
      overflow: hidden;
    }

    .label {
      font-size: var(--font-x-small);
      font-family: var(--font-mono);
    }

    .box > div.label {
      background-color: var(--color-bg-1);
      padding-inline: var(--space-medium);
    }

    .font-sizes-container > p {
      padding: 0;
      margin: 0;
      line-height: var(--font-lineheight-5);
    }

    .spacings {
      display: flex;
      align-items: center;
      padding: var(--space-small);
      gap: var(--space-small);
    }
  `;
  customElements.define("design-preview", DesignPreview);

  // src/set_el_attr.ts
  function set_el_attr(el, type, value) {
    const attr = document.createAttribute(type);
    attr.value = value;
    el.attributes.setNamedItem(attr);
    return el;
  }

  // src/footer.ts
  var Footer = class extends s4 {
    constructor() {
      super();
      set_el_attr(this, "slot", "footer");
    }
    render() {
      return x`
      <div class="footer">
        <slot></slot>
      </div>
    `;
    }
  };
  Footer.properties = {};
  // Styles are scoped to this element: they won't conflict with styles
  // on the main page or in other components. Styling API can be exposed
  // via CSS custom properties.
  Footer.styles = i`
    :host {
      display: block;
      position: relative;
      width: 100%;
    }

    .footer {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  `;
  customElements.define("shiny-footer", Footer);

  // src/general-output.ts
  var GeneralOutput = class extends s4 {
    constructor() {
      super(...arguments);
      this.value = null;
      this.watch = "";
      this.watcher = dummy_data_passing_watcher;
    }
    connectedCallback() {
      super.connectedCallback();
      this.watcher = make_data_passing_watcher(this.watch, (payload) => {
        this.value = String(payload.value);
      });
    }
    render() {
      return x`<span class="value">${this.value}</span>`;
    }
  };
  GeneralOutput.properties = {
    value: {},
    watch: { type: String }
  };
  customElements.define("general-output", GeneralOutput);

  // src/sidebar.ts
  var Sidebar = class extends s4 {
    constructor() {
      super();
      this.is_open = true;
      set_el_attr(this, "slot", "sidebar");
    }
    render() {
      return x`
      <div class="sidebar ${this.is_open ? "open" : "closed"}">
        <slot></slot>
      </div>
      <div
        @click=${this.toggle_open}
        title=${this.is_open ? "Close sidebar" : "Open sidebar"}
        class="open-toggle"
      >
        ◀︎
      </div>
    `;
    }
    toggle_open() {
      this.is_open = !this.is_open;
    }
  };
  Sidebar.properties = {
    is_open: {}
  };
  // Styles are scoped to this element: they won't conflict with styles
  // on the main page or in other components. Styling API can be exposed
  // via CSS custom properties.
  Sidebar.styles = i`
    :host {
      display: block;
      font-family: var(--font-family, sans-serif);
      --transition: 0.4s var(--ease-3);
      --toggle-w: var(--space-small);
      height: 100%;
      position: relative;
    }

    * {
      box-sizing: border-box;
    }

    .sidebar {
      height: 100%;
      overflow: scroll;
      padding: var(--size-fluid-1);
      --w: var(--sidebar-width, 250px);
      margin: 0;
      transition: width var(--transition), padding var(--transition);
    }

    .sidebar.open {
      width: var(--w);
    }

    .sidebar.closed {
      width: 0;
      padding: 0;
    }

    .sidebar.closed ::slotted(*) {
      opacity: 0;
    }

    .sidebar > * {
      min-width: 0;
    }

    .sidebar.closed + .open-toggle {
      transform: translateX(var(--toggle-w)) scaleX(-1);
      transition: transform var(--transition);
    }

    .open-toggle {
      position: absolute;
      top: var(--size-1);
      font-size: var(--font-size-3);
      border-radius: var(--radius-2) 0 0 var(--radius-2);
      right: 0;
      width: var(--toggle-w);
      height: auto;
      color: var(--white);
      display: grid;
      cursor: pointer;
      color: var(--color-action);
    }
  `;
  customElements.define("shiny-sidebar", Sidebar);

  // src/make_input_binding.ts
  function make_input_binding(tag_name) {
    if (!Shiny2) {
      return;
    }
    class NewNumberBinding extends Shiny2.InputBinding {
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
        el.onChangeCallback = (x5) => {
        };
      }
    }
    Shiny2.inputBindings.register(new NewNumberBinding(), `${tag_name}-Binding`);
  }

  // src/simple-number-input.ts
  var SimpleNumberInput = class extends s4 {
    constructor() {
      super(...arguments);
      this.min = 0;
      this.max = 10;
      this.value = (this.min + this.max) / 2;
      this.invalid = false;
      this.onChangeCallback = (x5) => {
      };
      this.on_value_change = make_value_change_emitter(this, this.id);
    }
    getInputElement() {
      return this.shadowRoot.querySelector("input");
    }
    handle_minus(e6) {
      const inputValue = this.getInputElement().valueAsNumber;
      let newValue;
      if (isNaN(inputValue)) {
        newValue = this.min;
      } else {
        newValue = clamp(inputValue - 1, this.min, this.max);
      }
      this.getInputElement().value = newValue.toString();
      this.value = newValue;
      this.invalid = false;
      this.alert_of_change();
    }
    handle_plus(e6) {
      const inputValue = this.getInputElement().valueAsNumber;
      let newValue;
      if (isNaN(inputValue)) {
        newValue = this.max;
      } else {
        newValue = clamp(inputValue + 1, this.min, this.max);
      }
      this.getInputElement().value = newValue.toString();
      this.value = newValue;
      this.invalid = false;
      this.alert_of_change();
    }
    handle_change(e6) {
      const inputValue = e6.target.valueAsNumber;
      const clampedValue = clamp(inputValue, this.min, this.max);
      if (clampedValue === inputValue) {
        this.value = clampedValue;
        this.invalid = false;
        this.alert_of_change();
      } else {
        this.invalid = true;
      }
    }
    alert_of_change() {
      this.onChangeCallback(true);
      this.on_value_change({ type: "number", value: this.value });
    }
    connectedCallback() {
      super.connectedCallback();
      setTimeout(() => {
        this.alert_of_change();
      }, 2);
    }
    render() {
      return x`
      <div class="wrapper ${this.invalid ? "invalid" : null}">
        <button
          class="plusminus left"
          @mousedown=${this.handle_minus}
          @keydown=${(e6) => {
        if (e6.code === "Space")
          this.handle_minus(e6);
      }}
        >
          −</button
        ><input
          value=${this.value}
          min=${this.min}
          max=${this.max}
          @input=${this.handle_change}
          type="number"
        /><button
          class="plusminus right"
          @mousedown=${this.handle_plus}
          @keydown=${(e6) => {
        if (e6.code === "Space")
          this.handle_plus(e6);
      }}
        >
          +
        </button>
      </div>
      <span>Make sure your number is between ${this.min} and ${this.max}</span>
    `;
    }
  };
  SimpleNumberInput.properties = {
    min: { type: Number },
    max: { type: Number },
    value: { type: Number },
    invalid: { type: Boolean }
  };
  SimpleNumberInput.styles = i`
    .wrapper {
      display: inline-block;
      background-color: #fff;
      border: none;
      border-radius: 999px;
      outline: var(--border-small) solid var(--color-border-2);
    }
    .wrapper.invalid {
      outline: var(--border-small) solid var(--color-error);
    }

    input {
      background-color: #fff;
      padding: var(--space-x-small) 0;
      border: none;
      border-radius: 0;
      outline-width: 0;
      font-size: var(--font-body);
      text-align: center;
      /* max-width: 100%;
      width: 300px; */
    }
    input:focus-visible {
      outline-width: 0;
    }

    /* Hide the number input's spin buttons */
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    /* Firefox */
    input[type="number"] {
      -moz-appearance: textfield;
    }

    button {
      display: inline-block;
      padding-top: var(--space-small);
      padding-bottom: var(--space-small);
      font-size: var(--font-body);
      border: none;
      background-color: rgba(0, 0, 0, 0);
    }
    button:hover {
      cursor: pointer;
    }
    button.left {
      padding-right: var(--space-x-small);
      padding-left: var(--space-small);
    }
    button.right {
      padding-right: var(--space-small);
      padding-left: var(--space-x-small);
    }

    span {
      display: inline-block;
      margin-left: var(--space-x-small);
      font-size: var(--font-body);
      color: var(--color-error);
      transform: scaleX(0);
      transition: transform 0.3s var(--ease-squish-2);
      transform-origin: left;
    }
    input:invalid + span {
      transform: scaleX(1);
    }
  `;
  customElements.define("simple-number-input", SimpleNumberInput);
  make_input_binding("simple-number-input");
  function clamp(x5, min2, max2) {
    return Math.max(Math.min(x5, max2), min2);
  }

  // src/simple-number-output.ts
  var SimpleNumberOutput = class extends s4 {
    constructor() {
      super(...arguments);
      this.value = null;
      this.watch = "";
      this.watcher = dummy_data_passing_watcher;
    }
    connectedCallback() {
      super.connectedCallback();
      this.watcher = make_data_passing_watcher(this.watch, (payload) => {
        if (payload.type !== "number") {
          console.error("Expected number, got", payload.value);
          return;
        }
        this.value = payload.value;
      });
    }
    render() {
      return x` <div class="value">Your number is: ${this.value}</div> `;
    }
  };
  SimpleNumberOutput.properties = {
    value: { type: Number },
    watch: { type: String }
  };
  SimpleNumberOutput.styles = i`
    .value {
      display: block;
      font-size: var(--font-size-2);
      background-color: var(--blue-1);
    }
  `;
  customElements.define("simple-number-output", SimpleNumberOutput);

  // src/star-rating.ts
  var StarRating = class extends s4 {
    constructor() {
      super();
      this.low = 0;
      this.high = 10;
      this.rating = (this.low + this.high) / 2;
      this.onChangeCallback = (x5) => {
      };
    }
    update_rating(delta) {
      this.rating = Math.max(Math.min(this.rating + delta, this.high), this.low);
      this.onChangeCallback(true);
    }
    render() {
      return x`
      <button
        class="thumb_down ${this.rating === this.low ? "disabled" : ""}"
        @click=${() => this.update_rating(-1)}
      >
        ➖
      </button>
      <emoji-reaction rating=${this.rating} low=${this.low} high=${this.high}>
      </emoji-reaction>
      <button
        class="thumb_up ${this.rating === this.high ? "disabled" : ""}"
        @click=${() => this.update_rating(1)}
      >
        ➕
      </button>
    `;
    }
  };
  StarRating.properties = {
    rating: { type: Number }
  };
  // Styles are scoped to this element: they won't conflict with styles
  // on the main page or in other components. Styling API can be exposed
  // via CSS custom properties.
  StarRating.styles = i`
    :host {
      display: block;
      position: relative;
      display: flex;
      align-items: center;
      padding: var(--size-2);
      gap: var(--size-2);
      font-size: var(--font-size-6);
    }

    button {
      font-size: var(--font-size-6);
      border: none;
    }

    button.disabled {
      background-color: var(--gray-3);
      opacity: 0.5;
      cursor: not-allowed;
    }

    .thumb_down {
      background-color: var(--red-3);
      border-radius: var(--radius-blob-1);
    }
    .thumb_up {
      background-color: var(--blue-3);
      border-radius: var(--radius-blob-2);
    }
  `;
  var EmojiReaction = class extends s4 {
    constructor() {
      super();
      this.low = 0;
      this.high = 10;
      this.rating = (this.low + this.high) / 2;
    }
    render() {
      const at_max = this.rating === this.high;
      const at_min = this.rating === this.low;
      const rotation = at_max || at_min ? 0 : this.rating / (this.high - this.low) * 180;
      const emoji = at_max ? "\u{1F929}" : at_min ? "\u{1F62B}" : "\u{1F44E}";
      return x`
      <div style="rotate:${rotation}deg" title="Rating of ${this.rating}">
        ${emoji}
      </div>
    `;
    }
  };
  EmojiReaction.properties = {
    rating: { type: Number }
  };
  // Styles are scoped to this element: they won't conflict with styles
  // on the main page or in other components. Styling API can be exposed
  // via CSS custom properties.
  EmojiReaction.styles = i`
    :host {
      font-size: var(--font-size-6);
      text-align: center;
      user-select: none;
    }
  `;
  customElements.define("emoji-reaction", EmojiReaction);
  customElements.define("star-rating", StarRating);
  (() => {
    if (!Shiny2) {
      return;
    }
    class StarRatingInputBinding extends Shiny2.InputBinding {
      constructor() {
        super();
      }
      find(scope) {
        return $(scope).find("star-rating");
      }
      getId(el) {
        return el.id;
      }
      getValue(el) {
        return el.rating;
      }
      subscribe(el, callback) {
        el.onChangeCallback = callback;
      }
      unsubscribe(el) {
        el.onChangeCallback = (x5) => {
        };
      }
    }
    Shiny2.inputBindings.register(
      new StarRatingInputBinding(),
      "StarRatingInputBinding"
    );
  })();

  // src/tab.ts
  var Tab = class extends s4 {
    constructor() {
      super();
      this.name = "tab";
    }
    render() {
      return x` <slot></slot> `;
    }
  };
  Tab.properties = {
    name: {}
  };
  // Styles are scoped to this element: they won't conflict with styles
  // on the main page or in other components. Styling API can be exposed
  // via CSS custom properties.
  Tab.styles = i`
    :host {
      display: block;
      position: relative;
      height: 100%;
      min-height: 0;
      width: 100%;
      min-width: 0;
      padding: var(--size-fluid-2);
    }
  `;
  customElements.define("shiny-tab", Tab);

  // src/tabset.ts
  var Tabset = class extends s4 {
    constructor() {
      super();
      this.tabs = [];
      this.onChangeCallback = (x5) => {
      };
      this.selected_tab_index = 0;
    }
    handleSlotchange(e6) {
      const slot = e6.target;
      if (!slot)
        return;
      const nodes_in_slot = slot.assignedNodes({ flatten: true });
      this.tabs = nodes_in_slot.reduce((all, node) => {
        if (node instanceof HTMLElement && node.tagName.toLowerCase() === "shiny-tab") {
          const tab_name = node.attributes.getNamedItem("name")?.value;
          if (!tab_name) {
            return all;
          }
          all.push({ name: tab_name, el: node });
        }
        return all;
      }, []);
      this.select_tab();
    }
    select_tab(tab_index = this.selected_tab_index) {
      this.selected_tab_index = tab_index;
      this.tabs.forEach((tab, i5) => {
        const is_selected = i5 === tab_index;
        const currently_hidden = tab.el.style.display === "none";
        const hiding_tab = !currently_hidden && !is_selected;
        if (hiding_tab) {
          $(tab.el).trigger("hidden");
          tab.el.inert = true;
          tab.el.style.display = "none";
        }
        const showing_tab = currently_hidden && is_selected;
        if (showing_tab) {
          $(tab.el).trigger("shown");
          tab.el.inert = false;
          tab.el.style.display = "block";
        }
      });
      this.onChangeCallback(true);
    }
    current_tab_name() {
      return this.tabs[this.selected_tab_index].name;
    }
    render() {
      return x`
      <div class="tabset">
        <div class="header">
          <slot name="header"></slot>
          <div class="divider"></div>
          <div class="tabs">
            ${this.tabs.map(
        (tab, i5) => x`<div
                  class="tab ${i5 === this.selected_tab_index ? "selected-tab" : ""}"
                  @click=${() => this.select_tab(i5)}
                >
                  ${tab.name}
                </div>`
      )}
          </div>
        </div>
        <div class="sidebar">
          <slot name="sidebar"></slot>
        </div>
        <div class="main">
          <slot @slotchange=${this.handleSlotchange}></slot>
        </div>
        <div class="footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `;
    }
  };
  Tabset.properties = {
    tabs: {},
    selected_tab_index: { type: Number }
  };
  // Styles are scoped to this element: they won't conflict with styles
  // on the main page or in other components. Styling API can be exposed
  // via CSS custom properties.
  Tabset.styles = i`
    :host {
      /* This is where all the variables are defined. If the user wants to
        update something they just have to replace the main variable and it
        doesn't cascade down to other elements
      */
      --_font: var(--font-family, sans-serif);
      --_main-bg: var(--main-bg, var(--color-bg));
      --_main-color: var(--main-color, var(--color-text));

      --_sidebar-bg: var(--sidebar-bg, var(--color-bg-1));
      --_sidebar-color: var(--sidebar-color, var(--color-text-1));
      --_sidebar-border: var(--sidebar-border, var(--border-small));

      --_tab-spacing: var(--tab-spacing, var(--size-2));
      --_tab-selection-thickness: var(
        --tab-selection-thickness,
        var(--border-medium)
      );
      --_tab_radius: var(--tab-radius, var(--radius-small));

      --_header-bg-color: var(--header-bg-color, var(--color-bg-2));
      --_header-bg-image: var(--header-bg-image);
      --_header-color: var(--header-color);
      --_header-font: var(--header-font, var(--font-sans));
      --_header-font-weight: var(--header-font-weight, var(--font-weight-3));
      --_header-font-size: var(--header-font-size, var(--font-size-fluid-1));
      --_header-padding: var(--header-padding, var(--size-fluid-1));

      display: block;
      font-family: var(--_font);
      height: 100%;
      background-color: var(--_main-bg);
      color: var(--_main-color);
      box-sizing: border-box;
    }

    .tabset {
      height: 100%;
      width: 100%;
      display: grid;
      grid-template-columns: auto 1fr;
      grid-template-rows: auto 1fr auto;
      grid-template-areas:
        "header  header"
        "sidebar content"
        "footer  footer";
      isolation: isolate;
    }

    .tabset > * {
      min-width: 0;
      min-height: 0;
    }

    .header,
    .footer,
    .sidebar {
      z-index: 2;
    }

    .main {
      z-index: 1;
    }

    .header,
    .footer {
      background-color: var(--_header-bg-color);
      /* Use background image if passed */
      background-image: var(--_header-bg-image);
      color: var(--_header-color);
      margin: 0;
      padding-inline: var(--_header-padding);
      display: flex;
      align-items: center;
      gap: var(--_header-padding);
    }

    .header {
      grid-area: header;
      font-family: var(--_header-font);
      font-weight: var(--_header-font-weight);
      padding-block: var(--_header-padding);
      margin: 0;
    }

    .selected-tab::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: var(--_tab-spacing);
      right: var(--_tab-spacing);
      height: var(--_tab-selection-thickness);
      border-radius: var(--_tab_radius);
      background-color: var(--color-primary);
    }

    .tabs {
      display: flex;
      flex-wrap: wrap;
      font-size: var(--font-size-fluid-1);
    }

    .tab {
      padding: var(--_tab-spacing);
      cursor: pointer;
      position: relative;
    }

    ::slotted([slot="header"]) {
      font-size: var(--_header-font-size);
      padding: var(--_tab-spacing);
    }

    .divider {
      background-color: var(--_header-color, var(--color-text-2));
      width: var(--border-small);
      height: 100%;
    }

    .sidebar {
      padding: 0;
      grid-area: sidebar;
      background-color: var(--_sidebar-bg);
      color: var(--_sidebar-color);
    }

    .main {
      grid-area: content;
      overflow: scroll;
    }

    .footer {
      grid-area: footer;
    }

    .footer > ::slotted(*) {
      padding-block: var(--_header-padding);
    }
  `;
  customElements.define("shiny-tabset", Tabset);
  (() => {
    if (!Shiny2) {
      return;
    }
    class TabsetInputBinding extends Shiny2.InputBinding {
      constructor() {
        super();
      }
      find(scope) {
        return $(scope).find("shiny-tabset");
      }
      getValue(el) {
        return el.current_tab_name();
      }
      subscribe(el, callback) {
        el.onChangeCallback = callback;
      }
      unsubscribe(el) {
        el.onChangeCallback = (x5) => {
        };
      }
    }
    Shiny2.inputBindings.register(new TabsetInputBinding(), "TabsetInputBinding");
  })();

  // src/tanstack-table.tsx
  init_react();
  var defaultColumn = {
    cell: ({ getValue: getValue2, row: { index }, column: { id }, table }) => {
      const initialValue = getValue2();
      const [value, setValue] = Cn.useState(initialValue);
      const onBlur = () => {
        table.options.meta?.updateData(index, id, value);
      };
      Cn.useEffect(() => {
        setValue(initialValue);
      }, [initialValue]);
      return /* @__PURE__ */ Cn.createElement(
        "input",
        {
          value,
          onChange: (e6) => setValue(e6.target.value),
          onBlur
        }
      );
    }
  };
  function useSkipper() {
    const shouldSkipRef = Cn.useRef(true);
    const shouldSkip = shouldSkipRef.current;
    const skip = Cn.useCallback(() => {
      shouldSkipRef.current = false;
    }, []);
    Cn.useEffect(() => {
      shouldSkipRef.current = true;
    });
    return [shouldSkip, skip];
  }
  function TanStackTableComponent({ startData }) {
    const rerender = Cn.useReducer(() => ({}), {})[1];
    const [data, setData] = Cn.useState(startData);
    const [sorting, setSorting] = Cn.useState([]);
    const [autoResetPageIndex, skipAutoResetPageIndex] = useSkipper();
    const columns = Cn.useMemo(() => {
      return Object.keys(data[0]).map((key) => {
        return {
          accessorKey: key,
          footer: (props) => props.column.id
        };
      });
    }, []);
    const table = useReactTable({
      data,
      columns,
      defaultColumn,
      state: {
        sorting
      },
      onSortingChange: setSorting,
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      autoResetPageIndex,
      // Provide our updateData function to our table meta
      meta: {
        updateData: (rowIndex, columnId, value) => {
          skipAutoResetPageIndex();
          setData(
            (old) => old.map((row, index) => {
              if (index === rowIndex) {
                return {
                  ...old[rowIndex],
                  [columnId]: value
                };
              }
              return row;
            })
          );
        }
      },
      debugTable: true
    });
    return /* @__PURE__ */ Cn.createElement("div", { className: "p-2" }, /* @__PURE__ */ Cn.createElement("div", { className: "h-2" }), /* @__PURE__ */ Cn.createElement("table", null, /* @__PURE__ */ Cn.createElement("thead", null, table.getHeaderGroups().map((headerGroup) => /* @__PURE__ */ Cn.createElement("tr", { key: headerGroup.id }, headerGroup.headers.map((header) => {
      return /* @__PURE__ */ Cn.createElement("th", { key: header.id, colSpan: header.colSpan }, header.isPlaceholder ? null : /* @__PURE__ */ Cn.createElement("div", null, /* @__PURE__ */ Cn.createElement(
        "div",
        {
          ...{
            className: header.column.getCanSort() ? "cursor-pointer select-none" : "",
            onClick: header.column.getToggleSortingHandler()
          }
        },
        flexRender(
          header.column.columnDef.header,
          header.getContext()
        ),
        {
          asc: " \u{1F53C}",
          desc: " \u{1F53D}"
        }[header.column.getIsSorted()] ?? null
      ), header.column.getCanFilter() ? /* @__PURE__ */ Cn.createElement("div", null, /* @__PURE__ */ Cn.createElement(Filter, { column: header.column, table })) : null));
    })))), /* @__PURE__ */ Cn.createElement("tbody", null, table.getRowModel().rows.map((row) => {
      return /* @__PURE__ */ Cn.createElement("tr", { key: row.id }, row.getVisibleCells().map((cell) => {
        return /* @__PURE__ */ Cn.createElement("td", { key: cell.id }, flexRender(
          cell.column.columnDef.cell,
          cell.getContext()
        ));
      }));
    }))), /* @__PURE__ */ Cn.createElement("div", { className: "h-2" }), /* @__PURE__ */ Cn.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ Cn.createElement(
      "button",
      {
        className: "border rounded p-1",
        onClick: () => table.setPageIndex(0),
        disabled: !table.getCanPreviousPage()
      },
      "<<"
    ), /* @__PURE__ */ Cn.createElement(
      "button",
      {
        className: "border rounded p-1",
        onClick: () => table.previousPage(),
        disabled: !table.getCanPreviousPage()
      },
      "<"
    ), /* @__PURE__ */ Cn.createElement(
      "button",
      {
        className: "border rounded p-1",
        onClick: () => table.nextPage(),
        disabled: !table.getCanNextPage()
      },
      ">"
    ), /* @__PURE__ */ Cn.createElement(
      "button",
      {
        className: "border rounded p-1",
        onClick: () => table.setPageIndex(table.getPageCount() - 1),
        disabled: !table.getCanNextPage()
      },
      ">>"
    ), /* @__PURE__ */ Cn.createElement("span", { className: "flex items-center gap-1" }, /* @__PURE__ */ Cn.createElement("div", null, "Page"), /* @__PURE__ */ Cn.createElement("strong", null, table.getState().pagination.pageIndex + 1, " of", " ", table.getPageCount())), /* @__PURE__ */ Cn.createElement("span", { className: "flex items-center gap-1" }, "Go to page:", /* @__PURE__ */ Cn.createElement(
      "input",
      {
        type: "number",
        defaultValue: table.getState().pagination.pageIndex + 1,
        onChange: (e6) => {
          const page = e6.target.value ? Number(e6.target.value) - 1 : 0;
          table.setPageIndex(page);
        },
        className: "border p-1 rounded w-16"
      }
    )), /* @__PURE__ */ Cn.createElement(
      "select",
      {
        className: "border rounded p-1",
        value: table.getState().pagination.pageSize,
        onChange: (e6) => {
          table.setPageSize(Number(e6.target.value));
        }
      },
      [10, 20, 30, 40, 50].map((pageSize) => /* @__PURE__ */ Cn.createElement("option", { key: pageSize, value: pageSize }, "Show ", pageSize))
    )));
  }
  function Filter({
    column,
    table
  }) {
    const firstValue = table.getPreFilteredRowModel().flatRows[0]?.getValue(column.id);
    const columnFilterValue = column.getFilterValue();
    return typeof firstValue === "number" ? /* @__PURE__ */ Cn.createElement("div", { className: "flex space-x-2" }, /* @__PURE__ */ Cn.createElement(
      "input",
      {
        type: "number",
        value: columnFilterValue?.[0] ?? "",
        onChange: (e6) => column.setFilterValue((old) => [
          e6.target.value,
          old?.[1]
        ]),
        placeholder: `Min`,
        className: "w-24 border shadow rounded"
      }
    ), /* @__PURE__ */ Cn.createElement(
      "input",
      {
        type: "number",
        value: columnFilterValue?.[1] ?? "",
        onChange: (e6) => column.setFilterValue((old) => [
          old?.[0],
          e6.target.value
        ]),
        placeholder: `Max`,
        className: "w-24 border shadow rounded"
      }
    )) : /* @__PURE__ */ Cn.createElement(
      "input",
      {
        type: "text",
        value: columnFilterValue ?? "",
        onChange: (e6) => column.setFilterValue(e6.target.value),
        placeholder: `Search...`,
        className: "w-36 border shadow rounded"
      }
    );
  }
  var TanstackTable = class extends HTMLElement {
    constructor() {
      super(...arguments);
      this.value = null;
      this.watch = "";
      this.watcher = dummy_data_passing_watcher;
    }
    connectedCallback() {
      const shadowRoot = this.attachShadow({ mode: "open" });
      const dataEl = this.querySelector("script.data");
      const data = JSON.parse(dataEl.innerText);
      const root2 = client_default.createRoot(shadowRoot);
      const styleContent = `
    * {
      box-sizing: border-box;
      border: 0px solid rgb(229, 231, 235);
    }
    .shadow {
      --tw-shadow: 0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06);
      box-shadow: var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);
    }
    .flex {
      display: flex;
    }
    .items-center {
      align-items: center;
    }
    .gap-2 {
      gap: 0.5rem;
    }
    .gap-1 {
      gap: 0.25rem;
    }
    .rounded {
      border-radius: 0.25rem;
    }
    .border {
      0px solid rgb(229, 231, 235);
      border-width: 1px;
    }
    .p-1 {
        padding: 0.25rem;
    }
    .w-36 {
      width: 9rem;
    }
    .w-24 {
      width: 6rem;
    }
    html {
      font-family: sans-serif;
      font-size: 14px;
    }

    table {
      border: 1px solid lightgray;
    }

    tbody {
      border-bottom: 1px solid lightgray;
    }

    th {
      border-bottom: 1px solid lightgray;
      border-right: 1px solid lightgray;
      padding: 2px 4px;
    }

    tfoot {
      color: gray;
    }

    tfoot th {
      font-weight: normal;
    }
    `;
      root2.render(
        /* @__PURE__ */ Cn.createElement(Cn.Fragment, null, /* @__PURE__ */ Cn.createElement("style", null, styleContent), /* @__PURE__ */ Cn.createElement(TanStackTableComponent, { startData: data }))
      );
    }
  };
  customElements.define("tanstack-table", TanstackTable);

  // src/theme-chooser.ts
  var themes = ["default", "purple", "green", "wild", "dark"];
  var ThemeChooser = class extends s4 {
    constructor() {
      super(...arguments);
      this.choice = themes[0];
    }
    handle_change(e6) {
      this.choice = e6.target.value;
    }
    render() {
      return x`
      <form>
        ${themes.map((choice, i5) => {
        return x`
            <input
              type="radio"
              id="${choice}"
              name="theme"
              value="${choice}"
              @change=${this.handle_change}
              ?checked=${i5 === 0}
            />
            <label for="${choice}">${choice}</label>
          `;
      })}
      </form>
    `;
    }
  };
  ThemeChooser.properties = { choice: { reflect: true } };
  ThemeChooser.styles = i`
    input {
      border-radius: var(--radius-1);
    }
  `;
  customElements.define("theme-chooser", ThemeChooser);
})();
/*! Bundled license information:

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
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

@tanstack/table-core/build/lib/index.mjs:
  (**
   * table-core
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@tanstack/react-table/build/lib/index.mjs:
  (**
   * react-table
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@tanstack/react-virtual/build/lib/_virtual/_rollupPluginBabelHelpers.mjs:
  (**
   * react-virtual
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@tanstack/virtual-core/build/lib/_virtual/_rollupPluginBabelHelpers.mjs:
  (**
   * virtual-core
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@tanstack/virtual-core/build/lib/utils.mjs:
  (**
   * virtual-core
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@tanstack/virtual-core/build/lib/index.mjs:
  (**
   * virtual-core
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@tanstack/react-virtual/build/lib/index.mjs:
  (**
   * react-virtual
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
//# sourceMappingURL=components.js.map
