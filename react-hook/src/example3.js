import React, { useState, useEffect } from 'react';

function Example3() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log(`useEffect=> 点击了${count}`);
    })
    return (
        <div>
            <p>点击次数: {count}</p>
            <button onClick={() => { setCount(count + 1) }}>点我</button>
        </div>
        
    )
}
export default Example3;