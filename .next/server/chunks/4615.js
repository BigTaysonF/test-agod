"use strict";
exports.id = 4615;
exports.ids = [4615];
exports.modules = {

/***/ 6190:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getSiblings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7420);


const cardMouseEffect = featureEl => {
  var featuresitems = featureEl;

  if (featuresitems) {
    featuresitems.forEach(item => {
      item.onmouseover = function (event) {
        item.classList.add("active");
        let siblings = (0,_getSiblings__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(item),
            siblingEl = siblings.map(e => e.classList.remove("active"));
      };
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cardMouseEffect);

/***/ }),

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

/***/ 8943:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ about_us3)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/components/Split/index.jsx
var Split = __webpack_require__(1514);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/data/sections/about-us3.json
const about_us3_namespaceObject = JSON.parse('{"wp":"/img/01.svg","Lx":"/img/02.svg","Qq":{"r":28,"u":"Years Of Experience"},"TN":{"P":"Dive into a new universe","E":" of connected services."},"kQ":{"P":"AGOD as the Alpha token; from which other development promoter tokens will be created in different categories, to which entrepreneurship and/or social projects will be linked."}}');
// EXTERNAL MODULE: ./src/common/thumparallax.js
var thumparallax = __webpack_require__(6025);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/About-us3/about-us3.jsx
/* eslint-disable @next/next/no-img-element */








const AboutUs3 = () => {
  external_react_default().useEffect(() => {
    setTimeout(() => {
      (0,thumparallax/* thumparallax */.$)();
      (0,thumparallax/* thumparallaxDown */.D)();
    }, 1000);
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: "agency section-padding position-re",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-7",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "imgsec md-mb50",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "row",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "col-md-6",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "item",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "imgone big-bord wow fadeInDown",
                    "data-wow-delay": ".8s",
                    children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                      className: "thumparallax-down",
                      src: about_us3_namespaceObject.wp,
                      alt: ""
                    })
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "exp",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
                      className: "nmb-font",
                      children: about_us3_namespaceObject.Qq.r
                    }), /*#__PURE__*/jsx_runtime_.jsx("h6", {
                      children: about_us3_namespaceObject.Qq.u
                    })]
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "col-md-6",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "item",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "imgtwo big-bord wow fadeInUp",
                    "data-wow-delay": ".6s",
                    children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                      className: "thumparallax",
                      src: about_us3_namespaceObject.Lx,
                      alt: ""
                    })
                  })
                })
              })]
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-5 valign",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "content",
            children: [/*#__PURE__*/jsx_runtime_.jsx(Split/* default */.Z, {
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
                className: "wow words chars splitting",
                "data-splitting": true,
                children: [about_us3_namespaceObject.TN.P, " ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " ", about_us3_namespaceObject.TN.E]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(Split/* default */.Z, {
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                className: "wow txt words chars splitting",
                "data-splitting": true,
                children: [about_us3_namespaceObject.kQ.P, " ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), about_us3_namespaceObject.kQ.second]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("br", {})]
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "line bottom right"
    })]
  });
};

/* harmony default export */ const about_us3 = (AboutUs3);

/***/ }),

/***/ 3270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_particle_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4746);
/* harmony import */ var _config_pr_s_black__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6066);
/* harmony import */ var react_tsparticles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4753);
/* harmony import */ var react_tsparticles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_tsparticles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







const Intro4 = ({
  sliderRef,
  blackStar
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("header", {
    ref: sliderRef,
    className: "particles circle-bg valign",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      className: "container",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "row justify-content-center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          className: "col-lg-10",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
            className: "cont text-center",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("h1", {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                className: "color-font",
                children: "AGOD Ecosystem"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("br", {}), " THE NEXT-GEN OF FUNDING ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                className: "color-font",
                children: "We use blockchain to collectively fund & support startups at a global scale."
              })]
            })
          })
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((react_tsparticles__WEBPACK_IMPORTED_MODULE_3___default()), {
      id: "particles-js",
      options: blackStar ? _config_pr_s_black__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z : _config_particle_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      className: "gradient-circle"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      className: "gradient-circle two"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      className: "line bottom left"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Intro4);

/***/ }),

/***/ 5467:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1514);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _common_thumparallax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6025);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* eslint-disable @next/next/no-img-element */







const MinimalArea2 = () => {
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    setTimeout(() => {
      (0,_common_thumparallax__WEBPACK_IMPORTED_MODULE_4__/* .thumparallaxDown */ .D)();
    }, 1000);
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("section", {
    className: "min-area",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "col-lg-6",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "img",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
              className: "thumparallax-down",
              src: "/img/min-area.svg",
              alt: ""
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "col-lg-6 valign",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "content",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h4", {
              className: "color-font",
              children: "Build on Fantom"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Split__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
                className: "wow txt words chars splitting",
                "data-splitting": true,
                children: "Start building on Fantom using Solidity and the tools you\u2019re already familiar with: Remix, Truffle, and MetaMask. Fantom supports the EVM and you can deploy your dApps just like on Ethereum. In the points add :"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("ul", {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
                className: "wow fadeInUp",
                "data-wow-delay": ".2s",
                children: "EVM compatible"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
                className: "wow fadeInUp",
                "data-wow-delay": ".4s",
                children: "Oracles integrations"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
                className: "wow fadeInUp",
                "data-wow-delay": ".4s",
                children: "Open source"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
                className: "wow fadeInUp",
                "data-wow-delay": ".4s",
                children: "Robust APIs"
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
              href: `/about/about-dark`,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                className: "butn bord curve mt-40 wow fadeInUp",
                "data-wow-delay": ".8s",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                  children: "Discover"
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("br", {})]
          })
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MinimalArea2);

/***/ }),

/***/ 5663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var _common_cardMouseEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6190);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);






const Services3 = () => {
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    (0,_common_cardMouseEffect__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(document.querySelectorAll(".feat .items"));
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("section", {
    className: "feat sub-bg section-padding",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: "row",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "col-lg-8 col-md-10",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "sec-head",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h6", {
              className: "wow fadeIn",
              "data-wow-delay": ".5s",
              children: "START AT THE CORE"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h3", {
              className: "wow color-font",
              children: "The heart of the ecosystem"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h3", {
              className: "item wow fadeIn",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
                children: "Serving as the economic center of AGOD Ecosystem, the Core provides vital services to the apps and services within."
              })
            })]
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "row justify-content-around",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "col-lg-4 mb-1 col-md-6 items md-mb30",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "item wow fadeIn",
            "data-wow-delay": ".3s",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
              className: "icon",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("i", {
                className: "ion-ios-monitor"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h5", {
              children: "Abloc CEX"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
              children: "The People\u2019s Exchange. Designed for the community, better returns, lower fees, great interface."
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
              href: "/about/about-dark",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
                className: "more-stroke",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {})
              })
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "col-lg-4 mb-1 col-md-6 items active md-mb30",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "item wow fadeIn",
            "data-wow-delay": ".3s",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
              className: "icon",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("i", {
                className: "ion-ios-bolt-outline"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h5", {
              children: "Decentralized Exchange"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
              children: "Multichain enhanced exchange, swapping digital assets multichain, with very low fees and instant transaction confirmation."
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
              href: "/about/about-dark",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
                className: "more-stroke",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {})
              })
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "col-lg-4 mb-1 col-md-6 items sm-mb30",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "item wow fadeIn",
            "data-wow-delay": ".3s",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
              className: "icon",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("i", {
                className: "ion-cube"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h5", {
              children: "Dreamhub"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
              children: "NFT Marketplace. Set to operate a next-gen decentralized NFT marketplace."
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
              href: "/about/about-dark",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
                className: "more-stroke",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {})
              })
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "col-lg-4 mb-1 col-md-6 items",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "item wow fadeIn",
            "data-wow-delay": ".3s",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
              className: "icon",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("i", {
                className: "ion-ios-color-wand"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h5", {
              children: "Pandora\u2019s Finance"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
              children: "Crypto Startup Enhancer, combining the power of a protocol that builds native DAO tooling interfaces."
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
              href: "/about/about-dark",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
                className: "more-stroke",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {})
              })
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "col-lg-4 mb-1 col-md-6 items",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "item wow fadeIn",
            "data-wow-delay": ".3s",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
              className: "icon",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("i", {
                className: "ion-ios-color-wand"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h5", {
              children: "Wallet"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
              children: "Not just another DeFi wallet. The bridge between the real world assets and crypto is now possible, rewards, banking system, bring your wallet with you everywhere."
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
              href: "/about/about-dark",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
                className: "more-stroke",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {})
              })
            })]
          })
        })]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Services3);

/***/ })

};
;