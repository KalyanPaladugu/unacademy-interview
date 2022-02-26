import React, { PureComponent } from 'react'

export default class Pure extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
     
    }
    componentDidMount(){
        setInterval(()=>{
            console.log("Interval invoked")
           this.setState({
            count:1
           })
        },1000)
    }
  render() {
    console.log("Pure Component")
    return (
        
      <div>
          {this.state.count}
         
      </div>
    )
  }
}
