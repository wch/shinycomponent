var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
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
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i11 = decorators.length - 1, decorator; i11 >= 0; i11--)
    if (decorator = decorators[i11])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports) {
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
        var Element2 = REACT_ELEMENT_TYPE;
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
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element2;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
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
        for (var i11 = 0; i11 < 10; i11++) {
          test2["_" + String.fromCharCode(i11)] = i11;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n13) {
          return test2[n13];
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
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s12 = 1; s12 < arguments.length; s12++) {
        from = Object(arguments[s12]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i11 = 0; i11 < symbols.length; i11++) {
            if (propIsEnumerable.call(from, symbols[i11])) {
              to[symbols[i11]] = from[symbols[i11]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x7) {
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
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x7) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement, throwOnDirectAccess) {
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
      function is(x7, y6) {
        if (x7 === y6) {
          return x7 !== 0 || 1 / x7 === 1 / y6;
        } else {
          return x7 !== x7 && y6 !== y6;
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
          for (var i11 = 0; i11 < propValue.length; i11++) {
            var error = typeChecker(propValue, i11, componentName, location, propFullName + "[" + i11 + "]", ReactPropTypesSecret);
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
          for (var i11 = 0; i11 < expectedValues.length; i11++) {
            if (is(propValue, expectedValues[i11])) {
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
        for (var i11 = 0; i11 < arrayOfTypeCheckers.length; i11++) {
          var checker = arrayOfTypeCheckers[i11];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i11 + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i12 = 0; i12 < arrayOfTypeCheckers.length; i12++) {
            var checker2 = arrayOfTypeCheckers[i12];
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
      function isSymbol(propType, propValue) {
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
        if (isSymbol(propType, propValue)) {
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

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/@lit/reactive-element/css-tag.js
var t = window;
var e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var s = Symbol();
var n = /* @__PURE__ */ new WeakMap();
var o = class {
  constructor(t9, e13, n13) {
    if (this._$cssResult$ = true, n13 !== s)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t9, this.t = e13;
  }
  get styleSheet() {
    let t9 = this.o;
    const s12 = this.t;
    if (e && void 0 === t9) {
      const e13 = void 0 !== s12 && 1 === s12.length;
      e13 && (t9 = n.get(s12)), void 0 === t9 && ((this.o = t9 = new CSSStyleSheet()).replaceSync(this.cssText), e13 && n.set(s12, t9));
    }
    return t9;
  }
  toString() {
    return this.cssText;
  }
};
var r = (t9) => new o("string" == typeof t9 ? t9 : t9 + "", void 0, s);
var i = (t9, ...e13) => {
  const n13 = 1 === t9.length ? t9[0] : e13.reduce((e14, s12, n14) => e14 + ((t10) => {
    if (true === t10._$cssResult$)
      return t10.cssText;
    if ("number" == typeof t10)
      return t10;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t10 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s12) + t9[n14 + 1], t9[0]);
  return new o(n13, t9, s);
};
var S = (s12, n13) => {
  e ? s12.adoptedStyleSheets = n13.map((t9) => t9 instanceof CSSStyleSheet ? t9 : t9.styleSheet) : n13.forEach((e13) => {
    const n14 = document.createElement("style"), o14 = t.litNonce;
    void 0 !== o14 && n14.setAttribute("nonce", o14), n14.textContent = e13.cssText, s12.appendChild(n14);
  });
};
var c = e ? (t9) => t9 : (t9) => t9 instanceof CSSStyleSheet ? ((t10) => {
  let e13 = "";
  for (const s12 of t10.cssRules)
    e13 += s12.cssText;
  return r(e13);
})(t9) : t9;

// node_modules/@lit/reactive-element/reactive-element.js
var s2;
var e2 = window;
var r2 = e2.trustedTypes;
var h = r2 ? r2.emptyScript : "";
var o2 = e2.reactiveElementPolyfillSupport;
var n2 = { toAttribute(t9, i11) {
  switch (i11) {
    case Boolean:
      t9 = t9 ? h : null;
      break;
    case Object:
    case Array:
      t9 = null == t9 ? t9 : JSON.stringify(t9);
  }
  return t9;
}, fromAttribute(t9, i11) {
  let s12 = t9;
  switch (i11) {
    case Boolean:
      s12 = null !== t9;
      break;
    case Number:
      s12 = null === t9 ? null : Number(t9);
      break;
    case Object:
    case Array:
      try {
        s12 = JSON.parse(t9);
      } catch (t10) {
        s12 = null;
      }
  }
  return s12;
} };
var a = (t9, i11) => i11 !== t9 && (i11 == i11 || t9 == t9);
var l = { attribute: true, type: String, converter: n2, reflect: false, hasChanged: a };
var d = "finalized";
var u = class extends HTMLElement {
  constructor() {
    super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$El = null, this.u();
  }
  static addInitializer(t9) {
    var i11;
    this.finalize(), (null !== (i11 = this.h) && void 0 !== i11 ? i11 : this.h = []).push(t9);
  }
  static get observedAttributes() {
    this.finalize();
    const t9 = [];
    return this.elementProperties.forEach((i11, s12) => {
      const e13 = this._$Ep(s12, i11);
      void 0 !== e13 && (this._$Ev.set(e13, s12), t9.push(e13));
    }), t9;
  }
  static createProperty(t9, i11 = l) {
    if (i11.state && (i11.attribute = false), this.finalize(), this.elementProperties.set(t9, i11), !i11.noAccessor && !this.prototype.hasOwnProperty(t9)) {
      const s12 = "symbol" == typeof t9 ? Symbol() : "__" + t9, e13 = this.getPropertyDescriptor(t9, s12, i11);
      void 0 !== e13 && Object.defineProperty(this.prototype, t9, e13);
    }
  }
  static getPropertyDescriptor(t9, i11, s12) {
    return { get() {
      return this[i11];
    }, set(e13) {
      const r11 = this[t9];
      this[i11] = e13, this.requestUpdate(t9, r11, s12);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t9) {
    return this.elementProperties.get(t9) || l;
  }
  static finalize() {
    if (this.hasOwnProperty(d))
      return false;
    this[d] = true;
    const t9 = Object.getPrototypeOf(this);
    if (t9.finalize(), void 0 !== t9.h && (this.h = [...t9.h]), this.elementProperties = new Map(t9.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const t10 = this.properties, i11 = [...Object.getOwnPropertyNames(t10), ...Object.getOwnPropertySymbols(t10)];
      for (const s12 of i11)
        this.createProperty(s12, t10[s12]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), true;
  }
  static finalizeStyles(i11) {
    const s12 = [];
    if (Array.isArray(i11)) {
      const e13 = new Set(i11.flat(1 / 0).reverse());
      for (const i12 of e13)
        s12.unshift(c(i12));
    } else
      void 0 !== i11 && s12.push(c(i11));
    return s12;
  }
  static _$Ep(t9, i11) {
    const s12 = i11.attribute;
    return false === s12 ? void 0 : "string" == typeof s12 ? s12 : "string" == typeof t9 ? t9.toLowerCase() : void 0;
  }
  u() {
    var t9;
    this._$E_ = new Promise((t10) => this.enableUpdating = t10), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), null === (t9 = this.constructor.h) || void 0 === t9 || t9.forEach((t10) => t10(this));
  }
  addController(t9) {
    var i11, s12;
    (null !== (i11 = this._$ES) && void 0 !== i11 ? i11 : this._$ES = []).push(t9), void 0 !== this.renderRoot && this.isConnected && (null === (s12 = t9.hostConnected) || void 0 === s12 || s12.call(t9));
  }
  removeController(t9) {
    var i11;
    null === (i11 = this._$ES) || void 0 === i11 || i11.splice(this._$ES.indexOf(t9) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((t9, i11) => {
      this.hasOwnProperty(i11) && (this._$Ei.set(i11, this[i11]), delete this[i11]);
    });
  }
  createRenderRoot() {
    var t9;
    const s12 = null !== (t9 = this.shadowRoot) && void 0 !== t9 ? t9 : this.attachShadow(this.constructor.shadowRootOptions);
    return S(s12, this.constructor.elementStyles), s12;
  }
  connectedCallback() {
    var t9;
    void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), null === (t9 = this._$ES) || void 0 === t9 || t9.forEach((t10) => {
      var i11;
      return null === (i11 = t10.hostConnected) || void 0 === i11 ? void 0 : i11.call(t10);
    });
  }
  enableUpdating(t9) {
  }
  disconnectedCallback() {
    var t9;
    null === (t9 = this._$ES) || void 0 === t9 || t9.forEach((t10) => {
      var i11;
      return null === (i11 = t10.hostDisconnected) || void 0 === i11 ? void 0 : i11.call(t10);
    });
  }
  attributeChangedCallback(t9, i11, s12) {
    this._$AK(t9, s12);
  }
  _$EO(t9, i11, s12 = l) {
    var e13;
    const r11 = this.constructor._$Ep(t9, s12);
    if (void 0 !== r11 && true === s12.reflect) {
      const h8 = (void 0 !== (null === (e13 = s12.converter) || void 0 === e13 ? void 0 : e13.toAttribute) ? s12.converter : n2).toAttribute(i11, s12.type);
      this._$El = t9, null == h8 ? this.removeAttribute(r11) : this.setAttribute(r11, h8), this._$El = null;
    }
  }
  _$AK(t9, i11) {
    var s12;
    const e13 = this.constructor, r11 = e13._$Ev.get(t9);
    if (void 0 !== r11 && this._$El !== r11) {
      const t10 = e13.getPropertyOptions(r11), h8 = "function" == typeof t10.converter ? { fromAttribute: t10.converter } : void 0 !== (null === (s12 = t10.converter) || void 0 === s12 ? void 0 : s12.fromAttribute) ? t10.converter : n2;
      this._$El = r11, this[r11] = h8.fromAttribute(i11, t10.type), this._$El = null;
    }
  }
  requestUpdate(t9, i11, s12) {
    let e13 = true;
    void 0 !== t9 && (((s12 = s12 || this.constructor.getPropertyOptions(t9)).hasChanged || a)(this[t9], i11) ? (this._$AL.has(t9) || this._$AL.set(t9, i11), true === s12.reflect && this._$El !== t9 && (void 0 === this._$EC && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t9, s12))) : e13 = false), !this.isUpdatePending && e13 && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = true;
    try {
      await this._$E_;
    } catch (t10) {
      Promise.reject(t10);
    }
    const t9 = this.scheduleUpdate();
    return null != t9 && await t9, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t9;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((t10, i12) => this[i12] = t10), this._$Ei = void 0);
    let i11 = false;
    const s12 = this._$AL;
    try {
      i11 = this.shouldUpdate(s12), i11 ? (this.willUpdate(s12), null === (t9 = this._$ES) || void 0 === t9 || t9.forEach((t10) => {
        var i12;
        return null === (i12 = t10.hostUpdate) || void 0 === i12 ? void 0 : i12.call(t10);
      }), this.update(s12)) : this._$Ek();
    } catch (t10) {
      throw i11 = false, this._$Ek(), t10;
    }
    i11 && this._$AE(s12);
  }
  willUpdate(t9) {
  }
  _$AE(t9) {
    var i11;
    null === (i11 = this._$ES) || void 0 === i11 || i11.forEach((t10) => {
      var i12;
      return null === (i12 = t10.hostUpdated) || void 0 === i12 ? void 0 : i12.call(t10);
    }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t9)), this.updated(t9);
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
  shouldUpdate(t9) {
    return true;
  }
  update(t9) {
    void 0 !== this._$EC && (this._$EC.forEach((t10, i11) => this._$EO(i11, this[i11], t10)), this._$EC = void 0), this._$Ek();
  }
  updated(t9) {
  }
  firstUpdated(t9) {
  }
};
u[d] = true, u.elementProperties = /* @__PURE__ */ new Map(), u.elementStyles = [], u.shadowRootOptions = { mode: "open" }, null == o2 || o2({ ReactiveElement: u }), (null !== (s2 = e2.reactiveElementVersions) && void 0 !== s2 ? s2 : e2.reactiveElementVersions = []).push("1.6.2");

// node_modules/lit-html/lit-html.js
var t2;
var i2 = window;
var s3 = i2.trustedTypes;
var e3 = s3 ? s3.createPolicy("lit-html", { createHTML: (t9) => t9 }) : void 0;
var o3 = "$lit$";
var n3 = `lit$${(Math.random() + "").slice(9)}$`;
var l2 = "?" + n3;
var h2 = `<${l2}>`;
var r3 = document;
var d2 = () => r3.createComment("");
var u2 = (t9) => null === t9 || "object" != typeof t9 && "function" != typeof t9;
var c2 = Array.isArray;
var v = (t9) => c2(t9) || "function" == typeof (null == t9 ? void 0 : t9[Symbol.iterator]);
var a2 = "[ 	\n\f\r]";
var f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var _ = /-->/g;
var m = />/g;
var p = RegExp(`>|${a2}(?:([^\\s"'>=/]+)(${a2}*=${a2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
var g = /'/g;
var $2 = /"/g;
var y = /^(?:script|style|textarea|title)$/i;
var w = (t9) => (i11, ...s12) => ({ _$litType$: t9, strings: i11, values: s12 });
var x = w(1);
var b = w(2);
var T = Symbol.for("lit-noChange");
var A = Symbol.for("lit-nothing");
var E = /* @__PURE__ */ new WeakMap();
var C = r3.createTreeWalker(r3, 129, null, false);
var P = (t9, i11) => {
  const s12 = t9.length - 1, l14 = [];
  let r11, d7 = 2 === i11 ? "<svg>" : "", u8 = f;
  for (let i12 = 0; i12 < s12; i12++) {
    const s13 = t9[i12];
    let e13, c9, v6 = -1, a8 = 0;
    for (; a8 < s13.length && (u8.lastIndex = a8, c9 = u8.exec(s13), null !== c9); )
      a8 = u8.lastIndex, u8 === f ? "!--" === c9[1] ? u8 = _ : void 0 !== c9[1] ? u8 = m : void 0 !== c9[2] ? (y.test(c9[2]) && (r11 = RegExp("</" + c9[2], "g")), u8 = p) : void 0 !== c9[3] && (u8 = p) : u8 === p ? ">" === c9[0] ? (u8 = null != r11 ? r11 : f, v6 = -1) : void 0 === c9[1] ? v6 = -2 : (v6 = u8.lastIndex - c9[2].length, e13 = c9[1], u8 = void 0 === c9[3] ? p : '"' === c9[3] ? $2 : g) : u8 === $2 || u8 === g ? u8 = p : u8 === _ || u8 === m ? u8 = f : (u8 = p, r11 = void 0);
    const w7 = u8 === p && t9[i12 + 1].startsWith("/>") ? " " : "";
    d7 += u8 === f ? s13 + h2 : v6 >= 0 ? (l14.push(e13), s13.slice(0, v6) + o3 + s13.slice(v6) + n3 + w7) : s13 + n3 + (-2 === v6 ? (l14.push(void 0), i12) : w7);
  }
  const c8 = d7 + (t9[s12] || "<?>") + (2 === i11 ? "</svg>" : "");
  if (!Array.isArray(t9) || !t9.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return [void 0 !== e3 ? e3.createHTML(c8) : c8, l14];
};
var V = class _V {
  constructor({ strings: t9, _$litType$: i11 }, e13) {
    let h8;
    this.parts = [];
    let r11 = 0, u8 = 0;
    const c8 = t9.length - 1, v6 = this.parts, [a8, f7] = P(t9, i11);
    if (this.el = _V.createElement(a8, e13), C.currentNode = this.el.content, 2 === i11) {
      const t10 = this.el.content, i12 = t10.firstChild;
      i12.remove(), t10.append(...i12.childNodes);
    }
    for (; null !== (h8 = C.nextNode()) && v6.length < c8; ) {
      if (1 === h8.nodeType) {
        if (h8.hasAttributes()) {
          const t10 = [];
          for (const i12 of h8.getAttributeNames())
            if (i12.endsWith(o3) || i12.startsWith(n3)) {
              const s12 = f7[u8++];
              if (t10.push(i12), void 0 !== s12) {
                const t11 = h8.getAttribute(s12.toLowerCase() + o3).split(n3), i13 = /([.?@])?(.*)/.exec(s12);
                v6.push({ type: 1, index: r11, name: i13[2], strings: t11, ctor: "." === i13[1] ? k : "?" === i13[1] ? I : "@" === i13[1] ? L : R });
              } else
                v6.push({ type: 6, index: r11 });
            }
          for (const i12 of t10)
            h8.removeAttribute(i12);
        }
        if (y.test(h8.tagName)) {
          const t10 = h8.textContent.split(n3), i12 = t10.length - 1;
          if (i12 > 0) {
            h8.textContent = s3 ? s3.emptyScript : "";
            for (let s12 = 0; s12 < i12; s12++)
              h8.append(t10[s12], d2()), C.nextNode(), v6.push({ type: 2, index: ++r11 });
            h8.append(t10[i12], d2());
          }
        }
      } else if (8 === h8.nodeType)
        if (h8.data === l2)
          v6.push({ type: 2, index: r11 });
        else {
          let t10 = -1;
          for (; -1 !== (t10 = h8.data.indexOf(n3, t10 + 1)); )
            v6.push({ type: 7, index: r11 }), t10 += n3.length - 1;
        }
      r11++;
    }
  }
  static createElement(t9, i11) {
    const s12 = r3.createElement("template");
    return s12.innerHTML = t9, s12;
  }
};
function N(t9, i11, s12 = t9, e13) {
  var o14, n13, l14, h8;
  if (i11 === T)
    return i11;
  let r11 = void 0 !== e13 ? null === (o14 = s12._$Co) || void 0 === o14 ? void 0 : o14[e13] : s12._$Cl;
  const d7 = u2(i11) ? void 0 : i11._$litDirective$;
  return (null == r11 ? void 0 : r11.constructor) !== d7 && (null === (n13 = null == r11 ? void 0 : r11._$AO) || void 0 === n13 || n13.call(r11, false), void 0 === d7 ? r11 = void 0 : (r11 = new d7(t9), r11._$AT(t9, s12, e13)), void 0 !== e13 ? (null !== (l14 = (h8 = s12)._$Co) && void 0 !== l14 ? l14 : h8._$Co = [])[e13] = r11 : s12._$Cl = r11), void 0 !== r11 && (i11 = N(t9, r11._$AS(t9, i11.values), r11, e13)), i11;
}
var S2 = class {
  constructor(t9, i11) {
    this._$AV = [], this._$AN = void 0, this._$AD = t9, this._$AM = i11;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t9) {
    var i11;
    const { el: { content: s12 }, parts: e13 } = this._$AD, o14 = (null !== (i11 = null == t9 ? void 0 : t9.creationScope) && void 0 !== i11 ? i11 : r3).importNode(s12, true);
    C.currentNode = o14;
    let n13 = C.nextNode(), l14 = 0, h8 = 0, d7 = e13[0];
    for (; void 0 !== d7; ) {
      if (l14 === d7.index) {
        let i12;
        2 === d7.type ? i12 = new M(n13, n13.nextSibling, this, t9) : 1 === d7.type ? i12 = new d7.ctor(n13, d7.name, d7.strings, this, t9) : 6 === d7.type && (i12 = new z(n13, this, t9)), this._$AV.push(i12), d7 = e13[++h8];
      }
      l14 !== (null == d7 ? void 0 : d7.index) && (n13 = C.nextNode(), l14++);
    }
    return C.currentNode = r3, o14;
  }
  v(t9) {
    let i11 = 0;
    for (const s12 of this._$AV)
      void 0 !== s12 && (void 0 !== s12.strings ? (s12._$AI(t9, s12, i11), i11 += s12.strings.length - 2) : s12._$AI(t9[i11])), i11++;
  }
};
var M = class _M {
  constructor(t9, i11, s12, e13) {
    var o14;
    this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t9, this._$AB = i11, this._$AM = s12, this.options = e13, this._$Cp = null === (o14 = null == e13 ? void 0 : e13.isConnected) || void 0 === o14 || o14;
  }
  get _$AU() {
    var t9, i11;
    return null !== (i11 = null === (t9 = this._$AM) || void 0 === t9 ? void 0 : t9._$AU) && void 0 !== i11 ? i11 : this._$Cp;
  }
  get parentNode() {
    let t9 = this._$AA.parentNode;
    const i11 = this._$AM;
    return void 0 !== i11 && 11 === (null == t9 ? void 0 : t9.nodeType) && (t9 = i11.parentNode), t9;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t9, i11 = this) {
    t9 = N(this, t9, i11), u2(t9) ? t9 === A || null == t9 || "" === t9 ? (this._$AH !== A && this._$AR(), this._$AH = A) : t9 !== this._$AH && t9 !== T && this._(t9) : void 0 !== t9._$litType$ ? this.g(t9) : void 0 !== t9.nodeType ? this.$(t9) : v(t9) ? this.T(t9) : this._(t9);
  }
  k(t9) {
    return this._$AA.parentNode.insertBefore(t9, this._$AB);
  }
  $(t9) {
    this._$AH !== t9 && (this._$AR(), this._$AH = this.k(t9));
  }
  _(t9) {
    this._$AH !== A && u2(this._$AH) ? this._$AA.nextSibling.data = t9 : this.$(r3.createTextNode(t9)), this._$AH = t9;
  }
  g(t9) {
    var i11;
    const { values: s12, _$litType$: e13 } = t9, o14 = "number" == typeof e13 ? this._$AC(t9) : (void 0 === e13.el && (e13.el = V.createElement(e13.h, this.options)), e13);
    if ((null === (i11 = this._$AH) || void 0 === i11 ? void 0 : i11._$AD) === o14)
      this._$AH.v(s12);
    else {
      const t10 = new S2(o14, this), i12 = t10.u(this.options);
      t10.v(s12), this.$(i12), this._$AH = t10;
    }
  }
  _$AC(t9) {
    let i11 = E.get(t9.strings);
    return void 0 === i11 && E.set(t9.strings, i11 = new V(t9)), i11;
  }
  T(t9) {
    c2(this._$AH) || (this._$AH = [], this._$AR());
    const i11 = this._$AH;
    let s12, e13 = 0;
    for (const o14 of t9)
      e13 === i11.length ? i11.push(s12 = new _M(this.k(d2()), this.k(d2()), this, this.options)) : s12 = i11[e13], s12._$AI(o14), e13++;
    e13 < i11.length && (this._$AR(s12 && s12._$AB.nextSibling, e13), i11.length = e13);
  }
  _$AR(t9 = this._$AA.nextSibling, i11) {
    var s12;
    for (null === (s12 = this._$AP) || void 0 === s12 || s12.call(this, false, true, i11); t9 && t9 !== this._$AB; ) {
      const i12 = t9.nextSibling;
      t9.remove(), t9 = i12;
    }
  }
  setConnected(t9) {
    var i11;
    void 0 === this._$AM && (this._$Cp = t9, null === (i11 = this._$AP) || void 0 === i11 || i11.call(this, t9));
  }
};
var R = class {
  constructor(t9, i11, s12, e13, o14) {
    this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t9, this.name = i11, this._$AM = e13, this.options = o14, s12.length > 2 || "" !== s12[0] || "" !== s12[1] ? (this._$AH = Array(s12.length - 1).fill(new String()), this.strings = s12) : this._$AH = A;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t9, i11 = this, s12, e13) {
    const o14 = this.strings;
    let n13 = false;
    if (void 0 === o14)
      t9 = N(this, t9, i11, 0), n13 = !u2(t9) || t9 !== this._$AH && t9 !== T, n13 && (this._$AH = t9);
    else {
      const e14 = t9;
      let l14, h8;
      for (t9 = o14[0], l14 = 0; l14 < o14.length - 1; l14++)
        h8 = N(this, e14[s12 + l14], i11, l14), h8 === T && (h8 = this._$AH[l14]), n13 || (n13 = !u2(h8) || h8 !== this._$AH[l14]), h8 === A ? t9 = A : t9 !== A && (t9 += (null != h8 ? h8 : "") + o14[l14 + 1]), this._$AH[l14] = h8;
    }
    n13 && !e13 && this.j(t9);
  }
  j(t9) {
    t9 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t9 ? t9 : "");
  }
};
var k = class extends R {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t9) {
    this.element[this.name] = t9 === A ? void 0 : t9;
  }
};
var H = s3 ? s3.emptyScript : "";
var I = class extends R {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t9) {
    t9 && t9 !== A ? this.element.setAttribute(this.name, H) : this.element.removeAttribute(this.name);
  }
};
var L = class extends R {
  constructor(t9, i11, s12, e13, o14) {
    super(t9, i11, s12, e13, o14), this.type = 5;
  }
  _$AI(t9, i11 = this) {
    var s12;
    if ((t9 = null !== (s12 = N(this, t9, i11, 0)) && void 0 !== s12 ? s12 : A) === T)
      return;
    const e13 = this._$AH, o14 = t9 === A && e13 !== A || t9.capture !== e13.capture || t9.once !== e13.once || t9.passive !== e13.passive, n13 = t9 !== A && (e13 === A || o14);
    o14 && this.element.removeEventListener(this.name, this, e13), n13 && this.element.addEventListener(this.name, this, t9), this._$AH = t9;
  }
  handleEvent(t9) {
    var i11, s12;
    "function" == typeof this._$AH ? this._$AH.call(null !== (s12 = null === (i11 = this.options) || void 0 === i11 ? void 0 : i11.host) && void 0 !== s12 ? s12 : this.element, t9) : this._$AH.handleEvent(t9);
  }
};
var z = class {
  constructor(t9, i11, s12) {
    this.element = t9, this.type = 6, this._$AN = void 0, this._$AM = i11, this.options = s12;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t9) {
    N(this, t9);
  }
};
var Z = { O: o3, P: n3, A: l2, C: 1, M: P, L: S2, D: v, R: N, I: M, V: R, H: I, N: L, U: k, F: z };
var j = i2.litHtmlPolyfillSupport;
null == j || j(V, M), (null !== (t2 = i2.litHtmlVersions) && void 0 !== t2 ? t2 : i2.litHtmlVersions = []).push("2.7.4");
var B = (t9, i11, s12) => {
  var e13, o14;
  const n13 = null !== (e13 = null == s12 ? void 0 : s12.renderBefore) && void 0 !== e13 ? e13 : i11;
  let l14 = n13._$litPart$;
  if (void 0 === l14) {
    const t10 = null !== (o14 = null == s12 ? void 0 : s12.renderBefore) && void 0 !== o14 ? o14 : null;
    n13._$litPart$ = l14 = new M(i11.insertBefore(d2(), t10), t10, void 0, null != s12 ? s12 : {});
  }
  return l14._$AI(t9), l14;
};

// node_modules/lit-element/lit-element.js
var l3;
var o4;
var s4 = class extends u {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t9, e13;
    const i11 = super.createRenderRoot();
    return null !== (t9 = (e13 = this.renderOptions).renderBefore) && void 0 !== t9 || (e13.renderBefore = i11.firstChild), i11;
  }
  update(t9) {
    const i11 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t9), this._$Do = B(i11, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t9;
    super.connectedCallback(), null === (t9 = this._$Do) || void 0 === t9 || t9.setConnected(true);
  }
  disconnectedCallback() {
    var t9;
    super.disconnectedCallback(), null === (t9 = this._$Do) || void 0 === t9 || t9.setConnected(false);
  }
  render() {
    return T;
  }
};
s4.finalized = true, s4._$litElement$ = true, null === (l3 = globalThis.litElementHydrateSupport) || void 0 === l3 || l3.call(globalThis, { LitElement: s4 });
var n4 = globalThis.litElementPolyfillSupport;
null == n4 || n4({ LitElement: s4 });
(null !== (o4 = globalThis.litElementVersions) && void 0 !== o4 ? o4 : globalThis.litElementVersions = []).push("3.3.2");

// node_modules/@lit/reactive-element/decorators/custom-element.js
var e4 = (e13) => (n13) => "function" == typeof n13 ? ((e14, n14) => (customElements.define(e14, n14), n14))(e13, n13) : ((e14, n14) => {
  const { kind: t9, elements: s12 } = n14;
  return { kind: t9, elements: s12, finisher(n15) {
    customElements.define(e14, n15);
  } };
})(e13, n13);

// node_modules/@lit/reactive-element/decorators/property.js
var i3 = (i11, e13) => "method" === e13.kind && e13.descriptor && !("value" in e13.descriptor) ? { ...e13, finisher(n13) {
  n13.createProperty(e13.key, i11);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e13.key, initializer() {
  "function" == typeof e13.initializer && (this[e13.key] = e13.initializer.call(this));
}, finisher(n13) {
  n13.createProperty(e13.key, i11);
} };
var e5 = (i11, e13, n13) => {
  e13.constructor.createProperty(n13, i11);
};
function n5(n13) {
  return (t9, o14) => void 0 !== o14 ? e5(n13, t9, o14) : i3(n13, t9);
}

// node_modules/@lit/reactive-element/decorators/state.js
function t3(t9) {
  return n5({ ...t9, state: true });
}

// node_modules/@lit/reactive-element/decorators/base.js
var o5 = ({ finisher: e13, descriptor: t9 }) => (o14, n13) => {
  var r11;
  if (void 0 === n13) {
    const n14 = null !== (r11 = o14.originalKey) && void 0 !== r11 ? r11 : o14.key, i11 = null != t9 ? { kind: "method", placement: "prototype", key: n14, descriptor: t9(o14.key) } : { ...o14, key: n14 };
    return null != e13 && (i11.finisher = function(t10) {
      e13(t10, n14);
    }), i11;
  }
  {
    const r12 = o14.constructor;
    void 0 !== t9 && Object.defineProperty(o14, n13, t9(n13)), null == e13 || e13(r12, n13);
  }
};

// node_modules/@lit/reactive-element/decorators/query.js
function i4(i11, n13) {
  return o5({ descriptor: (o14) => {
    const t9 = { get() {
      var o15, n14;
      return null !== (n14 = null === (o15 = this.renderRoot) || void 0 === o15 ? void 0 : o15.querySelector(i11)) && void 0 !== n14 ? n14 : null;
    }, enumerable: true, configurable: true };
    if (n13) {
      const n14 = "symbol" == typeof o14 ? Symbol() : "__" + o14;
      t9.get = function() {
        var o15, t10;
        return void 0 === this[n14] && (this[n14] = null !== (t10 = null === (o15 = this.renderRoot) || void 0 === o15 ? void 0 : o15.querySelector(i11)) && void 0 !== t10 ? t10 : null), this[n14];
      };
    }
    return t9;
  } });
}

// node_modules/@lit/reactive-element/decorators/query-assigned-elements.js
var n6;
var e6 = null != (null === (n6 = window.HTMLSlotElement) || void 0 === n6 ? void 0 : n6.prototype.assignedElements) ? (o14, n13) => o14.assignedElements(n13) : (o14, n13) => o14.assignedNodes(n13).filter((o15) => o15.nodeType === Node.ELEMENT_NODE);

// src/make_value_change_emitter.ts
var DATA_PASSING_EVENT_ID = "shiny-data-passing-event";
function makeDataPassingPayload(id, msg) {
  return { ...msg, id };
}
function makeValueChangeEmitter(el, id) {
  return (payload) => {
    const event = new CustomEvent(DATA_PASSING_EVENT_ID, {
      detail: makeDataPassingPayload(id, payload),
      bubbles: true
    });
    el.dispatchEvent(event);
  };
}

// src/shiny/OptionalShiny.ts
var Shiny = window.Shiny;

// src/shiny/make-input-binding.ts
function makeInputBinding(tagName, { type = null } = {}) {
  if (!Shiny) {
    return;
  }
  class NewCustomBinding extends Shiny["InputBinding"] {
    constructor() {
      super();
    }
    find(scope) {
      return $(scope).find(tagName);
    }
    getValue(el) {
      if ("getValue" in el) {
        return el.getValue();
      } else {
        return el.value;
      }
    }
    getType(el) {
      return type;
    }
    subscribe(el, callback) {
      el.onChangeCallback = callback;
    }
    unsubscribe(el) {
      el.onChangeCallback = (x7) => {
      };
    }
  }
  Shiny.inputBindings.register(new NewCustomBinding(), `${tagName}-Binding`);
}

// src/forge/dark-mode-switch.ts
var ForgeDarkModeSwitch = class extends s4 {
  constructor() {
    super(...arguments);
    this.themeValue = "light";
    this.onChangeCallback = (x7) => {
    };
    this.onValueChange = makeValueChangeEmitter(this, this.id);
  }
  static {
    this.styles = [
      i`
      .sun-and-moon > :is(.moon, .sun, .sun-beams) {
        transform-origin: center center;
      }

      .sun-and-moon > .sun {
        fill: none;
        stroke: var(--text-1);
        stroke-width: var(--stroke-w);
      }

      button:is(:hover, :focus-visible)
        > :is(.sun-and-moon > :is(.moon, .sun)) {
        fill: var(--text-2);
      }

      .sun-and-moon > .sun-beams {
        stroke: var(--text-1);
        stroke-width: var(--stroke-w);
      }

      button:is(:hover, :focus-visible) :is(.sun-and-moon > .sun-beams) {
        background-color: var(--text-2);
      }

      [data-theme="dark"] .sun-and-moon > .sun {
        fill: var(--text-1);
        stroke: none;
        stroke-width: 0;
        transform: scale(1.6);
      }

      [data-theme="dark"] .sun-and-moon > .sun-beams {
        opacity: 0;
      }

      [data-theme="dark"] .sun-and-moon > .moon > circle {
        transform: translateX(-10px);
      }

      @supports (cx: 1) {
        [data-theme="dark"] .sun-and-moon > .moon > circle {
          transform: translateX(0);
          cx: 15;
        }
      }
    `,
      // Transitions
      i`
      .sun-and-moon > .sun {
        transition: transform var(--speed-fast) var(--ease-in-out-2)
            var(--speed-fast),
          fill var(--speed-fast) var(--ease-in-out-2) var(--speed-fast),
          stroke-width var(--speed-normal) var(--ease-in-out-2);
      }

      .sun-and-moon > .sun-beams {
        transition: transform var(--speed-fast) var(--ease-out-3),
          opacity var(--speed-fast) var(--ease-out-4);
        transition-delay: var(--speed-normal);
      }

      .sun-and-moon .moon > circle {
        transition: transform var(--speed-fast) var(--ease-in-out-2),
          fill var(--speed-fast) var(--ease-in-out-2);
        transition-delay: 0s;
      }

      @supports (cx: 1) {
        .sun-and-moon .moon > circle {
          transition: cx var(--speed-normal) var(--ease-in-out-2);
        }

        [data-theme="dark"] .sun-and-moon .moon > circle {
          transition: cx var(--speed-fast) var(--ease-in-out-2);
          transition-delay: var(--speed-fast);
        }
      }

      [data-theme="dark"] .sun-and-moon > .sun {
        transition-delay: 0s;
        transition-duration: var(--speed-normal);
        transition-timing-function: var(--ease-in-out-2);
      }

      [data-theme="dark"] .sun-and-moon > .sun-beams {
        transform: scale(0.3);
        transition: transform var(--speed-normal) var(--ease-in-out-2),
          opacity var(--speed-fast) var(--ease-out-1);
        transition-delay: 0s;
      }
    `,
      i`
      :host {
        display: inline-block;

        /* We control the stroke size manually here. We don't want it getting so
        small its not visible but also not so big it looks cartoonish */
        --stroke-w: clamp(1px, 0.1em, 6px);
      }

      button {
        /* This is needed to let the svg use the em sizes */
        font-size: inherit;

        /* Make sure the button is fully centered */
        display: grid;
        place-content: center;

        /* A little bit of padding to make it easier to press */
        padding: var(--size-xxs);
        background: none;
        border: none;
        aspect-ratio: 1;
        border-radius: 50%;
        cursor: pointer;
        touch-action: manipulation;
        -webkit-tap-highlight-color: transparent;
        outline-offset: var(--size-xxs);

        /* Move down to adjust for being large than 1em */

        /* Size of the icon, uses em units so it scales to font-size */
        --size: 1.3em;

        /* Because we are (most likely) bigger than one em we will need to move
        the button up or down to keep it looking right inline */
        --vertical_correction: calc((var(--size) - 1em) / 2);

        transform: translateY(var(--vertical_correction));
        margin-block-end: var(--vertical_correction);
      }

      /*
      button:is(:hover, :focus-visible) {
        background: var(--surface-4);
      }
      */

      button > svg {
        height: var(--size);
        width: var(--size);
        stroke-linecap: round;
        overflow: visible;
      }

      svg line,
      svg circle {
        vector-effect: non-scaling-stroke;
      }
    `
    ];
  }
  connectedCallback() {
    super.connectedCallback();
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      this.themeValue = "dark";
    }
    this.setPreference();
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({ matches: isDark }) => {
      this.themeValue = isDark ? "dark" : "light";
      this.setPreference();
    });
  }
  getValue() {
    return this.themeValue;
  }
  render() {
    return x`
      <button
        title="Toggles light & dark"
        aria-label="auto"
        aria-live="polite"
        data-theme="${this.themeValue}"
        @click="${this.onClick}"
      >
        <svg class="sun-and-moon" aria-hidden="true" viewBox="0 0 24 24">
          <mask class="moon" id="moon-mask">
            <rect x="0" y="0" width="100%" height="100%" fill="white" />
            <circle cx="25" cy="10" r="6" fill="black" />
          </mask>
          <circle
            class="sun"
            cx="12"
            cy="12"
            r="6"
            mask="url(#moon-mask)"
            fill="currentColor"
          />
          <g class="sun-beams" stroke="currentColor">
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </g>
        </svg>
      </button>
    `;
  }
  onClick(e13) {
    e13.stopPropagation();
    this.themeValue = this.themeValue === "light" ? "dark" : "light";
    this.setPreference();
    this.onChangeCallback(true);
  }
  setPreference() {
    document.documentElement.dataset["shinytheme"] = this.themeValue;
    this.reflectPreference();
  }
  reflectPreference() {
    this.shadowRoot?.querySelector("button")?.setAttribute("data-theme", this.themeValue);
    this.shadowRoot?.querySelector("button")?.setAttribute("aria-label", this.themeValue);
  }
};
__decorateClass([
  n5({ type: String })
], ForgeDarkModeSwitch.prototype, "themeValue", 2);
customElements.define("forge-dark-mode-switch", ForgeDarkModeSwitch);
makeInputBinding("forge-dark-mode-switch");

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6M63UXML.js
var __defProp2 = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a8, b6) => {
  for (var prop in b6 || (b6 = {}))
    if (__hasOwnProp2.call(b6, prop))
      __defNormalProp(a8, prop, b6[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b6)) {
      if (__propIsEnum.call(b6, prop))
        __defNormalProp(a8, prop, b6[prop]);
    }
  return a8;
};
var __spreadProps = (a8, b6) => __defProps(a8, __getOwnPropDescs(b6));
var __decorateClass2 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc2(target, key) : target;
  for (var i11 = decorators.length - 1, decorator; i11 >= 0; i11--)
    if (decorator = decorators[i11])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp2(target, key, result);
  return result;
};

// node_modules/@shoelace-style/shoelace/dist/utilities/base-path.js
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
      const fallbackScript = scripts.find((s12) => {
        return /shoelace(\.min)?\.js($|\?)/.test(s12.src) || /shoelace-autoloader(\.min)?\.js($|\?)/.test(s12.src);
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

// node_modules/@shoelace-style/shoelace/dist/components/icon/library.default.js
var library = {
  name: "default",
  resolver: (name) => getBasePath(`assets/icons/${name}.svg`)
};
var library_default_default = library;

// node_modules/@shoelace-style/shoelace/dist/components/icon/library.system.js
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

// node_modules/@shoelace-style/shoelace/dist/components/icon/library.js
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

// node_modules/lit-html/directive-helpers.js
var { I: l5 } = Z;
var n7 = (o14, l14) => void 0 === l14 ? void 0 !== (null == o14 ? void 0 : o14._$litType$) : (null == o14 ? void 0 : o14._$litType$) === l14;
var e7 = (o14) => void 0 === o14.strings;
var f2 = {};
var s5 = (o14, l14 = f2) => o14._$AH = l14;

// node_modules/@shoelace-style/shoelace/dist/internal/watch.js
function watch(propertyName, options) {
  const resolvedOptions = Object.assign({ waitUntilFirstUpdate: false }, options);
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

// node_modules/@shoelace-style/shoelace/dist/internal/shoelace-element.js
var __decorate = function(decorators, target, key, desc) {
  var c8 = arguments.length, r11 = c8 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d7;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r11 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i11 = decorators.length - 1; i11 >= 0; i11--)
      if (d7 = decorators[i11])
        r11 = (c8 < 3 ? d7(r11) : c8 > 3 ? d7(target, key, r11) : d7(target, key)) || r11;
  return c8 > 3 && r11 && Object.defineProperty(target, key, r11), r11;
};
var ShoelaceElement = class extends s4 {
  emit(name, options) {
    const event = new CustomEvent(name, Object.assign({ bubbles: true, cancelable: false, composed: true, detail: {} }, options));
    this.dispatchEvent(event);
    return event;
  }
};
__decorate([
  n5()
], ShoelaceElement.prototype, "dir", void 0);
__decorate([
  n5()
], ShoelaceElement.prototype, "lang", void 0);

// node_modules/@shoelace-style/shoelace/dist/styles/component.styles.js
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

// node_modules/@shoelace-style/shoelace/dist/components/icon/icon.styles.js
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

// node_modules/@shoelace-style/shoelace/dist/components/icon/icon.js
var CACHEABLE_ERROR = Symbol();
var RETRYABLE_ERROR = Symbol();
var parser;
var iconCache = /* @__PURE__ */ new Map();
var SlIcon = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.initialRender = false;
    this.svg = null;
    this.label = "";
    this.library = "default";
  }
  /** Given a URL, this function returns the resulting SVG element or an appropriate error symbol. */
  async resolveIcon(url, library2) {
    var _a;
    let fileData;
    if (library2 == null ? void 0 : library2.spriteSheet) {
      return x`<svg part="svg">
        <use part="use" href="${url}"></use>
      </svg>`;
    }
    try {
      fileData = await fetch(url, { mode: "cors" });
      if (!fileData.ok)
        return fileData.status === 410 ? CACHEABLE_ERROR : RETRYABLE_ERROR;
    } catch (e13) {
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
    } catch (e13) {
      return CACHEABLE_ERROR;
    }
  }
  connectedCallback() {
    super.connectedCallback();
    watchIcon(this);
  }
  firstUpdated() {
    this.initialRender = true;
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
      iconResolver = this.resolveIcon(url, library2);
      iconCache.set(url, iconResolver);
    }
    if (!this.initialRender) {
      return;
    }
    const svg = await iconResolver;
    if (svg === RETRYABLE_ERROR) {
      iconCache.delete(url);
    }
    if (url !== this.getUrl()) {
      return;
    }
    if (n7(svg)) {
      this.svg = svg;
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
__decorateClass2([
  t3()
], SlIcon.prototype, "svg", 2);
__decorateClass2([
  n5({ reflect: true })
], SlIcon.prototype, "name", 2);
__decorateClass2([
  n5()
], SlIcon.prototype, "src", 2);
__decorateClass2([
  n5()
], SlIcon.prototype, "label", 2);
__decorateClass2([
  n5({ reflect: true })
], SlIcon.prototype, "library", 2);
__decorateClass2([
  watch("label")
], SlIcon.prototype, "handleLabelChange", 1);
__decorateClass2([
  watch(["name", "src", "library"])
], SlIcon.prototype, "setIcon", 1);
SlIcon = __decorateClass2([
  e4("sl-icon")
], SlIcon);

// node_modules/@shoelace-style/localize/dist/index.js
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
  translation2.map((t9) => {
    const code = t9.$code.toLowerCase();
    if (translations.has(code)) {
      translations.set(code, Object.assign(Object.assign({}, translations.get(code)), t9));
    } else {
      translations.set(code, t9);
    }
    if (!fallback) {
      fallback = t9;
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

// node_modules/@shoelace-style/shoelace/dist/translations/en.js
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

// node_modules/@shoelace-style/shoelace/dist/utilities/localize.js
var LocalizeController2 = class extends LocalizeController {
};

// node_modules/@shoelace-style/shoelace/dist/components/spinner/spinner.styles.js
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

// node_modules/@shoelace-style/shoelace/dist/components/spinner/spinner.js
var SlSpinner = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController2(this);
  }
  render() {
    return x`
      <svg part="base" class="spinner" role="progressbar" aria-valuetext=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `;
  }
};
SlSpinner.styles = spinner_styles_default;
SlSpinner = __decorateClass2([
  e4("sl-spinner")
], SlSpinner);

// node_modules/lit-html/directive.js
var t4 = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 };
var e8 = (t9) => (...e13) => ({ _$litDirective$: t9, values: e13 });
var i5 = class {
  constructor(t9) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t9, e13, i11) {
    this._$Ct = t9, this._$AM = e13, this._$Ci = i11;
  }
  _$AS(t9, e13) {
    return this.update(t9, e13);
  }
  update(t9, e13) {
    return this.render(...e13);
  }
};

// node_modules/lit-html/directives/class-map.js
var o6 = e8(class extends i5 {
  constructor(t9) {
    var i11;
    if (super(t9), t9.type !== t4.ATTRIBUTE || "class" !== t9.name || (null === (i11 = t9.strings) || void 0 === i11 ? void 0 : i11.length) > 2)
      throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(t9) {
    return " " + Object.keys(t9).filter((i11) => t9[i11]).join(" ") + " ";
  }
  update(i11, [s12]) {
    var r11, o14;
    if (void 0 === this.it) {
      this.it = /* @__PURE__ */ new Set(), void 0 !== i11.strings && (this.nt = new Set(i11.strings.join(" ").split(/\s/).filter((t9) => "" !== t9)));
      for (const t9 in s12)
        s12[t9] && !(null === (r11 = this.nt) || void 0 === r11 ? void 0 : r11.has(t9)) && this.it.add(t9);
      return this.render(s12);
    }
    const e13 = i11.element.classList;
    this.it.forEach((t9) => {
      t9 in s12 || (e13.remove(t9), this.it.delete(t9));
    });
    for (const t9 in s12) {
      const i12 = !!s12[t9];
      i12 === this.it.has(t9) || (null === (o14 = this.nt) || void 0 === o14 ? void 0 : o14.has(t9)) || (i12 ? (e13.add(t9), this.it.add(t9)) : (e13.remove(t9), this.it.delete(t9)));
    }
    return T;
  }
});

// node_modules/@shoelace-style/shoelace/dist/internal/form.js
var formCollections = /* @__PURE__ */ new WeakMap();
var reportValidityOverloads = /* @__PURE__ */ new WeakMap();
var userInteractedControls = /* @__PURE__ */ new WeakSet();
var interactions = /* @__PURE__ */ new WeakMap();
var FormControlController = class {
  constructor(host, options) {
    (this.host = host).addController(this);
    this.options = Object.assign({ form: (input) => {
      if (input.hasAttribute("form") && input.getAttribute("form") !== "") {
        const root = input.getRootNode();
        const formId = input.getAttribute("form");
        if (formId) {
          return root.getElementById(formId);
        }
      }
      return input.closest("form");
    }, name: (input) => input.name, value: (input) => input.value, defaultValue: (input) => input.defaultValue, disabled: (input) => {
      var _a;
      return (_a = input.disabled) !== null && _a !== void 0 ? _a : false;
    }, reportValidity: (input) => typeof input.reportValidity === "function" ? input.reportValidity() : true, setValue: (input, value) => input.value = value, assumeInteractionOn: ["sl-input"] }, options);
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
      (_a = formCollections.get(this.form)) === null || _a === void 0 ? void 0 : _a.delete(this.host);
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
      (_a = formCollections.get(this.form)) === null || _a === void 0 ? void 0 : _a.forEach((control) => {
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
  getForm() {
    var _a;
    return (_a = this.form) !== null && _a !== void 0 ? _a : null;
  }
  reset(submitter) {
    this.doAction("reset", submitter);
  }
  submit(submitter) {
    this.doAction("submit", submitter);
  }
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
  updateValidity() {
    const host = this.host;
    this.setValidity(host.validity.valid);
  }
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
      originalInvalidEvent === null || originalInvalidEvent === void 0 ? void 0 : originalInvalidEvent.preventDefault();
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
var valueMissingValidityState = Object.freeze(Object.assign(Object.assign({}, validValidityState), { valid: false, valueMissing: true }));
var customErrorValidityState = Object.freeze(Object.assign(Object.assign({}, validValidityState), { valid: false, customError: true }));

// node_modules/@shoelace-style/shoelace/dist/internal/slot.js
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

// node_modules/lit-html/static.js
var e9 = Symbol.for("");
var l6 = (t9) => {
  if ((null == t9 ? void 0 : t9.r) === e9)
    return null == t9 ? void 0 : t9._$litStatic$;
};
var i6 = (t9, ...r11) => ({ _$litStatic$: r11.reduce((r12, e13, l14) => r12 + ((t10) => {
  if (void 0 !== t10._$litStatic$)
    return t10._$litStatic$;
  throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t10}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`);
})(e13) + t9[l14 + 1], t9[0]), r: e9 });
var s6 = /* @__PURE__ */ new Map();
var a3 = (t9) => (r11, ...e13) => {
  const o14 = e13.length;
  let i11, a8;
  const n13 = [], u8 = [];
  let c8, $5 = 0, f7 = false;
  for (; $5 < o14; ) {
    for (c8 = r11[$5]; $5 < o14 && void 0 !== (a8 = e13[$5], i11 = l6(a8)); )
      c8 += i11 + r11[++$5], f7 = true;
    $5 !== o14 && u8.push(a8), n13.push(c8), $5++;
  }
  if ($5 === o14 && n13.push(r11[o14]), f7) {
    const t10 = n13.join("$$lit$$");
    void 0 === (r11 = s6.get(t10)) && (n13.raw = n13, s6.set(t10, r11 = n13)), e13 = u8;
  }
  return t9(r11, ...e13);
};
var n8 = a3(x);
var u3 = a3(b);

// node_modules/lit-html/directives/if-defined.js
var l7 = (l14) => null != l14 ? l14 : A;

// node_modules/@shoelace-style/shoelace/dist/components/button/button.styles.js
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
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
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

// node_modules/@shoelace-style/shoelace/dist/components/button/button.js
var SlButton = class extends ShoelaceElement {
  constructor() {
    super();
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
    this.handleHostClick = (event) => {
      if (this.disabled || this.loading) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    };
    this.addEventListener("click", this.handleHostClick);
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
    const tag = isLink ? i6`a` : i6`button`;
    return n8`
      <${tag}
        part="base"
        class=${o6({
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
        ?disabled=${l7(isLink ? void 0 : this.disabled)}
        type=${l7(isLink ? void 0 : this.type)}
        title=${this.title}
        name=${l7(isLink ? void 0 : this.name)}
        value=${l7(isLink ? void 0 : this.value)}
        href=${l7(isLink ? this.href : void 0)}
        target=${l7(isLink ? this.target : void 0)}
        download=${l7(isLink ? this.download : void 0)}
        rel=${l7(isLink ? this.rel : void 0)}
        role=${l7(isLink ? void 0 : "button")}
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
        ${this.caret ? n8` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> ` : ""}
        ${this.loading ? n8`<sl-spinner></sl-spinner>` : ""}
      </${tag}>
    `;
  }
};
SlButton.styles = button_styles_default;
__decorateClass2([
  i4(".button")
], SlButton.prototype, "button", 2);
__decorateClass2([
  t3()
], SlButton.prototype, "hasFocus", 2);
__decorateClass2([
  t3()
], SlButton.prototype, "invalid", 2);
__decorateClass2([
  n5()
], SlButton.prototype, "title", 2);
__decorateClass2([
  n5({ reflect: true })
], SlButton.prototype, "variant", 2);
__decorateClass2([
  n5({ reflect: true })
], SlButton.prototype, "size", 2);
__decorateClass2([
  n5({ type: Boolean, reflect: true })
], SlButton.prototype, "caret", 2);
__decorateClass2([
  n5({ type: Boolean, reflect: true })
], SlButton.prototype, "disabled", 2);
__decorateClass2([
  n5({ type: Boolean, reflect: true })
], SlButton.prototype, "loading", 2);
__decorateClass2([
  n5({ type: Boolean, reflect: true })
], SlButton.prototype, "outline", 2);
__decorateClass2([
  n5({ type: Boolean, reflect: true })
], SlButton.prototype, "pill", 2);
__decorateClass2([
  n5({ type: Boolean, reflect: true })
], SlButton.prototype, "circle", 2);
__decorateClass2([
  n5()
], SlButton.prototype, "type", 2);
__decorateClass2([
  n5()
], SlButton.prototype, "name", 2);
__decorateClass2([
  n5()
], SlButton.prototype, "value", 2);
__decorateClass2([
  n5()
], SlButton.prototype, "href", 2);
__decorateClass2([
  n5()
], SlButton.prototype, "target", 2);
__decorateClass2([
  n5()
], SlButton.prototype, "rel", 2);
__decorateClass2([
  n5()
], SlButton.prototype, "download", 2);
__decorateClass2([
  n5()
], SlButton.prototype, "form", 2);
__decorateClass2([
  n5({ attribute: "formaction" })
], SlButton.prototype, "formAction", 2);
__decorateClass2([
  n5({ attribute: "formenctype" })
], SlButton.prototype, "formEnctype", 2);
__decorateClass2([
  n5({ attribute: "formmethod" })
], SlButton.prototype, "formMethod", 2);
__decorateClass2([
  n5({ attribute: "formnovalidate", type: Boolean })
], SlButton.prototype, "formNoValidate", 2);
__decorateClass2([
  n5({ attribute: "formtarget" })
], SlButton.prototype, "formTarget", 2);
__decorateClass2([
  watch("disabled", { waitUntilFirstUpdate: true })
], SlButton.prototype, "handleDisabledChange", 1);
SlButton = __decorateClass2([
  e4("sl-button")
], SlButton);

// src/forge/input-action-button.ts
var ForgeInputActionButton = class extends SlButton {
  constructor() {
    super();
    this.nClicks = 0;
    this.onChangeCallback = (x7) => {
    };
    this.onValueChange = () => {
    };
    this.addEventListener("click", (e13) => {
      this.nClicks++;
      this.onChangeCallback(true);
    });
  }
  static {
    this.styles = [
      SlButton.styles,
      i`
      .button--standard.button--default {
        background-color: var(--sl-color-neutral-50);
        color: var(--sl-color-neutral-900);
      }

      .button--standard.button--default:hover:not(.button--disabled) {
        background-color: var(--sl-color-neutral-0);
        color: var(--sl-color-neutral-900);
      }

      .button--standard.button--default:active:not(.button--disabled) {
        background-color: var(--sl-color-neutral-100);
      }
    `
    ];
  }
  getValue() {
    return this.nClicks;
  }
};
__decorateClass([
  n5({ type: Number })
], ForgeInputActionButton.prototype, "nClicks", 2);
customElements.define("forge-input-action-button", ForgeInputActionButton);
makeInputBinding("forge-input-action-button");

// node_modules/@shoelace-style/shoelace/dist/internal/default-value.js
var defaultValue = (propertyName = "value") => (proto, key) => {
  const ctor = proto.constructor;
  const attributeChangedCallback = ctor.prototype.attributeChangedCallback;
  ctor.prototype.attributeChangedCallback = function(name, old, value) {
    var _a;
    const options = ctor.getPropertyOptions(propertyName);
    const attributeName = typeof options.attribute === "string" ? options.attribute : propertyName;
    if (name === attributeName) {
      const converter = options.converter || n2;
      const fromAttribute = typeof converter === "function" ? converter : (_a = converter === null || converter === void 0 ? void 0 : converter.fromAttribute) !== null && _a !== void 0 ? _a : n2.fromAttribute;
      const newValue = fromAttribute(value, options.type);
      if (this[propertyName] !== newValue) {
        this[key] = newValue;
      }
    }
    attributeChangedCallback.call(this, name, old, value);
  };
};

// node_modules/lit-html/directives/live.js
var l8 = e8(class extends i5 {
  constructor(r11) {
    if (super(r11), r11.type !== t4.PROPERTY && r11.type !== t4.ATTRIBUTE && r11.type !== t4.BOOLEAN_ATTRIBUTE)
      throw Error("The `live` directive is not allowed on child or event bindings");
    if (!e7(r11))
      throw Error("`live` bindings can only contain a single expression");
  }
  render(r11) {
    return r11;
  }
  update(i11, [t9]) {
    if (t9 === T || t9 === A)
      return t9;
    const o14 = i11.element, l14 = i11.name;
    if (i11.type === t4.PROPERTY) {
      if (t9 === o14[l14])
        return T;
    } else if (i11.type === t4.BOOLEAN_ATTRIBUTE) {
      if (!!t9 === o14.hasAttribute(l14))
        return T;
    } else if (i11.type === t4.ATTRIBUTE && o14.getAttribute(l14) === t9 + "")
      return T;
    return s5(i11), t9;
  }
});

// node_modules/@shoelace-style/shoelace/dist/components/checkbox/checkbox.styles.js
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

// node_modules/@shoelace-style/shoelace/dist/components/checkbox/checkbox.js
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
    return x`
      <label
        part="base"
        class=${o6({
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
          value=${l7(this.value)}
          .indeterminate=${l8(this.indeterminate)}
          .checked=${l8(this.checked)}
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
          ${this.checked ? x`
                <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
              ` : ""}
          ${!this.checked && this.indeterminate ? x`
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
__decorateClass2([
  i4('input[type="checkbox"]')
], SlCheckbox.prototype, "input", 2);
__decorateClass2([
  t3()
], SlCheckbox.prototype, "hasFocus", 2);
__decorateClass2([
  n5()
], SlCheckbox.prototype, "title", 2);
__decorateClass2([
  n5()
], SlCheckbox.prototype, "name", 2);
__decorateClass2([
  n5()
], SlCheckbox.prototype, "value", 2);
__decorateClass2([
  n5({ reflect: true })
], SlCheckbox.prototype, "size", 2);
__decorateClass2([
  n5({ type: Boolean, reflect: true })
], SlCheckbox.prototype, "disabled", 2);
__decorateClass2([
  n5({ type: Boolean, reflect: true })
], SlCheckbox.prototype, "checked", 2);
__decorateClass2([
  n5({ type: Boolean, reflect: true })
], SlCheckbox.prototype, "indeterminate", 2);
__decorateClass2([
  defaultValue("checked")
], SlCheckbox.prototype, "defaultChecked", 2);
__decorateClass2([
  n5({ reflect: true })
], SlCheckbox.prototype, "form", 2);
__decorateClass2([
  n5({ type: Boolean, reflect: true })
], SlCheckbox.prototype, "required", 2);
__decorateClass2([
  watch("disabled", { waitUntilFirstUpdate: true })
], SlCheckbox.prototype, "handleDisabledChange", 1);
__decorateClass2([
  watch(["checked", "indeterminate"], { waitUntilFirstUpdate: true })
], SlCheckbox.prototype, "handleStateChange", 1);
SlCheckbox = __decorateClass2([
  e4("sl-checkbox")
], SlCheckbox);

// src/forge/input-checkbox.ts
var ForgeInputCheckbox = class extends SlCheckbox {
  constructor() {
    super();
    this.inline = false;
    this.onChangeCallback = (x7) => {
    };
    this.onValueChange = () => {
    };
    if (this.id) {
      this.onValueChange = makeValueChangeEmitter(this, this.id);
    }
  }
  static {
    this.styles = [
      SlCheckbox.styles,
      i`
      :host {
        display: block;
      }

      label.checkbox {
        --toggle-size: var(--size-3);
      }

      :host(.inline) {
        display: inline-block;
        margin-right: var(--size-s);
      }
    `
    ];
  }
  connectedCallback() {
    super.connectedCallback();
    if (this.value !== void 0) {
      this.checked = true;
    }
    if (this.inline) {
      this.classList.add("inline");
    }
  }
  getValue() {
    return this.checked;
  }
  updated(changedProperties) {
    if (changedProperties.has("checked")) {
      this.onChangeCallback(true);
      this.onValueChange({ type: "boolean", value: this.checked });
    }
  }
};
__decorateClass([
  n5({ type: Boolean })
], ForgeInputCheckbox.prototype, "inline", 2);
customElements.define("forge-input-checkbox", ForgeInputCheckbox);
makeInputBinding("forge-input-checkbox");

// src/forge/utils.ts
function escapeSpaces(str) {
  return str.replace(/_/g, "__").replace(/ /g, "_-");
}
function unescapeSpaces(str) {
  let unescaped = "";
  let state = "normal";
  for (const char of str) {
    switch (state) {
      case "normal":
        if (char === "_") {
          state = "escaping";
        } else {
          unescaped += char;
        }
        break;
      case "escaping":
        if (char === "-") {
          unescaped += " ";
        } else if (char === "_") {
          unescaped += "_";
        } else {
          unescaped += "_" + char;
        }
        state = "normal";
        break;
    }
  }
  return unescaped;
}
function isPlainObject(x7) {
  return !!x7 && x7.constructor === Object;
}

// src/forge/input-checkbox-group.ts
var ForgeInputCheckboxGroup = class extends s4 {
  constructor() {
    super(...arguments);
    this.onChangeCallback = (x7) => {
    };
    this.onValueChange = makeValueChangeEmitter(this, this.id);
    this.label = null;
    this.choices = [];
    this.selected = [];
    this.size = "medium";
    this.inline = false;
  }
  static {
    this.styles = i`
    .form-control.small {
      font-size: var(--font-size-s);
    }

    .form-control.medium {
      font-size: var(--font-size-m);
    }

    label.form-control-label {
      display: inline-block;
      color: inherit;
      margin-bottom: var(--size-xs);
      font-size: var(--font-size-m);
    }

    forge-input-checkbox {
      margin-bottom: var(--size-xxs);
    }
  `;
  }
  connectedCallback() {
    super.connectedCallback();
    if (this.selected === void 0 || this.selected === null) {
      this.selected = [];
    } else if (typeof this.selected === "string") {
      this.selected = [this.selected];
    }
  }
  handleChange() {
    this.selected = this.findSelectedItems();
    this.onValueChange({ type: "string[]", value: this.getValue() });
    this.onChangeCallback(true);
  }
  render() {
    const selected = this.selected || [];
    const changeCallback = () => {
      this.handleChange();
    };
    return x`
      <div
        part="form-control"
        class="form-control ${o6({
      small: this.size === "small",
      medium: this.size === "medium",
      large: this.size === "large",
      "has-label": this.label !== null
    })} "
      >
        <label
          part="form-control-label"
          class="form-control-label"
          aria-hidden=${this.label !== null}
        >
          <slot name="label">${this.label}</slot>
        </label>
        <div part="form-control-input" class="form-control-input">
          ${generateOptions(
      this.choices,
      selected,
      this.size,
      this.inline,
      changeCallback
    )}
        </div>
      </div>
    `;
  }
  getValue() {
    return this.selected.map(unescapeSpaces);
  }
  findSelectedItems() {
    const selected = [];
    this.shadowRoot.querySelectorAll("forge-input-checkbox").forEach((el) => {
      if (el.checked) {
        selected.push(unescapeSpaces(el.getAttribute("name")));
      }
    });
    return selected;
  }
};
__decorateClass([
  n5({ type: String })
], ForgeInputCheckboxGroup.prototype, "label", 2);
__decorateClass([
  n5({ type: Array })
], ForgeInputCheckboxGroup.prototype, "choices", 2);
__decorateClass([
  n5({ type: Array })
], ForgeInputCheckboxGroup.prototype, "selected", 2);
__decorateClass([
  n5({ type: String })
], ForgeInputCheckboxGroup.prototype, "size", 2);
__decorateClass([
  n5({ type: Boolean })
], ForgeInputCheckboxGroup.prototype, "inline", 2);
customElements.define("forge-input-checkbox-group", ForgeInputCheckboxGroup);
makeInputBinding("forge-input-checkbox-group");
function normalizeCheckboxGroupChoices(choices) {
  if (Array.isArray(choices)) {
    return Object.fromEntries(choices.map((x7) => [x7, x7]));
  } else {
    return choices;
  }
}
function generateOptions(choices, selected, size, inline, changeCallback) {
  const normalized = normalizeCheckboxGroupChoices(choices);
  return x`${Object.entries(normalized).map(([key, value]) => {
    return x`<forge-input-checkbox
      name=${escapeSpaces(key)}
      ?value=${selected.includes(escapeSpaces(key))}
      ?inline=${inline}
      size=${size}
      .onChangeCallback=${changeCallback}
      >${value}</forge-input-checkbox
    >`;
  })}`;
}

// node_modules/@shoelace-style/shoelace/dist/styles/form-control.styles.js
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

// node_modules/@shoelace-style/shoelace/dist/components/input/input.styles.js
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
    background: inherit;
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

// node_modules/@shoelace-style/shoelace/dist/components/input/input.js
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
    this.__numberInput = Object.assign(document.createElement("input"), { type: "number" });
    this.__dateInput = Object.assign(document.createElement("input"), { type: "date" });
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
    var _a;
    this.__dateInput.value = this.value;
    return ((_a = this.input) == null ? void 0 : _a.valueAsDate) || this.__dateInput.valueAsDate;
  }
  set valueAsDate(newValue) {
    this.__dateInput.valueAsDate = newValue;
    this.value = this.__dateInput.value;
  }
  /** Gets or sets the current value as a number. Returns `NaN` if the value can't be converted. */
  get valueAsNumber() {
    var _a;
    this.__numberInput.value = this.value;
    return ((_a = this.input) == null ? void 0 : _a.valueAsNumber) || this.__numberInput.valueAsNumber;
  }
  set valueAsNumber(newValue) {
    this.__numberInput.valueAsNumber = newValue;
    this.value = this.__numberInput.value;
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
    return x`
      <div
        part="form-control"
        class=${o6({
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
            class=${o6({
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
              name=${l7(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${l7(this.placeholder)}
              minlength=${l7(this.minlength)}
              maxlength=${l7(this.maxlength)}
              min=${l7(this.min)}
              max=${l7(this.max)}
              step=${l7(this.step)}
              .value=${l8(this.value)}
              autocapitalize=${l7(this.autocapitalize)}
              autocomplete=${l7(this.autocomplete)}
              autocorrect=${l7(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${l7(this.pattern)}
              enterkeyhint=${l7(this.enterkeyhint)}
              inputmode=${l7(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${hasClearIcon ? x`
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
            ${this.passwordToggle && !this.disabled ? x`
                    <button
                      part="password-toggle-button"
                      class="input__password-toggle"
                      type="button"
                      aria-label=${this.localize.term(this.passwordVisible ? "hidePassword" : "showPassword")}
                      @click=${this.handlePasswordToggle}
                      tabindex="-1"
                    >
                      ${this.passwordVisible ? x`
                            <slot name="show-password-icon">
                              <sl-icon name="eye-slash" library="system"></sl-icon>
                            </slot>
                          ` : x`
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
__decorateClass2([
  i4(".input__control")
], SlInput.prototype, "input", 2);
__decorateClass2([
  t3()
], SlInput.prototype, "hasFocus", 2);
__decorateClass2([
  n5()
], SlInput.prototype, "title", 2);
__decorateClass2([
  n5({ reflect: true })
], SlInput.prototype, "type", 2);
__decorateClass2([
  n5()
], SlInput.prototype, "name", 2);
__decorateClass2([
  n5()
], SlInput.prototype, "value", 2);
__decorateClass2([
  defaultValue()
], SlInput.prototype, "defaultValue", 2);
__decorateClass2([
  n5({ reflect: true })
], SlInput.prototype, "size", 2);
__decorateClass2([
  n5({ type: Boolean, reflect: true })
], SlInput.prototype, "filled", 2);
__decorateClass2([
  n5({ type: Boolean, reflect: true })
], SlInput.prototype, "pill", 2);
__decorateClass2([
  n5()
], SlInput.prototype, "label", 2);
__decorateClass2([
  n5({ attribute: "help-text" })
], SlInput.prototype, "helpText", 2);
__decorateClass2([
  n5({ type: Boolean })
], SlInput.prototype, "clearable", 2);
__decorateClass2([
  n5({ type: Boolean, reflect: true })
], SlInput.prototype, "disabled", 2);
__decorateClass2([
  n5()
], SlInput.prototype, "placeholder", 2);
__decorateClass2([
  n5({ type: Boolean, reflect: true })
], SlInput.prototype, "readonly", 2);
__decorateClass2([
  n5({ attribute: "password-toggle", type: Boolean })
], SlInput.prototype, "passwordToggle", 2);
__decorateClass2([
  n5({ attribute: "password-visible", type: Boolean })
], SlInput.prototype, "passwordVisible", 2);
__decorateClass2([
  n5({ attribute: "no-spin-buttons", type: Boolean })
], SlInput.prototype, "noSpinButtons", 2);
__decorateClass2([
  n5({ reflect: true })
], SlInput.prototype, "form", 2);
__decorateClass2([
  n5({ type: Boolean, reflect: true })
], SlInput.prototype, "required", 2);
__decorateClass2([
  n5()
], SlInput.prototype, "pattern", 2);
__decorateClass2([
  n5({ type: Number })
], SlInput.prototype, "minlength", 2);
__decorateClass2([
  n5({ type: Number })
], SlInput.prototype, "maxlength", 2);
__decorateClass2([
  n5()
], SlInput.prototype, "min", 2);
__decorateClass2([
  n5()
], SlInput.prototype, "max", 2);
__decorateClass2([
  n5()
], SlInput.prototype, "step", 2);
__decorateClass2([
  n5()
], SlInput.prototype, "autocapitalize", 2);
__decorateClass2([
  n5()
], SlInput.prototype, "autocorrect", 2);
__decorateClass2([
  n5()
], SlInput.prototype, "autocomplete", 2);
__decorateClass2([
  n5({ type: Boolean })
], SlInput.prototype, "autofocus", 2);
__decorateClass2([
  n5()
], SlInput.prototype, "enterkeyhint", 2);
__decorateClass2([
  n5({
    type: Boolean,
    converter: {
      // Allow "true|false" attribute values but keep the property boolean
      fromAttribute: (value) => !value || value === "false" ? false : true,
      toAttribute: (value) => value ? "true" : "false"
    }
  })
], SlInput.prototype, "spellcheck", 2);
__decorateClass2([
  n5()
], SlInput.prototype, "inputmode", 2);
__decorateClass2([
  watch("disabled", { waitUntilFirstUpdate: true })
], SlInput.prototype, "handleDisabledChange", 1);
__decorateClass2([
  watch("step", { waitUntilFirstUpdate: true })
], SlInput.prototype, "handleStepChange", 1);
__decorateClass2([
  watch("value", { waitUntilFirstUpdate: true })
], SlInput.prototype, "handleValueChange", 1);
SlInput = __decorateClass2([
  e4("sl-input")
], SlInput);

// src/forge/input-date.ts
var ForgeInputDate = class extends SlInput {
  constructor() {
    super();
    this.onChangeCallback = (x7) => {
    };
    this.onValueChange = makeValueChangeEmitter(this, this.id);
    this.type = "date";
  }
  static {
    this.styles = [
      SlInput.styles,
      i`
      .form-control--has-label.form-control--medium .form-control__label {
        margin-bottom: var(--size-xs);
        font-size: var(--font-size-m);
      }
    `
    ];
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("input", () => {
      this.notifyChange();
    });
    this.addEventListener("blur", (e13) => this.notifyChange());
  }
  notifyChange() {
    this.onChangeCallback(true);
    this.onValueChange({ type: "string", value: this.value });
  }
};
customElements.define("forge-input-date", ForgeInputDate);
makeInputBinding("forge-input-date");

// node_modules/just-debounce-it/index.mjs
var functionDebounce = debounce;
function debounce(fn2, wait, callFirst) {
  var timeout = null;
  var debouncedFn = null;
  var clear = function() {
    if (timeout) {
      clearTimeout(timeout);
      debouncedFn = null;
      timeout = null;
    }
  };
  var flush = function() {
    var call = debouncedFn;
    clear();
    if (call) {
      call();
    }
  };
  var debounceWrapper = function() {
    if (!wait) {
      return fn2.apply(this, arguments);
    }
    var context = this;
    var args = arguments;
    var callNow = callFirst && !timeout;
    clear();
    debouncedFn = function() {
      fn2.apply(context, args);
    };
    timeout = setTimeout(function() {
      timeout = null;
      if (!callNow) {
        var call = debouncedFn;
        debouncedFn = null;
        return call();
      }
    }, wait);
    if (callNow) {
      return debouncedFn();
    }
  };
  debounceWrapper.cancel = clear;
  debounceWrapper.flush = flush;
  return debounceWrapper;
}

// src/forge/input-number.ts
var ForgeInputNumber = class extends SlInput {
  constructor() {
    super();
    this.min = -Infinity;
    this.max = Infinity;
    this.invalid = false;
    this.waitForEnter = false;
    this.debounce = 200;
    this.onValueChange = makeValueChangeEmitter(this, this.id);
    this.onChangeCallback = (x7) => {
    };
    // Record the most recent valid value. We do this because of debouncing: if
    // the user types a valid value, and then keeps adding digits to make it
    // invalid, we want to send the last valid value (before it went into the
    // invalid range).
    //
    // For example, if starting value is 1 and the max is 1000, then if the user
    // types 2, 2, 2, in quick succession, the values in the box will be 12, 122,
    // and 1222. We want to send 122, but this requires a bit of record keeping
    // because updates are debounced. That's what lastValidValue is for.
    //
    // We initialize to null because we don't know what the initial value is. In
    // the connnectedCallback we set to the initial value.
    this.lastValidValue = null;
    this.type = "number";
  }
  static {
    this.styles = [
      SlInput.styles,
      i`
      .form-control--has-label.form-control--medium .form-control__label {
        margin-bottom: var(--size-xs);
        font-size: var(--font-size-m);
      }

      div.invalid {
        outline-offset: -1px;
        outline: 3px solid var(--danger);
      }
    `
    ];
  }
  connectedCallback() {
    super.connectedCallback();
    this.lastValidValue = Number(this.value);
    const notifyChangeDebounced = functionDebounce(
      () => this.notifyChange(),
      this.debounce
    );
    this.addEventListener("input", () => {
      if (this.waitForEnter)
        return;
      const rawValue = this.shadowRoot.querySelector("input").valueAsNumber;
      if (rawValue >= this.min && rawValue <= this.max) {
        this.lastValidValue = rawValue;
        this.invalid = false;
        notifyChangeDebounced();
      } else {
        this.invalid = true;
      }
      this.updateInvalidClass();
    });
    this.addEventListener("keydown", (e13) => {
      if (!this.waitForEnter)
        return;
      if (e13.code === "Enter") {
        this.notifyChange();
      }
    });
    this.addEventListener("blur", (e13) => this.notifyChange());
  }
  getValue() {
    if (this.lastValidValue === null) {
      throw new Error(
        "Invalid input state. Attempted to get value of input before element was mounted to page"
      );
    }
    return this.lastValidValue;
  }
  updateInvalidClass() {
    const wrapper = this.shadowRoot?.querySelector("div.input");
    if (this.invalid) {
      wrapper?.classList.add("invalid");
    } else {
      wrapper?.classList.remove("invalid");
    }
  }
  notifyChange() {
    this.onChangeCallback(true);
    this.onValueChange({ type: "number", value: this.getValue() });
  }
};
__decorateClass([
  n5({ type: Number })
], ForgeInputNumber.prototype, "min", 2);
__decorateClass([
  n5({ type: Number })
], ForgeInputNumber.prototype, "max", 2);
__decorateClass([
  n5({ type: Boolean })
], ForgeInputNumber.prototype, "invalid", 2);
__decorateClass([
  n5({ type: Boolean, attribute: "wait-for-enter" })
], ForgeInputNumber.prototype, "waitForEnter", 2);
__decorateClass([
  n5({ type: Number })
], ForgeInputNumber.prototype, "debounce", 2);
customElements.define("forge-input-number", ForgeInputNumber);
makeInputBinding("forge-input-number", { type: "shiny.number" });

// node_modules/@shoelace-style/shoelace/dist/components/radio-button/radio-button.styles.js
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

// node_modules/@shoelace-style/shoelace/dist/components/radio-button/radio-button.js
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
  handleClick(e13) {
    if (this.disabled) {
      e13.preventDefault();
      e13.stopPropagation();
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
    return n8`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked ? " button--checked" : ""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${o6({
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
          value=${l7(this.value)}
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
__decorateClass2([
  i4(".button")
], SlRadioButton.prototype, "input", 2);
__decorateClass2([
  i4(".hidden-input")
], SlRadioButton.prototype, "hiddenInput", 2);
__decorateClass2([
  t3()
], SlRadioButton.prototype, "hasFocus", 2);
__decorateClass2([
  n5({ type: Boolean, reflect: true })
], SlRadioButton.prototype, "checked", 2);
__decorateClass2([
  n5()
], SlRadioButton.prototype, "value", 2);
__decorateClass2([
  n5({ type: Boolean, reflect: true })
], SlRadioButton.prototype, "disabled", 2);
__decorateClass2([
  n5({ reflect: true })
], SlRadioButton.prototype, "size", 2);
__decorateClass2([
  n5({ type: Boolean, reflect: true })
], SlRadioButton.prototype, "pill", 2);
__decorateClass2([
  watch("disabled", { waitUntilFirstUpdate: true })
], SlRadioButton.prototype, "handleDisabledChange", 1);
SlRadioButton = __decorateClass2([
  e4("sl-radio-button")
], SlRadioButton);

// node_modules/@shoelace-style/shoelace/dist/components/button-group/button-group.styles.js
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

// node_modules/@shoelace-style/shoelace/dist/components/button-group/button-group.js
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
    return x`
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
__decorateClass2([
  i4("slot")
], SlButtonGroup.prototype, "defaultSlot", 2);
__decorateClass2([
  t3()
], SlButtonGroup.prototype, "disableRole", 2);
__decorateClass2([
  n5()
], SlButtonGroup.prototype, "label", 2);
SlButtonGroup = __decorateClass2([
  e4("sl-button-group")
], SlButtonGroup);
function findButton(el) {
  var _a;
  const selector = "sl-button, sl-radio-button";
  return (_a = el.closest(selector)) != null ? _a : el.querySelector(selector);
}

// node_modules/@shoelace-style/shoelace/dist/components/radio-group/radio-group.styles.js
var radio_group_styles_default = i`
  ${component_styles_default}
  ${form_control_styles_default}

  :host {
    display: block;
  }

  .form-control {
    position: relative;
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

// node_modules/@shoelace-style/shoelace/dist/components/radio-group/radio-group.js
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
  handleInvalid(event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }
  async syncRadioElements() {
    var _a, _b;
    const radios = this.getAllRadios();
    await Promise.all(
      // Sync the checked state and size
      radios.map(async (radio) => {
        await radio.updateComplete;
        radio.checked = radio.value === this.value;
        radio.size = this.size;
      })
    );
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
  }
  syncRadios() {
    if (customElements.get("sl-radio") && customElements.get("sl-radio-button")) {
      this.syncRadioElements();
      return;
    }
    if (customElements.get("sl-radio")) {
      this.syncRadioElements();
    } else {
      customElements.whenDefined("sl-radio").then(() => this.syncRadios());
    }
    if (customElements.get("sl-radio-button")) {
      this.syncRadioElements();
    } else {
      customElements.whenDefined("sl-radio-button").then(() => this.syncRadios());
    }
  }
  updateCheckedRadio() {
    const radios = this.getAllRadios();
    radios.forEach((radio) => radio.checked = radio.value === this.value);
    this.formControlController.setValidity(this.validity.valid);
  }
  handleSizeChange() {
    this.syncRadios();
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
    const defaultSlot = x`
      <slot
        @click=${this.handleRadioClick}
        @keydown=${this.handleKeyDown}
        @slotchange=${this.syncRadios}
        role="presentation"
      ></slot>
    `;
    return x`
      <fieldset
        part="form-control"
        class=${o6({
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

          ${this.hasButtonGroup ? x`
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
__decorateClass2([
  i4("slot:not([name])")
], SlRadioGroup.prototype, "defaultSlot", 2);
__decorateClass2([
  i4(".radio-group__validation-input")
], SlRadioGroup.prototype, "validationInput", 2);
__decorateClass2([
  t3()
], SlRadioGroup.prototype, "hasButtonGroup", 2);
__decorateClass2([
  t3()
], SlRadioGroup.prototype, "errorMessage", 2);
__decorateClass2([
  t3()
], SlRadioGroup.prototype, "defaultValue", 2);
__decorateClass2([
  n5()
], SlRadioGroup.prototype, "label", 2);
__decorateClass2([
  n5({ attribute: "help-text" })
], SlRadioGroup.prototype, "helpText", 2);
__decorateClass2([
  n5()
], SlRadioGroup.prototype, "name", 2);
__decorateClass2([
  n5({ reflect: true })
], SlRadioGroup.prototype, "value", 2);
__decorateClass2([
  n5({ reflect: true })
], SlRadioGroup.prototype, "size", 2);
__decorateClass2([
  n5({ reflect: true })
], SlRadioGroup.prototype, "form", 2);
__decorateClass2([
  n5({ type: Boolean, reflect: true })
], SlRadioGroup.prototype, "required", 2);
__decorateClass2([
  watch("size", { waitUntilFirstUpdate: true })
], SlRadioGroup.prototype, "handleSizeChange", 1);
__decorateClass2([
  watch("value")
], SlRadioGroup.prototype, "handleValueChange", 1);
SlRadioGroup = __decorateClass2([
  e4("sl-radio-group")
], SlRadioGroup);

// node_modules/@shoelace-style/shoelace/dist/components/radio/radio.styles.js
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

// node_modules/@shoelace-style/shoelace/dist/components/radio/radio.js
var SlRadio = class extends ShoelaceElement {
  constructor() {
    super();
    this.checked = false;
    this.hasFocus = false;
    this.size = "medium";
    this.disabled = false;
    this.handleBlur = () => {
      this.hasFocus = false;
      this.emit("sl-blur");
    };
    this.handleClick = () => {
      if (!this.disabled) {
        this.checked = true;
      }
    };
    this.handleFocus = () => {
      this.hasFocus = true;
      this.emit("sl-focus");
    };
    this.addEventListener("blur", this.handleBlur);
    this.addEventListener("click", this.handleClick);
    this.addEventListener("focus", this.handleFocus);
  }
  connectedCallback() {
    super.connectedCallback();
    this.setInitialAttributes();
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
    return x`
      <span
        part="base"
        class=${o6({
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
          ${this.checked ? x` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> ` : ""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `;
  }
};
SlRadio.styles = radio_styles_default;
__decorateClass2([
  t3()
], SlRadio.prototype, "checked", 2);
__decorateClass2([
  t3()
], SlRadio.prototype, "hasFocus", 2);
__decorateClass2([
  n5()
], SlRadio.prototype, "value", 2);
__decorateClass2([
  n5({ reflect: true })
], SlRadio.prototype, "size", 2);
__decorateClass2([
  n5({ type: Boolean, reflect: true })
], SlRadio.prototype, "disabled", 2);
__decorateClass2([
  watch("checked")
], SlRadio.prototype, "handleCheckedChange", 1);
__decorateClass2([
  watch("disabled", { waitUntilFirstUpdate: true })
], SlRadio.prototype, "handleDisabledChange", 1);
SlRadio = __decorateClass2([
  e4("sl-radio")
], SlRadio);

// src/forge/input-radio-buttons.ts
var ForgeInputRadioButtons = class extends SlRadioGroup {
  constructor() {
    super(...arguments);
    this.onChangeCallback = (x7) => {
    };
    this.onValueChange = makeValueChangeEmitter(this, this.id);
    this.choices = [];
    this.selected = null;
    this.inline = false;
    this.button = false;
    this.pill = false;
  }
  static {
    this.styles = [
      SlRadioGroup.styles,
      i`
      .form-control--has-label.form-control--medium .form-control__label {
        margin-bottom: var(--size-xs);
        font-size: var(--font-size-m);
      }

      ::slotted(sl-radio) {
        font-size: var(--font-size-m);
        margin-block-end: var(--size-xxs);

        /* We need to do a hard override of the Shoelace setting here. */
        --sl-toggle-size-medium: var(--size-3);
      }

      ::slotted(sl-radio.inline) {
        display: inline-block;
        margin-inline-end: var(--size-s);
      }
    `
    ];
  }
  connectedCallback() {
    super.connectedCallback();
    if (this.selected === void 0 || this.selected === null) {
      const firstChoice = getFirstChoice(this.choices);
      this.selected = firstChoice;
    }
    this.value = escapeSpaces(this.selected);
    const children = generateOptions2(
      this.choices,
      this.button,
      this.inline,
      this.pill
    );
    B(children, this);
  }
  updated(changedProperties) {
    if (changedProperties.has("value")) {
      this.onChangeCallback(true);
      this.onValueChange({ type: "string", value: this.getValue() });
    }
  }
  getValue() {
    return unescapeSpaces(this.value);
  }
};
__decorateClass([
  n5({ type: Array })
], ForgeInputRadioButtons.prototype, "choices", 2);
__decorateClass([
  n5({ type: String })
], ForgeInputRadioButtons.prototype, "selected", 2);
__decorateClass([
  n5({ type: Boolean })
], ForgeInputRadioButtons.prototype, "inline", 2);
__decorateClass([
  n5({ type: Boolean })
], ForgeInputRadioButtons.prototype, "button", 2);
__decorateClass([
  n5({ type: Boolean })
], ForgeInputRadioButtons.prototype, "pill", 2);
customElements.define("forge-input-radio-buttons", ForgeInputRadioButtons);
makeInputBinding("forge-input-radio-buttons");
function getFirstChoice(choices) {
  if (Array.isArray(choices)) {
    return choices[0];
  } else {
    return Object.keys(choices)[0];
  }
}
function normalizeRadioChoices(choices) {
  if (Array.isArray(choices)) {
    return Object.fromEntries(choices.map((x7) => [x7, x7]));
  } else {
    return choices;
  }
}
function generateOptions2(choices, button, inline, pill) {
  const normalized = normalizeRadioChoices(choices);
  return x`${Object.entries(normalized).map(([key, value]) => {
    if (button) {
      return x`<sl-radio-button value=${escapeSpaces(key)} ?pill=${pill}
        >${value}</sl-radio-button
      >`;
    } else {
      return x`<sl-radio
        value=${escapeSpaces(key)}
        class=${inline ? "inline" : A}
        >${value}</sl-radio
      >`;
    }
  })}`;
}

// node_modules/@shoelace-style/shoelace/dist/components/option/option.styles.js
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

// node_modules/@shoelace-style/shoelace/dist/components/option/option.js
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
    return x`
      <div
        part="base"
        class=${o6({
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
__decorateClass2([
  i4(".option__label")
], SlOption.prototype, "defaultSlot", 2);
__decorateClass2([
  t3()
], SlOption.prototype, "current", 2);
__decorateClass2([
  t3()
], SlOption.prototype, "selected", 2);
__decorateClass2([
  t3()
], SlOption.prototype, "hasHover", 2);
__decorateClass2([
  n5({ reflect: true })
], SlOption.prototype, "value", 2);
__decorateClass2([
  n5({ type: Boolean, reflect: true })
], SlOption.prototype, "disabled", 2);
__decorateClass2([
  watch("disabled")
], SlOption.prototype, "handleDisabledChange", 1);
__decorateClass2([
  watch("selected")
], SlOption.prototype, "handleSelectedChange", 1);
__decorateClass2([
  watch("value")
], SlOption.prototype, "handleValueChange", 1);
SlOption = __decorateClass2([
  e4("sl-option")
], SlOption);

// node_modules/@floating-ui/core/dist/floating-ui.core.browser.min.mjs
function t5(t9) {
  return t9.split("-")[1];
}
function e10(t9) {
  return "y" === t9 ? "height" : "width";
}
function n9(t9) {
  return t9.split("-")[0];
}
function o7(t9) {
  return ["top", "bottom"].includes(n9(t9)) ? "x" : "y";
}
function i7(i11, r11, a8) {
  let { reference: l14, floating: s12 } = i11;
  const c8 = l14.x + l14.width / 2 - s12.width / 2, f7 = l14.y + l14.height / 2 - s12.height / 2, m6 = o7(r11), u8 = e10(m6), g7 = l14[u8] / 2 - s12[u8] / 2, d7 = "x" === m6;
  let p6;
  switch (n9(r11)) {
    case "top":
      p6 = { x: c8, y: l14.y - s12.height };
      break;
    case "bottom":
      p6 = { x: c8, y: l14.y + l14.height };
      break;
    case "right":
      p6 = { x: l14.x + l14.width, y: f7 };
      break;
    case "left":
      p6 = { x: l14.x - s12.width, y: f7 };
      break;
    default:
      p6 = { x: l14.x, y: l14.y };
  }
  switch (t5(r11)) {
    case "start":
      p6[m6] -= g7 * (a8 && d7 ? -1 : 1);
      break;
    case "end":
      p6[m6] += g7 * (a8 && d7 ? -1 : 1);
  }
  return p6;
}
var r4 = async (t9, e13, n13) => {
  const { placement: o14 = "bottom", strategy: r11 = "absolute", middleware: a8 = [], platform: l14 } = n13, s12 = a8.filter(Boolean), c8 = await (null == l14.isRTL ? void 0 : l14.isRTL(e13));
  let f7 = await l14.getElementRects({ reference: t9, floating: e13, strategy: r11 }), { x: m6, y: u8 } = i7(f7, o14, c8), g7 = o14, d7 = {}, p6 = 0;
  for (let n14 = 0; n14 < s12.length; n14++) {
    const { name: a9, fn: h8 } = s12[n14], { x: y6, y: x7, data: w7, reset: v6 } = await h8({ x: m6, y: u8, initialPlacement: o14, placement: g7, strategy: r11, middlewareData: d7, rects: f7, platform: l14, elements: { reference: t9, floating: e13 } });
    m6 = null != y6 ? y6 : m6, u8 = null != x7 ? x7 : u8, d7 = { ...d7, [a9]: { ...d7[a9], ...w7 } }, v6 && p6 <= 50 && (p6++, "object" == typeof v6 && (v6.placement && (g7 = v6.placement), v6.rects && (f7 = true === v6.rects ? await l14.getElementRects({ reference: t9, floating: e13, strategy: r11 }) : v6.rects), { x: m6, y: u8 } = i7(f7, g7, c8)), n14 = -1);
  }
  return { x: m6, y: u8, placement: g7, strategy: r11, middlewareData: d7 };
};
function a4(t9) {
  return "number" != typeof t9 ? function(t10) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t10 };
  }(t9) : { top: t9, right: t9, bottom: t9, left: t9 };
}
function l9(t9) {
  return { ...t9, top: t9.y, left: t9.x, right: t9.x + t9.width, bottom: t9.y + t9.height };
}
async function s7(t9, e13) {
  var n13;
  void 0 === e13 && (e13 = {});
  const { x: o14, y: i11, platform: r11, rects: s12, elements: c8, strategy: f7 } = t9, { boundary: m6 = "clippingAncestors", rootBoundary: u8 = "viewport", elementContext: g7 = "floating", altBoundary: d7 = false, padding: p6 = 0 } = e13, h8 = a4(p6), y6 = c8[d7 ? "floating" === g7 ? "reference" : "floating" : g7], x7 = l9(await r11.getClippingRect({ element: null == (n13 = await (null == r11.isElement ? void 0 : r11.isElement(y6))) || n13 ? y6 : y6.contextElement || await (null == r11.getDocumentElement ? void 0 : r11.getDocumentElement(c8.floating)), boundary: m6, rootBoundary: u8, strategy: f7 })), w7 = "floating" === g7 ? { ...s12.floating, x: o14, y: i11 } : s12.reference, v6 = await (null == r11.getOffsetParent ? void 0 : r11.getOffsetParent(c8.floating)), b6 = await (null == r11.isElement ? void 0 : r11.isElement(v6)) && await (null == r11.getScale ? void 0 : r11.getScale(v6)) || { x: 1, y: 1 }, A5 = l9(r11.convertOffsetParentRelativeRectToViewportRelativeRect ? await r11.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w7, offsetParent: v6, strategy: f7 }) : w7);
  return { top: (x7.top - A5.top + h8.top) / b6.y, bottom: (A5.bottom - x7.bottom + h8.bottom) / b6.y, left: (x7.left - A5.left + h8.left) / b6.x, right: (A5.right - x7.right + h8.right) / b6.x };
}
var c3 = Math.min;
var f3 = Math.max;
function m2(t9, e13, n13) {
  return f3(t9, c3(e13, n13));
}
var u4 = (n13) => ({ name: "arrow", options: n13, async fn(i11) {
  const { element: r11, padding: l14 = 0 } = n13 || {}, { x: s12, y: c8, placement: f7, rects: u8, platform: g7, elements: d7 } = i11;
  if (null == r11)
    return {};
  const p6 = a4(l14), h8 = { x: s12, y: c8 }, y6 = o7(f7), x7 = e10(y6), w7 = await g7.getDimensions(r11), v6 = "y" === y6, b6 = v6 ? "top" : "left", A5 = v6 ? "bottom" : "right", R4 = v6 ? "clientHeight" : "clientWidth", P6 = u8.reference[x7] + u8.reference[y6] - h8[y6] - u8.floating[x7], E5 = h8[y6] - u8.reference[y6], T7 = await (null == g7.getOffsetParent ? void 0 : g7.getOffsetParent(r11));
  let D5 = T7 ? T7[R4] : 0;
  D5 && await (null == g7.isElement ? void 0 : g7.isElement(T7)) || (D5 = d7.floating[R4] || u8.floating[x7]);
  const L6 = P6 / 2 - E5 / 2, k7 = p6[b6], O5 = D5 - w7[x7] - p6[A5], B6 = D5 / 2 - w7[x7] / 2 + L6, C5 = m2(k7, B6, O5), H5 = null != t5(f7) && B6 != C5 && u8.reference[x7] / 2 - (B6 < k7 ? p6[b6] : p6[A5]) - w7[x7] / 2 < 0;
  return { [y6]: h8[y6] - (H5 ? B6 < k7 ? k7 - B6 : O5 - B6 : 0), data: { [y6]: C5, centerOffset: B6 - C5 } };
} });
var g2 = ["top", "right", "bottom", "left"];
var d3 = g2.reduce((t9, e13) => t9.concat(e13, e13 + "-start", e13 + "-end"), []);
var p2 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function h3(t9) {
  return t9.replace(/left|right|bottom|top/g, (t10) => p2[t10]);
}
function y2(n13, i11, r11) {
  void 0 === r11 && (r11 = false);
  const a8 = t5(n13), l14 = o7(n13), s12 = e10(l14);
  let c8 = "x" === l14 ? a8 === (r11 ? "end" : "start") ? "right" : "left" : "start" === a8 ? "bottom" : "top";
  return i11.reference[s12] > i11.floating[s12] && (c8 = h3(c8)), { main: c8, cross: h3(c8) };
}
var x2 = { start: "end", end: "start" };
function w2(t9) {
  return t9.replace(/start|end/g, (t10) => x2[t10]);
}
var b2 = function(e13) {
  return void 0 === e13 && (e13 = {}), { name: "flip", options: e13, async fn(o14) {
    var i11;
    const { placement: r11, middlewareData: a8, rects: l14, initialPlacement: c8, platform: f7, elements: m6 } = o14, { mainAxis: u8 = true, crossAxis: g7 = true, fallbackPlacements: d7, fallbackStrategy: p6 = "bestFit", fallbackAxisSideDirection: x7 = "none", flipAlignment: v6 = true, ...b6 } = e13, A5 = n9(r11), R4 = n9(c8) === c8, P6 = await (null == f7.isRTL ? void 0 : f7.isRTL(m6.floating)), E5 = d7 || (R4 || !v6 ? [h3(c8)] : function(t9) {
      const e14 = h3(t9);
      return [w2(t9), e14, w2(e14)];
    }(c8));
    d7 || "none" === x7 || E5.push(...function(e14, o15, i12, r12) {
      const a9 = t5(e14);
      let l15 = function(t9, e15, n13) {
        const o16 = ["left", "right"], i13 = ["right", "left"], r13 = ["top", "bottom"], a10 = ["bottom", "top"];
        switch (t9) {
          case "top":
          case "bottom":
            return n13 ? e15 ? i13 : o16 : e15 ? o16 : i13;
          case "left":
          case "right":
            return e15 ? r13 : a10;
          default:
            return [];
        }
      }(n9(e14), "start" === i12, r12);
      return a9 && (l15 = l15.map((t9) => t9 + "-" + a9), o15 && (l15 = l15.concat(l15.map(w2)))), l15;
    }(c8, v6, x7, P6));
    const T7 = [c8, ...E5], D5 = await s7(o14, b6), L6 = [];
    let k7 = (null == (i11 = a8.flip) ? void 0 : i11.overflows) || [];
    if (u8 && L6.push(D5[A5]), g7) {
      const { main: t9, cross: e14 } = y2(r11, l14, P6);
      L6.push(D5[t9], D5[e14]);
    }
    if (k7 = [...k7, { placement: r11, overflows: L6 }], !L6.every((t9) => t9 <= 0)) {
      var O5, B6;
      const t9 = ((null == (O5 = a8.flip) ? void 0 : O5.index) || 0) + 1, e14 = T7[t9];
      if (e14)
        return { data: { index: t9, overflows: k7 }, reset: { placement: e14 } };
      let n13 = null == (B6 = k7.filter((t10) => t10.overflows[0] <= 0).sort((t10, e15) => t10.overflows[1] - e15.overflows[1])[0]) ? void 0 : B6.placement;
      if (!n13)
        switch (p6) {
          case "bestFit": {
            var C5;
            const t10 = null == (C5 = k7.map((t11) => [t11.placement, t11.overflows.filter((t12) => t12 > 0).reduce((t12, e15) => t12 + e15, 0)]).sort((t11, e15) => t11[1] - e15[1])[0]) ? void 0 : C5[0];
            t10 && (n13 = t10);
            break;
          }
          case "initialPlacement":
            n13 = c8;
        }
      if (r11 !== n13)
        return { reset: { placement: n13 } };
    }
    return {};
  } };
};
var D = function(e13) {
  return void 0 === e13 && (e13 = 0), { name: "offset", options: e13, async fn(i11) {
    const { x: r11, y: a8 } = i11, l14 = await async function(e14, i12) {
      const { placement: r12, platform: a9, elements: l15 } = e14, s12 = await (null == a9.isRTL ? void 0 : a9.isRTL(l15.floating)), c8 = n9(r12), f7 = t5(r12), m6 = "x" === o7(r12), u8 = ["left", "top"].includes(c8) ? -1 : 1, g7 = s12 && m6 ? -1 : 1, d7 = "function" == typeof i12 ? i12(e14) : i12;
      let { mainAxis: p6, crossAxis: h8, alignmentAxis: y6 } = "number" == typeof d7 ? { mainAxis: d7, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...d7 };
      return f7 && "number" == typeof y6 && (h8 = "end" === f7 ? -1 * y6 : y6), m6 ? { x: h8 * g7, y: p6 * u8 } : { x: p6 * u8, y: h8 * g7 };
    }(i11, e13);
    return { x: r11 + l14.x, y: a8 + l14.y, data: l14 };
  } };
};
function L2(t9) {
  return "x" === t9 ? "y" : "x";
}
var k2 = function(t9) {
  return void 0 === t9 && (t9 = {}), { name: "shift", options: t9, async fn(e13) {
    const { x: i11, y: r11, placement: a8 } = e13, { mainAxis: l14 = true, crossAxis: c8 = false, limiter: f7 = { fn: (t10) => {
      let { x: e14, y: n13 } = t10;
      return { x: e14, y: n13 };
    } }, ...u8 } = t9, g7 = { x: i11, y: r11 }, d7 = await s7(e13, u8), p6 = o7(n9(a8)), h8 = L2(p6);
    let y6 = g7[p6], x7 = g7[h8];
    if (l14) {
      const t10 = "y" === p6 ? "bottom" : "right";
      y6 = m2(y6 + d7["y" === p6 ? "top" : "left"], y6, y6 - d7[t10]);
    }
    if (c8) {
      const t10 = "y" === h8 ? "bottom" : "right";
      x7 = m2(x7 + d7["y" === h8 ? "top" : "left"], x7, x7 - d7[t10]);
    }
    const w7 = f7.fn({ ...e13, [p6]: y6, [h8]: x7 });
    return { ...w7, data: { x: w7.x - i11, y: w7.y - r11 } };
  } };
};
var B2 = function(e13) {
  return void 0 === e13 && (e13 = {}), { name: "size", options: e13, async fn(i11) {
    const { placement: r11, rects: a8, platform: l14, elements: m6 } = i11, { apply: u8 = () => {
    }, ...g7 } = e13, d7 = await s7(i11, g7), p6 = n9(r11), h8 = t5(r11), y6 = "x" === o7(r11), { width: x7, height: w7 } = a8.floating;
    let v6, b6;
    "top" === p6 || "bottom" === p6 ? (v6 = p6, b6 = h8 === (await (null == l14.isRTL ? void 0 : l14.isRTL(m6.floating)) ? "start" : "end") ? "left" : "right") : (b6 = p6, v6 = "end" === h8 ? "top" : "bottom");
    const A5 = w7 - d7[v6], R4 = x7 - d7[b6], P6 = !i11.middlewareData.shift;
    let E5 = A5, T7 = R4;
    if (y6) {
      const t9 = x7 - d7.left - d7.right;
      T7 = h8 || P6 ? c3(R4, t9) : t9;
    } else {
      const t9 = w7 - d7.top - d7.bottom;
      E5 = h8 || P6 ? c3(A5, t9) : t9;
    }
    if (P6 && !h8) {
      const t9 = f3(d7.left, 0), e14 = f3(d7.right, 0), n13 = f3(d7.top, 0), o14 = f3(d7.bottom, 0);
      y6 ? T7 = x7 - 2 * (0 !== t9 || 0 !== e14 ? t9 + e14 : f3(d7.left, d7.right)) : E5 = w7 - 2 * (0 !== n13 || 0 !== o14 ? n13 + o14 : f3(d7.top, d7.bottom));
    }
    await u8({ ...i11, availableWidth: T7, availableHeight: E5 });
    const D5 = await l14.getDimensions(m6.floating);
    return x7 !== D5.width || w7 !== D5.height ? { reset: { rects: true } } : {};
  } };
};

// node_modules/@floating-ui/dom/dist/floating-ui.dom.browser.min.mjs
function n10(t9) {
  var e13;
  return (null == (e13 = t9.ownerDocument) ? void 0 : e13.defaultView) || window;
}
function o8(t9) {
  return n10(t9).getComputedStyle(t9);
}
function i8(t9) {
  return t9 instanceof n10(t9).Node;
}
function r5(t9) {
  return i8(t9) ? (t9.nodeName || "").toLowerCase() : "";
}
function l10(t9) {
  return t9 instanceof n10(t9).HTMLElement;
}
function c4(t9) {
  return t9 instanceof n10(t9).Element;
}
function s8(t9) {
  if ("undefined" == typeof ShadowRoot)
    return false;
  return t9 instanceof n10(t9).ShadowRoot || t9 instanceof ShadowRoot;
}
function f4(t9) {
  const { overflow: e13, overflowX: n13, overflowY: i11, display: r11 } = o8(t9);
  return /auto|scroll|overlay|hidden|clip/.test(e13 + i11 + n13) && !["inline", "contents"].includes(r11);
}
function u5(t9) {
  return ["table", "td", "th"].includes(r5(t9));
}
function a5(t9) {
  const e13 = d4(), n13 = o8(t9);
  return "none" !== n13.transform || "none" !== n13.perspective || !e13 && !!n13.backdropFilter && "none" !== n13.backdropFilter || !e13 && !!n13.filter && "none" !== n13.filter || ["transform", "perspective", "filter"].some((t10) => (n13.willChange || "").includes(t10)) || ["paint", "layout", "strict", "content"].some((t10) => (n13.contain || "").includes(t10));
}
function d4() {
  return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function h4(t9) {
  return ["html", "body", "#document"].includes(r5(t9));
}
var p3 = Math.min;
var m3 = Math.max;
var g3 = Math.round;
function y3(t9) {
  const e13 = o8(t9);
  let n13 = parseFloat(e13.width) || 0, i11 = parseFloat(e13.height) || 0;
  const r11 = l10(t9), c8 = r11 ? t9.offsetWidth : n13, s12 = r11 ? t9.offsetHeight : i11, f7 = g3(n13) !== c8 || g3(i11) !== s12;
  return f7 && (n13 = c8, i11 = s12), { width: n13, height: i11, fallback: f7 };
}
function x3(t9) {
  return c4(t9) ? t9 : t9.contextElement;
}
var w3 = { x: 1, y: 1 };
function v3(t9) {
  const e13 = x3(t9);
  if (!l10(e13))
    return w3;
  const n13 = e13.getBoundingClientRect(), { width: o14, height: i11, fallback: r11 } = y3(e13);
  let c8 = (r11 ? g3(n13.width) : n13.width) / o14, s12 = (r11 ? g3(n13.height) : n13.height) / i11;
  return c8 && Number.isFinite(c8) || (c8 = 1), s12 && Number.isFinite(s12) || (s12 = 1), { x: c8, y: s12 };
}
var b3 = { x: 0, y: 0 };
function L3(t9, e13, o14) {
  var i11, r11;
  if (void 0 === e13 && (e13 = true), !d4())
    return b3;
  const l14 = t9 ? n10(t9) : window;
  return !o14 || e13 && o14 !== l14 ? b3 : { x: (null == (i11 = l14.visualViewport) ? void 0 : i11.offsetLeft) || 0, y: (null == (r11 = l14.visualViewport) ? void 0 : r11.offsetTop) || 0 };
}
function E2(e13, o14, i11, r11) {
  void 0 === o14 && (o14 = false), void 0 === i11 && (i11 = false);
  const l14 = e13.getBoundingClientRect(), s12 = x3(e13);
  let f7 = w3;
  o14 && (r11 ? c4(r11) && (f7 = v3(r11)) : f7 = v3(e13));
  const u8 = L3(s12, i11, r11);
  let a8 = (l14.left + u8.x) / f7.x, d7 = (l14.top + u8.y) / f7.y, h8 = l14.width / f7.x, p6 = l14.height / f7.y;
  if (s12) {
    const t9 = n10(s12), e14 = r11 && c4(r11) ? n10(r11) : r11;
    let o15 = t9.frameElement;
    for (; o15 && r11 && e14 !== t9; ) {
      const t10 = v3(o15), e15 = o15.getBoundingClientRect(), i12 = getComputedStyle(o15);
      e15.x += (o15.clientLeft + parseFloat(i12.paddingLeft)) * t10.x, e15.y += (o15.clientTop + parseFloat(i12.paddingTop)) * t10.y, a8 *= t10.x, d7 *= t10.y, h8 *= t10.x, p6 *= t10.y, a8 += e15.x, d7 += e15.y, o15 = n10(o15).frameElement;
    }
  }
  return l9({ width: h8, height: p6, x: a8, y: d7 });
}
function R2(t9) {
  return ((i8(t9) ? t9.ownerDocument : t9.document) || window.document).documentElement;
}
function T3(t9) {
  return c4(t9) ? { scrollLeft: t9.scrollLeft, scrollTop: t9.scrollTop } : { scrollLeft: t9.pageXOffset, scrollTop: t9.pageYOffset };
}
function S3(t9) {
  return E2(R2(t9)).left + T3(t9).scrollLeft;
}
function C2(t9) {
  if ("html" === r5(t9))
    return t9;
  const e13 = t9.assignedSlot || t9.parentNode || s8(t9) && t9.host || R2(t9);
  return s8(e13) ? e13.host : e13;
}
function F(t9) {
  const e13 = C2(t9);
  return h4(e13) ? e13.ownerDocument.body : l10(e13) && f4(e13) ? e13 : F(e13);
}
function W(t9, e13) {
  var o14;
  void 0 === e13 && (e13 = []);
  const i11 = F(t9), r11 = i11 === (null == (o14 = t9.ownerDocument) ? void 0 : o14.body), l14 = n10(i11);
  return r11 ? e13.concat(l14, l14.visualViewport || [], f4(i11) ? i11 : []) : e13.concat(i11, W(i11));
}
function D2(e13, i11, r11) {
  let s12;
  if ("viewport" === i11)
    s12 = function(t9, e14) {
      const o14 = n10(t9), i12 = R2(t9), r12 = o14.visualViewport;
      let l14 = i12.clientWidth, c8 = i12.clientHeight, s13 = 0, f7 = 0;
      if (r12) {
        l14 = r12.width, c8 = r12.height;
        const t10 = d4();
        (!t10 || t10 && "fixed" === e14) && (s13 = r12.offsetLeft, f7 = r12.offsetTop);
      }
      return { width: l14, height: c8, x: s13, y: f7 };
    }(e13, r11);
  else if ("document" === i11)
    s12 = function(t9) {
      const e14 = R2(t9), n13 = T3(t9), i12 = t9.ownerDocument.body, r12 = m3(e14.scrollWidth, e14.clientWidth, i12.scrollWidth, i12.clientWidth), l14 = m3(e14.scrollHeight, e14.clientHeight, i12.scrollHeight, i12.clientHeight);
      let c8 = -n13.scrollLeft + S3(t9);
      const s13 = -n13.scrollTop;
      return "rtl" === o8(i12).direction && (c8 += m3(e14.clientWidth, i12.clientWidth) - r12), { width: r12, height: l14, x: c8, y: s13 };
    }(R2(e13));
  else if (c4(i11))
    s12 = function(t9, e14) {
      const n13 = E2(t9, true, "fixed" === e14), o14 = n13.top + t9.clientTop, i12 = n13.left + t9.clientLeft, r12 = l10(t9) ? v3(t9) : { x: 1, y: 1 };
      return { width: t9.clientWidth * r12.x, height: t9.clientHeight * r12.y, x: i12 * r12.x, y: o14 * r12.y };
    }(i11, r11);
  else {
    const t9 = L3(e13);
    s12 = { ...i11, x: i11.x - t9.x, y: i11.y - t9.y };
  }
  return l9(s12);
}
function H2(t9, e13) {
  const n13 = C2(t9);
  return !(n13 === e13 || !c4(n13) || h4(n13)) && ("fixed" === o8(n13).position || H2(n13, e13));
}
function O2(t9, e13) {
  return l10(t9) && "fixed" !== o8(t9).position ? e13 ? e13(t9) : t9.offsetParent : null;
}
function P3(t9, e13) {
  const i11 = n10(t9);
  if (!l10(t9))
    return i11;
  let c8 = O2(t9, e13);
  for (; c8 && u5(c8) && "static" === o8(c8).position; )
    c8 = O2(c8, e13);
  return c8 && ("html" === r5(c8) || "body" === r5(c8) && "static" === o8(c8).position && !a5(c8)) ? i11 : c8 || function(t10) {
    let e14 = C2(t10);
    for (; l10(e14) && !h4(e14); ) {
      if (a5(e14))
        return e14;
      e14 = C2(e14);
    }
    return null;
  }(t9) || i11;
}
function V2(t9, e13, n13) {
  const o14 = l10(e13), i11 = R2(e13), c8 = "fixed" === n13, s12 = E2(t9, true, c8, e13);
  let u8 = { scrollLeft: 0, scrollTop: 0 };
  const a8 = { x: 0, y: 0 };
  if (o14 || !o14 && !c8)
    if (("body" !== r5(e13) || f4(i11)) && (u8 = T3(e13)), l10(e13)) {
      const t10 = E2(e13, true, c8, e13);
      a8.x = t10.x + e13.clientLeft, a8.y = t10.y + e13.clientTop;
    } else
      i11 && (a8.x = S3(i11));
  return { x: s12.left + u8.scrollLeft - a8.x, y: s12.top + u8.scrollTop - a8.y, width: s12.width, height: s12.height };
}
var k3 = { getClippingRect: function(t9) {
  let { element: e13, boundary: n13, rootBoundary: i11, strategy: l14 } = t9;
  const s12 = "clippingAncestors" === n13 ? function(t10, e14) {
    const n14 = e14.get(t10);
    if (n14)
      return n14;
    let i12 = W(t10).filter((t11) => c4(t11) && "body" !== r5(t11)), l15 = null;
    const s13 = "fixed" === o8(t10).position;
    let u9 = s13 ? C2(t10) : t10;
    for (; c4(u9) && !h4(u9); ) {
      const e15 = o8(u9), n15 = a5(u9);
      n15 || "fixed" !== e15.position || (l15 = null), (s13 ? !n15 && !l15 : !n15 && "static" === e15.position && l15 && ["absolute", "fixed"].includes(l15.position) || f4(u9) && !n15 && H2(t10, u9)) ? i12 = i12.filter((t11) => t11 !== u9) : l15 = e15, u9 = C2(u9);
    }
    return e14.set(t10, i12), i12;
  }(e13, this._c) : [].concat(n13), u8 = [...s12, i11], d7 = u8[0], g7 = u8.reduce((t10, n14) => {
    const o14 = D2(e13, n14, l14);
    return t10.top = m3(o14.top, t10.top), t10.right = p3(o14.right, t10.right), t10.bottom = p3(o14.bottom, t10.bottom), t10.left = m3(o14.left, t10.left), t10;
  }, D2(e13, d7, l14));
  return { width: g7.right - g7.left, height: g7.bottom - g7.top, x: g7.left, y: g7.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(t9) {
  let { rect: e13, offsetParent: n13, strategy: o14 } = t9;
  const i11 = l10(n13), c8 = R2(n13);
  if (n13 === c8)
    return e13;
  let s12 = { scrollLeft: 0, scrollTop: 0 }, u8 = { x: 1, y: 1 };
  const a8 = { x: 0, y: 0 };
  if ((i11 || !i11 && "fixed" !== o14) && (("body" !== r5(n13) || f4(c8)) && (s12 = T3(n13)), l10(n13))) {
    const t10 = E2(n13);
    u8 = v3(n13), a8.x = t10.x + n13.clientLeft, a8.y = t10.y + n13.clientTop;
  }
  return { width: e13.width * u8.x, height: e13.height * u8.y, x: e13.x * u8.x - s12.scrollLeft * u8.x + a8.x, y: e13.y * u8.y - s12.scrollTop * u8.y + a8.y };
}, isElement: c4, getDimensions: function(t9) {
  return y3(t9);
}, getOffsetParent: P3, getDocumentElement: R2, getScale: v3, async getElementRects(t9) {
  let { reference: e13, floating: n13, strategy: o14 } = t9;
  const i11 = this.getOffsetParent || P3, r11 = this.getDimensions;
  return { reference: V2(e13, await i11(n13), o14), floating: { x: 0, y: 0, ...await r11(n13) } };
}, getClientRects: (t9) => Array.from(t9.getClientRects()), isRTL: (t9) => "rtl" === o8(t9).direction };
function z2(t9, e13, n13, o14) {
  void 0 === o14 && (o14 = {});
  const { ancestorScroll: i11 = true, ancestorResize: r11 = true, elementResize: l14 = true, animationFrame: s12 = false } = o14, f7 = i11 || r11 ? [...c4(t9) ? W(t9) : t9.contextElement ? W(t9.contextElement) : [], ...W(e13)] : [];
  f7.forEach((t10) => {
    const e14 = !c4(t10) && t10.toString().includes("V");
    !i11 || s12 && !e14 || t10.addEventListener("scroll", n13, { passive: true }), r11 && t10.addEventListener("resize", n13);
  });
  let u8, a8 = null;
  l14 && (a8 = new ResizeObserver(() => {
    n13();
  }), c4(t9) && !s12 && a8.observe(t9), c4(t9) || !t9.contextElement || s12 || a8.observe(t9.contextElement), a8.observe(e13));
  let d7 = s12 ? E2(t9) : null;
  return s12 && function e14() {
    const o15 = E2(t9);
    !d7 || o15.x === d7.x && o15.y === d7.y && o15.width === d7.width && o15.height === d7.height || n13();
    d7 = o15, u8 = requestAnimationFrame(e14);
  }(), n13(), () => {
    var t10;
    f7.forEach((t11) => {
      i11 && t11.removeEventListener("scroll", n13), r11 && t11.removeEventListener("resize", n13);
    }), null == (t10 = a8) || t10.disconnect(), a8 = null, s12 && cancelAnimationFrame(u8);
  };
}
var M2 = (t9, n13, o14) => {
  const i11 = /* @__PURE__ */ new Map(), r11 = { platform: k3, ...o14 }, l14 = { ...r11.platform, _c: i11 };
  return r4(t9, n13, { ...r11, platform: l14 });
};

// node_modules/composed-offset-position/dist/composed-offset-position.browser.min.mjs
function t6(t9) {
  return r6(t9);
}
function o9(t9) {
  return t9.assignedSlot ? t9.assignedSlot : t9.parentNode instanceof ShadowRoot ? t9.parentNode.host : t9.parentNode;
}
function r6(t9) {
  for (let e13 = t9; e13; e13 = o9(e13))
    if (e13 instanceof Element && "none" === getComputedStyle(e13).display)
      return null;
  for (let e13 = o9(t9); e13; e13 = o9(e13)) {
    if (!(e13 instanceof Element))
      continue;
    const t10 = getComputedStyle(e13);
    if ("contents" !== t10.display) {
      if ("static" !== t10.position || "none" !== t10.filter)
        return e13;
      if ("BODY" === e13.tagName)
        return e13;
    }
  }
  return null;
}

// node_modules/@shoelace-style/shoelace/dist/components/popup/popup.styles.js
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

// node_modules/@shoelace-style/shoelace/dist/components/popup/popup.js
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
    this.cleanup = z2(this.anchorEl, this.popup, () => {
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
      D({ mainAxis: this.distance, crossAxis: this.skidding })
    ];
    if (this.sync) {
      middleware.push(
        B2({
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
        k2({
          boundary: this.shiftBoundary,
          padding: this.shiftPadding
        })
      );
    }
    if (this.autoSize) {
      middleware.push(
        B2({
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
        u4({
          element: this.arrowEl,
          padding: this.arrowPadding
        })
      );
    }
    const getOffsetParent = this.strategy === "absolute" ? (element) => k3.getOffsetParent(element, t6) : k3.getOffsetParent;
    M2(this.anchorEl, this.popup, {
      placement: this.placement,
      middleware,
      strategy: this.strategy,
      platform: __spreadProps(__spreadValues({}, k3), {
        getOffsetParent
      })
    }).then(({ x: x7, y: y6, middlewareData, placement }) => {
      const isRtl = getComputedStyle(this).direction === "rtl";
      const staticSide = { top: "bottom", right: "left", bottom: "top", left: "right" }[placement.split("-")[0]];
      this.setAttribute("data-current-placement", placement);
      Object.assign(this.popup.style, {
        left: `${x7}px`,
        top: `${y6}px`
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
    return x`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="popup"
        class=${o6({
      popup: true,
      "popup--active": this.active,
      "popup--fixed": this.strategy === "fixed",
      "popup--has-arrow": this.arrow
    })}
      >
        <slot></slot>
        ${this.arrow ? x`<div part="arrow" class="popup__arrow" role="presentation"></div>` : ""}
      </div>
    `;
  }
};
SlPopup.styles = popup_styles_default;
__decorateClass2([
  i4(".popup")
], SlPopup.prototype, "popup", 2);
__decorateClass2([
  i4(".popup__arrow")
], SlPopup.prototype, "arrowEl", 2);
__decorateClass2([
  n5()
], SlPopup.prototype, "anchor", 2);
__decorateClass2([
  n5({ type: Boolean, reflect: true })
], SlPopup.prototype, "active", 2);
__decorateClass2([
  n5({ reflect: true })
], SlPopup.prototype, "placement", 2);
__decorateClass2([
  n5({ reflect: true })
], SlPopup.prototype, "strategy", 2);
__decorateClass2([
  n5({ type: Number })
], SlPopup.prototype, "distance", 2);
__decorateClass2([
  n5({ type: Number })
], SlPopup.prototype, "skidding", 2);
__decorateClass2([
  n5({ type: Boolean })
], SlPopup.prototype, "arrow", 2);
__decorateClass2([
  n5({ attribute: "arrow-placement" })
], SlPopup.prototype, "arrowPlacement", 2);
__decorateClass2([
  n5({ attribute: "arrow-padding", type: Number })
], SlPopup.prototype, "arrowPadding", 2);
__decorateClass2([
  n5({ type: Boolean })
], SlPopup.prototype, "flip", 2);
__decorateClass2([
  n5({
    attribute: "flip-fallback-placements",
    converter: {
      fromAttribute: (value) => {
        return value.split(" ").map((p6) => p6.trim()).filter((p6) => p6 !== "");
      },
      toAttribute: (value) => {
        return value.join(" ");
      }
    }
  })
], SlPopup.prototype, "flipFallbackPlacements", 2);
__decorateClass2([
  n5({ attribute: "flip-fallback-strategy" })
], SlPopup.prototype, "flipFallbackStrategy", 2);
__decorateClass2([
  n5({ type: Object })
], SlPopup.prototype, "flipBoundary", 2);
__decorateClass2([
  n5({ attribute: "flip-padding", type: Number })
], SlPopup.prototype, "flipPadding", 2);
__decorateClass2([
  n5({ type: Boolean })
], SlPopup.prototype, "shift", 2);
__decorateClass2([
  n5({ type: Object })
], SlPopup.prototype, "shiftBoundary", 2);
__decorateClass2([
  n5({ attribute: "shift-padding", type: Number })
], SlPopup.prototype, "shiftPadding", 2);
__decorateClass2([
  n5({ attribute: "auto-size" })
], SlPopup.prototype, "autoSize", 2);
__decorateClass2([
  n5()
], SlPopup.prototype, "sync", 2);
__decorateClass2([
  n5({ type: Object })
], SlPopup.prototype, "autoSizeBoundary", 2);
__decorateClass2([
  n5({ attribute: "auto-size-padding", type: Number })
], SlPopup.prototype, "autoSizePadding", 2);
SlPopup = __decorateClass2([
  e4("sl-popup")
], SlPopup);

// node_modules/@shoelace-style/shoelace/dist/components/icon-button/icon-button.styles.js
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

// node_modules/@shoelace-style/shoelace/dist/components/icon-button/icon-button.js
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
    const tag = isLink ? i6`a` : i6`button`;
    return n8`
      <${tag}
        part="base"
        class=${o6({
      "icon-button": true,
      "icon-button--disabled": !isLink && this.disabled,
      "icon-button--focused": this.hasFocus
    })}
        ?disabled=${l7(isLink ? void 0 : this.disabled)}
        type=${l7(isLink ? void 0 : "button")}
        href=${l7(isLink ? this.href : void 0)}
        target=${l7(isLink ? this.target : void 0)}
        download=${l7(isLink ? this.download : void 0)}
        rel=${l7(isLink && this.target ? "noreferrer noopener" : void 0)}
        role=${l7(isLink ? void 0 : "button")}
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-label="${this.label}"
        tabindex=${this.disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${l7(this.name)}
          library=${l7(this.library)}
          src=${l7(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${tag}>
    `;
  }
};
SlIconButton.styles = icon_button_styles_default;
__decorateClass2([
  i4(".icon-button")
], SlIconButton.prototype, "button", 2);
__decorateClass2([
  t3()
], SlIconButton.prototype, "hasFocus", 2);
__decorateClass2([
  n5()
], SlIconButton.prototype, "name", 2);
__decorateClass2([
  n5()
], SlIconButton.prototype, "library", 2);
__decorateClass2([
  n5()
], SlIconButton.prototype, "src", 2);
__decorateClass2([
  n5()
], SlIconButton.prototype, "href", 2);
__decorateClass2([
  n5()
], SlIconButton.prototype, "target", 2);
__decorateClass2([
  n5()
], SlIconButton.prototype, "download", 2);
__decorateClass2([
  n5()
], SlIconButton.prototype, "label", 2);
__decorateClass2([
  n5({ type: Boolean, reflect: true })
], SlIconButton.prototype, "disabled", 2);
SlIconButton = __decorateClass2([
  e4("sl-icon-button")
], SlIconButton);

// node_modules/@shoelace-style/shoelace/dist/components/tag/tag.styles.js
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

// node_modules/@shoelace-style/shoelace/dist/components/tag/tag.js
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
    return x`
      <span
        part="base"
        class=${o6({
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

        ${this.removable ? x`
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
__decorateClass2([
  n5({ reflect: true })
], SlTag.prototype, "variant", 2);
__decorateClass2([
  n5({ reflect: true })
], SlTag.prototype, "size", 2);
__decorateClass2([
  n5({ type: Boolean, reflect: true })
], SlTag.prototype, "pill", 2);
__decorateClass2([
  n5({ type: Boolean })
], SlTag.prototype, "removable", 2);
SlTag = __decorateClass2([
  e4("sl-tag")
], SlTag);

// node_modules/@shoelace-style/shoelace/dist/internal/animate.js
function animateTo(el, keyframes, options) {
  return new Promise((resolve) => {
    if ((options === null || options === void 0 ? void 0 : options.duration) === Infinity) {
      throw new Error("Promise-based animations must be finite.");
    }
    const animation = el.animate(keyframes, Object.assign(Object.assign({}, options), { duration: prefersReducedMotion() ? 0 : options.duration }));
    animation.addEventListener("cancel", resolve, { once: true });
    animation.addEventListener("finish", resolve, { once: true });
  });
}
function prefersReducedMotion() {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  return query.matches;
}
function stopAnimations(el) {
  return Promise.all(el.getAnimations().map((animation) => {
    return new Promise((resolve) => {
      const handleAnimationEvent = requestAnimationFrame(resolve);
      animation.addEventListener("cancel", () => handleAnimationEvent, { once: true });
      animation.addEventListener("finish", () => handleAnimationEvent, { once: true });
      animation.cancel();
    });
  }));
}

// node_modules/@shoelace-style/shoelace/dist/utilities/animation-registry.js
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

// node_modules/@shoelace-style/shoelace/dist/internal/offset.js
function getOffset(element, parent) {
  return {
    top: Math.round(element.getBoundingClientRect().top - parent.getBoundingClientRect().top),
    left: Math.round(element.getBoundingClientRect().left - parent.getBoundingClientRect().left)
  };
}

// node_modules/@shoelace-style/shoelace/dist/internal/scroll.js
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

// node_modules/@shoelace-style/shoelace/dist/internal/event.js
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

// node_modules/@shoelace-style/shoelace/dist/components/select/select.styles.js
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

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`;

// node_modules/@shoelace-style/shoelace/dist/components/select/select.js
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
    this.handleDocumentFocusIn = (event) => {
      const path = event.composedPath();
      if (this && !path.includes(this)) {
        this.hide();
      }
    };
    this.handleDocumentKeyDown = (event) => {
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
    };
    this.handleDocumentMouseDown = (event) => {
      const path = event.composedPath();
      if (this && !path.includes(this)) {
        this.hide();
      }
    };
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
    return x`
      <div
        part="form-control"
        class=${o6({
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
            class=${o6({
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

              ${this.multiple ? x`
                    <div part="tags" class="select__tags">
                      ${this.selectedOptions.map((option, index) => {
      if (index < this.maxOptionsVisible || this.maxOptionsVisible <= 0) {
        return x`
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
        return x` <sl-tag size=${this.size}> +${this.selectedOptions.length - index} </sl-tag> `;
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

              ${hasClearIcon ? x`
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
__decorateClass2([
  i4(".select")
], SlSelect.prototype, "popup", 2);
__decorateClass2([
  i4(".select__combobox")
], SlSelect.prototype, "combobox", 2);
__decorateClass2([
  i4(".select__display-input")
], SlSelect.prototype, "displayInput", 2);
__decorateClass2([
  i4(".select__value-input")
], SlSelect.prototype, "valueInput", 2);
__decorateClass2([
  i4(".select__listbox")
], SlSelect.prototype, "listbox", 2);
__decorateClass2([
  t3()
], SlSelect.prototype, "hasFocus", 2);
__decorateClass2([
  t3()
], SlSelect.prototype, "displayLabel", 2);
__decorateClass2([
  t3()
], SlSelect.prototype, "currentOption", 2);
__decorateClass2([
  t3()
], SlSelect.prototype, "selectedOptions", 2);
__decorateClass2([
  n5()
], SlSelect.prototype, "name", 2);
__decorateClass2([
  n5({
    converter: {
      fromAttribute: (value) => value.split(" "),
      toAttribute: (value) => value.join(" ")
    }
  })
], SlSelect.prototype, "value", 2);
__decorateClass2([
  defaultValue()
], SlSelect.prototype, "defaultValue", 2);
__decorateClass2([
  n5({ reflect: true })
], SlSelect.prototype, "size", 2);
__decorateClass2([
  n5()
], SlSelect.prototype, "placeholder", 2);
__decorateClass2([
  n5({ type: Boolean, reflect: true })
], SlSelect.prototype, "multiple", 2);
__decorateClass2([
  n5({ attribute: "max-options-visible", type: Number })
], SlSelect.prototype, "maxOptionsVisible", 2);
__decorateClass2([
  n5({ type: Boolean, reflect: true })
], SlSelect.prototype, "disabled", 2);
__decorateClass2([
  n5({ type: Boolean })
], SlSelect.prototype, "clearable", 2);
__decorateClass2([
  n5({ type: Boolean, reflect: true })
], SlSelect.prototype, "open", 2);
__decorateClass2([
  n5({ type: Boolean })
], SlSelect.prototype, "hoist", 2);
__decorateClass2([
  n5({ type: Boolean, reflect: true })
], SlSelect.prototype, "filled", 2);
__decorateClass2([
  n5({ type: Boolean, reflect: true })
], SlSelect.prototype, "pill", 2);
__decorateClass2([
  n5()
], SlSelect.prototype, "label", 2);
__decorateClass2([
  n5({ reflect: true })
], SlSelect.prototype, "placement", 2);
__decorateClass2([
  n5({ attribute: "help-text" })
], SlSelect.prototype, "helpText", 2);
__decorateClass2([
  n5({ reflect: true })
], SlSelect.prototype, "form", 2);
__decorateClass2([
  n5({ type: Boolean, reflect: true })
], SlSelect.prototype, "required", 2);
__decorateClass2([
  watch("disabled", { waitUntilFirstUpdate: true })
], SlSelect.prototype, "handleDisabledChange", 1);
__decorateClass2([
  watch("value", { waitUntilFirstUpdate: true })
], SlSelect.prototype, "handleValueChange", 1);
__decorateClass2([
  watch("open", { waitUntilFirstUpdate: true })
], SlSelect.prototype, "handleOpenChange", 1);
SlSelect = __decorateClass2([
  e4("sl-select")
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

// src/forge/input-select.ts
var ForgeInputSelect = class extends SlSelect {
  constructor() {
    super(...arguments);
    this.onChangeCallback = (x7) => {
    };
    this.onValueChange = makeValueChangeEmitter(this, this.id);
    this.choices = [];
    this.selected = "";
  }
  static {
    this.styles = [
      SlSelect.styles,
      i`
      .form-control--has-label.form-control--medium .form-control__label {
        margin-bottom: var(--size-xs);
        font-size: var(--font-size-m);
      }
    `
    ];
  }
  connectedCallback() {
    super.connectedCallback();
    let selected = JSON.parse(this.selected);
    if (selected === void 0 || selected === null) {
      selected = [];
    }
    if (typeof selected === "string") {
      selected = [selected];
    }
    this.value = selected.map(escapeSpaces);
    const choices = normalizeSelectChoices(this.choices);
    const children = generateOptions3(choices);
    B(children, this);
  }
  updated(changedProperties) {
    if (changedProperties.has("value")) {
      this.onChangeCallback(true);
      let value = this.getValue();
      if (!Array.isArray(value)) {
        value = [value];
      }
      this.onValueChange({
        type: "string[]",
        value
      });
    }
  }
  getValue() {
    if (Array.isArray(this.value)) {
      return this.value.map(unescapeSpaces);
    }
    return unescapeSpaces(this.value);
  }
};
__decorateClass([
  n5({ type: Array })
], ForgeInputSelect.prototype, "choices", 2);
__decorateClass([
  n5({ type: String })
], ForgeInputSelect.prototype, "selected", 2);
customElements.define("forge-input-select", ForgeInputSelect);
makeInputBinding("forge-input-select");
function normalizeSelectChoices(choices) {
  if (Array.isArray(choices)) {
    return Object.fromEntries(choices.map((x7) => [x7, x7]));
  } else {
    const normalized = {};
    for (const [key, value] of Object.entries(choices)) {
      if (Array.isArray(value)) {
        normalized[key] = Object.fromEntries(value.map((x7) => [x7, x7]));
      } else {
        normalized[key] = value;
      }
    }
    return normalized;
  }
}
function generateOptions3(choices) {
  const normalized = normalizeSelectChoices(choices);
  return x`${Object.entries(normalized).map(([key, value]) => {
    if (typeof value === "string") {
      return x`<sl-option value=${escapeSpaces(key)}>${value}</sl-option>`;
    } else {
      return x`
        <small>${key}</small>
        ${Object.entries(value).map(([key2, value2]) => {
        return x`<sl-option value=${escapeSpaces(key2)}
            >${value2}</sl-option
          >`;
      })}
      `;
    }
  })}`;
}

// node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i11 = 1; i11 < arguments.length; i11++) {
      var source = arguments[i11];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

// node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i11;
  for (i11 = 0; i11 < sourceKeys.length; i11++) {
    key = sourceKeys[i11];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}

// node_modules/preact/dist/preact.module.js
var n11;
var l11;
var u6;
var i9;
var t7;
var o10;
var r7;
var f5;
var e11;
var c5 = {};
var s9 = [];
var a6 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var v4 = Array.isArray;
function h5(n13, l14) {
  for (var u8 in l14)
    n13[u8] = l14[u8];
  return n13;
}
function p4(n13) {
  var l14 = n13.parentNode;
  l14 && l14.removeChild(n13);
}
function y4(l14, u8, i11) {
  var t9, o14, r11, f7 = {};
  for (r11 in u8)
    "key" == r11 ? t9 = u8[r11] : "ref" == r11 ? o14 = u8[r11] : f7[r11] = u8[r11];
  if (arguments.length > 2 && (f7.children = arguments.length > 3 ? n11.call(arguments, 2) : i11), "function" == typeof l14 && null != l14.defaultProps)
    for (r11 in l14.defaultProps)
      void 0 === f7[r11] && (f7[r11] = l14.defaultProps[r11]);
  return d5(l14, f7, t9, o14, null);
}
function d5(n13, i11, t9, o14, r11) {
  var f7 = { type: n13, props: i11, key: t9, ref: o14, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r11 ? ++u6 : r11 };
  return null == r11 && null != l11.vnode && l11.vnode(f7), f7;
}
function _2() {
  return { current: null };
}
function k4(n13) {
  return n13.children;
}
function b4(n13, l14) {
  this.props = n13, this.context = l14;
}
function g4(n13, l14) {
  if (null == l14)
    return n13.__ ? g4(n13.__, n13.__.__k.indexOf(n13) + 1) : null;
  for (var u8; l14 < n13.__k.length; l14++)
    if (null != (u8 = n13.__k[l14]) && null != u8.__e)
      return u8.__e;
  return "function" == typeof n13.type ? g4(n13) : null;
}
function m4(n13) {
  var l14, u8;
  if (null != (n13 = n13.__) && null != n13.__c) {
    for (n13.__e = n13.__c.base = null, l14 = 0; l14 < n13.__k.length; l14++)
      if (null != (u8 = n13.__k[l14]) && null != u8.__e) {
        n13.__e = n13.__c.base = u8.__e;
        break;
      }
    return m4(n13);
  }
}
function w4(n13) {
  (!n13.__d && (n13.__d = true) && t7.push(n13) && !x4.__r++ || o10 !== l11.debounceRendering) && ((o10 = l11.debounceRendering) || r7)(x4);
}
function x4() {
  var n13, l14, u8, i11, o14, r11, e13, c8;
  for (t7.sort(f5); n13 = t7.shift(); )
    n13.__d && (l14 = t7.length, i11 = void 0, o14 = void 0, e13 = (r11 = (u8 = n13).__v).__e, (c8 = u8.__P) && (i11 = [], (o14 = h5({}, r11)).__v = r11.__v + 1, L4(c8, r11, o14, u8.__n, void 0 !== c8.ownerSVGElement, null != r11.__h ? [e13] : null, i11, null == e13 ? g4(r11) : e13, r11.__h), M3(i11, r11), r11.__e != e13 && m4(r11)), t7.length > l14 && t7.sort(f5));
  x4.__r = 0;
}
function P4(n13, l14, u8, i11, t9, o14, r11, f7, e13, a8) {
  var h8, p6, y6, _5, b6, m6, w7, x7 = i11 && i11.__k || s9, P6 = x7.length;
  for (u8.__k = [], h8 = 0; h8 < l14.length; h8++)
    if (null != (_5 = u8.__k[h8] = null == (_5 = l14[h8]) || "boolean" == typeof _5 || "function" == typeof _5 ? null : "string" == typeof _5 || "number" == typeof _5 || "bigint" == typeof _5 ? d5(null, _5, null, null, _5) : v4(_5) ? d5(k4, { children: _5 }, null, null, null) : _5.__b > 0 ? d5(_5.type, _5.props, _5.key, _5.ref ? _5.ref : null, _5.__v) : _5)) {
      if (_5.__ = u8, _5.__b = u8.__b + 1, null === (y6 = x7[h8]) || y6 && _5.key == y6.key && _5.type === y6.type)
        x7[h8] = void 0;
      else
        for (p6 = 0; p6 < P6; p6++) {
          if ((y6 = x7[p6]) && _5.key == y6.key && _5.type === y6.type) {
            x7[p6] = void 0;
            break;
          }
          y6 = null;
        }
      L4(n13, _5, y6 = y6 || c5, t9, o14, r11, f7, e13, a8), b6 = _5.__e, (p6 = _5.ref) && y6.ref != p6 && (w7 || (w7 = []), y6.ref && w7.push(y6.ref, null, _5), w7.push(p6, _5.__c || b6, _5)), null != b6 ? (null == m6 && (m6 = b6), "function" == typeof _5.type && _5.__k === y6.__k ? _5.__d = e13 = C3(_5, e13, n13) : e13 = $3(n13, _5, y6, x7, b6, e13), "function" == typeof u8.type && (u8.__d = e13)) : e13 && y6.__e == e13 && e13.parentNode != n13 && (e13 = g4(y6));
    }
  for (u8.__e = m6, h8 = P6; h8--; )
    null != x7[h8] && ("function" == typeof u8.type && null != x7[h8].__e && x7[h8].__e == u8.__d && (u8.__d = A2(i11).nextSibling), q(x7[h8], x7[h8]));
  if (w7)
    for (h8 = 0; h8 < w7.length; h8++)
      O3(w7[h8], w7[++h8], w7[++h8]);
}
function C3(n13, l14, u8) {
  for (var i11, t9 = n13.__k, o14 = 0; t9 && o14 < t9.length; o14++)
    (i11 = t9[o14]) && (i11.__ = n13, l14 = "function" == typeof i11.type ? C3(i11, l14, u8) : $3(u8, i11, i11, t9, i11.__e, l14));
  return l14;
}
function S4(n13, l14) {
  return l14 = l14 || [], null == n13 || "boolean" == typeof n13 || (v4(n13) ? n13.some(function(n14) {
    S4(n14, l14);
  }) : l14.push(n13)), l14;
}
function $3(n13, l14, u8, i11, t9, o14) {
  var r11, f7, e13;
  if (void 0 !== l14.__d)
    r11 = l14.__d, l14.__d = void 0;
  else if (null == u8 || t9 != o14 || null == t9.parentNode)
    n:
      if (null == o14 || o14.parentNode !== n13)
        n13.appendChild(t9), r11 = null;
      else {
        for (f7 = o14, e13 = 0; (f7 = f7.nextSibling) && e13 < i11.length; e13 += 1)
          if (f7 == t9)
            break n;
        n13.insertBefore(t9, o14), r11 = o14;
      }
  return void 0 !== r11 ? r11 : t9.nextSibling;
}
function A2(n13) {
  var l14, u8, i11;
  if (null == n13.type || "string" == typeof n13.type)
    return n13.__e;
  if (n13.__k) {
    for (l14 = n13.__k.length - 1; l14 >= 0; l14--)
      if ((u8 = n13.__k[l14]) && (i11 = A2(u8)))
        return i11;
  }
  return null;
}
function H3(n13, l14, u8, i11, t9) {
  var o14;
  for (o14 in u8)
    "children" === o14 || "key" === o14 || o14 in l14 || T4(n13, o14, null, u8[o14], i11);
  for (o14 in l14)
    t9 && "function" != typeof l14[o14] || "children" === o14 || "key" === o14 || "value" === o14 || "checked" === o14 || u8[o14] === l14[o14] || T4(n13, o14, l14[o14], u8[o14], i11);
}
function I2(n13, l14, u8) {
  "-" === l14[0] ? n13.setProperty(l14, null == u8 ? "" : u8) : n13[l14] = null == u8 ? "" : "number" != typeof u8 || a6.test(l14) ? u8 : u8 + "px";
}
function T4(n13, l14, u8, i11, t9) {
  var o14;
  n:
    if ("style" === l14)
      if ("string" == typeof u8)
        n13.style.cssText = u8;
      else {
        if ("string" == typeof i11 && (n13.style.cssText = i11 = ""), i11)
          for (l14 in i11)
            u8 && l14 in u8 || I2(n13.style, l14, "");
        if (u8)
          for (l14 in u8)
            i11 && u8[l14] === i11[l14] || I2(n13.style, l14, u8[l14]);
      }
    else if ("o" === l14[0] && "n" === l14[1])
      o14 = l14 !== (l14 = l14.replace(/Capture$/, "")), l14 = l14.toLowerCase() in n13 ? l14.toLowerCase().slice(2) : l14.slice(2), n13.l || (n13.l = {}), n13.l[l14 + o14] = u8, u8 ? i11 || n13.addEventListener(l14, o14 ? z3 : j2, o14) : n13.removeEventListener(l14, o14 ? z3 : j2, o14);
    else if ("dangerouslySetInnerHTML" !== l14) {
      if (t9)
        l14 = l14.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" !== l14 && "height" !== l14 && "href" !== l14 && "list" !== l14 && "form" !== l14 && "tabIndex" !== l14 && "download" !== l14 && "rowSpan" !== l14 && "colSpan" !== l14 && l14 in n13)
        try {
          n13[l14] = null == u8 ? "" : u8;
          break n;
        } catch (n14) {
        }
      "function" == typeof u8 || (null == u8 || false === u8 && "-" !== l14[4] ? n13.removeAttribute(l14) : n13.setAttribute(l14, u8));
    }
}
function j2(n13) {
  return this.l[n13.type + false](l11.event ? l11.event(n13) : n13);
}
function z3(n13) {
  return this.l[n13.type + true](l11.event ? l11.event(n13) : n13);
}
function L4(n13, u8, i11, t9, o14, r11, f7, e13, c8) {
  var s12, a8, p6, y6, d7, _5, g7, m6, w7, x7, C5, S5, $5, A5, H5, I4 = u8.type;
  if (void 0 !== u8.constructor)
    return null;
  null != i11.__h && (c8 = i11.__h, e13 = u8.__e = i11.__e, u8.__h = null, r11 = [e13]), (s12 = l11.__b) && s12(u8);
  try {
    n:
      if ("function" == typeof I4) {
        if (m6 = u8.props, w7 = (s12 = I4.contextType) && t9[s12.__c], x7 = s12 ? w7 ? w7.props.value : s12.__ : t9, i11.__c ? g7 = (a8 = u8.__c = i11.__c).__ = a8.__E : ("prototype" in I4 && I4.prototype.render ? u8.__c = a8 = new I4(m6, x7) : (u8.__c = a8 = new b4(m6, x7), a8.constructor = I4, a8.render = B3), w7 && w7.sub(a8), a8.props = m6, a8.state || (a8.state = {}), a8.context = x7, a8.__n = t9, p6 = a8.__d = true, a8.__h = [], a8._sb = []), null == a8.__s && (a8.__s = a8.state), null != I4.getDerivedStateFromProps && (a8.__s == a8.state && (a8.__s = h5({}, a8.__s)), h5(a8.__s, I4.getDerivedStateFromProps(m6, a8.__s))), y6 = a8.props, d7 = a8.state, a8.__v = u8, p6)
          null == I4.getDerivedStateFromProps && null != a8.componentWillMount && a8.componentWillMount(), null != a8.componentDidMount && a8.__h.push(a8.componentDidMount);
        else {
          if (null == I4.getDerivedStateFromProps && m6 !== y6 && null != a8.componentWillReceiveProps && a8.componentWillReceiveProps(m6, x7), !a8.__e && null != a8.shouldComponentUpdate && false === a8.shouldComponentUpdate(m6, a8.__s, x7) || u8.__v === i11.__v) {
            for (u8.__v !== i11.__v && (a8.props = m6, a8.state = a8.__s, a8.__d = false), a8.__e = false, u8.__e = i11.__e, u8.__k = i11.__k, u8.__k.forEach(function(n14) {
              n14 && (n14.__ = u8);
            }), C5 = 0; C5 < a8._sb.length; C5++)
              a8.__h.push(a8._sb[C5]);
            a8._sb = [], a8.__h.length && f7.push(a8);
            break n;
          }
          null != a8.componentWillUpdate && a8.componentWillUpdate(m6, a8.__s, x7), null != a8.componentDidUpdate && a8.__h.push(function() {
            a8.componentDidUpdate(y6, d7, _5);
          });
        }
        if (a8.context = x7, a8.props = m6, a8.__P = n13, S5 = l11.__r, $5 = 0, "prototype" in I4 && I4.prototype.render) {
          for (a8.state = a8.__s, a8.__d = false, S5 && S5(u8), s12 = a8.render(a8.props, a8.state, a8.context), A5 = 0; A5 < a8._sb.length; A5++)
            a8.__h.push(a8._sb[A5]);
          a8._sb = [];
        } else
          do {
            a8.__d = false, S5 && S5(u8), s12 = a8.render(a8.props, a8.state, a8.context), a8.state = a8.__s;
          } while (a8.__d && ++$5 < 25);
        a8.state = a8.__s, null != a8.getChildContext && (t9 = h5(h5({}, t9), a8.getChildContext())), p6 || null == a8.getSnapshotBeforeUpdate || (_5 = a8.getSnapshotBeforeUpdate(y6, d7)), P4(n13, v4(H5 = null != s12 && s12.type === k4 && null == s12.key ? s12.props.children : s12) ? H5 : [H5], u8, i11, t9, o14, r11, f7, e13, c8), a8.base = u8.__e, u8.__h = null, a8.__h.length && f7.push(a8), g7 && (a8.__E = a8.__ = null), a8.__e = false;
      } else
        null == r11 && u8.__v === i11.__v ? (u8.__k = i11.__k, u8.__e = i11.__e) : u8.__e = N2(i11.__e, u8, i11, t9, o14, r11, f7, c8);
    (s12 = l11.diffed) && s12(u8);
  } catch (n14) {
    u8.__v = null, (c8 || null != r11) && (u8.__e = e13, u8.__h = !!c8, r11[r11.indexOf(e13)] = null), l11.__e(n14, u8, i11);
  }
}
function M3(n13, u8) {
  l11.__c && l11.__c(u8, n13), n13.some(function(u9) {
    try {
      n13 = u9.__h, u9.__h = [], n13.some(function(n14) {
        n14.call(u9);
      });
    } catch (n14) {
      l11.__e(n14, u9.__v);
    }
  });
}
function N2(l14, u8, i11, t9, o14, r11, f7, e13) {
  var s12, a8, h8, y6 = i11.props, d7 = u8.props, _5 = u8.type, k7 = 0;
  if ("svg" === _5 && (o14 = true), null != r11) {
    for (; k7 < r11.length; k7++)
      if ((s12 = r11[k7]) && "setAttribute" in s12 == !!_5 && (_5 ? s12.localName === _5 : 3 === s12.nodeType)) {
        l14 = s12, r11[k7] = null;
        break;
      }
  }
  if (null == l14) {
    if (null === _5)
      return document.createTextNode(d7);
    l14 = o14 ? document.createElementNS("http://www.w3.org/2000/svg", _5) : document.createElement(_5, d7.is && d7), r11 = null, e13 = false;
  }
  if (null === _5)
    y6 === d7 || e13 && l14.data === d7 || (l14.data = d7);
  else {
    if (r11 = r11 && n11.call(l14.childNodes), a8 = (y6 = i11.props || c5).dangerouslySetInnerHTML, h8 = d7.dangerouslySetInnerHTML, !e13) {
      if (null != r11)
        for (y6 = {}, k7 = 0; k7 < l14.attributes.length; k7++)
          y6[l14.attributes[k7].name] = l14.attributes[k7].value;
      (h8 || a8) && (h8 && (a8 && h8.__html == a8.__html || h8.__html === l14.innerHTML) || (l14.innerHTML = h8 && h8.__html || ""));
    }
    if (H3(l14, d7, y6, o14, e13), h8)
      u8.__k = [];
    else if (P4(l14, v4(k7 = u8.props.children) ? k7 : [k7], u8, i11, t9, o14 && "foreignObject" !== _5, r11, f7, r11 ? r11[0] : i11.__k && g4(i11, 0), e13), null != r11)
      for (k7 = r11.length; k7--; )
        null != r11[k7] && p4(r11[k7]);
    e13 || ("value" in d7 && void 0 !== (k7 = d7.value) && (k7 !== l14.value || "progress" === _5 && !k7 || "option" === _5 && k7 !== y6.value) && T4(l14, "value", k7, y6.value, false), "checked" in d7 && void 0 !== (k7 = d7.checked) && k7 !== l14.checked && T4(l14, "checked", k7, y6.checked, false));
  }
  return l14;
}
function O3(n13, u8, i11) {
  try {
    "function" == typeof n13 ? n13(u8) : n13.current = u8;
  } catch (n14) {
    l11.__e(n14, i11);
  }
}
function q(n13, u8, i11) {
  var t9, o14;
  if (l11.unmount && l11.unmount(n13), (t9 = n13.ref) && (t9.current && t9.current !== n13.__e || O3(t9, null, u8)), null != (t9 = n13.__c)) {
    if (t9.componentWillUnmount)
      try {
        t9.componentWillUnmount();
      } catch (n14) {
        l11.__e(n14, u8);
      }
    t9.base = t9.__P = null, n13.__c = void 0;
  }
  if (t9 = n13.__k)
    for (o14 = 0; o14 < t9.length; o14++)
      t9[o14] && q(t9[o14], u8, i11 || "function" != typeof n13.type);
  i11 || null == n13.__e || p4(n13.__e), n13.__ = n13.__e = n13.__d = void 0;
}
function B3(n13, l14, u8) {
  return this.constructor(n13, u8);
}
function D3(u8, i11, t9) {
  var o14, r11, f7;
  l11.__ && l11.__(u8, i11), r11 = (o14 = "function" == typeof t9) ? null : t9 && t9.__k || i11.__k, f7 = [], L4(i11, u8 = (!o14 && t9 || i11).__k = y4(k4, null, [u8]), r11 || c5, c5, void 0 !== i11.ownerSVGElement, !o14 && t9 ? [t9] : r11 ? null : i11.firstChild ? n11.call(i11.childNodes) : null, f7, !o14 && t9 ? t9 : r11 ? r11.__e : i11.firstChild, o14), M3(f7, u8);
}
function E3(n13, l14) {
  D3(n13, l14, E3);
}
function F2(l14, u8, i11) {
  var t9, o14, r11, f7, e13 = h5({}, l14.props);
  for (r11 in l14.type && l14.type.defaultProps && (f7 = l14.type.defaultProps), u8)
    "key" == r11 ? t9 = u8[r11] : "ref" == r11 ? o14 = u8[r11] : e13[r11] = void 0 === u8[r11] && void 0 !== f7 ? f7[r11] : u8[r11];
  return arguments.length > 2 && (e13.children = arguments.length > 3 ? n11.call(arguments, 2) : i11), d5(l14.type, e13, t9 || l14.key, o14 || l14.ref, null);
}
function G(n13, l14) {
  var u8 = { __c: l14 = "__cC" + e11++, __: n13, Consumer: function(n14, l15) {
    return n14.children(l15);
  }, Provider: function(n14) {
    var u9, i11;
    return this.getChildContext || (u9 = [], (i11 = {})[l14] = this, this.getChildContext = function() {
      return i11;
    }, this.shouldComponentUpdate = function(n15) {
      this.props.value !== n15.value && u9.some(function(n16) {
        n16.__e = true, w4(n16);
      });
    }, this.sub = function(n15) {
      u9.push(n15);
      var l15 = n15.componentWillUnmount;
      n15.componentWillUnmount = function() {
        u9.splice(u9.indexOf(n15), 1), l15 && l15.call(n15);
      };
    }), n14.children;
  } };
  return u8.Provider.__ = u8.Consumer.contextType = u8;
}
n11 = s9.slice, l11 = { __e: function(n13, l14, u8, i11) {
  for (var t9, o14, r11; l14 = l14.__; )
    if ((t9 = l14.__c) && !t9.__)
      try {
        if ((o14 = t9.constructor) && null != o14.getDerivedStateFromError && (t9.setState(o14.getDerivedStateFromError(n13)), r11 = t9.__d), null != t9.componentDidCatch && (t9.componentDidCatch(n13, i11 || {}), r11 = t9.__d), r11)
          return t9.__E = t9;
      } catch (l15) {
        n13 = l15;
      }
  throw n13;
} }, u6 = 0, i9 = function(n13) {
  return null != n13 && void 0 === n13.constructor;
}, b4.prototype.setState = function(n13, l14) {
  var u8;
  u8 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = h5({}, this.state), "function" == typeof n13 && (n13 = n13(h5({}, u8), this.props)), n13 && h5(u8, n13), null != n13 && this.__v && (l14 && this._sb.push(l14), w4(this));
}, b4.prototype.forceUpdate = function(n13) {
  this.__v && (this.__e = true, n13 && this.__h.push(n13), w4(this));
}, b4.prototype.render = k4, t7 = [], r7 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f5 = function(n13, l14) {
  return n13.__v.__b - l14.__v.__b;
}, x4.__r = 0, e11 = 0;

// node_modules/preact/hooks/dist/hooks.module.js
var t8;
var r8;
var u7;
var i10;
var o11 = 0;
var f6 = [];
var c6 = [];
var e12 = l11.__b;
var a7 = l11.__r;
var v5 = l11.diffed;
var l12 = l11.__c;
var m5 = l11.unmount;
function d6(t9, u8) {
  l11.__h && l11.__h(r8, t9, o11 || u8), o11 = 0;
  var i11 = r8.__H || (r8.__H = { __: [], __h: [] });
  return t9 >= i11.__.length && i11.__.push({ __V: c6 }), i11.__[t9];
}
function h6(n13) {
  return o11 = 1, s10(B4, n13);
}
function s10(n13, u8, i11) {
  var o14 = d6(t8++, 2);
  if (o14.t = n13, !o14.__c && (o14.__ = [i11 ? i11(u8) : B4(void 0, u8), function(n14) {
    var t9 = o14.__N ? o14.__N[0] : o14.__[0], r11 = o14.t(t9, n14);
    t9 !== r11 && (o14.__N = [r11, o14.__[1]], o14.__c.setState({}));
  }], o14.__c = r8, !r8.u)) {
    var f7 = function(n14, t9, r11) {
      if (!o14.__c.__H)
        return true;
      var u9 = o14.__c.__H.__.filter(function(n15) {
        return n15.__c;
      });
      if (u9.every(function(n15) {
        return !n15.__N;
      }))
        return !c8 || c8.call(this, n14, t9, r11);
      var i12 = false;
      return u9.forEach(function(n15) {
        if (n15.__N) {
          var t10 = n15.__[0];
          n15.__ = n15.__N, n15.__N = void 0, t10 !== n15.__[0] && (i12 = true);
        }
      }), !(!i12 && o14.__c.props === n14) && (!c8 || c8.call(this, n14, t9, r11));
    };
    r8.u = true;
    var c8 = r8.shouldComponentUpdate, e13 = r8.componentWillUpdate;
    r8.componentWillUpdate = function(n14, t9, r11) {
      if (this.__e) {
        var u9 = c8;
        c8 = void 0, f7(n14, t9, r11), c8 = u9;
      }
      e13 && e13.call(this, n14, t9, r11);
    }, r8.shouldComponentUpdate = f7;
  }
  return o14.__N || o14.__;
}
function p5(u8, i11) {
  var o14 = d6(t8++, 3);
  !l11.__s && z4(o14.__H, i11) && (o14.__ = u8, o14.i = i11, r8.__H.__h.push(o14));
}
function y5(u8, i11) {
  var o14 = d6(t8++, 4);
  !l11.__s && z4(o14.__H, i11) && (o14.__ = u8, o14.i = i11, r8.__h.push(o14));
}
function _3(n13) {
  return o11 = 5, F3(function() {
    return { current: n13 };
  }, []);
}
function A3(n13, t9, r11) {
  o11 = 6, y5(function() {
    return "function" == typeof n13 ? (n13(t9()), function() {
      return n13(null);
    }) : n13 ? (n13.current = t9(), function() {
      return n13.current = null;
    }) : void 0;
  }, null == r11 ? r11 : r11.concat(n13));
}
function F3(n13, r11) {
  var u8 = d6(t8++, 7);
  return z4(u8.__H, r11) ? (u8.__V = n13(), u8.i = r11, u8.__h = n13, u8.__V) : u8.__;
}
function T5(n13, t9) {
  return o11 = 8, F3(function() {
    return n13;
  }, t9);
}
function q2(n13) {
  var u8 = r8.context[n13.__c], i11 = d6(t8++, 9);
  return i11.c = n13, u8 ? (null == i11.__ && (i11.__ = true, u8.sub(r8)), u8.props.value) : n13.__;
}
function x5(t9, r11) {
  l11.useDebugValue && l11.useDebugValue(r11 ? r11(t9) : t9);
}
function V3() {
  var n13 = d6(t8++, 11);
  if (!n13.__) {
    for (var u8 = r8.__v; null !== u8 && !u8.__m && null !== u8.__; )
      u8 = u8.__;
    var i11 = u8.__m || (u8.__m = [0, 0]);
    n13.__ = "P" + i11[0] + "-" + i11[1]++;
  }
  return n13.__;
}
function b5() {
  for (var t9; t9 = f6.shift(); )
    if (t9.__P && t9.__H)
      try {
        t9.__H.__h.forEach(k5), t9.__H.__h.forEach(w5), t9.__H.__h = [];
      } catch (r11) {
        t9.__H.__h = [], l11.__e(r11, t9.__v);
      }
}
l11.__b = function(n13) {
  r8 = null, e12 && e12(n13);
}, l11.__r = function(n13) {
  a7 && a7(n13), t8 = 0;
  var i11 = (r8 = n13.__c).__H;
  i11 && (u7 === r8 ? (i11.__h = [], r8.__h = [], i11.__.forEach(function(n14) {
    n14.__N && (n14.__ = n14.__N), n14.__V = c6, n14.__N = n14.i = void 0;
  })) : (i11.__h.forEach(k5), i11.__h.forEach(w5), i11.__h = [], t8 = 0)), u7 = r8;
}, l11.diffed = function(t9) {
  v5 && v5(t9);
  var o14 = t9.__c;
  o14 && o14.__H && (o14.__H.__h.length && (1 !== f6.push(o14) && i10 === l11.requestAnimationFrame || ((i10 = l11.requestAnimationFrame) || j3)(b5)), o14.__H.__.forEach(function(n13) {
    n13.i && (n13.__H = n13.i), n13.__V !== c6 && (n13.__ = n13.__V), n13.i = void 0, n13.__V = c6;
  })), u7 = r8 = null;
}, l11.__c = function(t9, r11) {
  r11.some(function(t10) {
    try {
      t10.__h.forEach(k5), t10.__h = t10.__h.filter(function(n13) {
        return !n13.__ || w5(n13);
      });
    } catch (u8) {
      r11.some(function(n13) {
        n13.__h && (n13.__h = []);
      }), r11 = [], l11.__e(u8, t10.__v);
    }
  }), l12 && l12(t9, r11);
}, l11.unmount = function(t9) {
  m5 && m5(t9);
  var r11, u8 = t9.__c;
  u8 && u8.__H && (u8.__H.__.forEach(function(n13) {
    try {
      k5(n13);
    } catch (n14) {
      r11 = n14;
    }
  }), u8.__H = void 0, r11 && l11.__e(r11, u8.__v));
};
var g5 = "function" == typeof requestAnimationFrame;
function j3(n13) {
  var t9, r11 = function() {
    clearTimeout(u8), g5 && cancelAnimationFrame(t9), setTimeout(n13);
  }, u8 = setTimeout(r11, 100);
  g5 && (t9 = requestAnimationFrame(r11));
}
function k5(n13) {
  var t9 = r8, u8 = n13.__c;
  "function" == typeof u8 && (n13.__c = void 0, u8()), r8 = t9;
}
function w5(n13) {
  var t9 = r8;
  n13.__c = n13.__(), r8 = t9;
}
function z4(n13, t9) {
  return !n13 || n13.length !== t9.length || t9.some(function(t10, r11) {
    return t10 !== n13[r11];
  });
}
function B4(n13, t9) {
  return "function" == typeof t9 ? t9(n13) : t9;
}

// node_modules/preact/compat/dist/compat.module.js
function g6(n13, t9) {
  for (var e13 in t9)
    n13[e13] = t9[e13];
  return n13;
}
function C4(n13, t9) {
  for (var e13 in n13)
    if ("__source" !== e13 && !(e13 in t9))
      return true;
  for (var r11 in t9)
    if ("__source" !== r11 && n13[r11] !== t9[r11])
      return true;
  return false;
}
function E4(n13, t9) {
  return n13 === t9 && (0 !== n13 || 1 / n13 == 1 / t9) || n13 != n13 && t9 != t9;
}
function w6(n13) {
  this.props = n13;
}
function x6(n13, e13) {
  function r11(n14) {
    var t9 = this.props.ref, r12 = t9 == n14.ref;
    return !r12 && t9 && (t9.call ? t9(null) : t9.current = null), e13 ? !e13(this.props, n14) || !r12 : C4(this.props, n14);
  }
  function u8(e14) {
    return this.shouldComponentUpdate = r11, y4(n13, e14);
  }
  return u8.displayName = "Memo(" + (n13.displayName || n13.name) + ")", u8.prototype.isReactComponent = true, u8.__f = true, u8;
}
(w6.prototype = new b4()).isPureReactComponent = true, w6.prototype.shouldComponentUpdate = function(n13, t9) {
  return C4(this.props, n13) || C4(this.state, t9);
};
var R3 = l11.__b;
l11.__b = function(n13) {
  n13.type && n13.type.__f && n13.ref && (n13.props.ref = n13.ref, n13.ref = null), R3 && R3(n13);
};
var N3 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function k6(n13) {
  function t9(t10) {
    var e13 = g6({}, t10);
    return delete e13.ref, n13(e13, t10.ref || null);
  }
  return t9.$$typeof = N3, t9.render = t9, t9.prototype.isReactComponent = t9.__f = true, t9.displayName = "ForwardRef(" + (n13.displayName || n13.name) + ")", t9;
}
var A4 = function(n13, t9) {
  return null == n13 ? null : S4(S4(n13).map(t9));
};
var O4 = { map: A4, forEach: A4, count: function(n13) {
  return n13 ? S4(n13).length : 0;
}, only: function(n13) {
  var t9 = S4(n13);
  if (1 !== t9.length)
    throw "Children.only";
  return t9[0];
}, toArray: S4 };
var T6 = l11.__e;
l11.__e = function(n13, t9, e13, r11) {
  if (n13.then) {
    for (var u8, o14 = t9; o14 = o14.__; )
      if ((u8 = o14.__c) && u8.__c)
        return null == t9.__e && (t9.__e = e13.__e, t9.__k = e13.__k), u8.__c(n13, t9);
  }
  T6(n13, t9, e13, r11);
};
var I3 = l11.unmount;
function L5(n13, t9, e13) {
  return n13 && (n13.__c && n13.__c.__H && (n13.__c.__H.__.forEach(function(n14) {
    "function" == typeof n14.__c && n14.__c();
  }), n13.__c.__H = null), null != (n13 = g6({}, n13)).__c && (n13.__c.__P === e13 && (n13.__c.__P = t9), n13.__c = null), n13.__k = n13.__k && n13.__k.map(function(n14) {
    return L5(n14, t9, e13);
  })), n13;
}
function U(n13, t9, e13) {
  return n13 && (n13.__v = null, n13.__k = n13.__k && n13.__k.map(function(n14) {
    return U(n14, t9, e13);
  }), n13.__c && n13.__c.__P === t9 && (n13.__e && e13.insertBefore(n13.__e, n13.__d), n13.__c.__e = true, n13.__c.__P = e13)), n13;
}
function D4() {
  this.__u = 0, this.t = null, this.__b = null;
}
function F4(n13) {
  var t9 = n13.__.__c;
  return t9 && t9.__a && t9.__a(n13);
}
function M4(n13) {
  var e13, r11, u8;
  function o14(o15) {
    if (e13 || (e13 = n13()).then(function(n14) {
      r11 = n14.default || n14;
    }, function(n14) {
      u8 = n14;
    }), u8)
      throw u8;
    if (!r11)
      throw e13;
    return y4(r11, o15);
  }
  return o14.displayName = "Lazy", o14.__f = true, o14;
}
function V4() {
  this.u = null, this.o = null;
}
l11.unmount = function(n13) {
  var t9 = n13.__c;
  t9 && t9.__R && t9.__R(), t9 && true === n13.__h && (n13.type = null), I3 && I3(n13);
}, (D4.prototype = new b4()).__c = function(n13, t9) {
  var e13 = t9.__c, r11 = this;
  null == r11.t && (r11.t = []), r11.t.push(e13);
  var u8 = F4(r11.__v), o14 = false, i11 = function() {
    o14 || (o14 = true, e13.__R = null, u8 ? u8(l14) : l14());
  };
  e13.__R = i11;
  var l14 = function() {
    if (!--r11.__u) {
      if (r11.state.__a) {
        var n14 = r11.state.__a;
        r11.__v.__k[0] = U(n14, n14.__c.__P, n14.__c.__O);
      }
      var t10;
      for (r11.setState({ __a: r11.__b = null }); t10 = r11.t.pop(); )
        t10.forceUpdate();
    }
  }, c8 = true === t9.__h;
  r11.__u++ || c8 || r11.setState({ __a: r11.__b = r11.__v.__k[0] }), n13.then(i11, i11);
}, D4.prototype.componentWillUnmount = function() {
  this.t = [];
}, D4.prototype.render = function(n13, e13) {
  if (this.__b) {
    if (this.__v.__k) {
      var r11 = document.createElement("div"), o14 = this.__v.__k[0].__c;
      this.__v.__k[0] = L5(this.__b, r11, o14.__O = o14.__P);
    }
    this.__b = null;
  }
  var i11 = e13.__a && y4(k4, null, n13.fallback);
  return i11 && (i11.__h = null), [y4(k4, null, e13.__a ? null : n13.children), i11];
};
var W2 = function(n13, t9, e13) {
  if (++e13[1] === e13[0] && n13.o.delete(t9), n13.props.revealOrder && ("t" !== n13.props.revealOrder[0] || !n13.o.size))
    for (e13 = n13.u; e13; ) {
      for (; e13.length > 3; )
        e13.pop()();
      if (e13[1] < e13[0])
        break;
      n13.u = e13 = e13[2];
    }
};
function P5(n13) {
  return this.getChildContext = function() {
    return n13.context;
  }, n13.children;
}
function j4(n13) {
  var e13 = this, r11 = n13.i;
  e13.componentWillUnmount = function() {
    D3(null, e13.l), e13.l = null, e13.i = null;
  }, e13.i && e13.i !== r11 && e13.componentWillUnmount(), n13.__v ? (e13.l || (e13.i = r11, e13.l = { nodeType: 1, parentNode: r11, childNodes: [], appendChild: function(n14) {
    this.childNodes.push(n14), e13.i.appendChild(n14);
  }, insertBefore: function(n14, t9) {
    this.childNodes.push(n14), e13.i.appendChild(n14);
  }, removeChild: function(n14) {
    this.childNodes.splice(this.childNodes.indexOf(n14) >>> 1, 1), e13.i.removeChild(n14);
  } }), D3(y4(P5, { context: e13.context }, n13.__v), e13.l)) : e13.l && e13.componentWillUnmount();
}
function z5(n13, e13) {
  var r11 = y4(j4, { __v: n13, i: e13 });
  return r11.containerInfo = e13, r11;
}
(V4.prototype = new b4()).__a = function(n13) {
  var t9 = this, e13 = F4(t9.__v), r11 = t9.o.get(n13);
  return r11[0]++, function(u8) {
    var o14 = function() {
      t9.props.revealOrder ? (r11.push(u8), W2(t9, n13, r11)) : u8();
    };
    e13 ? e13(o14) : o14();
  };
}, V4.prototype.render = function(n13) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t9 = S4(n13.children);
  n13.revealOrder && "b" === n13.revealOrder[0] && t9.reverse();
  for (var e13 = t9.length; e13--; )
    this.o.set(t9[e13], this.u = [1, 0, this.u]);
  return n13.children;
}, V4.prototype.componentDidUpdate = V4.prototype.componentDidMount = function() {
  var n13 = this;
  this.o.forEach(function(t9, e13) {
    W2(n13, e13, t9);
  });
};
var B5 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
var H4 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
var Z2 = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
var Y = /[A-Z0-9]/g;
var $4 = "undefined" != typeof document;
var q3 = function(n13) {
  return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n13);
};
function G2(n13, t9, e13) {
  return null == t9.__k && (t9.textContent = ""), D3(n13, t9), "function" == typeof e13 && e13(), n13 ? n13.__c : null;
}
function J(n13, t9, e13) {
  return E3(n13, t9), "function" == typeof e13 && e13(), n13 ? n13.__c : null;
}
b4.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t9) {
  Object.defineProperty(b4.prototype, t9, { configurable: true, get: function() {
    return this["UNSAFE_" + t9];
  }, set: function(n13) {
    Object.defineProperty(this, t9, { configurable: true, writable: true, value: n13 });
  } });
});
var K = l11.event;
function Q() {
}
function X() {
  return this.cancelBubble;
}
function nn() {
  return this.defaultPrevented;
}
l11.event = function(n13) {
  return K && (n13 = K(n13)), n13.persist = Q, n13.isPropagationStopped = X, n13.isDefaultPrevented = nn, n13.nativeEvent = n13;
};
var tn;
var en = { enumerable: false, configurable: true, get: function() {
  return this.class;
} };
var rn = l11.vnode;
l11.vnode = function(n13) {
  "string" == typeof n13.type && function(n14) {
    var t9 = n14.props, e13 = n14.type, u8 = {};
    for (var o14 in t9) {
      var i11 = t9[o14];
      if (!("value" === o14 && "defaultValue" in t9 && null == i11 || $4 && "children" === o14 && "noscript" === e13 || "class" === o14 || "className" === o14)) {
        var l14 = o14.toLowerCase();
        "defaultValue" === o14 && "value" in t9 && null == t9.value ? o14 = "value" : "download" === o14 && true === i11 ? i11 = "" : "ondoubleclick" === l14 ? o14 = "ondblclick" : "onchange" !== l14 || "input" !== e13 && "textarea" !== e13 || q3(t9.type) ? "onfocus" === l14 ? o14 = "onfocusin" : "onblur" === l14 ? o14 = "onfocusout" : Z2.test(o14) ? o14 = l14 : -1 === e13.indexOf("-") && H4.test(o14) ? o14 = o14.replace(Y, "-$&").toLowerCase() : null === i11 && (i11 = void 0) : l14 = o14 = "oninput", "oninput" === l14 && u8[o14 = l14] && (o14 = "oninputCapture"), u8[o14] = i11;
      }
    }
    "select" == e13 && u8.multiple && Array.isArray(u8.value) && (u8.value = S4(t9.children).forEach(function(n15) {
      n15.props.selected = -1 != u8.value.indexOf(n15.props.value);
    })), "select" == e13 && null != u8.defaultValue && (u8.value = S4(t9.children).forEach(function(n15) {
      n15.props.selected = u8.multiple ? -1 != u8.defaultValue.indexOf(n15.props.value) : u8.defaultValue == n15.props.value;
    })), t9.class && !t9.className ? (u8.class = t9.class, Object.defineProperty(u8, "className", en)) : (t9.className && !t9.class || t9.class && t9.className) && (u8.class = u8.className = t9.className), n14.props = u8;
  }(n13), n13.$$typeof = B5, rn && rn(n13);
};
var un = l11.__r;
l11.__r = function(n13) {
  un && un(n13), tn = n13.__c;
};
var on = l11.diffed;
l11.diffed = function(n13) {
  on && on(n13);
  var t9 = n13.props, e13 = n13.__e;
  null != e13 && "textarea" === n13.type && "value" in t9 && t9.value !== e13.value && (e13.value = null == t9.value ? "" : t9.value), tn = null;
};
var ln = { ReactCurrentDispatcher: { current: { readContext: function(n13) {
  return tn.__n[n13.__c].props.value;
} } } };
function fn(n13) {
  return y4.bind(null, n13);
}
function an(n13) {
  return !!n13 && n13.$$typeof === B5;
}
function sn(n13) {
  return an(n13) ? F2.apply(null, arguments) : n13;
}
function hn(n13) {
  return !!n13.__k && (D3(null, n13), true);
}
function vn(n13) {
  return n13 && (n13.base || 1 === n13.nodeType && n13) || null;
}
var dn = function(n13, t9) {
  return n13(t9);
};
var pn = function(n13, t9) {
  return n13(t9);
};
var mn = k4;
function yn(n13) {
  n13();
}
function _n(n13) {
  return n13;
}
function bn() {
  return [false, yn];
}
var Sn = y5;
function gn(n13, t9) {
  var e13 = t9(), r11 = h6({ h: { __: e13, v: t9 } }), u8 = r11[0].h, o14 = r11[1];
  return y5(function() {
    u8.__ = e13, u8.v = t9, E4(u8.__, t9()) || o14({ h: u8 });
  }, [n13, e13, t9]), p5(function() {
    return E4(u8.__, u8.v()) || o14({ h: u8 }), n13(function() {
      E4(u8.__, u8.v()) || o14({ h: u8 });
    });
  }, [n13]), e13;
}
var Cn = { useState: h6, useId: V3, useReducer: s10, useEffect: p5, useLayoutEffect: y5, useInsertionEffect: Sn, useTransition: bn, useDeferredValue: _n, useSyncExternalStore: gn, startTransition: yn, useRef: _3, useImperativeHandle: A3, useMemo: F3, useCallback: T5, useContext: q2, useDebugValue: x5, version: "17.0.2", Children: O4, render: G2, hydrate: J, unmountComponentAtNode: hn, createPortal: z5, createElement: y4, createContext: G, createFactory: fn, cloneElement: sn, createRef: _2, Fragment: k4, isValidElement: an, findDOMNode: vn, Component: b4, PureComponent: w6, memo: x6, forwardRef: k6, flushSync: pn, unstable_batchedUpdates: dn, StrictMode: mn, Suspense: D4, SuspenseList: V4, lazy: M4, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ln };

// node_modules/@mui/base/Slider/Slider.js
var import_prop_types = __toESM(require_prop_types());

// node_modules/clsx/dist/clsx.m.js
function r9(e13) {
  var t9, f7, n13 = "";
  if ("string" == typeof e13 || "number" == typeof e13)
    n13 += e13;
  else if ("object" == typeof e13)
    if (Array.isArray(e13))
      for (t9 = 0; t9 < e13.length; t9++)
        e13[t9] && (f7 = r9(e13[t9])) && (n13 && (n13 += " "), n13 += f7);
    else
      for (t9 in e13)
        e13[t9] && (n13 && (n13 += " "), n13 += t9);
  return n13;
}
function clsx() {
  for (var e13, t9, f7 = 0, n13 = ""; f7 < arguments.length; )
    (e13 = arguments[f7++]) && (t9 = r9(e13)) && (n13 && (n13 += " "), n13 += t9);
  return n13;
}
var clsx_m_default = clsx;

// node_modules/@mui/utils/esm/chainPropTypes.js
function chainPropTypes(propType1, propType2) {
  if (false) {
    return () => null;
  }
  return function validate(...args) {
    return propType1(...args) || propType2(...args);
  };
}

// node_modules/@mui/utils/esm/ownerDocument.js
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

// node_modules/@mui/utils/esm/setRef.js
function setRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

// node_modules/@mui/utils/esm/useEnhancedEffect.js
var useEnhancedEffect = typeof window !== "undefined" ? y5 : p5;
var useEnhancedEffect_default = useEnhancedEffect;

// node_modules/@mui/utils/esm/useControlled.js
function useControlled({
  controlled,
  default: defaultProp,
  name,
  state = "value"
}) {
  const {
    current: isControlled
  } = _3(controlled !== void 0);
  const [valueState, setValue] = h6(defaultProp);
  const value = isControlled ? controlled : valueState;
  if (true) {
    p5(() => {
      if (isControlled !== (controlled !== void 0)) {
        console.error([`MUI: A component is changing the ${isControlled ? "" : "un"}controlled ${state} state of ${name} to be ${isControlled ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${name} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join("\n"));
      }
    }, [state, name, controlled]);
    const {
      current: defaultValue2
    } = _3(defaultProp);
    p5(() => {
      if (!isControlled && defaultValue2 !== defaultProp) {
        console.error([`MUI: A component is changing the default ${state} state of an uncontrolled ${name} after being initialized. To suppress this warning opt to use a controlled ${name}.`].join("\n"));
      }
    }, [JSON.stringify(defaultProp)]);
  }
  const setValueIfUncontrolled = T5((newValue) => {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);
  return [value, setValueIfUncontrolled];
}

// node_modules/@mui/utils/esm/useEventCallback.js
function useEventCallback(fn2) {
  const ref = _3(fn2);
  useEnhancedEffect_default(() => {
    ref.current = fn2;
  });
  return T5((...args) => (
    // @ts-expect-error hide `this`
    // tslint:disable-next-line:ban-comma-operator
    (0, ref.current)(...args)
  ), []);
}

// node_modules/@mui/utils/esm/useForkRef.js
function useForkRef(...refs) {
  return F3(() => {
    if (refs.every((ref) => ref == null)) {
      return null;
    }
    return (instance) => {
      refs.forEach((ref) => {
        setRef(ref, instance);
      });
    };
  }, refs);
}

// node_modules/@mui/utils/esm/useIsFocusVisible.js
var hadKeyboardEvent = true;
var hadFocusVisibleRecently = false;
var hadFocusVisibleRecentlyTimeout;
var inputTypesWhitelist = {
  text: true,
  search: true,
  url: true,
  tel: true,
  email: true,
  password: true,
  number: true,
  date: true,
  month: true,
  week: true,
  time: true,
  datetime: true,
  "datetime-local": true
};
function focusTriggersKeyboardModality(node) {
  const {
    type,
    tagName
  } = node;
  if (tagName === "INPUT" && inputTypesWhitelist[type] && !node.readOnly) {
    return true;
  }
  if (tagName === "TEXTAREA" && !node.readOnly) {
    return true;
  }
  if (node.isContentEditable) {
    return true;
  }
  return false;
}
function handleKeyDown(event) {
  if (event.metaKey || event.altKey || event.ctrlKey) {
    return;
  }
  hadKeyboardEvent = true;
}
function handlePointerDown() {
  hadKeyboardEvent = false;
}
function handleVisibilityChange() {
  if (this.visibilityState === "hidden") {
    if (hadFocusVisibleRecently) {
      hadKeyboardEvent = true;
    }
  }
}
function prepare(doc) {
  doc.addEventListener("keydown", handleKeyDown, true);
  doc.addEventListener("mousedown", handlePointerDown, true);
  doc.addEventListener("pointerdown", handlePointerDown, true);
  doc.addEventListener("touchstart", handlePointerDown, true);
  doc.addEventListener("visibilitychange", handleVisibilityChange, true);
}
function isFocusVisible(event) {
  const {
    target
  } = event;
  try {
    return target.matches(":focus-visible");
  } catch (error) {
  }
  return hadKeyboardEvent || focusTriggersKeyboardModality(target);
}
function useIsFocusVisible() {
  const ref = T5((node) => {
    if (node != null) {
      prepare(node.ownerDocument);
    }
  }, []);
  const isFocusVisibleRef = _3(false);
  function handleBlurVisible() {
    if (isFocusVisibleRef.current) {
      hadFocusVisibleRecently = true;
      window.clearTimeout(hadFocusVisibleRecentlyTimeout);
      hadFocusVisibleRecentlyTimeout = window.setTimeout(() => {
        hadFocusVisibleRecently = false;
      }, 100);
      isFocusVisibleRef.current = false;
      return true;
    }
    return false;
  }
  function handleFocusVisible(event) {
    if (isFocusVisible(event)) {
      isFocusVisibleRef.current = true;
      return true;
    }
    return false;
  }
  return {
    isFocusVisibleRef,
    onFocus: handleFocusVisible,
    onBlur: handleBlurVisible,
    ref
  };
}

// node_modules/@mui/utils/esm/visuallyHidden.js
var visuallyHidden = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: -1,
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  whiteSpace: "nowrap",
  width: "1px"
};
var visuallyHidden_default = visuallyHidden;

// node_modules/@mui/utils/esm/composeClasses/composeClasses.js
function composeClasses(slots, getUtilityClass, classes = void 0) {
  const output = {};
  Object.keys(slots).forEach(
    // `Objet.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (slot) => {
      output[slot] = slots[slot].reduce((acc, key) => {
        if (key) {
          const utilityClass = getUtilityClass(key);
          if (utilityClass !== "") {
            acc.push(utilityClass);
          }
          if (classes && classes[key]) {
            acc.push(classes[key]);
          }
        }
        return acc;
      }, []).join(" ");
    }
  );
  return output;
}

// node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js
var defaultGenerator = (componentName) => componentName;
var createClassNameGenerator = () => {
  let generate = defaultGenerator;
  return {
    configure(generator) {
      generate = generator;
    },
    generate(componentName) {
      return generate(componentName);
    },
    reset() {
      generate = defaultGenerator;
    }
  };
};
var ClassNameGenerator = createClassNameGenerator();
var ClassNameGenerator_default = ClassNameGenerator;

// node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var globalStateClassesMapping = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  readOnly: "readOnly",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  required: "required",
  selected: "selected"
};
function generateUtilityClass(componentName, slot, globalStatePrefix = "Mui") {
  const globalStateClass = globalStateClassesMapping[slot];
  return globalStateClass ? `${globalStatePrefix}-${globalStateClass}` : `${ClassNameGenerator_default.generate(componentName)}-${slot}`;
}

// node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
function generateUtilityClasses(componentName, slots, globalStatePrefix = "Mui") {
  const result = {};
  slots.forEach((slot) => {
    result[slot] = generateUtilityClass(componentName, slot, globalStatePrefix);
  });
  return result;
}

// node_modules/@mui/base/utils/isHostComponent.js
function isHostComponent(element) {
  return typeof element === "string";
}

// node_modules/@mui/base/Slider/sliderClasses.js
function getSliderUtilityClass(slot) {
  return generateUtilityClass("MuiSlider", slot);
}
var sliderClasses = generateUtilityClasses("MuiSlider", ["root", "active", "focusVisible", "disabled", "dragging", "marked", "vertical", "trackInverted", "trackFalse", "rail", "track", "mark", "markActive", "markLabel", "markLabelActive", "thumb"]);
var sliderClasses_default = sliderClasses;

// node_modules/@mui/base/utils/appendOwnerState.js
function appendOwnerState(elementType, otherProps, ownerState) {
  if (elementType === void 0 || isHostComponent(elementType)) {
    return otherProps;
  }
  return _extends({}, otherProps, {
    ownerState: _extends({}, otherProps.ownerState, ownerState)
  });
}

// node_modules/@mui/base/utils/areArraysEqual.js
function areArraysEqual(array1, array2, itemComparer = (a8, b6) => a8 === b6) {
  return array1.length === array2.length && array1.every((value, index) => itemComparer(value, array2[index]));
}

// node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var _4 = 0;
function o12(o14, e13, n13, t9, f7, l14) {
  var s12, u8, a8 = {};
  for (u8 in e13)
    "ref" == u8 ? s12 = e13[u8] : a8[u8] = e13[u8];
  var i11 = { type: o14, props: a8, key: n13, ref: s12, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_4, __source: f7, __self: l14 };
  if ("function" == typeof o14 && (s12 = o14.defaultProps))
    for (u8 in s12)
      void 0 === a8[u8] && (a8[u8] = s12[u8]);
  return l11.vnode && l11.vnode(i11), i11;
}

// node_modules/@mui/base/utils/ClassNameConfigurator.js
var defaultContextValue = {
  disableDefaultClasses: false
};
var ClassNameConfiguratorContext = /* @__PURE__ */ G(defaultContextValue);
function useClassNamesOverride(generateUtilityClass2) {
  const {
    disableDefaultClasses
  } = q2(ClassNameConfiguratorContext);
  return (slot) => {
    if (disableDefaultClasses) {
      return "";
    }
    return generateUtilityClass2(slot);
  };
}

// node_modules/@mui/base/utils/extractEventHandlers.js
function extractEventHandlers(object, excludeKeys = []) {
  if (object === void 0) {
    return {};
  }
  const result = {};
  Object.keys(object).filter((prop) => prop.match(/^on[A-Z]/) && typeof object[prop] === "function" && !excludeKeys.includes(prop)).forEach((prop) => {
    result[prop] = object[prop];
  });
  return result;
}

// node_modules/@mui/base/utils/resolveComponentProps.js
function resolveComponentProps(componentProps, ownerState) {
  if (typeof componentProps === "function") {
    return componentProps(ownerState);
  }
  return componentProps;
}

// node_modules/@mui/base/utils/omitEventHandlers.js
function omitEventHandlers(object) {
  if (object === void 0) {
    return {};
  }
  const result = {};
  Object.keys(object).filter((prop) => !(prop.match(/^on[A-Z]/) && typeof object[prop] === "function")).forEach((prop) => {
    result[prop] = object[prop];
  });
  return result;
}

// node_modules/@mui/base/utils/mergeSlotProps.js
function mergeSlotProps(parameters) {
  const {
    getSlotProps,
    additionalProps,
    externalSlotProps,
    externalForwardedProps,
    className
  } = parameters;
  if (!getSlotProps) {
    const joinedClasses2 = clsx_m_default(externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className, className, additionalProps == null ? void 0 : additionalProps.className);
    const mergedStyle2 = _extends({}, additionalProps == null ? void 0 : additionalProps.style, externalForwardedProps == null ? void 0 : externalForwardedProps.style, externalSlotProps == null ? void 0 : externalSlotProps.style);
    const props2 = _extends({}, additionalProps, externalForwardedProps, externalSlotProps);
    if (joinedClasses2.length > 0) {
      props2.className = joinedClasses2;
    }
    if (Object.keys(mergedStyle2).length > 0) {
      props2.style = mergedStyle2;
    }
    return {
      props: props2,
      internalRef: void 0
    };
  }
  const eventHandlers = extractEventHandlers(_extends({}, externalForwardedProps, externalSlotProps));
  const componentsPropsWithoutEventHandlers = omitEventHandlers(externalSlotProps);
  const otherPropsWithoutEventHandlers = omitEventHandlers(externalForwardedProps);
  const internalSlotProps = getSlotProps(eventHandlers);
  const joinedClasses = clsx_m_default(internalSlotProps == null ? void 0 : internalSlotProps.className, additionalProps == null ? void 0 : additionalProps.className, className, externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className);
  const mergedStyle = _extends({}, internalSlotProps == null ? void 0 : internalSlotProps.style, additionalProps == null ? void 0 : additionalProps.style, externalForwardedProps == null ? void 0 : externalForwardedProps.style, externalSlotProps == null ? void 0 : externalSlotProps.style);
  const props = _extends({}, internalSlotProps, additionalProps, otherPropsWithoutEventHandlers, componentsPropsWithoutEventHandlers);
  if (joinedClasses.length > 0) {
    props.className = joinedClasses;
  }
  if (Object.keys(mergedStyle).length > 0) {
    props.style = mergedStyle;
  }
  return {
    props,
    internalRef: internalSlotProps.ref
  };
}

// node_modules/@mui/base/utils/useSlotProps.js
var _excluded = ["elementType", "externalSlotProps", "ownerState"];
function useSlotProps(parameters) {
  var _parameters$additiona;
  const {
    elementType,
    externalSlotProps,
    ownerState
  } = parameters, rest = _objectWithoutPropertiesLoose(parameters, _excluded);
  const resolvedComponentsProps = resolveComponentProps(externalSlotProps, ownerState);
  const {
    props: mergedProps,
    internalRef
  } = mergeSlotProps(_extends({}, rest, {
    externalSlotProps: resolvedComponentsProps
  }));
  const ref = useForkRef(internalRef, resolvedComponentsProps == null ? void 0 : resolvedComponentsProps.ref, (_parameters$additiona = parameters.additionalProps) == null ? void 0 : _parameters$additiona.ref);
  const props = appendOwnerState(elementType, _extends({}, mergedProps, {
    ref
  }), ownerState);
  return props;
}

// node_modules/@mui/base/useSlider/useSlider.js
var INTENTIONAL_DRAG_COUNT_THRESHOLD = 2;
function asc(a8, b6) {
  return a8 - b6;
}
function clamp(value, min, max) {
  if (value == null) {
    return min;
  }
  return Math.min(Math.max(min, value), max);
}
function findClosest(values, currentValue) {
  var _values$reduce;
  const {
    index: closestIndex
  } = (_values$reduce = values.reduce((acc, value, index) => {
    const distance = Math.abs(currentValue - value);
    if (acc === null || distance < acc.distance || distance === acc.distance) {
      return {
        distance,
        index
      };
    }
    return acc;
  }, null)) != null ? _values$reduce : {};
  return closestIndex;
}
function trackFinger(event, touchId) {
  if (touchId.current !== void 0 && event.changedTouches) {
    const touchEvent = event;
    for (let i11 = 0; i11 < touchEvent.changedTouches.length; i11 += 1) {
      const touch = touchEvent.changedTouches[i11];
      if (touch.identifier === touchId.current) {
        return {
          x: touch.clientX,
          y: touch.clientY
        };
      }
    }
    return false;
  }
  return {
    x: event.clientX,
    y: event.clientY
  };
}
function valueToPercent(value, min, max) {
  return (value - min) * 100 / (max - min);
}
function percentToValue(percent, min, max) {
  return (max - min) * percent + min;
}
function getDecimalPrecision(num) {
  if (Math.abs(num) < 1) {
    const parts = num.toExponential().split("e-");
    const matissaDecimalPart = parts[0].split(".")[1];
    return (matissaDecimalPart ? matissaDecimalPart.length : 0) + parseInt(parts[1], 10);
  }
  const decimalPart = num.toString().split(".")[1];
  return decimalPart ? decimalPart.length : 0;
}
function roundValueToStep(value, step, min) {
  const nearest = Math.round((value - min) / step) * step + min;
  return Number(nearest.toFixed(getDecimalPrecision(step)));
}
function setValueIndex({
  values,
  newValue,
  index
}) {
  const output = values.slice();
  output[index] = newValue;
  return output.sort(asc);
}
function focusThumb({
  sliderRef,
  activeIndex,
  setActive
}) {
  var _sliderRef$current, _doc$activeElement;
  const doc = ownerDocument(sliderRef.current);
  if (!((_sliderRef$current = sliderRef.current) != null && _sliderRef$current.contains(doc.activeElement)) || Number(doc == null ? void 0 : (_doc$activeElement = doc.activeElement) == null ? void 0 : _doc$activeElement.getAttribute("data-index")) !== activeIndex) {
    var _sliderRef$current2;
    (_sliderRef$current2 = sliderRef.current) == null ? void 0 : _sliderRef$current2.querySelector(`[type="range"][data-index="${activeIndex}"]`).focus();
  }
  if (setActive) {
    setActive(activeIndex);
  }
}
function areValuesEqual(newValue, oldValue) {
  if (typeof newValue === "number" && typeof oldValue === "number") {
    return newValue === oldValue;
  }
  if (typeof newValue === "object" && typeof oldValue === "object") {
    return areArraysEqual(newValue, oldValue);
  }
  return false;
}
var axisProps = {
  horizontal: {
    offset: (percent) => ({
      left: `${percent}%`
    }),
    leap: (percent) => ({
      width: `${percent}%`
    })
  },
  "horizontal-reverse": {
    offset: (percent) => ({
      right: `${percent}%`
    }),
    leap: (percent) => ({
      width: `${percent}%`
    })
  },
  vertical: {
    offset: (percent) => ({
      bottom: `${percent}%`
    }),
    leap: (percent) => ({
      height: `${percent}%`
    })
  }
};
var Identity = (x7) => x7;
var cachedSupportsTouchActionNone;
function doesSupportTouchActionNone() {
  if (cachedSupportsTouchActionNone === void 0) {
    if (typeof CSS !== "undefined" && typeof CSS.supports === "function") {
      cachedSupportsTouchActionNone = CSS.supports("touch-action", "none");
    } else {
      cachedSupportsTouchActionNone = true;
    }
  }
  return cachedSupportsTouchActionNone;
}
function useSlider(parameters) {
  const {
    "aria-labelledby": ariaLabelledby,
    defaultValue: defaultValue2,
    disabled = false,
    disableSwap = false,
    isRtl = false,
    marks: marksProp = false,
    max = 100,
    min = 0,
    name,
    onChange,
    onChangeCommitted,
    orientation = "horizontal",
    rootRef: ref,
    scale = Identity,
    step = 1,
    tabIndex,
    value: valueProp
  } = parameters;
  const touchId = _3();
  const [active, setActive] = h6(-1);
  const [open, setOpen] = h6(-1);
  const [dragging, setDragging] = h6(false);
  const moveCount = _3(0);
  const [valueDerived, setValueState] = useControlled({
    controlled: valueProp,
    default: defaultValue2 != null ? defaultValue2 : min,
    name: "Slider"
  });
  const handleChange = onChange && ((event, value, thumbIndex) => {
    const nativeEvent = event.nativeEvent || event;
    const clonedEvent = new nativeEvent.constructor(nativeEvent.type, nativeEvent);
    Object.defineProperty(clonedEvent, "target", {
      writable: true,
      value: {
        value,
        name
      }
    });
    onChange(clonedEvent, value, thumbIndex);
  });
  const range = Array.isArray(valueDerived);
  let values = range ? valueDerived.slice().sort(asc) : [valueDerived];
  values = values.map((value) => clamp(value, min, max));
  const marks = marksProp === true && step !== null ? [...Array(Math.floor((max - min) / step) + 1)].map((_5, index) => ({
    value: min + step * index
  })) : marksProp || [];
  const marksValues = marks.map((mark) => mark.value);
  const {
    isFocusVisibleRef,
    onBlur: handleBlurVisible,
    onFocus: handleFocusVisible,
    ref: focusVisibleRef
  } = useIsFocusVisible();
  const [focusedThumbIndex, setFocusedThumbIndex] = h6(-1);
  const sliderRef = _3();
  const handleFocusRef = useForkRef(focusVisibleRef, sliderRef);
  const handleRef = useForkRef(ref, handleFocusRef);
  const createHandleHiddenInputFocus = (otherHandlers) => (event) => {
    var _otherHandlers$onFocu;
    const index = Number(event.currentTarget.getAttribute("data-index"));
    handleFocusVisible(event);
    if (isFocusVisibleRef.current === true) {
      setFocusedThumbIndex(index);
    }
    setOpen(index);
    otherHandlers == null ? void 0 : (_otherHandlers$onFocu = otherHandlers.onFocus) == null ? void 0 : _otherHandlers$onFocu.call(otherHandlers, event);
  };
  const createHandleHiddenInputBlur = (otherHandlers) => (event) => {
    var _otherHandlers$onBlur;
    handleBlurVisible(event);
    if (isFocusVisibleRef.current === false) {
      setFocusedThumbIndex(-1);
    }
    setOpen(-1);
    otherHandlers == null ? void 0 : (_otherHandlers$onBlur = otherHandlers.onBlur) == null ? void 0 : _otherHandlers$onBlur.call(otherHandlers, event);
  };
  useEnhancedEffect_default(() => {
    if (disabled && sliderRef.current.contains(document.activeElement)) {
      var _document$activeEleme;
      (_document$activeEleme = document.activeElement) == null ? void 0 : _document$activeEleme.blur();
    }
  }, [disabled]);
  if (disabled && active !== -1) {
    setActive(-1);
  }
  if (disabled && focusedThumbIndex !== -1) {
    setFocusedThumbIndex(-1);
  }
  const createHandleHiddenInputChange = (otherHandlers) => (event) => {
    var _otherHandlers$onChan;
    (_otherHandlers$onChan = otherHandlers.onChange) == null ? void 0 : _otherHandlers$onChan.call(otherHandlers, event);
    const index = Number(event.currentTarget.getAttribute("data-index"));
    const value = values[index];
    const marksIndex = marksValues.indexOf(value);
    let newValue = event.target.valueAsNumber;
    if (marks && step == null) {
      newValue = newValue < value ? marksValues[marksIndex - 1] : marksValues[marksIndex + 1];
    }
    newValue = clamp(newValue, min, max);
    if (marks && step == null) {
      const currentMarkIndex = marksValues.indexOf(values[index]);
      newValue = newValue < values[index] ? marksValues[currentMarkIndex - 1] : marksValues[currentMarkIndex + 1];
    }
    if (range) {
      if (disableSwap) {
        newValue = clamp(newValue, values[index - 1] || -Infinity, values[index + 1] || Infinity);
      }
      const previousValue = newValue;
      newValue = setValueIndex({
        values,
        newValue,
        index
      });
      let activeIndex = index;
      if (!disableSwap) {
        activeIndex = newValue.indexOf(previousValue);
      }
      focusThumb({
        sliderRef,
        activeIndex
      });
    }
    setValueState(newValue);
    setFocusedThumbIndex(index);
    if (handleChange && !areValuesEqual(newValue, valueDerived)) {
      handleChange(event, newValue, index);
    }
    if (onChangeCommitted) {
      onChangeCommitted(event, newValue);
    }
  };
  const previousIndex = _3();
  let axis = orientation;
  if (isRtl && orientation === "horizontal") {
    axis += "-reverse";
  }
  const getFingerNewValue = ({
    finger,
    move = false
  }) => {
    const {
      current: slider
    } = sliderRef;
    const {
      width,
      height,
      bottom,
      left
    } = slider.getBoundingClientRect();
    let percent;
    if (axis.indexOf("vertical") === 0) {
      percent = (bottom - finger.y) / height;
    } else {
      percent = (finger.x - left) / width;
    }
    if (axis.indexOf("-reverse") !== -1) {
      percent = 1 - percent;
    }
    let newValue;
    newValue = percentToValue(percent, min, max);
    if (step) {
      newValue = roundValueToStep(newValue, step, min);
    } else {
      const closestIndex = findClosest(marksValues, newValue);
      newValue = marksValues[closestIndex];
    }
    newValue = clamp(newValue, min, max);
    let activeIndex = 0;
    if (range) {
      if (!move) {
        activeIndex = findClosest(values, newValue);
      } else {
        activeIndex = previousIndex.current;
      }
      if (disableSwap) {
        newValue = clamp(newValue, values[activeIndex - 1] || -Infinity, values[activeIndex + 1] || Infinity);
      }
      const previousValue = newValue;
      newValue = setValueIndex({
        values,
        newValue,
        index: activeIndex
      });
      if (!(disableSwap && move)) {
        activeIndex = newValue.indexOf(previousValue);
        previousIndex.current = activeIndex;
      }
    }
    return {
      newValue,
      activeIndex
    };
  };
  const handleTouchMove = useEventCallback((nativeEvent) => {
    const finger = trackFinger(nativeEvent, touchId);
    if (!finger) {
      return;
    }
    moveCount.current += 1;
    if (nativeEvent.type === "mousemove" && nativeEvent.buttons === 0) {
      handleTouchEnd(nativeEvent);
      return;
    }
    const {
      newValue,
      activeIndex
    } = getFingerNewValue({
      finger,
      move: true
    });
    focusThumb({
      sliderRef,
      activeIndex,
      setActive
    });
    setValueState(newValue);
    if (!dragging && moveCount.current > INTENTIONAL_DRAG_COUNT_THRESHOLD) {
      setDragging(true);
    }
    if (handleChange && !areValuesEqual(newValue, valueDerived)) {
      handleChange(nativeEvent, newValue, activeIndex);
    }
  });
  const handleTouchEnd = useEventCallback((nativeEvent) => {
    const finger = trackFinger(nativeEvent, touchId);
    setDragging(false);
    if (!finger) {
      return;
    }
    const {
      newValue
    } = getFingerNewValue({
      finger,
      move: true
    });
    setActive(-1);
    if (nativeEvent.type === "touchend") {
      setOpen(-1);
    }
    if (onChangeCommitted) {
      onChangeCommitted(nativeEvent, newValue);
    }
    touchId.current = void 0;
    stopListening();
  });
  const handleTouchStart = useEventCallback((nativeEvent) => {
    if (disabled) {
      return;
    }
    if (!doesSupportTouchActionNone()) {
      nativeEvent.preventDefault();
    }
    const touch = nativeEvent.changedTouches[0];
    if (touch != null) {
      touchId.current = touch.identifier;
    }
    const finger = trackFinger(nativeEvent, touchId);
    if (finger !== false) {
      const {
        newValue,
        activeIndex
      } = getFingerNewValue({
        finger
      });
      focusThumb({
        sliderRef,
        activeIndex,
        setActive
      });
      setValueState(newValue);
      if (handleChange && !areValuesEqual(newValue, valueDerived)) {
        handleChange(nativeEvent, newValue, activeIndex);
      }
    }
    moveCount.current = 0;
    const doc = ownerDocument(sliderRef.current);
    doc.addEventListener("touchmove", handleTouchMove);
    doc.addEventListener("touchend", handleTouchEnd);
  });
  const stopListening = T5(() => {
    const doc = ownerDocument(sliderRef.current);
    doc.removeEventListener("mousemove", handleTouchMove);
    doc.removeEventListener("mouseup", handleTouchEnd);
    doc.removeEventListener("touchmove", handleTouchMove);
    doc.removeEventListener("touchend", handleTouchEnd);
  }, [handleTouchEnd, handleTouchMove]);
  p5(() => {
    const {
      current: slider
    } = sliderRef;
    slider.addEventListener("touchstart", handleTouchStart, {
      passive: doesSupportTouchActionNone()
    });
    return () => {
      slider.removeEventListener("touchstart", handleTouchStart, {
        passive: doesSupportTouchActionNone()
      });
      stopListening();
    };
  }, [stopListening, handleTouchStart]);
  p5(() => {
    if (disabled) {
      stopListening();
    }
  }, [disabled, stopListening]);
  const createHandleMouseDown = (otherHandlers) => (event) => {
    var _otherHandlers$onMous;
    (_otherHandlers$onMous = otherHandlers.onMouseDown) == null ? void 0 : _otherHandlers$onMous.call(otherHandlers, event);
    if (disabled) {
      return;
    }
    if (event.defaultPrevented) {
      return;
    }
    if (event.button !== 0) {
      return;
    }
    event.preventDefault();
    const finger = trackFinger(event, touchId);
    if (finger !== false) {
      const {
        newValue,
        activeIndex
      } = getFingerNewValue({
        finger
      });
      focusThumb({
        sliderRef,
        activeIndex,
        setActive
      });
      setValueState(newValue);
      if (handleChange && !areValuesEqual(newValue, valueDerived)) {
        handleChange(event, newValue, activeIndex);
      }
    }
    moveCount.current = 0;
    const doc = ownerDocument(sliderRef.current);
    doc.addEventListener("mousemove", handleTouchMove);
    doc.addEventListener("mouseup", handleTouchEnd);
  };
  const trackOffset = valueToPercent(range ? values[0] : min, min, max);
  const trackLeap = valueToPercent(values[values.length - 1], min, max) - trackOffset;
  const getRootProps = (otherHandlers = {}) => {
    const ownEventHandlers = {
      onMouseDown: createHandleMouseDown(otherHandlers || {})
    };
    const mergedEventHandlers = _extends({}, otherHandlers, ownEventHandlers);
    return _extends({
      ref: handleRef
    }, mergedEventHandlers);
  };
  const createHandleMouseOver = (otherHandlers) => (event) => {
    var _otherHandlers$onMous2;
    (_otherHandlers$onMous2 = otherHandlers.onMouseOver) == null ? void 0 : _otherHandlers$onMous2.call(otherHandlers, event);
    const index = Number(event.currentTarget.getAttribute("data-index"));
    setOpen(index);
  };
  const createHandleMouseLeave = (otherHandlers) => (event) => {
    var _otherHandlers$onMous3;
    (_otherHandlers$onMous3 = otherHandlers.onMouseLeave) == null ? void 0 : _otherHandlers$onMous3.call(otherHandlers, event);
    setOpen(-1);
  };
  const getThumbProps = (otherHandlers = {}) => {
    const ownEventHandlers = {
      onMouseOver: createHandleMouseOver(otherHandlers || {}),
      onMouseLeave: createHandleMouseLeave(otherHandlers || {})
    };
    return _extends({}, otherHandlers, ownEventHandlers);
  };
  const getHiddenInputProps = (otherHandlers = {}) => {
    var _parameters$step;
    const ownEventHandlers = {
      onChange: createHandleHiddenInputChange(otherHandlers || {}),
      onFocus: createHandleHiddenInputFocus(otherHandlers || {}),
      onBlur: createHandleHiddenInputBlur(otherHandlers || {})
    };
    const mergedEventHandlers = _extends({}, otherHandlers, ownEventHandlers);
    return _extends({
      tabIndex,
      "aria-labelledby": ariaLabelledby,
      "aria-orientation": orientation,
      "aria-valuemax": scale(max),
      "aria-valuemin": scale(min),
      name,
      type: "range",
      min: parameters.min,
      max: parameters.max,
      step: (_parameters$step = parameters.step) != null ? _parameters$step : void 0,
      disabled
    }, mergedEventHandlers, {
      style: _extends({}, visuallyHidden_default, {
        direction: isRtl ? "rtl" : "ltr",
        // So that VoiceOver's focus indicator matches the thumb's dimensions
        width: "100%",
        height: "100%"
      })
    });
  };
  return {
    active,
    axis,
    axisProps,
    dragging,
    focusedThumbIndex,
    getHiddenInputProps,
    getRootProps,
    getThumbProps,
    marks,
    open,
    range,
    rootRef: handleRef,
    trackLeap,
    trackOffset,
    values
  };
}

// node_modules/@mui/base/Slider/Slider.js
var _excluded2 = ["aria-label", "aria-valuetext", "aria-labelledby", "className", "disableSwap", "disabled", "getAriaLabel", "getAriaValueText", "marks", "max", "min", "name", "onChange", "onChangeCommitted", "orientation", "scale", "step", "tabIndex", "track", "value", "valueLabelFormat", "isRtl", "defaultValue", "slotProps", "slots"];
function Identity2(x7) {
  return x7;
}
var useUtilityClasses = (ownerState) => {
  const {
    disabled,
    dragging,
    marked,
    orientation,
    track
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", dragging && "dragging", marked && "marked", orientation === "vertical" && "vertical", track === "inverted" && "trackInverted", track === false && "trackFalse"],
    rail: ["rail"],
    track: ["track"],
    mark: ["mark"],
    markActive: ["markActive"],
    markLabel: ["markLabel"],
    markLabelActive: ["markLabelActive"],
    valueLabel: ["valueLabel"],
    thumb: ["thumb", disabled && "disabled"],
    active: ["active"],
    disabled: ["disabled"],
    focusVisible: ["focusVisible"]
  };
  return composeClasses(slots, useClassNamesOverride(getSliderUtilityClass));
};
var Slider = /* @__PURE__ */ k6(function Slider2(props, forwardedRef) {
  var _slots$root, _slots$rail, _slots$track, _slots$thumb, _slots$mark, _slots$markLabel;
  const {
    "aria-label": ariaLabel,
    "aria-valuetext": ariaValuetext,
    "aria-labelledby": ariaLabelledby,
    className,
    disableSwap = false,
    disabled = false,
    getAriaLabel,
    getAriaValueText,
    marks: marksProp = false,
    max = 100,
    min = 0,
    orientation = "horizontal",
    scale = Identity2,
    step = 1,
    track = "normal",
    valueLabelFormat = Identity2,
    isRtl = false,
    defaultValue: defaultValue2,
    slotProps = {},
    slots = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded2);
  const partialOwnerState = _extends({}, props, {
    marks: marksProp,
    disabled,
    isRtl,
    defaultValue: defaultValue2,
    max,
    min,
    orientation,
    scale,
    step,
    track,
    valueLabelFormat
  });
  const {
    axisProps: axisProps2,
    getRootProps,
    getHiddenInputProps,
    getThumbProps,
    active,
    axis,
    range,
    focusedThumbIndex,
    dragging,
    marks,
    values,
    trackOffset,
    trackLeap
  } = useSlider(_extends({}, partialOwnerState, {
    rootRef: forwardedRef
  }));
  const ownerState = _extends({}, partialOwnerState, {
    marked: marks.length > 0 && marks.some((mark) => mark.label),
    dragging,
    focusedThumbIndex
  });
  const classes = useUtilityClasses(ownerState);
  const Root = (_slots$root = slots.root) != null ? _slots$root : "span";
  const rootProps = useSlotProps({
    elementType: Root,
    getSlotProps: getRootProps,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    ownerState,
    className: [classes.root, className]
  });
  const Rail = (_slots$rail = slots.rail) != null ? _slots$rail : "span";
  const railProps = useSlotProps({
    elementType: Rail,
    externalSlotProps: slotProps.rail,
    ownerState,
    className: classes.rail
  });
  const Track = (_slots$track = slots.track) != null ? _slots$track : "span";
  const trackProps = useSlotProps({
    elementType: Track,
    externalSlotProps: slotProps.track,
    additionalProps: {
      style: _extends({}, axisProps2[axis].offset(trackOffset), axisProps2[axis].leap(trackLeap))
    },
    ownerState,
    className: classes.track
  });
  const Thumb = (_slots$thumb = slots.thumb) != null ? _slots$thumb : "span";
  const thumbProps = useSlotProps({
    elementType: Thumb,
    getSlotProps: getThumbProps,
    externalSlotProps: slotProps.thumb,
    ownerState
  });
  const ValueLabel = slots.valueLabel;
  const valueLabelProps = useSlotProps({
    elementType: ValueLabel,
    externalSlotProps: slotProps.valueLabel,
    ownerState
  });
  const Mark = (_slots$mark = slots.mark) != null ? _slots$mark : "span";
  const markProps = useSlotProps({
    elementType: Mark,
    externalSlotProps: slotProps.mark,
    ownerState,
    className: classes.mark
  });
  const MarkLabel = (_slots$markLabel = slots.markLabel) != null ? _slots$markLabel : "span";
  const markLabelProps = useSlotProps({
    elementType: MarkLabel,
    externalSlotProps: slotProps.markLabel,
    ownerState
  });
  const Input = slots.input || "input";
  const inputProps = useSlotProps({
    elementType: Input,
    getSlotProps: getHiddenInputProps,
    externalSlotProps: slotProps.input,
    ownerState
  });
  return /* @__PURE__ */ o12(Root, _extends({}, rootProps, {
    children: [/* @__PURE__ */ o12(Rail, _extends({}, railProps)), /* @__PURE__ */ o12(Track, _extends({}, trackProps)), marks.filter((mark) => mark.value >= min && mark.value <= max).map((mark, index) => {
      const percent = valueToPercent(mark.value, min, max);
      const style = axisProps2[axis].offset(percent);
      let markActive;
      if (track === false) {
        markActive = values.indexOf(mark.value) !== -1;
      } else {
        markActive = track === "normal" && (range ? mark.value >= values[0] && mark.value <= values[values.length - 1] : mark.value <= values[0]) || track === "inverted" && (range ? mark.value <= values[0] || mark.value >= values[values.length - 1] : mark.value >= values[0]);
      }
      return /* @__PURE__ */ o12(k4, {
        children: [/* @__PURE__ */ o12(Mark, _extends({
          "data-index": index
        }, markProps, !isHostComponent(Mark) && {
          markActive
        }, {
          style: _extends({}, style, markProps.style),
          className: clsx_m_default(markProps.className, markActive && classes.markActive)
        })), mark.label != null ? /* @__PURE__ */ o12(MarkLabel, _extends({
          "aria-hidden": true,
          "data-index": index
        }, markLabelProps, !isHostComponent(MarkLabel) && {
          markLabelActive: markActive
        }, {
          style: _extends({}, style, markLabelProps.style),
          className: clsx_m_default(classes.markLabel, markLabelProps.className, markActive && classes.markLabelActive),
          children: mark.label
        })) : null]
      }, index);
    }), values.map((value, index) => {
      const percent = valueToPercent(value, min, max);
      const style = axisProps2[axis].offset(percent);
      return /* @__PURE__ */ o12(Thumb, _extends({
        "data-index": index
      }, thumbProps, {
        className: clsx_m_default(classes.thumb, thumbProps.className, active === index && classes.active, focusedThumbIndex === index && classes.focusVisible),
        style: _extends({}, style, {
          pointerEvents: disableSwap && active !== index ? "none" : void 0
        }, thumbProps.style),
        children: [/* @__PURE__ */ o12(Input, _extends({
          "data-index": index,
          "aria-label": getAriaLabel ? getAriaLabel(index) : ariaLabel,
          "aria-valuenow": scale(value),
          "aria-labelledby": ariaLabelledby,
          "aria-valuetext": getAriaValueText ? getAriaValueText(scale(value), index) : ariaValuetext,
          value: values[index]
        }, inputProps)), ValueLabel ? /* @__PURE__ */ o12(ValueLabel, _extends({}, !isHostComponent(ValueLabel) && {
          valueLabelFormat,
          index,
          disabled
        }, valueLabelProps, {
          children: typeof valueLabelFormat === "function" ? valueLabelFormat(scale(value), index) : valueLabelFormat
        })) : null]
      }), index);
    })]
  }));
});
true ? Slider.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The label of the slider.
   */
  "aria-label": chainPropTypes(import_prop_types.default.string, (props) => {
    const range = Array.isArray(props.value || props.defaultValue);
    if (range && props["aria-label"] != null) {
      return new Error("MUI: You need to use the `getAriaLabel` prop instead of `aria-label` when using a range slider.");
    }
    return null;
  }),
  /**
   * The id of the element containing a label for the slider.
   */
  "aria-labelledby": import_prop_types.default.string,
  /**
   * A string value that provides a user-friendly name for the current value of the slider.
   */
  "aria-valuetext": chainPropTypes(import_prop_types.default.string, (props) => {
    const range = Array.isArray(props.value || props.defaultValue);
    if (range && props["aria-valuetext"] != null) {
      return new Error("MUI: You need to use the `getAriaValueText` prop instead of `aria-valuetext` when using a range slider.");
    }
    return null;
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.number), import_prop_types.default.number]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types.default.bool,
  /**
   * If `true`, the active thumb doesn't swap when moving pointer over a thumb while dragging another thumb.
   * @default false
   */
  disableSwap: import_prop_types.default.bool,
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the thumb labels of the slider.
   * This is important for screen reader users.
   * @param {number} index The thumb label's index to format.
   * @returns {string}
   */
  getAriaLabel: import_prop_types.default.func,
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current value of the slider.
   * This is important for screen reader users.
   * @param {number} value The thumb label's value to format.
   * @param {number} index The thumb label's index to format.
   * @returns {string}
   */
  getAriaValueText: import_prop_types.default.func,
  /**
   * If `true` the Slider will be rendered right-to-left (with the lowest value on the right-hand side).
   * @default false
   */
  isRtl: import_prop_types.default.bool,
  /**
   * Marks indicate predetermined values to which the user can move the slider.
   * If `true` the marks are spaced according the value of the `step` prop.
   * If an array, it should contain objects with `value` and an optional `label` keys.
   * @default false
   */
  marks: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.shape({
    label: import_prop_types.default.node,
    value: import_prop_types.default.number.isRequired
  })), import_prop_types.default.bool]),
  /**
   * The maximum allowed value of the slider.
   * Should not be equal to min.
   * @default 100
   */
  max: import_prop_types.default.number,
  /**
   * The minimum allowed value of the slider.
   * Should not be equal to max.
   * @default 0
   */
  min: import_prop_types.default.number,
  /**
   * Name attribute of the hidden `input` element.
   */
  name: import_prop_types.default.string,
  /**
   * Callback function that is fired when the slider's value changed.
   *
   * @param {Event} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event not a change event.
   * @param {number | number[]} value The new value.
   * @param {number} activeThumb Index of the currently moved thumb.
   */
  onChange: import_prop_types.default.func,
  /**
   * Callback function that is fired when the `mouseup` is triggered.
   *
   * @param {React.SyntheticEvent | Event} event The event source of the callback. **Warning**: This is a generic event not a change event.
   * @param {number | number[]} value The new value.
   */
  onChangeCommitted: import_prop_types.default.func,
  /**
   * The component orientation.
   * @default 'horizontal'
   */
  orientation: import_prop_types.default.oneOf(["horizontal", "vertical"]),
  /**
   * A transformation function, to change the scale of the slider.
   * @param {any} x
   * @returns {any}
   * @default function Identity(x) {
   *   return x;
   * }
   */
  scale: import_prop_types.default.func,
  /**
   * The props used for each slot inside the Slider.
   * @default {}
   */
  slotProps: import_prop_types.default.shape({
    input: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object]),
    mark: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object]),
    markLabel: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object]),
    rail: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object]),
    root: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object]),
    thumb: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object]),
    track: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object]),
    valueLabel: import_prop_types.default.oneOfType([import_prop_types.default.any, import_prop_types.default.func])
  }),
  /**
   * The components used for each slot inside the Slider.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types.default.shape({
    input: import_prop_types.default.elementType,
    mark: import_prop_types.default.elementType,
    markLabel: import_prop_types.default.elementType,
    rail: import_prop_types.default.elementType,
    root: import_prop_types.default.elementType,
    thumb: import_prop_types.default.elementType,
    track: import_prop_types.default.elementType,
    valueLabel: import_prop_types.default.elementType
  }),
  /**
   * The granularity with which the slider can step through values. (A "discrete" slider.)
   * The `min` prop serves as the origin for the valid values.
   * We recommend (max - min) to be evenly divisible by the step.
   *
   * When step is `null`, the thumb can only be slid onto marks provided with the `marks` prop.
   * @default 1
   */
  step: import_prop_types.default.number,
  /**
   * Tab index attribute of the hidden `input` element.
   */
  tabIndex: import_prop_types.default.number,
  /**
   * The track presentation:
   *
   * - `normal` the track will render a bar representing the slider value.
   * - `inverted` the track will render a bar representing the remaining slider value.
   * - `false` the track will render without a bar.
   * @default 'normal'
   */
  track: import_prop_types.default.oneOf(["inverted", "normal", false]),
  /**
   * The value of the slider.
   * For ranged sliders, provide an array with two values.
   */
  value: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.number), import_prop_types.default.number]),
  /**
   * The format function the value label's value.
   *
   * When a function is provided, it should have the following signature:
   *
   * - {number} value The value label's value to format
   * - {number} index The value label's index to format
   * @param {any} x
   * @returns {any}
   * @default function Identity(x) {
   *   return x;
   * }
   */
  valueLabelFormat: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.string])
} : void 0;
var Slider_default = Slider;

// node_modules/preact/compat/client.mjs
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

// src/forge/input-slider.tsx
var css = (
  /*css*/
  `
:host {
  --rail-thickness: 2px;
  --thumb-size: 16px;
  --mark-size: 5px;
  --popup-size: 24px;
}

.label {
  font-size: var(--font-size-m);
  margin-bottom: var(--size-xxs);
}

.slider {
  margin-bottom: var(--size-xs);
}

.slider.has-marks {
  margin-bottom: var(--size-s);
}

.${sliderClasses_default.root} {
  color: var(--brand);
  height: var(--rail-thickness);
  width: 100%;
  padding: 16px 0;
  display: block;
  position: relative;
  cursor: pointer;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;
}

.${sliderClasses_default.root}:hover {
  opacity: 1;
}

.${sliderClasses_default.disabled} {
  pointer-events: none;
  cursor: default;
  color: #afb8c1;
  opacity: 0.5;
}

.${sliderClasses_default.rail} {
  display: block;
  position: absolute;
  width: 100%;
  height: var(--rail-thickness);
  border-radius: 2px;
  background-color: hsl(var(--brand-hue) 90% 85%);
}

.${sliderClasses_default.track} {
  display: block;
  position: absolute;
  height: var(--rail-thickness);
  border-radius: 2px;
  background-color: currentColor;
}

.${sliderClasses_default.thumb} {
  position: absolute;
  width: var(--thumb-size);
  height: var(--thumb-size);
  margin-left: calc(0.5 * (var(--rail-thickness) - var(--thumb-size)));
  margin-top: calc(0.5 * (var(--rail-thickness) - var(--thumb-size)));
  box-sizing: border-box;
  border-radius: 50%;
  outline: 0;
  border: var(--rail-thickness) solid currentColor;
  background-color: var(--thumb-color, var(--surface-1));
  transition: box-shadow 0.1s linear;
}

.${sliderClasses_default.thumb}:hover, .${sliderClasses_default.thumb}.${sliderClasses_default.focusVisible} {
  box-shadow: 0 0 0 0.35rem hsl(var(--brand-hsl) / 15%);
}

/* Expand the halo while dragging. */
.${sliderClasses_default.thumb}.${sliderClasses_default.active} {
  box-shadow: 0 0 0 0.5rem hsla(var(--brand-hsl) / 15%);
}

.value-popup {
  font-family: var(--font-sans);
  font-size: 11px;
  background: unset;
  background-color: var(--brand);
  width: var(--popup-size);
  height: var(--popup-size);
  padding: 0px;
  visibility: hidden;
  color: #fff;
  border-radius: 50% 50% 50% 0;
  position: absolute;
  transform: translate(-25%, -140%) rotate(-45deg) scale(0);
  transition: transform var(--speed-fast) ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.${sliderClasses_default.thumb}:hover .value-popup,
.${sliderClasses_default.thumb}.${sliderClasses_default.active} .value-popup,
.${sliderClasses_default.thumb}.${sliderClasses_default.focusVisible} .value-popup {
  visibility: visible;
  transform: translate(-25%, -140%) rotate(-45deg) scale(1);
}

.${sliderClasses_default.thumb}:hover .value-text,
.${sliderClasses_default.thumb}.${sliderClasses_default.active} .value-text,
.${sliderClasses_default.thumb}.${sliderClasses_default.focusVisible} .value-text {
  transform: rotate(45deg);
  text-align: center;
}

.${sliderClasses_default.mark} {
  position: absolute;
  width: var(--mark-size);
  height: var(--mark-size);
  border-radius: 99%;
  background-color: hsl(var(--brand-hue) 90% 85%);
  transform: translateX(-50%) translateY(calc(0.5*(var(--rail-thickness)) - 50%));
}

.${sliderClasses_default.mark}.${sliderClasses_default.markActive} {
  background-color: var(--brand);
  opacity: 1;
}

.${sliderClasses_default.markLabel} {
  font-family: var(--font-sans);
  font-weight: 600;
  font-size: 12px;
  position: absolute;
  top: 20px;
  transform: translateX(-50%);
  margin-top: 8px;
}
`
);
var ForgeInputSlider = class extends HTMLElement {
  constructor() {
    super();
    this.value = 0;
    this.min = 0;
    this.max = 0;
    this.step = null;
    this.currentValue = 0;
    this.debounce = 200;
    this.marks = false;
    this.onChangeCallback = (x7) => {
    };
    this.onValueChange = makeValueChangeEmitter(this, this.id);
    if (this.hasAttribute("value"))
      this.value = JSON.parse(this.getAttribute("value") || "");
    if (this.hasAttribute("min"))
      this.min = Number(this.getAttribute("min"));
    if (this.hasAttribute("max"))
      this.max = Number(this.getAttribute("max"));
    if (this.hasAttribute("debounce"))
      this.debounce = Number(this.getAttribute("debounce"));
    if (this.hasAttribute("step"))
      this.step = Number(this.getAttribute("step"));
    if (this.hasAttribute("marks")) {
      const marks = JSON.parse(this.getAttribute("marks") || "null");
      if (Array.isArray(marks)) {
        this.marks = marks.map((value) => ({
          label: String(value),
          value
        }));
      } else if (isPlainObject(marks)) {
        this.marks = Object.entries(marks).map(
          ([label, value]) => ({
            label,
            value
          })
        );
      } else {
        this.marks = marks;
      }
    }
    this.currentValue = this.value;
  }
  getValue() {
    return this.currentValue;
  }
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    const root = createRoot(shadowRoot);
    const notifyChangeDebounced = functionDebounce(() => {
      this.notifyChange();
    }, this.debounce);
    root.render(
      /* @__PURE__ */ Cn.createElement(Cn.Fragment, null, /* @__PURE__ */ Cn.createElement("style", null, css), /* @__PURE__ */ Cn.createElement("div", { className: "label" }, /* @__PURE__ */ Cn.createElement("slot", { name: "label" })), /* @__PURE__ */ Cn.createElement(
        "div",
        {
          className: `slider ${this.marks ? "has-marks" : ""}`,
          style: { width: "100%" }
        },
        /* @__PURE__ */ Cn.createElement(
          Slider_default,
          {
            defaultValue: this.value,
            min: this.min,
            max: this.max,
            ...this.step !== null ? { step: this.step, marks: this.marks } : {},
            ...this.marks ? { marks: this.marks } : {},
            onChange: (e13, value) => {
              this.currentValue = value;
              notifyChangeDebounced();
            },
            slots: { valueLabel: SliderValueLabel }
          }
        )
      ))
    );
  }
  notifyChange() {
    this.onChangeCallback(true);
    this.onValueChange({ type: "number", value: this.getValue() });
  }
};
function SliderValueLabel({ children }) {
  return /* @__PURE__ */ Cn.createElement("span", { className: "value-popup" }, /* @__PURE__ */ Cn.createElement("div", { className: "value-text" }, children));
}
customElements.define("forge-input-slider", ForgeInputSlider);
makeInputBinding("forge-input-slider");

// node_modules/@shoelace-style/shoelace/dist/components/switch/switch.styles.js
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

// node_modules/@shoelace-style/shoelace/dist/components/switch/switch.js
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
    return x`
      <label
        part="base"
        class=${o6({
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
          value=${l7(this.value)}
          .checked=${l8(this.checked)}
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
__decorateClass2([
  i4('input[type="checkbox"]')
], SlSwitch.prototype, "input", 2);
__decorateClass2([
  t3()
], SlSwitch.prototype, "hasFocus", 2);
__decorateClass2([
  n5()
], SlSwitch.prototype, "title", 2);
__decorateClass2([
  n5()
], SlSwitch.prototype, "name", 2);
__decorateClass2([
  n5()
], SlSwitch.prototype, "value", 2);
__decorateClass2([
  n5({ reflect: true })
], SlSwitch.prototype, "size", 2);
__decorateClass2([
  n5({ type: Boolean, reflect: true })
], SlSwitch.prototype, "disabled", 2);
__decorateClass2([
  n5({ type: Boolean, reflect: true })
], SlSwitch.prototype, "checked", 2);
__decorateClass2([
  defaultValue("checked")
], SlSwitch.prototype, "defaultChecked", 2);
__decorateClass2([
  n5({ reflect: true })
], SlSwitch.prototype, "form", 2);
__decorateClass2([
  n5({ type: Boolean, reflect: true })
], SlSwitch.prototype, "required", 2);
__decorateClass2([
  watch("checked", { waitUntilFirstUpdate: true })
], SlSwitch.prototype, "handleCheckedChange", 1);
__decorateClass2([
  watch("disabled", { waitUntilFirstUpdate: true })
], SlSwitch.prototype, "handleDisabledChange", 1);
SlSwitch = __decorateClass2([
  e4("sl-switch")
], SlSwitch);

// src/forge/input-switch.ts
var ForgeInputSwitch = class extends SlSwitch {
  constructor() {
    super(...arguments);
    this.inline = false;
    this.onChangeCallback = (x7) => {
    };
    this.onValueChange = makeValueChangeEmitter(this, this.id);
  }
  static {
    // Make slider the same size as the "slot".
    this.styles = [
      SlSwitch.styles,
      i`
      :host([size="small"]) {
        --thumb-size: calc(var(--sl-toggle-size-small) * 0.85);
        --width: calc(var(--height) * 1.65);
      }

      :host([size="medium"]) {
        --thumb-size: calc(var(--sl-toggle-size-medium) * 0.85);
        --width: calc(var(--height) * 1.65);
      }

      :host([size="large"]) {
        --thumb-size: calc(var(--sl-toggle-size-large) * 0.85);
        --width: calc(var(--height) * 1.65);
      }
    `
    ];
  }
  connectedCallback() {
    super.connectedCallback();
    if (this.value !== void 0) {
      this.checked = true;
    }
    if (!this.inline) {
      this.style.display = "block";
    }
  }
  getValue() {
    return this.checked;
  }
  updated(changedProperties) {
    if (changedProperties.has("checked")) {
      this.onChangeCallback(true);
      this.onValueChange({ type: "boolean", value: this.checked });
    }
  }
};
customElements.define("forge-input-switch", ForgeInputSwitch);
makeInputBinding("forge-input-switch");

// src/forge/input-text.ts
var ForgeInputText = class extends SlInput {
  constructor() {
    super();
    this.onChangeCallback = (x7) => {
    };
    this.waitForEnter = false;
    this.debounce = 200;
    this.onValueChange = makeValueChangeEmitter(this, this.id);
    if (this.hasAttribute("password")) {
      this.type = "password";
      this.passwordToggle = true;
    }
  }
  static {
    this.styles = [
      SlInput.styles,
      i`
      .form-control--has-label.form-control--medium .form-control__label {
        margin-bottom: var(--size-xs);
        font-size: var(--font-size-m);
      }
    `
    ];
  }
  connectedCallback() {
    super.connectedCallback();
    const notifyChangeDebounced = functionDebounce(() => {
      this.notifyChange();
    }, this.debounce);
    this.addEventListener("input", () => {
      if (this.waitForEnter)
        return;
      notifyChangeDebounced();
    });
    this.addEventListener("keydown", (e13) => {
      if (!this.waitForEnter)
        return;
      if (e13.code === "Enter") {
        this.notifyChange();
      }
    });
    this.addEventListener("blur", (e13) => this.notifyChange());
  }
  notifyChange() {
    this.onChangeCallback(true);
    this.onValueChange({ type: "string", value: this.value });
  }
};
__decorateClass([
  n5({ type: Boolean, attribute: "wait-for-enter" })
], ForgeInputText.prototype, "waitForEnter", 2);
__decorateClass([
  n5({ type: Number })
], ForgeInputText.prototype, "debounce", 2);
customElements.define("forge-input-text", ForgeInputText);
makeInputBinding("forge-input-text");

// node_modules/@shoelace-style/shoelace/dist/components/textarea/textarea.styles.js
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

// node_modules/@shoelace-style/shoelace/dist/components/textarea/textarea.js
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
    return x`
      <div
        part="form-control"
        class=${o6({
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
            class=${o6({
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
              name=${l7(this.name)}
              .value=${l8(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${l7(this.placeholder)}
              rows=${l7(this.rows)}
              minlength=${l7(this.minlength)}
              maxlength=${l7(this.maxlength)}
              autocapitalize=${l7(this.autocapitalize)}
              autocorrect=${l7(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${l7(this.spellcheck)}
              enterkeyhint=${l7(this.enterkeyhint)}
              inputmode=${l7(this.inputmode)}
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
__decorateClass2([
  i4(".textarea__control")
], SlTextarea.prototype, "input", 2);
__decorateClass2([
  t3()
], SlTextarea.prototype, "hasFocus", 2);
__decorateClass2([
  n5()
], SlTextarea.prototype, "title", 2);
__decorateClass2([
  n5()
], SlTextarea.prototype, "name", 2);
__decorateClass2([
  n5()
], SlTextarea.prototype, "value", 2);
__decorateClass2([
  n5({ reflect: true })
], SlTextarea.prototype, "size", 2);
__decorateClass2([
  n5({ type: Boolean, reflect: true })
], SlTextarea.prototype, "filled", 2);
__decorateClass2([
  n5()
], SlTextarea.prototype, "label", 2);
__decorateClass2([
  n5({ attribute: "help-text" })
], SlTextarea.prototype, "helpText", 2);
__decorateClass2([
  n5()
], SlTextarea.prototype, "placeholder", 2);
__decorateClass2([
  n5({ type: Number })
], SlTextarea.prototype, "rows", 2);
__decorateClass2([
  n5()
], SlTextarea.prototype, "resize", 2);
__decorateClass2([
  n5({ type: Boolean, reflect: true })
], SlTextarea.prototype, "disabled", 2);
__decorateClass2([
  n5({ type: Boolean, reflect: true })
], SlTextarea.prototype, "readonly", 2);
__decorateClass2([
  n5({ reflect: true })
], SlTextarea.prototype, "form", 2);
__decorateClass2([
  n5({ type: Boolean, reflect: true })
], SlTextarea.prototype, "required", 2);
__decorateClass2([
  n5({ type: Number })
], SlTextarea.prototype, "minlength", 2);
__decorateClass2([
  n5({ type: Number })
], SlTextarea.prototype, "maxlength", 2);
__decorateClass2([
  n5()
], SlTextarea.prototype, "autocapitalize", 2);
__decorateClass2([
  n5()
], SlTextarea.prototype, "autocorrect", 2);
__decorateClass2([
  n5()
], SlTextarea.prototype, "autocomplete", 2);
__decorateClass2([
  n5({ type: Boolean })
], SlTextarea.prototype, "autofocus", 2);
__decorateClass2([
  n5()
], SlTextarea.prototype, "enterkeyhint", 2);
__decorateClass2([
  n5({
    type: Boolean,
    converter: {
      // Allow "true|false" attribute values but keep the property boolean
      fromAttribute: (value) => !value || value === "false" ? false : true,
      toAttribute: (value) => value ? "true" : "false"
    }
  })
], SlTextarea.prototype, "spellcheck", 2);
__decorateClass2([
  n5()
], SlTextarea.prototype, "inputmode", 2);
__decorateClass2([
  defaultValue()
], SlTextarea.prototype, "defaultValue", 2);
__decorateClass2([
  watch("disabled", { waitUntilFirstUpdate: true })
], SlTextarea.prototype, "handleDisabledChange", 1);
__decorateClass2([
  watch("rows", { waitUntilFirstUpdate: true })
], SlTextarea.prototype, "handleRowsChange", 1);
__decorateClass2([
  watch("value", { waitUntilFirstUpdate: true })
], SlTextarea.prototype, "handleValueChange", 1);
SlTextarea = __decorateClass2([
  e4("sl-textarea")
], SlTextarea);

// src/forge/input-text-area.ts
var ForgeInputTextArea = class extends SlTextarea {
  constructor() {
    super(...arguments);
    this.onChangeCallback = (x7) => {
    };
    this.waitForEnter = false;
    this.debounce = 200;
    this.onValueChange = makeValueChangeEmitter(this, this.id);
  }
  static {
    this.styles = [
      SlTextarea.styles,
      i`
      .form-control--has-label.form-control--medium .form-control__label {
        margin-bottom: var(--size-xs);
        font-size: var(--font-size-m);
      }
    `
    ];
  }
  connectedCallback() {
    super.connectedCallback();
    const notifyChangeDebounced = functionDebounce(() => {
      this.notifyChange();
    }, this.debounce);
    this.addEventListener("input", () => {
      if (this.waitForEnter)
        return;
      notifyChangeDebounced();
    });
    this.addEventListener("keydown", (e13) => {
      if (!this.waitForEnter)
        return;
      if (e13.code === "Enter") {
        this.notifyChange();
      }
    });
    this.addEventListener("blur", (e13) => this.notifyChange());
  }
  notifyChange() {
    this.onChangeCallback(true);
    this.onValueChange({ type: "string", value: this.value });
  }
};
__decorateClass([
  n5({ type: Boolean, attribute: "wait-for-enter" })
], ForgeInputTextArea.prototype, "waitForEnter", 2);
__decorateClass([
  n5({ type: Number })
], ForgeInputTextArea.prototype, "debounce", 2);
customElements.define("forge-input-text-area", ForgeInputTextArea);
makeInputBinding("forge-input-text-area");

// src/forge/input-time.ts
var ForgeInputTime = class extends SlInput {
  constructor() {
    super();
    this.onChangeCallback = (x7) => {
    };
    this.onValueChange = makeValueChangeEmitter(this, this.id);
    this.type = "time";
  }
  static {
    this.styles = [
      SlInput.styles,
      i`
      .form-control--has-label.form-control--medium .form-control__label {
        margin-bottom: var(--size-xs);
        font-size: var(--font-size-m);
      }
    `
    ];
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("input", () => {
      this.notifyChange();
    });
    this.addEventListener("blur", (e13) => this.notifyChange());
  }
  notifyChange() {
    this.onChangeCallback(true);
    this.onValueChange({ type: "string", value: this.value });
  }
};
customElements.define("forge-input-time", ForgeInputTime);
makeInputBinding("forge-input-time");

// node_modules/lit-html/async-directive.js
var s11 = (i11, t9) => {
  var e13, o14;
  const r11 = i11._$AN;
  if (void 0 === r11)
    return false;
  for (const i12 of r11)
    null === (o14 = (e13 = i12)._$AO) || void 0 === o14 || o14.call(e13, t9, false), s11(i12, t9);
  return true;
};
var o13 = (i11) => {
  let t9, e13;
  do {
    if (void 0 === (t9 = i11._$AM))
      break;
    e13 = t9._$AN, e13.delete(i11), i11 = t9;
  } while (0 === (null == e13 ? void 0 : e13.size));
};
var r10 = (i11) => {
  for (let t9; t9 = i11._$AM; i11 = t9) {
    let e13 = t9._$AN;
    if (void 0 === e13)
      t9._$AN = e13 = /* @__PURE__ */ new Set();
    else if (e13.has(i11))
      break;
    e13.add(i11), l13(t9);
  }
};
function n12(i11) {
  void 0 !== this._$AN ? (o13(this), this._$AM = i11, r10(this)) : this._$AM = i11;
}
function h7(i11, t9 = false, e13 = 0) {
  const r11 = this._$AH, n13 = this._$AN;
  if (void 0 !== n13 && 0 !== n13.size)
    if (t9)
      if (Array.isArray(r11))
        for (let i12 = e13; i12 < r11.length; i12++)
          s11(r11[i12], false), o13(r11[i12]);
      else
        null != r11 && (s11(r11, false), o13(r11));
    else
      s11(this, i11);
}
var l13 = (i11) => {
  var t9, s12, o14, r11;
  i11.type == t4.CHILD && (null !== (t9 = (o14 = i11)._$AP) && void 0 !== t9 || (o14._$AP = h7), null !== (s12 = (r11 = i11)._$AQ) && void 0 !== s12 || (r11._$AQ = n12));
};
var c7 = class extends i5 {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(i11, t9, e13) {
    super._$AT(i11, t9, e13), r10(this), this.isConnected = i11._$AU;
  }
  _$AO(i11, t9 = true) {
    var e13, r11;
    i11 !== this.isConnected && (this.isConnected = i11, i11 ? null === (e13 = this.reconnected) || void 0 === e13 || e13.call(this) : null === (r11 = this.disconnected) || void 0 === r11 || r11.call(this)), t9 && (s11(this, i11), o13(this));
  }
  setValue(t9) {
    if (e7(this._$Ct))
      this._$Ct._$AI(t9, this);
    else {
      const i11 = [...this._$Ct._$AH];
      i11[this._$Ci] = t9, this._$Ct._$AI(i11, this, 0);
    }
  }
  disconnected() {
  }
  reconnected() {
  }
};

// node_modules/@open-wc/lit-helpers/src/spread.js
var SpreadPropsDirective = class extends c7 {
  constructor() {
    super(...arguments);
    this.prevData = {};
  }
  render(_spreadData) {
    return A;
  }
  update(part, [spreadData]) {
    var _a;
    if (this.element !== part.element) {
      this.element = part.element;
    }
    this.host = ((_a = part.options) === null || _a === void 0 ? void 0 : _a.host) || this.element;
    this.apply(spreadData);
    this.groom(spreadData);
    this.prevData = { ...spreadData };
  }
  apply(data) {
    if (!data)
      return;
    const { prevData, element } = this;
    for (const key in data) {
      const value = data[key];
      if (value === prevData[key]) {
        continue;
      }
      element[key] = value;
    }
  }
  groom(data) {
    const { prevData, element } = this;
    if (!prevData)
      return;
    for (const key in prevData) {
      if (!data || !(key in data) && element[key] === prevData[key]) {
        element[key] = void 0;
      }
    }
  }
};
var spreadProps = e8(SpreadPropsDirective);
var SpreadEventsDirective = class extends SpreadPropsDirective {
  constructor() {
    super(...arguments);
    this.eventData = {};
  }
  apply(data) {
    if (!data)
      return;
    for (const key in data) {
      const value = data[key];
      if (value === this.eventData[key]) {
        continue;
      }
      this.applyEvent(key, value);
    }
  }
  applyEvent(eventName, eventValue) {
    const { prevData, element } = this;
    this.eventData[eventName] = eventValue;
    const prevHandler = prevData[eventName];
    if (prevHandler) {
      element.removeEventListener(eventName, this, eventValue);
    }
    element.addEventListener(eventName, this, eventValue);
  }
  groom(data) {
    const { prevData, element } = this;
    if (!prevData)
      return;
    for (const key in prevData) {
      if (!data || !(key in data) && element[key] === prevData[key]) {
        this.groomEvent(key, prevData[key]);
      }
    }
  }
  groomEvent(eventName, eventValue) {
    const { element } = this;
    delete this.eventData[eventName];
    element.removeEventListener(eventName, this, eventValue);
  }
  handleEvent(event) {
    const value = this.eventData[event.type];
    if (typeof value === "function") {
      value.call(this.host, event);
    } else {
      value.handleEvent(event);
    }
  }
  disconnected() {
    const { eventData, element } = this;
    for (const key in eventData) {
      const name = key.slice(1);
      const value = eventData[key];
      element.removeEventListener(name, this, value);
    }
  }
  reconnected() {
    const { eventData, element } = this;
    for (const key in eventData) {
      const name = key.slice(1);
      const value = eventData[key];
      element.addEventListener(name, this, value);
    }
  }
};
var spreadEvents = e8(SpreadEventsDirective);
var SpreadDirective = class extends SpreadEventsDirective {
  apply(data) {
    if (!data)
      return;
    const { prevData, element } = this;
    for (const key in data) {
      const value = data[key];
      if (value === prevData[key]) {
        continue;
      }
      const name = key.slice(1);
      switch (key[0]) {
        case "@":
          this.eventData[name] = value;
          this.applyEvent(name, value);
          break;
        case ".":
          element[name] = value;
          break;
        case "?":
          if (value) {
            element.setAttribute(name, "");
          } else {
            element.removeAttribute(name);
          }
          break;
        default:
          if (value != null) {
            element.setAttribute(key, String(value));
          } else {
            element.removeAttribute(key);
          }
          break;
      }
    }
  }
  groom(data) {
    const { prevData, element } = this;
    if (!prevData)
      return;
    for (const key in prevData) {
      const name = key.slice(1);
      if (!data || !(key in data) && element[name] === prevData[key]) {
        switch (key[0]) {
          case "@":
            this.groomEvent(name, prevData[key]);
            break;
          case ".":
            element[name] = void 0;
            break;
          case "?":
            element.removeAttribute(name);
            break;
          default:
            element.removeAttribute(key);
            break;
        }
      }
    }
  }
};
var spread = e8(SpreadDirective);

// src/shiny/make-output-binding.ts
function makeOutputBinding(tagName) {
  if (!Shiny) {
    return;
  }
  class NewCustomBinding extends Shiny["OutputBinding"] {
    find(scope) {
      return $(scope).find(tagName);
    }
    renderValue(el, data) {
      el.value = data;
    }
  }
  Shiny.outputBindings.register(new NewCustomBinding(), `${tagName}-Binding`);
}

// src/forge/output-plot.ts
var ForgeOutputPlot = class extends s4 {
  constructor() {
    super(...arguments);
    this.value = void 0;
  }
  static {
    this.styles = i`
    :host {
      display: block;
      flex: 1 1 auto;
      min-height: 50px;
      height: 400px;
      width: 100%;
    }
  `;
  }
  sendShinyCurrentSize() {
    if (Shiny) {
      Shiny.setInputValue(
        ".clientdata_output_" + this.id + "_width",
        this.offsetWidth
      );
      Shiny.setInputValue(
        ".clientdata_output_" + this.id + "_height",
        this.offsetHeight
      );
    }
  }
  connectedCallback() {
    super.connectedCallback();
    if (Shiny) {
      $(document).on("shiny:connected", () => {
        this.sendShinyCurrentSize();
      });
    }
    const sendShinyCurrentSizeDebounced = functionDebounce(
      () => this.sendShinyCurrentSize(),
      200
    );
    const resizeObserver = new ResizeObserver((els) => {
      for (const el of els) {
        if (el.target === this) {
          sendShinyCurrentSizeDebounced();
        }
      }
    });
    resizeObserver.observe(this);
  }
  render() {
    if (!this.value) {
      return x``;
    }
    return x`<img
     ${spread(this.value)}
    ></img>`;
  }
};
__decorateClass([
  n5({ type: Array })
], ForgeOutputPlot.prototype, "value", 2);
customElements.define("forge-output-plot", ForgeOutputPlot);
makeOutputBinding("forge-output-plot");

// src/forge/output-text-verbatim.ts
var ForgeOutputTextVerbatim = class extends s4 {
  constructor() {
    super(...arguments);
    this.value = null;
  }
  static {
    this.styles = i`
    pre {
      color: var(--text-1);
      background-color: var(--surface-2);
      border: var(--border-thin) solid var(--surface-4);
      border-radius: var(--radius-s);
      padding: var(--size-xs);
      font-size: var(–-font-size-main);
      font-family: var(--font-mono);
      margin: 0;
    }

    pre:empty::before {
      content: " ";
    }
  `;
  }
  render() {
    return x`<pre>${this.value}</pre>`;
  }
};
__decorateClass([
  n5({ type: Boolean })
], ForgeOutputTextVerbatim.prototype, "value", 2);
customElements.define("forge-output-text-verbatim", ForgeOutputTextVerbatim);
makeOutputBinding("forge-output-text-verbatim");
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

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
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

lit-html/static.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/live.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/async-directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=forge.js.map
