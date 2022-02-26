import React, { Component } from 'react'

export default class Counter extends Component {

    componentDidMount(){
        console.log("componentDiddMount")
    }
    componentWillUnmount(){
        console.log("Unmount")
    }
    componentDidUpdate(previousprops,prevoiusstate){
        if(previousprops.number !== this.props.number){
            console.log("Update")
        }


    }

    
  render(props) {
    return (
      <div>{this.props.number}</div>
    )
  }
}
