"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1040],{26190:function(e,s,a){var i=a(57420);s.Z=function(e){e&&e.forEach((function(e){e.onmouseover=function(s){e.classList.add("active");(0,i.Z)(e).map((function(e){return e.classList.remove("active")}))}}))}},66025:function(e,s,a){a.d(s,{$:function(){return i},D:function(){return t}});var i=function(){var e=document.getElementsByClassName("thumparallax");e&&new simpleParallax(e,{delay:1,scale:1.1})},t=function(){var e=document.getElementsByClassName("thumparallax-down");e&&new simpleParallax(e,{orientation:"down",delay:1,scale:1.1})}},90850:function(e,s,a){a.d(s,{Z:function(){return n}});var i=0,t=function(e,s){setInterval(function(e){(i=Number(window.getComputedStyle(e).getPropertyValue("opacity")))<1?(i+=1,e.style.opacity=i):clearInterval(0)}(e),s)};var l=function(e,s){setInterval(function(e){(i=Number(window.getComputedStyle(e).getPropertyValue("opacity")))>0?(i=0,e.style.opacity=i):clearInterval(0)}(e),s)};var n=function(){var e=document.createElement("div");e.classList.add("div-tooltip-tit"),document.body.appendChild(e);var s=document.createElement("div");s.classList.add("div-tooltip-sub"),document.body.appendChild(s),document.querySelectorAll("[data-tooltip-tit]").forEach((function(s){e=document.querySelector(".div-tooltip-tit"),s.addEventListener("mouseover",(function(){e.innerText=s.getAttribute("data-tooltip-tit")})),s.addEventListener("mousemove",(function(s){t(e,800),e.style.top=s.pageY+10+"px",e.style.left=s.pageX+20+"px",e.style.padding="0px 10px"})),s.addEventListener("mouseleave",(function(){l(e,800),e.style.padding=0}))})),document.querySelectorAll("[data-tooltip-sub]").forEach((function(e){s=document.querySelector(".div-tooltip-sub"),e.addEventListener("mouseover",(function(){s.innerText=e.getAttribute("data-tooltip-sub")})),e.addEventListener("mousemove",(function(e){t(s,800),s.style.top=e.pageY-15+"px",s.style.left=e.pageX+30+"px",s.style.padding="5px 10px"})),e.addEventListener("mouseleave",(function(){l(s,800),s.style.padding=0}))}))}},18728:function(e,s,a){a.d(s,{Z:function(){return n}});a(67294);var i=a(51514),t=JSON.parse('{"TN":"Who We Are ?","X8":"We develop creative solutions for small and big brands alike, build authentic product identities and much more.Lorem ipsum dolor sit amet, consectetur adipiscing elit sit non facilisis vitae eut.","i7":"lorem in id tristique in elementum leo nisi eleifend placerat magna lacus elementum ornare vehicula odio posuere quisque ultrices tempus cras id blandit maecenas in ornare quis dolor tempus risus vitae feugiat fames aliquet sed."}'),l=a(85893),n=function(){return(0,l.jsx)("section",{className:"intro-section section-padding pb-0",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col-lg-3 col-md-4",children:(0,l.jsx)("div",{className:"htit sm-mb30",children:(0,l.jsx)("h4",{children:t.TN})})}),(0,l.jsx)("div",{className:"col-lg-8 offset-lg-1 col-md-8",children:(0,l.jsx)("div",{className:"text",children:(0,l.jsxs)(i.Z,{children:[(0,l.jsx)("p",{className:"wow txt mb-10 words chars splitting","data-splitting":!0,children:t.X8}),(0,l.jsx)("p",{className:"wow txt words chars splitting","data-splitting":!0,children:t.i7})]})})})]})})})}},72786:function(e,s,a){a(67294);var i=a(51514),t=a(41664),l=a(85893);s.Z=function(e){var s=e.img;return(0,l.jsx)("section",{className:"call-action section-padding sub-bg bg-img",style:{backgroundImage:"url(".concat(s||"/img/patrn.svg",")")},children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col-md-8 col-lg-9",children:(0,l.jsx)("div",{className:"content sm-mb30",children:(0,l.jsxs)(i.Z,{children:[(0,l.jsx)("h6",{className:"wow words chars splitting","data-splitting":!0,children:"Let\u2019s Talk"}),(0,l.jsxs)("h2",{className:"wow words chars splitting","data-splitting":!0,children:["about your ",(0,l.jsx)("br",{})," ",(0,l.jsx)("b",{className:"back-color",children:"next project"}),"."]})]})})}),(0,l.jsx)("div",{className:"col-md-4 col-lg-3 valign",children:(0,l.jsx)(t.default,{href:"/contact/contact-dark",children:(0,l.jsx)("a",{className:"butn bord curve wow fadeInUp","data-wow-delay":".5s",children:(0,l.jsx)("span",{children:"Get In Touch"})})})})]})})})}},57831:function(e,s,a){a(67294);var i=a(58004),t=a(51514),l=a(85893);s.Z=function(e){var s=e.theme,a=i.slice(0,i.length/2),n=i.slice(4,i.length);return(0,l.jsx)("section",{className:"clients section-padding",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col-lg-4 valign md-mb50",children:(0,l.jsxs)("div",{className:"sec-head mb-0",children:[(0,l.jsx)("h6",{className:"wow fadeIn","data-wow-delay":".5s",children:"Best Features"}),(0,l.jsx)("h3",{className:"wow mb-20 color-font",children:"Our Clients"}),(0,l.jsx)("p",{children:"Our area of practice is quite wide: design, graphics, branding, development."})]})}),(0,l.jsx)("div",{className:"col-lg-8",children:(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"row bord",children:a.map((function(e){return(0,l.jsx)("div",{className:"col-md-3 col-6 brands",children:(0,l.jsx)("div",{className:"item wow fadeIn","data-wow-delay":"".concat(1==e.id?".3":2==e.id?".6":3==e.id?".8":4==e.id?".3":"","s"),children:(0,l.jsxs)("div",{className:"img",children:["light"===s?(0,l.jsx)("img",{src:e.lightImage,alt:""}):(0,l.jsx)("img",{src:e.darkImage,alt:""}),(0,l.jsx)(t.Z,{children:(0,l.jsx)("a",{href:"#0",className:"link words chars splitting","data-splitting":!0,children:e.url})})]})})},e.id)}))}),(0,l.jsx)("div",{className:"row",children:n.map((function(e){return(0,l.jsx)("div",{className:"".concat(5==e.id||6==e.id?"col-md-3 col-6 brands sm-mb30":7==e.id||8==e.id?"col-md-3 col-6 brands":""),children:(0,l.jsx)("div",{className:"item wow fadeIn","data-wow-delay":"".concat(1==e.id?".4":2==e.id?".7":3==e.id?".5":4==e.id?".3":"","s"),children:(0,l.jsxs)("div",{className:"img",children:["light"===s?(0,l.jsx)("img",{src:e.lightImage,alt:""}):(0,l.jsx)("img",{src:e.darkImage,alt:""}),(0,l.jsx)(t.Z,{children:(0,l.jsx)("a",{href:"#0",className:"link words chars splitting","data-splitting":!0,children:e.url})})]})})},e.id)}))})]})})]})})})}},77532:function(e,s,a){var i=a(67294),t=a(26190),l=a(66025),n=a(85893);s.Z=function(){return i.useEffect((function(){(0,t.Z)(document.querySelectorAll(".feat .items")),setTimeout((function(){(0,l.D)()}),1e3)}),[]),(0,n.jsx)("section",{className:"min-area sub-bg",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-lg-6",children:(0,n.jsx)("div",{className:"img",children:(0,n.jsx)("img",{className:"thumparallax-down",src:"/img/min-area.jpg",alt:""})})}),(0,n.jsx)("div",{className:"col-lg-6 valign",children:(0,n.jsxs)("div",{className:"content pt-0",children:[(0,n.jsx)("h4",{className:"wow color-font",children:"About us."}),(0,n.jsx)("p",{className:"wow txt","data-splitting":!0,children:"Our creative Ad agency is ranked among the finest in the US. We cultivate smart ideas for start-ups and seasoned players."}),(0,n.jsxs)("ul",{className:"feat",children:[(0,n.jsxs)("li",{className:"wow fadeInUp","data-wow-delay":".2s",children:[(0,n.jsxs)("h6",{children:[(0,n.jsx)("span",{children:"1"})," Our Mission"]}),(0,n.jsx)("p",{children:"luctus massa ipsum at tempus eleifend congue lectus bibendum"})]}),(0,n.jsxs)("li",{className:"wow fadeInUp","data-wow-delay":".4s",children:[(0,n.jsxs)("h6",{children:[(0,n.jsx)("span",{children:"2"})," Our Goals"]}),(0,n.jsx)("p",{children:"luctus massa ipsum at tempus eleifend congue lectus bibendum"})]}),(0,n.jsxs)("li",{className:"wow fadeInUp","data-wow-delay":".6s",children:[(0,n.jsxs)("h6",{children:[(0,n.jsx)("span",{children:"3"})," Why Us?"]}),(0,n.jsx)("p",{children:"luctus massa ipsum at tempus eleifend congue lectus bibendum"})]})]})]})})]})})})}},85581:function(e,s,a){a(67294);var i=a(85893);s.Z=function(){return(0,i.jsxs)("header",{className:"pages-header circle-bg valign",children:[(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"row justify-content-center",children:[(0,i.jsx)("div",{className:"col-lg-10",children:(0,i.jsx)("div",{className:"cont mt-100 mb-50 text-center",children:(0,i.jsx)("h1",{className:"color-font fw-700",children:"Our dedicated team of creatives is bursting with talent, experience and passion for what we do."})})}),(0,i.jsx)("div",{className:"col-lg-10",children:(0,i.jsx)("div",{className:"img",children:(0,i.jsx)("img",{src:"/img/slid/about.jpg",alt:""})})})]})}),(0,i.jsx)("div",{className:"half sub-bg",children:(0,i.jsxs)("div",{className:"circle-color",children:[(0,i.jsx)("div",{className:"gradient-circle"}),(0,i.jsx)("div",{className:"gradient-circle two"})]})})]})}},10513:function(e,s,a){a(67294);var i=a(95774),t=(a(2661),a(85893));s.Z=function(e){var s=e.from,a=e.theme,l={path:{stroke:"rgb(18, 194, 233)"},trail:{stroke:a?"dark"==a?"#0f1013":"#e5e5e5":""},text:{fill:a?"dark"==a?"#ffffff":"#4e4e4e":"",fontSize:"16px"}};return(0,t.jsx)("section",{className:"skills-circle pt-50 pb-50 ".concat(s&&"aboutPage"===s?"sub-bg":""),children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-lg-7",children:(0,t.jsx)("div",{className:"",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-md-6",children:(0,t.jsxs)("div",{className:"item wow fadeInLeft","data-wow-delay":".6",children:[(0,t.jsx)("div",{className:"skill",children:(0,t.jsx)(i.Ip,{value:90,strokeWidth:2,text:"".concat(90,"%"),styles:l})}),(0,t.jsxs)("div",{className:"cont",children:[(0,t.jsx)("span",{children:"Project"}),(0,t.jsx)("h6",{children:"Consulting"})]})]})}),(0,t.jsx)("div",{className:"col-md-6",children:(0,t.jsxs)("div",{className:"item wow fadeInLeft","data-wow-delay":".3",children:[(0,t.jsx)("div",{className:"skill",children:(0,t.jsx)(i.Ip,{value:75,strokeWidth:2,text:"".concat(75,"%"),styles:l})}),(0,t.jsxs)("div",{className:"cont",children:[(0,t.jsx)("span",{children:"App"}),(0,t.jsx)("h6",{children:"Development"})]})]})})]})})})})})})}},67397:function(e,s,a){a.d(s,{Z:function(){return d}});var i=a(67294),t=function(){var e=document.querySelector(".team-crv");e&&window.addEventListener("scroll",(function(){document.querySelectorAll(".skill-progress .progres").forEach((function(s){var a=s.getAttribute("data-value");window.pageYOffset>e.offsetTop-200&&(s.style.width=a)}))}))},l=a(90850),n=JSON.parse('{"f":[{"id":1,"image":"/img/team/1.jpg","title":"Stephanie Lawrence","sub":"CEO, Colabrio Media"},{"id":2,"image":"/img/team/2.jpg","title":"Alex Regelman","sub":"CEO, Colabrio Media"},{"id":3,"image":"/img/team/3.jpg","title":"Stacey Stamper","sub":"CEO, Colabrio Media"},{"id":4,"image":"/img/team/4.jpg","title":"Stephanie Lawrence","sub":"CEO, Colabrio Media"}],"n":[{"id":1,"text":"Decentralized Finance Applications","Paragraph":"The exchanges and marketplaces will allow anyone around the world to buy, trade, invest, and lend - even without a bank account.","value":"90%"},{"id":2,"text":"Resilient, autonomous organizations","Paragraph":" Empower the community to organize and allocate resources to irs members. Impactful products and services on different markets.","value":"80%"}]}'),c=a(85893),d=function(){return i.useEffect((function(){t(),setTimeout((function(){(0,l.Z)()}),1e3)}),[]),(0,c.jsx)("div",{className:"team-crv section-padding",children:(0,c.jsx)("div",{className:"container",children:(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"col-lg-5 valign",children:(0,c.jsxs)("div",{className:"content wow fadeInUp md-mb30","data-wow-delay":".5s",children:[(0,c.jsxs)("div",{className:"sub-title",children:[(0,c.jsx)("h6",{children:"Our Staff"}),(0,c.jsx)("span",{}),(0,c.jsx)("span",{}),(0,c.jsx)("span",{})]}),(0,c.jsx)("h3",{className:"co-tit mb-15",children:"COMMUNITY DRIVEN."}),(0,c.jsx)("p",{children:"Fair launches coming soon. All AGOD tokens will be based on community and social-economical business startups and companies."}),(0,c.jsx)("div",{className:"skills-box mt-40",children:n.n.map((function(e){return(0,c.jsxs)("div",{className:"skill-item",children:[(0,c.jsx)("h6",{className:"custom-font",children:e.text}),(0,c.jsx)("p",{style:{fontSize:"14px"},children:e.Paragraph})]},e.id)}))})]})}),(0,c.jsx)("div",{className:"col-lg-6 offset-lg-1",children:(0,c.jsx)("div",{className:"img-box",children:(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"col-sm-6 toright",children:(0,c.jsx)("div",{className:"full-width",children:n.f.slice(0,2).map((function(e,s){return(0,c.jsx)("div",{children:(0,c.jsx)("div",{className:"img sizxl ".concat(s+1!=n.f.slice(0,2).length?"mb-30":null),"data-tooltip-tit":e.title,"data-tooltip-sub":e.sub,children:(0,c.jsx)("img",{src:e.image,alt:"",className:"imago wow"})})},e.id)}))})}),(0,c.jsx)("div",{className:"col-sm-6 toleft valign",children:(0,c.jsx)("div",{className:"full-width text-left",children:n.f.slice(2,4).map((function(e,s){return(0,c.jsx)("div",{children:(0,c.jsx)("div",{className:"img sizxl ".concat(s+1!=n.f.slice(2,4).length?"mb-30":null),"data-tooltip-tit":e.title,"data-tooltip-sub":e.sub,children:(0,c.jsx)("img",{src:e.image,alt:"",className:"imago wow"})})},e.id)}))})})]})})})]})})})}}}]);