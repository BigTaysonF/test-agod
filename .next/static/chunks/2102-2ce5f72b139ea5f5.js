(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2102],{7942:function(e,a,n){"use strict";var r=n(63038);a.default=void 0;var t,s=(t=n(67294))&&t.__esModule?t:{default:t},o=n(64957),c=n(69898),l=n(90639);var i={};function d(e,a,n,r){if(e&&o.isLocalURL(a)){e.prefetch(a,n,r).catch((function(e){0}));var t=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;i[a+"%"+n+(t?"%"+t:"")]=!0}}var u=function(e){var a,n=!1!==e.prefetch,t=c.useRouter(),u=s.default.useMemo((function(){var a=o.resolveHref(t,e.href,!0),n=r(a,2),s=n[0],c=n[1];return{href:s,as:e.as?o.resolveHref(t,e.as):c||s}}),[t,e.href,e.as]),f=u.href,h=u.as,p=e.children,m=e.replace,v=e.shallow,g=e.scroll,x=e.locale;"string"===typeof p&&(p=s.default.createElement("a",null,p));var j=(a=s.default.Children.only(p))&&"object"===typeof a&&a.ref,N=l.useIntersection({rootMargin:"200px"}),b=r(N,2),w=b[0],y=b[1],k=s.default.useCallback((function(e){w(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,w]);s.default.useEffect((function(){var e=y&&n&&o.isLocalURL(f),a="undefined"!==typeof x?x:t&&t.locale,r=i[f+"%"+h+(a?"%"+a:"")];e&&!r&&d(t,f,h,{locale:a})}),[h,f,y,x,n,t]);var L={ref:k,onClick:function(e){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(e),e.defaultPrevented||function(e,a,n,r,t,s,c,l){("A"!==e.currentTarget.nodeName||!function(e){var a=e.currentTarget.target;return a&&"_self"!==a||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(n))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),a[t?"replace":"push"](n,r,{shallow:s,locale:l,scroll:c}))}(e,t,f,h,m,v,g,x)},onMouseEnter:function(e){o.isLocalURL(f)&&(a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),d(t,f,h,{priority:!0}))}};if(e.passHref||"a"===a.type&&!("href"in a.props)){var C="undefined"!==typeof x?x:t&&t.locale,E=t&&t.isLocaleDomain&&o.getDomainLocale(h,C,t&&t.locales,t&&t.domainLocales);L.href=E||o.addBasePath(o.addLocale(h,C,t&&t.defaultLocale))}return s.default.cloneElement(a,L)};a.default=u},90639:function(e,a,n){"use strict";var r=n(63038);Object.defineProperty(a,"__esModule",{value:!0}),a.useIntersection=function(e){var a=e.rootMargin,n=e.disabled||!o,l=t.useRef(),i=t.useState(!1),d=r(i,2),u=d[0],f=d[1],h=t.useCallback((function(e){l.current&&(l.current(),l.current=void 0),n||u||e&&e.tagName&&(l.current=function(e,a,n){var r=function(e){var a=e.rootMargin||"",n=c.get(a);if(n)return n;var r=new Map,t=new IntersectionObserver((function(e){e.forEach((function(e){var a=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;a&&n&&a(n)}))}),e);return c.set(a,n={id:a,observer:t,elements:r}),n}(n),t=r.id,s=r.observer,o=r.elements;return o.set(e,a),s.observe(e),function(){o.delete(e),s.unobserve(e),0===o.size&&(s.disconnect(),c.delete(t))}}(e,(function(e){return e&&f(e)}),{rootMargin:a}))}),[n,a,u]);return t.useEffect((function(){if(!o&&!u){var e=s.requestIdleCallback((function(){return f(!0)}));return function(){return s.cancelIdleCallback(e)}}}),[u]),[h,u]};var t=n(67294),s=n(26286),o="undefined"!==typeof IntersectionObserver;var c=new Map},57420:function(e,a){"use strict";a.Z=function(e){var a=[];if(!e.parentNode)return a;for(var n=e.parentNode.firstChild;n;)1===n.nodeType&&n!==e&&a.push(n),n=n.nextSibling;return a}},81108:function(e,a,n){"use strict";n.d(a,{z:function(){return t},_:function(){return s}});var r=n(57420),t=function(e){(0,r.Z)(e.target.parentElement).filter((function(e){return e.classList.contains("show")})).map((function(e){e.classList.remove("show"),e.childNodes[0]&&e.childNodes[0].setAttribute("aria-expanded",!1),e.childNodes[1]&&e.childNodes[1].classList.remove("show")})),e.target.parentElement.classList.toggle("show"),e.target.setAttribute("aria-expanded",!0),e.target.parentElement.childNodes[1].classList.toggle("show")},s=function(e){document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans")}},25914:function(e,a,n){"use strict";n(67294);var r=n(41664),t=n(82806),s=n(85893);a.Z=function(e){var a=e.hideBGCOLOR;return(0,s.jsx)("footer",{className:"".concat(a?"":"sub-bg"),children:(0,s.jsx)("div",{className:"container",children:(0,s.jsx)("div",{className:"row justify-content-center",children:(0,s.jsx)("div",{className:"col-lg-4",children:(0,s.jsxs)("div",{className:"item",children:[(0,s.jsx)("div",{className:"logo",children:(0,s.jsx)("img",{src:t.E8,alt:""})}),(0,s.jsxs)("div",{className:"social",children:[(0,s.jsx)("a",{href:"#0",children:(0,s.jsx)("i",{className:"fab fa-facebook-f"})}),(0,s.jsx)("a",{href:"#0",children:(0,s.jsx)("i",{className:"fab fa-twitter"})}),(0,s.jsx)("a",{href:"#0",children:(0,s.jsx)("i",{className:"fab fa-instagram"})}),(0,s.jsx)("a",{href:"#0",children:(0,s.jsx)("i",{className:"fab fa-youtube"})})]}),(0,s.jsx)("div",{className:"copy-right",children:(0,s.jsxs)("p",{children:["\xa9 2022, Vie Template. Made with passion by",(0,s.jsx)(r.default,{href:"https://themeforest.net/user/themescamp/portfolio",children:(0,s.jsx)("a",{target:"_blank",children:"ThemesCamp"})}),"."]})})]})})})})})}},30015:function(e,a,n){"use strict";n(67294);var r=n(41664),t=n(82806),s=n(81108),o=n(85893);a.Z=function(e){var a=e.lr,n=e.nr,c=e.theme;return(0,o.jsx)("nav",{ref:n,className:"navbar navbar-expand-lg change ".concat("themeL"===c?"light":""),children:(0,o.jsxs)("div",{className:"container",children:[(0,o.jsx)(r.default,{href:"/",children:(0,o.jsx)("a",{className:"logo",children:c&&"themeL"===c?(0,o.jsx)("img",{ref:a,src:t.Q1,alt:"logo"}):(0,o.jsx)("img",{ref:a,src:t.E8,alt:"logo"})})}),(0,o.jsx)("button",{className:"navbar-toggler",type:"button",onClick:s._,"data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,o.jsx)("span",{className:"icon-bar",children:(0,o.jsx)("i",{className:"fas fa-bars"})})}),(0,o.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:(0,o.jsx)("ul",{className:"navbar-nav ml-auto",children:(0,o.jsxs)("li",{className:"nav-item dropdown",onClick:s.z,children:[(0,o.jsx)("span",{className:"nav-link dropdown-toggle","data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false",children:"Home"}),(0,o.jsxs)("div",{className:"dropdown-menu",children:[(0,o.jsx)(r.default,{href:"/homepage/home1-dark",children:(0,o.jsx)("a",{className:"dropdown-item",children:"Main Home"})}),(0,o.jsx)(r.default,{href:"/homepage/home2-dark",children:(0,o.jsx)("a",{className:"dropdown-item",children:"Creative Agency"})}),(0,o.jsx)(r.default,{href:"/homepage/home5-dark",children:(0,o.jsx)("a",{className:"dropdown-item",children:"Digital Agency"})}),(0,o.jsx)(r.default,{href:"/homepage/home4-dark",children:(0,o.jsx)("a",{className:"dropdown-item",children:"Business One Page"})}),(0,o.jsx)(r.default,{href:"/homepage/home3-dark",children:(0,o.jsx)("a",{className:"dropdown-item",children:"Corporate Business"})}),(0,o.jsx)(r.default,{href:"/homepage/home6-dark",children:(0,o.jsx)("a",{className:"dropdown-item",children:"Modern Agency"})}),(0,o.jsx)(r.default,{href:"/homepage/home7-dark",children:(0,o.jsx)("a",{className:"dropdown-item",children:"Freelancer"})}),(0,o.jsx)(r.default,{href:"/homepage/home8-dark",children:(0,o.jsx)("a",{className:"dropdown-item",children:"Architecture"})})]})]})})})]})})}},21527:function(e,a,n){"use strict";n(67294);var r=n(85893);a.Z=function(e){var a=e.title,n=e.paragraph,t=e.className;return(0,r.jsx)("section",{className:"page-header ".concat(t&&t),children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row justify-content-center",children:(0,r.jsx)("div",{className:"col-lg-7 col-md-9",children:(0,r.jsxs)("div",{className:"cont text-center",children:[(0,r.jsx)("h1",{className:"mb-10 color-font",children:a}),(0,r.jsx)("p",{children:n})]})})})})})}},41664:function(e,a,n){e.exports=n(7942)}}]);