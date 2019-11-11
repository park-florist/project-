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
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Flowers4002 = function (_React$Component) {
	  _inherits(Flowers4002, _React$Component);
	
	  function Flowers4002(props) {
	    _classCallCheck(this, Flowers4002);
	
	    var _this = _possibleConstructorReturn(this, (Flowers4002.__proto__ || Object.getPrototypeOf(Flowers4002)).call(this, props));
	
	    _this.state = {
	      title: "",
	      price1: "",
	      price2: "",
	      price3: "",
	      img: "",
	      id: "",
	      desc1: "",
	      desc2: "",
	      desc3: "",
	      descreptionbig: "",
	      datefordelvery: ""
	    };
	    //this.handleChange = this.handleChange.bind(this);
	    _this.submit = _this.submit.bind(_this);
	    // this.onLick = this.onLick.bind(this);
	    _this.update = _this.update.bind(_this);
	    return _this;
	  }
	
	  _createClass(Flowers4002, [{
	    key: "update",
	    value: function update(data) {
	      event.preventDefault();
	      this.state.update = data;
	      // console.log('this is the laste order ',this.state.update[this.state.update.length-1].meat)
	      // alert("your order will be after one hour it cost : "+this.state.update[this.state.update.length-1].meat+this.state.update[this.state.update.length-1].sandwicth);
	      var dataformDBS = data;
	    }
	  }, {
	    key: "onChange",
	    value: function onChange(e) {
	      e.preventDefault();
	      this.setState(_defineProperty({}, e.target.name, e.target.value));
	      // console.log(e.target.value,'ghffgf')
	      // console.log(this.state)
	    }
	    // onLick(e){
	    //   e.preventDefault();
	    //   this.setState({[e.target.name]: e.target.value});
	
	    // }
	
	  }, {
	    key: "submit",
	    value: function submit(event) {
	      event.preventDefault();
	      console.log(this.state);
	      var a = this.state;
	      $.ajax({
	        url: "/items",
	        type: "post",
	        data: a,
	        dataType: "json",
	        success: function success(data) {
	          console.log("success send!!!");
	        },
	        error: function error(err) {
	          console.log("err", err);
	        }
	      });
	    }
	  }, {
	    key: "showing",
	    value: function showing(event) {
	      event.preventDefault();
	      var that = this;
	      console.log("WE WILL showing TO YOU data");
	      $.ajax({
	        url: "/items",
	        type: "get",
	        dataType: "json",
	        success: function success(data) {
	          that.update(data);
	          console.log(data, "success getting data");
	        },
	        error: function error(err) {
	          console.log("err", err);
	        }
	      });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _ref, _ref2;
	
	      // btn = {
	      //   // boxShadow: inset 2  #548f35;
	      //   boxShadow:"#548f35",
	      //   backgroundColor:"black"
	      // }
	      return (
	        // .btn{
	        //   box-shadow: inset 2px 2px #548f35, inset -2px -2px #548f35;
	        // }
	        React.createElement(
	          "div",
	          null,
	          React.createElement(
	            "div",
	            {
	              style: {
	                color: "#666666",
	                fontweight: 200,
	                border: "1px solid black",
	                lineHeight: 1.42857143,
	                backgroundColor: "#fff"
	              }
	            },
	            React.createElement(
	              "h1",
	              { name: "name", placeholder: "Name" },
	              "name"
	            ),
	            React.createElement("br", null),
	            React.createElement(
	              "div",
	              null,
	              React.createElement(
	                "h4",
	                {
	                  style: {
	                    color: "#666666",
	                    fontFamily: "Arial",
	                    marginblockstart: 1.33,
	                    marginblockend: 1.33,
	                    fontSize: 32
	                  }
	                },
	                "$"
	              ),
	              React.createElement(
	                "button",
	                {
	                  style: {
	                    textAlign: "center",
	                    cursor: PointerEvent,
	                    color: "#333333",
	                    fontFamily: "'Avenir','Helvetica','Arial','sans-serif'",
	                    padding: 29,
	                    margin: 5,
	                    fontSize: 16,
	                    fontWeight: 200,
	                    boxShadow: "#548f35"
	                  },
	                  name: " price1",
	                  value: "59.95",
	                  id: "standard"
	                },
	                "Standard",
	                " "
	              ),
	              React.createElement(
	                "button",
	                {
	                  style: {
	                    textAlign: "center",
	                    cursor: PointerEvent,
	                    color: "#333333",
	                    fontFamily: "'Avenir','Helvetica','Arial','sans-serif'",
	                    padding: 29,
	                    margin: 5,
	                    fontSize: 16,
	                    fontWeight: 200,
	                    boxShadow: "#548f35"
	                  },
	                  name: " price2",
	                  value: "69.95",
	                  id: "deluxe"
	                },
	                "Deluxe",
	                " "
	              ),
	              React.createElement(
	                "button",
	                {
	                  style: {
	                    textAlign: "center",
	                    cursor: PointerEvent,
	                    color: "#333333",
	                    fontFamily: "'Avenir','Helvetica','Arial','sans-serif'",
	                    padding: 29,
	                    margin: 5,
	                    fontSize: 16,
	                    fontWeight: 200,
	                    boxShadow: "#548f35"
	                  },
	                  name: " price3",
	                  value: "79.95",
	                  id: "premium"
	                },
	                "Premium"
	              )
	            ),
	            React.createElement(
	              "div",
	              {
	                style: {
	                  position: "relative",
	                  width: 150,
	                  padding: 10,
	                  marginBottom: 10,
	                  backgroundColor: " #f7f7f7"
	                }
	              },
	              React.createElement(
	                "div",
	                {
	                  style: (_ref = {
	                    display: "table-cell",
	                    position: "relative",
	                    float: "right"
	                  }, _defineProperty(_ref, "position", "relative"), _defineProperty(_ref, "fontSize", 14), _defineProperty(_ref, "borderTop", "1px solid #8E8E8E"), _defineProperty(_ref, "borderRight", "1px solid #8E8E8E"), _defineProperty(_ref, "marginRight", 3), _ref)
	                },
	                "des"
	              ),
	              React.createElement(
	                "div",
	                {
	                  style: (_ref2 = {
	                    display: "table-cell",
	                    position: "relative",
	                    float: "left"
	                  }, _defineProperty(_ref2, "position", "relative"), _defineProperty(_ref2, "fontSize", 14), _defineProperty(_ref2, "borderTop", "1px solid #8E8E8E"), _ref2)
	                },
	                "Add a zip code for delivery details"
	              )
	            ),
	            React.createElement("br", null),
	            React.createElement("br", null),
	            React.createElement(
	              "div",
	              null,
	              React.createElement("input", {
	                style: {
	                  color: "#777777",
	                  fontFamily: "Arial",
	                  margin: 2,
	                  fontSize: 12,
	                  padding: 20
	                },
	                placeholder: "CHOOSE A DELIVERY DARE",
	                type: "date"
	              })
	            ),
	            React.createElement("div", null),
	            React.createElement(
	              "button",
	              {
	                style: {
	                  backgroundColor: "#FFB89A",
	                  fontFamily: "Arial",
	                  padding: 12,
	                  margin: 5,
	                  fontSize: 20
	                }
	              },
	              "Order Now"
	            ),
	            React.createElement(
	              "div",
	              null,
	              React.createElement(
	                "button",
	                {
	                  style: {
	                    color: "#777777",
	                    fontFamily: "Arial",
	                    margin: 2,
	                    fontSize: 12,
	                    padding: 25
	                  }
	                },
	                "ADD TO FAVORITES"
	              )
	            )
	          ),
	          React.createElement(
	            "div",
	            { "class": "Ula" },
	            "ulaMhanna"
	          )
	        )
	      );
	    }
	  }]);
	
	  return Flowers4002;
	}(React.Component);
	
	ReactDOM.render(React.createElement(Flowers4002, null), document.getElementById("Flowers4002"));

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map