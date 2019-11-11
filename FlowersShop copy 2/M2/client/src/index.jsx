class Flowers4002 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.submit = this.submit.bind(this);
    // this.onLick = this.onLick.bind(this);
    this.update = this.update.bind(this);
  }
  update(data) {
    event.preventDefault();
    this.state.update = data;
    // console.log('this is the laste order ',this.state.update[this.state.update.length-1].meat)
    // alert("your order will be after one hour it cost : "+this.state.update[this.state.update.length-1].meat+this.state.update[this.state.update.length-1].sandwicth);
    var dataformDBS = data;
  }
  onChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    // console.log(e.target.value,'ghffgf')
    // console.log(this.state)
  }
  // onLick(e){
  //   e.preventDefault();
  //   this.setState({[e.target.name]: e.target.value});

  // }
  submit(event) {
    event.preventDefault();
    console.log(this.state);
    var a = this.state;
    $.ajax({
      url: "/items",
      type: "post",
      data: a,
      dataType: "json",
      success: data => {
        console.log("success send!!!");
      },
      error: err => {
        console.log("err", err);
      }
    });
  }
  showing(event) {
    event.preventDefault();
    var that = this;
    console.log("WE WILL showing TO YOU data");
    $.ajax({
      url: "/items",
      type: "get",
      dataType: "json",
      success: data => {
        that.update(data);
        console.log(data, "success getting data");
      },
      error: err => {
        console.log("err", err);
      }
    });
  }

  render() {
    // btn = {
    //   // boxShadow: inset 2  #548f35;
    //   boxShadow:"#548f35",
    //   backgroundColor:"black"
    // }
    return (
      // .btn{
      //   box-shadow: inset 2px 2px #548f35, inset -2px -2px #548f35;
      // }
      <div>
        <div
          style={{
            color: "#666666",
            fontweight: 200,
            border: "1px solid black",
            lineHeight: 1.42857143,
            backgroundColor: "#fff"
          }}
        >
          <h1 name="name" placeholder="Name">
            name
          </h1>
          <br />
          <div>
            <h4
              style={{
                color: "#666666",
                fontFamily: "Arial",
                marginblockstart: 1.33,
                marginblockend: 1.33,
                fontSize: 32
              }}
            >
              $
            </h4>
            <button
              style={{
                textAlign: "center",
                cursor: PointerEvent,
                color: "#333333",
                fontFamily: "'Avenir','Helvetica','Arial','sans-serif'",
                padding: 29,
                margin: 5,
                fontSize: 16,
                fontWeight: 200,
                boxShadow: "#548f35"
              }}
              name=" price1"
              value="59.95"
              id="standard"
            >
              Standard{" "}
            </button>
            <button
              style={{
                textAlign: "center",
                cursor: PointerEvent,
                color: "#333333",
                fontFamily: "'Avenir','Helvetica','Arial','sans-serif'",
                padding: 29,
                margin: 5,
                fontSize: 16,
                fontWeight: 200,
                boxShadow: "#548f35"
              }}
              name=" price2"
              value="69.95"
              id="deluxe"
            >
              Deluxe{" "}
            </button>
            <button
              style={{
                textAlign: "center",
                cursor: PointerEvent,
                color: "#333333",
                fontFamily: "'Avenir','Helvetica','Arial','sans-serif'",
                padding: 29,
                margin: 5,
                fontSize: 16,
                fontWeight: 200,
                boxShadow: "#548f35"
              }}
              name=" price3"
              value="79.95"
              id="premium"
            >
              Premium
            </button>
          </div>
          <div
            style={{
              position: "relative",
              width: 150,
              padding: 10,
              marginBottom: 10,
              backgroundColor: " #f7f7f7"
            }}
          >
            {/* <div style={{padding:15,textAlign:"center",color:"#8E8E8E"}}> */}
            <div
              style={{
                display: "table-cell",
                position: "relative",
                float: "right",
                position: "relative",
                fontSize: 14,
                borderTop: "1px solid #8E8E8E",
                borderRight: "1px solid #8E8E8E",
                marginRight: 3
              }}
            >
              des
            </div>

            <div
              style={{
                display: "table-cell",
                position: "relative",
                float: "left",
                position: "relative",
                fontSize: 14,
                borderTop: "1px solid #8E8E8E"
              }}
            >
              Add a zip code for delivery details
            </div>
          </div>

          <br></br>
          <br></br>
          <div>
            <input
              style={{
                color: "#777777",
                fontFamily: "Arial",
                margin: 2,
                fontSize: 12,
                padding: 20
              }}
              placeholder="CHOOSE A DELIVERY DARE"
              type="date"
            />
          </div>
          <div></div>
          <button
            style={{
              backgroundColor: "#FFB89A",
              fontFamily: "Arial",
              padding: 12,
              margin: 5,
              fontSize: 20
            }}
          >
            Order Now
          </button>
          <div>
            <button
              style={{
                color: "#777777",
                fontFamily: "Arial",
                margin: 2,
                fontSize: 12,
                padding: 25
              }}
            >
              ADD TO FAVORITES
            </button>
          </div>
        </div>
        <div class="Ula">ulaMhanna</div>
      </div>
    );
  }
}
ReactDOM.render(<Flowers4002 />, document.getElementById("Flowers4002"));
