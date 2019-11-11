this["require"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
/***/ (function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Flowers4003 = function (_React$Component) {
	  _inherits(Flowers4003, _React$Component);
	
	  function Flowers4003() {
	    _classCallCheck(this, Flowers4003);
	
	    return _possibleConstructorReturn(this, (Flowers4003.__proto__ || Object.getPrototypeOf(Flowers4003)).apply(this, arguments));
	  }
	
	  _createClass(Flowers4003, [{
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "div",
	        null,
	        React.createElement(
	          "section",
	          { id: "#header" },
	          React.createElement(
	            "div",
	            { "class": "row header-innerContainer " },
	            React.createElement(
	              "div",
	              { "class": " clearfix company-logo companylogo-img col-xs-12 col-sm-4 col-md-4" },
	              React.createElement("img", { src: "https://res.cloudinary.com/bloomnation/c_fit,f_auto,h_1000,q_auto,w_1000/v1/vendor/6263/profile/p/a/parkflorist-logo_2.png" })
	            )
	          ),
	          " "
	        ),
	        React.createElement(
	          "div",
	          { "class": "displayUl header-nav col-md-12" },
	          React.createElement(
	            "div",
	            { "class": "navigation ui-menu" },
	            React.createElement(
	              "ul",
	              null,
	              React.createElement(
	                "div",
	                { "class": "displayUl" },
	                React.createElement(
	                  "li",
	                  { "class": ".nav-itemWrapper" },
	                  React.createElement(
	                    "span",
	                    null,
	                    "SHOP"
	                  )
	                )
	              ),
	              React.createElement(
	                "div",
	                { "class": "displayUl" },
	                React.createElement(
	                  "li",
	                  { "class": ".nav-itemWrapper" },
	                  React.createElement(
	                    "span",
	                    { "class": "nav-itemText" },
	                    "BIRTHDAY"
	                  )
	                )
	              ),
	              React.createElement(
	                "div",
	                { "class": "displayUl" },
	                React.createElement(
	                  "li",
	                  { "class": ".nav-itemWrapper" },
	                  React.createElement(
	                    "span",
	                    { "class": "nav-itemText" },
	                    "SYMPATHY"
	                  )
	                )
	              ),
	              React.createElement(
	                "div",
	                { "class": "displayUl" },
	                React.createElement(
	                  "li",
	                  { "class": ".nav-itemWrapper" },
	                  React.createElement(
	                    "span",
	                    { "class": "nav-itemText" },
	                    "OCASSION"
	                  )
	                )
	              ),
	              React.createElement(
	                "div",
	                { "class": "displayUl" },
	                React.createElement(
	                  "li",
	                  { "class": ".nav-itemWrapper" },
	                  React.createElement(
	                    "span",
	                    { "class": "nav-itemText" },
	                    "CUSTOM ARRANGMENT"
	                  )
	                )
	              ),
	              React.createElement(
	                "div",
	                { "class": "displayUl" },
	                React.createElement(
	                  "li",
	                  { "class": ".nav-itemWrapper" },
	                  React.createElement(
	                    "span",
	                    { "class": "nav-itemText" },
	                    "ABOUT US"
	                  )
	                )
	              )
	            )
	          )
	        ),
	        React.createElement(
	          "div",
	          { "class": "productView row" },
	          React.createElement(
	            "div",
	            { "class": "productInfo-item productInfo-description text-align col-xl-12" },
	            React.createElement(
	              "div",
	              { "class": "display" },
	              React.createElement(
	                "div",
	                { "class": "productInfo-storyIcon icon" },
	                React.createElement("img", { src: "https://martinezparkflorist.net/skin/frontend/premiumsites/bloom/images/product/view/BN-PDP-PS.gif" }),
	                React.createElement(
	                  "p",
	                  { span: true },
	                  "Directly From"
	                ),
	                React.createElement(
	                  "p",
	                  null,
	                  "A Local Florist"
	                )
	              )
	            ),
	            React.createElement(
	              "div",
	              { "class": "display" },
	              React.createElement(
	                "div",
	                { "class": "productInfo-storyIcon icon" },
	                React.createElement("img", { src: "https://martinezparkflorist.net/skin/frontend/premiumsites/bloom/images/product/view/BN-PDP-PS-handDelivered.gif" }),
	                React.createElement(
	                  "p",
	                  null,
	                  "Hand Delivered"
	                )
	              )
	            ),
	            React.createElement(
	              "div",
	              { "class": "display" },
	              React.createElement(
	                "div",
	                { "class": "productInfo-storyIcon icon" },
	                React.createElement("img", { src: "https://martinezparkflorist.net/skin/frontend/premiumsites/bloom/images/product/view/BN-PDP-PS-arrangement.gif" }),
	                React.createElement(
	                  "p",
	                  null,
	                  "Designed, Arranged,"
	                ),
	                React.createElement(
	                  "p",
	                  null,
	                  "& Ready to be Enjoyed"
	                )
	              )
	            )
	          ),
	          React.createElement(
	            "div",
	            { "class": "productInfo-item row productInfo-description col-xl-12" },
	            React.createElement(
	              "h3",
	              null,
	              "Product Information"
	            ),
	            React.createElement(
	              "div",
	              { "class": "product-description--mobile js-description" },
	              React.createElement(
	                "p",
	                null,
	                "A horn of corn has been born! We all love popcorn. Corn mazes delight and amuse us. We eat corn syrup. Corn is a part of all of our lives. This Thanksgiving, say \u201Cthanks\u201D to corn with this beautiful seasonal centerpiece. Cornbread, ears of corn, and a Cornucopia Utopia! That is what Thanksgiving is all about. And turkey, that\u2019s important too."
	              )
	            )
	          ),
	          React.createElement(
	            "div",
	            { "class": "productInfo-item productInfo-description  col-xl-12" },
	            React.createElement(
	              "h3",
	              null,
	              "Substitution Policy"
	            ),
	            React.createElement(
	              "div",
	              { "class": "product-description--mobile js-description" },
	              React.createElement(
	                "p",
	                null,
	                "A horn of corn has been born! We all love popcorn. Corn mazes delight and amuse us. We eat corn syrup. Corn is a part of all of our lives. This Thanksgiving, say \u201Cthanks\u201D to corn with this beautiful seasonal centerpiece. Cornbread, ears of corn, and a Cornucopia Utopia! That is what Thanksgiving is all about. And turkey, that\u2019s important too."
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return Flowers4003;
	}(React.Component);
	
	ReactDOM.render(React.createElement(Flowers4003, null), document.getElementById("Flowers4003"));

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map