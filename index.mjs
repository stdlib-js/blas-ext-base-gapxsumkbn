// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.2-esm/index.mjs";function s(e,r,s,n,i){var d,a,m,o,f,l;if(e<=0)return 0;if(a=i,0===n)return e*(r+s[a]);for(d=0,f=0,l=0;l<e;l++)o=d+(m=r+s[a]),t(d)>=t(m)?f+=d-o+m:f+=m-o+d,d=o,a+=n;return d+f}function n(e,t,n,i){return s(e,t,n,i,r(e,i))}e(n,"ndarray",s);export{n as default,s as ndarray};
//# sourceMappingURL=index.mjs.map
