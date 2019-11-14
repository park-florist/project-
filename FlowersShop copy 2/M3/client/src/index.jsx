import React, { Component } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
class Flowers4003 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataItem: []
      // productName: '',
    };
    this.getInfo();
    // this.getInfo = this.getInfo.bind(this);

    this.updateState = this.updateState.bind(this);
  }
  updateState(data) {
    this.setState({
      dataItem: data
    });
  }

  getInfo() {
    var that = this;
    $.ajax({
      type: "GET",
      url: "/items",
      success: function(data) {
        that.updateState(data);
        console.log(data);
        console.log("productdata from getInfo");
      },
      error: function(_request, _status, error) {
        console.log(error);
      }
    });
  }

  render() {
    return (
      <div>
        <section id="#header">
          <div className="row header-innerContainer ">
            <div className=" clearfix company-logo companylogo-img col-xs-12 col-sm-4 col-md-4">
              <img src="https://res.cloudinary.com/bloomnation/c_fit,f_auto,h_1000,q_auto,w_1000/v1/vendor/6263/profile/p/a/parkflorist-logo_2.png" />
            </div>
          </div>{" "}
        </section>
        <div className="displayUl header-nav col-md-12">
          <div className="navigation ui-menu">
            <ul>
              <div className="displayUl">
                <li className=".nav-itemWrapper">
                  <span>SHOP</span>
                </li>
              </div>
              <div className="displayUl">
                <li className=".nav-itemWrapper">
                  <span className="nav-itemText">BIRTHDAY</span>
                </li>
              </div>
              <div className="displayUl">
                <li className=".nav-itemWrapper">
                  <span className="nav-itemText">SYMPATHY</span>
                </li>
              </div>
              <div className="displayUl">
                <li className=".nav-itemWrapper">
                  <span className="nav-itemText">OCASSION</span>
                </li>
              </div>
              <div className="displayUl">
                <li className=".nav-itemWrapper">
                  <span className="nav-itemText">CUSTOM ARRANGMENT</span>
                </li>
              </div>
              <div className="displayUl">
                <li className=".nav-itemWrapper">
                  <span className="nav-itemText">ABOUT US</span>
                </li>
              </div>
            </ul>
          </div>
        </div>
        <div className="productView row">
          <div className="productInfo-item productInfo-description text-align col-xl-12">
            <div className="display">
              <div className="productInfo-storyIcon icon">
                {/* <img src={require("shop.png")} /> */}
                <img src="https://martinezparkflorist.net/skin/frontend/premiumsites/bloom/images/product/view/BN-PDP-PS.gif" />
                <p span>Directly From</p>
                <p>A Local Florist</p>
              </div>
            </div>
            <div className="display">
              <div className="productInfo-storyIcon icon">
                <img src="https://martinezparkflorist.net/skin/frontend/premiumsites/bloom/images/product/view/BN-PDP-PS-handDelivered.gif" />
                <p>Hand Delivered</p>
              </div>
            </div>
            <div className="display">
              <div className="productInfo-storyIcon icon">
                <img src="https://martinezparkflorist.net/skin/frontend/premiumsites/bloom/images/product/view/BN-PDP-PS-arrangement.gif" />
                <p>Designed, Arranged,</p>
                <p>&amp; Ready to be Enjoyed</p>
              </div>
            </div>
          </div>
          <div className="productInfo-item row productInfo-description col-xl-12">
            <h3>Product Information</h3>
            <div className="product-description--mobile js-description">
              {this.state.dataItem.length ? (
                <p>{this.state.dataItem[0].productInfo}</p>
              ) : null}
            </div>
          </div>
          <div className="productInfo-item productInfo-description  col-xl-12">
            <h3>Substitution Policy</h3>
            <div className="product-description--mobile js-description">
              <p>
                A horn of corn has been born! We all love popcorn. Corn mazes
                delight and amuse us. We eat corn syrup. Corn is a part of all
                of our lives. This Thanksgiving, say “thanks” to corn with this
                beautiful seasonal centerpiece. Cornbread, ears of corn, and a
                Cornucopia Utopia! That is what Thanksgiving is all about. And
                turkey, that’s important too.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<Flowers4003 />, document.getElementById("Flowers4003"));
