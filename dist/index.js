"use strict";var o=function(e,a){return function(){return a||e((a={exports:{}}).exports,a),a.exports}};var x=o(function(w,q){
var m=require('@stdlib/math-base-special-abs/dist');function k(e,a,f,s){var u,r,i,v,n,t;if(e<=0)return 0;if(e===1||s===0)return a+f[0];for(s<0?r=(1-e)*s:r=0,u=0,n=0,t=0;t<e;t++)i=a+f[r],v=u+i,m(u)>=m(i)?n+=u-v+i:n+=i-v+u,u=v,r+=s;return u+n}q.exports=k
});var y=o(function(z,p){
var b=require('@stdlib/math-base-special-abs/dist');function l(e,a,f,s,u){var r,i,v,n,t,c;if(e<=0)return 0;if(e===1||s===0)return a+f[u];for(i=u,r=0,t=0,c=0;c<e;c++)v=a+f[i],n=r+v,b(r)>=b(v)?t+=r-n+v:t+=v-n+r,r=n,i+=s;return r+t}p.exports=l
});var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=x(),R=y();O(g,"ndarray",R);module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
