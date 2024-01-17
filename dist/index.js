"use strict";var o=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var y=o(function(_,d){
var f=require('@stdlib/assert-is-positive-number/dist').isPrimitive,c=require('@stdlib/error-tools-fmtprodmsg/dist');function B(r,e){return f(r)?f(e)?null:new TypeError(c('0oX72',e)):new TypeError(c('0oX71',r));}d.exports=B
});var w=o(function($,h){
var q=require('@stdlib/math-base-special-pow/dist');function C(r,e,t){var i=r();return q(1-q(1-i,1/t),1/e)}h.exports=C
});var l=o(function(ee,P){
var a=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=require('@stdlib/utils-define-nonenumerable-read-only-accessor/dist'),b=require('@stdlib/utils-define-nonenumerable-read-write-accessor/dist'),O=require('@stdlib/assert-is-plain-object/dist'),L=require('@stdlib/assert-is-function/dist'),S=require('@stdlib/assert-has-own-property/dist'),N=require('@stdlib/utils-constant-function/dist'),D=require('@stdlib/utils-noop/dist'),m=require('@stdlib/random-base-mt19937/dist').factory,E=require('@stdlib/math-base-assert-is-nan/dist'),H=require('@stdlib/array-to-json/dist'),p=require('@stdlib/error-tools-fmtprodmsg/dist'),I=y(),R=w();function K(){var r,e,t,i,u,s;if(arguments.length===0)e=m();else if(arguments.length===1){if(r=arguments[0],!O(r))throw new TypeError(p('0oX2V',r));if(S(r,"prng")){if(!L(r.prng))throw new TypeError(p('0oX6u',"prng",r.prng));e=r.prng}else e=m(r)}else{if(u=arguments[0],s=arguments[1],i=I(u,s),i)throw i;if(arguments.length>2){if(r=arguments[2],!O(r))throw new TypeError(p('0oX2V',r));if(S(r,"prng")){if(!L(r.prng))throw new TypeError(p('0oX6u',"prng",r.prng));e=r.prng}else e=m(r)}else e=m()}return u===void 0?t=W:t=M,a(t,"NAME","kumaraswamy"),r&&r.prng?(a(t,"seed",null),a(t,"seedLength",null),b(t,"state",N(null),D),a(t,"stateLength",null),a(t,"byteLength",null),a(t,"toJSON",N(null)),a(t,"PRNG",e)):(g(t,"seed",j),g(t,"seedLength",A),b(t,"state",G,J),g(t,"stateLength",V),g(t,"byteLength",F),a(t,"toJSON",z),a(t,"PRNG",e),e=e.normalized),t;function j(){return e.seed}function A(){return e.seedLength}function V(){return e.stateLength}function F(){return e.byteLength}function G(){return e.state}function J(n){e.state=n}function z(){var n={};return n.type="PRNG",n.name=t.NAME,n.state=H(e.state),u===void 0?n.params=[]:n.params=[u,s],n}function M(){return R(e,u,s)}function W(n,v){return E(n)||E(v)||n<=0||v<=0?NaN:R(e,n,v)}}P.exports=K
});var k=o(function(re,T){
var Q=l(),U=Q();T.exports=U
});var X=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=k(),Y=l();X(x,"factory",Y);module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
