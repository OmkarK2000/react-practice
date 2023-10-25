import { useEffect } from "react"
import { useState } from "react"

const Timer = () => {

    const [time, setTime] = useState(10)

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setTime(time-1)
        },1000)

        if(time === 0){
            clearTimeout(timer)
        }
    },[time])

  return (
        <>
            Time remining : {time} seconds
        </>
  )
}

export default Timer