"use strict";var b=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var g=b(function(F,y){
var m=require('@stdlib/math-base-special-abs/dist');function O(a,r,i,t,f){var u,n,e,v,s,c,o,q;if(u=i.data,n=i.accessors[0],v=f,t===0)return a*(r+n(u,v));for(e=0,o=0,q=0;q<a;q++)s=r+n(u,v),c=e+s,m(e)>=m(s)?o+=e-c+s:o+=s-c+e,e=c,v+=t;return e+o}y.exports=O
});var x=b(function(G,p){
var P=require('@stdlib/array-base-arraylike2object/dist'),k=require('@stdlib/math-base-special-abs/dist'),R=g();function w(a,r,i,t,f){var u,n,e,v,s,c,o;if(a<=0)return 0;if(c=P(i),c.accessorProtocol)return R(a,r,c,t,f);if(n=f,t===0)return a*(r+i[n]);for(u=0,s=0,o=0;o<a;o++)e=r+i[n],v=u+e,k(u)>=k(e)?s+=u-v+e:s+=e-v+u,u=v,n+=t;return u+s}p.exports=w
});var l=b(function(H,d){
var z=require('@stdlib/strided-base-stride2offset/dist'),A=x();function B(a,r,i,t){return A(a,r,i,t,z(a,t))}d.exports=B
});var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=l(),D=x();C(j,"ndarray",D);module.exports=j;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
