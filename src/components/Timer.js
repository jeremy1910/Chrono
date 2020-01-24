import React, { useState, useEffect } from 'react'

function Timer({ Count, Start, OnStop, ClassName, Reset }) {

    const [count, setCount] = useState(Count)
    const [instance, setInstance] = useState(null)

    const handler = () => {
        setCount((prev) => prev + 1)
    }



    useEffect(() => {

        if (Start && instance === null) {
            setInstance(setInterval(handler, 1000))
        
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



    return (
        <span className={ClassName}>
            {count}
        </span>
    )
}

export default Timer
