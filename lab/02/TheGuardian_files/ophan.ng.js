(function(){var n={}.hasOwnProperty;define("ophan/transmit",[],function(){var e,t,o,i,r,a,u,d,l;return t=function(){return(new Date).getTime().toString(36)+"xxxxxxxxxxxx".replace(/x/g,function(){return Math.floor(36*Math.random()).toString(36)})},a=null!=(u="undefined"!=typeof guardian&&null!==guardian&&null!=(d=guardian.config)&&null!=(l=d.ophan)?l.pageViewId:void 0)?u:t(),i=function(n){return o("//ophan.theguardian.com/i.gif?"+e(n))},r=function(e){var t,i,r;return JSON?(r=function(){var o;o=[];for(t in e)n.call(e,t)&&(i=e[t],null!=i&&o.push(""+encodeURIComponent(t)+"="+encodeURIComponent(JSON.stringify(i))));return o}(),o("//ophan.theguardian.com/a.gif?viewId="+a+"&"+r.join("&"))):void 0},e=function(e){var t,o,i;return e.viewId=a,i=function(){var i;i=[];for(t in e)n.call(e,t)&&(o=e[t],null!=o&&i.push(""+encodeURIComponent(t)+"="+encodeURIComponent(o)));return i}(),i.join("&")},o=function(n){var e;return e=new Image,e.src=n},{sendInitial:i,sendMore:r,viewId:a}})}).call(this),function(){define("ophan/visibility",[],function(){return{state:function(){return document.visibilityState||document.webkitVisibilityState||document.mozVisibilityState||document.msVisibilityState},changeEvent:document.visibilityState?"visibilitychange":document.webkitVisibilityState?"webkitvisibilitychange":document.mozVisibilityState?"mozvisibilitychange":document.msVisibilityState?"msvisibilitychange":void 0}})}.call(this),function(){var n={}.hasOwnProperty;define("ophan/core",["ophan/transmit","ophan/visibility"],function(e,t){var o,i,r,a,u,d,l,c,f,s,v,p,m,h,g;return o=14,c=window.document,l=null!=window.localStorage&&"undefined"!=typeof JSON&&null!==JSON,m=null,s=function(n,e){return m=n,"prerender"!==t.state()?h(e):t.changeEvent?c.addEventListener(t.changeEvent,function(){return"visible"===t.state()?h(e):void 0},!1):void 0},h=function(n){var i,l;return i={v:o,platform:m,url:location.href,ref:c.referrer,visibilityState:t.state(),isModernBrowser:"undefined"!=typeof guardian&&null!==guardian?guardian.isModernBrowser:void 0,httpStatus:n,tz:(new Date).getTimezoneOffset(),kxkuid:null!=(l=window.localStorage)&&"function"==typeof l.getItem?l.getItem("kxkuid"):void 0},u(i),d(i),"next-gen"===m&&a(i),r(i),e.sendInitial(i)},p=[],f=!1,v=function(n){var t,o,r,a;if("complete"===document.readyState){r={},t=n();for(o in t)a=t[o],r[o]=a;return e.sendMore(r),i()}return p.push(n)},i=function(){var n;return"undefined"==typeof localStorage||null===localStorage||f||(f=!0,n=window.location.search.replace(/^(?:.*[&\?]heatmap(?:\=([^&]*))?)?.*$/,"$1"),("true"===n||"false"===n)&&(localStorage.ophan_heatmap=n),"true"!==localStorage.ophan_heatmap&&"show"!==n)?void 0:c.body.appendChild(c.createElement("script")).src="//dashboard.ophan.co.uk/assets/js/heatmap-bookmarklet.js"},"function"==typeof window.addEventListener&&window.addEventListener("load",function(){var n,t,o,r,a,u,d;for(r={},u=0,d=p.length;d>u;u++){n=p[u],t=n();for(o in t)a=t[o],r[o]=a}return e.sendMore(r),i()},!1),d=function(e){var t,o,i;if(l){if(o=JSON.parse(window.localStorage.getItem("ophan_follow")),null!=o)for(t in o)n.call(o,t)&&(i=o[t],e[t]=i);return window.localStorage.removeItem("ophan_follow")}},a=function(n){var e,t,o,i,r,a,u;if(e=function(){var n,e,o,i;for(o=document.querySelectorAll("[data-component]"),i=[],n=0,e=o.length;e>n;n++)t=o[n],i.push(t.getAttribute("data-component"));return i}(),e.length>0){for(i={},a=0,u=e.length;u>a;a++)t=e[a],i[t]=1;return n.renderedComponents=function(){var n;n=[];for(o in i)r=i[o],n.push(o);return n}()}},g=function(e){var t,o,i;if(l){t=JSON.parse(window.localStorage.getItem("ophan_follow"))||{};for(o in e)n.call(e,o)&&(i=e[o],t[o]=i);return window.localStorage.setItem("ophan_follow",JSON.stringify(t))}},u=function(n){var e,t,o;return e="undefined"!=typeof guardian&&null!==guardian&&null!=(t=guardian.config)&&null!=(o=t.page)?o.contentType:void 0,null!=e&&""!==e?n.contentType=e.toLowerCase():void 0},r=function(n){var e,t,o,i,r;return t=c.createElement("div"),i=c.createAttribute("class"),i.value="ad_unit",t.setAttributeNode(i),c.body.appendChild(t),o="function"==typeof window.getComputedStyle?window.getComputedStyle(t):void 0,e=function(){return"none"===o.display},r=function(){var n;return n=o.MozBinding,n?-1!==n.indexOf("elemhidehit"):!1},null!=o&&(n.adUnitWasHidden=e()||r()),c.body.removeChild(t)},{init:s,storeDataToSendOnNextEvent:g,onLoadCapture:v,servingPlatform:function(){return m},viewId:e.viewId}})}.call(this),function(){define("ophan/attention",["ophan/visibility","ophan/transmit"],function(n,e){var t,o,i,r,a,u,d,l,c,f,s,v,p,m;return t=5e3,o=["focus","click","scroll","mousemove","touchstart","touchend","touchcancel","touchleave","touchmove","keyup","keydown"],i=1e4,v=0,p=null,f=0,a=null,m=!1,r=function(){return null!=a&&window.clearTimeout(a),a=null},l=function(){return null==p&&(p=new Date),r(),a=window.setTimeout(function(){return m?void 0:c()},t)},u=function(){var n,e;return null!=p?(n=new Date,e=Math.min(n.getTime()-p.getTime(),i),v+=e,p=n):void 0},c=function(){return r(),u(),p=null},s=function(){return u(),v!==f?(e.sendMore({attentionMs:v}),f=v):void 0},d=function(){var e,t,r;for(t=0,r=o.length;r>t;t++)e=o[t],window.addEventListener(e,l);return document.addEventListener(n.changeEvent,function(){return"visible"===n.state()?l():c()},!1),document.body.addEventListener("videoPlaying",function(){return m=!0,l()}),document.body.addEventListener("videoEnded",function(){return m=!1,c()}),document.body.addEventListener("videoPause",function(){return m=!1,c()}),window.setInterval(s,i)},{init:d}})}.call(this),function(){define("ophan/click-path-capture",["ophan/core","ophan/transmit"],function(n,e){var t,o,i;return i=function(n){var e,t;return e=null!=n&&null!=(t=n.nodeName)?t.toLowerCase():void 0,"a"===e?n:null==e||"body"===e?null:i(n.parentNode)},t=function(n){var e,o;return e=null!=n&&null!=(o=n.nodeName)?o.toLowerCase():void 0,null==e||"body"===e?null:("function"==typeof n.getAttribute?n.getAttribute("data-component"):void 0)||t(n.parentNode)},o=function(n){var e,t;return e=function(n){var e;return(null!=n&&null!=(e=n.nodeName)?e.toLowerCase():void 0)===document.body.nodeName.toLowerCase()},(t=function(n,o){var i;return e(n)?o:(i=n.getAttribute("data-link-name"),null!=i&&o.push(i),t(n.parentNode,o))})(n,[])},"function"==typeof document.addEventListener?document.addEventListener("click",function(r){var a,u;return a=i(r.target),u={from:[location.protocol,"//",location.host,location.pathname].join(""),to:a?a.href:void 0,referringComponent:t(r.target),referringDataLinkNames:o(r.target),refPlatform:n.servingPlatform(),refViewId:n.viewId},null!=a?n.storeDataToSendOnNextEvent(u):e.sendMore({clickComponent:u.referringComponent,clickLinkNames:u.referringDataLinkNames})},!1):void 0})}.call(this),function(){define("ophan/perf",["ophan/core"],function(n){var e,t;return e=window.performance||window.msPerformance||window.webkitPerformance||window.mozPerformance,t=function(){var n;return n=null!=e?e.timing:void 0,null!=n?{performance:{dns:n.domainLookupEnd-n.domainLookupStart,connection:n.connectEnd-n.connectStart,firstByte:n.responseStart-n.connectEnd,lastByte:n.responseEnd-n.responseStart,domContentLoadedEvent:n.domContentLoadedEventStart-n.responseEnd,loadEvent:n.loadEventStart-n.domContentLoadedEventStart,navType:e.navigation.type,redirectCount:e.navigation.redirectCount}}:{}},n.onLoadCapture(t),e})}.call(this),function(){define("ophan/ng",["ophan/core","ophan/transmit","ophan/attention","ophan/click-path-capture","ophan/perf"],function(n,e,t){return n.init("next-gen"),null!=window.addEventListener&&t.init(),{record:e.sendMore,viewId:e.viewId}})}.call(this);
//# sourceMappingURL=ophan.ng.js.map