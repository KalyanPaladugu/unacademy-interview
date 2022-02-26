import React from 'react'

 const HOC=(Component)=>{
    return (
        class  extends React.Component {
            state={
                auth:false
            }
            render(){
                return (
                    <div>
                        {this.state.auth ? <Component name="Kalyan"/> : <h1>Please Login</h1>}
                    </div>
                )
            }
        }
    )
}

export default HOC;