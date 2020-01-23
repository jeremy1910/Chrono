import React, { useState, useEffect } from 'react'

function Timer({ Count, Start, OnStop, OnFirstStart, ClassName }) {

    const [count, setCount] = useState(Count)
    const [instance, setInstance] = useState(null)

    const handler = () => {
        setCount((prev) => prev - 1)
    }



    useEffect(() => {

        if (Start && instance === null) {
            setInstance(setInterval(handler, 1000))
            OnFirstStart()
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
        setCount(Count)
    }, [Count])


    useEffect(() => {
        if (count <= 0) {
            clearInterval(instance)
            setInstance(null)
            OnStop()
        }
    }, [count])



    return (
        <span className={ClassName}>
            {count}
        </span>
    )
}

export default Timer
