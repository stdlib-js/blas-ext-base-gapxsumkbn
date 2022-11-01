// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";function n(r,n,t,s){var i,a,d,f,o,u;if(r<=0)return 0;if(1===r||0===s)return n+t[0];for(a=s<0?(1-r)*s:0,i=0,o=0,u=0;u<r;u++)f=i+(d=n+t[a]),e(i)>=e(d)?o+=i-f+d:o+=d-f+i,i=f,a+=s;return i+o}function t(r,n,t,s,i){var a,d,f,o,u,m;if(r<=0)return 0;if(1===r||0===s)return n+t[i];for(d=i,a=0,u=0,m=0;m<r;m++)o=a+(f=n+t[d]),e(a)>=e(f)?u+=a-o+f:u+=f-o+a,a=o,d+=s;return a+u}r(n,"ndarray",t);export{n as default,t as ndarray};
//# sourceMappingURL=index.mjs.map
