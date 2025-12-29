"use strict";var t=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var n=t(function(g,s){
var c=require('@stdlib/blas-ext-base-gsumkbn/dist').ndarray;function d(r,e,u,a,v){return r<=0?0:r*e+c(r,u,a,v)}s.exports=d
});var o=t(function(k,i){
var f=require('@stdlib/strided-base-stride2offset/dist'),p=n();function x(r,e,u,a){return p(r,e,u,a,f(r,a))}i.exports=x
});var y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=o(),m=n();y(q,"ndarray",m);module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
