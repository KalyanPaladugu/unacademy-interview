import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:"",
         password:""
      }
    }


    changeUSername(e){
      this.setState({username:e.target.value})
    }
    changePassword(e){
         this.setState({password:e})
    }
    submit=(e)=>{
       e.preventDefault()
     

      fetch('https://jsonplaceholder.typicode.com/users').
      then(response => response.json())
      .then(data => {
        console.log(data)
        if(data.filter(user => 
            user.username === this.state.username 
        ).length>0 )
        {
            alert("success")
        }
        else {
            alert("Failure")
        }

    }
      
      )
    }
  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
            <input type="text" value={this.state.username}
            onChange={(e)=>this.changeUSername(e)} placeholder="Username" />
            <input type="password" value={this.state.password} 
            onChange={(e)=> this.changePassword(e.target.value)}
            placeholder="Password" />
          <br></br>
          <br/>
         <input type="submit" value="login"  />
        </form>
      </div>
    )
  }
}
