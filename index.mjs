// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-mt19937@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";var h=p.isPrimitive;var f=function(e,t){return h(e)?h(t)?null:new TypeError("invalid argument. `b` must be a positive number. Value: `"+t+"`."):new TypeError("invalid argument. `a` must be a positive number. Value: `"+e+"`.")},g=u;var j=function(e,t,n){var r=e();return g(1-g(1-r,1/n),1/t)},c=e,b=t,v=n,y=r,w=s,x=i,L=o,N=m,E=a.factory,O=d,T=l,P=f,V=j;var G=function(){var e,t,n,r,s,i;if(0===arguments.length)t=E();else if(1===arguments.length){if(!y(e=arguments[0]))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(x(e,"prng")){if(!w(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=E(e)}else{if(r=P(s=arguments[0],i=arguments[1]))throw r;if(arguments.length>2){if(!y(e=arguments[2]))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(x(e,"prng")){if(!w(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=E(e)}else t=E()}return c(n=void 0===s?f:h,"NAME","kumaraswamy"),e&&e.prng?(c(n,"seed",null),c(n,"seedLength",null),v(n,"state",L(null),N),c(n,"stateLength",null),c(n,"byteLength",null),c(n,"toJSON",L(null)),c(n,"PRNG",t)):(b(n,"seed",o),b(n,"seedLength",m),v(n,"state",l,p),b(n,"stateLength",a),b(n,"byteLength",d),c(n,"toJSON",u),c(n,"PRNG",t),t=t.normalized),n;function o(){return t.seed}function m(){return t.seedLength}function a(){return t.stateLength}function d(){return t.byteLength}function l(){return t.state}function p(e){t.state=e}function u(){var e={type:"PRNG"};return e.name=n.NAME,e.state=T(t.state),e.params=void 0===s?[]:[s,i],e}function h(){return V(t,s,i)}function f(e,n){return O(e)||O(n)||e<=0||n<=0?NaN:V(t,e,n)}},R=G(),A=G;e(R,"factory",A);var J=R;export{J as default,A as factory};
//# sourceMappingURL=index.mjs.map
