"use strict";
exports.id = 6257;
exports.ids = [6257];
exports.modules = {

/***/ 6257:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ numbers)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./src/data/sections/fun-fact.json
const fun_fact_namespaceObject = JSON.parse('[{"id":1,"icon":"pe-7s-smile","content":"People who are commited to their management tasks.","value":"2400"},{"id":2,"icon":"pe-7s-portfolio","content":"Signed projects that have been confirmed complete!","value":"133"},{"id":3,"icon":"pe-7s-medal","content":"International awards and cups for design projects.","value":"46"}]');
// EXTERNAL MODULE: ./src/components/Split/index.jsx
var Split = __webpack_require__(1514);
// EXTERNAL MODULE: external "react-countup"
var external_react_countup_ = __webpack_require__(609);
var external_react_countup_default = /*#__PURE__*/__webpack_require__.n(external_react_countup_);
// EXTERNAL MODULE: external "react-visibility-sensor"
var external_react_visibility_sensor_ = __webpack_require__(6882);
var external_react_visibility_sensor_default = /*#__PURE__*/__webpack_require__.n(external_react_visibility_sensor_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Numbers/numbers.jsx








const Numbers = () => {
  external_react_default().useEffect(() => {
    console.clear();
  });
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: "number-sec section-padding",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row justify-content-center",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-8 col-md-10",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "sec-head  text-center",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
              className: "wow fadeIn",
              "data-wow-delay": ".5s",
              children: "FUN FACTS"
            }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
              className: "wow color-font",
              children: "Pleasure in the job puts perfection in the work."
            })]
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row",
        children: fun_fact_namespaceObject.map(item => /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-md-4",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "item no-bord sm-mb50",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: `icon ${item.icon}`
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
              className: "",
              children: ["\xA0", /*#__PURE__*/jsx_runtime_.jsx((external_react_countup_default()), {
                redraw: true,
                end: item.value,
                duration: "3",
                children: ({
                  countUpRef,
                  start
                }) => /*#__PURE__*/jsx_runtime_.jsx((external_react_visibility_sensor_default()), {
                  onChange: start,
                  delayedCall: true,
                  children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "count",
                    ref: countUpRef
                  })
                })
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx(Split/* default */.Z, {
              children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "wow txt words chars splitting",
                "data-splitting": true,
                children: item.content
              })
            })]
          })
        }, item.id))
      })]
    })
  });
};

/* harmony default export */ const numbers = (Numbers);

/***/ }),

/***/ 1514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Split extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "target", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef());

    _defineProperty(this, "split", () => {
      if (this.target.current) {
        Splitting({
          target: this.target.current
        });
      }
    });

    _defineProperty(this, "componentDidMount", this.split);

    _defineProperty(this, "componentDidUpdate", this.split);
  }

  render() {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      ref: this.target,
      children: this.props.children
    });
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Split);

/***/ })

};
;