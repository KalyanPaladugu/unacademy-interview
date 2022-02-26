import React, { useState } from 'react'
import HookCounter from './HookCounter'

export default function Hook() {
    const [count,setCount]=useState(0)

   function incrment(){
        setCount(
            count+1
        )
        }
  return (
    <div>
        <button onClick={incrment}>increment</button>
   {/* {count} */}

   {/* <HookCounter  counter={count} /> */}
    </div>
  )
}
