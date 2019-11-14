import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Flowers4001 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      img : ""
    }
  }

  // retriveData() {
  //   var that = this;
  //   $.ajax({
  //     type: "GET",
  //     url: "/items",
  //     success: function(data) {
  //       console.log("dvdvdvdv");
  //       that.setState({
  //         flowerData : data[0]
  //       });
  //     },
  //     error: function(request, status, error) {
  //       console.log(error,"hi im the error");
  //     }
  //   });
  // }

  componentDidMount() {
    var that = this;

    var path = window.location.href;
    var imgId = path.substring(path.indexOf("="+1));
    if(imgId === " ") {
      imgId = 1;
    }

    console.log(imgId);

    $.ajax({
      type: "GET",
      url: "/items",
      data:{id:imgId},
      success: function(data) {
        console.log("dvdvdvdv");
        console.log(data[0].img);

        that.setState({
          img : data[0].img,
          id: data.id
        });
      },
      error: function(request, status, error) {
        console.log(error,"hi im the error");
      }
    });

  }



  render() {
    return (
      <div>
        <h1>helloo agaaiinn 4001!!</h1>
         <img id="active-image_gallery-image" src={this.state.img}/>
        </div>
        
    );
  }
}
ReactDOM.render(<Flowers4001 />, document.getElementById("Flowers4001"));
