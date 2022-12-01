// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.0.13-esm/index.mjs";import{factory as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-mt19937@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import{isPrimitive as h}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.0.7-esm/index.mjs";function j(e,t){return h(e)?h(t)?null:new TypeError(a("0PA7T",t)):new TypeError(a("0PA7P",e))}function u(e,t,n){var s=e();return f(1-f(1-s,1/n),1/t)}function g(){var h,f,g,c,b,v;if(0===arguments.length)f=m();else if(1===arguments.length){if(!s(h=arguments[0]))throw new TypeError(a("0PA2h",h));if(i(h,"prng")){if(!r(h.prng))throw new TypeError(a("0PA7M","prng",h.prng));f=h.prng}else f=m(h)}else{if(c=j(b=arguments[0],v=arguments[1]))throw c;if(arguments.length>2){if(!s(h=arguments[2]))throw new TypeError(a("0PA2h",h));if(i(h,"prng")){if(!r(h.prng))throw new TypeError(a("0PA7M","prng",h.prng));f=h.prng}else f=m(h)}else f=m()}return e(g=void 0===b?T:E,"NAME","kumaraswamy"),h&&h.prng?(e(g,"seed",null),e(g,"seedLength",null),n(g,"state",o(null),d),e(g,"stateLength",null),e(g,"byteLength",null),e(g,"toJSON",o(null)),e(g,"PRNG",f)):(t(g,"seed",y),t(g,"seedLength",w),n(g,"state",L,N),t(g,"stateLength",x),t(g,"byteLength",P),e(g,"toJSON",A),e(g,"PRNG",f),f=f.normalized),g;function y(){return f.seed}function w(){return f.seedLength}function x(){return f.stateLength}function P(){return f.byteLength}function L(){return f.state}function N(e){f.state=e}function A(){var e={type:"PRNG"};return e.name=g.NAME,e.state=p(f.state),e.params=void 0===b?[]:[b,v],e}function E(){return u(f,b,v)}function T(e,t){return l(e)||l(t)||e<=0||t<=0?NaN:u(f,e,t)}}var c=g();e(c,"factory",g);export{c as default,g as factory};
//# sourceMappingURL=index.mjs.map
