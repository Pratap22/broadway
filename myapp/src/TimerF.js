import { useEffect, useState } from "react"

const A = () => {
    useEffect(() => {
        console.log("componentDidMount")

        return () => {
            console.log("componentWillUnmount")
        }
    }, [])

    return <div>A</div>
}

const TimerF = () => {
    const [count, setCount] = useState(0)
    // componentDidMount
    // If empty [] -> Calls only once
    useEffect(() => {
        console.log("Use Effect")

        const timer = setInterval(() => {
            console.log("Interval")
            setCount(c => c + 1)
        }, 1000);

        // Calls when the component is unmounting / destroyed / removed
        return () => {
            console.log("componentWillUnmount")
            clearInterval(timer)
        }
    }, [])

    //  Calls each time when the provided dependency changes
    useEffect(() => {
        console.log("Sandesh")
    }, [count])

    // Calls each time when there is a state changes
    useEffect(() => {
        console.log("Satyam")
    })

    return <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Timer F</h2>
        <h1>Timer: {count}  seconds</h1>
    </div>
}

export default TimerF