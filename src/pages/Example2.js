import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
function Index() {
    useEffect(() => {
        //返回空函数之前代表componentDidMount，componentDidUpdate
        console.log('useEffect=>老弟，你来了！Index页面')
        //返回空函数，并传第二个参数为空数组代表componentWillMount
        return () => {
            console.log('老弟，你走了!Index页面')
        }
    }, [])
    return <h2>JSpang.com</h2>
}
function List() {
    useEffect(() => {
        console.log('useEffect=>老弟，你来了！List页面')
    })
    return <h2>list page</h2>
}
function Example2() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log(`useEffect => You clicked ${count}`)
        return () => {
            console.log('==============')
        }
    }, [count])
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => { setCount(count + 1) }}>click me</button>
            <Router>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/list/">列表</Link></li>
                </ul>
                <Route path="/" exact component={Index} />
                <Route path="/list/" exact component={List} />
            </Router>
        </div>
    )
}

export default Example2;