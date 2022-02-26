import React from 'react'
import Counter from './Counter'
class Main extends React.Component{
  
   constructor(props) {
     super(props)
   
     this.state = {
        number:0
     }
   }
  
  increment(){
      this.setState({
          number:this.state.number+1
      })
  }
render (){
  return (
  <>
   <button onClick={()=> {this.increment()}}>Increment </button>
  {/* {this.state.number} */}
   <Counter  number={this.state.number}/>
  </>)
}
}

export default Main