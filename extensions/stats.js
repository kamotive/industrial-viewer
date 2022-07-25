(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 389);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(256);
} else {}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {/* unused harmony export $mobx */
/* unused harmony export FlowCancellationError */
/* unused harmony export IDerivationState */
/* unused harmony export ObservableMap */
/* unused harmony export ObservableSet */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Reaction; });
/* unused harmony export _allowStateChanges */
/* unused harmony export _allowStateChangesInsideComputed */
/* unused harmony export _allowStateReadsEnd */
/* unused harmony export _allowStateReadsStart */
/* unused harmony export _endAction */
/* unused harmony export _getAdministration */
/* unused harmony export _getGlobalState */
/* unused harmony export _interceptReads */
/* unused harmony export _isComputingDerivation */
/* unused harmony export _resetGlobalState */
/* unused harmony export _startAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return autorun; });
/* unused harmony export comparer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return computed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return configure; });
/* unused harmony export createAtom */
/* unused harmony export decorate */
/* unused harmony export entries */
/* unused harmony export extendObservable */
/* unused harmony export extendShallowObservable */
/* unused harmony export flow */
/* unused harmony export get */
/* unused harmony export getAtom */
/* unused harmony export getDebugName */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getDependencyTree; });
/* unused harmony export getObserverTree */
/* unused harmony export has */
/* unused harmony export intercept */
/* unused harmony export isAction */
/* unused harmony export isArrayLike */
/* unused harmony export isBoxedObservable */
/* unused harmony export isComputed */
/* unused harmony export isComputedProp */
/* unused harmony export isFlowCancellationError */
/* unused harmony export isObservable */
/* unused harmony export isObservableArray */
/* unused harmony export isObservableMap */
/* unused harmony export isObservableObject */
/* unused harmony export isObservableProp */
/* unused harmony export isObservableSet */
/* unused harmony export keys */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return observable; });
/* unused harmony export observe */
/* unused harmony export onBecomeObserved */
/* unused harmony export onBecomeUnobserved */
/* unused harmony export onReactionError */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return reaction; });
/* unused harmony export remove */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return runInAction; });
/* unused harmony export set */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return spy; });
/* unused harmony export toJS */
/* unused harmony export trace */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return transaction; });
/* unused harmony export untracked */
/* unused harmony export values */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return when; });
/** MobX - (c) Michel Weststrate 2015 - 2020 - MIT Licensed */
var OBFUSCATED_ERROR = "An invariant failed, however the error is obfuscated because this is an production build.";
var EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);
var EMPTY_OBJECT = {};
Object.freeze(EMPTY_OBJECT);
var mockGlobal = {};
function getGlobal() {
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    return mockGlobal;
}
function getNextId() {
    return ++globalState.mobxGuid;
}
function fail(message) {
    invariant(false, message);
    throw "X"; // unreachable
}
function invariant(check, message) {
    if (!check)
        throw new Error("[mobx] " + (message || OBFUSCATED_ERROR));
}
/**
 * Prints a deprecation message, but only one time.
 * Returns false if the deprecated message was already printed before
 */
var deprecatedMessages = [];
function deprecated(msg, thing) {
    if (true)
        return false;
    if (thing) {
        return deprecated("'" + msg + "', use '" + thing + "' instead.");
    }
    if (deprecatedMessages.indexOf(msg) !== -1)
        return false;
    deprecatedMessages.push(msg);
    console.error("[mobx] Deprecated: " + msg);
    return true;
}
/**
 * Makes sure that the provided function is invoked at most once.
 */
function once(func) {
    var invoked = false;
    return function () {
        if (invoked)
            return;
        invoked = true;
        return func.apply(this, arguments);
    };
}
var noop = function () { };
function unique(list) {
    var res = [];
    list.forEach(function (item) {
        if (res.indexOf(item) === -1)
            res.push(item);
    });
    return res;
}
function isObject(value) {
    return value !== null && typeof value === "object";
}
function isPlainObject(value) {
    if (value === null || typeof value !== "object")
        return false;
    var proto = Object.getPrototypeOf(value);
    return proto === Object.prototype || proto === null;
}
function convertToMap(dataStructure) {
    if (isES6Map(dataStructure) || isObservableMap(dataStructure)) {
        return dataStructure;
    }
    else if (Array.isArray(dataStructure)) {
        return new Map(dataStructure);
    }
    else if (isPlainObject(dataStructure)) {
        var map = new Map();
        for (var key in dataStructure) {
            map.set(key, dataStructure[key]);
        }
        return map;
    }
    else {
        return fail("Cannot convert to map from '" + dataStructure + "'");
    }
}
function makeNonEnumerable(object, propNames) {
    for (var i = 0; i < propNames.length; i++) {
        addHiddenProp(object, propNames[i], object[propNames[i]]);
    }
}
function addHiddenProp(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: true,
        configurable: true,
        value: value
    });
}
function addHiddenFinalProp(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: false,
        configurable: true,
        value: value
    });
}
function isPropertyConfigurable(object, prop) {
    var descriptor = Object.getOwnPropertyDescriptor(object, prop);
    return !descriptor || (descriptor.configurable !== false && descriptor.writable !== false);
}
function assertPropertyConfigurable(object, prop) {
    if (false)
        {}
}
function createInstanceofPredicate(name, clazz) {
    var propName = "isMobX" + name;
    clazz.prototype[propName] = true;
    return function (x) {
        return isObject(x) && x[propName] === true;
    };
}
function areBothNaN(a, b) {
    return typeof a === "number" && typeof b === "number" && isNaN(a) && isNaN(b);
}
/**
 * Returns whether the argument is an array, disregarding observability.
 */
function isArrayLike(x) {
    return Array.isArray(x) || isObservableArray(x);
}
function isES6Map(thing) {
    if (getGlobal().Map !== undefined && thing instanceof getGlobal().Map)
        return true;
    return false;
}
function isES6Set(thing) {
    return thing instanceof Set;
}
// use Array.from in Mobx 5
function iteratorToArray(it) {
    var res = [];
    while (true) {
        var r = it.next();
        if (r.done)
            break;
        res.push(r.value);
    }
    return res;
}
function primitiveSymbol() {
    // es-disable-next-line
    return (typeof Symbol === "function" && Symbol.toPrimitive) || "@@toPrimitive";
}
function toPrimitive(value) {
    return value === null ? null : typeof value === "object" ? "" + value : value;
}
// Use "for of" in V5
function forOf(iter, callback) {
    var next = iter.next();
    while (!next.done) {
        callback(next.value);
        next = iter.next();
    }
}

function iteratorSymbol() {
    return (typeof Symbol === "function" && Symbol.iterator) || "@@iterator";
}
function declareIterator(prototType, iteratorFactory) {
    addHiddenFinalProp(prototType, iteratorSymbol(), iteratorFactory);
}
function makeIterable(iterator) {
    iterator[iteratorSymbol()] = getSelf;
    return iterator;
}
function toStringTagSymbol() {
    return (typeof Symbol === "function" && Symbol.toStringTag) || "@@toStringTag";
}
function getSelf() {
    return this;
}

/**
 * Anything that can be used to _store_ state is an Atom in mobx. Atoms have two important jobs
 *
 * 1) detect when they are being _used_ and report this (using reportObserved). This allows mobx to make the connection between running functions and the data they used
 * 2) they should notify mobx whenever they have _changed_. This way mobx can re-run any functions (derivations) that are using this atom.
 */
var Atom = /** @class */ (function () {
    /**
     * Create a new atom. For debugging purposes it is recommended to give it a name.
     * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
     */
    function Atom(name) {
        if (name === void 0) { name = "Atom@" + getNextId(); }
        this.name = name;
        this.isPendingUnobservation = false; // for effective unobserving. BaseAtom has true, for extra optimization, so its onBecomeUnobserved never gets called, because it's not needed
        this.isBeingObserved = false;
        this.observers = [];
        this.observersIndexes = {};
        this.diffValue = 0;
        this.lastAccessedBy = 0;
        this.lowestObserverState = IDerivationState.NOT_TRACKING;
    }
    Atom.prototype.onBecomeUnobserved = function () {
        // noop
    };
    Atom.prototype.onBecomeObserved = function () {
        /* noop */
    };
    /**
     * Invoke this method to notify mobx that your atom has been used somehow.
     * Returns true if there is currently a reactive context.
     */
    Atom.prototype.reportObserved = function () {
        return reportObserved(this);
    };
    /**
     * Invoke this method _after_ this method has changed to signal mobx that all its observers should invalidate.
     */
    Atom.prototype.reportChanged = function () {
        startBatch();
        propagateChanged(this);
        endBatch();
    };
    Atom.prototype.toString = function () {
        return this.name;
    };
    return Atom;
}());
var isAtom = createInstanceofPredicate("Atom", Atom);
function createAtom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
    if (onBecomeObservedHandler === void 0) { onBecomeObservedHandler = noop; }
    if (onBecomeUnobservedHandler === void 0) { onBecomeUnobservedHandler = noop; }
    var atom = new Atom(name);
    onBecomeObserved(atom, onBecomeObservedHandler);
    onBecomeUnobserved(atom, onBecomeUnobservedHandler);
    return atom;
}

function identityComparer(a, b) {
    return a === b;
}
function structuralComparer(a, b) {
    return deepEqual(a, b);
}
function shallowComparer(a, b) {
    return deepEqual(a, b, 1);
}
function defaultComparer(a, b) {
    return areBothNaN(a, b) || identityComparer(a, b);
}
var comparer = {
    identity: identityComparer,
    structural: structuralComparer,
    default: defaultComparer,
    shallow: shallowComparer
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

var enumerableDescriptorCache = {};
var nonEnumerableDescriptorCache = {};
function createPropertyInitializerDescriptor(prop, enumerable) {
    var cache = enumerable ? enumerableDescriptorCache : nonEnumerableDescriptorCache;
    return (cache[prop] ||
        (cache[prop] = {
            configurable: true,
            enumerable: enumerable,
            get: function () {
                initializeInstance(this);
                return this[prop];
            },
            set: function (value) {
                initializeInstance(this);
                this[prop] = value;
            }
        }));
}
function initializeInstance(target) {
    if (target.__mobxDidRunLazyInitializers === true)
        return;
    var decorators = target.__mobxDecorators;
    if (decorators) {
        addHiddenProp(target, "__mobxDidRunLazyInitializers", true);
        for (var key in decorators) {
            var d = decorators[key];
            d.propertyCreator(target, d.prop, d.descriptor, d.decoratorTarget, d.decoratorArguments);
        }
    }
}
function createPropDecorator(propertyInitiallyEnumerable, propertyCreator) {
    return function decoratorFactory() {
        var decoratorArguments;
        var decorator = function decorate(target, prop, descriptor, applyImmediately
        // This is a special parameter to signal the direct application of a decorator, allow extendObservable to skip the entire type decoration part,
        // as the instance to apply the decorator to equals the target
        ) {
            if (applyImmediately === true) {
                propertyCreator(target, prop, descriptor, target, decoratorArguments);
                return null;
            }
            if (false)
                {}
            if (!Object.prototype.hasOwnProperty.call(target, "__mobxDecorators")) {
                var inheritedDecorators = target.__mobxDecorators;
                addHiddenProp(target, "__mobxDecorators", __assign({}, inheritedDecorators));
            }
            target.__mobxDecorators[prop] = {
                prop: prop,
                propertyCreator: propertyCreator,
                descriptor: descriptor,
                decoratorTarget: target,
                decoratorArguments: decoratorArguments
            };
            return createPropertyInitializerDescriptor(prop, propertyInitiallyEnumerable);
        };
        if (quacksLikeADecorator(arguments)) {
            // @decorator
            decoratorArguments = EMPTY_ARRAY;
            return decorator.apply(null, arguments);
        }
        else {
            // @decorator(args)
            decoratorArguments = Array.prototype.slice.call(arguments);
            return decorator;
        }
    };
}
function quacksLikeADecorator(args) {
    return (((args.length === 2 || args.length === 3) && typeof args[1] === "string") ||
        (args.length === 4 && args[3] === true));
}

function deepEnhancer(v, _, name) {
    // it is an observable already, done
    if (isObservable(v))
        return v;
    // something that can be converted and mutated?
    if (Array.isArray(v))
        return observable.array(v, { name: name });
    if (isPlainObject(v))
        return observable.object(v, undefined, { name: name });
    if (isES6Map(v))
        return observable.map(v, { name: name });
    if (isES6Set(v))
        return observable.set(v, { name: name });
    return v;
}
function shallowEnhancer(v, _, name) {
    if (v === undefined || v === null)
        return v;
    if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v) || isObservableSet(v))
        return v;
    if (Array.isArray(v))
        return observable.array(v, { name: name, deep: false });
    if (isPlainObject(v))
        return observable.object(v, undefined, { name: name, deep: false });
    if (isES6Map(v))
        return observable.map(v, { name: name, deep: false });
    if (isES6Set(v))
        return observable.set(v, { name: name, deep: false });
    return fail( false &&
        false);
}
function referenceEnhancer(newValue) {
    // never turn into an observable
    return newValue;
}
function refStructEnhancer(v, oldValue, name) {
    if (false)
        {}
    if (deepEqual(v, oldValue))
        return oldValue;
    return v;
}

function createDecoratorForEnhancer(enhancer) {
    invariant(enhancer);
    var decorator = createPropDecorator(true, function (target, propertyName, descriptor, _decoratorTarget, decoratorArgs) {
        if (false) {}
        var initialValue = descriptor
            ? descriptor.initializer
                ? descriptor.initializer.call(target)
                : descriptor.value
            : undefined;
        defineObservableProperty(target, propertyName, initialValue, enhancer);
    });
    var res = 
    // Extra process checks, as this happens during module initialization
    typeof process !== "undefined" && process.env && "production" !== "production"
        ? function observableDecorator() {
            // This wrapper function is just to detect illegal decorator invocations, deprecate in a next version
            // and simply return the created prop decorator
            if (arguments.length < 2)
                return fail("Incorrect decorator invocation. @observable decorator doesn't expect any arguments");
            return decorator.apply(null, arguments);
        }
        : decorator;
    res.enhancer = enhancer;
    return res;
}

// Predefined bags of create observable options, to avoid allocating temporarily option objects
// in the majority of cases
var defaultCreateObservableOptions = {
    deep: true,
    name: undefined,
    defaultDecorator: undefined
};
var shallowCreateObservableOptions = {
    deep: false,
    name: undefined,
    defaultDecorator: undefined
};
Object.freeze(defaultCreateObservableOptions);
Object.freeze(shallowCreateObservableOptions);
function assertValidOption(key) {
    if (!/^(deep|name|equals|defaultDecorator)$/.test(key))
        fail("invalid option for (extend)observable: " + key);
}
function asCreateObservableOptions(thing) {
    if (thing === null || thing === undefined)
        return defaultCreateObservableOptions;
    if (typeof thing === "string")
        return { name: thing, deep: true };
    if (false) {}
    return thing;
}
function getEnhancerFromOptions(options) {
    return options.defaultDecorator
        ? options.defaultDecorator.enhancer
        : options.deep === false
            ? referenceEnhancer
            : deepEnhancer;
}
var deepDecorator = createDecoratorForEnhancer(deepEnhancer);
var shallowDecorator = createDecoratorForEnhancer(shallowEnhancer);
var refDecorator = createDecoratorForEnhancer(referenceEnhancer);
var refStructDecorator = createDecoratorForEnhancer(refStructEnhancer);
/**
 * Turns an object, array or function into a reactive structure.
 * @param v the value which should become observable.
 */
function createObservable(v, arg2, arg3) {
    // @observable someProp;
    if (typeof arguments[1] === "string") {
        return deepDecorator.apply(null, arguments);
    }
    // it is an observable already, done
    if (isObservable(v))
        return v;
    // something that can be converted and mutated?
    var res = isPlainObject(v)
        ? observable.object(v, arg2, arg3)
        : Array.isArray(v)
            ? observable.array(v, arg2)
            : isES6Map(v)
                ? observable.map(v, arg2)
                : isES6Set(v)
                    ? observable.set(v, arg2)
                    : v;
    // this value could be converted to a new observable data structure, return it
    if (res !== v)
        return res;
    // otherwise, just box it
    fail( false &&
        false);
}
var observableFactories = {
    box: function (value, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("box");
        var o = asCreateObservableOptions(options);
        return new ObservableValue(value, getEnhancerFromOptions(o), o.name, true, o.equals);
    },
    shallowBox: function (value, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("shallowBox");
        deprecated("observable.shallowBox", "observable.box(value, { deep: false })");
        return observable.box(value, { name: name, deep: false });
    },
    array: function (initialValues, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("array");
        var o = asCreateObservableOptions(options);
        return new ObservableArray(initialValues, getEnhancerFromOptions(o), o.name);
    },
    shallowArray: function (initialValues, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("shallowArray");
        deprecated("observable.shallowArray", "observable.array(values, { deep: false })");
        return observable.array(initialValues, { name: name, deep: false });
    },
    map: function (initialValues, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("map");
        var o = asCreateObservableOptions(options);
        return new ObservableMap(initialValues, getEnhancerFromOptions(o), o.name);
    },
    shallowMap: function (initialValues, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("shallowMap");
        deprecated("observable.shallowMap", "observable.map(values, { deep: false })");
        return observable.map(initialValues, { name: name, deep: false });
    },
    set: function (initialValues, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("set");
        var o = asCreateObservableOptions(options);
        return new ObservableSet(initialValues, getEnhancerFromOptions(o), o.name);
    },
    object: function (props, decorators, options) {
        if (typeof arguments[1] === "string")
            incorrectlyUsedAsDecorator("object");
        var o = asCreateObservableOptions(options);
        return extendObservable({}, props, decorators, o);
    },
    shallowObject: function (props, name) {
        if (typeof arguments[1] === "string")
            incorrectlyUsedAsDecorator("shallowObject");
        deprecated("observable.shallowObject", "observable.object(values, {}, { deep: false })");
        return observable.object(props, {}, { name: name, deep: false });
    },
    ref: refDecorator,
    shallow: shallowDecorator,
    deep: deepDecorator,
    struct: refStructDecorator
};
var observable = createObservable;
// weird trick to keep our typings nicely with our funcs, and still extend the observable function
Object.keys(observableFactories).forEach(function (name) { return (observable[name] = observableFactories[name]); });
function incorrectlyUsedAsDecorator(methodName) {
    fail(
    // process.env.NODE_ENV !== "production" &&
    "Expected one or two arguments to observable." + methodName + ". Did you accidentally try to use observable." + methodName + " as decorator?");
}

var computedDecorator = createPropDecorator(false, function (instance, propertyName, descriptor, decoratorTarget, decoratorArgs) {
    if (false) {}
    var get = descriptor.get, set = descriptor.set; // initialValue is the descriptor for get / set props
    // Optimization: faster on decorator target or instance? Assuming target
    // Optimization: find out if declaring on instance isn't just faster. (also makes the property descriptor simpler). But, more memory usage..
    // Forcing instance now, fixes hot reloadig issues on React Native:
    var options = decoratorArgs[0] || {};
    defineComputedProperty(instance, propertyName, __assign({ get: get, set: set }, options));
});
var computedStructDecorator = computedDecorator({ equals: comparer.structural });
/**
 * Decorator for class properties: @computed get value() { return expr; }.
 * For legacy purposes also invokable as ES5 observable created: `computed(() => expr)`;
 */
var computed = function computed(arg1, arg2, arg3) {
    if (typeof arg2 === "string") {
        // @computed
        return computedDecorator.apply(null, arguments);
    }
    if (arg1 !== null && typeof arg1 === "object" && arguments.length === 1) {
        // @computed({ options })
        return computedDecorator.apply(null, arguments);
    }
    // computed(expr, options?)
    if (false) {}
    var opts = typeof arg2 === "object" ? arg2 : {};
    opts.get = arg1;
    opts.set = typeof arg2 === "function" ? arg2 : opts.set;
    opts.name = opts.name || arg1.name || ""; /* for generated name */
    return new ComputedValue(opts);
};
computed.struct = computedStructDecorator;

var IDerivationState;
(function (IDerivationState) {
    // before being run or (outside batch and not being observed)
    // at this point derivation is not holding any data about dependency tree
    IDerivationState[IDerivationState["NOT_TRACKING"] = -1] = "NOT_TRACKING";
    // no shallow dependency changed since last computation
    // won't recalculate derivation
    // this is what makes mobx fast
    IDerivationState[IDerivationState["UP_TO_DATE"] = 0] = "UP_TO_DATE";
    // some deep dependency changed, but don't know if shallow dependency changed
    // will require to check first if UP_TO_DATE or POSSIBLY_STALE
    // currently only ComputedValue will propagate POSSIBLY_STALE
    //
    // having this state is second big optimization:
    // don't have to recompute on every dependency change, but only when it's needed
    IDerivationState[IDerivationState["POSSIBLY_STALE"] = 1] = "POSSIBLY_STALE";
    // A shallow dependency has changed since last computation and the derivation
    // will need to recompute when it's needed next.
    IDerivationState[IDerivationState["STALE"] = 2] = "STALE";
})(IDerivationState || (IDerivationState = {}));
var TraceMode;
(function (TraceMode) {
    TraceMode[TraceMode["NONE"] = 0] = "NONE";
    TraceMode[TraceMode["LOG"] = 1] = "LOG";
    TraceMode[TraceMode["BREAK"] = 2] = "BREAK";
})(TraceMode || (TraceMode = {}));
var CaughtException = /** @class */ (function () {
    function CaughtException(cause) {
        this.cause = cause;
        // Empty
    }
    return CaughtException;
}());
function isCaughtException(e) {
    return e instanceof CaughtException;
}
/**
 * Finds out whether any dependency of the derivation has actually changed.
 * If dependenciesState is 1 then it will recalculate dependencies,
 * if any dependency changed it will propagate it by changing dependenciesState to 2.
 *
 * By iterating over the dependencies in the same order that they were reported and
 * stopping on the first change, all the recalculations are only called for ComputedValues
 * that will be tracked by derivation. That is because we assume that if the first x
 * dependencies of the derivation doesn't change then the derivation should run the same way
 * up until accessing x-th dependency.
 */
function shouldCompute(derivation) {
    switch (derivation.dependenciesState) {
        case IDerivationState.UP_TO_DATE:
            return false;
        case IDerivationState.NOT_TRACKING:
        case IDerivationState.STALE:
            return true;
        case IDerivationState.POSSIBLY_STALE: {
            // state propagation can occur outside of action/reactive context #2195
            var prevAllowStateReads = allowStateReadsStart(true);
            var prevUntracked = untrackedStart(); // no need for those computeds to be reported, they will be picked up in trackDerivedFunction.
            var obs = derivation.observing, l = obs.length;
            for (var i = 0; i < l; i++) {
                var obj = obs[i];
                if (isComputedValue(obj)) {
                    if (globalState.disableErrorBoundaries) {
                        obj.get();
                    }
                    else {
                        try {
                            obj.get();
                        }
                        catch (e) {
                            // we are not interested in the value *or* exception at this moment, but if there is one, notify all
                            untrackedEnd(prevUntracked);
                            allowStateReadsEnd(prevAllowStateReads);
                            return true;
                        }
                    }
                    // if ComputedValue `obj` actually changed it will be computed and propagated to its observers.
                    // and `derivation` is an observer of `obj`
                    // invariantShouldCompute(derivation)
                    if (derivation.dependenciesState === IDerivationState.STALE) {
                        untrackedEnd(prevUntracked);
                        allowStateReadsEnd(prevAllowStateReads);
                        return true;
                    }
                }
            }
            changeDependenciesStateTo0(derivation);
            untrackedEnd(prevUntracked);
            allowStateReadsEnd(prevAllowStateReads);
            return false;
        }
    }
}
// function invariantShouldCompute(derivation: IDerivation) {
//     const newDepState = (derivation as any).dependenciesState
//     if (
//         process.env.NODE_ENV === "production" &&
//         (newDepState === IDerivationState.POSSIBLY_STALE ||
//             newDepState === IDerivationState.NOT_TRACKING)
//     )
//         fail("Illegal dependency state")
// }
function isComputingDerivation() {
    return globalState.trackingDerivation !== null; // filter out actions inside computations
}
function checkIfStateModificationsAreAllowed(atom) {
    var hasObservers = atom.observers.length > 0;
    // Should never be possible to change an observed observable from inside computed, see #798
    if (globalState.computationDepth > 0 && hasObservers)
        fail( false &&
            false);
    // Should not be possible to change observed state outside strict mode, except during initialization, see #563
    if (!globalState.allowStateChanges && (hasObservers || globalState.enforceActions === "strict"))
        fail( false &&
            false);
}
function checkIfStateReadsAreAllowed(observable) {
    if (false) {}
}
/**
 * Executes the provided function `f` and tracks which observables are being accessed.
 * The tracking information is stored on the `derivation` object and the derivation is registered
 * as observer of any of the accessed observables.
 */
function trackDerivedFunction(derivation, f, context) {
    var prevAllowStateReads = allowStateReadsStart(true);
    // pre allocate array allocation + room for variation in deps
    // array will be trimmed by bindDependencies
    changeDependenciesStateTo0(derivation);
    derivation.newObserving = new Array(derivation.observing.length + 100);
    derivation.unboundDepsCount = 0;
    derivation.runId = ++globalState.runId;
    var prevTracking = globalState.trackingDerivation;
    globalState.trackingDerivation = derivation;
    var result;
    if (globalState.disableErrorBoundaries === true) {
        result = f.call(context);
    }
    else {
        try {
            result = f.call(context);
        }
        catch (e) {
            result = new CaughtException(e);
        }
    }
    globalState.trackingDerivation = prevTracking;
    bindDependencies(derivation);
    if (derivation.observing.length === 0) {
        warnAboutDerivationWithoutDependencies(derivation);
    }
    allowStateReadsEnd(prevAllowStateReads);
    return result;
}
function warnAboutDerivationWithoutDependencies(derivation) {
    if (true)
        return;
    if (globalState.reactionRequiresObservable || derivation.requiresObservable) {
        console.warn("[mobx] Derivation " + derivation.name + " is created/updated without reading any observable value");
    }
}
/**
 * diffs newObserving with observing.
 * update observing to be newObserving with unique observables
 * notify observers that become observed/unobserved
 */
function bindDependencies(derivation) {
    // invariant(derivation.dependenciesState !== IDerivationState.NOT_TRACKING, "INTERNAL ERROR bindDependencies expects derivation.dependenciesState !== -1");
    var prevObserving = derivation.observing;
    var observing = (derivation.observing = derivation.newObserving);
    var lowestNewObservingDerivationState = IDerivationState.UP_TO_DATE;
    // Go through all new observables and check diffValue: (this list can contain duplicates):
    //   0: first occurrence, change to 1 and keep it
    //   1: extra occurrence, drop it
    var i0 = 0, l = derivation.unboundDepsCount;
    for (var i = 0; i < l; i++) {
        var dep = observing[i];
        if (dep.diffValue === 0) {
            dep.diffValue = 1;
            if (i0 !== i)
                observing[i0] = dep;
            i0++;
        }
        // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
        // not hitting the condition
        if (dep.dependenciesState > lowestNewObservingDerivationState) {
            lowestNewObservingDerivationState = dep.dependenciesState;
        }
    }
    observing.length = i0;
    derivation.newObserving = null; // newObserving shouldn't be needed outside tracking (statement moved down to work around FF bug, see #614)
    // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
    //   0: it's not in new observables, unobserve it
    //   1: it keeps being observed, don't want to notify it. change to 0
    l = prevObserving.length;
    while (l--) {
        var dep = prevObserving[l];
        if (dep.diffValue === 0) {
            removeObserver(dep, derivation);
        }
        dep.diffValue = 0;
    }
    // Go through all new observables and check diffValue: (now it should be unique)
    //   0: it was set to 0 in last loop. don't need to do anything.
    //   1: it wasn't observed, let's observe it. set back to 0
    while (i0--) {
        var dep = observing[i0];
        if (dep.diffValue === 1) {
            dep.diffValue = 0;
            addObserver(dep, derivation);
        }
    }
    // Some new observed derivations may become stale during this derivation computation
    // so they have had no chance to propagate staleness (#916)
    if (lowestNewObservingDerivationState !== IDerivationState.UP_TO_DATE) {
        derivation.dependenciesState = lowestNewObservingDerivationState;
        derivation.onBecomeStale();
    }
}
function clearObserving(derivation) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR clearObserving should be called only inside batch");
    var obs = derivation.observing;
    derivation.observing = [];
    var i = obs.length;
    while (i--)
        removeObserver(obs[i], derivation);
    derivation.dependenciesState = IDerivationState.NOT_TRACKING;
}
function untracked(action) {
    var prev = untrackedStart();
    var res = action();
    untrackedEnd(prev);
    return res;
}
function untrackedStart() {
    var prev = globalState.trackingDerivation;
    globalState.trackingDerivation = null;
    return prev;
}
function untrackedEnd(prev) {
    globalState.trackingDerivation = prev;
}
function allowStateReadsStart(allowStateReads) {
    var prev = globalState.allowStateReads;
    globalState.allowStateReads = allowStateReads;
    return prev;
}
function allowStateReadsEnd(prev) {
    globalState.allowStateReads = prev;
}
/**
 * needed to keep `lowestObserverState` correct. when changing from (2 or 1) to 0
 *
 */
function changeDependenciesStateTo0(derivation) {
    if (derivation.dependenciesState === IDerivationState.UP_TO_DATE)
        return;
    derivation.dependenciesState = IDerivationState.UP_TO_DATE;
    var obs = derivation.observing;
    var i = obs.length;
    while (i--)
        obs[i].lowestObserverState = IDerivationState.UP_TO_DATE;
}

// we don't use globalState for these in order to avoid possible issues with multiple
// mobx versions
var currentActionId = 0;
var nextActionId = 1;
var functionNameDescriptor = Object.getOwnPropertyDescriptor(function () { }, "name");
var isFunctionNameConfigurable = functionNameDescriptor && functionNameDescriptor.configurable;
function createAction(actionName, fn) {
    if (false) {}
    var res = function () {
        return executeAction(actionName, fn, this, arguments);
    };
    if (false) {}
    res.isMobxAction = true;
    return res;
}
function executeAction(actionName, fn, scope, args) {
    var runInfo = _startAction(actionName, scope, args);
    try {
        return fn.apply(scope, args);
    }
    catch (err) {
        runInfo.error = err;
        throw err;
    }
    finally {
        _endAction(runInfo);
    }
}
function _startAction(actionName, scope, args) {
    var notifySpy = isSpyEnabled() && !!actionName;
    var startTime = 0;
    if (notifySpy) {
        startTime = Date.now();
        var l = (args && args.length) || 0;
        var flattendArgs = new Array(l);
        if (l > 0)
            for (var i = 0; i < l; i++)
                flattendArgs[i] = args[i];
        spyReportStart({
            type: "action",
            name: actionName,
            object: scope,
            arguments: flattendArgs
        });
    }
    var prevDerivation = untrackedStart();
    startBatch();
    var prevAllowStateChanges = allowStateChangesStart(true);
    var prevAllowStateReads = allowStateReadsStart(true);
    var runInfo = {
        prevDerivation: prevDerivation,
        prevAllowStateChanges: prevAllowStateChanges,
        prevAllowStateReads: prevAllowStateReads,
        notifySpy: notifySpy,
        startTime: startTime,
        actionId: nextActionId++,
        parentActionId: currentActionId
    };
    currentActionId = runInfo.actionId;
    return runInfo;
}
function _endAction(runInfo) {
    if (currentActionId !== runInfo.actionId) {
        fail("invalid action stack. did you forget to finish an action?");
    }
    currentActionId = runInfo.parentActionId;
    if (runInfo.error !== undefined) {
        globalState.suppressReactionErrors = true;
    }
    allowStateChangesEnd(runInfo.prevAllowStateChanges);
    allowStateReadsEnd(runInfo.prevAllowStateReads);
    endBatch();
    untrackedEnd(runInfo.prevDerivation);
    if (runInfo.notifySpy) {
        spyReportEnd({ time: Date.now() - runInfo.startTime });
    }
    globalState.suppressReactionErrors = false;
}
function allowStateChanges(allowStateChanges, func) {
    var prev = allowStateChangesStart(allowStateChanges);
    var res;
    try {
        res = func();
    }
    finally {
        allowStateChangesEnd(prev);
    }
    return res;
}
function allowStateChangesStart(allowStateChanges) {
    var prev = globalState.allowStateChanges;
    globalState.allowStateChanges = allowStateChanges;
    return prev;
}
function allowStateChangesEnd(prev) {
    globalState.allowStateChanges = prev;
}
function allowStateChangesInsideComputed(func) {
    var prev = globalState.computationDepth;
    globalState.computationDepth = 0;
    var res;
    try {
        res = func();
    }
    finally {
        globalState.computationDepth = prev;
    }
    return res;
}

var ObservableValue = /** @class */ (function (_super) {
    __extends(ObservableValue, _super);
    function ObservableValue(value, enhancer, name, notifySpy, equals) {
        if (name === void 0) { name = "ObservableValue@" + getNextId(); }
        if (notifySpy === void 0) { notifySpy = true; }
        if (equals === void 0) { equals = comparer.default; }
        var _this = _super.call(this, name) || this;
        _this.enhancer = enhancer;
        _this.name = name;
        _this.equals = equals;
        _this.hasUnreportedChange = false;
        _this.value = enhancer(value, undefined, name);
        if (notifySpy && isSpyEnabled()) {
            // only notify spy if this is a stand-alone observable
            spyReport({ type: "create", name: _this.name, newValue: "" + _this.value });
        }
        return _this;
    }
    ObservableValue.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined)
            return this.dehancer(value);
        return value;
    };
    ObservableValue.prototype.set = function (newValue) {
        var oldValue = this.value;
        newValue = this.prepareNewValue(newValue);
        if (newValue !== globalState.UNCHANGED) {
            var notifySpy = isSpyEnabled();
            if (notifySpy) {
                spyReportStart({
                    type: "update",
                    name: this.name,
                    newValue: newValue,
                    oldValue: oldValue
                });
            }
            this.setNewValue(newValue);
            if (notifySpy)
                spyReportEnd();
        }
    };
    ObservableValue.prototype.prepareNewValue = function (newValue) {
        checkIfStateModificationsAreAllowed(this);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this,
                type: "update",
                newValue: newValue
            });
            if (!change)
                return globalState.UNCHANGED;
            newValue = change.newValue;
        }
        // apply modifier
        newValue = this.enhancer(newValue, this.value, this.name);
        return this.equals(this.value, newValue) ? globalState.UNCHANGED : newValue;
    };
    ObservableValue.prototype.setNewValue = function (newValue) {
        var oldValue = this.value;
        this.value = newValue;
        this.reportChanged();
        if (hasListeners(this)) {
            notifyListeners(this, {
                type: "update",
                object: this,
                newValue: newValue,
                oldValue: oldValue
            });
        }
    };
    ObservableValue.prototype.get = function () {
        this.reportObserved();
        return this.dehanceValue(this.value);
    };
    ObservableValue.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableValue.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately)
            listener({
                object: this,
                type: "update",
                newValue: this.value,
                oldValue: undefined
            });
        return registerListener(this, listener);
    };
    ObservableValue.prototype.toJSON = function () {
        return this.get();
    };
    ObservableValue.prototype.toString = function () {
        return this.name + "[" + this.value + "]";
    };
    ObservableValue.prototype.valueOf = function () {
        return toPrimitive(this.get());
    };
    return ObservableValue;
}(Atom));
ObservableValue.prototype[primitiveSymbol()] = ObservableValue.prototype.valueOf;
var isObservableValue = createInstanceofPredicate("ObservableValue", ObservableValue);

/**
 * A node in the state dependency root that observes other nodes, and can be observed itself.
 *
 * ComputedValue will remember the result of the computation for the duration of the batch, or
 * while being observed.
 *
 * During this time it will recompute only when one of its direct dependencies changed,
 * but only when it is being accessed with `ComputedValue.get()`.
 *
 * Implementation description:
 * 1. First time it's being accessed it will compute and remember result
 *    give back remembered result until 2. happens
 * 2. First time any deep dependency change, propagate POSSIBLY_STALE to all observers, wait for 3.
 * 3. When it's being accessed, recompute if any shallow dependency changed.
 *    if result changed: propagate STALE to all observers, that were POSSIBLY_STALE from the last step.
 *    go to step 2. either way
 *
 * If at any point it's outside batch and it isn't observed: reset everything and go to 1.
 */
var ComputedValue = /** @class */ (function () {
    /**
     * Create a new computed value based on a function expression.
     *
     * The `name` property is for debug purposes only.
     *
     * The `equals` property specifies the comparer function to use to determine if a newly produced
     * value differs from the previous value. Two comparers are provided in the library; `defaultComparer`
     * compares based on identity comparison (===), and `structualComparer` deeply compares the structure.
     * Structural comparison can be convenient if you always produce a new aggregated object and
     * don't want to notify observers if it is structurally the same.
     * This is useful for working with vectors, mouse coordinates etc.
     */
    function ComputedValue(options) {
        this.dependenciesState = IDerivationState.NOT_TRACKING;
        this.observing = []; // nodes we are looking at. Our value depends on these nodes
        this.newObserving = null; // during tracking it's an array with new observed observers
        this.isBeingObserved = false;
        this.isPendingUnobservation = false;
        this.observers = [];
        this.observersIndexes = {};
        this.diffValue = 0;
        this.runId = 0;
        this.lastAccessedBy = 0;
        this.lowestObserverState = IDerivationState.UP_TO_DATE;
        this.unboundDepsCount = 0;
        this.__mapid = "#" + getNextId();
        this.value = new CaughtException(null);
        this.isComputing = false; // to check for cycles
        this.isRunningSetter = false;
        this.isTracing = TraceMode.NONE;
        invariant(options.get, "missing option for computed: get");
        this.derivation = options.get;
        this.name = options.name || "ComputedValue@" + getNextId();
        if (options.set)
            this.setter = createAction(this.name + "-setter", options.set);
        this.equals =
            options.equals ||
                (options.compareStructural || options.struct
                    ? comparer.structural
                    : comparer.default);
        this.scope = options.context;
        this.requiresReaction = !!options.requiresReaction;
        this.keepAlive = !!options.keepAlive;
    }
    ComputedValue.prototype.onBecomeStale = function () {
        propagateMaybeChanged(this);
    };
    ComputedValue.prototype.onBecomeUnobserved = function () { };
    ComputedValue.prototype.onBecomeObserved = function () { };
    /**
     * Returns the current value of this computed value.
     * Will evaluate its computation first if needed.
     */
    ComputedValue.prototype.get = function () {
        if (this.isComputing)
            fail("Cycle detected in computation " + this.name + ": " + this.derivation);
        if (globalState.inBatch === 0 && this.observers.length === 0 && !this.keepAlive) {
            if (shouldCompute(this)) {
                this.warnAboutUntrackedRead();
                startBatch(); // See perf test 'computed memoization'
                this.value = this.computeValue(false);
                endBatch();
            }
        }
        else {
            reportObserved(this);
            if (shouldCompute(this))
                if (this.trackAndCompute())
                    propagateChangeConfirmed(this);
        }
        var result = this.value;
        if (isCaughtException(result))
            throw result.cause;
        return result;
    };
    ComputedValue.prototype.peek = function () {
        var res = this.computeValue(false);
        if (isCaughtException(res))
            throw res.cause;
        return res;
    };
    ComputedValue.prototype.set = function (value) {
        if (this.setter) {
            invariant(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?");
            this.isRunningSetter = true;
            try {
                this.setter.call(this.scope, value);
            }
            finally {
                this.isRunningSetter = false;
            }
        }
        else
            invariant(false,  false &&
                false);
    };
    ComputedValue.prototype.trackAndCompute = function () {
        if (isSpyEnabled()) {
            spyReport({
                object: this.scope,
                type: "compute",
                name: this.name
            });
        }
        var oldValue = this.value;
        var wasSuspended = 
        /* see #1208 */ this.dependenciesState === IDerivationState.NOT_TRACKING;
        var newValue = this.computeValue(true);
        var changed = wasSuspended ||
            isCaughtException(oldValue) ||
            isCaughtException(newValue) ||
            !this.equals(oldValue, newValue);
        if (changed) {
            this.value = newValue;
        }
        return changed;
    };
    ComputedValue.prototype.computeValue = function (track) {
        this.isComputing = true;
        globalState.computationDepth++;
        var res;
        if (track) {
            res = trackDerivedFunction(this, this.derivation, this.scope);
        }
        else {
            if (globalState.disableErrorBoundaries === true) {
                res = this.derivation.call(this.scope);
            }
            else {
                try {
                    res = this.derivation.call(this.scope);
                }
                catch (e) {
                    res = new CaughtException(e);
                }
            }
        }
        globalState.computationDepth--;
        this.isComputing = false;
        return res;
    };
    ComputedValue.prototype.suspend = function () {
        if (!this.keepAlive) {
            clearObserving(this);
            this.value = undefined; // don't hold on to computed value!
        }
    };
    ComputedValue.prototype.observe = function (listener, fireImmediately) {
        var _this = this;
        var firstTime = true;
        var prevValue = undefined;
        return autorun(function () {
            var newValue = _this.get();
            if (!firstTime || fireImmediately) {
                var prevU = untrackedStart();
                listener({
                    type: "update",
                    object: _this,
                    newValue: newValue,
                    oldValue: prevValue
                });
                untrackedEnd(prevU);
            }
            firstTime = false;
            prevValue = newValue;
        });
    };
    ComputedValue.prototype.warnAboutUntrackedRead = function () {
        if (true)
            return;
        if (this.requiresReaction === true) {
            fail("[mobx] Computed value " + this.name + " is read outside a reactive context");
        }
        if (this.isTracing !== TraceMode.NONE) {
            console.log("[mobx.trace] '" + this.name + "' is being read outside a reactive context. Doing a full recompute");
        }
        if (globalState.computedRequiresReaction) {
            console.warn("[mobx] Computed value " + this.name + " is being read outside a reactive context. Doing a full recompute");
        }
    };
    ComputedValue.prototype.toJSON = function () {
        return this.get();
    };
    ComputedValue.prototype.toString = function () {
        return this.name + "[" + this.derivation.toString() + "]";
    };
    ComputedValue.prototype.valueOf = function () {
        return toPrimitive(this.get());
    };
    return ComputedValue;
}());
ComputedValue.prototype[primitiveSymbol()] = ComputedValue.prototype.valueOf;
var isComputedValue = createInstanceofPredicate("ComputedValue", ComputedValue);

/**
 * These values will persist if global state is reset
 */
var persistentKeys = [
    "mobxGuid",
    "spyListeners",
    "enforceActions",
    "computedRequiresReaction",
    "reactionRequiresObservable",
    "observableRequiresReaction",
    "allowStateReads",
    "disableErrorBoundaries",
    "runId",
    "UNCHANGED"
];
var MobXGlobals = /** @class */ (function () {
    function MobXGlobals() {
        /**
         * MobXGlobals version.
         * MobX compatiblity with other versions loaded in memory as long as this version matches.
         * It indicates that the global state still stores similar information
         *
         * N.B: this version is unrelated to the package version of MobX, and is only the version of the
         * internal state storage of MobX, and can be the same across many different package versions
         */
        this.version = 5;
        /**
         * globally unique token to signal unchanged
         */
        this.UNCHANGED = {};
        /**
         * Currently running derivation
         */
        this.trackingDerivation = null;
        /**
         * Are we running a computation currently? (not a reaction)
         */
        this.computationDepth = 0;
        /**
         * Each time a derivation is tracked, it is assigned a unique run-id
         */
        this.runId = 0;
        /**
         * 'guid' for general purpose. Will be persisted amongst resets.
         */
        this.mobxGuid = 0;
        /**
         * Are we in a batch block? (and how many of them)
         */
        this.inBatch = 0;
        /**
         * Observables that don't have observers anymore, and are about to be
         * suspended, unless somebody else accesses it in the same batch
         *
         * @type {IObservable[]}
         */
        this.pendingUnobservations = [];
        /**
         * List of scheduled, not yet executed, reactions.
         */
        this.pendingReactions = [];
        /**
         * Are we currently processing reactions?
         */
        this.isRunningReactions = false;
        /**
         * Is it allowed to change observables at this point?
         * In general, MobX doesn't allow that when running computations and React.render.
         * To ensure that those functions stay pure.
         */
        this.allowStateChanges = true;
        /**
         * Is it allowed to read observables at this point?
         * Used to hold the state needed for `observableRequiresReaction`
         */
        this.allowStateReads = true;
        /**
         * If strict mode is enabled, state changes are by default not allowed
         */
        this.enforceActions = false;
        /**
         * Spy callbacks
         */
        this.spyListeners = [];
        /**
         * Globally attached error handlers that react specifically to errors in reactions
         */
        this.globalReactionErrorHandlers = [];
        /**
         * Warn if computed values are accessed outside a reactive context
         */
        this.computedRequiresReaction = false;
        /**
         * (Experimental)
         * Warn if you try to create to derivation / reactive context without accessing any observable.
         */
        this.reactionRequiresObservable = false;
        /**
         * (Experimental)
         * Warn if observables are accessed outside a reactive context
         */
        this.observableRequiresReaction = false;
        /**
         * Allows overwriting of computed properties, useful in tests but not prod as it can cause
         * memory leaks. See https://github.com/mobxjs/mobx/issues/1867
         */
        this.computedConfigurable = false;
        /*
         * Don't catch and rethrow exceptions. This is useful for inspecting the state of
         * the stack when an exception occurs while debugging.
         */
        this.disableErrorBoundaries = false;
        /*
         * If true, we are already handling an exception in an action. Any errors in reactions should be supressed, as
         * they are not the cause, see: https://github.com/mobxjs/mobx/issues/1836
         */
        this.suppressReactionErrors = false;
    }
    return MobXGlobals;
}());
var canMergeGlobalState = true;
var isolateCalled = false;
var globalState = (function () {
    var global = getGlobal();
    if (global.__mobxInstanceCount > 0 && !global.__mobxGlobals)
        canMergeGlobalState = false;
    if (global.__mobxGlobals && global.__mobxGlobals.version !== new MobXGlobals().version)
        canMergeGlobalState = false;
    if (!canMergeGlobalState) {
        setTimeout(function () {
            if (!isolateCalled) {
                fail("There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`");
            }
        }, 1);
        return new MobXGlobals();
    }
    else if (global.__mobxGlobals) {
        global.__mobxInstanceCount += 1;
        if (!global.__mobxGlobals.UNCHANGED)
            global.__mobxGlobals.UNCHANGED = {}; // make merge backward compatible
        return global.__mobxGlobals;
    }
    else {
        global.__mobxInstanceCount = 1;
        return (global.__mobxGlobals = new MobXGlobals());
    }
})();
function isolateGlobalState() {
    if (globalState.pendingReactions.length ||
        globalState.inBatch ||
        globalState.isRunningReactions)
        fail("isolateGlobalState should be called before MobX is running any reactions");
    isolateCalled = true;
    if (canMergeGlobalState) {
        if (--getGlobal().__mobxInstanceCount === 0)
            getGlobal().__mobxGlobals = undefined;
        globalState = new MobXGlobals();
    }
}
function getGlobalState() {
    return globalState;
}
/**
 * For testing purposes only; this will break the internal state of existing observables,
 * but can be used to get back at a stable state after throwing errors
 */
function resetGlobalState() {
    var defaultGlobals = new MobXGlobals();
    for (var key in defaultGlobals)
        if (persistentKeys.indexOf(key) === -1)
            globalState[key] = defaultGlobals[key];
    globalState.allowStateChanges = !globalState.enforceActions;
}

function hasObservers(observable) {
    return observable.observers && observable.observers.length > 0;
}
function getObservers(observable) {
    return observable.observers;
}
// function invariantObservers(observable: IObservable) {
//     const list = observable.observers
//     const map = observable.observersIndexes
//     const l = list.length
//     for (let i = 0; i < l; i++) {
//         const id = list[i].__mapid
//         if (i) {
//             invariant(map[id] === i, "INTERNAL ERROR maps derivation.__mapid to index in list") // for performance
//         } else {
//             invariant(!(id in map), "INTERNAL ERROR observer on index 0 shouldn't be held in map.") // for performance
//         }
//     }
//     invariant(
//         list.length === 0 || Object.keys(map).length === list.length - 1,
//         "INTERNAL ERROR there is no junk in map"
//     )
// }
function addObserver(observable, node) {
    // invariant(node.dependenciesState !== -1, "INTERNAL ERROR, can add only dependenciesState !== -1");
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR add already added node");
    // invariantObservers(observable);
    var l = observable.observers.length;
    if (l) {
        // because object assignment is relatively expensive, let's not store data about index 0.
        observable.observersIndexes[node.__mapid] = l;
    }
    observable.observers[l] = node;
    if (observable.lowestObserverState > node.dependenciesState)
        observable.lowestObserverState = node.dependenciesState;
    // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR didn't add node");
}
function removeObserver(observable, node) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR remove already removed node");
    // invariantObservers(observable);
    if (observable.observers.length === 1) {
        // deleting last observer
        observable.observers.length = 0;
        queueForUnobservation(observable);
    }
    else {
        // deleting from _observersIndexes is straight forward, to delete from _observers, let's swap `node` with last element
        var list = observable.observers;
        var map = observable.observersIndexes;
        var filler = list.pop(); // get last element, which should fill the place of `node`, so the array doesn't have holes
        if (filler !== node) {
            // otherwise node was the last element, which already got removed from array
            var index = map[node.__mapid] || 0; // getting index of `node`. this is the only place we actually use map.
            if (index) {
                // map store all indexes but 0, see comment in `addObserver`
                map[filler.__mapid] = index;
            }
            else {
                delete map[filler.__mapid];
            }
            list[index] = filler;
        }
        delete map[node.__mapid];
    }
    // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR remove already removed node2");
}
function queueForUnobservation(observable) {
    if (observable.isPendingUnobservation === false) {
        // invariant(observable._observers.length === 0, "INTERNAL ERROR, should only queue for unobservation unobserved observables");
        observable.isPendingUnobservation = true;
        globalState.pendingUnobservations.push(observable);
    }
}
/**
 * Batch starts a transaction, at least for purposes of memoizing ComputedValues when nothing else does.
 * During a batch `onBecomeUnobserved` will be called at most once per observable.
 * Avoids unnecessary recalculations.
 */
function startBatch() {
    globalState.inBatch++;
}
function endBatch() {
    if (--globalState.inBatch === 0) {
        runReactions();
        // the batch is actually about to finish, all unobserving should happen here.
        var list = globalState.pendingUnobservations;
        for (var i = 0; i < list.length; i++) {
            var observable = list[i];
            observable.isPendingUnobservation = false;
            if (observable.observers.length === 0) {
                if (observable.isBeingObserved) {
                    // if this observable had reactive observers, trigger the hooks
                    observable.isBeingObserved = false;
                    observable.onBecomeUnobserved();
                }
                if (observable instanceof ComputedValue) {
                    // computed values are automatically teared down when the last observer leaves
                    // this process happens recursively, this computed might be the last observable of another, etc..
                    observable.suspend();
                }
            }
        }
        globalState.pendingUnobservations = [];
    }
}
function reportObserved(observable) {
    checkIfStateReadsAreAllowed(observable);
    var derivation = globalState.trackingDerivation;
    if (derivation !== null) {
        /**
         * Simple optimization, give each derivation run an unique id (runId)
         * Check if last time this observable was accessed the same runId is used
         * if this is the case, the relation is already known
         */
        if (derivation.runId !== observable.lastAccessedBy) {
            observable.lastAccessedBy = derivation.runId;
            derivation.newObserving[derivation.unboundDepsCount++] = observable;
            if (!observable.isBeingObserved) {
                observable.isBeingObserved = true;
                observable.onBecomeObserved();
            }
        }
        return true;
    }
    else if (observable.observers.length === 0 && globalState.inBatch > 0) {
        queueForUnobservation(observable);
    }
    return false;
}
// function invariantLOS(observable: IObservable, msg: string) {
//     // it's expensive so better not run it in produciton. but temporarily helpful for testing
//     const min = getObservers(observable).reduce((a, b) => Math.min(a, b.dependenciesState), 2)
//     if (min >= observable.lowestObserverState) return // <- the only assumption about `lowestObserverState`
//     throw new Error(
//         "lowestObserverState is wrong for " +
//             msg +
//             " because " +
//             min +
//             " < " +
//             observable.lowestObserverState
//     )
// }
/**
 * NOTE: current propagation mechanism will in case of self reruning autoruns behave unexpectedly
 * It will propagate changes to observers from previous run
 * It's hard or maybe impossible (with reasonable perf) to get it right with current approach
 * Hopefully self reruning autoruns aren't a feature people should depend on
 * Also most basic use cases should be ok
 */
// Called by Atom when its value changes
function propagateChanged(observable) {
    // invariantLOS(observable, "changed start");
    if (observable.lowestObserverState === IDerivationState.STALE)
        return;
    observable.lowestObserverState = IDerivationState.STALE;
    var observers = observable.observers;
    var i = observers.length;
    while (i--) {
        var d = observers[i];
        if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
            if (d.isTracing !== TraceMode.NONE) {
                logTraceInfo(d, observable);
            }
            d.onBecomeStale();
        }
        d.dependenciesState = IDerivationState.STALE;
    }
    // invariantLOS(observable, "changed end");
}
// Called by ComputedValue when it recalculate and its value changed
function propagateChangeConfirmed(observable) {
    // invariantLOS(observable, "confirmed start");
    if (observable.lowestObserverState === IDerivationState.STALE)
        return;
    observable.lowestObserverState = IDerivationState.STALE;
    var observers = observable.observers;
    var i = observers.length;
    while (i--) {
        var d = observers[i];
        if (d.dependenciesState === IDerivationState.POSSIBLY_STALE)
            d.dependenciesState = IDerivationState.STALE;
        else if (d.dependenciesState === IDerivationState.UP_TO_DATE // this happens during computing of `d`, just keep lowestObserverState up to date.
        )
            observable.lowestObserverState = IDerivationState.UP_TO_DATE;
    }
    // invariantLOS(observable, "confirmed end");
}
// Used by computed when its dependency changed, but we don't wan't to immediately recompute.
function propagateMaybeChanged(observable) {
    // invariantLOS(observable, "maybe start");
    if (observable.lowestObserverState !== IDerivationState.UP_TO_DATE)
        return;
    observable.lowestObserverState = IDerivationState.POSSIBLY_STALE;
    var observers = observable.observers;
    var i = observers.length;
    while (i--) {
        var d = observers[i];
        if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
            d.dependenciesState = IDerivationState.POSSIBLY_STALE;
            if (d.isTracing !== TraceMode.NONE) {
                logTraceInfo(d, observable);
            }
            d.onBecomeStale();
        }
    }
    // invariantLOS(observable, "maybe end");
}
function logTraceInfo(derivation, observable) {
    console.log("[mobx.trace] '" + derivation.name + "' is invalidated due to a change in: '" + observable.name + "'");
    if (derivation.isTracing === TraceMode.BREAK) {
        var lines = [];
        printDepTree(getDependencyTree(derivation), lines, 1);
        // prettier-ignore
        new Function("debugger;\n/*\nTracing '" + derivation.name + "'\n\nYou are entering this break point because derivation '" + derivation.name + "' is being traced and '" + observable.name + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (derivation instanceof ComputedValue ? derivation.derivation.toString().replace(/[*]\//g, "/") : "") + "\n\nThe dependencies for this derivation are:\n\n" + lines.join("\n") + "\n*/\n    ")();
    }
}
function printDepTree(tree, lines, depth) {
    if (lines.length >= 1000) {
        lines.push("(and many more)");
        return;
    }
    lines.push("" + new Array(depth).join("\t") + tree.name); // MWE: not the fastest, but the easiest way :)
    if (tree.dependencies)
        tree.dependencies.forEach(function (child) { return printDepTree(child, lines, depth + 1); });
}

var Reaction = /** @class */ (function () {
    function Reaction(name, onInvalidate, errorHandler, requiresObservable) {
        if (name === void 0) { name = "Reaction@" + getNextId(); }
        if (requiresObservable === void 0) { requiresObservable = false; }
        this.name = name;
        this.onInvalidate = onInvalidate;
        this.errorHandler = errorHandler;
        this.requiresObservable = requiresObservable;
        this.observing = []; // nodes we are looking at. Our value depends on these nodes
        this.newObserving = [];
        this.dependenciesState = IDerivationState.NOT_TRACKING;
        this.diffValue = 0;
        this.runId = 0;
        this.unboundDepsCount = 0;
        this.__mapid = "#" + getNextId();
        this.isDisposed = false;
        this._isScheduled = false;
        this._isTrackPending = false;
        this._isRunning = false;
        this.isTracing = TraceMode.NONE;
    }
    Reaction.prototype.onBecomeStale = function () {
        this.schedule();
    };
    Reaction.prototype.schedule = function () {
        if (!this._isScheduled) {
            this._isScheduled = true;
            globalState.pendingReactions.push(this);
            runReactions();
        }
    };
    Reaction.prototype.isScheduled = function () {
        return this._isScheduled;
    };
    /**
     * internal, use schedule() if you intend to kick off a reaction
     */
    Reaction.prototype.runReaction = function () {
        if (!this.isDisposed) {
            startBatch();
            this._isScheduled = false;
            if (shouldCompute(this)) {
                this._isTrackPending = true;
                try {
                    this.onInvalidate();
                    if (this._isTrackPending && isSpyEnabled()) {
                        // onInvalidate didn't trigger track right away..
                        spyReport({
                            name: this.name,
                            type: "scheduled-reaction"
                        });
                    }
                }
                catch (e) {
                    this.reportExceptionInDerivation(e);
                }
            }
            endBatch();
        }
    };
    Reaction.prototype.track = function (fn) {
        startBatch();
        var notify = isSpyEnabled();
        var startTime;
        if (notify) {
            startTime = Date.now();
            spyReportStart({
                name: this.name,
                type: "reaction"
            });
        }
        this._isRunning = true;
        var result = trackDerivedFunction(this, fn, undefined);
        this._isRunning = false;
        this._isTrackPending = false;
        if (this.isDisposed) {
            // disposed during last run. Clean up everything that was bound after the dispose call.
            clearObserving(this);
        }
        if (isCaughtException(result))
            this.reportExceptionInDerivation(result.cause);
        if (notify) {
            spyReportEnd({
                time: Date.now() - startTime
            });
        }
        endBatch();
    };
    Reaction.prototype.reportExceptionInDerivation = function (error) {
        var _this = this;
        if (this.errorHandler) {
            this.errorHandler(error, this);
            return;
        }
        if (globalState.disableErrorBoundaries)
            throw error;
        var message = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'";
        if (globalState.suppressReactionErrors) {
            console.warn("[mobx] (error in reaction '" + this.name + "' suppressed, fix error of causing action below)"); // prettier-ignore
        }
        else {
            console.error(message, error);
            /** If debugging brought you here, please, read the above message :-). Tnx! */
        }
        if (isSpyEnabled()) {
            spyReport({
                type: "error",
                name: this.name,
                message: message,
                error: "" + error
            });
        }
        globalState.globalReactionErrorHandlers.forEach(function (f) { return f(error, _this); });
    };
    Reaction.prototype.dispose = function () {
        if (!this.isDisposed) {
            this.isDisposed = true;
            if (!this._isRunning) {
                // if disposed while running, clean up later. Maybe not optimal, but rare case
                startBatch();
                clearObserving(this);
                endBatch();
            }
        }
    };
    Reaction.prototype.getDisposer = function () {
        var r = this.dispose.bind(this);
        r.$mobx = this;
        return r;
    };
    Reaction.prototype.toString = function () {
        return "Reaction[" + this.name + "]";
    };
    Reaction.prototype.trace = function (enterBreakPoint) {
        if (enterBreakPoint === void 0) { enterBreakPoint = false; }
        trace(this, enterBreakPoint);
    };
    return Reaction;
}());
function onReactionError(handler) {
    globalState.globalReactionErrorHandlers.push(handler);
    return function () {
        var idx = globalState.globalReactionErrorHandlers.indexOf(handler);
        if (idx >= 0)
            globalState.globalReactionErrorHandlers.splice(idx, 1);
    };
}
/**
 * Magic number alert!
 * Defines within how many times a reaction is allowed to re-trigger itself
 * until it is assumed that this is gonna be a never ending loop...
 */
var MAX_REACTION_ITERATIONS = 100;
var reactionScheduler = function (f) { return f(); };
function runReactions() {
    // Trampolining, if runReactions are already running, new reactions will be picked up
    if (globalState.inBatch > 0 || globalState.isRunningReactions)
        return;
    reactionScheduler(runReactionsHelper);
}
function runReactionsHelper() {
    globalState.isRunningReactions = true;
    var allReactions = globalState.pendingReactions;
    var iterations = 0;
    // While running reactions, new reactions might be triggered.
    // Hence we work with two variables and check whether
    // we converge to no remaining reactions after a while.
    while (allReactions.length > 0) {
        if (++iterations === MAX_REACTION_ITERATIONS) {
            console.error("Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations." +
                (" Probably there is a cycle in the reactive function: " + allReactions[0]));
            allReactions.splice(0); // clear reactions
        }
        var remainingReactions = allReactions.splice(0);
        for (var i = 0, l = remainingReactions.length; i < l; i++)
            remainingReactions[i].runReaction();
    }
    globalState.isRunningReactions = false;
}
var isReaction = createInstanceofPredicate("Reaction", Reaction);
function setReactionScheduler(fn) {
    var baseScheduler = reactionScheduler;
    reactionScheduler = function (f) { return fn(function () { return baseScheduler(f); }); };
}

function isSpyEnabled() {
    return !!globalState.spyListeners.length;
}
function spyReport(event) {
    if (!globalState.spyListeners.length)
        return;
    var listeners = globalState.spyListeners;
    for (var i = 0, l = listeners.length; i < l; i++)
        listeners[i](event);
}
function spyReportStart(event) {
    var change = __assign(__assign({}, event), { spyReportStart: true });
    spyReport(change);
}
var END_EVENT = { spyReportEnd: true };
function spyReportEnd(change) {
    if (change)
        spyReport(__assign(__assign({}, change), { spyReportEnd: true }));
    else
        spyReport(END_EVENT);
}
function spy(listener) {
    globalState.spyListeners.push(listener);
    return once(function () {
        globalState.spyListeners = globalState.spyListeners.filter(function (l) { return l !== listener; });
    });
}

function dontReassignFields() {
    fail( false && false);
}
function namedActionDecorator(name) {
    return function (target, prop, descriptor) {
        if (descriptor) {
            if (false) {}
            // babel / typescript
            // @action method() { }
            if (descriptor.value) {
                // typescript
                return {
                    value: createAction(name, descriptor.value),
                    enumerable: false,
                    configurable: true,
                    writable: true // for typescript, this must be writable, otherwise it cannot inherit :/ (see inheritable actions test)
                };
            }
            // babel only: @action method = () => {}
            var initializer_1 = descriptor.initializer;
            return {
                enumerable: false,
                configurable: true,
                writable: true,
                initializer: function () {
                    // N.B: we can't immediately invoke initializer; this would be wrong
                    return createAction(name, initializer_1.call(this));
                }
            };
        }
        // bound instance methods
        return actionFieldDecorator(name).apply(this, arguments);
    };
}
function actionFieldDecorator(name) {
    // Simple property that writes on first invocation to the current instance
    return function (target, prop, descriptor) {
        Object.defineProperty(target, prop, {
            configurable: true,
            enumerable: false,
            get: function () {
                return undefined;
            },
            set: function (value) {
                addHiddenProp(this, prop, action(name, value));
            }
        });
    };
}
function boundActionDecorator(target, propertyName, descriptor, applyToInstance) {
    if (applyToInstance === true) {
        defineBoundAction(target, propertyName, descriptor.value);
        return null;
    }
    if (descriptor) {
        // if (descriptor.value)
        // Typescript / Babel: @action.bound method() { }
        // also: babel @action.bound method = () => {}
        return {
            configurable: true,
            enumerable: false,
            get: function () {
                defineBoundAction(this, propertyName, descriptor.value || descriptor.initializer.call(this));
                return this[propertyName];
            },
            set: dontReassignFields
        };
    }
    // field decorator Typescript @action.bound method = () => {}
    return {
        enumerable: false,
        configurable: true,
        set: function (v) {
            defineBoundAction(this, propertyName, v);
        },
        get: function () {
            return undefined;
        }
    };
}

var action = function action(arg1, arg2, arg3, arg4) {
    // action(fn() {})
    if (arguments.length === 1 && typeof arg1 === "function")
        return createAction(arg1.name || "<unnamed action>", arg1);
    // action("name", fn() {})
    if (arguments.length === 2 && typeof arg2 === "function")
        return createAction(arg1, arg2);
    // @action("name") fn() {}
    if (arguments.length === 1 && typeof arg1 === "string")
        return namedActionDecorator(arg1);
    // @action fn() {}
    if (arg4 === true) {
        // apply to instance immediately
        arg1[arg2] = createAction(arg1.name || arg2, arg3.value);
    }
    else {
        return namedActionDecorator(arg2).apply(null, arguments);
    }
};
action.bound = boundActionDecorator;
function runInAction(arg1, arg2) {
    // TODO: deprecate?
    var actionName = typeof arg1 === "string" ? arg1 : arg1.name || "<unnamed action>";
    var fn = typeof arg1 === "function" ? arg1 : arg2;
    if (false) {}
    return executeAction(actionName, fn, this, undefined);
}
function isAction(thing) {
    return typeof thing === "function" && thing.isMobxAction === true;
}
function defineBoundAction(target, propertyName, fn) {
    addHiddenProp(target, propertyName, createAction(propertyName, fn.bind(target)));
}

/**
 * Creates a named reactive view and keeps it alive, so that the view is always
 * updated if one of the dependencies changes, even when the view is not further used by something else.
 * @param view The reactive view
 * @returns disposer function, which can be used to stop the view from being updated in the future.
 */
function autorun(view, opts) {
    if (opts === void 0) { opts = EMPTY_OBJECT; }
    if (false) {}
    var name = (opts && opts.name) || view.name || "Autorun@" + getNextId();
    var runSync = !opts.scheduler && !opts.delay;
    var reaction;
    if (runSync) {
        // normal autorun
        reaction = new Reaction(name, function () {
            this.track(reactionRunner);
        }, opts.onError, opts.requiresObservable);
    }
    else {
        var scheduler_1 = createSchedulerFromOptions(opts);
        // debounced autorun
        var isScheduled_1 = false;
        reaction = new Reaction(name, function () {
            if (!isScheduled_1) {
                isScheduled_1 = true;
                scheduler_1(function () {
                    isScheduled_1 = false;
                    if (!reaction.isDisposed)
                        reaction.track(reactionRunner);
                });
            }
        }, opts.onError, opts.requiresObservable);
    }
    function reactionRunner() {
        view(reaction);
    }
    reaction.schedule();
    return reaction.getDisposer();
}
var run = function (f) { return f(); };
function createSchedulerFromOptions(opts) {
    return opts.scheduler
        ? opts.scheduler
        : opts.delay
            ? function (f) { return setTimeout(f, opts.delay); }
            : run;
}
function reaction(expression, effect, opts) {
    if (opts === void 0) { opts = EMPTY_OBJECT; }
    if (typeof opts === "boolean") {
        opts = { fireImmediately: opts };
        deprecated("Using fireImmediately as argument is deprecated. Use '{ fireImmediately: true }' instead");
    }
    if (false) {}
    var name = opts.name || "Reaction@" + getNextId();
    var effectAction = action(name, opts.onError ? wrapErrorHandler(opts.onError, effect) : effect);
    var runSync = !opts.scheduler && !opts.delay;
    var scheduler = createSchedulerFromOptions(opts);
    var firstTime = true;
    var isScheduled = false;
    var value;
    var equals = opts.compareStructural
        ? comparer.structural
        : opts.equals || comparer.default;
    var r = new Reaction(name, function () {
        if (firstTime || runSync) {
            reactionRunner();
        }
        else if (!isScheduled) {
            isScheduled = true;
            scheduler(reactionRunner);
        }
    }, opts.onError, opts.requiresObservable);
    function reactionRunner() {
        isScheduled = false; // Q: move into reaction runner?
        if (r.isDisposed)
            return;
        var changed = false;
        r.track(function () {
            var nextValue = expression(r);
            changed = firstTime || !equals(value, nextValue);
            value = nextValue;
        });
        if (firstTime && opts.fireImmediately)
            effectAction(value, r);
        if (!firstTime && changed === true)
            effectAction(value, r);
        if (firstTime)
            firstTime = false;
    }
    r.schedule();
    return r.getDisposer();
}
function wrapErrorHandler(errorHandler, baseFn) {
    return function () {
        try {
            return baseFn.apply(this, arguments);
        }
        catch (e) {
            errorHandler.call(this, e);
        }
    };
}

function onBecomeObserved(thing, arg2, arg3) {
    return interceptHook("onBecomeObserved", thing, arg2, arg3);
}
function onBecomeUnobserved(thing, arg2, arg3) {
    return interceptHook("onBecomeUnobserved", thing, arg2, arg3);
}
function interceptHook(hook, thing, arg2, arg3) {
    var atom = typeof arg3 === "function" ? getAtom(thing, arg2) : getAtom(thing);
    var cb = typeof arg3 === "function" ? arg3 : arg2;
    var orig = atom[hook];
    if (typeof orig !== "function")
        return fail( false && false);
    atom[hook] = function () {
        orig.call(this);
        cb.call(this);
    };
    return function () {
        atom[hook] = orig;
    };
}

function configure(options) {
    var enforceActions = options.enforceActions, computedRequiresReaction = options.computedRequiresReaction, computedConfigurable = options.computedConfigurable, disableErrorBoundaries = options.disableErrorBoundaries, arrayBuffer = options.arrayBuffer, reactionScheduler = options.reactionScheduler, reactionRequiresObservable = options.reactionRequiresObservable, observableRequiresReaction = options.observableRequiresReaction;
    if (options.isolateGlobalState === true) {
        isolateGlobalState();
    }
    if (enforceActions !== undefined) {
        if (typeof enforceActions === "boolean" || enforceActions === "strict")
            deprecated("Deprecated value for 'enforceActions', use 'false' => '\"never\"', 'true' => '\"observed\"', '\"strict\"' => \"'always'\" instead");
        var ea = void 0;
        switch (enforceActions) {
            case true:
            case "observed":
                ea = true;
                break;
            case false:
            case "never":
                ea = false;
                break;
            case "strict":
            case "always":
                ea = "strict";
                break;
            default:
                fail("Invalid value for 'enforceActions': '" + enforceActions + "', expected 'never', 'always' or 'observed'");
        }
        globalState.enforceActions = ea;
        globalState.allowStateChanges = ea === true || ea === "strict" ? false : true;
    }
    if (computedRequiresReaction !== undefined) {
        globalState.computedRequiresReaction = !!computedRequiresReaction;
    }
    if (reactionRequiresObservable !== undefined) {
        globalState.reactionRequiresObservable = !!reactionRequiresObservable;
    }
    if (observableRequiresReaction !== undefined) {
        globalState.observableRequiresReaction = !!observableRequiresReaction;
        globalState.allowStateReads = !globalState.observableRequiresReaction;
    }
    if (computedConfigurable !== undefined) {
        globalState.computedConfigurable = !!computedConfigurable;
    }
    if (disableErrorBoundaries !== undefined) {
        if (disableErrorBoundaries === true)
            console.warn("WARNING: Debug feature only. MobX will NOT recover from errors if this is on.");
        globalState.disableErrorBoundaries = !!disableErrorBoundaries;
    }
    if (typeof arrayBuffer === "number") {
        reserveArrayBuffer(arrayBuffer);
    }
    if (reactionScheduler) {
        setReactionScheduler(reactionScheduler);
    }
}

function decorate(thing, decorators) {
    if (false)
        {}
    var target = typeof thing === "function" ? thing.prototype : thing;
    var _loop_1 = function (prop) {
        var propertyDecorators = decorators[prop];
        if (!Array.isArray(propertyDecorators)) {
            propertyDecorators = [propertyDecorators];
        }
        // prettier-ignore
        if (false)
            {}
        var descriptor = Object.getOwnPropertyDescriptor(target, prop);
        var newDescriptor = propertyDecorators.reduce(function (accDescriptor, decorator) { return decorator(target, prop, accDescriptor); }, descriptor);
        if (newDescriptor)
            Object.defineProperty(target, prop, newDescriptor);
    };
    for (var prop in decorators) {
        _loop_1(prop);
    }
    return thing;
}

function extendShallowObservable(target, properties, decorators) {
    deprecated("'extendShallowObservable' is deprecated, use 'extendObservable(target, props, { deep: false })' instead");
    return extendObservable(target, properties, decorators, shallowCreateObservableOptions);
}
function extendObservable(target, properties, decorators, options) {
    if (false) { var key; }
    options = asCreateObservableOptions(options);
    var defaultDecorator = options.defaultDecorator || (options.deep === false ? refDecorator : deepDecorator);
    initializeInstance(target);
    asObservableObject(target, options.name, defaultDecorator.enhancer); // make sure object is observable, even without initial props
    startBatch();
    try {
        var keys = Object.getOwnPropertyNames(properties);
        for (var i = 0, l = keys.length; i < l; i++) {
            var key = keys[i];
            var descriptor = Object.getOwnPropertyDescriptor(properties, key);
            if (false) {}
            var decorator = decorators && key in decorators
                ? decorators[key]
                : descriptor.get
                    ? computedDecorator
                    : defaultDecorator;
            if (false)
                {}
            var resultDescriptor = decorator(target, key, descriptor, true);
            if (resultDescriptor // otherwise, assume already applied, due to `applyToInstance`
            )
                Object.defineProperty(target, key, resultDescriptor);
        }
    }
    finally {
        endBatch();
    }
    return target;
}

function getDependencyTree(thing, property) {
    return nodeToDependencyTree(getAtom(thing, property));
}
function nodeToDependencyTree(node) {
    var result = {
        name: node.name
    };
    if (node.observing && node.observing.length > 0)
        result.dependencies = unique(node.observing).map(nodeToDependencyTree);
    return result;
}
function getObserverTree(thing, property) {
    return nodeToObserverTree(getAtom(thing, property));
}
function nodeToObserverTree(node) {
    var result = {
        name: node.name
    };
    if (hasObservers(node))
        result.observers = getObservers(node).map(nodeToObserverTree);
    return result;
}

var generatorId = 0;
function FlowCancellationError() {
    this.message = "FLOW_CANCELLED";
}
FlowCancellationError.prototype = Object.create(Error.prototype);
function isFlowCancellationError(error) {
    return error instanceof FlowCancellationError;
}
function flow(generator) {
    if (arguments.length !== 1)
        fail( true && "Flow expects one 1 argument and cannot be used as decorator");
    var name = generator.name || "<unnamed flow>";
    // Implementation based on https://github.com/tj/co/blob/master/index.js
    return function () {
        var ctx = this;
        var args = arguments;
        var runId = ++generatorId;
        var gen = action(name + " - runid: " + runId + " - init", generator).apply(ctx, args);
        var rejector;
        var pendingPromise = undefined;
        var res = new Promise(function (resolve, reject) {
            var stepId = 0;
            rejector = reject;
            function onFulfilled(res) {
                pendingPromise = undefined;
                var ret;
                try {
                    ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.next).call(gen, res);
                }
                catch (e) {
                    return reject(e);
                }
                next(ret);
            }
            function onRejected(err) {
                pendingPromise = undefined;
                var ret;
                try {
                    ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.throw).call(gen, err);
                }
                catch (e) {
                    return reject(e);
                }
                next(ret);
            }
            function next(ret) {
                if (ret && typeof ret.then === "function") {
                    // an async iterator
                    ret.then(next, reject);
                    return;
                }
                if (ret.done)
                    return resolve(ret.value);
                pendingPromise = Promise.resolve(ret.value);
                return pendingPromise.then(onFulfilled, onRejected);
            }
            onFulfilled(undefined); // kick off the process
        });
        res.cancel = action(name + " - runid: " + runId + " - cancel", function () {
            try {
                if (pendingPromise)
                    cancelPromise(pendingPromise);
                // Finally block can return (or yield) stuff..
                var res_1 = gen.return(undefined);
                // eat anything that promise would do, it's cancelled!
                var yieldedPromise = Promise.resolve(res_1.value);
                yieldedPromise.then(noop, noop);
                cancelPromise(yieldedPromise); // maybe it can be cancelled :)
                // reject our original promise
                rejector(new FlowCancellationError());
            }
            catch (e) {
                rejector(e); // there could be a throwing finally block
            }
        });
        return res;
    };
}
function cancelPromise(promise) {
    if (typeof promise.cancel === "function")
        promise.cancel();
}

function interceptReads(thing, propOrHandler, handler) {
    var target;
    if (isObservableMap(thing) || isObservableArray(thing) || isObservableValue(thing)) {
        target = getAdministration(thing);
    }
    else if (isObservableObject(thing)) {
        if (typeof propOrHandler !== "string")
            return fail( false &&
                false);
        target = getAdministration(thing, propOrHandler);
    }
    else {
        return fail( false &&
            false);
    }
    if (target.dehancer !== undefined)
        return fail( false && false);
    target.dehancer = typeof propOrHandler === "function" ? propOrHandler : handler;
    return function () {
        target.dehancer = undefined;
    };
}

function intercept(thing, propOrHandler, handler) {
    if (typeof handler === "function")
        return interceptProperty(thing, propOrHandler, handler);
    else
        return interceptInterceptable(thing, propOrHandler);
}
function interceptInterceptable(thing, handler) {
    return getAdministration(thing).intercept(handler);
}
function interceptProperty(thing, property, handler) {
    return getAdministration(thing, property).intercept(handler);
}

function _isComputed(value, property) {
    if (value === null || value === undefined)
        return false;
    if (property !== undefined) {
        if (isObservableObject(value) === false)
            return false;
        if (!value.$mobx.values[property])
            return false;
        var atom = getAtom(value, property);
        return isComputedValue(atom);
    }
    return isComputedValue(value);
}
function isComputed(value) {
    if (arguments.length > 1)
        return fail( false &&
            false);
    return _isComputed(value);
}
function isComputedProp(value, propName) {
    if (typeof propName !== "string")
        return fail( false &&
            false);
    return _isComputed(value, propName);
}

function _isObservable(value, property) {
    if (value === null || value === undefined)
        return false;
    if (property !== undefined) {
        if (false)
            {}
        if (isObservableObject(value)) {
            var o = value.$mobx;
            return o.values && !!o.values[property];
        }
        return false;
    }
    // For first check, see #701
    return (isObservableObject(value) ||
        !!value.$mobx ||
        isAtom(value) ||
        isReaction(value) ||
        isComputedValue(value));
}
function isObservable(value) {
    if (arguments.length !== 1)
        fail( false &&
            false);
    return _isObservable(value);
}
function isObservableProp(value, propName) {
    if (typeof propName !== "string")
        return fail( false && false);
    return _isObservable(value, propName);
}

function keys(obj) {
    if (isObservableObject(obj)) {
        return obj.$mobx.getKeys();
    }
    if (isObservableMap(obj)) {
        return iteratorToArray(obj.keys());
    }
    if (isObservableSet(obj)) {
        return iteratorToArray(obj.keys());
    }
    if (isObservableArray(obj)) {
        return obj.map(function (_, index) { return index; });
    }
    return fail( false &&
        false);
}
function values(obj) {
    if (isObservableObject(obj)) {
        return keys(obj).map(function (key) { return obj[key]; });
    }
    if (isObservableMap(obj)) {
        return keys(obj).map(function (key) { return obj.get(key); });
    }
    if (isObservableSet(obj)) {
        return iteratorToArray(obj.values());
    }
    if (isObservableArray(obj)) {
        return obj.slice();
    }
    return fail( false &&
        false);
}
function entries(obj) {
    if (isObservableObject(obj)) {
        return keys(obj).map(function (key) { return [key, obj[key]]; });
    }
    if (isObservableMap(obj)) {
        return keys(obj).map(function (key) { return [key, obj.get(key)]; });
    }
    if (isObservableSet(obj)) {
        return iteratorToArray(obj.entries());
    }
    if (isObservableArray(obj)) {
        return obj.map(function (key, index) { return [index, key]; });
    }
    return fail( false &&
        false);
}
function set(obj, key, value) {
    if (arguments.length === 2 && !isObservableSet(obj)) {
        startBatch();
        var values_1 = key;
        try {
            for (var key_1 in values_1)
                set(obj, key_1, values_1[key_1]);
        }
        finally {
            endBatch();
        }
        return;
    }
    if (isObservableObject(obj)) {
        var adm = obj.$mobx;
        var existingObservable = adm.values[key];
        if (existingObservable) {
            adm.write(obj, key, value);
        }
        else {
            defineObservableProperty(obj, key, value, adm.defaultEnhancer);
        }
    }
    else if (isObservableMap(obj)) {
        obj.set(key, value);
    }
    else if (isObservableSet(obj)) {
        obj.add(key);
    }
    else if (isObservableArray(obj)) {
        if (typeof key !== "number")
            key = parseInt(key, 10);
        invariant(key >= 0, "Not a valid index: '" + key + "'");
        startBatch();
        if (key >= obj.length)
            obj.length = key + 1;
        obj[key] = value;
        endBatch();
    }
    else {
        return fail( false &&
            false);
    }
}
function remove(obj, key) {
    if (isObservableObject(obj)) {
        obj.$mobx.remove(key);
    }
    else if (isObservableMap(obj)) {
        obj.delete(key);
    }
    else if (isObservableSet(obj)) {
        obj.delete(key);
    }
    else if (isObservableArray(obj)) {
        if (typeof key !== "number")
            key = parseInt(key, 10);
        invariant(key >= 0, "Not a valid index: '" + key + "'");
        obj.splice(key, 1);
    }
    else {
        return fail( false &&
            false);
    }
}
function has(obj, key) {
    if (isObservableObject(obj)) {
        // return keys(obj).indexOf(key) >= 0
        var adm = getAdministration(obj);
        adm.getKeys(); // make sure we get notified of key changes, but for performance, use the values map to look up existence
        return !!adm.values[key];
    }
    else if (isObservableMap(obj)) {
        return obj.has(key);
    }
    else if (isObservableSet(obj)) {
        return obj.has(key);
    }
    else if (isObservableArray(obj)) {
        return key >= 0 && key < obj.length;
    }
    else {
        return fail( false &&
            false);
    }
}
function get(obj, key) {
    if (!has(obj, key))
        return undefined;
    if (isObservableObject(obj)) {
        return obj[key];
    }
    else if (isObservableMap(obj)) {
        return obj.get(key);
    }
    else if (isObservableArray(obj)) {
        return obj[key];
    }
    else {
        return fail( false &&
            false);
    }
}

function observe(thing, propOrCb, cbOrFire, fireImmediately) {
    if (typeof cbOrFire === "function")
        return observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);
    else
        return observeObservable(thing, propOrCb, cbOrFire);
}
function observeObservable(thing, listener, fireImmediately) {
    return getAdministration(thing).observe(listener, fireImmediately);
}
function observeObservableProperty(thing, property, listener, fireImmediately) {
    return getAdministration(thing, property).observe(listener, fireImmediately);
}

var defaultOptions = {
    detectCycles: true,
    exportMapsAsObjects: true,
    recurseEverything: false
};
function cache(map, key, value, options) {
    if (options.detectCycles)
        map.set(key, value);
    return value;
}
function toJSHelper(source, options, __alreadySeen) {
    if (!options.recurseEverything && !isObservable(source))
        return source;
    if (typeof source !== "object")
        return source;
    // Directly return null if source is null
    if (source === null)
        return null;
    // Directly return the Date object itself if contained in the observable
    if (source instanceof Date)
        return source;
    if (isObservableValue(source))
        return toJSHelper(source.get(), options, __alreadySeen);
    // make sure we track the keys of the object
    if (isObservable(source))
        keys(source);
    var detectCycles = options.detectCycles === true;
    if (detectCycles && source !== null && __alreadySeen.has(source)) {
        return __alreadySeen.get(source);
    }
    if (isObservableArray(source) || Array.isArray(source)) {
        var res_1 = cache(__alreadySeen, source, [], options);
        var toAdd = source.map(function (value) { return toJSHelper(value, options, __alreadySeen); });
        res_1.length = toAdd.length;
        for (var i = 0, l = toAdd.length; i < l; i++)
            res_1[i] = toAdd[i];
        return res_1;
    }
    if (isObservableSet(source) || Object.getPrototypeOf(source) === Set.prototype) {
        if (options.exportMapsAsObjects === false) {
            var res_2 = cache(__alreadySeen, source, new Set(), options);
            source.forEach(function (value) {
                res_2.add(toJSHelper(value, options, __alreadySeen));
            });
            return res_2;
        }
        else {
            var res_3 = cache(__alreadySeen, source, [], options);
            source.forEach(function (value) {
                res_3.push(toJSHelper(value, options, __alreadySeen));
            });
            return res_3;
        }
    }
    if (isObservableMap(source) || Object.getPrototypeOf(source) === Map.prototype) {
        if (options.exportMapsAsObjects === false) {
            var res_4 = cache(__alreadySeen, source, new Map(), options);
            source.forEach(function (value, key) {
                res_4.set(key, toJSHelper(value, options, __alreadySeen));
            });
            return res_4;
        }
        else {
            var res_5 = cache(__alreadySeen, source, {}, options);
            source.forEach(function (value, key) {
                res_5[key] = toJSHelper(value, options, __alreadySeen);
            });
            return res_5;
        }
    }
    // Fallback to the situation that source is an ObservableObject or a plain object
    var res = cache(__alreadySeen, source, {}, options);
    for (var key in source) {
        res[key] = toJSHelper(source[key], options, __alreadySeen);
    }
    return res;
}
function toJS(source, options) {
    // backward compatibility
    if (typeof options === "boolean")
        options = { detectCycles: options };
    if (!options)
        options = defaultOptions;
    options.detectCycles =
        options.detectCycles === undefined
            ? options.recurseEverything === true
            : options.detectCycles === true;
    var __alreadySeen;
    if (options.detectCycles)
        __alreadySeen = new Map();
    return toJSHelper(source, options, __alreadySeen);
}

function trace() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var enterBreakPoint = false;
    if (typeof args[args.length - 1] === "boolean")
        enterBreakPoint = args.pop();
    var derivation = getAtomFromArgs(args);
    if (!derivation) {
        return fail( false &&
            false);
    }
    if (derivation.isTracing === TraceMode.NONE) {
        console.log("[mobx.trace] '" + derivation.name + "' tracing enabled");
    }
    derivation.isTracing = enterBreakPoint ? TraceMode.BREAK : TraceMode.LOG;
}
function getAtomFromArgs(args) {
    switch (args.length) {
        case 0:
            return globalState.trackingDerivation;
        case 1:
            return getAtom(args[0]);
        case 2:
            return getAtom(args[0], args[1]);
    }
}

/**
 * During a transaction no views are updated until the end of the transaction.
 * The transaction will be run synchronously nonetheless.
 *
 * @param action a function that updates some reactive state
 * @returns any value that was returned by the 'action' parameter.
 */
function transaction(action, thisArg) {
    if (thisArg === void 0) { thisArg = undefined; }
    startBatch();
    try {
        return action.apply(thisArg);
    }
    finally {
        endBatch();
    }
}

function when(predicate, arg1, arg2) {
    if (arguments.length === 1 || (arg1 && typeof arg1 === "object"))
        return whenPromise(predicate, arg1);
    return _when(predicate, arg1, arg2 || {});
}
function _when(predicate, effect, opts) {
    var timeoutHandle;
    if (typeof opts.timeout === "number") {
        timeoutHandle = setTimeout(function () {
            if (!disposer.$mobx.isDisposed) {
                disposer();
                var error = new Error("WHEN_TIMEOUT");
                if (opts.onError)
                    opts.onError(error);
                else
                    throw error;
            }
        }, opts.timeout);
    }
    opts.name = opts.name || "When@" + getNextId();
    var effectAction = createAction(opts.name + "-effect", effect);
    var disposer = autorun(function (r) {
        if (predicate()) {
            r.dispose();
            if (timeoutHandle)
                clearTimeout(timeoutHandle);
            effectAction();
        }
    }, opts);
    return disposer;
}
function whenPromise(predicate, opts) {
    if (false)
        {}
    var cancel;
    var res = new Promise(function (resolve, reject) {
        var disposer = _when(predicate, resolve, __assign(__assign({}, opts), { onError: reject }));
        cancel = function () {
            disposer();
            reject("WHEN_CANCELLED");
        };
    });
    res.cancel = cancel;
    return res;
}

function hasInterceptors(interceptable) {
    return interceptable.interceptors !== undefined && interceptable.interceptors.length > 0;
}
function registerInterceptor(interceptable, handler) {
    var interceptors = interceptable.interceptors || (interceptable.interceptors = []);
    interceptors.push(handler);
    return once(function () {
        var idx = interceptors.indexOf(handler);
        if (idx !== -1)
            interceptors.splice(idx, 1);
    });
}
function interceptChange(interceptable, change) {
    var prevU = untrackedStart();
    try {
        var interceptors = interceptable.interceptors;
        if (interceptors)
            for (var i = 0, l = interceptors.length; i < l; i++) {
                change = interceptors[i](change);
                invariant(!change || change.type, "Intercept handlers should return nothing or a change object");
                if (!change)
                    break;
            }
        return change;
    }
    finally {
        untrackedEnd(prevU);
    }
}

function hasListeners(listenable) {
    return listenable.changeListeners !== undefined && listenable.changeListeners.length > 0;
}
function registerListener(listenable, handler) {
    var listeners = listenable.changeListeners || (listenable.changeListeners = []);
    listeners.push(handler);
    return once(function () {
        var idx = listeners.indexOf(handler);
        if (idx !== -1)
            listeners.splice(idx, 1);
    });
}
function notifyListeners(listenable, change) {
    var prevU = untrackedStart();
    var listeners = listenable.changeListeners;
    if (!listeners)
        return;
    listeners = listeners.slice();
    for (var i = 0, l = listeners.length; i < l; i++) {
        listeners[i](change);
    }
    untrackedEnd(prevU);
}

var MAX_SPLICE_SIZE = 10000; // See e.g. https://github.com/mobxjs/mobx/issues/859
// Detects bug in safari 9.1.1 (or iOS 9 safari mobile). See #364
var safariPrototypeSetterInheritanceBug = (function () {
    var v = false;
    var p = {};
    Object.defineProperty(p, "0", {
        set: function () {
            v = true;
        }
    });
    Object.create(p)["0"] = 1;
    return v === false;
})();
/**
 * This array buffer contains two lists of properties, so that all arrays
 * can recycle their property definitions, which significantly improves performance of creating
 * properties on the fly.
 */
var OBSERVABLE_ARRAY_BUFFER_SIZE = 0;
// Typescript workaround to make sure ObservableArray extends Array
var StubArray = /** @class */ (function () {
    function StubArray() {
    }
    return StubArray;
}());
function inherit(ctor, proto) {
    if (typeof Object["setPrototypeOf"] !== "undefined") {
        Object["setPrototypeOf"](ctor.prototype, proto);
    }
    else if (typeof ctor.prototype.__proto__ !== "undefined") {
        ctor.prototype.__proto__ = proto;
    }
    else {
        ctor["prototype"] = proto;
    }
}
inherit(StubArray, Array.prototype);
// Weex freeze Array.prototype
// Make them writeable and configurable in prototype chain
// https://github.com/alibaba/weex/pull/1529
if (Object.isFrozen(Array)) {
    [
        "constructor",
        "push",
        "shift",
        "concat",
        "pop",
        "unshift",
        "replace",
        "find",
        "findIndex",
        "splice",
        "reverse",
        "sort"
    ].forEach(function (key) {
        Object.defineProperty(StubArray.prototype, key, {
            configurable: true,
            writable: true,
            value: Array.prototype[key]
        });
    });
}
var ObservableArrayAdministration = /** @class */ (function () {
    function ObservableArrayAdministration(name, enhancer, array, owned) {
        this.array = array;
        this.owned = owned;
        this.values = [];
        this.lastKnownLength = 0;
        this.atom = new Atom(name || "ObservableArray@" + getNextId());
        this.enhancer = function (newV, oldV) { return enhancer(newV, oldV, name + "[..]"); };
    }
    ObservableArrayAdministration.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined)
            return this.dehancer(value);
        return value;
    };
    ObservableArrayAdministration.prototype.dehanceValues = function (values) {
        if (this.dehancer !== undefined && values.length > 0)
            return values.map(this.dehancer);
        return values;
    };
    ObservableArrayAdministration.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableArrayAdministration.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately === void 0) { fireImmediately = false; }
        if (fireImmediately) {
            listener({
                object: this.array,
                type: "splice",
                index: 0,
                added: this.values.slice(),
                addedCount: this.values.length,
                removed: [],
                removedCount: 0
            });
        }
        return registerListener(this, listener);
    };
    ObservableArrayAdministration.prototype.getArrayLength = function () {
        this.atom.reportObserved();
        return this.values.length;
    };
    ObservableArrayAdministration.prototype.setArrayLength = function (newLength) {
        if (typeof newLength !== "number" || newLength < 0)
            throw new Error("[mobx.array] Out of range: " + newLength);
        var currentLength = this.values.length;
        if (newLength === currentLength)
            return;
        else if (newLength > currentLength) {
            var newItems = new Array(newLength - currentLength);
            for (var i = 0; i < newLength - currentLength; i++)
                newItems[i] = undefined; // No Array.fill everywhere...
            this.spliceWithArray(currentLength, 0, newItems);
        }
        else
            this.spliceWithArray(newLength, currentLength - newLength);
    };
    // adds / removes the necessary numeric properties to this object
    ObservableArrayAdministration.prototype.updateArrayLength = function (oldLength, delta) {
        if (oldLength !== this.lastKnownLength)
            throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed. Did you use peek() to change it?");
        this.lastKnownLength += delta;
        if (delta > 0 && oldLength + delta + 1 > OBSERVABLE_ARRAY_BUFFER_SIZE)
            reserveArrayBuffer(oldLength + delta + 1);
    };
    ObservableArrayAdministration.prototype.spliceWithArray = function (index, deleteCount, newItems) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this.atom);
        var length = this.values.length;
        if (index === undefined)
            index = 0;
        else if (index > length)
            index = length;
        else if (index < 0)
            index = Math.max(0, length + index);
        if (arguments.length === 1)
            deleteCount = length - index;
        else if (deleteCount === undefined || deleteCount === null)
            deleteCount = 0;
        else
            deleteCount = Math.max(0, Math.min(deleteCount, length - index));
        if (newItems === undefined)
            newItems = EMPTY_ARRAY;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this.array,
                type: "splice",
                index: index,
                removedCount: deleteCount,
                added: newItems
            });
            if (!change)
                return EMPTY_ARRAY;
            deleteCount = change.removedCount;
            newItems = change.added;
        }
        newItems =
            newItems.length === 0 ? newItems : newItems.map(function (v) { return _this.enhancer(v, undefined); });
        var lengthDelta = newItems.length - deleteCount;
        this.updateArrayLength(length, lengthDelta); // create or remove new entries
        var res = this.spliceItemsIntoValues(index, deleteCount, newItems);
        if (deleteCount !== 0 || newItems.length !== 0)
            this.notifyArraySplice(index, newItems, res);
        return this.dehanceValues(res);
    };
    ObservableArrayAdministration.prototype.spliceItemsIntoValues = function (index, deleteCount, newItems) {
        var _a;
        if (newItems.length < MAX_SPLICE_SIZE) {
            return (_a = this.values).splice.apply(_a, __spread([index, deleteCount], newItems));
        }
        else {
            var res = this.values.slice(index, index + deleteCount);
            this.values = this.values
                .slice(0, index)
                .concat(newItems, this.values.slice(index + deleteCount));
            return res;
        }
    };
    ObservableArrayAdministration.prototype.notifyArrayChildUpdate = function (index, newValue, oldValue) {
        var notifySpy = !this.owned && isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy
            ? {
                object: this.array,
                type: "update",
                index: index,
                newValue: newValue,
                oldValue: oldValue
            }
            : null;
        if (notifySpy)
            spyReportStart(__assign(__assign({}, change), { name: this.atom.name }));
        this.atom.reportChanged();
        if (notify)
            notifyListeners(this, change);
        if (notifySpy)
            spyReportEnd();
    };
    ObservableArrayAdministration.prototype.notifyArraySplice = function (index, added, removed) {
        var notifySpy = !this.owned && isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy
            ? {
                object: this.array,
                type: "splice",
                index: index,
                removed: removed,
                added: added,
                removedCount: removed.length,
                addedCount: added.length
            }
            : null;
        if (notifySpy)
            spyReportStart(__assign(__assign({}, change), { name: this.atom.name }));
        this.atom.reportChanged();
        // conform: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe
        if (notify)
            notifyListeners(this, change);
        if (notifySpy)
            spyReportEnd();
    };
    return ObservableArrayAdministration;
}());
var ObservableArray = /** @class */ (function (_super) {
    __extends(ObservableArray, _super);
    function ObservableArray(initialValues, enhancer, name, owned) {
        if (name === void 0) { name = "ObservableArray@" + getNextId(); }
        if (owned === void 0) { owned = false; }
        var _this = _super.call(this) || this;
        var adm = new ObservableArrayAdministration(name, enhancer, _this, owned);
        addHiddenFinalProp(_this, "$mobx", adm);
        if (initialValues && initialValues.length) {
            var prev = allowStateChangesStart(true);
            _this.spliceWithArray(0, 0, initialValues);
            allowStateChangesEnd(prev);
        }
        if (safariPrototypeSetterInheritanceBug) {
            // Seems that Safari won't use numeric prototype setter untill any * numeric property is
            // defined on the instance. After that it works fine, even if this property is deleted.
            Object.defineProperty(adm.array, "0", ENTRY_0);
        }
        return _this;
    }
    ObservableArray.prototype.intercept = function (handler) {
        return this.$mobx.intercept(handler);
    };
    ObservableArray.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately === void 0) { fireImmediately = false; }
        return this.$mobx.observe(listener, fireImmediately);
    };
    ObservableArray.prototype.clear = function () {
        return this.splice(0);
    };
    ObservableArray.prototype.concat = function () {
        var arrays = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arrays[_i] = arguments[_i];
        }
        this.$mobx.atom.reportObserved();
        return Array.prototype.concat.apply(this.peek(), arrays.map(function (a) { return (isObservableArray(a) ? a.peek() : a); }));
    };
    ObservableArray.prototype.replace = function (newItems) {
        return this.$mobx.spliceWithArray(0, this.$mobx.values.length, newItems);
    };
    /**
     * Converts this array back to a (shallow) javascript structure.
     * For a deep clone use mobx.toJS
     */
    ObservableArray.prototype.toJS = function () {
        return this.slice();
    };
    ObservableArray.prototype.toJSON = function () {
        // Used by JSON.stringify
        return this.toJS();
    };
    ObservableArray.prototype.peek = function () {
        this.$mobx.atom.reportObserved();
        return this.$mobx.dehanceValues(this.$mobx.values);
    };
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    ObservableArray.prototype.find = function (predicate, thisArg, fromIndex) {
        if (fromIndex === void 0) { fromIndex = 0; }
        if (arguments.length === 3)
            deprecated("The array.find fromIndex argument to find will not be supported anymore in the next major");
        var idx = this.findIndex.apply(this, arguments);
        return idx === -1 ? undefined : this.get(idx);
    };
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
    ObservableArray.prototype.findIndex = function (predicate, thisArg, fromIndex) {
        if (fromIndex === void 0) { fromIndex = 0; }
        if (arguments.length === 3)
            deprecated("The array.findIndex fromIndex argument to find will not be supported anymore in the next major");
        var items = this.peek(), l = items.length;
        for (var i = fromIndex; i < l; i++)
            if (predicate.call(thisArg, items[i], i, this))
                return i;
        return -1;
    };
    /*
     * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
     * since these functions alter the inner structure of the array, the have side effects.
     * Because the have side effects, they should not be used in computed function,
     * and for that reason the do not call dependencyState.notifyObserved
     */
    ObservableArray.prototype.splice = function (index, deleteCount) {
        var newItems = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            newItems[_i - 2] = arguments[_i];
        }
        switch (arguments.length) {
            case 0:
                return [];
            case 1:
                return this.$mobx.spliceWithArray(index);
            case 2:
                return this.$mobx.spliceWithArray(index, deleteCount);
        }
        return this.$mobx.spliceWithArray(index, deleteCount, newItems);
    };
    ObservableArray.prototype.spliceWithArray = function (index, deleteCount, newItems) {
        return this.$mobx.spliceWithArray(index, deleteCount, newItems);
    };
    ObservableArray.prototype.push = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var adm = this.$mobx;
        adm.spliceWithArray(adm.values.length, 0, items);
        return adm.values.length;
    };
    ObservableArray.prototype.pop = function () {
        return this.splice(Math.max(this.$mobx.values.length - 1, 0), 1)[0];
    };
    ObservableArray.prototype.shift = function () {
        return this.splice(0, 1)[0];
    };
    ObservableArray.prototype.unshift = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var adm = this.$mobx;
        adm.spliceWithArray(0, 0, items);
        return adm.values.length;
    };
    ObservableArray.prototype.reverse = function () {
        // reverse by default mutates in place before returning the result
        // which makes it both a 'derivation' and a 'mutation'.
        // so we deviate from the default and just make it an dervitation
        var clone = this.slice();
        return clone.reverse.apply(clone, arguments);
    };
    ObservableArray.prototype.sort = function (compareFn) {
        // sort by default mutates in place before returning the result
        // which goes against all good practices. Let's not change the array in place!
        var clone = this.slice();
        return clone.sort.apply(clone, arguments);
    };
    ObservableArray.prototype.remove = function (value) {
        var idx = this.$mobx.dehanceValues(this.$mobx.values).indexOf(value);
        if (idx > -1) {
            this.splice(idx, 1);
            return true;
        }
        return false;
    };
    ObservableArray.prototype.move = function (fromIndex, toIndex) {
        deprecated("observableArray.move is deprecated, use .slice() & .replace() instead");
        function checkIndex(index) {
            if (index < 0) {
                throw new Error("[mobx.array] Index out of bounds: " + index + " is negative");
            }
            var length = this.$mobx.values.length;
            if (index >= length) {
                throw new Error("[mobx.array] Index out of bounds: " + index + " is not smaller than " + length);
            }
        }
        checkIndex.call(this, fromIndex);
        checkIndex.call(this, toIndex);
        if (fromIndex === toIndex) {
            return;
        }
        var oldItems = this.$mobx.values;
        var newItems;
        if (fromIndex < toIndex) {
            newItems = __spread(oldItems.slice(0, fromIndex), oldItems.slice(fromIndex + 1, toIndex + 1), [
                oldItems[fromIndex]
            ], oldItems.slice(toIndex + 1));
        }
        else {
            // toIndex < fromIndex
            newItems = __spread(oldItems.slice(0, toIndex), [
                oldItems[fromIndex]
            ], oldItems.slice(toIndex, fromIndex), oldItems.slice(fromIndex + 1));
        }
        this.replace(newItems);
    };
    // See #734, in case property accessors are unreliable...
    ObservableArray.prototype.get = function (index) {
        var impl = this.$mobx;
        if (impl) {
            if (index < impl.values.length) {
                impl.atom.reportObserved();
                return impl.dehanceValue(impl.values[index]);
            }
            console.warn("[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + impl.values.length + "). Please check length first. Out of bound indices will not be tracked by MobX");
        }
        return undefined;
    };
    // See #734, in case property accessors are unreliable...
    ObservableArray.prototype.set = function (index, newValue) {
        var adm = this.$mobx;
        var values = adm.values;
        if (index < values.length) {
            // update at index in range
            checkIfStateModificationsAreAllowed(adm.atom);
            var oldValue = values[index];
            if (hasInterceptors(adm)) {
                var change = interceptChange(adm, {
                    type: "update",
                    object: this,
                    index: index,
                    newValue: newValue
                });
                if (!change)
                    return;
                newValue = change.newValue;
            }
            newValue = adm.enhancer(newValue, oldValue);
            var changed = newValue !== oldValue;
            if (changed) {
                values[index] = newValue;
                adm.notifyArrayChildUpdate(index, newValue, oldValue);
            }
        }
        else if (index === values.length) {
            // add a new item
            adm.spliceWithArray(index, 0, [newValue]);
        }
        else {
            // out of bounds
            throw new Error("[mobx.array] Index out of bounds, " + index + " is larger than " + values.length);
        }
    };
    return ObservableArray;
}(StubArray));
declareIterator(ObservableArray.prototype, function () {
    this.$mobx.atom.reportObserved();
    var self = this;
    var nextIndex = 0;
    return makeIterable({
        next: function () {
            return nextIndex < self.length
                ? { value: self[nextIndex++], done: false }
                : { done: true, value: undefined };
        }
    });
});
Object.defineProperty(ObservableArray.prototype, "length", {
    enumerable: false,
    configurable: true,
    get: function () {
        return this.$mobx.getArrayLength();
    },
    set: function (newLength) {
        this.$mobx.setArrayLength(newLength);
    }
});
addHiddenProp(ObservableArray.prototype, toStringTagSymbol(), "Array");
["indexOf", "join", "lastIndexOf", "slice", "toString", "toLocaleString"].forEach(function (funcName) {
    var baseFunc = Array.prototype[funcName];
    invariant(typeof baseFunc === "function", "Base function not defined on Array prototype: '" + funcName + "'");
    addHiddenProp(ObservableArray.prototype, funcName, function () {
        return baseFunc.apply(this.peek(), arguments);
    });
});
[
    "every",
    "filter",
    //"find", // implemented individually (IE support)
    //"findIndex", // implemented individually (IE support)
    //"flatMap", // not supported
    "forEach",
    "map",
    "some"
].forEach(function (funcName) {
    var baseFunc = Array.prototype[funcName];
    invariant(typeof baseFunc === "function", "Base function not defined on Array prototype: '" + funcName + "'");
    addHiddenProp(ObservableArray.prototype, funcName, function (callback, thisArg) {
        var _this = this;
        var adm = this.$mobx;
        adm.atom.reportObserved();
        var dehancedValues = adm.dehanceValues(adm.values);
        return dehancedValues[funcName](function (element, index) {
            return callback.call(thisArg, element, index, _this);
        }, thisArg);
    });
});
["reduce", "reduceRight"].forEach(function (funcName) {
    addHiddenProp(ObservableArray.prototype, funcName, function () {
        var _this = this;
        var adm = this.$mobx;
        adm.atom.reportObserved();
        // #2432 - reduce behavior depends on arguments.length
        var callback = arguments[0];
        arguments[0] = function (accumulator, currentValue, index) {
            currentValue = adm.dehanceValue(currentValue);
            return callback(accumulator, currentValue, index, _this);
        };
        return adm.values[funcName].apply(adm.values, arguments);
    });
});
/**
 * We don't want those to show up in `for (const key in ar)` ...
 */
makeNonEnumerable(ObservableArray.prototype, [
    "constructor",
    "intercept",
    "observe",
    "clear",
    "concat",
    "get",
    "replace",
    "toJS",
    "toJSON",
    "peek",
    "find",
    "findIndex",
    "splice",
    "spliceWithArray",
    "push",
    "pop",
    "set",
    "shift",
    "unshift",
    "reverse",
    "sort",
    "remove",
    "move",
    "toString",
    "toLocaleString"
]);
// See #364
var ENTRY_0 = createArrayEntryDescriptor(0);
function createArrayEntryDescriptor(index) {
    return {
        enumerable: false,
        configurable: false,
        get: function () {
            return this.get(index);
        },
        set: function (value) {
            this.set(index, value);
        }
    };
}
function createArrayBufferItem(index) {
    Object.defineProperty(ObservableArray.prototype, "" + index, createArrayEntryDescriptor(index));
}
function reserveArrayBuffer(max) {
    for (var index = OBSERVABLE_ARRAY_BUFFER_SIZE; index < max; index++)
        createArrayBufferItem(index);
    OBSERVABLE_ARRAY_BUFFER_SIZE = max;
}
reserveArrayBuffer(1000);
var isObservableArrayAdministration = createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);
function isObservableArray(thing) {
    return isObject(thing) && isObservableArrayAdministration(thing.$mobx);
}

var ObservableMapMarker = {};
var ObservableMap = /** @class */ (function () {
    function ObservableMap(initialData, enhancer, name) {
        if (enhancer === void 0) { enhancer = deepEnhancer; }
        if (name === void 0) { name = "ObservableMap@" + getNextId(); }
        this.enhancer = enhancer;
        this.name = name;
        this.$mobx = ObservableMapMarker;
        this._keysAtom = createAtom(this.name + ".keys()");
        if (typeof Map !== "function") {
            throw new Error("mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js");
        }
        this._data = new Map();
        this._hasMap = new Map();
        this.merge(initialData);
    }
    ObservableMap.prototype._has = function (key) {
        return this._data.has(key);
    };
    ObservableMap.prototype.has = function (key) {
        var _this = this;
        if (!globalState.trackingDerivation)
            return this._has(key);
        var entry = this._hasMap.get(key);
        if (!entry) {
            // todo: replace with atom (breaking change)
            var newEntry = (entry = new ObservableValue(this._has(key), referenceEnhancer, this.name + "." + stringifyKey(key) + "?", false));
            this._hasMap.set(key, newEntry);
            onBecomeUnobserved(newEntry, function () { return _this._hasMap.delete(key); });
        }
        return entry.get();
    };
    ObservableMap.prototype.set = function (key, value) {
        var hasKey = this._has(key);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: hasKey ? "update" : "add",
                object: this,
                newValue: value,
                name: key
            });
            if (!change)
                return this;
            value = change.newValue;
        }
        if (hasKey) {
            this._updateValue(key, value);
        }
        else {
            this._addValue(key, value);
        }
        return this;
    };
    ObservableMap.prototype.delete = function (key) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this._keysAtom);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "delete",
                object: this,
                name: key
            });
            if (!change)
                return false;
        }
        if (this._has(key)) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "delete",
                    object: this,
                    oldValue: this._data.get(key).value,
                    name: key
                }
                : null;
            if (notifySpy)
                spyReportStart(__assign(__assign({}, change), { name: this.name, key: key }));
            transaction(function () {
                _this._keysAtom.reportChanged();
                _this._updateHasMapEntry(key, false);
                var observable = _this._data.get(key);
                observable.setNewValue(undefined);
                _this._data.delete(key);
            });
            if (notify)
                notifyListeners(this, change);
            if (notifySpy)
                spyReportEnd();
            return true;
        }
        return false;
    };
    ObservableMap.prototype._updateHasMapEntry = function (key, value) {
        var entry = this._hasMap.get(key);
        if (entry) {
            entry.setNewValue(value);
        }
    };
    ObservableMap.prototype._updateValue = function (key, newValue) {
        var observable = this._data.get(key);
        newValue = observable.prepareNewValue(newValue);
        if (newValue !== globalState.UNCHANGED) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "update",
                    object: this,
                    oldValue: observable.value,
                    name: key,
                    newValue: newValue
                }
                : null;
            if (notifySpy)
                spyReportStart(__assign(__assign({}, change), { name: this.name, key: key }));
            observable.setNewValue(newValue);
            if (notify)
                notifyListeners(this, change);
            if (notifySpy)
                spyReportEnd();
        }
    };
    ObservableMap.prototype._addValue = function (key, newValue) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this._keysAtom);
        transaction(function () {
            var observable = new ObservableValue(newValue, _this.enhancer, _this.name + "." + stringifyKey(key), false);
            _this._data.set(key, observable);
            newValue = observable.value; // value might have been changed
            _this._updateHasMapEntry(key, true);
            _this._keysAtom.reportChanged();
        });
        var notifySpy = isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy
            ? {
                type: "add",
                object: this,
                name: key,
                newValue: newValue
            }
            : null;
        if (notifySpy)
            spyReportStart(__assign(__assign({}, change), { name: this.name, key: key }));
        if (notify)
            notifyListeners(this, change);
        if (notifySpy)
            spyReportEnd();
    };
    ObservableMap.prototype.get = function (key) {
        if (this.has(key))
            return this.dehanceValue(this._data.get(key).get());
        return this.dehanceValue(undefined);
    };
    ObservableMap.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined) {
            return this.dehancer(value);
        }
        return value;
    };
    ObservableMap.prototype.keys = function () {
        this._keysAtom.reportObserved();
        return this._data.keys();
    };
    ObservableMap.prototype.values = function () {
        var self = this;
        var keys = this.keys();
        return makeIterable({
            next: function () {
                var _a = keys.next(), done = _a.done, value = _a.value;
                return {
                    done: done,
                    value: done ? undefined : self.get(value)
                };
            }
        });
    };
    ObservableMap.prototype.entries = function () {
        var self = this;
        var keys = this.keys();
        return makeIterable({
            next: function () {
                var _a = keys.next(), done = _a.done, value = _a.value;
                return {
                    done: done,
                    value: done ? undefined : [value, self.get(value)]
                };
            }
        });
    };
    ObservableMap.prototype.forEach = function (callback, thisArg) {
        var _this = this;
        this._keysAtom.reportObserved();
        this._data.forEach(function (_, key) { return callback.call(thisArg, _this.get(key), key, _this); });
    };
    /** Merge another object into this object, returns this. */
    ObservableMap.prototype.merge = function (other) {
        var _this = this;
        if (isObservableMap(other)) {
            other = other.toJS();
        }
        transaction(function () {
            var prev = allowStateChangesStart(true);
            try {
                if (isPlainObject(other))
                    Object.keys(other).forEach(function (key) { return _this.set(key, other[key]); });
                else if (Array.isArray(other))
                    other.forEach(function (_a) {
                        var _b = __read(_a, 2), key = _b[0], value = _b[1];
                        return _this.set(key, value);
                    });
                else if (isES6Map(other)) {
                    if (other.constructor !== Map)
                        fail("Cannot initialize from classes that inherit from Map: " + other.constructor.name); // prettier-ignore
                    else
                        other.forEach(function (value, key) { return _this.set(key, value); });
                }
                else if (other !== null && other !== undefined)
                    fail("Cannot initialize map from " + other);
            }
            finally {
                allowStateChangesEnd(prev);
            }
        });
        return this;
    };
    ObservableMap.prototype.clear = function () {
        var _this = this;
        transaction(function () {
            untracked(function () {
                // Note we are concurrently reading/deleting the same keys
                // forEach handles this properly
                _this._data.forEach(function (_, key) { return _this.delete(key); });
            });
        });
    };
    ObservableMap.prototype.replace = function (values) {
        var _this = this;
        // Implementation requirements:
        // - respect ordering of replacement map
        // - allow interceptors to run and potentially prevent individual operations
        // - don't recreate observables that already exist in original map (so we don't destroy existing subscriptions)
        // - don't _keysAtom.reportChanged if the keys of resulting map are indentical (order matters!)
        // - note that result map may differ from replacement map due to the interceptors
        transaction(function () {
            // Convert to map so we can do quick key lookups
            var replacementMap = convertToMap(values);
            var orderedData = new Map();
            // Used for optimization
            var keysReportChangedCalled = false;
            // Delete keys that don't exist in replacement map
            // if the key deletion is prevented by interceptor
            // add entry at the beginning of the result map
            forOf(_this._data.keys(), function (key) {
                // Concurrently iterating/deleting keys
                // iterator should handle this correctly
                if (!replacementMap.has(key)) {
                    var deleted = _this.delete(key);
                    // Was the key removed?
                    if (deleted) {
                        // _keysAtom.reportChanged() was already called
                        keysReportChangedCalled = true;
                    }
                    else {
                        // Delete prevented by interceptor
                        var value = _this._data.get(key);
                        orderedData.set(key, value);
                    }
                }
            });
            // Merge entries
            forOf(replacementMap.entries(), function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                // We will want to know whether a new key is added
                var keyExisted = _this._data.has(key);
                // Add or update value
                _this.set(key, value);
                // The addition could have been prevent by interceptor
                if (_this._data.has(key)) {
                    // The update could have been prevented by interceptor
                    // and also we want to preserve existing values
                    // so use value from _data map (instead of replacement map)
                    var value_1 = _this._data.get(key);
                    orderedData.set(key, value_1);
                    // Was a new key added?
                    if (!keyExisted) {
                        // _keysAtom.reportChanged() was already called
                        keysReportChangedCalled = true;
                    }
                }
            });
            // Check for possible key order change
            if (!keysReportChangedCalled) {
                if (_this._data.size !== orderedData.size) {
                    // If size differs, keys are definitely modified
                    _this._keysAtom.reportChanged();
                }
                else {
                    var iter1 = _this._data.keys();
                    var iter2 = orderedData.keys();
                    var next1 = iter1.next();
                    var next2 = iter2.next();
                    while (!next1.done) {
                        if (next1.value !== next2.value) {
                            _this._keysAtom.reportChanged();
                            break;
                        }
                        next1 = iter1.next();
                        next2 = iter2.next();
                    }
                }
            }
            // Use correctly ordered map
            _this._data = orderedData;
        });
        return this;
    };
    Object.defineProperty(ObservableMap.prototype, "size", {
        get: function () {
            this._keysAtom.reportObserved();
            return this._data.size;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a plain object that represents this map.
     * Note that all the keys being stringified.
     * If there are duplicating keys after converting them to strings, behaviour is undetermined.
     */
    ObservableMap.prototype.toPOJO = function () {
        var _this = this;
        var res = {};
        this.forEach(function (_, key) {
            return (res[typeof key === "symbol" ? key : stringifyKey(key)] = _this.get(key));
        });
        return res;
    };
    /**
     * Returns a shallow non observable object clone of this map.
     * Note that the values migth still be observable. For a deep clone use mobx.toJS.
     */
    ObservableMap.prototype.toJS = function () {
        return new Map(this);
    };
    ObservableMap.prototype.toJSON = function () {
        // Used by JSON.stringify
        return this.toPOJO();
    };
    ObservableMap.prototype.toString = function () {
        var _this = this;
        return (this.name +
            "[{ " +
            iteratorToArray(this.keys())
                .map(function (key) { return stringifyKey(key) + ": " + ("" + _this.get(key)); })
                .join(", ") +
            " }]");
    };
    /**
     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
     * for callback details
     */
    ObservableMap.prototype.observe = function (listener, fireImmediately) {
         false &&
            false;
        return registerListener(this, listener);
    };
    ObservableMap.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    return ObservableMap;
}());
function stringifyKey(key) {
    if (key && key.toString)
        return key.toString();
    else
        return new String(key).toString();
}
declareIterator(ObservableMap.prototype, function () {
    return this.entries();
});
addHiddenFinalProp(ObservableMap.prototype, toStringTagSymbol(), "Map");
/* 'var' fixes small-build issue */
var isObservableMap = createInstanceofPredicate("ObservableMap", ObservableMap);

var ObservableSetMarker = {};
var ObservableSet = /** @class */ (function () {
    function ObservableSet(initialData, enhancer, name) {
        if (enhancer === void 0) { enhancer = deepEnhancer; }
        if (name === void 0) { name = "ObservableSet@" + getNextId(); }
        this.name = name;
        this.$mobx = ObservableSetMarker;
        this._data = new Set();
        this._atom = createAtom(this.name);
        if (typeof Set !== "function") {
            throw new Error("mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js");
        }
        this.enhancer = function (newV, oldV) { return enhancer(newV, oldV, name); };
        if (initialData) {
            this.replace(initialData);
        }
    }
    ObservableSet.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined) {
            return this.dehancer(value);
        }
        return value;
    };
    ObservableSet.prototype.clear = function () {
        var _this = this;
        transaction(function () {
            untracked(function () {
                _this._data.forEach(function (value) {
                    _this.delete(value);
                });
            });
        });
    };
    ObservableSet.prototype.forEach = function (callbackFn, thisArg) {
        var _this = this;
        this._atom.reportObserved();
        this._data.forEach(function (value) {
            callbackFn.call(thisArg, value, value, _this);
        });
    };
    Object.defineProperty(ObservableSet.prototype, "size", {
        get: function () {
            this._atom.reportObserved();
            return this._data.size;
        },
        enumerable: true,
        configurable: true
    });
    ObservableSet.prototype.add = function (value) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this._atom);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "add",
                object: this,
                newValue: value
            });
            if (!change)
                return this;
            // TODO: ideally, value = change.value would be done here, so that values can be
            // changed by interceptor. Same applies for other Set and Map api's.
        }
        if (!this.has(value)) {
            transaction(function () {
                _this._data.add(_this.enhancer(value, undefined));
                _this._atom.reportChanged();
            });
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "add",
                    object: this,
                    newValue: value
                }
                : null;
            if (notifySpy && "production" !== "production")
                spyReportStart(change);
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && "production" !== "production")
                spyReportEnd();
        }
        return this;
    };
    ObservableSet.prototype.delete = function (value) {
        var _this = this;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "delete",
                object: this,
                oldValue: value
            });
            if (!change)
                return false;
        }
        if (this.has(value)) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "delete",
                    object: this,
                    oldValue: value
                }
                : null;
            if (notifySpy && "production" !== "production")
                spyReportStart(__assign(__assign({}, change), { name: this.name }));
            transaction(function () {
                _this._atom.reportChanged();
                _this._data.delete(value);
            });
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && "production" !== "production")
                spyReportEnd();
            return true;
        }
        return false;
    };
    ObservableSet.prototype.has = function (value) {
        this._atom.reportObserved();
        return this._data.has(this.dehanceValue(value));
    };
    ObservableSet.prototype.entries = function () {
        var nextIndex = 0;
        var keys = iteratorToArray(this.keys());
        var values = iteratorToArray(this.values());
        return makeIterable({
            next: function () {
                var index = nextIndex;
                nextIndex += 1;
                return index < values.length
                    ? { value: [keys[index], values[index]], done: false }
                    : { done: true };
            }
        });
    };
    ObservableSet.prototype.keys = function () {
        return this.values();
    };
    ObservableSet.prototype.values = function () {
        this._atom.reportObserved();
        var self = this;
        var nextIndex = 0;
        var observableValues;
        if (this._data.values !== undefined) {
            observableValues = iteratorToArray(this._data.values());
        }
        else {
            // There is no values function in IE11
            observableValues = [];
            this._data.forEach(function (e) { return observableValues.push(e); });
        }
        return makeIterable({
            next: function () {
                return nextIndex < observableValues.length
                    ? { value: self.dehanceValue(observableValues[nextIndex++]), done: false }
                    : { done: true };
            }
        });
    };
    ObservableSet.prototype.replace = function (other) {
        var _this = this;
        if (isObservableSet(other)) {
            other = other.toJS();
        }
        transaction(function () {
            var prev = allowStateChangesStart(true);
            try {
                if (Array.isArray(other)) {
                    _this.clear();
                    other.forEach(function (value) { return _this.add(value); });
                }
                else if (isES6Set(other)) {
                    _this.clear();
                    other.forEach(function (value) { return _this.add(value); });
                }
                else if (other !== null && other !== undefined) {
                    fail("Cannot initialize set from " + other);
                }
            }
            finally {
                allowStateChangesEnd(prev);
            }
        });
        return this;
    };
    ObservableSet.prototype.observe = function (listener, fireImmediately) {
        // TODO 'fireImmediately' can be true?
         false &&
            false;
        return registerListener(this, listener);
    };
    ObservableSet.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableSet.prototype.toJS = function () {
        return new Set(this);
    };
    ObservableSet.prototype.toString = function () {
        return this.name + "[ " + iteratorToArray(this.keys()).join(", ") + " ]";
    };
    return ObservableSet;
}());
declareIterator(ObservableSet.prototype, function () {
    return this.values();
});
addHiddenFinalProp(ObservableSet.prototype, toStringTagSymbol(), "Set");
var isObservableSet = createInstanceofPredicate("ObservableSet", ObservableSet);

var ObservableObjectAdministration = /** @class */ (function () {
    function ObservableObjectAdministration(target, name, defaultEnhancer) {
        this.target = target;
        this.name = name;
        this.defaultEnhancer = defaultEnhancer;
        this.values = {};
    }
    ObservableObjectAdministration.prototype.read = function (owner, key) {
        if ( true && this.target !== owner) {
            this.illegalAccess(owner, key);
            if (!this.values[key])
                return undefined;
        }
        return this.values[key].get();
    };
    ObservableObjectAdministration.prototype.write = function (owner, key, newValue) {
        var instance = this.target;
        if ( true && instance !== owner) {
            this.illegalAccess(owner, key);
        }
        var observable = this.values[key];
        if (observable instanceof ComputedValue) {
            observable.set(newValue);
            return;
        }
        // intercept
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "update",
                object: instance,
                name: key,
                newValue: newValue
            });
            if (!change)
                return;
            newValue = change.newValue;
        }
        newValue = observable.prepareNewValue(newValue);
        // notify spy & observers
        if (newValue !== globalState.UNCHANGED) {
            var notify = hasListeners(this);
            var notifySpy = isSpyEnabled();
            var change = notify || notifySpy
                ? {
                    type: "update",
                    object: instance,
                    oldValue: observable.value,
                    name: key,
                    newValue: newValue
                }
                : null;
            if (notifySpy)
                spyReportStart(__assign(__assign({}, change), { name: this.name, key: key }));
            observable.setNewValue(newValue);
            if (notify)
                notifyListeners(this, change);
            if (notifySpy)
                spyReportEnd();
        }
    };
    ObservableObjectAdministration.prototype.remove = function (key) {
        if (!this.values[key])
            return;
        var target = this.target;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: target,
                name: key,
                type: "remove"
            });
            if (!change)
                return;
        }
        try {
            startBatch();
            var notify = hasListeners(this);
            var notifySpy = isSpyEnabled();
            var oldValue = this.values[key].get();
            if (this.keys)
                this.keys.remove(key);
            delete this.values[key];
            delete this.target[key];
            var change = notify || notifySpy
                ? {
                    type: "remove",
                    object: target,
                    oldValue: oldValue,
                    name: key
                }
                : null;
            if (notifySpy)
                spyReportStart(__assign(__assign({}, change), { name: this.name, key: key }));
            if (notify)
                notifyListeners(this, change);
            if (notifySpy)
                spyReportEnd();
        }
        finally {
            endBatch();
        }
    };
    ObservableObjectAdministration.prototype.illegalAccess = function (owner, propName) {
        /**
         * This happens if a property is accessed through the prototype chain, but the property was
         * declared directly as own property on the prototype.
         *
         * E.g.:
         * class A {
         * }
         * extendObservable(A.prototype, { x: 1 })
         *
         * classB extens A {
         * }
         * console.log(new B().x)
         *
         * It is unclear whether the property should be considered 'static' or inherited.
         * Either use `console.log(A.x)`
         * or: decorate(A, { x: observable })
         *
         * When using decorate, the property will always be redeclared as own property on the actual instance
         */
        console.warn("Property '" + propName + "' of '" + owner + "' was accessed through the prototype chain. Use 'decorate' instead to declare the prop or access it statically through it's owner");
    };
    /**
     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
     * for callback details
     */
    ObservableObjectAdministration.prototype.observe = function (callback, fireImmediately) {
         false &&
            false;
        return registerListener(this, callback);
    };
    ObservableObjectAdministration.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableObjectAdministration.prototype.getKeys = function () {
        var _this = this;
        if (this.keys === undefined) {
            this.keys = (new ObservableArray(Object.keys(this.values).filter(function (key) { return _this.values[key] instanceof ObservableValue; }), referenceEnhancer, "keys(" + this.name + ")", true));
        }
        return this.keys.slice();
    };
    return ObservableObjectAdministration;
}());
function asObservableObject(target, name, defaultEnhancer) {
    if (name === void 0) { name = ""; }
    if (defaultEnhancer === void 0) { defaultEnhancer = deepEnhancer; }
    var adm = target.$mobx;
    if (adm)
        return adm;
     false &&
        false;
    if (!isPlainObject(target))
        name = (target.constructor.name || "ObservableObject") + "@" + getNextId();
    if (!name)
        name = "ObservableObject@" + getNextId();
    adm = new ObservableObjectAdministration(target, name, defaultEnhancer);
    addHiddenFinalProp(target, "$mobx", adm);
    return adm;
}
function defineObservableProperty(target, propName, newValue, enhancer) {
    var adm = asObservableObject(target);
    assertPropertyConfigurable(target, propName);
    if (hasInterceptors(adm)) {
        var change = interceptChange(adm, {
            object: target,
            name: propName,
            type: "add",
            newValue: newValue
        });
        if (!change)
            return;
        newValue = change.newValue;
    }
    var observable = (adm.values[propName] = new ObservableValue(newValue, enhancer, adm.name + "." + propName, false));
    newValue = observable.value; // observableValue might have changed it
    Object.defineProperty(target, propName, generateObservablePropConfig(propName));
    if (adm.keys)
        adm.keys.push(propName);
    notifyPropertyAddition(adm, target, propName, newValue);
}
function defineComputedProperty(target, // which objects holds the observable and provides `this` context?
propName, options) {
    var adm = asObservableObject(target);
    options.name = adm.name + "." + propName;
    options.context = target;
    adm.values[propName] = new ComputedValue(options);
    Object.defineProperty(target, propName, generateComputedPropConfig(propName));
}
var observablePropertyConfigs = Object.create(null);
var computedPropertyConfigs = Object.create(null);
function generateObservablePropConfig(propName) {
    return (observablePropertyConfigs[propName] ||
        (observablePropertyConfigs[propName] = {
            configurable: true,
            enumerable: true,
            get: function () {
                return this.$mobx.read(this, propName);
            },
            set: function (v) {
                this.$mobx.write(this, propName, v);
            }
        }));
}
function getAdministrationForComputedPropOwner(owner) {
    var adm = owner.$mobx;
    if (!adm) {
        // because computed props are declared on proty,
        // the current instance might not have been initialized yet
        initializeInstance(owner);
        return owner.$mobx;
    }
    return adm;
}
function generateComputedPropConfig(propName) {
    return (computedPropertyConfigs[propName] ||
        (computedPropertyConfigs[propName] = {
            configurable: globalState.computedConfigurable,
            enumerable: false,
            get: function () {
                return getAdministrationForComputedPropOwner(this).read(this, propName);
            },
            set: function (v) {
                getAdministrationForComputedPropOwner(this).write(this, propName, v);
            }
        }));
}
function notifyPropertyAddition(adm, object, key, newValue) {
    var notify = hasListeners(adm);
    var notifySpy = isSpyEnabled();
    var change = notify || notifySpy
        ? {
            type: "add",
            object: object,
            name: key,
            newValue: newValue
        }
        : null;
    if (notifySpy)
        spyReportStart(__assign(__assign({}, change), { name: adm.name, key: key }));
    if (notify)
        notifyListeners(adm, change);
    if (notifySpy)
        spyReportEnd();
}
var isObservableObjectAdministration = createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);
function isObservableObject(thing) {
    if (isObject(thing)) {
        // Initializers run lazily when transpiling to babel, so make sure they are run...
        initializeInstance(thing);
        return isObservableObjectAdministration(thing.$mobx);
    }
    return false;
}

function getAtom(thing, property) {
    if (typeof thing === "object" && thing !== null) {
        if (isObservableArray(thing)) {
            if (property !== undefined)
                fail( false &&
                    false);
            return thing.$mobx.atom;
        }
        if (isObservableSet(thing)) {
            return thing.$mobx;
        }
        if (isObservableMap(thing)) {
            var anyThing = thing;
            if (property === undefined)
                return anyThing._keysAtom;
            var observable = anyThing._data.get(property) || anyThing._hasMap.get(property);
            if (!observable)
                fail( false &&
                    false);
            return observable;
        }
        // Initializers run lazily when transpiling to babel, so make sure they are run...
        initializeInstance(thing);
        if (property && !thing.$mobx)
            thing[property]; // See #1072
        if (isObservableObject(thing)) {
            if (!property)
                return fail( false && false);
            var observable = thing.$mobx.values[property];
            if (!observable)
                fail( false &&
                    false);
            return observable;
        }
        if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
            return thing;
        }
    }
    else if (typeof thing === "function") {
        if (isReaction(thing.$mobx)) {
            // disposer function
            return thing.$mobx;
        }
    }
    return fail( false && false);
}
function getAdministration(thing, property) {
    if (!thing)
        fail("Expecting some object");
    if (property !== undefined)
        return getAdministration(getAtom(thing, property));
    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing))
        return thing;
    if (isObservableMap(thing) || isObservableSet(thing))
        return thing;
    // Initializers run lazily when transpiling to babel, so make sure they are run...
    initializeInstance(thing);
    if (thing.$mobx)
        return thing.$mobx;
    fail( false && false);
}
function getDebugName(thing, property) {
    var named;
    if (property !== undefined)
        named = getAtom(thing, property);
    else if (isObservableObject(thing) || isObservableMap(thing) || isObservableSet(thing))
        named = getAdministration(thing);
    else
        named = getAtom(thing); // valid for arrays as well
    return named.name;
}

var toString = Object.prototype.toString;
function deepEqual(a, b, depth) {
    if (depth === void 0) { depth = -1; }
    return eq(a, b, depth);
}
// Copied from https://github.com/jashkenas/underscore/blob/5c237a7c682fb68fd5378203f0bf22dce1624854/underscore.js#L1186-L1289
// Internal recursive comparison function for `isEqual`.
function eq(a, b, depth, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b)
        return a !== 0 || 1 / a === 1 / b;
    // `null` or `undefined` only equal to itself (strict comparison).
    if (a == null || b == null)
        return false;
    // `NaN`s are equivalent, but non-reflexive.
    if (a !== a)
        return b !== b;
    // Exhaust primitive checks
    var type = typeof a;
    if (type !== "function" && type !== "object" && typeof b != "object")
        return false;
    // Unwrap any wrapped objects.
    a = unwrap(a);
    b = unwrap(b);
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b))
        return false;
    switch (className) {
        // Strings, numbers, regular expressions, dates, and booleans are compared by value.
        case "[object RegExp]":
        // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
        case "[object String]":
            // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
            // equivalent to `new String("5")`.
            return "" + a === "" + b;
        case "[object Number]":
            // `NaN`s are equivalent, but non-reflexive.
            // Object(NaN) is equivalent to NaN.
            if (+a !== +a)
                return +b !== +b;
            // An `egal` comparison is performed for other numeric values.
            return +a === 0 ? 1 / +a === 1 / b : +a === +b;
        case "[object Date]":
        case "[object Boolean]":
            // Coerce dates and booleans to numeric primitive values. Dates are compared by their
            // millisecond representations. Note that invalid dates with millisecond representations
            // of `NaN` are not equivalent.
            return +a === +b;
        case "[object Symbol]":
            return (
            // eslint-disable-next-line
            typeof Symbol !== "undefined" && Symbol.valueOf.call(a) === Symbol.valueOf.call(b));
    }
    var areArrays = className === "[object Array]";
    if (!areArrays) {
        if (typeof a != "object" || typeof b != "object")
            return false;
        // Objects with different constructors are not equivalent, but `Object`s or `Array`s
        // from different frames are.
        var aCtor = a.constructor, bCtor = b.constructor;
        if (aCtor !== bCtor &&
            !(typeof aCtor === "function" &&
                aCtor instanceof aCtor &&
                typeof bCtor === "function" &&
                bCtor instanceof bCtor) &&
            ("constructor" in a && "constructor" in b)) {
            return false;
        }
    }
    if (depth === 0) {
        return false;
    }
    else if (depth < 0) {
        depth = -1;
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
        // Linear search. Performance is inversely proportional to the number of
        // unique nested structures.
        if (aStack[length] === a)
            return bStack[length] === b;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    // Recursively compare objects and arrays.
    if (areArrays) {
        // Compare array lengths to determine if a deep comparison is necessary.
        length = a.length;
        if (length !== b.length)
            return false;
        // Deep compare the contents, ignoring non-numeric properties.
        while (length--) {
            if (!eq(a[length], b[length], depth - 1, aStack, bStack))
                return false;
        }
    }
    else {
        // Deep compare objects.
        var keys = Object.keys(a);
        var key = void 0;
        length = keys.length;
        // Ensure that both objects contain the same number of properties before comparing deep equality.
        if (Object.keys(b).length !== length)
            return false;
        while (length--) {
            // Deep compare each member
            key = keys[length];
            if (!(has$1(b, key) && eq(a[key], b[key], depth - 1, aStack, bStack)))
                return false;
        }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
}
function unwrap(a) {
    if (isObservableArray(a))
        return a.peek();
    if (isES6Map(a) || isObservableMap(a))
        return iteratorToArray(a.entries());
    if (isES6Set(a) || isObservableSet(a))
        return iteratorToArray(a.entries());
    return a;
}
function has$1(a, key) {
    return Object.prototype.hasOwnProperty.call(a, key);
}

/**
 * (c) Michel Weststrate 2015 - 2019
 * MIT Licensed
 *
 * Welcome to the mobx sources! To get an global overview of how MobX internally works,
 * this is a good place to start:
 * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
 *
 * Source folders:
 * ===============
 *
 * - api/     Most of the public static methods exposed by the module can be found here.
 * - core/    Implementation of the MobX algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
 * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
 * - utils/   Utility stuff.
 *
 */
try {
    // define process.env if needed
    // if this is not a production build in the first place
    // (in which case the expression below would be substituted with 'production')
    // tslint:disable-next-line
    "production";
}
catch (e) {
    var g = getGlobal();
    if (typeof process === "undefined")
        g.process = {};
    g.process.env = {};
}
(function () {
    function testCodeMinification() { }
    if (testCodeMinification.name !== "testCodeMinification" &&
        "production" !== "production" &&
        typeof process !== 'undefined' && process.env.IGNORE_MOBX_MINIFY_WARNING !== "true") {
        // trick so it doesn't get replaced
        var varName = ["process", "env", "NODE_ENV"].join(".");
        console.warn("[mobx] you are running a minified build, but '" + varName + "' was not set to 'production' in your bundler. This results in an unnecessarily large and slow bundle");
    }
})();
// forward compatibility with mobx, so that packages can easily support mobx 4 & 5
var $mobx = "$mobx";
if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
    // See: https://github.com/andykog/mobx-devtools/
    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
        spy: spy,
        extras: {
            getDebugName: getDebugName
        },
        $mobx: $mobx
    });
}
// TODO: remove in some future build
if (false) { var warnedAboutDefaultExport_1; }



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(46), __webpack_require__(50)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(267)();
}


/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(55);
var assign = __webpack_require__(266);

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export clientOffsetAnchor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return offsetParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDragData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getInitialDragData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return noop; });
const clientOffsetAnchor = (element) => {
    const isBody = element === element.ownerDocument.body;
    const offsetParentRect = isBody ? {left: 0, top: 0} : element.getBoundingClientRect();

    const x = - element.scrollLeft + offsetParentRect.left;
    const y = - element.scrollTop + offsetParentRect.top;

    return {x, y};
};

const offsetParent = (element) => {
    return element.offsetParent || element.ownerDocument.body;
};

const getDragData = (e, prevData, anchorElement) => {
    const {clientX, clientY} = e;
    const anchor = clientOffsetAnchor(anchorElement);
    const x = clientX - anchor.x;
    const y = clientY - anchor.y;

    return {
        x, y,
        deltaX: x - prevData.initial.x,
        deltaY: y - prevData.initial.y,
        lastDeltaX: x - prevData.x,
        lastDeltaY: y - prevData.y,
        initial: prevData.initial
    };
};

const getInitialDragData = (eventOrTouch, anchorElement) => {
    const {clientX, clientY} = eventOrTouch;

    const anchor = clientOffsetAnchor(anchorElement);

    const x = clientX - anchor.x;
    const y = clientY - anchor.y;

    return {
        x, y,
        deltaX: 0,
        deltaY: 0,
        lastDeltaX: 0,
        lastDeltaY: 0,
        initial: {x, y}
    }
};

const noop = () => {};


/***/ }),
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(46)))

/***/ }),
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(24);
var shared = __webpack_require__(140);
var has = __webpack_require__(43);
var uid = __webpack_require__(141);
var NATIVE_SYMBOL = __webpack_require__(149);
var USE_SYMBOL_AS_UID = __webpack_require__(273);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(257);
} else {}


/***/ }),
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(24);
var DOMIterables = __webpack_require__(277);
var ArrayIteratorMethods = __webpack_require__(278);
var createNonEnumerableProperty = __webpack_require__(52);
var wellKnownSymbol = __webpack_require__(27);

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(47);

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.github.io/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__(55);
var DESCRIPTORS = __webpack_require__(51);
var global = __webpack_require__(24);
var has = __webpack_require__(43);
var isObject = __webpack_require__(47);
var defineProperty = __webpack_require__(56).f;
var copyConstructorProperties = __webpack_require__(142);

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export useUnmount */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return useForceUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getGlobal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};

var EMPTY_ARRAY = [];
function useUnmount(fn) {
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () { return fn; }, EMPTY_ARRAY);
}
function useForceUpdate() {
    var _a = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0), 2), setTick = _a[1];
    var update = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        setTick(function (tick) { return tick + 1; });
    }, []);
    return update;
}
function isPlainObject(value) {
    if (!value || typeof value !== "object") {
        return false;
    }
    var proto = Object.getPrototypeOf(value);
    return !proto || proto === Object.prototype;
}
function getSymbol(name) {
    if (typeof Symbol === "function") {
        return Symbol.for(name);
    }
    return "__$mobx-react " + name + "__";
}
var mockGlobal = {};
function getGlobal() {
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    return mockGlobal;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(46)))

/***/ }),
/* 42 */,
/* 43 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 44 */,
/* 45 */,
/* 46 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 48 */,
/* 49 */,
/* 50 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(38);

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(51);
var definePropertyModule = __webpack_require__(56);
var createPropertyDescriptor = __webpack_require__(99);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 53 */,
/* 54 */,
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(24);
var getOwnPropertyDescriptor = __webpack_require__(98).f;
var createNonEnumerableProperty = __webpack_require__(52);
var redefine = __webpack_require__(69);
var setGlobal = __webpack_require__(101);
var copyConstructorProperties = __webpack_require__(142);
var isForced = __webpack_require__(145);

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(51);
var IE8_DOM_DEFINE = __webpack_require__(139);
var anObject = __webpack_require__(39);
var toPrimitive = __webpack_require__(138);

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 59 */,
/* 60 */,
/* 61 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 62 */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(24);
var createNonEnumerableProperty = __webpack_require__(52);
var has = __webpack_require__(43);
var setGlobal = __webpack_require__(101);
var inspectSource = __webpack_require__(102);
var InternalStateModule = __webpack_require__(104);

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(262);
var global = __webpack_require__(24);

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),
/* 71 */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(137);
var requireObjectCoercible = __webpack_require__(62);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__(271);
var stickyHelpers = __webpack_require__(272);

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),
/* 82 */,
/* 83 */,
/* 84 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return startTouchDrag; });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);



const find = (xs, f) => {
    for (let i = 0; i < xs.length; i++) {
        if (f(xs[i])) return xs[i];
    }
};
const getTouch = (e, id) => {
    return find(e.targetTouches, t => t.identifier === id)
        || find(e.changedTouches, t => t.identifier === id);
};

function startTouchDrag(e) {
    if (process.env.NO_TOUCH_DRAGGABLE) return;
    if (this.isGrabbed) return;
    const {onStart, rootRef, onDrag, onStop} = this.props;
    this.isGrabbed = true;

    const rootElement = Object(react_dom__WEBPACK_IMPORTED_MODULE_0__["findDOMNode"])(rootRef ? rootRef.current : this);
    const parentElement = Object(_common__WEBPACK_IMPORTED_MODULE_1__[/* offsetParent */ "d"])(rootElement);
    this.data = Object(_common__WEBPACK_IMPORTED_MODULE_1__[/* getInitialDragData */ "b"])(e.targetTouches[0], parentElement);
    this.touchId = e.targetTouches[0].identifier;
    onStart(e, this.data);

    const globalTouchMove = (e) => {
        const touch = getTouch(e, this.touchId);
        if (!touch) return;
        this.data = Object(_common__WEBPACK_IMPORTED_MODULE_1__[/* getDragData */ "a"])(touch, this.data, parentElement);
        onDrag(e, this.data);
    };

    const globalTouchEnd = (e) => {
        const touch = getTouch(e, this.touchId);
        if (!touch) return;
        this.isGrabbed = false;
        this.data = Object(_common__WEBPACK_IMPORTED_MODULE_1__[/* getDragData */ "a"])(touch, this.data, parentElement);
        onStop(e, this.data);
        this.dispose();
        this.dispose = _common__WEBPACK_IMPORTED_MODULE_1__[/* noop */ "c"];
    };

    this.dispose();

    window.addEventListener('touchmove', globalTouchMove, {passive: false});
    window.addEventListener('touchend', globalTouchEnd, {passive: false});

    this.dispose = () => {
        window.removeEventListener('touchmove', globalTouchMove);
        window.removeEventListener('touchend', globalTouchEnd);
    };
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(50)))

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return startMouseDrag; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);




function startMouseDrag(e) {
    if (process.env.NO_MOUSE_DRAGGABLE) return;
    if (this.isGrabbed) return;
    const {children, rootRef, onStart, onDrag, onStop} = this.props;
    this.isGrabbed = true;

    const child = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.only(children);

    child.props.onMouseDown && child.props.onMouseDown(e);
    const rootElement = Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["findDOMNode"])(rootRef ? rootRef.current : this);
    const parentElement = Object(_common__WEBPACK_IMPORTED_MODULE_2__[/* offsetParent */ "d"])(rootElement);
    this.data = Object(_common__WEBPACK_IMPORTED_MODULE_2__[/* getInitialDragData */ "b"])(e, parentElement);
    onStart(e, this.data);

    const globalMouseMove = (e) => {
        this.data = Object(_common__WEBPACK_IMPORTED_MODULE_2__[/* getDragData */ "a"])(e, this.data, parentElement);
        onDrag(e, this.data);
    };

    const globalMouseUp = (e) => {
        this.data = Object(_common__WEBPACK_IMPORTED_MODULE_2__[/* getDragData */ "a"])(e, this.data, parentElement);
        onStop(e, this.data);
        this.isGrabbed = false;
        this.dispose();
        this.dispose = _common__WEBPACK_IMPORTED_MODULE_2__[/* noop */ "c"];
    };

    window.addEventListener('mouseup', globalMouseUp);
    window.addEventListener('mousemove', globalMouseMove);

    this.dispose();

    this.dispose = () => {
        window.removeEventListener('mouseup', globalMouseUp);
        window.removeEventListener('mousemove', globalMouseMove);
    };
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(50)))

/***/ }),
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(51);
var propertyIsEnumerableModule = __webpack_require__(136);
var createPropertyDescriptor = __webpack_require__(99);
var toIndexedObject = __webpack_require__(78);
var toPrimitive = __webpack_require__(138);
var has = __webpack_require__(43);
var IE8_DOM_DEFINE = __webpack_require__(139);

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(24);
var isObject = __webpack_require__(47);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(24);
var createNonEnumerableProperty = __webpack_require__(52);

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(103);

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(24);
var setGlobal = __webpack_require__(101);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(260);
var global = __webpack_require__(24);
var isObject = __webpack_require__(47);
var createNonEnumerableProperty = __webpack_require__(52);
var objectHas = __webpack_require__(43);
var shared = __webpack_require__(103);
var sharedKey = __webpack_require__(105);
var hiddenKeys = __webpack_require__(106);

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(140);
var uid = __webpack_require__(141);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(71);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),
/* 108 */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(56).f;
var has = __webpack_require__(43);
var wellKnownSymbol = __webpack_require__(27);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(61);
var global = __webpack_require__(24);

module.exports = classof(global.process) == 'process';


/***/ }),
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(38);
var classof = __webpack_require__(61);

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(47);

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(51);
var fails = __webpack_require__(38);
var createElement = __webpack_require__(100);

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(79);
var store = __webpack_require__(103);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.8.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 141 */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(43);
var ownKeys = __webpack_require__(261);
var getOwnPropertyDescriptorModule = __webpack_require__(98);
var definePropertyModule = __webpack_require__(56);

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(43);
var toIndexedObject = __webpack_require__(78);
var indexOf = __webpack_require__(264).indexOf;
var hiddenKeys = __webpack_require__(106);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 144 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(38);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(143);
var enumBugKeys = __webpack_require__(108);

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(62);

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(269);
var isRegExp = __webpack_require__(150);
var anObject = __webpack_require__(39);
var requireObjectCoercible = __webpack_require__(62);
var speciesConstructor = __webpack_require__(151);
var advanceStringIndex = __webpack_require__(274);
var toLength = __webpack_require__(107);
var callRegExpExec = __webpack_require__(276);
var regexpExec = __webpack_require__(80);
var fails = __webpack_require__(38);

var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

// @@split logic
fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SUPPORTS_Y);


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(38);

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(47);
var classof = __webpack_require__(61);
var wellKnownSymbol = __webpack_require__(27);

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(39);
var aFunction = __webpack_require__(81);
var wellKnownSymbol = __webpack_require__(27);

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(39);
var defineProperties = __webpack_require__(280);
var enumBugKeys = __webpack_require__(108);
var hiddenKeys = __webpack_require__(106);
var html = __webpack_require__(153);
var documentCreateElement = __webpack_require__(100);
var sharedKey = __webpack_require__(105);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(70);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__(155);
var createNonEnumerableProperty = __webpack_require__(52);
var has = __webpack_require__(43);
var wellKnownSymbol = __webpack_require__(27);
var IS_PURE = __webpack_require__(79);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(43);
var toObject = __webpack_require__(147);
var sharedKey = __webpack_require__(105);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(283);

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(81);

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(24);
var fails = __webpack_require__(38);
var bind = __webpack_require__(156);
var html = __webpack_require__(153);
var createElement = __webpack_require__(100);
var IS_IOS = __webpack_require__(158);
var IS_NODE = __webpack_require__(110);

var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(id + '', location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (IS_NODE) {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    typeof postMessage == 'function' &&
    !global.importScripts &&
    location && location.protocol !== 'file:' &&
    !fails(post)
  ) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(159);

module.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(70);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(81);

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
};

// 25.4.1.5 NewPromiseCapability(C)
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(363),
    isObjectLike = __webpack_require__(367);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(163);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(364);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ContentRect = function (target) {
    if ('getBBox' in target) {
        var box = target.getBBox();
        return Object.freeze({
            height: box.height,
            left: 0,
            top: 0,
            width: box.width,
        });
    }
    else { // if (target instanceof HTMLElement) { // also includes all other non-SVGGraphicsElements
        var styles = window.getComputedStyle(target);
        return Object.freeze({
            height: parseFloat(styles.height || '0'),
            left: parseFloat(styles.paddingLeft || '0'),
            top: parseFloat(styles.paddingTop || '0'),
            width: parseFloat(styles.width || '0'),
        });
    }
};
exports.ContentRect = ContentRect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGVudFJlY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvQ29udGVudFJlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFPQSxJQUFNLFdBQVcsR0FBRyxVQUFDLE1BQWU7SUFDaEMsSUFBSSxTQUFTLElBQUssTUFBNkIsRUFBRTtRQUM3QyxJQUFNLEdBQUcsR0FBSSxNQUE2QixDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3JELE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNqQixNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU07WUFDbEIsSUFBSSxFQUFFLENBQUM7WUFDUCxHQUFHLEVBQUUsQ0FBQztZQUNOLEtBQUssRUFBRSxHQUFHLENBQUMsS0FBSztTQUNuQixDQUFDLENBQUM7S0FDTjtTQUFNLEVBQUUsMEZBQTBGO1FBQy9GLElBQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQyxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDakIsTUFBTSxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQztZQUN4QyxJQUFJLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxXQUFXLElBQUksR0FBRyxDQUFDO1lBQzNDLEdBQUcsRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxHQUFHLENBQUM7WUFDekMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQztTQUN6QyxDQUFDLENBQUM7S0FDTjtBQUNMLENBQUMsQ0FBQztBQUVPLGtDQUFXIn0=

/***/ }),
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */
/***/ (function(module, exports) {

/* global Map:readonly, Set:readonly, ArrayBuffer:readonly */

var hasElementType = typeof Element !== 'undefined';
var hasMap = typeof Map === 'function';
var hasSet = typeof Set === 'function';
var hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView;

// Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js

function equal(a, b) {
  // START: fast-deep-equal es6/index.js 3.1.1
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    // START: Modifications:
    // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
    //    to co-exist with es5.
    // 2. Replace `for of` with es5 compliant iteration using `for`.
    //    Basically, take:
    //
    //    ```js
    //    for (i of a.entries())
    //      if (!b.has(i[0])) return false;
    //    ```
    //
    //    ... and convert to:
    //
    //    ```js
    //    it = a.entries();
    //    while (!(i = it.next()).done)
    //      if (!b.has(i.value[0])) return false;
    //    ```
    //
    //    **Note**: `i` access switches to `i.value`.
    var it;
    if (hasMap && (a instanceof Map) && (b instanceof Map)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!equal(i.value[1], b.get(i.value[0]))) return false;
      return true;
    }

    if (hasSet && (a instanceof Set) && (b instanceof Set)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      return true;
    }
    // END: Modifications

    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (a[i] !== b[i]) return false;
      return true;
    }

    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    // END: fast-deep-equal

    // START: react-fast-compare
    // custom handling for DOM elements
    if (hasElementType && a instanceof Element) return false;

    // custom handling for React/Preact
    for (i = length; i-- !== 0;) {
      if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner
        // Preact-specific: avoid traversing Preact elements' __v and __o
        //    __v = $_original / $_vnode
        //    __o = $_owner
        // These properties contain circular references and are not needed when
        // comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of elements

        continue;
      }

      // all other properties should be traversed as usual
      if (!equal(a[keys[i]], b[keys[i]])) return false;
    }
    // END: react-fast-compare

    // START: fast-deep-equal
    return true;
  }

  return a !== a && b !== b;
}
// end fast-deep-equal

module.exports = function isEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if (((error.message || '').match(/stack|recursion/i))) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('react-fast-compare cannot handle circular refs');
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

var baseExtremum = __webpack_require__(362),
    baseGt = __webpack_require__(368),
    identity = __webpack_require__(369);

/**
 * Computes the maximum value of `array`. If `array` is empty or falsey,
 * `undefined` is returned.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {*} Returns the maximum value.
 * @example
 *
 * _.max([4, 2, 8, 6]);
 * // => 8
 *
 * _.max([]);
 * // => undefined
 */
function max(array) {
  return (array && array.length)
    ? baseExtremum(array, identity, baseGt)
    : undefined;
}

module.exports = max;


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ResizeObservation_1 = __webpack_require__(370);
var ResizeObserverEntry_1 = __webpack_require__(371);
var resizeObservers = [];
var ResizeObserver = /** @class */ (function () {
    function ResizeObserver(callback) {
        /** @internal */
        this.$$observationTargets = [];
        /** @internal */
        this.$$activeTargets = [];
        /** @internal */
        this.$$skippedTargets = [];
        var message = callbackGuard(callback);
        if (message) {
            throw TypeError(message);
        }
        this.$$callback = callback;
    }
    ResizeObserver.prototype.observe = function (target) {
        var message = targetGuard('observe', target);
        if (message) {
            throw TypeError(message);
        }
        var index = findTargetIndex(this.$$observationTargets, target);
        if (index >= 0) {
            return;
        }
        this.$$observationTargets.push(new ResizeObservation_1.ResizeObservation(target));
        registerResizeObserver(this);
    };
    ResizeObserver.prototype.unobserve = function (target) {
        var message = targetGuard('unobserve', target);
        if (message) {
            throw TypeError(message);
        }
        var index = findTargetIndex(this.$$observationTargets, target);
        if (index < 0) {
            return;
        }
        this.$$observationTargets.splice(index, 1);
        if (this.$$observationTargets.length === 0) {
            deregisterResizeObserver(this);
        }
    };
    ResizeObserver.prototype.disconnect = function () {
        this.$$observationTargets = [];
        this.$$activeTargets = [];
        deregisterResizeObserver(this);
    };
    return ResizeObserver;
}());
exports.ResizeObserver = ResizeObserver;
function registerResizeObserver(resizeObserver) {
    var index = resizeObservers.indexOf(resizeObserver);
    if (index < 0) {
        resizeObservers.push(resizeObserver);
        startLoop();
    }
}
function deregisterResizeObserver(resizeObserver) {
    var index = resizeObservers.indexOf(resizeObserver);
    if (index >= 0) {
        resizeObservers.splice(index, 1);
        checkStopLoop();
    }
}
function callbackGuard(callback) {
    if (typeof (callback) === 'undefined') {
        return "Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.";
    }
    if (typeof (callback) !== 'function') {
        return "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.";
    }
}
function targetGuard(functionName, target) {
    if (typeof (target) === 'undefined') {
        return "Failed to execute '" + functionName + "' on 'ResizeObserver': 1 argument required, but only 0 present.";
    }
    if (!(target instanceof window.Element)) {
        return "Failed to execute '" + functionName + "' on 'ResizeObserver': parameter 1 is not of type 'Element'.";
    }
}
function findTargetIndex(collection, target) {
    for (var index = 0; index < collection.length; index += 1) {
        if (collection[index].target === target) {
            return index;
        }
    }
    return -1;
}
var gatherActiveObservationsAtDepth = function (depth) {
    resizeObservers.forEach(function (ro) {
        ro.$$activeTargets = [];
        ro.$$skippedTargets = [];
        ro.$$observationTargets.forEach(function (ot) {
            if (ot.isActive()) {
                var targetDepth = calculateDepthForNode(ot.target);
                if (targetDepth > depth) {
                    ro.$$activeTargets.push(ot);
                }
                else {
                    ro.$$skippedTargets.push(ot);
                }
            }
        });
    });
};
var hasActiveObservations = function () {
    return resizeObservers.some(function (ro) { return !!ro.$$activeTargets.length; });
};
var hasSkippedObservations = function () {
    return resizeObservers.some(function (ro) { return !!ro.$$skippedTargets.length; });
};
var broadcastActiveObservations = function () {
    var shallowestTargetDepth = Infinity;
    resizeObservers.forEach(function (ro) {
        if (!ro.$$activeTargets.length) {
            return;
        }
        var entries = [];
        ro.$$activeTargets.forEach(function (obs) {
            var entry = new ResizeObserverEntry_1.ResizeObserverEntry(obs.target);
            entries.push(entry);
            obs.$$broadcastWidth = entry.contentRect.width;
            obs.$$broadcastHeight = entry.contentRect.height;
            var targetDepth = calculateDepthForNode(obs.target);
            if (targetDepth < shallowestTargetDepth) {
                shallowestTargetDepth = targetDepth;
            }
        });
        ro.$$callback(entries, ro);
        ro.$$activeTargets = [];
    });
    return shallowestTargetDepth;
};
var deliverResizeLoopErrorNotification = function () {
    var errorEvent = new window.ErrorEvent('ResizeLoopError', {
        message: 'ResizeObserver loop completed with undelivered notifications.',
    });
    window.dispatchEvent(errorEvent);
};
var calculateDepthForNode = function (target) {
    var depth = 0;
    while (target.parentNode) {
        target = target.parentNode;
        depth += 1;
    }
    return depth;
};
var notificationIteration = function () {
    var depth = 0;
    gatherActiveObservationsAtDepth(depth);
    while (hasActiveObservations()) {
        depth = broadcastActiveObservations();
        gatherActiveObservationsAtDepth(depth);
    }
    if (hasSkippedObservations()) {
        deliverResizeLoopErrorNotification();
    }
};
var animationFrameCancelToken;
var startLoop = function () {
    if (animationFrameCancelToken)
        return;
    runLoop();
};
var runLoop = function () {
    animationFrameCancelToken = window.requestAnimationFrame(function () {
        notificationIteration();
        runLoop();
    });
};
var checkStopLoop = function () {
    if (animationFrameCancelToken && !resizeObservers.some(function (ro) { return !!ro.$$observationTargets.length; })) {
        window.cancelAnimationFrame(animationFrameCancelToken);
        animationFrameCancelToken = undefined;
    }
};
var install = function () {
    return window.ResizeObserver = ResizeObserver;
};
exports.install = install;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzaXplT2JzZXJ2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvUmVzaXplT2JzZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5REFBd0Q7QUFFeEQsNkRBQTREO0FBRTVELElBQU0sZUFBZSxHQUFHLEVBQXNCLENBQUM7QUFFL0M7SUFVSSx3QkFBWSxRQUFnQztRQVA1QyxnQkFBZ0I7UUFDVCx5QkFBb0IsR0FBRyxFQUF5QixDQUFDO1FBQ3hELGdCQUFnQjtRQUNULG9CQUFlLEdBQUcsRUFBeUIsQ0FBQztRQUNuRCxnQkFBZ0I7UUFDVCxxQkFBZ0IsR0FBRyxFQUF5QixDQUFDO1FBR2hELElBQU0sT0FBTyxHQUFHLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4QyxJQUFJLE9BQU8sRUFBRTtZQUNULE1BQU0sU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzVCO1FBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7SUFDL0IsQ0FBQztJQUVNLGdDQUFPLEdBQWQsVUFBZSxNQUFlO1FBQzFCLElBQU0sT0FBTyxHQUFHLFdBQVcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDL0MsSUFBSSxPQUFPLEVBQUU7WUFDVCxNQUFNLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM1QjtRQUNELElBQU0sS0FBSyxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDakUsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO1lBQ1osT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLHFDQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDOUQsc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVNLGtDQUFTLEdBQWhCLFVBQWlCLE1BQWU7UUFDNUIsSUFBTSxPQUFPLEdBQUcsV0FBVyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNqRCxJQUFJLE9BQU8sRUFBRTtZQUNULE1BQU0sU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzVCO1FBQ0QsSUFBTSxLQUFLLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNqRSxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDWCxPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMzQyxJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3hDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2xDO0lBQ0wsQ0FBQztJQUVNLG1DQUFVLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLG9CQUFvQixHQUFHLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUMxQix3QkFBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLEFBbkRELElBbURDO0FBdUpHLHdDQUFjO0FBckpsQixTQUFTLHNCQUFzQixDQUFDLGNBQThCO0lBQzFELElBQU0sS0FBSyxHQUFHLGVBQWUsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDdEQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1FBQ1gsZUFBZSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNyQyxTQUFTLEVBQUUsQ0FBQztLQUNmO0FBQ0wsQ0FBQztBQUVELFNBQVMsd0JBQXdCLENBQUMsY0FBOEI7SUFDNUQsSUFBTSxLQUFLLEdBQUcsZUFBZSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN0RCxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7UUFDWixlQUFlLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqQyxhQUFhLEVBQUUsQ0FBQztLQUNuQjtBQUNMLENBQUM7QUFFRCxTQUFTLGFBQWEsQ0FBQyxRQUFnQztJQUNuRCxJQUFJLE9BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxXQUFXLEVBQUU7UUFDbEMsT0FBTyxnRkFBZ0YsQ0FBQztLQUMzRjtJQUNELElBQUksT0FBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLFVBQVUsRUFBRTtRQUNqQyxPQUFPLCtGQUErRixDQUFDO0tBQzFHO0FBQ0wsQ0FBQztBQUVELFNBQVMsV0FBVyxDQUFDLFlBQW9CLEVBQUUsTUFBZTtJQUN0RCxJQUFJLE9BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxXQUFXLEVBQUU7UUFDaEMsT0FBTyx3QkFBc0IsWUFBWSxvRUFBaUUsQ0FBQztLQUM5RztJQUNELElBQUksQ0FBQyxDQUFDLE1BQU0sWUFBYSxNQUFjLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDOUMsT0FBTyx3QkFBc0IsWUFBWSxpRUFBOEQsQ0FBQztLQUMzRztBQUNMLENBQUM7QUFFRCxTQUFTLGVBQWUsQ0FBQyxVQUErQixFQUFFLE1BQWU7SUFDckUsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxJQUFJLENBQUMsRUFBRTtRQUN2RCxJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssTUFBTSxFQUFFO1lBQ3JDLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO0tBQ0o7SUFDRCxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQ2QsQ0FBQztBQUVELElBQU0sK0JBQStCLEdBQUcsVUFBQyxLQUFhO0lBQ2xELGVBQWUsQ0FBQyxPQUFPLENBQUMsVUFBQyxFQUFFO1FBQ3ZCLEVBQUUsQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLEVBQUUsQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDekIsRUFBRSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxVQUFDLEVBQUU7WUFDL0IsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUU7Z0JBQ2YsSUFBTSxXQUFXLEdBQUcscUJBQXFCLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNyRCxJQUFJLFdBQVcsR0FBRyxLQUFLLEVBQUU7b0JBQ3JCLEVBQUUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUMvQjtxQkFBTTtvQkFDSCxFQUFFLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUNoQzthQUNKO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQztBQUVGLElBQU0scUJBQXFCLEdBQUc7SUFDMUIsT0FBQSxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQUMsRUFBRSxJQUFLLE9BQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUEzQixDQUEyQixDQUFDO0FBQXpELENBQXlELENBQUM7QUFFOUQsSUFBTSxzQkFBc0IsR0FBRztJQUMzQixPQUFBLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBQyxFQUFFLElBQUssT0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBNUIsQ0FBNEIsQ0FBQztBQUExRCxDQUEwRCxDQUFDO0FBRS9ELElBQU0sMkJBQTJCLEdBQUc7SUFDaEMsSUFBSSxxQkFBcUIsR0FBRyxRQUFRLENBQUM7SUFDckMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEVBQUU7UUFDdkIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFO1lBQzVCLE9BQU87U0FDVjtRQUVELElBQU0sT0FBTyxHQUFHLEVBQTJCLENBQUM7UUFDNUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHO1lBQzNCLElBQU0sS0FBSyxHQUFHLElBQUkseUNBQW1CLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2xELE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEIsR0FBRyxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQy9DLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztZQUNqRCxJQUFNLFdBQVcsR0FBRyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdEQsSUFBSSxXQUFXLEdBQUcscUJBQXFCLEVBQUU7Z0JBQ3JDLHFCQUFxQixHQUFHLFdBQVcsQ0FBQzthQUN2QztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDM0IsRUFBRSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7SUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLHFCQUFxQixDQUFDO0FBQ2pDLENBQUMsQ0FBQztBQUVGLElBQU0sa0NBQWtDLEdBQUc7SUFDdkMsSUFBTSxVQUFVLEdBQUcsSUFBSyxNQUFjLENBQUMsVUFBVSxDQUFDLGlCQUFpQixFQUFFO1FBQ2pFLE9BQU8sRUFBRSwrREFBK0Q7S0FDM0UsQ0FBQyxDQUFDO0lBRUgsTUFBTSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNyQyxDQUFDLENBQUM7QUFFRixJQUFNLHFCQUFxQixHQUFHLFVBQUMsTUFBWTtJQUN2QyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDZCxPQUFPLE1BQU0sQ0FBQyxVQUFVLEVBQUU7UUFDdEIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDM0IsS0FBSyxJQUFJLENBQUMsQ0FBQztLQUNkO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQyxDQUFDO0FBRUYsSUFBTSxxQkFBcUIsR0FBRztJQUMxQixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDZCwrQkFBK0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxPQUFPLHFCQUFxQixFQUFFLEVBQUU7UUFDNUIsS0FBSyxHQUFHLDJCQUEyQixFQUFFLENBQUM7UUFDdEMsK0JBQStCLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDMUM7SUFFRCxJQUFJLHNCQUFzQixFQUFFLEVBQUU7UUFDMUIsa0NBQWtDLEVBQUUsQ0FBQztLQUN4QztBQUNMLENBQUMsQ0FBQztBQUVGLElBQUkseUJBQTZDLENBQUM7QUFFbEQsSUFBTSxTQUFTLEdBQUc7SUFDZCxJQUFJLHlCQUF5QjtRQUFFLE9BQU87SUFFdEMsT0FBTyxFQUFFLENBQUM7QUFDZCxDQUFDLENBQUM7QUFFRixJQUFNLE9BQU8sR0FBRztJQUNaLHlCQUF5QixHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQztRQUNyRCxxQkFBcUIsRUFBRSxDQUFDO1FBQ3hCLE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUM7QUFFRixJQUFNLGFBQWEsR0FBRztJQUNsQixJQUFJLHlCQUF5QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFDLEVBQUUsSUFBSyxPQUFBLENBQUMsQ0FBQyxFQUFFLENBQUMsb0JBQW9CLENBQUMsTUFBTSxFQUFoQyxDQUFnQyxDQUFDLEVBQUU7UUFDOUYsTUFBTSxDQUFDLG9CQUFvQixDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDdkQseUJBQXlCLEdBQUcsU0FBUyxDQUFDO0tBQ3pDO0FBQ0wsQ0FBQyxDQUFDO0FBRUYsSUFBTSxPQUFPLEdBQUc7SUFDWixPQUFDLE1BQWMsQ0FBQyxjQUFjLEdBQUcsY0FBYztBQUEvQyxDQUErQyxDQUFDO0FBR2hELDBCQUFPIn0=

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(84),
    now = __webpack_require__(372),
    toNumber = __webpack_require__(373);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.14.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var l=__webpack_require__(135),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,z=n?Symbol.for("react.memo"):60115,A=n?Symbol.for("react.lazy"):
60116,B="function"===typeof Symbol&&Symbol.iterator;function C(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E={};function F(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D}F.prototype.isReactComponent={};F.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(C(85));this.updater.enqueueSetState(this,a,b,"setState")};F.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
function G(){}G.prototype=F.prototype;function H(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D}var I=H.prototype=new G;I.constructor=H;l(I,F.prototype);I.isPureReactComponent=!0;var J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,c){var e,d={},g=null,k=null;if(null!=b)for(e in void 0!==b.ref&&(k=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,e)&&!L.hasOwnProperty(e)&&(d[e]=b[e]);var f=arguments.length-2;if(1===f)d.children=c;else if(1<f){for(var h=Array(f),m=0;m<f;m++)h[m]=arguments[m+2];d.children=h}if(a&&a.defaultProps)for(e in f=a.defaultProps,f)void 0===d[e]&&(d[e]=f[e]);return{$$typeof:p,type:a,key:g,ref:k,props:d,_owner:J.current}}
function N(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g,Q=[];function R(a,b,c,e){if(Q.length){var d=Q.pop();d.result=a;d.keyPrefix=b;d.func=c;d.context=e;d.count=0;return d}return{result:a,keyPrefix:b,func:c,context:e,count:0}}
function S(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>Q.length&&Q.push(a)}
function T(a,b,c,e){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return c(e,a,""===b?"."+U(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var k=0;k<a.length;k++){d=a[k];var f=b+U(d,k);g+=T(d,f,c,e)}else if(null===a||"object"!==typeof a?f=null:(f=B&&a[B]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),k=
0;!(d=a.next()).done;)d=d.value,f=b+U(d,k++),g+=T(d,f,c,e);else if("object"===d)throw c=""+a,Error(C(31,"[object Object]"===c?"object with keys {"+Object.keys(a).join(", ")+"}":c,""));return g}function V(a,b,c){return null==a?0:T(a,"",b,c)}function U(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function W(a,b){a.func.call(a.context,b,a.count++)}
function aa(a,b,c){var e=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?X(a,e,c,function(a){return a}):null!=a&&(O(a)&&(a=N(a,d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+c)),e.push(a))}function X(a,b,c,e,d){var g="";null!=c&&(g=(""+c).replace(P,"$&/")+"/");b=R(b,g,e,d);V(a,aa,b);S(b)}var Y={current:null};function Z(){var a=Y.current;if(null===a)throw Error(C(321));return a}
var ba={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:J,IsSomeRendererActing:{current:!1},assign:l};exports.Children={map:function(a,b,c){if(null==a)return a;var e=[];X(a,e,null,b,c);return e},forEach:function(a,b,c){if(null==a)return a;b=R(null,null,b,c);V(a,W,b);S(b)},count:function(a){return V(a,function(){return null},null)},toArray:function(a){var b=[];X(a,b,null,function(a){return a});return b},only:function(a){if(!O(a))throw Error(C(143));return a}};
exports.Component=F;exports.Fragment=r;exports.Profiler=u;exports.PureComponent=H;exports.StrictMode=t;exports.Suspense=y;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ba;
exports.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(C(267,a));var e=l({},a.props),d=a.key,g=a.ref,k=a._owner;if(null!=b){void 0!==b.ref&&(g=b.ref,k=J.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var f=a.type.defaultProps;for(h in b)K.call(b,h)&&!L.hasOwnProperty(h)&&(e[h]=void 0===b[h]&&void 0!==f?f[h]:b[h])}var h=arguments.length-2;if(1===h)e.children=c;else if(1<h){f=Array(h);for(var m=0;m<h;m++)f[m]=arguments[m+2];e.children=f}return{$$typeof:p,type:a.type,
key:d,ref:g,props:e,_owner:k}};exports.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a};exports.createElement=M;exports.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};exports.forwardRef=function(a){return{$$typeof:x,render:a}};exports.isValidElement=O;
exports.lazy=function(a){return{$$typeof:A,_ctor:a,_status:-1,_result:null}};exports.memo=function(a,b){return{$$typeof:z,type:a,compare:void 0===b?null:b}};exports.useCallback=function(a,b){return Z().useCallback(a,b)};exports.useContext=function(a,b){return Z().useContext(a,b)};exports.useDebugValue=function(){};exports.useEffect=function(a,b){return Z().useEffect(a,b)};exports.useImperativeHandle=function(a,b,c){return Z().useImperativeHandle(a,b,c)};
exports.useLayoutEffect=function(a,b){return Z().useLayoutEffect(a,b)};exports.useMemo=function(a,b){return Z().useMemo(a,b)};exports.useReducer=function(a,b,c){return Z().useReducer(a,b,c)};exports.useRef=function(a){return Z().useRef(a)};exports.useState=function(a){return Z().useState(a)};exports.version="16.14.0";


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.0
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(2),n=__webpack_require__(135),r=__webpack_require__(258);function u(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!aa)throw Error(u(227));
function ba(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}var da=!1,ea=null,fa=!1,ha=null,ia={onError:function(a){da=!0;ea=a}};function ja(a,b,c,d,e,f,g,h,k){da=!1;ea=null;ba.apply(ia,arguments)}function ka(a,b,c,d,e,f,g,h,k){ja.apply(this,arguments);if(da){if(da){var l=ea;da=!1;ea=null}else throw Error(u(198));fa||(fa=!0,ha=l)}}var la=null,ma=null,na=null;
function oa(a,b,c){var d=a.type||"unknown-event";a.currentTarget=na(c);ka(d,b,void 0,a);a.currentTarget=null}var pa=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;pa.hasOwnProperty("ReactCurrentDispatcher")||(pa.ReactCurrentDispatcher={current:null});pa.hasOwnProperty("ReactCurrentBatchConfig")||(pa.ReactCurrentBatchConfig={suspense:null});
var qa=/^(.*)[\\\/]/,v="function"===typeof Symbol&&Symbol.for,ra=v?Symbol.for("react.element"):60103,sa=v?Symbol.for("react.portal"):60106,ta=v?Symbol.for("react.fragment"):60107,ua=v?Symbol.for("react.strict_mode"):60108,va=v?Symbol.for("react.profiler"):60114,wa=v?Symbol.for("react.provider"):60109,xa=v?Symbol.for("react.context"):60110,ya=v?Symbol.for("react.concurrent_mode"):60111,za=v?Symbol.for("react.forward_ref"):60112,Aa=v?Symbol.for("react.suspense"):60113,Ba=v?Symbol.for("react.suspense_list"):
60120,Ca=v?Symbol.for("react.memo"):60115,Da=v?Symbol.for("react.lazy"):60116,Ea=v?Symbol.for("react.block"):60121,Fa="function"===typeof Symbol&&Symbol.iterator;function Ga(a){if(null===a||"object"!==typeof a)return null;a=Fa&&a[Fa]||a["@@iterator"];return"function"===typeof a?a:null}function Ha(a){if(-1===a._status){a._status=0;var b=a._ctor;b=b();a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)})}}
function Ia(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ta:return"Fragment";case sa:return"Portal";case va:return"Profiler";case ua:return"StrictMode";case Aa:return"Suspense";case Ba:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case xa:return"Context.Consumer";case wa:return"Context.Provider";case za:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+")":
"ForwardRef");case Ca:return Ia(a.type);case Ea:return Ia(a.render);case Da:if(a=1===a._status?a._result:null)return Ia(a)}return null}function Ja(a){var b="";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c="";break a;default:var d=a._debugOwner,e=a._debugSource,f=Ia(a.type);c=null;d&&(c=Ia(d.type));d=f;f="";e?f=" (at "+e.fileName.replace(qa,"")+":"+e.lineNumber+")":c&&(f=" (created by "+c+")");c="\n    in "+(d||"Unknown")+f}b+=c;a=a.return}while(a);return b}var Ka=null,La={};
function Ma(){if(Ka)for(var a in La){var b=La[a],c=Ka.indexOf(a);if(!(-1<c))throw Error(u(96,a));if(!Na[c]){if(!b.extractEvents)throw Error(u(97,a));Na[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;if(Oa.hasOwnProperty(h))throw Error(u(99,h));Oa[h]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&Pa(k[e],g,h);e=!0}else f.registrationName?(Pa(f.registrationName,g,h),e=!0):e=!1;if(!e)throw Error(u(98,d,a));}}}}
function Pa(a,b,c){if(Qa[a])throw Error(u(100,a));Qa[a]=b;Ra[a]=b.eventTypes[c].dependencies}var Na=[],Oa={},Qa={},Ra={};function Sa(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(!La.hasOwnProperty(c)||La[c]!==d){if(La[c])throw Error(u(102,c));La[c]=d;b=!0}}b&&Ma()}var Ta=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),Ua=null,Va=null,Wa=null;
function Xa(a){if(a=ma(a)){if("function"!==typeof Ua)throw Error(u(280));var b=a.stateNode;b&&(b=la(b),Ua(a.stateNode,a.type,b))}}function Ya(a){Va?Wa?Wa.push(a):Wa=[a]:Va=a}function Za(){if(Va){var a=Va,b=Wa;Wa=Va=null;Xa(a);if(b)for(a=0;a<b.length;a++)Xa(b[a])}}function $a(a,b){return a(b)}function ab(a,b,c,d,e){return a(b,c,d,e)}function bb(){}var cb=$a,db=!1,eb=!1;function fb(){if(null!==Va||null!==Wa)bb(),Za()}
function gb(a,b,c){if(eb)return a(b,c);eb=!0;try{return cb(a,b,c)}finally{eb=!1,fb()}}var hb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ib=Object.prototype.hasOwnProperty,jb={},kb={};
function lb(a){if(ib.call(kb,a))return!0;if(ib.call(jb,a))return!1;if(hb.test(a))return kb[a]=!0;jb[a]=!0;return!1}function mb(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function nb(a,b,c,d){if(null===b||"undefined"===typeof b||mb(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function C(a,b,c,d,e,f){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f}var E={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){E[a]=new C(a,0,!1,a,null,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];E[b]=new C(b,1,!1,a[1],null,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){E[a]=new C(a,2,!1,a.toLowerCase(),null,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){E[a]=new C(a,2,!1,a,null,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){E[a]=new C(a,3,!1,a.toLowerCase(),null,!1)});
["checked","multiple","muted","selected"].forEach(function(a){E[a]=new C(a,3,!0,a,null,!1)});["capture","download"].forEach(function(a){E[a]=new C(a,4,!1,a,null,!1)});["cols","rows","size","span"].forEach(function(a){E[a]=new C(a,6,!1,a,null,!1)});["rowSpan","start"].forEach(function(a){E[a]=new C(a,5,!1,a.toLowerCase(),null,!1)});var ob=/[\-:]([a-z])/g;function pb(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(ob,
pb);E[b]=new C(b,1,!1,a,null,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(ob,pb);E[b]=new C(b,1,!1,a,"http://www.w3.org/1999/xlink",!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(ob,pb);E[b]=new C(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1)});["tabIndex","crossOrigin"].forEach(function(a){E[a]=new C(a,1,!1,a.toLowerCase(),null,!1)});
E.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(a){E[a]=new C(a,1,!1,a.toLowerCase(),null,!0)});
function qb(a,b,c,d){var e=E.hasOwnProperty(b)?E[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(nb(b,c,e,d)&&(c=null),d||null===e?lb(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
function rb(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function sb(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function tb(a){var b=sb(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function xb(a){a._valueTracker||(a._valueTracker=tb(a))}function yb(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=sb(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function zb(a,b){var c=b.checked;return n({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
function Ab(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=rb(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function Bb(a,b){b=b.checked;null!=b&&qb(a,"checked",b,!1)}
function Cb(a,b){Bb(a,b);var c=rb(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?Db(a,b.type,c):b.hasOwnProperty("defaultValue")&&Db(a,b.type,rb(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function Eb(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function Db(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}function Fb(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}function Gb(a,b){a=n({children:void 0},b);if(b=Fb(b.children))a.children=b;return a}
function Hb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+rb(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function Ib(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(u(91));return n({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function Jb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(u(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(u(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:rb(c)}}
function Kb(a,b){var c=rb(b.value),d=rb(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function Lb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}var Mb={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function Nb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ob(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?Nb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var Pb,Qb=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==Mb.svg||"innerHTML"in a)a.innerHTML=b;else{Pb=Pb||document.createElement("div");Pb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=Pb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function Rb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}function Sb(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Tb={animationend:Sb("Animation","AnimationEnd"),animationiteration:Sb("Animation","AnimationIteration"),animationstart:Sb("Animation","AnimationStart"),transitionend:Sb("Transition","TransitionEnd")},Ub={},Vb={};
Ta&&(Vb=document.createElement("div").style,"AnimationEvent"in window||(delete Tb.animationend.animation,delete Tb.animationiteration.animation,delete Tb.animationstart.animation),"TransitionEvent"in window||delete Tb.transitionend.transition);function Wb(a){if(Ub[a])return Ub[a];if(!Tb[a])return a;var b=Tb[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Vb)return Ub[a]=b[c];return a}
var Xb=Wb("animationend"),Yb=Wb("animationiteration"),Zb=Wb("animationstart"),$b=Wb("transitionend"),ac="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bc=new ("function"===typeof WeakMap?WeakMap:Map);function cc(a){var b=bc.get(a);void 0===b&&(b=new Map,bc.set(a,b));return b}
function dc(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.effectTag&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function ec(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function fc(a){if(dc(a)!==a)throw Error(u(188));}
function gc(a){var b=a.alternate;if(!b){b=dc(a);if(null===b)throw Error(u(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return fc(e),a;if(f===d)return fc(e),b;f=f.sibling}throw Error(u(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(u(189));}}if(c.alternate!==d)throw Error(u(190));}if(3!==c.tag)throw Error(u(188));return c.stateNode.current===c?a:b}function hc(a){a=gc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
function ic(a,b){if(null==b)throw Error(u(30));if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}function jc(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var kc=null;
function lc(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)oa(a,b[d],c[d]);else b&&oa(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}function mc(a){null!==a&&(kc=ic(kc,a));a=kc;kc=null;if(a){jc(a,lc);if(kc)throw Error(u(95));if(fa)throw a=ha,fa=!1,ha=null,a;}}
function nc(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function oc(a){if(!Ta)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}var pc=[];function qc(a){a.topLevelType=null;a.nativeEvent=null;a.targetInst=null;a.ancestors.length=0;10>pc.length&&pc.push(a)}
function rc(a,b,c,d){if(pc.length){var e=pc.pop();e.topLevelType=a;e.eventSystemFlags=d;e.nativeEvent=b;e.targetInst=c;return e}return{topLevelType:a,eventSystemFlags:d,nativeEvent:b,targetInst:c,ancestors:[]}}
function sc(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d=c;if(3===d.tag)d=d.stateNode.containerInfo;else{for(;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo}if(!d)break;b=c.tag;5!==b&&6!==b||a.ancestors.push(c);c=tc(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=nc(a.nativeEvent);d=a.topLevelType;var f=a.nativeEvent,g=a.eventSystemFlags;0===c&&(g|=64);for(var h=null,k=0;k<Na.length;k++){var l=Na[k];l&&(l=l.extractEvents(d,b,f,e,g))&&(h=
ic(h,l))}mc(h)}}function uc(a,b,c){if(!c.has(a)){switch(a){case "scroll":vc(b,"scroll",!0);break;case "focus":case "blur":vc(b,"focus",!0);vc(b,"blur",!0);c.set("blur",null);c.set("focus",null);break;case "cancel":case "close":oc(a)&&vc(b,a,!0);break;case "invalid":case "submit":case "reset":break;default:-1===ac.indexOf(a)&&F(a,b)}c.set(a,null)}}
var wc,xc,yc,zc=!1,Ac=[],Bc=null,Cc=null,Dc=null,Ec=new Map,Fc=new Map,Gc=[],Hc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),Ic="focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");
function Jc(a,b){var c=cc(b);Hc.forEach(function(a){uc(a,b,c)});Ic.forEach(function(a){uc(a,b,c)})}function Kc(a,b,c,d,e){return{blockedOn:a,topLevelType:b,eventSystemFlags:c|32,nativeEvent:e,container:d}}
function Lc(a,b){switch(a){case "focus":case "blur":Bc=null;break;case "dragenter":case "dragleave":Cc=null;break;case "mouseover":case "mouseout":Dc=null;break;case "pointerover":case "pointerout":Ec.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Fc.delete(b.pointerId)}}function Mc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a=Kc(b,c,d,e,f),null!==b&&(b=Nc(b),null!==b&&xc(b)),a;a.eventSystemFlags|=d;return a}
function Oc(a,b,c,d,e){switch(b){case "focus":return Bc=Mc(Bc,a,b,c,d,e),!0;case "dragenter":return Cc=Mc(Cc,a,b,c,d,e),!0;case "mouseover":return Dc=Mc(Dc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;Ec.set(f,Mc(Ec.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,Fc.set(f,Mc(Fc.get(f)||null,a,b,c,d,e)),!0}return!1}
function Pc(a){var b=tc(a.target);if(null!==b){var c=dc(b);if(null!==c)if(b=c.tag,13===b){if(b=ec(c),null!==b){a.blockedOn=b;r.unstable_runWithPriority(a.priority,function(){yc(c)});return}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}function Qc(a){if(null!==a.blockedOn)return!1;var b=Rc(a.topLevelType,a.eventSystemFlags,a.container,a.nativeEvent);if(null!==b){var c=Nc(b);null!==c&&xc(c);a.blockedOn=b;return!1}return!0}
function Sc(a,b,c){Qc(a)&&c.delete(b)}function Tc(){for(zc=!1;0<Ac.length;){var a=Ac[0];if(null!==a.blockedOn){a=Nc(a.blockedOn);null!==a&&wc(a);break}var b=Rc(a.topLevelType,a.eventSystemFlags,a.container,a.nativeEvent);null!==b?a.blockedOn=b:Ac.shift()}null!==Bc&&Qc(Bc)&&(Bc=null);null!==Cc&&Qc(Cc)&&(Cc=null);null!==Dc&&Qc(Dc)&&(Dc=null);Ec.forEach(Sc);Fc.forEach(Sc)}function Uc(a,b){a.blockedOn===b&&(a.blockedOn=null,zc||(zc=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Tc)))}
function Vc(a){function b(b){return Uc(b,a)}if(0<Ac.length){Uc(Ac[0],a);for(var c=1;c<Ac.length;c++){var d=Ac[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==Bc&&Uc(Bc,a);null!==Cc&&Uc(Cc,a);null!==Dc&&Uc(Dc,a);Ec.forEach(b);Fc.forEach(b);for(c=0;c<Gc.length;c++)d=Gc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Gc.length&&(c=Gc[0],null===c.blockedOn);)Pc(c),null===c.blockedOn&&Gc.shift()}
var Wc={},Yc=new Map,Zc=new Map,$c=["abort","abort",Xb,"animationEnd",Yb,"animationIteration",Zb,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking",
"seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",$b,"transitionEnd","waiting","waiting"];function ad(a,b){for(var c=0;c<a.length;c+=2){var d=a[c],e=a[c+1],f="on"+(e[0].toUpperCase()+e.slice(1));f={phasedRegistrationNames:{bubbled:f,captured:f+"Capture"},dependencies:[d],eventPriority:b};Zc.set(d,b);Yc.set(d,f);Wc[e]=f}}
ad("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);
ad("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);ad($c,2);for(var bd="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),cd=0;cd<bd.length;cd++)Zc.set(bd[cd],0);
var dd=r.unstable_UserBlockingPriority,ed=r.unstable_runWithPriority,fd=!0;function F(a,b){vc(b,a,!1)}function vc(a,b,c){var d=Zc.get(b);switch(void 0===d?2:d){case 0:d=gd.bind(null,b,1,a);break;case 1:d=hd.bind(null,b,1,a);break;default:d=id.bind(null,b,1,a)}c?a.addEventListener(b,d,!0):a.addEventListener(b,d,!1)}function gd(a,b,c,d){db||bb();var e=id,f=db;db=!0;try{ab(e,a,b,c,d)}finally{(db=f)||fb()}}function hd(a,b,c,d){ed(dd,id.bind(null,a,b,c,d))}
function id(a,b,c,d){if(fd)if(0<Ac.length&&-1<Hc.indexOf(a))a=Kc(null,a,b,c,d),Ac.push(a);else{var e=Rc(a,b,c,d);if(null===e)Lc(a,d);else if(-1<Hc.indexOf(a))a=Kc(e,a,b,c,d),Ac.push(a);else if(!Oc(e,a,b,c,d)){Lc(a,d);a=rc(a,d,null,b);try{gb(sc,a)}finally{qc(a)}}}}
function Rc(a,b,c,d){c=nc(d);c=tc(c);if(null!==c){var e=dc(c);if(null===e)c=null;else{var f=e.tag;if(13===f){c=ec(e);if(null!==c)return c;c=null}else if(3===f){if(e.stateNode.hydrate)return 3===e.tag?e.stateNode.containerInfo:null;c=null}else e!==c&&(c=null)}}a=rc(a,d,c,b);try{gb(sc,a)}finally{qc(a)}return null}
var jd={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kd=["Webkit","ms","Moz","O"];Object.keys(jd).forEach(function(a){kd.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);jd[b]=jd[a]})});function ld(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||jd.hasOwnProperty(a)&&jd[a]?(""+b).trim():b+"px"}
function md(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=ld(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var nd=n({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function od(a,b){if(b){if(nd[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(u(137,a,""));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(u(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(u(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(u(62,""));}}
function pd(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}var qd=Mb.html;function rd(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=cc(a);b=Ra[b];for(var d=0;d<b.length;d++)uc(b[d],a,c)}function sd(){}
function td(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function ud(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function vd(a,b){var c=ud(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=ud(c)}}
function wd(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?wd(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}function xd(){for(var a=window,b=td();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=td(a.document)}return b}
function yd(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}var zd="$",Ad="/$",Bd="$?",Cd="$!",Dd=null,Ed=null;function Fd(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}
function Gd(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var Hd="function"===typeof setTimeout?setTimeout:void 0,Id="function"===typeof clearTimeout?clearTimeout:void 0;function Jd(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}
function Kd(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if(c===zd||c===Cd||c===Bd){if(0===b)return a;b--}else c===Ad&&b++}a=a.previousSibling}return null}var Ld=Math.random().toString(36).slice(2),Md="__reactInternalInstance$"+Ld,Nd="__reactEventHandlers$"+Ld,Od="__reactContainere$"+Ld;
function tc(a){var b=a[Md];if(b)return b;for(var c=a.parentNode;c;){if(b=c[Od]||c[Md]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Kd(a);null!==a;){if(c=a[Md])return c;a=Kd(a)}return b}a=c;c=a.parentNode}return null}function Nc(a){a=a[Md]||a[Od];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function Pd(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(u(33));}function Qd(a){return a[Nd]||null}
function Rd(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}
function Sd(a,b){var c=a.stateNode;if(!c)return null;var d=la(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==typeof c)throw Error(u(231,
b,typeof c));return c}function Td(a,b,c){if(b=Sd(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=ic(c._dispatchListeners,b),c._dispatchInstances=ic(c._dispatchInstances,a)}function Ud(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=Rd(b);for(b=c.length;0<b--;)Td(c[b],"captured",a);for(b=0;b<c.length;b++)Td(c[b],"bubbled",a)}}
function Vd(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Sd(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=ic(c._dispatchListeners,b),c._dispatchInstances=ic(c._dispatchInstances,a))}function Wd(a){a&&a.dispatchConfig.registrationName&&Vd(a._targetInst,null,a)}function Xd(a){jc(a,Ud)}var Yd=null,Zd=null,$d=null;
function ae(){if($d)return $d;var a,b=Zd,c=b.length,d,e="value"in Yd?Yd.value:Yd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return $d=e.slice(a,1<d?1-d:void 0)}function be(){return!0}function ce(){return!1}
function G(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?be:ce;this.isPropagationStopped=ce;return this}
n(G.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=be)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=be)},persist:function(){this.isPersistent=be},isPersistent:ce,destructor:function(){var a=this.constructor.Interface,
b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=ce;this._dispatchInstances=this._dispatchListeners=null}});G.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
G.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;n(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=n({},d.Interface,a);c.extend=d.extend;de(c);return c};de(G);function ee(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}
function fe(a){if(!(a instanceof this))throw Error(u(279));a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}function de(a){a.eventPool=[];a.getPooled=ee;a.release=fe}var ge=G.extend({data:null}),he=G.extend({data:null}),ie=[9,13,27,32],je=Ta&&"CompositionEvent"in window,ke=null;Ta&&"documentMode"in document&&(ke=document.documentMode);
var le=Ta&&"TextEvent"in window&&!ke,me=Ta&&(!je||ke&&8<ke&&11>=ke),ne=String.fromCharCode(32),oe={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},pe=!1;
function qe(a,b){switch(a){case "keyup":return-1!==ie.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function re(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var se=!1;function te(a,b){switch(a){case "compositionend":return re(b);case "keypress":if(32!==b.which)return null;pe=!0;return ne;case "textInput":return a=b.data,a===ne&&pe?null:a;default:return null}}
function ue(a,b){if(se)return"compositionend"===a||!je&&qe(a,b)?(a=ae(),$d=Zd=Yd=null,se=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return me&&"ko"!==b.locale?null:b.data;default:return null}}
var ve={eventTypes:oe,extractEvents:function(a,b,c,d){var e;if(je)b:{switch(a){case "compositionstart":var f=oe.compositionStart;break b;case "compositionend":f=oe.compositionEnd;break b;case "compositionupdate":f=oe.compositionUpdate;break b}f=void 0}else se?qe(a,c)&&(f=oe.compositionEnd):"keydown"===a&&229===c.keyCode&&(f=oe.compositionStart);f?(me&&"ko"!==c.locale&&(se||f!==oe.compositionStart?f===oe.compositionEnd&&se&&(e=ae()):(Yd=d,Zd="value"in Yd?Yd.value:Yd.textContent,se=!0)),f=ge.getPooled(f,
b,c,d),e?f.data=e:(e=re(c),null!==e&&(f.data=e)),Xd(f),e=f):e=null;(a=le?te(a,c):ue(a,c))?(b=he.getPooled(oe.beforeInput,b,c,d),b.data=a,Xd(b)):b=null;return null===e?b:null===b?e:[e,b]}},we={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xe(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!we[a.type]:"textarea"===b?!0:!1}
var ye={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function ze(a,b,c){a=G.getPooled(ye.change,a,b,c);a.type="change";Ya(c);Xd(a);return a}var Ae=null,Be=null;function Ce(a){mc(a)}function De(a){var b=Pd(a);if(yb(b))return a}function Ee(a,b){if("change"===a)return b}var Fe=!1;Ta&&(Fe=oc("input")&&(!document.documentMode||9<document.documentMode));
function Ge(){Ae&&(Ae.detachEvent("onpropertychange",He),Be=Ae=null)}function He(a){if("value"===a.propertyName&&De(Be))if(a=ze(Be,a,nc(a)),db)mc(a);else{db=!0;try{$a(Ce,a)}finally{db=!1,fb()}}}function Ie(a,b,c){"focus"===a?(Ge(),Ae=b,Be=c,Ae.attachEvent("onpropertychange",He)):"blur"===a&&Ge()}function Je(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return De(Be)}function Ke(a,b){if("click"===a)return De(b)}function Le(a,b){if("input"===a||"change"===a)return De(b)}
var Me={eventTypes:ye,_isInputEventSupported:Fe,extractEvents:function(a,b,c,d){var e=b?Pd(b):window,f=e.nodeName&&e.nodeName.toLowerCase();if("select"===f||"input"===f&&"file"===e.type)var g=Ee;else if(xe(e))if(Fe)g=Le;else{g=Je;var h=Ie}else(f=e.nodeName)&&"input"===f.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(g=Ke);if(g&&(g=g(a,b)))return ze(g,c,d);h&&h(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Db(e,"number",e.value)}},Ne=G.extend({view:null,detail:null}),
Oe={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pe(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Oe[a])?!!b[a]:!1}function Qe(){return Pe}
var Re=0,Se=0,Te=!1,Ue=!1,Ve=Ne.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Qe,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=Re;Re=a.screenX;return Te?"mousemove"===a.type?a.screenX-b:0:(Te=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;
var b=Se;Se=a.screenY;return Ue?"mousemove"===a.type?a.screenY-b:0:(Ue=!0,0)}}),We=Ve.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),Xe={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",
dependencies:["pointerout","pointerover"]}},Ye={eventTypes:Xe,extractEvents:function(a,b,c,d,e){var f="mouseover"===a||"pointerover"===a,g="mouseout"===a||"pointerout"===a;if(f&&0===(e&32)&&(c.relatedTarget||c.fromElement)||!g&&!f)return null;f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window;if(g){if(g=b,b=(b=c.relatedTarget||c.toElement)?tc(b):null,null!==b){var h=dc(b);if(b!==h||5!==b.tag&&6!==b.tag)b=null}}else g=null;if(g===b)return null;if("mouseout"===a||"mouseover"===
a){var k=Ve;var l=Xe.mouseLeave;var m=Xe.mouseEnter;var p="mouse"}else if("pointerout"===a||"pointerover"===a)k=We,l=Xe.pointerLeave,m=Xe.pointerEnter,p="pointer";a=null==g?f:Pd(g);f=null==b?f:Pd(b);l=k.getPooled(l,g,c,d);l.type=p+"leave";l.target=a;l.relatedTarget=f;c=k.getPooled(m,b,c,d);c.type=p+"enter";c.target=f;c.relatedTarget=a;d=g;p=b;if(d&&p)a:{k=d;m=p;g=0;for(a=k;a;a=Rd(a))g++;a=0;for(b=m;b;b=Rd(b))a++;for(;0<g-a;)k=Rd(k),g--;for(;0<a-g;)m=Rd(m),a--;for(;g--;){if(k===m||k===m.alternate)break a;
k=Rd(k);m=Rd(m)}k=null}else k=null;m=k;for(k=[];d&&d!==m;){g=d.alternate;if(null!==g&&g===m)break;k.push(d);d=Rd(d)}for(d=[];p&&p!==m;){g=p.alternate;if(null!==g&&g===m)break;d.push(p);p=Rd(p)}for(p=0;p<k.length;p++)Vd(k[p],"bubbled",l);for(p=d.length;0<p--;)Vd(d[p],"captured",c);return 0===(e&64)?[l]:[l,c]}};function Ze(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var $e="function"===typeof Object.is?Object.is:Ze,af=Object.prototype.hasOwnProperty;
function bf(a,b){if($e(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!af.call(b,c[d])||!$e(a[c[d]],b[c[d]]))return!1;return!0}
var cf=Ta&&"documentMode"in document&&11>=document.documentMode,df={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},ef=null,ff=null,gf=null,hf=!1;
function jf(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if(hf||null==ef||ef!==td(c))return null;c=ef;"selectionStart"in c&&yd(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return gf&&bf(gf,c)?null:(gf=c,a=G.getPooled(df.select,ff,a,b),a.type="select",a.target=ef,Xd(a),a)}
var kf={eventTypes:df,extractEvents:function(a,b,c,d,e,f){e=f||(d.window===d?d.document:9===d.nodeType?d:d.ownerDocument);if(!(f=!e)){a:{e=cc(e);f=Ra.onSelect;for(var g=0;g<f.length;g++)if(!e.has(f[g])){e=!1;break a}e=!0}f=!e}if(f)return null;e=b?Pd(b):window;switch(a){case "focus":if(xe(e)||"true"===e.contentEditable)ef=e,ff=b,gf=null;break;case "blur":gf=ff=ef=null;break;case "mousedown":hf=!0;break;case "contextmenu":case "mouseup":case "dragend":return hf=!1,jf(c,d);case "selectionchange":if(cf)break;
case "keydown":case "keyup":return jf(c,d)}return null}},lf=G.extend({animationName:null,elapsedTime:null,pseudoElement:null}),mf=G.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),nf=Ne.extend({relatedTarget:null});function of(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
var pf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rf=Ne.extend({key:function(a){if(a.key){var b=pf[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=of(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?qf[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Qe,charCode:function(a){return"keypress"===
a.type?of(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?of(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),sf=Ve.extend({dataTransfer:null}),tf=Ne.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Qe}),uf=G.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),vf=Ve.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in
a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),wf={eventTypes:Wc,extractEvents:function(a,b,c,d){var e=Yc.get(a);if(!e)return null;switch(a){case "keypress":if(0===of(c))return null;case "keydown":case "keyup":a=rf;break;case "blur":case "focus":a=nf;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=
Ve;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=sf;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=tf;break;case Xb:case Yb:case Zb:a=lf;break;case $b:a=uf;break;case "scroll":a=Ne;break;case "wheel":a=vf;break;case "copy":case "cut":case "paste":a=mf;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=
We;break;default:a=G}b=a.getPooled(e,b,c,d);Xd(b);return b}};if(Ka)throw Error(u(101));Ka=Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));Ma();var xf=Nc;la=Qd;ma=xf;na=Pd;Sa({SimpleEventPlugin:wf,EnterLeaveEventPlugin:Ye,ChangeEventPlugin:Me,SelectEventPlugin:kf,BeforeInputEventPlugin:ve});var yf=[],zf=-1;function H(a){0>zf||(a.current=yf[zf],yf[zf]=null,zf--)}
function I(a,b){zf++;yf[zf]=a.current;a.current=b}var Af={},J={current:Af},K={current:!1},Bf=Af;function Cf(a,b){var c=a.type.contextTypes;if(!c)return Af;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function L(a){a=a.childContextTypes;return null!==a&&void 0!==a}
function Df(){H(K);H(J)}function Ef(a,b,c){if(J.current!==Af)throw Error(u(168));I(J,b);I(K,c)}function Ff(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(u(108,Ia(b)||"Unknown",e));return n({},c,{},d)}function Gf(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Af;Bf=J.current;I(J,a);I(K,K.current);return!0}
function Hf(a,b,c){var d=a.stateNode;if(!d)throw Error(u(169));c?(a=Ff(a,b,Bf),d.__reactInternalMemoizedMergedChildContext=a,H(K),H(J),I(J,a)):H(K);I(K,c)}
var If=r.unstable_runWithPriority,Jf=r.unstable_scheduleCallback,Kf=r.unstable_cancelCallback,Lf=r.unstable_requestPaint,Mf=r.unstable_now,Nf=r.unstable_getCurrentPriorityLevel,Of=r.unstable_ImmediatePriority,Pf=r.unstable_UserBlockingPriority,Qf=r.unstable_NormalPriority,Rf=r.unstable_LowPriority,Sf=r.unstable_IdlePriority,Tf={},Uf=r.unstable_shouldYield,Vf=void 0!==Lf?Lf:function(){},Wf=null,Xf=null,Yf=!1,Zf=Mf(),$f=1E4>Zf?Mf:function(){return Mf()-Zf};
function ag(){switch(Nf()){case Of:return 99;case Pf:return 98;case Qf:return 97;case Rf:return 96;case Sf:return 95;default:throw Error(u(332));}}function bg(a){switch(a){case 99:return Of;case 98:return Pf;case 97:return Qf;case 96:return Rf;case 95:return Sf;default:throw Error(u(332));}}function cg(a,b){a=bg(a);return If(a,b)}function dg(a,b,c){a=bg(a);return Jf(a,b,c)}function eg(a){null===Wf?(Wf=[a],Xf=Jf(Of,fg)):Wf.push(a);return Tf}function gg(){if(null!==Xf){var a=Xf;Xf=null;Kf(a)}fg()}
function fg(){if(!Yf&&null!==Wf){Yf=!0;var a=0;try{var b=Wf;cg(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});Wf=null}catch(c){throw null!==Wf&&(Wf=Wf.slice(a+1)),Jf(Of,gg),c;}finally{Yf=!1}}}function hg(a,b,c){c/=10;return 1073741821-(((1073741821-a+b/10)/c|0)+1)*c}function ig(a,b){if(a&&a.defaultProps){b=n({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}var jg={current:null},kg=null,lg=null,mg=null;function ng(){mg=lg=kg=null}
function og(a){var b=jg.current;H(jg);a.type._context._currentValue=b}function pg(a,b){for(;null!==a;){var c=a.alternate;if(a.childExpirationTime<b)a.childExpirationTime=b,null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);else if(null!==c&&c.childExpirationTime<b)c.childExpirationTime=b;else break;a=a.return}}function qg(a,b){kg=a;mg=lg=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(a.expirationTime>=b&&(rg=!0),a.firstContext=null)}
function sg(a,b){if(mg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)mg=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===lg){if(null===kg)throw Error(u(308));lg=b;kg.dependencies={expirationTime:0,firstContext:b,responders:null}}else lg=lg.next=b}return a._currentValue}var tg=!1;function ug(a){a.updateQueue={baseState:a.memoizedState,baseQueue:null,shared:{pending:null},effects:null}}
function vg(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,baseQueue:a.baseQueue,shared:a.shared,effects:a.effects})}function wg(a,b){a={expirationTime:a,suspenseConfig:b,tag:0,payload:null,callback:null,next:null};return a.next=a}function xg(a,b){a=a.updateQueue;if(null!==a){a=a.shared;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}}
function yg(a,b){var c=a.alternate;null!==c&&vg(c,a);a=a.updateQueue;c=a.baseQueue;null===c?(a.baseQueue=b.next=b,b.next=b):(b.next=c.next,c.next=b)}
function zg(a,b,c,d){var e=a.updateQueue;tg=!1;var f=e.baseQueue,g=e.shared.pending;if(null!==g){if(null!==f){var h=f.next;f.next=g.next;g.next=h}f=g;e.shared.pending=null;h=a.alternate;null!==h&&(h=h.updateQueue,null!==h&&(h.baseQueue=g))}if(null!==f){h=f.next;var k=e.baseState,l=0,m=null,p=null,x=null;if(null!==h){var z=h;do{g=z.expirationTime;if(g<d){var ca={expirationTime:z.expirationTime,suspenseConfig:z.suspenseConfig,tag:z.tag,payload:z.payload,callback:z.callback,next:null};null===x?(p=x=
ca,m=k):x=x.next=ca;g>l&&(l=g)}else{null!==x&&(x=x.next={expirationTime:1073741823,suspenseConfig:z.suspenseConfig,tag:z.tag,payload:z.payload,callback:z.callback,next:null});Ag(g,z.suspenseConfig);a:{var D=a,t=z;g=b;ca=c;switch(t.tag){case 1:D=t.payload;if("function"===typeof D){k=D.call(ca,k,g);break a}k=D;break a;case 3:D.effectTag=D.effectTag&-4097|64;case 0:D=t.payload;g="function"===typeof D?D.call(ca,k,g):D;if(null===g||void 0===g)break a;k=n({},k,g);break a;case 2:tg=!0}}null!==z.callback&&
(a.effectTag|=32,g=e.effects,null===g?e.effects=[z]:g.push(z))}z=z.next;if(null===z||z===h)if(g=e.shared.pending,null===g)break;else z=f.next=g.next,g.next=h,e.baseQueue=f=g,e.shared.pending=null}while(1)}null===x?m=k:x.next=p;e.baseState=m;e.baseQueue=x;Bg(l);a.expirationTime=l;a.memoizedState=k}}
function Cg(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=e;e=c;if("function"!==typeof d)throw Error(u(191,d));d.call(e)}}}var Dg=pa.ReactCurrentBatchConfig,Eg=(new aa.Component).refs;function Fg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:n({},b,c);a.memoizedState=c;0===a.expirationTime&&(a.updateQueue.baseState=c)}
var Jg={isMounted:function(a){return(a=a._reactInternalFiber)?dc(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e=wg(d,e);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);xg(a,e);Ig(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e=wg(d,e);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);xg(a,e);Ig(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=Gg(),d=Dg.suspense;
c=Hg(c,a,d);d=wg(c,d);d.tag=2;void 0!==b&&null!==b&&(d.callback=b);xg(a,d);Ig(a,c)}};function Kg(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!bf(c,d)||!bf(e,f):!0}
function Lg(a,b,c){var d=!1,e=Af;var f=b.contextType;"object"===typeof f&&null!==f?f=sg(f):(e=L(b)?Bf:J.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Cf(a,e):Af);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Jg;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Mg(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Jg.enqueueReplaceState(b,b.state,null)}
function Ng(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Eg;ug(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=sg(f):(f=L(b)?Bf:J.current,e.context=Cf(a,f));zg(a,c,e,d);e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Fg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||
(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Jg.enqueueReplaceState(e,e.state,null),zg(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.effectTag|=4)}var Og=Array.isArray;
function Pg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(u(309));var d=c.stateNode}if(!d)throw Error(u(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Eg&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}if("string"!==typeof a)throw Error(u(284));if(!c._owner)throw Error(u(290,a));}return a}
function Qg(a,b){if("textarea"!==a.type)throw Error(u(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,""));}
function Rg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Sg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Tg(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props),d.ref=Pg(a,b,c),d.return=a,d;d=Ug(c.type,c.key,c.props,null,a.mode,d);d.ref=Pg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==
c.implementation)return b=Vg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Wg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function p(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Tg(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case ra:return c=Ug(b.type,b.key,b.props,null,a.mode,c),c.ref=Pg(a,null,b),c.return=a,c;case sa:return b=Vg(b,a.mode,c),b.return=a,b}if(Og(b)||
Ga(b))return b=Wg(b,a.mode,c,null),b.return=a,b;Qg(a,b)}return null}function x(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case ra:return c.key===e?c.type===ta?m(a,b,c.props.children,d,e):k(a,b,c,d):null;case sa:return c.key===e?l(a,b,c,d):null}if(Og(c)||Ga(c))return null!==e?null:m(a,b,c,d,null);Qg(a,c)}return null}function z(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=
a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case ra:return a=a.get(null===d.key?c:d.key)||null,d.type===ta?m(b,a,d.props.children,e,d.key):k(b,a,d,e);case sa:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Og(d)||Ga(d))return a=a.get(c)||null,m(b,a,d,e,null);Qg(b,d)}return null}function ca(e,g,h,k){for(var l=null,t=null,m=g,y=g=0,A=null;null!==m&&y<h.length;y++){m.index>y?(A=m,m=null):A=m.sibling;var q=x(e,m,h[y],k);if(null===q){null===m&&(m=A);break}a&&
m&&null===q.alternate&&b(e,m);g=f(q,g,y);null===t?l=q:t.sibling=q;t=q;m=A}if(y===h.length)return c(e,m),l;if(null===m){for(;y<h.length;y++)m=p(e,h[y],k),null!==m&&(g=f(m,g,y),null===t?l=m:t.sibling=m,t=m);return l}for(m=d(e,m);y<h.length;y++)A=z(m,e,y,h[y],k),null!==A&&(a&&null!==A.alternate&&m.delete(null===A.key?y:A.key),g=f(A,g,y),null===t?l=A:t.sibling=A,t=A);a&&m.forEach(function(a){return b(e,a)});return l}function D(e,g,h,l){var k=Ga(h);if("function"!==typeof k)throw Error(u(150));h=k.call(h);
if(null==h)throw Error(u(151));for(var m=k=null,t=g,y=g=0,A=null,q=h.next();null!==t&&!q.done;y++,q=h.next()){t.index>y?(A=t,t=null):A=t.sibling;var D=x(e,t,q.value,l);if(null===D){null===t&&(t=A);break}a&&t&&null===D.alternate&&b(e,t);g=f(D,g,y);null===m?k=D:m.sibling=D;m=D;t=A}if(q.done)return c(e,t),k;if(null===t){for(;!q.done;y++,q=h.next())q=p(e,q.value,l),null!==q&&(g=f(q,g,y),null===m?k=q:m.sibling=q,m=q);return k}for(t=d(e,t);!q.done;y++,q=h.next())q=z(t,e,y,q.value,l),null!==q&&(a&&null!==
q.alternate&&t.delete(null===q.key?y:q.key),g=f(q,g,y),null===m?k=q:m.sibling=q,m=q);a&&t.forEach(function(a){return b(e,a)});return k}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ta&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case ra:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){switch(k.tag){case 7:if(f.type===ta){c(a,k.sibling);d=e(k,f.props.children);d.return=a;a=d;break a}break;default:if(k.elementType===f.type){c(a,
k.sibling);d=e(k,f.props);d.ref=Pg(a,k,f);d.return=a;a=d;break a}}c(a,k);break}else b(a,k);k=k.sibling}f.type===ta?(d=Wg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Ug(f.type,f.key,f.props,null,a.mode,h),h.ref=Pg(a,d,f),h.return=a,a=h)}return g(a);case sa:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=
d.sibling}d=Vg(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=Tg(f,a.mode,h),d.return=a,a=d),g(a);if(Og(f))return ca(a,d,f,h);if(Ga(f))return D(a,d,f,h);l&&Qg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:throw a=a.type,Error(u(152,a.displayName||a.name||"Component"));}return c(a,d)}}var Xg=Rg(!0),Yg=Rg(!1),Zg={},$g={current:Zg},ah={current:Zg},bh={current:Zg};
function ch(a){if(a===Zg)throw Error(u(174));return a}function dh(a,b){I(bh,b);I(ah,a);I($g,Zg);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:Ob(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=Ob(b,a)}H($g);I($g,b)}function eh(){H($g);H(ah);H(bh)}function fh(a){ch(bh.current);var b=ch($g.current);var c=Ob(b,a.type);b!==c&&(I(ah,a),I($g,c))}function gh(a){ah.current===a&&(H($g),H(ah))}var M={current:0};
function hh(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||c.data===Bd||c.data===Cd))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.effectTag&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}function ih(a,b){return{responder:a,props:b}}
var jh=pa.ReactCurrentDispatcher,kh=pa.ReactCurrentBatchConfig,lh=0,N=null,O=null,P=null,mh=!1;function Q(){throw Error(u(321));}function nh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!$e(a[c],b[c]))return!1;return!0}
function oh(a,b,c,d,e,f){lh=f;N=b;b.memoizedState=null;b.updateQueue=null;b.expirationTime=0;jh.current=null===a||null===a.memoizedState?ph:qh;a=c(d,e);if(b.expirationTime===lh){f=0;do{b.expirationTime=0;if(!(25>f))throw Error(u(301));f+=1;P=O=null;b.updateQueue=null;jh.current=rh;a=c(d,e)}while(b.expirationTime===lh)}jh.current=sh;b=null!==O&&null!==O.next;lh=0;P=O=N=null;mh=!1;if(b)throw Error(u(300));return a}
function th(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===P?N.memoizedState=P=a:P=P.next=a;return P}function uh(){if(null===O){var a=N.alternate;a=null!==a?a.memoizedState:null}else a=O.next;var b=null===P?N.memoizedState:P.next;if(null!==b)P=b,O=a;else{if(null===a)throw Error(u(310));O=a;a={memoizedState:O.memoizedState,baseState:O.baseState,baseQueue:O.baseQueue,queue:O.queue,next:null};null===P?N.memoizedState=P=a:P=P.next=a}return P}
function vh(a,b){return"function"===typeof b?b(a):b}
function wh(a){var b=uh(),c=b.queue;if(null===c)throw Error(u(311));c.lastRenderedReducer=a;var d=O,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){e=e.next;d=d.baseState;var h=g=f=null,k=e;do{var l=k.expirationTime;if(l<lh){var m={expirationTime:k.expirationTime,suspenseConfig:k.suspenseConfig,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null};null===h?(g=h=m,f=d):h=h.next=m;l>N.expirationTime&&
(N.expirationTime=l,Bg(l))}else null!==h&&(h=h.next={expirationTime:1073741823,suspenseConfig:k.suspenseConfig,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null}),Ag(l,k.suspenseConfig),d=k.eagerReducer===a?k.eagerState:a(d,k.action);k=k.next}while(null!==k&&k!==e);null===h?f=d:h.next=g;$e(d,b.memoizedState)||(rg=!0);b.memoizedState=d;b.baseState=f;b.baseQueue=h;c.lastRenderedState=d}return[b.memoizedState,c.dispatch]}
function xh(a){var b=uh(),c=b.queue;if(null===c)throw Error(u(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);$e(f,b.memoizedState)||(rg=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}
function yh(a){var b=th();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={pending:null,dispatch:null,lastRenderedReducer:vh,lastRenderedState:a};a=a.dispatch=zh.bind(null,N,a);return[b.memoizedState,a]}function Ah(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=N.updateQueue;null===b?(b={lastEffect:null},N.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}
function Bh(){return uh().memoizedState}function Ch(a,b,c,d){var e=th();N.effectTag|=a;e.memoizedState=Ah(1|b,c,void 0,void 0===d?null:d)}function Dh(a,b,c,d){var e=uh();d=void 0===d?null:d;var f=void 0;if(null!==O){var g=O.memoizedState;f=g.destroy;if(null!==d&&nh(d,g.deps)){Ah(b,c,f,d);return}}N.effectTag|=a;e.memoizedState=Ah(1|b,c,f,d)}function Eh(a,b){return Ch(516,4,a,b)}function Fh(a,b){return Dh(516,4,a,b)}function Gh(a,b){return Dh(4,2,a,b)}
function Hh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function Ih(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Dh(4,2,Hh.bind(null,b,a),c)}function Jh(){}function Kh(a,b){th().memoizedState=[a,void 0===b?null:b];return a}function Lh(a,b){var c=uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&nh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
function Mh(a,b){var c=uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&nh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function Nh(a,b,c){var d=ag();cg(98>d?98:d,function(){a(!0)});cg(97<d?97:d,function(){var d=kh.suspense;kh.suspense=void 0===b?null:b;try{a(!1),c()}finally{kh.suspense=d}})}
function zh(a,b,c){var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e={expirationTime:d,suspenseConfig:e,action:c,eagerReducer:null,eagerState:null,next:null};var f=b.pending;null===f?e.next=e:(e.next=f.next,f.next=e);b.pending=e;f=a.alternate;if(a===N||null!==f&&f===N)mh=!0,e.expirationTime=lh,N.expirationTime=lh;else{if(0===a.expirationTime&&(null===f||0===f.expirationTime)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.eagerReducer=f;e.eagerState=h;if($e(h,g))return}catch(k){}finally{}Ig(a,
d)}}
var sh={readContext:sg,useCallback:Q,useContext:Q,useEffect:Q,useImperativeHandle:Q,useLayoutEffect:Q,useMemo:Q,useReducer:Q,useRef:Q,useState:Q,useDebugValue:Q,useResponder:Q,useDeferredValue:Q,useTransition:Q},ph={readContext:sg,useCallback:Kh,useContext:sg,useEffect:Eh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Ch(4,2,Hh.bind(null,b,a),c)},useLayoutEffect:function(a,b){return Ch(4,2,a,b)},useMemo:function(a,b){var c=th();b=void 0===b?null:b;a=a();c.memoizedState=[a,
b];return a},useReducer:function(a,b,c){var d=th();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={pending:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=zh.bind(null,N,a);return[d.memoizedState,a]},useRef:function(a){var b=th();a={current:a};return b.memoizedState=a},useState:yh,useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=yh(a),d=c[0],e=c[1];Eh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a)}finally{kh.suspense=
c}},[a,b]);return d},useTransition:function(a){var b=yh(!1),c=b[0];b=b[1];return[Kh(Nh.bind(null,b,a),[b,a]),c]}},qh={readContext:sg,useCallback:Lh,useContext:sg,useEffect:Fh,useImperativeHandle:Ih,useLayoutEffect:Gh,useMemo:Mh,useReducer:wh,useRef:Bh,useState:function(){return wh(vh)},useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=wh(vh),d=c[0],e=c[1];Fh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a)}finally{kh.suspense=c}},[a,b]);return d},useTransition:function(a){var b=
wh(vh),c=b[0];b=b[1];return[Lh(Nh.bind(null,b,a),[b,a]),c]}},rh={readContext:sg,useCallback:Lh,useContext:sg,useEffect:Fh,useImperativeHandle:Ih,useLayoutEffect:Gh,useMemo:Mh,useReducer:xh,useRef:Bh,useState:function(){return xh(vh)},useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=xh(vh),d=c[0],e=c[1];Fh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a)}finally{kh.suspense=c}},[a,b]);return d},useTransition:function(a){var b=xh(vh),c=b[0];b=b[1];return[Lh(Nh.bind(null,
b,a),[b,a]),c]}},Oh=null,Ph=null,Qh=!1;function Rh(a,b){var c=Sh(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}
function Th(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
function Uh(a){if(Qh){var b=Ph;if(b){var c=b;if(!Th(a,b)){b=Jd(c.nextSibling);if(!b||!Th(a,b)){a.effectTag=a.effectTag&-1025|2;Qh=!1;Oh=a;return}Rh(Oh,c)}Oh=a;Ph=Jd(b.firstChild)}else a.effectTag=a.effectTag&-1025|2,Qh=!1,Oh=a}}function Vh(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;Oh=a}
function Wh(a){if(a!==Oh)return!1;if(!Qh)return Vh(a),Qh=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!Gd(b,a.memoizedProps))for(b=Ph;b;)Rh(a,b),b=Jd(b.nextSibling);Vh(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(u(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if(c===Ad){if(0===b){Ph=Jd(a.nextSibling);break a}b--}else c!==zd&&c!==Cd&&c!==Bd||b++}a=a.nextSibling}Ph=null}}else Ph=Oh?Jd(a.stateNode.nextSibling):null;return!0}
function Xh(){Ph=Oh=null;Qh=!1}var Yh=pa.ReactCurrentOwner,rg=!1;function R(a,b,c,d){b.child=null===a?Yg(b,null,c,d):Xg(b,a.child,c,d)}function Zh(a,b,c,d,e){c=c.render;var f=b.ref;qg(b,e);d=oh(a,b,c,d,f,e);if(null!==a&&!rg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),$h(a,b,e);b.effectTag|=1;R(a,b,d,e);return b.child}
function ai(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!bi(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ci(a,b,g,d,e,f);a=Ug(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(e<f&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:bf,c(e,d)&&a.ref===b.ref))return $h(a,b,f);b.effectTag|=1;a=Sg(g,d);a.ref=b.ref;a.return=b;return b.child=a}
function ci(a,b,c,d,e,f){return null!==a&&bf(a.memoizedProps,d)&&a.ref===b.ref&&(rg=!1,e<f)?(b.expirationTime=a.expirationTime,$h(a,b,f)):di(a,b,c,d,f)}function ei(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function di(a,b,c,d,e){var f=L(c)?Bf:J.current;f=Cf(b,f);qg(b,e);c=oh(a,b,c,d,f,e);if(null!==a&&!rg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),$h(a,b,e);b.effectTag|=1;R(a,b,c,e);return b.child}
function fi(a,b,c,d,e){if(L(c)){var f=!0;Gf(b)}else f=!1;qg(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),Lg(b,c,d),Ng(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=sg(l):(l=L(c)?Bf:J.current,l=Cf(b,l));var m=c.getDerivedStateFromProps,p="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;p||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Mg(b,g,d,l);tg=!1;var x=b.memoizedState;g.state=x;zg(b,d,g,e);k=b.memoizedState;h!==d||x!==k||K.current||tg?("function"===typeof m&&(Fg(b,c,m,d),k=b.memoizedState),(h=tg||Kg(b,c,h,d,x,k,l))?(p||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===
typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1)}else g=b.stateNode,vg(a,b),h=b.memoizedProps,g.props=b.type===b.elementType?h:ig(b.type,h),k=g.context,l=c.contextType,"object"===typeof l&&null!==l?l=sg(l):(l=L(c)?Bf:J.current,l=Cf(b,l)),m=c.getDerivedStateFromProps,(p="function"===typeof m||"function"===
typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Mg(b,g,d,l),tg=!1,k=b.memoizedState,g.state=k,zg(b,d,g,e),x=b.memoizedState,h!==d||k!==x||K.current||tg?("function"===typeof m&&(Fg(b,c,m,d),x=b.memoizedState),(m=tg||Kg(b,c,h,d,k,x,l))?(p||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,
x,l),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,l)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=l,d=m):
("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),d=!1);return gi(a,b,c,d,f,e)}
function gi(a,b,c,d,e,f){ei(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&Hf(b,c,!1),$h(a,b,f);d=b.stateNode;Yh.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&g?(b.child=Xg(b,a.child,null,f),b.child=Xg(b,null,h,f)):R(a,b,h,f);b.memoizedState=d.state;e&&Hf(b,c,!0);return b.child}function hi(a){var b=a.stateNode;b.pendingContext?Ef(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Ef(a,b.context,!1);dh(a,b.containerInfo)}
var ii={dehydrated:null,retryTime:0};
function ji(a,b,c){var d=b.mode,e=b.pendingProps,f=M.current,g=!1,h;(h=0!==(b.effectTag&64))||(h=0!==(f&2)&&(null===a||null!==a.memoizedState));h?(g=!0,b.effectTag&=-65):null!==a&&null===a.memoizedState||void 0===e.fallback||!0===e.unstable_avoidThisFallback||(f|=1);I(M,f&1);if(null===a){void 0!==e.fallback&&Uh(b);if(g){g=e.fallback;e=Wg(null,d,0,null);e.return=b;if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=Wg(g,d,c,null);c.return=
b;e.sibling=c;b.memoizedState=ii;b.child=e;return c}d=e.children;b.memoizedState=null;return b.child=Yg(b,null,d,c)}if(null!==a.memoizedState){a=a.child;d=a.sibling;if(g){e=e.fallback;c=Sg(a,a.pendingProps);c.return=b;if(0===(b.mode&2)&&(g=null!==b.memoizedState?b.child.child:b.child,g!==a.child))for(c.child=g;null!==g;)g.return=c,g=g.sibling;d=Sg(d,e);d.return=b;c.sibling=d;c.childExpirationTime=0;b.memoizedState=ii;b.child=c;return d}c=Xg(b,a.child,e.children,c);b.memoizedState=null;return b.child=
c}a=a.child;if(g){g=e.fallback;e=Wg(null,d,0,null);e.return=b;e.child=a;null!==a&&(a.return=e);if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=Wg(g,d,c,null);c.return=b;e.sibling=c;c.effectTag|=2;e.childExpirationTime=0;b.memoizedState=ii;b.child=e;return c}b.memoizedState=null;return b.child=Xg(b,a,e.children,c)}
function ki(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);pg(a.return,b)}function li(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailExpiration:0,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=c,g.tailExpiration=0,g.tailMode=e,g.lastEffect=f)}
function mi(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;R(a,b,d.children,c);d=M.current;if(0!==(d&2))d=d&1|2,b.effectTag|=64;else{if(null!==a&&0!==(a.effectTag&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&ki(a,c);else if(19===a.tag)ki(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}I(M,d);if(0===(b.mode&2))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===hh(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);li(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===hh(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}li(b,!0,c,null,f,b.lastEffect);break;case "together":li(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null}return b.child}
function $h(a,b,c){null!==a&&(b.dependencies=a.dependencies);var d=b.expirationTime;0!==d&&Bg(d);if(b.childExpirationTime<c)return null;if(null!==a&&b.child!==a.child)throw Error(u(153));if(null!==b.child){a=b.child;c=Sg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Sg(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}var ni,oi,pi,qi;
ni=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};oi=function(){};
pi=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;ch($g.current);a=null;switch(c){case "input":f=zb(g,f);d=zb(g,d);a=[];break;case "option":f=Gb(g,f);d=Gb(g,d);a=[];break;case "select":f=n({},f,{value:void 0});d=n({},d,{value:void 0});a=[];break;case "textarea":f=Ib(g,f);d=Ib(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=sd)}od(c,d);var h,k;c=null;for(h in f)if(!d.hasOwnProperty(h)&&f.hasOwnProperty(h)&&null!=f[h])if("style"===
h)for(k in g=f[h],g)g.hasOwnProperty(k)&&(c||(c={}),c[k]="");else"dangerouslySetInnerHTML"!==h&&"children"!==h&&"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&"autoFocus"!==h&&(Qa.hasOwnProperty(h)?a||(a=[]):(a=a||[]).push(h,null));for(h in d){var l=d[h];g=null!=f?f[h]:void 0;if(d.hasOwnProperty(h)&&l!==g&&(null!=l||null!=g))if("style"===h)if(g){for(k in g)!g.hasOwnProperty(k)||l&&l.hasOwnProperty(k)||(c||(c={}),c[k]="");for(k in l)l.hasOwnProperty(k)&&g[k]!==l[k]&&(c||(c={}),
c[k]=l[k])}else c||(a||(a=[]),a.push(h,c)),c=l;else"dangerouslySetInnerHTML"===h?(l=l?l.__html:void 0,g=g?g.__html:void 0,null!=l&&g!==l&&(a=a||[]).push(h,l)):"children"===h?g===l||"string"!==typeof l&&"number"!==typeof l||(a=a||[]).push(h,""+l):"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&(Qa.hasOwnProperty(h)?(null!=l&&rd(e,h),a||g===l||(a=[])):(a=a||[]).push(h,l))}c&&(a=a||[]).push("style",c);e=a;if(b.updateQueue=e)b.effectTag|=4}};
qi=function(a,b,c,d){c!==d&&(b.effectTag|=4)};function ri(a,b){switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function si(a,b,c){var d=b.pendingProps;switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return L(b.type)&&Df(),null;case 3:return eh(),H(K),H(J),c=b.stateNode,c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),null!==a&&null!==a.child||!Wh(b)||(b.effectTag|=4),oi(b),null;case 5:gh(b);c=ch(bh.current);var e=b.type;if(null!==a&&null!=b.stateNode)pi(a,b,e,d,c),a.ref!==b.ref&&(b.effectTag|=128);else{if(!d){if(null===b.stateNode)throw Error(u(166));
return null}a=ch($g.current);if(Wh(b)){d=b.stateNode;e=b.type;var f=b.memoizedProps;d[Md]=b;d[Nd]=f;switch(e){case "iframe":case "object":case "embed":F("load",d);break;case "video":case "audio":for(a=0;a<ac.length;a++)F(ac[a],d);break;case "source":F("error",d);break;case "img":case "image":case "link":F("error",d);F("load",d);break;case "form":F("reset",d);F("submit",d);break;case "details":F("toggle",d);break;case "input":Ab(d,f);F("invalid",d);rd(c,"onChange");break;case "select":d._wrapperState=
{wasMultiple:!!f.multiple};F("invalid",d);rd(c,"onChange");break;case "textarea":Jb(d,f),F("invalid",d),rd(c,"onChange")}od(e,f);a=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(a=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(a=["children",""+h]):Qa.hasOwnProperty(g)&&null!=h&&rd(c,g)}switch(e){case "input":xb(d);Eb(d,f,!0);break;case "textarea":xb(d);Lb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&
(d.onclick=sd)}c=a;b.updateQueue=c;null!==c&&(b.effectTag|=4)}else{g=9===c.nodeType?c:c.ownerDocument;a===qd&&(a=Nb(e));a===qd?"script"===e?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(e,{is:d.is}):(a=g.createElement(e),"select"===e&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,e);a[Md]=b;a[Nd]=d;ni(a,b,!1,!1);b.stateNode=a;g=pd(e,d);switch(e){case "iframe":case "object":case "embed":F("load",
a);h=d;break;case "video":case "audio":for(h=0;h<ac.length;h++)F(ac[h],a);h=d;break;case "source":F("error",a);h=d;break;case "img":case "image":case "link":F("error",a);F("load",a);h=d;break;case "form":F("reset",a);F("submit",a);h=d;break;case "details":F("toggle",a);h=d;break;case "input":Ab(a,d);h=zb(a,d);F("invalid",a);rd(c,"onChange");break;case "option":h=Gb(a,d);break;case "select":a._wrapperState={wasMultiple:!!d.multiple};h=n({},d,{value:void 0});F("invalid",a);rd(c,"onChange");break;case "textarea":Jb(a,
d);h=Ib(a,d);F("invalid",a);rd(c,"onChange");break;default:h=d}od(e,h);var k=h;for(f in k)if(k.hasOwnProperty(f)){var l=k[f];"style"===f?md(a,l):"dangerouslySetInnerHTML"===f?(l=l?l.__html:void 0,null!=l&&Qb(a,l)):"children"===f?"string"===typeof l?("textarea"!==e||""!==l)&&Rb(a,l):"number"===typeof l&&Rb(a,""+l):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(Qa.hasOwnProperty(f)?null!=l&&rd(c,f):null!=l&&qb(a,f,l,g))}switch(e){case "input":xb(a);Eb(a,d,!1);
break;case "textarea":xb(a);Lb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+rb(d.value));break;case "select":a.multiple=!!d.multiple;c=d.value;null!=c?Hb(a,!!d.multiple,c,!1):null!=d.defaultValue&&Hb(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof h.onClick&&(a.onclick=sd)}Fd(e,d)&&(b.effectTag|=4)}null!==b.ref&&(b.effectTag|=128)}return null;case 6:if(a&&null!=b.stateNode)qi(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(u(166));
c=ch(bh.current);ch($g.current);Wh(b)?(c=b.stateNode,d=b.memoizedProps,c[Md]=b,c.nodeValue!==d&&(b.effectTag|=4)):(c=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),c[Md]=b,b.stateNode=c)}return null;case 13:H(M);d=b.memoizedState;if(0!==(b.effectTag&64))return b.expirationTime=c,b;c=null!==d;d=!1;null===a?void 0!==b.memoizedProps.fallback&&Wh(b):(e=a.memoizedState,d=null!==e,c||null===e||(e=a.child.sibling,null!==e&&(f=b.firstEffect,null!==f?(b.firstEffect=e,e.nextEffect=f):(b.firstEffect=b.lastEffect=
e,e.nextEffect=null),e.effectTag=8)));if(c&&!d&&0!==(b.mode&2))if(null===a&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(M.current&1))S===ti&&(S=ui);else{if(S===ti||S===ui)S=vi;0!==wi&&null!==T&&(xi(T,U),yi(T,wi))}if(c||d)b.effectTag|=4;return null;case 4:return eh(),oi(b),null;case 10:return og(b),null;case 17:return L(b.type)&&Df(),null;case 19:H(M);d=b.memoizedState;if(null===d)return null;e=0!==(b.effectTag&64);f=d.rendering;if(null===f)if(e)ri(d,!1);else{if(S!==ti||null!==a&&0!==(a.effectTag&
64))for(f=b.child;null!==f;){a=hh(f);if(null!==a){b.effectTag|=64;ri(d,!1);e=a.updateQueue;null!==e&&(b.updateQueue=e,b.effectTag|=4);null===d.lastEffect&&(b.firstEffect=null);b.lastEffect=d.lastEffect;for(d=b.child;null!==d;)e=d,f=c,e.effectTag&=2,e.nextEffect=null,e.firstEffect=null,e.lastEffect=null,a=e.alternate,null===a?(e.childExpirationTime=0,e.expirationTime=f,e.child=null,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null):(e.childExpirationTime=a.childExpirationTime,
e.expirationTime=a.expirationTime,e.child=a.child,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,f=a.dependencies,e.dependencies=null===f?null:{expirationTime:f.expirationTime,firstContext:f.firstContext,responders:f.responders}),d=d.sibling;I(M,M.current&1|2);return b.child}f=f.sibling}}else{if(!e)if(a=hh(f),null!==a){if(b.effectTag|=64,e=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.effectTag|=4),ri(d,!0),null===d.tail&&"hidden"===d.tailMode&&!f.alternate)return b=
b.lastEffect=d.lastEffect,null!==b&&(b.nextEffect=null),null}else 2*$f()-d.renderingStartTime>d.tailExpiration&&1<c&&(b.effectTag|=64,e=!0,ri(d,!1),b.expirationTime=b.childExpirationTime=c-1);d.isBackwards?(f.sibling=b.child,b.child=f):(c=d.last,null!==c?c.sibling=f:b.child=f,d.last=f)}return null!==d.tail?(0===d.tailExpiration&&(d.tailExpiration=$f()+500),c=d.tail,d.rendering=c,d.tail=c.sibling,d.lastEffect=b.lastEffect,d.renderingStartTime=$f(),c.sibling=null,b=M.current,I(M,e?b&1|2:b&1),c):null}throw Error(u(156,
b.tag));}function zi(a){switch(a.tag){case 1:L(a.type)&&Df();var b=a.effectTag;return b&4096?(a.effectTag=b&-4097|64,a):null;case 3:eh();H(K);H(J);b=a.effectTag;if(0!==(b&64))throw Error(u(285));a.effectTag=b&-4097|64;return a;case 5:return gh(a),null;case 13:return H(M),b=a.effectTag,b&4096?(a.effectTag=b&-4097|64,a):null;case 19:return H(M),null;case 4:return eh(),null;case 10:return og(a),null;default:return null}}function Ai(a,b){return{value:a,source:b,stack:Ja(b)}}
var Bi="function"===typeof WeakSet?WeakSet:Set;function Ci(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=Ja(c));null!==c&&Ia(c.type);b=b.value;null!==a&&1===a.tag&&Ia(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function Di(a,b){try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(c){Ei(a,c)}}function Fi(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){Ei(a,c)}else b.current=null}
function Gi(a,b){switch(b.tag){case 0:case 11:case 15:case 22:return;case 1:if(b.effectTag&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:ig(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}return;case 3:case 5:case 6:case 4:case 17:return}throw Error(u(163));}
function Hi(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.destroy;c.destroy=void 0;void 0!==d&&d()}c=c.next}while(c!==b)}}function Ii(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d()}c=c.next}while(c!==b)}}
function Ji(a,b,c){switch(c.tag){case 0:case 11:case 15:case 22:Ii(3,c);return;case 1:a=c.stateNode;if(c.effectTag&4)if(null===b)a.componentDidMount();else{var d=c.elementType===c.type?b.memoizedProps:ig(c.type,b.memoizedProps);a.componentDidUpdate(d,b.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}b=c.updateQueue;null!==b&&Cg(c,b,a);return;case 3:b=c.updateQueue;if(null!==b){a=null;if(null!==c.child)switch(c.child.tag){case 5:a=c.child.stateNode;break;case 1:a=c.child.stateNode}Cg(c,b,a)}return;
case 5:a=c.stateNode;null===b&&c.effectTag&4&&Fd(c.type,c.memoizedProps)&&a.focus();return;case 6:return;case 4:return;case 12:return;case 13:null===c.memoizedState&&(c=c.alternate,null!==c&&(c=c.memoizedState,null!==c&&(c=c.dehydrated,null!==c&&Vc(c))));return;case 19:case 17:case 20:case 21:return}throw Error(u(163));}
function Ki(a,b,c){"function"===typeof Li&&Li(b);switch(b.tag){case 0:case 11:case 14:case 15:case 22:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var d=a.next;cg(97<c?97:c,function(){var a=d;do{var c=a.destroy;if(void 0!==c){var g=b;try{c()}catch(h){Ei(g,h)}}a=a.next}while(a!==d)})}break;case 1:Fi(b);c=b.stateNode;"function"===typeof c.componentWillUnmount&&Di(b,c);break;case 5:Fi(b);break;case 4:Mi(a,b,c)}}
function Ni(a){var b=a.alternate;a.return=null;a.child=null;a.memoizedState=null;a.updateQueue=null;a.dependencies=null;a.alternate=null;a.firstEffect=null;a.lastEffect=null;a.pendingProps=null;a.memoizedProps=null;a.stateNode=null;null!==b&&Ni(b)}function Oi(a){return 5===a.tag||3===a.tag||4===a.tag}
function Pi(a){a:{for(var b=a.return;null!==b;){if(Oi(b)){var c=b;break a}b=b.return}throw Error(u(160));}b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(u(161));}c.effectTag&16&&(Rb(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||Oi(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.effectTag&2)continue b;
if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}d?Qi(a,c,b):Ri(a,c,b)}
function Qi(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=sd));else if(4!==d&&(a=a.child,null!==a))for(Qi(a,b,c),a=a.sibling;null!==a;)Qi(a,b,c),a=a.sibling}
function Ri(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Ri(a,b,c),a=a.sibling;null!==a;)Ri(a,b,c),a=a.sibling}
function Mi(a,b,c){for(var d=b,e=!1,f,g;;){if(!e){e=d.return;a:for(;;){if(null===e)throw Error(u(160));f=e.stateNode;switch(e.tag){case 5:g=!1;break a;case 3:f=f.containerInfo;g=!0;break a;case 4:f=f.containerInfo;g=!0;break a}e=e.return}e=!0}if(5===d.tag||6===d.tag){a:for(var h=a,k=d,l=c,m=k;;)if(Ki(h,m,l),null!==m.child&&4!==m.tag)m.child.return=m,m=m.child;else{if(m===k)break a;for(;null===m.sibling;){if(null===m.return||m.return===k)break a;m=m.return}m.sibling.return=m.return;m=m.sibling}g?(h=
f,k=d.stateNode,8===h.nodeType?h.parentNode.removeChild(k):h.removeChild(k)):f.removeChild(d.stateNode)}else if(4===d.tag){if(null!==d.child){f=d.stateNode.containerInfo;g=!0;d.child.return=d;d=d.child;continue}}else if(Ki(a,d,c),null!==d.child){d.child.return=d;d=d.child;continue}if(d===b)break;for(;null===d.sibling;){if(null===d.return||d.return===b)return;d=d.return;4===d.tag&&(e=!1)}d.sibling.return=d.return;d=d.sibling}}
function Si(a,b){switch(b.tag){case 0:case 11:case 14:case 15:case 22:Hi(3,b);return;case 1:return;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps,e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[Nd]=d;"input"===a&&"radio"===d.type&&null!=d.name&&Bb(c,d);pd(a,e);b=pd(a,d);for(e=0;e<f.length;e+=2){var g=f[e],h=f[e+1];"style"===g?md(c,h):"dangerouslySetInnerHTML"===g?Qb(c,h):"children"===g?Rb(c,h):qb(c,g,h,b)}switch(a){case "input":Cb(c,d);break;
case "textarea":Kb(c,d);break;case "select":b=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,a=d.value,null!=a?Hb(c,!!d.multiple,a,!1):b!==!!d.multiple&&(null!=d.defaultValue?Hb(c,!!d.multiple,d.defaultValue,!0):Hb(c,!!d.multiple,d.multiple?[]:"",!1))}}}return;case 6:if(null===b.stateNode)throw Error(u(162));b.stateNode.nodeValue=b.memoizedProps;return;case 3:b=b.stateNode;b.hydrate&&(b.hydrate=!1,Vc(b.containerInfo));return;case 12:return;case 13:c=b;null===b.memoizedState?
d=!1:(d=!0,c=b.child,Ti=$f());if(null!==c)a:for(a=c;;){if(5===a.tag)f=a.stateNode,d?(f=f.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(f=a.stateNode,e=a.memoizedProps.style,e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null,f.style.display=ld("display",e));else if(6===a.tag)a.stateNode.nodeValue=d?"":a.memoizedProps;else if(13===a.tag&&null!==a.memoizedState&&null===a.memoizedState.dehydrated){f=a.child.sibling;f.return=a;a=
f;continue}else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===c)break;for(;null===a.sibling;){if(null===a.return||a.return===c)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}Ui(b);return;case 19:Ui(b);return;case 17:return}throw Error(u(163));}function Ui(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Bi);b.forEach(function(b){var d=Vi.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
var Wi="function"===typeof WeakMap?WeakMap:Map;function Xi(a,b,c){c=wg(c,null);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Yi||(Yi=!0,Zi=d);Ci(a,b)};return c}
function $i(a,b,c){c=wg(c,null);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Ci(a,b);return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===aj?aj=new Set([this]):aj.add(this),Ci(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}
var bj=Math.ceil,cj=pa.ReactCurrentDispatcher,dj=pa.ReactCurrentOwner,V=0,ej=8,fj=16,gj=32,ti=0,hj=1,ij=2,ui=3,vi=4,jj=5,W=V,T=null,X=null,U=0,S=ti,kj=null,lj=1073741823,mj=1073741823,nj=null,wi=0,oj=!1,Ti=0,pj=500,Y=null,Yi=!1,Zi=null,aj=null,qj=!1,rj=null,sj=90,tj=null,uj=0,vj=null,wj=0;function Gg(){return(W&(fj|gj))!==V?1073741821-($f()/10|0):0!==wj?wj:wj=1073741821-($f()/10|0)}
function Hg(a,b,c){b=b.mode;if(0===(b&2))return 1073741823;var d=ag();if(0===(b&4))return 99===d?1073741823:1073741822;if((W&fj)!==V)return U;if(null!==c)a=hg(a,c.timeoutMs|0||5E3,250);else switch(d){case 99:a=1073741823;break;case 98:a=hg(a,150,100);break;case 97:case 96:a=hg(a,5E3,250);break;case 95:a=2;break;default:throw Error(u(326));}null!==T&&a===U&&--a;return a}
function Ig(a,b){if(50<uj)throw uj=0,vj=null,Error(u(185));a=xj(a,b);if(null!==a){var c=ag();1073741823===b?(W&ej)!==V&&(W&(fj|gj))===V?yj(a):(Z(a),W===V&&gg()):Z(a);(W&4)===V||98!==c&&99!==c||(null===tj?tj=new Map([[a,b]]):(c=tj.get(a),(void 0===c||c>b)&&tj.set(a,b)))}}
function xj(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return}null!==e&&(T===e&&(Bg(b),S===vi&&xi(e,U)),yi(e,b));return e}
function zj(a){var b=a.lastExpiredTime;if(0!==b)return b;b=a.firstPendingTime;if(!Aj(a,b))return b;var c=a.lastPingedTime;a=a.nextKnownPendingLevel;a=c>a?c:a;return 2>=a&&b!==a?0:a}
function Z(a){if(0!==a.lastExpiredTime)a.callbackExpirationTime=1073741823,a.callbackPriority=99,a.callbackNode=eg(yj.bind(null,a));else{var b=zj(a),c=a.callbackNode;if(0===b)null!==c&&(a.callbackNode=null,a.callbackExpirationTime=0,a.callbackPriority=90);else{var d=Gg();1073741823===b?d=99:1===b||2===b?d=95:(d=10*(1073741821-b)-10*(1073741821-d),d=0>=d?99:250>=d?98:5250>=d?97:95);if(null!==c){var e=a.callbackPriority;if(a.callbackExpirationTime===b&&e>=d)return;c!==Tf&&Kf(c)}a.callbackExpirationTime=
b;a.callbackPriority=d;b=1073741823===b?eg(yj.bind(null,a)):dg(d,Bj.bind(null,a),{timeout:10*(1073741821-b)-$f()});a.callbackNode=b}}}
function Bj(a,b){wj=0;if(b)return b=Gg(),Cj(a,b),Z(a),null;var c=zj(a);if(0!==c){b=a.callbackNode;if((W&(fj|gj))!==V)throw Error(u(327));Dj();a===T&&c===U||Ej(a,c);if(null!==X){var d=W;W|=fj;var e=Fj();do try{Gj();break}catch(h){Hj(a,h)}while(1);ng();W=d;cj.current=e;if(S===hj)throw b=kj,Ej(a,c),xi(a,c),Z(a),b;if(null===X)switch(e=a.finishedWork=a.current.alternate,a.finishedExpirationTime=c,d=S,T=null,d){case ti:case hj:throw Error(u(345));case ij:Cj(a,2<c?2:c);break;case ui:xi(a,c);d=a.lastSuspendedTime;
c===d&&(a.nextKnownPendingLevel=Ij(e));if(1073741823===lj&&(e=Ti+pj-$f(),10<e)){if(oj){var f=a.lastPingedTime;if(0===f||f>=c){a.lastPingedTime=c;Ej(a,c);break}}f=zj(a);if(0!==f&&f!==c)break;if(0!==d&&d!==c){a.lastPingedTime=d;break}a.timeoutHandle=Hd(Jj.bind(null,a),e);break}Jj(a);break;case vi:xi(a,c);d=a.lastSuspendedTime;c===d&&(a.nextKnownPendingLevel=Ij(e));if(oj&&(e=a.lastPingedTime,0===e||e>=c)){a.lastPingedTime=c;Ej(a,c);break}e=zj(a);if(0!==e&&e!==c)break;if(0!==d&&d!==c){a.lastPingedTime=
d;break}1073741823!==mj?d=10*(1073741821-mj)-$f():1073741823===lj?d=0:(d=10*(1073741821-lj)-5E3,e=$f(),c=10*(1073741821-c)-e,d=e-d,0>d&&(d=0),d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*bj(d/1960))-d,c<d&&(d=c));if(10<d){a.timeoutHandle=Hd(Jj.bind(null,a),d);break}Jj(a);break;case jj:if(1073741823!==lj&&null!==nj){f=lj;var g=nj;d=g.busyMinDurationMs|0;0>=d?d=0:(e=g.busyDelayMs|0,f=$f()-(10*(1073741821-f)-(g.timeoutMs|0||5E3)),d=f<=e?0:e+d-f);if(10<d){xi(a,c);a.timeoutHandle=
Hd(Jj.bind(null,a),d);break}}Jj(a);break;default:throw Error(u(329));}Z(a);if(a.callbackNode===b)return Bj.bind(null,a)}}return null}
function yj(a){var b=a.lastExpiredTime;b=0!==b?b:1073741823;if((W&(fj|gj))!==V)throw Error(u(327));Dj();a===T&&b===U||Ej(a,b);if(null!==X){var c=W;W|=fj;var d=Fj();do try{Kj();break}catch(e){Hj(a,e)}while(1);ng();W=c;cj.current=d;if(S===hj)throw c=kj,Ej(a,b),xi(a,b),Z(a),c;if(null!==X)throw Error(u(261));a.finishedWork=a.current.alternate;a.finishedExpirationTime=b;T=null;Jj(a);Z(a)}return null}function Lj(){if(null!==tj){var a=tj;tj=null;a.forEach(function(a,c){Cj(c,a);Z(c)});gg()}}
function Mj(a,b){var c=W;W|=1;try{return a(b)}finally{W=c,W===V&&gg()}}function Nj(a,b){var c=W;W&=-2;W|=ej;try{return a(b)}finally{W=c,W===V&&gg()}}
function Ej(a,b){a.finishedWork=null;a.finishedExpirationTime=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Id(c));if(null!==X)for(c=X.return;null!==c;){var d=c;switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&Df();break;case 3:eh();H(K);H(J);break;case 5:gh(d);break;case 4:eh();break;case 13:H(M);break;case 19:H(M);break;case 10:og(d)}c=c.return}T=a;X=Sg(a.current,null);U=b;S=ti;kj=null;mj=lj=1073741823;nj=null;wi=0;oj=!1}
function Hj(a,b){do{try{ng();jh.current=sh;if(mh)for(var c=N.memoizedState;null!==c;){var d=c.queue;null!==d&&(d.pending=null);c=c.next}lh=0;P=O=N=null;mh=!1;if(null===X||null===X.return)return S=hj,kj=b,X=null;a:{var e=a,f=X.return,g=X,h=b;b=U;g.effectTag|=2048;g.firstEffect=g.lastEffect=null;if(null!==h&&"object"===typeof h&&"function"===typeof h.then){var k=h;if(0===(g.mode&2)){var l=g.alternate;l?(g.memoizedState=l.memoizedState,g.expirationTime=l.expirationTime):g.memoizedState=null}var m=0!==
(M.current&1),p=f;do{var x;if(x=13===p.tag){var z=p.memoizedState;if(null!==z)x=null!==z.dehydrated?!0:!1;else{var ca=p.memoizedProps;x=void 0===ca.fallback?!1:!0!==ca.unstable_avoidThisFallback?!0:m?!1:!0}}if(x){var D=p.updateQueue;if(null===D){var t=new Set;t.add(k);p.updateQueue=t}else D.add(k);if(0===(p.mode&2)){p.effectTag|=64;g.effectTag&=-2981;if(1===g.tag)if(null===g.alternate)g.tag=17;else{var y=wg(1073741823,null);y.tag=2;xg(g,y)}g.expirationTime=1073741823;break a}h=void 0;g=b;var A=e.pingCache;
null===A?(A=e.pingCache=new Wi,h=new Set,A.set(k,h)):(h=A.get(k),void 0===h&&(h=new Set,A.set(k,h)));if(!h.has(g)){h.add(g);var q=Oj.bind(null,e,k,g);k.then(q,q)}p.effectTag|=4096;p.expirationTime=b;break a}p=p.return}while(null!==p);h=Error((Ia(g.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+Ja(g))}S!==jj&&(S=ij);h=Ai(h,g);p=f;do{switch(p.tag){case 3:k=
h;p.effectTag|=4096;p.expirationTime=b;var B=Xi(p,k,b);yg(p,B);break a;case 1:k=h;var w=p.type,ub=p.stateNode;if(0===(p.effectTag&64)&&("function"===typeof w.getDerivedStateFromError||null!==ub&&"function"===typeof ub.componentDidCatch&&(null===aj||!aj.has(ub)))){p.effectTag|=4096;p.expirationTime=b;var vb=$i(p,k,b);yg(p,vb);break a}}p=p.return}while(null!==p)}X=Pj(X)}catch(Xc){b=Xc;continue}break}while(1)}function Fj(){var a=cj.current;cj.current=sh;return null===a?sh:a}
function Ag(a,b){a<lj&&2<a&&(lj=a);null!==b&&a<mj&&2<a&&(mj=a,nj=b)}function Bg(a){a>wi&&(wi=a)}function Kj(){for(;null!==X;)X=Qj(X)}function Gj(){for(;null!==X&&!Uf();)X=Qj(X)}function Qj(a){var b=Rj(a.alternate,a,U);a.memoizedProps=a.pendingProps;null===b&&(b=Pj(a));dj.current=null;return b}
function Pj(a){X=a;do{var b=X.alternate;a=X.return;if(0===(X.effectTag&2048)){b=si(b,X,U);if(1===U||1!==X.childExpirationTime){for(var c=0,d=X.child;null!==d;){var e=d.expirationTime,f=d.childExpirationTime;e>c&&(c=e);f>c&&(c=f);d=d.sibling}X.childExpirationTime=c}if(null!==b)return b;null!==a&&0===(a.effectTag&2048)&&(null===a.firstEffect&&(a.firstEffect=X.firstEffect),null!==X.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=X.firstEffect),a.lastEffect=X.lastEffect),1<X.effectTag&&(null!==
a.lastEffect?a.lastEffect.nextEffect=X:a.firstEffect=X,a.lastEffect=X))}else{b=zi(X);if(null!==b)return b.effectTag&=2047,b;null!==a&&(a.firstEffect=a.lastEffect=null,a.effectTag|=2048)}b=X.sibling;if(null!==b)return b;X=a}while(null!==X);S===ti&&(S=jj);return null}function Ij(a){var b=a.expirationTime;a=a.childExpirationTime;return b>a?b:a}function Jj(a){var b=ag();cg(99,Sj.bind(null,a,b));return null}
function Sj(a,b){do Dj();while(null!==rj);if((W&(fj|gj))!==V)throw Error(u(327));var c=a.finishedWork,d=a.finishedExpirationTime;if(null===c)return null;a.finishedWork=null;a.finishedExpirationTime=0;if(c===a.current)throw Error(u(177));a.callbackNode=null;a.callbackExpirationTime=0;a.callbackPriority=90;a.nextKnownPendingLevel=0;var e=Ij(c);a.firstPendingTime=e;d<=a.lastSuspendedTime?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:d<=a.firstSuspendedTime&&(a.firstSuspendedTime=
d-1);d<=a.lastPingedTime&&(a.lastPingedTime=0);d<=a.lastExpiredTime&&(a.lastExpiredTime=0);a===T&&(X=T=null,U=0);1<c.effectTag?null!==c.lastEffect?(c.lastEffect.nextEffect=c,e=c.firstEffect):e=c:e=c.firstEffect;if(null!==e){var f=W;W|=gj;dj.current=null;Dd=fd;var g=xd();if(yd(g)){if("selectionStart"in g)var h={start:g.selectionStart,end:g.selectionEnd};else a:{h=(h=g.ownerDocument)&&h.defaultView||window;var k=h.getSelection&&h.getSelection();if(k&&0!==k.rangeCount){h=k.anchorNode;var l=k.anchorOffset,
m=k.focusNode;k=k.focusOffset;try{h.nodeType,m.nodeType}catch(wb){h=null;break a}var p=0,x=-1,z=-1,ca=0,D=0,t=g,y=null;b:for(;;){for(var A;;){t!==h||0!==l&&3!==t.nodeType||(x=p+l);t!==m||0!==k&&3!==t.nodeType||(z=p+k);3===t.nodeType&&(p+=t.nodeValue.length);if(null===(A=t.firstChild))break;y=t;t=A}for(;;){if(t===g)break b;y===h&&++ca===l&&(x=p);y===m&&++D===k&&(z=p);if(null!==(A=t.nextSibling))break;t=y;y=t.parentNode}t=A}h=-1===x||-1===z?null:{start:x,end:z}}else h=null}h=h||{start:0,end:0}}else h=
null;Ed={activeElementDetached:null,focusedElem:g,selectionRange:h};fd=!1;Y=e;do try{Tj()}catch(wb){if(null===Y)throw Error(u(330));Ei(Y,wb);Y=Y.nextEffect}while(null!==Y);Y=e;do try{for(g=a,h=b;null!==Y;){var q=Y.effectTag;q&16&&Rb(Y.stateNode,"");if(q&128){var B=Y.alternate;if(null!==B){var w=B.ref;null!==w&&("function"===typeof w?w(null):w.current=null)}}switch(q&1038){case 2:Pi(Y);Y.effectTag&=-3;break;case 6:Pi(Y);Y.effectTag&=-3;Si(Y.alternate,Y);break;case 1024:Y.effectTag&=-1025;break;case 1028:Y.effectTag&=
-1025;Si(Y.alternate,Y);break;case 4:Si(Y.alternate,Y);break;case 8:l=Y,Mi(g,l,h),Ni(l)}Y=Y.nextEffect}}catch(wb){if(null===Y)throw Error(u(330));Ei(Y,wb);Y=Y.nextEffect}while(null!==Y);w=Ed;B=xd();q=w.focusedElem;h=w.selectionRange;if(B!==q&&q&&q.ownerDocument&&wd(q.ownerDocument.documentElement,q)){null!==h&&yd(q)&&(B=h.start,w=h.end,void 0===w&&(w=B),"selectionStart"in q?(q.selectionStart=B,q.selectionEnd=Math.min(w,q.value.length)):(w=(B=q.ownerDocument||document)&&B.defaultView||window,w.getSelection&&
(w=w.getSelection(),l=q.textContent.length,g=Math.min(h.start,l),h=void 0===h.end?g:Math.min(h.end,l),!w.extend&&g>h&&(l=h,h=g,g=l),l=vd(q,g),m=vd(q,h),l&&m&&(1!==w.rangeCount||w.anchorNode!==l.node||w.anchorOffset!==l.offset||w.focusNode!==m.node||w.focusOffset!==m.offset)&&(B=B.createRange(),B.setStart(l.node,l.offset),w.removeAllRanges(),g>h?(w.addRange(B),w.extend(m.node,m.offset)):(B.setEnd(m.node,m.offset),w.addRange(B))))));B=[];for(w=q;w=w.parentNode;)1===w.nodeType&&B.push({element:w,left:w.scrollLeft,
top:w.scrollTop});"function"===typeof q.focus&&q.focus();for(q=0;q<B.length;q++)w=B[q],w.element.scrollLeft=w.left,w.element.scrollTop=w.top}fd=!!Dd;Ed=Dd=null;a.current=c;Y=e;do try{for(q=a;null!==Y;){var ub=Y.effectTag;ub&36&&Ji(q,Y.alternate,Y);if(ub&128){B=void 0;var vb=Y.ref;if(null!==vb){var Xc=Y.stateNode;switch(Y.tag){case 5:B=Xc;break;default:B=Xc}"function"===typeof vb?vb(B):vb.current=B}}Y=Y.nextEffect}}catch(wb){if(null===Y)throw Error(u(330));Ei(Y,wb);Y=Y.nextEffect}while(null!==Y);Y=
null;Vf();W=f}else a.current=c;if(qj)qj=!1,rj=a,sj=b;else for(Y=e;null!==Y;)b=Y.nextEffect,Y.nextEffect=null,Y=b;b=a.firstPendingTime;0===b&&(aj=null);1073741823===b?a===vj?uj++:(uj=0,vj=a):uj=0;"function"===typeof Uj&&Uj(c.stateNode,d);Z(a);if(Yi)throw Yi=!1,a=Zi,Zi=null,a;if((W&ej)!==V)return null;gg();return null}function Tj(){for(;null!==Y;){var a=Y.effectTag;0!==(a&256)&&Gi(Y.alternate,Y);0===(a&512)||qj||(qj=!0,dg(97,function(){Dj();return null}));Y=Y.nextEffect}}
function Dj(){if(90!==sj){var a=97<sj?97:sj;sj=90;return cg(a,Vj)}}function Vj(){if(null===rj)return!1;var a=rj;rj=null;if((W&(fj|gj))!==V)throw Error(u(331));var b=W;W|=gj;for(a=a.current.firstEffect;null!==a;){try{var c=a;if(0!==(c.effectTag&512))switch(c.tag){case 0:case 11:case 15:case 22:Hi(5,c),Ii(5,c)}}catch(d){if(null===a)throw Error(u(330));Ei(a,d)}c=a.nextEffect;a.nextEffect=null;a=c}W=b;gg();return!0}
function Wj(a,b,c){b=Ai(c,b);b=Xi(a,b,1073741823);xg(a,b);a=xj(a,1073741823);null!==a&&Z(a)}function Ei(a,b){if(3===a.tag)Wj(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){Wj(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===aj||!aj.has(d))){a=Ai(b,a);a=$i(c,a,1073741823);xg(c,a);c=xj(c,1073741823);null!==c&&Z(c);break}}c=c.return}}
function Oj(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);T===a&&U===c?S===vi||S===ui&&1073741823===lj&&$f()-Ti<pj?Ej(a,U):oj=!0:Aj(a,c)&&(b=a.lastPingedTime,0!==b&&b<c||(a.lastPingedTime=c,Z(a)))}function Vi(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=Gg(),b=Hg(b,a,null));a=xj(a,b);null!==a&&Z(a)}var Rj;
Rj=function(a,b,c){var d=b.expirationTime;if(null!==a){var e=b.pendingProps;if(a.memoizedProps!==e||K.current)rg=!0;else{if(d<c){rg=!1;switch(b.tag){case 3:hi(b);Xh();break;case 5:fh(b);if(b.mode&4&&1!==c&&e.hidden)return b.expirationTime=b.childExpirationTime=1,null;break;case 1:L(b.type)&&Gf(b);break;case 4:dh(b,b.stateNode.containerInfo);break;case 10:d=b.memoizedProps.value;e=b.type._context;I(jg,e._currentValue);e._currentValue=d;break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;
if(0!==d&&d>=c)return ji(a,b,c);I(M,M.current&1);b=$h(a,b,c);return null!==b?b.sibling:null}I(M,M.current&1);break;case 19:d=b.childExpirationTime>=c;if(0!==(a.effectTag&64)){if(d)return mi(a,b,c);b.effectTag|=64}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null);I(M,M.current);if(!d)return null}return $h(a,b,c)}rg=!1}}else rg=!1;b.expirationTime=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;e=Cf(b,J.current);qg(b,c);e=oh(null,
b,d,a,e,c);b.effectTag|=1;if("object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;b.memoizedState=null;b.updateQueue=null;if(L(d)){var f=!0;Gf(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;ug(b);var g=d.getDerivedStateFromProps;"function"===typeof g&&Fg(b,d,g,a);e.updater=Jg;b.stateNode=e;e._reactInternalFiber=b;Ng(b,d,a,c);b=gi(null,b,d,!0,f,c)}else b.tag=0,R(null,b,e,c),b=b.child;return b;case 16:a:{e=b.elementType;null!==a&&(a.alternate=
null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;Ha(e);if(1!==e._status)throw e._result;e=e._result;b.type=e;f=b.tag=Xj(e);a=ig(e,a);switch(f){case 0:b=di(null,b,e,a,c);break a;case 1:b=fi(null,b,e,a,c);break a;case 11:b=Zh(null,b,e,a,c);break a;case 14:b=ai(null,b,e,ig(e.type,a),d,c);break a}throw Error(u(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),di(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),fi(a,b,d,e,c);
case 3:hi(b);d=b.updateQueue;if(null===a||null===d)throw Error(u(282));d=b.pendingProps;e=b.memoizedState;e=null!==e?e.element:null;vg(a,b);zg(b,d,null,c);d=b.memoizedState.element;if(d===e)Xh(),b=$h(a,b,c);else{if(e=b.stateNode.hydrate)Ph=Jd(b.stateNode.containerInfo.firstChild),Oh=b,e=Qh=!0;if(e)for(c=Yg(b,null,d,c),b.child=c;c;)c.effectTag=c.effectTag&-3|1024,c=c.sibling;else R(a,b,d,c),Xh();b=b.child}return b;case 5:return fh(b),null===a&&Uh(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:
null,g=e.children,Gd(d,e)?g=null:null!==f&&Gd(d,f)&&(b.effectTag|=16),ei(a,b),b.mode&4&&1!==c&&e.hidden?(b.expirationTime=b.childExpirationTime=1,b=null):(R(a,b,g,c),b=b.child),b;case 6:return null===a&&Uh(b),null;case 13:return ji(a,b,c);case 4:return dh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Xg(b,null,d,c):R(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),Zh(a,b,d,e,c);case 7:return R(a,b,b.pendingProps,c),b.child;case 8:return R(a,
b,b.pendingProps.children,c),b.child;case 12:return R(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;var h=b.type._context;I(jg,h._currentValue);h._currentValue=f;if(null!==g)if(h=g.value,f=$e(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0,0===f){if(g.children===e.children&&!K.current){b=$h(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==
k){g=h.child;for(var l=k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=wg(c,null),l.tag=2,xg(h,l));h.expirationTime<c&&(h.expirationTime=c);l=h.alternate;null!==l&&l.expirationTime<c&&(l.expirationTime=c);pg(h.return,c);k.expirationTime<c&&(k.expirationTime=c);break}l=l.next}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=
g}R(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,qg(b,c),e=sg(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,R(a,b,d,c),b.child;case 14:return e=b.type,f=ig(e,b.pendingProps),f=ig(e.type,f),ai(a,b,e,f,d,c);case 15:return ci(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,L(d)?(a=!0,Gf(b)):a=!1,qg(b,c),Lg(b,d,e),Ng(b,d,e,c),gi(null,
b,d,!0,a,c);case 19:return mi(a,b,c)}throw Error(u(156,b.tag));};var Uj=null,Li=null;function Yj(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);Uj=function(a){try{b.onCommitFiberRoot(c,a,void 0,64===(a.current.effectTag&64))}catch(e){}};Li=function(a){try{b.onCommitFiberUnmount(c,a)}catch(e){}}}catch(d){}return!0}
function Zj(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function Sh(a,b,c,d){return new Zj(a,b,c,d)}
function bi(a){a=a.prototype;return!(!a||!a.isReactComponent)}function Xj(a){if("function"===typeof a)return bi(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===za)return 11;if(a===Ca)return 14}return 2}
function Sg(a,b){var c=a.alternate;null===c?(c=Sh(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{expirationTime:b.expirationTime,
firstContext:b.firstContext,responders:b.responders};c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Ug(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)bi(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ta:return Wg(c.children,e,f,b);case ya:g=8;e|=7;break;case ua:g=8;e|=1;break;case va:return a=Sh(12,c,b,e|8),a.elementType=va,a.type=va,a.expirationTime=f,a;case Aa:return a=Sh(13,c,b,e),a.type=Aa,a.elementType=Aa,a.expirationTime=f,a;case Ba:return a=Sh(19,c,b,e),a.elementType=Ba,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case wa:g=
10;break a;case xa:g=9;break a;case za:g=11;break a;case Ca:g=14;break a;case Da:g=16;d=null;break a;case Ea:g=22;break a}throw Error(u(130,null==a?a:typeof a,""));}b=Sh(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function Wg(a,b,c,d){a=Sh(7,a,d,b);a.expirationTime=c;return a}function Tg(a,b,c){a=Sh(6,a,null,b);a.expirationTime=c;return a}
function Vg(a,b,c){b=Sh(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function ak(a,b,c){this.tag=b;this.current=null;this.containerInfo=a;this.pingCache=this.pendingChildren=null;this.finishedExpirationTime=0;this.finishedWork=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=90;this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0}
function Aj(a,b){var c=a.firstSuspendedTime;a=a.lastSuspendedTime;return 0!==c&&c>=b&&a<=b}function xi(a,b){var c=a.firstSuspendedTime,d=a.lastSuspendedTime;c<b&&(a.firstSuspendedTime=b);if(d>b||0===c)a.lastSuspendedTime=b;b<=a.lastPingedTime&&(a.lastPingedTime=0);b<=a.lastExpiredTime&&(a.lastExpiredTime=0)}
function yi(a,b){b>a.firstPendingTime&&(a.firstPendingTime=b);var c=a.firstSuspendedTime;0!==c&&(b>=c?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:b>=a.lastSuspendedTime&&(a.lastSuspendedTime=b+1),b>a.nextKnownPendingLevel&&(a.nextKnownPendingLevel=b))}function Cj(a,b){var c=a.lastExpiredTime;if(0===c||c>b)a.lastExpiredTime=b}
function bk(a,b,c,d){var e=b.current,f=Gg(),g=Dg.suspense;f=Hg(f,e,g);a:if(c){c=c._reactInternalFiber;b:{if(dc(c)!==c||1!==c.tag)throw Error(u(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(L(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return}while(null!==h);throw Error(u(171));}if(1===c.tag){var k=c.type;if(L(k)){c=Ff(c,k,h);break a}}c=h}else c=Af;null===b.context?b.context=c:b.pendingContext=c;b=wg(f,g);b.payload={element:a};d=void 0===
d?null:d;null!==d&&(b.callback=d);xg(e,b);Ig(e,f);return f}function ck(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function dk(a,b){a=a.memoizedState;null!==a&&null!==a.dehydrated&&a.retryTime<b&&(a.retryTime=b)}function ek(a,b){dk(a,b);(a=a.alternate)&&dk(a,b)}
function fk(a,b,c){c=null!=c&&!0===c.hydrate;var d=new ak(a,b,c),e=Sh(3,null,null,2===b?7:1===b?3:0);d.current=e;e.stateNode=d;ug(e);a[Od]=d.current;c&&0!==b&&Jc(a,9===a.nodeType?a:a.ownerDocument);this._internalRoot=d}fk.prototype.render=function(a){bk(a,this._internalRoot,null,null)};fk.prototype.unmount=function(){var a=this._internalRoot,b=a.containerInfo;bk(null,a,null,function(){b[Od]=null})};
function gk(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function hk(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new fk(a,0,b?{hydrate:!0}:void 0)}
function ik(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=ck(g);h.call(a)}}bk(b,g,a,e)}else{f=c._reactRootContainer=hk(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=ck(g);k.call(a)}}Nj(function(){bk(b,g,a,e)})}return ck(g)}function jk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:sa,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
wc=function(a){if(13===a.tag){var b=hg(Gg(),150,100);Ig(a,b);ek(a,b)}};xc=function(a){13===a.tag&&(Ig(a,3),ek(a,3))};yc=function(a){if(13===a.tag){var b=Gg();b=Hg(b,a,null);Ig(a,b);ek(a,b)}};
Ua=function(a,b,c){switch(b){case "input":Cb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Qd(d);if(!e)throw Error(u(90));yb(d);Cb(d,e)}}}break;case "textarea":Kb(a,c);break;case "select":b=c.value,null!=b&&Hb(a,!!c.multiple,b,!1)}};$a=Mj;
ab=function(a,b,c,d,e){var f=W;W|=4;try{return cg(98,a.bind(null,b,c,d,e))}finally{W=f,W===V&&gg()}};bb=function(){(W&(1|fj|gj))===V&&(Lj(),Dj())};cb=function(a,b){var c=W;W|=2;try{return a(b)}finally{W=c,W===V&&gg()}};function kk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!gk(b))throw Error(u(200));return jk(a,b,null,c)}var lk={Events:[Nc,Pd,Qd,Sa,Oa,Xd,function(a){jc(a,Wd)},Ya,Za,id,mc,Dj,{current:!1}]};
(function(a){var b=a.findFiberByHostInstance;return Yj(n({},a,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pa.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=hc(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:tc,bundleType:0,version:"16.13.0",
rendererPackageName:"react-dom"});exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lk;exports.createPortal=kk;exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;if(void 0===b){if("function"===typeof a.render)throw Error(u(188));throw Error(u(268,Object.keys(a)));}a=hc(b);a=null===a?null:a.stateNode;return a};
exports.flushSync=function(a,b){if((W&(fj|gj))!==V)throw Error(u(187));var c=W;W|=1;try{return cg(99,a.bind(null,b))}finally{W=c,gg()}};exports.hydrate=function(a,b,c){if(!gk(b))throw Error(u(200));return ik(null,a,b,!0,c)};exports.render=function(a,b,c){if(!gk(b))throw Error(u(200));return ik(null,a,b,!1,c)};
exports.unmountComponentAtNode=function(a){if(!gk(a))throw Error(u(40));return a._reactRootContainer?(Nj(function(){ik(null,null,a,!1,function(){a._reactRootContainer=null;a[Od]=null})}),!0):!1};exports.unstable_batchedUpdates=Mj;exports.unstable_createPortal=function(a,b){return kk(a,b,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)};
exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!gk(c))throw Error(u(200));if(null==a||void 0===a._reactInternalFiber)throw Error(u(38));return ik(a,b,c,!1,d)};exports.version="16.13.0";


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(259);
} else {}


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v0.19.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var f,g,h,k,l;
if("undefined"===typeof window||"function"!==typeof MessageChannel){var p=null,q=null,t=function(){if(null!==p)try{var a=exports.unstable_now();p(!0,a);p=null}catch(b){throw setTimeout(t,0),b;}},u=Date.now();exports.unstable_now=function(){return Date.now()-u};f=function(a){null!==p?setTimeout(f,0,a):(p=a,setTimeout(t,0))};g=function(a,b){q=setTimeout(a,b)};h=function(){clearTimeout(q)};k=function(){return!1};l=exports.unstable_forceFrameRate=function(){}}else{var w=window.performance,x=window.Date,
y=window.setTimeout,z=window.clearTimeout;if("undefined"!==typeof console){var A=window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");"function"!==typeof A&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if("object"===
typeof w&&"function"===typeof w.now)exports.unstable_now=function(){return w.now()};else{var B=x.now();exports.unstable_now=function(){return x.now()-B}}var C=!1,D=null,E=-1,F=5,G=0;k=function(){return exports.unstable_now()>=G};l=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):F=0<a?Math.floor(1E3/a):5};var H=new MessageChannel,I=H.port2;H.port1.onmessage=
function(){if(null!==D){var a=exports.unstable_now();G=a+F;try{D(!0,a)?I.postMessage(null):(C=!1,D=null)}catch(b){throw I.postMessage(null),b;}}else C=!1};f=function(a){D=a;C||(C=!0,I.postMessage(null))};g=function(a,b){E=y(function(){a(exports.unstable_now())},b)};h=function(){z(E);E=-1}}function J(a,b){var c=a.length;a.push(b);a:for(;;){var d=c-1>>>1,e=a[d];if(void 0!==e&&0<K(e,b))a[d]=b,a[c]=e,c=d;else break a}}function L(a){a=a[0];return void 0===a?null:a}
function M(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>K(n,c))void 0!==r&&0>K(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>K(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function K(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var N=[],O=[],P=1,Q=null,R=3,S=!1,T=!1,U=!1;
function V(a){for(var b=L(O);null!==b;){if(null===b.callback)M(O);else if(b.startTime<=a)M(O),b.sortIndex=b.expirationTime,J(N,b);else break;b=L(O)}}function W(a){U=!1;V(a);if(!T)if(null!==L(N))T=!0,f(X);else{var b=L(O);null!==b&&g(W,b.startTime-a)}}
function X(a,b){T=!1;U&&(U=!1,h());S=!0;var c=R;try{V(b);for(Q=L(N);null!==Q&&(!(Q.expirationTime>b)||a&&!k());){var d=Q.callback;if(null!==d){Q.callback=null;R=Q.priorityLevel;var e=d(Q.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?Q.callback=e:Q===L(N)&&M(N);V(b)}else M(N);Q=L(N)}if(null!==Q)var m=!0;else{var n=L(O);null!==n&&g(W,n.startTime-b);m=!1}return m}finally{Q=null,R=c,S=!1}}
function Y(a){switch(a){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1E4;default:return 5E3}}var Z=l;exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){T||S||(T=!0,f(X))};
exports.unstable_getCurrentPriorityLevel=function(){return R};exports.unstable_getFirstCallbackNode=function(){return L(N)};exports.unstable_next=function(a){switch(R){case 1:case 2:case 3:var b=3;break;default:b=R}var c=R;R=b;try{return a()}finally{R=c}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=Z;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=R;R=a;try{return b()}finally{R=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();if("object"===typeof c&&null!==c){var e=c.delay;e="number"===typeof e&&0<e?d+e:d;c="number"===typeof c.timeout?c.timeout:Y(a)}else c=Y(a),e=d;c=e+c;a={id:P++,callback:b,priorityLevel:a,startTime:e,expirationTime:c,sortIndex:-1};e>d?(a.sortIndex=e,J(O,a),null===L(N)&&a===L(O)&&(U?h():U=!0,g(W,e-d))):(a.sortIndex=c,J(N,a),T||S||(T=!0,f(X)));return a};
exports.unstable_shouldYield=function(){var a=exports.unstable_now();V(a);var b=L(N);return b!==Q&&null!==Q&&null!==b&&null!==b.callback&&b.startTime<=a&&b.expirationTime<Q.expirationTime||k()};exports.unstable_wrapCallback=function(a){var b=R;return function(){var c=R;R=b;try{return a.apply(this,arguments)}finally{R=c}}};


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(24);
var inspectSource = __webpack_require__(102);

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(70);
var getOwnPropertyNamesModule = __webpack_require__(263);
var getOwnPropertySymbolsModule = __webpack_require__(144);
var anObject = __webpack_require__(39);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(24);

module.exports = global;


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(143);
var enumBugKeys = __webpack_require__(108);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(78);
var toLength = __webpack_require__(107);
var toAbsoluteIndex = __webpack_require__(265);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(71);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(51);
var fails = __webpack_require__(38);
var objectKeys = __webpack_require__(146);
var getOwnPropertySymbolsModule = __webpack_require__(144);
var propertyIsEnumerableModule = __webpack_require__(136);
var toObject = __webpack_require__(147);
var IndexedObject = __webpack_require__(137);

var nativeAssign = Object.assign;
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
module.exports = !nativeAssign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && nativeAssign({ b: 1 }, nativeAssign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : nativeAssign;


/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(268);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(270);
var redefine = __webpack_require__(69);
var fails = __webpack_require__(38);
var wellKnownSymbol = __webpack_require__(27);
var regexpExec = __webpack_require__(80);
var createNonEnumerableProperty = __webpack_require__(52);

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(55);
var exec = __webpack_require__(80);

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(39);

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(38);

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(149);

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(275).charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(71);
var requireObjectCoercible = __webpack_require__(62);

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(61);
var regexpExec = __webpack_require__(80);

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),
/* 277 */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(78);
var addToUnscopables = __webpack_require__(279);
var Iterators = __webpack_require__(72);
var InternalStateModule = __webpack_require__(104);
var defineIterator = __webpack_require__(281);

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(27);
var create = __webpack_require__(152);
var definePropertyModule = __webpack_require__(56);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(51);
var definePropertyModule = __webpack_require__(56);
var anObject = __webpack_require__(39);
var objectKeys = __webpack_require__(146);

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(55);
var createIteratorConstructor = __webpack_require__(282);
var getPrototypeOf = __webpack_require__(155);
var setPrototypeOf = __webpack_require__(284);
var setToStringTag = __webpack_require__(109);
var createNonEnumerableProperty = __webpack_require__(52);
var redefine = __webpack_require__(69);
var wellKnownSymbol = __webpack_require__(27);
var IS_PURE = __webpack_require__(79);
var Iterators = __webpack_require__(72);
var IteratorsCore = __webpack_require__(154);

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(154).IteratorPrototype;
var create = __webpack_require__(152);
var createPropertyDescriptor = __webpack_require__(99);
var setToStringTag = __webpack_require__(109);
var Iterators = __webpack_require__(72);

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(38);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(39);
var aPossiblePrototype = __webpack_require__(285);

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(47);

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./angle-down.svg": 287,
	"./angle-left.svg": 288,
	"./angle-right.svg": 289,
	"./angle-up.svg": 290,
	"./arrow-double.svg": 291,
	"./arrow-down.svg": 292,
	"./back.svg": 293,
	"./camera-rotation.svg": 294,
	"./camera.svg": 295,
	"./caret-down.svg": 296,
	"./caret-right.svg": 297,
	"./check.svg": 298,
	"./close.svg": 299,
	"./code.svg": 300,
	"./collapse.svg": 301,
	"./delete.svg": 302,
	"./duplicate.svg": 303,
	"./edit.svg": 304,
	"./entry.svg": 305,
	"./expand.svg": 306,
	"./eye.svg": 307,
	"./folder-file.svg": 308,
	"./folder-in.svg": 309,
	"./folder-plus.svg": 310,
	"./folder.svg": 311,
	"./general.svg": 312,
	"./grid.svg": 313,
	"./help.svg": 314,
	"./hidden.svg": 315,
	"./import.svg": 316,
	"./info.svg": 317,
	"./link.svg": 318,
	"./list.svg": 319,
	"./loader.svg": 320,
	"./locked.svg": 321,
	"./logout.svg": 322,
	"./menu.svg": 323,
	"./mesh.svg": 324,
	"./message.svg": 325,
	"./minimize.svg": 326,
	"./minus.svg": 327,
	"./more-v.svg": 328,
	"./more.svg": 329,
	"./pause.svg": 330,
	"./play.svg": 331,
	"./plus.svg": 332,
	"./reload.svg": 333,
	"./search.svg": 334,
	"./settings.svg": 335,
	"./share.svg": 336,
	"./upload.svg": 337,
	"./user.svg": 338,
	"./zip.svg": 339
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 286;

/***/ }),
/* 287 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M6.998 8C7.1022 8 7.19439 8.04009 7.27455 8.12028L12 12.8471L16.7255 8.12028C16.8056 8.04009 16.8978 8 17.002 8C17.1062 8 17.1984 8.04009 17.2786 8.12028L17.8798 8.72165C17.9599 8.80183 18 8.89404 18 8.99828C18 9.10252 17.9599 9.19473 17.8798 9.27491L12.2766 14.8797C12.1964 14.9599 12.1042 15 12 15C11.8958 15 11.8036 14.9599 11.7234 14.8797L6.12024 9.27491C6.04008 9.19473 6 9.10252 6 8.99828C6 8.89404 6.04008 8.80183 6.12024 8.72165L6.72144 8.12028C6.8016 8.04009 6.89379 8 6.998 8Z\" />\n</svg>\n");

/***/ }),
/* 288 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M16.0001 6.998C16.0001 7.1022 15.96 7.19439 15.8798 7.27455L11.153 12L15.8798 16.7255C15.96 16.8056 16.0001 16.8978 16.0001 17.002C16.0001 17.1062 15.96 17.1984 15.8798 17.2786L15.2785 17.8798C15.1983 17.9599 15.1061 18 15.0018 18C14.8976 18 14.8054 17.9599 14.7252 17.8798L9.1204 12.2766C9.04021 12.1964 9.00012 12.1042 9.00012 12C9.00012 11.8958 9.04021 11.8036 9.1204 11.7234L14.7252 6.12024C14.8054 6.04008 14.8976 6 15.0018 6C15.1061 6 15.1983 6.04008 15.2785 6.12024L15.8798 6.72144C15.96 6.8016 16.0001 6.89379 16.0001 6.998Z\"/>\n</svg>\n");

/***/ }),
/* 289 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M8.99988 17.002C8.99988 16.8978 9.03997 16.8056 9.12015 16.7255L13.847 12L9.12015 7.27455C9.03997 7.19439 8.99988 7.1022 8.99988 6.998C8.99988 6.89379 9.03997 6.8016 9.12015 6.72144L9.72153 6.12024C9.80171 6.04008 9.89392 6 9.99816 6C10.1024 6 10.1946 6.04008 10.2748 6.12024L15.8796 11.7234C15.9598 11.8036 15.9999 11.8958 15.9999 12C15.9999 12.1042 15.9598 12.1964 15.8796 12.2766L10.2748 17.8798C10.1946 17.9599 10.1024 18 9.99816 18C9.89392 18 9.80171 17.9599 9.72153 17.8798L9.12015 17.2786C9.03997 17.1984 8.99988 17.1062 8.99988 17.002Z\"/>\n</svg>\n");

/***/ }),
/* 290 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M17.002 15C16.8978 15 16.8056 14.9599 16.7255 14.8797L12 10.1529L7.27455 14.8797C7.19439 14.9599 7.1022 15 6.998 15C6.89379 15 6.8016 14.9599 6.72144 14.8797L6.12024 14.2784C6.04008 14.1982 6 14.106 6 14.0017C6 13.8975 6.04008 13.8053 6.12024 13.7251L11.7234 8.12028C11.8036 8.04009 11.8958 8 12 8C12.1042 8 12.1964 8.04009 12.2766 8.12028L17.8798 13.7251C17.9599 13.8053 18 13.8975 18 14.0017C18 14.106 17.9599 14.1982 17.8798 14.2784L17.2786 14.8797C17.1984 14.9599 17.1062 15 17.002 15Z\"/>\n</svg>\n");

/***/ }),
/* 291 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M15 6.857C15 7.012 14.94 7.146 14.822 7.259C14.7664 7.31381 14.7004 7.35705 14.628 7.38623C14.5556 7.41541 14.4781 7.42995 14.4 7.429H13.2V16.571H14.4C14.563 16.571 14.703 16.628 14.822 16.741C14.8783 16.7917 14.9233 16.8537 14.954 16.9229C14.9847 16.9922 15.0004 17.0672 15 17.143C15 17.298 14.94 17.432 14.822 17.545L12.422 19.83C12.303 19.943 12.162 20 12 20C11.838 20 11.697 19.943 11.578 19.83L9.17801 17.545C9.12166 17.4943 9.07667 17.4323 9.04599 17.3631C9.01531 17.2938 8.99964 17.2188 9.00001 17.143C9.00001 16.988 9.06001 16.854 9.17801 16.741C9.23363 16.6862 9.29956 16.6429 9.372 16.6138C9.44443 16.5846 9.52193 16.5701 9.60001 16.571H10.8V7.43H9.60001C9.52193 7.43095 9.44443 7.41641 9.372 7.38723C9.29956 7.35806 9.23363 7.31481 9.17801 7.26C9.12153 7.20923 9.07646 7.14706 9.04578 7.07759C9.0151 7.00813 8.9995 6.93294 9.00001 6.857C9.00001 6.702 9.06001 6.568 9.17801 6.455L11.578 4.17C11.697 4.057 11.838 4 12 4C12.162 4 12.303 4.057 12.422 4.17L14.822 6.455C14.8783 6.50566 14.9233 6.56766 14.954 6.63695C14.9847 6.70623 15.0004 6.78123 15 6.857V6.857Z\"/>\n</svg>\n");

/***/ }),
/* 292 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M18 12L16.9428 10.9428L12.75 15.1272V6H11.25V15.1272L7.0656 10.9344L6 12L12 18L18 12Z\"/>\n</svg>\n");

/***/ }),
/* 293 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M17.7143 13.1039H16.2449V8.28275C12.4845 8.27346 10.2353 8.27346 9.49722 8.28275C8.39015 8.29667 8.99833 6.54384 7.9742 6.54384C7.29145 6.54384 6.45651 6.54384 5.46939 6.54384V16.1078H7.00032L8.9039 17.4675H4.91427C4.40959 17.4675 4 17.0379 4 16.5085V5.95905C3.99997 5.42966 4.40956 5 4.91425 5H8.91394C9.8738 5 9.51159 6.91805 10.3999 6.91805H16.8C17.3047 6.91808 17.7143 7.33238 17.7143 7.86178V13.1039ZM13.7143 14.4857H20V17.9143H13.7143V19.6286L8.91429 16.2L13.7143 12.7714V14.4857Z\"/>\n</svg>\n");

/***/ }),
/* 294 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M7.06171 7.32686H12.8777C13.3063 7.32686 13.6526 7.67429 13.6526 8.10171V12.7554C13.6523 12.9608 13.5705 13.1578 13.4253 13.303C13.28 13.4482 13.0831 13.53 12.8777 13.5303H7.06057C6.85516 13.53 6.65825 13.4482 6.513 13.303C6.36775 13.1578 6.28602 12.9608 6.28571 12.7554V8.10171C6.28571 7.67429 6.63314 7.32686 7.06171 7.32686V7.32686ZM14.6046 8.984L16.5429 7.71771C16.6015 7.67969 16.6693 7.65818 16.7391 7.65545C16.809 7.65273 16.8782 7.66889 16.9397 7.70223C17.0011 7.73557 17.0524 7.78487 17.0881 7.84491C17.1239 7.90496 17.1428 7.97354 17.1429 8.04343V12.8137C17.1428 12.8836 17.1239 12.9522 17.0881 13.0122C17.0524 13.0723 17.0011 13.1216 16.9397 13.1549C16.8782 13.1883 16.809 13.2044 16.7391 13.2017C16.6693 13.199 16.6015 13.1775 16.5429 13.1394L14.6057 11.8731C14.5518 11.8379 14.5074 11.7898 14.4767 11.7331C14.446 11.6764 14.4298 11.613 14.4297 11.5486V9.30857C14.4298 9.24412 14.446 9.18071 14.4767 9.12405C14.5074 9.06739 14.5518 9.01926 14.6057 8.984H14.6046ZM6.67314 5H11.7143L12.8777 6.93829H11.8697L11.1714 5.77714H6.67314V5ZM16.2389 14.1429H20V17.9029H18.7463V16.3211C18.1403 17.0372 17.4145 17.6424 16.6011 18.1097C15.1973 18.9272 13.6017 19.3578 11.9771 19.3577C9.87429 19.3577 7.88914 18.7749 6.38743 17.7166C5.63657 17.1874 5.04343 16.5657 4.62629 15.8697C4.30397 15.3419 4.09099 14.7546 4 14.1429H5.272C5.46629 15.0937 6.10171 15.9817 7.10971 16.6914C8.40114 17.6023 10.1303 18.104 11.9783 18.104C14.5634 18.104 16.7429 16.84 17.88 15.3954H16.24V14.1429H16.2389Z\"/>\n</svg>\n");

/***/ }),
/* 295 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M5.14286 9.42857H13.7143C14.0174 9.42857 14.3081 9.54898 14.5224 9.76331C14.7367 9.97763 14.8571 10.2683 14.8571 10.5714V17.4286C14.8571 17.7317 14.7367 18.0224 14.5224 18.2367C14.3081 18.451 14.0174 18.5714 13.7143 18.5714H5.14286C4.83975 18.5714 4.54906 18.451 4.33474 18.2367C4.12041 18.0224 4 17.7317 4 17.4286V10.5714C4 10.2683 4.12041 9.97763 4.33474 9.76331C4.54906 9.54898 4.83975 9.42857 5.14286 9.42857V9.42857ZM16.2594 11.872L19.1166 10.0057C19.2028 9.94951 19.3026 9.91765 19.4055 9.91349C19.5083 9.90933 19.6104 9.93302 19.7009 9.98208C19.7914 10.0311 19.8669 10.1037 19.9196 10.1922C19.9722 10.2806 20 10.3816 20 10.4846V17.5154C20 17.6184 19.9722 17.7194 19.9196 17.8078C19.8669 17.8963 19.7914 17.9689 19.7009 18.0179C19.6104 18.067 19.5083 18.0907 19.4055 18.0865C19.3026 18.0824 19.2028 18.0505 19.1166 17.9943L16.2594 16.128C16.1799 16.0762 16.1146 16.0054 16.0693 15.922C16.024 15.8386 16.0002 15.7452 16 15.6503V12.3497C16.0002 12.2548 16.024 12.1614 16.0693 12.078C16.1146 11.9946 16.1799 11.9238 16.2594 11.872ZM4.57143 6H12L13.7143 8.85714H12.2286L11.2 7.14286H4.57143V6Z\"/>\n</svg>\n");

/***/ }),
/* 296 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M14.2426 14.2426H10L14.2426 10V14.2426Z\"/>\n</svg>\n");

/***/ }),
/* 297 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M14 12L11 15V9L14 12Z\"/>\n</svg>\n");

/***/ }),
/* 298 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M18.5 8.95253C18.5 9.17753 18.425 9.36753 18.275 9.52502L11.3376 16.7637C11.2679 16.8395 11.183 16.8997 11.0885 16.9404C10.9939 16.9811 10.8918 17.0014 10.7889 16.9999C10.6861 17.0012 10.5843 16.9808 10.4899 16.9401C10.3956 16.8994 10.3109 16.8393 10.2414 16.7637L6.22518 12.5725C6.15164 12.4967 6.09389 12.4071 6.05526 12.3088C6.01664 12.2105 5.99792 12.1056 6.00018 12C6.00018 11.775 6.07518 11.585 6.22518 11.4275L7.32267 10.2825C7.39246 10.207 7.47741 10.147 7.57197 10.1065C7.66652 10.066 7.76856 10.0459 7.87141 10.0475C8.08641 10.0475 8.2689 10.1263 8.4189 10.2825L10.7901 12.7662L16.0813 7.2363C16.1508 7.16067 16.2355 7.10055 16.3299 7.05984C16.4242 7.01913 16.5261 6.99876 16.6288 7.00006C16.8438 7.00006 17.0275 7.07881 17.1775 7.2363L18.2738 8.38004C18.4238 8.53754 18.5 8.72878 18.5 8.95253Z\"/>\n</svg>\n");

/***/ }),
/* 299 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M7 6L6 6.99836L11 12.0001L6 17.0004L7 18.0002L12 13.0013L17 18.0002L18 17.0004L13 12.0001L18 7.00261L17 6.00283L12 11.0017L7 6Z\"/>\n<path d=\"M7 6L6 6.99836L11 12.0001L6 17.0004L7 18.0002L12 13.0013L17 18.0002L18 17.0004L13 12.0001L18 7.00261L17 6.00283L12 11.0017L7 6Z\"/>\n</svg>\n");

/***/ }),
/* 300 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M13.9766 6.16259C14.0521 6.18548 14.1093 6.23124 14.1482 6.2976C14.1665 6.3298 14.1778 6.3655 14.1813 6.40237C14.1849 6.43924 14.1806 6.47644 14.1688 6.51154L10.9081 17.8004C10.8978 17.8365 10.8805 17.8703 10.8572 17.8998C10.8338 17.9292 10.8048 17.9538 10.7719 17.972C10.7412 17.9903 10.7068 18.0017 10.6713 18.0052C10.6357 18.0088 10.5997 18.0045 10.566 17.9926L10.0248 17.8438C9.98873 17.8338 9.95498 17.8167 9.92552 17.7935C9.89607 17.7703 9.87149 17.7416 9.85322 17.7088C9.8345 17.6766 9.82288 17.6407 9.81913 17.6036C9.81538 17.5665 9.81959 17.5291 9.83148 17.4937L13.0933 6.20607C13.1036 6.1699 13.1209 6.13611 13.1442 6.10665C13.1676 6.0772 13.1966 6.05266 13.2295 6.03445C13.2602 6.01612 13.2945 6.00477 13.3301 6.00121C13.3657 5.99765 13.4017 6.00197 13.4354 6.01386L13.9766 6.16259ZM9.08896 8.36613C9.08886 8.40366 9.0811 8.44078 9.06614 8.47521C9.05119 8.50963 9.02937 8.54065 9.00201 8.56634L5.56514 12.0032L9.00201 15.4401C9.02926 15.466 9.05095 15.4971 9.06578 15.5316C9.0806 15.5661 9.08825 15.6033 9.08825 15.6409C9.08825 15.6784 9.0806 15.7156 9.06578 15.7501C9.05095 15.7847 9.02926 15.8158 9.00201 15.8417L8.56382 16.2787C8.53804 16.3061 8.50693 16.3279 8.4724 16.3429C8.43787 16.3578 8.40065 16.3655 8.36303 16.3655C8.32542 16.3655 8.2882 16.3578 8.25367 16.3429C8.21914 16.3279 8.18802 16.3061 8.16224 16.2787L4.08696 12.2057C4.05954 12.1798 4.03769 12.1486 4.02276 12.114C4.00782 12.0794 4.00012 12.0421 4.00012 12.0044C4.00012 11.9667 4.00782 11.9293 4.02276 11.8947C4.03769 11.8601 4.05954 11.8289 4.08696 11.803L8.16224 7.72886C8.21945 7.67052 8.28809 7.64077 8.3636 7.64077C8.43912 7.64077 8.50547 7.67052 8.56382 7.72886L9.00201 8.16591C9.05922 8.22312 9.08896 8.29176 9.08896 8.36727V8.36613ZM19.9133 11.8019C19.9407 11.8277 19.9626 11.8589 19.9775 11.8936C19.9924 11.9282 20.0001 11.9655 20.0001 12.0032C20.0001 12.0409 19.9924 12.0782 19.9775 12.1129C19.9626 12.1475 19.9407 12.1787 19.9133 12.2046L15.8391 16.2787C15.8133 16.3061 15.7821 16.328 15.7474 16.3429C15.7128 16.3579 15.6755 16.3656 15.6378 16.3656C15.6001 16.3656 15.5628 16.3579 15.5281 16.3429C15.4935 16.328 15.4623 16.3061 15.4364 16.2787L14.9994 15.8417C14.9721 15.8158 14.9504 15.7847 14.9356 15.7501C14.9208 15.7156 14.9131 15.6784 14.9131 15.6409C14.9131 15.6033 14.9208 15.5661 14.9356 15.5316C14.9504 15.4971 14.9721 15.466 14.9994 15.4401L18.4362 12.0032L14.9994 8.56634C14.972 8.54056 14.9502 8.50945 14.9352 8.47492C14.9203 8.44039 14.9126 8.40317 14.9126 8.36556C14.9126 8.32794 14.9203 8.29072 14.9352 8.25619C14.9502 8.22166 14.972 8.19055 14.9994 8.16477L15.4364 7.72772C15.4622 7.70007 15.4934 7.67799 15.528 7.66284C15.5626 7.64769 15.6 7.63979 15.6378 7.63963C15.7133 7.63963 15.7808 7.66937 15.8391 7.72772L19.9133 11.8019Z\"/>\n</svg>\n");

/***/ }),
/* 301 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M4 16.5714H7.42857V20H9.71429V14.2857H4V16.5714ZM7.42857 7.42857H4V9.71429H9.71429V4H7.42857V7.42857ZM14.2857 20H16.5714V16.5714H20V14.2857H14.2857V20ZM16.5714 7.42857V4H14.2857V9.71429H20V7.42857H16.5714Z\" />\n</svg>\n");

/***/ }),
/* 302 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M16.8777 8L16.0384 19H7.65067L6.8114 8H6.68056C6.3047 8 6 7.6866 6 7.3C6 6.9134 6.3047 6.6 6.68056 6.6H10.1874V5H13.5017V6.6H16.9861C17.362 6.6 17.6667 6.9134 17.6667 7.3C17.6667 7.6866 17.362 8 16.9861 8H16.8777ZM12.7042 6.66942V5.7H10.9849V6.66942H12.7042ZM7.88001 9.09783L8.54659 17.8579H15.1533L15.811 9.09783H7.88001Z\"/>\n</svg>\n");

/***/ }),
/* 303 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M15.52 4H4.64C4.47026 4 4.30747 4.06743 4.18745 4.18745C4.06743 4.30747 4 4.47026 4 4.64V15.52C4 15.8743 4.28571 16.16 4.64 16.16H15.52C15.8743 16.16 16.16 15.8743 16.16 15.52V4.64C16.16 4.47026 16.0926 4.30747 15.9725 4.18745C15.8525 4.06743 15.6897 4 15.52 4V4ZM14.5143 14.5143H5.6V5.6H14.5143V14.5143ZM18.72 17.12H20V19.36C20 19.7143 19.7143 20 19.36 20H17.12V18.72H18.72V17.12V17.12ZM12.1989 18.72H15.6411V20H12.1989V18.72ZM9.12 18.72H10.72V20H8.48C8.31026 20 8.14748 19.9326 8.02745 19.8125C7.90743 19.6925 7.84 19.5297 7.84 19.36V17.12H9.12V18.72V18.72ZM19.36 7.84C19.7143 7.84 20 8.12571 20 8.48V10.72H18.72V9.12H17.12V7.84H19.36V7.84ZM18.72 12.1989H20V15.6411H18.72V12.1989V12.1989Z\"/>\n</svg>\n");

/***/ }),
/* 304 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M5 16.0833V19H7.91667L16.5173 10.3993L13.6007 7.48262L5 16.0833ZM18.7725 8.14412C19.0758 7.84079 19.0758 7.35079 18.7725 7.04746L16.9525 5.22746C16.8805 5.15535 16.7951 5.09815 16.701 5.05912C16.6069 5.02009 16.506 5 16.4042 5C16.3023 5 16.2014 5.02009 16.1073 5.05912C16.0133 5.09815 15.9278 5.15535 15.8558 5.22746L14.4325 6.65079L17.3492 9.56746L18.7725 8.14412Z\"/>\n</svg>\n");

/***/ }),
/* 305 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M16.2286 12.8C16.3429 12.6857 16.4571 12.5714 16.4571 12.4571C16.5714 12.3429 16.5714 12.1143 16.5714 12C16.5714 11.8857 16.5714 11.6571 16.4571 11.5429C16.4571 11.4286 16.3429 11.3143 16.2286 11.2L12.8 7.77143C12.3429 7.31429 11.6571 7.31429 11.2 7.77143C10.7429 8.22857 10.7429 8.91429 11.2 9.37143L12.6857 10.8571H5.14286C4.45714 10.8571 4 11.3143 4 12C4 12.6857 4.45714 13.1429 5.14286 13.1429H12.6857L11.2 14.6286C10.7429 15.0857 10.7429 15.7714 11.2 16.2286C11.6571 16.6857 12.3429 16.6857 12.8 16.2286L16.2286 12.8Z\"/>\n<path d=\"M13.1429 5.14286C13.1429 5.82857 13.6 6.28571 14.2857 6.28571H17.7143V17.7143H14.2857C13.6 17.7143 13.1429 18.1714 13.1429 18.8571C13.1429 19.5429 13.6 20 14.2857 20H18.8571C19.5429 20 20 19.5429 20 18.8571V5.14286C20 4.45714 19.5429 4 18.8571 4H14.2857C13.6 4 13.1429 4.45714 13.1429 5.14286Z\"/>\n</svg>\n");

/***/ }),
/* 306 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M6.28571 14.2857H4V20H9.71429V17.7143H6.28571V14.2857Z\"/>\n<path d=\"M14.2857 4V6.28571H17.7143V9.71429H20V4H14.2857Z\"/>\n</svg>\n");

/***/ }),
/* 307 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M15.205 11.3729C15.1745 12.2164 14.4689 12.891 13.603 12.891C12.7177 12.891 12 12.1858 12 11.316C12 10.5054 12.6233 9.83779 13.4247 9.75063C12.9655 9.63569 12.4862 9.575 11.9952 9.575C11.0719 9.575 10.19 9.78963 9.40519 10.1761C8.95567 10.7318 8.68713 11.4351 8.68713 12.2C8.68713 13.9977 10.1704 15.455 12 15.455C13.8297 15.455 15.3129 13.9977 15.3129 12.2C15.3129 11.9142 15.2754 11.637 15.205 11.3729ZM7.81774 11.3272C7.26918 11.8898 6.83468 12.5667 6.55559 13.3262C6.40528 13.7353 5.9459 13.9472 5.52955 13.7995C5.11319 13.6518 4.89753 13.2004 5.04785 12.7914C6.09582 9.93934 8.85854 8 11.9952 8H12C12.0051 8 12.0103 8.00001 12.0154 8.00003C15.1552 8.00835 17.9162 9.95961 18.9533 12.8206C19.1018 13.2303 18.8842 13.6807 18.4672 13.8267C18.0502 13.9726 17.5918 13.7588 17.4432 13.349C17.1666 12.586 16.7333 11.9056 16.1849 11.3398C16.2438 11.6174 16.2747 11.9052 16.2747 12.2C16.2747 14.5196 14.3608 16.4 12 16.4C9.63916 16.4 7.72532 14.5196 7.72532 12.2C7.72532 11.9007 7.75718 11.6088 7.81774 11.3272Z\"/>\n</svg>\n");

/***/ }),
/* 308 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M19.8766 12.5577L17.7601 17.8458C17.5863 18.1806 17.0938 18.5338 16.7132 18.5338L5.13372 18.5372C4.98455 18.5372 4.83685 18.5078 4.69907 18.4506C4.5613 18.3934 4.43617 18.3096 4.33085 18.2039C4.22553 18.0983 4.14209 17.9729 4.08532 17.835C4.02855 17.697 3.99955 17.5492 4.00001 17.4L4.00229 8.91659C4.00229 8.29144 4.50972 7.78401 5.13487 7.78287H6.17716V8.74859H5.48001C5.34361 8.74859 5.2128 8.80277 5.11635 8.89922C5.01991 8.99566 4.96572 9.12647 4.96572 9.26287V17.0538C4.96572 17.3395 5.19658 17.568 5.48001 17.568H6.1943L8.12573 12.1943C8.31545 11.8137 8.67431 11.5063 9.05488 11.5063H17.2995L17.3029 8.76573C17.5651 8.78879 17.8092 8.90892 17.9874 9.10256C18.1656 9.29621 18.2651 9.54942 18.2663 9.81259V11.5063H19.3806C19.8263 11.5109 20.2035 11.952 19.8766 12.5577V12.5577ZM6.8343 12.672C6.80002 8.95316 6.8343 6.02057 6.8343 6.02057C6.8343 5.45714 7.29145 5 7.85488 5H14.4846C14.616 5 14.7406 5.05486 14.8286 5.15086L16.1349 6.68572C16.2142 6.77209 16.2582 6.88504 16.2583 7.00229V10.4194H15.4012V7.64344C15.4012 7.58706 15.3788 7.53299 15.3389 7.49313C15.2991 7.45326 15.245 7.43087 15.1886 7.43087H14.5029C14.4466 7.43102 14.3909 7.42008 14.3388 7.39868C14.2868 7.37728 14.2394 7.34584 14.1995 7.30615C14.1596 7.26646 14.1279 7.2193 14.1062 7.16736C14.0846 7.11542 14.0733 7.05972 14.0732 7.00344V6.06972C14.0732 6.01334 14.0508 5.95927 14.0109 5.91941C13.9711 5.87954 13.917 5.85715 13.8606 5.85715H7.85488C7.81153 5.85715 7.76996 5.87436 7.73931 5.90501C7.70867 5.93566 7.69145 5.97723 7.69145 6.02057V11.6286L7.03659 13.0617C7.03659 13.0617 6.83773 13.048 6.8343 12.6709V12.672ZM13.432 7.80687C13.6492 7.80687 13.8286 8.04344 13.8286 8.33487C13.8286 8.62516 13.6503 8.86059 13.432 8.86059H9.65374C9.43545 8.86059 9.25717 8.62516 9.25717 8.33487C9.25717 8.04344 9.43431 7.80687 9.65374 7.80687H13.432V7.80687ZM13.8286 10.1623C13.8286 10.4537 13.6503 10.6892 13.432 10.6892H9.65374C9.43545 10.6892 9.25717 10.4537 9.25717 10.1634C9.25717 9.87202 9.43431 9.63545 9.65374 9.63545H13.432C13.6503 9.63545 13.8286 9.87202 13.8286 10.1623V10.1623Z\"/>\n</svg>\n");

/***/ }),
/* 309 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M8.19303 6C8.3976 6 8.58045 6.12571 8.65359 6.31771L9.35414 8.15651H13.506L13.1289 9.14277H9.01472C8.91463 9.14286 8.81688 9.11252 8.73442 9.05578C8.65196 8.99905 8.5887 8.91858 8.55302 8.82507L7.85247 6.98512H5.24911C5.15848 7.02387 5.08125 7.0884 5.027 7.17069C4.97275 7.25298 4.94388 7.3494 4.94397 7.44796L4.94512 17.33C4.94512 17.6088 5.17025 17.8328 5.44796 17.8328H6.14623L8.03532 12.5758C8.2216 12.2044 8.57245 11.9027 8.94501 11.9027H19.0453C19.4819 11.9073 19.8499 12.3393 19.5299 12.9312L17.4602 18.1025C17.2888 18.4294 16.8088 18.7757 16.4351 18.7757L5.10968 18.7779C4.96401 18.7781 4.81974 18.7495 4.68511 18.6939C4.55049 18.6382 4.42815 18.5566 4.32509 18.4537C4.22203 18.3507 4.14027 18.2285 4.08449 18.0939C4.02871 17.9593 4 17.8151 4 17.6694L4.00229 7.10968C4.00229 6.81568 4.11908 6.53372 4.32697 6.32583C4.53486 6.11794 4.81682 6.00114 5.11083 6.00114L8.19303 6ZM19.2053 8.6045C20.0853 8.88335 20.0773 9.29363 19.9161 9.57933C19.7584 9.86047 19.459 10.0205 18.827 9.81818C17.8282 9.49819 16.8259 9.93932 16.2534 10.281L18.0431 10.969H14.5037C14.3524 10.9047 14.232 10.7842 14.1678 10.6328C14.1036 10.4814 14.1007 10.3111 14.1597 10.1576L15.3803 6.9794C15.4456 6.82886 15.5666 6.70937 15.7179 6.64587C15.8692 6.58237 16.0392 6.57976 16.1924 6.63859C16.3456 6.69742 16.4702 6.81315 16.5401 6.96161C16.61 7.11008 16.6199 7.27981 16.5677 7.43539L15.9722 8.98392C16.7722 8.57936 17.9551 8.20794 19.2053 8.6045V8.6045Z\"/>\n</svg>\n");

/***/ }),
/* 310 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M5.06628 5H9.73257C10.8526 5 10.4297 7.13371 11.4663 7.13371H18.9337C19.0728 7.1319 19.2109 7.15767 19.3399 7.20954C19.469 7.26141 19.5865 7.33835 19.6857 7.43591C19.7848 7.53347 19.8636 7.64971 19.9176 7.77792C19.9716 7.90613 19.9996 8.04376 20 8.18286V17.8C20 18.3886 19.5223 18.8663 18.9337 18.8663H5.06628C4.78358 18.866 4.51254 18.7535 4.31264 18.5536C4.11274 18.3537 4.0003 18.0827 4 17.8V6.06629C4.0003 5.78358 4.11274 5.51254 4.31264 5.31264C4.51254 5.11274 4.78358 5.0003 5.06628 5V5ZM5.71429 8.63543V17.3554H18.2857V8.65029C13.8983 8.63886 11.2743 8.63886 10.4137 8.65029C9.12229 8.66514 9.83086 6.71543 8.63657 6.71543H5.71429V8.63543ZM9.55886 12.2411H11.6926V10.1074C11.6989 9.9703 11.7579 9.84089 11.8572 9.7461C11.9564 9.6513 12.0884 9.59841 12.2257 9.59841C12.363 9.59841 12.495 9.6513 12.5943 9.7461C12.6936 9.84089 12.7525 9.9703 12.7589 10.1074V12.2411H14.8926C15.0297 12.2475 15.1591 12.3064 15.2539 12.4057C15.3487 12.505 15.4016 12.637 15.4016 12.7743C15.4016 12.9116 15.3487 13.0436 15.2539 13.1428C15.1591 13.2421 15.0297 13.3011 14.8926 13.3074H12.7589V15.4411C12.7525 15.5783 12.6936 15.7077 12.5943 15.8025C12.495 15.8973 12.363 15.9502 12.2257 15.9502C12.0884 15.9502 11.9564 15.8973 11.8572 15.8025C11.7579 15.7077 11.6989 15.5783 11.6926 15.4411V13.3074H9.55886C9.26629 13.3074 9.02628 13.0674 9.02628 12.7737C9.02689 12.6327 9.08319 12.4975 9.18294 12.3978C9.28268 12.298 9.4178 12.2417 9.55886 12.2411Z\"/>\n</svg>\n");

/***/ }),
/* 311 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M5.06628 5H9.73257C10.8526 5 10.4297 7.13371 11.4663 7.13371H18.9337C19.0728 7.1319 19.2109 7.15767 19.3399 7.20954C19.469 7.26141 19.5865 7.33835 19.6857 7.43591C19.7848 7.53347 19.8636 7.64971 19.9176 7.77792C19.9716 7.90613 19.9996 8.04376 20 8.18286V17.8C20 18.3886 19.5223 18.8663 18.9337 18.8663H5.06628C4.78358 18.866 4.51254 18.7535 4.31264 18.5536C4.11274 18.3537 4.0003 18.0827 4 17.8V6.06629C4.0003 5.78358 4.11274 5.51254 4.31264 5.31264C4.51254 5.11274 4.78358 5.0003 5.06628 5V5ZM5.71429 8.63543V17.3554H18.2857V8.65029C13.8983 8.63886 11.2743 8.63886 10.4137 8.65029C9.12229 8.66514 9.83086 6.71543 8.63657 6.71543H5.71429V8.63543Z\"/>\n</svg>\n");

/***/ }),
/* 312 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M5 15.8889V17.4444H9.66667V15.8889H5ZM5 6.55556V8.11111H12.7778V6.55556H5ZM12.7778 19V17.4444H19V15.8889H12.7778V14.3333H11.2222V19H12.7778ZM8.11111 9.66667V11.2222H5V12.7778H8.11111V14.3333H9.66667V9.66667H8.11111ZM19 12.7778V11.2222H11.2222V12.7778H19ZM14.3333 9.66667H15.8889V8.11111H19V6.55556H15.8889V5H14.3333V9.66667Z\"/>\n</svg>\n");

/***/ }),
/* 313 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M5 11V5H11V11H5ZM6 9H10V6H6V9ZM13 11V5H19V11H13ZM14 9H18V6H14V9ZM5 19V13H11V19H5ZM6 17H10V14H6V17ZM13 19V13H19V19H13ZM14 17H18V14H14V17Z\"/>\n<path d=\"M5 11V5H11V11H5ZM6 9H10V6H6V9ZM13 11V5H19V11H13ZM14 9H18V6H14V9ZM5 19V13H11V19H5ZM6 17H10V14H6V17ZM13 19V13H19V19H13ZM14 17H18V14H14V17Z\"/>\n</svg>\n");

/***/ }),
/* 314 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M15 9.95811C15 8.22498 13.4511 7.5 11.8772 7.5C10.3766 7.5 9 8.56842 9 9.77445C9 10.2657 9.36903 10.5239 9.79947 10.5239C10.354 10.5239 10.5175 10.1727 10.6922 9.79707C10.8931 9.36545 11.1089 8.90163 11.9505 8.90163C12.6886 8.90163 13.1304 9.29511 13.1304 9.95868C13.1304 10.5325 12.6435 10.9082 12.133 11.3021C11.5705 11.7361 10.9793 12.1923 10.9793 12.9598C10.9793 13.3533 11.2375 13.7832 11.7663 13.7832C12.3444 13.7832 12.4607 13.4766 12.5865 13.1448C12.6373 13.011 12.6896 12.873 12.7745 12.7494C12.893 12.5753 13.1423 12.3978 13.4327 12.191C14.1058 11.7116 15 11.0748 15 9.95811Z\" />\n<path d=\"M12.4779 14.7795C12.2891 14.5906 12.0334 14.4839 11.7663 14.4826C11.4991 14.4836 11.2431 14.5902 11.0542 14.7792C10.8652 14.9681 10.7586 15.2241 10.7576 15.4913C10.7586 15.7585 10.8652 16.0145 11.0542 16.2034C11.2431 16.3923 11.4991 16.499 11.7663 16.5C12.0334 16.4988 12.2892 16.3921 12.478 16.2032C12.6669 16.0143 12.7734 15.7584 12.7745 15.4913C12.7733 15.2242 12.6667 14.9684 12.4779 14.7795Z\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12Z\" />\n</svg>\n");

/***/ }),
/* 315 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M10.597 8.3032C11.0479 8.21589 11.5119 8.16981 11.9846 8.16853C11.9897 8.16851 11.9949 8.16851 12 8.16851H12.0048C15.1415 8.16851 17.9042 10.1423 18.9522 13.0451C19.1025 13.4614 18.8868 13.9208 18.4705 14.0711C18.0541 14.2214 17.5947 14.0058 17.4444 13.5894C17.1653 12.8164 16.7308 12.1275 16.1823 11.5549C16.2428 11.8415 16.2747 12.1386 16.2747 12.4432C16.2747 13.7165 15.7179 14.8598 14.8346 15.6429L16.2136 18.0314L14.7328 18.8864L7.78643 6.85494L9.26722 6L10.597 8.3032ZM14.3407 14.7876C14.9413 14.1879 15.3129 13.3589 15.3129 12.4432C15.3129 11.6647 15.0443 10.9488 14.5948 10.3833C13.81 9.98996 12.9281 9.77151 12.0048 9.77151C11.8212 9.77151 11.6393 9.78014 11.4595 9.79707L14.3407 14.7876ZM7.73785 9.52529L8.84229 11.4382C8.74151 11.7552 8.68713 12.0928 8.68713 12.4432C8.68713 14.0296 9.8022 15.3556 11.2913 15.6801L11.8897 16.7165C9.57983 16.6579 7.72532 14.7671 7.72532 12.4432C7.72532 12.1431 7.75624 11.8503 7.81507 11.5677C7.26669 12.1435 6.83336 12.836 6.55676 13.6127C6.40824 14.0296 5.9498 14.2473 5.5328 14.0988C5.1158 13.9502 4.89816 13.4918 5.04668 13.0748C5.56676 11.6146 6.52036 10.3872 7.73785 9.52529Z\"/>\n</svg>\n");

/***/ }),
/* 316 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M13.9046 4.5925H17.2066C18.4226 4.5925 19.4075 5.5774 19.4075 6.79341V17.7991C19.4075 18.3828 19.1756 18.9426 18.7629 19.3554C18.3501 19.7681 17.7903 20 17.2066 20H6.2009C5.61719 20 5.05738 19.7681 4.64463 19.3554C4.23188 18.9426 4 18.3828 4 17.7991V12.2963H5.10104V17.7991C5.10104 18.4071 5.5929 18.899 6.2009 18.899H17.2066C17.4982 18.8986 17.7778 18.7827 17.984 18.5765C18.1902 18.3703 18.3061 18.0907 18.3065 17.7991V6.79341C18.3061 6.5018 18.1902 6.22223 17.984 6.01604C17.7778 5.80984 17.4982 5.69386 17.2066 5.69355H13.9046V4.5925ZM9.82166 12.8888V10.6156C9.82166 8.32349 8.00002 6.37029 6.44031 5.39488L5.65216 4.90302C5.55836 4.84362 5.48754 4.7541 5.45132 4.64914C5.41511 4.54419 5.41565 4.43004 5.45286 4.32543C5.49007 4.22082 5.56174 4.13198 5.6561 4.07347C5.75047 4.01497 5.86192 3.99028 5.97216 4.00346L7.97276 4.25354C11.1989 4.6565 13.4993 7.31133 13.715 10.7922L13.7186 12.7526L14.8291 11.6266C15.0089 11.4602 15.2462 11.3699 15.4912 11.3746C15.7362 11.3793 15.9698 11.4786 16.1432 11.6518C16.3165 11.825 16.4161 12.0586 16.421 12.3035C16.4259 12.5485 16.3358 12.7859 16.1695 12.9659L12.3769 16.7597L12.3663 16.7656L12.07 16.9635L11.7037 17.037L11.3423 16.9635L11.0436 16.7656L11.0317 16.7597L7.23913 12.9671C7.06122 12.7892 6.96127 12.5479 6.96127 12.2963C6.96127 12.0446 7.06122 11.8033 7.23913 11.6254C7.41704 11.4475 7.65834 11.3476 7.90995 11.3476C8.16155 11.3476 8.40285 11.4475 8.58077 11.6254L9.82166 12.8888V12.8888Z\"/>\n</svg>\n");

/***/ }),
/* 317 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M12.4994 10.982C12.4998 10.9924 12.5 11.003 12.5 11.0135V17.8333H13.6667C13.9888 17.8333 14.25 18.0945 14.25 18.4167C14.25 18.7388 13.9888 19 13.6667 19H9.58333C9.26117 19 9 18.7388 9 18.4167C9 18.0945 9.26117 17.8333 9.58333 17.8333H10.75V11.5378H9.71493C9.44895 11.5378 9.23333 11.3221 9.23333 11.0562V11.0498C9.23333 10.7731 9.42775 10.5344 9.69875 10.4785L11.7988 10.0451C12.1143 9.97994 12.4228 10.1829 12.488 10.4984C12.496 10.5372 12.5 10.5767 12.5 10.6163V10.9544C12.5 10.9637 12.4998 10.9728 12.4994 10.982ZM10.1083 6.70625C10.1083 6.22878 10.247 5.82504 10.5244 5.49502C10.8017 5.16501 11.1897 5 11.6882 5H11.6987C11.9936 5 12.2499 5.06846 12.4676 5.20538C12.6853 5.3423 12.852 5.52311 12.9679 5.7478C13.0837 5.97249 13.1417 6.21123 13.1417 6.464C13.1417 6.95552 13.0012 7.35926 12.7204 7.67523C12.4395 7.99121 12.0323 8.14919 11.4986 8.14919C11.0808 8.14919 10.7491 8.01227 10.4928 7.73843C10.2365 7.46458 10.1083 7.12053 10.1083 6.70625Z\"/>\n</svg>\n");

/***/ }),
/* 318 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M13.5249 10.4741C13.6189 10.568 13.6918 10.6809 13.7388 10.8052C13.7859 10.9295 13.8059 11.0624 13.7976 11.195C13.7814 11.4194 13.685 11.6305 13.526 11.7896C13.348 11.9572 13.1127 12.0504 12.8683 12.0504C12.6238 12.0504 12.3885 11.9572 12.2105 11.7896C11.9472 11.5266 11.5902 11.3789 11.218 11.3789C10.8459 11.3789 10.4889 11.5266 10.2256 11.7896L7.23759 14.7764C7.10718 14.9069 7.00374 15.0618 6.9332 15.2322C6.86265 15.4027 6.82636 15.5854 6.82642 15.7699C6.82647 15.9544 6.86286 16.137 6.93351 16.3075C7.00416 16.4779 7.10768 16.6327 7.23817 16.7631C7.36866 16.8935 7.52356 16.997 7.69402 17.0675C7.86448 17.1381 8.04717 17.1743 8.23165 17.1743C8.41614 17.1742 8.5988 17.1378 8.76922 17.0672C8.93964 16.9965 9.09448 16.893 9.22489 16.7625L10.9922 14.9941C11.0247 14.9615 11.0662 14.9392 11.1114 14.93C11.1566 14.9208 11.2034 14.9252 11.2461 14.9426C11.7225 15.1357 12.2304 15.2352 12.7442 15.2329H12.8378C12.8843 15.2326 12.9299 15.2462 12.9686 15.2719C13.0073 15.2976 13.0376 15.3342 13.0554 15.3772C13.0732 15.4201 13.0779 15.4674 13.0687 15.513C13.0596 15.5585 13.0371 15.6004 13.004 15.6331L10.5462 18.0909C9.92738 18.6848 9.10033 19.0124 8.24264 19.0034C7.38495 18.9943 6.56499 18.6494 5.95878 18.0426C5.35257 17.4357 5.00844 16.6154 5.00027 15.7577C4.9921 14.9 5.32053 14.0733 5.91506 13.455L8.8925 10.4741C9.19681 10.1698 9.55808 9.92834 9.9557 9.76363C10.3533 9.59892 10.7795 9.51415 11.2099 9.51415C11.6402 9.51415 12.0664 9.59892 12.464 9.76363C12.8616 9.92834 13.2229 10.1698 13.5272 10.4741H13.5249ZM18.0402 5.95995C18.3445 6.26425 18.5859 6.62553 18.7506 7.02314C18.9153 7.42075 19.0001 7.84692 19.0001 8.27729C19.0001 8.70767 18.9153 9.13383 18.7506 9.53145C18.5859 9.92906 18.3445 10.2903 18.0402 10.5946L15.0616 13.5733C14.6424 13.9925 14.1174 14.2902 13.5424 14.4347H13.5167L13.3809 14.4627L13.306 14.4768L13.1445 14.5002H13.0649C13.004 14.5002 12.9502 14.5119 12.8987 14.5142L12.7583 14.5306H12.5804C12.4633 14.5259 12.3463 14.5142 12.2316 14.4979C12.1365 14.482 12.042 14.4624 11.9484 14.4393L11.8103 14.4019C11.7596 14.3876 11.7097 14.3712 11.6604 14.3527C11.6113 14.334 11.5598 14.3176 11.5106 14.2965C11.4615 14.2755 11.4123 14.2568 11.3632 14.2333C11.0148 14.0719 10.6978 13.85 10.4269 13.5779C10.2525 13.4025 10.1546 13.1652 10.1546 12.9178C10.1546 12.6705 10.2525 12.4332 10.4269 12.2577C10.6049 12.0902 10.8401 11.9969 11.0846 11.9969C11.3291 11.9969 11.5643 12.0902 11.7424 12.2577C12.0057 12.5208 12.3627 12.6685 12.7349 12.6685C13.107 12.6685 13.464 12.5208 13.7273 12.2577L14.4951 11.4947L14.5138 11.4736L16.7083 9.28031C16.8404 9.15028 16.9456 8.99538 17.0175 8.82453C17.0895 8.65368 17.127 8.47027 17.1277 8.28487C17.1285 8.09948 17.0925 7.91577 17.0219 7.74434C16.9513 7.57291 16.8475 7.41715 16.7164 7.28606C16.5853 7.15496 16.4296 7.05112 16.2581 6.98052C16.0867 6.90992 15.903 6.87396 15.7176 6.87471C15.5322 6.87547 15.3488 6.91292 15.1779 6.98492C15.0071 7.05691 14.8522 7.16202 14.7222 7.29418L12.9596 9.05443C12.9269 9.0873 12.8852 9.10974 12.8398 9.11891C12.7944 9.12807 12.7473 9.12356 12.7044 9.10592C12.2297 8.91178 11.7216 8.81238 11.2087 8.81333H11.1221C11.0949 8.84021 11.0617 8.86004 11.0251 8.8711C10.9885 8.88216 10.9498 8.88411 10.9124 8.87677C10.8749 8.86944 10.8398 8.85304 10.8101 8.82902C10.7804 8.805 10.757 8.77408 10.742 8.73896C10.727 8.70383 10.7209 8.66558 10.7241 8.62752C10.7272 8.58946 10.7397 8.55276 10.7603 8.52062C10.7809 8.48848 10.8091 8.46188 10.8424 8.44313C10.8757 8.42438 10.913 8.41406 10.9512 8.41306L13.4078 5.95995C13.7121 5.65561 14.0734 5.41419 14.471 5.24948C14.8686 5.08477 15.2948 5 15.7252 5C16.1555 5 16.5817 5.08477 16.9793 5.24948C17.3769 5.41419 17.7382 5.65561 18.0425 5.95995H18.0402Z\"/>\n</svg>\n");

/***/ }),
/* 319 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M10 19H19V16H10V19ZM5 19H8V16H5V19ZM10 13.5H19V10.5H10V13.5ZM5 13.5H8V10.5H5V13.5ZM10 5V8H19V5H10ZM5 5V8H8V5H5Z\"/>\n</svg>\n");

/***/ }),
/* 320 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg width=\"200px\" height=\"200px\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\"><g>\n  <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\" fill=\"#28292f\">\n    <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.9166666666666666s\" repeatCount=\"indefinite\"></animate>\n  </rect>\n</g><g transform=\"rotate(30 50 50)\">\n  <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\" fill=\"#28292f\">\n    <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.8333333333333334s\" repeatCount=\"indefinite\"></animate>\n  </rect>\n</g><g transform=\"rotate(60 50 50)\">\n  <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\" fill=\"#28292f\">\n    <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.75s\" repeatCount=\"indefinite\"></animate>\n  </rect>\n</g><g transform=\"rotate(90 50 50)\">\n  <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\" fill=\"#28292f\">\n    <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.6666666666666666s\" repeatCount=\"indefinite\"></animate>\n  </rect>\n</g><g transform=\"rotate(120 50 50)\">\n  <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\" fill=\"#28292f\">\n    <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.5833333333333334s\" repeatCount=\"indefinite\"></animate>\n  </rect>\n</g><g transform=\"rotate(150 50 50)\">\n  <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\" fill=\"#28292f\">\n    <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.5s\" repeatCount=\"indefinite\"></animate>\n  </rect>\n</g><g transform=\"rotate(180 50 50)\">\n  <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\" fill=\"#28292f\">\n    <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.4166666666666667s\" repeatCount=\"indefinite\"></animate>\n  </rect>\n</g><g transform=\"rotate(210 50 50)\">\n  <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\" fill=\"#28292f\">\n    <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.3333333333333333s\" repeatCount=\"indefinite\"></animate>\n  </rect>\n</g><g transform=\"rotate(240 50 50)\">\n  <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\" fill=\"#28292f\">\n    <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.25s\" repeatCount=\"indefinite\"></animate>\n  </rect>\n</g><g transform=\"rotate(270 50 50)\">\n  <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\" fill=\"#28292f\">\n    <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.16666666666666666s\" repeatCount=\"indefinite\"></animate>\n  </rect>\n</g><g transform=\"rotate(300 50 50)\">\n  <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\" fill=\"#28292f\">\n    <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.08333333333333333s\" repeatCount=\"indefinite\"></animate>\n  </rect>\n</g><g transform=\"rotate(330 50 50)\">\n  <rect x=\"47\" y=\"24\" rx=\"9.4\" ry=\"4.8\" width=\"6\" height=\"12\" fill=\"#28292f\">\n    <animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"0s\" repeatCount=\"indefinite\"></animate>\n  </rect>\n</g></svg>\n");

/***/ }),
/* 321 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M12.1378 16.164C12.9826 16.164 13.6731 15.4735 13.6731 14.6287C13.6731 13.7851 12.9826 13.0945 12.1378 13.0945C11.2942 13.0945 10.6037 13.7851 10.6037 14.6287C10.6037 15.4735 11.2942 16.164 12.1378 16.164ZM16.7415 9.25851H15.975V7.72319C15.945 6.72559 15.5277 5.77888 14.8115 5.08382C14.0953 4.38875 13.1365 4 12.1384 4C11.1404 4 10.1816 4.38875 9.46532 5.08382C8.74909 5.77888 8.33176 6.72559 8.30183 7.72319V9.25851H7.53417C6.69055 9.25851 6 9.94906 6 10.7927V18.4658C6 19.3095 6.69055 20 7.53417 20H16.7415C17.5863 20 18.2768 19.3095 18.2768 18.4658V10.7927C18.2768 9.94906 17.5863 9.25851 16.7415 9.25851ZM9.76004 7.72319C9.76004 6.41115 10.8258 5.3454 12.1378 5.3454C13.4499 5.3454 14.5168 6.41115 14.5168 7.72319V9.25851H9.76004V7.72319ZM16.7415 18.4658H7.53417V10.7927H16.7415V18.4658Z\"/>\n</svg>\n");

/***/ }),
/* 322 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M15.71 12.875H9.38667V11.125H15.71V8.5L19 12L15.71 15.5V12.875ZM12.9883 6.75L6.645 6.75V17.25H13V19H5V5L13 5V6.75H12.9883Z\"/>\n</svg>\n");

/***/ }),
/* 323 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M5.33333 4H18.6667C19.403 4 20 4.59695 20 5.33333C20 6.06971 19.403 6.66667 18.6667 6.66667H5.33333C4.59695 6.66667 4 6.06971 4 5.33333C4 4.59695 4.59695 4 5.33333 4ZM5.33333 10.1667H18.6667C19.403 10.1667 20 10.7636 20 11.5C20 12.2364 19.403 12.8333 18.6667 12.8333H5.33333C4.59695 12.8333 4 12.2364 4 11.5C4 10.7636 4.59695 10.1667 5.33333 10.1667ZM5.33333 16.3333H18.6667C19.403 16.3333 20 16.9303 20 17.6667C20 18.403 19.403 19 18.6667 19H5.33333C4.59695 19 4 18.403 4 17.6667C4 16.9303 4.59695 16.3333 5.33333 16.3333Z\"/>\n</svg>\n");

/***/ }),
/* 324 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M18.4 4H5.6C4.72 4 4 4.72 4 5.6V18.4C4 19.28 4.72 20 5.6 20H18.4C19.28 20 20 19.28 20 18.4V5.6C20 4.72 19.28 4 18.4 4ZM8.8 18.4H5.6V15.2H8.8V18.4ZM8.8 13.6H5.6V10.4H8.8V13.6V13.6ZM8.8 8.8H5.6V5.6H8.8V8.8V8.8ZM13.6 18.4H10.4V15.2H13.6V18.4ZM13.6 13.6H10.4V10.4H13.6V13.6V13.6ZM13.6 8.8H10.4V5.6H13.6V8.8V8.8ZM18.4 18.4H15.2V15.2H18.4V18.4ZM18.4 13.6H15.2V10.4H18.4V13.6V13.6ZM18.4 8.8H15.2V5.6H18.4V8.8V8.8Z\"/>\n</svg>\n");

/***/ }),
/* 325 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M17.6945 5H6.3064C5.58663 5 4.99988 5.57131 4.99988 6.27208V15.8168C4.99988 16.52 5.58663 17.0901 6.3064 17.0901H7.48227L9.20095 19.3825C9.26043 19.4609 9.33728 19.5246 9.42547 19.5684C9.51367 19.6123 9.61082 19.6351 9.7093 19.6351C9.80779 19.6351 9.90494 19.6123 9.99313 19.5684C10.0813 19.5246 10.1582 19.4609 10.2177 19.3825L11.9363 17.0901H17.6934C18.4131 17.0901 18.9999 16.52 18.9999 15.8168V6.27208C18.9999 5.57131 18.4131 5 17.6934 5H17.6945ZM17.6945 15.8168H11.6192C11.5203 15.8169 11.4227 15.84 11.3343 15.8843C11.2458 15.9286 11.1689 15.993 11.1097 16.0722L9.71049 17.9382L8.30895 16.0722C8.24982 15.9931 8.17311 15.9289 8.08488 15.8846C7.99665 15.8403 7.89932 15.8171 7.80059 15.8168H6.27433L6.30759 6.27208H17.7278L17.6945 15.8168ZM16.4545 7.82328H7.54641V9.09773H16.4545V7.82328V7.82328ZM16.4545 10.3686H7.54641V11.6419H16.4545V10.3686V10.3686ZM16.4545 12.914H7.54641V14.1861H16.4545V12.9152V12.914Z\"/>\n</svg>\n");

/***/ }),
/* 326 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M5 6.07692V5H6.07692V6.07692H5ZM8.23077 6.07692V5H9.30769V6.07692H8.23077ZM11.4615 6.07692V5H12.5385V6.07692H11.4615ZM5 9.30769V8.23077H6.07692V9.30769H5ZM5 12.5385V11.4615H6.07692V12.5385H5ZM17.9231 12.5385V11.4615H19V12.5385H17.9231ZM5 15.7692V14.6923H6.07692V15.7692H5ZM17.9231 15.7692V14.6923H19V15.7692H17.9231ZM8.23077 19V17.9231H9.30769V19H8.23077ZM11.4615 19V17.9231H12.5385V19H11.4615ZM14.6923 19V17.9231H15.7692V19H14.6923ZM17.9231 19V17.9231H19V19H17.9231ZM14.6923 5H19V9.30769H16.4735C15.4903 9.30769 14.6923 8.51077 14.6923 7.52646V5ZM10.1585 12.9229L8.04769 12.938C7.87632 12.938 7.71197 12.8699 7.59079 12.7487C7.46962 12.6276 7.40154 12.4632 7.40154 12.2918C7.40154 12.1205 7.46962 11.9561 7.59079 11.8349C7.71197 11.7138 7.87632 11.6457 8.04769 11.6457H11.7028L11.7103 11.6478L11.9494 11.6963L12.1594 11.8352L12.2983 12.0452L12.3468 12.2832L12.3489 12.2918V15.948C12.3489 16.1194 12.2808 16.2837 12.1597 16.4049C12.0385 16.5261 11.8741 16.5942 11.7028 16.5942C11.5314 16.5942 11.367 16.5261 11.2459 16.4049C11.1247 16.2837 11.0566 16.1194 11.0566 15.948L11.0771 13.8329L6.12538 18.7846C6.06535 18.8447 5.99408 18.8923 5.91564 18.9248C5.8372 18.9573 5.75313 18.974 5.66823 18.974C5.58333 18.974 5.49926 18.9573 5.42082 18.9248C5.34238 18.8923 5.27111 18.8447 5.21108 18.7846C5.15104 18.7246 5.10342 18.6533 5.07093 18.5749C5.03844 18.4964 5.02172 18.4124 5.02172 18.3275C5.02172 18.2426 5.03844 18.1585 5.07093 18.0801C5.10342 18.0016 5.15104 17.9303 5.21108 17.8703L10.1595 12.9229H10.1585Z\"/>\n</svg>\n");

/***/ }),
/* 327 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M17.2147 11C17.6484 11 18 11.3516 18 11.7853V12.0147C18 12.4484 17.6484 12.8 17.2147 12.8C8.97766 12.8 15.0223 12.8 6.78533 12.8C6.3516 12.8 6 12.4484 6 12.0147V11.7853C6 11.3516 6.3516 11 6.78533 11C15.0223 11 8.97766 11 17.2147 11Z\"/>\n</svg>\n");

/***/ }),
/* 328 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M13.0333 6.51667C13.0333 7.35083 12.3508 8.03333 11.5167 8.03333C10.6825 8.03333 10 7.35083 10 6.51667C10 5.6825 10.6825 5 11.5167 5C12.3508 5 13.0333 5.6825 13.0333 6.51667ZM13.0333 17.4833C13.0333 18.3175 12.3508 19 11.5167 19C10.6825 19 10 18.3175 10 17.4833C10 16.6492 10.6825 15.9667 11.5167 15.9667C12.3508 15.9667 13.0333 16.6492 13.0333 17.4833ZM13.0333 12C13.0333 12.8342 12.3508 13.5167 11.5167 13.5167C10.6825 13.5167 10 12.8342 10 12C10 11.1658 10.6825 10.4833 11.5167 10.4833C12.3508 10.4833 13.0333 11.1658 13.0333 12Z\"/>\n</svg>\n");

/***/ }),
/* 329 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M6.51667 10C7.35083 10 8.03333 10.6825 8.03333 11.5167C8.03333 12.3508 7.35083 13.0333 6.51667 13.0333C5.6825 13.0333 5 12.3508 5 11.5167C5 10.6825 5.6825 10 6.51667 10ZM17.4833 10C18.3175 10 19 10.6825 19 11.5167C19 12.3508 18.3175 13.0333 17.4833 13.0333C16.6492 13.0333 15.9667 12.3508 15.9667 11.5167C15.9667 10.6825 16.6492 10 17.4833 10ZM12 10C12.8342 10 13.5167 10.6825 13.5167 11.5167C13.5167 12.3508 12.8342 13.0333 12 13.0333C11.1658 13.0333 10.4833 12.3508 10.4833 11.5167C10.4833 10.6825 11.1658 10 12 10Z\"/>\n</svg>\n");

/***/ }),
/* 330 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M6 19h4V5H6v14zm8-14v14h4V5h-4z\"/></svg>");

/***/ }),
/* 331 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M8 5v14l11-7z\"/></svg>");

/***/ }),
/* 332 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.9 11.1H17.2147C17.6484 11.1 18 11.4516 18 11.8853V12.1147C18 12.5484 17.6484 12.9 17.2147 12.9H12.9V17.2147C12.9 17.6484 12.5484 18 12.1147 18H11.8853C11.4516 18 11.1 17.6484 11.1 17.2147V12.9H6.78533C6.3516 12.9 6 12.5484 6 12.1147V11.8853C6 11.4516 6.3516 11.1 6.78533 11.1H11.1V6.78533C11.1 6.3516 11.4516 6 11.8853 6H12.1147C12.5484 6 12.9 6.3516 12.9 6.78533V11.1Z\"/>\n</svg>\n");

/***/ }),
/* 333 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M11.8171 7.63657V9.81714L14.7269 6.90743L11.8183 4V6.18286C11.0543 6.18271 10.2977 6.33306 9.59181 6.62533C8.88591 6.9176 8.2445 7.34607 7.70421 7.88626C7.16391 8.42644 6.73532 9.06777 6.44291 9.77361C6.1505 10.4795 6 11.236 6 12C6 13.1429 6.33486 14.2034 6.90286 15.0971L7.96343 14.0366C7.62707 13.4106 7.45227 12.7106 7.45486 12C7.45576 10.8432 7.91562 9.73407 8.73347 8.916C9.55133 8.09792 10.6604 7.63778 11.8171 7.63657V7.63657ZM16.7349 8.90171L15.672 9.96457C15.992 10.5749 16.1817 11.2651 16.1817 12C16.1808 13.157 15.7208 14.2663 14.9027 15.0844C14.0846 15.9025 12.9753 16.3625 11.8183 16.3634V14.1829L8.90857 17.0926L11.8183 20V17.8171C13.3609 17.8168 14.8402 17.2038 15.9309 16.1129C17.0216 15.022 17.6343 13.5426 17.6343 12C17.6343 10.8571 17.3006 9.79657 16.7337 8.90286L16.7349 8.90171Z\"/>\n</svg>\n");

/***/ }),
/* 334 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M14.1805 15.3143C11.9329 17.0124 8.73153 16.8364 6.68162 14.7865C4.4393 12.5442 4.4393 8.92407 6.68162 6.68175C8.92395 4.43942 12.5441 4.43942 14.7864 6.68175C16.7796 8.67497 17.0011 11.7569 15.4507 13.992L18.6808 17.222C18.8751 17.3926 18.9999 17.6425 18.9999 17.9215C18.9999 18.4272 18.5899 18.8372 18.0842 18.8372C17.8106 18.8372 17.565 18.7172 17.3972 18.527L14.1805 15.3143ZM13.8138 13.814C15.518 12.1098 15.518 9.35849 13.8138 7.65432C12.1097 5.95015 9.35837 5.95015 7.6542 7.65432C5.95003 9.35849 5.95003 12.1098 7.6542 13.814C9.35837 15.5181 12.1097 15.5181 13.8138 13.814Z\"/>\n</svg>\n");

/***/ }),
/* 335 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16.3122 6.61491L15.6358 7.56136C15.1993 7.47421 14.7479 7.42849 14.2858 7.42849C13.583 7.42849 12.9049 7.53423 12.2666 7.73066C11.8366 7.53654 11.3595 7.42849 10.8572 7.42849C8.96375 7.42849 7.4286 8.96358 7.4286 10.8569C7.4286 11.3593 7.53666 11.8364 7.73079 12.2663C7.53435 12.9046 7.4286 13.5827 7.4286 14.2854C7.4286 14.7476 7.47434 15.1991 7.56153 15.6356L6.61412 16.3119L5.4021 15.0999L6.49448 13.5707C6.20064 13.0995 5.98133 12.5796 5.85239 12.023L4 11.714V9.99989L5.85239 9.69097C5.98133 9.13446 6.20064 8.61381 6.49448 8.14336L5.4021 6.61491L6.61415 5.40284L8.1435 6.49439C8.61476 6.20141 9.13542 5.98126 9.69116 5.85153L10.0001 4H11.7144L12.0232 5.85156C12.5799 5.98129 13.0996 6.20144 13.5709 6.49442L15.1003 5.40287L16.3122 6.61491ZM18.8315 17.8209L17.8214 18.831L16.5478 17.9216C16.1443 18.1731 15.7083 18.3507 15.2574 18.4552L15 20L13.5717 20L13.3141 18.4553C12.8632 18.3507 12.4272 18.1731 12.0237 17.9216L10.7503 18.8311L9.74013 17.821L10.6496 16.5475C10.398 16.144 10.2205 15.708 10.1164 15.2577L8.57111 14.9996V13.5713L10.1159 13.3139C10.2204 12.8631 10.3975 12.4275 10.6496 12.0236L9.74012 10.75L10.7502 9.73994L12.0238 10.6494C12.4277 10.3974 12.8637 10.2199 13.3141 10.1158L13.5711 8.57149L14.9995 8.57146L15.2575 10.1158C15.7078 10.2208 16.1444 10.3979 16.5483 10.6489L17.8214 9.73996L18.8315 10.7501L17.9224 12.0231C18.174 12.4275 18.3505 12.8635 18.4556 13.3139L20.0001 13.5718L19.9999 15.0001L18.4556 15.2571C18.3511 15.708 18.174 16.1435 17.922 16.5474L18.8315 17.8209ZM14.2857 17.1424C12.7079 17.1424 11.4286 15.8632 11.4286 14.2854C11.4286 12.7076 12.7079 11.4284 14.2857 11.4284C15.8636 11.4284 17.1429 12.7076 17.1429 14.2854C17.1429 15.8632 15.8637 17.1424 14.2857 17.1424Z\"/>\n</svg>\n");

/***/ }),
/* 336 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M14.9098 12.6781H12.1192C9.30553 12.6781 6.90946 14.8814 5.71202 16.7689L5.1085 17.7221C4.99692 17.8983 4.80134 18 4.59977 18C4.53258 18 4.46539 17.9882 4.3994 17.9645C4.13304 17.8723 3.96986 17.6097 4.00465 17.3342L4.31181 14.9145C4.80615 11.0118 8.06448 8.22879 12.3366 7.96777C12.3462 7.96718 13.5061 7.9666 14.7418 7.96604L13.3586 6.62269C12.9047 6.17755 12.9047 5.4479 13.3586 5.00052C13.8126 4.55538 14.5505 4.55538 15.0044 5.00052L19.6602 9.58945L19.6671 9.60093L19.9092 9.96117L20 10.3994L19.9092 10.8377L19.6671 11.1979L19.6602 11.2117L15.0045 15.8006C14.5505 16.2481 13.8126 16.2481 13.3587 15.8006C12.9048 15.3532 12.9048 14.6258 13.3587 14.1784L14.9098 12.6781Z\"/>\n</svg>\n");

/***/ }),
/* 337 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M14.6668 12.2726C14.6681 12.2366 14.6621 12.2007 14.6492 12.167C14.6364 12.1334 14.6168 12.1026 14.5918 12.0767L11.658 9.07683C11.6332 9.05152 11.6034 9.03161 11.5706 9.01836C11.5377 9.00511 11.5024 8.9988 11.467 8.99983C11.4314 8.99866 11.396 9.0049 11.3629 9.01816C11.3299 9.03141 11.3 9.05139 11.275 9.07683L8.3502 12.0677C8.29935 12.1241 8.26997 12.1967 8.26721 12.2726C8.26721 12.3526 8.29221 12.4176 8.3422 12.4686C8.3672 12.4936 8.39703 12.5132 8.42987 12.5263C8.46271 12.5394 8.49786 12.5456 8.53319 12.5446H10.4001V15.5445C10.4001 15.6185 10.4261 15.6824 10.4801 15.7364C10.504 15.7621 10.5329 15.7826 10.5651 15.7965C10.5973 15.8105 10.632 15.8176 10.6671 15.8174H12.267C12.302 15.8177 12.3367 15.8107 12.3688 15.797C12.401 15.7832 12.43 15.7629 12.454 15.7374C12.4797 15.7124 12.5 15.6823 12.5138 15.6492C12.5275 15.616 12.5344 15.5804 12.534 15.5445V12.5446H14.3999C14.435 12.545 14.4699 12.5381 14.5023 12.5244C14.5346 12.5106 14.5638 12.4903 14.5878 12.4646C14.6133 12.4396 14.6334 12.4097 14.6469 12.3767C14.6605 12.3437 14.6673 12.3083 14.6668 12.2726ZM19.9995 14.7265C20.0068 15.1554 19.9275 15.5814 19.7664 15.979C19.6052 16.3766 19.3655 16.7376 19.0616 17.0404C18.4366 17.6803 17.6827 17.9993 16.7997 17.9993H7.73324C6.7063 17.9993 5.82635 17.6253 5.09639 16.8794C4.74196 16.5261 4.46227 16.1051 4.27398 15.6414C4.0857 15.1777 3.99267 14.6809 4.00045 14.1805C3.99602 13.457 4.19827 12.7472 4.58342 12.1347C4.95754 11.5236 5.5022 11.0352 6.15033 10.7297C6.14118 10.6079 6.13551 10.4859 6.13333 10.3638C6.13333 9.15882 6.5503 8.13088 7.38326 7.27793C8.21721 6.42598 9.22315 6 10.4001 6C11.267 6 12.06 6.24699 12.78 6.74096C13.49 7.22413 14.0373 7.91084 14.3499 8.71085C14.7266 8.36469 15.2212 8.17517 15.7328 8.18088C16.3227 8.18088 16.8247 8.39486 17.2417 8.82084C17.6577 9.24682 17.8667 9.76079 17.8667 10.3638C17.8667 10.7947 17.7527 11.1867 17.5247 11.5397C18.2338 11.707 18.8629 12.1152 19.3046 12.6946C19.7676 13.2876 19.9995 13.9645 19.9995 14.7265Z\"/>\n</svg>\n");

/***/ }),
/* 338 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M9.80356 4.86059C8.92043 5.4914 8.66811 6.50071 8.79427 7.00535C8.79427 7.63616 8.92043 8.51927 8.92043 8.51927C8.92043 8.51927 8.66811 8.64544 8.66811 9.27625C8.79427 10.664 9.29892 10.1594 9.29892 10.7902C9.55124 12.3041 10.0559 12.0518 10.0559 12.9349C10.0559 14.3227 9.42508 14.9535 7.65881 15.7105C5.89255 16.4675 4.00012 17.4768 4.00012 19.1169V20H19.1395V19.1169C19.1395 17.4768 17.2471 16.4675 15.4808 15.7105C13.7146 14.9535 13.0838 14.3227 13.0838 12.9349C13.0838 12.0518 13.5884 12.4303 13.8407 10.7902C13.9669 10.1594 14.4715 10.7902 14.4715 9.27625C14.4715 8.64544 14.2192 8.51927 14.2192 8.51927C14.2192 8.51927 14.3454 7.63616 14.3454 7.00535C14.3454 6.37455 13.9669 4.73444 12.3268 4.35595L12.453 4.22978C10.939 3.72513 10.8129 4.10362 9.80356 4.86059V4.86059Z\"/>\n</svg>\n");

/***/ }),
/* 339 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M12.3333 4L5 8V16.0873L12.3333 20L19.6667 16.0873V8.04333L12.3333 4ZM11.6667 18.1333L6.33333 15.288V9.48667L11.6667 12.3953V18.1333ZM18.3333 15.288L13 18.1333V11.6047L7.08867 8.38L12.33 5.52067L18.3333 8.83333V15.288V15.288ZM15.3947 12.396L16.488 11.7847L16.484 12.2L15.3907 12.812L15.3947 12.396V12.396ZM16.4967 10.9527L15.4027 11.5653L15.3987 11.9813L16.4927 11.3693L16.4967 10.9527V10.9527ZM16.4967 10.1593L15.4027 10.772L15.3987 11.188L16.4927 10.576L16.4967 10.1593V10.1593ZM13.9987 9.63867L15.0953 8.99867L14.7493 8.81667L13.652 9.456L13.9987 9.63867ZM16.804 13.8587L16.48 12.6153L15.386 13.228L15.0373 14.8487C14.8847 15.5853 15.3187 15.722 15.9113 15.39C16.502 15.0587 16.9433 14.432 16.804 13.8587V13.8587ZM15.914 14.9813C15.64 15.1347 15.3667 15.156 15.3693 14.8907C15.3727 14.6173 15.6507 14.3227 15.926 14.1687C16.1973 14.0167 16.466 14.002 16.4633 14.2787C16.46 14.544 16.1867 14.8287 15.914 14.9813ZM13.0147 7.898L12.6687 7.71533L11.5713 8.35533L11.918 8.538L13.0147 7.898V7.898ZM11.9753 7.34733L10.878 7.98733L11.2267 8.172L12.324 7.532L11.9753 7.34733ZM13.3033 9.27067L14.3993 8.632L14.056 8.44933L12.958 9.088L13.3033 9.27067ZM15.304 10.4333L16.4013 9.79333L16.0547 9.61133L14.958 10.2507L15.304 10.4333V10.4333ZM11.2847 6.982L10.188 7.622L10.532 7.80467L11.63 7.16533L11.2847 6.982ZM12.6127 8.906L13.71 8.266L13.3633 8.08333L12.2667 8.72267L12.6127 8.906V8.906ZM14.6513 10.032L15.7487 9.39267L15.4033 9.21L14.306 9.85L14.6513 10.032Z\"/>\n</svg>\n");

/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(57);
            var content = __webpack_require__(341);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(58);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".theme{--spacing-unit: 8px;--spacing-size-05: calc(var(--spacing-unit) / 2);--spacing-size-1: var(--spacing-unit);--spacing-size-2: calc(var(--spacing-unit) * 2);--spacing-size-3: calc(var(--spacing-unit) * 3);--spacing-size-4: calc(var(--spacing-unit) * 4);--spacing-size-5: calc(var(--spacing-unit) * 5);--box-size-unit: 8px;--base-box-size: calc(var(--box-size-unit) * 4);--box-size-xs: var(--base-box-size);--box-size-s: calc(var(--box-size-xs) + var(--box-size-unit));--box-size-m: calc(var(--box-size-s) + var(--box-size-unit));--box-size-l: calc(var(--box-size-m) + var(--box-size-unit));--box-size-xl: calc(var(--box-size-l) + var(--box-size-unit));--color-basic-1: var(--snow);--color-basic-2: var(--sky);--color-basic-3: var(--mist);--color-basic-4: var(--ink);--color-basic-5: var(--coal);--color-basic-6: var(--jet);--color-light: var(--color-basic-1);--color-dark: var(--color-basic-6);--color-brand-1: var(--blue);--color-brand-1-rgb: var(--blue-rgb);--color-brand-2: var(--blue-light);--color-brand-2-rgb: var(--blue-light-rgb);--color-brand-3: var(--blue-dark);--color-brand-3-rgb: var(--blue-dark-rgb);--color-error: var(--red);--color-success: var(--green);--color-transparent: transparent;--s1: rgba(var(--box-shadow-color), 0.2);--s2: rgba(var(--box-shadow-color), 0.14);--s3: rgba(var(--box-shadow-color), 0.12);--elevation-1: 0 2px 4px -1px var(--s1), 0 4px 5px 0 var(--s2), 0 1px 10px 0 var(--s3);--elevation-2: 0 5px 6px -3px var(--s1), 0 9px 12px 1px var(--s2), 0 3px 16px 2px var(--s3);--elevation-3: 0 7px 9px -4px var(--s1), 0 14px 21px 2px var(--s2), 0 5px 26px 4px var(--s3);--elevation-4: 0 9px 12px -6px var(--s1), 0 19px 29px 2px var(--s2), 0 7px 36px 6px var(--s3);--elevation-5: 0 11px 15px -7px var(--s1), 0 24px 38px 3px var(--s2), 0 9px 46px 8px var(--s3);color:var(--text-color-basic-1)}.theme--dark{--color-contrast: var(--color-basic-6);--color-alpha-1: var(--sky-08);--color-alpha-2: var(--sky-16);--color-alpha-3: var(--sky-24);--color-alpha-4: var(--sky-40);--bg-color-basic-1: var(--color-basic-4);--bg-color-basic-2: var(--color-basic-3);--bg-color-basic-3: var(--color-basic-2);--bg-color-basic-4: var(--color-basic-1);--bg-color-basic-5: var(--color-basic-5);--bg-color-basic-6: var(--color-basic-6);--text-color-basic-1: var(--color-basic-1);--text-color-basic-2: var(--color-basic-2);--text-color-basic-3: var(--color-basic-3);--text-color-basic-4: var(--color-basic-4);--text-color-basic-5: var(--color-basic-5);--text-color-basic-6: var(--color-basic-6);--icon-color-basic-1: var(--color-basic-1);--icon-color-basic-2: var(--color-basic-2);--icon-color-basic-3: var(--color-basic-3);--icon-color-basic-4: var(--color-basic-4);--icon-color-basic-5: var(--color-basic-5);--icon-color-basic-6: var(--color-basic-6);--border-color-basic-1: var(--color-basic-4);--border-color-basic-2: var(--color-basic-3);--border-color-basic-3: var(--color-basic-2);--border-color-basic-4: var(--color-basic-1);--border-color-basic-5: var(--color-basic-5);--border-color-basic-6: var(--color-basic-6);--box-shadow-color: 0, 0, 0;--text-shadow-color: var(--ink-rgb);--checkbox-basic-bg-color: var(--color-basic-6);--checkbox-basic-border-color: var(--color-basic-6);--checkbox-basic-active-color: var(--color-basic-6);--checkbox-tile-bg-color: transparent;--checkbox-tile-border-color: var(--color-alpha-3);--checkbox-tile-active-color: var(--bg-color-basic-2);--range-axis-color: var(--color-basic-6)}.theme--light{--color-contrast: var(--color-basic-1);--color-alpha-1: var(--mist-08);--color-alpha-2: var(--mist-16);--color-alpha-3: var(--mist-24);--color-alpha-4: var(--mist-40);--bg-color-basic-1: var(--color-basic-1);--bg-color-basic-2: var(--color-basic-2);--bg-color-basic-3: var(--color-basic-3);--bg-color-basic-4: var(--color-basic-4);--bg-color-basic-5: var(--color-basic-5);--bg-color-basic-6: var(--color-basic-6);--text-color-basic-1: var(--color-basic-4);--text-color-basic-2: var(--color-basic-3);--text-color-basic-3: var(--color-basic-2);--text-color-basic-4: var(--color-basic-1);--text-color-basic-5: var(--color-basic-5);--text-color-basic-6: var(--color-basic-6);--icon-color-basic-1: var(--color-basic-4);--icon-color-basic-2: var(--color-basic-3);--icon-color-basic-3: var(--color-basic-2);--icon-color-basic-4: var(--color-basic-1);--icon-color-basic-5: var(--color-basic-5);--icon-color-basic-6: var(--color-basic-6);--border-color-basic-1: var(--color-basic-1);--border-color-basic-2: var(--color-basic-2);--border-color-basic-3: var(--color-basic-3);--border-color-basic-4: var(--color-basic-4);--border-color-basic-5: var(--color-basic-5);--border-color-basic-6: var(--color-basic-6);--box-shadow-color: 0, 0, 0;--text-shadow-color: var(--ink-rgb);--checkbox-basic-bg-color: transparent;--checkbox-basic-border-color: var(--color-alpha-3);--checkbox-basic-active-color: var(--color-brand-1);--checkbox-tile-bg-color: transparent;--checkbox-tile-border-color: var(--color-alpha-3);--checkbox-tile-active-color: var(--color-brand-1);--range-axis-color: var(--color-basic-2)}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(55);
var IS_PURE = __webpack_require__(79);
var global = __webpack_require__(24);
var getBuiltIn = __webpack_require__(70);
var NativePromise = __webpack_require__(343);
var redefine = __webpack_require__(69);
var redefineAll = __webpack_require__(344);
var setToStringTag = __webpack_require__(109);
var setSpecies = __webpack_require__(345);
var isObject = __webpack_require__(47);
var aFunction = __webpack_require__(81);
var anInstance = __webpack_require__(346);
var inspectSource = __webpack_require__(102);
var iterate = __webpack_require__(347);
var checkCorrectnessOfIteration = __webpack_require__(353);
var speciesConstructor = __webpack_require__(151);
var task = __webpack_require__(157).set;
var microtask = __webpack_require__(354);
var promiseResolve = __webpack_require__(355);
var hostReportErrors = __webpack_require__(356);
var newPromiseCapabilityModule = __webpack_require__(160);
var perform = __webpack_require__(357);
var InternalStateModule = __webpack_require__(104);
var isForced = __webpack_require__(145);
var wellKnownSymbol = __webpack_require__(27);
var IS_NODE = __webpack_require__(110);
var V8_VERSION = __webpack_require__(358);

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var PromiseConstructor = NativePromise;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var $fetch = getBuiltIn('fetch');
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var NATIVE_REJECTION_EVENT = typeof PromiseRejectionEvent == 'function';
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
  if (!GLOBAL_CORE_JS_PROMISE) {
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (V8_VERSION === 66) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    if (!IS_NODE && !NATIVE_REJECTION_EVENT) return true;
  }
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (IS_PURE && !PromiseConstructor.prototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = PromiseConstructor.resolve(1);
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  return !(promise.then(function () { /* empty */ }) instanceof FakePromise);
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  task.call(global, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  task.call(global, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
    // `Promise.prototype.then` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && typeof NativePromise == 'function') {
    nativeThen = NativePromise.prototype.then;

    // wrap native Promise#then for native async functions
    redefine(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {
      var that = this;
      return new PromiseConstructor(function (resolve, reject) {
        nativeThen.call(that, resolve, reject);
      }).then(onFulfilled, onRejected);
    // https://github.com/zloirock/core-js/issues/640
    }, { unsafe: true });

    // wrap fetch result
    if (typeof $fetch == 'function') $({ global: true, enumerable: true, forced: true }, {
      // eslint-disable-next-line no-unused-vars
      fetch: function fetch(input /* , init */) {
        return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
      }
    });
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.github.io/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.github.io/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.github.io/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.github.io/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(24);

module.exports = global.Promise;


/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(69);

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(70);
var definePropertyModule = __webpack_require__(56);
var wellKnownSymbol = __webpack_require__(27);
var DESCRIPTORS = __webpack_require__(51);

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),
/* 346 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(39);
var isArrayIteratorMethod = __webpack_require__(348);
var toLength = __webpack_require__(107);
var bind = __webpack_require__(156);
var getIteratorMethod = __webpack_require__(349);
var iteratorClose = __webpack_require__(352);

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator);
      throw error;
    }
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};


/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(27);
var Iterators = __webpack_require__(72);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(350);
var Iterators = __webpack_require__(72);
var wellKnownSymbol = __webpack_require__(27);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(351);
var classofRaw = __webpack_require__(61);
var wellKnownSymbol = __webpack_require__(27);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(27);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(39);

module.exports = function (iterator) {
  var returnMethod = iterator['return'];
  if (returnMethod !== undefined) {
    return anObject(returnMethod.call(iterator)).value;
  }
};


/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(27);

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(24);
var getOwnPropertyDescriptor = __webpack_require__(98).f;
var macrotask = __webpack_require__(157).set;
var IS_IOS = __webpack_require__(158);
var IS_NODE = __webpack_require__(110);

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var document = global.document;
var process = global.process;
var Promise = global.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  if (!IS_IOS && !IS_NODE && MutationObserver && document) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // Node.js without promises
  } else if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(39);
var isObject = __webpack_require__(47);
var newPromiseCapability = __webpack_require__(160);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 356 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(24);

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),
/* 357 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(24);
var userAgent = __webpack_require__(159);

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(55);
var notARegExp = __webpack_require__(360);
var requireObjectCoercible = __webpack_require__(62);
var correctIsRegExpLogic = __webpack_require__(361);

// `String.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~String(requireObjectCoercible(this))
      .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

var isRegExp = __webpack_require__(150);

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(27);

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};


/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(161);

/**
 * The base implementation of methods like `_.max` and `_.min` which accepts a
 * `comparator` to determine the extremum value.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per iteration.
 * @param {Function} comparator The comparator used to compare values.
 * @returns {*} Returns the extremum value.
 */
function baseExtremum(array, iteratee, comparator) {
  var index = -1,
      length = array.length;

  while (++index < length) {
    var value = array[index],
        current = iteratee(value);

    if (current != null && (computed === undefined
          ? (current === current && !isSymbol(current))
          : comparator(current, computed)
        )) {
      var computed = current,
          result = value;
    }
  }
  return result;
}

module.exports = baseExtremum;


/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(162),
    getRawTag = __webpack_require__(365),
    objectToString = __webpack_require__(366);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(46)))

/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(162);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

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

module.exports = getRawTag;


/***/ }),
/* 366 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 367 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 368 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.gt` which doesn't coerce arguments.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is greater than `other`,
 *  else `false`.
 */
function baseGt(value, other) {
  return value > other;
}

module.exports = baseGt;


/***/ }),
/* 369 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ContentRect_1 = __webpack_require__(164);
var ResizeObservation = /** @class */ (function () {
    function ResizeObservation(target) {
        this.target = target;
        this.$$broadcastWidth = this.$$broadcastHeight = 0;
    }
    Object.defineProperty(ResizeObservation.prototype, "broadcastWidth", {
        get: function () {
            return this.$$broadcastWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResizeObservation.prototype, "broadcastHeight", {
        get: function () {
            return this.$$broadcastHeight;
        },
        enumerable: true,
        configurable: true
    });
    ResizeObservation.prototype.isActive = function () {
        var cr = ContentRect_1.ContentRect(this.target);
        return !!cr
            && (cr.width !== this.broadcastWidth
                || cr.height !== this.broadcastHeight);
    };
    return ResizeObservation;
}());
exports.ResizeObservation = ResizeObservation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzaXplT2JzZXJ2YXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvUmVzaXplT2JzZXJ2YXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2Q0FBNEM7QUFFNUM7SUFlSSwyQkFBWSxNQUFlO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFWRCxzQkFBVyw2Q0FBYzthQUF6QjtZQUNJLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ2pDLENBQUM7OztPQUFBO0lBQ0Qsc0JBQVcsOENBQWU7YUFBMUI7WUFDSSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQU9NLG9DQUFRLEdBQWY7UUFDSSxJQUFNLEVBQUUsR0FBRyx5QkFBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVwQyxPQUFPLENBQUMsQ0FBQyxFQUFFO2VBQ0osQ0FDQyxFQUFFLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxjQUFjO21CQUM3QixFQUFFLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxlQUFlLENBQ3hDLENBQUM7SUFDVixDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQUFDLEFBN0JELElBNkJDO0FBRVEsOENBQWlCIn0=

/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ContentRect_1 = __webpack_require__(164);
var ResizeObserverEntry = /** @class */ (function () {
    function ResizeObserverEntry(target) {
        this.target = target;
        this.contentRect = ContentRect_1.ContentRect(target);
    }
    return ResizeObserverEntry;
}());
exports.ResizeObserverEntry = ResizeObserverEntry;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzaXplT2JzZXJ2ZXJFbnRyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9SZXNpemVPYnNlcnZlckVudHJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQTRDO0FBRTVDO0lBR0ksNkJBQVksTUFBZTtRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLHlCQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUNMLDBCQUFDO0FBQUQsQ0FBQyxBQVBELElBT0M7QUFFUSxrREFBbUIifQ==

/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(163);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(84),
    isSymbol = __webpack_require__(161);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(55);
var toInteger = __webpack_require__(71);
var thisNumberValue = __webpack_require__(375);
var repeat = __webpack_require__(376);
var fails = __webpack_require__(38);

var nativeToFixed = 1.0.toFixed;
var floor = Math.floor;

var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};

var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

var FORCED = nativeToFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !fails(function () {
  // V8 ~ Android 4.3-
  nativeToFixed.call({});
});

// `Number.prototype.toFixed` method
// https://tc39.github.io/ecma262/#sec-number.prototype.tofixed
$({ target: 'Number', proto: true, forced: FORCED }, {
  // eslint-disable-next-line max-statements
  toFixed: function toFixed(fractionDigits) {
    var number = thisNumberValue(this);
    var fractDigits = toInteger(fractionDigits);
    var data = [0, 0, 0, 0, 0, 0];
    var sign = '';
    var result = '0';
    var e, z, j, k;

    var multiply = function (n, c) {
      var index = -1;
      var c2 = c;
      while (++index < 6) {
        c2 += n * data[index];
        data[index] = c2 % 1e7;
        c2 = floor(c2 / 1e7);
      }
    };

    var divide = function (n) {
      var index = 6;
      var c = 0;
      while (--index >= 0) {
        c += data[index];
        data[index] = floor(c / n);
        c = (c % n) * 1e7;
      }
    };

    var dataToString = function () {
      var index = 6;
      var s = '';
      while (--index >= 0) {
        if (s !== '' || index === 0 || data[index] !== 0) {
          var t = String(data[index]);
          s = s === '' ? t : s + repeat.call('0', 7 - t.length) + t;
        }
      } return s;
    };

    if (fractDigits < 0 || fractDigits > 20) throw RangeError('Incorrect fraction digits');
    // eslint-disable-next-line no-self-compare
    if (number != number) return 'NaN';
    if (number <= -1e21 || number >= 1e21) return String(number);
    if (number < 0) {
      sign = '-';
      number = -number;
    }
    if (number > 1e-21) {
      e = log(number * pow(2, 69, 1)) - 69;
      z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = fractDigits;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        result = dataToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        result = dataToString() + repeat.call('0', fractDigits);
      }
    }
    if (fractDigits > 0) {
      k = result.length;
      result = sign + (k <= fractDigits
        ? '0.' + repeat.call('0', fractDigits - k) + result
        : result.slice(0, k - fractDigits) + '.' + result.slice(k - fractDigits));
    } else {
      result = sign + result;
    } return result;
  }
});


/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(61);

// `thisNumberValue` abstract operation
// https://tc39.github.io/ecma262/#sec-thisnumbervalue
module.exports = function (value) {
  if (typeof value != 'number' && classof(value) != 'Number') {
    throw TypeError('Incorrect invocation');
  }
  return +value;
};


/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__(71);
var requireObjectCoercible = __webpack_require__(62);

// `String.prototype.repeat` method implementation
// https://tc39.github.io/ecma262/#sec-string.prototype.repeat
module.exports = ''.repeat || function repeat(count) {
  var str = String(requireObjectCoercible(this));
  var result = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};


/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(57);
            var content = __webpack_require__(378);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(58);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".marker{position:absolute;top:0;height:100%;width:1px;background:currentColor}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(57);
            var content = __webpack_require__(380);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(58);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".span{position:absolute;top:0;bottom:0}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(57);
            var content = __webpack_require__(382);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(58);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".stats-plot__plot{position:relative;height:80px;overflow:hidden}.stats-plot__svg{position:relative;display:block;height:100%}.stats-plot__svg polyline{fill:none;stroke:var(--fps-line-color)}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(57);
            var content = __webpack_require__(384);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(58);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ":root{--font-family: UniNeue, sans-serif;--font-size: 14px}:root{--blue: #3A55F9;--blue-rgb: 58,85,249;--blue-light: #487CF9;--blue-light-rgb: 72,124,249;--blue-dark: #1F2683;--blue-dark-rgb: 31,38,131;--snow: #F9FAFB;--snow-rgb: 249,250,251;--sky: #AAABB0;--sky-rgb: 170,171,176;--sky-40: rgba(var(--sky-rgb), var(--opacity-s));--sky-24: rgba(var(--sky-rgb), var(--opacity-m));--sky-16: rgba(var(--sky-rgb), var(--opacity-l));--sky-08: rgba(var(--sky-rgb), var(--opacity-xl));--mist: #67676B;--mist-rgb: 103,103,107;--mist-40: rgba(var(--mist-rgb), var(--opacity-s));--mist-24: rgba(var(--mist-rgb), var(--opacity-m));--mist-16: rgba(var(--mist-rgb), var(--opacity-l));--mist-08: rgba(var(--mist-rgb), var(--opacity-xl));--ink: #272727;--ink-rgb: 39,39,39;--ink-80: rgba(var(--ink-rgb), 0.8);--coal: #171717;--coal-rgb: 23,23,23;--jet: #0A0909;--jet-rgb: 10,9,9;--jet-80: rgba(var(--jet-rgb), 0.8);--white: #ffffff;--red: #CB4A5A;--rd-rgb: 203,74,90;--red-light: #E87583;--red-light-rgb: 232,117,13;--green: #47C77C;--gold: #B5A48B}:root{--opacity-s: 0.4;--opacity-m: 0.24;--opacity-l: 0.16;--opacity-xl: 0.08;--base-padding: 8px;--border-radius: 2px}.i{display:block}.i svg{display:block;width:100%;height:100%}.i:not(.i--keepFill) svg *{fill:currentColor}.t{margin:0}.t--italic{font-style:italic}.t--caps{text-transform:uppercase}.t--weight-bold{font-weight:bold}.t--weight-lighter{font-weight:lighter}.t--weight-300{font-weight:300}.t--weight-400{font-weight:400}.t--weight-500{font-weight:500}.t--weight-700{font-weight:700}.t--nowrap{white-space:nowrap}.t--truncate{display:block;overflow:hidden;text-overflow:ellipsis}.box{display:flex;flex-direction:column;box-sizing:border-box;border:0;padding:0}.box--bw-1{border-width:1px}.box--bw-2{border-width:2px}.box--brd-all{border-style:solid}.box--brd-top{border-top-style:solid}.box--brd-right{border-right-style:solid}.box--brd-bottom{border-bottom-style:solid}.box--brd-left{border-left-style:solid}.box--brd-vertical{border-top-style:solid;border-bottom-style:solid}.box--brd-horizontal{border-left-style:solid;border-right-style:solid}.box--dsp-block{display:block}.box--dsp-inline{display:inline}.box--dsp-inline-block{display:inline-block}.box--sz-xs{height:var(--box-size-xs);width:var(--box-size-xs)}.box--sz-s{height:var(--box-size-s);width:var(--box-size-s)}.box--sz-m{height:var(--box-size-m);width:var(--box-size-m)}.box--sz-l{height:var(--box-size-l);width:var(--box-size-l)}.box--sz-xl{height:var(--box-size-xl);width:var(--box-size-xl)}.box--sz-f{width:100%;height:100%}.box--sz-w-xs{width:var(--box-size-xs)}.box--sz-w-s{width:var(--box-size-s)}.box--sz-w-m{width:var(--box-size-m)}.box--sz-w-l{width:var(--box-size-l)}.box--sz-w-xl{width:var(--box-size-xl)}.box--sz-w-f{width:100%}.box--sz-h-xs{height:var(--box-size-xs)}.box--sz-h-s{height:var(--box-size-s)}.box--sz-h-m{height:var(--box-size-m)}.box--sz-h-l{height:var(--box-size-l)}.box--sz-h-xl{height:var(--box-size-xl)}.box--sz-h-f{height:100%}.box--mrg-xs{margin:var(--spacing-size-05)}.box--mrg-s{margin:var(--spacing-size-1)}.box--mrg-m{margin:var(--spacing-size-2)}.box--mrg-l{margin:var(--spacing-size-3)}.box--mrg-xl{margin:var(--spacing-size-4)}.box--mrg-t-xs{margin-top:var(--spacing-size-05)}.box--mrg-t-s{margin-top:var(--spacing-size-1)}.box--mrg-t-m{margin-top:var(--spacing-size-2)}.box--mrg-t-l{margin-top:var(--spacing-size-3)}.box--mrg-t-xl{margin-top:var(--spacing-size-4)}.box--mrg-r-xs{margin-right:var(--spacing-size-05)}.box--mrg-r-s{margin-right:var(--spacing-size-1)}.box--mrg-r-m{margin-right:var(--spacing-size-2)}.box--mrg-r-l{margin-right:var(--spacing-size-3)}.box--mrg-r-xl{margin-right:var(--spacing-size-4)}.box--mrg-b-xs{margin-bottom:var(--spacing-size-05)}.box--mrg-b-s{margin-bottom:var(--spacing-size-1)}.box--mrg-b-m{margin-bottom:var(--spacing-size-2)}.box--mrg-b-l{margin-bottom:var(--spacing-size-3)}.box--mrg-b-xl{margin-bottom:var(--spacing-size-4)}.box--mrg-l-xs{margin-left:var(--spacing-size-05)}.box--mrg-l-s{margin-left:var(--spacing-size-1)}.box--mrg-l-m{margin-left:var(--spacing-size-2)}.box--mrg-l-l{margin-left:var(--spacing-size-3)}.box--mrg-l-xl{margin-left:var(--spacing-size-4)}.box--mrg-y-xs{margin-top:var(--spacing-size-05);margin-bottom:var(--spacing-size-05)}.box--mrg-y-s{margin-top:var(--spacing-size-1);margin-bottom:var(--spacing-size-1)}.box--mrg-y-m{margin-top:var(--spacing-size-2);margin-bottom:var(--spacing-size-2)}.box--mrg-y-l{margin-top:var(--spacing-size-3);margin-bottom:var(--spacing-size-3)}.box--mrg-y-xl{margin-top:var(--spacing-size-4);margin-bottom:var(--spacing-size-4)}.box--mrg-x-xs{margin-left:var(--spacing-size-05);margin-right:var(--spacing-size-05)}.box--mrg-x-s{margin-left:var(--spacing-size-1);margin-right:var(--spacing-size-1)}.box--mrg-x-m{margin-left:var(--spacing-size-2);margin-right:var(--spacing-size-2)}.box--mrg-x-l{margin-left:var(--spacing-size-3);margin-right:var(--spacing-size-3)}.box--mrg-x-xl{margin-left:var(--spacing-size-4);margin-right:var(--spacing-size-4)}.box--pad-xs{padding:var(--spacing-size-05)}.box--pad-s{padding:var(--spacing-size-1)}.box--pad-m{padding:var(--spacing-size-2)}.box--pad-l{padding:var(--spacing-size-3)}.box--pad-xl{padding:var(--spacing-size-4)}.box--pad-t-xs{padding-top:var(--spacing-size-05)}.box--pad-t-s{padding-top:var(--spacing-size-1)}.box--pad-t-m{padding-top:var(--spacing-size-2)}.box--pad-t-l{padding-top:var(--spacing-size-3)}.box--pad-t-xl{padding-top:var(--spacing-size-4)}.box--pad-r-xs{padding-right:var(--spacing-size-05)}.box--pad-r-s{padding-right:var(--spacing-size-1)}.box--pad-r-m{padding-right:var(--spacing-size-2)}.box--pad-r-l{padding-right:var(--spacing-size-3)}.box--pad-r-xl{padding-right:var(--spacing-size-4)}.box--pad-b-xs{padding-bottom:var(--spacing-size-05)}.box--pad-b-s{padding-bottom:var(--spacing-size-1)}.box--pad-b-m{padding-bottom:var(--spacing-size-2)}.box--pad-b-l{padding-bottom:var(--spacing-size-3)}.box--pad-b-xl{padding-bottom:var(--spacing-size-4)}.box--pad-l-xs{padding-left:var(--spacing-size-05)}.box--pad-l-s{padding-left:var(--spacing-size-1)}.box--pad-l-m{padding-left:var(--spacing-size-2)}.box--pad-l-l{padding-left:var(--spacing-size-3)}.box--pad-l-xl{padding-left:var(--spacing-size-4)}.box--pad-y-xs{padding-top:var(--spacing-size-05);padding-bottom:var(--spacing-size-05)}.box--pad-y-s{padding-top:var(--spacing-size-1);padding-bottom:var(--spacing-size-1)}.box--pad-y-m{padding-top:var(--spacing-size-2);padding-bottom:var(--spacing-size-2)}.box--pad-y-l{padding-top:var(--spacing-size-3);padding-bottom:var(--spacing-size-3)}.box--pad-y-xl{padding-top:var(--spacing-size-4);padding-bottom:var(--spacing-size-4)}.box--pad-x-xs{padding-left:var(--spacing-size-05);padding-right:var(--spacing-size-05)}.box--pad-x-s{padding-left:var(--spacing-size-1);padding-right:var(--spacing-size-1)}.box--pad-x-m{padding-left:var(--spacing-size-2);padding-right:var(--spacing-size-2)}.box--pad-x-l{padding-left:var(--spacing-size-3);padding-right:var(--spacing-size-3)}.box--pad-x-xl{padding-left:var(--spacing-size-4);padding-right:var(--spacing-size-4)}.box--dir-row{flex-direction:row}.box--dir-row-reverse{flex-direction:row-reverse}.box--dir-column{flex-direction:column}.box--dir-column-reverse{flex-direction:column-reverse}.box--jf-center{justify-content:center}.box--jf-start{justify-content:flex-start}.box--jf-end{justify-content:flex-end}.box--jf-between{justify-content:space-between}.box--jf-around{justify-content:space-around}.box--alg-center{align-items:center}.box--alg-start{align-items:flex-start}.box--alg-end{align-items:flex-end}.box--alg-stretch{align-items:stretch}.box--alg-baseline{align-items:baseline}.box--wrap-no-wrap{flex-wrap:nowrap}.box--wrap-wrap{flex-wrap:wrap}.box--wrap-wrap-reverse{flex-wrap:wrap-reverse}.box--tl,.box--tc,.box--tr{justify-content:flex-start}.box--tl,.box--cl,.box--bl{align-items:flex-start}.box--tc,.box--cc,.box--bc{align-items:center}.box--tr,.box--cr,.box--br{align-items:flex-end}.box--cl,.box--cc,.box--cr{justify-content:center}.box--bl,.box--bc,.box--br{justify-content:flex-end}.box--dir-row.box--tl,.box--dir-row.box--tc,.box--dir-row.box--tr{align-items:flex-start}.box--dir-row.box--tc,.box--dir-row.box--cc,.box--dir-row.box--bc{justify-content:center}.box--dir-row.box--cl,.box--dir-row.box--cc,.box--dir-row.box--cr{align-items:center}.box--dir-row.box--bl,.box--dir-row.box--bc,.box--dir-row.box--br{align-items:flex-end}.box--dir-row.box--tl,.box--dir-row.box--cl,.box--dir-row.box--bl{justify-content:flex-start}.box--dir-row.box--tr,.box--dir-row.box--cr,.box--dir-row.box--br{justify-content:flex-end}.box--elv-1{box-shadow:var(--elevation-1)}.box--elv-2{box-shadow:var(--elevation-2)}.box--elv-3{box-shadow:var(--elevation-3)}.box--elv-4{box-shadow:var(--elevation-4)}.box--elv-5{box-shadow:var(--elevation-5)}.input{padding:0 8px;display:block;width:100%;border:0;height:24px;outline:none;box-sizing:border-box;background:transparent;border-radius:0;-webkit-appearance:none}.input:disabled{opacity:.5}.drop-down{position:relative;user-select:none}.modal{position:fixed;left:0;right:0;bottom:0;top:0;overflow-y:auto;display:flex}.modal__backdrop{position:absolute;left:0;top:0;right:0;bottom:0}.modal__content{position:relative;margin:auto}.modal--fullscreen .modal__content{min-height:100%;min-width:100%}.text-field{position:relative;cursor:text;justify-content:center}.text-field__clear{position:absolute !important;right:0;bottom:2px;height:38px}.text-field__error{position:absolute;left:0;right:0;top:100%}.text-field__icon{pointer-events:none;position:absolute !important;left:0;bottom:2px}.text-field__input{padding:8px 0;display:block;outline:none;border:0;box-sizing:border-box;background:transparent;border-radius:0;width:100%;min-height:40px;font-size:14px;resize:none;-webkit-appearance:none;-webkit-tap-highlight-color:rgba(255,255,255,0)}.text-field__label{width:100%;overflow:hidden;text-overflow:ellipsis;position:absolute;top:31px;left:0}.text-field--border .text-field__input{border-bottom:2px solid transparent}.text-field--error{margin-bottom:16px}.text-field--expanded .text-field__label{transform:translateY(-22px)}.text-field--filled .text-field__label,.text-field--filled .text-field__error{left:16px}.text-field--filled .text-field__input{padding:8px 16px}.text-field--label .text-field__input{padding-top:30px}.text-field--icon .text-field__label,.text-field--icon .text-field__input{padding-left:40px}.text-field--clear .text-field__input{padding-right:40px}.text-field--multiline{line-height:24px}.text-field--multiline .text-field__icon,.text-field--multiline .text-field__clear{top:20px}.text-field input:-webkit-autofill{animation-name:onAutoFillStart;transition:background-color 50000s ease-in-out 0s}.text-field input:not(:-webkit-autofill){animation-name:onAutoFillCancel}@keyframes onAutoFillStart{from{opacity:1}to{opacity:1}}@keyframes onAutoFillCancel{from{opacity:1}to{opacity:1}}.range{user-select:none;height:24px;width:100%;position:relative;display:flex;flex-direction:row;align-items:center;user-select:none;-webkit-touch-callout:none;-webkit-user-select:none}.range__slider{flex:3;width:100%}.range__value{overflow:hidden;white-space:nowrap;font-size:12px;line-height:24px;flex:1;max-width:62px;padding-left:16px}.range__value input{width:auto}.range__axis{overflow:hidden;border-radius:4px;-webkit-mask-image:-webkit-radial-gradient(white, black)}.range__selected,.range__axis{height:4px}.range__track{cursor:pointer;position:relative;padding:10px 0}.range__selected{will-change:transform}.range__handle{width:16px;height:16px;border-radius:50%;cursor:pointer;position:absolute;top:50%;will-change:transform}.select{min-height:40px}.select__label{white-space:nowrap}.select__label--overflow{white-space:nowrap;overflow:hidden}.select__trigger{overflow:hidden;min-height:40px}.select__icon .i{pointer-events:none}.field__content{display:flex;flex-direction:column;justify-content:center;min-height:24px}.field__label{font-size:12px;height:24px;line-height:24px;color:var(--text-color-basic-2)}.field__required{display:none;position:absolute;right:calc(100% + 4px);top:16px;line-height:0}.number{position:relative;user-select:none;cursor:pointer}.number__label{position:absolute;right:0;top:0;bottom:0;width:16px;pointer-events:none}.number__drag{position:absolute;top:0;right:0;bottom:0;left:0}.number--focused .number__label{opacity:0}.checkbox{user-select:none;cursor:pointer}.checkbox--disabled{opacity:.5;pointer-events:none;cursor:default}.checkbox__toggle{height:24px;width:32px}.checkbox__toggle-track{width:22px;height:10px;position:relative}.checkbox__toggle-btn{width:16px;height:16px;border-radius:50%;position:absolute;top:50%;left:0;transform:translate(-50%, -50%)}.checkbox__toggle--checked .checkbox__toggle-btn{left:100%}.checkbox input{display:none}.btn{position:relative;user-select:none;text-decoration:none;background-color:transparent;outline:none}.btn:focus{outline:2px solid var(--color-brand-1)}.btn--responsive{width:100%}.btn--loading>*{opacity:0;visibility:hidden;pointer-events:none}.btn__loader{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.btn--loading .btn__loader{opacity:1;visibility:visible}.hr{position:relative;z-index:0}.hr__hover-bg,.hr__active-bg{outline:none;display:none;background:transparent;pointer-events:none;position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1}.hr__content{position:relative}.spacer{flex-grow:1}.row{width:100%}.card{min-width:375px}.card-header{min-height:40px}.card-actions{min-height:40px}.col{flex:1 1 auto}.col--grow{flex-grow:1;flex-shrink:0}.col--shrink{flex-grow:0;flex-shrink:1}.base-select__icon{margin-left:auto;flex-shrink:0}.base-select__trigger{cursor:pointer;border-bottom:2px solid transparent}.base-select__drop{display:flex;flex-direction:column}.base-select__value-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;box-sizing:border-box}.base-select__label{position:absolute;top:13px;left:0}.base-select__icon{height:38px;align-self:flex-end}.base-select--filled .base-select__icon{width:40px}.base-select--filled .base-select__value-label,.base-select--filled .base-select__label{padding-left:16px}.base-select--selected .base-select__label{display:none}.base-select--floating-label .base-select__label{top:27px}.base-select--floating-label.base-select--selected .base-select__label{display:block;transform:translateY(-22px)}.base-select--floating-label .base-select__trigger-content{padding-top:16px}.i--color-basic-1{color:var(--icon-color-basic-1)}.i--color-basic-2{color:var(--icon-color-basic-2)}.i--color-basic-3{color:var(--icon-color-basic-3)}.i--color-basic-4{color:var(--icon-color-basic-4)}.i--color-basic-5{color:var(--icon-color-basic-5)}.i--color-basic-6{color:var(--icon-color-basic-6)}.i--color-light{color:var(--color-light)}.i--color-dark{color:var(--color-dark)}.i--color-contrast{color:var(--color-contrast)}.i--color-alpha-1{color:var(--color-alpha-1)}.i--color-alpha-2{color:var(--color-alpha-2)}.i--color-alpha-3{color:var(--color-alpha-3)}.i--color-alpha-4{color:var(--color-alpha-4)}.i--color-brand-1{color:var(--color-brand-1)}.i--color-brand-2{color:var(--color-brand-2)}.i--color-brand-3{color:var(--color-brand-3)}.i--color-error{color:var(--color-error)}.i--color-success{color:var(--color-success)}.i--color-transparent{color:var(--color-transparent)}.i--size-xs{width:20px;height:20px}.i--size-s{width:24px;height:24px}.i--size-m{width:32px;height:32px}.i--size-l{width:40px;height:40px}.i--size-xl{width:48px;height:48px}:root{--font-family: UniNeue, sans-serif;--font-size: 14px}:root{--blue: #3A55F9;--blue-rgb: 58,85,249;--blue-light: #487CF9;--blue-light-rgb: 72,124,249;--blue-dark: #1F2683;--blue-dark-rgb: 31,38,131;--snow: #F9FAFB;--snow-rgb: 249,250,251;--sky: #AAABB0;--sky-rgb: 170,171,176;--sky-40: rgba(var(--sky-rgb), var(--opacity-s));--sky-24: rgba(var(--sky-rgb), var(--opacity-m));--sky-16: rgba(var(--sky-rgb), var(--opacity-l));--sky-08: rgba(var(--sky-rgb), var(--opacity-xl));--mist: #67676B;--mist-rgb: 103,103,107;--mist-40: rgba(var(--mist-rgb), var(--opacity-s));--mist-24: rgba(var(--mist-rgb), var(--opacity-m));--mist-16: rgba(var(--mist-rgb), var(--opacity-l));--mist-08: rgba(var(--mist-rgb), var(--opacity-xl));--ink: #272727;--ink-rgb: 39,39,39;--ink-80: rgba(var(--ink-rgb), 0.8);--coal: #171717;--coal-rgb: 23,23,23;--jet: #0A0909;--jet-rgb: 10,9,9;--jet-80: rgba(var(--jet-rgb), 0.8);--white: #ffffff;--red: #CB4A5A;--rd-rgb: 203,74,90;--red-light: #E87583;--red-light-rgb: 232,117,13;--green: #47C77C;--gold: #B5A48B}:root{--opacity-s: 0.4;--opacity-m: 0.24;--opacity-l: 0.16;--opacity-xl: 0.08;--base-padding: 8px;--border-radius: 2px}.t{font-family:var(--font-family)}.t--color-basic-1{color:var(--text-color-basic-1)}.t--color-basic-2{color:var(--text-color-basic-2)}.t--color-basic-3{color:var(--text-color-basic-3)}.t--color-basic-4{color:var(--text-color-basic-4)}.t--color-basic-5{color:var(--text-color-basic-5)}.t--color-basic-6{color:var(--text-color-basic-6)}.t--color-light{color:var(--color-light)}.t--color-dark{color:var(--color-dark)}.t--color-contrast{color:var(--color-contrast)}.t--color-alpha-1{color:var(--color-alpha-1)}.t--color-alpha-2{color:var(--color-alpha-2)}.t--color-alpha-3{color:var(--color-alpha-3)}.t--color-alpha-4{color:var(--color-alpha-4)}.t--color-brand-1{color:var(--color-brand-1)}.t--color-brand-2{color:var(--color-brand-2)}.t--color-brand-3{color:var(--color-brand-3)}.t--color-error{color:var(--color-error)}.t--color-success{color:var(--color-success)}.t--color-transparent{color:var(--color-transparent)}.t--size-xs{font-size:12px;line-height:20px}.t--size-s{font-size:14px;line-height:20px}.t--size-m{font-size:18px;line-height:24px}.t--size-l{font-size:24px;line-height:32px}.t--size-xl{font-size:40px;line-height:56px}:root{--font-family: UniNeue, sans-serif;--font-size: 14px}:root{--blue: #3A55F9;--blue-rgb: 58,85,249;--blue-light: #487CF9;--blue-light-rgb: 72,124,249;--blue-dark: #1F2683;--blue-dark-rgb: 31,38,131;--snow: #F9FAFB;--snow-rgb: 249,250,251;--sky: #AAABB0;--sky-rgb: 170,171,176;--sky-40: rgba(var(--sky-rgb), var(--opacity-s));--sky-24: rgba(var(--sky-rgb), var(--opacity-m));--sky-16: rgba(var(--sky-rgb), var(--opacity-l));--sky-08: rgba(var(--sky-rgb), var(--opacity-xl));--mist: #67676B;--mist-rgb: 103,103,107;--mist-40: rgba(var(--mist-rgb), var(--opacity-s));--mist-24: rgba(var(--mist-rgb), var(--opacity-m));--mist-16: rgba(var(--mist-rgb), var(--opacity-l));--mist-08: rgba(var(--mist-rgb), var(--opacity-xl));--ink: #272727;--ink-rgb: 39,39,39;--ink-80: rgba(var(--ink-rgb), 0.8);--coal: #171717;--coal-rgb: 23,23,23;--jet: #0A0909;--jet-rgb: 10,9,9;--jet-80: rgba(var(--jet-rgb), 0.8);--white: #ffffff;--red: #CB4A5A;--rd-rgb: 203,74,90;--red-light: #E87583;--red-light-rgb: 232,117,13;--green: #47C77C;--gold: #B5A48B}:root{--opacity-s: 0.4;--opacity-m: 0.24;--opacity-l: 0.16;--opacity-xl: 0.08;--base-padding: 8px;--border-radius: 2px}.box{border-color:transparent}.box--sdw-basic-1{box-shadow:var(--box-shadow-basic-1)}.box--sdw-brand-1{box-shadow:var(--box-shadow-brand-1)}.box--bc-basic-1{border-color:var(--border-color-basic-1)}.box--bc-basic-2{border-color:var(--border-color-basic-2)}.box--bc-basic-3{border-color:var(--border-color-basic-3)}.box--bc-basic-4{border-color:var(--border-color-basic-4)}.box--bc-basic-5{border-color:var(--border-color-basic-5)}.box--bc-basic-6{border-color:var(--border-color-basic-6)}.box--bc-light{border-color:var(--color-light)}.box--bc-dark{border-color:var(--color-dark)}.box--bc-contrast{border-color:var(--color-contrast)}.box--bc-alpha-1{border-color:var(--color-alpha-1)}.box--bc-alpha-2{border-color:var(--color-alpha-2)}.box--bc-alpha-3{border-color:var(--color-alpha-3)}.box--bc-alpha-4{border-color:var(--color-alpha-4)}.box--bc-brand-1{border-color:var(--color-brand-1)}.box--bc-brand-2{border-color:var(--color-brand-2)}.box--bc-brand-3{border-color:var(--color-brand-3)}.box--bc-error{border-color:var(--color-error)}.box--bc-success{border-color:var(--color-success)}.box--bc-transparent{border-color:var(--color-transparent)}.box--clr-basic-1{background-color:var(--bg-color-basic-1)}.box--clr-basic-2{background-color:var(--bg-color-basic-2)}.box--clr-basic-3{background-color:var(--bg-color-basic-3)}.box--clr-basic-4{background-color:var(--bg-color-basic-4)}.box--clr-basic-5{background-color:var(--bg-color-basic-5)}.box--clr-basic-6{background-color:var(--bg-color-basic-6)}.box--clr-light{background-color:var(--color-light)}.box--clr-dark{background-color:var(--color-dark)}.box--clr-contrast{background-color:var(--color-contrast)}.box--clr-alpha-1{background-color:var(--color-alpha-1)}.box--clr-alpha-2{background-color:var(--color-alpha-2)}.box--clr-alpha-3{background-color:var(--color-alpha-3)}.box--clr-alpha-4{background-color:var(--color-alpha-4)}.box--clr-brand-1{background-color:var(--color-brand-1)}.box--clr-brand-2{background-color:var(--color-brand-2)}.box--clr-brand-3{background-color:var(--color-brand-3)}.box--clr-error{background-color:var(--color-error)}.box--clr-success{background-color:var(--color-success)}.box--clr-transparent{background-color:var(--color-transparent)}:root{--font-family: UniNeue, sans-serif;--font-size: 14px}:root{--blue: #3A55F9;--blue-rgb: 58,85,249;--blue-light: #487CF9;--blue-light-rgb: 72,124,249;--blue-dark: #1F2683;--blue-dark-rgb: 31,38,131;--snow: #F9FAFB;--snow-rgb: 249,250,251;--sky: #AAABB0;--sky-rgb: 170,171,176;--sky-40: rgba(var(--sky-rgb), var(--opacity-s));--sky-24: rgba(var(--sky-rgb), var(--opacity-m));--sky-16: rgba(var(--sky-rgb), var(--opacity-l));--sky-08: rgba(var(--sky-rgb), var(--opacity-xl));--mist: #67676B;--mist-rgb: 103,103,107;--mist-40: rgba(var(--mist-rgb), var(--opacity-s));--mist-24: rgba(var(--mist-rgb), var(--opacity-m));--mist-16: rgba(var(--mist-rgb), var(--opacity-l));--mist-08: rgba(var(--mist-rgb), var(--opacity-xl));--ink: #272727;--ink-rgb: 39,39,39;--ink-80: rgba(var(--ink-rgb), 0.8);--coal: #171717;--coal-rgb: 23,23,23;--jet: #0A0909;--jet-rgb: 10,9,9;--jet-80: rgba(var(--jet-rgb), 0.8);--white: #ffffff;--red: #CB4A5A;--rd-rgb: 203,74,90;--red-light: #E87583;--red-light-rgb: 232,117,13;--green: #47C77C;--gold: #B5A48B}:root{--opacity-s: 0.4;--opacity-m: 0.24;--opacity-l: 0.16;--opacity-xl: 0.08;--base-padding: 8px;--border-radius: 2px}.input{height:24px;font-size:12px;color:var(--text-color-basic-1);border:1px solid var(--color-alpha-2)}.input:hover,.input:focus{background:var(--color-alpha-1)}.input:focus{border-color:var(--color-basic-2)}.input ::-ms-clear{display:none}:root{--font-family: UniNeue, sans-serif;--font-size: 14px}:root{--blue: #3A55F9;--blue-rgb: 58,85,249;--blue-light: #487CF9;--blue-light-rgb: 72,124,249;--blue-dark: #1F2683;--blue-dark-rgb: 31,38,131;--snow: #F9FAFB;--snow-rgb: 249,250,251;--sky: #AAABB0;--sky-rgb: 170,171,176;--sky-40: rgba(var(--sky-rgb), var(--opacity-s));--sky-24: rgba(var(--sky-rgb), var(--opacity-m));--sky-16: rgba(var(--sky-rgb), var(--opacity-l));--sky-08: rgba(var(--sky-rgb), var(--opacity-xl));--mist: #67676B;--mist-rgb: 103,103,107;--mist-40: rgba(var(--mist-rgb), var(--opacity-s));--mist-24: rgba(var(--mist-rgb), var(--opacity-m));--mist-16: rgba(var(--mist-rgb), var(--opacity-l));--mist-08: rgba(var(--mist-rgb), var(--opacity-xl));--ink: #272727;--ink-rgb: 39,39,39;--ink-80: rgba(var(--ink-rgb), 0.8);--coal: #171717;--coal-rgb: 23,23,23;--jet: #0A0909;--jet-rgb: 10,9,9;--jet-80: rgba(var(--jet-rgb), 0.8);--white: #ffffff;--red: #CB4A5A;--rd-rgb: 203,74,90;--red-light: #E87583;--red-light-rgb: 232,117,13;--green: #47C77C;--gold: #B5A48B}:root{--opacity-s: 0.4;--opacity-m: 0.24;--opacity-l: 0.16;--opacity-xl: 0.08;--base-padding: 8px;--border-radius: 2px}.modal--backdrop .modal__backdrop{background:rgba(var(--ink-rgb), 0.64)}:root{--font-family: UniNeue, sans-serif;--font-size: 14px}:root{--blue: #3A55F9;--blue-rgb: 58,85,249;--blue-light: #487CF9;--blue-light-rgb: 72,124,249;--blue-dark: #1F2683;--blue-dark-rgb: 31,38,131;--snow: #F9FAFB;--snow-rgb: 249,250,251;--sky: #AAABB0;--sky-rgb: 170,171,176;--sky-40: rgba(var(--sky-rgb), var(--opacity-s));--sky-24: rgba(var(--sky-rgb), var(--opacity-m));--sky-16: rgba(var(--sky-rgb), var(--opacity-l));--sky-08: rgba(var(--sky-rgb), var(--opacity-xl));--mist: #67676B;--mist-rgb: 103,103,107;--mist-40: rgba(var(--mist-rgb), var(--opacity-s));--mist-24: rgba(var(--mist-rgb), var(--opacity-m));--mist-16: rgba(var(--mist-rgb), var(--opacity-l));--mist-08: rgba(var(--mist-rgb), var(--opacity-xl));--ink: #272727;--ink-rgb: 39,39,39;--ink-80: rgba(var(--ink-rgb), 0.8);--coal: #171717;--coal-rgb: 23,23,23;--jet: #0A0909;--jet-rgb: 10,9,9;--jet-80: rgba(var(--jet-rgb), 0.8);--white: #ffffff;--red: #CB4A5A;--rd-rgb: 203,74,90;--red-light: #E87583;--red-light-rgb: 232,117,13;--green: #47C77C;--gold: #B5A48B}:root{--opacity-s: 0.4;--opacity-m: 0.24;--opacity-l: 0.16;--opacity-xl: 0.08;--base-padding: 8px;--border-radius: 2px}.text-field{--text-field-text-color: var(--text-color-basic-1);--text-field-label-color: var(--text-color-basic-2);--text-field-icon-color: var(--text-color-basic-2);color:var(--text-field-text-color)}.text-field__icon,.text-field__clear{color:var(--text-field-icon-color)}.text-field__label{color:var(--text-color-basic-2)}.text-field--border .text-field__input{border-color:var(--color-alpha-3)}.text-field--error .text-field__input{border-color:var(--color-error) !important}.text-field__input{color:var(--text-field-text-color);border-color:var(--color-alpha-3)}.text-field__input:focus{border-color:var(--color-brand-1)}.text-field__input:hover:not(:focus){border-color:var(--color-alpha-4)}.text-field--filled .text-field__input:hover,.text-field--filled .text-field__input:focus{background-color:var(--color-alpha-1)}.text-field input:-webkit-autofill,.text-field input:-webkit-autofill:hover,.text-field input:-webkit-autofill:focus{background:transparent;color:var(--text-field-text-color);caret-color:var(--text-field-text-color);-webkit-text-fill-color:var(--text-field-text-color)}.text-field ::placeholder{color:var(--text-color-basic-2)}:root{--font-family: UniNeue, sans-serif;--font-size: 14px}:root{--blue: #3A55F9;--blue-rgb: 58,85,249;--blue-light: #487CF9;--blue-light-rgb: 72,124,249;--blue-dark: #1F2683;--blue-dark-rgb: 31,38,131;--snow: #F9FAFB;--snow-rgb: 249,250,251;--sky: #AAABB0;--sky-rgb: 170,171,176;--sky-40: rgba(var(--sky-rgb), var(--opacity-s));--sky-24: rgba(var(--sky-rgb), var(--opacity-m));--sky-16: rgba(var(--sky-rgb), var(--opacity-l));--sky-08: rgba(var(--sky-rgb), var(--opacity-xl));--mist: #67676B;--mist-rgb: 103,103,107;--mist-40: rgba(var(--mist-rgb), var(--opacity-s));--mist-24: rgba(var(--mist-rgb), var(--opacity-m));--mist-16: rgba(var(--mist-rgb), var(--opacity-l));--mist-08: rgba(var(--mist-rgb), var(--opacity-xl));--ink: #272727;--ink-rgb: 39,39,39;--ink-80: rgba(var(--ink-rgb), 0.8);--coal: #171717;--coal-rgb: 23,23,23;--jet: #0A0909;--jet-rgb: 10,9,9;--jet-80: rgba(var(--jet-rgb), 0.8);--white: #ffffff;--red: #CB4A5A;--rd-rgb: 203,74,90;--red-light: #E87583;--red-light-rgb: 232,117,13;--green: #47C77C;--gold: #B5A48B}:root{--opacity-s: 0.4;--opacity-m: 0.24;--opacity-l: 0.16;--opacity-xl: 0.08;--base-padding: 8px;--border-radius: 2px}.range__axis{background:var(--color-alpha-3)}.range__selected{background:var(--color-brand-1)}.range__handle{background:var(--color-brand-2)}:root{--font-family: UniNeue, sans-serif;--font-size: 14px}:root{--blue: #3A55F9;--blue-rgb: 58,85,249;--blue-light: #487CF9;--blue-light-rgb: 72,124,249;--blue-dark: #1F2683;--blue-dark-rgb: 31,38,131;--snow: #F9FAFB;--snow-rgb: 249,250,251;--sky: #AAABB0;--sky-rgb: 170,171,176;--sky-40: rgba(var(--sky-rgb), var(--opacity-s));--sky-24: rgba(var(--sky-rgb), var(--opacity-m));--sky-16: rgba(var(--sky-rgb), var(--opacity-l));--sky-08: rgba(var(--sky-rgb), var(--opacity-xl));--mist: #67676B;--mist-rgb: 103,103,107;--mist-40: rgba(var(--mist-rgb), var(--opacity-s));--mist-24: rgba(var(--mist-rgb), var(--opacity-m));--mist-16: rgba(var(--mist-rgb), var(--opacity-l));--mist-08: rgba(var(--mist-rgb), var(--opacity-xl));--ink: #272727;--ink-rgb: 39,39,39;--ink-80: rgba(var(--ink-rgb), 0.8);--coal: #171717;--coal-rgb: 23,23,23;--jet: #0A0909;--jet-rgb: 10,9,9;--jet-80: rgba(var(--jet-rgb), 0.8);--white: #ffffff;--red: #CB4A5A;--rd-rgb: 203,74,90;--red-light: #E87583;--red-light-rgb: 232,117,13;--green: #47C77C;--gold: #B5A48B}:root{--opacity-s: 0.4;--opacity-m: 0.24;--opacity-l: 0.16;--opacity-xl: 0.08;--base-padding: 8px;--border-radius: 2px}.focusable{outline:none 2px}.focusable__content{outline:none !important}.focusable--outline:focus{outline:solid 2px var(--color-brand-1)}.focusable__content,.focusable:focus .focusable__content:focus{outline:none !important}:root{--blue: #3A55F9;--blue-rgb: 58,85,249;--blue-light: #487CF9;--blue-light-rgb: 72,124,249;--blue-dark: #1F2683;--blue-dark-rgb: 31,38,131;--snow: #F9FAFB;--snow-rgb: 249,250,251;--sky: #AAABB0;--sky-rgb: 170,171,176;--sky-40: rgba(var(--sky-rgb), var(--opacity-s));--sky-24: rgba(var(--sky-rgb), var(--opacity-m));--sky-16: rgba(var(--sky-rgb), var(--opacity-l));--sky-08: rgba(var(--sky-rgb), var(--opacity-xl));--mist: #67676B;--mist-rgb: 103,103,107;--mist-40: rgba(var(--mist-rgb), var(--opacity-s));--mist-24: rgba(var(--mist-rgb), var(--opacity-m));--mist-16: rgba(var(--mist-rgb), var(--opacity-l));--mist-08: rgba(var(--mist-rgb), var(--opacity-xl));--ink: #272727;--ink-rgb: 39,39,39;--ink-80: rgba(var(--ink-rgb), 0.8);--coal: #171717;--coal-rgb: 23,23,23;--jet: #0A0909;--jet-rgb: 10,9,9;--jet-80: rgba(var(--jet-rgb), 0.8);--white: #ffffff;--red: #CB4A5A;--rd-rgb: 203,74,90;--red-light: #E87583;--red-light-rgb: 232,117,13;--green: #47C77C;--gold: #B5A48B}.number{height:24px;border:1px solid transparent}.number__input{outline:none;background:transparent;color:var(--text-color-basic-1)}.number__label{color:var(--text-color-basic-2)}.number--red{border-color:var(--red)}.number--green{border-color:var(--green)}.number--blue{border-color:var(--blue)}:root{--font-family: UniNeue, sans-serif;--font-size: 14px}:root{--blue: #3A55F9;--blue-rgb: 58,85,249;--blue-light: #487CF9;--blue-light-rgb: 72,124,249;--blue-dark: #1F2683;--blue-dark-rgb: 31,38,131;--snow: #F9FAFB;--snow-rgb: 249,250,251;--sky: #AAABB0;--sky-rgb: 170,171,176;--sky-40: rgba(var(--sky-rgb), var(--opacity-s));--sky-24: rgba(var(--sky-rgb), var(--opacity-m));--sky-16: rgba(var(--sky-rgb), var(--opacity-l));--sky-08: rgba(var(--sky-rgb), var(--opacity-xl));--mist: #67676B;--mist-rgb: 103,103,107;--mist-40: rgba(var(--mist-rgb), var(--opacity-s));--mist-24: rgba(var(--mist-rgb), var(--opacity-m));--mist-16: rgba(var(--mist-rgb), var(--opacity-l));--mist-08: rgba(var(--mist-rgb), var(--opacity-xl));--ink: #272727;--ink-rgb: 39,39,39;--ink-80: rgba(var(--ink-rgb), 0.8);--coal: #171717;--coal-rgb: 23,23,23;--jet: #0A0909;--jet-rgb: 10,9,9;--jet-80: rgba(var(--jet-rgb), 0.8);--white: #ffffff;--red: #CB4A5A;--rd-rgb: 203,74,90;--red-light: #E87583;--red-light-rgb: 232,117,13;--green: #47C77C;--gold: #B5A48B}:root{--opacity-s: 0.4;--opacity-m: 0.24;--opacity-l: 0.16;--opacity-xl: 0.08;--base-padding: 8px;--border-radius: 2px}.checkbox__basic{width:16px;height:16px;flex-shrink:0;background-color:var(--checkbox-basic-bg-color);border-color:var(--checkbox-basic-border-color)}.checkbox__basic--checked{background-color:var(--checkbox-basic-active-color);border-color:var(--checkbox-basic-active-color)}.checkbox__tile{width:24px;height:24px;flex-shrink:0;background-color:var(--checkbox-tile-bg-color);border-color:var(--checkbox-tile-border-color)}.checkbox__tile--checked{background-color:var(--checkbox-tile-active-color);border-color:var(--checkbox-tile-active-color)}.checkbox__toggle-track{border-radius:8px;background-color:var(--color-alpha-3);transition:.2s background-color}.checkbox__toggle-btn{background-color:var(--color-basic-2);transition:.15s;transition-property:left,background-color}.checkbox__toggle--checked .checkbox__toggle-btn{background-color:var(--color-brand-2)}.checkbox__toggle--checked .checkbox__toggle-track{background-color:var(--color-brand-1)}:root{--font-family: UniNeue, sans-serif;--font-size: 14px}:root{--blue: #3A55F9;--blue-rgb: 58,85,249;--blue-light: #487CF9;--blue-light-rgb: 72,124,249;--blue-dark: #1F2683;--blue-dark-rgb: 31,38,131;--snow: #F9FAFB;--snow-rgb: 249,250,251;--sky: #AAABB0;--sky-rgb: 170,171,176;--sky-40: rgba(var(--sky-rgb), var(--opacity-s));--sky-24: rgba(var(--sky-rgb), var(--opacity-m));--sky-16: rgba(var(--sky-rgb), var(--opacity-l));--sky-08: rgba(var(--sky-rgb), var(--opacity-xl));--mist: #67676B;--mist-rgb: 103,103,107;--mist-40: rgba(var(--mist-rgb), var(--opacity-s));--mist-24: rgba(var(--mist-rgb), var(--opacity-m));--mist-16: rgba(var(--mist-rgb), var(--opacity-l));--mist-08: rgba(var(--mist-rgb), var(--opacity-xl));--ink: #272727;--ink-rgb: 39,39,39;--ink-80: rgba(var(--ink-rgb), 0.8);--coal: #171717;--coal-rgb: 23,23,23;--jet: #0A0909;--jet-rgb: 10,9,9;--jet-80: rgba(var(--jet-rgb), 0.8);--white: #ffffff;--red: #CB4A5A;--rd-rgb: 203,74,90;--red-light: #E87583;--red-light-rgb: 232,117,13;--green: #47C77C;--gold: #B5A48B}:root{--opacity-s: 0.4;--opacity-m: 0.24;--opacity-l: 0.16;--opacity-xl: 0.08;--base-padding: 8px;--border-radius: 2px}.btn{text-decoration:none;text-align:center;position:relative}.btn__icon{flex:0 0 auto}.btn__icon,.btn__text{pointer-events:none;position:relative}.btn__tab-anchor{position:absolute;left:0;top:0;right:0;bottom:0}.btn__tab-anchor,.btn:focus .btn__tab-anchor{outline:none}:root{--font-family: UniNeue, sans-serif;--font-size: 14px}:root{--blue: #3A55F9;--blue-rgb: 58,85,249;--blue-light: #487CF9;--blue-light-rgb: 72,124,249;--blue-dark: #1F2683;--blue-dark-rgb: 31,38,131;--snow: #F9FAFB;--snow-rgb: 249,250,251;--sky: #AAABB0;--sky-rgb: 170,171,176;--sky-40: rgba(var(--sky-rgb), var(--opacity-s));--sky-24: rgba(var(--sky-rgb), var(--opacity-m));--sky-16: rgba(var(--sky-rgb), var(--opacity-l));--sky-08: rgba(var(--sky-rgb), var(--opacity-xl));--mist: #67676B;--mist-rgb: 103,103,107;--mist-40: rgba(var(--mist-rgb), var(--opacity-s));--mist-24: rgba(var(--mist-rgb), var(--opacity-m));--mist-16: rgba(var(--mist-rgb), var(--opacity-l));--mist-08: rgba(var(--mist-rgb), var(--opacity-xl));--ink: #272727;--ink-rgb: 39,39,39;--ink-80: rgba(var(--ink-rgb), 0.8);--coal: #171717;--coal-rgb: 23,23,23;--jet: #0A0909;--jet-rgb: 10,9,9;--jet-80: rgba(var(--jet-rgb), 0.8);--white: #ffffff;--red: #CB4A5A;--rd-rgb: 203,74,90;--red-light: #E87583;--red-light-rgb: 232,117,13;--green: #47C77C;--gold: #B5A48B}:root{--opacity-s: 0.4;--opacity-m: 0.24;--opacity-l: 0.16;--opacity-xl: 0.08;--base-padding: 8px;--border-radius: 2px}.hr--active-bg>.hr__active-bg,.hr--hvr:hover>.hr__hover-bg{display:block}.hr--ptr{cursor:pointer}.hr--dsb{cursor:default;pointer-events:none;opacity:.5}.hr--active.hr--abc-basic-1,.hr--hvr:hover.hr--hbc-basic-1{border-color:var(--border-color-basic-1)}.hr--active.hr--abc-basic-2,.hr--hvr:hover.hr--hbc-basic-2{border-color:var(--border-color-basic-2)}.hr--active.hr--abc-basic-3,.hr--hvr:hover.hr--hbc-basic-3{border-color:var(--border-color-basic-3)}.hr--active.hr--abc-basic-4,.hr--hvr:hover.hr--hbc-basic-4{border-color:var(--border-color-basic-4)}.hr--active.hr--abc-basic-5,.hr--hvr:hover.hr--hbc-basic-5{border-color:var(--border-color-basic-5)}.hr--active.hr--abc-basic-6,.hr--hvr:hover.hr--hbc-basic-6{border-color:var(--border-color-basic-6)}.hr--active.hr--abc-light,.hr--hvr:hover.hr--hbc-light{border-color:var(--color-light)}.hr--active.hr--abc-dark,.hr--hvr:hover.hr--hbc-dark{border-color:var(--color-dark)}.hr--active.hr--abc-contrast,.hr--hvr:hover.hr--hbc-contrast{border-color:var(--color-contrast)}.hr--active.hr--abc-alpha-1,.hr--hvr:hover.hr--hbc-alpha-1{border-color:var(--color-alpha-1)}.hr--active.hr--abc-alpha-2,.hr--hvr:hover.hr--hbc-alpha-2{border-color:var(--color-alpha-2)}.hr--active.hr--abc-alpha-3,.hr--hvr:hover.hr--hbc-alpha-3{border-color:var(--color-alpha-3)}.hr--active.hr--abc-alpha-4,.hr--hvr:hover.hr--hbc-alpha-4{border-color:var(--color-alpha-4)}.hr--active.hr--abc-brand-1,.hr--hvr:hover.hr--hbc-brand-1{border-color:var(--color-brand-1)}.hr--active.hr--abc-brand-2,.hr--hvr:hover.hr--hbc-brand-2{border-color:var(--color-brand-2)}.hr--active.hr--abc-brand-3,.hr--hvr:hover.hr--hbc-brand-3{border-color:var(--color-brand-3)}.hr--active.hr--abc-error,.hr--hvr:hover.hr--hbc-error{border-color:var(--color-error)}.hr--active.hr--abc-success,.hr--hvr:hover.hr--hbc-success{border-color:var(--color-success)}.hr--active.hr--abc-transparent,.hr--hvr:hover.hr--hbc-transparent{border-color:var(--color-transparent)}.hr--tc-basic-1,.hr--active.hr--atc-basic-1,.hr--hvr:hover.hr--htc-basic-1{color:var(--text-color-basic-1)}.hr--tc-basic-2,.hr--active.hr--atc-basic-2,.hr--hvr:hover.hr--htc-basic-2{color:var(--text-color-basic-2)}.hr--tc-basic-3,.hr--active.hr--atc-basic-3,.hr--hvr:hover.hr--htc-basic-3{color:var(--text-color-basic-3)}.hr--tc-basic-4,.hr--active.hr--atc-basic-4,.hr--hvr:hover.hr--htc-basic-4{color:var(--text-color-basic-4)}.hr--tc-basic-5,.hr--active.hr--atc-basic-5,.hr--hvr:hover.hr--htc-basic-5{color:var(--text-color-basic-5)}.hr--tc-basic-6,.hr--active.hr--atc-basic-6,.hr--hvr:hover.hr--htc-basic-6{color:var(--text-color-basic-6)}.hr--tc-light,.hr--active.hr--atc-light,.hr--hvr:hover.hr--htc-light{color:var(--color-light)}.hr--tc-dark,.hr--active.hr--atc-dark,.hr--hvr:hover.hr--htc-dark{color:var(--color-dark)}.hr--tc-contrast,.hr--active.hr--atc-contrast,.hr--hvr:hover.hr--htc-contrast{color:var(--color-contrast)}.hr--tc-alpha-1,.hr--active.hr--atc-alpha-1,.hr--hvr:hover.hr--htc-alpha-1{color:var(--color-alpha-1)}.hr--tc-alpha-2,.hr--active.hr--atc-alpha-2,.hr--hvr:hover.hr--htc-alpha-2{color:var(--color-alpha-2)}.hr--tc-alpha-3,.hr--active.hr--atc-alpha-3,.hr--hvr:hover.hr--htc-alpha-3{color:var(--color-alpha-3)}.hr--tc-alpha-4,.hr--active.hr--atc-alpha-4,.hr--hvr:hover.hr--htc-alpha-4{color:var(--color-alpha-4)}.hr--tc-brand-1,.hr--active.hr--atc-brand-1,.hr--hvr:hover.hr--htc-brand-1{color:var(--color-brand-1)}.hr--tc-brand-2,.hr--active.hr--atc-brand-2,.hr--hvr:hover.hr--htc-brand-2{color:var(--color-brand-2)}.hr--tc-brand-3,.hr--active.hr--atc-brand-3,.hr--hvr:hover.hr--htc-brand-3{color:var(--color-brand-3)}.hr--tc-error,.hr--active.hr--atc-error,.hr--hvr:hover.hr--htc-error{color:var(--color-error)}.hr--tc-success,.hr--active.hr--atc-success,.hr--hvr:hover.hr--htc-success{color:var(--color-success)}.hr--tc-transparent,.hr--active.hr--atc-transparent,.hr--hvr:hover.hr--htc-transparent{color:var(--color-transparent)}.floating-label{display:block;line-height:1;white-space:nowrap;font-size:14px;pointer-events:none}.floating-label--animation{transition:.15s cubic-bezier(0.4, 0, 0.2, 1)}.floating-label--active{font-size:12px}.base-select__drop{background:var(--bg-color-basic-1);box-shadow:var(--elevation-3);max-height:280px}.base-select__trigger{outline:none;border-color:var(--color-alpha-3)}.base-select__trigger:hover{border-color:var(--color-alpha-4)}.base-select__trigger:focus{border-color:var(--color-brand-1)}.base-select__label,.base-select__icon{color:var(--text-color-basic-2)}.base-select--filled:hover,.base-select--filled.base-select--open{background-color:var(--color-alpha-1)}.base-select--open .base-select__trigger{border-color:var(--color-brand-1)}.divider{--divider-color: var(--color-alpha-3)}.divider:not(.divider--vertical){height:0;width:100%;border-bottom:1px solid var(--divider-color)}.divider--vertical{width:0;height:100%;border-right:1px solid var(--divider-color)}body{font-size:var(--font-size);font-family:var(--font-family);color:var(--text-color-basic-1)}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(57);
            var content = __webpack_require__(386);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(58);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".stats-panel{--fps-line-color: var(--green);user-select:none;position:relative;background:var(--ink-80)}.stats-panel__content{min-width:300px}.stats-panel__trigger{cursor:pointer;pointer-events:auto;min-width:64px}.stats-panel__col{flex:1}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(57);
            var content = __webpack_require__(388);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(58);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".industrial-viewer-root canvas {\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    user-select: none;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 389 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ stats_StatsExtension; });

// EXTERNAL MODULE: /home/kirill/projects/industrial/node_modules/react/index.js
var react = __webpack_require__(2);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: /home/kirill/projects/industrial/node_modules/@hot-loader/react-dom/index.js
var react_dom = __webpack_require__(28);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/mobx/lib/mobx.module.js
var mobx_module = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/wg-fps-stats/lib/model/fpsCounter.js
const createFpsCounter = () => {
  let fps = 0;
  let frames = [];
  let prevTickTime = 0;
  return () => {
    //last frame based fps
    const t = performance.now();
    const lastFrameDt = t - prevTickTime;
    fps = 1000 / lastFrameDt;
    prevTickTime = t; //frames in last second

    frames.push(t);

    while (frames[0] < t - 1000) {
      frames.shift();
    }

    return {
      fps,
      windowedFps: frames.length,
      lastFrameDt
    };
  };
};
// CONCATENATED MODULE: ./node_modules/wg-fps-stats/lib/model/StatsModel.js
var _dec, _dec2, _class, _descriptor, _descriptor2, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }


 //store data for last 10 seconds

const STORED_WINDOW_SIZE = 10000; //update pointsView every 0.5 seconds

const UPDATE_PERIOD = 500;
let markerId = 0;
let StatsModel_StatsModel = (_dec = mobx_module["g" /* observable */].ref, _dec2 = Object(mobx_module["d" /* computed */])({
  keepAlive: true
}), (_class = (_temp = class StatsModel {
  constructor(storedWindowSize = STORED_WINDOW_SIZE, updatePeriod = UPDATE_PERIOD) {
    _initializerDefineProperty(this, "panelIsOpen", _descriptor, this);

    this.fpsCounter = createFpsCounter();
    this.points = [];

    _initializerDefineProperty(this, "throttledTickTime", _descriptor2, this);

    this.storedWindowSize = storedWindowSize;
    this.updatePeriod = updatePeriod;
    this.markers = [];
    this.spans = [];
  }

  dataTick(stats) {
    const timestamp = performance.now();
    const fpsData = this.fpsCounter();
    this.points.push({
      timestamp,
      fpsData,
      stats: Object.assign({}, stats)
    });

    while (this.points[0].timestamp < timestamp - this.storedWindowSize) {
      this.points.shift();
    }

    while (this.spans.length && this.spans[0].endTime < timestamp - this.storedWindowSize) {
      this.spans.shift();
    }

    while (this.markers.length && this.markers[0].time < timestamp - this.storedWindowSize) {
      this.markers.shift();
    }
  }

  viewTick() {
    const timestamp = performance.now();

    if (timestamp - this.throttledTickTime > this.updatePeriod) {
      this.throttledTickTime = timestamp;
    }
  }

  get viewData() {
    Reflect.get(this, 'throttledTickTime');
    return {
      points: this.points.slice(),
      spans: this.spans.slice(),
      markers: this.markers.slice()
    };
  }

  addMarker({
    content,
    color = 'var(--text-color-primary)'
  }) {
    this.markers.push({
      id: markerId++,
      time: performance.now(),
      content,
      color
    });
  }

  startSpan({
    content,
    backgroundColor = 'rgba(var(--bg-color-dark-rgb), .5)'
  }) {
    const startTime = performance.now();
    const span = {
      id: markerId++,
      startTime,
      endTime: Infinity,
      content,
      backgroundColor
    };
    this.spans.push(span);
    return () => {
      span.endTime = performance.now();
    };
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "panelIsOpen", [mobx_module["g" /* observable */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "throttledTickTime", [_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 0;
  }
}), _applyDecoratedDescriptor(_class.prototype, "viewData", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "viewData"), _class.prototype)), _class));

// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-bem/lib/bem-browser.js
const collect = args => {
  let acc = [];
  args.forEach(collectAny);
  return acc;

  function collectAny(x) {
    if (x instanceof Array) {
      x.forEach(collectAny);
    } else if (typeof x === 'object') {
      collectObject(x);
    } else if (x) {
      acc.push(x);
    }
  }

  function collectObject(obj) {
    for (let name in obj) {
      if (obj.hasOwnProperty(name) && obj[name]) {
        acc.push(name);
      }
    }
  }
};

const cn = (...cns) => collect(cns).join(' ');

const easyCaseCn = (a, b) => a ? b ? "".concat(a, " ").concat(b) : a : b ? b : '';

const bem_browser_mods = (base, xs) => collect(xs).map(x => "".concat(base, "--").concat(x)).join(' ');
const bemTemplate = (base, modNames) => easyCaseCn(base, bem_browser_mods(base, modNames));

const frBem = blockName => {
  const block = (...args) => bemTemplate(blockName, args);

  const el = (elName, ...args) => bemTemplate("".concat(blockName, "__").concat(elName), args);

  const cnBlock = (className, ...args) => cn(className, block(args));

  const cnEl = (className, elName, ...args) => cn(className, el(elName, args));

  return {
    blockName,
    mods: bem_browser_mods,
    el,
    block,
    cnBlock,
    cnEl
  };
};

/* harmony default export */ var bem_browser = (frBem);

// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/assertEnvironment.js


if (!react["useState"]) {
    throw new Error("mobx-react-lite requires React with Hooks support");
}
if (!mobx_module["j" /* spy */]) {
    throw new Error("mobx-react-lite requires mobx at least version 4 to be available");
}

// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/utils/reactBatchedUpdates.js


// EXTERNAL MODULE: ./node_modules/mobx-react-lite/es/utils.js
var utils = __webpack_require__(41);

// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/observerBatching.js


var observerBatchingConfiguredSymbol = Object(utils["b" /* getSymbol */])("observerBatching");
function defaultNoopBatch(callback) {
    callback();
}
function observerBatching(reactionScheduler) {
    if (!reactionScheduler) {
        reactionScheduler = defaultNoopBatch;
        if (false) {}
    }
    Object(mobx_module["e" /* configure */])({ reactionScheduler: reactionScheduler });
    Object(utils["a" /* getGlobal */])()[observerBatchingConfiguredSymbol] = true;
}
var isObserverBatched = function () { return !!Object(utils["a" /* getGlobal */])()[observerBatchingConfiguredSymbol]; };

// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/staticRendering.js
var globalIsUsingStaticRendering = false;
function useStaticRendering(enable) {
    globalIsUsingStaticRendering = enable;
}
function isUsingStaticRendering() {
    return globalIsUsingStaticRendering;
}

// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/printDebugValue.js

function printDebugValue(v) {
    return Object(mobx_module["f" /* getDependencyTree */])(v);
}

// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/reactionCleanupTracking.js
function createTrackingData(reaction) {
    var trackingData = {
        cleanAt: Date.now() + CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS,
        reaction: reaction
    };
    return trackingData;
}
/**
 * The minimum time before we'll clean up a Reaction created in a render
 * for a component that hasn't managed to run its effects. This needs to
 * be big enough to ensure that a component won't turn up and have its
 * effects run without being re-rendered.
 */
var CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS = 10000;
/**
 * The frequency with which we'll check for leaked reactions.
 */
var CLEANUP_TIMER_LOOP_MILLIS = 10000;
/**
 * Reactions created by components that have yet to be fully mounted.
 */
var uncommittedReactionRefs = new Set();
/**
 * Latest 'uncommitted reactions' cleanup timer handle.
 */
var reactionCleanupHandle;
function ensureCleanupTimerRunning() {
    if (reactionCleanupHandle === undefined) {
        reactionCleanupHandle = setTimeout(cleanUncommittedReactions, CLEANUP_TIMER_LOOP_MILLIS);
    }
}
function scheduleCleanupOfReactionIfLeaked(ref) {
    uncommittedReactionRefs.add(ref);
    ensureCleanupTimerRunning();
}
function recordReactionAsCommitted(reactionRef) {
    uncommittedReactionRefs.delete(reactionRef);
}
/**
 * Run by the cleanup timer to dispose any outstanding reactions
 */
function cleanUncommittedReactions() {
    reactionCleanupHandle = undefined;
    // Loop through all the candidate leaked reactions; those older
    // than CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS get tidied.
    var now = Date.now();
    uncommittedReactionRefs.forEach(function (ref) {
        var tracking = ref.current;
        if (tracking) {
            if (now >= tracking.cleanAt) {
                // It's time to tidy up this leaked reaction.
                tracking.reaction.dispose();
                ref.current = null;
                uncommittedReactionRefs.delete(ref);
            }
        }
    });
    if (uncommittedReactionRefs.size > 0) {
        // We've just finished a round of cleanups but there are still
        // some leak candidates outstanding.
        ensureCleanupTimerRunning();
    }
}
/* istanbul ignore next */
/**
 * Only to be used by test functions; do not export outside of mobx-react-lite
 */
function forceCleanupTimerToRunNowForTests() {
    // This allows us to control the execution of the cleanup timer
    // to force it to run at awkward times in unit tests.
    if (reactionCleanupHandle) {
        clearTimeout(reactionCleanupHandle);
        cleanUncommittedReactions();
    }
}
/* istanbul ignore next */
function resetCleanupScheduleForTests() {
    if (reactionCleanupHandle) {
        clearTimeout(reactionCleanupHandle);
        reactionCleanupHandle = undefined;
    }
    uncommittedReactionRefs.clear();
}

// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/useQueuedForceUpdate.js

var insideRender = false;
var forceUpdateQueue = [];
function useQueuedForceUpdate(forceUpdate) {
    return function () {
        if (insideRender) {
            forceUpdateQueue.push(forceUpdate);
        }
        else {
            forceUpdate();
        }
    };
}
function useQueuedForceUpdateBlock(callback) {
    // start intercepting force-update calls
    insideRender = true;
    forceUpdateQueue = [];
    try {
        var result = callback();
        // stop intercepting force-update
        insideRender = false;
        // store queue or nothing if it was empty to execute useLayoutEffect only when necessary
        var queue_1 = forceUpdateQueue.length > 0 ? forceUpdateQueue : undefined;
        // run force-update queue in useLayoutEffect
        react_default.a.useLayoutEffect(function () {
            if (queue_1) {
                queue_1.forEach(function (x) { return x(); });
            }
        }, [queue_1]);
        return result;
    }
    finally {
        insideRender = false;
    }
}

// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/useObserver.js







var EMPTY_OBJECT = {};
function observerComponentNameFor(baseComponentName) {
    return "observer" + baseComponentName;
}
function useObserver(fn, baseComponentName, options) {
    if (baseComponentName === void 0) { baseComponentName = "observed"; }
    if (options === void 0) { options = EMPTY_OBJECT; }
    if (isUsingStaticRendering()) {
        return fn();
    }
    var wantedForceUpdateHook = options.useForceUpdate || utils["d" /* useForceUpdate */];
    var forceUpdate = wantedForceUpdateHook();
    var queuedForceUpdate = useQueuedForceUpdate(forceUpdate);
    // StrictMode/ConcurrentMode/Suspense may mean that our component is
    // rendered and abandoned multiple times, so we need to track leaked
    // Reactions.
    var reactionTrackingRef = react_default.a.useRef(null);
    if (!reactionTrackingRef.current) {
        // First render for this component (or first time since a previous
        // reaction from an abandoned render was disposed).
        var newReaction_1 = new mobx_module["a" /* Reaction */](observerComponentNameFor(baseComponentName), function () {
            // Observable has changed, meaning we want to re-render
            // BUT if we're a component that hasn't yet got to the useEffect()
            // stage, we might be a component that _started_ to render, but
            // got dropped, and we don't want to make state changes then.
            // (It triggers warnings in StrictMode, for a start.)
            if (trackingData_1.mounted) {
                // We have reached useEffect(), so we're mounted, and can trigger an update
                queuedForceUpdate();
            }
            else {
                // We haven't yet reached useEffect(), so we'll need to trigger a re-render
                // when (and if) useEffect() arrives.  The easiest way to do that is just to
                // drop our current reaction and allow useEffect() to recreate it.
                newReaction_1.dispose();
                reactionTrackingRef.current = null;
            }
        });
        var trackingData_1 = createTrackingData(newReaction_1);
        reactionTrackingRef.current = trackingData_1;
        scheduleCleanupOfReactionIfLeaked(reactionTrackingRef);
    }
    var reaction = reactionTrackingRef.current.reaction;
    react_default.a.useDebugValue(reaction, printDebugValue);
    react_default.a.useEffect(function () {
        // Called on first mount only
        recordReactionAsCommitted(reactionTrackingRef);
        if (reactionTrackingRef.current) {
            // Great. We've already got our reaction from our render;
            // all we need to do is to record that it's now mounted,
            // to allow future observable changes to trigger re-renders
            reactionTrackingRef.current.mounted = true;
        }
        else {
            // The reaction we set up in our render has been disposed.
            // This is either due to bad timings of renderings, e.g. our
            // component was paused for a _very_ long time, and our
            // reaction got cleaned up, or we got a observable change
            // between render and useEffect
            // Re-create the reaction
            reactionTrackingRef.current = {
                reaction: new mobx_module["a" /* Reaction */](observerComponentNameFor(baseComponentName), function () {
                    // We've definitely already been mounted at this point
                    queuedForceUpdate();
                }),
                cleanAt: Infinity
            };
            queuedForceUpdate();
        }
        return function () {
            reactionTrackingRef.current.reaction.dispose();
            reactionTrackingRef.current = null;
        };
    }, []);
    // delay all force-update calls after rendering of this component
    return useQueuedForceUpdateBlock(function () {
        // render the original component, but have the
        // reaction track the observables, so that rendering
        // can be invalidated (see above) once a dependency changes
        var rendering;
        var exception;
        reaction.track(function () {
            try {
                rendering = fn();
            }
            catch (e) {
                exception = e;
            }
        });
        if (exception) {
            throw exception; // re-throw any exceptions caught during rendering
        }
        return rendering;
    });
}

// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/observer.js
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



// n.b. base case is not used for actual typings or exported in the typing files
function observer(baseComponent, options) {
    // The working of observer is explained step by step in this talk: https://www.youtube.com/watch?v=cPF4iBedoF0&feature=youtu.be&t=1307
    if (isUsingStaticRendering()) {
        return baseComponent;
    }
    var realOptions = __assign({ forwardRef: false }, options);
    var baseComponentName = baseComponent.displayName || baseComponent.name;
    var wrappedComponent = function (props, ref) {
        return useObserver(function () { return baseComponent(props, ref); }, baseComponentName);
    };
    wrappedComponent.displayName = baseComponentName;
    // memo; we are not interested in deep updates
    // in props; we assume that if deep objects are changed,
    // this is in observables, which would have been tracked anyway
    var memoComponent;
    if (realOptions.forwardRef) {
        // we have to use forwardRef here because:
        // 1. it cannot go before memo, only after it
        // 2. forwardRef converts the function into an actual component, so we can't let the baseComponent do it
        //    since it wouldn't be a callable function anymore
        memoComponent = Object(react["memo"])(Object(react["forwardRef"])(wrappedComponent));
    }
    else {
        memoComponent = Object(react["memo"])(wrappedComponent);
    }
    copyStaticProperties(baseComponent, memoComponent);
    memoComponent.displayName = baseComponentName;
    return memoComponent;
}
// based on https://github.com/mridgway/hoist-non-react-statics/blob/master/src/index.js
var hoistBlackList = {
    $$typeof: true,
    render: true,
    compare: true,
    type: true
};
function copyStaticProperties(base, target) {
    Object.keys(base).forEach(function (key) {
        if (!hoistBlackList[key]) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(base, key));
        }
    });
}

// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/ObserverComponent.js

function ObserverComponent(_a) {
    var children = _a.children, render = _a.render;
    var component = children || render;
    if (typeof component !== "function") {
        return null;
    }
    return useObserver(component);
}
ObserverComponent.propTypes = {
    children: ObserverPropsCheck,
    render: ObserverPropsCheck
};
ObserverComponent.displayName = "Observer";

function ObserverPropsCheck(props, key, componentName, location, propFullName) {
    var extraKey = key === "children" ? "render" : "children";
    var hasProp = typeof props[key] === "function";
    var hasExtraProp = typeof props[extraKey] === "function";
    if (hasProp && hasExtraProp) {
        return new Error("MobX Observer: Do not use children and render in the same time in`" + componentName);
    }
    if (hasProp || hasExtraProp) {
        return null;
    }
    return new Error("Invalid prop `" +
        propFullName +
        "` of type `" +
        typeof props[key] +
        "` supplied to" +
        " `" +
        componentName +
        "`, expected `function`.");
}

// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/useAsObservableSource.js
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};



function useAsObservableSourceInternal(current, usedByLocalStore) {
    var culprit = usedByLocalStore ? "useLocalStore" : "useAsObservableSource";
    if (false) { var _a, initialSource; }
    if (usedByLocalStore && current === undefined) {
        return undefined;
    }
    if (false) {}
    var _b = __read(react_default.a.useState(function () { return Object(mobx_module["g" /* observable */])(current, {}, { deep: false }); }), 1), res = _b[0];
    if (false) {}
    Object(mobx_module["i" /* runInAction */])(function () {
        Object.assign(res, current);
    });
    return res;
}
function useAsObservableSource(current) {
    return useAsObservableSourceInternal(current, false);
}

// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/useLocalStore.js




function useLocalStore(initializer, current) {
    var source = useAsObservableSourceInternal(current, true);
    return react_default.a.useState(function () {
        var local = Object(mobx_module["g" /* observable */])(initializer(source));
        if (Object(utils["c" /* isPlainObject */])(local)) {
            Object(mobx_module["i" /* runInAction */])(function () {
                Object.keys(local).forEach(function (key) {
                    var value = local[key];
                    if (typeof value === "function") {
                        // @ts-ignore No idea why ts2536 is popping out here
                        local[key] = wrapInTransaction(value, local);
                    }
                });
            });
        }
        return local;
    })[0];
}
// tslint:disable-next-line: ban-types
function wrapInTransaction(fn, context) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return Object(mobx_module["k" /* transaction */])(function () { return fn.apply(context, args); });
    };
}

// CONCATENATED MODULE: ./node_modules/mobx-react-lite/es/index.js



observerBatching(react_dom["unstable_batchedUpdates"]);










// EXTERNAL MODULE: /home/kirill/projects/industrial/node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(12);

// EXTERNAL MODULE: /home/kirill/projects/industrial/node_modules/prop-types/index.js
var prop_types = __webpack_require__(4);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: /home/kirill/projects/industrial/node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__(148);

// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/utils/mods.js

const mod = (prefix, value) => {
  return value ? "".concat(value).split(' ').map(val => "".concat(prefix, "-").concat(val)) : null;
};
// EXTERNAL MODULE: /home/kirill/projects/industrial/node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(33);

// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/atoms/Icon/icons/index.js


const icons = __webpack_require__(286);

const icons_acc = {};
const iconNames = ['arrow-down', 'arrow-double', 'angle-down', 'angle-left', 'angle-right', 'angle-up', 'back', 'camera', 'caret-down', 'caret-right', 'check', 'close', 'code', 'delete', 'duplicate', 'edit', 'entry', 'expand', 'eye', 'folder', 'folder-file', 'folder-in', 'folder-plus', 'general', 'grid', 'hidden', 'import', 'info', 'link', 'list', 'loader', 'locked', 'logout', 'menu', 'mesh', 'message', 'minimize', 'minus', 'more', 'more-v', 'plus', 'reload', 'search', 'settings', 'share', 'upload', 'user', 'zip'];
const addContext = ctx => {
  ctx.keys().forEach(key => {
    const icon = ctx(key);
    const name = key.slice(2, -4);
    const iconContent = icon.__esModule ? icon.default : icon;

    if (false) {}

    icons_acc[name] = iconContent;
  });
};
addContext(icons);
/* harmony default export */ var Icon_icons = (icons_acc);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/atoms/Icon/Icon.js



function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const {
  cnBlock
} = bem_browser('i');

const Icon = (_ref) => {
  let {
    className,
    icon,
    mods,
    size,
    keepFill,
    color,
    tag: Tag = 'span'
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, ["className", "icon", "mods", "size", "keepFill", "color", "tag"]);

  const i = Icon_icons[icon] || icon;
  return react_default.a.createElement(Tag, Object.assign({
    className: cnBlock(className, mods, mod('color', color), mod('size', size), {
      keepFill
    }),
    dangerouslySetInnerHTML: {
      __html: i
    }
  }, props));
};

Icon.propTypes = {
  icon: prop_types_default.a.string,
  keepFill: prop_types_default.a.bool,
  tag: prop_types_default.a.oneOfType([prop_types_default.a.node, prop_types_default.a.elementType])
};
Icon.defaultProps = {
  keepFill: false,
  size: 's',
  tag: 'span'
};

/* harmony default export */ var Icon_Icon = (Object(react["memo"])(Icon));
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/atoms/Icon/index.js



/* harmony default export */ var atoms_Icon = (Icon_Icon);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/atoms/Text/Text.js



function Text_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const {
  cnBlock: Text_cnBlock
} = bem_browser('t');

const Text = (_ref) => {
  let {
    className,
    mods,
    align,
    caps,
    color,
    italic,
    nowrap,
    size,
    tag: Tag = 'span',
    truncate,
    weight
  } = _ref,
      props = Text_objectWithoutPropertiesLoose(_ref, ["className", "mods", "align", "caps", "color", "italic", "nowrap", "size", "tag", "truncate", "weight"]);

  return react_default.a.createElement(Tag, Object.assign({
    className: Text_cnBlock(className, mods, mod('align', align), mod('color', color), mod('size', size), mod('weight', weight), {
      caps,
      italic,
      nowrap,
      truncate
    })
  }, props));
};

Text.propTypes = {
  align: prop_types_default.a.oneOf(['left', 'center', 'right']),
  caps: prop_types_default.a.bool,
  italic: prop_types_default.a.bool,
  nowrap: prop_types_default.a.bool,
  tag: prop_types_default.a.oneOfType([prop_types_default.a.node, prop_types_default.a.elementType]),
  truncate: prop_types_default.a.bool,
  weight: prop_types_default.a.oneOf(['bold', 'lighter', 300, 400, 500, 700])
};

/* harmony default export */ var Text_Text = (Object(react["memo"])(Text));
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/atoms/Text/index.js

/* harmony default export */ var atoms_Text = (Text_Text);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/atoms/Input/Input.js



function Input_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const {
  cnBlock: Input_cnBlock
} = bem_browser('input');

const Input = (_ref) => {
  let {
    className,
    forwardedRef,
    mods
  } = _ref,
      restProps = Input_objectWithoutPropertiesLoose(_ref, ["className", "forwardedRef", "mods"]);

  const inputRef = Object(react["useRef"])(null);

  const focus = () => {
    var _inputRef$current;

    return (_inputRef$current = inputRef.current) == null ? void 0 : _inputRef$current.focus();
  };

  const blur = () => {
    var _inputRef$current2;

    return (_inputRef$current2 = inputRef.current) == null ? void 0 : _inputRef$current2.blur();
  };

  const select = () => {
    var _inputRef$current3;

    return (_inputRef$current3 = inputRef.current) == null ? void 0 : _inputRef$current3.select();
  };

  Object(react["useImperativeHandle"])(forwardedRef, () => ({
    focus,
    blur,
    select
  }));
  return react_default.a.createElement("input", Object.assign({}, restProps, {
    ref: inputRef,
    className: Input_cnBlock(className, mods)
  }));
};

Input.propTypes = {
  value: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]),
  type: prop_types_default.a.string
};
/* harmony default export */ var Input_Input = (Input);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/atoms/Input/index.js

/* harmony default export */ var atoms_Input = (Input_Input);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/atoms/Box/Box.js



function Box_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const {
  cnBlock: Box_cnBlock
} = bem_browser('box');
const Box = (_ref) => {
  let {
    className,
    mods,
    border,
    borderColor,
    borderWidth,
    alignContent,
    padding,
    margin,
    align,
    elevation,
    justify,
    direction,
    wrap,
    color,
    shadow,
    display,
    size,
    forwardedRef,
    tag: Tag = 'div'
  } = _ref,
      restProps = Box_objectWithoutPropertiesLoose(_ref, ["className", "mods", "border", "borderColor", "borderWidth", "alignContent", "padding", "margin", "align", "elevation", "justify", "direction", "wrap", "color", "shadow", "display", "size", "forwardedRef", "tag"]);

  return react_default.a.createElement(Tag, Object.assign({
    ref: forwardedRef,
    className: Box_cnBlock(className, mods, mod('brd', border), mod('bc', borderColor), mod('bw', borderWidth), mod('clr', color), mod('dsp', display), mod('elv', elevation), mod('sdw', shadow), mod('wrap', wrap), mod('alg', align), mod('jf', justify), mod('dir', direction), mod('mrg', margin), mod('sz', size), mod('pad', padding), alignContent)
  }, restProps));
};
Box.propTypes = {
  align: prop_types_default.a.oneOf(['center', 'start', 'end', 'stretch', 'baseline']),
  alignContent: prop_types_default.a.string,
  borderWidth: prop_types_default.a.oneOf([1, 2]),
  direction: prop_types_default.a.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  display: prop_types_default.a.oneOf(['flex', 'block', 'inline', 'inline-block']),
  elevation: prop_types_default.a.oneOf([1, 2, 3, 4, 5]),
  justify: prop_types_default.a.oneOf(['center', 'start', 'end', 'between', 'around']),
  margin: prop_types_default.a.string,
  padding: prop_types_default.a.string,
  size: prop_types_default.a.string,
  shadow: prop_types_default.a.oneOf(['basic-1', 'brand-1']),
  tag: prop_types_default.a.oneOfType([prop_types_default.a.node, prop_types_default.a.elementType]),
  wrap: prop_types_default.a.oneOf(['no-wrap', 'wrap', 'wrap-reverse'])
};

/* harmony default export */ var Box_Box = (Object(react["memo"])(Box));
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/atoms/Box/index.js

/* harmony default export */ var atoms_Box = (Box_Box);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/atoms/AbsoluteBox/AbsoluteBox.js



function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function AbsoluteBox_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const AbsoluteBox = (_ref) => {
  let {
    top,
    right,
    bottom,
    left,
    style,
    position = 'absolute',
    zIndex
  } = _ref,
      restProps = AbsoluteBox_objectWithoutPropertiesLoose(_ref, ["top", "right", "bottom", "left", "style", "position", "zIndex"]);

  return react_default.a.createElement(atoms_Box, Object.assign({
    style: _extends({
      top,
      right,
      bottom,
      left,
      position,
      zIndex
    }, style)
  }, restProps));
};

/* harmony default export */ var AbsoluteBox_AbsoluteBox = (AbsoluteBox);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/atoms/AbsoluteBox/index.js

/* harmony default export */ var atoms_AbsoluteBox = (AbsoluteBox_AbsoluteBox);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/atoms/index.js






// EXTERNAL MODULE: /home/kirill/projects/industrial/node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(40);

// EXTERNAL MODULE: /home/kirill/projects/industrial/node_modules/lodash/noop.js
var noop = __webpack_require__(21);
var noop_default = /*#__PURE__*/__webpack_require__.n(noop);

// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function getBoundingClientRect(element) {
  var rect = element.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    x: rect.left,
    y: rect.top
  };
}
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js


function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}


// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js




function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js



function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js

function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js






 // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.

function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement);
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
 // Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/@popperjs/core/lib/dom-utils/getParentNode.js



function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js




function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js




/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/@popperjs/core/lib/dom-utils/isTableElement.js

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js







function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  var isIE = navigator.userAgent.indexOf('Trident') !== -1;

  if (isIE && isHTMLElement(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = getComputedStyle(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = getParentNode(element);

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/@popperjs/core/lib/enums.js
var enums_top = 'top';
var enums_bottom = 'bottom';
var enums_right = 'right';
var enums_left = 'left';
var auto = 'auto';
var basePlacements = [enums_top, enums_bottom, enums_right, enums_left];
var start = 'start';
var end = 'end';
var enums_clippingParents = 'clippingParents';
var viewport = 'viewport';
var enums_popper = 'popper';
var enums_reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var enums_placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/@popperjs/core/lib/utils/orderModifiers.js
 // source: https://stackoverflow.com/questions/49875255

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/@popperjs/core/lib/utils/debounce.js
function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/@popperjs/core/lib/utils/mergeByName.js
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/@popperjs/core/lib/createPopper.js














var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(options) {
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if (false) { var _getComputedStyle, marginTop, marginRight, marginBottom, marginLeft, flipModifier, modifiers; }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if (false) {}

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (false) {}

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      if (false) {}

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}
var createPopper_createPopper = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules


// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/@popperjs/core/lib/modifiers/eventListeners.js
 // eslint-disable-next-line import/no-unused-modules

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var eventListeners = ({
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
});
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/@popperjs/core/lib/utils/getBasePlacement.js

function getBasePlacement(placement) {
  return placement.split('-')[0];
}
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation(placement) {
  return placement.split('-')[1];
}
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/@popperjs/core/lib/utils/computeOffsets.js




function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case enums_top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case enums_bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case enums_right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case enums_left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;

      default:
    }
  }

  return offsets;
}
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/@popperjs/core/lib/modifiers/popperOffsets.js


function popperOffsets_popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_popperOffsets = ({
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets_popperOffsets,
  data: {}
});
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/@popperjs/core/lib/utils/math.js
var math_max = Math.max;
var math_min = Math.min;
var round = Math.round;
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/@popperjs/core/lib/modifiers/computeStyles.js






 // eslint-disable-next-line import/no-unused-modules

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(round(x * dpr) / dpr) || 0,
    y: round(round(y * dpr) / dpr) || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets;

  var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets,
      _ref3$x = _ref3.x,
      x = _ref3$x === void 0 ? 0 : _ref3$x,
      _ref3$y = _ref3.y,
      y = _ref3$y === void 0 ? 0 : _ref3$y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = enums_left;
  var sideY = enums_top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);

      if (getComputedStyle(offsetParent).position !== 'static') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === enums_top) {
      sideY = enums_bottom; // $FlowFixMe[prop-missing]

      y -= offsetParent[heightProp] - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === enums_left) {
      sideX = enums_right; // $FlowFixMe[prop-missing]

      x -= offsetParent[widthProp] - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref4) {
  var state = _ref4.state,
      options = _ref4.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  if (false) { var transitionProperty; }

  var commonStyles = {
    placement: getBasePlacement(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_computeStyles = ({
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
});
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/@popperjs/core/lib/modifiers/applyStyles.js

 // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function applyStyles_effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_applyStyles = ({
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: applyStyles_effect,
  requires: ['computeStyles']
});
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/@popperjs/core/lib/modifiers/offset.js


function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [enums_left, enums_top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [enums_left, enums_right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset_offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = enums_placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_offset = ({
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset_offset
});
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var getOppositeVariationPlacement_hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return getOppositeVariationPlacement_hash[matched];
  });
}
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js



function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js




 // Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = math_max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = math_max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle(body || html).direction === 'rtl') {
    x += math_max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/@popperjs/core/lib/dom-utils/contains.js

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js















function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = math_max(rect.top, accRect.top);
    accRect.right = math_min(rect.right, accRect.right);
    accRect.bottom = math_min(rect.bottom, accRect.bottom);
    accRect.left = math_max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/@popperjs/core/lib/utils/mergePaddingObject.js

function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/@popperjs/core/lib/utils/detectOverflow.js








 // eslint-disable-next-line import/no-unused-modules

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? enums_clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? enums_popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === enums_popper ? enums_reference : enums_popper;
  var referenceElement = state.elements.reference;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(referenceElement);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === enums_popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === enums_popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [enums_right, enums_bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [enums_top, enums_bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js




function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? enums_placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements;
  var allowedPlacements = placements.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements;

    if (false) {}
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/@popperjs/core/lib/modifiers/flip.js






 // eslint-disable-next-line import/no-unused-modules

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip_flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [enums_top, enums_bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? enums_right : enums_left : isStartVariation ? enums_bottom : enums_top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_flip = ({
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip_flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
});
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/@popperjs/core/lib/utils/getAltAxis.js
function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/@popperjs/core/lib/utils/within.js

function within(min, value, max) {
  return math_max(min, math_min(value, max));
}
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/@popperjs/core/lib/modifiers/preventOverflow.js












function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis || checkAltAxis) {
    var mainSide = mainAxis === 'y' ? enums_top : enums_left;
    var altSide = mainAxis === 'y' ? enums_bottom : enums_right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = popperOffsets[mainAxis] + overflow[mainSide];
    var max = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;

    if (checkMainAxis) {
      var preventedOffset = within(tether ? math_min(min, tetherMin) : min, offset, tether ? math_max(max, tetherMax) : max);
      popperOffsets[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset;
    }

    if (checkAltAxis) {
      var _mainSide = mainAxis === 'x' ? enums_top : enums_left;

      var _altSide = mainAxis === 'x' ? enums_bottom : enums_right;

      var _offset = popperOffsets[altAxis];

      var _min = _offset + overflow[_mainSide];

      var _max = _offset - overflow[_altSide];

      var _preventedOffset = within(tether ? math_min(_min, tetherMin) : _min, _offset, tether ? math_max(_max, tetherMax) : _max);

      popperOffsets[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_preventOverflow = ({
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
});
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/@popperjs/core/lib/modifiers/arrow.js









 // eslint-disable-next-line import/no-unused-modules

var arrow_toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [enums_left, enums_right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = arrow_toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? enums_top : enums_left;
  var maxProp = axis === 'y' ? enums_bottom : enums_right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function arrow_effect(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (false) {}

  if (!contains(state.elements.popper, arrowElement)) {
    if (false) {}

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_arrow = ({
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: arrow_effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
});
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/@popperjs/core/lib/modifiers/hide.js



function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [enums_top, enums_right, enums_bottom, enums_left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_hide = ({
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
});
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/@popperjs/core/lib/popper.js










var popper_defaultModifiers = [eventListeners, modifiers_popperOffsets, modifiers_computeStyles, modifiers_applyStyles, modifiers_offset, modifiers_flip, modifiers_preventOverflow, modifiers_arrow, modifiers_hide];
var popper_createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: popper_defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules


// EXTERNAL MODULE: /home/kirill/projects/industrial/node_modules/react-fast-compare/index.js
var react_fast_compare = __webpack_require__(245);
var react_fast_compare_default = /*#__PURE__*/__webpack_require__.n(react_fast_compare);

// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/react-popper/lib/esm/utils.js


/**
 * Takes an argument and if it's an array, returns the first item in the array,
 * otherwise returns the argument. Used for Preact compatibility.
 */
var unwrapArray = function unwrapArray(arg) {
  return Array.isArray(arg) ? arg[0] : arg;
};
/**
 * Takes a maybe-undefined function and arbitrary args and invokes the function
 * only if it is defined.
 */

var safeInvoke = function safeInvoke(fn) {
  if (typeof fn === 'function') {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return fn.apply(void 0, args);
  }
};
/**
 * Sets a ref using either a ref callback or a ref object
 */

var setRef = function setRef(ref, node) {
  // if its a function call it
  if (typeof ref === 'function') {
    return safeInvoke(ref, node);
  } // otherwise we should treat it as a ref object
  else if (ref != null) {
      ref.current = node;
    }
};
/**
 * Simple ponyfill for Object.fromEntries
 */

var fromEntries = function fromEntries(entries) {
  return entries.reduce(function (acc, _ref) {
    var key = _ref[0],
        value = _ref[1];
    acc[key] = value;
    return acc;
  }, {});
};
/**
 * Small wrapper around `useLayoutEffect` to get rid of the warning on SSR envs
 */

var useIsomorphicLayoutEffect = typeof window !== 'undefined' && window.document && window.document.createElement ? react["useLayoutEffect"] : react["useEffect"];
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/react-popper/lib/esm/usePopper.js




var EMPTY_MODIFIERS = [];
var usePopper_usePopper = function usePopper(referenceElement, popperElement, options) {
  if (options === void 0) {
    options = {};
  }

  var prevOptions = react["useRef"](null);
  var optionsWithDefaults = {
    onFirstUpdate: options.onFirstUpdate,
    placement: options.placement || 'bottom',
    strategy: options.strategy || 'absolute',
    modifiers: options.modifiers || EMPTY_MODIFIERS
  };

  var _React$useState = react["useState"]({
    styles: {
      popper: {
        position: optionsWithDefaults.strategy,
        left: '0',
        top: '0'
      },
      arrow: {
        position: 'absolute'
      }
    },
    attributes: {}
  }),
      state = _React$useState[0],
      setState = _React$useState[1];

  var updateStateModifier = react["useMemo"](function () {
    return {
      name: 'updateState',
      enabled: true,
      phase: 'write',
      fn: function fn(_ref) {
        var state = _ref.state;
        var elements = Object.keys(state.elements);
        setState({
          styles: fromEntries(elements.map(function (element) {
            return [element, state.styles[element] || {}];
          })),
          attributes: fromEntries(elements.map(function (element) {
            return [element, state.attributes[element]];
          }))
        });
      },
      requires: ['computeStyles']
    };
  }, []);
  var popperOptions = react["useMemo"](function () {
    var newOptions = {
      onFirstUpdate: optionsWithDefaults.onFirstUpdate,
      placement: optionsWithDefaults.placement,
      strategy: optionsWithDefaults.strategy,
      modifiers: [].concat(optionsWithDefaults.modifiers, [updateStateModifier, {
        name: 'applyStyles',
        enabled: false
      }])
    };

    if (react_fast_compare_default()(prevOptions.current, newOptions)) {
      return prevOptions.current || newOptions;
    } else {
      prevOptions.current = newOptions;
      return newOptions;
    }
  }, [optionsWithDefaults.onFirstUpdate, optionsWithDefaults.placement, optionsWithDefaults.strategy, optionsWithDefaults.modifiers, updateStateModifier]);
  var popperInstanceRef = react["useRef"]();
  useIsomorphicLayoutEffect(function () {
    if (popperInstanceRef.current) {
      popperInstanceRef.current.setOptions(popperOptions);
    }
  }, [popperOptions]);
  useIsomorphicLayoutEffect(function () {
    if (referenceElement == null || popperElement == null) {
      return;
    }

    var createPopper = options.createPopper || popper_createPopper;
    var popperInstance = createPopper(referenceElement, popperElement, popperOptions);
    popperInstanceRef.current = popperInstance;
    return function () {
      popperInstance.destroy();
      popperInstanceRef.current = null;
    };
  }, [referenceElement, popperElement, options.createPopper]);
  return {
    state: popperInstanceRef.current ? popperInstanceRef.current.state : null,
    styles: state.styles,
    attributes: state.attributes,
    update: popperInstanceRef.current ? popperInstanceRef.current.update : null,
    forceUpdate: popperInstanceRef.current ? popperInstanceRef.current.forceUpdate : null
  };
};
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/themes/Theme/context.js

const {
  Consumer,
  Provider
} = Object(react["createContext"])({});

// EXTERNAL MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/themes/Theme/index.sass
var Theme = __webpack_require__(340);

// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/themes/Theme/Theme.js



function Theme_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const {
  cnBlock: Theme_cnBlock
} = bem_browser('theme');

const Theme_Theme = (_ref) => {
  let {
    className,
    mods,
    theme,
    children
  } = _ref,
      restProps = Theme_objectWithoutPropertiesLoose(_ref, ["className", "mods", "theme", "children"]);

  return react_default.a.createElement(Provider, {
    value: {
      theme,
      className
    }
  }, react_default.a.createElement(atoms_Box, Object.assign({
    className: Theme_cnBlock(className, mods, theme)
  }, restProps), children));
};

const ThemeConsumer = (_ref2) => {
  let {
    children,
    className,
    mods
  } = _ref2,
      restProps = Theme_objectWithoutPropertiesLoose(_ref2, ["children", "className", "mods"]);

  return react_default.a.createElement(Consumer, null, ({
    theme,
    className: contextClassName
  }) => react_default.a.createElement(atoms_Box, Object.assign({
    className: Theme_cnBlock([className, contextClassName], mods, theme)
  }, restProps), children));
};


/* harmony default export */ var themes_Theme_Theme = (Theme_Theme);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/themes/Theme/index.js


/* harmony default export */ var themes_Theme = (themes_Theme_Theme);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/ThemedPortal/index.js


function ThemedPortal_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





/* global document */
const ThemedPortal = (_ref) => {
  let {
    container,
    children
  } = _ref,
      restProps = ThemedPortal_objectWithoutPropertiesLoose(_ref, ["container", "children"]);

  return Object(react_dom["createPortal"])(react_default.a.createElement(ThemeConsumer, restProps, children), container || document.body);
};

ThemedPortal.propTypes = {
  children: prop_types_default.a.any
};
/* harmony default export */ var molecules_ThemedPortal = (Object(react["memo"])(ThemedPortal));
// EXTERNAL MODULE: /home/kirill/projects/industrial/node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(342);

// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/utils/EventBus.js


// @ts-nocheck
class EventBus {
  constructor() {
    this.fire = (...args) => {
      for (const listener of this.listeners) {
        listener(...args);
      }
    };

    this.listeners = new Set();
  }

  listen(fn) {
    this.listeners.add(fn);
    return () => {
      this.listeners.delete(fn);
    };
  }

  listenOnce(fn) {
    const ignore = this.listen((...args) => {
      fn(...args);
      ignore();
    });
    return ignore;
  }

  willFire() {
    return new Promise(resolve => this.listenOnce(resolve));
  }

}
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/ClickOutside/context.js

const ClickOutsideContext = Object(react["createContext"])({});
/* harmony default export */ var ClickOutside_context = (ClickOutsideContext);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/ClickOutside/ClickOutsideProvider.js





const ClickOutsideProvider = props => {
  const eventEmitter = Object(react["useRef"])(new EventBus());

  const handlePointerDown = e => {
    eventEmitter.current.fire(e);
  };

  return react_default.a.createElement(ClickOutside_context.Provider, {
    value: eventEmitter.current
  }, eventEmitter.current && react_default.a.createElement("div", Object.assign({}, props, {
    onMouseDown: handlePointerDown,
    onTouchStart: handlePointerDown
  })));
};

/* harmony default export */ var ClickOutside_ClickOutsideProvider = (ClickOutsideProvider);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/ClickOutside/ClickOutsideConsumer.js



function ClickOutsideConsumer_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ClickOutsideConsumer = (_ref) => {
  let {
    onClickOutside,
    onMouseDown,
    onTouchStart
  } = _ref,
      restProps = ClickOutsideConsumer_objectWithoutPropertiesLoose(_ref, ["onClickOutside", "onMouseDown", "onTouchStart"]);

  const eventEmitter = Object(react["useContext"])(ClickOutside_context);
  const isLocal = Object(react["useRef"])(false);

  const handleClickOutside = e => {
    if (onClickOutside && !isLocal.current) {
      onClickOutside(e);
    } else {
      isLocal.current = false;
    }
  };

  const handlePointerDown = e => {
    isLocal.current = true;

    if (onMouseDown) {
      onMouseDown(e);
    }

    if (onTouchStart) {
      onTouchStart(e);
    }
  };

  Object(react["useEffect"])(() => {
    if (eventEmitter && eventEmitter.listen) {
      return eventEmitter.listen(handleClickOutside);
    }

    console.warn('no ClickOutside context. Wrap the root component in a ClickOutsideProvider');
  }, [onClickOutside]);
  return react_default.a.createElement(atoms_Box, Object.assign({}, restProps, {
    onMouseDown: handlePointerDown,
    onTouchStart: handlePointerDown
  }));
};

/* harmony default export */ var ClickOutside_ClickOutsideConsumer = (Object(react["memo"])(ClickOutsideConsumer));
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/ClickOutside/index.js



// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/utils/tests.js
const DATA_TEST_ID = 'data-test-id';
const dataTestId = (id, element) => {
  if (!id) {
    return;
  }

  if (!element) {
    return id;
  }

  return "".concat(id, ":").concat(element);
};
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/DropDown/DropDown.js





function DropDown_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }








const {
  cnBlock: DropDown_cnBlock
} = bem_browser('drop-down');
const DropDown = (_ref) => {
  let {
    children,
    className,
    isOpen,
    mods,
    dropClassName,
    fullWidth,
    placement = 'bottom-start',
    onFirstUpdate,
    flip = false,
    offset,
    portal = true,
    strategy = 'absolute',
    modifiers: modifiersProps = [],
    renderTrigger,
    onClickOutside = noop_default.a,
    [DATA_TEST_ID]: testId
  } = _ref,
      restProps = DropDown_objectWithoutPropertiesLoose(_ref, ["children", "className", "isOpen", "mods", "dropClassName", "fullWidth", "placement", "forwardedRef", "onFirstUpdate", "flip", "offset", "portal", "strategy", "modifiers", "renderTrigger", "onClickOutside", DATA_TEST_ID].map(_toPropertyKey));

  const [referenceElement, setReferenceElement] = Object(react["useState"])(null);
  const [popperElement, setPopperElement] = Object(react["useState"])(null);
  const trigger = typeof renderTrigger === 'function' ? renderTrigger() : renderTrigger;
  const modifiers = Object(react["useMemo"])(() => [{
    name: 'fullWidth',
    enabled: Boolean(fullWidth),
    phase: 'beforeWrite',
    requires: ['computeStyles'],
    fn: ({
      state
    }) => {
      state.styles.popper.width = "".concat(state.rects.reference.width, "px");
    },
    effect: ({
      state
    }) => {
      state.elements.popper.style.width = "".concat(state.elements.reference.clientWidth, "px");
    }
  }, {
    name: 'flip',
    enabled: Boolean(flip)
  }, {
    name: 'offset',
    enabled: Boolean(offset),
    options: {
      offset
    }
  }, ...modifiersProps], [fullWidth, flip, "".concat(offset)]);
  const {
    styles,
    attributes
  } = usePopper_usePopper(referenceElement, popperElement, {
    placement,
    modifiers,
    strategy,
    onFirstUpdate
  });
  const PopperWrapper = portal ? molecules_ThemedPortal : react["Fragment"];
  return react_default.a.createElement(ClickOutside_ClickOutsideConsumer, Object.assign({
    "data-test-id": testId,
    className: DropDown_cnBlock(className, mods),
    onClickOutside: onClickOutside
  }, restProps), react_default.a.createElement("div", {
    "data-test-id": dataTestId(testId, 'trigger'),
    ref: setReferenceElement
  }, trigger), isOpen && react_default.a.createElement(PopperWrapper, null, react_default.a.createElement("div", Object.assign({
    ref: setPopperElement,
    style: styles.popper
  }, attributes.popper, {
    "data-test-id": dataTestId(testId, 'drop'),
    className: dropClassName
  }), children)));
};
DropDown.propTypes = {
  isOpen: prop_types_default.a.bool,
  fullWidth: prop_types_default.a.bool,
  flip: prop_types_default.a.bool,
  portal: prop_types_default.a.bool,
  dropClassName: prop_types_default.a.string,
  onFirstUpdate: prop_types_default.a.func
};
/* harmony default export */ var DropDown_DropDown = (Object(react["memo"])(DropDown));
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/DropDown/index.js

/* harmony default export */ var molecules_DropDown = (DropDown_DropDown);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/Modal/ModalDumb/index.js




function ModalDumb_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ModalDumb_toPropertyKey(arg) { var key = ModalDumb_toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function ModalDumb_toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

/* global document */




const {
  cnBlock: ModalDumb_cnBlock,
  el
} = bem_browser('modal');

const setBodyOverflow = isOpen => {
  document.body.style.overflow = isOpen ? 'hidden' : '';
};

const ModalDumb = (_ref) => {
  let {
    bodyOverflow = true,
    children,
    className,
    backdrop,
    fullscreen,
    closeOnEscape = true,
    isOpen,
    mods,
    onClose,
    [DATA_TEST_ID]: testId
  } = _ref,
      restProps = ModalDumb_objectWithoutPropertiesLoose(_ref, ["bodyOverflow", "children", "className", "backdrop", "fullscreen", "closeOnEscape", "isOpen", "mods", "onClose", DATA_TEST_ID].map(ModalDumb_toPropertyKey));

  Object(react["useEffect"])(() => {
    setBodyOverflow(isOpen && bodyOverflow);
    return () => {
      setBodyOverflow(false);
    };
  }, [isOpen && bodyOverflow]);

  const initKeyDownListeners = () => {
    const keyDownHandler = e => {
      if (e.key === 'Escape' && onClose) {
        e.stopPropagation();
        e.preventDefault();
        onClose(e);
      }
    };

    document.addEventListener('keydown', keyDownHandler);
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  };

  Object(react["useEffect"])(() => {
    if (closeOnEscape) {
      return initKeyDownListeners();
    }
  }, [onClose]);

  if (!isOpen) {
    return null;
  }

  return react_default.a.createElement(molecules_ThemedPortal, Object.assign({
    "data-test-id": testId,
    className: ModalDumb_cnBlock(className, mods, {
      fullscreen,
      backdrop
    })
  }, restProps), backdrop && react_default.a.createElement("div", {
    "data-test-id": dataTestId(testId, 'backdrop'),
    className: el('backdrop'),
    onClick: onClose
  }), react_default.a.createElement("div", {
    className: el('content'),
    "data-test-id": dataTestId(testId, 'content')
  }, children));
};

ModalDumb.propTypes = {
  bodyOverflow: prop_types_default.a.bool,
  isOpen: prop_types_default.a.bool,
  fullscreen: prop_types_default.a.bool,
  backdrop: prop_types_default.a.bool,
  closeOnEscape: prop_types_default.a.bool,
  onClose: prop_types_default.a.func
};
/* harmony default export */ var Modal_ModalDumb = (ModalDumb);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/Modal/Modal.js





class Modal_Modal extends react["PureComponent"] {
  constructor(...args) {
    super(...args);
    this.state = {
      isOpen: this.props.isOpen
    };
  }

  static getDerivedStateFromProps(props) {
    return props.onClose ? {
      isOpen: props.isOpen
    } : {};
  }

  open() {
    this.setState({
      isOpen: true
    });
  }

  close() {
    this.setState({
      isOpen: false
    });
  }

  render() {
    const {
      onClose: _onClose
    } = this.props;
    const isOpen = _onClose ? this.props.isOpen : this.state.isOpen;
    return react_default.a.createElement(Modal_ModalDumb, Object.assign({}, this.props, {
      isOpen: isOpen,
      onClose: e => {
        if (_onClose) {
          _onClose(e);
        } else {
          this.setState({
            isOpen: false
          });
        }
      }
    }));
  }

}

Modal_Modal.defaultProps = {
  isOpen: false,
  bodyOverflow: true
};
/* harmony default export */ var molecules_Modal_Modal = (Modal_Modal);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/Modal/index.js

/* harmony default export */ var molecules_Modal = (molecules_Modal_Modal);
// EXTERNAL MODULE: /home/kirill/projects/industrial/node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(359);

// EXTERNAL MODULE: /home/kirill/projects/industrial/node_modules/lodash/max.js
var lodash_max = __webpack_require__(246);
var max_default = /*#__PURE__*/__webpack_require__.n(lodash_max);

// EXTERNAL MODULE: /home/kirill/projects/industrial/node_modules/lodash/isArray.js
var isArray = __webpack_require__(92);
var isArray_default = /*#__PURE__*/__webpack_require__.n(isArray);

// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/Highlighter/Highlighter.js



function Highlighter_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const {
  cnBlock: Highlighter_cnBlock,
  el: Highlighter_el
} = bem_browser('hr');
const Highlighter = (_ref) => {
  let {
    className,
    mods,
    children,
    active,
    pointer,
    hover,
    hoverBorderColor,
    activeBorderColor,
    activeBgColor,
    hoverBgColor,
    textColor,
    hoverTextColor,
    activeTextColor
  } = _ref,
      restProps = Highlighter_objectWithoutPropertiesLoose(_ref, ["className", "mods", "children", "active", "pointer", "hover", "hoverBorderColor", "activeBorderColor", "activeBgColor", "hoverBgColor", "textColor", "hoverTextColor", "activeTextColor"]);

  const activeBg = active && activeBgColor;
  let overlayColor;

  if (activeBg) {
    overlayColor = activeBgColor;
  }

  return react_default.a.createElement(atoms_Box, Object.assign({
    className: Highlighter_cnBlock(className, mods, {
      'hvr': hover,
      'ptr': pointer,
      'active-bg': activeBg,
      active,
      dsb: restProps.disabled
    }, mod('tc', textColor), mod('atc', activeTextColor), mod('htc', hoverTextColor), mod('abc', activeBorderColor), mod('hbc', hoverBorderColor))
  }, restProps), activeBg && react_default.a.createElement(atoms_Box, {
    color: overlayColor,
    className: Highlighter_el('active-bg')
  }), hover && react_default.a.createElement(atoms_Box, {
    color: hoverBgColor,
    className: Highlighter_el('hover-bg')
  }), children);
};
Highlighter.propTypes = {
  active: prop_types_default.a.bool,
  disabled: prop_types_default.a.bool,
  hover: prop_types_default.a.bool,
  pointer: prop_types_default.a.bool
};
Highlighter.defaultProps = {
  hover: true,
  activeBgColor: 'alpha-3',
  hoverBgColor: 'alpha-1'
};
/* harmony default export */ var Highlighter_Highlighter = (Object(react["memo"])(Highlighter));
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/Highlighter/index.js

/* harmony default export */ var molecules_Highlighter = (Highlighter_Highlighter);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/utils/ref.js


function withForwardedRef(Component) {
  return Object(react["forwardRef"])((props, ref) => {
    return react_default.a.createElement(Component, Object.assign({
      forwardedRef: ref
    }, props));
  });
}
;
/* harmony default export */ var utils_ref = (withForwardedRef);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/Focusable/index.js





function Focusable_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Focusable_toPropertyKey(arg) { var key = Focusable_toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function Focusable_toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }







const BoxWithRef = withForwardedRef(atoms_Box);
const {
  cnBlock: Focusable_cnBlock,
  el: Focusable_el
} = bem_browser('focusable');

const Focusable = (_ref) => {
  let {
    className,
    children,
    forwardedRef,
    onFocus = noop_default.a,
    onBlur = noop_default.a,
    outline = true,
    [DATA_TEST_ID]: testId
  } = _ref,
      restProps = Focusable_objectWithoutPropertiesLoose(_ref, ["className", "children", "forwardedRef", "onFocus", "onBlur", "outline", DATA_TEST_ID].map(Focusable_toPropertyKey));

  const [focused, setFocus] = Object(react["useState"])(false);
  const rootRef = Object(react["useRef"])(null);

  const handleFocus = e => {
    setFocus(true);
    onFocus(e);
  };

  const handleBlur = e => {
    setFocus(false);
    onBlur(e);
  };

  const focus = () => {
    var _rootRef$current;

    (_rootRef$current = rootRef.current) == null ? void 0 : _rootRef$current.focus();
  };

  const blur = () => {
    var _rootRef$current2;

    (_rootRef$current2 = rootRef.current) == null ? void 0 : _rootRef$current2.blur();
  };

  Object(react["useImperativeHandle"])(forwardedRef, () => ({
    focus,
    blur,
    root: rootRef
  }));
  return react_default.a.createElement(BoxWithRef, Object.assign({
    tabIndex: 0,
    ref: rootRef,
    onBlur: handleBlur,
    onFocus: handleFocus,
    "data-test-id": dataTestId(testId),
    className: Focusable_cnBlock(className, {
      focused,
      outline
    })
  }, restProps), react_default.a.createElement("div", {
    tabIndex: -1,
    className: Focusable_el('content'),
    "data-test-id": dataTestId(testId, 'content')
  }, children));
};

Focusable.propTypes = {
  outline: prop_types_default.a.bool
};
/* harmony default export */ var molecules_Focusable = (Object(react["memo"])(Focusable));
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/utils/environment.js
const isBrowser = () => typeof window !== 'undefined';
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/utils/EventListener.js





/* global window */
class EventListener_EventListener extends react["PureComponent"] {
  constructor(...args) {
    super(...args);

    this.componentDidMount = () => {
      /* istanbul ignore next */
      if (!isBrowser()) {
        return;
      }

      this.target.addEventListener(this.props.event, this.handleEvent, this.props.options);
    };

    this.componentWillUnmount = () => {
      /* istanbul ignore next */
      if (!isBrowser()) {
        return;
      }

      this.target.removeEventListener(this.props.event, this.handleEvent, this.props.options);
    };

    this.handleEvent = e => {
      this.props.listener(e);
    };
  }

  get target() {
    return this.props.target || window;
  }

  render() {
    return null;
  }

}

EventListener_EventListener.propTypes = {
  event: prop_types_default.a.string.isRequired
};
EventListener_EventListener.defaultProps = {
  listener: () => {}
};
/* harmony default export */ var utils_EventListener = (EventListener_EventListener);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/Menu/scroll.js
const getScrollTop = (height, itemHeight, scrollHeight, scrollTop, index) => {
  if (index < 0) {
    return scrollTop;
  }

  const total = Math.floor((height - scrollTop % itemHeight) / itemHeight);
  const first = Math.ceil(scrollTop / itemHeight);
  const last = first + (total - 1);

  if (index > last) {
    const max = scrollHeight - height;
    const value = index * itemHeight + itemHeight - height;
    return Math.min(value, max);
  }

  if (index < first) {
    return index * itemHeight;
  }

  return scrollTop;
};

/* harmony default export */ var Menu_scroll = (getScrollTop);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/Menu/Menu.js





function Menu_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Menu_toPropertyKey(arg) { var key = Menu_toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function Menu_toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }










const FocusableWithRef = withForwardedRef(molecules_Focusable);
const Menu = (_ref) => {
  let {
    autoFocus,
    arrowKeyNavigation,
    listenGlobalKeydown,
    initialScrollTop = 0,
    defaultCursorPosition = 0,
    items = [],
    renderMenuItem = (x, _) => x,
    onSelect,
    placeholder,
    [DATA_TEST_ID]: testId
  } = _ref,
      restProps = Menu_objectWithoutPropertiesLoose(_ref, ["autoFocus", "arrowKeyNavigation", "listenGlobalKeydown", "initialScrollTop", "defaultCursorPosition", "items", "renderMenuItem", "onSelect", "placeholder", DATA_TEST_ID].map(Menu_toPropertyKey));

  const [cursorPositionIndex, setCursorPositionIndex] = Object(react["useState"])(defaultCursorPosition);
  const menuContainerRef = Object(react["useRef"])(null);

  const scrollTo = scrollTop => {
    if (menuContainerRef.current) {
      menuContainerRef.current.root.current.scrollTop = scrollTop;
    }
  };

  const scrollToIndex = index => {
    if (!menuContainerRef.current) {
      return;
    }

    const {
      offsetHeight,
      scrollHeight,
      scrollTop
    } = menuContainerRef.current.root.current;
    const itemHeight = scrollHeight / items.length;
    const newScrollTop = Menu_scroll(offsetHeight, itemHeight, scrollHeight, scrollTop, index);
    scrollTo(newScrollTop);
  };

  const onKeyDown = e => {
    if (e.key === 'ArrowUp' && arrowKeyNavigation) {
      const nextIndex = Math.max(cursorPositionIndex - 1, 0);
      setCursorPositionIndex(nextIndex);
      scrollToIndex(nextIndex);
      e.preventDefault();
      e.stopPropagation();
    }

    if (e.key === 'ArrowDown' && arrowKeyNavigation) {
      const nextIndex = Math.min(cursorPositionIndex + 1, items.length - 1);
      setCursorPositionIndex(nextIndex);
      scrollToIndex(nextIndex);
      e.preventDefault();
      e.stopPropagation();
    }

    if (e.key === 'Enter') {
      const item = items[cursorPositionIndex];
      e.preventDefault();
      e.stopPropagation();

      if (item) {
        onSelect(item, cursorPositionIndex);
      }
    }
  };

  const noOptions = items.length === 0;
  Object(react["useEffect"])(() => {
    if (initialScrollTop) {
      scrollTo(initialScrollTop);
    } else {
      scrollToIndex(cursorPositionIndex);
    }

    if (autoFocus) {
      menuContainerRef.current.focus();
    }
  }, []);
  Object(react["useLayoutEffect"])(() => {
    if (items.length < cursorPositionIndex) {
      setCursorPositionIndex(defaultCursorPosition);
    }
  }, [items]);
  return react_default.a.createElement(FocusableWithRef, Object.assign({
    "data-test-id": testId,
    onKeyDown: listenGlobalKeydown ? undefined : onKeyDown,
    style: {
      overflow: 'auto'
    },
    ref: menuContainerRef
  }, restProps), listenGlobalKeydown && react_default.a.createElement(utils_EventListener, {
    event: 'keydown',
    listener: onKeyDown
  }), noOptions && placeholder && react_default.a.createElement(atoms_Box, {
    size: 'h-s',
    alignContent: 'cc',
    "data-test-id": dataTestId(testId, 'placeholder')
  }, placeholder), items.map((item, i) => react_default.a.createElement(molecules_Highlighter, {
    key: i,
    pointer: true,
    style: {
      flexShrink: 0
    },
    activeBgColor: 'alpha-1',
    onClick: () => onSelect(item, i),
    "data-test-id": dataTestId(testId, 'item'),
    active: cursorPositionIndex === i
  }, renderMenuItem(item, i))));
};
Menu.propTypes = {
  autoFocus: prop_types_default.a.bool,
  arrowKeyNavigation: prop_types_default.a.bool,
  listenGlobalKeydown: prop_types_default.a.bool,
  initialScrollTop: prop_types_default.a.number,
  defaultCursorPosition: prop_types_default.a.number,
  items: prop_types_default.a.arrayOf(prop_types_default.a.any),
  placeholder: prop_types_default.a.node,
  renderMenuItem: prop_types_default.a.func
};
Menu.defaultProps = {
  arrowKeyNavigation: false,
  initialScrollTop: 0,
  defaultCursorPosition: 0,
  items: [],
  onSelect: noop_default.a
};
/* harmony default export */ var Menu_Menu = (Menu);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/Menu/index.js

/* harmony default export */ var molecules_Menu = (Menu_Menu);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/FloatingLabel/FloatingLabel.js



function FloatingLabel_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const {
  cnBlock: FloatingLabel_cnBlock
} = bem_browser('floating-label');

const FloatingLabel = (_ref) => {
  let {
    className,
    mods,
    active,
    animation
  } = _ref,
      restProps = FloatingLabel_objectWithoutPropertiesLoose(_ref, ["className", "mods", "active", "animation"]);

  return react_default.a.createElement(atoms_Box, Object.assign({
    className: FloatingLabel_cnBlock(className, mods, {
      active,
      animation
    })
  }, restProps));
};

FloatingLabel.propTypes = {
  animation: prop_types_default.a.bool,
  active: prop_types_default.a.bool
};
FloatingLabel.defaultProps = {
  animation: true,
  active: false
};
/* harmony default export */ var FloatingLabel_FloatingLabel = (Object(react["memo"])(FloatingLabel));
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/FloatingLabel/index.js

/* harmony default export */ var molecules_FloatingLabel = (FloatingLabel_FloatingLabel);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/BaseSelect/BaseSelect.js




function BaseSelect_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function BaseSelect_toPropertyKey(arg) { var key = BaseSelect_toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function BaseSelect_toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }











const {
  cnBlock: BaseSelect_cnBlock,
  el: BaseSelect_el
} = bem_browser('base-select');

const BaseSelect = (_ref) => {
  let {
    arrowKeyNavigation = true,
    children,
    className,
    defaultCursorPosition,
    listenGlobalKeydown,
    initialScrollTop,
    isOpen,
    label,
    mods,
    isAnySelected,
    variant = 'basic',
    floatingLabel,
    noOptionsMessage,
    options,
    onSelect = noop_default.a,
    onClickClose = noop_default.a,
    onClickOpen = noop_default.a,
    onClickToggle = noop_default.a,
    onScroll,
    renderOption,
    valueLabel,
    [DATA_TEST_ID]: testId
  } = _ref,
      props = BaseSelect_objectWithoutPropertiesLoose(_ref, ["arrowKeyNavigation", "children", "className", "defaultCursorPosition", "listenGlobalKeydown", "initialScrollTop", "isOpen", "label", "mods", "isAnySelected", "variant", "floatingLabel", "noOptionsMessage", "options", "onSelect", "onClickClose", "onClickOpen", "onClickToggle", "onScroll", "placeholder", "renderOption", "value", "valueLabel", DATA_TEST_ID].map(BaseSelect_toPropertyKey));

  const handleSelect = option => {
    onClickClose();
    onSelect(option);
  };

  const onKeyDown = e => {
    if (e.key === 'Enter' && !isOpen) {
      e.stopPropagation();
      onClickOpen();
    }

    if (e.key === 'Escape' && isOpen) {
      e.stopPropagation();
      onClickClose();
    }
  };

  const renderTrigger = () => {
    return react_default.a.createElement(molecules_Focusable, {
      outline: false,
      onKeyDown: onKeyDown,
      onClick: onClickToggle,
      className: BaseSelect_el('trigger')
    }, react_default.a.createElement(molecules_FloatingLabel, {
      active: isAnySelected,
      animation: false,
      className: BaseSelect_el('label'),
      "data-test-id": dataTestId(testId, 'label')
    }, label), react_default.a.createElement(atoms_Box, {
      align: 'center',
      direction: 'row',
      className: BaseSelect_el('trigger-content')
    }, react_default.a.createElement("div", {
      className: BaseSelect_el('value-label'),
      "data-test-id": dataTestId(testId, 'value-label')
    }, valueLabel), react_default.a.createElement(atoms_Box, {
      alignContent: 'cc',
      className: BaseSelect_el('icon')
    }, react_default.a.createElement(atoms_Icon, {
      icon: isOpen ? 'angle-up' : 'angle-down'
    }))));
  };

  return react_default.a.createElement(molecules_DropDown, Object.assign({
    isOpen: isOpen,
    "data-test-id": testId,
    renderTrigger: renderTrigger,
    onClickOutside: onClickClose,
    dropClassName: BaseSelect_el('drop'),
    className: BaseSelect_cnBlock(className, mods, variant, {
      open: isOpen,
      'floating-label': label && floatingLabel,
      selected: isAnySelected
    })
  }, props), children, react_default.a.createElement(molecules_Menu, {
    outline: false,
    items: options,
    onScroll: onScroll,
    onSelect: handleSelect,
    placeholder: noOptionsMessage,
    autoFocus: !listenGlobalKeydown,
    listenGlobalKeydown: listenGlobalKeydown,
    initialScrollTop: initialScrollTop,
    onMouseDown: e => e.preventDefault(),
    arrowKeyNavigation: arrowKeyNavigation,
    defaultCursorPosition: defaultCursorPosition,
    renderMenuItem: renderOption
  }));
};

BaseSelect.propTypes = {
  label: prop_types_default.a.node,
  onSelect: prop_types_default.a.func,
  value: prop_types_default.a.any,
  options: prop_types_default.a.arrayOf(prop_types_default.a.any).isRequired,
  floatingLabel: prop_types_default.a.bool,
  isAnySelected: prop_types_default.a.bool,
  renderOption: prop_types_default.a.func,
  variant: prop_types_default.a.oneOf(['basic', 'filled']),
  noOptionsMessage: prop_types_default.a.node,
  valueLabel: prop_types_default.a.node
};
/* harmony default export */ var BaseSelect_BaseSelect = (BaseSelect);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/BaseSelect/BaseSelectTrigger.js
function BaseSelectTrigger_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const BaseSelectTrigger = (_ref) => {
  let {
    children,
    active,
    label
  } = _ref,
      restProps = BaseSelectTrigger_objectWithoutPropertiesLoose(_ref, ["children", "active", "label"]);

  return react_default.a.createElement(molecules_Focusable, restProps, react_default.a.createElement(molecules_Highlighter, {
    pointer: true,
    active: active,
    textColor: 'basic-1',
    style: {
      overflow: 'hidden'
    },
    activeBgColor: 'alpha-1'
  }, label, react_default.a.createElement(atoms_Box, {
    align: 'end',
    direction: 'row'
  }, children, react_default.a.createElement(atoms_Box, {
    size: 's',
    alignContent: 'cc',
    style: {
      marginLeft: 'auto',
      flexShrink: 0
    }
  }, react_default.a.createElement(atoms_Icon, {
    color: 'basic-2',
    icon: active ? 'angle-up' : 'angle-down'
  })))));
};

/* harmony default export */ var BaseSelect_BaseSelectTrigger = (BaseSelectTrigger);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/BaseSelect/index.js



/* harmony default export */ var molecules_BaseSelect = (BaseSelect_BaseSelect);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/utils/reactHooks/index.js


const useToggle = defaultValue => {
  const [active, setState] = Object(react["useState"])(defaultValue);

  const on = () => setState(true);

  const off = () => setState(false);

  const toggle = () => {
    if (active) {
      off();
    } else {
      on();
    }
  };

  return {
    active,
    on,
    off,
    toggle
  };
};
// EXTERNAL MODULE: /home/kirill/projects/industrial/node_modules/lodash/isObject.js
var isObject = __webpack_require__(84);
var isObject_default = /*#__PURE__*/__webpack_require__.n(isObject);

// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/Select/utils/index.js


const getValue = (value, key) => {
  if (typeof key === 'function') {
    return key(value);
  }

  if (isObject_default()(value) && value[key] !== undefined) {
    return value[key];
  }

  return value;
};
const getLabel = (value, labelKey) => {
  if (isArray_default()(value)) {
    return value.map(o => getValue(o, labelKey));
  }

  return getValue(value, labelKey);
};
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/Button/Button.js




function Button_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Button_toPropertyKey(arg) { var key = Button_toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function Button_toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }








const {
  cnBlock: Button_cnBlock,
  el: Button_el
} = bem_browser('btn');
const variants = {
  'flat': {
    color: 'transparent',
    textColor: 'basic-2',
    hoverTextColor: 'basic-1',
    activeTextColor: 'basic-1',
    activeBgColor: 'transparent'
  },
  'basic': {
    color: 'alpha-1',
    borderColor: 'basic-1',
    textColor: 'basic-2',
    activeTextColor: 'basic-1',
    activeBgColor: 'alpha-3'
  },
  'contained-1': {
    color: 'brand-1',
    textColor: 'light',
    hoverTextColor: 'light',
    activeTextColor: 'light',
    activeBgColor: 'alpha-3'
  },
  'contained-2': {
    color: 'brand-2',
    textColor: 'light',
    activeBgColor: 'alpha-3'
  },
  'contained-3': {
    color: 'dark',
    textColor: 'light',
    activeBgColor: 'alpha-3'
  },
  'outlined': {
    border: 'all',
    borderWidth: 1,
    color: 'transparent',
    borderColor: 'alpha-2',
    textColor: 'basic-2',
    activeBgColor: 'alpha-3'
  },
  link: {
    color: 'transparent',
    textColor: 'brand-2'
  }
};
const Button = (_ref) => {
  let {
    className,
    mods,
    variant,
    children,
    disabled,
    icon,
    iconSize,
    iconKeepFill,
    focusOnClick,
    loading,
    onClick,
    text,
    textSize,
    responsive,
    [DATA_TEST_ID]: testId
  } = _ref,
      props = Button_objectWithoutPropertiesLoose(_ref, ["className", "mods", "variant", "children", "disabled", "icon", "iconSize", "iconKeepFill", "focusOnClick", "loading", "onClick", "text", "textSize", "responsive", DATA_TEST_ID].map(Button_toPropertyKey));

  const handleClick = e => {
    if (!disabled && onClick) {
      onClick(e);
    }
  };

  const btnStyle = variant ? variants[variant] : {};
  let iconMargin;

  switch (props.direction) {
    case 'column':
      iconMargin = 'b-s';
      break;

    case 'column-reverse':
      iconMargin = 't-s';
      break;

    case 'row-reverse':
      iconMargin = 'l-s';
      break;

    default:
      iconMargin = 'r-s';
  }

  return react_default.a.createElement(molecules_Highlighter, Object.assign({
    pointer: true,
    size: 'h-s',
    padding: 'x-s',
    direction: 'row',
    alignContent: 'cc',
    onClick: handleClick,
    "data-test-id": testId,
    disabled: disabled || loading,
    className: Button_cnBlock(className, mods, {
      responsive,
      loading
    })
  }, btnStyle, props), !focusOnClick && react_default.a.createElement("div", {
    tabIndex: -1,
    className: Button_el('tab-anchor')
  }), loading && react_default.a.createElement(atoms_Icon, {
    size: iconSize,
    icon: 'loader',
    "data-test-id": dataTestId(testId, 'loader'),
    className: Button_el('loader')
  }), react_default.a.createElement(react["Fragment"], null, icon && react_default.a.createElement(atoms_Box, {
    margin: text ? iconMargin : undefined
  }, react_default.a.createElement(atoms_Icon, {
    icon: icon,
    size: iconSize,
    keepFill: iconKeepFill,
    "data-test-id": dataTestId(testId, 'icon'),
    className: Button_el('icon')
  })), text && react_default.a.createElement(atoms_Text, {
    nowrap: true,
    size: textSize,
    className: Button_el('text'),
    "data-test-id": dataTestId(testId, 'text')
  }, text), children));
};
Button.propTypes = {
  variant: prop_types_default.a.oneOf(['contained-1', 'contained-2', 'contained-3', 'outlined', 'basic', 'flat', 'link']),
  icon: prop_types_default.a.string,
  iconKeepFill: prop_types_default.a.bool,
  focusOnClick: prop_types_default.a.bool,
  responsive: prop_types_default.a.bool,
  tag: prop_types_default.a.oneOfType([prop_types_default.a.node, prop_types_default.a.elementType]),
  text: prop_types_default.a.string,
  loading: prop_types_default.a.bool
};
Button.defaultProps = {
  variant: 'flat',
  tag: 'button',
  iconSize: 's',
  textSize: 's',
  focusOnClick: false,
  disabled: false,
  responsive: false
};
/* harmony default export */ var Button_Button = (Object(react["memo"])(Button));
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/Button/index.js

/* harmony default export */ var molecules_Button = (Button_Button);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/Select/components/index.js


function components_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ValueLabelWrapper = props => react_default.a.createElement(atoms_Box, Object.assign({
  wrap: 'wrap',
  align: 'center',
  padding: 's l-m',
  direction: 'row',
  style: {
    overflow: 'hidden',
    minHeight: 40,
    whiteSpace: 'nowrap'
  }
}, props));
const ValueLabelWrapperMultiple = props => react_default.a.createElement(ValueLabelWrapper, Object.assign({
  padding: 'l-m xs'
}, props));
const MultipleValueLabel = (_ref) => {
  let {
    label,
    onDeleteClick
  } = _ref,
      restProps = components_objectWithoutPropertiesLoose(_ref, ["label", "onDeleteClick"]);

  return react_default.a.createElement(atoms_Box, Object.assign({
    size: 'h-xs',
    padding: 'xs',
    style: {
      marginLeft: -4
    }
  }, restProps), react_default.a.createElement(atoms_Box, {
    border: 'all',
    borderWidth: 1,
    align: 'center',
    direction: 'row',
    borderColor: 'alpha-2'
  }, react_default.a.createElement(atoms_Box, {
    padding: 'x-s'
  }, label), react_default.a.createElement(molecules_Button, {
    tag: 'div',
    size: 'none',
    padding: 'none',
    icon: 'close',
    onClick: onDeleteClick
  })));
};
const Option = props => react_default.a.createElement(molecules_Highlighter, Object.assign({
  size: 'h-s',
  hover: false,
  padding: 'x-s',
  justify: 'center',
  textColor: 'basic-2',
  activeTextColor: 'basic-1'
}, props));
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/Select/Select.js






function Select_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Select_toPropertyKey(arg) { var key = Select_toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function Select_toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }











const Select = (_ref) => {
  let {
    closeOnSelect = true,
    forwardedRef,
    isOpen: isOpenProp,
    labelKey = 'label',
    listenGlobalKeydown,
    onChange,
    onClickOpen = noop_default.a,
    onClickClose = noop_default.a,
    onClose = noop_default.a,
    onOpen = noop_default.a,
    openByDefault,
    options,
    renderOption,
    value,
    valueKey = 'value',
    valueLabel,
    valueComparator = (value, optionValue) => value === optionValue,
    [DATA_TEST_ID]: testId
  } = _ref,
      props = Select_objectWithoutPropertiesLoose(_ref, ["closeOnSelect", "forwardedRef", "isOpen", "labelKey", "listenGlobalKeydown", "onChange", "onClickOpen", "onClickClose", "onClose", "onOpen", "openByDefault", "options", "renderOption", "value", "valueKey", "valueLabel", "valueComparator", DATA_TEST_ID].map(Select_toPropertyKey));

  const {
    active: isOpenInner,
    on: openInner,
    off: closeInner
  } = useToggle(!!openByDefault);
  const isControlled = isOpenProp !== undefined;
  const isOpen = isControlled ? isOpenProp : isOpenInner;

  const _open = isControlled ? onClickOpen : openInner;

  const _close = isControlled ? onClickClose : closeInner;

  const open = () => {
    _open();

    onOpen();
  };

  const close = () => {
    _close();

    onClose();
  };

  const toggle = e => {
    if (isOpen) {
      close();
    } else {
      open();
    }

    if (e) {
      e.stopPropagation();
    }
  };

  Object(react["useImperativeHandle"])(forwardedRef, () => ({
    isOpen,
    open,
    close,
    toggle
  }));
  const multiple = isArray_default()(value);

  const getSelected = () => {
    const valuesArray = multiple ? value : [value];
    return valuesArray.reduce((acc, curr) => {
      const i = options.findIndex(item => valueComparator(curr, getValue(item, valueKey)));
      return options[i] !== undefined ? [acc[0].concat(options[i]), acc[1].concat(i)] : acc;
    }, [[], []]);
  };

  const [selectedOptions, selectedIndexes] = getSelected();
  const isAnySelected = selectedOptions.length > 0;

  const renderOptionDefault = (option, i) => react_default.a.createElement(Option, {
    "data-test-id": dataTestId(testId, "option(".concat(i, ")")),
    active: selectedOptions.includes(option)
  }, getLabel(option, labelKey));

  const handleChange = option => {
    if (onChange) {
      onChange(getValue(option, valueKey), option);
    }
  };

  return react_default.a.createElement(molecules_BaseSelect, Object.assign({
    flip: true,
    fullWidth: true,
    value: value,
    options: options,
    isOpen: isOpen,
    onClickOpen: open,
    onClickToggle: toggle,
    onSelect: handleChange,
    onClickOutside: close,
    isAnySelected: isAnySelected,
    listenGlobalKeydown: listenGlobalKeydown,
    onClickClose: closeOnSelect ? close : undefined,
    defaultCursorPosition: max_default()(selectedIndexes),
    renderOption: renderOption || renderOptionDefault,
    valueLabel: valueLabel || getLabel(selectedOptions, labelKey),
    "data-test-id": testId
  }, props));
};

Select.propTypes = {
  closeOnSelect: prop_types_default.a.bool,
  floatingLabel: prop_types_default.a.bool,
  labelKey: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.func]),
  openByDefault: prop_types_default.a.bool,
  onChange: prop_types_default.a.func,
  valueComparator: prop_types_default.a.func,
  valueKey: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.func]),
  isOpen: prop_types_default.a.bool
};
/* harmony default export */ var Select_Select = (Select);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/Select/index.js

/* harmony default export */ var molecules_Select = (Select_Select);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/TextField/TextField.js





function TextField_extends() { TextField_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TextField_extends.apply(this, arguments); }

function TextField_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function TextField_toPropertyKey(arg) { var key = TextField_toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function TextField_toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }







const {
  cnBlock: TextField_cnBlock,
  el: TextField_el
} = bem_browser('text-field');

/** data-test-id attributes: label, input, icon, clear, error **/
const TextField = (_ref) => {
  let {
    className,
    mods,
    forwardedRef,
    labelAnimation = true,
    multiline,
    label,
    border = true,
    icon,
    value,
    variant = 'basic',
    iconSize,
    error,
    onFocus,
    onBlur,
    onChange,
    onClear,
    [DATA_TEST_ID]: testId
  } = _ref,
      props = TextField_objectWithoutPropertiesLoose(_ref, ["className", "mods", "disabled", "forwardedRef", "labelAnimation", "multiline", "label", "border", "icon", "value", "variant", "iconSize", "error", "onFocus", "onBlur", "onChange", "onClear", DATA_TEST_ID].map(TextField_toPropertyKey));

  const [{
    focused,
    autofilled
  }, setState] = Object(react["useState"])({
    focused: false,
    autofilled: false
  });
  const inputRef = Object(react["useRef"])(null);
  const empty = value === 'undefined' || value === '';
  const renderClearButton = !empty && onClear;
  const expanded = autofilled || focused || !empty;

  const handleClear = e => {
    var _inputRef$current;

    (_inputRef$current = inputRef.current) == null ? void 0 : _inputRef$current.focus();
    e.preventDefault();

    if (onClear) {
      onClear();
    }
  };

  const onAnimationStart = ({
    animationName
  }) => {
    setState(prevState => TextField_extends({}, prevState, {
      autofilled: animationName === 'onAutoFillStart'
    }));
  };

  const handleFocus = e => {
    setState(prevState => TextField_extends({}, prevState, {
      focused: true
    }));

    if (onFocus) {
      onFocus(e);
    }
  };

  const handleBlur = e => {
    setState(prevState => TextField_extends({}, prevState, {
      focused: false
    }));

    if (onBlur) {
      onBlur(e);
    }
  };

  Object(react["useImperativeHandle"])(forwardedRef, () => ({
    focus: () => inputRef.current.focus(),
    blur: () => inputRef.current.blur(),
    select: () => inputRef.current.select()
  }));
  const Tag = multiline ? 'textarea' : 'input';
  return react_default.a.createElement(atoms_Box, {
    "data-test-id": testId,
    className: TextField_cnBlock(className, mods, variant, {
      expanded,
      focused,
      border,
      multiline,
      label,
      error,
      icon,
      'clear': onClear,
      'is-empty': empty
    })
  }, label && react_default.a.createElement(molecules_FloatingLabel, {
    active: expanded,
    animation: labelAnimation,
    "data-test-id": dataTestId(testId, 'label'),
    className: TextField_el('label')
  }, label), react_default.a.createElement(Tag, Object.assign({
    rows: multiline ? 4 : undefined
  }, props, {
    ref: inputRef,
    value: value,
    onChange: onChange,
    onFocus: handleFocus,
    onBlur: handleBlur,
    "data-test-id": dataTestId(testId, 'input'),
    onAnimationStart: onAnimationStart,
    className: TextField_el('input')
  })), icon && react_default.a.createElement(atoms_Box, {
    size: 's',
    alignContent: 'cc',
    "data-test-id": dataTestId(testId, 'icon'),
    onMouseDown: e => e.preventDefault(),
    className: TextField_el('icon')
  }, react_default.a.createElement(atoms_Icon, {
    icon: icon,
    size: iconSize
  })), renderClearButton && react_default.a.createElement(molecules_Button, {
    tag: 'div',
    size: 's',
    icon: 'close',
    iconSize: 'xs',
    "data-test-id": dataTestId(testId, 'clear'),
    onMouseDown: e => e.preventDefault(),
    onClick: handleClear,
    className: TextField_el('clear')
  }), error && react_default.a.createElement(atoms_Text, {
    size: 'xs',
    color: 'error',
    "data-test-id": dataTestId(testId, 'error'),
    className: TextField_el('error')
  }, error));
};

TextField.propTypes = {
  autofocus: prop_types_default.a.bool,
  label: prop_types_default.a.string,
  border: prop_types_default.a.bool,
  labelAnimation: prop_types_default.a.bool,
  value: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]),
  variant: prop_types_default.a.oneOf(['basic', 'filled']),
  disabled: prop_types_default.a.bool,
  multiline: prop_types_default.a.bool,
  error: prop_types_default.a.string,
  icon: prop_types_default.a.string
};
/* harmony default export */ var TextField_TextField = (TextField);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/TextField/index.js

/* harmony default export */ var molecules_TextField = (TextField_TextField);
// EXTERNAL MODULE: /home/kirill/projects/industrial/node_modules/resize-observer/lib/ResizeObserver.js
var ResizeObserver = __webpack_require__(247);

// EXTERNAL MODULE: /home/kirill/projects/industrial/node_modules/lodash/debounce.js
var lodash_debounce = __webpack_require__(248);
var debounce_default = /*#__PURE__*/__webpack_require__.n(lodash_debounce);

// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-range-slider/lib/coordinateSystem.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CoordinateSystem = function () {
    function CoordinateSystem(dMin, dLen, sMin, sLen) {
        _classCallCheck(this, CoordinateSystem);

        this.domain(dMin, dLen);
        this.screen(sMin, sLen);
        this._sValidate = function () {};
        this.active = true;
    }

    _createClass(CoordinateSystem, [{
        key: "invalidateScreen",
        value: function invalidateScreen(update) {
            var _this = this;

            this._sValidate = function () {
                _this.active && update();
                _this._sValidate = function () {};
            };
        }
    }, {
        key: "domain",
        value: function domain(dMin, dLen) {
            this._dMin = dMin;
            this._dLen = dLen;
        }
    }, {
        key: "screen",
        value: function screen(sMin, sLen) {
            this._sMin = sMin;
            this._sLen = sLen;
        }
    }, {
        key: "dNormLen",
        value: function dNormLen(dLen) {
            return dLen / this._dLen;
        }
    }, {
        key: "dNormPos",
        value: function dNormPos(dPos) {
            return this.dNormLen(dPos - this._dMin);
        }
    }, {
        key: "dNormPos2",
        value: function dNormPos2(dPos) {
            return this.dNormLen(this._dMin + this._dLen - dPos);
        }
    }, {
        key: "sNormLen",
        value: function sNormLen(sLen) {
            this._sValidate();
            return sLen / this._sLen;
        }
    }, {
        key: "sNormPos",
        value: function sNormPos(sPos) {
            this._sValidate();
            return this.sNormLen(sPos - this._sMin);
        }
    }, {
        key: "sNormPos2",
        value: function sNormPos2(sPos) {
            this._sValidate();
            return this.sNormLen(this._sMin + this._sLen - sPos);
        }
    }, {
        key: "d2sPos",
        value: function d2sPos(dPos) {
            this._sValidate();
            var pNorm = (dPos - this._dMin) / this._dLen;
            return pNorm * this._sLen + this._sMin;
        }
    }, {
        key: "s2dPos",
        value: function s2dPos(sPos) {
            this._sValidate();
            var dNorm = (sPos - this._sMin) / this._sLen;
            return dNorm * this._dLen + this._dMin;
        }
    }, {
        key: "d2sLen",
        value: function d2sLen(dLen) {
            this._sValidate();
            return dLen / this._dLen * this._sLen;
        }
    }, {
        key: "s2dLen",
        value: function s2dLen(sLen) {
            this._sValidate();
            return sLen / this._sLen * this._dLen;
        }
    }]);

    return CoordinateSystem;
}();

/* harmony default export */ var coordinateSystem = (CoordinateSystem);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-range-slider/lib/Validatable.js
var Validatable_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function Validatable_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Validatable_noop = function noop() {};

var Validatable = function () {
    function Validatable() {
        Validatable_classCallCheck(this, Validatable);

        this.validate = Validatable_noop;
        this._value = null;
        this.active = true;
    }

    Validatable_createClass(Validatable, [{
        key: "invalidate",
        value: function invalidate(getValue) {
            var _this = this;

            this.validate = function () {
                if (_this.active) {
                    _this._value = getValue();
                }
                _this.validate = Validatable_noop;
            };
        }
    }, {
        key: "value",
        get: function get() {
            this.validate();
            return this._value;
        }
    }]);

    return Validatable;
}();

/* harmony default export */ var lib_Validatable = (Validatable);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-range-slider/lib/offset.js
var getOffsetX = function getOffsetX(e) {
    var acc = e.offsetLeft;
    while (e.offsetParent) {
        e = e.offsetParent;
        acc += e.offsetLeft;
    }
    return acc;
};

var getOffsetY = function getOffsetY(e) {
    var acc = e.offsetTop;
    while (e.offsetParent) {
        e = e.offsetParent;
        acc += e.offsetTop;
    }
    return acc;
};
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-range-slider/lib/1d/context.js



var RangeSliderContext1D = react_default.a.createContext({
    coordinateSystem: new coordinateSystem(0, 1, 0, 1),
    axis: 'x'
});
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-range-slider/lib/shallowCompare.js
var has = function has(k, xs) {
    return xs.hasOwnProperty(k);
};

var shallowSubset = function shallowSubset(a, b) {
    for (var k in a) {
        if (!has(k, a)) continue;
        if (!has(k, b)) return false;
        if (a[k] !== b[k]) return false;
    }
    return true;
};

var shallowEqual = function shallowEqual(a, b) {
    return shallowSubset(a, b) && shallowSubset(b, a);
};

var equalDomains = function equalDomains(a, b) {
    return a[0] === b[0] && a[1] === b[1];
};
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-range-slider/lib/1d/Axis.js
var Axis_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Axis_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Axis_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var mouseEvents = ['onClick', 'onMouseMove', 'onMouseDown', 'onMouseUp', 'onMouseEnter', 'onMouseLeave'];

var Axis_Axis = function (_React$Component) {
    _inherits(Axis, _React$Component);

    function Axis(props) {
        Axis_classCallCheck(this, Axis);

        var _this = _possibleConstructorReturn(this, (Axis.__proto__ || Object.getPrototypeOf(Axis)).call(this, props));

        _this.offsetX = new lib_Validatable();
        _this.offsetY = new lib_Validatable();

        _this.mouseXVal = function (e) {
            return _this.coordinateSystem.s2dPos(e.pageX - _this.offsetX.value);
        };

        _this.mouseYVal = function (e) {
            return _this.coordinateSystem.s2dPos(e.pageY - _this.offsetY.value);
        };

        var screenSize = props.axis === 'x' ? props.width : props.height;

        _this.coordinateSystem = new coordinateSystem(props.domain[0], props.domain[1] - props.domain[0], 0, screenSize || 1);

        var mouseHandlers = {};
        mouseEvents.forEach(function (eventName) {
            mouseHandlers[eventName] = _this.mouseHandler(eventName);
        });

        _this.mouseHandlers = mouseHandlers;
        return _this;
    }

    Axis_createClass(Axis, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
            return !shallowEqual(this.props, nextProps) || !equalDomains(this.props.domain, nextProps.domain);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.updateCoordinateSystem();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.updateCoordinateSystem();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.coordinateSystem.active = false;
            this.offsetX.active = false;
            this.offsetY.active = false;
        }
    }, {
        key: 'updateCoordinateSystem',
        value: function updateCoordinateSystem() {
            var _this2 = this;

            this.offsetX.invalidate(function () {
                return getOffsetX(_this2.refs.root);
            });
            this.offsetY.invalidate(function () {
                return getOffsetY(_this2.refs.root);
            });
            this.coordinateSystem.invalidateScreen(function () {
                _this2.coordinateSystem.screen(0, _this2.props.axis === 'x' ? _this2.props.width || _this2.refs.root.offsetWidth : _this2.props.height || _this2.refs.root.offsetHeight);
            });
        }
    }, {
        key: 'mouseHandler',
        value: function mouseHandler(name) {
            var _this3 = this;

            return function (e) {
                if (_this3.props[name]) {
                    var method = _this3.props.axis === 'x' ? _this3.mouseXVal : _this3.mouseYVal;
                    _this3.props[name](e, method(e));
                }
            };
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                domain = _props.domain,
                axis = _props.axis,
                props = _objectWithoutProperties(_props, ['domain', 'axis']);

            this.coordinateSystem.domain(domain[0], domain[1] - domain[0]);
            return react_default.a.createElement(
                RangeSliderContext1D.Provider,
                { value: {
                        coordinateSystem: this.coordinateSystem,
                        axis: this.props.axis
                    } },
                react_default.a.createElement('div', Axis_extends({}, props, this.mouseHandlers, {
                    ref: 'root' }))
            );
        }
    }]);

    return Axis;
}(react_default.a.Component);

Axis_Axis.defaultProps = {
    axis: 'x'
};
/* harmony default export */ var _1d_Axis = (Axis_Axis);
// EXTERNAL MODULE: /home/kirill/projects/industrial/node_modules/fr-draggable/lib/common.js
var common = __webpack_require__(18);

// EXTERNAL MODULE: /home/kirill/projects/industrial/node_modules/fr-draggable/lib/touchCommon.js
var touchCommon = __webpack_require__(93);

// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-draggable/lib/TouchDraggable.js





// it is a class because findDOMNode(this)
class TouchDraggable_TouchDraggable extends react_default.a.PureComponent {
    constructor(props) {
        super(props);
        this.isGrabbed = false;
        this.data = {x: 0, y: 0, deltaX: 0, deltaY: 0, initial: {x: 0, y: 0}};
        this.startDrag = touchCommon["a" /* startTouchDrag */].bind(this);
        this.dispose = common["c" /* noop */];
    }

    componentDidMount() {
        const rootElement = Object(react_dom["findDOMNode"])(this);
        rootElement.addEventListener('touchstart', this.startDrag, {passive: false});
        this._disposeStart = () => {
            rootElement.removeEventListener('touchstart', this.startDrag)
        };
    }

    componentWillUnmount() {
        this._disposeStart();
        this.dispose();
        if (this.isGrabbed) {
            this.props.onStop(null, this.data);
        }
    }

    render() {
        const {children} = this.props;
        return react_default.a.Children.only(children);
    }
}

TouchDraggable_TouchDraggable.defaultProps = {
    onStart: common["c" /* noop */],
    onDrag: common["c" /* noop */],
    onStop: common["c" /* noop */]
};
// EXTERNAL MODULE: /home/kirill/projects/industrial/node_modules/fr-draggable/lib/mouseCommon.js
var mouseCommon = __webpack_require__(94);

// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-draggable/lib/MouseDraggable.js





// it is a class because findDOMNode(this)
class MouseDraggable_MouseDraggable extends react_default.a.PureComponent {
    constructor(props) {
        super(props);
        this.isGrabbed = false;
        this.data = {x: 0, y: 0, deltaX: 0, deltaY: 0, initial: {x: 0, y: 0}};
        this.startDrag = mouseCommon["a" /* startMouseDrag */].bind(this);
        this.dispose = common["c" /* noop */];
    }

    componentDidMount() {
        const rootElement = Object(react_dom["findDOMNode"])(this);
        rootElement.addEventListener('mousedown', this.startDrag, {passive: false});
        this._disposeStart = () => {
            rootElement.removeEventListener('mousedown', this.startDrag)
        };
    }

    componentWillUnmount() {
        this._disposeStart();
        this.dispose();
        if (this.isGrabbed) {
            this.props.onStop(null, this.data);
        }
    }

    render() {
        const {children} = this.props;
        return react_default.a.Children.only(children);
    }
}

MouseDraggable_MouseDraggable.defaultProps = {
    onStart: common["c" /* noop */],
    onDrag: common["c" /* noop */],
    onStop: common["c" /* noop */]
};

// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-draggable/lib/Draggable.js






// it is a class because findDOMNode(this)
class Draggable_Draggable extends react_default.a.PureComponent {
    constructor(props) {
        super(props);
        this.isGrabbed = false;
        this.data = {x: 0, y: 0, deltaX: 0, deltaY: 0, initial: {x: 0, y: 0}};
        this.startMouseDrag = mouseCommon["a" /* startMouseDrag */].bind(this);
        this.startTouchDrag = touchCommon["a" /* startTouchDrag */].bind(this);
        this.dispose = common["c" /* noop */];
    }

    componentDidMount() {
        const rootElement = Object(react_dom["findDOMNode"])(this);
        rootElement.addEventListener('touchstart', this.startTouchDrag, {passive: false});
        rootElement.addEventListener('mousedown', this.startMouseDrag, {passive: false});
        this._disposeStart = () => {
            rootElement.removeEventListener('touchstart', this.startTouchDrag);
            rootElement.removeEventListener('mousedown', this.startMouseDrag);
        };
    }

    componentWillUnmount() {
        this._disposeStart();
        this.dispose();
        if (this.isGrabbed) {
            this.props.onStop();
        }
    }

    render() {
        const {children} = this.props;
        return react_default.a.Children.only(children);
    }
}

// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-draggable/lib/index.js






// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-range-slider/lib/1d/StaticRange.js
var StaticRange_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var StaticRange_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function StaticRange_objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function StaticRange_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function StaticRange_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function StaticRange_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var StaticRange_StaticRange = function (_React$PureComponent) {
    StaticRange_inherits(StaticRange, _React$PureComponent);

    function StaticRange() {
        StaticRange_classCallCheck(this, StaticRange);

        return StaticRange_possibleConstructorReturn(this, (StaticRange.__proto__ || Object.getPrototypeOf(StaticRange)).apply(this, arguments));
    }

    StaticRange_createClass(StaticRange, [{
        key: 'posStyle',
        value: function posStyle(context) {
            var _this2 = this;

            var acc = {};
            var prop = function prop(csOp, styleName) {
                if (typeof _this2.props[styleName] === 'number') {
                    acc[styleName] = context.coordinateSystem['dNorm' + csOp](_this2.props[styleName]) * 100 + '%';
                }
            };
            prop('Pos', 'left');
            prop('Pos2', 'right');
            prop('Len', 'width');
            prop('Pos', 'top');
            prop('Pos2', 'bottom');
            prop('Len', 'height');

            return acc;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props = this.props,
                style = _props.style,
                left = _props.left,
                right = _props.right,
                top = _props.top,
                bottom = _props.bottom,
                width = _props.width,
                height = _props.height,
                props = StaticRange_objectWithoutProperties(_props, ['style', 'left', 'right', 'top', 'bottom', 'width', 'height']);

            return react_default.a.createElement(
                RangeSliderContext1D.Consumer,
                null,
                function (context) {
                    return react_default.a.createElement('div', StaticRange_extends({}, props, {
                        style: StaticRange_extends({}, style, _this3.posStyle(context)) }));
                }
            );
        }
    }]);

    return StaticRange;
}(react_default.a.PureComponent);

/* harmony default export */ var _1d_StaticRange = (StaticRange_StaticRange);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-range-slider/lib/1d/DraggableRange.js
function DraggableRange_objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






var DraggableRange_noop = function noop() {};

var DraggableRange_DraggableRange = react_default.a.memo(react_default.a.forwardRef(function DraggableRange(_ref, ref) {
    var _ref$onDragStart = _ref.onDragStart,
        onDragStart = _ref$onDragStart === undefined ? DraggableRange_noop : _ref$onDragStart,
        _ref$onDragEnd = _ref.onDragEnd,
        onDragEnd = _ref$onDragEnd === undefined ? DraggableRange_noop : _ref$onDragEnd,
        _ref$onDrag = _ref.onDrag,
        onDrag = _ref$onDrag === undefined ? DraggableRange_noop : _ref$onDrag,
        restProps = DraggableRange_objectWithoutProperties(_ref, ['onDragStart', 'onDragEnd', 'onDrag']);

    var contextValue = Object(react["useContext"])(RangeSliderContext1D);
    var useEventHandler = function useEventHandler(eventHandler) {
        return Object(react["useCallback"])(function (e, data) {
            var coordinate = contextValue.axis === 'x' ? data.x : data.y;
            var mappedCoordinate = contextValue.coordinateSystem.s2dPos(coordinate);
            eventHandler(mappedCoordinate, e);
        }, [eventHandler]);
    };

    return react_default.a.createElement(
        Draggable_Draggable,
        { onStart: useEventHandler(onDragStart),
            onDrag: useEventHandler(onDrag),
            onStop: useEventHandler(onDragEnd),
            ref: ref },
        react_default.a.createElement(_1d_StaticRange, restProps)
    );
}));

/* harmony default export */ var _1d_DraggableRange = (DraggableRange_DraggableRange);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-range-slider/lib/index.js





// EXTERNAL MODULE: /home/kirill/projects/industrial/node_modules/core-js/modules/es.number.to-fixed.js
var es_number_to_fixed = __webpack_require__(374);

// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/utils/toFixed.js


const toFixed = (n, precision) => parseFloat(n.toFixed(precision));

/* harmony default export */ var utils_toFixed = (toFixed);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/Range/utils/index.js



const stepToPrecision = step => {
  return Number.isInteger(step) ? 0 : "".concat(step).split('.')[1].length;
};
const createRangeValueFormatter = ([min, max], step) => value => {
  if (value >= max) {
    return max;
  }

  if (value <= min) {
    return min;
  }

  if (step) {
    const nextValue = Math.round(value / step) * step;
    return utils_toFixed(nextValue, stepToPrecision(step));
  }

  return value;
};
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/LiveInput/index.js



function LiveInput_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const LiveInput = (_ref) => {
  let {
    value: valueProp,
    forwardedRef,
    onFocus = () => {},
    onBlur = () => {},
    onChange = () => {}
  } = _ref,
      restProps = LiveInput_objectWithoutPropertiesLoose(_ref, ["value", "forwardedRef", "onFocus", "onBlur", "onChange"]);

  const [internalValue, setInternalValue] = Object(react["useState"])(valueProp);
  const [focused, setFocused] = Object(react["useState"])(false);
  Object(react["useImperativeHandle"])(forwardedRef, () => ({
    setInternalValue
  }));
  const value = focused ? internalValue : valueProp;

  const handleFocus = e => {
    setFocused(true);
    setInternalValue(valueProp);
    onFocus(e);
  };

  const handleBlur = e => {
    setFocused(false);
    onBlur(e);
  };

  const handleChange = e => {
    setInternalValue(e.target.value);
    onChange(e);
  };

  return react_default.a.createElement(atoms_Input, Object.assign({}, restProps, {
    value: value,
    onBlur: handleBlur,
    onFocus: handleFocus,
    onChange: handleChange
  }));
};

/* harmony default export */ var molecules_LiveInput = (Object(react["memo"])(LiveInput));
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/Range/Range.js





function Range_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Range_toPropertyKey(arg) { var key = Range_toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function Range_toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }















const LiveInputWithRef = withForwardedRef(molecules_LiveInput);
const {
  cnBlock: Range_cnBlock,
  el: Range_el
} = bem_browser('range');
const Range = (_ref) => {
  let {
    className,
    mods,
    domain,
    value: valueProp,
    keysEnabled,
    trackClickEnabled,
    step,
    shiftKeyMultiplier = 1,
    onChange,
    onChangeComplete = () => {},
    onDragStart,
    onDragEnd,
    numericInput,
    [DATA_TEST_ID]: testId
  } = _ref,
      restProps = Range_objectWithoutPropertiesLoose(_ref, ["className", "mods", "domain", "value", "keysEnabled", "trackClickEnabled", "step", "shiftKeyMultiplier", "onChange", "onChangeComplete", "onDragStart", "onDragEnd", "numericInput", DATA_TEST_ID].map(Range_toPropertyKey));

  const [trackWidth, setTrackWidth] = Object(react["useState"])(0);
  const [isResizing, setIsResizing] = Object(react["useState"])(false);
  const formatValue = Object(react["useCallback"])(createRangeValueFormatter(domain, step), [domain, step]);
  const inputRef = Object(react["useRef"])(null);
  const trackRef = Object(react["useRef"])(null);
  const resizeTimerRef = Object(react["useRef"])(0);
  const ro = Object(react["useRef"])(null);
  const handleChange = Object(react["useCallback"])(value => {
    const numberValue = parseFloat(value);

    if (isNaN(numberValue)) {
      return;
    }

    const nextValue = formatValue(numberValue);

    if (onChange) {
      onChange(nextValue);
    }
  }, [formatValue, valueProp]);
  const debounceOnChangeComplete = Object(react["useCallback"])(debounce_default()(onChangeComplete, 1000), []);

  const handleArrowPress = (value, e) => {
    e.preventDefault();
    debounceOnChangeComplete();
    handleChange(value);
  };

  const handleBlur = () => {
    onChangeComplete();
  };

  const onKeyDown = e => {
    const delta = e.shiftKey ? step * shiftKeyMultiplier : step;

    if (e.key === 'ArrowLeft') {
      handleArrowPress(valueProp - delta, e);
    }

    if (e.key === 'ArrowRight') {
      handleArrowPress(valueProp + delta, e);
    }
  };

  const onInputKeyDown = e => {
    const delta = e.shiftKey ? step * shiftKeyMultiplier : step;

    if (e.key === 'ArrowUp') {
      const newValue = formatValue(valueProp + delta);
      handleArrowPress(newValue, e);
      inputRef.current.setInternalValue(newValue);
    }

    if (e.key === 'ArrowDown') {
      const newValue = formatValue(valueProp - delta);
      handleArrowPress(newValue, e);
      inputRef.current.setInternalValue(newValue);
    }
  };

  const handleDragEnd = val => {
    onChangeComplete();

    if (onDragEnd) {
      onDragEnd(val);
    }
  };

  const onTrackClick = e => {
    if (!trackRef.current) {
      return;
    }

    const [min, max] = domain;
    const {
      left,
      width
    } = trackRef.current.getBoundingClientRect();
    const clickPosition = (e.clientX - left) / (width / 100);
    const clickPositionAbsolute = (Math.abs(min) + max) / 100 * clickPosition;
    const newValue = clickPositionAbsolute - Math.abs(min);
    handleChange(newValue);
    onChangeComplete();
  };

  const updateTrackWidth = () => {
    if (trackRef.current) {
      setTrackWidth(trackRef.current.offsetWidth);
    }
  };

  const handleResize = () => {
    clearTimeout(resizeTimerRef.current);
    setIsResizing(true);
    resizeTimerRef.current = window.setTimeout(() => {
      updateTrackWidth();
      setIsResizing(false);
    }, 250);
  };

  Object(react["useEffect"])(() => {
    ro.current = new ResizeObserver["ResizeObserver"](handleResize);
    ro.current.observe(trackRef.current);
    return () => {
      var _ro$current;

      (_ro$current = ro.current) == null ? void 0 : _ro$current.disconnect();
      clearTimeout(resizeTimerRef.current);
    };
  }, []);
  const value = formatValue(valueProp);
  return react_default.a.createElement(atoms_Box, Object.assign({
    direction: 'row',
    draggable: false,
    "data-test-id": testId,
    className: Range_cnBlock(className, mods)
  }, restProps), react_default.a.createElement(molecules_Focusable, {
    onBlur: () => onChangeComplete(),
    onKeyDown: keysEnabled ? onKeyDown : undefined,
    className: Range_el('slider')
  }, react_default.a.createElement("div", {
    ref: trackRef,
    className: Range_el('track'),
    "data-test-id": dataTestId(testId, 'track'),
    onMouseDown: trackClickEnabled ? onTrackClick : undefined
  }, react_default.a.createElement(_1d_Axis, {
    domain: domain,
    width: trackWidth
  }, react_default.a.createElement(RangeSliderContext1D.Consumer, null, context => {
    const selectedStyles = {
      transformOrigin: '0 0',
      transform: "scaleX(".concat(context.coordinateSystem.dNormLen(value - domain[0]))
    };
    const dragHandleStyles = {
      transform: "translateX(".concat(context.coordinateSystem.d2sPos(value), "px) translate3d(-50%, -50%, 0)")
    };
    const dragHandleStylesInPercents = {
      position: 'absolute',
      transform: 'translate(-50%, -50%)',
      top: '50%',
      left: "".concat(context.coordinateSystem.dNormPos(value) * 100, "%")
    };
    return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("div", {
      className: Range_el('axis')
    }, react_default.a.createElement("div", {
      style: selectedStyles,
      className: Range_el('selected')
    })), react_default.a.createElement(Draggable_Draggable, {
      onStart: onDragStart,
      onStop: handleDragEnd,
      onDrag: (_, data) => {
        handleChange(context.coordinateSystem.s2dPos(data.x));
      }
    }, react_default.a.createElement("div", {
      "data-test-id": dataTestId(testId, 'handle'),
      style: isResizing || !trackWidth ? dragHandleStylesInPercents : dragHandleStyles,
      className: Range_el('handle')
    })));
  })))), numericInput && react_default.a.createElement(atoms_Box, {
    justify: 'center',
    className: Range_el('value')
  }, react_default.a.createElement(LiveInputWithRef, {
    value: value,
    ref: inputRef,
    onBlur: handleBlur,
    onKeyDown: onInputKeyDown,
    "data-test-id": dataTestId(testId, 'input'),
    onChange: e => {
      const target = e.target;
      handleChange(target.value);
    }
  })));
};
Range.propTypes = {
  trackClickEnabled: prop_types_default.a.bool,
  shiftKeyMultiplier: prop_types_default.a.number,
  keysEnabled: prop_types_default.a.bool,
  numericInput: prop_types_default.a.bool,
  step: prop_types_default.a.number,
  value: prop_types_default.a.number.isRequired
};
Range.defaultProps = {
  step: 0.1,
  domain: [0, 100],
  shiftKeyMultiplier: 10,
  trackClickEnabled: true,
  numericInput: false,
  keysEnabled: true,
  onChange: noop_default.a,
  onChangeComplete: noop_default.a,
  onDragStart: noop_default.a,
  onDragEnd: noop_default.a
};
/* harmony default export */ var Range_Range = (Object(react["memo"])(Range));
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/Range/index.js

/* harmony default export */ var molecules_Range = (Range_Range);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/Field/Field.js




function Field_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Field_toPropertyKey(arg) { var key = Field_toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function Field_toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





const {
  cnBlock: Field_cnBlock,
  el: Field_el
} = bem_browser('field');
const Field = (_ref) => {
  let {
    className,
    children,
    mods,
    label,
    [DATA_TEST_ID]: testId
  } = _ref,
      restProps = Field_objectWithoutPropertiesLoose(_ref, ["className", "children", "mods", "label", DATA_TEST_ID].map(Field_toPropertyKey));

  return react_default.a.createElement(atoms_Box, Object.assign({
    "data-test-id": testId,
    className: Field_cnBlock(className, mods)
  }, restProps), label && react_default.a.createElement("div", {
    className: Field_el('label'),
    "data-test-id": dataTestId(testId, 'label')
  }, label), react_default.a.createElement("div", {
    className: Field_el('content'),
    "data-test-id": dataTestId(testId, 'content')
  }, children));
};
Field.propTypes = {
  label: prop_types_default.a.string
};
/* harmony default export */ var Field_Field = (Object(react["memo"])(Field));
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/Field/index.js

/* harmony default export */ var molecules_Field = (Field_Field);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/IconButton/IconButton.js




const IconButton = props => {
  return react_default.a.createElement(molecules_Button, Object.assign({
    size: 's'
  }, props));
};

/* harmony default export */ var IconButton_IconButton = (IconButton);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/IconButton/index.js

/* harmony default export */ var molecules_IconButton = (IconButton_IconButton);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/Divider/Divider.js



function Divider_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const {
  cnBlock: Divider_cnBlock
} = bem_browser('divider');

const Divider = (_ref) => {
  let {
    className,
    mods,
    vertical
  } = _ref,
      restProps = Divider_objectWithoutPropertiesLoose(_ref, ["className", "mods", "vertical"]);

  return react_default.a.createElement(Box_Box, Object.assign({
    className: Divider_cnBlock(className, mods, {
      vertical
    })
  }, restProps));
};

Divider.propTypes = {
  vertical: prop_types_default.a.bool
};
/* harmony default export */ var Divider_Divider = (Divider);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/Divider/index.js

/* harmony default export */ var molecules_Divider = (Divider_Divider);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/Card/components/CardHeader.js


function CardHeader_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const {
  cnBlock: CardHeader_cnBlock
} = bem_browser('card-header');

const CardHeader = (_ref) => {
  let {
    className,
    mods
  } = _ref,
      props = CardHeader_objectWithoutPropertiesLoose(_ref, ["className", "mods"]);

  return react_default.a.createElement(atoms_Box, Object.assign({
    align: 'center',
    direction: 'row',
    className: CardHeader_cnBlock(className, mods)
  }, props));
};

/* harmony default export */ var components_CardHeader = (CardHeader);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/Card/components/CardActions.js


function CardActions_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const {
  cnBlock: CardActions_cnBlock
} = bem_browser('card-actions');

const CardActions = (_ref) => {
  let {
    className,
    mods
  } = _ref,
      props = CardActions_objectWithoutPropertiesLoose(_ref, ["className", "mods"]);

  return react_default.a.createElement(atoms_Box, Object.assign({
    padding: 's',
    direction: 'row',
    className: CardActions_cnBlock(className, mods)
  }, props));
};

/* harmony default export */ var components_CardActions = (CardActions);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/Card/components/CardBody.js


function CardBody_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const {
  cnBlock: CardBody_cnBlock
} = bem_browser('card-body');

const CardBody = (_ref) => {
  let {
    className,
    mods
  } = _ref,
      props = CardBody_objectWithoutPropertiesLoose(_ref, ["className", "mods"]);

  return react_default.a.createElement(atoms_Box, Object.assign({
    padding: 's',
    className: CardBody_cnBlock(className, mods)
  }, props));
};

/* harmony default export */ var components_CardBody = (CardBody);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/Card/components/index.js




// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/Card/Card.js


function Card_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const {
  cnBlock: Card_cnBlock
} = bem_browser('card');

const Card = (_ref) => {
  let {
    className,
    mods
  } = _ref,
      props = Card_objectWithoutPropertiesLoose(_ref, ["className", "mods"]);

  return react_default.a.createElement(atoms_Box, Object.assign({
    elevation: 1,
    color: 'basic-1',
    className: Card_cnBlock(className, mods)
  }, props));
};

Card.Header = components_CardHeader;
Card.Body = components_CardBody;
Card.Actions = components_CardActions;
/* harmony default export */ var Card_Card = (Card);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/Card/index.js


/* harmony default export */ var molecules_Card = (Card_Card);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/List/components/ListItem.js


function ListItem_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const {
  cnBlock: ListItem_cnBlock
} = bem_browser('list-item');

const ListItem = (_ref) => {
  let {
    className,
    mods
  } = _ref,
      props = ListItem_objectWithoutPropertiesLoose(_ref, ["className", "mods"]);

  return react_default.a.createElement(atoms_Box, Object.assign({
    padding: 'x-m',
    justify: 'center',
    className: ListItem_cnBlock(className, mods)
  }, props));
};

/* harmony default export */ var components_ListItem = (ListItem);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/List/components/index.js


// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/List/List.js


function List_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const {
  cnBlock: List_cnBlock
} = bem_browser('list');

const List = (_ref) => {
  let {
    className,
    mods
  } = _ref,
      props = List_objectWithoutPropertiesLoose(_ref, ["className", "mods"]);

  return react_default.a.createElement(atoms_Box, Object.assign({
    className: List_cnBlock(className, mods)
  }, props));
};

List.Item = components_ListItem;
/* harmony default export */ var List_List = (List);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/List/index.js


/* harmony default export */ var molecules_List = (List_List);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/BaseToggle/index.js



function BaseToggle_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const BaseToggle = (_ref) => {
  let {
    children,
    checked,
    reverse,
    onChange,
    disabled
  } = _ref,
      props = BaseToggle_objectWithoutPropertiesLoose(_ref, ["children", "checked", "reverse", "onChange", "disabled"]);

  const direction = reverse ? 'row-reverse' : 'row';

  const handleKeyDown = e => {
    if (e.key === 'Enter' && onChange) {
      onChange(e);
    }
  };

  const handleChange = e => {
    if (!disabled && onChange) {
      onChange(e);
    }
  };

  return react_default.a.createElement(molecules_Focusable, Object.assign({
    outline: !disabled,
    onKeyDown: handleKeyDown
  }, props), react_default.a.createElement(atoms_Box, {
    tag: 'label',
    align: 'center',
    direction: direction,
    style: {
      cursor: 'pointer'
    }
  }, react_default.a.createElement("input", {
    type: 'checkbox',
    checked: checked,
    onChange: handleChange
  }), children));
};

BaseToggle.propTypes = {
  checked: prop_types_default.a.bool,
  reverse: prop_types_default.a.bool,
  disabled: prop_types_default.a.bool
};
/* harmony default export */ var molecules_BaseToggle = (BaseToggle);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/Checkbox/Checkbox.js




function Checkbox_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Checkbox_toPropertyKey(arg) { var key = Checkbox_toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function Checkbox_toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }






const {
  cnBlock: Checkbox_cnBlock,
  el: Checkbox_el
} = bem_browser('checkbox');

const BasicCheckbox = ({
  checked,
  icon
}) => react_default.a.createElement(atoms_Box, {
  border: 'all',
  borderWidth: 1,
  alignContent: 'cc',
  className: Checkbox_el('basic', {
    checked
  })
}, checked && react_default.a.createElement(atoms_Icon, {
  size: 'xs',
  icon: icon,
  color: 'light'
}));

const TileCheckbox = ({
  checked
}) => react_default.a.createElement(atoms_Box, {
  border: 'all',
  borderWidth: 1,
  alignContent: 'cc',
  className: Checkbox_el('tile', {
    checked
  })
});

const ToggleCheckbox = ({
  checked
}) => react_default.a.createElement(atoms_Box, {
  alignContent: 'cc',
  className: Checkbox_el('toggle', {
    checked
  })
}, react_default.a.createElement("div", {
  className: Checkbox_el('toggle-track')
}, react_default.a.createElement("div", {
  className: Checkbox_el('toggle-btn')
})));

const componentsByVariant = {
  basic: BasicCheckbox,
  tile: TileCheckbox,
  toggle: ToggleCheckbox
};
const Checkbox = (_ref) => {
  let {
    className,
    mods,
    label,
    labelPosition = 'right',
    variant = 'basic',
    icon = 'check',
    disabled,
    [DATA_TEST_ID]: testId
  } = _ref,
      props = Checkbox_objectWithoutPropertiesLoose(_ref, ["className", "mods", "label", "labelPosition", "reverse", "variant", "icon", "disabled", DATA_TEST_ID].map(Checkbox_toPropertyKey));

  const Component = componentsByVariant[variant] || componentsByVariant.basic;
  return react_default.a.createElement(molecules_BaseToggle, Object.assign({
    disabled: disabled,
    "data-test-id": testId,
    reverse: labelPosition === 'left',
    className: Checkbox_cnBlock(className, mods, {
      disabled
    })
  }, props), react_default.a.createElement(Component, {
    icon: icon,
    checked: props.checked,
    "data-test-id": dataTestId(testId, 'content')
  }), label && react_default.a.createElement(atoms_Box, {
    padding: 'x-s',
    className: Checkbox_el('label')
  }, react_default.a.createElement(atoms_Text, {
    truncate: true,
    "data-test-id": dataTestId(testId, 'label')
  }, label)));
};
Checkbox.propTypes = {
  labelPosition: prop_types_default.a.oneOf(['left', 'right']),
  variant: prop_types_default.a.oneOf(['basic', 'tile', 'toggle']),
  checked: prop_types_default.a.bool,
  disabled: prop_types_default.a.bool,
  icon: prop_types_default.a.string,
  label: prop_types_default.a.string,
  onChange: prop_types_default.a.func
};
/* harmony default export */ var Checkbox_Checkbox = (Object(react["memo"])(Checkbox));
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/Checkbox/index.js

/* harmony default export */ var molecules_Checkbox = (Checkbox_Checkbox);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/Popup/DumbPopup.js




function DumbPopup_extends() { DumbPopup_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return DumbPopup_extends.apply(this, arguments); }

function DumbPopup_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const {
  cnBlock: DumbPopup_cnBlock
} = bem_browser('popup');
const CardWithRef = withForwardedRef(molecules_Card);

const clamp = (x, min, max) => Math.min(Math.max(x, min), max);

class DumbPopup_DumbPopup extends react["Component"] {
  constructor(...args) {
    super(...args);
    this.rootRef = Object(react["createRef"])();
    this.windowSize = {
      width: 0,
      height: 0
    };
    this.position = {
      x: 0,
      y: 0
    };

    this.handleDragStart = (e, data) => {
      const {
        onDragStart = () => undefined
      } = this.props;
      onDragStart(e, data);
    };

    this.handleDragMove = (e, data) => {
      e.preventDefault();
      const {
        position
      } = this;
      const {
        onDrag = () => undefined
      } = this.props;
      this.setPosition(position.x + data.lastDeltaX, position.y + data.lastDeltaY);
      onDrag(e, data);
    };

    this.handleDragEnd = (e, data) => {
      const {
        onDragEnd = () => undefined
      } = this.props;
      onDragEnd(e, data);
    };

    this.handleResizeWindow = () => {
      const {
        width: OW,
        height: OH
      } = this.windowSize;
      const {
        innerWidth: W,
        innerHeight: H
      } = window;
      const {
        width: w,
        height: h
      } = this.getPopupSize();
      let {
        x,
        y
      } = this.position;

      if (x + w / 2 > W / 2) {
        x += W - OW;
      }

      if (y + h / 2 > H / 2) {
        y += H - OH;
      }

      this.setPosition(x, y);
      this.setWindowSize(W, H);
    };
  }

  get transform() {
    const {
      x,
      y
    } = this.position;
    return "translate(".concat(x, "px, ").concat(y, "px)");
  }

  componentDidMount() {
    const {
      anchorRect
    } = this.props;
    const {
      innerWidth: W,
      innerHeight: H
    } = window;
    const {
      width: w,
      height: h
    } = this.getPopupSize();
    const defaultPosition = {
      left: W / 2 - w / 2,
      top: H / 2 - h / 2
    };
    const {
      left: ax,
      top: ay,
      width: aw = 0,
      height: ah = 0,
      padding = 0
    } = anchorRect || defaultPosition;
    const cx = ax + aw / 2;
    const cy = ay + ah / 2;
    const dropLeft = cx > W / 2;
    const dropUp = cy > H / 2;
    const xPos = dropLeft ? clamp(ax - w - padding, 0, W - w) : clamp(ax + aw + padding, 0, W - w);
    const yPos = dropUp ? clamp(ay + ah - h, 0, H - h) : clamp(ay, 0, H - h);
    window.addEventListener('resize', this.handleResizeWindow);
    this.setWindowSize(W, H);
    this.setPosition(xPos, yPos);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResizeWindow);
  }

  getPopupSize() {
    var _this$rootRef$current;

    const {
      width = 0,
      height = 0
    } = ((_this$rootRef$current = this.rootRef.current) == null ? void 0 : _this$rootRef$current.getBoundingClientRect()) || {};
    return {
      width,
      height
    };
  }

  setPosition(x, y) {
    const {
      current: rootElement
    } = this.rootRef;

    if (rootElement === null) {
      return;
    }

    this.position.x = Math.round(x);
    this.position.y = Math.round(y);
    rootElement.style.transform = this.transform;
  }

  setWindowSize(width, height) {
    this.windowSize.width = width;
    this.windowSize.height = height;
  }

  render() {
    const _this$props = this.props,
          {
      className,
      mods,
      style,
      header,
      children
    } = _this$props,
          restProps = DumbPopup_objectWithoutPropertiesLoose(_this$props, ["className", "mods", "style", "header", "children", "anchorRect", "onDragStart", "onDrag", "onDragEnd"]);

    return react_default.a.createElement(CardWithRef, Object.assign({
      ref: this.rootRef,
      className: DumbPopup_cnBlock(className, mods),
      style: DumbPopup_extends({}, style, {
        position: 'fixed',
        left: 0,
        top: 0,
        transform: this.transform,
        userSelect: 'none'
      })
    }, restProps), header && react_default.a.createElement(Draggable_Draggable, {
      rootRef: this.rootRef,
      onStart: this.handleDragStart,
      onDrag: this.handleDragMove,
      onStop: this.handleDragEnd
    }, header), children);
  }

}
DumbPopup_DumbPopup.propTypes = {
  header: prop_types_default.a.node,
  onDragStart: prop_types_default.a.func,
  onDragEnd: prop_types_default.a.func,
  onDrag: prop_types_default.a.func,
  anchorRect: prop_types_default.a.shape({
    top: prop_types_default.a.number.isRequired,
    left: prop_types_default.a.number.isRequired,
    height: prop_types_default.a.number,
    width: prop_types_default.a.number,
    padding: prop_types_default.a.number
  })
};
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/Popup/Popup.js




const Popup = props => {
  return react_default.a.createElement(molecules_ThemedPortal, null, react_default.a.createElement(DumbPopup_DumbPopup, props));
};

/* harmony default export */ var Popup_Popup = (Popup);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/Popup/index.js


/* harmony default export */ var molecules_Popup = (Popup_Popup);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/Grid/Row/Row.js


function Row_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const {
  cnBlock: Row_cnBlock
} = bem_browser('row');

const Row = (_ref) => {
  let {
    className,
    mods
  } = _ref,
      restProps = Row_objectWithoutPropertiesLoose(_ref, ["className", "mods"]);

  return react_default.a.createElement(atoms_Box, Object.assign({
    wrap: 'wrap',
    direction: 'row',
    className: Row_cnBlock(className, mods)
  }, restProps));
};

/* harmony default export */ var Row_Row = (Row);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/Grid/Row/index.js

/* harmony default export */ var Grid_Row = (Row_Row);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/Grid/Col/Col.js



function Col_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const {
  cnBlock: Col_cnBlock
} = bem_browser('col');

const Col = (_ref) => {
  let {
    className,
    mods,
    grow,
    shrink
  } = _ref,
      restProps = Col_objectWithoutPropertiesLoose(_ref, ["className", "mods", "grow", "shrink"]);

  return react_default.a.createElement(atoms_Box, Object.assign({
    className: Col_cnBlock(className, mods, {
      grow,
      shrink
    })
  }, restProps));
};

Col.propTypes = {
  grow: prop_types_default.a.bool,
  shrink: prop_types_default.a.bool
};
/* harmony default export */ var Col_Col = (Col);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/Grid/Col/index.js

/* harmony default export */ var Grid_Col = (Col_Col);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/Grid/Spacer/Spacer.js


function Spacer_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const {
  cnBlock: Spacer_cnBlock
} = bem_browser('spacer');

const Spacer = (_ref) => {
  let {
    className,
    mods
  } = _ref,
      restProps = Spacer_objectWithoutPropertiesLoose(_ref, ["className", "mods"]);

  return react_default.a.createElement("div", Object.assign({
    className: Spacer_cnBlock(className, mods)
  }, restProps));
};

/* harmony default export */ var Spacer_Spacer = (Spacer);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/Grid/Spacer/index.js

/* harmony default export */ var Grid_Spacer = (Spacer_Spacer);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/Grid/index.js




// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/molecules/index.js





















// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/themes/index.js


// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/types.js

// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/index.js




// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-range-slider/lib/2d/context.js



var RangeSliderContext2D = react_default.a.createContext({
    xCoordinateSystem: new coordinateSystem(0, 1, 0, 1),
    yCoordinateSystem: new coordinateSystem(0, 1, 0, 1)
});
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-range-slider/lib/2d/Area.js
var Area_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Area_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function Area_objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Area_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Area_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Area_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var Area_mouseEvents = ['onClick', 'onMouseMove', 'onMouseDown', 'onMouseUp', 'onMouseEnter', 'onMouseLeave'];

var Area_Area = function (_React$Component) {
    Area_inherits(Area, _React$Component);

    function Area(props) {
        Area_classCallCheck(this, Area);

        var _this = Area_possibleConstructorReturn(this, (Area.__proto__ || Object.getPrototypeOf(Area)).call(this, props));

        _this.mouseXVal = function (e) {
            return _this.xCoordinateSystem.s2dPos(e.pageX - _this.offsetX.value);
        };

        _this.mouseYVal = function (e) {
            return _this.yCoordinateSystem.s2dPos(e.pageY - _this.offsetY.value);
        };

        var xDomain = props.xDomain,
            yDomain = props.yDomain,
            width = props.width,
            height = props.height;

        _this.xCoordinateSystem = new coordinateSystem(xDomain[0], xDomain[1] - xDomain[0], 0, width || 1);
        _this.yCoordinateSystem = new coordinateSystem(yDomain[0], yDomain[1] - yDomain[0], 0, height || 1);
        _this.offsetX = new lib_Validatable();
        _this.offsetY = new lib_Validatable();

        var mouseHandlers = {};
        Area_mouseEvents.forEach(function (eventName) {
            mouseHandlers[eventName] = _this.mouseHandler(eventName);
        });

        _this.mouseHandlers = mouseHandlers;
        return _this;
    }

    Area_createClass(Area, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.updateCoordinateSystem();
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
            return !shallowEqual(this.props, nextProps) || !equalDomains(this.props.xDomain, nextProps.xDomain) || !equalDomains(this.props.yDomain, nextProps.yDomain);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.updateCoordinateSystem();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.xCoordinateSystem.active = false;
            this.yCoordinateSystem.active = false;
            this.offsetX.active = false;
            this.offsetY.active = false;
        }
    }, {
        key: 'updateCoordinateSystem',
        value: function updateCoordinateSystem() {
            var _this2 = this;

            this.offsetX.invalidate(function () {
                return getOffsetX(_this2.refs.root);
            });
            this.offsetY.invalidate(function () {
                return getOffsetY(_this2.refs.root);
            });

            this.xCoordinateSystem.invalidateScreen(function () {
                _this2.xCoordinateSystem.screen(0, _this2.props.width || _this2.refs.root.offsetWidth);
            });
            this.yCoordinateSystem.invalidateScreen(function () {
                _this2.yCoordinateSystem.screen(0, _this2.props.height || _this2.refs.root.offsetHeight);
            });
        }
    }, {
        key: 'mouseHandler',
        value: function mouseHandler(name) {
            var _this3 = this;

            return function (e) {
                if (_this3.props[name]) {
                    _this3.props[name](e, [_this3.mouseXVal(e), _this3.mouseYVal(e)]);
                }
            };
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                xDomain = _props.xDomain,
                yDomain = _props.yDomain,
                props = Area_objectWithoutProperties(_props, ['xDomain', 'yDomain']);

            this.xCoordinateSystem.domain(xDomain[0], xDomain[1] - xDomain[0]);
            this.yCoordinateSystem.domain(yDomain[0], yDomain[1] - yDomain[0]);
            return react_default.a.createElement(
                RangeSliderContext2D.Provider,
                { value: {
                        xCoordinateSystem: this.xCoordinateSystem,
                        yCoordinateSystem: this.yCoordinateSystem
                    } },
                react_default.a.createElement('div', Area_extends({}, props, this.mouseHandlers, {
                    ref: 'root' }))
            );
        }
    }]);

    return Area;
}(react_default.a.Component);

/* harmony default export */ var _2d_Area = (Area_Area);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-range-slider/lib/2d/StaticRect.js
var StaticRect_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var StaticRect_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function StaticRect_objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function StaticRect_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function StaticRect_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function StaticRect_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var StaticRect_StaticRect = function (_React$PureComponent) {
    StaticRect_inherits(StaticRect, _React$PureComponent);

    function StaticRect() {
        StaticRect_classCallCheck(this, StaticRect);

        return StaticRect_possibleConstructorReturn(this, (StaticRect.__proto__ || Object.getPrototypeOf(StaticRect)).apply(this, arguments));
    }

    StaticRect_createClass(StaticRect, [{
        key: 'posStyle',
        value: function posStyle(context) {
            var _this2 = this;

            var acc = {};
            var prop = function prop(axis, csOp, styleName) {
                if (typeof _this2.props[styleName] === 'number') {
                    acc[styleName] = context[axis + 'CoordinateSystem']['dNorm' + csOp](_this2.props[styleName]) * 100 + '%';
                }
            };
            prop('x', 'Pos', 'left');
            prop('x', 'Pos2', 'right');
            prop('x', 'Len', 'width');
            prop('y', 'Pos', 'top');
            prop('y', 'Pos2', 'bottom');
            prop('y', 'Len', 'height');

            return acc;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props = this.props,
                style = _props.style,
                left = _props.left,
                top = _props.top,
                right = _props.right,
                bottom = _props.bottom,
                width = _props.width,
                height = _props.height,
                props = StaticRect_objectWithoutProperties(_props, ['style', 'left', 'top', 'right', 'bottom', 'width', 'height']);

            return react_default.a.createElement(
                RangeSliderContext2D.Consumer,
                null,
                function (context) {
                    return react_default.a.createElement('div', StaticRect_extends({}, props, {
                        style: StaticRect_extends({}, style, _this3.posStyle(context)) }));
                }
            );
        }
    }]);

    return StaticRect;
}(react_default.a.PureComponent);

/* harmony default export */ var _2d_StaticRect = (StaticRect_StaticRect);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-range-slider/lib/2d/DraggableRect.js
function DraggableRect_objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






var DraggableRect_noop = function noop() {};

var DraggableRect_DraggableRect = react_default.a.memo(react_default.a.forwardRef(function DraggableRect(_ref, ref) {
    var _ref$onDragStart = _ref.onDragStart,
        onDragStart = _ref$onDragStart === undefined ? DraggableRect_noop : _ref$onDragStart,
        _ref$onDragEnd = _ref.onDragEnd,
        onDragEnd = _ref$onDragEnd === undefined ? DraggableRect_noop : _ref$onDragEnd,
        _ref$onDrag = _ref.onDrag,
        onDrag = _ref$onDrag === undefined ? DraggableRect_noop : _ref$onDrag,
        restProps = DraggableRect_objectWithoutProperties(_ref, ['onDragStart', 'onDragEnd', 'onDrag']);

    var _useContext = Object(react["useContext"])(RangeSliderContext2D),
        xCoordinateSystem = _useContext.xCoordinateSystem,
        yCoordinateSystem = _useContext.yCoordinateSystem;

    var useEventHandler = function useEventHandler(eventHandler) {
        return Object(react["useCallback"])(function (e, _ref2) {
            var x = _ref2.x,
                y = _ref2.y;

            var coords = [xCoordinateSystem.s2dPos(x), yCoordinateSystem.s2dPos(y)];
            eventHandler(coords, e);
        }, [eventHandler]);
    };

    return react_default.a.createElement(
        Draggable_Draggable,
        { onStart: useEventHandler(onDragStart),
            onDrag: useEventHandler(onDrag),
            onStop: useEventHandler(onDragEnd),
            ref: ref },
        react_default.a.createElement(_2d_StaticRect, restProps)
    );
}));

/* harmony default export */ var _2d_DraggableRect = (DraggableRect_DraggableRect);
// CONCATENATED MODULE: /home/kirill/projects/industrial/node_modules/fr-range-slider/lib/2d/index.js





// CONCATENATED MODULE: ./node_modules/wg-fps-stats/lib/view/PlotSvg.js



const renderPoints = (context, points) => {
  const {
    xCoordinateSystem,
    yCoordinateSystem
  } = context;
  const ps = points;

  const onePoint = p => `${xCoordinateSystem.d2sPos(p.time)},${yCoordinateSystem.d2sPos(p.value)} `;

  return ps.reduce((acc, p, i) => {
    if (i === 0) return acc;
    return acc + onePoint(p);
  }, onePoint(ps[0]));
};

const PlotSvg = ({
  points = [],
  className
}) => {
  if (points.length === 0) {
    return null;
  }

  return react_default.a.createElement(RangeSliderContext2D.Consumer, null, context => {
    const {
      xCoordinateSystem,
      yCoordinateSystem
    } = context;
    const xMax = xCoordinateSystem._sLen;
    const yMax = yCoordinateSystem._sLen;
    return react_default.a.createElement("svg", {
      viewBox: `0 0 ${xMax} ${yMax}`,
      className: className
    }, react_default.a.createElement("polyline", {
      points: renderPoints(context, points)
    }));
  });
};

/* harmony default export */ var view_PlotSvg = (PlotSvg);
// EXTERNAL MODULE: ./node_modules/wg-fps-stats/lib/view/Markers.sass
var Markers = __webpack_require__(377);

// CONCATENATED MODULE: ./node_modules/wg-fps-stats/lib/view/Markers.js




const {
  block
} = bem_browser('marker');

const Markers_Markers = ({
  markers
}) => {
  return react_default.a.createElement(react["Fragment"], null, markers.map(marker => {
    return react_default.a.createElement(_2d_StaticRect, {
      className: block(),
      style: {
        color: marker.color
      },
      key: marker.id,
      left: marker.time
    }, marker.content);
  }));
};

/* harmony default export */ var view_Markers = (Markers_Markers);
// EXTERNAL MODULE: ./node_modules/wg-fps-stats/lib/view/Spans.sass
var Spans = __webpack_require__(379);

// CONCATENATED MODULE: ./node_modules/wg-fps-stats/lib/view/Spans.js




const {
  block: Spans_block
} = bem_browser('span');

const Spans_Spans = ({
  spans
}) => {
  return react_default.a.createElement(react["Fragment"], null, spans.map(spans => {
    return react_default.a.createElement(_2d_StaticRect, {
      className: Spans_block(),
      style: {
        backgroundColor: spans.backgroundColor
      },
      key: spans.id,
      left: spans.startTime,
      right: Math.min(spans.endTime, performance.now())
    }, spans.content);
  }));
};

/* harmony default export */ var view_Spans = (Spans_Spans);
// EXTERNAL MODULE: ./node_modules/wg-fps-stats/lib/view/StatsPlot.sass
var StatsPlot = __webpack_require__(381);

// CONCATENATED MODULE: ./node_modules/wg-fps-stats/lib/view/StatsPlot.js
function StatsPlot_extends() { StatsPlot_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return StatsPlot_extends.apply(this, arguments); }

function StatsPlot_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const {
  cnBlock: StatsPlot_cnBlock,
  el: StatsPlot_el
} = bem_browser('stats-plot');

const StatsPlot_StatsPlot = (_ref) => {
  let {
    className,
    mods,
    min = 0,
    max = 100,
    color,
    viewData,
    timeWindowSize = 10000,
    currentTime
  } = _ref,
      restProps = StatsPlot_objectWithoutPropertiesLoose(_ref, ["className", "mods", "min", "max", "color", "viewData", "timeWindowSize", "currentTime"]);

  const yDomain = [max, min];
  const xDomain = [currentTime - timeWindowSize, currentTime];
  return react_default.a.createElement(atoms_Box, StatsPlot_extends({
    border: 'bottom',
    borderColor: 'basic-1',
    className: StatsPlot_cnBlock(className, mods)
  }, restProps), react_default.a.createElement(_2d_Area, {
    xDomain: xDomain,
    yDomain: yDomain,
    width: 300,
    height: 80,
    className: StatsPlot_el('plot')
  }, react_default.a.createElement(view_Markers, {
    markers: viewData.markers
  }), react_default.a.createElement(view_Spans, {
    spans: viewData.spans
  }), react_default.a.createElement(view_PlotSvg, {
    color: color,
    className: StatsPlot_el('svg'),
    points: viewData.points.map(p => ({
      time: p.timestamp,
      value: p.fpsData.windowedFps
    }))
  })));
};

/* harmony default export */ var view_StatsPlot = (StatsPlot_StatsPlot);
// EXTERNAL MODULE: /home/kirill/projects/industrial/node_modules/fr-ui-kit/lib/themes/base/index.sass
var base = __webpack_require__(383);

// EXTERNAL MODULE: ./node_modules/wg-fps-stats/lib/view/StatsPanel.sass
var StatsPanel = __webpack_require__(385);

// CONCATENATED MODULE: ./node_modules/wg-fps-stats/lib/view/StatsPanel.js
function StatsPanel_extends() { StatsPanel_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return StatsPanel_extends.apply(this, arguments); }

function StatsPanel_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const {
  cnBlock: StatsPanel_cnBlock,
  el: StatsPanel_el
} = bem_browser('stats-panel');

const rInfoLine = (title, value) => react_default.a.createElement(atoms_Box, {
  direction: 'row'
}, react_default.a.createElement(atoms_Box, {
  margin: 'r-s'
}, react_default.a.createElement(atoms_Text, {
  size: 's',
  color: 'basic-2'
}, `${title}:`)), react_default.a.createElement(atoms_Text, {
  size: 's',
  color: 'basic-1'
}, value));

const StatsPanel_StatsPanel = observer((_ref) => {
  let {
    className,
    mods,
    stats,
    initiallyExpanded = true
  } = _ref,
      restProps = StatsPanel_objectWithoutPropertiesLoose(_ref, ["className", "mods", "stats", "initiallyExpanded"]);

  const currentTime = performance.now();
  const currentFrame = stats.viewData.points[stats.viewData.points.length - 1];
  const fps = stats.fpsCounter().windowedFps;
  const [isExpanded, setExpanded] = react_default.a.useState(initiallyExpanded);
  return react_default.a.createElement(themes_Theme_Theme, StatsPanel_extends({
    theme: 'dark',
    className: StatsPanel_cnBlock(className, mods)
  }, restProps), react_default.a.createElement(atoms_Box, {
    direction: 'row',
    onClick: () => setExpanded(!isExpanded)
  }, react_default.a.createElement(molecules_Highlighter, {
    padding: 's',
    className: StatsPanel_el('trigger')
  }, react_default.a.createElement(atoms_Text, null, `FPS: ${fps}`))), isExpanded && react_default.a.createElement(atoms_Box, {
    className: StatsPanel_el('content')
  }, react_default.a.createElement(view_StatsPlot, {
    min: 0,
    max: 80,
    viewData: stats.viewData,
    currentTime: currentTime,
    timeWindowSize: stats.storedWindowSize,
    className: StatsPanel_el('plot')
  }), currentFrame && react_default.a.createElement(atoms_Box, {
    padding: 's',
    direction: 'row'
  }, react_default.a.createElement(atoms_Box, {
    className: StatsPanel_el('col')
  }, rInfoLine('Draw calls', currentFrame.stats.drawCallCount), rInfoLine('Instances', currentFrame.stats.instanceCount), rInfoLine('Materials', currentFrame.stats.materialCount)), react_default.a.createElement(atoms_Box, {
    className: StatsPanel_el('col')
  }, rInfoLine('Sub passes', currentFrame.stats.subpassCount), rInfoLine('Vertices', currentFrame.stats.vertexCount), rInfoLine('Programs', currentFrame.stats.programCount)))));
});
/* harmony default export */ var view_StatsPanel = (StatsPanel_StatsPanel);
// CONCATENATED MODULE: ./node_modules/wg-fps-stats/lib/index.js



// EXTERNAL MODULE: ./src/extensions/stats/index.css
var extensions_stats = __webpack_require__(387);

// CONCATENATED MODULE: ./src/extensions/stats/index.tsx
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const StatsComponent = observer(props => {
  const {
    enabled,
    style
  } = props.store.stats;

  if (!enabled) {
    return null;
  }

  return /*#__PURE__*/react_default.a.createElement(view_StatsPanel, {
    stats: props.statsModel,
    initiallyExpanded: true,
    style: style
  });
});
/**
 * Allows to show render stats.
 *
 * @public
 */

class stats_StatsExtension {
  /** @internal */

  /** @internal */

  /** @internal */

  /** @internal */
  constructor(api, app) {
    _defineProperty(this, "_app", void 0);

    _defineProperty(this, "_statsModel", void 0);

    _defineProperty(this, "_uiContainer", void 0);

    // eslint-disable-line @typescript-eslint/no-explicit-any
    this._app = app;
    this._statsModel = new StatsModel_StatsModel();
    const domElement = document.createElement('div');

    this._app.container.appendChild(domElement);

    this._uiContainer = domElement;

    this._initReactDom();

    this._addListeners();

    this._app.store.stats.registerExtension();
  }
  /** @internal */


  _addListeners() {
    this._app.layers.onDrawEnd.subscribe(() => {
      if (!this._app.store.stats.works) {
        return;
      }

      this._statsModel.dataTick(this._app.layers.layer3dMain.statistics);

      this._statsModel.viewTick();
    });

    let endMarker;
    Object(mobx_module["h" /* reaction */])(() => this._app.store.stats.needsUpdate, needsUpdate => {
      if (needsUpdate) {
        endMarker = this._statsModel.startSpan({
          content: '',
          backgroundColor: 'rgba(92, 218, 195, 0.5)'
        });
      } else {
        endMarker();
      }
    });
    Object(mobx_module["h" /* reaction */])(() => this._app.store.stats.systemsNeedsUpdate, systemsNeedsUpdate => {
      if (!systemsNeedsUpdate) {
        return;
      }

      this._statsModel.addMarker({
        content: '',
        color: 'rgba(255, 0, 0, 0.5)'
      });
    });
  }
  /** @internal */


  _initReactDom() {
    react_dom_default.a.render( /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(StatsComponent, {
      store: this._app.store,
      statsModel: this._statsModel
    })), this._uiContainer);
  }
  /** @internal */


  dispose() {
    this._uiContainer.remove();
  }

}

if (window.industrialViewer) {
  if (!window.industrialViewer.extensions) {
    window.industrialViewer.extensions = {};
  }

  window.industrialViewer.extensions.Stats = stats_StatsExtension;
}

/***/ })
/******/ ]);
});