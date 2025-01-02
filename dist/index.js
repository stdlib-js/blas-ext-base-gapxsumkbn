"use strict";var c=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=c(function(w,x){
var q=require('@stdlib/math-base-special-abs/dist');function d(e,r,i,u,b){var a,n,t,s,v,f;if(e<=0)return 0;if(n=b,u===0)return e*(r+i[n]);for(a=0,v=0,f=0;f<e;f++)t=r+i[n],s=a+t,q(a)>=q(t)?v+=a-s+t:v+=t-s+a,a=s,n+=u;return a+v}x.exports=d
});var p=c(function(z,m){
var g=require('@stdlib/strided-base-stride2offset/dist'),k=o();function l(e,r,i,u){return k(e,r,i,u,g(e,u))}m.exports=l
});var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=p(),R=o();O(y,"ndarray",R);module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
