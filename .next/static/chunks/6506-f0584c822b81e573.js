(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6506],{7942:function(e,t,a){"use strict";var n=a(63038);t.default=void 0;var r,s=(r=a(67294))&&r.__esModule?r:{default:r},o=a(64957),c=a(69898),i=a(90639);var l={};function d(e,t,a,n){if(e&&o.isLocalURL(t)){e.prefetch(t,a,n).catch((function(e){0}));var r=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;l[t+"%"+a+(r?"%"+r:"")]=!0}}var f=function(e){var t,a=!1!==e.prefetch,r=c.useRouter(),f=s.default.useMemo((function(){var t=o.resolveHref(r,e.href,!0),a=n(t,2),s=a[0],c=a[1];return{href:s,as:e.as?o.resolveHref(r,e.as):c||s}}),[r,e.href,e.as]),u=f.href,h=f.as,p=e.children,m=e.replace,v=e.shallow,x=e.scroll,g=e.locale;"string"===typeof p&&(p=s.default.createElement("a",null,p));var j=(t=s.default.Children.only(p))&&"object"===typeof t&&t.ref,b=i.useIntersection({rootMargin:"200px"}),N=n(b,2),w=N[0],y=N[1],k=s.default.useCallback((function(e){w(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,w]);s.default.useEffect((function(){var e=y&&a&&o.isLocalURL(u),t="undefined"!==typeof g?g:r&&r.locale,n=l[u+"%"+h+(t?"%"+t:"")];e&&!n&&d(r,u,h,{locale:t})}),[h,u,y,g,a,r]);var L={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,a,n,r,s,c,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(a))&&(e.preventDefault(),null==c&&n.indexOf("#")>=0&&(c=!1),t[r?"replace":"push"](a,n,{shallow:s,locale:i,scroll:c}))}(e,r,u,h,m,v,x,g)},onMouseEnter:function(e){o.isLocalURL(u)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),d(r,u,h,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof g?g:r&&r.locale,C=r&&r.isLocaleDomain&&o.getDomainLocale(h,E,r&&r.locales,r&&r.domainLocales);L.href=C||o.addBasePath(o.addLocale(h,E,r&&r.defaultLocale))}return s.default.cloneElement(t,L)};t.default=f},90639:function(e,t,a){"use strict";var n=a(63038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,a=e.disabled||!o,i=r.useRef(),l=r.useState(!1),d=n(l,2),f=d[0],u=d[1],h=r.useCallback((function(e){i.current&&(i.current(),i.current=void 0),a||f||e&&e.tagName&&(i.current=function(e,t,a){var n=function(e){var t=e.rootMargin||"",a=c.get(t);if(a)return a;var n=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),a=e.isIntersecting||e.intersectionRatio>0;t&&a&&t(a)}))}),e);return c.set(t,a={id:t,observer:r,elements:n}),a}(a),r=n.id,s=n.observer,o=n.elements;return o.set(e,t),s.observe(e),function(){o.delete(e),s.unobserve(e),0===o.size&&(s.disconnect(),c.delete(r))}}(e,(function(e){return e&&u(e)}),{rootMargin:t}))}),[a,t,f]);return r.useEffect((function(){if(!o&&!f){var e=s.requestIdleCallback((function(){return u(!0)}));return function(){return s.cancelIdleCallback(e)}}}),[f]),[h,f]};var r=a(67294),s=a(26286),o="undefined"!==typeof IntersectionObserver;var c=new Map},32979:function(e,t){"use strict";t.Z=function(e){window.addEventListener("scroll",(function(){var t=window.pageYOffset;e&&e.forEach((function(e){e.style.transform="translate3d(0, "+-.2*t+"px, 0)",e.style.opacity=1-t/600}))}))}},57420:function(e,t){"use strict";t.Z=function(e){var t=[];if(!e.parentNode)return t;for(var a=e.parentNode.firstChild;a;)1===a.nodeType&&a!==e&&t.push(a),a=a.nextSibling;return t}},81108:function(e,t,a){"use strict";a.d(t,{z:function(){return r},_:function(){return s}});var n=a(57420),r=function(e){(0,n.Z)(e.target.parentElement).filter((function(e){return e.classList.contains("show")})).map((function(e){e.classList.remove("show"),e.childNodes[0]&&e.childNodes[0].setAttribute("aria-expanded",!1),e.childNodes[1]&&e.childNodes[1].classList.remove("show")})),e.target.parentElement.classList.toggle("show"),e.target.setAttribute("aria-expanded",!0),e.target.parentElement.childNodes[1].classList.toggle("show")},s=function(e){document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans")}},25914:function(e,t,a){"use strict";a(67294);var n=a(41664),r=a(82806),s=a(85893);t.Z=function(e){var t=e.hideBGCOLOR;return(0,s.jsx)("footer",{className:"".concat(t?"":"sub-bg"),children:(0,s.jsx)("div",{className:"container",children:(0,s.jsx)("div",{className:"row justify-content-center",children:(0,s.jsx)("div",{className:"col-xl-6",children:(0,s.jsxs)("div",{className:"item",children:[(0,s.jsxs)("div",{className:"social",children:[(0,s.jsx)("a",{href:"https://www.facebook.com/AgodCoin/",children:(0,s.jsx)("i",{className:"fab fa-facebook-f"})}),(0,s.jsx)("a",{href:"https://twitter.com/AgodProtocol",children:(0,s.jsx)("i",{className:"fab fa-twitter"})}),(0,s.jsx)("a",{href:"https://www.instagram.com/AgodProtocol/",children:(0,s.jsx)("i",{className:"fab fa-instagram"})}),(0,s.jsx)("a",{href:"https://t.me/joinchat/pqK7k1A3rf82NGEx",children:(0,s.jsx)("i",{className:"fab fa-telegram"})}),(0,s.jsx)("a",{href:"https://www.linkedin.com/company/agodprotocol",children:(0,s.jsx)("i",{className:"fab fa-linkedin"})}),(0,s.jsx)("a",{href:"https://discord.com/invite/mgnwxa24Ph",children:(0,s.jsx)("i",{className:"fab fa-discord"})}),(0,s.jsx)("a",{href:"https://ablocexchange.medium.com/",children:(0,s.jsx)("i",{className:"fab fa-medium"})})]}),(0,s.jsx)("div",{className:"logo",children:(0,s.jsx)("img",{src:r.le,alt:""})}),(0,s.jsxs)("div",{className:"copy-right",children:[(0,s.jsxs)("p",{children:["Copyright \xa9 AGOD Protocol 2021, Marketing and Media By :",(0,s.jsx)(n.default,{href:"https://knockout.media/",children:(0,s.jsx)("a",{target:"_blank",children:"Knockout Media"})}),"."]}),(0,s.jsxs)("p",{children:[(0,s.jsx)(n.default,{href:"https://agod.mx/terms/",children:(0,s.jsx)("a",{target:"_blank",children:"Terms of Use"})}),"||",(0,s.jsx)(n.default,{href:"https://agod.mx/privacy/",children:(0,s.jsx)("a",{target:"_blank",children:"Privacy Policy"})})]})]})]})})})})})}},30015:function(e,t,a){"use strict";a(67294);var n=a(41664),r=a(82806),s=a(81108),o=a(85893);t.Z=function(e){var t=e.lr,a=e.nr,c=e.theme;return(0,o.jsx)("nav",{ref:a,className:"navbar navbar-expand-lg change ".concat("themeL"===c?"light":""),children:(0,o.jsxs)("div",{className:"container",children:[(0,o.jsx)(n.default,{href:"/",children:(0,o.jsx)("a",{className:"logo",children:c&&"themeL"===c?(0,o.jsx)("img",{ref:t,src:r.Q1,alt:"logo"}):(0,o.jsx)("img",{ref:t,src:r.E8,alt:"logo"})})}),(0,o.jsx)("button",{className:"navbar-toggler",type:"button",onClick:s._,"data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,o.jsx)("span",{className:"icon-bar",children:(0,o.jsx)("i",{className:"fas fa-bars"})})})]})})}},27196:function(e,t,a){"use strict";var n=a(67294),r=a(32979),s=a(85893);t.Z=function(e){var t=e.sliderRef;return n.useEffect((function(){(0,r.Z)(document.querySelectorAll(".fixed-slider .capt .parlx"))}),[]),(0,s.jsx)("header",{ref:t,className:"works-header fixed-slider hfixd valign sub-bg",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsx)("div",{className:"row justify-content-center",children:(0,s.jsx)("div",{className:"col-lg-7 col-md-9 static",children:(0,s.jsxs)("div",{className:"capt mt-50",children:[(0,s.jsxs)("div",{className:"parlx text-center",children:[(0,s.jsx)("h1",{className:"color-font",children:"amazing works"}),(0,s.jsx)("p",{children:"Creativity involves breaking out of expected & repeatable patterns in order to look at things in different way than ever before."})]}),(0,s.jsx)("div",{className:"bactxt custom-font valign",children:(0,s.jsx)("span",{className:"full-width",children:"Works"})})]})})})})})}},41664:function(e,t,a){e.exports=a(7942)}}]);