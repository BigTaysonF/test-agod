(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6385],{7942:function(e,t,a){"use strict";var s=a(63038);t.default=void 0;var n,i=(n=a(67294))&&n.__esModule?n:{default:n},r=a(64957),l=a(69898),o=a(90639);var c={};function d(e,t,a,s){if(e&&r.isLocalURL(t)){e.prefetch(t,a,s).catch((function(e){0}));var n=s&&"undefined"!==typeof s.locale?s.locale:e&&e.locale;c[t+"%"+a+(n?"%"+n:"")]=!0}}var u=function(e){var t,a=!1!==e.prefetch,n=l.useRouter(),u=i.default.useMemo((function(){var t=r.resolveHref(n,e.href,!0),a=s(t,2),i=a[0],l=a[1];return{href:i,as:e.as?r.resolveHref(n,e.as):l||i}}),[n,e.href,e.as]),f=u.href,h=u.as,p=e.children,m=e.replace,g=e.shallow,v=e.scroll,j=e.locale;"string"===typeof p&&(p=i.default.createElement("a",null,p));var b=(t=i.default.Children.only(p))&&"object"===typeof t&&t.ref,x=o.useIntersection({rootMargin:"200px"}),N=s(x,2),y=N[0],k=N[1],w=i.default.useCallback((function(e){y(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,y]);i.default.useEffect((function(){var e=k&&a&&r.isLocalURL(f),t="undefined"!==typeof j?j:n&&n.locale,s=c[f+"%"+h+(t?"%"+t:"")];e&&!s&&d(n,f,h,{locale:t})}),[h,f,k,j,a,n]);var L={ref:w,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,a,s,n,i,l,o){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&r.isLocalURL(a))&&(e.preventDefault(),null==l&&s.indexOf("#")>=0&&(l=!1),t[n?"replace":"push"](a,s,{shallow:i,locale:o,scroll:l}))}(e,n,f,h,m,g,v,j)},onMouseEnter:function(e){r.isLocalURL(f)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),d(n,f,h,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof j?j:n&&n.locale,C=n&&n.isLocaleDomain&&r.getDomainLocale(h,E,n&&n.locales,n&&n.domainLocales);L.href=C||r.addBasePath(r.addLocale(h,E,n&&n.defaultLocale))}return i.default.cloneElement(t,L)};t.default=u},90639:function(e,t,a){"use strict";var s=a(63038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,a=e.disabled||!r,o=n.useRef(),c=n.useState(!1),d=s(c,2),u=d[0],f=d[1],h=n.useCallback((function(e){o.current&&(o.current(),o.current=void 0),a||u||e&&e.tagName&&(o.current=function(e,t,a){var s=function(e){var t=e.rootMargin||"",a=l.get(t);if(a)return a;var s=new Map,n=new IntersectionObserver((function(e){e.forEach((function(e){var t=s.get(e.target),a=e.isIntersecting||e.intersectionRatio>0;t&&a&&t(a)}))}),e);return l.set(t,a={id:t,observer:n,elements:s}),a}(a),n=s.id,i=s.observer,r=s.elements;return r.set(e,t),i.observe(e),function(){r.delete(e),i.unobserve(e),0===r.size&&(i.disconnect(),l.delete(n))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[a,t,u]);return n.useEffect((function(){if(!r&&!u){var e=i.requestIdleCallback((function(){return f(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[u]),[h,u]};var n=a(67294),i=a(26286),r="undefined"!==typeof IntersectionObserver;var l=new Map},57420:function(e,t){"use strict";t.Z=function(e){var t=[];if(!e.parentNode)return t;for(var a=e.parentNode.firstChild;a;)1===a.nodeType&&a!==e&&t.push(a),a=a.nextSibling;return t}},81108:function(e,t,a){"use strict";a.d(t,{z:function(){return n},_:function(){return i}});var s=a(57420),n=function(e){(0,s.Z)(e.target.parentElement).filter((function(e){return e.classList.contains("show")})).map((function(e){e.classList.remove("show"),e.childNodes[0]&&e.childNodes[0].setAttribute("aria-expanded",!1),e.childNodes[1]&&e.childNodes[1].classList.remove("show")})),e.target.parentElement.classList.toggle("show"),e.target.setAttribute("aria-expanded",!0),e.target.parentElement.childNodes[1].classList.toggle("show")},i=function(e){document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans")}},54668:function(e,t,a){"use strict";a(67294);var s=a(41664),n=a(85893);t.Z=function(e){var t=e.blogs;return(0,n.jsx)("section",{className:"blog-pg blog-list section-padding pt-0",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row justify-content-center",children:(0,n.jsx)("div",{className:"col-lg-11",children:(0,n.jsxs)("div",{className:"posts mt-80",children:[t.map((function(e,t){return(0,n.jsx)("div",{className:"item mb-80 wow fadeInUp","data-wow-delay":".3s",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-lg-6 valign",children:(0,n.jsx)("div",{className:"img md-mb50",children:(0,n.jsx)("img",{src:e.image,alt:""})})}),(0,n.jsx)("div",{className:"col-lg-6 valign",children:(0,n.jsx)("div",{className:"cont",children:(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"info",children:[(0,n.jsx)(s.default,{href:"/blog/blog-dark",children:(0,n.jsx)("a",{className:"date",children:(0,n.jsxs)("span",{children:[(0,n.jsx)("i",{children:e.date.day}),e.date.month]})})}),(0,n.jsx)("span",{children:"/"}),e.tags.map((function(e,t){return(0,n.jsx)(s.default,{href:"/blog/blog-dark",children:(0,n.jsx)("a",{className:"tag",children:(0,n.jsx)("span",{children:e})})},t)}))]}),(0,n.jsx)("h5",{children:(0,n.jsx)(s.default,{href:"/blog-details/blog-details-dark",children:(0,n.jsx)("a",{children:e.title})})}),(0,n.jsx)("p",{className:"mt-10",children:e.content.substr(0,146)+"..."}),(0,n.jsx)("div",{className:"btn-more mt-30",children:(0,n.jsx)(s.default,{href:"/blog-details/blog-details-dark",children:(0,n.jsx)("a",{className:"simple-btn",children:"Read More"})})})]})})})]})},e.id)})),(0,n.jsxs)("div",{className:"pagination",children:[(0,n.jsx)("span",{className:"active",children:(0,n.jsx)(s.default,{href:"/blog/blog-dark",children:"1"})}),(0,n.jsx)("span",{children:(0,n.jsx)(s.default,{href:"/blog/blog-dark",children:"2"})}),(0,n.jsx)("span",{children:(0,n.jsx)(s.default,{href:"/blog/blog-dark",children:(0,n.jsx)("a",{children:(0,n.jsx)("i",{className:"fas fa-angle-right"})})})})]})]})})})})})}},25914:function(e,t,a){"use strict";a(67294);var s=a(41664),n=a(82806),i=a(85893);t.Z=function(e){var t=e.hideBGCOLOR;return(0,i.jsx)("footer",{className:"".concat(t?"":"sub-bg"),children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row justify-content-center",children:(0,i.jsx)("div",{className:"col-lg-4",children:(0,i.jsxs)("div",{className:"item",children:[(0,i.jsx)("div",{className:"logo",children:(0,i.jsx)("img",{src:n.E8,alt:""})}),(0,i.jsxs)("div",{className:"social",children:[(0,i.jsx)("a",{href:"#0",children:(0,i.jsx)("i",{className:"fab fa-facebook-f"})}),(0,i.jsx)("a",{href:"#0",children:(0,i.jsx)("i",{className:"fab fa-twitter"})}),(0,i.jsx)("a",{href:"#0",children:(0,i.jsx)("i",{className:"fab fa-instagram"})}),(0,i.jsx)("a",{href:"#0",children:(0,i.jsx)("i",{className:"fab fa-youtube"})})]}),(0,i.jsx)("div",{className:"copy-right",children:(0,i.jsxs)("p",{children:["\xa9 2022, Vie Template. Made with passion by",(0,i.jsx)(s.default,{href:"https://themeforest.net/user/themescamp/portfolio",children:(0,i.jsx)("a",{target:"_blank",children:"ThemesCamp"})}),"."]})})]})})})})})}},30015:function(e,t,a){"use strict";a(67294);var s=a(41664),n=a(82806),i=a(81108),r=a(85893);t.Z=function(e){var t=e.lr,a=e.nr,l=e.theme;return(0,r.jsx)("nav",{ref:a,className:"navbar navbar-expand-lg change ".concat("themeL"===l?"light":""),children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)(s.default,{href:"/",children:(0,r.jsx)("a",{className:"logo",children:l&&"themeL"===l?(0,r.jsx)("img",{ref:t,src:n.Q1,alt:"logo"}):(0,r.jsx)("img",{ref:t,src:n.E8,alt:"logo"})})}),(0,r.jsx)("button",{className:"navbar-toggler",type:"button",onClick:i._,"data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,r.jsx)("span",{className:"icon-bar",children:(0,r.jsx)("i",{className:"fas fa-bars"})})})]})})}},21527:function(e,t,a){"use strict";a(67294);var s=a(85893);t.Z=function(e){var t=e.title,a=e.paragraph,n=e.className;return(0,s.jsx)("section",{className:"page-header ".concat(n&&n),children:(0,s.jsx)("div",{className:"container",children:(0,s.jsx)("div",{className:"row justify-content-center",children:(0,s.jsx)("div",{className:"col-lg-7 col-md-9",children:(0,s.jsxs)("div",{className:"cont text-center",children:[(0,s.jsx)("h1",{className:"mb-10 color-font",children:t}),(0,s.jsx)("p",{children:a})]})})})})})}},41664:function(e,t,a){e.exports=a(7942)},64039:function(e){"use strict";e.exports=JSON.parse('[{"id":1,"title":"How to use solid color combine with simple furnitures.","content":"My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. These qualities can be combined perfectly natural. However, things like people look miserable, if these properties are connected.","image":"/img/blog/l1.jpg","tags":["WordPress","Themeforest","Vie"],"date":{"day":"07","month":"August"}},{"id":2,"title":"Build a Beautiful Blog With Ease","content":"My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. These qualities can be combined perfectly natural. However, things like people look miserable, if these properties are connected.","image":"/img/blog/l2.jpg","tags":["WordPress"],"date":{"day":"07","month":"August"}},{"id":3,"title":"Build a Beautiful Blog With Ease","content":"My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. These qualities can be combined perfectly natural. However, things like people look miserable, if these properties are connected.","image":"/img/blog/l3.jpg","tags":["WordPress","Themeforest","Vie"],"date":{"day":"07","month":"August"}}]')}}]);