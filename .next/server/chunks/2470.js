"use strict";
exports.id = 2470;
exports.ids = [2470];
exports.modules = {

/***/ 6025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ thumparallax),
/* harmony export */   "D": () => (/* binding */ thumparallaxDown)
/* harmony export */ });
const thumparallax = () => {
  var imageUp = document.getElementsByClassName("thumparallax");

  if (imageUp) {
    new simpleParallax(imageUp, {
      delay: 1,
      scale: 1.1
    });
  }
};
const thumparallaxDown = () => {
  var imageDown = document.getElementsByClassName("thumparallax-down");

  if (imageDown) {
    new simpleParallax(imageDown, {
      orientation: "down",
      delay: 1,
      scale: 1.1
    });
  }
};

/***/ }),

/***/ 9516:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* eslint-disable @next/next/no-css-tags */






const DarkTheme = ({
  children,
  useSkin,
  mobileappstyle
}) => {
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    window.theme = "dark";
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("link", {
        rel: "stylesheet",
        href: "/css/dark.css"
      }), useSkin ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("link", {
        rel: "stylesheet",
        href: "/css/arch-skin-dark.css"
      }) : "", mobileappstyle ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("link", {
        href: "/css/mobile-app-dark.css",
        rel: "stylesheet"
      }) : ""]
    }), children]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DarkTheme);

/***/ }),

/***/ 354:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Navbar_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _components_Footer_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5914);
/* harmony import */ var _components_Team_team__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7397);
/* harmony import */ var _layouts_Dark__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9516);
/* harmony import */ var _components_Intro4_intro4__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3270);
/* harmony import */ var _components_About_us3_about_us3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8943);
/* harmony import */ var _components_Services3_services3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5663);
/* harmony import */ var _components_Services4_services4__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4780);
/* harmony import */ var _components_Minimal_Area2_minimal_area2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5467);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);













const Homepage5 = () => {
  const navbarRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
  const logoRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    var navbar = navbarRef.current;

    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_layouts_Dark__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_Navbar_navbar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      nr: navbarRef,
      lr: logoRef
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_Intro4_intro4__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_Team_team__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_About_us3_about_us3__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_Services3_services3__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_Minimal_Area2_minimal_area2__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_Services4_services4__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_Footer_footer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Homepage5);

/***/ })

};
;