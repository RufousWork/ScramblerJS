define("common/modules/commercial/article-aside-adverts",["fastdom","Promise","common/utils/_","common/utils/$","common/utils/$css","common/utils/config","common/modules/commercial/create-ad-slot"],function(e,n,o,t,i,c,r){function a(a){var m,s,l,d,u=o.defaults(a||{},{columnSelector:".js-secondary-column",adSlotContainerSelector:".js-ad-slot-container"}),g=t(u.columnSelector),f=g.length&&"none"===i(g,"display");return c.switches.standardAdverts&&/Article|LiveBlog/.test(c.page.contentType)&&!f?(m="Article"===c.page.contentType?t(".js-content-main-column"):!1,l=t(".js-components-container",".js-secondary-column"),d=t(u.adSlotContainerSelector),new n(function(n){e.read(function(){s=!m.length||"football"!==c.page.section&&m.dim().height>=1300||"football"===c.page.section&&m.dim().height>=2200?"right-sticky":m.dim().height>=600?"right":"right-small",e.write(function(){"Article"===c.page.contentType&&"advertisement-features"===c.page.sponsorshipType&&l.addClass("u-h"),d.append(r(s,"mpu-banner-ad")),n(d)})})})):!1}return{init:a}}),define("common/modules/commercial/article-body-adverts",["fastdom","Promise","common/utils/_","common/utils/$","common/utils/config","common/utils/detect","common/modules/article/spacefinder","common/modules/commercial/create-ad-slot"],function(e,n,o,t,i,c,r,a){function m(){return{minAbove:c.isBreakpoint({max:"tablet"})?300:700,minBelow:300,selectors:{" > h2":{minAbove:"mobile"===c.getBreakpoint()?20:0,minBelow:250}," > *:not(p):not(h2)":{minAbove:35,minBelow:400}," .ad-slot":{minAbove:500,minBelow:500}}}}function s(){var e=o.cloneDeep(m());return e.minAbove=300,e.selectors[" > h2"].minAbove=20,e}function l(){var e=o.cloneDeep(m());return e.selectors[" .ad-slot"]={minAbove:1300,minBelow:1300},e}function d(){return r.getParaWithSpace(l()).then(function(e){return"undefined"==typeof e||g.length>=9?n.resolve(null):(f.push(["inline"+(g.length+1),"inline"]),p(e).then(function(){return d()}))})}function u(){return i.switches.noMobileTopAd&&"mobile"===c.getBreakpoint()}var g=[],f=[["inline1","inline"],["inline2","inline"]],p=function(o){if(o){var i=f[g.length],c=t.create(a(i[0],i[1]));return g.push(c),new n(function(n){e.write(function(){c.insertBefore(o),n(null)})})}return n.resolve(null)},h=function(){var e,o,t;return!i.switches.standardAdverts||"Article"!==i.page.contentType||i.page.isLiveBlog?!1:(e=m(),o=s(),i.page.hasInlineMerchandise?(f.unshift(["im","im"]),t=r.getParaWithSpace(o).then(function(e){return p(e)})):t=n.resolve(null),i.switches.viewability&&!u()?t.then(function(){return r.getParaWithSpace(e).then(function(e){return p(e)}).then(function(){return r.getParaWithSpace(e).then(function(e){return p(e)}).then(function(){return d()})})}):t.then(function(){return r.getParaWithSpace(e).then(function(e){return p(e)}).then(function(){return c.isBreakpoint({max:"tablet"})?r.getParaWithSpace(e).then(function(e){return p(e)}):n.resolve(null)})}))};return{init:h,getRules:m,getLenientRules:s,reset:function(){g=[]}}}),define("common/modules/commercial/front-commercial-components",["bonzo","common/utils/$","common/utils/config","common/modules/commercial/create-ad-slot"],function(e,n,o,t){function i(){if(!o.switches.commercialComponents||!o.page.isFront)return!1;var i,c=n.create('<div class="fc-container"></div>'),r=e(t("merchandising-high","commercial-component-high")),a=n(".fc-container");return a.length>=2?(i=0,a.length>=4&&(i="Network Front"===o.page.contentType?3:2),c.append(r).insertAfter(a[i])):void 0}return{init:i}}),define("common/modules/commercial/slice-adverts",["bonzo","fastdom","qwery","Promise","common/utils/$","common/utils/_","common/utils/config","common/utils/detect","common/modules/commercial/create-ad-slot","common/modules/user-prefs"],function(e,n,o,t,i,c,r,a,m,s){var l=["inline1","inline2","inline3"],d=function(d){if(!r.switches.standardAdverts)return!1;for(var u,g,f,p,h=c.defaults(d||{},{containerSelector:".fc-container",sliceSelector:".js-fc-slice-mpu-candidate"}),w=o(h.containerSelector),v=0,b=[],y=1,A=s.get("container-states");v<w.length;)u=w[v],g=e(u).data("id"),f=i(h.sliceSelector,u),p=c.contains(["uk","us","au"],r.page.pageId)&&0===v,!f.length||p||A&&"closed"===A[g]||r.page.omitMPUs?v++:(b.push(f.first()),v+=y+1);return t.all(c(b).slice(0,l.length).map(function(o,c){var r=l[c],s=e(m(r,"container-inline")).addClass("ad-slot--mobile"),d=e(m(r,"container-inline")).addClass("ad-slot--not-mobile");return new t(function(e){n.write(function(){"mobile"!==a.getBreakpoint()?o.removeClass("fc-slice__item--no-mpu").append(d):s.insertAfter(i.ancestor(o[0],"fc-container")),e(null)})})}).valueOf()).then(function(){return b})};return{init:d}}),define("common/modules/commercial/third-party-tags/audience-science-gateway",["common/utils/config"],function(e){function n(){return e.switches.audienceScienceGateway?require(["js!//js.revsci.net/gateway/gw.js?csid=F09828&auto=t&bpid=theguardian"]):void 0}return{load:n}}),define("common/modules/commercial/third-party-tags/imr-worldwide",["common/utils/config"],function(e){function n(){if(e.switches.imrWorldwide){var n=new Image;return n.src=["//secure-uk.imrworldwide.com/cgi-bin/m?ci=uk-305078h&cg=0&cc=1&ts=compact","&si=",encodeURI(window.location.href),"&rp=",encodeURI(document.referrer),"&rnd=",(new Date).getTime()].join(""),n}}return{load:n}}),define("common/modules/commercial/third-party-tags/remarketing",["common/utils/config"],function(e){function n(){return e.switches.remarketing?require(["js!"+o],function(){window.google_trackConversion({google_conversion_id:971225648,google_custom_params:window.google_tag_params,google_remarketing_only:!0})}):void 0}var o="//www.googleadservices.com/pagead/conversion_async.js";return{load:n}}),define("text!common/views/commercial/outbrain.html",[],function(){return'<div class="OUTBRAIN" data-widget-id="<%=widgetCode%>" data-ob-template="guardian"></div>'}),define("common/modules/commercial/third-party-tags/outbrain",["fastdom","common/utils/$","common/utils/_","common/utils/config","common/utils/detect","common/utils/mediator","common/utils/template","common/modules/identity/api","text!common/views/commercial/outbrain.html"],function(e,n,o,t,i,c,r,a,m){var s="//widgets.outbrain.com/outbrain.js";return{load:function(){var t,c,a,l=n(".js-outbrain"),d=n(".js-outbrain-container"),u={},g=i.getBreakpoint(),f=this.getSection();g=o.contains(["wide","desktop"],g)?"desktop":g,u={desktop:{image:{sections:"AR_12",all:"AR_13"},text:{sections:"AR_14",all:"AR_15"}},tablet:{image:{sections:"MB_6",all:"MB_7"},text:{sections:"MB_8",all:"MB_9"}},mobile:{image:{sections:"MB_4",all:"MB_5"}}},c=u[g].image[f],t=c,e.write(function(){l.css("display","block"),d.append(n.create(r(m,{widgetCode:t}))),"mobile"!==g&&(a=u[g].text[f],d.append(n.create(r(m,{widgetCode:a})))),require(["js!"+s])})},getSection:function(){return t.page.section.toLowerCase().match("news")||o.contains(["politics","world","business","commentisfree"],t.page.section.toLowerCase())?"sections":"all"},init:function(){!t.switches.outbrain||t.page.isPreview||a.isUserLoggedIn()||"childrens-books-site"===t.page.section||c.on("modules:commercial:dfp:rendered",function(e){"dfp-ad--merchandising-high"===e.slot.getSlotId().getDomId()&&e.isEmpty&&this.load()}.bind(this))}}}),define("common/modules/commercial/third-party-tags",["Promise","common/utils/config","common/utils/mediator","common/modules/commercial/third-party-tags/audience-science-gateway","common/modules/commercial/third-party-tags/audience-science-pql","common/modules/commercial/third-party-tags/imr-worldwide","common/modules/commercial/third-party-tags/remarketing","common/modules/commercial/third-party-tags/krux","common/modules/commercial/third-party-tags/outbrain"],function(e,n,o,t,i,c,r,a,m){function s(){if("Identity"===n.page.contentType||"identity"===n.page.section)return!1;switch(n.page.edition.toLowerCase()){case"uk":i.load(),t.load()}return m.init(),o.once("modules:commercial:dfp:rendered",function(){l()}),e.resolve(null)}function l(){c.load(),r.load(),a.load()}return{init:s}}),define("bootstraps/commercial",["Promise","common/utils/config","common/utils/mediator","common/utils/robust","common/utils/_","common/modules/commercial/article-aside-adverts","common/modules/commercial/article-body-adverts","common/modules/commercial/badges","common/modules/commercial/dfp","common/modules/commercial/front-commercial-components","common/modules/commercial/slice-adverts","common/modules/commercial/third-party-tags","common/modules/user-prefs"],function(e,n,o,t,i,c,r,a,m,s,l,d,u){var g=[["cm-articleAsideAdverts",c.init],["cm-articleBodyAdverts",r.init],["cm-sliceAdverts",l.init],["cm-frontCommercialComponents",s.init],["cm-thirdPartyTags",d.init],["cm-badges",a.init]];return{init:function(){var c=[];u.isOff("adverts")||n.page.shouldHideAdverts||n.page.isSSL&&"admin"!==n.page.section||window.location.hash.match(/[#&]noads(&.*)?$/)||(i.forEach(g,function(e){t.catchErrorsAndLog(e[0],function(){c.push(e[1]())})}),e.all(c).then(function(){n.switches.commercial&&t.catchErrorsAndLogAll([["cm-dfp",m.init],["cm-ready",function(){o.emit("page:commercial:ready")}]])}))}}});
//# sourceMappingURL=commercial.js.map