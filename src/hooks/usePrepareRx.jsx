import { useEffect, useState } from "react"

export const countPrepare = () => {
    const [time,setTime] = useState(3)
    const [readyRx,setReadyRx] = useState(false)

    useEffect(() => {
        if(time === 0){
           setReadyRx(true)
           return
        }

        const interveid = setInterval(() => {
            setTime((prev) => prev - 1)
        },1000)

        return () => clearInterval(interveid)
    },[time])

    const startCountdown = () => {
        setTime(3); 
        setReadyRx(false); 
    };


    return { time, readyRx, startCountdown}
}