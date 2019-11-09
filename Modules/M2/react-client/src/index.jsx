import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      name :'',
      mobile :'',
      address : '',
      sandwicth : '',
      meat : '',
      updata : []

     
    }
    //this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
        // this.onLick = this.onLick.bind(this);
        this.update = this.update.bind(this);
  }
update(data){
 event.preventDefault();
this.state.update = data;
console.log('this is the laste order ',this.state.update[this.state.update.length-1].meat)
alert("your order will be after one hour it cost : "+this.state.update[this.state.update.length-1].meat+this.state.update[this.state.update.length-1].sandwicth)
}
onChange(e){
     e.preventDefault();
this.setState({[e.target.name]: e.target.value});
 // console.log(e.target.value,'ghffgf')
// console.log(this.state)

}
// onLick(e){
//   e.preventDefault();
//   this.setState({[e.target.name]: e.target.value});


// }
submit(event){
   event.preventDefault();
console.log(this.state)
var a = this.state
      $.ajax({
        url: '/items', 
        type : "post",
        data : a , 
        dataType : 'json',
        success: (data) => {
          console.log("success send!!!")},
        error: (err) => {
          console.log('err', err);
        }
      });

    }
    showing(event){
      event.preventDefault();
      var that = this;
      console.log('WE WILL showing TO YOU data')
      $.ajax({
        url:'/items',
        type : "get",
        dataType:'json',
        success:(data)=>{
         that.update(data);
          console.log(data,"success getting data")
        },
          error: (err) => {
          console.log('err', err);
        }

        
      })
      
    }
  // componentDidMount() {
  //   // console.log(event)
  //   // console.log(this.state , "this is the data");

  //  }

  render () {
    return (
  
      <form >
  <label >
          Name
          <input type="text" name="name" onChange = {this.onChange.bind(this)} />
        </label>
         <br/>
      <label>
          Mobile
          <input type="text" name="mobile" onChange = {this.onChange.bind(this)}/>
        </label>
        <br/>
        <label>
          Address
          <input type="text" name="address" onChange = {this.onChange.bind(this)}/>
        </label>
        <br/>
        
          <label>
            <input type="radio" name ="meat" value="50"  onChange = {this.onChange.bind(this)} />
            Meat
          </label>
        <br/>
       
          <label>
            <input type="radio"  name ="sandwicth" value="25"  onChange = {this.onChange.bind(this)}/>
            Sandwicth
          </label>
      
        <br/>


        <button onClick = {this.submit} style={{backgroundColor: "blue",color:"orange",width: 120,height:50,font:60 }}>Submit Applay</button>
        <br/>
           <button onClick = {this.showing.bind(this)} style={{backgroundColor: "lightgreen",color:"black",width: 120,height:50,font:60 }}> My order</button>

 


</form>



        
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));