import React, { useEffect } from 'react'

export default function HookCounter(props) {
    useEffect(()=>{
        console.log("components")
        return ()=>{
            console.log("unmount")
        }
    },[props.counter])
  return (
    <div>
        {props.counter}
    </div>
  )
}
