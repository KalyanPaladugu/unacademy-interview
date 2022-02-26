import React, { Component } from 'react'

export default class Mounting extends Component {
     constructor(props) {
         super();
        //  this.submit=this.submit.bind(this);
         this.state={
            show:true
         }
      console.log("inconstructor")
     }
    static getDerivedStateFromProps(props,state){
        console.log("in state from props")
        return state
    }

    componentDidMount(){
        console.log("in didmount");
    }
    submit(){
        alert("Data submitted")
    }
    hide(){
        this.setState({
            show:false
        })
    }
    render() {
        console.log("render");
    return (
        <>
            <div>Mounting</div>
            <button onClick={this.submit.bind(this)}>submit</button>
            <button onClick={()=> this.submit}>submit</button>
           {this.state.show && <button onClick={this.hide.bind(this)}>Click for hide</button>}
             {/* {this.state.user ? <h1>{this.state.username}</h1> :null} */}
      </>
    )
  }
}
