var ce=Object.defineProperty;var ue=(t,r,e)=>r in t?ce(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e;var le=(t,r)=>()=>(r||t((r={exports:{}}).exports,r),r.exports);var A=(t,r,e)=>(ue(t,typeof r!="symbol"?r+"":r,e),e);var Ne=le(D=>{(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))i(d);new MutationObserver(d=>{for(const f of d)if(f.type==="childList")for(const b of f.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&i(b)}).observe(document,{childList:!0,subtree:!0});function e(d){const f={};return d.integrity&&(f.integrity=d.integrity),d.referrerPolicy&&(f.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?f.credentials="include":d.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function i(d){if(d.ep)return;d.ep=!0;const f=e(d);fetch(d.href,f)}})();class X{constructor(){A(this,"label","default");A(this,"button")}onClick(){throw new Error("implement on click")}appendTo(r){this.button=document.createElement("button"),this.button.innerText=this.label,this.button.addEventListener("click",this.onClick.bind(this)),r.appendChild(this.button),this.onMounted()}active(r){r?this.button.classList.add("active"):this.button.classList.remove("active")}onMounted(){}}class fe extends X{constructor(e,i){super();A(this,"obs");A(this,"sceneName");this.obs=e,this.sceneName=i,this.label=i}onClick(){this.obs.call("SetCurrentProgramScene",{sceneName:this.sceneName})}onMounted(){this.obs.on("CurrentProgramSceneChanged",e=>{e.sceneName===this.sceneName?this.active(!0):this.active(!1)})}}class de extends X{constructor(e,i){super();A(this,"obs");A(this,"sound");this.obs=e,this.sound=i,this.label=i}onClick(){this.obs.call("RestartMedia",{sourceName:this.sound})}onMounted(){this.obs.on("MediaStrated",e=>{e.sourceName===this.sound?this.active(!0):this.active(!1)}),this.obs.on("MediaEnd",e=>{e.sourceName===this.sound?this.active(!0):this.active(!1)})}}var M=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function H(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function he(t){if(t.__esModule)return t;var r=t.default;if(typeof r=="function"){var e=function i(){return this instanceof i?Reflect.construct(r,arguments,this.constructor):r.apply(this,arguments)};e.prototype=r.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(t).forEach(function(i){var d=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(e,i,d.get?d:{enumerable:!0,get:function(){return t[i]}})}),e}var $={exports:{}},j,W;function pe(){if(W)return j;W=1;var t=1e3,r=t*60,e=r*60,i=e*24,d=i*7,f=i*365.25;j=function(n,s){s=s||{};var l=typeof n;if(l==="string"&&n.length>0)return b(n);if(l==="number"&&isFinite(n))return s.long?v(n):y(n);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(n))};function b(n){if(n=String(n),!(n.length>100)){var s=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(n);if(s){var l=parseFloat(s[1]),h=(s[2]||"ms").toLowerCase();switch(h){case"years":case"year":case"yrs":case"yr":case"y":return l*f;case"weeks":case"week":case"w":return l*d;case"days":case"day":case"d":return l*i;case"hours":case"hour":case"hrs":case"hr":case"h":return l*e;case"minutes":case"minute":case"mins":case"min":case"m":return l*r;case"seconds":case"second":case"secs":case"sec":case"s":return l*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return l;default:return}}}}function y(n){var s=Math.abs(n);return s>=i?Math.round(n/i)+"d":s>=e?Math.round(n/e)+"h":s>=r?Math.round(n/r)+"m":s>=t?Math.round(n/t)+"s":n+"ms"}function v(n){var s=Math.abs(n);return s>=i?a(n,s,i,"day"):s>=e?a(n,s,e,"hour"):s>=r?a(n,s,r,"minute"):s>=t?a(n,s,t,"second"):n+" ms"}function a(n,s,l,h){var m=s>=l*1.5;return Math.round(n/l)+" "+h+(m?"s":"")}return j}function ve(t){e.debug=e,e.default=e,e.coerce=v,e.disable=f,e.enable=d,e.enabled=b,e.humanize=pe(),e.destroy=a,Object.keys(t).forEach(n=>{e[n]=t[n]}),e.names=[],e.skips=[],e.formatters={};function r(n){let s=0;for(let l=0;l<n.length;l++)s=(s<<5)-s+n.charCodeAt(l),s|=0;return e.colors[Math.abs(s)%e.colors.length]}e.selectColor=r;function e(n){let s,l=null,h,m;function p(...u){if(!p.enabled)return;const w=p,o=Number(new Date),c=o-(s||o);w.diff=c,w.prev=s,w.curr=o,s=o,u[0]=e.coerce(u[0]),typeof u[0]!="string"&&u.unshift("%O");let g=0;u[0]=u[0].replace(/%([a-zA-Z%])/g,(_,F)=>{if(_==="%%")return"%";g++;const x=e.formatters[F];if(typeof x=="function"){const B=u[g];_=x.call(w,B),u.splice(g,1),g--}return _}),e.formatArgs.call(w,u),(w.log||e.log).apply(w,u)}return p.namespace=n,p.useColors=e.useColors(),p.color=e.selectColor(n),p.extend=i,p.destroy=e.destroy,Object.defineProperty(p,"enabled",{enumerable:!0,configurable:!1,get:()=>l!==null?l:(h!==e.namespaces&&(h=e.namespaces,m=e.enabled(n)),m),set:u=>{l=u}}),typeof e.init=="function"&&e.init(p),p}function i(n,s){const l=e(this.namespace+(typeof s>"u"?":":s)+n);return l.log=this.log,l}function d(n){e.save(n),e.namespaces=n,e.names=[],e.skips=[];let s;const l=(typeof n=="string"?n:"").split(/[\s,]+/),h=l.length;for(s=0;s<h;s++)l[s]&&(n=l[s].replace(/\*/g,".*?"),n[0]==="-"?e.skips.push(new RegExp("^"+n.slice(1)+"$")):e.names.push(new RegExp("^"+n+"$")))}function f(){const n=[...e.names.map(y),...e.skips.map(y).map(s=>"-"+s)].join(",");return e.enable(""),n}function b(n){if(n[n.length-1]==="*")return!0;let s,l;for(s=0,l=e.skips.length;s<l;s++)if(e.skips[s].test(n))return!1;for(s=0,l=e.names.length;s<l;s++)if(e.names[s].test(n))return!0;return!1}function y(n){return n.toString().substring(2,n.toString().length-2).replace(/\.\*\?$/,"*")}function v(n){return n instanceof Error?n.stack||n.message:n}function a(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return e.enable(e.load()),e}var me=ve;(function(t,r){var e={};r.formatArgs=d,r.save=f,r.load=b,r.useColors=i,r.storage=y(),r.destroy=(()=>{let a=!1;return()=>{a||(a=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),r.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function i(){return typeof window<"u"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs)?!0:typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)?!1:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function d(a){if(a[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+a[0]+(this.useColors?"%c ":" ")+"+"+t.exports.humanize(this.diff),!this.useColors)return;const n="color: "+this.color;a.splice(1,0,n,"color: inherit");let s=0,l=0;a[0].replace(/%[a-zA-Z%]/g,h=>{h!=="%%"&&(s++,h==="%c"&&(l=s))}),a.splice(l,0,n)}r.log=console.debug||console.log||(()=>{});function f(a){try{a?r.storage.setItem("debug",a):r.storage.removeItem("debug")}catch{}}function b(){let a;try{a=r.storage.getItem("debug")}catch{}return!a&&typeof process<"u"&&"env"in process&&(a=e.DEBUG),a}function y(){try{return localStorage}catch{}}t.exports=me(r);const{formatters:v}=t.exports;v.j=function(a){try{return JSON.stringify(a)}catch(n){return"[UnexpectedJSONParseError]: "+n.message}}})($,$.exports);var ge=$.exports;const ye=H(ge);var Y={exports:{}};(function(t){var r=Object.prototype.hasOwnProperty,e="~";function i(){}Object.create&&(i.prototype=Object.create(null),new i().__proto__||(e=!1));function d(v,a,n){this.fn=v,this.context=a,this.once=n||!1}function f(v,a,n,s,l){if(typeof n!="function")throw new TypeError("The listener must be a function");var h=new d(n,s||v,l),m=e?e+a:a;return v._events[m]?v._events[m].fn?v._events[m]=[v._events[m],h]:v._events[m].push(h):(v._events[m]=h,v._eventsCount++),v}function b(v,a){--v._eventsCount===0?v._events=new i:delete v._events[a]}function y(){this._events=new i,this._eventsCount=0}y.prototype.eventNames=function(){var a=[],n,s;if(this._eventsCount===0)return a;for(s in n=this._events)r.call(n,s)&&a.push(e?s.slice(1):s);return Object.getOwnPropertySymbols?a.concat(Object.getOwnPropertySymbols(n)):a},y.prototype.listeners=function(a){var n=e?e+a:a,s=this._events[n];if(!s)return[];if(s.fn)return[s.fn];for(var l=0,h=s.length,m=new Array(h);l<h;l++)m[l]=s[l].fn;return m},y.prototype.listenerCount=function(a){var n=e?e+a:a,s=this._events[n];return s?s.fn?1:s.length:0},y.prototype.emit=function(a,n,s,l,h,m){var p=e?e+a:a;if(!this._events[p])return!1;var u=this._events[p],w=arguments.length,o,c;if(u.fn){switch(u.once&&this.removeListener(a,u.fn,void 0,!0),w){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,n),!0;case 3:return u.fn.call(u.context,n,s),!0;case 4:return u.fn.call(u.context,n,s,l),!0;case 5:return u.fn.call(u.context,n,s,l,h),!0;case 6:return u.fn.call(u.context,n,s,l,h,m),!0}for(c=1,o=new Array(w-1);c<w;c++)o[c-1]=arguments[c];u.fn.apply(u.context,o)}else{var g=u.length,C;for(c=0;c<g;c++)switch(u[c].once&&this.removeListener(a,u[c].fn,void 0,!0),w){case 1:u[c].fn.call(u[c].context);break;case 2:u[c].fn.call(u[c].context,n);break;case 3:u[c].fn.call(u[c].context,n,s);break;case 4:u[c].fn.call(u[c].context,n,s,l);break;default:if(!o)for(C=1,o=new Array(w-1);C<w;C++)o[C-1]=arguments[C];u[c].fn.apply(u[c].context,o)}}return!0},y.prototype.on=function(a,n,s){return f(this,a,n,s,!1)},y.prototype.once=function(a,n,s){return f(this,a,n,s,!0)},y.prototype.removeListener=function(a,n,s,l){var h=e?e+a:a;if(!this._events[h])return this;if(!n)return b(this,h),this;var m=this._events[h];if(m.fn)m.fn===n&&(!l||m.once)&&(!s||m.context===s)&&b(this,h);else{for(var p=0,u=[],w=m.length;p<w;p++)(m[p].fn!==n||l&&!m[p].once||s&&m[p].context!==s)&&u.push(m[p]);u.length?this._events[h]=u.length===1?u[0]:u:b(this,h)}return this},y.prototype.removeAllListeners=function(a){var n;return a?(n=e?e+a:a,this._events[n]&&b(this,n)):(this._events=new i,this._eventsCount=0),this},y.prototype.off=y.prototype.removeListener,y.prototype.addListener=y.prototype.on,y.prefixed=e,y.EventEmitter=y,t.exports=y})(Y);var Ce=Y.exports;const V=H(Ce);var L=null;typeof WebSocket<"u"?L=WebSocket:typeof MozWebSocket<"u"?L=MozWebSocket:typeof global<"u"?L=global.WebSocket||global.MozWebSocket:typeof window<"u"?L=window.WebSocket||window.MozWebSocket:typeof self<"u"&&(L=self.WebSocket||self.MozWebSocket);const U=L;var ee={exports:{}};function we(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var z={exports:{}};const be={},_e=Object.freeze(Object.defineProperty({__proto__:null,default:be},Symbol.toStringTag,{value:"Module"})),Fe=he(_e);var G;function te(){return G||(G=1,function(t,r){(function(e,i){t.exports=i()})(M,function(){var e=e||function(i,d){var f;if(typeof window<"u"&&window.crypto&&(f=window.crypto),typeof self<"u"&&self.crypto&&(f=self.crypto),typeof globalThis<"u"&&globalThis.crypto&&(f=globalThis.crypto),!f&&typeof window<"u"&&window.msCrypto&&(f=window.msCrypto),!f&&typeof M<"u"&&M.crypto&&(f=M.crypto),!f&&typeof we=="function")try{f=Fe}catch{}var b=function(){if(f){if(typeof f.getRandomValues=="function")try{return f.getRandomValues(new Uint32Array(1))[0]}catch{}if(typeof f.randomBytes=="function")try{return f.randomBytes(4).readInt32LE()}catch{}}throw new Error("Native crypto module could not be used to get secure random number.")},y=Object.create||function(){function o(){}return function(c){var g;return o.prototype=c,g=new o,o.prototype=null,g}}(),v={},a=v.lib={},n=a.Base=function(){return{extend:function(o){var c=y(this);return o&&c.mixIn(o),(!c.hasOwnProperty("init")||this.init===c.init)&&(c.init=function(){c.$super.init.apply(this,arguments)}),c.init.prototype=c,c.$super=this,c},create:function(){var o=this.extend();return o.init.apply(o,arguments),o},init:function(){},mixIn:function(o){for(var c in o)o.hasOwnProperty(c)&&(this[c]=o[c]);o.hasOwnProperty("toString")&&(this.toString=o.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),s=a.WordArray=n.extend({init:function(o,c){o=this.words=o||[],c!=d?this.sigBytes=c:this.sigBytes=o.length*4},toString:function(o){return(o||h).stringify(this)},concat:function(o){var c=this.words,g=o.words,C=this.sigBytes,_=o.sigBytes;if(this.clamp(),C%4)for(var F=0;F<_;F++){var x=g[F>>>2]>>>24-F%4*8&255;c[C+F>>>2]|=x<<24-(C+F)%4*8}else for(var B=0;B<_;B+=4)c[C+B>>>2]=g[B>>>2];return this.sigBytes+=_,this},clamp:function(){var o=this.words,c=this.sigBytes;o[c>>>2]&=4294967295<<32-c%4*8,o.length=i.ceil(c/4)},clone:function(){var o=n.clone.call(this);return o.words=this.words.slice(0),o},random:function(o){for(var c=[],g=0;g<o;g+=4)c.push(b());return new s.init(c,o)}}),l=v.enc={},h=l.Hex={stringify:function(o){for(var c=o.words,g=o.sigBytes,C=[],_=0;_<g;_++){var F=c[_>>>2]>>>24-_%4*8&255;C.push((F>>>4).toString(16)),C.push((F&15).toString(16))}return C.join("")},parse:function(o){for(var c=o.length,g=[],C=0;C<c;C+=2)g[C>>>3]|=parseInt(o.substr(C,2),16)<<24-C%8*4;return new s.init(g,c/2)}},m=l.Latin1={stringify:function(o){for(var c=o.words,g=o.sigBytes,C=[],_=0;_<g;_++){var F=c[_>>>2]>>>24-_%4*8&255;C.push(String.fromCharCode(F))}return C.join("")},parse:function(o){for(var c=o.length,g=[],C=0;C<c;C++)g[C>>>2]|=(o.charCodeAt(C)&255)<<24-C%4*8;return new s.init(g,c)}},p=l.Utf8={stringify:function(o){try{return decodeURIComponent(escape(m.stringify(o)))}catch{throw new Error("Malformed UTF-8 data")}},parse:function(o){return m.parse(unescape(encodeURIComponent(o)))}},u=a.BufferedBlockAlgorithm=n.extend({reset:function(){this._data=new s.init,this._nDataBytes=0},_append:function(o){typeof o=="string"&&(o=p.parse(o)),this._data.concat(o),this._nDataBytes+=o.sigBytes},_process:function(o){var c,g=this._data,C=g.words,_=g.sigBytes,F=this.blockSize,x=F*4,B=_/x;o?B=i.ceil(B):B=i.max((B|0)-this._minBufferSize,0);var I=B*F,k=i.min(I*4,_);if(I){for(var O=0;O<I;O+=F)this._doProcessBlock(C,O);c=C.splice(0,I),g.sigBytes-=k}return new s.init(c,k)},clone:function(){var o=n.clone.call(this);return o._data=this._data.clone(),o},_minBufferSize:0});a.Hasher=u.extend({cfg:n.extend(),init:function(o){this.cfg=this.cfg.extend(o),this.reset()},reset:function(){u.reset.call(this),this._doReset()},update:function(o){return this._append(o),this._process(),this},finalize:function(o){o&&this._append(o);var c=this._doFinalize();return c},blockSize:16,_createHelper:function(o){return function(c,g){return new o.init(g).finalize(c)}},_createHmacHelper:function(o){return function(c,g){return new w.HMAC.init(o,g).finalize(c)}}});var w=v.algo={};return v}(Math);return e})}(z)),z.exports}(function(t,r){(function(e,i){t.exports=i(te())})(M,function(e){return function(i){var d=e,f=d.lib,b=f.WordArray,y=f.Hasher,v=d.algo,a=[],n=[];(function(){function h(w){for(var o=i.sqrt(w),c=2;c<=o;c++)if(!(w%c))return!1;return!0}function m(w){return(w-(w|0))*4294967296|0}for(var p=2,u=0;u<64;)h(p)&&(u<8&&(a[u]=m(i.pow(p,1/2))),n[u]=m(i.pow(p,1/3)),u++),p++})();var s=[],l=v.SHA256=y.extend({_doReset:function(){this._hash=new b.init(a.slice(0))},_doProcessBlock:function(h,m){for(var p=this._hash.words,u=p[0],w=p[1],o=p[2],c=p[3],g=p[4],C=p[5],_=p[6],F=p[7],x=0;x<64;x++){if(x<16)s[x]=h[m+x]|0;else{var B=s[x-15],I=(B<<25|B>>>7)^(B<<14|B>>>18)^B>>>3,k=s[x-2],O=(k<<15|k>>>17)^(k<<13|k>>>19)^k>>>10;s[x]=I+s[x-7]+O+s[x-16]}var re=g&C^~g&_,se=u&w^u&o^w&o,oe=(u<<30|u>>>2)^(u<<19|u>>>13)^(u<<10|u>>>22),ie=(g<<26|g>>>6)^(g<<21|g>>>11)^(g<<7|g>>>25),T=F+ie+re+n[x]+s[x],ae=oe+se;F=_,_=C,C=g,g=c+T|0,c=o,o=w,w=u,u=T+ae|0}p[0]=p[0]+u|0,p[1]=p[1]+w|0,p[2]=p[2]+o|0,p[3]=p[3]+c|0,p[4]=p[4]+g|0,p[5]=p[5]+C|0,p[6]=p[6]+_|0,p[7]=p[7]+F|0},_doFinalize:function(){var h=this._data,m=h.words,p=this._nDataBytes*8,u=h.sigBytes*8;return m[u>>>5]|=128<<24-u%32,m[(u+64>>>9<<4)+14]=i.floor(p/4294967296),m[(u+64>>>9<<4)+15]=p,h.sigBytes=m.length*4,this._process(),this._hash},clone:function(){var h=y.clone.call(this);return h._hash=this._hash.clone(),h}});d.SHA256=y._createHelper(l),d.HmacSHA256=y._createHmacHelper(l)}(Math),e.SHA256})})(ee);var xe=ee.exports;const J=H(xe);var ne={exports:{}};(function(t,r){(function(e,i){t.exports=i(te())})(M,function(e){return function(){var i=e,d=i.lib,f=d.WordArray,b=i.enc;b.Base64={stringify:function(v){var a=v.words,n=v.sigBytes,s=this._map;v.clamp();for(var l=[],h=0;h<n;h+=3)for(var m=a[h>>>2]>>>24-h%4*8&255,p=a[h+1>>>2]>>>24-(h+1)%4*8&255,u=a[h+2>>>2]>>>24-(h+2)%4*8&255,w=m<<16|p<<8|u,o=0;o<4&&h+o*.75<n;o++)l.push(s.charAt(w>>>6*(3-o)&63));var c=s.charAt(64);if(c)for(;l.length%4;)l.push(c);return l.join("")},parse:function(v){var a=v.length,n=this._map,s=this._reverseMap;if(!s){s=this._reverseMap=[];for(var l=0;l<n.length;l++)s[n.charCodeAt(l)]=l}var h=n.charAt(64);if(h){var m=v.indexOf(h);m!==-1&&(a=m)}return y(v,a,s)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="};function y(v,a,n){for(var s=[],l=0,h=0;h<a;h++)if(h%4){var m=n[v.charCodeAt(h-1)]<<h%4*2,p=n[v.charCodeAt(h)]>>>6-h%4*2,u=m|p;s[l>>>2]|=u<<24-l%4*8,l++}return f.create(s,l)}}(),e.enc.Base64})})(ne);var Be=ne.exports;const K=H(Be);function N(){return N=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},N.apply(this,arguments)}function Pe(t,r){if(t==null)return{};var e={},i=Object.keys(t),d,f;for(f=0;f<i.length;f++)d=i[f],!(r.indexOf(d)>=0)&&(e[d]=t[d]);return e}var P;(function(t){t[t.Hello=0]="Hello",t[t.Identify=1]="Identify",t[t.Identified=2]="Identified",t[t.Reidentify=3]="Reidentify",t[t.Event=5]="Event",t[t.Request=6]="Request",t[t.RequestResponse=7]="RequestResponse",t[t.RequestBatch=8]="RequestBatch",t[t.RequestBatchResponse=9]="RequestBatchResponse"})(P||(P={}));var Z;(function(t){t[t.None=0]="None",t[t.General=1]="General",t[t.Config=2]="Config",t[t.Scenes=4]="Scenes",t[t.Inputs=8]="Inputs",t[t.Transitions=16]="Transitions",t[t.Filters=32]="Filters",t[t.Outputs=64]="Outputs",t[t.SceneItems=128]="SceneItems",t[t.MediaInputs=256]="MediaInputs",t[t.Vendors=512]="Vendors",t[t.Ui=1024]="Ui",t[t.All=2047]="All",t[t.InputVolumeMeters=65536]="InputVolumeMeters",t[t.InputActiveStateChanged=131072]="InputActiveStateChanged",t[t.InputShowStateChanged=262144]="InputShowStateChanged",t[t.SceneItemTransformChanged=524288]="SceneItemTransformChanged"})(Z||(Z={}));var Q;(function(t){t[t.None=-1]="None",t[t.SerialRealtime=0]="SerialRealtime",t[t.SerialFrame=1]="SerialFrame",t[t.Parallel=2]="Parallel"})(Q||(Q={}));function ke(t,r,e){const i=K.stringify(J(e+t));return K.stringify(J(i+r))}const Ae=["authentication","rpcVersion"],E=ye("obs-websocket-js");class S extends Error{constructor(r,e){super(e),this.code=void 0,this.code=r}}class R extends V{constructor(...r){super(...r),this._identified=!1,this.internalListeners=new V,this.socket=void 0}static generateMessageId(){return String(R.requestCounter++)}get identified(){return this._identified}async connect(r="ws://127.0.0.1:4455",e,i={}){var d=this;this.socket&&await this.disconnect();try{const f=this.internalEventPromise("ConnectionClosed"),b=this.internalEventPromise("ConnectionError");return await Promise.race([async function(){const y=await d.createConnection(r);return d.emit("Hello",y),d.identify(y,e,i)}(),new Promise((y,v)=>{b.then(a=>{a.message&&v(a)}),f.then(a=>{v(a)})})])}catch(f){throw await this.disconnect(),f}}async disconnect(){if(!this.socket||this.socket.readyState===U.CLOSED)return;const r=this.internalEventPromise("ConnectionClosed");this.socket.close(),await r}async reidentify(r){const e=this.internalEventPromise(`op:${P.Identified}`);return await this.message(P.Reidentify,r),e}async call(r,e){const i=R.generateMessageId(),d=this.internalEventPromise(`res:${i}`);await this.message(P.Request,{requestId:i,requestType:r,requestData:e});const{requestStatus:f,responseData:b}=await d;if(!f.result)throw new S(f.code,f.comment);return b}async callBatch(r,e={}){const i=R.generateMessageId(),d=this.internalEventPromise(`res:${i}`);await this.message(P.RequestBatch,N({requestId:i,requests:r},e));const{results:f}=await d;return f}cleanup(){this.socket&&(this.socket.onopen=null,this.socket.onmessage=null,this.socket.onerror=null,this.socket.onclose=null,this.socket=void 0,this._identified=!1,this.internalListeners.removeAllListeners())}async createConnection(r){var e;const i=this.internalEventPromise("ConnectionOpened"),d=this.internalEventPromise(`op:${P.Hello}`);this.socket=new U(r,this.protocol),this.socket.onopen=this.onOpen.bind(this),this.socket.onmessage=this.onMessage.bind(this),this.socket.onerror=this.onError.bind(this),this.socket.onclose=this.onClose.bind(this),await i;const f=(e=this.socket)==null?void 0:e.protocol;if(!f)throw new S(-1,"Server sent no subprotocol");if(f!==this.protocol)throw new S(-1,"Server sent an invalid subprotocol");return d}async identify(r,e,i={}){let{authentication:d,rpcVersion:f}=r,b=Pe(r,Ae);const y=N({rpcVersion:f},i);d&&e&&(y.authentication=ke(d.salt,d.challenge,e));const v=this.internalEventPromise(`op:${P.Identified}`);await this.message(P.Identify,y);const a=await v;return this._identified=!0,this.emit("Identified",a),N({rpcVersion:f},b,a)}async message(r,e){if(!this.socket)throw new Error("Not connected");if(!this.identified&&r!==1)throw new Error("Socket not identified");const i=await this.encodeMessage({op:r,d:e});this.socket.send(i)}async internalEventPromise(r){return new Promise(e=>{this.internalListeners.once(r,e)})}onOpen(r){E("socket.open"),this.emit("ConnectionOpened"),this.internalListeners.emit("ConnectionOpened",r)}async onMessage(r){try{const{op:e,d:i}=await this.decodeMessage(r.data);if(E("socket.message: %d %j",e,i),e===void 0||i===void 0)return;switch(e){case P.Event:{const{eventType:d,eventData:f}=i;this.emit(d,f);return}case P.RequestResponse:case P.RequestBatchResponse:{const{requestId:d}=i;this.internalListeners.emit(`res:${d}`,i);return}default:this.internalListeners.emit(`op:${e}`,i)}}catch(e){E("error handling message: %o",e)}}onError(r){E("socket.error: %o",r);const e=new S(-1,r.message);this.emit("ConnectionError",e),this.internalListeners.emit("ConnectionError",e)}onClose(r){E("socket.close: %s (%d)",r.reason,r.code);const e=new S(r.code,r.reason);this.emit("ConnectionClosed",e),this.internalListeners.emit("ConnectionClosed",e),this.cleanup()}}R.requestCounter=1;typeof D<"u"&&Object.defineProperty(D,"__esModule",{value:!0});class Ie extends R{constructor(...r){super(...r),this.protocol="obswebsocket.json"}async encodeMessage(r){return JSON.stringify(r)}async decodeMessage(r){return JSON.parse(r)}}const q=new Ie;function Le(){const t=document.getElementById("form");if(!t)return;const r=document.createElement("h1");r.textContent="Connect to OBS WebSocket";const e=document.createElement("input");e.placeholder="ws://192.168..",e.type="text",e.name="localAddress",e.id="localAddress",e.required=!0;const i=document.createElement("input");i.placeholder="******",i.type="password",i.name="password",i.id="password";const d=document.createElement("label");d.textContent="Local Adresse",d.htmlFor="localAddress";const f=document.createElement("label");f.textContent="Password",f.htmlFor="password";const b=document.createElement("button");b.type="submit",b.textContent="Submit",t.appendChild(r),t.appendChild(d),t.appendChild(e),t.appendChild(f),t.appendChild(i),t.appendChild(b),document.body.appendChild(t),t.addEventListener("submit",y=>{y.preventDefault(),Me({localAddress:e.value,password:i.value},t).then(()=>Re()).catch(v=>{const a=document.createElement("p");a.style.color="red",a.textContent=v.message,t.appendChild(a)})})}Le();async function Me({localAddress:t,password:r},e){try{const{obsWebSocketVersion:i,negotiatedRpcVersion:d}=await q.connect(t,r);e.remove(),console.info(`Connected to server ${i} (using RPC ${d})`)}catch(i){return Promise.reject(i)}}function Re(){Oe()}async function Oe(){const t=await q.call("GetSceneList");Ee(t);const r=document.getElementById("scenes");for(const e of t.scenes.reverse())new fe(q,e.sceneName).appendTo(r)}async function Ee(t){const r=t.scenes.find(i=>i.sceneName==="Sounds")??[],e=document.getElementById("sounds");r.length||e==null||e.remove();for(const i of r.reverse())new de(q,i.sceneName).appendTo(e)}function Se(t){console.log("Current scene changed to",t.sceneName)}q.on("CurrentProgramSceneChanged",Se)});export default Ne();