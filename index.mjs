// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.2-esm/index.mjs";function n(r,e,n,i,a){var d,o,m,f,l,c,j;if(r<=0)return 0;if((c=t(n)).accessorProtocol)return function(r,e,t,n,i){var a,d,o,m,f,l,c,j;if(a=t.data,d=t.accessors[0],m=i,0===n)return r*(e+d(a,m));for(o=0,c=0,j=0;j<r;j++)l=o+(f=e+d(a,m)),s(o)>=s(f)?c+=o-l+f:c+=f-l+o,o=l,m+=n;return o+c}(r,e,c,i,a);if(o=a,0===i)return r*(e+n[o]);for(d=0,l=0,j=0;j<r;j++)f=d+(m=e+n[o]),s(d)>=s(m)?l+=d-f+m:l+=m-f+d,d=f,o+=i;return d+l}function i(r,t,s,i){return n(r,t,s,i,e(r,i))}r(i,"ndarray",n);export{i as default,n as ndarray};
//# sourceMappingURL=index.mjs.map
