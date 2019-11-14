
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataItem: []
      // productName: '',
    };
    
    // this.getInfo = this.getInfo.bind(this);
    this.updateState = this.updateState.bind(this);
  }
  updateState(data) {
    this.setState({
      dataItem: data
    });
    
  }
  componentDidMount() {
    this.getInfo();
  }
  ///////////
  getInfo() {
    var that = this;
    $.ajax({
      type: "GET",
      url: "/items",
      success: function(data) {
        that.updateState(data);
        console.log(data);
        console.log("productdata from getInfo",that.state.dataItem);
      },
      error: function(_request, _status, error) {
        console.log(error);
      }
    });
    
  }
    changeType(e){
      e.target.type="date";
    }
    changeingone(e){
      console.log(this.state.dataItem[9].name)
 
      e.target.style="box-shadow: inset 2px 2px #548f35, inset -2px -2px #548f35;"
      $("#descrip").text("Bouquet will be delivered approximately as pictured.");
      $("#h4").text("$"+this.state.dataItem[9].price1)
    }
    changeingtwo(){
      $("#descrip").text("Additional flowers will be added to enhance the bouquet.")
      $("#h4").text("$"+this.state.dataItem[9].price2)
    }
    changeingthree(){
      $("#h4").text("$"+this.state.dataItem[9].price3)
      $("#descrip").text("We will add more blooms and select the highest quality flowers we offer in this style.")
    }
  render () {
    var myData = [];
    
    if(this.state.dataItem.length !==  0){
      myData =this.state.dataItem;
    }
    return (
  <div class = "s"> 
   <h1 name = "name" >{(myData[9])?myData[9].name:"sample product"}</h1>
    <br/>
    <div  >
    <h4  id="h4">${(myData[9])?myData[9].price1:""}</h4>

    </div>
    <div className="devdes">
    <button className = "btn" name = " price1"  id ="standard" onClick={this.changeingone.bind(this)} >Standard </button>
    <button className = "btntwo" name = " price2"  id ="deluxe" onClick={this.changeingtwo.bind(this)}>Deluxe   </button>
    <button className="btntwo" name = " price3"  id ="premium" onClick={this.changeingthree.bind(this)}>Premium</button>
    
    </div>
   

     <div class="devdes">
   
    
      {/* <div style={{padding:15,textAlign:"center",color:"#8E8E8E"}}> */}
      <div class="up-sell" id = "descrip">Bouquet will be delivered approximately as pictured.</div>
      <br></br>
      
      <div class = "up-selll">Add a zip code for delivery details</div>
      
      
    </div> 
   <br></br>
   <br></br>
    <div class ="dates">
   
    <input class="inputs" placeholder="CHOOSE A DELIVERY DATE" type="text" onFocus={this.changeType.bind(this)} />
  
  </div>
  <div class ="dates">
  
  <button class="colorbtn" >Order Now</button>
  </div >
  
  
  
  
  </div>


        
    );
  }
}

ReactDOM.render(<App />, document.getElementById('Flowers4002'));