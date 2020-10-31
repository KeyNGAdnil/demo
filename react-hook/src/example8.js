import React, { useState, useMemo } from 'react'



function ChildComponent({ c, n }) {
    let res = useMemo(() => {
        return { c, n }
    },[c,n])
    return (
        <>
            <h2>children count{res.c}:num{res.n}</h2>
        </>
    )
}

function Example8() {
    const [count, setCount] = useState(0)
    const [num, setNum] = useState(0)
    return (
        <>
            <h1>parent count{count}:num{num}</h1>
            <ChildComponent c={count} n={num} />
            <button onClick={() => setCount(count+1)}>count++</button>
            <button onClick={() => setNum(num+1)}>num++</button>
        </>
    )
}
export default Example8