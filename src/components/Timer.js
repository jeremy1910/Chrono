import React, { useState, useEffect } from 'react'

function Timer({ Count, Start, OnStop, ClassName, Reset }) {

    const [count, setCount] = useState(Count)
    const [instance, setInstance] = useState(null)

    const handler = () => {
        setCount((prev) => prev + 10)
    }



    useEffect(() => {

        if (Start && instance === null) {
            setInstance(setInterval(handler, 10))
        
        }
        if (!Start && instance) {
            clearInterval(instance)
            setInstance(null)
        }

        return () => {
            clearInterval(instance)
        }
    }, [Count, Start])

    useEffect(() => {
        if(Reset){
            setCount(0)
        }
    }, [Reset])

    useEffect(() => {
        console.log('ok')
        setCount(Count)
    }, [Count])

  const formatCount = () => {
    const timeFormated = new Date(count)
    return `${timeFormated.getSeconds()}:${(timeFormated.getMilliseconds()/10) < 10 ? '00'  : '' + timeFormated.getMilliseconds()/10}`
  }

    return (
        <span className={ClassName}>
            {formatCount()}
        </span>
    )
}

export default Timer
