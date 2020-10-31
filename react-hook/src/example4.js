import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Index() {
    useEffect(() => {
        console.log('useEffect=>老弟，你来了！Index页面');
        return ()=>{
            console.log('老弟，你离开了Index页面')
        }
    },[])
    return <h2>Index.page</h2>;
}

function List() {
    useEffect(() => {
        console.log('useEffect=>老弟，你来了！List页面');
        return ()=>{
            console.log('老弟，你离开了List页面')
        }
    })
    return <h2>List.Page</h2>;
}

function Example3() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log(`useEffect=> 点击了${count}`);
        return ()=>{
            console.log('====================')
        }
    },[count])
    return (
        <div>
            <div>
                <p>点击次数: {count}</p>
                <button onClick={() => { setCount(count + 1) }}>点我</button>
            </div>
            <Router>
                <ul>
                    <li> <Link to="/">首页</Link> </li>
                    <li><Link to="/list/">列表</Link> </li>
                </ul>
                <Route path="/" exact component={Index} />
                <Route path="/list/" component={List} />
            </Router>
        </div>
    )
}
export default Example3;