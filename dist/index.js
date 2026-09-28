"use strict";var t=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var n=t(function(g,s){
var c=require('@stdlib/blas-ext-base-gsumkbn/dist').ndarray;function d(e,r,a,u,v){return e<=0?0:e*r+c(e,a,u,v)}s.exports=d
});var o=t(function(k,i){
var f=require('@stdlib/strided-base-stride2offset/dist'),p=n();function x(e,r,a,u){return p(e,r,a,u,f(e,u))}i.exports=x
});var y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=o(),m=n();y(q,"ndarray",m);module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
