(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7485],{7942:function(e,t,a){"use strict";var s=a(63038);t.default=void 0;var i,n=(i=a(67294))&&i.__esModule?i:{default:i},r=a(64957),l=a(69898),o=a(90639);var c={};function d(e,t,a,s){if(e&&r.isLocalURL(t)){e.prefetch(t,a,s).catch((function(e){0}));var i=s&&"undefined"!==typeof s.locale?s.locale:e&&e.locale;c[t+"%"+a+(i?"%"+i:"")]=!0}}var f=function(e){var t,a=!1!==e.prefetch,i=l.useRouter(),f=n.default.useMemo((function(){var t=r.resolveHref(i,e.href,!0),a=s(t,2),n=a[0],l=a[1];return{href:n,as:e.as?r.resolveHref(i,e.as):l||n}}),[i,e.href,e.as]),u=f.href,h=f.as,p=e.children,m=e.replace,g=e.shallow,b=e.scroll,j=e.locale;"string"===typeof p&&(p=n.default.createElement("a",null,p));var x=(t=n.default.Children.only(p))&&"object"===typeof t&&t.ref,v=o.useIntersection({rootMargin:"200px"}),N=s(v,2),y=N[0],k=N[1],w=n.default.useCallback((function(e){y(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,y]);n.default.useEffect((function(){var e=k&&a&&r.isLocalURL(u),t="undefined"!==typeof j?j:i&&i.locale,s=c[u+"%"+h+(t?"%"+t:"")];e&&!s&&d(i,u,h,{locale:t})}),[h,u,k,j,a,i]);var E={ref:w,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,a,s,i,n,l,o){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&r.isLocalURL(a))&&(e.preventDefault(),null==l&&s.indexOf("#")>=0&&(l=!1),t[i?"replace":"push"](a,s,{shallow:n,locale:o,scroll:l}))}(e,i,u,h,m,g,b,j)},onMouseEnter:function(e){r.isLocalURL(u)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),d(i,u,h,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var L="undefined"!==typeof j?j:i&&i.locale,M=i&&i.isLocaleDomain&&r.getDomainLocale(h,L,i&&i.locales,i&&i.domainLocales);E.href=M||r.addBasePath(r.addLocale(h,L,i&&i.defaultLocale))}return n.default.cloneElement(t,E)};t.default=f},90639:function(e,t,a){"use strict";var s=a(63038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,a=e.disabled||!r,o=i.useRef(),c=i.useState(!1),d=s(c,2),f=d[0],u=d[1],h=i.useCallback((function(e){o.current&&(o.current(),o.current=void 0),a||f||e&&e.tagName&&(o.current=function(e,t,a){var s=function(e){var t=e.rootMargin||"",a=l.get(t);if(a)return a;var s=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=s.get(e.target),a=e.isIntersecting||e.intersectionRatio>0;t&&a&&t(a)}))}),e);return l.set(t,a={id:t,observer:i,elements:s}),a}(a),i=s.id,n=s.observer,r=s.elements;return r.set(e,t),n.observe(e),function(){r.delete(e),n.unobserve(e),0===r.size&&(n.disconnect(),l.delete(i))}}(e,(function(e){return e&&u(e)}),{rootMargin:t}))}),[a,t,f]);return i.useEffect((function(){if(!r&&!f){var e=n.requestIdleCallback((function(){return u(!0)}));return function(){return n.cancelIdleCallback(e)}}}),[f]),[h,f]};var i=a(67294),n=a(26286),r="undefined"!==typeof IntersectionObserver;var l=new Map},57420:function(e,t){"use strict";t.Z=function(e){var t=[];if(!e.parentNode)return t;for(var a=e.parentNode.firstChild;a;)1===a.nodeType&&a!==e&&t.push(a),a=a.nextSibling;return t}},81108:function(e,t,a){"use strict";a.d(t,{z:function(){return i},_:function(){return n}});var s=a(57420),i=function(e){(0,s.Z)(e.target.parentElement).filter((function(e){return e.classList.contains("show")})).map((function(e){e.classList.remove("show"),e.childNodes[0]&&e.childNodes[0].setAttribute("aria-expanded",!1),e.childNodes[1]&&e.childNodes[1].classList.remove("show")})),e.target.parentElement.classList.toggle("show"),e.target.setAttribute("aria-expanded",!0),e.target.parentElement.childNodes[1].classList.toggle("show")},n=function(e){document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans")}},62067:function(e,t,a){"use strict";a(67294);var s=a(41664),i=a(85893);t.Z=function(e){var t=e.blogs;return(0,i.jsx)("section",{className:"blog-pg section-padding pt-0",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row justify-content-center",children:(0,i.jsx)("div",{className:"col-lg-11",children:(0,i.jsxs)("div",{className:"posts",children:[t.map((function(e,a){return(0,i.jsxs)("div",{className:"item ".concat(a===t.length-1?"":"mb-80"),children:[(0,i.jsx)("div",{className:"img",children:(0,i.jsx)(s.default,{href:"/blog-details/blog-details-dark",children:(0,i.jsx)("a",{children:(0,i.jsx)("img",{src:e.image,alt:""})})})}),(0,i.jsx)("div",{className:"content",children:(0,i.jsx)("div",{className:"row justify-content-center",children:(0,i.jsxs)("div",{className:"col-10",children:[(0,i.jsx)(s.default,{href:"/blog/blog-dark",children:(0,i.jsxs)("a",{className:"date",children:[(0,i.jsx)("span",{className:"num",children:e.date.day}),(0,i.jsx)("span",{children:e.date.month})]})}),(0,i.jsx)("div",{className:"tags",children:e.tags.map((function(e,t){return(0,i.jsx)(s.default,{href:"/blog/blog-dark",children:e},t)}))}),(0,i.jsx)("h4",{className:"title",children:(0,i.jsx)(s.default,{href:"/blog-details/blog-details-dark",children:e.title})}),(0,i.jsx)("p",{children:e.content}),(0,i.jsx)(s.default,{href:"/blog-details/blog-details-dark",children:(0,i.jsx)("a",{className:"butn bord curve mt-30",children:"Read More"})})]})})})]},e.id)})),(0,i.jsxs)("div",{className:"pagination",children:[(0,i.jsx)("span",{className:"active",children:(0,i.jsx)(s.default,{href:"/blog/blog-dark",children:"1"})}),(0,i.jsx)("span",{children:(0,i.jsx)(s.default,{href:"/blog/blog-dark",children:"2"})}),(0,i.jsx)("span",{children:(0,i.jsx)(s.default,{href:"/blog/blog-dark",children:(0,i.jsx)("a",{children:(0,i.jsx)("i",{className:"fas fa-angle-right"})})})})]})]})})})})})}},25914:function(e,t,a){"use strict";a(67294);var s=a(41664),i=a(82806),n=a(85893);t.Z=function(e){var t=e.hideBGCOLOR;return(0,n.jsx)("footer",{className:"".concat(t?"":"sub-bg"),children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row justify-content-center",children:(0,n.jsx)("div",{className:"col-xl-6",children:(0,n.jsxs)("div",{className:"item",children:[(0,n.jsxs)("div",{className:"social",children:[(0,n.jsx)("a",{href:"https://www.facebook.com/AgodCoin/",children:(0,n.jsx)("i",{className:"fab fa-facebook-f"})}),(0,n.jsx)("a",{href:"https://twitter.com/AgodProtocol",children:(0,n.jsx)("i",{className:"fab fa-twitter"})}),(0,n.jsx)("a",{href:"https://www.instagram.com/AgodProtocol/",children:(0,n.jsx)("i",{className:"fab fa-instagram"})}),(0,n.jsx)("a",{href:"https://t.me/joinchat/pqK7k1A3rf82NGEx",children:(0,n.jsx)("i",{className:"fab fa-telegram"})}),(0,n.jsx)("a",{href:"https://www.linkedin.com/company/agodprotocol",children:(0,n.jsx)("i",{className:"fab fa-linkedin"})}),(0,n.jsx)("a",{href:"https://discord.com/invite/mgnwxa24Ph",children:(0,n.jsx)("i",{className:"fab fa-discord"})}),(0,n.jsx)("a",{href:"https://ablocexchange.medium.com/",children:(0,n.jsx)("i",{className:"fab fa-medium"})})]}),(0,n.jsx)("div",{className:"logo",children:(0,n.jsx)("img",{src:i.le,alt:""})}),(0,n.jsxs)("div",{className:"copy-right",children:[(0,n.jsxs)("p",{children:["Copyright \xa9 AGOD Protocol 2021, Marketing and Media By :",(0,n.jsx)(s.default,{href:"https://knockout.media/",children:(0,n.jsx)("a",{target:"_blank",children:"Knockout Media"})}),"."]}),(0,n.jsxs)("p",{children:[(0,n.jsx)(s.default,{href:"https://agod.mx/terms/",children:(0,n.jsx)("a",{target:"_blank",children:"Terms of Use"})}),"||",(0,n.jsx)(s.default,{href:"https://agod.mx/privacy/",children:(0,n.jsx)("a",{target:"_blank",children:"Privacy Policy"})})]})]})]})})})})})}},30015:function(e,t,a){"use strict";a(67294);var s=a(41664),i=a(82806),n=a(81108),r=a(85893);t.Z=function(e){var t=e.lr,a=e.nr,l=e.theme;return(0,r.jsx)("nav",{ref:a,className:"navbar navbar-expand-lg change ".concat("themeL"===l?"light":""),children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)(s.default,{href:"/",children:(0,r.jsx)("a",{className:"logo",children:l&&"themeL"===l?(0,r.jsx)("img",{ref:t,src:i.Q1,alt:"logo"}):(0,r.jsx)("img",{ref:t,src:i.E8,alt:"logo"})})}),(0,r.jsx)("button",{className:"navbar-toggler",type:"button",onClick:n._,"data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,r.jsx)("span",{className:"icon-bar",children:(0,r.jsx)("i",{className:"fas fa-bars"})})})]})})}},21527:function(e,t,a){"use strict";a(67294);var s=a(85893);t.Z=function(e){var t=e.title,a=e.paragraph,i=e.className;return(0,s.jsx)("section",{className:"page-header ".concat(i&&i),children:(0,s.jsx)("div",{className:"container",children:(0,s.jsx)("div",{className:"row justify-content-center",children:(0,s.jsx)("div",{className:"col-lg-7 col-md-9",children:(0,s.jsxs)("div",{className:"cont text-center",children:[(0,s.jsx)("h1",{className:"mb-10 color-font",children:t}),(0,s.jsx)("p",{children:a})]})})})})})}},41664:function(e,t,a){e.exports=a(7942)},29577:function(e){"use strict";e.exports=JSON.parse('[{"id":1,"title":"Build a Beautiful Blog With Ease","content":"My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. These qualities can be combined perfectly natural. However, things like people look miserable, if these properties are connected.","image":"/img/blog/b1.jpg","tags":["WordPress","Themeforest","Vie"],"date":{"day":"07","month":"August"}},{"id":2,"title":"Build a Beautiful Blog With Ease","content":"My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. These qualities can be combined perfectly natural. However, things like people look miserable, if these properties are connected.","image":"/img/blog/b2.jpg","tags":["WordPress","Themeforest","Vie"],"date":{"day":"07","month":"August"}},{"id":3,"title":"Build a Beautiful Blog With Ease","content":"My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. These qualities can be combined perfectly natural. However, things like people look miserable, if these properties are connected.","image":"/img/blog/b3.jpg","tags":["WordPress","Themeforest","Vie"],"date":{"day":"07","month":"August"}},{"id":4,"title":"Build a Beautiful Blog With Ease","content":"My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. These qualities can be combined perfectly natural. However, things like people look miserable, if these properties are connected.","image":"/img/blog/b4.jpg","tags":["WordPress","Themeforest","Vie"],"date":{"day":"07","month":"August"}}]')}}]);