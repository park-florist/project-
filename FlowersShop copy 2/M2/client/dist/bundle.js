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
	
	var App = function (_React$Component) {
	  _inherits(App, _React$Component);
	
	  function App(props) {
	    _classCallCheck(this, App);
	
	    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	
	    _this.state = {
	      dataItem: []
	      // productName: '',
	    };
	
	    // this.getInfo = this.getInfo.bind(this);
	    _this.updateState = _this.updateState.bind(_this);
	    return _this;
	  }
	
	  _createClass(App, [{
	    key: "updateState",
	    value: function updateState(data) {
	      this.setState({
	        dataItem: data
	      });
	    }
	  }, {
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      this.getInfo();
	    }
	    ///////////
	
	  }, {
	    key: "getInfo",
	    value: function getInfo() {
	      var that = this;
	      $.ajax({
	        type: "GET",
	        url: "/items",
	        success: function success(data) {
	          that.updateState(data);
	          console.log(data);
	          console.log("productdata from getInfo", that.state.dataItem);
	        },
	        error: function error(_request, _status, _error) {
	          console.log(_error);
	        }
	      });
	    }
	  }, {
	    key: "changeType",
	    value: function changeType(e) {
	      e.target.type = "date";
	    }
	  }, {
	    key: "changeingone",
	    value: function changeingone(e) {
	      console.log(this.state.dataItem[0].name);
	
	      e.target.style = "box-shadow: inset 2px 2px #548f35, inset -2px -2px #548f35;";
	      $("#descrip").text("Bouquet will be delivered approximately as pictured.");
	      $("#h4").text("$" + this.state.dataItem[0].price1);
	    }
	  }, {
	    key: "changeingtwo",
	    value: function changeingtwo() {
	      $("#descrip").text("Additional flowers will be added to enhance the bouquet.");
	      $("#h4").text("$" + this.state.dataItem[0].price2);
	    }
	  }, {
	    key: "changeingthree",
	    value: function changeingthree() {
	      $("#h4").text("$" + this.state.dataItem[0].price3);
	      $("#descrip").text("We will add more blooms and select the highest quality flowers we offer in this style.");
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var myData = [];
	
	      if (this.state.dataItem.length !== 0) {
	        myData = this.state.dataItem;
	      }
	      return React.createElement(
	        "div",
	        { "class": "s" },
	        React.createElement(
	          "h1",
	          { name: "name" },
	          myData[0] ? myData[0].name : "sample product"
	        ),
	        React.createElement("br", null),
	        React.createElement(
	          "div",
	          null,
	          React.createElement(
	            "h4",
	            { id: "h4" },
	            "$",
	            myData[0] ? myData[0].price1 : ""
	          )
	        ),
	        React.createElement(
	          "div",
	          { className: "devdes" },
	          React.createElement(
	            "button",
	            { className: "btn", name: " price1", id: "standard", onClick: this.changeingone.bind(this) },
	            "Standard "
	          ),
	          React.createElement(
	            "button",
	            { className: "btntwo", name: " price2", id: "deluxe", onClick: this.changeingtwo.bind(this) },
	            "Deluxe   "
	          ),
	          React.createElement(
	            "button",
	            { className: "btntwo", name: " price3", id: "premium", onClick: this.changeingthree.bind(this) },
	            "Premium"
	          )
	        ),
	        React.createElement(
	          "div",
	          { "class": "devdes" },
	          React.createElement(
	            "div",
	            { "class": "up-sell", id: "descrip" },
	            "Bouquet will be delivered approximately as pictured."
	          ),
	          React.createElement("br", null),
	          React.createElement(
	            "div",
	            { "class": "up-selll" },
	            "Add a zip code for delivery details"
	          )
	        ),
	        React.createElement("br", null),
	        React.createElement("br", null),
	        React.createElement(
	          "div",
	          { "class": "dates" },
	          React.createElement("input", { "class": "inputs", placeholder: "CHOOSE A DELIVERY DATE", type: "text", onFocus: this.changeType.bind(this) })
	        ),
	        React.createElement(
	          "div",
	          { "class": "dates" },
	          React.createElement(
	            "button",
	            { "class": "colorbtn" },
	            "Order Now"
	          )
	        )
	      );
	    }
	  }]);
	
	  return App;
	}(React.Component);
	
	ReactDOM.render(React.createElement(App, null), document.getElementById('Flowers4002'));

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map