if(!self.define){let s,e={};const n=(n,i)=>(n=new URL(n+".js",i).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(i,r)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let a={};const c=s=>n(s,l),o={module:{uri:l},exports:a,require:c};e[l]=Promise.all(i.map((s=>o[s]||c(s)))).then((s=>(r(...s),a)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"android-chrome-192x192.png",revision:"030b2d29cc281a5932e4ac46e8b5255f"},{url:"android-chrome-512x512.png",revision:"6f59b65bb73564c4247bb5a2275a0e48"},{url:"apple-touch-icon.png",revision:"2ccae0382e5f01e8dccb16a4f78d5899"},{url:"assets/_plugin-vue_export-helper-2334bea4.js",revision:null},{url:"assets/HomeView-d237a471.js",revision:null},{url:"assets/HomeView-e5f0304b.css",revision:null},{url:"assets/index-64de7234.js",revision:null},{url:"assets/index-9389998b.css",revision:null},{url:"assets/list-696216e2.js",revision:null},{url:"assets/ListView-006fb177.js",revision:null},{url:"assets/ListView-34e0fd84.css",revision:null},{url:"assets/materialdesignicons-webfont-48d3eec6.woff",revision:null},{url:"assets/materialdesignicons-webfont-861aea05.eot",revision:null},{url:"assets/materialdesignicons-webfont-bd725a7a.ttf",revision:null},{url:"assets/materialdesignicons-webfont-e52d60f6.woff2",revision:null},{url:"assets/settings-84dfce84.js",revision:null},{url:"assets/SettingsView-b198d151.css",revision:null},{url:"assets/SettingsView-bb2a0614.js",revision:null},{url:"assets/tomato-35122da0.png",revision:null},{url:"assets/VInput-8cc827e1.js",revision:null},{url:"assets/VInput-fe8650e4.css",revision:null},{url:"favicon-16x16.png",revision:"8d653f3ea54fe5f330eeab80b4c77540"},{url:"favicon-32x32.png",revision:"406262dcd05396915e5bc17820b3a24c"},{url:"favicon.ico",revision:"733d7c2e9ecff4dca9f33b3331147da1"},{url:"index.html",revision:"0d846a90d54787689c3ede3a19dc1783"},{url:"mstile-150x150.png",revision:"db4f83cdd3626afd1e7f6afcbc575d25"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"safari-pinned-tab.svg",revision:"e2912dccde079ffed089be481cdcc858"},{url:"splashscreens/splashscreens/ipad_splash.png",revision:"5455809d187137d926bbfb6e78f2fe2e"},{url:"splashscreens/splashscreens/ipadpro1_splash.png",revision:"3541cdd5fa498b931e94a7ba3acf8427"},{url:"splashscreens/splashscreens/ipadpro2_splash.png",revision:"b1036519f13e1a9991d401a772c6b8df"},{url:"splashscreens/splashscreens/ipadpro3_splash.png",revision:"f3bfb30870778ca1fd3886acea3c4ff1"},{url:"splashscreens/splashscreens/iphone5_splash.png",revision:"21cab011f562273c89d86b943380ed91"},{url:"splashscreens/splashscreens/iphone6_splash.png",revision:"2f26a71d05f90dfcdf912cd8f28b033f"},{url:"splashscreens/splashscreens/iphoneplus_splash.png",revision:"fe4d9bc5bd1e58974bc1a12ed4dab5f4"},{url:"splashscreens/splashscreens/iphonex_splash.png",revision:"9b9727b5efb7c65fd652675c3eb02687"},{url:"splashscreens/splashscreens/iphonexr_splash.png",revision:"f4ff0e86b4537c06846dbd820353aaf8"},{url:"splashscreens/splashscreens/iphonexsmax_splash.png",revision:"1fa6305e162521db1af108f5382df949"},{url:"android-chrome-192x192.png",revision:"030b2d29cc281a5932e4ac46e8b5255f"},{url:"android-chrome-512x512.png",revision:"6f59b65bb73564c4247bb5a2275a0e48"},{url:"manifest.webmanifest",revision:"a5a4e8bdd77b33223d7e2a75ba039ddd"}],{ignoreURLParametersMatching:[/.*/]}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
