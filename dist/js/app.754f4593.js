(function(e){function t(t){for(var r,o,u=t[0],c=t[1],s=t[2],l=0,f=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function u(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"dd1e0560"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"4844e7c1"}[e]+".css",a=c.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var s=i[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],d.parentNode.removeChild(d),n(i)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"00bc":function(e,t,n){},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"0418":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("span",{staticStyle:{color:"white"}},[e._v(" "+e._s(e.msg)+" ")])])},o=[],a=n("d4ec"),i=n("262e"),u=n("2caf"),c=n("9ab4"),s=n("60a3"),l=function(e){Object(i["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(a["a"])(this,n),t.apply(this,arguments)}return n}(s["c"]);Object(c["a"])([Object(s["b"])()],l.prototype,"msg",void 0),l=Object(c["a"])([s["a"]],l);var f=l,d=f,p=(n("490c"),n("2877")),g=Object(p["a"])(d,r,o,!1,null,"c67e4d5e",null);t["default"]=g.exports},"490c":function(e,t,n){"use strict";var r=n("00bc"),o=n.n(r);o.a},"85ec":function(e,t,n){},afbc:function(e,t,n){"use strict";n("d3b7");var r=n("2b0e"),o=n("8c4f");r["default"].use(o["a"]);var a=[{path:"/header",name:"Header",component:function(){return n.e("about").then(n.bind(null,"0418"))}},{path:"/",name:"Login",component:function(){return n.e("about").then(n.bind(null,"a55b"))}},{path:"/signup",name:"SingUp",component:function(){return n.e("about").then(n.bind(null,"5c9c"))}},{path:"/main",name:"Main",component:function(){return n.e("about").then(n.bind(null,"cd56"))}}],i=new o["a"]({mode:"history",base:"/",routes:a});t["a"]=i},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("Header",{attrs:{msg:"Welcome to Your Vue.js App"}}),n("router-link",{attrs:{to:"/"}},[e._v("SignIn")]),e._v(" | "),n("router-link",{attrs:{to:"/signup"}},[e._v("SignUp")])],1),n("router-view")],1)},a=[],i=n("d4ec"),u=n("bee2"),c=n("262e"),s=n("2caf"),l=n("9ab4"),f=n("60a3"),d=n("0418"),p=function(e){Object(c["a"])(n,e);var t=Object(s["a"])(n);function n(){return Object(i["a"])(this,n),t.apply(this,arguments)}return Object(u["a"])(n,[{key:"isLoading",get:function(){return this.$store.getters.getLoading}}]),n}(f["c"]);p=Object(l["a"])([Object(f["a"])({components:{Header:d["default"]}})],p);var g=p,b=g,v=(n("034f"),n("2877")),h=Object(v["a"])(b,o,a,!1,null,null,null),m=h.exports,y=n("9483");Object(y["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var j=n("afbc"),w=n("2f62");r["default"].use(w["a"]);var O=new w["a"].Store({state:{loading:!1,userInformation:{userId:"",token:""}},getters:{getLoading:function(e){return e.loading}},mutations:{setLoading:function(e,t){e.loading=t},getLoading:function(e){return e.loading}},actions:{},modules:{}}),_=n("5c96"),k=n.n(_);n("0fae"),n("e05f");r["default"].config.productionTip=!1,r["default"].use(k.a),new r["default"]({router:j["a"],store:O,render:function(e){return e(m)}}).$mount("#app")}});
//# sourceMappingURL=app.754f4593.js.map